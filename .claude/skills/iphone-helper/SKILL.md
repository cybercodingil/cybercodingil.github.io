---
name: iphone-helper
description: >-
  iPhone/iPad technician over a USB cable. Use when the user connects an iOS
  device by USB and wants to diagnose or fix software problems, identify the
  exact model/firmware, read logs & crash reports, check battery health, recover
  a device stuck in a bootloop/recovery/DFU, restore or update with an official
  IPSW, or jailbreak a device THEY OWN. Also covers the legitimate owner path for
  a locked device (DFU restore, official Activation Lock removal). Triggers:
  "אייפון", "iphone", "ipad", "ios", "idevice", "libimobiledevice", "DFU",
  "recovery mode", "IPSW", "jailbreak", "stuck on apple logo", "המכשיר תקוע".
---

# iPhone Helper — USB device technician

A workflow for diagnosing and repairing iPhone/iPad devices over USB from a
computer. iOS is far more locked down than Android: most repair happens through
**Recovery/DFU mode + an official IPSW**, and diagnostics through the
`libimobiledevice` toolkit. Walk the user through each step; the device will
show "Trust this computer?" prompts they must accept.

**Bundled resources (load when relevant):**
- `scripts/diagnose.sh` — one read-only command that collects model, iOS
  version, battery health, storage and recent crashes. Run first on any
  "something's wrong" request.
- `references/ipsw-and-tools.md` — official IPSW/firmware sources, the
  restore/diagnostic/jailbreak toolchain, and model↔identifier↔chip tables.
- `references/troubleshooting.md` — symptom→cause→fix tables and a restore
  decision tree (Recovery vs DFU vs update-restore).

## Scope and boundary (read first)

This skill assumes **the user owns, or is authorized to service, the device.**

- ✅ Diagnose & fix software, identify model/firmware, read logs/crashes, check
  battery health, recover bootloops, restore/update with official IPSW,
  jailbreak your own device, and DFU-restore to clear a forgotten passcode on
  your own device.
- ❌ **Do NOT** attempt to bypass **Activation Lock / iCloud lock**, an
  **Apple ID**, a **passcode**, or **Screen Time / MDM** in a way that keeps the
  device usable without the owner's credentials. That is Apple's anti-theft
  system and the toolchain used to open stolen/found iPhones — this skill does
  not provide it. For a locked device the only path here is **owner recovery**
  (DFU restore, which wipes and still re-asks the original Apple ID, or Apple's
  official Activation Lock removal with proof of ownership).

If a request is clearly about getting into a device the user doesn't own,
decline and point them at Apple Support / the owner's iCloud account.

## 0. Prerequisites — install the toolkit

The cross-platform, open-source stack is **libimobiledevice** + **idevicerestore**.

```bash
# Debian/Ubuntu
sudo apt-get update && sudo apt-get install -y \
  libimobiledevice6 libimobiledevice-utils usbmuxd ideviceinstaller idevicerestore
# Fedora
sudo dnf install -y libimobiledevice libimobiledevice-utils usbmuxd idevicerestore
# Arch
sudo pacman -S libimobiledevice usbmuxd
# macOS (Finder/Apple Configurator are built-in alternatives)
brew install libimobiledevice ideviceinstaller idevicerestore
```

`usbmuxd` must be running (it multiplexes the USB connection). On macOS, Apple's
own **Finder** (restore/update) and **Apple Configurator 2** (DFU restore, bulk)
are first-class alternatives and often the easiest path.

## 1. Connect & trust

Plug in with a data Lightning/USB-C cable. On the iPhone tap **Trust** and enter
the passcode when "Trust This Computer?" appears.

```bash
idevice_id -l                 # list connected device UDIDs ("" if none/usbmuxd down)
idevicepair pair              # establish trust pairing (accept on device)
idevicepair validate
```
- No device listed → bad/charge-only cable, usbmuxd not running
  (`sudo systemctl restart usbmuxd`), or Trust not accepted.
- "Please accept the trust dialog" → unlock the phone and tap Trust.

## 2. Identify the exact model & firmware

```bash
ideviceinfo -k ProductType          # identifier, e.g. iPhone14,2  -> maps to a marketing name
ideviceinfo -k ProductVersion       # iOS version, e.g. 17.5.1
ideviceinfo -k BuildVersion         # build, e.g. 21F90
ideviceinfo -k DeviceName
ideviceinfo -k ModelNumber          # e.g. MQ9X3  (region/SKU)
ideviceinfo -k HardwareModel        # board, e.g. D63AP
ideviceinfo -k SerialNumber
ideviceinfo -k UniqueChipID          # ECID (needed for some restore/SHSH work)
ideviceinfo -k ActivationState       # Activated / Unactivated
ideviceinfo -q com.apple.mobile.battery   # battery details
# ProductType -> name/chip lookup: references/ipsw-and-tools.md
```

The **ProductType** (e.g. `iPhone14,2`) + **BuildVersion** is what you use to
download the exact matching IPSW and to know which jailbreak applies (A-series
chip). Record it before any restore.

## 3. Diagnose software problems

```bash
idevicesyslog                         # live system log; reproduce the bug and read it
idevicecrashreport -e ./crashes       # pull crash reports to ./crashes
idevicediagnostics ioregentry         # low-level hardware/IO registry
idevicediagnostics diagnostics All    # built-in diagnostics dump
ideviceinfo -q com.apple.mobile.battery -k BatteryCurrentCapacity   # % now
ideviceinstaller -l                   # list installed 3rd-party apps
idevice_id -l && ideviceinfo -k DiskUsage 2>/dev/null                # storage
```

Battery health (cycle count / wear) is in the battery domain and in
`idevicediagnostics`. Many "random reboot / shutdown at 30%" cases are a worn
battery — check before chasing software.

Software-level fixes you can do without a wipe:
- Reinstall a misbehaving app: `ideviceinstaller -U <bundleID>` then reinstall
  from the App Store (sideload only for apps the user owns — see tools ref).
- Offload storage, remove profiles: guide the user through Settings (iOS doesn't
  expose package management like Android `pm`).
- Update iOS in place (fixes many bugs) — §4 "update, don't erase".

## 4. Recover a stuck device / restore / update

Escalate least-destructive first. **"Update" restores keep data; "Restore"
erases.**

1. **Force restart** (clears a soft hang, no data loss):
   - Face ID / iPhone 8+: VolUp, VolDown, then hold Side button to Apple logo.
   - iPhone 7: hold VolDown + Side.
   - iPhone 6s/SE1/older: hold Home + Side.
2. **Recovery Mode** — for stuck-on-Apple-logo / boot loop; lets you update or
   restore from a computer:
   - Put the device in Recovery (force-restart combo but **keep holding** until
     the "connect to computer" screen), then in Finder/Apple Configurator choose
     **Update** (tries to fix iOS, keeps data) before **Restore** (erases).
3. **DFU Mode** — deepest recovery, reflashes everything (always erases):
   - Enter DFU (precise timing, model-specific — see troubleshooting.md), then:
   ```bash
   idevicerestore -l ./iPhone14,2_17.5.1_21F90_Restore.ipsw   # -l = latest signed check
   # or let it fetch the latest signed IPSW automatically:
   idevicerestore -l --latest
   ```
   Use **Update** semantics (`idevicerestore` without `-e`) to try to preserve
   data; add `-e` only for a full erase restore.
4. IPSW must be **currently signed by Apple** (you generally can't downgrade to
   an unsigned iOS). Check signing status and get the right file from the
   sources in `references/ipsw-and-tools.md`.

## 5. Jailbreak a device you own

Jailbreaking depends on the **chip generation**, not just iOS version, and may
disable Apple Pay/some apps and reduce security. Confirm ownership and back up.

- **checkm8-based (checkra1n / palera1n):** hardware bootrom exploit for
  **A5–A11** devices (iPhone 5s … iPhone X / 8). Works largely independent of
  iOS version; semi-tethered. `palera1n` is the current maintained tool.
- **Newer chips (A12+):** rely on software exploits that exist only for specific
  iOS ranges (e.g. Dopamine/XNU-based jailbreaks) — availability is version-by-
  version; check current support for the exact `ProductVersion`.
- **App sideloading (no jailbreak):** **AltStore** / **Sideloadly** install
  owner-provided `.ipa` apps with the user's Apple ID (7-day re-sign on free
  accounts). Good for installing your own apps without jailbreaking.

Always: capture which iOS/build is **signed** before restoring, and keep a
backup — jailbreaks can require a clean restore to undo.

## 6. A locked device (owner recovery only)

All paths require proving ownership and **erase the device**:

- **Forgotten passcode:** DFU/Recovery **Restore** wipes the device; on
  reactivation it asks for the **original Apple ID** (Activation Lock) — this is
  anti-theft and is expected. The owner signs in with their own credentials.
- **Remove Activation Lock the official way:** owner signs in at
  `icloud.com/find` (or Settings on another of their devices) → select the
  device → **Remove from Account**. Or Apple Support with **proof of purchase**.
- **Managed/MDM or Screen Time locked:** recover through the organization's MDM
  admin or the owner's Screen Time passcode recovery — not a bypass tool.

Do not go past this into Activation Lock / passcode circumvention — see the
boundary in the Scope section.

## Quick reference

| Goal | Command |
|---|---|
| List devices | `idevice_id -l` |
| Exact model id | `ideviceinfo -k ProductType` |
| iOS version/build | `ideviceinfo -k ProductVersion` / `-k BuildVersion` |
| Live log | `idevicesyslog` |
| Pull crash reports | `idevicecrashreport -e ./crashes` |
| Battery info | `ideviceinfo -q com.apple.mobile.battery` |
| List apps | `ideviceinstaller -l` |
| Restore/unbrick (DFU) | `idevicerestore -l --latest` |
| One-shot diagnostic | `bash scripts/diagnose.sh` |

Always: identify the exact ProductType first, confirm the IPSW is signed, back
up before anything destructive, and prefer **Update** over **Erase/Restore**.

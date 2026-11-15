---
name: android-helper
description: >-
  Android device technician over a USB cable. Use when the user connects an
  Android phone/tablet by USB and wants to diagnose or fix software problems,
  identify the exact model/firmware, remove a soft-brick or bootloop, sideload
  apps/OTAs, debloat, pull logs, or root a device THEY OWN (bootloader unlock +
  Magisk). Also covers the legitimate owner-recovery path for a locked device
  (bootloader unlock + factory reset, official account recovery). Triggers:
  "אנדרואיד", "android", "adb", "fastboot", "root", "bootloop", "brick",
  "logcat", "phone stuck", "device won't boot", "המכשיר לא נדלק", "לזהות דגם".
---

# Android Helper — USB device technician

A workflow for diagnosing and repairing Android devices connected over USB with
`adb` and `fastboot`. Walk the user through it step by step; most commands need
them to tap/confirm something on the device.

**Bundled resources (load when relevant):**
- `scripts/diagnose.sh` — one command that collects identity, battery, storage,
  memory, crashes, packages and connectivity (read-only). Run it first on any
  "something's wrong" request: `bash scripts/diagnose.sh`.
- `references/firmware-sources.md` — official firmware, flashing tools and
  bootloader-unlock portals for every major OEM (Pixel, Samsung, Xiaomi,
  OnePlus/OPPO/realme, Motorola, Sony, ASUS, Huawei/Honor, Nothing, MTK/Unisoc/
  Qualcomm-EDL), plus deep-recovery modes.
- `references/troubleshooting.md` — symptom→cause→fix tables and a reflash
  decision tree covering connection, boot, app, storage and hardware issues.

## Scope and boundary (read first)

This skill assumes **the user owns, or is authorized to service, the device in
front of them.** Everything here works on your own hardware.

- ✅ Diagnose & fix software, identify model, recover bootloops/soft-bricks,
  sideload, debloat, pull logs, root your own device, factory-reset to clear a
  forgotten passcode on your own device.
- ❌ **Do NOT** attempt to bypass a lock screen, PIN, pattern, or Factory Reset
  Protection (FRP / Google account lock) in a way that **keeps the data** on a
  device the user cannot authenticate to. That is the toolchain used to open
  stolen/found phones, and this skill does not provide it. For a locked device
  the only path here is **owner recovery**: bootloader unlock + factory reset
  (wipes everything) or the manufacturer's official account-recovery flow, both
  of which require the user to prove ownership.

If a request is clearly about getting into a device the user doesn't own,
decline and point them at the manufacturer / carrier recovery process.

## 0. Prerequisites — install the tools

`adb` (Android Debug Bridge) and `fastboot` ship in Android **platform-tools**.

```bash
# Debian/Ubuntu
sudo apt-get update && sudo apt-get install -y android-tools-adb android-tools-fastboot
# Fedora
sudo dnf install -y android-tools
# Arch
sudo pacman -S android-tools
# macOS
brew install android-platform-tools
```

Or download the official zip (always the newest) from
`https://developer.android.com/tools/releases/platform-tools` and run the
binaries from the extracted folder.

**Linux USB permissions:** if `adb devices` shows `no permissions`, add udev
rules and re-plug:
```bash
sudo usermod -aG plugdev "$USER"
# /etc/udev/rules.d/51-android.rules — one line per vendor id, e.g. Google 18d1:
echo 'SUBSYSTEM=="usb", ATTR{idVendor}=="18d1", MODE="0660", GROUP="plugdev"' | sudo tee /etc/udev/rules.d/51-android.rules
sudo udevadm control --reload-rules && sudo udevadm trigger
```
(`lsusb` shows the 4-hex vendor id for the attached phone.)

## 1. Connect & confirm the device

On the phone: **Settings → About phone → tap "Build number" 7×** to unlock
Developer options, then **Settings → System → Developer options → enable USB
debugging**. Plug in USB, then:

```bash
adb kill-server && adb start-server
adb devices -l          # accept the RSA "Allow USB debugging?" prompt on the phone
```

- `device`  → ready.
- `unauthorized` → the user hasn't tapped **Allow** on the phone yet (check
  "always allow").
- `offline` → re-plug, try a different cable/port (many issues are a
  charge-only cable), or `adb reconnect`.
- empty list → driver/permission issue (see §0) or debugging not enabled.

## 2. Identify the exact model & firmware

```bash
adb shell getprop ro.product.manufacturer
adb shell getprop ro.product.model          # marketing-ish model, e.g. "SM-G991B"
adb shell getprop ro.product.device         # codename, e.g. "o1s" — use THIS for firmware hunting
adb shell getprop ro.product.name
adb shell getprop ro.build.version.release  # Android version
adb shell getprop ro.build.version.sdk      # API level
adb shell getprop ro.build.display.id       # build id / fingerprint
adb shell getprop ro.build.fingerprint
adb shell getprop ro.boot.bootloader        # bootloader version
adb shell getprop ro.boot.verifiedbootstate # green = locked/stock, orange/yellow = unlocked/custom
adb shell getprop ro.boot.flash.locked      # 1 locked, 0 unlocked (vendor-dependent)
adb shell getprop ro.hardware               # SoC family hint
# One-shot dump of everything:
adb shell getprop | grep -Ei 'model|device|manufacturer|version|fingerprint|bootloader|hardware|carrier'
```

The **codename** (`ro.product.device`) is what you search for to find the right
stock firmware, TWRP build, kernel, and Magisk-patchable `boot.img`. Record
manufacturer + codename + Android version before doing anything risky.

## 3. Diagnose software problems

```bash
# Live logs, filtered to errors; reproduce the bug then read the stack
adb logcat *:E
adb logcat --pid=$(adb shell pidof -s com.some.app)   # one app only
adb logcat -b crash                                   # crash buffer
adb bugreport ./bugreport.zip                         # full snapshot for deep analysis

# Resources
adb shell dumpsys battery                 # health, level, charging, temperature
adb shell dumpsys batterystats | head     # what's draining power
adb shell df -h                           # storage full? a common cause of weirdness
adb shell dumpsys meminfo                 # RAM pressure / leaks
adb shell top -n 1                        # live CPU hogs
adb shell dumpsys activity activities | grep -i mResumedActivity   # foreground app

# Apps & packages
adb shell pm list packages -3             # user-installed (third-party) apps
adb shell pm list packages -d             # disabled packages
adb shell dumpsys package <pkg> | grep -Ei 'versionName|lastUpdate|flags'
```

Common software fixes:
```bash
adb shell pm clear <pkg>                  # wipe app data+cache (fixes most misbehaving apps)
adb shell pm disable-user --user 0 <pkg>  # disable without uninstall (reversible)
adb shell pm enable <pkg>
adb shell pm uninstall -k --user 0 <pkg>  # remove bloatware for current user (keeps APK; reversible by install-existing)
adb shell cmd package install-existing <pkg>   # bring a user-0-removed app back
adb install -r -d app.apk                 # (re)install / downgrade an APK
adb install-multiple base.apk split_*.apk # split APKs (modern apps)
```
Debloat safely: only `disable-user`/`uninstall --user 0` **third-party or
clearly-optional** packages; never touch `com.android.*`, `com.google.android.gms`
core, telephony, or SystemUI, or you cause boot/RIL breakage.

## 4. Recover a soft-brick / bootloop / stuck device

Order of escalation, least destructive first.

1. **Force reboot:** hold Power+VolDown ~10–20 s (combo varies by OEM).
2. **Boot to Recovery** and wipe **cache** (not data) — clears a corrupt cache
   that blocks boot:
   ```bash
   adb reboot recovery      # or hardware key combo; navigate with volume keys
   ```
3. **Sideload the official OTA** (repairs system without wiping user data) — in
   stock recovery choose "Apply update from ADB":
   ```bash
   adb sideload full-ota-package.zip
   ```
   Get the OTA from the manufacturer (Google Pixel OTA/factory images,
   Samsung via official tools, Xiaomi recovery ROM, etc.) matched to the
   codename from §2.
4. **Fastboot / bootloader** for deeper repair:
   ```bash
   adb reboot bootloader        # or key combo
   fastboot devices
   fastboot getvar all          # confirms product, unlock state, slot (a/b)
   fastboot reboot
   ```
5. **Flash stock firmware** (last resort; procedure is OEM-specific):
   - Pixel/Nexus: `flash-all.sh` from the factory image, or the Android Flash
     Tool in-browser.
   - Samsung: Odin/Heimdall with the firmware for your exact CSC/model.
   - Xiaomi: MiFlash with the fastboot ROM.
   - A/B devices: mind the active slot (`fastboot --set-active=a`).
   Flashing the wrong model's firmware is the #1 way to **hard-brick** — always
   match the codename and region exactly.

## 5. Root a device you own

Rooting requires unlocking the bootloader, which **erases all user data** and
may void warranty / trip security attestation (banking/Google Pay may stop
working). Confirm the user owns the device and has a backup.

```bash
# 1. Allow OEM unlocking: Developer options → "OEM unlocking" ON (and sign in /
#    wait out any manufacturer waiting period; some need an unlock code from the
#    vendor's site — Xiaomi, Motorola, Sony).
# 2. Unlock the bootloader (WIPES THE DEVICE):
adb reboot bootloader
fastboot flashing unlock         # older/other devices: fastboot oem unlock
#    confirm on-screen with volume+power, device factory-resets.
```

Then root with **Magisk** (systemless, the current standard):
1. Install the **Magisk** app APK on the phone.
2. Get the **`boot.img`** (or `init_boot.img` on newer devices) from the **exact
   stock firmware** matching §2, copy it to the phone.
3. In Magisk → **Install → Select and Patch a File** → pick that image →
   produces `magisk_patched-*.img`. Pull it back:
   ```bash
   adb pull /sdcard/Download/magisk_patched-XXXX.img .
   ```
4. Flash the patched image (don't erase, just flash the boot partition):
   ```bash
   adb reboot bootloader
   fastboot flash boot magisk_patched-XXXX.img     # or 'init_boot' on devices that use it
   fastboot reboot
   ```
Open Magisk; it should report installed. Use **Zygisk + DenyList** to hide root
from specific apps. To fully unroot: restore the stock `boot.img`
(`fastboot flash boot stock_boot.img`) or use Magisk → Uninstall.

Alternative/legacy: TWRP custom recovery for devices Magisk-direct-flash doesn't
suit — `fastboot flash recovery twrp.img`, then flash Magisk zip from TWRP.

## 6. A locked / forgotten-passcode device (owner recovery only)

Supported paths, all of which require proving ownership and **lose the data on
the device**:

- **Factory reset via recovery:** `adb reboot recovery` (or key combo) → "Wipe
  data/factory reset". Afterward the device asks for the **previously-synced
  Google/Samsung account** (FRP) — this is anti-theft and is expected; the owner
  signs in with their own credentials.
- **Find My Device / Find My Mobile:** sign in to the owner's Google
  (`google.com/android/find`) or Samsung account and erase remotely.
- **Manufacturer account recovery:** if the owner forgot the *account* tied to
  FRP, recover it through Google/Samsung's official account-recovery flow, not a
  bypass tool.

Do not go past this into lock-screen or FRP circumvention — see the boundary in
the Scope section.

## Quick reference

| Goal | Command |
|---|---|
| List devices | `adb devices -l` |
| Exact model/codename | `adb shell getprop ro.product.device` |
| Live error log | `adb logcat *:E` |
| Full diagnostic snapshot | `adb bugreport out.zip` |
| Reset a misbehaving app | `adb shell pm clear <pkg>` |
| Remove bloatware (reversible) | `adb shell pm uninstall -k --user 0 <pkg>` |
| Repair without wipe (OTA) | `adb sideload ota.zip` |
| Enter bootloader | `adb reboot bootloader` / `fastboot getvar all` |
| Unlock bootloader (wipes) | `fastboot flashing unlock` |
| Flash patched boot (root) | `fastboot flash boot magisk_patched.img` |

Always: identify the exact model first, back up before anything destructive, and
match firmware to the codename.

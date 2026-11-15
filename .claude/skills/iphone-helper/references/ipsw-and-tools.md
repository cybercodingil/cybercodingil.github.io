# IPSW sources, tools & model tables

Match the IPSW to the exact **ProductType** (`ideviceinfo -k ProductType`) and
pick a **currently-signed** build — Apple normally blocks installing/downgrading
to unsigned iOS. Flashing is bootrom-verified, so a wrong or tampered IPSW just
fails rather than bricking, but always use trusted sources.

## Where to get IPSW firmware
- 🌐 **ipsw.me** — per-model IPSW links **and live signing status** (green =
  signed/installable). The quickest way to see what you can restore to.
- 🌐 **Apple's own CDN** — `idevicerestore --latest` and Finder/Apple
  Configurator download the signed IPSW directly from Apple; no third-party site
  needed for the latest version.
- 🌐 **appledb.dev** — detailed build/version database (betas, historical builds,
  signing windows).
- Beta firmware: Apple Developer / public beta profiles via `beta.apple.com`.

> Only ipsw.me/appledb for *locating* files; the bytes should come from Apple's
> CDN. Don't use random mirrors for IPSWs.

## Core toolchain
| Tool | Purpose | Platform |
|---|---|---|
| **libimobiledevice** (`ideviceinfo`, `idevice_id`, `idevicesyslog`, `idevicepair`, `idevicecrashreport`, `idevicediagnostics`, `idevicebackup2`) | Diagnostics, logs, pairing, backup | Linux/macOS/Win |
| **ideviceinstaller** | List/install/uninstall apps (`.ipa` you own) | Linux/macOS/Win |
| **idevicerestore** | Restore/update with an IPSW from CLI (Recovery/DFU) | Linux/macOS/Win |
| **usbmuxd** | USB multiplex daemon (must run for any of the above) | Linux/macOS |
| **Finder** (macOS 10.15+) / **iTunes** (Win) | Official update/restore GUI | macOS/Win |
| **Apple Configurator 2** | DFU restore, supervise, bulk; great unbrick GUI | macOS |
| **Apple Devices app** | Modern Windows restore/backup | Windows |

## Jailbreak / sideload tools (owned devices)
| Tool | Covers | Notes |
|---|---|---|
| **palera1n** | A9–A11 (checkm8 bootrom), modern iOS | Successor to checkra1n; semi-tethered |
| **checkra1n** | A7–A11 (legacy) | Older, up to iOS 14.x range |
| **Dopamine / other XNU jailbreaks** | A12+ on specific iOS ranges | Availability is version-specific — verify for the exact build |
| **AltStore** / **SideStore** | Sideload your own `.ipa`, no JB | 7-day re-sign (free Apple ID) |
| **Sideloadly** | Sideload `.ipa`, no JB | Desktop, handles entitlements |

Chip ↔ bootrom exploit: **checkm8 (unpatchable) = A5 through A11.** A12 and newer
have no public bootrom exploit, so those jailbreaks are software-only and tied to
iOS version signing windows.

## ProductType → model → chip (common devices)
| ProductType | Marketing name | Chip |
|---|---|---|
| iPhone8,1 | iPhone 6s | A9 |
| iPhone8,4 | iPhone SE (1st gen) | A9 |
| iPhone9,3 / 9,4 | iPhone 7 / 7 Plus | A10 |
| iPhone10,3 / 10,6 | iPhone X | A11 |
| iPhone10,1 / 10,4 | iPhone 8 | A11 |
| iPhone11,8 | iPhone XR | A12 |
| iPhone11,2 | iPhone XS | A12 |
| iPhone12,1 | iPhone 11 | A13 |
| iPhone12,8 | iPhone SE (2nd gen) | A13 |
| iPhone13,2 | iPhone 12 | A14 |
| iPhone14,2 | iPhone 13 Pro | A15 |
| iPhone14,5 | iPhone 13 | A15 |
| iPhone14,7 | iPhone 14 | A15 |
| iPhone15,2 | iPhone 14 Pro | A16 |
| iPhone15,4 | iPhone 15 | A16 |
| iPhone16,1 | iPhone 15 Pro | A17 Pro |
| iPhone17,3 | iPhone 16 | A18 |
| iPhone17,1 | iPhone 16 Pro | A18 Pro |

(Full, always-current list: appledb.dev. iPad uses `iPadN,M` identifiers the same
way.) If `ProductType` isn't in this table, look it up there rather than guess.

## Backup before anything destructive
```bash
idevicebackup2 backup --full ./ios-backup      # full local backup (encrypted if the device enables it)
idevicebackup2 restore ./ios-backup            # restore it back
```
Or use Finder/iTunes "Back Up Now" (tick **Encrypt local backup** to include
Health/passwords). A restore wipes the device, so confirm a good backup first.

## Golden rules
1. Confirm the target IPSW is **signed** (ipsw.me) before you start — you can't
   roll back to unsigned iOS.
2. Prefer **Update** (Finder) / non-erase restore to keep data; use erase only
   when needed.
3. Keep the device charged and don't unplug during restore.
4. Jailbreak/sideload changes Play-Integrity-equivalent state (some banking/DRM
   apps detect it) and may need a clean restore to undo.
5. Activation Lock is tied to the owner's Apple ID — removal is an **account**
   action (icloud.com/find) or Apple Support with proof of purchase, never a
   bypass.

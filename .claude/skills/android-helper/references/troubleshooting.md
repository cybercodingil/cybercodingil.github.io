# Troubleshooting playbook — symptom → cause → fix

Work top-down: identify the device (§2 of SKILL.md) before anything
destructive. Each entry lists the quickest non-destructive fix first.

## Connection / ADB problems

| Symptom | Likely cause | Fix |
|---|---|---|
| `adb devices` empty | debugging off / bad cable / driver | Enable USB debugging; use a **data** cable; try another port; Windows: install OEM/Google USB driver |
| `unauthorized` | RSA prompt not accepted | Tap **Allow** (check "always") on phone; `adb kill-server && adb start-server`; delete `~/.android/adbkey*` and re-pair if stuck |
| `offline` | stale session / USB mode | `adb reconnect`; re-plug; switch USB mode to "File transfer (MTP)" |
| `no permissions` (Linux) | missing udev rule | Add udev rule + `plugdev` group (SKILL.md §0) |
| device shows then drops | flaky cable/port/power | New cable, rear USB port, avoid hubs |
| works but `adb shell` denied | SELinux / secured OEM | Expected on locked retail; use only non-root commands |

## Boot problems

| Symptom | Cause | Fix |
|---|---|---|
| Bootloop (logo cycles) | corrupt cache / bad update / bad mod | Recovery → **wipe cache**; then `adb sideload` full OTA; if rooted, restore stock boot.img |
| Stuck on boot animation | app/data corruption, full storage | Boot to safe mode; clear space; last resort factory reset |
| "No command" screen | stock recovery idle | Hold **Power + tap VolUp** to open the recovery menu |
| Bootloader/fastboot only | failed flash / wrong slot | `fastboot getvar current-slot`; `fastboot --set-active=a`; reflash matching firmware |
| Dead black screen, no fastboot | hard-brick / deep mode | EDL/BROM/Download mode + official unbrick tool (firmware-sources.md) |
| "Your device is corrupt" (dm-verity) | modified system on locked verity | Reflash stock, or (owned+unlocked) disable verity properly |
| Reboots randomly under load | overheating / failing battery / bad kernel mod | `dumpsys battery` temp/health; remove last Magisk module; check for swollen battery |

## App & software problems

| Symptom | Fix |
|---|---|
| One app keeps crashing | `adb shell pm clear <pkg>`; reinstall `adb install -r -d app.apk`; check `adb logcat -b crash` |
| App won't install ("INSTALL_FAILED_*") | `INSUFFICIENT_STORAGE`→free space; `VERSION_DOWNGRADE`→`adb install -r -d`; `_NO_MATCHING_ABIS`→wrong arch APK; split app→`install-multiple` |
| Preinstalled bloat / ads | `pm uninstall -k --user 0 <pkg>` (reversible with `cmd package install-existing`) |
| "Phone is slow" | `df -h` (full storage), `dumpsys meminfo` (RAM), top CPU hog; clear cache; disable heavy bloat |
| Battery drains fast | `dumpsys batterystats`; check `dumpsys battery` health; find wakelocks; remove rogue app |
| Can't connect to mobile data | check `getprop gsm.sim.state`; reset APN; don't disable telephony packages |
| Google Play "uncertified" / Integrity fails | relock+stock, or hide root (Magisk DenyList/Zygisk) on owned rooted device |
| Settings/SystemUI force-closing | you disabled a core package — re-enable: `pm enable <pkg>` / `cmd package install-existing` |

## Storage, data & files

| Need | Command |
|---|---|
| Free space fast | `adb shell pm trim-caches 999G` ; delete large files under `/sdcard` |
| Back up user data | `adb pull /sdcard ./backup` |
| Push a file | `adb push file.zip /sdcard/Download/` |
| Find big files | `adb shell du -h -d1 /sdcard | sort -h | tail` |
| Screenshot / screen record for a bug report | `adb exec-out screencap -p > s.png` ; `adb shell screenrecord /sdcard/rec.mp4` |

## Recovery & reflash decision tree

```
Device boots to system? ──yes──> fix in software (pm clear / reinstall / debloat / free space)
        │no
        ▼
Reaches stock recovery? ──yes──> wipe cache → adb sideload full OTA → (last) factory reset
        │no
        ▼
Reaches fastboot/bootloader? ──yes──> fastboot getvar all → flash matching stock firmware
        │no
        ▼
Reaches Download/EDL/BROM? ──yes──> OEM unbrick tool + signed firmware (firmware-sources.md)
        │no
        ▼
Truly dead ──> hardware fault (battery/board/charge port) — out of software scope
```

## When to stop and escalate to hardware
No display + no vibration + not detected in any PC mode after trying multiple
cables/ports and a forced long-press reboot → likely a hardware fault (battery,
charge IC, eMMC, board). Software can't fix that; recommend a repair shop and,
if data matters, a chip-off/JTAG specialist.

## Safety reminders
- Confirm ownership before anything that unlocks or wipes.
- Always capture the stock `boot.img`/firmware build **before** modifying.
- Match firmware to codename + region exactly.
- Keep charge > 50% and never unplug mid-flash.

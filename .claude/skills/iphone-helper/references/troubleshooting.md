# iPhone troubleshooting playbook — symptom → cause → fix

Identify the device first (`ideviceinfo -k ProductType` / `-k ProductVersion`).
Prefer non-destructive steps; **Update** before **Restore/Erase**.

## Connection / pairing problems

| Symptom | Cause | Fix |
|---|---|---|
| `idevice_id -l` empty | charge-only cable / usbmuxd down / no Trust | Use a data cable; `sudo systemctl restart usbmuxd`; unlock phone and tap **Trust** |
| "Please accept the trust dialog" | not paired | Unlock device, tap Trust + passcode; `idevicepair pair` |
| device drops / `ERROR: Could not connect` | flaky port/hub, old libimobiledevice | Rear USB port, no hub; update libimobiledevice; re-plug |
| Finder/iTunes doesn't see it | Apple Mobile Device service / driver (Win) | Restart Apple Devices/iTunes; reinstall driver; try another computer |
| macOS: nothing in Finder sidebar | Locations→visibility off | Finder → Settings → Sidebar → show connected devices |

## Boot / stuck problems

| Symptom | Cause | Fix |
|---|---|---|
| Stuck on Apple logo (bootloop) | failed update, corrupt system, bad JB tweak | Force restart; if it repeats → **Recovery Mode → Update** (keeps data); then Restore if needed |
| Spinning wheel forever after update | update hung | Force restart; Recovery → Update |
| Recovery/"connect to computer" screen | mid-update or manual | Finder/Apple Configurator → **Update**; if that fails, DFU → `idevicerestore` |
| Red/黑 iTunes-cable screen | device fell into Recovery | Same as above |
| Random shutdown ~20–40% | **worn battery** | Check battery health/cycles; replace battery (hardware) |
| Reboot loop only with a tweak installed | bad jailbreak tweak | Boot without tweaks (palera1n safe mode) and remove the tweak |
| "Device isn't eligible for the requested build" | IPSW not signed / wrong model | Use a **signed** IPSW matching ProductType (ipsw.me) |

## Entering Recovery vs DFU

**Recovery Mode** (shows cable-to-computer logo; lets you Update or Restore):
- Face ID / iPhone 8+: press VolUp, press VolDown, hold **Side** — keep holding
  past the Apple logo until the recovery screen appears.
- iPhone 7: hold **VolDown + Side** until recovery screen.
- iPhone 6s/SE1/older: hold **Home + Side** until recovery screen.

**DFU Mode** (black screen, deepest reflash — always erases; timing is exact):
- Face ID / 8+: VolUp (quick), VolDown (quick), hold **Side** ~10s until black,
  then **keep Side + add VolDown** ~5s, release Side but **keep VolDown** ~10s.
  Screen stays black = DFU (if Apple logo shows, you held too long — retry).
- iPhone 7: hold **Side + VolDown** ~8s, release Side, keep **VolDown**.
- 6s/older: hold **Home + Side** ~8s, release Side, keep **Home**.

Verify DFU: `idevice_id -l` / `irecovery -q` shows the device; screen black.

## App / software problems

| Symptom | Fix |
|---|---|
| One app crashes on launch | `idevicecrashreport -e ./crashes` to read it; delete + reinstall from App Store; update iOS |
| App won't install / "cannot verify" (sideload) | Re-sign with AltStore/Sideloadly; trust the developer profile in Settings → General → VPN & Device Management |
| Storage full | Offload unused apps, clear Messages/Photos; iOS has no CLI package manager — guide via Settings |
| Stuck "Verifying Update" / update won't finish | Delete the update in Settings → Storage, re-download; or update via Finder |
| Keeps asking for Apple ID password | iCloud session issue — sign out/in on device; check system status |
| Profiles/MDM causing restrictions | Settings → General → VPN & Device Management (owner/admin only) |

## Restore decision tree

```
Boots to iOS? ──yes──> fix in software (reinstall app, free space, update iOS in Settings)
      │no
      ▼
Force restart fixes it? ──yes──> done
      │no
      ▼
Enters Recovery Mode? ──yes──> Finder/Configurator **Update** (keeps data)
      │                               │fails
      │                               ▼
      │                        **Restore** (erases) with signed IPSW
      │no
      ▼
Enter DFU Mode ──> idevicerestore -l --latest  (erases; deepest reflash)
      │still dead after DFU restore
      ▼
Hardware fault (battery, charge port, board, NAND) — out of software scope
```

## When to stop and escalate to hardware
No display, no vibration, not detected in DFU on multiple cables/ports/computers,
or DFU restore fails at a specific % repeatedly (often NAND/board) → hardware
repair. For data recovery on a dead board, a specialist (chip-level) is needed.

## Safety reminders
- Confirm ownership before any restore or Activation Lock action.
- Confirm the IPSW is **signed** and matches ProductType.
- Back up first (`idevicebackup2 backup --full`) — Restore erases everything.
- Prefer **Update** over **Erase**; keep charged; don't unplug mid-restore.

# Firmware sources & flashing tools per manufacturer

Match firmware to the **codename** (`adb shell getprop ro.product.device`), the
**model** (`ro.product.model`), and the **region/CSC** of the actual device.
Flashing another model's or region's firmware is the top cause of a hard-brick.

> Legend: ⚙ = official flashing tool, 🌐 = official firmware/OTA, 🔓 = bootloader
> unlock portal. Always prefer official sources; third-party mirrors can carry
> tampered images.

## Google Pixel / Nexus
- 🌐 Factory images: `https://developers.google.com/android/images`
- 🌐 OTA images (repair without wipe): `https://developers.google.com/android/ota`
- ⚙ Android Flash Tool (in-browser, easiest): `https://flash.android.com`
- 🔓 `fastboot flashing unlock` (enable "OEM unlocking" first). Pixels use
  `init_boot.img` for root patching on Android 13+.
- Notes: clean `flash-all.sh` reflashes everything; edit out `-w` to keep data.

## Samsung
- 🌐 Firmware (per exact model + CSC): SamFirm/Frija-style downloaders pulling
  from Samsung's own FUS servers; or `samsung-firmware.org`-type services. The
  CSC (region code) must match — check `getprop ril.official_cscver` /
  `getprop ro.csc.sales_code`.
- ⚙ **Odin** (Windows) or **Heimdall** (cross-platform) to flash .tar.md5
  (BL/AP/CP/CSC slots). Use **HOME_CSC** to keep data, **CSC** to wipe.
- 🔓 "OEM unlocking" toggle in Developer options; newer Exynos/Snapdragon
  Samsungs allow bootloader unlock but trip Knox permanently (banking/Secure
  Folder/Pay stop working for good).
- Enter Download mode: VolDown+VolUp while plugging USB (or Bixby combo on older).

## Xiaomi / Redmi / POCO (HyperOS / MIUI)
- 🌐 Fastboot ROMs (`.tgz`) and Recovery ROMs: Xiaomi's official site /
  `xiaomifirmwareupdater.com` (community mirror of official builds).
- ⚙ **MiFlash** (fastboot ROM) and in-recovery update (recovery ROM).
- 🔓 **Mi Unlock Tool** + Mi account; mandatory **waiting period** (72h–2+ weeks)
  enforced server-side. Codename needed for TWRP/boot.img.

## OnePlus / OPPO / realme (OxygenOS / ColorOS)
- 🌐 OnePlus OTAs via `oxygenos.oneplus.net` / community `onepluscommunityserver`
  archives; full OTA zips are `adb sideload`-able and also recovery-flashable.
- ⚙ **MSMDownloadTool** (EDL) is the unbrick-from-dead tool (often region-locked;
  official service only) — use the public one only on your own device.
- 🔓 `fastboot oem unlock`; some carrier variants are locked and need an
  OnePlus-issued token.

## Motorola
- 🌐 `mirrors.lolinet.com/firmware/motorola/` (community mirror of official
  signed firmware) — match the `*_RETAIL` / channel to the device.
- ⚙ **RSD Lite** / `fastboot` with the `flashfile.xml` command list; or
  **Lenovo Rescue and Smart Assistant (LMSA)** for full recovery.
- 🔓 Official portal `motorola.com/bootloader` — get an unlock code from the
  device ID, then `fastboot oem unlock <code>`.

## Sony Xperia
- ⚙ **Newflasher** (fastboot/EDL) or **Emma** / **Xperia Companion** (official)
  for repair & reflash.
- 🔓 Official portal `developer.sony.com/open-source/aosp-on-xperia-devices` —
  unlock code from IMEI (irreversibly disables some DRM/camera features).

## ASUS (ROG/Zenfone)
- 🌐 Firmware on each model's ASUS support page (raw `.raw`/full image).
- ⚙ Official "Flash tool" / `fastboot` with provided image; ASUS also publishes
  an official unlock APK per device.

## Huawei / Honor
- Bootloader unlock is **officially discontinued** (no codes issued). Repair
  is limited to official OTA / **HiSuite** eRecovery (requires network + a valid
  account). No supported root path on modern EMUI/MagicOS. Set expectations.

## Nothing Phone
- 🌐 OTA packages mirrored by the community; `adb sideload` works.
- 🔓 `fastboot flashing unlock`; uses `init_boot` for Magisk like Pixel.

## Generic / MediaTek / Spreadtrum (unbranded, rockchip, cheap tablets)
- ⚙ **SP Flash Tool** (MediaTek, `scatter.txt`), **UnisocDownloadTool**/Research
  Download (Spreadtrum), **Qualcomm EDL** (`*.mbn` loader + QFIL) for dead-boot.
- Firmware for these is model-by-model; identify the SoC with
  `getprop ro.hardware` / `getprop ro.board.platform` and search the board/model
  from the back label or `getprop ro.product.board`.

## Deep-recovery modes (when normal fastboot is gone)
- **EDL (Qualcomm 9008)** — emergency download; needs a signed loader
  (`prog_emmc_firehose_*.mbn`) specific to the SoC/OEM. Last resort for a
  truly dead device.
- **MTK BROM / Preloader** — SP Flash Tool with the right DA + auth file.
- **Download mode** (Samsung) / **Recovery** / **Bootloader/Fastboot** — reach
  via `adb reboot <mode>` or the device's hardware key combo (search the exact
  combo by model).

## Golden rules
1. Back up first: `adb backup` is deprecated/unreliable — copy `/sdcard` with
   `adb pull /sdcard ./backup` and export contacts/photos via the cloud.
2. Keep the **stock boot/recovery image** for the exact build before flashing —
   it's your undo button.
3. Never pull USB mid-flash. Charge to >50%.
4. A/B devices: know the active slot (`fastboot getvar current-slot`).
5. If banking/Pay matters, understand unlocking/root may break Play Integrity
   permanently (Knox, etc.).

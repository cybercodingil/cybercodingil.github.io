#!/usr/bin/env bash
# android-helper: one-shot diagnostic for a USB-connected Android device.
# Read-only — collects identity, health and software state. Changes nothing.
# Usage: ./diagnose.sh [serial]   (serial optional; needed if several devices)
set -uo pipefail

SERIAL="${1:-}"
ADB=(adb)
[ -n "$SERIAL" ] && ADB=(adb -s "$SERIAL")

say() { printf '\n\033[1;36m== %s ==\033[0m\n' "$1"; }
gp()  { "${ADB[@]}" shell getprop "$1" 2>/dev/null | tr -d '\r'; }

command -v adb >/dev/null || { echo "adb not found — install platform-tools (see SKILL.md §0)"; exit 1; }

say "Devices"
adb devices -l

STATE="$("${ADB[@]}" get-state 2>/dev/null | tr -d '\r')"
if [ "$STATE" != "device" ]; then
  echo "Device not ready (state: ${STATE:-none})."
  echo " - 'unauthorized' -> tap Allow on the phone."
  echo " - 'offline'/empty -> re-plug, try a data cable/another port, enable USB debugging."
  exit 1
fi

say "Identity"
printf '%-22s %s\n' \
  "Manufacturer:" "$(gp ro.product.manufacturer)" \
  "Model:"        "$(gp ro.product.model)" \
  "Codename:"     "$(gp ro.product.device)" \
  "Board/SoC:"    "$(gp ro.board.platform) / $(gp ro.hardware)" \
  "Android:"      "$(gp ro.build.version.release) (API $(gp ro.build.version.sdk))" \
  "Build:"        "$(gp ro.build.display.id)" \
  "Security patch:" "$(gp ro.build.version.security_patch)" \
  "Bootloader:"   "$(gp ro.boot.bootloader)" \
  "Verified boot:" "$(gp ro.boot.verifiedbootstate)" \
  "Flash locked:" "$(gp ro.boot.flash.locked)" \
  "Fingerprint:"  "$(gp ro.build.fingerprint)"

say "Battery & thermal"
"${ADB[@]}" shell dumpsys battery 2>/dev/null | grep -Ei 'level|health|status|temperature|voltage|cycle' | sed 's/^ *//'

say "Storage"
"${ADB[@]}" shell df -h 2>/dev/null | grep -Ei 'Filesystem|/data|/sdcard|/storage|/system'

say "Memory pressure"
"${ADB[@]}" shell dumpsys meminfo 2>/dev/null | grep -Ei 'Total RAM|Free RAM|Used RAM|Lost RAM' | sed 's/^ *//'

say "Top CPU consumers"
"${ADB[@]}" shell top -b -n 1 2>/dev/null | head -n 12

say "Recent crashes (crash buffer tail)"
"${ADB[@]}" logcat -b crash -d -t 40 2>/dev/null | tail -n 40 || echo "(none / not accessible)"

say "Foreground app"
"${ADB[@]}" shell dumpsys activity activities 2>/dev/null | grep -Ei 'mResumedActivity|topResumedActivity' | head -n1 | sed 's/^ *//'

say "Third-party (user-installed) packages"
"${ADB[@]}" shell pm list packages -3 2>/dev/null | sed 's/package://' | sort | tr '\n' ' '
echo

say "Disabled packages"
"${ADB[@]}" shell pm list packages -d 2>/dev/null | sed 's/package://' | sort | tr '\n' ' '
echo

say "Connectivity snapshot"
printf '%-16s %s\n' \
  "SIM state:"  "$(gp gsm.sim.state)" \
  "Operator:"   "$(gp gsm.operator.alpha)" \
  "Wi-Fi iface:" "$("${ADB[@]}" shell getprop wifi.interface 2>/dev/null | tr -d '\r')"

say "Summary hints"
LEVEL="$("${ADB[@]}" shell dumpsys battery 2>/dev/null | awk -F': ' '/level/{print $2}' | tr -d '\r')"
HEALTH="$("${ADB[@]}" shell dumpsys battery 2>/dev/null | awk -F': ' '/health/{print $2}' | tr -d '\r')"
DATAFREE="$("${ADB[@]}" shell df -h /data 2>/dev/null | awk 'NR==2{print $5}')"
[ -n "${DATAFREE:-}" ] && echo " - /data used: $DATAFREE (high % can cause slowness/boot issues)"
[ "${HEALTH:-}" != "" ] && [ "${HEALTH}" != "2" ] && echo " - Battery health code $HEALTH (2=good); non-2 = degraded/overheat/cold."
echo " - For a full capture run: adb bugreport bugreport.zip"
echo " - Next steps & fixes: see references/troubleshooting.md"

say "Done"

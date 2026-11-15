#!/usr/bin/env bash
# iphone-helper: one-shot read-only diagnostic for a USB-connected iOS device.
# Uses libimobiledevice. Collects identity, battery, storage, crashes. Changes
# nothing. Usage: ./diagnose.sh [udid]   (udid optional; needed if several)
set -uo pipefail

UDID="${1:-}"
U=()
[ -n "$UDID" ] && U=(-u "$UDID")

say() { printf '\n\033[1;36m== %s ==\033[0m\n' "$1"; }
info() { ideviceinfo "${U[@]}" -k "$1" 2>/dev/null | tr -d '\r'; }

command -v ideviceinfo >/dev/null || { echo "libimobiledevice not found — install it (see SKILL.md §0)"; exit 1; }

say "Devices"
idevice_id -l || true

if ! idevice_id -l 2>/dev/null | grep -q .; then
  echo "No device detected."
  echo " - Use a DATA cable (not charge-only) and a direct port (no hub)."
  echo " - Unlock the phone and tap 'Trust'; then: idevicepair pair"
  echo " - If still nothing: sudo systemctl restart usbmuxd"
  exit 1
fi

# Confirm pairing/trust
if ! ideviceinfo "${U[@]}" -k ProductType >/dev/null 2>&1; then
  echo "Device present but not trusted. Unlock it and tap 'Trust', then run:"
  echo "   idevicepair pair"
  exit 1
fi

say "Identity"
printf '%-20s %s\n' \
  "ProductType:"   "$(info ProductType)" \
  "Device name:"   "$(info DeviceName)" \
  "iOS version:"   "$(info ProductVersion)" \
  "Build:"         "$(info BuildVersion)" \
  "Model number:"  "$(info ModelNumber)" \
  "Hardware model:" "$(info HardwareModel)" \
  "Serial:"        "$(info SerialNumber)" \
  "ECID:"          "$(info UniqueChipID)" \
  "Activation:"    "$(info ActivationState)"

say "Battery"
ideviceinfo "${U[@]}" -q com.apple.mobile.battery 2>/dev/null | sed 's/^/  /' \
  || echo "  (battery domain not accessible on this iOS)"

say "Storage (disk usage domain)"
for k in TotalDiskCapacity TotalDataCapacity TotalDataAvailable AmountDataAvailable AmountDataReserved; do
  v="$(ideviceinfo "${U[@]}" -q com.apple.disk_usage -k "$k" 2>/dev/null | tr -d '\r')"
  [ -n "$v" ] && printf '  %-22s %s bytes\n' "$k:" "$v"
done

say "Installed third-party apps"
if command -v ideviceinstaller >/dev/null; then
  ideviceinstaller "${U[@]}" -l 2>/dev/null | head -n 40
else
  echo "  (install 'ideviceinstaller' to list apps)"
fi

say "Recent crash reports"
TMPC="$(mktemp -d)"
if command -v idevicecrashreport >/dev/null; then
  idevicecrashreport "${U[@]}" -e "$TMPC" >/dev/null 2>&1
  found="$(find "$TMPC" -type f -name '*.ips' -o -type f -name '*.crash' 2>/dev/null | head -n 15)"
  if [ -n "$found" ]; then
    echo "$found" | while read -r f; do echo "  $(basename "$f")"; done
    echo "  (full reports copied to: $TMPC )"
  else
    echo "  (no recent crash reports)"
    rm -rf "$TMPC"
  fi
else
  echo "  (idevicecrashreport not installed)"
  rm -rf "$TMPC"
fi

say "Hints"
PT="$(info ProductType)"
echo " - ProductType $PT -> look up model/chip in references/ipsw-and-tools.md"
echo " - Live log:        idevicesyslog"
echo " - Full backup:     idevicebackup2 backup --full ./ios-backup"
echo " - Restore/unbrick: idevicerestore -l --latest   (confirm IPSW is signed first)"
echo " - Next steps:      references/troubleshooting.md"

say "Done"

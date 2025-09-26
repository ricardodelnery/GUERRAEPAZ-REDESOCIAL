#!/usr/bin/env bash
set -euo pipefail
echo "# SMOKE STRUCTURE"
grep -RIn "<header" app || echo "NO_HEADER"
grep -RIn "<main" app || echo "NO_MAIN"
grep -RIn 'aria-label="Navegação principal"' app || echo "NO_PRIMARY_NAV"
grep -RIn 'aria-label="Navegação secundária"' app || echo "NO_SECONDARY_NAV"

# Modais: robusto e case-insensitive
if grep -RIn -i "SearchSheet" app >/dev/null || grep -RIn -i "NotifDrawer" app >/dev/null; then
  echo "SYSTEM_MODALS_PRESENT"
else
  echo "NO_SYSTEM_MODALS"
fi

grep -RIn -E "aria-label=.*GUERRA É PAZ" app || echo "NO_BRAND_ARIA"

echo "# A11Y"
grep -RIn "focus-visible" app || echo "NO_FOCUS"
grep -RIn "aria-current=" app || echo "NO_ARIA_CURRENT"

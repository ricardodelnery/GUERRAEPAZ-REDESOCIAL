#!/usr/bin/env bash
set -euo pipefail
URLS=("https://guerrapaz-redesocial.vercel.app" "https://www.guerraepaz.com")
STAMP="$(date +%s)"
ok=0; fail=0
: > .logs/ui_smoke_latest.txt

check () {
  local url="$1"
  local html
  html="$(curl -sL "${url}?v=${STAMP}")"
  printf "%s\t" "$url" | tee -a .logs/ui_smoke_latest.txt

  echo "$html" | grep -q '/_next/static/css/'     && { printf "CSS=OK "; }     || { printf "CSS=FAIL "; fail=$((fail+1)); }
  echo "$html" | grep -q 'class="[^"]*text-brand-red[^"]*">Guerra &amp; Paz' \
                                                   && { printf "BRAND=OK "; }  || { printf "BRAND=FAIL "; fail=$((fail+1)); }
  echo "$html" | grep -q 'bg-gradient-to-b from-slate-800 to-black' \
                                                   && { printf "HIGHLIGHTS=OK "; } || { printf "HIGHLIGHTS=FAIL "; fail=$((fail+1)); }
  echo "$html" | grep -q 'O que estás a pensar'   && { printf "COMPOSER=OK "; }|| { printf "COMPOSER=FAIL "; fail=$((fail+1)); }
  echo "$html" | grep -q 'aria-current="page"'     && { printf "SUBNAV=OK "; }  || { printf "SUBNAV=FAIL "; fail=$((fail+1)); }
  echo "$html" | grep -q 'min-w-4 px-1 text-\[10px\] leading-4 .* bg-brand-red' \
                                                   && { printf "BADGE=OK"; }   || { printf "BADGE=FAIL"; fail=$((fail+1)); }
  printf "\n" | tee -a .logs/ui_smoke_latest.txt
  ok=$((ok+1))
}

for u in "${URLS[@]}"; do check "$u"; done

# resumo + exit code
if grep -q "FAIL" .logs/ui_smoke_latest.txt; then
  echo "SMOKE=RED"  | tee -a .logs/ui_smoke_latest.txt
  exit 1
else
  echo "SMOKE=GREEN"| tee -a .logs/ui_smoke_latest.txt
fi

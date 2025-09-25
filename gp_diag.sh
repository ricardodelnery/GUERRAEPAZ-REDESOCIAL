#!/usr/bin/env bash
set -euo pipefail

bold() { printf "\n\033[1m%s\033[0m\n" "$*"; }
info() { printf "  - %s\n" "$*"; }
line() { printf "%s\n" "------------------------------------------------------------"; }

bold "DIAGNÓSTICO — GUERRA & PAZ (somente leitura)"

# 1) Contexto
line
bold "1) CONTEXTO"
echo "cwd: $(pwd)"
echo "branch: $(git branch --show-current 2>/dev/null || echo N/A)"
echo "commit: $(git log --oneline -1 2>/dev/null || echo N/A)"
echo "node: $(node -v 2>/dev/null || echo N/A)  npm: $(npm -v 2>/dev/null || echo N/A)"

# 2) package.json
line
bold "2) package.json / deps"
if [ -f package.json ]; then
  echo "name: $(node -p "require('./package.json').name" 2>/dev/null || echo '')"
  echo "next: $(node -p "(require('./package.json').dependencies||{}).next" 2>/dev/null || echo '')"
  echo "react: $(node -p "(require('./package.json').dependencies||{}).react" 2>/dev/null || echo '')"
  echo "react-dom: $(node -p "(require('./package.json').dependencies||{})['react-dom']" 2>/dev/null || echo '')"
  echo "typescript(dev): $(node -p "(require('./package.json').devDependencies||{}).typescript" 2>/dev/null || echo '')"
  echo "scripts: $(node -p "Object.keys(require('./package.json').scripts||{}).join(', ')" 2>/dev/null || echo '')"
else
  echo "package.json AUSENTE"
fi

# 3) App Router
line
bold "3) APP ROUTER — arquivos chave"
for f in \
  app/layout.jsx app/layout.tsx app/page.jsx app/page.tsx \
  app/api/dossie/route.js app/api/dossie/route.ts \
  app/entrar/page.jsx app/dashboard/page.jsx
do
  [ -f "$f" ] && info "ok: $f"
done
for d in app app/api app/api/dossie app/entrar app/dashboard; do
  [ -d "$d" ] || info "FALTA diretório: $d"
done

# 4) Conflitos
line
bold "4) POSSÍVEIS CONFLITOS"
[ -f public/index.html ] && info "public/index.html EXISTE (pode forçar 404)"
[ -f public/404.html ] && info "public/404.html EXISTE (pode forçar 404)"
[ -f vercel.json ] && info "vercel.json presente"

# 5) Duplicações .jsx/.tsx
line
bold "5) DUPLICAÇÕES page/layout (.jsx e .tsx)"
dup=0
for base in app/page app/layout; do
  c=0; [ -f "${base}.jsx" ] && c=$((c+1)); [ -f "${base}.tsx" ] && c=$((c+1))
  if [ $c -gt 1 ]; then info "DUP: ${base}.jsx e ${base}.tsx"; dup=1; fi
done
[ $dup -eq 0 ] && info "sem duplicações"

# 6) Build opcional
if [ "${1:-}" = "--build" ]; then
  line
  bold "6) BUILD (npm run build)"
  if npm run build >/tmp/gp_build.log 2>&1; then
    info "BUILD OK"
  else
    info "BUILD FALHOU — últimas 60 linhas:"
    tail -60 /tmp/gp_build.log || true
  fi
else
  info "pulei build (use: ./gp_diag.sh --build)"
fi

# 7) Vercel (somente leitura)
line
bold "7) VERCEL — link e deploys"
if [ -f .vercel/project.json ]; then
  echo ".vercel ligado"
else
  echo "sem .vercel/project.json (use: npx vercel link --project guerrapaz-redesocial --yes)"
fi
if command -v npx >/dev/null 2>&1; then
  echo "Deploy de produção (primeira linha):"
  npx --yes vercel ls guerrapaz-redesocial --yes 2>/dev/null | awk '/Production/ {print; exit}'
fi

# 8) Alias
line
bold "8) VERCEL — alias"
if command -v npx >/dev/null 2>&1; then
  npx --yes vercel alias ls 2>/dev/null | head -20
fi

# 9) HTTP opcional
HOST="${2:-}"
if [ -n "$HOST" ]; then
  line
  bold "9) HTTP — ${HOST}"
  for U in / "/api/dossie?limit=2" /dashboard; do
    printf "\nGET %s%s\n" "$HOST" "$U"
    curl -sI "$HOST$U" | head -n 20
  done
  echo "OBS: HTTP/401 = Deployment Protection ativa."
fi

line
bold "FIM — sem alterações"

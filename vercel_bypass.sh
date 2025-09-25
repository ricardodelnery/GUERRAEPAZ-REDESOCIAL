#!/usr/bin/env bash
set -euo pipefail
BASE1="https://guerraepaz.com"
BASE2="https://www.guerraepaz.com"
TOKEN="SEU_TOKEN_AQUI"   # cole aqui o token real (sem aspas extras)

echo ">> Setando cookie no apex..."
curl -sI -L "$BASE1/?x-vercel-set-bypass-cookie=true&x-vercel-protection-bypass=$TOKEN" -c cookies_apex.txt | head -n 5
echo ">> Setando cookie no www..."
curl -sI -L "$BASE2/?x-vercel-set-bypass-cookie=true&x-vercel-protection-bypass=$TOKEN" -c cookies_www.txt  | head -n 5

echo ">> Testando apex:"
curl -sI "$BASE1/" -b cookies_apex.txt | head -n 1
curl -s  "$BASE1/api/dossie?limit=2" -b cookies_apex.txt; echo
curl -sI "$BASE1/dashboard" -b cookies_apex.txt | head -n 1

echo ">> Testando www:"
curl -sI "$BASE2/" -b cookies_www.txt | head -n 1

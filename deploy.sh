#!/bin/bash
# Stage pulse-site (minus .git) and deploy to Cloudflare Pages (vfit-pulse.pages.dev)
set -euo pipefail
SITE="/Users/sayanisahapodder/VFIT WORK/vfit-audit/revamp/pulse-site"
STAGE="${TMPDIR:-/tmp}/pulse-deploy"
mkdir -p "$STAGE"
rsync -a --delete --exclude='.git' --exclude='deploy.sh' "$SITE/" "$STAGE/"
printf '/*\n  X-Robots-Tag: noindex, nofollow\n' > "$STAGE/_headers"
npx --yes wrangler pages deploy "$STAGE" --project-name=vfit-pulse --commit-dirty=true

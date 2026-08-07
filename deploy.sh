#!/bin/bash
# Stage the vantagefit prototype (minus .git) and deploy to Cloudflare Pages (vantagefit project)
set -euo pipefail
SITE="$(cd "$(dirname "$0")" && pwd)"
STAGE="${TMPDIR:-/tmp}/vantagefit-deploy"
mkdir -p "$STAGE"
rsync -a --delete --exclude='.git' --exclude='.wrangler' --exclude='deploy.sh' "$SITE/" "$STAGE/"
printf '/*\n  X-Robots-Tag: noindex, nofollow\n' > "$STAGE/_headers"
# Pinned: wrangler 4.120.0 is tagged latest on npm but its tarball 404s (broken publish).
# Bump this when a newer version installs cleanly.
npx --yes wrangler@4.119.0 pages deploy "$STAGE" --project-name=vantagefit --commit-dirty=true

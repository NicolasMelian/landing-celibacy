#!/usr/bin/env bash
# One-command deploy for celibacytracker (Next static export → Hetzner + Nginx).
# Usage:  ./deploy.sh
set -euo pipefail

SERVER="root@5.78.191.13"
DEST="/var/www/celibacytracker"

cd "$(dirname "$0")"

echo "▶  Building (next static export)..."
npm run build

echo "▶  Uploading..."
# NOTE: don't exclude *.txt — robots.txt and the RSC prefetch payloads live there.
rsync -az --delete --exclude='.DS_Store' out/ "$SERVER:$DEST/"
ssh "$SERVER" "chown -R www-data:www-data $DEST"

echo "✅  Deployed → https://celibacytracker.com"

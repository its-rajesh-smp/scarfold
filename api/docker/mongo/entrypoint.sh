#!/bin/bash
# Run the official mongo entrypoint with its "drop to the mongodb user" block
# removed, so mongod keeps running as root.
#
# Why: ./.data/mongo is a macOS bind mount. Docker Desktop doesn't persist file
# ownership there, so after a container restart the data files look root-owned
# and WiredTiger's open(O_NOATIME) fails with "Operation not permitted" for the
# mongodb user. Fine for local development only.
set -euo pipefail

src=/usr/local/bin/docker-entrypoint.sh
dst=/tmp/docker-entrypoint-root.sh

sed '/^if \[\[ "\$originalArgOne" == mongo\* \]\] && \[ "\$(id -u)" = .0. \]; then$/,/^fi$/d' "$src" > "$dst"

if grep -q 'exec gosu mongodb' "$dst"; then
	echo "local-entrypoint: could not strip the gosu block from $src (image changed?)" >&2
	exit 1
fi

chmod +x "$dst"
exec "$dst" "$@"

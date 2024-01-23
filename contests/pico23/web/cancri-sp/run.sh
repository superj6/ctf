set -eux

SCRIPT_DIR=$(dirname -- "$0")

sleep 3 | exec $SCRIPT_DIR/src/out/Final/chrome \
  --enable-blink-features=MojoJS \
  --headless \
  --disable-gpu \
  --remote-debugging-pipe \
  --user-data-dir=/does-not-exist \
  --disable-dev-shm-usage \
  --no-sandbox \
  $1 3<&0 4>/dev/null

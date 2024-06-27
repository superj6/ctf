#!/bin/bash

url=${1}
reflect_url=${2}

python3 gen_payload.py ${reflect_url}
python3 exploit.py ${url}

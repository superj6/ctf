#!/bin/bash
docker rm -f web_gatecrash
docker build -t web_gatecrash . && \
docker run --cap-add=SYS_PTRACE --security-opt seccomp=unconfined --name=web_gatecrash --rm -p1337:1337 -it web_gatecrash

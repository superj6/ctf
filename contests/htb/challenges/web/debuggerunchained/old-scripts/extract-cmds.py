import glob
import base64
import json

packet_files = glob.glob('./packets/*')
packet_files.sort()

for i in range(len(packet_files)): 
    with open(packet_files[i], 'r') as f:
        try: 
            packet = f.read()
        except:
            continue

    if packet.startswith('GET'):
        with open(packet_files[i + 1], 'r') as f:
            res_packet = f.read()

        cmd64 = res_packet.split('task="')[1].split('";')[0]
        param = 'cmd'
    elif packet.startswith('POST'):
        cmd64 = packet.split('__cfuid=')[1].split('\n')[0]
        param = 'output'
    else:
        continue

    try:
        cmdjson = base64.b64decode(cmd64).decode('utf-8')
        cmd = json.loads(cmdjson)
        out = base64.b64decode(cmd[param]).decode('utf-8')
    except:
        continue

    print(cmd)
    print(out)

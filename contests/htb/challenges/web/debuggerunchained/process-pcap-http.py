#!/usr/bin/python3
from tcpsession import tcpsession
import pathlib
import shutil
import glob
import base64
import json
import dpkt

pcap_file = './web_debugger_unchained/traffic.pcap'
out_dir = './http-packet-data'
cmd_out_file = f'{out_dir}/cmds.txt'
except_dir = f'{out_dir}/non-cmd-packets'

dbg = False
def log_debug(*args):
    if dbg:
        print('[dbg]', *args)

def pkt_tcp_data(pkt):
    return dpkt.ethernet.Ethernet(pkt[1]).data.data.data.decode('utf-8', 'backslashreplace')

def session_tcp_data(session):
    return ''.join(pkt_tcp_data(pkt) for pkt in session)

with pathlib.Path(out_dir) as dirpath:
    if dirpath.exists():
        shutil.rmtree(dirpath)

pathlib.Path(out_dir).mkdir(parents = True, exist_ok = True)
pathlib.Path(except_dir).mkdir(parents = True, exist_ok = True)

tcpsessions = tcpsession.TCPSessions(pcap_file)
tcpsessions.process_pcap()
sessions = tcpsessions.get_all_sessions()

with open(cmd_out_file, 'w') as f:
    for i, ses in enumerate(sessions):
        ses_data = session_tcp_data(ses)
        
        try:
            if '500 INTERNAL SERVER ERROR' in ses_data:
                raise Exception('500 response')
            if ses_data.startswith('GET'):
                cmd64 = ses_data.split('task="')[1].split('";')[0]
                param = 'cmd'
            elif ses_data.startswith('POST'):
                cmd64 = ses_data.split('__cfuid=')[1].split('\n')[0]
                param = 'output'
            else:
                raise Exception('not GET/POST')
            cmdjson = base64.b64decode(cmd64).decode('utf-8')
            cmd = json.loads(cmdjson)
            out = base64.b64decode(cmd[param]).decode('utf-8')
        except:
            with open(f'{except_dir}/{i:03}', 'w') as f_except:
                f_except.write(ses_data)
            continue

        log_debug(cmd)

        print(f'[{i:03}]', file = f)
        print(('> ' if param == 'cmd' else '') + out, file = f)
        print(file = f)

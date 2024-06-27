import { createServer } from 'node:http';
import assert from 'node:assert';
import { spawn } from 'node:child_process';
import { mkdir, mkdtemp, writeFile, rm, readFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const sleep = delay => new Promise(res => setTimeout(res, delay));

const html = await readFile('static/index.html', 'utf-8');
const js = await readFile('static/index.js', 'utf-8');
const flag = await readFile('flag.txt', 'utf-8');

let visiting = false;

async function visit(state) {
	if (visiting) return;
	visiting = true;

	state = {...state, flag }

	const userDataDir = await mkdtemp(join(tmpdir(), 'elements-'));

	await mkdir(join(userDataDir, 'Default'));
	await writeFile(join(userDataDir, 'Default', 'Preferences'), JSON.stringify({
		net: {
			network_prediction_options: 2
		}
	}));

	console.log(`http://127.0.0.1:8080/#${Buffer.from(JSON.stringify(state)).toString('base64')}`);
	const proc = spawn(
		'/usr/bin/chromium-browser-unstable', [
			`--user-data-dir=${userDataDir}`,
			'--profile-directory=Default',
			'--no-sandbox',
			'--js-flags=--noexpose_wasm,--jitless',
			'--disable-gpu',
			'--no-first-run',
			'--enable-experimental-web-platform-features',
			`http://127.0.0.1:8080/#${Buffer.from(JSON.stringify(state)).toString('base64')}`
		],
		{ detached: true }
	)

	return;
	await sleep(10000);
	try {
		process.kill(-proc.pid)
	} catch(e) {}
	await sleep(500);

	await rm(userDataDir, { recursive: true, force: true, maxRetries: 10 });

	visiting = false;
}
visit({})

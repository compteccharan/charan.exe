#!/usr/bin/env node
'use strict';

// charan.exe: a tiny terminal card. zero dependencies.
const NO = 'NO_COLOR' in process.env;
const color = !NO && (process.stdout.isTTY || 'FORCE_COLOR' in process.env);

const rgb = (hex) => {
  const n = parseInt(hex.slice(1), 16);
  return (s) => (color ? `\x1b[38;2;${n >> 16};${(n >> 8) & 255};${n & 255}m${s}\x1b[0m` : s);
};
const bold = (s) => (color ? `\x1b[1m${s}\x1b[22m` : s);
const c = {
  border: rgb('#9d7cd8'), purple: rgb('#bb9af7'), lav: rgb('#aab5df'), blue: rgb('#7aa2f7'),
  cyan: rgb('#7dcfff'), green: rgb('#9ece6a'), red: rgb('#f7768e'), text: rgb('#c0caf5'), dim: rgb('#737aa2'),
};

const W = 66; // inner width
const strip = (s) => s.replace(/\x1b\[[0-9;]*m/g, '');
const pad = (s) => s + ' '.repeat(Math.max(0, W - strip(s).length));
const row = (s = '') => c.border('│') + ' ' + pad(s) + ' ' + c.border('│');

const robot = [
  '   ▄   ',
  '▄█▀▀▀█▄',
  '█ ● ● █',
  '█ ╰─╯ █',
  '▀█▄▄▄█▀',
];
const boot = [
  [c.green('[ ok ]'), 'booting charan.exe'],
  [c.green('[ ok ]'), 'loading coffee.dll'],
  [c.green('[ ok ]'), 'mounting python3 (intermediate)'],
  [c.purple('[warn]'), 'social.exe: loud in text, quiet irl'],
  [c.red('[err ]'), '418: still a student'],
];

const G = {
  h: ['█ █', '█▀█', '▀ ▀'], i: ['▀', '█', '▀'], ',': ['  ', '  ', '▄▀'], "'": ['█', '▀', ' '],
  m: ['█▄ ▄█', '█ ▀ █', '▀   ▀'], c: ['█▀▀', '█  ', '▀▀▀'], a: ['▄▀█', '█▀█', '▀ ▀'],
  r: ['█▀▄', '█▀▄', '▀ ▀'], n: ['█▄ █', '█ ▀█', '▀  ▀'], ' ': [' ', ' ', ' '],
};
const big = (txt) =>
  [0, 1, 2].map((r) => txt.split('').map((ch) => G[ch][r]).join(' '));

const out = [];
out.push(c.border('╭' + '─'.repeat(W + 2) + '╮'));
out.push(row(c.dim('charan:~$ ') + c.text('./charan.exe') + c.dim('  # Charan Nihaal R')));
out.push(row());
for (let i = 0; i < 5; i++) {
  out.push(row(c.purple(robot[i]) + '   ' + boot[i][0] + ' ' + c.text(boot[i][1])));
}
out.push(row());
for (const l of big("hi, i'm charan")) out.push(row(c.purple(bold(l))));
out.push(row());
out.push(row(c.text('Charan Nihaal R, cs student.')));
out.push(row(c.text('i build things, ship them, and fix them when they break.')));
out.push(row());
const kv = (k, v) => row(c.lav(k.padEnd(10)) + v);
out.push(kv('building', c.text('TrustIntern, an explainable internship-scam checker')));
out.push(kv('insider', c.text('at Entire :)')));
out.push(kv('learning', c.text('investing time in learning AI tools')));
out.push(kv('status', c.green('open to internships') + c.text(' (swe, ai/ml), remote or on-site')));
out.push(row());
out.push(kv('web', c.cyan('https://charancodes.com')));
out.push(kv('github', c.cyan('https://charancodes.com/github')));
out.push(kv('dev', c.cyan('https://charancodes.com/dev')));
out.push(kv('linkedin', c.cyan('https://charancodes.com/linkedin')));
out.push(kv('resume', c.cyan('https://charancodes.com/resume')));
out.push(kv('email', c.cyan('charancodes@proton.me')));
out.push(row());
out.push(row(c.dim('> shutting down charan.exe... jk, still coding.')));
out.push(c.border('╰' + '─'.repeat(W + 2) + '╯'));

console.log('\n' + out.join('\n') + '\n');

/**
 * 对空壳组件批量尝试「小写组件标签 → 唯一别名」，逐个用 probe-one 验证，
 * 只有「静态渲染变有内容」才保留，否则回滚。安全优先。
 *
 * 用法: node scripts/fix-components-batch.js [数量]
 */
const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const ROOT = process.cwd();
const limit = Number(process.argv[2] || 20);

const probe = JSON.parse(fs.readFileSync(path.join(ROOT, 'analysis', 'probe-components.json'), 'utf8'));
const empties = probe.failures.filter((f) => f.stage === 'empty').map((f) => f.slug).slice(0, limit);

function measure(slug) {
  try {
    const out = execFileSync(process.execPath, [path.join(ROOT, 'scripts', 'probe-one.js'), 'components', slug], { cwd: ROOT, encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'], timeout: 40000 });
    return JSON.parse(out.trim().split('\n').pop());
  } catch {
    return { ok: false, stage: 'run-fail', len: 0 };
  }
}

let kept = 0;
let tried = 0;
for (const slug of empties) {
  const p = path.join(ROOT, 'data', 'tsx', 'components', `${slug}.tsx`);
  if (!fs.existsSync(p)) continue;
  const original = fs.readFileSync(p, 'utf8');
  let s = original;

  const funcs = new Set();
  for (const m of s.matchAll(/(?:^|[,;]\s*)([a-z])\s*=\s*\(?[^)=]{0,200}?\)?\s*=>/gm)) funcs.add(m[1]);
  for (const m of s.matchAll(/^function\s+([a-z])\s*\(/gm)) funcs.add(m[1]);

  const aliases = [];
  for (const tag of funcs) {
    if (!new RegExp('<\\s*' + tag + '(?=[\\s/>])').test(s)) continue;
    const alias = tag.toUpperCase() + 'C';
    if (new RegExp('\\b' + alias + '\\b').test(s)) continue;
    s = s.replace(new RegExp('<' + tag + '(?=[\\s/>])', 'g'), '<' + alias);
    s = s.replace(new RegExp('</' + tag + '>', 'g'), '</' + alias + '>');
    aliases.push('const ' + alias + ': any = ' + tag + ';');
  }
  if (!aliases.length) { console.log('— ' + slug + '：没有可改的小写标签'); continue; }
  const tail = s.lastIndexOf('export ');
  s = tail > 0 ? s.slice(0, tail) + aliases.join('\n') + '\n\n' + s.slice(tail) : s + '\n' + aliases.join('\n') + '\n';
  fs.writeFileSync(p, s);
  tried++;
  const r = measure(slug);
  const improved = r.ok === true || (Number(r.len) || 0) > 400;
  if (improved) {
    kept++;
    console.log('✓ ' + slug + '：保留（len=' + r.len + '）');
  } else {
    fs.writeFileSync(p, original);
    console.log('✗ ' + slug + '：回滚');
  }
}
console.log(`尝试 ${tried}，保留 ${kept}`);

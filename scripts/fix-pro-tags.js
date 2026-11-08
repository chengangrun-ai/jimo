/**
 * 修 Pro 组件里的「单字母组件标签」。
 *
 * 现象：反编译把组件写成 `<g speed=... sheets=... />`（单字母小写）。
 * React 把小写当 HTML 元素，真正的组件没执行 → 页面只剩空壳，最后退回预览图。
 *
 * 修法：按「标签属性名」和「函数组件接收的参数名」重合 ≥2 找到目标组件，
 *       把标签名换成唯一大写别名，末尾加 `const 别名 = 目标组件`。
 *
 * 安全：排除合法 HTML 标签；只改自闭合标签或成对标签的开+闭；
 *       位置替换从后往前避免偏移；逐文件 esbuild 校验；
 *       probe-one 验证，没变好就回滚。
 *
 * 用法: node scripts/fix-pro-tags.js [--write] [slug...]
 */
const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');
const esbuild = require('esbuild');

const ROOT = process.cwd();
const write = process.argv.includes('--write');
const only = process.argv.slice(2).filter((a) => !a.startsWith('--'));
const DIR = path.join(ROOT, 'data', 'tsx', 'components');

// 合法 HTML/SVG 元素，不能当组件改
const HTML_TAGS = new Set(['a','b','i','p','q','s','u','div','span','ul','ol','li','button','section','canvas','svg','path','img','video','input','label','table','tr','td','th','form','select','option','textarea','header','footer','nav','main','article','aside','figure','figcaption','br','hr','style','script','iframe','text','defs','filter','rect','circle','line','use','mask','pattern','h1','h2','h3','h4','h5','h6','strong','em','code','pre','small','g']);

function namesOf(block) {
  const out = new Set();
  for (const m of block.matchAll(/([A-Za-z_$][\w$]*)\s*[:=]/g)) out.add(m[1]);
  return out;
}

function applyFix(src) {
  // 收集所有「确实定义成组件」的函数
  const comps = [];
  for (const m of src.matchAll(/(?:^|[,;]\s*)([A-Za-z_$][\w$]*)\s*=\s*\(\{([\s\S]{0,900}?)\}\)\s*=>/g)) {
    const name = m[1];
    if (!new RegExp('\\b' + name + '\\s*=\\s*\\(\\{').test(src)) continue;
    comps.push({ name, props: namesOf(m[2]) });
  }
  if (!comps.length) return null;

  // 收集待替换标签
  const re = /<([a-z])((?:\s+[A-Za-z_$][\w$]*(?:="[^"]*"|=\{[^}]*\})?)*)\s*(\/?)>/g;
  const edits = [];   // { start, end, replacement }
  const aliases = []; // 别名声明
  const used = new Set();
  let m;
  while ((m = re.exec(src))) {
    const tag = m[1];
    const attrs = new Set([...m[2].matchAll(/([A-Za-z_$][\w$]*)\s*=/g)].map((x) => x[1]));
    // 合法 HTML/SVG 标签默认跳过；但如果属性名对上了某组件参数 ≥2 个，
    // 说明它是被当成组件用的（例如带 speed/sheets 的 <g>），允许改。
    if (HTML_TAGS.has(tag)) {
      let hint = 0;
      for (const c of comps) { let sc = 0; for (const a of attrs) if (c.props.has(a)) sc++; if (sc > hint) hint = sc; }
      if (hint < 2) continue;
    }
    if (attrs.size < 2) continue;
    let best = null, bestScore = 0;
    for (const c of comps) {
      let score = 0;
      for (const a of attrs) if (c.props.has(a)) score++;
      if (score > bestScore) { bestScore = score; best = c; }
    }
    if (!best || bestScore < 2) continue;
    const alias = tag.toUpperCase() + 'View';
    if (used.has(alias) || new RegExp('\\b' + alias + '\\b').test(src)) continue;
    used.add(alias);
    const selfClose = m[3] === '/';
    const replacement = '<' + alias + m[2] + (selfClose ? '/>' : '>');
    edits.push({ start: m.index, end: m.index + m[0].length, replacement, tag });
    // 成对标签：同时改对应闭标签（记录为独立 edit）
    if (!selfClose) {
      const close = '</' + tag + '>';
      const closeAt = src.indexOf(close, m.index + m[0].length);
      if (closeAt >= 0) edits.push({ start: closeAt, end: closeAt + close.length, replacement: '</' + alias + '>' });
    }
    aliases.push('const ' + alias + ': any = ' + best.name + ';');
  }
  if (!edits.length || !aliases.length) return null;

  // 从后往前替换，位置不偏移
  edits.sort((a, b) => b.start - a.start);
  let s = src;
  for (const e of edits) s = s.slice(0, e.start) + e.replacement + s.slice(e.end);
  const uniq = [...new Set(aliases)];
  const tail = s.lastIndexOf('export ');
  s = tail > 0 ? s.slice(0, tail) + uniq.join('\n') + '\n\n' + s.slice(tail) : s + '\n' + uniq.join('\n');
  return { code: s, count: uniq.length };
}

function probe(slug) {
  try {
    const out = execFileSync(process.execPath, [path.join(ROOT, 'scripts', 'probe-one.js'), 'components', slug], { cwd: ROOT, encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'], timeout: 40000 });
    return JSON.parse(out.trim().split('\n').pop());
  } catch { return { ok: false, len: 0 }; }
}

const slugs = only.length ? only : fs.readdirSync(DIR).filter((f) => f.endsWith('.tsx')).map((f) => f.replace(/\.tsx$/, ''));
let tried = 0, kept = 0;
for (const slug of slugs) {
  const p = path.join(DIR, slug + '.tsx');
  if (!fs.existsSync(p)) continue;
  const original = fs.readFileSync(p, 'utf8');
  const fixed = applyFix(original);
  if (!fixed) continue;
  try { esbuild.transformSync(fixed.code, { loader: 'tsx' }); } catch { continue; }
  const before = probe(slug);
  fs.writeFileSync(p, fixed.code);
  tried++;
  const after = probe(slug);
  const improved = (after.ok && !before.ok) || (Number(after.len) || 0) > (Number(before.len) || 0) + 150;
  if (write && improved) { kept++; console.log('✓', slug, fixed.count); }
  else { fs.writeFileSync(p, original); if (!write) console.log('(dry)', slug, fixed.count); }
}
console.log(`尝试 ${tried}，保留 ${kept}${write ? '' : '（预演）'}`);

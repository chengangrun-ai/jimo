/**
 * 修单字母组件标签（面向真实浏览器验证版）。
 *
 * 之前 fix-pro-tags.js 用 jsdom 探测决定是否保留，WebGL 组件在 jsdom 里
 * 永远"没变好"，于是被回滚——实际在真实浏览器里是好的。
 * 这个脚本只做「语法检查通过就写入」，由调用方用真实浏览器复核。
 *
 * 用法: node scripts/fix-tags-batch.js [slug...]   （不给 slug 则处理 --list 文件）
 */
const fs = require('fs');
const path = require('path');
const esbuild = require('esbuild');

const ROOT = process.cwd();
const DIR = path.join(ROOT, 'data', 'tsx', 'components');
const args = process.argv.slice(2).filter((a) => !a.startsWith('--'));
const slugs = args.length
  ? args
  : fs.readFileSync(path.join(ROOT, 'analysis', 'pro-tag-targets.txt'), 'utf8').trim().split('\n').map((x) => x.trim()).filter(Boolean);

// 真正的 HTML/SVG 元素（属性对上也不能改）
const HTML_TAGS = new Set(['a','b','i','p','q','s','u','div','span','ul','ol','li','button','section','canvas','svg','path','img','video','input','label','table','tr','td','th','form','select','option','textarea','header','footer','nav','main','article','aside','figure','figcaption','br','hr','style','script','iframe','text','defs','filter','rect','circle','line','use','mask','pattern','h1','h2','h3','h4','h5','h6','strong','em','code','pre','small']);

function namesOf(block) {
  const out = new Set();
  for (const m of block.matchAll(/([A-Za-z_$][\w$]*)\s*[:=]/g)) out.add(m[1]);
  return out;
}

function applyFix(src) {
  const comps = [];
  for (const m of src.matchAll(/(?:^|[,;]\s*)([A-Za-z_$][\w$]*)\s*=\s*\(\{([\s\S]{0,900}?)\}\)\s*=>/g)) {
    const name = m[1];
    if (!new RegExp('\\b' + name + '\\s*=\\s*\\(\\{').test(src)) continue;
    comps.push({ name, props: namesOf(m[2]) });
  }
  if (!comps.length) return null;

  const re = /<([a-z])((?:\s+[A-Za-z_$][\w$]*(?:="[^"]*"|=\{[^}]*\})?)*)\s*(\/?)>/g;
  const edits = [];
  const aliases = [];
  const used = new Set();
  let m;
  while ((m = re.exec(src))) {
    const tag = m[1];
    const attrs = new Set([...m[2].matchAll(/([A-Za-z_$][\w$]*)\s*=/g)].map((x) => x[1]));
    if (attrs.size < 2) continue;

    let best = null, bestScore = 0;
    // 优先「标签字母与组件名相同」的那个（<c .../> 大概率就是组件 c），
    // 因为同一文件里常有多个组件参数长得几乎一样，只按属性配对会绑错。
    const sameName = comps.find((c) => c.name === tag);
    if (sameName) {
      let sc = 0;
      for (const a of attrs) if (sameName.props.has(a)) sc++;
      if (sc >= 2) { best = sameName; bestScore = sc; }
    }
    if (!best) {
      for (const c of comps) {
        let score = 0;
        for (const a of attrs) if (c.props.has(a)) score++;
        if (score > bestScore) { bestScore = score; best = c; }
      }
    }
    if (!best || bestScore < 2) continue;

    // 合法 HTML 标签：只有属性对上 ≥3 个才认为它其实是组件
    if (HTML_TAGS.has(tag) && bestScore < 3) continue;

    const alias = tag.toUpperCase() + 'View';
    if (used.has(alias) || new RegExp('\\b' + alias + '\\b').test(src)) continue;
    used.add(alias);

    const selfClose = m[3] === '/';
    edits.push({ start: m.index, end: m.index + m[0].length, replacement: '<' + alias + m[2] + (selfClose ? '/>' : '>') });
    if (!selfClose) {
      const close = '</' + tag + '>';
      const at = src.indexOf(close, m.index + m[0].length);
      if (at >= 0) edits.push({ start: at, end: at + close.length, replacement: '</' + alias + '>' });
    }
    aliases.push('const ' + alias + ': any = ' + best.name + ';');
  }
  if (!edits.length) return null;

  edits.sort((a, b) => b.start - a.start);
  let s = src;
  for (const e of edits) s = s.slice(0, e.start) + e.replacement + s.slice(e.end);
  const uniq = [...new Set(aliases)];
  const tail = s.lastIndexOf('export ');
  s = tail > 0 ? s.slice(0, tail) + uniq.join('\n') + '\n\n' + s.slice(tail) : s + '\n' + uniq.join('\n');
  return { code: s, count: uniq.length, aliases: uniq };
}

let done = 0, skip = 0;
for (const slug of slugs) {
  const p = path.join(DIR, slug + '.tsx');
  if (!fs.existsSync(p)) { skip++; continue; }
  const original = fs.readFileSync(p, 'utf8');
  const fixed = applyFix(original);
  if (!fixed) { skip++; continue; }
  try { esbuild.transformSync(fixed.code, { loader: 'tsx' }); }
  catch (e) { console.log('语法不通过跳过', slug, e.errors[0].text); skip++; continue; }
  fs.writeFileSync(p, fixed.code);
  done++;
  console.log('改', slug, '->', fixed.aliases.join(' '));
}
console.log(`改动 ${done}，跳过 ${skip}`);

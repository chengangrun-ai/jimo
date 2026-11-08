/**
 * 修复「画布内标签绑错组件」。
 *
 * 判断依据：画布内的标签 X 应当指向「真正的场景组件」——即
 * 使用了 useThree/useFrame、且参数名与该标签属性高度重合的那个组件；
 * 而不是指向「含 <Hl> 画布的外层组件」（那样会画布套画布，R3F 报
 * "Canvas is not part of the THREE namespace"）。
 *
 * 用法: node scripts/fix-scene-binding.js [--write] [slug...]
 */
const fs = require('fs');
const path = require('path');
const esbuild = require('esbuild');

const ROOT = process.cwd();
const write = process.argv.includes('--write');
const only = process.argv.slice(2).filter((a) => !a.startsWith('--'));
const DIR = path.join(ROOT, 'data', 'tsx', 'components');

function componentBlocks(src) {
  const lines = src.split('\n');
  const starts = [];
  for (let i = 0; i < lines.length; i++) {
    const m = lines[i].match(/^\s*(?:let\s+|var\s+|const\s+)?([A-Za-z_$][\w$]*)\s*=\s*\(\{/);
    if (m) starts.push({ name: m[1], line: i });
  }
  const out = [];
  for (let k = 0; k < starts.length; k++) {
    const s = starts[k];
    const end = k + 1 < starts.length ? starts[k + 1].line : lines.length;
    const body = lines.slice(s.line, end).join('\n');
    const props = [...(body.match(/([\s\S]*?)\}\)\s*=>/)?.[1] || '').matchAll(/([A-Za-z_$][\w$]*)\s*[:=]/g)].map((x) => x[1]);
    out.push({
      name: s.name,
      body,
      props: new Set(props),
      usesHooks: /__mod_81712\.(C|D)\(/.test(body),
      hasCanvas: /__mod_3907\.Hl/.test(body),
    });
  }
  return out;
}

const slugs = only.length ? only : fs.readdirSync(DIR).filter((f) => f.endsWith('.tsx')).map((f) => f.replace(/\.tsx$/, ''));
let fixed = 0;

for (const slug of slugs) {
  const p = path.join(DIR, slug + '.tsx');
  if (!fs.existsSync(p)) continue;
  let src = fs.readFileSync(p, 'utf8');
  const comps = componentBlocks(src);

  // 找画布区域内的标签
  const open = src.indexOf('<__mod_3907.Hl');
  if (open < 0) continue;
  const close = src.indexOf('</__mod_3907.Hl>', open);
  if (close < 0) continue;
  let region = src.slice(open, close);

  const changes = [];
  for (const m of region.matchAll(/<([A-Za-z_$][\w$]*)((?:\s+[A-Za-z_$][\w$]*(?:="[^"]*"|=\{[^}]*\})?)*)\s*\/?>/g)) {
    const tag = m[1];
    if (tag === 'mesh' || tag === 'group' || tag === 'primitive' || tag === 'points') continue;
    const attrs = new Set([...m[2].matchAll(/([A-Za-z_$][\w$]*)\s*=/g)].map((x) => x[1]));
    if (attrs.size < 2) continue;
    // 当前绑到哪个组件
    const alias = src.match(new RegExp('const\\s+' + tag + '\\s*:\\s*any\\s*=\\s*([A-Za-z_$][\\w$]*);'));
    const current = alias ? alias[1] : null;
    const cur = comps.find((c) => c.name === current);
    // 当前绑定的组件是否「含画布」——若是，说明绑错了
    if (cur && !cur.hasCanvas) continue;
    // 找真正的场景组件：用 hooks 且参数重合最多，且不含画布
    let best = null, score = 0;
    for (const c of comps) {
      if (c.hasCanvas) continue;
      let sc = 0;
      for (const a of attrs) if (c.props.has(a)) sc++;
      if (c.usesHooks) sc += 1;
      if (sc > score) { score = sc; best = c; }
    }
    if (!best || score < 3) continue;
    if (current === best.name) continue;
    changes.push({ tag, from: current, to: best.name, score });
  }

  if (!changes.length) continue;
  let out = src;
  for (const ch of changes) {
    const newAlias = ch.to.toUpperCase() + 'Scene2';
    // 替换画布区域里的标签
    const before = out;
    const o2 = out.indexOf('<__mod_3907.Hl');
    const c2 = out.indexOf('</__mod_3907.Hl>', o2);
    let reg = out.slice(o2, c2);
    reg = reg.replace(new RegExp('<' + ch.tag + '(?=[\\s/>])', 'g'), '<' + newAlias);
    reg = reg.replace(new RegExp('</' + ch.tag + '>', 'g'), '</' + newAlias + '>');
    out = out.slice(0, o2) + reg + out.slice(c2);
    if (out === before) continue;
    if (!new RegExp('\\b' + newAlias + '\\b').test(out.split('export ')[0])) {
      const tail = out.lastIndexOf('export ');
      out = tail > 0 ? out.slice(0, tail) + 'const ' + newAlias + ': any = ' + ch.to + ';\n\n' + out.slice(tail) : out + '\nconst ' + newAlias + ': any = ' + ch.to + ';\n';
    }
    // 删掉旧的错误别名
    if (ch.from) out = out.replace(new RegExp('const\\s+' + ch.tag + '\\s*:\\s*any\\s*=\\s*[A-Za-z_$][\\w$]*;\\n?', 'g'), '');
  }

  try { esbuild.transformSync(out, { loader: 'tsx' }); }
  catch (e) { console.log('语法不通过', slug, e.errors[0].text); continue; }
  if (write) fs.writeFileSync(p, out);
  fixed++;
  console.log((write ? '修好 ' : '(预演) ') + slug, changes.map((c) => c.tag + ':' + c.from + '->' + c.to + '(' + c.score + ')').join(' '));
}
console.log(`${write ? '改动' : '候选'} ${fixed} 个`);

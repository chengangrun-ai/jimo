/**
 * 修「未知小写标签」：反编译把 JSX 里的组件名写成了「已存在的非组件变量」
 * （常见是 useRef 变量，如 `<x width=... />`），React 把它当未知 HTML 元素，
 * 页面看起来就是空壳。
 *
 * 修法（启发式）：在同一文件里找「参数名与标签属性重合 ≥2 个」的组件，
 * 认定它就是本来要用的组件，于是把标签改成大写别名。
 *
 * 用法: node scripts/fix-unknown-tags.js [--write] [slug...]
 */
const fs = require('fs');
const path = require('path');
const esbuild = require('esbuild');

const ROOT = process.cwd();
const write = process.argv.includes('--write');
const only = process.argv.slice(2).filter((a) => !a.startsWith('--'));

const dirs = ['data/tsx/components', 'data/tsx/blocks', 'data/tsx/app-ui'];

/** 解析函数参数名 */
function paramNames(snippet) {
  const names = new Set();
  for (const m of snippet.matchAll(/([A-Za-z_$][\w$]*)\s*[:=]/g)) names.add(m[1]);
  return names;
}

let touched = 0;
for (const dir of dirs) {
  const abs = path.join(ROOT, dir);
  if (!fs.existsSync(abs)) continue;
  for (const f of fs.readdirSync(abs)) {
    if (!f.endsWith('.tsx')) continue;
    if (only.length && !only.includes(f.replace(/\.tsx$/, ''))) continue;
    const p = path.join(abs, f);
    const original = fs.readFileSync(p, 'utf8');
    let s = original;

    // 组件定义：局部名 + 其参数名集合
    const comps = [];
    for (const m of s.matchAll(/(?:^|[,;]\s*)([A-Za-z_$][\w$]*)\s*=\s*\(\{([\s\S]{0,400}?)\}\)\s*=>/g)) {
      comps.push({ name: m[1], props: paramNames(m[2]) });
    }
    if (!comps.length) continue;

    const aliases = [];
    for (const m of s.matchAll(/<([a-z])((?:\s+[A-Za-z_$][\w$]*(?:=[^>\s]*)?)*)\s*\/?>/g)) {
      const tag = m[1];
      const attrs = new Set([...m[2].matchAll(/([A-Za-z_$][\w$]*)\s*=/g)].map((x) => x[1]));
      if (!attrs.size) continue;
      // 排除 HTML 标签
      if (['a', 'b', 'i', 'p', 'q', 's', 'u'].includes(tag) && attrs.size < 3) continue;
      let best = null;
      let bestScore = 0;
      for (const c of comps) {
        if (c.name === tag) continue;
        let score = 0;
        for (const a of attrs) if (c.props.has(a)) score++;
        if (score > bestScore) { bestScore = score; best = c; }
      }
      if (!best || bestScore < 2) continue;
      const alias = best.name.toUpperCase();
      if (new RegExp(`(?:const|let|var|function)\\s+${alias}\\b`).test(s)) continue;
      s = s.replace(new RegExp(`<${tag}(?=[\\s/>])`, 'g'), `<${alias}`);
      s = s.replace(new RegExp(`</${tag}>`, 'g'), `</${alias}>`);
      aliases.push(`const ${alias}: any = ${best.name};`);
    }
    if (!aliases.length) continue;

    const tail = s.lastIndexOf('export ');
    s = tail > 0 ? s.slice(0, tail) + aliases.join('\n') + '\n\n' + s.slice(tail) : s + '\n' + aliases.join('\n') + '\n';
    try {
      esbuild.transformSync(s, { loader: 'tsx' });
    } catch {
      console.log(`跳过（语法不通过）: ${dir}/${f}`);
      continue;
    }
    touched++;
    console.log(`修 ${dir}/${f}: ${aliases.length}`);
    if (write) fs.writeFileSync(p, s);
  }
}
console.log(`共 ${touched} 个文件${write ? '已写入' : '（预演，加 --write）'}`);

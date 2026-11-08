/**
 * 把「未知小写标签」换成大写组件别名。
 *
 * 适用场景：JSX 里写成 `<x ...>`，而 `x` 在文件里确实被定义成组件（箭头函数带参数）。
 * React 见到小写会当未知 HTML 元素 → 空壳。改成 `<X>` + `const X: any = x;`。
 *
 * 防护：别名冲突检测 + 逐文件 esbuild 语法校验 + 只在同名标签存在时动手。
 * 用法: node scripts/fix-unknown-tags2.js [--write] [slug...]
 */
const fs = require('fs');
const path = require('path');
const esbuild = require('esbuild');

const ROOT = process.cwd();
const write = process.argv.includes('--write');
const only = process.argv.slice(2).filter((a) => !a.startsWith('--'));
const dirs = ['data/tsx/components', 'data/tsx/blocks', 'data/tsx/app-ui'];

let touched = 0;
let skipped = 0;

for (const dir of dirs) {
  const abs = path.join(ROOT, dir);
  if (!fs.existsSync(abs)) continue;
  for (const f of fs.readdirSync(abs)) {
    if (!f.endsWith('.tsx')) continue;
    if (only.length && !only.includes(f.replace(/\.tsx$/, ''))) continue;
    const p = path.join(abs, f);
    const original = fs.readFileSync(p, 'utf8');
    let s = original;

    // 文件里「带参数定义成函数」的名字（视为组件）
    const funcs = new Set();
    for (const m of s.matchAll(/(?:^|[,;]\s*)([a-z])\s*=\s*\(?[^)=]{0,200}?\)?\s*=>/gm)) funcs.add(m[1]);
    for (const m of s.matchAll(/^function\s+([a-z])\s*\(/gm)) funcs.add(m[1]);

    const aliases = [];
    for (const name of funcs) {
      if (!new RegExp(`<${name}(?=[\\s/>])`).test(s)) continue;
      const alias = name.toUpperCase();
      if (new RegExp(`(?:const|let|var|function)\\s+${alias}\\b`).test(s)) { skipped++; continue; }
      s = s.replace(new RegExp(`<${name}(?=[\\s/>])`, 'g'), `<${alias}`);
      s = s.replace(new RegExp(`</${name}>`, 'g'), `</${alias}>`);
      aliases.push(`const ${alias}: any = ${name};`);
    }
    if (!aliases.length) continue;

    const tail = s.lastIndexOf('export ');
    s = tail > 0 ? s.slice(0, tail) + aliases.join('\n') + '\n\n' + s.slice(tail) : s + '\n' + aliases.join('\n') + '\n';
    try {
      esbuild.transformSync(s, { loader: 'tsx' });
    } catch {
      skipped++;
      continue;
    }
    touched++;
    if (write) fs.writeFileSync(p, s);
  }
}
console.log(`改写 ${touched} 个文件，跳过 ${skipped} 处${write ? '（已写入）' : '（预演）'}`);

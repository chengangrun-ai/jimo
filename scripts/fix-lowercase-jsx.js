/**
 * 修「小写 JSX 标签」问题（组件变量是单个小写字母、JSX 也写成 <x>）。
 * React 把小写标签当未知 HTML 元素 → 渲染成空自定义元素，页面看着是空壳。
 *
 * 做法：给组件加大写别名（放在文件末尾，避免 TDZ），再把 <x>/</x> 换成 <X>/</X>。
 * 用法: node scripts/fix-lowercase-jsx.js [--write]
 */
const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const write = process.argv.includes('--write');
const HTML_OK = new Set(['a', 'b', 'i', 'p', 'q', 's', 'u']);

const dirs = ['data/tsx/components', 'data/tsx/blocks', 'data/tsx/app-ui', 'data/tsx/_helpers'];
let touched = 0;

for (const dir of dirs) {
  const abs = path.join(ROOT, dir);
  if (!fs.existsSync(abs)) continue;
  for (const f of fs.readdirSync(abs)) {
    if (!f.endsWith('.tsx')) continue;
    const p = path.join(abs, f);
    let s = fs.readFileSync(p, 'utf8');
    const before = s;

    const cands = new Set();
    for (const m of s.matchAll(/^(?:let|var|const)\s+([a-z])\s*=\s*(?:\(|React\.forwardRef|React\.memo)/gm)) {
      if (!HTML_OK.has(m[1])) cands.add(m[1]);
    }
    for (const m of s.matchAll(/^function\s+([a-z])\s*\(/gm)) {
      if (!HTML_OK.has(m[1])) cands.add(m[1]);
    }

    const aliases = [];
    for (const name of [...cands]) {
      if (!new RegExp(`<${name}(?=[\\s/>])`).test(s)) continue;
      const alias = name.toUpperCase();
      if (new RegExp(`(?:const|let|var|function)\\s+${alias}\\b`).test(s)) continue;
      s = s.replace(new RegExp(`<${name}(?=[\\s/>])`, 'g'), `<${alias}`);
      s = s.replace(new RegExp(`</${name}>`, 'g'), `</${alias}>`);
      aliases.push(`const ${alias}: any = ${name};`);
    }

    if (!aliases.length) continue;

    // 别名放到文件末尾（此时原组件已定义），再补导出区之前
    const tailIdx = s.lastIndexOf('export ');
    if (tailIdx > 0) s = s.slice(0, tailIdx) + aliases.join('\n') + '\n\n' + s.slice(tailIdx);
    else s = s + '\n' + aliases.join('\n') + '\n';

    touched++;
    console.log(`修 ${dir}/${f}: ${aliases.length} 个别名`);
    if (write) fs.writeFileSync(p, s);
  }
}
console.log(`共 ${touched} 个文件${write ? '已写入' : '（预演，加 --write）'}`);

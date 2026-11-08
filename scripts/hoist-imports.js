/**
 * 把散落在文件中间（甚至函数体里）的 import 语句移到文件顶部。
 *
 * 反编译产物常把 import 插在用到它的位置，甚至插进函数体里，
 * 于是模块内的命名空间变量根本没被声明，运行时报 `__mod_XXXX is not defined`。
 *
 * 用法: node scripts/hoist-imports.js [--write]
 */
const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const write = process.argv.includes('--write');
const dirs = ['data/tsx/components', 'data/tsx/blocks', 'data/tsx/app-ui', 'data/tsx/free', 'data/tsx/_helpers'];

const IMPORT_RE = /^\s*import\s+(?:[^;]+?)\s+from\s+["'][^"']+["'];?\s*$/;

let touched = 0;
for (const dir of dirs) {
  const abs = path.join(ROOT, dir);
  if (!fs.existsSync(abs)) continue;
  for (const f of fs.readdirSync(abs)) {
    if (!f.endsWith('.tsx')) continue;
    const p = path.join(abs, f);
    const lines = fs.readFileSync(p, 'utf8').split('\n');

    const top = [];
    const rest = [];
    let seenCode = false;
    for (const line of lines) {
      const isImport = IMPORT_RE.test(line) && line.trim().startsWith('import');
      if (isImport && seenCode) {
        top.push(line.trim());           // 中间/函数里的 import → 提到顶部
        continue;
      }
      if (!isImport && line.trim() && !line.trim().startsWith('//') && !line.trim().startsWith('*')) {
        seenCode = true;
      }
      rest.push(line);
    }
    if (!top.length) continue;

    // 顶部已有的 import 保留在原位置；把提升的这些插到第一条 import 之后
    let insertAt = 0;
    for (let i = 0; i < rest.length; i++) {
      if (rest[i].trim().startsWith('import')) insertAt = i + 1;
      else if (rest[i].trim() && !rest[i].trim().startsWith('//')) break;
    }
    const out = [...rest.slice(0, insertAt), ...top, ...rest.slice(insertAt)];
    touched++;
    console.log(`提升 ${dir}/${f}: ${top.length} 条 import`);
    if (write) fs.writeFileSync(p, out.join('\n'));
  }
}
console.log(`共 ${touched} 个文件${write ? '已写入' : '（预演，加 --write）'}`);

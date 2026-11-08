/**
 * 修「Canvas 内部的小写组件标签」（安全版）。
 *
 * 背景：R3F 的 `<Canvas>` 里，小写标签会被当成 three 原生物体；反编译把场景组件
 * 写成单字母小写（`p`），于是报 "P is not part of the THREE namespace"，
 * 整个画布不再挂载。
 *
 * 三重防护：
 *   1) 只在 Canvas 区域内替换；
 *   2) 别名名冲突检测（文件里已有同名 const/let/var/function 就跳过）；
 *   3) 每个文件改完先过 esbuild 语法校验，不通过就不写。
 *
 * 用法: node scripts/fix-canvas-tags.js [--write]
 */
const fs = require('fs');
const path = require('path');
const esbuild = require('esbuild');

const ROOT = process.cwd();
const write = process.argv.includes('--write');
const dirs = ['data/tsx/components', 'data/tsx/blocks', 'data/tsx/app-ui'];

function syntaxOk(code) {
  try {
    esbuild.transformSync(code, { loader: 'tsx' });
    return true;
  } catch {
    return false;
  }
}

let touched = 0;
let skipped = 0;

for (const dir of dirs) {
  const abs = path.join(ROOT, dir);
  if (!fs.existsSync(abs)) continue;
  for (const f of fs.readdirSync(abs)) {
    if (!f.endsWith('.tsx')) continue;
    const p = path.join(abs, f);
    const original = fs.readFileSync(p, 'utf8');
    let s = original;

    const open = s.indexOf('<__mod_3907.Hl');
    if (open < 0) continue;
    const close = s.indexOf('</__mod_3907.Hl>', open);
    if (close < 0) continue;

    let region = s.slice(open, close);

    // 文件里定义成组件的单小写字母
    const comps = new Set();
    for (const m of s.matchAll(/(?:^|[,;]\s*)([a-z])\s*=\s*(?:\(|\{)/gm)) comps.add(m[1]);
    for (const m of s.matchAll(/^function\s+([a-z])\s*\(/gm)) comps.add(m[1]);

    const aliases = [];
    for (const name of comps) {
      if (!new RegExp(`<${name}(?=[\\s/>])`).test(region)) continue;
      const alias = name.toUpperCase();
      // 冲突检测：文件里已有同名声明（任意位置）就跳过
      if (new RegExp(`(?:const|let|var|function)\\s+${alias}\\b`).test(s)) {
        skipped++;
        continue;
      }
      if (new RegExp(`\\b${alias}\\s*=`).test(s)) {
        skipped++;
        continue;
      }
      region = region.replace(new RegExp(`<${name}(?=[\\s/>])`, 'g'), `<${alias}`);
      region = region.replace(new RegExp(`</${name}>`, 'g'), `</${alias}>`);
      aliases.push(`const ${alias}: any = ${name};`);
    }
    if (!aliases.length) continue;

    s = s.slice(0, open) + region + s.slice(close);
    const tail = s.lastIndexOf('export ');
    s = tail > 0 ? s.slice(0, tail) + aliases.join('\n') + '\n\n' + s.slice(tail) : s + '\n' + aliases.join('\n') + '\n';

    if (!syntaxOk(s)) {
      skipped++;
      console.log(`跳过（语法不通过）: ${dir}/${f}`);
      continue;
    }
    touched++;
    if (write) fs.writeFileSync(p, s);
  }
}
console.log(`改写 ${touched} 个文件，跳过 ${skipped} 处${write ? '（已写入）' : '（预演，加 --write）'}`);

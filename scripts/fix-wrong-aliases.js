/**
 * 修正「错误的别名导出」。
 *
 * fix-exports 早期版本用原始 bundle 的 local 名去匹配，但反编译产物里
 * 变量名往往被改成了**导出名本身**。于是产生这种错误：
 *     export { a as I };     ← 实际文件里是 function I(...)，没有 a
 *                        正确应为 export { I };
 *
 * 判定：export { LOCAL as NAME } 中，如果 NAME 在本文件里有定义、而 LOCAL 没有，
 * 就改成 export { NAME }。
 */
const fs = require('fs');
const path = require('path');

const HELPER_DIR = path.join(process.cwd(), 'data', 'tsx', '_helpers');
const DRY = !process.argv.includes('--apply');

const escOf = (s) => s.replace(/[.*+?^${}()|[\]\\$]/g, '\\$&');
const definedAs = (src, v) => {
  const esc = escOf(v);
  return [
    new RegExp(`\\b(?:let|const|var|function|class)\\s+${esc}\\b`),
    new RegExp(`(?:^|[;{}(,])\\s*${esc}\\s*=`, 'm'),
    new RegExp(`(?:,|\\n)\\s*${esc}\\s*=`, 'm'),
    new RegExp(`\\b${esc}\\s*=>`),
  ].some(re => re.test(src));
};

let fixed = 0;
const detail = [];
const files = fs.readdirSync(HELPER_DIR).filter(f => f.endsWith('.tsx'));

for (const f of files) {
  const p = path.join(HELPER_DIR, f);
  let src = fs.readFileSync(p, 'utf8');
  let changed = false;

  // 逐个 export { ... } 块处理
  src = src.replace(/export\s*\{([^}]*)\}\s*;?/g, (whole, inner) => {
    const parts = inner.split(',').map(s => s.trim()).filter(Boolean);
    const newParts = [];
    for (const part of parts) {
      const m = part.match(/^([A-Za-z_$][\w$]*)\s+as\s+([A-Za-z_$][\w$]*)$/);
      if (!m) { newParts.push(part); continue; }
      const [, local, name] = m;
      if (name === 'default') { newParts.push(part); continue; }

      const nameDefined = definedAs(src, name);
      const localDefined = definedAs(src, local);
      // NAME 有定义、LOCAL 没有 → 是错误别名，改成直接导出 NAME
      if (nameDefined && !localDefined) {
        newParts.push(name);
        changed = true;
        fixed++;
        if (detail.length < 12) detail.push(`${f}: ${part} → ${name}`);
      } else {
        newParts.push(part);
      }
    }
    return `export { ${newParts.join(', ')} };`;
  });

  if (changed && !DRY) fs.writeFileSync(p, src, 'utf8');
}

console.log(`${DRY ? '[预演]' : '[已写入]'} 修正 ${fixed} 处错误别名导出`);
detail.forEach(d => console.log(`  ${d}`));
if (DRY) console.log('\n加 --apply 实际写入');

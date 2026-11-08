/**
 * 安全版「导出别名错位」修复。
 *
 * 只在满足全部条件时改写 `export { alias as Name }` → `export { Name }`：
 *   1. Name 在本文件有声明（function/class/const/let/var）
 *   2. alias 在本文件没有声明
 *   3. alias 不是任何 import 引入的名字（否则会被改成导出命名空间对象 → React #130）
 */
const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();

function analyze(src) {
  const declared = new Set();
  for (const m of src.matchAll(/^(?:export\s+)?(?:function|class)\s+([A-Za-z_$][\w$]*)/gm)) declared.add(m[1]);
  for (const m of src.matchAll(/^(?:export\s+)?(?:const|let|var)\s+([A-Za-z_$][\w$]*)/gm)) declared.add(m[1]);
  for (const m of src.matchAll(/^(?:const|let|var)\s*\{([^}]*)\}/gm)) {
    for (const part of m[1].split(',')) {
      const t = part.trim();
      if (!t) continue;
      const alias = t.match(/\bas\s+([A-Za-z_$][\w$]*)$/);
      declared.add((alias ? alias[1] : t.split(/[:=]/).pop()).trim());
    }
  }
  const imported = new Set();
  for (const m of src.matchAll(/^import\s+(?:(\*\s+as\s+)?([A-Za-z_$][\w$]*)|(\{[^}]*\}))\s+from/gm)) {
    if (m[2]) imported.add(m[2].replace(/^\*\s+as\s+/, ''));
    if (m[3]) {
      for (const part of m[3].replace(/[{}]/g, '').split(',')) {
        const t = part.trim();
        if (!t) continue;
        const alias = t.match(/\bas\s+([A-Za-z_$][\w$]*)$/);
        imported.add((alias ? alias[1] : t).trim());
      }
    }
  }
  return { declared, imported };
}

let changed = 0;
for (const dir of ['data/tsx/_helpers']) {
  const abs = path.join(ROOT, dir);
  for (const f of fs.readdirSync(abs)) {
    if (!f.endsWith('.tsx')) continue;
    const p = path.join(abs, f);
    let src = fs.readFileSync(p, 'utf8');
    const before = src;
    const { declared, imported } = analyze(src);
    src = src.replace(/export\s*\{([^}]*)\}/g, (whole, inner) => {
      let dirty = false;
      const parts = inner.split(',').map((s) => s.trim()).filter(Boolean).map((part) => {
        const m = part.match(/^([A-Za-z_$][\w$]*)\s+as\s+([A-Za-z_$][\w$]*)$/);
        if (!m) return part;
        const [, local, exported] = m;
        if (!declared.has(local) && !imported.has(local) && declared.has(exported)) { dirty = true; return exported; }
        return part;
      });
      return dirty ? `export { ${parts.join(', ')} }` : whole;
    });
    if (src !== before) { fs.writeFileSync(p, src); changed++; console.log('修复', f); }
  }
}
console.log(`共修复 ${changed} 个文件`);

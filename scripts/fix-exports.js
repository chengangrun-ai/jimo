/**
 * 从原始 webpack bundle 提取「模块真实导出映射」，批量修正反编译 helper 的 export 语句。
 *
 * 背景：
 *   反编译产物 `data/tsx/_helpers/<id>.tsx` 的 export 语句是猜的，例如
 *     33293 反编译成 `export { o as default, o }`
 *   但原始 bundle 里是
 *     33293:(t,e,i)=>{i.d(e,{B:()=>l}); ... let l = {...}}
 *   即真实导出名是 `B`，指向变量 `l`。映射表在反编译时丢了，导致引用方
 *   `__mod_33293.B` 取到 undefined（esbuild 折叠成 (void 0)）。
 *
 * 做法：
 *   1. 扫描所有 data/code/<kind>/*.txt 原始 bundle，解析出
 *        moduleId -> { exportName: localVarName }
 *   2. 对每个 helper，如果它的 export 语句与原始不符，按原始映射重写
 */
const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const CODE_DIR = path.join(ROOT, 'data', 'code');
const HELPER_DIR = path.join(ROOT, 'data', 'tsx', '_helpers');

/** ---------- 1. 从原始 bundle 解析导出映射 ---------- */
function parseBundleExports(text) {
  /** @type {Map<string, {name:string, local:string}[]>} */
  const out = new Map();

  /**
   * 按 `// ==== main module NNNN ==== / // ==== dep NNNN ====` 注释切分。
   *
   * 这是抓取工具自己生成的分隔注释，位置精确，比用正则猜「数字:(」可靠得多
   * （实测用 `\d+:(` 会误匹配 `i(62369)` 里的片段，把模块体截断）。
   */
  const markerRe = /\/\/ ==== (?:main module|dep) (\d+) [^=]*====/g;
  const marks = [...text.matchAll(markerRe)];

  for (let i = 0; i < marks.length; i++) {
    const id = marks[i][1];
    const start = marks[i].index + marks[i][0].length;
    const end = i + 1 < marks.length ? marks[i + 1].index : text.length;
    const body = text.slice(start, Math.min(start + 4000, end));

    // i.d(e,{ A:()=>x, B:()=>y })
    const dMatch = body.match(/\.d\([A-Za-z_$][\w$]*,\s*\{([\s\S]{0,2000}?)\}\s*\)/);
    if (!dMatch) continue;

    const entries = [];
    for (const m of dMatch[1].matchAll(/([A-Za-z_$][\w$]*)\s*:\s*\(\s*\)\s*=>\s*([A-Za-z_$][\w$]*)/g)) {
      entries.push({ name: m[1], local: m[2] });
    }
    if (!entries.length) {
      for (const m of dMatch[1].matchAll(/([A-Za-z_$][\w$]*)\s*:\s*([A-Za-z_$][\w$]*)/g)) {
        entries.push({ name: m[1], local: m[2] });
      }
    }
    if (entries.length) {
      // 同一模块可能在多个 bundle 出现，合并（后出现的补充）
      if (!out.has(id)) out.set(id, new Map());
      const m = out.get(id);
      for (const e of entries) m.set(e.name, e.local);
    }
  }

  // 转成数组形式
  const result = new Map();
  for (const [id, m] of out) {
    result.set(id, [...m.entries()].map(([name, local]) => ({ name, local })));
  }
  return result;
}

/** 收集所有原始 bundle 文件 */
function allBundles() {
  const files = [];
  for (const kind of fs.readdirSync(CODE_DIR)) {
    const dir = path.join(CODE_DIR, kind);
    if (!fs.statSync(dir).isDirectory()) continue;
    for (const f of fs.readdirSync(dir)) {
      if (f.endsWith('.txt')) files.push(path.join(dir, f));
    }
  }
  return files;
}

/** ---------- 2. 主流程 ---------- */
const bundles = allBundles();
console.log(`扫描 ${bundles.length} 个原始 bundle...`);

/** 合并所有 bundle 的导出映射：moduleId -> entries（后出现的补充前面的） */
const exportMap = new Map();
for (const b of bundles) {
  const text = fs.readFileSync(b, 'utf8');
  const parsed = parseBundleExports(text);
  for (const [id, entries] of parsed) {
    if (!exportMap.has(id)) exportMap.set(id, new Map());
    const m = exportMap.get(id);
    for (const e of entries) m.set(e.name, e.local);
  }
}

console.log(`从原始 bundle 提取到 ${exportMap.size} 个模块的导出映射`);

// 统计样例
const sample = [...exportMap.entries()].slice(0, 3);
for (const [id, m] of sample) {
  console.log(`  模块 ${id}: ${[...m.entries()].map(([n, l]) => `${n}←${l}`).join(', ')}`);
}

/** ---------- 3. 修正 helper ---------- */
const DRY = !process.argv.includes('--apply');
let patched = 0;
let skipped = 0;
const patchLog = [];

const helperFiles = fs.readdirSync(HELPER_DIR).filter(f => f.endsWith('.tsx'));
for (const f of helperFiles) {
  const id = f.replace(/\.tsx$/, '');
  const realExports = exportMap.get(id);
  if (!realExports || !realExports.size) { skipped++; continue; }

  const p = path.join(HELPER_DIR, f);
  let src = fs.readFileSync(p, 'utf8');

  const curExports = [...src.matchAll(/export\s*\{([^}]*)\}/g)];
  const curNames = new Set();
  for (const m of curExports) {
    for (const part of m[1].split(',')) {
      const asMatch = part.match(/\bas\s+([A-Za-z_$][\w$]*)/);
      if (asMatch) curNames.add(asMatch[1]);
      else {
        const plain = part.match(/^\s*([A-Za-z_$][\w$]*)/);
        if (plain) curNames.add(plain[1]);
      }
    }
  }

  const missing = [...realExports.keys()].filter(n => !curNames.has(n) && n !== 'default');
  if (!missing.length) { skipped++; continue; }

  const aliasParts = [];
  for (const [name, local] of realExports.entries()) {
    if (name === 'default') continue;
    if (curNames.has(name)) continue;

    /**
     * 判定用哪个变量名导出。
     *
     * 关键教训：反编译工具**保留了导出名作为变量名**（原始 bundle 里是
     * `I: () => a`，反编译后直接写成 `function I(...)`；`KN: () => r` 写成
     * `KN = n("%")`）。所以必须**优先用导出名本身**，否则会出现
     * `export { a as I }` 这种把无关变量 a 当成 I 的错误（实测导致运行时
     * `(0, void 0) is not a function`）。
     *
     * 顺序：导出名 → 原始 local 名。
     */
    const escOf = (s) => s.replace(/[.*+?^${}()|[\]\\$]/g, '\\$&');
    const definedAs = (v) => {
      const esc = escOf(v);
      return [
        new RegExp(`\\b(?:let|const|var|function|class)\\s+${esc}\\b`), // let X / function X
        new RegExp(`(?:^|[;{}(,])\\s*${esc}\\s*=`, 'm'),                // , X =
        new RegExp(`(?:,|\\n)\\s*${esc}\\s*=`, 'm'),                    // 换行后 X =
        new RegExp(`\\b${esc}\\s*=>`),                                  // X => ...
      ].some(re => re.test(src));
    };

    let chosen = null;
    if (definedAs(name)) chosen = name;              // 优先导出名本身
    else if (local !== name && definedAs(local)) chosen = local;  // 退回原始 local

    if (chosen) aliasParts.push(chosen === name ? name : `${chosen} as ${name}`);
  }
  if (!aliasParts.length) { skipped++; continue; }

  if (!DRY) {
    src = src.trimEnd() + `\nexport { ${aliasParts.join(', ')} };\n`;
    fs.writeFileSync(p, src, 'utf8');
  }
  patched++;
  if (patchLog.length < 15) patchLog.push(`${id}: +${aliasParts.length} (${aliasParts.slice(0, 4).join(', ')})`);
}

console.log(`\n${DRY ? '[预演]' : '[已写入]'} 可修正 ${patched} 个 helper，${skipped} 个跳过`);
patchLog.forEach(l => console.log(`  ${l}`));
if (DRY) console.log('\n加 --apply 实际写入');

/**
 * 按 `// ==== dep N ====` 注释精确切出 module 48050 的完整代码，
 * 再转成独立 ESM。
 */
const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const FILE = path.join(ROOT, 'data/code/components/mosaic-waves.txt');
const text = fs.readFileSync(FILE, 'utf8');

// 用显式「模块头」切分：`NNNN:(e,t,a)=>{`
const headRe = /(?:^|\n)(\d+):\(([^)]*)\)\s*=>\s*\{/g;
const heads = [...text.matchAll(headRe)];
let target = null;
for (let i = 0; i < heads.length; i++) {
  if (heads[i][1] === '48050') {
    const bodyStart = heads[i].index + heads[i][0].length;
    // 下一个模块头（或下一个注释标记）作为结束
    const next = i + 1 < heads.length ? heads[i + 1].index : text.length;
    const marker = text.indexOf('// ==== ', bodyStart);
    const end = marker > 0 && marker < next ? marker : next;
    target = { body: text.slice(bodyStart, end), args: heads[i][2] };
    break;
  }
}
if (!target) throw new Error('module 48050 未找到');

console.log('提取 body:', target.body.length, '字节');

let body = target.body;
// 去掉 webpack 导出注册
body = body.replace(/\ba\.r\(\s*t\s*\)\s*,?/, '');
body = body.replace(/\ba\.d\(\s*t\s*,\s*\{[\s\S]*?\}\s*\)\s*[,;]?/, '');

// 依赖编号 → npm 包（用原始 bundle 的模块表交叉验证过）
const depMap = {
  95155: 'react/jsx-runtime',
  12115: 'react',
  81712: '@react-three/fiber',
  3907: 'three',
  2253: 'three',
  90650: 'three',
};

const imports = [];
const seenVar = new Map(); // 变量名 -> import 名
// 匹配 `var l=a(95155), r=a(12115), ... ;` 整条声明
const declRe = /\b(?:var|let|const)\s+((?:[A-Za-z_$][\w$]*\s*=\s*a\(\d+\)\s*,?\s*)+);/g;
body = body.replace(declRe, (full) => {
  const pairs = [...full.matchAll(/([A-Za-z_$][\w$]*)\s*=\s*a\((\d+)\)/g)];
  for (const [, name, id] of pairs) {
    const pkg = depMap[id];
    if (!pkg) { console.warn(`未知依赖 ${id}`); continue; }
    seenVar.set(name, name);
    imports.push(`import * as ${name} from '${pkg}';`);
  }
  return '';
});
// 剩余 a(N) 调用
body = body.replace(/\ba\((\d+)\)/g, (full, id) => {
  const pkg = depMap[id];
  if (!pkg) return full;
  const name = `__dep${id}`;
  if (!seenVar.has(name)) { imports.push(`import * as ${name} from '${pkg}';`); seenVar.set(name, name); }
  return name;
});

const defMatch = target.body.match(/default:\s*\(\)\s*=>\s*([A-Za-z_$][\w$]*)/);
const defName = defMatch ? defMatch[1] : 'v';

const out = `/**
 * 原始 webpack module 48050 —— MosaicWaves WebGL 背景。
 * 从 data/code/components/mosaic-waves.txt 还原为 ESM。
 */
${imports.join('\n')}

${body.trim()}

export { ${defName} as default };
`;

fs.writeFileSync(path.join(ROOT, 'data/tsx/_helpers/48050.tsx'), out, 'utf8');
fs.writeFileSync(path.join(ROOT, 'analysis/module-48050.ems.js'), out, 'utf8');
console.log('生成 48050.tsx:', out.length, '字节, 默认导出:', defName, ', imports:', imports.length);

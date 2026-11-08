/**
 * 从原始 webpack bundle 提取 module 48050 的完整源码。
 * 输出写入 data/tsx/_helpers/48050.raw.js 供还原使用。
 */
const fs = require('fs');
const path = require('path');
const t = fs.readFileSync(path.join(process.cwd(), 'data/code/components/mosaic-waves.txt'), 'utf8');
const re = /\/\/ ==== (?:main module|dep) (\d+) \([^\n]*\) ====\n\{?([\s\S]*?)(?=\n\/\/ ==== |$)/g;
let m, found = null;
while ((m = re.exec(t)) !== null) {
  if (m[1] === '48050') { found = m[2].replace(/^\{?48050:\(/, '(').replace(/\}\s*,\s*$/, ''); break; }
}
if (!found) {
  const i = t.indexOf('48050:(');
  if (i < 0) throw new Error('module 48050 not found');
  const end = t.indexOf('// ==== ', i + 10);
  found = t.slice(i, end > 0 ? end : i + 20000);
}
fs.writeFileSync(path.join(process.cwd(), 'analysis', 'module-48050.raw.js'), found, 'utf8');
console.log('提取到 module 48050:', found.length, '字节');

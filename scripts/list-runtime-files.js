/**
 * 算出运行时真正需要的文件清单，生成到 analysis/runtime-files.txt。
 *
 * 运行时需要：
 *   - data/index.json
 *   - data/agent-kit.json（智能体套件）
 *   - 索引里引用到的 1013 个 codeFile
 *   - 索引里引用到的 tsxFile（渲染用的组件源码）
 *   - data/tsx/_helpers/**（组件共享的 3D / 动画库，不在索引里但必须）
 *   - public/ 下的预览图、字体、模板包
 */
const fs = require('fs');
const path = require('path');

const index = JSON.parse(fs.readFileSync('data/index.json', 'utf8'));
const need = new Set(['data/index.json']);

function walk(obj) {
  if (!obj || typeof obj !== 'object') return;
  for (const [k, v] of Object.entries(obj)) {
    if (typeof v === 'string' && /^(code|tsx)\//.test(v)) need.add('data/' + v);
    else if (Array.isArray(v)) v.forEach(walk);
    else if (v && typeof v === 'object') walk(v);
  }
}
walk(index);

if (fs.existsSync('data/agent-kit.json')) need.add('data/agent-kit.json');

// _helpers 全部要
const helperDir = 'data/tsx/_helpers';
if (fs.existsSync(helperDir)) {
  for (const f of fs.readdirSync(helperDir)) {
    const p = path.join(helperDir, f);
    if (fs.statSync(p).isFile()) need.add(p.replace(/\\/g, '/'));
  }
}

const list = [...need].sort();
fs.writeFileSync('analysis/runtime-files.txt', list.join('\n'));

let bytes = 0;
for (const f of list) {
  try { bytes += fs.statSync(f).size; } catch (e) {}
}
console.log('运行时必需文件:', list.length, '个,', Math.round(bytes / 1024 / 1024), 'MB');

// 公共资源体积
let pubBytes = 0, pubCount = 0;
for (const dir of ['public/previews', 'public/fonts', 'public/images', 'public/css']) {
  if (!fs.existsSync(dir)) continue;
  for (const f of fs.readdirSync(dir, { recursive: true })) {
    const p = path.join(dir, f);
    try { if (fs.statSync(p).isFile()) { pubBytes += fs.statSync(p).size; pubCount++; } } catch (e) {}
  }
}
console.log('public 小资源:', pubCount, '个,', Math.round(pubBytes / 1024 / 1024), 'MB');

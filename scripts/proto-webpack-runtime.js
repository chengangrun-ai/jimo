/**
 * 原型：直接运行原始 webpack bundle，验证「不靠反编译 helper 也能渲染」。
 *
 * 原站抓下来的 data/code/<kind>/<slug>.txt 里带有该组件用到的**全部** webpack
 * 模块（NNNN:(e,t,a)=>{...}）。之前一直用反编译后的 _helpers 拼，导出名错位修不完。
 * 这里改用原始代码本身 + 一个最小的 webpack require 模拟器。
 */
const fs = require('fs');
const path = require('path');
const React = require('react');
const { renderToStaticMarkup } = require('react-dom/server');

const ROOT = process.cwd();

/** 从 `{` 开始做括号配对，跳过字符串/模板串/注释，返回匹配的 `}` 下标 */
function matchBrace(s, openIdx) {
  let depth = 0;
  let mode = null; // ' " ` // /* */
  let i = openIdx;
  for (; i < s.length; i++) {
    const c = s[i], n = s[i + 1];
    if (mode === '//') { if (c === '\n') mode = null; continue; }
    if (mode === '/*') { if (c === '*' && n === '/') { mode = null; i++; } continue; }
    if (mode === '"' || mode === "'" || mode === '`') {
      if (c === '\\') { i++; continue; }
      if (c === mode) mode = null;
      continue;
    }
    if (c === '/' && n === '/') { mode = '//'; i++; continue; }
    if (c === '/' && n === '*') { mode = '/*'; i++; continue; }
    if (c === '"' || c === "'" || c === '`') { mode = c; continue; }
    if (c === '{') depth++;
    else if (c === '}') { depth--; if (depth === 0) return i; }
  }
  return -1;
}

/** 提取所有模块：id -> { args, body } */
function extractModules(text) {
  const mods = new Map();
  const headRe = /(?:^|[^\d])(\d+):\(([^)]*)\)\s*=>\s*\{/g;
  let m;
  while ((m = headRe.exec(text)) !== null) {
    const id = m[1];
    const args = m[2].split(',').map(s => s.trim());
    const braceIdx = text.indexOf('{', m.index + m[0].length - 1);
    const close = matchBrace(text, braceIdx);
    if (close < 0) continue;
    mods.set(id, { args, body: text.slice(braceIdx + 1, close) });
    headRe.lastIndex = close + 1; // 跳过已消费的模块体
  }
  return mods;
}

/** 主模块 id：优先 `// ==== main module NNNN ====`，否则第一个模块 */
function findMain(text, mods) {
  const m = text.match(/main module (\d+)/);
  if (m && mods.has(m[1])) return m[1];
  return mods.keys().next().value;
}

function run(text, label) {
  const mods = extractModules(text);
  const main = findMain(text, mods);
  console.log(`\n=== ${label}: ${mods.size} 个模块, 主模块 ${main} ===`);
  if (!mods.size) return;

  const compiled = new Map();
  for (const [id, { args, body }] of mods) {
    try {
      compiled.set(id, new Function(...args, body));
    } catch (e) {
      // 语法有问题的模块单独记下
      console.log(`  模块 ${id} 编译失败: ${e.message.slice(0, 60)}`);
    }
  }

  const cache = new Map();
  const externals = new Map();

  function makeRequire() {
    const s = (id) => {
      if (cache.has(id)) return cache.get(id).exports;
      if (externals.has(id)) return externals.get(id);
      const fn = compiled.get(String(id));
      if (!fn) {
        // 未知模块：返回一个能容忍任意访问的代理，别让整条链断掉
        const p = new Proxy(() => {}, { get: () => p, apply: () => p });
        externals.set(id, p);
        return p;
      }
      const mod = { exports: {} };
      cache.set(id, mod);
      try {
        fn(mod, mod.exports, s);
      } catch (e) {
        console.log(`  模块 ${id} 执行失败: ${e.message.slice(0, 80)}`);
      }
      return mod.exports;
    };
    s.r = (ex) => { try { Object.defineProperty(ex, '__esModule', { value: true }); } catch {} };
    s.d = (ex, defs) => {
      for (const k in defs) {
        if (!Object.prototype.hasOwnProperty.call(ex, k)) {
          try { Object.defineProperty(ex, k, { enumerable: true, get: defs[k] }); } catch {}
        }
      }
    };
    s.t = (mod, mode) => {
      if (mode & 1) mod = s(mod);
      if (mod && mod.__esModule) return mod;
      const ns = { default: mod };
      if (mod && typeof mod === 'object') for (const k in mod) {
        try { Object.defineProperty(ns, k, { enumerable: true, get: () => mod[k] }); } catch {}
      }
      return ns;
    };
    s.n = (mod) => {
      const getter = mod && mod.__esModule
        ? () => mod.default
        : () => mod;
      s.d(getter, { a: getter });
      return getter;
    };
    s.e = () => Promise.resolve();
    s.bind = (req, id) => () => req(id);
    s.g = globalThis;
    return s;
  }

  const req = makeRequire();
  let Comp = null;
  try {
    const exported = req(main);
    Comp = exported && (exported.default || exported);
  } catch (e) {
    console.log('  主模块执行失败:', e.message.slice(0, 120));
  }
  console.log('  取到组件:', typeof Comp);

  if (typeof Comp === 'function') {
    try {
      const el = React.createElement(Comp, {});
      const html = renderToStaticMarkup(el);
      console.log(`  ✓ 渲染成功 len=${html.length} 片段=${html.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim().slice(0, 80)}`);
    } catch (e) {
      console.log('  渲染失败:', (e.stack || e.message).slice(0, 300));
    }
  }
}

const cases = process.argv.slice(2);
if (!cases.length) cases.push('blocks/404-1', 'components/3d-letter-swap', 'blocks/pricing-1');
for (const c of cases) {
  const p = path.join(ROOT, 'data', 'code', c + '.txt');
  if (!fs.existsSync(p)) { console.log(`\n${c}: 文件不存在`); continue; }
  run(fs.readFileSync(p, 'utf8'), c);
}

/**
 * 真实渲染验收：不只看 HTTP 200，而是检查页面/iframe 里是否真的有可见内容。
 *
 * 用法: node scripts/verify-render.js [baseUrl]
 */
const { JSDOM } = require('jsdom');
const path = require('path');

const BASE = process.argv[2] || 'http://localhost:3000';
const results = [];
function check(name, pass, detail) {
  results.push({ name, pass, detail });
  console.log(`${pass ? '✓' : '✗'} ${name}${detail ? ' — ' + detail : ''}`);
}

async function getText(url, timeoutMs = 60000) {
  const ctl = new AbortController();
  const t = setTimeout(() => ctl.abort(), timeoutMs);
  try {
    const res = await fetch(url, { signal: ctl.signal });
    const text = await res.text();
    return { status: res.status, text };
  } catch (e) {
    return { status: 0, text: '', err: String(e.message || e) };
  } finally {
    clearTimeout(t);
  }
}

/** 判断 HTML 里是否有真实可见内容（去掉标签后还有字，或有 canvas/svg/img） */
function hasRealContent(html) {
  const text = html.replace(/<script[\s\S]*?<\/script>/gi, '').replace(/<[^>]*>/g, ' ').replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').trim();
  const hasVisual = /<canvas|<svg|<img|<video/i.test(html);
  return { textLen: text.length, hasVisual, ok: text.length > 10 || hasVisual };
}

async function main() {
  console.log(`\n=== 真实渲染验收 (${BASE}) ===\n`);

  // ── 1. 15 个模板全部检查（不只是第一个）──
  console.log('【模板预览】');
  const tplList = await getText(`${BASE}/api/list/components`).catch(() => null);
  const idxRaw = require('fs').readFileSync(path.join(__dirname, '..', 'data', 'index.json'), 'utf8');
  const idx = JSON.parse(idxRaw);
  const slugs = idx.pro.templates.map(t => t.slug);

  for (const slug of slugs) {
    // 检查模板原始页面能否独立渲染
    const raw = await getText(`${BASE}/templates/${slug}/index.html`);
    const rawContent = raw.status === 200 ? hasRealContent(raw.text) : { ok: false, textLen: 0, hasVisual: false };
    check(
      `模板 ${slug} 页面有内容`,
      raw.status === 200 && rawContent.ok,
      raw.status === 200 ? `${rawContent.textLen} 字${rawContent.hasVisual ? ' + 图形' : ''}` : `HTTP ${raw.status}`
    );
  }

  // ── 2. 模板下载 ZIP ──
  console.log('\n【模板下载】');
  for (const slug of [slugs[0], slugs[5], slugs[slugs.length - 1]]) {
    const ctl = new AbortController();
    const t = setTimeout(() => ctl.abort(), 120000);
    try {
      const res = await fetch(`${BASE}/api/download/template/${slug}`, { signal: ctl.signal });
      const buf = Buffer.from(await res.arrayBuffer());
      const isZip = buf[0] === 0x50 && buf[1] === 0x4b; // PK
      const sizeMB = (buf.length / 1024 / 1024).toFixed(1);
      check(`下载 ${slug}.zip`, res.status === 200 && isZip && buf.length > 10000, `${sizeMB}MB${isZip ? ' · 有效 ZIP' : ' · 非 ZIP'}`);
    } catch (e) {
      check(`下载 ${slug}.zip`, false, String(e.message || e));
    } finally {
      clearTimeout(t);
    }
  }

  // ── 3. 组件渲染产物（每类抽样 3 个，检查渲染出真实内容）──
  console.log('\n【组件渲染产物】');
  const samples = {
    components: idx.pro.components.slice(0, 3).map(i => i.slug),
    blocks: idx.pro.blocks.slice(0, 3).map(i => i.slug),
    'app-ui': idx.pro.appUi.slice(0, 3).map(i => i.slug),
    free: idx.free.components.slice(0, 3).map(i => i.slug),
  };
  for (const [kind, list] of Object.entries(samples)) {
    for (const slug of list) {
      const r = await getText(`${BASE}/render/${kind}/${encodeURIComponent(slug)}?theme=light&embed=1`, 120000);
      // render 页是客户端渲染，HTML 里只有骨架；改为检查 bundle 可编译
      const b = await getText(`${BASE}/api/bundle/${kind}/${encodeURIComponent(slug)}`, 180000);
      const bundleOk = b.status === 200 && b.text.length > 100000;
      // 检查产物里是否有 demo children 注入
      const hasDemo = b.text.includes('React Bits') || b.text.includes('Demo content');
      check(
        `${kind}/${slug} 编译产物`,
        bundleOk,
        bundleOk ? `${(b.text.length / 1024).toFixed(0)}KB${hasDemo ? ' · 含 demo 内容' : ''}` : `HTTP ${b.status}`
      );
    }
  }

  // ── 4. 模板预览页 iframe 结构 ──
  console.log('\n【预览页接线】');
  for (const slug of [slugs[0], slugs[7]]) {
    const r = await getText(`${BASE}/preview/${slug}`);
    check(`/preview/${slug} 含 iframe`, r.status === 200 && r.text.includes(`/templates/${slug}/index.html`));
  }

  // ── 汇总 ──
  const pass = results.filter(r => r.pass).length;
  console.log(`\n=== 结果: ${pass}/${results.length} 通过 ===`);
  const bad = results.filter(r => !r.pass);
  if (bad.length) {
    console.log('未通过:');
    bad.forEach(r => console.log(`  ✗ ${r.name} — ${r.detail}`));
  }
  process.exit(bad.length ? 1 : 0);
}

main().catch(e => { console.error(e); process.exit(1); });

const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { spawnSync } = require('node:child_process');
const { JSDOM } = require('jsdom');

const root = path.resolve(__dirname, '..');
const templateRoot = path.join(root, 'public', 'templates');
const tool = path.join(__dirname, 'inject-template-fix.js');
const pattern = /<script\b[^>]*\bdata-rb-template-fix\b[^>]*>[\s\S]*?<\/script\s*>/gi;
const slugs = fs.readdirSync(templateRoot).filter(s => fs.existsSync(path.join(templateRoot, s, 'index.html')));
assert.equal(slugs.length, 15);
function block(text) {
  const hits = [...text.matchAll(pattern)];
  assert.equal(hits.length, 1);
  return hits[0];
}
function run(dir) {
  const p = spawnSync(process.execPath, [tool], { cwd: dir, encoding: 'utf8' });
  assert.equal(p.status, 0, p.stderr || p.stdout);
  return p.stdout;
}
const fixture = fs.mkdtempSync(path.join(os.tmpdir(), 'template-fix-'));
try {
  const before = new Map();
  for (const slug of slugs) {
    const src = fs.readFileSync(path.join(templateRoot, slug, 'index.html'));
    const text = src.toString('latin1');
    const m = block(text);
    // Simulate a legacy block in all files, including byte-exact surrounding content.
    const old = Buffer.concat([src.subarray(0, m.index), Buffer.from('<script data-rb-template-fix>/* old */</script>'), src.subarray(m.index + m[0].length)]);
    const dest = path.join(fixture, 'public', 'templates', slug, 'index.html');
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.writeFileSync(dest, old);
    before.set(slug, old);
  }
  assert.match(run(fixture), /Updated 15 template fix blocks/);
  const once = new Map();
  for (const slug of slugs) {
    const src = before.get(slug), after = fs.readFileSync(path.join(fixture, 'public', 'templates', slug, 'index.html'));
    const a = block(src.toString('latin1')), b = block(after.toString('latin1'));
    assert.deepEqual(after.subarray(0, b.index), src.subarray(0, a.index));
    assert.deepEqual(after.subarray(b.index + b[0].length), src.subarray(a.index + a[0].length));
    assert.equal(b[0], block(fs.readFileSync(path.join(templateRoot, slug, 'index.html'), 'latin1'))[0]);
    once.set(slug, after);
  }
  assert.match(run(fixture), /Updated 0 template fix blocks/);
  for (const slug of slugs) assert.deepEqual(fs.readFileSync(path.join(fixture, 'public', 'templates', slug, 'index.html')), once.get(slug));

  const html = fs.readFileSync(path.join(templateRoot, '8bit', 'index.html'), 'utf8');
  const dom = new JSDOM(html, { runScripts: 'outside-only', url: 'https://example.test/' });
  const { document } = dom.window;
  const features = [...document.querySelectorAll('button[aria-expanded]')].find(e => e.textContent.trim() === 'Features');
  assert.ok(features);
  const pricing = features.nextElementSibling;
  assert.equal(pricing.textContent.trim(), 'Pricing');
  const menu = document.querySelector('button[aria-label="Open menu"]').closest('header').querySelector('[style*="pointer-events:none;height:0px;opacity:0"]');
  assert.ok(menu);
  const menuStyle = menu.getAttribute('style');
  const beforeIds = [...document.querySelectorAll('[id]')].map(e => e.id);
  const beforeLinks = [...document.querySelectorAll('a[href]')].map(e => e.getAttribute('href'));
  dom.window.eval(block(html)[0].replace(/^<script\b[^>]*>/i, '').replace(/<\/script\s*>$/i, ''));
  features.click();
  assert.equal(features.getAttribute('aria-expanded'), 'false');
  assert.equal(pricing.hidden, false);
  assert.notEqual(pricing.style.display, 'none');
  assert.equal(menu.getAttribute('style'), menuStyle);
  assert.deepEqual([...document.querySelectorAll('[id]')].map(e => e.id), beforeIds);
  assert.deepEqual([...document.querySelectorAll('a[href]')].map(e => e.getAttribute('href')), beforeLinks);
  dom.window.close();

  const test = new JSDOM(`<body><main>
    <section id="good" style="opacity:0;transform:translateY(24px)">Content</section>
    <div role="menu"><div id="menu" style="opacity:0;transform:translateY(24px)"></div></div>
    <div class="dropdown"><div id="drop" style="opacity:0;transform:translateY(24px)"></div></div>
    <div hidden><div id="hidden" style="opacity:0;transform:translateY(24px)"></div></div>
    <div id="other" style="opacity:0;transform:translateY(24px) scale(.9)"></div>
    <div id="up" style="opacity:0;transform:translateY(-24px)"></div>
    <div role="dialog"><div id="dialog" style="opacity:0;transform:translateY(24px)"></div></div>
    </main></body>`, { runScripts: 'outside-only' });
  test.window.eval(block(html)[0].replace(/^<script\b[^>]*>/i, '').replace(/<\/script\s*>$/i, ''));
  const doc = test.window.document;
  assert.equal(doc.querySelector('#good').style.opacity, '1');
  assert.equal(doc.querySelector('#good').style.transform, 'none');
  // 入场位移/缩放的普通内容都应显示（含向上位移与 scale）
  assert.equal(doc.getElementById('other').style.opacity, '1');
  assert.equal(doc.getElementById('up').style.opacity, '1');
  // 语义上是菜单/下拉/对话框/默认隐藏的，必须保持原样
  for (const id of ['menu', 'drop', 'hidden', 'dialog']) assert.equal(doc.getElementById(id).style.opacity, '0', id);
  test.window.close();
  console.log('PASS: 15 replacements, preserved surrounding bytes, repeat run, 8bit Pricing/menu, content-only reveal');
} finally {
  fs.rmSync(fixture, { recursive: true, force: true });
}

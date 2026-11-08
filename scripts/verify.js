const http = require('http');
const fs = require('fs');
const path = require('path');

const BASE = process.argv[2] || 'http://127.0.0.1:3000';
const ROOT = path.join(__dirname, '..');
const results = [];
function check(name, pass, detail) {
  results.push({ name, pass, detail });
  console.log(`${pass ? '✓' : '✗'} ${name}${detail ? ' — ' + detail : ''}`);
}

function get(p, timeoutMs = 90000) {
  return new Promise(resolve => {
    const t0 = Date.now();
    const req = http.get(BASE + p, res => {
      let n = 0;
      const chunks = [];
      res.on('data', c => { n += c.length; chunks.push(c); });
      res.on('end', () => resolve({ path: p, status: res.statusCode, bytes: n, ms: Date.now() - t0, text: Buffer.concat(chunks).toString('utf8') }));
    });
    req.on('error', e => resolve({ path: p, status: 0, err: String(e).slice(0, 80), ms: Date.now() - t0, text: '' }));
    req.setTimeout(timeoutMs, () => { req.destroy(); resolve({ path: p, status: 0, err: 'timeout', ms: Date.now() - t0, text: '' }); });
  });
}

(async () => {
  console.log(`\n=== React Bits Pro 本地复刻综合验收 (${BASE}) ===\n`);

  // ── 1. 数据资产 ──
  const idx = JSON.parse(fs.readFileSync(path.join(ROOT, 'data', 'index.json'), 'utf8'));
  check('Pro 组件 231', idx.pro.components.length === 231, `${idx.pro.components.length}`);
  check('区块 300', idx.pro.blocks.length === 300, `${idx.pro.blocks.length}`);
  check('应用界面 300', idx.pro.appUi.length === 300, `${idx.pro.appUi.length}`);
  check('免费组件 182', idx.free.components.length === 182, `${idx.free.components.length}`);
  check('模板 15', idx.pro.templates.length === 15, `${idx.pro.templates.length}`);

  // ── 2. 预览图资产 ──
  const prevDir = path.join(ROOT, 'public', 'previews', 'components');
  const imgs = fs.existsSync(prevDir) ? fs.readdirSync(prevDir).filter(f => f.endsWith('.webp')) : [];
  check('Pro 组件预览图 ≥460', imgs.length >= 460, `${imgs.length} 张`);

  // ── 3. 源码资产 ──
  const tsxCnt = d => (fs.existsSync(path.join(ROOT, 'data/tsx', d)) ? fs.readdirSync(path.join(ROOT, 'data/tsx', d)).filter(f => f.endsWith('.tsx')).length : 0);
  check('Pro 组件源码 231', tsxCnt('components') === 231, `${tsxCnt('components')}`);
  check('区块源码 300', tsxCnt('blocks') === 300, `${tsxCnt('blocks')}`);
  check('App UI 源码 300', tsxCnt('app-ui') === 300, `${tsxCnt('app-ui')}`);
  const freeCnt = fs.readdirSync(path.join(ROOT, 'data/code/free')).filter(f => f.endsWith('.txt')).length;
  check('免费组件源码 182', freeCnt === 182, `${freeCnt}`);

  // ── 4. 页面可达性 ──
  const ROUTES = [
    '/', '/tools', '/docs/introduction', '/docs/installation',
    '/docs/components', '/docs/blocks', '/docs/app-ui', '/docs/templates',
    '/docs/components/free/aurora', '/docs/components/free/blur-text',
    '/docs/components/pro/staggered-text', '/docs/components/pro/glitch-text',
    '/docs/blocks/404-1', '/docs/blocks/pricing-1',
    '/docs/app-ui/agent-activity-1',
    '/docs/templates/agentframe',
    '/preview/agentframe',
    '/api/list/free', '/api/list/components', '/api/list/blocks', '/api/list/app-ui',
    '/api/search-index',
    '/api/code/free/blur-text', '/api/code/blocks/404-1', '/api/code/app-ui/agent-activity-1',
  ];
  for (const r of ROUTES) {
    const res = await get(r);
    check(`页面 ${r}`, res.status >= 200 && res.status < 400, `${res.status} · ${(res.bytes / 1024).toFixed(0)}KB · ${res.ms}ms${res.err ? ' · ' + res.err : ''}`);
  }

  // ── 5. 中文化 ──
  const comp = await get('/docs/components');
  check('组件页中文化', comp.text.includes('个动画组件') && comp.text.includes('Pro 组件') && comp.text.includes('免费组件'));
  const blocks = await get('/docs/blocks');
  check('区块页中文化', blocks.text.includes('个生产级营销页面区块') && blocks.text.includes('区块'));
  const appui = await get('/docs/app-ui');
  check('App UI 页中文化', appui.text.includes('个应用界面区块'));
  const templates = await get('/docs/templates');
  check('模板页中文化', templates.text.includes('生产级落地页模板') && templates.text.includes('模板'));
  const nav = await get('/');
  check('导航中文化', nav.text.includes('组件库') && nav.text.includes('获取终身访问') && nav.text.includes('登录'));

  // ── 6. 本地渲染 API（离线核心）──
  for (const [kind, slug] of [
    ['components', 'staggered-text'],
    ['blocks', '404-1'],
    ['app-ui', 'agent-activity-1'],
    ['free', 'aurora'],
    ['free', 'blur-text'],
  ]) {
    const r = await get(`/api/bundle/${kind}/${encodeURIComponent(slug)}`, 180000);
    const good = r.status === 200 && r.bytes > 100000;
    check(`编译产物 ${kind}/${slug}`, good, good ? `${(r.bytes / 1024).toFixed(0)}KB · ${r.ms}ms` : `HTTP ${r.status} · ${r.bytes}B${r.err ? ' · ' + r.err : ''}`);
  }

  // ── 7. 渲染页（iframe 挂载目标）──
  for (const [kind, slug] of [
    ['blocks', '404-1'],
    ['app-ui', 'agent-activity-1'],
    ['free', 'aurora'],
  ]) {
    const r = await get(`/render/${kind}/${encodeURIComponent(slug)}?theme=light&embed=1`, 90000);
    check(`渲染页 ${kind}/${slug}`, r.status === 200 && r.bytes > 3000, `${r.status} · ${(r.bytes / 1024).toFixed(0)}KB`);
  }

  // ── 8. 详情页预览接线 ──
  const detail = await get('/docs/blocks/404-1');
  check('区块详情页接本地渲染', detail.text.includes('/render/blocks/404-1'));
  const detailAu = await get('/docs/app-ui/agent-activity-1');
  check('App UI 详情页接本地渲染', detailAu.text.includes('/render/app-ui/agent-activity-1'));
  const detailPro = await get('/docs/components/pro/staggered-text');
  check('Pro 组件详情页用本地预览图', detailPro.text.includes('/previews/components/staggered-text-light.webp'));
  const detailFree = await get('/docs/components/free/aurora');
  check('免费组件详情页接本地渲染', detailFree.text.includes('/render/free/aurora'));

  // ── 9. 与原站的卡片实现逐字对齐 ──
  const compHtml = (await get('/docs/components')).text;
  check(
    '卡图 class 与原站一致',
    compHtml.includes('scale-110 object-cover transition-transform duration-500 group-hover:scale-[1.14] dark:hidden'),
    'scale-110 → group-hover:scale-[1.14] duration-500'
  );
  check('亮/暗双图切换与原站一致', compHtml.includes('dark:hidden') && compHtml.includes('dark:block'));
  check('预览图 loading=eager 与原站一致', /loading="eager"[^>]*\/previews\/components|src="\/previews\/components[^>]*loading="eager"/.test(compHtml) || compHtml.includes('loading="eager"'));
  check('卡片双层结构（p-1 + rounded-lg）', compHtml.includes('rounded-xl border border-border bg-muted/50 p-1') && compHtml.includes('aspect-[16/10] w-full overflow-hidden rounded-lg border'));
  check('hover 边框高亮 hover:border-foreground/20', compHtml.includes('hover:border-foreground/20 hover:shadow-md'));

  // ── 10. 模板描述中文化 ──
  const tpl = await get('/docs/templates');
  check('模板描述已中文化', tpl.text.includes('像素风格落地页') || tpl.text.includes('AI 应用落地页'));
  check('模板排序按钮中文化', tpl.text.includes('最新') && tpl.text.includes('个模板'));

  // ── 汇总 ──
  const pass = results.filter(r => r.pass).length;
  console.log(`\n=== 验收结果: ${pass}/${results.length} 通过 ===`);
  const bad = results.filter(r => !r.pass);
  if (bad.length) {
    console.log('未通过:');
    bad.forEach(r => console.log(`  ✗ ${r.name} — ${r.detail}`));
  }
  process.exit(bad.length ? 1 : 0);
})();

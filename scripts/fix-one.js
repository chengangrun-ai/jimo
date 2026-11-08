/**
 * 单组件「修 → 验 → 决定保留/回滚」。
 *
 * 对指定组件尝试「未知小写标签改成大写组件别名」，然后用真实浏览器验证
 * 是否出现画布或可见元素；没改善就自动回滚。
 *
 * 用法: node scripts/fix-one.js <slug> [<slug> ...]
 */
const fs = require('fs');
const path = require('path');
const esbuild = require('esbuild');
const { chromium } = require('playwright-core');

const ROOT = process.cwd();
const slugs = process.argv.slice(2).filter((a) => !a.startsWith('--'));
const exe = [
  'C:/Users/Administrator/.agent-browser/browsers/chrome-155.0.8059.39/chrome.exe',
  'C:/Users/Administrator/.cache/puppeteer/chrome/win64-148.0.7778.97/chrome-win64/chrome.exe',
].find((p) => fs.existsSync(p));

function fileOf(slug) {
  for (const d of ['data/tsx/components', 'data/tsx/blocks', 'data/tsx/app-ui']) {
    const p = path.join(ROOT, d, `${slug}.tsx`);
    if (fs.existsSync(p)) return p;
  }
  return null;
}

function applyFix(src) {
  let s = src;
  const funcs = new Set();
  for (const m of s.matchAll(/(?:^|[,;]\s*)([a-z])\s*=\s*\(?[^)=]{0,200}?\)?\s*=>/gm)) funcs.add(m[1]);
  for (const m of s.matchAll(/^function\s+([a-z])\s*\(/gm)) funcs.add(m[1]);
  const aliases = [];
  for (const name of funcs) {
    if (!new RegExp(`<${name}(?=[\\s/>])`).test(s)) continue;
    const alias = name.toUpperCase();
    if (new RegExp(`(?:const|let|var|function)\\s+${alias}\\b`).test(s)) continue;
    s = s.replace(new RegExp(`<${name}(?=[\\s/>])`, 'g'), `<${alias}`);
    s = s.replace(new RegExp(`</${name}>`, 'g'), `</${alias}>`);
    aliases.push(`const ${alias}: any = ${name};`);
  }
  if (!aliases.length) return null;
  const tail = s.lastIndexOf('export ');
  s = tail > 0 ? s.slice(0, tail) + aliases.join('\n') + '\n\n' + s.slice(tail) : s + '\n' + aliases.join('\n') + '\n';
  return s;
}

(async () => {
  const browser = await chromium.launch({ executablePath: exe, headless: true, args: ['--enable-unsafe-swiftshader'] });
  const page = await browser.newPage({ viewport: { width: 900, height: 700 } });

  async function measure(slug) {
    const errs = [];
    const onErr = (e) => { if (errs.length < 3) errs.push(String(e.message).slice(0, 80)); };
    page.on('pageerror', onErr);
    let info = { canvas: 0, vis: 0, len: 0 };
    try {
      await page.goto(`http://localhost:3000/render/components/${slug}?theme=light&embed=1&t=one`, { waitUntil: 'domcontentloaded', timeout: 15000 });
      await page.waitForTimeout(3500);
      info = await page.evaluate(() => {
        const r = document.querySelector('.rb-root');
        const c = r ? [...r.querySelectorAll('canvas')] : [];
        const vis = r ? [...r.querySelectorAll('*')].filter((e) => {
          const b = e.getBoundingClientRect();
          return b.width > 8 && b.height > 8 && getComputedStyle(e).opacity !== '0';
        }).length : 0;
        return { canvas: c.length, canvasH: c.length ? Math.round(c[0].getBoundingClientRect().height) : 0, vis, len: r ? r.innerHTML.length : 0 };
      });
    } catch (e) { info.err = String(e.message).slice(0, 60); }
    page.off('pageerror', onErr);
    info.errors = errs;
    return info;
  }

  let kept = 0;
  for (const slug of slugs) {
    const p = fileOf(slug);
    if (!p) { console.log(`${slug}: 找不到文件`); continue; }
    const original = fs.readFileSync(p, 'utf8');
    const before = await measure(slug);
    const fixed = applyFix(original);
    if (!fixed) { console.log(`${slug}: 没有可改的未知标签`); continue; }
    try { esbuild.transformSync(fixed, { loader: 'tsx' }); } catch { console.log(`${slug}: 改后语法不通过，跳过`); continue; }
    fs.writeFileSync(p, fixed);
    const after = await measure(slug);
    const improved = (after.canvas > 0 && before.canvas === 0) || after.vis > before.vis + 3 || (after.len > before.len + 300 && !after.errors.length);
    if (improved) {
      kept++;
      console.log(`✓ ${slug}: 保留（canvas ${before.canvas}→${after.canvas} / vis ${before.vis}→${after.vis} / len ${before.len}→${after.len}）`);
    } else {
      fs.writeFileSync(p, original);
      console.log(`✗ ${slug}: 回滚（canvas ${before.canvas}→${after.canvas} / vis ${before.vis}→${after.vis}）`);
    }
  }
  await browser.close();
  console.log(`保留 ${kept} / ${slugs.length}`);
  process.exit(0);
})();

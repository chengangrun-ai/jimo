/** Replace the existing template fix only; leave every other byte untouched. */
const fs = require('fs');
const path = require('path');
const BASE = path.join(process.cwd(), 'public', 'templates');
const BLOCK = /<script\b[^>]*\bdata-rb-template-fix\b[^>]*>[\s\S]*?<\/script\s*>/gi;

const SCRIPT = String.raw`<script data-rb-template-fix>
(function () {
  'use strict';
  if (window.__rbTemplateFix) return;
  window.__rbTemplateFix = true;

  // Entrance hiding in the saved pages is an inline opacity:0 plus a small
  // translate/scale (matrix). Menus, dropdowns, dialogs and closed panels use
  // the same visual pattern, so they are excluded by semantics below, and by
  // requiring the element to sit in normal flow inside content regions.
  var excluded = 'nav,dialog,[role="navigation"],[role="menu"],[role="menubar"],[role="menuitem"],[role="dialog"],[role="alertdialog"],[role="tabpanel"],[role="listbox"],[role="tooltip"],[aria-modal="true"],[aria-hidden="true"],[hidden],[inert],[aria-expanded],[aria-controls],[data-state],details:not([open])';

  function smallEntrance(el) {
    var m = window.getComputedStyle(el).transform || el.style.transform;
    if (!m || m === 'none') return true; // pure fade-in
    var nums = m.match(/matrix\(([^)]+)\)/);
    if (nums) {
      var v = nums[1].split(',').map(parseFloat);
      if (v.length < 6 || v.some(isNaN)) return false;
      var sx = Math.hypot(v[0], v[1]);
      var sy = Math.hypot(v[2], v[3]);
      var tx = v[4], ty = v[5];
      return Math.abs(tx) <= 80 && Math.abs(ty) <= 80 && sx >= 0.5 && sx <= 1.01 && sy >= 0.5 && sy <= 1.01;
    }
    // Browsers that report the authored form instead of a matrix.
    // translateY(24px) / translateX(-6px) / translate3d(0,10px,0)
    var t = m.match(/translate(?:3d)?[XY]?\(\s*(-?[\d.]+)px(?:\s*,\s*(-?[\d.]+)px)?/);
    var tx2 = 0, ty2 = 0;
    if (t) {
      if (/translate3d/i.test(m)) { tx2 = parseFloat(t[1]); ty2 = t[2] ? parseFloat(t[2]) : 0; }
      else if (/translateX/i.test(m)) { tx2 = parseFloat(t[1]); }
      else { ty2 = parseFloat(t[1]); }
    }
    var s = m.match(/scale\(([\d.]+)\)/);
    var sc = s ? parseFloat(s[1]) : 1;
    if (!t && !s) return false;
    return Math.abs(tx2) <= 80 && Math.abs(ty2) <= 160 && sc >= 0.5 && sc <= 1.01;
  }

  function eligible(el) {
    if (!el.closest('main') && !el.closest('header') && !el.closest('footer')) return false;
    if (el.closest(excluded)) return false;
    if (el.style.opacity !== '0') return false;
    var pos = window.getComputedStyle(el).position;
    // 固定/绝对定位的浮层交给原页面；但页面顶栏/页脚本身的入场淡入要恢复。
    if ((pos === 'absolute' || pos === 'fixed') && !el.closest('header,footer') && el.tagName !== 'HEADER' && el.tagName !== 'FOOTER') return false;
    for (var node = el; node && node !== document.body; node = node.parentElement) {
      // 只按「完整类名里的组件语义词」排除，不能因为 overflow-hidden / md:hidden
      // 这类 Tailwind 工具类就误判成隐藏面板（实测会漏掉整块 hero）。
      var tokens = (node.getAttribute('class') || '').split(/\s+/).concat([node.getAttribute('id') || '']);
      for (var i = 0; i < tokens.length; i++) {
        if (/(?:^|[-_])(menu|dropdown|popover|modal|dialog|drawer|offcanvas)(?:$|[-_])/i.test(tokens[i])) return false;
      }
      var style = window.getComputedStyle(node);
      if (style.display === 'none' || style.visibility === 'hidden' || style.visibility === 'collapse') return false;
    }
    return smallEntrance(el);
  }
  function revealContent() {
    Array.from(document.querySelectorAll('main [style],header [style],footer [style],main[style],header[style],footer[style]')).filter(eligible).forEach(function (el) {
      // !important：部分模板的水合脚本会在我们之后重写入场初值，普通内联会被覆盖。
      el.style.setProperty('opacity', '1', 'important');
      if (el.style.transform && el.style.transform !== 'none') el.style.setProperty('transform', 'none', 'important');
    });

    // 标题/段落里的「逐字上推」入场（translateY(100%+) 藏在 overflow-hidden 里）。
    // 这类不是淡入，靠的是位移，必须单独清掉位移才能看见文字。
    Array.from(document.querySelectorAll('main h1 span[style],main h2 span[style],main p span[style],header span[style]')).forEach(function (el) {
      var t = el.style.transform || '';
      if (/translateY\(\s*(?:[5-9]\d|\d{3,})(?:\.\d+)?%\s*\)/.test(t)) {
        el.style.setProperty('transform', 'none', 'important');
      }
    });

    // 标题/段落的「逐字模糊上浮」入场：内联 filter:blur(Npx)，不会自己消失。
    Array.from(document.querySelectorAll('main h1 [style],main h2 [style],main p [style],header [style]')).forEach(function (el) {
      var f = el.style.filter || '';
      var b = f.match(/blur\(\s*(\d+(?:\.\d+)?)px\s*\)/);
      if (b && parseFloat(b[1]) <= 24) el.style.setProperty('filter', 'none', 'important');
    });
  }

  revealContent();
  // 部分模板的水合脚本会在挂载后重新写入入场初值（实测 minimal 顶栏被重置为
  // opacity:0 / translateY(-100px)），所以在 load 之后再补几拍同样的纠正。
  window.addEventListener('load', function () {
    revealContent();
    setTimeout(revealContent, 400);
    setTimeout(revealContent, 1200);
    setTimeout(revealContent, 2500);
  });

  // React 管理 style 属性时会覆盖我们写的内联值（minimal 的顶栏就是这样被重置的）。
  // 内联写回会被反复覆盖，所以补一条 CSS：CSS !important 能压住普通内联样式。
  // 只作用于页面顶栏/页脚容器本身，不动其中的菜单面板。
  var css = document.createElement('style');
  css.setAttribute('data-rb-template-fix-style', '');
  css.textContent = 'header[style*="opacity:0"]:not([aria-hidden="true"]):not([hidden]),' +
    'footer[style*="opacity:0"]:not([aria-hidden="true"]):not([hidden]){opacity:1 !important;transform:none !important}' +
    'header[style*="opacity: 0"]:not([aria-hidden="true"]):not([hidden]),' +
    'footer[style*="opacity: 0"]:not([aria-hidden="true"]):not([hidden]){opacity:1 !important;transform:none !important}';
  (document.head || document.documentElement).appendChild(css);

  // Imageworks SSR emits three hero content wrappers in this exact initial
  // state. When the saved page does not hydrate, all three remain invisible.
  // Restrict the correction to these specific wrappers, not hidden menus.
  if (/\/templates\/imageworks\/index\.html$/.test(location.pathname)) {
    var hero = document.getElementById('hero');
    if (hero) Array.from(hero.querySelectorAll('div[style]')).forEach(function (el) {
      if (el.style.opacity === '0' &&
          /^translateY\(10px\)\s+scale\(0\.75\)$/.test(el.style.transform) &&
          el.querySelector('h1,p,a[href]') && !el.closest(excluded)) {
        el.style.opacity = '1';
        el.style.transform = 'none';
      }
    });
    // The saved Imageworks scroll quote has word spans fixed at opacity .14.
    // Animate only that identified quote while its sticky section is traversed.
    var quoteSection = Array.from(document.querySelectorAll('main section')).find(function (el) {
      return el.classList.contains('h-[320svh]') && el.querySelector('p.sr-only');
    });
    if (quoteSection) {
      var words = Array.from(quoteSection.querySelectorAll('p:not(.sr-only) span.inline-block[style]')).filter(function (el) {
        return el.style.opacity === '0.14';
      });
      if (words.length) {
        // Poll via rAF instead of relying on scroll events: the saved page is
        // often scrolled programmatically/inside iframes, where scroll events
        // are not guaranteed to reach this listener.
        var last = -1;
        function updateQuote(progress) {
          words.forEach(function (word, i) {
            var p = Math.max(0, Math.min(1, progress * words.length - i));
            word.style.opacity = String(0.14 + 0.86 * p);
          });
        }
        function tickQuote() {
          var rect = quoteSection.getBoundingClientRect();
          var range = Math.max(1, rect.height - window.innerHeight);
          var progress = Math.max(0, Math.min(1, -rect.top / range));
          if (Math.abs(progress - last) > 0.004) { last = progress; updateQuote(progress); }
          requestAnimationFrame(tickQuote);
        }
        requestAnimationFrame(tickQuote);
      }
    }
  }
})();
</script>`;

let changed = 0;
for (const slug of fs.readdirSync(BASE)) {
  const file = path.join(BASE, slug, 'index.html');
  if (!fs.existsSync(file) || !fs.statSync(file).isFile()) continue;
  const original = fs.readFileSync(file);
  // Latin-1 maps each byte to one character, preserving unrelated bytes exactly.
  const text = original.toString('latin1');
  const matches = [...text.matchAll(BLOCK)];
  if (matches.length !== 1) throw new Error(`${file}: expected exactly one existing fix block, found ${matches.length}`);
  const match = matches[0];
  const replacement = Buffer.from(SCRIPT, 'utf8');
  const result = Buffer.concat([original.subarray(0, match.index), replacement, original.subarray(match.index + match[0].length)]);
  if (!result.equals(original)) {
    fs.writeFileSync(file, result);
    changed++;
  }
}
console.log(`Updated ${changed} template fix blocks`);

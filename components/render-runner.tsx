'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * 本地组件运行器（实时挂载版）。
 *
 * 用 createRoot 真正把组件跑起来，hooks / 动画 / 交互全部生效。
 *
 * 注意：createRoot 必须在**独立页面**里跑（/render 路由的 iframe），
 * 嵌在别的 React 树里时调度器不会 flush。
 */
export function RenderRunner({
  kind,
  slug,
  theme = 'light',
}: {
  kind: string;
  slug: string;
  theme?: 'light' | 'dark';
}) {
  const hostRef = useRef<HTMLDivElement | null>(null);
  const [err, setErr] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const html = document.documentElement;
    html.classList.toggle('dark', theme === 'dark');
    const bg = theme === 'dark' ? '#0a0a0a' : '#ffffff';
    html.style.background = bg;
    document.body.style.background = bg;
    document.body.style.margin = '0';

    // 这个页面只用来承载单个组件，必须把站点的顶栏等外壳全部藏掉，
    // 否则 iframe 里会露出「组件库 / 资源 / 智能体…」的导航。
    // rb-root 被 Next 包在多层容器里，没法用 body > * 判断，改成按「包含 rb-root」筛选：
    // 从 rb-root 往上走，把每一层里除「通往 rb-root 那个子节点」以外的兄弟节点全隐藏。
    const rootEl = document.querySelector('.rb-root');
    if (rootEl) {
      let node: HTMLElement | null = rootEl as HTMLElement;
      while (node && node !== document.body) {
        const parent: HTMLElement | null = node.parentElement;
        if (!parent) break;
        for (const sib of Array.from(parent.children)) {
          if (sib !== node) (sib as HTMLElement).style.display = 'none';
        }
        node = parent;
      }
    }
  }, [theme]);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    /**
     * 免费组件（free）当初只抓到了 TSX，它们 import 的组件级 CSS 没抓到，
     * 于是 .dock / .stack / .masonry 这些类名一条样式都没有，渲染出来是零尺寸看不见。
     * 这里把从原站真实抓下来的全站样式表注入一次（同一个 iframe 内只注入一个），
     * 组件就能按原站的样子显示。
     */
    const doc = host.ownerDocument;
    if (kind === 'free' && doc && !doc.querySelector('link[data-rb-free-css]')) {
      const link = doc.createElement('link');
      link.rel = 'stylesheet';
      link.href = '/free-site.css';
      link.setAttribute('data-rb-free-css', '1');
      doc.head.appendChild(link);
    }

    let cancelled = false;
    setLoading(true);
    setErr(null);

    const finish = () => { if (!cancelled) setLoading(false); };

    /**
     * 内容一出现就收「渲染中」，不再固定等 500ms。
     * 轮询 host，最多 maxMs；期间只要检测到可见文字/图形就 resolve。
     *
     * 用 textContent 而非 innerText：motion 入场动画会把文字设成 blur(10px)/位移，
     * 此时 innerText 读不到（被 filter/visibility 影响），但 textContent 仍拿到文字，
     * 避免 split-text / blur-text 这类组件明明有内容却一直卡在「渲染中…」。
     */
    const waitVisible = (maxMs: number) => new Promise<boolean>((resolve) => {
      const started = performance.now();
      const tick = () => {
        if (cancelled) return resolve(false);
        const t = (host.textContent || '').replace(/\s+/g, '').trim();
        const visual = !!host.querySelector('canvas,svg,img,video');
        if (t.length > 0 || visual) return resolve(true);
        if (performance.now() - started > maxMs) return resolve(false);
        setTimeout(tick, 60);
      };
      tick();
    });

    /**
     * 显现兜底：组件里靠 motion「滚动进场 / 悬停才显现」的元素，在静态 iframe 预览里
     * 永远等不到触发事件，会一直停在 opacity:0 / blur / 位移的隐藏态（看着一片空白）。
     * 这里把这类入场隐藏态强制清掉，让内容直接可见；不动 hover 才有的交互特效。
     */
    const revealEntrance = () => {
      const els = host.querySelectorAll('*');
      for (const e of els) {
        const el = e as HTMLElement;
        const s = getComputedStyle(el);
        let touched = false;
        if (s.opacity === '0') { el.style.opacity = '1'; touched = true; }
        if (s.visibility === 'hidden') { el.style.visibility = 'visible'; touched = true; }
        // motion 的 blur 入场：filter 里带 blur(Npx) 且当前不可见
        if (/blur\(\s*[1-9]/.test(s.filter)) { el.style.filter = 'none'; touched = true; }
        // 入场位移（translate 且当前完全透明已由上面处理；这里只在确实隐藏时清 transform）
        if (touched && s.transform && s.transform !== 'none' && !/matrix\(1, 0, 0, 1, 0, 0\)/.test(s.transform)) {
          // 保留居中类 transform，只清入场位移
          if (!/-?50%/.test(el.style.transform || '')) el.style.transform = 'none';
        }
      }
    };

    /**
     * 给跟随鼠标 / 点击才动的特效组件自动播放，
     * 否则 blob-cursor、click-spark 这类静止时是空 canvas（看起来一片白）。
     *
     * 持续循环画圈 + 定时点击，直到组件卸载（cancelled）。
     * blob-cursor 监听 window 的 pointermove（事件冒泡到 window），
     * click-spark 监听 root 的 pointerdown/click，都覆盖到。
     */
    /**
     * 强制图片立刻加载 + 让「滚到才出现」的组件以为自己被滚到了。
     *
     * 列表/瀑布流类组件（stack、masonry、image-trail…）会等图片 onLoad 测量尺寸，
     * 图片是 lazy 且在卡片小窗里可能永不进入视口 → 组件一直算不出布局，看着像空。
     */
    /**
     * 强制给「尺寸塌陷」的容器补最小尺寸。
     *
     * 很多 3D 组件的画布是懒创建的，但它们的包裹层高度算出来是 0，
     * Canvas 量到 0 就什么都不画。这里把零尺寸的容器补到至少 320×320。
     */
    const forceSizes = () => {
      const nodes = Array.from(host.querySelectorAll<HTMLElement>('div,section,canvas'));
      for (const el of nodes) {
        const r = el.getBoundingClientRect();
        if (r.height < 8) el.style.minHeight = '320px';
        if (r.width < 8) el.style.minWidth = '320px';
      }
    };
    const forceMedia = () => {
      for (const img of Array.from(host.querySelectorAll('img'))) {
        try {
          if (img.loading !== 'eager') img.loading = 'eager';
          if (img.decoding !== 'sync') img.decoding = 'sync';
          if (img.dataset.rbKick !== '1') {
            img.dataset.rbKick = '1';
            // 重新赋一次 src 触发已失败的图片重试
            const src = img.getAttribute('src');
            if (src) img.setAttribute('src', src);
          }
        } catch { /* 忽略 */ }
      }
      try {
        window.dispatchEvent(new Event('scroll'));
        host.dispatchEvent(new Event('scroll', { bubbles: true }));
      } catch { /* 忽略 */ }
    };

    let playTimer: any = null;
    const autoPlay = () => {
      const canvas = host.querySelector('canvas') || host;
      const fire = (type: string, x: number, y: number) => {
        const opts: any = { bubbles: true, cancelable: true, clientX: x, clientY: y, view: window };
        try {
          // 指针类组件（text-cursor / target-cursor / image-trail…）监听的是容器，
          // 只给 window 派发它们收不到，所以对多个目标都发一遍。
          const targets: EventTarget[] = [window, document, canvas as HTMLElement];
          const first = (host.firstElementChild as HTMLElement | null);
          if (first) targets.push(first);
          for (const target of targets) {
            try {
              target.dispatchEvent(
                type.startsWith('pointer') ? new PointerEvent(type, opts) : new MouseEvent(type, opts)
              );
            } catch { /* 忽略单点失败 */ }
          }
        } catch { /* 某些环境无 PointerEvent，忽略 */ }
      };
      const loop = () => {
        if (cancelled) return;
        const r = (canvas as HTMLElement).getBoundingClientRect?.() ||
          { left: 0, top: 0, width: 400, height: 200 };
        const cx = r.left + r.width / 2, cy = r.top + r.height / 2;
        // 画一段弧线
        let step = 0;
        const total = 18;
        const move = () => {
          if (cancelled || step > total) return;
          const a = (step / total) * Math.PI * 2;
          const x = cx + Math.cos(a) * r.width * 0.34;
          const y = cy + Math.sin(a) * r.height * 0.34;
          fire('pointermove', x, y);
          fire('mousemove', x, y);
          step++;
          requestAnimationFrame(move);
        };
        requestAnimationFrame(move);
        // 每轮点几下，触发点击类特效
        setTimeout(() => {
          if (cancelled) return;
          fire('pointerdown', cx, cy); fire('mousedown', cx, cy); fire('click', cx, cy);
          setTimeout(() => { if (!cancelled) fire('pointerup', cx, cy); }, 80);
        }, 500);
      };
      loop();
      playTimer = setInterval(loop, 2400);
    };

    /**
     * 很多 canvas / 跟随类组件（blob-cursor 等）靠各自的 CSS 把根 div 撑满视口，
     * 但反编译产物的 CSS 被 stub 成空，根 div 塌成 0 高 → canvas 退回默认 150px，
     * 画面只挤在顶部一条（看起来「一片白」）。
     *
     * 这里在挂载后把「host → 组件根」这条链补成满高，组件内的 ResizeObserver
     * 会监听到尺寸变化自动重绘，canvas 铺满预览框。只对含 canvas 的组件生效，
     * 不影响 animated-content 这类文字组件。
     */
    const fillCanvasRoot = () => {
      const rootEl = host.firstElementChild as HTMLElement | null;
      if (!rootEl) return;
      if (!host.querySelector('canvas')) return;
      // 高度链：fixed 父 → .rb-root(只有 minHeight，需补 height 让 % 生效) → host → 组件根
      const rbRoot = host.parentElement;
      if (rbRoot) rbRoot.style.height = '100%';
      host.style.height = '100%';
      host.style.display = 'block';
      rootEl.style.height = '100%';
      rootEl.style.width = '100%';
      if (getComputedStyle(rootEl).position === 'static') rootEl.style.position = 'relative';
    };

    (async () => {
      try {
        /**
         * 产物按「源码 mtime+size」在服务端做内存缓存，源码改了会自动失效，
         * 因此这里用稳定 URL + 浏览器缓存，命中后秒开。
         *
         * 之前每次 hover 都带 ?t=Date.now()，等于强制服务端跳过缓存、重新 esbuild
         * 内联 React/three（单包 1–3MB，耗时 2–5 秒），卡片就一直停在「渲染中…」。
         * 需要刷新产物时（改了 shim/依赖）手动加 ?t= 即可，默认走缓存。
         */
        const force = typeof window !== 'undefined' &&
          new URLSearchParams(window.location.search).has('t');
        const bundleUrl = `/api/bundle/${kind}/${encodeURIComponent(slug)}` +
          (force ? `?t=${Date.now()}` : '');
        const res = await fetch(
          bundleUrl,
          { cache: force ? 'no-store' : 'default' }
        );
        if (!res.ok) {
          const j = await res.json().catch(() => ({}));
          throw new Error(j.error || `HTTP ${res.status}`);
        }
        const code = await res.text();
        if (cancelled) return;

        host.innerHTML = '';
        const w = window as any;
        delete w.__RB_COMPONENT__;

        new Function(`${code}\n;window.__RB_COMPONENT__ = __RB_COMPONENT__;\n//# sourceURL=rb-render.js`)();

        if (cancelled) return;
        const g = w.__RB_COMPONENT__;

        /**
         * 先给挂载点一个明确尺寸再渲染。
         *
         * react-three-fiber 的 Canvas 会先量父容器尺寸，量到 0 就直接什么都不画，
         * 而且它的画布是挂载后才创建——之前的逻辑要「有 canvas 才补高度」，
         * 于是永远等不到 canvas。这里无条件先把尺寸链铺好。
         */
        host.style.width = '100%';
        host.style.height = '100%';
        host.style.minHeight = '100vh';
        host.style.display = 'block';
        if (host.parentElement) host.parentElement.style.height = '100%';

        if (typeof g?.__mount === 'function') {
          const r = g.__mount(host);
          if (r && r.ok === false) throw new Error(r.error);

          /**
           * react-three-fiber / WebGL 组件挂载后要建画布、编译着色器，
           * 比普通组件慢得多；静态渲染它们的 Canvas 子节点还会直接抛
           * 「R3F: Hooks can only be used within the Canvas component!」。
           * 所以先按更长的窗口等实时挂载，等不到再谈静态兜底。
           */
          const heavy = /react-three|@react-three|\bR3F\b|THREE\./.test(code);

          // 内容一出现就收「渲染中」
          let okNow = await waitVisible(heavy ? 4000 : 1200);
          if (okNow) finish();

          // 没内容就升级参数重试（先补 props，再补 children）
          if (!okNow && typeof r?.escalate === 'function') {
            r.escalate();
            okNow = await waitVisible(heavy ? 3000 : 1200);
            if (okNow) finish();
          }

          if (!okNow) {
            // 实时挂载始终没内容，退回静态渲染（同步、必定出 HTML）
            const html = typeof g.__render === 'function' ? g.__render() : null;
            if (typeof html === 'string' && html.trim()) {
              host.innerHTML = html;
              finish();
            } else if (html && typeof html === 'object' && '__error' in html) {
              throw new Error(html.__error);
            } else {
              throw new Error('组件没有渲染出内容');
            }
          } else {
            // 有内容：先清掉 motion「滚动/悬停才显现」的入场隐藏态
            // （split-text / blur-text 在静态 iframe 里等不到触发，会一直 blur/位移/透明，
            //  表现为卡「渲染中」或一片空白），再补 canvas 高度、自动播放特效。
            forceMedia();
            forceSizes();
            revealEntrance();
            fillCanvasRoot();
            if (host.querySelector('canvas')) autoPlay();

            // WebGL/three 的画布往往是挂载后才创建，第一次补高度时它还不存在，
            // 结果 canvas 停在默认 150px。这里再补两次，确保铺满容器。
            setTimeout(() => {
              if (cancelled) return;
              fillCanvasRoot();
            }, 800);
            setTimeout(() => {
              if (cancelled) return;
              fillCanvasRoot();
              if (host.querySelector('canvas')) autoPlay();
            }, 2200);
          }
        } else if (typeof g?.__render === 'function') {
          const html = g.__render();
          if (html && typeof html === 'object' && '__error' in html) throw new Error(html.__error);
          if (typeof html === 'string') { host.innerHTML = html; finish(); }
          else throw new Error('产物没有导出渲染函数');
        } else {
          throw new Error('产物没有导出渲染函数');
        }

        /**
         * 最后一道保险：如果渲染完页面里其实没有任何看得见的东西（比如 3D 组件
         * 的容器在、画布没绘制），就不要留一块空白——退回原站预览图，
         * 至少用户看到的是这个组件真实的样子。
         */
        if (!cancelled) {
          await new Promise((r) => setTimeout(r, 1500));

          /**
           * 防失控：个别组件（如 drift-wall）会无限生成元素，
           * 实测出现过 37MB DOM、34 万个节点，直接把页面拖死。
           * 超过阈值就清空并退回预览图。
           */
          const nodes = host.querySelectorAll('*').length;
          const bytes = host.innerHTML.length;
          if (nodes > 20000 || bytes > 4 * 1024 * 1024) {
            host.innerHTML = '';
            setErr('runaway-render');
            return;
          }

          // 已经有明显 DOM 结构就不要判空：组件可能只是动画还没把元素撑开
          const structural = host.querySelectorAll('*').length > 12 && host.innerHTML.length > 400;
          const hasVisible = Array.from(host.querySelectorAll('*')).some((e) => {
            const rect = (e as HTMLElement).getBoundingClientRect();
            const style = getComputedStyle(e as HTMLElement);
            return rect.width > 8 && rect.height > 8 && style.opacity !== '0' && style.visibility !== 'hidden';
          });
          const hasCanvasPixels = !!host.querySelector('canvas');
          if (!hasVisible && !hasCanvasPixels && !structural) {
            setErr('empty-render');
          }
        }
      } catch (e: any) {
        if (!cancelled) setErr(String(e?.message || e));
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();

    return () => {
      cancelled = true;
      if (playTimer) { clearInterval(playTimer); playTimer = null; }
    };
  }, [kind, slug]);

  return (
    <div className="rb-root" style={{ minHeight: '100vh', width: '100%' }} suppressHydrationWarning>
      <div ref={hostRef} />
      {loading && !err && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#888',
            font: '12px ui-monospace, monospace',
            pointerEvents: 'none',
          }}
        >
          渲染中…
        </div>
      )}
      {err && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            overflow: 'hidden',
            background: theme === 'dark' ? '#0a0a0a' : '#ffffff',
          }}
        >
          {/* 反编译还原的 WebGL / 3D 组件依赖链有残缺时，
              直接展示从原站抓下来的真实预览图 —— 用户看到的是原版画面，不是黑屏。 */}
          <img
            src={`/previews/components/${encodeURIComponent(slug)}-${theme === 'dark' ? 'dark' : 'light'}.webp`}
            alt={`${slug} 原版预览`}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            onError={(e) => {
              // 连原站图都没有时，退回亮色图；再失败就显示纯文字说明
              const img = e.currentTarget;
              if (!img.dataset.fallback) {
                img.dataset.fallback = '1';
                img.src = `/previews/components/${encodeURIComponent(slug)}-light.webp`;
              } else {
                img.style.display = 'none';
              }
            }}
          />
        </div>
      )}
    </div>
  );
}

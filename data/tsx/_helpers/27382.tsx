import * as React from "react";
/**
 * 内部辅助模块 27382（自动内联）
 * 被页面区块共享使用。
 */

function LazyBlock({
  children: e,
  minHeight: t,
  rootMargin: r = 500,
  className: a
}) {
  let i = (0, React.useRef)(null),
    s = (0, React.useRef)(null),
    [o, d] = (0, React.useState)(!1),
    [u, c] = (0, React.useState)(null);
  return (0, React.useEffect)(() => {
    if (!o || !s.current) return;
    let e = s.current;
    c(e.getBoundingClientRect().height);
    let t = new ResizeObserver(e => {
      for (let t of e) c(t.contentRect.height);
    });
    return t.observe(e), () => t.disconnect();
  }, [o]), (0, React.useEffect)(() => {
    let e = i.current;
    if (!e) return;
    let t = new IntersectionObserver(([e]) => {
      d(e.isIntersecting);
    }, {
      rootMargin: `${r}px 0px ${r}px 0px`
    });
    return t.observe(e), () => t.disconnect();
  }, [r]), <div ref={i} className={a}>{o ? <div ref={s}>{e}</div> : <div style={{
      height: u ?? t
    }} className="flex items-center justify-center rounded-xl border border-dashed border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/50"><div className="flex items-center gap-2 text-sm text-neutral-400 dark:text-neutral-600"><div className="h-4 w-4 rounded-full border-2 border-current border-t-transparent animate-spin" /><span>Loading preview…</span></div></div>}</div>;
}

export { LazyBlock as default, LazyBlock };
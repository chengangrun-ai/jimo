import { motion, AnimatePresence } from "motion/react";
import * as React from "react";
import * as __mod_50969 from "./50969";
import * as __mod_90650 from "./90650";
/**
 * 内部辅助模块 13955（自动内联）
 * 被页面区块共享使用。
 */

function I({
  ariaLabel: e,
  className: t,
  onChange: o,
  options: c,
  value: l
}) {
  let d = (0, __mod_50969.I)(),
    g = (0, React.useId)(),
    u = (0, React.useRef)([]);
  return <div role="radiogroup" aria-label={e} className={(0, __mod_90650.cn)("inline-flex h-8 w-fit items-center gap-1 rounded-lg border border-border/50 bg-muted/40 p-1", t)}>{c.map((e, t) => {
      let s = e.value === l;
      return <button ref={e => {
        u.current[t] = e;
      }} type="button" role="radio" aria-checked={s} tabIndex={s ? 0 : -1} onClick={() => o(e.value)} onKeyDown={e => ((e, t) => {
        let i = "ArrowRight" === e.key || "ArrowDown" === e.key ? 1 : "ArrowLeft" === e.key || "ArrowUp" === e.key ? -1 : 0;
        if (0 === i) return;
        e.preventDefault();
        let s = (t + i + c.length) % c.length;
        o(c[s].value), u.current[s]?.focus();
      })(e, t)} className={(0, __mod_90650.cn)("relative inline-flex h-6 shrink-0 cursor-pointer items-center justify-center rounded-sm px-2.5 text-[12.5px] font-medium", "transition-[color,transform] duration-150 ease-out active:scale-[0.97]", "focus-visible:ring-ring focus-visible:ring-2 focus-visible:outline-none", s ? "text-foreground" : "text-muted-foreground hover:text-foreground")}>{s && <motion.span layoutId={g} aria-hidden={!0} className="absolute inset-0 rounded-sm bg-background shadow-[0_1px_2px_rgba(0,0,0,0.06)] dark:bg-secondary dark:shadow-none" transition={d ? {
          duration: 0
        } : {
          type: "spring",
          bounce: 0,
          duration: .3
        }} />}<span className="relative whitespace-nowrap">{e.label}</span></button>;
    })}</div>;
}

export { I as default, I };
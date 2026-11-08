import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, TrendingUp } from "lucide-react";
import * as __mod_50969 from "../_helpers/50969";
import * as __mod_87974 from "../_helpers/87974";
/**
 * Bento 29
 * Big counting number over a stats ticker
 * slug: bento-29
 * category: Bento
 * export: Bento29
 * deps: lucide-react, motion
 * original: ts-tailwind/blocks/bento/bento-29.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let c = [{
    value: 20,
    suffix: "\xd7",
    label: "faster builds",
    detail: "vs. our previous CI, median across 12k runs"
  }, {
    value: 99.99,
    suffix: "%",
    label: "uptime",
    detail: "trailing twelve months, all regions"
  }, {
    value: 4.9,
    suffix: "",
    label: "rating",
    detail: "from 2,400 verified reviews"
  }],
  u = ["38s median deploy", "2.4M requests a day", "12k builds a week", "30 edge regions", "0 config files", "14 day trial", "SOC 2 Type II", "99.99% uptime"],
  x = [.22, 1, .36, 1];
function h() {
  let e = !!(0, __mod_50969.I)(),
    [t, a] = (0, React.useState)(!1),
    [h, p] = (0, React.useState)(0),
    [m, b] = (0, React.useState)(!1),
    [f, g] = (0, React.useState)(0),
    w = c[h % c.length],
    k = Number.isInteger(w.value) ? 0 : 4.9 === w.value ? 1 : 2;
  (0, React.useEffect)(() => {
    if (!t || e) return;
    let a = (0, __mod_87974.i)(0, w.value, {
      duration: 1.6,
      ease: [.16, 1, .3, 1],
      onUpdate: e => g(e)
    });
    return () => a.stop();
  }, [t, e, w.value]), (0, React.useEffect)(() => {
    if (!t || e || m) return;
    let a = window.setInterval(() => p(e => e + 1), 4200);
    return () => window.clearInterval(a);
  }, [t, e, m]);
  let v = (e ? w.value : f).toLocaleString("en-US", {
    minimumFractionDigits: k,
    maximumFractionDigits: k
  });
  return <article className="group relative flex h-full min-h-[380px] w-full flex-col overflow-hidden rounded-3xl border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900"><div className="@container relative min-h-[220px] flex-1 overflow-hidden"><div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,rgb(0_0_0/0.07)_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)] dark:bg-[radial-gradient(circle,rgb(255_255_255/0.08)_1px,transparent_1px)]" /><motion.div initial={{
        opacity: 0,
        y: 12 * !e
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: !0,
        amount: .3
      }} onViewportEnter={() => a(!0)} transition={{
        duration: .6,
        ease: x
      }} onMouseEnter={() => b(!0)} onMouseLeave={() => b(!1)} className="absolute inset-0 flex flex-col justify-center"><div className="flex flex-col items-center px-6"><span className="inline-flex max-w-full items-center gap-1.5 rounded-full border border-neutral-200 bg-white px-2.5 py-1 text-[11px] font-medium text-neutral-700 shadow-sm dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-300"><TrendingUp className="h-3 w-3 text-neutral-500 dark:text-neutral-400" /><span className="truncate">{w.detail}</span></span><div className="mt-3 flex items-baseline gap-1"><span className="text-[64px] font-semibold leading-none tabular-nums tracking-[-0.04em] text-neutral-900 @sm:text-[80px] @2xl:text-[104px] dark:text-white">{v}</span><span className="text-[32px] font-semibold leading-none text-neutral-400 @sm:text-[40px] @2xl:text-[52px] dark:text-neutral-500">{w.suffix}</span></div><div className="mt-3 flex items-center gap-2">{c.map((e, t) => <button type="button" onClick={() => p(t)} onFocus={() => b(!0)} onBlur={() => b(!1)} aria-pressed={t === h % c.length} className={`cursor-pointer rounded-full px-2.5 py-1 text-[11px] font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 ${t === h % c.length ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900" : "text-neutral-500 hover:text-neutral-900 dark:hover:text-white"}`}>{e.label}</button>)}</div></div><div className="relative mt-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]"><div className="flex w-max gap-2 will-change-transform" style={{
            animation: e ? void 0 : "bento-ticker 28s linear infinite",
            animationPlayState: m ? "paused" : "running"
          }}>{[...u, ...u].map((e, t) => <span className="inline-flex shrink-0 items-center gap-1 whitespace-nowrap rounded-full border border-neutral-200 px-2.5 py-1 text-[10px] font-medium text-neutral-600 dark:border-neutral-800 dark:text-neutral-400"><ArrowUpRight className="h-3 w-3 text-neutral-400 dark:text-neutral-500" />{e}</span>)}</div><style>{"@keyframes bento-ticker { from { transform: translateX(0); } to { transform: translateX(calc(-50% - 4px)); } }"}</style></div></motion.div></div><div className="px-6 pb-6 pt-2"><h3 className="text-base font-semibold tracking-tight text-neutral-900 dark:text-white">Numbers that hold up</h3><p className="mt-1.5 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">Every claim on this page is measured in production and published live, not pulled from a launch deck.</p></div></article>;
}

export default h;

import { motion, AnimatePresence } from "motion/react";
import { ArrowDownLeft, ArrowUpRight } from "lucide-react";
import * as __mod_87974 from "../_helpers/87974";
import * as __mod_50969 from "../_helpers/50969";
/**
 * Bento 6
 * KPI cards with counters and sparklines
 * slug: bento-6
 * category: Bento
 * export: Bento6
 * deps: lucide-react, motion
 * original: ts-tailwind/blocks/bento/bento-6.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let c = [{
    label: "Total profit",
    value: 5200,
    prefix: "$",
    delta: "-3%",
    up: !1,
    spark: "M0 12 C8 10 12 20 20 16 S32 4 40 10 S54 22 64 8",
    previous: "$5,361"
  }, {
    label: "Total payroll",
    value: 2500,
    prefix: "$",
    delta: "+5%",
    up: !0,
    spark: "M0 22 C8 20 12 12 20 14 S30 24 38 16 S52 6 64 4",
    previous: "$2,381"
  }, {
    label: "New customers",
    value: 318,
    delta: "+12%",
    up: !0,
    spark: "M0 20 C10 18 14 22 22 14 S34 10 42 12 S54 6 64 2",
    previous: "284"
  }, {
    label: "Refunds",
    value: 42,
    delta: "-8%",
    up: !1,
    spark: "M0 6 C8 8 14 4 22 12 S36 20 44 16 S56 24 64 22",
    previous: "46"
  }, {
    label: "Avg. order",
    value: 86,
    prefix: "$",
    delta: "+2%",
    up: !0,
    spark: "M0 18 C10 16 16 20 24 12 S36 14 44 8 S56 10 64 6",
    previous: "$84.31"
  }, {
    label: "Churn",
    value: 1.8,
    suffix: "%",
    delta: "-0.4",
    up: !1,
    spark: "M0 8 C8 10 14 6 22 12 S36 18 44 14 S56 22 64 20",
    previous: "2.2%"
  }, {
    label: "Invoices sent",
    value: 412,
    delta: "+9%",
    up: !0,
    spark: "M0 22 C10 20 14 16 22 18 S34 8 42 10 S54 4 64 2",
    previous: "378"
  }, {
    label: "Runway",
    value: 19,
    suffix: " mo",
    delta: "+1",
    up: !0,
    spark: "M0 16 C10 14 16 18 24 14 S36 12 44 10 S56 8 64 6",
    previous: "18 mo"
  }],
  u = [.22, 1, .36, 1],
  x = [.16, 1, .3, 1];
function h({
  stat: e,
  active: t,
  reduce: a,
  delay: s
}) {
  let [i, o] = (0, React.useState)(0),
    d = +!Number.isInteger(e.value);
  (0, React.useEffect)(() => {
    if (!t || a) return;
    let r = (0, __mod_87974.i)(0, e.value, {
      duration: 1.4,
      delay: s,
      ease: x,
      onUpdate: e => o(e)
    });
    return () => r.stop();
  }, [t, s, a, e.value]);
  let c = a ? e.value : i;
  return <span className="text-xl font-semibold tabular-nums tracking-tight text-neutral-900 dark:text-white">{e.prefix}{c.toLocaleString("en-US", {
      minimumFractionDigits: d,
      maximumFractionDigits: d
    })}{e.suffix}</span>;
}
function p({
  stat: e,
  index: t,
  inView: a,
  reduce: l,
  expanded: i
}) {
  let [c, p] = (0, React.useState)(0),
    m = e.up ? ArrowUpRight : ArrowDownLeft,
    b = .07 * t;
  return <motion.div initial={!l && {
    opacity: 0,
    y: 12
  }} animate={a ? {
    opacity: 1,
    y: 0
  } : void 0} transition={{
    duration: .6,
    delay: b,
    ease: u
  }} onHoverStart={() => {
    !l && a && p(e => e + 1);
  }} className={(t >= 4 ? "hidden @2xl:flex" : "flex") + " cursor-default flex-col rounded-xl border border-neutral-200 bg-white p-3.5 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_12px_32px_-12px_rgba(0,0,0,0.12)] transition-[border-color,box-shadow] duration-300 hover:border-neutral-300 hover:shadow-[0_2px_4px_rgba(0,0,0,0.04),0_16px_40px_-12px_rgba(0,0,0,0.18)] dark:border-neutral-800 dark:bg-neutral-950 dark:shadow-none dark:hover:border-neutral-700"}><div className="flex items-center justify-between gap-2"><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-neutral-200 text-neutral-600 dark:border-neutral-800 dark:text-neutral-300"><m className="h-3.5 w-3.5" /></span><motion.span initial={!l && {
        opacity: 0,
        scale: .8
      }} animate={a ? {
        opacity: 1,
        scale: 1
      } : void 0} transition={{
        duration: .4,
        delay: 1.1 + .08 * t,
        ease: u
      }} className={e.up ? "rounded-full bg-emerald-500/10 px-1.5 py-0.5 text-[10px] font-medium tabular-nums text-emerald-600 dark:text-emerald-400" : "rounded-full bg-neutral-100 px-1.5 py-0.5 text-[10px] font-medium tabular-nums text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300"}>{e.delta}</motion.span></div><div className="mt-3 flex flex-1 items-center"><motion.svg aria-hidden="true" viewBox="0 0 64 28" preserveAspectRatio="none" initial={!l && {
        clipPath: "inset(-4px 100% -4px 0)"
      }} animate={a ? {
        clipPath: "inset(-4px 0% -4px 0)"
      } : void 0} transition={{
        duration: c ? .9 : 1.3,
        delay: c ? 0 : .3 + b,
        ease: x
      }} className={`w-full overflow-visible ${i ? "h-[88px]" : "h-7"}`}><path d={e.spark} fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" className="text-neutral-900 dark:text-white" /></motion.svg></div><p className="mt-3 text-[11px] font-medium text-neutral-500">{e.label}</p><div className="mt-0.5"><h stat={e} active={a} reduce={l} delay={b} /></div>{i && <div className="mt-4 border-t border-neutral-100 pt-3 text-[11px] dark:border-neutral-800"><div className="flex items-center justify-between gap-2 text-neutral-500"><span>Previous</span><span className="whitespace-nowrap font-medium tabular-nums text-neutral-700 dark:text-neutral-300">{e.previous}</span></div><p className="mt-2 text-neutral-400 dark:text-neutral-500">30-day comparison</p></div>}</motion.div>;
}
function m() {
  let e = !!(0, __mod_50969.I)(),
    t = (0, React.useRef)(null),
    [a, l] = (0, React.useState)(!1),
    [o, d] = (0, React.useState)(!1);
  return (0, React.useEffect)(() => {
    let e = t.current;
    if (!e) return;
    let a = new ResizeObserver(([e]) => {
      l(e.contentRect.height >= 440);
    });
    return a.observe(e), () => a.disconnect();
  }, []), <article className="group relative flex h-full min-h-[380px] w-full flex-col overflow-hidden rounded-3xl border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900"><motion.div ref={t} onViewportEnter={() => d(!0)} viewport={{
      once: !0,
      amount: .3
    }} className="@container relative min-h-[220px] flex-1 overflow-hidden"><div className="absolute inset-x-3 top-3 grid min-h-[calc(100%-0.75rem)] auto-rows-fr grid-cols-2 gap-3 @2xl:grid-cols-4">{c.map((t, n) => <p stat={t} index={n} inView={o} reduce={e} expanded={a} />)}</div><div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent dark:from-neutral-900" /></motion.div><div className="px-6 pb-6 pt-2"><h3 className="text-base font-semibold tracking-tight text-neutral-900 dark:text-white">Know your numbers</h3><p className="mt-1.5 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">Upload a spreadsheet and get the metrics that matter, evaluated and explained without a finance team.</p></div></article>;
}

export default m;

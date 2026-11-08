import { motion, AnimatePresence } from "motion/react";
import { Check, FileSpreadsheet, FileText, Image, Upload } from "lucide-react";
import * as __mod_50969 from "../_helpers/50969";
import * as __mod_47962 from "../_helpers/47962";
/**
 * Bento 25
 * File drop that converts into chips
 * slug: bento-25
 * category: Bento
 * export: Bento25
 * deps: lucide-react, motion
 * original: ts-tailwind/blocks/bento/bento-25.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let p = [{
    name: "Q3-report.pdf",
    icon: FileText,
    from: "PDF",
    to: ["Markdown", "Summary", "12 tables"]
  }, {
    name: "payroll.xlsx",
    icon: FileSpreadsheet,
    from: "XLSX",
    to: ["JSON", "Schema", "Validated"]
  }, {
    name: "hero-shot.png",
    icon: Image,
    from: "PNG",
    to: ["WebP", "Alt text", "3 sizes"]
  }],
  f = [.22, 1, .36, 1],
  x = 2 * Math.PI * 26;
function m() {
  let e = !!(0, __mod_50969.I)(),
    [t, r] = (0, React.useState)(!1),
    [o, d] = (0, React.useState)(0),
    [u, m] = (0, React.useState)(e ? "done" : "drop"),
    [y, g] = (0, React.useState)(0),
    [k, w] = (0, React.useState)(!1),
    b = p[o % p.length];
  (0, React.useEffect)(() => {
    if (!t || e) return;
    let r = !1,
      a = [],
      n = (e, t) => a.push(window.setTimeout(() => !r && t(), e));
    n(700, () => m("process"));
    for (let e = 1; e <= 10; e++) n(700 + 130 * e, () => g(e / 10));
    return n(2200, () => m("done")), n(4600, () => {
      m("drop"), g(0), d(e => e + 1);
    }), () => {
      r = !0, a.forEach(e => window.clearTimeout(e));
    };
  }, [t, e, o]);
  let v = b.icon,
    j = e ? "done" : u;
  return <article className="group relative flex h-full min-h-[380px] w-full flex-col overflow-hidden rounded-3xl border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900"><div className="@container relative min-h-[220px] flex-1 overflow-hidden"><div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,rgb(0_0_0/0.07)_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)] dark:bg-[radial-gradient(circle,rgb(255_255_255/0.08)_1px,transparent_1px)]" /><motion.div initial={{
        opacity: 0,
        y: 12 * !e
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: !0,
        amount: .3
      }} onViewportEnter={() => r(!0)} transition={{
        duration: .6,
        ease: f
      }} className="absolute inset-0 flex items-center justify-center px-6 py-5"><div className="relative w-full max-w-[240px] @2xl:max-w-[320px]"><div className="pointer-events-none absolute -left-8 top-1/2 z-10 flex h-[140px] w-16 -translate-y-1/2 items-center justify-center @sm:-left-16 @2xl:-left-[88px]"><__mod_47962.N mode="wait">{"drop" === j && <motion.div initial={{
                opacity: 0,
                y: -30,
                rotate: -6
              }} animate={{
                opacity: 1,
                y: 0,
                rotate: -3
              }} exit={{
                opacity: 0,
                x: 60,
                scale: .7
              }} transition={{
                duration: .5,
                ease: f
              }} className="flex h-[88px] w-16 flex-col justify-between rounded-lg border border-neutral-200 bg-white p-2.5 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_12px_32px_-12px_rgba(0,0,0,0.14)] dark:border-neutral-800 dark:bg-neutral-950 dark:shadow-none"><v className="h-5 w-5 text-neutral-700 dark:text-neutral-300" /><div className="space-y-1"><div className="h-1 w-full rounded-full bg-neutral-200 dark:bg-neutral-800" /><div className="h-1 w-3/4 rounded-full bg-neutral-200 dark:bg-neutral-800" /></div><span className="truncate text-[9px] font-medium text-neutral-500">{b.name}</span></motion.div>}</__mod_47962.N></div><motion.button type="button" aria-label="Convert another sample file" onClick={() => {
            m("drop"), g(0), d(e => e + 1);
          }} onMouseEnter={() => w(!0)} onMouseLeave={() => w(!1)} animate={{
            scale: k && !e ? 1.03 : 1
          }} transition={{
            duration: .25
          }} className={`relative flex h-[140px] w-full cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-4 dark:focus-visible:ring-offset-neutral-900 ${"drop" === j && !k ? "border-neutral-300 bg-white dark:border-neutral-700 dark:bg-neutral-950" : "border-neutral-900 bg-neutral-50 dark:border-white dark:bg-neutral-900"}`}><div className="relative flex h-16 w-16 items-center justify-center"><svg aria-hidden="true" viewBox="0 0 64 64" className="absolute inset-0 h-full w-full -rotate-90"><circle cx={32} cy={32} r={26} fill="none" stroke="currentColor" strokeWidth={3} className="text-neutral-200 dark:text-neutral-800" /><motion.circle cx={32} cy={32} r={26} fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeDasharray={x} initial={!1} animate={{
                  strokeDashoffset: x * (1 - ("done" === j ? 1 : y))
                }} transition={{
                  duration: .2
                }} className="text-neutral-900 dark:text-white" /></svg><__mod_47962.N mode="wait" initial={!1}>{"done" === j ? <motion.span initial={{
                  scale: .5,
                  opacity: 0
                }} animate={{
                  scale: 1,
                  opacity: 1
                }} exit={{
                  scale: .5,
                  opacity: 0
                }} transition={{
                  duration: .3,
                  ease: f
                }} className="flex h-9 w-9 items-center justify-center rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-900"><Check className="h-4 w-4" strokeWidth={2.5} /></motion.span> : <motion.span initial={{
                  scale: .5,
                  opacity: 0
                }} animate={{
                  scale: 1,
                  opacity: 1
                }} exit={{
                  scale: .5,
                  opacity: 0
                }} transition={{
                  duration: .3,
                  ease: f
                }} className="text-neutral-500 dark:text-neutral-400"><Upload className="h-5 w-5" /></motion.span>}</__mod_47962.N></div><span className="mt-2 text-[10px] font-medium tabular-nums text-neutral-500">{k ? "Try another file" : "drop" === j ? "Drop files here" : "process" === j ? `Converting \xb7 ${Math.round(100 * y)}%` : `${b.from} processed`}</span><div className="absolute -bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5"><__mod_47962.N>{"done" === j && b.to.map((e, t) => <motion.span initial={{
                  opacity: 0,
                  y: 8,
                  scale: .9
                }} animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1
                }} exit={{
                  opacity: 0,
                  y: 4
                }} transition={{
                  duration: .35,
                  delay: .08 * t,
                  ease: f
                }} className="whitespace-nowrap rounded-full border border-neutral-200 bg-white px-2 py-0.5 text-[10px] font-medium text-neutral-700 shadow-sm dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-300">{e}</motion.span>)}</__mod_47962.N></div></motion.button></div></motion.div></div><div className="px-6 pb-6 pt-2"><h3 className="text-base font-semibold tracking-tight text-neutral-900 dark:text-white">Drop it, we handle it</h3><p className="mt-1.5 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">PDFs, spreadsheets and images become clean, structured data the moment they land, in whatever format you need next.</p></div></article>;
}

export default m;

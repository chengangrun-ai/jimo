import { motion, AnimatePresence } from "motion/react";
import { ChartColumn, Cloud, MessageSquare, Plug, SquareKanban } from "lucide-react";
import * as __mod_50969 from "../_helpers/50969";
/**
 * Bento 1
 * Integration chips feeding a central node
 * slug: bento-1
 * category: Bento
 * export: Bento1
 * deps: lucide-react, motion
 * original: ts-tailwind/blocks/bento/bento-1.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let x = [{
    label: "Chat",
    icon: MessageSquare,
    records: "3,120"
  }, {
    label: "Boards",
    icon: SquareKanban,
    records: "1,864"
  }, {
    label: "CRM",
    icon: Cloud,
    records: "6,402"
  }, {
    label: "Reports",
    icon: ChartColumn,
    records: "1,094"
  }],
  h = ["M50 0 C50 44 200 22 200 64", "M150 0 C150 40 200 30 200 64", "M250 0 C250 40 200 30 200 64", "M350 0 C350 44 200 22 200 64"],
  p = [.22, 1, .36, 1];
function m() {
  let e = (0, __mod_50969.I)(),
    [t, a] = (0, React.useState)(null),
    i = null === t ? null : x[t];
  return <article className="group relative flex h-full min-h-[380px] w-full flex-col overflow-hidden rounded-3xl border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900"><div className="@container relative min-h-[220px] flex-1 overflow-hidden"><div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,rgb(0_0_0/0.07)_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_72%)] dark:bg-[radial-gradient(circle,rgb(255_255_255/0.08)_1px,transparent_1px)]" /><motion.div initial={{
        opacity: 0,
        y: 12 * !e
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: !0,
        amount: .3
      }} transition={{
        duration: .6,
        ease: p
      }} className="absolute inset-0 flex flex-col items-center justify-center px-6 py-5"><div className="grid w-full max-w-[360px] grid-cols-4 gap-1.5 @2xl:max-w-[480px]">{x.map((e, l) => {
            let n = e.icon,
              s = t === l;
            return <div className="relative flex justify-center" onMouseEnter={() => a(l)} onMouseLeave={() => a(null)}><button type="button" aria-label={`Preview ${e.label} sync`} onClick={() => a(l)} onFocus={() => a(l)} onBlur={() => a(null)} className={`relative inline-flex max-w-full cursor-pointer items-center gap-1.5 whitespace-nowrap rounded-full border px-2.5 py-1 text-[11px] font-medium shadow-sm transition-[transform,color,background-color,border-color] duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 ${s ? "border-neutral-900 bg-neutral-900 text-white dark:border-white dark:bg-white dark:text-neutral-900" : "border-neutral-200 bg-white text-neutral-700 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-300"}`}><n className={`h-3 w-3 shrink-0 ${s ? "text-white dark:text-neutral-900" : "text-neutral-500 dark:text-neutral-400"}`} /><span className="hidden truncate @[420px]:inline">{e.label}</span></button></div>;
          })}</div><svg aria-hidden="true" viewBox="0 0 400 64" preserveAspectRatio="none" className="h-12 w-full max-w-[360px] overflow-visible @sm:h-14 @2xl:max-w-[480px]">{h.map((a, l) => {
            let n = t === l;
            return <g><path d={a} fill="none" stroke="currentColor" strokeWidth={n ? 1.75 : 1.25} vectorEffect="non-scaling-stroke" className={`transition-colors duration-300 ${n ? "text-neutral-900 dark:text-white" : null === t ? "text-neutral-200 dark:text-neutral-800" : "text-neutral-100 dark:text-neutral-800/60"}`} />{!e && null === t && <motion.path d={a} fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" vectorEffect="non-scaling-stroke" pathLength={100} strokeDasharray="10 90" initial={{
                strokeDashoffset: 100
              }} animate={{
                strokeDashoffset: [100, 0]
              }} transition={{
                duration: 2.2,
                repeat: 1 / 0,
                ease: "linear",
                delay: .55 * l
              }} className="text-neutral-900 dark:text-white" />}</g>;
          })}</svg><div className="relative"><span className="absolute inset-0 rounded-full bg-neutral-900/10 blur-md dark:bg-white/10" /><motion.span animate={e ? void 0 : {
            scale: null === t ? 1 : 1.05
          }} transition={{
            duration: .3,
            ease: p
          }} className="relative inline-flex items-center gap-1.5 rounded-full bg-neutral-900 px-3.5 py-1.5 text-xs font-medium text-white dark:bg-white dark:text-neutral-900"><Plug className="h-3.5 w-3.5" />Connect</motion.span></div><svg aria-hidden="true" viewBox="0 0 2 28" preserveAspectRatio="none" className="h-6 w-[2px] @sm:h-7"><line x1={1} y1={0} x2={1} y2={28} stroke="currentColor" strokeWidth={1.25} vectorEffect="non-scaling-stroke" className="text-neutral-200 dark:text-neutral-800" />{!e && <motion.line x1={1} y1={0} x2={1} y2={28} stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" vectorEffect="non-scaling-stroke" pathLength={100} strokeDasharray="24 76" animate={{
            strokeDashoffset: [100, 0]
          }} transition={{
            duration: 1.1,
            repeat: 1 / 0,
            ease: "linear",
            repeatDelay: 1.1
          }} className="text-neutral-900 dark:text-white" />}</svg><div className="w-full max-w-[300px] rounded-xl border border-neutral-200 bg-white p-3 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_12px_32px_-12px_rgba(0,0,0,0.12)] @2xl:max-w-[380px] dark:border-neutral-800 dark:bg-neutral-950 dark:shadow-none"><div className="flex items-center justify-between gap-3"><span className="flex items-center gap-2 text-[11px] font-medium text-neutral-700 dark:text-neutral-300"><span className="relative flex h-1.5 w-1.5"><span className="absolute inset-0 rounded-full bg-emerald-500 motion-safe:animate-ping" /><span className="relative h-1.5 w-1.5 rounded-full bg-emerald-500" /></span>{i ? `Syncing ${i.label}` : "Syncing 4 sources"}</span><span className="text-[11px] tabular-nums text-neutral-500">{i ? i.records : "12,480"} records</span></div><div className="mt-2.5 h-1.5 w-full overflow-hidden rounded-full bg-neutral-100 dark:bg-neutral-800"><motion.div initial={{
              scaleX: e ? .72 : .08
            }} animate={e ? void 0 : i ? {
              scaleX: 1
            } : {
              scaleX: [.08, .72, .72, .08]
            }} transition={i ? {
              duration: .6,
              ease: p
            } : {
              duration: 4.4,
              times: [0, .55, .85, 1],
              repeat: 1 / 0,
              ease: "easeInOut"
            }} className="h-full w-full origin-left rounded-full bg-neutral-900 will-change-transform dark:bg-white" /></div></div></motion.div></div><div className="px-6 pb-6 pt-2"><h3 className="text-base font-semibold tracking-tight text-neutral-900 dark:text-white">Connect anything</h3><p className="mt-1.5 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">Plug in the tools you already use and keep every record in sync without writing glue code.</p></div></article>;
}

export default m;

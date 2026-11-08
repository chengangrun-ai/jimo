import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import * as __mod_50969 from "../_helpers/50969";
/**
 * Bento 34
 * Editorial carousel of monochrome artwork
 * slug: bento-34
 * category: Bento
 * export: Bento34
 * deps: lucide-react, motion
 * original: ts-tailwind/blocks/bento/bento-34.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let c = [{
    title: "Make room for ideas.",
    label: "Studio notes",
    meta: "Issue 024 \xb7 Design",
    kind: "orbit"
  }, {
    title: "Build what comes next.",
    label: "New perspectives",
    meta: "Issue 025 \xb7 Engineering",
    kind: "stairs"
  }, {
    title: "A little more signal.",
    label: "Field research",
    meta: "Issue 026 \xb7 Research",
    kind: "wave"
  }, {
    title: "Closer, together.",
    label: "In good company",
    meta: "Issue 027 \xb7 Culture",
    kind: "grid"
  }, {
    title: "Always in motion.",
    label: "Work in progress",
    meta: "Issue 028 \xb7 Product",
    kind: "arc"
  }],
  u = [.22, 1, .36, 1];
function x({
  kind: e
}) {
  return <svg viewBox="0 0 240 180" fill="none" className="h-full w-full" aria-hidden="true">{"orbit" === e && [0, 30, 60, 90, 120, 150].map(e => <ellipse cx="120" cy="90" rx="66" ry="26" stroke="currentColor" strokeWidth="1.2" transform={`rotate(${e} 120 90)`} />)}{"stairs" === e && [0, 1, 2, 3, 4, 5].map(e => <rect x={48 + 18 * e} y={112 - 16 * e} width="25" height={22 + 16 * e} rx="3" fill="currentColor" opacity={.18 + .14 * e} />)}{"wave" === e && [0, 1, 2, 3, 4, 5, 6].map(e => <path d={`M28 ${52 + 12 * e} C76 ${10 + 12 * e} 128 ${156 - 12 * e} 212 ${64 + 8 * e}`} stroke="currentColor" strokeWidth="1.4" opacity={.25 + .11 * e} />)}{"grid" === e && Array.from({
      length: 25
    }, (e, t) => <circle cx={72 + t % 5 * 24} cy={42 + 24 * Math.floor(t / 5)} r={12 === t ? 10 : 4} fill="currentColor" opacity={12 === t ? 1 : .2 + t % 4 * .12} />)}{"arc" === e && [0, 1, 2, 3, 4, 5].map(e => <path d={`M${42 + 12 * e} 144 V90 A${78 - 12 * e} ${78 - 12 * e} 0 0 1 ${198 - 12 * e} 90 V144`} stroke="currentColor" strokeWidth="1.4" opacity={.25 + .14 * e} />)}</svg>;
}
function h() {
  let e = !!(0, __mod_50969.I)(),
    [t, a] = (0, React.useState)(!1),
    [h, p] = (0, React.useState)(0),
    [m, b] = (0, React.useState)(!1);
  (0, React.useEffect)(() => {
    if (!t || e || m) return;
    let a = window.setInterval(() => p(e => (e + 1) % c.length), 4800);
    return () => window.clearInterval(a);
  }, [t, e, m, h]);
  let f = e => p(t => (t + e + c.length) % c.length);
  return <article className="group relative flex h-full min-h-[380px] w-full flex-col overflow-hidden rounded-3xl border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900"><div className="@container relative min-h-[220px] flex-1 overflow-hidden"><motion.div initial={{
        opacity: 0,
        y: 12 * !e
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: !0,
        amount: .3
      }} onViewportEnter={() => a(!0)} transition={{
        duration: .7,
        ease: u
      }} onPointerEnter={() => b(!0)} onPointerLeave={() => b(!1)} onFocusCapture={() => b(!0)} onBlurCapture={e => {
        e.currentTarget.contains(e.relatedTarget) || b(!1);
      }} className="absolute inset-0 flex flex-col justify-center [container-type:size]"><div className="relative h-[min(48cqw,78cqh,300px)] shrink-0">{c.map((t, a) => {
            let n = (a - h + c.length) % c.length;
            n > c.length / 2 && (n -= c.length);
            let l = 0 === n,
              o = 1 >= Math.abs(n);
            return <div className="absolute left-1/2 top-1/2 aspect-[4/3] w-[min(64cqw,calc(78cqh*4/3))] max-w-[400px] -translate-x-1/2 -translate-y-1/2" style={{
              zIndex: l ? 2 : 1
            }}><motion.button type="button" aria-label={`Show ${t.label}`} aria-pressed={l} tabIndex={o ? 0 : -1} onClick={() => p(a)} initial={!1} animate={{
                x: `${78 * n}%`,
                scale: l ? 1 : .85,
                opacity: o ? l ? 1 : .45 : 0
              }} transition={{
                duration: .6 * !e,
                ease: u
              }} className={`relative flex h-full w-full flex-col overflow-hidden rounded-xl border p-3 text-left shadow-[0_12px_32px_-12px_rgba(0,0,0,0.2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 ${l ? "cursor-default border-neutral-900 bg-neutral-900 text-white dark:border-white dark:bg-white dark:text-neutral-900" : "cursor-pointer border-neutral-200 bg-white text-neutral-500 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-400"} ${o ? "" : "pointer-events-none"}`}><span className="flex items-center justify-between text-[8px] font-medium uppercase tracking-[0.12em] opacity-65 @sm:text-[9px]"><span>{t.label}</span><ArrowUpRight className="h-3 w-3" /></span><div className="min-h-0 flex-1"><x kind={t.kind} /></div><p className="text-sm font-medium leading-tight tracking-tight @sm:text-lg">{t.title}</p><p className="mt-1 text-[8px] opacity-50 @sm:text-[9px]">{t.meta}</p></motion.button></div>;
          })}</div><div className="relative z-10 flex shrink-0 items-center justify-center gap-3 pb-2 pt-1"><button type="button" aria-label="Previous slide" onClick={() => f(-1)} className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-full text-neutral-500 hover:bg-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 dark:hover:bg-neutral-800"><ChevronLeft className="h-3.5 w-3.5" /></button><div className="flex items-center gap-1" role="group" aria-label="Choose a slide">{c.map((e, t) => <button type="button" aria-label={e.label} aria-pressed={h === t} onClick={() => p(t)} className="flex h-7 w-5 cursor-pointer items-center justify-center rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400"><span className={`h-1.5 rounded-full transition-[width,background-color] ${h === t ? "w-4 bg-neutral-900 dark:bg-white" : "w-1.5 bg-neutral-300 dark:bg-neutral-700"}`} /></button>)}</div><button type="button" aria-label="Next slide" onClick={() => f(1)} className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-full text-neutral-500 hover:bg-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 dark:hover:bg-neutral-800"><ChevronRight className="h-3.5 w-3.5" /></button></div></motion.div></div><div className="px-6 pb-6 pt-2"><h3 className="text-base font-semibold tracking-tight text-neutral-900 dark:text-white">Showcase your best work</h3><p className="mt-1.5 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">A collection of launches, discoveries and work in progress. Find your next perspective, one story at a time.</p></div></article>;
}

export default h;

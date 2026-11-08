import { motion, AnimatePresence } from "motion/react";
import { ArrowDownRight } from "lucide-react";
import * as __mod_50969 from "../_helpers/50969";
/**
 * Bento 9
 * Performance histogram around a deploy
 * slug: bento-9
 * category: Bento
 * export: Bento9
 * deps: lucide-react, motion
 * original: ts-tailwind/blocks/bento/bento-9.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let d = [[.74, .62, .88, .7, .94, .58, .8, .66, .9, .72, .56, .84, .68, .78, .6, .86, .5, .64, .46, .58, .4, .52, .36, .44, .3, .38, .26, .34, .22, .28, .2, .24], [.66, .84, .6, .9, .7, .82, .62, .92, .68, .76, .86, .58, .8, .64, .74, .54, .6, .48, .56, .42, .5, .36, .46, .32, .4, .28, .34, .24, .3, .2, .26, .18], [.8, .7, .92, .64, .86, .74, .9, .6, .78, .68, .88, .62, .72, .56, .82, .5, .66, .44, .6, .38, .54, .34, .48, .3, .42, .26, .36, .22, .32, .18, .28, .16]],
  o = ["1.04", "0.98", "1.11"],
  u = [.22, 1, .36, 1];
function c() {
  let e,
    t = !!(0, __mod_50969.I)(),
    [a, c] = (0, React.useState)(!1),
    [x, m] = (0, React.useState)(0),
    [h, p] = (0, React.useState)(null);
  (0, React.useEffect)(() => {
    if (!a || t || null !== h) return;
    let e = window.setInterval(() => m(e => (e + 1) % d.length), 3200);
    return () => window.clearInterval(e);
  }, [a, t, h]);
  let f = d[x],
    b = null === h ? null : f[h];
  return <article className="group relative flex h-full min-h-[380px] w-full flex-col overflow-hidden rounded-3xl border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900"><div className="@container relative min-h-[220px] flex-1 overflow-hidden"><motion.div initial={{
        opacity: 0,
        y: 12 * !t
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: !0,
        amount: .3
      }} onViewportEnter={() => c(!0)} transition={{
        duration: .6,
        ease: u
      }} className="absolute inset-0 flex flex-col justify-center px-6 py-5"><div className="flex items-end justify-between gap-4"><div><p className="text-[11px] font-medium text-neutral-500">p95 response time</p><div className="mt-1 flex items-baseline gap-1"><span className="relative inline-block text-2xl font-semibold tabular-nums tracking-tight text-neutral-900 dark:text-white @sm:text-3xl"><span className="opacity-0">{o[x]}</span>{o.map((e, t) => <motion.span aria-hidden="true" initial={!1} animate={{
                  opacity: +(t === x),
                  y: t === x ? 0 : t < x ? -10 : 10
                }} transition={{
                  duration: .45,
                  ease: u
                }} className="absolute inset-0">{e}</motion.span>)}</span><span className="text-sm font-medium text-neutral-500">s</span></div></div><span className="inline-flex items-center gap-1 rounded-full bg-neutral-100 px-2 py-1 text-[11px] font-medium tabular-nums text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300"><ArrowDownRight className="h-3 w-3" />22% faster</span></div><div className="relative mt-6 min-h-[104px] w-full flex-1 max-h-[400px]"><div aria-hidden="true" className="absolute inset-0 flex flex-col justify-between">{[0, 1, 2, 3].map(e => <div className="h-px w-full bg-neutral-100 dark:bg-neutral-800" />)}</div><div className="absolute inset-0 flex items-end gap-[3px]" onMouseLeave={() => p(null)}>{f.map((e, r) => {
              let n = r >= 20,
                i = h === r,
                d = null !== h && !i;
              return <div onMouseEnter={() => p(r)} className="relative flex h-full min-w-0 flex-1 cursor-crosshair items-end"><motion.div initial={{
                  scaleY: t ? e : 0
                }} animate={{
                  scaleY: a ? e : 0,
                  opacity: d ? .45 : 1
                }} transition={{
                  scaleY: {
                    duration: .7,
                    delay: t ? 0 : .012 * r,
                    ease: u
                  },
                  opacity: {
                    duration: .2
                  }
                }} className={`h-full w-full origin-bottom rounded-[2px] will-change-transform ${n ? i ? "bg-neutral-500 dark:bg-neutral-400" : "bg-neutral-300 dark:bg-neutral-700" : "bg-neutral-900 dark:bg-white"}`} /></div>;
            })}</div><div aria-hidden="true" className="pointer-events-none absolute bottom-0 top-0 w-px border-l border-dashed border-neutral-300 dark:border-neutral-700" style={{
            left: `${20 / f.length * 100}%`
          }} /><span className="pointer-events-none absolute -top-4 -translate-x-1/2 whitespace-nowrap text-[10px] font-medium text-neutral-400 dark:text-neutral-500" style={{
            left: `${20 / f.length * 100}%`
          }}>deploy</span><motion.div aria-hidden="true" animate={{
            opacity: +(null !== h),
            left: `clamp(3.5rem, ${((h ?? 0) + .5) / f.length * 100}%, calc(100% - 3.5rem))`,
            bottom: `${(b ?? 0) * 100}%`
          }} transition={{
            opacity: {
              duration: .15
            },
            left: {
              duration: .12
            },
            bottom: {
              duration: .12
            }
          }} className="pointer-events-none absolute z-10 -translate-x-1/2 -translate-y-2 whitespace-nowrap rounded-md bg-neutral-900 px-2 py-1 text-[10px] font-medium tabular-nums text-white shadow-sm dark:bg-white dark:text-neutral-900">{null === b ? "" : `${Math.round(1600 * b)}ms`}<span className="ml-1.5 text-neutral-400 dark:text-neutral-500">{null === h ? "" : 0 == (e = f.length - 1 - h) ? "Today" : `${e}d ago`}</span></motion.div></div><div className="mt-2 flex justify-between text-[10px] tabular-nums text-neutral-400 dark:text-neutral-500"><span>{f.length - 1} days ago</span><span>today</span></div></motion.div></div><div className="px-6 pb-6 pt-2"><h3 className="text-base font-semibold tracking-tight text-neutral-900 dark:text-white">Faster by design</h3><p className="mt-1.5 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">Edge caching and a rewritten query layer cut response times in production, not just on the benchmark.</p></div></article>;
}

export default c;

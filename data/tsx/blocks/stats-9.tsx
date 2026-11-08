import * as React from "react";
import * as __mod_87974 from "../_helpers/87974";
/**
 * Stats 9
 * Revenue calculator with a slider
 * slug: stats-9
 * category: Stats
 * export: Stats9
 * deps: motion
 * original: ts-tailwind/blocks/stats/stats-9.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import { motion, AnimatePresence } from "motion/react";

function i() {
  let [e, t] = (0, React.useState)(1e6),
    s = Math.round(.015 * e * 240),
    i = Math.round(.002 * e * 240),
    u = (e - 1e4) / 499e4 * 100,
    o = (0, React.useRef)(null),
    c = (0, React.useRef)(null),
    d = (0, React.useRef)(null),
    x = (0, React.useRef)(s),
    m = (0, React.useRef)(i),
    p = (0, React.useRef)(e);
  return (0, React.useEffect)(() => {
    if (!o.current) return;
    let e = o.current,
      t = (0, __mod_87974.i)(x.current, s, {
        duration: .6,
        ease: [.22, 1, .36, 1],
        onUpdate: t => {
          e.textContent = `$${Math.round(t).toLocaleString()}`;
        }
      });
    return x.current = s, () => t.stop();
  }, [s]), (0, React.useEffect)(() => {
    if (!c.current) return;
    let e = c.current,
      t = (0, __mod_87974.i)(m.current, i, {
        duration: .6,
        ease: [.22, 1, .36, 1],
        onUpdate: t => {
          e.textContent = `$${Math.round(t).toLocaleString()}`;
        }
      });
    return m.current = i, () => t.stop();
  }, [i]), (0, React.useEffect)(() => {
    if (!d.current) return;
    let t = d.current,
      s = (0, __mod_87974.i)(p.current, e, {
        duration: .4,
        ease: [.22, 1, .36, 1],
        onUpdate: e => {
          t.textContent = e >= 1e6 ? `${(e / 1e6).toFixed(1)}M` : `${Math.round(e / 1e3)}K`;
        }
      });
    return p.current = e, () => s.stop();
  }, [e]), <section className="w-full min-h-[var(--rb-section-min-h,100vh)] flex items-start sm:items-center py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-neutral-950"><div className="max-w-[1400px] mx-auto w-full flex flex-col items-center text-center"><motion.h2 initial={{
        opacity: 0,
        y: 14
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: !0
      }} transition={{
        duration: .6
      }} className="text-3xl sm:text-5xl md:text-6xl font-semibold text-neutral-900 dark:text-white tracking-tight">Turn your free tier into revenue.</motion.h2><motion.p initial={{
        opacity: 0
      }} whileInView={{
        opacity: 1
      }} viewport={{
        once: !0
      }} transition={{
        duration: .5,
        delay: .2
      }} className="mt-4 max-w-xl text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">Most freemium products convert under 0.2% of their free users. With smart in-product upgrade prompts, top teams push that past 1.5%</motion.p><motion.div initial={{
        opacity: 0,
        scale: .96
      }} whileInView={{
        opacity: 1,
        scale: 1
      }} viewport={{
        once: !0
      }} transition={{
        duration: .6,
        delay: .3
      }} className="mt-10 sm:mt-14 flex items-end justify-center"><span ref={o} className="text-[13vw] sm:text-[13vw] lg:text-[11vw] leading-none font-semibold tracking-tight text-sky-500 tabular-nums">${s.toLocaleString()}</span><span className="text-[10px] sm:text-sm lg:text-base text-sky-500 mb-2 sm:mb-5">/Year</span></motion.div><motion.p initial={{
        opacity: 0
      }} whileInView={{
        opacity: 1
      }} viewport={{
        once: !0
      }} transition={{
        duration: .5,
        delay: .5
      }} className="mt-2 text-sm sm:text-base text-neutral-700 dark:text-neutral-300">vs. industry baseline (0.2%) = <span ref={c} className="underline decoration-neutral-400 underline-offset-2 tabular-nums">${i.toLocaleString()}</span><sup>2</sup></motion.p><div className="mt-10 w-full max-w-xl"><div className="relative py-4"><div className="h-1 rounded-full bg-neutral-200 dark:bg-neutral-800" /><div className="absolute top-1/2 left-0 h-1 -mt-0.5 rounded-full bg-neutral-900 dark:bg-white" style={{
            width: `${u}%`
          }} /><div className="absolute top-1/2 -mt-2.5 -ml-2.5" style={{
            left: `${u}%`
          }}><div className="relative"><span ref={d} className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-sky-500 text-white text-xs font-medium tabular-nums whitespace-nowrap">1.0M</span><div className="w-5 h-5 rounded-full bg-neutral-900 dark:bg-white" /></div></div><input type="range" min={1e4} max={5e6} step={1e4} value={e} onChange={e => t(Number(e.target.value))} className="absolute inset-0 w-full opacity-0 cursor-pointer" aria-label="Free users" /></div><p className="mt-3 text-xs sm:text-sm text-neutral-500">Free users</p></div></div></section>;
}

export default i;

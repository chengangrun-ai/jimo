import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import * as __mod_75272 from "../_helpers/75272";
import * as __mod_32923 from "../_helpers/32923";
import * as __mod_87974 from "../_helpers/87974";
/**
 * About 8
 * Team carousel with arrow controls
 * slug: about-8
 * category: About
 * export: About8
 * deps: lucide-react, motion
 * original: ts-tailwind/blocks/about/about-8.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let x = [{
  name: "Iris Kowalski",
  role: "Head of Product Design"
}, {
  name: "Marcus Tenga",
  role: "Head of Engineering"
}, {
  name: "Priya Natarajan",
  role: "Head of Brand"
}, {
  name: "Elliot Vance",
  role: "Head of Operations"
}, {
  name: "Sana Rahimi",
  role: "Head of Customer Success"
}, {
  name: "Theo Halliday",
  role: "Head of Partnerships"
}];
function u() {
  let e = (0, __mod_75272.d)(0),
    t = (0, React.useRef)(null),
    a = (0, __mod_75272.d)(1),
    u = (0, __mod_32923.G)(e, e => {
      let t = a.get();
      return t <= 0 ? 1 : Math.min(1, Math.max(0, -e / t));
    });
  (0, React.useEffect)(() => {
    let e = () => {
      let e = t.current;
      if (!e) return;
      let s = e.parentElement?.clientWidth ?? 0;
      a.set(Math.max(0, e.scrollWidth - s));
    };
    e();
    let s = new ResizeObserver(e);
    return t.current && (s.observe(t.current), t.current.parentElement && s.observe(t.current.parentElement)), () => s.disconnect();
  }, [a]);
  let h = (0, React.useRef)(0),
    p = (0, React.useRef)(null),
    g = () => {
      let e = t.current?.firstElementChild;
      return (e?.offsetWidth ?? 300) + 16;
    },
    f = t => {
      h.current = t, p.current?.stop(), p.current = (0, __mod_87974.i)(e, t, {
        duration: .5,
        ease: [.22, 1, .36, 1]
      });
    };
  return <section className="w-full min-h-[var(--rb-section-min-h,100vh)] flex items-start py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-neutral-950 overflow-hidden"><div className="max-w-[1400px] mx-auto w-full"><div className="grid grid-cols-1 lg:grid-cols-[0.4fr_2fr] gap-4 lg:gap-12 items-start"><motion.span initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} viewport={{
          once: !0
        }} transition={{
          duration: .4
        }} className="inline-flex items-center gap-2 w-fit px-2 py-1 rounded bg-orange-200 dark:bg-orange-300/20 text-neutral-900 dark:text-orange-200 text-xs font-medium lg:mt-2"><span className="h-2 w-2 bg-orange-500 rounded-sm" />TEAM</motion.span><motion.h2 initial={{
          opacity: 0,
          y: 10
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: !0
        }} transition={{
          duration: .5
        }} className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-neutral-900 dark:text-white tracking-tight leading-tight max-w-4xl">Our team builds with relentless craft, obsesses over the details most people skip, and ships the tools modern operators actually wanted.</motion.h2></div><div className="mt-12 relative"><div className="overflow-hidden"><motion.div ref={t} style={{
            x: e
          }} className="flex gap-4">{x.map(e => <article className="shrink-0 w-[calc(100%-0px)] sm:w-[calc((100%-1rem)/2)] md:w-[calc((100%-2rem)/3)] lg:w-[calc((100%-3rem)/4)] h-[280px] rounded-[20px] bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-3 flex flex-col"><div className="p-2"><p className="text-lg font-medium text-neutral-900 dark:text-white">{e.name}</p><p className="mt-1 text-[11px] tracking-[0.15em] uppercase text-neutral-500 dark:text-neutral-500">{e.role}</p></div><div className="mt-auto flex items-center justify-between pl-2"><span className="text-[11px] font-semibold tracking-[0.15em] uppercase text-neutral-500 dark:text-neutral-500">LinkedIn</span><a href="#" className="grid place-items-center h-9 w-9 rounded-lg bg-orange-300 hover:bg-orange-400 text-neutral-900 transition-colors" aria-label="LinkedIn"><ArrowUpRight className="h-4 w-4" /></a></div></article>)}</motion.div></div><div className="mt-6 flex items-center justify-between gap-4"><div className="flex-1 h-px bg-neutral-200 dark:bg-neutral-800 relative overflow-hidden"><motion.div className="absolute inset-y-0 left-0 right-0 bg-neutral-900 dark:bg-white origin-left" style={{
              scaleX: u
            }} /></div><div className="flex items-center gap-2"><button onClick={() => {
              f(Math.min(0, h.current + g()));
            }} className="grid place-items-center h-10 w-10 rounded-lg bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors cursor-pointer" aria-label="Previous"><ArrowLeft className="h-4 w-4" /></button><button onClick={() => {
              let e = t.current?.scrollWidth ?? 0;
              f(Math.max(Math.min(0, (t.current?.parentElement?.clientWidth ?? 0) - e), h.current - g()));
            }} className="grid place-items-center h-10 w-10 rounded-lg bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors cursor-pointer" aria-label="Next"><ArrowRight className="h-4 w-4" /></button></div></div></div></div></section>;
}

export default u;

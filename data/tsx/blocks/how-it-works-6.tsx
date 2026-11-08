import * as React from "react";
import { Layers, Rocket, Sparkles, WandSparkles } from "lucide-react";
import * as __mod_32923 from "../_helpers/32923";
import * as __mod_97835 from "../_helpers/97835";
import * as __mod_75272 from "../_helpers/75272";
/**
 * How It Works 6
 * Scroll timeline with pulsing image cards
 * slug: how-it-works-6
 * category: How It Works
 * export: HowItWorks6
 * deps: lucide-react, motion
 * original: ts-tailwind/blocks/how-it-works/how-it-works-6.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import { motion, AnimatePresence } from "motion/react";

let x = [{
  title: "Start from a blank canvas",
  copy: "Spin up a fresh project in a click. No templates to wrestle with, no boilerplate to trim down.",
  image: "https://images.unsplash.com/photo-1483653364400-eedcfb9f1f88?w=900&q=80",
  icon: Sparkles
}, {
  title: "Layer in your building blocks",
  copy: "Drop in components, data sources, and design tokens that stay perfectly in sync across every screen.",
  image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=900&q=80",
  icon: Layers
}, {
  title: "Refine with purpose",
  copy: "Tighten the details that matter with precision tools built for designers who sweat the small stuff.",
  image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=900&q=80",
  icon: WandSparkles
}, {
  title: "Ship to the world",
  copy: "Push a polished build to production with zero surprises. Version, preview, and roll back in one click.",
  image: "https://images.unsplash.com/photo-1618220179428-22790b461013?w=900&q=80",
  icon: Rocket
}];
function h({
  progress: e,
  at: t,
  Icon: a
}) {
  let n = Math.max(0, t - .12),
    d = Math.min(1, t + .02),
    c = (0, __mod_32923.G)(e, [n, d], [.6, 1]),
    u = (0, __mod_32923.G)(e, [n, d], [.25, 1]),
    m = (0, __mod_32923.G)(e, [n, d], [0, 1]),
    [x, h] = (0, React.useState)(!1);
  return (0, __mod_97835.L)(e, "change", e => {
    h(e >= d - .001);
  }), <div className="relative grid place-items-center"><span className="absolute h-14 w-14 rounded-full bg-white dark:bg-neutral-950" /><motion.span style={{
      opacity: m
    }} className="absolute h-14 w-14 rounded-full ring-[6px] ring-neutral-100 dark:ring-neutral-900" />{x && <motion.span aria-hidden={!0} className="absolute h-12 w-12 rounded-full bg-orange-500" initial={{
      scale: 1,
      opacity: .5
    }} animate={{
      scale: 1.8,
      opacity: 0
    }} transition={{
      duration: 1.6,
      repeat: 1 / 0,
      ease: "easeOut"
    }} />}<motion.span style={{
      scale: c,
      opacity: u
    }} animate={x ? {
      backgroundColor: "rgb(249 115 22)",
      color: "rgb(255 255 255)"
    } : {}} transition={{
      duration: .35
    }} className="relative grid place-items-center h-12 w-12 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-900"><a className="h-5 w-5" /></motion.span></div>;
}
function p({
  step: e,
  side: t
}) {
  return <motion.article initial={{
    opacity: 0,
    y: 24
  }} whileInView={{
    opacity: 1,
    y: 0
  }} viewport={{
    once: !0,
    margin: "-20%"
  }} transition={{
    duration: .6,
    ease: [.22, 1, .36, 1]
  }} className={`w-full md:w-[44%] rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.08)] overflow-hidden ${"left" === t ? "md:mr-auto" : "md:ml-auto"}`}><div className="p-5 sm:p-6"><h3 className="text-base sm:text-lg font-semibold text-neutral-900 dark:text-white">{e.title}</h3><p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">{e.copy}</p></div><div className="px-2 pb-2"><div className="aspect-16/10 rounded-2xl overflow-hidden bg-neutral-100 dark:bg-neutral-800"><img src={e.image} alt="" loading="lazy" className="h-full w-full object-cover" /></div></div></motion.article>;
}
function g() {
  let e = (0, React.useRef)(null),
    t = (0, React.useRef)(null),
    a = (0, React.useRef)(null),
    l = (0, __mod_75272.d)(0),
    [d, c] = (0, React.useState)({
      top: 0,
      height: 0
    });
  (0, React.useEffect)(() => {
    if (!e.current) return;
    let r = 0,
      i = () => {
        let s = e.current,
          n = t.current,
          o = a.current;
        if (s && n && o) {
          let e = (s.ownerDocument.defaultView ?? window).innerHeight || s.ownerDocument.documentElement.clientHeight,
            t = s.getBoundingClientRect(),
            a = n.getBoundingClientRect(),
            r = o.getBoundingClientRect(),
            i = a.top + a.height / 2,
            d = r.top + r.height / 2,
            u = d - i;
          u > 0 && l.set(Math.min(1, Math.max(0, (.55 * e - i) / u)));
          let m = i - t.top,
            x = d - i;
          c(e => e.top === m && e.height === x ? e : {
            top: m,
            height: x
          });
        }
        r = requestAnimationFrame(i);
      };
    return r = requestAnimationFrame(i), () => cancelAnimationFrame(r);
  }, [l]);
  let u = (0, __mod_32923.G)(l, [0, 1], [0, 1]);
  return <section className="relative w-full flex items-start py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-neutral-950 overflow-hidden"><div className="relative max-w-[1400px] mx-auto w-full flex flex-col items-center"><motion.p initial={{
        opacity: 0
      }} whileInView={{
        opacity: 1
      }} viewport={{
        once: !0
      }} transition={{
        duration: .4
      }} className="text-xs tracking-[0.2em] text-neutral-500 dark:text-neutral-500 uppercase">How it works</motion.p><motion.h2 initial={{
        opacity: 0,
        y: 10
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: !0
      }} transition={{
        duration: .5
      }} className="mt-6 text-3xl sm:text-5xl md:text-6xl font-medium text-neutral-900 dark:text-white text-center tracking-tight leading-[1.05] max-w-xl">Four steps from blank page to launch day</motion.h2><motion.p initial={{
        opacity: 0,
        y: 8
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: !0
      }} transition={{
        duration: .5,
        delay: .1
      }} className="mt-5 max-w-sm text-center text-base text-neutral-600 dark:text-neutral-400">A quiet, opinionated workflow that stays out of your way and hands the craft back to you.</motion.p><div ref={e} className="relative mt-20 sm:mt-28 w-full"><div aria-hidden={!0} style={{
          top: d.top,
          height: d.height
        }} className="absolute left-1/2 -translate-x-1/2 w-px border-l border-dashed border-neutral-300 dark:border-neutral-700" /><motion.div aria-hidden={!0} style={{
          top: d.top,
          height: d.height,
          scaleY: u,
          transformOrigin: "top"
        }} className="absolute left-1/2 -translate-x-1/2 w-px bg-neutral-900 dark:bg-white" /><div className="flex flex-col gap-16 sm:gap-24">{x.map((e, i) => {
            let s = i / Math.max(1, x.length - 1),
              n = i === x.length - 1;
            return <div className="relative flex flex-col items-center"><div ref={0 === i ? t : n ? a : void 0} className="relative z-10"><h progress={l} at={s} Icon={e.icon} /></div><div className="mt-8 w-full flex"><p step={e} side={i % 2 == 0 ? "left" : "right"} /></div></div>;
          })}</div></div></div></section>;
}

export default g;

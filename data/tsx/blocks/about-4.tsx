import { motion, AnimatePresence } from "motion/react";
import * as __mod_47962 from "../_helpers/47962";
/**
 * About 4
 * Three columns with a progress ring
 * slug: about-4
 * category: About
 * export: About4
 * deps: motion
 * original: ts-tailwind/blocks/about/about-4.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let n = [{
  id: 1,
  title: "Innovation",
  heading: "Building the future",
  description: "We leverage cutting-edge machine learning to solve complex problems.",
  image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80"
}, {
  id: 2,
  title: "Speed",
  heading: "Ship & iterate faster",
  description: "Rapid deployment is in our DNA. We move quickly without compromising quality.",
  image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
}, {
  id: 3,
  title: "Transparency",
  heading: "Open by default",
  description: "We believe in radical transparency with our users and team.",
  image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
}, {
  id: 4,
  title: "Impact",
  heading: "Creating true change",
  description: "Every feature we build has purpose. We focus on solutions that make a real difference.",
  image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80"
}];
function c({
  activeIndex: e
}) {
  return <div className="flex flex-col gap-2 sm:gap-2 lg:gap-8">{n.map((t, s) => <motion.div initial={{
      opacity: 0,
      x: -20
    }} animate={{
      opacity: 1,
      x: 0
    }} transition={{
      duration: .6,
      delay: .1 * s
    }}><h3 className={`text-2xl sm:text-3xl lg:text-5xl xl:text-6xl font-light tracking-tight transition-colors duration-500 ${e === s ? "text-neutral-900 dark:text-white" : "text-neutral-300 dark:text-neutral-700"}`}>{t.title}</h3></motion.div>)}</div>;
}
function o({
  activeValue: e,
  progress: t,
  showProgress: s = !1
}) {
  return <div className="flex flex-col items-center"><motion.div initial={{
      opacity: 0,
      scale: .95
    }} animate={{
      opacity: 1,
      scale: 1
    }} transition={{
      duration: .6,
      delay: .2
    }} className="relative w-full lg:max-w-sm mx-auto aspect-3/2 lg:aspect-3/4 lg:rounded-none overflow-hidden shadow-2xl"><__mod_47962.N mode="wait"><motion.img src={e.image} alt={e.title} className="w-full h-full object-cover" initial={{
          opacity: 0,
          scale: 1.1
        }} animate={{
          opacity: 1,
          scale: 1
        }} exit={{
          opacity: 0,
          scale: .95
        }} transition={{
          duration: .5
        }} /></__mod_47962.N>{s && <div className="absolute inset-0 flex items-end justify-center pb-8 sm:pb-12 px-6 sm:px-8"><div className="absolute inset-0 bg-linear-to-t from-neutral-950 via-black/20 to-transparent pointer-events-none" /><div className="relative z-10 flex items-center justify-between w-full"><p className="text-sm text-white/90 font-light">Our core values</p><div className="relative w-12 h-12"><svg className="w-full h-full -rotate-90" viewBox="0 0 100 100"><circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="4" className="text-white/30" /><circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" className="text-white" strokeDasharray={`${188 * t} 188`} /></svg></div></div></div>}</motion.div></div>;
}
function u({
  progress: e
}) {
  return <div className="flex flex-col items-center"><motion.p initial={{
      opacity: 0,
      y: 10
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: .6,
      delay: .4
    }} className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400">Our core values</motion.p><motion.div initial={{
      opacity: 0,
      scale: .8
    }} animate={{
      opacity: 1,
      scale: 1
    }} transition={{
      duration: .6,
      delay: .5
    }} className="relative w-12 h-12 sm:w-14 sm:h-14"><svg className="w-full h-full -rotate-90" viewBox="0 0 100 100"><circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="4" className="text-neutral-200 dark:text-neutral-800" /><circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" className="text-neutral-900 dark:text-white" strokeDasharray={`${188 * e} 188`} /></svg></motion.div></div>;
}
function d({
  activeValue: e
}) {
  return <div className="flex flex-col justify-start gap-4 sm:gap-6"><__mod_47962.N mode="wait"><motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} exit={{
        opacity: 0,
        y: -20
      }} transition={{
        duration: .5
      }}><h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-neutral-900 dark:text-white mb-4 sm:mb-6">{e.heading}</h2><p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">{e.description}</p></motion.div></__mod_47962.N></div>;
}
function x() {
  let [e, t] = (0, React.useState)(0),
    [s, l] = (0, React.useState)(0);
  (0, React.useEffect)(() => {
    l(0);
    let e = Date.now(),
      s = setInterval(() => {
        let s = Date.now() - e;
        l(Math.min(s / 6e3, 1)), s >= 6e3 && t(e => (e + 1) % n.length);
      }, 32);
    return () => clearInterval(s);
  }, [e]);
  let a = n[e],
    [x, h] = (0, React.useState)(!1);
  return (0, React.useEffect)(() => {
    let e = navigator.userAgent.toLowerCase();
    -1 !== e.indexOf("safari") && -1 === e.indexOf("chrome") && h(!0);
  }, []), <section className="w-full flex items-center py-12 px-4 sm:px-6 lg:px-8 bg-white dark:bg-neutral-950"><div className="max-w-[1400px] mx-auto w-full"><div className="flex flex-col gap-12 sm:gap-16 lg:hidden"><OB activeValue={a} progress={s} showProgress={!0} /><CB activeIndex={e} /><DB activeValue={a} /></div><div className="hidden lg:flex lg:flex-col gap-12"><div className="grid grid-cols-3 gap-12 xl:gap-16 items-center"><div className="flex items-center justify-center"><CB activeIndex={e} /></div><div className="flex items-center justify-center"><OB activeValue={a} progress={s} /></div><div className="flex items-center justify-center"><DB activeValue={a} /></div></div><div className={`flex justify-center ${x ? "mt-8" : ""}`}><UB progress={s} /></div></div></div></section>;
}

const CB: any = c;
const OB: any = o;
const UB: any = u;
const DB: any = d;

export default x;

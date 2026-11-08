import { motion, AnimatePresence } from "motion/react";
import { Github, Mail } from "lucide-react";
import * as __mod_47962 from "../_helpers/47962";
/**
 * About 1
 * Auto-cycling image carousel with text
 * slug: about-1
 * category: About
 * export: About1
 * deps: lucide-react, motion
 * original: ts-tailwind/blocks/about/about-1.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let d = [{
    id: 1,
    name: "Alex Chen",
    role: "CEO & Founder",
    image: "/svg/placeholder.svg",
    github: "#",
    mail: "#"
  }, {
    id: 2,
    name: "Sarah Miller",
    role: "CTO",
    image: "/svg/placeholder.svg",
    github: "#",
    mail: "#"
  }, {
    id: 3,
    name: "Mike Johnson",
    role: "Head of Product",
    image: "/svg/placeholder.svg",
    github: "#",
    mail: "#"
  }, {
    id: 4,
    name: "Emma Davis",
    role: "Lead Designer",
    image: "/svg/placeholder.svg",
    github: "#",
    mail: "#"
  }, {
    id: 5,
    name: "Ryan Park",
    role: "VP Engineering",
    image: "/svg/placeholder.svg",
    github: "#",
    mail: "#"
  }],
  u = [.32, .72, 0, 1];
function c({
  displayProgressIndicators: e = !0
} = {}) {
  let [t, r] = (0, React.useState)(0),
    [n, s] = (0, React.useState)(0);
  (0, React.useEffect)(() => {
    let e = setInterval(() => {
      r(e => (e + 1) % d.length);
    }, 5e3);
    return () => clearInterval(e);
  }, [n]);
  let i = e => {
    r(e), s(e => e + 1);
  };
  return <section className="w-full flex items-start lg:items-center py-12 px-4 sm:px-6 lg:px-8 bg-white dark:bg-neutral-950"><div className="max-w-[1400px] mx-auto w-full"><div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start"><HB activeIndex={t} onIndexChange={i} /><div className="lg:col-span-9 order-1 lg:order-2"><MB /><x visibleMembers={[d[t], d[(t + 1) % d.length], d[(t + 2) % d.length]]} />{e && <g activeIndex={t} onIndexChange={i} />}</div></div></div></section>;
}
function h({
  activeIndex: e,
  onIndexChange: t
}) {
  return <div className="lg:col-span-3 order-2 lg:order-1"><div className="space-y-4">{d.map((r, a) => {
        let n = a === e;
        return <button onClick={() => t(a)} className="flex items-center gap-3 w-full text-left group"><div className={`w-2 h-2 rounded-full ${n ? "bg-neutral-900 dark:bg-white scale-100" : "bg-neutral-300 dark:bg-neutral-700 scale-75"}`} /><span className={`text-sm sm:text-base ${n ? "text-neutral-900 dark:text-white font-medium" : "text-neutral-500 dark:text-neutral-400 group-hover:text-neutral-700 dark:group-hover:text-neutral-300"}`}>{r.name}</span></button>;
      })}</div></div>;
}
function m() {
  return <motion.div initial={{
    opacity: 0,
    y: 20
  }} animate={{
    opacity: 1,
    y: 0
  }} transition={{
    duration: .5
  }} className="mb-8"><h1 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-neutral-900 dark:text-white mb-1">Meet the experts</h1><p className="text-base tracking-tight text-neutral-500 dark:text-neutral-400">The people who make it all happen</p></motion.div>;
}
function x({
  visibleMembers: e
}) {
  return <div className="relative w-full overflow-hidden" style={{
    height: 450
  }}><div className="flex gap-6 h-full"><__mod_47962.N mode="sync" initial={!1}>{e.map((e, t) => <f member={e} position={t} />)}</__mod_47962.N></div><div className="hidden lg:block absolute top-0 right-0 w-[200px] h-full bg-linear-to-l from-white dark:from-neutral-950 to-transparent pointer-events-none" /></div>;
}
function f({
  member: e,
  position: t
}) {
  let r = 0 === t;
  return <motion.div layout={!0} initial={{
    opacity: 0,
    x: 100
  }} animate={{
    opacity: 1,
    x: 0
  }} exit={{
    opacity: 0,
    x: -100,
    transition: {
      duration: .4
    }
  }} transition={{
    duration: .4,
    ease: u,
    layout: {
      duration: 2,
      ease: u
    }
  }} className="shrink-0 w-[280px] sm:w-[320px] md:w-[400px] h-full"><motion.div className="relative w-full h-full rounded-2xl overflow-hidden bg-neutral-100 dark:bg-neutral-900" animate={{
      padding: r ? "0px" : "4rem"
    }} transition={{
      duration: .75
    }}><motion.div className="relative w-full h-full" layout={!0} transition={{
        duration: .6,
        ease: u
      }}><img src={e.image} alt={e.name} className="w-full h-full object-cover rounded-lg" /><div className="absolute inset-0 bg-linear-to-t from-white/80 via-white/30 to-transparent dark:from-black/80 dark:via-black/30 dark:to-transparent rounded-lg" /><p member={e} isActive={r} isNext={1 === t} /></motion.div></motion.div></motion.div>;
}
function p({
  member: e,
  isActive: t,
  isNext: r
}) {
  let a = t ? "w-9 h-9 sm:w-10 sm:h-10" : r ? "w-8 h-8" : "w-7 h-7",
    n = t ? "w-4 h-4" : r ? "w-3.5 h-3.5" : "w-3 h-3";
  return <div className={`absolute bottom-0 left-0 right-0 ${t ? "p-5 sm:p-6 md:p-8" : r ? "p-4 sm:p-5" : "p-3 sm:p-4"}`}><h3 className={`font-bold text-neutral-900 dark:text-white mb-1 ${t ? "text-xl sm:text-2xl md:text-3xl" : r ? "text-base sm:text-lg md:text-xl" : "text-sm sm:text-base md:text-lg"}`}>{e.name}</h3><p className={`text-neutral-800 dark:text-white/80 mb-4 ${t ? "text-sm sm:text-base" : r ? "text-xs sm:text-sm" : "text-xs"}`}>{e.role}</p><div className="flex items-center gap-2 sm:gap-3"><a href={e.github} className={`rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors duration-200 flex items-center justify-center ${a}`} aria-label={`${e.name} Github`}><Github className={`text-neutral-900 dark:text-white ${n}`} /></a><a href={e.mail} className={`rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors duration-200 flex items-center justify-center ${a}`} aria-label={`${e.name} Mail`}><Mail className={`text-neutral-900 dark:text-white ${n}`} /></a></div></div>;
}
function g({
  activeIndex: e,
  onIndexChange: t
}) {
  return <div className="flex items-center gap-2 mt-6">{d.map((r, a) => {
      let s = a === e;
      return <button onClick={() => t(a)} className="group relative h-1 flex-1 bg-neutral-200 dark:bg-neutral-800 rounded-full overflow-hidden" aria-label={`Go to team member ${a + 1}`}><motion.div className="absolute inset-0 bg-neutral-900 dark:bg-white origin-left" initial={{
          scaleX: 0
        }} animate={{
          scaleX: +!!s
        }} transition={{
          duration: s ? 5 : .3,
          ease: s ? "linear" : "easeOut"
        }} /></button>;
    })}</div>;
}

const HB: any = h;

const MB: any = m;

export default c;

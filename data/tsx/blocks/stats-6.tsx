import * as __mod_32923 from "../_helpers/32923";
import * as __mod_75272 from "../_helpers/75272";
import * as __mod_17192 from "../_helpers/17192";
/**
 * Stats 6
 * Phone mockups with parallax stat circles
 * slug: stats-6
 * category: Stats
 * export: Stats6
 * deps: motion
 * original: ts-tailwind/blocks/stats/stats-6.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import { motion, AnimatePresence } from "motion/react";

let o = [{
  id: 1,
  stat: "99.9%",
  label: "Average uptime",
  x: "8%",
  y: "70%",
  mobileX: "5%",
  mobileY: "65%",
  size: "180px",
  mobileSize: "120px",
  intensity: .0075
}, {
  id: 2,
  stat: "Deploy",
  label: "& ship faster",
  sublabel: "Straight to production",
  x: "10%",
  y: "25%",
  mobileX: "10%",
  mobileY: "15%",
  size: "220px",
  mobileSize: "140px",
  intensity: .01
}, {
  id: 3,
  stat: "2.4s",
  label: "avg. build time",
  x: "75%",
  y: "15%",
  mobileX: "70%",
  mobileY: "12%",
  size: "200px",
  mobileSize: "130px",
  intensity: .00625
}, {
  id: 4,
  stat: "500K+",
  label: "Deployments this month",
  x: "72%",
  y: "55%",
  mobileX: "65%",
  mobileY: "70%",
  size: "280px",
  mobileSize: "160px",
  intensity: .005
}, {
  id: 5,
  stat: "Zero",
  label: "Deployment downtime",
  x: "80%",
  y: "30%",
  mobileX: "80%",
  mobileY: "35%",
  size: "160px",
  mobileSize: "110px",
  intensity: .00875
}];
function d({
  ball: e,
  smoothMouseX: t,
  smoothMouseY: i,
  index: r
}) {
  let s = (0, __mod_32923.G)(t, [-1, 1], [-20 * e.intensity * 100, 20 * e.intensity * 100]),
    o = (0, __mod_32923.G)(i, [-1, 1], [-15 * e.intensity * 100, 15 * e.intensity * 100]);
  return <motion.div className="absolute hidden sm:block" style={{
    left: e.x,
    top: e.y,
    x: s,
    y: o,
    width: e.size,
    height: e.size
  }} initial={{
    opacity: 0,
    scale: .8
  }} animate={{
    opacity: 1,
    scale: 1
  }} transition={{
    duration: .8,
    delay: .1 * r
  }}><div className="w-full h-full rounded-full bg-purple-400 dark:bg-purple-500 flex flex-col items-center justify-center text-center p-6"><span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium tracking-tighter text-neutral-900 dark:text-neutral-900 mb-1">{e.stat}</span><p className="text-xs sm:text-sm text-neutral-900 dark:text-neutral-900 font-medium tracking-tight">{e.label}</p>{e.sublabel && <p className="text-xs text-neutral-800 dark:text-neutral-800 mt-1">{e.sublabel}</p>}</div></motion.div>;
}
function c() {
  let e = (0, __mod_75272.d)(0),
    t = (0, __mod_75272.d)(0),
    i = {
      damping: 50,
      stiffness: 100
    },
    l = (0, __mod_17192.z)(e, i),
    c = (0, __mod_17192.z)(t, i);
  return <section className="relative w-full min-h-[var(--rb-section-min-h,100vh)] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-white dark:bg-neutral-950 overflow-hidden" onMouseMove={i => {
    let n = i.currentTarget.getBoundingClientRect(),
      l = ((i.clientX - n.left) / n.width - .5) * 2,
      a = ((i.clientY - n.top) / n.height - .5) * 2;
    e.set(l), t.set(a);
  }}><div className="absolute inset-0 pointer-events-none">{o.map((e, t) => <d ball={e} smoothMouseX={l} smoothMouseY={c} index={t} />)}</div><div className="relative z-10 max-w-[1400px] mx-auto w-full"><div className="text-center mb-28"><motion.h1 initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: !0
        }} transition={{
          duration: .6
        }} className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-black dark:text-white leading-tight mb-4">Lightning-fast deployments</motion.h1><motion.p initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: !0
        }} transition={{
          duration: .6,
          delay: .1
        }} className="text-base tracking-tight text-black dark:text-white">Ship code to production in seconds, not hours. Deploy with confidence every time</motion.p></div><div className="relative flex items-center justify-center gap-6 mt-6"><motion.div initial={{
          opacity: 0,
          y: 40
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: !0
        }} transition={{
          duration: .8,
          delay: .2
        }} className="relative -translate-y-8 sm:-translate-y-12 md:-translate-y-16"><div className="w-40 sm:w-[200px] md:w-60 lg:w-[280px] aspect-9/16 rounded-3xl bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 shadow-2xl overflow-hidden" /></motion.div><motion.div initial={{
          opacity: 0,
          y: 40
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: !0
        }} transition={{
          duration: .8,
          delay: .3
        }} className="relative"><div className="w-40 sm:w-[200px] md:w-60 lg:w-[280px] aspect-9/16 rounded-3xl bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 shadow-2xl overflow-hidden" /></motion.div></div><motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: !0
      }} transition={{
        duration: .6,
        delay: .4
      }} className="mt-12 sm:hidden grid grid-cols-2 gap-4">{o.map((e, t) => <motion.div initial={{
          opacity: 0,
          scale: .9
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} viewport={{
          once: !0
        }} transition={{
          duration: .5,
          delay: .5 + .1 * t
        }} className="aspect-square rounded-full bg-purple-400 dark:bg-purple-500 p-6 flex flex-col items-center justify-center text-center"><span className="text-2xl font-bold text-neutral-900 dark:text-neutral-900 mb-1">{e.stat}</span><p className="text-xs text-neutral-900 dark:text-neutral-900 font-medium leading-tight">{e.label}</p>{e.sublabel && <p className="text-xs text-neutral-800 dark:text-neutral-800 mt-1">{e.sublabel}</p>}</motion.div>)}</motion.div></div></section>;
}

export default c;

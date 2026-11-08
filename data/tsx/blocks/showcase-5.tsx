import * as React from "react";
import * as __mod_47962 from "../_helpers/47962";
/**
 * Showcase 5
 * Tabbed creator carousel
 * slug: showcase-5
 * category: Showcase
 * export: Showcase5
 * deps: motion
 * original: ts-tailwind/blocks/showcase/showcase-5.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import { motion, AnimatePresence } from "motion/react";

let n = ["Studios", "Creators", "Teams"],
  o = {
    Studios: ["https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=600&q=80", "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80", "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?w=600&q=80", "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=600&q=80", "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&q=80", "https://images.unsplash.com/photo-1604079628040-94301bb21b91?w=600&q=80", "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=600&q=80", "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=600&q=80"],
    Creators: ["https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&q=80", "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600&q=80", "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&q=80", "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=600&q=80", "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&q=80", "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=600&q=80", "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=600&q=80", "https://images.unsplash.com/photo-1513623935135-c896b59073c1?w=600&q=80"],
    Teams: ["https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80", "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&q=80", "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=600&q=80", "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=80", "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80", "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600&q=80", "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&q=80", "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80"]
  };
function d() {
  let [e, t] = (0, React.useState)("Studios"),
    a = o[e],
    d = [...a, ...a];
  return <section className="relative w-full min-h-[var(--rb-section-min-h,100vh)] flex flex-col items-center py-12  bg-white dark:bg-neutral-950 overflow-hidden px-4 sm:px-6 lg:px-8"><div className="absolute inset-0 opacity-[0.25] dark:opacity-[0.08] pointer-events-none" style={{
      backgroundImage: "linear-gradient(to right, rgb(0 0 0 / 0.06) 1px, transparent 1px), linear-gradient(to bottom, rgb(0 0 0 / 0.06) 1px, transparent 1px)",
      backgroundSize: "42px 42px"
    }} /><div className="relative max-w-[1400px] mx-auto w-full flex flex-col items-center text-center"><motion.h2 initial={{
        opacity: 0,
        y: 16
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: !0
      }} transition={{
        duration: .6,
        delay: .1
      }} className="mt-4 text-3xl sm:text-5xl md:text-6xl font-medium text-neutral-900 dark:text-white tracking-tight leading-[1.05]">Work that left the canvas<br />and made it to market</motion.h2><motion.p initial={{
        opacity: 0,
        y: 12
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: !0
      }} transition={{
        duration: .5,
        delay: .2
      }} className="mt-5 text-base sm:text-lg text-neutral-600 dark:text-neutral-400 max-w-xl">A rolling feed of campaigns, launches, and side projects shipped by people building on our tools every day.</motion.p><div className="mt-8 relative flex items-center bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-full p-1">{n.map(a => <button onClick={() => t(a)} className={`relative px-5 sm:px-6 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer z-10 ${e === a ? "text-neutral-900 dark:text-white" : "text-neutral-500 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-white"}`}>{e === a && <motion.span layoutId="showcase5-pill" transition={{
            type: "spring",
            stiffness: 400,
            damping: 32
          }} className="absolute inset-0 rounded-full bg-neutral-100 dark:bg-neutral-800 -z-10" />}{a}</button>)}</div></div><div className="relative w-full mt-14 sm:mt-16 overflow-hidden py-6"><motion.div animate={{
        x: ["0%", "-50%"]
      }} transition={{
        duration: 60,
        repeat: 1 / 0,
        ease: "linear",
        repeatType: "loop"
      }} className="flex items-center w-max will-change-transform">{d.map((t, l) => <div className="flex items-center shrink-0"><div className="relative z-10 w-[260px] sm:w-[320px] aspect-square rounded-2xl sm:rounded-3xl p-2 bg-white dark:bg-neutral-900 shadow-[0_10px_40px_-12px_rgba(0,0,0,0.2)] border border-neutral-200 dark:border-neutral-800"><div className="relative w-full h-full rounded-lg sm:rounded-2xl overflow-hidden bg-neutral-100 dark:bg-neutral-800"><__mod_47962.N mode="wait"><motion.img src={t} alt="" loading="lazy" initial={{
                  scale: 0,
                  opacity: 0,
                  borderRadius: "100%"
                }} animate={{
                  scale: 1,
                  opacity: 1,
                  borderRadius: "0%"
                }} exit={{
                  scale: 0,
                  opacity: 0,
                  borderRadius: "100%"
                }} transition={{
                  duration: .55,
                  ease: [.22, 1, .36, 1],
                  delay: l % a.length * .04
                }} className="absolute inset-0 w-full h-full object-cover" /></__mod_47962.N></div></div><div className="relative z-0 flex items-center w-16 sm:w-24 shrink-0"><span className="absolute left-0 -translate-x-1/2 w-3 h-3 rounded-full bg-orange-500" /><span className="flex-1 border-t-2 border-dashed border-neutral-300 dark:border-neutral-700" /><span className="absolute right-0 translate-x-1/2 w-3 h-3 rounded-full bg-orange-500" /></div></div>)}</motion.div></div></section>;
}

export default d;

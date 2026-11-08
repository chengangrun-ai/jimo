/**
 * Stats 7
 * Two columns with animated bar charts
 * slug: stats-7
 * category: Stats
 * export: Stats7
 * deps: motion
 * original: ts-tailwind/blocks/stats/stats-7.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import { motion, AnimatePresence } from "motion/react";

let n = [{
  label: "React",
  percentage: 68,
  color: "bg-blue-500"
}, {
  label: "TypeScript",
  percentage: 45,
  color: "bg-purple-500"
}, {
  label: "Vue.js",
  percentage: 23,
  color: "bg-green-500"
}, {
  label: "Angular",
  percentage: 12,
  color: "bg-red-500"
}, {
  label: "Svelte",
  percentage: 8,
  color: "bg-orange-500"
}, {
  label: "Next.js",
  percentage: 34,
  color: "bg-neutral-900 dark:bg-neutral-100"
}, {
  label: "Node.js",
  percentage: 52,
  color: "bg-emerald-600"
}, {
  label: "Other frameworks",
  percentage: 15,
  color: "bg-cyan-500"
}];
function r() {
  return <section className="w-full py-12 px-4 sm:px-6 lg:px-8 bg-white dark:bg-neutral-950"><div className="max-w-[1400px] mx-auto w-full"><div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20"><div className="flex flex-col gap-4"><motion.h2 initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: !0
          }} transition={{
            duration: .5
          }} className="text-4xl sm:text-5xl font-medium tracking-tight text-neutral-900 dark:text-white leading-tight">Developer insights</motion.h2><motion.p initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: !0
          }} transition={{
            duration: .5,
            delay: .1
          }} className="text-base text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-md">We're committed to understanding what technologies developers love most. Here's what our community is building with right now, based on 50,000+ responses.</motion.p></div><div className="flex flex-col gap-6 sm:gap-8"><div><motion.h3 initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: !0
            }} transition={{
              duration: .5,
              delay: .2
            }} className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-neutral-900 dark:text-white">Technology preferences</motion.h3><motion.p initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: !0
            }} transition={{
              duration: .5,
              delay: .25
            }} className="text-sm text-neutral-600 dark:text-neutral-400">As of 2024</motion.p></div><div className="flex flex-col gap-6">{n.map((e, t) => <motion.div initial={{
              opacity: 0,
              x: -20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: !0
            }} transition={{
              duration: .5,
              delay: .3 + .05 * t
            }} className="flex flex-col gap-2"><div className="flex items-center justify-between"><span className="text-sm sm:text-base tracking-tight text-neutral-900 dark:text-white">{e.label}</span><span className="text-sm sm:text-base font-medium tracking-tight text-neutral-900 dark:text-white">{e.percentage}%</span></div><div className="relative w-full h-3 sm:h-4 bg-neutral-200 dark:bg-neutral-800 rounded-xs overflow-hidden"><motion.div initial={{
                  width: 0
                }} whileInView={{
                  width: `${e.percentage}%`
                }} viewport={{
                  once: !0
                }} transition={{
                  duration: 1,
                  delay: .4 + .05 * t,
                  ease: "easeOut"
                }} className={`h-full ${e.color} rounded-xs`} /></div></motion.div>)}</div></div></div></div></section>;
}

export default r;

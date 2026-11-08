import { ArrowRight } from "lucide-react";
/**
 * Stats 4
 * Two columns with a 2x2 stat grid
 * slug: stats-4
 * category: Stats
 * export: Stats4
 * deps: lucide-react, motion
 * original: ts-tailwind/blocks/stats/stats-4.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import { motion, AnimatePresence } from "motion/react";

let s = [{
  label: "Data queries daily",
  value: "8.7B+",
  highlight: !1
}, {
  label: "Active databases",
  value: "2,400+",
  highlight: !1
}, {
  label: "Records processed",
  value: "142B+",
  highlight: !1
}, {
  label: "24H query speed",
  value: "<5ms",
  highlight: !0
}];
function n() {
  return <section className="w-full py-12 px-4 sm:px-6 lg:px-8 bg-white dark:bg-neutral-950"><div className="max-w-[1400px] mx-auto w-full"><div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center"><div className="flex flex-col lg:justify-between lg:min-h-[400px]"><motion.h2 initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: !0
          }} transition={{
            duration: .5
          }} className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-neutral-900 dark:text-white leading-normal sm:leading-[0.6]">Built for scale</motion.h2><div className="space-y-6 sm:space-y-8 mt-8 lg:mt-0"><motion.p initial={{
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
            }} className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-md">DataFlow enables lightning-fast queries at any scale. Our platform powers modern analytics.</motion.p><motion.button initial={{
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
            }} className="cursor-pointer inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full bg-black dark:bg-white text-white dark:text-black font-medium text-sm sm:text-base hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors duration-200 w-fit">Learn more<ArrowRight className="w-5 h-5" /></motion.button></div></div><div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">{s.map((e, t) => <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: !0
          }} transition={{
            duration: .5,
            delay: .1 + .1 * t
          }} className="relative rounded-3xl border border-neutral-200 dark:border-neutral-800 shadow-md overflow-hidden p-6 min-h-[180px] sm:min-h-[200px] flex flex-col justify-between bg-white dark:bg-neutral-900"><div className="absolute inset-0 z-0" style={{
              backgroundImage: "radial-gradient(circle at 1px 1px, rgba(0, 0, 0, 0.1) 1px, transparent 0)",
              backgroundSize: "14px 14px"
            }} /><div className="absolute inset-0 z-0 opacity-0 dark:opacity-100 transition-opacity" style={{
              backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.05) 1px, transparent 0)",
              backgroundSize: "14px 14px"
            }} /><div className="relative z-10 flex flex-col justify-between h-full"><div className="flex items-center gap-2"><p className={`text-sm sm:text-base ${e.highlight ? "text-green-600 dark:text-green-500" : "text-neutral-600 dark:text-neutral-400"}`}>{e.label}</p>{e.highlight && <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75" /><span className="relative inline-flex rounded-full h-2 w-2 bg-green-600 dark:bg-green-500" /></span>}</div><p className={`text-4xl sm:text-5xl md:text-6xl font-medium tracking-tighter ${e.highlight ? "text-green-600 dark:text-green-500" : "text-neutral-900 dark:text-white"}`}>{e.value}</p></div></motion.div>)}</div></div></div></section>;
}

export default n;

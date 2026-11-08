import { Check } from "lucide-react";
/**
 * Comparison 1
 * Two-column checklist comparison
 * slug: comparison-1
 * category: Comparison
 * export: Comparison1
 * deps: lucide-react, motion
 * original: ts-tailwind/blocks/comparison/comparison-1.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import { motion, AnimatePresence } from "motion/react";

function i() {
  return <section className="relative w-full bg-white px-4 py-12 sm:px-6 lg:px-8 dark:bg-neutral-950"><div className="mx-auto w-full max-w-[1400px]"><div className="grid gap-6 lg:grid-cols-2 lg:items-start"><motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: !0
        }} transition={{
          duration: .6
        }} className="flex flex-col"><h2 className="mb-6 text-4xl font-medium tracking-tight text-neutral-950 dark:text-white">Skyvault vs. Cloudbox</h2><p className="mb-8 text-md max-w-md leading-relaxed text-neutral-600 dark:text-neutral-400">SkyVault and CloudBox are both cloud storage solutions for your files and data, but SkyVault includes unlimited storage, unlimited uploads, and advanced encryption on all plans.</p><div><motion.button whileHover={{
              scale: 1.02
            }} whileTap={{
              scale: .98
            }} className="w-full rounded-full bg-neutral-950 px-8 py-4 text-base font-medium text-white transition-colors hover:bg-neutral-800 dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200 md:w-auto">Try Skyvault Free</motion.button></div></motion.div><div className="w-full"><div className="mb-8 grid grid-cols-2 gap-4 md:gap-6"><motion.div initial={{
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
            }} className="flex items-center"><span className="text-2xl font-bold text-neutral-950 dark:text-white md:text-3xl">SkyVault</span></motion.div><motion.div initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: !0
            }} transition={{
              duration: .6,
              delay: .2
            }} className="flex items-center"><span className="text-2xl font-bold tracking-wider text-neutral-950 dark:text-white md:text-3xl">CloudBox</span></motion.div></div><div className="space-y-3">{[{
              name: "Unlimited storage",
              brand1: !0,
              brand2: !1
            }, {
              name: "Unlimited uploads",
              brand1: !0,
              brand2: !1
            }, {
              name: "Advanced encryption",
              brand1: !0,
              brand2: !1
            }, {
              name: "Team collaboration",
              brand1: !0,
              brand2: !0
            }, {
              name: "Mobile sync",
              brand1: !0,
              brand2: !0
            }].map((e, t) => <motion.div initial={{
              opacity: 0,
              x: 20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: !0
            }} transition={{
              duration: .5,
              delay: .1 * t
            }} className="grid grid-cols-2 gap-4 md:gap-6"><div className="flex items-center gap-3 py-4"><div className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-md ${e.brand1 ? "bg-neutral-950 dark:bg-white" : "border-2 border-neutral-300 dark:border-neutral-700"}`}>{e.brand1 && <Check className="h-4 w-4 text-white dark:text-neutral-950" strokeWidth={3} />}</div><span className="text-sm font-medium text-neutral-950 dark:text-white md:text-base">{e.name}</span></div><div className="flex items-center gap-3 py-4"><div className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-md ${e.brand2 ? "bg-neutral-950 dark:bg-white" : "border-2 border-neutral-300 dark:border-neutral-700"}`}>{e.brand2 && <Check className="h-4 w-4 text-white dark:text-neutral-950" strokeWidth={3} />}</div><span className={`text-sm font-medium md:text-base ${e.brand2 ? "text-neutral-950 dark:text-white" : "text-neutral-400 dark:text-neutral-600"}`}>{e.name}</span></div></motion.div>)}</div></div></div></div></section>;
}

export default i;

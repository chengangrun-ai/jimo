import { Building2, Compass, Minus } from "lucide-react";
/**
 * Comparison 5
 * Cost table with a savings heatmap
 * slug: comparison-5
 * category: Comparison
 * export: Comparison5
 * deps: lucide-react, motion
 * original: ts-tailwind/blocks/comparison/comparison-5.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import { motion, AnimatePresence } from "motion/react";

let d = [.22, 1, .36, 1],
  o = ["bg-emerald-50 text-emerald-800 dark:bg-emerald-500/10 dark:text-emerald-300", "bg-emerald-100 text-emerald-800 dark:bg-emerald-500/20 dark:text-emerald-200", "bg-emerald-200 text-emerald-900 dark:bg-emerald-500/30 dark:text-emerald-100", "bg-emerald-300 text-emerald-950 dark:bg-emerald-500/45 dark:text-emerald-50"],
  c = [{
    stage: "Starting out",
    detail: "Up to 10 seats \xb7 core planning",
    legacy: "$0/mo",
    northstar: "$0/mo",
    saving: null,
    savingNote: "Free on both",
    tone: 0
  }, {
    stage: "First team",
    detail: "25 seats \xb7 shared roadmaps",
    legacy: "$300/mo",
    northstar: "$190/mo",
    saving: "$110/mo",
    savingNote: "$1,320 back per year",
    tone: 0
  }, {
    stage: "Department",
    detail: "80 seats \xb7 cross-team reporting",
    legacy: "$960/mo",
    northstar: "$580/mo",
    saving: "$380/mo",
    savingNote: "$4,560 back per year",
    tone: 1
  }, {
    stage: "Division",
    detail: "220 seats \xb7 approval workflows",
    legacy: "$2,640/mo",
    northstar: "$1,390/mo",
    saving: "$1,250/mo",
    savingNote: "$15,000 back per year",
    tone: 2
  }, {
    stage: "Company-wide",
    detail: "600 seats \xb7 regional controls",
    legacy: "$7,200/mo",
    northstar: "$3,180/mo",
    saving: "$4,020/mo",
    savingNote: "$48,240 back per year",
    tone: 3
  }],
  x = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: .07
      }
    }
  },
  m = {
    hidden: {
      opacity: 0
    },
    show: {
      opacity: 1,
      transition: {
        duration: .55,
        ease: d
      }
    }
  },
  u = {
    hidden: {
      opacity: 0,
      y: 14
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: .55,
        ease: d
      }
    }
  };
function h({
  row: e
}) {
  return e.saving ? <span className="block"><span className="block font-mono text-sm font-semibold tracking-tight">{e.saving}</span><span className="mt-1 block text-xs font-medium opacity-75">{e.savingNote}</span></span> : <span className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400"><Minus className="h-3.5 w-3.5 shrink-0" />{e.savingNote}</span>;
}
function p() {
  return <section className="w-full bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24 dark:bg-neutral-950"><div className="mx-auto w-full max-w-[1400px]"><motion.div initial={{
        opacity: 0,
        y: 16
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: !0,
        margin: "-80px"
      }} transition={{
        duration: .6,
        ease: d
      }} className="mx-auto mb-12 max-w-2xl text-center sm:mb-16"><p className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400">Pricing at scale</p><h2 className="mt-4 text-balance text-2xl font-semibold tracking-tight text-neutral-950 sm:text-3xl md:text-4xl lg:text-5xl dark:text-white">What seat-based pricing really costs</h2><p className="mx-auto mt-5 max-w-xl text-pretty text-base leading-relaxed text-neutral-600 sm:text-lg dark:text-neutral-400">Northstar meters active usage, not head-count. The gap starts small and compounds at every stage of growth.</p></motion.div><motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: !0,
        margin: "-80px"
      }} transition={{
        duration: .65,
        ease: d
      }} className="hidden overflow-hidden rounded-3xl border border-neutral-200 bg-white md:block dark:border-white/10 dark:bg-neutral-900"><table className="w-full table-fixed text-left"><caption className="sr-only">Monthly cost comparison between a seat-metered suite and Northstar at five growth stages</caption><thead><tr className="border-b border-neutral-200 bg-neutral-50 dark:border-white/10 dark:bg-white/[0.03]"><th scope="col" className="w-[30%] px-6 py-5 lg:px-8"><span className="text-xs font-medium uppercase tracking-[0.16em] text-neutral-500 dark:text-neutral-400">Growth stage</span></th><th scope="col" className="w-[21%] px-6 py-5 lg:px-8"><span className="flex items-center gap-2.5"><span className="hidden h-6 w-6 shrink-0 items-center justify-center rounded-md bg-neutral-200 text-neutral-500 lg:flex dark:bg-white/10 dark:text-neutral-400"><Building2 className="h-3.5 w-3.5" /></span><span className="text-sm font-semibold text-neutral-500 dark:text-neutral-400">Seat-metered suite</span></span></th><th scope="col" className="w-[21%] px-6 py-5 lg:px-8"><span className="flex items-center gap-2.5"><span className="hidden h-6 w-6 shrink-0 items-center justify-center rounded-md bg-neutral-950 text-white lg:flex dark:bg-white dark:text-neutral-950"><Compass className="h-3.5 w-3.5" /></span><span className="text-sm font-semibold text-neutral-950 dark:text-white">Northstar</span></span></th><th scope="col" className="w-[28%] px-6 py-5 lg:px-8"><span className="text-sm font-semibold text-emerald-700 dark:text-emerald-400">You keep</span></th></tr></thead><motion.tbody variants={x} initial="hidden" whileInView="show" viewport={{
            once: !0,
            margin: "-80px"
          }}>{c.map(e => <motion.tr variants={m} className="border-b border-neutral-200 last:border-b-0 dark:border-white/10"><th scope="row" className="px-6 py-6 align-middle font-normal lg:px-8"><span className="block text-base font-semibold text-neutral-950 dark:text-white">{e.stage}</span><span className="mt-1 block text-sm text-neutral-500 dark:text-neutral-400">{e.detail}</span></th><td className="px-6 py-6 align-middle font-mono text-sm tracking-tight text-neutral-500 lg:px-8 dark:text-neutral-400">{e.legacy}</td><td className="px-6 py-6 align-middle font-mono text-sm font-semibold tracking-tight text-neutral-950 lg:px-8 dark:text-white">{e.northstar}</td><td className={`px-6 py-6 align-middle lg:px-8 ${e.saving ? o[e.tone] : ""}`}><h row={e} /></td></motion.tr>)}</motion.tbody></table></motion.div><motion.div variants={x} initial="hidden" whileInView="show" viewport={{
        once: !0,
        margin: "-80px"
      }} className="space-y-4 md:hidden">{c.map(e => <motion.div variants={u} className="overflow-hidden rounded-2xl border border-neutral-200 bg-white dark:border-white/10 dark:bg-neutral-900"><div className="px-5 pb-4 pt-5"><p className="text-base font-semibold text-neutral-950 dark:text-white">{e.stage}</p><p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">{e.detail}</p></div><dl><div className="flex items-center justify-between border-t border-neutral-200 px-5 py-3.5 dark:border-white/10"><dt className="text-sm text-neutral-500 dark:text-neutral-400">Seat-metered suite</dt><dd className="font-mono text-sm tracking-tight text-neutral-500 dark:text-neutral-400">{e.legacy}</dd></div><div className="flex items-center justify-between border-t border-neutral-200 px-5 py-3.5 dark:border-white/10"><dt className="text-sm font-medium text-neutral-950 dark:text-white">Northstar</dt><dd className="font-mono text-sm font-semibold tracking-tight text-neutral-950 dark:text-white">{e.northstar}</dd></div><div className={`flex items-center justify-between border-t border-neutral-200 px-5 py-4 dark:border-white/10 ${e.saving ? o[e.tone] : "text-neutral-500 dark:text-neutral-400"}`}><dt className="text-sm font-medium">You keep</dt><dd className="text-right"><h row={e} /></dd></div></dl></motion.div>)}</motion.div><motion.p initial={{
        opacity: 0
      }} whileInView={{
        opacity: 1
      }} viewport={{
        once: !0,
        margin: "-80px"
      }} transition={{
        duration: .6,
        ease: d
      }} className="mt-6 text-center text-xs leading-relaxed text-neutral-500 dark:text-neutral-400">Savings modeled on a $12 per-seat list price billed monthly. Northstar usage tiers as of April 2026.</motion.p></div></section>;
}

export default p;

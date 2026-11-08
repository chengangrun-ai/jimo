import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight } from "lucide-react";
/**
 * Showcase 7
 * Case study index with a sticky preview
 * slug: showcase-7
 * category: Showcase
 * export: Showcase7
 * deps: lucide-react, motion
 * original: ts-tailwind/blocks/showcase/showcase-7.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let n = [{
    index: "01",
    title: "North Pier Identity",
    client: "Meridian Hotels",
    sector: "Brand system",
    year: "2026",
    metric: "42 venues aligned",
    summary: "A tactile brand language that carried one flagship property into a full destination network without losing its voice."
  }, {
    index: "02",
    title: "Mercer Supply Index",
    client: "Mercer & Co",
    sector: "Commerce platform",
    year: "2025",
    metric: "3 markets launched",
    summary: "Dense inventory decisions rebuilt as a fast editorial flow for the operations teams who live in it daily."
  }, {
    index: "03",
    title: "Arc Signal Room",
    client: "Arclight Energy",
    sector: "Data product",
    year: "2025",
    metric: "18 weeks to beta",
    summary: "A calmer interface and visual system for analysts tracking high-pressure infrastructure events in real time."
  }, {
    index: "04",
    title: "Solace Membership",
    client: "Solace Health",
    sector: "Growth redesign",
    year: "2024",
    metric: "2.7\xd7 activation lift",
    summary: "Plans, benefits, and next steps made legible without flattening the brand that earned the signup."
  }],
  o = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: .08
      }
    }
  },
  d = {
    hidden: {
      opacity: 0,
      y: 24
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: .6,
        ease: [.22, 1, .36, 1]
      }
    }
  };
function Showcase7() {
  let [e, t] = (0, React.useState)(0),
    a = String(n.length).padStart(2, "0");
  return <section className="w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-neutral-950"><div className="max-w-[1400px] mx-auto w-full"><div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-16 xl:gap-20 items-start"><motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: !0,
          margin: "-80px"
        }} transition={{
          duration: .6,
          ease: [.22, 1, .36, 1]
        }} className="lg:sticky lg:top-16"><h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.05] text-neutral-900 dark:text-white text-balance">Case studies measured in outcomes, not screens.</h2><p className="mt-5 text-base sm:text-lg leading-relaxed text-neutral-600 dark:text-neutral-400 max-w-md text-pretty">Four engagements from the past three years, each shipped alongside the team that runs it today.</p><a href="#" className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-neutral-900 dark:text-white hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors duration-200 cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-900 dark:focus-visible:outline-white">Browse all case studies<ArrowUpRight className="w-4 h-4" /></a><div className="relative mt-10 sm:mt-12 aspect-[4/3] overflow-hidden rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900">{n.map((t, a) => <motion.div initial={!1} animate={{
              opacity: +(e === a),
              scale: e === a ? 1 : 1.06
            }} transition={{
              duration: .55,
              ease: [.22, 1, .36, 1]
            }} aria-hidden={e !== a} className="absolute inset-0"><img src="/svg/placeholder.svg" alt={t.title} draggable={!1} className="absolute inset-0 w-full h-full object-cover" /><div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-neutral-950/80 via-neutral-950/25 to-transparent px-5 sm:px-6 pb-5 sm:pb-6 pt-16"><p className="text-sm font-medium text-white">{t.client}</p><p className="mt-1 text-xs text-neutral-300">{t.metric}</p></div></motion.div>)}<span className="absolute left-4 top-4 rounded-full bg-white/90 dark:bg-neutral-950/80 px-3 py-1 font-mono text-[11px] tracking-[0.12em] text-neutral-900 dark:text-white backdrop-blur-sm">{n[e].index} / {a}</span></div></motion.div><motion.div variants={o} initial="hidden" whileInView="visible" viewport={{
          once: !0,
          margin: "-80px"
        }} className="border-t border-neutral-200 dark:border-neutral-800">{n.map((a, i) => <motion.a href="#" variants={d} whileHover="hover" onMouseEnter={() => t(i)} onFocus={() => t(i)} className="group grid grid-cols-[auto_1fr_auto] items-start gap-5 sm:gap-8 py-7 sm:py-9 border-b border-neutral-200 dark:border-neutral-800 cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-neutral-900 dark:focus-visible:outline-white"><span className={`pt-1.5 font-mono text-xs tracking-[0.12em] transition-colors duration-200 ${e === i ? "text-neutral-900 dark:text-white" : "text-neutral-500 dark:text-neutral-500"}`}>{a.index}</span><div className="min-w-0"><h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-neutral-900 dark:text-white">{a.title}</h3><p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">{a.client} · {a.sector} · {a.year}</p><p className="mt-3 max-w-lg text-sm sm:text-base leading-relaxed text-neutral-600 dark:text-neutral-400 text-pretty">{a.summary}</p></div><span className="mt-1 grid h-11 w-11 shrink-0 place-items-center rounded-full border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-white group-hover:bg-neutral-900 group-hover:border-neutral-900 group-hover:text-white dark:group-hover:bg-white dark:group-hover:border-white dark:group-hover:text-neutral-900 transition-colors duration-200"><motion.span variants={{
                hover: {
                  x: 2,
                  y: -2
                }
              }} transition={{
                duration: .2,
                ease: "easeOut"
              }} className="grid place-items-center"><ArrowUpRight className="w-4 h-4" /></motion.span></span></motion.a>)}</motion.div></div></div></section>;
}

export default Showcase7;

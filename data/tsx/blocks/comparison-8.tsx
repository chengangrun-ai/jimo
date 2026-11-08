import { Check, Minus, Radar, X } from "lucide-react";
/**
 * Comparison 8
 * Capability matrix with status chips
 * slug: comparison-8
 * category: Comparison
 * export: Comparison8
 * deps: lucide-react, motion
 * original: ts-tailwind/blocks/comparison/comparison-8.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import { motion, AnimatePresence } from "motion/react";

let o = [.22, 1, .36, 1],
  c = [{
    name: "Signalroom",
    detail: "Unified response platform",
    featured: !0
  }, {
    name: "Legacy suites",
    detail: "Ticketing-era tooling",
    featured: !1
  }, {
    name: "In-house scripts",
    detail: "Maintained by you",
    featured: !1
  }],
  x = [{
    title: "Detection & response",
    rows: [{
      feature: "Incident timeline",
      cells: [{
        status: "yes",
        note: "Auto-built from events"
      }, {
        status: "partial",
        note: "Manual notes"
      }, {
        status: "no"
      }]
    }, {
      feature: "Alert routing",
      cells: [{
        status: "yes",
        note: "Ownership-aware"
      }, {
        status: "partial",
        note: "Static escalation"
      }, {
        status: "partial",
        note: "Per-channel rules"
      }]
    }, {
      feature: "Customer impact",
      cells: [{
        status: "yes",
        note: "Segmented in real time"
      }, {
        status: "no"
      }, {
        status: "no"
      }]
    }, {
      feature: "Status page sync",
      cells: [{
        status: "yes",
        note: "One-click publish"
      }, {
        status: "yes",
        note: "Via add-on"
      }, {
        status: "partial",
        note: "Manual template"
      }]
    }]
  }, {
    title: "Reporting & governance",
    rows: [{
      feature: "Executive summary",
      cells: [{
        status: "yes",
        note: "Generated hourly"
      }, {
        status: "partial",
        note: "Weekly export"
      }, {
        status: "no"
      }]
    }, {
      feature: "Audit evidence",
      cells: [{
        status: "yes",
        note: "Immutable trail"
      }, {
        status: "partial",
        note: "90-day retention"
      }, {
        status: "no"
      }]
    }, {
      feature: "SLA tracking",
      cells: [{
        status: "yes",
        note: "Per-owner clocks"
      }, {
        status: "yes",
        note: "Extra license"
      }, {
        status: "no"
      }]
    }]
  }],
  m = [{
    status: "yes",
    label: "Included"
  }, {
    status: "partial",
    label: "Partial or add-on"
  }, {
    status: "no",
    label: "Not available"
  }],
  u = "grid grid-cols-[minmax(190px,1.5fr)_minmax(180px,1.1fr)_minmax(170px,1fr)_minmax(170px,1fr)]",
  h = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: .05
      }
    }
  },
  p = {
    hidden: {
      opacity: 0
    },
    show: {
      opacity: 1,
      transition: {
        duration: .5,
        ease: o
      }
    }
  };
function b({
  status: e,
  featured: t
}) {
  return "yes" === e ? <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${t ? "bg-neutral-950 text-white dark:bg-white dark:text-neutral-950" : "border border-neutral-300 text-neutral-600 dark:border-neutral-600 dark:text-neutral-300"}`}><Check className="h-3.5 w-3.5" strokeWidth={2.5} /></span> : "partial" === e ? <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-dashed border-neutral-300 text-neutral-500 dark:border-neutral-600 dark:text-neutral-400"><Minus className="h-3.5 w-3.5" /></span> : <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-neutral-500 dark:bg-white/5 dark:text-neutral-400"><X className="h-3.5 w-3.5" /></span>;
}
function g({
  cell: e,
  featured: t
}) {
  return <div className="flex items-center gap-2.5"><b status={e.status} featured={t} />{e.note ? <span className={`text-sm leading-snug ${t ? "font-medium text-neutral-900 dark:text-white" : "text-neutral-500 dark:text-neutral-400"}`}>{e.note}</span> : <span className="sr-only">Not available</span>}</div>;
}
function w() {
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
        ease: o
      }} className="mb-10 grid gap-6 sm:mb-12 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-12"><div><h2 className="mt-4 text-balance text-2xl font-semibold tracking-tight text-neutral-950 sm:text-3xl md:text-4xl lg:text-5xl dark:text-white">Built in, not bolted on</h2><p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-neutral-600 sm:text-lg dark:text-neutral-400">How Signalroom compares with the tooling most teams inherit: legacy suites and scripts held together by heroics.</p></div><ul className="flex flex-wrap items-center gap-x-6 gap-y-3 lg:justify-end">{m.map(e => <li className="flex items-center gap-2"><b status={e.status} /><span className="text-sm text-neutral-600 dark:text-neutral-400">{e.label}</span></li>)}</ul></motion.div><motion.div initial={{
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
        ease: o
      }} className="relative overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-xl shadow-neutral-950/5 dark:border-white/10 dark:bg-neutral-900 dark:shadow-black/40"><div className="overflow-x-auto"><div className="min-w-[760px]"><div className={`${u} border-b border-neutral-200 dark:border-white/10`}><div className="sticky left-0 z-10 flex items-end bg-white px-6 py-5 lg:px-8 dark:bg-neutral-900"><span className="text-xs font-medium uppercase tracking-[0.16em] text-neutral-500 dark:text-neutral-400">Capability</span></div>{c.map(e => <div className={`px-5 py-5 ${e.featured ? "border-x border-neutral-200 bg-neutral-950/[0.03] dark:border-white/10 dark:bg-white/[0.05]" : ""}`}><div className="flex items-center gap-2">{e.featured && <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-neutral-950 text-white dark:bg-white dark:text-neutral-950"><Radar className="h-3.5 w-3.5" /></span>}<span className={`text-sm font-semibold ${e.featured ? "text-neutral-950 dark:text-white" : "text-neutral-500 dark:text-neutral-400"}`}>{e.name}</span></div><p className="mt-1.5 text-xs text-neutral-500 dark:text-neutral-400">{e.detail}</p></div>)}</div>{x.map((e, t) => <motion.div variants={h} initial="hidden" whileInView="show" viewport={{
              once: !0,
              margin: "-80px"
            }}><div className={`${u} border-b border-neutral-200 dark:border-white/10`}><div className="sticky left-0 z-10 bg-white px-6 pb-2.5 pt-6 lg:px-8 dark:bg-neutral-900"><h3 className="text-xs font-medium uppercase tracking-[0.16em] text-neutral-500 dark:text-neutral-400">{e.title}</h3></div><div className="border-x border-neutral-200 bg-neutral-950/[0.03] dark:border-white/10 dark:bg-white/[0.05]" /><div /><div /></div>{e.rows.map((a, l) => <motion.div variants={p} className={`${u} ${t === x.length - 1 && l === e.rows.length - 1 ? "" : "border-b border-neutral-200 dark:border-white/10"}`}><div className="sticky left-0 z-10 flex items-center bg-white px-6 py-4 lg:px-8 dark:bg-neutral-900"><span className="text-sm font-medium text-neutral-900 dark:text-white">{a.feature}</span></div>{a.cells.map((e, t) => <div className={`flex items-center px-5 py-4 ${c[t].featured ? "border-x border-neutral-200 bg-neutral-950/[0.03] dark:border-white/10 dark:bg-white/[0.05]" : ""}`}><g cell={e} featured={c[t].featured} /></div>)}</motion.div>)}</motion.div>)}</div></div><div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-white to-transparent lg:hidden dark:from-neutral-900" /></motion.div><motion.p initial={{
        opacity: 0
      }} whileInView={{
        opacity: 1
      }} viewport={{
        once: !0,
        margin: "-80px"
      }} transition={{
        duration: .6,
        ease: o
      }} className="mt-6 text-xs leading-relaxed text-neutral-500 dark:text-neutral-400">Assessment based on vendor documentation and public pricing, April 2026. <span className="lg:hidden">Swipe sideways to see every column.</span></motion.p></div></section>;
}

export default w;

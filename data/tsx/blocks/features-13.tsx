import { motion, AnimatePresence } from "motion/react";
import { ArrowLeftRight, CalendarRange, ChevronDown, CircleCheck, MoonStar, Scale } from "lucide-react";
import * as __mod_47962 from "../_helpers/47962";
/**
 * Features 13
 * Accordion list with a preview panel
 * slug: features-13
 * category: Features
 * export: Features13
 * deps: lucide-react, motion
 * original: ts-tailwind/blocks/features/features-13.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let h = [{
    id: "rotations",
    icon: CalendarRange,
    title: "Rotations that draft themselves",
    body: "Describe the coverage you need and Cadence writes a fair rotation around time zones, holidays, and everyone's no-page hours.",
    caption: "A week of coverage, drafted in seconds"
  }, {
    id: "balance",
    icon: Scale,
    title: "Load that stays level",
    body: "Pages, reviews, and tickets are weighed together, so the same two people never quietly absorb an entire week.",
    caption: "Effort measured across everything, not just pages"
  }, {
    id: "handoffs",
    icon: ArrowLeftRight,
    title: "Handoffs without the scramble",
    body: "Open incidents, context, and runbooks move to the next engineer automatically the moment a shift flips over.",
    caption: "Every shift change carries its context forward"
  }, {
    id: "quiet",
    icon: MoonStar,
    title: "Quiet hours that actually hold",
    body: "Routine alerts wait until morning while true emergencies still break through, every decision logged and reviewable.",
    caption: "Only what matters breaks through at night"
  }],
  m = [{
    name: "Aya",
    bars: [{
      width: "32%"
    }, {
      width: "20%",
      deep: !0
    }, {
      width: "26%"
    }]
  }, {
    name: "Marco",
    bars: [{
      width: "22%",
      deep: !0
    }, {
      width: "36%",
      live: !0
    }, {
      width: "16%"
    }]
  }, {
    name: "Priya",
    bars: [{
      width: "40%"
    }, {
      width: "16%",
      deep: !0
    }, {
      width: "22%"
    }]
  }, {
    name: "Tom\xe1s",
    bars: [{
      width: "18%",
      deep: !0
    }, {
      width: "30%"
    }, {
      width: "28%",
      deep: !0
    }]
  }],
  p = [{
    label: "Pages",
    value: "32%",
    width: "32%"
  }, {
    label: "Reviews",
    value: "35%",
    width: "35%"
  }, {
    label: "Tickets",
    value: "33%",
    width: "33%"
  }],
  b = [{
    text: "Deploy finished \xb7 staging",
    held: !0
  }, {
    text: "Error budget at 12% burn",
    held: !0
  }, {
    text: "P1, checkout latency spike",
    held: !1
  }],
  g = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: .08,
        delayChildren: .05
      }
    }
  },
  f = {
    hidden: {
      opacity: 0,
      y: 20
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: .6,
        ease: [.22, 1, .36, 1]
      }
    }
  },
  w = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: .06,
        delayChildren: .05
      }
    }
  },
  v = {
    hidden: {
      opacity: 0,
      y: 8
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: .4,
        ease: [.22, 1, .36, 1]
      }
    }
  },
  k = {
    hidden: {
      scaleX: 0
    },
    show: {
      scaleX: 1,
      transition: {
        duration: .6,
        ease: [.22, 1, .36, 1]
      }
    }
  };
function j({
  id: e
}) {
  return <motion.div variants={w} initial="hidden" animate="show" className="w-full max-w-sm rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm dark:border-neutral-800 dark:bg-neutral-950">{"rotations" === e && <div className="space-y-4"><motion.div variants={v} className="flex items-center justify-between"><span className="text-xs font-semibold text-neutral-900 dark:text-white">Next week</span><span className="rounded-full bg-neutral-100 px-2.5 py-1 text-[10px] font-medium text-neutral-600 dark:bg-neutral-900 dark:text-neutral-400">Auto-drafted</span></motion.div><div className="space-y-3">{m.map(e => <motion.div variants={v} className="flex items-center gap-3"><span className="w-12 shrink-0 text-[11px] font-medium text-neutral-500 dark:text-neutral-400">{e.name}</span><div className="flex flex-1 items-center gap-1">{e.bars.map((e, t) => <div style={{
              width: e.width
            }} className={`h-2.5 rounded-full ${e.live ? "bg-emerald-500/80 dark:bg-emerald-400/80" : e.deep ? "bg-neutral-300 dark:bg-neutral-600" : "bg-neutral-200 dark:bg-neutral-800"}`} />)}</div></motion.div>)}</div><motion.div variants={v} className="flex items-center gap-2 border-t border-neutral-100 pt-3 dark:border-neutral-900"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400" /><span className="text-[11px] text-neutral-500 dark:text-neutral-400">Balanced across 3 time zones</span></motion.div></div>}{"balance" === e && <div className="space-y-5"><motion.div variants={v} className="flex items-center justify-between"><span className="text-xs font-semibold text-neutral-900 dark:text-white">This week's load</span><span className="rounded-full bg-neutral-100 px-2.5 py-1 text-[10px] font-medium text-neutral-600 dark:bg-neutral-900 dark:text-neutral-400">Spread ±2%</span></motion.div>{p.map(e => <motion.div variants={v} className="space-y-2"><div className="flex items-center justify-between"><span className="text-[11px] font-medium text-neutral-500 dark:text-neutral-400">{e.label}</span><span className="text-[11px] tabular-nums text-neutral-500 dark:text-neutral-400">{e.value}</span></div><div className="h-2 w-full overflow-hidden rounded-full bg-neutral-100 dark:bg-neutral-900"><motion.div variants={k} style={{
            width: e.width
          }} className="h-full origin-left rounded-full bg-neutral-900 dark:bg-white" /></div></motion.div>)}</div>}{"handoffs" === e && <div className="space-y-6"><motion.div variants={v} className="flex items-center justify-between"><span className="text-xs font-semibold text-neutral-900 dark:text-white">Shift change</span><span className="text-[11px] tabular-nums text-neutral-500 dark:text-neutral-400">09:00 UTC</span></motion.div><motion.div variants={v} className="flex items-center gap-3"><div className="flex flex-col items-center gap-1.5"><span className="flex h-11 w-11 items-center justify-center rounded-full bg-neutral-100 text-xs font-semibold text-neutral-600 dark:bg-neutral-900 dark:text-neutral-300">AK</span><span className="text-[10px] text-neutral-500 dark:text-neutral-400">Off shift</span></div><div className="relative flex-1 self-start pt-[21px]"><div className="border-t border-dashed border-neutral-300 dark:border-neutral-700" /><span className="absolute left-1/2 top-[21px] flex h-7 w-7 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-950"><ArrowLeftRight className="h-3.5 w-3.5 text-neutral-600 dark:text-neutral-300" /></span></div><div className="flex flex-col items-center gap-1.5"><span className="flex h-11 w-11 items-center justify-center rounded-full bg-neutral-900 text-xs font-semibold text-white ring-2 ring-emerald-500/50 dark:bg-white dark:text-neutral-900 dark:ring-emerald-400/50">MR</span><span className="text-[10px] text-neutral-500 dark:text-neutral-400">On call</span></div></motion.div><motion.div variants={v} className="flex items-center gap-2.5 rounded-xl border border-neutral-100 bg-neutral-50 px-3.5 py-3 dark:border-neutral-900 dark:bg-neutral-900/60"><CircleCheck className="h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400" /><span className="text-[11px] text-neutral-600 dark:text-neutral-300">Context transferred: 3 incidents, 12 runbooks</span></motion.div></div>}{"quiet" === e && <div className="space-y-4"><motion.div variants={v} className="flex items-center justify-between"><span className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-900 dark:text-white"><MoonStar className="h-3.5 w-3.5" />Quiet hours</span><span className="rounded-full bg-neutral-100 px-2.5 py-1 text-[10px] font-medium text-neutral-600 dark:bg-neutral-900 dark:text-neutral-400">22:00 – 07:00</span></motion.div><div className="space-y-2">{b.map(e => <motion.div variants={v}><div className={`flex items-center gap-2.5 rounded-xl border px-3.5 py-2.5 ${e.held ? "border-neutral-100 opacity-60 dark:border-neutral-900" : "border-neutral-200 dark:border-neutral-800"}`}><span className={`h-1.5 w-1.5 shrink-0 rounded-full ${e.held ? "bg-neutral-300 dark:bg-neutral-600" : "bg-red-500 dark:bg-red-400"}`} /><span className="flex-1 text-[11px] text-neutral-600 dark:text-neutral-300">{e.text}</span><span className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${e.held ? "bg-neutral-100 text-neutral-500 dark:bg-neutral-900 dark:text-neutral-400" : "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900"}`}>{e.held ? "Held" : "Paged"}</span></div></motion.div>)}</div><motion.div variants={v} className="flex items-center gap-2 border-t border-neutral-100 pt-3 dark:border-neutral-900"><span className="h-1.5 w-1.5 rounded-full bg-neutral-300 dark:bg-neutral-600" /><span className="text-[11px] text-neutral-500 dark:text-neutral-400">2 routine alerts held until morning</span></motion.div></div>}</motion.div>;
}
function Features13() {
  let [e, t] = (0, React.useState)("rotations"),
    a = h.find(t => t.id === e) ?? h[0];
  return <section className="w-full bg-white px-4 py-16 dark:bg-neutral-950 sm:px-6 sm:py-20 lg:px-8 lg:py-24"><div className="mx-auto w-full max-w-[1400px]"><motion.div variants={g} initial="hidden" whileInView="show" viewport={{
        once: !0,
        margin: "-80px"
      }} className="max-w-2xl"><motion.h2 variants={f} className="mt-5 text-3xl font-semibold leading-[1.1] tracking-tight text-neutral-900 dark:text-white sm:text-4xl md:text-5xl">Every shift, already sorted</motion.h2><motion.p variants={f} className="mt-5 max-w-xl text-base leading-relaxed text-neutral-600 dark:text-neutral-400 sm:text-lg">Cadence drafts fair rotations, balances the real workload, and keeps nights quiet, so coverage stops being a weekly negotiation.</motion.p></motion.div><motion.div variants={g} initial="hidden" whileInView="show" viewport={{
        once: !0,
        margin: "-80px"
      }} className="mt-12 grid grid-cols-1 items-start gap-10 sm:mt-16 lg:grid-cols-[1fr_1.05fr] lg:gap-16"><motion.div variants={g} className="divide-y divide-neutral-200 border-y border-neutral-200 dark:divide-neutral-800 dark:border-neutral-800">{h.map((a, s) => {
            let i = a.id === e;
            return <motion.div variants={f}><h3><button type="button" id={`cadence-trigger-${a.id}`} aria-expanded={i} aria-controls={`cadence-panel-${a.id}`} onClick={() => t(a.id)} className="group flex w-full cursor-pointer items-baseline gap-4 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2 dark:focus-visible:ring-white dark:focus-visible:ring-offset-neutral-950 sm:py-6"><span className="w-7 shrink-0 text-xs font-medium tabular-nums text-neutral-400 dark:text-neutral-600">0{s + 1}</span><span className={`flex-1 text-lg font-medium tracking-tight transition-colors duration-200 sm:text-xl ${i ? "text-neutral-900 dark:text-white" : "text-neutral-500 group-hover:text-neutral-900 dark:text-neutral-400 dark:group-hover:text-white"}`}>{a.title}</span><motion.span animate={{
                    rotate: 180 * !!i
                  }} transition={{
                    duration: .3,
                    ease: [.22, 1, .36, 1]
                  }} className={`self-center transition-colors duration-200 ${i ? "text-neutral-900 dark:text-white" : "text-neutral-400 dark:text-neutral-600"}`}><ChevronDown className="h-4 w-4" /></motion.span></button></h3><__mod_47962.N initial={!1}>{i && <motion.div id={`cadence-panel-${a.id}`} role="region" aria-labelledby={`cadence-trigger-${a.id}`} initial={{
                  height: 0,
                  opacity: 0
                }} animate={{
                  height: "auto",
                  opacity: 1
                }} exit={{
                  height: 0,
                  opacity: 0
                }} transition={{
                  duration: .45,
                  ease: [.22, 1, .36, 1]
                }} className="overflow-hidden"><div className="pb-6 sm:pb-7"><p className="max-w-md pl-11 pr-8 text-base leading-relaxed text-neutral-600 dark:text-neutral-400">{a.body}</p><div className="mt-6 flex justify-center rounded-2xl border border-neutral-200 bg-neutral-50 p-4 dark:border-neutral-800 dark:bg-neutral-900 lg:hidden"><j id={a.id} /></div></div></motion.div>}</__mod_47962.N></motion.div>;
          })}</motion.div><motion.div variants={f} className="hidden min-h-[480px] flex-col items-center justify-center rounded-3xl border border-neutral-200 bg-neutral-50 p-8 dark:border-neutral-800 dark:bg-neutral-900 lg:flex"><__mod_47962.N mode="wait"><motion.div initial={{
              opacity: 0,
              y: 14
            }} animate={{
              opacity: 1,
              y: 0
            }} exit={{
              opacity: 0,
              y: -10
            }} transition={{
              duration: .35,
              ease: [.22, 1, .36, 1]
            }} className="flex w-full flex-col items-center"><j id={a.id} /><p className="mt-6 text-sm text-neutral-500 dark:text-neutral-400">{a.caption}</p></motion.div></__mod_47962.N></motion.div></motion.div></div></section>;
}

export default Features13;

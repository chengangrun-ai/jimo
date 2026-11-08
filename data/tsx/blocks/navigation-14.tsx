import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, BookOpen, ChartColumn, ChevronDown, Compass, FileText, LayoutDashboard, Menu, Radar, ScrollText, TrendingUp, Workflow, X } from "lucide-react";
import * as __mod_47962 from "../_helpers/47962";
/**
 * Navigation 14
 * Mega panel nav with a featured card
 * slug: navigation-14
 * category: Navigation
 * export: Navigation14
 * deps: lucide-react, motion
 * original: ts-tailwind/blocks/navigation/navigation-14.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let v = [.22, 1, .36, 1],
  w = {
    Product: {
      items: [{
        icon: LayoutDashboard,
        title: "Command center",
        description: "One operating view for every launch, owner, and deadline."
      }, {
        icon: ScrollText,
        title: "Decision logs",
        description: "Turn scattered updates into a searchable product memory."
      }, {
        icon: Radar,
        title: "Signal review",
        description: "Rank feedback by source, volume, and revenue at stake."
      }],
      featured: {
        tag: "New",
        title: "Vault Signals is GA",
        description: "Cluster feedback from 40+ sources into themes your roadmap can act on."
      }
    },
    Solutions: {
      items: [{
        icon: TrendingUp,
        title: "For growth teams",
        description: "Catch conversion blockers before they cost you a quarter."
      }, {
        icon: Workflow,
        title: "For operations",
        description: "Keep approvals, owners, and risk visible across workstreams."
      }, {
        icon: Compass,
        title: "For founders",
        description: "Bring customer evidence into every roadmap and revenue call."
      }],
      featured: {
        tag: "Case study",
        title: "How Relay cut churn 18%",
        description: "Six months of Vault reviews distilled into one retention play."
      }
    },
    Resources: {
      items: [{
        icon: BookOpen,
        title: "Field notes",
        description: "Practical breakdowns from teams shipping complex products."
      }, {
        icon: FileText,
        title: "Playbooks",
        description: "Templates for launches, research reviews, and postmortems."
      }, {
        icon: ChartColumn,
        title: "Benchmarks",
        description: "How 400 teams structure customer intelligence at scale."
      }],
      featured: {
        tag: "Guide",
        title: "The customer evidence stack",
        description: "A field guide to instrumenting decisions, not just dashboards."
      }
    }
  },
  j = Object.keys(w),
  N = {
    rest: {
      opacity: 0,
      x: -4
    },
    hover: {
      opacity: 1,
      x: 0
    }
  },
  y = "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-white dark:focus-visible:ring-offset-neutral-950";
function A() {
  let [e, t] = (0, React.useState)(null),
    [r, l] = (0, React.useState)(!1),
    [o, d] = (0, React.useState)("Product");
  return (0, React.useEffect)(() => {
    if (!e && !r) return;
    let a = e => {
      "Escape" === e.key && (t(null), l(!1));
    };
    return window.addEventListener("keydown", a), () => window.removeEventListener("keydown", a);
  }, [e, r]), <header className="w-full min-h-[var(--rb-section-min-h,100vh)] bg-white dark:bg-neutral-950 px-4 sm:px-6 lg:px-8"><div className="w-full"><div onMouseLeave={() => t(null)}><motion.nav initial={{
          opacity: 0,
          y: -10
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: .6,
          ease: v
        }} className="border-b border-neutral-200 dark:border-neutral-800" aria-label="Primary"><div className="mx-auto flex h-[72px] w-full max-w-[1400px] items-center justify-between gap-4"><div className="flex items-center gap-8"><a href="#" className={`flex items-center gap-2.5 rounded-sm text-neutral-950 dark:text-white ${y}`}><span className="flex h-7 w-7 items-center justify-center rounded-lg bg-neutral-950 dark:bg-white"><span className="h-2.5 w-2.5 rounded-[3px] border-[1.5px] border-white dark:border-neutral-950" /></span><span className="text-[15px] font-semibold tracking-tight">Vault</span></a><div className="hidden items-center gap-1 md:flex">{j.map(r => <button type="button" onMouseEnter={() => t(r)} onFocus={() => t(r)} onClick={() => t(e => e === r ? null : r)} aria-expanded={e === r} aria-controls="nav14-panel" className={`relative flex cursor-pointer items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium transition-colors duration-200 ${y} ${e === r ? "text-neutral-950 dark:text-white" : "text-neutral-500 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white"}`}>{e === r && <motion.span layoutId="nav14-trigger" className="absolute inset-0 rounded-full bg-neutral-100 dark:bg-neutral-800/80" transition={{
                    duration: .3,
                    ease: v
                  }} />}<span className="relative">{r}</span><motion.span className="relative" animate={{
                    rotate: 180 * (e === r)
                  }} transition={{
                    duration: .25,
                    ease: v
                  }}><ChevronDown className="h-3.5 w-3.5" /></motion.span></button>)}<a href="#" onMouseEnter={() => t(null)} className={`rounded-full px-3.5 py-2 text-sm font-medium text-neutral-500 transition-colors duration-200 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white ${y}`}>Pricing</a></div></div><div className="hidden items-center gap-2 md:flex"><a href="#" className={`rounded-full px-4 py-2 text-sm font-medium text-neutral-600 transition-colors duration-200 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white ${y}`}>Log in</a><a href="#" className={`rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white transition-colors duration-200 hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200 ${y}`}>Request access</a></div><button type="button" onClick={() => l(e => !e)} aria-expanded={r} aria-controls="nav14-mobile" aria-label={r ? "Close menu" : "Open menu"} className={`flex h-11 w-11 cursor-pointer items-center justify-center rounded-full text-neutral-950 transition-colors duration-200 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-900 md:hidden ${y}`}>{r ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}</button></div></motion.nav><__mod_47962.N>{e && <motion.div id="nav14-panel" initial={{
            height: 0,
            opacity: 0
          }} animate={{
            height: "auto",
            opacity: 1
          }} exit={{
            height: 0,
            opacity: 0
          }} transition={{
            duration: .35,
            ease: v
          }} className="hidden overflow-hidden border-b border-neutral-200 dark:border-neutral-800 md:block"><__mod_47962.N mode="wait" initial={!1}><motion.div initial={{
                opacity: 0,
                y: 6
              }} animate={{
                opacity: 1,
                y: 0
              }} exit={{
                opacity: 0,
                y: -4
              }} transition={{
                duration: .2,
                ease: v
              }} className="mx-auto grid w-full max-w-[1400px] gap-8 px-4 py-8 sm:px-6 lg:grid-cols-[1fr_320px] lg:px-8"><div className="grid gap-1 sm:grid-cols-3">{w[e].items.map(e => <motion.a href="#" initial="rest" animate="rest" whileHover="hover" className={`group flex h-full flex-col rounded-2xl p-4 transition-colors duration-200 hover:bg-neutral-50 dark:hover:bg-neutral-900 ${y}`}><span className="flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-200 text-neutral-700 transition-colors duration-200 group-hover:border-neutral-300 group-hover:text-neutral-950 dark:border-neutral-800 dark:text-neutral-300 dark:group-hover:border-neutral-700 dark:group-hover:text-white"><e.icon className="h-4 w-4" /></span><span className="mt-4 flex items-center gap-1.5 text-sm font-medium text-neutral-950 dark:text-white">{e.title}<motion.span variants={N} transition={{
                        duration: .2,
                        ease: v
                      }}><ArrowRight className="h-3.5 w-3.5" /></motion.span></span><span className="mt-1.5 block text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">{e.description}</span></motion.a>)}</div><a href="#" className={`group flex flex-col justify-between rounded-2xl bg-neutral-50 p-5 transition-colors duration-200 hover:bg-neutral-100 dark:bg-neutral-900 dark:hover:bg-neutral-800/80 ${y}`}><span className="inline-flex w-fit items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-[0.12em] text-neutral-600 dark:border-neutral-700 dark:text-neutral-400">{w[e].featured.tag}</span><span className="mt-6"><span className="block text-sm font-semibold text-neutral-950 dark:text-white">{w[e].featured.title}</span><span className="mt-1.5 block text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">{w[e].featured.description}</span><span className="mt-4 flex items-center gap-1.5 text-sm font-medium text-neutral-950 dark:text-white">Learn more<ArrowRight className="h-3.5 w-3.5" /></span></span></a></motion.div></__mod_47962.N></motion.div>}</__mod_47962.N></div><__mod_47962.N>{r && <motion.div id="nav14-mobile" initial={{
          height: 0,
          opacity: 0
        }} animate={{
          height: "auto",
          opacity: 1
        }} exit={{
          height: 0,
          opacity: 0
        }} transition={{
          duration: .4,
          ease: v
        }} className="overflow-hidden md:hidden"><div className="border-b border-neutral-200 dark:border-neutral-800"><div className="mx-auto w-full max-w-[1400px] px-4 py-4 sm:px-6 lg:px-8">{j.map(e => <div><button type="button" onClick={() => d(t => t === e ? null : e)} aria-expanded={o === e} className={`flex w-full cursor-pointer items-center justify-between rounded-xl px-3 py-3.5 text-left text-[15px] font-medium text-neutral-950 transition-colors duration-200 hover:bg-neutral-50 dark:text-white dark:hover:bg-neutral-900 ${y}`}>{e}<motion.span animate={{
                    rotate: 180 * (o === e)
                  }} transition={{
                    duration: .25,
                    ease: v
                  }}><ChevronDown className="h-4 w-4 text-neutral-500" /></motion.span></button><__mod_47962.N initial={!1}>{o === e && <motion.div initial={{
                    height: 0,
                    opacity: 0
                  }} animate={{
                    height: "auto",
                    opacity: 1
                  }} exit={{
                    height: 0,
                    opacity: 0
                  }} transition={{
                    duration: .3,
                    ease: v
                  }} className="overflow-hidden"><div className="grid gap-1 px-3 pb-3">{w[e].items.map(e => <a href="#" onClick={() => l(!1)} className={`flex items-start gap-3 rounded-xl p-3 transition-colors duration-200 hover:bg-neutral-50 dark:hover:bg-neutral-900 ${y}`}><span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-neutral-200 text-neutral-700 dark:border-neutral-800 dark:text-neutral-300"><e.icon className="h-4 w-4" /></span><span><span className="block text-sm font-medium text-neutral-950 dark:text-white">{e.title}</span><span className="mt-0.5 block text-[13px] leading-relaxed text-neutral-600 dark:text-neutral-400">{e.description}</span></span></a>)}</div></motion.div>}</__mod_47962.N></div>)}<a href="#" onClick={() => l(!1)} className={`mt-2 flex w-full items-center justify-between rounded-xl px-3 py-3.5 text-[15px] font-medium text-neutral-950 transition-colors duration-200 hover:bg-neutral-50 dark:text-white dark:hover:bg-neutral-900 ${y}`}>Pricing</a><div className="mt-3 grid gap-2 px-3"><a href="#" className={`rounded-full border border-neutral-300 px-5 py-3 text-center text-sm font-medium text-neutral-900 transition-colors duration-200 hover:bg-neutral-50 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-900 ${y}`}>Log in</a><a href="#" className={`rounded-full bg-black px-5 py-3 text-center text-sm font-medium text-white transition-colors duration-200 hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200 ${y}`}>Request access</a></div></div></div></motion.div>}</__mod_47962.N></div></header>;
}

export default A;

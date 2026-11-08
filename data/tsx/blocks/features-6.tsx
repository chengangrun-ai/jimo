import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Box, Circle, Orbit, Workflow } from "lucide-react";
/**
 * Features 6
 * Four cards with gradient blobs on hover
 * slug: features-6
 * category: Features
 * export: Features6
 * deps: lucide-react, motion
 * original: ts-tailwind/blocks/features/features-6.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let h = [{
    title: "Client Retainers",
    desc: "Lock in recurring revenue, streamline onboarding, and let us handle invoicing while you focus on the work.",
    blob: "rgba(168,139,250,0.85)",
    arrow: "group-hover:bg-violet-400"
  }, {
    title: "Project Sprints",
    desc: "Scope tight, ship fast. Run fixed-fee engagements with milestones, approvals, and timelines all in one place.",
    blob: "rgba(56,189,248,0.85)",
    arrow: "group-hover:bg-sky-400"
  }, {
    title: "Collaborator Pods",
    desc: "Assemble freelance crews in days, pay them on time, and keep every contract, NDA, and deliverable organized.",
    blob: "rgba(251,191,36,0.85)",
    arrow: "group-hover:bg-amber-400"
  }, {
    title: "One-Off Gigs",
    desc: "Say yes to the walk-in job without the paperwork. Send a quote, collect payment, and close the loop in minutes.",
    blob: "rgba(52,211,153,0.85)",
    arrow: "group-hover:bg-emerald-400"
  }],
  m = [Box, Orbit, Workflow, Circle];
function x() {
  return <section className="w-full min-h-[var(--rb-section-min-h,100vh)] flex items-start py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-neutral-950"><div className="max-w-[1400px] mx-auto w-full"><motion.h2 initial={{
        opacity: 0,
        y: 14
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: !0
      }} transition={{
        duration: .3
      }} className="text-3xl sm:text-4xl md:text-5xl font-medium text-neutral-900 dark:text-white tracking-tight leading-[1.15] max-w-3xl">Back-office built for every<br className="hidden sm:block" /> way your studio takes on work</motion.h2><div className="mt-10 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">{h.map((e, t) => <u vehicle={e} index={t} Icon={m[t]} />)}</div></div></section>;
}
function u({
  vehicle: e,
  index: t,
  Icon: a
}) {
  let [n, s] = (0, React.useState)(!1),
    o = e.desc.split(" ");
  return <motion.div initial={{
    opacity: 0,
    y: 20
  }} whileInView={{
    opacity: 1,
    y: 0
  }} viewport={{
    once: !0
  }} transition={{
    duration: .3,
    delay: .05 * t
  }} onMouseEnter={() => s(!0)} onMouseLeave={() => s(!1)} className="relative rounded-2xl bg-neutral-100 dark:bg-neutral-900 p-6 min-h-[360px] flex flex-col overflow-hidden"><motion.div initial={!1} animate={{
      opacity: .7 * !!n,
      scale: n ? 1 : .75
    }} transition={{
      duration: .3,
      ease: "easeOut"
    }} className="absolute left-1/2 -bottom-24 w-64 h-64 rounded-full pointer-events-none blur-md" style={{
      background: `radial-gradient(circle, ${e.blob} 0%, rgba(255,255,255,0) 70%)`,
      x: "-50%"
    }} /><a className="relative w-5 h-5 text-neutral-900 dark:text-neutral-200" /><p className="relative mt-3 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-[220px]">{o.map((e, t) => <motion.span initial={!1} animate={{
        opacity: +!!n,
        y: 4 * !n,
        filter: n ? "blur(0px)" : "blur(3px)"
      }} transition={{
        duration: .3,
        delay: n ? .03 * t : 0,
        ease: [.22, 1, .36, 1]
      }} className="inline-block mr-[0.25em]">{e}</motion.span>)}</p><div className="relative mt-auto flex items-center justify-between pt-8"><span className="text-base sm:text-lg text-neutral-900 dark:text-white">{e.title}</span><motion.span initial={!1} animate={{
        backgroundColor: n ? e.blob : "rgb(229 229 229)",
        color: n ? "#ffffff" : "rgb(64 64 64)"
      }} transition={{
        duration: .3
      }} className="w-10 h-10 rounded-full flex items-center justify-center dark:bg-neutral-800 dark:text-neutral-300"><motion.span animate={{
          x: 2 * !!n
        }} transition={{
          duration: .3
        }} className="inline-flex"><ArrowRight className="w-4 h-4" /></motion.span></motion.span></div></motion.div>;
}

export default x;

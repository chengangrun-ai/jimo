import { motion, AnimatePresence } from "motion/react";
import * as __mod_50969 from "../_helpers/50969";
import * as __mod_87974 from "../_helpers/87974";
/**
 * Stats 15
 * Coverage dial with an automation ledger
 * slug: stats-15
 * category: Stats
 * export: Stats15
 * deps: motion
 * original: ts-tailwind/blocks/stats/stats-15.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let d = [.22, 1, .36, 1],
  x = [{
    label: "Access reviews",
    sub: "Quarterly SOC 2 evidence, collected automatically",
    value: 94
  }, {
    label: "Vendor onboarding",
    sub: "Risk scoring, DPAs, and security questionnaires",
    value: 78
  }, {
    label: "Policy attestations",
    sub: "Company-wide sign-off with automatic reminders",
    value: 63
  }],
  c = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: .1
      }
    }
  },
  u = {
    hidden: {
      opacity: 0,
      y: 16
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: .6,
        ease: d
      }
    }
  };
function o({
  value: e
}) {
  let t = (0, React.useRef)(null),
    a = (0, __mod_50969.I)();
  return (0, React.useEffect)(() => {
    let s = t.current;
    if (!s) return;
    if (a) {
      s.textContent = String(e);
      return;
    }
    let r = (0, __mod_87974.i)(0, e, {
      duration: 1.2,
      ease: d,
      onUpdate: e => {
        s.textContent = String(Math.round(e));
      }
    });
    return () => r.stop();
  }, [e, a]), <span ref={t}>0</span>;
}
function m({
  value: e,
  strokeWidth: t,
  progressClass: a,
  className: r,
  track: n = !0,
  delay: x = 0
}) {
  let c = (0, __mod_50969.I)(),
    u = 50 - t / 2 - 2,
    o = 2 * Math.PI * u,
    m = o * (1 - e / 100);
  return <svg viewBox="0 0 100 100" className={`-rotate-90 ${r ?? ""}`} aria-hidden="true">{n && <circle cx="50" cy="50" r={u} fill="none" stroke="currentColor" strokeWidth={t} className="text-neutral-200 dark:text-neutral-800" />}<motion.circle cx="50" cy="50" r={u} fill="none" stroke="currentColor" strokeWidth={t} strokeLinecap="round" strokeDasharray={o} initial={{
      strokeDashoffset: c ? m : o
    }} whileInView={{
      strokeDashoffset: m
    }} viewport={{
      once: !0,
      margin: "-80px"
    }} transition={{
      duration: 1.2,
      ease: d,
      delay: x
    }} className={a} /></svg>;
}
function h() {
  return <section className="w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-neutral-950"><div className="max-w-[1400px] mx-auto w-full"><div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"><div><motion.div initial={{
            opacity: 0,
            y: 24
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: !0,
            margin: "-80px"
          }} transition={{
            duration: .7,
            ease: d
          }}><h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-tight text-neutral-900 dark:text-white">The busywork now runs itself.</h2><p className="mt-5 max-w-xl text-base sm:text-lg leading-relaxed text-neutral-600 dark:text-neutral-400">Sable agents pick up the recurring controls work: reviews, onboarding, attestations, and leave an audit trail your team can replay.</p></motion.div><motion.ul variants={c} initial="hidden" whileInView="visible" viewport={{
            once: !0,
            margin: "-80px"
          }} className="mt-10 border-y border-neutral-200 dark:border-neutral-800 divide-y divide-neutral-200 dark:divide-neutral-800">{x.map(e => <motion.li variants={u} className="flex items-center gap-5 py-6"><div className="h-12 w-12 shrink-0"><m value={e.value} strokeWidth={9} className="h-full w-full" progressClass="text-neutral-900 dark:text-white" /></div><div className="min-w-0 flex-1"><h3 className="text-base font-semibold text-neutral-900 dark:text-white">{e.label}</h3><p className="mt-0.5 text-sm text-neutral-500 dark:text-neutral-400">{e.sub}</p></div><div className="shrink-0 text-2xl sm:text-3xl font-semibold tracking-tight tabular-nums text-neutral-900 dark:text-white"><o value={e.value} /><span className="ml-0.5 text-base font-medium text-neutral-400 dark:text-neutral-500">%</span></div></motion.li>)}</motion.ul></div><motion.div initial={{
          opacity: 0,
          y: 24
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: !0,
          margin: "-80px"
        }} transition={{
          duration: .7,
          ease: d
        }}><div className="relative mx-auto w-full max-w-[20rem] sm:max-w-[24rem]"><m value={82} strokeWidth={5} className="h-auto w-full" progressClass="text-neutral-900 dark:text-white" /><m value={54} strokeWidth={2.5} track={!1} delay={.2} className="absolute left-1/2 top-1/2 w-[76%] -translate-x-1/2 -translate-y-1/2" progressClass="text-neutral-400 dark:text-neutral-600" /><div className="absolute inset-0 flex flex-col items-center justify-center"><div className="text-6xl sm:text-7xl font-semibold tracking-tight tabular-nums text-neutral-900 dark:text-white"><o value={82} /><span className="text-3xl sm:text-4xl font-medium text-neutral-400 dark:text-neutral-500">%</span></div><p className="mt-2 max-w-[11rem] text-center text-sm text-neutral-500 dark:text-neutral-400">of routine controls run unattended</p></div></div><div className="mt-8 flex items-center justify-center gap-8"><div className="flex items-center gap-2.5"><span className="h-2 w-2 rounded-full bg-neutral-900 dark:bg-white" /><span className="text-sm font-medium tabular-nums text-neutral-600 dark:text-neutral-400">2025 · 82%</span></div><div className="flex items-center gap-2.5"><span className="h-2 w-2 rounded-full bg-neutral-400 dark:bg-neutral-600" /><span className="text-sm font-medium tabular-nums text-neutral-600 dark:text-neutral-400">2024 · 54%</span></div></div><p className="mt-3 text-center text-xs text-neutral-500 dark:text-neutral-500">Measured across 1,842 active workspaces</p></motion.div></div></div></section>;
}

export default h;

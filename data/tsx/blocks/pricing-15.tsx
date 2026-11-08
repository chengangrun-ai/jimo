import { Check, Minus } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import * as __mod_50969 from "../_helpers/50969";
import * as __mod_47962 from "../_helpers/47962";
/**
 * Pricing 15
 * Comparison table with a featured tier
 * slug: pricing-15
 * category: Pricing
 * export: Pricing15
 * deps: lucide-react, motion
 * original: ts-tailwind/blocks/pricing/pricing-15.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let o = [.22, 1, .36, 1],
  c = [{
    name: "Core",
    monthly: 15,
    yearly: 12,
    description: "Track spend across a single entity",
    cta: "Start with Core",
    featured: !1
  }, {
    name: "Plus",
    monthly: 39,
    yearly: 31,
    description: "Approvals and controls for teams",
    cta: "Start with Plus",
    featured: !0
  }, {
    name: "Prime",
    monthly: 79,
    yearly: 63,
    description: "Governance for multi-entity orgs",
    cta: "Talk to sales",
    featured: !1
  }],
  x = [{
    title: "Workspace",
    rows: [{
      label: "Members",
      values: ["3", "25", "Unlimited"]
    }, {
      label: "Virtual cards",
      values: ["5", "Unlimited", "Unlimited"]
    }, {
      label: "Receipt history",
      values: ["30 days", "1 year", "Unlimited"]
    }, {
      label: "Guest access",
      values: [!1, !0, !0]
    }]
  }, {
    title: "Controls",
    rows: [{
      label: "Approval flows",
      values: [!1, !0, !0]
    }, {
      label: "SAML SSO",
      values: [!1, !1, !0]
    }, {
      label: "Audit log export",
      values: [!1, !1, !0]
    }, {
      label: "Support",
      values: ["Email", "Business hours", "24/7 + CSM"]
    }]
  }],
  m = "grid grid-cols-[1.3fr_1fr_1fr_1fr]",
  p = "bg-neutral-50 dark:bg-neutral-900";
function h({
  value: e
}) {
  return !0 === e ? <span className="grid h-5 w-5 place-items-center rounded-full bg-neutral-900 dark:bg-white"><Check className="h-3 w-3 text-white dark:text-neutral-900" aria-hidden="true" /><span className="sr-only">Included</span></span> : !1 === e ? <span><Minus className="h-4 w-4 text-neutral-300 dark:text-neutral-700" aria-hidden="true" /><span className="sr-only">Not included</span></span> : <span className="text-sm text-neutral-700 dark:text-neutral-300">{e}</span>;
}
function b() {
  let [e, t] = (0, React.useState)(!0),
    [a, l] = (0, React.useState)(1),
    i = (0, __mod_50969.I)(),
    b = c[a],
    f = 14 * !i,
    g = {
      hidden: {
        opacity: 0,
        y: 18 * !i
      },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: .6,
          ease: o
        }
      }
    },
    v = "w-full cursor-pointer rounded-full bg-black dark:bg-white px-6 py-3 text-sm font-medium text-white dark:text-black transition-colors duration-200 hover:bg-neutral-800 dark:hover:bg-neutral-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 dark:focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-neutral-950",
    k = "w-full cursor-pointer rounded-full border border-neutral-300 dark:border-neutral-700 px-6 py-3 text-sm font-medium text-neutral-900 dark:text-neutral-100 transition-colors duration-200 hover:bg-neutral-50 dark:hover:bg-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 dark:focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-neutral-950",
    j = t => <div className="flex items-baseline gap-1"><span className="text-lg font-medium text-neutral-500 dark:text-neutral-400">$</span><span className="relative inline-grid overflow-hidden"><span aria-hidden="true" className="invisible col-start-1 row-start-1 text-4xl font-semibold tracking-tight tabular-nums">{e ? t.yearly : t.monthly}</span><__mod_47962.N mode="popLayout" initial={!1}><motion.span initial={{
            opacity: 0,
            y: f
          }} animate={{
            opacity: 1,
            y: 0
          }} exit={{
            opacity: 0,
            y: -f
          }} transition={{
            duration: .25 * !i,
            ease: o
          }} className="col-start-1 row-start-1 text-4xl font-semibold tracking-tight tabular-nums text-neutral-900 dark:text-white">{e ? t.yearly : t.monthly}</motion.span></__mod_47962.N></span><span className="text-sm text-neutral-500 dark:text-neutral-400">/mo</span></div>;
  return <section className="w-full bg-white dark:bg-neutral-950 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8"><motion.div initial="hidden" whileInView="visible" viewport={{
      once: !0,
      margin: "-80px"
    }} variants={{
      hidden: {},
      visible: {
        transition: {
          staggerChildren: .09
        }
      }
    }} className="max-w-[1400px] mx-auto w-full"><motion.div variants={g} className="mx-auto max-w-2xl text-center"><p className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400">Compare plans</p><h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight text-neutral-900 dark:text-white">Spend management that scales with you.</h2><p className="mt-4 text-base sm:text-lg leading-relaxed text-neutral-600 dark:text-neutral-400">Start on Core, move up when approvals and governance start to matter. Every price is per seat, per month: yearly billing saves 20%.</p></motion.div><motion.div variants={g} className="mt-10 flex flex-wrap items-center justify-center gap-3"><span className={`text-sm font-medium transition-colors duration-200 ${e ? "text-neutral-500 dark:text-neutral-400" : "text-neutral-900 dark:text-white"}`}>Monthly</span><button type="button" role="switch" aria-checked={e} aria-label="Bill yearly" onClick={() => t(e => !e)} className={`relative h-7 w-12 cursor-pointer rounded-full transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 dark:focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-neutral-950 ${e ? "bg-neutral-900 dark:bg-white" : "bg-neutral-300 dark:bg-neutral-700"}`}><motion.span initial={!1} animate={{
            x: 20 * !!e
          }} transition={{
            duration: .25 * !i,
            ease: o
          }} className="absolute left-1 top-1 h-5 w-5 rounded-full bg-white dark:bg-neutral-950 shadow-sm" /></button><span className={`text-sm font-medium transition-colors duration-200 ${e ? "text-neutral-900 dark:text-white" : "text-neutral-500 dark:text-neutral-400"}`}>Yearly</span><span className="rounded-full bg-neutral-100 dark:bg-neutral-800 px-2.5 py-1 text-xs font-medium text-neutral-700 dark:text-neutral-300">Save 20%</span></motion.div><motion.div variants={g} className="mt-12"><div className="hidden lg:block mx-auto max-w-5xl"><div className={m}><div className="flex items-end px-6 pb-8"><p className="text-sm text-neutral-500 dark:text-neutral-400">Per seat, per month</p></div>{c.map(e => <div className={`px-6 pt-6 pb-8 ${e.featured ? `rounded-t-2xl ${p}` : ""}`}><div className="h-6">{e.featured && <span className="inline-flex rounded-full bg-neutral-900 dark:bg-white px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider leading-none text-white dark:text-neutral-900">Most popular</span>}</div><p className="mt-3 text-lg font-semibold tracking-tight text-neutral-900 dark:text-white">{e.name}</p><p className="mt-1 min-h-10 text-sm leading-snug text-neutral-600 dark:text-neutral-400">{e.description}</p><div className="mt-5">{j(e)}</div><div className="mt-6"><button className={e.featured ? v : k}>{e.cta}</button></div></div>)}</div>{x.map(e => <div><div className={m}><div className="px-6 pt-10 pb-3"><p className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400">{e.title}</p></div>{c.map(e => <div className={e.featured ? p : ""} />)}</div>{e.rows.map(e => <div className={`${m} border-t border-neutral-200 dark:border-neutral-800`}><div className="px-6 py-4 text-sm text-neutral-600 dark:text-neutral-400">{e.label}</div>{e.values.map((e, t) => <div className={`flex items-center px-6 py-4 ${c[t].featured ? p : ""}`}><h value={e} /></div>)}</div>)}</div>)}<div className={`${m} border-t border-neutral-200 dark:border-neutral-800`}><div />{c.map(e => <div className={`h-6 ${e.featured ? `rounded-b-2xl ${p}` : ""}`} />)}</div></div><div className="lg:hidden mx-auto max-w-lg"><div role="group" aria-label="Select a plan to compare" className="grid grid-cols-3 rounded-full border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 p-1">{c.map((e, t) => <button type="button" aria-pressed={a === t} onClick={() => l(t)} className={`relative cursor-pointer rounded-full px-3 py-2 text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 dark:focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-100 dark:focus-visible:ring-offset-neutral-900 ${a === t ? "text-white dark:text-neutral-900" : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"}`}>{a === t && <motion.span layoutId="pricing15-tab" transition={{
                duration: .3 * !i,
                ease: o
              }} className="absolute inset-0 rounded-full bg-neutral-900 dark:bg-white" />}<span className="relative z-10">{e.name}</span></button>)}</div><div className="mt-6 rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6"><__mod_47962.N mode="wait" initial={!1}><motion.div initial={{
                opacity: 0,
                y: 10 * !i
              }} animate={{
                opacity: 1,
                y: 0
              }} exit={{
                opacity: 0,
                y: i ? 0 : -10
              }} transition={{
                duration: .25 * !i,
                ease: o
              }}><div className="flex items-center justify-between gap-3"><p className="text-lg font-semibold tracking-tight text-neutral-900 dark:text-white">{b.name}</p>{b.featured && <span className="rounded-full bg-neutral-900 dark:bg-white px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider leading-none text-white dark:text-neutral-900">Most popular</span>}</div><p className="mt-1 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">{b.description}</p><div className="mt-5">{j(b)}</div><div className="mt-6"><button className={b.featured ? v : k}>{b.cta}</button></div>{x.map(e => <div className="mt-7"><p className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400">{e.title}</p><div className="mt-2 divide-y divide-neutral-200 dark:divide-neutral-800">{e.rows.map(e => <div className="flex items-center justify-between gap-4 py-3"><span className="text-sm text-neutral-600 dark:text-neutral-400">{e.label}</span><h value={e.values[a]} /></div>)}</div></div>)}</motion.div></__mod_47962.N></div></div></motion.div><motion.p variants={g} className="mt-10 text-center text-sm text-neutral-500 dark:text-neutral-400">All plans include bank-grade encryption, two-factor authentication, and unlimited receipt scanning.</motion.p></motion.div></section>;
}

export default b;

import { BadgeCheck, Check, CreditCard, RefreshCcw, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import * as __mod_50969 from "../_helpers/50969";
import * as __mod_47962 from "../_helpers/47962";
/**
 * Pricing 12
 * Single membership with a billing toggle
 * slug: pricing-12
 * category: Pricing
 * export: Pricing12
 * deps: lucide-react, motion
 * original: ts-tailwind/blocks/pricing/pricing-12.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let m = [.22, 1, .36, 1],
  x = ["Every component, block, and template", "Unlimited projects and seats", "Lifetime updates while subscribed", "Private Slack channel with the team", "Design reviews on request", "Priority fixes within one business day", "Figma library with tokens synced", "Cancel or pause in one click"],
  p = [{
    icon: ShieldCheck,
    label: "SOC 2 Type II certified"
  }, {
    icon: RefreshCcw,
    label: "14-day money-back guarantee"
  }, {
    icon: CreditCard,
    label: "No card required to browse"
  }],
  f = [{
    id: "monthly",
    label: "Monthly"
  }, {
    id: "annual",
    label: "Annual",
    badge: "−20%"
  }];
function g() {
  let [e, t] = (0, React.useState)("annual"),
    i = (0, __mod_50969.I)(),
    s = "annual" === e ? 63 : 79,
    a = 18 * !i,
    l = {
      hidden: {
        opacity: 0,
        y: a
      },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: .6,
          ease: m
        }
      }
    };
  return <section className="w-full bg-white dark:bg-neutral-950 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8"><motion.div initial="hidden" whileInView="visible" viewport={{
      once: !0,
      margin: "-80px"
    }} variants={{
      hidden: {},
      visible: {
        transition: {
          staggerChildren: .1
        }
      }
    }} className="max-w-[1400px] mx-auto w-full"><motion.div variants={l} className="mx-auto max-w-2xl text-center"><h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tighter leading-tight text-neutral-900 dark:text-white">One plan. The whole studio.</h2><p className="mt-4 text-base sm:text-lg leading-relaxed text-neutral-600 dark:text-neutral-400">Every component, block, and template we ship, plus direct access to the team that builds them. No tiers to outgrow.</p></motion.div><motion.div variants={l} className="mt-10 flex justify-center"><div role="group" aria-label="Billing period" className="inline-flex rounded-full border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 p-1">{f.map(n => <button type="button" aria-pressed={e === n.id} onClick={() => t(n.id)} className={`relative cursor-pointer rounded-full px-5 py-2 text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 dark:focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-100 dark:focus-visible:ring-offset-neutral-900 ${e === n.id ? "text-neutral-900 dark:text-white" : "text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"}`}>{e === n.id && <motion.span layoutId="pricing12-billing-thumb" transition={{
              duration: .35 * !i,
              ease: m
            }} className="absolute inset-0 rounded-full bg-white dark:bg-neutral-800 shadow-sm" />}<span className="relative z-10 flex items-center gap-1.5">{n.label}{"badge" in n && <span className="rounded-full bg-neutral-900 dark:bg-white px-1.5 py-0.5 text-[10px] font-semibold leading-none text-white dark:text-neutral-900">{n.badge}</span>}</span></button>)}</div></motion.div><motion.div variants={l} className="mx-auto mt-10 w-full max-w-5xl rounded-3xl border border-neutral-800 bg-neutral-950 dark:bg-neutral-900 shadow-2xl shadow-neutral-950/15 dark:shadow-none"><div className="grid grid-cols-1 lg:grid-cols-2"><div className="p-6 sm:p-10 lg:p-12"><span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-neutral-200"><BadgeCheck className="h-3.5 w-3.5" />The Studio plan</span><div className="mt-8 flex items-baseline gap-1.5"><span className="text-2xl font-medium text-neutral-500">$</span><span className="relative inline-grid overflow-hidden"><span aria-hidden="true" className="invisible col-start-1 row-start-1 text-6xl sm:text-7xl font-semibold tracking-tight tabular-nums">{s}</span><__mod_47962.N mode="popLayout" initial={!1}><motion.span initial={{
                    opacity: 0,
                    y: a
                  }} animate={{
                    opacity: 1,
                    y: 0
                  }} exit={{
                    opacity: 0,
                    y: -a
                  }} transition={{
                    duration: .3 * !i,
                    ease: m
                  }} className="col-start-1 row-start-1 text-6xl sm:text-7xl font-semibold tracking-tight tabular-nums text-white">{s}</motion.span></__mod_47962.N></span><span className="text-base text-neutral-500">/ month</span></div><div className="mt-3 min-h-5"><__mod_47962.N mode="wait" initial={!1}><motion.p initial={{
                  opacity: 0
                }} animate={{
                  opacity: 1
                }} exit={{
                  opacity: 0
                }} transition={{
                  duration: .2 * !i
                }} className="text-sm text-neutral-400">{"annual" === e ? "Billed as $756 once a year: save 20%." : "Billed monthly. Switch to annual anytime."}</motion.p></__mod_47962.N></div><div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6"><button className="w-full sm:w-auto cursor-pointer rounded-full bg-white px-8 py-3.5 text-sm font-medium text-neutral-950 transition-colors duration-200 hover:bg-neutral-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950 dark:focus-visible:ring-offset-neutral-900">Become a member</button><a href="#" className="text-sm font-medium text-neutral-400 underline underline-offset-4 decoration-neutral-700 transition-colors duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950 dark:focus-visible:ring-offset-neutral-900 rounded-sm">Talk to a human first</a></div><div className="mt-10 pt-6"><p className="text-xs leading-relaxed text-neutral-500">Prices in USD. VAT calculated at checkout. Membership covers your entire team under one workspace.</p></div></div><div className="border-t lg:border-t-0 lg:border-l border-white/10 p-6 sm:p-10 lg:p-12"><p className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">Everything included</p><ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">{x.map(e => <li className="flex items-start gap-3 text-sm leading-relaxed text-neutral-300"><Check className="mt-0.5 h-4 w-4 shrink-0 text-white" />{e}</li>)}</ul></div></div></motion.div><motion.div variants={l} className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-3">{p.map(({
          icon: e,
          label: t
        }) => <span className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400"><e className="h-4 w-4" />{t}</span>)}</motion.div></motion.div></section>;
}

export default g;

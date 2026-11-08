import { Check } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import * as __mod_50969 from "../_helpers/50969";
import * as __mod_47962 from "../_helpers/47962";
/**
 * Pricing 13
 * Plan picker with a live detail panel
 * slug: pricing-13
 * category: Pricing
 * export: Pricing13
 * deps: lucide-react, motion
 * original: ts-tailwind/blocks/pricing/pricing-13.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let o = [.22, 1, .36, 1],
  c = [{
    name: "Starter",
    badge: null,
    tagline: "For solo builders shipping a first product",
    price: 19,
    seats: "3 seats",
    support: "Community",
    uptime: "99.9%",
    cta: "Start with Starter",
    lead: "Everything you need to ship:",
    features: ["Unlimited releases", "2 environments", "Public changelog pages", "Slack notifications", "30-day release history"]
  }, {
    name: "Growth",
    badge: "Recommended",
    tagline: "For teams making releases a routine",
    price: 49,
    seats: "25 seats",
    support: "Priority email",
    uptime: "99.95%",
    cta: "Start with Growth",
    lead: "Everything in Starter, plus:",
    features: ["Unlimited environments", "Approval workflows", "Scheduled release windows", "Rollback automation", "1-year release history"]
  }, {
    name: "Scale",
    badge: null,
    tagline: "For orgs coordinating many teams",
    price: 129,
    seats: "Unlimited",
    support: "Dedicated engineer",
    uptime: "99.99% SLA",
    cta: "Talk to sales",
    lead: "Everything in Growth, plus:",
    features: ["SAML SSO and SCIM", "Org-wide release calendar", "Audit log export", "Custom data residency", "Unlimited history"]
  }];
function u() {
  let [e, t] = (0, React.useState)(1),
    a = (0, __mod_50969.I)(),
    u = c[e],
    x = {
      hidden: {
        opacity: 0,
        y: 18 * !a
      },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: .6,
          ease: o
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
          staggerChildren: .08
        }
      }
    }} className="max-w-[1400px] mx-auto w-full"><motion.div variants={x} className="max-w-2xl"><h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tighter leading-tight text-neutral-900 dark:text-white">Pick the plan that matches your release cadence.</h2><p className="mt-4 text-base sm:text-lg leading-relaxed text-neutral-600 dark:text-neutral-400">Select a plan to see exactly what changes: seats, support, and the guardrails that come with each stage.</p></motion.div><div className="mt-12 grid grid-cols-1 lg:grid-cols-[1fr_1.05fr] gap-8 lg:gap-12 items-start"><div><div className="space-y-3" role="group" aria-label="Select a plan">{c.map((s, l) => {
              let i = e === l;
              return <motion.button variants={x} type="button" aria-pressed={i} onClick={() => t(l)} className={`relative w-full cursor-pointer rounded-2xl border p-5 text-left transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 dark:focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-neutral-950 ${i ? "border-transparent dark:border-transparent" : "border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600"}`}>{i && <motion.span layoutId="pricing13-selected" transition={{
                  duration: .35 * !a,
                  ease: o
                }} className="absolute -inset-px rounded-2xl bg-neutral-50 dark:bg-neutral-900 ring-2 ring-inset ring-neutral-900 dark:ring-white" />}<span className="relative z-10 flex items-start gap-4"><span className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full border-2 transition-colors duration-200 ${i ? "border-neutral-900 dark:border-white" : "border-neutral-300 dark:border-neutral-700"}`}><motion.span initial={!1} animate={{
                      scale: +!!i
                    }} transition={{
                      duration: .2 * !a,
                      ease: o
                    }} className="h-2.5 w-2.5 rounded-full bg-neutral-900 dark:bg-white" /></span><span className="flex-1"><span className="flex flex-wrap items-center gap-2"><span className="text-base font-semibold text-neutral-900 dark:text-white">{s.name}</span>{s.badge && <span className="rounded-full bg-neutral-900 dark:bg-white px-2 py-0.5 text-[10px] font-semibold leading-none text-white dark:text-neutral-900">{s.badge}</span>}</span><span className="mt-1 block text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">{s.tagline}</span></span><span className="text-right"><span className="text-2xl font-semibold tracking-tight tabular-nums text-neutral-900 dark:text-white">${s.price}</span><span className="block text-xs text-neutral-500 dark:text-neutral-400">/mo per seat</span></span></span></motion.button>;
            })}</div><motion.p variants={x} className="mt-6 text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">Every plan includes unlimited viewers, API access, and two-factor authentication.</motion.p></div><motion.div variants={x} className="rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 p-6 sm:p-8 lg:p-10"><__mod_47962.N mode="wait" initial={!1}><motion.div initial={{
              opacity: 0,
              y: 10 * !a
            }} animate={{
              opacity: 1,
              y: 0
            }} exit={{
              opacity: 0,
              y: a ? 0 : -10
            }} transition={{
              duration: .25 * !a,
              ease: o
            }}><div className="flex flex-wrap items-center gap-2.5"><h3 className="text-2xl font-semibold tracking-tight text-neutral-900 dark:text-white">{u.name}</h3>{u.badge && <span className="rounded-full bg-neutral-900 dark:bg-white px-2 py-0.5 text-[10px] font-semibold leading-none text-white dark:text-neutral-900">{u.badge}</span>}</div><p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">{u.tagline}</p><div className="mt-6 flex items-baseline gap-1"><span className="text-xl font-medium text-neutral-500 dark:text-neutral-400">$</span><span className="text-5xl sm:text-6xl font-semibold tracking-tight tabular-nums text-neutral-900 dark:text-white">{u.price}</span><span className="ml-1 text-sm text-neutral-500 dark:text-neutral-400">/ month per seat</span></div><dl className="mt-8 grid grid-cols-3 gap-4 border-y border-neutral-200 dark:border-neutral-800 py-5">{[{
                  label: "Seats",
                  value: u.seats
                }, {
                  label: "Support",
                  value: u.support
                }, {
                  label: "Uptime",
                  value: u.uptime
                }].map(({
                  label: e,
                  value: t
                }) => <div><dt className="text-xs text-neutral-500 dark:text-neutral-400">{e}</dt><dd className="mt-1 text-sm font-medium text-neutral-900 dark:text-white">{t}</dd></div>)}</dl><p className="mt-8 text-sm font-medium text-neutral-900 dark:text-white">{u.lead}</p><ul className="mt-4 space-y-3">{u.features.map(e => <li className="flex items-start gap-3 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300"><Check className="mt-0.5 h-4 w-4 shrink-0 text-neutral-900 dark:text-white" />{e}</li>)}</ul><button className="mt-8 w-full cursor-pointer rounded-full bg-black dark:bg-white px-8 py-3.5 text-sm font-medium text-white dark:text-black transition-colors duration-200 hover:bg-neutral-800 dark:hover:bg-neutral-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 dark:focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-50 dark:focus-visible:ring-offset-neutral-900">{u.cta}</button><p className="mt-3 text-center text-xs text-neutral-500 dark:text-neutral-400">14-day free trial. No card required.</p></motion.div></__mod_47962.N></motion.div></div></motion.div></section>;
}

export default u;

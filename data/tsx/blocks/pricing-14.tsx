import { ChartLine, Check, Headset, Layers, ShieldCheck, Workflow } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import * as __mod_50969 from "../_helpers/50969";
import * as __mod_47962 from "../_helpers/47962";
/**
 * Pricing 14
 * Plan builder with add-on toggles
 * slug: pricing-14
 * category: Pricing
 * export: Pricing14
 * deps: lucide-react, motion
 * original: ts-tailwind/blocks/pricing/pricing-14.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let h = [.22, 1, .36, 1],
  b = ["Unlimited projects", "10 team members", "Community support"],
  p = [{
    id: "analytics",
    icon: ChartLine,
    name: "Product analytics",
    blurb: "Funnels, retention curves, and session replay",
    price: 24
  }, {
    id: "automation",
    icon: Workflow,
    name: "Workflow automation",
    blurb: "Schedules, triggers, and outbound webhooks",
    price: 18
  }, {
    id: "support",
    icon: Headset,
    name: "Priority support",
    blurb: "One-hour response from a named engineer",
    price: 32
  }, {
    id: "security",
    icon: ShieldCheck,
    name: "Advanced security",
    blurb: "SAML SSO, SCIM, and audit log export",
    price: 40
  }];
function g() {
  let [e, t] = (0, React.useState)(["analytics"]),
    a = (0, __mod_50969.I)(),
    n = p.filter(t => e.includes(t.id)),
    i = 29 + n.reduce((e, t) => e + t.price, 0),
    l = 18 * !a,
    d = {
      hidden: {
        opacity: 0,
        y: l
      },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: .6,
          ease: h
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
          staggerChildren: .07
        }
      }
    }} className="max-w-[1400px] mx-auto w-full"><div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-12 items-start"><div><motion.div variants={d} className="max-w-xl"><h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tighter leading-tight text-neutral-900 dark:text-white">Start with the core. Add only what you use.</h2><p className="mt-4 text-base sm:text-lg leading-relaxed text-neutral-600 dark:text-neutral-400">One base plan, four optional modules. Your invoice mirrors this page: nothing bundled, nothing hidden.</p></motion.div><motion.div variants={d} className="mt-10 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-4 sm:p-5"><div className="flex items-center gap-4"><span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-neutral-100 dark:bg-neutral-800"><Layers className="h-5 w-5 text-neutral-700 dark:text-neutral-300" /></span><span className="min-w-0 flex-1"><span className="block text-sm sm:text-base font-medium text-neutral-900 dark:text-white">Platform core</span><span className="mt-0.5 block text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">Projects, deploys, and team basics</span></span><span className="flex items-center gap-3"><span className="text-sm font-medium tabular-nums text-neutral-700 dark:text-neutral-300">${29}/mo</span><span className="rounded-full bg-neutral-100 dark:bg-neutral-800 px-2.5 py-1 text-xs font-medium text-neutral-700 dark:text-neutral-300">Included</span></span></div><div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 border-t border-neutral-200 dark:border-neutral-800 pt-4">{b.map(e => <span className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400"><Check className="h-4 w-4 text-neutral-900 dark:text-white" />{e}</span>)}</div></motion.div><div className="mt-4 space-y-3">{p.map(s => {
              let n = e.includes(s.id);
              return <motion.button variants={d} type="button" aria-pressed={n} onClick={() => {
                let e;
                return e = s.id, t(t => t.includes(e) ? t.filter(t => t !== e) : [...t, e]);
              }} className={`w-full cursor-pointer rounded-2xl border bg-white dark:bg-neutral-900 p-4 sm:p-5 text-left transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 dark:focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-50 dark:focus-visible:ring-offset-neutral-950 ${n ? "border-neutral-900 dark:border-white" : "border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600"}`}><span className="flex items-center gap-4"><span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-neutral-100 dark:bg-neutral-800"><s.icon className="h-5 w-5 text-neutral-700 dark:text-neutral-300" /></span><span className="min-w-0 flex-1"><span className="block text-sm sm:text-base font-medium text-neutral-900 dark:text-white">{s.name}</span><span className="mt-0.5 block text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">{s.blurb}</span></span><span className="flex shrink-0 items-center gap-3"><span className="text-sm font-medium tabular-nums text-neutral-700 dark:text-neutral-300">+${s.price}</span><span className={`grid h-5 w-5 place-items-center rounded-md border transition-colors duration-200 ${n ? "border-neutral-900 bg-neutral-900 dark:border-white dark:bg-white" : "border-neutral-300 dark:border-neutral-600"}`}><motion.span initial={!1} animate={{
                        scale: +!!n,
                        opacity: +!!n
                      }} transition={{
                        duration: .18 * !a,
                        ease: h
                      }} className="grid place-items-center"><Check className="h-3.5 w-3.5 text-white dark:text-neutral-900" /></motion.span></span></span></span></motion.button>;
            })}</div></div><motion.div variants={d} className="lg:sticky lg:top-8 rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 sm:p-8"><div className="flex items-center justify-between"><h3 className="text-lg font-semibold tracking-tight text-neutral-900 dark:text-white">Your plan</h3><span className="rounded-full bg-neutral-100 dark:bg-neutral-800 px-2.5 py-1 text-xs font-medium text-neutral-700 dark:text-neutral-300">Billed monthly</span></div><ul className="mt-5"><li className="flex items-baseline justify-between gap-4 py-2.5 text-sm"><span className="text-neutral-600 dark:text-neutral-400">Platform core</span><span className="font-medium tabular-nums text-neutral-900 dark:text-white">${29}</span></li><__mod_47962.N initial={!1}>{n.map(e => <motion.li initial={{
                height: 0,
                opacity: 0
              }} animate={{
                height: "auto",
                opacity: 1
              }} exit={{
                height: 0,
                opacity: 0
              }} transition={{
                duration: .3 * !a,
                ease: h
              }} className="overflow-hidden"><span className="flex items-baseline justify-between gap-4 py-2.5 text-sm"><span className="text-neutral-600 dark:text-neutral-400">{e.name}</span><span className="font-medium tabular-nums text-neutral-900 dark:text-white">+${e.price}</span></span></motion.li>)}</__mod_47962.N></ul><div className="mt-4 flex items-baseline justify-between gap-4 border-t border-dashed border-neutral-300 dark:border-neutral-700 pt-5"><span className="text-sm font-medium text-neutral-900 dark:text-white">Total per month</span><span className="flex items-baseline gap-0.5"><span className="text-xl font-medium text-neutral-500 dark:text-neutral-400">$</span><span className="relative inline-grid overflow-hidden"><span aria-hidden="true" className="invisible col-start-1 row-start-1 text-4xl font-semibold tracking-tight tabular-nums">{i}</span><__mod_47962.N mode="popLayout" initial={!1}><motion.span initial={{
                    opacity: 0,
                    y: l
                  }} animate={{
                    opacity: 1,
                    y: 0
                  }} exit={{
                    opacity: 0,
                    y: -l
                  }} transition={{
                    duration: .25 * !a,
                    ease: h
                  }} className="col-start-1 row-start-1 text-4xl font-semibold tracking-tight tabular-nums text-neutral-900 dark:text-white">{i}</motion.span></__mod_47962.N></span></span></div><button className="mt-8 w-full cursor-pointer rounded-full bg-black dark:bg-white px-8 py-3.5 text-sm font-medium text-white dark:text-black transition-colors duration-200 hover:bg-neutral-800 dark:hover:bg-neutral-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 dark:focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-neutral-900">Start 14-day trial</button><button className="mt-3 w-full cursor-pointer rounded-full border border-neutral-300 dark:border-neutral-700 px-8 py-3.5 text-sm font-medium text-neutral-900 dark:text-neutral-100 transition-colors duration-200 hover:bg-neutral-50 dark:hover:bg-neutral-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 dark:focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-neutral-900">Talk to sales</button><ul className="mt-6 space-y-2.5">{["Prorated automatically when you add or remove modules", "Cancel anytime: no minimum term"].map(e => <li className="flex items-start gap-2 text-xs leading-relaxed text-neutral-500 dark:text-neutral-400"><Check className="mt-0.5 h-3.5 w-3.5 shrink-0" />{e}</li>)}</ul></motion.div></div></motion.div></section>;
}

export default g;

import * as React from "react";
import { ArrowRight, ArrowUpRight, Minus, Plus } from "lucide-react";
import * as __mod_47962 from "../_helpers/47962";
/**
 * FAQ 5
 * Two-column FAQ with inline links
 * slug: faq-5
 * category: FAQ
 * export: Faq5
 * deps: lucide-react, motion
 * original: ts-tailwind/blocks/faq/faq-5.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import { motion, AnimatePresence } from "motion/react";

let u = [{
  q: "How quickly can my team get started?",
  a: "Most teams are up and running in under an hour. Sign up, connect your workspace, and import your data, we'll handle the rest."
}, {
  q: "What integrations do you offer?",
  a: "We integrate with dozens of tools out of the box, including SSO providers, Slack, Teams, Jira, major HRIS platforms, and more.",
  cta: "See all integrations"
}, {
  q: "Does every plan include human support?",
  a: "Yes. Every paid plan comes with a dedicated success manager and access to 24/5 live chat support."
}, {
  q: "Is there a minimum team size?",
  a: "No minimum. Pricing scales with your team, starting at just a handful of seats."
}, {
  q: "Which currencies can I be billed in?",
  a: "We support billing in USD, EUR, GBP, CAD, and AUD by default, with more currencies available on request."
}, {
  q: "Can I switch between monthly and annual billing?",
  a: "Anytime. Switch in your account settings, annual plans include a discount and are billed up front."
}];
function h() {
  let [e, t] = (0, React.useState)(1);
  return <section className="w-full min-h-[var(--rb-section-min-h,100vh)] flex items-start py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-neutral-950"><div className="max-w-3xl mx-auto w-full"><motion.div initial={{
        opacity: 0,
        y: 12
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: !0
      }} transition={{
        duration: .5
      }} className="text-center"><h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white tracking-tight">Frequently asked questions</h2><p className="mt-3 text-sm sm:text-base text-neutral-700 dark:text-neutral-300">Not finding what you were looking for? <a href="#" className="text-neutral-900 dark:text-white font-medium inline-flex items-center gap-1 hover:underline">Talk to us <ArrowRight className="w-3.5 h-3.5" /></a></p></motion.div><div className="mt-10 flex flex-col gap-3">{u.map((a, s) => {
          let l = e === s;
          return <motion.div initial={{
            opacity: 0,
            y: 10
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: !0
          }} transition={{
            duration: .35,
            delay: .04 * s
          }} className={`rounded-2xl transition-colors ${l ? "bg-white dark:bg-neutral-900 shadow-sm" : "bg-neutral-100 dark:bg-neutral-900/60"}`}><button onClick={() => t(l ? -1 : s)} className="w-full flex items-center gap-4 px-5 sm:px-6 py-4 sm:py-5 text-left cursor-pointer"><span className={`flex-1 text-sm sm:text-base ${l ? "font-semibold text-neutral-900 dark:text-white" : "font-normal text-neutral-700 dark:text-neutral-300"}`}>{a.q}</span>{l ? <Minus className="w-4 h-4 text-neutral-900 dark:text-white shrink-0" /> : <Plus className="w-4 h-4 text-neutral-500 dark:text-neutral-500 shrink-0" />}</button><__mod_47962.N initial={!1}>{l && <motion.div initial={{
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
                ease: [.22, 1, .36, 1]
              }} className="overflow-hidden"><div className="px-5 sm:px-6 pb-5 sm:pb-6 text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">{a.a}{a.cta && <a href="#" className="ml-2 inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white text-xs sm:text-sm hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors">{a.cta}<ArrowUpRight className="w-3 h-3" /></a>}</div></motion.div>}</__mod_47962.N></motion.div>;
        })}</div></div></section>;
}

export default h;

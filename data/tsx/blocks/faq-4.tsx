import * as React from "react";
import { Minus, Plus } from "lucide-react";
import * as __mod_47962 from "../_helpers/47962";
/**
 * FAQ 4
 * Centered FAQ with plus toggles
 * slug: faq-4
 * category: FAQ
 * export: Faq4
 * deps: lucide-react, motion
 * original: ts-tailwind/blocks/faq/faq-4.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import { motion, AnimatePresence } from "motion/react";

let d = [{
  q: "What makes your platform different?",
  a: "We combine a native, deeply integrated stack with a minimal, distraction-free interface, so your team spends time on work that matters, not on configuring tools."
}, {
  q: "How does pricing work?",
  a: "Simple per-seat pricing with a generous free tier. Annual plans include a discount, and there are no hidden implementation fees."
}, {
  q: "Is my data secure?",
  a: "All data is encrypted in transit and at rest. We're SOC 2 Type II certified and GDPR compliant, with role-based access controls across every plan."
}, {
  q: "Which regions do you support?",
  a: "We're available in 40+ countries across North America, Europe, and Asia-Pacific, with new regions added regularly based on demand."
}, {
  q: "Can I integrate with my existing tools?",
  a: "Yes. We support SSO, Slack, Teams, Jira, and major HRIS providers out of the box, with a REST API and webhooks for everything else."
}, {
  q: "What kind of support do you offer?",
  a: "Every paid plan includes a dedicated success manager and 24/5 live chat. Enterprise plans add a direct Slack Connect channel with our team."
}];
function c() {
  let [e, t] = (0, React.useState)(0);
  return <section className="relative w-full min-h-[var(--rb-section-min-h,100vh)] py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-neutral-950 overflow-hidden"><div aria-hidden={!0} className="pointer-events-none absolute inset-y-0 left-0 right-0 px-4 sm:px-6 lg:px-8"><div className="relative max-w-[1400px] mx-auto w-full h-full"><div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.6fr] gap-10 lg:gap-20 h-full"><div className="relative hidden lg:block"><div className="absolute inset-y-0 left-0 w-px border-l border-dashed border-neutral-300 dark:border-neutral-800" /></div><div className="relative"><div className="absolute inset-y-0 left-0 w-px border-l border-dashed border-neutral-300 dark:border-neutral-800" /><div className="absolute inset-y-0 right-0 w-px border-l border-dashed border-neutral-300 dark:border-neutral-800" /></div></div></div></div><div className="relative max-w-[1400px] mx-auto w-full"><div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.6fr] gap-10 lg:gap-20"><div className="relative flex flex-col gap-6 pl-6"><motion.span initial={{
            opacity: 0
          }} whileInView={{
            opacity: 1
          }} viewport={{
            once: !0
          }} transition={{
            duration: .4
          }} className="relative text-xs tracking-[0.2em] uppercase text-neutral-500 dark:text-neutral-500"><span aria-hidden={!0} className="hidden lg:block absolute -left-[27px] top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-neutral-400 dark:bg-neutral-600" />FAQ</motion.span><motion.h2 initial={{
            opacity: 0,
            y: 14
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: !0
          }} transition={{
            duration: .6,
            delay: .1
          }} className="text-4xl sm:text-5xl font-medium text-neutral-900 dark:text-white tracking-tight leading-[1.05]">Your questions, answered.</motion.h2><motion.p initial={{
            opacity: 0
          }} whileInView={{
            opacity: 1
          }} viewport={{
            once: !0
          }} transition={{
            duration: .5,
            delay: .2
          }} className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-sm">Answers to the most common questions. Still curious? Our team is a message away.</motion.p></div><div className="relative"><div className="flex flex-col">{d.map((a, s) => {
              let c = e === s;
              return <motion.div initial={{
                opacity: 0,
                y: 10
              }} whileInView={{
                opacity: 1,
                y: 0
              }} viewport={{
                once: !0
              }} transition={{
                duration: .4,
                delay: .05 * s
              }} className={`relative py-7 sm:py-9 pl-6 pr-4 ${s !== d.length - 1 ? "border-b border-dashed border-neutral-300 dark:border-neutral-800" : ""}`}><button onClick={() => t(c ? -1 : s)} className="w-full flex items-start gap-4 sm:gap-6 text-left cursor-pointer"><span className="relative text-[11px] text-neutral-500 dark:text-neutral-500 mt-1.5 tabular-nums tracking-wider"><span aria-hidden={!0} className="absolute -left-[27px] top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-neutral-400 dark:bg-neutral-600" />Q{s + 1}</span><span className="flex-1 text-base sm:text-lg font-medium text-neutral-900 dark:text-white">{a.q}</span><span className="w-9 h-9 rounded-md bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center shrink-0">{c ? <Minus className="w-4 h-4 text-neutral-900 dark:text-white" /> : <Plus className="w-4 h-4 text-neutral-900 dark:text-white" />}</span></button><__mod_47962.N initial={!1}>{c && <motion.div initial={{
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
                  }} className="overflow-hidden"><div className="flex items-start gap-4 sm:gap-6 pt-4"><span aria-hidden={!0} className="text-[11px] mt-1.5 tabular-nums tracking-wider invisible">Q{s + 1}</span><p className="flex-1 pr-12 text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-3xl">{a.a}</p></div></motion.div>}</__mod_47962.N></motion.div>;
            })}</div></div></div></div></section>;
}

export default c;

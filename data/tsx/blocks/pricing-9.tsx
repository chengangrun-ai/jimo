import { motion, AnimatePresence } from "motion/react";
import { Check } from "lucide-react";
/**
 * Pricing 9
 * Single plan, monthly and annual
 * slug: pricing-9
 * category: Pricing
 * export: Pricing9
 * deps: lucide-react, motion
 * original: ts-tailwind/blocks/pricing/pricing-9.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

function s() {
  let [e, t] = (0, React.useState)("annual");
  return <section className="w-full min-h-[var(--rb-section-min-h,100vh)] flex items-center py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-neutral-950"><div className="max-w-[1400px] mx-auto w-full flex flex-col items-center text-center"><motion.p initial={{
        opacity: 0
      }} whileInView={{
        opacity: 1
      }} viewport={{
        once: !0
      }} transition={{
        duration: .4
      }} className="text-sm font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">One plan, every feature</motion.p><motion.h2 initial={{
        opacity: 0,
        y: 10
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: !0
      }} transition={{
        duration: .5
      }} className="mt-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-neutral-900 dark:text-white tracking-tight leading-[1.05]">Build without the<br />invoice anxiety</motion.h2><p className="mt-6 text-base sm:text-lg text-neutral-600 dark:text-neutral-400 max-w-lg leading-relaxed">One flat subscription, every feature unlocked, no seat limits. Pick the cadence that fits your cash flow.</p><div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-3xl"><button onClick={() => t("annual")} className={`relative text-left p-6 rounded-2xl transition-colors cursor-pointer ${"annual" === e ? "bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 border border-neutral-900 dark:border-white" : "bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-white hover:border-neutral-300 dark:hover:border-neutral-700"}`}>{"annual" === e && <span className="absolute -top-2.5 left-5 px-2 py-0.5 rounded bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 text-[10px] font-medium text-neutral-900 dark:text-white">Save 40%</span>}<div className="flex items-start justify-between gap-4"><div><p className="font-semibold">Annual · 14 days free</p><p className="mt-1 font-semibold text-xl">$179</p><p className={`text-sm ${"annual" === e ? "opacity-70" : "text-neutral-500 dark:text-neutral-500"}`}>$14.92 / month, billed yearly</p></div><span className={`grid place-items-center h-7 w-7 rounded-md shrink-0 ${"annual" === e ? "bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white" : "border border-neutral-300 dark:border-neutral-700"}`}>{"annual" === e && <Check className="h-4 w-4" />}</span></div></button><button onClick={() => t("monthly")} className={`relative text-left p-6 rounded-2xl transition-colors cursor-pointer ${"monthly" === e ? "bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 border border-neutral-900 dark:border-white" : "bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-white hover:border-neutral-300 dark:hover:border-neutral-700"}`}><div className="flex items-start justify-between gap-4"><div><p className="font-semibold">Monthly · 7 days free</p><p className="mt-1 font-semibold text-xl">$24</p><p className={`text-sm ${"monthly" === e ? "opacity-70" : "text-neutral-500 dark:text-neutral-500"}`}>Per month, cancel anytime</p></div><span className={`grid place-items-center h-7 w-7 rounded-md shrink-0 ${"monthly" === e ? "bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white" : "border border-neutral-300 dark:border-neutral-700"}`}>{"monthly" === e && <Check className="h-4 w-4" />}</span></div></button></div><p className="mt-5 text-xs text-neutral-500 dark:text-neutral-500 max-w-sm">Your trial is fully featured. We’ll send a reminder two days before it ends so you’re never surprised by a charge.</p><div className="mt-4 flex items-center gap-3 text-sm"><a href="#" className="text-neutral-900 dark:text-white underline underline-offset-4 hover:opacity-70 transition-opacity">Terms & conditions</a><span className="text-neutral-300 dark:text-neutral-700">·</span><a href="#" className="text-neutral-900 dark:text-white underline underline-offset-4 hover:opacity-70 transition-opacity">Cancel anytime</a></div><button className="mt-8 px-10 py-4 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-base font-semibold hover:opacity-90 transition-opacity cursor-pointer">Start your free trial</button></div></section>;
}

export default s;

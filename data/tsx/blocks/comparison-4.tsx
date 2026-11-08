import { Check, X } from "lucide-react";
/**
 * Comparison 4
 * Us versus them with check and X marks
 * slug: comparison-4
 * category: Comparison
 * export: Comparison4
 * deps: lucide-react, motion
 * original: ts-tailwind/blocks/comparison/comparison-4.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import { motion, AnimatePresence } from "motion/react";

let n = [{
  label: "Real-time collaboration",
  bold: !0,
  us: !0,
  them: !0
}, {
  label: "Version history",
  bold: !0,
  us: !0,
  them: !1
}, {
  label: "Unlimited workspaces",
  bold: !0,
  us: !0,
  them: !1
}, {
  label: "Custom integrations",
  us: !0,
  them: !1
}, {
  label: "Offline support",
  us: !0,
  them: !1
}, {
  label: "Private sharing",
  us: !0,
  them: !1
}, {
  label: "Advanced analytics",
  us: !0,
  them: !1
}, {
  label: "Role-based access",
  us: !0,
  them: !1
}, {
  label: "Priority support",
  bold: !0,
  us: !0,
  them: !0
}, {
  label: "24/7 monitoring",
  bold: !0,
  us: !0,
  them: !1
}];
function d() {
  return <section className="w-full min-h-[var(--rb-section-min-h,100vh)] flex items-start py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-neutral-950"><div className="max-w-[1400px] mx-auto w-full"><motion.h2 initial={{
        opacity: 0,
        y: 16
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: !0
      }} transition={{
        duration: .6
      }} className="font-medium text-neutral-900 dark:text-white leading-[1.05] tracking-tight sm:whitespace-nowrap" style={{
        fontSize: "clamp(1.75rem, 5.2vw, 4.75rem)"
      }}>Only Northwind gives you full coverage</motion.h2><motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: !0
      }} transition={{
        duration: .6,
        delay: .15
      }} className="mt-10 sm:mt-14 lg:pr-32 xl:pr-56"><div className="grid grid-cols-[1.4fr_1fr_1fr] sm:grid-cols-[2fr_1fr_1fr] items-center pb-4 border-b border-neutral-200 dark:border-neutral-800"><span /><span className="text-center text-sm sm:text-base text-neutral-700 dark:text-neutral-300">Northwind</span><span className="text-center text-sm sm:text-base text-neutral-700 dark:text-neutral-300">Competitors</span></div>{n.map((e, t) => <motion.div initial={{
          opacity: 0,
          y: 10
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: !0
        }} transition={{
          duration: .35,
          delay: .05 * t
        }} className="grid grid-cols-[1.4fr_1fr_1fr] sm:grid-cols-[2fr_1fr_1fr] items-center py-4 sm:py-5 border-b border-neutral-200 dark:border-neutral-800 last:border-b-0"><span className={`text-sm sm:text-base text-neutral-900 dark:text-neutral-100 ${e.bold ? "font-semibold" : "font-normal"}`}>{e.label}</span><span className="flex justify-center">{e.us ? <Check className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 dark:text-green-500" strokeWidth={3} /> : <X className="w-5 h-5 sm:w-6 sm:h-6 text-red-600 dark:text-red-500" strokeWidth={3} />}</span><span className="flex justify-center">{e.them ? <Check className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 dark:text-green-500" strokeWidth={3} /> : <X className="w-5 h-5 sm:w-6 sm:h-6 text-red-600 dark:text-red-500" strokeWidth={3} />}</span></motion.div>)}</motion.div><p className="mt-6 text-xs sm:text-sm text-neutral-500 dark:text-neutral-500">Comparison is based on public information and free offerings by top competitors as of 04/26.</p></div></section>;
}

export default d;

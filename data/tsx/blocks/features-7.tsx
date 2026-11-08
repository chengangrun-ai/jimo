/**
 * Features 7
 * Alternating feature rows with mockups
 * slug: features-7
 * category: Features
 * export: Features7
 * deps: motion
 * original: ts-tailwind/blocks/features/features-7.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import { motion, AnimatePresence } from "motion/react";

let s = [{
  title: "Every tool one place",
  body: ["A shared workspace for everything you touch during the day, from briefs and comments to drafts and approvals."]
}, {
  title: "Publish work and share it",
  body: ["Turn the pieces you put into the world into a small, steady revenue stream. Your audience supports you directly, with no middle layer."]
}, {
  title: "Discover new ideas",
  body: ["A slow feed of things worth reading, watching, and trying, curated by the people you already trust."]
}];
function i() {
  return <section className="w-full min-h-[var(--rb-section-min-h,100vh)] flex items-start py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-neutral-950"><div className="max-w-[1400px] mx-auto w-full flex flex-col gap-24 sm:gap-28">{s.map((e, t) => {
        let a = t % 2 == 1;
        return <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: !0
        }} transition={{
          duration: .3
        }} className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"><div className={`rounded-2xl bg-neutral-100 dark:bg-neutral-900 overflow-hidden aspect-4/3 flex items-center justify-center ${a ? "md:order-2" : ""}`}><img src="/svg/placeholder.svg" alt="" className="w-full h-full object-cover" /></div><div className={`flex flex-col gap-3 ${a ? "md:order-1" : ""}`}><h3 className="text-3xl sm:text-4xl font-medium text-neutral-900 dark:text-white tracking-tight leading-tight">{e.title}</h3>{e.body.map((e, t) => <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">{e}</p>)}</div></motion.div>;
      })}</div></section>;
}

export default i;

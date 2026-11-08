/**
 * How It Works 5
 * Numbered steps with a green CTA
 * slug: how-it-works-5
 * category: How It Works
 * export: HowItWorks5
 * deps: motion
 * original: ts-tailwind/blocks/how-it-works/how-it-works-5.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import { motion, AnimatePresence } from "motion/react";

let l = [{
  n: 1,
  title: "Create your account",
  desc: "Enter your details and choose a plan that fits your team's size and workflow."
}, {
  n: 2,
  title: "Set up your workspace",
  desc: "Configure your environment, invite collaborators, and customize your preferences."
}, {
  n: 3,
  title: "Connect your tools",
  desc: "Integrate with your existing stack, no migration headaches, no downtime."
}, {
  n: 4,
  title: "Ship faster",
  desc: "Start building with everything in place. Your team hits the ground running."
}];
function s() {
  return <section className="w-full min-h-[var(--rb-section-min-h,100vh)] flex items-center py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-neutral-950"><div className="max-w-[1400px] mx-auto w-full"><div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start"><motion.div initial={{
          opacity: 0,
          y: 16
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: !0
        }} transition={{
          duration: .6
        }} className="flex flex-col gap-6"><h2 className="text-4xl sm:text-5xl md:text-6xl font-medium text-neutral-900 dark:text-white tracking-tight">How it works</h2><p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-md">Get up and running in minutes. No steep learning curve, no complex setup: just a clear path from zero to productive.</p><motion.button whileHover={{
            scale: 1.02
          }} whileTap={{
            scale: .98
          }} className="self-start px-10 py-3.5 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-xs tracking-[0.2em] uppercase font-bold transition-all cursor-pointer">Get Started</motion.button><p className="text-sm text-neutral-500 dark:text-neutral-500">Need a custom plan for large teams? <a href="#" className="text-neutral-900 dark:text-white font-semibold hover:underline">Contact us</a>.</p></motion.div><div className="flex flex-col gap-10">{l.map((e, t) => <motion.div initial={{
            opacity: 0,
            x: 20
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: !0
          }} transition={{
            duration: .5,
            delay: .1 * t
          }} className="flex items-start gap-5"><span className="w-12 h-12 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 flex items-center justify-center text-lg font-bold shrink-0">{e.n}</span><div className="flex flex-col gap-1 pt-1"><h3 className="text-lg sm:text-xl font-semibold text-neutral-900 dark:text-white tracking-tight">{e.title}</h3><p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">{e.desc}</p></div></motion.div>)}</div></div></div></section>;
}

export default s;

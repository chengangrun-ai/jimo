import { HeartHandshake, Leaf, Sparkles } from "lucide-react";
/**
 * Features 8
 * Three centered columns with serif titles
 * slug: features-8
 * category: Features
 * export: Features8
 * deps: lucide-react, motion
 * original: ts-tailwind/blocks/features/features-8.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import { motion, AnimatePresence } from "motion/react";

let c = [{
  Icon: Sparkles,
  title: "Small batch,\nmade to order"
}, {
  Icon: Leaf,
  title: "Clean ingredients,\nnothing hidden"
}, {
  Icon: HeartHandshake,
  title: "Free returns,\nno questions"
}];
function o() {
  return <section className="w-full min-h-[var(--rb-section-min-h,100vh)] flex items-center justify-center py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-neutral-950"><div className="max-w-[1400px] mx-auto w-full flex flex-col items-center"><div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-6 w-full">{c.map((e, t) => <motion.div initial={{
          opacity: 0,
          y: 16
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: !0
        }} transition={{
          duration: .5,
          delay: .1 * t
        }} className="flex flex-col items-center text-center gap-6"><div className="w-14 h-14 rounded-full flex items-center justify-center" style={{
            background: "radial-gradient(circle, #f5f5f5 0%, #e5e5e5 100%)"
          }}><e.Icon className="w-6 h-6 text-neutral-800" strokeWidth={1.5} /></div><h3 className="font-serif text-2xl sm:text-3xl text-neutral-900 dark:text-white leading-tight whitespace-pre-line">{e.title}</h3></motion.div>)}</div><motion.p initial={{
        opacity: 0
      }} whileInView={{
        opacity: 1
      }} viewport={{
        once: !0
      }} transition={{
        duration: .5,
        delay: .4
      }} className="mt-12 text-xs text-neutral-500 dark:text-neutral-500">*Applies to orders placed within our return window.</motion.p></div></section>;
}

export default o;

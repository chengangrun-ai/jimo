import { ArrowRight } from "lucide-react";
/**
 * Hero 11
 * Minimal hero with wireframe corners
 * slug: hero-11
 * category: Hero Section
 * export: Hero11
 * deps: lucide-react, motion
 * original: ts-tailwind/blocks/hero/hero-11.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import { motion, AnimatePresence } from "motion/react";

function l({
  position: e
}) {
  let t = "bg-neutral-200 dark:bg-neutral-700",
    a = "w-2 sm:w-8",
    r = "h-2 sm:h-6",
    i = ".5px";
  return "top-left" === e ? <div className="absolute top-0 left-0 z-10 pointer-events-none"><div className={`absolute top-0 right-0 ${a} ${t} origin-right`} style={{
      height: i,
      transform: "translateY(-50%)"
    }} /><div className={`absolute bottom-0 left-0 ${r} ${t} origin-bottom`} style={{
      width: i,
      transform: "translateX(-50%)"
    }} /></div> : "top-right" === e ? <div className="absolute top-0 right-0 z-10 pointer-events-none"><div className={`absolute top-0 left-0 ${a} ${t} origin-left`} style={{
      height: i,
      transform: "translateY(-50%)"
    }} /><div className={`absolute bottom-0 right-0 ${r} ${t} origin-bottom`} style={{
      width: i,
      transform: "translateX(50%)"
    }} /></div> : "bottom-left" === e ? <div className="absolute bottom-0 left-0 z-10 pointer-events-none"><div className={`absolute bottom-0 right-0 ${a} ${t} origin-right`} style={{
      height: i,
      transform: "translateY(50%)"
    }} /><div className={`absolute top-0 left-0 ${r} ${t} origin-top`} style={{
      width: i,
      transform: "translateX(-50%)"
    }} /></div> : <div className="absolute bottom-0 right-0 z-10 pointer-events-none"><div className={`absolute bottom-0 left-0 ${a} ${t} origin-left`} style={{
      height: i,
      transform: "translateY(50%)"
    }} /><div className={`absolute top-0 right-0 ${r} ${t} origin-top`} style={{
      width: i,
      transform: "translateX(50%)"
    }} /></div>;
}
function Hero11() {
  return <section className="relative w-full overflow-hidden bg-white dark:bg-neutral-950 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8"><div className="max-w-[1400px] mx-auto w-full"><div className="flex flex-col items-start sm:items-center text-left sm:text-center mb-12 sm:mb-16 lg:mb-20"><motion.a href="#" className="inline-flex items-center gap-2 pl-1.5 pr-3 py-1.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors mb-8 cursor-pointer" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: .5
        }}><span className="px-2.5 py-1 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-xs font-semibold">New</span><span>See our latest features</span><ArrowRight className="w-4 h-4" /></motion.a><motion.h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-neutral-900 dark:text-white tracking-tight max-w-4xl leading-[1.1]" initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: .6,
          delay: .1
        }}>Customer relationship magic.</motion.h1><motion.p className="mt-6 text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: .5,
          delay: .2
        }}>Powerful, flexible and data-driven. Build the exact CRM your business needs with tools designed for modern teams.</motion.p><motion.div className="mt-8 w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: .5,
          delay: .3
        }}><button className="w-full sm:w-auto px-6 py-3 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-lg text-base font-medium hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors cursor-pointer">Start for free</button><button className="w-full sm:w-auto px-6 py-3 bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white border border-neutral-300 dark:border-neutral-700 rounded-lg text-base font-medium hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors cursor-pointer">Talk to sales</button></motion.div></div><motion.div className="relative max-w-5xl mx-auto px-6 sm:px-8 lg:px-12" initial={{
        opacity: 0,
        y: 40
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: .7,
        delay: .4
      }}><div className="relative"><l position="top-left" /><l position="top-right" /><l position="bottom-left" /><l position="bottom-right" /><div className="overflow-hidden border border-neutral-200 dark:border-neutral-800 shadow-xl"><img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400&h=800&fit=crop" alt="Product dashboard screenshot" className="w-full h-full object-cover" /></div></div></motion.div></div></section>;
}

export default Hero11;

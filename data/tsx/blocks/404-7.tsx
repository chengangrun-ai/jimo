import { motion, AnimatePresence } from "motion/react";
import * as __mod_50969 from "../_helpers/50969";
/**
 * 404 7
 * Radar sweep 404 with inline search
 * slug: 404-7
 * category: 404
 * export: NotFound7
 * deps: lucide-react, motion
 * original: ts-tailwind/blocks/404/404-7.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import { ArrowRight, House, LifeBuoy, Search } from "lucide-react";

let c = ["rotate-0", "rotate-[30deg]", "rotate-[60deg]", "rotate-[90deg]", "rotate-[120deg]", "rotate-[150deg]", "rotate-[180deg]", "rotate-[210deg]", "rotate-[240deg]", "rotate-[270deg]", "rotate-[300deg]", "rotate-[330deg]"],
  u = [{
    position: "left-[81%] top-[40%]",
    delay: 1.2
  }, {
    position: "left-[61%] top-[69%]",
    delay: 2.5
  }, {
    position: "left-[15%] top-[56%]",
    delay: 4.33
  }];
function x() {
  let e = (0, __mod_50969.I)(),
    t = {
      hidden: {
        opacity: 0,
        y: 18 * !e
      },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: .7,
          ease: [.22, 1, .36, 1]
        }
      }
    };
  return <section className="w-full min-h-screen flex items-start lg:items-center bg-white dark:bg-neutral-950 py-16 sm:py-20 px-4 sm:px-6 lg:px-8"><div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"><motion.div initial={{
        opacity: 0,
        y: 24 * !e
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: .8,
        ease: [.22, 1, .36, 1]
      }} className="order-2 lg:order-1 relative flex flex-col rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/50 bg-[radial-gradient(circle,rgba(23,23,23,0.05)_1px,transparent_1px)] dark:bg-[radial-gradient(circle,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:22px_22px] p-6 sm:p-8 lg:p-10"><div className="flex items-center justify-between text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-500"><span>Sweep 06.0s</span><span>Sector NE-04</span></div><div className="relative mx-auto my-8 sm:my-10 aspect-square w-full max-w-[300px] sm:max-w-[380px] lg:max-w-[430px]"><div className="absolute inset-0 rounded-full border border-neutral-200 dark:border-neutral-800" /><div className="absolute inset-[16%] rounded-full border border-neutral-200 dark:border-neutral-800" /><div className="absolute inset-[32%] rounded-full border border-neutral-200 dark:border-neutral-800" /><div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-neutral-200/70 dark:bg-neutral-800/70" /><div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-neutral-200/70 dark:bg-neutral-800/70" />{c.map(e => <div aria-hidden="true" className={`absolute inset-0 ${e}`}><span className="absolute left-1/2 top-0 h-2 w-px -translate-x-1/2 bg-neutral-300 dark:bg-neutral-700" /></div>)}<motion.div animate={e ? void 0 : {
            rotate: 360
          }} transition={{
            duration: 6,
            repeat: 1 / 0,
            ease: "linear"
          }} className="absolute inset-0 overflow-hidden rounded-full"><div className="absolute inset-0 [background:conic-gradient(from_0deg,rgba(23,23,23,0)_0deg,rgba(23,23,23,0)_282deg,rgba(23,23,23,0.13)_360deg)] dark:hidden" /><div className="absolute inset-0 hidden dark:block [background:conic-gradient(from_0deg,rgba(255,255,255,0)_0deg,rgba(255,255,255,0)_282deg,rgba(255,255,255,0.15)_360deg)]" /><div className="absolute left-1/2 top-0 h-1/2 w-px -translate-x-1/2 origin-bottom bg-neutral-900/40 dark:bg-white/50" /></motion.div>{u.map(t => <div aria-hidden="true" className={`absolute -translate-x-1/2 -translate-y-1/2 ${t.position}`}><span className="block size-1.5 rounded-full bg-neutral-400 dark:bg-neutral-600" />{!e && <><motion.span animate={{
                opacity: [0, 1, 0]
              }} transition={{
                duration: 1.6,
                delay: t.delay,
                repeat: 1 / 0,
                repeatDelay: 4.4,
                ease: "easeOut"
              }} className="absolute inset-0 rounded-full bg-neutral-900 dark:bg-white" /><motion.span animate={{
                opacity: [.6, 0],
                scale: [.5, 2.8]
              }} transition={{
                duration: 1.6,
                delay: t.delay,
                repeat: 1 / 0,
                repeatDelay: 4.4,
                ease: "easeOut"
              }} className="absolute -inset-1.5 rounded-full border border-neutral-900/50 dark:border-white/50" /></>}</div>)}<span className="absolute left-1/2 top-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-neutral-900 dark:bg-white" /></div><div className="flex items-center justify-between text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-500"><span>Contacts: 00</span><span>Signal: lost</span></div></motion.div><motion.div variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: .09,
            delayChildren: .1
          }
        }
      }} initial="hidden" animate="visible" className="order-1 lg:order-2 max-w-xl"><motion.h1 variants={t}><span className="block select-none text-[5.5rem] sm:text-[7.5rem] lg:text-[9rem] font-black tracking-[-0.05em] leading-none text-neutral-900 dark:text-white">4<span className="text-transparent [-webkit-text-stroke:2.5px_#171717] dark:[-webkit-text-stroke:2.5px_#ffffff]">0</span>4</span><span className="mt-5 block text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900 dark:text-white text-balance">Nothing on the scope.</span></motion.h1><motion.p variants={t} className="mt-4 max-w-lg text-base sm:text-lg leading-relaxed text-neutral-600 dark:text-neutral-400 text-pretty">We swept every route twice and this page isn't broadcasting anymore. Search for what you need, or head back to base.</motion.p><motion.form variants={t} action="/search" className="mt-8 max-w-md"><div className="flex items-center gap-2 rounded-full border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 py-1.5 pl-4 pr-1.5 focus-within:border-neutral-900 dark:focus-within:border-white transition-colors duration-200"><Search className="size-4 shrink-0 text-neutral-400 dark:text-neutral-500" /><input type="text" name="q" placeholder="Search pages…" aria-label="Search pages" className="w-full min-w-0 bg-transparent py-2 text-sm text-neutral-900 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-500 focus:outline-none" /><button type="submit" aria-label="Search" className="flex size-9 shrink-0 items-center justify-center rounded-full bg-black dark:bg-white text-white dark:text-black cursor-pointer hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 dark:focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-neutral-900"><ArrowRight className="size-4" /></button></div></motion.form><motion.div variants={t} className="mt-6 flex flex-col items-start gap-4 sm:flex-row sm:items-center"><motion.a href="/" whileHover={e ? void 0 : {
            y: -2
          }} whileTap={e ? void 0 : {
            scale: .98
          }} className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-black dark:bg-white px-6 sm:px-8 py-3 sm:py-3.5 text-sm sm:text-base font-medium text-white dark:text-black cursor-pointer hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 dark:focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-neutral-950"><House className="size-4" />Back home</motion.a><a href="/support" className="inline-flex items-center justify-center gap-2 rounded-full px-4 py-3 sm:py-3.5 text-sm sm:text-base font-medium text-neutral-600 dark:text-neutral-400 cursor-pointer hover:text-neutral-900 dark:hover:text-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 dark:focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-neutral-950"><LifeBuoy className="size-4" />Contact support</a></motion.div></motion.div></div></section>;
}

export default x;

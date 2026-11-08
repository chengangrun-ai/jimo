import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Menu, X } from "lucide-react";
import * as __mod_47962 from "../_helpers/47962";
/**
 * Navigation 12
 * Glass pill nav with a sliding indicator
 * slug: navigation-12
 * category: Navigation
 * export: Navigation12
 * deps: lucide-react, motion
 * original: ts-tailwind/blocks/navigation/navigation-12.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let c = ["Overview", "Product", "Customers", "Pricing"],
  u = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: .05,
        delayChildren: .08
      }
    }
  },
  x = {
    hidden: {
      opacity: 0,
      y: 8
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: .35,
        ease: [.22, 1, .36, 1]
      }
    }
  },
  h = "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-50 dark:focus-visible:ring-white dark:focus-visible:ring-offset-neutral-950";
function m() {
  let [e, t] = (0, React.useState)("Overview"),
    [a, m] = (0, React.useState)(!1);
  return (0, React.useEffect)(() => {
    if (!a) return;
    let e = e => {
      "Escape" === e.key && m(!1);
    };
    return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e);
  }, [a]), <header className="w-full min-h-[var(--rb-section-min-h,100vh)] bg-white px-4 py-6 dark:bg-neutral-950 sm:py-10 sm:px-6 lg:px-8"><div className="mx-auto w-full max-w-[1400px]"><motion.nav initial={{
        opacity: 0,
        y: -12
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: .6,
        ease: [.22, 1, .36, 1]
      }} className="flex h-16 items-center justify-between gap-3 rounded-full border border-neutral-200/80 bg-white/80 pl-5 pr-2.5 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_-12px_rgba(0,0,0,0.12)] backdrop-blur-xl dark:border-neutral-800 dark:bg-neutral-900/80" aria-label="Primary"><a href="#" className={`flex items-center gap-2.5 rounded-full text-neutral-900 dark:text-white ${h}`}><span className="relative flex h-7 w-7 items-center justify-center rounded-full bg-neutral-900 dark:bg-white"><span className="absolute h-3 w-3 rounded-full border-[1.5px] border-white dark:border-neutral-900" /><span className="absolute right-1 top-1 h-1 w-1 rounded-full bg-white dark:bg-neutral-900" /></span><span className="text-[15px] font-semibold tracking-tight">Arc</span></a><div className="hidden items-center md:flex">{c.map(a => <button type="button" onClick={() => t(a)} aria-current={e === a ? "page" : void 0} className={`relative cursor-pointer rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 ${h} ${e === a ? "text-neutral-900 dark:text-white" : "text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"}`}>{e === a && <motion.span layoutId="nav12-active" className="absolute inset-0 rounded-full bg-neutral-100 dark:bg-neutral-800" transition={{
              duration: .35,
              ease: [.22, 1, .36, 1]
            }} />}<span className="relative">{a}</span></button>)}</div><div className="flex items-center gap-1.5"><a href="#" className={`hidden rounded-full px-4 py-2 text-sm font-medium text-neutral-600 transition-colors duration-200 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white md:inline-flex ${h}`}>Sign in</a><a href="#" className={`hidden items-center gap-1.5 rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white transition-colors duration-200 hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200 md:inline-flex ${h}`}>Start free<ArrowRight className="h-3.5 w-3.5" /></a><button type="button" onClick={() => m(e => !e)} aria-expanded={a} aria-controls="nav12-mobile-menu" aria-label={a ? "Close menu" : "Open menu"} className={`flex h-11 w-11 cursor-pointer items-center justify-center rounded-full text-neutral-900 transition-colors duration-200 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-800 md:hidden ${h}`}>{a ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}</button></div></motion.nav><__mod_47962.N>{a && <motion.div id="nav12-mobile-menu" initial={{
          height: 0,
          opacity: 0
        }} animate={{
          height: "auto",
          opacity: 1
        }} exit={{
          height: 0,
          opacity: 0
        }} transition={{
          duration: .4,
          ease: [.22, 1, .36, 1]
        }} className="overflow-hidden md:hidden"><motion.nav initial="hidden" animate="visible" variants={u} className="mt-3 rounded-3xl border border-neutral-200/80 bg-white/90 p-2 shadow-[0_8px_24px_-12px_rgba(0,0,0,0.12)] backdrop-blur-xl dark:border-neutral-800 dark:bg-neutral-900/90" aria-label="Mobile">{c.map(a => <motion.button type="button" variants={x} onClick={() => {
              t(a), m(!1);
            }} className={`flex w-full cursor-pointer items-center justify-between rounded-2xl px-4 py-3.5 text-left text-[15px] font-medium transition-colors duration-200 ${h} ${e === a ? "bg-neutral-100 text-neutral-900 dark:bg-neutral-800 dark:text-white" : "text-neutral-600 hover:bg-neutral-50 dark:text-neutral-400 dark:hover:bg-neutral-800/50"}`}>{a}{e === a && <span className="h-1.5 w-1.5 rounded-full bg-neutral-900 dark:bg-white" />}</motion.button>)}<motion.div variants={x} className="mt-2 grid gap-2 border-t border-neutral-200 px-2 pb-2 pt-3 dark:border-neutral-800"><a href="#" className={`rounded-full border border-neutral-300 px-5 py-3 text-center text-sm font-medium text-neutral-900 transition-colors duration-200 hover:bg-neutral-50 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 ${h}`}>Sign in</a><a href="#" className={`inline-flex items-center justify-center gap-1.5 rounded-full bg-black px-5 py-3 text-sm font-medium text-white transition-colors duration-200 hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200 ${h}`}>Start free<ArrowRight className="h-3.5 w-3.5" /></a></motion.div></motion.nav></motion.div>}</__mod_47962.N></div></header>;
}

export default m;

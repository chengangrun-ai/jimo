import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import * as __mod_50969 from "../_helpers/50969";
import * as __mod_47962 from "../_helpers/47962";
/**
 * Navigation 13
 * Split nav with a centered wordmark
 * slug: navigation-13
 * category: Navigation
 * export: Navigation13
 * deps: lucide-react, motion
 * original: ts-tailwind/blocks/navigation/navigation-13.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let u = [.22, 1, .36, 1],
  x = ["Work", "Studio", "Services"],
  h = ["Journal", "Contact"],
  m = ["Work", "Studio", "Services", "Journal", "Contact"],
  p = {
    rest: {
      y: "0%"
    },
    hover: {
      y: "-100%"
    }
  },
  b = {
    rest: {
      y: "100%"
    },
    hover: {
      y: "0%"
    }
  },
  f = "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-white dark:focus-visible:ring-offset-neutral-950";
function g({
  label: e
}) {
  return <motion.a href="#" initial="rest" animate="rest" whileHover="hover" whileFocus="hover" className={`rounded-sm text-sm font-medium ${f}`}><span className="relative block overflow-hidden"><motion.span variants={p} transition={{
        duration: .4,
        ease: u
      }} className="block text-neutral-600 will-change-transform dark:text-neutral-400">{e}</motion.span><motion.span variants={b} transition={{
        duration: .4,
        ease: u
      }} aria-hidden="true" className="absolute inset-0 block text-neutral-950 will-change-transform dark:text-white">{e}</motion.span></span></motion.a>;
}
function v() {
  let [e, t] = (0, React.useState)(!1),
    a = (0, __mod_50969.I)();
  (0, React.useEffect)(() => {
    if (!e) return;
    let a = e => {
        "Escape" === e.key && t(!1);
      },
      r = document.body.style.overflow;
    return document.body.style.overflow = "hidden", window.addEventListener("keydown", a), () => {
      document.body.style.overflow = r, window.removeEventListener("keydown", a);
    };
  }, [e]), (0, React.useEffect)(() => {
    let e = window.matchMedia("(min-width: 1024px)"),
      a = e => {
        e.matches && t(!1);
      };
    return e.addEventListener("change", a), () => e.removeEventListener("change", a);
  }, []);
  let p = {
    hidden: {
      opacity: 0,
      y: 26 * !a
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: .5,
        ease: u
      }
    }
  };
  return <header className="w-full min-h-[var(--rb-section-min-h,100vh)] bg-white dark:bg-neutral-950 px-4 sm:px-6 lg:px-8"><div className="w-full"><motion.nav initial={{
        opacity: 0,
        y: -10
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: .6,
        ease: u
      }} className="border-b border-neutral-200 dark:border-neutral-800" aria-label="Primary"><div className="mx-auto grid w-full max-w-[1400px] grid-cols-[1fr_auto_1fr] items-center gap-4 py-5"><div className="hidden items-center gap-8 lg:flex">{x.map(e => <g label={e} />)}</div><button type="button" onClick={() => t(!0)} aria-expanded={e} aria-controls="nav13-menu" aria-label="Open menu" className={`flex h-11 w-11 cursor-pointer items-center justify-center justify-self-start rounded-full border border-neutral-200 text-neutral-900 transition-colors duration-200 hover:bg-neutral-50 dark:border-neutral-800 dark:text-white dark:hover:bg-neutral-900 lg:hidden ${f}`}><Menu className="h-5 w-5" /></button><a href="#" className={`justify-self-center rounded-sm text-lg font-semibold tracking-tight text-neutral-950 dark:text-white ${f}`}>Northline<span className="align-super text-[10px]">®</span></a><div className="hidden items-center gap-8 justify-self-end lg:flex">{h.map(e => <g label={e} />)}<a href="#" className={`inline-flex items-center gap-1.5 rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white transition-colors duration-200 hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200 ${f}`}>Start a project<ArrowUpRight className="h-4 w-4" /></a></div><a href="#" aria-label="Start a project" className={`flex h-11 w-11 items-center justify-center justify-self-end rounded-full bg-black text-white transition-colors duration-200 hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200 lg:hidden ${f}`}><ArrowUpRight className="h-5 w-5" /></a></div></motion.nav><__mod_47962.N>{e && <motion.div id="nav13-menu" role="dialog" aria-modal="true" aria-label="Menu" initial={a ? {
          opacity: 0
        } : {
          y: "-100%"
        }} animate={a ? {
          opacity: 1
        } : {
          y: 0
        }} exit={a ? {
          opacity: 0
        } : {
          y: "-100%"
        }} transition={{
          duration: a ? .2 : .6,
          ease: u
        }} className="fixed inset-0 z-50 flex flex-col overflow-y-auto bg-white dark:bg-neutral-950 lg:hidden"><div className="mx-auto flex w-full max-w-[1400px] flex-1 flex-col px-4 pb-8 pt-5 sm:px-6"><div className="grid grid-cols-[1fr_auto_1fr] items-center border-b border-neutral-200 pb-5 dark:border-neutral-800"><button type="button" onClick={() => t(!1)} aria-label="Close menu" className={`flex h-11 w-11 cursor-pointer items-center justify-center justify-self-start rounded-full border border-neutral-200 text-neutral-900 transition-colors duration-200 hover:bg-neutral-50 dark:border-neutral-800 dark:text-white dark:hover:bg-neutral-900 ${f}`}><X className="h-5 w-5" /></button><span className="justify-self-center text-lg font-semibold tracking-tight text-neutral-950 dark:text-white">Northline<span className="align-super text-[10px]">®</span></span><span className="h-11 w-11 justify-self-end" aria-hidden="true" /></div><motion.nav initial="hidden" animate="visible" variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: .06,
                  delayChildren: .3 * !a
                }
              }
            }} className="mt-6 flex flex-col" aria-label="Menu links">{m.map((e, a) => <motion.a href="#" variants={p} onClick={() => t(!1)} className={`group flex items-baseline gap-4 border-b border-neutral-200 py-4 dark:border-neutral-800 sm:py-5 ${f}`}><span className="text-xs tabular-nums text-neutral-400 dark:text-neutral-600">0{a + 1}</span><span className="text-4xl font-semibold tracking-tight text-neutral-950 transition-colors duration-200 group-hover:text-neutral-500 dark:text-white dark:group-hover:text-neutral-400 sm:text-5xl">{e}</span><ArrowUpRight className="ml-auto h-5 w-5 self-center text-neutral-400 transition-colors duration-200 group-hover:text-neutral-950 dark:text-neutral-600 dark:group-hover:text-white" /></motion.a>)}</motion.nav><motion.div initial={{
              opacity: 0
            }} animate={{
              opacity: 1
            }} transition={{
              duration: .5,
              delay: a ? .1 : .55,
              ease: u
            }} className="mt-auto pt-10"><p className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">New business</p><a href="mailto:hello@northline.studio" className={`mt-2 inline-block rounded-sm text-base font-medium text-neutral-950 transition-colors duration-200 hover:text-neutral-500 dark:text-white dark:hover:text-neutral-400 ${f}`}>hello@northline.studio</a><div className="mt-6 grid gap-3 sm:grid-cols-2"><a href="#" className={`rounded-full border border-neutral-300 px-5 py-3 text-center text-sm font-medium text-neutral-900 transition-colors duration-200 hover:bg-neutral-50 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-900 ${f}`}>Book a call</a><a href="#" className={`inline-flex items-center justify-center gap-1.5 rounded-full bg-black px-5 py-3 text-sm font-medium text-white transition-colors duration-200 hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200 ${f}`}>Start a project<ArrowUpRight className="h-4 w-4" /></a></div></motion.div></div></motion.div>}</__mod_47962.N></div></header>;
}

export default v;

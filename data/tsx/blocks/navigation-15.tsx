import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import * as __mod_50969 from "../_helpers/50969";
import * as __mod_47962 from "../_helpers/47962";
/**
 * Navigation 15
 * Quiet nav with a traveling underline
 * slug: navigation-15
 * category: Navigation
 * export: Navigation15
 * deps: lucide-react, motion
 * original: ts-tailwind/blocks/navigation/navigation-15.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let u = [.22, 1, .36, 1],
  x = ["Work", "Services", "About", "Journal"],
  h = "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-white dark:focus-visible:ring-offset-neutral-950";
function m() {
  let [e, t] = (0, React.useState)(null),
    [a, m] = (0, React.useState)(!1),
    p = (0, __mod_50969.I)(),
    b = e ?? "Work";
  (0, React.useEffect)(() => {
    if (!a) return;
    let e = e => {
        "Escape" === e.key && m(!1);
      },
      t = document.body.style.overflow;
    return document.body.style.overflow = "hidden", window.addEventListener("keydown", e), () => {
      document.body.style.overflow = t, window.removeEventListener("keydown", e);
    };
  }, [a]), (0, React.useEffect)(() => {
    let e = window.matchMedia("(min-width: 768px)"),
      t = e => {
        e.matches && m(!1);
      };
    return e.addEventListener("change", t), () => e.removeEventListener("change", t);
  }, []);
  let f = {
    hidden: {
      opacity: 0,
      x: 20 * !p
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: .45,
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
      }} className="border-b border-neutral-200 dark:border-neutral-800" aria-label="Primary"><div className="mx-auto flex w-full max-w-[1400px] items-center justify-between gap-4 py-5"><a href="#" className={`flex items-center gap-2.5 rounded-sm text-lg font-semibold tracking-tight text-neutral-950 dark:text-white ${h}`}><span className="h-2.5 w-2.5 rounded-[3px] bg-neutral-950 dark:bg-white" />Plainform</a><div className="hidden items-center gap-8 md:flex" onMouseLeave={() => t(null)}>{x.map(e => <a href="#" onMouseEnter={() => t(e)} onFocus={() => t(e)} onBlur={() => t(null)} aria-current={"Work" === e ? "page" : void 0} className={`relative rounded-sm py-2 text-sm font-medium transition-colors duration-200 ${h} ${b === e ? "text-neutral-950 dark:text-white" : "text-neutral-500 dark:text-neutral-400"}`}>{e}{b === e && <motion.span layoutId="nav15-line" className="absolute inset-x-0 bottom-0 h-px bg-neutral-950 dark:bg-white" transition={{
                duration: .3,
                ease: u
              }} />}</a>)}</div><div className="hidden items-center gap-3 md:flex"><a href="#" className={`rounded-sm text-sm font-medium text-neutral-500 transition-colors duration-200 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white ${h}`}>Log in</a><a href="#" className={`inline-flex items-center gap-1.5 rounded-full border border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-950 transition-colors duration-200 hover:bg-neutral-950 hover:text-white dark:border-neutral-700 dark:text-white dark:hover:bg-white dark:hover:text-neutral-950 ${h}`}>Talk to us<ArrowUpRight className="h-4 w-4" /></a></div><button type="button" onClick={() => m(!0)} aria-expanded={a} aria-controls="nav15-drawer" aria-label="Open menu" className={`flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-neutral-200 text-neutral-950 transition-colors duration-200 hover:bg-neutral-50 dark:border-neutral-800 dark:text-white dark:hover:bg-neutral-900 md:hidden ${h}`}><Menu className="h-5 w-5" /></button></div></motion.nav><__mod_47962.N>{a && <><motion.div initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} exit={{
            opacity: 0
          }} transition={{
            duration: .25,
            ease: u
          }} className="fixed inset-0 z-40 bg-neutral-950/40 backdrop-blur-[2px] md:hidden" onClick={() => m(!1)} aria-hidden="true" /><motion.aside id="nav15-drawer" role="dialog" aria-modal="true" aria-label="Menu" initial={p ? {
            opacity: 0
          } : {
            x: "100%"
          }} animate={p ? {
            opacity: 1
          } : {
            x: 0
          }} exit={p ? {
            opacity: 0
          } : {
            x: "100%"
          }} transition={{
            duration: p ? .2 : .5,
            ease: u
          }} className="fixed inset-0 z-50 flex w-full flex-col overflow-y-auto bg-white px-6 pb-8 pt-5 dark:bg-neutral-950 md:hidden"><div className="flex items-center justify-between border-b border-neutral-200 pb-5 dark:border-neutral-800"><span className="flex items-center gap-2.5 text-lg font-semibold tracking-tight text-neutral-950 dark:text-white"><span className="h-2.5 w-2.5 rounded-[3px] bg-neutral-950 dark:bg-white" />Plainform</span><button type="button" onClick={() => m(!1)} aria-label="Close menu" className={`flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-neutral-200 text-neutral-950 transition-colors duration-200 hover:bg-neutral-50 dark:border-neutral-800 dark:text-white dark:hover:bg-neutral-900 ${h}`}><X className="h-5 w-5" /></button></div><motion.nav initial="hidden" animate="visible" variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: .06,
                  delayChildren: .2 * !p
                }
              }
            }} className="mt-8 flex flex-col" aria-label="Menu links"><motion.p variants={f} className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">Menu</motion.p>{x.map(e => <motion.a href="#" variants={f} onClick={() => m(!1)} className={`group flex items-center justify-between border-b border-neutral-200 py-4 dark:border-neutral-800 ${h}`}><span className="text-2xl font-semibold tracking-tight text-neutral-950 transition-colors duration-200 group-hover:text-neutral-500 dark:text-white dark:group-hover:text-neutral-400">{e}</span><ArrowUpRight className="h-5 w-5 text-neutral-400 transition-colors duration-200 group-hover:text-neutral-950 dark:text-neutral-600 dark:group-hover:text-white" /></motion.a>)}</motion.nav><motion.div initial={{
              opacity: 0
            }} animate={{
              opacity: 1
            }} transition={{
              duration: .5,
              delay: p ? .1 : .5,
              ease: u
            }} className="mt-auto pt-10"><p className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">Get in touch</p><a href="mailto:studio@plainform.co" className={`mt-2 inline-block rounded-sm text-base font-medium text-neutral-950 transition-colors duration-200 hover:text-neutral-500 dark:text-white dark:hover:text-neutral-400 ${h}`}>studio@plainform.co</a><div className="mt-6 grid gap-2"><a href="#" className={`rounded-full border border-neutral-300 px-5 py-3 text-center text-sm font-medium text-neutral-950 transition-colors duration-200 hover:bg-neutral-50 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-900 ${h}`}>Log in</a><a href="#" className={`inline-flex items-center justify-center gap-1.5 rounded-full bg-black px-5 py-3 text-sm font-medium text-white transition-colors duration-200 hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200 ${h}`}>Talk to us<ArrowUpRight className="h-4 w-4" /></a></div></motion.div></motion.aside></>}</__mod_47962.N></div></header>;
}

export default m;

import { motion, AnimatePresence } from "motion/react";
import { Download, Flame, Github, Menu, Twitter, X } from "lucide-react";
import * as __mod_47962 from "../_helpers/47962";
/**
 * Navigation 10
 * Light nav with a status pill
 * slug: navigation-10
 * category: Navigation
 * export: Navigation10
 * deps: lucide-react, motion
 * original: ts-tailwind/blocks/navigation/navigation-10.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

function p() {
  let [e, t] = (0, React.useState)(!1);
  return <section className="relative w-full min-h-[var(--rb-section-min-h,100vh)] bg-white dark:bg-neutral-950 flex items-start"><div className="w-full"><motion.nav initial={{
        opacity: 0,
        y: -6
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: .5
      }} className="grid grid-cols-[1fr_auto_1fr] items-center gap-3 sm:gap-4 px-4 sm:px-8 py-5 border-b border-dashed border-neutral-300 dark:border-neutral-800"><a href="#" className="flex items-center gap-2"><span className="grid place-items-center h-7 w-7 shrink-0 rounded-full bg-neutral-900 dark:bg-white"><Flame className="h-3.5 w-3.5 text-white dark:text-neutral-900" strokeWidth={2.2} /></span><span className="tracking-[0.2em] text-sm font-semibold text-neutral-900 dark:text-white">NORTHWIND</span></a><a href="#" className="hidden lg:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 shadow-sm hover:shadow transition-shadow"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />Early access is open. Northwind is live on iOS<span className="text-neutral-400">›</span></a><div className="col-start-3 flex items-center justify-end"><button className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-xs font-semibold tracking-[0.15em] cursor-pointer mr-1.5"><Download className="h-4 w-4" strokeWidth={2.2} /><span className="hidden sm:inline">DOWNLOAD</span></button><div className="h-9 w-9 shrink-0" aria-hidden="true" /></div></motion.nav><__mod_47962.N>{e && <motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} exit={{
          opacity: 0
        }} transition={{
          duration: .25
        }} onClick={() => t(!1)} className="fixed inset-0 bg-black/40 z-40" />}</__mod_47962.N><__mod_47962.N>{e && <motion.aside initial={{
          clipPath: "circle(0% at calc(100% - 18px) 18px)"
        }} animate={{
          clipPath: "circle(150% at calc(100% - 18px) 18px)"
        }} exit={{
          clipPath: "circle(0% at calc(100% - 18px) 18px)"
        }} transition={{
          duration: .5,
          ease: [.22, 1, .36, 1]
        }} className="fixed top-[18px] right-4 sm:right-8 w-[min(92vw,420px)] h-[min(85vh,640px)] z-40 rounded-2xl bg-neutral-950 text-white border border-neutral-800 shadow-lg overflow-hidden"><motion.div initial={{
            opacity: 0,
            y: 8
          }} animate={{
            opacity: 1,
            y: 0
          }} exit={{
            opacity: 0,
            y: 8
          }} transition={{
            duration: .25,
            delay: .2
          }} className="absolute inset-0 p-6 sm:p-7 pt-14 flex flex-col"><nav className="flex flex-col gap-2"><a href="#" className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight">Homepage</a><a href="#" className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight">Careers</a></nav><div className="mt-10 pt-6 border-t border-dashed border-neutral-700"><p className="text-[11px] tracking-[0.2em] text-neutral-500">RESOURCES</p><div className="mt-4 flex flex-col gap-3"><a href="#" className="text-base text-neutral-200">Privacy</a><div className="h-px w-full border-t border-dashed border-neutral-800" /><a href="#" className="text-base text-neutral-200">Terms of Service</a></div></div><div className="mt-8 pt-6 border-t border-dashed border-neutral-700 flex items-center gap-2"><a href="#" className="grid place-items-center h-9 w-9 rounded-md bg-neutral-800 text-white" aria-label="Twitter"><Twitter className="h-4 w-4" /></a><a href="#" className="grid place-items-center h-9 w-9 rounded-md bg-neutral-800 text-white" aria-label="GitHub"><Github className="h-4 w-4" /></a></div><div className="mt-auto pt-8"><button className="w-full inline-flex items-center justify-between px-5 py-4 rounded-full border border-neutral-700 text-white text-xs font-semibold tracking-[0.2em] hover:bg-neutral-900 transition-colors cursor-pointer">DOWNLOAD THE APP<Download className="h-4 w-4" strokeWidth={2.2} /></button></div></motion.div></motion.aside>}</__mod_47962.N><div className="fixed top-5 right-4 sm:right-8 z-50 h-9 w-9 pointer-events-none"><motion.div initial={!1} animate={{
          opacity: +!e
        }} transition={{
          duration: .2 * !e,
          delay: .35 * !e
        }} className="absolute inset-0 rounded-full bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800" /><motion.button onClick={() => t(e => !e)} initial={!1} animate={{
          x: e ? -1 : 0
        }} transition={{
          duration: .25
        }} className="absolute inset-0 grid place-items-center rounded-full cursor-pointer pointer-events-auto" aria-label={e ? "Close menu" : "Open menu"}><span className="grid place-items-center text-white" style={{
            mixBlendMode: "difference"
          }}><__mod_47962.N mode="wait" initial={!1}>{e ? <motion.span initial={{
                opacity: 0
              }} animate={{
                opacity: 1
              }} exit={{
                opacity: 0
              }} transition={{
                duration: .15
              }} className="grid place-items-center"><X className="h-4 w-4" /></motion.span> : <motion.span initial={{
                opacity: 0
              }} animate={{
                opacity: 1
              }} exit={{
                opacity: 0
              }} transition={{
                duration: .15
              }} className="grid place-items-center"><Menu className="h-4 w-4" /></motion.span>}</__mod_47962.N></span></motion.button></div></div></section>;
}

export default p;

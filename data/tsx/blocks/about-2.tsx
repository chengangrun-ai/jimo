import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import * as __mod_47962 from "../_helpers/47962";
/**
 * About 2
 * Timeline with a progress bar
 * slug: about-2
 * category: About
 * export: About2
 * deps: lucide-react, motion
 * original: ts-tailwind/blocks/about/about-2.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let o = [{
  id: 1,
  title: "Beta Launch",
  date: "Jan 2020",
  month: "Jan",
  year: "2020",
  description: "Released our first AI code assistant with intelligent suggestions and automated refactoring for developers.",
  image: "/svg/placeholder.svg"
}, {
  id: 2,
  title: "GPT Integration",
  date: "Aug 2021",
  month: "Aug",
  year: "2021",
  description: "Integrated GPT-3 for natural language code generation, boosting developer productivity across all languages.",
  image: "/svg/placeholder.svg"
}, {
  id: 3,
  title: "Team Edition",
  date: "Mar 2022",
  month: "Mar",
  year: "2022",
  description: "Launched Team Edition with collaborative features and analytics to help engineering teams scale.",
  image: "/svg/placeholder.svg"
}, {
  id: 4,
  title: "Code Security",
  date: "Oct 2022",
  month: "Oct",
  year: "2022",
  description: "Introduced AI-powered security scanning that detects vulnerabilities in real-time.",
  image: "/svg/placeholder.svg"
}, {
  id: 5,
  title: "Mobile SDK",
  date: "Apr 2023",
  month: "Apr",
  year: "2023",
  description: "Released mobile SDK for iOS and Android with platform-specific AI optimizations.",
  image: "/svg/placeholder.svg"
}, {
  id: 6,
  title: "Enterprise",
  date: "Nov 2023",
  month: "Nov",
  year: "2023",
  description: "Launched Enterprise tier with on-premise deployment and custom model training.",
  image: "/svg/placeholder.svg"
}];
function c({
  displayNavigation: e = !0
} = {}) {
  let [t, a] = (0, React.useState)(0),
    [l, s] = (0, React.useState)(0),
    n = (0, React.useRef)(null);
  (0, React.useEffect)(() => {
    let e = setInterval(() => {
      a(e => {
        let t = (e + 1) % o.length;
        return d(t), t;
      });
    }, 1e4);
    return () => clearInterval(e);
  }, [l]);
  let d = e => {
      if (n.current) {
        let t = n.current,
          a = t.scrollWidth / o.length;
        t.scrollTo({
          left: a * e,
          behavior: "smooth"
        });
      }
    },
    h = o[t];
  return <section className="w-full py-12 px-4 sm:px-6 lg:px-8 bg-white dark:bg-neutral-950"><div className="max-w-[1400px] mx-auto w-full"><UB /><MB entry={h} /><div className="mt-12 sm:mt-16"><XB activeIndex={t} onIndexChange={e => {
          a(e), d(e), s(e => e + 1);
        }} displayNavigation={e} onPrevious={() => {
          let e = Math.max(0, t - 1);
          a(e), d(e), s(e => e + 1);
        }} onNext={() => {
          let e = Math.min(o.length - 1, t + 1);
          a(e), d(e), s(e => e + 1);
        }} timelineRef={n} /></div></div></section>;
}
function u() {
  return <motion.div initial={{
    opacity: 0,
    y: 20
  }} animate={{
    opacity: 1,
    y: 0
  }} transition={{
    duration: .5
  }} className="mb-8 sm:mb-12"><h1 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-neutral-900 dark:text-white">Our journey in AI</h1></motion.div>;
}
function m({
  entry: e
}) {
  return <div className="relative bg-neutral-50 dark:bg-neutral-900 rounded-3xl p-6 overflow-hidden"><div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"><div className="flex flex-col justify-between h-full"><__mod_47962.N mode="wait"><motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} exit={{
            opacity: 0,
            y: -20
          }} transition={{
            duration: .3
          }}><div className="text-sm sm:text-base font-medium text-purple-500">{e.year}</div></motion.div></__mod_47962.N><__mod_47962.N mode="wait"><motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} exit={{
            opacity: 0,
            y: -20
          }} transition={{
            duration: .3
          }} className="space-y-2"><h2 className="text-3xl font-medium tracking-tight text-neutral-900 dark:text-white">{e.title}</h2><p className="text-base tracking-tight text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-xl">{e.description}</p></motion.div></__mod_47962.N></div><div className="flex items-center justify-center lg:justify-end"><__mod_47962.N mode="wait"><motion.div initial={{
            opacity: 0,
            scale: .9
          }} animate={{
            opacity: 1,
            scale: 1
          }} exit={{
            opacity: 0,
            scale: .9
          }} transition={{
            duration: .3
          }} className="relative w-full lg:max-w-xs aspect-square max-h-[300px] mx-auto lg:mx-0 lg:ml-auto"><div className="w-full h-full rounded-md bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center overflow-hidden"><img src={e.image} alt={e.title} className="w-3/4 h-3/4 object-contain" /></div></motion.div></__mod_47962.N></div></div></div>;
}
function x({
  activeIndex: e,
  onIndexChange: t,
  displayNavigation: a,
  onPrevious: i,
  onNext: s,
  timelineRef: c
}) {
  return <div className="space-y-8"><div ref={c} className="md:hidden overflow-x-auto scrollbar-hide -mx-4 px-4" style={{
      scrollbarWidth: "none",
      msOverflowStyle: "none"
    }}><div className="min-w-[900px] space-y-8"><div className="grid grid-cols-6 gap-8">{o.map((a, i) => <button onClick={() => t(i)} className="text-left whitespace-nowrap"><div className={`text-xs sm:text-sm font-medium transition-colors duration-200 ${i === e ? "text-neutral-900 dark:text-white" : "text-neutral-400 dark:text-neutral-600"}`}>{a.title}</div></button>)}</div><div className="relative"><div className="absolute top-1/2 left-0 right-0 h-0.5 bg-neutral-200 dark:bg-neutral-800 -translate-y-1/2" /><motion.div className="absolute top-1/2 left-0 h-0.5 bg-neutral-900 dark:bg-white -translate-y-1/2" initial={!1} animate={{
            width: 0 === e ? 0 : `calc(((100% - (5 * 2rem)) / 6) * ${e} + (2rem * ${e}))`
          }} transition={{
            duration: .4,
            ease: [.32, .72, 0, 1]
          }} /><div className="relative grid grid-cols-6 gap-8">{o.map((a, i) => {
              let s = i === e,
                n = i <= e;
              return <button onClick={() => t(i)} className="flex flex-col items-start"><div className="relative w-full flex justify-start"><motion.div className={`w-3 h-3 rounded-full border-2 transition-colors duration-200 ${n ? "bg-neutral-900 dark:bg-white border-neutral-900 dark:border-white" : "bg-white dark:bg-neutral-950 border-neutral-200 dark:border-neutral-800"}`} animate={{
                    scale: s ? 1.4 : 1
                  }} transition={{
                    duration: .2
                  }} /></div></button>;
            })}</div></div><div className="grid grid-cols-6 gap-8">{o.map((a, i) => <button onClick={() => t(i)} className="text-left whitespace-nowrap"><div className={`text-xs sm:text-sm transition-colors duration-200 ${i === e ? "text-neutral-900 dark:text-white font-medium" : "text-neutral-400 dark:text-neutral-600"}`}>{a.date}</div></button>)}</div></div></div>{a && <div className="flex justify-center gap-2 md:hidden"><button onClick={i} disabled={0 === e} className="w-10 h-10 rounded-full border border-neutral-300 dark:border-neutral-700 flex items-center justify-center hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors duration-200 disabled:opacity-30 disabled:cursor-not-allowed" aria-label="Previous"><ChevronLeft className="w-5 h-5 text-neutral-900 dark:text-white" /></button><button onClick={s} disabled={e === o.length - 1} className="w-10 h-10 rounded-full border border-neutral-300 dark:border-neutral-700 flex items-center justify-center hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors duration-200 disabled:opacity-30 disabled:cursor-not-allowed" aria-label="Next"><ChevronRight className="w-5 h-5 text-neutral-900 dark:text-white" /></button></div>}<div className="hidden md:block space-y-8"><div className="grid grid-cols-6 gap-2 sm:gap-4">{o.map((a, i) => <button onClick={() => t(i)} className="text-left"><div className={`text-xs sm:text-sm font-medium transition-colors duration-200 ${i === e ? "text-neutral-900 dark:text-white" : "text-neutral-400 dark:text-neutral-600"}`}>{a.title}</div></button>)}</div><div className="relative"><div className="absolute top-1/2 left-0 right-0 h-0.5 bg-neutral-200 dark:bg-neutral-800 -translate-y-1/2" /><motion.div className="absolute top-1/2 left-0 h-0.5 bg-neutral-900 dark:bg-white -translate-y-1/2 sm:hidden" initial={!1} animate={{
          width: 0 === e ? 0 : `calc(((100% - (5 * 0.5rem)) / 6) * ${e} + (0.5rem * ${e}))`
        }} transition={{
          duration: .4,
          ease: [.32, .72, 0, 1]
        }} /><motion.div className="hidden sm:block absolute top-1/2 left-0 h-0.5 bg-neutral-900 dark:bg-white -translate-y-1/2" initial={!1} animate={{
          width: 0 === e ? 0 : `calc(((100% - (5 * 1rem)) / 6) * ${e} + (1rem * ${e}))`
        }} transition={{
          duration: .4,
          ease: [.32, .72, 0, 1]
        }} /><div className="relative grid grid-cols-6 gap-2 sm:gap-4">{o.map((a, i) => {
            let s = i === e,
              n = i <= e;
            return <button onClick={() => t(i)} className="flex flex-col items-start"><div className="relative w-full flex justify-start"><motion.div className={`w-3 h-3 rounded-full border-2 transition-colors duration-200 ${n ? "bg-neutral-900 dark:bg-white border-neutral-900 dark:border-white" : "bg-white dark:bg-neutral-950 border-neutral-200 dark:border-neutral-800"}`} animate={{
                  scale: s ? 1.4 : 1
                }} transition={{
                  duration: .2
                }} /></div></button>;
          })}</div></div><div className="grid grid-cols-6 gap-2 sm:gap-4">{o.map((a, i) => <button onClick={() => t(i)} className="text-left"><div className={`text-xs border transition-colors w-fit px-2 py-1 rounded-full duration-200 ${i === e ? "text-white bg-neutral-900 border-neutral-500/20" : "text-neutral-400 dark:text-neutral-600 border-transparent"}`}>{a.date}</div></button>)}</div>{a && <div className="hidden md:flex justify-end gap-2"><button onClick={i} disabled={0 === e} className="w-8 h-8 rounded-md border border-neutral-300 dark:border-neutral-700 flex items-center justify-center hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors duration-200 disabled:opacity-30 disabled:cursor-not-allowed" aria-label="Previous"><ChevronLeft className="w-4 h-4 text-neutral-900 dark:text-white" /></button><button onClick={s} disabled={e === o.length - 1} className="w-8 h-8 rounded-md border border-neutral-300 dark:border-neutral-700 flex items-center justify-center hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors duration-200 disabled:opacity-30 disabled:cursor-not-allowed" aria-label="Next"><ChevronRight className="w-4 h-4 text-neutral-900 dark:text-white" /></button></div>}</div></div>;
}

const UB: any = u;
const MB: any = m;
const XB: any = x;

export default c;

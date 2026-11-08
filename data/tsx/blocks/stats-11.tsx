import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight } from "lucide-react";
/**
 * Stats 11
 * Pastel stat cards with timeframe badges
 * slug: stats-11
 * category: Stats
 * export: Stats11
 * deps: lucide-react, motion
 * original: ts-tailwind/blocks/stats/stats-11.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let n = [{
  title: "Active developers",
  label: "Monthly",
  value: "184K",
  source: "Analytics",
  bg: "#c7e8d4",
  tint: "#4a8f6b"
}, {
  title: "Requests served",
  label: "Per day",
  value: "92.4M",
  source: "Edge network",
  bg: "#dcd0f5",
  tint: "#6b5aa3"
}, {
  title: "Uptime",
  label: "Last 12 months",
  value: "99.9%",
  source: "Status page",
  bg: "#ffd4b8",
  tint: "#b86535"
}];
function o() {
  let [e, t] = (0, React.useState)(0),
    [a, o] = (0, React.useState)(!1);
  return (0, React.useEffect)(() => {
    let e = window.matchMedia("(min-width: 768px)"),
      t = () => o(e.matches);
    return t(), e.addEventListener("change", t), () => e.removeEventListener("change", t);
  }, []), (0, React.useEffect)(() => {
    if (!a) return;
    let e = setInterval(() => {
      t(e => (e + 1) % n.length);
    }, 2200);
    return () => clearInterval(e);
  }, [a]), <section className="w-full min-h-[var(--rb-section-min-h,100vh)] flex items-start py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-neutral-950"><div className="max-w-[1400px] mx-auto w-full"><motion.div initial={{
        opacity: 0,
        y: 12
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: !0
      }} transition={{
        duration: .5
      }} className="text-center"><h2 className="text-5xl sm:text-6xl md:text-7xl font-bold text-neutral-900 dark:text-white tracking-tight">The numbers</h2><p className="mt-3 text-base sm:text-lg text-neutral-500 dark:text-neutral-500">A live look at the platform, refreshed continuously.</p></motion.div><div className="mt-10 sm:mt-14 grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">{n.map((t, r) => <div className="md:h-[470px] flex items-end"><motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: !0
          }} animate={a ? {
            height: e === r ? 470 : 380,
            color: e === r ? "#171717" : t.tint
          } : {
            height: "auto",
            color: "#171717"
          }} transition={{
            opacity: {
              duration: .5,
              delay: .1 * r
            },
            y: {
              duration: .5,
              delay: .1 * r
            },
            height: {
              duration: .9,
              ease: [.22, 1, .36, 1]
            },
            color: {
              duration: .9,
              ease: [.22, 1, .36, 1]
            }
          }} style={{
            backgroundColor: t.bg
          }} className="w-full rounded-2xl p-6 sm:p-8 flex flex-col justify-between gap-10 overflow-hidden"><span className="text-xl sm:text-2xl font-medium">{t.title}</span><div className="flex flex-col gap-2">{t.label && <span className="text-2xl sm:text-3xl font-medium">{t.label}</span>}<span className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight">{t.value}</span><a href="#" className="mt-4 inline-flex items-center gap-1 text-xs sm:text-sm font-bold hover:underline"><ArrowUpRight className="w-3.5 h-3.5" />{t.source}</a></div></motion.div></div>)}</div></div></section>;
}

export default o;

import { motion, AnimatePresence } from "motion/react";
import * as __mod_87974 from "../_helpers/87974";
/**
 * Stats 10
 * Color-blocked cards with count-ups
 * slug: stats-10
 * category: Stats
 * export: Stats10
 * deps: motion
 * original: ts-tailwind/blocks/stats/stats-10.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let n = [{
  value: 2400,
  format: e => `${Math.round(e).toString().padStart(4, "0")}+`,
  label: "Teams shipping every week with our platform",
  bg: "#e4f1e8",
  fg: "#0e2a18"
}, {
  value: 4.9,
  format: e => e.toFixed(2),
  label: "Average developer rating across 8,200 reviews",
  bg: "#122018",
  fg: "#c7e8d4"
}, {
  value: 83,
  format: e => `${Math.round(e).toString().padStart(2, "0")}%`,
  label: "Faster time-to-first-deploy for new engineers",
  bg: "#dcd0f5",
  fg: "#1e163d"
}, {
  value: 99.99,
  format: e => `${e.toFixed(2).padStart(5, "0")}%`,
  label: "Platform uptime measured over the last 12 months",
  bg: "#ffd4b8",
  fg: "#3a1a08"
}];
function o({
  to: e,
  format: t,
  duration: a = 2.4
}) {
  let i = (0, React.useRef)(null);
  return (0, React.useEffect)(() => {
    let l = i.current;
    if (!l) return;
    let s = (0, __mod_87974.i)(0, e, {
      duration: a,
      ease: [.33, 1, .68, 1],
      onUpdate: e => {
        l.textContent = t(e);
      }
    });
    return () => s.stop();
  }, [e, a, t]), <span ref={i}>{t(0)}</span>;
}
function m() {
  return <section className="w-full min-h-[var(--rb-section-min-h,100vh)] flex items-start sm:items-center py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-neutral-950"><div className="max-w-[1400px] mx-auto w-full"><motion.h2 initial={{
        opacity: 0,
        y: 16
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: !0
      }} transition={{
        duration: .6
      }} className="text-center text-3xl sm:text-5xl md:text-6xl font-normal text-neutral-900 dark:text-white tracking-tight leading-[1.1]">Built for teams<br />who ship <em className="font-serif italic">relentlessly</em></motion.h2><div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">{n.map((e, t) => <motion.div initial={{
          opacity: 0,
          y: 24
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: !0
        }} transition={{
          duration: .5,
          delay: .1 * t
        }} whileHover={{
          y: -4
        }} className="rounded-2xl p-6 sm:p-8 flex flex-col justify-between min-h-[280px] sm:min-h-[340px]" style={{
          backgroundColor: e.bg,
          color: e.fg
        }}><span className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight tabular-nums"><o to={e.value} format={e.format} /></span><span className="text-sm sm:text-base leading-snug max-w-[220px]">{e.label}</span></motion.div>)}</div></div></section>;
}

export default m;

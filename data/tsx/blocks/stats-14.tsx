import { motion, AnimatePresence } from "motion/react";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import * as __mod_50969 from "../_helpers/50969";
import * as __mod_87974 from "../_helpers/87974";
/**
 * Stats 14
 * Stat cards with sparklines and deltas
 * slug: stats-14
 * category: Stats
 * export: Stats14
 * deps: lucide-react, motion
 * original: ts-tailwind/blocks/stats/stats-14.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let c = [.22, 1, .36, 1],
  u = [{
    label: "Median build time",
    value: 46,
    decimals: 0,
    unit: "s",
    delta: "−18%",
    improved: "down",
    caption: "Rolling 90-day window",
    series: [88, 84, 86, 79, 74, 76, 68, 63, 65, 58, 52, 46]
  }, {
    label: "Deploys per week",
    value: 312,
    decimals: 0,
    unit: "",
    delta: "+24%",
    improved: "up",
    caption: "Across 41 production services",
    series: [180, 195, 188, 210, 224, 218, 246, 252, 268, 284, 296, 312]
  }, {
    label: "Error budget intact",
    value: 99.2,
    decimals: 1,
    unit: "%",
    delta: "+0.4 pts",
    improved: "up",
    caption: "Fleet-wide, current quarter",
    series: [97.1, 97.4, 97.2, 97.8, 98.1, 97.9, 98.4, 98.6, 98.5, 98.9, 99, 99.2]
  }].map(e => {
    var t;
    let a, r, i, l, n;
    return {
      ...e,
      chart: (a = Math.min(...(t = e.series)), r = Math.max(...t) - a || 1, l = (i = t.map((e, i) => ({
        x: 5 + i / (t.length - 1) * 230,
        y: 62 - (e - a) / r * 50
      }))).map((e, t) => `${0 === t ? "M" : "L"} ${e.x.toFixed(1)} ${e.y.toFixed(1)}`).join(" "), n = `${l} L ${i[i.length - 1].x.toFixed(1)} 68 L ${i[0].x.toFixed(1)} 68 Z`, {
        line: l,
        area: n,
        last: i[i.length - 1]
      })
    };
  }),
  x = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: .12
      }
    }
  },
  m = {
    hidden: {
      opacity: 0,
      y: 24
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: .6,
        ease: c,
        delayChildren: .3
      }
    }
  },
  h = {
    hidden: {
      pathLength: 0,
      opacity: 0
    },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: c
      }
    }
  },
  p = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        duration: .8,
        ease: c,
        delay: .6
      }
    }
  },
  k = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        duration: .3,
        ease: c,
        delay: 1.2
      }
    }
  };
function v({
  value: e,
  decimals: t = 0
}) {
  let a = (0, React.useRef)(null),
    s = (0, __mod_50969.I)();
  return (0, React.useEffect)(() => {
    let r = a.current;
    if (!r) return;
    if (s) {
      r.textContent = e.toFixed(t);
      return;
    }
    let i = (0, __mod_87974.i)(0, e, {
      duration: 1.2,
      ease: c,
      onUpdate: e => {
        r.textContent = e.toFixed(t);
      }
    });
    return () => i.stop();
  }, [e, t, s]), <span ref={a}>{0..toFixed(t)}</span>;
}
function g() {
  let e = (0, __mod_50969.I)(),
    t = e ? void 0 : h,
    a = e ? void 0 : p,
    i = e ? void 0 : k;
  return <section className="w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-neutral-950"><div className="max-w-[1400px] mx-auto w-full"><motion.div initial={{
        opacity: 0,
        y: 24
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: !0,
        margin: "-80px"
      }} transition={{
        duration: .7,
        ease: c
      }} className="max-w-2xl"><h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-tight text-neutral-900 dark:text-white">The pipeline, at a glance.</h2><p className="mt-5 text-base sm:text-lg leading-relaxed text-neutral-600 dark:text-neutral-400">Ninety days of delivery data, reduced to the three numbers our own team checks every morning.</p></motion.div><motion.div variants={x} initial="hidden" whileInView="visible" viewport={{
        once: !0,
        margin: "-80px"
      }} className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">{u.map(e => <motion.article variants={m} className="flex flex-col rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 p-6 sm:p-8"><div className="flex items-center justify-between gap-4"><h3 className="text-sm font-medium text-neutral-600 dark:text-neutral-400">{e.label}</h3><span className="inline-flex shrink-0 items-center gap-1 rounded-full border border-neutral-200 dark:border-neutral-800 px-2.5 py-1 text-xs font-medium tabular-nums text-neutral-600 dark:text-neutral-400">{"up" === e.improved ? <ArrowUpRight className="h-3 w-3" aria-hidden="true" /> : <ArrowDownRight className="h-3 w-3" aria-hidden="true" />}{e.delta}</span></div><div className="mt-6 flex items-baseline gap-1.5"><span className="text-5xl sm:text-6xl font-semibold tracking-tight tabular-nums text-neutral-900 dark:text-white"><v value={e.value} decimals={e.decimals} /></span>{e.unit && <span className="text-2xl font-medium text-neutral-400 dark:text-neutral-500">{e.unit}</span>}</div><p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">{e.caption}</p><div className="mt-8 border-t border-neutral-100 dark:border-neutral-900 pt-6"><svg viewBox="0 0 240 72" className="h-auto w-full" aria-hidden="true"><line x1="5" y1={68} x2={235} y2={68} stroke="currentColor" strokeWidth="1" vectorEffect="non-scaling-stroke" className="text-neutral-200 dark:text-neutral-800" /><line x1="5" y1="14" x2={235} y2="14" stroke="currentColor" strokeWidth="1" strokeDasharray="2 4" vectorEffect="non-scaling-stroke" className="text-neutral-200 dark:text-neutral-800" /><motion.path variants={a} d={e.chart.area} fill="currentColor" className="text-neutral-900/[0.05] dark:text-white/[0.07]" /><motion.path variants={t} d={e.chart.line} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-900 dark:text-white" /><motion.circle variants={i} cx={e.chart.last.x} cy={e.chart.last.y} r="3.5" fill="currentColor" className="text-neutral-900 dark:text-white" /></svg></div></motion.article>)}</motion.div></div></section>;
}

export default g;

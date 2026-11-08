import { motion, AnimatePresence } from "motion/react";
import { ShieldCheck, TrendingUp } from "lucide-react";
import * as __mod_50969 from "../_helpers/50969";
import * as __mod_87974 from "../_helpers/87974";
/**
 * Stats 12
 * Yield story with animated rate bars
 * slug: stats-12
 * category: Stats
 * export: Stats12
 * deps: lucide-react, motion
 * original: ts-tailwind/blocks/stats/stats-12.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let u = [.22, 1, .36, 1],
  m = [{
    label: "Meridian Treasury",
    value: 4.9,
    width: 100,
    featured: !0
  }, {
    label: "Fintech average",
    value: 3.1,
    width: 58,
    featured: !1
  }, {
    label: "National banks",
    value: .4,
    width: 9,
    featured: !1
  }],
  c = [{
    label: "Meridian Vault",
    value: 3,
    suffix: "M",
    barClass: "h-52 sm:h-60",
    featured: !0
  }, {
    label: "Industry standard",
    value: 250,
    suffix: "K",
    barClass: "h-16 sm:h-20",
    featured: !1
  }],
  o = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: .1
      }
    }
  },
  h = {
    hidden: {
      opacity: 0,
      y: 24
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: .6,
        ease: u,
        when: "beforeChildren",
        staggerChildren: .12
      }
    }
  },
  p = {
    hidden: {
      scaleX: 0
    },
    visible: {
      scaleX: 1,
      transition: {
        duration: .9,
        ease: u
      }
    }
  },
  f = {
    hidden: {
      scaleY: 0
    },
    visible: {
      scaleY: 1,
      transition: {
        duration: .9,
        ease: u
      }
    }
  },
  g = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        duration: .5,
        ease: u
      }
    }
  };
function b({
  value: e,
  decimals: t = 0
}) {
  let a = (0, React.useRef)(null),
    n = (0, __mod_50969.I)();
  return (0, React.useEffect)(() => {
    let l = a.current;
    if (!l) return;
    if (n) {
      l.textContent = e.toFixed(t);
      return;
    }
    let r = (0, __mod_87974.i)(0, e, {
      duration: 1.2,
      ease: u,
      onUpdate: e => {
        l.textContent = e.toFixed(t);
      }
    });
    return () => r.stop();
  }, [e, t, n]), <span ref={a}>{0..toFixed(t)}</span>;
}
function k() {
  let e = (0, __mod_50969.I)(),
    t = e ? void 0 : p,
    a = e ? void 0 : f;
  return <section className="w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-neutral-950"><div className="max-w-[1400px] mx-auto w-full"><motion.div variants={o} initial="hidden" whileInView="visible" viewport={{
        once: !0,
        margin: "-80px"
      }} className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4"><motion.div variants={h} className="flex min-h-[340px] flex-col rounded-3xl bg-neutral-50 dark:bg-neutral-900 p-8 sm:p-10 lg:p-12"><div className="flex items-center gap-2.5"><TrendingUp className="h-4 w-4 text-neutral-500 dark:text-neutral-400" aria-hidden="true" /><span className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400">Grow reserves</span></div><h2 className="mt-8 max-w-md text-3xl sm:text-4xl font-medium tracking-tight leading-[1.15] text-neutral-900 dark:text-white">Yield that outpaces the market.</h2><p className="mt-8 max-w-md text-base sm:text-lg leading-relaxed text-neutral-600 dark:text-neutral-400">Up to 12× the return of a traditional business checking account, with same-day liquidity whenever you need it.</p></motion.div><motion.div variants={h} className="flex min-h-[340px] flex-col rounded-3xl bg-neutral-50 dark:bg-neutral-900 p-8 sm:p-10 lg:p-12"><div className="flex flex-1 flex-col justify-center gap-8 sm:gap-9">{m.map(e => <div><div className="flex items-baseline justify-between gap-6"><span className={e.featured ? "text-sm sm:text-base font-semibold text-neutral-900 dark:text-white" : "text-sm sm:text-base font-medium text-neutral-500 dark:text-neutral-400"}>{e.label}</span><span className={`shrink-0 tabular-nums tracking-tight ${e.featured ? "text-4xl sm:text-5xl font-semibold text-neutral-900 dark:text-white" : "text-2xl sm:text-3xl font-medium text-neutral-400 dark:text-neutral-500"}`}><b value={e.value} decimals={2} /><span className={e.featured ? "ml-1 text-xl sm:text-2xl font-medium text-neutral-400 dark:text-neutral-500" : "ml-1 text-base sm:text-lg text-neutral-400 dark:text-neutral-600"}>%</span></span></div><div className="mt-3"><motion.div variants={t} style={{
                  transformOrigin: "left",
                  width: `${e.width}%`
                }} className={`h-2.5 rounded-full ${e.featured ? "bg-neutral-900 dark:bg-white" : "bg-neutral-300 dark:bg-neutral-700"}`} /></div></div>)}</div></motion.div><motion.div variants={h} className="flex min-h-[340px] items-center rounded-3xl bg-neutral-50 dark:bg-neutral-900 p-8 sm:p-10 lg:p-12"><div className="flex w-full items-end justify-center gap-10 sm:gap-14">{c.map(e => <div className="flex w-full max-w-[8.5rem] flex-col items-center"><motion.span variants={g} className={`mb-4 text-2xl sm:text-3xl font-semibold tracking-tight tabular-nums ${e.featured ? "text-neutral-900 dark:text-white" : "text-neutral-400 dark:text-neutral-500"}`}>$<b value={e.value} />{e.suffix}</motion.span><div className={`w-full ${e.barClass}`}><motion.div variants={a} style={{
                  transformOrigin: "bottom"
                }} className={`h-full w-full rounded-2xl ${e.featured ? "bg-neutral-900 dark:bg-white" : "bg-neutral-300 dark:bg-neutral-700"}`} /></div><span className="mt-4 text-center text-sm font-medium text-neutral-600 dark:text-neutral-400">{e.label}</span></div>)}</div></motion.div><motion.div variants={h} className="flex min-h-[340px] flex-col rounded-3xl bg-neutral-50 dark:bg-neutral-900 p-8 sm:p-10 lg:p-12"><div className="flex items-center gap-2.5"><ShieldCheck className="h-4 w-4 text-neutral-500 dark:text-neutral-400" aria-hidden="true" /><span className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400">Balance protection</span></div><h3 className="mt-8 max-w-md text-3xl sm:text-4xl font-medium tracking-tight leading-[1.15] text-neutral-900 dark:text-white">Your balance. Guarded.</h3><p className="mt-8 max-w-md text-base sm:text-lg leading-relaxed text-neutral-600 dark:text-neutral-400">Deposits are held bankruptcy-remote across our partner bank network, protected up to $3,000,000 per business.</p><p className="mt-auto max-w-md pt-10 text-xs leading-relaxed text-neutral-500 dark:text-neutral-500">Coverage is provided through program banks and is subject to eligibility, policy limits, and the conditions shared at account opening.</p></motion.div></motion.div></div></section>;
}

export default k;

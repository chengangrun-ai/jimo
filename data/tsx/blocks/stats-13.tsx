import { motion, AnimatePresence } from "motion/react";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import * as __mod_50969 from "../_helpers/50969";
import * as __mod_87974 from "../_helpers/87974";
/**
 * Stats 13
 * Annual report ledger of big numbers
 * slug: stats-13
 * category: Stats
 * export: Stats13
 * deps: lucide-react, motion
 * original: ts-tailwind/blocks/stats/stats-13.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let m = [.22, 1, .36, 1],
  u = [{
    index: "01",
    value: 4.6,
    decimals: 1,
    unit: "B",
    label: "Requests served daily",
    detail: "Sustained traffic across 14 regions, absorbed without a single paging incident this fiscal year.",
    delta: "+38% vs FY24",
    improved: "up"
  }, {
    index: "02",
    value: 99.98,
    decimals: 2,
    unit: "%",
    label: "Fleet-wide availability",
    detail: "Measured against every production workload we run, including the ones customers never see.",
    delta: "+0.12 pts vs FY24",
    improved: "up"
  }, {
    index: "03",
    value: 142,
    decimals: 0,
    unit: "ms",
    label: "p99 response time",
    detail: "Cold paths included. Smarter routing and edge caching carried most of the drop.",
    delta: "−41% vs FY24",
    improved: "down"
  }];
function c({
  value: e,
  decimals: t = 0
}) {
  let a = (0, React.useRef)(null),
    n = (0, __mod_50969.I)();
  return (0, React.useEffect)(() => {
    let r = a.current;
    if (!r) return;
    if (n) {
      r.textContent = e.toFixed(t);
      return;
    }
    let i = (0, __mod_87974.i)(0, e, {
      duration: 1.4,
      ease: m,
      onUpdate: e => {
        r.textContent = e.toFixed(t);
      }
    });
    return () => i.stop();
  }, [e, t, n]), <span ref={a}>{0..toFixed(t)}</span>;
}
function x() {
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
        ease: m
      }} className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-end"><div><h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-tight text-neutral-900 dark:text-white">Proof, measured quarterly.</h2></div><p className="max-w-md text-base sm:text-lg leading-relaxed text-neutral-600 dark:text-neutral-400 lg:justify-self-end">Every figure below comes from the same telemetry our customers see. No rounding up, no vanity windows.</p></motion.div><div className="mt-12 sm:mt-16 border-t border-neutral-200 dark:border-neutral-800">{u.map(e => <motion.article initial={{
          opacity: 0,
          y: 28
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: !0,
          margin: "-80px"
        }} transition={{
          duration: .7,
          ease: m
        }} className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 border-b border-neutral-200 dark:border-neutral-800 py-10 sm:py-14 md:items-start"><span className="md:col-span-1 text-sm font-medium tabular-nums text-neutral-400 dark:text-neutral-600 md:pt-2">{e.index}</span><div className="min-w-0 md:col-span-6 flex items-baseline gap-2"><span className="text-7xl sm:text-8xl lg:text-[9rem] font-semibold tracking-[-0.04em] leading-[0.9] tabular-nums text-neutral-900 dark:text-white"><c value={e.value} decimals={e.decimals} /></span><span className="text-2xl sm:text-3xl lg:text-4xl font-medium text-neutral-400 dark:text-neutral-500">{e.unit}</span></div><div className="md:col-span-5"><h3 className="text-lg sm:text-xl font-medium tracking-tight text-neutral-900 dark:text-white">{e.label}</h3><p className="mt-2 max-w-md text-base leading-relaxed text-neutral-600 dark:text-neutral-400">{e.detail}</p><span className="mt-5 inline-flex items-center gap-1.5 rounded-full border border-neutral-200 dark:border-neutral-800 px-3 py-1 text-xs font-medium tabular-nums text-neutral-600 dark:text-neutral-400">{"up" === e.improved ? <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" /> : <ArrowDownRight className="h-3.5 w-3.5" aria-hidden="true" />}{e.delta}</span></div></motion.article>)}</div></div></section>;
}

export default x;

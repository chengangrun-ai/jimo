import { motion, AnimatePresence } from "motion/react";
import { Check, ChevronDown, ChevronUp } from "lucide-react";
/**
 * Pricing 8
 * Four-plan table with expandable rows
 * slug: pricing-8
 * category: Pricing
 * export: Pricing8
 * deps: lucide-react, motion
 * original: ts-tailwind/blocks/pricing/pricing-8.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let o = ["Starter", "Team", "Enterprise"],
  c = [{
    label: "Real-time error tracking",
    values: [!0, !0, !0]
  }, {
    label: "Uptime checks every 60 seconds",
    values: [!0, !0, !0]
  }, {
    label: "Unlimited dashboards and views",
    values: [!0, !0, !0]
  }, {
    label: "Source map & sourcemap symbolication",
    values: [!0, !0, !0]
  }, {
    label: "Release health and regression detection",
    values: [!0, !0, !0]
  }, {
    label: "Retention window",
    values: ["30 days of event history", "+ 90 days of event history with unlimited exports to your warehouse", "+ 90 days of event history with unlimited exports to your warehouse"]
  }],
  u = [{
    label: "On-call scheduling",
    values: [!0, !0, !0]
  }, {
    label: "Slack, Teams, and PagerDuty integrations",
    values: [!0, !0, !0]
  }, {
    label: "Escalation policies",
    values: ["One policy per workspace", "+ Unlimited escalation policies with routing by service, region, and severity", "+ Unlimited escalation policies with routing by service, region, and severity"]
  }];
function h({
  v: e
}) {
  return !0 === e ? <span className="grid place-items-center h-5 w-5 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-900"><Check className="h-3 w-3" /></span> : <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">{e}</p>;
}
function x({
  title: e,
  rows: t
}) {
  let [r, s] = (0, React.useState)(!0);
  return <div className="border-t border-neutral-200 dark:border-neutral-800"><button onClick={() => s(e => !e)} className="w-full grid grid-cols-4 items-center py-5 cursor-pointer"><span className="col-span-1 text-xl font-medium text-neutral-900 dark:text-white text-left">{e}</span><span className="col-span-3 flex justify-end pr-2 text-neutral-500 dark:text-neutral-500">{r ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}</span></button>{r && t.map(e => <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-start py-5 border-t border-neutral-200 dark:border-neutral-800"><a href="#" className="text-sm text-neutral-800 dark:text-neutral-200 underline underline-offset-4 decoration-neutral-300 dark:decoration-neutral-700">{e.label}</a>{e.values.map((e, t) => <div className="flex items-center gap-3"><span className="md:hidden text-xs uppercase tracking-wider text-neutral-500 dark:text-neutral-500 w-24 shrink-0">{o[t]}</span><h v={e} /></div>)}</div>)}</div>;
}
function m() {
  return <section className="w-full min-h-[var(--rb-section-min-h,100vh)] py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-neutral-950"><div className="max-w-[1400px] mx-auto w-full"><div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-start"><motion.h2 initial={{
          opacity: 0,
          y: 8
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: !0
        }} transition={{
          duration: .5
        }} className="text-4xl sm:text-5xl font-serif text-neutral-900 dark:text-white leading-[1.05]">Compare<br />every plan</motion.h2>{o.map((e, t) => <div className="flex flex-col gap-4"><p className="text-xl text-neutral-900 dark:text-white">{e}</p><button className={`w-full py-3 rounded-full text-sm font-medium cursor-pointer transition-colors ${0 === t ? "bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 hover:opacity-90" : "border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-900"}`}>{2 === t ? "Contact sales" : "Start free"}</button></div>)}</div><div className="mt-10"><x title="Monitoring" rows={c} /><x title="Incident Response" rows={u} /></div></div></section>;
}

export default m;

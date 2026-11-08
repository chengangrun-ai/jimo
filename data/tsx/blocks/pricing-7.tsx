import { motion, AnimatePresence } from "motion/react";
import { Check, Minus } from "lucide-react";
/**
 * Pricing 7
 * Comparison table with a billing toggle
 * slug: pricing-7
 * category: Pricing
 * export: Pricing7
 * deps: lucide-react, motion
 * original: ts-tailwind/blocks/pricing/pricing-7.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let d = [{
    name: "Hobby",
    tagline: "Everything you need to explore",
    price: "$0",
    unit: "forever free",
    highlights: ["Up to 2 collaborators", "5 active projects", "10k API requests / month", "Community support"],
    cta: "Start free",
    popular: !1
  }, {
    name: "Studio",
    tagline: "For small teams shipping fast",
    price: "$29",
    unit: "per seat / month",
    highlights: ["Unlimited projects and views", "Branch-based previews", "Up to 15 collaborators", "250k API requests / month", "Shared component library", "Priority email support"],
    cta: "Start 14-day trial",
    popular: !0
  }, {
    name: "Business",
    tagline: "Governance and scale for orgs",
    price: "Let's talk",
    unit: "",
    highlights: ["Unlimited seats", "SSO / SAML and SCIM", "Custom data residency", "SOC 2 Type II + HIPAA BAA", "99.99% uptime SLA", "Named support engineer"],
    cta: "Contact sales",
    popular: !1
  }],
  o = [{
    feature: "Collaborators",
    values: ["Up to 2", "Up to 15", "Unlimited"]
  }, {
    feature: "Workspaces",
    values: ["Personal only", "Team + Personal", "Custom org structure"]
  }, {
    feature: "Projects per workspace",
    values: ["5", "Unlimited", "Unlimited"]
  }],
  c = [{
    feature: "Real-time collaborative editor",
    values: [!0, !0, !0]
  }, {
    feature: "Version history and rollbacks",
    values: [!0, !0, !0]
  }, {
    feature: "Comments and review flows",
    values: [!0, !0, !0]
  }, {
    feature: "Figma and Linear integrations",
    values: [!0, !0, !0]
  }, {
    feature: "Custom domains per project",
    values: [!1, !0, !0]
  }, {
    feature: "Monthly API requests",
    values: ["10k", "250k", "Custom"]
  }, {
    feature: "Data export to S3 / warehouse",
    values: [!1, !0, !0]
  }, {
    feature: "Audit logs",
    values: [!1, "90 days", "Unlimited + export"]
  }, {
    feature: "Role-based permissions",
    values: ["Basic", "Granular", "Custom policies"]
  }, {
    feature: "Sandboxed preview environments",
    values: [!0, !0, !0]
  }, {
    feature: "Single Sign-On (SSO)",
    values: [!1, !1, !0]
  }, {
    feature: "Dedicated tenant deployment",
    values: [!1, !1, !0]
  }];
function u({
  v: e
}) {
  return !0 === e ? <span className="grid place-items-center h-5 w-5 mx-auto rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-900"><Check className="h-3 w-3" /></span> : !1 === e ? <span className="grid place-items-center h-5 w-5 mx-auto rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-400"><Minus className="h-3 w-3" /></span> : <span className="text-sm text-neutral-700 dark:text-neutral-300">{e}</span>;
}
function x() {
  let [e, t] = (0, React.useState)("Monthly");
  return <section className="w-full min-h-[var(--rb-section-min-h,100vh)] py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-neutral-950"><div className="max-w-[1400px] mx-auto w-full"><div className="grid grid-cols-1 md:grid-cols-4 border border-neutral-200 dark:border-neutral-800 rounded-2xl overflow-hidden"><div className="p-6 border-b md:border-b-0 md:border-r border-neutral-200 dark:border-neutral-800"><p className="text-xs uppercase tracking-wider text-neutral-500 dark:text-neutral-500 mb-4">Billing</p><div className="space-y-2.5">{["Annually", "Monthly"].map(r => <button onClick={() => t(r)} className="flex items-center gap-2 text-sm text-neutral-700 dark:text-neutral-300 cursor-pointer"><span className={`h-3 w-3 rounded-full border ${e === r ? "border-neutral-900 dark:border-white bg-neutral-900 dark:bg-white ring-2 ring-offset-1 ring-neutral-900 dark:ring-white dark:ring-offset-neutral-950" : "border-neutral-400"}`} />{r}{"Annually" === r && <span className="ml-1 text-[10px] px-1.5 py-0.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400">Save 20%</span>}</button>)}</div></div>{d.map((e, t) => <motion.div initial={{
          opacity: 0,
          y: 10
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: !0
        }} transition={{
          duration: .4,
          delay: .05 * t
        }} className={`p-6 flex flex-col gap-4 border-b md:border-b-0 ${t < d.length - 1 ? "md:border-r" : ""} border-neutral-200 dark:border-neutral-800 ${e.popular ? "bg-neutral-50 dark:bg-neutral-900" : ""}`}><div className="flex items-center gap-2"><p className="text-base font-semibold text-neutral-900 dark:text-white">{e.name}</p>{e.popular && <span className="px-2 py-0.5 rounded bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-[10px] font-medium">Popular</span>}</div><p className="text-xs text-neutral-600 dark:text-neutral-400">{e.tagline}</p><div className="mt-4"><span className="text-2xl font-semibold text-neutral-900 dark:text-white">{e.price}</span>{e.unit && <span className="ml-2 text-xs text-neutral-500">{e.unit}</span>}</div><ul className="space-y-2 mt-2">{e.highlights.map(e => <li className="flex items-start gap-2 text-xs text-neutral-700 dark:text-neutral-300"><Check className="h-3.5 w-3.5 text-neutral-900 dark:text-white mt-0.5 shrink-0" />{e}</li>)}</ul><button className={`mt-auto w-full py-2.5 rounded-full text-[11px] font-semibold tracking-[0.15em] uppercase cursor-pointer transition-colors ${e.popular ? "bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 hover:opacity-90" : "border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-900"}`}>{e.cta}</button></motion.div>)}</div><div className="mt-0"><div className="grid grid-cols-1 md:grid-cols-4 bg-neutral-50 dark:bg-neutral-900 border-x border-neutral-200 dark:border-neutral-800"><div className="col-span-full p-3 text-xs font-medium text-neutral-700 dark:text-neutral-300">Workspace</div></div>{o.map(e => <div className="grid grid-cols-1 md:grid-cols-4 border-x border-b border-neutral-200 dark:border-neutral-800"><div className="p-4 text-sm text-neutral-700 dark:text-neutral-300 border-r border-neutral-200 dark:border-neutral-800">{e.feature}</div>{e.values.map((e, t) => <div className="p-4 text-center text-sm text-neutral-700 dark:text-neutral-300 flex md:block items-center justify-between md:justify-center border-t md:border-t-0 border-neutral-200 dark:border-neutral-800"><span className="md:hidden text-xs uppercase tracking-wider text-neutral-500 dark:text-neutral-500">{d[t].name}</span><span>{e}</span></div>)}</div>)}<div className="grid grid-cols-1 md:grid-cols-4 bg-neutral-50 dark:bg-neutral-900 border-x border-neutral-200 dark:border-neutral-800"><div className="col-span-full p-3 text-xs font-medium text-neutral-700 dark:text-neutral-300">Platform</div></div>{c.map((e, t) => <div className={`grid grid-cols-1 md:grid-cols-4 border-x border-b border-neutral-200 dark:border-neutral-800 ${t === c.length - 1 ? "rounded-b-2xl" : ""}`}><div className="p-4 text-sm text-neutral-700 dark:text-neutral-300 border-r border-neutral-200 dark:border-neutral-800">{e.feature}</div>{e.values.map((e, t) => <div className="p-4 text-center flex md:block items-center justify-between md:justify-center border-t md:border-t-0 border-neutral-200 dark:border-neutral-800"><span className="md:hidden text-xs uppercase tracking-wider text-neutral-500 dark:text-neutral-500">{d[t].name}</span><u v={e} /></div>)}</div>)}</div></div></section>;
}

export default x;

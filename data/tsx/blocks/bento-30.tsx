import { motion, AnimatePresence } from "motion/react";
import { ArrowDown, ArrowUp, ArrowUpDown, Download } from "lucide-react";
import * as __mod_50969 from "../_helpers/50969";
import * as __mod_47962 from "../_helpers/47962";
/**
 * Bento 30
 * Data table that filters and sorts live
 * slug: bento-30
 * category: Bento
 * export: Bento30
 * deps: lucide-react, motion
 * original: ts-tailwind/blocks/bento/bento-30.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let x = [{
    id: 1,
    customer: "Nova Labs",
    photo: "12",
    plan: "Enterprise",
    mrr: 4200,
    seats: 48,
    status: "Active"
  }, {
    id: 2,
    customer: "Planetaria",
    photo: "56",
    plan: "Pro",
    mrr: 890,
    seats: 12,
    status: "Active"
  }, {
    id: 3,
    customer: "Studio Kova",
    photo: "47",
    plan: "Pro",
    mrr: 640,
    seats: 9,
    status: "Past due"
  }, {
    id: 4,
    customer: "Byteflow",
    photo: "5",
    plan: "Starter",
    mrr: 120,
    seats: 3,
    status: "Trial"
  }, {
    id: 5,
    customer: "Northstar",
    photo: "33",
    plan: "Enterprise",
    mrr: 6100,
    seats: 72,
    status: "Active"
  }, {
    id: 6,
    customer: "Kestrel",
    photo: "68",
    plan: "Starter",
    mrr: 90,
    seats: 2,
    status: "Trial"
  }, {
    id: 7,
    customer: "Halcyon",
    photo: "26",
    plan: "Pro",
    mrr: 1180,
    seats: 16,
    status: "Active"
  }],
  m = ["All", "Active", "Trial", "Past due"],
  h = [.22, 1, .36, 1];
function p() {
  let e = !!(0, __mod_50969.I)(),
    [t, r] = (0, React.useState)("All"),
    [p, b] = (0, React.useState)({
      key: "mrr",
      dir: -1
    }),
    [f, g] = (0, React.useState)(null),
    v = x.filter(e => "All" === t || e.status === t).sort((e, t) => {
      let r = e[p.key],
        a = t[p.key];
      return ("number" == typeof r && "number" == typeof a ? r - a : String(r).localeCompare(String(a))) * p.dir;
    }),
    j = v.reduce((e, t) => e + t.mrr, 0),
    k = e => b(t => t.key === e ? {
      key: e,
      dir: 1 === t.dir ? -1 : 1
    } : {
      key: e,
      dir: "customer" === e ? 1 : -1
    }),
    N = e => p.key !== e ? <ArrowUpDown className="h-2.5 w-2.5 opacity-40" /> : 1 === p.dir ? <ArrowUp className="h-2.5 w-2.5" /> : <ArrowDown className="h-2.5 w-2.5" />;
  return <article className="group relative flex h-full min-h-[380px] w-full flex-col overflow-hidden rounded-3xl border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900"><div className="@container relative min-h-[220px] flex-1 overflow-hidden"><motion.div initial={{
        opacity: 0,
        y: 16 * !e
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: !0,
        amount: .3
      }} transition={{
        duration: .7,
        ease: h
      }} className="absolute inset-x-3 top-3 flex min-h-[calc(100%-0.75rem)] flex-col overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-[0_1px_2px_rgba(0,0,0,0.04),0_12px_32px_-12px_rgba(0,0,0,0.12)] dark:border-neutral-800 dark:bg-neutral-950 dark:shadow-none"><div className="flex items-center justify-between gap-2 border-b border-neutral-100 px-3 py-2 dark:border-neutral-800/80"><div role="group" aria-label="Status filter" className="flex items-center gap-1">{m.map(e => <button type="button" aria-pressed={t === e} onClick={() => r(e)} className={`cursor-pointer whitespace-nowrap rounded-full px-2 py-0.5 text-[10px] font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 ${t === e ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900" : "text-neutral-500 hover:bg-neutral-100 hover:text-neutral-900 dark:hover:bg-neutral-800 dark:hover:text-white"} ${"Past due" === e ? "hidden @xs:inline-flex" : ""}`}>{e}</button>)}</div><button type="button" onClick={() => {
            let e = ["Customer,Plan,MRR,Seats,Status", ...v.map(e => [e.customer, e.plan, e.mrr, e.seats, e.status].join(","))].join("\n"),
              t = URL.createObjectURL(new Blob([e], {
                type: "text/csv;charset=utf-8"
              })),
              r = document.createElement("a");
            r.href = t, r.download = "customers.csv", r.click(), window.setTimeout(() => URL.revokeObjectURL(t), 0);
          }} className="inline-flex cursor-pointer items-center gap-1 rounded-full border border-neutral-200 px-2 py-0.5 text-[10px] font-medium text-neutral-600 hover:bg-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 dark:border-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-800"><Download className="h-3 w-3" /><span className="hidden @xs:inline">Export</span></button></div><table className="w-full table-fixed border-collapse text-left"><thead><tr className="text-[10px] font-medium text-neutral-500"><th className="w-[44%] px-3 py-1.5 @2xl:w-[34%]"><button type="button" onClick={() => k("customer")} className="inline-flex cursor-pointer items-center gap-1 hover:text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 dark:hover:text-white">Customer {N("customer")}</button></th><th className="hidden px-3 py-1.5 @2xl:table-cell">Plan</th><th className="px-3 py-1.5 text-right"><button type="button" onClick={() => k("mrr")} className="inline-flex cursor-pointer items-center gap-1 hover:text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 dark:hover:text-white">MRR {N("mrr")}</button></th><th className="hidden px-3 py-1.5 text-right @2xl:table-cell"><button type="button" onClick={() => k("seats")} className="inline-flex cursor-pointer items-center gap-1 hover:text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 dark:hover:text-white">Seats {N("seats")}</button></th><th className="px-3 py-1.5 text-right">Status</th></tr></thead><tbody><__mod_47962.N initial={!1}>{v.map(t => <motion.tr layout={!e && "position"} initial={{
                opacity: 0
              }} animate={{
                opacity: 1
              }} exit={{
                opacity: 0
              }} transition={{
                duration: .3,
                ease: h
              }} onMouseEnter={() => g(t.id)} onMouseLeave={() => g(null)} className={`border-t border-neutral-100 text-[11px] transition-colors duration-150 dark:border-neutral-800/80 ${f === t.id ? "bg-neutral-50 dark:bg-neutral-900" : ""}`}><td className="px-3 py-2"><span className="flex items-center gap-2"><span className="block h-5 w-5 shrink-0 overflow-hidden rounded-full"><img src={`https://i.pravatar.cc/80?img=${t.photo}`} alt="" loading="lazy" className="h-full w-full object-cover" /></span><span className="truncate font-medium text-neutral-900 dark:text-white">{t.customer}</span></span></td><td className="hidden px-3 py-2 text-neutral-600 @2xl:table-cell dark:text-neutral-400">{t.plan}</td><td className="px-3 py-2 text-right tabular-nums text-neutral-900 dark:text-white">${t.mrr.toLocaleString("en-US")}</td><td className="hidden px-3 py-2 text-right tabular-nums text-neutral-600 @2xl:table-cell dark:text-neutral-400">{t.seats}</td><td className="px-3 py-2 text-right"><span className={`inline-flex items-center gap-1 rounded-full px-1.5 py-0.5 text-[9px] font-medium ${"Active" === t.status ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400" : "Trial" === t.status ? "bg-neutral-100 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300" : "bg-red-500/10 text-red-600 dark:text-red-400"}`}>{t.status}</span></td></motion.tr>)}</__mod_47962.N></tbody></table><div className="flex items-center justify-between border-t border-neutral-100 px-3 py-2 text-[10px] text-neutral-500 dark:border-neutral-800/80"><span className="tabular-nums">{v.length} of {x.length} customers</span><span className="tabular-nums font-medium text-neutral-900 dark:text-white">${j.toLocaleString("en-US")} MRR</span></div><div className="mx-3 mb-8 mt-3 flex min-h-[160px] flex-1 flex-col rounded-lg bg-neutral-50 p-3 dark:bg-neutral-900"><p className="text-[10px] font-medium text-neutral-500">Revenue by customer</p><div className="mt-4 flex min-h-[96px] flex-1 items-end gap-2">{v.map(e => <div title={`${e.customer}: $${e.mrr.toLocaleString("en-US")}`} className="relative min-h-[96px] flex-1 self-stretch"><div className="absolute inset-x-0 bottom-5 top-0"><div className="absolute inset-x-0 bottom-0 min-h-1 rounded-t-md bg-neutral-300 transition-[height] duration-300 dark:bg-neutral-600" style={{
                  height: `${e.mrr / Math.max(...v.map(e => e.mrr)) * 100}%`
                }} /></div><span className="absolute inset-x-0 bottom-0 truncate text-center text-[9px] text-neutral-500">{e.customer.split(" ")[0]}</span></div>)}</div></div></motion.div><div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent dark:from-neutral-900" /></div><div className="px-6 pb-6 pt-2"><h3 className="text-base font-semibold tracking-tight text-neutral-900 dark:text-white">Your data, your way</h3><p className="mt-1.5 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">Filter, sort and export any view in a click, then save it so the whole team sees the same numbers.</p></div></article>;
}

export default p;

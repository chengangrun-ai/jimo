import * as __mod_24513 from "../_helpers/24513";
import * as __mod_20148 from "../_helpers/20148";
import * as __mod_31517 from "../_helpers/31517";
import * as __mod_22728 from "../_helpers/22728";
import * as __mod_99199 from "../_helpers/99199";
import * as __mod_90987 from "../_helpers/90987";
import * as __mod_92752 from "../_helpers/92752";
import * as __mod_66575 from "../_helpers/66575";
import * as __mod_62995 from "../_helpers/62995";
import * as __mod_73516 from "../_helpers/73516";
import * as __mod_22670 from "../_helpers/22670";
import * as __mod_89289 from "../_helpers/89289";
import * as __mod_58661 from "../_helpers/58661";
import * as __mod_5042 from "../_helpers/5042";
import * as __mod_66654 from "../_helpers/66654";
import * as __mod_79715 from "../_helpers/79715";
import * as __mod_36586 from "../_helpers/36586";
import * as __mod_86829 from "../_helpers/86829";
import * as __mod_42734 from "../_helpers/42734";
import * as __mod_59157 from "../_helpers/59157";
/**
 * Data Table 5
 * slug: data-table-5
 * category: data-table
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let h = (...e) => e.filter(Boolean).join(" "),
  p = "bg-white dark:bg-neutral-950",
  b = "bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900",
  m = "text-neutral-900/78 dark:text-neutral-100/78",
  k = "text-[15px]/[20px] font-bold",
  f = "relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] text-neutral-900 dark:text-neutral-100 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] active:not-disabled:translate-y-px active:not-disabled:shadow-[inset_0_1px_3px_rgb(84_62_32/0.16),0_0_0_1px_rgb(84_62_32/0.10)] dark:active:not-disabled:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14),0_0_0_1px_rgb(84_62_32/0.10)] dark:aria-expanded:bg-neutral-800 dark:aria-expanded:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] disabled:bg-none disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] disabled:text-neutral-900/40 disabled:shadow-none dark:disabled:bg-neutral-800/60 dark:disabled:text-neutral-100/40",
  v = "h-10 gap-2 rounded-[calc(var(--rb-r-full,999px))] px-5 text-[15px]/[20px] font-bold",
  g = "relative inline-flex h-8 max-w-full min-w-0 shrink-0 cursor-pointer items-center gap-1.5 whitespace-nowrap rounded-[calc(var(--rb-r-full,999px))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] px-3.5 text-[14px]/[18px] font-bold text-neutral-900 dark:text-neutral-100 select-none transition-[background-color,border-color,box-shadow,color,scale,translate,outline-color] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:translate-y-px active:duration-[90ms] motion-reduce:active:translate-y-0 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] aria-pressed:bg-none aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-pressed:shadow-[inset_0_0_0_1.5px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14)] disabled:cursor-not-allowed disabled:text-neutral-900/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-pressed:shadow-[inset_0_0_0_1.5px_var(--rb-accent,oklch(81%_0.16_163))] dark:aria-expanded:bg-neutral-800 dark:disabled:text-neutral-100/40",
  w = "block min-w-0 overflow-hidden whitespace-nowrap [mask-image:linear-gradient(to_right,black_calc(100%-24px),transparent)]",
  j = "h-10 border-b border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] px-3 text-left align-middle text-[13px]/[16px] font-bold tabular-nums whitespace-nowrap text-neutral-900/62 dark:text-neutral-100/62 first:ps-4 last:pe-4 dark:bg-neutral-100/4",
  y = "h-12 border-b border-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] px-3 align-middle whitespace-nowrap text-neutral-900 dark:text-neutral-100 group-last:border-b-0 first:ps-4 last:pe-4 dark:border-neutral-100/6",
  N = "text-right tabular-nums",
  C = "sm:first:ps-6 sm:last:pe-6",
  S = [{
    name: "Sable Ridge Energy",
    owner: "Mina Kapoor",
    plan: "Enterprise",
    status: "Needs review",
    region: "EMEA",
    mrr: 18420,
    renewalOn: "2025-08-12"
  }, {
    name: "North Pier Robotics",
    owner: "Tomasz Nowak",
    plan: "Scale",
    status: "Active",
    region: "North America",
    mrr: 9860,
    renewalOn: "2025-09-03"
  }, {
    name: "Longleaf Clinical Research Network International",
    owner: "Ari Chen",
    plan: "Enterprise",
    status: "Active",
    region: "APAC",
    mrr: 22190,
    renewalOn: "2025-09-19"
  }, {
    name: "Cobalt Field Labs",
    owner: "Rhea Flores",
    plan: "Growth",
    status: "Paused",
    region: "North America",
    mrr: 4210,
    renewalOn: "2025-10-01"
  }, {
    name: "Kite Harbor Logistics",
    owner: "Devon Okafor",
    plan: "Scale",
    status: "Active",
    region: "LATAM",
    mrr: 7540,
    renewalOn: "2025-10-08"
  }, {
    name: "Mossbank Archive Trust",
    owner: "Lena Ortiz",
    plan: "Growth",
    status: "Needs review",
    region: "EMEA",
    mrr: 3980,
    renewalOn: "2025-10-22"
  }, {
    name: "Vantage Grid Systems",
    owner: "Priya Rao",
    plan: "Enterprise",
    status: "Active",
    region: "North America",
    mrr: 26740,
    renewalOn: "2025-11-04"
  }, {
    name: "Harbor & Vale Freight",
    owner: "Marcus Lund",
    plan: "Scale",
    status: "Active",
    region: "EMEA",
    mrr: 11230,
    renewalOn: "2025-11-11"
  }, {
    name: "Tidewater Instruments",
    owner: "Sofia Martins",
    plan: "Growth",
    status: "Active",
    region: "APAC",
    mrr: 5620,
    renewalOn: "2025-11-18"
  }, {
    name: "Redwood Payments",
    owner: "Jun Park",
    plan: "Enterprise",
    status: "Needs review",
    region: "North America",
    mrr: 19870,
    renewalOn: "2025-11-29"
  }],
  A = ["Owner", "Plan", "Region", "Renewal"],
  L = {
    Active: "text-neutral-900/78 dark:text-neutral-100/78",
    "Needs review": "text-[oklch(49%_0.1_68)] dark:text-[oklch(80%_0.13_68)]",
    Paused: "text-neutral-900/62 dark:text-neutral-100/62"
  };
function M({
  status: e,
  small: r
}) {
  return <span className={h(r ? "inline-flex items-start gap-1 text-[14px]/[20px] font-bold tabular-nums" : "inline-flex items-start gap-1.5 text-[15px]/[20px] font-bold tabular-nums", L[e], "whitespace-nowrap")}>{e}</span>;
}
let D = e => e.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0
  }),
  z = e => new Date(`${e}T00:00:00`).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric"
  });
function R({
  label: e,
  sortKey: r,
  sort: a,
  onSort: n,
  align: c = "left",
  className: d
}) {
  let u = a.key === r,
    x = u ? "asc" === a.dir ? __mod_24513.A : __mod_20148.A : __mod_31517.A;
  return <th scope="col" aria-sort={u ? "asc" === a.dir ? "ascending" : "descending" : "none"} className={h(j, C, "right" === c && "text-right", d)}><button type="button" data-sorted={u ? "true" : void 0} onClick={() => n(r)} className={h("-mx-1.5 inline-flex h-8 min-w-0 cursor-pointer items-center gap-1 rounded-[calc(var(--rb-r-full,999px))] px-1.5 transition-[background-color,color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-neutral-900/5 hover:text-neutral-900 data-sorted:text-neutral-900 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:hover:bg-neutral-100/6 dark:hover:text-neutral-100 dark:data-sorted:text-neutral-100", "max-w-full", "right" === c && "flex-row-reverse")}><span className="truncate">{e}</span><__mod_22728.n icon={x} size={14} strokeWidth={2} aria-hidden="true" className="shrink-0" /></button></th>;
}
let H = (...e) => e.filter(Boolean).join(" "),
  B = "bg-white dark:bg-neutral-950",
  F = "bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900",
  I = "text-neutral-900 dark:text-neutral-100",
  Y = "text-neutral-900/78 dark:text-neutral-100/78",
  V = "text-neutral-900/62 dark:text-neutral-100/62",
  U = "text-[14px]/[20px] font-medium",
  G = "text-[15px]/[20px] font-bold",
  K = "text-[13px]/[16px] font-semibold tabular-nums",
  $ = "relative inline-flex h-9 min-w-9 cursor-pointer items-center justify-center rounded-[calc(var(--rb-r-full,999px))] border border-transparent px-3 text-[15px]/[20px] font-bold tabular-nums text-neutral-900 dark:text-neutral-100 transition-[background-color,box-shadow,color,scale] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:scale-[0.94] motion-reduce:active:scale-100 hover:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] aria-[current=page]:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_68%,white),var(--rb-accent,oklch(84%_0.15_165)))] aria-[current=page]:text-[var(--rb-accent-fg,oklch(26%_0.06_168))] aria-[current=page]:shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] aria-disabled:pointer-events-none aria-disabled:text-neutral-900/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:hover:bg-neutral-100/8 dark:aria-[current=page]:text-[var(--rb-accent-fg,oklch(26%_0.06_168))] dark:aria-[current=page]:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black)] dark:aria-disabled:text-neutral-100/40",
  q = "text-[14px]/[20px] font-semibold tabular-nums text-neutral-900/62 dark:text-neutral-100/62",
  Z = "h-10 border-b border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] px-3 text-left align-middle text-[13px]/[16px] font-bold tabular-nums whitespace-nowrap text-neutral-900/62 dark:text-neutral-100/62 first:ps-4 last:pe-4 dark:bg-neutral-100/4",
  J = "h-12 border-b border-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] px-3 align-middle whitespace-nowrap text-neutral-900 dark:text-neutral-100 group-last:border-b-0 first:ps-4 last:pe-4 dark:border-neutral-100/6",
  Q = "text-right tabular-nums",
  X = "inline-flex h-8 shrink-0 cursor-pointer items-center gap-1.5 rounded-[calc(var(--rb-r-full,999px))] bg-white/12 px-3.5 text-[14px]/[18px] font-bold transition-[background-color,scale] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] hover:bg-white/20 active:scale-[0.96] active:bg-white/28 motion-reduce:active:scale-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--rb-accent,oklch(84%_0.15_165))] dark:bg-neutral-900/10 dark:hover:bg-neutral-900/16 dark:active:bg-neutral-900/24 dark:focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)]",
  ee = "sm:first:ps-6 sm:last:pe-6",
  er = [{
    id: "PAY-0182",
    vendor: "Pilot Fiber Transit",
    owner: "Iris Woods",
    status: "Needs approval",
    amount: 6420,
    due: "Aug 6"
  }, {
    id: "PAY-0183",
    vendor: "Granite Switchgear Supply",
    owner: "Niko Bryant",
    status: "Scheduled",
    amount: 18200,
    due: "Aug 7"
  }, {
    id: "PAY-0184",
    vendor: "Beacon Yard Services",
    owner: "Marisol Vale",
    status: "Paid",
    amount: 3140,
    due: "Aug 9"
  }, {
    id: "PAY-0185",
    vendor: "Atlas Thermal Controls",
    owner: "Jun Park",
    status: "Scheduled",
    amount: 9880,
    due: "Aug 11"
  }, {
    id: "PAY-0186",
    vendor: "Silverline Security Review Partners",
    owner: "Mara Singh",
    status: "Needs approval",
    amount: 2760,
    due: "Aug 15"
  }, {
    id: "PAY-0187",
    vendor: "Lowland Metering Group",
    owner: "Theo Grant",
    status: "Paid",
    amount: 14050,
    due: "Aug 18"
  }, {
    id: "PAY-0188",
    vendor: "Cedarworks Freight",
    owner: "Asha Malik",
    status: "Scheduled",
    amount: 5310,
    due: "Aug 20"
  }, {
    id: "PAY-0189",
    vendor: "Halden Instrument Rental",
    owner: "Camille Hart",
    status: "Paid",
    amount: 1980,
    due: "Aug 22"
  }, {
    id: "PAY-0190",
    vendor: "Northwind Facilities",
    owner: "Iris Woods",
    status: "Needs approval",
    amount: 22400,
    due: "Aug 25"
  }, {
    id: "PAY-0191",
    vendor: "Riverbend Testing Lab",
    owner: "Niko Bryant",
    status: "Scheduled",
    amount: 7640,
    due: "Aug 27"
  }, {
    id: "PAY-0192",
    vendor: "Cascade Pallet Works",
    owner: "Marisol Vale",
    status: "Paid",
    amount: 4380,
    due: "Aug 28"
  }, {
    id: "PAY-0193",
    vendor: "Ironvale Coatings",
    owner: "Theo Grant",
    status: "Scheduled",
    amount: 12740,
    due: "Sep 1"
  }, {
    id: "PAY-0194",
    vendor: "Dockside Calibration Services",
    owner: "Mara Singh",
    status: "Needs approval",
    amount: 8150,
    due: "Sep 2"
  }, {
    id: "PAY-0195",
    vendor: "Alder Route Analytics",
    owner: "Jun Park",
    status: "Scheduled",
    amount: 3290,
    due: "Sep 4"
  }, {
    id: "PAY-0196",
    vendor: "Fenwick Packaging",
    owner: "Camille Hart",
    status: "Paid",
    amount: 6710,
    due: "Sep 5"
  }, {
    id: "PAY-0197",
    vendor: "Harborlight Cold Chain",
    owner: "Iris Woods",
    status: "Scheduled",
    amount: 19430,
    due: "Sep 8"
  }, {
    id: "PAY-0198",
    vendor: "Quarry Bend Materials",
    owner: "Niko Bryant",
    status: "Needs approval",
    amount: 5040,
    due: "Sep 9"
  }, {
    id: "PAY-0199",
    vendor: "Westline Fleet Care",
    owner: "Asha Malik",
    status: "Paid",
    amount: 2260,
    due: "Sep 11"
  }, {
    id: "PAY-0200",
    vendor: "Stonecrest Utility Partners",
    owner: "Marisol Vale",
    status: "Scheduled",
    amount: 15870,
    due: "Sep 12"
  }, {
    id: "PAY-0201",
    vendor: "Meridian Trade Compliance",
    owner: "Jun Park",
    status: "Needs approval",
    amount: 9320,
    due: "Sep 15"
  }, {
    id: "PAY-0202",
    vendor: "Blackpine Yard Equipment",
    owner: "Theo Grant",
    status: "Scheduled",
    amount: 7180,
    due: "Sep 16"
  }, {
    id: "PAY-0203",
    vendor: "Verity Audit Group",
    owner: "Mara Singh",
    status: "Paid",
    amount: 11600,
    due: "Sep 18"
  }, {
    id: "PAY-0204",
    vendor: "Copperfield Signage",
    owner: "Camille Hart",
    status: "Scheduled",
    amount: 1840,
    due: "Sep 19"
  }, {
    id: "PAY-0205",
    vendor: "Northgate Waste Services",
    owner: "Niko Bryant",
    status: "Needs approval",
    amount: 4960,
    due: "Sep 22"
  }, {
    id: "PAY-0206",
    vendor: "Trellis Facility Software",
    owner: "Iris Woods",
    status: "Paid",
    amount: 20510,
    due: "Sep 23"
  }, {
    id: "PAY-0207",
    vendor: "Sunfield Grounds Care",
    owner: "Asha Malik",
    status: "Scheduled",
    amount: 3470,
    due: "Sep 25"
  }, {
    id: "PAY-0208",
    vendor: "Larkspur Legal Retainer",
    owner: "Jun Park",
    status: "Needs approval",
    amount: 13250,
    due: "Sep 26"
  }, {
    id: "PAY-0209",
    vendor: "Beacon Ridge Insurance",
    owner: "Marisol Vale",
    status: "Scheduled",
    amount: 27890,
    due: "Sep 29"
  }],
  ea = e => e.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0
  }),
  et = {
    Scheduled: "text-neutral-900 dark:text-neutral-100",
    "Needs approval": I,
    Paid: "text-neutral-900/78 dark:text-neutral-100/78",
    "On hold": "text-neutral-900/62 dark:text-neutral-100/62"
  };
function en({
  status: e
}) {
  return <span className={H("inline-flex items-start gap-1.5 text-[15px]/[20px] font-bold tabular-nums", et[e], "whitespace-nowrap")}>{e}</span>;
}
function el({
  checked: e,
  indeterminate: r,
  onChange: a,
  label: o
}) {
  let s = (0, React.useRef)(null),
    i = !!r && !e;
  return (0, React.useEffect)(() => {
    s.current && (s.current.indeterminate = i);
  }, [i]), <span className="relative inline-flex size-[18px] shrink-0 items-center justify-center"><input ref={s} type="checkbox" checked={e} onChange={a} aria-label={o} className="peer size-[18px] shrink-0 cursor-pointer appearance-none rounded-[calc(var(--rb-r-sm,6px))] border-2 border-neutral-900/28 bg-white transition-[background-color,border-color,box-shadow,outline-color,scale] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:scale-[0.86] motion-reduce:active:scale-100 hover:not-checked:not-disabled:border-neutral-900/60 active:not-checked:bg-neutral-900/8 checked:border-transparent checked:bg-[var(--rb-accent,oklch(84%_0.15_165))] indeterminate:border-transparent indeterminate:bg-[var(--rb-accent,oklch(84%_0.15_165))] checked:shadow-[inset_0_1px_0_rgb(255_255_255/0.4),inset_0_-1.5px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] indeterminate:shadow-[inset_0_1px_0_rgb(255_255_255/0.4),inset_0_-1.5px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] aria-invalid:border-[oklch(60%_0.236_26)] disabled:cursor-not-allowed disabled:border-neutral-900/20 disabled:checked:bg-neutral-900/25 disabled:checked:shadow-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:border-neutral-100/34 dark:bg-neutral-900 dark:hover:not-checked:not-disabled:border-neutral-100/70 dark:active:not-checked:bg-neutral-100/10 dark:checked:bg-[var(--rb-accent,oklch(81%_0.16_163))] dark:indeterminate:bg-[var(--rb-accent,oklch(81%_0.16_163))] dark:checked:shadow-none dark:indeterminate:shadow-none dark:aria-invalid:border-[oklch(65.2%_0.219_26)] dark:disabled:border-neutral-100/24 dark:disabled:checked:bg-neutral-100/28" /><__mod_22728.n icon={i ? __mod_99199.A : __mod_90987.A} size={14} strokeWidth={2.5} aria-hidden="true" className={H("pointer-events-none absolute scale-50 text-[var(--rb-accent-fg,oklch(26%_0.06_168))] opacity-0 transition-[opacity,scale] duration-[260ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] peer-checked:scale-100 peer-checked:opacity-100 peer-indeterminate:scale-100 peer-indeterminate:opacity-100 peer-active:scale-[0.86] motion-reduce:transition-none dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))]", "peer-indeterminate:opacity-100")} /></span>;
}
function eo({
  id: e,
  value: r,
  onChange: a,
  options: o,
  disabled: s,
  placeholder: c = "Select…",
  className: d,
  triggerClassName: u,
  ariaLabel: _
}) {
  let h = (0, React.useId)(),
    [p, b] = (0, React.useState)(!1),
    [m, k] = (0, React.useState)(0),
    [f, v] = (0, React.useState)(!1),
    [g, w] = (0, React.useState)(),
    j = (0, React.useRef)(null),
    y = (0, React.useRef)(null),
    N = (0, React.useRef)({
      buffer: "",
      at: 0
    }),
    C = o.findIndex(e => e.value === r),
    S = C >= 0 ? o[C] : void 0,
    A = e => {
      if (s) return;
      let r = j.current,
        a = r?.ownerDocument.defaultView;
      if (r && a) {
        let e = r.getBoundingClientRect(),
          t = 0,
          n = a.innerHeight;
        for (let e = r.parentElement; e; e = e.parentElement) if (/(auto|scroll|hidden|clip)/.test(a.getComputedStyle(e).overflowY)) {
          let r = e.getBoundingClientRect();
          t = Math.max(t, r.top), n = Math.min(n, r.bottom);
          break;
        }
        let l = n - e.bottom,
          s = e.top - t,
          i = Math.min(32 * o.length + 10, 264),
          c = l < i + 8 && s > l,
          d = (c ? s : l) - 8;
        v(c), w(d < i ? Math.max(d, 40) : void 0);
      }
      k(e ?? (C >= 0 ? C : 0)), b(!0);
    };
  (0, React.useEffect)(() => {
    if (!p) return;
    let e = j.current,
      r = e?.ownerDocument;
    if (!r) return;
    let a = r => {
      e.contains(r.target) || b(!1);
    };
    return r.addEventListener("mousedown", a), r.addEventListener("touchstart", a), () => {
      r.removeEventListener("mousedown", a), r.removeEventListener("touchstart", a);
    };
  }, [p]), (0, React.useEffect)(() => {
    if (!p) return;
    let e = y.current,
      r = e?.querySelector(`[data-index="${m}"]`);
    if (!e || !r) return;
    let a = r.offsetTop,
      t = a + r.offsetHeight;
    a < e.scrollTop ? e.scrollTop = a : t > e.scrollTop + e.clientHeight && (e.scrollTop = t - e.clientHeight);
  }, [p, m]);
  let L = e => {
    let r = o[e];
    r && (a(r.value), b(!1), j.current?.querySelector("button")?.focus({
      preventScroll: !0
    }));
  };
  return <div ref={j} className={H("relative", d)}><button id={e} type="button" role="combobox" aria-expanded={p} aria-controls={h} aria-haspopup="listbox" aria-activedescendant={p ? `${h}-${m}` : void 0} aria-label={_} disabled={s} onClick={() => p ? b(!1) : A()} onKeyDown={e => {
      if (!s) {
        if (!p) {
          ["Enter", " ", "ArrowDown", "ArrowUp"].includes(e.key) && (e.preventDefault(), A());
          return;
        }
        if ("Escape" === e.key || "Tab" === e.key) {
          "Escape" === e.key && e.stopPropagation(), b(!1);
          return;
        }
        if ("ArrowDown" === e.key) e.preventDefault(), k(e => Math.min(e + 1, o.length - 1));else if ("ArrowUp" === e.key) e.preventDefault(), k(e => Math.max(e - 1, 0));else if ("Home" === e.key) e.preventDefault(), k(0);else if ("End" === e.key) e.preventDefault(), k(o.length - 1);else if ("Enter" === e.key || " " === e.key) e.preventDefault(), L(m);else if (1 === e.key.length && /\S/.test(e.key)) {
          let r = Date.now(),
            a = N.current;
          a.buffer = r - a.at > 700 ? e.key : a.buffer + e.key, a.at = r;
          let t = o.findIndex(e => e.label.toLowerCase().startsWith(a.buffer.toLowerCase()));
          t >= 0 && k(t);
        }
      }
    }} className={H("inline-flex h-10 w-fit min-w-40 cursor-pointer items-center justify-between gap-2 rounded-[calc(var(--rb-r-xl,12px))] border border-transparent bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] px-3.5 text-left text-[15px]/[20px] font-semibold whitespace-nowrap text-neutral-900 outline-none select-none transition-[border-color,box-shadow,background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:not-disabled:not-aria-invalid:not-aria-expanded:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] focus-visible:border-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] focus-visible:bg-white focus-visible:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-expanded:border-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] aria-expanded:bg-white aria-expanded:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-invalid:border-[oklch(60%_0.236_26)] disabled:cursor-not-allowed disabled:text-neutral-900/40 disabled:shadow-none dark:text-neutral-100 dark:hover:not-disabled:not-aria-invalid:not-aria-expanded:bg-neutral-900 dark:focus-visible:border-[var(--rb-accent,oklch(81%_0.16_163))] dark:focus-visible:bg-neutral-900 dark:focus-visible:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-expanded:border-[var(--rb-accent,oklch(81%_0.16_163))] dark:aria-expanded:bg-neutral-900 dark:aria-expanded:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-invalid:border-[oklch(65.2%_0.219_26)] dark:disabled:text-neutral-100/40", u)}><span className="grid min-w-0 flex-1 text-left *:[grid-area:1/1]">{o.map(e => <span aria-hidden="true" className="invisible flex min-w-0 items-baseline gap-2"><span className="truncate">{e.label}</span>{e.hint && <span className="truncate">{e.hint}</span>}</span>)}<span className="flex min-w-0 items-baseline gap-2">{S ? <><span className="truncate">{S.label}</span>{S.hint && <span className={H(V, "truncate")}>{S.hint}</span>}</> : <span className={H("text-neutral-900/62 dark:text-neutral-100/62", "truncate")}>{c}</span>}</span></span><__mod_22728.n icon={__mod_31517.A} size={18} strokeWidth={2} aria-hidden="true" className="shrink-0 text-neutral-900/78 dark:text-neutral-100/78" /></button>{p && <ul ref={y} id={h} role="listbox" tabIndex={-1} style={{
      maxHeight: g
    }} className={H("min-w-52 max-w-[min(480px,calc(100vw-2rem))] overflow-x-hidden overflow-y-auto overscroll-contain rounded-[calc(var(--rb-r-3xl,16px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] p-2 text-neutral-900 dark:text-neutral-100 outline-none shadow-[0_0_0_1px_rgb(84_62_32/0.08),0_24px_56px_-20px_rgb(84_62_32/0.34),0_6px_16px_-8px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.65),0_24px_56px_-16px_rgb(0_0_0/0.8)]", "transition-[opacity,scale] duration-[260ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] starting:scale-[0.94] starting:opacity-0 motion-reduce:transition-none motion-reduce:starting:scale-100", "absolute z-30 max-h-[264px] w-full min-w-[100%]", f ? "bottom-full mb-1.5" : "top-full mt-1.5")}>{o.map((e, a) => {
        let n = e.value === r;
        return <li id={`${h}-${a}`} role="option" aria-selected={n} data-index={a} data-highlighted={a === m ? "" : void 0} onMouseEnter={() => k(a)} onClick={() => L(a)} className={H("relative flex min-h-10 w-full cursor-default items-center gap-2.5 rounded-[calc(var(--rb-r-md,8px))] px-3 py-2 text-left text-[15px]/[20px] font-semibold text-neutral-900 outline-none select-none [&_svg]:shrink-0 [&_svg]:text-neutral-900/70 hover:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] focus-visible:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] data-[highlighted]:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-disabled:cursor-not-allowed aria-disabled:text-neutral-900/40 dark:text-neutral-100 dark:[&_svg]:text-neutral-100/70 dark:hover:bg-neutral-100/7 dark:focus-visible:bg-neutral-100/7 dark:data-[highlighted]:bg-neutral-100/7 dark:aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-disabled:text-neutral-100/40", "pe-8")}><span className="flex min-w-0 items-baseline gap-2"><span className="truncate">{e.label}</span>{e.hint && <span className={V}>{e.hint}</span>}</span>{n && <__mod_22728.n icon={__mod_90987.A} size={18} strokeWidth={2} aria-hidden="true" className="pointer-events-none absolute end-2" />}</li>;
      })}</ul>}</div>;
}
let es = [10, 25];
let ed = (...e) => e.filter(Boolean).join(" "),
  eu = "bg-white dark:bg-neutral-950",
  ex = "bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900",
  e_ = "text-neutral-900/78 dark:text-neutral-100/78",
  eh = "text-neutral-900/62 dark:text-neutral-100/62",
  ep = "text-[14px]/[20px] font-medium",
  eb = "text-[15px]/[20px] font-bold",
  em = "h-10 border-b border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] px-3 text-left align-middle text-[13px]/[16px] font-bold tabular-nums whitespace-nowrap text-neutral-900/62 dark:text-neutral-100/62 first:ps-4 last:pe-4 dark:bg-neutral-100/4",
  ek = "h-12 border-b border-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] px-3 align-middle whitespace-nowrap text-neutral-900 dark:text-neutral-100 group-last:border-b-0 first:ps-4 last:pe-4 dark:border-neutral-100/6",
  ef = "text-right tabular-nums",
  ev = "sm:first:ps-6 sm:last:pe-6",
  eg = [{
    id: "AL-104",
    workstream: "Warehouse cutover rehearsal",
    owner: "Priya Rao",
    hours: 38,
    rate: 145,
    status: "Draft"
  }, {
    id: "AL-105",
    workstream: "Carrier exception rules",
    owner: "Mateo Silva",
    hours: 22,
    rate: 160,
    status: "Needs review"
  }, {
    id: "AL-106",
    workstream: "International receiving controls",
    owner: "Nora Jensen",
    hours: 44,
    rate: 135,
    status: "Draft"
  }, {
    id: "AL-107",
    workstream: "Executive weekly operating packet",
    owner: "Samir Patel",
    hours: 16,
    rate: 175,
    status: "Locked"
  }, {
    id: "AL-108",
    workstream: "Cold-chain compliance evidence library",
    owner: "Elena Rossi",
    hours: 31,
    rate: 150,
    status: "Draft"
  }, {
    id: "AL-109",
    workstream: "Returns triage automation",
    owner: "Devon Okafor",
    hours: 27,
    rate: 140,
    status: "Draft"
  }, {
    id: "AL-110",
    workstream: "Peak season staffing model",
    owner: "Ivy Zhang",
    hours: 19,
    rate: 165,
    status: "Needs review"
  }, {
    id: "AL-111",
    workstream: "Dock scheduling rewrite",
    owner: "Marcus Lund",
    hours: 52,
    rate: 155,
    status: "Draft"
  }, {
    id: "AL-112",
    workstream: "Vendor onboarding checklist",
    owner: "Asha Malik",
    hours: 12,
    rate: 130,
    status: "Locked"
  }, {
    id: "AL-113",
    workstream: "Inventory count reconciliation",
    owner: "Theo Grant",
    hours: 34,
    rate: 150,
    status: "Draft"
  }, {
    id: "AL-114",
    workstream: "Freight audit dispute pipeline",
    owner: "Camille Hart",
    hours: 29,
    rate: 170,
    status: "Needs review"
  }],
  ew = e => e.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0
  }),
  ej = {
    Draft: "text-neutral-900/62 dark:text-neutral-100/62",
    "Needs review": "text-[oklch(49%_0.1_68)] dark:text-[oklch(80%_0.13_68)]",
    Locked: "text-neutral-900/78 dark:text-neutral-100/78"
  };
function ey({
  status: e
}) {
  return <span className={ed("inline-flex items-start gap-1.5 text-[15px]/[20px] font-bold tabular-nums", ej[e], "whitespace-nowrap")}>{e}</span>;
}
let eN = (...e) => e.filter(Boolean).join(" "),
  eC = "bg-white dark:bg-neutral-950",
  eS = "bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900",
  eA = "text-neutral-900/78 dark:text-neutral-100/78",
  eL = "border-b border-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:border-neutral-100/7",
  eM = "h-10 border-b border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] px-3 text-left align-middle text-[13px]/[16px] font-bold tabular-nums whitespace-nowrap text-neutral-900/62 dark:text-neutral-100/62 first:ps-4 last:pe-4 dark:bg-neutral-100/4",
  eD = "group transition-[background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] bg-[oklch(95.5%_0.03_26/0.55)] hover:bg-[oklch(95.5%_0.03_26/0.8)] dark:bg-[oklch(30%_0.065_26/0.4)] dark:hover:bg-[oklch(30%_0.065_26/0.6)]",
  ez = "h-12 border-b border-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] px-3 align-middle whitespace-nowrap text-neutral-900 dark:text-neutral-100 group-last:border-b-0 first:ps-4 last:pe-4 dark:border-neutral-100/6",
  eR = "text-right tabular-nums",
  eP = "sm:first:ps-6 sm:last:pe-6",
  eW = [{
    id: "RUN-8041",
    job: "Nightly claims ledger reconciliation",
    owner: "Asha Malik",
    status: "Passed",
    duration: "14m 22s",
    checked: "39,420 rows",
    summary: "Matched carrier claims against the posted warehouse ledger. Two rounding adjustments were carried forward for manager review.",
    sources: ["ledger.carrier_claims", "warehouse.reconciliations", "s3://ops-ledger/aug-03"]
  }, {
    id: "RUN-8042",
    job: "Cold-chain incident attachment scan",
    owner: "Theo Grant",
    status: "Needs review",
    duration: "6m 09s",
    checked: "812 incidents",
    summary: "Temperature excursions clustered by lane. The Atlanta to Tampa route is missing three signed exception forms.",
    sources: ["forms.temperature_exception", "drive://regional-quality"]
  }, {
    id: "RUN-8043",
    job: "Vendor master duplicate detection",
    owner: "Camille Hart",
    status: "Passed",
    duration: "3m 58s",
    checked: "1,204 vendors",
    summary: "No active duplicates found. Four legacy supplier aliases remain archived and do not block payment release.",
    sources: ["postgres.vendor_master", "policy://supplier-aliases"]
  }, {
    id: "RUN-8044",
    job: "Freight invoice variance audit for Q3 European lanes",
    owner: "Jun Park",
    status: "Failed",
    duration: "1m 12s",
    checked: "0 rows",
    summary: "The rate card connector returned an authentication error, so no invoices could be compared. Reconnect the source and rerun.",
    sources: ["connector.rate_card", "audit://2026-q3"]
  }, {
    id: "RUN-8045",
    job: "Returns disposition rule check",
    owner: "Ivy Zhang",
    status: "Passed",
    duration: "8m 41s",
    checked: "5,109 returns",
    summary: "All dispositions matched the current policy. Twelve items were routed to refurbishment as expected.",
    sources: ["returns.dispositions", "policy://returns-2026"]
  }, {
    id: "RUN-8046",
    job: "Dock appointment overlap detection",
    owner: "Marcus Lund",
    status: "Passed",
    duration: "2m 33s",
    checked: "684 appointments",
    summary: "No double-booked dock windows. Two back-to-back slots flagged for a 10-minute buffer.",
    sources: ["scheduling.dock_windows"]
  }, {
    id: "RUN-8047",
    job: "Customs paperwork completeness sweep",
    owner: "Sofia Martins",
    status: "Needs review",
    duration: "11m 04s",
    checked: "2,940 shipments",
    summary: "Nine cross-border shipments are missing a commercial invoice attachment.",
    sources: ["customs.shipments", "mailbox://broker-intake"]
  }, {
    id: "RUN-8048",
    job: "Inventory shrink threshold review",
    owner: "Rhea Flores",
    status: "Passed",
    duration: "5m 27s",
    checked: "18,006 SKUs",
    summary: "Shrink stayed under target across every site. Columbus returns hub is trending up week over week.",
    sources: ["inventory.counts"]
  }, {
    id: "RUN-8049",
    job: "Carrier SLA breach detection",
    owner: "Devon Okafor",
    status: "Passed",
    duration: "4m 15s",
    checked: "3,377 loads",
    summary: "Two carriers breached transit SLA on the west lanes. Both are already within the penalty grace window.",
    sources: ["carriers.sla", "loads.transit"]
  }],
  eE = {
    Passed: "text-neutral-900/78 dark:text-neutral-100/78",
    "Needs review": "text-[oklch(49%_0.1_68)] dark:text-[oklch(80%_0.13_68)]",
    Failed: "text-[oklch(51%_0.18_26)] dark:text-[oklch(76%_0.14_26)]"
  };
function eO({
  status: e
}) {
  return <span className={eN("inline-flex items-start gap-1.5 text-[15px]/[20px] font-bold tabular-nums", eE[e], "whitespace-nowrap")}>{e}</span>;
}
let eT = (...e) => e.filter(Boolean).join(" "),
  eH = "bg-white dark:bg-neutral-950",
  eB = "bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900",
  eF = "text-neutral-900/78 dark:text-neutral-100/78",
  eI = "h-10 border-b border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] px-3 text-left align-middle text-[13px]/[16px] font-bold tabular-nums whitespace-nowrap text-neutral-900/62 dark:text-neutral-100/62 first:ps-4 last:pe-4 dark:bg-neutral-100/4",
  eY = "text-right tabular-nums",
  eV = "sm:first:ps-6 sm:last:pe-6",
  eU = [{
    label: "Today",
    orders: [{
      id: "ORD-4418",
      customer: "Tidal Packworks",
      lane: "Oakland → Reno",
      status: "On time",
      pallets: 18,
      eta: "11:30"
    }, {
      id: "ORD-4419",
      customer: "Harborline Grocers",
      lane: "Tacoma → Boise",
      status: "Watch",
      pallets: 26,
      eta: "13:45"
    }, {
      id: "ORD-4420",
      customer: "Juniper Health Distribution",
      lane: "Dallas → Tulsa",
      status: "On time",
      pallets: 12,
      eta: "16:10"
    }, {
      id: "ORD-4421",
      customer: "Blue Orchard Cooperative",
      lane: "Fresno → Phoenix",
      status: "Delayed",
      pallets: 31,
      eta: "18:20"
    }]
  }, {
    label: "Tomorrow",
    orders: [{
      id: "ORD-4423",
      customer: "Cedar Mill Provisions",
      lane: "Portland → Eugene",
      status: "On time",
      pallets: 14,
      eta: "08:15"
    }, {
      id: "ORD-4424",
      customer: "Ridgeway Medical Supply",
      lane: "Denver → Cheyenne",
      status: "Watch",
      pallets: 22,
      eta: "10:40"
    }, {
      id: "ORD-4425",
      customer: "Marble Arch Importers",
      lane: "Newark → Hartford",
      status: "On time",
      pallets: 7,
      eta: "12:00"
    }]
  }, {
    label: "This week",
    orders: [{
      id: "ORD-4428",
      customer: "Bellwether Cold Storage",
      lane: "Atlanta → Nashville",
      status: "On time",
      pallets: 24,
      eta: "Wed 09:20"
    }, {
      id: "ORD-4429",
      customer: "Kestrel Outdoor",
      lane: "Salt Lake City → Boise",
      status: "On time",
      pallets: 11,
      eta: "Thu 11:10"
    }, {
      id: "ORD-4430",
      customer: "Vermillion Paper Mills",
      lane: "Duluth → Fargo",
      status: "Watch",
      pallets: 33,
      eta: "Thu 15:45"
    }]
  }],
  eG = {
    "On time": "text-neutral-900/78 dark:text-neutral-100/78",
    Watch: "text-[oklch(49%_0.1_68)] dark:text-[oklch(80%_0.13_68)]",
    Delayed: "text-[oklch(51%_0.18_26)] dark:text-[oklch(76%_0.14_26)]"
  };
function eK({
  status: e,
  small: r
}) {
  return <span className={eT(r ? "inline-flex items-start gap-1 text-[14px]/[20px] font-bold tabular-nums" : "inline-flex items-start gap-1.5 text-[15px]/[20px] font-bold tabular-nums", eG[e], "whitespace-nowrap")}>{e}</span>;
}
let e$ = e => {
  let r = "ArrowRight" === e.key || "ArrowDown" === e.key ? 1 : "ArrowLeft" === e.key || "ArrowUp" === e.key ? -1 : 0;
  if (!r && "Home" !== e.key && "End" !== e.key) return;
  let a = Array.from(e.currentTarget.querySelectorAll('[role="radio"]:not(:disabled)')),
    t = a.indexOf(e.target);
  if (t < 0) return;
  e.preventDefault();
  let n = "Home" === e.key ? 0 : "End" === e.key ? a.length - 1 : (t + r + a.length) % a.length;
  a[n].focus(), a[n].click();
};
let eZ = (...e) => e.filter(Boolean).join(" "),
  eJ = "bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900",
  eQ = "text-neutral-900/78 dark:text-neutral-100/78",
  eX = "text-neutral-900/62 dark:text-neutral-100/62",
  e0 = "text-[17px]/[22px] font-extrabold",
  e1 = "text-[14px]/[20px] font-medium",
  e2 = "text-[13px]/[16px] font-semibold tabular-nums",
  e5 = "h-10 gap-2 rounded-[calc(var(--rb-r-full,999px))] px-5 text-[15px]/[20px] font-bold",
  e8 = "block min-w-0 overflow-hidden whitespace-nowrap [mask-image:linear-gradient(to_right,black_calc(100%-24px),transparent)]",
  e6 = "min-w-0 truncate text-[16px]/[20px] font-extrabold text-neutral-900 dark:text-neutral-100",
  e9 = "relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] text-neutral-900 dark:text-neutral-100 shadow-[0_0_0_1px_rgb(84_62_32/0.07),0_1px_2px_rgb(84_62_32/0.06),0_8px_22px_-10px_rgb(84_62_32/0.20)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_0_0_1px_rgb(0_0_0/0.6),0_10px_24px_-12px_rgb(0_0_0/0.8)]",
  e4 = "bg-linear-to-b from-[var(--rb-n-100,oklch(97.7%_0.0055_80))] to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-900",
  e3 = "bg-linear-to-t from-[var(--rb-n-100,oklch(97.7%_0.0055_80))] to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-900",
  e7 = [{
    id: "SHP-9284",
    client: "Everbranch Foods",
    lane: "Fresno → Denver",
    status: "In transit",
    owner: "Lena Moore",
    temp: "2.4\xb0C",
    value: 48200,
    carrier: "Crossline Freight",
    eta: "Today 17:40",
    notes: "Driver confirmed a replacement seal after the weigh-station inspection outside Grand Junction.",
    activity: [{
      time: "14:02",
      text: "Passed weigh station, seal replaced"
    }, {
      time: "11:18",
      text: "Departed Fresno cold dock"
    }, {
      time: "09:50",
      text: "Trailer pre-cooled to 2\xb0C"
    }]
  }, {
    id: "SHP-9285",
    client: "Meridian Lab Supply",
    lane: "Boston → Raleigh",
    status: "At risk",
    owner: "Omar Diaz",
    temp: "6.1\xb0C",
    value: 71900,
    carrier: "Beacon Cold Lines",
    eta: "Today 20:10",
    notes: "Temperature held above threshold for 18 minutes near Richmond. Quality team requested photos before delivery.",
    activity: [{
      time: "15:26",
      text: "Temperature excursion cleared"
    }, {
      time: "15:08",
      text: "Reefer alarm above 6\xb0C"
    }, {
      time: "12:40",
      text: "Departed Boston"
    }, {
      time: "10:15",
      text: "Quality hold placed and released"
    }]
  }, {
    id: "SHP-9286",
    client: "North Pier Robotics",
    lane: "Austin → Mesa",
    status: "Delivered",
    owner: "Ivy Zhang",
    temp: "-",
    value: 33450,
    carrier: "Sunbelt Haul",
    eta: "Delivered 13:05",
    notes: "Dock appointment closed with no shortage claim. Signed by receiving lead.",
    activity: [{
      time: "13:05",
      text: "Delivered, no exceptions"
    }, {
      time: "12:20",
      text: "Arrived at Mesa dock"
    }, {
      time: "07:45",
      text: "Departed Austin"
    }]
  }, {
    id: "SHP-9287",
    client: "Longleaf Clinical Research Network International",
    lane: "Newark → Montreal",
    status: "In transit",
    owner: "Sofia Martins",
    temp: "1.9\xb0C",
    value: 126300,
    carrier: "Borderline Logistics",
    eta: "Tomorrow 09:30",
    notes: "Customs broker cleared paperwork. Final border scan expected before 17:00.",
    activity: [{
      time: "13:40",
      text: "Customs paperwork cleared"
    }, {
      time: "11:02",
      text: "Approaching border crossing"
    }, {
      time: "06:15",
      text: "Departed Newark"
    }]
  }, {
    id: "SHP-9288",
    client: "Cedar Mill Provisions",
    lane: "Portland → Eugene",
    status: "In transit",
    owner: "Marcus Lund",
    temp: "3.2\xb0C",
    value: 18700,
    carrier: "Willamette Transport",
    eta: "Today 18:55",
    notes: "On schedule. No exceptions logged.",
    activity: [{
      time: "16:10",
      text: "Passed Salem checkpoint"
    }, {
      time: "15:00",
      text: "Departed Portland"
    }]
  }, {
    id: "SHP-9289",
    client: "Bellwether Cold Storage",
    lane: "Atlanta → Nashville",
    status: "Delivered",
    owner: "Asha Malik",
    temp: "-",
    value: 27400,
    carrier: "Piedmont Reefer",
    eta: "Delivered 16:22",
    notes: "Delivered complete. Receiving flagged one pallet for a minor label reprint.",
    activity: [{
      time: "16:22",
      text: "Delivered with note"
    }, {
      time: "15:30",
      text: "Arrived Nashville"
    }]
  }, {
    id: "SHP-9290",
    client: "Ridgeway Medical Supply",
    lane: "Denver → Cheyenne",
    status: "At risk",
    owner: "Theo Grant",
    temp: "5.4\xb0C",
    value: 54800,
    carrier: "Frontier Cold",
    eta: "Today 21:30",
    notes: "Delay expected from mountain weather advisory north of Fort Collins.",
    activity: [{
      time: "16:45",
      text: "Weather advisory on I-25"
    }, {
      time: "14:20",
      text: "Departed Denver"
    }]
  }, {
    id: "SHP-9291",
    client: "Anchor Point Seafood",
    lane: "Seattle → Spokane",
    status: "In transit",
    owner: "Rhea Flores",
    temp: "0.8\xb0C",
    value: 39900,
    carrier: "Cascade Freight",
    eta: "Today 22:15",
    notes: "Running on schedule across the pass.",
    activity: [{
      time: "17:05",
      text: "Cleared Snoqualmie Pass"
    }, {
      time: "14:30",
      text: "Departed Seattle"
    }]
  }, {
    id: "SHP-9292",
    client: "Harbor Grove Dairy",
    lane: "Sacramento → Reno",
    status: "In transit",
    owner: "Dana Cole",
    temp: "3.7\xb0C",
    value: 21600,
    carrier: "Sierra Reefer",
    eta: "Today 19:20",
    notes: "On schedule over the Donner summit route.",
    activity: [{
      time: "16:50",
      text: "Cleared Donner summit"
    }, {
      time: "15:10",
      text: "Departed Sacramento"
    }]
  }, {
    id: "SHP-9293",
    client: "Vantage Pharma Distribution",
    lane: "Chicago → Columbus",
    status: "At risk",
    owner: "Priya Nair",
    temp: "5.9\xb0C",
    value: 88400,
    carrier: "Great Lakes Cold",
    eta: "Today 23:05",
    notes: "Reefer running warm near Gary; driver monitoring closely.",
    activity: [{
      time: "17:12",
      text: "Reefer trending warm"
    }, {
      time: "13:55",
      text: "Departed Chicago"
    }]
  }, {
    id: "SHP-9294",
    client: "Tidewater Produce",
    lane: "Norfolk → Richmond",
    status: "Delivered",
    owner: "Grant Ellis",
    temp: "-",
    value: 15200,
    carrier: "Bayfront Haul",
    eta: "Delivered 12:48",
    notes: "Delivered complete with signed receipt.",
    activity: [{
      time: "12:48",
      text: "Delivered, no exceptions"
    }, {
      time: "10:30",
      text: "Departed Norfolk"
    }]
  }],
  re = {
    "In transit": "text-neutral-900 dark:text-neutral-100",
    "At risk": "text-[oklch(49%_0.1_68)] dark:text-[oklch(80%_0.13_68)]",
    Delivered: "text-neutral-900/78 dark:text-neutral-100/78"
  };
function rr({
  status: e,
  small: r
}) {
  return <span className={eZ(r ? "inline-flex items-start gap-1 text-[14px]/[20px] font-bold tabular-nums" : "inline-flex items-start gap-1.5 text-[15px]/[20px] font-bold tabular-nums", re[e], "shrink-0 whitespace-nowrap")}>{"In transit" === e && <span className="flex h-lh shrink-0 items-center"><span className="inline-block size-3 shrink-0 rounded-full border-2 border-current border-t-transparent animate-spin [animation-duration:700ms] motion-reduce:animate-none" aria-hidden="true" /></span>}{e}</span>;
}
function ra({
  label: e,
  value: r
}) {
  return <div className="min-w-0"><dt className="min-w-0 text-[15px]/[20px] font-bold text-neutral-900/62 dark:text-neutral-100/62">{e}</dt><dd className={eZ("flex min-w-0 flex-wrap items-center gap-2 text-[15px]/[22px] font-medium text-neutral-900 dark:text-neutral-100 [overflow-wrap:anywhere]", "mt-0.5")}>{r}</dd></div>;
}
function rt() {
  let e = (0, React.useRef)(null),
    [r, a] = (0, React.useState)({
      start: !1,
      end: !1
    }),
    t = (0, React.useCallback)(() => {
      let r = e.current;
      if (!r) return;
      let {
        scrollTop: t,
        scrollHeight: n,
        clientHeight: l
      } = r;
      a({
        start: t > 1,
        end: Math.ceil(t + l) < n - 1
      });
    }, []);
  return (0, React.useEffect)(() => {
    t();
    let r = e.current,
      a = r?.ownerDocument.defaultView;
    if (!r || !a?.ResizeObserver) return;
    let n = new a.ResizeObserver(t);
    return n.observe(r), () => n.disconnect();
  }, [t]), {
    ref: e,
    edges: r,
    onScroll: t
  };
}
let rs = (...e) => e.filter(Boolean).join(" "),
  ri = "bg-white dark:bg-neutral-950",
  rc = "bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900",
  rd = "h-10 border-b border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] px-3 text-left align-middle text-[13px]/[16px] font-bold tabular-nums whitespace-nowrap text-neutral-900/62 dark:text-neutral-100/62 first:ps-4 last:pe-4 dark:bg-neutral-100/4",
  ru = "h-12 border-b border-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] px-3 align-middle whitespace-nowrap text-neutral-900 dark:text-neutral-100 group-last:border-b-0 first:ps-4 last:pe-4 dark:border-neutral-100/6",
  rx = "sm:first:ps-6 sm:last:pe-6",
  r_ = ["Loading", "Empty", "Error"],
  rh = [["w-40", "w-24"], ["w-32", "w-20"], ["w-48", "w-28"], ["w-36", "w-20"], ["w-28", "w-24"], ["w-44", "w-16"], ["w-32", "w-28"], ["w-40", "w-20"], ["w-24", "w-24"], ["w-44", "w-24"], ["w-36", "w-20"]];
function rp() {
  return <thead className={rs(ri, "sticky top-0 z-20")}><tr><th scope="col" className={rs(rd, rx)}>Source</th><th scope="col" className={rs(rd, rx, "w-[180px]")}>Owner</th><th scope="col" className={rs(rd, rx, "w-[150px]")}>Status</th><th scope="col" className={rs(rd, rx, "w-[120px] text-right")}>Records</th></tr></thead>;
}
function rb({
  className: e
}) {
  return <span className={rs("h-[0.7em] rounded-[calc(var(--rb-r-full,999px))] bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-100/8", "block", e)} />;
}
let rm = e => {
    let r = "ArrowRight" === e.key || "ArrowDown" === e.key ? 1 : "ArrowLeft" === e.key || "ArrowUp" === e.key ? -1 : 0;
    if (!r && "Home" !== e.key && "End" !== e.key) return;
    let a = Array.from(e.currentTarget.querySelectorAll('[role="radio"]:not(:disabled)')),
      t = a.indexOf(e.target);
    if (t < 0) return;
    e.preventDefault();
    let n = "Home" === e.key ? 0 : "End" === e.key ? a.length - 1 : (t + r + a.length) % a.length;
    a[n].focus(), a[n].click();
  },
  rk = (...e) => e.filter(Boolean).join(" "),
  rf = "bg-white dark:bg-neutral-950",
  rv = "bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900",
  rg = "text-neutral-900/78 dark:text-neutral-100/78",
  rw = "border-r border-transparent",
  rj = "text-[15px]/[20px] font-bold",
  ry = "h-10 border-b border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] px-3 text-left align-middle text-[13px]/[16px] font-bold tabular-nums whitespace-nowrap text-neutral-900/62 dark:text-neutral-100/62 first:ps-4 last:pe-4 dark:bg-neutral-100/4",
  rN = "h-12 border-b border-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] px-3 align-middle whitespace-nowrap text-neutral-900 dark:text-neutral-100 group-last:border-b-0 first:ps-4 last:pe-4 dark:border-neutral-100/6",
  rC = "text-right tabular-nums",
  rS = "sm:first:ps-6 sm:last:pe-6",
  rA = [{
    site: "Atlanta Fulfillment",
    dock: "Bay 14",
    days: [86, 91, 77, 83, 94, 61, 40],
    peak: 94,
    risk: "Watch"
  }, {
    site: "Reno Crossdock",
    dock: "Bay 03",
    days: [72, 70, 69, 74, 81, 58, 35],
    peak: 81,
    risk: "Clear"
  }, {
    site: "Long Beach Import Annex With Extended Customs Queue",
    dock: "Yard 9",
    days: [97, 98, 95, 92, 89, 84, 70],
    peak: 98,
    risk: "High"
  }, {
    site: "Columbus Returns Hub",
    dock: "Bay 21",
    days: [64, 68, 71, 73, 76, 52, 30],
    peak: 76,
    risk: "Clear"
  }, {
    site: "Dallas Regional Depot",
    dock: "Bay 07",
    days: [88, 84, 90, 92, 96, 66, 44],
    peak: 96,
    risk: "Watch"
  }, {
    site: "Newark Gateway",
    dock: "Bay 12",
    days: [79, 82, 85, 88, 91, 60, 38],
    peak: 91,
    risk: "Watch"
  }, {
    site: "Phoenix Sortation",
    dock: "Bay 05",
    days: [61, 63, 66, 70, 74, 49, 28],
    peak: 74,
    risk: "Clear"
  }, {
    site: "Chicago Inbound",
    dock: "Bay 18",
    days: [93, 95, 97, 96, 98, 78, 55],
    peak: 98,
    risk: "High"
  }, {
    site: "Denver Cold Storage",
    dock: "Bay 02",
    days: [70, 72, 74, 71, 80, 57, 33],
    peak: 80,
    risk: "Clear"
  }, {
    site: "Seattle Import Yard",
    dock: "Yard 4",
    days: [83, 85, 81, 87, 90, 62, 41],
    peak: 90,
    risk: "Watch"
  }, {
    site: "Miami Cross-Border",
    dock: "Bay 09",
    days: [76, 78, 80, 82, 85, 55, 36],
    peak: 85,
    risk: "Clear"
  }],
  rL = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  rM = {
    Clear: "text-neutral-900/78 dark:text-neutral-100/78",
    Watch: "text-[oklch(49%_0.1_68)] dark:text-[oklch(80%_0.13_68)]",
    High: "text-[oklch(51%_0.18_26)] dark:text-[oklch(76%_0.14_26)]"
  };
function rD({
  risk: e
}) {
  return <span className={rk("inline-flex items-start gap-1.5 text-[15px]/[20px] font-bold tabular-nums", rM[e], "whitespace-nowrap")}>{e}</span>;
}
function rz({
  label: e,
  sortKey: r,
  sort: a,
  onSort: n,
  align: c = "left"
}) {
  let d = a.key === r,
    u = d ? "asc" === a.dir ? __mod_24513.A : __mod_20148.A : __mod_31517.A;
  return <button type="button" data-sorted={d ? "true" : void 0} onClick={() => n(r)} className={rk("-mx-1.5 inline-flex h-8 min-w-0 cursor-pointer items-center gap-1 rounded-[calc(var(--rb-r-full,999px))] px-1.5 transition-[background-color,color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-neutral-900/5 hover:text-neutral-900 data-sorted:text-neutral-900 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:hover:bg-neutral-100/6 dark:hover:text-neutral-100 dark:data-sorted:text-neutral-100", "max-w-full", "right" === c && "flex-row-reverse")}><span className="truncate">{e}</span><__mod_22728.n icon={u} size={14} strokeWidth={2} aria-hidden="true" className="shrink-0" /></button>;
}
let rR = {
    "data-table-1": function () {
      let {
          ref: e,
          edges: r,
          onScroll: a
        } = function () {
          let e = (0, React.useRef)(null),
            [r, a] = (0, React.useState)({
              start: !1,
              end: !1
            }),
            t = (0, React.useCallback)(() => {
              let r = e.current;
              if (!r) return;
              let {
                scrollLeft: t,
                scrollWidth: n,
                clientWidth: l
              } = r;
              a({
                start: t > 1,
                end: Math.ceil(t + l) < n - 1
              });
            }, []);
          return (0, React.useEffect)(() => {
            t();
            let r = e.current,
              a = r?.ownerDocument.defaultView;
            if (!r || !a?.ResizeObserver) return;
            let n = new a.ResizeObserver(t);
            return n.observe(r), () => n.disconnect();
          }, [t]), {
            ref: e,
            edges: r,
            onScroll: t
          };
        }(),
        {
          ref: o,
          edges: i,
          onScroll: L
        } = function () {
          let e = (0, React.useRef)(null),
            [r, a] = (0, React.useState)({
              start: !1,
              end: !1
            }),
            t = (0, React.useCallback)(() => {
              let r = e.current;
              if (!r) return;
              let {
                scrollTop: t,
                scrollHeight: n,
                clientHeight: l
              } = r;
              a({
                start: t > 1,
                end: Math.ceil(t + l) < n - 1
              });
            }, []);
          return (0, React.useEffect)(() => {
            t();
            let r = e.current,
              a = r?.ownerDocument.defaultView;
            if (!r || !a?.ResizeObserver) return;
            let n = new a.ResizeObserver(t);
            return n.observe(r), () => n.disconnect();
          }, [t]), {
            ref: e,
            edges: r,
            onScroll: t
          };
        }(),
        [P, W] = (0, React.useState)(""),
        [E, O] = (0, React.useState)(null),
        [T, H] = (0, React.useState)({
          Owner: !0,
          Plan: !0,
          Region: !0,
          Renewal: !0
        }),
        [B, F] = (0, React.useState)(!1),
        [I, Y] = (0, React.useState)({
          key: "mrr",
          dir: "desc"
        }),
        V = (0, React.useRef)([]),
        U = (0, React.useRef)(null),
        G = (0, React.useRef)(null),
        [K, $] = (0, React.useState)(!1);
      (0, React.useEffect)(() => {
        if (!B) return;
        let e = requestAnimationFrame(() => $(!0)),
          r = G.current?.ownerDocument,
          a = e => {
            let r = e.target;
            U.current?.contains(r) || G.current?.contains(r) || ($(!1), F(!1));
          },
          t = e => {
            "Escape" === e.key && (e.preventDefault(), $(!1), F(!1), G.current?.focus({
              preventScroll: !0
            }));
          };
        return r?.addEventListener("pointerdown", a), r?.addEventListener("keydown", t), () => {
          cancelAnimationFrame(e), r?.removeEventListener("pointerdown", a), r?.removeEventListener("keydown", t);
        };
      }, [B]);
      let q = e => {
          $(!1), F(!1), e && G.current?.focus({
            preventScroll: !0
          });
        },
        Z = e => Y(r => r.key === e ? {
          key: e,
          dir: "asc" === r.dir ? "desc" : "asc"
        } : {
          key: e,
          dir: "name" === e ? "asc" : "desc"
        }),
        J = (0, React.useMemo)(() => {
          let e = P.trim().toLowerCase(),
            r = S.filter(r => (!E || r.plan === E) && (!e || r.name.toLowerCase().includes(e) || r.owner.toLowerCase().includes(e))),
            a = "asc" === I.dir ? 1 : -1;
          return [...r].sort((e, r) => "mrr" === I.key ? (e.mrr - r.mrr) * a : String(e[I.key]).localeCompare(String(r[I.key])) * a);
        }, [P, E, I]),
        Q = e => V.current[(e + A.length) % A.length]?.focus({
          preventScroll: !0
        });
      return <div className={h(p, "text-neutral-900 dark:text-neutral-100", "relative flex h-full min-h-[680px] w-full flex-col overflow-hidden")}><div className="flex min-h-0 flex-1 flex-col overflow-hidden"><header className={h(b, "flex h-14 shrink-0 items-center gap-3 px-4 sm:px-6")}><h2 className={h("text-[17px]/[22px] font-extrabold", "min-w-0 flex-1 truncate")}>Accounts</h2><button type="button" className={h(f, v, "max-sm:hidden")}><__mod_22728.n icon={__mod_92752.A} size={18} strokeWidth={2} aria-hidden="true" className="shrink-0" />Export</button></header><div className={h(b, "flex shrink-0 flex-wrap items-center gap-2 px-4 py-2 sm:h-12 sm:flex-nowrap sm:px-6 sm:py-0")}><label className={h("relative flex w-full min-w-0 cursor-text items-center rounded-[calc(var(--rb-r-xl,12px))] data-concentric:rounded-[var(--rb-r-5xl,22px)] border border-transparent bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] text-[15px]/[20px] font-medium text-neutral-900 transition-[border-color,box-shadow,background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:not-focus-within:not-has-[[aria-invalid=true]]:not-has-[input:disabled]:not-has-[input[readonly]]:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] focus-within:border-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] focus-within:bg-white focus-within:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] has-[[aria-invalid=true]]:border-[oklch(60%_0.236_26)] has-[[aria-invalid=true]]:bg-[oklch(97.5%_0.016_26)] has-[input:disabled]:cursor-not-allowed has-[input:disabled]:text-neutral-900/40 has-[input:disabled]:shadow-none has-[input[readonly]]:cursor-default has-[input[readonly]]:shadow-none dark:text-neutral-100 dark:hover:not-focus-within:not-has-[[aria-invalid=true]]:not-has-[input:disabled]:not-has-[input[readonly]]:bg-neutral-900 dark:focus-within:border-[var(--rb-accent,oklch(81%_0.16_163))] dark:focus-within:bg-neutral-900 dark:focus-within:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:has-[[aria-invalid=true]]:border-[oklch(65.2%_0.219_26)] dark:has-[[aria-invalid=true]]:bg-[oklch(26%_0.04_26)] dark:has-[input:disabled]:text-neutral-100/40", "h-8", "flex-1 sm:max-w-xs")}><span data-affix={!0} className="flex shrink-0 items-center gap-2 text-[15px]/[20px] font-semibold text-neutral-900/62 dark:text-neutral-100/62 select-none first:ps-3.5 last:pe-3.5 has-[button]:first:ps-1 has-[button]:last:pe-1"><__mod_22728.n icon={__mod_66575.A} size={18} strokeWidth={2} aria-hidden="true" /></span><input value={P} onChange={e => W(e.target.value)} placeholder="Search accounts" className="h-full w-full min-w-0 flex-1 bg-transparent px-3 outline-none [[data-affix]+&]:ps-2 [&:has(+[data-affix])]:pe-2 placeholder:font-medium placeholder:text-neutral-900/55 disabled:cursor-not-allowed disabled:placeholder:text-neutral-900/30 dark:placeholder:text-neutral-100/55 dark:disabled:placeholder:text-neutral-100/30 dark:[color-scheme:dark]" /><span className="sr-only">Search accounts</span></label><div className="relative -mx-4 order-last w-[calc(100%+2rem)] sm:order-none sm:mx-0 sm:w-auto"><div ref={e} onScroll={a} className="flex items-center gap-1.5 overflow-x-auto px-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:overflow-visible sm:px-0"><button type="button" aria-pressed={null === E} onClick={() => O(null)} className={g}>All plans</button>{["Enterprise", "Scale", "Growth"].map(e => {
                  let r = E === e;
                  return <button type="button" aria-pressed={r} onClick={() => O(r ? null : e)} className={g}>{e}</button>;
                })}</div><div aria-hidden="true" className={h("bg-linear-to-r from-[var(--rb-n-100,oklch(97.7%_0.0055_80))] to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-900", "pointer-events-none absolute inset-y-0 left-0 w-8 sm:hidden", r.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={h("bg-linear-to-l from-[var(--rb-n-100,oklch(97.7%_0.0055_80))] to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-900", "pointer-events-none absolute inset-y-0 right-0 w-8 sm:hidden", r.end ? "opacity-100" : "opacity-0")} /></div><div className="relative ml-auto" onKeyDown={e => {
              if (!B) return;
              let r = e.currentTarget.ownerDocument.activeElement,
                a = V.current.findIndex(e => e === r);
              "Tab" === e.key && q(!1), "ArrowDown" === e.key && (e.preventDefault(), Q(a + 1)), "ArrowUp" === e.key && (e.preventDefault(), Q(a < 0 ? A.length - 1 : a - 1)), "Home" === e.key && (e.preventDefault(), Q(0)), "End" === e.key && (e.preventDefault(), Q(A.length - 1));
            }}><button ref={G} type="button" aria-haspopup="menu" aria-expanded={B} onClick={() => {
                B ? q(!1) : F(!0);
              }} className={h(f, "h-8 gap-1.5 rounded-[calc(var(--rb-r-full,999px))] px-3.5 text-[14px]/[18px] font-bold")}><__mod_22728.n icon={__mod_62995.A} size={18} strokeWidth={2} aria-hidden="true" className="shrink-0" /><span className="max-sm:sr-only">Columns</span><__mod_22728.n icon={__mod_20148.A} size={18} strokeWidth={2} aria-hidden="true" className={h("shrink-0", B && "rotate-180")} /></button>{B && <div ref={U} role="menu" aria-label="Toggle columns" className={h("min-w-52 max-w-[min(480px,calc(100vw-2rem))] overflow-x-hidden overflow-y-auto overscroll-contain rounded-[calc(var(--rb-r-3xl,16px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] p-2 text-neutral-900 dark:text-neutral-100 outline-none shadow-[0_0_0_1px_rgb(84_62_32/0.08),0_24px_56px_-20px_rgb(84_62_32/0.34),0_6px_16px_-8px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.65),0_24px_56px_-16px_rgb(0_0_0/0.8)]", "transition-[opacity,scale] duration-[260ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] starting:scale-[0.94] starting:opacity-0 motion-reduce:transition-none motion-reduce:starting:scale-100", "absolute right-0 top-9 z-30 w-48", K ? "opacity-100" : "opacity-0")}>{A.map((e, r) => <button ref={e => {
                  V.current[r] = e;
                }} type="button" role="menuitemcheckbox" aria-checked={T[e]} onClick={() => H(r => ({
                  ...r,
                  [e]: !r[e]
                }))} className={h("relative flex min-h-10 w-full cursor-default items-center gap-2.5 rounded-[calc(var(--rb-r-md,8px))] px-3 py-2 text-left text-[15px]/[20px] font-semibold text-neutral-900 outline-none select-none [&_svg]:shrink-0 [&_svg]:text-neutral-900/70 hover:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] focus-visible:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] data-[highlighted]:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-disabled:cursor-not-allowed aria-disabled:text-neutral-900/40 dark:text-neutral-100 dark:[&_svg]:text-neutral-100/70 dark:hover:bg-neutral-100/7 dark:focus-visible:bg-neutral-100/7 dark:data-[highlighted]:bg-neutral-100/7 dark:aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-disabled:text-neutral-100/40", "ps-9")}><span aria-hidden="true" className="pointer-events-none absolute start-3 flex size-[18px] items-center justify-center">{T[e] && <__mod_22728.n icon={__mod_90987.A} size={18} strokeWidth={2} />}</span>{e}</button>)}</div>}</div></div><div className="relative min-h-0 flex-1"><div ref={o} onScroll={L} className="h-full overflow-auto"><table className={h("w-full border-separate border-spacing-0 text-left text-[15px]/[22px] font-medium", "hidden min-w-[820px] md:table")}><caption className="sr-only">Customer accounts</caption><thead className={h(p, "sticky top-0 z-20")}><tr><R label="Account" sortKey="name" sort={I} onSort={Z} />{T.Owner && <th scope="col" className={h(j, C)}>Owner</th>}{T.Plan && <th scope="col" className={h(j, C, "w-[110px]")}>Plan</th>}<th scope="col" className={h(j, C, "w-[140px]")}>Status</th>{T.Region && <th scope="col" className={h(j, C, "w-[150px]")}>Region</th>}<R label="MRR" sortKey="mrr" sort={I} onSort={Z} align="right" className="w-[110px]" />{T.Renewal && <R label="Renewal" sortKey="renewalOn" sort={I} onSort={Z} align="right" className="w-[120px]" />}</tr></thead><tbody>{J.map(e => <tr className="group transition-[background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:not-aria-selected:bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] dark:hover:not-aria-selected:bg-neutral-100/4 dark:aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)]"><td className={h(y, C, "max-w-[280px]")}><span className={h(k, w)}>{e.name}</span></td>{T.Owner && <td className={h(y, C)}><span className={m}>{e.owner}</span></td>}{T.Plan && <td className={h(y, C)}><span className={m}>{e.plan}</span></td>}<td className={h(y, C)}><M status={e.status} /></td>{T.Region && <td className={h(y, C)}><span className={m}>{e.region}</span></td>}<td className={h(y, N, C)}>{D(e.mrr)}</td>{T.Renewal && <td className={h(y, N, C)}><span className={m}>{z(e.renewalOn)}</span></td>}</tr>)}</tbody></table><div className="space-y-2 p-4 md:hidden">{J.length > 0 && <div className={h("relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] text-neutral-900 dark:text-neutral-100 shadow-[0_0_0_1px_rgb(84_62_32/0.07),0_1px_2px_rgb(84_62_32/0.06),0_8px_22px_-10px_rgb(84_62_32/0.20)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_0_0_1px_rgb(0_0_0/0.6),0_10px_24px_-12px_rgb(0_0_0/0.8)]", "divide-y divide-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:divide-neutral-100/7")}>{J.map(e => <div className={h("relative flex min-h-12 w-full min-w-0 flex-wrap items-center gap-x-3 gap-y-1 py-2.5 text-left text-neutral-900 dark:text-neutral-100 transition-[background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] has-[[data-description]]:min-h-16", "px-4")}><div className="flex w-full items-center justify-between gap-3"><p className={h(k, w, "flex-1")}>{e.name}</p><span className={h("text-[15px]/[22px] font-medium", N, "shrink-0")}>{D(e.mrr)}</span></div><div className="flex w-full items-center justify-between gap-3"><M status={e.status} small={!0} /><span className={h("shrink-0 text-[14px]/[20px] font-semibold tabular-nums text-neutral-900/62 dark:text-neutral-100/62", "flex gap-2")}><span>{e.plan}</span><span>Renews {z(e.renewalOn)}</span></span></div></div>)}</div>}</div>{0 === J.length && <div className="flex min-h-[420px] flex-col items-center justify-center px-6 py-16 text-center"><span aria-hidden="true" className={h(m, "mb-3 flex h-10 w-10 items-center justify-center")}><__mod_22728.n icon={__mod_73516.A} size={20} strokeWidth={2} /></span><p className="text-[19px]/[24px] font-extrabold tracking-[-0.01em] text-neutral-900 dark:text-neutral-100">No matching accounts</p><p className={h("max-w-[48ch] text-[15px]/[22px] font-medium text-neutral-900/78 dark:text-neutral-100/78", "mt-1")}>Try a different search, or clear the plan filter.</p><button type="button" onClick={() => {
                  W(""), O(null);
                }} className={h(f, v, "mt-4")}>Clear filters</button></div>}</div><div aria-hidden="true" className={h("bg-linear-to-t from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 bottom-0 h-8", i.end ? "opacity-100" : "opacity-0")} /></div><footer className={h(b, "text-[14px]/[20px] font-semibold tabular-nums text-neutral-900/62 dark:text-neutral-100/62", "flex h-12 shrink-0 items-center px-4 sm:px-6")}>Showing {J.length} of {S.length} accounts</footer></div></div>;
    },
    "data-table-2": function () {
      let {
          ref: e,
          edges: r,
          onScroll: a
        } = function () {
          let e = (0, React.useRef)(null),
            [r, a] = (0, React.useState)({
              start: !1,
              end: !1
            }),
            t = (0, React.useCallback)(() => {
              let r = e.current;
              if (!r) return;
              let {
                scrollTop: t,
                scrollHeight: n,
                clientHeight: l
              } = r;
              a({
                start: t > 1,
                end: Math.ceil(t + l) < n - 1
              });
            }, []);
          return (0, React.useEffect)(() => {
            t();
            let r = e.current,
              a = r?.ownerDocument.defaultView;
            if (!r || !a?.ResizeObserver) return;
            let n = new a.ResizeObserver(t);
            return n.observe(r), () => n.disconnect();
          }, [t]), {
            ref: e,
            edges: r,
            onScroll: t
          };
        }(),
        [o, s] = (0, React.useState)(new Set()),
        [i, d] = (0, React.useState)(new Set(["PAY-0182", "PAY-0185"])),
        [u, x] = (0, React.useState)(10),
        [_, h] = (0, React.useState)(1),
        p = Math.max(1, Math.ceil(er.length / u)),
        b = Math.min(_, p),
        m = (b - 1) * u,
        k = er.slice(m, m + u),
        f = k.map(e => e.id),
        v = f.filter(e => i.has(e)).length,
        g = v === f.length && f.length > 0,
        w = (0, React.useMemo)(() => er.filter(e => i.has(e.id)).reduce((e, r) => e + r.amount, 0), [i]),
        j = () => d(new Set()),
        y = e => h(Math.min(Math.max(e, 1), p));
      return <div className={H(B, I, "relative flex h-full min-h-[680px] w-full flex-col overflow-hidden")}><div className="flex min-h-0 flex-1 flex-col overflow-hidden"><header className={H(F, "flex h-14 shrink-0 items-center gap-3 px-4 sm:px-6")}><h2 className={H("text-[17px]/[22px] font-extrabold", "min-w-0 flex-1 truncate")}>Outgoing payments</h2><span className={H(K, V, "shrink-0")}>{er.length} pending</span></header>{i.size > 0 ? <div className={H("bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900", "flex h-12 shrink-0 items-center gap-3 px-4 sm:px-6")}><span aria-live="polite" className={G}>{i.size} selected</span><span className={K}>{ea(w)}</span><div className="ml-auto flex items-center gap-1"><button type="button" onClick={() => {
                s(e => new Set([...e, ...i])), j();
              }} className={X}><__mod_22728.n icon={__mod_22670.A} size={18} strokeWidth={2} aria-hidden="true" className="shrink-0" /><span className="max-sm:sr-only">Hold</span></button><button type="button" className={X}><__mod_22728.n icon={__mod_92752.A} size={18} strokeWidth={2} aria-hidden="true" className="shrink-0" /><span className="max-sm:sr-only">Export</span></button><button type="button" onClick={j} aria-label="Clear selection" className={X}><__mod_22728.n icon={__mod_89289.A} size={18} strokeWidth={2} aria-hidden="true" /></button></div></div> : <div className={H(F, U, Y, "flex h-12 shrink-0 items-center px-4 sm:px-6")}>Select rows to approve, hold, or export a batch.</div>}<div className="relative min-h-0 flex-1"><div ref={e} onScroll={a} className="h-full overflow-auto"><table className={H("w-full border-separate border-spacing-0 text-left text-[15px]/[22px] font-medium", "min-w-[720px]")}><caption className="sr-only">Outgoing vendor payments</caption><thead className={H(B, "sticky top-0 z-20")}><tr><th scope="col" className={H(Z, ee, "w-12")}><el checked={g} indeterminate={v > 0 && !g} onChange={() => d(e => {
                        let r = new Set(e);
                        return g ? f.forEach(e => r.delete(e)) : f.forEach(e => r.add(e)), r;
                      })} label="Select all payments on this page" /></th><th scope="col" className={H(Z, ee)}>Vendor</th><th scope="col" className={H(Z, ee, "w-[160px]")}>Owner</th><th scope="col" className={H(Z, ee, "w-[150px]")}>Status</th><th scope="col" className={H(Z, ee, "w-[120px] text-right")}>Amount</th><th scope="col" className={H(Z, ee, "w-[90px] text-right")}>Due</th></tr></thead><tbody>{k.map(e => {
                    let r = i.has(e.id);
                    return <tr aria-selected={r} className="group transition-[background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:not-aria-selected:bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] dark:hover:not-aria-selected:bg-neutral-100/4 dark:aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)]"><td className={H(J, ee, "w-12")}><el checked={r} onChange={() => {
                          let r;
                          return r = e.id, d(e => {
                            let a = new Set(e);
                            return a.has(r) ? a.delete(r) : a.add(r), a;
                          });
                        }} label={`Select ${e.vendor}`} /></td><td className={H(J, ee, "max-w-[260px] py-1.5")}><span className={H(G, "block min-w-0 overflow-hidden whitespace-nowrap [mask-image:linear-gradient(to_right,black_calc(100%-24px),transparent)]")}>{e.vendor}</span><span className={H("font-mono text-[12px]/[16px] tabular-nums", V, "block")}>{e.id}</span></td><td className={H(J, ee, "truncate")}><span className={Y}>{e.owner}</span></td><td className={H(J, ee)}><en status={o.has(e.id) ? "On hold" : e.status} /></td><td className={H(J, Q, ee)}>{ea(e.amount)}</td><td className={H(J, Q, ee)}><span className={Y}>{e.due}</span></td></tr>;
                  })}</tbody></table></div><div aria-hidden="true" className={H("bg-linear-to-t from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 bottom-0 h-8", r.end ? "opacity-100" : "opacity-0")} /></div><footer className={H(F, "flex h-12 shrink-0 items-center gap-3 px-4 sm:px-6")}><div className={H(U, Y, "hidden items-center gap-2 sm:flex")}>Rows per page<eo value={String(u)} onChange={e => {
                x(Number(e)), h(1);
              }} options={es.map(e => ({
                value: String(e),
                label: String(e)
              }))} ariaLabel="Rows per page" triggerClassName="min-w-[0px]" /></div><span className={q}><span className={I}>{m + 1}–{m + k.length}</span> of {er.length}</span><div className="ml-auto flex items-center gap-1"><span className={H(q, "sm:hidden")}>{b} / {p}</span><div className="flex items-stretch gap-1"><button type="button" aria-disabled={1 === b} onClick={() => y(b - 1)} aria-label="Previous page" className={$}><__mod_22728.n icon={__mod_58661.A} size={18} strokeWidth={2} aria-hidden="true" /></button>{Array.from({
                  length: p
                }, (e, r) => r + 1).map(e => <button type="button" onClick={() => y(e)} aria-current={e === b ? "page" : void 0} className={H($, "max-sm:hidden")}>{e}</button>)}<button type="button" aria-disabled={b === p} onClick={() => y(b + 1)} aria-label="Next page" className={$}><__mod_22728.n icon={__mod_5042.A} size={18} strokeWidth={2} aria-hidden="true" /></button></div></div></footer></div></div>;
    },
    "data-table-3": function () {
      let {
          ref: e,
          edges: r,
          onScroll: a
        } = function () {
          let e = (0, React.useRef)(null),
            [r, a] = (0, React.useState)({
              start: !1,
              end: !1
            }),
            t = (0, React.useCallback)(() => {
              let r = e.current;
              if (!r) return;
              let {
                scrollTop: t,
                scrollHeight: n,
                clientHeight: l
              } = r;
              a({
                start: t > 1,
                end: Math.ceil(t + l) < n - 1
              });
            }, []);
          return (0, React.useEffect)(() => {
            t();
            let r = e.current,
              a = r?.ownerDocument.defaultView;
            if (!r || !a?.ResizeObserver) return;
            let n = new a.ResizeObserver(t);
            return n.observe(r), () => n.disconnect();
          }, [t]), {
            ref: e,
            edges: r,
            onScroll: t
          };
        }(),
        [o, s] = (0, React.useState)(eg),
        [i, c] = (0, React.useState)({}),
        [d, u] = (0, React.useState)(null),
        [_, h] = (0, React.useState)(""),
        p = (0, React.useRef)([]);
      (0, React.useEffect)(() => {
        let e = p.current;
        return () => e.forEach(clearTimeout);
      }, []);
      let b = () => {
          if (!d) return;
          let {
              id: e,
              field: r
            } = d,
            a = Math.max(0, Math.round(Number(_) || 0));
          s(t => t.map(t => t.id === e ? {
            ...t,
            [r]: a
          } : t)), u(null), c(r => ({
            ...r,
            [e]: "saving"
          })), p.current.push(window.setTimeout(() => {
            c(r => ({
              ...r,
              [e]: "saved"
            })), p.current.push(window.setTimeout(() => c(r => ({
              ...r,
              [e]: "idle"
            })), 1600));
          }, 550));
        },
        m = o.reduce((e, r) => e + r.hours * r.rate, 0),
        k = (e, r) => {
          let a = d?.id === e.id && d.field === r,
            n = "hours" === r ? e.hours : e.rate,
            s = "hours" === r ? String(n) : ew(n);
          return a ? <span className="ms-auto block w-20"><span className={ed("relative flex w-full min-w-0 cursor-text items-center rounded-[calc(var(--rb-r-xl,12px))] data-concentric:rounded-[var(--rb-r-5xl,22px)] border border-transparent bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] text-[15px]/[20px] font-medium text-neutral-900 transition-[border-color,box-shadow,background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:not-focus-within:not-has-[[aria-invalid=true]]:not-has-[input:disabled]:not-has-[input[readonly]]:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] focus-within:border-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] focus-within:bg-white focus-within:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] has-[[aria-invalid=true]]:border-[oklch(60%_0.236_26)] has-[[aria-invalid=true]]:bg-[oklch(97.5%_0.016_26)] has-[input:disabled]:cursor-not-allowed has-[input:disabled]:text-neutral-900/40 has-[input:disabled]:shadow-none has-[input[readonly]]:cursor-default has-[input[readonly]]:shadow-none dark:text-neutral-100 dark:hover:not-focus-within:not-has-[[aria-invalid=true]]:not-has-[input:disabled]:not-has-[input[readonly]]:bg-neutral-900 dark:focus-within:border-[var(--rb-accent,oklch(81%_0.16_163))] dark:focus-within:bg-neutral-900 dark:focus-within:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:has-[[aria-invalid=true]]:border-[oklch(65.2%_0.219_26)] dark:has-[[aria-invalid=true]]:bg-[oklch(26%_0.04_26)] dark:has-[input:disabled]:text-neutral-100/40", "h-8")}><input autoFocus={!0} type="text" inputMode="numeric" value={_} onChange={e => h(e.target.value.replace(/[^0-9]/g, ""))} onBlur={b} onKeyDown={e => {
                "Enter" === e.key && b(), "Escape" === e.key && u(null);
              }} aria-label={`Edit ${r} for ${e.workstream}`} className={ed("h-full w-full min-w-0 flex-1 bg-transparent px-3.5 outline-none [[data-affix]+&]:ps-2 [&:has(+[data-affix])]:pe-2 placeholder:font-medium placeholder:text-neutral-900/55 disabled:cursor-not-allowed disabled:placeholder:text-neutral-900/30 dark:placeholder:text-neutral-100/55 dark:disabled:placeholder:text-neutral-100/30 dark:[color-scheme:dark]", "text-right")} /></span></span> : "Locked" === e.status ? <span className={ed(eb, ef, eh, "inline-flex h-7 w-20 items-center justify-end pe-[13px]")}>{s}</span> : <button type="button" onClick={() => {
            var a;
            return a = e.id, void (o.find(e => e.id === a)?.status !== "Locked" && (u({
              id: a,
              field: r
            }), h(String(n))));
          }} className={ed("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] text-neutral-900 dark:text-neutral-100 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] active:not-disabled:translate-y-px active:not-disabled:shadow-[inset_0_1px_3px_rgb(84_62_32/0.16),0_0_0_1px_rgb(84_62_32/0.10)] dark:active:not-disabled:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14),0_0_0_1px_rgb(84_62_32/0.10)] dark:aria-expanded:bg-neutral-800 dark:aria-expanded:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] disabled:bg-none disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] disabled:text-neutral-900/40 disabled:shadow-none dark:disabled:bg-neutral-800/60 dark:disabled:text-neutral-100/40", "h-8 gap-1.5 rounded-[calc(var(--rb-r-full,999px))] px-3.5 text-[14px]/[18px] font-bold", ef, "group/edit w-20 justify-end")}><__mod_22728.n icon={__mod_66654.A} size={18} strokeWidth={2} aria-hidden="true" className={ed(eh, "shrink-0 md:opacity-0 md:group-hover/edit:opacity-100 md:group-focus-visible/edit:opacity-100")} />{s}</button>;
        };
      return <div className={ed(eu, "text-neutral-900 dark:text-neutral-100", "relative flex h-full min-h-[680px] w-full flex-col overflow-hidden")}><div className="flex min-h-0 flex-1 flex-col overflow-hidden"><header className={ed(ex, "flex h-14 shrink-0 items-center gap-3 px-4 sm:px-6")}><div className="min-w-0 flex-1"><h2 className={ed("text-[17px]/[22px] font-extrabold", "truncate")}>Budget allocation</h2><p className={ed(ep, e_, "truncate")}>Click hours or rate to edit</p></div></header><div className="relative min-h-0 flex-1"><div ref={e} onScroll={a} className="h-full overflow-auto"><table className={ed("w-full border-separate border-spacing-0 text-left text-[15px]/[22px] font-medium", "min-w-[760px]")}><caption className="sr-only">Editable workstream budget allocation</caption><thead className={ed(eu, "sticky top-0 z-20")}><tr><th scope="col" className={ed(em, ev)}>Workstream</th><th scope="col" className={ed(em, ev, "w-[160px]")}>Owner</th><th scope="col" className={ed(em, ev, "w-[150px]")}>Status</th><th scope="col" className={ed(em, ev, "w-[116px] text-right")}>Hours</th><th scope="col" className={ed(em, ev, "w-[116px] text-right")}>Rate</th><th scope="col" className={ed(em, ev, "w-[120px] text-right")}>Total</th></tr></thead><tbody>{o.map(e => {
                    let r = i[e.id] ?? "idle";
                    return <tr className="group transition-[background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:not-aria-selected:bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] dark:hover:not-aria-selected:bg-neutral-100/4 dark:aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)]"><td className={ed(ek, ev, "max-w-[280px]")}><div className="flex items-center gap-2"><span className={ed(eb, "block min-w-0 overflow-hidden whitespace-nowrap [mask-image:linear-gradient(to_right,black_calc(100%-24px),transparent)]", "flex-1")}>{e.workstream}</span>{"saving" === r && <__mod_22728.n icon={__mod_79715.A} size={16} strokeWidth={2} aria-label="Saving" className={ed("animate-spin [animation-duration:700ms] motion-reduce:animate-none", eh, "shrink-0")} />}{"saved" === r && <__mod_22728.n icon={__mod_90987.A} size={16} strokeWidth={2} aria-label="Saved" className={ed(eh, "shrink-0")} />}</div></td><td className={ed(ek, ev, "truncate")}><span className={e_}>{e.owner}</span></td><td className={ed(ek, ev)}><ey status={e.status} /></td><td className={ed(ek, ev, "text-right")}>{k(e, "hours")}</td><td className={ed(ek, ev, "text-right")}>{k(e, "rate")}</td><td className={ed(ek, ef, eb, ev)}>{ew(e.hours * e.rate)}</td></tr>;
                  })}</tbody></table></div><div aria-hidden="true" className={ed("bg-linear-to-t from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 bottom-0 h-8", r.end ? "opacity-100" : "opacity-0")} /></div><footer className={ed(ex, "flex h-12 shrink-0 items-center justify-between px-4 sm:px-6")}><span className="text-[14px]/[20px] font-semibold tabular-nums text-neutral-900/62 dark:text-neutral-100/62">{o.length} workstreams</span><span className={ed(ep, ef)}><span className={eh}>Total budget </span>{ew(m)}</span></footer></div></div>;
    },
    "data-table-4": function () {
      let {
          ref: e,
          edges: r,
          onScroll: a
        } = function () {
          let e = (0, React.useRef)(null),
            [r, a] = (0, React.useState)({
              start: !1,
              end: !1
            }),
            t = (0, React.useCallback)(() => {
              let r = e.current;
              if (!r) return;
              let {
                scrollTop: t,
                scrollHeight: n,
                clientHeight: l
              } = r;
              a({
                start: t > 1,
                end: Math.ceil(t + l) < n - 1
              });
            }, []);
          return (0, React.useEffect)(() => {
            t();
            let r = e.current,
              a = r?.ownerDocument.defaultView;
            if (!r || !a?.ResizeObserver) return;
            let n = new a.ResizeObserver(t);
            return n.observe(r), () => n.disconnect();
          }, [t]), {
            ref: e,
            edges: r,
            onScroll: t
          };
        }(),
        [o, s] = (0, React.useState)(new Set(["RUN-8041"])),
        [i, c] = (0, React.useState)(""),
        u = (0, React.useMemo)(() => {
          let e = i.trim().toLowerCase();
          return e ? eW.filter(r => r.job.toLowerCase().includes(e) || r.owner.toLowerCase().includes(e) || r.id.toLowerCase().includes(e)) : eW;
        }, [i]),
        x = e => s(r => {
          let a = new Set(r);
          return a.has(e) ? a.delete(e) : a.add(e), a;
        });
      return <div className={eN(eC, "text-neutral-900 dark:text-neutral-100", "relative flex h-full min-h-[680px] w-full flex-col overflow-hidden")}><div className="flex min-h-0 flex-1 flex-col overflow-hidden"><header className={eN(eS, "flex h-14 shrink-0 items-center gap-3 px-4 sm:px-6")}><h2 className={eN("text-[17px]/[22px] font-extrabold", "min-w-0 flex-1 truncate")}>Overnight checks</h2><label className={eN("relative flex w-full min-w-0 cursor-text items-center rounded-[calc(var(--rb-r-xl,12px))] data-concentric:rounded-[var(--rb-r-5xl,22px)] border border-transparent bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] text-[15px]/[20px] font-medium text-neutral-900 transition-[border-color,box-shadow,background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:not-focus-within:not-has-[[aria-invalid=true]]:not-has-[input:disabled]:not-has-[input[readonly]]:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] focus-within:border-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] focus-within:bg-white focus-within:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] has-[[aria-invalid=true]]:border-[oklch(60%_0.236_26)] has-[[aria-invalid=true]]:bg-[oklch(97.5%_0.016_26)] has-[input:disabled]:cursor-not-allowed has-[input:disabled]:text-neutral-900/40 has-[input:disabled]:shadow-none has-[input[readonly]]:cursor-default has-[input[readonly]]:shadow-none dark:text-neutral-100 dark:hover:not-focus-within:not-has-[[aria-invalid=true]]:not-has-[input:disabled]:not-has-[input[readonly]]:bg-neutral-900 dark:focus-within:border-[var(--rb-accent,oklch(81%_0.16_163))] dark:focus-within:bg-neutral-900 dark:focus-within:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:has-[[aria-invalid=true]]:border-[oklch(65.2%_0.219_26)] dark:has-[[aria-invalid=true]]:bg-[oklch(26%_0.04_26)] dark:has-[input:disabled]:text-neutral-100/40", "h-10", "max-sm:hidden sm:w-56")}><span data-affix={!0} className="flex shrink-0 items-center gap-2 text-[15px]/[20px] font-semibold text-neutral-900/62 dark:text-neutral-100/62 select-none first:ps-3.5 last:pe-3.5 has-[button]:first:ps-1 has-[button]:last:pe-1"><__mod_22728.n icon={__mod_66575.A} size={18} strokeWidth={2} aria-hidden="true" /></span><input value={i} onChange={e => c(e.target.value)} placeholder="Search checks" className="h-full w-full min-w-0 flex-1 bg-transparent px-3.5 outline-none [[data-affix]+&]:ps-2 [&:has(+[data-affix])]:pe-2 placeholder:font-medium placeholder:text-neutral-900/55 disabled:cursor-not-allowed disabled:placeholder:text-neutral-900/30 dark:placeholder:text-neutral-100/55 dark:disabled:placeholder:text-neutral-100/30 dark:[color-scheme:dark]" /><span className="sr-only">Search checks</span></label></header><div className="relative min-h-0 flex-1"><div ref={e} onScroll={a} className="h-full overflow-auto"><table className={eN("w-full border-separate border-spacing-0 text-left text-[15px]/[22px] font-medium", "min-w-[760px]")}><caption className="sr-only">Overnight automation checks, expandable</caption><thead className={eN(eC, "sticky top-0 z-20")}><tr><th scope="col" className={eN(eM, eP, "w-[52px]")}><span className="sr-only">Expand</span></th><th scope="col" className={eN(eM, eP)}>Check</th><th scope="col" className={eN(eM, eP, "w-[150px]")}>Owner</th><th scope="col" className={eN(eM, eP, "w-[150px]")}>Result</th><th scope="col" className={eN(eM, eP, "w-[110px] text-right")}>Duration</th><th scope="col" className={eN(eM, eP, "w-[150px] text-right")}>Checked</th></tr></thead><tbody>{u.map(e => {
                    let r = o.has(e.id),
                      a = "Failed" === e.status;
                    return <><tr aria-selected={r} onClick={() => x(e.id)} className={eN(a ? eD : "group transition-[background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:not-aria-selected:bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] dark:hover:not-aria-selected:bg-neutral-100/4 dark:aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)]", "cursor-pointer")}><td className={eN(ez, eP, "w-[52px] pe-0")}><button type="button" aria-expanded={r} aria-label={`${r ? "Collapse" : "Expand"} ${e.job}`} onClick={r => {
                            r.stopPropagation(), x(e.id);
                          }} className={eN("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-transparent text-neutral-900 hover:not-disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] active:not-disabled:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] disabled:text-neutral-900/40 dark:text-neutral-100 dark:hover:not-disabled:bg-neutral-100/8 dark:active:not-disabled:bg-neutral-100/12 dark:aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:disabled:text-neutral-100/40", "size-8 rounded-[calc(var(--rb-r-full,999px))]", "group")}><__mod_22728.n icon={__mod_5042.A} size={18} strokeWidth={2} aria-hidden="true" className="shrink-0 text-neutral-900/62 dark:text-neutral-100/62 transition-transform duration-[280ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] motion-reduce:transition-none group-aria-expanded:rotate-90" /></button></td><td className={eN(ez, eP, "max-w-[300px] py-1.5")}><span className={eN("text-[15px]/[20px] font-bold", "block min-w-0 overflow-hidden whitespace-nowrap [mask-image:linear-gradient(to_right,black_calc(100%-24px),transparent)]")}>{e.job}</span><span className={eN("font-mono text-[12px]/[16px] tabular-nums", "text-neutral-900/62 dark:text-neutral-100/62", "block")}>{e.id}</span></td><td className={eN(ez, eP, "truncate")}><span className={eA}>{e.owner}</span></td><td className={eN(ez, eP)}><eO status={e.status} /></td><td className={eN(ez, eR, eP)}><span className={eA}>{e.duration}</span></td><td className={eN(ez, eR, eP)}><span className={eA}>{e.checked}</span></td></tr>{r && <tr className={a ? eD : "bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] dark:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)]"}><td className={eN(eL, "w-[52px]")} /><td colSpan={5} className={eN(eL, "px-3 pb-4 pt-1 pe-4 sm:pe-6")}><p className={eN("text-[14px]/[20px] font-medium", eA, "max-w-2xl")}>{e.summary}</p><div className="mt-3 flex flex-wrap items-center gap-1.5">{e.sources.map(e => <span className={eN("inline-flex h-5.5 min-w-5.5 shrink-0 items-center justify-center whitespace-nowrap rounded-[calc(var(--rb-r-md,8px))] px-2 font-mono text-[12px]/[16px] font-medium tabular-nums text-neutral-900 dark:text-neutral-100", "bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] dark:bg-neutral-100/10")}>{e}</span>)}</div></td></tr>}</>;
                  })}</tbody></table>{0 === u.length && <div className="flex min-h-[420px] flex-col items-center justify-center px-6 py-16 text-center"><span aria-hidden="true" className={eN(eA, "mb-3 flex h-10 w-10 items-center justify-center")}><__mod_22728.n icon={__mod_73516.A} size={20} strokeWidth={2} /></span><p className="text-[19px]/[24px] font-extrabold tracking-[-0.01em] text-neutral-900 dark:text-neutral-100">No checks match that search</p><p className={eN("max-w-[48ch] text-[15px]/[22px] font-medium text-neutral-900/78 dark:text-neutral-100/78", "mt-1")}>Try a job name, an owner, or a run ID.</p><button type="button" onClick={() => c("")} className={eN("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] text-neutral-900 dark:text-neutral-100 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] active:not-disabled:translate-y-px active:not-disabled:shadow-[inset_0_1px_3px_rgb(84_62_32/0.16),0_0_0_1px_rgb(84_62_32/0.10)] dark:active:not-disabled:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14),0_0_0_1px_rgb(84_62_32/0.10)] dark:aria-expanded:bg-neutral-800 dark:aria-expanded:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] disabled:bg-none disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] disabled:text-neutral-900/40 disabled:shadow-none dark:disabled:bg-neutral-800/60 dark:disabled:text-neutral-100/40", "h-10 gap-2 rounded-[calc(var(--rb-r-full,999px))] px-5 text-[15px]/[20px] font-bold", "mt-4")}>Clear search</button></div>}</div><div aria-hidden="true" className={eN("bg-linear-to-t from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 bottom-0 h-8", r.end ? "opacity-100" : "opacity-0")} /></div><footer className={eN(eS, "text-[14px]/[20px] font-semibold tabular-nums text-neutral-900/62 dark:text-neutral-100/62", "flex h-12 shrink-0 items-center px-4 sm:px-6")}>Showing {u.length} of {eW.length} overnight checks</footer></div></div>;
    },
    "data-table-5": function () {
      let {
          ref: e,
          edges: r,
          onScroll: a
        } = function () {
          let e = (0, React.useRef)(null),
            [r, a] = (0, React.useState)({
              start: !1,
              end: !1
            }),
            t = (0, React.useCallback)(() => {
              let r = e.current;
              if (!r) return;
              let {
                scrollTop: t,
                scrollHeight: n,
                clientHeight: l
              } = r;
              a({
                start: t > 1,
                end: Math.ceil(t + l) < n - 1
              });
            }, []);
          return (0, React.useEffect)(() => {
            t();
            let r = e.current,
              a = r?.ownerDocument.defaultView;
            if (!r || !a?.ResizeObserver) return;
            let n = new a.ResizeObserver(t);
            return n.observe(r), () => n.disconnect();
          }, [t]), {
            ref: e,
            edges: r,
            onScroll: t
          };
        }(),
        [l, o] = (0, React.useState)(!1),
        s = l ? "h-10 border-b border-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] px-3 align-middle text-[14px]/[20px] whitespace-nowrap text-neutral-900 dark:text-neutral-100 group-last:border-b-0 first:ps-4 last:pe-4 dark:border-neutral-100/6" : "h-12 border-b border-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] px-3 align-middle whitespace-nowrap text-neutral-900 dark:text-neutral-100 group-last:border-b-0 first:ps-4 last:pe-4 dark:border-neutral-100/6",
        i = eU.reduce((e, r) => e + r.orders.length, 0);
      return <div className={eT(eH, "text-neutral-900 dark:text-neutral-100", "relative flex h-full min-h-[760px] w-full flex-col overflow-hidden")}><div className="flex min-h-0 flex-1 flex-col overflow-hidden"><header className={eT(eB, "flex h-14 shrink-0 items-center gap-3 px-4 sm:px-6")}><h2 className={eT("text-[17px]/[22px] font-extrabold", "min-w-0 flex-1 truncate")}>Dispatch board</h2><div role="radiogroup" aria-label="Row density" onKeyDown={e$} className={eT("inline-flex w-fit max-w-full items-stretch gap-1 rounded-[calc(var(--rb-r-full,999px)_+_min(4px,var(--rb-r-full,999px)))] bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] p-1", "h-10", "shrink-0")}>{[{
                key: !1,
                label: "Comfortable"
              }, {
                key: !0,
                label: "Compact"
              }].map(e => {
                let r = l === e.key;
                return <button type="button" role="radio" aria-checked={r} tabIndex={r ? 0 : -1} onClick={() => o(e.key)} className="relative inline-flex min-w-0 cursor-pointer items-center justify-center gap-1.5 whitespace-nowrap [&_svg]:shrink-0 rounded-[calc(var(--rb-r-full,999px))] px-4 text-[14px]/[18px] font-bold text-neutral-900/78 dark:text-neutral-100/78 select-none transition-[background-color,color,box-shadow,outline-color,scale] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:scale-[0.96] motion-reduce:active:scale-100 hover:not-aria-checked:text-neutral-900 aria-checked:bg-white aria-checked:text-neutral-900 aria-checked:shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_2px_rgb(84_62_32/0.10),0_3px_8px_-2px_rgb(84_62_32/0.20)] disabled:cursor-not-allowed disabled:text-neutral-900/40 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:hover:not-aria-checked:text-neutral-100 dark:aria-checked:bg-[color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800))] dark:aria-checked:text-neutral-100 dark:aria-checked:shadow-[inset_0_1px_0_rgb(255_255_255/0.1),0_0_0_1px_rgb(0_0_0/0.6),0_2px_5px_-1px_rgb(0_0_0/0.6)] dark:disabled:text-neutral-100/40">{e.label}</button>;
              })}</div></header><div className="relative min-h-0 flex-1"><div ref={e} onScroll={a} className="h-full overflow-auto"><table className={eT("w-full border-separate border-spacing-0 text-left text-[15px]/[22px] font-medium", "min-w-[760px]")}><caption className="sr-only">Dispatch orders grouped by day</caption><thead className={eT(eH, "sticky top-0 z-20")}><tr><th scope="col" className={eT(eI, eV)}>Order</th><th scope="col" className={eT(eI, eV)}>Lane</th><th scope="col" className={eT(eI, eV, "w-[140px]")}>Status</th><th scope="col" className={eT(eI, eV, "w-[100px] text-right")}>Pallets</th><th scope="col" className={eT(eI, eV, "w-[120px] text-right")}>ETA</th></tr></thead>{eU.map(e => <tbody><tr><th colSpan={5} scope="colgroup" className={eT(eI, eB, eV, "sticky top-8 z-10")}><span className="sticky left-4 inline-flex gap-2 sm:left-6"><span className={eF}>{e.label}</span><span>{e.orders.length}</span></span></th></tr>{e.orders.map(e => <tr className="group transition-[background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:not-aria-selected:bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] dark:hover:not-aria-selected:bg-neutral-100/4 dark:aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)]"><td className={eT(s, eV, "max-w-[260px]", !l && "py-1.5")}><span className={eT("text-[15px]/[20px] font-bold", "block min-w-0 overflow-hidden whitespace-nowrap [mask-image:linear-gradient(to_right,black_calc(100%-24px),transparent)]")}>{e.customer}</span>{!l && <span className={eT("font-mono text-[12px]/[16px] tabular-nums", "text-neutral-900/62 dark:text-neutral-100/62", "block")}>{e.id}</span>}</td><td className={eT(s, eV, "truncate")}><span className={eF}>{e.lane}</span></td><td className={eT(s, eV)}><eK status={e.status} small={l} /></td><td className={eT(s, eY, eV)}>{e.pallets}</td><td className={eT(s, eY, eV)}><span className={eF}>{e.eta}</span></td></tr>)}</tbody>)}</table></div><div aria-hidden="true" className={eT("bg-linear-to-t from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 bottom-0 h-8", r.end ? "opacity-100" : "opacity-0")} /></div><footer className={eT(eB, "text-[14px]/[20px] font-semibold tabular-nums text-neutral-900/62 dark:text-neutral-100/62", "flex h-12 shrink-0 items-center px-4 sm:px-6")}>{i} orders across {eU.length} windows</footer></div></div>;
    },
    "data-table-6": function () {
      let {
          ref: e,
          edges: r,
          onScroll: a
        } = rt(),
        {
          ref: o,
          edges: s,
          onScroll: i
        } = rt(),
        [c, u] = (0, React.useState)(e7[0].id),
        [x, h] = (0, React.useState)(""),
        p = (0, React.useMemo)(() => {
          let e = x.trim().toLowerCase();
          return e ? e7.filter(r => r.client.toLowerCase().includes(e) || r.lane.toLowerCase().includes(e) || r.id.toLowerCase().includes(e)) : e7;
        }, [x]),
        b = p.find(e => e.id === c) ?? p[0] ?? e7[0];
      return <div className={eZ("bg-white dark:bg-neutral-950", "text-neutral-900 dark:text-neutral-100", "relative flex h-full min-h-[840px] w-full flex-col overflow-hidden")}><div className="flex min-h-0 flex-1 flex-col overflow-hidden"><header className={eZ(eJ, "flex h-14 shrink-0 items-center gap-3 px-5")}><h2 className={eZ(e0, "min-w-0 flex-1 truncate")}>Live shipments</h2><span className={eZ(e2, eX, "shrink-0")}>{e7.length} moving</span></header><div className="flex min-h-0 flex-1"><div className={eZ(eJ, "flex w-full min-w-0 flex-col lg:w-80 lg:shrink-0")}><div className="flex h-12 shrink-0 items-center px-2"><label className={eZ("relative flex w-full min-w-0 cursor-text items-center rounded-[calc(var(--rb-r-xl,12px))] data-concentric:rounded-[var(--rb-r-5xl,22px)] border border-transparent bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] text-[15px]/[20px] font-medium text-neutral-900 transition-[border-color,box-shadow,background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:not-focus-within:not-has-[[aria-invalid=true]]:not-has-[input:disabled]:not-has-[input[readonly]]:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] focus-within:border-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] focus-within:bg-white focus-within:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] has-[[aria-invalid=true]]:border-[oklch(60%_0.236_26)] has-[[aria-invalid=true]]:bg-[oklch(97.5%_0.016_26)] has-[input:disabled]:cursor-not-allowed has-[input:disabled]:text-neutral-900/40 has-[input:disabled]:shadow-none has-[input[readonly]]:cursor-default has-[input[readonly]]:shadow-none dark:text-neutral-100 dark:hover:not-focus-within:not-has-[[aria-invalid=true]]:not-has-[input:disabled]:not-has-[input[readonly]]:bg-neutral-900 dark:focus-within:border-[var(--rb-accent,oklch(81%_0.16_163))] dark:focus-within:bg-neutral-900 dark:focus-within:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:has-[[aria-invalid=true]]:border-[oklch(65.2%_0.219_26)] dark:has-[[aria-invalid=true]]:bg-[oklch(26%_0.04_26)] dark:has-[input:disabled]:text-neutral-100/40", "h-10")}><span data-affix={!0} className="flex shrink-0 items-center gap-2 text-[15px]/[20px] font-semibold text-neutral-900/62 dark:text-neutral-100/62 select-none first:ps-3.5 last:pe-3.5 has-[button]:first:ps-1 has-[button]:last:pe-1"><__mod_22728.n icon={__mod_66575.A} size={18} strokeWidth={2} aria-hidden="true" /></span><input value={x} onChange={e => h(e.target.value)} placeholder="Search shipments" className="h-full w-full min-w-0 flex-1 bg-transparent px-3.5 outline-none [[data-affix]+&]:ps-2 [&:has(+[data-affix])]:pe-2 placeholder:font-medium placeholder:text-neutral-900/55 disabled:cursor-not-allowed disabled:placeholder:text-neutral-900/30 dark:placeholder:text-neutral-100/55 dark:disabled:placeholder:text-neutral-100/30 dark:[color-scheme:dark]" /><span className="sr-only">Search shipments</span></label></div><div className="relative min-h-0 flex-1"><ul ref={e} onScroll={a} className="flex h-full flex-col gap-1 overflow-y-auto p-2">{p.map(e => {
                    let r = e.id === b.id;
                    return <li><button type="button" aria-current={r ? "true" : void 0} onClick={() => u(e.id)} className={eZ("relative flex min-h-12 w-full min-w-0 flex-wrap items-center gap-x-3 gap-y-1 py-2.5 text-left text-neutral-900 dark:text-neutral-100 transition-[background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] has-[[data-description]]:min-h-16", r ? "bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] dark:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)]" : "cursor-pointer hover:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] dark:hover:bg-neutral-100/6 active:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] dark:active:bg-neutral-100/10", "focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))]", "rounded-[var(--rb-r-4xl,18px)]", "px-3")}><div className="flex min-w-0 flex-1 flex-col gap-0.5"><p className={eZ("text-[15px]/[20px] font-bold", e8)}>{e.client}</p><div className="flex items-center gap-2"><p className={eZ(e1, eX, e8, "flex-1")}>{e.lane}</p><rr status={e.status} small={!0} /></div></div></button></li>;
                  })}{0 === p.length && <li className="flex flex-col items-center justify-center px-4 py-12 text-center"><span aria-hidden="true" className={eZ(eQ, "mb-3 flex h-10 w-10 items-center justify-center")}><__mod_22728.n icon={__mod_73516.A} size={20} strokeWidth={2} /></span><p className="text-[19px]/[24px] font-extrabold tracking-[-0.01em] text-neutral-900 dark:text-neutral-100">No shipments found</p><p className={eZ("max-w-[48ch] text-[15px]/[22px] font-medium text-neutral-900/78 dark:text-neutral-100/78", "mt-1")}>Try a client, a lane, or a shipment ID.</p></li>}</ul><div aria-hidden="true" className={eZ(e4, "pointer-events-none absolute inset-x-0 top-0 h-8", r.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={eZ(e3, "pointer-events-none absolute inset-x-0 bottom-0 h-8", r.end ? "opacity-100" : "opacity-0")} /></div></div><div className={eZ("bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900", "hidden min-w-0 flex-1 flex-col lg:flex")}><div className="flex shrink-0 items-start gap-3 px-5 pt-4"><div className="min-w-0 flex-1"><div className="flex items-center gap-2"><span className={eZ("font-mono text-[12px]/[16px] tabular-nums", eX)}>{b.id}</span><rr status={b.status} small={!0} /></div><h3 className={eZ(e0, "mt-1 truncate")}>{b.client}</h3><p className={eZ(e1, eQ, "truncate")}>{b.lane}</p></div></div><div className="relative min-h-0 flex-1"><div ref={o} onScroll={i} className="h-full overflow-y-auto px-5 py-4"><div className={e9}><dl className="grid grid-cols-2 gap-x-6 gap-y-4 p-4"><ra label="Owner" value={b.owner} /><ra label="Carrier" value={b.carrier} /><ra label="Temperature" value={b.temp} /><ra label="Declared value" value={b.value.toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                        maximumFractionDigits: 0
                      })} /><ra label="ETA" value={b.eta} /></dl></div><div className={eZ(e9, "mt-4 p-4")}><h4 className={e6}>Notes</h4><p className={eZ(e1, eQ, "mt-2")}>{b.notes}</p></div><div className={eZ(e9, "mt-4 p-4")}><h4 className={e6}>Activity</h4><ol className="mt-3 space-y-3">{b.activity.map((e, r) => <li className={eZ(e1, "flex gap-3")}><span className="mt-[0.5lh] size-2 shrink-0 -translate-y-1/2 rounded-full bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:bg-[var(--rb-accent,oklch(81%_0.16_163))]" /><div className="min-w-0 flex-1"><p>{e.text}</p><p className={eZ(e2, eX)}>{e.time}</p></div></li>)}</ol></div></div><div aria-hidden="true" className={eZ(e4, "pointer-events-none absolute inset-x-0 top-0 h-8", s.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={eZ(e3, "pointer-events-none absolute inset-x-0 bottom-0 h-8", s.end ? "opacity-100" : "opacity-0")} /></div><div className="flex h-16 shrink-0 items-center justify-end gap-2 px-5"><button type="button" className={eZ("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] text-neutral-900 dark:text-neutral-100 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] active:not-disabled:translate-y-px active:not-disabled:shadow-[inset_0_1px_3px_rgb(84_62_32/0.16),0_0_0_1px_rgb(84_62_32/0.10)] dark:active:not-disabled:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14),0_0_0_1px_rgb(84_62_32/0.10)] dark:aria-expanded:bg-neutral-800 dark:aria-expanded:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] disabled:bg-none disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] disabled:text-neutral-900/40 disabled:shadow-none dark:disabled:bg-neutral-800/60 dark:disabled:text-neutral-100/40", e5)}><__mod_22728.n icon={__mod_36586.A} size={18} strokeWidth={2} aria-hidden="true" className="shrink-0" />Message driver</button><button type="button" className={eZ("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_68%,white),var(--rb-accent,oklch(84%_0.15_165)))] text-[var(--rb-accent-fg,oklch(26%_0.06_168))] shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_4px_10px_-4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_80%,transparent)] hover:not-disabled:-translate-y-px hover:not-disabled:brightness-[1.04] hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_7px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_85%,transparent)] active:not-disabled:translate-y-px active:not-disabled:brightness-[0.98] active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_55%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] motion-reduce:hover:translate-y-0 disabled:opacity-45 disabled:shadow-none dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_78%,white),var(--rb-accent,oklch(81%_0.16_163)))] dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_6px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,transparent)] dark:hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_9px_22px_-8px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_60%,transparent)] dark:active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_45%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black)] dark:disabled:shadow-none", e5)}>Mark delivered</button></div></div></div></div></div>;
    },
    "data-table-7": function () {
      let {
          ref: e,
          edges: r,
          onScroll: a
        } = function () {
          let e = (0, React.useRef)(null),
            [r, a] = (0, React.useState)({
              start: !1,
              end: !1
            }),
            t = (0, React.useCallback)(() => {
              let r = e.current;
              if (!r) return;
              let {
                scrollTop: t,
                scrollHeight: n,
                clientHeight: l
              } = r;
              a({
                start: t > 1,
                end: Math.ceil(t + l) < n - 1
              });
            }, []);
          return (0, React.useEffect)(() => {
            t();
            let r = e.current,
              a = r?.ownerDocument.defaultView;
            if (!r || !a?.ResizeObserver) return;
            let n = new a.ResizeObserver(t);
            return n.observe(r), () => n.disconnect();
          }, [t]), {
            ref: e,
            edges: r,
            onScroll: t
          };
        }(),
        [o, s] = (0, React.useState)("Loading");
      return <div className={rs(ri, "text-neutral-900 dark:text-neutral-100", "relative flex h-full min-h-[680px] w-full flex-col overflow-hidden")}><div className="flex min-h-0 flex-1 flex-col overflow-hidden"><header className={rs(rc, "flex h-14 shrink-0 items-center gap-3 px-4 sm:px-6")}><h2 className={rs("text-[17px]/[22px] font-extrabold", "min-w-0 flex-1 truncate")}>Connected sources</h2><div role="radiogroup" aria-label="Preview state" onKeyDown={rm} className={rs("inline-flex w-fit max-w-full items-stretch gap-1 rounded-[calc(var(--rb-r-full,999px)_+_min(4px,var(--rb-r-full,999px)))] bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] p-1", "h-10", "shrink-0")}>{r_.map(e => {
                let r = o === e;
                return <button type="button" role="radio" aria-checked={r} tabIndex={r ? 0 : -1} onClick={() => s(e)} className="relative inline-flex min-w-0 cursor-pointer items-center justify-center gap-1.5 whitespace-nowrap [&_svg]:shrink-0 rounded-[calc(var(--rb-r-full,999px))] px-4 text-[14px]/[18px] font-bold text-neutral-900/78 dark:text-neutral-100/78 select-none transition-[background-color,color,box-shadow,outline-color,scale] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:scale-[0.96] motion-reduce:active:scale-100 hover:not-aria-checked:text-neutral-900 aria-checked:bg-white aria-checked:text-neutral-900 aria-checked:shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_2px_rgb(84_62_32/0.10),0_3px_8px_-2px_rgb(84_62_32/0.20)] disabled:cursor-not-allowed disabled:text-neutral-900/40 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:hover:not-aria-checked:text-neutral-100 dark:aria-checked:bg-[color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800))] dark:aria-checked:text-neutral-100 dark:aria-checked:shadow-[inset_0_1px_0_rgb(255_255_255/0.1),0_0_0_1px_rgb(0_0_0/0.6),0_2px_5px_-1px_rgb(0_0_0/0.6)] dark:disabled:text-neutral-100/40">{e}</button>;
              })}</div></header><div className="relative min-h-0 flex-1"><div ref={e} onScroll={a} aria-busy={"Loading" === o} className="h-full overflow-y-auto"><table className={rs("w-full border-separate border-spacing-0 text-left text-[15px]/[22px] font-medium", "min-w-[640px]", "Loading" !== o && "h-full")}><caption className="sr-only">{"Loading" === o ? "Loading connected sources" : "Empty" === o ? "No connected sources" : "Connected sources failed to load"}</caption><rp />{"Loading" === o && <tbody aria-hidden={!0}>{rh.map((e, r) => <tr className="group"><td className={rs(ru, rx)}><rb className={e[0]} /></td><td className={rs(ru, rx)}><rb className={e[1]} /></td><td className={rs(ru, rx)}><div className="flex items-center gap-1.5"><rb className="w-16" /></div></td><td className={rs(ru, rx)}><rb className="ml-auto w-14" /></td></tr>)}</tbody>}{"Empty" === o && <tbody><tr><td colSpan={4} className="px-4 py-16 align-middle sm:px-6"><div className="flex flex-col items-center justify-center text-center"><span aria-hidden="true" className={rs("text-neutral-900/78 dark:text-neutral-100/78", "mb-3 flex h-10 w-10 items-center justify-center")}><__mod_22728.n icon={__mod_86829.A} size={20} strokeWidth={2} /></span><p className="text-[19px]/[24px] font-extrabold tracking-[-0.01em] text-neutral-900 dark:text-neutral-100">No sources connected</p><p className={rs("max-w-[48ch] text-[15px]/[22px] font-medium text-neutral-900/78 dark:text-neutral-100/78", "mt-1")}>Connect a warehouse, billing system, or event stream to start syncing records.</p><button type="button" className={rs("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_68%,white),var(--rb-accent,oklch(84%_0.15_165)))] text-[var(--rb-accent-fg,oklch(26%_0.06_168))] shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_4px_10px_-4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_80%,transparent)] hover:not-disabled:-translate-y-px hover:not-disabled:brightness-[1.04] hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_7px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_85%,transparent)] active:not-disabled:translate-y-px active:not-disabled:brightness-[0.98] active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_55%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] motion-reduce:hover:translate-y-0 disabled:opacity-45 disabled:shadow-none dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_78%,white),var(--rb-accent,oklch(81%_0.16_163)))] dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_6px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,transparent)] dark:hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_9px_22px_-8px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_60%,transparent)] dark:active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_45%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black)] dark:disabled:shadow-none", "h-10 gap-2 rounded-[calc(var(--rb-r-full,999px))] px-5 text-[15px]/[20px] font-bold", "mt-4")}>Connect a source</button></div></td></tr></tbody>}{"Error" === o && <tbody><tr><td colSpan={4} className="px-4 py-16 align-middle sm:px-6"><div role="alert" className={rs("flex w-full min-w-0 items-start gap-3 rounded-[calc(var(--rb-r-3xl,16px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] px-4 py-3.5 text-neutral-900 dark:text-neutral-100 shadow-[inset_0_0_0_1px_rgb(84_62_32/0.11)] dark:shadow-[inset_0_0_0_1px_rgb(255_255_255/0.07)]", "mx-auto max-w-sm")}><__mod_22728.n icon={__mod_42734.A} size={18} strokeWidth={2} aria-hidden="true" className={rs("text-[oklch(51%_0.18_26)] dark:text-[oklch(76%_0.14_26)]", "mt-0.5 shrink-0")} /><div className="min-w-0 flex-1"><p className="text-[15px]/[22px] font-extrabold">Couldn’t load sources</p><p className={rs("text-[14px]/[20px] font-medium text-neutral-900/78 dark:text-neutral-100/78", "mt-0.5")}>The sync service didn’t respond within 30 seconds.</p><button type="button" onClick={() => s("Loading")} className={rs("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] text-neutral-900 dark:text-neutral-100 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] active:not-disabled:translate-y-px active:not-disabled:shadow-[inset_0_1px_3px_rgb(84_62_32/0.16),0_0_0_1px_rgb(84_62_32/0.10)] dark:active:not-disabled:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14),0_0_0_1px_rgb(84_62_32/0.10)] dark:aria-expanded:bg-neutral-800 dark:aria-expanded:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] disabled:bg-none disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] disabled:text-neutral-900/40 disabled:shadow-none dark:disabled:bg-neutral-800/60 dark:disabled:text-neutral-100/40", "h-8 gap-1.5 rounded-[calc(var(--rb-r-full,999px))] px-3.5 text-[14px]/[18px] font-bold", "mt-2.5")}><__mod_22728.n icon={__mod_59157.A} size={18} strokeWidth={2} aria-hidden="true" className="shrink-0" />Try again</button></div></div></td></tr></tbody>}</table></div><div aria-hidden="true" className={rs("bg-linear-to-t from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 bottom-0 h-8", r.end ? "opacity-100" : "opacity-0")} /></div><footer aria-live="polite" className={rs(rc, "text-[14px]/[20px] font-semibold tabular-nums text-neutral-900/62 dark:text-neutral-100/62", "flex h-12 shrink-0 items-center px-4 sm:px-6")}>{"Loading" === o ? "Loading sources…" : "Empty" === o ? "0 sources" : "Last synced 30 minutes ago"}</footer></div></div>;
    },
    "data-table-8": function () {
      let {
          ref: e,
          edges: r,
          onScroll: a
        } = function () {
          let e = (0, React.useRef)(null),
            [r, a] = (0, React.useState)({
              start: !1,
              end: !1
            }),
            t = (0, React.useCallback)(() => {
              let r = e.current;
              if (!r) return;
              let {
                scrollTop: t,
                scrollHeight: n,
                clientHeight: l
              } = r;
              a({
                start: t > 1,
                end: Math.ceil(t + l) < n - 1
              });
            }, []);
          return (0, React.useEffect)(() => {
            t();
            let r = e.current,
              a = r?.ownerDocument.defaultView;
            if (!r || !a?.ResizeObserver) return;
            let n = new a.ResizeObserver(t);
            return n.observe(r), () => n.disconnect();
          }, [t]), {
            ref: e,
            edges: r,
            onScroll: t
          };
        }(),
        [o, s] = (0, React.useState)(""),
        [i, c] = (0, React.useState)(null),
        [u, x] = (0, React.useState)(!1),
        [h, p] = (0, React.useState)({
          key: "peak",
          dir: "desc"
        }),
        b = e => p(r => r.key === e ? {
          key: e,
          dir: "asc" === r.dir ? "desc" : "asc"
        } : {
          key: e,
          dir: "site" === e ? "asc" : "desc"
        }),
        m = (0, React.useMemo)(() => {
          let e = o.trim().toLowerCase(),
            r = e ? rA.filter(r => r.site.toLowerCase().includes(e) || r.dock.toLowerCase().includes(e)) : rA,
            a = "asc" === h.dir ? 1 : -1;
          return [...r].sort((e, r) => "peak" === h.key ? (e.peak - r.peak) * a : e.site.localeCompare(r.site) * a);
        }, [o, h]),
        k = rA.filter(e => e.peak >= 95).length;
      return <div className={rk(rf, "text-neutral-900 dark:text-neutral-100", "relative flex h-full min-h-[680px] w-full flex-col overflow-hidden")}><div className="flex min-h-0 flex-1 flex-col overflow-hidden"><header className={rk(rv, "flex h-14 shrink-0 items-center gap-3 px-4 sm:px-6")}><div className="min-w-0 flex-1"><h2 className={rk("text-[17px]/[22px] font-extrabold", "truncate")}>Dock capacity</h2><p className={rk("text-[14px]/[20px] font-medium", rg, "truncate")}>Utilization by site, this week</p></div><label className={rk("relative flex w-full min-w-0 cursor-text items-center rounded-[calc(var(--rb-r-xl,12px))] data-concentric:rounded-[var(--rb-r-5xl,22px)] border border-transparent bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] text-[15px]/[20px] font-medium text-neutral-900 transition-[border-color,box-shadow,background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:not-focus-within:not-has-[[aria-invalid=true]]:not-has-[input:disabled]:not-has-[input[readonly]]:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] focus-within:border-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] focus-within:bg-white focus-within:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] has-[[aria-invalid=true]]:border-[oklch(60%_0.236_26)] has-[[aria-invalid=true]]:bg-[oklch(97.5%_0.016_26)] has-[input:disabled]:cursor-not-allowed has-[input:disabled]:text-neutral-900/40 has-[input:disabled]:shadow-none has-[input[readonly]]:cursor-default has-[input[readonly]]:shadow-none dark:text-neutral-100 dark:hover:not-focus-within:not-has-[[aria-invalid=true]]:not-has-[input:disabled]:not-has-[input[readonly]]:bg-neutral-900 dark:focus-within:border-[var(--rb-accent,oklch(81%_0.16_163))] dark:focus-within:bg-neutral-900 dark:focus-within:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:has-[[aria-invalid=true]]:border-[oklch(65.2%_0.219_26)] dark:has-[[aria-invalid=true]]:bg-[oklch(26%_0.04_26)] dark:has-[input:disabled]:text-neutral-100/40", "h-10", "max-sm:hidden sm:w-48")}><span data-affix={!0} className="flex shrink-0 items-center gap-2 text-[15px]/[20px] font-semibold text-neutral-900/62 dark:text-neutral-100/62 select-none first:ps-3.5 last:pe-3.5 has-[button]:first:ps-1 has-[button]:last:pe-1"><__mod_22728.n icon={__mod_66575.A} size={18} strokeWidth={2} aria-hidden="true" /></span><input value={o} onChange={e => s(e.target.value)} placeholder="Search sites" className="h-full w-full min-w-0 flex-1 bg-transparent px-3.5 outline-none [[data-affix]+&]:ps-2 [&:has(+[data-affix])]:pe-2 placeholder:font-medium placeholder:text-neutral-900/55 disabled:cursor-not-allowed disabled:placeholder:text-neutral-900/30 dark:placeholder:text-neutral-100/55 dark:disabled:placeholder:text-neutral-100/30 dark:[color-scheme:dark]" /><span className="sr-only">Search sites</span></label></header><div className="relative min-h-0 flex-1"><div ref={e} onScroll={e => {
              a(), x(e.currentTarget.scrollLeft > 0);
            }} className="h-full overflow-auto"><table className="w-full border-separate border-spacing-0 text-left text-[15px]/[22px] font-medium"><caption className="sr-only">Weekly dock utilization by site</caption><thead className={rk(rv, "sticky top-0 z-20")}><tr><th scope="col" aria-sort={"site" === h.key ? "asc" === h.dir ? "ascending" : "descending" : "none"} className={rk(ry, rv, rw, rS, "sticky left-0 z-10")}><rz label="Site" sortKey="site" sort={h} onSort={b} /></th>{rL.map(e => <th scope="col" className={rk(ry, "min-w-[64px] text-right")}>{e}</th>)}<th scope="col" aria-sort={"peak" === h.key ? "asc" === h.dir ? "ascending" : "descending" : "none"} className={rk(ry, "min-w-[72px] text-right")}><rz label="Peak" sortKey="peak" sort={h} onSort={b} align="right" /></th><th scope="col" className={rk(ry, "w-[120px]")}>Risk</th><th scope="col" className={rk(ry, rS, "w-[100px] text-right")}>Dock</th></tr></thead><tbody>{m.map(e => <tr onPointerEnter={() => c(e.site)} onPointerLeave={() => c(r => r === e.site ? null : r)} className="group transition-[background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:not-aria-selected:bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] dark:hover:not-aria-selected:bg-neutral-100/4 dark:aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)]"><th scope="row" className={rk(rN, (u || i !== e.site) && rf, rw, rj, rS, "sticky left-0 z-10 max-w-[220px] text-left")}><span className="block min-w-0 overflow-hidden whitespace-nowrap [mask-image:linear-gradient(to_right,black_calc(100%-24px),transparent)]">{e.site}</span></th>{e.days.map((e, r) => <td className={rk(rN, rC)}><span className={e >= 95 ? rj : rg}>{e}%</span></td>)}<td className={rk(rN, rC, rj)}>{e.peak}%</td><td className={rN}><rD risk={e.risk} /></td><td className={rk(rN, rC, rS)}><span className={rg}>{e.dock}</span></td></tr>)}</tbody></table>{0 === m.length && <div className="flex min-h-[420px] flex-col items-center justify-center px-6 py-16 text-center"><span aria-hidden="true" className={rk(rg, "mb-3 flex h-10 w-10 items-center justify-center")}><__mod_22728.n icon={__mod_73516.A} size={20} strokeWidth={2} /></span><p className="text-[19px]/[24px] font-extrabold tracking-[-0.01em] text-neutral-900 dark:text-neutral-100">No sites match that search</p><p className={rk("max-w-[48ch] text-[15px]/[22px] font-medium text-neutral-900/78 dark:text-neutral-100/78", "mt-1")}>Try a site name or a dock number.</p><button type="button" onClick={() => s("")} className={rk("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] text-neutral-900 dark:text-neutral-100 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] active:not-disabled:translate-y-px active:not-disabled:shadow-[inset_0_1px_3px_rgb(84_62_32/0.16),0_0_0_1px_rgb(84_62_32/0.10)] dark:active:not-disabled:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14),0_0_0_1px_rgb(84_62_32/0.10)] dark:aria-expanded:bg-neutral-800 dark:aria-expanded:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] disabled:bg-none disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] disabled:text-neutral-900/40 disabled:shadow-none dark:disabled:bg-neutral-800/60 dark:disabled:text-neutral-100/40", "h-10 gap-2 rounded-[calc(var(--rb-r-full,999px))] px-5 text-[15px]/[20px] font-bold", "mt-4")}>Clear search</button></div>}</div><div aria-hidden="true" className={rk("bg-linear-to-t from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 bottom-0 h-8", r.end ? "opacity-100" : "opacity-0")} /></div><footer className={rk(rv, "text-[14px]/[20px] font-semibold tabular-nums text-neutral-900/62 dark:text-neutral-100/62", "flex h-12 shrink-0 items-center gap-3 px-4 sm:px-6")}><span>{m.length} of {rA.length} sites</span><span>{k} above 95% peak</span></footer></div></div>;
    }
  },
  rP = {
    "data-table-1": 680,
    "data-table-2": 680,
    "data-table-3": 680,
    "data-table-4": 680,
    "data-table-5": 760,
    "data-table-6": 840,
    "data-table-7": 680,
    "data-table-8": 680
  };

export { rR as components };
export { rP as heights };

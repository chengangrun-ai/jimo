import { motion, AnimatePresence } from "motion/react";
import * as __mod_22728 from "../_helpers/22728";
import * as __mod_66575 from "../_helpers/66575";
import * as __mod_90987 from "../_helpers/90987";
import * as __mod_89886 from "../_helpers/89886";
import * as __mod_50969 from "../_helpers/50969";
import * as __mod_59157 from "../_helpers/59157";
import * as __mod_79715 from "../_helpers/79715";
import * as __mod_3815 from "../_helpers/3815";
import * as __mod_36474 from "../_helpers/36474";
import * as __mod_1497 from "../_helpers/1497";
import * as __mod_47962 from "../_helpers/47962";
import * as __mod_79698 from "../_helpers/79698";
import * as __mod_56987 from "../_helpers/56987";
import * as __mod_2301 from "../_helpers/2301";
import * as __mod_62714 from "../_helpers/62714";
import * as __mod_54500 from "../_helpers/54500";
import * as __mod_96037 from "../_helpers/96037";
import * as __mod_81515 from "../_helpers/81515";
import * as __mod_5042 from "../_helpers/5042";
import * as __mod_31517 from "../_helpers/31517";
import * as __mod_20484 from "../_helpers/20484";
import * as __mod_67358 from "../_helpers/67358";
import * as __mod_48318 from "../_helpers/48318";
import * as __mod_81520 from "../_helpers/81520";
/**
 * Integrations 2
 * slug: integrations-2
 * category: integrations
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let c = (...e) => e.filter(Boolean).join(" "),
  d = "text-neutral-900/62 dark:text-neutral-100/62",
  _ = "text-[14px]/[20px] font-medium",
  x = "relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] text-neutral-900 dark:text-neutral-100 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] active:not-disabled:translate-y-px active:not-disabled:shadow-[inset_0_1px_3px_rgb(84_62_32/0.16),0_0_0_1px_rgb(84_62_32/0.10)] dark:active:not-disabled:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14),0_0_0_1px_rgb(84_62_32/0.10)] dark:aria-expanded:bg-neutral-800 dark:aria-expanded:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] disabled:bg-none disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] disabled:text-neutral-900/40 disabled:shadow-none dark:disabled:bg-neutral-800/60 dark:disabled:text-neutral-100/40",
  b = "h-10 gap-2 rounded-[calc(var(--rb-r-full,999px))] px-5 text-[15px]/[20px] font-bold",
  p = c(_, d),
  u = c(_, "text-neutral-900/78 dark:text-neutral-100/78"),
  h = c("text-[13px]/[16px] font-semibold tabular-nums", d),
  k = [{
    name: "Northwind",
    mark: "NW",
    group: "Analytics",
    blurb: "Stream product events into Northwind dashboards.",
    connected: !0
  }, {
    name: "Cedar Labs",
    mark: "CL",
    group: "Developer",
    blurb: "Open an issue whenever a deploy check fails.",
    connected: !0
  }, {
    name: "Harbor",
    mark: "HB",
    group: "Messaging",
    blurb: "Post alerts and approvals into a shared channel."
  }, {
    name: "Meridian",
    mark: "MD",
    group: "Storage",
    blurb: "Archive exports to a bucket you control."
  }, {
    name: "Alder",
    mark: "AL",
    group: "Analytics",
    blurb: "Warehouse sync for usage and billing tables."
  }, {
    name: "Fernrock",
    mark: "FR",
    group: "Developer",
    blurb: "Run a workflow when an environment is promoted."
  }, {
    name: "Tidepool",
    mark: "TP",
    group: "Messaging",
    blurb: "Route incidents to the on-call rotation."
  }, {
    name: "Quarry",
    mark: "QR",
    group: "Storage",
    blurb: "Mirror audit logs to cold storage nightly."
  }, {
    name: "Lantern",
    mark: "LN",
    group: "Security",
    blurb: "Send sign-in anomalies to your SIEM."
  }],
  m = ["All", "Analytics", "Developer", "Messaging", "Storage", "Security"];
let A = (...e) => e.filter(Boolean).join(" "),
  S = "text-neutral-900/78 dark:text-neutral-100/78",
  C = "text-neutral-900/62 dark:text-neutral-100/62",
  R = "text-[14px]/[20px] font-medium",
  W = "text-[15px]/[20px] font-bold",
  L = "relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] text-neutral-900 dark:text-neutral-100 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] active:not-disabled:translate-y-px active:not-disabled:shadow-[inset_0_1px_3px_rgb(84_62_32/0.16),0_0_0_1px_rgb(84_62_32/0.10)] dark:active:not-disabled:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14),0_0_0_1px_rgb(84_62_32/0.10)] dark:aria-expanded:bg-neutral-800 dark:aria-expanded:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] disabled:bg-none disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] disabled:text-neutral-900/40 disabled:shadow-none dark:disabled:bg-neutral-800/60 dark:disabled:text-neutral-100/40",
  E = "relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] text-[oklch(51%_0.18_26)] hover:not-disabled:bg-none hover:not-disabled:bg-[oklch(96%_0.03_26)] active:not-disabled:translate-y-px active:not-disabled:shadow-[inset_0_1px_3px_rgb(84_62_32/0.16),0_0_0_1px_rgb(84_62_32/0.10)] dark:active:not-disabled:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] disabled:bg-none disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] disabled:text-neutral-900/40 disabled:shadow-none dark:text-[oklch(80%_0.13_26)] dark:hover:not-disabled:bg-[oklch(32%_0.07_26)] dark:disabled:bg-neutral-800/60 dark:disabled:text-neutral-100/40",
  M = "h-8 gap-1.5 rounded-[calc(var(--rb-r-full,999px))] px-3.5 text-[14px]/[18px] font-bold",
  P = "h-10 gap-2 rounded-[calc(var(--rb-r-full,999px))] px-5 text-[15px]/[20px] font-bold",
  $ = "relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] text-neutral-900 dark:text-neutral-100 shadow-[0_0_0_1px_rgb(84_62_32/0.07),0_1px_2px_rgb(84_62_32/0.06),0_8px_22px_-10px_rgb(84_62_32/0.20)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_0_0_1px_rgb(0_0_0/0.6),0_10px_24px_-12px_rgb(0_0_0/0.8)]",
  D = A(R, C),
  O = A(R, S),
  I = A("text-[13px]/[16px] font-semibold tabular-nums", C),
  T = [{
    id: "read",
    label: "Read repositories",
    detail: "Metadata, branches and commit status for 12 repositories.",
    required: !0
  }, {
    id: "issues",
    label: "Write issues",
    detail: "Create and comment on issues when a deploy check fails.",
    required: !1
  }, {
    id: "checks",
    label: "Write checks",
    detail: "Report build and policy results back onto pull requests.",
    required: !1
  }, {
    id: "members",
    label: "Read organization members",
    detail: "Match commit authors to workspace seats.",
    required: !1
  }],
  q = [{
    at: "Today 09:41",
    text: "Scopes updated by Ana Reyes",
    tone: "neutral"
  }, {
    at: "Yesterday 18:02",
    text: "Token refreshed automatically",
    tone: "ok"
  }, {
    at: "Mar 12",
    text: "Rate limit reached, retried after 40s",
    tone: "warn"
  }, {
    at: "Mar 04",
    text: "Connected by Marco Silva",
    tone: "neutral"
  }];
let U = (...e) => e.filter(Boolean).join(" "),
  J = "text-neutral-900/62 dark:text-neutral-100/62",
  Y = "relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] text-neutral-900 dark:text-neutral-100 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] active:not-disabled:translate-y-px active:not-disabled:shadow-[inset_0_1px_3px_rgb(84_62_32/0.16),0_0_0_1px_rgb(84_62_32/0.10)] dark:active:not-disabled:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14),0_0_0_1px_rgb(84_62_32/0.10)] dark:aria-expanded:bg-neutral-800 dark:aria-expanded:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] disabled:bg-none disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] disabled:text-neutral-900/40 disabled:shadow-none dark:disabled:bg-neutral-800/60 dark:disabled:text-neutral-100/40",
  G = "relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-transparent text-neutral-900 hover:not-disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] active:not-disabled:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] disabled:text-neutral-900/40 dark:text-neutral-100 dark:hover:not-disabled:bg-neutral-100/8 dark:active:not-disabled:bg-neutral-100/12 dark:aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:disabled:text-neutral-100/40",
  X = "h-10 gap-2 rounded-[calc(var(--rb-r-full,999px))] px-5 text-[15px]/[20px] font-bold",
  Z = "size-7 rounded-[calc(var(--rb-r-full,999px))]",
  ee = "h-12 border-b border-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] px-3 align-middle whitespace-nowrap text-neutral-900 dark:text-neutral-100 group-last:border-b-0 first:ps-4 last:pe-4 dark:border-neutral-100/6",
  ea = U("text-[14px]/[20px] font-medium", J),
  er = U("text-[13px]/[16px] font-semibold tabular-nums", J),
  et = U("h-full w-full min-w-0 flex-1 bg-transparent px-3 outline-none [[data-affix]+&]:ps-2 [&:has(+[data-affix])]:pe-2 placeholder:font-medium placeholder:text-neutral-900/55 disabled:cursor-not-allowed disabled:placeholder:text-neutral-900/30 dark:placeholder:text-neutral-100/55 dark:disabled:placeholder:text-neutral-100/30 dark:[color-scheme:dark]", "font-mono text-[12px]/[16px] tabular-nums"),
  en = [{
    id: "k1",
    label: "Billing worker",
    env: "Production",
    secret: "rbk_live_8fc2a41d9b7e4c06a5d3",
    created: "Jan 12, 2025",
    used: "2 minutes ago",
    scope: "Read & write"
  }, {
    id: "k2",
    label: "Warehouse sync",
    env: "Production",
    secret: "rbk_live_2ad7f60c1e894b35c7f1",
    created: "Nov 30, 2024",
    used: "1 hour ago",
    scope: "Read"
  }, {
    id: "k3",
    label: "Preview environment",
    env: "Staging",
    secret: "rbk_test_51bd9e73a4c6408fb2ee",
    created: "Feb 04, 2025",
    used: "3 days ago",
    scope: "Read & write"
  }, {
    id: "k4",
    label: "Ana's laptop",
    env: "Local",
    secret: "rbk_test_c93f14a08de74b62915a",
    created: "Feb 21, 2025",
    used: "Never",
    scope: "Read"
  }],
  el = ["Name", "Key", "Scope", "Created", "Last used", ""];
let es = (...e) => e.filter(Boolean).join(" "),
  ec = "text-neutral-900/62 dark:text-neutral-100/62",
  ed = "border-b border-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:border-neutral-100/7",
  e_ = "font-mono text-[12px]/[16px] tabular-nums",
  ex = "focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))]",
  eb = "relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] text-neutral-900 dark:text-neutral-100 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] active:not-disabled:translate-y-px active:not-disabled:shadow-[inset_0_1px_3px_rgb(84_62_32/0.16),0_0_0_1px_rgb(84_62_32/0.10)] dark:active:not-disabled:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14),0_0_0_1px_rgb(84_62_32/0.10)] dark:aria-expanded:bg-neutral-800 dark:aria-expanded:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] disabled:bg-none disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] disabled:text-neutral-900/40 disabled:shadow-none dark:disabled:bg-neutral-800/60 dark:disabled:text-neutral-100/40",
  ep = "h-10 gap-2 rounded-[calc(var(--rb-r-full,999px))] px-5 text-[15px]/[20px] font-bold",
  eu = "inline-flex h-5.5 min-w-5.5 shrink-0 items-center justify-center whitespace-nowrap rounded-[calc(var(--rb-r-md,8px))] px-2 font-mono text-[12px]/[16px] font-medium tabular-nums text-neutral-900 dark:text-neutral-100",
  eh = "bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] dark:bg-neutral-100/10",
  ek = "relative flex min-h-12 w-full min-w-0 flex-wrap items-center gap-x-3 gap-y-1 py-2.5 text-left text-neutral-900 dark:text-neutral-100 transition-[background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] has-[[data-description]]:min-h-16",
  em = "cursor-pointer hover:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] dark:hover:bg-neutral-100/6 active:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] dark:active:bg-neutral-100/10",
  eg = "rounded-[var(--rb-r-4xl,18px)]",
  ev = es("text-[14px]/[20px] font-medium", ec),
  ef = es("text-[13px]/[16px] font-semibold tabular-nums", ec),
  ew = [{
    id: "e1",
    url: "https://hooks.northwind.dev/halcyon/usage",
    events: ["usage.rollup", "usage.threshold"],
    enabled: !0,
    rate: 99.8
  }, {
    id: "e2",
    url: "https://api.cedarlabs.io/v2/events",
    events: ["deploy.failed", "deploy.succeeded", "check.completed"],
    enabled: !0,
    rate: 97.1
  }, {
    id: "e3",
    url: "https://harbor.internal/ingest/audit",
    events: ["member.invited", "member.removed", "role.changed"],
    enabled: !1,
    rate: 100
  }],
  ej = {
    e1: [{
      id: "d1",
      event: "usage.rollup",
      status: 200,
      at: "09:41:02",
      ms: 128,
      attempts: 1,
      body: '{ "workspace": "wrk_2f81", "units": 41822, "window": 10000 }'
    }, {
      id: "d2",
      event: "usage.threshold",
      status: 200,
      at: "09:40:11",
      ms: 96,
      attempts: 1,
      body: '{ "workspace": "wrk_2f81", "threshold": 0.8, "plan": "scale" }'
    }, {
      id: "d3",
      event: "usage.rollup",
      status: 500,
      at: "09:38:44",
      ms: 4021,
      attempts: 3,
      body: '{ "workspace": "wrk_71ab", "units": 1204, "window": 10000 }'
    }],
    e2: [{
      id: "d4",
      event: "deploy.failed",
      status: 202,
      at: "09:33:19",
      ms: 211,
      attempts: 1,
      body: '{ "env": "production", "sha": "8fc2a41", "check": "migrations" }'
    }, {
      id: "d5",
      event: "check.completed",
      status: 429,
      at: "09:31:07",
      ms: 88,
      attempts: 2,
      body: '{ "env": "staging", "sha": "2ad7f60", "result": "pass" }'
    }],
    e3: []
  };
let eA = (...e) => e.filter(Boolean).join(" "),
  eS = "relative inline-flex size-8 shrink-0 overflow-hidden rounded-[calc(var(--rb-r-lg,10px))] select-none",
  eC = "flex size-full items-center justify-center rounded-[inherit] bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_24%,white)] text-[12px]/[16px] font-extrabold tabular-nums text-neutral-900 dark:text-neutral-100 dark:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_22%,var(--color-neutral-900))]",
  eR = "text-neutral-900/62 dark:text-neutral-100/62",
  eW = "text-[22px]/[28px] font-extrabold tracking-[-0.01em]",
  eL = "relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] text-neutral-900 dark:text-neutral-100 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] active:not-disabled:translate-y-px active:not-disabled:shadow-[inset_0_1px_3px_rgb(84_62_32/0.16),0_0_0_1px_rgb(84_62_32/0.10)] dark:active:not-disabled:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14),0_0_0_1px_rgb(84_62_32/0.10)] dark:aria-expanded:bg-neutral-800 dark:aria-expanded:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] disabled:bg-none disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] disabled:text-neutral-900/40 disabled:shadow-none dark:disabled:bg-neutral-800/60 dark:disabled:text-neutral-100/40",
  eE = "h-10 gap-2 rounded-[calc(var(--rb-r-full,999px))] px-5 text-[15px]/[20px] font-bold",
  eM = "relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] text-neutral-900 dark:text-neutral-100 shadow-[0_0_0_1px_rgb(84_62_32/0.07),0_1px_2px_rgb(84_62_32/0.06),0_8px_22px_-10px_rgb(84_62_32/0.20)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_0_0_1px_rgb(0_0_0/0.6),0_10px_24px_-12px_rgb(0_0_0/0.8)]",
  eP = eA("text-[14px]/[20px] font-medium", eR),
  e$ = eA("text-[13px]/[16px] font-semibold tabular-nums", eR),
  eD = [{
    id: "profile",
    label: "Read your profile",
    detail: "Name, email address and avatar."
  }, {
    id: "projects",
    label: "Read your projects",
    detail: "Names, settings and member lists for 6 projects."
  }, {
    id: "deploys",
    label: "Trigger deploys",
    detail: "Start a deploy on your behalf and read its result."
  }],
  eO = [{
    id: "w1",
    name: "Halcyon",
    role: "Owner",
    seats: 24
  }, {
    id: "w2",
    name: "Halcyon Labs",
    role: "Admin",
    seats: 6
  }, {
    id: "w3",
    name: "Personal",
    role: "Owner",
    seats: 1
  }];
let eq = (...e) => e.filter(Boolean).join(" "),
  eB = "text-neutral-900/62 dark:text-neutral-100/62",
  eF = "relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] text-neutral-900 dark:text-neutral-100 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] active:not-disabled:translate-y-px active:not-disabled:shadow-[inset_0_1px_3px_rgb(84_62_32/0.16),0_0_0_1px_rgb(84_62_32/0.10)] dark:active:not-disabled:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14),0_0_0_1px_rgb(84_62_32/0.10)] dark:aria-expanded:bg-neutral-800 dark:aria-expanded:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] disabled:bg-none disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] disabled:text-neutral-900/40 disabled:shadow-none dark:disabled:bg-neutral-800/60 dark:disabled:text-neutral-100/40",
  eH = "text-neutral-900/62 dark:text-neutral-100/62",
  eK = "text-neutral-900 dark:text-neutral-100",
  eV = "text-neutral-900/78 dark:text-neutral-100/78",
  eQ = "text-[oklch(51%_0.18_26)] dark:text-[oklch(76%_0.14_26)]",
  eU = eq("text-[14px]/[20px] font-medium", eB),
  eJ = eq("text-[13px]/[16px] font-semibold tabular-nums", eB),
  eY = [{
    id: "s1",
    source: "Northwind",
    mark: "NW",
    target: "events.usage_rollups",
    rows: 41822,
    progress: 62,
    state: "syncing",
    last: "running now"
  }, {
    id: "s2",
    source: "Alder",
    mark: "AL",
    target: "billing.invoices",
    rows: 1204,
    progress: 100,
    state: "healthy",
    last: "8 minutes ago"
  }, {
    id: "s3",
    source: "Cedar Labs",
    mark: "CL",
    target: "ci.check_results",
    rows: 9640,
    progress: 100,
    state: "healthy",
    last: "22 minutes ago"
  }, {
    id: "s4",
    source: "Meridian",
    mark: "MD",
    target: "storage.exports",
    rows: 318,
    progress: 41,
    state: "error",
    last: "1 hour ago",
    note: "Bucket rejected the write: missing s3:PutObject on the export prefix."
  }, {
    id: "s5",
    source: "Quarry",
    mark: "QR",
    target: "audit.entries",
    rows: 76210,
    progress: 100,
    state: "paused",
    last: "yesterday"
  }],
  eG = {
    syncing: {
      label: "Syncing",
      tone: eK
    },
    healthy: {
      label: "Healthy",
      tone: eV
    },
    paused: {
      label: "Paused",
      tone: eH
    },
    error: {
      label: "Failed",
      tone: eQ
    }
  },
  eX = {
    "integrations-1": function () {
      let [e, a] = (0, React.useState)("All"),
        [r, d] = (0, React.useState)(""),
        [_, g] = (0, React.useState)(() => Object.fromEntries(k.filter(e => e.connected).map(e => [e.name, !0]))),
        v = (0, React.useMemo)(() => {
          let a = r.trim().toLowerCase();
          return k.filter(r => ("All" === e || r.group === e) && (!a || r.name.toLowerCase().includes(a) || r.blurb.toLowerCase().includes(a)));
        }, [e, r]),
        f = Object.values(_).filter(Boolean).length,
        {
          ref: w,
          edges: j,
          onScroll: y
        } = function (e) {
          let a = (0, React.useRef)(null),
            [r, t] = (0, React.useState)({
              start: !1,
              end: !1
            }),
            l = (0, React.useCallback)(() => {
              let e = a.current;
              if (!e) return;
              let {
                scrollTop: r,
                scrollHeight: n,
                clientHeight: l
              } = e;
              t({
                start: r > 1,
                end: Math.ceil(r + l) < n - 1
              });
            }, []);
          return (0, React.useEffect)(() => {
            l();
            let e = a.current,
              r = e?.ownerDocument.defaultView;
            if (!e || !r?.ResizeObserver) return;
            let t = new r.ResizeObserver(l);
            return t.observe(e), () => t.disconnect();
          }, [e, l]), {
            ref: a,
            edges: r,
            onScroll: l
          };
        }(`${e}|${r}`),
        {
          ref: N,
          edges: z,
          onScroll: A
        } = function () {
          let e = (0, React.useRef)(null),
            [a, r] = (0, React.useState)({
              start: !1,
              end: !1
            }),
            t = (0, React.useCallback)(() => {
              let a = e.current;
              if (!a) return;
              let {
                scrollLeft: t,
                scrollWidth: n,
                clientWidth: l
              } = a;
              r({
                start: t > 1,
                end: Math.ceil(t + l) < n - 1
              });
            }, []);
          return (0, React.useEffect)(() => {
            t();
            let a = e.current,
              r = a?.ownerDocument.defaultView;
            if (!a || !r?.ResizeObserver) return;
            let n = new r.ResizeObserver(t);
            return n.observe(a), () => n.disconnect();
          }, [t]), {
            ref: e,
            edges: a,
            onScroll: t
          };
        }();
      return <div className={c("bg-white dark:bg-neutral-950", "text-neutral-900 dark:text-neutral-100", "relative flex h-full min-h-[700px] w-full flex-col overflow-hidden")}><header className="shrink-0 pt-4"><div className="flex flex-wrap items-end justify-between gap-3 px-5"><div><h2 className="text-[22px]/[28px] font-extrabold tracking-[-0.01em]">Integrations</h2><p className={c(p, "mt-1 flex flex-wrap gap-x-3")}><span><span className="tabular-nums">{f}</span> connected</span><span><span className="tabular-nums">{k.length}</span> available</span></p></div><div className={c("relative flex w-full min-w-0 cursor-text items-center rounded-[calc(var(--rb-r-xl,12px))] data-concentric:rounded-[var(--rb-r-5xl,22px)] border border-transparent bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] text-[15px]/[20px] font-medium text-neutral-900 transition-[border-color,box-shadow,background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:not-focus-within:not-has-[[aria-invalid=true]]:not-has-[input:disabled]:not-has-[input[readonly]]:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] focus-within:border-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] focus-within:bg-white focus-within:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] has-[[aria-invalid=true]]:border-[oklch(60%_0.236_26)] has-[[aria-invalid=true]]:bg-[oklch(97.5%_0.016_26)] has-[input:disabled]:cursor-not-allowed has-[input:disabled]:text-neutral-900/40 has-[input:disabled]:shadow-none has-[input[readonly]]:cursor-default has-[input[readonly]]:shadow-none dark:text-neutral-100 dark:hover:not-focus-within:not-has-[[aria-invalid=true]]:not-has-[input:disabled]:not-has-[input[readonly]]:bg-neutral-900 dark:focus-within:border-[var(--rb-accent,oklch(81%_0.16_163))] dark:focus-within:bg-neutral-900 dark:focus-within:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:has-[[aria-invalid=true]]:border-[oklch(65.2%_0.219_26)] dark:has-[[aria-invalid=true]]:bg-[oklch(26%_0.04_26)] dark:has-[input:disabled]:text-neutral-100/40", "h-10", "sm:w-[248px]")}><span data-affix={!0} className="flex shrink-0 items-center gap-2 text-[15px]/[20px] font-semibold text-neutral-900/62 dark:text-neutral-100/62 select-none first:ps-3.5 last:pe-3.5 has-[button]:first:ps-1 has-[button]:last:pe-1"><__mod_22728.n icon={__mod_66575.A} size={18} strokeWidth={2} aria-hidden="true" /></span><input value={r} onChange={e => d(e.target.value)} placeholder="Search integrations" aria-label="Search integrations" className="h-full w-full min-w-0 flex-1 bg-transparent px-3.5 outline-none [[data-affix]+&]:ps-2 [&:has(+[data-affix])]:pe-2 placeholder:font-medium placeholder:text-neutral-900/55 disabled:cursor-not-allowed disabled:placeholder:text-neutral-900/30 dark:placeholder:text-neutral-100/55 dark:disabled:placeholder:text-neutral-100/30 dark:[color-scheme:dark]" /></div></div><div className="relative mt-3.5"><div ref={N} onScroll={A} role="tablist" aria-label="Category" onKeyDown={r => {
              var t, n, l;
              let i;
              return t = m.length, n = m.indexOf(e), l = e => a(m[e]), void (!((i = "ArrowRight" === r.key || "ArrowDown" === r.key ? (n + 1) % t : "ArrowLeft" === r.key || "ArrowUp" === r.key ? (n - 1 + t) % t : "Home" === r.key ? 0 : "End" === r.key ? t - 1 : -1) < 0) && (r.preventDefault(), l(i), r.currentTarget.querySelectorAll('[role="tab"]')[i]?.focus()));
            }} className={c("flex max-w-full min-w-0 items-center gap-1.5 overflow-x-auto shadow-[inset_0_-2px_0_color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] [scrollbar-width:none] dark:shadow-[inset_0_-2px_0_color-mix(in_oklab,var(--color-neutral-100)_9%,transparent)]", "px-5")}>{m.map(r => {
                let n = r === e;
                return <button role="tab" type="button" aria-selected={n} tabIndex={n ? 0 : -1} onClick={() => a(r)} className="relative inline-flex min-h-10 shrink-0 cursor-pointer items-center justify-center gap-1.5 rounded-[calc(var(--rb-r-lg,10px))] px-3 text-[15px]/[20px] font-bold whitespace-nowrap text-neutral-900/78 dark:text-neutral-100/78 select-none transition-[color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:text-neutral-900 after:absolute after:inset-x-2.5 after:bottom-0 after:h-[3px] after:rounded-[calc(var(--rb-r-full,999px))] after:bg-transparent after:transition-[background-color] aria-selected:text-neutral-900 aria-selected:after:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] disabled:cursor-not-allowed disabled:text-neutral-900/40 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:hover:text-neutral-100 dark:aria-selected:text-neutral-100 dark:aria-selected:after:bg-[var(--rb-accent,oklch(81%_0.16_163))] dark:disabled:text-neutral-100/40">{r}</button>;
              })}</div><div aria-hidden="true" className={c("bg-linear-to-r from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute top-0 bottom-px left-0 w-8", z.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={c("bg-linear-to-l from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute top-0 right-0 bottom-px w-8", z.end ? "opacity-100" : "opacity-0")} /></div></header><div className="relative min-h-0 flex-1"><div ref={w} onScroll={y} className="h-full overflow-y-auto px-5 py-4">{v.length > 0 ? <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{v.map(e => {
                let a = !!_[e.name];
                return <article className={c("relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] text-neutral-900 dark:text-neutral-100 shadow-[0_0_0_1px_rgb(84_62_32/0.07),0_1px_2px_rgb(84_62_32/0.06),0_8px_22px_-10px_rgb(84_62_32/0.20)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_0_0_1px_rgb(0_0_0/0.6),0_10px_24px_-12px_rgb(0_0_0/0.8)]", "p-4")}><div className="flex items-center gap-3"><span aria-hidden="true" className={c("relative inline-flex size-8 shrink-0 overflow-hidden rounded-[calc(var(--rb-r-lg,10px))] select-none", "size-9")}><span className="flex size-full items-center justify-center rounded-[inherit] bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_24%,white)] text-[12px]/[16px] font-extrabold tabular-nums text-neutral-900 dark:text-neutral-100 dark:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_22%,var(--color-neutral-900))]">{e.mark}</span></span><div className="min-w-0 flex-1"><h3 className={c("text-[15px]/[20px] font-bold", "truncate")}>{e.name}</h3><p className={c(h, "mt-0.5")}>{e.group}</p></div></div><p className={c(u, "mt-3 flex-1")}>{e.blurb}</p><button type="button" onClick={() => g(a => ({
                    ...a,
                    [e.name]: !a[e.name]
                  }))} className={c(x, b, "mt-4")}><__mod_22728.n icon={a ? __mod_90987.A : __mod_89886.A} size={18} strokeWidth={2} aria-hidden="true" />{a ? "Connected" : "Connect"}</button></article>;
              })}</div> : <div className="flex flex-col items-center px-6 py-20 text-center"><p className="text-[19px]/[24px] font-extrabold tracking-[-0.01em] text-neutral-900 dark:text-neutral-100">No integrations match</p><p className={c("max-w-[48ch] text-[15px]/[22px] font-medium text-neutral-900/78 dark:text-neutral-100/78", "mt-1")}>Try a different category, or clear the search to see everything available.</p><button type="button" onClick={() => {
                d(""), a("All");
              }} className={c(x, b, "mt-4")}>Reset filters</button></div>}</div><div aria-hidden="true" className={c("bg-linear-to-b from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 top-0 h-8", j.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={c("bg-linear-to-t from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 bottom-0 h-8", j.end ? "opacity-100" : "opacity-0")} /></div></div>;
    },
    "integrations-2": function () {
      let e = (0, React.useId)(),
        a = (0, __mod_50969.I)(),
        r = (0, React.useRef)(null),
        [i, s] = (0, React.useState)({
          read: !0,
          issues: !0,
          checks: !0,
          members: !1
        }),
        [c, d] = (0, React.useState)(!1),
        [_, x] = (0, React.useState)("connected"),
        [b, p] = (0, React.useState)(!1),
        {
          ref: u,
          edges: h,
          onScroll: k
        } = function () {
          let e = (0, React.useRef)(null),
            [a, r] = (0, React.useState)({
              start: !1,
              end: !1
            }),
            t = (0, React.useCallback)(() => {
              let a = e.current;
              if (!a) return;
              let {
                scrollTop: t,
                scrollHeight: n,
                clientHeight: l
              } = a;
              r({
                start: t > 1,
                end: Math.ceil(t + l) < n - 1
              });
            }, []);
          return (0, React.useEffect)(() => {
            t();
            let a = e.current,
              r = a?.ownerDocument.defaultView;
            if (!a || !r?.ResizeObserver) return;
            let n = new r.ResizeObserver(t);
            return n.observe(a), () => n.disconnect();
          }, [t]), {
            ref: e,
            edges: a,
            onScroll: t
          };
        }();
      return (0, React.useEffect)(() => {
        if (!b) return;
        let e = window.setTimeout(() => p(!1), 1400);
        return () => window.clearTimeout(e);
      }, [b]), (0, React.useEffect)(() => {
        if (!c) return;
        let e = r.current?.ownerDocument ?? document,
          a = e => {
            "Escape" === e.key && d(!1);
          };
        return e.addEventListener("keydown", a), () => e.removeEventListener("keydown", a);
      }, [c]), <div ref={r} className={A("bg-white dark:bg-neutral-950", "text-neutral-900 dark:text-neutral-100", "relative flex h-full min-h-[680px] w-full flex-col overflow-hidden")}><header className={A("border-b border-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:border-neutral-100/7", "flex shrink-0 flex-wrap items-start gap-3 px-5 py-4")}><span aria-hidden="true" className={A("relative inline-flex size-8 shrink-0 overflow-hidden rounded-[calc(var(--rb-r-lg,10px))] select-none", "size-11")}><span className="flex size-full items-center justify-center rounded-[inherit] bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_24%,white)] text-[12px]/[16px] font-extrabold tabular-nums text-neutral-900 dark:text-neutral-100 dark:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_22%,var(--color-neutral-900))]">CL</span></span><div className="min-w-[220px] flex-1"><div className="flex flex-wrap items-baseline gap-2"><h2 className="text-[22px]/[28px] font-extrabold tracking-[-0.01em]">Cedar Labs</h2><span className={A("inline-flex items-start gap-1.5 text-[15px]/[20px] font-bold tabular-nums", "connected" === _ ? "text-neutral-900/78 dark:text-neutral-100/78" : "text-neutral-900/62 dark:text-neutral-100/62")}>{"connected" === _ ? "Connected" : "Disconnected"}</span></div><p className={A(D, "mt-1")}>Opens an issue whenever a deploy check fails, and reports build results back onto pull requests.</p></div><div className="flex shrink-0 items-center gap-2"><button type="button" onClick={() => {
              b || p(!0);
            }} disabled={"connected" !== _} aria-busy={b} className={A(L, P)}><span className="grid place-items-center *:[grid-area:1/1]"><span className={A("inline-flex items-center gap-2", b && "invisible")}><__mod_22728.n icon={__mod_59157.A} size={18} strokeWidth={2} aria-hidden="true" />Sync now</span>{b && <span className="inline-flex items-center gap-2"><__mod_22728.n icon={__mod_79715.A} size={18} strokeWidth={2} aria-hidden="true" className="animate-spin [animation-duration:700ms] motion-reduce:animate-none" />Syncing</span>}</span></button>{"connected" === _ ? <button type="button" onClick={() => d(!0)} className={A(E, P)}><__mod_22728.n icon={__mod_3815.A} size={18} strokeWidth={2} aria-hidden="true" />Disconnect</button> : <button type="button" onClick={() => x("connected")} className={A("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_68%,white),var(--rb-accent,oklch(84%_0.15_165)))] text-[var(--rb-accent-fg,oklch(26%_0.06_168))] shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_4px_10px_-4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_80%,transparent)] hover:not-disabled:-translate-y-px hover:not-disabled:brightness-[1.04] hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_7px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_85%,transparent)] active:not-disabled:translate-y-px active:not-disabled:brightness-[0.98] active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_55%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] motion-reduce:hover:translate-y-0 disabled:opacity-45 disabled:shadow-none dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_78%,white),var(--rb-accent,oklch(81%_0.16_163)))] dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_6px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,transparent)] dark:hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_9px_22px_-8px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_60%,transparent)] dark:active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_45%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black)] dark:disabled:shadow-none", P)}>Reconnect</button>}</div></header><div className="relative min-h-0 flex-1"><div ref={u} onScroll={k} className="h-full overflow-y-auto px-5 py-4"><div className="grid gap-4 lg:grid-cols-[1fr_300px]"><section className={A($, "p-4")}><h3 className={W}>Permissions</h3><p className={A(D, "mt-1")}>Cedar Labs only uses the scopes you leave enabled.</p><ul className="mt-3.5 space-y-1">{T.map(e => {
                    let a = e.required || i[e.id];
                    return <li className="flex items-center gap-3 py-2.5"><div className="min-w-0 flex-1"><div className="flex flex-wrap items-center gap-2"><span className={W}>{e.label}</span>{e.required && <span className={A("inline-flex h-5.5 min-w-5.5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden whitespace-nowrap rounded-[calc(var(--rb-r-full,999px))] px-2.5 text-[12px]/[16px] font-bold tabular-nums", "bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] text-neutral-900 dark:text-neutral-100 dark:bg-neutral-100/12")}>Required</span>}</div><p className={A(D, "mt-0.5")}>{e.detail}</p></div><button type="button" role="switch" aria-checked={a} aria-label={e.label} disabled={e.required} onClick={() => s(a => ({
                        ...a,
                        [e.id]: !a[e.id]
                      }))} className="group relative inline-flex h-6 w-10 shrink-0 cursor-pointer items-center rounded-full bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] p-0.5 shadow-[inset_0_1px_2px_rgb(84_62_32/0.14),inset_0_0_0_1px_rgb(84_62_32/0.05)] transition-[background-color,box-shadow,outline-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:aria-[checked=false]:not-disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_94%,black)] aria-checked:bg-[var(--rb-accent,oklch(84%_0.15_165))] aria-checked:shadow-[inset_0_1px_2px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_55%,black),inset_0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_75%,black)] disabled:cursor-not-allowed disabled:opacity-45 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:bg-neutral-100/16 dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6)] dark:hover:aria-[checked=false]:not-disabled:bg-neutral-100/24 dark:aria-checked:bg-[var(--rb-accent,oklch(81%_0.16_163))] dark:aria-checked:shadow-[inset_0_1px_2px_rgb(0_0_0/0.35)]"><span aria-hidden="true" className="pointer-events-none block h-5 w-5 rounded-full bg-white shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_2px_rgb(84_62_32/0.10),0_3px_8px_-2px_rgb(84_62_32/0.20)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.12),0_0_0_1px_rgb(0_0_0/0.6),0_2px_6px_-1px_rgb(0_0_0/0.6)] transition-[translate,width] duration-[280ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] motion-reduce:transition-none group-active:w-6 group-aria-checked:translate-x-4 group-aria-checked:group-active:translate-x-3 group-disabled:shadow-none dark:bg-white" /></button></li>;
                  })}</ul></section><section className={A($, "p-4")}><h3 className={W}>Activity</h3><ol className="mt-3 space-y-3">{q.map(e => <li className="flex gap-2.5"><span aria-hidden="true" className={A("flex size-[18px] shrink-0 items-center justify-center", "mt-px")}>{"ok" === e.tone && <__mod_22728.n icon={__mod_90987.A} size={14} strokeWidth={2} className={C} />}{"warn" === e.tone && <__mod_22728.n icon={__mod_36474.A} size={14} strokeWidth={2} className="text-[oklch(49%_0.1_68)] dark:text-[oklch(80%_0.13_68)]" />}</span><div className="min-w-0"><p className={O}>{e.text}</p><p className={A(I, "mt-0.5")}>{e.at}</p></div></li>)}</ol><a href="#" className={A("inline-flex min-h-6 items-center gap-1 rounded-[calc(var(--rb-r-sm,6px))] text-[15px]/[20px] font-bold text-neutral-900 dark:text-neutral-100 underline decoration-[var(--rb-accent,oklch(84%_0.15_165))] decoration-[3px] underline-offset-[5px] transition-[text-decoration-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:decoration-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:decoration-[var(--rb-accent,oklch(81%_0.16_163))] dark:hover:decoration-[var(--rb-accent,oklch(81%_0.16_163))]", "mt-4 self-start")}>Full audit log<__mod_22728.n icon={__mod_1497.A} size={16} strokeWidth={2} aria-hidden="true" /></a></section></div></div><div aria-hidden="true" className={A("bg-linear-to-b from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 top-0 h-8", h.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={A("bg-linear-to-t from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 bottom-0 h-8", h.end ? "opacity-100" : "opacity-0")} /></div><__mod_47962.N>{c && <motion.div className="absolute inset-0 z-40 flex items-center justify-center p-5" initial={!a && {
            opacity: 0
          }} animate={{
            opacity: 1,
            transition: {
              duration: .18,
              ease: [.2, 0, 0, 1]
            }
          }} exit={a ? void 0 : {
            opacity: 0,
            transition: {
              duration: .12,
              ease: [.2, 0, 0, 1]
            }
          }}><button type="button" aria-label="Close" onClick={() => d(!1)} className={A("bg-[oklch(28%_0.02_70/0.3)] dark:bg-neutral-950/70", "absolute inset-0 cursor-default")} /><div role="dialog" aria-modal="true" aria-labelledby={`${e}-title`} className={A("flex max-h-[calc(100%-4rem)] flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 outline-none shadow-[0_0_0_1px_rgb(84_62_32/0.08),0_24px_56px_-20px_rgb(84_62_32/0.34),0_6px_16px_-8px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.65),0_24px_56px_-16px_rgb(0_0_0/0.8)]", "relative max-h-full w-full max-w-[380px]")}><div className="mx-1 mt-1 flex min-h-0 flex-1 flex-col overflow-y-auto rounded-[calc(var(--rb-r-5xl,22px))] border border-transparent bg-white dark:bg-neutral-950 shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] [&:last-child]:mb-1"><div className="relative flex flex-col gap-2 px-5 pt-6 pb-6 has-[button]:pe-14 [&:has(+*)]:pb-0"><__mod_22728.n icon={__mod_36474.A} size={18} strokeWidth={2} aria-hidden="true" className={A(S, "mb-1.5")} /><h3 id={`${e}-title`} className="text-[19px]/[24px] font-extrabold tracking-[-0.01em] text-neutral-900 dark:text-neutral-100">Disconnect Cedar Labs?</h3><p className="text-[15px]/[22px] font-medium text-neutral-900/78 dark:text-neutral-100/78">Deploy checks stop reporting and the stored token is revoked. Existing issues stay where they are.</p></div></div><div className="flex min-h-14 flex-wrap items-center justify-end gap-2 px-4 py-2.5 pe-2.5"><button type="button" autoFocus={!0} onClick={() => d(!1)} className={A(L, M)}>Keep connected</button><button type="button" onClick={() => {
                  x("disconnected"), d(!1);
                }} className={A(E, M)}>Disconnect</button></div></div></motion.div>}</__mod_47962.N><p className="sr-only" aria-live="polite">{"connected" === _ ? "Cedar Labs is connected" : "Cedar Labs is disconnected"}</p></div>;
    },
    "integrations-3": function () {
      let e = (0, React.useId)(),
        a = (0, __mod_50969.I)(),
        [r, i] = (0, React.useState)(en),
        [c, d] = (0, React.useState)({}),
        [_, x] = (0, React.useState)(null),
        b = (0, React.useRef)(0),
        p = (0, React.useRef)(null),
        {
          ref: u,
          edges: h,
          onScroll: k
        } = function (e) {
          let a = (0, React.useRef)(null),
            [r, t] = (0, React.useState)({
              top: !1,
              bottom: !1,
              start: !1,
              end: !1
            }),
            l = (0, React.useCallback)(() => {
              let e = a.current;
              if (!e) return;
              let {
                scrollTop: r,
                scrollHeight: n,
                clientHeight: l,
                scrollLeft: i,
                scrollWidth: o,
                clientWidth: s
              } = e;
              t({
                top: r > 1,
                bottom: Math.ceil(r + l) < n - 1,
                start: i > 1,
                end: Math.ceil(i + s) < o - 1
              });
            }, []);
          return (0, React.useEffect)(() => {
            l();
            let e = a.current,
              r = e?.ownerDocument.defaultView;
            if (!e || !r?.ResizeObserver) return;
            let t = new r.ResizeObserver(l);
            return t.observe(e), () => t.disconnect();
          }, [e, l]), {
            ref: a,
            edges: r,
            onScroll: l
          };
        }(r.length),
        m = () => {
          b.current += 1, i(e => [{
            id: `new-${b.current}`,
            label: `Untitled key ${b.current}`,
            env: "Local",
            secret: `rbk_test_${`${b.current}`.padStart(4, "0")}e7b1c4a9d63f082a`,
            created: "Just now",
            used: "Never",
            scope: "Read"
          }, ...e]);
        };
      return <div className={U("bg-white dark:bg-neutral-950", "text-neutral-900 dark:text-neutral-100", "relative flex h-full min-h-[680px] w-full flex-col overflow-hidden")}><header className={U("border-b border-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:border-neutral-100/7", "flex shrink-0 flex-wrap items-end justify-between gap-3 px-4 py-4")}><div><h2 className="text-[22px]/[28px] font-extrabold tracking-[-0.01em]">API keys</h2><p className={U(ea, "mt-1")}>Keys inherit the permissions of the workspace they belong to.</p></div><button type="button" onClick={m} className={U("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_68%,white),var(--rb-accent,oklch(84%_0.15_165)))] text-[var(--rb-accent-fg,oklch(26%_0.06_168))] shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_4px_10px_-4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_80%,transparent)] hover:not-disabled:-translate-y-px hover:not-disabled:brightness-[1.04] hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_7px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_85%,transparent)] active:not-disabled:translate-y-px active:not-disabled:brightness-[0.98] active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_55%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] motion-reduce:hover:translate-y-0 disabled:opacity-45 disabled:shadow-none dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_78%,white),var(--rb-accent,oklch(81%_0.16_163)))] dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_6px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,transparent)] dark:hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_9px_22px_-8px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_60%,transparent)] dark:active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_45%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black)] dark:disabled:shadow-none", X)}><__mod_22728.n icon={__mod_89886.A} size={18} strokeWidth={2} aria-hidden="true" />Create key</button></header><div className="relative min-h-0 flex-1"><div ref={u} onScroll={k} className="h-full overflow-auto">{r.length > 0 ? <table className={U("w-full border-separate border-spacing-0 text-left text-[15px]/[22px] font-medium", "min-w-[720px]")}><caption className="sr-only">API keys</caption><thead><tr>{el.map((e, a) => <th scope="col" className={U("h-10 border-b border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] px-3 text-left align-middle text-[13px]/[16px] font-bold tabular-nums whitespace-nowrap text-neutral-900/62 dark:text-neutral-100/62 first:ps-4 last:pe-4 dark:bg-neutral-100/4", a === el.length - 1 && "text-right")}>{e}</th>)}</tr></thead><tbody><__mod_47962.N initial={!1}>{r.map(e => {
                    let r,
                      n = !!c[e.id],
                      s = _ === e.id;
                    return <motion.tr layout={!a} initial={!a && {
                      opacity: 0
                    }} animate={{
                      opacity: 1
                    }} exit={a ? void 0 : {
                      opacity: 0
                    }} transition={{
                      duration: .16,
                      ease: [.2, 0, 0, 1]
                    }} className="group transition-[background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:not-aria-selected:bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] dark:hover:not-aria-selected:bg-neutral-100/4 dark:aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)]"><td className={U(ee, "py-3")}><div className="flex items-center gap-2.5"><span aria-hidden="true" className={U("flex size-9 shrink-0 items-center justify-center text-neutral-900/78 dark:text-neutral-100/78", "size-[28px]")}><__mod_22728.n icon={__mod_79698.A} size={16} strokeWidth={2} /></span><div className="min-w-0"><p className={U("text-[15px]/[20px] font-bold", "truncate")}>{e.label}</p><p className={U(er, "mt-0.5")}>{e.env}</p></div></div></td><td className={U(ee, "py-3")}><div className="w-[296px]"><div className={U("relative flex w-full min-w-0 cursor-text items-center rounded-[calc(var(--rb-r-xl,12px))] data-concentric:rounded-[var(--rb-r-5xl,22px)] border border-transparent bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] text-[15px]/[20px] font-medium text-neutral-900 transition-[border-color,box-shadow,background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:not-focus-within:not-has-[[aria-invalid=true]]:not-has-[input:disabled]:not-has-[input[readonly]]:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] focus-within:border-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] focus-within:bg-white focus-within:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] has-[[aria-invalid=true]]:border-[oklch(60%_0.236_26)] has-[[aria-invalid=true]]:bg-[oklch(97.5%_0.016_26)] has-[input:disabled]:cursor-not-allowed has-[input:disabled]:text-neutral-900/40 has-[input:disabled]:shadow-none has-[input[readonly]]:cursor-default has-[input[readonly]]:shadow-none dark:text-neutral-100 dark:hover:not-focus-within:not-has-[[aria-invalid=true]]:not-has-[input:disabled]:not-has-[input[readonly]]:bg-neutral-900 dark:focus-within:border-[var(--rb-accent,oklch(81%_0.16_163))] dark:focus-within:bg-neutral-900 dark:focus-within:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:has-[[aria-invalid=true]]:border-[oklch(65.2%_0.219_26)] dark:has-[[aria-invalid=true]]:bg-[oklch(26%_0.04_26)] dark:has-[input:disabled]:text-neutral-100/40", "h-8")}><input readOnly={!0} value={n ? e.secret : (r = e.secret, `${r.slice(0, 8)}${"•".repeat(16)}${r.slice(-4)}`)} aria-label={`${e.label} key`} className={et} /><span data-affix={!0} className="flex shrink-0 items-center gap-2 text-[15px]/[20px] font-semibold text-neutral-900/62 dark:text-neutral-100/62 select-none first:ps-3.5 last:pe-3.5 has-[button]:first:ps-1 has-[button]:last:pe-1"><button type="button" aria-label={n ? "Hide key" : "Reveal key"} aria-pressed={n} onClick={() => d(a => ({
                                ...a,
                                [e.id]: !a[e.id]
                              }))} className={U(G, Z)}><__mod_22728.n icon={n ? __mod_56987.A : __mod_2301.A} size={18} strokeWidth={2} aria-hidden="true" /></button><button type="button" aria-label="Copy key" onClick={() => {
                                x(e.id), p.current && window.clearTimeout(p.current), p.current = window.setTimeout(() => x(null), 1600);
                              }} className={U(G, Z)}><__mod_22728.n icon={s ? __mod_90987.A : __mod_62714.A} size={18} strokeWidth={2} aria-hidden="true" /></button></span></div></div><span role="status" className="sr-only">{s ? "Copied" : ""}</span></td><td className={U(ee, "py-3")}><span className={U("inline-flex h-5.5 min-w-5.5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden whitespace-nowrap rounded-[calc(var(--rb-r-full,999px))] px-2.5 text-[12px]/[16px] font-bold tabular-nums", "bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] text-neutral-900 dark:text-neutral-100 dark:bg-neutral-100/12")}>{e.scope}</span></td><td className={U(ee, "py-3")}><span className={ea}>{e.created}</span></td><td className={U(ee, "py-3")}><span className={ea}>{e.used}</span></td><td className={U(ee, "py-3 text-right")}><div className={U("flex items-center justify-end gap-0.5 md:opacity-0 md:group-hover:opacity-100 md:group-focus-within:opacity-100 transition-opacity duration-[180ms]", "gap-1.5")}><button type="button" onClick={() => {
                            let a;
                            return a = e.id, i(e => e.map(e => e.id === a ? {
                              ...e,
                              secret: `${e.secret.slice(0, 9)}${e.secret.slice(9).split("").reverse().join("")}`,
                              used: "Never",
                              created: "Just now"
                            } : e));
                          }} className={U(Y, "h-8 gap-1.5 rounded-[calc(var(--rb-r-full,999px))] px-3.5 text-[14px]/[18px] font-bold")}><__mod_22728.n icon={__mod_54500.A} size={18} strokeWidth={2} aria-hidden="true" />Rotate</button><button type="button" aria-label={`Revoke ${e.label}`} onClick={() => i(a => a.filter(a => a.id !== e.id))} className={U(Y, "size-8 rounded-[calc(var(--rb-r-full,999px))]")}><__mod_22728.n icon={__mod_96037.A} size={18} strokeWidth={2} aria-hidden="true" /></button></div></td></motion.tr>;
                  })}</__mod_47962.N></tbody></table> : <div className="flex flex-col items-center px-6 py-20 text-center"><__mod_22728.n icon={__mod_79698.A} size={18} strokeWidth={2} aria-hidden="true" className="text-neutral-900/78 dark:text-neutral-100/78" /><p className={U("text-[19px]/[24px] font-extrabold tracking-[-0.01em] text-neutral-900 dark:text-neutral-100", "mt-3")}>No API keys</p><p className={U("max-w-[48ch] text-[15px]/[22px] font-medium text-neutral-900/78 dark:text-neutral-100/78", "mt-1")}>Create a key to call the API from a server you control. Keys are shown once and can be rotated at any time.</p><button type="button" onClick={m} className={U(Y, X, "mt-4")}><__mod_22728.n icon={__mod_89886.A} size={18} strokeWidth={2} aria-hidden="true" />Create key</button></div>}</div><div aria-hidden="true" className={U("bg-linear-to-b from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 top-0 h-8", h.top ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={U("bg-linear-to-t from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 bottom-0 h-8", h.bottom ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={U("bg-linear-to-r from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-y-0 left-0 w-8", h.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={U("bg-linear-to-l from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-y-0 right-0 w-8", h.end ? "opacity-100" : "opacity-0")} /></div><footer className={U("border-t border-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:border-neutral-100/7", ea, "flex shrink-0 flex-wrap gap-x-3 px-4 py-2.5")}><span><span className="tabular-nums">{r.length}</span> keys</span><span>Revoking takes effect immediately</span></footer><p className="sr-only" aria-live="polite" id={`${e}-live`}>{r.length} API keys</p></div>;
    },
    "integrations-4": function () {
      let e = (0, React.useId)(),
        [a, r] = (0, React.useState)(ew),
        [i, o] = (0, React.useState)("e1"),
        [c, d] = (0, React.useState)("d1"),
        _ = a.find(e => e.id === i) ?? a[0],
        x = ej[_.id] ?? [];
      return <div className={es("bg-white dark:bg-neutral-950", "text-neutral-900 dark:text-neutral-100", "relative flex h-full min-h-[680px] w-full flex-col overflow-hidden lg:flex-row")}><aside className={es(ed, "flex shrink-0 flex-col lg:w-[320px] lg:border-r lg:border-b-0")}><div className={es(ed, "flex h-[52px] shrink-0 items-center justify-between gap-2 px-5")}><span className="text-[15px]/[20px] font-bold">Endpoints</span><button type="button" aria-label="Add endpoint" className={es(eb, "size-8 rounded-[calc(var(--rb-r-full,999px))]")}><__mod_22728.n icon={__mod_89886.A} size={18} strokeWidth={2} aria-hidden="true" /></button></div><div className="min-h-0 flex-1 overflow-y-auto p-2">{a.map(e => {
              let a = e.id === i;
              return <button type="button" onClick={() => {
                o(e.id), d(ej[e.id]?.[0]?.id ?? null);
              }} aria-current={a ? "true" : void 0} className={es(ek, eg, a ? "bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] dark:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)]" : em, ex, "mb-1 px-3 py-2.5")}><div className="flex min-w-0 flex-1 flex-col gap-0.5"><div className="flex items-center gap-2"><__mod_22728.n icon={__mod_81515.A} size={16} strokeWidth={2} aria-hidden="true" className={es(ec, "shrink-0")} /><span className={es(e_, "min-w-0 flex-1 truncate")}>{e.url.replace(/^https:\/\//, "")}</span></div><p className={es(ev, "flex flex-wrap items-baseline gap-x-3")}><span>{e.events.length} events</span><span><span className="tabular-nums">{e.rate}%</span> delivered</span><span className={es("inline-flex items-start gap-1 text-[14px]/[20px] font-bold tabular-nums", e.enabled ? "text-neutral-900/78 dark:text-neutral-100/78" : "text-neutral-900/62 dark:text-neutral-100/62", "ms-auto")}>{e.enabled ? "Enabled" : "Paused"}</span></p></div></button>;
            })}</div></aside><section className="flex min-h-0 min-w-0 flex-1 flex-col"><header className={es(ed, "flex shrink-0 flex-wrap items-start justify-between gap-3 px-5 py-3.5")}><div className="min-w-0"><p className={es("font-mono text-[13px]/[20px] tabular-nums", "truncate")}>{_.url}</p><div className="mt-1.5 flex flex-wrap gap-1">{_.events.map(e => <span className={es(eu, eh)}>{e}</span>)}</div></div><div className="flex shrink-0 items-center gap-2"><button type="button" className={es(eb, ep)}><__mod_22728.n icon={__mod_54500.A} size={18} strokeWidth={2} aria-hidden="true" />Send test</button><button type="button" role="switch" aria-checked={_.enabled} aria-label="Endpoint enabled" onClick={() => r(e => e.map(e => e.id === _.id ? {
                ...e,
                enabled: !e.enabled
              } : e))} className="group relative inline-flex h-6 w-10 shrink-0 cursor-pointer items-center rounded-full bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] p-0.5 shadow-[inset_0_1px_2px_rgb(84_62_32/0.14),inset_0_0_0_1px_rgb(84_62_32/0.05)] transition-[background-color,box-shadow,outline-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:aria-[checked=false]:not-disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_94%,black)] aria-checked:bg-[var(--rb-accent,oklch(84%_0.15_165))] aria-checked:shadow-[inset_0_1px_2px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_55%,black),inset_0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_75%,black)] disabled:cursor-not-allowed disabled:opacity-45 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:bg-neutral-100/16 dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6)] dark:hover:aria-[checked=false]:not-disabled:bg-neutral-100/24 dark:aria-checked:bg-[var(--rb-accent,oklch(81%_0.16_163))] dark:aria-checked:shadow-[inset_0_1px_2px_rgb(0_0_0/0.35)]"><span aria-hidden="true" className="pointer-events-none block h-5 w-5 rounded-full bg-white shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_2px_rgb(84_62_32/0.10),0_3px_8px_-2px_rgb(84_62_32/0.20)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.12),0_0_0_1px_rgb(0_0_0/0.6),0_2px_6px_-1px_rgb(0_0_0/0.6)] transition-[translate,width] duration-[280ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] motion-reduce:transition-none group-active:w-6 group-aria-checked:translate-x-4 group-aria-checked:group-active:translate-x-3 group-disabled:shadow-none dark:bg-white" /></button></div></header><div className="min-h-0 flex-1 overflow-y-auto">{x.length > 0 ? <ul className={es("divide-y divide-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:divide-neutral-100/7", "p-2")}>{x.map(e => {
                let a,
                  r = e.id === c;
                return <li><button type="button" aria-expanded={r} onClick={() => d(r ? null : e.id)} className={es(ek, eg, em, ex, "group px-3 py-3")}><__mod_22728.n icon={__mod_5042.A} size={14} strokeWidth={2} aria-hidden="true" className="shrink-0 text-neutral-900/62 dark:text-neutral-100/62 transition-transform duration-[280ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] motion-reduce:transition-none group-aria-expanded:rotate-90" /><span className={es(eu, (a = e.status) >= 500 ? "bg-[oklch(95.5%_0.03_26)] dark:bg-[oklch(30%_0.065_26)] text-[oklch(51%_0.18_26)] dark:text-[oklch(76%_0.14_26)]" : a >= 400 ? "bg-[oklch(96%_0.045_82)] dark:bg-[oklch(32%_0.06_72)] text-[oklch(49%_0.1_68)] dark:text-[oklch(80%_0.13_68)]" : eh, "w-9")}>{e.status}</span><span className={es(e_, "min-w-0 flex-1 truncate")}>{e.event}</span><span className={es(ef, "w-[72px] shrink-0 text-right max-sm:hidden")}>{e.attempts} {1 === e.attempts ? "attempt" : "attempts"}</span><span className={es(ef, "w-[56px] shrink-0 text-right")}>{e.ms} ms</span><span className={es(ef, "w-[56px] shrink-0 text-right")}>{e.at}</span></button>{r && <div className="px-3 pt-1 pb-4"><div className="relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-3xl,16px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.07),0_1px_2px_rgb(84_62_32/0.06),0_8px_22px_-10px_rgb(84_62_32/0.20)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_0_0_1px_rgb(0_0_0/0.6),0_10px_24px_-12px_rgb(0_0_0/0.8)]"><pre className={es("overflow-auto bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] py-3.5 font-mono text-[13px]/[21px] tabular-nums text-neutral-900 dark:text-neutral-100 [scrollbar-width:thin] dark:bg-neutral-950/60", "px-3")}>{e.body}</pre></div>{e.status >= 400 && <button type="button" className={es(eb, ep, "mt-3")}><__mod_22728.n icon={__mod_59157.A} size={18} strokeWidth={2} aria-hidden="true" />Replay delivery</button>}</div>}</li>;
              })}</ul> : <div className="flex flex-col items-center px-6 py-20 text-center"><__mod_22728.n icon={__mod_81515.A} size={18} strokeWidth={2} aria-hidden="true" className="text-neutral-900/78 dark:text-neutral-100/78" /><p className={es("text-[19px]/[24px] font-extrabold tracking-[-0.01em] text-neutral-900 dark:text-neutral-100", "mt-3")}>No deliveries yet</p><p className={es("max-w-[48ch] text-[15px]/[22px] font-medium text-neutral-900/78 dark:text-neutral-100/78", "mt-1")}>This endpoint is paused. Enable it, or send a test event to confirm the receiver responds.</p></div>}</div><p className="sr-only" aria-live="polite" id={`${e}-live`}>{x.length} deliveries shown</p></section></div>;
    },
    "integrations-5": function () {
      let e = (0, __mod_50969.I)(),
        [a, r] = (0, React.useState)(eO[0]),
        [i, s] = (0, React.useState)(!1),
        [c, d] = (0, React.useState)("idle");
      (0, React.useEffect)(() => {
        if ("working" !== c) return;
        let e = window.setTimeout(() => d("done"), 1100);
        return () => window.clearTimeout(e);
      }, [c]);
      let _ = {
        initial: !e && {
          opacity: 0
        },
        animate: {
          opacity: 1,
          transition: {
            duration: .18,
            ease: [.2, 0, 0, 1]
          }
        },
        exit: e ? void 0 : {
          opacity: 0,
          transition: {
            duration: .12,
            ease: [.2, 0, 0, 1]
          }
        }
      };
      return <div className={eA("bg-white dark:bg-neutral-950", "text-neutral-900 dark:text-neutral-100", "relative flex h-full min-h-[700px] w-full items-center-safe justify-center overflow-y-auto py-8")}><div className="w-full max-w-[452px] px-4"><__mod_47962.N mode="wait" initial={!1}>{"done" === c ? <motion.div {..._} className={eA(eM, "p-6 text-center")}><span aria-hidden="true" className={eA("text-neutral-900/78 dark:text-neutral-100/78", "mx-auto inline-flex h-11 w-11 items-center justify-center")}><__mod_22728.n icon={__mod_90987.A} size={20} strokeWidth={2} /></span><h2 className={eA(eW, "mt-3.5")}>Northwind is connected</h2><p className={eA(eP, "mt-1.5")}>You can close this window. Access can be revoked at any time from workspace settings.</p><button type="button" onClick={() => d("idle")} className={eA(eL, eE, "mt-5 w-full")}>Back to review</button></motion.div> : <motion.div {..._} className={eA(eM, "p-6")}><div className="flex items-center justify-center gap-2"><span aria-hidden="true" className={eA(eS, "size-10")}><span className={eC}>NW</span></span><span aria-hidden="true" className={eA(eR, "flex items-center gap-1 px-1")}><span className="size-1 bg-current" /><span className="size-1 bg-current" /><span className="size-1 bg-current" /></span><span aria-hidden="true" className={eA("inline-flex shrink-0 items-center justify-center overflow-hidden rounded-[calc(var(--rb-r-lg,10px))] bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_68%,white),var(--rb-accent,oklch(84%_0.15_165)))] text-[var(--rb-accent-fg,oklch(26%_0.06_168))] shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] select-none dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_78%,white),var(--rb-accent,oklch(81%_0.16_163)))] dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.4),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black)]", "text-[13px]/[16px] font-bold tabular-nums", "size-10")}>HL</span></div><h2 className={eA(eW, "mt-4 text-center")}>Northwind wants access to your Halcyon workspace</h2><p className={eA(eP, "mt-1.5 text-center")}>Review what Northwind will be able to do before you continue.</p><div className="relative mt-5"><label htmlFor="consent-workspace" className="flex w-fit items-center gap-2 text-[15px]/[20px] font-bold text-neutral-900 dark:text-neutral-100">Workspace</label><button id="consent-workspace" type="button" aria-haspopup="listbox" aria-expanded={i} onClick={() => s(e => !e)} className={eA("inline-flex h-10 w-fit min-w-40 cursor-pointer items-center justify-between gap-2 rounded-[calc(var(--rb-r-xl,12px))] border border-transparent bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] px-3.5 text-left text-[15px]/[20px] font-semibold whitespace-nowrap text-neutral-900 outline-none select-none transition-[border-color,box-shadow,background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:not-disabled:not-aria-invalid:not-aria-expanded:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] focus-visible:border-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] focus-visible:bg-white focus-visible:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-expanded:border-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] aria-expanded:bg-white aria-expanded:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-invalid:border-[oklch(60%_0.236_26)] disabled:cursor-not-allowed disabled:text-neutral-900/40 disabled:shadow-none dark:text-neutral-100 dark:hover:not-disabled:not-aria-invalid:not-aria-expanded:bg-neutral-900 dark:focus-visible:border-[var(--rb-accent,oklch(81%_0.16_163))] dark:focus-visible:bg-neutral-900 dark:focus-visible:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-expanded:border-[var(--rb-accent,oklch(81%_0.16_163))] dark:aria-expanded:bg-neutral-900 dark:aria-expanded:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-invalid:border-[oklch(65.2%_0.219_26)] dark:disabled:text-neutral-100/40", "mt-2 w-full")}><span aria-hidden="true" className={eA(eS, "size-[24px]")}><span className={eC}>{a.name.slice(0, 2).toUpperCase()}</span></span><span className="min-w-0 flex-1"><span className="block truncate">{a.name}</span></span><span className={eA(e$, "shrink-0")}>{a.role}</span><__mod_22728.n icon={__mod_31517.A} size={18} strokeWidth={2} aria-hidden="true" className="shrink-0 text-neutral-900/78 dark:text-neutral-100/78" /></button><__mod_47962.N>{i && <motion.ul role="listbox" initial={!e && {
                    opacity: 0
                  }} animate={{
                    opacity: 1,
                    transition: {
                      duration: .16,
                      ease: [.2, 0, 0, 1]
                    }
                  }} exit={e ? void 0 : {
                    opacity: 0,
                    transition: {
                      duration: .12,
                      ease: [.2, 0, 0, 1]
                    }
                  }} className={eA("min-w-52 max-w-[min(480px,calc(100vw-2rem))] overflow-x-hidden overflow-y-auto overscroll-contain rounded-[calc(var(--rb-r-3xl,16px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] p-2 text-neutral-900 dark:text-neutral-100 outline-none shadow-[0_0_0_1px_rgb(84_62_32/0.08),0_24px_56px_-20px_rgb(84_62_32/0.34),0_6px_16px_-8px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.65),0_24px_56px_-16px_rgb(0_0_0/0.8)]", "absolute top-[calc(100%+6px)] right-0 left-0 z-30")}>{eO.map(e => {
                      let n = e.id === a.id;
                      return <li role="presentation"><button type="button" role="option" aria-selected={n} onClick={() => {
                          r(e), s(!1);
                        }} className={eA("relative flex min-h-10 w-full cursor-default items-center gap-2.5 rounded-[calc(var(--rb-r-md,8px))] px-3 py-2 text-left text-[15px]/[20px] font-semibold text-neutral-900 outline-none select-none [&_svg]:shrink-0 [&_svg]:text-neutral-900/70 hover:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] focus-visible:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] data-[highlighted]:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-disabled:cursor-not-allowed aria-disabled:text-neutral-900/40 dark:text-neutral-100 dark:[&_svg]:text-neutral-100/70 dark:hover:bg-neutral-100/7 dark:focus-visible:bg-neutral-100/7 dark:data-[highlighted]:bg-neutral-100/7 dark:aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-disabled:text-neutral-100/40", "pe-8")}><span className="min-w-0 flex-1 truncate">{e.name}</span><span className={eA(e$, "shrink-0")}>{e.seats} seats</span>{n && <__mod_22728.n icon={__mod_90987.A} size={18} strokeWidth={2} aria-hidden="true" className="absolute end-2" />}</button></li>;
                    })}</motion.ul>}</__mod_47962.N></div><ul className={eA("bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)]", "rounded-[var(--rb-r-4xl,18px)]", "mt-4 space-y-2.5 p-3.5")}>{eD.map(e => <li className="flex gap-2.5"><__mod_22728.n icon={__mod_90987.A} size={16} strokeWidth={2} aria-hidden="true" className={eA(eR, "mt-px shrink-0")} /><div className="min-w-0"><p className="text-[15px]/[20px] font-bold">{e.label}</p><p className={eA(eP, "mt-0.5")}>{e.detail}</p></div></li>)}</ul><p className={eA(eP, "mt-3 flex items-start gap-2")}><__mod_22728.n icon={__mod_20484.A} size={16} strokeWidth={2} aria-hidden="true" className="mt-[2px] shrink-0" />Northwind never receives your password, and cannot read billing details or delete projects.</p><div className="mt-5 flex gap-2"><button type="button" className={eA(eL, eE, "flex-1")}>Cancel</button><button type="button" onClick={() => {
                  "working" !== c && d("working");
                }} aria-busy={"working" === c} className={eA("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_68%,white),var(--rb-accent,oklch(84%_0.15_165)))] text-[var(--rb-accent-fg,oklch(26%_0.06_168))] shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_4px_10px_-4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_80%,transparent)] hover:not-disabled:-translate-y-px hover:not-disabled:brightness-[1.04] hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_7px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_85%,transparent)] active:not-disabled:translate-y-px active:not-disabled:brightness-[0.98] active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_55%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] motion-reduce:hover:translate-y-0 disabled:opacity-45 disabled:shadow-none dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_78%,white),var(--rb-accent,oklch(81%_0.16_163)))] dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_6px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,transparent)] dark:hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_9px_22px_-8px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_60%,transparent)] dark:active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_45%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black)] dark:disabled:shadow-none", eE, "flex-1")}><span className="grid place-items-center *:[grid-area:1/1]"><span className={eA("inline-flex items-center gap-2", "working" === c && "invisible")}>Authorize</span>{"working" === c && <span className="inline-flex items-center gap-2"><__mod_22728.n icon={__mod_79715.A} size={18} strokeWidth={2} aria-hidden="true" className="animate-spin [animation-duration:700ms] motion-reduce:animate-none" />Authorizing</span>}</span></button></div><p className={eA(e$, "mt-4 flex items-center justify-center gap-1.5")}><__mod_22728.n icon={__mod_67358.A} size={14} strokeWidth={2} aria-hidden="true" />Redirects to northwind.dev</p></motion.div>}</__mod_47962.N></div></div>;
    },
    "integrations-6": function () {
      let e = (0, React.useId)(),
        [a, r] = (0, React.useState)(eY),
        {
          ref: i,
          edges: s,
          onScroll: c
        } = function () {
          let e = (0, React.useRef)(null),
            [a, r] = (0, React.useState)({
              start: !1,
              end: !1
            }),
            t = (0, React.useCallback)(() => {
              let a = e.current;
              if (!a) return;
              let {
                scrollTop: t,
                scrollHeight: n,
                clientHeight: l
              } = a;
              r({
                start: t > 1,
                end: Math.ceil(t + l) < n - 1
              });
            }, []);
          return (0, React.useEffect)(() => {
            t();
            let a = e.current,
              r = a?.ownerDocument.defaultView;
            if (!a || !r?.ResizeObserver) return;
            let n = new r.ResizeObserver(t);
            return n.observe(a), () => n.disconnect();
          }, [t]), {
            ref: e,
            edges: a,
            onScroll: t
          };
        }();
      (0, React.useEffect)(() => {
        let e = window.setInterval(() => {
          r(e => e.map(e => "syncing" === e.state ? {
            ...e,
            progress: e.progress >= 100 ? 12 : Math.min(100, e.progress + 4),
            rows: e.rows + 137
          } : e));
        }, 900);
        return () => window.clearInterval(e);
      }, []);
      let d = {
        healthy: a.filter(e => "healthy" === e.state).length,
        syncing: a.filter(e => "syncing" === e.state).length,
        error: a.filter(e => "error" === e.state).length,
        paused: a.filter(e => "paused" === e.state).length
      };
      return <div className={eq("bg-white dark:bg-neutral-950", "text-neutral-900 dark:text-neutral-100", "relative flex h-full min-h-[800px] w-full flex-col overflow-hidden")}><header className={eq("border-b border-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:border-neutral-100/7", "shrink-0 px-5 py-4")}><div className="flex flex-wrap items-end justify-between gap-3"><div><h2 className="text-[22px]/[28px] font-extrabold tracking-[-0.01em]">Sync status</h2><p className={eq(eU, "mt-1")}>Five connected sources writing into the warehouse.</p></div><button type="button" className={eq(eF, "h-10 gap-2 rounded-[calc(var(--rb-r-full,999px))] px-5 text-[15px]/[20px] font-bold")}><__mod_22728.n icon={__mod_59157.A} size={18} strokeWidth={2} aria-hidden="true" />Sync all</button></div><div className={eq("@container rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.07),0_1px_2px_rgb(84_62_32/0.06),0_8px_22px_-10px_rgb(84_62_32/0.20)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_0_0_1px_rgb(0_0_0/0.6),0_10px_24px_-12px_rgb(0_0_0/0.8)] p-1", "mt-4")}><div className="grid grid-cols-2 gap-1 [&>:last-child:nth-child(odd)]:col-span-full @3xl:grid-flow-col @3xl:grid-cols-none @3xl:auto-cols-fr @3xl:[&>:last-child:nth-child(odd)]:col-auto">{[["Healthy", d.healthy, eV], ["Syncing", d.syncing, eK], ["Failed", d.error, eQ], ["Paused", d.paused, eH]].map(([e, a, r]) => <div className="flex min-w-0 flex-col gap-2 rounded-[calc(var(--rb-r-5xl,22px))] bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] px-3 py-3.5 dark:bg-neutral-100/4"><p className={eq("inline-flex items-start gap-1.5 text-[15px]/[20px] font-bold tabular-nums", r)}>{e}</p><p className="flex min-w-0 flex-wrap items-baseline gap-x-1 text-[22px]/[28px] font-extrabold tracking-[-0.01em] tabular-nums text-neutral-900 dark:text-neutral-100">{a}</p></div>)}</div></div></header><div className="relative min-h-0 flex-1"><div ref={i} onScroll={c} className="h-full overflow-y-auto px-5 py-4"><ul className="space-y-2">{a.map(e => {
                let a = eG[e.state];
                return <li className={eq("relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] text-neutral-900 dark:text-neutral-100 shadow-[0_0_0_1px_rgb(84_62_32/0.07),0_1px_2px_rgb(84_62_32/0.06),0_8px_22px_-10px_rgb(84_62_32/0.20)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_0_0_1px_rgb(0_0_0/0.6),0_10px_24px_-12px_rgb(0_0_0/0.8)]", "p-3.5")}><div className="flex flex-wrap items-center gap-3"><span aria-hidden="true" className="relative inline-flex size-8 shrink-0 overflow-hidden rounded-[calc(var(--rb-r-lg,10px))] select-none"><span className="flex size-full items-center justify-center rounded-[inherit] bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_24%,white)] text-[12px]/[16px] font-extrabold tabular-nums text-neutral-900 dark:text-neutral-100 dark:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_22%,var(--color-neutral-900))]">{e.mark}</span></span><div className="min-w-0 flex-1"><div className="flex flex-wrap items-center gap-2"><span className="text-[15px]/[20px] font-bold">{e.source}</span><span aria-hidden="true" className={eB}>→</span><span className={eq("font-mono text-[12px]/[16px] tabular-nums", eB, "truncate")}>{e.target}</span></div><p className={eq(eJ, "mt-0.5 flex flex-wrap gap-x-3")}><span><span className="tabular-nums">{e.rows.toLocaleString("en-US")}</span> rows</span><span className="sm:hidden">{e.last}</span></p></div><span className={eq(eU, "w-28 shrink-0 text-right max-sm:hidden")}>{e.last}</span><span className={eq("inline-flex items-start gap-1 text-[14px]/[20px] font-bold tabular-nums", a.tone, "shrink-0 sm:w-18")}>{"syncing" === e.state && <span className="flex h-lh shrink-0 items-center"><span className="inline-block size-3 shrink-0 rounded-full border-2 border-current border-t-transparent animate-spin [animation-duration:700ms] motion-reduce:animate-none" aria-hidden="true" /></span>}{a.label}</span><button type="button" onClick={() => {
                      let a;
                      return a = e.id, r(e => e.map(e => e.id === a ? {
                        ...e,
                        state: "paused" === e.state || "error" === e.state ? "syncing" : "paused"
                      } : e));
                    }} aria-label={"paused" === e.state || "error" === e.state ? `Resume ${e.source}` : `Pause ${e.source}`} className={eq(eF, "size-8 rounded-[calc(var(--rb-r-full,999px))]")}><__mod_22728.n icon={"paused" === e.state || "error" === e.state ? __mod_48318.A : __mod_81520.A} size={18} strokeWidth={2} aria-hidden="true" /></button></div><div className={eq("relative block h-2.5 w-full overflow-hidden rounded-[calc(var(--rb-r-full,999px))] bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] shadow-[inset_0_1px_2px_rgb(84_62_32/0.12)] dark:bg-neutral-100/12 dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.5)]", "mt-3")}><div className={"error" === e.state ? eq("bg-[oklch(65.2%_0.219_26)] dark:bg-[oklch(65.2%_0.219_26)]", "block h-full") : "block h-full rounded-[calc(var(--rb-r-full,999px))] bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_82%,black)] shadow-[inset_0_1px_0_rgb(255_255_255/0.35)] transition-[width] duration-[420ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] motion-reduce:transition-none dark:bg-[var(--rb-accent,oklch(81%_0.16_163))]"} style={{
                      width: `${e.progress}%`
                    }} /></div>{e.note && <p className={eq("flex items-start gap-2 text-[14px]/[20px] font-bold text-[oklch(51%_0.18_26)] dark:text-[oklch(76%_0.14_26)]", "mt-2.5")}><__mod_22728.n icon={__mod_36474.A} size={18} strokeWidth={2} aria-hidden="true" className="mt-px shrink-0" />{e.note}</p>}</li>;
              })}</ul></div><div aria-hidden="true" className={eq("bg-linear-to-b from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 top-0 h-8", s.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={eq("bg-linear-to-t from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 bottom-0 h-8", s.end ? "opacity-100" : "opacity-0")} /></div><footer className={eq("border-t border-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:border-neutral-100/7", eU, "flex shrink-0 items-center gap-2 px-5 py-2.5")}><__mod_22728.n icon={__mod_90987.A} size={16} strokeWidth={2} aria-hidden="true" /><span className="flex flex-wrap gap-x-3"><span>Warehouse reachable</span><span>Checked 30 seconds ago</span></span></footer><p className="sr-only" aria-live="polite" id={`${e}-live`}>{d.error} failing syncs</p></div>;
    }
  },
  eZ = {
    "integrations-1": 700,
    "integrations-2": 680,
    "integrations-3": 680,
    "integrations-4": 680,
    "integrations-5": 700,
    "integrations-6": 800
  };

export { eX as components };
export { eZ as heights };

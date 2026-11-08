import { motion, AnimatePresence } from "motion/react";
import * as __mod_22728 from "../_helpers/22728";
import * as __mod_63163 from "../_helpers/63163";
import * as __mod_90987 from "../_helpers/90987";
import * as __mod_99199 from "../_helpers/99199";
import * as __mod_5042 from "../_helpers/5042";
import * as __mod_59157 from "../_helpers/59157";
import * as __mod_50969 from "../_helpers/50969";
import * as __mod_54345 from "../_helpers/54345";
import * as __mod_46772 from "../_helpers/46772";
import * as __mod_42734 from "../_helpers/42734";
import * as __mod_89289 from "../_helpers/89289";
import * as __mod_92752 from "../_helpers/92752";
/**
 * Agent Activity 2
 * slug: agent-activity-2
 * category: agent-activity
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let c = (...e) => e.filter(Boolean).join(" "),
  d = "text-neutral-900 dark:text-neutral-100",
  _ = "text-neutral-900/78 dark:text-neutral-100/78",
  x = "text-neutral-900/62 dark:text-neutral-100/62",
  u = "text-[14px]/[20px] font-medium",
  b = "inline-block size-3 shrink-0 rounded-full border-2 border-current border-t-transparent animate-spin [animation-duration:700ms] motion-reduce:animate-none",
  p = c(u, x),
  h = [{
    label: "Loaded October general ledger",
    state: "done",
    seconds: .4
  }, {
    label: "Pulled bank statement export",
    state: "done",
    seconds: 1.3
  }, {
    label: "Normalised 1,284 transactions",
    state: "done",
    seconds: 2.1
  }, {
    label: "Split multi-currency lines",
    state: "done",
    seconds: 1.7
  }, {
    label: "Matched transactions to ledger",
    state: "done",
    seconds: 3.6
  }, {
    label: "Flagged 12 unmatched entries",
    state: "done",
    seconds: .8
  }, {
    label: "Grouped duplicates by reference",
    state: "done",
    seconds: .5
  }, {
    label: "Reconciling flagged entries",
    state: "running"
  }, {
    label: "Resolve foreign-exchange rounding",
    state: "queued"
  }, {
    label: "Post adjustments to the ledger",
    state: "queued"
  }, {
    label: "Generate the reconciliation report",
    state: "queued"
  }, {
    label: "Archive the reconciliation run",
    state: "queued"
  }, {
    label: "Notify the finance team",
    state: "queued"
  }],
  m = h.reduce((e, r) => e + (r.seconds ?? 0), 0);
function f(e) {
  return `${e.toFixed(1)}s`;
}
let g = (...e) => e.filter(Boolean).join(" "),
  v = "text-neutral-900/62 dark:text-neutral-100/62",
  w = "text-[14px]/[20px] font-medium",
  j = "shrink-0 text-[14px]/[20px] font-semibold tabular-nums text-neutral-900/62 dark:text-neutral-100/62",
  N = g(w, v),
  y = [{
    label: "Prepare export",
    seconds: 4.2,
    subSteps: [{
      label: "Validate source schema",
      seconds: 1.1
    }, {
      label: "Snapshot three tables",
      seconds: 2.4
    }, {
      label: "Acquire export lock",
      seconds: .7
    }]
  }, {
    label: "Extract records",
    seconds: 12.8,
    subSteps: [{
      label: "Read customers",
      seconds: 3.1
    }, {
      label: "Read subscriptions",
      seconds: 6.4
    }, {
      label: "Read invoices",
      seconds: 3.3
    }]
  }, {
    label: "Transform rows",
    seconds: 8.3,
    subSteps: [{
      label: "Normalise currencies",
      seconds: 2.2
    }, {
      label: "Resolve account owners",
      seconds: 4
    }, {
      label: "Drop test accounts",
      seconds: 2.1
    }]
  }, {
    label: "Load warehouse",
    seconds: 5.1,
    subSteps: [{
      label: "Stage to temp table",
      seconds: 1.8
    }, {
      label: "Merge into reporting schema",
      seconds: 3.3
    }]
  }, {
    label: "Verify output",
    seconds: 2,
    subSteps: [{
      label: "Compare row counts",
      seconds: .9
    }, {
      label: "Check referential integrity",
      seconds: 1.1
    }]
  }],
  C = Math.max(...y.flatMap(e => e.subSteps.map(e => e.seconds))),
  z = y.reduce((e, r) => e + r.seconds, 0);
function S(e) {
  return `${e.toFixed(1)}s`;
}
let A = (...e) => e.filter(Boolean).join(" "),
  L = "text-neutral-900 dark:text-neutral-100",
  M = "text-neutral-900/78 dark:text-neutral-100/78",
  W = "text-neutral-900/62 dark:text-neutral-100/62",
  E = "text-[14px]/[20px] font-medium",
  $ = "relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] text-neutral-900 dark:text-neutral-100 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] active:not-disabled:translate-y-px active:not-disabled:shadow-[inset_0_1px_3px_rgb(84_62_32/0.16),0_0_0_1px_rgb(84_62_32/0.10)] dark:active:not-disabled:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14),0_0_0_1px_rgb(84_62_32/0.10)] dark:aria-expanded:bg-neutral-800 dark:aria-expanded:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] disabled:bg-none disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] disabled:text-neutral-900/40 disabled:shadow-none dark:disabled:bg-neutral-800/60 dark:disabled:text-neutral-100/40",
  D = "h-8 gap-1.5 rounded-[calc(var(--rb-r-full,999px))] px-3.5 text-[14px]/[18px] font-bold",
  I = "inline-block size-3 shrink-0 rounded-full border-2 border-current border-t-transparent animate-spin [animation-duration:700ms] motion-reduce:animate-none",
  O = "mx-1 mb-1 flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-5xl,22px))] border border-transparent bg-white dark:bg-neutral-950 shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] [&:has(+*)]:mb-0",
  V = A(E, W),
  q = [{
    label: "Build the container image",
    seconds: 6
  }, {
    label: "Run the test suite",
    seconds: 9
  }, {
    label: "Push image to the registry",
    seconds: 4
  }, {
    label: "Apply database migrations",
    seconds: 5
  }, {
    label: "Roll out to production",
    seconds: 7
  }, {
    label: "Run smoke checks",
    seconds: 3
  }, {
    label: "Notify the release channel",
    seconds: 2
  }],
  F = q.reduce((e, r) => e + r.seconds, 0);
function T(e) {
  let r = Math.floor(e / 60),
    t = Math.floor(e % 60);
  return `${r}:${String(t).padStart(2, "0")}`;
}
let B = (...e) => e.filter(Boolean).join(" "),
  H = "text-neutral-900/78 dark:text-neutral-100/78",
  P = "text-neutral-900/62 dark:text-neutral-100/62",
  Z = "relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-transparent text-neutral-900 hover:not-disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] active:not-disabled:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] disabled:text-neutral-900/40 dark:text-neutral-100 dark:hover:not-disabled:bg-neutral-100/8 dark:active:not-disabled:bg-neutral-100/12 dark:aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:disabled:text-neutral-100/40",
  G = "size-8 rounded-[calc(var(--rb-r-full,999px))]",
  K = "h-10 border-b border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] px-3 text-left align-middle text-[13px]/[16px] font-bold tabular-nums whitespace-nowrap text-neutral-900/62 dark:text-neutral-100/62 first:ps-4 last:pe-4 dark:bg-neutral-100/4",
  Q = "h-12 border-b border-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] px-3 align-middle whitespace-nowrap text-neutral-900 dark:text-neutral-100 group-last:border-b-0 first:ps-4 last:pe-4 dark:border-neutral-100/6",
  U = "text-right tabular-nums",
  Y = B("text-[14px]/[20px] font-medium", P),
  J = [{
    name: "Reconcile October invoices",
    status: "succeeded",
    duration: "24.1s",
    cost: "$0.42",
    started: "12m ago"
  }, {
    name: "Sync Northwind CRM accounts",
    status: "succeeded",
    duration: "1m 18s",
    cost: "$1.85",
    started: "46m ago"
  }, {
    name: "Refresh churn model features",
    status: "failed",
    duration: "8.3s",
    cost: "$0.11",
    started: "1h ago"
  }, {
    name: "Export weekly board metrics",
    status: "succeeded",
    duration: "42.7s",
    cost: "$0.63",
    started: "2h ago"
  }, {
    name: "Deduplicate contact records",
    status: "cancelled",
    duration: "5.0s",
    cost: null,
    started: "3h ago"
  }, {
    name: "Backfill subscription events",
    status: "succeeded",
    duration: "3m 04s",
    cost: "$2.40",
    started: "5h ago"
  }, {
    name: "Retag support conversations",
    status: "succeeded",
    duration: "58.9s",
    cost: "$0.71",
    started: "6h ago"
  }, {
    name: "Generate quarterly revenue summary for the finance leadership review",
    status: "succeeded",
    duration: "1m 02s",
    cost: "$0.94",
    started: "9h ago"
  }, {
    name: "Rotate warehouse credentials",
    status: "failed",
    duration: "2.1s",
    cost: "$0.03",
    started: "11h ago"
  }, {
    name: "Import marketing leads",
    status: "cancelled",
    duration: "14.6s",
    cost: null,
    started: "14h ago"
  }, {
    name: "Reindex the product catalogue",
    status: "succeeded",
    duration: "2m 41s",
    cost: "$1.12",
    started: "18h ago"
  }, {
    name: "Recompute account health scores",
    status: "succeeded",
    duration: "47.5s",
    cost: "$0.55",
    started: "1d ago"
  }, {
    name: "Summarise overnight support volume",
    status: "succeeded",
    duration: "31.2s",
    cost: "$0.38",
    started: "1d ago"
  }, {
    name: "Prune stale vector embeddings",
    status: "cancelled",
    duration: "9.4s",
    cost: null,
    started: "2d ago"
  }],
  X = {
    succeeded: "Succeeded",
    failed: "Failed",
    cancelled: "Cancelled"
  },
  ee = {
    succeeded: "text-neutral-900/78 dark:text-neutral-100/78",
    failed: "text-[oklch(51%_0.18_26)] dark:text-[oklch(76%_0.14_26)]",
    cancelled: "text-neutral-900/62 dark:text-neutral-100/62"
  };
function er({
  status: e
}) {
  return <span className={B("inline-flex items-start gap-1.5 text-[15px]/[20px] font-bold tabular-nums", ee[e], "whitespace-nowrap")}>{X[e]}</span>;
}
let es = (...e) => e.filter(Boolean).join(" "),
  el = "text-neutral-900 dark:text-neutral-100",
  eo = "text-neutral-900/78 dark:text-neutral-100/78",
  ei = "text-neutral-900/62 dark:text-neutral-100/62",
  ec = "bg-[oklch(95.5%_0.03_26)] dark:bg-[oklch(30%_0.065_26)]",
  ed = "relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] text-neutral-900 dark:text-neutral-100 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] active:not-disabled:translate-y-px active:not-disabled:shadow-[inset_0_1px_3px_rgb(84_62_32/0.16),0_0_0_1px_rgb(84_62_32/0.10)] dark:active:not-disabled:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14),0_0_0_1px_rgb(84_62_32/0.10)] dark:aria-expanded:bg-neutral-800 dark:aria-expanded:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] disabled:bg-none disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] disabled:text-neutral-900/40 disabled:shadow-none dark:disabled:bg-neutral-800/60 dark:disabled:text-neutral-100/40",
  e_ = "h-10 gap-2 rounded-[calc(var(--rb-r-full,999px))] px-5 text-[15px]/[20px] font-bold",
  ex = "flex min-w-full items-start gap-3 px-4 font-mono text-[13px]/[21px] tabular-nums",
  eu = "shrink-0 text-neutral-900/62 dark:text-neutral-100/62 max-sm:hidden",
  eb = es("text-[14px]/[20px] font-medium", ei),
  ep = [{
    at: 0,
    sev: "info",
    text: "Starting run for workspace acme-analytics"
  }, {
    at: .6,
    sev: "info",
    text: "Loaded 3 source connectors"
  }, {
    at: 1.4,
    sev: "info",
    text: "Connector postgres queued 1,284 rows"
  }, {
    at: 2.1,
    sev: "info",
    text: "Connector halcyon queued 642 records"
  }, {
    at: 2.9,
    sev: "info",
    text: "Connector lumendesk queued 318 tickets"
  }, {
    at: 3.7,
    sev: "info",
    text: "Fetching postgres batch 1 of 3"
  }, {
    at: 4.5,
    sev: "info",
    text: "Fetched 512 rows in 0.8s"
  }, {
    at: 5.2,
    sev: "warning",
    text: "Rate limit hit on halcyon, backing off 2s"
  }, {
    at: 7.3,
    sev: "info",
    text: "Resumed halcyon after backoff"
  }, {
    at: 8,
    sev: "info",
    text: "Fetched 642 halcyon records"
  }, {
    at: 8.8,
    sev: "info",
    text: "Transforming records to the canonical schema"
  }, {
    at: 9.6,
    sev: "info",
    text: "Dropped 14 rows that failed validation"
  }, {
    at: 10.4,
    sev: "warning",
    text: "Missing owner on 6 accounts, defaulting to unassigned"
  }, {
    at: 11.2,
    sev: "info",
    text: "Writing batch to the warehouse"
  }, {
    at: 12,
    sev: "error",
    text: "Write to reporting.accounts timed out after 30s"
  }, {
    at: 12.4,
    sev: "info",
    text: "Retrying write with a smaller batch size"
  }, {
    at: 13.9,
    sev: "info",
    text: "Write succeeded on retry"
  }, {
    at: 14.6,
    sev: "info",
    text: "Indexed 2,244 documents"
  }, {
    at: 15.3,
    sev: "info",
    text: "Building embeddings for 318 tickets"
  }, {
    at: 17.1,
    sev: "info",
    text: "Embeddings complete"
  }, {
    at: 17.8,
    sev: "info",
    text: "Refreshing materialised views"
  }, {
    at: 18.5,
    sev: "info",
    text: "View account_health refreshed"
  }, {
    at: 19.2,
    sev: "info",
    text: "View revenue_daily refreshed"
  }, {
    at: 19.9,
    sev: "info",
    text: "Verifying row counts against the sources"
  }, {
    at: 20.6,
    sev: "info",
    text: "Row counts match across 3 connectors"
  }, {
    at: 21.3,
    sev: "info",
    text: "Run complete, 2,244 records processed"
  }],
  eh = [{
    id: "all",
    label: "All",
    short: "All"
  }, {
    id: "info",
    label: "Info",
    short: "Info"
  }, {
    id: "warning",
    label: "Warnings",
    short: "Warn"
  }, {
    id: "error",
    label: "Errors",
    short: "Err"
  }],
  em = {
    info: {
      word: "Info",
      tone: ei
    },
    warning: {
      word: "Warn",
      tone: "text-[oklch(49%_0.1_68)] dark:text-[oklch(80%_0.13_68)]"
    },
    error: {
      word: "Error",
      tone: "text-[oklch(51%_0.18_26)] dark:text-[oklch(76%_0.14_26)]"
    }
  };
function ef(e) {
  let r = Math.floor(e),
    t = Math.floor(r / 60),
    a = Math.round((e - r) * 10);
  return `${t}:${String(r % 60).padStart(2, "0")}.${a}`;
}
function ek({
  sev: e
}) {
  return <span className={es("inline-flex w-[5ch] shrink-0 font-bold", em[e].tone)}>{em[e].word}</span>;
}
let eg = (...e) => e.filter(Boolean).join(" "),
  ev = "text-neutral-900 dark:text-neutral-100",
  ew = "text-neutral-900/62 dark:text-neutral-100/62",
  ej = "text-[14px]/[20px] font-medium",
  eN = eg(ej, ew),
  ey = [{
    worker: "Invoices",
    action: "Reconciling batch 3 of 5",
    state: "running",
    rate: 42,
    progress: .62
  }, {
    worker: "Contacts",
    action: "Merging duplicate records",
    state: "running",
    rate: 18,
    progress: .34
  }, {
    worker: "Documents",
    action: "Waiting to delete 240 archived files",
    state: "approval",
    rate: null,
    progress: null
  }, {
    worker: "Embeddings",
    action: "Indexing 318 support tickets",
    state: "running",
    rate: 96,
    progress: .81
  }, {
    worker: "Metrics",
    action: "Aggregating daily revenue",
    state: "running",
    rate: 63,
    progress: .47
  }, {
    worker: "Exports",
    action: "Waiting for a free slot",
    state: "queued",
    rate: null,
    progress: null
  }],
  eC = {
    running: "Running",
    approval: "Needs approval",
    queued: "Queued"
  };
function ez({
  state: e
}) {
  return "approval" === e ? <span className="inline-flex h-5.5 shrink-0 items-center whitespace-nowrap rounded-[calc(var(--rb-r-full,999px))] bg-white px-2.5 text-[12px]/[16px] font-bold tabular-nums text-neutral-900 dark:text-neutral-100 shadow-[0_0_0_1px_rgb(84_62_32/0.09),0_1px_2px_rgb(84_62_32/0.08)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_0_0_1px_rgb(0_0_0/0.55)] dark:bg-neutral-800">{eC[e]}</span> : <span className={eg("inline-flex items-start gap-1.5 text-[15px]/[20px] font-bold tabular-nums", "text-neutral-900 dark:text-neutral-100", "shrink-0")}>{"running" === e && <span className="flex h-lh shrink-0 items-center"><span aria-hidden="true" className="inline-block size-3 shrink-0 rounded-full border-2 border-current border-t-transparent animate-spin [animation-duration:700ms] motion-reduce:animate-none" /></span>}{eC[e]}</span>;
}
let eM = (...e) => e.filter(Boolean).join(" "),
  eW = "text-neutral-900/78 dark:text-neutral-100/78",
  eE = "text-neutral-900/62 dark:text-neutral-100/62",
  e$ = "divide-y divide-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:divide-neutral-100/7",
  eD = "text-[14px]/[20px] font-medium",
  eI = "text-[15px]/[20px] font-bold",
  eO = "font-mono text-[12px]/[16px] tabular-nums",
  eV = "relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] text-neutral-900 dark:text-neutral-100 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] active:not-disabled:translate-y-px active:not-disabled:shadow-[inset_0_1px_3px_rgb(84_62_32/0.16),0_0_0_1px_rgb(84_62_32/0.10)] dark:active:not-disabled:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14),0_0_0_1px_rgb(84_62_32/0.10)] dark:aria-expanded:bg-neutral-800 dark:aria-expanded:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] disabled:bg-none disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] disabled:text-neutral-900/40 disabled:shadow-none dark:disabled:bg-neutral-800/60 dark:disabled:text-neutral-100/40",
  eq = "h-8 gap-1.5 rounded-[calc(var(--rb-r-full,999px))] px-3.5 text-[14px]/[18px] font-bold",
  eF = "h-10 gap-2 rounded-[calc(var(--rb-r-full,999px))] px-5 text-[15px]/[20px] font-bold",
  eT = "relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] text-neutral-900 dark:text-neutral-100 shadow-[0_0_0_1px_rgb(84_62_32/0.07),0_1px_2px_rgb(84_62_32/0.06),0_8px_22px_-10px_rgb(84_62_32/0.20)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_0_0_1px_rgb(0_0_0/0.6),0_10px_24px_-12px_rgb(0_0_0/0.8)]",
  eB = eM(eD, eE),
  eH = [{
    label: "Trigger",
    value: "Scheduled"
  }, {
    label: "Dataset",
    value: "reporting.ledger",
    mono: !0
  }, {
    label: "Model",
    value: "Atlas Pro"
  }, {
    label: "Started",
    value: "Today at 06:00"
  }, {
    label: "Requested by",
    value: "Automation"
  }],
  eP = [{
    n: 1,
    outcome: "Timed out writing 2,244 rows",
    duration: "12.0s"
  }, {
    n: 2,
    outcome: "Timed out writing 1,536 rows",
    duration: "30.0s"
  }];
function eZ({
  children: e
}) {
  return <h3 className={eM(eI, "mb-2 px-0.5")}>{e}</h3>;
}
let eG = {
    "agent-activity-1": function () {
      let {
          ref: e,
          edges: r,
          onScroll: t
        } = function () {
          let e = (0, React.useRef)(null),
            [r, t] = (0, React.useState)({
              start: !1,
              end: !1
            }),
            a = (0, React.useCallback)(() => {
              let r = e.current;
              if (!r) return;
              let {
                scrollTop: a,
                scrollHeight: n,
                clientHeight: s
              } = r;
              t({
                start: a > 1,
                end: Math.ceil(a + s) < n - 1
              });
            }, []);
          return (0, React.useEffect)(() => {
            a();
            let r = e.current,
              t = r?.ownerDocument.defaultView;
            if (!r || !t?.ResizeObserver) return;
            let n = new t.ResizeObserver(a);
            return n.observe(r), () => n.disconnect();
          }, [a]), {
            ref: e,
            edges: r,
            onScroll: a
          };
        }(),
        [k, g] = (0, React.useState)(0),
        [v, w] = (0, React.useState)(!1),
        j = (0, React.useRef)(null);
      return (0, React.useEffect)(() => {
        if (v) return;
        let e = j.current ?? performance.now();
        j.current = e;
        let r = setInterval(() => {
          g((performance.now() - e) / 1e3);
        }, 100);
        return () => clearInterval(r);
      }, [v]), <div className={c("bg-white dark:bg-neutral-950", d, "relative flex h-full min-h-[560px] w-full flex-col gap-3 overflow-hidden p-4 sm:gap-4 sm:p-6")}><header className="flex shrink-0 items-center gap-3"><div className="min-w-0 flex-1"><h2 className={c("text-[17px]/[22px] font-extrabold", "truncate")}>Reconcile October invoices</h2><div className="mt-0.5 flex items-center gap-3"><span aria-live="polite" className={c("inline-flex items-start gap-1.5 text-[15px]/[20px] font-bold tabular-nums", v ? "text-neutral-900/62 dark:text-neutral-100/62" : "text-neutral-900 dark:text-neutral-100")}>{!v && <span className="flex h-lh shrink-0 items-center"><span aria-hidden="true" className={b} /></span>}{v ? "Stopped" : "Running"}</span><span className={c(p, "tabular-nums")}>{f(m + k)}</span></div></div><button type="button" onClick={() => w(!0)} disabled={v} className={c("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] text-neutral-900 dark:text-neutral-100 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] active:not-disabled:translate-y-px active:not-disabled:shadow-[inset_0_1px_3px_rgb(84_62_32/0.16),0_0_0_1px_rgb(84_62_32/0.10)] dark:active:not-disabled:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14),0_0_0_1px_rgb(84_62_32/0.10)] dark:aria-expanded:bg-neutral-800 dark:aria-expanded:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] disabled:bg-none disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] disabled:text-neutral-900/40 disabled:shadow-none dark:disabled:bg-neutral-800/60 dark:disabled:text-neutral-100/40", "h-10 gap-2 rounded-[calc(var(--rb-r-full,999px))] px-5 text-[15px]/[20px] font-bold")}><__mod_22728.n icon={__mod_63163.A} size={18} strokeWidth={2} aria-hidden="true" />Stop</button></header><div className={c("relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 shadow-[inset_0_0_0_1px_rgb(84_62_32/0.05)] dark:shadow-[inset_0_0_0_1px_rgb(255_255_255/0.05)]", "min-h-0 flex-1")}><div className={c("mx-1 mb-1 flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-5xl,22px))] border border-transparent bg-white dark:bg-neutral-950 shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] [&:has(+*)]:mb-0", "relative mt-1 min-h-0 flex-1")}><div ref={e} onScroll={t} className="h-full overflow-y-auto overscroll-contain py-1"><ol>{h.map((e, r) => {
                  let t = "running" === e.state && !v,
                    n = "running" === e.state && v;
                  return <li className="flex h-9 items-center gap-3 px-3"><span className="flex size-[18px] shrink-0 items-center justify-center">{"done" === e.state ? <__mod_22728.n icon={__mod_90987.A} size={14} strokeWidth={2} aria-hidden="true" className={x} /> : t ? <span aria-hidden="true" className={c(b, _)} /> : n ? <__mod_22728.n icon={__mod_99199.A} size={14} strokeWidth={2} aria-hidden="true" className={x} /> : null}</span><span className={c(u, "min-w-0 flex-1 truncate", "done" === e.state && _, t && d, (n || "queued" === e.state) && x)}>{e.label}</span><span className={c("shrink-0 text-[14px]/[20px] font-semibold tabular-nums text-neutral-900/62 dark:text-neutral-100/62", "w-16 text-right")}>{"done" === e.state ? f(e.seconds ?? 0) : t ? f(k) : n ? "Stopped" : null}</span></li>;
                })}</ol></div><div aria-hidden="true" className={c("bg-linear-to-b from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 top-0 h-8", r.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={c("bg-linear-to-t from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 bottom-0 h-8", r.end ? "opacity-100" : "opacity-0")} /></div></div></div>;
    },
    "agent-activity-2": function () {
      let {
          ref: e,
          edges: r,
          onScroll: t
        } = function () {
          let e = (0, React.useRef)(null),
            [r, t] = (0, React.useState)({
              start: !1,
              end: !1
            }),
            a = (0, React.useCallback)(() => {
              let r = e.current;
              if (!r) return;
              let {
                scrollTop: a,
                scrollHeight: n,
                clientHeight: s
              } = r;
              t({
                start: a > 1,
                end: Math.ceil(a + s) < n - 1
              });
            }, []);
          return (0, React.useEffect)(() => {
            a();
            let r = e.current,
              t = r?.ownerDocument.defaultView;
            if (!r || !t?.ResizeObserver) return;
            let n = new t.ResizeObserver(a);
            return n.observe(r), () => n.disconnect();
          }, [a]), {
            ref: e,
            edges: r,
            onScroll: a
          };
        }(),
        [l, i] = (0, React.useState)({
          0: !0,
          1: !0,
          2: !0
        });
      return <div className={g("bg-white dark:bg-neutral-950", "text-neutral-900 dark:text-neutral-100", "relative flex h-full min-h-[600px] w-full flex-col gap-3 overflow-hidden p-4 sm:gap-4 sm:p-6")}><header className="flex shrink-0 items-center gap-3"><div className="min-w-0 flex-1"><h2 className={g("text-[17px]/[22px] font-extrabold", "truncate")}>Weekly warehouse export</h2><div className="mt-0.5 flex items-center gap-1.5"><span className={g("inline-flex items-start gap-1.5 text-[15px]/[20px] font-bold tabular-nums", "text-neutral-900/78 dark:text-neutral-100/78")}>Succeeded</span></div></div><span className={g(N, "shrink-0 tabular-nums")}>{S(z)}</span></header><div className={g("relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 shadow-[inset_0_0_0_1px_rgb(84_62_32/0.05)] dark:shadow-[inset_0_0_0_1px_rgb(255_255_255/0.05)]", "min-h-0 flex-1")}><div className={g("mx-1 mb-1 flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-5xl,22px))] border border-transparent bg-white dark:bg-neutral-950 shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] [&:has(+*)]:mb-0", "relative mt-1 min-h-0 flex-1")}><div ref={e} onScroll={t} className="h-full overflow-y-auto overscroll-contain"><ol className={g("divide-y divide-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:divide-neutral-100/7", "flex flex-col")}>{y.map((e, r) => {
                  let t = !!l[r];
                  return <li><div className="p-1"><button type="button" onClick={() => i(e => ({
                        ...e,
                        [r]: !e[r]
                      }))} aria-expanded={t} className={g("relative flex min-h-10 w-full min-w-0 flex-wrap items-center gap-x-3 gap-y-1 py-2 text-left text-neutral-900 dark:text-neutral-100 transition-[background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)]", "cursor-pointer hover:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] dark:hover:bg-neutral-100/6 active:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] dark:active:bg-neutral-100/10", "rounded-[var(--rb-r-4xl,18px)]", "focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))]", "group h-8 px-2")}><span className="flex size-[18px] shrink-0 items-center justify-center"><__mod_22728.n icon={__mod_90987.A} size={14} strokeWidth={2} aria-hidden="true" className={v} /></span><span className={g("text-[15px]/[20px] font-bold", "min-w-0 flex-1 truncate")}>{e.label}</span><span className={g(j, "w-12 text-right")}>{S(e.seconds)}</span><__mod_22728.n icon={__mod_5042.A} size={14} strokeWidth={2} aria-hidden="true" className="shrink-0 text-neutral-900/62 dark:text-neutral-100/62 transition-transform duration-[280ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] motion-reduce:transition-none group-aria-expanded:rotate-90" /></button></div>{t && <ul className="pb-1.5 pl-10 pr-9">{e.subSteps.map((e, r) => <li className="flex h-8 items-center gap-3"><span className={g(w, "text-neutral-900/78 dark:text-neutral-100/78", "min-w-0 flex-1 truncate")}>{e.label}</span><span aria-hidden="true" className="hidden w-24 shrink-0 sm:block"><span className="relative block h-2.5 w-full overflow-hidden rounded-[calc(var(--rb-r-full,999px))] bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] shadow-[inset_0_1px_2px_rgb(84_62_32/0.12)] dark:bg-neutral-100/12 dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.5)]"><span className="block h-full rounded-[calc(var(--rb-r-full,999px))] bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_82%,black)] shadow-[inset_0_1px_0_rgb(255_255_255/0.35)] transition-[width] duration-[420ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] motion-reduce:transition-none dark:bg-[var(--rb-accent,oklch(81%_0.16_163))]" style={{
                              width: `${e.seconds / C * 100}%`
                            }} /></span></span><span className={g(j, "w-12 text-right")}>{S(e.seconds)}</span></li>)}</ul>}</li>;
                })}</ol></div><div aria-hidden="true" className={g("bg-linear-to-b from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 top-0 h-8", r.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={g("bg-linear-to-t from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 bottom-0 h-8", r.end ? "opacity-100" : "opacity-0")} /></div></div></div>;
    },
    "agent-activity-3": function () {
      let {
          ref: e,
          edges: r,
          onScroll: t
        } = function () {
          let e = (0, React.useRef)(null),
            [r, t] = (0, React.useState)({
              start: !1,
              end: !1
            }),
            a = (0, React.useCallback)(() => {
              let r = e.current;
              if (!r) return;
              let {
                scrollTop: a,
                scrollHeight: n,
                clientHeight: s
              } = r;
              t({
                start: a > 1,
                end: Math.ceil(a + s) < n - 1
              });
            }, []);
          return (0, React.useEffect)(() => {
            a();
            let r = e.current,
              t = r?.ownerDocument.defaultView;
            if (!r || !t?.ResizeObserver) return;
            let n = new t.ResizeObserver(a);
            return n.observe(r), () => n.disconnect();
          }, [a]), {
            ref: e,
            edges: r,
            onScroll: a
          };
        }(),
        [c, d] = (0, React.useState)(0),
        [_, x] = (0, React.useState)(!1),
        u = (0, React.useRef)(null),
        b = c >= F,
        p = _ || b;
      (0, React.useEffect)(() => {
        if (p) return;
        let e = performance.now();
        u.current = e;
        let r = setInterval(() => {
          d(Math.min(F, (performance.now() - e) / 1e3));
        }, 100);
        return () => clearInterval(r);
      }, [p]);
      let h = 0,
        m = q.length;
      for (let e = 0; e < q.length; e++) {
        if (c < h + q[e].seconds) {
          m = e;
          break;
        }
        h += q[e].seconds;
      }
      return <div className={A("bg-white dark:bg-neutral-950", L, "relative flex h-full min-h-[480px] w-full flex-col gap-3 overflow-hidden p-4 sm:gap-4 sm:p-6")}><header className="flex shrink-0 items-center gap-3"><div className="min-w-0 flex-1"><h2 className={A("text-[17px]/[22px] font-extrabold", "truncate")}>Deploy checkout-api</h2><div aria-live="polite" className="mt-0.5 flex items-center gap-1.5"><span className={A("inline-flex items-start gap-1.5 text-[15px]/[20px] font-bold tabular-nums", _ ? "text-neutral-900/62 dark:text-neutral-100/62" : b ? "text-neutral-900/78 dark:text-neutral-100/78" : "text-neutral-900 dark:text-neutral-100", "w-20")}>{!p && <span className="flex h-lh shrink-0 items-center"><span aria-hidden="true" className={I} /></span>}{_ ? "Stopped" : b ? "Succeeded" : "Running"}</span></div></div><span className={A(V, "shrink-0 tabular-nums")}>{m >= q.length ? q.length : m + 1} of {q.length}</span></header><div className={A("relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 shadow-[inset_0_0_0_1px_rgb(84_62_32/0.05)] dark:shadow-[inset_0_0_0_1px_rgb(255_255_255/0.05)]", "min-h-0 flex-1 gap-1")}><div className={A(O, "relative mt-1 min-h-0 flex-1")}><div ref={e} onScroll={t} className="h-full overflow-y-auto overscroll-contain py-1"><ol>{q.map((e, r) => {
                  let t = r < m,
                    n = r === m && !p,
                    l = r === m && _;
                  return <li className="flex h-9 items-center gap-3 px-3"><span className="flex size-[18px] shrink-0 items-center justify-center">{t ? <__mod_22728.n icon={__mod_90987.A} size={14} strokeWidth={2} aria-hidden="true" className={W} /> : n ? <span aria-hidden="true" className={A(I, M)} /> : l ? <__mod_22728.n icon={__mod_99199.A} size={14} strokeWidth={2} aria-hidden="true" className={W} /> : null}</span><span className={A(E, "min-w-0 flex-1 truncate", n ? L : t ? M : W)}>{e.label}</span><span className={A(V, "w-20 shrink-0 text-right")}>{t ? "Done" : n ? "Running" : l ? "Stopped" : "Queued"}</span></li>;
                })}</ol></div><div aria-hidden="true" className={A("bg-linear-to-b from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 top-0 h-8", r.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={A("bg-linear-to-t from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 bottom-0 h-8", r.end ? "opacity-100" : "opacity-0")} /></div><div className={A(O, "shrink-0 pt-3 pe-2.5 pb-2.5 ps-3")}><div aria-hidden="true" className="pe-0.5"><div className="relative block h-2.5 w-full overflow-hidden rounded-[calc(var(--rb-r-full,999px))] bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] shadow-[inset_0_1px_2px_rgb(84_62_32/0.12)] dark:bg-neutral-100/12 dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.5)]"><div className="block h-full rounded-[calc(var(--rb-r-full,999px))] bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_82%,black)] shadow-[inset_0_1px_0_rgb(255_255_255/0.35)] transition-[width] duration-[420ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] motion-reduce:transition-none dark:bg-[var(--rb-accent,oklch(81%_0.16_163))]" style={{
                  width: `${Math.round(c / F * 100)}%`
                }} /></div></div><div className="mt-2 flex items-center gap-3"><span className={A("text-[13px]/[16px] font-semibold tabular-nums", W, "min-w-0 flex-1 truncate")}><span className="tabular-nums">{T(c)}</span><span aria-hidden="true"> / </span><span className="tabular-nums">{T(F)}</span></span>{p ? <button type="button" onClick={() => {
                d(0), x(!1), u.current = null;
              }} className={A($, D)}><__mod_22728.n icon={__mod_59157.A} size={18} strokeWidth={2} aria-hidden="true" />Run again</button> : <button type="button" onClick={() => x(!0)} className={A($, D)}><__mod_22728.n icon={__mod_63163.A} size={18} strokeWidth={2} aria-hidden="true" />Stop</button>}</div></div></div></div>;
    },
    "agent-activity-4": function () {
      let {
        ref: e,
        edges: r,
        onScroll: t
      } = function () {
        let e = (0, React.useRef)(null),
          [r, t] = (0, React.useState)({
            start: !1,
            end: !1
          }),
          a = (0, React.useCallback)(() => {
            let r = e.current;
            if (!r) return;
            let {
              scrollTop: a,
              scrollHeight: n,
              clientHeight: s
            } = r;
            t({
              start: a > 1,
              end: Math.ceil(a + s) < n - 1
            });
          }, []);
        return (0, React.useEffect)(() => {
          a();
          let r = e.current,
            t = r?.ownerDocument.defaultView;
          if (!r || !t?.ResizeObserver) return;
          let n = new t.ResizeObserver(a);
          return n.observe(r), () => n.disconnect();
        }, [a]), {
          ref: e,
          edges: r,
          onScroll: a
        };
      }();
      return <div className={B("bg-white dark:bg-neutral-950", "text-neutral-900 dark:text-neutral-100", "relative flex h-full min-h-[700px] w-full flex-col gap-3 overflow-hidden p-4 sm:gap-4 sm:p-6")}><div className="flex shrink-0 items-baseline gap-2"><h2 className="text-[17px]/[22px] font-extrabold">Run history</h2><span className={B(Y, "tabular-nums")}>{J.length} runs</span></div><div className={B("relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 shadow-[inset_0_0_0_1px_rgb(84_62_32/0.05)] dark:shadow-[inset_0_0_0_1px_rgb(255_255_255/0.05)]", "min-h-0 flex-1")}><div className={B("mx-1 mb-1 flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-5xl,22px))] border border-transparent bg-white dark:bg-neutral-950 shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] [&:has(+*)]:mb-0", "relative mt-1 min-h-0 flex-1")}><div ref={e} onScroll={t} className="h-full overflow-y-auto overscroll-contain"><ul className={B("divide-y divide-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:divide-neutral-100/7", "flex flex-col md:hidden")}>{J.map((e, r) => <li className={B("relative flex min-h-12 w-full min-w-0 flex-wrap items-center gap-x-3 gap-y-1 py-2.5 text-left text-neutral-900 dark:text-neutral-100 transition-[background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] has-[[data-description]]:min-h-16", "failed" === e.status && "bg-[oklch(95.5%_0.03_26/0.55)] hover:bg-[oklch(95.5%_0.03_26/0.8)] dark:bg-[oklch(30%_0.065_26/0.4)] dark:hover:bg-[oklch(30%_0.065_26/0.6)]", "px-3")}><div className="flex min-w-0 flex-1 flex-col gap-0.5"><span className="flex max-w-full min-w-0 items-baseline gap-2 text-[15px]/[20px] font-bold text-neutral-900 dark:text-neutral-100">{e.name}</span><dl data-description={!0} className={B(Y, "flex flex-wrap items-baseline gap-x-3 gap-y-1")}><div className="flex items-baseline gap-1.5"><dt className="sr-only">Status</dt><dd><er status={e.status} /></dd></div><div className="flex items-baseline gap-1"><dt>Duration</dt><dd className={B(H, "tabular-nums")}>{e.duration}</dd></div>{e.cost && <div className="flex items-baseline gap-1"><dt>Cost</dt><dd className={B(H, "tabular-nums")}>{e.cost}</dd></div>}<div className="flex items-baseline gap-1"><dt>Started</dt><dd className="tabular-nums">{e.started}</dd></div></dl></div><div className="relative z-10 flex shrink-0 items-center gap-1"><button type="button" aria-label={`Re-run ${e.name}`} className={B(Z, G)}><__mod_22728.n icon={__mod_59157.A} size={18} strokeWidth={2} aria-hidden="true" /></button></div></li>)}</ul><table className={B("w-full border-separate border-spacing-0 text-left text-[15px]/[22px] font-medium", "hidden table-fixed md:table")}><caption className="sr-only">Run history, newest first. Fourteen agent runs with status, duration, cost and start time.</caption><thead><tr className={B("bg-white dark:bg-neutral-950", "sticky top-0 z-20 h-9")}><th scope="col" className={B(K, "w-[36%]")}>Run</th><th scope="col" className={B(K, "w-[15%]")}>Status</th><th scope="col" className={B(K, "w-[13%] text-right")}>Duration</th><th scope="col" className={B(K, "w-[12%] text-right")}>Cost</th><th scope="col" className={B(K, "w-[16%] text-right")}>Started</th><th scope="col" className={B(K, "w-[8%]")}><span className="sr-only">Actions</span></th></tr></thead><tbody>{J.map((e, r) => <tr className={B("failed" === e.status ? "group transition-[background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] bg-[oklch(95.5%_0.03_26/0.55)] hover:bg-[oklch(95.5%_0.03_26/0.8)] dark:bg-[oklch(30%_0.065_26/0.4)] dark:hover:bg-[oklch(30%_0.065_26/0.6)]" : "group transition-[background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:not-aria-selected:bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] dark:hover:not-aria-selected:bg-neutral-100/4 dark:aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)]", "h-11")}><td className={Q}><span className="block truncate">{e.name}</span></td><td className={Q}><er status={e.status} /></td><td className={B(Q, U)}><span className={H}>{e.duration}</span></td><td className={B(Q, U)}>{e.cost && <span className={H}>{e.cost}</span>}</td><td className={B(Q, U)}><span className={P}>{e.started}</span></td><td className={Q}><div className="flex items-center justify-end gap-0.5 md:opacity-0 md:group-hover:opacity-100 md:group-focus-within:opacity-100 transition-opacity duration-[180ms]"><button type="button" aria-label={`Re-run ${e.name}`} className={B(Z, G)}><__mod_22728.n icon={__mod_59157.A} size={18} strokeWidth={2} aria-hidden="true" /></button></div></td></tr>)}</tbody></table></div><div aria-hidden="true" className={B("bg-linear-to-t from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 bottom-0 h-8", r.end ? "opacity-100" : "opacity-0")} /></div></div></div>;
    },
    "agent-activity-5": function () {
      let e = (0, __mod_50969.I)(),
        {
          text: r,
          done: t,
          push: c,
          end: d,
          reset: _
        } = function () {
          let [e, r] = (0, React.useState)(""),
            [t, a] = (0, React.useState)(!1),
            s = (0, React.useRef)(""),
            l = (0, React.useRef)(0),
            o = (0, React.useRef)(!1),
            i = (0, __mod_50969.I)();
          return (0, React.useEffect)(() => {
            let e = 0,
              t = performance.now(),
              n = c => {
                let d = Math.min(c - t, 64);
                t = c;
                let _ = s.current,
                  x = _.length - l.current;
                if (x > 0) {
                  l.current = i ? _.length : Math.min(_.length, l.current + x * (1 - Math.exp(-d / 180)) + 55 * d / 1e3);
                  let e = Math.floor(l.current),
                    t = o.current && e >= _.length,
                    n = t ? _.length : function (e, r) {
                      if (r >= e.length) return e.length;
                      let t = e.lastIndexOf(" ", r);
                      return -1 === t ? 0 : t;
                    }(_, e);
                  r(_.slice(0, n)), t && a(!0);
                }
                e = requestAnimationFrame(n);
              };
            return e = requestAnimationFrame(n), () => cancelAnimationFrame(e);
          }, [i]), {
            text: e,
            done: t,
            push: (0, React.useCallback)(e => {
              s.current += e;
            }, []),
            end: (0, React.useCallback)(() => {
              o.current = !0;
            }, []),
            reset: (0, React.useCallback)(() => {
              s.current = "", l.current = 0, o.current = !1, r(""), a(!1);
            }, [])
          };
        }(),
        [x, u] = (0, React.useState)(() => Array.from({
          length: 22
        }, (e, r) => r)),
        [b, p] = (0, React.useState)(22),
        [h, m] = (0, React.useState)(!1),
        [f, k] = (0, React.useState)("all"),
        g = (0, React.useRef)([]),
        {
          ref: v,
          edges: w,
          onScroll: j
        } = function () {
          let e = (0, React.useRef)(null),
            [r, t] = (0, React.useState)({
              start: !1,
              end: !1
            }),
            a = (0, React.useCallback)(() => {
              let r = e.current;
              if (!r) return;
              let {
                scrollTop: a,
                scrollHeight: n,
                clientHeight: s
              } = r;
              t({
                start: a > 1,
                end: Math.ceil(a + s) < n - 1
              });
            }, []);
          return (0, React.useEffect)(() => {
            a();
            let r = e.current,
              t = r?.ownerDocument.defaultView;
            if (!r || !t?.ResizeObserver) return;
            let n = new t.ResizeObserver(a);
            return n.observe(r), () => n.disconnect();
          }, [a]), {
            ref: e,
            edges: r,
            onScroll: a
          };
        }(),
        N = (0, React.useRef)(!0),
        [y, C] = (0, React.useState)(!1),
        z = b >= ep.length || h;
      (0, React.useEffect)(() => {
        b >= ep.length || h || (_(), c(ep[b].text), d());
      }, [b, h, _, c, d]), (0, React.useEffect)(() => {
        if (!t || b >= ep.length || h) return;
        let e = setTimeout(() => {
          _(), u(e => e.includes(b) ? e : [...e, b]), p(e => e + 1);
        }, 260);
        return () => clearTimeout(e);
      }, [t, b, h, _]), (0, React.useEffect)(() => {
        let e = v.current,
          r = e?.ownerDocument.defaultView;
        if (!e || !r) return;
        let t = () => {
            let r = e.scrollHeight - e.clientHeight > 1,
              t = e.scrollHeight - e.scrollTop - e.clientHeight,
              a = !r || t < 24;
            N.current = a, C(r && !a);
          },
          a = r => {
            (!("deltaY" in r) || r.deltaY < 0) && e.scrollHeight - e.clientHeight > 1 && e.scrollTop > 0 && (N.current = !1);
          },
          n = new r.ResizeObserver(() => {
            N.current && (e.scrollTop = e.scrollHeight), t();
          });
        return n.observe(e), e.firstElementChild && n.observe(e.firstElementChild), e.addEventListener("wheel", a, {
          passive: !0
        }), e.addEventListener("touchmove", a, {
          passive: !0
        }), e.addEventListener("scroll", t, {
          passive: !0
        }), e.scrollTop = e.scrollHeight, t(), () => {
          n.disconnect(), e.removeEventListener("wheel", a), e.removeEventListener("touchmove", a), e.removeEventListener("scroll", t);
        };
      }, [v]);
      let S = x.filter(e => "all" === f || ep[e].sev === f),
        R = z || "all" !== f && ep[b]?.sev !== f ? null : ep[b];
      return <div className={es("bg-white dark:bg-neutral-950", el, "relative flex h-full min-h-[700px] w-full flex-col gap-3 overflow-hidden p-4 sm:gap-4 sm:p-6")}><div className="flex shrink-0 flex-wrap items-center gap-x-3 gap-y-2 sm:flex-nowrap"><div className="order-1 flex min-w-0 items-center gap-2"><span className="flex size-[18px] shrink-0 items-center justify-center">{z ? <__mod_22728.n icon={h ? __mod_99199.A : __mod_90987.A} size={14} strokeWidth={2} aria-hidden="true" className={ei} /> : <span aria-hidden="true" className="inline-block size-3 shrink-0 rounded-full border-2 border-current border-t-transparent animate-spin [animation-duration:700ms] motion-reduce:animate-none" />}<span className="sr-only">{h ? "Stopped" : z ? "Done" : "Running"}</span></span><h2 className={es("text-[17px]/[22px] font-extrabold", "truncate")}>Run log</h2></div><div className="order-3 flex w-full sm:order-2 sm:ml-auto sm:w-auto"><div role="radiogroup" aria-label="Filter log by severity" onKeyDown={e => {
              let r = eh.findIndex(e => e.id === f),
                t = -1;
              "ArrowRight" === e.key || "ArrowDown" === e.key ? t = (r + 1) % eh.length : "ArrowLeft" === e.key || "ArrowUp" === e.key ? t = (r - 1 + eh.length) % eh.length : "Home" === e.key ? t = 0 : "End" === e.key && (t = eh.length - 1), -1 !== t && (e.preventDefault(), k(eh[t].id), g.current[t]?.focus({
                preventScroll: !0
              }));
            }} className={es("inline-flex w-fit max-w-full items-stretch gap-1 rounded-[calc(var(--rb-r-full,999px)_+_min(4px,var(--rb-r-full,999px)))] bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] p-1", "h-10", "flex-1")}>{eh.map((e, r) => {
                let t = f === e.id;
                return <button type="button" ref={e => {
                  g.current[r] = e;
                }} role="radio" aria-checked={t} tabIndex={t ? 0 : -1} onClick={() => k(e.id)} className={es("relative inline-flex min-w-0 cursor-pointer items-center justify-center gap-1.5 whitespace-nowrap [&_svg]:shrink-0 rounded-[calc(var(--rb-r-full,999px))] px-4 text-[14px]/[18px] font-bold text-neutral-900/78 dark:text-neutral-100/78 select-none transition-[background-color,color,box-shadow,outline-color,scale] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:scale-[0.96] motion-reduce:active:scale-100 hover:not-aria-checked:text-neutral-900 aria-checked:bg-white aria-checked:text-neutral-900 aria-checked:shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_2px_rgb(84_62_32/0.10),0_3px_8px_-2px_rgb(84_62_32/0.20)] disabled:cursor-not-allowed disabled:text-neutral-900/40 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:hover:not-aria-checked:text-neutral-100 dark:aria-checked:bg-[color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800))] dark:aria-checked:text-neutral-100 dark:aria-checked:shadow-[inset_0_1px_0_rgb(255_255_255/0.1),0_0_0_1px_rgb(0_0_0/0.6),0_2px_5px_-1px_rgb(0_0_0/0.6)] dark:disabled:text-neutral-100/40", "flex-1 sm:flex-none")}><span className="sm:hidden">{e.short}</span><span className="hidden sm:inline">{e.label}</span></button>;
              })}</div></div><div className="order-2 ml-auto flex w-[76px] shrink-0 justify-end sm:order-3 sm:ml-0 sm:w-[86px]">{z ? <span className={es(eb, "truncate tabular-nums")}>{x.length} lines</span> : <><span className="contents sm:hidden"><button type="button" aria-label="Stop" onClick={() => m(!0)} className={es(ed, "size-10 rounded-[calc(var(--rb-r-full,999px))]")}><__mod_22728.n icon={__mod_63163.A} size={18} strokeWidth={2} aria-hidden="true" /></button></span><span className="hidden sm:contents"><button type="button" onClick={() => m(!0)} className={es(ed, e_)}><__mod_22728.n icon={__mod_63163.A} size={18} strokeWidth={2} aria-hidden="true" />Stop</button></span></>}</div></div><div className={es("relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 shadow-[inset_0_0_0_1px_rgb(84_62_32/0.05)] dark:shadow-[inset_0_0_0_1px_rgb(255_255_255/0.05)]", "min-h-0 flex-1")}><div className={es("mx-1 mb-1 flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-5xl,22px))] border border-transparent bg-white dark:bg-neutral-950 shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] [&:has(+*)]:mb-0", "relative mt-1 min-h-0 flex-1")}><div ref={v} onScroll={j} className="h-full overflow-y-auto overscroll-contain py-3 [overflow-anchor:none]"><ol>{0 === S.length && !R && <li className="mt-2 p-4 text-center"><p className={es("max-w-[48ch] text-[15px]/[22px] font-medium text-neutral-900/78 dark:text-neutral-100/78", "mx-auto")}>No {f} entries in this run.</p><button type="button" onClick={() => k("all")} className={es(ed, e_, "mt-3")}>Clear filter</button></li>}{S.map(e => <li className={es(ex, "error" === ep[e].sev && ec, "py-0.5")}><span className={eu}>{ef(ep[e].at)}</span><ek sev={ep[e].sev} /><span className={es("min-w-0 flex-1", "error" === ep[e].sev ? el : eo)}>{ep[e].text}</span></li>)}{R && <li className={es(ex, "error" === R.sev && ec, "py-0.5")}><span className={eu}>{ef(R.at)}</span><ek sev={R.sev} /><span className={es("min-w-0 flex-1", "error" === R.sev ? el : eo)}>{r}</span></li>}</ol></div><div aria-hidden="true" className={es("bg-linear-to-b from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 top-0 h-8", w.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={es("bg-linear-to-t from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 bottom-0 h-8", w.end ? "opacity-100" : "opacity-0")} />{y && <div className="absolute bottom-4 left-1/2 -translate-x-1/2"><motion.button type="button" onClick={() => {
                let e = v.current;
                e && (N.current = !0, C(!1), e.scrollTop = e.scrollHeight);
              }} initial={!e && {
                opacity: 0
              }} animate={{
                opacity: 1
              }} transition={{
                duration: .16,
                ease: [.2, 0, 0, 1]
              }} className={es(ed, e_)}><__mod_22728.n icon={__mod_54345.A} size={18} strokeWidth={2} aria-hidden="true" />Jump to latest</motion.button></div>}</div></div></div>;
    },
    "agent-activity-6": function () {
      let e = (0, __mod_50969.I)(),
        [r, t] = (0, React.useState)(0),
        {
          ref: s,
          edges: l,
          onScroll: o
        } = function () {
          let e = (0, React.useRef)(null),
            [r, t] = (0, React.useState)({
              start: !1,
              end: !1
            }),
            a = (0, React.useCallback)(() => {
              let r = e.current;
              if (!r) return;
              let {
                scrollTop: a,
                scrollHeight: n,
                clientHeight: s
              } = r;
              t({
                start: a > 1,
                end: Math.ceil(a + s) < n - 1
              });
            }, []);
          return (0, React.useEffect)(() => {
            a();
            let r = e.current,
              t = r?.ownerDocument.defaultView;
            if (!r || !t?.ResizeObserver) return;
            let n = new t.ResizeObserver(a);
            return n.observe(r), () => n.disconnect();
          }, [a]), {
            ref: e,
            edges: r,
            onScroll: a
          };
        }();
      (0, React.useEffect)(() => {
        if (e) return;
        let r = setInterval(() => t(e => e + 1), 900);
        return () => clearInterval(r);
      }, [e]);
      let i = ey.filter(e => "running" === e.state).length;
      return <div className={eg("bg-white dark:bg-neutral-950", ev, "relative flex h-full min-h-[600px] w-full flex-col gap-3 overflow-hidden p-4 sm:gap-4 sm:p-6")}><header className="flex shrink-0 items-center gap-3"><h2 className={eg("text-[17px]/[22px] font-extrabold", "min-w-0 flex-1 truncate")}>Import workers</h2><div className={eg(eN, "flex shrink-0 items-center gap-4")}><span><span className={eg(ev, "tabular-nums")}>{i}</span> active</span><span><span className={eg(ev, "tabular-nums")}>18</span> queued</span></div></header><div className={eg("relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 shadow-[inset_0_0_0_1px_rgb(84_62_32/0.05)] dark:shadow-[inset_0_0_0_1px_rgb(255_255_255/0.05)]", "min-h-0 flex-1")}><div className={eg("mx-1 mb-1 flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-5xl,22px))] border border-transparent bg-white dark:bg-neutral-950 shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] [&:has(+*)]:mb-0", "relative mt-1 min-h-0 flex-1")}><ul ref={s} onScroll={o} className={eg("divide-y divide-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:divide-neutral-100/7", "flex h-full flex-col overflow-y-auto overscroll-contain")}>{ey.map((t, n) => {
                let s = "running" === t.state && null != t.progress ? Math.min(.98, t.progress + (e ? 0 : .004 * r)) : t.progress;
                return <li className="shrink-0 p-1"><div className={eg("hover:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] dark:hover:bg-neutral-100/6", "rounded-[var(--rb-r-4xl,18px)]", "transition-[color,background-color,border-color,box-shadow,outline-color,opacity,scale,translate] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms]", "px-2 py-2")}><div className="flex items-center gap-3"><span className={eg("text-[15px]/[20px] font-bold", "min-w-0 flex-1 truncate")}>{t.worker}</span><span className={eg(ej, "shrink-0 text-right tabular-nums")}>{null != t.rate && <>{t.rate}<span className={ew}>/min</span></>}</span></div><div className="mt-1.5 flex items-center gap-2"><span className={eg(ej, "line-clamp-2 min-w-0 flex-1", "approval" === t.state ? "text-neutral-900/78 dark:text-neutral-100/78" : ew)}>{t.action}</span><ez state={t.state} /></div>{null != s && <div aria-hidden="true" className={eg("relative block h-2.5 w-full overflow-hidden rounded-[calc(var(--rb-r-full,999px))] bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] shadow-[inset_0_1px_2px_rgb(84_62_32/0.12)] dark:bg-neutral-100/12 dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.5)]", "mt-2")}><div className="block h-full rounded-[calc(var(--rb-r-full,999px))] bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_82%,black)] shadow-[inset_0_1px_0_rgb(255_255_255/0.35)] transition-[width] duration-[420ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] motion-reduce:transition-none dark:bg-[var(--rb-accent,oklch(81%_0.16_163))]" style={{
                        width: `${100 * s}%`
                      }} /></div>}</div></li>;
              })}</ul><div aria-hidden="true" className={eg("bg-linear-to-b from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 top-0 h-8", l.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={eg("bg-linear-to-t from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 bottom-0 h-8", l.end ? "opacity-100" : "opacity-0")} /></div></div></div>;
    },
    "agent-activity-7": function () {
      let {
          ref: e,
          edges: r,
          onScroll: t
        } = function () {
          let e = (0, React.useRef)(null),
            [r, t] = (0, React.useState)({
              start: !1,
              end: !1
            }),
            a = (0, React.useCallback)(() => {
              let r = e.current;
              if (!r) return;
              let {
                scrollTop: a,
                scrollHeight: n,
                clientHeight: s
              } = r;
              t({
                start: a > 1,
                end: Math.ceil(a + s) < n - 1
              });
            }, []);
          return (0, React.useEffect)(() => {
            a();
            let r = e.current,
              t = r?.ownerDocument.defaultView;
            if (!r || !t?.ResizeObserver) return;
            let n = new t.ResizeObserver(a);
            return n.observe(r), () => n.disconnect();
          }, [a]), {
            ref: e,
            edges: r,
            onScroll: a
          };
        }(),
        [l, o] = (0, React.useState)(!1);
      return <div className={eM("bg-white dark:bg-neutral-950", "text-neutral-900 dark:text-neutral-100", "relative flex h-full min-h-[700px] w-full flex-col gap-3 overflow-hidden p-4 sm:gap-4 sm:p-6")}><header className="flex shrink-0 items-center gap-3"><div className="min-w-0 flex-1"><h2 className={eM("text-[17px]/[22px] font-extrabold", "truncate")}>Export October ledger</h2><div className="mt-0.5 flex items-center gap-3"><span className={eM("inline-flex items-start gap-1.5 text-[15px]/[20px] font-bold tabular-nums", "text-[oklch(51%_0.18_26)] dark:text-[oklch(76%_0.14_26)]")}>Failed</span><span className={eM(eB, "tabular-nums")}>42.1s</span></div></div><button type="button" className={eM(eV, eF)}>View log</button></header><div className="relative -mx-1 min-h-0 flex-1"><div ref={e} onScroll={t} className="h-full overflow-y-auto overscroll-contain px-1"><div className="space-y-4 pb-2"><div role={l ? void 0 : "alert"} aria-live={l ? "polite" : void 0} className="relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 shadow-[inset_0_0_0_1px_rgb(84_62_32/0.05)] dark:shadow-[inset_0_0_0_1px_rgb(255_255_255/0.05)]"><div className={eM("mx-1 mb-1 flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-5xl,22px))] border border-transparent bg-white dark:bg-neutral-950 shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] [&:has(+*)]:mb-0", "mt-1 p-3")}><div className="flex items-center gap-2"><__mod_22728.n icon={l ? __mod_46772.A : __mod_42734.A} size={18} strokeWidth={2} aria-hidden="true" className={eM(l ? eW : "text-[oklch(51%_0.18_26)] dark:text-[oklch(76%_0.14_26)]", "shrink-0")} /><span className="text-[15px]/[22px] font-extrabold">{l ? "Retry queued" : "Warehouse write timed out"}</span></div><p className={eM("text-[14px]/[20px] font-medium text-neutral-900/78 dark:text-neutral-100/78", "mt-1")}>{l ? "Attempt 3 starts off-peak at 22:00 with a 512-row batch size." : "Two attempts exceeded the 30s write limit. Retry off-peak or lower the batch size before running again."}</p></div><div className="flex min-h-12 min-w-0 items-center gap-2 px-4 py-2 text-[14px]/[20px] font-semibold text-neutral-900/62 dark:text-neutral-100/62 has-[button]:justify-end has-[button]:pe-2.5">{l ? <button type="button" onClick={() => o(!1)} className={eM(eV, eq)}><__mod_22728.n icon={__mod_89289.A} size={18} strokeWidth={2} aria-hidden="true" />Cancel retry</button> : <button type="button" onClick={() => o(!0)} className={eM("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_68%,white),var(--rb-accent,oklch(84%_0.15_165)))] text-[var(--rb-accent-fg,oklch(26%_0.06_168))] shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_4px_10px_-4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_80%,transparent)] hover:not-disabled:-translate-y-px hover:not-disabled:brightness-[1.04] hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_7px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_85%,transparent)] active:not-disabled:translate-y-px active:not-disabled:brightness-[0.98] active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_55%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] motion-reduce:hover:translate-y-0 disabled:opacity-45 disabled:shadow-none dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_78%,white),var(--rb-accent,oklch(81%_0.16_163)))] dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_6px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,transparent)] dark:hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_9px_22px_-8px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_60%,transparent)] dark:active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_45%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black)] dark:disabled:shadow-none", eq)}><__mod_22728.n icon={__mod_59157.A} size={18} strokeWidth={2} aria-hidden="true" />Retry run</button>}</div></div><section><eZ>Inputs</eZ><dl className={eM(eT, e$)}>{eH.map(e => <div className="flex min-h-10 items-center gap-4 px-4 py-2.5"><dt className={eM("min-w-0 text-[15px]/[20px] font-bold text-neutral-900/62 dark:text-neutral-100/62", "w-28 shrink-0")}>{e.label}</dt><dd className={eM("flex min-w-0 flex-wrap items-center gap-2 text-[15px]/[22px] font-medium text-neutral-900 dark:text-neutral-100 [overflow-wrap:anywhere]", "flex-1")}>{e.mono ? <span className={eO}>{e.value}</span> : e.value}</dd></div>)}</dl></section><section><eZ>Attempts</eZ><div className={eM(eT, e$)}>{eP.map(e => <div className="flex min-h-10 items-center gap-3 px-4 py-2.5"><span className={eM(eI, "shrink-0")}>Attempt {e.n}</span><span className={eM(eD, eW, "min-w-0 flex-1 truncate")}>{e.outcome}</span><span className="shrink-0 text-[14px]/[20px] font-semibold tabular-nums text-neutral-900/62 dark:text-neutral-100/62">{e.duration}</span></div>)}<p className={eM(eD, eW, "px-4 py-2.5")}>Reduced the batch size after the first timeout, then stopped to avoid partial writes.</p></div></section><section><eZ>Output</eZ><ul className={eM(eT, e$)}>{[{
                    name: "ledger-partial.csv",
                    facts: ["1,024 of 2,244 rows", "84 KB"]
                  }, {
                    name: "run.log",
                    facts: ["Full trace", "12 KB"]
                  }].map(e => <li className="flex items-center gap-3 px-4 py-2.5"><div className="min-w-0 flex-1"><p className={eM(eO, "truncate")}>{e.name}</p><p className={eM("text-[13px]/[16px] font-semibold tabular-nums", eE, "mt-0.5 flex flex-wrap gap-x-3")}>{e.facts.map(e => <span>{e}</span>)}</p></div><button type="button" aria-label={`Download ${e.name}`} className={eM(eV, eF)}><__mod_22728.n icon={__mod_92752.A} size={18} strokeWidth={2} aria-hidden="true" />Download</button></li>)}</ul></section></div></div><div aria-hidden="true" className={eM("bg-linear-to-b from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 top-0 h-8", r.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={eM("bg-linear-to-t from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 bottom-0 h-8", r.end ? "opacity-100" : "opacity-0")} /></div></div>;
    }
  },
  eK = {
    "agent-activity-1": 560,
    "agent-activity-2": 600,
    "agent-activity-3": 480,
    "agent-activity-4": 700,
    "agent-activity-5": 700,
    "agent-activity-6": 600,
    "agent-activity-7": 700
  };

export { eG as components };
export { eK as heights };

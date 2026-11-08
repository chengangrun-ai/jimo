import { motion, AnimatePresence } from "motion/react";
import * as __mod_50969 from "../_helpers/50969";
import * as __mod_22728 from "../_helpers/22728";
import * as __mod_89886 from "../_helpers/89886";
import * as __mod_89289 from "../_helpers/89289";
import * as __mod_60041 from "../_helpers/60041";
import * as __mod_36586 from "../_helpers/36586";
import * as __mod_48094 from "../_helpers/48094";
import * as __mod_47962 from "../_helpers/47962";
import * as __mod_5042 from "../_helpers/5042";
import * as __mod_90987 from "../_helpers/90987";
import * as __mod_58661 from "../_helpers/58661";
/**
 * Kanban 3
 * slug: kanban-3
 * category: kanban
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let p = (...e) => e.filter(Boolean).join(" "),
  b = "text-neutral-900 dark:text-neutral-100",
  h = "text-neutral-900/62 dark:text-neutral-100/62",
  m = "text-[14px]/[20px] font-medium",
  f = "text-[13px]/[16px] font-bold tabular-nums",
  g = "font-mono text-[12px]/[16px] tabular-nums",
  k = "relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-transparent text-neutral-900 hover:not-disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] active:not-disabled:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] disabled:text-neutral-900/40 dark:text-neutral-100 dark:hover:not-disabled:bg-neutral-100/8 dark:active:not-disabled:bg-neutral-100/12 dark:aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:disabled:text-neutral-100/40",
  v = "relative inline-flex size-8 shrink-0 overflow-hidden rounded-full select-none",
  w = "flex size-full items-center justify-center rounded-[inherit] bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_24%,white)] text-[12px]/[16px] font-extrabold tabular-nums text-neutral-900 dark:text-neutral-100 dark:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_22%,var(--color-neutral-900))]",
  y = "rounded-[var(--rb-r-4xl,18px)]",
  j = "flex max-w-full min-w-0 items-baseline gap-2 text-[15px]/[20px] font-bold text-neutral-900 dark:text-neutral-100",
  N = p("text-[15px]/[20px] font-bold tabular-nums", "text-[oklch(49%_0.1_68)] dark:text-[oklch(80%_0.13_68)]"),
  C = [.2, 0, 0, 1],
  A = {
    type: "spring",
    bounce: 0,
    duration: .35
  },
  R = {
    h1: {
      id: "h1",
      ref: "HAL-241",
      title: "Retry billing webhooks that fail on timeout",
      tag: "Billing",
      assignee: "Ana Reyes",
      comments: 4,
      files: 1,
      priority: "High"
    },
    h2: {
      id: "h2",
      ref: "HAL-238",
      title: "Seat count drifts after a downgrade",
      tag: "Billing",
      assignee: "Priya Nandakumar",
      comments: 2,
      files: 0,
      priority: "High"
    },
    h3: {
      id: "h3",
      ref: "HAL-236",
      title: "Audit log export times out past 90 days",
      tag: "Platform",
      assignee: "Marco Silva",
      comments: 0,
      files: 3,
      priority: "Medium"
    },
    h4: {
      id: "h4",
      ref: "HAL-233",
      title: "Add SCIM group mapping to the admin console",
      tag: "Identity",
      assignee: "Wei Chen",
      comments: 6,
      files: 2,
      priority: "Medium"
    },
    h5: {
      id: "h5",
      ref: "HAL-229",
      title: "Deprecate the v1 usage endpoint",
      tag: "API",
      assignee: "Sofia Alvarez",
      comments: 1,
      files: 0,
      priority: "Low"
    },
    h6: {
      id: "h6",
      ref: "HAL-226",
      title: "Rework the empty state on first workspace",
      tag: "Growth",
      assignee: "Ana Reyes",
      comments: 3,
      files: 1,
      priority: "Medium"
    },
    h7: {
      id: "h7",
      ref: "HAL-221",
      title: "Cache invalidation on role change is slow",
      tag: "Platform",
      assignee: "Marco Silva",
      comments: 8,
      files: 0,
      priority: "High"
    },
    h8: {
      id: "h8",
      ref: "HAL-217",
      title: "Ship the invoice PDF redesign",
      tag: "Billing",
      assignee: "Priya Nandakumar",
      comments: 2,
      files: 4,
      priority: "Low"
    },
    h9: {
      id: "h9",
      ref: "HAL-214",
      title: "Backfill workspace regions for EU tenants",
      tag: "Platform",
      assignee: "Wei Chen",
      comments: 0,
      files: 0,
      priority: "Medium"
    },
    h10: {
      id: "h10",
      ref: "HAL-208",
      title: "Rotate signing keys without downtime",
      tag: "Identity",
      assignee: "Sofia Alvarez",
      comments: 5,
      files: 1,
      priority: "High"
    }
  },
  P = [{
    id: "backlog",
    name: "Backlog",
    limit: 0
  }, {
    id: "progress",
    name: "In progress",
    limit: 4
  }, {
    id: "review",
    name: "In review",
    limit: 3
  }, {
    id: "done",
    name: "Done",
    limit: 0
  }],
  M = {
    backlog: ["h1", "h5", "h9"],
    progress: ["h2", "h7", "h4"],
    review: ["h3", "h10"],
    done: ["h6", "h8"]
  },
  S = e => e.split(/[\s-]+/).filter(Boolean).slice(0, 1).map(e => e[0]?.toUpperCase()).join(""),
  L = {
    High: b,
    Medium: "text-neutral-900/78 dark:text-neutral-100/78",
    Low: h
  };
let D = (...e) => e.filter(Boolean).join(" "),
  z = "bg-white dark:bg-neutral-950",
  I = "text-neutral-900 dark:text-neutral-100",
  W = "text-neutral-900/62 dark:text-neutral-100/62",
  B = "font-mono text-[12px]/[16px] tabular-nums",
  X = "min-w-0 truncate text-[16px]/[20px] font-extrabold text-neutral-900 dark:text-neutral-100",
  Y = "shrink-0 text-[14px]/[20px] font-semibold tabular-nums text-neutral-900/62 dark:text-neutral-100/62",
  H = "rounded-[var(--rb-r-4xl,18px)]",
  E = "flex max-w-full min-w-0 items-baseline gap-2 text-[15px]/[20px] font-bold text-neutral-900 dark:text-neutral-100",
  T = [.2, 0, 0, 1],
  O = {
    type: "spring",
    bounce: 0,
    duration: .35
  },
  U = [{
    id: "todo",
    name: "To do"
  }, {
    id: "progress",
    name: "In progress"
  }, {
    id: "review",
    name: "In review"
  }, {
    id: "shipped",
    name: "Shipped"
  }],
  q = [{
    id: "billing",
    name: "Billing & invoicing",
    owner: "Ana Reyes"
  }, {
    id: "identity",
    name: "Identity",
    owner: "Wei Chen"
  }, {
    id: "platform",
    name: "Platform reliability",
    owner: "Marco Silva"
  }],
  K = {
    b1: {
      id: "b1",
      ref: "HAL-241",
      title: "Retry webhooks on timeout",
      points: 3
    },
    b2: {
      id: "b2",
      ref: "HAL-238",
      title: "Seat drift after downgrade",
      points: 5
    },
    b3: {
      id: "b3",
      ref: "HAL-231",
      title: "Proration preview in checkout",
      points: 2
    },
    b4: {
      id: "b4",
      ref: "HAL-217",
      title: "Invoice PDF redesign",
      points: 8
    },
    i1: {
      id: "i1",
      ref: "HAL-233",
      title: "SCIM group mapping",
      points: 5
    },
    i2: {
      id: "i2",
      ref: "HAL-228",
      title: "Session revocation on role change",
      points: 3
    },
    i3: {
      id: "i3",
      ref: "HAL-208",
      title: "Rotate signing keys live",
      points: 8
    },
    p1: {
      id: "p1",
      ref: "HAL-236",
      title: "Audit export past 90 days",
      points: 5
    },
    p2: {
      id: "p2",
      ref: "HAL-221",
      title: "Cache invalidation latency",
      points: 3
    },
    p3: {
      id: "p3",
      ref: "HAL-214",
      title: "Backfill EU tenant regions",
      points: 2
    },
    p4: {
      id: "p4",
      ref: "HAL-203",
      title: "Shard the events table",
      points: 13
    }
  },
  Z = {
    billing: {
      todo: ["b3"],
      progress: ["b1", "b2"],
      review: [],
      shipped: ["b4"]
    },
    identity: {
      todo: ["i3"],
      progress: ["i1"],
      review: ["i2"],
      shipped: []
    },
    platform: {
      todo: ["p4"],
      progress: ["p2"],
      review: ["p1"],
      shipped: ["p3"]
    }
  },
  F = (...e) => e.filter(Boolean).join(" "),
  G = "text-neutral-900 dark:text-neutral-100",
  V = "text-neutral-900/62 dark:text-neutral-100/62",
  J = "text-[14px]/[20px] font-medium",
  Q = "font-mono text-[12px]/[16px] tabular-nums",
  ee = "relative inline-flex size-8 shrink-0 overflow-hidden rounded-full select-none",
  et = "flex size-full items-center justify-center rounded-[inherit] bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_24%,white)] text-[12px]/[16px] font-extrabold tabular-nums text-neutral-900 dark:text-neutral-100 dark:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_22%,var(--color-neutral-900))]",
  er = "rounded-[var(--rb-r-4xl,18px)]",
  ea = "flex max-w-full min-w-0 items-baseline gap-2 text-[15px]/[20px] font-bold text-neutral-900 dark:text-neutral-100",
  en = [.2, 0, 0, 1],
  ei = {
    type: "spring",
    bounce: 0,
    duration: .35
  },
  el = [{
    id: "c1",
    ref: "NW-412",
    title: "Rate-limit the public search API",
    tag: "API"
  }, {
    id: "c2",
    ref: "NW-408",
    title: "Draft the Q3 reliability review",
    tag: "Docs"
  }, {
    id: "c3",
    ref: "NW-401",
    title: "Fix flaky checkout integration test",
    tag: "Quality"
  }, {
    id: "c4",
    ref: "NW-397",
    title: "Region failover runbook",
    tag: "Infra"
  }, {
    id: "c5",
    ref: "NW-392",
    title: "Compress asset uploads on ingest",
    tag: "Media"
  }, {
    id: "c6",
    ref: "NW-388",
    title: "Warn before destructive bulk edits",
    tag: "Safety"
  }, {
    id: "c7",
    ref: "NW-380",
    title: "Import contacts from CSV",
    tag: "Growth"
  }, {
    id: "c8",
    ref: "NW-374",
    title: "Retire the legacy search index",
    tag: "Infra"
  }, {
    id: "c9",
    ref: "NW-369",
    title: "Keyboard shortcuts help sheet",
    tag: "Craft"
  }],
  eo = {
    c1: {
      status: "Building",
      assignee: "Marco Silva",
      priority: "Urgent"
    },
    c2: {
      status: "Triage",
      assignee: "Ana Reyes",
      priority: "Normal"
    },
    c3: {
      status: "Review",
      assignee: "Priya Nandakumar",
      priority: "High"
    },
    c4: {
      status: "Building",
      assignee: "Marco Silva",
      priority: "High"
    },
    c5: {
      status: "Triage",
      assignee: "Priya Nandakumar",
      priority: "Normal"
    },
    c6: {
      status: "Live",
      assignee: "Ana Reyes",
      priority: "High"
    },
    c7: {
      status: "Review",
      assignee: "Ana Reyes",
      priority: "Normal"
    },
    c8: {
      status: "Building",
      assignee: "Priya Nandakumar",
      priority: "Urgent"
    },
    c9: {
      status: "Live",
      assignee: "Marco Silva",
      priority: "Normal"
    }
  },
  es = [{
    id: "status",
    label: "Status",
    values: ["Triage", "Building", "Review", "Live"]
  }, {
    id: "assignee",
    label: "Assignee",
    values: ["Ana Reyes", "Priya Nandakumar", "Marco Silva"]
  }, {
    id: "priority",
    label: "Priority",
    values: ["Urgent", "High", "Normal"]
  }],
  ec = Object.fromEntries(el.map(e => [e.id, e])),
  ed = e => e.split(/[\s-]+/).filter(Boolean).slice(0, 1).map(e => e[0]?.toUpperCase()).join(""),
  e_ = {
    Urgent: G,
    High: "text-neutral-900/78 dark:text-neutral-100/78",
    Normal: V
  },
  ex = (...e) => e.filter(Boolean).join(" "),
  eu = "text-neutral-900 dark:text-neutral-100",
  ep = "text-neutral-900/78 dark:text-neutral-100/78",
  eb = "text-neutral-900/62 dark:text-neutral-100/62",
  eh = "divide-y divide-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:divide-neutral-100/7",
  em = "text-[14px]/[20px] font-medium",
  ef = "text-[13px]/[16px] font-bold tabular-nums",
  eg = "text-[13px]/[16px] font-semibold tabular-nums",
  ek = "font-mono text-[12px]/[16px] tabular-nums",
  ev = "inline-flex h-5.5 min-w-5.5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden whitespace-nowrap rounded-[calc(var(--rb-r-full,999px))] px-2.5 text-[12px]/[16px] font-bold tabular-nums",
  ew = "bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] text-neutral-900 dark:text-neutral-100 dark:bg-neutral-100/12",
  ey = "relative inline-flex size-8 shrink-0 overflow-hidden rounded-full select-none",
  ej = "flex size-full items-center justify-center rounded-[inherit] bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_24%,white)] text-[12px]/[16px] font-extrabold tabular-nums text-neutral-900 dark:text-neutral-100 dark:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_22%,var(--color-neutral-900))]",
  eN = "flex min-h-12 min-w-0 shrink-0 items-center gap-2 px-4 has-[button]:pe-2.5",
  eC = "rounded-[var(--rb-r-4xl,18px)]",
  eA = "flex max-w-full min-w-0 items-baseline gap-2 text-[15px]/[20px] font-bold text-neutral-900 dark:text-neutral-100",
  eR = [.2, 0, 0, 1],
  eP = {
    type: "spring",
    bounce: 0,
    duration: .35
  },
  eM = [{
    id: "todo",
    name: "To do"
  }, {
    id: "progress",
    name: "In progress"
  }, {
    id: "review",
    name: "In review"
  }, {
    id: "done",
    name: "Done"
  }],
  eS = {
    k1: {
      id: "k1",
      ref: "CDR-118",
      title: "Recover partial uploads after a dropped connection",
      summary: "Large uploads restart from zero when the socket drops. Store the chunk offset so the client can resume where it left off.",
      assignee: "Ana Reyes",
      priority: "Urgent",
      points: 8,
      comments: [{
        who: "Marco Silva",
        when: "2 days ago",
        text: "Reproduced on a 400 MB file over a throttled connection."
      }, {
        who: "Ana Reyes",
        when: "yesterday",
        text: "Chunk offsets are already stored. The client just never reads them back."
      }]
    },
    k2: {
      id: "k2",
      ref: "CDR-114",
      title: "Trash keeps deleted folders for 30 days",
      summary: "Restoring a folder should bring its children back with the original hierarchy intact.",
      assignee: "Priya Nandakumar",
      priority: "High",
      points: 5,
      comments: [{
        who: "Priya Nandakumar",
        when: "3 days ago",
        text: "Retention job is written. Restore path still flattens nested folders."
      }]
    },
    k3: {
      id: "k3",
      ref: "CDR-109",
      title: "Bulk share links expire on a schedule",
      summary: "Owners want an expiry they can set once and apply to every link in a folder.",
      assignee: "Wei Chen",
      priority: "Normal",
      points: 3,
      comments: []
    },
    k4: {
      id: "k4",
      ref: "CDR-104",
      title: "Preview HEIC images without downloading",
      summary: "Convert on the fly at request time and cache the result for a week.",
      assignee: "Marco Silva",
      priority: "Normal",
      points: 5,
      comments: [{
        who: "Wei Chen",
        when: "last week",
        text: "Conversion adds about 180 ms on a cold cache. Acceptable."
      }]
    },
    k5: {
      id: "k5",
      ref: "CDR-98",
      title: "Audit trail for permission changes",
      summary: "Every grant and revoke needs an immutable entry with the actor and the reason.",
      assignee: "Ana Reyes",
      priority: "High",
      points: 8,
      comments: []
    },
    k6: {
      id: "k6",
      ref: "CDR-91",
      title: "Drag files straight onto a folder row",
      summary: "The row should accept a drop and show a clear target state while hovering.",
      assignee: "Priya Nandakumar",
      priority: "Normal",
      points: 2,
      comments: [{
        who: "Ana Reyes",
        when: "4 days ago",
        text: "Shipped behind a flag. Waiting on copy for the empty folder case."
      }]
    },
    k7: {
      id: "k7",
      ref: "CDR-87",
      title: "Storage meter in the sidebar footer",
      summary: "Show used against plan, and link to the upgrade page past 80%.",
      assignee: "Wei Chen",
      priority: "Normal",
      points: 2,
      comments: []
    }
  },
  eL = {
    todo: ["k3", "k5"],
    progress: ["k1", "k2"],
    review: ["k4"],
    done: ["k6", "k7"]
  },
  e$ = e => e.split(/[\s-]+/).filter(Boolean).slice(0, 1).map(e => e[0]?.toUpperCase()).join(""),
  eD = {
    Urgent: eu,
    High: ep,
    Normal: eb
  },
  ez = (...e) => e.filter(Boolean).join(" "),
  eI = "text-neutral-900 dark:text-neutral-100",
  eW = "text-neutral-900/62 dark:text-neutral-100/62",
  eB = "text-[14px]/[20px] font-medium",
  eX = "font-mono text-[12px]/[16px] tabular-nums",
  eY = "rounded-[var(--rb-r-4xl,18px)]",
  eH = "flex max-w-full min-w-0 items-baseline gap-2 text-[15px]/[20px] font-bold text-neutral-900 dark:text-neutral-100",
  eE = "relative block h-2.5 w-full overflow-hidden rounded-[calc(var(--rb-r-full,999px))] bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] shadow-[inset_0_1px_2px_rgb(84_62_32/0.12)] dark:bg-neutral-100/12 dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.5)]",
  eT = ez("text-[15px]/[20px] font-bold tabular-nums", "text-[oklch(49%_0.1_68)] dark:text-[oklch(80%_0.13_68)]"),
  eO = [.2, 0, 0, 1],
  eU = {
    type: "spring",
    bounce: 0,
    duration: .35
  },
  eq = [{
    id: "committed",
    name: "Committed",
    capacity: 21
  }, {
    id: "building",
    name: "Building",
    capacity: 13
  }, {
    id: "verifying",
    name: "Verifying",
    capacity: 8
  }, {
    id: "accepted",
    name: "Accepted",
    capacity: 0
  }],
  eK = {
    s1: {
      id: "s1",
      ref: "MER-52",
      title: "Split the ingest queue by tenant",
      points: 8,
      assignee: "Marco Silva"
    },
    s2: {
      id: "s2",
      ref: "MER-49",
      title: "Retry policy for failed exports",
      points: 5,
      assignee: "Ana Reyes"
    },
    s3: {
      id: "s3",
      ref: "MER-47",
      title: "Surface sync errors in the header",
      points: 3,
      assignee: "Priya Nandakumar"
    },
    s4: {
      id: "s4",
      ref: "MER-45",
      title: "Warm the report cache nightly",
      points: 5,
      assignee: "Wei Chen",
      blocked: !0
    },
    s5: {
      id: "s5",
      ref: "MER-43",
      title: "Per-workspace rate limits",
      points: 8,
      assignee: "Marco Silva"
    },
    s6: {
      id: "s6",
      ref: "MER-40",
      title: "Trim the onboarding checklist",
      points: 2,
      assignee: "Ana Reyes"
    },
    s7: {
      id: "s7",
      ref: "MER-38",
      title: "Signed URLs for shared exports",
      points: 3,
      assignee: "Priya Nandakumar"
    },
    s8: {
      id: "s8",
      ref: "MER-35",
      title: "Collapse duplicate alert emails",
      points: 5,
      assignee: "Wei Chen"
    },
    s9: {
      id: "s9",
      ref: "MER-31",
      title: "Timezone picker on scheduled reports",
      points: 2,
      assignee: "Ana Reyes"
    },
    s10: {
      id: "s10",
      ref: "MER-28",
      title: "Backfill missing usage rows",
      points: 3,
      assignee: "Marco Silva"
    }
  },
  eZ = {
    committed: ["s1", "s5", "s9"],
    building: ["s2", "s4"],
    verifying: ["s3", "s7"],
    accepted: ["s6", "s8", "s10"]
  };
let eV = (...e) => e.filter(Boolean).join(" "),
  eJ = "text-neutral-900 dark:text-neutral-100",
  eQ = "text-neutral-900/62 dark:text-neutral-100/62",
  e0 = "text-[14px]/[20px] font-medium",
  e1 = "text-[13px]/[16px] font-semibold tabular-nums",
  e2 = "relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-transparent text-neutral-900 hover:not-disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] active:not-disabled:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] disabled:text-neutral-900/40 dark:text-neutral-100 dark:hover:not-disabled:bg-neutral-100/8 dark:active:not-disabled:bg-neutral-100/12 dark:aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:disabled:text-neutral-100/40",
  e5 = "size-8 rounded-[calc(var(--rb-r-full,999px))]",
  e6 = "rounded-[var(--rb-r-4xl,18px)]",
  e8 = "flex max-w-full min-w-0 items-baseline gap-2 text-[15px]/[20px] font-bold text-neutral-900 dark:text-neutral-100",
  e4 = [.2, 0, 0, 1],
  e9 = {
    type: "spring",
    bounce: 0,
    duration: .35
  },
  e3 = [{
    id: "inbox",
    name: "Inbox"
  }, {
    id: "today",
    name: "Today"
  }, {
    id: "doing",
    name: "Doing"
  }, {
    id: "done",
    name: "Done"
  }],
  e7 = {
    t1: {
      id: "t1",
      title: "Rewrite the welcome email",
      list: "Lifecycle",
      done: 3,
      total: 4,
      assignee: "Ana Reyes"
    },
    t2: {
      id: "t2",
      title: "Cut the trial banner on paid plans",
      list: "Billing",
      done: 0,
      total: 2,
      assignee: "Wei Chen"
    },
    t3: {
      id: "t3",
      title: "Reconcile refund webhooks",
      list: "Billing",
      done: 1,
      total: 5,
      assignee: "Marco Silva"
    },
    t4: {
      id: "t4",
      title: "Ship the changelog RSS feed",
      list: "Growth",
      done: 2,
      total: 2,
      assignee: "Priya Nandakumar"
    },
    t5: {
      id: "t5",
      title: "Prune stale invite tokens",
      list: "Platform",
      done: 0,
      total: 3,
      assignee: "Wei Chen"
    },
    t6: {
      id: "t6",
      title: "Add a keyboard hint to search",
      list: "Craft",
      done: 1,
      total: 1,
      assignee: "Ana Reyes"
    },
    t7: {
      id: "t7",
      title: "Document the export limits",
      list: "Docs",
      done: 0,
      total: 4,
      assignee: "Priya Nandakumar"
    },
    t8: {
      id: "t8",
      title: "Move avatars to the CDN",
      list: "Platform",
      done: 4,
      total: 4,
      assignee: "Marco Silva"
    },
    t9: {
      id: "t9",
      title: "Retire the old status widget",
      list: "Craft",
      done: 2,
      total: 3,
      assignee: "Ana Reyes"
    },
    t10: {
      id: "t10",
      title: "Weekly digest opt-out",
      list: "Lifecycle",
      done: 1,
      total: 2,
      assignee: "Wei Chen"
    }
  },
  te = {
    inbox: ["t5", "t7", "t2"],
    today: ["t3", "t9"],
    doing: ["t1", "t10"],
    done: ["t4", "t6", "t8"]
  },
  tt = {
    "kanban-1": function () {
      let e = (0, React.useId)(),
        t = (0, __mod_50969.I)(),
        [r, $] = (0, React.useState)(M),
        [D, z] = (0, React.useState)(R),
        [I, W] = (0, React.useState)(null),
        [B, X] = (0, React.useState)(null),
        [Y, H] = (0, React.useState)({
          x: 0,
          y: 0,
          w: 0
        }),
        [E, T] = (0, React.useState)(null),
        [O, U] = (0, React.useState)(""),
        [q, K] = (0, React.useState)(""),
        Z = (0, React.useRef)(null),
        F = (0, React.useRef)(new Map()),
        G = (0, React.useRef)(0),
        V = (0, React.useRef)(null),
        J = (0, React.useCallback)(e => Object.keys(r).find(t => r[t].includes(e)) ?? "backlog", [r]),
        Q = (0, React.useCallback)((e, t, r) => {
          $(a => {
            let n = {
                ...a
              },
              i = null;
            for (let t of Object.keys(n)) n[t].includes(e) && (i = t);
            if (!i) return a;
            let l = n[i].indexOf(e);
            if (i === t && l === r) return a;
            n[i] = n[i].filter(t => t !== e);
            let o = i === t ? n[i] : [...n[t]];
            return o.splice(Math.max(0, Math.min(r, o.length)), 0, e), n[t] = o, n;
          });
        }, []),
        ee = (0, React.useCallback)((e, t, r) => {
          for (let [a, n] of F.current) {
            let i = n.getBoundingClientRect();
            if (e < i.left || e > i.right) continue;
            let l = Array.from(n.querySelectorAll("[data-card]")).filter(e => e.dataset.card !== r),
              o = l.length;
            for (let e = 0; e < l.length; e++) {
              let r = l[e].getBoundingClientRect();
              if (t < r.top + r.height / 2) {
                o = e;
                break;
              }
            }
            return {
              col: a,
              index: o
            };
          }
          return null;
        }, []),
        et = (e, t) => {
          if (0 !== e.button) return;
          let r = e.currentTarget.closest("[data-card]"),
            a = Z.current;
          if (!r || !a) return;
          e.preventDefault();
          let n = r.getBoundingClientRect();
          V.current = {
            id: t,
            dx: e.clientX - n.left,
            dy: e.clientY - n.top,
            w: n.width,
            active: !1,
            startX: e.clientX,
            startY: e.clientY,
            pointerId: e.pointerId
          }, a.setPointerCapture(e.pointerId), r.querySelector('[aria-roledescription="Draggable card"]')?.focus();
        },
        er = () => {
          let e = V.current;
          if (!e) return;
          V.current = null;
          let t = Z.current;
          if (t?.hasPointerCapture?.(e.pointerId) && t.releasePointerCapture(e.pointerId), e.active) {
            let t = P.find(t => t.id === J(e.id));
            K(`${D[e.id]?.ref} moved to ${t?.name}.`);
          }
          W(null);
        },
        ea = e => {
          let t = O.trim();
          if (!t) return void T(null);
          let r = 242 + G.current,
            a = `n${r}`;
          G.current += 1, z(e => ({
            ...e,
            [a]: {
              id: a,
              ref: `HAL-${r}`,
              title: t,
              tag: "Triage",
              assignee: "Ana Reyes",
              comments: 0,
              files: 0,
              priority: "Medium"
            }
          })), $(t => ({
            ...t,
            [e]: [a, ...t[e]]
          })), U(""), T(null), K(`Added ${t}.`);
        },
        en = (0, React.useMemo)(() => Object.values(r).reduce((e, t) => e + t.length, 0), [r]);
      return <div ref={Z} onPointerMove={e => {
        let t = V.current,
          r = Z.current;
        if (!t || !r) return;
        if (!t.active) {
          if (4 > Math.hypot(e.clientX - t.startX, e.clientY - t.startY)) return;
          t.active = !0, X(null), W(t.id);
        }
        let a = r.getBoundingClientRect();
        H({
          x: e.clientX - a.left - t.dx,
          y: e.clientY - a.top - t.dy,
          w: t.w
        });
        let n = ee(e.clientX, e.clientY, t.id);
        n && Q(t.id, n.col, n.index);
      }} onPointerUp={er} onPointerCancel={er} onLostPointerCapture={er} className={p("bg-white dark:bg-neutral-950", b, "relative flex h-full min-h-[680px] w-full flex-col overflow-hidden", I && "touch-none select-none")}><header className="flex shrink-0 flex-wrap items-end justify-between gap-3 px-6 pt-6 pb-4 sm:px-8"><div className="min-w-0"><h2 className={p("text-[17px]/[22px] font-extrabold", b)}>Platform board</h2><p className={p(m, h, "mt-0.5 truncate")}>{en} open items. Drag a card, or focus one and press space to move it with the arrow keys.</p></div><div className={p("flex items-center *:not-first:-ms-1.5 *:not-last:[mask-image:radial-gradient(50%_50%_at_calc(150%-6px)_50%,transparent_calc(100%+1.5px),#000_calc(100%+2px))]", "shrink-0")}>{["Ana Reyes", "Priya Nandakumar", "Marco Silva", "Wei Chen"].map(e => <span title={e} className={p(v, "size-[28px]")}><span className={w}>{S(e)}</span></span>)}</div></header><div className="min-h-0 flex-1 overflow-x-auto overflow-y-hidden px-6 pb-6 sm:px-8"><div className="flex h-full min-w-max gap-2.5">{P.map(n => {
              let i = r[n.id],
                o = n.limit > 0 && i.length > n.limit;
              return <section aria-label={n.name} className={p("relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 shadow-[inset_0_0_0_1px_rgb(84_62_32/0.05)] dark:shadow-[inset_0_0_0_1px_rgb(255_255_255/0.05)]", "h-full w-[264px] shrink-0")}><div className="flex min-h-12 min-w-0 shrink-0 items-center gap-2 px-4 has-[button]:pe-2.5"><span className="min-w-0 truncate text-[16px]/[20px] font-extrabold text-neutral-900 dark:text-neutral-100">{n.name}</span><span className={p(o ? N : "shrink-0 text-[14px]/[20px] font-semibold tabular-nums text-neutral-900/62 dark:text-neutral-100/62", "shrink-0")}>{i.length}{n.limit > 0 ? `/${n.limit}` : ""}</span><button type="button" onClick={() => {
                    T(n.id), U("");
                  }} aria-label={`Add a card to ${n.name}`} className={p(k, "size-7 rounded-[calc(var(--rb-r-full,999px))]", "ml-auto")}><__mod_22728.n icon={__mod_89886.A} size={18} strokeWidth={2} aria-hidden="true" /></button></div><div ref={e => {
                  e ? F.current.set(n.id, e) : F.current.delete(n.id);
                }} className={p("mx-1 mb-1 flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-5xl,22px))] border border-transparent bg-white dark:bg-neutral-950 shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] [&:has(+*)]:mb-0", "min-h-0 flex-1 overflow-y-auto")}>{E === n.id && <div className={p("border-b border-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:border-neutral-100/7", "px-3 py-2")}><label htmlFor={`${e}-${n.id}-draft`} className="sr-only">New card in {n.name}</label><div className={p("relative flex w-full min-w-0 cursor-text items-center rounded-[calc(var(--rb-r-xl,12px))] data-concentric:rounded-[var(--rb-r-5xl,22px)] border border-transparent bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] text-[15px]/[20px] font-medium text-neutral-900 transition-[border-color,box-shadow,background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:not-focus-within:not-has-[[aria-invalid=true]]:not-has-[input:disabled]:not-has-[input[readonly]]:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] focus-within:border-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] focus-within:bg-white focus-within:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] has-[[aria-invalid=true]]:border-[oklch(60%_0.236_26)] has-[[aria-invalid=true]]:bg-[oklch(97.5%_0.016_26)] has-[input:disabled]:cursor-not-allowed has-[input:disabled]:text-neutral-900/40 has-[input:disabled]:shadow-none has-[input[readonly]]:cursor-default has-[input[readonly]]:shadow-none dark:text-neutral-100 dark:hover:not-focus-within:not-has-[[aria-invalid=true]]:not-has-[input:disabled]:not-has-[input[readonly]]:bg-neutral-900 dark:focus-within:border-[var(--rb-accent,oklch(81%_0.16_163))] dark:focus-within:bg-neutral-900 dark:focus-within:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:has-[[aria-invalid=true]]:border-[oklch(65.2%_0.219_26)] dark:has-[[aria-invalid=true]]:bg-[oklch(26%_0.04_26)] dark:has-[input:disabled]:text-neutral-100/40", "h-10")}><input id={`${e}-${n.id}-draft`} autoFocus={!0} value={O} onChange={e => U(e.target.value)} onKeyDown={e => {
                        "Enter" === e.key && ea(n.id), "Escape" === e.key && T(null);
                      }} placeholder="What needs doing?" className="h-full w-full min-w-0 flex-1 bg-transparent px-3.5 outline-none [[data-affix]+&]:ps-2 [&:has(+[data-affix])]:pe-2 placeholder:font-medium placeholder:text-neutral-900/55 disabled:cursor-not-allowed disabled:placeholder:text-neutral-900/30 dark:placeholder:text-neutral-100/55 dark:disabled:placeholder:text-neutral-100/30 dark:[color-scheme:dark]" /></div><div className="mt-2 flex items-center gap-1"><button type="button" onClick={() => ea(n.id)} className={p("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_68%,white),var(--rb-accent,oklch(84%_0.15_165)))] text-[var(--rb-accent-fg,oklch(26%_0.06_168))] shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_4px_10px_-4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_80%,transparent)] hover:not-disabled:-translate-y-px hover:not-disabled:brightness-[1.04] hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_7px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_85%,transparent)] active:not-disabled:translate-y-px active:not-disabled:brightness-[0.98] active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_55%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] motion-reduce:hover:translate-y-0 disabled:opacity-45 disabled:shadow-none dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_78%,white),var(--rb-accent,oklch(81%_0.16_163)))] dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_6px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,transparent)] dark:hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_9px_22px_-8px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_60%,transparent)] dark:active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_45%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black)] dark:disabled:shadow-none", "h-8 gap-1.5 rounded-[calc(var(--rb-r-full,999px))] px-3.5 text-[14px]/[18px] font-bold")}>Add</button><button type="button" onClick={() => T(null)} aria-label="Cancel" className={p(k, "size-8 rounded-[calc(var(--rb-r-full,999px))]")}><__mod_22728.n icon={__mod_89289.A} size={18} strokeWidth={2} aria-hidden="true" /></button></div></div>}<ul className={p("divide-y divide-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:divide-neutral-100/7", "p-1")}>{i.map(e => {
                      let n = D[e];
                      if (!n) return null;
                      let i = I === e,
                        o = B === e;
                      return <motion.li layout={!t && "position"} transition={A} data-card={e} className={p(i && p("rounded-[calc(var(--rb-r-lg,10px))] bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-100/8", y))}><div role="button" tabIndex={0} aria-roledescription="Draggable card" aria-label={`${n.ref}: ${n.title}. ${n.priority} priority, assigned to ${n.assignee}.`} onPointerDown={t => {
                          "mouse" === t.pointerType && et(t, e);
                        }} onKeyDown={t => ((e, t) => {
                          let a = J(t),
                            n = r[a].indexOf(t),
                            i = P.findIndex(e => e.id === a);
                          if (" " === e.key || "Enter" === e.key) {
                            e.preventDefault();
                            let r = B === t ? null : t;
                            X(r), K(r ? `${D[t].ref} grabbed. Use the arrow keys to move it, then press space to drop.` : `${D[t].ref} dropped in ${P[i].name}.`);
                            return;
                          }
                          if ("Escape" === e.key && B === t) {
                            e.preventDefault(), X(null), K("Move cancelled.");
                            return;
                          }
                          if (B !== t) return;
                          let l = !0;
                          "ArrowUp" === e.key ? Q(t, a, Math.max(0, n - 1)) : "ArrowDown" === e.key ? Q(t, a, n + 1) : "ArrowLeft" === e.key && i > 0 ? Q(t, P[i - 1].id, r[P[i - 1].id].length) : "ArrowRight" === e.key && i < P.length - 1 ? Q(t, P[i + 1].id, r[P[i + 1].id].length) : l = !1, l && (e.preventDefault(), e.currentTarget.focus());
                        })(t, e)} className={p("relative flex min-h-12 w-full min-w-0 flex-wrap items-center gap-x-3 gap-y-1 py-2.5 text-left text-neutral-900 dark:text-neutral-100 transition-[background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] has-[[data-description]]:min-h-16", y, o ? "bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] dark:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)]" : p("hover:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] dark:hover:bg-neutral-100/6", "active:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] dark:active:bg-neutral-100/10"), "focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))]", "cursor-grab px-2", i && "invisible")}><div className="flex w-full items-center gap-2"><span className={p(f, L[n.priority])}>{n.priority}</span><span className={p(g, h)}>{n.ref}</span><span onPointerDown={t => et(t, e)} style={{
                              touchAction: "none"
                            }} aria-hidden={!0} className={p(h, "ml-auto -mr-0.5 cursor-grab")}><__mod_22728.n icon={__mod_60041.A} size={16} strokeWidth={2} aria-hidden="true" /></span></div><p className={p(j, "w-full")}>{n.title}</p><div className="flex w-full items-center gap-2"><span className={p("inline-flex h-5.5 min-w-5.5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden whitespace-nowrap rounded-[calc(var(--rb-r-full,999px))] px-2.5 text-[12px]/[16px] font-bold tabular-nums", "bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] text-neutral-900 dark:text-neutral-100 dark:bg-neutral-100/12")}>{n.tag}</span>{n.comments > 0 && <span className={p(f, h, "inline-flex items-center gap-1")}><__mod_22728.n icon={__mod_36586.A} size={14} strokeWidth={2} aria-hidden="true" />{n.comments}</span>}{n.files > 0 && <span className={p(f, h, "inline-flex items-center gap-1")}><__mod_22728.n icon={__mod_48094.A} size={14} strokeWidth={2} aria-hidden="true" />{n.files}</span>}<span title={n.assignee} className={p(v, "ml-auto size-[24px]")}><span className={w}>{S(n.assignee)}</span></span></div></div></motion.li>;
                    })}</ul>{0 === i.length && E !== n.id && <p className={p(m, h, "px-3 py-6 text-center")}>Nothing here yet</p>}</div></section>;
            })}</div></div><__mod_47962.N>{I && D[I] && <motion.div initial={t ? {
            opacity: .9
          } : {
            opacity: .9,
            scale: 1
          }} animate={t ? {
            opacity: 1
          } : {
            opacity: 1,
            scale: 1.02,
            rotate: -1.5
          }} exit={{
            opacity: 0,
            transition: {
              duration: .12
            }
          }} transition={{
            duration: .16,
            ease: C
          }} style={{
            left: Y.x,
            top: Y.y,
            width: Y.w
          }} className="pointer-events-none absolute z-50"><div className={p("relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] text-neutral-900 dark:text-neutral-100 shadow-[0_0_0_1px_rgb(84_62_32/0.07),0_1px_2px_rgb(84_62_32/0.06),0_8px_22px_-10px_rgb(84_62_32/0.20)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_0_0_1px_rgb(0_0_0/0.6),0_10px_24px_-12px_rgb(0_0_0/0.8)]", "shadow-[0_0_0_1px_rgb(84_62_32/0.08),0_24px_56px_-20px_rgb(84_62_32/0.34),0_6px_16px_-8px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.65),0_24px_56px_-16px_rgb(0_0_0/0.8)]", "gap-1 px-3 py-2")}><div className="flex items-center gap-2"><span className={p(f, L[D[I].priority])}>{D[I].priority}</span><span className={p(g, h)}>{D[I].ref}</span></div><p className={j}>{D[I].title}</p></div></motion.div>}</__mod_47962.N><p aria-live="polite" className="sr-only">{q}</p></div>;
    },
    "kanban-2": function () {
      let e = (0, __mod_50969.I)(),
        [t, r] = (0, React.useState)(Z),
        [c, d] = (0, React.useState)([]),
        [x, u] = (0, React.useState)(null),
        [p, b] = (0, React.useState)(null),
        [h, m] = (0, React.useState)({
          x: 0,
          y: 0,
          w: 0
        }),
        [f, g] = (0, React.useState)(""),
        k = (0, React.useRef)(null),
        v = (0, React.useRef)(new Map()),
        w = (0, React.useRef)(null),
        y = (0, React.useCallback)(e => {
          for (let r of q) for (let a of U) {
            let n = t[r.id][a.id].indexOf(e);
            if (-1 !== n) return {
              lane: r.id,
              col: a.id,
              index: n
            };
          }
          return null;
        }, [t]),
        j = (0, React.useCallback)((e, t, a, n) => {
          r(r => {
            let i = {
                billing: {
                  ...r.billing
                },
                identity: {
                  ...r.identity
                },
                platform: {
                  ...r.platform
                }
              },
              l = null,
              o = null;
            for (let t of q) for (let r of U) i[t.id][r.id].includes(e) && (l = t.id, o = r.id);
            if (!l || !o || l === t && o === a && i[l][o].indexOf(e) === n) return r;
            i[l][o] = i[l][o].filter(t => t !== e);
            let s = [...i[t][a]];
            return s.splice(Math.max(0, Math.min(n, s.length)), 0, e), i[t][a] = s, i;
          });
        }, []),
        N = (0, React.useCallback)((e, t, r) => {
          for (let [a, n] of v.current) {
            let i = n.getBoundingClientRect();
            if (e < i.left || e > i.right || t < i.top || t > i.bottom) continue;
            let l = Array.from(n.querySelectorAll("[data-card]")).filter(e => e.dataset.card !== r),
              o = l.length;
            for (let e = 0; e < l.length; e++) {
              let r = l[e].getBoundingClientRect();
              if (t < r.top + r.height / 2) {
                o = e;
                break;
              }
            }
            let [s, c] = a.split("|");
            return {
              lane: s,
              col: c,
              index: o
            };
          }
          return null;
        }, []),
        C = (e, t) => {
          if (0 !== e.button) return;
          let r = e.currentTarget.closest("[data-card]"),
            a = k.current;
          if (!r || !a) return;
          e.preventDefault();
          let n = r.getBoundingClientRect();
          w.current = {
            id: t,
            dx: e.clientX - n.left,
            dy: e.clientY - n.top,
            w: n.width,
            active: !1,
            startX: e.clientX,
            startY: e.clientY,
            pointerId: e.pointerId
          }, a.setPointerCapture(e.pointerId), r.querySelector('[aria-roledescription="Draggable card"]')?.focus();
        },
        A = () => {
          let e = w.current;
          if (!e) return;
          w.current = null;
          let t = k.current;
          if (t?.hasPointerCapture?.(e.pointerId) && t.releasePointerCapture(e.pointerId), e.active) {
            let t = y(e.id);
            t && g(`${K[e.id].ref} moved to ${U.find(e => e.id === t.col)?.name} in ${q.find(e => e.id === t.lane)?.name}.`);
          }
          u(null);
        },
        R = (0, React.useMemo)(() => {
          let e = {};
          for (let r of U) e[r.id] = q.reduce((e, a) => e + t[a.id][r.id].length, 0);
          return e;
        }, [t]);
      return <div ref={k} onPointerMove={e => {
        let t = w.current,
          r = k.current;
        if (!t || !r) return;
        if (!t.active) {
          if (4 > Math.hypot(e.clientX - t.startX, e.clientY - t.startY)) return;
          t.active = !0, b(null), u(t.id);
        }
        let a = r.getBoundingClientRect();
        m({
          x: e.clientX - a.left - t.dx,
          y: e.clientY - a.top - t.dy,
          w: t.w
        });
        let n = N(e.clientX, e.clientY, t.id);
        n && j(t.id, n.lane, n.col, n.index);
      }} onPointerUp={A} onPointerCancel={A} onLostPointerCapture={A} className={D(z, I, "relative flex h-full min-h-[720px] w-full flex-col overflow-hidden", x && "touch-none select-none")}><header className="flex shrink-0 flex-wrap items-end justify-between gap-3 px-6 pt-6 pb-4 sm:px-8"><div className="min-w-0"><h2 className={D("text-[17px]/[22px] font-extrabold", I)}>Workstreams</h2><p className={D("text-[14px]/[20px] font-medium", W, "mt-0.5 truncate")}>Three lanes across four stages. Drag between any cell, or press space on a card to move it with the arrow keys.</p></div><button type="button" onClick={() => d(e => e.length === q.length ? [] : q.map(e => e.id))} className={D("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] text-neutral-900 dark:text-neutral-100 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] active:not-disabled:translate-y-px active:not-disabled:shadow-[inset_0_1px_3px_rgb(84_62_32/0.16),0_0_0_1px_rgb(84_62_32/0.10)] dark:active:not-disabled:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14),0_0_0_1px_rgb(84_62_32/0.10)] dark:aria-expanded:bg-neutral-800 dark:aria-expanded:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] disabled:bg-none disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] disabled:text-neutral-900/40 disabled:shadow-none dark:disabled:bg-neutral-800/60 dark:disabled:text-neutral-100/40", "h-10 gap-2 rounded-[calc(var(--rb-r-full,999px))] px-5 text-[15px]/[20px] font-bold")}>{c.length === q.length ? "Expand all" : "Collapse all"}</button></header><div className="min-h-0 flex-1 overflow-auto px-6 pb-6 sm:px-8"><div className="min-w-max"><div className={D(z, "sticky top-0 z-20 grid grid-cols-[repeat(4,240px)] gap-2.5 px-1.5 pb-2")}>{U.map(e => <div className="flex items-center gap-2 px-3"><span className={X}>{e.name}</span><span className={Y}>{R[e.id]}</span></div>)}</div><div className="space-y-2">{q.map(r => {
                let n = !c.includes(r.id),
                  i = U.reduce((e, a) => e + t[r.id][a.id].length, 0),
                  o = t[r.id].shipped.length;
                return <section aria-label={r.name} className="relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 shadow-[inset_0_0_0_1px_rgb(84_62_32/0.05)] dark:shadow-[inset_0_0_0_1px_rgb(255_255_255/0.05)]"><div className={D("flex min-h-12 min-w-0 shrink-0 items-center gap-2 px-4 has-[button]:pe-2.5", "py-1")}><button type="button" onClick={() => {
                      let e;
                      return e = r.id, d(t => t.includes(e) ? t.filter(t => t !== e) : [...t, e]);
                    }} aria-expanded={n} className="group -mx-2 flex min-h-9 max-w-[calc(100%+16px)] min-w-0 cursor-pointer items-center gap-2 self-start rounded-[calc(var(--rb-r-lg,10px))] px-2 text-left text-[14px]/[20px] font-semibold text-neutral-900/78 dark:text-neutral-100/78 transition-[background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] active:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] dark:hover:bg-neutral-100/6 dark:active:bg-neutral-100/10 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))]"><span className="flex size-4 items-center justify-center"><__mod_22728.n icon={__mod_5042.A} size={14} strokeWidth={2} aria-hidden="true" className="shrink-0 text-neutral-900/62 dark:text-neutral-100/62 transition-transform duration-[280ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] motion-reduce:transition-none group-aria-expanded:rotate-90" /></span><span className={X}>{r.name}</span></button><span className={Y}>{o}/{i} shipped</span><span title={r.owner} className={D("relative inline-flex size-8 shrink-0 overflow-hidden rounded-full select-none", "ml-auto size-[24px]")}><span className="flex size-full items-center justify-center rounded-[inherit] bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_24%,white)] text-[12px]/[16px] font-extrabold tabular-nums text-neutral-900 dark:text-neutral-100 dark:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_22%,var(--color-neutral-900))]">{r.owner.split(/[\s-]+/).filter(Boolean).slice(0, 1).map(e => e[0]?.toUpperCase()).join("")}</span></span></div>{n && <div className="mx-1 mb-1 flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-5xl,22px))] border border-transparent bg-white dark:bg-neutral-950 shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] [&:has(+*)]:mb-0"><div className="grid grid-cols-[repeat(4,240px)] gap-2.5 p-1">{U.map(n => {
                        let i = t[r.id][n.id];
                        return <div ref={e => {
                          let t,
                            a,
                            i = (t = r.id, a = n.id, `${t}|${a}`);
                          e ? v.current.set(i, e) : v.current.delete(i);
                        }} aria-label={`${r.name}, ${n.name}`} className={D("divide-y divide-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:divide-neutral-100/7", "min-h-[92px]")}>{i.map(i => {
                            let o = K[i],
                              c = x === i,
                              d = p === i;
                            return <motion.div layout={!e && "position"} transition={O} data-card={i} className={D(c && D("rounded-[calc(var(--rb-r-lg,10px))] bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-100/8", H))}><div role="button" tabIndex={0} aria-roledescription="Draggable card" aria-label={`${o.ref}: ${o.title}, ${o.points} points, ${n.name} in ${r.name}.`} onPointerDown={e => {
                                "mouse" === e.pointerType && C(e, i);
                              }} onKeyDown={e => ((e, r) => {
                                let a = y(r);
                                if (!a) return;
                                let n = q.findIndex(e => e.id === a.lane),
                                  i = U.findIndex(e => e.id === a.col);
                                if (" " === e.key || "Enter" === e.key) {
                                  e.preventDefault();
                                  let t = p === r ? null : r;
                                  b(t), g(t ? `${K[r].ref} grabbed. Arrow keys move it between columns and lanes.` : `${K[r].ref} dropped.`);
                                  return;
                                }
                                if ("Escape" === e.key && p === r) {
                                  e.preventDefault(), b(null), g("Move cancelled.");
                                  return;
                                }
                                if (p !== r) return;
                                let l = !0;
                                "ArrowLeft" === e.key && i > 0 ? j(r, a.lane, U[i - 1].id, t[a.lane][U[i - 1].id].length) : "ArrowRight" === e.key && i < U.length - 1 ? j(r, a.lane, U[i + 1].id, t[a.lane][U[i + 1].id].length) : "ArrowUp" === e.key ? a.index > 0 ? j(r, a.lane, a.col, a.index - 1) : n > 0 ? j(r, q[n - 1].id, a.col, t[q[n - 1].id][a.col].length) : l = !1 : "ArrowDown" === e.key ? a.index < t[a.lane][a.col].length - 1 ? j(r, a.lane, a.col, a.index + 1) : n < q.length - 1 ? j(r, q[n + 1].id, a.col, 0) : l = !1 : l = !1, l && (e.preventDefault(), e.currentTarget.focus());
                              })(e, i)} className={D("relative flex min-h-12 w-full min-w-0 flex-wrap items-center gap-x-3 gap-y-1 py-2.5 text-left text-neutral-900 dark:text-neutral-100 transition-[background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] has-[[data-description]]:min-h-16", H, d ? "bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] dark:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)]" : D("hover:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] dark:hover:bg-neutral-100/6", "active:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] dark:active:bg-neutral-100/10"), "focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))]", "cursor-grab px-2", c && "invisible")}><div className="flex w-full items-center gap-1.5"><span className={D(B, W)}>{o.ref}</span><span onPointerDown={e => C(e, i)} style={{
                                    touchAction: "none"
                                  }} aria-hidden={!0} className={D(W, "ml-auto -mr-0.5 cursor-grab")}><__mod_22728.n icon={__mod_60041.A} size={16} strokeWidth={2} aria-hidden="true" /></span></div><p className={D(E, "w-full")}>{o.title}</p><span className={D("inline-flex h-5.5 min-w-5.5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden whitespace-nowrap rounded-[calc(var(--rb-r-full,999px))] px-2.5 text-[12px]/[16px] font-bold tabular-nums", "bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] text-neutral-900 dark:text-neutral-100 dark:bg-neutral-100/12")}>{o.points} pts</span></div></motion.div>;
                          })}</div>;
                      })}</div></div>}</section>;
              })}</div></div></div><__mod_47962.N>{x && <motion.div initial={{
            opacity: .9
          }} animate={e ? {
            opacity: 1
          } : {
            opacity: 1,
            scale: 1.02,
            rotate: -1.5
          }} exit={{
            opacity: 0,
            transition: {
              duration: .12
            }
          }} transition={{
            duration: .16,
            ease: T
          }} style={{
            left: h.x,
            top: h.y,
            width: h.w
          }} className="pointer-events-none absolute z-50"><div className={D("relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] text-neutral-900 dark:text-neutral-100 shadow-[0_0_0_1px_rgb(84_62_32/0.07),0_1px_2px_rgb(84_62_32/0.06),0_8px_22px_-10px_rgb(84_62_32/0.20)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_0_0_1px_rgb(0_0_0/0.6),0_10px_24px_-12px_rgb(0_0_0/0.8)]", "shadow-[0_0_0_1px_rgb(84_62_32/0.08),0_24px_56px_-20px_rgb(84_62_32/0.34),0_6px_16px_-8px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.65),0_24px_56px_-16px_rgb(0_0_0/0.8)]", "gap-1 px-3 py-2")}><span className={D(B, W)}>{K[x].ref}</span><p className={E}>{K[x].title}</p></div></motion.div>}</__mod_47962.N><p aria-live="polite" className="sr-only">{f}</p></div>;
    },
    "kanban-3": function () {
      let e = (0, React.useId)(),
        t = (0, __mod_50969.I)(),
        [r, c] = (0, React.useState)("status"),
        [d, x] = (0, React.useState)(eo),
        [u, p] = (0, React.useState)(el.map(e => e.id)),
        [b, h] = (0, React.useState)(null),
        [m, f] = (0, React.useState)(null),
        [g, k] = (0, React.useState)({
          x: 0,
          y: 0,
          w: 0
        }),
        [v, w] = (0, React.useState)(""),
        y = (0, React.useRef)(null),
        j = (0, React.useRef)(new Map()),
        N = (0, React.useRef)(null),
        C = es.find(e => e.id === r),
        A = (0, React.useMemo)(() => {
          let e = new Map();
          for (let t of C.values) e.set(t, []);
          for (let t of u) {
            let a = d[t][r];
            e.get(a)?.push(t);
          }
          return e;
        }, [C.values, r, d, u]),
        R = (0, React.useCallback)((e, t, a) => {
          x(a => a[e][r] === t ? a : {
            ...a,
            [e]: {
              ...a[e],
              [r]: t
            }
          }), p(n => {
            let i = n.filter(t => t !== e),
              l = i.filter(a => (a === e ? t : d[a][r]) === t),
              o = l[a],
              s = o ? i.indexOf(o) : -1,
              c = [...i];
            if (-1 === s) {
              let t = l[l.length - 1];
              c.splice(t ? i.indexOf(t) + 1 : c.length, 0, e);
            } else c.splice(s, 0, e);
            return c;
          });
        }, [d, r]),
        P = (0, React.useCallback)((e, t, r) => {
          for (let [a, n] of j.current) {
            let i = n.getBoundingClientRect();
            if (e < i.left || e > i.right) continue;
            let l = Array.from(n.querySelectorAll("[data-card]")).filter(e => e.dataset.card !== r),
              o = l.length;
            for (let e = 0; e < l.length; e++) {
              let r = l[e].getBoundingClientRect();
              if (t < r.top + r.height / 2) {
                o = e;
                break;
              }
            }
            return {
              value: a,
              index: o
            };
          }
          return null;
        }, []),
        M = (e, t) => {
          if (0 !== e.button) return;
          let r = e.currentTarget.closest("[data-card]"),
            a = y.current;
          if (!r || !a) return;
          e.preventDefault();
          let n = r.getBoundingClientRect();
          N.current = {
            id: t,
            dx: e.clientX - n.left,
            dy: e.clientY - n.top,
            w: n.width,
            active: !1,
            startX: e.clientX,
            startY: e.clientY,
            pointerId: e.pointerId
          }, a.setPointerCapture(e.pointerId), r.querySelector('[aria-roledescription="Draggable card"]')?.focus();
        },
        S = () => {
          let e = N.current;
          if (!e) return;
          N.current = null;
          let t = y.current;
          t?.hasPointerCapture?.(e.pointerId) && t.releasePointerCapture(e.pointerId), e.active && w(`${ec[e.id].ref} ${C.label.toLowerCase()} set to ${d[e.id][r]}.`), h(null);
        };
      return <div ref={y} onPointerMove={e => {
        let t = N.current,
          r = y.current;
        if (!t || !r) return;
        if (!t.active) {
          if (4 > Math.hypot(e.clientX - t.startX, e.clientY - t.startY)) return;
          t.active = !0, f(null), h(t.id);
        }
        let a = r.getBoundingClientRect();
        k({
          x: e.clientX - a.left - t.dx,
          y: e.clientY - a.top - t.dy,
          w: t.w
        });
        let n = P(e.clientX, e.clientY, t.id);
        n && R(t.id, n.value, n.index);
      }} onPointerUp={S} onPointerCancel={S} onLostPointerCapture={S} className={F("bg-white dark:bg-neutral-950", G, "relative flex h-full min-h-[680px] w-full flex-col overflow-hidden", b && "touch-none select-none")}><header className="flex shrink-0 flex-wrap items-end justify-between gap-3 px-6 pt-6 pb-4 sm:px-8"><div className="min-w-0"><h2 className={F("text-[17px]/[22px] font-extrabold", G)}>Northwind roadmap</h2><p className={F(J, V, "mt-0.5 truncate")}>Regroup the board on any field. Dropping a card into a column sets that field on it.</p></div><div role="radiogroup" aria-label="Group by" className={F("inline-flex w-fit max-w-full items-stretch gap-1 rounded-[calc(var(--rb-r-full,999px)_+_min(4px,var(--rb-r-full,999px)))] bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] p-1", "h-10", "shrink-0")}>{es.map(e => <button type="button" role="radio" aria-checked={e.id === r} onClick={() => c(e.id)} className="relative inline-flex min-w-0 cursor-pointer items-center justify-center gap-1.5 whitespace-nowrap [&_svg]:shrink-0 rounded-[calc(var(--rb-r-full,999px))] px-4 text-[14px]/[18px] font-bold text-neutral-900/78 dark:text-neutral-100/78 select-none transition-[background-color,color,box-shadow,outline-color,scale] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:scale-[0.96] motion-reduce:active:scale-100 hover:not-aria-checked:text-neutral-900 aria-checked:bg-white aria-checked:text-neutral-900 aria-checked:shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_2px_rgb(84_62_32/0.10),0_3px_8px_-2px_rgb(84_62_32/0.20)] disabled:cursor-not-allowed disabled:text-neutral-900/40 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:hover:not-aria-checked:text-neutral-100 dark:aria-checked:bg-[color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800))] dark:aria-checked:text-neutral-100 dark:aria-checked:shadow-[inset_0_1px_0_rgb(255_255_255/0.1),0_0_0_1px_rgb(0_0_0/0.6),0_2px_5px_-1px_rgb(0_0_0/0.6)] dark:disabled:text-neutral-100/40">{e.label}</button>)}</div></header><div className="min-h-0 flex-1 overflow-x-auto overflow-y-hidden px-6 pb-6 sm:px-8"><div className="flex h-full min-w-max gap-2.5">{C.values.map(n => {
              let i = A.get(n) ?? [];
              return <section aria-label={n} className={F("relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 shadow-[inset_0_0_0_1px_rgb(84_62_32/0.05)] dark:shadow-[inset_0_0_0_1px_rgb(255_255_255/0.05)]", "h-full w-[260px] shrink-0")}><div className="flex min-h-12 min-w-0 shrink-0 items-center gap-2 px-4 has-[button]:pe-2.5">{"assignee" === r && <span className={F(ee, "size-[20px]")}><span className={et}>{ed(n)}</span></span>}<span className="min-w-0 truncate text-[16px]/[20px] font-extrabold text-neutral-900 dark:text-neutral-100">{n}</span><span className={F("shrink-0 text-[14px]/[20px] font-semibold tabular-nums text-neutral-900/62 dark:text-neutral-100/62", "ml-auto")}>{i.length}</span></div><div ref={e => {
                  e ? j.current.set(n, e) : j.current.delete(n);
                }} className={F("mx-1 mb-1 flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-5xl,22px))] border border-transparent bg-white dark:bg-neutral-950 shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] [&:has(+*)]:mb-0", "divide-y divide-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:divide-neutral-100/7", "min-h-0 flex-1 overflow-y-auto p-1")}>{i.map(i => {
                    let o = ec[i],
                      c = b === i,
                      x = m === i;
                    return <motion.div layoutId={t ? void 0 : `${e}-${i}`} transition={ei} data-card={i} className={F(c && F("rounded-[calc(var(--rb-r-lg,10px))] bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-100/8", er))}><div role="button" tabIndex={0} aria-roledescription="Draggable card" aria-label={`${o.ref}: ${o.title}. ${C.label} ${n}.`} onPointerDown={e => {
                        "mouse" === e.pointerType && M(e, i);
                      }} onKeyDown={e => ((e, t) => {
                        let a = d[t][r],
                          n = A.get(a) ?? [],
                          i = n.indexOf(t),
                          l = C.values.indexOf(a);
                        if (" " === e.key || "Enter" === e.key) {
                          e.preventDefault();
                          let r = m === t ? null : t;
                          f(r), w(r ? `${ec[t].ref} grabbed. Left and right change ${C.label.toLowerCase()}.` : `${ec[t].ref} dropped in ${a}.`);
                          return;
                        }
                        if ("Escape" === e.key && m === t) {
                          e.preventDefault(), f(null), w("Move cancelled.");
                          return;
                        }
                        if (m !== t) return;
                        let o = !0;
                        "ArrowLeft" === e.key && l > 0 ? R(t, C.values[l - 1], (A.get(C.values[l - 1]) ?? []).length) : "ArrowRight" === e.key && l < C.values.length - 1 ? R(t, C.values[l + 1], (A.get(C.values[l + 1]) ?? []).length) : "ArrowUp" === e.key && i > 0 ? R(t, a, i - 1) : "ArrowDown" === e.key && i < n.length - 1 ? R(t, a, i + 1) : o = !1, o && (e.preventDefault(), e.currentTarget.focus());
                      })(e, i)} className={F("relative flex min-h-12 w-full min-w-0 flex-wrap items-center gap-x-3 gap-y-1 py-2.5 text-left text-neutral-900 dark:text-neutral-100 transition-[background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] has-[[data-description]]:min-h-16", er, x ? "bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] dark:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)]" : F("hover:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] dark:hover:bg-neutral-100/6", "active:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] dark:active:bg-neutral-100/10"), "focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))]", "cursor-grab px-2", c && "invisible")}><div className="flex w-full items-center gap-2"><span className={F("text-[13px]/[16px] font-bold tabular-nums", e_[d[i].priority])}>{d[i].priority}</span><span className={F(Q, V)}>{o.ref}</span><span onPointerDown={e => M(e, i)} style={{
                            touchAction: "none"
                          }} aria-hidden={!0} className={F(V, "ml-auto -mr-0.5 cursor-grab")}><__mod_22728.n icon={__mod_60041.A} size={16} strokeWidth={2} aria-hidden="true" /></span></div><p className={F(ea, "w-full")}>{o.title}</p><div className="flex w-full items-center gap-2"><span className={F("inline-flex h-5.5 min-w-5.5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden whitespace-nowrap rounded-[calc(var(--rb-r-full,999px))] px-2.5 text-[12px]/[16px] font-bold tabular-nums", "bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] text-neutral-900 dark:text-neutral-100 dark:bg-neutral-100/12")}>{o.tag}</span>{"assignee" !== r && <span title={d[i].assignee} className={F(ee, "ml-auto size-[24px]")}><span className={et}>{ed(d[i].assignee)}</span></span>}</div></div></motion.div>;
                  })}{0 === i.length && <p className={F(J, V, "px-3 py-6 text-center")}>Nothing here yet</p>}</div></section>;
            })}</div></div><__mod_47962.N>{b && <motion.div initial={{
            opacity: .9
          }} animate={t ? {
            opacity: 1
          } : {
            opacity: 1,
            scale: 1.02,
            rotate: -1.5
          }} exit={{
            opacity: 0,
            transition: {
              duration: .12
            }
          }} transition={{
            duration: .16,
            ease: en
          }} style={{
            left: g.x,
            top: g.y,
            width: g.w
          }} className="pointer-events-none absolute z-50"><div className={F("relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] text-neutral-900 dark:text-neutral-100 shadow-[0_0_0_1px_rgb(84_62_32/0.07),0_1px_2px_rgb(84_62_32/0.06),0_8px_22px_-10px_rgb(84_62_32/0.20)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_0_0_1px_rgb(0_0_0/0.6),0_10px_24px_-12px_rgb(0_0_0/0.8)]", "shadow-[0_0_0_1px_rgb(84_62_32/0.08),0_24px_56px_-20px_rgb(84_62_32/0.34),0_6px_16px_-8px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.65),0_24px_56px_-16px_rgb(0_0_0/0.8)]", "gap-1 px-3 py-2")}><span className={F(Q, V)}>{ec[b].ref}</span><p className={ea}>{ec[b].title}</p></div></motion.div>}</__mod_47962.N><p aria-live="polite" className="sr-only">{v}</p></div>;
    },
    "kanban-4": function () {
      let e = (0, __mod_50969.I)(),
        [t, r] = (0, React.useState)(eL),
        [c, u] = (0, React.useState)("k1"),
        [p, b] = (0, React.useState)(null),
        [h, m] = (0, React.useState)({
          x: 0,
          y: 0,
          w: 0
        }),
        [f, g] = (0, React.useState)(""),
        k = (0, React.useRef)(null),
        v = (0, React.useRef)(new Map()),
        w = (0, React.useRef)(null),
        y = (0, React.useCallback)(e => Object.keys(t).find(r => t[r].includes(e)) ?? "todo", [t]),
        j = (0, React.useCallback)((e, t, a) => {
          r(r => {
            let n = {
                ...r
              },
              i = null;
            for (let t of Object.keys(n)) n[t].includes(e) && (i = t);
            if (!i || i === t && n[i].indexOf(e) === a) return r;
            n[i] = n[i].filter(t => t !== e);
            let l = i === t ? n[i] : [...n[t]];
            return l.splice(Math.max(0, Math.min(a, l.length)), 0, e), n[t] = l, n;
          });
        }, []),
        N = (0, React.useCallback)((e, t, r) => {
          for (let [a, n] of v.current) {
            let i = n.getBoundingClientRect();
            if (e < i.left || e > i.right) continue;
            let l = Array.from(n.querySelectorAll("[data-card]")).filter(e => e.dataset.card !== r),
              o = l.length;
            for (let e = 0; e < l.length; e++) {
              let r = l[e].getBoundingClientRect();
              if (t < r.top + r.height / 2) {
                o = e;
                break;
              }
            }
            return {
              col: a,
              index: o
            };
          }
          return null;
        }, []),
        C = (e, t) => {
          if (0 !== e.button) return;
          let r = e.currentTarget.closest("[data-card]"),
            a = k.current;
          if (!r || !a) return;
          e.preventDefault();
          let n = r.getBoundingClientRect();
          w.current = {
            id: t,
            dx: e.clientX - n.left,
            dy: e.clientY - n.top,
            w: n.width,
            active: !1,
            startX: e.clientX,
            startY: e.clientY,
            pointerId: e.pointerId
          }, a.setPointerCapture(e.pointerId), r.querySelector('[aria-roledescription="Draggable card"]')?.focus();
        },
        A = () => {
          let e = w.current;
          if (!e) return;
          w.current = null;
          let t = k.current;
          t?.hasPointerCapture?.(e.pointerId) && t.releasePointerCapture(e.pointerId), e.active ? g(`${eS[e.id].ref} moved to ${eM.find(t => t.id === y(e.id))?.name}.`) : u(e.id), b(null);
        },
        R = c ? eS[c] : null,
        P = c ? y(c) : "todo",
        M = (0, React.useMemo)(() => Object.values(t).reduce((e, t) => e + t.length, 0), [t]);
      return <div ref={k} onPointerMove={e => {
        let t = w.current,
          r = k.current;
        if (!t || !r) return;
        if (!t.active) {
          if (4 > Math.hypot(e.clientX - t.startX, e.clientY - t.startY)) return;
          t.active = !0, b(t.id);
        }
        let a = r.getBoundingClientRect();
        m({
          x: e.clientX - a.left - t.dx,
          y: e.clientY - a.top - t.dy,
          w: t.w
        });
        let n = N(e.clientX, e.clientY, t.id);
        n && j(t.id, n.col, n.index);
      }} onPointerUp={A} onPointerCancel={A} onLostPointerCapture={A} className={ex("bg-white dark:bg-neutral-950", eu, "relative flex h-full min-h-[720px] w-full flex-col overflow-hidden", p && "touch-none select-none")}><header className="shrink-0 px-6 pt-6 pb-4 sm:px-8"><h2 className={ex("text-[17px]/[22px] font-extrabold", eu)}>Cedar Labs delivery</h2><p className={ex(em, eb, "mt-0.5 truncate")}>{M} items. Click a card to open it, or drag it to another column.</p></header><div className="relative flex min-h-0 flex-1"><motion.div layout={!e} transition={eP} className={ex("min-h-0 min-w-0 flex-1 overflow-x-auto overflow-y-hidden px-6 pb-6 sm:px-8", R && "border-r border-transparent")}><div className="flex h-full min-w-max gap-2.5">{eM.map(r => {
                let n = t[r.id];
                return <section aria-label={r.name} className={ex("relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 shadow-[inset_0_0_0_1px_rgb(84_62_32/0.05)] dark:shadow-[inset_0_0_0_1px_rgb(255_255_255/0.05)]", "h-full w-[236px] shrink-0")}><div className={eN}><span className="min-w-0 truncate text-[16px]/[20px] font-extrabold text-neutral-900 dark:text-neutral-100">{r.name}</span><span className="shrink-0 text-[14px]/[20px] font-semibold tabular-nums text-neutral-900/62 dark:text-neutral-100/62">{n.length}</span></div><div ref={e => {
                    e ? v.current.set(r.id, e) : v.current.delete(r.id);
                  }} className={ex("mx-1 mb-1 flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-5xl,22px))] border border-transparent bg-white dark:bg-neutral-950 shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] [&:has(+*)]:mb-0", eh, "min-h-0 flex-1 overflow-y-auto p-1")}>{n.map(t => {
                      let r = eS[t],
                        n = p === t,
                        i = c === t;
                      return <motion.div layout={!e && "position"} transition={eP} data-card={t} className={ex(n && ex("rounded-[calc(var(--rb-r-lg,10px))] bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-100/8", eC))}><div role="button" tabIndex={0} aria-pressed={i} aria-roledescription="Draggable card" aria-label={`${r.ref}: ${r.title}`} onPointerDown={e => {
                          "mouse" === e.pointerType && C(e, t);
                        }} onClick={() => u(t)} onKeyDown={e => {
                          ("Enter" === e.key || " " === e.key) && (e.preventDefault(), u(t));
                        }} className={ex("relative flex min-h-12 w-full min-w-0 flex-wrap items-center gap-x-3 gap-y-1 py-2.5 text-left text-neutral-900 dark:text-neutral-100 transition-[background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] has-[[data-description]]:min-h-16", eC, i ? ex("bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] dark:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)]", "cursor-pointer") : "cursor-pointer hover:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] dark:hover:bg-neutral-100/6 active:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] dark:active:bg-neutral-100/10", "focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))]", "px-2", n && "invisible")}><div className="flex w-full items-center gap-2"><span className={ex(ef, eD[r.priority])}>{r.priority}</span><span className={ex(ek, eb)}>{r.ref}</span><span onPointerDown={e => C(e, t)} style={{
                              touchAction: "none"
                            }} aria-hidden={!0} className={ex(eb, "ml-auto -mr-0.5 cursor-grab")}><__mod_22728.n icon={__mod_60041.A} size={16} strokeWidth={2} aria-hidden="true" /></span></div><p className={ex(eA, "w-full")}>{r.title}</p><div className="flex w-full items-center gap-2"><span className={ex(ev, ew)}>{r.points} pts</span>{r.comments.length > 0 && <span className={ex(ef, eb, "inline-flex items-center gap-1")}><__mod_22728.n icon={__mod_36586.A} size={14} strokeWidth={2} aria-hidden="true" />{r.comments.length}</span>}<span title={r.assignee} className={ex(ey, "ml-auto size-[24px]")}><span className={ej}>{e$(r.assignee)}</span></span></div></div></motion.div>;
                    })}</div></section>;
              })}</div></motion.div><__mod_47962.N>{R && <motion.button type="button" aria-label="Close details" onClick={() => u(null)} initial={{
              opacity: 0
            }} animate={{
              opacity: 1
            }} exit={{
              opacity: 0,
              transition: {
                duration: .12 * !e
              }
            }} transition={{
              duration: .18 * !e,
              ease: eR
            }} className={ex("bg-[oklch(28%_0.02_70/0.3)] dark:bg-neutral-950/70", "absolute inset-0 z-30 cursor-pointer lg:hidden")} />}</__mod_47962.N><__mod_47962.N>{R && <motion.aside aria-label={`${R.ref} details`} initial={e ? {
              opacity: 0
            } : {
              x: 8,
              opacity: 0
            }} animate={e ? {
              opacity: 1
            } : {
              x: 0,
              opacity: 1
            }} exit={e ? {
              opacity: 0,
              transition: {
                duration: 0
              }
            } : {
              x: 8,
              opacity: 0,
              transition: {
                duration: .12,
                ease: eR
              }
            }} transition={{
              duration: .18 * !e,
              ease: eR
            }} className={ex("flex h-full min-h-0 flex-col bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 outline-none shadow-[0_0_0_1px_rgb(84_62_32/0.08),0_24px_56px_-20px_rgb(84_62_32/0.34),0_6px_16px_-8px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.65),0_24px_56px_-16px_rgb(0_0_0/0.8)]", "absolute inset-y-0 right-0 z-40 w-[min(100%,360px)] lg:relative lg:z-auto lg:w-[320px] lg:shrink-0")}><div className={ex(eN, "h-12")}><span className={ex(ek, eb)}>{R.ref}</span><span className={ex(ev, ew)}>{eM.find(e => e.id === P)?.name}</span><button type="button" onClick={() => u(null)} aria-label="Close details" className={ex("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-transparent text-neutral-900 hover:not-disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] active:not-disabled:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] disabled:text-neutral-900/40 dark:text-neutral-100 dark:hover:not-disabled:bg-neutral-100/8 dark:active:not-disabled:bg-neutral-100/12 dark:aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:disabled:text-neutral-100/40", "size-8 rounded-[calc(var(--rb-r-full,999px))]", "ml-auto")}><__mod_22728.n icon={__mod_89289.A} size={18} strokeWidth={2} aria-hidden="true" /></button></div><div className={ex("mx-1 mt-1 flex min-h-0 flex-1 flex-col overflow-y-auto rounded-[calc(var(--rb-r-5xl,22px))] border border-transparent bg-white dark:bg-neutral-950 shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] [&:last-child]:mb-1", "space-y-3 p-4")}><h3 className="text-[19px]/[24px] font-extrabold tracking-[-0.01em] text-neutral-900 dark:text-neutral-100">{R.title}</h3><dl className={eh}>{[{
                    k: "Assignee",
                    v: R.assignee
                  }, {
                    k: "Priority",
                    v: R.priority
                  }, {
                    k: "Estimate",
                    v: `${R.points} points`
                  }].map(e => <div className="flex min-h-10 items-center justify-between gap-4 py-2"><dt className="min-w-0 text-[15px]/[20px] font-bold text-neutral-900/62 dark:text-neutral-100/62">{e.k}</dt><dd className="flex min-w-0 flex-wrap items-center gap-2 text-[15px]/[22px] font-medium text-neutral-900 dark:text-neutral-100 [overflow-wrap:anywhere]">{e.v}</dd></div>)}</dl><div><p className={ex(eg, eb, "mb-1.5")}>Move to</p><div className="grid grid-cols-2 gap-1">{eM.map(e => <button type="button" aria-pressed={e.id === P} onClick={() => {
                      j(R.id, e.id, t[e.id].length), g(`${R.ref} moved to ${e.name}.`);
                    }} className={ex("relative inline-flex h-7 max-w-full min-w-0 shrink-0 cursor-pointer items-center gap-1.5 whitespace-nowrap rounded-[calc(var(--rb-r-full,999px))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] px-3 text-[13px]/[16px] font-bold tabular-nums text-neutral-900 dark:text-neutral-100 select-none transition-[background-color,border-color,box-shadow,color,scale,translate,outline-color] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:translate-y-px active:duration-[90ms] motion-reduce:active:translate-y-0 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] aria-pressed:bg-none aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-pressed:shadow-[inset_0_0_0_1.5px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14)] disabled:cursor-not-allowed disabled:text-neutral-900/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-pressed:shadow-[inset_0_0_0_1.5px_var(--rb-accent,oklch(81%_0.16_163))] dark:aria-expanded:bg-neutral-800 dark:disabled:text-neutral-100/40", "justify-center")}>{e.name}</button>)}</div></div><p className={ex(em, ep)}>{R.summary}</p><div><p className={ex(eg, eb, "mb-1.5")}>Activity</p>{0 === R.comments.length ? <p className={ex(em, eb, "px-3 py-4 text-center")}>No comments yet</p> : <ul className={eh}>{R.comments.map((e, t) => <li className="py-2.5"><div className="flex items-center gap-2"><span className={ex(ey, "size-[20px]")}><span className={ej}>{e$(e.who)}</span></span><span className={ex("text-[15px]/[20px] font-bold", eu)}>{e.who}</span><span className={ex(eg, eb)}>{e.when}</span></div><p className={ex(em, ep, "mt-1.5")}>{e.text}</p></li>)}</ul>}</div></div></motion.aside>}</__mod_47962.N></div><__mod_47962.N>{p && <motion.div initial={{
            opacity: .9
          }} animate={e ? {
            opacity: 1
          } : {
            opacity: 1,
            scale: 1.02,
            rotate: -1.5
          }} exit={{
            opacity: 0,
            transition: {
              duration: .12
            }
          }} transition={{
            duration: .16,
            ease: eR
          }} style={{
            left: h.x,
            top: h.y,
            width: h.w
          }} className="pointer-events-none absolute z-50"><div className={ex("relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] text-neutral-900 dark:text-neutral-100 shadow-[0_0_0_1px_rgb(84_62_32/0.07),0_1px_2px_rgb(84_62_32/0.06),0_8px_22px_-10px_rgb(84_62_32/0.20)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_0_0_1px_rgb(0_0_0/0.6),0_10px_24px_-12px_rgb(0_0_0/0.8)]", "shadow-[0_0_0_1px_rgb(84_62_32/0.08),0_24px_56px_-20px_rgb(84_62_32/0.34),0_6px_16px_-8px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.65),0_24px_56px_-16px_rgb(0_0_0/0.8)]", "gap-1 px-3 py-2")}><span className={ex(ek, eb)}>{eS[p].ref}</span><p className={eA}>{eS[p].title}</p></div></motion.div>}</__mod_47962.N><p aria-live="polite" className="sr-only">{f}</p></div>;
    },
    "kanban-5": function () {
      let e = (0, __mod_50969.I)(),
        [t, r] = (0, React.useState)(eZ),
        [c, d] = (0, React.useState)(null),
        [x, u] = (0, React.useState)(null),
        [p, b] = (0, React.useState)({
          x: 0,
          y: 0,
          w: 0
        }),
        [h, m] = (0, React.useState)(""),
        f = (0, React.useRef)(null),
        g = (0, React.useRef)(new Map()),
        k = (0, React.useRef)(null),
        v = (0, React.useCallback)(e => Object.keys(t).find(r => t[r].includes(e)) ?? "committed", [t]),
        w = (0, React.useCallback)((e, t, a) => {
          r(r => {
            let n = {
                ...r
              },
              i = null;
            for (let t of Object.keys(n)) n[t].includes(e) && (i = t);
            if (!i || i === t && n[i].indexOf(e) === a) return r;
            n[i] = n[i].filter(t => t !== e);
            let l = i === t ? n[i] : [...n[t]];
            return l.splice(Math.max(0, Math.min(a, l.length)), 0, e), n[t] = l, n;
          });
        }, []),
        y = (0, React.useCallback)((e, t, r) => {
          for (let [a, n] of g.current) {
            let i = n.getBoundingClientRect();
            if (e < i.left || e > i.right) continue;
            let l = Array.from(n.querySelectorAll("[data-card]")).filter(e => e.dataset.card !== r),
              o = l.length;
            for (let e = 0; e < l.length; e++) {
              let r = l[e].getBoundingClientRect();
              if (t < r.top + r.height / 2) {
                o = e;
                break;
              }
            }
            return {
              col: a,
              index: o
            };
          }
          return null;
        }, []),
        j = (e, t) => {
          if (0 !== e.button) return;
          let r = e.currentTarget.closest("[data-card]"),
            a = f.current;
          if (!r || !a) return;
          e.preventDefault();
          let n = r.getBoundingClientRect();
          k.current = {
            id: t,
            dx: e.clientX - n.left,
            dy: e.clientY - n.top,
            w: n.width,
            active: !1,
            startX: e.clientX,
            startY: e.clientY,
            pointerId: e.pointerId
          }, a.setPointerCapture(e.pointerId), r.querySelector('[aria-roledescription="Draggable card"]')?.focus();
        },
        N = () => {
          let e = k.current;
          if (!e) return;
          k.current = null;
          let t = f.current;
          t?.hasPointerCapture?.(e.pointerId) && t.releasePointerCapture(e.pointerId), e.active && m(`${eK[e.id].ref} moved to ${eq.find(t => t.id === v(e.id))?.name}.`), d(null);
        },
        C = (0, React.useMemo)(() => {
          let e = {};
          for (let r of eq) e[r.id] = t[r.id].reduce((e, t) => e + eK[t].points, 0);
          return e;
        }, [t]),
        A = Object.values(C).reduce((e, t) => e + t, 0),
        R = C.accepted,
        P = A ? Math.round(R / A * 100) : 0;
      return <div ref={f} onPointerMove={e => {
        let t = k.current,
          r = f.current;
        if (!t || !r) return;
        if (!t.active) {
          if (4 > Math.hypot(e.clientX - t.startX, e.clientY - t.startY)) return;
          t.active = !0, u(null), d(t.id);
        }
        let a = r.getBoundingClientRect();
        b({
          x: e.clientX - a.left - t.dx,
          y: e.clientY - a.top - t.dy,
          w: t.w
        });
        let n = y(e.clientX, e.clientY, t.id);
        n && w(t.id, n.col, n.index);
      }} onPointerUp={N} onPointerCancel={N} onLostPointerCapture={N} className={ez("bg-white dark:bg-neutral-950", eI, "relative flex h-full min-h-[680px] w-full flex-col overflow-hidden", c && "touch-none select-none")}><header className="shrink-0 px-6 pt-6 pb-4 sm:px-8"><div className="mb-3 flex flex-wrap items-end justify-between gap-3"><div className="min-w-0"><h2 className={ez("text-[17px]/[22px] font-extrabold", eI, "flex flex-wrap gap-x-2")}><span>Sprint 34</span><span className={eW}>Meridian</span></h2><p className={ez(eB, eW, "mt-0.5 truncate")}>4 June to 18 June. Six days left. Columns show points against capacity.</p></div></div><div className="@container rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.07),0_1px_2px_rgb(84_62_32/0.06),0_8px_22px_-10px_rgb(84_62_32/0.20)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_0_0_1px_rgb(0_0_0/0.6),0_10px_24px_-12px_rgb(0_0_0/0.8)] p-1"><div className="grid grid-cols-2 gap-1 [&>:last-child:nth-child(odd)]:col-span-full @3xl:grid-flow-col @3xl:grid-cols-none @3xl:auto-cols-fr @3xl:[&>:last-child:nth-child(odd)]:col-auto">{[{
                k: "Committed",
                v: A,
                unit: "pts"
              }, {
                k: "Accepted",
                v: R,
                unit: "pts"
              }, {
                k: "Burned",
                v: P,
                unit: "%"
              }].map(e => <div className="flex min-w-0 flex-col gap-2 rounded-[calc(var(--rb-r-5xl,22px))] bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] px-3 py-3.5 dark:bg-neutral-100/4"><p className="text-[14px]/[20px] font-bold text-neutral-900/78 dark:text-neutral-100/78">{e.k}</p><p className="flex min-w-0 flex-wrap items-baseline gap-x-1 text-[22px]/[28px] font-extrabold tracking-[-0.01em] tabular-nums text-neutral-900 dark:text-neutral-100">{e.v}<span className="ms-0.5 text-[15px]/[20px] font-bold tracking-normal text-neutral-900/78 dark:text-neutral-100/78">{e.unit}</span></p></div>)}</div></div></header><div className="min-h-0 flex-1 overflow-x-auto overflow-y-hidden px-6 pb-6 sm:px-8"><div className="flex h-full min-w-max gap-2.5">{eq.map(r => {
              let n = t[r.id],
                i = C[r.id],
                o = r.capacity > 0 && i > r.capacity,
                d = r.capacity ? Math.min(100, i / r.capacity * 100) : 0;
              return <section aria-label={r.name} className={ez("relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 shadow-[inset_0_0_0_1px_rgb(84_62_32/0.05)] dark:shadow-[inset_0_0_0_1px_rgb(255_255_255/0.05)]", "h-full w-[244px] shrink-0")}><div className="shrink-0 px-4 py-2"><div className="flex h-6 items-center gap-2"><span className="min-w-0 truncate text-[16px]/[20px] font-extrabold text-neutral-900 dark:text-neutral-100">{r.name}</span><span className={ez(o ? eT : "shrink-0 text-[14px]/[20px] font-semibold tabular-nums text-neutral-900/62 dark:text-neutral-100/62", "ml-auto")}>{i}{r.capacity > 0 ? ` / ${r.capacity} pts` : " pts"}</span></div><div className="mt-1.5">{r.capacity > 0 ? <div role="progressbar" aria-valuemin={0} aria-valuemax={r.capacity} aria-valuenow={i} aria-label={`${r.name} capacity`} className={eE}><span style={{
                        width: `${d}%`
                      }} className={o ? ez("bg-[oklch(80%_0.152_68)] dark:bg-[oklch(80%_0.152_68)]", "block h-full") : "block h-full rounded-[calc(var(--rb-r-full,999px))] bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_82%,black)] shadow-[inset_0_1px_0_rgb(255_255_255/0.35)] transition-[width] duration-[420ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] motion-reduce:transition-none dark:bg-[var(--rb-accent,oklch(81%_0.16_163))]"} /></div> : <div aria-hidden="true" className={ez(eE, "invisible")} />}</div></div><div ref={e => {
                  e ? g.current.set(r.id, e) : g.current.delete(r.id);
                }} className={ez("mx-1 mb-1 flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-5xl,22px))] border border-transparent bg-white dark:bg-neutral-950 shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] [&:has(+*)]:mb-0", "divide-y divide-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:divide-neutral-100/7", "min-h-0 flex-1 overflow-y-auto p-1")}>{n.map(r => {
                    let n = eK[r],
                      i = c === r,
                      o = x === r;
                    return <motion.div layout={!e && "position"} transition={eU} data-card={r} className={ez(i && ez("rounded-[calc(var(--rb-r-lg,10px))] bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-100/8", eY))}><div role="button" tabIndex={0} aria-roledescription="Draggable card" aria-label={`${n.ref}: ${n.title}, ${n.points} points${n.blocked ? ", blocked" : ""}.`} onPointerDown={e => {
                        "mouse" === e.pointerType && j(e, r);
                      }} onKeyDown={e => ((e, r) => {
                        let a = v(r),
                          n = t[a].indexOf(r),
                          i = eq.findIndex(e => e.id === a);
                        if (" " === e.key || "Enter" === e.key) {
                          e.preventDefault();
                          let t = x === r ? null : r;
                          u(t), m(t ? `${eK[r].ref} grabbed. Arrow keys move it.` : `${eK[r].ref} dropped in ${eq[i].name}.`);
                          return;
                        }
                        if ("Escape" === e.key && x === r) {
                          e.preventDefault(), u(null), m("Move cancelled.");
                          return;
                        }
                        if (x !== r) return;
                        let l = !0;
                        "ArrowUp" === e.key ? w(r, a, Math.max(0, n - 1)) : "ArrowDown" === e.key ? w(r, a, n + 1) : "ArrowLeft" === e.key && i > 0 ? w(r, eq[i - 1].id, t[eq[i - 1].id].length) : "ArrowRight" === e.key && i < eq.length - 1 ? w(r, eq[i + 1].id, t[eq[i + 1].id].length) : l = !1, l && (e.preventDefault(), e.currentTarget.focus());
                      })(e, r)} className={ez("relative flex min-h-12 w-full min-w-0 flex-wrap items-center gap-x-3 gap-y-1 py-2.5 text-left text-neutral-900 dark:text-neutral-100 transition-[background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] has-[[data-description]]:min-h-16", eY, o ? "bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] dark:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)]" : ez("hover:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] dark:hover:bg-neutral-100/6", "active:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] dark:active:bg-neutral-100/10"), "focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))]", "cursor-grab px-2", i && "invisible")}><div className="flex w-full items-center gap-1.5"><span className={ez(eX, eW)}>{n.ref}</span>{n.blocked && <span className={ez("inline-flex items-start gap-1 text-[14px]/[20px] font-bold tabular-nums", "text-[oklch(49%_0.1_68)] dark:text-[oklch(80%_0.13_68)]")}>Blocked</span>}<span onPointerDown={e => j(e, r)} style={{
                            touchAction: "none"
                          }} aria-hidden={!0} className={ez(eW, "ml-auto -mr-0.5 cursor-grab")}><__mod_22728.n icon={__mod_60041.A} size={16} strokeWidth={2} aria-hidden="true" /></span></div><p className={ez(eH, "w-full")}>{n.title}</p><div className="flex w-full items-center gap-2"><span className={ez("inline-flex h-5.5 min-w-5.5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden whitespace-nowrap rounded-[calc(var(--rb-r-full,999px))] px-2.5 text-[12px]/[16px] font-bold tabular-nums", "bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] text-neutral-900 dark:text-neutral-100 dark:bg-neutral-100/12")}>{n.points}</span><span title={n.assignee} className={ez("relative inline-flex size-8 shrink-0 overflow-hidden rounded-full select-none", "ml-auto size-[24px]")}><span className="flex size-full items-center justify-center rounded-[inherit] bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_24%,white)] text-[12px]/[16px] font-extrabold tabular-nums text-neutral-900 dark:text-neutral-100 dark:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_22%,var(--color-neutral-900))]">{n.assignee.split(/[\s-]+/).filter(Boolean).slice(0, 1).map(e => e[0]?.toUpperCase()).join("")}</span></span></div></div></motion.div>;
                  })}{0 === n.length && <p className={ez(eB, eW, "px-2 py-6 text-center")}>Nothing here yet</p>}</div></section>;
            })}</div></div><__mod_47962.N>{c && <motion.div initial={{
            opacity: .9
          }} animate={e ? {
            opacity: 1
          } : {
            opacity: 1,
            scale: 1.02,
            rotate: -1.5
          }} exit={{
            opacity: 0,
            transition: {
              duration: .12
            }
          }} transition={{
            duration: .16,
            ease: eO
          }} style={{
            left: p.x,
            top: p.y,
            width: p.w
          }} className="pointer-events-none absolute z-50"><div className={ez("relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] text-neutral-900 dark:text-neutral-100 shadow-[0_0_0_1px_rgb(84_62_32/0.07),0_1px_2px_rgb(84_62_32/0.06),0_8px_22px_-10px_rgb(84_62_32/0.20)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_0_0_1px_rgb(0_0_0/0.6),0_10px_24px_-12px_rgb(0_0_0/0.8)]", "shadow-[0_0_0_1px_rgb(84_62_32/0.08),0_24px_56px_-20px_rgb(84_62_32/0.34),0_6px_16px_-8px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.65),0_24px_56px_-16px_rgb(0_0_0/0.8)]", "gap-1 px-3 py-2")}><span className={ez(eX, eW)}>{eK[c].ref}</span><p className={eH}>{eK[c].title}</p></div></motion.div>}</__mod_47962.N><p aria-live="polite" className="sr-only">{h}</p></div>;
    },
    "kanban-6": function () {
      let e = (0, __mod_50969.I)(),
        [t, r] = (0, React.useState)(te),
        [c, d] = (0, React.useState)("inbox"),
        [x, u] = (0, React.useState)(null),
        [p, b] = (0, React.useState)({
          x: 0,
          y: 0,
          w: 0
        }),
        [h, m] = (0, React.useState)(""),
        f = (0, React.useRef)(null),
        g = (0, React.useRef)(new Map()),
        k = (0, React.useRef)(null),
        v = (0, React.useCallback)(e => Object.keys(t).find(r => t[r].includes(e)) ?? "inbox", [t]),
        w = (0, React.useCallback)((e, t, a) => {
          r(r => {
            let n = {
                ...r
              },
              i = null;
            for (let t of Object.keys(n)) n[t].includes(e) && (i = t);
            if (!i || i === t && n[i].indexOf(e) === a) return r;
            n[i] = n[i].filter(t => t !== e);
            let l = i === t ? n[i] : [...n[t]];
            return l.splice(Math.max(0, Math.min(a, l.length)), 0, e), n[t] = l, n;
          });
        }, []),
        y = (e, r) => {
          let a = e3.findIndex(t => t.id === v(e)),
            n = e3[a + r];
          n && (w(e, n.id, t[n.id].length), m(`${e7[e].title} moved to ${n.name}.`));
        },
        j = (0, React.useCallback)((e, t, r) => {
          for (let [a, n] of g.current) {
            let i = n.getBoundingClientRect();
            if (e < i.left || e > i.right || 0 === i.width || 0 === i.height) continue;
            let l = Array.from(n.querySelectorAll("[data-card]")).filter(e => e.dataset.card !== r),
              o = l.length;
            for (let e = 0; e < l.length; e++) {
              let r = l[e].getBoundingClientRect();
              if (t < r.top + r.height / 2) {
                o = e;
                break;
              }
            }
            return {
              col: a,
              index: o
            };
          }
          return null;
        }, []),
        N = (e, t) => {
          if (0 !== e.button) return;
          let r = e.currentTarget.closest("[data-card]"),
            a = f.current;
          if (!r || !a) return;
          e.preventDefault();
          let n = r.getBoundingClientRect();
          k.current = {
            id: t,
            dx: e.clientX - n.left,
            dy: e.clientY - n.top,
            w: n.width,
            active: !1,
            startX: e.clientX,
            startY: e.clientY,
            pointerId: e.pointerId
          }, a.setPointerCapture(e.pointerId), r.querySelector('[aria-roledescription="Draggable card"]')?.focus();
        },
        C = () => {
          let e = k.current;
          if (!e) return;
          k.current = null;
          let t = f.current;
          t?.hasPointerCapture?.(e.pointerId) && t.releasePointerCapture(e.pointerId), e.active && m(`${e7[e.id].title} moved to ${e3.find(t => t.id === v(e.id))?.name}.`), u(null);
        },
        A = (0, React.useMemo)(() => Object.values(t).reduce((e, t) => e + t.length, 0), [t]);
      return <div ref={f} onPointerMove={e => {
        let t = k.current,
          r = f.current;
        if (!t || !r) return;
        if (!t.active) {
          if (4 > Math.hypot(e.clientX - t.startX, e.clientY - t.startY)) return;
          t.active = !0, u(t.id);
        }
        let a = r.getBoundingClientRect();
        b({
          x: e.clientX - a.left - t.dx,
          y: e.clientY - a.top - t.dy,
          w: t.w
        });
        let n = j(e.clientX, e.clientY, t.id);
        n && w(t.id, n.col, n.index);
      }} onPointerUp={C} onPointerCancel={C} onLostPointerCapture={C} className={eV("bg-white dark:bg-neutral-950", eJ, "relative flex h-full min-h-[680px] w-full flex-col overflow-hidden", x && "touch-none select-none")}><header className="shrink-0 px-6 pt-6 pb-3 sm:px-8"><h2 className={eV("text-[17px]/[22px] font-extrabold", eJ)}>Harbor tasks</h2><p className={eV(e0, eQ, "mt-0.5 truncate")}>{A} tasks. Drag on a wide screen, or use the arrows on a card to move it one column at a time.</p></header><div className="mx-6 mb-3 shrink-0 sm:mx-8 md:hidden"><div role="radiogroup" aria-label="Column" className={eV("inline-flex w-fit max-w-full items-stretch gap-1 rounded-[calc(var(--rb-r-full,999px)_+_min(4px,var(--rb-r-full,999px)))] bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] p-1", "h-10", "w-full overflow-x-auto")}>{e3.map(e => <button type="button" role="radio" aria-checked={e.id === c} onClick={() => d(e.id)} className={eV("relative inline-flex min-w-0 cursor-pointer items-center justify-center gap-1.5 whitespace-nowrap [&_svg]:shrink-0 rounded-[calc(var(--rb-r-full,999px))] px-4 text-[14px]/[18px] font-bold text-neutral-900/78 dark:text-neutral-100/78 select-none transition-[background-color,color,box-shadow,outline-color,scale] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:scale-[0.96] motion-reduce:active:scale-100 hover:not-aria-checked:text-neutral-900 aria-checked:bg-white aria-checked:text-neutral-900 aria-checked:shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_2px_rgb(84_62_32/0.10),0_3px_8px_-2px_rgb(84_62_32/0.20)] disabled:cursor-not-allowed disabled:text-neutral-900/40 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:hover:not-aria-checked:text-neutral-100 dark:aria-checked:bg-[color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800))] dark:aria-checked:text-neutral-100 dark:aria-checked:shadow-[inset_0_1px_0_rgb(255_255_255/0.1),0_0_0_1px_rgb(0_0_0/0.6),0_2px_5px_-1px_rgb(0_0_0/0.6)] dark:disabled:text-neutral-100/40", "flex-1")}>{e.name}<span className="ms-0.5 text-[13px]/[16px] font-bold tabular-nums text-neutral-900/62 dark:text-neutral-100/62">{t[e.id].length}</span></button>)}</div></div><div className="min-h-0 flex-1 overflow-x-auto overflow-y-hidden px-6 pb-6 sm:px-8"><div className="flex h-full gap-2.5 md:min-w-max">{e3.map(r => {
              let n = t[r.id],
                i = e3.findIndex(e => e.id === r.id),
                o = r.id === c;
              return <section aria-label={r.name} className={eV("relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 shadow-[inset_0_0_0_1px_rgb(84_62_32/0.05)] dark:shadow-[inset_0_0_0_1px_rgb(255_255_255/0.05)]", "h-full md:w-[248px] md:shrink-0", o ? "w-full" : "max-md:hidden")}><div className={eV("flex min-h-12 min-w-0 shrink-0 items-center gap-2 px-4 has-[button]:pe-2.5", "max-md:hidden")}><span className="min-w-0 truncate text-[16px]/[20px] font-extrabold text-neutral-900 dark:text-neutral-100">{r.name}</span><span className="shrink-0 text-[14px]/[20px] font-semibold tabular-nums text-neutral-900/62 dark:text-neutral-100/62">{n.length}</span></div><div ref={e => {
                  e ? g.current.set(r.id, e) : g.current.delete(r.id);
                }} className={eV("mx-1 mb-1 flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-5xl,22px))] border border-transparent bg-white dark:bg-neutral-950 shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] [&:has(+*)]:mb-0", "divide-y divide-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:divide-neutral-100/7", "min-h-0 flex-1 overflow-y-auto p-1 max-md:mt-1")}>{n.map(t => {
                    let r = e7[t],
                      n = x === t;
                    return <motion.div layout={!e && "position"} transition={e9} data-card={t} className={eV(n && eV("rounded-[calc(var(--rb-r-lg,10px))] bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-100/8", e6))}><div className={eV("relative flex min-h-12 w-full min-w-0 flex-wrap items-center gap-x-3 gap-y-1 py-2.5 text-left text-neutral-900 dark:text-neutral-100 transition-[background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] has-[[data-description]]:min-h-16", e6, "hover:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] dark:hover:bg-neutral-100/6", "px-2", n && "invisible")}><div role="button" tabIndex={0} aria-roledescription="Draggable card" aria-label={`${r.title}. ${r.done} of ${r.total} subtasks done.`} onPointerDown={e => {
                          "mouse" === e.pointerType && N(e, t);
                        }} className={eV("focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))]", "flex w-full cursor-grab flex-col gap-1.5 text-left")}><div className="flex items-center gap-1.5"><span className={eV(e1, eQ, "truncate")}>{r.list}</span><span onPointerDown={e => N(e, t)} style={{
                              touchAction: "none"
                            }} aria-hidden={!0} className={eV(eQ, "ml-auto -mr-0.5 hidden cursor-grab md:inline")}><__mod_22728.n icon={__mod_60041.A} size={16} strokeWidth={2} aria-hidden="true" /></span></div><p className={e8}>{r.title}</p></div><div className="flex w-full items-center gap-2"><span className={eV("inline-flex h-5.5 min-w-5.5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden whitespace-nowrap rounded-[calc(var(--rb-r-full,999px))] px-2.5 text-[12px]/[16px] font-bold tabular-nums", "bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] text-neutral-900 dark:text-neutral-100 dark:bg-neutral-100/12")}>{r.done === r.total && <__mod_22728.n icon={__mod_90987.A} size={14} strokeWidth={2} aria-hidden="true" />}{r.done}/{r.total}</span><span title={r.assignee} className={eV("relative inline-flex size-8 shrink-0 overflow-hidden rounded-full select-none", "size-[24px]")}><span className="flex size-full items-center justify-center rounded-[inherit] bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_24%,white)] text-[12px]/[16px] font-extrabold tabular-nums text-neutral-900 dark:text-neutral-100 dark:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_22%,var(--color-neutral-900))]">{r.assignee.split(/[\s-]+/).filter(Boolean).slice(0, 1).map(e => e[0]?.toUpperCase()).join("")}</span></span><div className="ml-auto flex items-center gap-0.5"><button type="button" disabled={0 === i} onClick={() => y(t, -1)} aria-label={`Move ${r.title} to ${e3[i - 1]?.name ?? "previous column"}`} className={eV(e2, e5)}><__mod_22728.n icon={__mod_58661.A} size={18} strokeWidth={2} aria-hidden="true" /></button><button type="button" disabled={i === e3.length - 1} onClick={() => y(t, 1)} aria-label={`Move ${r.title} to ${e3[i + 1]?.name ?? "next column"}`} className={eV(e2, e5)}><__mod_22728.n icon={__mod_5042.A} size={18} strokeWidth={2} aria-hidden="true" /></button></div></div></div></motion.div>;
                  })}{0 === n.length && <p className={eV(e0, eQ, "px-3 py-6 text-center")}>Nothing here yet</p>}</div></section>;
            })}</div></div><__mod_47962.N>{x && <motion.div initial={{
            opacity: .9
          }} animate={e ? {
            opacity: 1
          } : {
            opacity: 1,
            scale: 1.02,
            rotate: -1.5
          }} exit={{
            opacity: 0,
            transition: {
              duration: .12
            }
          }} transition={{
            duration: .16,
            ease: e4
          }} style={{
            left: p.x,
            top: p.y,
            width: p.w
          }} className="pointer-events-none absolute z-50"><div className={eV("relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] text-neutral-900 dark:text-neutral-100 shadow-[0_0_0_1px_rgb(84_62_32/0.07),0_1px_2px_rgb(84_62_32/0.06),0_8px_22px_-10px_rgb(84_62_32/0.20)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_0_0_1px_rgb(0_0_0/0.6),0_10px_24px_-12px_rgb(0_0_0/0.8)]", "shadow-[0_0_0_1px_rgb(84_62_32/0.08),0_24px_56px_-20px_rgb(84_62_32/0.34),0_6px_16px_-8px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.65),0_24px_56px_-16px_rgb(0_0_0/0.8)]", "gap-1 px-3 py-2")}><span className={eV(e1, eQ)}>{e7[x].list}</span><p className={e8}>{e7[x].title}</p></div></motion.div>}</__mod_47962.N><p aria-live="polite" className="sr-only">{h}</p></div>;
    }
  },
  tr = {
    "kanban-1": 680,
    "kanban-2": 720,
    "kanban-3": 680,
    "kanban-4": 720,
    "kanban-5": 680,
    "kanban-6": 680
  };

export { tt as components };
export { tr as heights };

import { motion, AnimatePresence } from "motion/react";
import * as __mod_17384 from "../_helpers/17384";
import * as __mod_66575 from "../_helpers/66575";
import * as __mod_13473 from "../_helpers/13473";
import * as __mod_2139 from "../_helpers/2139";
import * as __mod_34951 from "../_helpers/34951";
import * as __mod_92190 from "../_helpers/92190";
import * as __mod_68686 from "../_helpers/68686";
import * as __mod_33276 from "../_helpers/33276";
import * as __mod_48094 from "../_helpers/48094";
import * as __mod_22830 from "../_helpers/22830";
import * as __mod_18327 from "../_helpers/18327";
import * as __mod_2972 from "../_helpers/2972";
import * as __mod_32406 from "../_helpers/32406";
import * as __mod_36586 from "../_helpers/36586";
import * as __mod_68142 from "../_helpers/68142";
import * as __mod_91418 from "../_helpers/91418";
import * as __mod_95735 from "../_helpers/95735";
import * as __mod_88366 from "../_helpers/88366";
import * as __mod_65174 from "../_helpers/65174";
import * as __mod_20484 from "../_helpers/20484";
import * as __mod_3175 from "../_helpers/3175";
import * as __mod_50969 from "../_helpers/50969";
import * as __mod_22728 from "../_helpers/22728";
import * as __mod_68656 from "../_helpers/68656";
import * as __mod_47962 from "../_helpers/47962";
import * as __mod_5042 from "../_helpers/5042";
import * as __mod_94089 from "../_helpers/94089";
import * as __mod_89886 from "../_helpers/89886";
import * as __mod_1497 from "../_helpers/1497";
import * as __mod_68820 from "../_helpers/68820";
import * as __mod_89289 from "../_helpers/89289";
import * as __mod_24513 from "../_helpers/24513";
import * as __mod_1836 from "../_helpers/1836";
import * as __mod_48318 from "../_helpers/48318";
/**
 * Mobile 1
 * slug: mobile-1
 * category: mobile
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let h = (...e) => e.filter(Boolean).join(" "),
  m = "bg-white dark:bg-neutral-950",
  k = "hover:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] dark:hover:bg-neutral-100/6",
  f = "rounded-[var(--rb-r-4xl,18px)]",
  v = "text-neutral-900 dark:text-neutral-100",
  g = "text-neutral-900/78 dark:text-neutral-100/78",
  w = "text-neutral-900/62 dark:text-neutral-100/62",
  y = "focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))]",
  j = "transition-[color,background-color,border-color,box-shadow,outline-color,opacity,scale,translate] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms]",
  N = h(f, j, y),
  A = {
    type: "spring",
    bounce: 0,
    duration: .35
  },
  z = [.2, 0, 0, 1],
  C = [{
    id: "home",
    label: "Home",
    icon: __mod_17384.A,
    badge: 0
  }, {
    id: "search",
    label: "Search",
    icon: __mod_66575.A,
    badge: 0
  }, {
    id: "activity",
    label: "Activity",
    icon: __mod_13473.A,
    badge: 3
  }, {
    id: "saved",
    label: "Saved",
    icon: __mod_2139.A,
    badge: 0
  }, {
    id: "profile",
    label: "You",
    icon: __mod_34951.A,
    badge: 0
  }],
  S = {
    home: {
      title: "Today",
      caption: "4 updates since you last looked",
      rows: [{
        title: "Northwind renewed for 12 months",
        meta: ["Deals", "8m ago"]
      }, {
        title: "Weekly summary is ready",
        meta: ["Reports", "40m ago"]
      }, {
        title: "Cedar Labs opened a ticket",
        meta: ["Support", "1h ago"]
      }, {
        title: "Payout of $4,120 settled",
        meta: ["Billing", "3h ago"]
      }, {
        title: "Harbor Coffee added two seats",
        meta: ["Accounts", "5h ago"]
      }, {
        title: "Two invoices moved to overdue",
        meta: ["Billing", "6h ago"]
      }, {
        title: "Meridian pilot enters week three",
        meta: ["Deals", "9h ago"]
      }]
    },
    search: {
      title: "Recent searches",
      caption: "Tap a term to run it again",
      rows: [{
        title: "invoices status:overdue",
        meta: ["Saved filter"]
      }, {
        title: "Meridian",
        meta: ["Account"]
      }, {
        title: "renewal Q3",
        meta: ["12 results"]
      }, {
        title: "owner:me updated:7d",
        meta: ["Saved filter"]
      }, {
        title: "Cedar Labs",
        meta: ["Account"]
      }, {
        title: "seats > 20",
        meta: ["31 results"]
      }, {
        title: "payout july",
        meta: ["6 results"]
      }]
    },
    activity: {
      title: "Activity",
      caption: "3 items need a reply",
      rows: [{
        title: "Priya mentioned you on Deal 4192",
        meta: ["Needs reply", "12m"]
      }, {
        title: "Approval requested: refund $240",
        meta: ["Needs reply", "55m"]
      }, {
        title: "Ana assigned you a ticket",
        meta: ["Needs reply", "2h"]
      }, {
        title: "Import finished with 2 warnings",
        meta: ["System", "4h"]
      }, {
        title: "Deal 4188 moved to Contract sent",
        meta: ["System", "5h"]
      }, {
        title: "Marco left a note on Alder Group",
        meta: ["System", "7h"]
      }, {
        title: "Weekly export delivered",
        meta: ["System", "9h"]
      }]
    },
    saved: {
      title: "Saved",
      caption: "Pinned records and views",
      rows: [{
        title: "Enterprise pipeline",
        meta: ["View", "34 records"]
      }, {
        title: "Alder Group",
        meta: ["Account"]
      }, {
        title: "Churn risk this month",
        meta: ["View", "9 records"]
      }, {
        title: "Northwind Supply",
        meta: ["Account"]
      }, {
        title: "Invoices awaiting approval",
        meta: ["View", "6 records"]
      }, {
        title: "Q3 renewal calls",
        meta: ["View", "18 records"]
      }, {
        title: "Harbor Coffee",
        meta: ["Account"]
      }]
    },
    profile: {
      title: "Ana Reyes",
      caption: "Operations, Meridian workspace",
      rows: [{
        title: "Notifications",
        meta: ["Push, email"]
      }, {
        title: "Appearance",
        meta: ["Match system"]
      }, {
        title: "Connected accounts",
        meta: ["2 linked"]
      }, {
        title: "Language and region",
        meta: ["English", "UTC+1"]
      }, {
        title: "Offline data",
        meta: ["Sync on Wi-Fi"]
      }, {
        title: "Privacy",
        meta: ["Reviewed in June"]
      }, {
        title: "Sign out",
        meta: []
      }]
    }
  };
let D = (...e) => e.filter(Boolean).join(" "),
  F = "bg-white dark:bg-neutral-950",
  M = "text-neutral-900 dark:text-neutral-100",
  T = "text-neutral-900/62 dark:text-neutral-100/62",
  H = "text-[13px]/[16px] font-semibold tabular-nums",
  B = "transition-[color,background-color,border-color,box-shadow,outline-color,opacity,scale,translate] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms]",
  Q = {
    type: "spring",
    bounce: 0,
    duration: .35
  },
  $ = [.2, 0, 0, 1],
  q = [{
    id: "task",
    label: "New task",
    icon: __mod_92190.A
  }, {
    id: "note",
    label: "Voice note",
    icon: __mod_68686.A
  }, {
    id: "photo",
    label: "Photo",
    icon: __mod_33276.A
  }, {
    id: "file",
    label: "Attach file",
    icon: __mod_48094.A
  }],
  O = [{
    id: "s1",
    title: "Send the Northwind renewal quote",
    meta: "Due today"
  }, {
    id: "s2",
    title: "Review Cedar Labs onboarding notes",
    meta: "Due today"
  }, {
    id: "s3",
    title: "Approve the refund for order 4192",
    meta: "Tomorrow"
  }, {
    id: "s4",
    title: "Draft the Q3 pipeline summary",
    meta: "Thursday"
  }, {
    id: "s5",
    title: "Call Harbor Coffee about seat count",
    meta: "Friday"
  }, {
    id: "s6",
    title: "Close out the Meridian pilot checklist",
    meta: "Friday"
  }, {
    id: "s7",
    title: "Update the Q3 forecast assumptions",
    meta: "Next week"
  }];
let X = (...e) => e.filter(Boolean).join(" "),
  Z = "bg-white dark:bg-neutral-950",
  ee = "hover:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] dark:hover:bg-neutral-100/6",
  ea = "text-neutral-900 dark:text-neutral-100",
  et = "text-neutral-900/78 dark:text-neutral-100/78",
  er = "text-neutral-900/62 dark:text-neutral-100/62",
  ei = "text-[13px]/[16px] font-semibold tabular-nums",
  en = "relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] text-neutral-900 dark:text-neutral-100 shadow-[0_0_0_1px_rgb(84_62_32/0.07),0_1px_2px_rgb(84_62_32/0.06),0_8px_22px_-10px_rgb(84_62_32/0.20)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_0_0_1px_rgb(0_0_0/0.6),0_10px_24px_-12px_rgb(0_0_0/0.8)]",
  el = X("size-12 rounded-[calc(var(--rb-r-full,999px))]", "transition-[color,background-color,border-color,box-shadow,outline-color,opacity,scale,translate] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms]", "focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))]"),
  eo = {
    type: "spring",
    bounce: 0,
    duration: .35
  },
  es = [.2, 0, 0, 1],
  ec = [{
    id: "home",
    label: "Home",
    icon: __mod_17384.A
  }, {
    id: "inbox",
    label: "Inbox",
    icon: __mod_22830.A
  }, {
    id: "schedule",
    label: "Schedule",
    icon: __mod_18327.A
  }, {
    id: "reports",
    label: "Reports",
    icon: __mod_2972.A
  }],
  ed = [{
    title: "Alder Group signed the pilot",
    body: "Two regions go live on Monday. Provisioning is already queued.",
    meta: ["Deals", "14m ago"]
  }, {
    title: "Latency back under target",
    body: "The eu-west read replica caught up after the reindex finished.",
    meta: ["Platform", "1h ago"]
  }, {
    title: "Weekly digest is ready",
    body: "Retention held at 94% and three accounts moved into expansion.",
    meta: ["Reports", "3h ago"]
  }, {
    title: "Harbor Coffee replied",
    body: "They want the invoice split across two cost centres from July.",
    meta: ["Support", "5h ago"]
  }, {
    title: "Two seats freed on the Cedar Labs plan",
    body: "Both were dormant for 60 days, so the July invoice drops by $180.",
    meta: ["Billing", "8h ago"]
  }],
  e_ = [{
    title: "Alder Group",
    meta: "Account"
  }, {
    title: "Renewal pipeline",
    meta: "Saved view"
  }, {
    title: "Invoice 4192",
    meta: "Billing"
  }, {
    title: "Ana Reyes",
    meta: "Teammate"
  }, {
    title: "Latency incident",
    meta: "Report"
  }, {
    title: "Harbor Coffee",
    meta: "Account"
  }];
let ew = (...e) => e.filter(Boolean).join(" "),
  ey = "bg-white dark:bg-neutral-950",
  ej = "bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] dark:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)]",
  eN = "hover:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] dark:hover:bg-neutral-100/6",
  eA = "active:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] dark:active:bg-neutral-100/10",
  ez = "text-neutral-900 dark:text-neutral-100",
  eC = "text-neutral-900/78 dark:text-neutral-100/78",
  eS = "text-neutral-900/62 dark:text-neutral-100/62",
  eR = "border-t border-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:border-neutral-100/7",
  eP = "text-[13px]/[16px] font-bold tabular-nums",
  eW = "text-[13px]/[16px] font-semibold tabular-nums",
  eE = "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))]",
  eI = "focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))]",
  eL = "transition-[color,background-color,border-color,box-shadow,outline-color,opacity,scale,translate] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms]",
  eD = "relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] text-neutral-900 dark:text-neutral-100 shadow-[0_0_0_1px_rgb(84_62_32/0.07),0_1px_2px_rgb(84_62_32/0.06),0_8px_22px_-10px_rgb(84_62_32/0.20)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_0_0_1px_rgb(0_0_0/0.6),0_10px_24px_-12px_rgb(0_0_0/0.8)]",
  eF = "flex min-w-0 flex-1 flex-col gap-0.5",
  eM = "flex max-w-full min-w-0 items-baseline gap-2 text-[15px]/[20px] font-bold text-neutral-900 dark:text-neutral-100",
  eT = ew("rounded-[var(--rb-r-4xl,18px)]", eL, eI),
  eH = ew(eN, eA, eL),
  eB = {
    type: "spring",
    bounce: 0,
    duration: .35
  },
  eQ = [.2, 0, 0, 1],
  e$ = [{
    id: "home",
    label: "Home",
    icon: __mod_17384.A
  }, {
    id: "orders",
    label: "Orders",
    icon: __mod_32406.A
  }, {
    id: "messages",
    label: "Messages",
    icon: __mod_36586.A
  }],
  eq = [{
    label: "Shipments",
    icon: __mod_68142.A,
    meta: "6 in transit"
  }, {
    label: "Invoices",
    icon: __mod_91418.A,
    meta: "2 due"
  }, {
    label: "Payments",
    icon: __mod_95735.A,
    meta: "Up to date"
  }, {
    label: "Team",
    icon: __mod_88366.A,
    meta: "9 members"
  }],
  eO = [{
    label: "Account settings",
    icon: __mod_65174.A
  }, {
    label: "Security and access",
    icon: __mod_20484.A
  }, {
    label: "Help centre",
    icon: __mod_3175.A
  }],
  eV = [{
    id: "4192",
    who: "Northwind",
    meta: ["Packed", "3 items"]
  }, {
    id: "4188",
    who: "Cedar Labs",
    meta: ["In transit", "1 item"]
  }, {
    id: "4181",
    who: "Harbor Coffee",
    meta: ["Delivered", "5 items"]
  }, {
    id: "4174",
    who: "Alder Group",
    meta: ["Delivered", "2 items"]
  }, {
    id: "4169",
    who: "Meridian",
    meta: ["Delivered", "4 items"]
  }, {
    id: "4162",
    who: "Northwind",
    meta: ["Returned", "1 item"]
  }];
let eU = (...e) => e.filter(Boolean).join(" "),
  eK = "bg-white dark:bg-neutral-950",
  eY = "hover:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] dark:hover:bg-neutral-100/6",
  eX = "rounded-[var(--rb-r-4xl,18px)]",
  eZ = "text-neutral-900 dark:text-neutral-100",
  e0 = "text-neutral-900/62 dark:text-neutral-100/62",
  e1 = "text-[17px]/[22px] font-extrabold",
  e2 = "transition-[color,background-color,border-color,box-shadow,outline-color,opacity,scale,translate] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms]",
  e5 = "relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-transparent text-neutral-900 hover:not-disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] active:not-disabled:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] disabled:text-neutral-900/40 dark:text-neutral-100 dark:hover:not-disabled:bg-neutral-100/8 dark:active:not-disabled:bg-neutral-100/12 dark:aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:disabled:text-neutral-100/40",
  e6 = "size-10 rounded-[calc(var(--rb-r-full,999px))]",
  e8 = eU(eY, "active:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] dark:active:bg-neutral-100/10", e2),
  e4 = {
    Queued: "text-neutral-900 dark:text-neutral-100",
    Running: "text-neutral-900 dark:text-neutral-100",
    Succeeded: "text-neutral-900/78 dark:text-neutral-100/78",
    Failed: "text-[oklch(51%_0.18_26)] dark:text-[oklch(76%_0.14_26)]"
  },
  e9 = [.2, 0, 0, 1],
  e3 = ["Queue", "Running", "Done"],
  e7 = [{
    label: "Workflows",
    children: ["All workflows", "Templates", "Scheduled runs", "Archive"]
  }, {
    label: "Data",
    children: ["Sources", "Destinations", "Field mapping"]
  }, {
    label: "Runs",
    children: null
  }, {
    label: "Alerts",
    children: null
  }, {
    label: "Settings",
    children: ["Workspace", "Members", "Billing", "API keys"]
  }],
  ae = {
    Queue: [{
      name: "Nightly ledger export",
      meta: "Starts in 12m",
      state: "Queued"
    }, {
      name: "Cedar Labs backfill",
      meta: "Starts in 40m",
      state: "Queued"
    }, {
      name: "Invoice reconciliation",
      meta: "Starts at 02:00",
      state: "Queued"
    }],
    Running: [{
      name: "Warehouse sync",
      meta: "4m 12s elapsed",
      state: "Running"
    }, {
      name: "Contact dedupe",
      meta: "58s elapsed",
      state: "Running"
    }, {
      name: "Harbor Coffee import",
      meta: "2m 04s elapsed",
      state: "Running"
    }, {
      name: "Usage rollup",
      meta: "6m 41s elapsed",
      state: "Running"
    }, {
      name: "Invoice PDF batch",
      meta: "1m 19s elapsed",
      state: "Running"
    }, {
      name: "Northwind field mapping",
      meta: "3m 55s elapsed",
      state: "Running"
    }, {
      name: "Alert rule evaluation",
      meta: "22s elapsed",
      state: "Running"
    }, {
      name: "Ledger checksum",
      meta: "8m 02s elapsed",
      state: "Running"
    }],
    Done: [{
      name: "Weekly digest",
      meta: "Finished 21m ago",
      state: "Succeeded"
    }, {
      name: "Region failover drill",
      meta: "Finished 2h ago",
      state: "Succeeded"
    }, {
      name: "Legacy import",
      meta: "Finished 5h ago",
      state: "Failed"
    }, {
      name: "Seat audit",
      meta: "Finished 9h ago",
      state: "Succeeded"
    }, {
      name: "Cedar Labs backfill",
      meta: "Finished 11h ago",
      state: "Succeeded"
    }, {
      name: "Nightly ledger export",
      meta: "Finished 14h ago",
      state: "Succeeded"
    }, {
      name: "Contact enrichment",
      meta: "Finished 18h ago",
      state: "Failed"
    }, {
      name: "Warehouse vacuum",
      meta: "Finished 21h ago",
      state: "Succeeded"
    }]
  },
  aa = {
    "mobile-1": function () {
      let e = (0, __mod_50969.I)(),
        a = (0, React.useId)(),
        [t, c] = (0, React.useState)("home"),
        d = S[t];
      return <div className={h(m, v, "relative flex h-full min-h-[680px] w-full justify-center overflow-hidden p-5")}><div className={h("border border-transparent ring-1 ring-[rgb(84_62_32/0.1)] dark:ring-neutral-100/12", m, "relative flex h-full w-full max-w-[390px] flex-col overflow-hidden rounded-[28px]")}><header className="flex h-14 shrink-0 items-center justify-between gap-2 px-4"><p className={h("text-[17px]/[22px] font-extrabold", v, "min-w-0 truncate")}>Meridian</p><div className="flex shrink-0 items-center gap-1"><button type="button" aria-label="Filters" className={h("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-transparent text-neutral-900 hover:not-disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] active:not-disabled:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] disabled:text-neutral-900/40 dark:text-neutral-100 dark:hover:not-disabled:bg-neutral-100/8 dark:active:not-disabled:bg-neutral-100/12 dark:aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:disabled:text-neutral-100/40", "size-10 rounded-[calc(var(--rb-r-full,999px))]")}><__mod_22728.n icon={__mod_68656.A} size={18} strokeWidth={2} aria-hidden="true" /></button><span aria-hidden={!0} className="relative inline-flex size-8 shrink-0 overflow-hidden rounded-full select-none"><span className="flex size-full items-center justify-center rounded-[inherit] bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_24%,white)] text-[12px]/[16px] font-extrabold tabular-nums text-neutral-900 dark:text-neutral-100 dark:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_22%,var(--color-neutral-900))]">AR</span></span></div></header><div className="min-h-0 flex-1 overflow-y-auto px-4 pb-4"><__mod_47962.N mode="wait" initial={!1}><motion.div initial={{
                opacity: 0
              }} animate={{
                opacity: 1
              }} exit={{
                opacity: 0,
                transition: {
                  duration: .12 * !e,
                  ease: z
                }
              }} transition={{
                duration: .16 * !e,
                ease: z
              }}><h2 className={h("text-[26px]/[32px] font-extrabold tracking-[-0.015em]", v)}>{d.title}</h2><p className={h("text-[14px]/[20px] font-medium", g, "mt-1")}>{d.caption}</p><ul className="mt-4 space-y-1">{d.rows.map(e => <li><button type="button" className={h(f, k, "active:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] dark:active:bg-neutral-100/10", j, y, "flex min-h-[56px] w-full min-w-0 cursor-pointer items-center gap-3 px-3 text-left")}><span className="flex min-w-0 flex-1 flex-col gap-0.5"><span className="flex max-w-full min-w-0 items-baseline gap-2 text-[15px]/[20px] font-bold text-neutral-900 dark:text-neutral-100"><span className="truncate">{e.title}</span></span>{e.meta.length > 0 ? <span data-description={!0} className={h("text-[13px]/[16px] font-semibold tabular-nums", w, "flex min-w-0 gap-2")}>{e.meta.map((e, a) => <span className={0 === a ? "shrink-0" : "min-w-0 truncate"}>{e}</span>)}</span> : null}</span><__mod_22728.n icon={__mod_5042.A} size={18} strokeWidth={2} aria-hidden="true" className={h(w, "shrink-0")} /></button></li>)}</ul></motion.div></__mod_47962.N></div><nav aria-label="Primary" role="tablist" onKeyDown={e => {
            let a = C.findIndex(e => e.id === t);
            if ("ArrowRight" === e.key) r = (a + 1) % C.length;else if ("ArrowLeft" === e.key) r = (a - 1 + C.length) % C.length;else if ("Home" === e.key) r = 0;else {
              if ("End" !== e.key) return;
              r = C.length - 1;
            }
            e.preventDefault(), c(C[a].id);
          }} className={h("border-t border-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:border-neutral-100/7", "relative z-20 flex shrink-0 items-stretch gap-0.5 p-3")}>{C.map(i => {
              let n = i.id === t;
              return <button type="button" role="tab" aria-selected={n} tabIndex={n ? 0 : -1} onClick={() => c(i.id)} className={h(N, n ? v : h(g, k), "relative flex min-h-[48px] flex-1 cursor-pointer flex-col items-center justify-center gap-1 px-1")}>{n && <motion.span aria-hidden={!0} layoutId={`${a}-tab`} transition={e ? {
                  duration: 0
                } : A} className={h("bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] dark:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)]", "absolute inset-0 rounded-[inherit]")} />}<span className="relative"><__mod_22728.n icon={i.icon} size={18} strokeWidth={2} aria-hidden="true" className={h(j, n && !e && "scale-[1.06]")} />{i.badge > 0 && <span className={h("inline-flex h-5.5 min-w-5.5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden whitespace-nowrap rounded-[calc(var(--rb-r-full,999px))] px-2.5 text-[12px]/[16px] font-bold tabular-nums", "bg-white text-neutral-900 dark:text-neutral-100 shadow-[0_0_0_1px_rgb(84_62_32/0.09),0_1px_2px_rgb(84_62_32/0.08)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_0_0_1px_rgb(0_0_0/0.55)] dark:bg-neutral-800", "absolute -top-1 left-3 h-[16px] min-w-[16px] px-[3px]")}>{i.badge}</span>}</span><span className={h("text-[13px]/[16px] font-bold tabular-nums", "relative")}>{i.label}</span></button>;
            })}</nav></div></div>;
    },
    "mobile-2": function () {
      let e = (0, __mod_50969.I)(),
        [a, t] = (0, React.useState)(!1),
        [c, _] = (0, React.useState)(O),
        [b, u] = (0, React.useState)(0),
        x = (0, React.useRef)(null);
      return (0, React.useEffect)(() => {
        if (!a) return;
        let e = x.current?.ownerDocument;
        if (!e) return;
        let r = e => {
          "Escape" === e.key && t(!1);
        };
        return e.addEventListener("keydown", r), () => e.removeEventListener("keydown", r);
      }, [a]), <div className={D(F, M, "relative flex h-full min-h-[680px] w-full justify-center overflow-hidden p-5")}><div ref={x} className={D("border border-transparent ring-1 ring-[rgb(84_62_32/0.1)] dark:ring-neutral-100/12", F, "relative flex h-full w-full max-w-[390px] flex-col overflow-hidden rounded-[28px]")}><header className="flex h-14 shrink-0 items-center justify-between gap-2 px-4"><p className={D("text-[17px]/[22px] font-extrabold", M, "min-w-0 truncate")}>Inbox</p><button type="button" aria-label="Search" className={D("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-transparent text-neutral-900 hover:not-disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] active:not-disabled:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] disabled:text-neutral-900/40 dark:text-neutral-100 dark:hover:not-disabled:bg-neutral-100/8 dark:active:not-disabled:bg-neutral-100/12 dark:aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:disabled:text-neutral-100/40", "size-10 rounded-[calc(var(--rb-r-full,999px))]")}><__mod_22728.n icon={__mod_66575.A} size={18} strokeWidth={2} aria-hidden="true" /></button></header><div className="min-h-0 flex-1 overflow-y-auto px-4 pb-28"><p className={D(H, T)}>{c.length} open</p><ul className="mt-2 space-y-1"><__mod_47962.N initial={!1} mode="popLayout">{c.map(a => <motion.li layout={!e} initial={e ? {
                  opacity: 0
                } : {
                  opacity: 0,
                  y: -8
                }} animate={{
                  opacity: 1,
                  y: 0
                }} exit={e ? {
                  opacity: 0,
                  transition: {
                    duration: .12
                  }
                } : {
                  opacity: 0,
                  x: 12,
                  transition: {
                    duration: .16,
                    ease: $
                  }
                }} transition={e ? {
                  duration: .15
                } : Q}><button type="button" onClick={() => _(e => e.filter(e => e.id !== a.id))} className={D("rounded-[var(--rb-r-4xl,18px)]", "hover:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] dark:hover:bg-neutral-100/6", "active:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] dark:active:bg-neutral-100/10", B, "focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))]", "group flex min-h-[56px] w-full min-w-0 cursor-pointer items-center gap-3 px-3 text-left")}><span aria-hidden={!0} className={D("size-[18px] shrink-0 cursor-pointer appearance-none rounded-full border-2 border-neutral-900/28 bg-white transition-[background-color,border-color,border-width,box-shadow,outline-color,scale] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:scale-[0.86] motion-reduce:active:scale-100 hover:not-checked:not-disabled:border-neutral-900/60 active:not-checked:bg-neutral-900/8 checked:border-[6px] checked:border-[var(--rb-accent,oklch(84%_0.15_165))] checked:bg-white checked:shadow-[0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] aria-invalid:border-[oklch(60%_0.236_26)] disabled:cursor-not-allowed disabled:border-neutral-900/20 disabled:checked:border-neutral-900/25 disabled:checked:shadow-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:border-neutral-100/34 dark:bg-neutral-900 dark:hover:not-checked:not-disabled:border-neutral-100/70 dark:active:not-checked:bg-neutral-100/10 dark:checked:border-[var(--rb-accent,oklch(81%_0.16_163))] dark:checked:bg-neutral-900 dark:checked:shadow-none dark:aria-invalid:border-[oklch(65.2%_0.219_26)] dark:disabled:border-neutral-100/24 dark:disabled:checked:border-neutral-100/28", "inline-flex size-[20px] items-center justify-center")}><__mod_22728.n icon={__mod_94089.A} size={14} strokeWidth={2} className={D(B, M, "opacity-0 group-hover:opacity-100")} /></span><span className="flex min-w-0 flex-1 flex-col gap-0.5"><span className="flex max-w-full min-w-0 items-baseline gap-2 text-[15px]/[20px] font-bold text-neutral-900 dark:text-neutral-100"><span className="truncate">{a.title}</span></span><span data-description={!0} className={D(H, T, "truncate")}>{a.meta}</span></span></button></motion.li>)}</__mod_47962.N></ul>{0 === c.length && <p className={D("max-w-[48ch] text-[15px]/[22px] font-medium text-neutral-900/78 dark:text-neutral-100/78", "mx-auto mt-10 text-center")}>Everything is done. Add something with the button below.</p>}</div><__mod_47962.N>{a && <motion.button type="button" aria-label="Close actions" onClick={() => t(!1)} initial={{
              opacity: 0
            }} animate={{
              opacity: 1
            }} exit={{
              opacity: 0,
              transition: {
                duration: .12 * !e,
                ease: $
              }
            }} transition={{
              duration: .16 * !e,
              ease: $
            }} className={D("bg-[oklch(28%_0.02_70/0.3)] dark:bg-neutral-950/70", "absolute inset-0 z-30 cursor-default")} />}</__mod_47962.N><div className="absolute right-5 bottom-5 z-40 flex flex-col items-end gap-2"><__mod_47962.N>{a && <motion.ul className="flex flex-col items-end gap-2" initial={{
                opacity: 0
              }} animate={{
                opacity: 1
              }} exit={{
                opacity: 0,
                transition: {
                  duration: .12 * !e,
                  ease: $
                }
              }} transition={{
                duration: .16 * !e,
                ease: $
              }}>{q.map(e => <li><button type="button" onClick={() => {
                    var a;
                    let r;
                    return a = e.label, r = `n${b}`, void (u(b + 1), _([{
                      id: r,
                      title: `${a} captured`,
                      meta: "Just now"
                    }, ...c]), t(!1));
                  }} className={D("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] text-neutral-900 dark:text-neutral-100 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] active:not-disabled:translate-y-px active:not-disabled:shadow-[inset_0_1px_3px_rgb(84_62_32/0.16),0_0_0_1px_rgb(84_62_32/0.10)] dark:active:not-disabled:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14),0_0_0_1px_rgb(84_62_32/0.10)] dark:aria-expanded:bg-neutral-800 dark:aria-expanded:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] disabled:bg-none disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] disabled:text-neutral-900/40 disabled:shadow-none dark:disabled:bg-neutral-800/60 dark:disabled:text-neutral-100/40", "h-12 gap-2 rounded-[calc(var(--rb-r-full,999px))] px-6 text-[16px]/[20px] font-extrabold")}>{e.label}<__mod_22728.n icon={e.icon} size={18} strokeWidth={2} aria-hidden="true" className="text-neutral-900/78 dark:text-neutral-100/78" /></button></li>)}</motion.ul>}</__mod_47962.N><button type="button" aria-expanded={a} aria-label={a ? "Close quick actions" : "Open quick actions"} onClick={() => t(e => !e)} className={D("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_68%,white),var(--rb-accent,oklch(84%_0.15_165)))] text-[var(--rb-accent-fg,oklch(26%_0.06_168))] shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_4px_10px_-4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_80%,transparent)] hover:not-disabled:-translate-y-px hover:not-disabled:brightness-[1.04] hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_7px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_85%,transparent)] active:not-disabled:translate-y-px active:not-disabled:brightness-[0.98] active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_55%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] motion-reduce:hover:translate-y-0 disabled:opacity-45 disabled:shadow-none dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_78%,white),var(--rb-accent,oklch(81%_0.16_163)))] dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_6px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,transparent)] dark:hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_9px_22px_-8px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_60%,transparent)] dark:active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_45%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black)] dark:disabled:shadow-none", "size-12 rounded-[calc(var(--rb-r-full,999px))]")}><motion.span aria-hidden={!0} animate={{
                rotate: a && !e ? 45 : 0
              }} transition={e ? {
                duration: 0
              } : Q} className="inline-flex"><__mod_22728.n icon={__mod_89886.A} size={18} strokeWidth={2} /></motion.span></button></div></div></div>;
    },
    "mobile-3": function () {
      let e = (0, __mod_50969.I)(),
        a = (0, React.useId)(),
        [t, c] = (0, React.useState)("home"),
        [_, b] = (0, React.useState)(!1),
        [u, x] = (0, React.useState)(""),
        p = (0, React.useRef)(null),
        h = (0, React.useRef)(null);
      (0, React.useEffect)(() => {
        if (!_) return;
        let e = h.current?.ownerDocument.defaultView,
          a = e?.requestAnimationFrame(() => h.current?.focus());
        return () => {
          void 0 !== a && e?.cancelAnimationFrame(a);
        };
      }, [_]), (0, React.useEffect)(() => {
        if (!_) return;
        let e = p.current?.ownerDocument;
        if (!e) return;
        let a = e => {
          "Escape" === e.key && b(!1);
        };
        return e.addEventListener("keydown", a), () => e.removeEventListener("keydown", a);
      }, [_]);
      let m = (0, React.useMemo)(() => {
        let e = u.trim().toLowerCase();
        return e ? e_.filter(a => a.title.toLowerCase().includes(e)) : e_.slice(0, 4);
      }, [u]);
      return <div className={X(Z, ea, "relative flex h-full min-h-[720px] w-full justify-center overflow-hidden p-5")}><div ref={p} className={X("border border-transparent ring-1 ring-[rgb(84_62_32/0.1)] dark:ring-neutral-100/12", Z, "relative flex h-full w-full max-w-[390px] flex-col overflow-hidden rounded-[28px]")}><header className="flex h-14 shrink-0 items-center justify-between gap-2 px-5"><p className={X("text-[17px]/[22px] font-extrabold", ea, "min-w-0 truncate")}>{ec.find(e => e.id === t)?.label}</p><span aria-hidden={!0} className="relative inline-flex size-8 shrink-0 overflow-hidden rounded-full select-none"><span className="flex size-full items-center justify-center rounded-[inherit] bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_24%,white)] text-[12px]/[16px] font-extrabold tabular-nums text-neutral-900 dark:text-neutral-100 dark:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_22%,var(--color-neutral-900))]">AR</span></span></header><div className="min-h-0 flex-1 overflow-y-auto px-5 pb-28"><__mod_47962.N mode="wait" initial={!1}><motion.ul initial={{
                opacity: 0
              }} animate={{
                opacity: 1
              }} exit={{
                opacity: 0,
                transition: {
                  duration: .12 * !e,
                  ease: es
                }
              }} transition={{
                duration: .16 * !e,
                ease: es
              }} className="space-y-2">{ed.map(e => <li className={X(en, "p-4")}><div className="flex items-start justify-between gap-3"><p className={X("text-[15px]/[20px] font-bold", ea, "min-w-0")}>{e.title}</p><__mod_22728.n icon={__mod_1497.A} size={18} strokeWidth={2} aria-hidden="true" className={X(er, "shrink-0")} /></div><p className={X("text-[14px]/[20px] font-medium", et, "mt-1.5")}>{e.body}</p><p className={X(ei, er, "mt-2.5 flex gap-2")}>{e.meta.map(e => <span>{e}</span>)}</p></li>)}</motion.ul></__mod_47962.N></div><__mod_47962.N>{_ && <motion.button type="button" aria-label="Close search" onClick={() => b(!1)} initial={{
              opacity: 0
            }} animate={{
              opacity: 1
            }} exit={{
              opacity: 0,
              transition: {
                duration: .12 * !e,
                ease: es
              }
            }} transition={{
              duration: .16 * !e,
              ease: es
            }} className={X("bg-[oklch(28%_0.02_70/0.3)] dark:bg-neutral-950/70", "absolute inset-0 z-30 cursor-default")} />}</__mod_47962.N><div className="pointer-events-none absolute inset-x-0 bottom-0 z-40 flex flex-col items-center gap-2 px-5 pb-5"><__mod_47962.N>{_ && m.length > 0 && <motion.ul initial={{
                opacity: 0
              }} animate={{
                opacity: 1
              }} exit={{
                opacity: 0,
                transition: {
                  duration: .12 * !e,
                  ease: es
                }
              }} transition={{
                duration: .16 * !e,
                ease: es
              }} className={X("min-w-52 max-w-[min(480px,calc(100vw-2rem))] overflow-x-hidden overflow-y-auto overscroll-contain rounded-[calc(var(--rb-r-3xl,16px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] p-2 text-neutral-900 dark:text-neutral-100 outline-none shadow-[0_0_0_1px_rgb(84_62_32/0.08),0_24px_56px_-20px_rgb(84_62_32/0.34),0_6px_16px_-8px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.65),0_24px_56px_-16px_rgb(0_0_0/0.8)]", "pointer-events-auto w-full p-1.5")}>{m.map(a => <motion.li layout={!e}><button type="button" onClick={() => {
                    x(a.title), b(!1);
                  }} className={X("relative flex min-h-10 w-full cursor-default items-center gap-2.5 rounded-[calc(var(--rb-r-md,8px))] px-3 py-2 text-left text-[15px]/[20px] font-semibold text-neutral-900 outline-none select-none [&_svg]:shrink-0 [&_svg]:text-neutral-900/70 hover:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] focus-visible:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] data-[highlighted]:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-disabled:cursor-not-allowed aria-disabled:text-neutral-900/40 dark:text-neutral-100 dark:[&_svg]:text-neutral-100/70 dark:hover:bg-neutral-100/7 dark:focus-visible:bg-neutral-100/7 dark:data-[highlighted]:bg-neutral-100/7 dark:aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-disabled:text-neutral-100/40", "min-h-[44px] gap-3 px-3")}><span className="min-w-0 flex-1 truncate">{a.title}</span><span className={X(ei, er, "shrink-0")}>{a.meta}</span></button></motion.li>)}</motion.ul>}</__mod_47962.N><motion.div layout={!e} transition={e ? {
              duration: 0
            } : eo} className={X(en, "shadow-[0_0_0_1px_rgb(84_62_32/0.08),0_24px_56px_-20px_rgb(84_62_32/0.34),0_6px_16px_-8px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.65),0_24px_56px_-16px_rgb(0_0_0/0.8)]", "pointer-events-auto flex-row items-center p-1", _ ? "w-full" : "w-auto")}><__mod_47962.N mode="wait" initial={!1}>{_ ? <motion.div initial={{
                  opacity: 0
                }} animate={{
                  opacity: 1
                }} exit={{
                  opacity: 0,
                  transition: {
                    duration: .12 * !e,
                    ease: es
                  }
                }} transition={{
                  duration: .16 * !e,
                  ease: es
                }} className="flex w-full items-center gap-2 pl-3"><__mod_22728.n icon={__mod_66575.A} size={18} strokeWidth={2} aria-hidden="true" className={X(er, "shrink-0")} /><input ref={h} value={u} onChange={e => x(e.target.value)} placeholder="Search accounts, views, invoices" aria-label="Search" className="h-full min-w-0 flex-1 bg-transparent text-[16px]/[20px] font-semibold text-neutral-900 dark:text-neutral-100 outline-none placeholder:text-neutral-900/55 dark:placeholder:text-neutral-100/55" />{u ? <span className={X(ei, er, "hidden shrink-0 items-center gap-1 sm:flex")}><__mod_22728.n icon={__mod_68820.A} size={14} strokeWidth={2} aria-hidden="true" />open</span> : null}<button type="button" aria-label="Close search" onClick={() => {
                    b(!1), x("");
                  }} className={X(el, et, ee, "inline-flex shrink-0 cursor-pointer items-center justify-center")}><__mod_22728.n icon={__mod_89289.A} size={18} strokeWidth={2} aria-hidden="true" /></button></motion.div> : <motion.nav aria-label="Primary" initial={{
                  opacity: 0
                }} animate={{
                  opacity: 1
                }} exit={{
                  opacity: 0,
                  transition: {
                    duration: .12 * !e,
                    ease: es
                  }
                }} transition={{
                  duration: .16 * !e,
                  ease: es
                }} className="flex items-center gap-0.5">{ec.map(i => {
                    let n = i.id === t;
                    return <button type="button" aria-label={i.label} aria-current={n ? "page" : void 0} onClick={() => c(i.id)} className={X(el, n ? ea : X(et, ee), "relative inline-flex cursor-pointer items-center justify-center")}>{n && <motion.span aria-hidden={!0} layoutId={`${a}-dock`} transition={e ? {
                        duration: 0
                      } : eo} className={X("bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] dark:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)]", "absolute inset-0 rounded-[inherit]")} />}<__mod_22728.n icon={i.icon} size={18} strokeWidth={2} aria-hidden="true" className="relative" /></button>;
                  })}<span aria-hidden={!0} className={X("border-r border-transparent", "mx-1 h-6 w-px")} /><button type="button" aria-label="Search" onClick={() => b(!0)} className={X(el, et, ee, "inline-flex cursor-pointer items-center justify-center")}><__mod_22728.n icon={__mod_66575.A} size={18} strokeWidth={2} aria-hidden="true" /></button></motion.nav>}</__mod_47962.N></motion.div></div></div></div>;
    },
    "mobile-4": function () {
      let e = (0, __mod_50969.I)(),
        a = (0, React.useId)(),
        [t, c] = (0, React.useState)("home"),
        [d, _] = (0, React.useState)("closed"),
        b = (0, React.useRef)(null),
        u = "closed" !== d;
      return (0, React.useEffect)(() => {
        if (!u) return;
        let e = b.current?.ownerDocument;
        if (!e) return;
        let a = e => {
          "Escape" === e.key && _("closed");
        };
        return e.addEventListener("keydown", a), () => e.removeEventListener("keydown", a);
      }, [u]), <div className={ew(ey, ez, "relative flex h-full min-h-[700px] w-full justify-center overflow-hidden p-5")}><div ref={b} className={ew("border border-transparent ring-1 ring-[rgb(84_62_32/0.1)] dark:ring-neutral-100/12", ey, "relative flex h-full w-full max-w-[390px] flex-col overflow-hidden rounded-[28px]")}><header className="flex h-14 shrink-0 items-center justify-between gap-2 px-5"><p className={ew("text-[17px]/[22px] font-extrabold", ez, "min-w-0 truncate")}>Northwind Supply</p><span aria-hidden={!0} className="relative inline-flex size-8 shrink-0 overflow-hidden rounded-[calc(var(--rb-r-lg,10px))] select-none"><span className="flex size-full items-center justify-center rounded-[inherit] bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_24%,white)] text-[12px]/[16px] font-extrabold tabular-nums text-neutral-900 dark:text-neutral-100 dark:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_22%,var(--color-neutral-900))]">NS</span></span></header><div className="min-h-0 flex-1 overflow-y-auto px-5 pb-24"><p className={ew(eW, eS)}>Recent orders</p><ul className="mt-2 space-y-1">{eV.map(e => <li><button type="button" className={ew(eD, eE, "w-full cursor-pointer text-left")}><span className={ew(eH, "flex min-h-[60px] w-full items-center gap-3 px-3.5 py-3")}><span className={eF}><span className={eM}><span className="truncate">{e.who}</span></span><span className={ew(eW, eS, "flex min-w-0 gap-2")}>{[`Order ${e.id}`, ...e.meta].map((e, a) => <span className={0 === a ? "shrink-0" : "min-w-0 truncate"}>{e}</span>)}</span></span><__mod_22728.n icon={__mod_1497.A} size={18} strokeWidth={2} aria-hidden="true" className={ew(eS, "shrink-0")} /></span></button></li>)}</ul></div><__mod_47962.N>{u && <motion.button type="button" aria-label="Close menu" onClick={() => _("closed")} initial={{
              opacity: 0
            }} animate={{
              opacity: "full" === d ? 1 : .6
            }} exit={{
              opacity: 0,
              transition: {
                duration: .12 * !e,
                ease: eQ
              }
            }} transition={{
              duration: .18 * !e,
              ease: eQ
            }} className={ew("bg-[oklch(28%_0.02_70/0.3)] dark:bg-neutral-950/70", "absolute inset-0 z-30 cursor-default")} />}</__mod_47962.N><__mod_47962.N>{u && <motion.div role="dialog" aria-modal="true" aria-label="More destinations" initial={{
              opacity: 0,
              y: 8 * !e
            }} animate={{
              opacity: 1,
              y: 0
            }} exit={{
              opacity: 0,
              y: 8 * !e,
              transition: {
                duration: .12 * !e,
                ease: eQ
              }
            }} transition={{
              duration: .18 * !e,
              ease: eQ
            }} className={ew("bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))]", eR, "shadow-[0_0_0_1px_rgb(84_62_32/0.08),0_24px_56px_-20px_rgb(84_62_32/0.34),0_6px_16px_-8px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.65),0_24px_56px_-16px_rgb(0_0_0/0.8)]", "absolute inset-x-0 bottom-0 z-40 flex flex-col overflow-hidden rounded-t-[inherit]", "full" === d ? "h-[82%]" : "h-[46%]")}><button type="button" aria-label={"full" === d ? "Collapse menu" : "Expand menu"} aria-expanded={"full" === d} onClick={() => _("full" === d ? "peek" : "full")} className={ew(eI, "group flex h-8 w-full shrink-0 cursor-pointer items-center justify-center")}><span aria-hidden={!0} className="relative block h-1 w-10"><span className={ew("pointer-events-none absolute top-1/2 size-1.5 -translate-y-1/2 rounded-full bg-neutral-900/25 dark:bg-neutral-100/30", "h-full w-full")} /></span></button><div className="min-h-0 flex-1 overflow-y-auto px-4 pt-1 pb-6"><div className="grid grid-cols-2 gap-2">{eq.map(e => <button type="button" className={ew(eD, eE, "cursor-pointer text-left")}><span className={ew(eH, "flex min-h-[76px] flex-1 flex-col items-start justify-between p-3")}><__mod_22728.n icon={e.icon} size={18} strokeWidth={2} aria-hidden="true" className={eS} /><span><span className={ew("text-[15px]/[20px] font-bold", ez, "block")}>{e.label}</span><span className={ew(eW, eS, "mt-0.5 block")}>{e.meta}</span></span></span></button>)}</div><ul className="mt-2 space-y-0.5">{eO.map(e => <li><button type="button" className={ew("flex h-10 w-full min-w-0 cursor-pointer items-center gap-2.5 rounded-[calc(var(--rb-r-full,999px))] px-3 text-left text-[15px]/[20px] font-semibold text-neutral-900/75 transition-[background-color,box-shadow,color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] [&_svg]:shrink-0 hover:bg-neutral-900/5 hover:text-neutral-900 aria-[current=page]:bg-white aria-[current=page]:font-bold aria-[current=page]:text-neutral-900 aria-[current=page]:shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:text-neutral-100/75 dark:hover:bg-neutral-100/6 dark:hover:text-neutral-100 dark:aria-[current=page]:bg-[color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800))] dark:aria-[current=page]:text-neutral-100 dark:aria-[current=page]:shadow-[inset_0_1px_0_rgb(255_255_255/0.08),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)]", eA, "min-h-[48px] gap-3 px-3 text-left")}><__mod_22728.n icon={e.icon} size={18} strokeWidth={2} aria-hidden="true" className={ew(eS, "shrink-0")} /><span className={eF}><span className={eM}><span className="truncate">{e.label}</span></span></span></button></li>)}</ul></div></motion.div>}</__mod_47962.N><nav aria-label="Primary" className={ew(eR, "relative z-20 flex shrink-0 items-stretch gap-0.5 p-3")}>{e$.map(i => {
              let n = i.id === t && !u;
              return <button type="button" aria-current={n ? "page" : void 0} onClick={() => {
                c(i.id), _("closed");
              }} className={ew(eT, n ? ez : ew(eC, eN), "relative flex min-h-[48px] flex-1 cursor-pointer flex-col items-center justify-center gap-1")}>{n && <motion.span aria-hidden={!0} layoutId={`${a}-tab`} transition={e ? {
                  duration: 0
                } : eB} className={ew(ej, "absolute inset-0 rounded-[inherit]")} />}<__mod_22728.n icon={i.icon} size={18} strokeWidth={2} aria-hidden="true" className="relative" /><span className={ew(eP, "relative")}>{i.label}</span></button>;
            })}<button type="button" aria-expanded={u} onClick={() => _(u ? "closed" : "peek")} className={ew(eT, u ? ez : ew(eC, eN), "relative flex min-h-[48px] flex-1 cursor-pointer flex-col items-center justify-center gap-1")}>{u && <motion.span aria-hidden={!0} layoutId={`${a}-tab`} transition={e ? {
                duration: 0
              } : eB} className={ew(ej, "absolute inset-0 rounded-[inherit]")} />}<motion.span aria-hidden={!0} animate={{
                rotate: u && !e ? 180 : 0
              }} transition={e ? {
                duration: 0
              } : eB} className="relative inline-flex"><__mod_22728.n icon={__mod_24513.A} size={18} strokeWidth={2} /></motion.span><span className={ew(eP, "relative")}>More</span></button></nav></div></div>;
    },
    "mobile-5": function () {
      let e = (0, __mod_50969.I)(),
        [a, t] = (0, React.useState)(!1),
        [c, d] = (0, React.useState)("Running"),
        [_, b] = (0, React.useState)("Workflows"),
        u = (0, React.useRef)(null);
      (0, React.useEffect)(() => {
        if (!a) return;
        let e = u.current?.ownerDocument;
        if (!e) return;
        let r = e => {
          "Escape" === e.key && t(!1);
        };
        return e.addEventListener("keydown", r), () => e.removeEventListener("keydown", r);
      }, [a]);
      let x = ae[c];
      return <div className={eU(eK, eZ, "relative flex h-full min-h-[740px] w-full justify-center overflow-hidden p-5")}><div ref={u} className={eU("border border-transparent ring-1 ring-[rgb(84_62_32/0.1)] dark:ring-neutral-100/12", eK, "relative flex h-full w-full max-w-[390px] flex-col overflow-hidden rounded-[28px]")}><header className="relative z-20 flex h-14 shrink-0 items-center justify-between gap-2 px-4"><button type="button" aria-label="Open menu" aria-expanded={a} onClick={() => t(!0)} className={eU(e5, e6)}><__mod_22728.n icon={__mod_1836.A} size={18} strokeWidth={2} aria-hidden="true" /></button><p className={eU(e1, eZ, "min-w-0 truncate")}>Runs</p><button type="button" aria-label="New run" className={eU("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_68%,white),var(--rb-accent,oklch(84%_0.15_165)))] text-[var(--rb-accent-fg,oklch(26%_0.06_168))] shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_4px_10px_-4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_80%,transparent)] hover:not-disabled:-translate-y-px hover:not-disabled:brightness-[1.04] hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_7px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_85%,transparent)] active:not-disabled:translate-y-px active:not-disabled:brightness-[0.98] active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_55%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] motion-reduce:hover:translate-y-0 disabled:opacity-45 disabled:shadow-none dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_78%,white),var(--rb-accent,oklch(81%_0.16_163)))] dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_6px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,transparent)] dark:hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_9px_22px_-8px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_60%,transparent)] dark:active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_45%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black)] dark:disabled:shadow-none", e6)}><__mod_22728.n icon={__mod_89886.A} size={18} strokeWidth={2} aria-hidden="true" /></button></header><div className="shrink-0 px-4 pb-2"><div role="radiogroup" aria-label="Run status" className={eU("inline-flex w-fit max-w-full items-stretch gap-1 rounded-[calc(var(--rb-r-full,999px)_+_min(4px,var(--rb-r-full,999px)))] bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] p-1", "h-10", "w-full")}>{e3.map(e => {
                let a = e === c;
                return <button type="button" role="radio" aria-checked={a} onClick={() => d(e)} className={eU("relative inline-flex min-w-0 cursor-pointer items-center justify-center gap-1.5 whitespace-nowrap [&_svg]:shrink-0 rounded-[calc(var(--rb-r-full,999px))] px-4 text-[14px]/[18px] font-bold text-neutral-900/78 dark:text-neutral-100/78 select-none transition-[background-color,color,box-shadow,outline-color,scale] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:scale-[0.96] motion-reduce:active:scale-100 hover:not-aria-checked:text-neutral-900 aria-checked:bg-white aria-checked:text-neutral-900 aria-checked:shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_2px_rgb(84_62_32/0.10),0_3px_8px_-2px_rgb(84_62_32/0.20)] disabled:cursor-not-allowed disabled:text-neutral-900/40 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:hover:not-aria-checked:text-neutral-100 dark:aria-checked:bg-[color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800))] dark:aria-checked:text-neutral-100 dark:aria-checked:shadow-[inset_0_1px_0_rgb(255_255_255/0.1),0_0_0_1px_rgb(0_0_0/0.6),0_2px_5px_-1px_rgb(0_0_0/0.6)] dark:disabled:text-neutral-100/40", "flex-1")}>{e}</button>;
              })}</div></div><div className="min-h-0 flex-1 overflow-y-auto px-4 pt-1 pb-5"><__mod_47962.N mode="wait" initial={!1}><motion.ul initial={{
                opacity: 0
              }} animate={{
                opacity: 1
              }} exit={{
                opacity: 0,
                transition: {
                  duration: .12 * !e,
                  ease: e9
                }
              }} transition={{
                duration: .16 * !e,
                ease: e9
              }} className="space-y-1">{x.map(e => <li><button type="button" className={eU("relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] text-neutral-900 dark:text-neutral-100 shadow-[0_0_0_1px_rgb(84_62_32/0.07),0_1px_2px_rgb(84_62_32/0.06),0_8px_22px_-10px_rgb(84_62_32/0.20)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_0_0_1px_rgb(0_0_0/0.6),0_10px_24px_-12px_rgb(0_0_0/0.8)]", "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))]", "w-full cursor-pointer text-left")}><span className={eU(e8, "flex min-h-[60px] w-full items-center gap-3 px-3.5 py-3")}><span aria-hidden={!0} className="flex size-9 shrink-0 items-center justify-center text-neutral-900/78 dark:text-neutral-100/78"><__mod_22728.n icon={__mod_48318.A} size={16} strokeWidth={2} /></span><span className="flex min-w-0 flex-1 flex-col gap-0.5"><span className="flex max-w-full min-w-0 items-baseline gap-2 text-[15px]/[20px] font-bold text-neutral-900 dark:text-neutral-100"><span className="truncate">{e.name}</span></span><span className="flex min-w-0 items-center gap-2"><span className={eU("inline-flex items-start gap-1 text-[14px]/[20px] font-bold tabular-nums", e4[e.state])}>{"Running" === e.state && <span className="flex h-lh shrink-0 items-center"><span aria-hidden="true" className="inline-block size-3 shrink-0 rounded-full border-2 border-current border-t-transparent animate-spin [animation-duration:700ms] motion-reduce:animate-none" /></span>}{e.state}</span><span className={eU("text-[14px]/[20px] font-medium", e0, "min-w-0 truncate")}>{e.meta}</span></span></span></span></button></li>)}</motion.ul></__mod_47962.N></div><__mod_47962.N>{a && <motion.div role="dialog" aria-modal="true" aria-label="Navigation" initial={{
              opacity: 0
            }} animate={{
              opacity: 1
            }} exit={{
              opacity: 0,
              transition: {
                duration: .12 * !e,
                ease: e9
              }
            }} transition={{
              duration: .18 * !e,
              ease: e9
            }} className={eU(eK, "absolute inset-0 z-40 flex flex-col")}><div className="flex h-14 shrink-0 items-center justify-between px-4"><p className={eU(e1, eZ)}>Meridian</p><button type="button" aria-label="Close menu" onClick={() => t(!1)} className={eU(e5, e6)}><__mod_22728.n icon={__mod_89289.A} size={18} strokeWidth={2} aria-hidden="true" /></button></div><nav aria-label="Sections" className="min-h-0 flex-1 overflow-y-auto px-3 pb-4">{e7.map(e => {
                  let a = _ === e.label;
                  return <div><button type="button" aria-expanded={e.children ? a : void 0} onClick={() => e.children ? b(a ? null : e.label) : t(!1)} className={eU(eX, eY, e2, "focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))]", "group flex min-h-[52px] w-full min-w-0 cursor-pointer items-center justify-between gap-3 px-3 text-left")}><span className={eU("text-[22px]/[28px] font-extrabold tracking-[-0.01em]", eZ, "min-w-0 truncate")}>{e.label}</span>{e.children ? <__mod_22728.n icon={__mod_5042.A} size={14} strokeWidth={2} aria-hidden="true" className="shrink-0 text-neutral-900/62 dark:text-neutral-100/62 transition-transform duration-[280ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] motion-reduce:transition-none group-aria-expanded:rotate-90" /> : null}</button>{e.children && a && <ul className="pl-3">{e.children.map(e => <li><button type="button" onClick={() => t(!1)} className={eU("flex h-10 w-full min-w-0 cursor-pointer items-center gap-2.5 rounded-[calc(var(--rb-r-full,999px))] px-3 text-left text-[15px]/[20px] font-semibold text-neutral-900/75 transition-[background-color,box-shadow,color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] [&_svg]:shrink-0 hover:bg-neutral-900/5 hover:text-neutral-900 aria-[current=page]:bg-white aria-[current=page]:font-bold aria-[current=page]:text-neutral-900 aria-[current=page]:shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:text-neutral-100/75 dark:hover:bg-neutral-100/6 dark:hover:text-neutral-100 dark:aria-[current=page]:bg-[color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800))] dark:aria-[current=page]:text-neutral-100 dark:aria-[current=page]:shadow-[inset_0_1px_0_rgb(255_255_255/0.08),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)]", "min-h-[44px] px-3")}>{e}</button></li>)}</ul>}</div>;
                })}</nav><div className="shrink-0 p-3"><button type="button" onClick={() => t(!1)} className={eU("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] text-neutral-900 dark:text-neutral-100 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] active:not-disabled:translate-y-px active:not-disabled:shadow-[inset_0_1px_3px_rgb(84_62_32/0.16),0_0_0_1px_rgb(84_62_32/0.10)] dark:active:not-disabled:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14),0_0_0_1px_rgb(84_62_32/0.10)] dark:aria-expanded:bg-neutral-800 dark:aria-expanded:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] disabled:bg-none disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] disabled:text-neutral-900/40 disabled:shadow-none dark:disabled:bg-neutral-800/60 dark:disabled:text-neutral-100/40", eX, "min-h-[56px] w-full justify-start gap-3 px-3 text-left")}><span aria-hidden={!0} className={eU("relative inline-flex size-8 shrink-0 overflow-hidden rounded-full select-none", "size-[36px]")}><span className="flex size-full items-center justify-center rounded-[inherit] bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_24%,white)] text-[12px]/[16px] font-extrabold tabular-nums text-neutral-900 dark:text-neutral-100 dark:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_22%,var(--color-neutral-900))]">AR</span></span><span className="min-w-0 flex-1"><span className={eU("text-[15px]/[20px] font-bold", eZ, "block truncate")}>Ana Reyes</span><span className={eU("text-[13px]/[16px] font-semibold tabular-nums", e0, "mt-0.5 block truncate")}>ana@meridian.example</span></span></button></div></motion.div>}</__mod_47962.N></div></div>;
    }
  },
  at = {
    "mobile-1": 680,
    "mobile-2": 680,
    "mobile-3": 720,
    "mobile-4": 700,
    "mobile-5": 740
  };

export { aa as components };
export { at as heights };

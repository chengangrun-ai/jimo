import { motion, AnimatePresence } from "motion/react";
import * as __mod_90089 from "../_helpers/90089";
import * as __mod_92881 from "../_helpers/92881";
import * as __mod_10303 from "../_helpers/10303";
import * as __mod_20484 from "../_helpers/20484";
import * as __mod_88366 from "../_helpers/88366";
import * as __mod_77368 from "../_helpers/77368";
import * as __mod_96022 from "../_helpers/96022";
import * as __mod_38897 from "../_helpers/38897";
import * as __mod_52266 from "../_helpers/52266";
import * as __mod_33126 from "../_helpers/33126";
import * as __mod_81515 from "../_helpers/81515";
import * as __mod_13426 from "../_helpers/13426";
import * as __mod_86829 from "../_helpers/86829";
import * as __mod_79698 from "../_helpers/79698";
import * as __mod_35748 from "../_helpers/35748";
import * as __mod_2972 from "../_helpers/2972";
import * as __mod_50969 from "../_helpers/50969";
import * as __mod_22728 from "../_helpers/22728";
import * as __mod_5042 from "../_helpers/5042";
import * as __mod_8051 from "../_helpers/8051";
import * as __mod_66575 from "../_helpers/66575";
import * as __mod_12556 from "../_helpers/12556";
import * as __mod_59649 from "../_helpers/59649";
import * as __mod_89886 from "../_helpers/89886";
import * as __mod_47962 from "../_helpers/47962";
import * as __mod_17384 from "../_helpers/17384";
import * as __mod_19809 from "../_helpers/19809";
import * as __mod_44647 from "../_helpers/44647";
import * as __mod_55410 from "../_helpers/55410";
import * as __mod_90987 from "../_helpers/90987";
import * as __mod_33786 from "../_helpers/33786";
import * as __mod_92330 from "../_helpers/92330";
import * as __mod_91162 from "../_helpers/91162";
import * as __mod_62714 from "../_helpers/62714";
import * as __mod_96037 from "../_helpers/96037";
import * as __mod_89289 from "../_helpers/89289";
import * as __mod_31517 from "../_helpers/31517";
import * as __mod_78805 from "../_helpers/78805";
import * as __mod_57887 from "../_helpers/57887";
import * as __mod_65174 from "../_helpers/65174";
import * as __mod_46176 from "../_helpers/46176";
import * as __mod_34951 from "../_helpers/34951";
import * as __mod_83331 from "../_helpers/83331";
import * as __mod_20148 from "../_helpers/20148";
import * as __mod_1836 from "../_helpers/1836";
import * as __mod_95518 from "../_helpers/95518";
import * as __mod_63163 from "../_helpers/63163";
import * as __mod_80071 from "../_helpers/80071";
import * as __mod_64739 from "../_helpers/64739";
import * as __mod_13473 from "../_helpers/13473";
import * as __mod_87470 from "../_helpers/87470";
import * as __mod_36586 from "../_helpers/36586";
import * as __mod_58770 from "../_helpers/58770";
import * as __mod_68656 from "../_helpers/68656";
import * as __mod_92752 from "../_helpers/92752";
import * as __mod_1497 from "../_helpers/1497";
import * as __mod_47293 from "../_helpers/47293";
import * as __mod_2775 from "../_helpers/2775";
import * as __mod_99199 from "../_helpers/99199";
import * as __mod_48419 from "../_helpers/48419";
import * as __mod_80469 from "../_helpers/80469";
import * as __mod_3367 from "../_helpers/3367";
import * as __mod_18976 from "../_helpers/18976";
import * as __mod_66654 from "../_helpers/66654";
import * as __mod_85018 from "../_helpers/85018";
import * as __mod_71497 from "../_helpers/71497";
import * as __mod_71344 from "../_helpers/71344";
import * as __mod_55299 from "../_helpers/55299";
import * as __mod_48240 from "../_helpers/48240";
import * as __mod_2139 from "../_helpers/2139";
/**
 * Navbar 3
 * slug: navbar-3
 * category: navbar
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let p = (...e) => e.filter(Boolean).join(" "),
  h = [.2, 0, 0, 1],
  k = {
    type: "spring",
    bounce: 0,
    duration: .35
  },
  m = "relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-transparent text-neutral-900 hover:not-disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] active:not-disabled:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] disabled:text-neutral-900/40 dark:text-neutral-100 dark:hover:not-disabled:bg-neutral-100/8 dark:active:not-disabled:bg-neutral-100/12 dark:aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:disabled:text-neutral-100/40",
  v = "size-10 rounded-[calc(var(--rb-r-full,999px))]",
  g = p("text-[13px]/[16px] font-bold tabular-nums", "text-neutral-900/62 dark:text-neutral-100/62"),
  f = [{
    label: "Products",
    icon: !0
  }, {
    label: "Mobile",
    icon: !0
  }, {
    label: "Checkout Flow",
    icon: !1
  }],
  w = [{
    id: "discussion",
    label: "Discussion",
    count: 3
  }, {
    id: "tasks",
    label: "Tasks",
    count: 0
  }, {
    id: "timeline",
    label: "Timeline",
    count: 0
  }, {
    id: "files",
    label: "Files",
    count: 0
  }, {
    id: "overview",
    label: "Overview",
    count: 0
  }],
  j = ["AM", "RK", "TN", "JD"],
  y = {
    discussion: [{
      title: "Open threads",
      rows: ["Payment retries", "Guest checkout"]
    }, {
      title: "Mentions",
      rows: ["Refund copy review"]
    }, {
      title: "Resolved",
      rows: ["Address autofill", "Coupon field"]
    }],
    tasks: [{
      title: "In progress",
      rows: ["Wallet sheet", "Card vaulting"]
    }, {
      title: "In review",
      rows: ["Step-up challenge state"]
    }, {
      title: "Done",
      rows: ["Order summary", "Tax breakdown"]
    }],
    timeline: [{
      title: "This week",
      rows: ["Design freeze", "Copy handoff"]
    }, {
      title: "Next week",
      rows: ["Beta rollout"]
    }, {
      title: "Later",
      rows: ["Wallet support", "Split payments"]
    }],
    files: [{
      title: "Specs",
      rows: ["checkout-flow.pdf", "states.fig"]
    }, {
      title: "Research",
      rows: ["drop-off-study.md"]
    }, {
      title: "Assets",
      rows: ["icons.zip", "brand-marks.svg"]
    }],
    overview: [{
      title: "Goal",
      rows: ["Cut checkout drop-off by 12%"]
    }, {
      title: "Owners",
      rows: ["Payments", "Growth"]
    }, {
      title: "Status",
      rows: ["On track for the July release"]
    }]
  };
let M = (...e) => e.filter(Boolean).join(" "),
  B = [.2, 0, 0, 1],
  O = e => ({
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1
    },
    exit: {
      opacity: 0,
      transition: {
        duration: .12,
        ease: B
      }
    },
    transition: {
      duration: .16 * !e,
      ease: B
    }
  }),
  I = "text-neutral-900/62 dark:text-neutral-100/62",
  T = "text-[14px]/[20px] font-medium",
  F = "rounded-[calc(var(--rb-r-sm,6px))] transition-[color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:text-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:hover:text-neutral-100",
  q = "text-neutral-900/62 dark:text-neutral-100/62 select-none",
  H = "relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] text-neutral-900 dark:text-neutral-100 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] active:not-disabled:translate-y-px active:not-disabled:shadow-[inset_0_1px_3px_rgb(84_62_32/0.16),0_0_0_1px_rgb(84_62_32/0.10)] dark:active:not-disabled:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14),0_0_0_1px_rgb(84_62_32/0.10)] dark:aria-expanded:bg-neutral-800 dark:aria-expanded:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] disabled:bg-none disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] disabled:text-neutral-900/40 disabled:shadow-none dark:disabled:bg-neutral-800/60 dark:disabled:text-neutral-100/40",
  G = "size-10 rounded-[calc(var(--rb-r-full,999px))]",
  V = "min-w-52 max-w-[min(480px,calc(100vw-2rem))] overflow-x-hidden overflow-y-auto overscroll-contain rounded-[calc(var(--rb-r-3xl,16px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] p-2 text-neutral-900 dark:text-neutral-100 outline-none shadow-[0_0_0_1px_rgb(84_62_32/0.08),0_24px_56px_-20px_rgb(84_62_32/0.34),0_6px_16px_-8px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.65),0_24px_56px_-16px_rgb(0_0_0/0.8)]",
  $ = "relative flex min-h-10 w-full cursor-default items-center gap-2.5 rounded-[calc(var(--rb-r-md,8px))] px-3 py-2 text-left text-[15px]/[20px] font-semibold text-neutral-900 outline-none select-none [&_svg]:shrink-0 [&_svg]:text-neutral-900/70 hover:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] focus-visible:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] data-[highlighted]:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-disabled:cursor-not-allowed aria-disabled:text-neutral-900/40 dark:text-neutral-100 dark:[&_svg]:text-neutral-100/70 dark:hover:bg-neutral-100/7 dark:focus-visible:bg-neutral-100/7 dark:data-[highlighted]:bg-neutral-100/7 dark:aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-disabled:text-neutral-100/40",
  K = "ps-9",
  J = "pointer-events-none absolute start-3 flex size-[18px] items-center justify-center",
  U = M("text-[13px]/[16px] font-bold tabular-nums", I),
  Y = M(T, I),
  Q = [{
    id: "recent",
    label: "Recently updated"
  }, {
    id: "created",
    label: "Date created"
  }, {
    id: "name",
    label: "Name"
  }, {
    id: "owner",
    label: "Owner"
  }],
  X = ["Assigned to me", "Due this week", "Blocked"],
  Z = [{
    name: "Payment retries",
    sprint: "Sprint 24",
    owner: "Nadia V."
  }, {
    name: "Guest checkout polish",
    sprint: "Sprint 24",
    owner: "Marcus S."
  }, {
    name: "Address autofill",
    sprint: "Sprint 23",
    owner: "Priya P."
  }, {
    name: "Order summary copy",
    sprint: "Sprint 23",
    owner: "Tom P."
  }];
let eo = (...e) => e.filter(Boolean).join(" "),
  es = [.2, 0, 0, 1],
  ec = e => ({
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1
    },
    exit: {
      opacity: 0,
      transition: {
        duration: .12,
        ease: es
      }
    },
    transition: {
      duration: .16 * !e,
      ease: es
    }
  }),
  ed = "text-neutral-900/62 dark:text-neutral-100/62",
  e_ = "relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-transparent text-neutral-900 hover:not-disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] active:not-disabled:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] disabled:text-neutral-900/40 dark:text-neutral-100 dark:hover:not-disabled:bg-neutral-100/8 dark:active:not-disabled:bg-neutral-100/12 dark:aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:disabled:text-neutral-100/40",
  eb = "relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-transparent text-neutral-900/78 dark:text-neutral-100/78 hover:not-disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] hover:not-disabled:text-neutral-900 active:not-disabled:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] aria-expanded:text-neutral-900 disabled:text-neutral-900/40 dark:hover:not-disabled:bg-neutral-100/8 dark:hover:not-disabled:text-neutral-100 dark:active:not-disabled:bg-neutral-100/12 dark:aria-expanded:bg-neutral-100/8 dark:aria-expanded:text-neutral-100 dark:disabled:text-neutral-100/40",
  ex = "h-10 gap-2 rounded-[calc(var(--rb-r-full,999px))] px-5 text-[15px]/[20px] font-bold",
  eu = "size-10 rounded-[calc(var(--rb-r-full,999px))]",
  ep = "shrink-0 text-neutral-900/78 dark:text-neutral-100/78",
  eh = "flex size-full items-center justify-center rounded-[inherit] bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_24%,white)] text-[12px]/[16px] font-extrabold tabular-nums text-neutral-900 dark:text-neutral-100 dark:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_22%,var(--color-neutral-900))]",
  ek = "min-w-52 max-w-[min(480px,calc(100vw-2rem))] overflow-x-hidden overflow-y-auto overscroll-contain rounded-[calc(var(--rb-r-3xl,16px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] p-2 text-neutral-900 dark:text-neutral-100 outline-none shadow-[0_0_0_1px_rgb(84_62_32/0.08),0_24px_56px_-20px_rgb(84_62_32/0.34),0_6px_16px_-8px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.65),0_24px_56px_-16px_rgb(0_0_0/0.8)]",
  em = "relative flex min-h-10 w-full cursor-default items-center gap-2.5 rounded-[calc(var(--rb-r-md,8px))] px-3 py-2 text-left text-[15px]/[20px] font-semibold text-neutral-900 outline-none select-none [&_svg]:shrink-0 [&_svg]:text-neutral-900/70 hover:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] focus-visible:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] data-[highlighted]:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-disabled:cursor-not-allowed aria-disabled:text-neutral-900/40 dark:text-neutral-100 dark:[&_svg]:text-neutral-100/70 dark:hover:bg-neutral-100/7 dark:focus-visible:bg-neutral-100/7 dark:data-[highlighted]:bg-neutral-100/7 dark:aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-disabled:text-neutral-100/40",
  ev = "mx-1 my-2 h-[1.5px] rounded-[calc(var(--rb-r-full,999px))] bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:bg-neutral-100/8",
  eg = eo("text-[14px]/[20px] font-medium", ed),
  ef = ["Northwind", "Cedar Labs", "Harbor Coffee"],
  ew = ["web-app", "marketing-site", "billing-api", "mobile-client"],
  ej = ["Production", "Staging", "Preview"];
let eR = (...e) => e.filter(Boolean).join(" "),
  eD = [.2, 0, 0, 1],
  eM = "border-t border-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:border-neutral-100/7",
  eB = "relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] text-neutral-900 dark:text-neutral-100 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] active:not-disabled:translate-y-px active:not-disabled:shadow-[inset_0_1px_3px_rgb(84_62_32/0.16),0_0_0_1px_rgb(84_62_32/0.10)] dark:active:not-disabled:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14),0_0_0_1px_rgb(84_62_32/0.10)] dark:aria-expanded:bg-neutral-800 dark:aria-expanded:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] disabled:bg-none disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] disabled:text-neutral-900/40 disabled:shadow-none dark:disabled:bg-neutral-800/60 dark:disabled:text-neutral-100/40",
  eO = "relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-transparent text-neutral-900/78 dark:text-neutral-100/78 hover:not-disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] hover:not-disabled:text-neutral-900 active:not-disabled:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] aria-expanded:text-neutral-900 disabled:text-neutral-900/40 dark:hover:not-disabled:bg-neutral-100/8 dark:hover:not-disabled:text-neutral-100 dark:active:not-disabled:bg-neutral-100/12 dark:aria-expanded:bg-neutral-100/8 dark:aria-expanded:text-neutral-100 dark:disabled:text-neutral-100/40",
  eI = "h-10 gap-2 rounded-[calc(var(--rb-r-full,999px))] px-5 text-[15px]/[20px] font-bold",
  eT = "flex h-10 w-full min-w-0 cursor-pointer items-center gap-2.5 rounded-[calc(var(--rb-r-full,999px))] px-3 text-left text-[15px]/[20px] font-semibold text-neutral-900/75 transition-[background-color,box-shadow,color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] [&_svg]:shrink-0 hover:bg-neutral-900/5 hover:text-neutral-900 aria-[current=page]:bg-white aria-[current=page]:font-bold aria-[current=page]:text-neutral-900 aria-[current=page]:shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:text-neutral-100/75 dark:hover:bg-neutral-100/6 dark:hover:text-neutral-100 dark:aria-[current=page]:bg-[color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800))] dark:aria-[current=page]:text-neutral-100 dark:aria-[current=page]:shadow-[inset_0_1px_0_rgb(255_255_255/0.08),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)]",
  eF = {
    Product: [{
      icon: __mod_90089.A,
      label: "Platform",
      hint: "The workspace your team runs on"
    }, {
      icon: __mod_92881.A,
      label: "Automations",
      hint: "Rules that move work forward"
    }, {
      icon: __mod_10303.A,
      label: "Integrations",
      hint: "Connect the tools you already use"
    }, {
      icon: __mod_20484.A,
      label: "Security",
      hint: "Controls, audit logs and SSO"
    }],
    Company: [{
      icon: __mod_88366.A,
      label: "About",
      hint: "Who we are and what we build"
    }, {
      icon: __mod_77368.A,
      label: "Blog",
      hint: "Product notes and engineering posts"
    }, {
      icon: __mod_96022.A,
      label: "Careers",
      hint: "Nine open roles across four teams"
    }, {
      icon: __mod_38897.A,
      label: "Support",
      hint: "Reach a human within one hour"
    }]
  },
  eq = ["Pricing", "Changelog"];
let eX = (...e) => e.filter(Boolean).join(" "),
  eZ = [.2, 0, 0, 1],
  e0 = "bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))]",
  e1 = "relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] text-neutral-900 dark:text-neutral-100 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] active:not-disabled:translate-y-px active:not-disabled:shadow-[inset_0_1px_3px_rgb(84_62_32/0.16),0_0_0_1px_rgb(84_62_32/0.10)] dark:active:not-disabled:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14),0_0_0_1px_rgb(84_62_32/0.10)] dark:aria-expanded:bg-neutral-800 dark:aria-expanded:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] disabled:bg-none disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] disabled:text-neutral-900/40 disabled:shadow-none dark:disabled:bg-neutral-800/60 dark:disabled:text-neutral-100/40",
  e2 = "relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-transparent text-neutral-900/78 dark:text-neutral-100/78 hover:not-disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] hover:not-disabled:text-neutral-900 active:not-disabled:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] aria-expanded:text-neutral-900 disabled:text-neutral-900/40 dark:hover:not-disabled:bg-neutral-100/8 dark:hover:not-disabled:text-neutral-100 dark:active:not-disabled:bg-neutral-100/12 dark:aria-expanded:bg-neutral-100/8 dark:aria-expanded:text-neutral-100 dark:disabled:text-neutral-100/40",
  e5 = "h-10 gap-2 rounded-[calc(var(--rb-r-full,999px))] px-5 text-[15px]/[20px] font-bold",
  e6 = eX(e0, "border-b border-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:border-neutral-100/7", "shadow-[0_0_0_1px_rgb(84_62_32/0.08),0_24px_56px_-20px_rgb(84_62_32/0.34),0_6px_16px_-8px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.65),0_24px_56px_-16px_rgb(0_0_0/0.8)]"),
  e8 = {
    Platform: [{
      title: "Build",
      items: [{
        icon: __mod_52266.A,
        label: "Runtime",
        hint: "Deploy in nine regions"
      }, {
        icon: __mod_33126.A,
        label: "Preview branches",
        hint: "One URL per pull request"
      }, {
        icon: __mod_81515.A,
        label: "Webhooks",
        hint: "Signed, retried, replayable"
      }]
    }, {
      title: "Operate",
      items: [{
        icon: __mod_13426.A,
        label: "Live metrics",
        hint: "Second-level resolution"
      }, {
        icon: __mod_86829.A,
        label: "Managed data",
        hint: "Backups every six hours"
      }, {
        icon: __mod_79698.A,
        label: "Secrets",
        hint: "Scoped per environment"
      }]
    }],
    Solutions: [{
      title: "By team",
      items: [{
        icon: __mod_35748.A,
        label: "Platform teams",
        hint: "Golden paths, not gates"
      }, {
        icon: __mod_2972.A,
        label: "Data teams",
        hint: "Pipelines you can read"
      }, {
        icon: __mod_52266.A,
        label: "Agencies",
        hint: "Ship client work faster"
      }]
    }, {
      title: "By stage",
      items: [{
        icon: __mod_33126.A,
        label: "Startups",
        hint: "Free for the first year"
      }, {
        icon: __mod_86829.A,
        label: "Scale-ups",
        hint: "Usage that grows with you"
      }, {
        icon: __mod_79698.A,
        label: "Enterprise",
        hint: "SSO, audit logs, DPA"
      }]
    }]
  },
  e4 = ["Docs", "Pricing"];
let aa = (...e) => e.filter(Boolean).join(" "),
  ar = [.2, 0, 0, 1],
  at = e => ({
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1
    },
    exit: {
      opacity: 0,
      transition: {
        duration: .12,
        ease: ar
      }
    },
    transition: {
      duration: .16 * !e,
      ease: ar
    }
  }),
  an = "text-neutral-900 dark:text-neutral-100",
  al = "text-neutral-900/78 dark:text-neutral-100/78",
  ai = "text-neutral-900/62 dark:text-neutral-100/62",
  ao = "text-[15px]/[20px] font-bold",
  as = "text-[14px]/[20px] font-medium",
  ac = "text-[13px]/[16px] font-semibold tabular-nums",
  ad = "divide-y divide-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:divide-neutral-100/7",
  a_ = "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))]",
  ab = "relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-transparent text-neutral-900 hover:not-disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] active:not-disabled:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] disabled:text-neutral-900/40 dark:text-neutral-100 dark:hover:not-disabled:bg-neutral-100/8 dark:active:not-disabled:bg-neutral-100/12 dark:aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:disabled:text-neutral-100/40",
  ax = "size-10 rounded-[calc(var(--rb-r-full,999px))]",
  au = "flex shrink-0 items-center gap-2 text-[15px]/[20px] font-semibold text-neutral-900/62 dark:text-neutral-100/62 select-none first:ps-3.5 last:pe-3.5 has-[button]:first:ps-1 has-[button]:last:pe-1",
  ap = "min-w-52 max-w-[min(480px,calc(100vw-2rem))] overflow-x-hidden overflow-y-auto overscroll-contain rounded-[calc(var(--rb-r-3xl,16px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] p-2 text-neutral-900 dark:text-neutral-100 outline-none shadow-[0_0_0_1px_rgb(84_62_32/0.08),0_24px_56px_-20px_rgb(84_62_32/0.34),0_6px_16px_-8px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.65),0_24px_56px_-16px_rgb(0_0_0/0.8)]",
  ah = "relative flex min-h-10 w-full cursor-default items-center gap-2.5 rounded-[calc(var(--rb-r-md,8px))] px-3 py-2 text-left text-[15px]/[20px] font-semibold text-neutral-900 outline-none select-none [&_svg]:shrink-0 [&_svg]:text-neutral-900/70 hover:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] focus-visible:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] data-[highlighted]:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-disabled:cursor-not-allowed aria-disabled:text-neutral-900/40 dark:text-neutral-100 dark:[&_svg]:text-neutral-100/70 dark:hover:bg-neutral-100/7 dark:focus-visible:bg-neutral-100/7 dark:data-[highlighted]:bg-neutral-100/7 dark:aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-disabled:text-neutral-100/40",
  ak = "relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] text-neutral-900 dark:text-neutral-100 shadow-[0_0_0_1px_rgb(84_62_32/0.07),0_1px_2px_rgb(84_62_32/0.06),0_8px_22px_-10px_rgb(84_62_32/0.20)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_0_0_1px_rgb(0_0_0/0.6),0_10px_24px_-12px_rgb(0_0_0/0.8)]",
  am = aa(ak, "shadow-[0_0_0_1px_rgb(84_62_32/0.08),0_24px_56px_-20px_rgb(84_62_32/0.34),0_6px_16px_-8px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.65),0_24px_56px_-16px_rgb(0_0_0/0.8)]"),
  av = aa("inline-flex h-5.5 min-w-5.5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden whitespace-nowrap rounded-[calc(var(--rb-r-full,999px))] px-2.5 text-[12px]/[16px] font-bold tabular-nums", "bg-white text-neutral-900 dark:text-neutral-100 shadow-[0_0_0_1px_rgb(84_62_32/0.09),0_1px_2px_rgb(84_62_32/0.08)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_0_0_1px_rgb(0_0_0/0.55)] dark:bg-neutral-800", "pointer-events-none absolute -top-0.5 -right-0.5 h-[16px] min-w-[16px] px-[4px]"),
  ag = [{
    id: "n1",
    who: "Nadia V.",
    text: "requested review on Billing retry policy",
    at: "4m"
  }, {
    id: "n2",
    who: "Deploy bot",
    text: "shipped web-app 24.6.1 to production",
    at: "26m"
  }, {
    id: "n3",
    who: "Marcus S.",
    text: "left three comments on Checkout copy",
    at: "1h"
  }, {
    id: "n4",
    who: "Harbor Coffee",
    text: "upgraded to the Scale plan",
    at: "3h"
  }],
  af = ["Billing retry policy", "Checkout drop-off study", "Q3 pricing experiment", "Webhook signing keys"];
let ay = (...e) => e.filter(Boolean).join(" "),
  aN = [.2, 0, 0, 1],
  az = "border-b border-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:border-neutral-100/7",
  aA = "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))]",
  aS = "relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-transparent text-neutral-900 hover:not-disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] active:not-disabled:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] disabled:text-neutral-900/40 dark:text-neutral-100 dark:hover:not-disabled:bg-neutral-100/8 dark:active:not-disabled:bg-neutral-100/12 dark:aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:disabled:text-neutral-100/40",
  aC = "h-10 gap-2 rounded-[calc(var(--rb-r-full,999px))] px-5 text-[15px]/[20px] font-bold",
  aW = "size-10 rounded-[calc(var(--rb-r-full,999px))]",
  aE = [{
    id: "overview",
    label: "Overview",
    sub: ["Summary", "Activity", "Goals"]
  }, {
    id: "revenue",
    label: "Revenue",
    sub: ["MRR", "Expansion", "Churn"]
  }, {
    id: "customers",
    label: "Customers",
    sub: ["Accounts", "Segments", "Health"]
  }, {
    id: "usage",
    label: "Usage",
    sub: ["Requests", "Storage", "Seats"]
  }, {
    id: "reports",
    label: "Reports",
    sub: ["Saved", "Scheduled", "Exports"]
  }],
  aP = {
    overview: [{
      label: "Active accounts",
      value: "1,284",
      note: "+38 this week"
    }, {
      label: "Open tasks",
      value: "62",
      note: "9 overdue"
    }, {
      label: "Weekly sessions",
      value: "18.4k",
      note: "+6.1%"
    }],
    revenue: [{
      label: "MRR",
      value: "$248k",
      note: "+4.2% MoM"
    }, {
      label: "Expansion",
      value: "$31k",
      note: "22 upgrades"
    }, {
      label: "Net churn",
      value: "-1.1%",
      note: "Best this year"
    }],
    customers: [{
      label: "Accounts",
      value: "1,284",
      note: "412 on Scale"
    }, {
      label: "At risk",
      value: "17",
      note: "Health below 40"
    }, {
      label: "Renewals",
      value: "38",
      note: "Next 30 days"
    }],
    usage: [{
      label: "Requests",
      value: "94.2M",
      note: "Rolling 30 days"
    }, {
      label: "Storage",
      value: "8.1 TB",
      note: "+240 GB"
    }, {
      label: "Seats used",
      value: "3,910",
      note: "of 4,500"
    }],
    reports: [{
      label: "Saved reports",
      value: "46",
      note: "12 shared"
    }, {
      label: "Scheduled",
      value: "9",
      note: "Next run 06:00"
    }, {
      label: "Exports",
      value: "214",
      note: "Last 90 days"
    }]
  };
let aB = (...e) => e.filter(Boolean).join(" "),
  aO = [.2, 0, 0, 1],
  aI = "text-neutral-900/62 dark:text-neutral-100/62",
  aT = "text-[14px]/[20px] font-medium",
  aF = "relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-transparent text-neutral-900/78 dark:text-neutral-100/78 hover:not-disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] hover:not-disabled:text-neutral-900 active:not-disabled:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] aria-expanded:text-neutral-900 disabled:text-neutral-900/40 dark:hover:not-disabled:bg-neutral-100/8 dark:hover:not-disabled:text-neutral-100 dark:active:not-disabled:bg-neutral-100/12 dark:aria-expanded:bg-neutral-100/8 dark:aria-expanded:text-neutral-100 dark:disabled:text-neutral-100/40",
  aq = "h-10 gap-2 rounded-[calc(var(--rb-r-full,999px))] px-5 text-[15px]/[20px] font-bold",
  aH = "shrink-0 text-[14px]/[20px] font-semibold tabular-nums text-neutral-900/62 dark:text-neutral-100/62",
  aG = aB(aT, aI),
  aV = [{
    id: "all",
    label: "All",
    count: 248
  }, {
    id: "open",
    label: "Open",
    count: 46
  }, {
    id: "review",
    label: "In review",
    count: 12
  }, {
    id: "done",
    label: "Done",
    count: 190
  }],
  a$ = [{
    id: "archived",
    label: "Archived",
    count: 84
  }, {
    id: "drafts",
    label: "Drafts",
    count: 7
  }, {
    id: "spam",
    label: "Blocked",
    count: 3
  }],
  aK = [{
    title: "Retry failed webhooks after backoff",
    who: "Nadia V.",
    at: "12m"
  }, {
    title: "Split checkout bundle by route",
    who: "Marcus S.",
    at: "1h"
  }, {
    title: "Backfill invoice tax regions",
    who: "Priya R.",
    at: "3h"
  }, {
    title: "Rotate signing keys for Harbor Coffee",
    who: "Tom A.",
    at: "6h"
  }, {
    title: "Trim onboarding email sequence",
    who: "Elena M.",
    at: "1d"
  }];
let aQ = (...e) => e.filter(Boolean).join(" "),
  aX = [.2, 0, 0, 1],
  aZ = "bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-100/8",
  a0 = "text-neutral-900/62 dark:text-neutral-100/62",
  a1 = "text-[15px]/[20px] font-bold",
  a2 = "text-[14px]/[20px] font-medium",
  a5 = "shadow-[0_0_0_1px_rgb(84_62_32/0.08),0_24px_56px_-20px_rgb(84_62_32/0.34),0_6px_16px_-8px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.65),0_24px_56px_-16px_rgb(0_0_0/0.8)]",
  a6 = "relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-transparent text-neutral-900 hover:not-disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] active:not-disabled:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] disabled:text-neutral-900/40 dark:text-neutral-100 dark:hover:not-disabled:bg-neutral-100/8 dark:active:not-disabled:bg-neutral-100/12 dark:aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:disabled:text-neutral-100/40",
  a8 = "relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-transparent text-neutral-900/78 dark:text-neutral-100/78 hover:not-disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] hover:not-disabled:text-neutral-900 active:not-disabled:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] aria-expanded:text-neutral-900 disabled:text-neutral-900/40 dark:hover:not-disabled:bg-neutral-100/8 dark:hover:not-disabled:text-neutral-100 dark:active:not-disabled:bg-neutral-100/12 dark:aria-expanded:bg-neutral-100/8 dark:aria-expanded:text-neutral-100 dark:disabled:text-neutral-100/40",
  a4 = "h-10 gap-2 rounded-[calc(var(--rb-r-full,999px))] px-5 text-[15px]/[20px] font-bold",
  a9 = "size-7 rounded-[calc(var(--rb-r-full,999px))]",
  a3 = "size-10 rounded-[calc(var(--rb-r-full,999px))]",
  a7 = "relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] text-neutral-900 dark:text-neutral-100 shadow-[0_0_0_1px_rgb(84_62_32/0.07),0_1px_2px_rgb(84_62_32/0.06),0_8px_22px_-10px_rgb(84_62_32/0.20)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_0_0_1px_rgb(0_0_0/0.6),0_10px_24px_-12px_rgb(0_0_0/0.8)]",
  re = "flex h-10 w-full min-w-0 cursor-pointer items-center gap-2.5 rounded-[calc(var(--rb-r-full,999px))] px-3 text-left text-[15px]/[20px] font-semibold text-neutral-900/75 transition-[background-color,box-shadow,color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] [&_svg]:shrink-0 hover:bg-neutral-900/5 hover:text-neutral-900 aria-[current=page]:bg-white aria-[current=page]:font-bold aria-[current=page]:text-neutral-900 aria-[current=page]:shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:text-neutral-100/75 dark:hover:bg-neutral-100/6 dark:hover:text-neutral-100 dark:aria-[current=page]:bg-[color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800))] dark:aria-[current=page]:text-neutral-100 dark:aria-[current=page]:shadow-[inset_0_1px_0_rgb(255_255_255/0.08),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)]",
  ra = aQ("bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))]", "border-b border-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:border-neutral-100/7", a5),
  rr = aQ(a7, a5),
  rt = aQ("inline-flex h-5.5 min-w-5.5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden whitespace-nowrap rounded-[calc(var(--rb-r-full,999px))] px-2.5 text-[12px]/[16px] font-bold tabular-nums", "bg-white text-neutral-900 dark:text-neutral-100 shadow-[0_0_0_1px_rgb(84_62_32/0.09),0_1px_2px_rgb(84_62_32/0.08)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_0_0_1px_rgb(0_0_0/0.55)] dark:bg-neutral-800", "pointer-events-none absolute -top-0.5 -right-0.5 h-[16px] min-w-[16px] px-[4px]"),
  rn = [{
    id: "brew",
    label: "Brewing",
    columns: [{
      title: "Machines",
      items: ["Espresso", "Filter", "Grinders", "Kettles"]
    }, {
      title: "Manual",
      items: ["Pour over", "Press", "Moka", "Siphon"]
    }, {
      title: "Accessories",
      items: ["Scales", "Tampers", "Filters", "Jugs"]
    }]
  }, {
    id: "beans",
    label: "Beans",
    columns: [{
      title: "Roast",
      items: ["Light", "Medium", "Dark", "Decaf"]
    }, {
      title: "Origin",
      items: ["Ethiopia", "Colombia", "Kenya", "Brazil"]
    }, {
      title: "Format",
      items: ["Whole bean", "Ground", "Capsules", "Sample"]
    }]
  }],
  rl = ["Subscriptions", "Gifting", "Journal"],
  ri = [{
    id: "c1",
    name: "Meridian espresso grinder",
    price: 248,
    qty: 1
  }, {
    id: "c2",
    name: "Harbor blend, 1kg",
    price: 32,
    qty: 2
  }];
let rd = (...e) => e.filter(Boolean).join(" "),
  r_ = [.2, 0, 0, 1],
  rb = "text-neutral-900 dark:text-neutral-100",
  rx = "text-neutral-900/62 dark:text-neutral-100/62",
  ru = "text-[15px]/[20px] font-bold",
  rp = "text-[14px]/[20px] font-medium",
  rh = "relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] text-neutral-900 dark:text-neutral-100 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] active:not-disabled:translate-y-px active:not-disabled:shadow-[inset_0_1px_3px_rgb(84_62_32/0.16),0_0_0_1px_rgb(84_62_32/0.10)] dark:active:not-disabled:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14),0_0_0_1px_rgb(84_62_32/0.10)] dark:aria-expanded:bg-neutral-800 dark:aria-expanded:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] disabled:bg-none disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] disabled:text-neutral-900/40 disabled:shadow-none dark:disabled:bg-neutral-800/60 dark:disabled:text-neutral-100/40",
  rk = "relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-transparent text-neutral-900 hover:not-disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] active:not-disabled:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] disabled:text-neutral-900/40 dark:text-neutral-100 dark:hover:not-disabled:bg-neutral-100/8 dark:active:not-disabled:bg-neutral-100/12 dark:aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:disabled:text-neutral-100/40",
  rm = "h-10 gap-2 rounded-[calc(var(--rb-r-full,999px))] px-5 text-[15px]/[20px] font-bold",
  rv = "size-10 rounded-[calc(var(--rb-r-full,999px))]",
  rg = "flex h-10 w-full min-w-0 cursor-pointer items-center gap-2.5 rounded-[calc(var(--rb-r-full,999px))] px-3 text-left text-[15px]/[20px] font-semibold text-neutral-900/75 transition-[background-color,box-shadow,color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] [&_svg]:shrink-0 hover:bg-neutral-900/5 hover:text-neutral-900 aria-[current=page]:bg-white aria-[current=page]:font-bold aria-[current=page]:text-neutral-900 aria-[current=page]:shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:text-neutral-100/75 dark:hover:bg-neutral-100/6 dark:hover:text-neutral-100 dark:aria-[current=page]:bg-[color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800))] dark:aria-[current=page]:text-neutral-100 dark:aria-[current=page]:shadow-[inset_0_1px_0_rgb(255_255_255/0.08),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)]",
  rf = rd(rp, rx),
  rw = ["v4.2 (latest)", "v4.1", "v3.8 (LTS)", "Canary"],
  rj = ["Docs", "Reference", "Guides", "Changelog"],
  ry = [{
    title: "Getting started",
    items: ["Installation", "Project structure", "First request"]
  }, {
    title: "Core concepts",
    items: ["Routing", "Data loading", "Caching", "Streaming"]
  }, {
    title: "Deployment",
    items: ["Runtimes", "Edge regions", "Observability"]
  }];
let rC = (...e) => e.filter(Boolean).join(" "),
  rW = [.2, 0, 0, 1],
  rE = e => ({
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1
    },
    exit: {
      opacity: 0,
      transition: {
        duration: .12,
        ease: rW
      }
    },
    transition: {
      duration: .16 * !e,
      ease: rW
    }
  }),
  rP = "text-neutral-900/78 dark:text-neutral-100/78",
  rL = "text-[14px]/[20px] font-medium",
  rR = "relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-transparent text-neutral-900 hover:not-disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] active:not-disabled:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] disabled:text-neutral-900/40 dark:text-neutral-100 dark:hover:not-disabled:bg-neutral-100/8 dark:active:not-disabled:bg-neutral-100/12 dark:aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:disabled:text-neutral-100/40",
  rD = "h-10 gap-2 rounded-[calc(var(--rb-r-full,999px))] px-5 text-[15px]/[20px] font-bold",
  rM = "size-10 rounded-[calc(var(--rb-r-full,999px))]",
  rB = "relative flex w-full min-w-0 cursor-text items-center rounded-[calc(var(--rb-r-xl,12px))] data-concentric:rounded-[var(--rb-r-5xl,22px)] border border-transparent bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] text-[15px]/[20px] font-medium text-neutral-900 transition-[border-color,box-shadow,background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:not-focus-within:not-has-[[aria-invalid=true]]:not-has-[input:disabled]:not-has-[input[readonly]]:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] focus-within:border-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] focus-within:bg-white focus-within:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] has-[[aria-invalid=true]]:border-[oklch(60%_0.236_26)] has-[[aria-invalid=true]]:bg-[oklch(97.5%_0.016_26)] has-[input:disabled]:cursor-not-allowed has-[input:disabled]:text-neutral-900/40 has-[input:disabled]:shadow-none has-[input[readonly]]:cursor-default has-[input[readonly]]:shadow-none dark:text-neutral-100 dark:hover:not-focus-within:not-has-[[aria-invalid=true]]:not-has-[input:disabled]:not-has-[input[readonly]]:bg-neutral-900 dark:focus-within:border-[var(--rb-accent,oklch(81%_0.16_163))] dark:focus-within:bg-neutral-900 dark:focus-within:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:has-[[aria-invalid=true]]:border-[oklch(65.2%_0.219_26)] dark:has-[[aria-invalid=true]]:bg-[oklch(26%_0.04_26)] dark:has-[input:disabled]:text-neutral-100/40",
  rO = "h-10",
  rI = "h-full w-full min-w-0 flex-1 bg-transparent px-3.5 outline-none [[data-affix]+&]:ps-2 [&:has(+[data-affix])]:pe-2 placeholder:font-medium placeholder:text-neutral-900/55 disabled:cursor-not-allowed disabled:placeholder:text-neutral-900/30 dark:placeholder:text-neutral-100/55 dark:disabled:placeholder:text-neutral-100/30 dark:[color-scheme:dark]",
  rT = "relative flex min-h-10 w-full cursor-default items-center gap-2.5 rounded-[calc(var(--rb-r-md,8px))] px-3 py-2 text-left text-[15px]/[20px] font-semibold text-neutral-900 outline-none select-none [&_svg]:shrink-0 [&_svg]:text-neutral-900/70 hover:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] focus-visible:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] data-[highlighted]:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-disabled:cursor-not-allowed aria-disabled:text-neutral-900/40 dark:text-neutral-100 dark:[&_svg]:text-neutral-100/70 dark:hover:bg-neutral-100/7 dark:focus-visible:bg-neutral-100/7 dark:data-[highlighted]:bg-neutral-100/7 dark:aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-disabled:text-neutral-100/40",
  rF = rC("hover:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] dark:hover:bg-neutral-100/6", "transition-[color,background-color,border-color,box-shadow,outline-color,opacity,scale,translate] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms]", "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))]"),
  rq = [{
    initials: "NV",
    name: "Nadia V."
  }, {
    initials: "MS",
    name: "Marcus S."
  }, {
    initials: "PR",
    name: "Priya R."
  }];
let rV = (...e) => e.filter(Boolean).join(" "),
  r$ = {
    type: "spring",
    bounce: 0,
    duration: .35
  },
  rK = [.2, 0, 0, 1],
  rJ = "text-neutral-900 dark:text-neutral-100",
  rU = "text-[15px]/[20px] font-bold",
  rY = "shadow-[0_0_0_1px_rgb(84_62_32/0.08),0_24px_56px_-20px_rgb(84_62_32/0.34),0_6px_16px_-8px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.65),0_24px_56px_-16px_rgb(0_0_0/0.8)]",
  rQ = "relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_68%,white),var(--rb-accent,oklch(84%_0.15_165)))] text-[var(--rb-accent-fg,oklch(26%_0.06_168))] shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_4px_10px_-4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_80%,transparent)] hover:not-disabled:-translate-y-px hover:not-disabled:brightness-[1.04] hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_7px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_85%,transparent)] active:not-disabled:translate-y-px active:not-disabled:brightness-[0.98] active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_55%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] motion-reduce:hover:translate-y-0 disabled:opacity-45 disabled:shadow-none dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_78%,white),var(--rb-accent,oklch(81%_0.16_163)))] dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_6px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,transparent)] dark:hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_9px_22px_-8px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_60%,transparent)] dark:active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_45%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black)] dark:disabled:shadow-none",
  rX = "relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-transparent text-neutral-900 hover:not-disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] active:not-disabled:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] disabled:text-neutral-900/40 dark:text-neutral-100 dark:hover:not-disabled:bg-neutral-100/8 dark:active:not-disabled:bg-neutral-100/12 dark:aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:disabled:text-neutral-100/40",
  rZ = "h-10 gap-2 rounded-[calc(var(--rb-r-full,999px))] px-5 text-[15px]/[20px] font-bold",
  r0 = "size-10 rounded-[calc(var(--rb-r-full,999px))]",
  r1 = "relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] text-neutral-900 dark:text-neutral-100 shadow-[0_0_0_1px_rgb(84_62_32/0.07),0_1px_2px_rgb(84_62_32/0.06),0_8px_22px_-10px_rgb(84_62_32/0.20)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_0_0_1px_rgb(0_0_0/0.6),0_10px_24px_-12px_rgb(0_0_0/0.8)]",
  r2 = ["Product", "Customers", "Pricing", "Docs"],
  r5 = [{
    id: "Product",
    heading: "One workspace for the whole release",
    body: "Plan, review and ship from a single timeline. Every change carries its own context, so nobody has to reconstruct the story later."
  }, {
    id: "Customers",
    heading: "Teams that ship weekly",
    body: "Harbor Coffee, Cedar Labs and Northwind run their release process here. Median cycle time dropped by a third in the first quarter."
  }, {
    id: "Pricing",
    heading: "Priced per released change",
    body: "No seat minimums and no upgrade gate on collaborators. You pay for what actually reaches production."
  }, {
    id: "Docs",
    heading: "Start in under five minutes",
    body: "Install the CLI, point it at a repository, and the first release timeline builds itself from your existing history."
  }],
  r6 = (...e) => e.filter(Boolean).join(" "),
  r8 = [.2, 0, 0, 1],
  r4 = "bg-white dark:bg-neutral-950",
  r9 = "rounded-[var(--rb-r-4xl,18px)]",
  r3 = "text-neutral-900 dark:text-neutral-100",
  r7 = "text-neutral-900/62 dark:text-neutral-100/62",
  te = "text-[17px]/[22px] font-extrabold",
  ta = "focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))]",
  tr = "relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-transparent text-neutral-900 hover:not-disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] active:not-disabled:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] disabled:text-neutral-900/40 dark:text-neutral-100 dark:hover:not-disabled:bg-neutral-100/8 dark:active:not-disabled:bg-neutral-100/12 dark:aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:disabled:text-neutral-100/40",
  tt = "size-10 rounded-[calc(var(--rb-r-full,999px))]",
  tn = "cursor-pointer hover:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] dark:hover:bg-neutral-100/6 active:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] dark:active:bg-neutral-100/10",
  tl = "shrink-0 text-[14px]/[20px] font-semibold tabular-nums text-neutral-900/62 dark:text-neutral-100/62",
  ti = ["Work", "Studio", "Journal"],
  to = ["Services", "Careers", "Contact"],
  ts = [{
    label: "Work",
    note: "24 selected projects"
  }, {
    label: "Studio",
    note: "How we operate"
  }, {
    label: "Journal",
    note: "Notes and process"
  }, {
    label: "Services",
    note: "Brand, product, motion"
  }, {
    label: "Careers",
    note: "Three open roles"
  }, {
    label: "Contact",
    note: "Start a project"
  }],
  tc = [{
    name: "Harbor Coffee",
    kind: "Brand identity",
    year: "2024"
  }, {
    name: "Meridian",
    kind: "Product design",
    year: "2024"
  }, {
    name: "Cedar Labs",
    kind: "Site and motion",
    year: "2023"
  }, {
    name: "Northwind",
    kind: "Design system",
    year: "2023"
  }];
let tb = (...e) => e.filter(Boolean).join(" "),
  tx = [.2, 0, 0, 1],
  tu = "text-neutral-900/78 dark:text-neutral-100/78",
  tp = "relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-transparent text-neutral-900 hover:not-disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] active:not-disabled:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] disabled:text-neutral-900/40 dark:text-neutral-100 dark:hover:not-disabled:bg-neutral-100/8 dark:active:not-disabled:bg-neutral-100/12 dark:aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:disabled:text-neutral-100/40",
  th = "size-10 rounded-[calc(var(--rb-r-full,999px))]",
  tk = [{
    id: "budgets",
    title: "Error budgets are a scheduling tool",
    body: "A budget only changes behaviour if it is allowed to run out. When it does, the team stops shipping features and spends the week on reliability instead. That trade has to be agreed before the incident, not during it."
  }, {
    id: "windows",
    title: "Pick the window before the target",
    body: "A thirty-day rolling window forgives a bad Tuesday by the end of the month. A calendar quarter does not. Choose the window that matches how the team plans, then set a target you are willing to defend in a review."
  }, {
    id: "alerts",
    title: "Alert on burn rate, not on breach",
    body: "By the time the objective is breached the conversation is already about blame. Multi-window burn-rate alerts fire while there is still budget left to spend, which keeps the response technical."
  }, {
    id: "review",
    title: "Review the objective, not just the misses",
    body: "If an objective has never been close to breaching in a year, it is measuring something nobody depends on. Retire it and write one that would actually change a decision."
  }],
  tm = {
    "navbar-1": function () {
      let [e, a] = (0, React.useState)("tasks"),
        [r, N] = (0, React.useState)(!1),
        z = (0, __mod_50969.I)(),
        {
          ref: A,
          edges: S,
          onScroll: C
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
        }(),
        W = y[e];
      return <div className={p("bg-white dark:bg-neutral-950", "text-neutral-900 dark:text-neutral-100", "relative flex h-full min-h-[480px] w-full flex-col overflow-hidden")}><header className={p("border-b border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900", "shrink-0 px-4 pt-5 sm:px-6")}><h1 className="text-[22px]/[28px] font-extrabold tracking-[-0.01em]">Checkout Flow</h1><div className="mt-2 flex min-h-8 items-center gap-2"><nav aria-label="Breadcrumb" className="min-w-0 flex-1"><ol className={p("flex min-w-0 flex-wrap items-center gap-x-2 gap-y-1 text-[15px]/[20px] font-semibold text-neutral-900/78 dark:text-neutral-100/78", "max-sm:flex-nowrap")}>{f.map((e, a) => {
                  let r = a === f.length - 1;
                  return <li className="flex min-w-0 items-center gap-1.5">{a > 0 && <__mod_22728.n icon={__mod_5042.A} size={16} strokeWidth={2} aria-hidden="true" className={p("text-neutral-900/62 dark:text-neutral-100/62 select-none", "shrink-0")} />}{e.icon && <__mod_22728.n icon={__mod_8051.A} size={16} strokeWidth={2} aria-hidden="true" className="shrink-0" />}{r ? <span aria-current="page" className={p("font-bold text-neutral-900 dark:text-neutral-100", "truncate")}>{e.label}</span> : <a href="#" className={p("rounded-[calc(var(--rb-r-sm,6px))] transition-[color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:text-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:hover:text-neutral-100", "truncate")}>{e.label}</a>}</li>;
                })}</ol></nav><div className="flex shrink-0 items-center gap-0.5"><button type="button" aria-label="Search this project" className={p(m, v)}><__mod_22728.n icon={__mod_66575.A} size={18} strokeWidth={2} aria-hidden="true" /></button><button type="button" aria-pressed={r} aria-label={r ? "Remove from starred" : "Add to starred"} onClick={() => N(e => !e)} className={p(m, v)}><motion.span initial={!z && {
                  scale: .7
                }} animate={{
                  scale: 1
                }} transition={k} className="inline-flex"><__mod_22728.n icon={__mod_12556.A} size={18} strokeWidth={2} aria-hidden="true" className={p(r && "[&_path]:fill-current")} /></motion.span></button><button type="button" aria-label="More project actions" className={p(m, v)}><__mod_22728.n icon={__mod_59649.A} size={18} strokeWidth={2} aria-hidden="true" /></button></div></div><div className="mt-1 flex items-end justify-between gap-3"><div className="relative -mb-px min-w-0"><div ref={A} onScroll={C} role="tablist" aria-label="Project sections" onKeyDown={r => {
                let t = w.findIndex(a => a.id === e);
                "ArrowRight" === r.key ? (r.preventDefault(), a(w[(t + 1) % w.length].id)) : "ArrowLeft" === r.key ? (r.preventDefault(), a(w[(t - 1 + w.length) % w.length].id)) : "Home" === r.key ? (r.preventDefault(), a(w[0].id)) : "End" === r.key && (r.preventDefault(), a(w[w.length - 1].id));
              }} className="flex min-h-9 items-stretch gap-1 overflow-x-auto">{w.map(r => {
                  let n = r.id === e;
                  return <button type="button" role="tab" data-tab={r.id} aria-selected={n} tabIndex={n ? 0 : -1} onClick={() => a(r.id)} className="relative inline-flex min-h-10 shrink-0 cursor-pointer items-center justify-center gap-1.5 rounded-[calc(var(--rb-r-lg,10px))] px-3 text-[15px]/[20px] font-bold whitespace-nowrap text-neutral-900/78 dark:text-neutral-100/78 select-none transition-[color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:text-neutral-900 after:absolute after:inset-x-2.5 after:bottom-0 after:h-[3px] after:rounded-[calc(var(--rb-r-full,999px))] after:bg-transparent after:transition-[background-color] aria-selected:text-neutral-900 aria-selected:after:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] disabled:cursor-not-allowed disabled:text-neutral-900/40 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:hover:text-neutral-100 dark:aria-selected:text-neutral-100 dark:aria-selected:after:bg-[var(--rb-accent,oklch(81%_0.16_163))] dark:disabled:text-neutral-100/40">{r.label}{r.count > 0 && <span className={p("inline-flex h-5.5 min-w-5.5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden whitespace-nowrap rounded-[calc(var(--rb-r-full,999px))] px-2.5 text-[12px]/[16px] font-bold tabular-nums", "bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] text-neutral-900 dark:text-neutral-100 dark:bg-neutral-100/12", "h-[18px] min-w-[18px]")}>{r.count}</span>}</button>;
                })}</div><div aria-hidden="true" className={p("bg-linear-to-r from-[var(--rb-n-100,oklch(97.7%_0.0055_80))] to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-900", "pointer-events-none absolute top-0 bottom-px left-0 w-8", S.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={p("bg-linear-to-l from-[var(--rb-n-100,oklch(97.7%_0.0055_80))] to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-900", "pointer-events-none absolute top-0 right-0 bottom-px w-8", S.end ? "opacity-100" : "opacity-0")} /></div><div className="mb-1 flex shrink-0 items-center gap-2.5"><button type="button" aria-label="Invite people to this project" className={p("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_68%,white),var(--rb-accent,oklch(84%_0.15_165)))] text-[var(--rb-accent-fg,oklch(26%_0.06_168))] shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_4px_10px_-4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_80%,transparent)] hover:not-disabled:-translate-y-px hover:not-disabled:brightness-[1.04] hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_7px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_85%,transparent)] active:not-disabled:translate-y-px active:not-disabled:brightness-[0.98] active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_55%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] motion-reduce:hover:translate-y-0 disabled:opacity-45 disabled:shadow-none dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_78%,white),var(--rb-accent,oklch(81%_0.16_163)))] dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_6px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,transparent)] dark:hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_9px_22px_-8px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_60%,transparent)] dark:active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_45%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black)] dark:disabled:shadow-none", v)}><__mod_22728.n icon={__mod_89886.A} size={18} strokeWidth={2} aria-hidden="true" /></button><span aria-hidden="true" className={p("border-r border-transparent", "hidden h-5 w-px sm:block")} /><div className="hidden items-center sm:flex"><ul className="flex items-center *:not-first:-ms-1.5 *:not-last:[mask-image:radial-gradient(50%_50%_at_calc(150%-6px)_50%,transparent_calc(100%+1.5px),#000_calc(100%+2px))]">{j.map(e => <li className={p("relative inline-flex size-8 shrink-0 overflow-hidden rounded-full select-none", "size-[28px]")}><span className="flex size-full items-center justify-center rounded-[inherit] bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_24%,white)] text-[12px]/[16px] font-extrabold tabular-nums text-neutral-900 dark:text-neutral-100 dark:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_22%,var(--color-neutral-900))]">{e.charAt(0)}</span></li>)}</ul><span className={p(g, "ml-2")}>+9</span></div></div></div></header><div className="min-h-0 flex-1 overflow-y-auto px-4 py-5 sm:px-6"><__mod_47962.N mode="wait" initial={!1}><motion.div initial={{
              opacity: 0
            }} animate={{
              opacity: 1
            }} exit={{
              opacity: 0,
              transition: {
                duration: .12,
                ease: h
              }
            }} transition={{
              duration: .16 * !z,
              ease: h
            }} className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{W.map(e => <section className="relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 shadow-[inset_0_0_0_1px_rgb(84_62_32/0.05)] dark:shadow-[inset_0_0_0_1px_rgb(255_255_255/0.05)]"><h2 className={p("flex min-h-12 min-w-0 shrink-0 items-center gap-2 px-4 has-[button]:pe-2.5", "min-w-0 truncate text-[16px]/[20px] font-extrabold text-neutral-900 dark:text-neutral-100")}>{e.title}</h2><ul className={p("mx-1 mb-1 flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-5xl,22px))] border border-transparent bg-white dark:bg-neutral-950 shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] [&:has(+*)]:mb-0", "divide-y divide-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:divide-neutral-100/7")}>{e.rows.map(e => <li className={p("relative flex min-h-12 w-full min-w-0 flex-wrap items-center gap-x-3 gap-y-1 py-2.5 text-left text-neutral-900 dark:text-neutral-100 transition-[background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] has-[[data-description]]:min-h-16", "text-[14px]/[20px] font-medium", "px-3")}>{e}</li>)}</ul></section>)}</motion.div></__mod_47962.N></div></div>;
    },
    "navbar-2": function () {
      let e = (0, __mod_50969.I)(),
        [a, r] = (0, React.useState)(null),
        [c, d] = (0, React.useState)("recent"),
        [_, b] = (0, React.useState)([]),
        [u, p] = (0, React.useState)(!1),
        h = (0, React.useRef)(null);
      (0, React.useEffect)(() => {
        if (!a) return;
        let e = h.current?.ownerDocument;
        if (!e) return;
        let t = e => {
            let a = e.target;
            a?.closest?.("[data-menu-root]") || r(null);
          },
          n = e => {
            "Escape" === e.key && r(null);
          };
        return e.addEventListener("pointerdown", t), e.addEventListener("keydown", n), () => {
          e.removeEventListener("pointerdown", t), e.removeEventListener("keydown", n);
        };
      }, [a]), (0, React.useEffect)(() => {
        if (!u) return;
        let e = h.current?.ownerDocument.defaultView,
          a = e?.setTimeout(() => p(!1), 1600);
        return () => {
          void 0 !== a && e?.clearTimeout(a);
        };
      }, [u]);
      let k = e => b(a => a.includes(e) ? a.filter(a => a !== e) : [...a, e]),
        m = e => ({
          "aria-haspopup": "menu",
          "aria-expanded": a === e,
          onClick: () => {
            r(a => a === e ? null : e);
          }
        });
      return <div ref={h} className={M("bg-white dark:bg-neutral-950", "text-neutral-900 dark:text-neutral-100", "relative flex h-full min-h-[400px] w-full flex-col overflow-hidden")}><header className={M("border-b border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900", "relative z-20 flex h-14 shrink-0 items-center gap-2 px-3 sm:px-4")}><nav aria-label="Breadcrumb" className="min-w-0 flex-1"><ol className={M("flex min-w-0 flex-wrap items-center gap-x-2 gap-y-1 text-[15px]/[20px] font-semibold text-neutral-900/78 dark:text-neutral-100/78", "max-sm:flex-nowrap")}><li className="flex items-center gap-1.5"><a href="#" className={M(F, "inline-flex items-center gap-1.5")}><__mod_22728.n icon={__mod_17384.A} size={16} strokeWidth={2} aria-hidden="true" /><span className="hidden sm:inline">Home</span></a><span aria-hidden="true" className={q}>/</span></li><li className="flex min-w-0 items-center gap-1.5"><a href="#" className={M(F, "inline-flex items-center gap-1.5 truncate")}><__mod_22728.n icon={__mod_19809.A} size={16} strokeWidth={2} aria-hidden="true" className="shrink-0" />Projects</a><span aria-hidden="true" className={q}>/</span></li><li className="flex min-w-0"><span aria-current="page" className={M("font-bold text-neutral-900 dark:text-neutral-100", "truncate")}>Sprint 24</span></li></ol></nav><div className="hidden items-center sm:flex"><ul className="flex items-center *:not-first:-ms-1 *:not-last:[mask-image:radial-gradient(50%_50%_at_calc(150%-4px)_50%,transparent_calc(100%+1.5px),#000_calc(100%+2px))]">{["NV", "MS", "PP"].map(e => <li className={M("relative inline-flex size-8 shrink-0 overflow-hidden rounded-full select-none", "size-[24px]")}><span className="flex size-full items-center justify-center rounded-[inherit] bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_24%,white)] text-[12px]/[16px] font-extrabold tabular-nums text-neutral-900 dark:text-neutral-100 dark:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_22%,var(--color-neutral-900))]">{e.charAt(0)}</span></li>)}</ul><span className={M(U, "ml-2")}>+8</span></div><div className="relative shrink-0" data-menu-root={!0}><button type="button" aria-label="Invite" {...m("invite")} className={M(H, "h-10 gap-2 rounded-[calc(var(--rb-r-full,999px))] px-5 text-[15px]/[20px] font-bold")}><__mod_22728.n icon={__mod_44647.A} size={18} strokeWidth={2} aria-hidden="true" /><span className="hidden sm:inline">Invite</span></button><__mod_47962.N>{"invite" === a && <motion.div {...O(e)} className={M("flex max-h-80 w-72 max-w-[calc(100vw-2rem)] flex-col gap-3 overflow-y-auto rounded-[calc(var(--rb-r-3xl,16px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] p-4 text-[15px]/[22px] font-medium text-neutral-900 dark:text-neutral-100 outline-none shadow-[0_0_0_1px_rgb(84_62_32/0.08),0_24px_56px_-20px_rgb(84_62_32/0.34),0_6px_16px_-8px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.65),0_24px_56px_-16px_rgb(0_0_0/0.8)]", "absolute top-full right-0 z-30 mt-1.5 w-[260px] origin-top-right")}><label htmlFor="navbar-2-invite" className="flex w-fit items-center gap-2 text-[15px]/[20px] font-bold text-neutral-900 dark:text-neutral-100">Invite to Sprint 24</label><div className="flex gap-1.5"><div className={M("relative flex w-full min-w-0 cursor-text items-center rounded-[calc(var(--rb-r-xl,12px))] data-concentric:rounded-[var(--rb-r-5xl,22px)] border border-transparent bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] text-[15px]/[20px] font-medium text-neutral-900 transition-[border-color,box-shadow,background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:not-focus-within:not-has-[[aria-invalid=true]]:not-has-[input:disabled]:not-has-[input[readonly]]:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] focus-within:border-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] focus-within:bg-white focus-within:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] has-[[aria-invalid=true]]:border-[oklch(60%_0.236_26)] has-[[aria-invalid=true]]:bg-[oklch(97.5%_0.016_26)] has-[input:disabled]:cursor-not-allowed has-[input:disabled]:text-neutral-900/40 has-[input:disabled]:shadow-none has-[input[readonly]]:cursor-default has-[input[readonly]]:shadow-none dark:text-neutral-100 dark:hover:not-focus-within:not-has-[[aria-invalid=true]]:not-has-[input:disabled]:not-has-[input[readonly]]:bg-neutral-900 dark:focus-within:border-[var(--rb-accent,oklch(81%_0.16_163))] dark:focus-within:bg-neutral-900 dark:focus-within:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:has-[[aria-invalid=true]]:border-[oklch(65.2%_0.219_26)] dark:has-[[aria-invalid=true]]:bg-[oklch(26%_0.04_26)] dark:has-[input:disabled]:text-neutral-100/40", "h-10")}><input id="navbar-2-invite" type="email" placeholder="name@company.com" className="h-full w-full min-w-0 flex-1 bg-transparent px-3.5 outline-none [[data-affix]+&]:ps-2 [&:has(+[data-affix])]:pe-2 placeholder:font-medium placeholder:text-neutral-900/55 disabled:cursor-not-allowed disabled:placeholder:text-neutral-900/30 dark:placeholder:text-neutral-100/55 dark:disabled:placeholder:text-neutral-100/30 dark:[color-scheme:dark]" /></div><button type="button" aria-label="Send invite" className={M("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_68%,white),var(--rb-accent,oklch(84%_0.15_165)))] text-[var(--rb-accent-fg,oklch(26%_0.06_168))] shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_4px_10px_-4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_80%,transparent)] hover:not-disabled:-translate-y-px hover:not-disabled:brightness-[1.04] hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_7px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_85%,transparent)] active:not-disabled:translate-y-px active:not-disabled:brightness-[0.98] active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_55%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] motion-reduce:hover:translate-y-0 disabled:opacity-45 disabled:shadow-none dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_78%,white),var(--rb-accent,oklch(81%_0.16_163)))] dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_6px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,transparent)] dark:hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_9px_22px_-8px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_60%,transparent)] dark:active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_45%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black)] dark:disabled:shadow-none", G)}><__mod_22728.n icon={__mod_55410.A} size={18} strokeWidth={2} aria-hidden="true" /></button></div><div className="-mx-2"><button type="button" onClick={() => p(!0)} className={$}><__mod_22728.n icon={u ? __mod_90987.A : __mod_33786.A} size={16} strokeWidth={2} aria-hidden="true" />{u ? "Link copied" : "Copy invite link"}</button></div><span role="status" className="sr-only">{u ? "Invite link copied" : ""}</span></motion.div>}</__mod_47962.N></div><div className="relative shrink-0" data-menu-root={!0}><button type="button" aria-label="Filter tasks" {...m("filter")} className={M(H, G)}><__mod_22728.n icon={__mod_92330.A} size={18} strokeWidth={2} aria-hidden="true" /></button><__mod_47962.N>{"filter" === a && <motion.div {...O(e)} role="menu" className={M(V, "absolute top-full right-0 z-30 mt-1.5 w-[200px] origin-top-right")}>{X.map(e => {
                  let a = _.includes(e);
                  return <button type="button" role="menuitemcheckbox" aria-checked={a} onClick={() => k(e)} className={M($, K)}>{a && <span className={J}><__mod_22728.n icon={__mod_90987.A} size={18} strokeWidth={2} aria-hidden="true" /></span>}{e}</button>;
                })}</motion.div>}</__mod_47962.N></div><div className="relative shrink-0" data-menu-root={!0}><button type="button" aria-label="Sort tasks" {...m("sort")} className={M(H, G)}><__mod_22728.n icon={__mod_91162.A} size={18} strokeWidth={2} aria-hidden="true" /></button><__mod_47962.N>{"sort" === a && <motion.div {...O(e)} role="menu" className={M(V, "absolute top-full right-0 z-30 mt-1.5 w-[190px] min-w-[190px] origin-top-right")}>{Q.map(e => <button type="button" role="menuitemradio" aria-checked={c === e.id} onClick={() => {
                  d(e.id), r(null);
                }} className={M($, K)}>{c === e.id && <span className={J}><__mod_22728.n icon={__mod_90987.A} size={18} strokeWidth={2} aria-hidden="true" /></span>}{e.label}</button>)}</motion.div>}</__mod_47962.N></div><div className="relative shrink-0" data-menu-root={!0}><button type="button" aria-label="More actions" {...m("more")} className={M("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-transparent text-neutral-900 hover:not-disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] active:not-disabled:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] disabled:text-neutral-900/40 dark:text-neutral-100 dark:hover:not-disabled:bg-neutral-100/8 dark:active:not-disabled:bg-neutral-100/12 dark:aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:disabled:text-neutral-100/40", G)}><__mod_22728.n icon={__mod_59649.A} size={18} strokeWidth={2} aria-hidden="true" /></button><__mod_47962.N>{"more" === a && <motion.div {...O(e)} role="menu" className={M(V, "absolute top-full right-0 z-30 mt-1.5 w-[180px] min-w-[180px] origin-top-right")}><button type="button" role="menuitem" className={$}><__mod_22728.n icon={__mod_62714.A} size={16} strokeWidth={2} aria-hidden="true" />Duplicate sprint</button><button type="button" role="menuitem" className={$}><__mod_22728.n icon={__mod_33786.A} size={16} strokeWidth={2} aria-hidden="true" />Copy sprint link</button><div className="mx-1 my-2 h-[1.5px] rounded-[calc(var(--rb-r-full,999px))] bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:bg-neutral-100/8" /><button type="button" role="menuitem" className="relative flex min-h-10 w-full cursor-default items-center gap-2.5 rounded-[calc(var(--rb-r-md,8px))] px-3 py-2 text-left text-[15px]/[20px] font-semibold outline-none select-none [&_svg]:shrink-0 text-[oklch(51%_0.18_26)] hover:bg-[oklch(96%_0.03_26)] focus-visible:bg-[oklch(96%_0.03_26)] data-[highlighted]:bg-[oklch(96%_0.03_26)] aria-disabled:cursor-not-allowed aria-disabled:text-neutral-900/40 dark:text-[oklch(78%_0.13_26)] dark:hover:bg-[oklch(30%_0.065_26)] dark:focus-visible:bg-[oklch(30%_0.065_26)] dark:data-[highlighted]:bg-[oklch(30%_0.065_26)] dark:aria-disabled:text-neutral-100/40"><__mod_22728.n icon={__mod_96037.A} size={16} strokeWidth={2} aria-hidden="true" />Archive sprint</button></motion.div>}</__mod_47962.N></div></header>{_.length > 0 && <div className={M("border-b border-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:border-neutral-100/7", "shrink-0 overflow-hidden")}><div className={M("flex w-full min-w-0 flex-wrap items-center gap-x-3 gap-y-2", "px-3 py-2 sm:px-4")}><__mod_47962.N initial={!1} mode="popLayout">{_.map(a => <motion.span layout={!e} initial={{
                opacity: 0
              }} animate={{
                opacity: 1
              }} exit={{
                opacity: 0,
                transition: {
                  duration: .12,
                  ease: B
                }
              }} transition={{
                duration: .16 * !e,
                ease: B
              }} className="relative inline-flex h-8 max-w-full min-w-0 shrink-0 cursor-pointer items-center gap-1.5 whitespace-nowrap rounded-[calc(var(--rb-r-full,999px))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] px-3.5 text-[14px]/[18px] font-bold text-neutral-900 dark:text-neutral-100 select-none transition-[background-color,border-color,box-shadow,color,scale,translate,outline-color] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:translate-y-px active:duration-[90ms] motion-reduce:active:translate-y-0 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] aria-pressed:bg-none aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-pressed:shadow-[inset_0_0_0_1.5px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14)] disabled:cursor-not-allowed disabled:text-neutral-900/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-pressed:shadow-[inset_0_0_0_1.5px_var(--rb-accent,oklch(81%_0.16_163))] dark:aria-expanded:bg-neutral-800 dark:disabled:text-neutral-100/40">{a}<button type="button" aria-label={`Remove ${a} filter`} onClick={() => k(a)} className="-me-1.5 inline-flex size-6 shrink-0 cursor-pointer items-center justify-center rounded-[calc(var(--rb-r-full,999px))] text-neutral-900/78 dark:text-neutral-100/78 transition-[background-color,color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-neutral-900/8 hover:text-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:hover:bg-neutral-100/12 dark:hover:text-neutral-100"><__mod_22728.n icon={__mod_89289.A} size={14} strokeWidth={2} aria-hidden="true" /></button></motion.span>)}</__mod_47962.N><button type="button" onClick={() => b([])} className={M("inline-flex h-8 cursor-pointer items-center rounded-[calc(var(--rb-r-full,999px))] px-3 text-[14px]/[18px] font-bold text-neutral-900/78 dark:text-neutral-100/78 transition-[background-color,color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-neutral-900/5 hover:text-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:hover:bg-neutral-100/6 dark:hover:text-neutral-100", "ml-1")}>Clear all</button></div></div>}<div className="min-h-0 flex-1 overflow-y-auto p-3 sm:p-4"><p className={M(Y, "mb-2 flex flex-wrap gap-x-3")}><span>Sorted by {Q.find(e => e.id === c)?.label.toLowerCase()}</span>{_.length > 0 && <span>{_.length} filter applied</span>}</p><ul className={M("relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] text-neutral-900 dark:text-neutral-100 shadow-[0_0_0_1px_rgb(84_62_32/0.07),0_1px_2px_rgb(84_62_32/0.06),0_8px_22px_-10px_rgb(84_62_32/0.20)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_0_0_1px_rgb(0_0_0/0.6),0_10px_24px_-12px_rgb(0_0_0/0.8)]", "divide-y divide-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:divide-neutral-100/7")}>{Z.map(e => <li className={M("relative flex min-h-12 w-full min-w-0 flex-wrap items-center gap-x-3 gap-y-1 py-2.5 text-left text-neutral-900 dark:text-neutral-100 transition-[background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] has-[[data-description]]:min-h-16", "justify-between px-4")}><span className={M(T, "min-w-0 flex-1 truncate")}>{e.name}</span><span className={M("shrink-0 text-[14px]/[20px] font-semibold tabular-nums text-neutral-900/62 dark:text-neutral-100/62", "flex gap-x-3")}><span>{e.sprint}</span><span className="w-18">{e.owner}</span></span></li>)}</ul></div></div>;
    },
    "navbar-3": function () {
      let e = (0, __mod_50969.I)(),
        [a, r] = (0, React.useState)(null),
        [c, d] = (0, React.useState)(ef[0]),
        [b, x] = (0, React.useState)(ew[0]),
        [p, h] = (0, React.useState)(ej[0]),
        [k, m] = (0, React.useState)(""),
        v = (0, React.useRef)(null);
      (0, React.useEffect)(() => {
        if (!a) return;
        let e = v.current?.ownerDocument;
        if (!e) return;
        let t = e => {
            let a = e.target;
            a?.closest?.("[data-menu-root]") || r(null);
          },
          n = e => {
            "Escape" === e.key && r(null);
          };
        return e.addEventListener("pointerdown", t), e.addEventListener("keydown", n), () => {
          e.removeEventListener("pointerdown", t), e.removeEventListener("keydown", n);
        };
      }, [a]);
      let g = e => {
          r(a => a === e ? null : e);
        },
        f = ew.filter(e => e.toLowerCase().includes(k.trim().toLowerCase())),
        w = <span aria-hidden="true" className={eo("text-neutral-900/62 dark:text-neutral-100/62 select-none", "px-0.5")}>/</span>;
      return <div ref={v} className={eo("bg-white dark:bg-neutral-950", "text-neutral-900 dark:text-neutral-100", "relative flex h-full min-h-[480px] w-full flex-col overflow-hidden")}><header className={eo("border-b border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900", "relative z-20 flex h-14 shrink-0 items-center gap-1 ps-1 pe-3 sm:ps-2 sm:pe-4")}><div className="relative min-w-0" data-menu-root={!0}><button type="button" aria-haspopup="menu" aria-expanded={"org" === a} onClick={() => g("org")} className={eo(eb, ex, "max-w-[min(170px,100%)]")}><span aria-hidden="true" className={eo("inline-flex shrink-0 items-center justify-center overflow-hidden rounded-[calc(var(--rb-r-lg,10px))] bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_68%,white),var(--rb-accent,oklch(84%_0.15_165)))] text-[var(--rb-accent-fg,oklch(26%_0.06_168))] shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] select-none dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_78%,white),var(--rb-accent,oklch(81%_0.16_163)))] dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.4),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black)]", "text-[13px]/[16px] font-bold tabular-nums", "size-[20px]")}>{c.charAt(0)}</span><span className="truncate">{c}</span><__mod_22728.n icon={__mod_31517.A} size={16} strokeWidth={2} aria-hidden="true" className={ep} /></button><__mod_47962.N>{"org" === a && <motion.div {...ec(e)} role="menu" className={eo(ek, "absolute top-full left-0 z-30 mt-1.5 w-[220px] origin-top-left")}>{ef.map(e => <button type="button" role="menuitemradio" aria-checked={e === c} onClick={() => {
                  d(e), r(null);
                }} className={em}><span aria-hidden="true" className={eo("relative inline-flex size-8 shrink-0 overflow-hidden rounded-[calc(var(--rb-r-lg,10px))] select-none", "size-[20px]")}><span className={eh}>{e.charAt(0)}</span></span><span className="min-w-0 flex-1 truncate">{e}</span>{e === c && <__mod_22728.n icon={__mod_90987.A} size={18} strokeWidth={2} aria-hidden="true" />}</button>)}<div className={ev} /><button type="button" role="menuitem" className={em}><__mod_22728.n icon={__mod_89886.A} size={16} strokeWidth={2} aria-hidden="true" />Create organisation</button></motion.div>}</__mod_47962.N></div>{w}<div className="relative hidden min-w-0 sm:block" data-menu-root={!0}><button type="button" aria-haspopup="menu" aria-expanded={"project" === a} onClick={() => g("project")} className={eo(eb, ex, "max-w-[min(190px,100%)]")}><__mod_22728.n icon={__mod_78805.A} size={18} strokeWidth={2} aria-hidden="true" className="shrink-0" /><span className="truncate">{b}</span><__mod_22728.n icon={__mod_31517.A} size={16} strokeWidth={2} aria-hidden="true" className={ep} /></button><__mod_47962.N>{"project" === a && <motion.div {...ec(e)} className={eo(ek, "absolute top-full left-0 z-30 mt-1.5 w-[240px] origin-top-left")}><div className="relative p-1"><label htmlFor="navbar-3-project" className="sr-only">Search projects</label><div className={eo("relative flex w-full min-w-0 cursor-text items-center rounded-[calc(var(--rb-r-xl,12px))] data-concentric:rounded-[var(--rb-r-5xl,22px)] border border-transparent bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] text-[15px]/[20px] font-medium text-neutral-900 transition-[border-color,box-shadow,background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:not-focus-within:not-has-[[aria-invalid=true]]:not-has-[input:disabled]:not-has-[input[readonly]]:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] focus-within:border-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] focus-within:bg-white focus-within:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] has-[[aria-invalid=true]]:border-[oklch(60%_0.236_26)] has-[[aria-invalid=true]]:bg-[oklch(97.5%_0.016_26)] has-[input:disabled]:cursor-not-allowed has-[input:disabled]:text-neutral-900/40 has-[input:disabled]:shadow-none has-[input[readonly]]:cursor-default has-[input[readonly]]:shadow-none dark:text-neutral-100 dark:hover:not-focus-within:not-has-[[aria-invalid=true]]:not-has-[input:disabled]:not-has-[input[readonly]]:bg-neutral-900 dark:focus-within:border-[var(--rb-accent,oklch(81%_0.16_163))] dark:focus-within:bg-neutral-900 dark:focus-within:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:has-[[aria-invalid=true]]:border-[oklch(65.2%_0.219_26)] dark:has-[[aria-invalid=true]]:bg-[oklch(26%_0.04_26)] dark:has-[input:disabled]:text-neutral-100/40", "h-10")}><span data-affix={!0} className="flex shrink-0 items-center gap-2 text-[15px]/[20px] font-semibold text-neutral-900/62 dark:text-neutral-100/62 select-none first:ps-3.5 last:pe-3.5 has-[button]:first:ps-1 has-[button]:last:pe-1"><__mod_22728.n icon={__mod_66575.A} size={16} strokeWidth={2} aria-hidden="true" /></span><input id="navbar-3-project" value={k} onChange={e => m(e.target.value)} placeholder="Find a project…" className="h-full w-full min-w-0 flex-1 bg-transparent px-3.5 outline-none [[data-affix]+&]:ps-2 [&:has(+[data-affix])]:pe-2 placeholder:font-medium placeholder:text-neutral-900/55 disabled:cursor-not-allowed disabled:placeholder:text-neutral-900/30 dark:placeholder:text-neutral-100/55 dark:disabled:placeholder:text-neutral-100/30 dark:[color-scheme:dark]" /></div></div>{0 === f.length ? <p className={eo("max-w-[48ch] text-[15px]/[22px] font-medium text-neutral-900/78 dark:text-neutral-100/78", "px-2.5 py-3 text-center")}>No project matches that name.</p> : f.map(e => <button type="button" onClick={() => {
                  x(e), r(null), m("");
                }} className={em}><span className="min-w-0 flex-1 truncate">{e}</span>{e === b && <__mod_22728.n icon={__mod_90987.A} size={18} strokeWidth={2} aria-hidden="true" />}</button>)}</motion.div>}</__mod_47962.N></div><span className="hidden sm:inline">{w}</span><div className="relative hidden min-w-0 md:block" data-menu-root={!0}><button type="button" aria-haspopup="menu" aria-expanded={"env" === a} onClick={() => g("env")} className={eo(eb, ex, "max-w-[min(170px,100%)]")}><span className="truncate">{p}</span><__mod_22728.n icon={__mod_31517.A} size={16} strokeWidth={2} aria-hidden="true" className={ep} /></button><__mod_47962.N>{"env" === a && <motion.div {...ec(e)} role="menu" className={eo(ek, "absolute top-full left-0 z-30 mt-1.5 w-[190px] min-w-[190px] origin-top-left")}>{ej.map(e => <button type="button" role="menuitemradio" aria-checked={e === p} onClick={() => {
                  h(e), r(null);
                }} className={em}><span className="min-w-0 flex-1 truncate">{e}</span>{e === p && <__mod_22728.n icon={__mod_90987.A} size={18} strokeWidth={2} aria-hidden="true" />}</button>)}</motion.div>}</__mod_47962.N></div><div className="ml-auto flex shrink-0 items-center gap-1"><button type="button" aria-label="Documentation" className={eo(e_, eu, "max-sm:hidden")}><__mod_22728.n icon={__mod_57887.A} size={18} strokeWidth={2} aria-hidden="true" /></button><button type="button" aria-label="Settings" className={eo(e_, eu)}><__mod_22728.n icon={__mod_65174.A} size={18} strokeWidth={2} aria-hidden="true" /></button><button type="button" className={eo("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_68%,white),var(--rb-accent,oklch(84%_0.15_165)))] text-[var(--rb-accent-fg,oklch(26%_0.06_168))] shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_4px_10px_-4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_80%,transparent)] hover:not-disabled:-translate-y-px hover:not-disabled:brightness-[1.04] hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_7px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_85%,transparent)] active:not-disabled:translate-y-px active:not-disabled:brightness-[0.98] active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_55%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] motion-reduce:hover:translate-y-0 disabled:opacity-45 disabled:shadow-none dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_78%,white),var(--rb-accent,oklch(81%_0.16_163)))] dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_6px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,transparent)] dark:hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_9px_22px_-8px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_60%,transparent)] dark:active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_45%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black)] dark:disabled:shadow-none", ex, "ml-1")}><__mod_22728.n icon={__mod_46176.A} size={18} strokeWidth={2} aria-hidden="true" />Upgrade</button><div className="relative ml-1" data-menu-root={!0}><button type="button" aria-haspopup="menu" aria-expanded={"account" === a} aria-label="Account menu" onClick={() => g("account")} className={eo("relative inline-flex size-8 shrink-0 overflow-hidden rounded-full select-none", "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))]", "cursor-pointer")}><span className={eh}>EM</span></button><__mod_47962.N>{"account" === a && <motion.div {...ec(e)} role="menu" className={eo(ek, "absolute top-full right-0 z-30 mt-1.5 w-[210px] origin-top-right")}><div className="px-2 py-2"><p className={eo("text-[15px]/[20px] font-bold", "truncate")}>Elena Marsh</p><p className={eo("text-[13px]/[16px] font-semibold tabular-nums", ed, "truncate")}>elena@northwind.co</p></div><div className={ev} /><button type="button" role="menuitem" className={em}><__mod_22728.n icon={__mod_34951.A} size={16} strokeWidth={2} aria-hidden="true" />Profile</button><button type="button" role="menuitem" className={em}><__mod_22728.n icon={__mod_65174.A} size={16} strokeWidth={2} aria-hidden="true" />Account settings</button><button type="button" role="menuitem" className={em}><__mod_22728.n icon={__mod_83331.A} size={16} strokeWidth={2} aria-hidden="true" />Sign out</button></motion.div>}</__mod_47962.N></div></div></header><div className="min-h-0 flex-1 overflow-y-auto p-4 sm:p-6"><h2 className="text-[17px]/[22px] font-extrabold">{b}</h2><p className={eo(eg, "mt-0.5 flex flex-wrap gap-x-3")}><span>{c}</span><span>{p.toLowerCase()} deployment</span></p><div className={eo("@container rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.07),0_1px_2px_rgb(84_62_32/0.06),0_8px_22px_-10px_rgb(84_62_32/0.20)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_0_0_1px_rgb(0_0_0/0.6),0_10px_24px_-12px_rgb(0_0_0/0.8)] p-1", "mt-4")}><div className="grid grid-cols-2 gap-1 [&>:last-child:nth-child(odd)]:col-span-full @3xl:grid-flow-col @3xl:grid-cols-none @3xl:auto-cols-fr @3xl:[&>:last-child:nth-child(odd)]:col-auto">{[{
                label: "Deployments",
                value: "128"
              }, {
                label: "Median build",
                value: "42s"
              }, {
                label: "Last release",
                value: "6h ago"
              }].map(e => <div className="flex min-w-0 flex-col gap-2 rounded-[calc(var(--rb-r-5xl,22px))] bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] px-3 py-3.5 dark:bg-neutral-100/4"><p className="text-[14px]/[20px] font-bold text-neutral-900/78 dark:text-neutral-100/78">{e.label}</p><p className="flex min-w-0 flex-wrap items-baseline gap-x-1 text-[34px]/[40px] font-extrabold tracking-[-0.02em] tabular-nums text-neutral-900 dark:text-neutral-100">{e.value}</p></div>)}</div></div></div></div>;
    },
    "navbar-4": function () {
      let e = (0, __mod_50969.I)(),
        [a, r] = (0, React.useState)(null),
        [c, d] = (0, React.useState)(!1),
        [_, b] = (0, React.useState)("Product"),
        x = (0, React.useRef)(null);
      (0, React.useEffect)(() => {
        if (!a && !c) return;
        let e = x.current?.ownerDocument;
        if (!e) return;
        let t = e => {
            let a = e.target;
            a?.closest?.("[data-menu-root]") || r(null);
          },
          n = e => {
            "Escape" === e.key && (r(null), d(!1));
          };
        return e.addEventListener("pointerdown", t), e.addEventListener("keydown", n), () => {
          e.removeEventListener("pointerdown", t), e.removeEventListener("keydown", n);
        };
      }, [a, c]);
      let u = () => {
        d(!1);
      };
      return <div ref={x} className={eR("bg-white dark:bg-neutral-950", "text-neutral-900 dark:text-neutral-100", "relative flex h-full min-h-[560px] w-full flex-col overflow-hidden")}><header className={eR("border-b border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900", "relative z-20 flex h-16 shrink-0 items-center gap-2 px-4 sm:px-6")}><a href="#" className={eR("focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))]", "inline-flex shrink-0 items-center gap-2")}><span aria-hidden="true" className={eR("inline-flex shrink-0 items-center justify-center overflow-hidden rounded-[calc(var(--rb-r-lg,10px))] bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_68%,white),var(--rb-accent,oklch(84%_0.15_165)))] text-[var(--rb-accent-fg,oklch(26%_0.06_168))] shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] select-none dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_78%,white),var(--rb-accent,oklch(81%_0.16_163)))] dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.4),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black)]", "size-8")}><__mod_22728.n icon={__mod_90089.A} size={18} strokeWidth={2} /></span><span className="text-[17px]/[22px] font-extrabold">Halcyon</span></a><span aria-hidden="true" className={eR("border-r border-transparent", "mx-2 hidden h-5 w-px md:block")} /><nav aria-label="Main" className="hidden md:block"><ul className="flex items-center gap-0.5">{Object.keys(eF).map(n => <li className="relative" data-menu-root={!0}><button type="button" aria-haspopup="true" aria-expanded={a === n} onClick={() => {
                  r(e => e === n ? null : n);
                }} className={eR(eO, eI)}>{n}<__mod_22728.n icon={__mod_20148.A} size={16} strokeWidth={2} aria-hidden="true" className={eR(a === n && "rotate-180")} /></button><__mod_47962.N>{a === n && <motion.div {...{
                    initial: {
                      opacity: 0
                    },
                    animate: {
                      opacity: 1
                    },
                    exit: {
                      opacity: 0,
                      transition: {
                        duration: .12,
                        ease: eD
                      }
                    },
                    transition: {
                      duration: .16 * !e,
                      ease: eD
                    }
                  }} className={eR("min-w-52 max-w-[min(480px,calc(100vw-2rem))] overflow-x-hidden overflow-y-auto overscroll-contain rounded-[calc(var(--rb-r-3xl,16px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] p-2 text-neutral-900 dark:text-neutral-100 outline-none shadow-[0_0_0_1px_rgb(84_62_32/0.08),0_24px_56px_-20px_rgb(84_62_32/0.34),0_6px_16px_-8px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.65),0_24px_56px_-16px_rgb(0_0_0/0.8)]", "absolute top-full left-0 z-30 mt-1.5 w-[320px] origin-top-left")}>{eF[n].map(e => <a href="#" onClick={() => r(null)} className="relative flex min-h-10 w-full cursor-default items-center gap-2.5 rounded-[calc(var(--rb-r-md,8px))] px-3 py-2 text-left text-[15px]/[20px] font-semibold text-neutral-900 outline-none select-none [&_svg]:shrink-0 [&_svg]:text-neutral-900/70 hover:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] focus-visible:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] data-[highlighted]:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-disabled:cursor-not-allowed aria-disabled:text-neutral-900/40 dark:text-neutral-100 dark:[&_svg]:text-neutral-100/70 dark:hover:bg-neutral-100/7 dark:focus-visible:bg-neutral-100/7 dark:data-[highlighted]:bg-neutral-100/7 dark:aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-disabled:text-neutral-100/40"><span className="flex size-9 shrink-0 items-center justify-center text-neutral-900/78 dark:text-neutral-100/78"><__mod_22728.n icon={e.icon} size={18} strokeWidth={2} aria-hidden="true" /></span><span className="min-w-0"><span className="block">{e.label}</span><span className={eR("line-clamp-2 text-[14px]/[20px] font-medium text-neutral-900/78 dark:text-neutral-100/78", "mt-0.5")}>{e.hint}</span></span></a>)}</motion.div>}</__mod_47962.N></li>)}{eq.map(e => <li><a href="#" className={eR(eO, eI)}>{e}</a></li>)}</ul></nav><div className="ml-auto flex shrink-0 items-center gap-2"><a href="#" className={eR(eB, eI, "max-sm:hidden")}>Sign in</a><a href="#" className={eR("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_68%,white),var(--rb-accent,oklch(84%_0.15_165)))] text-[var(--rb-accent-fg,oklch(26%_0.06_168))] shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_4px_10px_-4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_80%,transparent)] hover:not-disabled:-translate-y-px hover:not-disabled:brightness-[1.04] hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_7px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_85%,transparent)] active:not-disabled:translate-y-px active:not-disabled:brightness-[0.98] active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_55%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] motion-reduce:hover:translate-y-0 disabled:opacity-45 disabled:shadow-none dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_78%,white),var(--rb-accent,oklch(81%_0.16_163)))] dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_6px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,transparent)] dark:hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_9px_22px_-8px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_60%,transparent)] dark:active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_45%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black)] dark:disabled:shadow-none", eI)}>Get started</a><button type="button" aria-label={c ? "Close menu" : "Open menu"} aria-expanded={c} onClick={() => c ? u() : d(!0)} className={eR("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-transparent text-neutral-900 hover:not-disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] active:not-disabled:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] disabled:text-neutral-900/40 dark:text-neutral-100 dark:hover:not-disabled:bg-neutral-100/8 dark:active:not-disabled:bg-neutral-100/12 dark:aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:disabled:text-neutral-100/40", "size-10 rounded-[calc(var(--rb-r-full,999px))]", "md:hidden")}><__mod_22728.n icon={c ? __mod_89289.A : __mod_1836.A} size={18} strokeWidth={2} aria-hidden="true" /></button></div></header><div className="min-h-0 flex-1 overflow-y-auto px-4 py-8 sm:px-6"><div className="mx-auto max-w-[560px] text-center"><p className={eR("text-[13px]/[16px] font-semibold tabular-nums", "text-neutral-900/62 dark:text-neutral-100/62")}>Ship with confidence</p><h1 className={eR("text-[34px]/[40px] font-extrabold tracking-[-0.02em]", "mt-2")}>One workspace for the whole release</h1><p className={eR("text-[15px]/[22px] font-medium", "text-neutral-900/78 dark:text-neutral-100/78", "mx-auto mt-3 max-w-[420px]")}>Plan the work, run the automations and watch it land, without stitching six tools together.</p></div><div className={eR("rounded-[calc(var(--rb-r-lg,10px))] bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-100/8", "mx-auto mt-8 h-[120px] max-w-[720px]")} /></div><__mod_47962.N>{c && <><motion.button type="button" aria-label="Close menu" onClick={u} initial={{
              opacity: 0
            }} animate={{
              opacity: 1
            }} exit={{
              opacity: 0,
              transition: {
                duration: .12,
                ease: eD
              }
            }} transition={{
              duration: .18 * !e,
              ease: eD
            }} className={eR("bg-[oklch(28%_0.02_70/0.3)] dark:bg-neutral-950/70", "absolute inset-0 z-30 cursor-default md:hidden")} /><motion.nav aria-label="Mobile" initial={{
              opacity: 0,
              y: e ? 0 : -8
            }} animate={{
              opacity: 1,
              y: 0
            }} exit={{
              opacity: 0,
              y: e ? 0 : -8,
              transition: {
                duration: .12,
                ease: eD
              }
            }} transition={{
              duration: .18 * !e,
              ease: eD
            }} className={eR("bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))]", eM, "absolute inset-x-0 top-16 bottom-0 z-40 overflow-y-auto p-3 md:hidden")}>{Object.keys(eF).map(e => {
                let a = _ === e;
                return <div className="mb-1"><button type="button" aria-expanded={a} onClick={() => b(a ? null : e)} className={eR(eT, "justify-between")}>{e}<__mod_22728.n icon={__mod_20148.A} size={18} strokeWidth={2} aria-hidden="true" className={eR(a && "rotate-180")} /></button>{a && <ul className="mt-0.5 ml-3 space-y-0.5 overflow-hidden pl-3">{eF[e].map(e => <li><a href="#" onClick={u} className={eT}>{e.label}</a></li>)}</ul>}</div>;
              })}{eq.map(e => <a href="#" onClick={u} className={eT}>{e}</a>)}<div className={eR(eM, "mt-3 pt-3")}><a href="#" onClick={u} className={eR(eB, "h-12 gap-2 rounded-[calc(var(--rb-r-full,999px))] px-6 text-[16px]/[20px] font-extrabold", "w-full")}>Sign in</a></div></motion.nav></>}</__mod_47962.N></div>;
    },
    "navbar-5": function () {
      let e = (0, __mod_50969.I)(),
        [a, r] = (0, React.useState)(null),
        [c, d] = (0, React.useState)(!1),
        _ = (0, React.useRef)(null);
      return (0, React.useEffect)(() => {
        if (!a) return;
        let e = _.current?.ownerDocument;
        if (!e) return;
        let t = e => {
            let a = e.target;
            a?.closest?.("[data-menu-root]") || r(null);
          },
          n = e => {
            "Escape" === e.key && r(null);
          };
        return e.addEventListener("pointerdown", t), e.addEventListener("keydown", n), () => {
          e.removeEventListener("pointerdown", t), e.removeEventListener("keydown", n);
        };
      }, [a]), <div ref={_} className={eX("bg-white dark:bg-neutral-950", "text-neutral-900 dark:text-neutral-100", "relative flex h-full min-h-[640px] w-full flex-col overflow-hidden")}><div className="relative z-20" data-menu-root={!0}><header className={eX("border-b border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900", "flex h-16 items-center gap-2 px-4 sm:px-6")}><a href="#" className={eX("focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))]", "inline-flex shrink-0 items-center gap-2")}><span aria-hidden="true" className={eX("inline-flex shrink-0 items-center justify-center overflow-hidden rounded-[calc(var(--rb-r-lg,10px))] bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_68%,white),var(--rb-accent,oklch(84%_0.15_165)))] text-[var(--rb-accent-fg,oklch(26%_0.06_168))] shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] select-none dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_78%,white),var(--rb-accent,oklch(81%_0.16_163)))] dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.4),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black)]", "size-8")}><__mod_22728.n icon={__mod_95518.A} size={18} strokeWidth={2} /></span><span className="text-[17px]/[22px] font-extrabold">Meridian</span></a><nav aria-label="Main" className="ml-4 hidden lg:block"><ul className="flex items-center gap-0.5">{Object.keys(e8).map(e => <li><button type="button" aria-haspopup="true" aria-expanded={a === e} onClick={() => {
                    r(a => a === e ? null : e);
                  }} className={eX(e2, e5)}>{e}<__mod_22728.n icon={__mod_20148.A} size={16} strokeWidth={2} aria-hidden="true" className={eX(a === e && "rotate-180")} /></button></li>)}{e4.map(e => <li><a href="#" className={eX(e2, e5)}>{e}</a></li>)}</ul></nav><div className="ml-auto flex shrink-0 items-center gap-2"><a href="#" className={eX(e1, e5, "max-sm:hidden")}>Sign in</a><a href="#" className={eX("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_68%,white),var(--rb-accent,oklch(84%_0.15_165)))] text-[var(--rb-accent-fg,oklch(26%_0.06_168))] shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_4px_10px_-4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_80%,transparent)] hover:not-disabled:-translate-y-px hover:not-disabled:brightness-[1.04] hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_7px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_85%,transparent)] active:not-disabled:translate-y-px active:not-disabled:brightness-[0.98] active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_55%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] motion-reduce:hover:translate-y-0 disabled:opacity-45 disabled:shadow-none dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_78%,white),var(--rb-accent,oklch(81%_0.16_163)))] dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_6px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,transparent)] dark:hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_9px_22px_-8px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_60%,transparent)] dark:active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_45%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black)] dark:disabled:shadow-none", e5)}>Start building</a><button type="button" aria-label={c ? "Close menu" : "Open menu"} aria-expanded={c} onClick={() => d(e => !e)} className={eX("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-transparent text-neutral-900 hover:not-disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] active:not-disabled:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] disabled:text-neutral-900/40 dark:text-neutral-100 dark:hover:not-disabled:bg-neutral-100/8 dark:active:not-disabled:bg-neutral-100/12 dark:aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:disabled:text-neutral-100/40", "size-10 rounded-[calc(var(--rb-r-full,999px))]", "lg:hidden")}><__mod_22728.n icon={c ? __mod_89289.A : __mod_1836.A} size={18} strokeWidth={2} aria-hidden="true" /></button></div></header><__mod_47962.N>{a && <motion.div {...{
              initial: {
                opacity: 0
              },
              animate: {
                opacity: 1
              },
              exit: {
                opacity: 0,
                transition: {
                  duration: .12,
                  ease: eZ
                }
              },
              transition: {
                duration: .16 * !e,
                ease: eZ
              }
            }} className={eX(e6, "absolute inset-x-0 top-full z-30 hidden origin-top lg:block")}><motion.div initial={{
                opacity: 0
              }} animate={{
                opacity: 1
              }} transition={{
                duration: .16 * !e,
                ease: eZ
              }} className="mx-auto max-w-[1000px] px-6 py-6"><div className="grid grid-cols-2 gap-8">{e8[a].map(e => <div><p className="px-3 pt-2.5 pb-1 text-[13px]/[16px] font-bold tabular-nums text-neutral-900/62 dark:text-neutral-100/62">{e.title}</p><ul className="mt-2 space-y-0.5">{e.items.map(e => <li><a href="#" onClick={() => r(null)} className="relative flex min-h-10 w-full cursor-default items-center gap-2.5 rounded-[calc(var(--rb-r-md,8px))] px-3 py-2 text-left text-[15px]/[20px] font-semibold text-neutral-900 outline-none select-none [&_svg]:shrink-0 [&_svg]:text-neutral-900/70 hover:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] focus-visible:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] data-[highlighted]:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-disabled:cursor-not-allowed aria-disabled:text-neutral-900/40 dark:text-neutral-100 dark:[&_svg]:text-neutral-100/70 dark:hover:bg-neutral-100/7 dark:focus-visible:bg-neutral-100/7 dark:data-[highlighted]:bg-neutral-100/7 dark:aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-disabled:text-neutral-100/40"><span className="flex size-9 shrink-0 items-center justify-center text-neutral-900/78 dark:text-neutral-100/78"><__mod_22728.n icon={e.icon} size={18} strokeWidth={2} aria-hidden="true" /></span><span className="min-w-0"><span className="block">{e.label}</span><span className={eX("line-clamp-2 text-[14px]/[20px] font-medium text-neutral-900/78 dark:text-neutral-100/78", "mt-0.5")}>{e.hint}</span></span></a></li>)}</ul></div>)}</div><div className={eX("flex w-full min-w-0 items-start gap-3 rounded-[calc(var(--rb-r-3xl,16px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] px-4 py-3.5 text-neutral-900 dark:text-neutral-100 shadow-[inset_0_0_0_1px_rgb(84_62_32/0.11)] dark:shadow-[inset_0_0_0_1px_rgb(255_255_255/0.07)]", "mt-5 justify-between")}><div className="min-w-0"><p className="text-[15px]/[22px] font-extrabold">Migrating from a self-hosted stack?</p><p className={eX("text-[14px]/[20px] font-medium text-neutral-900/78 dark:text-neutral-100/78", "mt-0.5")}>Our team will move your first three services for free.</p></div><a href="#" onClick={() => r(null)} className={eX(e1, "h-8 gap-1.5 rounded-[calc(var(--rb-r-full,999px))] px-3.5 text-[14px]/[18px] font-bold")}>Talk to us</a></div></motion.div></motion.div>}</__mod_47962.N></div><div className="min-h-0 flex-1 overflow-y-auto px-4 py-10 sm:px-6"><div className="mx-auto max-w-[620px] text-center"><h1 className="text-[34px]/[40px] font-extrabold tracking-[-0.02em]">Infrastructure that stays out of the way</h1><p className={eX("text-[15px]/[22px] font-medium", "text-neutral-900/78 dark:text-neutral-100/78", "mx-auto mt-3 max-w-[440px]")}>Push a branch, get an environment. Every service, region and secret managed from a single control plane.</p></div><div className={eX("@container rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.07),0_1px_2px_rgb(84_62_32/0.06),0_8px_22px_-10px_rgb(84_62_32/0.20)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_0_0_1px_rgb(0_0_0/0.6),0_10px_24px_-12px_rgb(0_0_0/0.8)] p-1", "mx-auto mt-8 max-w-[820px]")}><div className="grid grid-cols-2 gap-1 [&>:last-child:nth-child(odd)]:col-span-full @3xl:grid-flow-col @3xl:grid-cols-none @3xl:auto-cols-fr @3xl:[&>:last-child:nth-child(odd)]:col-auto">{["Regions", "Median cold start", "Uptime"].map((e, a) => <div className="flex min-w-0 flex-col gap-2 rounded-[calc(var(--rb-r-5xl,22px))] bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] px-3 py-3.5 dark:bg-neutral-100/4"><p className="text-[14px]/[20px] font-bold text-neutral-900/78 dark:text-neutral-100/78">{e}</p><p className="flex min-w-0 flex-wrap items-baseline gap-x-1 text-[34px]/[40px] font-extrabold tracking-[-0.02em] tabular-nums text-neutral-900 dark:text-neutral-100">{["9", "34ms", "99.99%"][a]}</p></div>)}</div></div></div>{c && <nav aria-label="Mobile" className={eX(e0, "border-t border-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:border-neutral-100/7", "absolute inset-x-0 top-16 bottom-0 z-40 overflow-y-auto p-3 lg:hidden")}>{Object.entries(e8).map(([e, a]) => <div className="mb-4"><p className="px-3 pt-5 pb-1.5 text-[13px]/[16px] font-bold tabular-nums text-neutral-900/62 dark:text-neutral-100/62">{e}</p><ul className="mt-1 space-y-0.5">{a.flatMap(e => e.items).map(e => <li><a href="#" onClick={() => d(!1)} className="flex h-10 w-full min-w-0 cursor-pointer items-center gap-2.5 rounded-[calc(var(--rb-r-full,999px))] px-3 text-left text-[15px]/[20px] font-semibold text-neutral-900/75 transition-[background-color,box-shadow,color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] [&_svg]:shrink-0 hover:bg-neutral-900/5 hover:text-neutral-900 aria-[current=page]:bg-white aria-[current=page]:font-bold aria-[current=page]:text-neutral-900 aria-[current=page]:shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:text-neutral-100/75 dark:hover:bg-neutral-100/6 dark:hover:text-neutral-100 dark:aria-[current=page]:bg-[color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800))] dark:aria-[current=page]:text-neutral-100 dark:aria-[current=page]:shadow-[inset_0_1px_0_rgb(255_255_255/0.08),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)]">{e.label}</a></li>)}</ul></div>)}</nav>}</div>;
    },
    "navbar-6": function () {
      let e = (0, __mod_50969.I)(),
        [a, r] = (0, React.useState)(null),
        [c, d] = (0, React.useState)(""),
        [b, x] = (0, React.useState)([]),
        [p, h] = (0, React.useState)(!1),
        k = (0, React.useRef)(null),
        {
          ref: m,
          edges: v,
          onScroll: g
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
            if (!e) return;
            l();
            let r = a.current,
              t = r?.ownerDocument.defaultView;
            if (!r || !t?.ResizeObserver) return;
            let n = new t.ResizeObserver(l);
            return n.observe(r), () => n.disconnect();
          }, [e, l]), {
            ref: a,
            edges: r,
            onScroll: l
          };
        }("bell" === a);
      (0, React.useEffect)(() => {
        if (!a) return;
        let e = k.current?.ownerDocument;
        if (!e) return;
        let t = e => {
            let a = e.target;
            a?.closest?.("[data-menu-root]") || r(null);
          },
          n = e => {
            "Escape" === e.key && r(null);
          };
        return e.addEventListener("pointerdown", t), e.addEventListener("keydown", n), () => {
          e.removeEventListener("pointerdown", t), e.removeEventListener("keydown", n);
        };
      }, [a]);
      let f = e => {
          r(a => a === e ? null : e);
        },
        w = ag.filter(e => !b.includes(e.id)),
        j = af.filter(e => e.toLowerCase().includes(c.trim().toLowerCase()));
      return <div ref={k} className={aa("bg-white dark:bg-neutral-950", an, "relative flex h-full min-h-[480px] w-full flex-col overflow-hidden")}><header className={aa("border-b border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900", "relative z-20 flex h-14 shrink-0 items-center gap-2 px-3 sm:px-4")}><a href="#" className={aa(a_, "inline-flex shrink-0 items-center gap-2")}><span aria-hidden="true" className={aa("inline-flex shrink-0 items-center justify-center overflow-hidden rounded-[calc(var(--rb-r-lg,10px))] bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_68%,white),var(--rb-accent,oklch(84%_0.15_165)))] text-[var(--rb-accent-fg,oklch(26%_0.06_168))] shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] select-none dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_78%,white),var(--rb-accent,oklch(81%_0.16_163)))] dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.4),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black)]", "size-7")}><__mod_22728.n icon={__mod_63163.A} size={16} strokeWidth={2} /></span><span className={aa(ao, "hidden sm:block")}>Northwind</span></a><div className={aa("relative mx-auto w-full max-w-[420px]", p ? "block" : "hidden sm:block")} data-menu-root={!0}><label htmlFor="navbar-6-search" className="sr-only">Search Northwind</label><div className={aa("relative flex w-full min-w-0 cursor-text items-center rounded-[calc(var(--rb-r-xl,12px))] data-concentric:rounded-[var(--rb-r-5xl,22px)] border border-transparent bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] text-[15px]/[20px] font-medium text-neutral-900 transition-[border-color,box-shadow,background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:not-focus-within:not-has-[[aria-invalid=true]]:not-has-[input:disabled]:not-has-[input[readonly]]:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] focus-within:border-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] focus-within:bg-white focus-within:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] has-[[aria-invalid=true]]:border-[oklch(60%_0.236_26)] has-[[aria-invalid=true]]:bg-[oklch(97.5%_0.016_26)] has-[input:disabled]:cursor-not-allowed has-[input:disabled]:text-neutral-900/40 has-[input:disabled]:shadow-none has-[input[readonly]]:cursor-default has-[input[readonly]]:shadow-none dark:text-neutral-100 dark:hover:not-focus-within:not-has-[[aria-invalid=true]]:not-has-[input:disabled]:not-has-[input[readonly]]:bg-neutral-900 dark:focus-within:border-[var(--rb-accent,oklch(81%_0.16_163))] dark:focus-within:bg-neutral-900 dark:focus-within:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:has-[[aria-invalid=true]]:border-[oklch(65.2%_0.219_26)] dark:has-[[aria-invalid=true]]:bg-[oklch(26%_0.04_26)] dark:has-[input:disabled]:text-neutral-100/40", "h-10")}><span data-affix={!0} className={au}><__mod_22728.n icon={__mod_66575.A} size={18} strokeWidth={2} aria-hidden="true" /></span><input id="navbar-6-search" value={c} onChange={e => d(e.target.value)} onFocus={() => {
                r("search");
              }} placeholder="Search projects, docs and people…" className="h-full w-full min-w-0 flex-1 bg-transparent px-3.5 outline-none [[data-affix]+&]:ps-2 [&:has(+[data-affix])]:pe-2 placeholder:font-medium placeholder:text-neutral-900/55 disabled:cursor-not-allowed disabled:placeholder:text-neutral-900/30 dark:placeholder:text-neutral-100/55 dark:disabled:placeholder:text-neutral-100/30 dark:[color-scheme:dark]" /><span data-affix={!0} className={aa(au, "max-md:hidden")}><kbd className="inline-flex min-h-5.5 min-w-5.5 w-fit items-center justify-center gap-1 rounded-[calc(var(--rb-r-md,8px))] bg-white px-1.5 font-mono text-[12px]/[16px] font-semibold tabular-nums text-neutral-900/78 dark:text-neutral-100/78 shadow-[0_0_0_1px_rgb(84_62_32/0.14),inset_0_-2px_0_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.06)] select-none dark:bg-neutral-800 dark:shadow-[0_0_0_1px_rgb(0_0_0/0.6),inset_0_-2px_0_rgb(0_0_0/0.4),inset_0_1px_0_rgb(255_255_255/0.08)]"><__mod_22728.n icon={__mod_80071.A} size={14} strokeWidth={2} aria-hidden="true" />K</kbd></span></div><__mod_47962.N>{"search" === a && <motion.div {...at(e)} className={aa(ap, "absolute top-full right-0 left-0 z-30 mt-1.5 origin-top")}><p className="px-3 pt-2.5 pb-1 text-[13px]/[16px] font-bold tabular-nums text-neutral-900/62 dark:text-neutral-100/62">{c ? "Results" : "Recent"}</p>{0 === j.length ? <p className={aa("max-w-[48ch] text-[15px]/[22px] font-medium text-neutral-900/78 dark:text-neutral-100/78", "px-2.5 py-3 text-center")}>Nothing matches “{c}”.</p> : j.map(e => <button type="button" onClick={() => {
                  d(e), r(null);
                }} className={ah}><__mod_22728.n icon={__mod_66575.A} size={16} strokeWidth={2} aria-hidden="true" /><span className="min-w-0 flex-1 truncate">{e}</span></button>)}</motion.div>}</__mod_47962.N></div><div className="ml-auto flex shrink-0 items-center gap-1"><button type="button" aria-label={p ? "Close search" : "Open search"} onClick={() => h(e => !e)} className={aa(ab, ax, "sm:hidden")}><__mod_22728.n icon={p ? __mod_89289.A : __mod_66575.A} size={18} strokeWidth={2} aria-hidden="true" /></button><button type="button" className={aa("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_68%,white),var(--rb-accent,oklch(84%_0.15_165)))] text-[var(--rb-accent-fg,oklch(26%_0.06_168))] shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_4px_10px_-4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_80%,transparent)] hover:not-disabled:-translate-y-px hover:not-disabled:brightness-[1.04] hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_7px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_85%,transparent)] active:not-disabled:translate-y-px active:not-disabled:brightness-[0.98] active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_55%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] motion-reduce:hover:translate-y-0 disabled:opacity-45 disabled:shadow-none dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_78%,white),var(--rb-accent,oklch(81%_0.16_163)))] dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_6px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,transparent)] dark:hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_9px_22px_-8px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_60%,transparent)] dark:active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_45%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black)] dark:disabled:shadow-none", "h-10 gap-2 rounded-[calc(var(--rb-r-full,999px))] px-5 text-[15px]/[20px] font-bold", "max-sm:hidden")}><__mod_22728.n icon={__mod_89886.A} size={18} strokeWidth={2} aria-hidden="true" />New</button><button type="button" aria-label="Help" className={aa(ab, ax, "max-md:hidden")}><__mod_22728.n icon={__mod_64739.A} size={18} strokeWidth={2} aria-hidden="true" /></button><div className="relative" data-menu-root={!0}><button type="button" aria-haspopup="menu" aria-expanded={"bell" === a} aria-label={`Notifications, ${w.length} unread`} onClick={() => f("bell")} className={aa(ab, ax)}><__mod_22728.n icon={__mod_13473.A} size={18} strokeWidth={2} aria-hidden="true" />{w.length > 0 && <span aria-hidden="true" className={av}>{w.length}</span>}</button><__mod_47962.N>{"bell" === a && <motion.div {...at(e)} className="absolute top-full right-0 z-30 mt-1.5 w-[300px] origin-top-right"><div className={am}><div className={aa("flex min-h-12 min-w-0 shrink-0 items-center gap-2 px-4 has-[button]:pe-2.5", "justify-between")}><p className="min-w-0 truncate text-[16px]/[20px] font-extrabold text-neutral-900 dark:text-neutral-100">Notifications</p><button type="button" onClick={() => x(ag.map(e => e.id))} className={aa("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] text-neutral-900 dark:text-neutral-100 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] active:not-disabled:translate-y-px active:not-disabled:shadow-[inset_0_1px_3px_rgb(84_62_32/0.16),0_0_0_1px_rgb(84_62_32/0.10)] dark:active:not-disabled:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14),0_0_0_1px_rgb(84_62_32/0.10)] dark:aria-expanded:bg-neutral-800 dark:aria-expanded:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] disabled:bg-none disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] disabled:text-neutral-900/40 disabled:shadow-none dark:disabled:bg-neutral-800/60 dark:disabled:text-neutral-100/40", "h-7 gap-1.5 rounded-[calc(var(--rb-r-full,999px))] px-3 text-[13px]/[16px] font-bold tabular-nums")}>Mark all read</button></div><div className="relative"><ul ref={m} onScroll={g} className={aa(ad, "max-h-[240px] overflow-y-auto py-1")}>{ag.map(e => {
                          let a = b.includes(e.id);
                          return <li className="px-2 py-1"><button type="button" onClick={() => x(a => a.includes(e.id) ? a : [...a, e.id])} className={aa("relative flex min-h-10 w-full min-w-0 flex-wrap items-center gap-x-3 gap-y-1 py-2 text-left text-neutral-900 dark:text-neutral-100 transition-[background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)]", "cursor-pointer hover:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] dark:hover:bg-neutral-100/6 active:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] dark:active:bg-neutral-100/10", "rounded-[var(--rb-r-4xl,18px)]", "focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))]", "px-2")}><span className="min-w-0 flex-1"><span className={aa(as, a ? ai : al, "block")}>{!a && <span className="sr-only">Unread: </span>}<span className={aa(!a && an)}>{e.who}</span> {e.text}</span><span className={aa(ac, ai, "mt-0.5 block")}>{e.at} ago</span></span></button></li>;
                        })}</ul><div aria-hidden="true" className={aa("bg-linear-to-b from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))]", "pointer-events-none absolute inset-x-0 top-0 h-8", v.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={aa("bg-linear-to-t from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))]", "pointer-events-none absolute inset-x-0 bottom-0 h-8", v.end ? "opacity-100" : "opacity-0")} /></div>{0 === w.length && <p className={aa("border-t border-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:border-neutral-100/7", as, ai, "flex items-center justify-center gap-1.5 px-3 py-2")}><__mod_22728.n icon={__mod_90987.A} size={16} strokeWidth={2} aria-hidden="true" />You are all caught up</p>}</div></motion.div>}</__mod_47962.N></div><div className="relative" data-menu-root={!0}><button type="button" aria-haspopup="menu" aria-expanded={"account" === a} aria-label="Account menu" onClick={() => f("account")} className={aa("relative inline-flex size-8 shrink-0 overflow-hidden rounded-full select-none", a_, "cursor-pointer")}><span className="flex size-full items-center justify-center rounded-[inherit] bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_24%,white)] text-[12px]/[16px] font-extrabold tabular-nums text-neutral-900 dark:text-neutral-100 dark:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_22%,var(--color-neutral-900))]">EM</span></button><__mod_47962.N>{"account" === a && <motion.div {...at(e)} role="menu" className={aa(ap, "absolute top-full right-0 z-30 mt-1.5 w-[210px] origin-top-right")}><div className="px-2 py-2"><p className={aa(ao, "truncate")}>Elena Marsh</p><p className={aa(ac, ai, "truncate")}>Workspace admin</p></div><div className="mx-1 my-2 h-[1.5px] rounded-[calc(var(--rb-r-full,999px))] bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:bg-neutral-100/8" /><button type="button" role="menuitem" className={ah}><__mod_22728.n icon={__mod_34951.A} size={16} strokeWidth={2} aria-hidden="true" />Profile</button><button type="button" role="menuitem" className={ah}><__mod_22728.n icon={__mod_65174.A} size={16} strokeWidth={2} aria-hidden="true" />Preferences</button><button type="button" role="menuitem" className={ah}><__mod_22728.n icon={__mod_83331.A} size={16} strokeWidth={2} aria-hidden="true" />Sign out</button></motion.div>}</__mod_47962.N></div></div></header><div className="min-h-0 flex-1 overflow-y-auto p-4 sm:p-6"><h2 className="text-[17px]/[22px] font-extrabold">Today</h2><ul className={aa(ak, ad, "mt-3")}>{ag.map(e => <li className={aa("relative flex min-h-12 w-full min-w-0 flex-wrap items-center gap-x-3 gap-y-1 py-2.5 text-left text-neutral-900 dark:text-neutral-100 transition-[background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] has-[[data-description]]:min-h-16", "justify-between px-4")}><span className={aa(as, al, "min-w-0 flex-1 truncate")}><span className={an}>{e.who}</span> {e.text}</span><span className="shrink-0 text-[14px]/[20px] font-semibold tabular-nums text-neutral-900/62 dark:text-neutral-100/62">{e.at} ago</span></li>)}</ul></div></div>;
    },
    "navbar-7": function () {
      let e = (0, __mod_50969.I)(),
        [a, r] = (0, React.useState)("revenue"),
        [c, d] = (0, React.useState)("MRR"),
        {
          ref: b,
          edges: x,
          onScroll: u
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
        }(),
        p = aE.find(e => e.id === a) ?? aE[0],
        h = aP[a];
      return <div className={ay("bg-white dark:bg-neutral-950", "text-neutral-900 dark:text-neutral-100", "relative flex h-full min-h-[520px] w-full flex-col overflow-hidden")}><div className={ay("bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))]", "sticky top-0 z-20 shrink-0")}><div className="flex h-14 items-center gap-2 px-3 sm:px-4"><a href="#" className={ay(aA, "inline-flex shrink-0 items-center gap-2")}><span aria-hidden="true" className={ay("inline-flex shrink-0 items-center justify-center overflow-hidden rounded-[calc(var(--rb-r-lg,10px))] bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_68%,white),var(--rb-accent,oklch(84%_0.15_165)))] text-[var(--rb-accent-fg,oklch(26%_0.06_168))] shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] select-none dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_78%,white),var(--rb-accent,oklch(81%_0.16_163)))] dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.4),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black)]", "size-7")}><__mod_22728.n icon={__mod_87470.A} size={16} strokeWidth={2} /></span><span className="text-[15px]/[20px] font-bold">Cedar Labs</span></a><button type="button" className={ay("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-transparent text-neutral-900/78 dark:text-neutral-100/78 hover:not-disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] hover:not-disabled:text-neutral-900 active:not-disabled:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] aria-expanded:text-neutral-900 disabled:text-neutral-900/40 dark:hover:not-disabled:bg-neutral-100/8 dark:hover:not-disabled:text-neutral-100 dark:active:not-disabled:bg-neutral-100/12 dark:aria-expanded:bg-neutral-100/8 dark:aria-expanded:text-neutral-100 dark:disabled:text-neutral-100/40", aC, "ml-1 max-sm:hidden")}>Growth workspace<__mod_22728.n icon={__mod_20148.A} size={16} strokeWidth={2} aria-hidden="true" /></button><div className="ml-auto flex shrink-0 items-center gap-1"><button type="button" aria-label="Search" className={ay(aS, aW)}><__mod_22728.n icon={__mod_66575.A} size={18} strokeWidth={2} aria-hidden="true" /></button><button type="button" aria-label="Help" className={ay(aS, aW)}><__mod_22728.n icon={__mod_64739.A} size={18} strokeWidth={2} aria-hidden="true" /></button><button type="button" aria-label="Settings" className={ay(aS, aW)}><__mod_22728.n icon={__mod_65174.A} size={18} strokeWidth={2} aria-hidden="true" /></button><span aria-hidden="true" className={ay("border-r border-transparent", "mx-1 h-5 w-px")} /><button type="button" aria-label="Account menu" className={ay("relative inline-flex size-8 shrink-0 overflow-hidden rounded-full select-none", aA, "cursor-pointer")}><span className="flex size-full items-center justify-center rounded-[inherit] bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_24%,white)] text-[12px]/[16px] font-extrabold tabular-nums text-neutral-900 dark:text-neutral-100 dark:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_22%,var(--color-neutral-900))]">RK</span></button></div></div><div className={ay(az, "flex items-end justify-between gap-3 px-3 sm:px-4")}><div className="relative -mb-px min-w-0"><div ref={b} onScroll={u} role="tablist" aria-label="Workspace sections" onKeyDown={e => {
                let t = aE.findIndex(e => e.id === a);
                if ("ArrowRight" === e.key) n = (t + 1) % aE.length;else {
                  if ("ArrowLeft" !== e.key) return;
                  n = (t - 1 + aE.length) % aE.length;
                }
                e.preventDefault(), r(aE[t].id), d(aE[t].sub[0]);
              }} className="flex h-10 items-stretch gap-1 overflow-x-auto">{aE.map(e => {
                  let n = e.id === a;
                  return <button type="button" role="tab" data-section={e.id} aria-selected={n} tabIndex={n ? 0 : -1} onClick={() => {
                    r(e.id), d(e.sub[0]);
                  }} className="relative inline-flex min-h-10 shrink-0 cursor-pointer items-center justify-center gap-1.5 rounded-[calc(var(--rb-r-lg,10px))] px-3 text-[15px]/[20px] font-bold whitespace-nowrap text-neutral-900/78 dark:text-neutral-100/78 select-none transition-[color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:text-neutral-900 after:absolute after:inset-x-2.5 after:bottom-0 after:h-[3px] after:rounded-[calc(var(--rb-r-full,999px))] after:bg-transparent after:transition-[background-color] aria-selected:text-neutral-900 aria-selected:after:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] disabled:cursor-not-allowed disabled:text-neutral-900/40 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:hover:text-neutral-100 dark:aria-selected:text-neutral-100 dark:aria-selected:after:bg-[var(--rb-accent,oklch(81%_0.16_163))] dark:disabled:text-neutral-100/40">{e.label}</button>;
                })}</div><div aria-hidden="true" className={ay("bg-linear-to-r from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))]", "pointer-events-none absolute top-0 bottom-px left-0 w-8", x.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={ay("bg-linear-to-l from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))]", "pointer-events-none absolute top-0 right-0 bottom-px w-8", x.end ? "opacity-100" : "opacity-0")} /></div><button type="button" className={ay("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] text-neutral-900 dark:text-neutral-100 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] active:not-disabled:translate-y-px active:not-disabled:shadow-[inset_0_1px_3px_rgb(84_62_32/0.16),0_0_0_1px_rgb(84_62_32/0.10)] dark:active:not-disabled:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14),0_0_0_1px_rgb(84_62_32/0.10)] dark:aria-expanded:bg-neutral-800 dark:aria-expanded:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] disabled:bg-none disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] disabled:text-neutral-900/40 disabled:shadow-none dark:disabled:bg-neutral-800/60 dark:disabled:text-neutral-100/40", aC, "mb-1 max-md:hidden")}><__mod_22728.n icon={__mod_36586.A} size={18} strokeWidth={2} aria-hidden="true" />Feedback</button></div><div className={ay("bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900", az, "overflow-x-auto py-1.5 ps-2 pe-3 sm:ps-3 sm:pe-4")}><div role="radiogroup" aria-label={`${p.label} views`} onKeyDown={e => {
              let a = p.sub.indexOf(c);
              if ("ArrowRight" === e.key) r = (a + 1) % p.sub.length;else {
                if ("ArrowLeft" !== e.key) return;
                r = (a - 1 + p.sub.length) % p.sub.length;
              }
              e.preventDefault(), d(p.sub[a]), e.currentTarget.querySelectorAll('[role="radio"]')[a]?.focus();
            }} className="flex h-7 w-fit items-stretch gap-0.5">{p.sub.map(e => <button type="button" role="radio" aria-checked={e === c} tabIndex={e === c ? 0 : -1} onClick={() => d(e)} className={ay("relative inline-flex min-w-0 cursor-pointer items-center justify-center gap-1.5 whitespace-nowrap [&_svg]:shrink-0 rounded-[calc(var(--rb-r-full,999px))] px-4 text-[14px]/[18px] font-bold text-neutral-900/78 dark:text-neutral-100/78 select-none transition-[background-color,color,box-shadow,outline-color,scale] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:scale-[0.96] motion-reduce:active:scale-100 hover:not-aria-checked:text-neutral-900 aria-checked:bg-white aria-checked:text-neutral-900 aria-checked:shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_2px_rgb(84_62_32/0.10),0_3px_8px_-2px_rgb(84_62_32/0.20)] disabled:cursor-not-allowed disabled:text-neutral-900/40 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:hover:not-aria-checked:text-neutral-100 dark:aria-checked:bg-[color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800))] dark:aria-checked:text-neutral-100 dark:aria-checked:shadow-[inset_0_1px_0_rgb(255_255_255/0.1),0_0_0_1px_rgb(0_0_0/0.6),0_2px_5px_-1px_rgb(0_0_0/0.6)] dark:disabled:text-neutral-100/40", "shrink-0")}>{e}</button>)}</div></div></div><div className="min-h-0 flex-1 overflow-y-auto p-4 sm:p-6"><h2 className={ay("text-[17px]/[22px] font-extrabold", "flex flex-wrap gap-x-2")}><span>{p.label}</span><span className="text-neutral-900/62 dark:text-neutral-100/62">{c}</span></h2><__mod_47962.N mode="wait" initial={!1}><motion.div initial={{
              opacity: 0
            }} animate={{
              opacity: 1
            }} exit={{
              opacity: 0,
              transition: {
                duration: .12,
                ease: aN
              }
            }} transition={{
              duration: .16 * !e,
              ease: aN
            }} className={ay("@container rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.07),0_1px_2px_rgb(84_62_32/0.06),0_8px_22px_-10px_rgb(84_62_32/0.20)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_0_0_1px_rgb(0_0_0/0.6),0_10px_24px_-12px_rgb(0_0_0/0.8)] p-1", "mt-3")}><div className="grid grid-cols-2 gap-1 [&>:last-child:nth-child(odd)]:col-span-full @3xl:grid-flow-col @3xl:grid-cols-none @3xl:auto-cols-fr @3xl:[&>:last-child:nth-child(odd)]:col-auto">{h.map(e => <div className="flex min-w-0 flex-col gap-2 rounded-[calc(var(--rb-r-5xl,22px))] bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] px-3 py-3.5 dark:bg-neutral-100/4"><p className="text-[14px]/[20px] font-bold text-neutral-900/78 dark:text-neutral-100/78">{e.label}</p><p className="flex min-w-0 flex-wrap items-baseline gap-x-1 text-[34px]/[40px] font-extrabold tracking-[-0.02em] tabular-nums text-neutral-900 dark:text-neutral-100">{e.value}</p><p className="text-[14px]/[20px] font-medium text-neutral-900/62 dark:text-neutral-100/62">{e.note}</p></div>)}</div></motion.div></__mod_47962.N><div className={ay("rounded-[calc(var(--rb-r-lg,10px))] bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-100/8", "mt-3 h-[140px]")} /></div></div>;
    },
    "navbar-8": function () {
      let e = (0, __mod_50969.I)(),
        [a, r] = (0, React.useState)("open"),
        [c, d] = (0, React.useState)(null),
        [_, b] = (0, React.useState)(!1),
        u = (0, React.useRef)(null),
        p = c ? [...aV, c] : aV;
      (0, React.useEffect)(() => {
        if (!_) return;
        let e = u.current?.ownerDocument;
        if (!e) return;
        let a = e => {
            let a = e.target;
            a?.closest?.("[data-menu-root]") || b(!1);
          },
          r = e => {
            "Escape" === e.key && b(!1);
          };
        return e.addEventListener("pointerdown", a), e.addEventListener("keydown", r), () => {
          e.removeEventListener("pointerdown", a), e.removeEventListener("keydown", r);
        };
      }, [_]);
      let h = p.find(e => e.id === a) ?? p[0];
      return <div ref={u} className={aB("bg-white dark:bg-neutral-950", "text-neutral-900 dark:text-neutral-100", "relative flex h-full min-h-[400px] w-full flex-col overflow-hidden")}><header className={aB("border-b border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900", "relative z-20 flex shrink-0 flex-wrap items-center gap-2 px-3 py-2.5 sm:px-4")}><div role="radiogroup" aria-label="Work queue filters" onKeyDown={e => {
            let t = p.findIndex(e => e.id === a);
            if ("ArrowRight" === e.key) n = (t + 1) % p.length;else if ("ArrowLeft" === e.key) n = (t - 1 + p.length) % p.length;else if ("Home" === e.key) n = 0;else {
              if ("End" !== e.key) return;
              n = p.length - 1;
            }
            e.preventDefault(), r(p[t].id);
          }} className={aB("inline-flex w-fit max-w-full items-stretch gap-1 rounded-[calc(var(--rb-r-full,999px)_+_min(4px,var(--rb-r-full,999px)))] bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] p-1", "h-10", "relative min-w-0 overflow-x-auto")}>{p.map(e => {
              let n = e.id === a;
              return <button type="button" role="radio" data-tab={e.id} aria-checked={n} tabIndex={n ? 0 : -1} onClick={() => r(e.id)} className={aB("relative inline-flex min-w-0 cursor-pointer items-center justify-center gap-1.5 whitespace-nowrap [&_svg]:shrink-0 rounded-[calc(var(--rb-r-full,999px))] px-4 text-[14px]/[18px] font-bold text-neutral-900/78 dark:text-neutral-100/78 select-none transition-[background-color,color,box-shadow,outline-color,scale] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:scale-[0.96] motion-reduce:active:scale-100 hover:not-aria-checked:text-neutral-900 aria-checked:bg-white aria-checked:text-neutral-900 aria-checked:shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_2px_rgb(84_62_32/0.10),0_3px_8px_-2px_rgb(84_62_32/0.20)] disabled:cursor-not-allowed disabled:text-neutral-900/40 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:hover:not-aria-checked:text-neutral-100 dark:aria-checked:bg-[color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800))] dark:aria-checked:text-neutral-100 dark:aria-checked:shadow-[inset_0_1px_0_rgb(255_255_255/0.1),0_0_0_1px_rgb(0_0_0/0.6),0_2px_5px_-1px_rgb(0_0_0/0.6)] dark:disabled:text-neutral-100/40", "shrink-0")}><span className="relative">{e.label}</span><span className={aB("ms-0.5 text-[13px]/[16px] font-bold tabular-nums text-neutral-900/62 dark:text-neutral-100/62", "relative")}>{e.count}</span></button>;
            })}</div><div className="relative" data-menu-root={!0}><button type="button" aria-haspopup="menu" aria-expanded={_} aria-label="More views" onClick={() => {
              b(e => !e);
            }} className={aB("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-transparent text-neutral-900 hover:not-disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] active:not-disabled:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] disabled:text-neutral-900/40 dark:text-neutral-100 dark:hover:not-disabled:bg-neutral-100/8 dark:active:not-disabled:bg-neutral-100/12 dark:aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:disabled:text-neutral-100/40", "size-10 rounded-[calc(var(--rb-r-full,999px))]")}><__mod_22728.n icon={__mod_59649.A} size={18} strokeWidth={2} aria-hidden="true" /></button><__mod_47962.N>{_ && <motion.div {...{
                initial: {
                  opacity: 0
                },
                animate: {
                  opacity: 1
                },
                exit: {
                  opacity: 0,
                  transition: {
                    duration: .12,
                    ease: aO
                  }
                },
                transition: {
                  duration: .16 * !e,
                  ease: aO
                }
              }} role="menu" className={aB("min-w-52 max-w-[min(480px,calc(100vw-2rem))] overflow-x-hidden overflow-y-auto overscroll-contain rounded-[calc(var(--rb-r-3xl,16px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] p-2 text-neutral-900 dark:text-neutral-100 outline-none shadow-[0_0_0_1px_rgb(84_62_32/0.08),0_24px_56px_-20px_rgb(84_62_32/0.34),0_6px_16px_-8px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.65),0_24px_56px_-16px_rgb(0_0_0/0.8)]", "absolute top-full left-0 z-30 mt-1.5 w-[190px] min-w-[190px] origin-top-left")}><p className="px-3 pt-2.5 pb-1 text-[13px]/[16px] font-bold tabular-nums text-neutral-900/62 dark:text-neutral-100/62">More views</p>{a$.map(e => <button type="button" role="menuitem" onClick={() => {
                  d(e), r(e.id), b(!1);
                }} className="relative flex min-h-10 w-full cursor-default items-center gap-2.5 rounded-[calc(var(--rb-r-md,8px))] px-3 py-2 text-left text-[15px]/[20px] font-semibold text-neutral-900 outline-none select-none [&_svg]:shrink-0 [&_svg]:text-neutral-900/70 hover:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] focus-visible:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] data-[highlighted]:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-disabled:cursor-not-allowed aria-disabled:text-neutral-900/40 dark:text-neutral-100 dark:[&_svg]:text-neutral-100/70 dark:hover:bg-neutral-100/7 dark:focus-visible:bg-neutral-100/7 dark:data-[highlighted]:bg-neutral-100/7 dark:aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-disabled:text-neutral-100/40"><span className="min-w-0 flex-1 truncate">{e.label}</span><span className="ms-auto text-[13px]/[16px] font-bold tabular-nums text-neutral-900/62 dark:text-neutral-100/62">{e.count}</span></button>)}</motion.div>}</__mod_47962.N></div><div className="ml-auto flex shrink-0 items-center gap-1.5"><button type="button" aria-label="Filter" className={aB(aF, aq)}><__mod_22728.n icon={__mod_58770.A} size={18} strokeWidth={2} aria-hidden="true" /><span className="hidden sm:inline">Filter</span></button><button type="button" aria-label="Display" className={aB(aF, aq)}><__mod_22728.n icon={__mod_68656.A} size={18} strokeWidth={2} aria-hidden="true" /><span className="hidden sm:inline">Display</span></button><button type="button" className={aB("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] text-neutral-900 dark:text-neutral-100 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] active:not-disabled:translate-y-px active:not-disabled:shadow-[inset_0_1px_3px_rgb(84_62_32/0.16),0_0_0_1px_rgb(84_62_32/0.10)] dark:active:not-disabled:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14),0_0_0_1px_rgb(84_62_32/0.10)] dark:aria-expanded:bg-neutral-800 dark:aria-expanded:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] disabled:bg-none disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] disabled:text-neutral-900/40 disabled:shadow-none dark:disabled:bg-neutral-800/60 dark:disabled:text-neutral-100/40", aq)}><__mod_22728.n icon={__mod_92752.A} size={18} strokeWidth={2} aria-hidden="true" />Export</button></div></header><div className="min-h-0 flex-1 overflow-y-auto px-3 py-3 sm:px-4"><p className={aB(aG, "px-1")}>{h.count} items in {h.label.toLowerCase()}</p><__mod_47962.N mode="wait" initial={!1}><motion.ul initial={{
              opacity: 0
            }} animate={{
              opacity: 1
            }} exit={{
              opacity: 0,
              transition: {
                duration: .12,
                ease: aO
              }
            }} transition={{
              duration: .16 * !e,
              ease: aO
            }} className={aB("relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] text-neutral-900 dark:text-neutral-100 shadow-[0_0_0_1px_rgb(84_62_32/0.07),0_1px_2px_rgb(84_62_32/0.06),0_8px_22px_-10px_rgb(84_62_32/0.20)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_0_0_1px_rgb(0_0_0/0.6),0_10px_24px_-12px_rgb(0_0_0/0.8)]", "divide-y divide-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:divide-neutral-100/7", "mt-2 py-1")}>{aK.map(e => <li className="px-2 py-1"><button type="button" className={aB("relative flex min-h-10 w-full min-w-0 flex-wrap items-center gap-x-3 gap-y-1 py-2 text-left text-neutral-900 dark:text-neutral-100 transition-[background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)]", "cursor-pointer hover:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] dark:hover:bg-neutral-100/6 active:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] dark:active:bg-neutral-100/10", "rounded-[var(--rb-r-4xl,18px)]", "focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))]", "group px-2")}><span className={aB(aT, "min-w-0 flex-1 truncate")}>{e.title}</span><span className={aB(aH, "hidden w-18 sm:inline")}>{e.who}</span><span className={aB(aH, "w-8 text-right")}>{e.at}</span><__mod_22728.n icon={__mod_1497.A} size={16} strokeWidth={2} aria-hidden="true" className={aB("flex items-center justify-end gap-0.5 md:opacity-0 md:group-hover:opacity-100 md:group-focus-within:opacity-100 transition-opacity duration-[180ms]", aI, "shrink-0")} /></button></li>)}</motion.ul></__mod_47962.N></div></div>;
    },
    "navbar-9": function () {
      let e = (0, __mod_50969.I)(),
        [a, r] = (0, React.useState)(null),
        [c, d] = (0, React.useState)(!1),
        [b, x] = (0, React.useState)("brew"),
        [p, h] = (0, React.useState)(ri),
        k = (0, React.useRef)(null);
      (0, React.useEffect)(() => {
        if (!a && !c) return;
        let e = k.current?.ownerDocument;
        if (!e) return;
        let t = e => {
            let a = e.target;
            a?.closest?.("[data-menu-root]") || r(null);
          },
          n = e => {
            "Escape" === e.key && (r(null), d(!1));
          };
        return e.addEventListener("pointerdown", t), e.addEventListener("keydown", n), () => {
          e.removeEventListener("pointerdown", t), e.removeEventListener("keydown", n);
        };
      }, [a, c]);
      let m = e => {
          r(a => a === e ? null : e);
        },
        v = p.reduce((e, a) => e + a.qty, 0),
        g = p.reduce((e, a) => e + a.qty * a.price, 0),
        f = (e, a) => h(r => r.map(r => r.id === e ? {
          ...r,
          qty: Math.max(0, r.qty + a)
        } : r).filter(e => e.qty > 0));
      return <div ref={k} className={aQ("bg-white dark:bg-neutral-950", "text-neutral-900 dark:text-neutral-100", "relative flex h-full min-h-[560px] w-full flex-col overflow-hidden")}><header className={aQ("border-b border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900", "relative z-20 shrink-0")}><p className={aQ("bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)]", a2, "text-neutral-900/78 dark:text-neutral-100/78", "flex h-8 items-center justify-center px-4 text-center")}>Free shipping on orders over $60</p><div className="flex h-14 items-center gap-2 px-3 sm:px-4"><button type="button" aria-label="Open menu" aria-expanded={c} onClick={() => d(!0)} className={aQ(a6, a3, "md:hidden")}><__mod_22728.n icon={__mod_1836.A} size={18} strokeWidth={2} aria-hidden="true" /></button><a href="#" className={aQ("text-[17px]/[22px] font-extrabold", "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))]", "shrink-0")}>Harbor Coffee</a><nav aria-label="Shop" className="ml-4 hidden items-center gap-0.5 md:flex" data-menu-root={!0}>{rn.map(e => <button type="button" aria-haspopup="true" aria-expanded={a === e.id} onClick={() => m(e.id)} className={aQ(a8, a4)}>{e.label}<__mod_22728.n icon={__mod_20148.A} size={16} strokeWidth={2} aria-hidden="true" className={aQ(a === e.id && "rotate-180")} /></button>)}{rl.map(e => <a href="#" className={aQ(a8, a4)}>{e}</a>)}</nav><div className="ml-auto flex shrink-0 items-center gap-0.5"><button type="button" aria-label="Search" className={aQ(a6, a3)}><__mod_22728.n icon={__mod_66575.A} size={18} strokeWidth={2} aria-hidden="true" /></button><button type="button" aria-label="Account" className={aQ(a6, a3, "max-sm:hidden")}><__mod_22728.n icon={__mod_34951.A} size={18} strokeWidth={2} aria-hidden="true" /></button><button type="button" aria-label="Wishlist, 3 saved" className={aQ(a6, a3, "max-sm:hidden")}><__mod_22728.n icon={__mod_47293.A} size={18} strokeWidth={2} aria-hidden="true" /><span aria-hidden="true" className={rt}>3</span></button><div className="relative" data-menu-root={!0}><button type="button" aria-haspopup="true" aria-expanded={"cart" === a} aria-label={`Cart, ${v} items`} onClick={() => m("cart")} className={aQ(a6, a3)}><__mod_22728.n icon={__mod_2775.A} size={18} strokeWidth={2} aria-hidden="true" />{v > 0 && <span aria-hidden="true" className={rt}>{v}</span>}</button><__mod_47962.N>{"cart" === a && <motion.div {...{
                    initial: {
                      opacity: 0
                    },
                    animate: {
                      opacity: 1
                    },
                    exit: {
                      opacity: 0,
                      transition: {
                        duration: .12,
                        ease: aX
                      }
                    },
                    transition: {
                      duration: .16 * !e,
                      ease: aX
                    }
                  }} className="absolute top-full right-0 z-30 mt-1.5 w-[300px] origin-top-right"><div className={rr}><p className={aQ("flex min-h-12 min-w-0 shrink-0 items-center gap-2 px-4 has-[button]:pe-2.5", "min-w-0 truncate text-[16px]/[20px] font-extrabold text-neutral-900 dark:text-neutral-100")}>Your bag</p>{0 === p.length ? <p className={aQ("max-w-[48ch] text-[15px]/[22px] font-medium text-neutral-900/78 dark:text-neutral-100/78", "px-3 py-4 text-center")}>Your bag is empty.</p> : <ul className={aQ("divide-y divide-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:divide-neutral-100/7", "max-h-[200px] overflow-y-auto")}>{p.map(e => <li className={aQ("relative flex min-h-12 w-full min-w-0 flex-wrap items-center gap-x-3 gap-y-1 py-2.5 text-left text-neutral-900 dark:text-neutral-100 transition-[background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] has-[[data-description]]:min-h-16", "px-4")}><span aria-hidden="true" className={aQ("flex size-9 shrink-0 items-center justify-center text-neutral-900/78 dark:text-neutral-100/78", aZ, "rounded-[var(--rb-r-sm,6px)]", "size-[36px]")} /><span className="flex min-w-0 flex-1 flex-col gap-0.5"><span className={aQ(a2, "block truncate")}>{e.name}</span><span className="shrink-0 text-[14px]/[20px] font-semibold tabular-nums text-neutral-900/62 dark:text-neutral-100/62">${e.price}</span></span><span className="flex shrink-0 items-center gap-1"><button type="button" aria-label={`Remove one ${e.name}`} onClick={() => f(e.id, -1)} className={aQ(a6, a9)}><__mod_22728.n icon={__mod_99199.A} size={14} strokeWidth={2} aria-hidden="true" /></button><span className={aQ("text-[13px]/[16px] font-bold tabular-nums", "w-4 text-center")}>{e.qty}</span><button type="button" aria-label={`Add one ${e.name}`} onClick={() => f(e.id, 1)} className={aQ(a6, a9)}><__mod_22728.n icon={__mod_89886.A} size={14} strokeWidth={2} aria-hidden="true" /></button></span></li>)}</ul>}<div className={aQ("border-t border-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:border-neutral-100/7", "p-3")}><div className={aQ(a2, "flex items-center justify-between")}><span className={a0}>Subtotal</span><span className={aQ(a1, "tabular-nums")}>${g}</span></div><button type="button" className={aQ("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_68%,white),var(--rb-accent,oklch(84%_0.15_165)))] text-[var(--rb-accent-fg,oklch(26%_0.06_168))] shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_4px_10px_-4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_80%,transparent)] hover:not-disabled:-translate-y-px hover:not-disabled:brightness-[1.04] hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_7px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_85%,transparent)] active:not-disabled:translate-y-px active:not-disabled:brightness-[0.98] active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_55%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] motion-reduce:hover:translate-y-0 disabled:opacity-45 disabled:shadow-none dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_78%,white),var(--rb-accent,oklch(81%_0.16_163)))] dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_6px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,transparent)] dark:hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_9px_22px_-8px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_60%,transparent)] dark:active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_45%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black)] dark:disabled:shadow-none", a4, "mt-2.5 w-full")}>Checkout</button></div></div></motion.div>}</__mod_47962.N></div></div></div>{rn.map(e => a === e.id && <div data-menu-root={!0} className={aQ(ra, "transition-[opacity,scale] duration-[260ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] starting:scale-[0.94] starting:opacity-0 motion-reduce:transition-none motion-reduce:starting:scale-100", "absolute inset-x-0 top-full z-30 hidden origin-top md:block")}><div className="mx-auto grid max-w-[900px] grid-cols-3 gap-6 px-4 py-6">{e.columns.map(e => <div><p className="px-3 pt-2.5 pb-1 text-[13px]/[16px] font-bold tabular-nums text-neutral-900/62 dark:text-neutral-100/62">{e.title}</p><ul className="mt-2 space-y-0.5">{e.items.map(e => <li><a href="#" className={re}>{e}</a></li>)}</ul></div>)}</div></div>)}</header><div className="min-h-0 flex-1 overflow-y-auto p-4 sm:p-6"><div className="grid gap-3 sm:grid-cols-3">{["Meridian grinder", "Harbor blend", "Pour-over set"].map(e => <div className={a7}><div className={aQ(aZ, "rounded-[var(--rb-r-4xl,18px)]", "m-2 mb-0 h-[110px]")} /><div className="p-3"><p className={aQ(a2, "truncate")}>{e}</p><p className={aQ("text-[13px]/[16px] font-semibold tabular-nums", a0, "mt-0.5")}>From $32</p></div></div>)}</div></div><__mod_47962.N>{c && <><motion.div aria-hidden="true" onClick={() => d(!1)} initial={{
              opacity: 0
            }} animate={{
              opacity: 1
            }} exit={{
              opacity: 0,
              transition: {
                duration: .12,
                ease: aX
              }
            }} transition={{
              duration: .18 * !e,
              ease: aX
            }} className={aQ("bg-[oklch(28%_0.02_70/0.3)] dark:bg-neutral-950/70", "absolute inset-0 z-30 md:hidden")} /><motion.aside aria-label="Shop menu" initial={{
              opacity: 0,
              x: e ? 0 : -8
            }} animate={{
              opacity: 1,
              x: 0
            }} exit={{
              opacity: 0,
              x: e ? 0 : -8,
              transition: {
                duration: .12,
                ease: aX
              }
            }} transition={{
              duration: .18 * !e,
              ease: aX
            }} className={aQ("border-r border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900", "absolute inset-y-0 left-0 z-40 flex w-[280px] max-w-[85%] flex-col md:hidden")}><div className={aQ("border-b border-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:border-neutral-100/7", "flex h-14 shrink-0 items-center justify-between px-3")}><span className={a1}>Menu</span><button type="button" aria-label="Close menu" onClick={() => {
                  d(!1);
                }} className={aQ(a6, a3)}><__mod_22728.n icon={__mod_89289.A} size={18} strokeWidth={2} aria-hidden="true" /></button></div><div className="min-h-0 flex-1 overflow-y-auto p-2">{rn.map(e => <div><button type="button" aria-expanded={b === e.id} onClick={() => x(a => a === e.id ? null : e.id)} className={aQ(re, "justify-between")}>{e.label}<__mod_22728.n icon={__mod_20148.A} size={16} strokeWidth={2} aria-hidden="true" className={aQ(b === e.id && "rotate-180")} /></button>{b === e.id && <ul className="mb-1 space-y-0.5 overflow-hidden pl-2.5">{e.columns.flatMap(e => e.items).map(e => <li><a href="#" className={re}>{e}</a></li>)}</ul>}</div>)}{rl.map(e => <a href="#" className={re}>{e}</a>)}</div></motion.aside></>}</__mod_47962.N></div>;
    },
    "navbar-10": function () {
      let e = (0, __mod_50969.I)(),
        [a, r] = (0, React.useState)(null),
        [d, b] = (0, React.useState)(rw[0]),
        [x, u] = (0, React.useState)(!0),
        [p, h] = (0, React.useState)("Docs"),
        [k, m] = (0, React.useState)(!1),
        [v, g] = (0, React.useState)("Core concepts"),
        f = (0, React.useRef)(null);
      return (0, React.useEffect)(() => {
        if (!a && !k) return;
        let e = f.current?.ownerDocument;
        if (!e) return;
        let t = e => {
            let a = e.target;
            a?.closest?.("[data-menu-root]") || r(null);
          },
          n = e => {
            "Escape" === e.key && (r(null), m(!1));
          };
        return e.addEventListener("pointerdown", t), e.addEventListener("keydown", n), () => {
          e.removeEventListener("pointerdown", t), e.removeEventListener("keydown", n);
        };
      }, [a, k]), <div ref={f} className={rd("bg-white dark:bg-neutral-950", rb, "relative flex h-full min-h-[480px] w-full flex-col overflow-hidden")}><header className={rd("border-b border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900", "relative z-20 shrink-0")}><div className="flex h-14 items-center gap-2 px-3 sm:px-4"><button type="button" aria-label="Open navigation" aria-expanded={k} onClick={() => m(!0)} className={rd(rk, rv, "lg:hidden")}><__mod_22728.n icon={__mod_1836.A} size={18} strokeWidth={2} aria-hidden="true" /></button><a href="#" className={rd("focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))]", "inline-flex shrink-0 items-center gap-2")}><span aria-hidden="true" className={rd("inline-flex shrink-0 items-center justify-center overflow-hidden rounded-[calc(var(--rb-r-lg,10px))] bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_68%,white),var(--rb-accent,oklch(84%_0.15_165)))] text-[var(--rb-accent-fg,oklch(26%_0.06_168))] shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] select-none dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_78%,white),var(--rb-accent,oklch(81%_0.16_163)))] dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.4),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black)]", "size-7")}><__mod_22728.n icon={__mod_96022.A} size={16} strokeWidth={2} /></span><span className={rd(ru, "hidden sm:block")}>Meridian</span></a><div className="relative shrink-0" data-menu-root={!0}><button type="button" aria-haspopup="menu" aria-expanded={"version" === a} onClick={() => {
                r(e => "version" === e ? null : "version");
              }} className={rd(rh, "h-8 gap-1.5 rounded-[calc(var(--rb-r-full,999px))] px-3.5 text-[14px]/[18px] font-bold")}>{d.split(" ")[0]}<__mod_22728.n icon={__mod_20148.A} size={14} strokeWidth={2} aria-hidden="true" /></button><__mod_47962.N>{"version" === a && <motion.div {...{
                  initial: {
                    opacity: 0
                  },
                  animate: {
                    opacity: 1
                  },
                  exit: {
                    opacity: 0,
                    transition: {
                      duration: .12,
                      ease: r_
                    }
                  },
                  transition: {
                    duration: .16 * !e,
                    ease: r_
                  }
                }} role="menu" className={rd("min-w-52 max-w-[min(480px,calc(100vw-2rem))] overflow-x-hidden overflow-y-auto overscroll-contain rounded-[calc(var(--rb-r-3xl,16px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] p-2 text-neutral-900 dark:text-neutral-100 outline-none shadow-[0_0_0_1px_rgb(84_62_32/0.08),0_24px_56px_-20px_rgb(84_62_32/0.34),0_6px_16px_-8px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.65),0_24px_56px_-16px_rgb(0_0_0/0.8)]", "absolute top-full left-0 z-30 mt-1.5 w-[170px] min-w-[170px] origin-top-left")}>{rw.map(e => <button type="button" role="menuitemradio" aria-checked={e === d} onClick={() => {
                    b(e), r(null);
                  }} className={rd("relative flex min-h-10 w-full cursor-default items-center gap-2.5 rounded-[calc(var(--rb-r-md,8px))] px-3 py-2 text-left text-[15px]/[20px] font-semibold text-neutral-900 outline-none select-none [&_svg]:shrink-0 [&_svg]:text-neutral-900/70 hover:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] focus-visible:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] data-[highlighted]:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-disabled:cursor-not-allowed aria-disabled:text-neutral-900/40 dark:text-neutral-100 dark:[&_svg]:text-neutral-100/70 dark:hover:bg-neutral-100/7 dark:focus-visible:bg-neutral-100/7 dark:data-[highlighted]:bg-neutral-100/7 dark:aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-disabled:text-neutral-100/40", "ps-9")}>{e === d && <span className="pointer-events-none absolute start-3 flex size-[18px] items-center justify-center"><__mod_22728.n icon={__mod_90987.A} size={18} strokeWidth={2} aria-hidden="true" /></span>}<span className="min-w-0 flex-1 truncate">{e}</span></button>)}</motion.div>}</__mod_47962.N></div><nav aria-label="Documentation" className="ml-2 hidden items-center gap-0.5 md:flex">{rj.map(e => <button type="button" aria-current={e === p ? "page" : void 0} onClick={() => h(e)} className={rd("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-transparent text-neutral-900/78 dark:text-neutral-100/78 hover:not-disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] hover:not-disabled:text-neutral-900 active:not-disabled:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] aria-expanded:text-neutral-900 disabled:text-neutral-900/40 dark:hover:not-disabled:bg-neutral-100/8 dark:hover:not-disabled:text-neutral-100 dark:active:not-disabled:bg-neutral-100/12 dark:aria-expanded:bg-neutral-100/8 dark:aria-expanded:text-neutral-100 dark:disabled:text-neutral-100/40", rm)}>{e === p && <span aria-hidden="true" className={rd("bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] dark:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)]", "absolute inset-0 rounded-[inherit]")} />}<span className={rd("relative", e === p && rb)}>{e}</span></button>)}</nav><div className="ml-auto flex shrink-0 items-center gap-1"><button type="button" className={rd(rh, rm, "w-[190px] max-sm:hidden")}><__mod_22728.n icon={__mod_66575.A} size={18} strokeWidth={2} aria-hidden="true" className={rx} /><span className={rd("text-neutral-900/62 dark:text-neutral-100/62", "min-w-0 flex-1 text-left")}>Search docs</span><kbd className="inline-flex min-h-5.5 min-w-5.5 w-fit items-center justify-center gap-1 rounded-[calc(var(--rb-r-md,8px))] bg-white px-1.5 font-mono text-[12px]/[16px] font-semibold tabular-nums text-neutral-900/78 dark:text-neutral-100/78 shadow-[0_0_0_1px_rgb(84_62_32/0.14),inset_0_-2px_0_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.06)] select-none dark:bg-neutral-800 dark:shadow-[0_0_0_1px_rgb(0_0_0/0.6),inset_0_-2px_0_rgb(0_0_0/0.4),inset_0_1px_0_rgb(255_255_255/0.08)]">/</kbd></button><button type="button" aria-label="Search docs" className={rd(rk, rv, "sm:hidden")}><__mod_22728.n icon={__mod_66575.A} size={18} strokeWidth={2} aria-hidden="true" /></button><button type="button" aria-label={x ? "Switch to light theme" : "Switch to dark theme"} aria-pressed={x} onClick={() => u(e => !e)} className={rd(rk, rv)}><__mod_22728.n icon={x ? __mod_48419.A : __mod_80469.A} size={18} strokeWidth={2} aria-hidden="true" /></button><a href="#" aria-label="Source repository" className={rd(rk, rv)}><__mod_22728.n icon={__mod_3367.A} size={18} strokeWidth={2} aria-hidden="true" /></a></div></div></header><div className="min-h-0 flex-1 overflow-y-auto"><div className="mx-auto flex max-w-[880px] gap-8 px-4 py-5 sm:px-6"><nav aria-label="Section" className="hidden w-[190px] shrink-0 lg:block">{ry.map(e => <div className="mb-4"><p className="px-3 pt-5 pb-1.5 text-[13px]/[16px] font-bold tabular-nums text-neutral-900/62 dark:text-neutral-100/62">{e.title}</p><ul className="mt-1.5 space-y-0.5">{e.items.map(e => <li><a href="#" className={rg}>{e}</a></li>)}</ul></div>)}</nav><article className="min-w-0 flex-1"><p className={rd(rf, "flex flex-wrap gap-x-3")}><span>{p}</span><span>{d}</span></p><h1 className={rd("text-[26px]/[32px] font-extrabold tracking-[-0.015em]", "mt-1")}>Data loading</h1><p className={rd(rp, "text-neutral-900/78 dark:text-neutral-100/78", "mt-2 max-w-[54ch]")}>Loaders run on the server before a route renders. They can stream partial results, revalidate on a schedule, and share a cache with every nested segment on the same request.</p><div className={rd("relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] text-neutral-900 dark:text-neutral-100 shadow-[0_0_0_1px_rgb(84_62_32/0.07),0_1px_2px_rgb(84_62_32/0.06),0_8px_22px_-10px_rgb(84_62_32/0.20)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_0_0_1px_rgb(0_0_0/0.6),0_10px_24px_-12px_rgb(0_0_0/0.8)]", "divide-y divide-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:divide-neutral-100/7", "mt-4 py-1")}>{["Reading from a loader", "Revalidation", "Streaming"].map(e => <div className="px-2 py-1"><a href="#" className={rd("relative flex min-h-10 w-full min-w-0 flex-wrap items-center gap-x-3 gap-y-1 py-2 text-left text-neutral-900 dark:text-neutral-100 transition-[background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)]", "cursor-pointer hover:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] dark:hover:bg-neutral-100/6 active:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] dark:active:bg-neutral-100/10", "rounded-[var(--rb-r-4xl,18px)]", "focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))]", rp, "justify-between px-2")}>{e}<__mod_22728.n icon={__mod_5042.A} size={16} strokeWidth={2} aria-hidden="true" className={rd(rx, "shrink-0")} /></a></div>)}</div></article></div></div><__mod_47962.N>{k && <><motion.div aria-hidden="true" onClick={() => m(!1)} initial={{
              opacity: 0
            }} animate={{
              opacity: 1
            }} exit={{
              opacity: 0,
              transition: {
                duration: .12,
                ease: r_
              }
            }} transition={{
              duration: .18 * !e,
              ease: r_
            }} className={rd("bg-[oklch(28%_0.02_70/0.3)] dark:bg-neutral-950/70", "absolute inset-0 z-30 lg:hidden")} /><motion.aside aria-label="Documentation navigation" initial={{
              opacity: 0,
              x: e ? 0 : -8
            }} animate={{
              opacity: 1,
              x: 0
            }} exit={{
              opacity: 0,
              x: e ? 0 : -8,
              transition: {
                duration: .12,
                ease: r_
              }
            }} transition={{
              duration: .18 * !e,
              ease: r_
            }} className={rd("border-r border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900", "absolute inset-y-0 left-0 z-40 flex w-[280px] max-w-[85%] flex-col lg:hidden")}><div className={rd("border-b border-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:border-neutral-100/7", "flex h-14 shrink-0 items-center justify-between px-3")}><span className={ru}>{p}</span><button type="button" aria-label="Close navigation" onClick={() => {
                  m(!1);
                }} className={rd(rk, rv)}><__mod_22728.n icon={__mod_89289.A} size={18} strokeWidth={2} aria-hidden="true" /></button></div><div className="min-h-0 flex-1 overflow-y-auto p-2"><div className="mb-2 flex flex-wrap gap-1">{rj.map(e => <button type="button" aria-pressed={e === p} onClick={() => h(e)} className="relative inline-flex h-8 max-w-full min-w-0 shrink-0 cursor-pointer items-center gap-1.5 whitespace-nowrap rounded-[calc(var(--rb-r-full,999px))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] px-3.5 text-[14px]/[18px] font-bold text-neutral-900 dark:text-neutral-100 select-none transition-[background-color,border-color,box-shadow,color,scale,translate,outline-color] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:translate-y-px active:duration-[90ms] motion-reduce:active:translate-y-0 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] aria-pressed:bg-none aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-pressed:shadow-[inset_0_0_0_1.5px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14)] disabled:cursor-not-allowed disabled:text-neutral-900/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-pressed:shadow-[inset_0_0_0_1.5px_var(--rb-accent,oklch(81%_0.16_163))] dark:aria-expanded:bg-neutral-800 dark:disabled:text-neutral-100/40">{e}</button>)}</div>{ry.map(e => <div><button type="button" aria-expanded={v === e.title} onClick={() => g(a => a === e.title ? null : e.title)} className={rd(rg, "justify-between")}>{e.title}<__mod_22728.n icon={__mod_20148.A} size={16} strokeWidth={2} aria-hidden="true" className={rd(v === e.title && "rotate-180")} /></button>{v === e.title && <ul className="mb-1 space-y-0.5 overflow-hidden pl-2.5">{e.items.map(e => <li><a href="#" className={rg}>{e}</a></li>)}</ul>}</div>)}</div></motion.aside></>}</__mod_47962.N></div>;
    },
    "navbar-11": function () {
      let e = (0, __mod_50969.I)(),
        [a, r] = (0, React.useState)("Q3 pricing experiment"),
        [c, d] = (0, React.useState)(!1),
        [_, b] = (0, React.useState)(a),
        [u, p] = (0, React.useState)("saved"),
        [h, k] = (0, React.useState)(null),
        [m, v] = (0, React.useState)(!1),
        g = (0, React.useRef)(null),
        f = (0, React.useRef)(null);
      (0, React.useEffect)(() => {
        if (!h) return;
        let e = g.current?.ownerDocument;
        if (!e) return;
        let a = e => {
            let a = e.target;
            a?.closest?.("[data-menu-root]") || k(null);
          },
          r = e => {
            "Escape" === e.key && k(null);
          };
        return e.addEventListener("pointerdown", a), e.addEventListener("keydown", r), () => {
          e.removeEventListener("pointerdown", a), e.removeEventListener("keydown", r);
        };
      }, [h]), (0, React.useEffect)(() => {
        if (!c) return;
        let e = f.current?.ownerDocument.defaultView,
          a = e?.requestAnimationFrame(() => {
            f.current?.focus(), f.current?.select();
          });
        return () => {
          void 0 !== a && e?.cancelAnimationFrame(a);
        };
      }, [c]), (0, React.useEffect)(() => {
        if ("saving" !== u) return;
        let e = g.current?.ownerDocument.defaultView,
          a = e?.setTimeout(() => p("saved"), 900);
        return () => {
          void 0 !== a && e?.clearTimeout(a);
        };
      }, [u]), (0, React.useEffect)(() => {
        if (!m) return;
        let e = g.current?.ownerDocument.defaultView,
          a = e?.setTimeout(() => v(!1), 1600);
        return () => {
          void 0 !== a && e?.clearTimeout(a);
        };
      }, [m]);
      let w = () => {
        let e = _.trim();
        (d(!1), e && e !== a) ? (r(e), p("saving")) : b(a);
      };
      return <div ref={g} className={rC("bg-white dark:bg-neutral-950", "text-neutral-900 dark:text-neutral-100", "relative flex h-full min-h-[480px] w-full flex-col overflow-hidden")}><header className={rC("border-b border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900", "relative z-20 flex h-14 shrink-0 items-center gap-2 px-2 sm:px-3")}><button type="button" aria-label="Back to documents" className={rC(rR, rM)}><__mod_22728.n icon={__mod_18976.A} size={18} strokeWidth={2} aria-hidden="true" /></button><div className="flex min-w-0 flex-1 items-center gap-2">{c ? <><label htmlFor="navbar-11-title" className="sr-only">Document title</label><div className={rC(rB, rO, "max-w-[320px]")}><input id="navbar-11-title" ref={f} value={_} onChange={e => b(e.target.value)} onBlur={w} onKeyDown={e => {
                  "Enter" === e.key && w(), "Escape" === e.key && (b(a), d(!1));
                }} className={rI} /></div></> : <button type="button" onClick={() => {
              b(a), d(!0);
            }} className={rC(rF, rD, "group inline-flex min-w-0 cursor-text items-center text-left")}><span className="min-w-0 truncate">{a}</span><__mod_22728.n icon={__mod_66654.A} size={18} strokeWidth={2} aria-hidden="true" className={rC("flex items-center justify-end gap-0.5 md:opacity-0 md:group-hover:opacity-100 md:group-focus-within:opacity-100 transition-opacity duration-[180ms]", "text-neutral-900/62 dark:text-neutral-100/62", "shrink-0")} /></button>}<span role="status" className={rC("inline-flex items-start gap-1 text-[14px]/[20px] font-bold tabular-nums", "saving" === u ? "text-neutral-900 dark:text-neutral-100" : "text-neutral-900/78 dark:text-neutral-100/78", "shrink-0 max-sm:hidden")}>{"saving" === u && <span className="flex h-lh shrink-0 items-center"><span aria-hidden="true" className="inline-block size-3 shrink-0 rounded-full border-2 border-current border-t-transparent animate-spin [animation-duration:700ms] motion-reduce:animate-none" /></span>}{"saving" === u ? "Saving" : "Saved"}</span></div><div className="flex shrink-0 items-center gap-1.5"><div className={rC("flex items-center *:not-first:-ms-1.5 *:not-last:[mask-image:radial-gradient(50%_50%_at_calc(150%-6px)_50%,transparent_calc(100%+1.5px),#000_calc(100%+2px))]", "max-sm:hidden")}>{rq.map(e => <span title={e.name} className="relative inline-flex size-8 shrink-0 overflow-hidden rounded-full select-none"><span className="flex size-full items-center justify-center rounded-[inherit] bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_24%,white)] text-[12px]/[16px] font-extrabold tabular-nums text-neutral-900 dark:text-neutral-100 dark:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_22%,var(--color-neutral-900))]">{e.initials}</span></span>)}</div><button type="button" aria-label="Version history" className={rC(rR, rM, "max-md:hidden")}><__mod_22728.n icon={__mod_85018.A} size={18} strokeWidth={2} aria-hidden="true" /></button><div className="relative" data-menu-root={!0}><button type="button" aria-haspopup="true" aria-expanded={"share" === h} onClick={() => {
                k(e => "share" === e ? null : "share");
              }} className={rC("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_68%,white),var(--rb-accent,oklch(84%_0.15_165)))] text-[var(--rb-accent-fg,oklch(26%_0.06_168))] shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_4px_10px_-4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_80%,transparent)] hover:not-disabled:-translate-y-px hover:not-disabled:brightness-[1.04] hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_7px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_85%,transparent)] active:not-disabled:translate-y-px active:not-disabled:brightness-[0.98] active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_55%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] motion-reduce:hover:translate-y-0 disabled:opacity-45 disabled:shadow-none dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_78%,white),var(--rb-accent,oklch(81%_0.16_163)))] dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_6px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,transparent)] dark:hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_9px_22px_-8px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_60%,transparent)] dark:active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_45%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black)] dark:disabled:shadow-none", rD)}><__mod_22728.n icon={__mod_71497.A} size={18} strokeWidth={2} aria-hidden="true" />Share</button><__mod_47962.N>{"share" === h && <motion.div {...rE(e)} className={rC("flex max-h-80 w-72 max-w-[calc(100vw-2rem)] flex-col gap-3 overflow-y-auto rounded-[calc(var(--rb-r-3xl,16px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] p-4 text-[15px]/[22px] font-medium text-neutral-900 dark:text-neutral-100 outline-none shadow-[0_0_0_1px_rgb(84_62_32/0.08),0_24px_56px_-20px_rgb(84_62_32/0.34),0_6px_16px_-8px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.65),0_24px_56px_-16px_rgb(0_0_0/0.8)]", "absolute top-full right-0 z-30 mt-1.5 w-[280px] origin-top-right")}><p className="text-[15px]/[20px] font-bold">Share document</p><p className={rC(rL, rP)}>Anyone at Cedar Labs with the link can comment.</p><div className={rC(rB, rO)}><input readOnly={!0} aria-label="Share link" value="cedarlabs.app/d/q3-pricing" className={rC(rI, "font-mono text-[12px]/[16px] tabular-nums")} /><span data-affix={!0} className="flex shrink-0 items-center gap-2 text-[15px]/[20px] font-semibold text-neutral-900/62 dark:text-neutral-100/62 select-none first:ps-3.5 last:pe-3.5 has-[button]:first:ps-1 has-[button]:last:pe-1"><button type="button" aria-label={m ? "Link copied" : "Copy link"} onClick={() => v(!0)} className={rC(rR, "size-7 rounded-[calc(var(--rb-r-full,999px))]")}><__mod_22728.n icon={m ? __mod_90987.A : __mod_62714.A} size={18} strokeWidth={2} aria-hidden="true" /></button></span></div><span role="status" className="sr-only">{m ? "Share link copied" : ""}</span></motion.div>}</__mod_47962.N></div><div className="relative" data-menu-root={!0}><button type="button" aria-haspopup="menu" aria-expanded={"more" === h} aria-label="Document actions" onClick={() => {
                k(e => "more" === e ? null : "more");
              }} className={rC(rR, rM)}><__mod_22728.n icon={__mod_59649.A} size={18} strokeWidth={2} aria-hidden="true" /></button><__mod_47962.N>{"more" === h && <motion.div {...rE(e)} role="menu" className={rC("min-w-52 max-w-[min(480px,calc(100vw-2rem))] overflow-x-hidden overflow-y-auto overscroll-contain rounded-[calc(var(--rb-r-3xl,16px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] p-2 text-neutral-900 dark:text-neutral-100 outline-none shadow-[0_0_0_1px_rgb(84_62_32/0.08),0_24px_56px_-20px_rgb(84_62_32/0.34),0_6px_16px_-8px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.65),0_24px_56px_-16px_rgb(0_0_0/0.8)]", "absolute top-full right-0 z-30 mt-1.5 w-[180px] min-w-[180px] origin-top-right")}><button type="button" role="menuitem" className={rT}><__mod_22728.n icon={__mod_62714.A} size={16} strokeWidth={2} aria-hidden="true" />Duplicate</button><button type="button" role="menuitem" className={rT}><__mod_22728.n icon={__mod_85018.A} size={16} strokeWidth={2} aria-hidden="true" />Version history</button><div className="mx-1 my-2 h-[1.5px] rounded-[calc(var(--rb-r-full,999px))] bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:bg-neutral-100/8" /><button type="button" role="menuitem" className="relative flex min-h-10 w-full cursor-default items-center gap-2.5 rounded-[calc(var(--rb-r-md,8px))] px-3 py-2 text-left text-[15px]/[20px] font-semibold outline-none select-none [&_svg]:shrink-0 text-[oklch(51%_0.18_26)] hover:bg-[oklch(96%_0.03_26)] focus-visible:bg-[oklch(96%_0.03_26)] data-[highlighted]:bg-[oklch(96%_0.03_26)] aria-disabled:cursor-not-allowed aria-disabled:text-neutral-900/40 dark:text-[oklch(78%_0.13_26)] dark:hover:bg-[oklch(30%_0.065_26)] dark:focus-visible:bg-[oklch(30%_0.065_26)] dark:data-[highlighted]:bg-[oklch(30%_0.065_26)] dark:aria-disabled:text-neutral-100/40"><__mod_22728.n icon={__mod_96037.A} size={16} strokeWidth={2} aria-hidden="true" />Move to trash</button></motion.div>}</__mod_47962.N></div></div></header><div className="min-h-0 flex-1 overflow-y-auto"><div className="mx-auto max-w-[600px] px-5 py-8"><h1 className="text-[26px]/[32px] font-extrabold tracking-[-0.015em]">{a}</h1><p className={rC(rL, rP, "mt-3")}>We are testing a usage-weighted tier against the current seat price for accounts above 40 seats. The goal is to hold net revenue flat while removing the seat ceiling that blocks expansion in the mid-market segment.</p><div className={rC("relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] text-neutral-900 dark:text-neutral-100 shadow-[0_0_0_1px_rgb(84_62_32/0.07),0_1px_2px_rgb(84_62_32/0.06),0_8px_22px_-10px_rgb(84_62_32/0.20)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_0_0_1px_rgb(0_0_0/0.6),0_10px_24px_-12px_rgb(0_0_0/0.8)]", "divide-y divide-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:divide-neutral-100/7", "mt-5")}>{["Hypothesis and success metric", "Segment definition", "Rollout plan"].map(e => <div className={rC("relative flex min-h-12 w-full min-w-0 flex-wrap items-center gap-x-3 gap-y-1 py-2.5 text-left text-neutral-900 dark:text-neutral-100 transition-[background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] has-[[data-description]]:min-h-16", rL, "px-4")}>{e}</div>)}</div></div></div></div>;
    },
    "navbar-12": function () {
      let e = (0, __mod_50969.I)(),
        a = (0, React.useId)(),
        [r, c] = (0, React.useState)("Product"),
        [d, _] = (0, React.useState)(!1),
        [b, x] = (0, React.useState)(!1),
        u = (0, React.useRef)(null),
        p = (0, React.useRef)(null);
      (0, React.useEffect)(() => {
        let e = p.current;
        if (!e) return;
        let a = () => _(e.scrollTop > 8);
        return e.addEventListener("scroll", a, {
          passive: !0
        }), () => e.removeEventListener("scroll", a);
      }, []), (0, React.useEffect)(() => {
        if (!b) return;
        let e = u.current?.ownerDocument;
        if (!e) return;
        let a = e => {
          "Escape" === e.key && x(!1);
        };
        return e.addEventListener("keydown", a), () => e.removeEventListener("keydown", a);
      }, [b]);
      let h = r5.find(e => e.id === r) ?? r5[0];
      return <div ref={u} className={rV("bg-white dark:bg-neutral-950", rJ, "relative flex h-full min-h-[480px] w-full flex-col overflow-hidden")}><div className="pointer-events-none absolute inset-x-0 top-0 z-20 flex justify-center px-3 pt-3 sm:px-4 sm:pt-4"><header className={rV(r1, "transition-[color,background-color,border-color,box-shadow,outline-color,opacity,scale,translate] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms]", d && rY, "pointer-events-auto w-full max-w-[680px] p-1.5")}><div className="flex min-w-0 items-center gap-2"><a href="#" className={rV("focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))]", "inline-flex shrink-0 items-center gap-2 pr-1 pl-1.5")}><span aria-hidden="true" className={rV("inline-flex shrink-0 items-center justify-center overflow-hidden rounded-[calc(var(--rb-r-lg,10px))] bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_68%,white),var(--rb-accent,oklch(84%_0.15_165)))] text-[var(--rb-accent-fg,oklch(26%_0.06_168))] shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] select-none dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_78%,white),var(--rb-accent,oklch(81%_0.16_163)))] dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.4),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black)]", "size-7")}><__mod_22728.n icon={__mod_71344.A} size={16} strokeWidth={2} /></span><span className={rU}>Halcyon</span></a><nav aria-label="Primary" className="mx-auto hidden items-center gap-0.5 sm:flex">{r2.map(n => <button type="button" aria-current={n === r ? "page" : void 0} onClick={() => c(n)} className={rV("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-transparent text-neutral-900/78 dark:text-neutral-100/78 hover:not-disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] hover:not-disabled:text-neutral-900 active:not-disabled:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] aria-expanded:text-neutral-900 disabled:text-neutral-900/40 dark:hover:not-disabled:bg-neutral-100/8 dark:hover:not-disabled:text-neutral-100 dark:active:not-disabled:bg-neutral-100/12 dark:aria-expanded:bg-neutral-100/8 dark:aria-expanded:text-neutral-100 dark:disabled:text-neutral-100/40", rZ)}>{n === r && <motion.span aria-hidden="true" layoutId={`${a}-nav`} transition={e ? {
                    duration: 0
                  } : r$} className={rV("bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] dark:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)]", "absolute inset-0 rounded-[inherit]")} />}<span className={rV("relative", n === r && rJ)}>{n}</span></button>)}</nav><button type="button" className={rV(rQ, rZ, "ml-auto max-sm:hidden")}>Get started<__mod_22728.n icon={__mod_55299.A} size={18} strokeWidth={2} aria-hidden="true" /></button><button type="button" aria-label="Open menu" aria-expanded={b} onClick={() => x(!0)} className={rV(rX, r0, "ml-auto sm:hidden")}><__mod_22728.n icon={__mod_1836.A} size={18} strokeWidth={2} aria-hidden="true" /></button></div></header></div><div ref={p} className="min-h-0 flex-1 overflow-y-auto"><div className="mx-auto max-w-[680px] px-5 pt-24 pb-10"><p className={rV("text-[13px]/[16px] font-semibold tabular-nums", "text-neutral-900/62 dark:text-neutral-100/62")}>{h.id}</p><h1 className={rV("text-[34px]/[40px] font-extrabold tracking-[-0.02em]", "mt-2")}>{h.heading}</h1><p className={rV("text-[15px]/[22px] font-medium", "text-neutral-900/78 dark:text-neutral-100/78", "mt-3 max-w-[52ch]")}>{h.body}</p><div className="mt-6 space-y-3">{[0, 1, 2, 3].map(e => <div className={rV("rounded-[calc(var(--rb-r-lg,10px))] bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-100/8", "h-[110px]")} />)}</div></div></div><__mod_47962.N>{b && <><motion.div aria-hidden="true" onClick={() => x(!1)} initial={{
              opacity: 0
            }} animate={{
              opacity: 1
            }} exit={{
              opacity: 0,
              transition: {
                duration: .12,
                ease: rK
              }
            }} transition={{
              duration: .18 * !e,
              ease: rK
            }} className={rV("bg-[oklch(28%_0.02_70/0.3)] dark:bg-neutral-950/70", "absolute inset-0 z-30 sm:hidden")} /><motion.div initial={{
              opacity: 0,
              y: e ? 0 : -8
            }} animate={{
              opacity: 1,
              y: 0
            }} exit={{
              opacity: 0,
              y: e ? 0 : -8,
              transition: {
                duration: .12,
                ease: rK
              }
            }} transition={{
              duration: .18 * !e,
              ease: rK
            }} className="absolute inset-x-3 top-3 z-40 origin-top sm:hidden"><div className={rV(r1, rY, "p-2")}><div className="flex min-h-8 items-center justify-between pl-1.5"><span className={rU}>Halcyon</span><button type="button" aria-label="Close menu" onClick={() => {
                    x(!1);
                  }} className={rV(rX, r0)}><__mod_22728.n icon={__mod_89289.A} size={18} strokeWidth={2} aria-hidden="true" /></button></div><nav aria-label="Primary" className="mt-1">{r2.map(e => <button type="button" onClick={() => {
                    c(e), x(!1);
                  }} className="flex h-10 w-full min-w-0 cursor-pointer items-center gap-2.5 rounded-[calc(var(--rb-r-full,999px))] px-3 text-left text-[15px]/[20px] font-semibold text-neutral-900/75 transition-[background-color,box-shadow,color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] [&_svg]:shrink-0 hover:bg-neutral-900/5 hover:text-neutral-900 aria-[current=page]:bg-white aria-[current=page]:font-bold aria-[current=page]:text-neutral-900 aria-[current=page]:shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:text-neutral-100/75 dark:hover:bg-neutral-100/6 dark:hover:text-neutral-100 dark:aria-[current=page]:bg-[color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800))] dark:aria-[current=page]:text-neutral-100 dark:aria-[current=page]:shadow-[inset_0_1px_0_rgb(255_255_255/0.08),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)]">{e}</button>)}</nav><button type="button" className={rV(rQ, "h-12 gap-2 rounded-[calc(var(--rb-r-full,999px))] px-6 text-[16px]/[20px] font-extrabold", "mt-1 w-full")}>Get started<__mod_22728.n icon={__mod_55299.A} size={18} strokeWidth={2} aria-hidden="true" /></button></div></motion.div></>}</__mod_47962.N></div>;
    },
    "navbar-13": function () {
      let e = (0, __mod_50969.I)(),
        [a, r] = (0, React.useState)(!1),
        [c, d] = (0, React.useState)("Work"),
        _ = (0, React.useRef)(null);
      (0, React.useEffect)(() => {
        if (!a) return;
        let e = _.current?.ownerDocument;
        if (!e) return;
        let t = e => {
          "Escape" === e.key && r(!1);
        };
        return e.addEventListener("keydown", t), () => e.removeEventListener("keydown", t);
      }, [a]);
      let b = e => <button type="button" aria-current={e === c ? "page" : void 0} onClick={() => d(e)} className={r6("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-transparent text-neutral-900/78 dark:text-neutral-100/78 hover:not-disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] hover:not-disabled:text-neutral-900 active:not-disabled:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] aria-expanded:text-neutral-900 disabled:text-neutral-900/40 dark:hover:not-disabled:bg-neutral-100/8 dark:hover:not-disabled:text-neutral-100 dark:active:not-disabled:bg-neutral-100/12 dark:aria-expanded:bg-neutral-100/8 dark:aria-expanded:text-neutral-100 dark:disabled:text-neutral-100/40", "h-10 gap-2 rounded-[calc(var(--rb-r-full,999px))] px-5 text-[15px]/[20px] font-bold")}>{e === c && <span aria-hidden="true" className={r6("bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] dark:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)]", "absolute inset-0 rounded-[inherit]")} />}<span className={r6("relative", e === c && r3)}>{e}</span></button>;
      return <div ref={_} className={r6(r4, r3, "relative flex h-full min-h-[560px] w-full flex-col overflow-hidden")}><header className={r6("border-b border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900", "relative z-20 grid h-16 shrink-0 grid-cols-[1fr_auto_1fr] items-center gap-2 px-3 sm:px-5")}><nav aria-label="Primary left" className="hidden items-center gap-1 md:flex">{ti.map(e => b(e))}</nav><button type="button" aria-label="Open menu" aria-expanded={a} onClick={() => r(!0)} className={r6(tr, tt, "justify-self-start md:hidden")}><__mod_22728.n icon={__mod_1836.A} size={18} strokeWidth={2} aria-hidden="true" /></button><a href="#" className={r6(te, "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))]", "justify-self-center px-2")}>Alder</a><div className="flex items-center justify-end gap-1"><nav aria-label="Primary right" className="hidden items-center gap-1 md:flex">{to.map(e => b(e))}</nav><button type="button" aria-label="Open menu" aria-expanded={a} onClick={() => r(!0)} className={r6(tr, tt, "max-md:hidden")}><__mod_22728.n icon={__mod_1836.A} size={18} strokeWidth={2} aria-hidden="true" /></button></div></header><div className="min-h-0 flex-1 overflow-y-auto"><div className="mx-auto max-w-[760px] px-5 py-10"><p className={r6("text-[13px]/[16px] font-semibold tabular-nums", r7)}>{c}</p><h1 className={r6("text-[34px]/[40px] font-extrabold tracking-[-0.02em]", "mt-2 max-w-[18ch]")}>A studio for careful, long-lived work.</h1><ul className={r6("relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] text-neutral-900 dark:text-neutral-100 shadow-[0_0_0_1px_rgb(84_62_32/0.07),0_1px_2px_rgb(84_62_32/0.06),0_8px_22px_-10px_rgb(84_62_32/0.20)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_0_0_1px_rgb(0_0_0/0.6),0_10px_24px_-12px_rgb(0_0_0/0.8)]", "divide-y divide-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:divide-neutral-100/7", "mt-8 py-1")}>{tc.map(e => <li className="px-2 py-1"><a href="#" className={r6("relative flex min-h-10 w-full min-w-0 flex-wrap items-center gap-x-3 gap-y-1 py-2 text-left text-neutral-900 dark:text-neutral-100 transition-[background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)]", tn, r9, ta, "group px-2")}><span className={r6("text-[15px]/[22px] font-medium", "min-w-0 flex-1 truncate")}>{e.name}</span><span className={r6("text-[14px]/[20px] font-medium", r7, "hidden shrink-0 sm:inline")}>{e.kind}</span><span className={tl}>{e.year}</span><__mod_22728.n icon={__mod_1497.A} size={18} strokeWidth={2} aria-hidden="true" className={r6("flex items-center justify-end gap-0.5 md:opacity-0 md:group-hover:opacity-100 md:group-focus-within:opacity-100 transition-opacity duration-[180ms]", r7, "shrink-0")} /></a></li>)}</ul></div></div><__mod_47962.N>{a && <motion.div role="dialog" aria-modal="true" aria-label="Site menu" initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} exit={{
            opacity: 0,
            transition: {
              duration: .12,
              ease: r8
            }
          }} transition={{
            duration: .18 * !e,
            ease: r8
          }} className={r6(r4, "absolute inset-0 z-40 flex flex-col")}><div className="flex h-16 shrink-0 items-center justify-between px-3 sm:px-5"><span className={r6(te, "px-2")}>Alder</span><button type="button" aria-label="Close menu" onClick={() => {
                r(!1);
              }} className={r6(tr, tt)}><__mod_22728.n icon={__mod_89289.A} size={18} strokeWidth={2} aria-hidden="true" /></button></div><nav aria-label="Site" className="min-h-0 flex-1 overflow-y-auto px-3 pb-6 sm:px-5">{ts.map(e => <button type="button" onClick={() => {
                d(e.label), r(!1);
              }} className={r6("relative flex min-h-12 w-full min-w-0 flex-wrap items-center gap-x-3 gap-y-1 py-2.5 text-left text-neutral-900 dark:text-neutral-100 transition-[background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] has-[[data-description]]:min-h-16", tn, r9, ta, "group px-3")}><span className={r6("text-[26px]/[32px] font-extrabold tracking-[-0.015em]", "min-w-0 flex-1 truncate")}>{e.label}</span><span className={r6(tl, "hidden sm:inline")}>{e.note}</span></button>)}</nav></motion.div>}</__mod_47962.N></div>;
    },
    "navbar-14": function () {
      let e = (0, __mod_50969.I)(),
        [a, r] = (0, React.useState)(0),
        [c, d] = (0, React.useState)(tk[0].id),
        [_, b] = (0, React.useState)(!1),
        [x, u] = (0, React.useState)(!1),
        [p, h] = (0, React.useState)(!1),
        k = (0, React.useRef)(null),
        m = (0, React.useRef)(null);
      return (0, React.useEffect)(() => {
        let e = m.current;
        if (!e) return;
        let a = () => {
          let a = e.scrollHeight - e.clientHeight;
          r(a > 0 ? Math.min(1, e.scrollTop / a) : 0);
          let t = e.scrollTop + .3 * e.clientHeight,
            n = tk[0].id;
          for (let a of tk) {
            let r = e.querySelector(`[data-section="${a.id}"]`);
            r && r.offsetTop <= t && (n = a.id);
          }
          d(n);
        };
        return a(), e.addEventListener("scroll", a, {
          passive: !0
        }), () => e.removeEventListener("scroll", a);
      }, []), (0, React.useEffect)(() => {
        if (!_) return;
        let e = k.current?.ownerDocument;
        if (!e) return;
        let a = e => {
            let a = e.target;
            a?.closest?.("[data-menu-root]") || b(!1);
          },
          r = e => {
            "Escape" === e.key && b(!1);
          };
        return e.addEventListener("pointerdown", a), e.addEventListener("keydown", r), () => {
          e.removeEventListener("pointerdown", a), e.removeEventListener("keydown", r);
        };
      }, [_]), (0, React.useEffect)(() => {
        if (!p) return;
        let e = k.current?.ownerDocument.defaultView,
          a = e?.setTimeout(() => h(!1), 1600);
        return () => {
          void 0 !== a && e?.clearTimeout(a);
        };
      }, [p]), <div ref={k} className={tb("bg-white dark:bg-neutral-950", "text-neutral-900 dark:text-neutral-100", "relative flex h-full min-h-[480px] w-full flex-col overflow-hidden")}><header className={tb("border-b border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900", "relative z-20 shrink-0")}><div className="flex h-14 items-center gap-2 px-2 sm:px-3"><button type="button" aria-label="Back to journal" className={tb(tp, th)}><__mod_22728.n icon={__mod_18976.A} size={18} strokeWidth={2} aria-hidden="true" /></button><div className="min-w-0 flex-1"><p className={tb("text-[15px]/[20px] font-bold", "truncate")}>Error budgets that actually change behaviour</p><p className={tb("text-[13px]/[16px] font-semibold tabular-nums", "text-neutral-900/62 dark:text-neutral-100/62", "flex min-w-0 gap-x-3")}><span className="truncate">Priya Raman</span><span className="shrink-0">9 min read</span></p></div><div className="flex shrink-0 items-center gap-0.5"><div className="relative" data-menu-root={!0}><button type="button" aria-haspopup="menu" aria-expanded={_} aria-label="Contents" onClick={() => {
                  b(e => !e);
                }} className={tb("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-transparent text-neutral-900/78 dark:text-neutral-100/78 hover:not-disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] hover:not-disabled:text-neutral-900 active:not-disabled:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] aria-expanded:text-neutral-900 disabled:text-neutral-900/40 dark:hover:not-disabled:bg-neutral-100/8 dark:hover:not-disabled:text-neutral-100 dark:active:not-disabled:bg-neutral-100/12 dark:aria-expanded:bg-neutral-100/8 dark:aria-expanded:text-neutral-100 dark:disabled:text-neutral-100/40", "h-10 gap-2 rounded-[calc(var(--rb-r-full,999px))] px-5 text-[15px]/[20px] font-bold")}><__mod_22728.n icon={__mod_48240.A} size={18} strokeWidth={2} aria-hidden="true" /><span className="hidden sm:inline">Contents</span></button><__mod_47962.N>{_ && <motion.div {...{
                    initial: {
                      opacity: 0
                    },
                    animate: {
                      opacity: 1
                    },
                    exit: {
                      opacity: 0,
                      transition: {
                        duration: .12,
                        ease: tx
                      }
                    },
                    transition: {
                      duration: .16 * !e,
                      ease: tx
                    }
                  }} role="menu" className={tb("min-w-52 max-w-[min(480px,calc(100vw-2rem))] overflow-x-hidden overflow-y-auto overscroll-contain rounded-[calc(var(--rb-r-3xl,16px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] p-2 text-neutral-900 dark:text-neutral-100 outline-none shadow-[0_0_0_1px_rgb(84_62_32/0.08),0_24px_56px_-20px_rgb(84_62_32/0.34),0_6px_16px_-8px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.65),0_24px_56px_-16px_rgb(0_0_0/0.8)]", "absolute top-full right-0 z-30 mt-1.5 w-[260px] origin-top-right")}>{tk.map(a => <button type="button" role="menuitem" aria-current={a.id === c ? "location" : void 0} onClick={() => {
                      var r;
                      let t, n;
                      return r = a.id, t = m.current, n = t?.querySelector(`[data-section="${r}"]`), void (t && n && t.scrollTo({
                        top: n.offsetTop - 16,
                        behavior: e ? "auto" : "smooth"
                      }), b(!1));
                    }} className={tb("relative flex min-h-10 w-full cursor-default items-center gap-2.5 rounded-[calc(var(--rb-r-md,8px))] px-3 py-2 text-left text-[15px]/[20px] font-semibold text-neutral-900 outline-none select-none [&_svg]:shrink-0 [&_svg]:text-neutral-900/70 hover:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] focus-visible:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] data-[highlighted]:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-disabled:cursor-not-allowed aria-disabled:text-neutral-900/40 dark:text-neutral-100 dark:[&_svg]:text-neutral-100/70 dark:hover:bg-neutral-100/7 dark:focus-visible:bg-neutral-100/7 dark:data-[highlighted]:bg-neutral-100/7 dark:aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-disabled:text-neutral-100/40", "ps-9")}>{a.id === c && <span className="pointer-events-none absolute start-3 flex size-[18px] items-center justify-center"><__mod_22728.n icon={__mod_90987.A} size={18} strokeWidth={2} aria-hidden="true" /></span>}<span className="min-w-0 flex-1">{a.title}</span></button>)}</motion.div>}</__mod_47962.N></div><button type="button" aria-label={x ? "Remove bookmark" : "Bookmark article"} aria-pressed={x} onClick={() => u(e => !e)} className={tb(tp, th)}><__mod_22728.n icon={__mod_2139.A} size={18} strokeWidth={2} aria-hidden="true" className={tb(x && "[&_path]:fill-current")} /></button><button type="button" aria-label="Copy link" onClick={() => h(!0)} className={tb(tp, th)}><__mod_22728.n icon={p ? __mod_90987.A : __mod_33786.A} size={18} strokeWidth={2} aria-hidden="true" /></button><span role="status" className="sr-only">{p ? "Link copied" : ""}</span><button type="button" aria-label="Share article" className={tb(tp, th, "max-sm:hidden")}><__mod_22728.n icon={__mod_71497.A} size={18} strokeWidth={2} aria-hidden="true" /></button></div></div><div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-[2px]"><div style={{
              width: `${100 * a}%`
            }} className="block h-full rounded-[calc(var(--rb-r-full,999px))] bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_82%,black)] shadow-[inset_0_1px_0_rgb(255_255_255/0.35)] transition-[width] duration-[420ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] motion-reduce:transition-none dark:bg-[var(--rb-accent,oklch(81%_0.16_163))]" /></div></header><div ref={m} className="min-h-0 flex-1 overflow-y-auto"><div className="mx-auto max-w-[600px] px-5 py-7"><h1 className="text-[26px]/[32px] font-extrabold tracking-[-0.015em]">Error budgets that actually change behaviour</h1><p className={tb("text-[15px]/[22px] font-medium", tu, "mt-3")}>Most teams publish an objective, watch the number, and change nothing when it slips. A budget is only useful if spending it is expensive.</p>{tk.map(e => <section data-section={e.id} className="mt-7"><h2 className="text-[17px]/[22px] font-extrabold">{e.title}</h2><p className={tb("text-[14px]/[20px] font-medium", tu, "mt-2")}>{e.body}</p><div className={tb("rounded-[calc(var(--rb-r-lg,10px))] bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-100/8", "mt-3 h-[90px]")} /></section>)}</div></div></div>;
    }
  },
  tv = {
    "navbar-1": 480,
    "navbar-2": 400,
    "navbar-3": 480,
    "navbar-4": 560,
    "navbar-5": 640,
    "navbar-6": 480,
    "navbar-7": 520,
    "navbar-8": 400,
    "navbar-9": 560,
    "navbar-10": 480,
    "navbar-11": 480,
    "navbar-12": 480,
    "navbar-13": 560,
    "navbar-14": 480
  };

export { tm as components };
export { tv as heights };

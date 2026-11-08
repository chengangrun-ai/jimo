import * as __mod_33126 from "../_helpers/33126";
import * as __mod_53828 from "../_helpers/53828";
import * as __mod_83605 from "../_helpers/83605";
import * as __mod_17722 from "../_helpers/17722";
import * as __mod_95055 from "../_helpers/95055";
import * as __mod_22151 from "../_helpers/22151";
import * as __mod_83838 from "../_helpers/83838";
import * as __mod_95735 from "../_helpers/95735";
import * as __mod_43755 from "../_helpers/43755";
import * as __mod_88366 from "../_helpers/88366";
import * as __mod_31964 from "../_helpers/31964";
import * as __mod_10342 from "../_helpers/10342";
import * as __mod_64801 from "../_helpers/64801";
import * as __mod_19907 from "../_helpers/19907";
import * as __mod_61020 from "../_helpers/61020";
import * as __mod_80969 from "../_helpers/80969";
import * as __mod_22728 from "../_helpers/22728";
import * as __mod_90987 from "../_helpers/90987";
import * as __mod_87924 from "../_helpers/87924";
import * as __mod_1497 from "../_helpers/1497";
import * as __mod_37502 from "../_helpers/37502";
import * as __mod_2139 from "../_helpers/2139";
import * as __mod_92752 from "../_helpers/92752";
import * as __mod_39519 from "../_helpers/39519";
import * as __mod_58553 from "../_helpers/58553";
import * as __mod_89886 from "../_helpers/89886";
import * as __mod_55410 from "../_helpers/55410";
/**
 * Card 9
 * slug: card-9
 * category: card
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let n = (...e) => e.filter(Boolean).join(" "),
  i = "text-neutral-900 dark:text-neutral-100",
  o = [{
    id: "rivera",
    name: "Sam Rivera",
    initials: "SR",
    role: "Product lead",
    location: "Lisbon",
    online: !0,
    bio: "Runs discovery and roadmap for the payments surface."
  }, {
    id: "hale",
    name: "Imani Hale",
    initials: "IH",
    role: "Staff engineer",
    location: "Berlin",
    online: !0,
    bio: "Owns the ledger service and the move to event sourcing."
  }, {
    id: "okafor",
    name: "Dana Okafor",
    initials: "DO",
    role: "Design director",
    location: "New York",
    online: !1,
    bio: "Sets the visual system and reviews every shipped surface."
  }, {
    id: "moss",
    name: "Rowan Moss",
    initials: "RM",
    role: "Data scientist",
    location: "Toronto",
    online: !1,
    bio: "Builds the forecasting models behind the revenue dashboard."
  }, {
    id: "silva",
    name: "Nina Silva",
    initials: "NS",
    role: "Support manager",
    location: "S\xe3o Paulo",
    online: !0,
    bio: "Leads the escalation desk across three regions."
  }, {
    id: "abara",
    name: "Tomas Abara",
    initials: "TA",
    role: "Solutions architect",
    location: "Singapore",
    online: !1,
    bio: "Pairs with enterprise accounts through their first integration."
  }];
let u = (...e) => e.filter(Boolean).join(" "),
  h = "text-neutral-900 dark:text-neutral-100",
  k = [{
    id: "repos",
    name: "Repositories",
    icon: __mod_33126.A,
    premium: !1,
    blurb: "Link branches and pull requests to the work item that opened them."
  }, {
    id: "chat",
    name: "Team chat",
    icon: __mod_53828.A,
    premium: !1,
    blurb: "Post status changes into the channel that owns each project."
  }, {
    id: "calendar",
    name: "Calendar",
    icon: __mod_83605.A,
    premium: !1,
    blurb: "Keep milestones and review sessions on everyone's calendar."
  }, {
    id: "warehouse",
    name: "Data warehouse",
    icon: __mod_17722.A,
    premium: !0,
    blurb: "Stream every event into your warehouse on a fifteen minute cadence."
  }, {
    id: "helpdesk",
    name: "Help desk",
    icon: __mod_95055.A,
    premium: !1,
    blurb: "Turn escalated conversations into tracked issues automatically."
  }, {
    id: "storage",
    name: "Object storage",
    icon: __mod_22151.A,
    premium: !0,
    blurb: "Archive exports and attachments into a bucket you control."
  }];
let v = (...e) => e.filter(Boolean).join(" "),
  g = "text-neutral-900 dark:text-neutral-100",
  f = "text-neutral-900/78 dark:text-neutral-100/78",
  w = "text-[14px]/[20px] font-medium",
  j = "h-10 gap-2 rounded-[calc(var(--rb-r-full,999px))] px-5 text-[15px]/[20px] font-bold",
  y = [{
    id: "connect",
    index: "0.1",
    title: "Connect a source",
    blurb: "Point the workspace at the repository or warehouse you work in."
  }, {
    id: "invite",
    index: "0.2",
    title: "Invite your team",
    blurb: "Anyone with an invitation can open the workspace immediately."
  }, {
    id: "rules",
    index: "0.3",
    title: "Set review rules",
    blurb: "Decide what needs approval before it reaches production."
  }, {
    id: "ship",
    index: "0.4",
    title: "Ship the first change",
    blurb: "Run it end to end so you can see the whole trail in one place."
  }];
let S = (...e) => e.filter(Boolean).join(" "),
  A = "text-neutral-900 dark:text-neutral-100",
  C = "text-neutral-900/62 dark:text-neutral-100/62",
  B = "text-[13px]/[16px] font-semibold tabular-nums",
  D = "h-10 gap-2 rounded-[calc(var(--rb-r-full,999px))] px-5 text-[15px]/[20px] font-bold",
  T = "relative inline-flex h-8 max-w-full min-w-0 shrink-0 cursor-pointer items-center gap-1.5 whitespace-nowrap rounded-[calc(var(--rb-r-full,999px))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] px-3.5 text-[14px]/[18px] font-bold text-neutral-900 dark:text-neutral-100 select-none transition-[background-color,border-color,box-shadow,color,scale,translate,outline-color] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:translate-y-px active:duration-[90ms] motion-reduce:active:translate-y-0 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] aria-pressed:bg-none aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-pressed:shadow-[inset_0_0_0_1.5px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14)] disabled:cursor-not-allowed disabled:text-neutral-900/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-pressed:shadow-[inset_0_0_0_1.5px_var(--rb-accent,oklch(81%_0.16_163))] dark:aria-expanded:bg-neutral-800 dark:disabled:text-neutral-100/40",
  M = [{
    id: "roadmap",
    title: "Roadmap review",
    day: "14",
    weekday: "Mon",
    window: "09:30 – 10:15",
    place: "Studio A",
    invited: 7
  }, {
    id: "standup",
    title: "Platform standup",
    day: "14",
    weekday: "Mon",
    window: "11:00 – 11:15",
    place: "Video call",
    invited: 8
  }, {
    id: "design",
    title: "Design critique",
    day: "14",
    weekday: "Mon",
    window: "14:00 – 15:00",
    place: "Studio B",
    invited: 4
  }, {
    id: "pricing",
    title: "Pricing working group",
    day: "15",
    weekday: "Tue",
    window: "10:00 – 10:50",
    place: "Video call",
    invited: 5
  }, {
    id: "retro",
    title: "Sprint retrospective",
    day: "17",
    weekday: "Thu",
    window: "16:00 – 16:45",
    place: "Studio A",
    invited: 8
  }, {
    id: "onsite",
    title: "Customer onsite prep",
    day: "18",
    weekday: "Fri",
    window: "08:30 – 09:00",
    place: "Video call",
    invited: 2
  }];
let W = (...e) => e.filter(Boolean).join(" "),
  $ = "text-neutral-900 dark:text-neutral-100",
  P = "text-neutral-900/78 dark:text-neutral-100/78",
  F = "divide-y divide-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:divide-neutral-100/7",
  I = "text-[14px]/[20px] font-medium",
  O = [{
    id: "starter",
    name: "Starter",
    price: "$0",
    cadence: "forever",
    blurb: "For a single person keeping one project tidy.",
    specs: [{
      label: "Seats",
      value: "1"
    }, {
      label: "Projects",
      value: "3"
    }, {
      label: "History",
      value: "30 days"
    }, {
      label: "Support",
      value: "Community"
    }],
    includes: ["Unlimited work items", "Two integrations"],
    recommended: !1
  }, {
    id: "team",
    name: "Team",
    price: "$18",
    cadence: "per seat / month",
    blurb: "For a working team that ships on a weekly cadence.",
    specs: [{
      label: "Seats",
      value: "Up to 50"
    }, {
      label: "Projects",
      value: "Unlimited"
    }, {
      label: "History",
      value: "2 years"
    }, {
      label: "Support",
      value: "Next business day"
    }],
    includes: ["Everything in Starter", "Roles and approvals", "Audit trail"],
    recommended: !0
  }, {
    id: "enterprise",
    name: "Enterprise",
    price: "Custom",
    cadence: "billed annually",
    blurb: "For organisations with procurement and residency rules.",
    specs: [{
      label: "Seats",
      value: "Unlimited"
    }, {
      label: "Projects",
      value: "Unlimited"
    }, {
      label: "History",
      value: "Unlimited"
    }, {
      label: "Support",
      value: "Dedicated"
    }],
    includes: ["Everything in Team", "SSO and SCIM", "Data residency"],
    recommended: !1
  }];
let K = (...e) => e.filter(Boolean).join(" "),
  L = "text-neutral-900 dark:text-neutral-100",
  q = ["7d", "30d", "90d"],
  Y = [{
    id: "balance",
    label: "Available balance",
    icon: __mod_83838.A,
    values: {
      "7d": {
        value: "18,420",
        delta: 3.2,
        series: [42, 55, 48, 61, 58, 72, 80]
      },
      "30d": {
        value: "74,910",
        delta: 8.6,
        series: [30, 44, 39, 52, 66, 61, 78]
      },
      "90d": {
        value: "213,540",
        delta: 12.4,
        series: [22, 31, 45, 40, 58, 70, 88]
      }
    }
  }, {
    id: "spend",
    label: "Card spend",
    icon: __mod_95735.A,
    values: {
      "7d": {
        value: "4,180",
        delta: -1.8,
        series: [70, 62, 66, 51, 55, 44, 40]
      },
      "30d": {
        value: "16,240",
        delta: -5.4,
        series: [82, 74, 68, 60, 57, 49, 41]
      },
      "90d": {
        value: "51,880",
        delta: 2.1,
        series: [48, 52, 46, 58, 55, 63, 67]
      }
    }
  }, {
    id: "recurring",
    label: "Recurring revenue",
    icon: __mod_43755.A,
    values: {
      "7d": {
        value: "9,760",
        delta: 1.1,
        series: [58, 60, 59, 63, 65, 64, 68]
      },
      "30d": {
        value: "38,900",
        delta: 4.7,
        series: [40, 46, 51, 55, 60, 66, 72]
      },
      "90d": {
        value: "112,300",
        delta: 9.9,
        series: [28, 36, 44, 49, 61, 68, 84]
      }
    }
  }, {
    id: "payers",
    label: "Active payers",
    icon: __mod_88366.A,
    values: {
      "7d": {
        value: "1,284",
        delta: .6,
        series: [61, 59, 63, 62, 66, 65, 69]
      },
      "30d": {
        value: "1,342",
        delta: -2.3,
        series: [76, 71, 69, 64, 61, 58, 54]
      },
      "90d": {
        value: "1,410",
        delta: 6.8,
        series: [34, 41, 48, 52, 59, 67, 74]
      }
    }
  }];
let J = (...e) => e.filter(Boolean).join(" "),
  Q = "text-neutral-900 dark:text-neutral-100",
  X = "text-neutral-900/78 dark:text-neutral-100/78",
  Z = "text-neutral-900/62 dark:text-neutral-100/62",
  ee = "text-[13px]/[16px] font-semibold tabular-nums",
  ea = [{
    id: "2-9",
    version: "2.9",
    date: "12 March",
    title: "Scheduled exports",
    excerpt: "Any saved view can now run on a schedule and drop a CSV into your warehouse without a manual export step.",
    author: "Nina S\xf8rensen",
    initials: "NS",
    readTime: "3 min read"
  }, {
    id: "2-8",
    version: "2.8",
    date: "27 February",
    title: "Faster search across long-running workspaces",
    excerpt: "Search now returns in under 200ms on workspaces with more than a million records, and matches highlight in place.",
    author: "Dmitri Oyelaran",
    initials: "DO",
    readTime: "4 min read"
  }, {
    id: "2-7",
    version: "2.7",
    date: "9 February",
    title: "Roles you can define yourself",
    excerpt: "Build a role from individual permissions instead of choosing between admin and member, and apply it per project.",
    author: "Rita Marchetti",
    initials: "RM",
    readTime: "6 min read"
  }, {
    id: "2-6",
    version: "2.6",
    date: "22 January",
    title: "Comment threads on every record",
    excerpt: "Discussion moved out of the activity feed and onto the record itself, so context stays where the work happens.",
    author: "Tomas Alvarez",
    initials: "TA",
    readTime: "2 min read"
  }, {
    id: "2-5",
    version: "2.5",
    date: "8 January",
    title: "Offline drafts",
    excerpt: "Edits made without a connection are kept locally and merged when you reconnect, with conflicts surfaced inline.",
    author: "Iris Haddad",
    initials: "IH",
    readTime: "5 min read"
  }, {
    id: "2-4",
    version: "2.4",
    date: "18 December",
    title: "A quieter notification model",
    excerpt: "Notifications group by project and collapse duplicates, so a busy morning arrives as four items instead of forty.",
    author: "Nina S\xf8rensen",
    initials: "NS",
    readTime: "3 min read"
  }];
let es = (...e) => e.filter(Boolean).join(" "),
  ec = "text-neutral-900 dark:text-neutral-100",
  ed = "text-neutral-900/62 dark:text-neutral-100/62",
  eb = "text-[13px]/[16px] font-semibold tabular-nums",
  ex = "relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_68%,white),var(--rb-accent,oklch(84%_0.15_165)))] text-[var(--rb-accent-fg,oklch(26%_0.06_168))] shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_4px_10px_-4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_80%,transparent)] hover:not-disabled:-translate-y-px hover:not-disabled:brightness-[1.04] hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_7px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_85%,transparent)] active:not-disabled:translate-y-px active:not-disabled:brightness-[0.98] active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_55%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] motion-reduce:hover:translate-y-0 disabled:opacity-45 disabled:shadow-none dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_78%,white),var(--rb-accent,oklch(81%_0.16_163)))] dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_6px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,transparent)] dark:hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_9px_22px_-8px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_60%,transparent)] dark:active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_45%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black)] dark:disabled:shadow-none",
  ep = "h-10 gap-2 rounded-[calc(var(--rb-r-full,999px))] px-5 text-[15px]/[20px] font-bold",
  eu = [{
    id: "a1",
    name: "Q3-narrative.pdf",
    kind: "Document",
    size: "2.4 MB",
    updated: "2h ago",
    icon: __mod_31964.A
  }, {
    id: "a2",
    name: "cap-table.xlsx",
    kind: "Spreadsheet",
    size: "480 KB",
    updated: "Yesterday",
    icon: __mod_10342.A
  }, {
    id: "a3",
    name: "brand-mark.svg",
    kind: "Vector",
    size: "16 KB",
    updated: "3d ago",
    icon: __mod_64801.A
  }, {
    id: "a4",
    name: "walkthrough.mp4",
    kind: "Video",
    size: "184 MB",
    updated: "3d ago",
    icon: __mod_19907.A
  }, {
    id: "a5",
    name: "board-deck.key",
    kind: "Presentation",
    size: "31 MB",
    updated: "1w ago",
    icon: __mod_61020.A
  }, {
    id: "a6",
    name: "schema.prisma",
    kind: "Source",
    size: "9 KB",
    updated: "1w ago",
    icon: __mod_80969.A
  }, {
    id: "a7",
    name: "hero-still.png",
    kind: "Image",
    size: "6.1 MB",
    updated: "2w ago",
    icon: __mod_64801.A
  }, {
    id: "a8",
    name: "policy-v4.pdf",
    kind: "Document",
    size: "1.1 MB",
    updated: "3w ago",
    icon: __mod_31964.A
  }];
let ek = (...e) => e.filter(Boolean).join(" "),
  em = "text-neutral-900 dark:text-neutral-100",
  ev = "text-neutral-900/78 dark:text-neutral-100/78",
  eg = "text-neutral-900/62 dark:text-neutral-100/62",
  ef = "text-[17px]/[22px] font-extrabold",
  ew = "text-[14px]/[20px] font-medium",
  ej = "text-[13px]/[16px] font-semibold tabular-nums",
  ey = "h-10 gap-2 rounded-[calc(var(--rb-r-full,999px))] px-5 text-[15px]/[20px] font-bold",
  eN = [{
    label: "Projects",
    value: "24"
  }, {
    label: "Reviews",
    value: "318"
  }, {
    label: "Following",
    value: "1.2k"
  }],
  ez = ["Design systems", "Prototyping", "Accessibility"];
let eB = (...e) => e.filter(Boolean).join(" "),
  eD = "text-neutral-900 dark:text-neutral-100",
  eT = "text-neutral-900/62 dark:text-neutral-100/62",
  eM = "divide-y divide-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:divide-neutral-100/7",
  eR = "text-[13px]/[16px] font-semibold tabular-nums",
  eW = "relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] text-neutral-900 dark:text-neutral-100 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] active:not-disabled:translate-y-px active:not-disabled:shadow-[inset_0_1px_3px_rgb(84_62_32/0.16),0_0_0_1px_rgb(84_62_32/0.10)] dark:active:not-disabled:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14),0_0_0_1px_rgb(84_62_32/0.10)] dark:aria-expanded:bg-neutral-800 dark:aria-expanded:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] disabled:bg-none disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] disabled:text-neutral-900/40 disabled:shadow-none dark:disabled:bg-neutral-800/60 dark:disabled:text-neutral-100/40",
  e$ = "h-10 gap-2 rounded-[calc(var(--rb-r-full,999px))] px-5 text-[15px]/[20px] font-bold",
  eP = [{
    label: "Pending",
    value: "$1,204.00"
  }, {
    label: "Reserved",
    value: "$380.00"
  }],
  eF = [{
    id: "stripe",
    name: "Stripe payout",
    when: "Today, 09:14",
    amount: "+$4,820.00",
    incoming: !0
  }, {
    id: "aws",
    name: "Amazon Web Services",
    when: "Yesterday",
    amount: "−$612.40",
    incoming: !1
  }, {
    id: "payroll",
    name: "March payroll",
    when: "28 February",
    amount: "−$18,900.00",
    incoming: !1
  }],
  eI = (...e) => e.filter(Boolean).join(" "),
  eO = "text-neutral-900 dark:text-neutral-100",
  eU = "text-neutral-900/78 dark:text-neutral-100/78",
  eV = "text-neutral-900/62 dark:text-neutral-100/62",
  eH = "divide-y divide-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:divide-neutral-100/7",
  eE = "text-[17px]/[22px] font-extrabold",
  eK = "text-[15px]/[22px] font-medium",
  eL = "text-[13px]/[16px] font-semibold tabular-nums",
  eq = [{
    id: "seats",
    label: "Team seats",
    detail: "24 \xd7 $18.00",
    amount: "$432.00"
  }, {
    id: "storage",
    label: "Additional storage",
    detail: "250 GB \xd7 $0.40",
    amount: "$100.00"
  }, {
    id: "support",
    label: "Priority support",
    detail: "1 month",
    amount: "$150.00"
  }],
  eY = [{
    id: "subtotal",
    label: "Subtotal",
    value: "$682.00"
  }, {
    id: "tax",
    label: "VAT (23%)",
    value: "$156.86"
  }],
  eG = {
    "card-1": function () {
      let [e, a] = (0, React.useState)(() => new Set(["hale"]));
      return <div className={n("bg-white dark:bg-neutral-950", i, "h-full min-h-[620px] w-full overflow-y-auto p-6 sm:p-8")}><ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">{o.map(r => {
            let t = e.has(r.id);
            return <li className="relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 shadow-[inset_0_0_0_1px_rgb(84_62_32/0.05)] dark:shadow-[inset_0_0_0_1px_rgb(255_255_255/0.05)]"><div className={n("mx-1 mb-1 flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-5xl,22px))] border border-transparent bg-white dark:bg-neutral-950 shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] [&:has(+*)]:mb-0", "mt-1 flex-1 items-center px-4 py-6 text-center")}><span role="img" aria-label={`${r.name}, ${r.online ? "online" : "offline"}`} className={n("relative inline-flex size-8 shrink-0 overflow-hidden rounded-full select-none", "size-14")}><span aria-hidden="true" className="flex size-full items-center justify-center rounded-[inherit] bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_24%,white)] text-[12px]/[16px] font-extrabold tabular-nums text-neutral-900 dark:text-neutral-100 dark:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_22%,var(--color-neutral-900))]">{r.initials}</span></span><p className={n("text-[15px]/[20px] font-bold", i, "mt-3 w-full truncate")}>{r.name}</p><p className={n("text-[13px]/[16px] font-semibold tabular-nums", "text-neutral-900/62 dark:text-neutral-100/62", "mt-0.5 flex w-full min-w-0 justify-center gap-2")}><span className="truncate">{r.role}</span><span className="shrink-0">{r.location}</span></p><p className={n("text-[14px]/[20px] font-medium", "text-neutral-900/78 dark:text-neutral-100/78", "mt-3")}>{r.bio}</p></div><button type="button" aria-pressed={t} onClick={() => {
                let e;
                return e = r.id, a(a => {
                  let r = new Set(a);
                  return r.has(e) ? r.delete(e) : r.add(e), r;
                });
              }} className={n(t ? "relative inline-flex h-8 max-w-full min-w-0 shrink-0 cursor-pointer items-center gap-1.5 whitespace-nowrap rounded-[calc(var(--rb-r-full,999px))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] px-3.5 text-[14px]/[18px] font-bold text-neutral-900 dark:text-neutral-100 select-none transition-[background-color,border-color,box-shadow,color,scale,translate,outline-color] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:translate-y-px active:duration-[90ms] motion-reduce:active:translate-y-0 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] aria-pressed:bg-none aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-pressed:shadow-[inset_0_0_0_1.5px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14)] disabled:cursor-not-allowed disabled:text-neutral-900/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-pressed:shadow-[inset_0_0_0_1.5px_var(--rb-accent,oklch(81%_0.16_163))] dark:aria-expanded:bg-neutral-800 dark:disabled:text-neutral-100/40" : "relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_68%,white),var(--rb-accent,oklch(84%_0.15_165)))] text-[var(--rb-accent-fg,oklch(26%_0.06_168))] shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_4px_10px_-4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_80%,transparent)] hover:not-disabled:-translate-y-px hover:not-disabled:brightness-[1.04] hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_7px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_85%,transparent)] active:not-disabled:translate-y-px active:not-disabled:brightness-[0.98] active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_55%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] motion-reduce:hover:translate-y-0 disabled:opacity-45 disabled:shadow-none dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_78%,white),var(--rb-accent,oklch(81%_0.16_163)))] dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_6px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,transparent)] dark:hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_9px_22px_-8px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_60%,transparent)] dark:active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_45%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black)] dark:disabled:shadow-none", "h-10 gap-2 rounded-[calc(var(--rb-r-full,999px))] px-5 text-[15px]/[20px] font-bold", "m-1 justify-center")}>{t ? "Connected" : "Connect"}<span className="sr-only"> with {r.name}</span></button></li>;
          })}</ul></div>;
    },
    "card-2": function () {
      let [e, a] = (0, React.useState)(() => new Set(["repos", "chat", "calendar"]));
      return <div className={u("bg-white dark:bg-neutral-950", h, "h-full min-h-[600px] w-full overflow-y-auto p-6 sm:p-8")}><ul className="grid grid-cols-1 gap-3">{k.map(r => {
            let t = e.has(r.id);
            return <li className={u("relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] text-neutral-900 dark:text-neutral-100 shadow-[0_0_0_1px_rgb(84_62_32/0.07),0_1px_2px_rgb(84_62_32/0.06),0_8px_22px_-10px_rgb(84_62_32/0.20)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_0_0_1px_rgb(0_0_0/0.6),0_10px_24px_-12px_rgb(0_0_0/0.8)]", "h-full flex-row items-center gap-3 p-4")}><span aria-hidden="true" className={u("flex size-9 shrink-0 items-center justify-center text-neutral-900/78 dark:text-neutral-100/78", "size-[36px]")}><__mod_22728.n icon={r.icon} size={18} strokeWidth={2} /></span><div className="min-w-0 flex-1"><p className={u("text-[15px]/[20px] font-bold", h, "flex items-center gap-2")}><span className="min-w-0 truncate">{r.name}</span>{r.premium && <span className={u("inline-flex h-5.5 min-w-5.5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden whitespace-nowrap rounded-[calc(var(--rb-r-full,999px))] px-2.5 text-[12px]/[16px] font-bold tabular-nums", "bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] text-neutral-900 dark:text-neutral-100 dark:bg-neutral-100/12")}>Premium</span>}</p><p className={u("text-[14px]/[20px] font-medium", "text-neutral-900/78 dark:text-neutral-100/78", "mt-0.5 truncate")}>{r.blurb}</p></div><button type="button" role="switch" aria-checked={t} aria-label={`Connect ${r.name}`} onClick={() => {
                let e;
                return e = r.id, a(a => {
                  let r = new Set(a);
                  return r.has(e) ? r.delete(e) : r.add(e), r;
                });
              }} className="group relative inline-flex h-6 w-10 shrink-0 cursor-pointer items-center rounded-full bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] p-0.5 shadow-[inset_0_1px_2px_rgb(84_62_32/0.14),inset_0_0_0_1px_rgb(84_62_32/0.05)] transition-[background-color,box-shadow,outline-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:aria-[checked=false]:not-disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_94%,black)] aria-checked:bg-[var(--rb-accent,oklch(84%_0.15_165))] aria-checked:shadow-[inset_0_1px_2px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_55%,black),inset_0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_75%,black)] disabled:cursor-not-allowed disabled:opacity-45 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:bg-neutral-100/16 dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6)] dark:hover:aria-[checked=false]:not-disabled:bg-neutral-100/24 dark:aria-checked:bg-[var(--rb-accent,oklch(81%_0.16_163))] dark:aria-checked:shadow-[inset_0_1px_2px_rgb(0_0_0/0.35)]"><span aria-hidden="true" className="pointer-events-none block h-5 w-5 rounded-full bg-white shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_2px_rgb(84_62_32/0.10),0_3px_8px_-2px_rgb(84_62_32/0.20)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.12),0_0_0_1px_rgb(0_0_0/0.6),0_2px_6px_-1px_rgb(0_0_0/0.6)] transition-[translate,width] duration-[280ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] motion-reduce:transition-none group-active:w-6 group-aria-checked:translate-x-4 group-aria-checked:group-active:translate-x-3 group-disabled:shadow-none dark:bg-white" /></button></li>;
          })}</ul></div>;
    },
    "card-3": function () {
      let [e, a] = (0, React.useState)(() => new Set(["connect"]));
      return <div className={v("bg-white dark:bg-neutral-950", g, "flex h-full min-h-[480px] w-full flex-col overflow-y-auto p-6 sm:p-8")}><div className="flex h-9 shrink-0 items-center gap-3"><p className={v(w, f, "min-w-0 flex-1 truncate tabular-nums")}><span className={g}>{e.size} of {y.length}</span> steps complete</p><button type="button" disabled={0 === e.size} onClick={() => a(new Set())} className={v("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] text-neutral-900 dark:text-neutral-100 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] active:not-disabled:translate-y-px active:not-disabled:shadow-[inset_0_1px_3px_rgb(84_62_32/0.16),0_0_0_1px_rgb(84_62_32/0.10)] dark:active:not-disabled:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14),0_0_0_1px_rgb(84_62_32/0.10)] dark:aria-expanded:bg-neutral-800 dark:aria-expanded:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] disabled:bg-none disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] disabled:text-neutral-900/40 disabled:shadow-none dark:disabled:bg-neutral-800/60 dark:disabled:text-neutral-100/40", j)}>Reset</button></div><ul className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">{y.map(r => {
            let t = e.has(r.id);
            return <li className={v("relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 shadow-[inset_0_0_0_1px_rgb(84_62_32/0.05)] dark:shadow-[inset_0_0_0_1px_rgb(255_255_255/0.05)]", "min-h-[280px]")}><div className={v("mx-1 mb-1 flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-5xl,22px))] border border-transparent bg-white dark:bg-neutral-950 shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] [&:has(+*)]:mb-0", "mt-1 flex-1 p-4")}><p className={v(w, "text-neutral-900/62 dark:text-neutral-100/62", "tabular-nums")}>{r.index}</p><p className={v("text-[15px]/[20px] font-bold", g, "mt-auto pt-8")}>{r.title}</p><p className={v(w, f, "mt-1.5")}>{r.blurb}</p></div><button type="button" aria-pressed={t} onClick={() => {
                let e;
                return e = r.id, a(a => {
                  let r = new Set(a);
                  return r.has(e) ? r.delete(e) : r.add(e), r;
                });
              }} className={v(t ? "relative inline-flex h-8 max-w-full min-w-0 shrink-0 cursor-pointer items-center gap-1.5 whitespace-nowrap rounded-[calc(var(--rb-r-full,999px))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] px-3.5 text-[14px]/[18px] font-bold text-neutral-900 dark:text-neutral-100 select-none transition-[background-color,border-color,box-shadow,color,scale,translate,outline-color] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:translate-y-px active:duration-[90ms] motion-reduce:active:translate-y-0 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] aria-pressed:bg-none aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-pressed:shadow-[inset_0_0_0_1.5px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14)] disabled:cursor-not-allowed disabled:text-neutral-900/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-pressed:shadow-[inset_0_0_0_1.5px_var(--rb-accent,oklch(81%_0.16_163))] dark:aria-expanded:bg-neutral-800 dark:disabled:text-neutral-100/40" : "relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_68%,white),var(--rb-accent,oklch(84%_0.15_165)))] text-[var(--rb-accent-fg,oklch(26%_0.06_168))] shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_4px_10px_-4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_80%,transparent)] hover:not-disabled:-translate-y-px hover:not-disabled:brightness-[1.04] hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_7px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_85%,transparent)] active:not-disabled:translate-y-px active:not-disabled:brightness-[0.98] active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_55%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] motion-reduce:hover:translate-y-0 disabled:opacity-45 disabled:shadow-none dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_78%,white),var(--rb-accent,oklch(81%_0.16_163)))] dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_6px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,transparent)] dark:hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_9px_22px_-8px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_60%,transparent)] dark:active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_45%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black)] dark:disabled:shadow-none", j, "m-1 justify-center")}>{t && <__mod_22728.n icon={__mod_90987.A} size={18} strokeWidth={2} aria-hidden="true" />}{t ? "Completed" : "Mark complete"}<span className="sr-only">: {r.title}</span></button></li>;
          })}</ul></div>;
    },
    "card-4": function () {
      let [e, a] = (0, React.useState)({
          roadmap: "going"
        }),
        r = (e, r) => a(a => ({
          ...a,
          [e]: a[e] === r ? null : r
        }));
      return <div className={S("bg-white dark:bg-neutral-950", A, "h-full min-h-[560px] w-full overflow-y-auto p-6 sm:p-8")}><ul className="grid grid-cols-1 gap-4 xl:grid-cols-2">{M.map(a => {
            let t = e[a.id] ?? null,
              n = "going" === t;
            return <li className={S("relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 shadow-[inset_0_0_0_1px_rgb(84_62_32/0.05)] dark:shadow-[inset_0_0_0_1px_rgb(255_255_255/0.05)]", "grid grid-cols-[auto_1fr]")}><div className="row-span-2 flex w-16 flex-col items-center justify-center"><span className={S("text-[22px]/[28px] font-extrabold tracking-[-0.01em]", A, "tabular-nums")}>{a.day}</span><span className={S(B, C, "mt-1")}>{a.weekday}</span></div><div className={S("mx-1 mb-1 flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-5xl,22px))] border border-transparent bg-white dark:bg-neutral-950 shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] [&:has(+*)]:mb-0", "mt-1 px-4 py-3")}><p className={S("text-[15px]/[20px] font-bold", A, "truncate")}>{a.title}</p><p className={S(B, C, "mt-1 flex flex-wrap items-center gap-x-3 gap-y-1")}><span className="tabular-nums">{a.window}</span><span className="inline-flex items-center gap-1.5"><__mod_22728.n icon={__mod_87924.A} size={16} strokeWidth={2} aria-hidden="true" className="shrink-0" />{a.place}</span><span className="inline-flex items-center gap-1.5 tabular-nums"><__mod_22728.n icon={__mod_88366.A} size={16} strokeWidth={2} aria-hidden="true" className="shrink-0" />{a.invited}</span></p></div><div className="mx-1 mt-1 mb-1 flex gap-1"><button type="button" aria-pressed={n} onClick={() => r(a.id, "going")} className={S(n ? "relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_68%,white),var(--rb-accent,oklch(84%_0.15_165)))] text-[var(--rb-accent-fg,oklch(26%_0.06_168))] shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_4px_10px_-4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_80%,transparent)] hover:not-disabled:-translate-y-px hover:not-disabled:brightness-[1.04] hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_7px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_85%,transparent)] active:not-disabled:translate-y-px active:not-disabled:brightness-[0.98] active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_55%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] motion-reduce:hover:translate-y-0 disabled:opacity-45 disabled:shadow-none dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_78%,white),var(--rb-accent,oklch(81%_0.16_163)))] dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_6px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,transparent)] dark:hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_9px_22px_-8px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_60%,transparent)] dark:active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_45%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black)] dark:disabled:shadow-none" : T, D, "flex-1 justify-center")}>Going<span className="sr-only"> to {a.title}</span></button><button type="button" aria-pressed={"declined" === t} onClick={() => r(a.id, "declined")} className={S(T, D, "flex-1 justify-center")}>Decline<span className="sr-only"> {a.title}</span></button></div></li>;
          })}</ul></div>;
    },
    "card-5": function () {
      let [e, a] = (0, React.useState)("team");
      return <div className={W("bg-white dark:bg-neutral-950", $, "h-full min-h-[560px] w-full overflow-y-auto p-6 sm:p-8")}><ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">{O.map(r => {
            let t = r.id === e;
            return <li className="relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 shadow-[inset_0_0_0_1px_rgb(84_62_32/0.05)] dark:shadow-[inset_0_0_0_1px_rgb(255_255_255/0.05)]"><div className={W("mx-1 mb-1 flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-5xl,22px))] border border-transparent bg-white dark:bg-neutral-950 shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] [&:has(+*)]:mb-0", F, "mt-1 flex-1")}><div className="px-4 py-4"><p className="flex items-center gap-2"><span className={W("text-[15px]/[20px] font-bold", $, "min-w-0 flex-1 truncate")}>{r.name}</span>{r.recommended && <span className={W("inline-flex h-5.5 min-w-5.5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden whitespace-nowrap rounded-[calc(var(--rb-r-full,999px))] px-2.5 text-[12px]/[16px] font-bold tabular-nums", "bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] text-neutral-900 dark:text-neutral-100 dark:bg-neutral-100/12")}>Recommended</span>}</p><p className="mt-3 flex items-baseline gap-1.5"><span className={W("text-[22px]/[28px] font-extrabold tracking-[-0.01em]", $, "tabular-nums")}>{r.price}</span><span className={W("text-[13px]/[16px] font-semibold tabular-nums", "text-neutral-900/62 dark:text-neutral-100/62", "min-w-0 truncate")}>{r.cadence}</span></p><p className={W(I, P, "mt-2")}>{r.blurb}</p></div><dl className={W(F, "flex-1 px-4 py-1")}>{r.specs.map(e => <div className="flex items-center justify-between gap-3 py-2.5"><dt className={W("min-w-0 text-[15px]/[20px] font-bold text-neutral-900/62 dark:text-neutral-100/62", "truncate")}>{e.label}</dt><dd className={W("flex min-w-0 flex-wrap items-center gap-2 text-[15px]/[22px] font-medium text-neutral-900 dark:text-neutral-100 [overflow-wrap:anywhere]", "shrink-0 truncate tabular-nums")}>{e.value}</dd></div>)}</dl><ul className="space-y-2 px-4 py-3">{r.includes.map(e => <li className={W(I, P, "flex items-start gap-2")}><__mod_22728.n icon={__mod_90987.A} size={16} strokeWidth={2} aria-hidden="true" className={W($, "mt-0.5 shrink-0")} /><span className="min-w-0">{e}</span></li>)}</ul></div><button type="button" aria-pressed={t} onClick={() => a(r.id)} className={W(t ? "relative inline-flex h-8 max-w-full min-w-0 shrink-0 cursor-pointer items-center gap-1.5 whitespace-nowrap rounded-[calc(var(--rb-r-full,999px))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] px-3.5 text-[14px]/[18px] font-bold text-neutral-900 dark:text-neutral-100 select-none transition-[background-color,border-color,box-shadow,color,scale,translate,outline-color] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:translate-y-px active:duration-[90ms] motion-reduce:active:translate-y-0 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] aria-pressed:bg-none aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-pressed:shadow-[inset_0_0_0_1.5px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14)] disabled:cursor-not-allowed disabled:text-neutral-900/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-pressed:shadow-[inset_0_0_0_1.5px_var(--rb-accent,oklch(81%_0.16_163))] dark:aria-expanded:bg-neutral-800 dark:disabled:text-neutral-100/40" : "relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_68%,white),var(--rb-accent,oklch(84%_0.15_165)))] text-[var(--rb-accent-fg,oklch(26%_0.06_168))] shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_4px_10px_-4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_80%,transparent)] hover:not-disabled:-translate-y-px hover:not-disabled:brightness-[1.04] hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_7px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_85%,transparent)] active:not-disabled:translate-y-px active:not-disabled:brightness-[0.98] active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_55%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] motion-reduce:hover:translate-y-0 disabled:opacity-45 disabled:shadow-none dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_78%,white),var(--rb-accent,oklch(81%_0.16_163)))] dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_6px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,transparent)] dark:hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_9px_22px_-8px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_60%,transparent)] dark:active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_45%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black)] dark:disabled:shadow-none", "h-10 gap-2 rounded-[calc(var(--rb-r-full,999px))] px-5 text-[15px]/[20px] font-bold", "m-1 justify-center")}>{t ? "Current plan" : `Choose ${r.name}`}{!t && <__mod_22728.n icon={__mod_1497.A} size={18} strokeWidth={2} aria-hidden="true" />}</button></li>;
          })}</ul></div>;
    },
    "card-6": function () {
      let [e, a] = (0, React.useState)("30d"),
        r = (0, React.useMemo)(() => Y.reduce((a, r) => a + r.values[e].delta, 0).toFixed(1), [e]);
      return <div className={K("bg-white dark:bg-neutral-950", L, "flex h-full min-h-[480px] w-full flex-col justify-center-safe overflow-y-auto p-6 sm:p-8")}><div className="flex h-9 shrink-0 items-center gap-3"><p className={K("text-[15px]/[20px] font-bold", L, "min-w-0 flex-1 truncate")}>Accounts overview</p><div role="radiogroup" aria-label="Date range" className={K("inline-flex w-fit max-w-full items-stretch gap-1 rounded-[calc(var(--rb-r-full,999px)_+_min(4px,var(--rb-r-full,999px)))] bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] p-1", "h-10", "shrink-0")}>{q.map(r => <button type="button" role="radio" aria-checked={r === e} onClick={() => a(r)} className="relative inline-flex min-w-0 cursor-pointer items-center justify-center gap-1.5 whitespace-nowrap [&_svg]:shrink-0 rounded-[calc(var(--rb-r-full,999px))] px-4 text-[14px]/[18px] font-bold text-neutral-900/78 dark:text-neutral-100/78 select-none transition-[background-color,color,box-shadow,outline-color,scale] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:scale-[0.96] motion-reduce:active:scale-100 hover:not-aria-checked:text-neutral-900 aria-checked:bg-white aria-checked:text-neutral-900 aria-checked:shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_2px_rgb(84_62_32/0.10),0_3px_8px_-2px_rgb(84_62_32/0.20)] disabled:cursor-not-allowed disabled:text-neutral-900/40 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:hover:not-aria-checked:text-neutral-100 dark:aria-checked:bg-[color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800))] dark:aria-checked:text-neutral-100 dark:aria-checked:shadow-[inset_0_1px_0_rgb(255_255_255/0.1),0_0_0_1px_rgb(0_0_0/0.6),0_2px_5px_-1px_rgb(0_0_0/0.6)] dark:disabled:text-neutral-100/40">{r}</button>)}</div></div><div className={K("@container rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.07),0_1px_2px_rgb(84_62_32/0.06),0_8px_22px_-10px_rgb(84_62_32/0.20)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_0_0_1px_rgb(0_0_0/0.6),0_10px_24px_-12px_rgb(0_0_0/0.8)] p-1", "mt-4 shrink-0")}><div className="grid grid-cols-2 gap-1 [&>:last-child:nth-child(odd)]:col-span-full @3xl:grid-flow-col @3xl:grid-cols-none @3xl:auto-cols-fr @3xl:[&>:last-child:nth-child(odd)]:col-auto">{Y.map(a => {
              let r = a.values[e],
                t = r.delta >= 0,
                n = Math.max(...r.series);
              return <div className="flex min-w-0 flex-col gap-2 rounded-[calc(var(--rb-r-5xl,22px))] bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] px-3 py-3.5 dark:bg-neutral-100/4"><p className={K("text-[14px]/[20px] font-bold text-neutral-900/78 dark:text-neutral-100/78", "flex items-start gap-2")}><span className="flex h-lh shrink-0 items-center"><__mod_22728.n icon={a.icon} size={18} strokeWidth={2} aria-hidden="true" /></span><span className="min-w-0 text-pretty">{a.label}</span></p><p className={K("flex min-w-0 flex-wrap items-baseline gap-x-1 text-[22px]/[28px] font-extrabold tracking-[-0.01em] tabular-nums text-neutral-900 dark:text-neutral-100", "mt-auto")}>{r.value}</p><p className="inline-flex min-w-0 flex-wrap items-baseline gap-x-1 text-[13px]/[18px] font-bold tabular-nums [&>svg]:self-center text-neutral-900/78 dark:text-neutral-100/78"><__mod_22728.n icon={t ? __mod_1497.A : __mod_37502.A} size={14} strokeWidth={2} aria-hidden="true" className="shrink-0" /><span className="sr-only">{t ? "Up" : "Down"}</span>{t ? "+" : ""}{r.delta}%<span className="text-neutral-900/62 dark:text-neutral-100/62">vs previous {e}</span></p><div aria-hidden="true" className="mt-1 flex h-10 items-end gap-1">{r.series.map((e, a) => <span style={{
                    height: `${Math.round(e / n * 100)}%`
                  }} className={K(a === r.series.length - 1 ? "block h-full rounded-[calc(var(--rb-r-full,999px))] bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_82%,black)] shadow-[inset_0_1px_0_rgb(255_255_255/0.35)] transition-[width] duration-[420ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] motion-reduce:transition-none dark:bg-[var(--rb-accent,oklch(81%_0.16_163))]" : "relative block h-2.5 w-full overflow-hidden rounded-[calc(var(--rb-r-full,999px))] bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] shadow-[inset_0_1px_2px_rgb(84_62_32/0.12)] dark:bg-neutral-100/12 dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.5)]", "rounded-[var(--rb-r-sm,6px)]", "min-h-[2px] flex-1")} />)}</div></div>;
            })}</div></div><p className={K("text-[14px]/[20px] font-medium", "text-neutral-900/78 dark:text-neutral-100/78", "mt-3 shrink-0 tabular-nums")}>Net movement across all four accounts over the last {e}: {r}%.</p></div>;
    },
    "card-7": function () {
      let [e, a] = (0, React.useState)(() => new Set(["2-8"]));
      return <div className={J("bg-white dark:bg-neutral-950", Q, "h-full min-h-[600px] w-full overflow-y-auto p-6 sm:p-8")}><ul className="grid grid-cols-1 gap-4 lg:grid-cols-2">{ea.map(r => {
            let t = e.has(r.id);
            return <li className={J("relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] text-neutral-900 dark:text-neutral-100 shadow-[0_0_0_1px_rgb(84_62_32/0.07),0_1px_2px_rgb(84_62_32/0.06),0_8px_22px_-10px_rgb(84_62_32/0.20)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_0_0_1px_rgb(0_0_0/0.6),0_10px_24px_-12px_rgb(0_0_0/0.8)]", "h-full p-5")}><div className="flex items-center justify-between gap-3"><p className={J(ee, Z, "flex gap-2")}><span>{r.version}</span><span>{r.date}</span></p><button type="button" aria-pressed={t} onClick={() => {
                  let e;
                  return e = r.id, a(a => {
                    let r = new Set(a);
                    return r.has(e) ? r.delete(e) : r.add(e), r;
                  });
                }} className={J("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-transparent text-neutral-900 hover:not-disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] active:not-disabled:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] disabled:text-neutral-900/40 dark:text-neutral-100 dark:hover:not-disabled:bg-neutral-100/8 dark:active:not-disabled:bg-neutral-100/12 dark:aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:disabled:text-neutral-100/40", "size-8 rounded-[calc(var(--rb-r-full,999px))]", "relative z-10 -mr-1 -mt-1")}><__mod_22728.n icon={__mod_2139.A} size={18} strokeWidth={2} aria-hidden="true" className={J(t && "[&_path]:fill-current")} /><span className="sr-only">{t ? "Remove bookmark from" : "Bookmark"} {r.title}</span></button></div><h3 className={J("text-[17px]/[22px] font-extrabold", Q, "mt-2")}><a href="#" className={J("min-w-0 truncate outline-none after:absolute after:inset-0 after:rounded-[calc(var(--rb-r-lg,10px))] after:content-[''] focus-visible:after:outline-2 focus-visible:after:-outline-offset-2 focus-visible:after:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:after:outline-[var(--rb-accent,oklch(81%_0.16_163))]", "whitespace-normal")}>{r.title}</a></h3><p className={J("text-[14px]/[20px] font-medium", X, "mt-2 line-clamp-2")}>{r.excerpt}</p><div className="mt-4 flex items-center gap-2 pt-1"><span aria-hidden="true" className={J("relative inline-flex size-8 shrink-0 overflow-hidden rounded-full select-none", "size-[24px]")}><span className="flex size-full items-center justify-center rounded-[inherit] bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_24%,white)] text-[12px]/[16px] font-extrabold tabular-nums text-neutral-900 dark:text-neutral-100 dark:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_22%,var(--color-neutral-900))]">{r.initials.charAt(0)}</span></span><p className={J(ee, X, "min-w-0 truncate")}>{r.author}</p><p className={J(ee, Z, "shrink-0")}>{r.readTime}</p></div></li>;
          })}</ul></div>;
    },
    "card-8": function () {
      let [e, a] = (0, React.useState)(() => new Set(["a1"])),
        r = e.size;
      return <div className={es("bg-white dark:bg-neutral-950", ec, "flex h-full min-h-[560px] w-full flex-col overflow-y-auto p-6 sm:p-8")}><div className="flex h-9 shrink-0 items-center gap-2"><p className={es("text-[14px]/[20px] font-medium", "text-neutral-900/78 dark:text-neutral-100/78", "min-w-0 flex-1 truncate tabular-nums")}>{r > 0 ? <><span className={ec}>{r} selected</span> of {eu.length} files</> : <>{eu.length} files</>}</p><button type="button" disabled={0 === r} onClick={() => a(new Set())} className={es("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] text-neutral-900 dark:text-neutral-100 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] active:not-disabled:translate-y-px active:not-disabled:shadow-[inset_0_1px_3px_rgb(84_62_32/0.16),0_0_0_1px_rgb(84_62_32/0.10)] dark:active:not-disabled:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14),0_0_0_1px_rgb(84_62_32/0.10)] dark:aria-expanded:bg-neutral-800 dark:aria-expanded:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] disabled:bg-none disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] disabled:text-neutral-900/40 disabled:shadow-none dark:disabled:bg-neutral-800/60 dark:disabled:text-neutral-100/40", ep)}>Clear</button><button type="button" disabled={0 === r} className={es(ex, ep)}><__mod_22728.n icon={__mod_92752.A} size={18} strokeWidth={2} aria-hidden="true" />Download</button></div><ul className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">{eu.map(r => {
            let t = e.has(r.id);
            return <li className="flex"><button type="button" aria-pressed={t} onClick={() => {
                let e;
                return e = r.id, a(a => {
                  let r = new Set(a);
                  return r.has(e) ? r.delete(e) : r.add(e), r;
                });
              }} className={es("relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 shadow-[inset_0_0_0_1px_rgb(84_62_32/0.05)] dark:shadow-[inset_0_0_0_1px_rgb(255_255_255/0.05)]", "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))]", "w-full cursor-pointer text-left")}><span className={es("mx-1 mb-1 flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-5xl,22px))] border border-transparent bg-white dark:bg-neutral-950 shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] [&:has(+*)]:mb-0", "divide-y divide-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:divide-neutral-100/7", "mt-1 flex-1")}><span className="relative flex h-24 items-center justify-center"><__mod_22728.n icon={r.icon} size={28} strokeWidth={2} aria-hidden="true" className={ed} /><span aria-hidden="true" className="absolute right-2 top-2">{t ? <span className={es(ex, "rounded-[var(--rb-r-sm,6px)]", "size-[20px]")}><__mod_22728.n icon={__mod_90987.A} size={14} strokeWidth={2.5} /></span> : <span className={es("peer size-[18px] shrink-0 cursor-pointer appearance-none rounded-[calc(var(--rb-r-sm,6px))] border-2 border-neutral-900/28 bg-white transition-[background-color,border-color,box-shadow,outline-color,scale] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:scale-[0.86] motion-reduce:active:scale-100 hover:not-checked:not-disabled:border-neutral-900/60 active:not-checked:bg-neutral-900/8 checked:border-transparent checked:bg-[var(--rb-accent,oklch(84%_0.15_165))] indeterminate:border-transparent indeterminate:bg-[var(--rb-accent,oklch(84%_0.15_165))] checked:shadow-[inset_0_1px_0_rgb(255_255_255/0.4),inset_0_-1.5px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] indeterminate:shadow-[inset_0_1px_0_rgb(255_255_255/0.4),inset_0_-1.5px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] aria-invalid:border-[oklch(60%_0.236_26)] disabled:cursor-not-allowed disabled:border-neutral-900/20 disabled:checked:bg-neutral-900/25 disabled:checked:shadow-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:border-neutral-100/34 dark:bg-neutral-900 dark:hover:not-checked:not-disabled:border-neutral-100/70 dark:active:not-checked:bg-neutral-100/10 dark:checked:bg-[var(--rb-accent,oklch(81%_0.16_163))] dark:indeterminate:bg-[var(--rb-accent,oklch(81%_0.16_163))] dark:checked:shadow-none dark:indeterminate:shadow-none dark:aria-invalid:border-[oklch(65.2%_0.219_26)] dark:disabled:border-neutral-100/24 dark:disabled:checked:bg-neutral-100/28", "block size-[20px]")} />}</span></span><span className="flex min-w-0 flex-1 flex-col p-3"><span className={es("text-[15px]/[20px] font-bold", ec, "truncate")}>{r.name}</span><span className={es(eb, ed, "mt-0.5 flex min-w-0 gap-2")}><span className="truncate">{r.kind}</span><span className="shrink-0 tabular-nums">{r.size}</span></span><span className={es(eb, ed, "mt-2 truncate")}>Edited {r.updated}</span></span></span></button></li>;
          })}</ul></div>;
    },
    "card-9": function () {
      let [e, a] = (0, React.useState)(!1);
      return <div className={ek("bg-white dark:bg-neutral-950", em, "relative flex h-full min-h-[480px] w-full items-center justify-center overflow-hidden p-8 sm:p-10")}><article className={ek("relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 shadow-[inset_0_0_0_1px_rgb(84_62_32/0.05)] dark:shadow-[inset_0_0_0_1px_rgb(255_255_255/0.05)]", "w-full max-w-[380px]")}><div className={ek("mx-1 mb-1 flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-5xl,22px))] border border-transparent bg-white dark:bg-neutral-950 shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] [&:has(+*)]:mb-0", "divide-y divide-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:divide-neutral-100/7", "mt-1")}><div className="p-4"><div className="flex items-start gap-3"><span aria-hidden="true" className={ek("relative inline-flex size-8 shrink-0 overflow-hidden rounded-full select-none", "size-12")}><span className="flex size-full items-center justify-center rounded-[inherit] bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_24%,white)] text-[12px]/[16px] font-extrabold tabular-nums text-neutral-900 dark:text-neutral-100 dark:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_22%,var(--color-neutral-900))]">SR</span></span><div className="min-w-0 flex-1"><h2 className={ek(ef, em, "flex items-center gap-1")}><span className="min-w-0 truncate">Sam Rivera</span><__mod_22728.n icon={__mod_39519.A} size={18} strokeWidth={2} role="img" aria-label="Verified account" className={ek(eg, "shrink-0")} /></h2><p className={ek(ew, ev, "mt-0.5 truncate")}>Product designer at Meridian</p><p className={ek(ej, eg, "mt-1.5 flex items-center gap-1.5")}><__mod_22728.n icon={__mod_87924.A} size={16} strokeWidth={2} aria-hidden="true" className="shrink-0" />Lisbon, Portugal</p></div></div><p className={ek(ew, ev, "mt-4")}>Works on the payments surface. Currently rewriting the checkout flow and writing about it as it happens.</p><ul className="mt-4 flex flex-wrap gap-1.5">{ez.map(e => <li className={ek("inline-flex h-5.5 min-w-5.5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden whitespace-nowrap rounded-[calc(var(--rb-r-full,999px))] px-2.5 text-[12px]/[16px] font-bold tabular-nums", "bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] text-neutral-900 dark:text-neutral-100 dark:bg-neutral-100/12")}>{e}</li>)}</ul></div><div className="grid grid-cols-3">{eN.map((e, a) => <div className={ek(a < eN.length - 1 && "border-r border-transparent", "px-3 py-3 text-center")}><p className={ek(ef, em, "tabular-nums")}>{e.value}</p><p className={ek(ej, eg, "mt-0.5 truncate")}>{e.label}</p></div>)}</div><div className="px-4 py-3"><div className="grid grid-cols-3 gap-2"><button type="button" aria-pressed={e} onClick={() => a(e => !e)} className={ek("relative inline-flex h-8 max-w-full min-w-0 shrink-0 cursor-pointer items-center gap-1.5 whitespace-nowrap rounded-[calc(var(--rb-r-full,999px))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] px-3.5 text-[14px]/[18px] font-bold text-neutral-900 dark:text-neutral-100 select-none transition-[background-color,border-color,box-shadow,color,scale,translate,outline-color] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:translate-y-px active:duration-[90ms] motion-reduce:active:translate-y-0 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] aria-pressed:bg-none aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-pressed:shadow-[inset_0_0_0_1.5px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14)] disabled:cursor-not-allowed disabled:text-neutral-900/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-pressed:shadow-[inset_0_0_0_1.5px_var(--rb-accent,oklch(81%_0.16_163))] dark:aria-expanded:bg-neutral-800 dark:disabled:text-neutral-100/40", ey, "col-span-2 w-full justify-center")}>{e ? "Following" : "Follow"}<span className="sr-only"> Sam Rivera</span></button><a href="#" className={ek("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] text-neutral-900 dark:text-neutral-100 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] active:not-disabled:translate-y-px active:not-disabled:shadow-[inset_0_1px_3px_rgb(84_62_32/0.16),0_0_0_1px_rgb(84_62_32/0.10)] dark:active:not-disabled:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14),0_0_0_1px_rgb(84_62_32/0.10)] dark:aria-expanded:bg-neutral-800 dark:aria-expanded:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] disabled:bg-none disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] disabled:text-neutral-900/40 disabled:shadow-none dark:disabled:bg-neutral-800/60 dark:disabled:text-neutral-100/40", ey, "w-full")}>Message</a></div></div></div></article></div>;
    },
    "card-10": function () {
      return <div className={eB("bg-white dark:bg-neutral-950", eD, "relative flex h-full min-h-[560px] w-full items-center justify-center overflow-hidden p-8 sm:p-10")}><section aria-labelledby="balance-heading" className={eB("relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 shadow-[inset_0_0_0_1px_rgb(84_62_32/0.05)] dark:shadow-[inset_0_0_0_1px_rgb(255_255_255/0.05)]", "w-full max-w-[400px]")}><div className={eB("mx-1 mb-1 flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-5xl,22px))] border border-transparent bg-white dark:bg-neutral-950 shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] [&:has(+*)]:mb-0", eM, "mt-1")}><div className="p-4"><h2 id="balance-heading" className="text-[14px]/[20px] font-bold text-neutral-900/78 dark:text-neutral-100/78">Available balance</h2><p className={eB("flex min-w-0 flex-wrap items-baseline gap-x-1 text-[22px]/[28px] font-extrabold tracking-[-0.01em] tabular-nums text-neutral-900 dark:text-neutral-100", "mt-1.5")}>$46,318.52</p><p className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1"><span className="inline-flex min-w-0 flex-wrap items-baseline gap-x-1 text-[13px]/[18px] font-bold tabular-nums [&>svg]:self-center text-neutral-900/78 dark:text-neutral-100/78"><__mod_22728.n icon={__mod_1497.A} size={14} strokeWidth={2} aria-hidden="true" className="shrink-0" /><span className="sr-only">Up</span>+3.1%<span className={eT}>against last month</span></span><span className={eB(eR, eT)}>Operating</span><span className={eB(eR, eT)}>USD</span></p></div><dl className="grid grid-cols-2">{eP.map((e, a) => <div className={eB(0 === a && "border-r border-transparent", "px-4 py-3")}><dt className={eB(eR, eT, "truncate")}>{e.label}</dt><dd className={eB("text-[15px]/[20px] font-bold", eD, "mt-0.5 truncate tabular-nums")}>{e.value}</dd></div>)}</dl><div className="px-4 py-1"><ul className={eM}>{eF.map(e => <li className={eB("relative flex min-h-12 w-full min-w-0 flex-wrap items-center gap-x-3 gap-y-1 py-2.5 text-left text-neutral-900 dark:text-neutral-100 transition-[background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] has-[[data-description]]:min-h-16", "py-3")}><span aria-hidden="true" className={eB("flex size-9 shrink-0 items-center justify-center text-neutral-900/78 dark:text-neutral-100/78", "size-[28px]")}><__mod_22728.n icon={e.incoming ? __mod_58553.A : __mod_1497.A} size={16} strokeWidth={2} /></span><div className="flex min-w-0 flex-1 flex-col gap-0.5"><p className="flex max-w-full min-w-0 items-baseline gap-2 text-[15px]/[20px] font-bold text-neutral-900 dark:text-neutral-100"><span className="truncate">{e.name}</span></p><p className={eB(eR, eT, "truncate")}>{e.when}</p></div><p className={eB("text-[15px]/[22px] font-medium", eD, "shrink-0 tabular-nums")}>{e.amount}</p></li>)}</ul></div><div className="px-4 py-3"><div className="grid grid-cols-2 gap-2"><button type="button" className={eB(eW, e$, "w-full")}><__mod_22728.n icon={__mod_89886.A} size={18} strokeWidth={2} aria-hidden="true" />Add money</button><button type="button" className={eB(eW, e$, "w-full")}><__mod_22728.n icon={__mod_55410.A} size={18} strokeWidth={2} aria-hidden="true" />Transfer</button></div></div></div></section></div>;
    },
    "card-11": function () {
      return <div className={eI("bg-white dark:bg-neutral-950", eO, "relative flex h-full min-h-[640px] w-full items-center justify-center overflow-hidden p-8 sm:p-10")}><article className={eI("relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 shadow-[inset_0_0_0_1px_rgb(84_62_32/0.05)] dark:shadow-[inset_0_0_0_1px_rgb(255_255_255/0.05)]", "w-full max-w-[400px]")}><div className={eI("mx-1 mb-1 flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-5xl,22px))] border border-transparent bg-white dark:bg-neutral-950 shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] [&:has(+*)]:mb-0", eH, "mt-1")}><div className="p-4"><div className="flex items-baseline justify-between gap-3"><h2 className={eI(eE, eO, "min-w-0 truncate tabular-nums")}>Invoice INV-2024-0318</h2><span className={eI("inline-flex items-start gap-1.5 text-[15px]/[20px] font-bold tabular-nums", "text-neutral-900/78 dark:text-neutral-100/78", "shrink-0")}>Paid</span></div><p className={eI(eL, eV, "mt-1 flex min-w-0 gap-2")}><span className="truncate">Meridian Fund</span><span className="shrink-0">Issued 18 March</span><span className="shrink-0">Due 1 April</span></p></div><div className="px-4 py-1"><ul className={eH}>{eq.map(e => <li className={eI("relative flex min-h-12 w-full min-w-0 flex-wrap items-center gap-x-3 gap-y-1 py-2.5 text-left text-neutral-900 dark:text-neutral-100 transition-[background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] has-[[data-description]]:min-h-16", "justify-between py-2.5")}><span className="flex min-w-0 flex-1 flex-col gap-0.5"><span className="flex max-w-full min-w-0 items-baseline gap-2 text-[15px]/[20px] font-bold text-neutral-900 dark:text-neutral-100"><span className="truncate">{e.label}</span></span><span data-description={!0} className={eI(eL, eV, "truncate tabular-nums")}>{e.detail}</span></span><span className={eI(eK, eU, "shrink-0 tabular-nums")}>{e.amount}</span></li>)}</ul></div><dl className="space-y-1.5 px-4 py-3">{eY.map(e => <div className="flex items-center justify-between gap-3"><dt className={eI(eK, eU)}>{e.label}</dt><dd className={eI(eK, eU, "tabular-nums")}>{e.value}</dd></div>)}<div className="flex items-baseline justify-between gap-3 pt-1.5"><dt className={eI("text-[15px]/[20px] font-bold", eO)}>Total due</dt><dd className={eI(eE, eO, "tabular-nums")}>$838.86</dd></div></dl><div className="px-4 py-3"><button type="button" className={eI("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] text-neutral-900 dark:text-neutral-100 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] active:not-disabled:translate-y-px active:not-disabled:shadow-[inset_0_1px_3px_rgb(84_62_32/0.16),0_0_0_1px_rgb(84_62_32/0.10)] dark:active:not-disabled:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14),0_0_0_1px_rgb(84_62_32/0.10)] dark:aria-expanded:bg-neutral-800 dark:aria-expanded:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] disabled:bg-none disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] disabled:text-neutral-900/40 disabled:shadow-none dark:disabled:bg-neutral-800/60 dark:disabled:text-neutral-100/40", "h-10 gap-2 rounded-[calc(var(--rb-r-full,999px))] px-5 text-[15px]/[20px] font-bold", "w-full")}><__mod_22728.n icon={__mod_92752.A} size={18} strokeWidth={2} aria-hidden="true" />Download PDF</button></div></div></article></div>;
    }
  },
  eJ = {
    "card-1": 620,
    "card-2": 600,
    "card-3": 480,
    "card-4": 560,
    "card-5": 560,
    "card-6": 480,
    "card-7": 600,
    "card-8": 560,
    "card-9": 480,
    "card-10": 560,
    "card-11": 640
  };

export { eG as components };
export { eJ as heights };

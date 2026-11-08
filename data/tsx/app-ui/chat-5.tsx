import * as __mod_22728 from "../_helpers/22728";
import * as __mod_66575 from "../_helpers/66575";
import * as __mod_4086 from "../_helpers/4086";
import * as __mod_89886 from "../_helpers/89886";
import * as __mod_90227 from "../_helpers/90227";
import * as __mod_88366 from "../_helpers/88366";
import * as __mod_48094 from "../_helpers/48094";
import * as __mod_49322 from "../_helpers/49322";
import * as __mod_55410 from "../_helpers/55410";
import * as __mod_17118 from "../_helpers/17118";
import * as __mod_89462 from "../_helpers/89462";
import * as __mod_54810 from "../_helpers/54810";
import * as __mod_90987 from "../_helpers/90987";
import * as __mod_22776 from "../_helpers/22776";
import * as __mod_36586 from "../_helpers/36586";
import * as __mod_43755 from "../_helpers/43755";
import * as __mod_47293 from "../_helpers/47293";
import * as __mod_71497 from "../_helpers/71497";
import * as __mod_20148 from "../_helpers/20148";
import * as __mod_47744 from "../_helpers/47744";
import * as __mod_31581 from "../_helpers/31581";
import * as __mod_12556 from "../_helpers/12556";
import * as __mod_92752 from "../_helpers/92752";
import * as __mod_31964 from "../_helpers/31964";
import * as __mod_13426 from "../_helpers/13426";
import * as __mod_36122 from "../_helpers/36122";
/**
 * Chat 5
 * slug: chat-5
 * category: chat
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let p = (...e) => e.filter(Boolean).join(" "),
  h = "text-neutral-900/62 dark:text-neutral-100/62",
  u = "text-[14px]/[20px] font-medium",
  m = "relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-transparent text-neutral-900 hover:not-disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] active:not-disabled:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] disabled:text-neutral-900/40 dark:text-neutral-100 dark:hover:not-disabled:bg-neutral-100/8 dark:active:not-disabled:bg-neutral-100/12 dark:aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:disabled:text-neutral-100/40",
  k = "size-8 rounded-[calc(var(--rb-r-full,999px))]",
  v = "flex h-10 w-full min-w-0 cursor-pointer items-center gap-2.5 rounded-[calc(var(--rb-r-full,999px))] px-3 text-left text-[15px]/[20px] font-semibold text-neutral-900/75 transition-[background-color,box-shadow,color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] [&_svg]:shrink-0 hover:bg-neutral-900/5 hover:text-neutral-900 aria-[current=page]:bg-white aria-[current=page]:font-bold aria-[current=page]:text-neutral-900 aria-[current=page]:shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:text-neutral-100/75 dark:hover:bg-neutral-100/6 dark:hover:text-neutral-100 dark:aria-[current=page]:bg-[color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800))] dark:aria-[current=page]:text-neutral-100 dark:aria-[current=page]:shadow-[inset_0_1px_0_rgb(255_255_255/0.08),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)]",
  f = p(u, h),
  g = p("text-[13px]/[16px] font-semibold tabular-nums", h),
  w = [{
    id: "general",
    name: "general",
    unread: 0
  }, {
    id: "launch",
    name: "launch-room",
    unread: 4
  }, {
    id: "design",
    name: "design-review",
    unread: 0
  }, {
    id: "support",
    name: "support-escalations",
    unread: 2
  }, {
    id: "random",
    name: "random",
    unread: 0
  }],
  j = [{
    id: "m1",
    author: "Amelia Whitfield",
    initials: "AW",
    at: "09:12",
    lines: ["Pushed the checkout revision to staging. The prorated line item now renders before tax."]
  }, {
    id: "m2",
    author: "Marcus Bell",
    initials: "MB",
    at: "09:18",
    lines: ["Confirmed on my side. One thing: the empty state still says “no invoices yet” after a filter clears everything.", "It should read as a filter result, not an onboarding state."]
  }, {
    id: "m3",
    author: "Sofia Alvarez",
    initials: "SA",
    at: "09:24",
    lines: ["Taking that one. I will split the copy so the filtered case has its own message and a reset action."]
  }, {
    id: "m4",
    author: "Amelia Whitfield",
    initials: "AW",
    at: "09:31",
    lines: ["Perfect. I will hold the release note until that lands so we ship one changelog entry instead of two."]
  }];
let W = (...e) => e.filter(Boolean).join(" "),
  R = "text-neutral-900 dark:text-neutral-100",
  M = "text-neutral-900/62 dark:text-neutral-100/62",
  C = "text-[15px]/[20px] font-bold",
  O = "relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-transparent text-neutral-900 hover:not-disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] active:not-disabled:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] disabled:text-neutral-900/40 dark:text-neutral-100 dark:hover:not-disabled:bg-neutral-100/8 dark:active:not-disabled:bg-neutral-100/12 dark:aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:disabled:text-neutral-100/40",
  T = "size-8 rounded-[calc(var(--rb-r-full,999px))]",
  D = "relative inline-flex size-8 shrink-0 overflow-hidden rounded-full select-none",
  P = "flex size-full items-center justify-center rounded-[inherit] bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_24%,white)] text-[12px]/[16px] font-extrabold tabular-nums text-neutral-900 dark:text-neutral-100 dark:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_22%,var(--color-neutral-900))]",
  H = W("text-[14px]/[20px] font-medium", M),
  E = W("text-[13px]/[16px] font-semibold tabular-nums", M),
  B = W("bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)]", "rounded-[var(--rb-r-6xl,26px)]", "text-[15px]/[22px] font-medium", R),
  L = [{
    id: "sofia",
    name: "Sofia Alvarez",
    initials: "SA",
    preview: "Sent the revised copy deck",
    at: "09:41",
    unread: 2,
    online: !0
  }, {
    id: "marcus",
    name: "Marcus Bell",
    initials: "MB",
    preview: "Works for me, let's ship it",
    at: "09:12",
    unread: 0,
    online: !0
  }, {
    id: "priya",
    name: "Priya Nandakumar",
    initials: "PN",
    preview: "Photo",
    at: "Yesterday",
    unread: 0,
    online: !1
  }, {
    id: "wei",
    name: "Wei Chen",
    initials: "WC",
    preview: "I'll pick this up Monday",
    at: "Yesterday",
    unread: 0,
    online: !1
  }, {
    id: "tomas",
    name: "Tom\xe1s Guerrero",
    initials: "TG",
    preview: "Thanks for the review",
    at: "Tue",
    unread: 0,
    online: !1
  }],
  I = [{
    id: "b1",
    me: !1,
    text: "Morning. The revised copy deck is in the shared folder, second tab has the shorter variants.",
    at: "09:28"
  }, {
    id: "b2",
    me: !0,
    text: "Got it. The shorter headline reads much better on mobile.",
    at: "09:31",
    read: !0
  }, {
    id: "b3",
    me: !0,
    text: "One ask: can the subhead drop the second clause? It wraps to three lines at 375.",
    at: "09:31",
    read: !0
  }, {
    id: "b4",
    me: !1,
    text: "Easy. I will trim it and re-export both light and dark.",
    at: "09:38"
  }, {
    id: "b5",
    me: !1,
    text: "Anything else before I lock the file?",
    at: "09:41"
  }];
let G = (...e) => e.filter(Boolean).join(" "),
  J = "text-neutral-900/78 dark:text-neutral-100/78",
  Y = "text-neutral-900/62 dark:text-neutral-100/62",
  K = "text-[14px]/[20px] font-medium",
  Q = "text-[15px]/[20px] font-bold",
  U = "relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] text-neutral-900 dark:text-neutral-100 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] active:not-disabled:translate-y-px active:not-disabled:shadow-[inset_0_1px_3px_rgb(84_62_32/0.16),0_0_0_1px_rgb(84_62_32/0.10)] dark:active:not-disabled:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14),0_0_0_1px_rgb(84_62_32/0.10)] dark:aria-expanded:bg-neutral-800 dark:aria-expanded:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] disabled:bg-none disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] disabled:text-neutral-900/40 disabled:shadow-none dark:disabled:bg-neutral-800/60 dark:disabled:text-neutral-100/40",
  X = "relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-transparent text-neutral-900 hover:not-disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] active:not-disabled:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] disabled:text-neutral-900/40 dark:text-neutral-100 dark:hover:not-disabled:bg-neutral-100/8 dark:active:not-disabled:bg-neutral-100/12 dark:aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:disabled:text-neutral-100/40",
  Z = "h-8 gap-1.5 rounded-[calc(var(--rb-r-full,999px))] px-3.5 text-[14px]/[18px] font-bold",
  ee = "mx-1 mb-1 flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-5xl,22px))] border border-transparent bg-white dark:bg-neutral-950 shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] [&:has(+*)]:mb-0",
  ea = G(K, Y),
  er = G("text-[13px]/[16px] font-semibold tabular-nums", Y),
  et = 24,
  en = 41,
  el = 318,
  ei = [{
    id: "r1",
    author: "Marcus Bell",
    handle: "@marcusb",
    initials: "MB",
    at: "1h",
    body: "This is the part most dashboards get wrong. Six status colours and everything looks equally urgent.",
    likes: 42,
    liked: !0,
    children: [{
      id: "r1a",
      author: "Amelia Whitfield",
      handle: "@amelia",
      initials: "AW",
      at: "58m",
      body: "Exactly. We capped ourselves at two hues for the whole surface and it forced better hierarchy everywhere else.",
      likes: 17,
      liked: !1
    }]
  }, {
    id: "r2",
    author: "Sofia Alvarez",
    handle: "@sofia.a",
    initials: "SA",
    at: "44m",
    body: "Curious how you handle the “nearing limit” case. That one always wants to be its own colour.",
    likes: 9,
    liked: !1,
    children: []
  }];
function eo({
  initials: e,
  size: a = 32
}) {
  return <span aria-hidden={!0} style={{
    width: a,
    height: a
  }} className="relative inline-flex size-8 shrink-0 overflow-hidden rounded-full select-none"><span className="flex size-full items-center justify-center rounded-[inherit] bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_24%,white)] text-[12px]/[16px] font-extrabold tabular-nums text-neutral-900 dark:text-neutral-100 dark:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_22%,var(--color-neutral-900))]">{e}</span></span>;
}
function es({
  icon: e,
  label: a,
  count: r,
  active: n,
  onClick: i
}) {
  return <button type="button" aria-label={`${a}, ${r}`} aria-pressed={n} onClick={i} className={G(X, Z, "tabular-nums")}><__mod_22728.n icon={e} size={18} strokeWidth={2} aria-hidden="true" className={G(n && "[&_path]:fill-current")} />{r}</button>;
}
let eb = (...e) => e.filter(Boolean).join(" "),
  ep = "text-neutral-900/62 dark:text-neutral-100/62",
  eh = "text-[15px]/[20px] font-bold",
  eu = "relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-transparent text-neutral-900 hover:not-disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] active:not-disabled:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] disabled:text-neutral-900/40 dark:text-neutral-100 dark:hover:not-disabled:bg-neutral-100/8 dark:active:not-disabled:bg-neutral-100/12 dark:aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:disabled:text-neutral-100/40",
  em = "size-8 rounded-[calc(var(--rb-r-full,999px))]",
  ek = eb("text-[14px]/[20px] font-medium", ep),
  ev = eb("text-[13px]/[16px] font-semibold tabular-nums", ep),
  ef = [{
    id: "t1",
    from: "agent",
    name: "Halcyon Support",
    text: "Hi Cedar Labs. I can see invoice INV-20418 failed twice this week. Want me to walk through it?",
    at: "10:02"
  }, {
    id: "t2",
    from: "user",
    name: "You",
    text: "Yes. Our card is fine, so I do not understand why it keeps declining.",
    at: "10:03"
  }, {
    id: "t3",
    from: "agent",
    name: "Halcyon Support",
    text: "The issuer returned do_not_honor on the second attempt, which usually means a block on repeat charges inside 72 hours rather than a funding problem.",
    at: "10:05"
  }, {
    id: "t4",
    from: "agent",
    name: "Halcyon Support",
    text: "I have queued a retry for tomorrow morning and attached the decline log so your bank can lift the block.",
    at: "10:05",
    attachment: "decline-log-INV-20418.pdf"
  }],
  eg = ["Change the card on file", "Send the log to my bank", "Pause retries for now"];
let ey = (...e) => e.filter(Boolean).join(" "),
  eN = "text-neutral-900/62 dark:text-neutral-100/62",
  ez = "text-[14px]/[20px] font-medium",
  eA = "text-[15px]/[20px] font-bold",
  eS = "relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] text-neutral-900 dark:text-neutral-100 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] active:not-disabled:translate-y-px active:not-disabled:shadow-[inset_0_1px_3px_rgb(84_62_32/0.16),0_0_0_1px_rgb(84_62_32/0.10)] dark:active:not-disabled:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14),0_0_0_1px_rgb(84_62_32/0.10)] dark:aria-expanded:bg-neutral-800 dark:aria-expanded:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] disabled:bg-none disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] disabled:text-neutral-900/40 disabled:shadow-none dark:disabled:bg-neutral-800/60 dark:disabled:text-neutral-100/40",
  eW = "relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-transparent text-neutral-900 hover:not-disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] active:not-disabled:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] disabled:text-neutral-900/40 dark:text-neutral-100 dark:hover:not-disabled:bg-neutral-100/8 dark:active:not-disabled:bg-neutral-100/12 dark:aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:disabled:text-neutral-100/40",
  eR = "size-8 rounded-[calc(var(--rb-r-full,999px))]",
  eM = "relative inline-flex size-8 shrink-0 overflow-hidden rounded-full select-none",
  eC = "flex size-full items-center justify-center rounded-[inherit] bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_24%,white)] text-[12px]/[16px] font-extrabold tabular-nums text-neutral-900 dark:text-neutral-100 dark:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_22%,var(--color-neutral-900))]",
  eO = ey(ez, eN),
  eT = ey("text-[13px]/[16px] font-semibold tabular-nums", eN),
  eD = ey("text-[13px]/[16px] font-bold tabular-nums", eN),
  eP = [{
    id: "m1",
    author: "Priya Raghavan",
    initials: "PR",
    at: "09:41",
    body: "Dropping the second pass on the onboarding flow. The step counter moves to the top so the primary action never shifts.",
    reactions: [{
      emoji: "\uD83D\uDD25",
      count: 5
    }, {
      emoji: "\uD83D\uDC4F",
      count: 2,
      mine: !0
    }]
  }, {
    id: "m2",
    author: "Priya Raghavan",
    initials: "PR",
    at: "09:41",
    image: {
      name: "onboarding-pass-2.png",
      meta: ["PNG", "1.8 MB", "2400\xd71350"]
    },
    replies: 6
  }, {
    id: "m3",
    author: "Tomas Lindqvist",
    initials: "TL",
    at: "09:58",
    body: "Much calmer. One thing: the skip link reads as a primary action at 375px because it is the only thing on that row.",
    reactions: [{
      emoji: "\uD83D\uDCAF",
      count: 3
    }]
  }, {
    id: "m4",
    author: "Naomi Okafor",
    initials: "NO",
    at: "10:12",
    body: "Attaching the copy deck so nobody has to guess the microcopy this round.",
    file: {
      name: "onboarding-copy-deck.pdf",
      meta: ["PDF", "640 KB", "12 pages"]
    },
    reactions: [{
      emoji: "\uD83D\uDE4F",
      count: 4,
      mine: !0
    }]
  }];
let eB = (...e) => e.filter(Boolean).join(" "),
  eL = "text-neutral-900 dark:text-neutral-100",
  eI = "text-neutral-900/78 dark:text-neutral-100/78",
  eF = "text-neutral-900/62 dark:text-neutral-100/62",
  eV = "text-[14px]/[20px] font-medium",
  eq = "text-[15px]/[20px] font-bold",
  e$ = "size-8 rounded-[calc(var(--rb-r-full,999px))]",
  eG = eB(eV, eF),
  eJ = [{
    id: "l1",
    name: "Rowan Diaz",
    initials: "RD",
    role: "host",
    text: "Welcome in. We are starting with the layout pass, then taking questions in the last twenty minutes."
  }, {
    id: "l2",
    name: "kestrel",
    initials: "KE",
    text: "the grid overlay is doing a lot of work here"
  }, {
    id: "l3",
    name: "Junie Park",
    initials: "JP",
    role: "mod",
    text: "Reminder: drop questions with a leading Q so we can find them later."
  }, {
    id: "l4",
    name: "mattlives",
    initials: "ML",
    text: "Q: how do you decide when a section deserves its own surface vs just spacing?"
  }, {
    id: "l5",
    name: "aurelia",
    initials: "AU",
    text: "second that question, we argue about it every sprint"
  }, {
    id: "l6",
    name: "Rowan Diaz",
    initials: "RD",
    role: "host",
    text: "Good one. Short answer: a surface is for a different kind of content, not a different amount of it."
  }, {
    id: "l7",
    name: "tinyhaus",
    initials: "TH",
    text: "that line is going straight into our team doc"
  }, {
    id: "l8",
    name: "devon.b",
    initials: "DB",
    text: "is the recording going out to everyone or subscribers only?"
  }],
  eY = [{
    group: "Hosts",
    people: ["Rowan Diaz"]
  }, {
    group: "Moderators",
    people: ["Junie Park", "Sam Ottoline"]
  }, {
    group: "Viewers",
    people: ["kestrel", "mattlives", "aurelia", "tinyhaus", "devon.b"]
  }],
  eK = {
    "chat-1": function () {
      let [e, a] = (0, React.useState)("launch"),
        [r, y] = (0, React.useState)(""),
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
      return <div className={p("bg-white dark:bg-neutral-950", "text-neutral-900 dark:text-neutral-100", "flex h-full min-h-[720px] w-full flex-col overflow-hidden p-4 sm:p-6")}><div className={p("relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 shadow-[inset_0_0_0_1px_rgb(84_62_32/0.05)] dark:shadow-[inset_0_0_0_1px_rgb(255_255_255/0.05)]", "mx-auto grid min-h-0 w-full max-w-[1100px] flex-1 gap-1 lg:grid-cols-[240px_1fr]")}><aside className="hidden min-h-0 flex-col lg:flex"><div className="px-3 pt-3"><label htmlFor="chat-1-search" className="sr-only">Search channels</label><div className={p("relative flex w-full min-w-0 cursor-text items-center rounded-[calc(var(--rb-r-xl,12px))] data-concentric:rounded-[var(--rb-r-5xl,22px)] border border-transparent bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] text-[15px]/[20px] font-medium text-neutral-900 transition-[border-color,box-shadow,background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:not-focus-within:not-has-[[aria-invalid=true]]:not-has-[input:disabled]:not-has-[input[readonly]]:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] focus-within:border-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] focus-within:bg-white focus-within:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] has-[[aria-invalid=true]]:border-[oklch(60%_0.236_26)] has-[[aria-invalid=true]]:bg-[oklch(97.5%_0.016_26)] has-[input:disabled]:cursor-not-allowed has-[input:disabled]:text-neutral-900/40 has-[input:disabled]:shadow-none has-[input[readonly]]:cursor-default has-[input[readonly]]:shadow-none dark:text-neutral-100 dark:hover:not-focus-within:not-has-[[aria-invalid=true]]:not-has-[input:disabled]:not-has-[input[readonly]]:bg-neutral-900 dark:focus-within:border-[var(--rb-accent,oklch(81%_0.16_163))] dark:focus-within:bg-neutral-900 dark:focus-within:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:has-[[aria-invalid=true]]:border-[oklch(65.2%_0.219_26)] dark:has-[[aria-invalid=true]]:bg-[oklch(26%_0.04_26)] dark:has-[input:disabled]:text-neutral-100/40", "h-10")}><span data-affix={!0} className="flex shrink-0 items-center gap-2 text-[15px]/[20px] font-semibold text-neutral-900/62 dark:text-neutral-100/62 select-none first:ps-3.5 last:pe-3.5 has-[button]:first:ps-1 has-[button]:last:pe-1"><__mod_22728.n icon={__mod_66575.A} size={18} strokeWidth={2} aria-hidden="true" /></span><input id="chat-1-search" placeholder="Search" className="h-full w-full min-w-0 flex-1 bg-transparent px-3.5 outline-none [[data-affix]+&]:ps-2 [&:has(+[data-affix])]:pe-2 placeholder:font-medium placeholder:text-neutral-900/55 disabled:cursor-not-allowed disabled:placeholder:text-neutral-900/30 dark:placeholder:text-neutral-100/55 dark:disabled:placeholder:text-neutral-100/30 dark:[color-scheme:dark]" /></div></div><div className="min-h-0 flex-1 overflow-y-auto px-2 pb-2"><p className="px-3 pt-5 pb-1.5 text-[13px]/[16px] font-bold tabular-nums text-neutral-900/62 dark:text-neutral-100/62">Channels</p><ul className="space-y-0.5">{w.map(r => {
                  let n = r.id === e;
                  return <li><button type="button" aria-current={n ? "page" : void 0} onClick={() => a(r.id)} className={v}><__mod_22728.n icon={__mod_4086.A} size={18} strokeWidth={2} aria-hidden="true" /><span className="min-w-0 flex-1 truncate text-left">{r.name}</span>{r.unread > 0 && <span className={p("inline-flex h-5.5 min-w-5.5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden whitespace-nowrap rounded-[calc(var(--rb-r-full,999px))] px-2.5 text-[12px]/[16px] font-bold tabular-nums", "bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] text-neutral-900 dark:text-neutral-100 dark:bg-neutral-100/12")}>{r.unread}<span className="sr-only"> unread</span></span>}</button></li>;
                })}</ul><button type="button" className={p(v, "mt-1")}><__mod_22728.n icon={__mod_89886.A} size={18} strokeWidth={2} aria-hidden="true" />Add channel</button></div></aside><div className="flex min-h-0 min-w-0 flex-col gap-1"><div className={p("flex min-h-12 min-w-0 shrink-0 items-center gap-2 px-4 has-[button]:pe-2.5", "justify-between gap-3 py-3")}><div className="min-w-0"><h2 className={p("text-[17px]/[22px] font-extrabold", "flex items-center gap-1.5")}><__mod_22728.n icon={__mod_4086.A} size={18} strokeWidth={2} aria-hidden="true" className={h} />launch-room</h2><p className={p(f, "mt-0.5 truncate")}>Release coordination for the June billing update</p></div><div className="flex shrink-0 items-center gap-1"><button type="button" aria-label="Pinned messages" className={p(m, "size-10 rounded-[calc(var(--rb-r-full,999px))]")}><__mod_22728.n icon={__mod_90227.A} size={18} strokeWidth={2} aria-hidden="true" /></button><button type="button" aria-label="Members, 18" className={p("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-transparent text-neutral-900/78 dark:text-neutral-100/78 hover:not-disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] hover:not-disabled:text-neutral-900 active:not-disabled:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] aria-expanded:text-neutral-900 disabled:text-neutral-900/40 dark:hover:not-disabled:bg-neutral-100/8 dark:hover:not-disabled:text-neutral-100 dark:active:not-disabled:bg-neutral-100/12 dark:aria-expanded:bg-neutral-100/8 dark:aria-expanded:text-neutral-100 dark:disabled:text-neutral-100/40", "h-10 gap-2 rounded-[calc(var(--rb-r-full,999px))] px-5 text-[15px]/[20px] font-bold")}><__mod_22728.n icon={__mod_88366.A} size={18} strokeWidth={2} aria-hidden="true" /><span className="tabular-nums">18</span></button></div></div><div className={p("mx-1 mb-1 flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-5xl,22px))] border border-transparent bg-white dark:bg-neutral-950 shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] [&:has(+*)]:mb-0", "relative min-h-0 flex-1")}><div ref={N} onScroll={A} className="flex min-h-0 flex-1 flex-col space-y-5 overflow-y-auto p-3 [&>*:first-child]:mt-auto"><p className={p(g, "text-center")}>Today</p>{j.map(e => <article className="flex gap-3"><span aria-hidden={!0} className="relative inline-flex size-8 shrink-0 overflow-hidden rounded-full select-none"><span className="flex size-full items-center justify-center rounded-[inherit] bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_24%,white)] text-[12px]/[16px] font-extrabold tabular-nums text-neutral-900 dark:text-neutral-100 dark:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_22%,var(--color-neutral-900))]">{e.initials}</span></span><div className="min-w-0 flex-1"><p className="flex items-baseline gap-2"><span className="text-[15px]/[20px] font-bold">{e.author}</span><span className={g}>{e.at}</span></p><div className="mt-1 space-y-1.5">{e.lines.map(e => <p className={p(u, "text-neutral-900/78 dark:text-neutral-100/78")}>{e}</p>)}</div></div></article>)}<p className={p(f, "flex items-center gap-2")}><span className="flex h-lh shrink-0 items-center"><span aria-hidden="true" className="inline-block size-3 shrink-0 rounded-full border-2 border-current border-t-transparent animate-spin [animation-duration:700ms] motion-reduce:animate-none" /></span>Sofia Alvarez is typing</p></div><div aria-hidden="true" className={p("bg-linear-to-b from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 top-0 h-8", z.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={p("bg-linear-to-t from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 bottom-0 h-8", z.end ? "opacity-100" : "opacity-0")} /></div><div className="shrink-0 px-1 pb-1"><form onSubmit={e => {
                e.preventDefault(), y("");
              }} className={p("relative flex w-full min-w-0 flex-col rounded-[calc(min(var(--rb-r-6xl,26px),min(var(--rb-r-full,999px),16px)_+_8px))] border border-transparent bg-white text-neutral-900 dark:text-neutral-100 shadow-[0_0_0_1px_rgb(84_62_32/0.07),0_1px_2px_rgb(84_62_32/0.06),0_8px_22px_-10px_rgb(84_62_32/0.20)] transition-[box-shadow] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] focus-within:shadow-[0_0_0_1.5px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black),0_0_0_5px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent),0_8px_22px_-10px_rgb(84_62_32/0.2)] dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_0_0_1px_rgb(0_0_0/0.6),0_10px_24px_-12px_rgb(0_0_0/0.8)] dark:focus-within:shadow-[0_0_0_1.5px_var(--rb-accent,oklch(81%_0.16_163)),0_0_0_5px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)]", "rounded-[var(--rb-r-5xl,22px)]")}><div className="flex min-w-0 items-end gap-1 p-2"><label htmlFor="chat-1-composer" className="sr-only">Message launch-room</label><input id="chat-1-composer" value={r} onChange={e => y(e.target.value)} placeholder="Message #launch-room" className="max-h-40 min-h-6 min-w-0 flex-auto resize-none bg-transparent px-1.5 py-1.5 field-sizing-content text-[15px]/[22px] font-medium text-neutral-900 dark:text-neutral-100 outline-none placeholder:text-neutral-900/55 dark:placeholder:text-neutral-100/55" /><div className="flex shrink-0 items-center gap-1"><button type="button" aria-label="Attach file" className={p(m, k)}><__mod_22728.n icon={__mod_48094.A} size={18} strokeWidth={2} aria-hidden="true" /></button><button type="button" aria-label="Add emoji" className={p(m, k)}><__mod_22728.n icon={__mod_49322.A} size={18} strokeWidth={2} aria-hidden="true" /></button><button type="submit" aria-label="Send message" disabled={!r.trim()} className={p("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_68%,white),var(--rb-accent,oklch(84%_0.15_165)))] text-[var(--rb-accent-fg,oklch(26%_0.06_168))] shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_4px_10px_-4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_80%,transparent)] hover:not-disabled:-translate-y-px hover:not-disabled:brightness-[1.04] hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_7px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_85%,transparent)] active:not-disabled:translate-y-px active:not-disabled:brightness-[0.98] active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_55%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] motion-reduce:hover:translate-y-0 disabled:opacity-45 disabled:shadow-none dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_78%,white),var(--rb-accent,oklch(81%_0.16_163)))] dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_6px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,transparent)] dark:hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_9px_22px_-8px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_60%,transparent)] dark:active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_45%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black)] dark:disabled:shadow-none", k)}><__mod_22728.n icon={__mod_55410.A} size={18} strokeWidth={2} aria-hidden="true" /></button></div></div></form></div></div></div></div>;
    },
    "chat-2": function () {
      let [e, a] = (0, React.useState)("sofia"),
        [r, o] = (0, React.useState)(""),
        {
          ref: s,
          edges: c,
          onScroll: _
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
      return <div className={W("bg-white dark:bg-neutral-950", R, "flex h-full min-h-[680px] w-full flex-col overflow-hidden p-4 sm:p-6")}><div className={W("relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 shadow-[inset_0_0_0_1px_rgb(84_62_32/0.05)] dark:shadow-[inset_0_0_0_1px_rgb(255_255_255/0.05)]", "mx-auto grid min-h-0 w-full max-w-[1000px] flex-1 gap-1 md:grid-cols-[260px_1fr]")}><aside className="hidden min-h-0 flex-col md:flex"><div className="p-3"><label htmlFor="chat-2-search" className="sr-only">Search conversations</label><div className={W("relative flex w-full min-w-0 cursor-text items-center rounded-[calc(var(--rb-r-xl,12px))] data-concentric:rounded-[var(--rb-r-5xl,22px)] border border-transparent bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] text-[15px]/[20px] font-medium text-neutral-900 transition-[border-color,box-shadow,background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:not-focus-within:not-has-[[aria-invalid=true]]:not-has-[input:disabled]:not-has-[input[readonly]]:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] focus-within:border-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] focus-within:bg-white focus-within:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] has-[[aria-invalid=true]]:border-[oklch(60%_0.236_26)] has-[[aria-invalid=true]]:bg-[oklch(97.5%_0.016_26)] has-[input:disabled]:cursor-not-allowed has-[input:disabled]:text-neutral-900/40 has-[input:disabled]:shadow-none has-[input[readonly]]:cursor-default has-[input[readonly]]:shadow-none dark:text-neutral-100 dark:hover:not-focus-within:not-has-[[aria-invalid=true]]:not-has-[input:disabled]:not-has-[input[readonly]]:bg-neutral-900 dark:focus-within:border-[var(--rb-accent,oklch(81%_0.16_163))] dark:focus-within:bg-neutral-900 dark:focus-within:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:has-[[aria-invalid=true]]:border-[oklch(65.2%_0.219_26)] dark:has-[[aria-invalid=true]]:bg-[oklch(26%_0.04_26)] dark:has-[input:disabled]:text-neutral-100/40", "h-10")}><span data-affix={!0} className="flex shrink-0 items-center gap-2 text-[15px]/[20px] font-semibold text-neutral-900/62 dark:text-neutral-100/62 select-none first:ps-3.5 last:pe-3.5 has-[button]:first:ps-1 has-[button]:last:pe-1"><__mod_22728.n icon={__mod_66575.A} size={18} strokeWidth={2} aria-hidden="true" /></span><input id="chat-2-search" placeholder="Search messages" className="h-full w-full min-w-0 flex-1 bg-transparent px-3.5 outline-none [[data-affix]+&]:ps-2 [&:has(+[data-affix])]:pe-2 placeholder:font-medium placeholder:text-neutral-900/55 disabled:cursor-not-allowed disabled:placeholder:text-neutral-900/30 dark:placeholder:text-neutral-100/55 dark:disabled:placeholder:text-neutral-100/30 dark:[color-scheme:dark]" /></div></div><ul className="min-h-0 flex-1 space-y-0.5 overflow-y-auto px-2 pb-2">{L.map(r => {
                let n = r.id === e;
                return <li><button type="button" aria-current={n ? "true" : void 0} onClick={() => a(r.id)} className={W("relative flex min-h-12 w-full min-w-0 flex-wrap items-center gap-x-3 gap-y-1 py-2.5 text-left text-neutral-900 dark:text-neutral-100 transition-[background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] has-[[data-description]]:min-h-16", n ? "bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] dark:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)]" : "cursor-pointer hover:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] dark:hover:bg-neutral-100/6 active:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] dark:active:bg-neutral-100/10", "focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))]", "rounded-[var(--rb-r-4xl,18px)]", "px-2")}><span aria-hidden={!0} className={D}><span className={P}>{r.initials}</span></span><span className="min-w-0 flex-1"><span className="flex items-baseline justify-between gap-2"><span className={W(C, "truncate")}>{r.name}{r.online && <span className="sr-only">, online</span>}</span><span className={W(E, "shrink-0")}>{r.at}</span></span><span className="mt-0.5 flex items-center justify-between gap-2"><span className={W(H, "truncate")}>{r.preview}</span>{r.unread > 0 && <span className={W("inline-flex h-5.5 min-w-5.5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden whitespace-nowrap rounded-[calc(var(--rb-r-full,999px))] px-2.5 text-[12px]/[16px] font-bold tabular-nums", "bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] text-neutral-900 dark:text-neutral-100 dark:bg-neutral-100/12")}>{r.unread}<span className="sr-only"> unread</span></span>}</span></span></button></li>;
              })}</ul></aside><div className="flex min-h-0 min-w-0 flex-col gap-1"><div className={W("flex min-h-12 min-w-0 shrink-0 items-center gap-2 px-4 has-[button]:pe-2.5", "justify-between gap-3 py-3")}><div className="flex min-w-0 items-center gap-2.5"><span aria-hidden={!0} className={D}><span className={P}>SA</span></span><div className="min-w-0"><h2 className={W(C, "truncate")}>Sofia Alvarez</h2><p className={W(H, "mt-0.5 flex items-center gap-1.5")}>Active now</p></div></div><div className="flex shrink-0 items-center gap-1">{[{
                  icon: __mod_17118.A,
                  label: "Start voice call"
                }, {
                  icon: __mod_89462.A,
                  label: "Start video call"
                }].map(({
                  icon: e,
                  label: a
                }) => <button type="button" aria-label={a} className={W(O, "size-10 rounded-[calc(var(--rb-r-full,999px))]")}><__mod_22728.n icon={e} size={18} strokeWidth={2} aria-hidden="true" /></button>)}</div></div><div className={W("mx-1 mb-1 flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-5xl,22px))] border border-transparent bg-white dark:bg-neutral-950 shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] [&:has(+*)]:mb-0", "relative min-h-0 flex-1")}><div ref={s} onScroll={_} className="flex min-h-0 flex-1 flex-col overflow-y-auto p-3 [&>*:first-child]:mt-auto"><p className={W(E, "text-center")}>Today</p>{I.map((e, a) => <div className={W("flex", e.me ? "justify-end" : "justify-start", a > 0 && I[a - 1].me === e.me ? "mt-1" : "mt-3")}><div className="max-w-[78%]"><div className={e.me ? "w-fit max-w-full rounded-[calc(var(--rb-r-6xl,26px))] rounded-br-[var(--rb-r-xs,4px)] border border-transparent bg-[var(--rb-accent,oklch(84%_0.15_165))] px-4 py-2.5 text-[15px]/[22px] font-medium whitespace-pre-wrap text-[var(--rb-accent-fg,oklch(26%_0.06_168))] shadow-[inset_0_-1.5px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_2px_6px_-3px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,transparent)] [overflow-wrap:anywhere] dark:bg-[var(--rb-accent,oklch(81%_0.16_163))] dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))] dark:shadow-none" : W(B, "w-fit max-w-full px-3.5 py-2 whitespace-pre-wrap [overflow-wrap:anywhere]")}><p>{e.text}</p><p className={W(E, "mt-1 flex items-center justify-end gap-1")}>{e.at}{e.me && (e.read ? <__mod_22728.n icon={__mod_54810.A} size={14} strokeWidth={2} aria-label="Read" /> : <__mod_22728.n icon={__mod_90987.A} size={14} strokeWidth={2} aria-label="Sent" />)}</p></div></div></div>)}</div><div aria-hidden="true" className={W("bg-linear-to-b from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 top-0 h-8", c.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={W("bg-linear-to-t from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 bottom-0 h-8", c.end ? "opacity-100" : "opacity-0")} /></div><div className="shrink-0 px-1 pb-1"><form onSubmit={e => {
                e.preventDefault(), o("");
              }} className={W("relative flex w-full min-w-0 flex-col rounded-[calc(min(var(--rb-r-6xl,26px),min(var(--rb-r-full,999px),16px)_+_8px))] border border-transparent bg-white text-neutral-900 dark:text-neutral-100 shadow-[0_0_0_1px_rgb(84_62_32/0.07),0_1px_2px_rgb(84_62_32/0.06),0_8px_22px_-10px_rgb(84_62_32/0.20)] transition-[box-shadow] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] focus-within:shadow-[0_0_0_1.5px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black),0_0_0_5px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent),0_8px_22px_-10px_rgb(84_62_32/0.2)] dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_0_0_1px_rgb(0_0_0/0.6),0_10px_24px_-12px_rgb(0_0_0/0.8)] dark:focus-within:shadow-[0_0_0_1.5px_var(--rb-accent,oklch(81%_0.16_163)),0_0_0_5px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)]", "rounded-[var(--rb-r-5xl,22px)]")}><div className="flex min-w-0 items-end gap-1 p-2"><label htmlFor="chat-2-composer" className="sr-only">Message Sofia Alvarez</label><input id="chat-2-composer" value={r} onChange={e => o(e.target.value)} placeholder="Write a message" className="max-h-40 min-h-6 min-w-0 flex-auto resize-none bg-transparent px-1.5 py-1.5 field-sizing-content text-[15px]/[22px] font-medium text-neutral-900 dark:text-neutral-100 outline-none placeholder:text-neutral-900/55 dark:placeholder:text-neutral-100/55" /><button type="button" aria-label="Attach image" className={W(O, T)}><__mod_22728.n icon={__mod_22776.A} size={18} strokeWidth={2} aria-hidden="true" /></button><button type="submit" aria-label="Send message" disabled={!r.trim()} className={W("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_68%,white),var(--rb-accent,oklch(84%_0.15_165)))] text-[var(--rb-accent-fg,oklch(26%_0.06_168))] shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_4px_10px_-4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_80%,transparent)] hover:not-disabled:-translate-y-px hover:not-disabled:brightness-[1.04] hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_7px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_85%,transparent)] active:not-disabled:translate-y-px active:not-disabled:brightness-[0.98] active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_55%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] motion-reduce:hover:translate-y-0 disabled:opacity-45 disabled:shadow-none dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_78%,white),var(--rb-accent,oklch(81%_0.16_163)))] dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_6px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,transparent)] dark:hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_9px_22px_-8px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_60%,transparent)] dark:active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_45%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black)] dark:disabled:shadow-none", T)}><__mod_22728.n icon={__mod_55410.A} size={18} strokeWidth={2} aria-hidden="true" /></button></div></form></div></div></div></div>;
    },
    "chat-3": function () {
      let [e, a] = (0, React.useState)(!1),
        [r, i] = (0, React.useState)(""),
        o = (0, React.useRef)(null);
      return <div className={G("bg-white dark:bg-neutral-950", "text-neutral-900 dark:text-neutral-100", "flex h-full min-h-[800px] w-full flex-col overflow-y-auto p-4 sm:p-6")}><div className={G("relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 shadow-[inset_0_0_0_1px_rgb(84_62_32/0.05)] dark:shadow-[inset_0_0_0_1px_rgb(255_255_255/0.05)]", "mx-auto w-full max-w-[680px] shrink-0 gap-1")}><article className={G(ee, "mt-1 p-3")}><div className="flex items-start gap-3"><eo initials="AW" size={40} /><div className="min-w-0 flex-1"><p className="flex flex-wrap items-baseline gap-x-2"><span className={Q}>Amelia Whitfield</span><span className={er}>@amelia</span><span className={er}>2h</span></p><p className={G("text-[15px]/[22px] font-medium", "mt-2")}>We rebuilt our billing screens around one rule: colour marks the exception, never the layout. Overdue is the only thing that gets to be red.</p><div className="mt-3 flex items-center gap-1"><es icon={__mod_36586.A} label="Replies" count={et} /><es icon={__mod_43755.A} label="Reposts" count={en} /><es icon={__mod_47293.A} label="Likes" count={el + +!!e} active={e} onClick={() => a(e => !e)} /><button type="button" aria-label="Share post" className={G(X, "size-8 rounded-[calc(var(--rb-r-full,999px))]", "ml-auto")}><__mod_22728.n icon={__mod_71497.A} size={18} strokeWidth={2} aria-hidden="true" /></button></div></div></div></article><div className="px-1"><form onSubmit={e => {
              e.preventDefault(), i(""), o.current && (o.current.style.height = "");
            }} className="relative flex w-full min-w-0 flex-col rounded-[calc(min(var(--rb-r-6xl,26px),min(var(--rb-r-full,999px),16px)_+_8px))] border border-transparent bg-white text-neutral-900 dark:text-neutral-100 shadow-[0_0_0_1px_rgb(84_62_32/0.07),0_1px_2px_rgb(84_62_32/0.06),0_8px_22px_-10px_rgb(84_62_32/0.20)] transition-[box-shadow] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] focus-within:shadow-[0_0_0_1.5px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black),0_0_0_5px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent),0_8px_22px_-10px_rgb(84_62_32/0.2)] dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_0_0_1px_rgb(0_0_0/0.6),0_10px_24px_-12px_rgb(0_0_0/0.8)] dark:focus-within:shadow-[0_0_0_1.5px_var(--rb-accent,oklch(81%_0.16_163)),0_0_0_5px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)]"><div className="flex items-start gap-3 p-3"><eo initials="YO" /><div className="min-w-0 flex-1"><label htmlFor="chat-3-reply" className="sr-only">Post a reply</label><textarea ref={o} id="chat-3-reply" rows={2} value={r} onChange={e => {
                    let a;
                    i(e.target.value), (a = o.current) && (a.style.height = "auto", a.style.height = `${Math.min(a.scrollHeight, 160)}px`);
                  }} placeholder="Post your reply" className={G("max-h-40 min-h-6 min-w-0 flex-auto resize-none bg-transparent px-1.5 py-1.5 field-sizing-content text-[15px]/[22px] font-medium text-neutral-900 dark:text-neutral-100 outline-none placeholder:text-neutral-900/55 dark:placeholder:text-neutral-100/55", "min-h-12 w-full")} /><div className="mt-1 flex items-center justify-between gap-3 ps-1.5"><p className={ea}>Replies are visible to everyone following this thread.</p><button type="submit" disabled={!r.trim()} className={G("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_68%,white),var(--rb-accent,oklch(84%_0.15_165)))] text-[var(--rb-accent-fg,oklch(26%_0.06_168))] shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_4px_10px_-4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_80%,transparent)] hover:not-disabled:-translate-y-px hover:not-disabled:brightness-[1.04] hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_7px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_85%,transparent)] active:not-disabled:translate-y-px active:not-disabled:brightness-[0.98] active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_55%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] motion-reduce:hover:translate-y-0 disabled:opacity-45 disabled:shadow-none dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_78%,white),var(--rb-accent,oklch(81%_0.16_163)))] dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_6px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,transparent)] dark:hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_9px_22px_-8px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_60%,transparent)] dark:active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_45%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black)] dark:disabled:shadow-none", Z)}>Reply</button></div></div></div></form></div><div className="flex items-center gap-2 px-4 py-2.5"><p className={ea}>Showing most relevant replies first</p><button type="button" className={G(U, Z, "ml-auto")}>Most recent</button></div>{ei.map(e => <article className={G(ee, "p-3")}><div className="flex items-start gap-3"><eo initials={e.initials} /><div className="min-w-0 flex-1"><p className="flex flex-wrap items-baseline gap-x-2"><span className={Q}>{e.author}</span><span className={er}>{e.handle}</span><span className={er}>{e.at}</span></p><p className={G(K, J, "mt-1.5")}>{e.body}</p><div className="mt-2 flex items-center gap-1"><es icon={__mod_47293.A} label={`Likes on reply from ${e.author}`} count={e.likes} active={e.liked} /><button type="button" className={G(U, Z)}>Reply</button></div>{e.children.length > 0 && <ul className="mt-3 space-y-3 pl-4">{e.children.map(e => <li className="flex items-start gap-2.5"><eo initials={e.initials} size={26} /><div className="min-w-0 flex-1"><p className="flex flex-wrap items-baseline gap-x-2"><span className={Q}>{e.author}</span><span className={er}>{e.handle}</span><span className={er}>{e.at}</span></p><p className={G(K, J, "mt-1")}>{e.body}</p><div className="mt-1.5"><es icon={__mod_47293.A} label={`Likes on reply from ${e.author}`} count={e.likes} active={e.liked} /></div></div></li>)}</ul>}</div></div></article>)}<div className="px-1 pb-1"><button type="button" className={G(U, "h-12 gap-2 rounded-[calc(var(--rb-r-full,999px))] px-6 text-[16px]/[20px] font-extrabold", "w-full")}>Show 21 more replies</button></div></div></div>;
    },
    "chat-4": function () {
      let [e, a] = (0, React.useState)(""),
        [r, i] = (0, React.useState)(null),
        {
          ref: o,
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
      return (0, React.useEffect)(() => {
        let e = o.current;
        if (!e) return;
        let a = !0,
          r = () => {
            a && (e.scrollTop = e.scrollHeight);
          },
          t = () => {
            a = e.scrollHeight - e.scrollTop - e.clientHeight < 24;
          };
        r(), e.addEventListener("scroll", t, {
          passive: !0
        });
        let n = e.ownerDocument.defaultView,
          l = n?.ResizeObserver ? new n.ResizeObserver(r) : null;
        for (let a of Array.from(e.children)) l?.observe(a);
        return () => {
          e.removeEventListener("scroll", t), l?.disconnect();
        };
      }, [o]), <div className={eb("bg-white dark:bg-neutral-950", "text-neutral-900 dark:text-neutral-100", "flex h-full min-h-[640px] w-full items-center justify-center overflow-hidden p-4 sm:p-6")}><div className={eb("relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 shadow-[inset_0_0_0_1px_rgb(84_62_32/0.05)] dark:shadow-[inset_0_0_0_1px_rgb(255_255_255/0.05)]", "shadow-[0_0_0_1px_rgb(84_62_32/0.08),0_24px_56px_-20px_rgb(84_62_32/0.34),0_6px_16px_-8px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.65),0_24px_56px_-16px_rgb(0_0_0/0.8)]", "h-full max-h-[560px] w-full max-w-[400px] gap-1")}><div className={eb("flex min-h-12 min-w-0 shrink-0 items-center gap-2 px-4 has-[button]:pe-2.5", "justify-between gap-3 py-3")}><div className="flex min-w-0 items-center gap-2.5"><span aria-hidden={!0} className={eb("inline-flex shrink-0 items-center justify-center overflow-hidden rounded-[calc(var(--rb-r-lg,10px))] bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_68%,white),var(--rb-accent,oklch(84%_0.15_165)))] text-[var(--rb-accent-fg,oklch(26%_0.06_168))] shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] select-none dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_78%,white),var(--rb-accent,oklch(81%_0.16_163)))] dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.4),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black)]", "size-8", "text-[13px]/[16px] font-bold tabular-nums")}>HS</span><div className="min-w-0"><p className={eb(eh, "truncate")}>Halcyon Support</p><p className={eb(ek, "mt-0.5 flex items-center gap-1.5")}>Replies in about 2 minutes</p></div></div><button type="button" aria-label="Minimize chat" className={eb(eu, "size-10 rounded-[calc(var(--rb-r-full,999px))]")}><__mod_22728.n icon={__mod_20148.A} size={18} strokeWidth={2} aria-hidden="true" /></button></div><div className={eb("mx-1 mb-1 flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-5xl,22px))] border border-transparent bg-white dark:bg-neutral-950 shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] [&:has(+*)]:mb-0", "relative min-h-0 flex-1")}><div ref={o} onScroll={c} className="min-h-0 flex-1 space-y-3 overflow-y-auto p-3 [overflow-anchor:none]"><p className={eb(ev, "text-center")}>Conversation started 10:02</p>{ef.map((e, a) => <div className={eb("flex", "user" === e.from ? "justify-end" : "justify-start")}><div className="max-w-[85%]"><div className={"user" === e.from ? "w-fit max-w-full rounded-[calc(var(--rb-r-6xl,26px))] rounded-br-[var(--rb-r-xs,4px)] border border-transparent bg-[var(--rb-accent,oklch(84%_0.15_165))] px-4 py-2.5 text-[15px]/[22px] font-medium whitespace-pre-wrap text-[var(--rb-accent-fg,oklch(26%_0.06_168))] shadow-[inset_0_-1.5px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_2px_6px_-3px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,transparent)] [overflow-wrap:anywhere] dark:bg-[var(--rb-accent,oklch(81%_0.16_163))] dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))] dark:shadow-none" : "flex min-w-0 flex-col gap-4 text-[15px]/[24px] font-medium text-neutral-900 dark:text-neutral-100 [overflow-wrap:anywhere]"}><p>{e.text}</p></div>{e.attachment && <div className={eb("relative flex h-12 w-fit max-w-full min-w-52 shrink-0 items-center overflow-hidden rounded-[calc(var(--rb-r-xl,12px))] border border-transparent bg-white pe-3 text-neutral-900 dark:text-neutral-100 shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] has-[[data-actions]]:pe-1.5 dark:bg-neutral-800", "mt-2")}><span className="flex size-12 shrink-0 items-center justify-center self-stretch border-r border-transparent bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-100/6"><__mod_22728.n icon={__mod_48094.A} size={18} strokeWidth={2} aria-hidden="true" /></span><span className="flex min-w-0 flex-1 flex-col gap-0.5 px-3"><span className={eb(eh, "truncate")}>{e.attachment}</span></span></div>}<p className={eb(ev, "mt-1 flex gap-x-2", "user" === e.from && "justify-end", ef[a + 1]?.from === e.from && "sr-only")}><span>{e.name}</span><span>{e.at}</span></p></div></div>)}<div className="flex flex-wrap gap-1.5 pt-1">{eg.map(e => <button type="button" className="relative inline-flex h-8 max-w-full min-w-0 shrink-0 cursor-pointer items-center gap-1.5 whitespace-nowrap rounded-[calc(var(--rb-r-full,999px))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] px-3.5 text-[14px]/[18px] font-bold text-neutral-900 dark:text-neutral-100 select-none transition-[background-color,border-color,box-shadow,color,scale,translate,outline-color] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:translate-y-px active:duration-[90ms] motion-reduce:active:translate-y-0 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] aria-pressed:bg-none aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-pressed:shadow-[inset_0_0_0_1.5px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14)] disabled:cursor-not-allowed disabled:text-neutral-900/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-pressed:shadow-[inset_0_0_0_1.5px_var(--rb-accent,oklch(81%_0.16_163))] dark:aria-expanded:bg-neutral-800 dark:disabled:text-neutral-100/40">{e}</button>)}</div><div className="flex items-center gap-2 pt-1"><p className={ek}>Was this helpful?</p>{[{
                  key: "up",
                  icon: __mod_47744.A,
                  label: "Helpful"
                }, {
                  key: "down",
                  icon: __mod_31581.A,
                  label: "Not helpful"
                }].map(({
                  key: e,
                  icon: a,
                  label: n
                }) => <button type="button" aria-label={n} aria-pressed={r === e} onClick={() => i(r === e ? null : e)} className={eb(eu, em)}><__mod_22728.n icon={a} size={18} strokeWidth={2} aria-hidden="true" /></button>)}</div></div><div aria-hidden="true" className={eb("bg-linear-to-b from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 top-0 h-8", s.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={eb("bg-linear-to-t from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 bottom-0 h-8", s.end ? "opacity-100" : "opacity-0")} /></div><div className="shrink-0 px-1"><form onSubmit={e => {
              e.preventDefault(), a("");
            }} className="relative flex w-full min-w-0 flex-col rounded-[calc(min(var(--rb-r-6xl,26px),min(var(--rb-r-full,999px),16px)_+_8px))] border border-transparent bg-white text-neutral-900 dark:text-neutral-100 shadow-[0_0_0_1px_rgb(84_62_32/0.07),0_1px_2px_rgb(84_62_32/0.06),0_8px_22px_-10px_rgb(84_62_32/0.20)] transition-[box-shadow] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] focus-within:shadow-[0_0_0_1.5px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black),0_0_0_5px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent),0_8px_22px_-10px_rgb(84_62_32/0.2)] dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_0_0_1px_rgb(0_0_0/0.6),0_10px_24px_-12px_rgb(0_0_0/0.8)] dark:focus-within:shadow-[0_0_0_1.5px_var(--rb-accent,oklch(81%_0.16_163)),0_0_0_5px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)]"><div className="flex min-w-0 items-end gap-1 p-2"><label htmlFor="chat-4-composer" className="sr-only">Message support</label><input id="chat-4-composer" value={e} onChange={e => a(e.target.value)} placeholder="Type your reply" className="max-h-40 min-h-6 min-w-0 flex-auto resize-none bg-transparent px-1.5 py-1.5 field-sizing-content text-[15px]/[22px] font-medium text-neutral-900 dark:text-neutral-100 outline-none placeholder:text-neutral-900/55 dark:placeholder:text-neutral-100/55" /><button type="button" aria-label="Attach file" className={eb(eu, em)}><__mod_22728.n icon={__mod_48094.A} size={18} strokeWidth={2} aria-hidden="true" /></button><button type="submit" aria-label="Send message" disabled={!e.trim()} className={eb("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_68%,white),var(--rb-accent,oklch(84%_0.15_165)))] text-[var(--rb-accent-fg,oklch(26%_0.06_168))] shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_4px_10px_-4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_80%,transparent)] hover:not-disabled:-translate-y-px hover:not-disabled:brightness-[1.04] hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_7px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_85%,transparent)] active:not-disabled:translate-y-px active:not-disabled:brightness-[0.98] active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_55%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] motion-reduce:hover:translate-y-0 disabled:opacity-45 disabled:shadow-none dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_78%,white),var(--rb-accent,oklch(81%_0.16_163)))] dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_6px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,transparent)] dark:hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_9px_22px_-8px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_60%,transparent)] dark:active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_45%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black)] dark:disabled:shadow-none", em)}><__mod_22728.n icon={__mod_55410.A} size={18} strokeWidth={2} aria-hidden="true" /></button></div></form></div><p className={eb(ek, "flex items-center justify-center gap-1.5 py-1")}><__mod_22728.n icon={__mod_12556.A} size={14} strokeWidth={2} aria-hidden="true" />Rated 4.8 by 2,140 customers this month</p></div></div>;
    },
    "chat-5": function () {
      let [e, a] = (0, React.useState)(""),
        {
          ref: r,
          edges: i,
          onScroll: o
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
        let e = r.current;
        if (!e) return;
        let a = !0,
          t = () => {
            a && (e.scrollTop = e.scrollHeight);
          },
          n = () => {
            a = e.scrollHeight - e.scrollTop - e.clientHeight < 24;
          };
        t(), e.addEventListener("scroll", n, {
          passive: !0
        });
        let l = e.ownerDocument.defaultView,
          i = l?.ResizeObserver ? new l.ResizeObserver(t) : null;
        for (let a of Array.from(e.children)) i?.observe(a);
        return () => {
          e.removeEventListener("scroll", n), i?.disconnect();
        };
      }, [r]), <div className={ey("bg-white dark:bg-neutral-950", "text-neutral-900 dark:text-neutral-100", "flex h-full min-h-[740px] w-full flex-col overflow-hidden p-4 sm:p-6")}><div className={ey("relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 shadow-[inset_0_0_0_1px_rgb(84_62_32/0.05)] dark:shadow-[inset_0_0_0_1px_rgb(255_255_255/0.05)]", "min-h-0 flex-1 gap-1")}><div className={ey("flex min-h-12 min-w-0 shrink-0 items-center gap-2 px-4 has-[button]:pe-2.5", "justify-between gap-3 py-3")}><div className="min-w-0"><h2 className={ey(eA, "truncate")}>Onboarding redesign</h2><p className={ey(eO, "mt-0.5 flex gap-x-3 truncate")}><span>9 members</span><span>3 online</span></p></div><div className="flex shrink-0 items-center gap-2 pe-2"><div aria-hidden="true" className={ey("flex items-center *:not-first:-ms-1.5 *:not-last:[mask-image:radial-gradient(50%_50%_at_calc(150%-6px)_50%,transparent_calc(100%+1.5px),#000_calc(100%+2px))]", "hidden sm:flex")}>{["PR", "TL", "NO", "+6"].map(e => <span className={ey(eM, "size-[28px]")}><span className={eC}>{e.startsWith("+") ? e : e.slice(0, 1)}</span></span>)}</div><button type="button" className={ey(eS, "h-10 gap-2 rounded-[calc(var(--rb-r-full,999px))] px-5 text-[15px]/[20px] font-bold")}><__mod_22728.n icon={__mod_88366.A} size={18} strokeWidth={2} aria-hidden="true" />Members</button></div></div><div className={ey("mx-1 mb-1 flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-5xl,22px))] border border-transparent bg-white dark:bg-neutral-950 shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] [&:has(+*)]:mb-0", "relative min-h-0 flex-1")}><div ref={r} onScroll={o} className="flex min-h-0 flex-1 flex-col space-y-4 overflow-y-auto p-3 [overflow-anchor:none] [&>*:first-child]:mt-auto"><p className={ey(eT, "text-center")}>Today</p>{eP.map((e, a) => {
                let r = a > 0 && eP[a - 1].author === e.author,
                  n = eP[a + 1]?.author === e.author;
                return <div className={ey("flex items-start gap-3", n && "mb-0")}>{r ? <span aria-hidden="true" className="w-8 shrink-0" /> : <span aria-hidden={!0} className={eM}><span className={eC}>{e.initials}</span></span>}<div className="min-w-0 flex-1"><p className={ey("flex flex-wrap items-baseline gap-x-2", r && "sr-only")}><span className={eA}>{e.author}</span><span className={eT}>{e.at}</span></p>{e.body && <p className={ey(ez, "text-neutral-900/78 dark:text-neutral-100/78", "mt-1")}>{e.body}</p>}{e.image && <div className={ey("relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] text-neutral-900 dark:text-neutral-100 shadow-[0_0_0_1px_rgb(84_62_32/0.07),0_1px_2px_rgb(84_62_32/0.06),0_8px_22px_-10px_rgb(84_62_32/0.20)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_0_0_1px_rgb(0_0_0/0.6),0_10px_24px_-12px_rgb(0_0_0/0.8)]", "mt-2 max-w-[300px] p-2")}><div className={ey("bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-100/8", "rounded-[var(--rb-r-4xl,18px)]", "flex aspect-[16/10] items-center justify-center")}><__mod_22728.n icon={__mod_22776.A} size={24} strokeWidth={2} aria-hidden="true" className={eN} /></div><div className="flex items-center justify-between gap-3 ps-2 pe-1 pt-2"><div className="min-w-0"><p className={ey(eA, "truncate")}>{e.image.name}</p><p className={ey(eD, "mt-0.5 flex gap-x-2 truncate")}>{e.image.meta.map(e => <span>{e}</span>)}</p></div><button type="button" aria-label={`Download ${e.image.name}`} className={ey(eW, eR)}><__mod_22728.n icon={__mod_92752.A} size={18} strokeWidth={2} aria-hidden="true" /></button></div></div>}{e.file && <div className="mt-2 max-w-[380px]"><div className="relative flex h-12 w-fit max-w-full min-w-52 shrink-0 items-center overflow-hidden rounded-[calc(var(--rb-r-xl,12px))] border border-transparent bg-white pe-3 text-neutral-900 dark:text-neutral-100 shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] has-[[data-actions]]:pe-1.5 dark:bg-neutral-800"><span className="flex size-12 shrink-0 items-center justify-center self-stretch border-r border-transparent bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-100/6"><__mod_22728.n icon={__mod_31964.A} size={18} strokeWidth={2} aria-hidden="true" /></span><div className="flex min-w-0 flex-1 flex-col gap-0.5 px-3"><p className={ey(eA, "truncate")}>{e.file.name}</p><p className={ey(eD, "flex gap-x-2 truncate")}>{e.file.meta.map(e => <span>{e}</span>)}</p></div><span data-actions={!0} className="flex shrink-0"><button type="button" aria-label={`Download ${e.file.name}`} className={ey(eW, eR)}><__mod_22728.n icon={__mod_92752.A} size={18} strokeWidth={2} aria-hidden="true" /></button></span></div></div>}{(e.reactions || e.replies) && <div className="mt-2 flex flex-wrap items-center gap-1.5">{e.reactions?.map(e => <button type="button" aria-pressed={e.mine} className={ey("relative inline-flex h-8 max-w-full min-w-0 shrink-0 cursor-pointer items-center gap-1.5 whitespace-nowrap rounded-[calc(var(--rb-r-full,999px))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] px-3.5 text-[14px]/[18px] font-bold text-neutral-900 dark:text-neutral-100 select-none transition-[background-color,border-color,box-shadow,color,scale,translate,outline-color] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:translate-y-px active:duration-[90ms] motion-reduce:active:translate-y-0 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] aria-pressed:bg-none aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-pressed:shadow-[inset_0_0_0_1.5px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14)] disabled:cursor-not-allowed disabled:text-neutral-900/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-pressed:shadow-[inset_0_0_0_1.5px_var(--rb-accent,oklch(81%_0.16_163))] dark:aria-expanded:bg-neutral-800 dark:disabled:text-neutral-100/40", "tabular-nums")}><span aria-hidden={!0}>{e.emoji}</span>{e.count}</button>)}{e.reactions && <button type="button" aria-label="Add reaction" className={ey(eS, eR)}><__mod_22728.n icon={__mod_89886.A} size={18} strokeWidth={2} aria-hidden="true" /></button>}{e.replies && <button type="button" className={ey(eS, "h-8 gap-1.5 rounded-[calc(var(--rb-r-full,999px))] px-3.5 text-[14px]/[18px] font-bold")}>{e.replies} replies</button>}</div>}</div></div>;
              })}<p className={eO}>Tomas Lindqvist is typing…</p></div><div aria-hidden="true" className={ey("bg-linear-to-b from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 top-0 h-8", i.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={ey("bg-linear-to-t from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 bottom-0 h-8", i.end ? "opacity-100" : "opacity-0")} /></div><div className="shrink-0 px-1 pb-1"><form onSubmit={e => {
              e.preventDefault(), a("");
            }} className={ey("relative flex w-full min-w-0 flex-col rounded-[calc(min(var(--rb-r-6xl,26px),min(var(--rb-r-full,999px),16px)_+_8px))] border border-transparent bg-white text-neutral-900 dark:text-neutral-100 shadow-[0_0_0_1px_rgb(84_62_32/0.07),0_1px_2px_rgb(84_62_32/0.06),0_8px_22px_-10px_rgb(84_62_32/0.20)] transition-[box-shadow] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] focus-within:shadow-[0_0_0_1.5px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black),0_0_0_5px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent),0_8px_22px_-10px_rgb(84_62_32/0.2)] dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_0_0_1px_rgb(0_0_0/0.6),0_10px_24px_-12px_rgb(0_0_0/0.8)] dark:focus-within:shadow-[0_0_0_1.5px_var(--rb-accent,oklch(81%_0.16_163)),0_0_0_5px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)]", "rounded-[var(--rb-r-5xl,22px)]")}><div className="flex min-w-0 items-end gap-1 p-2"><label htmlFor="chat-5-composer" className="sr-only">Message Onboarding redesign</label><input id="chat-5-composer" value={e} onChange={e => a(e.target.value)} placeholder="Message #onboarding-redesign" className="max-h-40 min-h-6 min-w-0 flex-auto resize-none bg-transparent px-1.5 py-1.5 field-sizing-content text-[15px]/[22px] font-medium text-neutral-900 dark:text-neutral-100 outline-none placeholder:text-neutral-900/55 dark:placeholder:text-neutral-100/55" />{[{
                  icon: __mod_89886.A,
                  label: "Attach file"
                }, {
                  icon: __mod_49322.A,
                  label: "Add emoji"
                }].map(({
                  icon: e,
                  label: a
                }) => <button type="button" aria-label={a} className={ey(eW, eR)}><__mod_22728.n icon={e} size={18} strokeWidth={2} aria-hidden="true" /></button>)}<button type="submit" aria-label="Send message" disabled={!e.trim()} className={ey("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_68%,white),var(--rb-accent,oklch(84%_0.15_165)))] text-[var(--rb-accent-fg,oklch(26%_0.06_168))] shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_4px_10px_-4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_80%,transparent)] hover:not-disabled:-translate-y-px hover:not-disabled:brightness-[1.04] hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_7px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_85%,transparent)] active:not-disabled:translate-y-px active:not-disabled:brightness-[0.98] active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_55%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] motion-reduce:hover:translate-y-0 disabled:opacity-45 disabled:shadow-none dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_78%,white),var(--rb-accent,oklch(81%_0.16_163)))] dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_6px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,transparent)] dark:hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_9px_22px_-8px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_60%,transparent)] dark:active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_45%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black)] dark:disabled:shadow-none", eR)}><__mod_22728.n icon={__mod_55410.A} size={18} strokeWidth={2} aria-hidden="true" /></button></div></form></div></div></div>;
    },
    "chat-6": function () {
      let [e, a] = (0, React.useState)(""),
        {
          ref: r,
          edges: i,
          onScroll: o
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
      return <div className={eB("bg-white dark:bg-neutral-950", eL, "flex h-full min-h-[680px] w-full flex-col overflow-hidden p-4 sm:p-6")}><div className={eB("relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 shadow-[inset_0_0_0_1px_rgb(84_62_32/0.05)] dark:shadow-[inset_0_0_0_1px_rgb(255_255_255/0.05)]", "grid min-h-0 flex-1 gap-1 lg:grid-cols-[1fr_220px]")}><div className="flex min-h-[440px] min-w-0 flex-col gap-1 lg:min-h-0"><div className={eB("flex min-h-12 min-w-0 shrink-0 items-center gap-2 px-4 has-[button]:pe-2.5", "justify-between gap-3 py-3")}><div className="min-w-0"><h2 className={eB(eq, "flex items-center gap-2")}><__mod_22728.n icon={__mod_13426.A} size={16} strokeWidth={2} aria-hidden="true" className="shrink-0" /><span className="truncate">Live: designing dense interfaces</span></h2><p className={eB(eG, "mt-0.5 flex gap-x-3 truncate tabular-nums")}><span>1,284 watching</span><span>41 min in</span></p></div><button type="button" className={eB("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] text-neutral-900 dark:text-neutral-100 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] active:not-disabled:translate-y-px active:not-disabled:shadow-[inset_0_1px_3px_rgb(84_62_32/0.16),0_0_0_1px_rgb(84_62_32/0.10)] dark:active:not-disabled:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14),0_0_0_1px_rgb(84_62_32/0.10)] dark:aria-expanded:bg-neutral-800 dark:aria-expanded:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] disabled:bg-none disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] disabled:text-neutral-900/40 disabled:shadow-none dark:disabled:bg-neutral-800/60 dark:disabled:text-neutral-100/40", "h-10 gap-2 rounded-[calc(var(--rb-r-full,999px))] px-5 text-[15px]/[20px] font-bold", "me-2")}>Follow</button></div><div className="flex items-start gap-2.5 px-4 py-2.5"><__mod_22728.n icon={__mod_90227.A} size={16} strokeWidth={2} aria-hidden="true" className={eB(eF, "mt-0.5 shrink-0")} /><p className={eB(eV, eI)}>Pinned by Junie Park: slides and the sample file are in the description. The recording goes out to everyone tomorrow.</p></div><div className={eB("mx-1 mb-1 flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-5xl,22px))] border border-transparent bg-white dark:bg-neutral-950 shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] [&:has(+*)]:mb-0", "relative min-h-0 flex-1")}><div ref={r} onScroll={o} className="flex min-h-0 flex-1 flex-col space-y-2.5 overflow-y-auto p-3 [&>*:first-child]:mt-auto">{eJ.map(e => <p className={eB(eV, eI)}><span aria-hidden={!0} className={eB("relative inline-flex size-8 shrink-0 overflow-hidden rounded-full select-none", "mr-2 size-[20px] align-middle")}><span className="flex size-full items-center justify-center rounded-[inherit] bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_24%,white)] text-[12px]/[16px] font-extrabold tabular-nums text-neutral-900 dark:text-neutral-100 dark:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_22%,var(--color-neutral-900))]">{e.initials.slice(0, 1)}</span></span>{e.role && <span className={eB("inline-flex h-5.5 min-w-5.5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden whitespace-nowrap rounded-[calc(var(--rb-r-full,999px))] px-2.5 text-[12px]/[16px] font-bold tabular-nums", "bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] text-neutral-900 dark:text-neutral-100 dark:bg-neutral-100/12", "mr-1.5 align-middle")}>{"mod" === e.role && <__mod_22728.n icon={__mod_36122.A} size={14} strokeWidth={2} aria-hidden="true" />}{"host" === e.role ? "Host" : "Mod"}</span>}<span className={eB(eq, eL, "mr-1.5")}>{e.name}</span>{e.text}</p>)}</div><div aria-hidden="true" className={eB("bg-linear-to-b from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 top-0 h-8", i.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={eB("bg-linear-to-t from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 bottom-0 h-8", i.end ? "opacity-100" : "opacity-0")} /></div><div className="shrink-0 px-1 pb-1"><form onSubmit={e => {
                e.preventDefault(), a("");
              }} className={eB("relative flex w-full min-w-0 flex-col rounded-[calc(min(var(--rb-r-6xl,26px),min(var(--rb-r-full,999px),16px)_+_8px))] border border-transparent bg-white text-neutral-900 dark:text-neutral-100 shadow-[0_0_0_1px_rgb(84_62_32/0.07),0_1px_2px_rgb(84_62_32/0.06),0_8px_22px_-10px_rgb(84_62_32/0.20)] transition-[box-shadow] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] focus-within:shadow-[0_0_0_1.5px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black),0_0_0_5px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent),0_8px_22px_-10px_rgb(84_62_32/0.2)] dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_0_0_1px_rgb(0_0_0/0.6),0_10px_24px_-12px_rgb(0_0_0/0.8)] dark:focus-within:shadow-[0_0_0_1.5px_var(--rb-accent,oklch(81%_0.16_163)),0_0_0_5px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)]", "rounded-[var(--rb-r-5xl,22px)]")}><div className="flex min-w-0 items-end gap-1 p-2"><label htmlFor="chat-6-composer" className="sr-only">Send a message to the stream</label><input id="chat-6-composer" value={e} onChange={e => a(e.target.value)} placeholder="Say something" className="max-h-40 min-h-6 min-w-0 flex-auto resize-none bg-transparent px-1.5 py-1.5 field-sizing-content text-[15px]/[22px] font-medium text-neutral-900 dark:text-neutral-100 outline-none placeholder:text-neutral-900/55 dark:placeholder:text-neutral-100/55" /><button type="button" aria-label="Add emoji" className={eB("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-transparent text-neutral-900 hover:not-disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] active:not-disabled:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] disabled:text-neutral-900/40 dark:text-neutral-100 dark:hover:not-disabled:bg-neutral-100/8 dark:active:not-disabled:bg-neutral-100/12 dark:aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:disabled:text-neutral-100/40", e$)}><__mod_22728.n icon={__mod_49322.A} size={18} strokeWidth={2} aria-hidden="true" /></button><button type="submit" aria-label="Send message" disabled={!e.trim()} className={eB("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_68%,white),var(--rb-accent,oklch(84%_0.15_165)))] text-[var(--rb-accent-fg,oklch(26%_0.06_168))] shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_4px_10px_-4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_80%,transparent)] hover:not-disabled:-translate-y-px hover:not-disabled:brightness-[1.04] hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_7px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_85%,transparent)] active:not-disabled:translate-y-px active:not-disabled:brightness-[0.98] active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_55%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] motion-reduce:hover:translate-y-0 disabled:opacity-45 disabled:shadow-none dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_78%,white),var(--rb-accent,oklch(81%_0.16_163)))] dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_6px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,transparent)] dark:hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_9px_22px_-8px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_60%,transparent)] dark:active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_45%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black)] dark:disabled:shadow-none", e$)}><__mod_22728.n icon={__mod_55410.A} size={18} strokeWidth={2} aria-hidden="true" /></button></div></form></div></div><aside className="hidden min-h-0 flex-col overflow-hidden lg:flex"><div className="px-4 py-3"><h3 className={eq}>In the room</h3><p className={eB(eG, "mt-0.5 tabular-nums")}>8 of 1,284 shown</p></div><div className="min-h-0 flex-1 space-y-4 overflow-y-auto px-2 pb-2">{eY.map(e => <div><p className={eB("text-[13px]/[16px] font-semibold tabular-nums", eF, "px-2")}>{e.group}</p><ul className="mt-1.5 space-y-0.5">{e.people.map(e => <li><button type="button" className="flex h-10 w-full min-w-0 cursor-pointer items-center gap-2.5 rounded-[calc(var(--rb-r-full,999px))] px-3 text-left text-[15px]/[20px] font-semibold text-neutral-900/75 transition-[background-color,box-shadow,color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] [&_svg]:shrink-0 hover:bg-neutral-900/5 hover:text-neutral-900 aria-[current=page]:bg-white aria-[current=page]:font-bold aria-[current=page]:text-neutral-900 aria-[current=page]:shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:text-neutral-100/75 dark:hover:bg-neutral-100/6 dark:hover:text-neutral-100 dark:aria-[current=page]:bg-[color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800))] dark:aria-[current=page]:text-neutral-100 dark:aria-[current=page]:shadow-[inset_0_1px_0_rgb(255_255_255/0.08),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)]"><span className="truncate">{e}</span></button></li>)}</ul></div>)}</div></aside></div></div>;
    }
  },
  eQ = {
    "chat-1": 720,
    "chat-2": 680,
    "chat-3": 800,
    "chat-4": 640,
    "chat-5": 740,
    "chat-6": 680
  };

export { eK as components };
export { eQ as heights };

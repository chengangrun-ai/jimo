import { motion, AnimatePresence } from "motion/react";
import * as __mod_2605 from "../_helpers/2605";
import * as __mod_36586 from "../_helpers/36586";
import * as __mod_3980 from "../_helpers/3980";
import * as __mod_44647 from "../_helpers/44647";
import * as __mod_20484 from "../_helpers/20484";
import * as __mod_94089 from "../_helpers/94089";
import * as __mod_27476 from "../_helpers/27476";
import * as __mod_46772 from "../_helpers/46772";
import * as __mod_68099 from "../_helpers/68099";
import * as __mod_50969 from "../_helpers/50969";
import * as __mod_22728 from "../_helpers/22728";
import * as __mod_62955 from "../_helpers/62955";
import * as __mod_89289 from "../_helpers/89289";
import * as __mod_13473 from "../_helpers/13473";
import * as __mod_67812 from "../_helpers/67812";
import * as __mod_20320 from "../_helpers/20320";
import * as __mod_36474 from "../_helpers/36474";
import * as __mod_46176 from "../_helpers/46176";
import * as __mod_47962 from "../_helpers/47962";
import * as __mod_54810 from "../_helpers/54810";
import * as __mod_90987 from "../_helpers/90987";
import * as __mod_48419 from "../_helpers/48419";
import * as __mod_22830 from "../_helpers/22830";
import * as __mod_18976 from "../_helpers/18976";
import * as __mod_29635 from "../_helpers/29635";
import * as __mod_20148 from "../_helpers/20148";
import * as __mod_22670 from "../_helpers/22670";
import * as __mod_52975 from "../_helpers/52975";
import * as __mod_3810 from "../_helpers/3810";
import * as __mod_5042 from "../_helpers/5042";
import * as __mod_65174 from "../_helpers/65174";
/**
 * Notifications 5
 * slug: notifications-5
 * category: notifications
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let k = (...e) => e.filter(Boolean).join(" "),
  v = "text-neutral-900 dark:text-neutral-100",
  f = "text-neutral-900/78 dark:text-neutral-100/78",
  g = "text-neutral-900/62 dark:text-neutral-100/62",
  w = "relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-transparent text-neutral-900 hover:not-disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] active:not-disabled:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] disabled:text-neutral-900/40 dark:text-neutral-100 dark:hover:not-disabled:bg-neutral-100/8 dark:active:not-disabled:bg-neutral-100/12 dark:aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:disabled:text-neutral-100/40",
  y = "size-8 rounded-[calc(var(--rb-r-full,999px))]",
  j = k("text-[17px]/[22px] font-extrabold", v),
  N = k("text-[14px]/[20px] font-medium", f),
  A = k("text-[13px]/[16px] font-semibold tabular-nums", g),
  z = k("text-[13px]/[16px] font-bold tabular-nums", g),
  S = k("font-bold", v),
  C = [.2, 0, 0, 1],
  R = ["All", "Unread", "Mentions"],
  E = {
    mention: __mod_2605.A,
    comment: __mod_36586.A,
    review: __mod_3980.A,
    member: __mod_44647.A,
    security: __mod_20484.A
  },
  W = [{
    id: "n1",
    kind: "mention",
    actor: "Ana Reyes",
    action: "mentioned you in",
    target: "Q3 rollout plan",
    detail: "Can you confirm the migration window before we lock the schedule with Northwind?",
    time: "12m",
    group: "Today",
    unread: !0
  }, {
    id: "n2",
    kind: "review",
    actor: "Wei Chen",
    action: "requested review on",
    target: "Billing usage meter",
    detail: "14 files changed across the metering service and the invoice job.",
    time: "48m",
    group: "Today",
    unread: !0
  }, {
    id: "n3",
    kind: "comment",
    actor: "Marco Silva",
    action: "replied in",
    target: "Onboarding checklist",
    detail: "Moved the workspace step ahead of the invite step. Looks cleaner.",
    time: "2h",
    group: "Today",
    unread: !0
  }, {
    id: "n4",
    kind: "member",
    actor: "Priya Nandakumar",
    action: "joined",
    target: "Cedar Labs",
    detail: "Invited by you as an editor.",
    time: "5h",
    group: "Today",
    unread: !1
  }, {
    id: "n5",
    kind: "security",
    actor: "Halcyon",
    action: "signed in from a new device on",
    target: "macOS, Lisbon",
    detail: "If this was not you, revoke the session and rotate your keys.",
    time: "Yesterday",
    group: "Yesterday",
    unread: !0
  }, {
    id: "n6",
    kind: "mention",
    actor: "Sofia Alvarez",
    action: "mentioned you in",
    target: "Retention teardown",
    detail: "Pulled your cohort chart into the summary. Shout if that is stale.",
    time: "Yesterday",
    group: "Yesterday",
    unread: !1
  }, {
    id: "n7",
    kind: "comment",
    actor: "Marco Silva",
    action: "resolved your comment in",
    target: "Meridian import",
    time: "2d",
    group: "Earlier",
    unread: !1
  }, {
    id: "n8",
    kind: "review",
    actor: "Ana Reyes",
    action: "approved",
    target: "Sidebar density pass",
    time: "3d",
    group: "Earlier",
    unread: !1
  }],
  M = ["Today", "Yesterday", "Earlier"],
  D = e => {
    let r = "ArrowRight" === e.key || "ArrowDown" === e.key ? 1 : "ArrowLeft" === e.key || "ArrowUp" === e.key ? -1 : 0;
    if (!r && "Home" !== e.key && "End" !== e.key) return;
    let a = Array.from(e.currentTarget.querySelectorAll('[role="radio"]:not(:disabled)')),
      t = a.indexOf(e.target);
    if (t < 0) return;
    e.preventDefault();
    let n = "Home" === e.key ? 0 : "End" === e.key ? a.length - 1 : (t + r + a.length) % a.length;
    a[n].focus(), a[n].click();
  };
function I({
  unread: e,
  children: r
}) {
  return e ? <strong className={S}>{r}</strong> : <span className={v}>{r}</span>;
}
let U = (...e) => e.filter(Boolean).join(" "),
  H = "text-neutral-900 dark:text-neutral-100",
  $ = "text-neutral-900/78 dark:text-neutral-100/78",
  B = "relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] text-neutral-900 dark:text-neutral-100 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] active:not-disabled:translate-y-px active:not-disabled:shadow-[inset_0_1px_3px_rgb(84_62_32/0.16),0_0_0_1px_rgb(84_62_32/0.10)] dark:active:not-disabled:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14),0_0_0_1px_rgb(84_62_32/0.10)] dark:aria-expanded:bg-neutral-800 dark:aria-expanded:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] disabled:bg-none disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] disabled:text-neutral-900/40 disabled:shadow-none dark:disabled:bg-neutral-800/60 dark:disabled:text-neutral-100/40",
  Y = U("text-[17px]/[22px] font-extrabold", H),
  F = U("text-[14px]/[20px] font-medium", "text-neutral-900/62 dark:text-neutral-100/62"),
  V = [.2, 0, 0, 1],
  Q = {
    type: "spring",
    bounce: 0,
    duration: .35
  },
  K = [{
    variant: "success",
    label: "Success",
    title: "Deployment live",
    body: "halcyon-web, production, 42s",
    undo: !0
  }, {
    variant: "error",
    label: "Error",
    title: "Import failed",
    body: "Row 118 has an unmapped column."
  }, {
    variant: "info",
    label: "Info",
    title: "Wei Chen shared a board",
    body: "Q3 rollout, you have edit access."
  }, {
    variant: "loading",
    label: "Progress",
    title: "Uploading contacts",
    body: "2,480 records from Northwind."
  }],
  X = {
    success: __mod_94089.A,
    error: __mod_27476.A,
    info: __mod_46772.A,
    loading: __mod_68099.A
  },
  G = {
    success: $,
    error: "text-[oklch(51%_0.18_26)] dark:text-[oklch(76%_0.14_26)]",
    info: $,
    loading: $
  };
function J({
  item: e,
  paused: r,
  onDismiss: a,
  onSettle: l,
  children: c
}) {
  let d = (0, __mod_50969.I)(),
    {
      id: _,
      variant: x
    } = e;
  return (0, React.useEffect)(() => {
    if ("loading" !== x) return;
    let e = window.setTimeout(() => l(_), 2200);
    return () => window.clearTimeout(e);
  }, [_, x, l]), (0, React.useEffect)(() => {
    if (r || "loading" === x) return;
    let e = window.setTimeout(() => a(_), 6e3);
    return () => window.clearTimeout(e);
  }, [_, r, x, a]), <div className={U("pointer-events-auto grid w-full grid-cols-[minmax(0,1fr)_auto_auto] items-start gap-x-3 overflow-hidden rounded-[calc(var(--rb-r-3xl,16px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] py-3.5 ps-4 pe-2 text-neutral-900 dark:text-neutral-100 shadow-[0_0_0_1px_rgb(84_62_32/0.08),0_24px_56px_-20px_rgb(84_62_32/0.34),0_6px_16px_-8px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.65),0_24px_56px_-16px_rgb(0_0_0/0.8)]", "relative h-full")}><div className="flex min-w-0 items-start gap-3 self-center">{c}<div className="min-w-0 flex-1"><p className={U("text-[15px]/[20px] font-extrabold", "truncate")}>{e.title}</p><p className={U("mt-0.5 text-[14px]/[20px] font-medium text-neutral-900/78 dark:text-neutral-100/78", "truncate")}>{e.body}</p></div></div>{e.undo && <button type="button" onClick={() => a(_)} className={U(B, "h-7 gap-1.5 rounded-[calc(var(--rb-r-full,999px))] px-3 text-[13px]/[16px] font-bold tabular-nums", "self-center")}><__mod_22728.n icon={__mod_62955.A} size={16} strokeWidth={2} aria-hidden="true" />Undo</button>}<button type="button" onClick={() => a(_)} aria-label="Dismiss" className={U("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-transparent text-neutral-900 hover:not-disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] active:not-disabled:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] disabled:text-neutral-900/40 dark:text-neutral-100 dark:hover:not-disabled:bg-neutral-100/8 dark:active:not-disabled:bg-neutral-100/12 dark:aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:disabled:text-neutral-100/40", "size-7 rounded-[calc(var(--rb-r-full,999px))]", "col-start-3 self-center")}><__mod_22728.n icon={__mod_89289.A} size={18} strokeWidth={2} aria-hidden="true" /></button>{"loading" !== x && !d && <motion.span initial={{
      scaleX: 1
    }} animate={{
      scaleX: +!!r
    }} transition={{
      duration: 6 * !r,
      ease: "linear"
    }} className="pointer-events-none absolute inset-x-0 bottom-0 h-1 origin-left bg-[var(--rb-accent,oklch(84%_0.15_165))] motion-reduce:hidden dark:bg-[var(--rb-accent,oklch(81%_0.16_163))]" />}</div>;
}
let ea = (...e) => e.filter(Boolean).join(" "),
  et = "bg-white dark:bg-neutral-950",
  en = "text-neutral-900 dark:text-neutral-100",
  ei = "text-neutral-900/62 dark:text-neutral-100/62",
  el = "text-[14px]/[20px] font-medium",
  eo = "relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] text-neutral-900 dark:text-neutral-100 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] active:not-disabled:translate-y-px active:not-disabled:shadow-[inset_0_1px_3px_rgb(84_62_32/0.16),0_0_0_1px_rgb(84_62_32/0.10)] dark:active:not-disabled:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14),0_0_0_1px_rgb(84_62_32/0.10)] dark:aria-expanded:bg-neutral-800 dark:aria-expanded:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] disabled:bg-none disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] disabled:text-neutral-900/40 disabled:shadow-none dark:disabled:bg-neutral-800/60 dark:disabled:text-neutral-100/40",
  es = "h-10 gap-2 rounded-[calc(var(--rb-r-full,999px))] px-5 text-[15px]/[20px] font-bold",
  ec = "relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 shadow-[inset_0_0_0_1px_rgb(84_62_32/0.05)] dark:shadow-[inset_0_0_0_1px_rgb(255_255_255/0.05)]",
  ed = "mx-1 mb-1 flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-5xl,22px))] border border-transparent bg-white dark:bg-neutral-950 shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] [&:has(+*)]:mb-0",
  e_ = ea("text-[17px]/[22px] font-extrabold", en),
  ex = ea(el, ei),
  eb = ea(el, "text-neutral-900/78 dark:text-neutral-100/78"),
  eu = ea("text-[13px]/[16px] font-semibold tabular-nums", ei),
  ep = ea("text-[15px]/[20px] font-bold", en),
  eh = [{
    key: "inApp",
    label: "In-app",
    icon: __mod_13473.A
  }, {
    key: "email",
    label: "Email",
    icon: __mod_67812.A
  }, {
    key: "push",
    label: "Push",
    icon: __mod_20320.A
  }],
  em = [{
    id: "mention",
    group: "Collaboration",
    label: "Mentions and replies",
    hint: "Someone names you in a comment or thread."
  }, {
    id: "assign",
    group: "Collaboration",
    label: "Assigned to you",
    hint: "A task, review or ticket lands in your queue."
  }, {
    id: "share",
    group: "Collaboration",
    label: "Shared with you",
    hint: "A board, document or dashboard is shared."
  }, {
    id: "invoice",
    group: "Account",
    label: "Invoices and receipts",
    hint: "Monthly statements for Cedar Labs."
  }, {
    id: "seats",
    group: "Account",
    label: "Seat changes",
    hint: "A member joins, leaves or changes role."
  }, {
    id: "signin",
    group: "Security",
    label: "New sign-in",
    hint: "A session starts on an unrecognised device."
  }, {
    id: "keys",
    group: "Security",
    label: "API key activity",
    hint: "A key is created, rotated or revoked."
  }],
  ek = {
    mention: {
      inApp: !0,
      email: !0,
      push: !0
    },
    assign: {
      inApp: !0,
      email: !0,
      push: !1
    },
    share: {
      inApp: !0,
      email: !1,
      push: !1
    },
    invoice: {
      inApp: !1,
      email: !0,
      push: !1
    },
    seats: {
      inApp: !0,
      email: !0,
      push: !1
    },
    signin: {
      inApp: !0,
      email: !0,
      push: !0
    },
    keys: {
      inApp: !0,
      email: !0,
      push: !1
    }
  },
  ev = ["Collaboration", "Account", "Security"],
  ef = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
function eg({
  checked: e,
  onChange: r,
  label: a
}) {
  return <button type="button" role="switch" aria-checked={e} aria-label={a} onClick={() => r(!e)} className="group relative inline-flex h-6 w-10 shrink-0 cursor-pointer items-center rounded-full bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] p-0.5 shadow-[inset_0_1px_2px_rgb(84_62_32/0.14),inset_0_0_0_1px_rgb(84_62_32/0.05)] transition-[background-color,box-shadow,outline-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:aria-[checked=false]:not-disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_94%,black)] aria-checked:bg-[var(--rb-accent,oklch(84%_0.15_165))] aria-checked:shadow-[inset_0_1px_2px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_55%,black),inset_0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_75%,black)] disabled:cursor-not-allowed disabled:opacity-45 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:bg-neutral-100/16 dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6)] dark:hover:aria-[checked=false]:not-disabled:bg-neutral-100/24 dark:aria-checked:bg-[var(--rb-accent,oklch(81%_0.16_163))] dark:aria-checked:shadow-[inset_0_1px_2px_rgb(0_0_0/0.35)]"><span className="pointer-events-none block h-5 w-5 rounded-full bg-white shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_2px_rgb(84_62_32/0.10),0_3px_8px_-2px_rgb(84_62_32/0.20)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.12),0_0_0_1px_rgb(0_0_0/0.6),0_2px_6px_-1px_rgb(0_0_0/0.6)] transition-[translate,width] duration-[280ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] motion-reduce:transition-none group-active:w-6 group-aria-checked:translate-x-4 group-aria-checked:group-active:translate-x-3 group-disabled:shadow-none dark:bg-white" /></button>;
}
let eS = (...e) => e.filter(Boolean).join(" "),
  eC = "text-neutral-900 dark:text-neutral-100",
  eR = "text-neutral-900/78 dark:text-neutral-100/78",
  eE = "text-neutral-900/62 dark:text-neutral-100/62",
  eW = "text-[14px]/[20px] font-medium",
  eM = "relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] text-neutral-900 dark:text-neutral-100 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] active:not-disabled:translate-y-px active:not-disabled:shadow-[inset_0_1px_3px_rgb(84_62_32/0.16),0_0_0_1px_rgb(84_62_32/0.10)] dark:active:not-disabled:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14),0_0_0_1px_rgb(84_62_32/0.10)] dark:aria-expanded:bg-neutral-800 dark:aria-expanded:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] disabled:bg-none disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] disabled:text-neutral-900/40 disabled:shadow-none dark:disabled:bg-neutral-800/60 dark:disabled:text-neutral-100/40",
  eD = "h-10 gap-2 rounded-[calc(var(--rb-r-full,999px))] px-5 text-[15px]/[20px] font-bold",
  eI = "text-[19px]/[24px] font-extrabold tracking-[-0.01em] text-neutral-900 dark:text-neutral-100",
  eT = eS("text-[17px]/[22px] font-extrabold", eC),
  eO = eS(eW, eR),
  eL = eS(eW, eE),
  eq = eS("text-[13px]/[16px] font-bold tabular-nums", eE),
  eP = [.2, 0, 0, 1],
  eU = ["Inbox", "Snoozed", "Archived"],
  eH = {
    review: __mod_3980.A,
    access: __mod_44647.A,
    incident: __mod_27476.A
  },
  e$ = [{
    id: "a1",
    kind: "access",
    actor: "Priya Nandakumar",
    summary: "requested admin access to",
    target: "Cedar Labs billing",
    time: "9m",
    view: "Inbox",
    unread: !0,
    body: "Priya needs to reconcile the October statement and issue two credits before the close on Friday. Access can be time-boxed to 7 days.",
    meta: [{
      label: "Requested role",
      value: "Billing admin"
    }, {
      label: "Current role",
      value: "Member"
    }, {
      label: "Duration",
      value: "7 days"
    }, {
      label: "Approver",
      value: "You"
    }],
    primary: "Grant access"
  }, {
    id: "a2",
    kind: "review",
    actor: "Wei Chen",
    summary: "requested your review on",
    target: "Usage metering rewrite",
    time: "52m",
    view: "Inbox",
    unread: !0,
    body: "Replaces the nightly aggregation job with a streaming counter. Adds a backfill script and a feature flag so we can roll back per workspace.",
    meta: [{
      label: "Repository",
      value: "halcyon/metering"
    }, {
      label: "Files changed",
      value: "14"
    }, {
      label: "Checks",
      value: "8 passing"
    }, {
      label: "Base",
      value: "main"
    }],
    primary: "Start review"
  }, {
    id: "a3",
    kind: "incident",
    actor: "Halcyon",
    summary: "raised a latency alert on",
    target: "eu-west ingest",
    time: "3h",
    view: "Inbox",
    unread: !1,
    body: "p95 crossed 800ms for 12 minutes and recovered without intervention. The queue depth peaked at 4,120 messages during the window.",
    meta: [{
      label: "Severity",
      value: "Warning"
    }, {
      label: "Duration",
      value: "12m"
    }, {
      label: "Peak p95",
      value: "812ms"
    }, {
      label: "Status",
      value: "Recovered"
    }],
    primary: "Open incident"
  }, {
    id: "a4",
    kind: "review",
    actor: "Ana Reyes",
    summary: "left changes requested on",
    target: "Sidebar density pass",
    time: "1d",
    view: "Snoozed",
    unread: !1,
    body: "Two comments on the collapsed rail widths and one on the tooltip delay. Everything else is approved.",
    meta: [{
      label: "Repository",
      value: "halcyon/web"
    }, {
      label: "Comments",
      value: "3"
    }, {
      label: "Checks",
      value: "6 passing"
    }, {
      label: "Snoozed until",
      value: "Tomorrow 09:00"
    }],
    primary: "Open pull request"
  }, {
    id: "a5",
    kind: "access",
    actor: "Marco Silva",
    summary: "was added to",
    target: "Northwind workspace",
    time: "2d",
    view: "Archived",
    unread: !1,
    body: "Marco accepted the invite and completed device enrolment. No further action is needed.",
    meta: [{
      label: "Role",
      value: "Editor"
    }, {
      label: "Invited by",
      value: "You"
    }, {
      label: "Device",
      value: "Enrolled"
    }, {
      label: "Status",
      value: "Active"
    }],
    primary: "View member"
  }],
  eB = ["Later today", "Tomorrow 09:00", "Next week", "Pick a date"],
  eY = e => {
    let r = "ArrowRight" === e.key || "ArrowDown" === e.key ? 1 : "ArrowLeft" === e.key || "ArrowUp" === e.key ? -1 : 0;
    if (!r && "Home" !== e.key && "End" !== e.key) return;
    let a = Array.from(e.currentTarget.querySelectorAll('[role="radio"]:not(:disabled)')),
      t = a.indexOf(e.target);
    if (t < 0) return;
    e.preventDefault();
    let n = "Home" === e.key ? 0 : "End" === e.key ? a.length - 1 : (t + r + a.length) % a.length;
    a[n].focus(), a[n].click();
  };
let eX = (...e) => e.filter(Boolean).join(" "),
  eG = "text-neutral-900 dark:text-neutral-100",
  eJ = "text-neutral-900/62 dark:text-neutral-100/62",
  eZ = "relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] text-neutral-900 dark:text-neutral-100 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] active:not-disabled:translate-y-px active:not-disabled:shadow-[inset_0_1px_3px_rgb(84_62_32/0.16),0_0_0_1px_rgb(84_62_32/0.10)] dark:active:not-disabled:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14),0_0_0_1px_rgb(84_62_32/0.10)] dark:aria-expanded:bg-neutral-800 dark:aria-expanded:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] disabled:bg-none disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] disabled:text-neutral-900/40 disabled:shadow-none dark:disabled:bg-neutral-800/60 dark:disabled:text-neutral-100/40",
  e0 = "mt-0.5 shrink-0 text-neutral-900/78 dark:text-neutral-100/78",
  e1 = eX("text-[17px]/[22px] font-extrabold", eG),
  e2 = eX("text-[14px]/[20px] font-medium", eJ),
  e5 = eX("text-[13px]/[16px] font-semibold tabular-nums", eJ),
  e8 = eX("font-mono text-[12px]/[16px] tabular-nums", "text-neutral-900/78 dark:text-neutral-100/78"),
  e6 = eX("text-[oklch(49%_0.1_68)] dark:text-[oklch(80%_0.13_68)]", "mt-0.5 shrink-0"),
  e4 = eX("text-[oklch(51%_0.18_26)] dark:text-[oklch(76%_0.14_26)]", "mt-0.5 shrink-0"),
  e9 = eX("bg-[oklch(80%_0.152_68)] dark:bg-[oklch(80%_0.152_68)]", "block h-full"),
  e3 = eX("bg-[oklch(65.2%_0.219_26)] dark:bg-[oklch(65.2%_0.219_26)]", "block h-full"),
  e7 = [.2, 0, 0, 1],
  re = {
    info: __mod_46772.A,
    warning: __mod_36474.A,
    error: __mod_27476.A,
    success: __mod_94089.A,
    usage: __mod_46176.A
  },
  rr = {
    info: e0,
    warning: e6,
    error: e4,
    success: e0,
    usage: e0
  },
  ra = [{
    id: "b1",
    tone: "info",
    title: "Scheduled maintenance on Sunday",
    body: "Halcyon will be read-only from 02:00 to 04:00 UTC while we migrate the ingest cluster.",
    quiet: "Read the notice"
  }, {
    id: "b2",
    tone: "warning",
    title: "Your card expires in 6 days",
    body: "Renewal for Cedar Labs is due on 12 November. Update the payment method to avoid an interruption.",
    action: "Update card",
    quiet: "Remind me later"
  }, {
    id: "b3",
    tone: "error",
    title: "3 of 5 imports failed",
    body: "The Northwind sync stopped after repeated schema errors. Nothing was written for the failed files.",
    action: "Retry failed",
    details: ["contacts-oct.csv: unmapped column at row 118", "accounts-eu.csv: duplicate primary key 'NW-4471'", "deals-q3.csv: date parsed outside the allowed range"]
  }, {
    id: "b4",
    tone: "success",
    title: "meridian.example is verified",
    body: "DNS records propagated and the certificate was issued. Outbound mail now sends from this domain.",
    quiet: "View DNS"
  }, {
    id: "b5",
    tone: "usage",
    title: "You have used 84% of your monthly events",
    body: "At the current rate the workspace reaches its limit around 26 November.",
    action: "Increase limit",
    meter: {
      used: 4.2,
      limit: 5,
      unit: "M events"
    }
  }];
let rn = (...e) => e.filter(Boolean).join(" "),
  ri = "text-neutral-900 dark:text-neutral-100",
  rl = "text-[14px]/[20px] font-medium",
  ro = "relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] text-neutral-900 dark:text-neutral-100 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] active:not-disabled:translate-y-px active:not-disabled:shadow-[inset_0_1px_3px_rgb(84_62_32/0.16),0_0_0_1px_rgb(84_62_32/0.10)] dark:active:not-disabled:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14),0_0_0_1px_rgb(84_62_32/0.10)] dark:aria-expanded:bg-neutral-800 dark:aria-expanded:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] disabled:bg-none disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] disabled:text-neutral-900/40 disabled:shadow-none dark:disabled:bg-neutral-800/60 dark:disabled:text-neutral-100/40",
  rs = "relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-transparent text-neutral-900/78 dark:text-neutral-100/78 hover:not-disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] hover:not-disabled:text-neutral-900 active:not-disabled:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] aria-expanded:text-neutral-900 disabled:text-neutral-900/40 dark:hover:not-disabled:bg-neutral-100/8 dark:hover:not-disabled:text-neutral-100 dark:active:not-disabled:bg-neutral-100/12 dark:aria-expanded:bg-neutral-100/8 dark:aria-expanded:text-neutral-100 dark:disabled:text-neutral-100/40",
  rc = "h-10 gap-2 rounded-[calc(var(--rb-r-full,999px))] px-5 text-[15px]/[20px] font-bold",
  rd = "size-10 rounded-[calc(var(--rb-r-full,999px))]",
  r_ = rn(rl, "text-neutral-900/62 dark:text-neutral-100/62"),
  rx = rn(rl, "text-neutral-900/78 dark:text-neutral-100/78"),
  rb = rn("relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] text-neutral-900 dark:text-neutral-100 shadow-[0_0_0_1px_rgb(84_62_32/0.07),0_1px_2px_rgb(84_62_32/0.06),0_8px_22px_-10px_rgb(84_62_32/0.20)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_0_0_1px_rgb(0_0_0/0.6),0_10px_24px_-12px_rgb(0_0_0/0.8)]", "shadow-[0_0_0_1px_rgb(84_62_32/0.08),0_24px_56px_-20px_rgb(84_62_32/0.34),0_6px_16px_-8px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.65),0_24px_56px_-16px_rgb(0_0_0/0.8)]"),
  ru = rn("font-bold", ri),
  rp = rn("inline-flex h-5.5 min-w-5.5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden whitespace-nowrap rounded-[calc(var(--rb-r-full,999px))] px-2.5 text-[12px]/[16px] font-bold tabular-nums", "bg-white text-neutral-900 dark:text-neutral-100 shadow-[0_0_0_1px_rgb(84_62_32/0.09),0_1px_2px_rgb(84_62_32/0.08)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_0_0_1px_rgb(0_0_0/0.55)] dark:bg-neutral-800", "pointer-events-none absolute -top-0.5 -right-0.5 h-[16px] min-w-[16px] px-[4px]"),
  rh = [.2, 0, 0, 1],
  rm = ["All", "Unread"],
  rk = [{
    id: "p1",
    icon: __mod_2605.A,
    actor: "Ana Reyes",
    action: "mentioned you in",
    target: "Q3 rollout plan",
    time: "12m",
    unread: !0
  }, {
    id: "p2",
    icon: __mod_3980.A,
    actor: "Wei Chen",
    action: "requested review on",
    target: "Billing usage meter",
    time: "48m",
    unread: !0
  }, {
    id: "p3",
    icon: __mod_20484.A,
    actor: "Halcyon",
    action: "recorded a sign-in from",
    target: "macOS, Lisbon",
    time: "3h",
    unread: !0
  }, {
    id: "p4",
    icon: __mod_36586.A,
    actor: "Marco Silva",
    action: "replied in",
    target: "Onboarding checklist",
    time: "5h",
    unread: !1
  }, {
    id: "p5",
    icon: __mod_36586.A,
    actor: "Sofia Alvarez",
    action: "resolved your comment in",
    target: "Meridian import",
    time: "1d",
    unread: !1
  }],
  rv = ["Overview", "Projects", "Reports"];
function rf({
  unread: e,
  children: r
}) {
  return e ? <strong className={ru}>{r}</strong> : <span className={ri}>{r}</span>;
}
let rg = e => {
    let r = "ArrowRight" === e.key || "ArrowDown" === e.key ? 1 : "ArrowLeft" === e.key || "ArrowUp" === e.key ? -1 : 0;
    if (!r && "Home" !== e.key && "End" !== e.key) return;
    let a = Array.from(e.currentTarget.querySelectorAll('[role="radio"]:not(:disabled)')),
      t = a.indexOf(e.target);
    if (t < 0) return;
    e.preventDefault();
    let n = "Home" === e.key ? 0 : "End" === e.key ? a.length - 1 : (t + r + a.length) % a.length;
    a[n].focus(), a[n].click();
  },
  rw = {
    "notifications-1": function () {
      let e = (0, __mod_50969.I)(),
        [r, a] = (0, React.useState)("All"),
        [c, d] = (0, React.useState)(W),
        _ = c.filter(e => e.unread).length,
        x = (0, React.useMemo)(() => c.filter(e => "Unread" === r ? e.unread : "Mentions" !== r || "mention" === e.kind), [c, r]),
        {
          ref: b,
          edges: g,
          onScroll: S
        } = function (e) {
          let r = (0, React.useRef)(null),
            [a, t] = (0, React.useState)({
              start: !1,
              end: !1
            }),
            i = (0, React.useCallback)(() => {
              let e = r.current;
              if (!e) return;
              let {
                scrollTop: a,
                scrollHeight: n,
                clientHeight: i
              } = e;
              t({
                start: a > 1,
                end: Math.ceil(a + i) < n - 1
              });
            }, []);
          return (0, React.useEffect)(() => {
            i();
            let e = r.current,
              a = e?.ownerDocument.defaultView;
            if (!e || !a?.ResizeObserver) return;
            let t = new a.ResizeObserver(i);
            return t.observe(e), () => t.disconnect();
          }, [i, e]), {
            ref: r,
            edges: a,
            onScroll: i
          };
        }(`${r}-${x.length}`),
        T = M.map(e => ({
          group: e,
          rows: x.filter(r => r.group === e)
        })).filter(e => e.rows.length > 0);
      return <div className={k("bg-white dark:bg-neutral-950", v, "relative flex h-full min-h-[760px] w-full flex-col overflow-hidden")}><header className={k("border-b border-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:border-neutral-100/7", "flex flex-wrap items-center justify-between gap-3 px-5 py-4")}><div className="flex items-center gap-2.5"><h2 className={j}>Notifications</h2><__mod_47962.N initial={!1}>{_ > 0 && <motion.span initial={!e && {
                opacity: 0
              }} animate={{
                opacity: 1
              }} exit={e ? void 0 : {
                opacity: 0,
                transition: {
                  duration: .12,
                  ease: C
                }
              }} transition={{
                duration: .16,
                ease: C
              }} className={k("inline-flex h-5.5 min-w-5.5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden whitespace-nowrap rounded-[calc(var(--rb-r-full,999px))] px-2.5 text-[12px]/[16px] font-bold tabular-nums", "bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] text-neutral-900 dark:text-neutral-100 dark:bg-neutral-100/12")}>{_}</motion.span>}</__mod_47962.N></div><button type="button" onClick={() => d(e => e.map(e => ({
            ...e,
            unread: !1
          })))} disabled={0 === _} className={k("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] text-neutral-900 dark:text-neutral-100 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] active:not-disabled:translate-y-px active:not-disabled:shadow-[inset_0_1px_3px_rgb(84_62_32/0.16),0_0_0_1px_rgb(84_62_32/0.10)] dark:active:not-disabled:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14),0_0_0_1px_rgb(84_62_32/0.10)] dark:aria-expanded:bg-neutral-800 dark:aria-expanded:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] disabled:bg-none disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] disabled:text-neutral-900/40 disabled:shadow-none dark:disabled:bg-neutral-800/60 dark:disabled:text-neutral-100/40", "h-10 gap-2 rounded-[calc(var(--rb-r-full,999px))] px-5 text-[15px]/[20px] font-bold")}><__mod_22728.n icon={__mod_54810.A} size={18} strokeWidth={2} aria-hidden="true" />Mark all read</button></header><div className="px-5 pt-4"><div role="radiogroup" aria-label="Filter notifications" onKeyDown={D} className={k("inline-flex w-fit max-w-full items-stretch gap-1 rounded-[calc(var(--rb-r-full,999px)_+_min(4px,var(--rb-r-full,999px)))] bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] p-1", "h-10")}>{R.map(e => {
              let n = e === r,
                i = "Unread" === e ? _ : "Mentions" === e ? c.filter(e => "mention" === e.kind).length : c.length;
              return <button type="button" role="radio" aria-checked={n} tabIndex={n ? 0 : -1} onClick={() => a(e)} className="relative inline-flex min-w-0 cursor-pointer items-center justify-center gap-1.5 whitespace-nowrap [&_svg]:shrink-0 rounded-[calc(var(--rb-r-full,999px))] px-4 text-[14px]/[18px] font-bold text-neutral-900/78 dark:text-neutral-100/78 select-none transition-[background-color,color,box-shadow,outline-color,scale] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:scale-[0.96] motion-reduce:active:scale-100 hover:not-aria-checked:text-neutral-900 aria-checked:bg-white aria-checked:text-neutral-900 aria-checked:shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_2px_rgb(84_62_32/0.10),0_3px_8px_-2px_rgb(84_62_32/0.20)] disabled:cursor-not-allowed disabled:text-neutral-900/40 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:hover:not-aria-checked:text-neutral-100 dark:aria-checked:bg-[color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800))] dark:aria-checked:text-neutral-100 dark:aria-checked:shadow-[inset_0_1px_0_rgb(255_255_255/0.1),0_0_0_1px_rgb(0_0_0/0.6),0_2px_5px_-1px_rgb(0_0_0/0.6)] dark:disabled:text-neutral-100/40">{e}<span className={z}>{i}</span></button>;
            })}</div></div><div className="relative min-h-0 flex-1"><div ref={b} onScroll={S} className="h-full overflow-y-auto px-5 py-4">{0 === T.length ? <div className="flex h-full min-h-[240px] flex-col items-center justify-center gap-2 text-center"><span className="flex h-10 w-10 items-center justify-center"><__mod_22728.n icon={__mod_13473.A} size={18} strokeWidth={2} aria-hidden="true" className={f} /></span><p className="text-[19px]/[24px] font-extrabold tracking-[-0.01em] text-neutral-900 dark:text-neutral-100">Nothing here</p><div className="max-w-[26ch]"><p className="max-w-[48ch] text-[15px]/[22px] font-medium text-neutral-900/78 dark:text-neutral-100/78">You are caught up on {r.toLowerCase()} notifications.</p></div></div> : <div className="space-y-5">{T.map(({
                group: r,
                rows: a
              }) => <section><h3 className={k(A, "px-3 pb-2")}>{r}</h3><ul className="space-y-1"><__mod_47962.N initial={!1}>{a.map(r => <motion.li layout={!e && "position"} initial={!1} exit={e ? void 0 : {
                      opacity: 0,
                      transition: {
                        duration: .12,
                        ease: C
                      }
                    }} transition={{
                      duration: .16,
                      ease: C
                    }} className="group/row relative overflow-hidden"><div className={k("relative flex min-h-12 w-full min-w-0 flex-wrap items-center gap-x-3 gap-y-1 py-2.5 text-left text-neutral-900 dark:text-neutral-100 transition-[background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] has-[[data-description]]:min-h-16", "hover:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] dark:hover:bg-neutral-100/6", "rounded-[var(--rb-r-4xl,18px)]", "px-3")}><span className={k("flex size-9 shrink-0 items-center justify-center text-neutral-900/78 dark:text-neutral-100/78", "h-[18px] w-[28px]", r.detail && "self-start")}><__mod_22728.n icon={E[r.kind]} size={16} strokeWidth={2} aria-hidden="true" /></span><div className="flex min-w-0 flex-1 flex-col gap-0.5"><p className={N}>{r.unread && <span className="sr-only">Unread: </span>}<I unread={r.unread}>{r.actor}</I> {r.action} <I unread={r.unread}>{r.target}</I></p>{r.detail && <p data-description={!0} className="line-clamp-2 text-[14px]/[20px] font-medium text-neutral-900/78 dark:text-neutral-100/78">{r.detail}</p>}</div><div className={k("relative flex min-w-12 shrink-0 justify-end", r.detail && "self-start")}><span className={k("shrink-0 text-[14px]/[20px] font-semibold tabular-nums text-neutral-900/62 dark:text-neutral-100/62", "group-focus-within/row:opacity-0 group-hover/row:opacity-0")}>{r.time}</span><div className="absolute top-1/2 -right-1.5 flex -translate-y-1/2 items-center gap-1 opacity-0 group-focus-within/row:opacity-100 group-hover/row:opacity-100"><button type="button" onClick={() => {
                              let e;
                              return e = r.id, d(r => r.map(r => r.id === e ? {
                                ...r,
                                unread: !r.unread
                              } : r));
                            }} aria-label={r.unread ? "Mark as read" : "Mark unread"} className={k(w, y)}><__mod_22728.n icon={r.unread ? __mod_90987.A : __mod_13473.A} size={18} strokeWidth={2} aria-hidden="true" /></button><button type="button" onClick={() => {
                              let e;
                              return e = r.id, d(r => r.filter(r => r.id !== e));
                            }} aria-label="Dismiss notification" className={k(w, y)}><__mod_22728.n icon={__mod_89289.A} size={18} strokeWidth={2} aria-hidden="true" /></button></div></div></div></motion.li>)}</__mod_47962.N></ul></section>)}</div>}</div><div aria-hidden="true" className={k("bg-linear-to-b from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 top-0 h-8", g.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={k("bg-linear-to-t from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 bottom-0 h-8", g.end ? "opacity-100" : "opacity-0")} /></div></div>;
    },
    "notifications-2": function () {
      let e = (0, __mod_50969.I)(),
        r = (0, React.useRef)(0),
        [a, c] = (0, React.useState)([]),
        [d, _] = (0, React.useState)(!1),
        x = (0, React.useCallback)(e => c(r => r.filter(r => r.id !== e)), []),
        b = (0, React.useCallback)(e => c(r => r.map(r => r.id === e ? {
          ...r,
          variant: "success",
          title: "Contacts imported",
          body: "2,480 records added to Northwind."
        } : r)), []),
        u = a.slice(0, 5);
      return <div className={U("bg-white dark:bg-neutral-950", H, "relative flex h-full min-h-[620px] w-full flex-col overflow-hidden")}><div className="flex flex-1 items-center justify-center p-5"><div className={U("relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 shadow-[inset_0_0_0_1px_rgb(84_62_32/0.05)] dark:shadow-[inset_0_0_0_1px_rgb(255_255_255/0.05)]", "w-full max-w-[420px]")}><div className={U("mx-1 mb-1 flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-5xl,22px))] border border-transparent bg-white dark:bg-neutral-950 shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] [&:has(+*)]:mb-0", "mt-1 px-3 py-3")}><h2 className={Y}>Toast notifications</h2><p className={U(F, "mt-1")}>Transient messages stack in the corner, collapse when idle and expand on hover.</p><div className="mt-4 grid grid-cols-2 gap-2">{K.map(e => <button type="button" onClick={() => {
                  let a;
                  return r.current += 1, a = `t${r.current}`, void c(r => [{
                    id: a,
                    ...e,
                    title: e.title,
                    body: e.body
                  }, ...r]);
                }} className={U(B, "h-10 gap-2 rounded-[calc(var(--rb-r-full,999px))] px-5 text-[15px]/[20px] font-bold")}><span className={G[e.variant]}><__mod_22728.n icon={X[e.variant]} size={18} strokeWidth={2} aria-hidden="true" /></span>{e.label}</button>)}</div></div><div className="flex min-h-12 min-w-0 items-center gap-2 px-4 py-2 text-[14px]/[20px] font-semibold text-neutral-900/62 dark:text-neutral-100/62 has-[button]:justify-end has-[button]:pe-2.5"><span className="me-auto">{0 === a.length ? "No active toasts" : `${a.length} active`}</span><button type="button" onClick={() => c([])} disabled={0 === a.length} className={U(B, "h-8 gap-1.5 rounded-[calc(var(--rb-r-full,999px))] px-3.5 text-[14px]/[18px] font-bold")}>Clear all</button></div></div></div><div aria-live="polite" aria-label="Notifications" onMouseEnter={() => _(!0)} onMouseLeave={() => _(!1)} onFocus={() => _(!0)} onBlur={e => {
          e.currentTarget.contains(e.relatedTarget) || _(!1);
        }} style={{
          height: 76
        }} className="pointer-events-none absolute right-5 bottom-5 left-5 sm:left-auto sm:w-[360px]"><__mod_47962.N initial={!1}>{u.map((r, a) => {
              let n = Math.min(a, 3);
              return <motion.div initial={!e && {
                opacity: 0
              }} animate={{
                opacity: a > 3 ? 0 : 1,
                y: d ? -(84 * a) : -(10 * n),
                scale: d ? 1 : 1 - .04 * n
              }} exit={e ? void 0 : {
                opacity: 0,
                transition: {
                  duration: .12,
                  ease: V
                }
              }} transition={e ? {
                duration: 0
              } : {
                ...Q,
                opacity: {
                  duration: .16,
                  ease: V
                }
              }} style={{
                zIndex: 50 - a,
                height: 76
              }} className="pointer-events-auto absolute inset-x-0 bottom-0 origin-bottom"><J item={r} paused={d} onDismiss={x} onSettle={b}><span className={U("shrink-0", G[r.variant])}>{"loading" === r.variant ? <span className="flex size-4 items-center justify-center"><span aria-hidden="true" className="inline-block size-3 shrink-0 rounded-full border-2 border-current border-t-transparent animate-spin [animation-duration:700ms] motion-reduce:animate-none" /></span> : <__mod_22728.n icon={X[r.variant]} size={18} strokeWidth={2} aria-hidden="true" />}</span></J></motion.div>;
            })}</__mod_47962.N></div></div>;
    },
    "notifications-3": function () {
      let [e, r] = (0, React.useState)(ek),
        [a, i] = (0, React.useState)(!0),
        [l, o] = (0, React.useState)(["Sat", "Sun"]),
        [c, d] = (0, React.useState)(!0),
        {
          ref: _,
          edges: x,
          onScroll: b
        } = function (e) {
          let r = (0, React.useRef)(null),
            [a, t] = (0, React.useState)({
              start: !1,
              end: !1
            }),
            i = (0, React.useCallback)(() => {
              let e = r.current;
              if (!e) return;
              let {
                scrollTop: a,
                scrollHeight: n,
                clientHeight: i
              } = e;
              t({
                start: a > 1,
                end: Math.ceil(a + i) < n - 1
              });
            }, []);
          return (0, React.useEffect)(() => {
            i();
            let e = r.current,
              a = e?.ownerDocument.defaultView;
            if (!e || !a?.ResizeObserver) return;
            let t = new a.ResizeObserver(i);
            return t.observe(e), () => t.disconnect();
          }, [i, e]), {
            ref: r,
            edges: a,
            onScroll: i
          };
        }(a ? "quiet" : "always"),
        u = (0, React.useMemo)(() => {
          let r = {};
          for (let a of ev) {
            let t = em.filter(e => e.group === a);
            r[a] = {
              inApp: t.every(r => e[r.id].inApp),
              email: t.every(r => e[r.id].email),
              push: t.every(r => e[r.id].push)
            };
          }
          return r;
        }, [e]),
        p = (0, React.useMemo)(() => em.reduce((r, a) => r + eh.filter(r => e[a.id][r.key]).length, 0), [e]);
      return <div className={ea(et, en, "relative flex h-full min-h-[840px] w-full flex-col overflow-hidden")}><header className={ea("border-b border-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:border-neutral-100/7", "px-5 py-4")}><h2 className={e_}>Notification preferences</h2><p className={ea(ex, "mt-1")}>{p} of {em.length * eh.length} deliveries enabled for this workspace.</p></header><div className="relative min-h-0 flex-1"><div ref={_} onScroll={b} className="h-full overflow-y-auto px-5 pb-4"><div className={ea(et, "sticky top-0 z-20 grid grid-cols-[1fr_repeat(3,48px)] items-center gap-2 px-4.5 pt-4 pb-2 sm:grid-cols-[1fr_repeat(3,72px)]")}><span className={eu}>Event</span>{eh.map(e => <span className={ea(eu, "flex items-center justify-center gap-1.5")}><__mod_22728.n icon={e.icon} size={14} strokeWidth={2} aria-hidden="true" className="max-sm:hidden" />{e.label}</span>)}</div><div className="space-y-4">{ev.map(a => <section className={ec}><div className="flex min-h-12 min-w-0 shrink-0 items-center gap-2 px-4 has-[button]:pe-2.5"><div className="grid w-full grid-cols-[1fr_repeat(3,48px)] items-center gap-2 pe-2 sm:grid-cols-[1fr_repeat(3,72px)]"><span className="min-w-0 truncate text-[16px]/[20px] font-extrabold text-neutral-900 dark:text-neutral-100">{a}</span>{eh.map(e => <div className="flex justify-center"><button type="button" onClick={() => {
                        var t, n;
                        return t = e.key, n = !u[a][e.key], void (r(e => {
                          let r = {
                            ...e
                          };
                          for (let e of em) e.group === a && (r[e.id] = {
                            ...r[e.id],
                            [t]: n
                          });
                          return r;
                        }), d(!1));
                      }} className={ea(eo, "h-7 gap-1.5 rounded-[calc(var(--rb-r-full,999px))] px-3 text-[13px]/[16px] font-bold tabular-nums")}>{u[a][e.key] ? "None" : "All"}</button></div>)}</div></div><ul className={ea(ed, "divide-y divide-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:divide-neutral-100/7")}>{em.filter(e => e.group === a).map(a => <li className="grid grid-cols-[1fr_repeat(3,48px)] items-center gap-2 px-3 py-3 sm:grid-cols-[1fr_repeat(3,72px)]"><div className="min-w-0 sm:pr-4"><p id={`${a.id}-label`} className={ea(ep, "truncate")}>{a.label}</p><p className={ea(eb, "truncate")}>{a.hint}</p></div>{eh.map(n => <div className="flex justify-center"><eg checked={e[a.id][n.key]} onChange={e => {
                        var t, i;
                        return t = a.id, i = n.key, void (r(r => ({
                          ...r,
                          [t]: {
                            ...r[t],
                            [i]: e
                          }
                        })), d(!1));
                      }} label={`${a.label}: ${n.label}`} /></div>)}</li>)}</ul></section>)}</div><div className={ea(ec, "mt-4")}><div className={ea(ed, "mt-1 px-3 py-3")}><div className="flex items-center justify-between gap-4"><div className="flex items-center gap-3"><span className={ea("flex size-9 shrink-0 items-center justify-center text-neutral-900/78 dark:text-neutral-100/78", "size-[28px]")}><__mod_22728.n icon={__mod_48419.A} size={16} strokeWidth={2} aria-hidden="true" /></span><div><p className={ep}>Quiet hours</p><p className={ea(eb, "mt-0.5")}>Hold email and push between 20:00 and 08:00. In-app stays on.</p></div></div><div className="flex w-12 shrink-0 justify-center sm:w-[72px]"><eg checked={a} onChange={e => {
                      i(e), d(!1);
                    }} label="Quiet hours" /></div></div>{a && <div className="flex flex-wrap gap-1.5 pt-4">{ef.map(e => {
                    let r = l.includes(e);
                    return <button type="button" aria-pressed={r} onClick={() => {
                      o(r => r.includes(e) ? r.filter(r => r !== e) : [...r, e]), d(!1);
                    }} className="relative inline-flex h-8 max-w-full min-w-0 shrink-0 cursor-pointer items-center gap-1.5 whitespace-nowrap rounded-[calc(var(--rb-r-full,999px))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] px-3.5 text-[14px]/[18px] font-bold text-neutral-900 dark:text-neutral-100 select-none transition-[background-color,border-color,box-shadow,color,scale,translate,outline-color] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:translate-y-px active:duration-[90ms] motion-reduce:active:translate-y-0 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] aria-pressed:bg-none aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-pressed:shadow-[inset_0_0_0_1.5px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14)] disabled:cursor-not-allowed disabled:text-neutral-900/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-pressed:shadow-[inset_0_0_0_1.5px_var(--rb-accent,oklch(81%_0.16_163))] dark:aria-expanded:bg-neutral-800 dark:disabled:text-neutral-100/40">{e}</button>;
                  })}</div>}</div></div></div><div aria-hidden="true" className={ea("bg-linear-to-b from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 top-10 z-10 h-8", x.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={ea("bg-linear-to-t from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 bottom-0 z-10 h-8", x.end ? "opacity-100" : "opacity-0")} /></div><footer className={ea("border-t border-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:border-neutral-100/7", "flex items-center justify-between gap-3 px-5 py-3")}><span className={ex}>{c ? "All changes saved" : "Unsaved changes"}</span><div className="flex items-center gap-2"><button type="button" onClick={() => {
              r(ek), i(!0), o(["Sat", "Sun"]), d(!0);
            }} className={ea(eo, es)}>Reset</button><button type="button" onClick={() => d(!0)} disabled={c} className={ea("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_68%,white),var(--rb-accent,oklch(84%_0.15_165)))] text-[var(--rb-accent-fg,oklch(26%_0.06_168))] shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_4px_10px_-4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_80%,transparent)] hover:not-disabled:-translate-y-px hover:not-disabled:brightness-[1.04] hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_7px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_85%,transparent)] active:not-disabled:translate-y-px active:not-disabled:brightness-[0.98] active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_55%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] motion-reduce:hover:translate-y-0 disabled:opacity-45 disabled:shadow-none dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_78%,white),var(--rb-accent,oklch(81%_0.16_163)))] dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_6px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,transparent)] dark:hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_9px_22px_-8px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_60%,transparent)] dark:active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_45%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black)] dark:disabled:shadow-none", es)}>Save preferences</button></div></footer></div>;
    },
    "notifications-4": function () {
      let e = (0, __mod_50969.I)(),
        [r, a] = (0, React.useState)(e$),
        [c, d] = (0, React.useState)("Inbox"),
        [_, x] = (0, React.useState)("a1"),
        [b, u] = (0, React.useState)(!1),
        p = (0, React.useRef)(null),
        m = (0, React.useMemo)(() => r.filter(e => e.view === c), [r, c]),
        k = r.find(e => e.id === _) ?? null,
        v = null !== k && k.view === c;
      (0, React.useEffect)(() => {
        if (!b) return;
        let e = p.current,
          r = e?.ownerDocument ?? document,
          a = r => {
            e && !e.contains(r.target) && u(!1);
          },
          t = e => {
            "Escape" === e.key && u(!1);
          };
        return r.addEventListener("mousedown", a), r.addEventListener("keydown", t), () => {
          r.removeEventListener("mousedown", a), r.removeEventListener("keydown", t);
        };
      }, [b]);
      let f = (e, r) => {
        a(a => a.map(a => a.id === e ? {
          ...a,
          view: r,
          unread: !1
        } : a)), u(!1);
      };
      return <div className={eS("bg-white dark:bg-neutral-950", eC, "relative flex h-full min-h-[680px] w-full flex-col overflow-hidden")}><header className={eS("border-b border-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:border-neutral-100/7", "flex flex-wrap items-center justify-between gap-3 px-5 py-3")}><h2 className={eT}>Activity</h2><div role="radiogroup" aria-label="Activity views" onKeyDown={eY} className={eS("inline-flex w-fit max-w-full items-stretch gap-1 rounded-[calc(var(--rb-r-full,999px)_+_min(4px,var(--rb-r-full,999px)))] bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] p-1", "h-10")}>{eU.map(e => {
              let a = e === c;
              return <button type="button" role="radio" aria-checked={a} tabIndex={a ? 0 : -1} onClick={() => d(e)} className="relative inline-flex min-w-0 cursor-pointer items-center justify-center gap-1.5 whitespace-nowrap [&_svg]:shrink-0 rounded-[calc(var(--rb-r-full,999px))] px-4 text-[14px]/[18px] font-bold text-neutral-900/78 dark:text-neutral-100/78 select-none transition-[background-color,color,box-shadow,outline-color,scale] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:scale-[0.96] motion-reduce:active:scale-100 hover:not-aria-checked:text-neutral-900 aria-checked:bg-white aria-checked:text-neutral-900 aria-checked:shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_2px_rgb(84_62_32/0.10),0_3px_8px_-2px_rgb(84_62_32/0.20)] disabled:cursor-not-allowed disabled:text-neutral-900/40 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:hover:not-aria-checked:text-neutral-100 dark:aria-checked:bg-[color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800))] dark:aria-checked:text-neutral-100 dark:aria-checked:shadow-[inset_0_1px_0_rgb(255_255_255/0.1),0_0_0_1px_rgb(0_0_0/0.6),0_2px_5px_-1px_rgb(0_0_0/0.6)] dark:disabled:text-neutral-100/40">{e}<span className={eq}>{r.filter(r => r.view === e).length}</span></button>;
            })}</div></header><div className="grid min-h-0 flex-1 md:grid-cols-[300px_1fr]"><div className={eS("border-r border-transparent", "min-h-0 overflow-y-auto max-md:border-r-0", v ? "hidden md:block" : "block")}>{0 === m.length ? <div className="flex h-full min-h-[240px] flex-col items-center justify-center gap-2 px-6 text-center"><span className="flex h-10 w-10 items-center justify-center"><__mod_22728.n icon={__mod_22830.A} size={18} strokeWidth={2} aria-hidden="true" className={eR} /></span><p className={eI}>{c} is empty</p></div> : <ul className="p-2">{m.map(e => {
                let r = e.id === _;
                return <li><button type="button" onClick={() => {
                    var r;
                    x(r = e.id), a(e => e.map(e => e.id === r ? {
                      ...e,
                      unread: !1
                    } : e));
                  }} aria-current={r} className={eS("relative flex min-h-12 w-full min-w-0 flex-wrap items-center gap-x-3 gap-y-1 py-2.5 text-left text-neutral-900 dark:text-neutral-100 transition-[background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] has-[[data-description]]:min-h-16", r ? "bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] dark:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)]" : "cursor-pointer hover:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] dark:hover:bg-neutral-100/6 active:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] dark:active:bg-neutral-100/10", "focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))]", "rounded-[var(--rb-r-4xl,18px)]", "px-3")}><span className={eS("flex size-9 shrink-0 items-center justify-center text-neutral-900/78 dark:text-neutral-100/78", "h-[16px] w-[28px] self-start")}><__mod_22728.n icon={eH[e.kind]} size={16} strokeWidth={2} aria-hidden="true" /></span><span className="flex min-w-0 flex-1 flex-col gap-0.5"><span className="flex max-w-full min-w-0 items-baseline gap-2 text-[15px]/[20px] font-bold text-neutral-900 dark:text-neutral-100">{e.unread && <span className="sr-only">Unread: </span>}{e.unread ? <strong className={eS("font-bold", "truncate")}>{e.actor}</strong> : <span className="truncate">{e.actor}</span>}<span className={eS("shrink-0 text-[14px]/[20px] font-semibold tabular-nums text-neutral-900/62 dark:text-neutral-100/62", "ms-auto")}>{e.time}</span></span><span className={eS(e.unread ? eO : eL, "block truncate")}>{e.summary} {e.target}</span></span></button></li>;
              })}</ul>}</div><div className={eS("min-h-0 overflow-y-auto", v ? "block" : "hidden md:block")}>{v ? <article className="p-5"><button type="button" onClick={() => x(null)} className={eS(eM, eD, "mb-3 md:hidden")}><__mod_22728.n icon={__mod_18976.A} size={18} strokeWidth={2} aria-hidden="true" />Back</button><p className={eO}><span className={eC}>{k.actor}</span> {k.summary}</p><h3 className={eS(eT, "mt-1")}>{k.target}</h3><div className="mt-4 flex flex-wrap items-center gap-2"><button type="button" className={eS("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_68%,white),var(--rb-accent,oklch(84%_0.15_165)))] text-[var(--rb-accent-fg,oklch(26%_0.06_168))] shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_4px_10px_-4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_80%,transparent)] hover:not-disabled:-translate-y-px hover:not-disabled:brightness-[1.04] hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_7px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_85%,transparent)] active:not-disabled:translate-y-px active:not-disabled:brightness-[0.98] active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_55%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] motion-reduce:hover:translate-y-0 disabled:opacity-45 disabled:shadow-none dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_78%,white),var(--rb-accent,oklch(81%_0.16_163)))] dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_6px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,transparent)] dark:hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_9px_22px_-8px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_60%,transparent)] dark:active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_45%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black)] dark:disabled:shadow-none", eD)}><__mod_22728.n icon={__mod_90987.A} size={18} strokeWidth={2} aria-hidden="true" />{k.primary}</button><div className="relative" ref={p}><button type="button" aria-haspopup="menu" aria-expanded={b} onClick={() => u(e => !e)} className={eS(eM, eD)}><__mod_22728.n icon={__mod_29635.A} size={18} strokeWidth={2} aria-hidden="true" />Snooze<__mod_22728.n icon={__mod_20148.A} size={14} strokeWidth={2} aria-hidden="true" /></button><__mod_47962.N>{b && <motion.div role="menu" initial={!e && {
                      opacity: 0
                    }} animate={{
                      opacity: 1
                    }} exit={e ? void 0 : {
                      opacity: 0,
                      transition: {
                        duration: .12,
                        ease: eP
                      }
                    }} transition={{
                      duration: .16,
                      ease: eP
                    }} className={eS("min-w-52 max-w-[min(480px,calc(100vw-2rem))] overflow-x-hidden overflow-y-auto overscroll-contain rounded-[calc(var(--rb-r-3xl,16px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] p-2 text-neutral-900 dark:text-neutral-100 outline-none shadow-[0_0_0_1px_rgb(84_62_32/0.08),0_24px_56px_-20px_rgb(84_62_32/0.34),0_6px_16px_-8px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.65),0_24px_56px_-16px_rgb(0_0_0/0.8)]", "absolute top-[calc(100%+6px)] left-0 z-30 w-[180px] min-w-[180px]")}>{eB.map(e => <button role="menuitem" type="button" onClick={() => f(k.id, "Snoozed")} className="relative flex min-h-10 w-full cursor-default items-center gap-2.5 rounded-[calc(var(--rb-r-md,8px))] px-3 py-2 text-left text-[15px]/[20px] font-semibold text-neutral-900 outline-none select-none [&_svg]:shrink-0 [&_svg]:text-neutral-900/70 hover:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] focus-visible:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] data-[highlighted]:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-disabled:cursor-not-allowed aria-disabled:text-neutral-900/40 dark:text-neutral-100 dark:[&_svg]:text-neutral-100/70 dark:hover:bg-neutral-100/7 dark:focus-visible:bg-neutral-100/7 dark:data-[highlighted]:bg-neutral-100/7 dark:aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-disabled:text-neutral-100/40">{e}</button>)}</motion.div>}</__mod_47962.N></div><button type="button" onClick={() => f(k.id, "Archived")} className={eS(eM, eD)}><__mod_22728.n icon={__mod_22670.A} size={18} strokeWidth={2} aria-hidden="true" />Archive</button></div><p className={eS(eO, "mt-5 max-w-[64ch]")}>{k.body}</p><div className={eS("relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 shadow-[inset_0_0_0_1px_rgb(84_62_32/0.05)] dark:shadow-[inset_0_0_0_1px_rgb(255_255_255/0.05)]", "mt-5")}><div className={eS("mx-1 mb-1 flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-5xl,22px))] border border-transparent bg-white dark:bg-neutral-950 shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] [&:has(+*)]:mb-0", "mt-1")}><div className="@container min-w-0"><dl className={eS("grid min-w-0 grid-cols-1 @md:grid-cols-[fit-content(180px)_minmax(0,1fr)] @md:gap-x-5", "divide-y divide-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:divide-neutral-100/7")}>{k.meta.map(e => <div className={eS("col-span-full flex min-h-12 min-w-0 flex-col justify-center gap-y-1 py-2.5 @md:grid @md:grid-cols-subgrid @md:items-baseline", "px-3 @md:gap-x-4")}><dt className="min-w-0 text-[15px]/[20px] font-bold text-neutral-900/62 dark:text-neutral-100/62">{e.label}</dt><dd className="flex min-w-0 flex-wrap items-center gap-2 text-[15px]/[22px] font-medium text-neutral-900 dark:text-neutral-100 [overflow-wrap:anywhere]">{e.value}</dd></div>)}</dl></div></div></div><a href="#" onClick={e => e.preventDefault()} className={eS("inline-flex min-h-6 items-center gap-1 rounded-[calc(var(--rb-r-sm,6px))] text-[15px]/[20px] font-bold text-neutral-900 dark:text-neutral-100 underline decoration-[var(--rb-accent,oklch(84%_0.15_165))] decoration-[3px] underline-offset-[5px] transition-[text-decoration-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:decoration-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:decoration-[var(--rb-accent,oklch(81%_0.16_163))] dark:hover:decoration-[var(--rb-accent,oklch(81%_0.16_163))]", "mt-4")}>Open in {"review" === k.kind ? "repository" : "console"}<__mod_22728.n icon={__mod_52975.A} size={16} strokeWidth={2} aria-hidden="true" /></a></article> : <div className="flex h-full min-h-[240px] flex-col items-center justify-center gap-2 px-6 text-center"><p className={eI}>Nothing selected</p><div className="max-w-[30ch]"><p className="max-w-[48ch] text-[15px]/[22px] font-medium text-neutral-900/78 dark:text-neutral-100/78">Choose an item from the list to see its context and actions.</p></div></div>}</div></div></div>;
    },
    "notifications-5": function () {
      let e = (0, __mod_50969.I)(),
        [r, a] = (0, React.useState)(ra),
        [c, d] = (0, React.useState)(null),
        {
          ref: _,
          edges: x,
          onScroll: b
        } = function (e) {
          let r = (0, React.useRef)(null),
            [a, t] = (0, React.useState)({
              start: !1,
              end: !1
            }),
            i = (0, React.useCallback)(() => {
              let e = r.current;
              if (!e) return;
              let {
                scrollTop: a,
                scrollHeight: n,
                clientHeight: i
              } = e;
              t({
                start: a > 1,
                end: Math.ceil(a + i) < n - 1
              });
            }, []);
          return (0, React.useEffect)(() => {
            i();
            let e = r.current,
              a = e?.ownerDocument.defaultView;
            if (!e || !a?.ResizeObserver) return;
            let t = new a.ResizeObserver(i);
            return t.observe(e), () => t.disconnect();
          }, [i, e]), {
            ref: r,
            edges: a,
            onScroll: i
          };
        }(`${r.length}-${c}`),
        u = e => a(r => r.filter(r => r.id !== e));
      return <div className={eX("bg-white dark:bg-neutral-950", eG, "relative flex h-full min-h-[700px] w-full flex-col overflow-hidden")}><header className={eX("border-b border-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:border-neutral-100/7", "flex flex-wrap items-center justify-between gap-3 px-5 py-4")}><div><h2 className={e1}>System messages</h2><p className={eX(e2, "mt-1")}>Persistent banners for account, billing and platform state.</p></div><button type="button" onClick={() => {
            a(ra), d(null);
          }} disabled={r.length === ra.length} className={eX(eZ, "h-10 gap-2 rounded-[calc(var(--rb-r-full,999px))] px-5 text-[15px]/[20px] font-bold")}><__mod_22728.n icon={__mod_3810.A} size={18} strokeWidth={2} aria-hidden="true" />Restore all</button></header><div className="relative min-h-0 flex-1"><div ref={_} onScroll={b} className="h-full overflow-y-auto p-5">{0 === r.length ? <div className="flex h-full min-h-[200px] flex-col items-center justify-center gap-2 text-center"><p className="text-[19px]/[24px] font-extrabold tracking-[-0.01em] text-neutral-900 dark:text-neutral-100">No messages</p><div className="max-w-[30ch]"><p className="max-w-[48ch] text-[15px]/[22px] font-medium text-neutral-900/78 dark:text-neutral-100/78">Dismissed banners do not come back unless the condition repeats.</p></div></div> : <ul className="space-y-3"><__mod_47962.N initial={!1}>{r.map(r => {
                  let a,
                    n = c === r.id;
                  return <motion.li layout={!e && "position"} initial={!1} exit={e ? void 0 : {
                    opacity: 0,
                    transition: {
                      duration: .12,
                      ease: e7
                    }
                  }} transition={{
                    duration: .16,
                    ease: e7
                  }} className="overflow-hidden"><div className="flex w-full min-w-0 items-start gap-3 rounded-[calc(var(--rb-r-3xl,16px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] px-4 py-3.5 text-neutral-900 dark:text-neutral-100 shadow-[inset_0_0_0_1px_rgb(84_62_32/0.11)] dark:shadow-[inset_0_0_0_1px_rgb(255_255_255/0.07)]"><div className="flex w-full min-w-0 gap-3"><span className={rr[r.tone]}><__mod_22728.n icon={re[r.tone]} size={18} strokeWidth={2} aria-hidden="true" /></span><div className="min-w-0 flex-1"><p className="text-[15px]/[22px] font-extrabold">{r.title}</p><p className={eX("text-[14px]/[20px] font-medium text-neutral-900/78 dark:text-neutral-100/78", "mt-1 max-w-[68ch]")}>{r.body}</p>{r.meter && <div className="mt-3 max-w-[320px]"><div className="relative block h-2.5 w-full overflow-hidden rounded-[calc(var(--rb-r-full,999px))] bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] shadow-[inset_0_1px_2px_rgb(84_62_32/0.12)] dark:bg-neutral-100/12 dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.5)]"><span className={(a = r.meter.used / r.meter.limit) > .95 ? e3 : a > .8 ? e9 : "block h-full rounded-[calc(var(--rb-r-full,999px))] bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_82%,black)] shadow-[inset_0_1px_0_rgb(255_255_255/0.35)] transition-[width] duration-[420ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] motion-reduce:transition-none dark:bg-[var(--rb-accent,oklch(81%_0.16_163))]"} style={{
                                width: `${r.meter.used / r.meter.limit * 100}%`
                              }} /></div><p className={eX(e5, "mt-1.5")}>{r.meter.used} of {r.meter.limit} {r.meter.unit}</p></div>}{r.details && <><button type="button" onClick={() => d(n ? null : r.id)} aria-expanded={n} className={eX("group -mx-2 flex min-h-9 max-w-[calc(100%+16px)] min-w-0 cursor-pointer items-center gap-2 self-start rounded-[calc(var(--rb-r-lg,10px))] px-2 text-left text-[14px]/[20px] font-semibold text-neutral-900/78 dark:text-neutral-100/78 transition-[background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] active:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] dark:hover:bg-neutral-100/6 dark:active:bg-neutral-100/10 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))]", "mt-2")}><span className="flex size-[18px] shrink-0 items-center justify-center"><__mod_22728.n icon={__mod_5042.A} size={14} strokeWidth={2} aria-hidden="true" className="shrink-0 text-neutral-900/62 dark:text-neutral-100/62 transition-transform duration-[280ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] motion-reduce:transition-none group-aria-expanded:rotate-90" /></span>{n ? "Hide details" : "Show details"}</button>{n && <ul className={eX("bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)]", "rounded-[var(--rb-r-4xl,18px)]", "divide-y divide-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:divide-neutral-100/7", "mt-2")}>{r.details.map(e => <li className={eX(e8, "px-3 py-2")}>{e}</li>)}</ul>}</>}<div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2">{r.action && <button type="button" className={eX(eZ, "h-8 gap-1.5 rounded-[calc(var(--rb-r-full,999px))] px-3.5 text-[14px]/[18px] font-bold")}>{r.action}</button>}{r.quiet && <button type="button" onClick={() => u(r.id)} className="inline-flex min-h-6 items-center gap-1 rounded-[calc(var(--rb-r-sm,6px))] text-[15px]/[20px] font-bold text-neutral-900 dark:text-neutral-100 underline decoration-[var(--rb-accent,oklch(84%_0.15_165))] decoration-[3px] underline-offset-[5px] transition-[text-decoration-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:decoration-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:decoration-[var(--rb-accent,oklch(81%_0.16_163))] dark:hover:decoration-[var(--rb-accent,oklch(81%_0.16_163))]">{r.quiet}</button>}</div></div><button type="button" onClick={() => u(r.id)} aria-label={`Dismiss: ${r.title}`} className={eX("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-transparent text-neutral-900 hover:not-disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] active:not-disabled:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] disabled:text-neutral-900/40 dark:text-neutral-100 dark:hover:not-disabled:bg-neutral-100/8 dark:active:not-disabled:bg-neutral-100/12 dark:aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:disabled:text-neutral-100/40", "size-8 rounded-[calc(var(--rb-r-full,999px))]", "-mt-1 -mr-1")}><__mod_22728.n icon={__mod_89289.A} size={18} strokeWidth={2} aria-hidden="true" /></button></div></div></motion.li>;
                })}</__mod_47962.N></ul>}</div><div aria-hidden="true" className={eX("bg-linear-to-b from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 top-0 h-8", x.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={eX("bg-linear-to-t from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 bottom-0 h-8", x.end ? "opacity-100" : "opacity-0")} /></div></div>;
    },
    "notifications-6": function () {
      let e = (0, __mod_50969.I)(),
        [r, a] = (0, React.useState)(rk),
        [c, d] = (0, React.useState)(!1),
        [_, x] = (0, React.useState)("All"),
        b = (0, React.useRef)(null),
        h = (0, React.useRef)(null),
        m = r.filter(e => e.unread).length,
        k = "Unread" === _ ? r.filter(e => e.unread) : r,
        {
          ref: v,
          edges: f,
          onScroll: g
        } = function (e, r) {
          let a = (0, React.useRef)(null),
            [t, i] = (0, React.useState)({
              start: !1,
              end: !1
            }),
            l = (0, React.useCallback)(() => {
              let e = a.current;
              if (!e) return;
              let {
                scrollTop: r,
                scrollHeight: t,
                clientHeight: n
              } = e;
              i({
                start: r > 1,
                end: Math.ceil(r + n) < t - 1
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
          }, [e, l, r]), {
            ref: a,
            edges: t,
            onScroll: l
          };
        }(c, `${_}-${k.length}`);
      return (0, React.useEffect)(() => {
        if (!c) return;
        let e = b.current,
          r = e?.ownerDocument ?? document,
          a = r => {
            e && !e.contains(r.target) && d(!1);
          },
          t = e => {
            "Escape" === e.key && (d(!1), h.current?.focus({
              preventScroll: !0
            }));
          };
        return r.addEventListener("mousedown", a), r.addEventListener("keydown", t), () => {
          r.removeEventListener("mousedown", a), r.removeEventListener("keydown", t);
        };
      }, [c]), <div className={rn("bg-white dark:bg-neutral-950", ri, "relative flex h-full min-h-[560px] w-full flex-col overflow-hidden")}><header className={rn("border-b border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900", "relative flex h-14 shrink-0 items-center justify-between gap-4 px-4")}><div className="flex min-w-0 items-center gap-4"><span className="flex items-center gap-2"><span className={rn("inline-flex shrink-0 items-center justify-center overflow-hidden rounded-[calc(var(--rb-r-lg,10px))] bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_68%,white),var(--rb-accent,oklch(84%_0.15_165)))] text-[var(--rb-accent-fg,oklch(26%_0.06_168))] shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] select-none dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_78%,white),var(--rb-accent,oklch(81%_0.16_163)))] dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.4),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black)]", "size-6", "text-[13px]/[16px] font-bold tabular-nums")}>H</span><span className={rn("text-[15px]/[20px] font-bold", "truncate")}>Halcyon</span></span><nav className="hidden items-center gap-1 sm:flex">{rv.map((e, r) => <a href="#" onClick={e => e.preventDefault()} aria-current={0 === r ? "page" : void 0} className={rn(rs, rc)}>{0 === r && <span aria-hidden="true" className={rn("bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] dark:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)]", "absolute inset-0 rounded-[inherit]")} />}<span className={rn("relative", 0 === r && ri)}>{e}</span></a>)}</nav></div><div className="flex items-center gap-1" ref={b}><div className="sm:relative"><button ref={h} type="button" aria-haspopup="dialog" aria-expanded={c} aria-label={`Notifications, ${m} unread`} onClick={() => d(e => !e)} className={rn(rs, rd)}><__mod_22728.n icon={__mod_13473.A} size={18} strokeWidth={2} aria-hidden="true" /><__mod_47962.N initial={!1}>{m > 0 && <motion.span initial={!e && {
                    opacity: 0
                  }} animate={{
                    opacity: 1
                  }} exit={e ? void 0 : {
                    opacity: 0,
                    transition: {
                      duration: .12,
                      ease: rh
                    }
                  }} transition={{
                    duration: .16,
                    ease: rh
                  }} aria-hidden="true" className={rp}>{m}</motion.span>}</__mod_47962.N></button><__mod_47962.N>{c && <motion.div role="dialog" aria-label="Notifications" initial={!e && {
                  opacity: 0
                }} animate={{
                  opacity: 1
                }} exit={e ? void 0 : {
                  opacity: 0,
                  transition: {
                    duration: .12,
                    ease: rh
                  }
                }} transition={{
                  duration: .16,
                  ease: rh
                }} className="absolute top-[calc(100%+8px)] right-0 z-40 w-[min(88vw,352px)] max-sm:inset-x-4 max-sm:w-auto"><div className={rb}><div className="flex items-center justify-between gap-2 px-2 pt-2"><div role="radiogroup" aria-label="Filter" onKeyDown={rg} className={rn("inline-flex w-fit max-w-full items-stretch gap-1 rounded-[calc(var(--rb-r-full,999px)_+_min(4px,var(--rb-r-full,999px)))] bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] p-1", "h-9")}>{rm.map(e => <button type="button" role="radio" aria-checked={e === _} tabIndex={e === _ ? 0 : -1} onClick={() => x(e)} className="relative inline-flex min-w-0 cursor-pointer items-center justify-center gap-1.5 whitespace-nowrap [&_svg]:shrink-0 rounded-[calc(var(--rb-r-full,999px))] px-4 text-[14px]/[18px] font-bold text-neutral-900/78 dark:text-neutral-100/78 select-none transition-[background-color,color,box-shadow,outline-color,scale] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:scale-[0.96] motion-reduce:active:scale-100 hover:not-aria-checked:text-neutral-900 aria-checked:bg-white aria-checked:text-neutral-900 aria-checked:shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_2px_rgb(84_62_32/0.10),0_3px_8px_-2px_rgb(84_62_32/0.20)] disabled:cursor-not-allowed disabled:text-neutral-900/40 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:hover:not-aria-checked:text-neutral-100 dark:aria-checked:bg-[color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800))] dark:aria-checked:text-neutral-100 dark:aria-checked:shadow-[inset_0_1px_0_rgb(255_255_255/0.1),0_0_0_1px_rgb(0_0_0/0.6),0_2px_5px_-1px_rgb(0_0_0/0.6)] dark:disabled:text-neutral-100/40">{e}</button>)}</div><button type="button" onClick={() => a(e => e.map(e => ({
                        ...e,
                        unread: !1
                      })))} disabled={0 === m} className={rn(ro, "h-8 gap-1.5 rounded-[calc(var(--rb-r-full,999px))] px-3.5 text-[14px]/[18px] font-bold")}><__mod_22728.n icon={__mod_54810.A} size={18} strokeWidth={2} aria-hidden="true" />Mark all read</button></div><div className="relative"><ul ref={v} onScroll={g} className="max-h-[264px] overflow-y-auto p-2">{0 === k.length ? <li className={rn("max-w-[48ch] text-[15px]/[22px] font-medium text-neutral-900/78 dark:text-neutral-100/78", "px-3 py-8 text-center")}>No unread notifications</li> : k.map(e => <li><button type="button" onClick={() => a(r => r.map(r => r.id === e.id ? {
                            ...r,
                            unread: !1
                          } : r))} className={rn("relative flex min-h-12 w-full min-w-0 flex-wrap items-center gap-x-3 gap-y-1 py-2.5 text-left text-neutral-900 dark:text-neutral-100 transition-[background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] has-[[data-description]]:min-h-16", "cursor-pointer hover:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] dark:hover:bg-neutral-100/6 active:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] dark:active:bg-neutral-100/10", "focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))]", "rounded-[var(--rb-r-4xl,18px)]", "px-2.5")}><span className={rn("flex size-9 shrink-0 items-center justify-center text-neutral-900/78 dark:text-neutral-100/78", "h-[18px] w-[24px] self-start")}><__mod_22728.n icon={e.icon} size={14} strokeWidth={2} aria-hidden="true" /></span><span className={rn("flex min-w-0 flex-1 flex-col gap-0.5", "self-start")}><span className={rn(rx, "block")}>{e.unread && <span className="sr-only">Unread: </span>}<rf unread={e.unread}>{e.actor}</rf> {e.action} <rf unread={e.unread}>{e.target}</rf></span></span><span className={rn("shrink-0 text-[14px]/[20px] font-semibold tabular-nums text-neutral-900/62 dark:text-neutral-100/62", "self-start")}>{e.time}</span></button></li>)}</ul><div aria-hidden="true" className={rn("bg-linear-to-b from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))]", "pointer-events-none absolute inset-x-0 top-0 h-8", f.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={rn("bg-linear-to-t from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))]", "pointer-events-none absolute inset-x-0 bottom-0 h-8", f.end ? "opacity-100" : "opacity-0")} /></div><div className="p-2 pt-0"><button type="button" onClick={() => d(!1)} className={rn(ro, rc, "w-full")}>Open notification center</button></div></div></motion.div>}</__mod_47962.N></div><button type="button" aria-label="Settings" className={rn(rs, rd)}><__mod_22728.n icon={__mod_65174.A} size={18} strokeWidth={2} aria-hidden="true" /></button><span className={rn("relative inline-flex size-8 shrink-0 overflow-hidden rounded-full select-none", "ml-1 size-[28px]")}><span className="flex size-full items-center justify-center rounded-[inherit] bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_24%,white)] text-[12px]/[16px] font-extrabold tabular-nums text-neutral-900 dark:text-neutral-100 dark:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_22%,var(--color-neutral-900))]">AR</span></span></div></header><div className="flex flex-1 items-center justify-center p-6"><p className={rn(r_, "max-w-[38ch] text-center")}>Open the bell to review recent activity. The panel closes on Escape or on a click outside, and returns focus to the trigger.</p></div></div>;
    }
  },
  ry = {
    "notifications-1": 760,
    "notifications-2": 620,
    "notifications-3": 840,
    "notifications-4": 680,
    "notifications-5": 700,
    "notifications-6": 560
  };

export { rw as components };
export { ry as heights };

import * as __mod_93055 from "../_helpers/93055";
import * as __mod_21835 from "../_helpers/21835";
import * as __mod_47293 from "../_helpers/47293";
import * as __mod_36586 from "../_helpers/36586";
import * as __mod_67812 from "../_helpers/67812";
import * as __mod_78805 from "../_helpers/78805";
import * as __mod_22728 from "../_helpers/22728";
import * as __mod_90987 from "../_helpers/90987";
import * as __mod_89289 from "../_helpers/89289";
import * as __mod_22776 from "../_helpers/22776";
import * as __mod_12556 from "../_helpers/12556";
import * as __mod_89886 from "../_helpers/89886";
import * as __mod_66575 from "../_helpers/66575";
import * as __mod_24513 from "../_helpers/24513";
import * as __mod_22670 from "../_helpers/22670";
import * as __mod_59037 from "../_helpers/59037";
import * as __mod_1497 from "../_helpers/1497";
import * as __mod_37502 from "../_helpers/37502";
import * as __mod_99199 from "../_helpers/99199";
/**
 * Feedback 1
 * slug: feedback-1
 * category: feedback
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let b = (...e) => e.filter(Boolean).join(" "),
  x = "text-neutral-900/78 dark:text-neutral-100/78",
  p = "text-neutral-900/62 dark:text-neutral-100/62",
  u = "text-[14px]/[20px] font-medium",
  h = "relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] text-neutral-900 dark:text-neutral-100 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] active:not-disabled:translate-y-px active:not-disabled:shadow-[inset_0_1px_3px_rgb(84_62_32/0.16),0_0_0_1px_rgb(84_62_32/0.10)] dark:active:not-disabled:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14),0_0_0_1px_rgb(84_62_32/0.10)] dark:aria-expanded:bg-neutral-800 dark:aria-expanded:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] disabled:bg-none disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] disabled:text-neutral-900/40 disabled:shadow-none dark:disabled:bg-neutral-800/60 dark:disabled:text-neutral-100/40",
  k = "relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-transparent text-neutral-900 hover:not-disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] active:not-disabled:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] disabled:text-neutral-900/40 dark:text-neutral-100 dark:hover:not-disabled:bg-neutral-100/8 dark:active:not-disabled:bg-neutral-100/12 dark:aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:disabled:text-neutral-100/40",
  m = "h-10 gap-2 rounded-[calc(var(--rb-r-full,999px))] px-5 text-[15px]/[20px] font-bold",
  v = b(u, x),
  g = b(u, p),
  f = [{
    id: "idea",
    label: "Idea",
    icon: __mod_93055.A
  }, {
    id: "issue",
    label: "Issue",
    icon: __mod_21835.A
  }, {
    id: "praise",
    label: "Praise",
    icon: __mod_47293.A
  }],
  w = {
    idea: "What would you like the product to do?",
    issue: "What went wrong, and what did you expect instead?",
    praise: "What worked well? We pass these on to the team."
  },
  y = e => {
    let r = "ArrowRight" === e.key || "ArrowDown" === e.key ? 1 : "ArrowLeft" === e.key || "ArrowUp" === e.key ? -1 : 0;
    if (!r && "Home" !== e.key && "End" !== e.key) return;
    let a = Array.from(e.currentTarget.querySelectorAll('[role="radio"]:not(:disabled)')),
      t = a.indexOf(e.target);
    if (t < 0) return;
    e.preventDefault();
    let o = "Home" === e.key ? 0 : "End" === e.key ? a.length - 1 : (t + r + a.length) % a.length;
    a[o].focus(), a[o].click();
  },
  j = (...e) => e.filter(Boolean).join(" "),
  N = "text-neutral-900/78 dark:text-neutral-100/78",
  C = "text-neutral-900/62 dark:text-neutral-100/62",
  L = "text-[14px]/[20px] font-medium",
  S = "text-[15px]/[20px] font-bold",
  A = "text-[13px]/[16px] font-semibold tabular-nums",
  W = "h-10 gap-2 rounded-[calc(var(--rb-r-full,999px))] px-5 text-[15px]/[20px] font-bold",
  z = j(L, N),
  M = j(L, C),
  I = Array.from({
    length: 11
  }, (e, r) => r),
  q = ["It is fast", "It replaced other tools", "Support helped", "Pricing works for us", "Missing a feature", "Too hard to learn"];
let E = (...e) => e.filter(Boolean).join(" "),
  H = "text-neutral-900 dark:text-neutral-100",
  O = "text-neutral-900/62 dark:text-neutral-100/62",
  F = "text-[15px]/[20px] font-bold",
  P = "h-10 gap-2 rounded-[calc(var(--rb-r-full,999px))] px-5 text-[15px]/[20px] font-bold",
  D = E("text-[14px]/[20px] font-medium", O),
  T = ["Not good", "Could be better", "Fine", "Good", "Excellent"],
  B = ["Fast reply", "Solved it first time", "Clear explanation", "Followed up"],
  $ = ["Took too long", "Had to repeat myself", "Answer was unclear", "Not actually solved"];
let Y = (...e) => e.filter(Boolean).join(" "),
  K = "text-neutral-900/62 dark:text-neutral-100/62",
  J = "text-[14px]/[20px] font-medium",
  Q = Y(J, "text-neutral-900/78 dark:text-neutral-100/78"),
  X = Y(J, K),
  ee = {
    "Under review": "text-neutral-900/62 dark:text-neutral-100/62",
    Planned: "text-neutral-900 dark:text-neutral-100",
    "In progress": "text-neutral-900 dark:text-neutral-100",
    Shipped: "text-neutral-900/78 dark:text-neutral-100/78"
  },
  er = [{
    id: "r1",
    title: "Schedule exports to a Google Sheet",
    body: "We rebuild the same sheet every Monday. A native destination would remove the last manual step in our reporting.",
    status: "In progress",
    votes: 214,
    comments: 18,
    voted: !0,
    board: "Exports"
  }, {
    id: "r2",
    title: "Row-level permissions on shared views",
    body: "Contractors should see their own accounts only. Today we duplicate a view per person, which drifts within a week.",
    status: "Planned",
    votes: 187,
    comments: 24,
    voted: !1,
    board: "Access"
  }, {
    id: "r3",
    title: "Undo a bulk edit",
    body: "One mis-clicked filter rewrote 4,000 rows. A 30 second undo window would have saved a full afternoon.",
    status: "Under review",
    votes: 96,
    comments: 7,
    voted: !1,
    board: "Editing"
  }, {
    id: "r4",
    title: "Dark mode for shared dashboards",
    body: "Our wallboards run overnight in a dim room and the white background is hard to look at for a whole shift.",
    status: "Shipped",
    votes: 342,
    comments: 41,
    voted: !0,
    board: "Dashboards"
  }, {
    id: "r5",
    title: "Webhook retries with a dead letter queue",
    body: "A five minute outage on our side silently dropped events. We would rather replay them than reconcile by hand.",
    status: "Planned",
    votes: 128,
    comments: 11,
    voted: !1,
    board: "Integrations"
  }],
  ea = ["Top", "New", "Shipped"],
  et = e => {
    let r = "ArrowRight" === e.key || "ArrowDown" === e.key ? 1 : "ArrowLeft" === e.key || "ArrowUp" === e.key ? -1 : 0;
    if (!r && "Home" !== e.key && "End" !== e.key) return;
    let a = Array.from(e.currentTarget.querySelectorAll('[role="radio"]:not(:disabled)')),
      t = a.indexOf(e.target);
    if (t < 0) return;
    e.preventDefault();
    let o = "Home" === e.key ? 0 : "End" === e.key ? a.length - 1 : (t + r + a.length) % a.length;
    a[o].focus(), a[o].click();
  };
let ec = (...e) => e.filter(Boolean).join(" "),
  e_ = "text-neutral-900/62 dark:text-neutral-100/62",
  ed = "text-[17px]/[22px] font-extrabold",
  eb = "text-[14px]/[20px] font-medium",
  ex = "relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] text-neutral-900 dark:text-neutral-100 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] active:not-disabled:translate-y-px active:not-disabled:shadow-[inset_0_1px_3px_rgb(84_62_32/0.16),0_0_0_1px_rgb(84_62_32/0.10)] dark:active:not-disabled:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14),0_0_0_1px_rgb(84_62_32/0.10)] dark:aria-expanded:bg-neutral-800 dark:aria-expanded:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] disabled:bg-none disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] disabled:text-neutral-900/40 disabled:shadow-none dark:disabled:bg-neutral-800/60 dark:disabled:text-neutral-100/40",
  ep = "h-10 gap-2 rounded-[calc(var(--rb-r-full,999px))] px-5 text-[15px]/[20px] font-bold",
  eu = "inline-flex h-5.5 min-w-5.5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden whitespace-nowrap rounded-[calc(var(--rb-r-full,999px))] px-2.5 text-[12px]/[16px] font-bold tabular-nums",
  eh = "bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] text-neutral-900 dark:text-neutral-100 dark:bg-neutral-100/12",
  ek = "relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] text-neutral-900 dark:text-neutral-100 shadow-[0_0_0_1px_rgb(84_62_32/0.07),0_1px_2px_rgb(84_62_32/0.06),0_8px_22px_-10px_rgb(84_62_32/0.20)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_0_0_1px_rgb(0_0_0/0.6),0_10px_24px_-12px_rgb(0_0_0/0.8)]",
  em = "divide-y divide-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:divide-neutral-100/7",
  ev = "relative flex min-h-12 w-full min-w-0 flex-wrap items-center gap-x-3 gap-y-1 py-2.5 text-left text-neutral-900 dark:text-neutral-100 transition-[background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] has-[[data-description]]:min-h-16",
  eg = "bg-linear-to-b from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))]",
  ef = "bg-linear-to-t from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))]",
  ew = ec(eb, "text-neutral-900/78 dark:text-neutral-100/78"),
  ey = ec(eb, e_),
  ej = ec("text-[13px]/[16px] font-semibold tabular-nums", e_),
  eN = {
    widget: __mod_36586.A,
    email: __mod_67812.A,
    survey: __mod_78805.A
  },
  eC = [{
    id: "f1",
    plan: "Pro",
    seats: "42 of 50",
    age: "2y 3m",
    history: "9 notes",
    related: [{
      quote: "The CSV export loses a column now and then.",
      person: "R. Okafor"
    }, {
      quote: "Export ran twice and produced different totals.",
      person: "L. Fontaine"
    }],
    person: "Amelia Whitfield",
    company: "Halcyon Pay",
    source: "widget",
    sentiment: "Negative",
    time: "12m",
    unread: !0,
    subject: "Export silently drops the last column",
    body: "Running the Monday revenue export drops the final column about one time in five. It is always the last one, whatever it happens to be. We only noticed because a total stopped matching the invoice run.",
    tags: ["Exports", "Data loss"],
    page: "/reports/revenue"
  }, {
    id: "f2",
    plan: "Scale",
    seats: "118 of 150",
    age: "1y 1m",
    history: "3 notes",
    related: [{
      quote: "Saved views finally let us delete the master sheet.",
      person: "K. Osei"
    }, {
      quote: "Shared a view with finance and they stopped emailing me.",
      person: "D. Ferreira"
    }],
    person: "Jonas Vikander",
    company: "Meridian",
    source: "survey",
    sentiment: "Positive",
    time: "1h",
    unread: !0,
    subject: "Saved views replaced our spreadsheet",
    body: "We retired a 40 tab spreadsheet last month. The team stopped asking me to rebuild charts, which is the first time that has happened in two years.",
    tags: ["Saved views"],
    page: "NPS survey"
  }, {
    id: "f3",
    plan: "Pro",
    seats: "64 of 80",
    age: "8m",
    history: "5 notes",
    related: [{
      quote: "SAML is the only thing blocking our rollout.",
      person: "H. Lindqvist"
    }, {
      quote: "We need SSO before legal will renew.",
      person: "M. Rahimi"
    }],
    person: "Wei Chen",
    company: "Acme",
    source: "email",
    sentiment: "Neutral",
    time: "3h",
    unread: !1,
    subject: "Can we get SSO on the Pro plan?",
    body: "Security will not sign off without SAML. We do not need the rest of the Scale tier, so paying triple for one control is a hard sell internally.",
    tags: ["Billing", "SSO"],
    page: "Reply to onboarding email"
  }, {
    id: "f4",
    plan: "Starter",
    seats: "6 of 10",
    age: "4m",
    history: "2 notes",
    related: [{
      quote: "My date range resets every single visit.",
      person: "A. Nowak"
    }, {
      quote: "Filters do not survive a page reload.",
      person: "P. Sandoval"
    }],
    person: "Tom\xe1s Guerrero",
    company: "Lumendesk",
    source: "widget",
    sentiment: "Negative",
    time: "Yesterday",
    unread: !1,
    subject: "Filter resets when I switch tabs",
    body: "Every time I move between the two dashboards my date range goes back to the last 7 days. I have started keeping the range in a note so I can retype it.",
    tags: ["Filters"],
    page: "/dashboards/ops"
  }, {
    id: "f5",
    plan: "Scale",
    seats: "203 of 250",
    age: "3y 7m",
    history: "14 notes",
    related: [{
      quote: "Board view is unusable past 200 rows.",
      person: "S. Adeyemi"
    }, {
      quote: "Scrolling the board pins my laptop fan.",
      person: "N. Petrov"
    }],
    person: "Priya Nandakumar",
    company: "Northwind",
    source: "widget",
    sentiment: "Neutral",
    time: "Yesterday",
    unread: !1,
    subject: "Board view slows down past 200 rows",
    body: "Scrolling gets choppy somewhere around two hundred rows and the whole tab locks up for a second or two when I drag a card. Table view on the same data is fine.",
    tags: ["Performance", "Board view"],
    page: "/projects/board"
  }, {
    id: "f6",
    plan: "Pro",
    seats: "18 of 25",
    age: "11m",
    history: "4 notes",
    related: [{
      quote: "Invite emails land in spam for us too.",
      person: "C. Bianchi"
    }, {
      quote: "Had to resend three invites this week.",
      person: "T. Iwu"
    }],
    person: "Marcus Bell",
    company: "Meridian",
    source: "email",
    sentiment: "Negative",
    time: "2d",
    unread: !1,
    subject: "Invite emails keep landing in spam",
    body: "Roughly half our invites end up in junk. New starters assume the account was never created and open a ticket with our own helpdesk instead.",
    tags: ["Invites", "Deliverability"],
    page: "Reply to invite email"
  }, {
    id: "f7",
    plan: "Starter",
    seats: "3 of 10",
    age: "2m",
    history: "1 note",
    related: [{
      quote: "The tour covers things I will never use.",
      person: "V. Marchand"
    }, {
      quote: "I skipped onboarding and got lost.",
      person: "E. Haddad"
    }],
    person: "Sofia Alvarez",
    company: "Orbital",
    source: "survey",
    sentiment: "Neutral",
    time: "3d",
    unread: !1,
    subject: "Onboarding tour skips the part I needed",
    body: "The tour walked me through sharing before I had any data in the account. By the time I had something worth sharing the tour was gone and I could not replay it.",
    tags: ["Onboarding"],
    page: "Activation survey"
  }];
function eL(e) {
  let r = (0, React.useRef)(null),
    [a, t] = (0, React.useState)({
      start: !1,
      end: !1
    }),
    n = (0, React.useCallback)(() => {
      let e = r.current;
      if (!e) return;
      let {
        scrollTop: a,
        scrollHeight: o,
        clientHeight: n
      } = e;
      t({
        start: a > 1,
        end: Math.ceil(a + n) < o - 1
      });
    }, []);
  return (0, React.useEffect)(() => {
    n();
    let e = r.current,
      a = e?.ownerDocument.defaultView;
    if (!e || !a?.ResizeObserver) return;
    let t = new a.ResizeObserver(n);
    return t.observe(e), () => t.disconnect();
  }, [e, n]), {
    ref: r,
    edges: a,
    onScroll: n
  };
}
let eW = (...e) => e.filter(Boolean).join(" "),
  ez = "bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] dark:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)]",
  eM = "text-neutral-900/78 dark:text-neutral-100/78",
  eI = "text-neutral-900/62 dark:text-neutral-100/62",
  eq = "text-[14px]/[20px] font-medium",
  eR = "flex min-w-0 flex-col gap-2 rounded-[calc(var(--rb-r-5xl,22px))] bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] px-3 py-3.5 dark:bg-neutral-100/4",
  eE = "text-[14px]/[20px] font-bold text-neutral-900/78 dark:text-neutral-100/78",
  eH = "flex min-w-0 flex-wrap items-baseline gap-x-1 text-[22px]/[28px] font-extrabold tracking-[-0.01em] tabular-nums text-neutral-900 dark:text-neutral-100",
  eO = "inline-flex min-w-0 flex-wrap items-baseline gap-x-1 text-[13px]/[18px] font-bold tabular-nums [&>svg]:self-center text-neutral-900/78 dark:text-neutral-100/78",
  eF = "text-[14px]/[20px] font-medium text-neutral-900/62 dark:text-neutral-100/62",
  eP = "relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 shadow-[inset_0_0_0_1px_rgb(84_62_32/0.05)] dark:shadow-[inset_0_0_0_1px_rgb(255_255_255/0.05)]",
  eD = "flex min-h-12 min-w-0 shrink-0 items-center gap-2 px-4 has-[button]:pe-2.5",
  eT = "mx-1 mb-1 flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-5xl,22px))] border border-transparent bg-white dark:bg-neutral-950 shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] [&:has(+*)]:mb-0",
  eB = "min-w-0 truncate text-[16px]/[20px] font-extrabold text-neutral-900 dark:text-neutral-100",
  e$ = eW(eq, eM),
  eU = eW(eq, eI),
  eV = eW("text-[13px]/[16px] font-semibold tabular-nums", eI),
  eZ = eW("text-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_82%,black)] dark:text-[var(--rb-accent,oklch(81%_0.16_163))]", "bg-current"),
  eG = eW("text-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_62%,transparent)] dark:text-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_48%,transparent)]", "bg-current"),
  eY = ["30 days", "90 days", "12 months"],
  eK = {
    "30 days": {
      responses: 412,
      csat: "4.4",
      delta: .2,
      split: [64, 24, 12]
    },
    "90 days": {
      responses: 1187,
      csat: "4.2",
      delta: -.1,
      split: [58, 26, 16]
    },
    "12 months": {
      responses: 4630,
      csat: "4.1",
      delta: .4,
      split: [55, 27, 18]
    }
  },
  eJ = ["Positive", "Neutral", "Negative"],
  eQ = [eZ, eG, ez],
  eX = [{
    name: "Export reliability",
    count: 84,
    trend: 22,
    share: 100
  }, {
    name: "Pricing and plans",
    count: 61,
    trend: -8,
    share: 73
  }, {
    name: "Onboarding clarity",
    count: 47,
    trend: 4,
    share: 56
  }, {
    name: "Filter persistence",
    count: 39,
    trend: 31,
    share: 46
  }, {
    name: "Mobile layout",
    count: 22,
    trend: 0,
    share: 26
  }, {
    name: "Webhook retries",
    count: 18,
    trend: 12,
    share: 21
  }, {
    name: "Search relevance",
    count: 14,
    trend: -3,
    share: 17
  }, {
    name: "Audit log gaps",
    count: 9,
    trend: 6,
    share: 11
  }],
  e0 = [18, 24, 21, 30, 27, 35, 31, 29, 38, 34, 41, 37, 44, 39, 47, 52, 45, 50, 58, 54],
  e1 = {
    "feedback-1": function () {
      let [e, r] = (0, React.useState)("idea"),
        [a, l] = (0, React.useState)(""),
        [i, s] = (0, React.useState)(!0),
        [u, j] = (0, React.useState)(!1),
        N = 400 - a.length;
      return <div className={b("bg-white dark:bg-neutral-950", "text-neutral-900 dark:text-neutral-100", "flex h-full min-h-[560px] w-full items-center justify-center overflow-y-auto p-6 sm:p-8")}><div className={b("relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] text-neutral-900 dark:text-neutral-100 shadow-[0_0_0_1px_rgb(84_62_32/0.07),0_1px_2px_rgb(84_62_32/0.06),0_8px_22px_-10px_rgb(84_62_32/0.20)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_0_0_1px_rgb(0_0_0/0.6),0_10px_24px_-12px_rgb(0_0_0/0.8)]", "shadow-[0_0_0_1px_rgb(84_62_32/0.08),0_24px_56px_-20px_rgb(84_62_32/0.34),0_6px_16px_-8px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.65),0_24px_56px_-16px_rgb(0_0_0/0.8)]", "w-full max-w-[420px] p-2")}>{u ? <div className="px-4 py-12 text-center"><span aria-hidden={!0} className={b(x, "flex justify-center")}><__mod_22728.n icon={__mod_90987.A} size={18} strokeWidth={2} /></span><p className={b("text-[15px]/[20px] font-bold", "mt-3")}>Thanks, that is on its way</p><p className={b(v, "mx-auto mt-1 max-w-[280px]")}>We read every note. If it needs a reply you will hear from us at your account address.</p><button type="button" onClick={() => {
              j(!1), l("");
            }} className={b(h, m, "mt-5")}>Send another</button></div> : <><div className="flex items-start justify-between gap-3 px-3 pt-3 pb-4"><div className="min-w-0"><h2 className="text-[17px]/[22px] font-extrabold">Send feedback</h2><p className={b(g, "mt-0.5")}>Goes to the team that owns this screen.</p></div><button type="button" aria-label="Close feedback" className={b(k, "size-8 rounded-[calc(var(--rb-r-full,999px))]")}><__mod_22728.n icon={__mod_89289.A} size={18} strokeWidth={2} aria-hidden="true" /></button></div><div role="radiogroup" aria-label="Feedback type" onKeyDown={y} className={b("inline-flex w-fit max-w-full items-stretch gap-1 rounded-[calc(var(--rb-r-full,999px)_+_min(4px,var(--rb-r-full,999px)))] bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] p-1", "h-10", "w-full")}>{f.map(({
                id: a,
                label: o,
                icon: l
              }) => {
                let i = e === a;
                return <button type="button" role="radio" aria-checked={i} tabIndex={i ? 0 : -1} onClick={() => r(a)} className={b("relative inline-flex min-w-0 cursor-pointer items-center justify-center gap-1.5 whitespace-nowrap [&_svg]:shrink-0 rounded-[calc(var(--rb-r-full,999px))] px-4 text-[14px]/[18px] font-bold text-neutral-900/78 dark:text-neutral-100/78 select-none transition-[background-color,color,box-shadow,outline-color,scale] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:scale-[0.96] motion-reduce:active:scale-100 hover:not-aria-checked:text-neutral-900 aria-checked:bg-white aria-checked:text-neutral-900 aria-checked:shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_2px_rgb(84_62_32/0.10),0_3px_8px_-2px_rgb(84_62_32/0.20)] disabled:cursor-not-allowed disabled:text-neutral-900/40 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:hover:not-aria-checked:text-neutral-100 dark:aria-checked:bg-[color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800))] dark:aria-checked:text-neutral-100 dark:aria-checked:shadow-[inset_0_1px_0_rgb(255_255_255/0.1),0_0_0_1px_rgb(0_0_0/0.6),0_2px_5px_-1px_rgb(0_0_0/0.6)] dark:disabled:text-neutral-100/40", "flex-1")}><__mod_22728.n icon={l} size={16} strokeWidth={2} aria-hidden={!0} />{o}</button>;
              })}</div><div className={b("relative flex w-full min-w-0 flex-col rounded-[calc(min(var(--rb-r-6xl,26px),min(var(--rb-r-full,999px),16px)_+_8px))] border border-transparent bg-white text-neutral-900 dark:text-neutral-100 shadow-[0_0_0_1px_rgb(84_62_32/0.07),0_1px_2px_rgb(84_62_32/0.06),0_8px_22px_-10px_rgb(84_62_32/0.20)] transition-[box-shadow] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] focus-within:shadow-[0_0_0_1.5px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black),0_0_0_5px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent),0_8px_22px_-10px_rgb(84_62_32/0.2)] dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_0_0_1px_rgb(0_0_0/0.6),0_10px_24px_-12px_rgb(0_0_0/0.8)] dark:focus-within:shadow-[0_0_0_1.5px_var(--rb-accent,oklch(81%_0.16_163)),0_0_0_5px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)]", "mt-2")}><label htmlFor="feedback-1-message" className="sr-only">Your feedback</label><textarea id="feedback-1-message" value={a} maxLength={400} onChange={e => l(e.target.value)} placeholder={w[e]} rows={4} className={b("max-h-40 min-h-6 min-w-0 flex-auto resize-none bg-transparent px-1.5 py-1.5 field-sizing-content text-[15px]/[22px] font-medium text-neutral-900 dark:text-neutral-100 outline-none placeholder:text-neutral-900/55 dark:placeholder:text-neutral-100/55", "min-h-22", "w-full px-3 pt-3")} /><div className="flex items-center justify-between gap-2 ps-1.5 pe-3 pb-1.5"><button type="button" aria-pressed={i} onClick={() => s(e => !e)} className={b(k, "h-7 gap-1.5 rounded-[calc(var(--rb-r-full,999px))] px-3 text-[13px]/[16px] font-bold tabular-nums")}><__mod_22728.n icon={__mod_22776.A} size={16} strokeWidth={2} aria-hidden={!0} />{i ? "Screenshot attached" : "Attach a screenshot"}</button><span className={b("text-[13px]/[16px] font-semibold tabular-nums", p)} aria-live="polite">{N}</span></div></div><div className="mt-2"><div className={b("bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)]", "rounded-[var(--rb-r-4xl,18px)]", "px-3 py-2.5")}><p className={v}>Sent with your page URL, browser and workspace so we can reproduce it. No page content is captured.</p></div></div><div className="flex items-center justify-end gap-2 px-1 pt-3 pb-1"><button type="button" className={b(h, m)}>Cancel</button><button type="button" disabled={0 === a.trim().length} onClick={() => j(!0)} className={b("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_68%,white),var(--rb-accent,oklch(84%_0.15_165)))] text-[var(--rb-accent-fg,oklch(26%_0.06_168))] shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_4px_10px_-4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_80%,transparent)] hover:not-disabled:-translate-y-px hover:not-disabled:brightness-[1.04] hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_7px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_85%,transparent)] active:not-disabled:translate-y-px active:not-disabled:brightness-[0.98] active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_55%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] motion-reduce:hover:translate-y-0 disabled:opacity-45 disabled:shadow-none dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_78%,white),var(--rb-accent,oklch(81%_0.16_163)))] dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_6px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,transparent)] dark:hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_9px_22px_-8px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_60%,transparent)] dark:active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_45%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black)] dark:disabled:shadow-none", m)}>Send feedback</button></div></>}</div></div>;
    },
    "feedback-2": function () {
      let [e, r] = (0, React.useState)(null),
        [a, l] = (0, React.useState)([]),
        [i, s] = (0, React.useState)(""),
        [d, b] = (0, React.useState)(!1);
      return <div className={j("bg-white dark:bg-neutral-950", "text-neutral-900 dark:text-neutral-100", "flex h-full min-h-[560px] w-full flex-col justify-center-safe overflow-y-auto p-6 sm:p-8")}><div className="mx-auto w-full max-w-[620px]"><div className="flex items-start justify-between gap-3"><div className="min-w-0"><p className={j(A, C)}>Quarterly survey</p><h2 className={j("text-[22px]/[28px] font-extrabold tracking-[-0.01em]", "mt-1")}>How likely are you to recommend Northwind to a colleague?</h2></div><button type="button" aria-label="Dismiss survey" className={j("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-transparent text-neutral-900 hover:not-disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] active:not-disabled:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] disabled:text-neutral-900/40 dark:text-neutral-100 dark:hover:not-disabled:bg-neutral-100/8 dark:active:not-disabled:bg-neutral-100/12 dark:aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:disabled:text-neutral-100/40", "size-8 rounded-[calc(var(--rb-r-full,999px))]")}><__mod_22728.n icon={__mod_89289.A} size={18} strokeWidth={2} aria-hidden="true" /></button></div>{d ? <div className={j("relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] text-neutral-900 dark:text-neutral-100 shadow-[0_0_0_1px_rgb(84_62_32/0.07),0_1px_2px_rgb(84_62_32/0.06),0_8px_22px_-10px_rgb(84_62_32/0.20)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_0_0_1px_rgb(0_0_0/0.6),0_10px_24px_-12px_rgb(0_0_0/0.8)]", "mt-5")}><div className="flex items-start gap-3 p-5"><span aria-hidden={!0} className={j(N, "flex size-4 shrink-0 items-center justify-center")}><__mod_22728.n icon={__mod_90987.A} size={18} strokeWidth={2} /></span><div className="min-w-0"><p className={S}>Recorded, thank you</p><p className={j(z, "mt-1")}>Your score of {e} goes to the product team with this quarter's results. We will not ask again for 90 days.</p></div></div></div> : <><div role="radiogroup" aria-label="Score from 0 to 10" className={j("inline-flex w-fit max-w-full items-stretch gap-1 rounded-[calc(var(--rb-r-full,999px)_+_min(4px,var(--rb-r-full,999px)))] bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] p-1", "mt-5 w-full")}><div className="grid w-full grid-cols-11 gap-0.5">{I.map(a => {
                  let o = e === a;
                  return <button type="button" role="radio" aria-checked={o} onClick={() => r(a)} className={j("relative inline-flex min-w-0 cursor-pointer items-center justify-center gap-1.5 whitespace-nowrap [&_svg]:shrink-0 rounded-[calc(var(--rb-r-full,999px))] px-4 text-[14px]/[18px] font-bold text-neutral-900/78 dark:text-neutral-100/78 select-none transition-[background-color,color,box-shadow,outline-color,scale] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:scale-[0.96] motion-reduce:active:scale-100 hover:not-aria-checked:text-neutral-900 aria-checked:bg-white aria-checked:text-neutral-900 aria-checked:shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_2px_rgb(84_62_32/0.10),0_3px_8px_-2px_rgb(84_62_32/0.20)] disabled:cursor-not-allowed disabled:text-neutral-900/40 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:hover:not-aria-checked:text-neutral-100 dark:aria-checked:bg-[color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800))] dark:aria-checked:text-neutral-100 dark:aria-checked:shadow-[inset_0_1px_0_rgb(255_255_255/0.1),0_0_0_1px_rgb(0_0_0/0.6),0_2px_5px_-1px_rgb(0_0_0/0.6)] dark:disabled:text-neutral-100/40", "hover:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] dark:hover:bg-neutral-100/6", "h-11 tabular-nums")}>{a}</button>;
                })}</div></div><div className={j(A, C, "mt-2 flex items-center justify-between px-1")}><span>Not at all likely</span><span>Extremely likely</span></div><div className={j("mt-5", null === e && "pointer-events-none opacity-40")} aria-hidden={null === e}><p className={S}>{null === e ? "Pick a score to continue" : null === e ? "" : e >= 9 ? "What made it worth recommending?" : e >= 7 ? "What would move you to a nine or ten?" : "What let you down most?"}</p><div className="mt-2 flex flex-wrap gap-1.5">{q.map(e => {
                  let r = a.includes(e);
                  return <button type="button" aria-pressed={r} onClick={() => l(r => r.includes(e) ? r.filter(r => r !== e) : [...r, e])} className="relative inline-flex h-8 max-w-full min-w-0 shrink-0 cursor-pointer items-center gap-1.5 whitespace-nowrap rounded-[calc(var(--rb-r-full,999px))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] px-3.5 text-[14px]/[18px] font-bold text-neutral-900 dark:text-neutral-100 select-none transition-[background-color,border-color,box-shadow,color,scale,translate,outline-color] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:translate-y-px active:duration-[90ms] motion-reduce:active:translate-y-0 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] aria-pressed:bg-none aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-pressed:shadow-[inset_0_0_0_1.5px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14)] disabled:cursor-not-allowed disabled:text-neutral-900/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-pressed:shadow-[inset_0_0_0_1.5px_var(--rb-accent,oklch(81%_0.16_163))] dark:aria-expanded:bg-neutral-800 dark:disabled:text-neutral-100/40">{e}</button>;
                })}</div><label htmlFor="feedback-2-note" className="sr-only">Anything else</label><textarea id="feedback-2-note" value={i} onChange={e => s(e.target.value)} rows={2} placeholder="Anything else worth adding (optional)" className={j("block max-h-[280px] min-h-[88px] w-full min-w-48 resize-none rounded-[calc(var(--rb-r-xl,12px))] border border-transparent bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] px-3.5 py-2.5 text-[15px]/[22px] font-medium text-neutral-900 outline-none field-sizing-content transition-[border-color,box-shadow,background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] placeholder:text-neutral-900/55 hover:not-focus-visible:not-aria-invalid:not-disabled:not-read-only:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] focus-visible:border-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] focus-visible:bg-white focus-visible:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-invalid:border-[oklch(60%_0.236_26)] aria-invalid:bg-[oklch(97.5%_0.016_26)] disabled:cursor-not-allowed disabled:text-neutral-900/40 disabled:shadow-none read-only:shadow-none dark:text-neutral-100 dark:placeholder:text-neutral-100/55 dark:hover:not-focus-visible:not-aria-invalid:not-disabled:not-read-only:bg-neutral-900 dark:focus-visible:border-[var(--rb-accent,oklch(81%_0.16_163))] dark:focus-visible:bg-neutral-900 dark:focus-visible:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-invalid:border-[oklch(65.2%_0.219_26)] dark:aria-invalid:bg-[oklch(26%_0.04_26)] dark:disabled:text-neutral-100/40", "mt-3")} /></div><div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between"><p className={M}>One question, and we will not ask again for 90 days.</p><div className="flex items-center gap-2"><button type="button" className={j("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] text-neutral-900 dark:text-neutral-100 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] active:not-disabled:translate-y-px active:not-disabled:shadow-[inset_0_1px_3px_rgb(84_62_32/0.16),0_0_0_1px_rgb(84_62_32/0.10)] dark:active:not-disabled:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14),0_0_0_1px_rgb(84_62_32/0.10)] dark:aria-expanded:bg-neutral-800 dark:aria-expanded:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] disabled:bg-none disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] disabled:text-neutral-900/40 disabled:shadow-none dark:disabled:bg-neutral-800/60 dark:disabled:text-neutral-100/40", W)}>Ask me later</button><button type="button" disabled={null === e} onClick={() => b(!0)} className={j("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_68%,white),var(--rb-accent,oklch(84%_0.15_165)))] text-[var(--rb-accent-fg,oklch(26%_0.06_168))] shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_4px_10px_-4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_80%,transparent)] hover:not-disabled:-translate-y-px hover:not-disabled:brightness-[1.04] hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_7px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_85%,transparent)] active:not-disabled:translate-y-px active:not-disabled:brightness-[0.98] active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_55%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] motion-reduce:hover:translate-y-0 disabled:opacity-45 disabled:shadow-none dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_78%,white),var(--rb-accent,oklch(81%_0.16_163)))] dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_6px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,transparent)] dark:hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_9px_22px_-8px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_60%,transparent)] dark:active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_45%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black)] dark:disabled:shadow-none", W, "flex-1 sm:flex-none")}>Submit</button></div></div></>}</div></div>;
    },
    "feedback-3": function () {
      let [e, r] = (0, React.useState)(0),
        [a, l] = (0, React.useState)(0),
        [i, s] = (0, React.useState)([]),
        [c, _] = (0, React.useState)(""),
        d = a || e;
      return <div className={E("bg-white dark:bg-neutral-950", H, "flex h-full min-h-[560px] w-full flex-col justify-center-safe overflow-y-auto p-6 sm:p-8")}><div className="mx-auto w-full max-w-[520px]"><div className="relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] text-neutral-900 dark:text-neutral-100 shadow-[0_0_0_1px_rgb(84_62_32/0.07),0_1px_2px_rgb(84_62_32/0.06),0_8px_22px_-10px_rgb(84_62_32/0.20)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_0_0_1px_rgb(0_0_0/0.6),0_10px_24px_-12px_rgb(0_0_0/0.8)]"><div className={E("relative flex min-h-12 w-full min-w-0 flex-wrap items-center gap-x-3 gap-y-1 py-2.5 text-left text-neutral-900 dark:text-neutral-100 transition-[background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] has-[[data-description]]:min-h-16", "px-4")}><span aria-hidden={!0} className="relative inline-flex size-8 shrink-0 overflow-hidden rounded-full select-none"><span className="flex size-full items-center justify-center rounded-[inherit] bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_24%,white)] text-[12px]/[16px] font-extrabold tabular-nums text-neutral-900 dark:text-neutral-100 dark:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_22%,var(--color-neutral-900))]">SA</span></span><div className="flex min-w-0 flex-1 flex-col gap-0.5"><p className={E(F, "truncate")}>Sofia Alvarez closed your ticket</p><p data-description={!0} className={E(D, "flex min-w-0 flex-wrap gap-x-3")}><span className="shrink-0">#4192</span><span className="truncate">Export job stuck in queue</span><span className="shrink-0">Resolved in 3h 12m</span></p></div></div></div><h2 className={E("text-[17px]/[22px] font-extrabold", "mt-5 text-center")}>How was the support you received?</h2><div role="radiogroup" aria-label="Rating out of five" className="mt-4 flex items-center justify-center gap-1" onMouseLeave={() => l(0)}>{[1, 2, 3, 4, 5].map(a => <button type="button" role="radio" aria-checked={e === a} aria-label={`${a} out of 5, ${T[a - 1]}`} onMouseEnter={() => l(a)} onFocus={() => l(a)} onBlur={() => l(0)} onClick={() => {
              r(a), s([]);
            }} className={E("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-transparent text-neutral-900 hover:not-disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] active:not-disabled:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] disabled:text-neutral-900/40 dark:text-neutral-100 dark:hover:not-disabled:bg-neutral-100/8 dark:active:not-disabled:bg-neutral-100/12 dark:aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:disabled:text-neutral-100/40", "size-12 rounded-[calc(var(--rb-r-full,999px))]")}><__mod_22728.n icon={__mod_12556.A} size={24} strokeWidth={2} className={a <= d ? E(H, "[&_path]:fill-current") : O} aria-hidden={!0} /></button>)}</div><p className={E(D, "mt-2 text-center")} aria-live="polite">{d ? T[d - 1] : "Tap a star to rate"}</p><div className={E("mt-5", 0 === e && "pointer-events-none opacity-40")} aria-hidden={0 === e}><p className={F}>{e >= 4 ? "What went well?" : "What should have gone better?"}</p><div className="mt-2 flex flex-wrap gap-1.5">{(e >= 4 ? B : $).map(e => {
                let r = i.includes(e);
                return <button type="button" aria-pressed={r} onClick={() => s(r => r.includes(e) ? r.filter(r => r !== e) : [...r, e])} className="relative inline-flex h-8 max-w-full min-w-0 shrink-0 cursor-pointer items-center gap-1.5 whitespace-nowrap rounded-[calc(var(--rb-r-full,999px))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] px-3.5 text-[14px]/[18px] font-bold text-neutral-900 dark:text-neutral-100 select-none transition-[background-color,border-color,box-shadow,color,scale,translate,outline-color] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:translate-y-px active:duration-[90ms] motion-reduce:active:translate-y-0 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] aria-pressed:bg-none aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-pressed:shadow-[inset_0_0_0_1.5px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14)] disabled:cursor-not-allowed disabled:text-neutral-900/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-pressed:shadow-[inset_0_0_0_1.5px_var(--rb-accent,oklch(81%_0.16_163))] dark:aria-expanded:bg-neutral-800 dark:disabled:text-neutral-100/40">{e}</button>;
              })}</div><label htmlFor="feedback-3-note" className="sr-only">Add a comment</label><textarea id="feedback-3-note" value={c} onChange={e => _(e.target.value)} rows={2} placeholder="Add a comment for Sofia (optional)" className={E("block max-h-[280px] min-h-[88px] w-full min-w-48 resize-none rounded-[calc(var(--rb-r-xl,12px))] border border-transparent bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] px-3.5 py-2.5 text-[15px]/[22px] font-medium text-neutral-900 outline-none field-sizing-content transition-[border-color,box-shadow,background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] placeholder:text-neutral-900/55 hover:not-focus-visible:not-aria-invalid:not-disabled:not-read-only:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] focus-visible:border-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] focus-visible:bg-white focus-visible:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-invalid:border-[oklch(60%_0.236_26)] aria-invalid:bg-[oklch(97.5%_0.016_26)] disabled:cursor-not-allowed disabled:text-neutral-900/40 disabled:shadow-none read-only:shadow-none dark:text-neutral-100 dark:placeholder:text-neutral-100/55 dark:hover:not-focus-visible:not-aria-invalid:not-disabled:not-read-only:bg-neutral-900 dark:focus-visible:border-[var(--rb-accent,oklch(81%_0.16_163))] dark:focus-visible:bg-neutral-900 dark:focus-visible:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-invalid:border-[oklch(65.2%_0.219_26)] dark:aria-invalid:bg-[oklch(26%_0.04_26)] dark:disabled:text-neutral-100/40", "mt-3")} /></div><div className="mt-4 flex items-center justify-center gap-2"><button type="button" className={E("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] text-neutral-900 dark:text-neutral-100 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] active:not-disabled:translate-y-px active:not-disabled:shadow-[inset_0_1px_3px_rgb(84_62_32/0.16),0_0_0_1px_rgb(84_62_32/0.10)] dark:active:not-disabled:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14),0_0_0_1px_rgb(84_62_32/0.10)] dark:aria-expanded:bg-neutral-800 dark:aria-expanded:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] disabled:bg-none disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] disabled:text-neutral-900/40 disabled:shadow-none dark:disabled:bg-neutral-800/60 dark:disabled:text-neutral-100/40", P)}>No thanks</button><button type="button" disabled={0 === e} className={E("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_68%,white),var(--rb-accent,oklch(84%_0.15_165)))] text-[var(--rb-accent-fg,oklch(26%_0.06_168))] shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_4px_10px_-4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_80%,transparent)] hover:not-disabled:-translate-y-px hover:not-disabled:brightness-[1.04] hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_7px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_85%,transparent)] active:not-disabled:translate-y-px active:not-disabled:brightness-[0.98] active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_55%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] motion-reduce:hover:translate-y-0 disabled:opacity-45 disabled:shadow-none dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_78%,white),var(--rb-accent,oklch(81%_0.16_163)))] dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_6px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,transparent)] dark:hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_9px_22px_-8px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_60%,transparent)] dark:active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_45%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black)] dark:disabled:shadow-none", P)}>Send rating</button></div></div></div>;
    },
    "feedback-4": function () {
      let [e, r] = (0, React.useState)("Top"),
        [a, l] = (0, React.useState)(() => Object.fromEntries(er.map(e => [e.id, e.voted]))),
        i = (0, React.useMemo)(() => "Shipped" === e ? er.filter(e => "Shipped" === e.status) : "New" === e ? [...er].reverse() : [...er].sort((e, r) => r.votes - e.votes), [e]),
        {
          ref: s,
          edges: c,
          onScroll: _
        } = function (e) {
          let r = (0, React.useRef)(null),
            [a, t] = (0, React.useState)({
              start: !1,
              end: !1
            }),
            n = (0, React.useCallback)(() => {
              let e = r.current;
              if (!e) return;
              let {
                scrollTop: a,
                scrollHeight: o,
                clientHeight: n
              } = e;
              t({
                start: a > 1,
                end: Math.ceil(a + n) < o - 1
              });
            }, []);
          return (0, React.useEffect)(() => {
            n();
            let e = r.current,
              a = e?.ownerDocument.defaultView;
            if (!e || !a?.ResizeObserver) return;
            let t = new a.ResizeObserver(n);
            return t.observe(e), () => t.disconnect();
          }, [e, n]), {
            ref: r,
            edges: a,
            onScroll: n
          };
        }(e);
      return <div className={Y("bg-white dark:bg-neutral-950", "text-neutral-900 dark:text-neutral-100", "flex h-full min-h-[740px] w-full flex-col overflow-hidden p-4 sm:p-6")}><div className="mx-auto flex w-full max-w-[760px] min-h-0 flex-1 flex-col"><div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"><div className="min-w-0"><h2 className="text-[17px]/[22px] font-extrabold">Feature requests</h2><p className={Y(X, "mt-0.5")}>Vote on what you need next. Status changes appear here first.</p></div><button type="button" className={Y("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_68%,white),var(--rb-accent,oklch(84%_0.15_165)))] text-[var(--rb-accent-fg,oklch(26%_0.06_168))] shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_4px_10px_-4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_80%,transparent)] hover:not-disabled:-translate-y-px hover:not-disabled:brightness-[1.04] hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_7px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_85%,transparent)] active:not-disabled:translate-y-px active:not-disabled:brightness-[0.98] active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_55%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] motion-reduce:hover:translate-y-0 disabled:opacity-45 disabled:shadow-none dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_78%,white),var(--rb-accent,oklch(81%_0.16_163)))] dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_6px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,transparent)] dark:hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_9px_22px_-8px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_60%,transparent)] dark:active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_45%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black)] dark:disabled:shadow-none", "h-10 gap-2 rounded-[calc(var(--rb-r-full,999px))] px-5 text-[15px]/[20px] font-bold")}><__mod_22728.n icon={__mod_89886.A} size={18} strokeWidth={2} aria-hidden={!0} />New request</button></div><div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between"><div role="radiogroup" aria-label="Show requests" onKeyDown={et} className={Y("inline-flex w-fit max-w-full items-stretch gap-1 rounded-[calc(var(--rb-r-full,999px)_+_min(4px,var(--rb-r-full,999px)))] bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] p-1", "h-10")}>{ea.map(a => {
                let o = e === a;
                return <button type="button" role="radio" aria-checked={o} tabIndex={o ? 0 : -1} onClick={() => r(a)} className="relative inline-flex min-w-0 cursor-pointer items-center justify-center gap-1.5 whitespace-nowrap [&_svg]:shrink-0 rounded-[calc(var(--rb-r-full,999px))] px-4 text-[14px]/[18px] font-bold text-neutral-900/78 dark:text-neutral-100/78 select-none transition-[background-color,color,box-shadow,outline-color,scale] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:scale-[0.96] motion-reduce:active:scale-100 hover:not-aria-checked:text-neutral-900 aria-checked:bg-white aria-checked:text-neutral-900 aria-checked:shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_2px_rgb(84_62_32/0.10),0_3px_8px_-2px_rgb(84_62_32/0.20)] disabled:cursor-not-allowed disabled:text-neutral-900/40 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:hover:not-aria-checked:text-neutral-100 dark:aria-checked:bg-[color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800))] dark:aria-checked:text-neutral-100 dark:aria-checked:shadow-[inset_0_1px_0_rgb(255_255_255/0.1),0_0_0_1px_rgb(0_0_0/0.6),0_2px_5px_-1px_rgb(0_0_0/0.6)] dark:disabled:text-neutral-100/40">{a}</button>;
              })}</div><label htmlFor="feedback-4-search" className="sr-only">Search requests</label><div className={Y("relative flex w-full min-w-0 cursor-text items-center rounded-[calc(var(--rb-r-xl,12px))] data-concentric:rounded-[var(--rb-r-5xl,22px)] border border-transparent bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] text-[15px]/[20px] font-medium text-neutral-900 transition-[border-color,box-shadow,background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:not-focus-within:not-has-[[aria-invalid=true]]:not-has-[input:disabled]:not-has-[input[readonly]]:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] focus-within:border-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] focus-within:bg-white focus-within:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] has-[[aria-invalid=true]]:border-[oklch(60%_0.236_26)] has-[[aria-invalid=true]]:bg-[oklch(97.5%_0.016_26)] has-[input:disabled]:cursor-not-allowed has-[input:disabled]:text-neutral-900/40 has-[input:disabled]:shadow-none has-[input[readonly]]:cursor-default has-[input[readonly]]:shadow-none dark:text-neutral-100 dark:hover:not-focus-within:not-has-[[aria-invalid=true]]:not-has-[input:disabled]:not-has-[input[readonly]]:bg-neutral-900 dark:focus-within:border-[var(--rb-accent,oklch(81%_0.16_163))] dark:focus-within:bg-neutral-900 dark:focus-within:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:has-[[aria-invalid=true]]:border-[oklch(65.2%_0.219_26)] dark:has-[[aria-invalid=true]]:bg-[oklch(26%_0.04_26)] dark:has-[input:disabled]:text-neutral-100/40", "h-10", "sm:w-[240px]")}><span data-affix={!0} className="flex shrink-0 items-center gap-2 text-[15px]/[20px] font-semibold text-neutral-900/62 dark:text-neutral-100/62 select-none first:ps-3.5 last:pe-3.5 has-[button]:first:ps-1 has-[button]:last:pe-1"><__mod_22728.n icon={__mod_66575.A} size={16} strokeWidth={2} aria-hidden={!0} /></span><input id="feedback-4-search" type="search" placeholder="Search requests" className="h-full w-full min-w-0 flex-1 bg-transparent px-3.5 outline-none [[data-affix]+&]:ps-2 [&:has(+[data-affix])]:pe-2 placeholder:font-medium placeholder:text-neutral-900/55 disabled:cursor-not-allowed disabled:placeholder:text-neutral-900/30 dark:placeholder:text-neutral-100/55 dark:disabled:placeholder:text-neutral-100/30 dark:[color-scheme:dark]" /></div></div><div className={Y("relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] text-neutral-900 dark:text-neutral-100 shadow-[0_0_0_1px_rgb(84_62_32/0.07),0_1px_2px_rgb(84_62_32/0.06),0_8px_22px_-10px_rgb(84_62_32/0.20)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_0_0_1px_rgb(0_0_0/0.6),0_10px_24px_-12px_rgb(0_0_0/0.8)]", "mt-3 min-h-0 flex-1")}><div ref={s} onScroll={_} className={Y("divide-y divide-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:divide-neutral-100/7", "min-h-0 flex-1 overflow-y-auto")}>{i.map(e => {
                let r = a[e.id],
                  o = e.votes + (r && !e.voted ? 1 : 0);
                return <article className="flex gap-3 p-3 sm:gap-4 sm:p-4"><button type="button" aria-pressed={r} aria-label={`${r ? "Remove vote from" : "Vote for"} ${e.title}`} onClick={() => l(r => ({
                    ...r,
                    [e.id]: !r[e.id]
                  }))} className={Y("relative inline-flex h-8 max-w-full min-w-0 shrink-0 cursor-pointer items-center gap-1.5 whitespace-nowrap rounded-[calc(var(--rb-r-full,999px))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] px-3.5 text-[14px]/[18px] font-bold text-neutral-900 dark:text-neutral-100 select-none transition-[background-color,border-color,box-shadow,color,scale,translate,outline-color] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:translate-y-px active:duration-[90ms] motion-reduce:active:translate-y-0 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] aria-pressed:bg-none aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-pressed:shadow-[inset_0_0_0_1.5px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14)] disabled:cursor-not-allowed disabled:text-neutral-900/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-pressed:shadow-[inset_0_0_0_1.5px_var(--rb-accent,oklch(81%_0.16_163))] dark:aria-expanded:bg-neutral-800 dark:disabled:text-neutral-100/40", "rounded-[var(--rb-r-4xl,18px)]", "h-14 w-11 flex-col justify-center")}><__mod_22728.n icon={__mod_24513.A} size={16} strokeWidth={2} aria-hidden={!0} /><span className="tabular-nums">{o}</span></button><div className="min-w-0 flex-1"><div className={Y("flex max-w-full min-w-0 items-baseline gap-2 text-[15px]/[20px] font-bold text-neutral-900 dark:text-neutral-100", "gap-3")}><h3 className="min-w-0">{e.title}</h3><span className={Y("inline-flex items-start gap-1 text-[14px]/[20px] font-bold tabular-nums", ee[e.status], "ms-auto shrink-0")}>{"In progress" === e.status && <span className="flex h-lh shrink-0 items-center"><span className="inline-block size-3 shrink-0 rounded-full border-2 border-current border-t-transparent animate-spin [animation-duration:700ms] motion-reduce:animate-none" aria-hidden="true" /></span>}{e.status}</span></div><p className={Y(Q, "mt-1")}>{e.body}</p><div className={Y("text-[13px]/[16px] font-semibold tabular-nums", K, "mt-2 flex items-center gap-3")}><span>{e.board}</span><span className="inline-flex items-center gap-1"><__mod_22728.n icon={__mod_36586.A} size={14} strokeWidth={2} aria-hidden={!0} /><span className="tabular-nums">{e.comments}</span></span></div></div></article>;
              })}</div><div aria-hidden="true" className={Y("bg-linear-to-b from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))]", "pointer-events-none absolute inset-x-0 top-0 h-8", c.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={Y("bg-linear-to-t from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))]", "pointer-events-none absolute inset-x-0 bottom-0 h-8", c.end ? "opacity-100" : "opacity-0")} /></div></div></div>;
    },
    "feedback-5": function () {
      let e,
        [r, a] = (0, React.useState)(eC[0].id),
        l = eC.find(e => e.id === r) ?? eC[0],
        {
          ref: i,
          edges: s,
          onScroll: c
        } = eL(),
        {
          ref: _,
          edges: d,
          onScroll: b
        } = eL(r);
      return <div className={ec("bg-white dark:bg-neutral-950", "text-neutral-900 dark:text-neutral-100", "flex h-full min-h-[700px] w-full flex-col overflow-hidden p-4 sm:p-6")}><div className="flex items-center justify-between gap-3"><div className="min-w-0"><h2 className={ed}>Feedback inbox</h2><p className={ec(ey, "mt-0.5 flex gap-3")}><span>{eC.filter(e => e.unread).length} unread</span><span>42 this week</span></p></div><button type="button" className={ec(ex, ep)}><__mod_22728.n icon={__mod_22670.A} size={18} strokeWidth={2} aria-hidden={!0} />Archive read</button></div><div className="mt-3 flex min-h-0 flex-1 flex-col"><div className="grid min-h-0 flex-1 gap-3 lg:grid-cols-[300px_1fr]"><div className={ec(ek, "max-h-[220px] min-h-0 lg:max-h-none")}><ul ref={i} onScroll={c} className={ec(em, "min-h-0 flex-1 overflow-y-auto p-2")}>{eC.map(e => {
                  let o = e.id === r;
                  return <li><button type="button" aria-current={o} onClick={() => a(e.id)} className={ec(ev, o ? "bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] dark:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)]" : "cursor-pointer hover:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] dark:hover:bg-neutral-100/6 active:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] dark:active:bg-neutral-100/10", "focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))]", "rounded-[var(--rb-r-4xl,18px)]", "px-3")}><div className={ec("flex max-w-full min-w-0 items-baseline gap-2 text-[15px]/[20px] font-bold text-neutral-900 dark:text-neutral-100", "w-full")}><span className="truncate">{e.person}</span>{e.unread && <span className={ec(eu, eh)}>Unread</span>}<span className={ec(ej, "ml-auto shrink-0")}>{e.time}</span></div><p className={ec(ew, "w-full truncate")}>{e.subject}</p><div className={ec(ej, "flex w-full items-center gap-1.5")}><__mod_22728.n icon={eN[e.source]} size={14} strokeWidth={2} aria-hidden={!0} /><span className="truncate">{e.company}</span></div></button></li>;
                })}</ul><div aria-hidden="true" className={ec(eg, "pointer-events-none absolute inset-x-0 top-0 h-8", s.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={ec(ef, "pointer-events-none absolute inset-x-0 bottom-0 h-8", s.end ? "opacity-100" : "opacity-0")} /></div><div className={ec(ek, "min-h-0")}><div className="flex items-start gap-3 px-4 pt-4"><span aria-hidden={!0} className={ec("relative inline-flex size-8 shrink-0 overflow-hidden rounded-full select-none", "size-9")}><span className="flex size-full items-center justify-center rounded-[inherit] bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_24%,white)] text-[12px]/[16px] font-extrabold tabular-nums text-neutral-900 dark:text-neutral-100 dark:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_22%,var(--color-neutral-900))]">{l.person.split(/[\s-]+/).filter(Boolean).slice(0, 2).map(e => e[0]?.toUpperCase()).join("")}</span></span><div className="min-w-0 flex-1"><p className="text-[15px]/[20px] font-bold">{l.person}</p><p className={ec(ej, "flex min-w-0 gap-3")}><span className="shrink-0">{l.company}</span><span className="truncate">{l.page}</span><span className="shrink-0">{(e = l.time, /^\d/.test(e) ? `${e} ago` : e)}</span></p></div><span className={ec(eu, "bg-white text-neutral-900 dark:text-neutral-100 shadow-[0_0_0_1px_rgb(84_62_32/0.09),0_1px_2px_rgb(84_62_32/0.08)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_0_0_1px_rgb(0_0_0/0.55)] dark:bg-neutral-800")}>{l.sentiment}</span></div><div className="relative min-h-0 flex-1"><div ref={_} onScroll={b} className="h-full overflow-y-auto px-4 pt-3"><h3 className={ed}>{l.subject}</h3><p className={ec(ew, "mt-2")}>{l.body}</p><div className="mt-3 flex flex-wrap items-center gap-1.5">{l.tags.map(e => <span className={ec(eu, eh, "h-6")}><__mod_22728.n icon={__mod_59037.A} size={10} strokeWidth={2} aria-hidden={!0} />{e}</span>)}<button type="button" className="relative inline-flex h-7 max-w-full min-w-0 shrink-0 cursor-pointer items-center gap-1.5 whitespace-nowrap rounded-[calc(var(--rb-r-full,999px))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] px-3 text-[13px]/[16px] font-bold tabular-nums text-neutral-900 dark:text-neutral-100 select-none transition-[background-color,border-color,box-shadow,color,scale,translate,outline-color] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:translate-y-px active:duration-[90ms] motion-reduce:active:translate-y-0 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] aria-pressed:bg-none aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-pressed:shadow-[inset_0_0_0_1.5px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14)] disabled:cursor-not-allowed disabled:text-neutral-900/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-pressed:shadow-[inset_0_0_0_1.5px_var(--rb-accent,oklch(81%_0.16_163))] dark:aria-expanded:bg-neutral-800 dark:disabled:text-neutral-100/40">Add tag</button></div><dl className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5 sm:grid-cols-4">{[["Plan", l.plan], ["Seats", l.seats], ["Account age", l.age], ["Past feedback", l.history]].map(([e, r]) => <div><dt className={ej}>{e}</dt><dd className={ec("flex min-w-0 flex-wrap items-center gap-2 text-[15px]/[22px] font-medium text-neutral-900 dark:text-neutral-100 [overflow-wrap:anywhere]", "mt-0.5")}>{r}</dd></div>)}</dl><p className={ec("text-[13px]/[16px] font-bold tabular-nums", "mt-5")}>Others said the same thing</p><ul className={ec(em, "mt-2")}>{l.related.map(e => <li className={ev}><span className={ec(ew, "min-w-0 flex-1 truncate")}>{e.quote}</span><span className={ec(ej, "ml-auto shrink-0")}>{e.person}</span></li>)}</ul><label htmlFor="feedback-5-note" className="sr-only">Internal note</label><textarea id="feedback-5-note" rows={2} placeholder="Add an internal note for the team" className={ec("block max-h-[280px] min-h-[88px] w-full min-w-48 resize-none rounded-[calc(var(--rb-r-xl,12px))] border border-transparent bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] px-3.5 py-2.5 text-[15px]/[22px] font-medium text-neutral-900 outline-none field-sizing-content transition-[border-color,box-shadow,background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] placeholder:text-neutral-900/55 hover:not-focus-visible:not-aria-invalid:not-disabled:not-read-only:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] focus-visible:border-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] focus-visible:bg-white focus-visible:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-invalid:border-[oklch(60%_0.236_26)] aria-invalid:bg-[oklch(97.5%_0.016_26)] disabled:cursor-not-allowed disabled:text-neutral-900/40 disabled:shadow-none read-only:shadow-none dark:text-neutral-100 dark:placeholder:text-neutral-100/55 dark:hover:not-focus-visible:not-aria-invalid:not-disabled:not-read-only:bg-neutral-900 dark:focus-visible:border-[var(--rb-accent,oklch(81%_0.16_163))] dark:focus-visible:bg-neutral-900 dark:focus-visible:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-invalid:border-[oklch(65.2%_0.219_26)] dark:aria-invalid:bg-[oklch(26%_0.04_26)] dark:disabled:text-neutral-100/40", "mt-4 mb-1")} /></div><div aria-hidden="true" className={ec(eg, "pointer-events-none absolute inset-x-0 top-0 h-8", d.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={ec(ef, "pointer-events-none absolute inset-x-0 bottom-0 h-8", d.end ? "opacity-100" : "opacity-0")} /></div><div className="flex flex-wrap items-center gap-2 px-4 py-3"><button type="button" className={ec("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_68%,white),var(--rb-accent,oklch(84%_0.15_165)))] text-[var(--rb-accent-fg,oklch(26%_0.06_168))] shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_4px_10px_-4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_80%,transparent)] hover:not-disabled:-translate-y-px hover:not-disabled:brightness-[1.04] hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_7px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_85%,transparent)] active:not-disabled:translate-y-px active:not-disabled:brightness-[0.98] active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_55%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] motion-reduce:hover:translate-y-0 disabled:opacity-45 disabled:shadow-none dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_78%,white),var(--rb-accent,oklch(81%_0.16_163)))] dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_6px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,transparent)] dark:hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_9px_22px_-8px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_60%,transparent)] dark:active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_45%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black)] dark:disabled:shadow-none", ep)}>Reply</button><button type="button" className={ec(ex, ep)}><__mod_22728.n icon={__mod_1497.A} size={18} strokeWidth={2} aria-hidden={!0} />Create issue</button><button type="button" className={ec(ex, ep)}>Archive</button></div></div></div></div></div>;
    },
    "feedback-6": function () {
      let [e, r] = (0, React.useState)("30 days"),
        a = eK[e],
        l = (0, React.useMemo)(() => Math.max(...e0), []),
        {
          ref: i,
          edges: s,
          onScroll: c
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
                scrollHeight: o,
                clientHeight: n
              } = r;
              a({
                start: t > 1,
                end: Math.ceil(t + n) < o - 1
              });
            }, []);
          return (0, React.useEffect)(() => {
            t();
            let r = e.current,
              a = r?.ownerDocument.defaultView;
            if (!r || !a?.ResizeObserver) return;
            let o = new a.ResizeObserver(t);
            return o.observe(r), () => o.disconnect();
          }, [t]), {
            ref: e,
            edges: r,
            onScroll: t
          };
        }();
      return <div className={eW("bg-white dark:bg-neutral-950", "text-neutral-900 dark:text-neutral-100", "flex h-full min-h-[640px] w-full flex-col overflow-hidden p-4 sm:p-6")}><div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"><div className="min-w-0"><h2 className="text-[17px]/[22px] font-extrabold">Feedback insights</h2><p className={eW(eU, "mt-0.5")}>Every survey, widget and email reply, grouped by theme.</p></div><div role="radiogroup" aria-label="Date range" className={eW("inline-flex w-fit max-w-full items-stretch gap-1 rounded-[calc(var(--rb-r-full,999px)_+_min(4px,var(--rb-r-full,999px)))] bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] p-1", "h-10")}>{eY.map(a => {
              let o = e === a;
              return <button type="button" role="radio" aria-checked={o} onClick={() => r(a)} className="relative inline-flex min-w-0 cursor-pointer items-center justify-center gap-1.5 whitespace-nowrap [&_svg]:shrink-0 rounded-[calc(var(--rb-r-full,999px))] px-4 text-[14px]/[18px] font-bold text-neutral-900/78 dark:text-neutral-100/78 select-none transition-[background-color,color,box-shadow,outline-color,scale] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:scale-[0.96] motion-reduce:active:scale-100 hover:not-aria-checked:text-neutral-900 aria-checked:bg-white aria-checked:text-neutral-900 aria-checked:shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_2px_rgb(84_62_32/0.10),0_3px_8px_-2px_rgb(84_62_32/0.20)] disabled:cursor-not-allowed disabled:text-neutral-900/40 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:hover:not-aria-checked:text-neutral-100 dark:aria-checked:bg-[color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800))] dark:aria-checked:text-neutral-100 dark:aria-checked:shadow-[inset_0_1px_0_rgb(255_255_255/0.1),0_0_0_1px_rgb(0_0_0/0.6),0_2px_5px_-1px_rgb(0_0_0/0.6)] dark:disabled:text-neutral-100/40">{a}</button>;
            })}</div></div><div className={eW("@container rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.07),0_1px_2px_rgb(84_62_32/0.06),0_8px_22px_-10px_rgb(84_62_32/0.20)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_0_0_1px_rgb(0_0_0/0.6),0_10px_24px_-12px_rgb(0_0_0/0.8)] p-1", "mt-3")}><div className="grid grid-cols-2 gap-1 [&>:last-child:nth-child(odd)]:col-span-full @3xl:grid-flow-col @3xl:grid-cols-none @3xl:auto-cols-fr @3xl:[&>:last-child:nth-child(odd)]:col-auto"><div className={eR}><p className={eE}>Responses</p><p className={eH}>{a.responses.toLocaleString()}</p><p className={eF}>{Math.round(a.responses / 9800 * 100)}% response rate from 9,800 prompts</p></div><div className={eR}><p className={eE}>Average rating</p><div className="flex items-baseline gap-1.5"><p className={eH}>{a.csat}</p><span className={eO}><__mod_22728.n icon={a.delta > 0 ? __mod_1497.A : a.delta < 0 ? __mod_37502.A : __mod_99199.A} size={14} strokeWidth={2} aria-hidden={!0} /><span className="sr-only">{a.delta > 0 ? "Up" : a.delta < 0 ? "Down" : "No change"}</span>{Math.abs(a.delta).toFixed(1)}</span></div><p className={eF}>Out of 5, against previous period</p></div><div className={eR}><p className={eE}>Sentiment</p><div className="flex h-2 w-full overflow-hidden" role="img" aria-label={eJ.map((e, r) => `${e} ${a.split[r]} percent`).join(", ")}>{a.split.map((e, r) => <span className={eQ[r]} style={{
                  width: `${e}%`
                }} />)}</div><ul className="flex items-center justify-between gap-2">{eJ.map((e, r) => <li className="flex items-center gap-1.5"><span aria-hidden={!0} className={eW("inline-block size-2.5 shrink-0 rounded-full", eQ[r], "size-[6px]")} /><span className={eV}>{e}</span><span className="text-[13px]/[16px] font-bold tabular-nums">{a.split[r]}%</span></li>)}</ul></div></div></div><div className="mt-3 grid min-h-0 flex-1 gap-3 lg:grid-cols-[1fr_320px]"><div className={eW(eP, "min-h-0")}><div className={eW(eD, "justify-between gap-3")}><p className={eB}>Top themes</p><span className={eV}>Mentions this period</span></div><div className={eW(eT, "relative min-h-0 flex-1")}><ul ref={i} onScroll={c} className="min-h-0 flex-1 space-y-2.5 overflow-y-auto p-3">{eX.map(e => <li><div className="flex items-center justify-between gap-3"><span className={eW(e$, "truncate")}>{e.name}</span><span className="flex shrink-0 items-center gap-2"><span className={eW("text-[15px]/[20px] font-bold", "tabular-nums")}>{e.count}</span><span className={eW(eO, "w-11 justify-end")}><__mod_22728.n icon={e.trend > 0 ? __mod_1497.A : e.trend < 0 ? __mod_37502.A : __mod_99199.A} size={14} strokeWidth={2} aria-hidden={!0} /><span className="sr-only">{e.trend > 0 ? "Up" : e.trend < 0 ? "Down" : "No change"}</span>{Math.abs(e.trend)}%</span></span></div><div className={eW("relative block h-2.5 w-full overflow-hidden rounded-[calc(var(--rb-r-full,999px))] bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] shadow-[inset_0_1px_2px_rgb(84_62_32/0.12)] dark:bg-neutral-100/12 dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.5)]", "mt-1.5")}><span className="block h-full rounded-[calc(var(--rb-r-full,999px))] bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_82%,black)] shadow-[inset_0_1px_0_rgb(255_255_255/0.35)] transition-[width] duration-[420ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] motion-reduce:transition-none dark:bg-[var(--rb-accent,oklch(81%_0.16_163))]" style={{
                      width: `${e.share}%`
                    }} /></div></li>)}</ul><div aria-hidden="true" className={eW("bg-linear-to-b from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 top-0 h-8", s.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={eW("bg-linear-to-t from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 bottom-0 h-8", s.end ? "opacity-100" : "opacity-0")} /></div></div><div className={eW(eP, "min-h-0")}><div className={eD}><p className={eB}>Weekly volume</p></div><div className={eW(eT, "min-h-0 flex-1 p-3")}><p className={eV}>Responses per day, last 20 days</p><div className="mt-4 flex min-h-[96px] flex-1 items-end gap-[3px]" role="img" aria-label={`Daily responses rising from ${e0[0]} to ${e0[e0.length - 1]}`}>{e0.map((e, r) => <span className={eW("flex-1 rounded-t-[2px]", r === e0.length - 1 ? eZ : ez)} style={{
                  height: `${Math.round(e / l * 100)}%`
                }} />)}</div><div className={eW(eV, "mt-3 flex items-center justify-between")}><span>20 days ago</span><span className={eM}>{e0[e0.length - 1]} today</span></div></div></div></div></div>;
    }
  },
  e2 = {
    "feedback-1": 560,
    "feedback-2": 560,
    "feedback-3": 560,
    "feedback-4": 740,
    "feedback-5": 700,
    "feedback-6": 640
  };

export { e1 as components };
export { e2 as heights };

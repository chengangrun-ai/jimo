import * as __mod_22728 from "../_helpers/22728";
import * as __mod_49322 from "../_helpers/49322";
import * as __mod_39893 from "../_helpers/39893";
import * as __mod_59649 from "../_helpers/59649";
import * as __mod_90987 from "../_helpers/90987";
import * as __mod_36586 from "../_helpers/36586";
import * as __mod_3980 from "../_helpers/3980";
import * as __mod_48094 from "../_helpers/48094";
import * as __mod_89289 from "../_helpers/89289";
import * as __mod_64132 from "../_helpers/64132";
import * as __mod_17771 from "../_helpers/17771";
import * as __mod_33786 from "../_helpers/33786";
import * as __mod_2605 from "../_helpers/2605";
import * as __mod_22830 from "../_helpers/22830";
/**
 * Comments 3
 * slug: comments-3
 * category: comments
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let c = (...e) => e.filter(Boolean).join(" "),
  d = "text-neutral-900 dark:text-neutral-100",
  _ = "text-neutral-900/78 dark:text-neutral-100/78",
  x = "text-neutral-900/62 dark:text-neutral-100/62",
  b = "text-[14px]/[20px] font-medium",
  p = "text-[15px]/[20px] font-bold",
  u = "h-8 gap-1.5 rounded-[calc(var(--rb-r-full,999px))] px-3.5 text-[14px]/[18px] font-bold",
  h = "relative inline-flex size-8 shrink-0 overflow-hidden rounded-full select-none",
  m = "flex size-full items-center justify-center rounded-[inherit] bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_24%,white)] text-[12px]/[16px] font-extrabold tabular-nums text-neutral-900 dark:text-neutral-100 dark:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_22%,var(--color-neutral-900))]",
  k = (e, r = 2) => e.split(/[\s-]+/).filter(Boolean).slice(0, r).map(e => e[0]?.toUpperCase()).join(""),
  v = [{
    id: "t1",
    author: "Priya Nandakumar",
    role: "Platform",
    time: "2h ago",
    body: "The cutover window is tight. If we hold the read replica until the backfill drains we lose the rollback path, so I would rather split this into two deploys.",
    reactions: 4,
    replies: [{
      id: "t1r1",
      author: "Marcus Bell",
      role: "Infrastructure",
      time: "1h ago",
      body: "Agreed. Two deploys also means the schema change lands on a quiet day instead of during the migration itself."
    }, {
      id: "t1r2",
      author: "Sofia Alvarez",
      role: "Platform",
      time: "48m ago",
      body: "I can prepare the second deploy behind a flag so we can flip it without another release."
    }]
  }, {
    id: "t2",
    author: "Wei Chen",
    role: "Data",
    time: "36m ago",
    body: "One caveat: the backfill job reads from the same connection pool as the API. We should cap it at eight workers or the request latency will spike during business hours.",
    reactions: 2,
    replies: []
  }, {
    id: "t3",
    author: "Tom\xe1s Guerrero",
    role: "Reliability",
    time: "12m ago",
    body: "Added a dashboard for pool saturation so we can watch it live. Alert fires at 80 percent for five minutes.",
    reactions: 1,
    replies: []
  }],
  f = ["Newest", "Oldest"],
  g = e => {
    let r = "ArrowRight" === e.key || "ArrowDown" === e.key ? 1 : "ArrowLeft" === e.key || "ArrowUp" === e.key ? -1 : 0;
    if (!r && "Home" !== e.key && "End" !== e.key) return;
    let a = Array.from(e.currentTarget.querySelectorAll('[role="radio"]:not(:disabled)')),
      t = a.indexOf(e.target);
    if (t < 0) return;
    e.preventDefault();
    let o = "Home" === e.key ? 0 : "End" === e.key ? a.length - 1 : (t + r + a.length) % a.length;
    a[o].focus(), a[o].click();
  };
let j = (...e) => e.filter(Boolean).join(" "),
  N = "bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)]",
  C = "bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] dark:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)]",
  z = "text-neutral-900 dark:text-neutral-100",
  A = "text-neutral-900/78 dark:text-neutral-100/78",
  S = "text-neutral-900/62 dark:text-neutral-100/62",
  M = "text-[14px]/[20px] font-medium",
  L = "text-[13px]/[16px] font-semibold tabular-nums",
  W = "rounded-[var(--rb-r-sm,6px)]",
  R = "relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] text-neutral-900 dark:text-neutral-100 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] active:not-disabled:translate-y-px active:not-disabled:shadow-[inset_0_1px_3px_rgb(84_62_32/0.16),0_0_0_1px_rgb(84_62_32/0.10)] dark:active:not-disabled:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14),0_0_0_1px_rgb(84_62_32/0.10)] dark:aria-expanded:bg-neutral-800 dark:aria-expanded:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] disabled:bg-none disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] disabled:text-neutral-900/40 disabled:shadow-none dark:disabled:bg-neutral-800/60 dark:disabled:text-neutral-100/40",
  H = "relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 shadow-[inset_0_0_0_1px_rgb(84_62_32/0.05)] dark:shadow-[inset_0_0_0_1px_rgb(255_255_255/0.05)]",
  I = "mx-1 mb-1 flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-5xl,22px))] border border-transparent bg-white dark:bg-neutral-950 shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] [&:has(+*)]:mb-0",
  E = "bg-linear-to-b from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950",
  O = "bg-linear-to-t from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950",
  D = [{
    id: "n1",
    author: "Sofia Alvarez",
    time: "3h ago",
    body: "This promise is stronger than what the contract actually covers. Legal asked us to say response time, not resolution time.",
    quote: "resolved within four hours",
    resolved: !1
  }, {
    id: "n2",
    author: "Marcus Bell",
    time: "2h ago",
    body: "Can we name the regions here? Customers on the Frankfurt cluster keep asking whether the guarantee applies to them.",
    quote: "every supported region",
    resolved: !1
  }, {
    id: "n3",
    author: "Priya Nandakumar",
    time: "1h ago",
    body: "Fixed the figure and linked the status page in the footer.",
    quote: "99.9 percent uptime",
    resolved: !0
  }],
  T = [{
    text: "Northwind commits to keeping the platform available and responsive for every customer on a paid plan. This document sets out what we measure, how we report it, and what happens when we fall short."
  }, {
    text: "We target 99.9 percent uptime",
    noteId: "n3"
  }, {
    text: " measured monthly across the API, the dashboard, and the webhook delivery pipeline. Scheduled maintenance is announced at least five business days in advance and does not count against the target."
  }, {
    text: "Support requests raised through the console are acknowledged within one hour and resolved within four hours",
    noteId: "n1"
  }, {
    text: " during business hours. Outside those hours an on-call engineer is paged for anything that blocks production traffic."
  }, {
    text: "The guarantee applies in every supported region",
    noteId: "n2"
  }, {
    text: ", and credits are issued automatically against the following invoice when a monthly target is missed."
  }, {
    text: " Credits are capped at thirty percent of the monthly fee and are applied without the customer having to ask for them. A customer who believes a target was missed can open a claim for up to sixty days after the affected month closes."
  }, {
    text: " We publish a monthly report on the status page with the measured figures, a short note on any incident that consumed error budget, and the remediation work that followed it."
  }, {
    text: " Support is staffed between 08:00 and 20:00 in the customer's primary region, Monday through Friday, excluding public holidays observed at the registered billing address. Enterprise plans add weekend coverage for anything classified as severity one."
  }, {
    text: " Either party may propose changes to this document. Changes take effect at the start of the following billing period, and customers are notified at least thirty days before an existing commitment is reduced."
  }];
function B() {
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
}
let q = (...e) => e.filter(Boolean).join(" "),
  P = "text-neutral-900 dark:text-neutral-100",
  U = "text-neutral-900/78 dark:text-neutral-100/78",
  $ = "text-neutral-900/62 dark:text-neutral-100/62",
  F = "text-[14px]/[20px] font-medium",
  Z = "mx-1 mb-1 flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-5xl,22px))] border border-transparent bg-white dark:bg-neutral-950 shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] [&:has(+*)]:mb-0",
  G = [{
    no: 82,
    kind: "context",
    text: "  const pool = await getPool(region);"
  }, {
    no: 83,
    kind: "context",
    text: ""
  }, {
    no: 84,
    kind: "del",
    text: "  const rows = await pool.query(sql);"
  }, {
    no: 85,
    kind: "add",
    text: "  const rows = await pool.query(sql, {"
  }, {
    no: 86,
    kind: "add",
    text: "    timeout: 30_000,"
  }, {
    no: 87,
    kind: "add",
    text: "    maxWorkers: 8,"
  }, {
    no: 88,
    kind: "add",
    text: "  });"
  }, {
    no: 89,
    kind: "context",
    text: ""
  }, {
    no: 90,
    kind: "context",
    text: "  return rows.map(toRecord);"
  }],
  K = [{
    id: "c1",
    author: "Wei Chen",
    time: "4h ago",
    body: "Hard-coding eight workers here will bite us when the pool size changes. Read it from the pool config so the two never drift apart.",
    suggestion: "maxWorkers: pool.size / 2,"
  }, {
    id: "c2",
    author: "Priya Nandakumar",
    time: "2h ago",
    body: "Good catch. I also want the timeout to come from the same place, otherwise a slow region silently inherits the default."
  }];
let ea = (...e) => e.filter(Boolean).join(" "),
  et = "text-neutral-900 dark:text-neutral-100",
  eo = "text-neutral-900/62 dark:text-neutral-100/62",
  en = "text-[14px]/[20px] font-medium",
  el = "text-[13px]/[16px] font-semibold tabular-nums",
  ei = "relative inline-flex size-8 shrink-0 overflow-hidden rounded-full select-none",
  es = "flex size-full items-center justify-center rounded-[inherit] bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_24%,white)] text-[12px]/[16px] font-extrabold tabular-nums text-neutral-900 dark:text-neutral-100 dark:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_22%,var(--color-neutral-900))]",
  ec = "rounded-[var(--rb-r-6xl,26px)]",
  ed = (e, r = 2) => e.split(/[\s-]+/).filter(Boolean).slice(0, r).map(e => e[0]?.toUpperCase()).join(""),
  e_ = [{
    name: "Priya Nandakumar",
    handle: "priya",
    team: "Platform"
  }, {
    name: "Marcus Bell",
    handle: "marcus",
    team: "Infrastructure"
  }, {
    name: "Sofia Alvarez",
    handle: "sofia",
    team: "Platform"
  }, {
    name: "Wei Chen",
    handle: "wei",
    team: "Data"
  }, {
    name: "Tom\xe1s Guerrero",
    handle: "tomas",
    team: "Reliability"
  }],
  ex = ["pool-saturation.png", "backfill-plan.md"],
  eb = [{
    author: "Wei Chen",
    time: "4h ago",
    body: "Hard-coding eight workers will bite us when the pool size changes. Read it from the pool config so the two never drift apart."
  }, {
    author: "Marcus Bell",
    time: "2h ago",
    body: "Agreed, and the same argument applies to the timeout. A slow region should not silently inherit the default."
  }, {
    author: "Sofia Alvarez",
    time: "38m ago",
    body: "I pulled both values into the region config so there is one place to change them. Screenshot of the saturation graph is attached."
  }];
function ep(e) {
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
let eh = (...e) => e.filter(Boolean).join(" "),
  em = "text-neutral-900 dark:text-neutral-100",
  ek = "text-neutral-900/62 dark:text-neutral-100/62",
  ev = "text-[14px]/[20px] font-medium",
  ef = "text-[13px]/[16px] font-semibold tabular-nums",
  eg = [{
    id: "n1",
    author: "Priya Nandakumar",
    time: "12m",
    place: "Q3 pricing model",
    anchor: "Cell D14",
    body: "@amelia the enterprise tier still assumes the old seat minimum. Can you confirm before this goes to finance?",
    mention: !0
  }, {
    id: "n2",
    author: "Marcus Bell",
    time: "1h",
    place: "Backfill runbook",
    anchor: "Step 4",
    body: "Rewrote the rollback section so it no longer depends on the operator being on call.",
    mention: !1
  }, {
    id: "n3",
    author: "Sofia Alvarez",
    time: "3h",
    place: "Onboarding redesign",
    anchor: "Frame 12",
    body: "@amelia the empty state copy reads a little cold here. Suggested two alternates in the thread.",
    mention: !0
  }, {
    id: "n4",
    author: "Wei Chen",
    time: "5h",
    place: "query.ts",
    anchor: "Line 86",
    body: "Left a suggestion on the worker cap. Not blocking, but nice to land here.",
    mention: !1
  }, {
    id: "n5",
    author: "Tom\xe1s Guerrero",
    time: "Yesterday",
    place: "Incident 4471",
    anchor: "Timeline",
    body: "Added the paging gap between 02:10 and 02:40. That is the part we should fix first.",
    mention: !1
  }],
  ew = ["All", "Unresolved", "Mentions"],
  ey = e => {
    let r = "ArrowRight" === e.key || "ArrowDown" === e.key ? 1 : "ArrowLeft" === e.key || "ArrowUp" === e.key ? -1 : 0;
    if (!r && "Home" !== e.key && "End" !== e.key) return;
    let a = Array.from(e.currentTarget.querySelectorAll('[role="radio"]:not(:disabled)')),
      t = a.indexOf(e.target);
    if (t < 0) return;
    e.preventDefault();
    let o = "Home" === e.key ? 0 : "End" === e.key ? a.length - 1 : (t + r + a.length) % a.length;
    a[o].focus(), a[o].click();
  },
  ej = (...e) => e.filter(Boolean).join(" "),
  eN = "bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))]",
  eC = "text-neutral-900 dark:text-neutral-100",
  ez = "text-neutral-900/78 dark:text-neutral-100/78",
  eA = "text-neutral-900/62 dark:text-neutral-100/62",
  eS = "text-[14px]/[20px] font-medium",
  eM = "relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] text-neutral-900 dark:text-neutral-100 shadow-[0_0_0_1px_rgb(84_62_32/0.07),0_1px_2px_rgb(84_62_32/0.06),0_8px_22px_-10px_rgb(84_62_32/0.20)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_0_0_1px_rgb(0_0_0/0.6),0_10px_24px_-12px_rgb(0_0_0/0.8)]",
  eL = "rounded-[calc(var(--rb-r-lg,10px))] bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-100/8",
  eW = ej(eN, "border-2 border-neutral-900/30 dark:border-neutral-100/34", ez),
  eR = ej(eN, "border border-neutral-900/12 dark:border-neutral-100/14", eA),
  eH = [{
    id: 1,
    author: "Sofia Alvarez",
    time: "9m",
    body: "The headline and the sub both sit at the same weight, so nothing leads. Drop the sub to secondary.",
    top: "22%",
    left: "26%"
  }, {
    id: 2,
    author: "Amelia Whitfield",
    time: "44m",
    body: "This card is 4px off the column it belongs to. Snap it back before we hand off.",
    top: "44%",
    left: "74%"
  }, {
    id: 3,
    author: "Jonas Vikander",
    time: "2h",
    body: "Can the footer link row stay above the fold on a 13 inch screen? It disappears at that size today.",
    top: "88%",
    left: "30%"
  }],
  eI = {
    "comments-1": function () {
      let [e, r] = (0, React.useState)("Oldest"),
        [a, w] = (0, React.useState)(["t1"]),
        [y, j] = (0, React.useState)(""),
        {
          ref: N,
          edges: C,
          onScroll: z
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
        }(),
        A = (0, React.useMemo)(() => "Oldest" === e ? v : [...v].reverse(), [e]),
        S = v.reduce((e, r) => e + 1 + r.replies.length, 0),
        M = ({
          id: e,
          reactions: r
        }) => {
          let o = a.includes(e);
          return <div className="mt-2 flex items-center gap-1"><button type="button" aria-pressed={o} onClick={() => w(r => r.includes(e) ? r.filter(r => r !== e) : [...r, e])} className={c("relative inline-flex h-8 max-w-full min-w-0 shrink-0 cursor-pointer items-center gap-1.5 whitespace-nowrap rounded-[calc(var(--rb-r-full,999px))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] px-3.5 text-[14px]/[18px] font-bold text-neutral-900 dark:text-neutral-100 select-none transition-[background-color,border-color,box-shadow,color,scale,translate,outline-color] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:translate-y-px active:duration-[90ms] motion-reduce:active:translate-y-0 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] aria-pressed:bg-none aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-pressed:shadow-[inset_0_0_0_1.5px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14)] disabled:cursor-not-allowed disabled:text-neutral-900/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-pressed:shadow-[inset_0_0_0_1.5px_var(--rb-accent,oklch(81%_0.16_163))] dark:aria-expanded:bg-neutral-800 dark:disabled:text-neutral-100/40", "tabular-nums")}><__mod_22728.n icon={__mod_49322.A} size={16} strokeWidth={2} aria-hidden="true" />{r + +!!o}</button><button type="button" className={c("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] text-neutral-900 dark:text-neutral-100 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] active:not-disabled:translate-y-px active:not-disabled:shadow-[inset_0_1px_3px_rgb(84_62_32/0.16),0_0_0_1px_rgb(84_62_32/0.10)] dark:active:not-disabled:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14),0_0_0_1px_rgb(84_62_32/0.10)] dark:aria-expanded:bg-neutral-800 dark:aria-expanded:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] disabled:bg-none disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] disabled:text-neutral-900/40 disabled:shadow-none dark:disabled:bg-neutral-800/60 dark:disabled:text-neutral-100/40", u)}><__mod_22728.n icon={__mod_39893.A} size={18} strokeWidth={2} aria-hidden="true" />Reply</button></div>;
        };
      return <div className={c("bg-white dark:bg-neutral-950", d, "flex h-full min-h-[640px] w-full flex-col justify-center-safe overflow-y-auto p-6 sm:p-8")}><div className="mx-auto w-full max-w-[720px]"><div className="mb-3 flex flex-wrap items-end justify-between gap-3"><div className="min-w-0"><h2 className={c("text-[17px]/[22px] font-extrabold", d)}>Migration plan feedback</h2><p className={c(b, x, "mt-0.5 flex gap-3 truncate")}><span>{S} comments</span><span>4 participants</span></p></div><div role="radiogroup" aria-label="Sort comments" onKeyDown={g} className={c("inline-flex w-fit max-w-full items-stretch gap-1 rounded-[calc(var(--rb-r-full,999px)_+_min(4px,var(--rb-r-full,999px)))] bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] p-1", "h-10", "shrink-0")}>{f.map(a => <button type="button" role="radio" aria-checked={a === e} tabIndex={a === e ? 0 : -1} onClick={() => r(a)} className="relative inline-flex min-w-0 cursor-pointer items-center justify-center gap-1.5 whitespace-nowrap [&_svg]:shrink-0 rounded-[calc(var(--rb-r-full,999px))] px-4 text-[14px]/[18px] font-bold text-neutral-900/78 dark:text-neutral-100/78 select-none transition-[background-color,color,box-shadow,outline-color,scale] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:scale-[0.96] motion-reduce:active:scale-100 hover:not-aria-checked:text-neutral-900 aria-checked:bg-white aria-checked:text-neutral-900 aria-checked:shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_2px_rgb(84_62_32/0.10),0_3px_8px_-2px_rgb(84_62_32/0.20)] disabled:cursor-not-allowed disabled:text-neutral-900/40 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:hover:not-aria-checked:text-neutral-100 dark:aria-checked:bg-[color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800))] dark:aria-checked:text-neutral-100 dark:aria-checked:shadow-[inset_0_1px_0_rgb(255_255_255/0.1),0_0_0_1px_rgb(0_0_0/0.6),0_2px_5px_-1px_rgb(0_0_0/0.6)] dark:disabled:text-neutral-100/40">{a}</button>)}</div></div><div className="relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 shadow-[inset_0_0_0_1px_rgb(84_62_32/0.05)] dark:shadow-[inset_0_0_0_1px_rgb(255_255_255/0.05)]"><div className={c("mx-1 mb-1 flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-5xl,22px))] border border-transparent bg-white dark:bg-neutral-950 shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] [&:has(+*)]:mb-0", "relative mt-1")}><div ref={N} onScroll={z} className={c("divide-y divide-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:divide-neutral-100/7", "max-h-[280px] overflow-y-auto sm:max-h-[368px]")}>{A.map(e => <article className="flex gap-3 p-3"><div className="flex shrink-0 flex-col items-center"><span aria-hidden={!0} className={h}><span className={m}>{k(e.author)}</span></span>{e.replies.length > 0 && <span aria-hidden={!0} className={c("border-r border-transparent", "mt-2 w-px flex-1")} />}</div><div className="min-w-0 flex-1"><div className="flex items-center justify-between gap-3"><div className="flex min-h-7 min-w-0 flex-wrap content-center items-baseline gap-x-2"><p className={c(p, d, "min-w-0 truncate")}>{e.author}</p><p className={c(b, x, "flex gap-x-2")}><span>{e.role}</span><span>{e.time}</span></p></div><button type="button" aria-label={`More actions on ${e.author}'s comment`} className={c("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-transparent text-neutral-900 hover:not-disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] active:not-disabled:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] disabled:text-neutral-900/40 dark:text-neutral-100 dark:hover:not-disabled:bg-neutral-100/8 dark:active:not-disabled:bg-neutral-100/12 dark:aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:disabled:text-neutral-100/40", "size-8 rounded-[calc(var(--rb-r-full,999px))]")}><__mod_22728.n icon={__mod_59649.A} size={18} strokeWidth={2} aria-hidden="true" /></button></div><p className={c(b, _, "mt-1")}>{e.body}</p><M id={e.id} reactions={e.reactions} />{e.replies.length > 0 && <div className="mt-3 space-y-3">{e.replies.map(e => <div className="flex gap-2"><span aria-hidden={!0} className={c(h, "size-[24px]")}><span className={m}>{k(e.author, 1)}</span></span><div className="min-w-0 flex-1"><div className="flex min-h-6 min-w-0 flex-wrap content-center items-baseline gap-x-2"><p className={c(p, d, "min-w-0 truncate")}>{e.author}</p><span className={c(b, x)}>{e.time}</span></div><p className={c(b, _, "mt-0.5")}>{e.body}</p></div></div>)}</div>}</div></article>)}</div><div aria-hidden="true" className={c("bg-linear-to-b from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 top-0 h-8", C.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={c("bg-linear-to-t from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 bottom-0 h-8", C.end ? "opacity-100" : "opacity-0")} /></div></div><div className={c("relative flex w-full min-w-0 flex-col rounded-[calc(min(var(--rb-r-6xl,26px),min(var(--rb-r-full,999px),16px)_+_8px))] border border-transparent bg-white text-neutral-900 dark:text-neutral-100 shadow-[0_0_0_1px_rgb(84_62_32/0.07),0_1px_2px_rgb(84_62_32/0.06),0_8px_22px_-10px_rgb(84_62_32/0.20)] transition-[box-shadow] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] focus-within:shadow-[0_0_0_1.5px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black),0_0_0_5px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent),0_8px_22px_-10px_rgb(84_62_32/0.2)] dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_0_0_1px_rgb(0_0_0/0.6),0_10px_24px_-12px_rgb(0_0_0/0.8)] dark:focus-within:shadow-[0_0_0_1.5px_var(--rb-accent,oklch(81%_0.16_163)),0_0_0_5px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)]", "mt-2 p-3")}><label htmlFor="comments-1-draft" className="sr-only">Write a comment</label><textarea id="comments-1-draft" value={y} onChange={e => j(e.target.value)} rows={2} placeholder="Write a comment" className={c("max-h-40 min-h-6 min-w-0 flex-auto resize-none bg-transparent px-1.5 py-1.5 field-sizing-content text-[15px]/[22px] font-medium text-neutral-900 dark:text-neutral-100 outline-none placeholder:text-neutral-900/55 dark:placeholder:text-neutral-100/55", "field-sizing-content min-h-12 w-full")} /><div className="mt-2 flex items-center justify-between gap-3 ps-1.5"><p className={c(b, x, "truncate")}>Mention a teammate with @ to notify them.</p><button type="button" disabled={0 === y.trim().length} className={c("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_68%,white),var(--rb-accent,oklch(84%_0.15_165)))] text-[var(--rb-accent-fg,oklch(26%_0.06_168))] shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_4px_10px_-4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_80%,transparent)] hover:not-disabled:-translate-y-px hover:not-disabled:brightness-[1.04] hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_7px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_85%,transparent)] active:not-disabled:translate-y-px active:not-disabled:brightness-[0.98] active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_55%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] motion-reduce:hover:translate-y-0 disabled:opacity-45 disabled:shadow-none dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_78%,white),var(--rb-accent,oklch(81%_0.16_163)))] dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_6px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,transparent)] dark:hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_9px_22px_-8px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_60%,transparent)] dark:active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_45%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black)] dark:disabled:shadow-none", u)}>Comment</button></div></div></div></div>;
    },
    "comments-2": function () {
      let [e, r] = (0, React.useState)("n1"),
        [a, l] = (0, React.useState)(D.filter(e => e.resolved).map(e => e.id)),
        {
          ref: i,
          edges: s,
          onScroll: c
        } = B(),
        {
          ref: d,
          edges: _,
          onScroll: x
        } = B(),
        b = D.filter(e => !a.includes(e.id)).length;
      return <div className={j("bg-white dark:bg-neutral-950", z, "flex h-full min-h-[660px] w-full flex-col justify-center-safe overflow-y-auto p-6 sm:p-8")}><div className="mx-auto w-full max-w-[1040px]"><div className="mb-3 flex flex-wrap items-end justify-between gap-3"><div className="min-w-0"><h2 className={j("text-[17px]/[22px] font-extrabold", z)}>Service commitment draft</h2><p className={j(M, S, "mt-0.5 flex items-center gap-3 truncate")}><span>{b} open comment{1 === b ? "" : "s"}</span><span>{D.length} total</span></p></div></div><div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_320px]"><div className={H}><div className={j(I, "relative mt-1")}><div ref={i} onScroll={c} className="max-h-[380px] overflow-y-auto p-3 lg:max-h-none"><p className={j("text-[15px]/[22px] font-medium", A)}>{T.map((o, n) => {
                      if (!o.noteId) return <span>{o.text}</span>;
                      let l = e === o.noteId,
                        i = a.includes(o.noteId);
                      return <button type="button" onClick={() => r(o.noteId)} aria-label={`Show comment on "${o.text}"`} className={j("transition-[color,background-color,border-color,box-shadow,outline-color,opacity,scale,translate] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms]", "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))]", W, "cursor-pointer px-0.5 text-left underline underline-offset-4 [box-decoration-break:clone]", i ? j(S, "decoration-dotted") : l ? j(C, z, "decoration-solid") : j(N, z, "decoration-dotted"))}>{o.text}</button>;
                    })}</p></div><div aria-hidden="true" className={j(E, "pointer-events-none absolute inset-x-0 top-0 h-8", s.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={j(O, "pointer-events-none absolute inset-x-0 bottom-0 h-8", s.end ? "opacity-100" : "opacity-0")} /></div></div><aside className="relative hidden min-w-0 lg:block"><div className="absolute inset-0 flex flex-col"><p className={j(L, S, "mb-2 px-1")}>Comments</p><div className={j(H, "min-h-0 flex-1")}><div className={j(I, "relative mt-1 min-h-0 flex-1")}><div ref={d} onScroll={x} className={j("divide-y divide-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:divide-neutral-100/7", "min-h-0 flex-1 overflow-y-auto overscroll-contain")}>{D.map(o => {
                        let i = e === o.id,
                          s = a.includes(o.id);
                        return <div className="p-1"><div className={j(i && C, "rounded-[var(--rb-r-4xl,18px)]", "p-2")}><div className="flex items-center gap-2"><span aria-hidden={!0} className={j("relative inline-flex size-8 shrink-0 overflow-hidden rounded-full select-none", "size-[24px]")}><span className="flex size-full items-center justify-center rounded-[inherit] bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_24%,white)] text-[12px]/[16px] font-extrabold tabular-nums text-neutral-900 dark:text-neutral-100 dark:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_22%,var(--color-neutral-900))]">{((e, r = 2) => e.split(/[\s-]+/).filter(Boolean).slice(0, r).map(e => e[0]?.toUpperCase()).join(""))(o.author, 1)}</span></span><p className={j("text-[15px]/[20px] font-bold", z, "min-w-0 flex-1 truncate")}>{o.author}</p><span className={j(L, S, "shrink-0")}>{o.time}</span></div><div className="mt-1.5 flex flex-col gap-1.5 ps-8"><p className={j(N, W, M, S, "truncate px-2 py-1")}>{o.quote}</p><p className={j(M, s ? S : A, s && "line-through")}>{o.body}</p><div className="mt-0.5 flex items-center gap-1"><button type="button" aria-pressed={s} onClick={() => {
                                  let e;
                                  return e = o.id, l(r => r.includes(e) ? r.filter(r => r !== e) : [...r, e]);
                                }} className="relative inline-flex h-8 max-w-full min-w-0 shrink-0 cursor-pointer items-center gap-1.5 whitespace-nowrap rounded-[calc(var(--rb-r-full,999px))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] px-3.5 text-[14px]/[18px] font-bold text-neutral-900 dark:text-neutral-100 select-none transition-[background-color,border-color,box-shadow,color,scale,translate,outline-color] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:translate-y-px active:duration-[90ms] motion-reduce:active:translate-y-0 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] aria-pressed:bg-none aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-pressed:shadow-[inset_0_0_0_1.5px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14)] disabled:cursor-not-allowed disabled:text-neutral-900/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-pressed:shadow-[inset_0_0_0_1.5px_var(--rb-accent,oklch(81%_0.16_163))] dark:aria-expanded:bg-neutral-800 dark:disabled:text-neutral-100/40"><__mod_22728.n icon={__mod_90987.A} size={16} strokeWidth={2} aria-hidden="true" />{s ? "Resolved" : "Resolve"}</button><button type="button" onClick={() => r(o.id)} className={j(R, "h-8 gap-1.5 rounded-[calc(var(--rb-r-full,999px))] px-3.5 text-[14px]/[18px] font-bold")}>Show in text</button></div></div></div></div>;
                      })}</div><div aria-hidden="true" className={j(E, "pointer-events-none absolute inset-x-0 top-0 h-8", _.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={j(O, "pointer-events-none absolute inset-x-0 bottom-0 h-8", _.end ? "opacity-100" : "opacity-0")} /></div></div></div></aside><div className={j(H, "lg:hidden")}><div className={j(I, "mt-1")}><div className="flex items-center justify-between gap-3 p-3"><p className={j(M, S, "flex min-w-0 items-center gap-2")}><__mod_22728.n icon={__mod_36586.A} size={16} strokeWidth={2} aria-hidden="true" className="shrink-0" /><span className="truncate">{b} open comment{1 === b ? "" : "s"} on this draft</span></p><button type="button" className={j(R, "h-10 gap-2 rounded-[calc(var(--rb-r-full,999px))] px-5 text-[15px]/[20px] font-bold")}>Review</button></div></div></div></div></div></div>;
    },
    "comments-3": function () {
      let [e, r] = (0, React.useState)(!1),
        [a, l] = (0, React.useState)(""),
        {
          ref: s,
          edges: c,
          onScroll: d
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
      return <div className={q("bg-white dark:bg-neutral-950", P, "flex h-full min-h-[640px] w-full flex-col justify-center-safe overflow-y-auto p-6 sm:p-8")}><div className="mx-auto w-full max-w-[820px]"><div className="mb-3 flex flex-wrap items-end justify-between gap-3"><div className="min-w-0"><h2 className={q("text-[17px]/[22px] font-extrabold", P, "flex items-center gap-2")}><__mod_22728.n icon={__mod_3980.A} size={18} strokeWidth={2} aria-hidden="true" className="shrink-0" />Cap backfill concurrency</h2><p className={q(F, $, "mt-0.5 flex min-w-0 items-baseline gap-3")}><span className={q("font-mono text-[12px]/[16px] tabular-nums", "min-w-0 truncate")}>packages/data/src/query.ts</span><span className="shrink-0">2 comments</span></p></div><button type="button" aria-pressed={e} onClick={() => r(!e)} className="relative inline-flex h-8 max-w-full min-w-0 shrink-0 cursor-pointer items-center gap-1.5 whitespace-nowrap rounded-[calc(var(--rb-r-full,999px))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] px-3.5 text-[14px]/[18px] font-bold text-neutral-900 dark:text-neutral-100 select-none transition-[background-color,border-color,box-shadow,color,scale,translate,outline-color] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:translate-y-px active:duration-[90ms] motion-reduce:active:translate-y-0 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] aria-pressed:bg-none aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-pressed:shadow-[inset_0_0_0_1.5px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14)] disabled:cursor-not-allowed disabled:text-neutral-900/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-pressed:shadow-[inset_0_0_0_1.5px_var(--rb-accent,oklch(81%_0.16_163))] dark:aria-expanded:bg-neutral-800 dark:disabled:text-neutral-100/40"><__mod_22728.n icon={__mod_90987.A} size={16} strokeWidth={2} aria-hidden="true" />{e ? "Resolved" : "Resolve thread"}</button></div><div className="relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 shadow-[inset_0_0_0_1px_rgb(84_62_32/0.05)] dark:shadow-[inset_0_0_0_1px_rgb(255_255_255/0.05)]"><div className={q(Z, "mt-1 max-h-52 overflow-y-auto sm:max-h-none")}><pre className={q("font-mono text-[13px]/[20px] tabular-nums", P, "overflow-auto py-3 [scrollbar-width:thin]")}>{G.map(e => <div className={q("flex px-4", "add" === e.kind && "bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] dark:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)]", "gap-3")}><span className={q($, "w-8 shrink-0 text-right select-none")}>{e.no}</span><span aria-hidden={!0} className={q($, "w-2 shrink-0 select-none")}>{"add" === e.kind ? "+" : "del" === e.kind ? "-" : ""}</span><span className={q("min-w-0 flex-1 whitespace-pre", "context" === e.kind && U, "del" === e.kind && q($, "line-through"))}>{e.text || " "}</span></div>)}</pre></div><div className={q(Z, "relative mt-1")}><div ref={s} onScroll={d} className={q("divide-y divide-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:divide-neutral-100/7", "max-h-[260px] overflow-y-auto sm:max-h-none")}>{K.map(e => <article className="flex gap-3 p-3"><span aria-hidden={!0} className={q("relative inline-flex size-8 shrink-0 overflow-hidden rounded-full select-none", "size-[28px]")}><span className="flex size-full items-center justify-center rounded-[inherit] bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_24%,white)] text-[12px]/[16px] font-extrabold tabular-nums text-neutral-900 dark:text-neutral-100 dark:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_22%,var(--color-neutral-900))]">{e.author.split(/[\s-]+/).filter(Boolean).slice(0, 2).map(e => e[0]?.toUpperCase()).join("")}</span></span><div className="min-w-0 flex-1"><div className="flex min-w-0 flex-wrap items-baseline gap-x-2"><p className={q("text-[15px]/[20px] font-bold", P, "min-w-0 truncate")}>{e.author}</p><span className={q(F, $)}>{e.time}</span></div><p className={q(F, U, "mt-1")}>{e.body}</p>{e.suggestion && <div className={q("bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)]", "rounded-[var(--rb-r-4xl,18px)]", "mt-2 px-3 py-2")}><p className={q("text-[13px]/[16px] font-semibold tabular-nums", $)}>Suggested change</p><pre className={q("min-w-0 overflow-x-auto font-mono text-[12px]/[18px] whitespace-pre-wrap text-neutral-900/78 dark:text-neutral-100/78 [overflow-wrap:anywhere]", "mt-1")}>{e.suggestion}</pre></div>}</div></article>)}</div><div aria-hidden="true" className={q("bg-linear-to-b from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 top-0 h-8", c.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={q("bg-linear-to-t from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 bottom-0 h-8", c.end ? "opacity-100" : "opacity-0")} /></div></div><div data-concentric={!0} className={q("relative flex w-full min-w-0 cursor-text items-center rounded-[calc(var(--rb-r-xl,12px))] data-concentric:rounded-[var(--rb-r-5xl,22px)] border border-transparent bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] text-[15px]/[20px] font-medium text-neutral-900 transition-[border-color,box-shadow,background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:not-focus-within:not-has-[[aria-invalid=true]]:not-has-[input:disabled]:not-has-[input[readonly]]:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] focus-within:border-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] focus-within:bg-white focus-within:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] has-[[aria-invalid=true]]:border-[oklch(60%_0.236_26)] has-[[aria-invalid=true]]:bg-[oklch(97.5%_0.016_26)] has-[input:disabled]:cursor-not-allowed has-[input:disabled]:text-neutral-900/40 has-[input:disabled]:shadow-none has-[input[readonly]]:cursor-default has-[input[readonly]]:shadow-none dark:text-neutral-100 dark:hover:not-focus-within:not-has-[[aria-invalid=true]]:not-has-[input:disabled]:not-has-[input[readonly]]:bg-neutral-900 dark:focus-within:border-[var(--rb-accent,oklch(81%_0.16_163))] dark:focus-within:bg-neutral-900 dark:focus-within:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:has-[[aria-invalid=true]]:border-[oklch(65.2%_0.219_26)] dark:has-[[aria-invalid=true]]:bg-[oklch(26%_0.04_26)] dark:has-[input:disabled]:text-neutral-100/40", "h-12", "mt-2")}><label htmlFor="comments-3-draft" className="sr-only">Reply to this thread</label><input id="comments-3-draft" value={a} onChange={e => l(e.target.value)} placeholder="Reply to this thread" className="h-full w-full min-w-0 flex-1 bg-transparent px-4 outline-none [[data-affix]+&]:ps-2 [&:has(+[data-affix])]:pe-2 placeholder:font-medium placeholder:text-neutral-900/55 disabled:cursor-not-allowed disabled:placeholder:text-neutral-900/30 dark:placeholder:text-neutral-100/55 dark:disabled:placeholder:text-neutral-100/30 dark:[color-scheme:dark]" /><span data-affix={!0} className="flex shrink-0 items-center gap-2 text-[15px]/[20px] font-semibold text-neutral-900/62 dark:text-neutral-100/62 select-none first:ps-3.5 last:pe-3.5 has-[button]:first:ps-1 has-[button]:last:pe-1"><button type="button" disabled={0 === a.trim().length} className={q("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_68%,white),var(--rb-accent,oklch(84%_0.15_165)))] text-[var(--rb-accent-fg,oklch(26%_0.06_168))] shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_4px_10px_-4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_80%,transparent)] hover:not-disabled:-translate-y-px hover:not-disabled:brightness-[1.04] hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_7px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_85%,transparent)] active:not-disabled:translate-y-px active:not-disabled:brightness-[0.98] active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_55%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] motion-reduce:hover:translate-y-0 disabled:opacity-45 disabled:shadow-none dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_78%,white),var(--rb-accent,oklch(81%_0.16_163)))] dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_6px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,transparent)] dark:hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_9px_22px_-8px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_60%,transparent)] dark:active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_45%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black)] dark:disabled:shadow-none", "h-8 gap-1.5 rounded-[calc(var(--rb-r-full,999px))] px-3.5 text-[14px]/[18px] font-bold", "me-1")}><__mod_22728.n icon={__mod_39893.A} size={18} strokeWidth={2} aria-hidden="true" />Reply</button></span></div></div></div>;
    },
    "comments-4": function () {
      let [e, r] = (0, React.useState)("Nice catch on the pool cap. @"),
        [a, l] = (0, React.useState)(ex),
        [i, s] = (0, React.useState)(0),
        c = (0, React.useRef)(null),
        {
          ref: d,
          edges: _,
          onScroll: x
        } = ep(),
        b = (0, React.useMemo)(() => {
          let r = e.lastIndexOf("@");
          if (-1 === r) return null;
          let a = e.slice(r + 1);
          return /\s/.test(a) ? null : a.toLowerCase();
        }, [e]),
        p = (0, React.useMemo)(() => null === b ? [] : e_.filter(e => e.handle.startsWith(b) || e.name.toLowerCase().includes(b)), [b]),
        {
          ref: u,
          edges: h,
          onScroll: m
        } = ep(p.map(e => e.handle).join());
      (0, React.useEffect)(() => {
        let e = u.current,
          r = e?.querySelector('[aria-selected="true"]');
        if (!e || !r) return;
        let a = r.offsetTop,
          t = a + r.offsetHeight;
        a < e.scrollTop ? e.scrollTop = a : t > e.scrollTop + e.clientHeight && (e.scrollTop = t - e.clientHeight);
      }, [i, p, u]);
      let k = a => {
        let t = e.lastIndexOf("@");
        r(`${e.slice(0, t)}@${a.handle} `), s(0), c.current?.focus();
      };
      return <div className={ea("bg-white dark:bg-neutral-950", et, "flex h-full min-h-[640px] w-full flex-col justify-center-safe overflow-y-auto p-6 sm:p-8")}><div className="mx-auto w-full max-w-[620px]"><div className="mb-3"><h2 className={ea("text-[17px]/[22px] font-extrabold", et)}>Leave a comment</h2><p className={ea(en, eo, "mt-0.5")}>Type @ to mention a teammate. They are notified once you post.</p></div><div className={ea("relative flex w-full min-w-0 flex-col rounded-[calc(min(var(--rb-r-6xl,26px),min(var(--rb-r-full,999px),16px)_+_8px))] border border-transparent bg-white text-neutral-900 dark:text-neutral-100 shadow-[0_0_0_1px_rgb(84_62_32/0.07),0_1px_2px_rgb(84_62_32/0.06),0_8px_22px_-10px_rgb(84_62_32/0.20)] transition-[box-shadow] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] focus-within:shadow-[0_0_0_1.5px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black),0_0_0_5px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent),0_8px_22px_-10px_rgb(84_62_32/0.2)] dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_0_0_1px_rgb(0_0_0/0.6),0_10px_24px_-12px_rgb(0_0_0/0.8)] dark:focus-within:shadow-[0_0_0_1.5px_var(--rb-accent,oklch(81%_0.16_163)),0_0_0_5px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)]", "z-10 p-3")}><div className="flex gap-3"><span aria-hidden={!0} className={ei}><span className={es}>AW</span></span><div className="min-w-0 flex-1"><label htmlFor="comments-4-draft" className="sr-only">Write a comment</label><textarea id="comments-4-draft" ref={c} value={e} onChange={e => {
                  r(e.target.value), s(0);
                }} onKeyDown={e => {
                  0 !== p.length && ("ArrowDown" === e.key ? (e.preventDefault(), s(e => (e + 1) % p.length)) : "ArrowUp" === e.key ? (e.preventDefault(), s(e => (e - 1 + p.length) % p.length)) : "Enter" !== e.key || e.shiftKey || (e.preventDefault(), k(p[i])));
                }} rows={2} placeholder="Write a comment" className={ea("max-h-40 min-h-6 min-w-0 flex-auto resize-none bg-transparent px-1.5 py-1.5 field-sizing-content text-[15px]/[22px] font-medium text-neutral-900 dark:text-neutral-100 outline-none placeholder:text-neutral-900/55 dark:placeholder:text-neutral-100/55", "field-sizing-content min-h-12 w-full")} />{a.length > 0 && <div className="mt-1 flex flex-wrap gap-1.5 px-1.5">{a.map(e => <span className="relative inline-flex h-8 max-w-full min-w-0 shrink-0 cursor-pointer items-center gap-1.5 whitespace-nowrap rounded-[calc(var(--rb-r-full,999px))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] px-3.5 text-[14px]/[18px] font-bold text-neutral-900 dark:text-neutral-100 select-none transition-[background-color,border-color,box-shadow,color,scale,translate,outline-color] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:translate-y-px active:duration-[90ms] motion-reduce:active:translate-y-0 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] aria-pressed:bg-none aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-pressed:shadow-[inset_0_0_0_1.5px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14)] disabled:cursor-not-allowed disabled:text-neutral-900/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-pressed:shadow-[inset_0_0_0_1.5px_var(--rb-accent,oklch(81%_0.16_163))] dark:aria-expanded:bg-neutral-800 dark:disabled:text-neutral-100/40"><__mod_22728.n icon={__mod_48094.A} size={14} strokeWidth={2} aria-hidden="true" className="shrink-0" /><span className="max-w-[140px] truncate">{e}</span><button type="button" aria-label={`Remove ${e}`} onClick={() => l(r => r.filter(r => r !== e))} className="-me-1.5 inline-flex size-6 shrink-0 cursor-pointer items-center justify-center rounded-[calc(var(--rb-r-full,999px))] text-neutral-900/78 dark:text-neutral-100/78 transition-[background-color,color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-neutral-900/8 hover:text-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:hover:bg-neutral-100/12 dark:hover:text-neutral-100"><__mod_22728.n icon={__mod_89289.A} size={14} strokeWidth={2} aria-hidden="true" /></button></span>)}</div>}</div></div><div className="mt-2 flex items-center justify-between gap-3"><div className="flex items-center gap-0.5">{[[__mod_64132.A, "Bold"], [__mod_17771.A, "Italic"], [__mod_33786.A, "Add link"], [__mod_2605.A, "Mention someone"], [__mod_48094.A, "Attach a file"]].map(([e, r]) => <button type="button" aria-label={r} className={ea("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-transparent text-neutral-900 hover:not-disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] active:not-disabled:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] disabled:text-neutral-900/40 dark:text-neutral-100 dark:hover:not-disabled:bg-neutral-100/8 dark:active:not-disabled:bg-neutral-100/12 dark:aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:disabled:text-neutral-100/40", "size-8 rounded-[calc(var(--rb-r-full,999px))]")}><__mod_22728.n icon={e} size={18} strokeWidth={2} aria-hidden="true" /></button>)}</div><div className="flex shrink-0 items-center gap-2"><span className={ea(en, eo, "hidden sm:inline")}>Enter to post</span><button type="button" disabled={0 === e.trim().length} className={ea("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_68%,white),var(--rb-accent,oklch(84%_0.15_165)))] text-[var(--rb-accent-fg,oklch(26%_0.06_168))] shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_4px_10px_-4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_80%,transparent)] hover:not-disabled:-translate-y-px hover:not-disabled:brightness-[1.04] hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_7px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_85%,transparent)] active:not-disabled:translate-y-px active:not-disabled:brightness-[0.98] active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_55%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] motion-reduce:hover:translate-y-0 disabled:opacity-45 disabled:shadow-none dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_78%,white),var(--rb-accent,oklch(81%_0.16_163)))] dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_6px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,transparent)] dark:hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_9px_22px_-8px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_60%,transparent)] dark:active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_45%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black)] dark:disabled:shadow-none", "h-8 gap-1.5 rounded-[calc(var(--rb-r-full,999px))] px-3.5 text-[14px]/[18px] font-bold")}>Comment</button></div></div>{p.length > 0 && <div className="absolute top-[calc(100%-6px)] left-[52px] z-20 w-[min(260px,calc(100%-52px))]"><div ref={u} onScroll={m} role="listbox" aria-label="Mention suggestions" className={ea("min-w-52 max-w-[min(480px,calc(100vw-2rem))] overflow-x-hidden overflow-y-auto overscroll-contain rounded-[calc(var(--rb-r-3xl,16px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] p-2 text-neutral-900 dark:text-neutral-100 outline-none shadow-[0_0_0_1px_rgb(84_62_32/0.08),0_24px_56px_-20px_rgb(84_62_32/0.34),0_6px_16px_-8px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.65),0_24px_56px_-16px_rgb(0_0_0/0.8)]", "relative max-h-[200px]")}>{p.map((e, r) => <button type="button" role="option" aria-selected={r === i} onMouseEnter={() => s(r)} onClick={() => k(e)} className="relative flex min-h-10 w-full cursor-default items-center gap-2.5 rounded-[calc(var(--rb-r-md,8px))] px-3 py-2 text-left text-[15px]/[20px] font-semibold text-neutral-900 outline-none select-none [&_svg]:shrink-0 [&_svg]:text-neutral-900/70 hover:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] focus-visible:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] data-[highlighted]:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-disabled:cursor-not-allowed aria-disabled:text-neutral-900/40 dark:text-neutral-100 dark:[&_svg]:text-neutral-100/70 dark:hover:bg-neutral-100/7 dark:focus-visible:bg-neutral-100/7 dark:data-[highlighted]:bg-neutral-100/7 dark:aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-disabled:text-neutral-100/40"><span aria-hidden={!0} className={ea(ei, "size-[24px]")}><span className={es}>{ed(e.name, 1)}</span></span><span className="min-w-0 flex-1"><span className="block truncate">{e.name}</span><span className={ea(el, eo, "flex min-w-0 gap-2")}><span className="truncate">@{e.handle}</span><span className="truncate">{e.team}</span></span></span></button>)}</div><div aria-hidden="true" className={ea("bg-linear-to-b from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))]", ec, "pointer-events-none absolute inset-x-px top-px h-8", h.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={ea("bg-linear-to-t from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))]", ec, "pointer-events-none absolute inset-x-px bottom-px h-8", h.end ? "opacity-100" : "opacity-0")} /></div>}</div><p className={ea(el, eo, "mt-4 mb-2 px-1")}>Earlier in this thread</p><div className="relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 shadow-[inset_0_0_0_1px_rgb(84_62_32/0.05)] dark:shadow-[inset_0_0_0_1px_rgb(255_255_255/0.05)]"><div className={ea("mx-1 mb-1 flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-5xl,22px))] border border-transparent bg-white dark:bg-neutral-950 shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] [&:has(+*)]:mb-0", "relative mt-1")}><div ref={d} onScroll={x} className={ea("divide-y divide-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:divide-neutral-100/7", "max-h-[200px] overflow-y-auto sm:max-h-none")}>{eb.map(e => <article className="flex gap-3 p-3"><span aria-hidden={!0} className={ea(ei, "size-[28px]")}><span className={es}>{ed(e.author)}</span></span><div className="min-w-0 flex-1"><div className="flex min-w-0 flex-wrap items-baseline gap-x-2"><p className={ea("text-[15px]/[20px] font-bold", et, "min-w-0 truncate")}>{e.author}</p><span className={ea(en, eo)}>{e.time}</span></div><p className={ea(en, "text-neutral-900/78 dark:text-neutral-100/78", "mt-1")}>{e.body}</p></div></article>)}</div><div aria-hidden="true" className={ea("bg-linear-to-b from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 top-0 h-8", _.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={ea("bg-linear-to-t from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 bottom-0 h-8", _.end ? "opacity-100" : "opacity-0")} /></div></div></div></div>;
    },
    "comments-5": function () {
      let [e, r] = (0, React.useState)("All"),
        [a, l] = (0, React.useState)(["n5"]),
        i = (0, React.useMemo)(() => "Unresolved" === e ? eg.filter(e => !a.includes(e.id)) : "Mentions" === e ? eg.filter(e => e.mention) : eg, [e, a]),
        {
          ref: s,
          edges: c,
          onScroll: d
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
        }(i.map(e => e.id).join());
      return <div className={eh("bg-white dark:bg-neutral-950", em, "flex h-full min-h-[640px] w-full flex-col justify-center-safe overflow-y-auto p-6 sm:p-8")}><div className="mx-auto w-full max-w-[720px]"><div className="mb-3 flex flex-wrap items-end justify-between gap-3"><div className="min-w-0"><h2 className={eh("text-[17px]/[22px] font-extrabold", em, "flex items-center gap-2")}><__mod_22728.n icon={__mod_22830.A} size={18} strokeWidth={2} aria-hidden="true" className="shrink-0" />Comment inbox</h2><p className={eh(ev, ek, "mt-0.5")}>{eg.length - a.length} unresolved across 5 documents</p></div><div role="radiogroup" aria-label="Filter comments" onKeyDown={ey} className={eh("inline-flex w-fit max-w-full items-stretch gap-1 rounded-[calc(var(--rb-r-full,999px)_+_min(4px,var(--rb-r-full,999px)))] bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] p-1", "h-10", "shrink-0")}>{ew.map(a => <button type="button" role="radio" aria-checked={e === a} tabIndex={e === a ? 0 : -1} onClick={() => r(a)} className="relative inline-flex min-w-0 cursor-pointer items-center justify-center gap-1.5 whitespace-nowrap [&_svg]:shrink-0 rounded-[calc(var(--rb-r-full,999px))] px-4 text-[14px]/[18px] font-bold text-neutral-900/78 dark:text-neutral-100/78 select-none transition-[background-color,color,box-shadow,outline-color,scale] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:scale-[0.96] motion-reduce:active:scale-100 hover:not-aria-checked:text-neutral-900 aria-checked:bg-white aria-checked:text-neutral-900 aria-checked:shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_2px_rgb(84_62_32/0.10),0_3px_8px_-2px_rgb(84_62_32/0.20)] disabled:cursor-not-allowed disabled:text-neutral-900/40 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:hover:not-aria-checked:text-neutral-100 dark:aria-checked:bg-[color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800))] dark:aria-checked:text-neutral-100 dark:aria-checked:shadow-[inset_0_1px_0_rgb(255_255_255/0.1),0_0_0_1px_rgb(0_0_0/0.6),0_2px_5px_-1px_rgb(0_0_0/0.6)] dark:disabled:text-neutral-100/40">{a}</button>)}</div></div><div className="relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 shadow-[inset_0_0_0_1px_rgb(84_62_32/0.05)] dark:shadow-[inset_0_0_0_1px_rgb(255_255_255/0.05)]"><div className={eh("mx-1 mb-1 flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-5xl,22px))] border border-transparent bg-white dark:bg-neutral-950 shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] [&:has(+*)]:mb-0", "relative mt-1")}><div ref={s} onScroll={d} className={eh("divide-y divide-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:divide-neutral-100/7", "max-h-[400px] overflow-y-auto sm:max-h-none")}>{0 === i.length ? <div className="flex flex-col items-center justify-center gap-1 px-6 py-16 text-center"><p className="text-[19px]/[24px] font-extrabold tracking-[-0.01em] text-neutral-900 dark:text-neutral-100">Nothing left here</p><p className="max-w-[48ch] text-[15px]/[22px] font-medium text-neutral-900/78 dark:text-neutral-100/78">Every comment in this view has been resolved.</p></div> : i.map(e => {
                  let r = a.includes(e.id);
                  return <div className="p-1"><article className={eh("hover:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] dark:hover:bg-neutral-100/6", "transition-[color,background-color,border-color,box-shadow,outline-color,opacity,scale,translate] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms]", "rounded-[var(--rb-r-4xl,18px)]", "flex gap-3 p-2")}><span aria-hidden={!0} className={eh("relative inline-flex size-8 shrink-0 overflow-hidden rounded-full select-none", "size-[28px]")}><span className="flex size-full items-center justify-center rounded-[inherit] bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_24%,white)] text-[12px]/[16px] font-extrabold tabular-nums text-neutral-900 dark:text-neutral-100 dark:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_22%,var(--color-neutral-900))]">{e.author.split(/[\s-]+/).filter(Boolean).slice(0, 2).map(e => e[0]?.toUpperCase()).join("")}</span></span><div className="min-w-0 flex-1"><div className="flex items-baseline gap-2"><p className={eh("text-[15px]/[20px] font-bold", em, "truncate")}>{e.author}</p><span className={eh(ef, ek, "shrink-0")}>{e.time}</span>{e.mention && !r && <span className={eh("inline-flex h-5.5 min-w-5.5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden whitespace-nowrap rounded-[calc(var(--rb-r-full,999px))] px-2.5 text-[12px]/[16px] font-bold tabular-nums", "bg-white text-neutral-900 dark:text-neutral-100 shadow-[0_0_0_1px_rgb(84_62_32/0.09),0_1px_2px_rgb(84_62_32/0.08)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_0_0_1px_rgb(0_0_0/0.55)] dark:bg-neutral-800", "max-sm:hidden")}>Mention</span>}</div><p className={eh(ef, ek, "mt-0.5 flex min-w-0 gap-2")}><span className="min-w-0 truncate">{e.place}</span><span className="shrink-0">{e.anchor}</span></p><p className={eh(ev, r ? ek : "text-neutral-900/78 dark:text-neutral-100/78", "mt-1.5", r && "line-through")}>{e.body}</p></div><button type="button" aria-pressed={r} aria-label={r ? `Reopen comment from ${e.author}` : `Resolve comment from ${e.author}`} onClick={() => {
                        let r;
                        return r = e.id, l(e => e.includes(r) ? e.filter(e => e !== r) : [...e, r]);
                      }} className={eh("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-transparent text-neutral-900 hover:not-disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] active:not-disabled:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] disabled:text-neutral-900/40 dark:text-neutral-100 dark:hover:not-disabled:bg-neutral-100/8 dark:active:not-disabled:bg-neutral-100/12 dark:aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:disabled:text-neutral-100/40", "size-8 rounded-[calc(var(--rb-r-full,999px))]")}><__mod_22728.n icon={__mod_90987.A} size={18} strokeWidth={2} aria-hidden="true" /></button></article></div>;
                })}</div><div aria-hidden="true" className={eh("bg-linear-to-b from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 top-0 h-8", c.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={eh("bg-linear-to-t from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 bottom-0 h-8", c.end ? "opacity-100" : "opacity-0")} /></div></div></div></div>;
    },
    "comments-6": function () {
      let [e, r] = (0, React.useState)(1),
        [a, l] = (0, React.useState)([]),
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
      return <div className={ej("bg-white dark:bg-neutral-950", eC, "flex h-full min-h-[700px] w-full flex-col justify-center-safe overflow-y-auto p-6 sm:p-8")}><div className="mx-auto w-full max-w-[1040px]"><div className="mb-3 flex flex-wrap items-end justify-between gap-3"><div className="min-w-0"><h2 className={ej("text-[17px]/[22px] font-extrabold", eC, "flex flex-wrap gap-x-2")}><span>Pricing page</span><span className={eA}>v7</span></h2><p className={ej(eS, eA, "mt-0.5 flex gap-3")}><span>{eH.length - a.length} open pins</span><span>3 reviewers</span></p></div><span className={ej("inline-flex h-5.5 min-w-5.5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden whitespace-nowrap rounded-[calc(var(--rb-r-full,999px))] px-2.5 text-[12px]/[16px] font-bold tabular-nums", "bg-white text-neutral-900 dark:text-neutral-100 shadow-[0_0_0_1px_rgb(84_62_32/0.09),0_1px_2px_rgb(84_62_32/0.08)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_0_0_1px_rgb(0_0_0/0.55)] dark:bg-neutral-800", "h-8 px-2.5")}><__mod_22728.n icon={__mod_36586.A} size={16} strokeWidth={2} aria-hidden="true" />Comment mode</span></div><div className={ej(eM, "lg:flex-row")}><div className={ej("bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900", "relative min-h-[300px] flex-1 overflow-hidden lg:min-h-[420px]")}><div aria-hidden={!0} className="absolute inset-x-[8%] top-[7%] bottom-[5%] flex"><div className={ej(eM, "flex-1")} /></div><div aria-hidden={!0} className="absolute inset-x-[14%] top-[14%] space-y-3"><div className={ej(eL, "h-5 w-1/2")} /><div className={ej(eL, "h-3 w-2/3")} /><div className="grid grid-cols-3 gap-3 pt-4"><div className={ej(eL, "h-24")} /><div className={ej(eL, "h-24")} /><div className={ej(eL, "h-24")} /></div><div className={ej(eL, "h-3 w-1/3")} /></div><div aria-hidden={!0} className="absolute inset-x-[14%] bottom-[10%] flex items-center gap-4"><div className={ej(eL, "h-2 w-16")} /><div className={ej(eL, "h-2 w-12")} /><div className={ej(eL, "h-2 w-14")} /><div className={ej(eL, "h-2 w-10")} /></div>{eH.map(o => {
                let n = e === o.id,
                  l = a.includes(o.id);
                return <button type="button" onClick={() => r(o.id)} aria-label={`Pin ${o.id} by ${o.author}`} aria-pressed={n} style={{
                  top: o.top,
                  left: o.left
                }} className={ej(l ? eR : n ? "bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900" : eW, "text-[13px]/[16px] font-bold tabular-nums", "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))]", "transition-[color,background-color,border-color,box-shadow,outline-color,opacity,scale,translate] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms]", "absolute inline-flex h-7 w-7 -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full")}>{o.id}</button>;
              })}</div><div className="flex w-full shrink-0 flex-col overflow-hidden lg:w-[300px]"><div className="px-4 pt-3 pb-2"><p className="min-w-0 truncate text-[16px]/[20px] font-extrabold text-neutral-900 dark:text-neutral-100">Comments</p></div><div className="relative flex min-h-0 flex-1 flex-col"><div ref={i} onScroll={c} className={ej("divide-y divide-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:divide-neutral-100/7", "max-h-[220px] min-h-0 flex-1 overflow-y-auto lg:max-h-none")}>{eH.map(o => {
                    let i = e === o.id,
                      s = a.includes(o.id);
                    return <div className="px-2 py-1"><div className={ej(i && "bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] dark:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)]", "rounded-[var(--rb-r-4xl,18px)]", "p-2")}><div className="flex items-center gap-2"><span aria-hidden={!0} className={ej("relative inline-flex size-8 shrink-0 overflow-hidden rounded-full select-none", "size-[24px]")}><span className="flex size-full items-center justify-center rounded-[inherit] bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_24%,white)] text-[12px]/[16px] font-extrabold tabular-nums text-neutral-900 dark:text-neutral-100 dark:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_22%,var(--color-neutral-900))]">{((e, r = 2) => e.split(/[\s-]+/).filter(Boolean).slice(0, r).map(e => e[0]?.toUpperCase()).join(""))(o.author, 1)}</span></span><p className={ej("text-[15px]/[20px] font-bold", eC, "min-w-0 flex-1 truncate")}>{o.author}</p><span className={ej("text-[13px]/[16px] font-semibold tabular-nums", eA, "shrink-0")}>{o.time}</span></div><div className="mt-1.5 flex flex-col gap-2 ps-8"><p className={ej(eS, s ? eA : ez, s && "line-through")}>{o.body}</p><div className="flex items-center gap-1"><button type="button" aria-pressed={s} onClick={() => {
                              let e;
                              return e = o.id, l(r => r.includes(e) ? r.filter(r => r !== e) : [...r, e]);
                            }} className="relative inline-flex h-8 max-w-full min-w-0 shrink-0 cursor-pointer items-center gap-1.5 whitespace-nowrap rounded-[calc(var(--rb-r-full,999px))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] px-3.5 text-[14px]/[18px] font-bold text-neutral-900 dark:text-neutral-100 select-none transition-[background-color,border-color,box-shadow,color,scale,translate,outline-color] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:translate-y-px active:duration-[90ms] motion-reduce:active:translate-y-0 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] aria-pressed:bg-none aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-pressed:shadow-[inset_0_0_0_1.5px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14)] disabled:cursor-not-allowed disabled:text-neutral-900/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-pressed:shadow-[inset_0_0_0_1.5px_var(--rb-accent,oklch(81%_0.16_163))] dark:aria-expanded:bg-neutral-800 dark:disabled:text-neutral-100/40"><__mod_22728.n icon={__mod_90987.A} size={16} strokeWidth={2} aria-hidden="true" />{s ? "Resolved" : "Resolve"}</button><button type="button" onClick={() => r(o.id)} className={ej("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] text-neutral-900 dark:text-neutral-100 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] active:not-disabled:translate-y-px active:not-disabled:shadow-[inset_0_1px_3px_rgb(84_62_32/0.16),0_0_0_1px_rgb(84_62_32/0.10)] dark:active:not-disabled:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14),0_0_0_1px_rgb(84_62_32/0.10)] dark:aria-expanded:bg-neutral-800 dark:aria-expanded:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] disabled:bg-none disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] disabled:text-neutral-900/40 disabled:shadow-none dark:disabled:bg-neutral-800/60 dark:disabled:text-neutral-100/40", "h-8 gap-1.5 rounded-[calc(var(--rb-r-full,999px))] px-3.5 text-[14px]/[18px] font-bold")}>Locate pin</button></div></div></div></div>;
                  })}</div><div aria-hidden="true" className={ej("bg-linear-to-b from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))]", "pointer-events-none absolute inset-x-0 top-0 h-8", s.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={ej("bg-linear-to-t from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))]", "pointer-events-none absolute inset-x-0 bottom-0 h-8", s.end ? "opacity-100" : "opacity-0")} /></div><div className="px-4 pt-1 pb-4"><div data-concentric={!0} className={ej("relative flex w-full min-w-0 cursor-text items-center rounded-[calc(var(--rb-r-xl,12px))] data-concentric:rounded-[var(--rb-r-5xl,22px)] border border-transparent bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] text-[15px]/[20px] font-medium text-neutral-900 transition-[border-color,box-shadow,background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:not-focus-within:not-has-[[aria-invalid=true]]:not-has-[input:disabled]:not-has-[input[readonly]]:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] focus-within:border-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] focus-within:bg-white focus-within:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] has-[[aria-invalid=true]]:border-[oklch(60%_0.236_26)] has-[[aria-invalid=true]]:bg-[oklch(97.5%_0.016_26)] has-[input:disabled]:cursor-not-allowed has-[input:disabled]:text-neutral-900/40 has-[input:disabled]:shadow-none has-[input[readonly]]:cursor-default has-[input[readonly]]:shadow-none dark:text-neutral-100 dark:hover:not-focus-within:not-has-[[aria-invalid=true]]:not-has-[input:disabled]:not-has-[input[readonly]]:bg-neutral-900 dark:focus-within:border-[var(--rb-accent,oklch(81%_0.16_163))] dark:focus-within:bg-neutral-900 dark:focus-within:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:has-[[aria-invalid=true]]:border-[oklch(65.2%_0.219_26)] dark:has-[[aria-invalid=true]]:bg-[oklch(26%_0.04_26)] dark:has-[input:disabled]:text-neutral-100/40", "h-10")}><label htmlFor="comments-6-draft" className="sr-only">Reply to pin {e}</label><input id="comments-6-draft" placeholder={`Reply to pin ${e}`} className="h-full w-full min-w-0 flex-1 bg-transparent px-3.5 outline-none [[data-affix]+&]:ps-2 [&:has(+[data-affix])]:pe-2 placeholder:font-medium placeholder:text-neutral-900/55 disabled:cursor-not-allowed disabled:placeholder:text-neutral-900/30 dark:placeholder:text-neutral-100/55 dark:disabled:placeholder:text-neutral-100/30 dark:[color-scheme:dark]" /><span data-affix={!0} className="flex shrink-0 items-center gap-2 text-[15px]/[20px] font-semibold text-neutral-900/62 dark:text-neutral-100/62 select-none first:ps-3.5 last:pe-3.5 has-[button]:first:ps-1 has-[button]:last:pe-1"><button type="button" className={ej("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_68%,white),var(--rb-accent,oklch(84%_0.15_165)))] text-[var(--rb-accent-fg,oklch(26%_0.06_168))] shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_4px_10px_-4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_80%,transparent)] hover:not-disabled:-translate-y-px hover:not-disabled:brightness-[1.04] hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_7px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_85%,transparent)] active:not-disabled:translate-y-px active:not-disabled:brightness-[0.98] active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_55%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] motion-reduce:hover:translate-y-0 disabled:opacity-45 disabled:shadow-none dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_78%,white),var(--rb-accent,oklch(81%_0.16_163)))] dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_6px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,transparent)] dark:hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_9px_22px_-8px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_60%,transparent)] dark:active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_45%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black)] dark:disabled:shadow-none", "h-7 gap-1.5 rounded-[calc(var(--rb-r-full,999px))] px-3 text-[13px]/[16px] font-bold tabular-nums")}>Send</button></span></div></div></div></div></div></div>;
    }
  },
  eE = {
    "comments-1": 640,
    "comments-2": 660,
    "comments-3": 640,
    "comments-4": 640,
    "comments-5": 640,
    "comments-6": 700
  };

export { eI as components };
export { eE as heights };

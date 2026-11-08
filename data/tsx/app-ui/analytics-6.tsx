import * as __mod_88366 from "../_helpers/88366";
import * as __mod_44647 from "../_helpers/44647";
import * as __mod_57466 from "../_helpers/57466";
import * as __mod_37576 from "../_helpers/37576";
import * as __mod_22728 from "../_helpers/22728";
import * as __mod_1497 from "../_helpers/1497";
import * as __mod_37502 from "../_helpers/37502";
import * as __mod_5042 from "../_helpers/5042";
import * as __mod_46667 from "../_helpers/46667";
import * as __mod_4670 from "../_helpers/4670";
import * as __mod_40144 from "../_helpers/40144";
import * as __mod_67133 from "../_helpers/67133";
import * as __mod_44439 from "../_helpers/44439";
import * as __mod_33126 from "../_helpers/33126";
import * as __mod_70255 from "../_helpers/70255";
import * as __mod_50098 from "../_helpers/50098";
import * as __mod_62859 from "../_helpers/62859";
import * as __mod_34177 from "../_helpers/34177";
/**
 * Analytics 6
 * slug: analytics-6
 * category: analytics
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let b = (...e) => e.filter(Boolean).join(" "),
  m = "text-neutral-900 dark:text-neutral-100",
  k = "text-neutral-900/62 dark:text-neutral-100/62",
  f = "text-[14px]/[20px] font-medium",
  g = (e, a, t) => Math.min(t, Math.max(a, e)),
  v = ["Week", "Month", "Quarter"],
  w = {
    Week: 7,
    Month: 30,
    Quarter: 13
  },
  y = {
    Week: "day",
    Month: "day",
    Quarter: "week"
  },
  j = [{
    id: "active",
    label: "Active teams",
    icon: __mod_88366.A,
    base: 8420,
    drift: .041,
    seed: 1.2
  }, {
    id: "invited",
    label: "Seats invited",
    icon: __mod_44647.A,
    base: 1245,
    drift: -.018,
    seed: 3.4
  }, {
    id: "sessions",
    label: "Sessions",
    icon: __mod_57466.A,
    base: 64800,
    drift: .027,
    seed: 5.1
  }, {
    id: "duration",
    label: "Median session",
    icon: __mod_37576.A,
    base: 412,
    drift: .004,
    seed: 7.9
  }];
function N({
  value: e
}) {
  return <><span><__mod_22728.n icon={e > 0 ? __mod_1497.A : e < 0 ? __mod_37502.A : __mod_5042.A} size={14} strokeWidth={2} aria-hidden="true" className="inline-block align-middle" /></span><span className="sr-only">{e > 0 ? "Up" : e < 0 ? "Down" : "No change"}</span>{Math.abs(e).toFixed(1)}%</>;
}
function M({
  data: e,
  active: a,
  onActiveChange: t,
  label: o
}) {
  let [c, d] = function () {
      let e = (0, React.useRef)(null),
        [a, t] = (0, React.useState)({
          width: 0,
          height: 0
        });
      return (0, React.useEffect)(() => {
        let a = e.current,
          r = a?.ownerDocument.defaultView;
        if (!a || !r?.ResizeObserver) return;
        let l = new r.ResizeObserver(([e]) => {
          let a = e.contentRect;
          t({
            width: a.width,
            height: a.height
          });
        });
        return l.observe(a), () => l.disconnect();
      }, []), [e, a];
    }(),
    x = Math.min(...e),
    _ = Math.max(...e),
    u = .18 * (_ - x || 1),
    h = (0, React.useCallback)(a => a / (e.length - 1) * Math.max(d.width - 2, 1) + 1, [e.length, d.width]),
    p = (0, React.useCallback)(e => 41 - (e - x + u) / (_ - x + 2 * u) * 38, [_, x, u]),
    m = (0, __mod_46667.A)().x((e, a) => h(a)).y(e => p(e)).curve(__mod_4670.G)(e) ?? "",
    k = (0, __mod_40144.A)().x((e, a) => h(a)).y0(44).y1(e => p(e)).curve(__mod_4670.G)(e) ?? "";
  return <div ref={c} role="img" aria-label={`${o} trend, ${e.length} points`} tabIndex={0} onPointerMove={a => (a => {
    let r = c.current;
    if (!r) return;
    let l = r.getBoundingClientRect(),
      n = l.width / (e.length - 1);
    t(g(Math.round((a - l.left) / n), 0, e.length - 1));
  })(a.clientX)} onPointerLeave={() => t(null)} onBlur={() => t(null)} onKeyDown={r => {
    ("ArrowLeft" === r.key || "ArrowRight" === r.key) && (r.preventDefault(), t(g((a ?? e.length - 1) + ("ArrowLeft" === r.key ? -1 : 1), 0, e.length - 1))), "Escape" === r.key && t(null);
  }} style={{
    touchAction: "pan-y"
  }} className={b("focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))]", "relative -mx-1 h-11 cursor-crosshair px-1")}>{d.width > 0 && <svg width={d.width} height={44} className="overflow-visible"><path d={k} className="fill-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] dark:fill-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_16%,transparent)]" /><path d={m} fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="stroke-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_82%,black)] dark:stroke-[var(--rb-accent,oklch(81%_0.16_163))]" />{null !== a && <rect x={h(a) - 4} y={p(e[a]) - 4} width={8} height={8} className="fill-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_82%,black)] stroke-white stroke-[2.5] dark:fill-[var(--rb-accent,oklch(81%_0.16_163))] dark:stroke-neutral-900" />}</svg>}</div>;
}
let A = (...e) => e.filter(Boolean).join(" "),
  S = "text-neutral-900 dark:text-neutral-100",
  $ = "text-neutral-900/62 dark:text-neutral-100/62",
  R = "text-[14px]/[20px] font-bold text-neutral-900/78 dark:text-neutral-100/78",
  L = "inline-flex min-w-0 flex-wrap items-baseline gap-x-1 text-[13px]/[18px] font-bold tabular-nums [&>svg]:self-center text-neutral-900/78 dark:text-neutral-100/78",
  D = "fill-neutral-900/60 text-[12px] font-semibold tabular-nums dark:fill-neutral-100/60",
  C = (e, a, t) => Math.min(t, Math.max(a, e));
function z({
  value: e
}) {
  return <><span><__mod_22728.n icon={e > 0 ? __mod_1497.A : e < 0 ? __mod_37502.A : __mod_5042.A} size={14} strokeWidth={2} aria-hidden="true" className="inline-block align-middle" /></span><span className="sr-only">{e > 0 ? "Up" : e < 0 ? "Down" : "No change"}</span>{Math.abs(e).toFixed(1)}%</>;
}
let E = ["7D", "30D", "12M"],
  F = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  B = (...e) => e.filter(Boolean).join(" "),
  U = "text-neutral-900 dark:text-neutral-100",
  W = "text-neutral-900/62 dark:text-neutral-100/62",
  P = "text-[13px]/[16px] font-semibold tabular-nums",
  O = "text-[14px]/[20px] font-bold text-neutral-900/78 dark:text-neutral-100/78",
  T = "fill-neutral-900/60 text-[12px] font-semibold tabular-nums dark:fill-neutral-100/60",
  q = "fill-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_82%,black)] dark:fill-[var(--rb-accent,oklch(81%_0.16_163))]",
  H = "stroke-neutral-900/40 dark:stroke-neutral-100/45",
  I = "fill-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] dark:fill-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_16%,transparent)]",
  K = (e, a, t) => Math.min(t, Math.max(a, e));
function Q({
  value: e
}) {
  return <><span><__mod_22728.n icon={e > 0 ? __mod_1497.A : e < 0 ? __mod_37502.A : __mod_5042.A} size={14} strokeWidth={2} aria-hidden="true" className="inline-block align-middle" /></span><span className="sr-only">{e > 0 ? "Up" : e < 0 ? "Down" : "No change"}</span>{Math.abs(e).toFixed(1)}%</>;
}
function J({
  outlined: e,
  inverse: a = !1
}) {
  return <svg aria-hidden="true" viewBox="0 0 8 8" className="inline-block size-2.5 shrink-0 rounded-full">{e ? a ? <rect x={.5} y={.5} width={7} height={7} fill="none" stroke="currentColor" strokeWidth={1} /> : <rect x={.5} y={.5} width={7} height={7} strokeWidth={1} className={B(I, H)} /> : a ? <rect width={8} height={8} fill="currentColor" /> : <rect width={8} height={8} className={q} />}</svg>;
}
let V = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  G = [3120, 2980, 3340, 3610, 3180, 2890, 2760, 3050, 3480, 3720, 3910, 3540],
  X = [2740, 2610, 2880, 3020, 2950, 2680, 2510, 2790, 3010, 3180, 3260, 3040],
  Y = [{
    id: "current",
    label: "This year",
    values: G,
    barClass: q,
    outlined: !1
  }, {
    id: "prior",
    label: "Last year",
    values: X,
    barClass: B(I, H),
    outlined: !0
  }],
  Z = (...e) => e.filter(Boolean).join(" "),
  ee = "text-neutral-900 dark:text-neutral-100",
  ea = "text-neutral-900/62 dark:text-neutral-100/62",
  et = "text-[oklch(51%_0.18_26)] dark:text-[oklch(76%_0.14_26)]",
  er = "text-[13px]/[16px] font-semibold tabular-nums",
  el = "text-[14px]/[20px] font-bold text-neutral-900/78 dark:text-neutral-100/78",
  en = "ms-0.5 text-[15px]/[20px] font-bold tracking-normal text-neutral-900/78 dark:text-neutral-100/78",
  es = "fill-neutral-900/60 text-[12px] font-semibold tabular-nums dark:fill-neutral-100/60",
  ei = "stroke-neutral-900/40 dark:stroke-neutral-100/45",
  eo = (e, a, t) => Math.min(t, Math.max(a, e));
function ec({
  value: e
}) {
  return <><span><__mod_22728.n icon={e > 0 ? __mod_1497.A : e < 0 ? __mod_37502.A : __mod_5042.A} size={14} strokeWidth={2} aria-hidden="true" className="inline-block align-middle" /></span><span className="sr-only">{e > 0 ? "Up" : e < 0 ? "Down" : "No change"}</span>{Math.abs(e).toFixed(1)}%</>;
}
function ed({
  stroke: e,
  dash: a,
  inverse: t = !1
}) {
  return <svg aria-hidden="true" width={12} height={8} viewBox="0 0 12 8" className="shrink-0"><line x1={0} x2={12} y1={4} y2={4} strokeWidth={2} strokeDasharray={a} stroke={t ? "currentColor" : void 0} className={t ? void 0 : e} /></svg>;
}
let ex = [60, 54, 49, 50, 51, 53, 61, 67, 66, 66, 64, 58, 55, 58, 60, 62, 68, 68, 62, 58, 54, 48, 48, 53, 56, 58, 61, 59, 52, 50],
  e_ = [257, 273, 283, 261, 237, 227, 211, 203, 223, 241, 240, 243, 237, 208, 189, 192, 194, 204, 236, 254, 249, 248, 241, 218, 213, 232, 243, 257, 280, 280],
  eu = Array.from({
    length: 30
  }, (e, a) => `Apr ${a + 1}`),
  eh = [{
    id: "p50",
    label: "p50",
    values: ex,
    stroke: "stroke-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_82%,black)] dark:stroke-[var(--rb-accent,oklch(81%_0.16_163))]",
    dash: void 0
  }, {
    id: "p90",
    label: "p90",
    values: [147, 137, 143, 153, 155, 159, 162, 149, 134, 130, 127, 126, 140, 154, 155, 157, 157, 144, 136, 142, 147, 153, 169, 178, 171, 165, 158, 144, 139, 147],
    stroke: ei,
    dash: void 0
  }, {
    id: "p99",
    label: "p99",
    values: e_,
    stroke: ei,
    dash: "6 4"
  }];
let em = (...e) => e.filter(Boolean).join(" "),
  ek = "text-neutral-900 dark:text-neutral-100",
  ef = "text-neutral-900/62 dark:text-neutral-100/62",
  eg = "text-right tabular-nums",
  ev = ["Sessions", "Revenue"],
  ew = [{
    name: "Organic search",
    sessions: 5842,
    revenue: 84200
  }, {
    name: "Direct",
    sessions: 3210,
    revenue: 47900
  }, {
    name: "Referral",
    sessions: 1680,
    revenue: 22300
  }, {
    name: "Email",
    sessions: 1145,
    revenue: 12600
  }, {
    name: "Paid social",
    sessions: 968,
    revenue: 61500
  }],
  ey = [{
    mark: "text-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_82%,black)] dark:text-[var(--rb-accent,oklch(81%_0.16_163))]",
    outlined: !1
  }, {
    mark: "text-[var(--rb-accent,oklch(84%_0.15_165))] dark:text-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_72%,transparent)]",
    outlined: !1
  }, {
    mark: "text-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_62%,transparent)] dark:text-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_48%,transparent)]",
    outlined: !1
  }, {
    mark: "text-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_38%,transparent)] dark:text-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_30%,transparent)]",
    outlined: !1
  }, {
    mark: em("fill-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] dark:fill-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_16%,transparent)]", "stroke-neutral-900/40 dark:stroke-neutral-100/45"),
    outlined: !0
  }],
  ej = (...e) => e.filter(Boolean).join(" "),
  eN = "text-neutral-900 dark:text-neutral-100",
  eM = "text-neutral-900/62 dark:text-neutral-100/62",
  eA = "text-[14px]/[20px] font-medium",
  eS = "divide-y divide-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:divide-neutral-100/7",
  e$ = "inline-flex min-w-0 flex-wrap items-baseline gap-x-1 text-[13px]/[18px] font-bold tabular-nums [&>svg]:self-center text-neutral-900/78 dark:text-neutral-100/78",
  eR = "text-right tabular-nums",
  eL = "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))]",
  eD = (e, a, t) => Math.min(t, Math.max(a, e)),
  eC = ["7 days", "28 days", "90 days"],
  ez = [{
    id: "ph",
    name: "Product Hunt",
    initials: "PH",
    seed: 1.2,
    sparkBase: 240,
    seg: 0
  }, {
    id: "hn",
    name: "Hacker News",
    initials: "HN",
    seed: 2.7,
    sparkBase: 190,
    seg: 1
  }, {
    id: "gh",
    name: "GitHub",
    initials: "GH",
    seed: 4.1,
    sparkBase: 150,
    seg: 2
  }, {
    id: "dt",
    name: "Dev.to",
    initials: "DT",
    seed: 5.6,
    sparkBase: 92,
    seg: 3
  }, {
    id: "rd",
    name: "Reddit",
    initials: "RD",
    seed: 7.3,
    sparkBase: 70,
    seg: 3
  }, {
    id: "li",
    name: "LinkedIn",
    initials: "LI",
    seed: 9,
    sparkBase: 52,
    seg: 3
  }],
  eE = {
    "7 days": {
      total: 3180,
      delta: 14.2,
      counts: [940, 610, 505, 300, 210, 165],
      deltas: [24, 5.2, -2, 31, -9, 6]
    },
    "28 days": {
      total: 12480,
      delta: 11.6,
      counts: [3240, 2610, 1980, 1120, 880, 640],
      deltas: [18.2, 9.4, -4.1, 22.5, -6.8, 3.3]
    },
    "90 days": {
      total: 41600,
      delta: 9.7,
      counts: [10850, 9240, 6700, 3610, 3020, 2140],
      deltas: [12.5, 7.8, -5.5, 16.4, -3.2, 1.9]
    }
  },
  eF = ["text-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_82%,black)] dark:text-[var(--rb-accent,oklch(81%_0.16_163))]", "text-[var(--rb-accent,oklch(84%_0.15_165))] dark:text-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_72%,transparent)]", "text-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_62%,transparent)] dark:text-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_48%,transparent)]", "text-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_38%,transparent)] dark:text-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_30%,transparent)]"];
function eB({
  value: e
}) {
  return <><span><__mod_22728.n icon={e > 0 ? __mod_1497.A : e < 0 ? __mod_37502.A : __mod_5042.A} size={14} strokeWidth={2} aria-hidden="true" className="inline-block align-middle" /></span><span className="sr-only">{e > 0 ? "Up" : e < 0 ? "Down" : "No change"}</span>{Math.abs(e).toFixed(1)}%</>;
}
function eU({
  data: e,
  active: a,
  onActive: t
}) {
  let [o, c] = function () {
      let e = (0, React.useRef)(null),
        [a, t] = (0, React.useState)({
          width: 0,
          height: 0
        });
      return (0, React.useEffect)(() => {
        let a = e.current,
          r = a?.ownerDocument.defaultView;
        if (!a || !r?.ResizeObserver) return;
        let l = new r.ResizeObserver(([e]) => {
          let a = e.contentRect;
          t({
            width: a.width,
            height: a.height
          });
        });
        return l.observe(a), () => l.disconnect();
      }, []), [e, a];
    }(),
    d = Math.min(...e),
    x = Math.max(...e),
    _ = .2 * (x - d || 1),
    u = (0, React.useCallback)(a => a / (e.length - 1) * Math.max(c.width - 2, 1) + 1, [e.length, c.width]),
    h = (0, React.useCallback)(e => 26 - (e - d + _) / (x - d + 2 * _) * 24, [x, d, _]),
    p = (0, __mod_46667.A)().x((e, a) => u(a)).y(e => h(e)).curve(__mod_4670.G)(e) ?? "",
    b = (0, __mod_40144.A)().x((e, a) => u(a)).y0(28).y1(e => h(e)).curve(__mod_4670.G)(e) ?? "";
  return <div ref={o} role="img" aria-label="14-day signup trend" tabIndex={0} onPointerMove={a => (a => {
    let r = o.current;
    if (!r) return;
    let l = r.getBoundingClientRect(),
      n = l.width / (e.length - 1);
    t(eD(Math.round((a - l.left) / n), 0, e.length - 1));
  })(a.clientX)} onPointerLeave={() => t(null)} onBlur={() => t(null)} onKeyDown={r => {
    ("ArrowLeft" === r.key || "ArrowRight" === r.key) && (r.preventDefault(), t(eD((a ?? e.length - 1) + ("ArrowLeft" === r.key ? -1 : 1), 0, e.length - 1))), "Escape" === r.key && t(null);
  }} style={{
    touchAction: "pan-y"
  }} className={ej(eL, "relative h-7 w-full cursor-crosshair")}>{c.width > 0 && <svg width={c.width} height={28} className="overflow-visible"><path d={b} className="fill-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] dark:fill-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_16%,transparent)]" /><path d={p} fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="stroke-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_82%,black)] dark:stroke-[var(--rb-accent,oklch(81%_0.16_163))]" />{null !== a && <rect x={u(a) - 4} y={h(e[a]) - 4} width={8} height={8} className="fill-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_82%,black)] stroke-white stroke-[2.5] dark:fill-[var(--rb-accent,oklch(81%_0.16_163))] dark:stroke-neutral-900" />}</svg>}</div>;
}
let eW = (...e) => e.filter(Boolean).join(" "),
  eP = "text-neutral-900 dark:text-neutral-100",
  eO = "text-neutral-900/62 dark:text-neutral-100/62",
  eT = "text-[13px]/[16px] font-semibold tabular-nums",
  eq = "relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] text-neutral-900 dark:text-neutral-100 shadow-[0_0_0_1px_rgb(84_62_32/0.07),0_1px_2px_rgb(84_62_32/0.06),0_8px_22px_-10px_rgb(84_62_32/0.20)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_0_0_1px_rgb(0_0_0/0.6),0_10px_24px_-12px_rgb(0_0_0/0.8)]",
  eH = "flex min-w-0 flex-wrap items-baseline gap-x-1 text-[22px]/[28px] font-extrabold tracking-[-0.01em] tabular-nums text-neutral-900 dark:text-neutral-100",
  eI = "ms-0.5 text-[15px]/[20px] font-bold tracking-normal text-neutral-900/78 dark:text-neutral-100/78",
  eK = "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))]",
  eQ = (e, a, t) => Math.min(t, Math.max(a, e));
function eJ({
  value: e
}) {
  return <><span><__mod_22728.n icon={e > 0 ? __mod_1497.A : e < 0 ? __mod_37502.A : __mod_5042.A} size={14} strokeWidth={2} aria-hidden="true" className="inline-block align-middle" /></span><span className="sr-only">{e > 0 ? "Up" : e < 0 ? "Down" : "No change"}</span>{Math.abs(e).toFixed(1)}%</>;
}
let eV = ["1h", "24h", "7d"],
  eG = {
    "1h": 12,
    "24h": 24,
    "7d": 28
  },
  eX = [{
    id: "req",
    label: "Request rate",
    unit: "req/s",
    good: "up",
    base: 4820,
    seed: 1.4,
    amp: .1,
    delta: 6.4,
    decimals: 0
  }, {
    id: "p95",
    label: "p95 latency",
    unit: "ms",
    good: "down",
    base: 182,
    seed: 3.1,
    amp: .16,
    delta: 8.1,
    decimals: 0
  }, {
    id: "err",
    label: "Error rate",
    unit: "%",
    good: "down",
    base: .42,
    seed: 5.2,
    amp: .34,
    delta: 14.3,
    decimals: 2
  }, {
    id: "cpu",
    label: "CPU saturation",
    unit: "%",
    good: "down",
    base: 63,
    seed: 7.7,
    amp: .12,
    delta: -4.2,
    decimals: 0
  }];
function eY(e, a) {
  if ("req/s" === e.unit) {
    let e;
    return Math.abs(e = Math.round(a)) >= 1e6 ? `${(e / 1e6).toFixed(Math.abs(e) >= 1e7 ? 0 : 1)}M` : Math.abs(e) >= 1e3 ? `${(e / 1e3).toFixed(Math.abs(e) >= 1e4 ? 0 : 1)}k` : `${e}`;
  }
  return e.decimals ? a.toFixed(e.decimals) : `${Math.round(a)}`;
}
function eZ({
  data: e,
  width: a,
  height: t,
  active: o,
  baseline: c
}) {
  let d = Math.min(...e),
    x = Math.max(...e),
    _ = .18 * (x - d || 1),
    u = t - 2,
    h = (0, React.useCallback)(t => t / (e.length - 1) * Math.max(a - 2, 1) + 1, [e.length, a]),
    p = (0, React.useCallback)(e => u - (e - d + _) / (x - d + 2 * _) * (u - 6), [u, 6, x, d, _]),
    b = (0, __mod_46667.A)().x((e, a) => h(a)).y(e => p(e)).curve(__mod_4670.G)(e) ?? "",
    m = (0, __mod_40144.A)().x((e, a) => h(a)).y0(t).y1(e => p(e)).curve(__mod_4670.G)(e) ?? "";
  return <svg width={a} height={t} className="overflow-visible">{null !== o && <line x1={h(o)} x2={h(o)} y1={2} y2={t} className="stroke-neutral-900/40 dark:stroke-neutral-100/45" strokeWidth={1} shapeRendering="crispEdges" />}<path d={m} className="fill-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] dark:fill-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_16%,transparent)]" />{c && <line x1={0} x2={a} y1={t - .5} y2={t - .5} className="stroke-neutral-900/12 dark:stroke-neutral-100/14" strokeWidth={1} shapeRendering="crispEdges" />}<path d={b} fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="stroke-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_82%,black)] dark:stroke-[var(--rb-accent,oklch(81%_0.16_163))]" />{null !== o && <rect x={h(o) - 4} y={p(e[o]) - 4} width={8} height={8} className="fill-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_82%,black)] stroke-white stroke-[2.5] dark:fill-[var(--rb-accent,oklch(81%_0.16_163))] dark:stroke-neutral-900" />}</svg>;
}
function e0(e) {
  let [a, t] = function () {
      let e = (0, React.useRef)(null),
        [a, t] = (0, React.useState)({
          width: 0,
          height: 0
        });
      return (0, React.useEffect)(() => {
        let a = e.current,
          r = a?.ownerDocument.defaultView;
        if (!a || !r?.ResizeObserver) return;
        let l = new r.ResizeObserver(([e]) => {
          let a = e.contentRect;
          t({
            width: a.width,
            height: a.height
          });
        });
        return l.observe(a), () => l.disconnect();
      }, []), [e, a];
    }(),
    [r, n] = (0, React.useState)(null);
  return {
    ref: a,
    size: t,
    active: r,
    setActive: n,
    move: t => {
      let r = a.current;
      if (!r) return;
      let l = r.getBoundingClientRect(),
        s = l.width / (e - 1);
      n(eQ(Math.round((t - l.left) / s), 0, e - 1));
    },
    onKey: a => {
      ("ArrowLeft" === a.key || "ArrowRight" === a.key) && (a.preventDefault(), n(t => eQ((t ?? e - 1) + ("ArrowLeft" === a.key ? -1 : 1), 0, e - 1))), "Home" === a.key && n(0), "End" === a.key && n(e - 1), "Escape" === a.key && n(null);
    }
  };
}
function e1({
  metric: e,
  data: a,
  selected: t,
  onToggle: l
}) {
  let {
      ref: n,
      size: s,
      active: i,
      setActive: o,
      move: c,
      onKey: d
    } = e0(a.length),
    x = a[a.length - 1],
    _ = null === i ? x : a[i];
  return <button type="button" aria-pressed={t} aria-label={`${e.label}, latest ${eY(e, x)} ${e.unit}. ${t ? "Selected" : "Select to expand"}.`} onClick={l} onPointerMove={e => c(e.clientX)} onPointerLeave={() => o(null)} onKeyDown={d} style={{
    touchAction: "pan-y"
  }} className={eW(eq, eK, "transition-[color,background-color,border-color,box-shadow,outline-color,opacity,scale,translate] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms]", "group isolate cursor-pointer p-4 text-left")}>{t && <span aria-hidden="true" className={eW("bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] dark:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)]", "pointer-events-none absolute inset-0 -z-10")} />}<div className="flex items-center justify-between gap-2"><span className={eW("text-[14px]/[20px] font-bold text-neutral-900/78 dark:text-neutral-100/78", "min-w-0 truncate")}>{e.label}</span><span className={eW("inline-flex min-w-0 flex-wrap items-baseline gap-x-1 text-[13px]/[18px] font-bold tabular-nums [&>svg]:self-center text-neutral-900/78 dark:text-neutral-100/78", "shrink-0")}><eJ value={e.delta} /></span></div><div className={eW(eH, "mt-1")}><span>{eY(e, _)}</span><span className={eI}>{e.unit}</span></div><div ref={n} className="-mx-4 -mb-4 mt-3 h-11">{s.width > 0 && <eZ data={a} width={s.width} height={44} active={i} />}</div></button>;
}
function e2({
  metric: e,
  data: a,
  range: t
}) {
  let {
      ref: l,
      size: n,
      active: s,
      setActive: i,
      move: o,
      onKey: c
    } = e0(a.length),
    d = a[a.length - 1],
    x = null === s ? d : a[s],
    _ = Math.max(...a),
    u = Math.min(...a),
    h = a.reduce((e, a) => e + a, 0) / a.length;
  return <div className={eW(eq, "p-4")}><div className="flex flex-wrap items-baseline justify-between gap-2"><div className="flex items-baseline gap-2"><h3 className="min-w-0 truncate text-[16px]/[20px] font-extrabold text-neutral-900 dark:text-neutral-100">{e.label}</h3><span className={eW(eT, eO)}>last {t}</span></div><p className={eH}>{eY(e, x)}<span className={eI}>{e.unit}</span></p></div><div className="mt-3 grid grid-cols-1 gap-4 lg:grid-cols-[1fr_170px]"><div ref={l} role="img" tabIndex={0} aria-label={`${e.label} over the last ${t}. Latest ${eY(e, d)} ${e.unit}.`} onPointerMove={e => o(e.clientX)} onPointerLeave={() => i(null)} onBlur={() => i(null)} onKeyDown={c} style={{
        touchAction: "pan-y"
      }} className={eW(eK, "relative min-h-[88px] cursor-crosshair")}>{n.width > 0 && n.height > 0 && <div className="absolute inset-0"><eZ data={a} width={n.width} height={n.height} active={s} baseline={!0} /></div>}</div><dl className={eW("bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)]", "rounded-[var(--rb-r-4xl,18px)]", "flex flex-col justify-center px-3 py-1.5")}>{[{
          label: "Peak",
          value: _
        }, {
          label: "Average",
          value: h
        }, {
          label: "Low",
          value: u
        }].map(a => <div className="flex items-baseline justify-between gap-3 py-1.5"><dt className={eW(eT, eO, "truncate")}>{a.label}</dt><dd className={eW("text-[15px]/[20px] font-bold", eP, "shrink-0 tabular-nums")}>{eY(e, a.value)}<span className={eW(eT, eO, "ml-1")}>{e.unit}</span></dd></div>)}</dl></div></div>;
}
let e5 = (...e) => e.filter(Boolean).join(" "),
  e6 = "text-neutral-900 dark:text-neutral-100",
  e4 = "text-neutral-900/62 dark:text-neutral-100/62",
  e8 = "rounded-[var(--rb-r-sm,6px)]",
  e3 = "text-[17px]/[22px] font-extrabold",
  e9 = "text-[14px]/[20px] font-medium",
  e7 = "text-[13px]/[16px] font-semibold tabular-nums",
  ae = "text-right tabular-nums",
  aa = ["Visited pricing", "Started trial", "Invited a teammate", "Connected a repo", "Converted to paid"],
  at = ["All traffic", "Organic", "Paid"],
  ar = {
    "All traffic": [24e3, 8400, 5100, 3600, 2050],
    Organic: [9800, 4900, 1850, 1300, 880],
    Paid: [14200, 5400, 3500, 2600, 900]
  };
let an = (...e) => e.filter(Boolean).join(" "),
  as = "text-neutral-900 dark:text-neutral-100",
  ai = "text-[oklch(51%_0.18_26)] dark:text-[oklch(76%_0.14_26)]",
  ao = "text-[13px]/[16px] font-semibold tabular-nums",
  ac = "fill-neutral-900/60 text-[12px] font-semibold tabular-nums dark:fill-neutral-100/60",
  ad = (e, a, t) => Math.min(t, Math.max(a, e)),
  ax = (e, a) => .5 * Math.sin(.9 * a + e) + .32 * Math.sin(.31 * a + 1.7 * e),
  a_ = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  au = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  ah = Date.UTC(2024, 10, 4);
function ap(e) {
  return new Date(ah + 864e5 * e);
}
let ab = [{
    id: "deploys",
    label: "Deployments",
    noun: "deployments",
    build: e => {
      let a = e % 7 >= 5,
        t = Math.max(0, (ax(1.3, e) + .62) * 7);
      return Math.round(a ? .24 * t : t);
    }
  }, {
    id: "incidents",
    label: "Incidents",
    noun: "incidents",
    build: e => Math.max(0, Math.round((ax(4.7, e) - .46) * 13))
  }, {
    id: "reviews",
    label: "Reviews",
    noun: "reviews",
    build: e => {
      let a = e % 7 >= 5,
        t = Math.max(0, (ax(6.1, e) + .7) * 9);
      return Math.round(a ? .42 * t : t);
    }
  }],
  am = ["fill-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] dark:fill-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_16%,transparent)]", "text-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_38%,transparent)] dark:text-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_30%,transparent)]", "text-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_62%,transparent)] dark:text-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_48%,transparent)]", "text-[var(--rb-accent,oklch(84%_0.15_165))] dark:text-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_72%,transparent)]", "text-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_82%,black)] dark:text-[var(--rb-accent,oklch(81%_0.16_163))]"],
  ak = (...e) => e.filter(Boolean).join(" "),
  af = "text-neutral-900 dark:text-neutral-100",
  ag = "text-neutral-900/62 dark:text-neutral-100/62",
  av = "text-[17px]/[22px] font-extrabold",
  aw = "text-[14px]/[20px] font-medium",
  ay = "text-[13px]/[16px] font-semibold tabular-nums",
  aj = ["Q1", "Q2", "Q3", "Q4"],
  aN = {
    Q1: [{
      label: "Net new ARR",
      kind: "money",
      actual: 4.2,
      target: 5
    }, {
      label: "Expansion revenue",
      kind: "money",
      actual: 1.3,
      target: 1.2
    }, {
      label: "Logo retention",
      kind: "percent",
      actual: 91,
      target: 93
    }],
    Q2: [{
      label: "Net new ARR",
      kind: "money",
      actual: 4.6,
      target: 5
    }, {
      label: "Expansion revenue",
      kind: "money",
      actual: .9,
      target: 1.2
    }, {
      label: "Logo retention",
      kind: "percent",
      actual: 94,
      target: 93
    }],
    Q3: [{
      label: "Net new ARR",
      kind: "money",
      actual: 5.3,
      target: 5
    }, {
      label: "Expansion revenue",
      kind: "money",
      actual: 1.1,
      target: 1.4
    }, {
      label: "Logo retention",
      kind: "percent",
      actual: 89,
      target: 93
    }],
    Q4: [{
      label: "Net new ARR",
      kind: "money",
      actual: 3.9,
      target: 6
    }, {
      label: "Expansion revenue",
      kind: "money",
      actual: 1.5,
      target: 1.4
    }, {
      label: "Logo retention",
      kind: "percent",
      actual: 92,
      target: 93
    }]
  },
  aM = {
    Q1: 8,
    Q2: 14,
    Q3: 11,
    Q4: 5
  },
  aA = (e, a) => "money" === e ? `$${a.toFixed(1)}M` : `${a.toFixed(0)}%`,
  aS = e => {
    let a = "ArrowRight" === e.key || "ArrowDown" === e.key ? 1 : "ArrowLeft" === e.key || "ArrowUp" === e.key ? -1 : 0;
    if (!a && "Home" !== e.key && "End" !== e.key) return;
    let t = Array.from(e.currentTarget.querySelectorAll('[role="radio"]:not(:disabled)')),
      r = t.indexOf(e.target);
    if (r < 0) return;
    e.preventDefault();
    let l = "Home" === e.key ? 0 : "End" === e.key ? t.length - 1 : (r + a + t.length) % t.length;
    t[l].focus(), t[l].click();
  },
  a$ = (...e) => e.filter(Boolean).join(" "),
  aR = "rounded-[var(--rb-r-sm,6px)]",
  aL = "text-neutral-900 dark:text-neutral-100",
  aD = "text-neutral-900/62 dark:text-neutral-100/62",
  aC = "text-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_82%,black)] dark:text-[var(--rb-accent,oklch(81%_0.16_163))]",
  az = "text-[var(--rb-accent-fg,oklch(26%_0.06_168))] dark:text-neutral-950",
  aE = "text-[14px]/[20px] font-medium",
  aF = "text-[13px]/[16px] font-semibold tabular-nums",
  aB = "inline-flex w-fit max-w-full items-stretch gap-1 rounded-[calc(var(--rb-r-full,999px)_+_min(4px,var(--rb-r-full,999px)))] bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] p-1",
  aU = "h-10",
  aW = "relative inline-flex min-w-0 cursor-pointer items-center justify-center gap-1.5 whitespace-nowrap [&_svg]:shrink-0 rounded-[calc(var(--rb-r-full,999px))] px-4 text-[14px]/[18px] font-bold text-neutral-900/78 dark:text-neutral-100/78 select-none transition-[background-color,color,box-shadow,outline-color,scale] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:scale-[0.96] motion-reduce:active:scale-100 hover:not-aria-checked:text-neutral-900 aria-checked:bg-white aria-checked:text-neutral-900 aria-checked:shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_2px_rgb(84_62_32/0.10),0_3px_8px_-2px_rgb(84_62_32/0.20)] disabled:cursor-not-allowed disabled:text-neutral-900/40 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:hover:not-aria-checked:text-neutral-100 dark:aria-checked:bg-[color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800))] dark:aria-checked:text-neutral-100 dark:aria-checked:shadow-[inset_0_1px_0_rgb(255_255_255/0.1),0_0_0_1px_rgb(0_0_0/0.6),0_2px_5px_-1px_rgb(0_0_0/0.6)] dark:disabled:text-neutral-100/40",
  aP = (e, a, t) => Math.min(t, Math.max(a, e)),
  aO = e => Math.abs(e) >= 1e6 ? `${(e / 1e6).toFixed(Math.abs(e) >= 1e7 ? 0 : 1)}M` : Math.abs(e) >= 1e3 ? `${(e / 1e3).toFixed(Math.abs(e) >= 1e4 ? 0 : 1)}k` : `${e}`,
  aT = (e, a) => .5 * Math.sin(.9 * a + e) + .32 * Math.sin(.31 * a + 1.7 * e),
  aq = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
function aH(e) {
  let a = 24305 + e;
  return `${aq[a % 12]} ${Math.floor(a / 12)}`;
}
let aI = e => 9 - e,
  aK = Array.from({
    length: 8
  }, (e, a) => Math.round(1500 + 265 * a + 170 * aT(2, a))),
  aQ = [100, 62, 50, 43, 38, 35, 33, 32, 31],
  aJ = [100, 99, 101, 104, 107, 110, 113, 116, 118],
  aV = [{
    id: "users",
    label: "User retention",
    lo: 0,
    hi: 100
  }, {
    id: "revenue",
    label: "Revenue retention",
    lo: 85,
    hi: 125
  }],
  aG = [{
    id: !1,
    label: "Percent"
  }, {
    id: !0,
    label: "Absolute"
  }];
function aX(e, a, t) {
  if (0 === t) return 100;
  let r = Math.round(("users" === e ? aQ[t] : aJ[t]) + a * ("users" === e ? .6 : .5) + 3 * aT(a + t, t));
  return "users" === e ? aP(r, 5, 99) : aP(r, 80, 135);
}
function aY(e, a, t) {
  let r = aK[a];
  return "users" === e ? Math.round(r * t / 100) : Math.round(20 * r * t / 100);
}
let aZ = [{
  alpha: .05,
  text: aD
}, {
  alpha: .09,
  text: "text-neutral-900/78 dark:text-neutral-100/78"
}, {
  alpha: .25,
  text: aL
}, {
  alpha: .66,
  text: az
}, {
  alpha: 1,
  text: az
}];
function a0(e, a, t) {
  let r = aP((e - a) / (t - a || 1), 0, 1);
  return aZ[aP(Math.round(4 * r), 0, 4)];
}
let a1 = e => {
  let a = "ArrowRight" === e.key || "ArrowDown" === e.key ? 1 : "ArrowLeft" === e.key || "ArrowUp" === e.key ? -1 : 0;
  if (!a && "Home" !== e.key && "End" !== e.key) return;
  let t = Array.from(e.currentTarget.querySelectorAll('[role="radio"]:not(:disabled)')),
    r = t.indexOf(e.target);
  if (r < 0) return;
  e.preventDefault();
  let l = "Home" === e.key ? 0 : "End" === e.key ? t.length - 1 : (r + a + t.length) % t.length;
  t[l].focus(), t[l].click();
};
let a8 = (...e) => e.filter(Boolean).join(" "),
  a3 = "text-neutral-900 dark:text-neutral-100",
  a9 = "text-[13px]/[16px] font-semibold tabular-nums",
  a7 = "fill-neutral-900/60 text-[12px] font-semibold tabular-nums dark:fill-neutral-100/60",
  te = "fill-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] dark:fill-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_16%,transparent)]",
  ta = (e, a, t) => Math.min(t, Math.max(a, e)),
  tt = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  tr = [42, 44, 47, 45, 48, 52, 55, 53, 58, 61, 64, 68],
  tl = [88, 92, 90, 96, 101, 99, 104, 110, 108, 115, 119, 124],
  tn = [210, 218, 225, 232, 240, 251, 248, 260, 272, 281, 290, 305],
  ts = [340, 352, 368, 375, 390, 405, 418, 432, 445, 461, 478, 496],
  ti = tt.map((e, a) => ({
    month: e,
    hot: tr[a],
    warm: tl[a],
    cold: tn[a],
    archive: ts[a]
  })),
  to = ["archive", "cold", "warm", "hot"],
  tc = {
    hot: {
      label: "Hot",
      fill: "text-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_82%,black)] dark:text-[var(--rb-accent,oklch(81%_0.16_163))]",
      ink: 1,
      outlined: !1
    },
    warm: {
      label: "Warm",
      fill: "text-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_62%,transparent)] dark:text-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_48%,transparent)]",
      ink: .66,
      outlined: !1
    },
    cold: {
      label: "Cold",
      fill: "text-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_38%,transparent)] dark:text-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_30%,transparent)]",
      ink: .4,
      outlined: !1
    },
    archive: {
      label: "Archive",
      fill: te,
      ink: 0,
      outlined: !0
    }
  };
function td({
  tier: e,
  inverse: a = !1
}) {
  let t = tc[e];
  return <svg aria-hidden="true" viewBox="0 0 8 8" className="inline-block size-2.5 shrink-0 rounded-full">{t.outlined ? a ? <rect x={.5} y={.5} width={7} height={7} fill="none" stroke="currentColor" strokeWidth={1} /> : <rect x={.5} y={.5} width={7} height={7} strokeWidth={1} className={a8(te, "stroke-neutral-900/40 dark:stroke-neutral-100/45")} /> : <rect width={8} height={8} fill="currentColor" opacity={a ? t.ink : void 0} className={a ? void 0 : t.fill} />}</svg>;
}
let tx = ["Stacked", "100%"],
  t_ = e => {
    let a = "ArrowRight" === e.key || "ArrowDown" === e.key ? 1 : "ArrowLeft" === e.key || "ArrowUp" === e.key ? -1 : 0;
    if (!a && "Home" !== e.key && "End" !== e.key) return;
    let t = Array.from(e.currentTarget.querySelectorAll('[role="radio"]:not(:disabled)')),
      r = t.indexOf(e.target);
    if (r < 0) return;
    e.preventDefault();
    let l = "Home" === e.key ? 0 : "End" === e.key ? t.length - 1 : (r + a + t.length) % t.length;
    t[l].focus(), t[l].click();
  },
  tu = (...e) => e.filter(Boolean).join(" "),
  th = "text-neutral-900 dark:text-neutral-100",
  tp = "text-neutral-900/62 dark:text-neutral-100/62",
  tb = "text-[13px]/[16px] font-semibold tabular-nums",
  tm = "fill-neutral-900/60 text-[12px] font-semibold tabular-nums dark:fill-neutral-100/60",
  tk = "stroke-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_82%,black)] dark:stroke-[var(--rb-accent,oklch(81%_0.16_163))]",
  tf = "fill-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_82%,black)] dark:fill-[var(--rb-accent,oklch(81%_0.16_163))]",
  tg = (e, a, t) => Math.min(t, Math.max(a, e)),
  tv = (e, a) => .5 * Math.sin(.7 * a + e) + .34 * Math.sin(.23 * a + 2.1 * e) + .12 * Math.sin(1.9 * a + .6 * e),
  tw = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  ty = Date.UTC(2024, 0, 2),
  tj = ["30D", "90D", "1Y"],
  tN = {
    "30D": {
      count: 30,
      stride: 1
    },
    "90D": {
      count: 90,
      stride: 1
    },
    "1Y": {
      count: 120,
      stride: 3
    }
  },
  tM = e => `$${e.toFixed(2)}`,
  tA = e => {
    let a = "ArrowRight" === e.key || "ArrowDown" === e.key ? 1 : "ArrowLeft" === e.key || "ArrowUp" === e.key ? -1 : 0;
    if (!a && "Home" !== e.key && "End" !== e.key) return;
    let t = Array.from(e.currentTarget.querySelectorAll('[role="radio"]:not(:disabled)')),
      r = t.indexOf(e.target);
    if (r < 0) return;
    e.preventDefault();
    let l = "Home" === e.key ? 0 : "End" === e.key ? t.length - 1 : (r + a + t.length) % t.length;
    t[l].focus(), t[l].click();
  },
  tS = (...e) => e.filter(Boolean).join(" "),
  t$ = "text-neutral-900 dark:text-neutral-100",
  tR = "text-neutral-900/62 dark:text-neutral-100/62",
  tL = "text-[oklch(49%_0.1_68)] dark:text-[oklch(80%_0.13_68)]",
  tD = "text-[14px]/[20px] font-medium",
  tC = "fill-neutral-900/60 text-[12px] font-semibold tabular-nums dark:fill-neutral-100/60",
  tz = "stroke-neutral-900/40 dark:stroke-neutral-100/45",
  tE = "fill-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_82%,black)] dark:fill-[var(--rb-accent,oklch(81%_0.16_163))]",
  tF = (e, a, t) => Math.min(t, Math.max(a, e)),
  tB = (e, a) => .5 * Math.sin(.9 * a + e) + .32 * Math.sin(.31 * a + 1.7 * e),
  tU = ["All", "Growth", "Enterprise"],
  tW = ["Northwind Labs", "Contoso Retail", "Acme Freight", "Meridian Health", "Lumen Studios", "Fabrikam", "Cobalt Systems", "Redwood Capital", "Tallgrass Foods", "Aperture Robotics", "Vector Logistics", "Beacon Insurance", "Halcyon Media", "Ironclad Security", "Solstice Energy", "Palisade Bank", "Driftwood Travel", "Quill Publishing", "Verdant Farms", "Sable & Co", "Anvil Manufacturing", "Cirrus Airlines", "Marlowe Legal", "Petra Ceramics", "Onyx Telecom", "Wexford Textiles"].map((e, a) => {
    let t = tF(Math.round(20 + (tB(1.1, a) + .9) * 150), 6, 320),
      r = tF(Math.round(60 + 42 * tB(3.3, a)), 12, 96),
      l = tF(Math.round(t * (430 + 260 * tB(5.2, a))), 4e3, 19e4);
    return {
      i: a,
      name: e,
      seats: t,
      usage: r,
      acv: l,
      tier: l >= 62e3 ? "Enterprise" : "Growth"
    };
  }),
  tP = Math.min(...tW.map(e => e.acv)),
  tO = Math.max(...tW.map(e => e.acv));
function tT(e) {
  return 5 + (Math.sqrt(e) - Math.sqrt(tP)) / (Math.sqrt(tO) - Math.sqrt(tP) || 1) * 17;
}
let tq = e => {
    let a = "ArrowRight" === e.key || "ArrowDown" === e.key ? 1 : "ArrowLeft" === e.key || "ArrowUp" === e.key ? -1 : 0;
    if (!a && "Home" !== e.key && "End" !== e.key) return;
    let t = Array.from(e.currentTarget.querySelectorAll('[role="radio"]:not(:disabled)')),
      r = t.indexOf(e.target);
    if (r < 0) return;
    e.preventDefault();
    let l = "Home" === e.key ? 0 : "End" === e.key ? t.length - 1 : (r + a + t.length) % t.length;
    t[l].focus(), t[l].click();
  },
  tH = (...e) => e.filter(Boolean).join(" "),
  tI = "text-neutral-900 dark:text-neutral-100",
  tK = "text-neutral-900/62 dark:text-neutral-100/62",
  tQ = "text-[14px]/[20px] font-medium",
  tJ = "text-[15px]/[20px] font-bold",
  tV = "text-[13px]/[16px] font-semibold tabular-nums",
  tG = "relative inline-flex size-8 shrink-0 overflow-hidden rounded-full select-none",
  tX = "flex size-full items-center justify-center rounded-[inherit] bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_24%,white)] text-[12px]/[16px] font-extrabold tabular-nums text-neutral-900 dark:text-neutral-100 dark:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_22%,var(--color-neutral-900))]",
  tY = "inline-flex min-w-0 flex-wrap items-baseline gap-x-1 text-[13px]/[18px] font-bold tabular-nums [&>svg]:self-center text-neutral-900/78 dark:text-neutral-100/78",
  tZ = "block h-full rounded-[calc(var(--rb-r-full,999px))] bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_82%,black)] shadow-[inset_0_1px_0_rgb(255_255_255/0.35)] transition-[width] duration-[420ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] motion-reduce:transition-none dark:bg-[var(--rb-accent,oklch(81%_0.16_163))]",
  t0 = (e, a, t) => Math.min(t, Math.max(a, e)),
  t1 = e => `$${Math.abs(e) >= 1e6 ? `${(e / 1e6).toFixed(Math.abs(e) >= 1e7 ? 0 : 1)}M` : Math.abs(e) >= 1e3 ? `${(e / 1e3).toFixed(Math.abs(e) >= 1e4 ? 0 : 1)}k` : `${e}`}`,
  t2 = [{
    name: "Priya Nandakumar",
    quota: 42e4,
    actual: 487e3
  }, {
    name: "Marcus Bell",
    quota: 38e4,
    actual: 312e3
  }, {
    name: "Sofia Alvarez",
    quota: 45e4,
    actual: 441e3
  }, {
    name: "Tom\xe1s Guerrero",
    quota: 4e5,
    actual: 268e3
  }, {
    name: "Wei Chen",
    quota: 36e4,
    actual: 402e3
  }, {
    name: "Amelia Whitfield-Osei",
    quota: 5e5,
    actual: 475e3
  }],
  t5 = [{
    to: 70,
    cls: "bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] dark:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)]"
  }, {
    to: 90,
    cls: "bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)]"
  }, {
    to: 125,
    cls: null
  }],
  t6 = ["By attainment", "By quota", "Alphabetical"],
  t4 = e => {
    let a = "ArrowRight" === e.key || "ArrowDown" === e.key ? 1 : "ArrowLeft" === e.key || "ArrowUp" === e.key ? -1 : 0;
    if (!a && "Home" !== e.key && "End" !== e.key) return;
    let t = Array.from(e.currentTarget.querySelectorAll('[role="radio"]:not(:disabled)')),
      r = t.indexOf(e.target);
    if (r < 0) return;
    e.preventDefault();
    let l = "Home" === e.key ? 0 : "End" === e.key ? t.length - 1 : (r + a + t.length) % t.length;
    t[l].focus(), t[l].click();
  },
  t8 = (...e) => e.filter(Boolean).join(" "),
  t3 = "text-neutral-900 dark:text-neutral-100",
  t9 = "text-[14px]/[20px] font-bold text-neutral-900/78 dark:text-neutral-100/78",
  t7 = "ms-0.5 text-[15px]/[20px] font-bold tracking-normal text-neutral-900/78 dark:text-neutral-100/78",
  re = "fill-neutral-900/60 text-[12px] font-semibold tabular-nums dark:fill-neutral-100/60",
  ra = "fill-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_82%,black)] stroke-white stroke-[2.5] dark:fill-[var(--rb-accent,oklch(81%_0.16_163))] dark:stroke-neutral-900",
  rt = (e, a, t) => Math.min(t, Math.max(a, e)),
  rr = [{
    label: "60s",
    seconds: 60
  }, {
    label: "5m",
    seconds: 300
  }, {
    label: "15m",
    seconds: 900
  }],
  rl = e => e < 60 ? `${e}s` : Number.isInteger(e / 60) ? `${e / 60}m` : `${(e / 60).toFixed(1)}m`,
  rn = e => {
    let a = "ArrowRight" === e.key || "ArrowDown" === e.key ? 1 : "ArrowLeft" === e.key || "ArrowUp" === e.key ? -1 : 0;
    if (!a && "Home" !== e.key && "End" !== e.key) return;
    let t = Array.from(e.currentTarget.querySelectorAll('[role="radio"]:not(:disabled)')),
      r = t.indexOf(e.target);
    if (r < 0) return;
    e.preventDefault();
    let l = "Home" === e.key ? 0 : "End" === e.key ? t.length - 1 : (r + a + t.length) % t.length;
    t[l].focus(), t[l].click();
  },
  rs = {
    "analytics-1": function () {
      let [e, a] = (0, React.useState)("Week"),
        [t, n] = (0, React.useState)({}),
        s = (0, React.useMemo)(() => {
          let a = w[e];
          return j.map(e => {
            var t, r, l;
            return {
              ...e,
              values: (t = e.seed, r = e.base, l = e.drift, Array.from({
                length: a
              }, (e, n) => Math.round(r * (1 + n / (a - 1) * l + .06 * (.5 * Math.sin(.9 * n + t) + .32 * Math.sin(.31 * n + 1.7 * t))))))
            };
          });
        }, [e]),
        i = e => {
          a(e), n({});
        };
      return <div className={b("bg-white dark:bg-neutral-950", m, "flex h-full min-h-[480px] w-full flex-col justify-center-safe overflow-y-auto p-6 sm:p-8")}><div className={b("relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 shadow-[inset_0_0_0_1px_rgb(84_62_32/0.05)] dark:shadow-[inset_0_0_0_1px_rgb(255_255_255/0.05)]", "mx-auto w-full max-w-[1100px] shrink-0")}><div className={b("mx-1 mb-1 flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-5xl,22px))] border border-transparent bg-white dark:bg-neutral-950 shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] [&:has(+*)]:mb-0", "divide-y divide-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:divide-neutral-100/7", "mt-1")}><div className="flex flex-wrap items-start justify-between gap-3 px-4 py-3.5"><div className="min-w-0"><h2 className={b("text-[17px]/[22px] font-extrabold", m)}>Workspace pulse</h2><p className={b(f, k, "mt-0.5 truncate")}>Adoption, invitations and time spent across every workspace.</p></div><div role="radiogroup" aria-label="Range" onKeyDown={a => {
                var t, r, l;
                let n;
                return t = v.length, r = v.indexOf(e), l = e => i(v[e]), void (!((n = "ArrowRight" === a.key || "ArrowDown" === a.key ? (r + 1) % t : "ArrowLeft" === a.key || "ArrowUp" === a.key ? (r - 1 + t) % t : "Home" === a.key ? 0 : "End" === a.key ? t - 1 : -1) < 0) && (a.preventDefault(), l(n), a.currentTarget.querySelectorAll('[role="radio"]')[n]?.focus()));
              }} className={b("inline-flex w-fit max-w-full items-stretch gap-1 rounded-[calc(var(--rb-r-full,999px)_+_min(4px,var(--rb-r-full,999px)))] bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] p-1", "h-10", "shrink-0")}>{v.map(a => <button type="button" role="radio" aria-checked={a === e} tabIndex={a === e ? 0 : -1} onClick={() => i(a)} className="relative inline-flex min-w-0 cursor-pointer items-center justify-center gap-1.5 whitespace-nowrap [&_svg]:shrink-0 rounded-[calc(var(--rb-r-full,999px))] px-4 text-[14px]/[18px] font-bold text-neutral-900/78 dark:text-neutral-100/78 select-none transition-[background-color,color,box-shadow,outline-color,scale] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:scale-[0.96] motion-reduce:active:scale-100 hover:not-aria-checked:text-neutral-900 aria-checked:bg-white aria-checked:text-neutral-900 aria-checked:shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_2px_rgb(84_62_32/0.10),0_3px_8px_-2px_rgb(84_62_32/0.20)] disabled:cursor-not-allowed disabled:text-neutral-900/40 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:hover:not-aria-checked:text-neutral-100 dark:aria-checked:bg-[color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800))] dark:aria-checked:text-neutral-100 dark:aria-checked:shadow-[inset_0_1px_0_rgb(255_255_255/0.1),0_0_0_1px_rgb(0_0_0/0.6),0_2px_5px_-1px_rgb(0_0_0/0.6)] dark:disabled:text-neutral-100/40">{a}</button>)}</div></div><div className="grid gap-1 p-1 sm:grid-cols-2 lg:grid-cols-4">{s.map(a => {
                let l = t[a.id] ?? null,
                  s = a.values[a.values.length - 1],
                  i = a.values[0],
                  c = null === l ? s : a.values[l];
                return <div className={b("flex min-w-0 flex-col gap-2 rounded-[calc(var(--rb-r-5xl,22px))] bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] px-3 py-3.5 dark:bg-neutral-100/4", "rounded-[var(--rb-r-4xl,18px)]", "ps-3 pe-3")}><div className={b("text-[14px]/[20px] font-bold text-neutral-900/78 dark:text-neutral-100/78", "flex items-center gap-2")}><__mod_22728.n icon={a.icon} size={16} strokeWidth={2} aria-hidden="true" className={b(k, "shrink-0")} /><span className="min-w-0 truncate">{a.label}</span></div><p className="flex min-w-0 flex-wrap items-baseline gap-x-1 text-[22px]/[28px] font-extrabold tracking-[-0.01em] tabular-nums text-neutral-900 dark:text-neutral-100">{function (e, a) {
                      if ("duration" === e) {
                        let e = Math.floor(a / 60);
                        return `${e}m ${String(a % 60).padStart(2, "0")}s`;
                      }
                      return a.toLocaleString("en-US");
                    }(a.id, c)}</p><p className={b("inline-flex min-w-0 flex-wrap items-baseline gap-x-1 text-[13px]/[18px] font-bold tabular-nums [&>svg]:self-center text-neutral-900/78 dark:text-neutral-100/78", "truncate")}>{null === l ? <><N value={(s - i) / i * 100} /><span className={k}>vs start of {e.toLowerCase()}</span></> : <span className={k}>{y[e]} {l + 1} of {a.values.length}</span>}</p><M data={a.values} label={a.label} active={l} onActiveChange={e => n(t => ({
                    ...t,
                    [a.id]: e
                  }))} /></div>;
              })}</div><div className="flex flex-wrap items-center justify-between gap-3 px-4 py-3"><p className={b(f, k, "flex min-w-0 gap-3")}><span className="truncate">12,845 workspaces tracked</span><span className="truncate">76% active in the last 30 days</span></p><a href="#" className={b("inline-flex min-h-6 items-center gap-1 rounded-[calc(var(--rb-r-sm,6px))] text-[15px]/[20px] font-bold text-neutral-900 dark:text-neutral-100 underline decoration-[var(--rb-accent,oklch(84%_0.15_165))] decoration-[3px] underline-offset-[5px] transition-[text-decoration-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:decoration-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:decoration-[var(--rb-accent,oklch(81%_0.16_163))] dark:hover:decoration-[var(--rb-accent,oklch(81%_0.16_163))]", "shrink-0")}>Open report</a></div></div></div></div>;
    },
    "analytics-2": function () {
      let [e, a] = (0, React.useState)("30D"),
        [t, o] = (0, React.useState)(null),
        [c, d] = (0, React.useState)(0),
        [x, _] = function () {
          let e = (0, React.useRef)(null),
            [a, t] = (0, React.useState)({
              width: 0,
              height: 0
            });
          return (0, React.useEffect)(() => {
            let a = e.current,
              r = a?.ownerDocument.defaultView;
            if (!a || !r?.ResizeObserver) return;
            let l = new r.ResizeObserver(([e]) => {
              let a = e.contentRect;
              t({
                width: a.width,
                height: a.height
              });
            });
            return l.observe(a), () => l.disconnect();
          }, []), [e, a];
        }(),
        {
          values: u,
          labels: h
        } = (0, React.useMemo)(() => function (e) {
          let {
            count: a,
            base: t,
            drift: r
          } = {
            "7D": {
              count: 7,
              base: 41200,
              drift: .14
            },
            "30D": {
              count: 30,
              base: 36800,
              drift: .31
            },
            "12M": {
              count: 12,
              base: 268e3,
              drift: .72
            }
          }[e];
          return {
            values: Array.from({
              length: a
            }, (e, l) => Math.round(t * (1 + l / (a - 1) * r) * (1 + .085 * (.5 * Math.sin(.7 * l + 2.4) + .34 * Math.sin(.23 * l + 5.04) + .12 * Math.sin(1.9 * l + 1.44))))),
            labels: Array.from({
              length: a
            }, (a, t) => "12M" === e ? F[t] : "7D" === e ? ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][t] : `Jun ${t + 1}`)
          };
        }(e), [e]),
        p = _.width,
        b = Math.max(p - 36 - 1, 1),
        m = 202,
        {
          top: k,
          ticks: f
        } = (0, React.useMemo)(() => function (e, a = 4) {
          if (!(e > 0)) return {
            top: 1,
            ticks: [0, 1]
          };
          let t = e / a,
            r = 10 ** Math.floor(Math.log10(t)),
            l = t / r,
            n = (l <= 1 ? 1 : l <= 2 ? 2 : l <= 2.5 ? 2.5 : l <= 5 ? 5 : 10) * r,
            s = Math.ceil(e / n) * n,
            i = [];
          for (let e = 0; e <= s + n / 1e3; e += n) i.push(e);
          return {
            top: s,
            ticks: i
          };
        }(Math.max(...u)), [u]),
        g = (0, React.useCallback)(e => 36 + e / (u.length - 1) * b, [b, u.length]),
        v = (0, React.useCallback)(e => 10 + m - e / k * m, [m, k]),
        w = (0, __mod_46667.A)().x((e, a) => g(a)).y(e => v(e)).curve(__mod_4670.G)(u) ?? "",
        y = (0, __mod_40144.A)().x((e, a) => g(a)).y0(10 + m).y1(e => v(e)).curve(__mod_4670.G)(u) ?? "",
        j = u[u.length - 1],
        N = null === t ? j : u[t],
        M = (j - u[0]) / u[0] * 100,
        B = C(Math.floor(b / 56), 2, 7),
        U = Math.ceil(u.length / B),
        W = Math.max(...u),
        P = Math.min(...u),
        O = Math.round(u.reduce((e, a) => e + a, 0) / u.length),
        T = e => {
          a(e), o(null), d(0);
        };
      return <div className={A("bg-white dark:bg-neutral-950", S, "flex h-full min-h-[640px] w-full flex-col justify-center-safe overflow-y-auto p-8 sm:p-10")}><div className={A("relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 shadow-[inset_0_0_0_1px_rgb(84_62_32/0.05)] dark:shadow-[inset_0_0_0_1px_rgb(255_255_255/0.05)]", "mx-auto w-full max-w-[880px] shrink-0")}><div className={A("mx-1 mb-1 flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-5xl,22px))] border border-transparent bg-white dark:bg-neutral-950 shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] [&:has(+*)]:mb-0", "divide-y divide-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:divide-neutral-100/7", "mt-1")}><div className="px-4 py-4"><div className="flex flex-wrap items-start justify-between gap-3"><div className="min-w-0"><p className={R}>Net revenue</p><div className="mt-1 flex flex-wrap items-baseline gap-2.5"><p className={A("text-[44px]/[48px] font-extrabold tracking-[-0.025em] tabular-nums", S)}>${N.toLocaleString("en-US")}</p>{null === t ? <p className={L}><z value={M} /><span className={$}>over {"12M" === e ? "12 months" : `${e} period`}</span></p> : <p className={L}><span className={$}>{h[t]}</span></p>}</div></div><div role="radiogroup" aria-label="Range" onKeyDown={a => {
                  var t, r, l;
                  let n;
                  return t = E.length, r = E.indexOf(e), l = e => T(E[e]), void (!((n = "ArrowRight" === a.key || "ArrowDown" === a.key ? (r + 1) % t : "ArrowLeft" === a.key || "ArrowUp" === a.key ? (r - 1 + t) % t : "Home" === a.key ? 0 : "End" === a.key ? t - 1 : -1) < 0) && (a.preventDefault(), l(n), a.currentTarget.querySelectorAll('[role="radio"]')[n]?.focus()));
                }} className={A("inline-flex w-fit max-w-full items-stretch gap-1 rounded-[calc(var(--rb-r-full,999px)_+_min(4px,var(--rb-r-full,999px)))] bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] p-1", "h-10", "shrink-0")}>{E.map(a => <button type="button" role="radio" aria-checked={a === e} tabIndex={a === e ? 0 : -1} onClick={() => T(a)} className="relative inline-flex min-w-0 cursor-pointer items-center justify-center gap-1.5 whitespace-nowrap [&_svg]:shrink-0 rounded-[calc(var(--rb-r-full,999px))] px-4 text-[14px]/[18px] font-bold text-neutral-900/78 dark:text-neutral-100/78 select-none transition-[background-color,color,box-shadow,outline-color,scale] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:scale-[0.96] motion-reduce:active:scale-100 hover:not-aria-checked:text-neutral-900 aria-checked:bg-white aria-checked:text-neutral-900 aria-checked:shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_2px_rgb(84_62_32/0.10),0_3px_8px_-2px_rgb(84_62_32/0.20)] disabled:cursor-not-allowed disabled:text-neutral-900/40 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:hover:not-aria-checked:text-neutral-100 dark:aria-checked:bg-[color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800))] dark:aria-checked:text-neutral-100 dark:aria-checked:shadow-[inset_0_1px_0_rgb(255_255_255/0.1),0_0_0_1px_rgb(0_0_0/0.6),0_2px_5px_-1px_rgb(0_0_0/0.6)] dark:disabled:text-neutral-100/40">{a}</button>)}</div></div><div ref={x} role="img" tabIndex={0} aria-label={`Net revenue over the last ${e}. Latest ${j.toLocaleString("en-US")} dollars.`} onPointerMove={e => (e => {
                let a = x.current;
                if (!a) return;
                let t = a.getBoundingClientRect(),
                  r = b / (u.length - 1),
                  l = C(Math.round((e - t.left - 36) / r), 0, u.length - 1);
                o(l), d(l);
              })(e.clientX)} onPointerLeave={() => o(null)} onBlur={() => o(null)} onKeyDown={e => {
                if ("ArrowLeft" === e.key || "ArrowRight" === e.key) {
                  e.preventDefault();
                  let a = C((t ?? u.length - 1) + ("ArrowLeft" === e.key ? -1 : 1), 0, u.length - 1);
                  o(a), d(a);
                }
                "Home" === e.key && (o(0), d(0)), "End" === e.key && (o(u.length - 1), d(u.length - 1)), "Escape" === e.key && o(null);
              }} style={{
                height: 232,
                touchAction: "pan-y"
              }} className={A("focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))]", "relative mt-4 cursor-crosshair")}>{p > 0 && <svg width={p} height={232} className="overflow-visible">{f.map(e => <g><line x1={36} x2={p - 1} y1={v(e)} y2={v(e)} shapeRendering="crispEdges" className="stroke-neutral-900/6 dark:stroke-neutral-100/8" strokeWidth={1} /><text x={0} y={v(e)} dy={-4} className={D}>${Math.abs(e) >= 1e6 ? `${(e / 1e6).toFixed(Math.abs(e) >= 1e7 ? 0 : 1)}M` : Math.abs(e) >= 1e3 ? `${(e / 1e3).toFixed(Math.abs(e) >= 1e4 ? 0 : 1)}k` : `${e}`}</text></g>)}{h.map((e, a) => a % U == 0 ? <text x={g(a)} y={228} textAnchor={0 === a ? "start" : a === u.length - 1 ? "end" : "middle"} className={D}>{e}</text> : null)}<path d={y} className="fill-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] dark:fill-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_16%,transparent)]" /><path d={w} fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="stroke-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_82%,black)] dark:stroke-[var(--rb-accent,oklch(81%_0.16_163))]" />{null !== t && <g><line x1={g(t)} x2={g(t)} y1={10} y2={10 + m} className="stroke-neutral-900/40 dark:stroke-neutral-100/45" strokeWidth={1} shapeRendering="crispEdges" /><rect x={g(t) - 4} y={v(u[t]) - 4} width={8} height={8} className="fill-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_82%,black)] stroke-white stroke-[2.5] dark:fill-[var(--rb-accent,oklch(81%_0.16_163))] dark:stroke-neutral-900" /></g>}</svg>}{p > 0 && <div aria-hidden="true" style={{
                  left: C(g(c), 72, Math.max(p - 72, 72)),
                  top: C(v(u[c] ?? 0) - 64, 0, 164)
                }} className={A("pointer-events-none absolute z-[70] flex min-w-36 max-w-64 flex-col gap-1.5 rounded-[calc(var(--rb-r-xl,12px))] bg-neutral-900 px-3.5 py-2.5 text-[13px]/[16px] font-bold tabular-nums text-white shadow-[0_0_0_1px_rgb(84_62_32/0.08),0_24px_56px_-20px_rgb(84_62_32/0.34),0_6px_16px_-8px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.65),0_24px_56px_-16px_rgb(0_0_0/0.8)] dark:bg-neutral-100 dark:text-neutral-900", "transition-[opacity,scale] duration-[260ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] starting:scale-[0.94] starting:opacity-0 motion-reduce:transition-none motion-reduce:starting:scale-100", "-translate-x-1/2", null === t ? "opacity-0" : "opacity-100")}><p className={A("text-[13px]/[16px] font-semibold tabular-nums", "whitespace-nowrap")}>{h[c]}</p><p className="whitespace-nowrap">${(u[c] ?? 0).toLocaleString("en-US")}</p></div>}</div></div><div className="grid grid-cols-1 gap-1 p-1 sm:grid-cols-3">{[{
                label: "Peak",
                value: W
              }, {
                label: "Daily average",
                value: O
              }, {
                label: "Lowest",
                value: P
              }].map(e => <div className={A("flex min-w-0 flex-col gap-2 rounded-[calc(var(--rb-r-5xl,22px))] bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] px-3 py-3.5 dark:bg-neutral-100/4", "rounded-[var(--rb-r-4xl,18px)]", "ps-3 pe-3")}><p className={A(R, "truncate")}>{e.label}</p><p className="flex min-w-0 flex-wrap items-baseline gap-x-1 text-[22px]/[28px] font-extrabold tracking-[-0.01em] tabular-nums text-neutral-900 dark:text-neutral-100">${e.value.toLocaleString("en-US")}</p></div>)}</div></div></div></div>;
    },
    "analytics-3": function () {
      let [e, a] = function () {
          let e = (0, React.useRef)(null),
            [a, t] = (0, React.useState)({
              width: 0,
              height: 0
            });
          return (0, React.useEffect)(() => {
            let a = e.current,
              r = a?.ownerDocument.defaultView;
            if (!a || !r?.ResizeObserver) return;
            let l = new r.ResizeObserver(([e]) => {
              let a = e.contentRect;
              t({
                width: a.width,
                height: a.height
              });
            });
            return l.observe(a), () => l.disconnect();
          }, []), [e, a];
        }(),
        [t, n] = (0, React.useState)(null),
        [s, i] = (0, React.useState)(11),
        [o, c] = (0, React.useState)({
          current: !0,
          prior: !0
        }),
        d = a.width,
        x = Math.max(d - 34 - 1, 1),
        _ = 250,
        u = V.length,
        h = (0, React.useMemo)(() => G.reduce((e, a) => e + a, 0), []),
        p = (0, React.useMemo)(() => X.reduce((e, a) => e + a, 0), []),
        b = (h - p) / p * 100,
        m = (0, React.useMemo)(() => Math.max(...G), []),
        k = Math.round(h / u),
        {
          top: f,
          ticks: g
        } = (0, React.useMemo)(() => function (e, a = 4) {
          if (!(e > 0)) return {
            top: 1,
            ticks: [0, 1]
          };
          let t = e / a,
            r = 10 ** Math.floor(Math.log10(t)),
            l = t / r,
            n = (l <= 1 ? 1 : l <= 2 ? 2 : l <= 2.5 ? 2.5 : l <= 5 ? 5 : 10) * r,
            s = Math.ceil(e / n) * n,
            i = [];
          for (let e = 0; e <= s + n / 1e3; e += n) i.push(e);
          return {
            top: s,
            ticks: i
          };
        }(Math.max(...G, ...X)), []),
        v = x / u,
        w = .72 * v,
        y = Math.max((w - 3) / 2, 1),
        j = (0, React.useCallback)(e => 34 + e * v, [v]),
        N = (0, React.useCallback)(e => 10 + _ - e / f * _, [_, f]),
        M = Math.ceil(u / 7),
        A = null === t ? h : G[t],
        S = null === t ? b : (G[t] - X[t]) / X[t] * 100,
        $ = (G[s] - X[s]) / X[s] * 100;
      return <div className={B("bg-white dark:bg-neutral-950", U, "flex h-full min-h-[640px] w-full flex-col justify-center-safe overflow-y-auto p-8 sm:p-10")}><div className={B("relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 shadow-[inset_0_0_0_1px_rgb(84_62_32/0.05)] dark:shadow-[inset_0_0_0_1px_rgb(255_255_255/0.05)]", "mx-auto w-full max-w-[880px] shrink-0")}><div className={B("mx-1 mb-1 flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-5xl,22px))] border border-transparent bg-white dark:bg-neutral-950 shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] [&:has(+*)]:mb-0", "divide-y divide-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:divide-neutral-100/7", "mt-1")}><div className="px-4 py-4"><div className="flex flex-wrap items-start justify-between gap-3"><div className="min-w-0"><p className={B(O, "flex flex-wrap gap-x-2")}><span>Ticket volume</span><span className={W}>{null === t ? "This year" : V[t]}</span></p><div className="mt-1 flex flex-wrap items-baseline gap-2.5"><p className={B("text-[44px]/[48px] font-extrabold tracking-[-0.025em] tabular-nums", U)} style={{
                      minWidth: "6ch"
                    }}>{A.toLocaleString("en-US")}</p><p className="inline-flex min-w-0 flex-wrap items-baseline gap-x-1 text-[13px]/[18px] font-bold tabular-nums [&>svg]:self-center text-neutral-900/78 dark:text-neutral-100/78"><Q value={S} /><span className={W}>{null === t ? "vs last year" : "YoY"}</span></p></div></div><div className="flex shrink-0 items-center gap-1">{Y.map(e => {
                    let a = o[e.id];
                    return <button type="button" aria-pressed={a} onClick={() => c(a => {
                      let t = {
                        ...a,
                        [e.id]: !a[e.id]
                      };
                      return t.current || t.prior ? t : a;
                    })} className="flex h-8 min-w-0 cursor-pointer items-center gap-2 rounded-[calc(var(--rb-r-full,999px))] px-3 text-[14px]/[18px] font-bold text-neutral-900 dark:text-neutral-100 transition-[background-color,color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] aria-[pressed=false]:text-neutral-900/45 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:hover:bg-neutral-100/6 dark:aria-[pressed=false]:text-neutral-100/45"><span className={B("inline-flex", a ? "opacity-100" : "opacity-40")}><J outlined={e.outlined} /></span>{e.label}</button>;
                  })}</div></div><div ref={e} role="img" tabIndex={0} aria-label={`Ticket volume by month, this year versus last year. This year total ${h.toLocaleString("en-US")} tickets.`} onPointerMove={a => (a => {
                let t = e.current;
                if (!t) return;
                let r = K(Math.floor((a - t.getBoundingClientRect().left - 34) / v), 0, u - 1);
                n(r), i(r);
              })(a.clientX)} onPointerLeave={() => n(null)} onBlur={() => n(null)} onKeyDown={e => {
                if ("ArrowLeft" === e.key || "ArrowRight" === e.key) {
                  e.preventDefault();
                  let a = K((t ?? u - 1) + ("ArrowLeft" === e.key ? -1 : 1), 0, u - 1);
                  n(a), i(a);
                }
                "Home" === e.key && (n(0), i(0)), "End" === e.key && (n(u - 1), i(u - 1)), "Escape" === e.key && n(null);
              }} style={{
                height: 280,
                touchAction: "pan-y"
              }} className={B("focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))]", "relative mt-4 cursor-crosshair")}>{d > 0 && <svg width={d} height={280} className="overflow-visible">{g.map(e => <g><line x1={34} x2={d - 1} y1={N(e)} y2={N(e)} shapeRendering="crispEdges" className="stroke-neutral-900/6 dark:stroke-neutral-100/8" strokeWidth={1} /><text x={0} y={N(e)} dy={-4} className={T}>{Math.abs(e) >= 1e6 ? `${(e / 1e6).toFixed(Math.abs(e) >= 1e7 ? 0 : 1)}M` : Math.abs(e) >= 1e3 ? `${(e / 1e3).toFixed(Math.abs(e) >= 1e4 ? 0 : 1)}k` : `${e}`}</text></g>)}{null !== t && <rect x={j(t)} y={10} width={v} height={_} className={I} />}{V.map((e, a) => a % M == 0 ? <text x={j(a) + v / 2} y={276} textAnchor="middle" className={T}>{e}</text> : null)}{V.map((e, a) => {
                    let l = j(a) + (v - w) / 2,
                      n = null !== t && t !== a;
                    return <g>{Y.map((e, t) => {
                        let s = e.values[a] / f * _,
                          i = o[e.id];
                        return <path d={function (e, a, t, r, l) {
                          if (r <= 0 || t <= 0) return "";
                          let n = Math.min(2, t / 2, r);
                          return `M${e},${a + r} L${e},${a + n} Q${e},${a} ${e + n},${a} L${e + t - n},${a} Q${e + t},${a} ${e + t},${a + n} L${e + t},${a + r} Z`;
                        }(l + t * (y + 3), 10 + _ - s, y, s, 0)} strokeWidth={1} className={B(e.barClass, "transition-[color,background-color,border-color,box-shadow,outline-color,opacity,scale,translate] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms]")} style={{
                          opacity: !i || n ? .4 : 1
                        }} />;
                      })}</g>;
                  })}<line x1={34} x2={d - 1} y1={10 + _} y2={10 + _} shapeRendering="crispEdges" className="stroke-neutral-900/12 dark:stroke-neutral-100/14" strokeWidth={1} /></svg>}{d > 0 && <div aria-hidden="true" style={{
                  left: K(j(s) + v / 2, 72, Math.max(d - 72, 72)),
                  top: 4
                }} className={B("pointer-events-none absolute z-[70] flex min-w-36 max-w-64 flex-col gap-1.5 rounded-[calc(var(--rb-r-xl,12px))] bg-neutral-900 px-3.5 py-2.5 text-[13px]/[16px] font-bold tabular-nums text-white shadow-[0_0_0_1px_rgb(84_62_32/0.08),0_24px_56px_-20px_rgb(84_62_32/0.34),0_6px_16px_-8px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.65),0_24px_56px_-16px_rgb(0_0_0/0.8)] dark:bg-neutral-100 dark:text-neutral-900", "transition-[opacity,scale] duration-[260ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] starting:scale-[0.94] starting:opacity-0 motion-reduce:transition-none motion-reduce:starting:scale-100", "-translate-x-1/2", null === t ? "opacity-0" : "opacity-100")}><p className={B(P, "whitespace-nowrap")}>{V[s]}</p><div className="space-y-0.5">{Y.map(e => <div className="flex items-center justify-between gap-4"><span className={B(P, "flex items-center gap-1.5 whitespace-nowrap")}><J outlined={e.outlined} inverse={!0} />{e.label}</span><span className="whitespace-nowrap">{e.values[s].toLocaleString("en-US")}</span></div>)}<div className="flex items-center justify-between gap-4 pt-0.5"><span className={B(P, "whitespace-nowrap")}>YoY</span><span className="whitespace-nowrap">{$ >= 0 ? "+" : "−"}{Math.abs($).toFixed(1)}%</span></div></div></div>}</div></div><div className="grid grid-cols-1 gap-1 p-1 sm:grid-cols-3">{[{
                label: "This year total",
                value: h.toLocaleString("en-US"),
                unit: ""
              }, {
                label: "Monthly average",
                value: k.toLocaleString("en-US"),
                unit: ""
              }, {
                label: "Busiest month",
                value: m.toLocaleString("en-US"),
                unit: "Nov"
              }].map(e => <div className={B("flex min-w-0 flex-col gap-2 rounded-[calc(var(--rb-r-5xl,22px))] bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] px-3 py-3.5 dark:bg-neutral-100/4", "rounded-[var(--rb-r-4xl,18px)]", "ps-3 pe-3")}><p className={B(O, "truncate")}>{e.label}</p><p className="flex min-w-0 flex-wrap items-baseline gap-x-1 text-[22px]/[28px] font-extrabold tracking-[-0.01em] tabular-nums text-neutral-900 dark:text-neutral-100">{e.value}{e.unit && <span className="ms-0.5 text-[15px]/[20px] font-bold tracking-normal text-neutral-900/78 dark:text-neutral-100/78">{e.unit}</span>}</p></div>)}</div></div></div></div>;
    },
    "analytics-4": function () {
      let [e, a] = function () {
          let e = (0, React.useRef)(null),
            [a, t] = (0, React.useState)({
              width: 0,
              height: 0
            });
          return (0, React.useEffect)(() => {
            let a = e.current,
              r = a?.ownerDocument.defaultView;
            if (!a || !r?.ResizeObserver) return;
            let l = new r.ResizeObserver(([e]) => {
              let a = e.contentRect;
              t({
                width: a.width,
                height: a.height
              });
            });
            return l.observe(a), () => l.disconnect();
          }, []), [e, a];
        }(),
        [t, i] = (0, React.useState)(null),
        [o, c] = (0, React.useState)(e_.length - 1),
        [d, x] = (0, React.useState)({
          p50: !0,
          p90: !0,
          p99: !0
        }),
        _ = a.width,
        u = Math.max(_ - 34 - 1, 1),
        h = 206,
        p = ex.length,
        b = eh.filter(e => d[e.id]),
        {
          top: m,
          ticks: k
        } = (0, React.useMemo)(() => function (e, a = 4) {
          if (!(e > 0)) return {
            top: 1,
            ticks: [0, 1]
          };
          let t = e / a,
            r = 10 ** Math.floor(Math.log10(t)),
            l = t / r,
            n = (l <= 1 ? 1 : l <= 2 ? 2 : l <= 2.5 ? 2.5 : l <= 5 ? 5 : 10) * r,
            s = Math.ceil(e / n) * n,
            i = [];
          for (let e = 0; e <= s + n / 1e3; e += n) i.push(e);
          return {
            top: s,
            ticks: i
          };
        }(Math.max(250, ...b.flatMap(e => e.values))), [b]),
        f = (0, React.useCallback)(e => 34 + e / (p - 1) * u, [u, p]),
        g = (0, React.useCallback)(e => 10 + h - e / m * h, [h, m]),
        v = Math.ceil(p / eo(Math.floor(u / 56), 2, 7)),
        w = e_.indexOf(Math.min(...e_)),
        y = e_[p - 1],
        j = null === t ? y : e_[t];
      return <div className={Z("bg-white dark:bg-neutral-950", ee, "flex h-full min-h-[640px] w-full flex-col justify-center-safe overflow-y-auto p-8 sm:p-10")}><div className={Z("relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 shadow-[inset_0_0_0_1px_rgb(84_62_32/0.05)] dark:shadow-[inset_0_0_0_1px_rgb(255_255_255/0.05)]", "mx-auto w-full max-w-[880px] shrink-0")}><div className={Z("mx-1 mb-1 flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-5xl,22px))] border border-transparent bg-white dark:bg-neutral-950 shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] [&:has(+*)]:mb-0", "divide-y divide-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:divide-neutral-100/7", "mt-1")}><div className="px-4 py-4"><div className="flex flex-wrap items-start justify-between gap-3"><div className="min-w-0"><p className={Z(el, "flex flex-wrap gap-x-2")}><span>p99 latency</span><span className={ea}>{null === t ? "Latest" : eu[t]}</span></p><div className="mt-1 flex flex-wrap items-baseline gap-2.5"><p className={Z("text-[44px]/[48px] font-extrabold tracking-[-0.025em] tabular-nums", ee, "flex items-baseline gap-x-1")}>{j}<span className={en}>ms</span></p><p className="inline-flex min-w-0 flex-wrap items-baseline gap-x-1 text-[13px]/[18px] font-bold tabular-nums [&>svg]:self-center text-neutral-900/78 dark:text-neutral-100/78"><ec value={(j - 250) / 250 * 100} /><span className={ea}>vs SLO</span></p></div></div><div className="flex shrink-0 items-center gap-1">{eh.map(e => {
                    let a = d[e.id];
                    return <button type="button" aria-pressed={a} onClick={() => x(a => {
                      let t = {
                        ...a,
                        [e.id]: !a[e.id]
                      };
                      return t.p50 || t.p90 || t.p99 ? t : a;
                    })} className="flex h-8 min-w-0 cursor-pointer items-center gap-2 rounded-[calc(var(--rb-r-full,999px))] px-3 text-[14px]/[18px] font-bold text-neutral-900 dark:text-neutral-100 transition-[background-color,color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] aria-[pressed=false]:text-neutral-900/45 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:hover:bg-neutral-100/6 dark:aria-[pressed=false]:text-neutral-100/45"><span className={Z("inline-flex", a ? "opacity-100" : "opacity-40")}><ed stroke={e.stroke} dash={e.dash} /></span>{e.label}</button>;
                  })}</div></div><div ref={e} role="img" tabIndex={0} aria-label={`API latency percentiles over 30 days. Latest p99 ${y} milliseconds against a 250 millisecond SLO.`} onPointerMove={a => (a => {
                let t = e.current;
                if (!t) return;
                let r = t.getBoundingClientRect(),
                  l = u / (p - 1),
                  n = eo(Math.round((a - r.left - 34) / l), 0, p - 1);
                i(n), c(n);
              })(a.clientX)} onPointerLeave={() => i(null)} onBlur={() => i(null)} onKeyDown={e => {
                if ("ArrowLeft" === e.key || "ArrowRight" === e.key) {
                  e.preventDefault();
                  let a = eo((t ?? p - 1) + ("ArrowLeft" === e.key ? -1 : 1), 0, p - 1);
                  i(a), c(a);
                }
                "Home" === e.key && (i(0), c(0)), "End" === e.key && (i(p - 1), c(p - 1)), "Escape" === e.key && i(null);
              }} style={{
                height: 236,
                touchAction: "pan-y"
              }} className={Z("focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))]", "relative mt-4 cursor-crosshair")}>{_ > 0 && <svg width={_} height={236} className="overflow-visible">{k.map(e => <g><line x1={34} x2={_ - 1} y1={g(e)} y2={g(e)} shapeRendering="crispEdges" className="stroke-neutral-900/6 dark:stroke-neutral-100/8" strokeWidth={1} /><text x={0} y={g(e)} dy={-4} className={es}>{Math.abs(e) >= 1e6 ? `${(e / 1e6).toFixed(Math.abs(e) >= 1e7 ? 0 : 1)}M` : Math.abs(e) >= 1e3 ? `${(e / 1e3).toFixed(Math.abs(e) >= 1e4 ? 0 : 1)}k` : `${e}`}</text></g>)}{eu.map((e, a) => a % v == 0 ? <text x={f(a)} y={232} textAnchor={0 === a ? "start" : a === p - 1 ? "end" : "middle"} className={es}>{e}</text> : null)}{m >= 250 && <g><line x1={34} x2={_ - 1} y1={g(250)} y2={g(250)} strokeDasharray="4 4" stroke="currentColor" className={et} strokeWidth={1} /><text x={eo(f(w), 70, _ - 1 - 36)} y={g(250)} dy={-6} textAnchor="middle" className={es}>SLO {250}ms</text></g>}{b.map(e => {
                    let a = (0, __mod_46667.A)().x((e, a) => f(a)).y(e => g(e)).curve(__mod_4670.G)(e.values) ?? "";
                    return <path d={a} fill="none" className={e.stroke} strokeWidth={2} strokeDasharray={e.dash} strokeLinecap="round" strokeLinejoin="round" />;
                  })}{d.p99 && e_.map((e, a) => e > 250 ? <rect x={f(a) - 3} y={g(e) - 3} width={6} height={6} fill="currentColor" className={et} /> : null)}{null !== t && <g><line x1={f(t)} x2={f(t)} y1={10} y2={10 + h} className="stroke-neutral-900/40 dark:stroke-neutral-100/45" strokeWidth={1} shapeRendering="crispEdges" />{b.map(e => {
                      let a = e.values[t];
                      return "p99" === e.id && a > 250 ? <rect x={f(t) - 4} y={g(a) - 4} width={8} height={8} fill="currentColor" className={et} /> : <rect x={f(t) - 4} y={g(a) - 4} width={8} height={8} className="fill-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_82%,black)] stroke-white stroke-[2.5] dark:fill-[var(--rb-accent,oklch(81%_0.16_163))] dark:stroke-neutral-900" />;
                    })}</g>}</svg>}{_ > 0 && <div aria-hidden="true" style={{
                  left: eo(f(o), 78, Math.max(_ - 78, 78)),
                  top: 4
                }} className={Z("pointer-events-none absolute z-[70] flex min-w-36 max-w-64 flex-col gap-1.5 rounded-[calc(var(--rb-r-xl,12px))] bg-neutral-900 px-3.5 py-2.5 text-[13px]/[16px] font-bold tabular-nums text-white shadow-[0_0_0_1px_rgb(84_62_32/0.08),0_24px_56px_-20px_rgb(84_62_32/0.34),0_6px_16px_-8px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.65),0_24px_56px_-16px_rgb(0_0_0/0.8)] dark:bg-neutral-100 dark:text-neutral-900", "transition-[opacity,scale] duration-[260ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] starting:scale-[0.94] starting:opacity-0 motion-reduce:transition-none motion-reduce:starting:scale-100", "-translate-x-1/2", null === t ? "opacity-0" : "opacity-100")}><p className={Z(er, "whitespace-nowrap")}>{eu[o]}</p><div className="space-y-0.5">{eh.map(e => <div className={Z("flex items-center justify-between gap-4", !d[e.id] && "opacity-40")}><span className={Z(er, "flex items-center gap-1.5 whitespace-nowrap")}><ed stroke={e.stroke} dash={e.dash} inverse={!0} />{e.label}</span><span className="whitespace-nowrap">{e.values[o]}ms</span></div>)}</div></div>}</div></div><div className="grid grid-cols-1 gap-1 p-1 sm:grid-cols-3">{eh.map(e => <div className={Z("flex min-w-0 flex-col gap-2 rounded-[calc(var(--rb-r-5xl,22px))] bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] px-3 py-3.5 dark:bg-neutral-100/4", "rounded-[var(--rb-r-4xl,18px)]", "ps-3 pe-3")}><p className={Z(el, "flex items-center gap-1.5 truncate")}><ed stroke={e.stroke} dash={e.dash} />{e.label} latency</p><p className="flex min-w-0 flex-wrap items-baseline gap-x-1 text-[22px]/[28px] font-extrabold tracking-[-0.01em] tabular-nums text-neutral-900 dark:text-neutral-100">{e.values[p - 1]}<span className={en}>ms</span></p></div>)}</div></div></div></div>;
    },
    "analytics-5": function () {
      let [e, a] = (0, React.useState)("Sessions"),
        [t, n] = (0, React.useState)(null),
        [s, i] = function () {
          let e = (0, React.useRef)(null),
            [a, t] = (0, React.useState)({
              width: 0,
              height: 0
            });
          return (0, React.useEffect)(() => {
            let a = e.current,
              r = a?.ownerDocument.defaultView;
            if (!a || !r?.ResizeObserver) return;
            let l = new r.ResizeObserver(([e]) => {
              let a = e.contentRect;
              t({
                width: a.width,
                height: a.height
              });
            });
            return l.observe(a), () => l.disconnect();
          }, []), [e, a];
        }(),
        o = (0, React.useMemo)(() => {
          let a = "Sessions" === e ? "sessions" : "revenue",
            t = [...ew].sort((e, t) => t[a] - e[a]),
            r = t.reduce((e, t) => e + t[a], 0),
            l = t.map(e => Math.round(e[a] / r * 1e3) / 10),
            n = l.slice(0, -1).reduce((e, a) => e + a, 0);
          return {
            sorted: t,
            total: r,
            shares: l.map((e, a) => a === l.length - 1 ? Math.round((100 - n) * 10) / 10 : e),
            key: a
          };
        }, [e]),
        c = Math.min(300, Math.max(200, i.width > 0 ? Math.min(i.width, 300) : 260)),
        d = c / 2 - 4,
        x = .62 * d,
        _ = (0, React.useMemo)(() => {
          let e = (0, __mod_67133.A)().value(e => e[o.key]).sort(null).padAngle(.012)(o.sorted),
            a = (0, __mod_44439.A)().innerRadius(x).outerRadius(d).cornerRadius(2);
          return e.map((e, t) => {
            let r = (e.startAngle + e.endAngle) / 2;
            return {
              path: a(e) ?? "",
              lx: 4 * Math.sin(r),
              ly: -(4 * Math.cos(r)),
              index: t
            };
          });
        }, [o, x, d]),
        u = "Sessions" === e ? "sessions" : "revenue",
        h = "Revenue" === e,
        p = e => h ? `$${e.toLocaleString("en-US")}` : e.toLocaleString("en-US"),
        b = null === t ? p(o.total) : p(o.sorted[t][o.key]),
        m = null === t ? e : `${o.shares[t].toFixed(1)}% of ${u}`,
        k = e => {
          a(e), n(null);
        };
      return <div className={em("bg-white dark:bg-neutral-950", ek, "flex h-full min-h-[560px] w-full flex-col justify-center-safe overflow-y-auto p-8 sm:p-10")}><div className={em("relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 shadow-[inset_0_0_0_1px_rgb(84_62_32/0.05)] dark:shadow-[inset_0_0_0_1px_rgb(255_255_255/0.05)]", "mx-auto w-full max-w-[880px] shrink-0")}><div className={em("mx-1 mb-1 flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-5xl,22px))] border border-transparent bg-white dark:bg-neutral-950 shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] [&:has(+*)]:mb-0", "divide-y divide-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:divide-neutral-100/7", "mt-1")}><div className="flex flex-wrap items-start justify-between gap-3 px-5 py-4"><div className="min-w-0"><h2 className={em("text-[17px]/[22px] font-extrabold", ek)}>Traffic by channel</h2><p className={em("text-[14px]/[20px] font-medium", ef, "mt-0.5 truncate")}>Where visitors came from over the last 30 days.</p></div><div role="radiogroup" aria-label="Metric" onKeyDown={a => {
                var t, r, l;
                let n;
                return t = ev.length, r = ev.indexOf(e), l = e => k(ev[e]), void (!((n = "ArrowRight" === a.key || "ArrowDown" === a.key ? (r + 1) % t : "ArrowLeft" === a.key || "ArrowUp" === a.key ? (r - 1 + t) % t : "Home" === a.key ? 0 : "End" === a.key ? t - 1 : -1) < 0) && (a.preventDefault(), l(n), a.currentTarget.querySelectorAll('[role="radio"]')[n]?.focus()));
              }} className={em("inline-flex w-fit max-w-full items-stretch gap-1 rounded-[calc(var(--rb-r-full,999px)_+_min(4px,var(--rb-r-full,999px)))] bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] p-1", "h-10", "shrink-0")}>{ev.map(a => <button type="button" role="radio" aria-checked={a === e} tabIndex={a === e ? 0 : -1} onClick={() => k(a)} className="relative inline-flex min-w-0 cursor-pointer items-center justify-center gap-1.5 whitespace-nowrap [&_svg]:shrink-0 rounded-[calc(var(--rb-r-full,999px))] px-4 text-[14px]/[18px] font-bold text-neutral-900/78 dark:text-neutral-100/78 select-none transition-[background-color,color,box-shadow,outline-color,scale] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:scale-[0.96] motion-reduce:active:scale-100 hover:not-aria-checked:text-neutral-900 aria-checked:bg-white aria-checked:text-neutral-900 aria-checked:shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_2px_rgb(84_62_32/0.10),0_3px_8px_-2px_rgb(84_62_32/0.20)] disabled:cursor-not-allowed disabled:text-neutral-900/40 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:hover:not-aria-checked:text-neutral-100 dark:aria-checked:bg-[color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800))] dark:aria-checked:text-neutral-100 dark:aria-checked:shadow-[inset_0_1px_0_rgb(255_255_255/0.1),0_0_0_1px_rgb(0_0_0/0.6),0_2px_5px_-1px_rgb(0_0_0/0.6)] dark:disabled:text-neutral-100/40">{a}</button>)}</div></div><div className="grid gap-5 px-5 py-5 md:grid-cols-[minmax(0,300px)_1fr] md:items-center md:gap-6"><div ref={s} className="relative mx-auto w-full max-w-[300px]">{i.width > 0 && <svg width={c} height={c} viewBox={`0 0 ${c} ${c}`} role="img" aria-label={`${e} by acquisition channel. Total ${p(o.total)}.`} className="mx-auto block overflow-visible" onPointerLeave={() => n(null)}><g transform={`translate(${c / 2} ${c / 2})`}>{_.map(e => {
                      let a = t === e.index;
                      return <path d={e.path} fill="currentColor" strokeWidth={1} className={em(ey[e.index].mark, "transition-[color,background-color,border-color,box-shadow,outline-color,opacity,scale,translate] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms]", "cursor-pointer")} style={{
                        opacity: null === t || a ? 1 : .4,
                        transform: a ? `translate(${e.lx}px, ${e.ly}px)` : "translate(0px, 0px)"
                      }} onPointerEnter={() => n(e.index)} />;
                    })}</g></svg>}<div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center"><p className={em("text-[34px]/[40px] font-extrabold tracking-[-0.02em] tabular-nums", ek)}>{b}</p><p className={em("text-[13px]/[16px] font-semibold tabular-nums", ef, "mt-0.5 max-w-[9rem] truncate text-center")}>{m}</p></div></div><ul className="flex flex-col gap-0.5">{o.sorted.map((e, a) => {
                  let l = ey[a];
                  return <li><button type="button" onPointerEnter={() => n(a)} onPointerLeave={() => n(null)} onFocus={() => n(a)} onBlur={() => n(null)} className={em("flex h-8 min-w-0 cursor-pointer items-center gap-2 rounded-[calc(var(--rb-r-full,999px))] px-3 text-[14px]/[18px] font-bold text-neutral-900 dark:text-neutral-100 transition-[background-color,color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] aria-[pressed=false]:text-neutral-900/45 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:hover:bg-neutral-100/6 dark:aria-[pressed=false]:text-neutral-100/45", t === a && "bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] dark:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)]", "w-full text-left")}><svg aria-hidden="true" viewBox="0 0 8 8" className="inline-block size-2.5 shrink-0 rounded-full">{l.outlined ? <rect x={.5} y={.5} width={7} height={7} strokeWidth={1} className={l.mark} /> : <rect width={8} height={8} fill="currentColor" className={l.mark} />}</svg><span className={em("text-neutral-900/78 dark:text-neutral-100/78", "min-w-0 flex-1 truncate")}>{e.name}</span><span className={em(eg, ek, "shrink-0")}>{p(e[o.key])}</span><span className={em(eg, ef, "w-12 shrink-0")}>{o.shares[a].toFixed(1)}%</span></button></li>;
                })}</ul></div></div></div></div>;
    },
    "analytics-6": function () {
      let [e, a] = (0, React.useState)("28 days"),
        [t, n] = (0, React.useState)(null),
        [s, i] = (0, React.useState)({}),
        o = eE[e],
        c = (0, React.useMemo)(() => ez.map(e => {
          var a, t;
          return a = e.seed, t = e.sparkBase, Array.from({
            length: 14
          }, (e, r) => Math.max(1, Math.round(t * (1 + .44 * (.5 * Math.sin(.9 * r + a) + .32 * Math.sin(.31 * r + 1.7 * a))))));
        }), []),
        d = o.counts[0] + o.counts[1] + o.counts[2],
        x = o.total - d,
        _ = [{
          name: ez[0].name,
          value: o.counts[0]
        }, {
          name: ez[1].name,
          value: o.counts[1]
        }, {
          name: ez[2].name,
          value: o.counts[2]
        }, {
          name: "Everything else",
          value: x
        }],
        u = e => e / o.total * 100,
        h = null === t ? null : _[t],
        p = e => {
          a(e), n(null);
        };
      return <div className={ej("bg-white dark:bg-neutral-950", eN, "flex h-full min-h-[640px] w-full flex-col justify-center-safe overflow-y-auto p-8 sm:p-10")}><div className={ej("relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 shadow-[inset_0_0_0_1px_rgb(84_62_32/0.05)] dark:shadow-[inset_0_0_0_1px_rgb(255_255_255/0.05)]", "mx-auto w-full max-w-[880px] shrink-0")}><div className={ej("mx-1 mb-1 flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-5xl,22px))] border border-transparent bg-white dark:bg-neutral-950 shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] [&:has(+*)]:mb-0", eS, "mt-1")}><div className="px-5 py-4"><div className="flex flex-wrap items-start justify-between gap-3"><div className="min-w-0"><p className="text-[14px]/[20px] font-bold text-neutral-900/78 dark:text-neutral-100/78">Referral signups</p><div className="mt-1 flex flex-wrap items-baseline gap-2.5"><p className={ej("text-[44px]/[48px] font-extrabold tracking-[-0.025em] tabular-nums", eN)}>{o.total.toLocaleString("en-US")}</p><p className={e$}><eB value={o.delta} /><span className={eM}>vs previous {e}</span></p></div></div><div role="radiogroup" aria-label="Range" onKeyDown={a => {
                  var t, r, l;
                  let n;
                  return t = eC.length, r = eC.indexOf(e), l = e => p(eC[e]), void (!((n = "ArrowRight" === a.key || "ArrowDown" === a.key ? (r + 1) % t : "ArrowLeft" === a.key || "ArrowUp" === a.key ? (r - 1 + t) % t : "Home" === a.key ? 0 : "End" === a.key ? t - 1 : -1) < 0) && (a.preventDefault(), l(n), a.currentTarget.querySelectorAll('[role="radio"]')[n]?.focus()));
                }} className={ej("inline-flex w-fit max-w-full items-stretch gap-1 rounded-[calc(var(--rb-r-full,999px)_+_min(4px,var(--rb-r-full,999px)))] bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] p-1", "h-10", "shrink-0")}>{eC.map(a => <button type="button" role="radio" aria-checked={a === e} tabIndex={a === e ? 0 : -1} onClick={() => p(a)} className="relative inline-flex min-w-0 cursor-pointer items-center justify-center gap-1.5 whitespace-nowrap [&_svg]:shrink-0 rounded-[calc(var(--rb-r-full,999px))] px-4 text-[14px]/[18px] font-bold text-neutral-900/78 dark:text-neutral-100/78 select-none transition-[background-color,color,box-shadow,outline-color,scale] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:scale-[0.96] motion-reduce:active:scale-100 hover:not-aria-checked:text-neutral-900 aria-checked:bg-white aria-checked:text-neutral-900 aria-checked:shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_2px_rgb(84_62_32/0.10),0_3px_8px_-2px_rgb(84_62_32/0.20)] disabled:cursor-not-allowed disabled:text-neutral-900/40 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:hover:not-aria-checked:text-neutral-100 dark:aria-checked:bg-[color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800))] dark:aria-checked:text-neutral-100 dark:aria-checked:shadow-[inset_0_1px_0_rgb(255_255_255/0.1),0_0_0_1px_rgb(0_0_0/0.6),0_2px_5px_-1px_rgb(0_0_0/0.6)] dark:disabled:text-neutral-100/40">{a}</button>)}</div></div><div role="img" aria-label="Signup share across the top three sources and everything else" className="mt-4 flex h-2.5 w-full gap-0.5">{_.map((e, a) => <button type="button" aria-label={`${e.name}, ${e.value.toLocaleString("en-US")} signups`} onPointerEnter={() => n(a)} onPointerLeave={() => n(null)} onFocus={() => n(a)} onBlur={() => n(null)} style={{
                  flexGrow: e.value
                }} className={ej(eF[a], eL, "transition-[color,background-color,border-color,box-shadow,outline-color,opacity,scale,translate] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms]", "h-full min-w-1.5 cursor-pointer bg-current", 0 === a && "rounded-l-[2px]", a === _.length - 1 && "rounded-r-[2px]", null !== t && t !== a && "opacity-40")} />)}</div><p className={ej(eA, eM, "mt-2 flex min-w-0 gap-2 truncate")}>{h ? <><span className={ej(eN, "min-w-0 truncate")}>{h.name}</span><span className={ej(eR, "shrink-0")}>{h.value.toLocaleString("en-US")} signups</span><span className={ej(eR, "shrink-0")}>{u(h.value).toFixed(1)}% of total</span></> : <span className="min-w-0 truncate">Top 3 sources drive {u(d).toFixed(0)}% of all signups this {e}</span>}</p></div><div className={ej(eS, "p-1")}>{ez.map((e, a) => {
                let l = t === e.seg,
                  d = s[e.id] ?? null,
                  x = o.counts[a],
                  _ = null === d ? x.toLocaleString("en-US") : c[a][d].toLocaleString("en-US");
                return <div onPointerEnter={() => n(e.seg)} onPointerLeave={() => n(null)} className={ej("relative flex min-h-12 w-full min-w-0 flex-wrap items-center gap-x-3 gap-y-1 py-2.5 text-left text-neutral-900 dark:text-neutral-100 transition-[background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] has-[[data-description]]:min-h-16", l && "bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] dark:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)]", "rounded-[var(--rb-r-4xl,18px)]", "ps-2 pe-4")}><span className={ej("shrink-0 text-[14px]/[20px] font-semibold tabular-nums text-neutral-900/62 dark:text-neutral-100/62", "w-4 text-right")}>{a + 1}</span><span aria-hidden="true" className={ej("relative inline-flex size-8 shrink-0 overflow-hidden rounded-[calc(var(--rb-r-lg,10px))] select-none", "size-9")}><span className="flex size-full items-center justify-center rounded-[inherit] bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_24%,white)] text-[12px]/[16px] font-extrabold tabular-nums text-neutral-900 dark:text-neutral-100 dark:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_22%,var(--color-neutral-900))]">{e.initials}</span></span><div className="flex min-w-0 flex-1 items-center gap-3"><span className={ej("text-[15px]/[20px] font-bold", eN, "w-24 min-w-0 truncate")}>{e.name}</span><div className="hidden min-w-0 flex-1 sm:block"><eU data={c[a]} active={d} onActive={a => i(t => ({
                        ...t,
                        [e.id]: a
                      }))} /></div></div><span className={ej(eA, eN, eR, "w-16 shrink-0")}>{_}</span><span className={ej(e$, "w-16 shrink-0 justify-end")}><eB value={o.deltas[a]} /></span></div>;
              })}</div></div></div></div>;
    },
    "analytics-7": function () {
      let [e, a] = (0, React.useState)("24h"),
        [t, n] = (0, React.useState)("req"),
        s = eG[e],
        i = (0, React.useMemo)(() => eX.map(e => Array.from({
          length: s
        }, (a, t) => {
          let r,
            l = e.base * (1 + e.amp * (.5 * Math.sin(.7 * t + (r = e.seed)) + .34 * Math.sin(.23 * t + 2.1 * r) + .12 * Math.sin(1.9 * t + .6 * r))),
            n = 10 ** e.decimals;
          return Math.max(e.decimals ? .01 : 1, Math.round(l * n) / n);
        })), [s]),
        o = eX.findIndex(e => e.id === t),
        c = o >= 0;
      return <div className={eW("bg-white dark:bg-neutral-950", eP, "flex h-full min-h-[640px] w-full flex-col justify-center-safe overflow-y-auto p-6 sm:p-8")}><div className="mx-auto w-full max-w-[1100px]"><div className="flex flex-wrap items-start justify-between gap-3"><div className="min-w-0"><h2 className={eW("text-[17px]/[22px] font-extrabold", eP)}>Service health</h2><p className={eW("text-[14px]/[20px] font-medium", eO, "mt-0.5 truncate")}>Live signals from the ingest tier. Select a card for detail.</p></div><div role="radiogroup" aria-label="Range" onKeyDown={t => {
              var r, l, n;
              let s;
              return r = eV.length, l = eV.indexOf(e), n = e => a(eV[e]), void (!((s = "ArrowRight" === t.key || "ArrowDown" === t.key ? (l + 1) % r : "ArrowLeft" === t.key || "ArrowUp" === t.key ? (l - 1 + r) % r : "Home" === t.key ? 0 : "End" === t.key ? r - 1 : -1) < 0) && (t.preventDefault(), n(s), t.currentTarget.querySelectorAll('[role="radio"]')[s]?.focus()));
            }} className={eW("inline-flex w-fit max-w-full items-stretch gap-1 rounded-[calc(var(--rb-r-full,999px)_+_min(4px,var(--rb-r-full,999px)))] bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] p-1", "h-10", "shrink-0")}>{eV.map(t => <button type="button" role="radio" aria-checked={t === e} tabIndex={t === e ? 0 : -1} onClick={() => a(t)} className="relative inline-flex min-w-0 cursor-pointer items-center justify-center gap-1.5 whitespace-nowrap [&_svg]:shrink-0 rounded-[calc(var(--rb-r-full,999px))] px-4 text-[14px]/[18px] font-bold text-neutral-900/78 dark:text-neutral-100/78 select-none transition-[background-color,color,box-shadow,outline-color,scale] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:scale-[0.96] motion-reduce:active:scale-100 hover:not-aria-checked:text-neutral-900 aria-checked:bg-white aria-checked:text-neutral-900 aria-checked:shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_2px_rgb(84_62_32/0.10),0_3px_8px_-2px_rgb(84_62_32/0.20)] disabled:cursor-not-allowed disabled:text-neutral-900/40 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:hover:not-aria-checked:text-neutral-100 dark:aria-checked:bg-[color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800))] dark:aria-checked:text-neutral-100 dark:aria-checked:shadow-[inset_0_1px_0_rgb(255_255_255/0.1),0_0_0_1px_rgb(0_0_0/0.6),0_2px_5px_-1px_rgb(0_0_0/0.6)] dark:disabled:text-neutral-100/40">{t}</button>)}</div></div><div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">{eX.map((e, a) => <e1 metric={e} data={i[a]} selected={e.id === t} onToggle={() => n(a => a === e.id ? null : e.id)} />)}</div><div className={eW("-mx-3 -mb-6 grid", c ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}><div className="min-h-0 overflow-hidden"><div className="px-3 pt-3 pb-6">{c && <e2 metric={eX[o]} data={i[o]} range={e} />}</div></div></div></div></div>;
    },
    "analytics-8": function () {
      let [e, a] = (0, React.useState)("All traffic"),
        [t, n] = (0, React.useState)(null),
        s = (0, React.useRef)(null),
        i = (0, React.useRef)(null),
        [o, c] = (0, React.useState)({
          x: 0,
          y: 0,
          row: 0
        }),
        d = ar[e],
        x = (0, React.useMemo)(() => {
          let e = d[0];
          return d.map((a, t) => ({
            stage: aa[t],
            count: a,
            ratio: a / e,
            fromTop: a / e * 100,
            fromPrev: 0 === t ? 100 : a / d[t - 1] * 100,
            lost: 0 === t ? 0 : d[t - 1] - a,
            dropPct: 0 === t ? 0 : (d[t - 1] - a) / d[t - 1] * 100
          }));
        }, [d]),
        _ = (0, React.useMemo)(() => {
          let e = 1;
          for (let a = 2; a < x.length; a++) x[a].dropPct > x[e].dropPct && (e = a);
          return e;
        }, [x]),
        u = x[x.length - 1].fromTop,
        h = (e, a, t) => {
          let r = s.current;
          if (!r) return;
          let l = r.getBoundingClientRect(),
            o = (i.current?.offsetWidth ?? 256) / 2,
            d = i.current?.offsetHeight ?? 76,
            x = e - l.left,
            _ = a - l.top;
          n(t), c({
            x: Math.min(Math.max(l.width - o, o), Math.max(o, x)),
            y: _ - d - 12 >= 0 ? _ - d - 12 : Math.min(_ + 20, l.height - d),
            row: t
          });
        },
        p = x[t ?? o.row],
        b = e => {
          a(e), n(null);
        };
      return <div className={e5("bg-white dark:bg-neutral-950", e6, "flex h-full min-h-[640px] w-full flex-col justify-center-safe overflow-y-auto p-8 sm:p-10")}><div className={e5("relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 shadow-[inset_0_0_0_1px_rgb(84_62_32/0.05)] dark:shadow-[inset_0_0_0_1px_rgb(255_255_255/0.05)]", "mx-auto w-full max-w-[880px] shrink-0")}><div className={e5("mx-1 mb-1 flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-5xl,22px))] border border-transparent bg-white dark:bg-neutral-950 shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] [&:has(+*)]:mb-0", "divide-y divide-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:divide-neutral-100/7", "mt-1")}><div className="flex flex-wrap items-start justify-between gap-3 px-5 py-4"><div className="min-w-0"><h2 className={e5(e3, e6)}>Signup funnel</h2><p className={e5(e9, e4, "mt-0.5 truncate")}>Self-serve activation, pricing page to paid.</p></div><div role="radiogroup" aria-label="Cohort" onKeyDown={a => {
                var t, r, l;
                let n;
                return t = at.length, r = at.indexOf(e), l = e => b(at[e]), void (!((n = "ArrowRight" === a.key || "ArrowDown" === a.key ? (r + 1) % t : "ArrowLeft" === a.key || "ArrowUp" === a.key ? (r - 1 + t) % t : "Home" === a.key ? 0 : "End" === a.key ? t - 1 : -1) < 0) && (a.preventDefault(), l(n), a.currentTarget.querySelectorAll('[role="radio"]')[n]?.focus()));
              }} className={e5("inline-flex w-fit max-w-full items-stretch gap-1 rounded-[calc(var(--rb-r-full,999px)_+_min(4px,var(--rb-r-full,999px)))] bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] p-1", "h-10", "shrink-0")}>{at.map(a => <button type="button" role="radio" aria-checked={a === e} tabIndex={a === e ? 0 : -1} onClick={() => b(a)} className="relative inline-flex min-w-0 cursor-pointer items-center justify-center gap-1.5 whitespace-nowrap [&_svg]:shrink-0 rounded-[calc(var(--rb-r-full,999px))] px-4 text-[14px]/[18px] font-bold text-neutral-900/78 dark:text-neutral-100/78 select-none transition-[background-color,color,box-shadow,outline-color,scale] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:scale-[0.96] motion-reduce:active:scale-100 hover:not-aria-checked:text-neutral-900 aria-checked:bg-white aria-checked:text-neutral-900 aria-checked:shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_2px_rgb(84_62_32/0.10),0_3px_8px_-2px_rgb(84_62_32/0.20)] disabled:cursor-not-allowed disabled:text-neutral-900/40 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:hover:not-aria-checked:text-neutral-100 dark:aria-checked:bg-[color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800))] dark:aria-checked:text-neutral-100 dark:aria-checked:shadow-[inset_0_1px_0_rgb(255_255_255/0.1),0_0_0_1px_rgb(0_0_0/0.6),0_2px_5px_-1px_rgb(0_0_0/0.6)] dark:disabled:text-neutral-100/40">{a}</button>)}</div></div><div className="px-5 py-4"><div ref={s} className="relative">{x.map((e, a) => <div>{a > 0 && <div className={e5(e7, e4, "flex h-4 items-center gap-1.5")}><span>−{e.lost.toLocaleString("en-US")} lost</span><span>{e.dropPct.toFixed(1)}% drop</span>{a === _ && <span className="text-[oklch(49%_0.1_68)] dark:text-[oklch(80%_0.13_68)]">Steepest fall</span>}</div>}<div tabIndex={0} role="button" aria-label={`${e.stage}: ${e.count.toLocaleString("en-US")} users, ${e.fromTop.toFixed(1)} percent of visitors.`} onPointerMove={e => h(e.clientX, e.clientY, a)} onPointerLeave={() => n(null)} onFocus={e => {
                    let t = e.currentTarget.getBoundingClientRect();
                    h(t.left + t.width / 2, t.top, a);
                  }} onBlur={() => n(null)} style={{
                    touchAction: "pan-y"
                  }} className={e5("focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))]", "transition-[color,background-color,border-color,box-shadow,outline-color,opacity,scale,translate] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms]", "rounded-[var(--rb-r-4xl,18px)]", t === a && "bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] dark:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)]", "-mx-2 cursor-default px-2 py-1.5")}><div className="mb-1 flex items-baseline justify-between gap-3"><span className={e5("text-[15px]/[20px] font-bold", e6, "min-w-0 truncate")}>{e.stage}</span><span className={e5(e9, e4, ae, "flex shrink-0 gap-2")}><span className={e6}>{e.count.toLocaleString("en-US")}</span><span>{e.fromTop.toFixed(1)}%</span></span></div><div className={e5("bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-100/8", e8, "h-7 w-full overflow-hidden")}><div className={e5("text-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_82%,black)] dark:text-[var(--rb-accent,oklch(81%_0.16_163))]", e8, "h-full bg-current")} style={{
                        width: `${100 * e.ratio}%`
                      }} /></div></div></div>)}<div ref={i} aria-hidden="true" style={{
                  left: o.x,
                  top: o.y
                }} className={e5("pointer-events-none absolute z-[70] flex min-w-36 max-w-64 flex-col gap-1.5 rounded-[calc(var(--rb-r-xl,12px))] bg-neutral-900 px-3.5 py-2.5 text-[13px]/[16px] font-bold tabular-nums text-white shadow-[0_0_0_1px_rgb(84_62_32/0.08),0_24px_56px_-20px_rgb(84_62_32/0.34),0_6px_16px_-8px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.65),0_24px_56px_-16px_rgb(0_0_0/0.8)] dark:bg-neutral-100 dark:text-neutral-900", "transition-[opacity,scale] duration-[260ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] starting:scale-[0.94] starting:opacity-0 motion-reduce:transition-none motion-reduce:starting:scale-100", "-translate-x-1/2", null === t ? "opacity-0" : "opacity-100")}><p className={e5(e7, "whitespace-nowrap")}>{p.stage}</p><p className="whitespace-nowrap">{p.count.toLocaleString("en-US")} users</p><p className={e5(e7, "flex gap-2 whitespace-nowrap")}><span>{p.fromPrev.toFixed(1)}% from previous</span><span>{p.fromTop.toFixed(1)}% from top</span></p></div></div></div><div className="flex items-center justify-between gap-3 px-5 py-3"><span className={e5(e9, e4)}>Visitor to paid conversion</span><span className={e5(e3, e6, ae)}>{u.toFixed(1)}%</span></div></div></div></div>;
    },
    "analytics-9": function () {
      let [e, a] = (0, React.useState)(ab[0]),
        [t, n] = (0, React.useState)(null),
        [s, i] = (0, React.useState)({
          col: 25,
          row: 6
        }),
        [c, d] = function () {
          let e = (0, React.useRef)(null),
            [a, t] = (0, React.useState)({
              width: 0,
              height: 0
            });
          return (0, React.useEffect)(() => {
            let a = e.current,
              r = a?.ownerDocument.defaultView;
            if (!a || !r?.ResizeObserver) return;
            let l = new r.ResizeObserver(([e]) => {
              let a = e.contentRect;
              t({
                width: a.width,
                height: a.height
              });
            });
            return l.observe(a), () => l.disconnect();
          }, []), [e, a];
        }(),
        x = (0, React.useMemo)(() => Array.from({
          length: 182
        }, (a, t) => e.build(t)), [e]),
        _ = (0, React.useMemo)(() => {
          let a = Math.max(...x, 1),
            t = x.reduce((e, a) => e + a, 0),
            r = 0;
          for (let e = 1; e < 182; e++) x[e] > x[r] && (r = e);
          let l = 0,
            n = "incidents" === e.id;
          for (let e = 181; e >= 0; e--) {
            let a = x[e] > 0;
            if (n ? a : !a) break;
            l++;
          }
          return {
            max: a,
            total: t,
            peakDay: r,
            streak: l,
            incidentMode: n
          };
        }, [x, e]),
        u = (0, React.useMemo)(() => {
          let e = [],
            a = -1,
            t = -3;
          for (let r = 0; r < 26; r++) {
            let l = ap(7 * r).getUTCMonth();
            l !== a && r - t >= 3 && (e.push({
              col: r,
              name: a_[l]
            }), t = r), a = l;
          }
          return e;
        }, []),
        h = d.width,
        p = h > 0 ? Math.floor((h - 30 - 75) / 26) : 0,
        b = p + 3,
        m = 18 + 7 * p + 18,
        k = (e, a) => {
          let t = ap(7 * e + a);
          return `${au[a]}, ${t.getUTCDate()} ${a_[t.getUTCMonth()]}`;
        },
        f = null === t ? 0 : x[7 * t.col + t.row],
        g = 18 + s.row * b - 60,
        v = g >= 0 ? g : 18 + s.row * b + p + 6,
        w = k(Math.floor(_.peakDay / 7), _.peakDay % 7),
        y = null === t ? `${e.label} heatmap, ${_.total.toLocaleString("en-US")} ${e.noun} over the last 26 weeks. Use arrow keys to inspect a day.` : `${0 === f ? `No ${e.noun}` : `${f} ${1 === f ? e.noun.replace(/s$/, "") : e.noun}`} on ${k(t.col, t.row)}`,
        j = e => {
          a(e), n(null);
        };
      return <div className={an("bg-white dark:bg-neutral-950", as, "flex h-full min-h-[560px] w-full flex-col justify-center-safe overflow-y-auto p-8 sm:p-10")}><div className={an("relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 shadow-[inset_0_0_0_1px_rgb(84_62_32/0.05)] dark:shadow-[inset_0_0_0_1px_rgb(255_255_255/0.05)]", "mx-auto w-full max-w-[880px] shrink-0")}><div className={an("mx-1 mb-1 flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-5xl,22px))] border border-transparent bg-white dark:bg-neutral-950 shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] [&:has(+*)]:mb-0", "mt-1")}><div className="px-5 py-4"><div className="flex flex-wrap items-start justify-between gap-3"><div className="min-w-0"><div className={an("text-[14px]/[20px] font-bold text-neutral-900/78 dark:text-neutral-100/78", "flex items-center gap-1.5")}><__mod_22728.n icon={__mod_33126.A} size={16} strokeWidth={2} aria-hidden="true" className="shrink-0" />{e.label}</div><p className={an("text-[44px]/[48px] font-extrabold tracking-[-0.025em] tabular-nums", as, "mt-1")}>{_.total.toLocaleString("en-US")}</p><p className={an("text-[14px]/[20px] font-medium text-neutral-900/62 dark:text-neutral-100/62", "mt-1 flex min-w-0 gap-2 truncate")}><span className="min-w-0 truncate">Busiest {w} ({x[_.peakDay].toLocaleString("en-US")})</span><span className="shrink-0"><span className="text-right tabular-nums">{_.streak}</span>{_.incidentMode ? "-day incident-free streak" : "-day active streak"}</span></p></div><div role="radiogroup" aria-label="Metric" onKeyDown={a => {
                  var t, r, l;
                  let n;
                  return t = ab.length, r = ab.findIndex(a => a.id === e.id), l = e => j(ab[e]), void (!((n = "ArrowRight" === a.key || "ArrowDown" === a.key ? (r + 1) % t : "ArrowLeft" === a.key || "ArrowUp" === a.key ? (r - 1 + t) % t : "Home" === a.key ? 0 : "End" === a.key ? t - 1 : -1) < 0) && (a.preventDefault(), l(n), a.currentTarget.querySelectorAll('[role="radio"]')[n]?.focus()));
                }} className={an("inline-flex w-fit max-w-full items-stretch gap-1 rounded-[calc(var(--rb-r-full,999px)_+_min(4px,var(--rb-r-full,999px)))] bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] p-1", "h-10", "shrink-0")}>{ab.map(a => <button type="button" role="radio" aria-checked={a.id === e.id} tabIndex={a.id === e.id ? 0 : -1} onClick={() => j(a)} className="relative inline-flex min-w-0 cursor-pointer items-center justify-center gap-1.5 whitespace-nowrap [&_svg]:shrink-0 rounded-[calc(var(--rb-r-full,999px))] px-4 text-[14px]/[18px] font-bold text-neutral-900/78 dark:text-neutral-100/78 select-none transition-[background-color,color,box-shadow,outline-color,scale] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:scale-[0.96] motion-reduce:active:scale-100 hover:not-aria-checked:text-neutral-900 aria-checked:bg-white aria-checked:text-neutral-900 aria-checked:shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_2px_rgb(84_62_32/0.10),0_3px_8px_-2px_rgb(84_62_32/0.20)] disabled:cursor-not-allowed disabled:text-neutral-900/40 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:hover:not-aria-checked:text-neutral-100 dark:aria-checked:bg-[color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800))] dark:aria-checked:text-neutral-100 dark:aria-checked:shadow-[inset_0_1px_0_rgb(255_255_255/0.1),0_0_0_1px_rgb(0_0_0/0.6),0_2px_5px_-1px_rgb(0_0_0/0.6)] dark:disabled:text-neutral-100/40">{a.label}</button>)}</div></div><div ref={c} role="img" tabIndex={0} aria-label={y} onPointerMove={e => ((e, a) => {
                let t = c.current;
                if (!t || p <= 0) return;
                let r = t.getBoundingClientRect(),
                  l = ad(Math.floor((e - r.left - 30) / b), 0, 25),
                  s = ad(Math.floor((a - r.top - 18) / b), 0, 6);
                n({
                  col: l,
                  row: s
                }), i({
                  col: l,
                  row: s
                });
              })(e.clientX, e.clientY)} onPointerLeave={() => n(null)} onBlur={() => n(null)} onKeyDown={e => {
                let a = t ?? {
                    col: 25,
                    row: 6
                  },
                  r = null;
                if ("ArrowLeft" === e.key) r = {
                  ...a,
                  col: a.col - 1
                };else if ("ArrowRight" === e.key) r = {
                  ...a,
                  col: a.col + 1
                };else if ("ArrowUp" === e.key) r = {
                  ...a,
                  row: a.row - 1
                };else if ("ArrowDown" === e.key) r = {
                  ...a,
                  row: a.row + 1
                };else if ("Home" === e.key) r = {
                  col: 0,
                  row: a.row
                };else if ("End" === e.key) r = {
                  col: 25,
                  row: a.row
                };else if ("Escape" === e.key) return void n(null);
                if (!r) return;
                e.preventDefault();
                let l = {
                  col: ad(r.col, 0, 25),
                  row: ad(r.row, 0, 6)
                };
                n(l), i(l);
              }} style={{
                height: m,
                touchAction: "pan-y"
              }} className={an("focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))]", "relative mt-4 cursor-pointer")}>{h > 0 && p > 0 && <svg width={h} height={m} className="overflow-visible">{u.map(e => <text x={30 + e.col * b} y={10} className={ac}>{e.name}</text>)}{[0, 2, 4].map(e => <text x={0} y={18 + e * b + p / 2} dy={3} className={ac}>{au[e]}</text>)}{x.map((e, a) => {
                    var t;
                    let l = Math.floor(a / 7),
                      n = (t = _.max, e <= 0 ? 0 : ad(1 + Math.round(e / (t || 1) * 3), 1, 4)),
                      s = _.incidentMode && 4 === n;
                    return <rect x={30 + l * b} y={18 + a % 7 * b} width={p} height={p} rx={2} fill="currentColor" className={s ? ai : am[n]} />;
                  })}{null !== t && <rect x={30 + t.col * b - .5} y={18 + t.row * b - .5} width={p + 1} height={p + 1} rx={2.5} fill="none" strokeWidth={1} className="stroke-neutral-900/40 dark:stroke-neutral-100/45" />}</svg>}{h > 0 && p > 0 && <div aria-hidden="true" style={{
                  left: ad(30 + s.col * b + p / 2, 72, Math.max(h - 72, 72)),
                  top: v
                }} className={an("pointer-events-none absolute z-[70] flex min-w-36 max-w-64 flex-col gap-1.5 rounded-[calc(var(--rb-r-xl,12px))] bg-neutral-900 px-3.5 py-2.5 text-[13px]/[16px] font-bold tabular-nums text-white shadow-[0_0_0_1px_rgb(84_62_32/0.08),0_24px_56px_-20px_rgb(84_62_32/0.34),0_6px_16px_-8px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.65),0_24px_56px_-16px_rgb(0_0_0/0.8)] dark:bg-neutral-100 dark:text-neutral-900", "transition-[opacity,scale] duration-[260ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] starting:scale-[0.94] starting:opacity-0 motion-reduce:transition-none motion-reduce:starting:scale-100", "-translate-x-1/2", null === t ? "opacity-0" : "opacity-100")}><p className="whitespace-nowrap">{0 === x[7 * s.col + s.row] ? `No ${e.noun}` : `${x[7 * s.col + s.row].toLocaleString("en-US")} ${1 === x[7 * s.col + s.row] ? e.noun.replace(/s$/, "") : e.noun}`}</p><p className={an(ao, "whitespace-nowrap")}>{k(s.col, s.row)}</p></div>}</div><div className={an(ao, "text-neutral-900/62 dark:text-neutral-100/62", "mt-3 flex items-center justify-end gap-1.5")}><span>Less</span>{am.map((e, a) => <svg aria-hidden="true" width={10} height={10} viewBox="0 0 10 10" className="shrink-0"><rect width={10} height={10} rx={2} fill="currentColor" className={_.incidentMode && a === am.length - 1 ? ai : e} /></svg>)}<span>More</span></div></div></div></div></div>;
    },
    "analytics-10": function () {
      let e,
        [a, t] = (0, React.useState)("Q1"),
        [n, s] = (0, React.useState)(null),
        [i, o] = (0, React.useState)({
          x: 0,
          y: 0,
          ring: 0
        }),
        c = (0, React.useRef)(null),
        d = (0, React.useRef)(null),
        x = aN[a],
        _ = (0, React.useMemo)(() => x.map(e => ({
          goal: e,
          pct: e.actual / e.target
        })), [x]),
        u = _.reduce((e, a) => e + a.pct, 0) / _.length * 100,
        h = (e, a, t) => {
          let r = c.current;
          if (!r) return;
          let l = r.getBoundingClientRect(),
            n = (d.current?.offsetWidth ?? 144) / 2,
            i = d.current?.offsetHeight ?? 76,
            x = e - l.left,
            _ = a - l.top;
          s(t), o({
            x: Math.min(Math.max(l.width - n, n), Math.max(n, x)),
            y: _ - i - 12 >= 0 ? _ - i - 12 : Math.min(_ + 20, l.height - i),
            ring: t
          });
        },
        p = _[n ?? i.ring].goal;
      return <div className={ak("bg-white dark:bg-neutral-950", af, "flex h-full min-h-[560px] w-full flex-col justify-center-safe overflow-y-auto p-8 sm:p-10")}><div className={ak("relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 shadow-[inset_0_0_0_1px_rgb(84_62_32/0.05)] dark:shadow-[inset_0_0_0_1px_rgb(255_255_255/0.05)]", "mx-auto w-full max-w-[880px] shrink-0")}><div className={ak("mx-1 mb-1 flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-5xl,22px))] border border-transparent bg-white dark:bg-neutral-950 shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] [&:has(+*)]:mb-0", "divide-y divide-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:divide-neutral-100/7", "mt-1")}><div className="flex flex-wrap items-start justify-between gap-3 px-5 py-4"><div className="min-w-0"><h2 className={ak(av, af)}>Quarterly goals</h2><p className={ak(aw, ag, "mt-0.5 truncate")}>Attainment against plan, {aM[a]} days left in {a}.</p></div><div role="radiogroup" aria-label="Quarter" onKeyDown={aS} className={ak("inline-flex w-fit max-w-full items-stretch gap-1 rounded-[calc(var(--rb-r-full,999px)_+_min(4px,var(--rb-r-full,999px)))] bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] p-1", "h-10", "shrink-0")}>{aj.map(e => <button type="button" role="radio" aria-checked={e === a} tabIndex={e === a ? 0 : -1} onClick={() => {
                  t(e), s(null);
                }} className="relative inline-flex min-w-0 cursor-pointer items-center justify-center gap-1.5 whitespace-nowrap [&_svg]:shrink-0 rounded-[calc(var(--rb-r-full,999px))] px-4 text-[14px]/[18px] font-bold text-neutral-900/78 dark:text-neutral-100/78 select-none transition-[background-color,color,box-shadow,outline-color,scale] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:scale-[0.96] motion-reduce:active:scale-100 hover:not-aria-checked:text-neutral-900 aria-checked:bg-white aria-checked:text-neutral-900 aria-checked:shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_2px_rgb(84_62_32/0.10),0_3px_8px_-2px_rgb(84_62_32/0.20)] disabled:cursor-not-allowed disabled:text-neutral-900/40 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:hover:not-aria-checked:text-neutral-100 dark:aria-checked:bg-[color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800))] dark:aria-checked:text-neutral-100 dark:aria-checked:shadow-[inset_0_1px_0_rgb(255_255_255/0.1),0_0_0_1px_rgb(0_0_0/0.6),0_2px_5px_-1px_rgb(0_0_0/0.6)] dark:disabled:text-neutral-100/40">{e}</button>)}</div></div><div className="px-5 py-8"><div ref={c} className="relative grid grid-cols-1 gap-6 sm:grid-cols-3">{_.map((e, a) => {
                  let t = n === a ? 13 : 10,
                    l = 82 - t,
                    i = (0, __mod_44439.A)().innerRadius(l).outerRadius(82).startAngle(0).endAngle(2 * Math.PI)({}) ?? "",
                    o = (0, __mod_44439.A)().innerRadius(l).outerRadius(82).cornerRadius(t / 2).startAngle(0).endAngle(2 * Math.PI * e.pct)({}) ?? "";
                  return <div tabIndex={0} role="button" aria-label={`${e.goal.label}: ${(100 * e.pct).toFixed(1)} percent of target. ${aA(e.goal.kind, e.goal.actual)} of ${aA(e.goal.kind, e.goal.target)}.`} onPointerMove={e => h(e.clientX, e.clientY, a)} onPointerLeave={() => s(null)} onFocus={e => {
                    let t = e.currentTarget.getBoundingClientRect();
                    h(t.left + t.width / 2, t.top + t.height / 2, a);
                  }} onBlur={() => s(null)} className={ak("focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))]", "transition-[color,background-color,border-color,box-shadow,outline-color,opacity,scale,translate] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms]", "flex flex-col items-center px-2 py-2")}><div className="relative" style={{
                      width: 168,
                      height: 168
                    }}><svg width={168} height={168} viewBox="0 0 168 168" className="overflow-visible" aria-hidden="true"><g transform="translate(84 84)"><path d={i} className="fill-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] dark:fill-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_16%,transparent)]" /><path d={o} className="fill-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_82%,black)] dark:fill-[var(--rb-accent,oklch(81%_0.16_163))]" /></g></svg><div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center"><span className={ak("text-[34px]/[40px] font-extrabold tracking-[-0.02em] tabular-nums", af)}>{(100 * e.pct).toFixed(0)}%</span><span className={ak(ay, ag, "mt-0.5 max-w-[6.5rem] truncate text-center")}>of target</span></div></div><p className={ak("text-[15px]/[20px] font-bold", af, "mt-3")}>{e.goal.label}</p><p className={ak(aw, ag, "mt-0.5 tabular-nums")}>{aA(e.goal.kind, e.goal.actual)} of {aA(e.goal.kind, e.goal.target)}</p></div>;
                })}<div ref={d} aria-hidden="true" style={{
                  left: i.x,
                  top: i.y
                }} className={ak("pointer-events-none absolute z-[70] flex min-w-36 max-w-64 flex-col gap-1.5 rounded-[calc(var(--rb-r-xl,12px))] bg-neutral-900 px-3.5 py-2.5 text-[13px]/[16px] font-bold tabular-nums text-white shadow-[0_0_0_1px_rgb(84_62_32/0.08),0_24px_56px_-20px_rgb(84_62_32/0.34),0_6px_16px_-8px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.65),0_24px_56px_-16px_rgb(0_0_0/0.8)] dark:bg-neutral-100 dark:text-neutral-900", "transition-[opacity,scale] duration-[260ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] starting:scale-[0.94] starting:opacity-0 motion-reduce:transition-none motion-reduce:starting:scale-100", "-translate-x-1/2", null === n ? "opacity-0" : "opacity-100")}><p className={ak(ay, "whitespace-nowrap")}>{p.label}</p><p className="whitespace-nowrap">{(e = p.target - p.actual) <= 0 ? "money" === p.kind ? `$${Math.abs(e).toFixed(1)}M over target` : `${Math.abs(e).toFixed(1)} pts over target` : "money" === p.kind ? `$${e.toFixed(1)}M to target` : `${e.toFixed(1)} pts to target`}</p><p className={ak(ay, "whitespace-nowrap")}>{aM[a]} days left in {a}</p></div></div></div><div className="flex items-center justify-between gap-3 px-5 py-3"><span className={ak(aw, ag)}>Blended attainment</span><span className={ak(av, af, "tabular-nums")}>{u.toFixed(1)}%</span></div></div></div></div>;
    },
    "analytics-11": function () {
      let [e, a] = (0, React.useState)("users"),
        [t, n] = (0, React.useState)(!1),
        [s, i] = (0, React.useState)(null),
        [o, c] = (0, React.useState)(null),
        d = (0, React.useRef)(null),
        {
          ref: x,
          edges: _,
          onScroll: u
        } = function () {
          let e = (0, React.useRef)(null),
            [a, t] = (0, React.useState)({
              start: !1,
              end: !1
            }),
            r = (0, React.useCallback)(() => {
              let a = e.current;
              if (!a) return;
              let {
                scrollLeft: r,
                scrollWidth: l,
                clientWidth: n
              } = a;
              t({
                start: r > 1,
                end: Math.ceil(r + n) < l - 1
              });
            }, []);
          return (0, React.useEffect)(() => {
            r();
            let a = e.current,
              t = a?.ownerDocument.defaultView;
            if (!a || !t?.ResizeObserver) return;
            let l = new t.ResizeObserver(r);
            return l.observe(a), () => l.disconnect();
          }, [r]), {
            ref: e,
            edges: a,
            onScroll: r
          };
        }(),
        h = aV.find(a => a.id === e),
        p = (0, React.useMemo)(() => Array.from({
          length: 9
        }, (a, t) => {
          let r = Array.from({
            length: 8
          }, (e, a) => a).filter(e => t < aI(e));
          return {
            pct: Math.round(r.reduce((a, r) => a + aX(e, r, t), 0) / r.length),
            abs: Math.round(r.reduce((a, r) => a + aY(e, r, aX(e, r, t)), 0) / r.length)
          };
        }), [e]),
        b = (0, React.useMemo)(() => {
          let a = 0;
          for (let t = 1; t < 8; t++) !(3 >= aI(t)) && aX(e, t, 3) > aX(e, a, 3) && (a = t);
          return a;
        }, [e]);
      (0, React.useEffect)(() => {
        if (!s) return;
        let e = d.current,
          a = x.current;
        if (!e || !a) return;
        let t = a.querySelector(`[data-cell="${s.row}-${s.col}"]`);
        if (!t) return;
        let r = t.getBoundingClientRect(),
          l = e.getBoundingClientRect(),
          n = r.top - l.top - 82;
        c({
          x: r.left - l.left + r.width / 2,
          top: n >= 0 ? n : r.bottom - l.top + 6,
          max: Math.max(l.width - 92, 92)
        });
      }, [s, e, t, x]);
      let m = (a, r) => t ? "revenue" === e ? `$${aO(r)}` : aO(r) : `${a}%`,
        k = (e, a) => {
          let t = aP(e, 0, 7),
            r = aP(a, 0, aI(t) - 1);
          i({
            row: t,
            col: r
          });
        },
        f = a$("bg-white dark:bg-neutral-950", "sticky left-0 z-10"),
        g = null !== s ? {
          cohort: aH(s.row),
          offset: s.col,
          pct: aX(e, s.row, s.col),
          abs: aY(e, s.row, aX(e, s.row, s.col))
        } : null;
      return <div className={a$("bg-white dark:bg-neutral-950", aL, "flex h-full min-h-[640px] w-full flex-col justify-center-safe overflow-y-auto p-6 sm:p-8")}><div className={a$("relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 shadow-[inset_0_0_0_1px_rgb(84_62_32/0.05)] dark:shadow-[inset_0_0_0_1px_rgb(255_255_255/0.05)]", "mx-auto w-full max-w-[1100px] shrink-0")}><div className={a$("mx-1 mb-1 flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-5xl,22px))] border border-transparent bg-white dark:bg-neutral-950 shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] [&:has(+*)]:mb-0", "divide-y divide-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:divide-neutral-100/7", "mt-1")}><div className="px-3 py-3"><div className="flex flex-wrap items-start justify-between gap-3"><div className="min-w-0"><h2 className={a$("text-[17px]/[22px] font-extrabold", aL)}>Cohort retention</h2></div><div className="flex min-w-0 flex-wrap items-center gap-2"><div role="radiogroup" aria-label="Metric" onKeyDown={a1} className={a$(aB, aU)}>{aV.map(t => <button type="button" role="radio" aria-checked={t.id === e} tabIndex={t.id === e ? 0 : -1} onClick={() => {
                      a(t.id), i(null);
                    }} className={aW}>{t.label}</button>)}</div><div role="radiogroup" aria-label="Values" onKeyDown={a1} className={a$(aB, aU)}>{aG.map(e => <button type="button" role="radio" aria-checked={e.id === t} tabIndex={e.id === t ? 0 : -1} onClick={() => n(e.id)} className={aW}>{e.label}</button>)}</div></div></div><div className={a$(aE, aD, "mt-1 flex flex-wrap gap-x-6 gap-y-1")}><span>Month 3 average <span className={a$(aL, "tabular-nums")}>{p[3].pct}%</span></span><span>Best cohort <span className={aL}>{aH(b)}</span> <span className="tabular-nums">({aX(e, b, 3)}% at month 3)</span></span></div></div><div className="p-2"><div ref={d} className="relative overflow-hidden"><div ref={x} role="img" tabIndex={0} aria-label={g ? `${g.cohort}, month ${g.offset}: ${g.pct}% retained, ${g.abs.toLocaleString("en-US")} ${"revenue" === e ? "dollars" : "users"}` : `${h.label} matrix, 8 cohorts by 9 monthly offsets. Arrow keys inspect a cell.`} onScroll={u} onPointerLeave={() => i(null)} onKeyDown={e => {
                  let a = s ?? {
                    row: 0,
                    col: 0
                  };
                  "Escape" === e.key ? i(null) : ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(e.key) && (e.preventDefault(), "ArrowLeft" === e.key ? k(a.row, a.col - 1) : "ArrowRight" === e.key ? k(a.row, a.col + 1) : "ArrowUp" === e.key ? k(a.row - 1, a.col) : "ArrowDown" === e.key ? k(a.row + 1, a.col) : "Home" === e.key ? k(a.row, 0) : "End" === e.key && k(a.row, aI(a.row) - 1));
                }} style={{
                  touchAction: "pan-y"
                }} className={a$("focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))]", "overflow-x-auto")}><div className="grid gap-1 pt-1" style={{
                    gridTemplateColumns: "148px repeat(9, minmax(62px, 1fr))",
                    minWidth: 742
                  }}><div className={a$(f, aF, aD, "flex items-end px-1 pb-1")}>Cohort</div>{Array.from({
                      length: 9
                    }, (e, a) => <div className={a$(aF, aD, "flex items-end justify-center pb-1")}>Month {a}</div>)}{Array.from({
                      length: 8
                    }, (a, t) => <><div className={a$(f, "flex h-9 flex-col justify-center px-1")}><span className={a$(aE, aL, "truncate")}>{aH(t)}</span><span className={a$(aF, aD, "truncate")}>{aK[t].toLocaleString("en-US")} signups</span></div>{Array.from({
                        length: 9
                      }, (a, l) => {
                        if (l >= aI(t)) return <div className="h-9" />;
                        let n = aX(e, t, l),
                          o = aY(e, t, n),
                          c = a0(n, h.lo, h.hi),
                          d = null !== s && (s.row === t || s.col === l),
                          x = null !== s && s.row === t && s.col === l;
                        return <div data-cell={`${t}-${l}`} onPointerEnter={() => i({
                          row: t,
                          col: l
                        })} className={a$(aE, c.text, "relative flex h-9 items-center justify-center tabular-nums")}><span aria-hidden="true" className={a$(aC, aR, "absolute inset-0 bg-current")} style={{
                            opacity: c.alpha
                          }} /><span className="relative">{m(n, o)}</span>{d && !x && <span aria-hidden="true" className={a$("bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] dark:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)]", aR, "absolute inset-0")} />}{x && <span aria-hidden="true" className={a$("border-2 border-neutral-900/30 dark:border-neutral-100/34", aR, "absolute inset-0")} />}</div>;
                      })}</>)}<div className={a$(f, "text-[15px]/[20px] font-bold", aL, "flex h-8 items-center px-1")}>Average</div>{p.map((e, a) => {
                      let t = a0(e.pct, h.lo, h.hi);
                      return <div className={a$(aE, t.text, "relative flex h-8 items-center justify-center tabular-nums")}><span aria-hidden="true" className={a$(aC, aR, "absolute inset-0 bg-current")} style={{
                          opacity: t.alpha
                        }} /><span className="relative">{m(e.pct, e.abs)}</span></div>;
                    })}</div></div><div aria-hidden="true" className={a$("bg-linear-to-r from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-y-0 left-0 w-8", _.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={a$("bg-linear-to-l from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-y-0 right-0 w-8", _.end ? "opacity-100" : "opacity-0")} />{g && o && <div aria-hidden="true" style={{
                  left: aP(o.x, 92, o.max),
                  top: o.top
                }} className={a$("pointer-events-none absolute z-[70] flex min-w-36 max-w-64 flex-col gap-1.5 rounded-[calc(var(--rb-r-xl,12px))] bg-neutral-900 px-3.5 py-2.5 text-[13px]/[16px] font-bold tabular-nums text-white shadow-[0_0_0_1px_rgb(84_62_32/0.08),0_24px_56px_-20px_rgb(84_62_32/0.34),0_6px_16px_-8px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.65),0_24px_56px_-16px_rgb(0_0_0/0.8)] dark:bg-neutral-100 dark:text-neutral-900", "transition-[opacity,scale] duration-[260ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] starting:scale-[0.94] starting:opacity-0 motion-reduce:transition-none motion-reduce:starting:scale-100", "-translate-x-1/2")}><p className={a$(aF, "flex gap-2 whitespace-nowrap")}><span>{g.cohort}</span><span>Month {g.offset}</span></p><p className="whitespace-nowrap">{g.pct}% retained</p><p className={a$(aF, "whitespace-nowrap")}>{"revenue" === e ? `≈ $${g.abs.toLocaleString("en-US")} retained` : `≈ ${g.abs.toLocaleString("en-US")} users`}</p></div>}</div></div></div></div></div>;
    },
    "analytics-12": function () {
      let [e, a] = function () {
          let e = (0, React.useRef)(null),
            [a, t] = (0, React.useState)({
              width: 0,
              height: 0
            });
          return (0, React.useEffect)(() => {
            let a = e.current,
              r = a?.ownerDocument.defaultView;
            if (!a || !r?.ResizeObserver) return;
            let l = new r.ResizeObserver(([e]) => {
              let a = e.contentRect;
              t({
                width: a.width,
                height: a.height
              });
            });
            return l.observe(a), () => l.disconnect();
          }, []), [e, a];
        }(),
        [t, n] = (0, React.useState)(null),
        [o, c] = (0, React.useState)(tt.length - 1),
        [d, x] = (0, React.useState)("Stacked"),
        [_, u] = (0, React.useState)({
          hot: !0,
          warm: !0,
          cold: !0,
          archive: !0
        }),
        h = a.width,
        p = Math.max(h - 34 - 1, 1),
        b = 230,
        m = tt.length,
        k = "100%" === d,
        f = to.filter(e => _[e]),
        g = (0, React.useMemo)(() => (0, __mod_70255.A)().keys(f).order(__mod_50098.A).offset(k ? __mod_62859.A : __mod_34177.A)(ti), [f, k]),
        v = (0, React.useMemo)(() => {
          if (k) return 1;
          let e = 0;
          for (let a of g) for (let t of a) e = Math.max(e, t[1]);
          return e;
        }, [g, k]),
        {
          top: w,
          ticks: y
        } = (0, React.useMemo)(() => k ? {
          top: 1,
          ticks: [0, .25, .5, .75, 1]
        } : function (e, a = 4) {
          if (!(e > 0)) return {
            top: 1,
            ticks: [0, 1]
          };
          let t = e / a,
            r = 10 ** Math.floor(Math.log10(t)),
            l = t / r,
            n = (l <= 1 ? 1 : l <= 2 ? 2 : l <= 2.5 ? 2.5 : l <= 5 ? 5 : 10) * r,
            s = Math.ceil(e / n) * n,
            i = [];
          for (let e = 0; e <= s + n / 1e3; e += n) i.push(e);
          return {
            top: s,
            ticks: i
          };
        }(v), [k, v]),
        j = (0, React.useCallback)(e => 34 + e / (m - 1) * p, [p, m]),
        N = (0, React.useCallback)(e => 10 + b - e / w * b, [b, w]),
        M = Math.ceil(m / 7),
        A = (0, React.useMemo)(() => ti.map(e => e.hot + e.warm + e.cold + e.archive), []),
        S = (0, React.useMemo)(() => ti.map(e => f.reduce((a, t) => a + e[t], 0)), [f]),
        $ = A[m - 1],
        R = (A[m - 1] - A[m - 2]) / A[m - 2] * 100,
        L = tr[m - 1] / $ * 100,
        D = S[o];
      return <div className={a8("bg-white dark:bg-neutral-950", a3, "flex h-full min-h-[640px] w-full flex-col justify-center-safe overflow-y-auto p-8 sm:p-10")}><div className={a8("relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 shadow-[inset_0_0_0_1px_rgb(84_62_32/0.05)] dark:shadow-[inset_0_0_0_1px_rgb(255_255_255/0.05)]", "mx-auto w-full max-w-[880px] shrink-0")}><div className={a8("mx-1 mb-1 flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-5xl,22px))] border border-transparent bg-white dark:bg-neutral-950 shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] [&:has(+*)]:mb-0", "divide-y divide-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:divide-neutral-100/7", "mt-1")}><div className="px-4 py-4"><div className="flex flex-wrap items-start justify-between gap-3"><div className="min-w-0"><h2 className={a8("text-[17px]/[22px] font-extrabold", a3)}>Storage by tier</h2><p className={a8("text-[14px]/[20px] font-medium", "text-neutral-900/62 dark:text-neutral-100/62", "mt-0.5 truncate")}>{$.toLocaleString("en-US")} TB stored across four tiers</p></div><div role="radiogroup" aria-label="Chart mode" onKeyDown={t_} className={a8("inline-flex w-fit max-w-full items-stretch gap-1 rounded-[calc(var(--rb-r-full,999px)_+_min(4px,var(--rb-r-full,999px)))] bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] p-1", "h-10", "shrink-0")}>{tx.map(e => <button type="button" role="radio" aria-checked={e === d} tabIndex={e === d ? 0 : -1} onClick={() => x(e)} className="relative inline-flex min-w-0 cursor-pointer items-center justify-center gap-1.5 whitespace-nowrap [&_svg]:shrink-0 rounded-[calc(var(--rb-r-full,999px))] px-4 text-[14px]/[18px] font-bold text-neutral-900/78 dark:text-neutral-100/78 select-none transition-[background-color,color,box-shadow,outline-color,scale] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:scale-[0.96] motion-reduce:active:scale-100 hover:not-aria-checked:text-neutral-900 aria-checked:bg-white aria-checked:text-neutral-900 aria-checked:shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_2px_rgb(84_62_32/0.10),0_3px_8px_-2px_rgb(84_62_32/0.20)] disabled:cursor-not-allowed disabled:text-neutral-900/40 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:hover:not-aria-checked:text-neutral-100 dark:aria-checked:bg-[color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800))] dark:aria-checked:text-neutral-100 dark:aria-checked:shadow-[inset_0_1px_0_rgb(255_255_255/0.1),0_0_0_1px_rgb(0_0_0/0.6),0_2px_5px_-1px_rgb(0_0_0/0.6)] dark:disabled:text-neutral-100/40">{e}</button>)}</div></div><div ref={e} role="img" tabIndex={0} aria-label={`Storage composition by tier across 12 months. Latest total ${$.toLocaleString("en-US")} terabytes.`} onPointerMove={a => (a => {
                let t = e.current;
                if (!t) return;
                let r = t.getBoundingClientRect(),
                  l = p / (m - 1),
                  s = ta(Math.round((a - r.left - 34) / l), 0, m - 1);
                n(s), c(s);
              })(a.clientX)} onPointerLeave={() => n(null)} onBlur={() => n(null)} onKeyDown={e => {
                if ("ArrowLeft" === e.key || "ArrowRight" === e.key) {
                  e.preventDefault();
                  let a = ta((t ?? m - 1) + ("ArrowLeft" === e.key ? -1 : 1), 0, m - 1);
                  n(a), c(a);
                }
                "Home" === e.key && (n(0), c(0)), "End" === e.key && (n(m - 1), c(m - 1)), "Escape" === e.key && n(null);
              }} style={{
                height: 260,
                touchAction: "pan-y"
              }} className={a8("focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))]", "relative mt-4 cursor-crosshair")}>{h > 0 && <svg width={h} height={260} className="overflow-visible">{y.map(e => <g><line x1={34} x2={h - 1} y1={N(e)} y2={N(e)} shapeRendering="crispEdges" className={0 === e ? "stroke-neutral-900/12 dark:stroke-neutral-100/14" : "stroke-neutral-900/6 dark:stroke-neutral-100/8"} strokeWidth={1} /><text x={0} y={N(e)} dy={-4} className={a7}>{k ? `${Math.round(100 * e)}%` : Math.abs(e) >= 1e6 ? `${(e / 1e6).toFixed(Math.abs(e) >= 1e7 ? 0 : 1)}M` : Math.abs(e) >= 1e3 ? `${(e / 1e3).toFixed(Math.abs(e) >= 1e4 ? 0 : 1)}k` : `${e}`}</text></g>)}{tt.map((e, a) => a % M == 0 ? <text x={j(a)} y={256} textAnchor={0 === a ? "start" : "middle"} className={a7}>{e}</text> : null)}<g>{g.map(e => {
                      let a = e.key,
                        t = tc[a],
                        l = (0, __mod_40144.A)().x((e, a) => j(a)).y0(e => N(e[0])).y1(e => N(e[1])).curve(__mod_4670.G)(e) ?? "";
                      return <path d={l} fill="currentColor" className={t.fill} />;
                    })}</g>{null !== t && <line x1={j(t)} x2={j(t)} y1={10} y2={10 + b} className="stroke-neutral-900/40 dark:stroke-neutral-100/45" strokeWidth={1} shapeRendering="crispEdges" />}</svg>}{h > 0 && <div aria-hidden="true" style={{
                  left: ta(j(o), 96, Math.max(h - 96, 96)),
                  top: 4
                }} className={a8("pointer-events-none absolute z-[70] flex min-w-36 max-w-64 flex-col gap-1.5 rounded-[calc(var(--rb-r-xl,12px))] bg-neutral-900 px-3.5 py-2.5 text-[13px]/[16px] font-bold tabular-nums text-white shadow-[0_0_0_1px_rgb(84_62_32/0.08),0_24px_56px_-20px_rgb(84_62_32/0.34),0_6px_16px_-8px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.65),0_24px_56px_-16px_rgb(0_0_0/0.8)] dark:bg-neutral-100 dark:text-neutral-900", "transition-[opacity,scale] duration-[260ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] starting:scale-[0.94] starting:opacity-0 motion-reduce:transition-none motion-reduce:starting:scale-100", "-translate-x-1/2", null === t ? "opacity-0" : "opacity-100")}><p className={a8(a9, "whitespace-nowrap")}>{tt[o]}</p><div className="space-y-0.5">{[...to].reverse().filter(e => _[e]).map(e => {
                      let a = ti[o][e],
                        t = D > 0 ? a / D * 100 : 0;
                      return <div className="flex items-center justify-between gap-4"><span className={a8(a9, "flex items-center gap-1.5 whitespace-nowrap")}><td tier={e} inverse={!0} />{tc[e].label}</span><span className="whitespace-nowrap">{a.toLocaleString("en-US")} TB<span className={a8(a9, "ml-1")}>{t.toFixed(1)}%</span></span></div>;
                    })}<div className="flex items-center justify-between gap-4 pt-1"><span className={a8(a9, "whitespace-nowrap")}>Total</span><span className="whitespace-nowrap">{D.toLocaleString("en-US")} TB</span></div></div></div>}</div><div className="mt-3 flex flex-wrap items-center gap-1">{[...to].reverse().map(e => {
                  let a = _[e];
                  return <button type="button" aria-pressed={a} onClick={() => u(a => {
                    let t = {
                      ...a,
                      [e]: !a[e]
                    };
                    return Object.values(t).some(Boolean) ? t : a;
                  })} className="flex h-8 min-w-0 cursor-pointer items-center gap-2 rounded-[calc(var(--rb-r-full,999px))] px-3 text-[14px]/[18px] font-bold text-neutral-900 dark:text-neutral-100 transition-[background-color,color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] aria-[pressed=false]:text-neutral-900/45 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:hover:bg-neutral-100/6 dark:aria-[pressed=false]:text-neutral-100/45"><span className={a8("inline-flex", a ? "opacity-100" : "opacity-40")}><td tier={e} /></span>{tc[e].label}</button>;
                })}</div></div><div className="grid grid-cols-1 gap-1 p-1 sm:grid-cols-3">{[{
                label: "Total stored",
                value: $.toLocaleString("en-US"),
                unit: "TB"
              }, {
                label: "Growth this month",
                value: `${R >= 0 ? "+" : "−"}${Math.abs(R).toFixed(1)}`,
                unit: "%"
              }, {
                label: "Hot tier share",
                value: L.toFixed(1),
                unit: "%"
              }].map(e => <div className={a8("flex min-w-0 flex-col gap-2 rounded-[calc(var(--rb-r-5xl,22px))] bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] px-3 py-3.5 dark:bg-neutral-100/4", "rounded-[var(--rb-r-4xl,18px)]", "ps-3 pe-3")}><p className={a8("text-[14px]/[20px] font-bold text-neutral-900/78 dark:text-neutral-100/78", "truncate")}>{e.label}</p><p className="flex min-w-0 flex-wrap items-baseline gap-x-1 text-[22px]/[28px] font-extrabold tracking-[-0.01em] tabular-nums text-neutral-900 dark:text-neutral-100">{e.value}<span className="ms-0.5 text-[15px]/[20px] font-bold tracking-normal text-neutral-900/78 dark:text-neutral-100/78">{e.unit}</span></p></div>)}</div></div></div></div>;
    },
    "analytics-13": function () {
      let [e, a] = (0, React.useState)("30D"),
        [t, n] = (0, React.useState)(null),
        [s, i] = (0, React.useState)(0),
        [c, d] = function () {
          let e = (0, React.useRef)(null),
            [a, t] = (0, React.useState)({
              width: 0,
              height: 0
            });
          return (0, React.useEffect)(() => {
            let a = e.current,
              r = a?.ownerDocument.defaultView;
            if (!a || !r?.ResizeObserver) return;
            let l = new r.ResizeObserver(([e]) => {
              let a = e.contentRect;
              t({
                width: a.width,
                height: a.height
              });
            });
            return l.observe(a), () => l.disconnect();
          }, []), [e, a];
        }(),
        x = (0, React.useMemo)(() => function (e) {
          let {
              count: a,
              stride: t
            } = tN[e],
            r = .05 / a,
            l = 128;
          return Array.from({
            length: a
          }, (e, a) => {
            let n,
              i = l * (1 + .02 * tv(2.4, a) + r),
              o = Math.max(l, i) * (1 + .013 * Math.abs(tv(5.1, a))),
              c = Math.min(l, i) * (1 - .013 * Math.abs(tv(3.7, a))),
              d = Math.round(24e5 * (1 + .42 * tv(6.2, a)));
            return l = i, {
              open: l,
              high: o,
              low: c,
              close: i,
              volume: d,
              label: (n = new Date(ty + a * t * 864e5), `${tw[n.getUTCMonth()]} ${n.getUTCDate()}`)
            };
          });
        }(e), [e]),
        _ = x.length,
        p = d.width,
        b = Math.max(p - 40 - 1, 1),
        m = 298,
        k = b / _,
        f = tg(.72 * k, 1, 14),
        g = tg(.5 * f, 1, 1.5),
        v = tg(.5 * f, 1, 1.25),
        w = x.map(e => e.low),
        y = x.map(e => e.high),
        {
          lo: j,
          hi: N,
          ticks: M
        } = (0, React.useMemo)(() => function (e, a, t = 3) {
          let r = (a - e || 1) / t,
            l = 10 ** Math.floor(Math.log10(r)),
            n = r / l,
            s = (n <= 1 ? 1 : n <= 2 ? 2 : n <= 2.5 ? 2.5 : n <= 5 ? 5 : 10) * l,
            i = Math.floor(e / s) * s,
            o = Math.ceil(a / s) * s,
            c = [];
          for (; i <= o + s / 1e3; e += s) c.push(Math.round(100 * i) / 100);
          return {
            lo: i,
            hi: o,
            ticks: c
          };
        }(Math.min(...x.map(e => e.low)), Math.max(...x.map(e => e.high)), 2), [x]),
        A = (0, React.useMemo)(() => function (e, a = 4) {
          if (!(e > 0)) return {
            top: 1,
            ticks: [0, 1]
          };
          let t = e / a,
            r = 10 ** Math.floor(Math.log10(t)),
            l = t / r,
            n = (l <= 1 ? 1 : l <= 2 ? 2 : l <= 2.5 ? 2.5 : l <= 5 ? 5 : 10) * r,
            s = Math.ceil(e / n) * n,
            i = [];
          for (let e = 0; e <= s + n / 1e3; e += n) i.push(e);
          return {
            top: s,
            ticks: i
          };
        }(Math.max(...x.map(e => e.volume))).top, [x]),
        S = (0, React.useCallback)(e => 40 + k * (e + .5), [k]),
        $ = (0, React.useCallback)(e => 12 + m - (e - j) / (N - j || 1) * m, [m, j, N]),
        R = (0, React.useCallback)(e => 72 - e / A * 66, [66, A]),
        L = x[0],
        D = x[_ - 1],
        C = D.close - L.open,
        z = C / L.open * 100,
        E = Math.max(...y),
        F = Math.min(...w),
        B = tg(Math.floor(b / 56), 2, 7),
        U = $(L.open),
        W = Math.ceil(88 / k),
        P = _ - 1;
      for (let e = _ - 1; e >= W - 1; e--) if (x.slice(e - W + 1, e + 2).every(e => $(e.high) >= U - 2 || $(e.low) <= U - 18)) {
        P = e;
        break;
      }
      let O = Math.ceil(_ / B),
        T = x[s],
        q = (T.close - T.open) / T.open * 100;
      return <div className={tu("bg-white dark:bg-neutral-950", th, "flex h-full min-h-[640px] w-full flex-col justify-center-safe overflow-y-auto p-8 sm:p-10")}><div className={tu("relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 shadow-[inset_0_0_0_1px_rgb(84_62_32/0.05)] dark:shadow-[inset_0_0_0_1px_rgb(255_255_255/0.05)]", "mx-auto w-full max-w-[880px] shrink-0")}><div className={tu("mx-1 mb-1 flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-5xl,22px))] border border-transparent bg-white dark:bg-neutral-950 shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] [&:has(+*)]:mb-0", "mt-1 px-5 py-4")}><div className="flex flex-wrap items-start justify-between gap-3"><div className="min-w-0"><p className={tu("text-[14px]/[20px] font-bold text-neutral-900/78 dark:text-neutral-100/78", "flex flex-wrap gap-x-2")}><span>Compute credits</span><span className={tp}>CMP/USD</span></p><div className="mt-1 flex flex-wrap items-baseline gap-2.5"><p className={tu("text-[44px]/[48px] font-extrabold tracking-[-0.025em] tabular-nums", th)}>{tM(D.close)}</p><p className="inline-flex min-w-0 flex-wrap items-baseline gap-x-1 text-[13px]/[18px] font-bold tabular-nums [&>svg]:self-center text-neutral-900/78 dark:text-neutral-100/78"><span><__mod_22728.n icon={C >= 0 ? __mod_1497.A : __mod_37502.A} size={14} strokeWidth={2} aria-hidden="true" className="inline-block align-middle" /></span><span className="sr-only">{C >= 0 ? "Up" : "Down"}</span>{C >= 0 ? "+" : "−"}${Math.abs(C).toFixed(2)} ({C >= 0 ? "+" : "−"}{Math.abs(z).toFixed(2)}%)<span className={tp}>over {e}</span></p></div><p className={tu(tb, tp, "mt-1 flex flex-wrap gap-x-3")}><span>Period high {tM(E)}</span><span>Low {tM(F)}</span></p></div><div role="radiogroup" aria-label="Range" onKeyDown={tA} className={tu("inline-flex w-fit max-w-full items-stretch gap-1 rounded-[calc(var(--rb-r-full,999px)_+_min(4px,var(--rb-r-full,999px)))] bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] p-1", "h-10", "shrink-0")}>{tj.map(t => <button type="button" role="radio" aria-checked={t === e} tabIndex={t === e ? 0 : -1} onClick={() => {
                  a(t), n(null), i(0);
                }} className="relative inline-flex min-w-0 cursor-pointer items-center justify-center gap-1.5 whitespace-nowrap [&_svg]:shrink-0 rounded-[calc(var(--rb-r-full,999px))] px-4 text-[14px]/[18px] font-bold text-neutral-900/78 dark:text-neutral-100/78 select-none transition-[background-color,color,box-shadow,outline-color,scale] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:scale-[0.96] motion-reduce:active:scale-100 hover:not-aria-checked:text-neutral-900 aria-checked:bg-white aria-checked:text-neutral-900 aria-checked:shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_2px_rgb(84_62_32/0.10),0_3px_8px_-2px_rgb(84_62_32/0.20)] disabled:cursor-not-allowed disabled:text-neutral-900/40 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:hover:not-aria-checked:text-neutral-100 dark:aria-checked:bg-[color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800))] dark:aria-checked:text-neutral-100 dark:aria-checked:shadow-[inset_0_1px_0_rgb(255_255_255/0.1),0_0_0_1px_rgb(0_0_0/0.6),0_2px_5px_-1px_rgb(0_0_0/0.6)] dark:disabled:text-neutral-100/40">{t}</button>)}</div></div><div ref={c} role="img" tabIndex={0} aria-label={`Compute-credit price, ${e}. Latest close ${tM(D.close)}, ${z >= 0 ? "up" : "down"} ${Math.abs(z).toFixed(1)} percent over the period.`} onPointerMove={e => (e => {
              let a = c.current;
              if (!a) return;
              let t = tg(Math.floor((e - a.getBoundingClientRect().left - 40) / k), 0, _ - 1);
              n(t), i(t);
            })(e.clientX)} onPointerLeave={() => n(null)} onBlur={() => n(null)} onKeyDown={e => {
              if ("ArrowLeft" === e.key || "ArrowRight" === e.key) {
                e.preventDefault();
                let a = tg((t ?? _ - 1) + ("ArrowLeft" === e.key ? -1 : 1), 0, _ - 1);
                n(a), i(a);
              }
              "Home" === e.key && (n(0), i(0)), "End" === e.key && (n(_ - 1), i(_ - 1)), "Escape" === e.key && n(null);
            }} style={{
              touchAction: "pan-y"
            }} className={tu("focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))]", "relative mt-4 cursor-crosshair")}>{p > 0 && <><svg width={p} height={330} className="block overflow-visible">{M.map(e => <g><line x1={40} x2={p - 1} y1={$(e)} y2={$(e)} shapeRendering="crispEdges" className="stroke-neutral-900/6 dark:stroke-neutral-100/8" strokeWidth={1} /><text x={0} y={$(e)} dy={-4} className={tm}>${Math.abs(e) >= 1e6 ? `${(e / 1e6).toFixed(Math.abs(e) >= 1e7 ? 0 : 1)}M` : Math.abs(e) >= 1e3 ? `${(e / 1e3).toFixed(Math.abs(e) >= 1e4 ? 0 : 1)}k` : `${e}`}</text></g>)}<line x1={40} x2={p - 1} y1={$(L.open)} y2={$(L.open)} strokeDasharray="6 4" className="stroke-neutral-900/40 dark:stroke-neutral-100/45" strokeWidth={1} shapeRendering="crispEdges" /><text x={Math.min(40 + k * (P + 1), p - 1)} y={U} dy={-4} textAnchor="end" className={tm}>Open {tM(L.open)}</text>{null !== t && <line x1={S(t)} x2={S(t)} y1={12} y2={12 + m} className="stroke-neutral-900/40 dark:stroke-neutral-100/45" strokeWidth={1} shapeRendering="crispEdges" />}{x.map((e, a) => {
                    let l = e.close >= e.open,
                      n = $(Math.max(e.open, e.close)),
                      s = Math.max(1, $(Math.min(e.open, e.close)) - n),
                      i = null !== t && t !== a;
                    return <g style={{
                      opacity: i ? .45 : 1
                    }} className="transition-[color,background-color,border-color,box-shadow,outline-color,opacity,scale,translate] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms]"><line x1={S(a)} x2={S(a)} y1={$(e.high)} y2={n} className={tk} strokeWidth={g} /><line x1={S(a)} x2={S(a)} y1={n + s} y2={$(e.low)} className={tk} strokeWidth={g} /><rect x={S(a) - f / 2} y={n} width={f} height={s} fill={l ? "none" : void 0} strokeWidth={l ? v : 0} className={l ? tk : tf} /></g>;
                  })}</svg><svg width={p} height={72} className="mt-1 block overflow-visible"><text x={0} y={10} className={tm}>Volume</text><g>{x.map((e, a) => {
                      let l = R(e.volume),
                        n = t === a;
                      return <rect x={S(a) - f / 2} y={l} width={f} height={Math.max(1, 72 - l)} className={n ? tf : "fill-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] dark:fill-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_16%,transparent)]"} />;
                    })}</g></svg><svg width={p} height={16} className="block overflow-visible">{x.map((e, a) => a % O == 0 ? <text x={S(a)} y={11} textAnchor={0 === a ? "start" : a === _ - 1 ? "end" : "middle"} className={tm}>{e.label}</text> : null)}</svg><div aria-hidden="true" style={{
                  left: tg(S(s), 78, Math.max(p - 78, 78)),
                  top: 12
                }} className={tu("pointer-events-none absolute z-[70] flex min-w-36 max-w-64 flex-col gap-1.5 rounded-[calc(var(--rb-r-xl,12px))] bg-neutral-900 px-3.5 py-2.5 text-[13px]/[16px] font-bold tabular-nums text-white shadow-[0_0_0_1px_rgb(84_62_32/0.08),0_24px_56px_-20px_rgb(84_62_32/0.34),0_6px_16px_-8px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.65),0_24px_56px_-16px_rgb(0_0_0/0.8)] dark:bg-neutral-100 dark:text-neutral-900", "transition-[opacity,scale] duration-[260ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] starting:scale-[0.94] starting:opacity-0 motion-reduce:transition-none motion-reduce:starting:scale-100", "w-[150px] -translate-x-1/2", null === t ? "opacity-0" : "opacity-100")}><p className={tb}>{T.label}</p><div className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-0.5"><span className={tb}>Open</span><span className="text-right">{tM(T.open)}</span><span className={tb}>High</span><span className="text-right">{tM(T.high)}</span><span className={tb}>Low</span><span className="text-right">{tM(T.low)}</span><span className={tb}>Close</span><span className="text-right">{tM(T.close)}</span></div><p className="text-right">{q >= 0 ? "+" : "−"}{Math.abs(q).toFixed(2)}%</p></div></>}</div></div></div></div>;
    },
    "analytics-14": function () {
      let [e, a] = (0, React.useState)("All"),
        [t, n] = (0, React.useState)(null),
        [s, i] = (0, React.useState)(0),
        [o, c] = function () {
          let e = (0, React.useRef)(null),
            [a, t] = (0, React.useState)({
              width: 0,
              height: 0
            });
          return (0, React.useEffect)(() => {
            let a = e.current,
              r = a?.ownerDocument.defaultView;
            if (!a || !r?.ResizeObserver) return;
            let l = new r.ResizeObserver(([e]) => {
              let a = e.contentRect;
              t({
                width: a.width,
                height: a.height
              });
            });
            return l.observe(a), () => l.disconnect();
          }, []), [e, a];
        }(),
        d = (0, React.useMemo)(() => tW.filter(a => "All" === e || a.tier === e), [e]),
        x = (0, React.useMemo)(() => [...d].sort((e, a) => a.acv - e.acv), [d]),
        _ = (0, React.useMemo)(() => function (e) {
          if (0 === e.length) return 0;
          let a = [...e].sort((e, a) => e - a),
            t = Math.floor(a.length / 2);
          return a.length % 2 ? a[t] : Math.round((a[t - 1] + a[t]) / 2);
        }(d.map(e => e.seats)), [d]),
        u = c.width,
        h = Math.max(u - 40 - 16, 1),
        p = 328,
        b = Math.max(...tW.map(e => e.seats)),
        {
          top: m,
          ticks: k
        } = (0, React.useMemo)(() => function (e, a = 4) {
          if (!(e > 0)) return {
            top: 1,
            ticks: [0, 1]
          };
          let t = e / a,
            r = 10 ** Math.floor(Math.log10(t)),
            l = t / r,
            n = (l <= 1 ? 1 : l <= 2 ? 2 : l <= 2.5 ? 2.5 : l <= 5 ? 5 : 10) * r,
            s = Math.ceil(e / n) * n,
            i = [];
          for (let e = 0; e <= s + n / 1e3; e += n) i.push(e);
          return {
            top: s,
            ticks: i
          };
        }(b), [b]),
        f = (0, React.useCallback)(e => 40 + e / m * h, [h, m]),
        g = (0, React.useCallback)(e => 16 + p - e / 100 * p, [p]),
        v = e => e.seats > _ && e.usage < 65,
        w = d.filter(v).length,
        y = null === t ? null : tW.find(e => e.i === t) ?? null,
        j = tW[s],
        N = g(j.usage),
        M = tT(j.acv),
        A = N - M - 62,
        S = A >= 0 ? A : Math.min(N + M + 8, 314),
        $ = tT(2e4),
        R = tT(1e5),
        L = e => {
          if (0 === x.length) return;
          let a = x.map(e => e.i),
            r = null === t ? -1 : a.indexOf(t),
            l = -1 === r ? e > 0 ? 0 : a.length - 1 : tF(r + e, 0, a.length - 1);
          n(a[l]), i(a[l]);
        },
        D = u > 0 ? [{
          text: "Healthy",
          x: 44,
          y: 28,
          anchor: "start"
        }, {
          text: "Expand",
          x: u - 16 - 4,
          y: 28,
          anchor: "end"
        }, {
          text: "Watch",
          x: 44,
          y: 16 + p - 6,
          anchor: "start"
        }, {
          text: "At risk",
          x: u - 16 - 4,
          y: 16 + p - 6,
          anchor: "end"
        }] : [];
      return <div className={tS("bg-white dark:bg-neutral-950", t$, "flex h-full min-h-[640px] w-full flex-col justify-center-safe overflow-y-auto p-8 sm:p-10")}><div className={tS("relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 shadow-[inset_0_0_0_1px_rgb(84_62_32/0.05)] dark:shadow-[inset_0_0_0_1px_rgb(255_255_255/0.05)]", "mx-auto w-full max-w-[880px] shrink-0")}><div className={tS("mx-1 mb-1 flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-5xl,22px))] border border-transparent bg-white dark:bg-neutral-950 shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] [&:has(+*)]:mb-0", "divide-y divide-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:divide-neutral-100/7", "mt-1")}><div className="px-5 py-4"><div className="flex flex-wrap items-start justify-between gap-3"><div className="min-w-0"><h2 className={tS("text-[17px]/[22px] font-extrabold", t$)}>Account health</h2><p className={tS(tD, tR, "mt-0.5 truncate")}>Seats against weekly active usage, sized by contract value.</p></div><div role="radiogroup" aria-label="Plan tier" onKeyDown={tq} className={tS("inline-flex w-fit max-w-full items-stretch gap-1 rounded-[calc(var(--rb-r-full,999px)_+_min(4px,var(--rb-r-full,999px)))] bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] p-1", "h-10", "shrink-0")}>{tU.map(t => <button type="button" role="radio" aria-checked={t === e} tabIndex={t === e ? 0 : -1} onClick={() => {
                    a(t), n(null);
                  }} className="relative inline-flex min-w-0 cursor-pointer items-center justify-center gap-1.5 whitespace-nowrap [&_svg]:shrink-0 rounded-[calc(var(--rb-r-full,999px))] px-4 text-[14px]/[18px] font-bold text-neutral-900/78 dark:text-neutral-100/78 select-none transition-[background-color,color,box-shadow,outline-color,scale] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:scale-[0.96] motion-reduce:active:scale-100 hover:not-aria-checked:text-neutral-900 aria-checked:bg-white aria-checked:text-neutral-900 aria-checked:shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_2px_rgb(84_62_32/0.10),0_3px_8px_-2px_rgb(84_62_32/0.20)] disabled:cursor-not-allowed disabled:text-neutral-900/40 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:hover:not-aria-checked:text-neutral-100 dark:aria-checked:bg-[color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800))] dark:aria-checked:text-neutral-100 dark:aria-checked:shadow-[inset_0_1px_0_rgb(255_255_255/0.1),0_0_0_1px_rgb(0_0_0/0.6),0_2px_5px_-1px_rgb(0_0_0/0.6)] dark:disabled:text-neutral-100/40">{t}</button>)}</div></div><p className={tS(tD, tR, "mt-2 flex flex-wrap gap-x-6 gap-y-1")}><span><span className={tS(t$, "tabular-nums")}>{d.length}</span> accounts</span><span><span className={tS(t$, "tabular-nums")}>{w}</span> at risk</span><span>Median <span className={tS(t$, "tabular-nums")}>{_}</span> seats</span></p><div ref={o} role="img" tabIndex={0} aria-label={y ? `${y.name}: ${y.seats} seats, ${y.usage}% weekly active, $${y.acv.toLocaleString("en-US")} contract value${v(y) ? ", at risk" : ""}` : `Account health scatter, ${d.length} accounts. Arrow keys step through accounts by contract value.`} onPointerMove={e => ((e, a) => {
                let t = o.current;
                if (!t) return;
                let r = t.getBoundingClientRect(),
                  l = e - r.left,
                  s = a - r.top,
                  c = -1,
                  x = 1 / 0;
                for (let e of d) {
                  let a = Math.hypot(f(e.seats) - l, g(e.usage) - s) - tT(e.acv);
                  a < x && (x = a, c = e.i);
                }
                c >= 0 && x <= 12 ? (n(c), i(c)) : n(null);
              })(e.clientX, e.clientY)} onPointerLeave={() => n(null)} onBlur={() => n(null)} onKeyDown={e => {
                "ArrowRight" === e.key || "ArrowDown" === e.key ? (e.preventDefault(), L(1)) : "ArrowLeft" === e.key || "ArrowUp" === e.key ? (e.preventDefault(), L(-1)) : "Home" === e.key ? (e.preventDefault(), x.length && (n(x[0].i), i(x[0].i))) : "End" === e.key ? (e.preventDefault(), x.length && (n(x[x.length - 1].i), i(x[x.length - 1].i))) : "Escape" === e.key && n(null);
              }} style={{
                height: 372,
                touchAction: "pan-y"
              }} className={tS("focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))]", "relative mt-3 cursor-crosshair")}>{u > 0 && <svg width={u} height={372} className="overflow-visible">{[0, 25, 50, 75, 100].map(e => <g><line x1={40} x2={u - 16} y1={g(e)} y2={g(e)} shapeRendering="crispEdges" className={0 === e ? "stroke-neutral-900/12 dark:stroke-neutral-100/14" : "stroke-neutral-900/6 dark:stroke-neutral-100/8"} strokeWidth={1} /><text x={0} y={g(e)} dy={-4} className={tC}>{e}%</text></g>)}{k.map(e => 0 === e ? null : <text x={f(e)} y={368} textAnchor="middle" className={tC}>{Math.abs(e) >= 1e6 ? `${(e / 1e6).toFixed(Math.abs(e) >= 1e7 ? 0 : 1)}M` : Math.abs(e) >= 1e3 ? `${(e / 1e3).toFixed(Math.abs(e) >= 1e4 ? 0 : 1)}k` : `${e}`}</text>)}<line x1={f(_)} x2={f(_)} y1={16} y2={16 + p} strokeDasharray="6 4" className={tz} strokeWidth={1} /><line x1={40} x2={u - 16} y1={g(65)} y2={g(65)} strokeDasharray="6 4" className={tz} strokeWidth={1} />{D.map(e => <text x={e.x} y={e.y} textAnchor={e.anchor} className={tC}>{e.text}</text>)}<g>{d.map(e => {
                      let a = v(e);
                      return <circle cx={f(e.seats)} cy={g(e.usage)} r={tT(e.acv)} fillOpacity={t === e.i ? 1 : .55} stroke="currentColor" strokeWidth={1.5 * !!a} className={tS(tE, a && tL)} />;
                    })}</g>{y && <circle cx={f(y.seats)} cy={g(y.usage)} r={tT(y.acv) + 3} fill="none" strokeWidth={2} className="stroke-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_82%,black)] dark:stroke-[var(--rb-accent,oklch(81%_0.16_163))]" />}</svg>}{u > 0 && <div aria-hidden="true" style={{
                  left: tF(f(j.seats), 88, Math.max(u - 88, 88)),
                  top: S
                }} className={tS("pointer-events-none absolute z-[70] flex min-w-36 max-w-64 flex-col gap-1.5 rounded-[calc(var(--rb-r-xl,12px))] bg-neutral-900 px-3.5 py-2.5 text-[13px]/[16px] font-bold tabular-nums text-white shadow-[0_0_0_1px_rgb(84_62_32/0.08),0_24px_56px_-20px_rgb(84_62_32/0.34),0_6px_16px_-8px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.65),0_24px_56px_-16px_rgb(0_0_0/0.8)] dark:bg-neutral-100 dark:text-neutral-900", "transition-[opacity,scale] duration-[260ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] starting:scale-[0.94] starting:opacity-0 motion-reduce:transition-none motion-reduce:starting:scale-100", "-translate-x-1/2", null === t ? "opacity-0" : "opacity-100")}><p className={tS("text-[13px]/[16px] font-semibold tabular-nums", "whitespace-nowrap")}>{j.name}</p><p className="flex gap-2 whitespace-nowrap"><span>{j.seats.toLocaleString("en-US")} seats</span><span>{j.usage}% active</span><span>${j.acv.toLocaleString("en-US")}</span></p></div>}</div></div><div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 px-5 py-2"><div className={tS(tD, tR, "flex items-center gap-3")}><span>Contract value</span><span className="flex items-center gap-1.5"><svg width={Math.ceil(2 * $)} height={24} className="shrink-0 overflow-visible" aria-hidden="true"><circle cx={$} cy={12} r={$} fillOpacity={.55} className={tE} /></svg><span className="tabular-nums">$20k</span></span><span className="flex items-center gap-1.5"><svg width={Math.ceil(2 * R)} height={Math.ceil(2 * R)} className="shrink-0 overflow-visible" aria-hidden="true"><circle cx={R} cy={R} r={R} fillOpacity={.55} className={tE} /></svg><span className="tabular-nums">$100k</span></span></div><div className={tS(tD, tR, "flex items-center gap-1.5")}><svg width={10} height={10} className="shrink-0 overflow-visible" aria-hidden="true"><circle cx={5} cy={5} r={4.25} fill="none" stroke="currentColor" strokeWidth={1.5} className={tL} /></svg>At risk: below {65}% usage above median seats</div></div></div></div></div>;
    },
    "analytics-15": function () {
      let [e, a] = (0, React.useState)("By attainment"),
        [t, n] = (0, React.useState)(null),
        [s, i] = (0, React.useState)({
          x: 0,
          y: 0,
          rep: 0
        }),
        o = (0, React.useRef)(null),
        c = (0, React.useRef)(null),
        d = (0, React.useRef)(null),
        x = (0, React.useMemo)(() => t2.map((e, a) => ({
          ...e,
          id: a,
          pct: e.actual / e.quota * 100,
          delta: e.actual - e.quota
        })), []),
        _ = (0, React.useMemo)(() => {
          let a = [...x].sort((a, t) => "By attainment" === e ? t.pct - a.pct : "By quota" === e ? t.quota - a.quota : a.name.localeCompare(t.name)),
            t = new Map();
          return a.forEach((e, a) => t.set(e.id, a)), t;
        }, [x, e]),
        u = x.reduce((e, a) => e + a.actual, 0),
        h = x.reduce((e, a) => e + a.quota, 0),
        p = u / h * 100,
        b = 64 * x.length - 0,
        m = (e, a, t) => {
          let r = c.current,
            l = o.current;
          if (!r || !l) return;
          let s = r.getBoundingClientRect(),
            x = l.getBoundingClientRect(),
            _ = (d.current?.offsetWidth ?? 144) / 2,
            u = d.current?.offsetHeight ?? 76,
            h = e - s.left,
            p = a - s.top;
          n(t), i({
            x: s.left - x.left + t0(h, _, Math.max(s.width - _, _)),
            y: s.top - x.top + (p - u - 12 >= 0 ? p - u - 12 : Math.min(p + 20, s.height - u)),
            rep: t
          });
        },
        k = x[t ?? s.rep];
      return <div className={tH("bg-white dark:bg-neutral-950", tI, "flex h-full min-h-[640px] w-full flex-col justify-center-safe overflow-y-auto p-6 sm:p-8")}><div ref={o} className="relative mx-auto w-full max-w-[1100px]"><div className="mb-3 flex flex-wrap items-end justify-between gap-3"><div className="min-w-0"><h2 className={tH("text-[17px]/[22px] font-extrabold", tI)}>Quota attainment by rep</h2><p className={tH(tQ, tK, "mt-0.5 truncate")}>Closed revenue against quota this quarter. Tick marks 100%.</p></div><div role="radiogroup" aria-label="Sort" onKeyDown={t4} className={tH("inline-flex w-fit max-w-full items-stretch gap-1 rounded-[calc(var(--rb-r-full,999px)_+_min(4px,var(--rb-r-full,999px)))] bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] p-1", "h-10", "shrink-0")}>{t6.map(t => <button type="button" role="radio" aria-checked={t === e} tabIndex={t === e ? 0 : -1} onClick={() => a(t)} className="relative inline-flex min-w-0 cursor-pointer items-center justify-center gap-1.5 whitespace-nowrap [&_svg]:shrink-0 rounded-[calc(var(--rb-r-full,999px))] px-4 text-[14px]/[18px] font-bold text-neutral-900/78 dark:text-neutral-100/78 select-none transition-[background-color,color,box-shadow,outline-color,scale] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:scale-[0.96] motion-reduce:active:scale-100 hover:not-aria-checked:text-neutral-900 aria-checked:bg-white aria-checked:text-neutral-900 aria-checked:shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_2px_rgb(84_62_32/0.10),0_3px_8px_-2px_rgb(84_62_32/0.20)] disabled:cursor-not-allowed disabled:text-neutral-900/40 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:hover:not-aria-checked:text-neutral-100 dark:aria-checked:bg-[color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800))] dark:aria-checked:text-neutral-100 dark:aria-checked:shadow-[inset_0_1px_0_rgb(255_255_255/0.1),0_0_0_1px_rgb(0_0_0/0.6),0_2px_5px_-1px_rgb(0_0_0/0.6)] dark:disabled:text-neutral-100/40">{t}</button>)}</div></div><div className="relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 shadow-[inset_0_0_0_1px_rgb(84_62_32/0.05)] dark:shadow-[inset_0_0_0_1px_rgb(255_255_255/0.05)]"><div className={tH("mx-1 mb-1 flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-5xl,22px))] border border-transparent bg-white dark:bg-neutral-950 shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] [&:has(+*)]:mb-0", "divide-y divide-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:divide-neutral-100/7", "mt-1")}><div ref={c} className="relative" style={{
                height: b
              }}>{x.map(e => {
                  let a = _.get(e.id) ?? 0,
                    t = e.delta >= 0,
                    l = 100 * t0(e.pct / 125, 0, 1);
                  return <div tabIndex={0} role="button" aria-label={`${e.name}: ${e.pct.toFixed(1)} percent of quota, ${t1(e.actual)} of ${t1(e.quota)}.`} onPointerMove={a => m(a.clientX, a.clientY, e.id)} onPointerLeave={() => n(null)} onFocus={a => {
                    let t = a.currentTarget.getBoundingClientRect();
                    m(t.left + t.width / 2, t.top + t.height / 2, e.id);
                  }} onBlur={() => n(null)} style={{
                    transform: `translateY(${64 * a}px)`,
                    height: 64
                  }} className={tH("hover:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] dark:hover:bg-neutral-100/6", "focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))]", a < x.length - 1 && "border-b border-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:border-neutral-100/7", "absolute inset-x-0 top-0 grid grid-cols-[36px_minmax(0,1fr)_auto] content-center items-center gap-x-2.5 gap-y-1.5 px-3 transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] motion-reduce:transition-none sm:flex sm:gap-4")}><div className="contents sm:flex sm:w-52 sm:min-w-0 sm:items-center sm:gap-2.5"><span aria-hidden="true" className={tH(tG, "row-span-2 size-[36px]")}><span className={tX}>{e.name.split(/[\s-]+/).filter(Boolean).slice(0, 2).map(e => e[0]?.toUpperCase()).join("")}</span></span><span className={tH(tJ, tI, "min-w-0 truncate")}>{e.name}</span></div><div className="relative col-start-2 h-6 min-w-0 flex-1">{t5.reduce((e, a, t) => {
                        let l = e.from / 125 * 100,
                          n = (a.to - e.from) / 125 * 100;
                        return e.nodes.push(<div aria-hidden="true" className={tH("absolute inset-y-0", a.cls)} style={{
                          left: `${l}%`,
                          width: `${n}%`
                        }} />), e.from = a.to, e;
                      }, {
                        from: 0,
                        nodes: []
                      }).nodes}<div className="absolute inset-x-0 top-1/2 h-2.5 -translate-y-1/2" aria-hidden="true"><div className={tZ} style={{
                          width: `${l}%`
                        }} /></div><div aria-hidden="true" className={tH(tZ, "absolute inset-y-0 w-[2px]")} style={{
                        left: "80%"
                      }} /></div><div className="col-start-3 row-span-2 row-start-1 flex shrink-0 items-center gap-4 sm:gap-5"><div className="w-16 text-right"><p className={tH(tJ, tI, "tabular-nums")}>{t1(e.actual)}</p><p className={tH(tV, tK)}>of {t1(e.quota)}</p></div><span className={tH(tY, "w-14 justify-end")}>{t ? "+" : "−"}{t1(Math.abs(e.delta))}</span></div></div>;
                })}</div><div className="flex items-center gap-3 px-3 py-2.5 sm:gap-4"><div className="flex min-w-0 items-center gap-2.5 sm:w-52"><span aria-hidden="true" className={tH(tG, "size-[36px]")}><span className={tX}>T</span></span><span className={tH(tJ, tI, "min-w-0 truncate")}>Team</span></div><div className="hidden min-w-0 flex-1 sm:block"><span className={tH(tQ, tK, "tabular-nums")}>{p.toFixed(1)}% of blended quota</span></div><div className="ml-auto flex shrink-0 items-center gap-4 sm:gap-5"><div className="w-16 text-right"><p className={tH(tJ, tI, "tabular-nums")}>{t1(u)}</p><p className={tH(tV, tK)}>of {t1(h)}</p></div><span className={tH(tY, "w-14 justify-end")}>{u - h >= 0 ? "+" : "−"}{t1(Math.abs(u - h))}</span></div></div></div></div><div ref={d} aria-hidden="true" style={{
            left: s.x,
            top: s.y
          }} className={tH("pointer-events-none absolute z-[70] flex min-w-36 max-w-64 flex-col gap-1.5 rounded-[calc(var(--rb-r-xl,12px))] bg-neutral-900 px-3.5 py-2.5 text-[13px]/[16px] font-bold tabular-nums text-white shadow-[0_0_0_1px_rgb(84_62_32/0.08),0_24px_56px_-20px_rgb(84_62_32/0.34),0_6px_16px_-8px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.65),0_24px_56px_-16px_rgb(0_0_0/0.8)] dark:bg-neutral-100 dark:text-neutral-900", "transition-[opacity,scale] duration-[260ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] starting:scale-[0.94] starting:opacity-0 motion-reduce:transition-none motion-reduce:starting:scale-100", "-translate-x-1/2", null === t ? "opacity-0" : "opacity-100")}><p className={tH(tV, "whitespace-nowrap")}>{k.name}</p><p className="whitespace-nowrap">{k.pct.toFixed(1)}% of quota</p><p className={tH(tV, "whitespace-nowrap")}>{k.delta >= 0 ? `${t1(k.delta)} over target` : `${t1(Math.abs(k.delta))} to target`}</p></div></div></div>;
    },
    "analytics-16": function () {
      let [e, a] = function () {
          let e = (0, React.useRef)(null),
            [a, t] = (0, React.useState)({
              width: 0,
              height: 0
            });
          return (0, React.useEffect)(() => {
            let a = e.current,
              r = a?.ownerDocument.defaultView;
            if (!a || !r?.ResizeObserver) return;
            let l = new r.ResizeObserver(([e]) => {
              let a = e.contentRect;
              t({
                width: a.width,
                height: a.height
              });
            });
            return l.observe(a), () => l.disconnect();
          }, []), [e, a];
        }(),
        [t, i] = (0, React.useState)(60),
        [o, c] = (0, React.useState)(!1),
        [d, x] = (0, React.useState)(60),
        [_, u] = (0, React.useState)(null),
        [h, p] = (0, React.useState)(59),
        b = (0, React.useRef)(!1),
        m = (0, React.useRef)(!1);
      (0, React.useEffect)(() => {
        let e = setInterval(() => {
          b.current || m.current || i(e => e + 1);
        }, 1e3);
        return () => clearInterval(e);
      }, []);
      let k = d / 60,
        f = (0, React.useMemo)(() => Array.from({
          length: 60
        }, (e, a) => {
          var r;
          let l;
          return Math.round(980 + 340 * (.5 * Math.sin(.7 * (l = .11 * (r = t - 59 + a) * k) + 3.7) + .34 * Math.sin(.23 * l + 2.1 * 3.7) + .12 * Math.sin(1.9 * l + 2.22)) + 40 * Math.sin(.5 * r));
        }), [t, k]),
        g = a.width,
        v = Math.max(g - 34 - 1, 1),
        w = 258,
        {
          top: y,
          ticks: j
        } = (0, React.useMemo)(() => function (e, a = 4) {
          let t = 1500 / a,
            r = 10 ** Math.floor(Math.log10(t)),
            l = t / r,
            n = (l <= 1 ? 1 : l <= 2 ? 2 : l <= 2.5 ? 2.5 : l <= 5 ? 5 : 10) * r,
            s = Math.ceil(1500 / n) * n,
            i = [];
          for (let e = 0; e <= s + n / 1e3; e += n) i.push(e);
          return {
            top: s,
            ticks: i
          };
        }(0), []),
        N = (0, React.useCallback)(e => 34 + e / 59 * v, [v]),
        M = (0, React.useCallback)(e => 10 + w - e / y * w, [w, y]),
        A = (0, __mod_46667.A)().x((e, a) => N(a)).y(e => M(e)).curve(__mod_4670.G)(f) ?? "",
        S = f[59],
        $ = null === _ ? S : f[_],
        R = Math.max(...f),
        L = Math.round(f.reduce((e, a) => e + a, 0) / f.length),
        D = () => {
          m.current = !1, u(null);
        },
        C = Math.round((59 - h) * k);
      return <div className={t8("bg-white dark:bg-neutral-950", t3, "flex h-full min-h-[640px] w-full flex-col justify-center-safe overflow-y-auto p-8 sm:p-10")}><div className={t8("relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 shadow-[inset_0_0_0_1px_rgb(84_62_32/0.05)] dark:shadow-[inset_0_0_0_1px_rgb(255_255_255/0.05)]", "mx-auto w-full max-w-[880px] shrink-0")}><div className={t8("mx-1 mb-1 flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-5xl,22px))] border border-transparent bg-white dark:bg-neutral-950 shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] [&:has(+*)]:mb-0", "divide-y divide-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:divide-neutral-100/7", "mt-1")}><div className="px-4 py-4"><div className="flex flex-wrap items-start justify-between gap-3"><div className="min-w-0"><div className="flex items-center gap-2"><p className={t9}>Requests per second</p><span className={t8("inline-flex items-start gap-1.5 text-[15px]/[20px] font-bold tabular-nums", o ? "text-neutral-900/62 dark:text-neutral-100/62" : "text-neutral-900 dark:text-neutral-100")}>{!o && <span className="flex h-lh shrink-0 items-center"><span className="inline-block size-3 shrink-0 rounded-full border-2 border-current border-t-transparent animate-spin [animation-duration:700ms] motion-reduce:animate-none" aria-hidden="true" /></span>}{o ? "Paused" : "Live"}</span></div><div className="mt-1 flex flex-wrap items-baseline gap-2.5"><p className={t8("text-[44px]/[48px] font-extrabold tracking-[-0.025em] tabular-nums", t3, "flex items-baseline gap-x-1")}><span className="inline-block" style={{
                        minWidth: "4.4ch"
                      }}>{$.toLocaleString("en-US")}</span><span className={t7}>rps</span></p>{null !== _ && <p className={t8("text-[14px]/[20px] font-medium", "text-neutral-900/62 dark:text-neutral-100/62", "tabular-nums")}>{0 === C ? "now" : `${C}s ago`}</p>}</div></div><div className="flex shrink-0 items-center gap-1.5"><button type="button" onClick={() => c(e => (b.current = !e, !e))} aria-pressed={o} className={t8("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] text-neutral-900 dark:text-neutral-100 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] active:not-disabled:translate-y-px active:not-disabled:shadow-[inset_0_1px_3px_rgb(84_62_32/0.16),0_0_0_1px_rgb(84_62_32/0.10)] dark:active:not-disabled:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14),0_0_0_1px_rgb(84_62_32/0.10)] dark:aria-expanded:bg-neutral-800 dark:aria-expanded:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] disabled:bg-none disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] disabled:text-neutral-900/40 disabled:shadow-none dark:disabled:bg-neutral-800/60 dark:disabled:text-neutral-100/40", "h-10 gap-2 rounded-[calc(var(--rb-r-full,999px))] px-5 text-[15px]/[20px] font-bold")}>{o ? "Resume" : "Pause"}</button><div role="radiogroup" aria-label="Window" onKeyDown={rn} className={t8("inline-flex w-fit max-w-full items-stretch gap-1 rounded-[calc(var(--rb-r-full,999px)_+_min(4px,var(--rb-r-full,999px)))] bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] p-1", "h-10")}>{rr.map(e => <button type="button" role="radio" aria-checked={e.seconds === d} tabIndex={e.seconds === d ? 0 : -1} onClick={() => x(e.seconds)} className="relative inline-flex min-w-0 cursor-pointer items-center justify-center gap-1.5 whitespace-nowrap [&_svg]:shrink-0 rounded-[calc(var(--rb-r-full,999px))] px-4 text-[14px]/[18px] font-bold text-neutral-900/78 dark:text-neutral-100/78 select-none transition-[background-color,color,box-shadow,outline-color,scale] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:scale-[0.96] motion-reduce:active:scale-100 hover:not-aria-checked:text-neutral-900 aria-checked:bg-white aria-checked:text-neutral-900 aria-checked:shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_2px_rgb(84_62_32/0.10),0_3px_8px_-2px_rgb(84_62_32/0.20)] disabled:cursor-not-allowed disabled:text-neutral-900/40 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:hover:not-aria-checked:text-neutral-100 dark:aria-checked:bg-[color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800))] dark:aria-checked:text-neutral-100 dark:aria-checked:shadow-[inset_0_1px_0_rgb(255_255_255/0.1),0_0_0_1px_rgb(0_0_0/0.6),0_2px_5px_-1px_rgb(0_0_0/0.6)] dark:disabled:text-neutral-100/40">{e.label}</button>)}</div></div></div><div ref={e} role="img" tabIndex={0} aria-label={`Live requests per second over the last ${rl(d)}. Currently ${S.toLocaleString("en-US")} requests per second.`} onPointerMove={a => (a => {
                let t = e.current;
                if (!t) return;
                m.current = !0;
                let r = t.getBoundingClientRect(),
                  l = v / 59,
                  n = rt(Math.round((a - r.left - 34) / l), 0, 59);
                u(n), p(n);
              })(a.clientX)} onPointerLeave={D} onBlur={D} onKeyDown={e => {
                if ("ArrowLeft" === e.key || "ArrowRight" === e.key) {
                  e.preventDefault(), m.current = !0;
                  let a = rt((_ ?? 59) + ("ArrowLeft" === e.key ? -1 : 1), 0, 59);
                  u(a), p(a);
                }
                "Home" === e.key && (m.current = !0, u(0), p(0)), "End" === e.key && (m.current = !0, u(59), p(59)), "Escape" === e.key && D();
              }} style={{
                height: 288,
                touchAction: "pan-y"
              }} className={t8("focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))]", "relative mt-4 cursor-crosshair")}>{g > 0 && <svg width={g} height={288} className="overflow-visible">{j.map(e => <g><line x1={34} x2={g - 1} y1={M(e)} y2={M(e)} shapeRendering="crispEdges" className={0 === e ? "stroke-neutral-900/12 dark:stroke-neutral-100/14" : "stroke-neutral-900/6 dark:stroke-neutral-100/8"} strokeWidth={1} /><text x={0} y={M(e)} dy={-4} className={re}>{Math.abs(e) >= 1e6 ? `${(e / 1e6).toFixed(Math.abs(e) >= 1e7 ? 0 : 1)}M` : Math.abs(e) >= 1e3 ? `${(e / 1e3).toFixed(Math.abs(e) >= 1e4 ? 0 : 1)}k` : `${e}`}</text></g>)}{[0, 30, 59].map(e => <text x={N(e)} y={284} textAnchor={0 === e ? "start" : 59 === e ? "end" : "middle"} className={re}>{59 === e ? "now" : rl(Math.round((59 - e) * k))}</text>)}<g><path d={A} fill="none" className="stroke-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_82%,black)] dark:stroke-[var(--rb-accent,oklch(81%_0.16_163))]" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /></g>{null !== _ && <line x1={N(_)} x2={N(_)} y1={10} y2={10 + w} className="stroke-neutral-900/40 dark:stroke-neutral-100/45" strokeWidth={1} shapeRendering="crispEdges" />}<rect x={N(59) - 4} y={M(S) - 4} width={8} height={8} className={ra} />{null !== _ && 59 !== _ && <rect x={N(_) - 4} y={M(f[_]) - 4} width={8} height={8} className={ra} />}</svg>}{g > 0 && <div aria-hidden="true" style={{
                  left: rt(N(h), 72, Math.max(g - 72, 72)),
                  top: 4
                }} className={t8("pointer-events-none absolute z-[70] flex min-w-36 max-w-64 flex-col gap-1.5 rounded-[calc(var(--rb-r-xl,12px))] bg-neutral-900 px-3.5 py-2.5 text-[13px]/[16px] font-bold tabular-nums text-white shadow-[0_0_0_1px_rgb(84_62_32/0.08),0_24px_56px_-20px_rgb(84_62_32/0.34),0_6px_16px_-8px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.65),0_24px_56px_-16px_rgb(0_0_0/0.8)] dark:bg-neutral-100 dark:text-neutral-900", "transition-[opacity,scale] duration-[260ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] starting:scale-[0.94] starting:opacity-0 motion-reduce:transition-none motion-reduce:starting:scale-100", "-translate-x-1/2", null === _ ? "opacity-0" : "opacity-100")}><p className={t8("text-[13px]/[16px] font-semibold tabular-nums", "whitespace-nowrap")}>{0 === C ? "now" : `${C}s ago`}</p><p className="whitespace-nowrap">{f[h].toLocaleString("en-US")} rps</p></div>}</div></div><div className="grid grid-cols-1 gap-1 p-1 sm:grid-cols-3">{[{
                label: "Current",
                value: S.toLocaleString("en-US")
              }, {
                label: "Window peak",
                value: R.toLocaleString("en-US")
              }, {
                label: "Window mean",
                value: L.toLocaleString("en-US")
              }].map(e => <div className={t8("flex min-w-0 flex-col gap-2 rounded-[calc(var(--rb-r-5xl,22px))] bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] px-3 py-3.5 dark:bg-neutral-100/4", "rounded-[var(--rb-r-4xl,18px)]", "ps-3 pe-3")}><p className={t8(t9, "truncate")}>{e.label}</p><p className="flex min-w-0 flex-wrap items-baseline gap-x-1 text-[22px]/[28px] font-extrabold tracking-[-0.01em] tabular-nums text-neutral-900 dark:text-neutral-100"><span className="inline-block" style={{
                    minWidth: "4ch"
                  }}>{e.value}</span><span className={t7}>rps</span></p></div>)}</div></div></div></div>;
    }
  },
  ri = {
    "analytics-1": 480,
    "analytics-2": 640,
    "analytics-3": 640,
    "analytics-4": 640,
    "analytics-5": 560,
    "analytics-6": 640,
    "analytics-7": 640,
    "analytics-8": 640,
    "analytics-9": 560,
    "analytics-10": 560,
    "analytics-11": 640,
    "analytics-12": 640,
    "analytics-13": 640,
    "analytics-14": 640,
    "analytics-15": 640,
    "analytics-16": 640
  };

export { rs as components };
export { ri as heights };

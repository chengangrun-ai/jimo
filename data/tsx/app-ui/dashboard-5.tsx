import * as __mod_22728 from "../_helpers/22728";
import * as __mod_31517 from "../_helpers/31517";
import * as __mod_90987 from "../_helpers/90987";
import * as __mod_59649 from "../_helpers/59649";
import * as __mod_46667 from "../_helpers/46667";
import * as __mod_4670 from "../_helpers/4670";
import * as __mod_40144 from "../_helpers/40144";
import * as __mod_62714 from "../_helpers/62714";
import * as __mod_78805 from "../_helpers/78805";
import * as __mod_18327 from "../_helpers/18327";
import * as __mod_34951 from "../_helpers/34951";
import * as __mod_36586 from "../_helpers/36586";
import * as __mod_35619 from "../_helpers/35619";
import * as __mod_99519 from "../_helpers/99519";
import * as __mod_92881 from "../_helpers/92881";
import * as __mod_10303 from "../_helpers/10303";
import * as __mod_31453 from "../_helpers/31453";
import * as __mod_88366 from "../_helpers/88366";
import * as __mod_36474 from "../_helpers/36474";
import * as __mod_20484 from "../_helpers/20484";
import * as __mod_57466 from "../_helpers/57466";
import * as __mod_59157 from "../_helpers/59157";
import * as __mod_67812 from "../_helpers/67812";
import * as __mod_87924 from "../_helpers/87924";
import * as __mod_33786 from "../_helpers/33786";
import * as __mod_52038 from "../_helpers/52038";
import * as __mod_59309 from "../_helpers/59309";
import * as __mod_82270 from "../_helpers/82270";
import * as __mod_92190 from "../_helpers/92190";
import * as __mod_95735 from "../_helpers/95735";
import * as __mod_83838 from "../_helpers/83838";
import * as __mod_77378 from "../_helpers/77378";
import * as __mod_99199 from "../_helpers/99199";
import * as __mod_88294 from "../_helpers/88294";
import * as __mod_94089 from "../_helpers/94089";
import * as __mod_24580 from "../_helpers/24580";
import * as __mod_37502 from "../_helpers/37502";
import * as __mod_1497 from "../_helpers/1497";
import * as __mod_24513 from "../_helpers/24513";
import * as __mod_20148 from "../_helpers/20148";
import * as __mod_89886 from "../_helpers/89886";
import * as __mod_66575 from "../_helpers/66575";
import * as __mod_91162 from "../_helpers/91162";
import * as __mod_68656 from "../_helpers/68656";
import * as __mod_31964 from "../_helpers/31964";
import * as __mod_12556 from "../_helpers/12556";
import * as __mod_58661 from "../_helpers/58661";
import * as __mod_5042 from "../_helpers/5042";
import * as __mod_55299 from "../_helpers/55299";
import * as __mod_52975 from "../_helpers/52975";
import * as __mod_92752 from "../_helpers/92752";
import * as __mod_55410 from "../_helpers/55410";
import * as __mod_71270 from "../_helpers/71270";
import * as __mod_85585 from "../_helpers/85585";
import * as __mod_84341 from "../_helpers/84341";
import * as __mod_36048 from "../_helpers/36048";
import * as __mod_33126 from "../_helpers/33126";
/**
 * Dashboard 5
 * slug: dashboard-5
 * category: dashboard
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let d = (...e) => e.filter(Boolean).join(" "),
  x = "text-neutral-900 dark:text-neutral-100",
  _ = "text-neutral-900/62 dark:text-neutral-100/62",
  h = "text-[13px]/[16px] font-semibold tabular-nums",
  b = [28, 31, 30, 36, 34, 41, 44, 43, 49, 52, 58, 61],
  p = [70, 72, 71, 74, 78, 79, 83, 86, 88, 90, 93, 97],
  u = [61, 59, 60, 58, 57, 55, 56, 54, 53, 52, 51, 49],
  m = [12, 13, 12, 14, 13, 15, 14, 16, 15, 17, 16, 18],
  k = [500, 375, 250, 125, 0],
  f = [{
    key: "Last 3 months",
    compare: "vs. prior 3 months",
    months: ["Jul", "Aug", "Sep"],
    revenue: [448, 466, 483],
    metrics: [{
      label: "Net revenue",
      value: "$1.40M",
      delta: "+9.8%",
      positive: !0,
      spark: b
    }, {
      label: "Paid accounts",
      value: "3,914",
      delta: "+2.1%",
      positive: !0,
      spark: p
    }, {
      label: "Average contract",
      value: "$1,278",
      delta: "−1.4%",
      positive: !1,
      spark: u
    }, {
      label: "Monthly churn",
      value: "1.8%",
      delta: "+0.2 pp",
      positive: !1,
      spark: m
    }]
  }, {
    key: "Last 6 months",
    compare: "vs. prior 6 months",
    months: ["Apr", "May", "Jun", "Jul", "Aug", "Sep"],
    revenue: [371, 402, 419, 448, 466, 483],
    metrics: [{
      label: "Net revenue",
      value: "$2.59M",
      delta: "+12.4%",
      positive: !0,
      spark: b
    }, {
      label: "Paid accounts",
      value: "3,914",
      delta: "+4.1%",
      positive: !0,
      spark: p
    }, {
      label: "Average contract",
      value: "$1,284",
      delta: "−2.3%",
      positive: !1,
      spark: u
    }, {
      label: "Monthly churn",
      value: "1.8%",
      delta: "+0.3 pp",
      positive: !1,
      spark: m
    }]
  }, {
    key: "Year to date",
    compare: "vs. same period last year",
    months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
    revenue: [279, 301, 318, 371, 402, 419, 448, 466, 483],
    metrics: [{
      label: "Net revenue",
      value: "$3.49M",
      delta: "+22.8%",
      positive: !0,
      spark: b
    }, {
      label: "Paid accounts",
      value: "3,914",
      delta: "+14.2%",
      positive: !0,
      spark: p
    }, {
      label: "Average contract",
      value: "$1,292",
      delta: "−1.8%",
      positive: !1,
      spark: u
    }, {
      label: "Monthly churn",
      value: "1.9%",
      delta: "+0.4 pp",
      positive: !1,
      spark: m
    }]
  }];
function v({
  values: e
}) {
  let a = Math.min(...e),
    r = Math.max(...e) - a || 1,
    l = e.map((t, l) => {
      let n = l / (e.length - 1) * 100;
      return `${n.toFixed(2)},${(92 - (t - a) / r * 84).toFixed(2)}`;
    }).join(" ");
  return <svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden={!0} className="hidden h-8 w-16 shrink-0 @min-[13rem]:block"><polyline points={l} fill="none" vectorEffect="non-scaling-stroke" className="stroke-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_82%,black)] dark:stroke-[var(--rb-accent,oklch(81%_0.16_163))]" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /></svg>;
}
function g({
  value: e,
  onChange: a
}) {
  let [r, o] = (0, React.useState)(!1),
    [c, x] = (0, React.useState)(!1),
    [_, h] = (0, React.useState)(0),
    b = (0, React.useRef)(null),
    p = (0, React.useRef)(null),
    u = (0, React.useRef)(null);
  (0, React.useEffect)(() => {
    if (!r) return;
    let e = b.current?.ownerDocument ?? document,
      a = e => {
        b.current?.contains(e.target) || o(!1);
      };
    return e.addEventListener("pointerdown", a), () => e.removeEventListener("pointerdown", a);
  }, [r]), (0, React.useEffect)(() => {
    r && u.current?.focus({
      preventScroll: !0
    });
  }, [r]);
  let m = (e, a) => {
      h(e), x(a), o(!0);
    },
    k = (e = !0) => {
      o(!1), e && p.current?.focus({
        preventScroll: !0
      });
    },
    v = e => {
      a(f[e].key), k();
    };
  return <div ref={b} className="relative shrink-0"><button ref={p} type="button" aria-haspopup="listbox" aria-expanded={r} aria-label={`Date range: ${e}`} onClick={() => r ? k() : m(0, !0)} onKeyDown={e => {
      "ArrowDown" === e.key ? (e.preventDefault(), m(0, !1)) : "ArrowUp" === e.key && (e.preventDefault(), m(f.length - 1, !1));
    }} className="inline-flex h-10 w-fit min-w-40 cursor-pointer items-center justify-between gap-2 rounded-[calc(var(--rb-r-xl,12px))] border border-transparent bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] px-3.5 text-left text-[15px]/[20px] font-semibold whitespace-nowrap text-neutral-900 outline-none select-none transition-[border-color,box-shadow,background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:not-disabled:not-aria-invalid:not-aria-expanded:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] focus-visible:border-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] focus-visible:bg-white focus-visible:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-expanded:border-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] aria-expanded:bg-white aria-expanded:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-invalid:border-[oklch(60%_0.236_26)] disabled:cursor-not-allowed disabled:text-neutral-900/40 disabled:shadow-none dark:text-neutral-100 dark:hover:not-disabled:not-aria-invalid:not-aria-expanded:bg-neutral-900 dark:focus-visible:border-[var(--rb-accent,oklch(81%_0.16_163))] dark:focus-visible:bg-neutral-900 dark:focus-visible:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-expanded:border-[var(--rb-accent,oklch(81%_0.16_163))] dark:aria-expanded:bg-neutral-900 dark:aria-expanded:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-invalid:border-[oklch(65.2%_0.219_26)] dark:disabled:text-neutral-100/40">{e}<__mod_22728.n icon={__mod_31517.A} size={18} strokeWidth={2} aria-hidden="true" className="shrink-0 text-neutral-900/78 dark:text-neutral-100/78" /></button>{r && <div ref={u} role="listbox" aria-label="Date range" tabIndex={-1} onKeyDown={e => {
      switch (e.key) {
        case "Escape":
          e.preventDefault(), k();
          break;
        case "ArrowDown":
          e.preventDefault(), h(e => (e + 1) % f.length);
          break;
        case "ArrowUp":
          e.preventDefault(), h(e => (e - 1 + f.length) % f.length);
          break;
        case "Home":
          e.preventDefault(), h(0);
          break;
        case "End":
          e.preventDefault(), h(f.length - 1);
          break;
        case "Enter":
        case " ":
          e.preventDefault(), v(_);
          break;
        case "Tab":
          k(!1);
      }
    }} className={d("min-w-52 max-w-[min(480px,calc(100vw-2rem))] overflow-x-hidden overflow-y-auto overscroll-contain rounded-[calc(var(--rb-r-3xl,16px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] p-2 text-neutral-900 dark:text-neutral-100 outline-none shadow-[0_0_0_1px_rgb(84_62_32/0.08),0_24px_56px_-20px_rgb(84_62_32/0.34),0_6px_16px_-8px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.65),0_24px_56px_-16px_rgb(0_0_0/0.8)]", c && "transition-[opacity,scale] duration-[260ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] starting:scale-[0.94] starting:opacity-0 motion-reduce:transition-none motion-reduce:starting:scale-100", "absolute right-0 top-full z-30 mt-1.5 w-[192px]")}>{f.map((a, r) => {
        let l = a.key === e;
        return <button type="button" role="option" aria-selected={l} data-highlighted={r === _ ? "" : void 0} tabIndex={-1} onClick={() => v(r)} onPointerMove={() => h(r)} className={d("relative flex min-h-10 w-full cursor-default items-center gap-2.5 rounded-[calc(var(--rb-r-md,8px))] px-3 py-2 text-left text-[15px]/[20px] font-semibold text-neutral-900 outline-none select-none [&_svg]:shrink-0 [&_svg]:text-neutral-900/70 hover:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] focus-visible:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] data-[highlighted]:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-disabled:cursor-not-allowed aria-disabled:text-neutral-900/40 dark:text-neutral-100 dark:[&_svg]:text-neutral-100/70 dark:hover:bg-neutral-100/7 dark:focus-visible:bg-neutral-100/7 dark:data-[highlighted]:bg-neutral-100/7 dark:aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-disabled:text-neutral-100/40", "pe-8")}><span className="min-w-0 flex-1 truncate">{a.key}</span>{l && <__mod_22728.n icon={__mod_90987.A} size={18} strokeWidth={2} aria-hidden="true" className="absolute end-2" />}</button>;
      })}</div>}</div>;
}
let w = (...e) => e.filter(Boolean).join(" "),
  j = "text-neutral-900 dark:text-neutral-100",
  N = "text-neutral-900/78 dark:text-neutral-100/78",
  y = "text-neutral-900/62 dark:text-neutral-100/62",
  A = "text-[13px]/[16px] font-semibold tabular-nums",
  M = "h-10 border-b border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] px-3 text-left align-middle text-[13px]/[16px] font-bold tabular-nums whitespace-nowrap text-neutral-900/62 dark:text-neutral-100/62 first:ps-4 last:pe-4 dark:bg-neutral-100/4",
  S = "h-12 border-b border-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] px-3 align-middle whitespace-nowrap text-neutral-900 dark:text-neutral-100 group-last:border-b-0 first:ps-4 last:pe-4 dark:border-neutral-100/6",
  z = "text-right tabular-nums",
  R = "stroke-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_82%,black)] dark:stroke-[var(--rb-accent,oklch(81%_0.16_163))]",
  $ = "stroke-neutral-900/40 dark:stroke-neutral-100/45",
  D = [700, 525, 350, 175, 0],
  W = {
    "7 days": {
      total: 3102,
      delta: "+8.2%",
      positive: !0,
      series: [412, 388, 455, 470, 521, 498, 543],
      xLabels: ["Mar 3", "Mar 5", "Mar 7", "Mar 9"]
    },
    "30 days": {
      total: 12847,
      delta: "+12.4%",
      positive: !0,
      series: [360, 402, 388, 430, 455, 470, 442, 498, 512, 505, 548, 560, 595, 610, 640],
      xLabels: ["Feb 8", "Feb 15", "Feb 22", "Mar 1", "Mar 8"]
    },
    "90 days": {
      total: 41530,
      delta: "−1.6%",
      positive: !1,
      series: [520, 505, 540, 560, 548, 590, 575, 610, 600, 585, 560, 540, 505, 480, 455],
      xLabels: ["Dec 8", "Jan 7", "Feb 6", "Mar 8"]
    }
  },
  L = [{
    source: "Organic search",
    pct: .4,
    conv: "3.9%",
    trend: [30, 34, 33, 38, 42, 46, 51]
  }, {
    source: "Direct",
    pct: .24,
    conv: "5.1%",
    trend: [40, 41, 39, 43, 42, 45, 47]
  }, {
    source: "Referral",
    pct: .17,
    conv: "2.8%",
    trend: [22, 24, 23, 21, 25, 24, 26]
  }, {
    source: "Social",
    pct: .112,
    conv: "1.6%",
    trend: [18, 20, 24, 22, 19, 17, 15]
  }, {
    source: "Email",
    pct: .078,
    conv: "6.4%",
    trend: [12, 13, 12, 14, 15, 16, 18]
  }],
  C = Object.keys(W);
function I(e) {
  let a = 100 / (e.length - 1);
  return e.map((e, r) => `${0 === r ? "M" : "L"}${(r * a).toFixed(2)} ${(100 - e / 700 * 100).toFixed(2)}`).join(" ");
}
function B({
  value: e,
  onChange: a,
  baseId: r,
  panelId: n
}) {
  let s = (0, React.useRef)([]),
    i = e => {
      let r = (e + C.length) % C.length;
      a(C[r]), s.current[r]?.focus({
        preventScroll: !0
      });
    };
  return <div role="radiogroup" aria-label="Date range" onKeyDown={a => {
    let r = C.indexOf(e);
    "ArrowRight" === a.key || "ArrowDown" === a.key ? (a.preventDefault(), i(r + 1)) : "ArrowLeft" === a.key || "ArrowUp" === a.key ? (a.preventDefault(), i(r - 1)) : "Home" === a.key ? (a.preventDefault(), i(0)) : "End" === a.key && (a.preventDefault(), i(C.length - 1));
  }} className={w("inline-flex w-fit max-w-full items-stretch gap-1 rounded-[calc(var(--rb-r-full,999px)_+_min(4px,var(--rb-r-full,999px)))] bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] p-1", "h-10", "shrink-0")}>{C.map((l, i) => {
      let o = l === e;
      return <button ref={e => {
        s.current[i] = e;
      }} type="button" role="radio" id={`${r}-${i}`} aria-checked={o} aria-controls={n} tabIndex={o ? 0 : -1} onClick={() => a(l)} className="relative inline-flex min-w-0 cursor-pointer items-center justify-center gap-1.5 whitespace-nowrap [&_svg]:shrink-0 rounded-[calc(var(--rb-r-full,999px))] px-4 text-[14px]/[18px] font-bold text-neutral-900/78 dark:text-neutral-100/78 select-none transition-[background-color,color,box-shadow,outline-color,scale] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:scale-[0.96] motion-reduce:active:scale-100 hover:not-aria-checked:text-neutral-900 aria-checked:bg-white aria-checked:text-neutral-900 aria-checked:shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_2px_rgb(84_62_32/0.10),0_3px_8px_-2px_rgb(84_62_32/0.20)] disabled:cursor-not-allowed disabled:text-neutral-900/40 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:hover:not-aria-checked:text-neutral-100 dark:aria-checked:bg-[color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800))] dark:aria-checked:text-neutral-100 dark:aria-checked:shadow-[inset_0_1px_0_rgb(255_255_255/0.1),0_0_0_1px_rgb(0_0_0/0.6),0_2px_5px_-1px_rgb(0_0_0/0.6)] dark:disabled:text-neutral-100/40">{l}</button>;
    })}</div>;
}
let P = (...e) => e.filter(Boolean).join(" "),
  O = "text-neutral-900 dark:text-neutral-100",
  F = "text-neutral-900/78 dark:text-neutral-100/78",
  T = "text-neutral-900/62 dark:text-neutral-100/62",
  U = "text-[14px]/[20px] font-medium",
  V = "rounded-[calc(var(--rb-r-lg,10px))] bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-100/8",
  H = [{
    label: "Active users",
    value: "8,472",
    delta: "+3.2%",
    positive: !0,
    spark: [40, 44, 42, 48, 52, 50, 58, 62]
  }, {
    label: "Sessions",
    value: "21,908",
    delta: "+5.1%",
    positive: !0,
    spark: [60, 62, 66, 64, 70, 74, 78, 83]
  }, {
    label: "Avg. session",
    value: "4m 12s",
    delta: "−1.4%",
    positive: !1,
    spark: [55, 54, 56, 52, 51, 50, 49, 47]
  }, {
    label: "Bounce rate",
    value: "38.6%",
    delta: "+0.9 pp",
    positive: !1,
    spark: [30, 31, 33, 32, 34, 35, 37, 39]
  }],
  K = [520, 486, 543, 610, 588, 640, 705, 672, 718, 690, 748, 760, 795, 812],
  J = [{
    path: "/",
    views: "48,210"
  }, {
    path: "/pricing",
    views: "22,984"
  }, {
    path: "/docs/quickstart",
    views: "18,663"
  }, {
    path: "/changelog",
    views: "9,120"
  }, {
    path: "/blog/series-b",
    views: "6,845"
  }],
  G = [{
    label: "Desktop",
    pct: 62
  }, {
    label: "Mobile",
    pct: 31
  }, {
    label: "Tablet",
    pct: 7
  }],
  q = [{
    label: "Visited",
    value: "21,908"
  }, {
    label: "Signed up",
    value: "3,914"
  }, {
    label: "Activated",
    value: "2,180"
  }, {
    label: "Subscribed",
    value: "1,024"
  }];
function Q({
  values: e
}) {
  let a = Math.min(...e),
    r = Math.max(...e) - a || 1,
    l = e.map((t, l) => {
      let n = l / (e.length - 1) * 100;
      return `${n.toFixed(2)},${(92 - (t - a) / r * 84).toFixed(2)}`;
    }).join(" ");
  return <svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden={!0} className="hidden h-8 w-16 shrink-0 @min-[13rem]:block"><polyline points={l} fill="none" vectorEffect="non-scaling-stroke" className="stroke-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_82%,black)] dark:stroke-[var(--rb-accent,oklch(81%_0.16_163))]" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /></svg>;
}
function X({
  className: e
}) {
  return <span className={P(V, "block h-3", e)} />;
}
function Y({
  title: e,
  onRefresh: a,
  onHide: r
}) {
  let s = [{
      label: "Refresh data",
      run: a
    }, {
      label: "Hide widget",
      run: r
    }],
    [i, o] = (0, React.useState)(!1),
    [c, d] = (0, React.useState)(!1),
    [x, _] = (0, React.useState)(0),
    h = (0, React.useRef)(null),
    b = (0, React.useRef)(null),
    p = (0, React.useRef)(null);
  (0, React.useEffect)(() => {
    if (!i) return;
    let e = h.current?.ownerDocument ?? document,
      a = e => {
        h.current?.contains(e.target) || o(!1);
      };
    return e.addEventListener("pointerdown", a), () => e.removeEventListener("pointerdown", a);
  }, [i]), (0, React.useEffect)(() => {
    i && p.current?.focus({
      preventScroll: !0
    });
  }, [i]);
  let u = (e, a) => {
      _(e), d(a), o(!0);
    },
    m = (e = !0) => {
      o(!1), e && b.current?.focus({
        preventScroll: !0
      });
    },
    k = e => {
      m(), s[e].run();
    };
  return <div ref={h} className="relative shrink-0"><button ref={b} type="button" aria-label={`${e} options`} aria-haspopup="menu" aria-expanded={i} onClick={() => i ? m() : u(0, !0)} onKeyDown={e => {
      "ArrowDown" === e.key ? (e.preventDefault(), u(0, !1)) : "ArrowUp" === e.key && (e.preventDefault(), u(s.length - 1, !1));
    }} className={P("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-transparent text-neutral-900 hover:not-disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] active:not-disabled:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] disabled:text-neutral-900/40 dark:text-neutral-100 dark:hover:not-disabled:bg-neutral-100/8 dark:active:not-disabled:bg-neutral-100/12 dark:aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:disabled:text-neutral-100/40", "size-8 rounded-[calc(var(--rb-r-full,999px))]")}><__mod_22728.n icon={__mod_59649.A} size={18} strokeWidth={2} aria-hidden="true" /></button>{i && <div ref={p} role="menu" aria-label={`${e} options`} tabIndex={-1} onKeyDown={e => {
      switch (e.key) {
        case "Escape":
          e.preventDefault(), m();
          break;
        case "ArrowDown":
          e.preventDefault(), _(e => (e + 1) % s.length);
          break;
        case "ArrowUp":
          e.preventDefault(), _(e => (e - 1 + s.length) % s.length);
          break;
        case "Home":
          e.preventDefault(), _(0);
          break;
        case "End":
          e.preventDefault(), _(s.length - 1);
          break;
        case "Enter":
        case " ":
          e.preventDefault(), k(x);
          break;
        case "Tab":
          m(!1);
      }
    }} className={P("min-w-52 max-w-[min(480px,calc(100vw-2rem))] overflow-x-hidden overflow-y-auto overscroll-contain rounded-[calc(var(--rb-r-3xl,16px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] p-2 text-neutral-900 dark:text-neutral-100 outline-none shadow-[0_0_0_1px_rgb(84_62_32/0.08),0_24px_56px_-20px_rgb(84_62_32/0.34),0_6px_16px_-8px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.65),0_24px_56px_-16px_rgb(0_0_0/0.8)]", c && "transition-[opacity,scale] duration-[260ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] starting:scale-[0.94] starting:opacity-0 motion-reduce:transition-none motion-reduce:starting:scale-100", "absolute right-0 top-full z-30 mt-1.5 w-[160px] min-w-[160px]")}>{s.map((e, a) => <button type="button" role="menuitem" tabIndex={-1} data-highlighted={a === x ? "" : void 0} onClick={() => k(a)} onPointerMove={() => _(a)} className="relative flex min-h-10 w-full cursor-default items-center gap-2.5 rounded-[calc(var(--rb-r-md,8px))] px-3 py-2 text-left text-[15px]/[20px] font-semibold text-neutral-900 outline-none select-none [&_svg]:shrink-0 [&_svg]:text-neutral-900/70 hover:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] focus-visible:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] data-[highlighted]:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-disabled:cursor-not-allowed aria-disabled:text-neutral-900/40 dark:text-neutral-100 dark:[&_svg]:text-neutral-100/70 dark:hover:bg-neutral-100/7 dark:focus-visible:bg-neutral-100/7 dark:data-[highlighted]:bg-neutral-100/7 dark:aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-disabled:text-neutral-100/40">{e.label}</button>)}</div>}</div>;
}
function Z({
  id: e,
  title: a,
  className: r,
  refreshing: l,
  skeleton: n,
  onRefresh: s,
  onHide: i,
  children: o
}) {
  return <section className={P("relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] text-neutral-900 dark:text-neutral-100 shadow-[0_0_0_1px_rgb(84_62_32/0.07),0_1px_2px_rgb(84_62_32/0.06),0_8px_22px_-10px_rgb(84_62_32/0.20)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_0_0_1px_rgb(0_0_0/0.6),0_10px_24px_-12px_rgb(0_0_0/0.8)]", "p-4", r)} aria-busy={l}><div className="flex items-center justify-between gap-3"><h2 className="min-w-0 truncate text-[16px]/[20px] font-extrabold text-neutral-900 dark:text-neutral-100">{a}</h2><Y title={a} onRefresh={() => s(e)} onHide={() => i(e)} /></div>{l ? <div aria-hidden={!0}>{n}</div> : o}</section>;
}
let ea = (...e) => e.filter(Boolean).join(" "),
  er = "text-neutral-900 dark:text-neutral-100",
  et = "text-neutral-900/78 dark:text-neutral-100/78",
  el = "text-neutral-900/62 dark:text-neutral-100/62",
  en = "inline-flex items-start gap-1.5 text-[15px]/[20px] font-bold tabular-nums",
  es = "text-neutral-900/78 dark:text-neutral-100/78",
  ei = "text-[oklch(49%_0.1_68)] dark:text-[oklch(80%_0.13_68)]",
  eo = "text-[oklch(51%_0.18_26)] dark:text-[oklch(76%_0.14_26)]",
  ec = "min-w-0 truncate text-[16px]/[20px] font-extrabold text-neutral-900 dark:text-neutral-100",
  ed = "relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 shadow-[inset_0_0_0_1px_rgb(84_62_32/0.05)] dark:shadow-[inset_0_0_0_1px_rgb(255_255_255/0.05)]",
  ex = "flex min-h-12 min-w-0 shrink-0 items-center gap-2 px-4 has-[button]:pe-2.5",
  e_ = "mx-1 mb-1 flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-5xl,22px))] border border-transparent bg-white dark:bg-neutral-950 shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] [&:has(+*)]:mb-0",
  eh = "h-10 border-b border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] px-3 text-left align-middle text-[13px]/[16px] font-bold tabular-nums whitespace-nowrap text-neutral-900/62 dark:text-neutral-100/62 first:ps-4 last:pe-4 dark:bg-neutral-100/4",
  eb = "h-12 border-b border-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] px-3 align-middle whitespace-nowrap text-neutral-900 dark:text-neutral-100 group-last:border-b-0 first:ps-4 last:pe-4 dark:border-neutral-100/6",
  ep = "text-right tabular-nums",
  eu = {
    operational: es,
    degraded: ei,
    down: eo,
    maintenance: "text-neutral-900/62 dark:text-neutral-100/62"
  },
  em = {
    operational: "Operational",
    degraded: "Degraded",
    down: "Down",
    maintenance: "Maintenance"
  },
  ek = [{
    label: "Uptime, 30 days",
    value: "99.98%",
    delta: "+0.02 pp",
    positive: !0,
    spark: [96, 97, 95, 98, 97, 99, 98, 99]
  }, {
    label: "Open incidents",
    value: "2",
    delta: "+1",
    positive: !1,
    spark: [1, 0, 1, 2, 1, 1, 2, 2]
  }, {
    label: "P95 latency",
    value: "142 ms",
    delta: "+18 ms",
    positive: !1,
    spark: [118, 124, 121, 130, 128, 135, 138, 142]
  }, {
    label: "Error rate",
    value: "0.04%",
    delta: "−0.01 pp",
    positive: !0,
    spark: [6, 7, 5, 6, 4, 5, 4, 4]
  }];
function ef({
  values: e
}) {
  let a = Math.min(...e),
    r = Math.max(...e) - a || 1,
    l = e.map((t, l) => {
      let n = l / (e.length - 1) * 100;
      return `${n.toFixed(2)},${(92 - (t - a) / r * 84).toFixed(2)}`;
    }).join(" ");
  return <svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden={!0} className="hidden h-8 w-16 shrink-0 @min-[13rem]:block"><polyline points={l} fill="none" vectorEffect="non-scaling-stroke" className="stroke-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_82%,black)] dark:stroke-[var(--rb-accent,oklch(81%_0.16_163))]" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /></svg>;
}
let ev = [{
    name: "REST API",
    region: "us-east-1",
    latency: "142 ms",
    uptime: "99.98%",
    status: "operational"
  }, {
    name: "REST API",
    region: "eu-west-1",
    latency: "168 ms",
    uptime: "99.95%",
    status: "operational"
  }, {
    name: "Web app",
    region: "global edge",
    latency: "61 ms",
    uptime: "100.00%",
    status: "operational"
  }, {
    name: "Auth service",
    region: "us-east-1",
    latency: "118 ms",
    uptime: "99.99%",
    status: "operational"
  }, {
    name: "Postgres primary",
    region: "us-east-1",
    latency: "4 ms",
    uptime: "99.97%",
    status: "operational"
  }, {
    name: "Search cluster",
    region: "us-west-2",
    latency: "402 ms",
    uptime: "99.62%",
    status: "degraded"
  }, {
    name: "Webhooks worker",
    region: "us-east-1",
    latency: null,
    uptime: "96.20%",
    status: "down"
  }, {
    name: "Object storage",
    region: "eu-west-1",
    latency: "33 ms",
    uptime: "99.99%",
    status: "operational"
  }, {
    name: "Analytics pipeline",
    region: "us-west-2",
    latency: null,
    uptime: null,
    status: "maintenance"
  }],
  eg = [{
    title: "Elevated search latency in us-west-2",
    state: "Investigating",
    when: "14 min ago",
    tone: ei
  }, {
    title: "Webhook delivery failures",
    state: "Identified",
    when: "38 min ago",
    tone: eo
  }, {
    title: "Analytics backfill maintenance",
    state: "Scheduled",
    when: "2 hours ago",
    tone: "text-neutral-900 dark:text-neutral-100"
  }, {
    title: "Auth latency spike",
    state: "Resolved",
    when: "Yesterday",
    tone: es
  }, {
    title: "CDN cache purge delays",
    state: "Resolved",
    when: "2 days ago",
    tone: es
  }, {
    title: "Postgres failover drill",
    state: "Resolved",
    when: "Mar 4",
    tone: es
  }, {
    title: "Rate limit errors on /v1/events",
    state: "Resolved",
    when: "Mar 2",
    tone: es
  }];
let ej = (...e) => e.filter(Boolean).join(" "),
  eN = "text-neutral-900 dark:text-neutral-100",
  ey = "text-neutral-900/62 dark:text-neutral-100/62",
  eA = "text-[14px]/[20px] font-medium",
  eM = "text-[13px]/[16px] font-semibold tabular-nums",
  eS = "relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] text-neutral-900 dark:text-neutral-100 shadow-[0_0_0_1px_rgb(84_62_32/0.07),0_1px_2px_rgb(84_62_32/0.06),0_8px_22px_-10px_rgb(84_62_32/0.20)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_0_0_1px_rgb(0_0_0/0.6),0_10px_24px_-12px_rgb(0_0_0/0.8)]",
  ez = "min-w-0 truncate text-[16px]/[20px] font-extrabold text-neutral-900 dark:text-neutral-100",
  eR = "text-[14px]/[20px] font-medium text-neutral-900/78 dark:text-neutral-100/78",
  e$ = "stroke-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_82%,black)] dark:stroke-[var(--rb-accent,oklch(81%_0.16_163))]",
  eD = "stroke-neutral-900/40 dark:stroke-neutral-100/45",
  eW = [{
    label: "API requests",
    used: "1.24M",
    limit: "2M",
    pct: 62
  }, {
    label: "Seats",
    used: "18",
    limit: "20",
    pct: 90
  }, {
    label: "Storage",
    used: "41.2 GB",
    limit: "50 GB",
    pct: 82
  }, {
    label: "Build minutes",
    used: "4,820",
    limit: "5,000",
    pct: 96
  }, {
    label: "Bandwidth",
    used: "320 GB",
    limit: "1 TB",
    pct: 31
  }],
  eL = [9e3, 6e3, 3e3, 0],
  eC = [[1, 0], [4, 900], [7, 1750], [10, 2600], [13, 3450], [16, 4300], [18, 4820]],
  eI = [[18, 4820], [22, 5900], [26, 6980], [31, 8330]],
  eB = ["Mar 1", "Mar 11", "Mar 21", "Mar 31"];
function eE(e) {
  return e.map(([e, a], r) => `${0 === r ? "M" : "L"}${((e - 1) / 30 * 100).toFixed(2)} ${(100 - a / 9e3 * 100).toFixed(2)}`).join(" ");
}
let eP = [{
    key: "views",
    label: "Views"
  }, {
    key: "signups",
    label: "Signups"
  }, {
    key: "revenue",
    label: "Revenue"
  }],
  eO = (...e) => e.filter(Boolean).join(" "),
  eF = "bg-white dark:bg-neutral-950",
  eT = "text-neutral-900 dark:text-neutral-100",
  eU = "text-neutral-900/78 dark:text-neutral-100/78",
  eV = "h-10 border-b border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] px-3 text-left align-middle text-[13px]/[16px] font-bold tabular-nums whitespace-nowrap text-neutral-900/62 dark:text-neutral-100/62 first:ps-4 last:pe-4 dark:bg-neutral-100/4",
  eH = "h-12 border-b border-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] px-3 align-middle whitespace-nowrap text-neutral-900 dark:text-neutral-100 group-last:border-b-0 first:ps-4 last:pe-4 dark:border-neutral-100/6",
  eK = "text-right tabular-nums",
  eJ = [30, 33, 32, 38, 42, 47, 52],
  eG = [52, 50, 51, 47, 44, 40, 37],
  eq = [40, 42, 41, 43, 42, 44, 43],
  eQ = (e, a) => ({
    v: e,
    d: a,
    s: eJ
  }),
  eX = (e, a) => ({
    v: e,
    d: a,
    s: eG
  }),
  eY = (e, a) => ({
    v: e,
    d: a,
    s: eq
  }),
  eZ = [{
    name: "Organic search",
    views: eQ("182,400", "+9.2%"),
    signups: eQ("5,140", "+7.4%"),
    revenue: eQ("$128,900", "+11.1%")
  }, {
    name: "Paid search",
    views: eQ("96,200", "+3.1%"),
    signups: eQ("3,082", "+2.4%"),
    revenue: eQ("$77,400", "+5.0%")
  }, {
    name: "Direct",
    views: eX("71,300", "−1.8%"),
    signups: eX("2,190", "−2.2%"),
    revenue: eX("$58,600", "−0.9%")
  }, {
    name: "Email",
    views: eQ("33,900", "+6.7%"),
    signups: eQ("1,000", "+8.1%"),
    revenue: eQ("$41,200", "+9.4%")
  }, {
    name: "Referral",
    views: eQ("22,800", "+4.3%"),
    signups: eQ("690", "+3.0%"),
    revenue: eQ("$18,400", "+2.6%")
  }, {
    name: "Social organic",
    views: eX("18,400", "−5.1%"),
    signups: eX("420", "−6.8%"),
    revenue: eX("$9,800", "−4.2%")
  }, {
    name: "Social paid",
    views: eQ("14,600", "+12.9%"),
    signups: eQ("315", "+10.4%"),
    revenue: eQ("$12,600", "+14.2%")
  }, {
    name: "Affiliates",
    views: eY("9,200", "+0.4%"),
    signups: eY("240", "−0.2%"),
    revenue: eY("$14,900", "+0.6%")
  }, {
    name: "Marketplace",
    views: eQ("6,400", "+18.3%"),
    signups: eQ("180", "+16.0%"),
    revenue: eQ("$22,300", "+21.5%")
  }, {
    name: "Podcast ads",
    views: eQ("12,800", "+7.7%"),
    signups: eQ("300", "+5.9%"),
    revenue: eQ("$19,400", "+8.8%")
  }, {
    name: "Webinars",
    views: eQ("8,600", "+2.0%"),
    signups: eQ("260", "+3.6%"),
    revenue: eQ("$16,800", "+4.9%")
  }, {
    name: "Partnerships",
    views: eY("5,900", "+0.9%"),
    signups: eY("150", "+0.0%"),
    revenue: eY("$11,200", "+1.3%")
  }, {
    name: "Community",
    views: eX("4,100", "−3.4%"),
    signups: eX("120", "−4.1%"),
    revenue: eX("$3,600", "−2.8%")
  }, {
    name: "Press mentions",
    views: eX("3,200", "−8.9%"),
    signups: eX("95", "−7.2%"),
    revenue: eX("$2,100", "−6.0%")
  }, {
    name: "Newsletter sponsorships",
    views: eQ("7,300", "+6.2%"),
    signups: eQ("205", "+4.8%"),
    revenue: eQ("$13,700", "+7.9%")
  }, {
    name: "Conferences",
    views: eX("2,600", "−2.5%"),
    signups: eX("88", "−3.3%"),
    revenue: eX("$8,400", "−1.7%")
  }];
function e0({
  value: e,
  onChange: a,
  baseId: r,
  panelId: n
}) {
  let s = (0, React.useRef)([]),
    i = e => {
      let r = (e + eP.length) % eP.length;
      a(eP[r].key), s.current[r]?.focus({
        preventScroll: !0
      });
    };
  return <div role="radiogroup" aria-label="Metric" onKeyDown={a => {
    let r = eP.findIndex(a => a.key === e);
    "ArrowRight" === a.key || "ArrowDown" === a.key ? (a.preventDefault(), i(r + 1)) : "ArrowLeft" === a.key || "ArrowUp" === a.key ? (a.preventDefault(), i(r - 1)) : "Home" === a.key ? (a.preventDefault(), i(0)) : "End" === a.key && (a.preventDefault(), i(eP.length - 1));
  }} className={eO("inline-flex w-fit max-w-full items-stretch gap-1 rounded-[calc(var(--rb-r-full,999px)_+_min(4px,var(--rb-r-full,999px)))] bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] p-1", "h-10", "shrink-0")}>{eP.map((l, i) => {
      let o = l.key === e;
      return <button ref={e => {
        s.current[i] = e;
      }} type="button" role="radio" id={`${r}-${i}`} aria-checked={o} aria-controls={n} tabIndex={o ? 0 : -1} onClick={() => a(l.key)} className="relative inline-flex min-w-0 cursor-pointer items-center justify-center gap-1.5 whitespace-nowrap [&_svg]:shrink-0 rounded-[calc(var(--rb-r-full,999px))] px-4 text-[14px]/[18px] font-bold text-neutral-900/78 dark:text-neutral-100/78 select-none transition-[background-color,color,box-shadow,outline-color,scale] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:scale-[0.96] motion-reduce:active:scale-100 hover:not-aria-checked:text-neutral-900 aria-checked:bg-white aria-checked:text-neutral-900 aria-checked:shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_2px_rgb(84_62_32/0.10),0_3px_8px_-2px_rgb(84_62_32/0.20)] disabled:cursor-not-allowed disabled:text-neutral-900/40 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:hover:not-aria-checked:text-neutral-100 dark:aria-checked:bg-[color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800))] dark:aria-checked:text-neutral-100 dark:aria-checked:shadow-[inset_0_1px_0_rgb(255_255_255/0.1),0_0_0_1px_rgb(0_0_0/0.6),0_2px_5px_-1px_rgb(0_0_0/0.6)] dark:disabled:text-neutral-100/40">{l.label}</button>;
    })}</div>;
}
let e2 = (...e) => e.filter(Boolean).join(" "),
  e5 = "text-neutral-900 dark:text-neutral-100",
  e6 = "text-neutral-900/62 dark:text-neutral-100/62",
  e8 = "text-[13px]/[16px] font-semibold tabular-nums",
  e4 = "relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] text-neutral-900 dark:text-neutral-100 shadow-[0_0_0_1px_rgb(84_62_32/0.07),0_1px_2px_rgb(84_62_32/0.06),0_8px_22px_-10px_rgb(84_62_32/0.20)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_0_0_1px_rgb(0_0_0/0.6),0_10px_24px_-12px_rgb(0_0_0/0.8)]",
  e9 = "@container rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.07),0_1px_2px_rgb(84_62_32/0.06),0_8px_22px_-10px_rgb(84_62_32/0.20)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_0_0_1px_rgb(0_0_0/0.6),0_10px_24px_-12px_rgb(0_0_0/0.8)] p-1",
  e3 = "grid grid-cols-2 gap-1 [&>:last-child:nth-child(odd)]:col-span-full @3xl:grid-flow-col @3xl:grid-cols-none @3xl:auto-cols-fr @3xl:[&>:last-child:nth-child(odd)]:col-auto",
  e7 = "flex min-w-0 flex-col gap-2 rounded-[calc(var(--rb-r-5xl,22px))] bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] px-3 py-3.5 dark:bg-neutral-100/4",
  ae = "text-[14px]/[20px] font-bold text-neutral-900/78 dark:text-neutral-100/78",
  aa = "inline-flex min-w-0 flex-wrap items-baseline gap-x-1 text-[13px]/[18px] font-bold tabular-nums [&>svg]:self-center text-neutral-900/78 dark:text-neutral-100/78",
  ar = "rounded-[calc(var(--rb-r-lg,10px))] bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-100/8",
  at = [{
    key: "ready",
    label: "Ready"
  }, {
    key: "loading",
    label: "Loading"
  }, {
    key: "empty",
    label: "Empty"
  }],
  al = [160, 120, 80, 40, 0],
  an = [109, 112, 118, 121, 127, 131, 136, 140, 144, 148],
  as = ["Jun", "Sep", "Dec", "Mar"],
  ai = [{
    label: "New business",
    value: "$9.1K",
    delta: "+12.4%",
    positive: !0
  }, {
    label: "Expansion",
    value: "$3.6K",
    delta: "+4.8%",
    positive: !0
  }, {
    label: "Churn",
    value: "$8.5K",
    delta: "+6.1%",
    positive: !1
  }];
function ao(e) {
  let a = 100 / (e.length - 1);
  return e.map((e, r) => `${0 === r ? "M" : "L"}${(r * a).toFixed(2)} ${(100 - e / 160 * 100).toFixed(2)}`).join(" ");
}
function ac({
  className: e
}) {
  return <span className={e2(ar, "block", e)} />;
}
function ad({
  value: e,
  onChange: a,
  baseId: r,
  panelId: n
}) {
  let s = (0, React.useRef)([]),
    i = e => {
      let r = (e + at.length) % at.length;
      a(at[r].key), s.current[r]?.focus({
        preventScroll: !0
      });
    };
  return <div role="radiogroup" aria-label="View state" onKeyDown={a => {
    let r = at.findIndex(a => a.key === e);
    "ArrowRight" === a.key || "ArrowDown" === a.key ? (a.preventDefault(), i(r + 1)) : "ArrowLeft" === a.key || "ArrowUp" === a.key ? (a.preventDefault(), i(r - 1)) : "Home" === a.key ? (a.preventDefault(), i(0)) : "End" === a.key && (a.preventDefault(), i(at.length - 1));
  }} className={e2("inline-flex w-fit max-w-full items-stretch gap-1 rounded-[calc(var(--rb-r-full,999px)_+_min(4px,var(--rb-r-full,999px)))] bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] p-1", "h-10", "shrink-0")}>{at.map((l, i) => {
      let o = l.key === e;
      return <button ref={e => {
        s.current[i] = e;
      }} type="button" role="radio" id={`${r}-${i}`} aria-checked={o} aria-controls={n} tabIndex={o ? 0 : -1} onClick={() => a(l.key)} className="relative inline-flex min-w-0 cursor-pointer items-center justify-center gap-1.5 whitespace-nowrap [&_svg]:shrink-0 rounded-[calc(var(--rb-r-full,999px))] px-4 text-[14px]/[18px] font-bold text-neutral-900/78 dark:text-neutral-100/78 select-none transition-[background-color,color,box-shadow,outline-color,scale] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:scale-[0.96] motion-reduce:active:scale-100 hover:not-aria-checked:text-neutral-900 aria-checked:bg-white aria-checked:text-neutral-900 aria-checked:shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_2px_rgb(84_62_32/0.10),0_3px_8px_-2px_rgb(84_62_32/0.20)] disabled:cursor-not-allowed disabled:text-neutral-900/40 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:hover:not-aria-checked:text-neutral-100 dark:aria-checked:bg-[color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800))] dark:aria-checked:text-neutral-100 dark:aria-checked:shadow-[inset_0_1px_0_rgb(255_255_255/0.1),0_0_0_1px_rgb(0_0_0/0.6),0_2px_5px_-1px_rgb(0_0_0/0.6)] dark:disabled:text-neutral-100/40">{l.label}</button>;
    })}</div>;
}
let aw = (...e) => e.filter(Boolean).join(" "),
  aj = "text-neutral-900 dark:text-neutral-100",
  aN = "text-neutral-900/62 dark:text-neutral-100/62",
  ay = "text-[15px]/[20px] font-bold",
  aA = "text-[13px]/[16px] font-semibold tabular-nums",
  aM = "relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] text-neutral-900 dark:text-neutral-100 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] active:not-disabled:translate-y-px active:not-disabled:shadow-[inset_0_1px_3px_rgb(84_62_32/0.16),0_0_0_1px_rgb(84_62_32/0.10)] dark:active:not-disabled:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14),0_0_0_1px_rgb(84_62_32/0.10)] dark:aria-expanded:bg-neutral-800 dark:aria-expanded:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] disabled:bg-none disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] disabled:text-neutral-900/40 disabled:shadow-none dark:disabled:bg-neutral-800/60 dark:disabled:text-neutral-100/40",
  aS = "relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-transparent text-neutral-900 hover:not-disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] active:not-disabled:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] disabled:text-neutral-900/40 dark:text-neutral-100 dark:hover:not-disabled:bg-neutral-100/8 dark:active:not-disabled:bg-neutral-100/12 dark:aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:disabled:text-neutral-100/40",
  az = "h-10 gap-2 rounded-[calc(var(--rb-r-full,999px))] px-5 text-[15px]/[20px] font-bold",
  aR = "size-8 rounded-[calc(var(--rb-r-full,999px))]",
  a$ = "relative inline-flex size-8 shrink-0 overflow-hidden rounded-full select-none",
  aD = "flex size-full items-center justify-center rounded-[inherit] bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_24%,white)] text-[12px]/[16px] font-extrabold tabular-nums text-neutral-900 dark:text-neutral-100 dark:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_22%,var(--color-neutral-900))]",
  aW = "h-10 border-b border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] px-3 text-left align-middle text-[13px]/[16px] font-bold tabular-nums whitespace-nowrap text-neutral-900/62 dark:text-neutral-100/62 first:ps-4 last:pe-4 dark:bg-neutral-100/4",
  aL = "h-12 border-b border-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] px-3 align-middle whitespace-nowrap text-neutral-900 dark:text-neutral-100 group-last:border-b-0 first:ps-4 last:pe-4 dark:border-neutral-100/6",
  aC = "stroke-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_82%,black)] dark:stroke-[var(--rb-accent,oklch(81%_0.16_163))]",
  aI = (e, a, r) => Math.min(r, Math.max(a, e)),
  aB = (e, a) => .5 * Math.sin(.82 * a + e) + .34 * Math.sin(.29 * a + 1.9 * e),
  aE = [{
    label: "Net revenue",
    scope: "atlas.dev",
    period: "28 days",
    value: "$6.2k",
    delta: 12.4,
    series: Array.from({
      length: 28
    }, (e, a) => aI(58 + 34 * aB(1.4, a), 8, 100))
  }, {
    label: "Signups",
    scope: "All channels",
    period: "28 days",
    value: 4238..toLocaleString("en-US"),
    delta: 6.1,
    series: Array.from({
      length: 28
    }, (e, a) => aI(54 + 38 * aB(4.1, a), 8, 100))
  }, {
    label: "Active licenses",
    scope: "Atlas Cloud",
    period: "28 days",
    value: 1907..toLocaleString("en-US"),
    delta: -2.3,
    series: Array.from({
      length: 28
    }, (e, a) => aI(62 + 30 * aB(7.7, a), 8, 100))
  }],
  aP = {
    progress: "In progress",
    planned: "Planned",
    backlog: "Backlog",
    blocked: "Blocked"
  },
  aO = {
    progress: "text-neutral-900 dark:text-neutral-100",
    planned: "text-neutral-900 dark:text-neutral-100",
    backlog: "text-neutral-900/62 dark:text-neutral-100/62",
    blocked: "text-[oklch(49%_0.1_68)] dark:text-[oklch(80%_0.13_68)]"
  },
  aF = [{
    id: "m1",
    name: "Access Matrix",
    kind: "System",
    owner: "Nora Vale",
    host: "admin.atlas.dev",
    done: 11,
    total: 26,
    start: "Apr 22",
    end: "May 06",
    window: 14,
    stage: "progress",
    starred: !0
  }, {
    id: "m2",
    name: "API Console",
    kind: "Feature",
    owner: "Lena Wade",
    host: "api.atlas.dev",
    done: 29,
    total: 32,
    start: "Apr 12",
    end: "Apr 26",
    window: 14,
    stage: "progress",
    starred: !0
  }, {
    id: "m3",
    name: "Block Library",
    kind: "Feature",
    owner: "Sofia Romero",
    host: "blocks.atlas.dev",
    done: 10,
    total: 30,
    start: "Apr 24",
    end: "May 10",
    window: 16,
    stage: "planned",
    starred: !1
  }, {
    id: "m4",
    name: "Data Retention",
    kind: "System",
    owner: "Kenji Tan",
    host: "privacy.atlas.dev",
    done: 7,
    total: 32,
    start: "Apr 27",
    end: "May 14",
    window: 17,
    stage: "backlog",
    starred: !1
  }, {
    id: "m5",
    name: "Docs Portal",
    kind: "Area",
    owner: "Nina Santos",
    host: "docs.atlas.dev",
    done: 2,
    total: 14,
    start: "Apr 21",
    end: "May 05",
    window: 14,
    stage: "blocked",
    starred: !1
  }, {
    id: "m6",
    name: "Help Center",
    kind: "Area",
    owner: "Sofia Romero",
    host: "help.atlas.dev",
    done: 9,
    total: 23,
    start: "Apr 23",
    end: "May 11",
    window: 18,
    stage: "planned",
    starred: !1
  }, {
    id: "m7",
    name: "Identity Broker",
    kind: "System",
    owner: "Kenji Tan",
    host: "id.atlas.dev",
    done: 24,
    total: 27,
    start: "Apr 08",
    end: "Apr 25",
    window: 17,
    stage: "progress",
    starred: !1
  }, {
    id: "m8",
    name: "Ledger Export",
    kind: "Feature",
    owner: "Marco Bianchi",
    host: "billing.atlas.dev",
    done: 5,
    total: 21,
    start: "Apr 29",
    end: "May 19",
    window: 20,
    stage: "backlog",
    starred: !1
  }, {
    id: "m9",
    name: "Notification Hub",
    kind: "Feature",
    owner: "Lena Wade",
    host: "notify.atlas.dev",
    done: 18,
    total: 24,
    start: "Apr 15",
    end: "Apr 30",
    window: 15,
    stage: "progress",
    starred: !0
  }, {
    id: "m10",
    name: "Search Index",
    kind: "System",
    owner: "Nora Vale",
    host: "search.atlas.dev",
    done: 13,
    total: 19,
    start: "Apr 18",
    end: "May 02",
    window: 14,
    stage: "progress",
    starred: !1
  }, {
    id: "m11",
    name: "Usage Meter",
    kind: "Feature",
    owner: "Marco Bianchi",
    host: "meter.atlas.dev",
    done: 3,
    total: 18,
    start: "May 02",
    end: "May 22",
    window: 20,
    stage: "planned",
    starred: !1
  }, {
    id: "m12",
    name: "Webhook Relay",
    kind: "System",
    owner: "Nina Santos",
    host: "hooks.atlas.dev",
    done: 16,
    total: 20,
    start: "Apr 11",
    end: "Apr 28",
    window: 17,
    stage: "progress",
    starred: !1
  }],
  aT = e => e.split(/[\s-]+/).filter(Boolean).slice(0, 2).map(e => e[0]?.toUpperCase()).join(""),
  aU = {
    blocked: 0,
    progress: 1,
    planned: 2,
    backlog: 3
  };
function aV({
  series: e
}) {
  let {
    stroke: a,
    fill: r
  } = (0, React.useMemo)(() => {
    let a = Math.max(...e),
      r = Math.min(...e),
      t = a => a / (e.length - 1) * 130 + 1,
      l = e => 37 - (e - r) / (a - r || 1) * 32,
      n = (0, __mod_46667.A)().x((e, a) => t(a)).y(e => l(e)).curve(__mod_4670.G),
      s = (0, __mod_40144.A)().x((e, a) => t(a)).y0(40).y1(e => l(e)).curve(__mod_4670.G);
    return {
      stroke: n(e) ?? "",
      fill: s(e) ?? ""
    };
  }, [e]);
  return <svg aria-hidden="true" viewBox="0 0 132 40" preserveAspectRatio="none" className="h-10 w-full overflow-visible"><path d={r} className="fill-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] dark:fill-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_16%,transparent)]" /><path d={a} fill="none" vectorEffect="non-scaling-stroke" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={aC} /></svg>;
}
let aH = 2 * Math.PI * 14;
function aK({
  pct: e
}) {
  return <svg aria-hidden="true" width={34} height={34} viewBox="0 0 34 34" className="shrink-0 -rotate-90"><circle cx={17} cy={17} r={14} fill="none" strokeWidth={3} className="stroke-neutral-900/12 dark:stroke-neutral-100/14" /><circle cx={17} cy={17} r={14} fill="none" strokeWidth={3} strokeLinecap="round" strokeDasharray={aH} strokeDashoffset={aH - aI(e, 0, 100) / 100 * aH} className={aC} /></svg>;
}
let aZ = (...e) => e.filter(Boolean).join(" "),
  a0 = "bg-white dark:bg-neutral-950",
  a1 = "text-neutral-900 dark:text-neutral-100",
  a2 = "text-neutral-900/62 dark:text-neutral-100/62",
  a5 = "text-[14px]/[20px] font-medium",
  a6 = "text-[15px]/[20px] font-bold",
  a8 = "text-[13px]/[16px] font-semibold tabular-nums",
  a4 = "bg-[oklch(80%_0.12_220)] dark:bg-[oklch(80%_0.12_220)]",
  a9 = "bg-[oklch(82%_0.11_345)] dark:bg-[oklch(82%_0.11_345)]",
  a3 = "relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] text-neutral-900 dark:text-neutral-100 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] active:not-disabled:translate-y-px active:not-disabled:shadow-[inset_0_1px_3px_rgb(84_62_32/0.16),0_0_0_1px_rgb(84_62_32/0.10)] dark:active:not-disabled:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14),0_0_0_1px_rgb(84_62_32/0.10)] dark:aria-expanded:bg-neutral-800 dark:aria-expanded:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] disabled:bg-none disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] disabled:text-neutral-900/40 disabled:shadow-none dark:disabled:bg-neutral-800/60 dark:disabled:text-neutral-100/40",
  a7 = "size-10 rounded-[calc(var(--rb-r-full,999px))]",
  re = "inline-flex items-start gap-1.5 text-[15px]/[20px] font-bold tabular-nums",
  ra = "relative inline-flex size-8 shrink-0 overflow-hidden rounded-full select-none",
  rr = "flex size-full items-center justify-center rounded-[inherit] bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_24%,white)] text-[12px]/[16px] font-extrabold tabular-nums text-neutral-900 dark:text-neutral-100 dark:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_22%,var(--color-neutral-900))]",
  rt = "flex items-center *:not-first:-ms-1.5 *:not-last:[mask-image:radial-gradient(50%_50%_at_calc(150%-6px)_50%,transparent_calc(100%+1.5px),#000_calc(100%+2px))]",
  rl = "text-neutral-900/62 dark:text-neutral-100/62 select-none",
  rn = "h-10 border-b border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] px-3 text-left align-middle text-[13px]/[16px] font-bold tabular-nums whitespace-nowrap text-neutral-900/62 dark:text-neutral-100/62 first:ps-4 last:pe-4 dark:bg-neutral-100/4",
  rs = "h-12 border-b border-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] px-3 align-middle whitespace-nowrap text-neutral-900 dark:text-neutral-100 group-last:border-b-0 first:ps-4 last:pe-4 dark:border-neutral-100/6",
  ri = "inline-block size-2.5 shrink-0 rounded-full",
  ro = (e, a, r) => Math.min(r, Math.max(a, e)),
  rc = e => e.split(/[\s-]+/).filter(Boolean).slice(0, 2).map(e => e[0]?.toUpperCase()).join(""),
  rd = (e, a) => .5 * Math.sin(1.13 * a + e) + .31 * Math.sin(.41 * a + 2.3 * e),
  rx = ["Overview", "Worklog", "Files", "Reports"],
  r_ = {
    client: a4,
    internal: a9
  },
  rh = [{
    id: "p1",
    name: "Amara Ortiz",
    role: "Client delivery lead",
    target: 32
  }, {
    id: "p2",
    name: "Theo Mercer",
    role: "Platform engineer",
    target: 40
  }, {
    id: "p3",
    name: "Lena Hoffman",
    role: "Content systems editor",
    target: 30
  }, {
    id: "p4",
    name: "Idris Bello",
    role: "Integration engineer",
    target: 38
  }, {
    id: "p5",
    name: "Marta Kovac",
    role: "QA analyst",
    target: 34
  }, {
    id: "p6",
    name: "Rhys Calloway",
    role: "Solutions architect",
    target: 24
  }, {
    id: "p7",
    name: "Junia Alves",
    role: "Data migration lead",
    target: 36
  }],
  rb = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  rp = ["Mar", "Apr"],
  ru = Array.from({
    length: 4
  }, (e, a) => {
    let r = 9 + 7 * a;
    return {
      label: `${rp[+(r > 31)]} ${r > 31 ? r - 31 : r} – ${rp[+(r + 6 > 31)]} ${r + 6 > 31 ? r + 6 - 31 : r + 6}`,
      dates: Array.from({
        length: 7
      }, (e, a) => {
        let t = r + a;
        return t > 31 ? `${rp[1]} ${t - 31}` : `${rp[0]} ${t}`;
      }),
      cells: function (e) {
        let a = {};
        for (let [r, t] of rh.entries()) {
          let l = [];
          for (let a = 0; a < 7; a += 1) {
            if (a >= 5) {
              l.push({
                hours: 0,
                kind: "off"
              });
              continue;
            }
            let n = rd(1.7 * r + 3.1 * e, a),
              s = ro(Math.round(2 * (t.target / 5 + 2.6 * n)) / 2, 0, 9);
            l.push({
              hours: s,
              kind: n > .42 ? "internal" : "client"
            });
          }
          a[t.id] = l;
        }
        return a;
      }(a)
    };
  }),
  rm = e => {
    let a = Math.floor(e);
    return e - a >= .5 ? `${a}h 30m` : `${a}h`;
  },
  rk = [{
    label: "Account",
    icon: __mod_62714.A,
    title: "Northstar Commerce",
    meta: "Enterprise rollout",
    trailing: "flag"
  }, {
    label: "Workspace",
    icon: __mod_78805.A,
    title: "portal.northstar.io",
    meta: "124k requests / day",
    trailing: "badge",
    badge: "Running"
  }, {
    label: "Next review",
    icon: __mod_18327.A,
    title: "Apr 3, 2026",
    meta: "Client steering",
    trailing: "avatars"
  }, {
    label: "Owner",
    icon: __mod_34951.A,
    title: "Amara Ortiz",
    meta: "Delivery lead",
    trailing: "avatar"
  }];
let ry = (...e) => e.filter(Boolean).join(" "),
  rA = "text-neutral-900 dark:text-neutral-100",
  rM = "text-neutral-900/62 dark:text-neutral-100/62",
  rS = "divide-y divide-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:divide-neutral-100/7",
  rz = "text-[14px]/[20px] font-medium",
  rR = "text-[13px]/[16px] font-semibold tabular-nums",
  r$ = "relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] text-neutral-900 dark:text-neutral-100 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] active:not-disabled:translate-y-px active:not-disabled:shadow-[inset_0_1px_3px_rgb(84_62_32/0.16),0_0_0_1px_rgb(84_62_32/0.10)] dark:active:not-disabled:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14),0_0_0_1px_rgb(84_62_32/0.10)] dark:aria-expanded:bg-neutral-800 dark:aria-expanded:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] disabled:bg-none disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] disabled:text-neutral-900/40 disabled:shadow-none dark:disabled:bg-neutral-800/60 dark:disabled:text-neutral-100/40",
  rD = "h-10 gap-2 rounded-[calc(var(--rb-r-full,999px))] px-5 text-[15px]/[20px] font-bold",
  rW = "min-w-0 truncate text-[16px]/[20px] font-extrabold text-neutral-900 dark:text-neutral-100",
  rL = "text-[14px]/[20px] font-medium text-neutral-900/78 dark:text-neutral-100/78",
  rC = "relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 shadow-[inset_0_0_0_1px_rgb(84_62_32/0.05)] dark:shadow-[inset_0_0_0_1px_rgb(255_255_255/0.05)]",
  rI = "flex min-h-12 min-w-0 shrink-0 items-center gap-2 px-4 has-[button]:pe-2.5",
  rB = "mx-1 mb-1 flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-5xl,22px))] border border-transparent bg-white dark:bg-neutral-950 shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] [&:has(+*)]:mb-0",
  rE = "relative flex min-h-12 w-full min-w-0 flex-wrap items-center gap-x-3 gap-y-1 py-2.5 text-left text-neutral-900 dark:text-neutral-100 transition-[background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] has-[[data-description]]:min-h-16",
  rP = "flex max-w-full min-w-0 items-baseline gap-2 text-[15px]/[20px] font-bold text-neutral-900 dark:text-neutral-100",
  rO = "fill-neutral-900/60 text-[12px] font-semibold tabular-nums dark:fill-neutral-100/60",
  rF = "bg-linear-to-b from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950",
  rT = "bg-linear-to-t from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950",
  rU = (e, a, r, t, l) => t + (e - a) / (r - a || 1) * (l - t),
  rV = (e, a, r) => Math.min(r, Math.max(a, e)),
  rH = e => e.toLocaleString("en-US");
function rK() {
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
        scrollHeight: l,
        clientHeight: n
      } = a;
      r({
        start: t > 1,
        end: Math.ceil(t + n) < l - 1
      });
    }, []);
  return (0, React.useEffect)(() => {
    t();
    let a = e.current,
      r = a?.ownerDocument.defaultView;
    if (!a || !r?.ResizeObserver) return;
    let l = new r.ResizeObserver(t);
    return l.observe(a), () => l.disconnect();
  }, [t]), {
    ref: e,
    edges: a,
    onScroll: t
  };
}
let rJ = Array.from({
    length: 28
  }, (e, a) => {
    let r = 28 + a;
    return r > 31 ? `${r - 31} Sep` : `${r} Aug`;
  }),
  rG = (e, a, r) => Array.from({
    length: 28
  }, (t, l) => Math.round(a + (.5 * Math.sin(.44 * l + e) + .36 * Math.sin(.17 * l + 1.6 * e)) * r)),
  rq = e => `${Math.floor(e / 60)}:${String(Math.round(e % 60)).padStart(2, "0")}`,
  rQ = [{
    key: "calls",
    label: "Calls",
    format: rH,
    headline: rH,
    series: rG(1.2, 77e3, 6400)
  }, {
    key: "duration",
    label: "Avg. duration",
    format: rq,
    headline: rq,
    series: rG(3.4, 171, 22)
  }, {
    key: "credits",
    label: "Total credits",
    unit: "credits",
    format: rH,
    headline: rH,
    series: rG(5.1, 33400, 4800)
  }, {
    key: "perCall",
    label: "Credits per call",
    unit: "credits",
    format: e => e.toFixed(2),
    headline: e => e.toFixed(2),
    series: rG(7.6, 43, 7).map(e => e / 10)
  }, {
    key: "llm",
    label: "Total LLM cost",
    format: e => `$${rH(e)}`,
    headline: e => `$${rH(e)}`,
    series: rG(9.3, 7258, 980)
  }, {
    key: "avgLlm",
    label: "Avg. LLM cost",
    format: e => `$${e.toFixed(2)}`,
    headline: e => `$${e.toFixed(2)}`,
    series: rG(11.8, 258, 34).map(e => e / 1)
  }],
  rX = [{
    name: "Docs support",
    scope: "help.center",
    calls: 6424
  }, {
    name: "Website concierge",
    scope: "www",
    calls: 3942
  }, {
    name: "Billing triage",
    scope: "billing",
    calls: 1820
  }, {
    name: "Onboarding guide",
    scope: "app.setup",
    calls: 1194
  }, {
    name: "Store assistant",
    scope: "shop",
    calls: 1094
  }, {
    name: "Returns desk",
    scope: "shop.returns",
    calls: 812
  }, {
    name: "Outage responder",
    scope: "status",
    calls: 604
  }, {
    name: "Renewal outreach",
    scope: "crm",
    calls: 421
  }],
  rY = [{
    name: "Transcript store",
    detail: "Response traces and grading",
    Icon: __mod_36586.A,
    live: !0
  }, {
    name: "Escalation channel",
    detail: "Handoff alerts to on-call",
    Icon: __mod_35619.A,
    live: !0
  }, {
    name: "Voice gateway",
    detail: "SIP routing and failover",
    Icon: __mod_99519.A,
    live: !0
  }, {
    name: "Workflow runner",
    detail: "Post-call actions and tickets",
    Icon: __mod_92881.A,
    live: !1
  }, {
    name: "Knowledge index",
    detail: "Retrieval corpus sync",
    Icon: __mod_10303.A,
    live: !1
  }];
let r3 = (...e) => e.filter(Boolean).join(" "),
  r7 = "bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-100/8",
  te = "text-neutral-900 dark:text-neutral-100",
  ta = "text-neutral-900/62 dark:text-neutral-100/62",
  tr = "text-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_82%,black)] dark:text-[var(--rb-accent,oklch(81%_0.16_163))]",
  tt = "text-[15px]/[20px] font-bold",
  tl = "text-[13px]/[16px] font-semibold tabular-nums",
  tn = "relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] text-neutral-900 dark:text-neutral-100 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] active:not-disabled:translate-y-px active:not-disabled:shadow-[inset_0_1px_3px_rgb(84_62_32/0.16),0_0_0_1px_rgb(84_62_32/0.10)] dark:active:not-disabled:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14),0_0_0_1px_rgb(84_62_32/0.10)] dark:aria-expanded:bg-neutral-800 dark:aria-expanded:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] disabled:bg-none disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] disabled:text-neutral-900/40 disabled:shadow-none dark:disabled:bg-neutral-800/60 dark:disabled:text-neutral-100/40",
  ts = "h-10 gap-2 rounded-[calc(var(--rb-r-full,999px))] px-5 text-[15px]/[20px] font-bold",
  ti = "inline-flex h-5.5 min-w-5.5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden whitespace-nowrap rounded-[calc(var(--rb-r-full,999px))] px-2.5 text-[12px]/[16px] font-bold tabular-nums",
  to = "min-w-0 truncate text-[16px]/[20px] font-extrabold text-neutral-900 dark:text-neutral-100",
  tc = "text-[14px]/[20px] font-medium text-neutral-900/78 dark:text-neutral-100/78",
  td = "relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 shadow-[inset_0_0_0_1px_rgb(84_62_32/0.05)] dark:shadow-[inset_0_0_0_1px_rgb(255_255_255/0.05)]",
  tx = "flex min-h-12 min-w-0 shrink-0 items-center gap-2 px-4 has-[button]:pe-2.5",
  t_ = "mx-1 mb-1 flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-5xl,22px))] border border-transparent bg-white dark:bg-neutral-950 shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] [&:has(+*)]:mb-0",
  th = "relative block h-2.5 w-full overflow-hidden rounded-[calc(var(--rb-r-full,999px))] bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] shadow-[inset_0_1px_2px_rgb(84_62_32/0.12)] dark:bg-neutral-100/12 dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.5)]",
  tb = "block h-full rounded-[calc(var(--rb-r-full,999px))] bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_82%,black)] shadow-[inset_0_1px_0_rgb(255_255_255/0.35)] transition-[width] duration-[420ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] motion-reduce:transition-none dark:bg-[var(--rb-accent,oklch(81%_0.16_163))]",
  tp = "h-10 border-b border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] px-3 text-left align-middle text-[13px]/[16px] font-bold tabular-nums whitespace-nowrap text-neutral-900/62 dark:text-neutral-100/62 first:ps-4 last:pe-4 dark:bg-neutral-100/4",
  tu = "h-12 border-b border-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] px-3 align-middle whitespace-nowrap text-neutral-900 dark:text-neutral-100 group-last:border-b-0 first:ps-4 last:pe-4 dark:border-neutral-100/6",
  tm = "text-right tabular-nums",
  tk = "bg-linear-to-b from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950",
  tf = "bg-linear-to-t from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950";
function tv() {
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
        scrollHeight: l,
        clientHeight: n
      } = a;
      r({
        start: t > 1,
        end: Math.ceil(t + n) < l - 1
      });
    }, []);
  return (0, React.useEffect)(() => {
    t();
    let a = e.current,
      r = a?.ownerDocument.defaultView;
    if (!a || !r?.ResizeObserver) return;
    let l = new r.ResizeObserver(t);
    return l.observe(a), () => l.disconnect();
  }, [t]), {
    ref: e,
    edges: a,
    onScroll: t
  };
}
let tg = [{
    label: "Open gaps",
    Icon: __mod_31453.A,
    value: "11",
    meta: "before kickoff",
    delta: "−4",
    positive: !0
  }, {
    label: "Standby pool",
    Icon: __mod_88366.A,
    value: "24",
    meta: "ready workers",
    delta: "+7",
    positive: !0
  }, {
    label: "Swap risk",
    Icon: __mod_36474.A,
    value: "8%",
    meta: "of open requests",
    delta: "−2 pp",
    positive: !0
  }, {
    label: "Check score",
    Icon: __mod_20484.A,
    value: "4.8",
    meta: "site average",
    delta: "+0.3",
    positive: !0
  }, {
    label: "Crew tenure",
    Icon: __mod_57466.A,
    value: "146d",
    meta: "rolling median",
    delta: "+6d",
    positive: !0
  }],
  tw = {
    stable: "Stable",
    watch: "Watch",
    critical: "Critical",
    pending: "Pending"
  },
  tj = {
    stable: "text-neutral-900/78 dark:text-neutral-100/78",
    pending: "text-neutral-900 dark:text-neutral-100",
    watch: "text-[oklch(49%_0.1_68)] dark:text-[oklch(80%_0.13_68)]",
    critical: "text-[oklch(51%_0.18_26)] dark:text-[oklch(76%_0.14_26)]"
  },
  tN = [{
    id: "c1",
    lead: "Mira Stone",
    role: "Harbor lead",
    coverage: 94,
    note: "Adds two closers",
    relief: 6,
    handoffs: 2,
    health: "stable"
  }, {
    id: "c2",
    lead: "Leo Grant",
    role: "Dispatch owner",
    coverage: 81,
    note: "Driver window tight",
    relief: 3,
    handoffs: 5,
    health: "watch"
  }, {
    id: "c3",
    lead: "Nora Vale",
    role: "Inventory coach",
    coverage: 72,
    note: "Cycle count open",
    relief: 2,
    handoffs: 6,
    health: "critical"
  }, {
    id: "c4",
    lead: "Theo Park",
    role: "Ramp lead",
    coverage: 89,
    note: "Training overlap",
    relief: 5,
    handoffs: 3,
    health: "stable"
  }, {
    id: "c5",
    lead: "Sana Qureshi",
    role: "Uptown floater",
    coverage: 78,
    note: "Awaiting confirm",
    relief: 4,
    handoffs: 4,
    health: "pending"
  }, {
    id: "c6",
    lead: "Alex Johnson",
    role: "Harbor stock",
    coverage: 91,
    note: "Backfill locked",
    relief: 7,
    handoffs: 1,
    health: "stable"
  }, {
    id: "c7",
    lead: "Priya Raman",
    role: "Night dispatch",
    coverage: 86,
    note: "Two shifts merged",
    relief: 5,
    handoffs: 2,
    health: "stable"
  }, {
    id: "c8",
    lead: "Dominic Hale",
    role: "Airport close",
    coverage: 68,
    note: "Lead unassigned",
    relief: 1,
    handoffs: 8,
    health: "critical"
  }],
  ty = [{
    id: "a1",
    Icon: __mod_59157.A,
    title: "3 swap approvals",
    detail: "Before 2 PM",
    cta: "Review"
  }, {
    id: "a2",
    Icon: __mod_67812.A,
    title: "6 standby invites",
    detail: "North route",
    cta: "Invite"
  }, {
    id: "a3",
    Icon: __mod_87924.A,
    title: "1 lead missing",
    detail: "Uptown close",
    cta: "Assign"
  }, {
    id: "a4",
    Icon: __mod_33786.A,
    title: "Timecard sync",
    detail: "After approvals",
    cta: "Sync"
  }, {
    id: "a5",
    Icon: __mod_52038.A,
    title: "2 route gaps",
    detail: "Airport, noon",
    cta: "Fill"
  }, {
    id: "a6",
    Icon: __mod_20484.A,
    title: "Break audit",
    detail: "Two sites",
    cta: "Check"
  }, {
    id: "a7",
    Icon: __mod_88366.A,
    title: "4 onboarding checks",
    detail: "New harbor crew",
    cta: "Open"
  }],
  tA = (e, a) => .5 * Math.sin(.58 * a + e) + .33 * Math.sin(.21 * a + 1.4 * e),
  tM = Array.from({
    length: 21
  }, (e, a) => Math.round(148 + 78 * tA(2.2, a))),
  tS = Array.from({
    length: 21
  }, (e, a) => Math.round(141 + 62 * tA(5.9, a))),
  tz = 1.06 * Math.max(...tM, ...tS);
let tI = (...e) => e.filter(Boolean).join(" "),
  tB = "text-neutral-900 dark:text-neutral-100",
  tE = "text-neutral-900/62 dark:text-neutral-100/62",
  tP = "text-[14px]/[20px] font-medium",
  tO = "text-[15px]/[20px] font-bold",
  tF = "text-[13px]/[16px] font-semibold tabular-nums",
  tT = "relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] text-neutral-900 dark:text-neutral-100 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] active:not-disabled:translate-y-px active:not-disabled:shadow-[inset_0_1px_3px_rgb(84_62_32/0.16),0_0_0_1px_rgb(84_62_32/0.10)] dark:active:not-disabled:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14),0_0_0_1px_rgb(84_62_32/0.10)] dark:aria-expanded:bg-neutral-800 dark:aria-expanded:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] disabled:bg-none disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] disabled:text-neutral-900/40 disabled:shadow-none dark:disabled:bg-neutral-800/60 dark:disabled:text-neutral-100/40",
  tU = "h-10 gap-2 rounded-[calc(var(--rb-r-full,999px))] px-5 text-[15px]/[20px] font-bold",
  tV = "inline-flex h-5.5 min-w-5.5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden whitespace-nowrap rounded-[calc(var(--rb-r-full,999px))] px-2.5 text-[12px]/[16px] font-bold tabular-nums",
  tH = "bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] text-neutral-900 dark:text-neutral-100 dark:bg-neutral-100/12",
  tK = "min-w-0 truncate text-[16px]/[20px] font-extrabold text-neutral-900 dark:text-neutral-100",
  tJ = "text-[14px]/[20px] font-medium text-neutral-900/78 dark:text-neutral-100/78",
  tG = "relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 shadow-[inset_0_0_0_1px_rgb(84_62_32/0.05)] dark:shadow-[inset_0_0_0_1px_rgb(255_255_255/0.05)]",
  tq = "flex min-h-12 min-w-0 shrink-0 items-center gap-2 px-4 has-[button]:pe-2.5",
  tQ = "mx-1 mb-1 flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-5xl,22px))] border border-transparent bg-white dark:bg-neutral-950 shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] [&:has(+*)]:mb-0",
  tX = "h-12 border-b border-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] px-3 align-middle whitespace-nowrap text-neutral-900 dark:text-neutral-100 group-last:border-b-0 first:ps-4 last:pe-4 dark:border-neutral-100/6",
  tY = "fill-neutral-900/60 text-[12px] font-semibold tabular-nums dark:fill-neutral-100/60",
  tZ = "fill-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_82%,black)] stroke-white stroke-[2.5] dark:fill-[var(--rb-accent,oklch(81%_0.16_163))] dark:stroke-neutral-900",
  t0 = "bg-linear-to-b from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950",
  t1 = "bg-linear-to-t from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950";
function t2() {
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
        scrollHeight: l,
        clientHeight: n
      } = a;
      r({
        start: t > 1,
        end: Math.ceil(t + n) < l - 1
      });
    }, []);
  return (0, React.useEffect)(() => {
    t();
    let a = e.current,
      r = a?.ownerDocument.defaultView;
    if (!a || !r?.ResizeObserver) return;
    let l = new r.ResizeObserver(t);
    return l.observe(a), () => l.disconnect();
  }, [t]), {
    ref: e,
    edges: a,
    onScroll: t
  };
}
let t5 = (e, a, r, t, l) => t + (e - a) / (r - a || 1) * (l - t),
  t6 = (e, a, r) => Math.min(r, Math.max(a, e)),
  t8 = e => Math.abs(e) >= 1e6 ? `${(e / 1e6).toFixed(Math.abs(e) >= 1e7 ? 0 : 1)}M` : Math.abs(e) >= 1e3 ? `${(e / 1e3).toFixed(Math.abs(e) >= 1e4 ? 0 : 1)}k` : `${e}`,
  t4 = e => `$${e.toLocaleString("en-US")}`,
  t9 = (e, a) => .5 * Math.sin(.36 * a + e) + .34 * Math.sin(.14 * a + 1.8 * e),
  t3 = Array.from({
    length: 30
  }, (e, a) => {
    let r = 12 + a;
    return r > 30 ? `Jun ${r - 30}` : `May ${r}`;
  }),
  t7 = Array.from({
    length: 30
  }, (e, a) => Math.round(41e3 + 12500 * t9(2.6, a))),
  le = Array.from({
    length: 30
  }, (e, a) => Math.round(9400 + 3100 * t9(6.4, a))),
  la = [{
    label: "Released today",
    meta: "17 payouts",
    value: t4(212480),
    Icon: __mod_59309.A
  }, {
    label: "Buffer",
    meta: "Under review",
    value: t4(83040),
    Icon: __mod_20484.A
  }, {
    label: "Sweep lanes",
    meta: "Funds moving",
    value: "3",
    Icon: __mod_82270.A
  }, {
    label: "Moves",
    meta: "Ledger depth",
    value: "11",
    Icon: __mod_92190.A
  }],
  lr = [{
    id: "l1",
    name: "Studio card",
    meta: ["Daily clear", "today"],
    amount: 284650,
    mask: "•••• 4576",
    Icon: __mod_95735.A
  }, {
    id: "l2",
    name: "Royalty vault",
    meta: ["Weekly sweep", "Friday"],
    amount: 153980,
    mask: "•••• 9132",
    Icon: __mod_82270.A
  }, {
    id: "l3",
    name: "Collab wallet",
    meta: ["Creator split", "queued"],
    amount: 67240,
    mask: "•••• 2841",
    Icon: __mod_83838.A
  }, {
    id: "l4",
    name: "Reserve account",
    meta: ["Month end", "holding"],
    amount: 41500,
    mask: "•••• 7710",
    Icon: __mod_20484.A
  }],
  lt = [{
    id: "m1",
    ref: "MV-40812",
    party: "Halvorsen Studio",
    channel: "Bank transfer",
    amount: 84200,
    state: "settled",
    when: "09:41"
  }, {
    id: "m2",
    ref: "MV-40811",
    party: "Petit Sound Co.",
    channel: "Instant card",
    amount: 12640,
    state: "settled",
    when: "09:12"
  }, {
    id: "m3",
    ref: "MV-40809",
    party: "Aranyi Collective",
    channel: "Bank transfer",
    amount: 46900,
    state: "clearing",
    when: "08:55"
  }, {
    id: "m4",
    ref: "MV-40806",
    party: "L\xf8ken Media",
    channel: "Wallet split",
    amount: 9180,
    state: "settled",
    when: "08:30"
  }, {
    id: "m5",
    ref: "MV-40804",
    party: "Osei & Partners",
    channel: "Bank transfer",
    amount: 31450,
    state: "held",
    when: "08:04"
  }, {
    id: "m6",
    ref: "MV-40801",
    party: "Sundar Archive",
    channel: "Instant card",
    amount: 5720,
    state: "settled",
    when: "07:48"
  }, {
    id: "m7",
    ref: "MV-40799",
    party: "Miralles Press",
    channel: "Wallet split",
    amount: 18330,
    state: "clearing",
    when: "07:22"
  }, {
    id: "m8",
    ref: "MV-40795",
    party: "Brekke Audio",
    channel: "Bank transfer",
    amount: 24060,
    state: "settled",
    when: "06:59"
  }, {
    id: "m9",
    ref: "MV-40792",
    party: "Northlight Rooms",
    channel: "Instant card",
    amount: 7410,
    state: "settled",
    when: "06:31"
  }, {
    id: "m10",
    ref: "MV-40788",
    party: "Fern & Object",
    channel: "Wallet split",
    amount: 15880,
    state: "held",
    when: "06:05"
  }, {
    id: "m11",
    ref: "MV-40784",
    party: "Quiet Harbour Ltd",
    channel: "Bank transfer",
    amount: 39720,
    state: "settled",
    when: "05:44"
  }],
  ll = {
    settled: {
      label: "Settled",
      tone: "text-neutral-900/78 dark:text-neutral-100/78"
    },
    clearing: {
      label: "Clearing",
      tone: "text-neutral-900 dark:text-neutral-100"
    },
    held: {
      label: "Held",
      tone: "text-[oklch(49%_0.1_68)] dark:text-[oklch(80%_0.13_68)]"
    }
  };
let lx = (...e) => e.filter(Boolean).join(" "),
  l_ = "text-neutral-900 dark:text-neutral-100",
  lh = "text-neutral-900/62 dark:text-neutral-100/62",
  lb = "bg-[oklch(80%_0.152_68)] dark:bg-[oklch(80%_0.152_68)]",
  lp = "text-[14px]/[20px] font-medium",
  lu = "text-[13px]/[16px] font-bold tabular-nums",
  lm = "text-[13px]/[16px] font-semibold tabular-nums",
  lk = "text-[34px]/[40px] font-extrabold tracking-[-0.02em] tabular-nums",
  lf = "focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))]",
  lv = "min-w-0 truncate text-[16px]/[20px] font-extrabold text-neutral-900 dark:text-neutral-100",
  lg = "relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 shadow-[inset_0_0_0_1px_rgb(84_62_32/0.05)] dark:shadow-[inset_0_0_0_1px_rgb(255_255_255/0.05)]",
  lw = "flex min-h-12 min-w-0 shrink-0 items-center gap-2 px-4 has-[button]:pe-2.5",
  lj = "mx-1 mb-1 flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-5xl,22px))] border border-transparent bg-white dark:bg-neutral-950 shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] [&:has(+*)]:mb-0",
  lN = "flex min-h-12 min-w-0 items-center gap-2 px-4 py-2 text-[14px]/[20px] font-semibold text-neutral-900/62 dark:text-neutral-100/62 has-[button]:justify-end has-[button]:pe-2.5",
  ly = "relative flex min-h-12 w-full min-w-0 flex-wrap items-center gap-x-3 gap-y-1 py-2.5 text-left text-neutral-900 dark:text-neutral-100 transition-[background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] has-[[data-description]]:min-h-16",
  lA = "flex min-w-0 flex-1 flex-col gap-0.5",
  lM = "flex max-w-full min-w-0 items-baseline gap-2 text-[15px]/[20px] font-bold text-neutral-900 dark:text-neutral-100",
  lS = "relative block h-2.5 w-full overflow-hidden rounded-[calc(var(--rb-r-full,999px))] bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] shadow-[inset_0_1px_2px_rgb(84_62_32/0.12)] dark:bg-neutral-100/12 dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.5)]",
  lz = "block h-full rounded-[calc(var(--rb-r-full,999px))] bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_82%,black)] shadow-[inset_0_1px_0_rgb(255_255_255/0.35)] transition-[width] duration-[420ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] motion-reduce:transition-none dark:bg-[var(--rb-accent,oklch(81%_0.16_163))]",
  lR = "fill-neutral-900/60 text-[12px] font-semibold tabular-nums dark:fill-neutral-100/60",
  l$ = "fill-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] dark:fill-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_16%,transparent)]",
  lD = "fill-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_82%,black)] stroke-white stroke-[2.5] dark:fill-[var(--rb-accent,oklch(81%_0.16_163))] dark:stroke-neutral-900",
  lW = "bg-linear-to-b from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950",
  lL = "bg-linear-to-t from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950";
function lC() {
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
        scrollHeight: l,
        clientHeight: n
      } = a;
      r({
        start: t > 1,
        end: Math.ceil(t + n) < l - 1
      });
    }, []);
  return (0, React.useEffect)(() => {
    t();
    let a = e.current,
      r = a?.ownerDocument.defaultView;
    if (!a || !r?.ResizeObserver) return;
    let l = new r.ResizeObserver(t);
    return l.observe(a), () => l.disconnect();
  }, [t]), {
    ref: e,
    edges: a,
    onScroll: t
  };
}
let lI = (e, a, r, t, l) => t + (e - a) / (r - a || 1) * (l - t),
  lB = (e, a, r) => Math.min(r, Math.max(a, e)),
  lE = e => `${Math.round(e)}%`,
  lP = [{
    id: "o1",
    name: "Make the first hour obvious",
    lead: "Ines Halvorsen",
    meta: "Activation",
    results: [{
      id: "o1r1",
      name: "Reach first saved project in under 6 minutes",
      owner: "IH",
      unit: "percent",
      start: 34,
      target: 70,
      current: 61
    }, {
      id: "o1r2",
      name: "Cut setup steps from nine to four",
      owner: "TM",
      unit: "count",
      start: 9,
      target: 4,
      current: 5
    }, {
      id: "o1r3",
      name: "Lift week-one return visits",
      owner: "IH",
      unit: "percent",
      start: 41,
      target: 58,
      current: 47
    }]
  }, {
    id: "o2",
    name: "Earn the second seat",
    lead: "Dovid Aranyi",
    meta: "Expansion",
    results: [{
      id: "o2r1",
      name: "Workspaces with two or more editors",
      owner: "DA",
      unit: "count",
      start: 820,
      target: 1600,
      current: 1418
    }, {
      id: "o2r2",
      name: "Net revenue retention",
      owner: "PS",
      unit: "percent",
      start: 104,
      target: 118,
      current: 113
    }, {
      id: "o2r3",
      name: "Invites accepted within a day",
      owner: "DA",
      unit: "percent",
      start: 52,
      target: 75,
      current: 58
    }]
  }, {
    id: "o3",
    name: "Answer before people ask",
    lead: "Runa Petit",
    meta: "Support",
    results: [{
      id: "o3r1",
      name: "Median first reply",
      owner: "RP",
      unit: "count",
      start: 240,
      target: 45,
      current: 68
    }, {
      id: "o3r2",
      name: "Tickets closed without a handoff",
      owner: "KO",
      unit: "percent",
      start: 62,
      target: 85,
      current: 81
    }, {
      id: "o3r3",
      name: "Docs deflection rate",
      owner: "RP",
      unit: "percent",
      start: 18,
      target: 40,
      current: 22
    }]
  }, {
    id: "o4",
    name: "Ship on a predictable cadence",
    lead: "Marta L\xf8ken",
    meta: "Platform",
    results: [{
      id: "o4r1",
      name: "Releases per week",
      owner: "ML",
      unit: "count",
      start: 2,
      target: 6,
      current: 5
    }, {
      id: "o4r2",
      name: "Change failure rate",
      owner: "JB",
      unit: "percent",
      start: 21,
      target: 8,
      current: 11
    }, {
      id: "o4r3",
      name: "Build minutes per merge",
      owner: "ML",
      unit: "count",
      start: 34,
      target: 15,
      current: 26
    }]
  }, {
    id: "o5",
    name: "Make pricing legible",
    lead: "Priya Sundar",
    meta: "Revenue",
    results: [{
      id: "o5r1",
      name: "Plan page visits that reach checkout",
      owner: "PS",
      unit: "percent",
      start: 12,
      target: 24,
      current: 19
    }, {
      id: "o5r2",
      name: "Support threads asking what a seat costs",
      owner: "RP",
      unit: "count",
      start: 180,
      target: 40,
      current: 74
    }, {
      id: "o5r3",
      name: "Annual plans as a share of new revenue",
      owner: "PS",
      unit: "percent",
      start: 28,
      target: 45,
      current: 39
    }]
  }, {
    id: "o6",
    name: "Keep the editor fast under load",
    lead: "Jonas Brekke",
    meta: "Performance",
    results: [{
      id: "o6r1",
      name: "p95 interaction latency",
      owner: "JB",
      unit: "count",
      start: 310,
      target: 120,
      current: 168
    }, {
      id: "o6r2",
      name: "Documents over 5MB that open cleanly",
      owner: "ML",
      unit: "percent",
      start: 71,
      target: 96,
      current: 92
    }, {
      id: "o6r3",
      name: "Client bundle size",
      owner: "JB",
      unit: "count",
      start: 1240,
      target: 700,
      current: 918
    }]
  }, {
    id: "o7",
    name: "Hire the team we planned for",
    lead: "Tom\xe1s Miralles",
    meta: "People",
    results: [{
      id: "o7r1",
      name: "Open roles closed this quarter",
      owner: "TM",
      unit: "count",
      start: 0,
      target: 9,
      current: 6
    }, {
      id: "o7r2",
      name: "Offer acceptance rate",
      owner: "TM",
      unit: "percent",
      start: 64,
      target: 85,
      current: 78
    }, {
      id: "o7r3",
      name: "Days from screen to offer",
      owner: "KO",
      unit: "count",
      start: 31,
      target: 14,
      current: 21
    }]
  }],
  lO = Array.from({
    length: 13
  }, (e, a) => `W${a + 1}`),
  lF = e => {
    let a = e.target - e.start;
    return 0 === a ? 100 : lB((e.current - e.start) / a * 100, 0, 100);
  },
  lT = (e, a) => {
    let r = Math.round(a);
    return "percent" === e.unit ? `${r}%` : "money" === e.unit ? `$${r.toLocaleString("en-US")}` : r.toLocaleString("en-US");
  },
  lU = e => e.results.reduce((e, a) => e + lF(a), 0) / e.results.length,
  lV = e => e >= 79.23076923076923 ? "ahead" : e >= 59.230769230769226 ? "on" : "behind",
  lH = {
    ahead: {
      label: "Ahead",
      Icon: __mod_77378.A,
      tone: l_
    },
    on: {
      label: "On pace",
      Icon: __mod_99199.A,
      tone: lh
    },
    behind: {
      label: "Behind",
      Icon: __mod_88294.A,
      tone: lh
    }
  };
let lQ = (...e) => e.filter(Boolean).join(" "),
  lX = "text-neutral-900 dark:text-neutral-100",
  lY = "text-neutral-900/62 dark:text-neutral-100/62",
  lZ = "rounded-[var(--rb-r-4xl,18px)]",
  l0 = "text-[oklch(49%_0.1_68)] dark:text-[oklch(80%_0.13_68)]",
  l1 = "text-[oklch(51%_0.18_26)] dark:text-[oklch(76%_0.14_26)]",
  l2 = "font-mono text-[12px]/[16px] tabular-nums",
  l5 = "focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))]",
  l6 = "relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] text-neutral-900 dark:text-neutral-100 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] active:not-disabled:translate-y-px active:not-disabled:shadow-[inset_0_1px_3px_rgb(84_62_32/0.16),0_0_0_1px_rgb(84_62_32/0.10)] dark:active:not-disabled:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14),0_0_0_1px_rgb(84_62_32/0.10)] dark:aria-expanded:bg-neutral-800 dark:aria-expanded:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] disabled:bg-none disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] disabled:text-neutral-900/40 disabled:shadow-none dark:disabled:bg-neutral-800/60 dark:disabled:text-neutral-100/40",
  l8 = "h-10 gap-2 rounded-[calc(var(--rb-r-full,999px))] px-5 text-[15px]/[20px] font-bold",
  l4 = "inline-flex items-start gap-1 text-[14px]/[20px] font-bold tabular-nums",
  l9 = "min-w-0 truncate text-[16px]/[20px] font-extrabold text-neutral-900 dark:text-neutral-100",
  l3 = "relative flex min-h-12 w-full min-w-0 flex-wrap items-center gap-x-3 gap-y-1 py-2.5 text-left text-neutral-900 dark:text-neutral-100 transition-[background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] has-[[data-description]]:min-h-16",
  l7 = "flex min-w-0 flex-1 flex-col gap-0.5",
  ne = "flex max-w-full min-w-0 items-baseline gap-2 text-[15px]/[20px] font-bold text-neutral-900 dark:text-neutral-100",
  na = "bg-linear-to-b from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950",
  nr = "bg-linear-to-t from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950";
function nt() {
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
        scrollHeight: l,
        clientHeight: n
      } = a;
      r({
        start: t > 1,
        end: Math.ceil(t + n) < l - 1
      });
    }, []);
  return (0, React.useEffect)(() => {
    t();
    let a = e.current,
      r = a?.ownerDocument.defaultView;
    if (!a || !r?.ResizeObserver) return;
    let l = new r.ResizeObserver(t);
    return l.observe(a), () => l.disconnect();
  }, [t]), {
    ref: e,
    edges: a,
    onScroll: t
  };
}
let nl = (e, a, r, t, l) => t + (e - a) / (r - a || 1) * (l - t),
  nn = (e, a, r) => Math.min(r, Math.max(a, e)),
  ns = [{
    id: "s1",
    name: "Checkout API",
    repo: "core/checkout",
    region: "eu-west-1",
    health: "healthy",
    rps: 4820,
    p95: 118,
    errorRate: .14,
    saturation: 61,
    version: "v4.18.2",
    deployedBy: "Ines Halvorsen",
    deployedAt: "2h ago"
  }, {
    id: "s2",
    name: "Ledger writer",
    repo: "core/ledger",
    region: "eu-west-1",
    health: "watch",
    rps: 1290,
    p95: 402,
    errorRate: 1.9,
    saturation: 88,
    version: "v2.7.0",
    deployedBy: "Dovid Aranyi",
    deployedAt: "26m ago"
  }, {
    id: "s3",
    name: "Media pipeline",
    repo: "media/encode",
    region: "us-east-2",
    health: "healthy",
    rps: 640,
    p95: 1140,
    errorRate: .32,
    saturation: 44,
    version: "v9.3.1",
    deployedBy: "Runa Petit",
    deployedAt: "1d ago"
  }, {
    id: "s4",
    name: "Search index",
    repo: "search/index",
    region: "us-east-2",
    health: "healthy",
    rps: 3410,
    p95: 74,
    errorRate: .08,
    saturation: 52,
    version: "v1.22.9",
    deployedBy: "Marta L\xf8ken",
    deployedAt: "5h ago"
  }, {
    id: "s5",
    name: "Webhook relay",
    repo: "core/relay",
    region: "ap-south-1",
    health: "down",
    rps: 210,
    p95: 2960,
    errorRate: 14.6,
    saturation: 97,
    version: "v3.0.4",
    deployedBy: "Kwame Osei",
    deployedAt: "12m ago"
  }, {
    id: "s6",
    name: "Identity gateway",
    repo: "core/identity",
    region: "eu-west-1",
    health: "healthy",
    rps: 5960,
    p95: 61,
    errorRate: .05,
    saturation: 39,
    version: "v6.11.0",
    deployedBy: "Ines Halvorsen",
    deployedAt: "3d ago"
  }, {
    id: "s7",
    name: "Notification fan-out",
    repo: "growth/notify",
    region: "us-east-2",
    health: "watch",
    rps: 880,
    p95: 318,
    errorRate: 2.4,
    saturation: 79,
    version: "v5.2.3",
    deployedBy: "Priya Sundar",
    deployedAt: "8h ago"
  }, {
    id: "s8",
    name: "Billing sync",
    repo: "core/billing",
    region: "eu-west-1",
    health: "healthy",
    rps: 430,
    p95: 205,
    errorRate: .21,
    saturation: 33,
    version: "v2.14.6",
    deployedBy: "Dovid Aranyi",
    deployedAt: "2d ago"
  }, {
    id: "s9",
    name: "Asset CDN edge",
    repo: "media/edge",
    region: "global",
    health: "healthy",
    rps: 9120,
    p95: 28,
    errorRate: .02,
    saturation: 47,
    version: "v11.0.1",
    deployedBy: "Marta L\xf8ken",
    deployedAt: "6d ago"
  }],
  ni = {
    healthy: {
      label: "Healthy",
      Icon: __mod_94089.A,
      tone: "text-neutral-900/78 dark:text-neutral-100/78",
      spark: lY
    },
    watch: {
      label: "Degraded",
      Icon: __mod_36474.A,
      tone: "text-[oklch(49%_0.1_68)] dark:text-[oklch(80%_0.13_68)]",
      spark: l0
    },
    down: {
      label: "Failing",
      Icon: __mod_24580.A,
      tone: "text-[oklch(51%_0.18_26)] dark:text-[oklch(76%_0.14_26)]",
      spark: l1
    }
  },
  no = {
    s1: [{
      id: "e1",
      text: "Rolled v4.18.2 to 100% of eu-west-1",
      meta: ["2h ago", "deploy"],
      kind: "healthy"
    }, {
      id: "e2",
      text: "Canary held for 14 minutes, no regression",
      meta: ["2h ago", "canary"],
      kind: "healthy"
    }, {
      id: "e3",
      text: "Card token cache warmed after restart",
      meta: ["5h ago", "runtime"],
      kind: "healthy"
    }, {
      id: "e4",
      text: "p95 crossed 200ms for 3 minutes",
      meta: ["9h ago", "latency"],
      kind: "watch"
    }],
    s2: [{
      id: "e1",
      text: "Write queue depth above threshold",
      meta: ["26m ago", "saturation"],
      kind: "watch"
    }, {
      id: "e2",
      text: "Shipped v2.7.0 with batched commits",
      meta: ["26m ago", "deploy"],
      kind: "healthy"
    }, {
      id: "e3",
      text: "Replica lag peaked at 4.2s",
      meta: ["1h ago", "database"],
      kind: "watch"
    }, {
      id: "e4",
      text: "Nightly reconciliation finished clean",
      meta: ["7h ago", "job"],
      kind: "healthy"
    }],
    s3: [{
      id: "e1",
      text: "Encoder pool scaled to 24 workers",
      meta: ["40m ago", "autoscale"],
      kind: "healthy"
    }, {
      id: "e2",
      text: "Long-form transcode backlog cleared",
      meta: ["3h ago", "queue"],
      kind: "healthy"
    }, {
      id: "e3",
      text: "Two jobs retried after codec timeout",
      meta: ["6h ago", "retry"],
      kind: "watch"
    }],
    s4: [{
      id: "e1",
      text: "Reindexed 1.4M documents",
      meta: ["5h ago", "job"],
      kind: "healthy"
    }, {
      id: "e2",
      text: "Query cache hit rate settled at 94%",
      meta: ["5h ago", "runtime"],
      kind: "healthy"
    }, {
      id: "e3",
      text: "Shard rebalance completed",
      meta: ["1d ago", "cluster"],
      kind: "healthy"
    }],
    s5: [{
      id: "e1",
      text: "Outbound deliveries failing at the edge",
      meta: ["12m ago", "incident"],
      kind: "down"
    }, {
      id: "e2",
      text: "Retry budget exhausted for 3 tenants",
      meta: ["18m ago", "retry"],
      kind: "down"
    }, {
      id: "e3",
      text: "Deployed v3.0.4 with new signing key",
      meta: ["22m ago", "deploy"],
      kind: "watch"
    }, {
      id: "e4",
      text: "Paged the on-call responder",
      meta: ["24m ago", "alert"],
      kind: "down"
    }],
    s6: [{
      id: "e1",
      text: "Token issuance steady across regions",
      meta: ["1h ago", "runtime"],
      kind: "healthy"
    }, {
      id: "e2",
      text: "Rotated signing keys without downtime",
      meta: ["3d ago", "security"],
      kind: "healthy"
    }, {
      id: "e3",
      text: "Session store compacted",
      meta: ["3d ago", "job"],
      kind: "healthy"
    }],
    s7: [{
      id: "e1",
      text: "Provider throttled push delivery",
      meta: ["35m ago", "upstream"],
      kind: "watch"
    }, {
      id: "e2",
      text: "Digest batch delayed by 6 minutes",
      meta: ["2h ago", "queue"],
      kind: "watch"
    }, {
      id: "e3",
      text: "Template cache invalidated",
      meta: ["8h ago", "deploy"],
      kind: "healthy"
    }],
    s8: [{
      id: "e1",
      text: "Invoice sync matched 4,182 records",
      meta: ["1h ago", "job"],
      kind: "healthy"
    }, {
      id: "e2",
      text: "Dunning retries paused for review",
      meta: ["1d ago", "policy"],
      kind: "healthy"
    }, {
      id: "e3",
      text: "Currency table refreshed",
      meta: ["2d ago", "job"],
      kind: "healthy"
    }],
    s9: [{
      id: "e1",
      text: "Purged 82GB of stale objects",
      meta: ["4h ago", "cache"],
      kind: "healthy"
    }, {
      id: "e2",
      text: "Origin shield hit rate at 99.1%",
      meta: ["4h ago", "runtime"],
      kind: "healthy"
    }, {
      id: "e3",
      text: "Added two edge locations",
      meta: ["6d ago", "network"],
      kind: "healthy"
    }]
  },
  nc = e => {
    let a = .9 * e.id.charCodeAt(1),
      r = "down" === e.health ? .55 : "watch" === e.health ? .3 : .16;
    return Array.from({
      length: 40
    }, (t, l) => Math.max(e.rps * (1 + (.5 * Math.sin(.38 * l + a) + .32 * Math.sin(.15 * l + 1.7 * a)) * r), .25 * e.rps));
  },
  nd = e => e >= 1e3 ? `${(e / 1e3).toFixed(e >= 1e4 ? 0 : 1)}k` : `${Math.round(e)}`;
function nx({
  values: e,
  tone: a
}) {
  let r = Math.min(...e),
    n = Math.max(...e),
    s = (0, React.useMemo)(() => (0, __mod_46667.A)().x((a, r) => nl(r, 0, e.length - 1, .75, 59.25)).y(e => nl(e, r, n, 18.5, 1.5)).curve(__mod_4670.G)(e) ?? "", [e, r, n]);
  return <svg width={60} height={20} aria-hidden="true" className={lQ(a, "shrink-0 overflow-visible")}><path d={s} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /></svg>;
}
let n_ = {
    "dashboard-1": function () {
      let [e, a] = (0, React.useState)(f[1].key),
        r = f.find(a => a.key === e) ?? f[1];
      return <div className={d("bg-white dark:bg-neutral-950", x, "relative flex h-full min-h-[640px] w-full flex-col overflow-hidden")}><header className={d("border-b border-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:border-neutral-100/7", "flex h-14 shrink-0 items-center justify-between gap-3 px-4 sm:px-6")}><h1 className={d("text-[22px]/[28px] font-extrabold tracking-[-0.01em]", x, "truncate")}>Revenue</h1><g value={e} onChange={a} /></header><div className="flex min-h-0 flex-1 flex-col gap-4 p-4 sm:p-6"><div className="@container rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.07),0_1px_2px_rgb(84_62_32/0.06),0_8px_22px_-10px_rgb(84_62_32/0.20)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_0_0_1px_rgb(0_0_0/0.6),0_10px_24px_-12px_rgb(0_0_0/0.8)] p-1"><div className="grid grid-cols-2 gap-1 [&>:last-child:nth-child(odd)]:col-span-full @3xl:grid-flow-col @3xl:grid-cols-none @3xl:auto-cols-fr @3xl:[&>:last-child:nth-child(odd)]:col-auto">{r.metrics.map(e => {
                let a,
                  l = (a = e.delta, /^[−-]/.test(a));
                return <div className={d("flex min-w-0 flex-col gap-2 rounded-[calc(var(--rb-r-5xl,22px))] bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] px-3 py-3.5 dark:bg-neutral-100/4", "@container")}><p className={d("text-[14px]/[20px] font-bold text-neutral-900/78 dark:text-neutral-100/78", "text-pretty")}>{e.label}</p><div className="mt-auto flex items-end justify-between gap-3"><p className={d("flex min-w-0 flex-wrap items-baseline gap-x-1 text-[34px]/[40px] font-extrabold tracking-[-0.02em] tabular-nums text-neutral-900 dark:text-neutral-100", "truncate")}>{e.value}</p><v values={e.spark} /></div><p className={d("inline-flex min-w-0 flex-wrap items-baseline gap-x-1 text-[13px]/[18px] font-bold tabular-nums [&>svg]:self-center text-neutral-900/78 dark:text-neutral-100/78", "truncate")}><__mod_22728.n icon={l ? __mod_37502.A : __mod_1497.A} size={14} strokeWidth={2} aria-hidden="true" /><span className="sr-only">{l ? "Down" : "Up"}</span>{e.delta}<span className={d(_, "hidden sm:inline")}>{r.compare}</span></p></div>;
              })}</div></div><div className={d("relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] text-neutral-900 dark:text-neutral-100 shadow-[0_0_0_1px_rgb(84_62_32/0.07),0_1px_2px_rgb(84_62_32/0.06),0_8px_22px_-10px_rgb(84_62_32/0.20)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_0_0_1px_rgb(0_0_0/0.6),0_10px_24px_-12px_rgb(0_0_0/0.8)]", "min-h-0 flex-1 p-4")}><div className="flex items-baseline justify-between gap-3"><h2 className="min-w-0 truncate text-[16px]/[20px] font-extrabold text-neutral-900 dark:text-neutral-100">Net revenue by month</h2><span className={d(h, _, "shrink-0")}>USD, thousands</span></div><div className="mt-4 flex min-h-0 flex-1 gap-3"><div className={d(h, _, "-my-2 flex w-10 shrink-0 flex-col justify-between text-right")}>{k.map(e => <span>{e}</span>)}</div><div className="relative min-h-0 flex-1"><svg aria-hidden={!0} preserveAspectRatio="none" viewBox="0 0 100 100" className="absolute inset-0 h-full w-full">{k.map(e => {
                    let a = 100 - e / 500 * 100;
                    return <line x1="0" x2="100" y1={a} y2={a} vectorEffect="non-scaling-stroke" shapeRendering="crispEdges" className={0 === e ? "stroke-neutral-900/12 dark:stroke-neutral-100/14" : "stroke-neutral-900/6 dark:stroke-neutral-100/8"} strokeWidth={1} />;
                  })}</svg><div className="absolute inset-0 flex items-end gap-2 sm:gap-3">{r.revenue.map((e, a) => <div className="flex min-w-0 flex-1 justify-center" style={{
                    height: `${e / 500 * 100}%`
                  }}><svg aria-hidden="true" className="block h-full w-full min-w-0 max-w-[64px]"><rect width="100%" height="100%" className="fill-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_82%,black)] dark:fill-[var(--rb-accent,oklch(81%_0.16_163))]" /></svg></div>)}</div></div></div><div className="mt-2 flex gap-3"><div className="w-10 shrink-0" aria-hidden={!0} /><div className="flex min-w-0 flex-1 gap-2 sm:gap-3">{r.months.map(e => <span className={d(h, _, "min-w-0 flex-1 truncate text-center")}>{e}</span>)}</div></div></div></div></div>;
    },
    "dashboard-2": function () {
      var e;
      let a,
        [r, s] = (0, React.useState)("30 days"),
        i = W[r],
        d = (0, React.useId)(),
        x = `${d}-panel`,
        _ = (a = i.delta, /^[−-]/.test(a)),
        h = (0, React.useMemo)(() => {
          let e = function (e, a) {
            let r = a.map(a => e * a),
              t = r.map(Math.floor),
              l = t.reduce((e, a) => e + a, 0),
              n = r.map((e, a) => ({
                i: a,
                frac: e - Math.floor(e)
              })).sort((e, a) => a.frac - e.frac);
            for (let a = 0; a < e - l; a++) t[n[a].i]++;
            return t;
          }(i.total, L.map(e => e.pct));
          return L.map((a, r) => ({
            ...a,
            count: e[r],
            share: (100 * a.pct).toFixed(1)
          }));
        }, [i.total]);
      return <div className={w("bg-white dark:bg-neutral-950", j, "relative flex h-full min-h-[720px] w-full flex-col overflow-hidden")}><header className={w("border-b border-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:border-neutral-100/7", "flex h-14 shrink-0 items-center justify-between gap-3 px-4 sm:px-6")}><h1 className={w("text-[22px]/[28px] font-extrabold tracking-[-0.01em]", j)}>Signups</h1><B value={r} onChange={s} baseId={d} panelId={x} /></header><div role="region" id={x} aria-labelledby={`${d}-${C.indexOf(r)}`} tabIndex={0} className={w("focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))]", "flex min-h-0 flex-1 flex-col gap-4 p-4 sm:p-6")}><div className={w("relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] text-neutral-900 dark:text-neutral-100 shadow-[0_0_0_1px_rgb(84_62_32/0.07),0_1px_2px_rgb(84_62_32/0.06),0_8px_22px_-10px_rgb(84_62_32/0.20)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_0_0_1px_rgb(0_0_0/0.6),0_10px_24px_-12px_rgb(0_0_0/0.8)]", "min-h-0 flex-1 p-4 sm:p-5")}><div className="flex items-start justify-between gap-4"><div><p className={w("text-[44px]/[48px] font-extrabold tracking-[-0.025em] tabular-nums", j)}>{i.total.toLocaleString("en-US")}</p><p className={w("inline-flex min-w-0 flex-wrap items-baseline gap-x-1 text-[13px]/[18px] font-bold tabular-nums [&>svg]:self-center text-neutral-900/78 dark:text-neutral-100/78", "mt-1")}><__mod_22728.n icon={_ ? __mod_37502.A : __mod_1497.A} size={14} strokeWidth={2} aria-hidden="true" /><span className="sr-only">{_ ? "Down" : "Up"}</span>{i.delta}<span className={y}>vs. previous {r}</span></p></div><div className={w(A, y, "flex items-center gap-4 pt-1")}><span className="inline-flex items-center gap-1.5"><svg aria-hidden="true" viewBox="0 0 16 2" className="h-0.5 w-4 shrink-0 overflow-visible"><line x1="0" x2="16" y1="1" y2="1" strokeWidth={2} className={R} /></svg>Signups</span><span className="inline-flex items-center gap-1.5"><svg aria-hidden="true" viewBox="0 0 16 2" className="h-0.5 w-4 shrink-0 overflow-visible"><line x1="0" x2="16" y1="1" y2="1" strokeWidth={2} strokeDasharray="6 4" className={$} /></svg>Target</span></div></div><div className="mt-5 flex min-h-0 flex-1 gap-3"><div className={w(A, y, "-my-2 flex w-10 shrink-0 flex-col justify-between text-right")}>{D.map(e => <span>{e}</span>)}</div><div className="relative min-h-0 flex-1"><svg aria-hidden={!0} preserveAspectRatio="none" viewBox="0 0 100 100" className="absolute inset-0 h-full w-full overflow-visible">{D.map(e => {
                    let a = 100 - e / 700 * 100;
                    return <line x1="0" x2="100" y1={a} y2={a} vectorEffect="non-scaling-stroke" shapeRendering="crispEdges" className={0 === e ? "stroke-neutral-900/12 dark:stroke-neutral-100/14" : "stroke-neutral-900/6 dark:stroke-neutral-100/8"} strokeWidth={1} />;
                  })}<line x1="0" x2="100" y1={28.57142857142857} y2={28.57142857142857} strokeDasharray="6 4" vectorEffect="non-scaling-stroke" className={$} strokeWidth={2} /><path d={(e = i.series, `${I(e)} L100 100 L0 100 Z`)} className="fill-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] dark:fill-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_16%,transparent)]" /><path d={I(i.series)} fill="none" vectorEffect="non-scaling-stroke" className={R} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /></svg></div></div><div className="mt-2 flex gap-3"><div className="w-10 shrink-0" aria-hidden={!0} /><div className={w(A, y, "flex min-w-0 flex-1 justify-between")}>{i.xLabels.map(e => <span>{e}</span>)}</div></div></div><div className={w("relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.07),0_1px_2px_rgb(84_62_32/0.06),0_8px_22px_-10px_rgb(84_62_32/0.20)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_0_0_1px_rgb(0_0_0/0.6),0_10px_24px_-12px_rgb(0_0_0/0.8)]", "shrink-0")}><table className="w-full border-separate border-spacing-0 text-left text-[15px]/[22px] font-medium"><caption className="sr-only">Signups by source</caption><thead><tr><th scope="col" className={w(M, "h-9 sm:first:pl-5")}>Source</th><th scope="col" className={w(M, z, "h-9")}>Signups</th><th scope="col" className={w(M, z, "hidden h-9 sm:table-cell")}>Share</th><th scope="col" className={w(M, z, "h-9")}>Conv. rate</th><th scope="col" className={w(M, "hidden h-9 text-right sm:table-cell sm:last:pr-5")}>Trend</th></tr></thead><tbody>{h.map(e => {
                  var a;
                  let r, l;
                  return <tr className={w("group transition-[background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:not-aria-selected:bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] dark:hover:not-aria-selected:bg-neutral-100/4 dark:aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)]", "h-11")}><td className={w(S, "sm:first:pl-5")}>{e.source}</td><td className={w(S, z)}>{e.count.toLocaleString("en-US")}</td><td className={w(S, z, "hidden sm:table-cell")}><span className={N}>{e.share}%</span></td><td className={w(S, z)}><span className={N}>{e.conv}</span></td><td className={w(S, "hidden text-right sm:table-cell sm:last:pr-5")}><svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden={!0} className="ml-auto h-5 w-16"><polyline points={(r = Math.min(...(a = e.trend)), l = Math.max(...a) - r || 1, a.map((e, t) => {
                          let n = t / (a.length - 1) * 100;
                          return `${n.toFixed(2)},${(100 - (e - r) / l * 100).toFixed(2)}`;
                        }).join(" "))} fill="none" vectorEffect="non-scaling-stroke" className={$} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /></svg></td></tr>;
                })}</tbody></table></div></div></div>;
    },
    "dashboard-3": function () {
      let {
          ref: e,
          edges: a,
          onScroll: r
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
                scrollHeight: l,
                clientHeight: n
              } = a;
              r({
                start: t > 1,
                end: Math.ceil(t + n) < l - 1
              });
            }, []);
          return (0, React.useEffect)(() => {
            t();
            let a = e.current,
              r = a?.ownerDocument.defaultView;
            if (!a || !r?.ResizeObserver) return;
            let l = new r.ResizeObserver(t);
            return l.observe(a), () => l.disconnect();
          }, [t]), {
            ref: e,
            edges: a,
            onScroll: t
          };
        }(),
        [s, i] = (0, React.useState)([]),
        [d, x] = (0, React.useState)(null),
        _ = (0, React.useRef)(void 0),
        h = Math.max(...K);
      (0, React.useEffect)(() => () => window.clearTimeout(_.current), []);
      let b = e => {
          window.clearTimeout(_.current), x(e), _.current = window.setTimeout(() => x(null), 900);
        },
        p = e => i(a => [...a, e]),
        u = e => ({
          id: e,
          refreshing: d === e,
          onRefresh: b,
          onHide: p
        });
      return <div className={P("bg-white dark:bg-neutral-950", O, "relative flex h-full min-h-[740px] w-full flex-col overflow-hidden")}><header className={P("border-b border-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:border-neutral-100/7", "flex h-14 shrink-0 items-center justify-between gap-3 px-4 sm:px-6")}><h1 className={P("text-[22px]/[28px] font-extrabold tracking-[-0.01em]", O, "truncate")}>Web analytics</h1>{s.length > 0 ? <button type="button" onClick={() => i([])} className={P("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] text-neutral-900 dark:text-neutral-100 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] active:not-disabled:translate-y-px active:not-disabled:shadow-[inset_0_1px_3px_rgb(84_62_32/0.16),0_0_0_1px_rgb(84_62_32/0.10)] dark:active:not-disabled:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14),0_0_0_1px_rgb(84_62_32/0.10)] dark:aria-expanded:bg-neutral-800 dark:aria-expanded:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] disabled:bg-none disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] disabled:text-neutral-900/40 disabled:shadow-none dark:disabled:bg-neutral-800/60 dark:disabled:text-neutral-100/40", "h-10 gap-2 rounded-[calc(var(--rb-r-full,999px))] px-5 text-[15px]/[20px] font-bold")}>Show {s.length} hidden</button> : <span className={P(U, T, "shrink-0")}>Updated 2 min ago</span>}</header><div className="relative min-h-0 flex-1"><div ref={e} onScroll={r} className="h-full overflow-y-auto p-4 sm:p-6"><div className="grid grid-cols-2 gap-4 lg:grid-cols-4"><div className={P("@container rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.07),0_1px_2px_rgb(84_62_32/0.06),0_8px_22px_-10px_rgb(84_62_32/0.20)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_0_0_1px_rgb(0_0_0/0.6),0_10px_24px_-12px_rgb(0_0_0/0.8)] p-1", "col-span-full")}><div className="grid grid-cols-2 gap-1 [&>:last-child:nth-child(odd)]:col-span-full @3xl:grid-flow-col @3xl:grid-cols-none @3xl:auto-cols-fr @3xl:[&>:last-child:nth-child(odd)]:col-auto">{H.map(e => {
                    let a,
                      r = (a = e.delta, /^[−-]/.test(a));
                    return <div className={P("flex min-w-0 flex-col gap-2 rounded-[calc(var(--rb-r-5xl,22px))] bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] px-3 py-3.5 dark:bg-neutral-100/4", "@container")}><p className={P("text-[14px]/[20px] font-bold text-neutral-900/78 dark:text-neutral-100/78", "text-pretty")}>{e.label}</p><div className="mt-auto flex items-end justify-between gap-3"><p className={P("flex min-w-0 flex-wrap items-baseline gap-x-1 text-[34px]/[40px] font-extrabold tracking-[-0.02em] tabular-nums text-neutral-900 dark:text-neutral-100", "truncate")}>{e.value}</p><Q values={e.spark} /></div><p className={P("inline-flex min-w-0 flex-wrap items-baseline gap-x-1 text-[13px]/[18px] font-bold tabular-nums [&>svg]:self-center text-neutral-900/78 dark:text-neutral-100/78", "truncate")}><__mod_22728.n icon={r ? __mod_37502.A : __mod_1497.A} size={14} strokeWidth={2} aria-hidden="true" /><span className="sr-only">{r ? "Down" : "Up"}</span>{e.delta}<span className={T}>vs. last week</span></p></div>;
                  })}</div></div>{!s.includes("sessions") && <Z {...u("sessions")} title="Sessions, last 14 days" className="col-span-2 flex flex-col" skeleton={<><div className={P(V, "mt-4 h-40")} /><div className="mt-2 flex justify-between"><X className="w-10" /><X className="w-10" /></div></>}><div className="mt-4 flex h-40 items-end gap-1.5">{K.map((e, a) => <svg aria-hidden="true" className="block min-w-0 flex-1" style={{
                    height: `${e / h * 100}%`
                  }}><rect width="100%" height="100%" className="fill-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_82%,black)] dark:fill-[var(--rb-accent,oklch(81%_0.16_163))]" /></svg>)}</div><div className={P("text-[13px]/[16px] font-semibold tabular-nums", T, "mt-2 flex justify-between")}><span>Mar 1</span><span>Mar 14</span></div></Z>}{!s.includes("pages") && <Z {...u("pages")} title="Top pages" className="col-span-2" skeleton={<div className="mt-3 flex flex-col gap-1.5">{J.map(e => <div className={P(V, "h-9")} />)}</div>}><ul className={P("divide-y divide-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:divide-neutral-100/7", "mt-3 flex flex-col")}>{J.map(e => <li className={P("relative flex min-h-12 w-full min-w-0 flex-wrap items-center gap-x-3 gap-y-1 py-2.5 text-left text-neutral-900 dark:text-neutral-100 transition-[background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] has-[[data-description]]:min-h-16", "min-h-[36px] justify-between")}><span className={P("font-mono text-[12px]/[16px] tabular-nums", F, "min-w-0 flex-1 truncate")}>{e.path}</span><span className={P(U, O, "shrink-0 tabular-nums")}>{e.views}</span></li>)}</ul></Z>}{!s.includes("devices") && <Z {...u("devices")} title="Devices" className="col-span-2" skeleton={<div className="mt-3 space-y-3">{G.map(e => <div><div className="flex items-center justify-between"><X className="w-16" /><X className="w-8" /></div><div className={P(V, "mt-1.5 h-1.5")} /></div>)}</div>}><ul className="mt-3 space-y-3">{G.map(e => <li><div className={P(U, "flex items-center justify-between")}><span className={F}>{e.label}</span><span className={P(O, "tabular-nums")}>{e.pct}%</span></div><div className={P("relative block h-2.5 w-full overflow-hidden rounded-[calc(var(--rb-r-full,999px))] bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] shadow-[inset_0_1px_2px_rgb(84_62_32/0.12)] dark:bg-neutral-100/12 dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.5)]", "mt-1.5 h-1.5")}><div className="block h-full rounded-[calc(var(--rb-r-full,999px))] bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_82%,black)] shadow-[inset_0_1px_0_rgb(255_255_255/0.35)] transition-[width] duration-[420ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] motion-reduce:transition-none dark:bg-[var(--rb-accent,oklch(81%_0.16_163))]" style={{
                        width: `${e.pct}%`
                      }} /></div></li>)}</ul></Z>}{!s.includes("funnel") && <Z {...u("funnel")} title="Signup funnel" className="col-span-2" skeleton={<div className="mt-3 space-y-3">{q.map(e => <div className="flex items-center justify-between"><X className="w-24" /><X className="w-14" /></div>)}</div>}><ul className="mt-3 space-y-3">{q.map((e, a) => <li className="flex items-center justify-between gap-3"><span className={P(U, F, "inline-flex items-center gap-2")}><span className={P(T, "w-4 tabular-nums")}>{a + 1}</span>{e.label}</span><span className={P(U, O, "tabular-nums")}>{e.value}</span></li>)}</ul></Z>}{4 === s.length && <div className="col-span-full flex flex-col items-center justify-center px-6 py-12 text-center"><p className="text-[19px]/[24px] font-extrabold tracking-[-0.01em] text-neutral-900 dark:text-neutral-100">All widgets hidden</p><p className={P("max-w-[48ch] text-[15px]/[22px] font-medium text-neutral-900/78 dark:text-neutral-100/78", "mt-1 max-w-xs")}>Restore them from the button in the header to see traffic, pages, devices and funnel again.</p></div>}</div></div><div aria-hidden="true" className={P("bg-linear-to-b from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 top-0 h-8", a.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={P("bg-linear-to-t from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 bottom-0 h-8", a.end ? "opacity-100" : "opacity-0")} /></div></div>;
    },
    "dashboard-4": function () {
      let {
          ref: e,
          edges: a,
          onScroll: r
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
                scrollHeight: l,
                clientHeight: n
              } = a;
              r({
                start: t > 1,
                end: Math.ceil(t + n) < l - 1
              });
            }, []);
          return (0, React.useEffect)(() => {
            t();
            let a = e.current,
              r = a?.ownerDocument.defaultView;
            if (!a || !r?.ResizeObserver) return;
            let l = new r.ResizeObserver(t);
            return l.observe(a), () => l.disconnect();
          }, [t]), {
            ref: e,
            edges: a,
            onScroll: t
          };
        }(),
        [s, i] = (0, React.useState)(!1),
        [d, x] = (0, React.useState)(!1),
        _ = (0, React.useRef)(void 0);
      return (0, React.useEffect)(() => () => window.clearTimeout(_.current), []), <div className={ea("bg-white dark:bg-neutral-950", er, "relative flex h-full min-h-[760px] w-full flex-col overflow-hidden")}><header className={ea("border-b border-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:border-neutral-100/7", "flex h-14 shrink-0 items-center justify-between gap-3 px-4 sm:px-6")}><div className="flex min-w-0 items-center gap-3"><h1 className={ea("text-[22px]/[28px] font-extrabold tracking-[-0.01em]", er)}>System status</h1><span className={ea(en, ei, "max-sm:hidden")}>2 incidents open</span></div><div className="flex shrink-0 items-center gap-3"><span aria-live="polite" className={ea("text-[14px]/[20px] font-medium", el, "hidden sm:inline")}>{s ? "Refreshing…" : d ? "Updated just now" : "Updated 2 min ago"}</span><button type="button" onClick={() => {
              window.clearTimeout(_.current), i(!0), _.current = window.setTimeout(() => {
                i(!1), x(!0);
              }, 900);
            }} disabled={s} aria-busy={s} className={ea("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] text-neutral-900 dark:text-neutral-100 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] active:not-disabled:translate-y-px active:not-disabled:shadow-[inset_0_1px_3px_rgb(84_62_32/0.16),0_0_0_1px_rgb(84_62_32/0.10)] dark:active:not-disabled:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14),0_0_0_1px_rgb(84_62_32/0.10)] dark:aria-expanded:bg-neutral-800 dark:aria-expanded:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] disabled:bg-none disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] disabled:text-neutral-900/40 disabled:shadow-none dark:disabled:bg-neutral-800/60 dark:disabled:text-neutral-100/40", "h-10 gap-2 rounded-[calc(var(--rb-r-full,999px))] px-5 text-[15px]/[20px] font-bold")}><__mod_22728.n icon={__mod_59157.A} size={18} strokeWidth={2} aria-hidden="true" className={s ? "animate-spin [animation-duration:700ms] motion-reduce:animate-none" : void 0} />Refresh</button></div></header><div className="relative min-h-0 flex-1"><div ref={e} onScroll={r} className="h-full overflow-y-auto p-4 sm:p-6"><div className="@container rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.07),0_1px_2px_rgb(84_62_32/0.06),0_8px_22px_-10px_rgb(84_62_32/0.20)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_0_0_1px_rgb(0_0_0/0.6),0_10px_24px_-12px_rgb(0_0_0/0.8)] p-1"><div className="grid grid-cols-2 gap-1 [&>:last-child:nth-child(odd)]:col-span-full @3xl:grid-flow-col @3xl:grid-cols-none @3xl:auto-cols-fr @3xl:[&>:last-child:nth-child(odd)]:col-auto">{ek.map(e => {
                  let a,
                    r = (a = e.delta, /^[−-]/.test(a));
                  return <div className={ea("flex min-w-0 flex-col gap-2 rounded-[calc(var(--rb-r-5xl,22px))] bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] px-3 py-3.5 dark:bg-neutral-100/4", "@container")}><p className={ea("text-[14px]/[20px] font-bold text-neutral-900/78 dark:text-neutral-100/78", "text-pretty")}>{e.label}</p><div className="mt-auto flex items-end justify-between gap-3"><p className={ea("flex min-w-0 flex-wrap items-baseline gap-x-1 text-[34px]/[40px] font-extrabold tracking-[-0.02em] tabular-nums text-neutral-900 dark:text-neutral-100", "truncate")}>{e.value}</p><ef values={e.spark} /></div><p className={ea("inline-flex min-w-0 flex-wrap items-baseline gap-x-1 text-[13px]/[18px] font-bold tabular-nums [&>svg]:self-center text-neutral-900/78 dark:text-neutral-100/78", "truncate")}><__mod_22728.n icon={r ? __mod_37502.A : __mod_1497.A} size={14} strokeWidth={2} aria-hidden="true" /><span className="sr-only">{r ? "Down" : "Up"}</span>{e.delta}<span className={ea(el, "hidden sm:inline")}>vs. prior period</span></p></div>;
                })}</div></div><div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2"><div className={ed}><div className={ea(ex, "h-12")}><h2 className={ec}>Services</h2></div><div className={ea(e_, "flex-1")}><table className="w-full border-separate border-spacing-0 text-left text-[15px]/[22px] font-medium"><caption className="sr-only">Service health</caption><thead><tr><th scope="col" className={ea(eh, "h-9")}>Service</th><th scope="col" className={ea(eh, ep, "hidden h-9 sm:table-cell")}>Latency</th><th scope="col" className={ea(eh, ep, "hidden h-9 sm:table-cell")}>Uptime</th><th scope="col" className={ea(eh, "h-9 text-right")}>Status</th></tr></thead><tbody>{ev.map((e, a) => <tr className={ea("group transition-[background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:not-aria-selected:bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] dark:hover:not-aria-selected:bg-neutral-100/4 dark:aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)]", "h-11")}><td className={ea(eb, "min-w-0")}><p className="truncate">{e.name}</p><p className={ea("font-mono text-[12px]/[16px] tabular-nums", el, "truncate")}>{e.region}</p></td><td className={ea(eb, ep, "hidden sm:table-cell")}>{e.latency && <span className={et}>{e.latency}</span>}</td><td className={ea(eb, ep, "hidden sm:table-cell")}>{e.uptime && <span className={et}>{e.uptime}</span>}</td><td className={ea(eb, "text-right")}><span className={ea(en, eu[e.status])}>{em[e.status]}</span></td></tr>)}</tbody></table></div></div><div className={ed}><div className={ea(ex, "h-12 justify-between")}><h2 className={ec}>Incidents</h2><span className={ea("inline-flex h-5.5 min-w-5.5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden whitespace-nowrap rounded-[calc(var(--rb-r-full,999px))] px-2.5 text-[12px]/[16px] font-bold tabular-nums", "bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] text-neutral-900 dark:text-neutral-100 dark:bg-neutral-100/12")}>{eg.length}</span></div><ul className={ea(e_, "divide-y divide-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:divide-neutral-100/7", "flex-1")}>{eg.map((e, a) => <li className={ea("relative flex min-h-12 w-full min-w-0 flex-wrap items-center gap-x-3 gap-y-1 py-2.5 text-left text-neutral-900 dark:text-neutral-100 transition-[background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] has-[[data-description]]:min-h-16", "px-3")}><div className="flex min-w-0 flex-1 flex-col gap-0.5"><p className="flex max-w-full min-w-0 items-baseline gap-2 text-[15px]/[20px] font-bold text-neutral-900 dark:text-neutral-100"><span className="truncate">{e.title}</span></p><p data-description={!0} className="flex min-w-0 items-baseline gap-2"><span className={ea("inline-flex items-start gap-1 text-[14px]/[20px] font-bold tabular-nums", e.tone)}>{e.state}</span><span className="shrink-0 text-[14px]/[20px] font-semibold tabular-nums text-neutral-900/62 dark:text-neutral-100/62">{e.when}</span></p></div></li>)}</ul></div></div></div><div aria-hidden="true" className={ea("bg-linear-to-b from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 top-0 h-8", a.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={ea("bg-linear-to-t from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 bottom-0 h-8", a.end ? "opacity-100" : "opacity-0")} /></div></div>;
    },
    "dashboard-5": function () {
      return <div className={ej("bg-white dark:bg-neutral-950", eN, "relative flex h-full min-h-[720px] w-full flex-col overflow-hidden")}><header className={ej("border-b border-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:border-neutral-100/7", "flex h-14 shrink-0 items-center justify-between gap-3 px-4 sm:px-6")}><h1 className={ej("text-[22px]/[28px] font-extrabold tracking-[-0.01em]", eN, "truncate")}>Usage</h1><span className={ej(eA, ey, "shrink-0")}>Mar 1 – Mar 31</span></header><div className="flex min-h-0 flex-1 flex-col gap-4 p-4 sm:p-6"><div className={ej(eS, "p-4 sm:p-5")}><div className="flex items-center justify-between gap-4"><div className="min-w-0"><p className={ez}>Team plan</p><p className={ej(eR, "mt-0.5 flex flex-wrap gap-x-2")}><span>$99 / month</span><span>Renews Mar 31</span></p></div><button type="button" className={ej("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_68%,white),var(--rb-accent,oklch(84%_0.15_165)))] text-[var(--rb-accent-fg,oklch(26%_0.06_168))] shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_4px_10px_-4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_80%,transparent)] hover:not-disabled:-translate-y-px hover:not-disabled:brightness-[1.04] hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_7px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_85%,transparent)] active:not-disabled:translate-y-px active:not-disabled:brightness-[0.98] active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_55%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] motion-reduce:hover:translate-y-0 disabled:opacity-45 disabled:shadow-none dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_78%,white),var(--rb-accent,oklch(81%_0.16_163)))] dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_6px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,transparent)] dark:hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_9px_22px_-8px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_60%,transparent)] dark:active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_45%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black)] dark:disabled:shadow-none", "h-10 gap-2 rounded-[calc(var(--rb-r-full,999px))] px-5 text-[15px]/[20px] font-bold")}>Upgrade plan<__mod_22728.n icon={__mod_1497.A} size={18} strokeWidth={2} aria-hidden="true" /></button></div></div><div className={ej(eS, "p-4 sm:p-5")}><h2 className={ez}>Included this month</h2><ul className="mt-4 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">{eW.map(e => {
                var a;
                return <li><div className={ej(eA, "flex items-baseline justify-between gap-3")}><span className="text-neutral-900/78 dark:text-neutral-100/78">{e.label}</span><span className={ej(ey, "tabular-nums")}><span className={eN}>{e.used}</span> / {e.limit}</span></div><div className={ej("relative block h-2.5 w-full overflow-hidden rounded-[calc(var(--rb-r-full,999px))] bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] shadow-[inset_0_1px_2px_rgb(84_62_32/0.12)] dark:bg-neutral-100/12 dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.5)]", "mt-1.5 h-1.5")}><div className={ej((a = e.pct) >= 95 ? "bg-[oklch(65.2%_0.219_26)] dark:bg-[oklch(65.2%_0.219_26)]" : a >= 90 ? "bg-[oklch(80%_0.152_68)] dark:bg-[oklch(80%_0.152_68)]" : "block h-full rounded-[calc(var(--rb-r-full,999px))] bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_82%,black)] shadow-[inset_0_1px_0_rgb(255_255_255/0.35)] transition-[width] duration-[420ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] motion-reduce:transition-none dark:bg-[var(--rb-accent,oklch(81%_0.16_163))]", "block h-full")} style={{
                      width: `${e.pct}%`
                    }} /></div></li>;
              })}</ul></div><div className={ej(eS, "min-h-0 flex-1 p-4 sm:p-5")}><div className="flex items-start justify-between gap-4"><div className="min-w-0"><h2 className={ez}>Build minutes burn-down</h2><p className={ej(eR, "mt-1 flex items-start gap-1.5")}><__mod_22728.n icon={__mod_36474.A} size={18} strokeWidth={2} aria-hidden="true" className={ej("text-[oklch(49%_0.1_68)] dark:text-[oklch(80%_0.13_68)]", "mt-px shrink-0")} /><span>Projected to exceed the 5,000 minute allowance on Mar 19</span></p></div><div className={ej(eM, ey, "hidden shrink-0 items-center gap-4 pt-1 sm:flex")}><span className="inline-flex items-center gap-1.5"><svg aria-hidden="true" viewBox="0 0 16 2" className="h-0.5 w-4 shrink-0 overflow-visible"><line x1="0" x2="16" y1="1" y2="1" strokeWidth={2} className={e$} /></svg>Used</span><span className="inline-flex items-center gap-1.5"><svg aria-hidden="true" viewBox="0 0 16 2" className="h-0.5 w-4 shrink-0 overflow-visible"><line x1="0" x2="16" y1="1" y2="1" strokeWidth={2} strokeDasharray="6 4" className={e$} /></svg>Projected</span><span className="inline-flex items-center gap-1.5"><svg aria-hidden="true" viewBox="0 0 16 2" className="h-0.5 w-4 shrink-0 overflow-visible"><line x1="0" x2="16" y1="1" y2="1" strokeWidth={1} strokeDasharray="3 3" className={eD} /></svg>Allowance</span></div></div><div className="mt-4 flex min-h-0 flex-1 gap-3"><div className={ej(eM, ey, "-my-2 flex w-10 shrink-0 flex-col justify-between text-right")}>{eL.map(e => <span>{0 === e ? "0" : `${e / 1e3}k`}</span>)}</div><div className="relative min-h-0 flex-1"><svg aria-hidden={!0} preserveAspectRatio="none" viewBox="0 0 100 100" className="absolute inset-0 h-full w-full">{eL.map(e => {
                    let a = 100 - e / 9e3 * 100;
                    return <line x1="0" x2="100" y1={a} y2={a} vectorEffect="non-scaling-stroke" shapeRendering="crispEdges" className={0 === e ? "stroke-neutral-900/12 dark:stroke-neutral-100/14" : "stroke-neutral-900/6 dark:stroke-neutral-100/8"} strokeWidth={1} />;
                  })}<line x1="0" x2="100" y1={44.44444444444444} y2={44.44444444444444} strokeDasharray="3 3" vectorEffect="non-scaling-stroke" className={eD} strokeWidth={1} /><path d={eE(eI)} fill="none" strokeDasharray="6 4" vectorEffect="non-scaling-stroke" className={e$} strokeWidth={2} strokeLinecap="round" /><path d={eE(eC)} fill="none" vectorEffect="non-scaling-stroke" className={e$} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /></svg></div></div><div className="mt-2 flex gap-3"><div className="w-10 shrink-0" aria-hidden={!0} /><div className={ej(eM, ey, "flex min-w-0 flex-1 justify-between")}>{eB.map(e => <span>{e}</span>)}</div></div></div></div></div>;
    },
    "dashboard-6": function () {
      let {
          ref: e,
          edges: a,
          onScroll: r
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
                scrollHeight: l,
                clientHeight: n
              } = a;
              r({
                start: t > 1,
                end: Math.ceil(t + n) < l - 1
              });
            }, []);
          return (0, React.useEffect)(() => {
            t();
            let a = e.current,
              r = a?.ownerDocument.defaultView;
            if (!a || !r?.ResizeObserver) return;
            let l = new r.ResizeObserver(t);
            return l.observe(a), () => l.disconnect();
          }, [t]), {
            ref: e,
            edges: a,
            onScroll: t
          };
        }(),
        [n, s] = (0, React.useState)("signups"),
        [i, o] = (0, React.useState)(!0),
        c = eP.find(e => e.key === n).label,
        d = (0, React.useId)(),
        x = `${d}-panel`;
      return <div className={eO(eF, eT, "relative flex h-full min-h-[860px] w-full flex-col overflow-hidden")}><header className={eO("border-b border-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:border-neutral-100/7", "flex h-14 shrink-0 items-center justify-between gap-3 px-4 sm:px-6")}><h1 className={eO("text-[22px]/[28px] font-extrabold tracking-[-0.01em]", eT, "truncate")}>Channels</h1><e0 value={n} onChange={s} baseId={d} panelId={x} /></header><div className="flex h-12 shrink-0 items-center justify-between gap-2 px-4 sm:px-6"><span className={eO("text-[14px]/[20px] font-medium", "text-neutral-900/62 dark:text-neutral-100/62", "flex min-w-0 gap-2")}><span className="shrink-0">{eZ.length} channels</span><span className="truncate">Mar 1 – Mar 31</span></span><div className="inline-flex items-center gap-2"><span className={eO("text-[15px]/[20px] font-bold", eU)}>Compare to previous</span><button type="button" role="switch" aria-checked={i} aria-label="Compare to previous" onClick={() => o(e => !e)} className="group relative inline-flex h-6 w-10 shrink-0 cursor-pointer items-center rounded-full bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] p-0.5 shadow-[inset_0_1px_2px_rgb(84_62_32/0.14),inset_0_0_0_1px_rgb(84_62_32/0.05)] transition-[background-color,box-shadow,outline-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:aria-[checked=false]:not-disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_94%,black)] aria-checked:bg-[var(--rb-accent,oklch(84%_0.15_165))] aria-checked:shadow-[inset_0_1px_2px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_55%,black),inset_0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_75%,black)] disabled:cursor-not-allowed disabled:opacity-45 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:bg-neutral-100/16 dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6)] dark:hover:aria-[checked=false]:not-disabled:bg-neutral-100/24 dark:aria-checked:bg-[var(--rb-accent,oklch(81%_0.16_163))] dark:aria-checked:shadow-[inset_0_1px_2px_rgb(0_0_0/0.35)]"><span className="pointer-events-none block h-5 w-5 rounded-full bg-white shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_2px_rgb(84_62_32/0.10),0_3px_8px_-2px_rgb(84_62_32/0.20)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.12),0_0_0_1px_rgb(0_0_0/0.6),0_2px_6px_-1px_rgb(0_0_0/0.6)] transition-[translate,width] duration-[280ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] motion-reduce:transition-none group-active:w-6 group-aria-checked:translate-x-4 group-aria-checked:group-active:translate-x-3 group-disabled:shadow-none dark:bg-white" /></button></div></div><div className="relative min-h-0 flex-1"><div ref={e} onScroll={r} role="region" id={x} aria-labelledby={`${d}-${eP.findIndex(e => e.key === n)}`} tabIndex={0} className={eO("focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))]", "h-full overflow-y-auto")}><table className="w-full border-separate border-spacing-0 text-left text-[15px]/[22px] font-medium"><caption className="sr-only">{c} by channel</caption><thead className={eO(eF, "sticky top-0 z-20")}><tr><th scope="col" className={eO(eV, "h-9 w-full sm:first:pl-6")}>Channel</th><th scope="col" className={eO(eV, eK, "h-9 w-28")}>{c}</th>{i && <th scope="col" className={eO(eV, eK, "h-9 w-24")}>Change</th>}<th scope="col" className={eO(eV, "hidden h-9 w-28 text-right sm:table-cell sm:last:pr-6")}>Trend</th></tr></thead><tbody>{eZ.map(e => {
                  var a;
                  let r,
                    l,
                    s = e[n];
                  return <tr className={eO("group transition-[background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:not-aria-selected:bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] dark:hover:not-aria-selected:bg-neutral-100/4 dark:aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)]", "h-11")}><td className={eO(eH, "truncate sm:first:pl-6")}>{e.name}</td><td className={eO(eH, eK)}>{s.v}</td>{i && <td className={eO(eH, eK)}><span className={eU}>{s.d}</span></td>}<td className={eO(eH, "hidden text-right sm:table-cell sm:last:pr-6")}><svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden={!0} className="ml-auto h-5 w-16"><polyline points={(r = Math.min(...(a = s.s)), l = Math.max(...a) - r || 1, a.map((e, t) => {
                          let n = t / (a.length - 1) * 100;
                          return `${n.toFixed(2)},${(92 - (e - r) / l * 84).toFixed(2)}`;
                        }).join(" "))} fill="none" vectorEffect="non-scaling-stroke" className="stroke-neutral-900/40 dark:stroke-neutral-100/45" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /></svg></td></tr>;
                })}</tbody></table></div><div aria-hidden="true" className={eO("bg-linear-to-t from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 bottom-0 h-8", a.end ? "opacity-100" : "opacity-0")} /></div></div>;
    },
    "dashboard-7": function () {
      let [e, a] = (0, React.useState)("ready"),
        r = (0, React.useId)(),
        s = `${r}-panel`;
      return <div className={e2("bg-white dark:bg-neutral-950", e5, "relative flex h-full min-h-[640px] w-full flex-col overflow-hidden")}><header className={e2("border-b border-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:border-neutral-100/7", "flex h-14 shrink-0 items-center justify-between gap-3 px-4 sm:px-6")}><h1 className={e2("text-[22px]/[28px] font-extrabold tracking-[-0.01em]", e5, "truncate")}>Recurring revenue</h1><ad value={e} onChange={a} baseId={r} panelId={s} /></header><div role="region" id={s} aria-labelledby={`${r}-${at.findIndex(a => a.key === e)}`} tabIndex={0} className={e2("focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))]", "flex min-h-0 flex-1 flex-col")}>{"empty" === e && <div className="flex min-h-0 flex-1 flex-col items-center justify-center px-6 py-12 text-center"><__mod_22728.n icon={__mod_99519.A} size={20} strokeWidth={2} aria-hidden="true" className={e2("text-neutral-900/78 dark:text-neutral-100/78", "mb-3")} /><p className="text-[19px]/[24px] font-extrabold tracking-[-0.01em] text-neutral-900 dark:text-neutral-100">No revenue data yet</p><p className={e2("max-w-[48ch] text-[15px]/[22px] font-medium text-neutral-900/78 dark:text-neutral-100/78", "mt-1 max-w-xs")}>Connect your billing provider to track recurring revenue, expansion, and churn in one place.</p><button type="button" className={e2("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_68%,white),var(--rb-accent,oklch(84%_0.15_165)))] text-[var(--rb-accent-fg,oklch(26%_0.06_168))] shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_4px_10px_-4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_80%,transparent)] hover:not-disabled:-translate-y-px hover:not-disabled:brightness-[1.04] hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_7px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_85%,transparent)] active:not-disabled:translate-y-px active:not-disabled:brightness-[0.98] active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_55%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] motion-reduce:hover:translate-y-0 disabled:opacity-45 disabled:shadow-none dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_78%,white),var(--rb-accent,oklch(81%_0.16_163)))] dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_6px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,transparent)] dark:hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_9px_22px_-8px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_60%,transparent)] dark:active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_45%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black)] dark:disabled:shadow-none", "h-10 gap-2 rounded-[calc(var(--rb-r-full,999px))] px-5 text-[15px]/[20px] font-bold", "mt-4")}>Connect billing</button></div>}{"loading" === e && <div aria-hidden={!0} className="flex min-h-0 flex-1 flex-col gap-4 p-4 sm:p-6"><div className={e2(e4, "min-h-0 flex-1 p-4")}><ac className="my-0.5 h-3 w-40" /><ac className="mt-2.5 mb-1.5 h-8 w-48" /><div className={e2(ar, "mt-4 min-h-0 flex-1")} /><div className="mt-2 flex justify-between"><ac className="my-0.5 h-3 w-8" /><ac className="my-0.5 h-3 w-8" /></div></div><div className={e9}><div className={e3}>{ai.map(e => <div className={e7}><ac className="my-0.5 h-3 w-20" /><ac className="my-1.5 h-6 w-16" /><ac className="my-0.5 h-3 w-12" /></div>)}</div></div></div>}{"ready" === e && <div className="flex min-h-0 flex-1 flex-col gap-4 p-4 sm:p-6"><div className={e2(e4, "min-h-0 flex-1 p-4")}><div><p className={ae}>Monthly recurring revenue</p><div className="mt-1 flex flex-wrap items-baseline gap-x-2.5 gap-y-1"><p className={e2("text-[44px]/[48px] font-extrabold tracking-[-0.025em] tabular-nums", e5)}>$148.2K</p><p className={aa}><__mod_22728.n icon={__mod_1497.A} size={14} strokeWidth={2} aria-hidden="true" /><span className="sr-only">Up</span>+$4.2K<span className={e6}>(+2.9%) vs. last month</span></p></div></div><div className="mt-4 flex min-h-0 flex-1 gap-3"><div className={e2(e8, e6, "-my-2 flex w-10 shrink-0 flex-col justify-between text-right")}>{al.map(e => <span>{0 === e ? "$0" : `$${e}k`}</span>)}</div><div className="relative min-h-0 flex-1"><svg aria-hidden={!0} preserveAspectRatio="none" viewBox="0 0 100 100" className="absolute inset-0 h-full w-full">{al.map(e => {
                      let a = 100 - e / 160 * 100;
                      return <line x1="0" x2="100" y1={a} y2={a} vectorEffect="non-scaling-stroke" shapeRendering="crispEdges" className={0 === e ? "stroke-neutral-900/12 dark:stroke-neutral-100/14" : "stroke-neutral-900/6 dark:stroke-neutral-100/8"} strokeWidth={1} />;
                    })}<path d={`${ao(an)} L100 100 L0 100 Z`} className="fill-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] dark:fill-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_16%,transparent)]" /><path d={ao(an)} fill="none" vectorEffect="non-scaling-stroke" className="stroke-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_82%,black)] dark:stroke-[var(--rb-accent,oklch(81%_0.16_163))]" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /></svg></div></div><div className="mt-2 flex gap-3"><div className="w-10 shrink-0" aria-hidden={!0} /><div className={e2(e8, e6, "flex min-w-0 flex-1 justify-between")}>{as.map(e => <span>{e}</span>)}</div></div></div><div className={e9}><div className={e3}>{ai.map(e => {
                  let a,
                    r = (a = e.delta, /^[−-]/.test(a));
                  return <div className={e7}><p className={e2(ae, "text-pretty")}>{e.label}</p><p className={e2("flex min-w-0 flex-wrap items-baseline gap-x-1 text-[34px]/[40px] font-extrabold tracking-[-0.02em] tabular-nums text-neutral-900 dark:text-neutral-100", "mt-auto truncate")}>{e.value}</p><p className={e2(aa, "truncate")}><__mod_22728.n icon={r ? __mod_37502.A : __mod_1497.A} size={14} strokeWidth={2} aria-hidden="true" /><span className="sr-only">{r ? "Down" : "Up"}</span>{e.delta}<span className={e2(e6, "hidden sm:inline")}>vs. last month</span></p></div>;
                })}</div></div></div>}</div></div>;
    },
    "dashboard-8": function () {
      let e = (0, React.useRef)(null),
        [a, r] = (0, React.useState)(""),
        [i, d] = (0, React.useState)("name"),
        [x, _] = (0, React.useState)(!0),
        [h, b] = (0, React.useState)(() => Object.fromEntries(aF.map(e => [e.id, e.starred]))),
        [p, u] = (0, React.useState)(null),
        [m, k] = (0, React.useState)(!1),
        {
          ref: f,
          edges: v,
          onScroll: g
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
                scrollHeight: l,
                clientHeight: n
              } = a;
              r({
                start: t > 1,
                end: Math.ceil(t + n) < l - 1
              });
            }, []);
          return (0, React.useEffect)(() => {
            t();
            let a = e.current,
              r = a?.ownerDocument.defaultView;
            if (!a || !r?.ResizeObserver) return;
            let l = new r.ResizeObserver(t);
            return l.observe(a), () => l.disconnect();
          }, [t]), {
            ref: e,
            edges: a,
            onScroll: t
          };
        }();
      (0, React.useEffect)(() => {
        if (!p) return;
        let a = e.current?.ownerDocument;
        if (!a) return;
        let r = e => {
            let a = e.target;
            a?.closest("[data-row-menu]") || u(null);
          },
          t = e => {
            "Escape" === e.key && u(null);
          };
        return a.addEventListener("pointerdown", r), a.addEventListener("keydown", t), () => {
          a.removeEventListener("pointerdown", r), a.removeEventListener("keydown", t);
        };
      }, [p]);
      let w = (0, React.useMemo)(() => {
          let e = a.trim().toLowerCase(),
            r = aF.filter(a => "" === e || a.name.toLowerCase().includes(e) || a.owner.toLowerCase().includes(e) || a.host.toLowerCase().includes(e)),
            t = x ? 1 : -1;
          return [...r].sort((e, a) => "progress" === i ? (e.done / e.total - a.done / a.total) * t : "window" === i ? (e.window - a.window) * t : "stage" === i ? (aU[e.stage] - aU[a.stage]) * t : e.name.localeCompare(a.name) * t);
        }, [a, i, x]),
        j = (e, a, r) => <th scope="col" aria-sort={i === e ? x ? "ascending" : "descending" : void 0} className={aw(aW, r)}><button type="button" onClick={() => {
            i === e ? _(e => !e) : (d(e), _(!0));
          }} aria-label={`Sort by ${a.toLowerCase()}`} data-sorted={i === e ? "" : void 0} className="-mx-1.5 inline-flex h-8 min-w-0 cursor-pointer items-center gap-1 rounded-[calc(var(--rb-r-full,999px))] px-1.5 transition-[background-color,color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-neutral-900/5 hover:text-neutral-900 data-sorted:text-neutral-900 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:hover:bg-neutral-100/6 dark:hover:text-neutral-100 dark:data-sorted:text-neutral-100">{a}<__mod_22728.n icon={i === e ? x ? __mod_24513.A : __mod_20148.A : __mod_31517.A} size={14} strokeWidth={2} aria-hidden="true" /></button></th>;
      return <div ref={e} className={aw("bg-white dark:bg-neutral-950", aj, "relative flex h-full min-h-[800px] w-full flex-col overflow-hidden")}><header className="flex h-14 shrink-0 items-center justify-between gap-3 px-4 sm:px-6"><nav aria-label="Breadcrumb" className="min-w-0"><ol className="flex min-w-0 flex-wrap items-center gap-x-2 gap-y-1 text-[15px]/[20px] font-semibold text-neutral-900/78 dark:text-neutral-100/78"><li><a href="#" className="rounded-[calc(var(--rb-r-sm,6px))] transition-[color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:text-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:hover:text-neutral-100">Home</a></li><li aria-hidden="true" className="text-neutral-900/62 dark:text-neutral-100/62 select-none">/</li><li className={aw("font-bold text-neutral-900 dark:text-neutral-100", "truncate")}>Atlas</li></ol></nav><div className="flex shrink-0 items-center gap-3"><div className={aw("flex items-center *:not-first:-ms-1.5 *:not-last:[mask-image:radial-gradient(50%_50%_at_calc(150%-6px)_50%,transparent_calc(100%+1.5px),#000_calc(100%+2px))]", "hidden sm:flex")}>{["Nora Vale", "Lena Wade", "Kenji Tan"].map(e => <span title={e} className={aw(a$, "size-[28px]")}><span className={aD}>{aT(e).charAt(0)}</span></span>)}<span className={aw(a$, "size-[28px]")}><span className={aD}>+8</span></span></div><button type="button" className={aw(aM, az, "max-sm:hidden")}><__mod_22728.n icon={__mod_89886.A} size={18} strokeWidth={2} aria-hidden="true" />Invite</button><button type="button" className={aw("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_68%,white),var(--rb-accent,oklch(84%_0.15_165)))] text-[var(--rb-accent-fg,oklch(26%_0.06_168))] shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_4px_10px_-4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_80%,transparent)] hover:not-disabled:-translate-y-px hover:not-disabled:brightness-[1.04] hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_7px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_85%,transparent)] active:not-disabled:translate-y-px active:not-disabled:brightness-[0.98] active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_55%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] motion-reduce:hover:translate-y-0 disabled:opacity-45 disabled:shadow-none dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_78%,white),var(--rb-accent,oklch(81%_0.16_163)))] dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_6px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,transparent)] dark:hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_9px_22px_-8px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_60%,transparent)] dark:active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_45%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black)] dark:disabled:shadow-none", az)}><__mod_22728.n icon={__mod_89886.A} size={18} strokeWidth={2} aria-hidden="true" />Add module</button></div></header><div className="shrink-0 px-4 pb-5 sm:px-6"><div className="@container rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.07),0_1px_2px_rgb(84_62_32/0.06),0_8px_22px_-10px_rgb(84_62_32/0.20)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_0_0_1px_rgb(0_0_0/0.6),0_10px_24px_-12px_rgb(0_0_0/0.8)] p-1"><div className="grid grid-cols-2 gap-1 [&>:last-child:nth-child(odd)]:col-span-full @3xl:grid-flow-col @3xl:grid-cols-none @3xl:auto-cols-fr @3xl:[&>:last-child:nth-child(odd)]:col-auto">{aE.map(e => <div className={aw("flex min-w-0 flex-col gap-2 rounded-[calc(var(--rb-r-5xl,22px))] bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] px-3 py-3.5 dark:bg-neutral-100/4", "@container")}><div className="flex flex-wrap items-baseline justify-between gap-x-2 gap-y-1"><h3 className={aw("text-[14px]/[20px] font-bold text-neutral-900/78 dark:text-neutral-100/78", "min-w-0 text-pretty")}>{e.label}</h3><span className={aw("inline-flex min-w-0 flex-wrap items-baseline gap-x-1 text-[13px]/[18px] font-bold tabular-nums [&>svg]:self-center text-neutral-900/78 dark:text-neutral-100/78", "shrink-0")}><__mod_22728.n icon={e.delta >= 0 ? __mod_1497.A : __mod_37502.A} size={14} strokeWidth={2} aria-hidden="true" /><span className="sr-only">{e.delta >= 0 ? "Up" : "Down"}</span>{e.delta >= 0 ? "+" : "−"}{Math.abs(e.delta).toFixed(1)}%</span></div><div className="mt-auto flex items-end justify-between gap-4"><div className="min-w-0"><p className={aw(aA, aN, "flex min-w-0 gap-2")}><span className="truncate">{e.scope}</span><span className="shrink-0">{e.period}</span></p><p className={aw("flex min-w-0 flex-wrap items-baseline gap-x-1 text-[34px]/[40px] font-extrabold tracking-[-0.02em] tabular-nums text-neutral-900 dark:text-neutral-100", "mt-1")}>{e.value}</p></div><div className="hidden w-[132px] shrink-0 @min-[17rem]:block"><aV series={e.series} /></div></div></div>)}</div></div></div><div className="flex min-h-0 flex-1 flex-col px-4 pb-4 sm:px-6 sm:pb-6"><div className={aw("relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 shadow-[inset_0_0_0_1px_rgb(84_62_32/0.05)] dark:shadow-[inset_0_0_0_1px_rgb(255_255_255/0.05)]", "min-h-0 flex-1")}><div className={aw("flex min-h-12 min-w-0 shrink-0 items-center gap-2 px-4 has-[button]:pe-2.5", "flex-wrap justify-between py-3 has-[button]:pe-4")}><div className="flex min-w-0 items-center gap-2"><h2 className="min-w-0 truncate text-[16px]/[20px] font-extrabold text-neutral-900 dark:text-neutral-100">Modules</h2><span className={aw("inline-flex h-5.5 min-w-5.5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden whitespace-nowrap rounded-[calc(var(--rb-r-full,999px))] px-2.5 text-[12px]/[16px] font-bold tabular-nums", "bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] text-neutral-900 dark:text-neutral-100 dark:bg-neutral-100/12")}>{w.length}</span></div><div className="flex flex-1 items-center justify-end gap-2"><div className={aw("relative flex w-full min-w-0 cursor-text items-center rounded-[calc(var(--rb-r-xl,12px))] data-concentric:rounded-[var(--rb-r-5xl,22px)] border border-transparent bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] text-[15px]/[20px] font-medium text-neutral-900 transition-[border-color,box-shadow,background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:not-focus-within:not-has-[[aria-invalid=true]]:not-has-[input:disabled]:not-has-[input[readonly]]:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] focus-within:border-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] focus-within:bg-white focus-within:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] has-[[aria-invalid=true]]:border-[oklch(60%_0.236_26)] has-[[aria-invalid=true]]:bg-[oklch(97.5%_0.016_26)] has-[input:disabled]:cursor-not-allowed has-[input:disabled]:text-neutral-900/40 has-[input:disabled]:shadow-none has-[input[readonly]]:cursor-default has-[input[readonly]]:shadow-none dark:text-neutral-100 dark:hover:not-focus-within:not-has-[[aria-invalid=true]]:not-has-[input:disabled]:not-has-[input[readonly]]:bg-neutral-900 dark:focus-within:border-[var(--rb-accent,oklch(81%_0.16_163))] dark:focus-within:bg-neutral-900 dark:focus-within:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:has-[[aria-invalid=true]]:border-[oklch(65.2%_0.219_26)] dark:has-[[aria-invalid=true]]:bg-[oklch(26%_0.04_26)] dark:has-[input:disabled]:text-neutral-100/40", "h-10", "w-full max-w-[260px] min-w-[140px]")}><span data-affix={!0} className="flex shrink-0 items-center gap-2 text-[15px]/[20px] font-semibold text-neutral-900/62 dark:text-neutral-100/62 select-none first:ps-3.5 last:pe-3.5 has-[button]:first:ps-1 has-[button]:last:pe-1"><__mod_22728.n icon={__mod_66575.A} size={18} strokeWidth={2} aria-hidden="true" /></span><input value={a} onChange={e => r(e.target.value)} placeholder="Search modules" aria-label="Search modules" className="h-full w-full min-w-0 flex-1 bg-transparent px-3.5 outline-none [[data-affix]+&]:ps-2 [&:has(+[data-affix])]:pe-2 placeholder:font-medium placeholder:text-neutral-900/55 disabled:cursor-not-allowed disabled:placeholder:text-neutral-900/30 dark:placeholder:text-neutral-100/55 dark:disabled:placeholder:text-neutral-100/30 dark:[color-scheme:dark]" /></div><button type="button" onClick={() => _(e => !e)} className={aw(aM, az)}><__mod_22728.n icon={__mod_91162.A} size={18} strokeWidth={2} aria-hidden="true" /><span className="max-sm:sr-only">{x ? "Ascending" : "Descending"}</span></button><button type="button" className={aw(aM, az)}><__mod_22728.n icon={__mod_68656.A} size={18} strokeWidth={2} aria-hidden="true" /><span className="max-sm:sr-only">Filters</span></button></div></div><div className={aw("mx-1 mb-1 flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-5xl,22px))] border border-transparent bg-white dark:bg-neutral-950 shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] [&:has(+*)]:mb-0", "relative min-h-0 flex-1")}><div ref={f} onScroll={g} className="h-full overflow-y-auto"><table className="w-full border-separate border-spacing-0 text-left text-[15px]/[22px] font-medium"><thead className={aw("bg-white dark:bg-neutral-950", "sticky top-0 z-10")}><tr className="h-9">{j("progress", "Progress", "sm:w-[190px]")}{j("name", "Module")}{j("window", "Window", "hidden md:table-cell w-[190px]")}{j("stage", "Status", "hidden sm:table-cell w-[150px]")}<th scope="col" className={aw(aW, "w-[112px] text-right")}>Actions</th></tr></thead><tbody>{w.map(e => {
                      let a = Math.round(e.done / e.total * 100);
                      return <tr className={aw("group transition-[background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:not-aria-selected:bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] dark:hover:not-aria-selected:bg-neutral-100/4 dark:aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)]", "h-[68px]")}><td className={aL}><div className="flex items-center gap-2.5"><aK pct={a} /><div className="min-w-0 max-sm:sr-only"><p className={aw(ay, aj, "tabular-nums")}>{a}% ready</p><p className={aw(aA, aN, "mt-0.5")}>{e.done}/{e.total} tasks</p></div></div></td><td className={aw(aL, "w-full max-w-0")}><p className={aw(ay, aj, "truncate")}>{e.name}</p><div className={aw(aA, aN, "mt-1 flex items-center gap-1.5")}><span className="shrink-0">{e.kind}</span><span aria-hidden="true" className={aw(a$, "size-[16px]")}><span className={aD}>{aT(e.owner).charAt(0)}</span></span><span className="truncate">{e.owner}</span><span className={aw("font-mono text-[12px]/[16px] tabular-nums", "hidden truncate lg:inline")}>{e.host}</span></div></td><td className={aw(aL, "hidden md:table-cell")}><p className="tabular-nums">{e.start} – {e.end}</p><p className={aw(aA, aN, "mt-0.5")}>{e.window}-day window</p></td><td className={aw(aL, "hidden sm:table-cell")}><span className={aw("inline-flex items-start gap-1.5 text-[15px]/[20px] font-bold tabular-nums", aO[e.stage])}>{"progress" === e.stage && <span className="flex h-lh shrink-0 items-center"><span className="inline-block size-3 shrink-0 rounded-full border-2 border-current border-t-transparent animate-spin [animation-duration:700ms] motion-reduce:animate-none" aria-hidden="true" /></span>}{aP[e.stage]}</span></td><td className={aL}><div className="flex items-center justify-end gap-0.5"><button type="button" aria-label={`Open ${e.name} spec`} className={aw(aS, aR)}><__mod_22728.n icon={__mod_31964.A} size={18} strokeWidth={2} aria-hidden="true" /></button><button type="button" aria-label={`${h[e.id] ? "Unstar" : "Star"} ${e.name}`} aria-pressed={h[e.id]} onClick={() => b(a => ({
                              ...a,
                              [e.id]: !a[e.id]
                            }))} className={aw(aS, aR)}><__mod_22728.n icon={__mod_12556.A} size={18} strokeWidth={2} aria-hidden="true" className={aw(h[e.id] && "[&_path]:fill-current")} /></button><div className="relative" data-row-menu={!0}><button type="button" aria-label={`More actions for ${e.name}`} aria-haspopup="menu" aria-expanded={p === e.id} onClick={a => {
                                k((f.current ? f.current.getBoundingClientRect().bottom - a.currentTarget.getBoundingClientRect().bottom : 1 / 0) < 152), u(a => a === e.id ? null : e.id);
                              }} className={aw(aS, aR)}><__mod_22728.n icon={__mod_59649.A} size={18} strokeWidth={2} aria-hidden="true" /></button>{p === e.id && <div role="menu" aria-label={`${e.name} actions`} className={aw("min-w-52 max-w-[min(480px,calc(100vw-2rem))] overflow-x-hidden overflow-y-auto overscroll-contain rounded-[calc(var(--rb-r-3xl,16px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] p-2 text-neutral-900 dark:text-neutral-100 outline-none shadow-[0_0_0_1px_rgb(84_62_32/0.08),0_24px_56px_-20px_rgb(84_62_32/0.34),0_6px_16px_-8px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.65),0_24px_56px_-16px_rgb(0_0_0/0.8)]", "absolute right-0 z-30 w-[168px] min-w-[168px]", m ? "bottom-full mb-1" : "top-full mt-1")}>{["Rename module", "Duplicate", "Move to area", "Archive"].map(e => <button type="button" role="menuitem" onClick={() => u(null)} className="relative flex min-h-10 w-full cursor-default items-center gap-2.5 rounded-[calc(var(--rb-r-md,8px))] px-3 py-2 text-left text-[15px]/[20px] font-semibold text-neutral-900 outline-none select-none [&_svg]:shrink-0 [&_svg]:text-neutral-900/70 hover:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] focus-visible:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] data-[highlighted]:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-disabled:cursor-not-allowed aria-disabled:text-neutral-900/40 dark:text-neutral-100 dark:[&_svg]:text-neutral-100/70 dark:hover:bg-neutral-100/7 dark:focus-visible:bg-neutral-100/7 dark:data-[highlighted]:bg-neutral-100/7 dark:aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-disabled:text-neutral-100/40">{e}</button>)}</div>}</div></div></td></tr>;
                    })}</tbody></table>{0 === w.length && <div className="flex h-[280px] flex-col items-center justify-center px-6 text-center"><p className="text-[19px]/[24px] font-extrabold tracking-[-0.01em] text-neutral-900 dark:text-neutral-100">No modules match “{a}”</p><p className={aw("max-w-[48ch] text-[15px]/[22px] font-medium text-neutral-900/78 dark:text-neutral-100/78", "mt-1")}>Try a module name, an owner, or a hostname.</p><button type="button" onClick={() => r("")} className={aw(aM, az, "mt-4")}>Clear search</button></div>}</div><div aria-hidden="true" className={aw("bg-linear-to-b from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 top-10 h-8", v.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={aw("bg-linear-to-t from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 bottom-0 h-8", v.end ? "opacity-100" : "opacity-0")} /></div></div></div></div>;
    },
    "dashboard-9": function () {
      let [e, a] = (0, React.useState)("Overview"),
        [r, s] = (0, React.useState)(1),
        [i, o] = (0, React.useState)(!1),
        [c, d] = (0, React.useState)(null),
        {
          ref: x,
          edges: _,
          onScroll: h
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
                scrollHeight: l,
                clientHeight: n
              } = a;
              r({
                start: t > 1,
                end: Math.ceil(t + n) < l - 1
              });
            }, []);
          return (0, React.useEffect)(() => {
            t();
            let a = e.current,
              r = a?.ownerDocument.defaultView;
            if (!a || !r?.ResizeObserver) return;
            let l = new r.ResizeObserver(t);
            return l.observe(a), () => l.disconnect();
          }, [t]), {
            ref: e,
            edges: a,
            onScroll: t
          };
        }(),
        b = ru[r],
        p = (0, React.useMemo)(() => {
          let e = {};
          for (let a of rh) {
            let r = b.cells[a.id].reduce((e, a) => e + a.hours, 0);
            e[a.id] = {
              hours: r,
              pct: Math.round(r / a.target * 100)
            };
          }
          return e;
        }, [b]),
        u = rh.reduce((e, a) => e + p[a.id].hours, 0),
        m = Math.round(rh.reduce((e, a) => e + b.cells[a.id].filter(e => "client" === e.kind).reduce((e, a) => e + a.hours, 0), 0) / (u || 1) * 100);
      return <div className={aZ("bg-white dark:bg-neutral-950", a1, "relative flex h-full min-h-[840px] w-full flex-col overflow-hidden")}><header className="shrink-0 px-4 pt-5 sm:px-6"><div className="flex items-start justify-between gap-3"><div className="min-w-0"><h1 className={aZ("text-[22px]/[28px] font-extrabold tracking-[-0.01em]", a1)}>Delivery board</h1><nav aria-label="Breadcrumb" className="mt-1"><ol className="flex min-w-0 flex-wrap items-center gap-x-2 gap-y-1 text-[15px]/[20px] font-semibold text-neutral-900/78 dark:text-neutral-100/78"><li>Accounts</li><li aria-hidden="true" className={rl}>/</li><li>Delivery</li><li aria-hidden="true" className={rl}>/</li><li className={aZ("font-bold text-neutral-900 dark:text-neutral-100", "truncate")}>Northstar rollout</li></ol></nav></div><button type="button" aria-label={i ? "Unpin board" : "Pin board"} aria-pressed={i} onClick={() => o(e => !e)} className={aZ("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-transparent text-neutral-900 hover:not-disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] active:not-disabled:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] disabled:text-neutral-900/40 dark:text-neutral-100 dark:hover:not-disabled:bg-neutral-100/8 dark:active:not-disabled:bg-neutral-100/12 dark:aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:disabled:text-neutral-100/40", a7)}><__mod_22728.n icon={__mod_12556.A} size={18} strokeWidth={2} aria-hidden="true" className={aZ(i && "[&_path]:fill-current")} /></button></div><div className="mt-4 flex items-center justify-between gap-4"><div role="tablist" aria-label="Board sections" className="flex gap-4">{rx.map(r => <button type="button" role="tab" aria-selected={r === e} onClick={() => a(r)} className="relative inline-flex min-h-10 shrink-0 cursor-pointer items-center justify-center gap-1.5 rounded-[calc(var(--rb-r-lg,10px))] px-3 text-[15px]/[20px] font-bold whitespace-nowrap text-neutral-900/78 dark:text-neutral-100/78 select-none transition-[color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:text-neutral-900 after:absolute after:inset-x-2.5 after:bottom-0 after:h-[3px] after:rounded-[calc(var(--rb-r-full,999px))] after:bg-transparent after:transition-[background-color] aria-selected:text-neutral-900 aria-selected:after:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] disabled:cursor-not-allowed disabled:text-neutral-900/40 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:hover:text-neutral-100 dark:aria-selected:text-neutral-100 dark:aria-selected:after:bg-[var(--rb-accent,oklch(81%_0.16_163))] dark:disabled:text-neutral-100/40">{r}</button>)}</div><div className="hidden shrink-0 items-center gap-2 sm:flex"><button type="button" aria-label="Add member" className={aZ("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_68%,white),var(--rb-accent,oklch(84%_0.15_165)))] text-[var(--rb-accent-fg,oklch(26%_0.06_168))] shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_4px_10px_-4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_80%,transparent)] hover:not-disabled:-translate-y-px hover:not-disabled:brightness-[1.04] hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_7px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_85%,transparent)] active:not-disabled:translate-y-px active:not-disabled:brightness-[0.98] active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_55%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] motion-reduce:hover:translate-y-0 disabled:opacity-45 disabled:shadow-none dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_78%,white),var(--rb-accent,oklch(81%_0.16_163)))] dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_6px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,transparent)] dark:hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_9px_22px_-8px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_60%,transparent)] dark:active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_45%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black)] dark:disabled:shadow-none", "size-8 rounded-[calc(var(--rb-r-full,999px))]")}><__mod_22728.n icon={__mod_89886.A} size={18} strokeWidth={2} aria-hidden="true" /></button><div className={rt}>{rh.slice(0, 3).map(e => <span title={e.name} className={aZ(ra, "size-[28px]")}><span className={rr}>{rc(e.name).charAt(0)}</span></span>)}<span className={aZ(ra, "size-[28px]")}><span className={rr}>+6</span></span></div></div></div><div aria-hidden="true" className={aZ("border-b border-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:border-neutral-100/7", "h-px")} /></header><div className="grid shrink-0 grid-cols-2 gap-3 px-4 py-5 md:grid-cols-4 sm:px-6">{rk.map(e => <div className={aZ("relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] text-neutral-900 dark:text-neutral-100 shadow-[0_0_0_1px_rgb(84_62_32/0.07),0_1px_2px_rgb(84_62_32/0.06),0_8px_22px_-10px_rgb(84_62_32/0.20)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_0_0_1px_rgb(0_0_0/0.6),0_10px_24px_-12px_rgb(0_0_0/0.8)]", "p-3.5")}><div className="flex items-center justify-between gap-2"><span className={aZ(a5, a2, "truncate")}>{e.label}</span><__mod_22728.n icon={e.icon} size={18} strokeWidth={2} aria-hidden="true" className={aZ(a2, "shrink-0")} /></div><div className="mt-auto flex flex-wrap items-end justify-between gap-x-2 gap-y-2 pt-5"><div className="min-w-0"><p className={aZ(a6, a1, "truncate")}>{e.title}</p><p className={aZ(a8, a2, "mt-0.5 truncate")}>{e.meta}</p></div>{"badge" === e.trailing && <span className={aZ(re, "text-neutral-900 dark:text-neutral-100", "shrink-0")}><span className="flex h-lh shrink-0 items-center"><span className="inline-block size-3 shrink-0 rounded-full border-2 border-current border-t-transparent animate-spin [animation-duration:700ms] motion-reduce:animate-none" aria-hidden="true" /></span>{e.badge}</span>}{"flag" === e.trailing && <span className={aZ(re, "text-[oklch(49%_0.1_68)] dark:text-[oklch(80%_0.13_68)]", "shrink-0")}>At risk</span>}{"avatars" === e.trailing && <div className={aZ(rt, "shrink-0")}>{rh.slice(0, 2).map(e => <span className={aZ(ra, "size-[28px]")}><span className={rr}>{rc(e.name).charAt(0)}</span></span>)}<span className={aZ(ra, "size-[28px]")}><span className={rr}>+1</span></span></div>}{"avatar" === e.trailing && <span className={aZ(ra, "size-[28px]")}><span className={rr}>{rc(e.title)}</span></span>}</div></div>)}</div><div className="flex min-h-0 flex-1 flex-col px-4 pb-4 sm:px-6 sm:pb-6"><div className={aZ("relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 shadow-[inset_0_0_0_1px_rgb(84_62_32/0.05)] dark:shadow-[inset_0_0_0_1px_rgb(255_255_255/0.05)]", "min-h-0 flex-1")}><div className={aZ("flex min-h-12 min-w-0 shrink-0 items-center gap-2 px-4 has-[button]:pe-2.5", "flex-wrap justify-between py-3 has-[button]:pe-4")}><div className="min-w-0"><h2 className="min-w-0 truncate text-[16px]/[20px] font-extrabold text-neutral-900 dark:text-neutral-100">Worklogs</h2><p className={aZ("text-[14px]/[20px] font-medium text-neutral-900/78 dark:text-neutral-100/78", "mt-0.5 flex flex-wrap gap-x-2")}><span>{rm(u)} logged</span><span>{m}% client billable</span></p></div><div className="flex shrink-0 items-center gap-1"><button type="button" aria-label="Previous week" disabled={0 === r} onClick={() => s(e => Math.max(0, e - 1))} className={aZ(a3, a7)}><__mod_22728.n icon={__mod_58661.A} size={18} strokeWidth={2} aria-hidden="true" /></button><span aria-live="polite" className={aZ(a6, a1, "inline-flex h-8 min-w-[132px] items-center justify-center px-2.5 tabular-nums")}>{b.label}</span><button type="button" aria-label="Next week" disabled={r === ru.length - 1} onClick={() => s(e => Math.min(ru.length - 1, e + 1))} className={aZ(a3, a7)}><__mod_22728.n icon={__mod_5042.A} size={18} strokeWidth={2} aria-hidden="true" /></button></div></div><div className={aZ("mx-1 mb-1 flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-5xl,22px))] border border-transparent bg-white dark:bg-neutral-950 shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] [&:has(+*)]:mb-0", "relative min-h-0 flex-1")}><div ref={x} onScroll={h} className="h-full overflow-x-auto overflow-y-auto"><table className={aZ("w-full border-separate border-spacing-0 text-left text-[15px]/[22px] font-medium", "min-w-[860px]")}><thead className={aZ(a0, "sticky top-0 z-10")}><tr><th scope="col" className="sticky left-0 z-10 w-[212px]"><div className={a0}><div className={aZ(rn, "flex h-9 items-center")}>People</div></div></th>{b.dates.map((e, a) => <th scope="col" className={aZ(rn, "h-9")}><span className="block text-center">{rb[a]}, {e}</span></th>)}<th scope="col" className={aZ(rn, "h-9 w-[120px] text-right")}>Total</th></tr></thead><tbody>{rh.map(e => {
                      let a = b.cells[e.id],
                        r = p[e.id],
                        l = c === e.id;
                      return <tr onPointerEnter={() => d(e.id)} onPointerLeave={() => d(null)} className={aZ("group transition-[background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:not-aria-selected:bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] dark:hover:not-aria-selected:bg-neutral-100/4 dark:aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)]", "h-[78px]")}><th scope="row" className={aZ(rs, !l && a0, "sticky left-0 z-10 text-left")}><div className="flex items-center gap-2.5"><span aria-hidden="true" className={ra}><span className={rr}>{rc(e.name)}</span></span><div className="min-w-0"><p className={aZ(a6, a1, "truncate")}>{e.name}</p><p className={aZ(a8, a2, "mt-0.5 truncate")}>{e.role}</p></div></div></th>{a.map((e, a) => <td className={rs}><div className="flex flex-col items-center gap-1.5"><span className={aZ(a6, "off" === e.kind ? a2 : a1, "min-h-4 tabular-nums")}>{(e => {
                                if (0 === e) return "";
                                let a = Math.floor(e);
                                return 0 === a ? "30m" : e - a >= .5 ? `${a}h 30m` : `${a}h`;
                              })(e.hours)}</span><span aria-hidden="true" className={aZ("relative block h-2.5 w-full overflow-hidden rounded-[calc(var(--rb-r-full,999px))] bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] shadow-[inset_0_1px_2px_rgb(84_62_32/0.12)] dark:bg-neutral-100/12 dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.5)]", "max-w-[76px]")}><span className={aZ("off" !== e.kind && r_[e.kind], "block h-full")} style={{
                                width: `${ro(e.hours / 9 * 100, 0, 100)}%`
                              }} /></span><span className={aZ(a8, a2)}>{"off" === e.kind ? "Off" : "client" === e.kind ? "Client" : "Internal"}</span></div></td>)}<td className={aZ(rs, "text-right tabular-nums")}><p className={aZ(a6, a1)}>{rm(r.hours)}</p><p className={aZ(a8, r.pct < 75 ? "text-[oklch(51%_0.18_26)] dark:text-[oklch(76%_0.14_26)]" : a2, "mt-0.5")}>{r.pct}% of {e.target}h</p></td></tr>;
                    })}</tbody></table></div><div aria-hidden="true" className={aZ("bg-linear-to-b from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 top-10 h-8", _.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={aZ("bg-linear-to-t from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 bottom-0 h-8", _.end ? "opacity-100" : "opacity-0")} /></div><div className={aZ("flex min-h-12 min-w-0 items-center gap-2 px-4 py-2 text-[14px]/[20px] font-semibold text-neutral-900/62 dark:text-neutral-100/62 has-[button]:justify-end has-[button]:pe-2.5", "shrink-0 flex-wrap justify-between")}><div className={aZ(a8, a2, "flex items-center gap-4")}><span className="inline-flex items-center gap-1.5"><span aria-hidden="true" className={aZ(ri, a4, "h-1 w-4")} />Client</span><span className="inline-flex items-center gap-1.5"><span aria-hidden="true" className={aZ(ri, a9, "h-1 w-4")} />Internal</span></div><p className={aZ(a5, a2, "flex flex-wrap gap-x-2")}><span>{rh.length} people</span><span><span className={a1}>{rm(u)}</span> this week</span></p></div></div></div></div>;
    },
    "dashboard-10": function () {
      let [e, a] = (0, React.useState)("calls"),
        [r, s] = (0, React.useState)(null),
        [i, o] = function () {
          let e = (0, React.useRef)(null),
            [a, r] = (0, React.useState)({
              width: 0,
              height: 0
            });
          return (0, React.useEffect)(() => {
            let a = e.current,
              t = a?.ownerDocument.defaultView;
            if (!a || !t?.ResizeObserver) return;
            let l = new t.ResizeObserver(([e]) => {
              let a = e.contentRect;
              r({
                width: a.width,
                height: a.height
              });
            });
            return l.observe(a), () => l.disconnect();
          }, []), [e, a];
        }(),
        {
          ref: c,
          edges: d,
          onScroll: x
        } = rK(),
        {
          ref: _,
          edges: h,
          onScroll: b
        } = rK(),
        {
          ref: p,
          edges: u,
          onScroll: m
        } = rK(),
        k = rQ.find(a => a.key === e) ?? rQ[0],
        f = o.width,
        v = o.height,
        g = Math.max(f - 40 - 1, 1),
        w = Math.max(v - 14 - 22, 1),
        j = (0, React.useMemo)(() => {
          let e = k.series;
          return {
            min: Math.min(...e),
            max: Math.max(...e),
            last: e[e.length - 1]
          };
        }, [k]),
        {
          base: N,
          top: y,
          ticks: A
        } = (0, React.useMemo)(() => {
          let e = j.max - j.min || j.max || 1,
            a = Math.max(j.max - j.min, .08 * j.max),
            r = 10 ** Math.floor(Math.log10(a / 4 || 1)),
            t = a / 4 / r,
            l = (t <= 1 ? 1 : t <= 2 ? 2 : t <= 5 ? 5 : 10) * r,
            n = Math.max(Math.floor((j.min - .35 * e) / l) * l, 0),
            s = Math.ceil((j.max + .25 * e) / l) * l,
            i = [];
          for (; n <= s + l / 1e3; e += l) i.push(n);
          return {
            base: n,
            top: s,
            ticks: i.length > 6 ? i.filter((e, a) => a % 2 == 0) : i
          };
        }, [j.max, j.min]),
        M = (0, React.useMemo)(() => {
          if (0 === f) return null;
          let e = e => 40 + rU(e, 0, k.series.length - 1, 0, g),
            a = e => 14 + w - rU(e, N, y, 0, w),
            r = (0, __mod_46667.A)().x((a, r) => e(r)).y(e => a(e)).curve(__mod_4670.G),
            t = (0, __mod_40144.A)().x((a, r) => e(r)).y0(14 + w).y1(e => a(e)).curve(__mod_4670.G);
          return {
            x: e,
            y: a,
            stroke: r(k.series) ?? "",
            fill: t(k.series) ?? ""
          };
        }, [f, g, w, N, y, k]),
        S = Math.ceil(28 / rV(Math.floor(g / 64), 2, 7)),
        z = Math.max(...rX.map(e => e.calls)),
        R = rX.reduce((e, a) => e + a.calls, 0),
        $ = null === r ? j.last : k.series[r];
      return <div className={ry("bg-white dark:bg-neutral-950", rA, "relative flex h-full min-h-[880px] w-full flex-col overflow-hidden p-4 sm:p-6")}><div className="relative flex min-h-0 flex-1 flex-col"><div ref={p} onScroll={m} className="flex min-h-0 flex-1 flex-col max-lg:overflow-y-auto"><div className={ry(rC, "shrink-0")}><div role="tablist" aria-label="Metric" className="grid shrink-0 grid-cols-3 px-1 md:grid-cols-6">{rQ.map(r => {
                  let l = r.key === e,
                    n = r.series[r.series.length - 1];
                  return <button type="button" role="tab" aria-selected={l} onClick={() => {
                    a(r.key), s(null);
                  }} className={ry("relative inline-flex min-h-10 shrink-0 cursor-pointer items-center justify-center gap-1.5 rounded-[calc(var(--rb-r-lg,10px))] px-3 text-[15px]/[20px] font-bold whitespace-nowrap text-neutral-900/78 dark:text-neutral-100/78 select-none transition-[color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:text-neutral-900 after:absolute after:inset-x-2.5 after:bottom-0 after:h-[3px] after:rounded-[calc(var(--rb-r-full,999px))] after:bg-transparent after:transition-[background-color] aria-selected:text-neutral-900 aria-selected:after:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] disabled:cursor-not-allowed disabled:text-neutral-900/40 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:hover:text-neutral-100 dark:aria-selected:text-neutral-100 dark:aria-selected:after:bg-[var(--rb-accent,oklch(81%_0.16_163))] dark:disabled:text-neutral-100/40", "py-3 text-left")}><span className="flex w-full min-w-0 flex-col"><span className={ry(rz, "truncate")}>{r.label}</span><span className="mt-1 flex items-baseline gap-1"><span className={ry("text-[17px]/[22px] font-extrabold", "shrink-0 tabular-nums")}>{r.headline(n)}</span>{r.unit && <span className={ry("ms-0.5 text-[15px]/[20px] font-bold tracking-normal text-neutral-900/78 dark:text-neutral-100/78", "min-w-0 truncate")}>{r.unit}</span>}</span></span></button>;
                })}</div><div className={ry(rB, "min-h-0 flex-1 p-4")}><div className="flex shrink-0 flex-wrap items-end justify-between gap-x-3 gap-y-2"><div className="min-w-0"><p className={ry(rz, rM, "flex min-w-0 gap-2")}><span className="truncate">{k.label}</span><span className="shrink-0">{null === r ? "last 28 days" : rJ[r]}</span></p><p className={ry("flex min-w-0 flex-wrap items-baseline gap-x-1 text-[34px]/[40px] font-extrabold tracking-[-0.02em] tabular-nums text-neutral-900 dark:text-neutral-100", "mt-0.5")}>{k.format($)}</p></div><div className="flex shrink-0 items-center gap-3"><p className={ry(rR, rM, "flex gap-3")}><span>Min <span className={rA}>{k.format(j.min)}</span></span><span>Max <span className={rA}>{k.format(j.max)}</span></span></p><button type="button" className={ry(r$, rD)}>Open report<__mod_22728.n icon={__mod_55299.A} size={18} strokeWidth={2} aria-hidden="true" /></button></div></div><div ref={i} role="application" tabIndex={0} aria-label={`${k.label} over the last 28 days`} onPointerMove={e => {
                  let a = i.current;
                  if (!a || g <= 0) return;
                  let r = a.getBoundingClientRect();
                  s(rV(Math.round((e.clientX - r.left - 40) / g * 27), 0, 27));
                }} onPointerLeave={() => s(null)} onKeyDown={e => {
                  ("ArrowLeft" === e.key || "ArrowRight" === e.key) && (e.preventDefault(), s(a => rV((a ?? 27) + ("ArrowRight" === e.key ? 1 : -1), 0, 27)));
                }} onBlur={() => s(null)} className={ry("focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))]", "transition-[color,background-color,border-color,box-shadow,outline-color,opacity,scale,translate] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms]", "relative mt-3 h-[224px] shrink-0")}>{M && <svg width={f} height={v} className="overflow-visible" aria-hidden="true">{A.map(e => {
                      let a;
                      return <g><line x1={40} x2={f - 1} y1={M.y(e)} y2={M.y(e)} strokeWidth={1} shapeRendering="crispEdges" className="stroke-neutral-900/6 dark:stroke-neutral-100/8" /><text x={0} y={M.y(e)} dy={-4} textAnchor="start" className={rO}>{"duration" === k.key ? rq(e) : Math.abs(a = Math.round(100 * e) / 100) >= 1e6 ? `${(a / 1e6).toFixed(Math.abs(a) >= 1e7 ? 0 : 1)}M` : Math.abs(a) >= 1e3 ? `${(a / 1e3).toFixed(Math.abs(a) >= 1e4 ? 0 : 1)}k` : `${a}`}</text></g>;
                    })}<path d={M.fill} className="fill-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] dark:fill-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_16%,transparent)]" /><path d={M.stroke} fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="stroke-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_82%,black)] dark:stroke-[var(--rb-accent,oklch(81%_0.16_163))]" />{rJ.map((e, a) => a % S == 0 ? <text x={M.x(a)} y={v - 4} textAnchor={0 === a ? "start" : "middle"} className={rO}>{e}</text> : null)}{null !== r && <g><line x1={M.x(r)} x2={M.x(r)} y1={14} y2={14 + w} strokeWidth={1} shapeRendering="crispEdges" className="stroke-neutral-900/40 dark:stroke-neutral-100/45" /><rect x={M.x(r) - 4} y={M.y(k.series[r]) - 4} width={8} height={8} className="fill-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_82%,black)] stroke-white stroke-[2.5] dark:fill-[var(--rb-accent,oklch(81%_0.16_163))] dark:stroke-neutral-900" /></g>}</svg>}</div></div></div><div className="mt-4 grid min-h-0 flex-1 grid-cols-1 gap-4 max-lg:flex-none lg:grid-cols-2"><div className={ry(rC, "lg:min-h-0")}><div className={ry(rI, "justify-between py-3")}><div className="min-w-0"><h3 className={rW}>Busiest agents</h3><p className={ry(rL, "mt-0.5 flex min-w-0 gap-2")}><span className="truncate">Call volume</span><span className="shrink-0">{rH(R)} total</span></p></div></div><div className={ry(rB, "relative min-h-0 flex-1")}><div ref={c} onScroll={x} className="h-full overflow-y-auto"><ul className={rS}>{rX.map((e, a) => <li className={ry(rE, "h-10 px-3")}><span className={ry(rR, rM, "w-4 shrink-0")}>{a + 1}</span><div className="relative min-w-0 flex-1"><span aria-hidden="true" className={ry("bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)]", "rounded-[var(--rb-r-sm,6px)]", "absolute inset-y-0 left-0")} style={{
                            width: `${e.calls / z * 100}%`
                          }} /><span className={ry(rP, "relative px-2 py-1")}><span className="truncate">{e.name}</span><span className={ry("font-mono text-[12px]/[16px] tabular-nums", rM, "shrink-0 truncate")}>{e.scope}</span></span></div><span className={ry("text-[15px]/[20px] font-bold", "w-12 shrink-0 text-right tabular-nums")}>{rH(e.calls)}</span></li>)}</ul></div><div aria-hidden="true" className={ry(rF, "pointer-events-none absolute inset-x-0 top-0 h-8", d.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={ry(rT, "pointer-events-none absolute inset-x-0 bottom-0 h-8", d.end ? "opacity-100" : "opacity-0")} /></div></div><div className={ry(rC, "lg:min-h-0")}><div className={ry(rI, "justify-between py-3 has-[button]:pe-4")}><div className="min-w-0"><h3 className={rW}>Integrations</h3><p className={ry(rL, "mt-0.5 truncate")}>{rY.filter(e => e.live).length} of {rY.length} connected</p></div><button type="button" className={ry(r$, rD)}>Manage<__mod_22728.n icon={__mod_52975.A} size={18} strokeWidth={2} aria-hidden="true" /></button></div><div className={ry(rB, "relative min-h-0 flex-1")}><div ref={_} onScroll={b} className="h-full overflow-y-auto"><ul className={rS}>{rY.map(e => <li className={ry(rE, "h-[52px] px-3")}><span className={ry("flex size-9 shrink-0 items-center justify-center text-neutral-900/78 dark:text-neutral-100/78", "size-9")}><__mod_22728.n icon={e.Icon} size={18} strokeWidth={2} aria-hidden="true" /></span><div className="flex min-w-0 flex-1 flex-col gap-0.5"><p className={rP}><span className="truncate">{e.name}</span></p><p className={ry("line-clamp-2 text-[14px]/[20px] font-medium text-neutral-900/78 dark:text-neutral-100/78", "truncate")}>{e.detail}</p></div>{e.live ? <span className={ry("inline-flex items-start gap-1.5 text-[15px]/[20px] font-bold tabular-nums", "text-neutral-900/78 dark:text-neutral-100/78")}>Connected</span> : <button type="button" className={ry(r$, "h-8 gap-1.5 rounded-[calc(var(--rb-r-full,999px))] px-3.5 text-[14px]/[18px] font-bold")}>Connect</button>}</li>)}</ul></div><div aria-hidden="true" className={ry(rF, "pointer-events-none absolute inset-x-0 top-0 h-8", h.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={ry(rT, "pointer-events-none absolute inset-x-0 bottom-0 h-8", h.end ? "opacity-100" : "opacity-0")} /></div></div></div></div><div aria-hidden="true" className={ry(rF, "pointer-events-none absolute inset-x-0 top-0 h-8", u.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={ry(rT, "pointer-events-none absolute inset-x-0 bottom-0 h-8", u.end ? "opacity-100" : "opacity-0")} /></div></div>;
    },
    "dashboard-11": function () {
      let [e, a] = (0, React.useState)({}),
        [r, s] = (0, React.useState)(null),
        {
          ref: d,
          edges: x,
          onScroll: _
        } = tv(),
        {
          ref: h,
          edges: b,
          onScroll: p
        } = tv(),
        {
          ref: u,
          edges: m,
          onScroll: k
        } = tv(),
        f = ty.filter(a => !e[a.id]),
        v = (0, React.useMemo)(() => {
          let e = tM.reduce((e, a) => e + a, 0),
            a = tS.reduce((e, a) => e + a, 0);
          return {
            supply: e,
            forecast: a,
            gap: e - a
          };
        }, []),
        g = r ?? 20;
      return <div className={r3("bg-white dark:bg-neutral-950", te, "relative flex h-full min-h-[820px] w-full flex-col overflow-hidden")}><header className="flex h-14 shrink-0 items-center justify-between gap-3 px-4 sm:px-6"><nav aria-label="Breadcrumb" className="min-w-0"><ol className="flex min-w-0 flex-wrap items-center gap-x-2 gap-y-1 text-[15px]/[20px] font-semibold text-neutral-900/78 dark:text-neutral-100/78"><li>Workforce</li><li aria-hidden="true" className="text-neutral-900/62 dark:text-neutral-100/62 select-none">/</li><li aria-current="page" className={r3("font-bold text-neutral-900 dark:text-neutral-100", "truncate")}>Coverage</li></ol></nav><div className="flex shrink-0 items-center gap-2"><span className={r3(ti, "bg-white text-neutral-900 dark:text-neutral-100 shadow-[0_0_0_1px_rgb(84_62_32/0.09),0_1px_2px_rgb(84_62_32/0.08)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_0_0_1px_rgb(0_0_0/0.55)] dark:bg-neutral-800", "h-auto self-stretch max-sm:hidden")}>Jun 22 – Jul 12</span><button type="button" className={r3("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_68%,white),var(--rb-accent,oklch(84%_0.15_165)))] text-[var(--rb-accent-fg,oklch(26%_0.06_168))] shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_4px_10px_-4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_80%,transparent)] hover:not-disabled:-translate-y-px hover:not-disabled:brightness-[1.04] hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_7px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_85%,transparent)] active:not-disabled:translate-y-px active:not-disabled:brightness-[0.98] active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_55%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] motion-reduce:hover:translate-y-0 disabled:opacity-45 disabled:shadow-none dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_78%,white),var(--rb-accent,oklch(81%_0.16_163)))] dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_6px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,transparent)] dark:hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_9px_22px_-8px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_60%,transparent)] dark:active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_45%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black)] dark:disabled:shadow-none", ts)}><__mod_22728.n icon={__mod_92752.A} size={18} strokeWidth={2} aria-hidden="true" />Export</button></div></header><div className="relative flex min-h-0 flex-1 flex-col"><div ref={u} onScroll={k} className="flex min-h-0 flex-1 flex-col max-lg:overflow-y-auto"><div className="shrink-0 px-4 pb-4 sm:px-6"><div className="@container rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.07),0_1px_2px_rgb(84_62_32/0.06),0_8px_22px_-10px_rgb(84_62_32/0.20)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_0_0_1px_rgb(0_0_0/0.6),0_10px_24px_-12px_rgb(0_0_0/0.8)] p-1"><div className="grid grid-cols-2 gap-1 [&>:last-child:nth-child(odd)]:col-span-full @3xl:grid-flow-col @3xl:grid-cols-none @3xl:auto-cols-fr @3xl:[&>:last-child:nth-child(odd)]:col-auto">{tg.map(e => {
                    let a = e.delta.startsWith("−") || e.delta.startsWith("-");
                    return <div className="flex min-w-0 flex-col gap-2 rounded-[calc(var(--rb-r-5xl,22px))] bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] px-3 py-3.5 dark:bg-neutral-100/4"><div className={r3("text-[14px]/[20px] font-bold text-neutral-900/78 dark:text-neutral-100/78", "flex items-start gap-2")}><span className="flex h-lh shrink-0 items-center"><__mod_22728.n icon={e.Icon} size={18} strokeWidth={2} aria-hidden="true" /></span><span className="min-w-0 text-pretty">{e.label}</span></div><p className={r3("flex min-w-0 flex-wrap items-baseline gap-x-1 text-[34px]/[40px] font-extrabold tracking-[-0.02em] tabular-nums text-neutral-900 dark:text-neutral-100", "mt-auto")}>{e.value}</p><div className="flex items-baseline justify-between gap-2"><span className={r3("text-[14px]/[20px] font-medium text-neutral-900/62 dark:text-neutral-100/62", "truncate")}>{e.meta}</span><span className={r3("inline-flex min-w-0 flex-wrap items-baseline gap-x-1 text-[13px]/[18px] font-bold tabular-nums [&>svg]:self-center text-neutral-900/78 dark:text-neutral-100/78", "shrink-0")}><__mod_22728.n icon={a ? __mod_37502.A : __mod_1497.A} size={14} strokeWidth={2} aria-hidden="true" /><span className="sr-only">{a ? "Down" : "Up"}</span>{e.delta}</span></div></div>;
                  })}</div></div></div><div className="grid min-h-0 flex-1 grid-cols-1 gap-4 px-4 pb-4 max-lg:flex-none lg:grid-cols-[minmax(0,1fr)_320px] sm:px-6 sm:pb-6"><div className="flex flex-col gap-4 lg:min-h-0"><div className={r3(td, "min-h-0 flex-1")}><div className={r3(tx, "justify-between py-3")}><div className="min-w-0"><h2 className={to}>Coverage review</h2><p className={r3(tc, "mt-0.5 truncate")}>Crew health by district</p></div><span className={r3(ti, "bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] text-neutral-900 dark:text-neutral-100 dark:bg-neutral-100/12")}>{tN.length} crews</span></div><div className={r3(t_, "relative min-h-0 flex-1")}><div ref={d} onScroll={_} className="h-full overflow-y-auto"><table className="w-full border-separate border-spacing-0 text-left text-[15px]/[22px] font-medium"><thead className={r3("bg-white dark:bg-neutral-950", "sticky top-0 z-10")}><tr className="h-9"><th scope="col" className={tp}>Crew lead</th><th scope="col" className={tp}>Coverage</th><th scope="col" className={r3(tp, "hidden w-[76px] sm:table-cell")}><span className="block text-right">Relief</span></th><th scope="col" className={r3(tp, "hidden w-[88px] sm:table-cell")}><span className="block text-right">Handoffs</span></th><th scope="col" className={r3(tp, "w-[112px]")}>Status</th></tr></thead><tbody>{tN.map(e => <tr className={r3("group transition-[background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:not-aria-selected:bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] dark:hover:not-aria-selected:bg-neutral-100/4 dark:aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)]", "h-[62px]")}><td className={tu}><div className="flex items-center gap-2.5"><span aria-hidden="true" className="relative inline-flex size-8 shrink-0 overflow-hidden rounded-full select-none"><span className="flex size-full items-center justify-center rounded-[inherit] bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_24%,white)] text-[12px]/[16px] font-extrabold tabular-nums text-neutral-900 dark:text-neutral-100 dark:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_22%,var(--color-neutral-900))]">{e.lead.split(/[\s-]+/).filter(Boolean).slice(0, 2).map(e => e[0]?.toUpperCase()).join("")}</span></span><div className="min-w-0"><p className={r3(tt, "truncate")}>{e.lead}</p><p className={r3(tl, ta, "mt-0.5 truncate")}>{e.role}</p></div></div></td><td className={tu}><div className="flex items-baseline justify-between gap-3"><span className={r3(tt, "tabular-nums")}>{e.coverage}%</span><span className={r3(tl, ta, "truncate max-sm:hidden")}>{e.note}</span></div><span aria-hidden="true" className={r3(th, "mt-1.5")}><span className={"critical" === e.health ? r3("bg-[oklch(65.2%_0.219_26)] dark:bg-[oklch(65.2%_0.219_26)]", "block h-full") : "watch" === e.health ? r3("bg-[oklch(80%_0.152_68)] dark:bg-[oklch(80%_0.152_68)]", "block h-full") : tb} style={{
                                  width: `${Math.min(100, Math.max(0, e.coverage))}%`
                                }} /></span></td><td className={r3(tu, tm, "hidden sm:table-cell")}>{e.relief}h</td><td className={r3(tu, tm, "hidden sm:table-cell")}>{e.handoffs}</td><td className={tu}><span className={r3("inline-flex items-start gap-1.5 text-[15px]/[20px] font-bold tabular-nums", tj[e.health])}>{tw[e.health]}</span></td></tr>)}</tbody></table></div><div aria-hidden="true" className={r3(tk, "pointer-events-none absolute inset-x-0 top-10 h-8", x.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={r3(tf, "pointer-events-none absolute inset-x-0 bottom-0 h-8", x.end ? "opacity-100" : "opacity-0")} /></div></div><div className={r3("relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] text-neutral-900 dark:text-neutral-100 shadow-[0_0_0_1px_rgb(84_62_32/0.07),0_1px_2px_rgb(84_62_32/0.06),0_8px_22px_-10px_rgb(84_62_32/0.20)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_0_0_1px_rgb(0_0_0/0.6),0_10px_24px_-12px_rgb(0_0_0/0.8)]", "shrink-0 p-4")}><div className="flex flex-wrap items-end justify-between gap-3"><div className="min-w-0"><h2 className={to}>Demand mix</h2><p className={r3(tc, "mt-0.5 flex min-w-0 gap-2")}><span className="truncate">Scheduled supply against forecast</span><span className="shrink-0">21 days</span></p></div><div className={r3(tl, ta, "flex shrink-0 items-center gap-4")}><span className="inline-flex items-center gap-1.5"><span aria-hidden="true" className={r3(r7, "h-2 w-4")} />Supply <span className={te}>{v.supply.toLocaleString("en-US")}</span></span><span className="inline-flex items-center gap-1.5"><span aria-hidden="true" className={r3(tr, "h-0.5 w-4 bg-current")} />Forecast <span className={te}>{v.forecast.toLocaleString("en-US")}</span></span><span className={te}>+{v.gap.toLocaleString("en-US")}</span></div></div><div className="mt-3 flex h-[108px] items-end gap-[3px]" onPointerLeave={() => s(null)}>{tM.map((e, a) => {
                      let l = tS[a],
                        n = r === a;
                      return <div onPointerEnter={() => s(a)} title={`Day ${a + 1}: ${e} scheduled, ${l} forecast`} className={r3(n && "bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] dark:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)]", "relative flex h-full flex-1 cursor-default flex-col justify-end")}><span aria-hidden="true" className={r3(tr, "absolute inset-x-0 h-[2px] bg-current")} style={{
                          bottom: `${l / tz * 100}%`
                        }} /><span aria-hidden="true" className={r3(r7, "w-full")} style={{
                          height: `${e / tz * 100}%`
                        }} /></div>;
                    })}</div><p aria-live="polite" className={r3("text-[14px]/[20px] font-medium", ta, "mt-2 flex gap-2 tabular-nums")}><span>Day {g + 1}</span><span>{tM[g]} scheduled vs {tS[g]} forecast</span></p></div></div><div className={r3(td, "lg:min-h-0")}><div className={r3(tx, "justify-between py-3 has-[button]:pe-4")}><div className="min-w-0"><h2 className={to}>Action queue</h2><p className={r3(tc, "mt-0.5 truncate")}>{0 === f.length ? "Nothing left before cutoff" : `${f.length} before cutoff`}</p></div><button type="button" aria-label="Queue options" className={r3("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-transparent text-neutral-900 hover:not-disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] active:not-disabled:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] disabled:text-neutral-900/40 dark:text-neutral-100 dark:hover:not-disabled:bg-neutral-100/8 dark:active:not-disabled:bg-neutral-100/12 dark:aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:disabled:text-neutral-100/40", "size-10 rounded-[calc(var(--rb-r-full,999px))]")}><__mod_22728.n icon={__mod_59649.A} size={18} strokeWidth={2} aria-hidden="true" /></button></div><div className={r3(t_, "relative min-h-0 flex-1")}><div ref={h} onScroll={p} className="h-full overflow-y-auto">{0 === f.length ? <div className="flex h-full min-h-[220px] flex-col items-center justify-center px-6 text-center"><__mod_22728.n icon={__mod_90987.A} size={20} strokeWidth={2} aria-hidden="true" className={ta} /><p className={r3("text-[19px]/[24px] font-extrabold tracking-[-0.01em] text-neutral-900 dark:text-neutral-100", "mt-3")}>Queue is clear</p><p className={r3("max-w-[48ch] text-[15px]/[22px] font-medium text-neutral-900/78 dark:text-neutral-100/78", "mt-1")}>Every item was handled before the cutoff.</p><button type="button" onClick={() => a({})} className={r3(tn, ts, "mt-4")}>Restore queue</button></div> : <ul className="divide-y divide-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:divide-neutral-100/7">{f.map(e => <li className={r3("relative flex min-h-12 w-full min-w-0 flex-wrap items-center gap-x-3 gap-y-1 py-2.5 text-left text-neutral-900 dark:text-neutral-100 transition-[background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] has-[[data-description]]:min-h-16", "px-3")}><span className={r3("flex size-9 shrink-0 items-center justify-center text-neutral-900/78 dark:text-neutral-100/78", "size-9")}><__mod_22728.n icon={e.Icon} size={18} strokeWidth={2} aria-hidden="true" /></span><div className="flex min-w-0 flex-1 flex-col gap-0.5"><p className="flex max-w-full min-w-0 items-baseline gap-2 text-[15px]/[20px] font-bold text-neutral-900 dark:text-neutral-100"><span className="truncate">{e.title}</span></p><p data-description={!0} className={r3("line-clamp-2 text-[14px]/[20px] font-medium text-neutral-900/78 dark:text-neutral-100/78", "truncate")}>{e.detail}</p></div><button type="button" onClick={() => a(a => ({
                          ...a,
                          [e.id]: !0
                        }))} aria-label={`${e.cta}: ${e.title}`} className={r3(tn, "h-8 gap-1.5 rounded-[calc(var(--rb-r-full,999px))] px-3.5 text-[14px]/[18px] font-bold")}>{e.cta}</button></li>)}</ul>}</div><div aria-hidden="true" className={r3(tk, "pointer-events-none absolute inset-x-0 top-0 h-8", b.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={r3(tf, "pointer-events-none absolute inset-x-0 bottom-0 h-8", b.end ? "opacity-100" : "opacity-0")} /></div><div className="flex min-h-12 min-w-0 items-center gap-2 px-4 py-2 text-[14px]/[20px] font-semibold text-neutral-900/62 dark:text-neutral-100/62 has-[button]:justify-end has-[button]:pe-2.5"><div className="min-w-0 flex-1"><p className="flex flex-wrap gap-x-2 tabular-nums"><span>Cutoff 2:00 PM</span><span>{ty.length - f.length} of {ty.length} cleared</span></p><span aria-hidden="true" className={r3(th, "mt-2")}><span className={tb} style={{
                        width: `${(ty.length - f.length) / ty.length * 100}%`
                      }} /></span></div></div></div></div></div><div aria-hidden="true" className={r3(tk, "pointer-events-none absolute inset-x-0 top-0 h-8", m.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={r3(tf, "pointer-events-none absolute inset-x-0 bottom-0 h-8", m.end ? "opacity-100" : "opacity-0")} /></div></div>;
    },
    "dashboard-12": function () {
      let [e, a] = (0, React.useState)(null),
        [r, s] = (0, React.useState)(!1),
        [i, o] = function () {
          let e = (0, React.useRef)(null),
            [a, r] = (0, React.useState)({
              width: 0,
              height: 0
            });
          return (0, React.useEffect)(() => {
            let a = e.current,
              t = a?.ownerDocument.defaultView;
            if (!a || !t?.ResizeObserver) return;
            let l = new t.ResizeObserver(([e]) => {
              let a = e.contentRect;
              r({
                width: a.width,
                height: a.height
              });
            });
            return l.observe(a), () => l.disconnect();
          }, []), [e, a];
        }(),
        {
          ref: c,
          edges: d,
          onScroll: x
        } = t2(),
        {
          ref: _,
          edges: h,
          onScroll: b
        } = t2(),
        {
          ref: p,
          edges: u,
          onScroll: m
        } = t2(),
        k = o.width,
        f = o.height,
        v = Math.max(k - 46 - 6, 1),
        g = Math.max(f - 12 - 22, 1),
        {
          top: w,
          ticks: j
        } = (0, React.useMemo)(() => function (e, a = 4) {
          if (!(e > 0)) return {
            top: 1,
            ticks: [0, 1]
          };
          let r = e / a,
            t = 10 ** Math.floor(Math.log10(r)),
            l = r / t,
            n = (l <= 1 ? 1 : l <= 2 ? 2 : l <= 2.5 ? 2.5 : l <= 5 ? 5 : 10) * t,
            s = Math.ceil(e / n) * n,
            i = [];
          for (let e = 0; e <= s + n / 1e3; e += n) i.push(e);
          return {
            top: s,
            ticks: i
          };
        }(1.1 * Math.max(...t7), 4), []),
        N = (0, React.useMemo)(() => {
          if (0 === k) return null;
          let e = e => 46 + t5(e, 0, 29, 0, v),
            a = e => 12 + g - t5(e, 0, w, 0, g),
            r = (0, __mod_46667.A)().x((a, r) => e(r)).y(e => a(e)).curve(__mod_4670.G),
            t = (0, __mod_40144.A)().x((a, r) => e(r)).y0(12 + g).y1(e => a(e)).curve(__mod_4670.G);
          return {
            x: e,
            y: a,
            receiptsLine: r(t7) ?? "",
            receiptsArea: t(t7) ?? "",
            bufferLine: r(le) ?? ""
          };
        }, [k, v, g, w]),
        y = Math.round(96370 / 225e3 * 100),
        A = lr.reduce((e, a) => e + a.amount, 0),
        M = v / 4.142857142857143 < 72 ? 14 : 7;
      return <div className={tI("bg-white dark:bg-neutral-950", tB, "relative flex h-full min-h-[820px] w-full flex-col overflow-hidden")}><header className="flex h-14 shrink-0 items-center justify-between gap-3 px-4 sm:px-6"><nav aria-label="Breadcrumb" className="min-w-0"><ol className="flex min-w-0 flex-wrap items-center gap-x-2 gap-y-1 text-[15px]/[20px] font-semibold text-neutral-900/78 dark:text-neutral-100/78"><li>Finance</li><li aria-hidden="true" className="text-neutral-900/62 dark:text-neutral-100/62 select-none">/</li><li aria-current="page" className={tI("font-bold text-neutral-900 dark:text-neutral-100", "truncate")}>Payout studio</li></ol></nav><div className="flex shrink-0 items-center gap-2"><span className={tI(tV, "bg-white text-neutral-900 dark:text-neutral-100 shadow-[0_0_0_1px_rgb(84_62_32/0.09),0_1px_2px_rgb(84_62_32/0.08)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_0_0_1px_rgb(0_0_0/0.55)] dark:bg-neutral-800", "h-auto self-stretch max-sm:hidden")}>May 12 – Jun 10</span><button type="button" className={tI(tT, tU)}><__mod_22728.n icon={__mod_92752.A} size={18} strokeWidth={2} aria-hidden="true" />Export</button></div></header><div className="relative flex min-h-0 flex-1 flex-col"><div ref={p} onScroll={m} className="flex min-h-0 flex-1 flex-col max-lg:overflow-y-auto"><div className="flex shrink-0 flex-col gap-4 px-4 pt-1 pb-4 sm:px-6"><div className="flex flex-wrap items-start justify-between gap-4"><div className="min-w-0"><h1 className={tI("text-[22px]/[28px] font-extrabold tracking-[-0.01em]", tB)}>Royalty desk</h1><div className="mt-2 flex items-center gap-2"><span className={tI(tV, tH)}>Creator finance</span><span className={tI(tP, tE, "truncate")}>Thursday, Jun 25</span></div><p className={tI(tP, tE, "mt-0.5")}>Next payout closes at 4:00 PM.</p></div><div className="flex min-w-0 flex-wrap items-end gap-4"><div className="min-w-0 text-right"><p className={tI(tP, tE)}>Clear to release</p><p className={tI("text-[44px]/[48px] font-extrabold tracking-[-0.025em] tabular-nums", tB, "mt-0.5")}>{t4(505870)}</p><p className={tI(tP, tE, "mt-0.5 tabular-nums")}>{t4(49300)} still settling</p></div><div className="flex shrink-0 items-center gap-2 pb-1"><button type="button" className={tI("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_68%,white),var(--rb-accent,oklch(84%_0.15_165)))] text-[var(--rb-accent-fg,oklch(26%_0.06_168))] shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_4px_10px_-4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_80%,transparent)] hover:not-disabled:-translate-y-px hover:not-disabled:brightness-[1.04] hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_7px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_85%,transparent)] active:not-disabled:translate-y-px active:not-disabled:brightness-[0.98] active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_55%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] motion-reduce:hover:translate-y-0 disabled:opacity-45 disabled:shadow-none dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_78%,white),var(--rb-accent,oklch(81%_0.16_163)))] dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_6px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,transparent)] dark:hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_9px_22px_-8px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_60%,transparent)] dark:active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_45%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black)] dark:disabled:shadow-none", tU)}><__mod_22728.n icon={__mod_55410.A} size={18} strokeWidth={2} aria-hidden="true" />Split</button><button type="button" onClick={() => s(!0)} className={tI(tT, tU)}><__mod_22728.n icon={__mod_59157.A} size={18} strokeWidth={2} aria-hidden="true" className={r ? tE : void 0} />{r ? "Synced" : "Sync"}</button></div></div></div><div className="@container rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.07),0_1px_2px_rgb(84_62_32/0.06),0_8px_22px_-10px_rgb(84_62_32/0.20)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_0_0_1px_rgb(0_0_0/0.6),0_10px_24px_-12px_rgb(0_0_0/0.8)] p-1"><div className="grid grid-cols-2 gap-1 [&>:last-child:nth-child(odd)]:col-span-full @3xl:grid-flow-col @3xl:grid-cols-none @3xl:auto-cols-fr @3xl:[&>:last-child:nth-child(odd)]:col-auto">{la.map(e => <div className="flex min-w-0 flex-col gap-2 rounded-[calc(var(--rb-r-5xl,22px))] bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] px-3 py-3.5 dark:bg-neutral-100/4"><div className={tI("text-[14px]/[20px] font-bold text-neutral-900/78 dark:text-neutral-100/78", "flex items-start gap-2")}><span className="flex h-lh shrink-0 items-center"><__mod_22728.n icon={e.Icon} size={18} strokeWidth={2} aria-hidden="true" /></span><span className="min-w-0 text-pretty">{e.label}</span></div><div className="mt-auto flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-2"><span className={tI("text-[14px]/[20px] font-medium text-neutral-900/62 dark:text-neutral-100/62", "truncate")}>{e.meta}</span><span className={tI("flex min-w-0 flex-wrap items-baseline gap-x-1 text-[22px]/[28px] font-extrabold tracking-[-0.01em] tabular-nums text-neutral-900 dark:text-neutral-100", "shrink-0")}>{e.value}</span></div></div>)}</div></div></div><div className="grid min-h-0 flex-1 grid-cols-1 gap-4 px-4 pb-4 max-lg:flex-none lg:grid-cols-[minmax(0,1fr)_336px] sm:px-6 sm:pb-6"><div className={tI(tG, "lg:min-h-0")}><div className={tI(tq, "flex-wrap justify-between py-3")}><div className="min-w-0"><h2 className={tK}>Royalty pace</h2><p className={tI(tJ, "mt-0.5 truncate")}>{null === e ? "Daily receipts against buffer draw" : t3[e]}</p></div><div className={tI(tF, tE, "flex shrink-0 items-center gap-4")}><span className="inline-flex items-center gap-1.5"><span aria-hidden="true" className={tI("text-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_82%,black)] dark:text-[var(--rb-accent,oklch(81%_0.16_163))]", "h-1 w-4 bg-current")} />Receipts <span className={tB}>{null === e ? `$${t8(t7[29])}` : `$${t8(t7[e])}`}</span></span><span className="inline-flex items-center gap-1.5"><span aria-hidden="true" className={tI("text-neutral-900/40 dark:text-neutral-100/45", "h-1 w-4 bg-current")} />Buffer <span className={tB}>{null === e ? `$${t8(le[29])}` : `$${t8(le[e])}`}</span></span></div></div><div className={tI(tQ, "min-h-0 flex-1")}><div ref={i} role="application" tabIndex={0} aria-label="Daily receipts against buffer draw over 30 days" onPointerMove={e => {
                    let r = i.current;
                    if (!r || v <= 0) return;
                    let t = r.getBoundingClientRect();
                    a(t6(Math.round((e.clientX - t.left - 46) / v * 29), 0, 29));
                  }} onPointerLeave={() => a(null)} onKeyDown={e => {
                    ("ArrowLeft" === e.key || "ArrowRight" === e.key) && (e.preventDefault(), a(a => t6((a ?? 29) + ("ArrowRight" === e.key ? 1 : -1), 0, 29)));
                  }} onBlur={() => a(null)} className={tI("focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))]", "transition-[color,background-color,border-color,box-shadow,outline-color,opacity,scale,translate] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms]", "relative h-[244px] shrink-0 px-3 pt-3 pb-1")}>{N && <svg width={k} height={f} className="overflow-visible" aria-hidden="true">{j.map(e => <g><line x1={46} x2={k - 6} y1={N.y(e)} y2={N.y(e)} strokeWidth={1} shapeRendering="crispEdges" className="stroke-neutral-900/6 dark:stroke-neutral-100/8" /><text x={38} y={N.y(e)} dy={3.5} textAnchor="end" className={tY}>${t8(e)}</text></g>)}<path d={N.receiptsArea} className="fill-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] dark:fill-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_16%,transparent)]" /><path d={N.bufferLine} fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="stroke-neutral-900/40 dark:stroke-neutral-100/45" /><path d={N.receiptsLine} fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="stroke-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_82%,black)] dark:stroke-[var(--rb-accent,oklch(81%_0.16_163))]" />{t3.map((e, a) => a % M == 0 && a < 27 || 29 === a ? <text x={N.x(a)} y={f - 2} textAnchor={0 === a ? "start" : 29 === a ? "end" : "middle"} className={tY}>{e}</text> : null)}{null !== e && <g><line x1={N.x(e)} x2={N.x(e)} y1={12} y2={12 + g} strokeWidth={1} shapeRendering="crispEdges" className="stroke-neutral-900/40 dark:stroke-neutral-100/45" /><rect x={N.x(e) - 4} y={N.y(le[e]) - 4} width={8} height={8} className={tZ} /><rect x={N.x(e) - 4} y={N.y(t7[e]) - 4} width={8} height={8} className={tZ} /></g>}</svg>}</div><div className="flex min-h-0 flex-1 flex-col"><div className="flex shrink-0 items-center justify-between gap-2 px-4 pt-3 pb-2"><h3 className={tK}>Recent moves</h3><span className="shrink-0 text-[14px]/[20px] font-semibold tabular-nums text-neutral-900/62 dark:text-neutral-100/62">{lt.length} today</span></div><div className="relative min-h-0 flex-1"><div ref={c} onScroll={x} className="h-full overflow-y-auto"><table className="w-full border-separate border-spacing-0 text-left text-[15px]/[22px] font-medium"><thead className={tI("bg-white dark:bg-neutral-950", "sticky top-0 z-10")}><tr>{["Reference", "Recipient", "Route", "State", "Amount"].map((e, a) => <th scope="col" className={tI("h-10 border-b border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] px-3 text-left align-middle text-[13px]/[16px] font-bold tabular-nums whitespace-nowrap text-neutral-900/62 dark:text-neutral-100/62 first:ps-4 last:pe-4 dark:bg-neutral-100/4", (2 === a || 3 === a) && "hidden sm:table-cell")}>{4 === a ? <span className="block text-right">{e}</span> : e}</th>)}</tr></thead><tbody>{lt.map(e => <tr className="group transition-[background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:not-aria-selected:bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] dark:hover:not-aria-selected:bg-neutral-100/4 dark:aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)]"><td className={tI(tX, "h-11")}><span className={tI("inline-flex h-5.5 min-w-5.5 shrink-0 items-center justify-center whitespace-nowrap rounded-[calc(var(--rb-r-md,8px))] px-2 font-mono text-[12px]/[16px] font-medium tabular-nums text-neutral-900 dark:text-neutral-100", "bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] dark:bg-neutral-100/10")}>{e.ref}</span></td><td className={tI(tX, "h-11")}><span className={tI(tO, "block truncate")}>{e.party}</span><span className={tI(tF, tE, "mt-0.5 block")}>{e.when}</span></td><td className={tI(tX, "hidden h-11 sm:table-cell")}>{e.channel}</td><td className={tI(tX, "hidden h-11 sm:table-cell")}><span className={tI("inline-flex items-start gap-1.5 text-[15px]/[20px] font-bold tabular-nums", ll[e.state].tone)}>{"clearing" === e.state && <span className="flex h-lh shrink-0 items-center"><span className="inline-block size-3 shrink-0 rounded-full border-2 border-current border-t-transparent animate-spin [animation-duration:700ms] motion-reduce:animate-none" aria-hidden="true" /></span>}{ll[e.state].label}</span></td><td className={tI(tX, "text-right tabular-nums", "h-11")}>{t4(e.amount)}</td></tr>)}</tbody></table></div><div aria-hidden="true" className={tI(t0, "pointer-events-none absolute inset-x-0 top-10 h-8", d.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={tI(t1, "pointer-events-none absolute inset-x-0 bottom-0 h-8", d.end ? "opacity-100" : "opacity-0")} /></div></div></div></div><div className={tI(tG, "lg:min-h-0")}><div className={tI(tq, "justify-between py-3")}><div className="min-w-0"><h2 className={tK}>Release room</h2><p className={tI(tJ, "mt-0.5 truncate")}>Buffer and sweep lanes</p></div><span className={tI(tV, tH)}>Vault sweep</span></div><div className={tI(tQ, "min-h-0 flex-1")}><div className="shrink-0 px-3 py-3.5"><div className="flex items-baseline justify-between gap-2"><span className={tI(tP, "text-neutral-900/78 dark:text-neutral-100/78")}>Buffer drawn</span><span className={tI(tO, "tabular-nums")}>{y}%</span></div><span aria-hidden="true" className={tI("relative block h-2.5 w-full overflow-hidden rounded-[calc(var(--rb-r-full,999px))] bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] shadow-[inset_0_1px_2px_rgb(84_62_32/0.12)] dark:bg-neutral-100/12 dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.5)]", "mt-2 h-1.5")}><span className="block h-full rounded-[calc(var(--rb-r-full,999px))] bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_82%,black)] shadow-[inset_0_1px_0_rgb(255_255_255/0.35)] transition-[width] duration-[420ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] motion-reduce:transition-none dark:bg-[var(--rb-accent,oklch(81%_0.16_163))]" style={{
                        width: `${y}%`
                      }} /></span><div className={tI(tF, tE, "mt-2 flex items-baseline justify-between gap-2")}><span>{t4(96370)} held</span><span>{t4(225e3)} limit</span></div><button type="button" className={tI(tT, tU, "mt-3.5 w-full")}><__mod_22728.n icon={__mod_20484.A} size={18} strokeWidth={2} aria-hidden="true" />Tune buffer</button></div><div className="relative min-h-0 flex-1"><div ref={_} onScroll={b} className="h-full overflow-y-auto"><ul className="divide-y divide-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:divide-neutral-100/7">{lr.map(e => <li className={tI("relative flex min-h-12 w-full min-w-0 flex-wrap items-center gap-x-3 gap-y-1 py-2.5 text-left text-neutral-900 dark:text-neutral-100 transition-[background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] has-[[data-description]]:min-h-16", "px-3")}><span className={tI("flex size-9 shrink-0 items-center justify-center text-neutral-900/78 dark:text-neutral-100/78", "size-9")}><__mod_22728.n icon={e.Icon} size={18} strokeWidth={2} aria-hidden="true" /></span><div className="flex min-w-0 flex-1 flex-col gap-0.5"><p className="flex max-w-full min-w-0 items-baseline gap-2 text-[15px]/[20px] font-bold text-neutral-900 dark:text-neutral-100"><span className="truncate">{e.name}</span></p><p data-description={!0} className={tI("line-clamp-2 text-[14px]/[20px] font-medium text-neutral-900/78 dark:text-neutral-100/78", "truncate")}><span>{e.meta[0]}</span><span className="ms-2">{e.meta[1]}</span></p></div><div className="shrink-0 text-right"><p className={tI(tO, "tabular-nums")}>{t4(e.amount)}</p><p className={tI("font-mono text-[12px]/[16px] tabular-nums", tE, "mt-0.5")}>{e.mask}</p></div></li>)}</ul></div><div aria-hidden="true" className={tI(t0, "pointer-events-none absolute inset-x-0 top-0 h-8", h.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={tI(t1, "pointer-events-none absolute inset-x-0 bottom-0 h-8", h.end ? "opacity-100" : "opacity-0")} /></div></div><div className={tI("flex min-h-12 min-w-0 items-center gap-2 px-4 py-2 text-[14px]/[20px] font-semibold text-neutral-900/62 dark:text-neutral-100/62 has-[button]:justify-end has-[button]:pe-2.5", "justify-between")}><span>{lr.length} lanes queued</span><span className={tI(tO, tB, "tabular-nums")}>{t4(A)}</span></div></div></div></div><div aria-hidden="true" className={tI(t0, "pointer-events-none absolute inset-x-0 top-0 h-8", u.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={tI(t1, "pointer-events-none absolute inset-x-0 bottom-0 h-8", u.end ? "opacity-100" : "opacity-0")} /></div></div>;
    },
    "dashboard-13": function () {
      let [e, a] = (0, React.useState)(lP[0].id),
        [r, s] = (0, React.useState)(null),
        [i, o] = function () {
          let e = (0, React.useRef)(null),
            [a, r] = (0, React.useState)({
              width: 0,
              height: 0
            });
          return (0, React.useEffect)(() => {
            let a = e.current,
              t = a?.ownerDocument.defaultView;
            if (!a || !t?.ResizeObserver) return;
            let l = new t.ResizeObserver(([e]) => {
              let a = e.contentRect;
              r({
                width: a.width,
                height: a.height
              });
            });
            return l.observe(a), () => l.disconnect();
          }, []), [e, a];
        }(),
        {
          ref: c,
          edges: d,
          onScroll: x
        } = lC(),
        {
          ref: _,
          edges: h,
          onScroll: b
        } = lC(),
        p = lP.find(a => a.id === e) ?? lP[0],
        u = (0, React.useMemo)(() => lP.reduce((e, a) => e + lU(a), 0) / lP.length, []),
        m = (0, React.useMemo)(() => lP.flatMap(e => e.results).filter(e => "behind" === lV(lF(e))).length, []),
        k = (0, React.useMemo)(() => {
          let e = lU(p),
            a = p.id.charCodeAt(1),
            r = Array.from({
              length: 9
            }, (r, t) => {
              let l = t / 8;
              return lB(e * (.16 + .84 * l) + 11 * (.5 * Math.sin(.42 * t + a) + .3 * Math.sin(.17 * t + 1.6 * a)) * (1 - .35 * l), 0, 100);
            });
          return r[8] = e, {
            actual: r,
            plan: Array.from({
              length: 13
            }, (e, a) => a / 12 * 100),
            end: e
          };
        }, [p]),
        f = o.width,
        v = o.height,
        g = Math.max(f - 40 - 4, 1),
        w = Math.max(v - 12 - 22, 1),
        j = (0, React.useMemo)(() => {
          if (0 === f) return null;
          let e = e => 40 + lI(e, 0, 12, 0, g),
            a = e => 12 + w - lI(e, 0, 100, 0, w),
            r = (0, __mod_46667.A)().x((a, r) => e(r)).y(e => a(e)).curve(__mod_4670.G),
            t = (0, __mod_40144.A)().x((a, r) => e(r)).y0(12 + w).y1(e => a(e)).curve(__mod_4670.G);
          return {
            x: e,
            y: a,
            actualLine: r(k.actual) ?? "",
            actualArea: t(k.actual) ?? "",
            planLine: r(k.plan) ?? ""
          };
        }, [f, g, w, k]),
        N = null === r ? {
          label: "Week 9",
          actual: k.end,
          plan: k.plan[8]
        } : {
          label: `Week ${r + 1}`,
          actual: r < 9 ? k.actual[r] : NaN,
          plan: k.plan[r]
        },
        y = lV(u),
        A = lH[y].Icon;
      return <div className={lx("bg-white dark:bg-neutral-950", l_, "relative flex h-full min-h-[880px] w-full flex-col overflow-hidden")}><header className="flex shrink-0 flex-wrap items-end justify-between gap-3 px-4 pt-5 pb-4 sm:px-6"><div className="min-w-0"><h1 className={lx("text-[22px]/[28px] font-extrabold tracking-[-0.01em]", l_)}>Company goals</h1><div className={lx(lp, lh, "mt-1.5 flex items-center gap-2")}><__mod_22728.n icon={__mod_71270.A} size={18} strokeWidth={2} aria-hidden="true" className="shrink-0" /><span>Q2 scorecard</span><span>week {9} of {13}</span></div></div><dl className="flex items-end gap-5"><div className="text-right"><dt className={lx(lm, lh)}>Overall</dt><dd className={lx(lk, l_, "mt-0.5")}>{lE(u)}</dd></div><div className="text-right"><dt className={lx(lm, lh)}>Quarter elapsed</dt><dd className={lx(lk, lh, "mt-0.5")}>{lE(69.23076923076923)}</dd></div><div className="pb-1 text-right"><dt className={lx(lm, lh)}>Key results at risk</dt><dd className={lx("inline-flex items-start gap-1.5 text-[15px]/[20px] font-bold tabular-nums", m > 0 ? "text-[oklch(49%_0.1_68)] dark:text-[oklch(80%_0.13_68)]" : "text-neutral-900/62 dark:text-neutral-100/62", "mt-1")}>{m}</dd></div></dl></header><div className="relative flex min-h-0 flex-1 flex-col"><div ref={_} onScroll={b} className="flex min-h-0 flex-1 flex-col max-lg:overflow-y-auto"><div className="grid min-h-0 flex-1 grid-cols-1 gap-4 px-4 pb-4 max-lg:flex-none lg:grid-cols-[340px_minmax(0,1fr)] sm:px-6 sm:pb-6"><div className={lx(lg, "lg:min-h-0")}><div className={lx(lw, "justify-between py-3")}><h2 className={lv}>Objectives</h2><span className="shrink-0 text-[14px]/[20px] font-semibold tabular-nums text-neutral-900/62 dark:text-neutral-100/62">{lP.length}</span></div><div className={lx(lj, "relative min-h-0 flex-1")}><div ref={c} onScroll={x} className="h-full overflow-y-auto"><ul className="space-y-0.5 p-1">{lP.map(r => {
                        let l = lU(r),
                          i = lV(l),
                          o = lH[i].Icon,
                          c = r.id === e;
                        return <li><button type="button" aria-current={c ? "true" : void 0} onClick={() => {
                            a(r.id), s(null);
                          }} className={lx(ly, c ? "bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] dark:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)]" : "cursor-pointer hover:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] dark:hover:bg-neutral-100/6 active:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] dark:active:bg-neutral-100/10", lf, "rounded-[var(--rb-r-4xl,18px)]", "px-2")}><div className={lA}><div className="flex items-start gap-2"><__mod_22728.n icon={__mod_85585.A} size={16} strokeWidth={2} aria-hidden="true" className={lx(lh, "mt-0.5 shrink-0")} /><span className={lx(lM, "flex-1")}>{r.name}</span><__mod_22728.n icon={__mod_5042.A} size={16} strokeWidth={2} aria-hidden="true" className={lx(c ? "text-neutral-900/78 dark:text-neutral-100/78" : lh, "mt-0.5 shrink-0")} /></div><div className={lx("shrink-0 text-[14px]/[20px] font-semibold tabular-nums text-neutral-900/62 dark:text-neutral-100/62", "mt-1 flex items-center gap-2 pl-5.5")}><span className="truncate">{r.meta}</span><span className="truncate">{r.lead}</span></div><div className="mt-2 flex items-center gap-2 pl-5.5"><span aria-hidden="true" className={lx(lS, "flex-1")}><span className={"behind" === i ? lx(lb, "block h-full") : lz} style={{
                                    width: `${l}%`
                                  }} /></span><span className={lx(lu, "w-8 shrink-0 text-right")}>{lE(l)}</span><__mod_22728.n icon={o} size={16} strokeWidth={2} aria-hidden="true" className={lx(lH[i].tone, "shrink-0")} /></div></div></button></li>;
                      })}</ul></div><div aria-hidden="true" className={lx(lW, "pointer-events-none absolute inset-x-0 top-0 h-8", d.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={lx(lL, "pointer-events-none absolute inset-x-0 bottom-0 h-8", d.end ? "opacity-100" : "opacity-0")} /></div><div className={lx(lN, "justify-between")}><span className="inline-flex items-center gap-1.5"><__mod_22728.n icon={A} size={16} strokeWidth={2} aria-hidden="true" className={lH[y].tone} />{lH[y].label} against the quarter</span></div></div><div className="flex flex-col gap-4 lg:min-h-0"><div className={lx(lg, "min-h-0 flex-1")}><div className={lx(lw, "flex-wrap justify-between py-3")}><div className="min-w-0"><h2 className={lv}>{p.name}</h2><p className={lx("text-[14px]/[20px] font-medium text-neutral-900/78 dark:text-neutral-100/78", "mt-0.5 flex min-w-0 gap-2")}><span className="shrink-0">{N.label}</span><span className="shrink-0">{Number.isNaN(N.actual) ? "not reached yet" : `${lE(N.actual)} done`}</span><span className="truncate">plan {lE(N.plan)}</span></p></div><div className={lx(lm, lh, "flex shrink-0 items-center gap-4")}><span className="inline-flex items-center gap-1.5"><span aria-hidden="true" className={lx("text-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_82%,black)] dark:text-[var(--rb-accent,oklch(81%_0.16_163))]", "h-1 w-4 bg-current")} />Actual</span><span className="inline-flex items-center gap-1.5"><span aria-hidden="true" className={lx("text-neutral-900/40 dark:text-neutral-100/45", "h-0 w-4 border-t border-dashed border-current")} />Plan</span></div></div><div className={lx(lj, "min-h-0 flex-1")}><div ref={i} role="application" tabIndex={0} aria-label={`Burn-up of ${p.name} across 13 weeks`} onPointerMove={e => {
                      let a = i.current;
                      if (!a || g <= 0) return;
                      let r = a.getBoundingClientRect();
                      s(lB(Math.round((e.clientX - r.left - 40) / g * 12), 0, 12));
                    }} onPointerLeave={() => s(null)} onKeyDown={e => {
                      ("ArrowLeft" === e.key || "ArrowRight" === e.key) && (e.preventDefault(), s(a => lB((a ?? 8) + ("ArrowRight" === e.key ? 1 : -1), 0, 12)));
                    }} onBlur={() => s(null)} className={lx(lf, "transition-[color,background-color,border-color,box-shadow,outline-color,opacity,scale,translate] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms]", "relative min-h-[172px] flex-1 p-3")}>{j && <svg width={f} height={v} className="overflow-visible" aria-hidden="true">{[0, 25, 50, 75, 100].map(e => <g><line x1={40} x2={f - 4} y1={j.y(e)} y2={j.y(e)} strokeWidth={1} shapeRendering="crispEdges" className="stroke-neutral-900/6 dark:stroke-neutral-100/8" /><text x={32} y={j.y(e)} dy={3.5} textAnchor="end" className={lR}>{e}%</text></g>)}<rect x={j.x(8)} y={12} width={Math.max(j.x(12) - j.x(8), 0)} height={w} className={l$} /><path d={j.planLine} fill="none" strokeWidth={2} strokeDasharray="6 4" className="stroke-neutral-900/40 dark:stroke-neutral-100/45" /><path d={j.actualArea} className={l$} /><path d={j.actualLine} fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="stroke-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_82%,black)] dark:stroke-[var(--rb-accent,oklch(81%_0.16_163))]" /><rect x={j.x(8) - 4} y={j.y(k.end) - 4} width={8} height={8} className={lD} />{lO.map((e, a) => a % 2 == 0 ? <text x={j.x(a)} y={v - 2} textAnchor={0 === a ? "start" : 12 === a ? "end" : "middle"} className={lR}>{e}</text> : null)}{null !== r && <g><line x1={j.x(r)} x2={j.x(r)} y1={12} y2={12 + w} strokeWidth={1} shapeRendering="crispEdges" className="stroke-neutral-900/40 dark:stroke-neutral-100/45" /><rect x={j.x(r) - 4} y={j.y(r < 9 ? k.actual[r] : k.plan[r]) - 4} width={8} height={8} className={lD} /></g>}</svg>}</div></div></div><div className={lx(lg, "shrink-0")}><div className={lx(lw, "justify-between py-3")}><h2 className={lv}>Key results</h2><span className={lx(lp, lh, "truncate")}>Start → target, current in bold</span></div><ul className={lx(lj, "divide-y divide-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:divide-neutral-100/7")}>{p.results.map(e => {
                      let a = lF(e),
                        r = lV(a),
                        l = lH[r].Icon;
                      return <li className={lx(ly, "px-3")}><span className={lx("relative inline-flex size-8 shrink-0 overflow-hidden rounded-full select-none", "size-[28px]")}><span className="flex size-full items-center justify-center rounded-[inherit] bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_24%,white)] text-[12px]/[16px] font-extrabold tabular-nums text-neutral-900 dark:text-neutral-100 dark:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_22%,var(--color-neutral-900))]">{e.owner}</span></span><div className={lA}><p className={lM}><span className="truncate">{e.name}</span></p><div className="mt-1.5 flex items-center gap-2"><span aria-hidden="true" className={lx(lS, "max-w-[220px] flex-1")}><span className={"behind" === r ? lx(lb, "block h-full") : lz} style={{
                                width: `${a}%`
                              }} /></span><span className={lx(lm, lh)}>{lT(e, e.start)} → <strong className={lx(lu, l_)}>{lT(e, e.current)}</strong> → {lT(e, e.target)}</span></div></div><span className={lx(lu, lH[r].tone, "inline-flex shrink-0 items-center gap-1.5")}><__mod_22728.n icon={l} size={16} strokeWidth={2} aria-hidden="true" />{lE(a)}</span></li>;
                    })}</ul><div className={lN}><__mod_22728.n icon={__mod_84341.A} size={16} strokeWidth={2} aria-hidden="true" />Pace compares progress with {lE(69.23076923076923)} of the quarter spent.</div></div></div></div></div><div aria-hidden="true" className={lx(lW, "pointer-events-none absolute inset-x-0 top-0 h-8", h.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={lx(lL, "pointer-events-none absolute inset-x-0 bottom-0 h-8", h.end ? "opacity-100" : "opacity-0")} /></div></div>;
    },
    "dashboard-14": function () {
      let [e, a] = (0, React.useState)(""),
        [r, s] = (0, React.useState)(ns[1].id),
        [i, o] = (0, React.useState)(null),
        [d, x] = function () {
          let e = (0, React.useRef)(null),
            [a, r] = (0, React.useState)({
              width: 0,
              height: 0
            });
          return (0, React.useEffect)(() => {
            let a = e.current,
              t = a?.ownerDocument.defaultView;
            if (!a || !t?.ResizeObserver) return;
            let l = new t.ResizeObserver(([e]) => {
              let a = e.contentRect;
              r({
                width: a.width,
                height: a.height
              });
            });
            return l.observe(a), () => l.disconnect();
          }, []), [e, a];
        }(),
        {
          ref: _,
          edges: h,
          onScroll: b
        } = nt(),
        {
          ref: p,
          edges: u,
          onScroll: m
        } = nt(),
        {
          ref: k,
          edges: f,
          onScroll: v
        } = nt(),
        g = (0, React.useMemo)(() => {
          let a = e.trim().toLowerCase();
          return a ? ns.filter(e => e.name.toLowerCase().includes(a) || e.repo.toLowerCase().includes(a) || e.region.toLowerCase().includes(a)) : ns;
        }, [e]),
        w = ns.find(e => e.id === r) ?? ns[0],
        j = (0, React.useMemo)(() => nc(w), [w]),
        N = no[w.id] ?? [],
        y = x.width,
        A = x.height,
        M = Math.max(y - 36 - 8, 1),
        S = Math.max(A - 12 - 20, 1),
        z = (0, React.useMemo)(() => {
          let e = 1.12 * Math.max(...j) / 2,
            a = 10 ** Math.floor(Math.log10(e)),
            r = e / a,
            t = (r <= 1 ? 1 : r <= 2 ? 2 : r <= 5 ? 5 : 10) * a;
          return Math.ceil(1.12 * Math.max(...j) / t) * t;
        }, [j]),
        R = (0, React.useMemo)(() => {
          if (0 === y) return null;
          let e = e => 36 + nl(e, 0, 39, 0, M),
            a = e => 12 + S - nl(e, 0, z, 0, S);
          return {
            x: e,
            y: a,
            linePath: (0, __mod_46667.A)().x((a, r) => e(r)).y(e => a(e)).curve(__mod_4670.G)(j) ?? "",
            areaPath: (0, __mod_40144.A)().x((a, r) => e(r)).y0(12 + S).y1(e => a(e)).curve(__mod_4670.G)(j) ?? ""
          };
        }, [y, M, S, z, j]),
        $ = null === i ? j[39] : j[i],
        D = ni[w.health],
        W = D.Icon,
        L = [{
          label: "Requests",
          value: `${nd(w.rps)}/s`
        }, {
          label: "p95 latency",
          value: `${w.p95.toLocaleString("en-US")}ms`
        }, {
          label: "Error rate",
          value: `${w.errorRate}%`,
          tone: w.errorRate >= 5 ? l1 : w.errorRate >= 1 ? l0 : void 0
        }, {
          label: "Saturation",
          value: `${w.saturation}%`
        }];
      return <div className={lQ("bg-white dark:bg-neutral-950", lX, "relative flex h-full min-h-[800px] w-full flex-col overflow-hidden")}><header className="flex h-14 shrink-0 items-center justify-between gap-3 px-4 sm:px-6"><div className="flex min-w-0 items-center gap-2"><__mod_22728.n icon={__mod_36048.A} size={18} strokeWidth={2} aria-hidden="true" className={lQ(lY, "shrink-0")} /><h1 className={lQ("text-[22px]/[28px] font-extrabold tracking-[-0.01em]", lX, "truncate")}>Service health</h1><span className={lQ("inline-flex h-5.5 min-w-5.5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden whitespace-nowrap rounded-[calc(var(--rb-r-full,999px))] px-2.5 text-[12px]/[16px] font-bold tabular-nums", "bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] text-neutral-900 dark:text-neutral-100 dark:bg-neutral-100/12")}>{ns.length}</span></div><div className="flex shrink-0 items-center gap-2"><span className={lQ("text-[13px]/[16px] font-semibold tabular-nums", lY, "hidden items-center gap-1.5 sm:inline-flex")}><span>Live</span><span>5s</span></span><button type="button" className={lQ(l6, l8)}><__mod_22728.n icon={__mod_59157.A} size={18} strokeWidth={2} aria-hidden="true" />Refresh</button></div></header><div className="relative flex min-h-0 flex-1 flex-col"><div ref={k} onScroll={v} className="flex min-h-0 flex-1 flex-col max-lg:overflow-y-auto"><div className="grid min-h-0 flex-1 grid-cols-1 gap-4 px-4 pb-4 max-lg:flex-none lg:grid-cols-[320px_minmax(0,1fr)] sm:px-6 sm:pb-6"><div className={lQ("relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] text-neutral-900 dark:text-neutral-100 shadow-[0_0_0_1px_rgb(84_62_32/0.07),0_1px_2px_rgb(84_62_32/0.06),0_8px_22px_-10px_rgb(84_62_32/0.20)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_0_0_1px_rgb(0_0_0/0.6),0_10px_24px_-12px_rgb(0_0_0/0.8)]", "lg:min-h-0")}><div className="shrink-0 p-2"><div className={lQ("relative flex w-full min-w-0 cursor-text items-center rounded-[calc(var(--rb-r-xl,12px))] data-concentric:rounded-[var(--rb-r-5xl,22px)] border border-transparent bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] text-[15px]/[20px] font-medium text-neutral-900 transition-[border-color,box-shadow,background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:not-focus-within:not-has-[[aria-invalid=true]]:not-has-[input:disabled]:not-has-[input[readonly]]:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] focus-within:border-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] focus-within:bg-white focus-within:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] has-[[aria-invalid=true]]:border-[oklch(60%_0.236_26)] has-[[aria-invalid=true]]:bg-[oklch(97.5%_0.016_26)] has-[input:disabled]:cursor-not-allowed has-[input:disabled]:text-neutral-900/40 has-[input:disabled]:shadow-none has-[input[readonly]]:cursor-default has-[input[readonly]]:shadow-none dark:text-neutral-100 dark:hover:not-focus-within:not-has-[[aria-invalid=true]]:not-has-[input:disabled]:not-has-[input[readonly]]:bg-neutral-900 dark:focus-within:border-[var(--rb-accent,oklch(81%_0.16_163))] dark:focus-within:bg-neutral-900 dark:focus-within:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:has-[[aria-invalid=true]]:border-[oklch(65.2%_0.219_26)] dark:has-[[aria-invalid=true]]:bg-[oklch(26%_0.04_26)] dark:has-[input:disabled]:text-neutral-100/40", "h-10")}><span data-affix={!0} className="flex shrink-0 items-center gap-2 text-[15px]/[20px] font-semibold text-neutral-900/62 dark:text-neutral-100/62 select-none first:ps-3.5 last:pe-3.5 has-[button]:first:ps-1 has-[button]:last:pe-1"><__mod_22728.n icon={__mod_66575.A} size={18} strokeWidth={2} aria-hidden="true" /></span><input type="search" value={e} onChange={e => a(e.target.value)} placeholder="Filter services" aria-label="Filter services" className="h-full w-full min-w-0 flex-1 bg-transparent px-3.5 outline-none [[data-affix]+&]:ps-2 [&:has(+[data-affix])]:pe-2 placeholder:font-medium placeholder:text-neutral-900/55 disabled:cursor-not-allowed disabled:placeholder:text-neutral-900/30 dark:placeholder:text-neutral-100/55 dark:disabled:placeholder:text-neutral-100/30 dark:[color-scheme:dark]" /></div></div><div className="relative min-h-0 flex-1"><div ref={_} onScroll={b} className="h-full overflow-y-auto">{0 === g.length ? <div className="flex h-full flex-col items-center justify-center px-6 text-center"><__mod_22728.n icon={__mod_66575.A} size={20} strokeWidth={2} aria-hidden="true" className={lY} /><p className={lQ("text-[19px]/[24px] font-extrabold tracking-[-0.01em] text-neutral-900 dark:text-neutral-100", "mt-2")}>No services match</p><p className={lQ("max-w-[48ch] text-[15px]/[22px] font-medium text-neutral-900/78 dark:text-neutral-100/78", "mt-0.5")}>Try a repo path or a region.</p></div> : <ul className="space-y-0.5 px-2 pb-2">{g.map(e => {
                        let a = e.id === r,
                          l = ni[e.health];
                        return <li><button type="button" aria-current={a ? "true" : void 0} onClick={() => {
                            s(e.id), o(null);
                          }} className={lQ(l3, a ? "bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] dark:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)]" : "cursor-pointer hover:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] dark:hover:bg-neutral-100/6 active:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] dark:active:bg-neutral-100/10", l5, lZ, "px-2")}><span className={l7}><span className={ne}><span className="truncate">{e.name}</span></span><span data-description={!0} className={lQ(l2, lY, "flex min-w-0 gap-2")}><span className="truncate">{e.repo}</span><span className="shrink-0">{e.region}</span></span></span><span className="flex shrink-0 flex-col items-end gap-0.5"><span className={lQ(l4, l.tone)}>{l.label}</span><nx values={nc(e)} tone={l.spark} /></span></button></li>;
                      })}</ul>}</div><div aria-hidden="true" className={lQ("bg-linear-to-b from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))]", "pointer-events-none absolute inset-x-0 top-0 h-8", h.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={lQ("bg-linear-to-t from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))]", "pointer-events-none absolute inset-x-0 bottom-0 h-8", h.end ? "opacity-100" : "opacity-0")} /></div></div><div className={lQ("relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 shadow-[inset_0_0_0_1px_rgb(84_62_32/0.05)] dark:shadow-[inset_0_0_0_1px_rgb(255_255_255/0.05)]", "lg:min-h-0")}><div className={lQ("flex min-h-12 min-w-0 shrink-0 items-center gap-2 px-4 has-[button]:pe-2.5", "flex-wrap justify-between py-3 has-[button]:pe-4")}><div className="min-w-0"><div className="flex items-center gap-2"><h2 className={l9}>{w.name}</h2><span className={lQ("inline-flex items-start gap-1.5 text-[15px]/[20px] font-bold tabular-nums", D.tone, "shrink-0")}><__mod_22728.n icon={W} size={16} strokeWidth={2} aria-hidden="true" />{D.label}</span></div><p className={lQ("text-[14px]/[20px] font-medium", lY, "mt-0.5 flex flex-wrap items-center gap-x-2 gap-y-0.5")}><span className={lQ(l2, "inline-flex items-center gap-1")}><__mod_22728.n icon={__mod_33126.A} size={14} strokeWidth={2} aria-hidden="true" />{w.repo}</span><span className={l2}>{w.version}</span><span>{w.deployedBy}, {w.deployedAt}</span></p></div><div className="flex shrink-0 items-center gap-2"><button type="button" className={lQ(l6, l8)}><__mod_22728.n icon={__mod_52975.A} size={18} strokeWidth={2} aria-hidden="true" />Logs</button><button type="button" className={lQ("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_68%,white),var(--rb-accent,oklch(84%_0.15_165)))] text-[var(--rb-accent-fg,oklch(26%_0.06_168))] shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_4px_10px_-4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_80%,transparent)] hover:not-disabled:-translate-y-px hover:not-disabled:brightness-[1.04] hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_7px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_85%,transparent)] active:not-disabled:translate-y-px active:not-disabled:brightness-[0.98] active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_55%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] motion-reduce:hover:translate-y-0 disabled:opacity-45 disabled:shadow-none dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_78%,white),var(--rb-accent,oklch(81%_0.16_163)))] dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_6px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,transparent)] dark:hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_9px_22px_-8px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_60%,transparent)] dark:active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_45%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black)] dark:disabled:shadow-none", l8)}>Roll back<__mod_22728.n icon={__mod_1497.A} size={18} strokeWidth={2} aria-hidden="true" /></button></div></div><div className={lQ("mx-1 mb-1 flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-5xl,22px))] border border-transparent bg-white dark:bg-neutral-950 shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] [&:has(+*)]:mb-0", "min-h-0 flex-1")}><div className="shrink-0 p-1"><dl className="grid grid-cols-2 gap-1 md:grid-cols-4">{L.map(e => <div className={lQ("flex min-w-0 flex-col gap-2 rounded-[calc(var(--rb-r-5xl,22px))] bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] px-3 py-3.5 dark:bg-neutral-100/4", lZ)}><dt className={lQ("text-[14px]/[20px] font-bold text-neutral-900/78 dark:text-neutral-100/78", "truncate")}>{e.label}</dt><dd className="flex min-w-0 flex-wrap items-baseline gap-x-1 text-[22px]/[28px] font-extrabold tracking-[-0.01em] tabular-nums text-neutral-900 dark:text-neutral-100">{e.tone ? <span className={e.tone}>{e.value}</span> : e.value}</dd></div>)}</dl></div><div className="flex min-h-0 flex-1 flex-col px-1.5"><div className="flex shrink-0 items-baseline justify-between gap-2 px-2.5 pt-3 pb-1.5"><h3 className={l9}>Throughput</h3><span className={lQ("shrink-0 text-[14px]/[20px] font-semibold tabular-nums text-neutral-900/62 dark:text-neutral-100/62", "flex gap-2")}><span>{null === i ? "last 40 min" : `t−${39 - i} min`}</span><span className={lX}>{nd($)}/s</span></span></div><div ref={d} role="application" tabIndex={0} aria-label={`Throughput for ${w.name} over the last 40 minutes`} onPointerMove={e => {
                      let a = d.current;
                      if (!a || M <= 0) return;
                      let r = a.getBoundingClientRect();
                      o(nn(Math.round((e.clientX - r.left - 36) / M * 39), 0, 39));
                    }} onPointerLeave={() => o(null)} onKeyDown={e => {
                      ("ArrowLeft" === e.key || "ArrowRight" === e.key) && (e.preventDefault(), o(a => nn((a ?? 39) + ("ArrowRight" === e.key ? 1 : -1), 0, 39)));
                    }} onBlur={() => o(null)} className={lQ(l5, "transition-[color,background-color,border-color,box-shadow,outline-color,opacity,scale,translate] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms]", "relative min-h-[130px] flex-1 px-1 pb-1")}>{R && <svg width={y} height={A} className="overflow-visible" aria-hidden="true">{[0, .5, 1].map(e => <g><line x1={36} x2={y - 8} y1={R.y(z * e)} y2={R.y(z * e)} strokeWidth={1} shapeRendering="crispEdges" className="stroke-neutral-900/6 dark:stroke-neutral-100/8" /><text x={0} y={R.y(z * e)} dy={-4} textAnchor="start" className="fill-neutral-900/60 text-[12px] font-semibold tabular-nums dark:fill-neutral-100/60">{nd(z * e)}</text></g>)}<path d={R.areaPath} className="fill-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] dark:fill-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_16%,transparent)]" /><path d={R.linePath} fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="stroke-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_82%,black)] dark:stroke-[var(--rb-accent,oklch(81%_0.16_163))]" />{null !== i && <g><line x1={R.x(i)} x2={R.x(i)} y1={12} y2={12 + S} strokeWidth={1} shapeRendering="crispEdges" className="stroke-neutral-900/40 dark:stroke-neutral-100/45" /><rect x={R.x(i) - 4} y={R.y(j[i]) - 4} width={8} height={8} className="fill-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_82%,black)] stroke-white stroke-[2.5] dark:fill-[var(--rb-accent,oklch(81%_0.16_163))] dark:stroke-neutral-900" /></g>}</svg>}</div></div><div className="flex min-h-0 flex-1 flex-col"><h3 className={lQ(l9, "shrink-0 px-4 pt-2.5 pb-1.5")}>Recent activity</h3><div className="relative min-h-0 flex-1"><div ref={p} onScroll={m} className="h-full overflow-y-auto"><ul className="divide-y divide-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:divide-neutral-100/7">{N.map(e => <li className={lQ(l3, "px-4")}><span className={l7}><span className={ne}><span className="truncate">{e.text}</span></span><span data-description={!0} className={lQ("line-clamp-2 text-[14px]/[20px] font-medium text-neutral-900/78 dark:text-neutral-100/78", "truncate")}><span>{e.meta[0]}</span><span className="ms-2">{e.meta[1]}</span></span></span><span className={lQ(l4, ni[e.kind].tone, "shrink-0")}>{ni[e.kind].label}</span></li>)}</ul></div><div aria-hidden="true" className={lQ(na, "pointer-events-none absolute inset-x-0 top-0 h-6", u.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={lQ(nr, "pointer-events-none absolute inset-x-0 bottom-0 h-6", u.end ? "opacity-100" : "opacity-0")} /></div></div></div></div></div></div><div aria-hidden="true" className={lQ(na, "pointer-events-none absolute inset-x-0 top-0 h-8", f.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={lQ(nr, "pointer-events-none absolute inset-x-0 bottom-0 h-8", f.end ? "opacity-100" : "opacity-0")} /></div></div>;
    }
  },
  nh = {
    "dashboard-1": 640,
    "dashboard-2": 720,
    "dashboard-3": 740,
    "dashboard-4": 760,
    "dashboard-5": 720,
    "dashboard-6": 860,
    "dashboard-7": 640,
    "dashboard-8": 800,
    "dashboard-9": 840,
    "dashboard-10": 880,
    "dashboard-11": 820,
    "dashboard-12": 820,
    "dashboard-13": 880,
    "dashboard-14": 800
  };

export { n_ as components };
export { nh as heights };

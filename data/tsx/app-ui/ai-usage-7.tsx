import * as __mod_22728 from "../_helpers/22728";
import * as __mod_1497 from "../_helpers/1497";
import * as __mod_37502 from "../_helpers/37502";
import * as __mod_90987 from "../_helpers/90987";
import * as __mod_46772 from "../_helpers/46772";
import * as __mod_66575 from "../_helpers/66575";
import * as __mod_36474 from "../_helpers/36474";
import * as __mod_5042 from "../_helpers/5042";
import * as __mod_89289 from "../_helpers/89289";
/**
 * Ai Usage 7
 * slug: ai-usage-7
 * category: ai-usage
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let n = (...e) => e.filter(Boolean).join(" "),
  o = "text-neutral-900 dark:text-neutral-100",
  i = "text-neutral-900/62 dark:text-neutral-100/62",
  s = "inline-block size-2.5 shrink-0 rounded-full",
  c = n("text-[14px]/[20px] font-medium", i),
  d = n("text-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_82%,black)] dark:text-[var(--rb-accent,oklch(81%_0.16_163))]", "bg-current"),
  _ = n("text-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_62%,transparent)] dark:text-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_48%,transparent)]", "bg-current"),
  x = e => Math.abs(e) >= 1e6 ? `${(e / 1e6).toFixed(Math.abs(e) >= 1e7 ? 0 : 1)}M` : Math.abs(e) >= 1e3 ? `${(e / 1e3).toFixed(Math.abs(e) >= 1e4 ? 0 : 1)}k` : `${e}`,
  b = e => e >= 100 ? `$${e.toLocaleString("en-US", {
    maximumFractionDigits: 0
  })}` : `$${e.toFixed(2)}`,
  u = ["7d", "30d", "90d"],
  p = {
    "7d": [{
      label: "Mon",
      input: 4.1,
      output: 1.6
    }, {
      label: "Tue",
      input: 5.3,
      output: 2.2
    }, {
      label: "Wed",
      input: 6.8,
      output: 2.6
    }, {
      label: "Thu",
      input: 5.9,
      output: 2.4
    }, {
      label: "Fri",
      input: 8.2,
      output: 3.4
    }, {
      label: "Sat",
      input: 2.4,
      output: .9
    }, {
      label: "Sun",
      input: 1.9,
      output: .7
    }],
    "30d": [{
      label: "W1",
      input: 22.4,
      output: 8.8
    }, {
      label: "W2",
      input: 26.1,
      output: 10.4
    }, {
      label: "W3",
      input: 31.7,
      output: 12.9
    }, {
      label: "W4",
      input: 34.6,
      output: 13.8
    }],
    "90d": [{
      label: "Apr",
      input: 71.2,
      output: 27.9
    }, {
      label: "May",
      input: 88.4,
      output: 35.1
    }, {
      label: "Jun",
      input: 96.8,
      output: 39.4
    }]
  };
let v = (...e) => e.filter(Boolean).join(" "),
  g = "text-neutral-900/62 dark:text-neutral-100/62",
  f = "text-[15px]/[20px] font-bold",
  w = v("text-[14px]/[20px] font-medium", g),
  j = v("text-[13px]/[16px] font-semibold tabular-nums", g),
  N = v("text-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_62%,transparent)] dark:text-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_48%,transparent)]", "bg-current"),
  y = e => e >= 1e6 ? `${(e / 1e6).toFixed(e >= 1e7 ? 0 : 1)}M` : e >= 1e3 ? `${(e / 1e3).toFixed(e >= 1e4 ? 0 : 1)}k` : `${e}`,
  C = e => `$${e.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })}`,
  A = [{
    name: "Atlas Pro",
    provider: "Meridian Labs",
    requests: 48210,
    input: 2148e5,
    output: 614e5,
    cost: 1565.4,
    delta: 12.4
  }, {
    name: "Atlas",
    provider: "Meridian Labs",
    requests: 126940,
    input: 3882e5,
    output: 947e5,
    cost: 812.06,
    delta: -4.1
  }, {
    name: "Atlas Long",
    provider: "Meridian Labs",
    requests: 6480,
    input: 5126e5,
    output: 189e5,
    cost: 704.28,
    delta: 31.7
  }, {
    name: "Quill",
    provider: "Northwind AI",
    requests: 71360,
    input: 1421e5,
    output: 403e5,
    cost: 356.72,
    delta: 2.8
  }, {
    name: "Ember",
    provider: "Orbital",
    requests: 213780,
    input: 964e5,
    output: 221e5,
    cost: 118.94,
    delta: -18.3
  }, {
    name: "Ember Mini",
    provider: "Orbital",
    requests: 402150,
    input: 617e5,
    output: 148e5,
    cost: 42.6,
    delta: 46.2
  }],
  M = [{
    key: "cost",
    label: "Cost"
  }, {
    key: "requests",
    label: "Requests"
  }, {
    key: "tokens",
    label: "Tokens"
  }],
  L = (e, a) => "cost" === a ? e.cost : "requests" === a ? e.requests : e.input + e.output;
function S({
  delta: e,
  className: a
}) {
  let r = e >= 0;
  return <span className={v("inline-flex min-w-0 flex-wrap items-baseline gap-x-1 text-[13px]/[18px] font-bold tabular-nums [&>svg]:self-center text-neutral-900/78 dark:text-neutral-100/78", a)}><__mod_22728.n icon={r ? __mod_1497.A : __mod_37502.A} size={14} strokeWidth={2} aria-hidden="true" /><span className="sr-only">{r ? "Up" : "Down"}</span>{Math.abs(e).toFixed(1)}%</span>;
}
let q = (...e) => e.filter(Boolean).join(" "),
  W = "text-neutral-900 dark:text-neutral-100",
  T = "text-neutral-900/62 dark:text-neutral-100/62",
  D = "text-[15px]/[20px] font-bold",
  R = q("text-[14px]/[20px] font-medium", T),
  U = q("text-[13px]/[16px] font-semibold tabular-nums", T),
  F = [{
    id: "rpm",
    label: "Requests per minute",
    hint: "Rolling 60 second window",
    used: 412,
    cap: 500,
    unit: "req"
  }, {
    id: "tpm",
    label: "Tokens per minute",
    hint: "Input and output combined",
    used: 148e3,
    cap: 4e5,
    unit: "tok"
  }, {
    id: "concurrent",
    label: "Concurrent requests",
    hint: "In flight right now",
    used: 18,
    cap: 40,
    unit: "req"
  }, {
    id: "batch",
    label: "Queued batch jobs",
    hint: "Waiting for a worker",
    used: 3,
    cap: 25,
    unit: "jobs"
  }],
  P = ["Tier 1", "Tier 2", "Tier 3"],
  I = {
    "Tier 1": 1,
    "Tier 2": 4,
    "Tier 3": 10
  };
let B = (...e) => e.filter(Boolean).join(" "),
  H = "text-neutral-900/62 dark:text-neutral-100/62",
  O = "text-[15px]/[20px] font-bold",
  K = B("text-[14px]/[20px] font-medium", H),
  J = B("text-[13px]/[16px] font-semibold tabular-nums", H),
  Z = e => `$${e.toLocaleString("en-US", {
    maximumFractionDigits: 0
  })}`,
  Q = [{
    name: "Priya Nandakumar",
    email: "priya@northwind.io",
    team: "Platform",
    tokens: 418e5,
    cost: 384,
    seatCap: 500
  }, {
    name: "Marcus Bell",
    email: "marcus@northwind.io",
    team: "Support",
    tokens: 284e5,
    cost: 261,
    seatCap: 300
  }, {
    name: "Sofia Alvarez",
    email: "sofia@northwind.io",
    team: "Platform",
    tokens: 221e5,
    cost: 203,
    seatCap: 500
  }, {
    name: "Tom\xe1s Guerrero",
    email: "tomas@northwind.io",
    team: "Research",
    tokens: 196e5,
    cost: 180,
    seatCap: 200
  }, {
    name: "Wei Chen",
    email: "wei@northwind.io",
    team: "Support",
    tokens: 112e5,
    cost: 103,
    seatCap: 300
  }, {
    name: "Amelia Whitfield",
    email: "amelia@northwind.io",
    team: "Research",
    tokens: 64e5,
    cost: 59,
    seatCap: 200
  }, {
    name: "Jonas Vikander",
    email: "jonas@northwind.io",
    team: "Platform",
    tokens: 29e5,
    cost: 27,
    seatCap: 500
  }],
  V = ["All teams", "Platform", "Support", "Research"];
let G = (...e) => e.filter(Boolean).join(" "),
  Y = "text-neutral-900 dark:text-neutral-100",
  ee = "text-[15px]/[20px] font-bold",
  ea = "flex w-fit items-center gap-2 text-[15px]/[20px] font-bold text-neutral-900 dark:text-neutral-100",
  er = G("text-[14px]/[20px] font-medium", "text-neutral-900/62 dark:text-neutral-100/62"),
  et = e => `$${e.toLocaleString("en-US", {
    maximumFractionDigits: 0
  })}`;
function el({
  value: e,
  min: a,
  max: r,
  step: n,
  onChange: o,
  labelledBy: i
}) {
  let s = (0, React.useRef)(null),
    [c, d] = (0, React.useState)(!1),
    _ = (e - a) / (r - a) * 100,
    x = e => Math.min(r, Math.max(a, a + Math.round((e - a) / n) * n)),
    b = e => {
      let t = s.current;
      if (!t) return;
      let l = t.getBoundingClientRect();
      l.width <= 0 || o(x(a + (e - l.left) / l.width * (r - a)));
    };
  return <div className="relative flex h-4 min-w-0 flex-1 cursor-pointer touch-none items-center" onPointerDown={e => {
    e.currentTarget.setPointerCapture(e.pointerId), e.currentTarget.querySelector('[role="slider"]')?.focus({
      preventScroll: !0
    }), d(!0), b(e.clientX);
  }} onPointerMove={e => c && b(e.clientX)} onPointerUp={() => d(!1)} onPointerCancel={() => d(!1)}><div ref={s} className="relative h-2 w-full grow rounded-[calc(var(--rb-r-full,999px))] bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] shadow-[inset_0_1px_2px_rgb(84_62_32/0.12)] dark:bg-neutral-100/14 dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.5)]"><span className={G("absolute inset-y-0 rounded-[calc(var(--rb-r-full,999px))] bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_82%,black)] dark:bg-[var(--rb-accent,oklch(81%_0.16_163))]", "left-0")} style={{
        width: `${_}%`
      }} /><span role="slider" tabIndex={0} aria-labelledby={i} aria-valuemin={a} aria-valuemax={r} aria-valuenow={e} aria-valuetext={et(e)} onKeyDown={t => {
        let l = "ArrowRight" === t.key || "ArrowUp" === t.key ? e + n : "ArrowLeft" === t.key || "ArrowDown" === t.key ? e - n : "PageUp" === t.key ? e + 4 * n : "PageDown" === t.key ? e - 4 * n : "Home" === t.key ? a : "End" === t.key ? r : null;
        null !== l && (t.preventDefault(), o(x(l)));
      }} className="absolute top-1/2 block size-5 -translate-x-1/2 -translate-y-1/2 cursor-grab rounded-full bg-white shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_2px_rgb(84_62_32/0.10),0_3px_8px_-2px_rgb(84_62_32/0.20)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.12),0_0_0_1px_rgb(0_0_0/0.6),0_2px_6px_-1px_rgb(0_0_0/0.6)] transition-[scale] duration-[240ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:scale-110 active:scale-110 active:cursor-grabbing motion-reduce:transition-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:bg-white" style={{
        left: `${_}%`
      }} /></div></div>;
}
let en = [50, 75, 90];
let ei = (...e) => e.filter(Boolean).join(" "),
  es = "text-neutral-900 dark:text-neutral-100",
  ec = "text-neutral-900/62 dark:text-neutral-100/62",
  ed = "text-[15px]/[20px] font-bold",
  e_ = "h-8 gap-1.5 rounded-[calc(var(--rb-r-full,999px))] px-3.5 text-[14px]/[18px] font-bold",
  ex = "inline-block size-2.5 shrink-0 rounded-full",
  eb = ei("text-[14px]/[20px] font-medium", ec),
  eu = ei("text-[13px]/[16px] font-semibold tabular-nums", ec),
  ep = ei("text-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_82%,black)] dark:text-[var(--rb-accent,oklch(81%_0.16_163))]", "bg-current"),
  eh = ei("text-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_62%,transparent)] dark:text-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_48%,transparent)]", "bg-current"),
  em = e => e >= 1e6 ? `${(e / 1e6).toFixed(e >= 1e7 ? 0 : 1)}M` : e >= 1e3 ? `${(e / 1e3).toFixed(e >= 1e4 ? 0 : 1)}k` : `${e}`,
  ek = [{
    id: "scale",
    name: "Scale",
    price: 400,
    included: 25e7,
    overage: 1.8,
    perks: ["250M tokens included", "Tier 2 rate limits", "Priority routing on Atlas Pro"]
  }, {
    id: "enterprise",
    name: "Enterprise",
    price: 1400,
    included: 1e9,
    overage: 1.2,
    perks: ["1B tokens included", "Tier 3 rate limits", "Dedicated capacity and a support channel"]
  }];
let eg = (...e) => e.filter(Boolean).join(" "),
  ef = "text-neutral-900/62 dark:text-neutral-100/62",
  ew = "text-[14px]/[20px] font-medium",
  ej = "font-mono text-[12px]/[16px] tabular-nums",
  eN = eg(ew, ef),
  ey = eg("text-[13px]/[16px] font-semibold tabular-nums", ef),
  eC = e => e >= 1e3 ? `${(e / 1e3).toFixed(e >= 1e4 ? 0 : 1)}k` : `${e}`,
  eA = [{
    id: "req_8f21c4",
    time: "14:32:08",
    endpoint: "/v1/messages",
    model: "Atlas Pro",
    input: 12480,
    output: 1940,
    ms: 4180,
    cost: .0666,
    status: "ok"
  }, {
    id: "req_8f21b0",
    time: "14:31:54",
    endpoint: "/v1/messages",
    model: "Atlas",
    input: 3120,
    output: 806,
    ms: 1240,
    cost: .0142,
    status: "ok"
  }, {
    id: "req_8f2196",
    time: "14:31:41",
    endpoint: "/v1/embeddings",
    model: "Ember",
    input: 48200,
    output: 0,
    ms: 610,
    cost: .0048,
    status: "ok"
  }, {
    id: "req_8f2183",
    time: "14:31:22",
    endpoint: "/v1/messages",
    model: "Atlas Long",
    input: 184600,
    output: 2310,
    ms: 12940,
    cost: .5884,
    status: "capped"
  }, {
    id: "req_8f2170",
    time: "14:30:58",
    endpoint: "/v1/messages",
    model: "Atlas Pro",
    input: 9040,
    output: 1120,
    ms: 3210,
    cost: .0439,
    status: "ok"
  }, {
    id: "req_8f215d",
    time: "14:30:31",
    endpoint: "/v1/rerank",
    model: "Ember Mini",
    input: 22800,
    output: 0,
    ms: 380,
    cost: .0011,
    status: "error"
  }, {
    id: "req_8f214a",
    time: "14:30:12",
    endpoint: "/v1/messages",
    model: "Quill",
    input: 5640,
    output: 1408,
    ms: 1980,
    cost: .0225,
    status: "ok"
  }, {
    id: "req_8f2137",
    time: "14:29:47",
    endpoint: "/v1/embeddings",
    model: "Ember",
    input: 31400,
    output: 0,
    ms: 520,
    cost: .0031,
    status: "ok"
  }],
  eM = ["All", "Capped", "Errors"],
  eL = {
    ok: "Completed",
    capped: "Truncated at max tokens",
    error: "Upstream timeout"
  },
  eS = (...e) => e.filter(Boolean).join(" "),
  e$ = "text-neutral-900/62 dark:text-neutral-100/62",
  ez = "relative block h-2.5 w-full overflow-hidden rounded-[calc(var(--rb-r-full,999px))] bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] shadow-[inset_0_1px_2px_rgb(84_62_32/0.12)] dark:bg-neutral-100/12 dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.5)]",
  eq = eS("text-[14px]/[20px] font-medium", e$),
  eW = eS("text-[13px]/[16px] font-semibold tabular-nums", e$),
  eT = eS("text-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_82%,black)] dark:text-[var(--rb-accent,oklch(81%_0.16_163))]", "bg-current"),
  eD = eS("text-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_62%,transparent)] dark:text-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_48%,transparent)]", "bg-current"),
  eR = [{
    id: "messages",
    label: "Assistant messages",
    used: 1842,
    cap: 2e3,
    note: "Resets 1 Jul"
  }, {
    id: "runs",
    label: "Agent runs",
    used: 96,
    cap: 250,
    note: "Resets 1 Jul"
  }, {
    id: "storage",
    label: "Indexed documents",
    used: 4310,
    cap: 1e4,
    note: "Does not reset"
  }, {
    id: "seats",
    label: "Member seats",
    used: 12,
    cap: 20,
    note: "Billed monthly"
  }],
  eU = [18, 24, 21, 33, 29, 41, 38, 52, 47, 61, 58, 74],
  eF = {
    "ai-usage-1": function () {
      let [e, a] = (0, React.useState)("7d"),
        [r, h] = (0, React.useState)(null),
        m = p[e],
        k = (0, React.useMemo)(() => {
          let e = 1e6 * m.reduce((e, a) => e + a.input, 0),
            a = 1e6 * m.reduce((e, a) => e + a.output, 0);
          return {
            input: e,
            output: a,
            tokens: e + a,
            cost: 3e-6 * e + 15e-6 * a
          };
        }, [m]),
        v = Math.max(...m.map(e => e.input + e.output)),
        g = null === r ? null : m[r],
        f = g ? 1e6 * g.input * 3e-6 + 1e6 * g.output * 15e-6 : null,
        w = e => {
          a(e), h(null);
        };
      return <div className={n("bg-white dark:bg-neutral-950", o, "flex h-full min-h-[480px] w-full flex-col justify-center-safe overflow-y-auto p-6 sm:p-8")}><div className="mx-auto w-full max-w-[840px]"><div className="mb-3 flex flex-wrap items-end justify-between gap-3"><div className="min-w-0"><h2 className="text-[17px]/[22px] font-extrabold">Token usage</h2><p className={n(c, "mt-0.5 truncate")}>Input and output tokens billed to this workspace.</p></div><div role="radiogroup" aria-label="Range" onKeyDown={a => {
              var r, t, l;
              let n;
              return r = u.length, t = u.indexOf(e), l = e => w(u[e]), void (!((n = "ArrowRight" === a.key || "ArrowDown" === a.key ? (t + 1) % r : "ArrowLeft" === a.key || "ArrowUp" === a.key ? (t - 1 + r) % r : "Home" === a.key ? 0 : "End" === a.key ? r - 1 : -1) < 0) && (a.preventDefault(), l(n), a.currentTarget.querySelectorAll('[role="radio"]')[n]?.focus()));
            }} className={n("inline-flex w-fit max-w-full items-stretch gap-1 rounded-[calc(var(--rb-r-full,999px)_+_min(4px,var(--rb-r-full,999px)))] bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] p-1", "h-10", "shrink-0")}>{u.map(a => <button type="button" role="radio" aria-checked={a === e} tabIndex={a === e ? 0 : -1} onClick={() => w(a)} className="relative inline-flex min-w-0 cursor-pointer items-center justify-center gap-1.5 whitespace-nowrap [&_svg]:shrink-0 rounded-[calc(var(--rb-r-full,999px))] px-4 text-[14px]/[18px] font-bold text-neutral-900/78 dark:text-neutral-100/78 select-none transition-[background-color,color,box-shadow,outline-color,scale] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:scale-[0.96] motion-reduce:active:scale-100 hover:not-aria-checked:text-neutral-900 aria-checked:bg-white aria-checked:text-neutral-900 aria-checked:shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_2px_rgb(84_62_32/0.10),0_3px_8px_-2px_rgb(84_62_32/0.20)] disabled:cursor-not-allowed disabled:text-neutral-900/40 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:hover:not-aria-checked:text-neutral-100 dark:aria-checked:bg-[color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800))] dark:aria-checked:text-neutral-100 dark:aria-checked:shadow-[inset_0_1px_0_rgb(255_255_255/0.1),0_0_0_1px_rgb(0_0_0/0.6),0_2px_5px_-1px_rgb(0_0_0/0.6)] dark:disabled:text-neutral-100/40">{a}</button>)}</div></div><div className="relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 shadow-[inset_0_0_0_1px_rgb(84_62_32/0.05)] dark:shadow-[inset_0_0_0_1px_rgb(255_255_255/0.05)]"><div className={n("mx-1 mb-1 flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-5xl,22px))] border border-transparent bg-white dark:bg-neutral-950 shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] [&:has(+*)]:mb-0", "divide-y divide-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:divide-neutral-100/7", "mt-1")}><div className="grid grid-cols-2 sm:grid-cols-4">{[["Total tokens", x(k.tokens)], ["Input", x(k.input)], ["Output", x(k.output)], ["Spend", b(k.cost)]].map(([e, a]) => <div className="flex min-w-0 flex-col gap-1 p-3"><p className="text-[14px]/[20px] font-bold text-neutral-900/78 dark:text-neutral-100/78">{e}</p><p className="flex min-w-0 flex-wrap items-baseline gap-x-1 text-[22px]/[28px] font-extrabold tracking-[-0.01em] tabular-nums text-neutral-900 dark:text-neutral-100">{a}</p></div>)}</div><div className="p-3"><div className="flex items-center justify-between gap-3"><div className="flex items-center gap-4"><span className={n(c, "inline-flex items-center gap-1.5")}><span aria-hidden="true" className={n(s, d)} />Input</span><span className={n(c, "inline-flex items-center gap-1.5")}><span aria-hidden="true" className={n(s, _)} />Output</span></div><p className={n(c, "flex min-w-0 gap-x-3 truncate")}>{g ? <><span>{g.label}</span><span className="tabular-nums">{x((g.input + g.output) * 1e6)}</span><span className="tabular-nums">{b(f ?? 0)}</span></> : "Hover a bar for detail"}</p></div><div className="mt-4 flex h-44 items-end gap-2" onMouseLeave={() => h(null)}>{m.map((e, a) => {
                    let l = e.input + e.output,
                      s = r === a;
                    return <button type="button" aria-label={`${e.label}: ${x(1e6 * l)} tokens`} onMouseEnter={() => h(a)} onFocus={() => h(a)} onBlur={() => h(null)} className={n("focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))]", "transition-[color,background-color,border-color,box-shadow,outline-color,opacity,scale,translate] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms]", "rounded-[var(--rb-r-4xl,18px)]", s && "bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] dark:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)]", "group flex h-full flex-1 cursor-pointer flex-col justify-end gap-1")}><div className="mx-auto flex w-full max-w-[36px] flex-col justify-end" style={{
                        height: `${l / v * 100}%`
                      }}><div className={n(_, "w-full")} style={{
                          height: `${e.output / l * 100}%`
                        }} /><div className={n(d, "w-full")} style={{
                          height: `${e.input / l * 100}%`
                        }} /></div><span className={n("text-[13px]/[16px] font-semibold tabular-nums", s ? o : i)}>{e.label}</span></button>;
                  })}</div></div></div></div></div></div>;
    },
    "ai-usage-2": function () {
      let [e, a] = (0, React.useState)("cost"),
        r = (0, React.useMemo)(() => [...A].sort((a, r) => L(r, e) - L(a, e)), [e]),
        n = r.reduce((e, a) => e + a.cost, 0),
        o = L(r[0], e),
        i = M.map(e => e.key);
      return <div className={v("bg-white dark:bg-neutral-950", "text-neutral-900 dark:text-neutral-100", "flex h-full min-h-[560px] w-full flex-col justify-center-safe overflow-y-auto p-6 sm:p-8")}><div className="mx-auto w-full max-w-[940px]"><div className="mb-3 flex flex-wrap items-end justify-between gap-3"><div className="min-w-0"><h2 className="text-[17px]/[22px] font-extrabold">Spend by model</h2><p className={v(w, "mt-0.5 truncate")}>{C(n)} across {r.length} models this billing period.</p></div><div role="radiogroup" aria-label="Sort by" onKeyDown={r => {
              var t, l, n;
              let o;
              return t = i.length, l = i.indexOf(e), n = e => a(i[e]), void (!((o = "ArrowRight" === r.key || "ArrowDown" === r.key ? (l + 1) % t : "ArrowLeft" === r.key || "ArrowUp" === r.key ? (l - 1 + t) % t : "Home" === r.key ? 0 : "End" === r.key ? t - 1 : -1) < 0) && (r.preventDefault(), n(o), r.currentTarget.querySelectorAll('[role="radio"]')[o]?.focus()));
            }} className={v("inline-flex w-fit max-w-full items-stretch gap-1 rounded-[calc(var(--rb-r-full,999px)_+_min(4px,var(--rb-r-full,999px)))] bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] p-1", "h-10", "shrink-0")}>{M.map(r => <button type="button" role="radio" aria-checked={r.key === e} tabIndex={r.key === e ? 0 : -1} onClick={() => a(r.key)} className="relative inline-flex min-w-0 cursor-pointer items-center justify-center gap-1.5 whitespace-nowrap [&_svg]:shrink-0 rounded-[calc(var(--rb-r-full,999px))] px-4 text-[14px]/[18px] font-bold text-neutral-900/78 dark:text-neutral-100/78 select-none transition-[background-color,color,box-shadow,outline-color,scale] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:scale-[0.96] motion-reduce:active:scale-100 hover:not-aria-checked:text-neutral-900 aria-checked:bg-white aria-checked:text-neutral-900 aria-checked:shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_2px_rgb(84_62_32/0.10),0_3px_8px_-2px_rgb(84_62_32/0.20)] disabled:cursor-not-allowed disabled:text-neutral-900/40 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:hover:not-aria-checked:text-neutral-100 dark:aria-checked:bg-[color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800))] dark:aria-checked:text-neutral-100 dark:aria-checked:shadow-[inset_0_1px_0_rgb(255_255_255/0.1),0_0_0_1px_rgb(0_0_0/0.6),0_2px_5px_-1px_rgb(0_0_0/0.6)] dark:disabled:text-neutral-100/40">{r.label}</button>)}</div></div><div className="relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 shadow-[inset_0_0_0_1px_rgb(84_62_32/0.05)] dark:shadow-[inset_0_0_0_1px_rgb(255_255_255/0.05)]"><div className={v("mx-1 mb-1 flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-5xl,22px))] border border-transparent bg-white dark:bg-neutral-950 shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] [&:has(+*)]:mb-0", "divide-y divide-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:divide-neutral-100/7", "mt-1")}><div className={v(j, "hidden grid-cols-[minmax(0,1.6fr)_repeat(3,minmax(0,0.8fr))_72px_minmax(0,0.8fr)_56px] items-center gap-4 px-3 py-2.5 sm:grid")}><span>Model</span><span className="text-right">Requests</span><span className="text-right">Input</span><span className="text-right">Output</span><span>Share</span><span className="text-right">Cost</span><span /></div>{r.map(a => {
                let r = L(a, e) / o;
                return <div className={v("hover:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] dark:hover:bg-neutral-100/6", "transition-[color,background-color,border-color,box-shadow,outline-color,opacity,scale,translate] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms]", "flex flex-col gap-2 px-3 py-3 sm:grid sm:grid-cols-[minmax(0,1.6fr)_repeat(3,minmax(0,0.8fr))_72px_minmax(0,0.8fr)_56px] sm:items-center sm:gap-x-4 sm:gap-y-0 sm:py-2.5")}><div className="flex items-center justify-between gap-3 sm:block"><div className="min-w-0"><p className={v(f, "truncate")}>{a.name}</p><p className={v(j, "truncate")}>{a.provider}</p></div><div className="flex shrink-0 items-center gap-2 sm:hidden"><span className={v(f, "tabular-nums")}>{C(a.cost)}</span><S delta={a.delta} /></div></div><p className={v(j, "flex flex-wrap gap-x-3 sm:hidden")}><span>{y(a.requests)} req</span><span>{y(a.input)} in</span><span>{y(a.output)} out</span></p><p className={v(w, "hidden text-right tabular-nums sm:block")}>{y(a.requests)}</p><p className={v(w, "hidden text-right tabular-nums sm:block")}>{y(a.input)}</p><p className={v(w, "hidden text-right tabular-nums sm:block")}>{y(a.output)}</p><div className={v("relative block h-2.5 w-full overflow-hidden rounded-[calc(var(--rb-r-full,999px))] bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] shadow-[inset_0_1px_2px_rgb(84_62_32/0.12)] dark:bg-neutral-100/12 dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.5)]", "h-1.5")} role="presentation"><div className={r >= .5 ? "block h-full rounded-[calc(var(--rb-r-full,999px))] bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_82%,black)] shadow-[inset_0_1px_0_rgb(255_255_255/0.35)] transition-[width] duration-[420ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] motion-reduce:transition-none dark:bg-[var(--rb-accent,oklch(81%_0.16_163))]" : v(N, "block h-full")} style={{
                      width: `${100 * r}%`
                    }} /></div><p className={v(f, "hidden text-right tabular-nums sm:block")}>{C(a.cost)}</p><div className="hidden justify-end sm:flex"><S delta={a.delta} className="shrink-0" /></div></div>;
              })}</div></div></div></div>;
    },
    "ai-usage-3": function () {
      let [e, a] = (0, React.useState)("Tier 1"),
        r = I[e],
        n = F.map(e => {
          let a = e.cap * r,
            t = Math.min(100, e.used / a * 100);
          return {
            ...e,
            cap: a,
            pct: t
          };
        }),
        o = n.filter(e => e.pct >= 75).length;
      return <div className={q("bg-white dark:bg-neutral-950", W, "flex h-full min-h-[560px] w-full flex-col justify-center-safe overflow-y-auto p-6 sm:p-8")}><div className="mx-auto w-full max-w-[620px]"><div className="mb-3 flex flex-wrap items-end justify-between gap-3"><div className="min-w-0"><h2 className="text-[17px]/[22px] font-extrabold">Rate limits</h2><p className={q("inline-flex items-start gap-1 text-[14px]/[20px] font-bold tabular-nums", o ? "text-[oklch(49%_0.1_68)] dark:text-[oklch(80%_0.13_68)]" : "text-neutral-900/78 dark:text-neutral-100/78", "mt-0.5")}>{o ? `${o} limit${o > 1 ? "s" : ""} near capacity` : "All limits within range"}</p></div><div role="radiogroup" aria-label="Usage tier" onKeyDown={r => {
              var t, l, n;
              let o;
              return t = P.length, l = P.indexOf(e), n = e => a(P[e]), void (!((o = "ArrowRight" === r.key || "ArrowDown" === r.key ? (l + 1) % t : "ArrowLeft" === r.key || "ArrowUp" === r.key ? (l - 1 + t) % t : "Home" === r.key ? 0 : "End" === r.key ? t - 1 : -1) < 0) && (r.preventDefault(), n(o), r.currentTarget.querySelectorAll('[role="radio"]')[o]?.focus()));
            }} className={q("inline-flex w-fit max-w-full items-stretch gap-1 rounded-[calc(var(--rb-r-full,999px)_+_min(4px,var(--rb-r-full,999px)))] bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] p-1", "h-10", "shrink-0")}>{P.map(r => <button type="button" role="radio" aria-checked={r === e} tabIndex={r === e ? 0 : -1} onClick={() => a(r)} className="relative inline-flex min-w-0 cursor-pointer items-center justify-center gap-1.5 whitespace-nowrap [&_svg]:shrink-0 rounded-[calc(var(--rb-r-full,999px))] px-4 text-[14px]/[18px] font-bold text-neutral-900/78 dark:text-neutral-100/78 select-none transition-[background-color,color,box-shadow,outline-color,scale] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:scale-[0.96] motion-reduce:active:scale-100 hover:not-aria-checked:text-neutral-900 aria-checked:bg-white aria-checked:text-neutral-900 aria-checked:shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_2px_rgb(84_62_32/0.10),0_3px_8px_-2px_rgb(84_62_32/0.20)] disabled:cursor-not-allowed disabled:text-neutral-900/40 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:hover:not-aria-checked:text-neutral-100 dark:aria-checked:bg-[color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800))] dark:aria-checked:text-neutral-100 dark:aria-checked:shadow-[inset_0_1px_0_rgb(255_255_255/0.1),0_0_0_1px_rgb(0_0_0/0.6),0_2px_5px_-1px_rgb(0_0_0/0.6)] dark:disabled:text-neutral-100/40">{r}</button>)}</div></div><div className="relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 shadow-[inset_0_0_0_1px_rgb(84_62_32/0.05)] dark:shadow-[inset_0_0_0_1px_rgb(255_255_255/0.05)]"><div className={q("mx-1 mb-1 flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-5xl,22px))] border border-transparent bg-white dark:bg-neutral-950 shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] [&:has(+*)]:mb-0", "divide-y divide-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:divide-neutral-100/7", "mt-1")}><div>{n.map(e => <div className="px-3 py-3"><div className="flex items-baseline justify-between gap-3"><div className="min-w-0"><p className={q(D, "truncate")}>{e.label}</p><p className={q(U, "truncate")}>{e.hint}</p></div><p className={q(R, "shrink-0 tabular-nums")}><span className={q(D, W)}>{e.used.toLocaleString("en-US")}</span> / {e.cap.toLocaleString("en-US")} {e.unit}</p></div><div role="progressbar" aria-valuenow={Math.round(e.pct)} aria-valuemin={0} aria-valuemax={100} aria-label={`${e.label} utilisation`} className={q("relative block h-2.5 w-full overflow-hidden rounded-[calc(var(--rb-r-full,999px))] bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] shadow-[inset_0_1px_2px_rgb(84_62_32/0.12)] dark:bg-neutral-100/12 dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.5)]", "mt-2 h-1.5")}><div className={e.pct >= 95 ? q("bg-[oklch(65.2%_0.219_26)] dark:bg-[oklch(65.2%_0.219_26)]", "block h-full") : e.pct >= 75 ? q("bg-[oklch(80%_0.152_68)] dark:bg-[oklch(80%_0.152_68)]", "block h-full") : "block h-full rounded-[calc(var(--rb-r-full,999px))] bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_82%,black)] shadow-[inset_0_1px_0_rgb(255_255_255/0.35)] transition-[width] duration-[420ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] motion-reduce:transition-none dark:bg-[var(--rb-accent,oklch(81%_0.16_163))]"} style={{
                      width: `${e.pct}%`
                    }} /></div></div>)}</div><div className="flex flex-wrap items-center justify-end gap-x-3 gap-y-2 px-3 py-3"><p className={q(R, "flex min-w-0 flex-[1_1_240px] items-start gap-2 text-balance")}><__mod_22728.n icon={"Tier 3" === e ? __mod_90987.A : __mod_46772.A} size={16} strokeWidth={2} aria-hidden="true" className="mt-0.5 shrink-0" /><span>{"Tier 3" === e ? "Highest tier. Contact us for a bespoke ceiling." : "Limits rise automatically once spend clears the next threshold."}</span></p><button type="button" className={q("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] text-neutral-900 dark:text-neutral-100 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] active:not-disabled:translate-y-px active:not-disabled:shadow-[inset_0_1px_3px_rgb(84_62_32/0.16),0_0_0_1px_rgb(84_62_32/0.10)] dark:active:not-disabled:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14),0_0_0_1px_rgb(84_62_32/0.10)] dark:aria-expanded:bg-neutral-800 dark:aria-expanded:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] disabled:bg-none disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] disabled:text-neutral-900/40 disabled:shadow-none dark:disabled:bg-neutral-800/60 dark:disabled:text-neutral-100/40", "h-8 gap-1.5 rounded-[calc(var(--rb-r-full,999px))] px-3.5 text-[14px]/[18px] font-bold")}>Request an increase</button></div></div></div></div></div>;
    },
    "ai-usage-4": function () {
      let [e, a] = (0, React.useState)("All teams"),
        [r, n] = (0, React.useState)(""),
        o = (0, React.useMemo)(() => {
          let a = r.trim().toLowerCase();
          return Q.filter(r => ("All teams" === e || r.team === e) && (!a || r.name.toLowerCase().includes(a) || r.email.toLowerCase().includes(a)));
        }, [e, r]),
        i = o.reduce((e, a) => e + a.cost, 0);
      return <div className={B("bg-white dark:bg-neutral-950", "text-neutral-900 dark:text-neutral-100", "flex h-full min-h-[640px] w-full flex-col justify-center-safe overflow-y-auto p-6 sm:p-8")}><div className="mx-auto w-full max-w-[720px]"><div className="mb-3 flex flex-wrap items-end justify-between gap-3"><div className="min-w-0"><h2 className="text-[17px]/[22px] font-extrabold">Usage by member</h2><p className={B(K, "mt-0.5 truncate")}>{Z(i)} across {o.length} seat{1 === o.length ? "" : "s"} this month.</p></div><div className={B("relative flex w-full min-w-0 cursor-text items-center rounded-[calc(var(--rb-r-xl,12px))] data-concentric:rounded-[var(--rb-r-5xl,22px)] border border-transparent bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] text-[15px]/[20px] font-medium text-neutral-900 transition-[border-color,box-shadow,background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:not-focus-within:not-has-[[aria-invalid=true]]:not-has-[input:disabled]:not-has-[input[readonly]]:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] focus-within:border-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] focus-within:bg-white focus-within:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] has-[[aria-invalid=true]]:border-[oklch(60%_0.236_26)] has-[[aria-invalid=true]]:bg-[oklch(97.5%_0.016_26)] has-[input:disabled]:cursor-not-allowed has-[input:disabled]:text-neutral-900/40 has-[input:disabled]:shadow-none has-[input[readonly]]:cursor-default has-[input[readonly]]:shadow-none dark:text-neutral-100 dark:hover:not-focus-within:not-has-[[aria-invalid=true]]:not-has-[input:disabled]:not-has-[input[readonly]]:bg-neutral-900 dark:focus-within:border-[var(--rb-accent,oklch(81%_0.16_163))] dark:focus-within:bg-neutral-900 dark:focus-within:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:has-[[aria-invalid=true]]:border-[oklch(65.2%_0.219_26)] dark:has-[[aria-invalid=true]]:bg-[oklch(26%_0.04_26)] dark:has-[input:disabled]:text-neutral-100/40", "h-10", "shrink-0 sm:w-56")}><span data-affix={!0} className="flex shrink-0 items-center gap-2 text-[15px]/[20px] font-semibold text-neutral-900/62 dark:text-neutral-100/62 select-none first:ps-3.5 last:pe-3.5 has-[button]:first:ps-1 has-[button]:last:pe-1"><__mod_22728.n icon={__mod_66575.A} size={18} strokeWidth={2} aria-hidden="true" /></span><input type="search" value={r} onChange={e => n(e.target.value)} placeholder="Search members" aria-label="Search members" className="h-full w-full min-w-0 flex-1 bg-transparent px-3.5 outline-none [[data-affix]+&]:ps-2 [&:has(+[data-affix])]:pe-2 placeholder:font-medium placeholder:text-neutral-900/55 disabled:cursor-not-allowed disabled:placeholder:text-neutral-900/30 dark:placeholder:text-neutral-100/55 dark:disabled:placeholder:text-neutral-100/30 dark:[color-scheme:dark]" /></div></div><div className="relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 shadow-[inset_0_0_0_1px_rgb(84_62_32/0.05)] dark:shadow-[inset_0_0_0_1px_rgb(255_255_255/0.05)]"><div className={B("mx-1 mb-1 flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-5xl,22px))] border border-transparent bg-white dark:bg-neutral-950 shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] [&:has(+*)]:mb-0", "mt-1")}><div className={B("flex max-w-full min-w-0 items-center gap-1.5 overflow-x-auto shadow-[inset_0_-2px_0_color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] [scrollbar-width:none] dark:shadow-[inset_0_-2px_0_color-mix(in_oklab,var(--color-neutral-100)_9%,transparent)]", "px-1 pt-1")} role="tablist" aria-label="Team" onKeyDown={r => {
                var t, l, n;
                let o;
                return t = V.length, l = V.indexOf(e), n = e => a(V[e]), void (!((o = "ArrowRight" === r.key || "ArrowDown" === r.key ? (l + 1) % t : "ArrowLeft" === r.key || "ArrowUp" === r.key ? (l - 1 + t) % t : "Home" === r.key ? 0 : "End" === r.key ? t - 1 : -1) < 0) && (r.preventDefault(), n(o), r.currentTarget.querySelectorAll('[role="tab"]')[o]?.focus()));
              }}>{V.map(r => <button type="button" role="tab" aria-selected={r === e} tabIndex={r === e ? 0 : -1} onClick={() => a(r)} className="relative inline-flex min-h-10 shrink-0 cursor-pointer items-center justify-center gap-1.5 rounded-[calc(var(--rb-r-lg,10px))] px-3 text-[15px]/[20px] font-bold whitespace-nowrap text-neutral-900/78 dark:text-neutral-100/78 select-none transition-[color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:text-neutral-900 after:absolute after:inset-x-2.5 after:bottom-0 after:h-[3px] after:rounded-[calc(var(--rb-r-full,999px))] after:bg-transparent after:transition-[background-color] aria-selected:text-neutral-900 aria-selected:after:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] disabled:cursor-not-allowed disabled:text-neutral-900/40 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:hover:text-neutral-100 dark:aria-selected:text-neutral-100 dark:aria-selected:after:bg-[var(--rb-accent,oklch(81%_0.16_163))] dark:disabled:text-neutral-100/40">{r}</button>)}</div><div className={B("divide-y divide-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:divide-neutral-100/7", "min-h-[320px]")}>{0 === o.length ? <div className="flex h-[320px] flex-col items-center justify-center gap-1 px-6 text-center"><p className="text-[19px]/[24px] font-extrabold tracking-[-0.01em] text-neutral-900 dark:text-neutral-100">No members match</p><p className="max-w-[48ch] text-[15px]/[22px] font-medium text-neutral-900/78 dark:text-neutral-100/78">Try a different name or clear the team filter.</p></div> : o.map(e => {
                  let a,
                    r = Math.min(100, e.cost / e.seatCap * 100);
                  return <div className="p-1"><div className={B("hover:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] dark:hover:bg-neutral-100/6", "transition-[color,background-color,border-color,box-shadow,outline-color,opacity,scale,translate] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms]", "rounded-[var(--rb-r-4xl,18px)]", "flex items-center gap-3 p-2")}><span aria-hidden="true" className="relative inline-flex size-8 shrink-0 overflow-hidden rounded-full select-none"><span className="flex size-full items-center justify-center rounded-[inherit] bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_24%,white)] text-[12px]/[16px] font-extrabold tabular-nums text-neutral-900 dark:text-neutral-100 dark:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_22%,var(--color-neutral-900))]">{e.name.split(/[\s-]+/).filter(Boolean).slice(0, 2).map(e => e[0]?.toUpperCase()).join("")}</span></span><div className="min-w-0 flex-1"><p className={B(O, "truncate")}>{e.name}</p><p className={B(J, "flex gap-x-3 truncate")}><span>{e.team}</span><span>{(a = e.tokens) >= 1e6 ? `${(a / 1e6).toFixed(a >= 1e7 ? 0 : 1)}M` : a >= 1e3 ? `${(a / 1e3).toFixed(a >= 1e4 ? 0 : 1)}k` : `${a}`} tokens</span></p></div><div className="hidden w-32 shrink-0 sm:block"><div className={B("relative block h-2.5 w-full overflow-hidden rounded-[calc(var(--rb-r-full,999px))] bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] shadow-[inset_0_1px_2px_rgb(84_62_32/0.12)] dark:bg-neutral-100/12 dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.5)]", "h-1.5")}><div className={r >= 95 ? B("bg-[oklch(65.2%_0.219_26)] dark:bg-[oklch(65.2%_0.219_26)]", "block h-full") : r >= 80 ? B("bg-[oklch(80%_0.152_68)] dark:bg-[oklch(80%_0.152_68)]", "block h-full") : "block h-full rounded-[calc(var(--rb-r-full,999px))] bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_82%,black)] shadow-[inset_0_1px_0_rgb(255_255_255/0.35)] transition-[width] duration-[420ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] motion-reduce:transition-none dark:bg-[var(--rb-accent,oklch(81%_0.16_163))]"} style={{
                            width: `${r}%`
                          }} /></div><p className={B(J, "mt-1")}>{Math.round(r)}% of {Z(e.seatCap)} cap</p></div><p className={B(O, "w-16 shrink-0 text-right tabular-nums")}>{Z(e.cost)}</p></div></div>;
                })}</div></div></div></div></div>;
    },
    "ai-usage-5": function () {
      let [e, a] = (0, React.useState)(2500),
        [r, n] = (0, React.useState)([75, 90]),
        [o, i] = (0, React.useState)(!0),
        [s, c] = (0, React.useState)(!1),
        d = Math.min(100, 1840 / e * 100),
        _ = Math.round(2612.7999999999997),
        x = _ > e;
      return <div className={G("bg-white dark:bg-neutral-950", Y, "flex h-full min-h-[560px] w-full flex-col justify-center-safe overflow-y-auto p-6 sm:p-8")}><div className="mx-auto w-full max-w-[640px]"><div className="mb-3"><h2 className="text-[17px]/[22px] font-extrabold">Budget and alerts</h2><p className={G(er, "mt-0.5")}>Cap monthly model spend and decide who hears about it.</p></div><div className="relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 shadow-[inset_0_0_0_1px_rgb(84_62_32/0.05)] dark:shadow-[inset_0_0_0_1px_rgb(255_255_255/0.05)]"><div className={G("mx-1 mb-1 flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-5xl,22px))] border border-transparent bg-white dark:bg-neutral-950 shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] [&:has(+*)]:mb-0", "divide-y divide-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:divide-neutral-100/7", "mt-1")}><div className="p-3"><div className="flex flex-wrap items-baseline justify-between gap-2"><p className={er}>This month</p><p className={G(er, "tabular-nums")}><span className={G("text-[22px]/[28px] font-extrabold tracking-[-0.01em]", Y)}>{et(1840)}</span> of {et(e)}</p></div><div role="progressbar" aria-valuenow={Math.round(d)} aria-valuemin={0} aria-valuemax={100} aria-label="Budget consumed" className={G("relative block h-2.5 w-full overflow-hidden rounded-[calc(var(--rb-r-full,999px))] bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] shadow-[inset_0_1px_2px_rgb(84_62_32/0.12)] dark:bg-neutral-100/12 dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.5)]", "mt-3 h-2")}><div className="block h-full rounded-[calc(var(--rb-r-full,999px))] bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_82%,black)] shadow-[inset_0_1px_0_rgb(255_255_255/0.35)] transition-[width] duration-[420ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] motion-reduce:transition-none dark:bg-[var(--rb-accent,oklch(81%_0.16_163))]" style={{
                    width: `${d}%`
                  }} /></div><div className={G(er, "mt-3 flex items-start gap-2")}>{x && <__mod_22728.n icon={__mod_36474.A} size={16} strokeWidth={2} aria-hidden="true" className={G("text-[oklch(49%_0.1_68)] dark:text-[oklch(80%_0.13_68)]", "mt-0.5 shrink-0")} />}<span className="min-w-0">Projected {et(_)} at current pace{x ? ", over budget on the 26th" : ", within budget"}.</span></div></div><div className="p-3"><p id="ai-usage-5-budget" className={ea}>Monthly cap</p><div className="mt-2 flex items-center gap-3"><el value={e} min={500} max={1e4} step={250} onChange={a} labelledBy="ai-usage-5-budget" /><span className={G(ee, "w-16 shrink-0 text-right tabular-nums")}>{et(e)}</span></div><p className={G(ea, "mt-6")}>Notify at</p><div className="mt-2 flex flex-wrap gap-1.5">{en.map(e => {
                    let a = r.includes(e);
                    return <button type="button" aria-pressed={a} onClick={() => n(a => a.includes(e) ? a.filter(a => a !== e) : [...a, e].sort((e, a) => e - a))} className={G("relative inline-flex h-8 max-w-full min-w-0 shrink-0 cursor-pointer items-center gap-1.5 whitespace-nowrap rounded-[calc(var(--rb-r-full,999px))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] px-3.5 text-[14px]/[18px] font-bold text-neutral-900 dark:text-neutral-100 select-none transition-[background-color,border-color,box-shadow,color,scale,translate,outline-color] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:translate-y-px active:duration-[90ms] motion-reduce:active:translate-y-0 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] aria-pressed:bg-none aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-pressed:shadow-[inset_0_0_0_1.5px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14)] disabled:cursor-not-allowed disabled:text-neutral-900/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-pressed:shadow-[inset_0_0_0_1.5px_var(--rb-accent,oklch(81%_0.16_163))] dark:aria-expanded:bg-neutral-800 dark:disabled:text-neutral-100/40", "tabular-nums")}>{a && <__mod_22728.n icon={__mod_90987.A} size={14} strokeWidth={2} aria-hidden="true" />}{e}% of cap</button>;
                  })}</div></div><div>{[["Pause requests at 100%", "New calls return a quota error until the next cycle.", o, i], ["Weekly spend digest", "Sent to workspace admins every Monday.", s, c]].map(([e, a, r, l]) => <div className="flex items-center justify-between gap-4 px-3 py-3"><div className="min-w-0"><p className={G(ee, "truncate")}>{e}</p><p className={G(er, "truncate")}>{a}</p></div><button type="button" role="switch" aria-checked={r} aria-label={e} onClick={() => l(!r)} className="group relative inline-flex h-6 w-10 shrink-0 cursor-pointer items-center rounded-full bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] p-0.5 shadow-[inset_0_1px_2px_rgb(84_62_32/0.14),inset_0_0_0_1px_rgb(84_62_32/0.05)] transition-[background-color,box-shadow,outline-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:aria-[checked=false]:not-disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_94%,black)] aria-checked:bg-[var(--rb-accent,oklch(84%_0.15_165))] aria-checked:shadow-[inset_0_1px_2px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_55%,black),inset_0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_75%,black)] disabled:cursor-not-allowed disabled:opacity-45 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:bg-neutral-100/16 dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6)] dark:hover:aria-[checked=false]:not-disabled:bg-neutral-100/24 dark:aria-checked:bg-[var(--rb-accent,oklch(81%_0.16_163))] dark:aria-checked:shadow-[inset_0_1px_2px_rgb(0_0_0/0.35)]"><span className="pointer-events-none block h-5 w-5 rounded-full bg-white shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_2px_rgb(84_62_32/0.10),0_3px_8px_-2px_rgb(84_62_32/0.20)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.12),0_0_0_1px_rgb(0_0_0/0.6),0_2px_6px_-1px_rgb(0_0_0/0.6)] transition-[translate,width] duration-[280ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] motion-reduce:transition-none group-active:w-6 group-aria-checked:translate-x-4 group-aria-checked:group-active:translate-x-3 group-disabled:shadow-none dark:bg-white" /></button></div>)}</div></div></div></div></div>;
    },
    "ai-usage-6": function () {
      let [e, a] = (0, React.useState)("scale"),
        r = (0, React.useMemo)(() => Math.round(68.16), [284e5]);
      return <div className={ei("bg-white dark:bg-neutral-950", es, "flex h-full min-h-[560px] w-full flex-col justify-center-safe overflow-y-auto p-6 sm:p-8")}><div className="mx-auto w-full max-w-[640px]"><div className="mb-3"><h2 className="text-[17px]/[22px] font-extrabold">You are over your included tokens</h2><p className={ei(eb, "mt-0.5")}>Requests keep working. Anything past the allowance bills at $2.40 per million.</p></div><div className="relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 shadow-[inset_0_0_0_1px_rgb(84_62_32/0.05)] dark:shadow-[inset_0_0_0_1px_rgb(255_255_255/0.05)]"><div className={ei("mx-1 mb-1 flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-5xl,22px))] border border-transparent bg-white dark:bg-neutral-950 shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] [&:has(+*)]:mb-0", "divide-y divide-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:divide-neutral-100/7", "mt-1")}><div className="p-3"><div className="flex flex-wrap items-baseline justify-between gap-2"><p className={eb}>Tokens used</p><p className={ei(eb, "tabular-nums")}><span className={ei("text-[22px]/[28px] font-extrabold tracking-[-0.01em]", es)}>{em(1284e5)}</span> of {em(1e8)} included</p></div><div className={ei("relative block h-2.5 w-full overflow-hidden rounded-[calc(var(--rb-r-full,999px))] bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] shadow-[inset_0_1px_2px_rgb(84_62_32/0.12)] dark:bg-neutral-100/12 dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.5)]", "mt-3 flex h-2")}><div className="block h-full rounded-[calc(var(--rb-r-full,999px))] bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_82%,black)] shadow-[inset_0_1px_0_rgb(255_255_255/0.35)] transition-[width] duration-[420ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] motion-reduce:transition-none dark:bg-[var(--rb-accent,oklch(81%_0.16_163))]" style={{
                    width: "77.88161993769471%"
                  }} /><div className={ei(eh, "h-full")} style={{
                    width: `${22.11838006230529}%`
                  }} /></div><div className={ei(eb, "mt-3 flex flex-wrap items-center gap-x-4 gap-y-1")}><span className="inline-flex items-center gap-1.5"><span aria-hidden="true" className={ei(ex, ep)} />Included</span><span className="inline-flex items-center gap-1.5"><span aria-hidden="true" className={ei(ex, eh)} />Overage {em(284e5)}</span><span className="tabular-nums">${r} so far</span></div></div><div><p className={ei(ed, "px-3 pt-3 pb-2")}>Move to a larger allowance</p><div role="radiogroup" aria-label="Plan" className="grid gap-1 px-1 pb-1 sm:grid-cols-2">{ek.map(r => {
                    let l = r.id === e;
                    return <label className={ei(l ? "bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] dark:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)]" : ei("hover:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] dark:hover:bg-neutral-100/6", "active:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] dark:active:bg-neutral-100/10"), "rounded-[var(--rb-r-4xl,18px)]", "transition-[color,background-color,border-color,box-shadow,outline-color,opacity,scale,translate] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms]", "min-w-0 cursor-pointer p-3 text-left")}><div className="flex items-center justify-between gap-2"><span className={ed}>{r.name}</span><input type="radio" name="ai-usage-6-plan" value={r.id} checked={l} onChange={() => a(r.id)} className="size-[18px] shrink-0 cursor-pointer appearance-none rounded-full border-2 border-neutral-900/28 bg-white transition-[background-color,border-color,border-width,box-shadow,outline-color,scale] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:scale-[0.86] motion-reduce:active:scale-100 hover:not-checked:not-disabled:border-neutral-900/60 active:not-checked:bg-neutral-900/8 checked:border-[6px] checked:border-[var(--rb-accent,oklch(84%_0.15_165))] checked:bg-white checked:shadow-[0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] aria-invalid:border-[oklch(60%_0.236_26)] disabled:cursor-not-allowed disabled:border-neutral-900/20 disabled:checked:border-neutral-900/25 disabled:checked:shadow-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:border-neutral-100/34 dark:bg-neutral-900 dark:hover:not-checked:not-disabled:border-neutral-100/70 dark:active:not-checked:bg-neutral-100/10 dark:checked:border-[var(--rb-accent,oklch(81%_0.16_163))] dark:checked:bg-neutral-900 dark:checked:shadow-none dark:aria-invalid:border-[oklch(65.2%_0.219_26)] dark:disabled:border-neutral-100/24 dark:disabled:checked:border-neutral-100/28" /></div><p className={ei(eb, "mt-1 flex flex-wrap gap-x-3 tabular-nums")}><span>${r.price}/mo</span><span>${r.overage.toFixed(2)} per M over</span></p><ul className="mt-3 space-y-1">{r.perks.map(e => <li className={ei(eu, "flex items-start gap-1.5")}><__mod_22728.n icon={__mod_90987.A} size={14} strokeWidth={2} aria-hidden="true" className="mt-0.5 shrink-0" /><span>{e}</span></li>)}</ul></label>;
                  })}</div></div><div className="flex flex-wrap items-center justify-end gap-x-3 gap-y-2 px-3 py-3"><p className={ei(eb, "min-w-0 flex-[1_1_240px] text-balance")}>Changes apply immediately and prorate against this cycle.</p><div className="flex shrink-0 items-center gap-2"><button type="button" className={ei("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] text-neutral-900 dark:text-neutral-100 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] active:not-disabled:translate-y-px active:not-disabled:shadow-[inset_0_1px_3px_rgb(84_62_32/0.16),0_0_0_1px_rgb(84_62_32/0.10)] dark:active:not-disabled:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14),0_0_0_1px_rgb(84_62_32/0.10)] dark:aria-expanded:bg-neutral-800 dark:aria-expanded:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] disabled:bg-none disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] disabled:text-neutral-900/40 disabled:shadow-none dark:disabled:bg-neutral-800/60 dark:disabled:text-neutral-100/40", e_)}>Stay on overage</button><button type="button" className={ei("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_68%,white),var(--rb-accent,oklch(84%_0.15_165)))] text-[var(--rb-accent-fg,oklch(26%_0.06_168))] shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_4px_10px_-4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_80%,transparent)] hover:not-disabled:-translate-y-px hover:not-disabled:brightness-[1.04] hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_7px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_85%,transparent)] active:not-disabled:translate-y-px active:not-disabled:brightness-[0.98] active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_55%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] motion-reduce:hover:translate-y-0 disabled:opacity-45 disabled:shadow-none dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_78%,white),var(--rb-accent,oklch(81%_0.16_163)))] dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_6px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,transparent)] dark:hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_9px_22px_-8px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_60%,transparent)] dark:active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_45%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black)] dark:disabled:shadow-none", e_)}>Upgrade<__mod_22728.n icon={__mod_5042.A} size={18} strokeWidth={2} aria-hidden="true" /></button></div></div></div></div></div></div>;
    },
    "ai-usage-7": function () {
      let [e, a] = (0, React.useState)("All"),
        [r, n] = (0, React.useState)("req_8f2183"),
        o = (0, React.useMemo)(() => eA.filter(a => "All" === e || ("Capped" === e ? "capped" === a.status : "error" === a.status)), [e]),
        i = o.reduce((e, a) => e + a.cost, 0);
      return <div className={eg("bg-white dark:bg-neutral-950", "text-neutral-900 dark:text-neutral-100", "flex h-full min-h-[640px] w-full flex-col justify-center-safe overflow-y-auto p-6 sm:p-8")}><div className="mx-auto w-full max-w-[820px]"><div className="mb-3 flex flex-wrap items-end justify-between gap-3"><div className="min-w-0"><h2 className="text-[17px]/[22px] font-extrabold">Request log</h2><p className={eg(eN, "mt-0.5 flex gap-x-3 truncate")}><span>Last {o.length} calls</span><span className="tabular-nums">${i.toFixed(4)} billed</span></p></div><div role="radiogroup" aria-label="Filter" onKeyDown={r => {
              var t, l, n;
              let o;
              return t = eM.length, l = eM.indexOf(e), n = e => a(eM[e]), void (!((o = "ArrowRight" === r.key || "ArrowDown" === r.key ? (l + 1) % t : "ArrowLeft" === r.key || "ArrowUp" === r.key ? (l - 1 + t) % t : "Home" === r.key ? 0 : "End" === r.key ? t - 1 : -1) < 0) && (r.preventDefault(), n(o), r.currentTarget.querySelectorAll('[role="radio"]')[o]?.focus()));
            }} className={eg("inline-flex w-fit max-w-full items-stretch gap-1 rounded-[calc(var(--rb-r-full,999px)_+_min(4px,var(--rb-r-full,999px)))] bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] p-1", "h-10", "shrink-0")}>{eM.map(r => <button type="button" role="radio" aria-checked={r === e} tabIndex={r === e ? 0 : -1} onClick={() => a(r)} className="relative inline-flex min-w-0 cursor-pointer items-center justify-center gap-1.5 whitespace-nowrap [&_svg]:shrink-0 rounded-[calc(var(--rb-r-full,999px))] px-4 text-[14px]/[18px] font-bold text-neutral-900/78 dark:text-neutral-100/78 select-none transition-[background-color,color,box-shadow,outline-color,scale] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:scale-[0.96] motion-reduce:active:scale-100 hover:not-aria-checked:text-neutral-900 aria-checked:bg-white aria-checked:text-neutral-900 aria-checked:shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_2px_rgb(84_62_32/0.10),0_3px_8px_-2px_rgb(84_62_32/0.20)] disabled:cursor-not-allowed disabled:text-neutral-900/40 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:hover:not-aria-checked:text-neutral-100 dark:aria-checked:bg-[color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800))] dark:aria-checked:text-neutral-100 dark:aria-checked:shadow-[inset_0_1px_0_rgb(255_255_255/0.1),0_0_0_1px_rgb(0_0_0/0.6),0_2px_5px_-1px_rgb(0_0_0/0.6)] dark:disabled:text-neutral-100/40">{r}</button>)}</div></div><div className="relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 shadow-[inset_0_0_0_1px_rgb(84_62_32/0.05)] dark:shadow-[inset_0_0_0_1px_rgb(255_255_255/0.05)]"><div className={eg("mx-1 mb-1 flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-5xl,22px))] border border-transparent bg-white dark:bg-neutral-950 shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] [&:has(+*)]:mb-0", "divide-y divide-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:divide-neutral-100/7", "mt-1 min-h-[340px]")}><div className={eg(ey, "hidden grid-cols-[68px_minmax(0,1.4fr)_minmax(0,1fr)_72px_72px_76px_20px] items-center gap-3 px-3 py-2.5 sm:grid")}><span>Time</span><span className="ps-6">Request</span><span>Model</span><span className="text-right">Tokens</span><span className="text-right">Latency</span><span className="text-right">Cost</span><span /></div>{0 === o.length ? <div className="flex h-[300px] flex-col items-center justify-center gap-1 px-6 text-center"><p className="text-[19px]/[24px] font-extrabold tracking-[-0.01em] text-neutral-900 dark:text-neutral-100">Nothing to show</p><p className="max-w-[48ch] text-[15px]/[22px] font-medium text-neutral-900/78 dark:text-neutral-100/78">No calls matched this filter in the current window.</p></div> : o.map(e => {
                let a = r === e.id;
                return <div className={eg(a && "bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] dark:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)]")}><button type="button" aria-expanded={a} onClick={() => n(a ? null : e.id)} className={eg(!a && "hover:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] dark:hover:bg-neutral-100/6", "transition-[color,background-color,border-color,box-shadow,outline-color,opacity,scale,translate] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms]", "focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))]", "group grid w-full cursor-pointer grid-cols-[minmax(0,1fr)_auto_20px] items-center gap-x-3 gap-y-1 px-3 py-3 text-left sm:grid-cols-[68px_minmax(0,1.4fr)_minmax(0,1fr)_72px_72px_76px_20px] sm:py-2.5")}><span className={eg(eN, "hidden tabular-nums sm:block")}>{e.time}</span><span className="flex min-w-0 items-center gap-2"><span aria-hidden="true" className="flex size-[18px] shrink-0 items-center justify-center">{"ok" === e.status && <__mod_22728.n icon={__mod_90987.A} size={14} strokeWidth={2} className={ef} />}{"capped" === e.status && <__mod_22728.n icon={__mod_36474.A} size={14} strokeWidth={2} className="text-[oklch(49%_0.1_68)] dark:text-[oklch(80%_0.13_68)]" />}{"error" === e.status && <__mod_22728.n icon={__mod_89289.A} size={14} strokeWidth={2} className="text-[oklch(51%_0.18_26)] dark:text-[oklch(76%_0.14_26)]" />}</span><span className="sr-only">{eL[e.status]}</span><span className="min-w-0"><span className={eg(ej, "block truncate")}>{e.endpoint}</span><span className={eg(ey, "flex gap-x-3 truncate sm:hidden")}><span>{e.time}</span><span>{e.model}</span></span></span></span><span className={eg(eN, "hidden truncate sm:block")}>{e.model}</span><span className={eg(eN, "hidden text-right tabular-nums sm:block")}>{eC(e.input + e.output)}</span><span className={eg(eN, "hidden text-right tabular-nums sm:block")}>{(e.ms / 1e3).toFixed(1)}s</span><span className={eg("text-[15px]/[20px] font-bold", "text-right tabular-nums")}>${e.cost.toFixed(4)}</span><__mod_22728.n icon={__mod_5042.A} size={14} strokeWidth={2} aria-hidden="true" className={eg("shrink-0 text-neutral-900/62 dark:text-neutral-100/62 transition-transform duration-[280ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] motion-reduce:transition-none group-aria-expanded:rotate-90", "justify-self-end")} /></button>{a && <div className="grid gap-x-6 gap-y-3 px-3 pt-1 pb-3 sm:grid-cols-3">{[["Request ID", e.id], ["Model", e.model], ["Status", eL[e.status]], ["Input tokens", eC(e.input)], ["Output tokens", eC(e.output)], ["Latency", `${(e.ms / 1e3).toFixed(2)}s`]].map(([e, a]) => <div className="flex min-w-0 flex-col gap-1"><p className={ey}>{e}</p><p className={eg("Request ID" === e ? ej : ew, "truncate tabular-nums")}>{a}</p></div>)}</div>}</div>;
              })}</div></div></div></div>;
    },
    "ai-usage-8": function () {
      let [e, a] = (0, React.useState)(null),
        r = eR[0],
        n = Math.round(r.used / r.cap * 100),
        o = Math.max(...eU);
      return <div className={eS("bg-white dark:bg-neutral-950", "text-neutral-900 dark:text-neutral-100", "flex h-full min-h-[520px] w-full flex-col justify-center-safe overflow-y-auto p-6 sm:p-8")}><div className="mx-auto w-full max-w-[420px]"><div className="mb-3 flex items-end justify-between gap-3"><div className="min-w-0"><h2 className="text-[17px]/[22px] font-extrabold">Plan usage</h2><p className={eS(eq, "mt-0.5 flex gap-x-3 truncate")}><span>Northwind</span><span>Team plan</span></p></div><button type="button" className={eS("inline-flex min-h-6 items-center gap-1 rounded-[calc(var(--rb-r-sm,6px))] text-[15px]/[20px] font-bold text-neutral-900 dark:text-neutral-100 underline decoration-[var(--rb-accent,oklch(84%_0.15_165))] decoration-[3px] underline-offset-[5px] transition-[text-decoration-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:decoration-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:decoration-[var(--rb-accent,oklch(81%_0.16_163))] dark:hover:decoration-[var(--rb-accent,oklch(81%_0.16_163))]", "shrink-0")}>Details<__mod_22728.n icon={__mod_1497.A} size={16} strokeWidth={2} aria-hidden="true" /></button></div><div className="relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 shadow-[inset_0_0_0_1px_rgb(84_62_32/0.05)] dark:shadow-[inset_0_0_0_1px_rgb(255_255_255/0.05)]"><div className={eS("mx-1 mb-1 flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-5xl,22px))] border border-transparent bg-white dark:bg-neutral-950 shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] [&:has(+*)]:mb-0", "divide-y divide-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:divide-neutral-100/7", "mt-1")}><div className="p-3"><div className="flex items-start justify-between gap-3"><div className="min-w-0"><p className={eq}>{r.label}</p><p className={eS("text-[34px]/[40px] font-extrabold tracking-[-0.02em] tabular-nums", "mt-0.5")}>{r.used.toLocaleString("en-US")}<span className={eS(eq, "ml-1.5")}>/ {r.cap.toLocaleString("en-US")}</span></p></div><div className="flex h-10 shrink-0 items-end gap-[3px]" onMouseLeave={() => a(null)} aria-hidden="true">{eU.map((r, l) => <span onMouseEnter={() => a(l)} className={eS(e === l ? eT : "bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-100/8", "transition-[color,background-color,border-color,box-shadow,outline-color,opacity,scale,translate] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms]", "w-[5px] rounded-[2px]")} style={{
                      height: `${r / o * 100}%`
                    }} />)}</div></div><div role="progressbar" aria-valuenow={n} aria-valuemin={0} aria-valuemax={100} aria-label={`${r.label} used`} className={eS(ez, "mt-3 h-1.5")}><div className="block h-full rounded-[calc(var(--rb-r-full,999px))] bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_82%,black)] shadow-[inset_0_1px_0_rgb(255_255_255/0.35)] transition-[width] duration-[420ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] motion-reduce:transition-none dark:bg-[var(--rb-accent,oklch(81%_0.16_163))]" style={{
                    width: `${n}%`
                  }} /></div><p className={eS(eW, "mt-2 flex items-center gap-x-3")}><span>{n}% used</span><span>{r.note}</span></p></div><div>{eR.slice(1).map(e => {
                  let a = Math.round(e.used / e.cap * 100);
                  return <div className="px-3 py-3"><div className="flex items-baseline justify-between gap-3"><p className={eS("text-[15px]/[20px] font-bold", "truncate")}>{e.label}</p><p className={eS(eq, "shrink-0 tabular-nums")}>{e.used.toLocaleString("en-US")} / {e.cap.toLocaleString("en-US")}</p></div><div className={eS(ez, "mt-2")}><div className={eS(eD, "block h-full")} style={{
                        width: `${a}%`
                      }} /></div></div>;
                })}</div><div className="flex flex-wrap items-center justify-end gap-x-3 gap-y-2 px-3 py-3"><p className={eS(eq, "min-w-0 flex-auto")}>Unlimited messages on Scale.</p><button type="button" className={eS("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_68%,white),var(--rb-accent,oklch(84%_0.15_165)))] text-[var(--rb-accent-fg,oklch(26%_0.06_168))] shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_4px_10px_-4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_80%,transparent)] hover:not-disabled:-translate-y-px hover:not-disabled:brightness-[1.04] hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_7px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_85%,transparent)] active:not-disabled:translate-y-px active:not-disabled:brightness-[0.98] active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_55%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] motion-reduce:hover:translate-y-0 disabled:opacity-45 disabled:shadow-none dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_78%,white),var(--rb-accent,oklch(81%_0.16_163)))] dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_6px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,transparent)] dark:hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_9px_22px_-8px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_60%,transparent)] dark:active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_45%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black)] dark:disabled:shadow-none", "h-8 gap-1.5 rounded-[calc(var(--rb-r-full,999px))] px-3.5 text-[14px]/[18px] font-bold")}>Upgrade</button></div></div></div></div></div>;
    }
  },
  eP = {
    "ai-usage-1": 480,
    "ai-usage-2": 560,
    "ai-usage-3": 560,
    "ai-usage-4": 640,
    "ai-usage-5": 560,
    "ai-usage-6": 560,
    "ai-usage-7": 640,
    "ai-usage-8": 520
  };

export { eF as components };
export { eP as heights };

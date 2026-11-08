import * as __mod_46667 from "../_helpers/46667";
import * as __mod_4670 from "../_helpers/4670";
import * as __mod_40144 from "../_helpers/40144";
import * as __mod_29635 from "../_helpers/29635";
import * as __mod_88366 from "../_helpers/88366";
import * as __mod_20484 from "../_helpers/20484";
import * as __mod_84341 from "../_helpers/84341";
import * as __mod_22728 from "../_helpers/22728";
import * as __mod_31517 from "../_helpers/31517";
import * as __mod_90987 from "../_helpers/90987";
import * as __mod_95735 from "../_helpers/95735";
import * as __mod_55410 from "../_helpers/55410";
import * as __mod_86829 from "../_helpers/86829";
import * as __mod_31964 from "../_helpers/31964";
import * as __mod_27151 from "../_helpers/27151";
import * as __mod_59157 from "../_helpers/59157";
import * as __mod_59649 from "../_helpers/59649";
import * as __mod_1497 from "../_helpers/1497";
import * as __mod_37502 from "../_helpers/37502";
import * as __mod_81520 from "../_helpers/81520";
import * as __mod_48318 from "../_helpers/48318";
import * as __mod_27476 from "../_helpers/27476";
import * as __mod_36474 from "../_helpers/36474";
import * as __mod_33212 from "../_helpers/33212";
import * as __mod_66575 from "../_helpers/66575";
import * as __mod_5042 from "../_helpers/5042";
import * as __mod_69844 from "../_helpers/69844";
import * as __mod_41772 from "../_helpers/41772";
import * as __mod_40972 from "../_helpers/40972";
import * as __mod_54345 from "../_helpers/54345";
import * as __mod_36048 from "../_helpers/36048";
import * as __mod_58770 from "../_helpers/58770";
import * as __mod_89886 from "../_helpers/89886";
/**
 * Monitoring 2
 * slug: monitoring-2
 * category: monitoring
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let u = (...e) => e.filter(Boolean).join(" "),
  b = "bg-white dark:bg-neutral-950",
  h = "text-neutral-900/62 dark:text-neutral-100/62",
  p = "text-[15px]/[20px] font-bold",
  m = "text-[14px]/[20px] font-medium",
  k = "mx-1 mb-1 flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-5xl,22px))] border border-transparent bg-white dark:bg-neutral-950 shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] [&:has(+*)]:mb-0",
  f = "flex min-w-0 flex-wrap items-baseline gap-x-1 text-[22px]/[28px] font-extrabold tracking-[-0.01em] tabular-nums text-neutral-900 dark:text-neutral-100",
  g = u(m, h),
  v = u("text-[13px]/[16px] font-semibold tabular-nums", h),
  w = (e, a, r) => Math.min(r, Math.max(a, e)),
  j = (e, a, r, t) => Array.from({
    length: t
  }, (n, l) => Math.round(a * (1 + l / (t - 1) * r + .09 * (.5 * Math.sin(.7 * l + e) + .34 * Math.sin(.23 * l + 2.1 * e))))),
  y = ["1h", "24h", "7d"],
  N = {
    "1h": 12,
    "24h": 24,
    "7d": 28
  },
  z = {
    "1h": ["09:00", "09:15", "09:30", "09:45", "10:00"],
    "24h": ["04:00", "08:00", "12:00", "16:00", "20:00"],
    "7d": ["Mon", "Wed", "Thu", "Sat", "Sun"]
  },
  S = {
    "1h": "vs previous hour",
    "24h": "vs previous day",
    "7d": "vs previous week"
  },
  A = [{
    id: "req",
    label: "Requests",
    base: 1284e3,
    drift: .151,
    unit: ""
  }, {
    id: "err",
    label: "Error rate",
    base: 42,
    drift: -.02,
    unit: "%"
  }, {
    id: "p95",
    label: "p95 latency",
    base: 318,
    drift: .004,
    unit: "ms"
  }, {
    id: "sat",
    label: "Saturation",
    base: 61,
    drift: .037,
    unit: "%"
  }],
  R = [{
    id: "i1",
    title: "Checkout API timeouts",
    severity: "Critical",
    tone: "danger",
    service: "payments-edge",
    at: "09:12",
    body: "The charge endpoint exceeded its 8s budget on six consecutive calls, holding four orders at authorisation."
  }, {
    id: "i2",
    title: "Retry storm contained",
    severity: "Major",
    tone: "warning",
    service: "invoice-worker",
    at: "08:47",
    body: "Backoff was applied after a vendor 503 spike, capping retries and draining the queued backlog."
  }, {
    id: "i3",
    title: "Search index degraded",
    severity: "Minor",
    tone: "resolved",
    service: "search-api",
    at: "08:05",
    body: "Read latency on the embeddings index rose to 1.9s, slowing lookups for eleven minutes before recovering."
  }],
  C = {
    danger: "text-[oklch(51%_0.18_26)] dark:text-[oklch(76%_0.14_26)]",
    warning: "text-[oklch(49%_0.1_68)] dark:text-[oklch(80%_0.13_68)]",
    resolved: "text-neutral-900/78 dark:text-neutral-100/78"
  },
  E = (e, a) => "req" === e ? `${(a / 1e3).toFixed(1)}k` : "err" === e ? `${(a / 100).toFixed(2)}%` : "p95" === e ? `${a}ms` : `${a}%`;
function M({
  data: e,
  ticks: a,
  active: r,
  onActiveChange: o
}) {
  let [c, d] = function () {
      let e = (0, React.useRef)(null),
        [a, r] = (0, React.useState)({
          width: 0,
          height: 0
        });
      return (0, React.useEffect)(() => {
        let a = e.current,
          t = a?.ownerDocument.defaultView;
        if (!a || !t?.ResizeObserver) return;
        let n = new t.ResizeObserver(([e]) => {
          let a = e.contentRect;
          r({
            width: a.width,
            height: a.height
          });
        });
        return n.observe(a), () => n.disconnect();
      }, []), [e, a];
    }(),
    _ = d.height,
    x = Math.min(...e),
    b = Math.max(...e),
    h = .25 * (b - x || 1),
    p = (0, React.useCallback)(a => a / (e.length - 1) * Math.max(d.width - 2, 1) + 1, [e.length, d.width]),
    m = (0, React.useCallback)(e => _ - 4 - (e - x + h) / (b - x + 2 * h) * (_ - 12), [_, b, x, h]),
    k = (0, __mod_46667.A)().x((e, a) => p(a)).y(e => m(e)).curve(__mod_4670.G)(e) ?? "",
    f = (0, __mod_40144.A)().x((e, a) => p(a)).y0(_).y1(e => m(e)).curve(__mod_4670.G)(e) ?? "";
  return <div className="flex min-h-0 flex-1 flex-col"><div ref={c} role="img" aria-label={`Request throughput, ${e.length} points`} tabIndex={0} onPointerMove={a => (a => {
      let r = c.current;
      if (!r) return;
      let t = r.getBoundingClientRect(),
        n = t.width / (e.length - 1);
      o(w(Math.round((a - t.left) / n), 0, e.length - 1));
    })(a.clientX)} onPointerLeave={() => o(null)} onBlur={() => o(null)} onKeyDown={a => {
      ("ArrowLeft" === a.key || "ArrowRight" === a.key) && (a.preventDefault(), o(w((r ?? e.length - 1) + ("ArrowLeft" === a.key ? -1 : 1), 0, e.length - 1))), "Escape" === a.key && o(null);
    }} style={{
      touchAction: "pan-y"
    }} className={u("focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))]", "relative min-h-[180px] flex-1 cursor-crosshair")}>{d.width > 0 && d.height > 0 && <svg width={d.width} height={_} className="absolute inset-0 overflow-visible">{[.25, .5, .75].map(e => <line x1={0} x2={d.width} y1={_ * e} y2={_ * e} className="stroke-neutral-900/6 dark:stroke-neutral-100/8" strokeWidth={1} shapeRendering="crispEdges" />)}<path d={f} className="fill-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] dark:fill-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_16%,transparent)]" /><path d={k} fill="none" className="stroke-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_82%,black)] dark:stroke-[var(--rb-accent,oklch(81%_0.16_163))]" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />{null !== r && <><line x1={p(r)} x2={p(r)} y1={0} y2={_} className="stroke-neutral-900/40 dark:stroke-neutral-100/45" strokeWidth={1} shapeRendering="crispEdges" /><rect x={p(r) - 4} y={m(e[r]) - 4} width={8} height={8} className="fill-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_82%,black)] stroke-white stroke-[2.5] dark:fill-[var(--rb-accent,oklch(81%_0.16_163))] dark:stroke-neutral-900" /></>}</svg>}</div><div className={u(v, "mt-2 flex justify-between")}>{a.map(e => <span>{e}</span>)}</div></div>;
}
let L = (...e) => e.filter(Boolean).join(" "),
  O = "text-neutral-900/62 dark:text-neutral-100/62",
  $ = "text-[14px]/[20px] font-medium",
  T = "mx-1 mb-1 flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-5xl,22px))] border border-transparent bg-white dark:bg-neutral-950 shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] [&:has(+*)]:mb-0",
  I = "ms-0.5 text-[15px]/[20px] font-bold tracking-normal text-neutral-900/78 dark:text-neutral-100/78",
  F = "stroke-neutral-900/40 dark:stroke-neutral-100/45",
  B = L($, O),
  q = L("text-[13px]/[16px] font-semibold tabular-nums", O),
  H = [{
    id: "rps",
    label: "Requests",
    unit: "/s",
    base: 4200,
    spread: 480,
    seed: 1.1,
    threshold: 5200,
    thresholdLabel: "Autoscale at 5,200/s",
    decimals: 0
  }, {
    id: "p99",
    label: "p99 latency",
    unit: "ms",
    base: 340,
    spread: 90,
    seed: 4.6,
    threshold: 500,
    thresholdLabel: "SLO ceiling 500ms",
    decimals: 0
  }, {
    id: "err",
    label: "Errors",
    unit: "%",
    base: .42,
    spread: .26,
    seed: 8.3,
    threshold: 1,
    thresholdLabel: "Page on-call above 1%",
    decimals: 2
  }],
  V = (e, a) => a.toLocaleString("en-US", {
    minimumFractionDigits: e.decimals,
    maximumFractionDigits: e.decimals
  }),
  U = e => {
    let a = "ArrowRight" === e.key || "ArrowDown" === e.key ? 1 : "ArrowLeft" === e.key || "ArrowUp" === e.key ? -1 : 0;
    if (!a && "Home" !== e.key && "End" !== e.key) return;
    let r = Array.from(e.currentTarget.querySelectorAll('[role="radio"]:not(:disabled)')),
      t = r.indexOf(e.target);
    if (t < 0) return;
    e.preventDefault();
    let n = "Home" === e.key ? 0 : "End" === e.key ? r.length - 1 : (t + a + r.length) % r.length;
    r[n].focus(), r[n].click();
  };
let ea = (...e) => e.filter(Boolean).join(" "),
  er = "bg-white dark:bg-neutral-950",
  et = "text-neutral-900/78 dark:text-neutral-100/78",
  en = "text-neutral-900/62 dark:text-neutral-100/62",
  el = "text-[15px]/[20px] font-bold",
  ei = "text-[14px]/[20px] font-medium",
  es = "text-[13px]/[16px] font-semibold tabular-nums",
  eo = "inline-flex items-start gap-1 text-[14px]/[20px] font-bold tabular-nums",
  ec = "text-neutral-900/78 dark:text-neutral-100/78",
  ed = "text-[oklch(49%_0.1_68)] dark:text-[oklch(80%_0.13_68)]",
  e_ = "text-[oklch(51%_0.18_26)] dark:text-[oklch(76%_0.14_26)]",
  ex = "relative inline-flex size-8 shrink-0 overflow-hidden rounded-full select-none",
  eu = "flex size-full items-center justify-center rounded-[inherit] bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_24%,white)] text-[12px]/[16px] font-extrabold tabular-nums text-neutral-900 dark:text-neutral-100 dark:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_22%,var(--color-neutral-900))]",
  eb = "bg-linear-to-b from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950",
  eh = "bg-linear-to-t from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950",
  ep = ea(ei, en),
  em = ea(es, en),
  ek = ["Investigating", "Identified", "Monitoring", "Resolved"],
  ef = [{
    id: "e1",
    status: "Monitoring",
    who: "Priya Patel",
    initials: "PP",
    at: "09:41",
    body: "Connection pool raised to 240 and the failing region drained. Error rate is back under 0.2% and holding. Watching for one more cycle before we call it."
  }, {
    id: "e2",
    status: "Identified",
    who: "Theo Park",
    initials: "TP",
    at: "09:18",
    body: "The charge worker exhausted its database pool after a migration left an index rebuild running against the orders table."
  }, {
    id: "e3",
    status: "Investigating",
    who: "On-call rotation",
    initials: "OC",
    at: "09:04",
    body: "Automated alert fired on p99 checkout latency crossing 8s. Paging the payments team."
  }],
  eg = [{
    label: "Detected",
    value: "09:04",
    icon: __mod_29635.A
  }, {
    label: "Acknowledged",
    value: "09:06",
    icon: __mod_88366.A
  }, {
    label: "Mitigated",
    value: "09:38",
    icon: __mod_20484.A
  }, {
    label: "Duration",
    value: "37m",
    icon: __mod_84341.A
  }],
  ev = [{
    name: "Checkout API",
    state: "Degraded",
    tone: "danger"
  }, {
    name: "Payments worker",
    state: "Recovering",
    tone: "warning"
  }, {
    name: "Order history",
    state: "Operational",
    tone: "ok"
  }, {
    name: "Webhooks",
    state: "Operational",
    tone: "ok"
  }],
  ew = {
    danger: e_,
    warning: ed,
    ok: ec
  },
  ej = {
    Investigating: e_,
    Identified: ed,
    Monitoring: ec,
    Resolved: ec
  };
function ey() {
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
}
function eN({
  id: e,
  value: a,
  onChange: r,
  options: l
}) {
  let i = (0, React.useId)(),
    [s, c] = (0, React.useState)(!1),
    [d, _] = (0, React.useState)(!1),
    [x, u] = (0, React.useState)(0),
    [b, h] = (0, React.useState)(!1),
    [p, m] = (0, React.useState)(),
    k = (0, React.useRef)(null),
    f = (0, React.useRef)(null),
    g = (0, React.useRef)({
      buffer: "",
      at: 0
    }),
    v = l.indexOf(a),
    w = (e, a) => {
      let r = k.current,
        t = r?.ownerDocument.defaultView;
      if (r && t) {
        let e = r.getBoundingClientRect(),
          a = 0,
          n = t.innerHeight;
        for (let e = r.parentElement; e; e = e.parentElement) if (/auto|scroll|hidden|clip/.test(t.getComputedStyle(e).overflowY)) {
          let r = e.getBoundingClientRect();
          a = Math.max(a, r.top), n = Math.min(n, r.bottom);
          break;
        }
        let i = n - e.bottom,
          s = e.top - a,
          o = Math.min(32 * l.length + 8, 264),
          c = i < o + 8 && s > i,
          d = (c ? s : i) - 8;
        h(c), m(d < o ? Math.max(d, 40) : void 0);
      }
      _(e), u(a ?? (v >= 0 ? v : 0)), c(!0);
    };
  (0, React.useEffect)(() => {
    if (!s) return;
    let e = k.current,
      a = e?.ownerDocument;
    if (!a) return;
    let r = a => {
      e.contains(a.target) || c(!1);
    };
    return a.addEventListener("mousedown", r), a.addEventListener("touchstart", r), () => {
      a.removeEventListener("mousedown", r), a.removeEventListener("touchstart", r);
    };
  }, [s]), (0, React.useEffect)(() => {
    if (!s) return;
    let e = f.current,
      a = e?.querySelector(`[data-index="${x}"]`);
    if (!e || !a) return;
    let r = a.offsetTop,
      t = r + a.offsetHeight;
    r < e.scrollTop ? e.scrollTop = r : t > e.scrollTop + e.clientHeight && (e.scrollTop = t - e.clientHeight);
  }, [s, x]);
  let j = e => {
    let a = l[e];
    void 0 !== a && (r(a), c(!1), k.current?.querySelector("button")?.focus({
      preventScroll: !0
    }));
  };
  return <div ref={k} className="relative"><button id={e} type="button" role="combobox" aria-expanded={s} aria-controls={i} aria-haspopup="listbox" onClick={() => s ? c(!1) : w(!1)} onKeyDown={e => {
      if (!s) {
        ["Enter", " ", "ArrowDown", "ArrowUp"].includes(e.key) && (e.preventDefault(), w(!0));
        return;
      }
      if ("Escape" === e.key || "Tab" === e.key) {
        "Escape" === e.key && e.stopPropagation(), c(!1);
        return;
      }
      if ("ArrowDown" === e.key) e.preventDefault(), u(e => Math.min(e + 1, l.length - 1));else if ("ArrowUp" === e.key) e.preventDefault(), u(e => Math.max(e - 1, 0));else if ("Home" === e.key) e.preventDefault(), u(0);else if ("End" === e.key) e.preventDefault(), u(l.length - 1);else if ("Enter" === e.key || " " === e.key) e.preventDefault(), j(x);else if (1 === e.key.length && /\S/.test(e.key)) {
        let a = Date.now(),
          r = g.current;
        r.buffer = a - r.at > 700 ? e.key : r.buffer + e.key, r.at = a;
        let t = l.findIndex(e => e.toLowerCase().startsWith(r.buffer.toLowerCase()));
        t >= 0 && u(t);
      }
    }} className="inline-flex h-10 w-fit min-w-40 cursor-pointer items-center justify-between gap-2 rounded-[calc(var(--rb-r-xl,12px))] border border-transparent bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] px-3.5 text-left text-[15px]/[20px] font-semibold whitespace-nowrap text-neutral-900 outline-none select-none transition-[border-color,box-shadow,background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:not-disabled:not-aria-invalid:not-aria-expanded:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] focus-visible:border-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] focus-visible:bg-white focus-visible:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-expanded:border-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] aria-expanded:bg-white aria-expanded:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-invalid:border-[oklch(60%_0.236_26)] disabled:cursor-not-allowed disabled:text-neutral-900/40 disabled:shadow-none dark:text-neutral-100 dark:hover:not-disabled:not-aria-invalid:not-aria-expanded:bg-neutral-900 dark:focus-visible:border-[var(--rb-accent,oklch(81%_0.16_163))] dark:focus-visible:bg-neutral-900 dark:focus-visible:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-expanded:border-[var(--rb-accent,oklch(81%_0.16_163))] dark:aria-expanded:bg-neutral-900 dark:aria-expanded:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-invalid:border-[oklch(65.2%_0.219_26)] dark:disabled:text-neutral-100/40"><span className="grid min-w-0 flex-1 text-left *:[grid-area:1/1]">{l.map(e => <span aria-hidden="true" className="invisible truncate">{e}</span>)}<span className="truncate">{a}</span></span><__mod_22728.n icon={__mod_31517.A} size={18} strokeWidth={2} aria-hidden="true" className="shrink-0 text-neutral-900/78 dark:text-neutral-100/78" /></button>{s && <ul ref={f} id={i} role="listbox" tabIndex={-1} style={{
      maxHeight: p
    }} className={ea("min-w-52 max-w-[min(480px,calc(100vw-2rem))] overflow-x-hidden overflow-y-auto overscroll-contain rounded-[calc(var(--rb-r-3xl,16px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] p-2 text-neutral-900 dark:text-neutral-100 outline-none shadow-[0_0_0_1px_rgb(84_62_32/0.08),0_24px_56px_-20px_rgb(84_62_32/0.34),0_6px_16px_-8px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.65),0_24px_56px_-16px_rgb(0_0_0/0.8)]", !d && "transition-[opacity,scale] duration-[260ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] starting:scale-[0.94] starting:opacity-0 motion-reduce:transition-none motion-reduce:starting:scale-100", "absolute z-30 max-h-[264px] w-full min-w-[100%]", b ? "bottom-full mb-1.5" : "top-full mt-1.5")}>{l.map((e, r) => <li role="option" aria-selected={e === a} data-index={r} data-highlighted={r === x ? "" : void 0} onMouseEnter={() => u(r)} onClick={() => j(r)} className={ea("relative flex min-h-10 w-full cursor-default items-center gap-2.5 rounded-[calc(var(--rb-r-md,8px))] px-3 py-2 text-left text-[15px]/[20px] font-semibold text-neutral-900 outline-none select-none [&_svg]:shrink-0 [&_svg]:text-neutral-900/70 hover:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] focus-visible:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] data-[highlighted]:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-disabled:cursor-not-allowed aria-disabled:text-neutral-900/40 dark:text-neutral-100 dark:[&_svg]:text-neutral-100/70 dark:hover:bg-neutral-100/7 dark:focus-visible:bg-neutral-100/7 dark:data-[highlighted]:bg-neutral-100/7 dark:aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-disabled:text-neutral-100/40", "pe-8")}><span className="truncate">{e}</span>{e === a && <span className="pointer-events-none absolute end-2 flex size-4 items-center justify-center"><__mod_22728.n icon={__mod_90987.A} size={18} strokeWidth={2} aria-hidden="true" /></span>}</li>)}</ul>}</div>;
}
let eR = (...e) => e.filter(Boolean).join(" "),
  eC = "text-neutral-900 dark:text-neutral-100",
  eE = "text-neutral-900/62 dark:text-neutral-100/62",
  eM = "text-[14px]/[20px] font-medium",
  eD = "relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] text-neutral-900 dark:text-neutral-100 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] active:not-disabled:translate-y-px active:not-disabled:shadow-[inset_0_1px_3px_rgb(84_62_32/0.16),0_0_0_1px_rgb(84_62_32/0.10)] dark:active:not-disabled:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14),0_0_0_1px_rgb(84_62_32/0.10)] dark:aria-expanded:bg-neutral-800 dark:aria-expanded:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] disabled:bg-none disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] disabled:text-neutral-900/40 disabled:shadow-none dark:disabled:bg-neutral-800/60 dark:disabled:text-neutral-100/40",
  eW = "h-8 gap-1.5 rounded-[calc(var(--rb-r-full,999px))] px-3.5 text-[14px]/[18px] font-bold",
  eP = eR(eM, eE),
  eL = eR("text-[13px]/[16px] font-bold tabular-nums", eE),
  eO = [{
    id: "a1",
    rule: "Checkout p99 above budget",
    service: "payments-edge",
    severity: "Critical",
    condition: "p99 latency > 8s for 5m",
    observed: "11.4s",
    duration: "38m",
    state: "firing",
    seed: 1.2,
    runbook: "Drain the failing region, then raise the charge worker pool to 240."
  }, {
    id: "a2",
    rule: "Error rate spike",
    service: "api-gateway",
    severity: "Critical",
    condition: "5xx rate > 2% for 3m",
    observed: "4.1%",
    duration: "12m",
    state: "firing",
    seed: 3.4,
    runbook: "Check the last deploy, roll back if the spike matches the release marker."
  }, {
    id: "a3",
    rule: "Queue depth climbing",
    service: "invoice-worker",
    severity: "Warning",
    condition: "depth > 5,000 for 10m",
    observed: "7,318",
    duration: "1h 04m",
    state: "firing",
    seed: 5.6,
    runbook: "Scale consumers to 12 and confirm the vendor webhook is responding."
  }, {
    id: "a4",
    rule: "Disk usage nearing limit",
    service: "search-api",
    severity: "Warning",
    condition: "disk > 85% for 15m",
    observed: "88%",
    duration: "22m",
    state: "pending",
    seed: 7.8,
    runbook: "Rotate the index snapshots older than 14 days."
  }, {
    id: "a5",
    rule: "Certificate expiring",
    service: "edge-proxy",
    severity: "Info",
    condition: "expiry < 14d",
    observed: "9 days",
    duration: "2d",
    state: "pending",
    seed: 9.1,
    runbook: "Renewal is automated; confirm the ACME job ran on Sunday."
  }, {
    id: "a6",
    rule: "Cache hit ratio dropped",
    service: "catalog-api",
    severity: "Warning",
    condition: "hit ratio < 90% for 10m",
    observed: "94%",
    duration: "resolved 14:02",
    state: "resolved",
    seed: 11.3,
    runbook: "Warm the catalog cache after a bulk import."
  }, {
    id: "a7",
    rule: "Replication lag",
    service: "orders-db",
    severity: "Critical",
    condition: "lag > 30s for 5m",
    observed: "4s",
    duration: "resolved 11:47",
    state: "resolved",
    seed: 13.7,
    runbook: "Lag clears on its own once the nightly vacuum finishes."
  }],
  e$ = [{
    id: "all",
    label: "All"
  }, {
    id: "firing",
    label: "Firing"
  }, {
    id: "pending",
    label: "Pending"
  }, {
    id: "resolved",
    label: "Resolved"
  }],
  eT = {
    Critical: "text-[oklch(51%_0.18_26)] dark:text-[oklch(76%_0.14_26)]",
    Warning: "text-[oklch(49%_0.1_68)] dark:text-[oklch(80%_0.13_68)]",
    Info: "text-neutral-900/62 dark:text-neutral-100/62"
  };
function eI({
  seed: e,
  alarming: a
}) {
  let r = (0, React.useMemo)(() => Array.from({
    length: 24
  }, (a, r) => .35 + .32 * Math.sin(.55 * r + e) + .22 * Math.sin(.19 * r + 2.3 * e)), [e]);
  return <span aria-hidden={!0} className="flex h-6 items-end gap-[2px]">{r.map((e, n) => <span style={{
      height: `${Math.max(12, Math.min(100, 100 * e))}%`
    }} className={eR("w-[3px] rounded-[1px]", a && n > r.length - 7 ? "bg-[oklch(65.2%_0.219_26)] dark:bg-[oklch(65.2%_0.219_26)]" : "bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-100/8")} />)}</span>;
}
let eq = (...e) => e.filter(Boolean).join(" "),
  eH = "text-neutral-900/62 dark:text-neutral-100/62",
  eV = "text-[14px]/[20px] font-semibold tabular-nums text-neutral-900/62 dark:text-neutral-100/62",
  eU = eq("text-[14px]/[20px] font-medium", eH),
  eG = [{
    id: "all",
    label: "All"
  }, {
    id: "error",
    label: "Error"
  }, {
    id: "warn",
    label: "Warn"
  }, {
    id: "info",
    label: "Info"
  }, {
    id: "debug",
    label: "Debug"
  }],
  eK = {
    error: "text-[oklch(51%_0.18_26)] dark:text-[oklch(76%_0.14_26)]",
    warn: "text-[oklch(49%_0.1_68)] dark:text-[oklch(80%_0.13_68)]",
    info: eH,
    debug: eH
  },
  eQ = [{
    level: "info",
    service: "api-gateway",
    message: "GET /v2/orders 200 in 42ms",
    context: '{ "route": "/v2/orders", "region": "eu-west-1", "cache": "hit" }'
  }, {
    level: "debug",
    service: "catalog-api",
    message: "cache warm complete for tenant 4821",
    context: '{ "keys": 1284, "took_ms": 612 }'
  }, {
    level: "warn",
    service: "invoice-worker",
    message: "vendor responded 503, scheduling retry 2 of 5",
    context: '{ "vendor": "northwind-billing", "backoff_ms": 4000 }'
  }, {
    level: "info",
    service: "payments-edge",
    message: "charge authorised for ORD-99214",
    context: '{ "amount": "1240.00", "currency": "EUR", "took_ms": 388 }'
  }, {
    level: "error",
    service: "payments-edge",
    message: "charge timed out after 8s, releasing the hold",
    context: '{ "order": "ORD-99187", "attempt": 3, "pool": "exhausted" }'
  }, {
    level: "info",
    service: "search-api",
    message: "reindex batch 18/64 committed",
    context: '{ "docs": 4200, "lag_s": 1.2 }'
  }, {
    level: "debug",
    service: "edge-proxy",
    message: "upstream health probe ok",
    context: '{ "upstream": "orders-db", "rtt_ms": 3 }'
  }, {
    level: "warn",
    service: "search-api",
    message: "embeddings index read latency 1.9s",
    context: '{ "shard": 7, "threshold_ms": 1200 }'
  }],
  eJ = e => {
    let a, r, t;
    return {
      ...eQ[e % eQ.length],
      id: e,
      at: (r = Math.floor((a = 32640 + 7 * e) / 3600) % 24, t = Math.floor(a % 3600 / 60), `${String(r).padStart(2, "0")}:${String(t).padStart(2, "0")}:${String(a % 60).padStart(2, "0")}`)
    };
  },
  eY = Array.from({
    length: 22
  }, (e, a) => eJ(a)),
  eX = e => {
    let a = "ArrowRight" === e.key || "ArrowDown" === e.key ? 1 : "ArrowLeft" === e.key || "ArrowUp" === e.key ? -1 : 0;
    if (!a && "Home" !== e.key && "End" !== e.key) return;
    let r = Array.from(e.currentTarget.querySelectorAll('[role="radio"]:not(:disabled)')),
      t = r.indexOf(e.target);
    if (t < 0) return;
    e.preventDefault();
    let n = "Home" === e.key ? 0 : "End" === e.key ? r.length - 1 : (t + a + r.length) % r.length;
    r[n].focus(), r[n].click();
  },
  eZ = (...e) => e.filter(Boolean).join(" "),
  e0 = "text-neutral-900 dark:text-neutral-100",
  e1 = "text-neutral-900/78 dark:text-neutral-100/78",
  e2 = "text-neutral-900/62 dark:text-neutral-100/62",
  e5 = "text-[oklch(49%_0.1_68)] dark:text-[oklch(80%_0.13_68)]",
  e6 = "text-[14px]/[20px] font-medium",
  e8 = eZ(e6, e2),
  e4 = [30, 60, 90],
  e9 = [{
    id: "api",
    name: "API",
    seed: 3
  }, {
    id: "dash",
    name: "Dashboard",
    seed: 11
  }, {
    id: "pay",
    name: "Payments",
    seed: 5
  }, {
    id: "web",
    name: "Webhooks",
    seed: 17
  }, {
    id: "search",
    name: "Search",
    seed: 23
  }, {
    id: "cdn",
    name: "Asset CDN",
    seed: 29
  }],
  e3 = {
    up: "bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-100/8",
    partial: "bg-[oklch(80%_0.152_68)] dark:bg-[oklch(80%_0.152_68)]",
    down: "bg-[oklch(65.2%_0.219_26)] dark:bg-[oklch(65.2%_0.219_26)]"
  },
  e7 = {
    up: e1,
    partial: e5,
    down: "text-[oklch(51%_0.18_26)] dark:text-[oklch(76%_0.14_26)]"
  },
  ae = {
    up: "Operational",
    partial: "Degraded",
    down: "Outage"
  },
  aa = {
    api: [{
      at: "Jun 02",
      text: "Elevated 5xx for 18 minutes after a bad deploy."
    }],
    pay: [{
      at: "Jun 09",
      text: "Checkout latency above budget for 37 minutes."
    }, {
      at: "May 21",
      text: "Vendor 503s caused a retry storm for 12 minutes."
    }],
    search: [{
      at: "May 28",
      text: "Embeddings index read latency degraded for 11 minutes."
    }]
  };
let al = (...e) => e.filter(Boolean).join(" "),
  ai = "text-neutral-900/78 dark:text-neutral-100/78",
  as = "text-neutral-900/62 dark:text-neutral-100/62",
  ao = "text-[14px]/[20px] font-medium",
  ac = "text-[13px]/[16px] font-semibold tabular-nums",
  ad = "h-10 border-b border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] px-3 text-left align-middle text-[13px]/[16px] font-bold tabular-nums whitespace-nowrap text-neutral-900/62 dark:text-neutral-100/62 first:ps-4 last:pe-4 dark:bg-neutral-100/4",
  a_ = "-mx-1.5 inline-flex h-8 min-w-0 cursor-pointer items-center gap-1 rounded-[calc(var(--rb-r-full,999px))] px-1.5 transition-[background-color,color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-neutral-900/5 hover:text-neutral-900 data-sorted:text-neutral-900 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:hover:bg-neutral-100/6 dark:hover:text-neutral-100 dark:data-sorted:text-neutral-100",
  ax = al(ao, as),
  au = [{
    id: "h1",
    name: "api-eu-01",
    role: "API",
    region: "eu-west-1",
    cpu: 44,
    mem: 62,
    disk: 38,
    uptime: "34d",
    state: "healthy",
    note: "Serving 1.2k req/s with headroom on every dimension."
  }, {
    id: "h2",
    name: "api-eu-02",
    role: "API",
    region: "eu-west-1",
    cpu: 91,
    mem: 78,
    disk: 41,
    uptime: "34d",
    state: "critical",
    note: "CPU has been pinned above 88% for 22 minutes. Shed traffic or add a node."
  }, {
    id: "h3",
    name: "worker-eu-01",
    role: "Worker",
    region: "eu-west-1",
    cpu: 58,
    mem: 71,
    disk: 55,
    uptime: "12d",
    state: "healthy",
    note: "Draining the invoice backlog at 340 jobs per minute."
  }, {
    id: "h4",
    name: "worker-us-01",
    role: "Worker",
    region: "us-east-1",
    cpu: 36,
    mem: 49,
    disk: 87,
    uptime: "61d",
    state: "warning",
    note: "Disk at 87%. Rotate the job archive older than 30 days."
  }, {
    id: "h5",
    name: "db-primary",
    role: "Database",
    region: "eu-west-1",
    cpu: 52,
    mem: 84,
    disk: 66,
    uptime: "128d",
    state: "warning",
    note: "Buffer cache is under pressure during the nightly vacuum window."
  }, {
    id: "h6",
    name: "db-replica-01",
    role: "Database",
    region: "us-east-1",
    cpu: 21,
    mem: 47,
    disk: 64,
    uptime: "128d",
    state: "healthy",
    note: "Replication lag steady at 0.4s."
  }, {
    id: "h7",
    name: "cache-eu-01",
    role: "Cache",
    region: "eu-west-1",
    cpu: 18,
    mem: 33,
    disk: 12,
    uptime: "77d",
    state: "healthy",
    note: "Hit ratio 97.4% across the catalog keyspace."
  }, {
    id: "h8",
    name: "edge-ap-01",
    role: "Edge",
    region: "ap-south-1",
    cpu: 29,
    mem: 41,
    disk: 22,
    uptime: "9d",
    state: "healthy",
    note: "Newest node in the fleet, added during the Mumbai rollout."
  }],
  ab = ["All regions", "eu-west-1", "us-east-1", "ap-south-1"],
  ah = {
    healthy: "text-neutral-900/78 dark:text-neutral-100/78",
    warning: "text-[oklch(49%_0.1_68)] dark:text-[oklch(80%_0.13_68)]",
    critical: "text-[oklch(51%_0.18_26)] dark:text-[oklch(76%_0.14_26)]"
  },
  ap = {
    healthy: "Healthy",
    warning: "Warning",
    critical: "Critical"
  };
function am({
  id: e,
  value: a,
  onChange: r,
  options: l
}) {
  let i = (0, React.useId)(),
    [s, c] = (0, React.useState)(!1),
    [d, _] = (0, React.useState)(!1),
    [x, u] = (0, React.useState)(0),
    [b, h] = (0, React.useState)(!1),
    [p, m] = (0, React.useState)(),
    k = (0, React.useRef)(null),
    f = (0, React.useRef)(null),
    g = (0, React.useRef)({
      buffer: "",
      at: 0
    }),
    v = l.indexOf(a),
    w = (e, a) => {
      let r = k.current,
        t = r?.ownerDocument.defaultView;
      if (r && t) {
        let e = r.getBoundingClientRect(),
          a = 0,
          n = t.innerHeight;
        for (let e = r.parentElement; e; e = e.parentElement) if (/auto|scroll|hidden|clip/.test(t.getComputedStyle(e).overflowY)) {
          let r = e.getBoundingClientRect();
          a = Math.max(a, r.top), n = Math.min(n, r.bottom);
          break;
        }
        let i = n - e.bottom,
          s = e.top - a,
          o = Math.min(32 * l.length + 8, 264),
          c = i < o + 8 && s > i,
          d = (c ? s : i) - 8;
        h(c), m(d < o ? Math.max(d, 40) : void 0);
      }
      _(e), u(a ?? (v >= 0 ? v : 0)), c(!0);
    };
  (0, React.useEffect)(() => {
    if (!s) return;
    let e = k.current,
      a = e?.ownerDocument;
    if (!a) return;
    let r = a => {
      e.contains(a.target) || c(!1);
    };
    return a.addEventListener("mousedown", r), a.addEventListener("touchstart", r), () => {
      a.removeEventListener("mousedown", r), a.removeEventListener("touchstart", r);
    };
  }, [s]), (0, React.useEffect)(() => {
    if (!s) return;
    let e = f.current,
      a = e?.querySelector(`[data-index="${x}"]`);
    if (!e || !a) return;
    let r = a.offsetTop,
      t = r + a.offsetHeight;
    r < e.scrollTop ? e.scrollTop = r : t > e.scrollTop + e.clientHeight && (e.scrollTop = t - e.clientHeight);
  }, [s, x]);
  let j = e => {
    let a = l[e];
    void 0 !== a && (r(a), c(!1), k.current?.querySelector("button")?.focus({
      preventScroll: !0
    }));
  };
  return <div ref={k} className="relative"><button id={e} type="button" role="combobox" aria-expanded={s} aria-controls={i} aria-haspopup="listbox" onClick={() => s ? c(!1) : w(!1)} onKeyDown={e => {
      if (!s) {
        ["Enter", " ", "ArrowDown", "ArrowUp"].includes(e.key) && (e.preventDefault(), w(!0));
        return;
      }
      if ("Escape" === e.key || "Tab" === e.key) {
        "Escape" === e.key && e.stopPropagation(), c(!1);
        return;
      }
      if ("ArrowDown" === e.key) e.preventDefault(), u(e => Math.min(e + 1, l.length - 1));else if ("ArrowUp" === e.key) e.preventDefault(), u(e => Math.max(e - 1, 0));else if ("Home" === e.key) e.preventDefault(), u(0);else if ("End" === e.key) e.preventDefault(), u(l.length - 1);else if ("Enter" === e.key || " " === e.key) e.preventDefault(), j(x);else if (1 === e.key.length && /\S/.test(e.key)) {
        let a = Date.now(),
          r = g.current;
        r.buffer = a - r.at > 700 ? e.key : r.buffer + e.key, r.at = a;
        let t = l.findIndex(e => e.toLowerCase().startsWith(r.buffer.toLowerCase()));
        t >= 0 && u(t);
      }
    }} className="inline-flex h-10 w-fit min-w-40 cursor-pointer items-center justify-between gap-2 rounded-[calc(var(--rb-r-xl,12px))] border border-transparent bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] px-3.5 text-left text-[15px]/[20px] font-semibold whitespace-nowrap text-neutral-900 outline-none select-none transition-[border-color,box-shadow,background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:not-disabled:not-aria-invalid:not-aria-expanded:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] focus-visible:border-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] focus-visible:bg-white focus-visible:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-expanded:border-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] aria-expanded:bg-white aria-expanded:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-invalid:border-[oklch(60%_0.236_26)] disabled:cursor-not-allowed disabled:text-neutral-900/40 disabled:shadow-none dark:text-neutral-100 dark:hover:not-disabled:not-aria-invalid:not-aria-expanded:bg-neutral-900 dark:focus-visible:border-[var(--rb-accent,oklch(81%_0.16_163))] dark:focus-visible:bg-neutral-900 dark:focus-visible:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-expanded:border-[var(--rb-accent,oklch(81%_0.16_163))] dark:aria-expanded:bg-neutral-900 dark:aria-expanded:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-invalid:border-[oklch(65.2%_0.219_26)] dark:disabled:text-neutral-100/40"><span className="grid min-w-0 flex-1 text-left *:[grid-area:1/1]">{l.map(e => <span aria-hidden="true" className="invisible truncate">{e}</span>)}<span className="truncate">{a}</span></span><__mod_22728.n icon={__mod_31517.A} size={18} strokeWidth={2} aria-hidden="true" className="shrink-0 text-neutral-900/78 dark:text-neutral-100/78" /></button>{s && <ul ref={f} id={i} role="listbox" tabIndex={-1} style={{
      maxHeight: p
    }} className={al("min-w-52 max-w-[min(480px,calc(100vw-2rem))] overflow-x-hidden overflow-y-auto overscroll-contain rounded-[calc(var(--rb-r-3xl,16px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] p-2 text-neutral-900 dark:text-neutral-100 outline-none shadow-[0_0_0_1px_rgb(84_62_32/0.08),0_24px_56px_-20px_rgb(84_62_32/0.34),0_6px_16px_-8px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.65),0_24px_56px_-16px_rgb(0_0_0/0.8)]", !d && "transition-[opacity,scale] duration-[260ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] starting:scale-[0.94] starting:opacity-0 motion-reduce:transition-none motion-reduce:starting:scale-100", "absolute z-30 max-h-[264px] w-full min-w-[100%]", b ? "bottom-full mb-1.5" : "top-full mt-1.5")}>{l.map((e, r) => <li role="option" aria-selected={e === a} data-index={r} data-highlighted={r === x ? "" : void 0} onMouseEnter={() => u(r)} onClick={() => j(r)} className={al("relative flex min-h-10 w-full cursor-default items-center gap-2.5 rounded-[calc(var(--rb-r-md,8px))] px-3 py-2 text-left text-[15px]/[20px] font-semibold text-neutral-900 outline-none select-none [&_svg]:shrink-0 [&_svg]:text-neutral-900/70 hover:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] focus-visible:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] data-[highlighted]:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-disabled:cursor-not-allowed aria-disabled:text-neutral-900/40 dark:text-neutral-100 dark:[&_svg]:text-neutral-100/70 dark:hover:bg-neutral-100/7 dark:focus-visible:bg-neutral-100/7 dark:data-[highlighted]:bg-neutral-100/7 dark:aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-disabled:text-neutral-100/40", "pe-8")}><span className="truncate">{e}</span>{e === a && <span className="pointer-events-none absolute end-2 flex size-4 items-center justify-center"><__mod_22728.n icon={__mod_90987.A} size={18} strokeWidth={2} aria-hidden="true" /></span>}</li>)}</ul>}</div>;
}
function ak({
  label: e,
  value: a
}) {
  let r = a >= 85,
    n = a >= 70;
  return <div className="min-w-[64px]"><div className="flex items-baseline justify-between gap-2"><span className={al(ac, as)}>{e}</span><span className={al(ac, r ? "text-[oklch(51%_0.18_26)] dark:text-[oklch(76%_0.14_26)]" : ai)}>{a}%</span></div><div role="progressbar" aria-valuenow={a} aria-valuemin={0} aria-valuemax={100} aria-label={e} className={al("relative block h-2.5 w-full overflow-hidden rounded-[calc(var(--rb-r-full,999px))] bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] shadow-[inset_0_1px_2px_rgb(84_62_32/0.12)] dark:bg-neutral-100/12 dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.5)]", "mt-1")}><div style={{
        width: `${a}%`
      }} className={r ? al("bg-[oklch(65.2%_0.219_26)] dark:bg-[oklch(65.2%_0.219_26)]", "h-full rounded-[inherit]") : n ? al("bg-[oklch(80%_0.152_68)] dark:bg-[oklch(80%_0.152_68)]", "h-full rounded-[inherit]") : "block h-full rounded-[calc(var(--rb-r-full,999px))] bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_82%,black)] shadow-[inset_0_1px_0_rgb(255_255_255/0.35)] transition-[width] duration-[420ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] motion-reduce:transition-none dark:bg-[var(--rb-accent,oklch(81%_0.16_163))]"} /></div></div>;
}
let af = (...e) => e.filter(Boolean).join(" "),
  ag = "text-neutral-900 dark:text-neutral-100",
  av = "text-neutral-900/62 dark:text-neutral-100/62",
  aw = "text-[oklch(51%_0.18_26)] dark:text-[oklch(76%_0.14_26)]",
  aj = "text-[14px]/[20px] font-medium",
  ay = "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))]",
  aN = "mx-1 mb-1 flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-5xl,22px))] border border-transparent bg-white dark:bg-neutral-950 shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] [&:has(+*)]:mb-0",
  az = "h-10 border-b border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] px-3 text-left align-middle text-[13px]/[16px] font-bold tabular-nums whitespace-nowrap text-neutral-900/62 dark:text-neutral-100/62 first:ps-4 last:pe-4 dark:bg-neutral-100/4",
  aS = "h-12 border-b border-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] px-3 align-middle whitespace-nowrap text-neutral-900 dark:text-neutral-100 group-last:border-b-0 first:ps-4 last:pe-4 dark:border-neutral-100/6",
  aA = "text-right tabular-nums",
  aR = af(aj, av),
  aC = ["0–50", "50–100", "100–200", "200–300", "300–500", "500–800", "0.8–1.2s", "1.2–2s", "2–4s", "4s+"],
  aE = [{
    id: "e1",
    route: "/v2/checkout",
    method: "POST",
    rps: 184,
    p50: 412,
    p90: 1180,
    p99: 8420,
    errorRate: 2.4,
    budget: 2e3,
    shape: [2, 6, 14, 22, 26, 18, 12, 9, 7, 6]
  }, {
    id: "e2",
    route: "/v2/orders",
    method: "GET",
    rps: 942,
    p50: 42,
    p90: 96,
    p99: 214,
    errorRate: .1,
    budget: 500,
    shape: [48, 32, 18, 9, 5, 3, 1, 1, 0, 0]
  }, {
    id: "e3",
    route: "/v2/search",
    method: "GET",
    rps: 618,
    p50: 128,
    p90: 384,
    p99: 1240,
    errorRate: .4,
    budget: 1e3,
    shape: [12, 26, 34, 22, 14, 9, 6, 4, 2, 1]
  }, {
    id: "e4",
    route: "/v2/invoices",
    method: "POST",
    rps: 76,
    p50: 288,
    p90: 640,
    p99: 1810,
    errorRate: .9,
    budget: 1500,
    shape: [6, 14, 24, 26, 20, 13, 8, 5, 3, 2]
  }, {
    id: "e5",
    route: "/v2/profile",
    method: "PUT",
    rps: 31,
    p50: 66,
    p90: 148,
    p99: 322,
    errorRate: .2,
    budget: 800,
    shape: [30, 34, 22, 11, 6, 3, 2, 1, 0, 0]
  }, {
    id: "e6",
    route: "/v2/webhooks",
    method: "POST",
    rps: 208,
    p50: 74,
    p90: 190,
    p99: 486,
    errorRate: .3,
    budget: 900,
    shape: [26, 30, 24, 13, 7, 4, 2, 1, 1, 0]
  }],
  aM = [{
    key: "rps",
    label: "Req/s",
    cls: "hidden sm:table-cell"
  }, {
    key: "p50",
    label: "p50",
    cls: ""
  }, {
    key: "p90",
    label: "p90",
    cls: "hidden md:table-cell"
  }, {
    key: "p99",
    label: "p99",
    cls: ""
  }, {
    key: "errorRate",
    label: "Errors",
    cls: "hidden lg:table-cell"
  }],
  aD = e => e >= 1e3 ? `${(e / 1e3).toFixed(2)}s` : `${e}ms`,
  aW = e => /[s+]$/.test(aC[e]) ? aC[e] : `${aC[e]}ms`;
let aF = (...e) => e.filter(Boolean).join(" "),
  aB = "rounded-[var(--rb-r-4xl,18px)]",
  aq = "text-neutral-900 dark:text-neutral-100",
  aH = "text-neutral-900/62 dark:text-neutral-100/62",
  aV = "divide-y divide-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:divide-neutral-100/7",
  aU = "text-[13px]/[16px] font-bold tabular-nums",
  aG = "text-[13px]/[16px] font-semibold tabular-nums",
  aK = "h-8 gap-1.5 rounded-[calc(var(--rb-r-full,999px))] px-3.5 text-[14px]/[18px] font-bold",
  aQ = "inline-flex items-start gap-1.5 text-[15px]/[20px] font-bold tabular-nums",
  aJ = "text-neutral-900 dark:text-neutral-100",
  aY = "text-neutral-900 dark:text-neutral-100",
  aX = "text-neutral-900/62 dark:text-neutral-100/62",
  aZ = "text-[oklch(51%_0.18_26)] dark:text-[oklch(76%_0.14_26)]",
  a0 = "flex h-lh shrink-0 items-center",
  a1 = "inline-block size-3 shrink-0 rounded-full border-2 border-current border-t-transparent animate-spin [animation-duration:700ms] motion-reduce:animate-none",
  a2 = aF("text-[14px]/[20px] font-medium", aH),
  a5 = [{
    id: "r1",
    group: "running",
    icon: __mod_95735.A,
    title: "Refund duplicate charge on ORD-99214",
    step: "Step 4 of 6",
    detail: "Matching the second transaction in the payout file",
    initials: "PP",
    env: "Production",
    at: "2m ago",
    progress: 62,
    flag: "on-track"
  }, {
    id: "r2",
    group: "running",
    icon: __mod_55410.A,
    title: "Draft renewal outreach for 38 Q3 accounts",
    step: "Step 2 of 5",
    detail: "Pulling usage summaries for segment B",
    initials: "TP",
    env: "Production",
    at: "8m ago",
    progress: 35,
    flag: "on-track"
  }, {
    id: "r3",
    group: "running",
    icon: __mod_86829.A,
    title: "Dedupe 412 contacts imported from the spring list",
    step: "Step 3 of 4",
    detail: "Merging 57 confirmed duplicate pairs",
    initials: "NV",
    env: "Staging",
    at: "14m ago",
    progress: 70,
    flag: "on-track"
  }, {
    id: "r4",
    group: "running",
    icon: __mod_95735.A,
    title: "Refund damaged item claim on ORD-99187",
    step: "Step 5 of 6",
    detail: "Waiting on finance approval for the €1,240 credit",
    initials: "MS",
    env: "Production",
    at: "22m ago",
    progress: 81,
    flag: "needs-approval"
  }, {
    id: "r5",
    group: "running",
    icon: __mod_31964.A,
    title: "Summarise the Meridian master services agreement",
    step: "Step 1 of 3",
    detail: "Splitting 84 pages into clause sections",
    initials: "KT",
    env: "Development",
    at: "31m ago",
    progress: 15,
    flag: "on-track"
  }, {
    id: "r6",
    group: "waiting",
    icon: __mod_31964.A,
    title: "Reconcile 23 June freight invoices",
    step: "Queued 18 min",
    detail: "Position 2 in the finance lane",
    initials: "LG",
    env: "Production",
    at: "18m ago",
    progress: null,
    flag: "on-track"
  }, {
    id: "r7",
    group: "waiting",
    icon: __mod_55410.A,
    title: "Send onboarding nudges to 112 trial signups",
    step: "Step 1 of 4",
    detail: "Rate limited by the email provider, retry at 13:40",
    initials: "PP",
    env: "Production",
    at: "26m ago",
    progress: 10,
    flag: "retrying"
  }, {
    id: "r8",
    group: "waiting",
    icon: __mod_27151.A,
    title: "Enrich 64 new leads from the partner webinar",
    step: "Queued 32 min",
    detail: "Waiting for the enrichment API window",
    initials: "TP",
    env: "Staging",
    at: "32m ago",
    progress: null,
    flag: "on-track"
  }, {
    id: "r9",
    group: "waiting",
    icon: __mod_86829.A,
    title: "Archive conversations older than 180 days",
    step: "Queued 1 h",
    detail: "Scheduled for the low traffic window at 02:00",
    initials: "NV",
    env: "Production",
    at: "1h ago",
    progress: null,
    flag: "on-track"
  }, {
    id: "r10",
    group: "failed",
    icon: __mod_95735.A,
    title: "Refund partial return on ORD-99102 for Cedar Labs",
    step: "Failed at step 3 of 6",
    detail: "The processor declined the partial capture",
    initials: "MS",
    env: "Production",
    at: "1h ago",
    progress: 48,
    flag: "escalated"
  }, {
    id: "r11",
    group: "failed",
    icon: __mod_31964.A,
    title: "Match 9 supplier invoices to June purchase orders",
    step: "Failed at step 2 of 5",
    detail: "Two invoices reference a closed PO",
    initials: "LG",
    env: "Production",
    at: "2h ago",
    progress: 32,
    flag: "escalated"
  }, {
    id: "r12",
    group: "failed",
    icon: __mod_27151.A,
    title: "Classify 240 support threads for the quarterly review",
    step: "Failed at step 1 of 2",
    detail: "The label schema no longer matches",
    initials: "KT",
    env: "Staging",
    at: "3h ago",
    progress: 12,
    flag: "retrying"
  }],
  a6 = [{
    id: "running",
    label: "Running",
    hint: "Live executions streaming steps right now"
  }, {
    id: "waiting",
    label: "Waiting",
    hint: "Queued behind approvals, rate limits or schedules"
  }, {
    id: "failed",
    label: "Failed",
    hint: "Stopped runs awaiting retry or escalation"
  }],
  a8 = {
    running: aJ,
    waiting: aY,
    failed: aZ
  },
  a4 = {
    "on-track": "On track",
    "needs-approval": "Needs approval",
    retrying: "Retrying",
    escalated: "Escalated"
  },
  a9 = {
    "on-track": aX,
    "needs-approval": aY,
    retrying: aX,
    escalated: aZ
  },
  a3 = {
    neutral: aq,
    danger: "text-[oklch(51%_0.18_26)] dark:text-[oklch(76%_0.14_26)]",
    warning: aq
  };
function a7({
  value: e
}) {
  let a = 2 * Math.PI * 8;
  return <svg width={20} height={20} viewBox="0 0 20 20" aria-hidden={!0}><circle cx={10} cy={10} r={8} fill="none" strokeWidth={2.5} className="stroke-neutral-900/12 dark:stroke-neutral-100/14" /><circle cx={10} cy={10} r={8} fill="none" strokeWidth={2.5} strokeLinecap="round" strokeDasharray={`${e / 100 * a} ${a}`} transform="rotate(-90 10 10)" className="stroke-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_82%,black)] dark:stroke-[var(--rb-accent,oklch(81%_0.16_163))]" /></svg>;
}
let re = (...e) => e.filter(Boolean).join(" "),
  ra = "text-neutral-900/62 dark:text-neutral-100/62",
  rr = "text-[oklch(51%_0.18_26)] dark:text-[oklch(76%_0.14_26)]",
  rt = "text-[14px]/[20px] font-medium",
  rn = "text-[13px]/[16px] font-semibold tabular-nums",
  rl = "mx-1 mb-1 flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-5xl,22px))] border border-transparent bg-white dark:bg-neutral-950 shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] [&:has(+*)]:mb-0",
  ri = "flex min-w-0 flex-wrap items-baseline gap-x-1 text-[22px]/[28px] font-extrabold tracking-[-0.01em] tabular-nums text-neutral-900 dark:text-neutral-100",
  rs = "stroke-neutral-900/40 dark:stroke-neutral-100/45",
  ro = re(rt, ra),
  rc = re(rn, ra),
  rd = ["7d", "30d", "90d"],
  r_ = {
    "7d": 7,
    "30d": 30,
    "90d": 26
  },
  rx = [{
    id: "s1",
    name: "Checkout availability",
    indicator: "Successful charges / attempted charges",
    target: 99.9,
    current: 99.62,
    remaining: 12,
    burn: 4.2,
    seed: 1.7
  }, {
    id: "s2",
    name: "API latency",
    indicator: "Requests served under 500ms",
    target: 99,
    current: 99.24,
    remaining: 64,
    burn: 1.1,
    seed: 4.3
  }, {
    id: "s3",
    name: "Search freshness",
    indicator: "Documents indexed within 60s",
    target: 99.5,
    current: 99.44,
    remaining: 38,
    burn: 1.9,
    seed: 6.9
  }, {
    id: "s4",
    name: "Webhook delivery",
    indicator: "Events delivered within 5 minutes",
    target: 99.9,
    current: 99.97,
    remaining: 88,
    burn: .4,
    seed: 9.5
  }, {
    id: "s5",
    name: "Dashboard uptime",
    indicator: "Successful page loads",
    target: 99.95,
    current: 99.99,
    remaining: 92,
    burn: .2,
    seed: 12.1
  }],
  ru = e => e < 20 ? "danger" : e < 45 ? "warning" : "ok",
  rb = {
    danger: re("bg-[oklch(65.2%_0.219_26)] dark:bg-[oklch(65.2%_0.219_26)]", "block h-full rounded-[inherit]"),
    warning: re("bg-[oklch(80%_0.152_68)] dark:bg-[oklch(80%_0.152_68)]", "block h-full rounded-[inherit]"),
    ok: "block h-full rounded-[calc(var(--rb-r-full,999px))] bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_82%,black)] shadow-[inset_0_1px_0_rgb(255_255_255/0.35)] transition-[width] duration-[420ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] motion-reduce:transition-none dark:bg-[var(--rb-accent,oklch(81%_0.16_163))]"
  },
  rh = {
    danger: "text-[oklch(51%_0.18_26)] dark:text-[oklch(76%_0.14_26)]",
    warning: "text-[oklch(49%_0.1_68)] dark:text-[oklch(80%_0.13_68)]",
    ok: "text-neutral-900/78 dark:text-neutral-100/78"
  },
  rp = {
    danger: "Budget critical",
    warning: "Burning fast",
    ok: "Healthy"
  },
  rm = e => {
    let a = "ArrowRight" === e.key || "ArrowDown" === e.key ? 1 : "ArrowLeft" === e.key || "ArrowUp" === e.key ? -1 : 0;
    if (!a && "Home" !== e.key && "End" !== e.key) return;
    let r = Array.from(e.currentTarget.querySelectorAll('[role="radio"]:not(:disabled)')),
      t = r.indexOf(e.target);
    if (t < 0) return;
    e.preventDefault();
    let n = "Home" === e.key ? 0 : "End" === e.key ? r.length - 1 : (t + a + r.length) % r.length;
    r[n].focus(), r[n].click();
  },
  rk = {
    "monitoring-1": function () {
      let [e, a] = (0, React.useState)("24h"),
        [r, l] = (0, React.useState)(null),
        {
          ref: i,
          edges: s,
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
        }(),
        v = (0, React.useMemo)(() => A.map((a, r) => ({
          ...a,
          values: j(1.4 + 2.3 * r, a.base, a.drift, N[e])
        })), [e]),
        w = (0, React.useMemo)(() => j(3.7, 1263, .124, N[e]), [e]),
        D = w.reduce((e, a) => e + a, 0);
      return <div className={u("bg-white dark:bg-neutral-950", "text-neutral-900 dark:text-neutral-100", "flex h-full min-h-[760px] w-full flex-col overflow-hidden p-4 sm:p-6")}><div className={u("relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 shadow-[inset_0_0_0_1px_rgb(84_62_32/0.05)] dark:shadow-[inset_0_0_0_1px_rgb(255_255_255/0.05)]", "flex min-h-0 flex-1 flex-col gap-1")}><div className="flex flex-wrap items-start justify-between gap-3 px-4 py-3.5"><div className="min-w-0"><div className="flex items-center gap-2"><h2 className={u("text-[17px]/[22px] font-extrabold", "truncate")}>Platform health</h2><span className={u("inline-flex items-start gap-1.5 text-[15px]/[20px] font-bold tabular-nums", "text-neutral-900 dark:text-neutral-100")}><span className="flex h-lh shrink-0 items-center"><span aria-hidden="true" className="inline-block size-3 shrink-0 rounded-full border-2 border-current border-t-transparent animate-spin [animation-duration:700ms] motion-reduce:animate-none" /></span>Live</span></div><p className={u(g, "mt-0.5 truncate")}>Traffic, errors and saturation across every production service.</p></div><div className="flex shrink-0 items-center gap-2"><div role="radiogroup" aria-label="Time range" className={u("inline-flex w-fit max-w-full items-stretch gap-1 rounded-[calc(var(--rb-r-full,999px)_+_min(4px,var(--rb-r-full,999px)))] bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] p-1", "h-10")}>{y.map(r => <button type="button" role="radio" aria-checked={r === e} onClick={() => {
                  a(r), l(null);
                }} className="relative inline-flex min-w-0 cursor-pointer items-center justify-center gap-1.5 whitespace-nowrap [&_svg]:shrink-0 rounded-[calc(var(--rb-r-full,999px))] px-4 text-[14px]/[18px] font-bold text-neutral-900/78 dark:text-neutral-100/78 select-none transition-[background-color,color,box-shadow,outline-color,scale] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:scale-[0.96] motion-reduce:active:scale-100 hover:not-aria-checked:text-neutral-900 aria-checked:bg-white aria-checked:text-neutral-900 aria-checked:shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_2px_rgb(84_62_32/0.10),0_3px_8px_-2px_rgb(84_62_32/0.20)] disabled:cursor-not-allowed disabled:text-neutral-900/40 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:hover:not-aria-checked:text-neutral-100 dark:aria-checked:bg-[color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800))] dark:aria-checked:text-neutral-100 dark:aria-checked:shadow-[inset_0_1px_0_rgb(255_255_255/0.1),0_0_0_1px_rgb(0_0_0/0.6),0_2px_5px_-1px_rgb(0_0_0/0.6)] dark:disabled:text-neutral-100/40">{r}</button>)}</div><button type="button" aria-label="Refresh" className={u("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] text-neutral-900 dark:text-neutral-100 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] active:not-disabled:translate-y-px active:not-disabled:shadow-[inset_0_1px_3px_rgb(84_62_32/0.16),0_0_0_1px_rgb(84_62_32/0.10)] dark:active:not-disabled:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14),0_0_0_1px_rgb(84_62_32/0.10)] dark:aria-expanded:bg-neutral-800 dark:aria-expanded:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] disabled:bg-none disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] disabled:text-neutral-900/40 disabled:shadow-none dark:disabled:bg-neutral-800/60 dark:disabled:text-neutral-100/40", "size-10 rounded-[calc(var(--rb-r-full,999px))]")}><__mod_22728.n icon={__mod_59157.A} size={18} strokeWidth={2} aria-hidden="true" /></button></div></div><div className={u(k, "@container p-0.75")}><div className="grid grid-cols-2 gap-1 [&>:last-child:nth-child(odd)]:col-span-full @3xl:grid-flow-col @3xl:grid-cols-none @3xl:auto-cols-fr @3xl:[&>:last-child:nth-child(odd)]:col-auto">{v.map(a => {
                let r = a.values[0],
                  n = a.values[a.values.length - 1],
                  l = (n - r) / r * 100,
                  i = l >= 0;
                return <div className={u("flex min-w-0 flex-col gap-2 rounded-[calc(var(--rb-r-5xl,22px))] bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] px-3 py-3.5 dark:bg-neutral-100/4", "ps-3 pe-3")}><div className="flex items-start justify-between gap-2"><span className={u("text-[14px]/[20px] font-bold text-neutral-900/78 dark:text-neutral-100/78", "min-w-0 truncate")}>{a.label}</span><button type="button" aria-label={`Options for ${a.label}`} className={u("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-transparent text-neutral-900 hover:not-disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] active:not-disabled:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] disabled:text-neutral-900/40 dark:text-neutral-100 dark:hover:not-disabled:bg-neutral-100/8 dark:active:not-disabled:bg-neutral-100/12 dark:aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:disabled:text-neutral-100/40", "size-7 rounded-[calc(var(--rb-r-full,999px))]", "-mt-1 -mr-1")}><__mod_22728.n icon={__mod_59649.A} size={18} strokeWidth={2} aria-hidden="true" /></button></div><div className={f}><p>{E(a.id, n)}</p><span className="inline-flex min-w-0 flex-wrap items-baseline gap-x-1 text-[13px]/[18px] font-bold tabular-nums [&>svg]:self-center text-neutral-900/78 dark:text-neutral-100/78"><__mod_22728.n icon={i ? __mod_1497.A : __mod_37502.A} size={14} strokeWidth={2} aria-hidden="true" /><span className="sr-only">{i ? "Up" : "Down"}</span>{Math.abs(l).toFixed(1)}%</span></div><p className={u("text-[14px]/[20px] font-medium text-neutral-900/62 dark:text-neutral-100/62", "text-pretty")}>{S[e]}: {E(a.id, r)}</p></div>;
              })}</div></div><div className={u(k, "min-h-0 flex-1")}><div className={u("bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-100/8", "grid min-h-0 flex-1 gap-px lg:grid-cols-[1fr_360px]")}><div className={u(b, "flex min-h-[280px] flex-col p-4 lg:min-h-0")}><div className="flex items-baseline justify-between gap-3"><div><h3 className={p}>Request throughput</h3><p className={u(f, "mt-1.5")}>{(null === r ? D : w[r]).toLocaleString("en-US")}</p></div><p className={u(g, "shrink-0")}>{null === r ? `total, last ${e}` : `point ${r + 1} of ${w.length}`}</p></div><div className="mt-3 flex min-h-0 flex-1 flex-col"><M data={w} ticks={z[e]} active={r} onActiveChange={l} /></div></div><div className={u(b, "flex min-h-0 flex-col")}><div className="px-4 py-3"><h3 className={p}>Incident activity</h3></div><div className="relative min-h-0 flex-1"><ul ref={i} onScroll={h} className={u("divide-y divide-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:divide-neutral-100/7", "h-full overflow-y-auto pb-2")}>{R.map(e => <li className={u("relative flex min-h-12 w-full min-w-0 flex-wrap items-center gap-x-3 gap-y-1 py-2.5 text-left text-neutral-900 dark:text-neutral-100 transition-[background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] has-[[data-description]]:min-h-16", "px-4")}><div className="flex min-w-0 flex-1 flex-col gap-0.5"><div className={u("flex max-w-full min-w-0 items-baseline gap-2 text-[15px]/[20px] font-bold text-neutral-900 dark:text-neutral-100", "flex-wrap")}><span>{e.title}</span><span className={u("inline-flex items-start gap-1 text-[14px]/[20px] font-bold tabular-nums", C[e.tone])}>{e.severity}</span></div><p className={u(g, "mt-1 flex flex-wrap gap-x-3")}><span>{e.service}</span><span>{e.at}</span></p><p className={u(m, "text-neutral-900/78 dark:text-neutral-100/78", "mt-1.5")}>{e.body}</p></div></li>)}</ul><div aria-hidden="true" className={u("bg-linear-to-b from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 top-0 h-8", s.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={u("bg-linear-to-t from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 bottom-0 h-8", s.end ? "opacity-100" : "opacity-0")} /></div></div></div></div></div></div>;
    },
    "monitoring-2": function () {
      let e = (0, React.useRef)(null),
        [a, r] = (0, React.useState)("rps"),
        [c, d] = (0, React.useState)(!0),
        [_, x] = (0, React.useState)(0),
        u = H.find(e => e.id === a) ?? H[0];
      (0, React.useEffect)(() => {
        if (!c) return;
        let a = e.current?.ownerDocument.defaultView ?? window,
          r = a.setInterval(() => x(e => e + 1), 1e3);
        return () => a.clearInterval(r);
      }, [c]);
      let b = (0, React.useMemo)(() => Array.from({
          length: 60
        }, (e, a) => {
          let r;
          return r = _ + a, Math.max(0, u.base + u.spread * (.52 * Math.sin(.21 * r + u.seed) + .33 * Math.sin(.071 * r + 3.1 * u.seed) + .15 * Math.sin(.53 * r + 1.7 * u.seed)));
        }), [u, _]),
        h = b[b.length - 1],
        p = Math.min(...b),
        m = Math.max(...b),
        k = b.reduce((e, a) => e + a, 0) / b.length,
        f = h > u.threshold,
        [g, v] = function () {
          let e = (0, React.useRef)(null),
            [a, r] = (0, React.useState)({
              width: 0,
              height: 0
            });
          return (0, React.useEffect)(() => {
            let a = e.current,
              t = a?.ownerDocument.defaultView;
            if (!a || !t?.ResizeObserver) return;
            let n = new t.ResizeObserver(([e]) => {
              let a = e.contentRect;
              r({
                width: a.width,
                height: a.height
              });
            });
            return n.observe(a), () => n.disconnect();
          }, []), [e, a];
        }(),
        w = v.height,
        j = .94 * Math.min(p, u.threshold),
        y = 1.06 * Math.max(m, u.threshold),
        N = (0, React.useCallback)(e => e / 59 * Math.max(v.width - 2, 1) + 1, [v.width]),
        z = (0, React.useCallback)(e => w - 4 - (e - j) / (y - j || 1) * (w - 12), [w, y, j]),
        S = (0, __mod_46667.A)().x((e, a) => N(a)).y(e => z(e)).curve(__mod_4670.G)(b) ?? "",
        A = (0, __mod_40144.A)().x((e, a) => N(a)).y0(w).y1(e => z(e)).curve(__mod_4670.G)(b) ?? "",
        R = [{
          label: "Now",
          value: V(u, h)
        }, {
          label: "Average",
          value: V(u, k)
        }, {
          label: "Peak",
          value: V(u, m)
        }, {
          label: "Floor",
          value: V(u, p)
        }];
      return <div ref={e} className={L("bg-white dark:bg-neutral-950", "text-neutral-900 dark:text-neutral-100", "flex h-full min-h-[640px] w-full flex-col overflow-hidden p-4 sm:p-6")}><div className={L("relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 shadow-[inset_0_0_0_1px_rgb(84_62_32/0.05)] dark:shadow-[inset_0_0_0_1px_rgb(255_255_255/0.05)]", "mx-auto flex min-h-0 w-full max-w-[1100px] flex-1 flex-col gap-1")}><div className="flex flex-wrap items-center justify-between gap-3 px-4 py-3"><div className="min-w-0"><div className="flex items-center gap-2"><h2 className={L("text-[17px]/[22px] font-extrabold", "truncate")}>Live stream</h2><span className={L("inline-flex items-start gap-1.5 text-[15px]/[20px] font-bold tabular-nums", c ? "text-neutral-900 dark:text-neutral-100" : "text-neutral-900/62 dark:text-neutral-100/62")}>{c && <span className="flex h-lh shrink-0 items-center"><span aria-hidden="true" className="inline-block size-3 shrink-0 rounded-full border-2 border-current border-t-transparent animate-spin [animation-duration:700ms] motion-reduce:animate-none" /></span>}{c ? "Streaming" : "Paused"}</span></div><p className={L(B, "mt-0.5 flex flex-wrap gap-x-3")}><span>api-gateway</span><span>eu-west-1</span><span>1s resolution</span></p></div><div className="flex min-w-0 flex-wrap items-center gap-2"><div role="radiogroup" aria-label="Metric" onKeyDown={U} className={L("inline-flex w-fit max-w-full items-stretch gap-1 rounded-[calc(var(--rb-r-full,999px)_+_min(4px,var(--rb-r-full,999px)))] bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] p-1", "h-10")}>{H.map(e => <button type="button" role="radio" aria-checked={e.id === a} tabIndex={e.id === a ? 0 : -1} onClick={() => r(e.id)} className="relative inline-flex min-w-0 cursor-pointer items-center justify-center gap-1.5 whitespace-nowrap [&_svg]:shrink-0 rounded-[calc(var(--rb-r-full,999px))] px-4 text-[14px]/[18px] font-bold text-neutral-900/78 dark:text-neutral-100/78 select-none transition-[background-color,color,box-shadow,outline-color,scale] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:scale-[0.96] motion-reduce:active:scale-100 hover:not-aria-checked:text-neutral-900 aria-checked:bg-white aria-checked:text-neutral-900 aria-checked:shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_2px_rgb(84_62_32/0.10),0_3px_8px_-2px_rgb(84_62_32/0.20)] disabled:cursor-not-allowed disabled:text-neutral-900/40 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:hover:not-aria-checked:text-neutral-100 dark:aria-checked:bg-[color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800))] dark:aria-checked:text-neutral-100 dark:aria-checked:shadow-[inset_0_1px_0_rgb(255_255_255/0.1),0_0_0_1px_rgb(0_0_0/0.6),0_2px_5px_-1px_rgb(0_0_0/0.6)] dark:disabled:text-neutral-100/40">{e.label}</button>)}</div><button type="button" onClick={() => d(e => !e)} className={L("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] text-neutral-900 dark:text-neutral-100 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] active:not-disabled:translate-y-px active:not-disabled:shadow-[inset_0_1px_3px_rgb(84_62_32/0.16),0_0_0_1px_rgb(84_62_32/0.10)] dark:active:not-disabled:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14),0_0_0_1px_rgb(84_62_32/0.10)] dark:aria-expanded:bg-neutral-800 dark:aria-expanded:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] disabled:bg-none disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] disabled:text-neutral-900/40 disabled:shadow-none dark:disabled:bg-neutral-800/60 dark:disabled:text-neutral-100/40", "h-10 gap-2 rounded-[calc(var(--rb-r-full,999px))] px-5 text-[15px]/[20px] font-bold")}><__mod_22728.n icon={c ? __mod_81520.A : __mod_48318.A} size={18} strokeWidth={2} aria-hidden="true" />{c ? "Pause" : "Resume"}</button></div></div><div className={L(T, "flex shrink-0 grow flex-col p-4")}><div className="flex flex-wrap items-baseline justify-between gap-3"><div className="flex items-baseline gap-1"><p className="text-[44px]/[48px] font-extrabold tracking-[-0.025em] tabular-nums">{V(u, h)}</p><span className={I}>{u.unit}</span></div><p className={L($, f ? "text-[oklch(51%_0.18_26)] dark:text-[oklch(76%_0.14_26)]" : O, "inline-flex items-center gap-1.5")}>{f ? <><__mod_22728.n icon={__mod_27476.A} size={18} strokeWidth={2} aria-hidden="true" className="shrink-0" /><span className="sr-only">Over threshold.</span></> : <svg aria-hidden="true" width={16} height={2} className="shrink-0 overflow-visible"><line x1={0} x2={16} y1={1} y2={1} strokeWidth={1} strokeDasharray="6 4" className={F} /></svg>}{u.thresholdLabel}</p></div><div ref={g} role="img" aria-label={`${u.label} over the last 60 seconds, currently ${V(u, h)}${u.unit}`} className="relative mt-4 min-h-[120px] flex-1 sm:min-h-[220px]">{v.width > 0 && v.height > 0 && <svg width={v.width} height={w} className="absolute inset-0 overflow-visible">{[.25, .5, .75].map(e => <line x1={0} x2={v.width} y1={w * e} y2={w * e} className="stroke-neutral-900/6 dark:stroke-neutral-100/8" strokeWidth={1} shapeRendering="crispEdges" />)}<line x1={0} x2={v.width} y1={z(u.threshold)} y2={z(u.threshold)} className={F} strokeWidth={1} strokeDasharray="6 4" shapeRendering="crispEdges" /><path d={A} className="fill-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] dark:fill-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_16%,transparent)]" /><path d={S} fill="none" className="stroke-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_82%,black)] dark:stroke-[var(--rb-accent,oklch(81%_0.16_163))]" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /><rect x={N(59) - 4} y={z(h) - 4} width={8} height={8} className="fill-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_82%,black)] stroke-white stroke-[2.5] dark:fill-[var(--rb-accent,oklch(81%_0.16_163))] dark:stroke-neutral-900" /></svg>}</div><div className={L(q, "mt-2 flex justify-between")}><span>−60s</span><span>−45s</span><span>−30s</span><span>−15s</span><span>now</span></div></div><div className={L(T, "@container p-0.75")}><div className="grid grid-cols-2 gap-1 [&>:last-child:nth-child(odd)]:col-span-full @3xl:grid-flow-col @3xl:grid-cols-none @3xl:auto-cols-fr @3xl:[&>:last-child:nth-child(odd)]:col-auto">{R.map(e => <div className={L("flex min-w-0 flex-col gap-2 rounded-[calc(var(--rb-r-5xl,22px))] bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] px-3 py-3.5 dark:bg-neutral-100/4", "ps-3 pe-3")}><p className="text-[14px]/[20px] font-bold text-neutral-900/78 dark:text-neutral-100/78">{e.label}</p><p className="flex min-w-0 flex-wrap items-baseline gap-x-1 text-[22px]/[28px] font-extrabold tracking-[-0.01em] tabular-nums text-neutral-900 dark:text-neutral-100">{e.value}<span className={I}>{u.unit}</span></p></div>)}</div></div></div></div>;
    },
    "monitoring-3": function () {
      let [e, a] = (0, React.useState)("Monitoring"),
        [r, l] = (0, React.useState)(""),
        [i, s] = (0, React.useState)(ef),
        {
          ref: c,
          edges: d,
          onScroll: _
        } = ey(),
        {
          ref: x,
          edges: u,
          onScroll: b
        } = ey();
      return (0, React.useEffect)(() => _(), [i, _]), <div className={ea("bg-white dark:bg-neutral-950", "text-neutral-900 dark:text-neutral-100", "flex h-full min-h-[680px] w-full flex-col overflow-hidden p-4 sm:p-6")}><div className={ea("relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 shadow-[inset_0_0_0_1px_rgb(84_62_32/0.05)] dark:shadow-[inset_0_0_0_1px_rgb(255_255_255/0.05)]", "mx-auto flex min-h-0 w-full max-w-[1000px] flex-1 flex-col gap-1")}><div className="px-4 py-3.5"><div className="flex flex-wrap items-start justify-between gap-3"><div className="min-w-0"><div className="flex items-center gap-2"><__mod_22728.n icon={__mod_36474.A} size={18} strokeWidth={2} aria-hidden="true" className={ea("text-[oklch(49%_0.1_68)] dark:text-[oklch(80%_0.13_68)]", "shrink-0")} /><h2 className={ea("text-[17px]/[22px] font-extrabold", "truncate")}>Elevated checkout latency</h2></div><p className={ea(ep, "mt-1 flex flex-wrap gap-x-3")}><span>INC-2841</span><span>opened 09:04</span><span>payments team</span></p></div><div className="flex shrink-0 items-center gap-2"><label htmlFor="monitoring-3-status" className="sr-only">Incident status</label><eN id="monitoring-3-status" value={e} onChange={e => a(e)} options={ek} /><button type="button" className={ea("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] text-neutral-900 dark:text-neutral-100 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] active:not-disabled:translate-y-px active:not-disabled:shadow-[inset_0_1px_3px_rgb(84_62_32/0.16),0_0_0_1px_rgb(84_62_32/0.10)] dark:active:not-disabled:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14),0_0_0_1px_rgb(84_62_32/0.10)] dark:aria-expanded:bg-neutral-800 dark:aria-expanded:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] disabled:bg-none disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] disabled:text-neutral-900/40 disabled:shadow-none dark:disabled:bg-neutral-800/60 dark:disabled:text-neutral-100/40", "h-10 gap-2 rounded-[calc(var(--rb-r-full,999px))] px-5 text-[15px]/[20px] font-bold")}>Resolve</button></div></div><dl className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">{eg.map(({
                label: e,
                value: a,
                icon: r
              }) => <div><dt className={ea(em, "flex items-center gap-1.5")}><__mod_22728.n icon={r} size={14} strokeWidth={2} aria-hidden="true" className="shrink-0" />{e}</dt><dd className={ea(el, "mt-1")}>{a}</dd></div>)}</dl></div><div className={ea("mx-1 mb-1 flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-5xl,22px))] border border-transparent bg-white dark:bg-neutral-950 shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] [&:has(+*)]:mb-0", "min-h-0 flex-1")}><div className={ea("bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-100/8", "grid min-h-0 flex-1 gap-px lg:grid-cols-[1fr_280px]")}><div className="flex min-h-[280px] min-w-0 flex-col gap-px lg:min-h-0"><div className={ea(er, "relative min-h-0 flex-1")}><div ref={c} onScroll={_} className="h-full overflow-y-auto p-4 pb-6"><h3 className={el}>Updates</h3><ol className="mt-3 space-y-4">{i.map((e, a) => <li className="relative flex gap-3">{a < i.length - 1 && <span aria-hidden={!0} className={ea("border-r border-transparent", "absolute top-3.5 -bottom-[30px] left-[13px] w-0")} />}<span aria-hidden={!0} className={ea(ex, "z-10 size-[28px]")}><span className={eu}>{e.initials}</span></span><div className="min-w-0 flex-1 py-1"><p className="flex flex-wrap items-center gap-x-2 gap-y-0.5"><span className={el}>{e.who}</span><span className={ea(eo, ej[e.status])}>{e.status}</span><span className={ea(es, en)}>{e.at}</span></p><p className={ea(ei, et, "mt-1")}>{e.body}</p></div></li>)}</ol></div><div aria-hidden="true" className={ea(eb, "pointer-events-none absolute inset-x-0 top-0 h-8", d.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={ea(eh, "pointer-events-none absolute inset-x-0 bottom-0 h-8", d.end ? "opacity-100" : "opacity-0")} /></div><div className={ea(er, "p-2")}><label htmlFor="monitoring-3-update" className="sr-only">Post an update</label><div className={ea("relative flex w-full min-w-0 flex-col rounded-[calc(min(var(--rb-r-6xl,26px),min(var(--rb-r-full,999px),16px)_+_8px))] border border-transparent bg-white text-neutral-900 dark:text-neutral-100 shadow-[0_0_0_1px_rgb(84_62_32/0.07),0_1px_2px_rgb(84_62_32/0.06),0_8px_22px_-10px_rgb(84_62_32/0.20)] transition-[box-shadow] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] focus-within:shadow-[0_0_0_1.5px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black),0_0_0_5px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent),0_8px_22px_-10px_rgb(84_62_32/0.2)] dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_0_0_1px_rgb(0_0_0/0.6),0_10px_24px_-12px_rgb(0_0_0/0.8)] dark:focus-within:shadow-[0_0_0_1.5px_var(--rb-accent,oklch(81%_0.16_163)),0_0_0_5px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)]", "gap-1 p-1")}><textarea id="monitoring-3-update" value={r} onChange={e => l(e.target.value)} rows={2} placeholder="Post an update for subscribers…" className={ea("max-h-40 min-h-6 min-w-0 flex-auto resize-none bg-transparent px-1.5 py-1.5 field-sizing-content text-[15px]/[22px] font-medium text-neutral-900 dark:text-neutral-100 outline-none placeholder:text-neutral-900/55 dark:placeholder:text-neutral-100/55", "min-h-12")} /><div className="flex items-center justify-between gap-2 ps-1.5"><p className={ea(ep, "truncate")}>Sends to 1,204 status page subscribers</p><button type="button" onClick={() => {
                        let a = r.trim();
                        a && (s(r => [{
                          id: `n${r.length + 1}`,
                          status: e,
                          who: "You",
                          initials: "YO",
                          at: "Just now",
                          body: a
                        }, ...r]), l(""));
                      }} disabled={!r.trim()} className={ea("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_68%,white),var(--rb-accent,oklch(84%_0.15_165)))] text-[var(--rb-accent-fg,oklch(26%_0.06_168))] shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_4px_10px_-4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_80%,transparent)] hover:not-disabled:-translate-y-px hover:not-disabled:brightness-[1.04] hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_7px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_85%,transparent)] active:not-disabled:translate-y-px active:not-disabled:brightness-[0.98] active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_55%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] motion-reduce:hover:translate-y-0 disabled:opacity-45 disabled:shadow-none dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_78%,white),var(--rb-accent,oklch(81%_0.16_163)))] dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_6px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,transparent)] dark:hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_9px_22px_-8px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_60%,transparent)] dark:active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_45%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black)] dark:disabled:shadow-none", "h-8 gap-1.5 rounded-[calc(var(--rb-r-full,999px))] px-3.5 text-[14px]/[18px] font-bold")}><__mod_22728.n icon={__mod_55410.A} size={18} strokeWidth={2} aria-hidden="true" />Post</button></div></div></div></div><aside className={ea(er, "relative min-h-0")}><div ref={x} onScroll={b} className="h-full overflow-y-auto p-4 pb-6"><h3 className={el}>Affected components</h3><ul className="mt-3 space-y-2">{ev.map(e => <li className="flex items-center justify-between gap-3"><span className={ea(ei, et, "min-w-0 truncate")}>{e.name}</span><span className={ea(eo, ew[e.tone], "shrink-0")}>{e.state}</span></li>)}</ul><h3 className={ea(el, "mt-5")}>Responders</h3><ul className="mt-3 space-y-2">{[{
                      name: "Priya Patel",
                      initials: "PP",
                      role: "Incident lead"
                    }, {
                      name: "Theo Park",
                      initials: "TP",
                      role: "Payments"
                    }, {
                      name: "Nora Vale",
                      initials: "NV",
                      role: "Comms"
                    }].map(e => <li className="flex items-center gap-2.5"><span aria-hidden={!0} className={ea(ex, "size-[28px]")}><span className={eu}>{e.initials}</span></span><span className="min-w-0 flex-1"><span className={ea(ei, "block truncate")}>{e.name}</span><span className={ea(es, en, "block truncate")}>{e.role}</span></span></li>)}</ul><div className="mt-5"><h3 className={el}>Error budget</h3><div role="progressbar" aria-valuenow={38} aria-valuemin={0} aria-valuemax={100} aria-label="Error budget consumed" className={ea("relative block h-2.5 w-full overflow-hidden rounded-[calc(var(--rb-r-full,999px))] bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] shadow-[inset_0_1px_2px_rgb(84_62_32/0.12)] dark:bg-neutral-100/12 dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.5)]", "mt-3")}><div style={{
                        width: "38%"
                      }} className={ea("bg-[oklch(80%_0.152_68)] dark:bg-[oklch(80%_0.152_68)]", "h-full rounded-[inherit]")} /></div><p className={ea(ei, et, "mt-2")}>38% of the monthly budget spent by this incident.</p></div></div><div aria-hidden="true" className={ea(eb, "pointer-events-none absolute inset-x-0 top-0 h-8", u.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={ea(eh, "pointer-events-none absolute inset-x-0 bottom-0 h-8", u.end ? "opacity-100" : "opacity-0")} /></aside></div></div></div></div>;
    },
    "monitoring-4": function () {
      let [e, a] = (0, React.useState)("firing"),
        [r, l] = (0, React.useState)(""),
        [i, s] = (0, React.useState)("a1"),
        [c, d] = (0, React.useState)(Object.fromEntries(eO.map(e => [e.id, e.state]))),
        {
          ref: _,
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
        }(),
        b = (0, React.useMemo)(() => {
          let a = r.trim().toLowerCase();
          return eO.filter(r => {
            let t = c[r.id];
            return ("all" === e || t === e) && (!a || r.rule.toLowerCase().includes(a) || r.service.toLowerCase().includes(a));
          });
        }, [e, r, c]);
      (0, React.useEffect)(() => u(), [b, i, u]);
      let h = e => "all" === e ? eO.length : eO.filter(a => c[a.id] === e).length;
      return <div className={eR("bg-white dark:bg-neutral-950", eC, "flex h-full min-h-[720px] w-full flex-col overflow-hidden p-4 sm:p-6")}><div className={eR("relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 shadow-[inset_0_0_0_1px_rgb(84_62_32/0.05)] dark:shadow-[inset_0_0_0_1px_rgb(255_255_255/0.05)]", "mx-auto flex min-h-0 w-full max-w-[1000px] flex-1 flex-col gap-1")}><div className="px-4 py-3.5"><div className="flex flex-wrap items-start justify-between gap-3"><div className="min-w-0"><h2 className={eR("text-[17px]/[22px] font-extrabold", "truncate")}>Alerts</h2><p className={eR(eP, "mt-0.5 flex flex-wrap gap-x-3")}><span>{h("firing")} firing</span><span>{h("pending")} pending</span><span>evaluated every 30s</span></p></div><button type="button" onClick={() => d(e => {
                let a = {
                  ...e
                };
                return eO.forEach(e => {
                  "firing" === a[e.id] && (a[e.id] = "silenced");
                }), a;
              })} className={eR(eD, "h-10 gap-2 rounded-[calc(var(--rb-r-full,999px))] px-5 text-[15px]/[20px] font-bold")}><__mod_22728.n icon={__mod_33212.A} size={18} strokeWidth={2} aria-hidden="true" />Silence firing</button></div><div className="mt-3 flex flex-wrap items-center gap-2"><div role="radiogroup" aria-label="Alert state" className={eR("inline-flex w-fit max-w-full items-stretch gap-1 rounded-[calc(var(--rb-r-full,999px)_+_min(4px,var(--rb-r-full,999px)))] bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] p-1", "h-10")}>{e$.map(r => <button type="button" role="radio" aria-checked={r.id === e} onClick={() => a(r.id)} className="relative inline-flex min-w-0 cursor-pointer items-center justify-center gap-1.5 whitespace-nowrap [&_svg]:shrink-0 rounded-[calc(var(--rb-r-full,999px))] px-4 text-[14px]/[18px] font-bold text-neutral-900/78 dark:text-neutral-100/78 select-none transition-[background-color,color,box-shadow,outline-color,scale] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:scale-[0.96] motion-reduce:active:scale-100 hover:not-aria-checked:text-neutral-900 aria-checked:bg-white aria-checked:text-neutral-900 aria-checked:shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_2px_rgb(84_62_32/0.10),0_3px_8px_-2px_rgb(84_62_32/0.20)] disabled:cursor-not-allowed disabled:text-neutral-900/40 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:hover:not-aria-checked:text-neutral-100 dark:aria-checked:bg-[color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800))] dark:aria-checked:text-neutral-100 dark:aria-checked:shadow-[inset_0_1px_0_rgb(255_255_255/0.1),0_0_0_1px_rgb(0_0_0/0.6),0_2px_5px_-1px_rgb(0_0_0/0.6)] dark:disabled:text-neutral-100/40">{r.label}<span className={eL}>{h(r.id)}</span></button>)}</div><div className="relative min-w-0 flex-1 sm:max-w-[260px]"><label htmlFor="monitoring-4-search" className="sr-only">Search alerts</label><div className={eR("relative flex w-full min-w-0 cursor-text items-center rounded-[calc(var(--rb-r-xl,12px))] data-concentric:rounded-[var(--rb-r-5xl,22px)] border border-transparent bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] text-[15px]/[20px] font-medium text-neutral-900 transition-[border-color,box-shadow,background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:not-focus-within:not-has-[[aria-invalid=true]]:not-has-[input:disabled]:not-has-[input[readonly]]:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] focus-within:border-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] focus-within:bg-white focus-within:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] has-[[aria-invalid=true]]:border-[oklch(60%_0.236_26)] has-[[aria-invalid=true]]:bg-[oklch(97.5%_0.016_26)] has-[input:disabled]:cursor-not-allowed has-[input:disabled]:text-neutral-900/40 has-[input:disabled]:shadow-none has-[input[readonly]]:cursor-default has-[input[readonly]]:shadow-none dark:text-neutral-100 dark:hover:not-focus-within:not-has-[[aria-invalid=true]]:not-has-[input:disabled]:not-has-[input[readonly]]:bg-neutral-900 dark:focus-within:border-[var(--rb-accent,oklch(81%_0.16_163))] dark:focus-within:bg-neutral-900 dark:focus-within:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:has-[[aria-invalid=true]]:border-[oklch(65.2%_0.219_26)] dark:has-[[aria-invalid=true]]:bg-[oklch(26%_0.04_26)] dark:has-[input:disabled]:text-neutral-100/40", "h-10")}><span data-affix={!0} className="flex shrink-0 items-center gap-2 text-[15px]/[20px] font-semibold text-neutral-900/62 dark:text-neutral-100/62 select-none first:ps-3.5 last:pe-3.5 has-[button]:first:ps-1 has-[button]:last:pe-1"><__mod_22728.n icon={__mod_66575.A} size={18} strokeWidth={2} aria-hidden="true" /></span><input id="monitoring-4-search" value={r} onChange={e => l(e.target.value)} placeholder="Search rule or service" className="h-full w-full min-w-0 flex-1 bg-transparent px-3.5 outline-none [[data-affix]+&]:ps-2 [&:has(+[data-affix])]:pe-2 placeholder:font-medium placeholder:text-neutral-900/55 disabled:cursor-not-allowed disabled:placeholder:text-neutral-900/30 dark:placeholder:text-neutral-100/55 dark:disabled:placeholder:text-neutral-100/30 dark:[color-scheme:dark]" /></div></div></div></div><div className={eR("mx-1 mb-1 flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-5xl,22px))] border border-transparent bg-white dark:bg-neutral-950 shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] [&:has(+*)]:mb-0", "relative min-h-0 flex-1")}><div ref={_} onScroll={u} className="h-full overflow-y-auto">{0 === b.length ? <div className="flex h-full flex-col items-center justify-center px-6 py-12 text-center"><__mod_22728.n icon={__mod_90987.A} size={24} strokeWidth={2} aria-hidden="true" className={eE} /><p className={eR("text-[19px]/[24px] font-extrabold tracking-[-0.01em] text-neutral-900 dark:text-neutral-100", "mt-3")}>Nothing to look at</p><p className={eR("max-w-[48ch] text-[15px]/[22px] font-medium text-neutral-900/78 dark:text-neutral-100/78", "mt-1")}>No alerts match this view. Quiet is the expected state.</p></div> : <ul className={eR("divide-y divide-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:divide-neutral-100/7", "p-1")}>{b.map(e => {
                  let a = c[e.id],
                    r = i === e.id,
                    n = "firing" === a;
                  return <li><button type="button" aria-expanded={r} onClick={() => s(r ? null : e.id)} className={eR("relative flex min-h-12 w-full min-w-0 flex-wrap items-center gap-x-3 gap-y-1 py-2.5 text-left text-neutral-900 dark:text-neutral-100 transition-[background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] has-[[data-description]]:min-h-16", "cursor-pointer hover:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] dark:hover:bg-neutral-100/6 active:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] dark:active:bg-neutral-100/10", "focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))]", "rounded-[var(--rb-r-4xl,18px)]", "group px-2")}><span className="flex size-4 shrink-0 items-center justify-center"><__mod_22728.n icon={__mod_5042.A} size={14} strokeWidth={2} aria-hidden="true" className="shrink-0 text-neutral-900/62 dark:text-neutral-100/62 transition-transform duration-[280ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] motion-reduce:transition-none group-aria-expanded:rotate-90" /></span><span className="flex min-w-0 flex-1 flex-col gap-0.5"><span className={eR("flex max-w-full min-w-0 items-baseline gap-2 text-[15px]/[20px] font-bold text-neutral-900 dark:text-neutral-100", "flex-wrap")}><span className="min-w-0 truncate">{e.rule}</span><span className={eR("inline-flex items-start gap-1 text-[14px]/[20px] font-bold tabular-nums", eT[e.severity])}>{e.severity}</span></span><span className={eR(eP, "flex flex-wrap gap-x-3")}><span>{e.service}</span><span>{e.condition}</span></span></span><span className="hidden shrink-0 sm:block"><eI seed={e.seed} alarming={n} /></span><span className={eR("text-right tabular-nums", "w-[96px] shrink-0")}><span className={eR("text-[15px]/[20px] font-bold", n ? "text-[oklch(51%_0.18_26)] dark:text-[oklch(76%_0.14_26)]" : eC, "block")}>{e.observed}</span><span className={eR("text-[13px]/[16px] font-semibold tabular-nums", eE, "mt-0.5 block truncate")}>{"silenced" === a ? "silenced" : e.duration}</span></span></button>{r && <div className="px-2 pb-3 pl-9"><p className={eR(eM, "text-neutral-900/78 dark:text-neutral-100/78")}>{e.runbook}</p><div className="mt-3 flex flex-wrap items-center gap-2"><button type="button" onClick={() => d(a => ({
                          ...a,
                          [e.id]: "resolved"
                        }))} className={eR(eD, eW)}><__mod_22728.n icon={__mod_90987.A} size={18} strokeWidth={2} aria-hidden="true" />Mark resolved</button><button type="button" onClick={() => d(a => ({
                          ...a,
                          [e.id]: "silenced" === a[e.id] ? e.state : "silenced"
                        }))} className={eR(eD, eW)}><__mod_22728.n icon={__mod_33212.A} size={18} strokeWidth={2} aria-hidden="true" />{"silenced" === a ? "Unsilence" : "Silence 2h"}</button></div></div>}</li>;
                })}</ul>}</div><div aria-hidden="true" className={eR("bg-linear-to-b from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 top-0 h-8", x.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={eR("bg-linear-to-t from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 bottom-0 h-8", x.end ? "opacity-100" : "opacity-0")} /></div><div className={eR("flex min-h-12 min-w-0 items-center gap-2 px-4 py-2 text-[14px]/[20px] font-semibold text-neutral-900/62 dark:text-neutral-100/62 has-[button]:justify-end has-[button]:pe-2.5", "flex-wrap")}><p className={eR("text-[14px]/[20px] font-semibold tabular-nums text-neutral-900/62 dark:text-neutral-100/62", "me-auto")}>Showing {b.length} of {eO.length} rules</p><button type="button" onClick={() => d(Object.fromEntries(eO.map(e => [e.id, e.state])))} className={eR(eD, eW)}>Reset states</button></div></div></div>;
    },
    "monitoring-5": function () {
      let e = (0, React.useRef)(null),
        [a, r] = (0, React.useState)(eY),
        [l, i] = (0, React.useState)(!0),
        [s, c] = (0, React.useState)(!0),
        [d, _] = (0, React.useState)("all"),
        [x, u] = (0, React.useState)(""),
        [b, h] = (0, React.useState)(null),
        p = (0, React.useRef)(eY.length),
        {
          ref: m,
          edges: k,
          onScroll: f
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
      (0, React.useEffect)(() => {
        if (!l) return;
        let a = e.current?.ownerDocument.defaultView ?? window,
          t = a.setInterval(() => {
            r(e => {
              let a = eJ(p.current);
              return p.current += 1, [...e.slice(-140), a];
            });
          }, 1200);
        return () => a.clearInterval(t);
      }, [l]);
      let g = (0, React.useMemo)(() => {
        let e = x.trim().toLowerCase();
        return a.filter(a => ("all" === d || a.level === d) && (!e || a.message.toLowerCase().includes(e) || a.service.toLowerCase().includes(e)));
      }, [a, d, x]);
      (0, React.useEffect)(() => {
        let e = m.current;
        e && s && (e.scrollTop = e.scrollHeight);
      }, [g, s, m]), (0, React.useEffect)(() => f(), [g, b, f]);
      let v = a.filter(e => "error" === e.level).length;
      return <div ref={e} className={eq("bg-white dark:bg-neutral-950", "text-neutral-900 dark:text-neutral-100", "flex h-full min-h-[700px] w-full flex-col overflow-hidden p-4 sm:p-6")}><div className={eq("relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 shadow-[inset_0_0_0_1px_rgb(84_62_32/0.05)] dark:shadow-[inset_0_0_0_1px_rgb(255_255_255/0.05)]", "mx-auto flex min-h-0 w-full max-w-[1100px] flex-1 flex-col gap-1")}><div className="px-4 py-3"><div className="flex flex-wrap items-center justify-between gap-3"><div className="min-w-0"><div className="flex items-center gap-2"><h2 className={eq("text-[17px]/[22px] font-extrabold", "truncate")}>Live tail</h2><span className={eq("inline-flex items-start gap-1.5 text-[15px]/[20px] font-bold tabular-nums", l ? "text-neutral-900 dark:text-neutral-100" : "text-neutral-900/62 dark:text-neutral-100/62")}>{l && <span className="flex h-lh shrink-0 items-center"><span aria-hidden="true" className="inline-block size-3 shrink-0 rounded-full border-2 border-current border-t-transparent animate-spin [animation-duration:700ms] motion-reduce:animate-none" /></span>}{l ? "Streaming" : "Paused"}</span></div><p className={eq(eU, "mt-0.5 flex flex-wrap gap-x-3")}><span>production</span><span>all services</span><span>{v} errors in view</span></p></div><div className="flex shrink-0 items-center gap-2"><button type="button" onClick={() => c(e => !e)} aria-pressed={s} className="relative inline-flex h-8 max-w-full min-w-0 shrink-0 cursor-pointer items-center gap-1.5 whitespace-nowrap rounded-[calc(var(--rb-r-full,999px))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] px-3.5 text-[14px]/[18px] font-bold text-neutral-900 dark:text-neutral-100 select-none transition-[background-color,border-color,box-shadow,color,scale,translate,outline-color] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:translate-y-px active:duration-[90ms] motion-reduce:active:translate-y-0 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] aria-pressed:bg-none aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-pressed:shadow-[inset_0_0_0_1.5px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14)] disabled:cursor-not-allowed disabled:text-neutral-900/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-pressed:shadow-[inset_0_0_0_1.5px_var(--rb-accent,oklch(81%_0.16_163))] dark:aria-expanded:bg-neutral-800 dark:disabled:text-neutral-100/40"><__mod_22728.n icon={__mod_69844.A} size={18} strokeWidth={2} aria-hidden="true" />Follow</button><button type="button" onClick={() => i(e => !e)} className={eq("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] text-neutral-900 dark:text-neutral-100 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] active:not-disabled:translate-y-px active:not-disabled:shadow-[inset_0_1px_3px_rgb(84_62_32/0.16),0_0_0_1px_rgb(84_62_32/0.10)] dark:active:not-disabled:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14),0_0_0_1px_rgb(84_62_32/0.10)] dark:aria-expanded:bg-neutral-800 dark:aria-expanded:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] disabled:bg-none disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] disabled:text-neutral-900/40 disabled:shadow-none dark:disabled:bg-neutral-800/60 dark:disabled:text-neutral-100/40", "h-8 gap-1.5 rounded-[calc(var(--rb-r-full,999px))] px-3.5 text-[14px]/[18px] font-bold")}><__mod_22728.n icon={l ? __mod_81520.A : __mod_48318.A} size={18} strokeWidth={2} aria-hidden="true" />{l ? "Pause" : "Resume"}</button><button type="button" aria-label="Clear the buffer" onClick={() => {
                  r([]), h(null);
                }} className={eq("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-transparent text-neutral-900 hover:not-disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] active:not-disabled:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] disabled:text-neutral-900/40 dark:text-neutral-100 dark:hover:not-disabled:bg-neutral-100/8 dark:active:not-disabled:bg-neutral-100/12 dark:aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:disabled:text-neutral-100/40", "size-8 rounded-[calc(var(--rb-r-full,999px))]")}><__mod_22728.n icon={__mod_41772.A} size={18} strokeWidth={2} aria-hidden="true" /></button></div></div><div className="mt-3 flex flex-wrap items-center gap-2"><div role="radiogroup" aria-label="Log level" onKeyDown={eX} className={eq("inline-flex w-fit max-w-full items-stretch gap-1 rounded-[calc(var(--rb-r-full,999px)_+_min(4px,var(--rb-r-full,999px)))] bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] p-1", "h-10")}>{eG.map(e => <button type="button" role="radio" aria-checked={e.id === d} tabIndex={e.id === d ? 0 : -1} onClick={() => _(e.id)} className="relative inline-flex min-w-0 cursor-pointer items-center justify-center gap-1.5 whitespace-nowrap [&_svg]:shrink-0 rounded-[calc(var(--rb-r-full,999px))] px-4 text-[14px]/[18px] font-bold text-neutral-900/78 dark:text-neutral-100/78 select-none transition-[background-color,color,box-shadow,outline-color,scale] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:scale-[0.96] motion-reduce:active:scale-100 hover:not-aria-checked:text-neutral-900 aria-checked:bg-white aria-checked:text-neutral-900 aria-checked:shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_2px_rgb(84_62_32/0.10),0_3px_8px_-2px_rgb(84_62_32/0.20)] disabled:cursor-not-allowed disabled:text-neutral-900/40 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:hover:not-aria-checked:text-neutral-100 dark:aria-checked:bg-[color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800))] dark:aria-checked:text-neutral-100 dark:aria-checked:shadow-[inset_0_1px_0_rgb(255_255_255/0.1),0_0_0_1px_rgb(0_0_0/0.6),0_2px_5px_-1px_rgb(0_0_0/0.6)] dark:disabled:text-neutral-100/40">{e.label}</button>)}</div><div className="relative min-w-0 flex-1 max-sm:basis-full sm:max-w-[280px]"><label htmlFor="monitoring-5-search" className="sr-only">Filter log lines</label><div className={eq("relative flex w-full min-w-0 cursor-text items-center rounded-[calc(var(--rb-r-xl,12px))] data-concentric:rounded-[var(--rb-r-5xl,22px)] border border-transparent bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] text-[15px]/[20px] font-medium text-neutral-900 transition-[border-color,box-shadow,background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:not-focus-within:not-has-[[aria-invalid=true]]:not-has-[input:disabled]:not-has-[input[readonly]]:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] focus-within:border-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] focus-within:bg-white focus-within:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] has-[[aria-invalid=true]]:border-[oklch(60%_0.236_26)] has-[[aria-invalid=true]]:bg-[oklch(97.5%_0.016_26)] has-[input:disabled]:cursor-not-allowed has-[input:disabled]:text-neutral-900/40 has-[input:disabled]:shadow-none has-[input[readonly]]:cursor-default has-[input[readonly]]:shadow-none dark:text-neutral-100 dark:hover:not-focus-within:not-has-[[aria-invalid=true]]:not-has-[input:disabled]:not-has-[input[readonly]]:bg-neutral-900 dark:focus-within:border-[var(--rb-accent,oklch(81%_0.16_163))] dark:focus-within:bg-neutral-900 dark:focus-within:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:has-[[aria-invalid=true]]:border-[oklch(65.2%_0.219_26)] dark:has-[[aria-invalid=true]]:bg-[oklch(26%_0.04_26)] dark:has-[input:disabled]:text-neutral-100/40", "h-10")}><span data-affix={!0} className="flex shrink-0 items-center gap-2 text-[15px]/[20px] font-semibold text-neutral-900/62 dark:text-neutral-100/62 select-none first:ps-3.5 last:pe-3.5 has-[button]:first:ps-1 has-[button]:last:pe-1"><__mod_22728.n icon={__mod_66575.A} size={18} strokeWidth={2} aria-hidden="true" /></span><input id="monitoring-5-search" value={x} onChange={e => u(e.target.value)} placeholder="Filter by message or service" className="h-full w-full min-w-0 flex-1 bg-transparent px-3.5 outline-none [[data-affix]+&]:ps-2 [&:has(+[data-affix])]:pe-2 placeholder:font-medium placeholder:text-neutral-900/55 disabled:cursor-not-allowed disabled:placeholder:text-neutral-900/30 dark:placeholder:text-neutral-100/55 dark:disabled:placeholder:text-neutral-100/30 dark:[color-scheme:dark]" /></div></div></div></div><div className={eq("mx-1 mb-1 flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-5xl,22px))] border border-transparent bg-white dark:bg-neutral-950 shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] [&:has(+*)]:mb-0", "relative min-h-0 flex-1")}><div ref={m} onScroll={f} className="h-full overflow-y-auto py-1.5">{0 === g.length ? <div className="flex h-full flex-col items-center justify-center px-6 py-12 text-center"><p className="text-[19px]/[24px] font-extrabold tracking-[-0.01em] text-neutral-900 dark:text-neutral-100">No lines in view</p><p className={eq("max-w-[48ch] text-[15px]/[22px] font-medium text-neutral-900/78 dark:text-neutral-100/78", "mt-1")}>{0 === a.length ? "The buffer is empty. Resume the stream to start collecting again." : "Nothing matches the current level and filter."}</p></div> : <ul>{g.map(e => <li><button type="button" aria-expanded={b === e.id} onClick={() => h(b === e.id ? null : e.id)} className={eq("font-mono text-[13px]/[20px] tabular-nums", "error" === e.level ? "bg-[oklch(95.5%_0.03_26/0.55)] hover:bg-[oklch(95.5%_0.03_26/0.8)] dark:bg-[oklch(30%_0.065_26/0.4)] dark:hover:bg-[oklch(30%_0.065_26/0.6)]" : "hover:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] dark:hover:bg-neutral-100/6", "transition-[color,background-color,border-color,box-shadow,outline-color,opacity,scale,translate] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms]", "focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))]", "flex w-full min-w-full cursor-pointer items-start gap-3 px-3 py-[5px] text-left")}><span className={eq(eH, "shrink-0")}>{e.at}</span><span className={eq("inline-flex w-[5ch] shrink-0 font-bold", eK[e.level])}>{e.level}</span><span className={eq(eH, "hidden w-[120px] shrink-0 truncate sm:block")}>{e.service}</span><span className={eq("text-neutral-900/78 dark:text-neutral-100/78", "min-w-0 flex-1 truncate")}>{e.message}</span></button>{b === e.id && <pre className={eq("flex min-w-0 flex-col gap-3 rounded-[calc(var(--rb-r-xl,12px))] bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] px-3.5 py-2.5", "min-w-0 overflow-x-auto font-mono text-[12px]/[18px] whitespace-pre-wrap text-neutral-900/78 dark:text-neutral-100/78 [overflow-wrap:anywhere]", "mx-3 mb-1")}>{e.context}</pre>}</li>)}</ul>}</div><div aria-hidden="true" className={eq("bg-linear-to-b from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 top-0 h-8", k.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={eq("bg-linear-to-t from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 bottom-0 h-8", k.end ? "opacity-100" : "opacity-0")} /></div><div className={eq("flex min-h-12 min-w-0 items-center gap-2 px-4 py-2 text-[14px]/[20px] font-semibold text-neutral-900/62 dark:text-neutral-100/62 has-[button]:justify-end has-[button]:pe-2.5", "flex-wrap justify-between")}><p className={eq(eV, "flex flex-wrap gap-x-3")}><span>{g.length} of {a.length} lines</span><span>buffer capped at 140</span></p><p className={eV}>~50 lines/min</p></div></div></div>;
    },
    "monitoring-6": function () {
      let [e, a] = (0, React.useState)(90),
        [r, l] = (0, React.useState)(null),
        [i, s] = (0, React.useState)(null),
        {
          ref: c,
          edges: d,
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
        }(),
        x = (0, React.useMemo)(() => e9.map(a => {
          var r;
          let t = (r = a.seed, Array.from({
              length: e
            }, (e, a) => {
              let t = (37 * a + 53 * r) % 101;
              return 0 === t || 13 === t ? "down" : t < 6 ? "partial" : "up";
            })),
            n = 100 - t.filter(e => "up" !== e).length / e * .9;
          return {
            ...a,
            list: t,
            uptime: n,
            incidents: aa[a.id] ?? []
          };
        }), [e]);
      (0, React.useEffect)(() => _(), [x, r, _]);
      let u = x.filter(e => e.list.slice(-1).some(e => "up" !== e)).length,
        b = x.reduce((e, a) => e + a.uptime, 0) / x.length;
      return <div className={eZ("bg-white dark:bg-neutral-950", e0, "flex h-full min-h-[640px] w-full flex-col overflow-hidden p-4 sm:p-6")}><div className={eZ("relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 shadow-[inset_0_0_0_1px_rgb(84_62_32/0.05)] dark:shadow-[inset_0_0_0_1px_rgb(255_255_255/0.05)]", "mx-auto flex min-h-0 w-full max-w-[1000px] flex-1 flex-col gap-1")}><div className="flex flex-wrap items-center justify-between gap-3 px-4 py-3.5"><div className="min-w-0"><div className="flex items-center gap-2">{u > 0 && <__mod_22728.n icon={__mod_36474.A} size={18} strokeWidth={2} aria-hidden="true" className={eZ(e5, "shrink-0")} />}<h2 className={eZ("text-[17px]/[22px] font-extrabold", "truncate")}>{u > 0 ? `${u} service${u > 1 ? "s" : ""} degraded` : "All systems operational"}</h2></div><p className={eZ(e8, "mt-0.5 truncate")}>{b.toFixed(3)}% average uptime over {e} days</p></div><div role="radiogroup" aria-label="History window" className={eZ("inline-flex w-fit max-w-full items-stretch gap-1 rounded-[calc(var(--rb-r-full,999px)_+_min(4px,var(--rb-r-full,999px)))] bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] p-1", "h-10", "shrink-0")}>{e4.map(r => <button type="button" role="radio" aria-checked={r === e} onClick={() => {
                a(r), s(null);
              }} className="relative inline-flex min-w-0 cursor-pointer items-center justify-center gap-1.5 whitespace-nowrap [&_svg]:shrink-0 rounded-[calc(var(--rb-r-full,999px))] px-4 text-[14px]/[18px] font-bold text-neutral-900/78 dark:text-neutral-100/78 select-none transition-[background-color,color,box-shadow,outline-color,scale] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:scale-[0.96] motion-reduce:active:scale-100 hover:not-aria-checked:text-neutral-900 aria-checked:bg-white aria-checked:text-neutral-900 aria-checked:shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_2px_rgb(84_62_32/0.10),0_3px_8px_-2px_rgb(84_62_32/0.20)] disabled:cursor-not-allowed disabled:text-neutral-900/40 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:hover:not-aria-checked:text-neutral-100 dark:aria-checked:bg-[color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800))] dark:aria-checked:text-neutral-100 dark:aria-checked:shadow-[inset_0_1px_0_rgb(255_255_255/0.1),0_0_0_1px_rgb(0_0_0/0.6),0_2px_5px_-1px_rgb(0_0_0/0.6)] dark:disabled:text-neutral-100/40">{r}d</button>)}</div></div><div className={eZ("mx-1 mb-1 flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-5xl,22px))] border border-transparent bg-white dark:bg-neutral-950 shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] [&:has(+*)]:mb-0", "relative min-h-0 flex-1")}><div ref={c} onScroll={_} className="h-full overflow-y-auto"><ul className="divide-y divide-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:divide-neutral-100/7">{x.map(a => {
                  let n = r === a.id,
                    c = i?.id === a.id ? i.i : null,
                    d = null === c ? "up" : a.list[c];
                  return <li className="px-3 pt-1 pb-3"><div className="flex items-center justify-between gap-3"><button type="button" aria-expanded={n} onClick={() => l(n ? null : a.id)} className="group -mx-2 flex min-h-9 max-w-[calc(100%+16px)] min-w-0 cursor-pointer items-center gap-2 self-start rounded-[calc(var(--rb-r-lg,10px))] px-2 text-left text-[14px]/[20px] font-semibold text-neutral-900/78 dark:text-neutral-100/78 transition-[background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] active:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] dark:hover:bg-neutral-100/6 dark:active:bg-neutral-100/10 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))]"><span className="flex size-4 shrink-0 items-center justify-center"><__mod_22728.n icon={__mod_5042.A} size={14} strokeWidth={2} aria-hidden="true" className="shrink-0 text-neutral-900/62 dark:text-neutral-100/62 transition-transform duration-[280ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] motion-reduce:transition-none group-aria-expanded:rotate-90" /></span><span className={eZ("text-[15px]/[20px] font-bold", e0, "truncate")}>{a.name}</span></button><p className={eZ("text-[13px]/[16px] font-semibold tabular-nums", "grid shrink-0 justify-items-end text-right whitespace-nowrap")}><span aria-hidden={null !== c} className={eZ(e2, "col-start-1 row-start-1 justify-self-end", null !== c && "invisible")}>{a.uptime.toFixed(2)}% uptime</span><span aria-hidden={null === c} className={eZ("col-start-1 row-start-1 inline-flex items-center justify-end gap-1.5 justify-self-end", null === c && "invisible")}><span className={e7[d]}>{ae[d]}</span><span className={e2}>{null === c ? e : e - c}d ago</span></span></p></div><div role="img" aria-label={`${a.name} daily status for the last ${e} days, ${a.uptime.toFixed(2)}% uptime`} onPointerLeave={() => s(null)} className="mt-1 flex h-7 items-stretch gap-px sm:gap-[2px]">{a.list.map((e, r) => <span onPointerEnter={() => s({
                        id: a.id,
                        i: r
                      })} className={eZ("min-w-0 flex-1 rounded-[2px]", e3[e], c === r && "border-2 border-neutral-900/30 dark:border-neutral-100/34")} />)}</div>{n && <div className="mt-3">{0 === a.incidents.length ? <p className={eZ(e6, e1)}>No incidents recorded in this window.</p> : <ul className="space-y-2">{a.incidents.map(e => <li className={eZ(e6, "flex gap-3")}><span className={eZ(e2, "w-[52px] shrink-0")}>{e.at}</span><span className={eZ(e1, "min-w-0 flex-1")}>{e.text}</span></li>)}</ul>}</div>}</li>;
                })}</ul></div><div aria-hidden="true" className={eZ("bg-linear-to-b from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 top-0 h-8", d.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={eZ("bg-linear-to-t from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 bottom-0 h-8", d.end ? "opacity-100" : "opacity-0")} /></div><div className={eZ("flex min-h-12 min-w-0 items-center gap-2 px-4 py-2 text-[14px]/[20px] font-semibold text-neutral-900/62 dark:text-neutral-100/62 has-[button]:justify-end has-[button]:pe-2.5", "flex-wrap justify-between")}><p>{e} days ago</p><ul className="flex flex-wrap items-center gap-3 max-sm:order-last max-sm:basis-full">{["up", "partial", "down"].map(e => <li className="inline-flex items-center gap-1.5"><span aria-hidden={!0} className={eZ("inline-block size-2.5 shrink-0 rounded-full", e3[e], "size-[6px]")} />{ae[e]}</li>)}</ul><p>Today</p></div></div></div>;
    },
    "monitoring-7": function () {
      let [e, a] = (0, React.useState)(""),
        [r, l] = (0, React.useState)(ab[0]),
        [i, s] = (0, React.useState)({
          key: "cpu",
          asc: !1
        }),
        [c, d] = (0, React.useState)("h2"),
        {
          ref: _,
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
        }(),
        b = (0, React.useMemo)(() => {
          let a = e.trim().toLowerCase(),
            t = au.filter(e => (r === ab[0] || e.region === r) && (!a || e.name.toLowerCase().includes(a) || e.role.toLowerCase().includes(a))),
            n = i.asc ? 1 : -1;
          return [...t].sort((e, a) => "name" === i.key ? e.name.localeCompare(a.name) * n : (e[i.key] - a[i.key]) * n);
        }, [e, r, i]);
      (0, React.useEffect)(() => u(), [b, c, u]);
      let h = au.filter(e => "healthy" !== e.state).length,
        p = e => s(a => a.key === e ? {
          key: e,
          asc: !a.asc
        } : {
          key: e,
          asc: !1
        }),
        m = e => i.key === e ? i.asc ? __mod_40972.A : __mod_54345.A : __mod_31517.A;
      return <div className={al("bg-white dark:bg-neutral-950", "text-neutral-900 dark:text-neutral-100", "flex h-full min-h-[760px] w-full flex-col overflow-hidden p-4 sm:p-6")}><div className={al("relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 shadow-[inset_0_0_0_1px_rgb(84_62_32/0.05)] dark:shadow-[inset_0_0_0_1px_rgb(255_255_255/0.05)]", "mx-auto flex min-h-0 w-full max-w-[1100px] flex-1 flex-col gap-1")}><div className="px-4 py-3.5"><div className="flex flex-wrap items-start justify-between gap-3"><div className="min-w-0"><h2 className={al("text-[17px]/[22px] font-extrabold", "truncate")}>Fleet</h2><p className={al(ax, "mt-0.5 flex flex-wrap gap-x-3")}><span>{au.length} nodes</span><span>{h} need attention</span><span>sampled 30s ago</span></p></div><div className="flex min-w-0 flex-wrap items-center gap-2"><label htmlFor="monitoring-7-region" className="sr-only">Region</label><am id="monitoring-7-region" value={r} onChange={l} options={ab} /><div className="relative w-full sm:w-[200px]"><label htmlFor="monitoring-7-search" className="sr-only">Search hosts</label><div className={al("relative flex w-full min-w-0 cursor-text items-center rounded-[calc(var(--rb-r-xl,12px))] data-concentric:rounded-[var(--rb-r-5xl,22px)] border border-transparent bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] text-[15px]/[20px] font-medium text-neutral-900 transition-[border-color,box-shadow,background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:not-focus-within:not-has-[[aria-invalid=true]]:not-has-[input:disabled]:not-has-[input[readonly]]:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] focus-within:border-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] focus-within:bg-white focus-within:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] has-[[aria-invalid=true]]:border-[oklch(60%_0.236_26)] has-[[aria-invalid=true]]:bg-[oklch(97.5%_0.016_26)] has-[input:disabled]:cursor-not-allowed has-[input:disabled]:text-neutral-900/40 has-[input:disabled]:shadow-none has-[input[readonly]]:cursor-default has-[input[readonly]]:shadow-none dark:text-neutral-100 dark:hover:not-focus-within:not-has-[[aria-invalid=true]]:not-has-[input:disabled]:not-has-[input[readonly]]:bg-neutral-900 dark:focus-within:border-[var(--rb-accent,oklch(81%_0.16_163))] dark:focus-within:bg-neutral-900 dark:focus-within:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:has-[[aria-invalid=true]]:border-[oklch(65.2%_0.219_26)] dark:has-[[aria-invalid=true]]:bg-[oklch(26%_0.04_26)] dark:has-[input:disabled]:text-neutral-100/40", "h-10")}><span data-affix={!0} className="flex shrink-0 items-center gap-2 text-[15px]/[20px] font-semibold text-neutral-900/62 dark:text-neutral-100/62 select-none first:ps-3.5 last:pe-3.5 has-[button]:first:ps-1 has-[button]:last:pe-1"><__mod_22728.n icon={__mod_66575.A} size={18} strokeWidth={2} aria-hidden="true" /></span><input id="monitoring-7-search" value={e} onChange={e => a(e.target.value)} placeholder="Search host or role" className="h-full w-full min-w-0 flex-1 bg-transparent px-3.5 outline-none [[data-affix]+&]:ps-2 [&:has(+[data-affix])]:pe-2 placeholder:font-medium placeholder:text-neutral-900/55 disabled:cursor-not-allowed disabled:placeholder:text-neutral-900/30 dark:placeholder:text-neutral-100/55 dark:disabled:placeholder:text-neutral-100/30 dark:[color-scheme:dark]" /></div></div></div></div></div><div className={al("mx-1 mb-1 flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-5xl,22px))] border border-transparent bg-white dark:bg-neutral-950 shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] [&:has(+*)]:mb-0", "relative min-h-0 flex-1")}><div ref={_} onScroll={u} className="h-full overflow-y-auto">{0 === b.length ? <div className="flex h-full flex-col items-center justify-center px-6 py-12 text-center"><__mod_22728.n icon={__mod_36048.A} size={24} strokeWidth={2} aria-hidden="true" className={as} /><p className={al("text-[19px]/[24px] font-extrabold tracking-[-0.01em] text-neutral-900 dark:text-neutral-100", "mt-3")}>No matching nodes</p><p className={al("max-w-[48ch] text-[15px]/[22px] font-medium text-neutral-900/78 dark:text-neutral-100/78", "mt-1")}>Adjust the region filter or clear the search.</p></div> : <table className="w-full border-separate border-spacing-0 text-left text-[15px]/[22px] font-medium"><thead><tr><th scope="col" aria-sort={"name" === i.key ? i.asc ? "ascending" : "descending" : "none"} className={ad}><button type="button" onClick={() => p("name")} data-sorted={"name" === i.key ? "" : void 0} className={a_}>Node<__mod_22728.n icon={m("name")} size={14} strokeWidth={2} aria-hidden="true" /></button></th><th scope="col" className={al(ad, "hidden w-[120px] sm:table-cell md:w-[104px]")}>Status</th>{[{
                      key: "cpu",
                      label: "CPU",
                      cls: "hidden w-[132px] md:table-cell"
                    }, {
                      key: "mem",
                      label: "Memory",
                      cls: "hidden w-[148px] md:table-cell lg:w-[132px]"
                    }, {
                      key: "disk",
                      label: "Disk",
                      cls: "hidden w-[148px] lg:table-cell xl:w-[132px]"
                    }].map(e => <th scope="col" aria-sort={i.key === e.key ? i.asc ? "ascending" : "descending" : "none"} className={al(ad, e.cls)}><button type="button" onClick={() => p(e.key)} data-sorted={i.key === e.key ? "" : void 0} className={a_}>{e.label}<__mod_22728.n icon={m(e.key)} size={14} strokeWidth={2} aria-hidden="true" /></button></th>)}<th scope="col" className={al(ad, "hidden w-[100px] xl:table-cell")}><span className="block text-right">Uptime</span></th></tr></thead><tbody>{b.map(e => <tr aria-selected={c === e.id} className="group transition-[background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:not-aria-selected:bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] dark:hover:not-aria-selected:bg-neutral-100/4 dark:aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)]"><td colSpan={6} className="h-12 border-b border-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] px-3 align-middle whitespace-nowrap text-neutral-900 dark:text-neutral-100 group-last:border-b-0 first:ps-4 last:pe-4 dark:border-neutral-100/6"><button type="button" aria-expanded={c === e.id} onClick={() => d(c === e.id ? null : e.id)} className={al("focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))]", "block w-full cursor-pointer text-left")}><span className="flex items-center gap-3 py-2.5"><span className="min-w-0 flex-1"><span className={al("text-[15px]/[20px] font-bold", "block truncate")}>{e.name}</span><span className={al(ax, "mt-0.5 flex min-w-0 gap-x-3")}><span className="truncate">{e.role}</span><span className="truncate">{e.region}</span></span></span><span className={al("inline-flex items-start gap-1.5 text-[15px]/[20px] font-bold tabular-nums", ah[e.state], "w-[92px] shrink-0 max-sm:hidden")}>{ap[e.state]}</span><span className="hidden w-[120px] shrink-0 md:block"><ak label="CPU" value={e.cpu} /></span><span className="hidden w-[120px] shrink-0 md:block"><ak label="Memory" value={e.mem} /></span><span className="hidden w-[120px] shrink-0 lg:block"><ak label="Disk" value={e.disk} /></span><span className={al(ac, as, "hidden w-[72px] shrink-0 text-right xl:block")}>{e.uptime}</span></span></button>{c === e.id && <p className={al(ao, ai, "pb-3 whitespace-normal")}>{e.note}</p>}</td></tr>)}</tbody></table>}</div><div aria-hidden="true" className={al("bg-linear-to-b from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 top-0 h-8", x.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={al("bg-linear-to-t from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 bottom-0 h-8", x.end ? "opacity-100" : "opacity-0")} /></div><div className={al("flex min-h-12 min-w-0 items-center gap-2 px-4 py-2 text-[14px]/[20px] font-semibold text-neutral-900/62 dark:text-neutral-100/62 has-[button]:justify-end has-[button]:pe-2.5", "flex-wrap justify-between")}><p className="text-[14px]/[20px] font-semibold tabular-nums text-neutral-900/62 dark:text-neutral-100/62">Showing {b.length} of {au.length} nodes</p><p>Metrics refresh every 30 seconds</p></div></div></div>;
    },
    "monitoring-8": function () {
      let [e, a] = (0, React.useState)("e1"),
        [r, l] = (0, React.useState)(null),
        [i, s] = (0, React.useState)({
          key: "p99",
          asc: !1
        }),
        {
          ref: c,
          edges: d,
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
        }(),
        b = aE.find(a => a.id === e) ?? aE[0],
        h = Math.max(...b.shape),
        p = b.shape.reduce((e, a) => e + a, 0),
        m = (0, React.useMemo)(() => {
          let e = i.asc ? 1 : -1;
          return [...aE].sort((a, r) => (a[i.key] - r[i.key]) * e);
        }, [i]),
        k = [{
          label: "p50",
          value: b.p50,
          delta: -3.1
        }, {
          label: "p90",
          value: b.p90,
          delta: 6.4
        }, {
          label: "p99",
          value: b.p99,
          delta: 21.8
        }],
        f = b.p99 > b.budget;
      return <div className={af("bg-white dark:bg-neutral-950", ag, "flex h-full min-h-[720px] w-full flex-col overflow-hidden p-4 sm:p-6")}><div className={af("relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 shadow-[inset_0_0_0_1px_rgb(84_62_32/0.05)] dark:shadow-[inset_0_0_0_1px_rgb(255_255_255/0.05)]", "mx-auto flex min-h-0 w-full max-w-[1100px] flex-1 flex-col gap-1")}><div className="flex flex-wrap items-start justify-between gap-3 px-4 py-3.5"><div className="min-w-0"><h2 className={af("text-[17px]/[22px] font-extrabold", "truncate")}>Response times</h2><p className={af(aR, "mt-0.5 flex flex-wrap gap-x-3")}><span>Last 24 hours</span><span>2.06M requests</span><span>{aE.length} routes</span></p></div><p className={af(aj, f ? aw : av, "inline-flex shrink-0 items-center gap-1.5")}>{f && <__mod_22728.n icon={__mod_27476.A} size={18} strokeWidth={2} aria-hidden="true" className="shrink-0" />}{f ? `p99 over the ${aD(b.budget)} budget` : `Within the ${aD(b.budget)} budget`}</p></div><div className={af(aN, "@container p-0.75")}><div className="grid grid-cols-2 gap-1 [&>:last-child:nth-child(odd)]:col-span-full @3xl:grid-flow-col @3xl:grid-cols-none @3xl:auto-cols-fr @3xl:[&>:last-child:nth-child(odd)]:col-auto">{k.map(e => <div className={af("flex min-w-0 flex-col gap-2 rounded-[calc(var(--rb-r-5xl,22px))] bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] px-3 py-3.5 dark:bg-neutral-100/4", "ps-3 pe-3")}><p className={af("text-[14px]/[20px] font-bold text-neutral-900/78 dark:text-neutral-100/78", "flex flex-wrap gap-x-2")}><span>{e.label}</span><span>{b.route}</span></p><div className="flex min-w-0 flex-wrap items-baseline gap-x-1 text-[22px]/[28px] font-extrabold tracking-[-0.01em] tabular-nums text-neutral-900 dark:text-neutral-100"><p>{aD(e.value)}</p><span className="inline-flex min-w-0 flex-wrap items-baseline gap-x-1 text-[13px]/[18px] font-bold tabular-nums [&>svg]:self-center text-neutral-900/78 dark:text-neutral-100/78"><__mod_22728.n icon={e.delta <= 0 ? __mod_37502.A : __mod_1497.A} size={14} strokeWidth={2} aria-hidden="true" /><span className="sr-only">{e.delta <= 0 ? "Down" : "Up"}</span>{Math.abs(e.delta).toFixed(1)}%</span></div></div>)}</div></div><div className={af(aN, "p-4")}><div className="flex flex-wrap items-baseline justify-between gap-2"><h3 className="text-[15px]/[20px] font-bold">Latency distribution</h3><p className={af(aR, "flex flex-wrap gap-x-3")}>{null === r ? `${p}% of requests plotted` : <><span>{aW(r)}</span><span>{b.shape[r]}% of requests</span></>}</p></div><div role="img" aria-label={`Latency histogram for ${b.route}`} onPointerLeave={() => l(null)} className="mt-3 flex h-[120px] items-end gap-1.5">{b.shape.map((e, a) => <button type="button" aria-label={`${aW(a)}, ${e}% of requests`} onPointerEnter={() => l(a)} onFocus={() => l(a)} onBlur={() => l(null)} className={af(ay, "flex h-full min-w-0 flex-1 cursor-pointer items-end")}><span style={{
                  height: `${Math.max(3, e / h * 100)}%`
                }} className={af("w-full rounded-[2px]", a >= 7 ? "bg-[oklch(65.2%_0.219_26)] dark:bg-[oklch(65.2%_0.219_26)]" : r === a ? "bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900" : "bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-100/8")} /></button>)}</div><div className="mt-2 flex gap-1.5">{aC.map((e, a) => <span className={af("text-[13px]/[16px] font-semibold tabular-nums", r === a ? ag : av, "min-w-0 flex-1 truncate text-center")}>{e}</span>)}</div></div><div className={af(aN, "relative min-h-0 flex-1")}><div ref={c} onScroll={u} className="h-full overflow-y-auto"><table className="w-full border-separate border-spacing-0 text-left text-[15px]/[22px] font-medium"><thead><tr><th scope="col" className={az}>Route</th>{aM.map(e => <th scope="col" aria-sort={i.key === e.key ? i.asc ? "ascending" : "descending" : "none"} className={af(az, "w-[88px]", e.cls)}><span className="flex justify-end"><button type="button" onClick={() => {
                          let a;
                          return a = e.key, s(e => e.key === a ? {
                            key: a,
                            asc: !e.asc
                          } : {
                            key: a,
                            asc: !1
                          });
                        }} data-sorted={i.key === e.key ? "" : void 0} className="-mx-1.5 inline-flex h-8 min-w-0 cursor-pointer items-center gap-1 rounded-[calc(var(--rb-r-full,999px))] px-1.5 transition-[background-color,color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-neutral-900/5 hover:text-neutral-900 data-sorted:text-neutral-900 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:hover:bg-neutral-100/6 dark:hover:text-neutral-100 dark:data-sorted:text-neutral-100">{e.label}<__mod_22728.n icon={i.key === e.key ? i.asc ? __mod_40972.A : __mod_54345.A : __mod_31517.A} size={14} strokeWidth={2} aria-hidden="true" /></button></span></th>)}</tr></thead><tbody>{m.map(r => {
                    let n = r.id === e;
                    return <tr aria-selected={n} onClick={() => {
                      a(r.id), l(null);
                    }} className={af("group transition-[background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:not-aria-selected:bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] dark:hover:not-aria-selected:bg-neutral-100/4 dark:aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)]", "cursor-pointer")}><td className={aS}><button type="button" aria-pressed={n} onClick={e => {
                          e.stopPropagation(), a(r.id), l(null);
                        }} className={af(ay, "flex min-w-0 cursor-pointer items-center gap-2 text-left")}><span className={af("inline-flex h-5.5 min-w-5.5 shrink-0 items-center justify-center whitespace-nowrap rounded-[calc(var(--rb-r-md,8px))] px-2 font-mono text-[12px]/[16px] font-medium tabular-nums text-neutral-900 dark:text-neutral-100", "bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] dark:bg-neutral-100/10", "w-[38px]")}>{r.method}</span><span className={af("font-mono text-[12px]/[16px] tabular-nums", "truncate")}>{r.route}</span></button></td><td className={af(aS, aA, "hidden sm:table-cell")}>{r.rps}</td><td className={af(aS, aA)}>{aD(r.p50)}</td><td className={af(aS, aA, "hidden md:table-cell")}>{aD(r.p90)}</td><td className={af(aS, aA)}><span className={af(r.p99 > r.budget && aw)}>{aD(r.p99)}</span></td><td className={af(aS, aA, "hidden lg:table-cell")}>{r.errorRate.toFixed(1)}%</td></tr>;
                  })}</tbody></table></div><div aria-hidden="true" className={af("bg-linear-to-b from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 top-0 h-8", d.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={af("bg-linear-to-t from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 bottom-0 h-8", d.end ? "opacity-100" : "opacity-0")} /></div></div></div>;
    },
    "monitoring-9": function () {
      let e = (0, React.useRef)(null),
        [a, r] = (0, React.useState)(""),
        [l, i] = (0, React.useState)(!1),
        [s, c] = (0, React.useState)([]),
        [_, x] = (0, React.useState)(() => Object.fromEntries(a5.filter(e => null !== e.progress).map(e => [e.id, e.progress]))),
        {
          ref: u,
          edges: b,
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
      (0, React.useEffect)(() => {
        let a = e.current?.ownerDocument.defaultView ?? window,
          r = a.setInterval(() => {
            x(e => {
              let a = {
                ...e
              };
              return a5.filter(e => "running" === e.group && null !== e.progress).forEach(e => {
                a[e.id] = a[e.id] >= 97 ? e.progress : a[e.id] + 1;
              }), a;
            });
          }, 1400);
        return () => a.clearInterval(r);
      }, []);
      let p = (0, React.useMemo)(() => {
        let e = a.trim().toLowerCase();
        return a5.filter(a => (!l || "escalated" === a.flag || "needs-approval" === a.flag) && (!e || a.title.toLowerCase().includes(e) || a.step.toLowerCase().includes(e) || a.detail.toLowerCase().includes(e)));
      }, [a, l]);
      (0, React.useEffect)(() => h(), [p, s, h]);
      let m = [{
          label: "Runs",
          value: p.length,
          tone: "neutral"
        }, {
          label: "Escalated",
          value: p.filter(e => "escalated" === e.flag).length,
          tone: "danger"
        }, {
          label: "Needs approval",
          value: p.filter(e => "needs-approval" === e.flag).length,
          tone: "warning"
        }, {
          label: "Retrying",
          value: p.filter(e => "retrying" === e.flag).length,
          tone: "neutral"
        }],
        k = s.length === a6.length;
      return <div ref={e} className={aF("bg-white dark:bg-neutral-950", aq, "flex h-full min-h-[800px] w-full flex-col overflow-hidden p-4 sm:p-6")}><div className={aF("relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 shadow-[inset_0_0_0_1px_rgb(84_62_32/0.05)] dark:shadow-[inset_0_0_0_1px_rgb(255_255_255/0.05)]", "flex min-h-0 flex-1 flex-col gap-1")}><div className="px-4 py-3.5"><div className="flex flex-wrap items-start justify-between gap-3"><div className="min-w-0"><div className="flex items-center gap-2"><h2 className={aF("text-[17px]/[22px] font-extrabold", "truncate")}>Run queue</h2><span className={aF(aQ, aJ)}><span className={a0}><span aria-hidden="true" className={a1} /></span>Live</span></div><p className={aF(a2, "mt-0.5 truncate")}>Triage the live agent run backlog.</p></div><ul className="flex flex-wrap items-center gap-x-4 gap-y-1">{m.map(e => <li className="flex items-baseline gap-1.5"><span className={aF(aG, aH)}>{e.label}</span><span className={aF(aU, 0 === e.value ? aH : a3[e.tone])}>{e.value}</span></li>)}</ul></div><div className="mt-3 flex flex-wrap items-center gap-2"><div className="relative min-w-0 flex-1 max-sm:basis-full sm:max-w-[300px]"><label htmlFor="monitoring-9-search" className="sr-only">Search runs</label><div className={aF("relative flex w-full min-w-0 cursor-text items-center rounded-[calc(var(--rb-r-xl,12px))] data-concentric:rounded-[var(--rb-r-5xl,22px)] border border-transparent bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] text-[15px]/[20px] font-medium text-neutral-900 transition-[border-color,box-shadow,background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:not-focus-within:not-has-[[aria-invalid=true]]:not-has-[input:disabled]:not-has-[input[readonly]]:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] focus-within:border-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] focus-within:bg-white focus-within:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] has-[[aria-invalid=true]]:border-[oklch(60%_0.236_26)] has-[[aria-invalid=true]]:bg-[oklch(97.5%_0.016_26)] has-[input:disabled]:cursor-not-allowed has-[input:disabled]:text-neutral-900/40 has-[input:disabled]:shadow-none has-[input[readonly]]:cursor-default has-[input[readonly]]:shadow-none dark:text-neutral-100 dark:hover:not-focus-within:not-has-[[aria-invalid=true]]:not-has-[input:disabled]:not-has-[input[readonly]]:bg-neutral-900 dark:focus-within:border-[var(--rb-accent,oklch(81%_0.16_163))] dark:focus-within:bg-neutral-900 dark:focus-within:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:has-[[aria-invalid=true]]:border-[oklch(65.2%_0.219_26)] dark:has-[[aria-invalid=true]]:bg-[oklch(26%_0.04_26)] dark:has-[input:disabled]:text-neutral-100/40", "h-8")}><span data-affix={!0} className="flex shrink-0 items-center gap-2 text-[15px]/[20px] font-semibold text-neutral-900/62 dark:text-neutral-100/62 select-none first:ps-3.5 last:pe-3.5 has-[button]:first:ps-1 has-[button]:last:pe-1"><__mod_22728.n icon={__mod_66575.A} size={18} strokeWidth={2} aria-hidden="true" /></span><input id="monitoring-9-search" value={a} onChange={e => r(e.target.value)} placeholder="Search runs…" className="h-full w-full min-w-0 flex-1 bg-transparent px-3 outline-none [[data-affix]+&]:ps-2 [&:has(+[data-affix])]:pe-2 placeholder:font-medium placeholder:text-neutral-900/55 disabled:cursor-not-allowed disabled:placeholder:text-neutral-900/30 dark:placeholder:text-neutral-100/55 dark:disabled:placeholder:text-neutral-100/30 dark:[color-scheme:dark]" /></div></div><div className="flex flex-1 flex-wrap items-center justify-end gap-2"><button type="button" aria-pressed={l} onClick={() => i(e => !e)} className="relative inline-flex h-8 max-w-full min-w-0 shrink-0 cursor-pointer items-center gap-1.5 whitespace-nowrap rounded-[calc(var(--rb-r-full,999px))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] px-3.5 text-[14px]/[18px] font-bold text-neutral-900 dark:text-neutral-100 select-none transition-[background-color,border-color,box-shadow,color,scale,translate,outline-color] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:translate-y-px active:duration-[90ms] motion-reduce:active:translate-y-0 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] aria-pressed:bg-none aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-pressed:shadow-[inset_0_0_0_1.5px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14)] disabled:cursor-not-allowed disabled:text-neutral-900/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-pressed:shadow-[inset_0_0_0_1.5px_var(--rb-accent,oklch(81%_0.16_163))] dark:aria-expanded:bg-neutral-800 dark:disabled:text-neutral-100/40"><__mod_22728.n icon={__mod_58770.A} size={18} strokeWidth={2} aria-hidden="true" />Attention</button><button type="button" onClick={() => c(k ? [] : a6.map(e => e.id))} className={aF("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] text-neutral-900 dark:text-neutral-100 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] active:not-disabled:translate-y-px active:not-disabled:shadow-[inset_0_1px_3px_rgb(84_62_32/0.16),0_0_0_1px_rgb(84_62_32/0.10)] dark:active:not-disabled:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14),0_0_0_1px_rgb(84_62_32/0.10)] dark:aria-expanded:bg-neutral-800 dark:aria-expanded:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] disabled:bg-none disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] disabled:text-neutral-900/40 disabled:shadow-none dark:disabled:bg-neutral-800/60 dark:disabled:text-neutral-100/40", aK)}>{k ? "Expand groups" : "Collapse groups"}</button><button type="button" className={aF("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_68%,white),var(--rb-accent,oklch(84%_0.15_165)))] text-[var(--rb-accent-fg,oklch(26%_0.06_168))] shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_4px_10px_-4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_80%,transparent)] hover:not-disabled:-translate-y-px hover:not-disabled:brightness-[1.04] hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_7px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_85%,transparent)] active:not-disabled:translate-y-px active:not-disabled:brightness-[0.98] active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_55%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] motion-reduce:hover:translate-y-0 disabled:opacity-45 disabled:shadow-none dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_78%,white),var(--rb-accent,oklch(81%_0.16_163)))] dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_6px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,transparent)] dark:hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_9px_22px_-8px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_60%,transparent)] dark:active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_45%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black)] dark:disabled:shadow-none", aK)}><__mod_22728.n icon={__mod_89886.A} size={18} strokeWidth={2} aria-hidden="true" />New run</button></div></div></div><div className={aF("mx-1 mb-1 flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-5xl,22px))] border border-transparent bg-white dark:bg-neutral-950 shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] [&:has(+*)]:mb-0", "relative min-h-0 flex-1")}><div ref={u} onScroll={h} className="h-full overflow-y-auto">{0 === p.length ? <div className="flex h-full flex-col items-center justify-center px-6 py-12 text-center"><p className="text-[19px]/[24px] font-extrabold tracking-[-0.01em] text-neutral-900 dark:text-neutral-100">Queue is clear</p><p className={aF("max-w-[48ch] text-[15px]/[22px] font-medium text-neutral-900/78 dark:text-neutral-100/78", "mt-1")}>No runs match this view. Everything else is progressing on its own.</p></div> : <div className={aF(aV, "p-1")}>{a6.map(e => {
                  let a = p.filter(a => a.group === e.id);
                  if (0 === a.length) return null;
                  let r = !s.includes(e.id);
                  return <section className={aV}><button type="button" aria-expanded={r} onClick={() => c(a => a.includes(e.id) ? a.filter(a => a !== e.id) : [...a, e.id])} className={aF("relative flex min-h-10 w-full min-w-0 flex-wrap items-center gap-x-3 gap-y-1 py-2 text-left text-neutral-900 dark:text-neutral-100 transition-[background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)]", "cursor-pointer hover:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] dark:hover:bg-neutral-100/6 active:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] dark:active:bg-neutral-100/10", "focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))]", aB, "group px-2")}><span className="flex size-4 shrink-0 items-center justify-center"><__mod_22728.n icon={__mod_5042.A} size={14} strokeWidth={2} aria-hidden="true" className="shrink-0 text-neutral-900/62 dark:text-neutral-100/62 transition-transform duration-[280ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] motion-reduce:transition-none group-aria-expanded:rotate-90" /></span><span className={aF(aQ, a8[e.id])}>{"running" === e.id && <span className={a0}><span aria-hidden="true" className={a1} /></span>}{e.label}</span><span className={aF(aU, aH)}>{a.length}</span><span className={aF(a2, "ml-auto hidden truncate md:block")}>{e.hint}</span></button>{r && <ul className={aV}>{a.map(e => {
                        let a = _[e.id];
                        return <li><div className={aF("relative flex min-h-12 w-full min-w-0 flex-wrap items-center gap-x-3 gap-y-1 py-2.5 text-left text-neutral-900 dark:text-neutral-100 transition-[background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] has-[[data-description]]:min-h-16", "hover:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] dark:hover:bg-neutral-100/6", aB, "px-2")}><__mod_22728.n icon={e.icon} size={18} strokeWidth={2} aria-hidden="true" className={aF(aH, "shrink-0")} /><div className="flex min-w-0 flex-1 flex-col gap-0.5"><p className="flex max-w-full min-w-0 items-baseline gap-2 text-[15px]/[20px] font-bold text-neutral-900 dark:text-neutral-100"><span className="min-w-0 truncate">{e.title}</span></p><p className={aF(a2, "flex min-w-0 gap-x-3")}><span className="shrink-0">{e.step}</span><span className="min-w-0 truncate">{e.detail}</span></p></div><span aria-hidden={!0} className={aF("relative inline-flex size-8 shrink-0 overflow-hidden rounded-full select-none", "size-[24px] max-sm:hidden")}><span className="flex size-full items-center justify-center rounded-[inherit] bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_24%,white)] text-[12px]/[16px] font-extrabold tabular-nums text-neutral-900 dark:text-neutral-100 dark:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_22%,var(--color-neutral-900))]">{e.initials.charAt(0)}</span></span><span className={aF(aG, aH, "hidden w-[104px] shrink-0 items-center lg:inline-flex")}>{e.env}</span><span className={aF(aG, aH, "hidden w-[64px] shrink-0 xl:block")}>{e.at}</span><span className="flex w-[62px] shrink-0 items-center justify-end gap-1.5">{void 0 !== a && <><a7 value={a} /><span className={aF(aG, "text-neutral-900/78 dark:text-neutral-100/78")}>{Math.round(a)}%</span></>}</span><span className={aF("inline-flex items-start gap-1 text-[14px]/[20px] font-bold tabular-nums", a9[e.flag], "w-[104px] shrink-0 justify-end text-right max-sm:hidden")}>{a4[e.flag]}</span><button type="button" aria-label={`Actions for ${e.title}`} className={aF("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-transparent text-neutral-900 hover:not-disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] active:not-disabled:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] disabled:text-neutral-900/40 dark:text-neutral-100 dark:hover:not-disabled:bg-neutral-100/8 dark:active:not-disabled:bg-neutral-100/12 dark:aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:disabled:text-neutral-100/40", "size-8 rounded-[calc(var(--rb-r-full,999px))]")}><__mod_22728.n icon={__mod_59649.A} size={18} strokeWidth={2} aria-hidden="true" /></button></div></li>;
                      })}</ul>}</section>;
                })}</div>}</div><div aria-hidden="true" className={aF("bg-linear-to-b from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 top-0 h-8", b.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={aF("bg-linear-to-t from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 bottom-0 h-8", b.end ? "opacity-100" : "opacity-0")} /></div></div></div>;
    },
    "monitoring-10": function () {
      let [e, a] = (0, React.useState)("30d"),
        [r, o] = (0, React.useState)("s1"),
        {
          ref: c,
          edges: d,
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
        }(),
        x = rx.find(e => e.id === r) ?? rx[0],
        u = (0, React.useMemo)(() => {
          let a;
          return Array.from({
            length: a = r_[e]
          }, (e, r) => {
            let t = r / (a - 1);
            return Math.max(0, Math.min(100, 100 - (100 - x.remaining) * t + (2.2 * Math.sin(.8 * r + x.seed) + 1.4 * Math.sin(.27 * r + 2 * x.seed)) * (1 - .4 * t)));
          });
        }, [x, e]),
        b = ru(x.remaining),
        [h, p] = function () {
          let e = (0, React.useRef)(null),
            [a, r] = (0, React.useState)({
              width: 0,
              height: 0
            });
          return (0, React.useEffect)(() => {
            let a = e.current,
              t = a?.ownerDocument.defaultView;
            if (!a || !t?.ResizeObserver) return;
            let n = new t.ResizeObserver(([e]) => {
              let a = e.contentRect;
              r({
                width: a.width,
                height: a.height
              });
            });
            return n.observe(a), () => n.disconnect();
          }, []), [e, a];
        }(),
        m = (0, React.useCallback)(e => e / (u.length - 1) * Math.max(p.width - 2, 1) + 1, [u.length, p.width]),
        k = (0, React.useCallback)(e => 146 - e / 100 * 138, []),
        f = (0, __mod_46667.A)().x((e, a) => m(a)).y(e => k(e)).curve(__mod_4670.G)(u) ?? "",
        g = (0, __mod_40144.A)().x((e, a) => m(a)).y0(150).y1(e => k(e)).curve(__mod_4670.G)(u) ?? "",
        v = `M ${m(0)} ${k(100)} L ${m(u.length - 1)} ${k(0)}`;
      return <div className={re("bg-white dark:bg-neutral-950", "text-neutral-900 dark:text-neutral-100", "flex h-full min-h-[700px] w-full flex-col overflow-hidden p-4 sm:p-6")}><div className={re("relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 shadow-[inset_0_0_0_1px_rgb(84_62_32/0.05)] dark:shadow-[inset_0_0_0_1px_rgb(255_255_255/0.05)]", "mx-auto flex min-h-0 w-full max-w-[1000px] flex-1 flex-col gap-1")}><div className="flex flex-wrap items-start justify-between gap-3 px-4 py-3.5"><div className="min-w-0"><h2 className={re("text-[17px]/[22px] font-extrabold", "truncate")}>Service level objectives</h2><p className={re(ro, "mt-0.5 flex flex-wrap gap-x-3")}><span>{rx.length} objectives</span><span>{rx.filter(e => "ok" !== ru(e.remaining)).length} spending budget faster than planned</span></p></div><div role="radiogroup" aria-label="Compliance window" onKeyDown={rm} className={re("inline-flex w-fit max-w-full items-stretch gap-1 rounded-[calc(var(--rb-r-full,999px)_+_min(4px,var(--rb-r-full,999px)))] bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] p-1", "h-10", "shrink-0")}>{rd.map(r => <button type="button" role="radio" aria-checked={r === e} tabIndex={r === e ? 0 : -1} onClick={() => a(r)} className="relative inline-flex min-w-0 cursor-pointer items-center justify-center gap-1.5 whitespace-nowrap [&_svg]:shrink-0 rounded-[calc(var(--rb-r-full,999px))] px-4 text-[14px]/[18px] font-bold text-neutral-900/78 dark:text-neutral-100/78 select-none transition-[background-color,color,box-shadow,outline-color,scale] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:scale-[0.96] motion-reduce:active:scale-100 hover:not-aria-checked:text-neutral-900 aria-checked:bg-white aria-checked:text-neutral-900 aria-checked:shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_2px_rgb(84_62_32/0.10),0_3px_8px_-2px_rgb(84_62_32/0.20)] disabled:cursor-not-allowed disabled:text-neutral-900/40 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:hover:not-aria-checked:text-neutral-100 dark:aria-checked:bg-[color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800))] dark:aria-checked:text-neutral-100 dark:aria-checked:shadow-[inset_0_1px_0_rgb(255_255_255/0.1),0_0_0_1px_rgb(0_0_0/0.6),0_2px_5px_-1px_rgb(0_0_0/0.6)] dark:disabled:text-neutral-100/40">{r}</button>)}</div></div><div className={re(rl, "p-4")}><div className="flex flex-wrap items-start justify-between gap-3"><div className="min-w-0"><h3 className={re("text-[15px]/[20px] font-bold", "flex min-w-0 gap-x-2")}><span className="min-w-0 truncate">{x.name}</span><span className="shrink-0">error budget</span></h3><p className={re(ro, "mt-0.5 truncate")}>{x.indicator}</p></div><div className="flex shrink-0 items-baseline gap-4"><p className="text-right"><span className={re(rn, ra, "block")}>Remaining</span><span className={re(ri, "justify-end")}><span className={re("danger" === b && rr)}>{x.remaining}%</span></span></p><p className="text-right"><span className={re(rn, ra, "block")}>Burn rate</span><span className={re(ri, "justify-end")}>{x.burn.toFixed(1)}×</span></p></div></div><div ref={h} role="img" aria-label={`Error budget burn-down for ${x.name}, ${x.remaining}% remaining`} style={{
              height: 150
            }} className="mt-3">{p.width > 0 && <svg width={p.width} height={150} className="overflow-visible">{[.25, .5, .75].map(e => <line x1={0} x2={p.width} y1={150 * e} y2={150 * e} className="stroke-neutral-900/6 dark:stroke-neutral-100/8" strokeWidth={1} shapeRendering="crispEdges" />)}<path d={v} fill="none" strokeWidth={1} strokeDasharray="6 4" className={rs} /><path d={g} className="fill-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] dark:fill-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_16%,transparent)]" /><path d={f} fill="none" stroke={"danger" === b ? "currentColor" : void 0} className={"danger" === b ? rr : "stroke-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_82%,black)] dark:stroke-[var(--rb-accent,oklch(81%_0.16_163))]"} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /></svg>}</div><div className={re(rc, "mt-2 flex items-center justify-between")}><span>Window start</span><span className="inline-flex items-center gap-1.5"><svg aria-hidden={!0} width={16} height={2} className="overflow-visible"><line x1={0} x2={16} y1={1} y2={1} strokeWidth={1} strokeDasharray="6 4" className={rs} /></svg>Planned burn</span><span>Today</span></div></div><div className={re(rl, "relative min-h-0 flex-1")}><div ref={c} onScroll={_} className="h-full overflow-y-auto"><ul className={re("divide-y divide-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:divide-neutral-100/7", "p-1")}>{rx.map(e => {
                  let a = ru(e.remaining),
                    n = e.id === r;
                  return <li><button type="button" aria-pressed={n} onClick={() => o(e.id)} className={re("relative flex min-h-12 w-full min-w-0 flex-wrap items-center gap-x-3 gap-y-1 py-2.5 text-left text-neutral-900 dark:text-neutral-100 transition-[background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] has-[[data-description]]:min-h-16", n ? "bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] dark:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)]" : "cursor-pointer hover:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] dark:hover:bg-neutral-100/6 active:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] dark:active:bg-neutral-100/10", "focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))]", "rounded-[var(--rb-r-4xl,18px)]", "cursor-pointer px-2")}><span className="flex min-w-0 flex-1 flex-col gap-0.5"><span className="flex max-w-full min-w-0 items-baseline gap-2 text-[15px]/[20px] font-bold text-neutral-900 dark:text-neutral-100"><span className="min-w-0 truncate">{e.name}</span></span><span className={re(ro, "flex flex-wrap gap-x-3")}><span>Target {e.target}%</span><span>current {e.current}%</span></span></span><span className="hidden w-[140px] shrink-0 sm:block"><span role="progressbar" aria-valuenow={e.remaining} aria-valuemin={0} aria-valuemax={100} aria-label={`${e.name} budget remaining`} className="relative block h-2.5 w-full overflow-hidden rounded-[calc(var(--rb-r-full,999px))] bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] shadow-[inset_0_1px_2px_rgb(84_62_32/0.12)] dark:bg-neutral-100/12 dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.5)]"><span style={{
                            width: `${e.remaining}%`
                          }} className={rb[a]} /></span><span className={re(rn, ra, "mt-1 block")}>{e.remaining}% budget left</span></span><span className={re("text-right tabular-nums", rt, "text-neutral-900/78 dark:text-neutral-100/78", "w-[52px] shrink-0")}>{e.burn.toFixed(1)}×</span><span className={re("inline-flex items-start gap-1 text-[14px]/[20px] font-bold tabular-nums", rh[a], "w-[112px] shrink-0 justify-end max-md:hidden")}>{rp[a]}</span></button></li>;
                })}</ul></div><div aria-hidden="true" className={re("bg-linear-to-b from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 top-0 h-8", d.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={re("bg-linear-to-t from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 bottom-0 h-8", d.end ? "opacity-100" : "opacity-0")} /></div></div></div>;
    }
  },
  rf = {
    "monitoring-1": 760,
    "monitoring-2": 640,
    "monitoring-3": 680,
    "monitoring-4": 720,
    "monitoring-5": 700,
    "monitoring-6": 640,
    "monitoring-7": 760,
    "monitoring-8": 720,
    "monitoring-9": 800,
    "monitoring-10": 700
  };

export { rk as components };
export { rf as heights };

import * as __mod_22728 from "../_helpers/22728";
import * as __mod_31517 from "../_helpers/31517";
import * as __mod_90987 from "../_helpers/90987";
import * as __mod_90089 from "../_helpers/90089";
import * as __mod_66575 from "../_helpers/66575";
import * as __mod_99199 from "../_helpers/99199";
import * as __mod_89886 from "../_helpers/89886";
import * as __mod_95518 from "../_helpers/95518";
import * as __mod_22776 from "../_helpers/22776";
import * as __mod_67251 from "../_helpers/67251";
import * as __mod_52785 from "../_helpers/52785";
import * as __mod_92916 from "../_helpers/92916";
import * as __mod_20148 from "../_helpers/20148";
import * as __mod_68656 from "../_helpers/68656";
import * as __mod_89289 from "../_helpers/89289";
import * as __mod_24437 from "../_helpers/24437";
import * as __mod_58770 from "../_helpers/58770";
import * as __mod_63188 from "../_helpers/63188";
import * as __mod_86153 from "../_helpers/86153";
import * as __mod_10498 from "../_helpers/10498";
import * as __mod_87924 from "../_helpers/87924";
import * as __mod_19809 from "../_helpers/19809";
import * as __mod_96034 from "../_helpers/96034";
import * as __mod_40296 from "../_helpers/40296";
import * as __mod_58661 from "../_helpers/58661";
import * as __mod_5042 from "../_helpers/5042";
import * as __mod_12556 from "../_helpers/12556";
/**
 * Filtering 5
 * slug: filtering-5
 * category: filtering
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let d = (...e) => e.filter(Boolean).join(" "),
  _ = "text-neutral-900/62 dark:text-neutral-100/62",
  b = "border border-neutral-900/12 dark:border-neutral-100/14",
  u = "text-[15px]/[20px] font-bold",
  x = "text-[14px]/[20px] font-medium",
  p = "h-10 gap-2 rounded-[calc(var(--rb-r-full,999px))] px-5 text-[15px]/[20px] font-bold",
  h = "relative inline-flex size-[18px] shrink-0 items-center justify-center",
  k = "peer size-[18px] shrink-0 cursor-pointer appearance-none rounded-[calc(var(--rb-r-sm,6px))] border-2 border-neutral-900/28 bg-white transition-[background-color,border-color,box-shadow,outline-color,scale] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:scale-[0.86] motion-reduce:active:scale-100 hover:not-checked:not-disabled:border-neutral-900/60 active:not-checked:bg-neutral-900/8 checked:border-transparent checked:bg-[var(--rb-accent,oklch(84%_0.15_165))] indeterminate:border-transparent indeterminate:bg-[var(--rb-accent,oklch(84%_0.15_165))] checked:shadow-[inset_0_1px_0_rgb(255_255_255/0.4),inset_0_-1.5px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] indeterminate:shadow-[inset_0_1px_0_rgb(255_255_255/0.4),inset_0_-1.5px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] aria-invalid:border-[oklch(60%_0.236_26)] disabled:cursor-not-allowed disabled:border-neutral-900/20 disabled:checked:bg-neutral-900/25 disabled:checked:shadow-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:border-neutral-100/34 dark:bg-neutral-900 dark:hover:not-checked:not-disabled:border-neutral-100/70 dark:active:not-checked:bg-neutral-100/10 dark:checked:bg-[var(--rb-accent,oklch(81%_0.16_163))] dark:indeterminate:bg-[var(--rb-accent,oklch(81%_0.16_163))] dark:checked:shadow-none dark:indeterminate:shadow-none dark:aria-invalid:border-[oklch(65.2%_0.219_26)] dark:disabled:border-neutral-100/24 dark:disabled:checked:bg-neutral-100/28",
  m = "pointer-events-none absolute scale-50 text-[var(--rb-accent-fg,oklch(26%_0.06_168))] opacity-0 transition-[opacity,scale] duration-[260ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] peer-checked:scale-100 peer-checked:opacity-100 peer-indeterminate:scale-100 peer-indeterminate:opacity-100 peer-active:scale-[0.86] motion-reduce:transition-none dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))]",
  v = "relative inline-flex h-8 max-w-full min-w-0 shrink-0 cursor-pointer items-center gap-1.5 whitespace-nowrap rounded-[calc(var(--rb-r-full,999px))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] px-3.5 text-[14px]/[18px] font-bold text-neutral-900 dark:text-neutral-100 select-none transition-[background-color,border-color,box-shadow,color,scale,translate,outline-color] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:translate-y-px active:duration-[90ms] motion-reduce:active:translate-y-0 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] aria-pressed:bg-none aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-pressed:shadow-[inset_0_0_0_1.5px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14)] disabled:cursor-not-allowed disabled:text-neutral-900/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-pressed:shadow-[inset_0_0_0_1.5px_var(--rb-accent,oklch(81%_0.16_163))] dark:aria-expanded:bg-neutral-800 dark:disabled:text-neutral-100/40",
  g = "relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] text-neutral-900 dark:text-neutral-100 shadow-[0_0_0_1px_rgb(84_62_32/0.07),0_1px_2px_rgb(84_62_32/0.06),0_8px_22px_-10px_rgb(84_62_32/0.20)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_0_0_1px_rgb(0_0_0/0.6),0_10px_24px_-12px_rgb(0_0_0/0.8)]",
  f = "flex h-10 w-full min-w-0 cursor-pointer items-center gap-2.5 rounded-[calc(var(--rb-r-full,999px))] px-3 text-left text-[15px]/[20px] font-semibold text-neutral-900/75 transition-[background-color,box-shadow,color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] [&_svg]:shrink-0 hover:bg-neutral-900/5 hover:text-neutral-900 aria-[current=page]:bg-white aria-[current=page]:font-bold aria-[current=page]:text-neutral-900 aria-[current=page]:shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:text-neutral-100/75 dark:hover:bg-neutral-100/6 dark:hover:text-neutral-100 dark:aria-[current=page]:bg-[color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800))] dark:aria-[current=page]:text-neutral-100 dark:aria-[current=page]:shadow-[inset_0_1px_0_rgb(255_255_255/0.08),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)]",
  w = "ms-auto text-[13px]/[16px] font-bold tabular-nums text-neutral-900/62 dark:text-neutral-100/62",
  y = "inline-flex h-8 cursor-pointer items-center rounded-[calc(var(--rb-r-full,999px))] px-3 text-[14px]/[18px] font-bold text-neutral-900/78 dark:text-neutral-100/78 transition-[background-color,color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-neutral-900/5 hover:text-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:hover:bg-neutral-100/6 dark:hover:text-neutral-100",
  j = d(x, _),
  N = d("text-[13px]/[16px] font-semibold tabular-nums", _);
function z({
  id: e,
  value: a,
  onChange: r,
  options: s,
  disabled: c,
  placeholder: _ = "Select…",
  className: b,
  triggerClassName: u,
  leading: x,
  ariaLabel: p
}) {
  let h = (0, React.useId)(),
    [k, m] = (0, React.useState)(!1),
    [v, g] = (0, React.useState)(0),
    [f, w] = (0, React.useState)(!1),
    [y, j] = (0, React.useState)(),
    z = (0, React.useRef)(null),
    C = (0, React.useRef)(null),
    S = (0, React.useRef)({
      buffer: "",
      at: 0
    }),
    A = s.findIndex(e => e.value === a),
    D = A >= 0 ? s[A] : void 0,
    E = e => {
      if (c) return;
      let a = z.current,
        r = a?.ownerDocument.defaultView;
      if (a && r) {
        let e = a.getBoundingClientRect(),
          t = 0,
          l = r.innerHeight;
        for (let e = a.parentElement; e; e = e.parentElement) if (/auto|scroll|hidden|clip/.test(r.getComputedStyle(e).overflowY)) {
          let a = e.getBoundingClientRect();
          t = Math.max(t, a.top), l = Math.min(l, a.bottom);
          break;
        }
        let n = l - e.bottom,
          i = e.top - t,
          o = Math.min(32 * s.length + 8, 264),
          c = n < o + 8 && i > n,
          d = (c ? i : n) - 8;
        w(c), j(d < o ? Math.max(d, 40) : void 0);
      }
      g(e ?? (A >= 0 ? A : 0)), m(!0);
    };
  (0, React.useEffect)(() => {
    if (!k) return;
    let e = z.current,
      a = e?.ownerDocument;
    if (!a) return;
    let r = a => {
      e.contains(a.target) || m(!1);
    };
    return a.addEventListener("mousedown", r), a.addEventListener("touchstart", r), () => {
      a.removeEventListener("mousedown", r), a.removeEventListener("touchstart", r);
    };
  }, [k]), (0, React.useEffect)(() => {
    if (!k) return;
    let e = C.current,
      a = e?.querySelector(`[data-index="${v}"]`);
    if (!e || !a) return;
    let r = a.offsetTop,
      t = r + a.offsetHeight;
    r < e.scrollTop ? e.scrollTop = r : t > e.scrollTop + e.clientHeight && (e.scrollTop = t - e.clientHeight);
  }, [k, v]);
  let M = e => {
    let a = s[e];
    a && (r(a.value), m(!1), z.current?.querySelector("button")?.focus({
      preventScroll: !0
    }));
  };
  return <div ref={z} className={d("relative", b)}><button id={e} type="button" role="combobox" aria-expanded={k} aria-controls={h} aria-haspopup="listbox" disabled={c} onClick={() => k ? m(!1) : E()} onKeyDown={e => {
      if (!c) {
        if (!k) {
          ["Enter", " ", "ArrowDown", "ArrowUp"].includes(e.key) && (e.preventDefault(), E());
          return;
        }
        if ("Escape" === e.key || "Tab" === e.key) {
          "Escape" === e.key && e.stopPropagation(), m(!1);
          return;
        }
        if ("ArrowDown" === e.key) e.preventDefault(), g(e => Math.min(e + 1, s.length - 1));else if ("ArrowUp" === e.key) e.preventDefault(), g(e => Math.max(e - 1, 0));else if ("Home" === e.key) e.preventDefault(), g(0);else if ("End" === e.key) e.preventDefault(), g(s.length - 1);else if ("Enter" === e.key || " " === e.key) e.preventDefault(), M(v);else if (1 === e.key.length && /\S/.test(e.key)) {
          let a = Date.now(),
            r = S.current;
          r.buffer = a - r.at > 700 ? e.key : r.buffer + e.key, r.at = a;
          let t = s.findIndex(e => e.label.toLowerCase().startsWith(r.buffer.toLowerCase()));
          t >= 0 && g(t);
        }
      }
    }} aria-label={p} className={d("inline-flex h-10 w-fit min-w-40 cursor-pointer items-center justify-between gap-2 rounded-[calc(var(--rb-r-xl,12px))] border border-transparent bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] px-3.5 text-left text-[15px]/[20px] font-semibold whitespace-nowrap text-neutral-900 outline-none select-none transition-[border-color,box-shadow,background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:not-disabled:not-aria-invalid:not-aria-expanded:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] focus-visible:border-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] focus-visible:bg-white focus-visible:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-expanded:border-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] aria-expanded:bg-white aria-expanded:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-invalid:border-[oklch(60%_0.236_26)] disabled:cursor-not-allowed disabled:text-neutral-900/40 disabled:shadow-none dark:text-neutral-100 dark:hover:not-disabled:not-aria-invalid:not-aria-expanded:bg-neutral-900 dark:focus-visible:border-[var(--rb-accent,oklch(81%_0.16_163))] dark:focus-visible:bg-neutral-900 dark:focus-visible:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-expanded:border-[var(--rb-accent,oklch(81%_0.16_163))] dark:aria-expanded:bg-neutral-900 dark:aria-expanded:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-invalid:border-[oklch(65.2%_0.219_26)] dark:disabled:text-neutral-100/40", "w-full min-w-[100%]", u)}><span className="flex min-w-0 items-center gap-2">{x}<span className={d("truncate", !D && "text-neutral-900/62 dark:text-neutral-100/62")}>{D ? D.label : _}</span></span><__mod_22728.n icon={__mod_31517.A} size={18} strokeWidth={2} aria-hidden="true" className="shrink-0 text-neutral-900/78 dark:text-neutral-100/78" /></button>{k && <ul ref={C} id={h} role="listbox" tabIndex={-1} style={{
      maxHeight: y
    }} className={d("min-w-52 max-w-[min(480px,calc(100vw-2rem))] overflow-x-hidden overflow-y-auto overscroll-contain rounded-[calc(var(--rb-r-3xl,16px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] p-2 text-neutral-900 dark:text-neutral-100 outline-none shadow-[0_0_0_1px_rgb(84_62_32/0.08),0_24px_56px_-20px_rgb(84_62_32/0.34),0_6px_16px_-8px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.65),0_24px_56px_-16px_rgb(0_0_0/0.8)]", "absolute z-30 max-h-[264px] w-full min-w-[100%]", f ? "bottom-full mb-1.5" : "top-full mt-1.5")}>{s.map((e, r) => {
        let l = e.value === a;
        return <li role="option" aria-selected={l} data-index={r} data-highlighted={r === v || void 0} onMouseEnter={() => g(r)} onClick={() => M(r)} className={d("relative flex min-h-10 w-full cursor-default items-center gap-2.5 rounded-[calc(var(--rb-r-md,8px))] px-3 py-2 text-left text-[15px]/[20px] font-semibold text-neutral-900 outline-none select-none [&_svg]:shrink-0 [&_svg]:text-neutral-900/70 hover:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] focus-visible:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] data-[highlighted]:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-disabled:cursor-not-allowed aria-disabled:text-neutral-900/40 dark:text-neutral-100 dark:[&_svg]:text-neutral-100/70 dark:hover:bg-neutral-100/7 dark:focus-visible:bg-neutral-100/7 dark:data-[highlighted]:bg-neutral-100/7 dark:aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-disabled:text-neutral-100/40", "pe-8")}><span className="flex min-w-0 items-baseline gap-2"><span className="truncate">{e.label}</span>{e.hint && <span className={d(N, "shrink-0")}>{e.hint}</span>}</span>{l && <__mod_22728.n icon={__mod_90987.A} size={18} strokeWidth={2} aria-hidden="true" className="pointer-events-none absolute end-2" />}</li>;
      })}</ul>}</div>;
}
function C({
  min: e,
  max: a,
  step: r = 1,
  value: n,
  onChange: i,
  format: o,
  labels: s
}) {
  let c = (0, React.useRef)(null),
    [d, _] = (0, React.useState)(null),
    b = t => Math.min(a, Math.max(e, Math.round(t / r) * r)),
    u = r => (r - e) / (a - e) * 100,
    x = r => {
      let t = c.current;
      if (!t) return e;
      let l = t.getBoundingClientRect();
      return 0 === l.width ? e : b(e + (r - l.left) / l.width * (a - e));
    },
    p = (e, a) => {
      let [r, t] = n;
      0 === e ? i([Math.min(a, t), t]) : i([r, Math.max(a, r)]);
    },
    h = t => ({
      role: "slider",
      tabIndex: 0,
      "aria-label": s[t],
      "aria-valuemin": e,
      "aria-valuemax": a,
      "aria-valuenow": n[t],
      "aria-valuetext": o(n[t]),
      style: {
        left: `${u(n[t])}%`,
        touchAction: "none"
      },
      onPointerDown: e => {
        e.preventDefault(), e.stopPropagation(), e.currentTarget.setPointerCapture(e.pointerId), _(t);
      },
      onPointerMove: e => {
        d === t && p(t, x(e.clientX));
      },
      onLostPointerCapture: () => _(null),
      onPointerUp: e => {
        e.currentTarget.releasePointerCapture(e.pointerId), _(null);
      },
      onKeyDown: l => {
        let i = Math.max(r, Math.round((a - e) / 10)),
          o = n[t],
          s = null;
        "ArrowLeft" === l.key || "ArrowDown" === l.key ? s = o - r : "ArrowRight" === l.key || "ArrowUp" === l.key ? s = o + r : "PageDown" === l.key ? s = o - i : "PageUp" === l.key ? s = o + i : "Home" === l.key ? s = e : "End" === l.key && (s = a), null !== s && (l.preventDefault(), p(t, b(s)));
      },
      className: "absolute top-1/2 block size-5 -translate-x-1/2 -translate-y-1/2 cursor-grab rounded-full bg-white shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_2px_rgb(84_62_32/0.10),0_3px_8px_-2px_rgb(84_62_32/0.20)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.12),0_0_0_1px_rgb(0_0_0/0.6),0_2px_6px_-1px_rgb(0_0_0/0.6)] transition-[scale] duration-[240ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:scale-110 active:scale-110 active:cursor-grabbing motion-reduce:transition-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:bg-white"
    });
  return <div ref={c} onPointerDown={e => {
    let a = x(e.clientX);
    p(Math.abs(a - n[0]) <= Math.abs(a - n[1]) ? 0 : 1, a);
  }} className="relative flex h-4 w-full cursor-pointer touch-none items-center select-none"><div className="relative h-2 w-full grow rounded-[calc(var(--rb-r-full,999px))] bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] shadow-[inset_0_1px_2px_rgb(84_62_32/0.12)] dark:bg-neutral-100/14 dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.5)]"><span className="absolute inset-y-0 rounded-[calc(var(--rb-r-full,999px))] bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_82%,black)] dark:bg-[var(--rb-accent,oklch(81%_0.16_163))]" style={{
        left: `${u(n[0])}%`,
        width: `${u(n[1]) - u(n[0])}%`
      }} /><div {...h(0)} /><div {...h(1)} /></div></div>;
}
let S = [{
    value: "dinnerware",
    label: "Dinnerware"
  }, {
    value: "drinkware",
    label: "Drinkware"
  }, {
    value: "vases",
    label: "Vases"
  }, {
    value: "planters",
    label: "Planters"
  }, {
    value: "serveware",
    label: "Serveware"
  }],
  A = [{
    value: "chalk",
    label: "Chalk",
    hex: "#ece5d8",
    light: !0
  }, {
    value: "sand",
    label: "Sand",
    hex: "#c9b193",
    light: !0
  }, {
    value: "moss",
    label: "Moss",
    hex: "#5a6647",
    light: !1
  }, {
    value: "slate",
    label: "Slate",
    hex: "#3b4b5a",
    light: !1
  }, {
    value: "clay",
    label: "Clay",
    hex: "#a05a41",
    light: !1
  }, {
    value: "ink",
    label: "Ink",
    hex: "#2a2724",
    light: !1
  }],
  D = [{
    value: "s",
    label: "Small"
  }, {
    value: "m",
    label: "Medium"
  }, {
    value: "l",
    label: "Large"
  }],
  E = [{
    value: "kilnhouse",
    label: "Kilnhouse"
  }, {
    value: "muro",
    label: "Muro Studio"
  }, {
    value: "terra",
    label: "Terra & Ash"
  }, {
    value: "nine",
    label: "Nine Fields"
  }],
  M = [{
    id: "p1",
    name: "Ridge dinner plate",
    category: "dinnerware",
    price: 38,
    glaze: "chalk",
    size: "l",
    maker: "kilnhouse"
  }, {
    id: "p2",
    name: "Ridge side plate",
    category: "dinnerware",
    price: 26,
    glaze: "chalk",
    size: "m",
    maker: "kilnhouse"
  }, {
    id: "p3",
    name: "Coil cereal bowl",
    category: "dinnerware",
    price: 32,
    glaze: "sand",
    size: "m",
    maker: "muro"
  }, {
    id: "p4",
    name: "Ember pasta bowl",
    category: "dinnerware",
    price: 44,
    glaze: "clay",
    size: "l",
    maker: "terra"
  }, {
    id: "p5",
    name: "Halo charger plate",
    category: "dinnerware",
    price: 52,
    glaze: "ink",
    size: "l",
    maker: "nine"
  }, {
    id: "p6",
    name: "Tuck mug",
    category: "drinkware",
    price: 28,
    glaze: "moss",
    size: "s",
    maker: "kilnhouse"
  }, {
    id: "p7",
    name: "Stack tumbler",
    category: "drinkware",
    price: 22,
    glaze: "slate",
    size: "s",
    maker: "muro"
  }, {
    id: "p8",
    name: "Pour carafe",
    category: "drinkware",
    price: 68,
    glaze: "chalk",
    size: "l",
    maker: "terra"
  }, {
    id: "p9",
    name: "Field cup",
    category: "drinkware",
    price: 19,
    glaze: "sand",
    size: "s",
    maker: "nine"
  }, {
    id: "p10",
    name: "Bell teapot",
    category: "drinkware",
    price: 94,
    glaze: "ink",
    size: "l",
    maker: "kilnhouse"
  }, {
    id: "p11",
    name: "Column vase",
    category: "vases",
    price: 76,
    glaze: "slate",
    size: "l",
    maker: "muro"
  }, {
    id: "p12",
    name: "Pebble bud vase",
    category: "vases",
    price: 34,
    glaze: "chalk",
    size: "s",
    maker: "terra"
  }, {
    id: "p13",
    name: "Fold vase",
    category: "vases",
    price: 58,
    glaze: "clay",
    size: "m",
    maker: "nine"
  }, {
    id: "p14",
    name: "Basin planter",
    category: "planters",
    price: 62,
    glaze: "sand",
    size: "l",
    maker: "kilnhouse"
  }, {
    id: "p15",
    name: "Rim planter",
    category: "planters",
    price: 41,
    glaze: "moss",
    size: "m",
    maker: "muro"
  }, {
    id: "p16",
    name: "Trace wall planter",
    category: "planters",
    price: 29,
    glaze: "ink",
    size: "s",
    maker: "terra"
  }, {
    id: "p17",
    name: "Crest platter",
    category: "serveware",
    price: 88,
    glaze: "chalk",
    size: "l",
    maker: "nine"
  }, {
    id: "p18",
    name: "Ladle serving bowl",
    category: "serveware",
    price: 54,
    glaze: "moss",
    size: "m",
    maker: "kilnhouse"
  }],
  L = e => `$${e}`,
  R = [{
    value: "featured",
    label: "Featured"
  }, {
    value: "low",
    label: "Price: low to high"
  }, {
    value: "high",
    label: "Price: high to low"
  }, {
    value: "name",
    label: "Alphabetical"
  }],
  P = {
    category: [],
    glaze: [],
    size: [],
    maker: [],
    price: [0, 100]
  },
  T = (e, a, r) => ("category" === r || !a.category.length || !!a.category.includes(e.category)) && ("glaze" === r || !a.glaze.length || !!a.glaze.includes(e.glaze)) && ("size" === r || !a.size.length || !!a.size.includes(e.size)) && ("maker" === r || !a.maker.length || !!a.maker.includes(e.maker)) && ("price" === r || !(e.price < a.price[0]) && !(e.price > a.price[1])) && !0;
function W({
  label: e,
  children: a
}) {
  return <section className="py-5 first:pt-0"><h3 className={d(u, "mb-3")}>{e}</h3>{a}</section>;
}
let $ = (...e) => e.filter(Boolean).join(" "),
  q = "bg-white dark:bg-neutral-950",
  I = "text-neutral-900 dark:text-neutral-100",
  B = "border-t border-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:border-neutral-100/7",
  F = "text-[15px]/[20px] font-bold",
  K = "relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_68%,white),var(--rb-accent,oklch(84%_0.15_165)))] text-[var(--rb-accent-fg,oklch(26%_0.06_168))] shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_4px_10px_-4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_80%,transparent)] hover:not-disabled:-translate-y-px hover:not-disabled:brightness-[1.04] hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_7px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_85%,transparent)] active:not-disabled:translate-y-px active:not-disabled:brightness-[0.98] active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_55%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] motion-reduce:hover:translate-y-0 disabled:opacity-45 disabled:shadow-none dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_78%,white),var(--rb-accent,oklch(81%_0.16_163)))] dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_6px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,transparent)] dark:hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_9px_22px_-8px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_60%,transparent)] dark:active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_45%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black)] dark:disabled:shadow-none",
  O = "h-10 gap-2 rounded-[calc(var(--rb-r-full,999px))] px-5 text-[15px]/[20px] font-bold",
  U = "relative inline-flex size-[18px] shrink-0 items-center justify-center",
  V = "peer size-[18px] shrink-0 cursor-pointer appearance-none rounded-[calc(var(--rb-r-sm,6px))] border-2 border-neutral-900/28 bg-white transition-[background-color,border-color,box-shadow,outline-color,scale] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:scale-[0.86] motion-reduce:active:scale-100 hover:not-checked:not-disabled:border-neutral-900/60 active:not-checked:bg-neutral-900/8 checked:border-transparent checked:bg-[var(--rb-accent,oklch(84%_0.15_165))] indeterminate:border-transparent indeterminate:bg-[var(--rb-accent,oklch(84%_0.15_165))] checked:shadow-[inset_0_1px_0_rgb(255_255_255/0.4),inset_0_-1.5px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] indeterminate:shadow-[inset_0_1px_0_rgb(255_255_255/0.4),inset_0_-1.5px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] aria-invalid:border-[oklch(60%_0.236_26)] disabled:cursor-not-allowed disabled:border-neutral-900/20 disabled:checked:bg-neutral-900/25 disabled:checked:shadow-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:border-neutral-100/34 dark:bg-neutral-900 dark:hover:not-checked:not-disabled:border-neutral-100/70 dark:active:not-checked:bg-neutral-100/10 dark:checked:bg-[var(--rb-accent,oklch(81%_0.16_163))] dark:indeterminate:bg-[var(--rb-accent,oklch(81%_0.16_163))] dark:checked:shadow-none dark:indeterminate:shadow-none dark:aria-invalid:border-[oklch(65.2%_0.219_26)] dark:disabled:border-neutral-100/24 dark:disabled:checked:bg-neutral-100/28",
  G = "pointer-events-none absolute scale-50 text-[var(--rb-accent-fg,oklch(26%_0.06_168))] opacity-0 transition-[opacity,scale] duration-[260ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] peer-checked:scale-100 peer-checked:opacity-100 peer-indeterminate:scale-100 peer-indeterminate:opacity-100 peer-active:scale-[0.86] motion-reduce:transition-none dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))]",
  Q = "relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] text-neutral-900 dark:text-neutral-100 shadow-[0_0_0_1px_rgb(84_62_32/0.07),0_1px_2px_rgb(84_62_32/0.06),0_8px_22px_-10px_rgb(84_62_32/0.20)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_0_0_1px_rgb(0_0_0/0.6),0_10px_24px_-12px_rgb(0_0_0/0.8)]",
  X = "flex h-10 w-full min-w-0 cursor-pointer items-center gap-2.5 rounded-[calc(var(--rb-r-full,999px))] px-3 text-left text-[15px]/[20px] font-semibold text-neutral-900/75 transition-[background-color,box-shadow,color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] [&_svg]:shrink-0 hover:bg-neutral-900/5 hover:text-neutral-900 aria-[current=page]:bg-white aria-[current=page]:font-bold aria-[current=page]:text-neutral-900 aria-[current=page]:shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:text-neutral-100/75 dark:hover:bg-neutral-100/6 dark:hover:text-neutral-100 dark:aria-[current=page]:bg-[color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800))] dark:aria-[current=page]:text-neutral-100 dark:aria-[current=page]:shadow-[inset_0_1px_0_rgb(255_255_255/0.08),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)]",
  Y = "ms-auto text-[13px]/[16px] font-bold tabular-nums text-neutral-900/62 dark:text-neutral-100/62",
  J = "inline-flex h-8 cursor-pointer items-center rounded-[calc(var(--rb-r-full,999px))] px-3 text-[14px]/[18px] font-bold text-neutral-900/78 dark:text-neutral-100/78 transition-[background-color,color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-neutral-900/5 hover:text-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:hover:bg-neutral-100/6 dark:hover:text-neutral-100";
function Z({
  min: e,
  max: a,
  step: r = 1,
  value: n,
  onChange: i,
  format: o,
  labels: s
}) {
  let c = (0, React.useRef)(null),
    [d, _] = (0, React.useState)(null),
    b = t => Math.min(a, Math.max(e, Math.round(t / r) * r)),
    u = r => (r - e) / (a - e) * 100,
    x = r => {
      let t = c.current;
      if (!t) return e;
      let l = t.getBoundingClientRect();
      return 0 === l.width ? e : b(e + (r - l.left) / l.width * (a - e));
    },
    p = (e, a) => {
      let [r, t] = n;
      0 === e ? i([Math.min(a, t), t]) : i([r, Math.max(a, r)]);
    },
    h = t => ({
      role: "slider",
      tabIndex: 0,
      "aria-label": s[t],
      "aria-valuemin": e,
      "aria-valuemax": a,
      "aria-valuenow": n[t],
      "aria-valuetext": o(n[t]),
      style: {
        left: `${u(n[t])}%`,
        touchAction: "none"
      },
      onPointerDown: e => {
        e.preventDefault(), e.stopPropagation(), e.currentTarget.setPointerCapture(e.pointerId), _(t);
      },
      onPointerMove: e => {
        d === t && p(t, x(e.clientX));
      },
      onLostPointerCapture: () => _(null),
      onPointerUp: e => {
        e.currentTarget.releasePointerCapture(e.pointerId), _(null);
      },
      onKeyDown: l => {
        let i = Math.max(r, Math.round((a - e) / 10)),
          o = n[t],
          s = null;
        "ArrowLeft" === l.key || "ArrowDown" === l.key ? s = o - r : "ArrowRight" === l.key || "ArrowUp" === l.key ? s = o + r : "PageDown" === l.key ? s = o - i : "PageUp" === l.key ? s = o + i : "Home" === l.key ? s = e : "End" === l.key && (s = a), null !== s && (l.preventDefault(), p(t, b(s)));
      },
      className: "absolute top-1/2 block size-5 -translate-x-1/2 -translate-y-1/2 cursor-grab rounded-full bg-white shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_2px_rgb(84_62_32/0.10),0_3px_8px_-2px_rgb(84_62_32/0.20)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.12),0_0_0_1px_rgb(0_0_0/0.6),0_2px_6px_-1px_rgb(0_0_0/0.6)] transition-[scale] duration-[240ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:scale-110 active:scale-110 active:cursor-grabbing motion-reduce:transition-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:bg-white"
    });
  return <div ref={c} onPointerDown={e => {
    let a = x(e.clientX);
    p(Math.abs(a - n[0]) <= Math.abs(a - n[1]) ? 0 : 1, a);
  }} className="relative flex h-4 w-full cursor-pointer touch-none items-center select-none"><div className="relative h-2 w-full grow rounded-[calc(var(--rb-r-full,999px))] bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] shadow-[inset_0_1px_2px_rgb(84_62_32/0.12)] dark:bg-neutral-100/14 dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.5)]"><span className="absolute inset-y-0 rounded-[calc(var(--rb-r-full,999px))] bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_82%,black)] dark:bg-[var(--rb-accent,oklch(81%_0.16_163))]" style={{
        left: `${u(n[0])}%`,
        width: `${u(n[1]) - u(n[0])}%`
      }} /><div {...h(0)} /><div {...h(1)} /></div></div>;
}
let ee = [{
    value: "all",
    label: "All"
  }, {
    value: "road",
    label: "Road"
  }, {
    value: "gravel",
    label: "Gravel"
  }, {
    value: "mountain",
    label: "Mountain"
  }, {
    value: "city",
    label: "City"
  }],
  ea = [{
    value: "xs",
    label: "48 cm"
  }, {
    value: "s",
    label: "51 cm"
  }, {
    value: "m",
    label: "54 cm"
  }, {
    value: "l",
    label: "56 cm"
  }, {
    value: "xl",
    label: "58 cm"
  }],
  er = [{
    value: "likenew",
    label: "Like new"
  }, {
    value: "excellent",
    label: "Excellent"
  }, {
    value: "good",
    label: "Good"
  }, {
    value: "fair",
    label: "Fair"
  }],
  et = [{
    value: "105",
    label: "Shimano 105"
  }, {
    value: "grx",
    label: "Shimano GRX"
  }, {
    value: "deore",
    label: "Shimano Deore"
  }, {
    value: "rival",
    label: "SRAM Rival"
  }, {
    value: "gx",
    label: "SRAM GX"
  }],
  el = [{
    id: "b1",
    name: "Canyon Endurace 7",
    discipline: "road",
    size: "m",
    price: 1450,
    condition: "excellent",
    groupset: "105"
  }, {
    id: "b2",
    name: "Specialized Allez",
    discipline: "road",
    size: "s",
    price: 780,
    condition: "good",
    groupset: "105"
  }, {
    id: "b3",
    name: "Trek \xc9monda SL",
    discipline: "road",
    size: "l",
    price: 2100,
    condition: "likenew",
    groupset: "105"
  }, {
    id: "b4",
    name: "Giant TCR Advanced",
    discipline: "road",
    size: "m",
    price: 1650,
    condition: "excellent",
    groupset: "rival"
  }, {
    id: "b5",
    name: "Cannondale CAAD13",
    discipline: "road",
    size: "s",
    price: 1200,
    condition: "good",
    groupset: "rival"
  }, {
    id: "b6",
    name: "Bianchi Via Nirone",
    discipline: "road",
    size: "xl",
    price: 690,
    condition: "fair",
    groupset: "105"
  }, {
    id: "b7",
    name: "Cerv\xe9lo \xc1spero",
    discipline: "gravel",
    size: "l",
    price: 2600,
    condition: "likenew",
    groupset: "grx"
  }, {
    id: "b8",
    name: "Salsa Warbird",
    discipline: "gravel",
    size: "m",
    price: 1900,
    condition: "excellent",
    groupset: "grx"
  }, {
    id: "b9",
    name: "Cannondale Topstone",
    discipline: "gravel",
    size: "s",
    price: 1350,
    condition: "good",
    groupset: "rival"
  }, {
    id: "b10",
    name: "Kona Rove AL",
    discipline: "gravel",
    size: "l",
    price: 850,
    condition: "fair",
    groupset: "grx"
  }, {
    id: "b11",
    name: "Santa Cruz Tallboy",
    discipline: "mountain",
    size: "l",
    price: 3200,
    condition: "excellent",
    groupset: "gx"
  }, {
    id: "b12",
    name: "Trek Fuel EX 8",
    discipline: "mountain",
    size: "m",
    price: 2400,
    condition: "good",
    groupset: "deore"
  }, {
    id: "b13",
    name: "Specialized Rockhopper",
    discipline: "mountain",
    size: "s",
    price: 620,
    condition: "good",
    groupset: "deore"
  }, {
    id: "b14",
    name: "Giant Trance X",
    discipline: "mountain",
    size: "xl",
    price: 2850,
    condition: "likenew",
    groupset: "gx"
  }, {
    id: "b15",
    name: "Kona Process 134",
    discipline: "mountain",
    size: "m",
    price: 1750,
    condition: "fair",
    groupset: "deore"
  }, {
    id: "b16",
    name: "Brompton C Line",
    discipline: "city",
    size: "m",
    price: 1100,
    condition: "excellent",
    groupset: "deore"
  }, {
    id: "b17",
    name: "Trek FX 3 Disc",
    discipline: "city",
    size: "s",
    price: 480,
    condition: "good",
    groupset: "deore"
  }, {
    id: "b18",
    name: "Priority Continuum",
    discipline: "city",
    size: "l",
    price: 720,
    condition: "likenew",
    groupset: "deore"
  }],
  en = e => `$${e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`,
  ei = {
    size: [],
    condition: [],
    groupset: [],
    price: [400, 3500]
  },
  eo = (e, a, r, t) => ("all" === a || e.discipline === a) && ("size" === t || !r.size.length || !!r.size.includes(e.size)) && ("condition" === t || !r.condition.length || !!r.condition.includes(e.condition)) && ("groupset" === t || !r.groupset.length || !!r.groupset.includes(e.groupset)) && ("price" === t || !(e.price < r.price[0]) && !(e.price > r.price[1])) && !0;
function es({
  label: e,
  children: a
}) {
  return <section className="py-5"><h3 className={$(F, "mb-3")}>{e}</h3>{a}</section>;
}
let eb = (...e) => e.filter(Boolean).join(" "),
  eu = "bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))]",
  ex = "text-neutral-900/62 dark:text-neutral-100/62",
  ep = "relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] text-neutral-900 dark:text-neutral-100 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] active:not-disabled:translate-y-px active:not-disabled:shadow-[inset_0_1px_3px_rgb(84_62_32/0.16),0_0_0_1px_rgb(84_62_32/0.10)] dark:active:not-disabled:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14),0_0_0_1px_rgb(84_62_32/0.10)] dark:aria-expanded:bg-neutral-800 dark:aria-expanded:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] disabled:bg-none disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] disabled:text-neutral-900/40 disabled:shadow-none dark:disabled:bg-neutral-800/60 dark:disabled:text-neutral-100/40",
  eh = "h-10 gap-2 rounded-[calc(var(--rb-r-full,999px))] px-5 text-[15px]/[20px] font-bold",
  ek = "relative flex w-full min-w-0 cursor-text items-center rounded-[calc(var(--rb-r-xl,12px))] data-concentric:rounded-[var(--rb-r-5xl,22px)] border border-transparent bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] text-[15px]/[20px] font-medium text-neutral-900 transition-[border-color,box-shadow,background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:not-focus-within:not-has-[[aria-invalid=true]]:not-has-[input:disabled]:not-has-[input[readonly]]:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] focus-within:border-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] focus-within:bg-white focus-within:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] has-[[aria-invalid=true]]:border-[oklch(60%_0.236_26)] has-[[aria-invalid=true]]:bg-[oklch(97.5%_0.016_26)] has-[input:disabled]:cursor-not-allowed has-[input:disabled]:text-neutral-900/40 has-[input:disabled]:shadow-none has-[input[readonly]]:cursor-default has-[input[readonly]]:shadow-none dark:text-neutral-100 dark:hover:not-focus-within:not-has-[[aria-invalid=true]]:not-has-[input:disabled]:not-has-[input[readonly]]:bg-neutral-900 dark:focus-within:border-[var(--rb-accent,oklch(81%_0.16_163))] dark:focus-within:bg-neutral-900 dark:focus-within:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:has-[[aria-invalid=true]]:border-[oklch(65.2%_0.219_26)] dark:has-[[aria-invalid=true]]:bg-[oklch(26%_0.04_26)] dark:has-[input:disabled]:text-neutral-100/40",
  em = "h-10",
  ev = "h-full w-full min-w-0 flex-1 bg-transparent px-3.5 outline-none [[data-affix]+&]:ps-2 [&:has(+[data-affix])]:pe-2 placeholder:font-medium placeholder:text-neutral-900/55 disabled:cursor-not-allowed disabled:placeholder:text-neutral-900/30 dark:placeholder:text-neutral-100/55 dark:disabled:placeholder:text-neutral-100/30 dark:[color-scheme:dark]",
  eg = "flex shrink-0 items-center gap-2 text-[15px]/[20px] font-semibold text-neutral-900/62 dark:text-neutral-100/62 select-none first:ps-3.5 last:pe-3.5 has-[button]:first:ps-1 has-[button]:last:pe-1",
  ef = "text-neutral-900 dark:text-neutral-100",
  ew = "min-w-52 max-w-[min(480px,calc(100vw-2rem))] overflow-x-hidden overflow-y-auto overscroll-contain rounded-[calc(var(--rb-r-3xl,16px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] p-2 text-neutral-900 dark:text-neutral-100 outline-none shadow-[0_0_0_1px_rgb(84_62_32/0.08),0_24px_56px_-20px_rgb(84_62_32/0.34),0_6px_16px_-8px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.65),0_24px_56px_-16px_rgb(0_0_0/0.8)]",
  ey = "relative flex min-h-10 w-full cursor-default items-center gap-2.5 rounded-[calc(var(--rb-r-md,8px))] px-3 py-2 text-left text-[15px]/[20px] font-semibold text-neutral-900 outline-none select-none [&_svg]:shrink-0 [&_svg]:text-neutral-900/70 hover:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] focus-visible:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] data-[highlighted]:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-disabled:cursor-not-allowed aria-disabled:text-neutral-900/40 dark:text-neutral-100 dark:[&_svg]:text-neutral-100/70 dark:hover:bg-neutral-100/7 dark:focus-visible:bg-neutral-100/7 dark:data-[highlighted]:bg-neutral-100/7 dark:aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-disabled:text-neutral-100/40",
  ej = "h-10 border-b border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] px-3 text-left align-middle text-[13px]/[16px] font-bold tabular-nums whitespace-nowrap text-neutral-900/62 dark:text-neutral-100/62 first:ps-4 last:pe-4 dark:bg-neutral-100/4",
  eN = "h-12 border-b border-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] px-3 align-middle whitespace-nowrap text-neutral-900 dark:text-neutral-100 group-last:border-b-0 first:ps-4 last:pe-4 dark:border-neutral-100/6",
  ez = "text-right tabular-nums",
  eC = eb("text-[14px]/[20px] font-medium", ex),
  eS = eb("text-[13px]/[16px] font-semibold tabular-nums", ex),
  eA = eb(eu, "border border-transparent ring-1 ring-[rgb(84_62_32/0.1)] dark:ring-neutral-100/12", "rounded-[var(--rb-r-6xl,26px)]", "shadow-[0_0_0_1px_rgb(84_62_32/0.08),0_24px_56px_-20px_rgb(84_62_32/0.34),0_6px_16px_-8px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.65),0_24px_56px_-16px_rgb(0_0_0/0.8)]");
function eD({
  id: e,
  value: a,
  onChange: r,
  options: s,
  disabled: c,
  placeholder: d = "Select…",
  className: _,
  triggerClassName: b,
  leading: u,
  ariaLabel: x
}) {
  let p = (0, React.useId)(),
    [h, k] = (0, React.useState)(!1),
    [m, v] = (0, React.useState)(0),
    [g, f] = (0, React.useState)(!1),
    [w, y] = (0, React.useState)(),
    j = (0, React.useRef)(null),
    N = (0, React.useRef)(null),
    z = (0, React.useRef)({
      buffer: "",
      at: 0
    }),
    C = s.findIndex(e => e.value === a),
    S = C >= 0 ? s[C] : void 0,
    A = e => {
      if (c) return;
      let a = j.current,
        r = a?.ownerDocument.defaultView;
      if (a && r) {
        let e = a.getBoundingClientRect(),
          t = 0,
          l = r.innerHeight;
        for (let e = a.parentElement; e; e = e.parentElement) if (/auto|scroll|hidden|clip/.test(r.getComputedStyle(e).overflowY)) {
          let a = e.getBoundingClientRect();
          t = Math.max(t, a.top), l = Math.min(l, a.bottom);
          break;
        }
        let n = l - e.bottom,
          i = e.top - t,
          o = Math.min(32 * s.length + 8, 264),
          c = n < o + 8 && i > n,
          d = (c ? i : n) - 8;
        f(c), y(d < o ? Math.max(d, 40) : void 0);
      }
      v(e ?? (C >= 0 ? C : 0)), k(!0);
    };
  (0, React.useEffect)(() => {
    if (!h) return;
    let e = j.current,
      a = e?.ownerDocument;
    if (!a) return;
    let r = a => {
      e.contains(a.target) || k(!1);
    };
    return a.addEventListener("mousedown", r), a.addEventListener("touchstart", r), () => {
      a.removeEventListener("mousedown", r), a.removeEventListener("touchstart", r);
    };
  }, [h]), (0, React.useEffect)(() => {
    if (!h) return;
    let e = N.current,
      a = e?.querySelector(`[data-index="${m}"]`);
    if (!e || !a) return;
    let r = a.offsetTop,
      t = r + a.offsetHeight;
    r < e.scrollTop ? e.scrollTop = r : t > e.scrollTop + e.clientHeight && (e.scrollTop = t - e.clientHeight);
  }, [h, m]);
  let D = e => {
    let a = s[e];
    a && (r(a.value), k(!1), j.current?.querySelector("button")?.focus({
      preventScroll: !0
    }));
  };
  return <div ref={j} className={eb("relative", _)}><button id={e} type="button" role="combobox" aria-expanded={h} aria-controls={p} aria-haspopup="listbox" disabled={c} onClick={() => h ? k(!1) : A()} onKeyDown={e => {
      if (!c) {
        if (!h) {
          ["Enter", " ", "ArrowDown", "ArrowUp"].includes(e.key) && (e.preventDefault(), A());
          return;
        }
        if ("Escape" === e.key || "Tab" === e.key) {
          "Escape" === e.key && e.stopPropagation(), k(!1);
          return;
        }
        if ("ArrowDown" === e.key) e.preventDefault(), v(e => Math.min(e + 1, s.length - 1));else if ("ArrowUp" === e.key) e.preventDefault(), v(e => Math.max(e - 1, 0));else if ("Home" === e.key) e.preventDefault(), v(0);else if ("End" === e.key) e.preventDefault(), v(s.length - 1);else if ("Enter" === e.key || " " === e.key) e.preventDefault(), D(m);else if (1 === e.key.length && /\S/.test(e.key)) {
          let a = Date.now(),
            r = z.current;
          r.buffer = a - r.at > 700 ? e.key : r.buffer + e.key, r.at = a;
          let t = s.findIndex(e => e.label.toLowerCase().startsWith(r.buffer.toLowerCase()));
          t >= 0 && v(t);
        }
      }
    }} aria-label={x} className={eb("inline-flex h-10 w-fit min-w-40 cursor-pointer items-center justify-between gap-2 rounded-[calc(var(--rb-r-xl,12px))] border border-transparent bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] px-3.5 text-left text-[15px]/[20px] font-semibold whitespace-nowrap text-neutral-900 outline-none select-none transition-[border-color,box-shadow,background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:not-disabled:not-aria-invalid:not-aria-expanded:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] focus-visible:border-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] focus-visible:bg-white focus-visible:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-expanded:border-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] aria-expanded:bg-white aria-expanded:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-invalid:border-[oklch(60%_0.236_26)] disabled:cursor-not-allowed disabled:text-neutral-900/40 disabled:shadow-none dark:text-neutral-100 dark:hover:not-disabled:not-aria-invalid:not-aria-expanded:bg-neutral-900 dark:focus-visible:border-[var(--rb-accent,oklch(81%_0.16_163))] dark:focus-visible:bg-neutral-900 dark:focus-visible:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-expanded:border-[var(--rb-accent,oklch(81%_0.16_163))] dark:aria-expanded:bg-neutral-900 dark:aria-expanded:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-invalid:border-[oklch(65.2%_0.219_26)] dark:disabled:text-neutral-100/40", "w-full min-w-[100%]", b)}><span className="flex min-w-0 items-center gap-2">{u}<span className={eb("truncate", !S && "text-neutral-900/62 dark:text-neutral-100/62")}>{S ? S.label : d}</span></span><__mod_22728.n icon={__mod_31517.A} size={18} strokeWidth={2} aria-hidden="true" className="shrink-0 text-neutral-900/78 dark:text-neutral-100/78" /></button>{h && <ul ref={N} id={p} role="listbox" tabIndex={-1} style={{
      maxHeight: w
    }} className={eb(ew, "absolute z-30 max-h-[264px] w-full min-w-[100%]", g ? "bottom-full mb-1.5" : "top-full mt-1.5")}>{s.map((e, r) => {
        let l = e.value === a;
        return <li role="option" aria-selected={l} data-index={r} data-highlighted={r === m || void 0} onMouseEnter={() => v(r)} onClick={() => D(r)} className={eb(ey, "pe-8")}><span className="flex min-w-0 items-baseline gap-2"><span className="truncate">{e.label}</span>{e.hint && <span className={eb(eS, "shrink-0")}>{e.hint}</span>}</span>{l && <__mod_22728.n icon={__mod_90987.A} size={18} strokeWidth={2} aria-hidden="true" className="pointer-events-none absolute end-2" />}</li>;
      })}</ul>}</div>;
}
let eE = [{
    value: "lead",
    label: "Lead"
  }, {
    value: "qualified",
    label: "Qualified"
  }, {
    value: "proposal",
    label: "Proposal"
  }, {
    value: "negotiation",
    label: "Negotiation"
  }, {
    value: "won",
    label: "Won"
  }, {
    value: "lost",
    label: "Lost"
  }],
  eM = {
    lead: ef,
    qualified: ef,
    proposal: ef,
    negotiation: ef,
    won: "text-neutral-900/78 dark:text-neutral-100/78",
    lost: "text-neutral-900/62 dark:text-neutral-100/62"
  },
  eL = [{
    value: "amara",
    label: "Amara Osei",
    initials: "AO"
  }, {
    value: "raj",
    label: "Raj Patel",
    initials: "RP"
  }, {
    value: "lena",
    label: "Lena Fischer",
    initials: "LF"
  }, {
    value: "marco",
    label: "Marco Bianchi",
    initials: "MB"
  }],
  eR = eL.map(e => ({
    value: e.value,
    label: e.label
  })),
  eP = [{
    id: "d1",
    name: "Harborline renewal",
    company: "Harborline Supply",
    stage: "negotiation",
    owner: "amara",
    value: 48e3,
    close: "Aug 14",
    probability: 70
  }, {
    id: "d2",
    name: "Meridian expansion",
    company: "Meridian Labs",
    stage: "proposal",
    owner: "raj",
    value: 32e3,
    close: "Aug 22",
    probability: 55
  }, {
    id: "d3",
    name: "Kestrel pilot",
    company: "Kestrel Robotics",
    stage: "qualified",
    owner: "lena",
    value: 12e3,
    close: "Sep 03",
    probability: 30
  }, {
    id: "d4",
    name: "Foxglove migration",
    company: "Foxglove Media",
    stage: "negotiation",
    owner: "marco",
    value: 76e3,
    close: "Aug 09",
    probability: 80
  }, {
    id: "d5",
    name: "Anvil onboarding",
    company: "Anvil Logistics",
    stage: "lead",
    owner: "amara",
    value: 8e3,
    close: "Sep 18",
    probability: 15
  }, {
    id: "d6",
    name: "Cobalt upsell",
    company: "Cobalt Health",
    stage: "proposal",
    owner: "raj",
    value: 21e3,
    close: "Aug 28",
    probability: 50
  }, {
    id: "d7",
    name: "Rivermark deal",
    company: "Rivermark Foods",
    stage: "won",
    owner: "lena",
    value: 54e3,
    close: "Jul 30",
    probability: 100
  }, {
    id: "d8",
    name: "Two Rivers expansion",
    company: "Two Rivers Coffee",
    stage: "qualified",
    owner: "marco",
    value: 15500,
    close: "Sep 11",
    probability: 35
  }, {
    id: "d9",
    name: "Stonepath platform",
    company: "Stonepath Systems",
    stage: "negotiation",
    owner: "amara",
    value: 12e4,
    close: "Aug 05",
    probability: 65
  }, {
    id: "d10",
    name: "Verdant build",
    company: "Verdant Studio",
    stage: "lead",
    owner: "raj",
    value: 6500,
    close: "Sep 25",
    probability: 10
  }, {
    id: "d11",
    name: "Silt & Vine renewal",
    company: "Silt & Vine",
    stage: "proposal",
    owner: "lena",
    value: 28e3,
    close: "Aug 19",
    probability: 60
  }, {
    id: "d12",
    name: "Summit Chalet retrofit",
    company: "Summit Chalet",
    stage: "lost",
    owner: "marco",
    value: 4e4,
    close: "Jul 22",
    probability: 0
  }, {
    id: "d13",
    name: "Skyward rollout",
    company: "Skyward Air",
    stage: "negotiation",
    owner: "amara",
    value: 95e3,
    close: "Aug 12",
    probability: 75
  }, {
    id: "d14",
    name: "Marginalia upgrade",
    company: "Marginalia Press",
    stage: "qualified",
    owner: "raj",
    value: 18e3,
    close: "Sep 08",
    probability: 40
  }, {
    id: "d15",
    name: "Longitude booking suite",
    company: "Longitude Travel",
    stage: "proposal",
    owner: "lena",
    value: 24500,
    close: "Aug 30",
    probability: 45
  }, {
    id: "d16",
    name: "Thornbury financing",
    company: "Thornbury Bank",
    stage: "won",
    owner: "marco",
    value: 67e3,
    close: "Jul 28",
    probability: 100
  }, {
    id: "d17",
    name: "Halden Research POC",
    company: "Halden Research",
    stage: "lead",
    owner: "amara",
    value: 9500,
    close: "Sep 20",
    probability: 20
  }, {
    id: "d18",
    name: "Fine Arts curriculum",
    company: "Fine Arts Collective",
    stage: "qualified",
    owner: "raj",
    value: 13500,
    close: "Sep 14",
    probability: 25
  }],
  eT = [{
    value: "stage",
    label: "Stage",
    kind: "enum",
    operators: ["is", "is_not"],
    options: eE
  }, {
    value: "owner",
    label: "Owner",
    kind: "enum",
    operators: ["is", "is_not"],
    options: eR
  }, {
    value: "company",
    label: "Company",
    kind: "text",
    operators: ["contains", "not_contains"]
  }, {
    value: "value",
    label: "Deal value",
    kind: "number",
    operators: ["gt", "lt"]
  }, {
    value: "probability",
    label: "Probability",
    kind: "number",
    operators: ["gt", "lt"]
  }],
  eW = {
    is: "is",
    is_not: "is not",
    contains: "contains",
    not_contains: "does not contain",
    gt: "greater than",
    lt: "less than"
  },
  eH = eT.map(e => ({
    value: e.value,
    label: e.label
  })),
  e$ = e => eT.find(a => a.value === e),
  eq = e => `$${e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`,
  eI = e => {
    let a = e$(e);
    return "enum" === a.kind ? a.options?.[0]?.value ?? "" : "";
  },
  eB = 0,
  eF = () => `q${eB += 1}`,
  eK = [{
    value: "all",
    label: "All deals",
    build: () => []
  }, {
    value: "mine",
    label: "My deals",
    build: () => [{
      id: eF(),
      field: "owner",
      operator: "is",
      value: "amara"
    }]
  }, {
    value: "late",
    label: "Late stage",
    build: () => [{
      id: eF(),
      field: "stage",
      operator: "is",
      value: "negotiation"
    }]
  }, {
    value: "high",
    label: "High value",
    build: () => [{
      id: eF(),
      field: "value",
      operator: "gt",
      value: "50000"
    }]
  }];
let eU = (...e) => e.filter(Boolean).join(" "),
  eV = "text-neutral-900/62 dark:text-neutral-100/62",
  eG = "h-10 gap-2 rounded-[calc(var(--rb-r-full,999px))] px-5 text-[15px]/[20px] font-bold",
  eQ = "relative flex w-full min-w-0 cursor-text items-center rounded-[calc(var(--rb-r-xl,12px))] data-concentric:rounded-[var(--rb-r-5xl,22px)] border border-transparent bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] text-[15px]/[20px] font-medium text-neutral-900 transition-[border-color,box-shadow,background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:not-focus-within:not-has-[[aria-invalid=true]]:not-has-[input:disabled]:not-has-[input[readonly]]:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] focus-within:border-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] focus-within:bg-white focus-within:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] has-[[aria-invalid=true]]:border-[oklch(60%_0.236_26)] has-[[aria-invalid=true]]:bg-[oklch(97.5%_0.016_26)] has-[input:disabled]:cursor-not-allowed has-[input:disabled]:text-neutral-900/40 has-[input:disabled]:shadow-none has-[input[readonly]]:cursor-default has-[input[readonly]]:shadow-none dark:text-neutral-100 dark:hover:not-focus-within:not-has-[[aria-invalid=true]]:not-has-[input:disabled]:not-has-[input[readonly]]:bg-neutral-900 dark:focus-within:border-[var(--rb-accent,oklch(81%_0.16_163))] dark:focus-within:bg-neutral-900 dark:focus-within:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:has-[[aria-invalid=true]]:border-[oklch(65.2%_0.219_26)] dark:has-[[aria-invalid=true]]:bg-[oklch(26%_0.04_26)] dark:has-[input:disabled]:text-neutral-100/40",
  eX = "h-10",
  eY = "h-full w-full min-w-0 flex-1 bg-transparent px-3.5 outline-none [[data-affix]+&]:ps-2 [&:has(+[data-affix])]:pe-2 placeholder:font-medium placeholder:text-neutral-900/55 disabled:cursor-not-allowed disabled:placeholder:text-neutral-900/30 dark:placeholder:text-neutral-100/55 dark:disabled:placeholder:text-neutral-100/30 dark:[color-scheme:dark]",
  eJ = "flex shrink-0 items-center gap-2 text-[15px]/[20px] font-semibold text-neutral-900/62 dark:text-neutral-100/62 select-none first:ps-3.5 last:pe-3.5 has-[button]:first:ps-1 has-[button]:last:pe-1",
  eZ = "relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] text-neutral-900 dark:text-neutral-100 shadow-[0_0_0_1px_rgb(84_62_32/0.07),0_1px_2px_rgb(84_62_32/0.06),0_8px_22px_-10px_rgb(84_62_32/0.20)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_0_0_1px_rgb(0_0_0/0.6),0_10px_24px_-12px_rgb(0_0_0/0.8)]",
  e0 = "inline-flex h-8 cursor-pointer items-center rounded-[calc(var(--rb-r-full,999px))] px-3 text-[14px]/[18px] font-bold text-neutral-900/78 dark:text-neutral-100/78 transition-[background-color,color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-neutral-900/5 hover:text-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:hover:bg-neutral-100/6 dark:hover:text-neutral-100",
  e1 = "bg-linear-to-b from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))]",
  e2 = "bg-linear-to-t from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))]",
  e5 = eU("text-[14px]/[20px] font-medium", eV),
  e6 = eU("text-[13px]/[16px] font-semibold tabular-nums", eV);
function e8({
  id: e,
  value: a,
  onChange: r,
  options: s,
  disabled: c,
  placeholder: d = "Select…",
  className: _,
  triggerClassName: b,
  leading: u,
  ariaLabel: x
}) {
  let p = (0, React.useId)(),
    [h, k] = (0, React.useState)(!1),
    [m, v] = (0, React.useState)(0),
    [g, f] = (0, React.useState)(!1),
    [w, y] = (0, React.useState)(),
    j = (0, React.useRef)(null),
    N = (0, React.useRef)(null),
    z = (0, React.useRef)({
      buffer: "",
      at: 0
    }),
    C = s.findIndex(e => e.value === a),
    S = C >= 0 ? s[C] : void 0,
    A = e => {
      if (c) return;
      let a = j.current,
        r = a?.ownerDocument.defaultView;
      if (a && r) {
        let e = a.getBoundingClientRect(),
          t = 0,
          l = r.innerHeight;
        for (let e = a.parentElement; e; e = e.parentElement) if (/auto|scroll|hidden|clip/.test(r.getComputedStyle(e).overflowY)) {
          let a = e.getBoundingClientRect();
          t = Math.max(t, a.top), l = Math.min(l, a.bottom);
          break;
        }
        let n = l - e.bottom,
          i = e.top - t,
          o = Math.min(32 * s.length + 8, 264),
          c = n < o + 8 && i > n,
          d = (c ? i : n) - 8;
        f(c), y(d < o ? Math.max(d, 40) : void 0);
      }
      v(e ?? (C >= 0 ? C : 0)), k(!0);
    };
  (0, React.useEffect)(() => {
    if (!h) return;
    let e = j.current,
      a = e?.ownerDocument;
    if (!a) return;
    let r = a => {
      e.contains(a.target) || k(!1);
    };
    return a.addEventListener("mousedown", r), a.addEventListener("touchstart", r), () => {
      a.removeEventListener("mousedown", r), a.removeEventListener("touchstart", r);
    };
  }, [h]), (0, React.useEffect)(() => {
    if (!h) return;
    let e = N.current,
      a = e?.querySelector(`[data-index="${m}"]`);
    if (!e || !a) return;
    let r = a.offsetTop,
      t = r + a.offsetHeight;
    r < e.scrollTop ? e.scrollTop = r : t > e.scrollTop + e.clientHeight && (e.scrollTop = t - e.clientHeight);
  }, [h, m]);
  let D = e => {
    let a = s[e];
    a && (r(a.value), k(!1), j.current?.querySelector("button")?.focus({
      preventScroll: !0
    }));
  };
  return <div ref={j} className={eU("relative", _)}><button id={e} type="button" role="combobox" aria-expanded={h} aria-controls={p} aria-haspopup="listbox" disabled={c} onClick={() => h ? k(!1) : A()} onKeyDown={e => {
      if (!c) {
        if (!h) {
          ["Enter", " ", "ArrowDown", "ArrowUp"].includes(e.key) && (e.preventDefault(), A());
          return;
        }
        if ("Escape" === e.key || "Tab" === e.key) {
          "Escape" === e.key && e.stopPropagation(), k(!1);
          return;
        }
        if ("ArrowDown" === e.key) e.preventDefault(), v(e => Math.min(e + 1, s.length - 1));else if ("ArrowUp" === e.key) e.preventDefault(), v(e => Math.max(e - 1, 0));else if ("Home" === e.key) e.preventDefault(), v(0);else if ("End" === e.key) e.preventDefault(), v(s.length - 1);else if ("Enter" === e.key || " " === e.key) e.preventDefault(), D(m);else if (1 === e.key.length && /\S/.test(e.key)) {
          let a = Date.now(),
            r = z.current;
          r.buffer = a - r.at > 700 ? e.key : r.buffer + e.key, r.at = a;
          let t = s.findIndex(e => e.label.toLowerCase().startsWith(r.buffer.toLowerCase()));
          t >= 0 && v(t);
        }
      }
    }} aria-label={x} className={eU("inline-flex h-10 w-fit min-w-40 cursor-pointer items-center justify-between gap-2 rounded-[calc(var(--rb-r-xl,12px))] border border-transparent bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] px-3.5 text-left text-[15px]/[20px] font-semibold whitespace-nowrap text-neutral-900 outline-none select-none transition-[border-color,box-shadow,background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:not-disabled:not-aria-invalid:not-aria-expanded:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] focus-visible:border-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] focus-visible:bg-white focus-visible:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-expanded:border-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] aria-expanded:bg-white aria-expanded:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-invalid:border-[oklch(60%_0.236_26)] disabled:cursor-not-allowed disabled:text-neutral-900/40 disabled:shadow-none dark:text-neutral-100 dark:hover:not-disabled:not-aria-invalid:not-aria-expanded:bg-neutral-900 dark:focus-visible:border-[var(--rb-accent,oklch(81%_0.16_163))] dark:focus-visible:bg-neutral-900 dark:focus-visible:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-expanded:border-[var(--rb-accent,oklch(81%_0.16_163))] dark:aria-expanded:bg-neutral-900 dark:aria-expanded:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-invalid:border-[oklch(65.2%_0.219_26)] dark:disabled:text-neutral-100/40", "w-full min-w-[100%]", b)}><span className="flex min-w-0 items-center gap-2">{u}<span className={eU("truncate", !S && "text-neutral-900/62 dark:text-neutral-100/62")}>{S ? S.label : d}</span></span><__mod_22728.n icon={__mod_31517.A} size={18} strokeWidth={2} aria-hidden="true" className="shrink-0 text-neutral-900/78 dark:text-neutral-100/78" /></button>{h && <ul ref={N} id={p} role="listbox" tabIndex={-1} style={{
      maxHeight: w
    }} className={eU("min-w-52 max-w-[min(480px,calc(100vw-2rem))] overflow-x-hidden overflow-y-auto overscroll-contain rounded-[calc(var(--rb-r-3xl,16px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] p-2 text-neutral-900 dark:text-neutral-100 outline-none shadow-[0_0_0_1px_rgb(84_62_32/0.08),0_24px_56px_-20px_rgb(84_62_32/0.34),0_6px_16px_-8px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.65),0_24px_56px_-16px_rgb(0_0_0/0.8)]", "absolute z-30 max-h-[264px] w-full min-w-[100%]", g ? "bottom-full mb-1.5" : "top-full mt-1.5")}>{s.map((e, r) => {
        let l = e.value === a;
        return <li role="option" aria-selected={l} data-index={r} data-highlighted={r === m || void 0} onMouseEnter={() => v(r)} onClick={() => D(r)} className={eU("relative flex min-h-10 w-full cursor-default items-center gap-2.5 rounded-[calc(var(--rb-r-md,8px))] px-3 py-2 text-left text-[15px]/[20px] font-semibold text-neutral-900 outline-none select-none [&_svg]:shrink-0 [&_svg]:text-neutral-900/70 hover:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] focus-visible:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] data-[highlighted]:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-disabled:cursor-not-allowed aria-disabled:text-neutral-900/40 dark:text-neutral-100 dark:[&_svg]:text-neutral-100/70 dark:hover:bg-neutral-100/7 dark:focus-visible:bg-neutral-100/7 dark:data-[highlighted]:bg-neutral-100/7 dark:aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-disabled:text-neutral-100/40", "pe-8")}><span className="flex min-w-0 items-baseline gap-2"><span className="truncate">{e.label}</span>{e.hint && <span className={eU(e6, "shrink-0")}>{e.hint}</span>}</span>{l && <__mod_22728.n icon={__mod_90987.A} size={18} strokeWidth={2} aria-hidden="true" className="pointer-events-none absolute end-2" />}</li>;
      })}</ul>}</div>;
}
function e4(e = !0) {
  let a = (0, React.useRef)(null),
    [r, t] = (0, React.useState)({
      start: !1,
      end: !1
    }),
    n = (0, React.useCallback)(() => {
      let e = a.current;
      if (!e) return;
      let {
        scrollTop: r,
        scrollHeight: l,
        clientHeight: n
      } = e;
      t({
        start: r > 1,
        end: Math.ceil(r + n) < l - 1
      });
    }, []);
  return (0, React.useEffect)(() => {
    n();
    let e = a.current,
      r = e?.ownerDocument.defaultView;
    if (!e || !r?.ResizeObserver) return;
    let t = new r.ResizeObserver(n);
    return t.observe(e), () => t.disconnect();
  }, [n, e]), {
    ref: a,
    edges: r,
    onScroll: n
  };
}
let e9 = [{
    value: "debug",
    label: "Debug",
    tone: eV
  }, {
    value: "info",
    label: "Info",
    tone: "text-neutral-900/78 dark:text-neutral-100/78"
  }, {
    value: "warn",
    label: "Warn",
    tone: "text-[oklch(49%_0.1_68)] dark:text-[oklch(80%_0.13_68)]"
  }, {
    value: "error",
    label: "Error",
    tone: "text-[oklch(51%_0.18_26)] dark:text-[oklch(76%_0.14_26)]"
  }],
  e3 = Object.fromEntries(e9.map(e => [e.value, e])),
  e7 = [{
    value: "api-gateway",
    label: "api-gateway"
  }, {
    value: "auth-service",
    label: "auth-service"
  }, {
    value: "payments",
    label: "payments"
  }, {
    value: "checkout",
    label: "checkout"
  }, {
    value: "search-indexer",
    label: "search-indexer"
  }, {
    value: "notifications",
    label: "notifications"
  }, {
    value: "scheduler",
    label: "scheduler"
  }, {
    value: "cdn-edge",
    label: "cdn-edge"
  }],
  ae = [{
    value: "15",
    label: "Last 15 minutes"
  }, {
    value: "60",
    label: "Last hour"
  }, {
    value: "240",
    label: "Last 4 hours"
  }, {
    value: "1440",
    label: "Last 24 hours"
  }],
  aa = [{
    id: "l01",
    minutesAgo: 1,
    sec: 8,
    level: "error",
    service: "payments",
    message: "Charge declined: gateway returned 402 for intent pi_3Qa"
  }, {
    id: "l02",
    minutesAgo: 2,
    sec: 41,
    level: "info",
    service: "checkout",
    message: "Order osq_8841 moved to state confirmed"
  }, {
    id: "l03",
    minutesAgo: 3,
    sec: 12,
    level: "warn",
    service: "api-gateway",
    message: "Upstream latency 1420ms exceeded p95 budget of 800ms"
  }, {
    id: "l04",
    minutesAgo: 4,
    sec: 55,
    level: "info",
    service: "auth-service",
    message: "Issued access token for user 44182, scope read:profile"
  }, {
    id: "l05",
    minutesAgo: 5,
    sec: 3,
    level: "debug",
    service: "search-indexer",
    message: "Flushed 512 documents to shard idx-03 in 84ms"
  }, {
    id: "l06",
    minutesAgo: 6,
    sec: 27,
    level: "info",
    service: "notifications",
    message: "Delivered email receipt to queue, template order_paid"
  }, {
    id: "l07",
    minutesAgo: 8,
    sec: 19,
    level: "warn",
    service: "auth-service",
    message: "Rate limit reached for client mobile-ios, throttling 30s"
  }, {
    id: "l08",
    minutesAgo: 9,
    sec: 46,
    level: "info",
    service: "api-gateway",
    message: "Routed GET /v2/catalog to region eu-west-1"
  }, {
    id: "l09",
    minutesAgo: 11,
    sec: 2,
    level: "debug",
    service: "scheduler",
    message: "Tick 90210 processed 3 due jobs, next run in 60s"
  }, {
    id: "l10",
    minutesAgo: 12,
    sec: 33,
    level: "error",
    service: "search-indexer",
    message: "Reindex job failed: connection reset by shard idx-07"
  }, {
    id: "l11",
    minutesAgo: 14,
    sec: 9,
    level: "info",
    service: "payments",
    message: "Refund rf_2210 settled for order osq_8109"
  }, {
    id: "l12",
    minutesAgo: 16,
    sec: 51,
    level: "info",
    service: "cdn-edge",
    message: "Cache hit ratio 0.94 for asset bundle app.4c2.js"
  }, {
    id: "l13",
    minutesAgo: 18,
    sec: 24,
    level: "debug",
    service: "checkout",
    message: "Validated cart snapshot with 4 line items, subtotal 128.40"
  }, {
    id: "l14",
    minutesAgo: 21,
    sec: 7,
    level: "warn",
    service: "payments",
    message: "Retrying webhook delivery to merchant m_5521, attempt 2 of 5"
  }, {
    id: "l15",
    minutesAgo: 23,
    sec: 38,
    level: "info",
    service: "notifications",
    message: "Push token refreshed for device 8f21ac, platform android"
  }, {
    id: "l16",
    minutesAgo: 26,
    sec: 14,
    level: "info",
    service: "api-gateway",
    message: "Handled 1284 requests in window, error rate 0.3%"
  }, {
    id: "l17",
    minutesAgo: 29,
    sec: 59,
    level: "debug",
    service: "auth-service",
    message: "Rotated signing key kid-19, previous kept for 24h grace"
  }, {
    id: "l18",
    minutesAgo: 33,
    sec: 5,
    level: "error",
    service: "checkout",
    message: "Inventory oversold for sku TS-114, reserved 3 over stock"
  }, {
    id: "l19",
    minutesAgo: 37,
    sec: 42,
    level: "info",
    service: "scheduler",
    message: "Enqueued nightly digest job for 12840 subscribers"
  }, {
    id: "l20",
    minutesAgo: 41,
    sec: 18,
    level: "warn",
    service: "cdn-edge",
    message: "Origin fetch slow: 2100ms for region ap-south-1"
  }, {
    id: "l21",
    minutesAgo: 45,
    sec: 30,
    level: "info",
    service: "payments",
    message: "Captured payment pi_3Qb for amount 64.00 USD"
  }, {
    id: "l22",
    minutesAgo: 49,
    sec: 11,
    level: "debug",
    service: "search-indexer",
    message: "Merged segments on idx-01, freed 240MB of heap"
  }, {
    id: "l23",
    minutesAgo: 54,
    sec: 47,
    level: "info",
    service: "auth-service",
    message: "Password reset link generated for user 20915"
  }, {
    id: "l24",
    minutesAgo: 58,
    sec: 22,
    level: "warn",
    service: "api-gateway",
    message: "Circuit half-open for upstream catalog after 3 failures"
  }, {
    id: "l25",
    minutesAgo: 64,
    sec: 6,
    level: "info",
    service: "notifications",
    message: "SMS provider switched to fallback carrier for +44 numbers"
  }, {
    id: "l26",
    minutesAgo: 71,
    sec: 39,
    level: "error",
    service: "auth-service",
    message: "Token verification failed: signature mismatch on kid-17"
  }, {
    id: "l27",
    minutesAgo: 78,
    sec: 15,
    level: "info",
    service: "checkout",
    message: "Coupon SPRING20 applied to order osq_7742"
  }, {
    id: "l28",
    minutesAgo: 85,
    sec: 52,
    level: "debug",
    service: "scheduler",
    message: "Skipped job cleanup-tmp, already ran this hour"
  }, {
    id: "l29",
    minutesAgo: 92,
    sec: 28,
    level: "info",
    service: "cdn-edge",
    message: "Purged 812 objects for tag release-2024-06"
  }, {
    id: "l30",
    minutesAgo: 100,
    sec: 4,
    level: "warn",
    service: "payments",
    message: "Fraud score 0.72 above threshold for order osq_7610"
  }, {
    id: "l31",
    minutesAgo: 108,
    sec: 44,
    level: "info",
    service: "api-gateway",
    message: "TLS handshake renegotiated for client edge-pool-2"
  }, {
    id: "l32",
    minutesAgo: 117,
    sec: 20,
    level: "debug",
    service: "search-indexer",
    message: "Warm query cache primed with 1280 top terms"
  }, {
    id: "l33",
    minutesAgo: 126,
    sec: 57,
    level: "info",
    service: "notifications",
    message: "Batched 340 in-app notices for digest window"
  }, {
    id: "l34",
    minutesAgo: 135,
    sec: 33,
    level: "error",
    service: "cdn-edge",
    message: "Edge node ap-1 unreachable, draining traffic to ap-2"
  }, {
    id: "l35",
    minutesAgo: 146,
    sec: 9,
    level: "info",
    service: "checkout",
    message: "Guest session upgraded to account for user 45120"
  }, {
    id: "l36",
    minutesAgo: 158,
    sec: 48,
    level: "warn",
    service: "scheduler",
    message: "Job queue depth 1420 growing, workers scaled to 12"
  }, {
    id: "l37",
    minutesAgo: 170,
    sec: 25,
    level: "info",
    service: "payments",
    message: "Payout batch pb_0912 initiated for 84 merchants"
  }, {
    id: "l38",
    minutesAgo: 183,
    sec: 1,
    level: "debug",
    service: "auth-service",
    message: "Session store evicted 90 idle entries older than 30m"
  }, {
    id: "l39",
    minutesAgo: 197,
    sec: 36,
    level: "info",
    service: "api-gateway",
    message: "Config reloaded, 6 routes updated without downtime"
  }, {
    id: "l40",
    minutesAgo: 210,
    sec: 13,
    level: "warn",
    service: "search-indexer",
    message: "Query timeout on idx-05, returned partial results to caller"
  }, {
    id: "l41",
    minutesAgo: 224,
    sec: 50,
    level: "info",
    service: "notifications",
    message: "Webhook subscriber wh_44 re-subscribed to order events"
  }, {
    id: "l42",
    minutesAgo: 236,
    sec: 17,
    level: "info",
    service: "cdn-edge",
    message: "Compression enabled for text assets on region us-east-1"
  }],
  ar = e => String(e).padStart(2, "0"),
  at = {
    levels: [],
    services: [],
    range: "240",
    query: ""
  },
  al = (e, a, r) => !("levels" !== r && a.levels.length && !a.levels.includes(e.level) || "services" !== r && a.services.length && !a.services.includes(e.service) || "range" !== r && e.minutesAgo > Number(a.range) || "query" !== r && a.query.trim() && !e.message.toLowerCase().includes(a.query.trim().toLowerCase()));
function an({
  selected: e,
  counts: a,
  onToggle: r,
  onClear: i
}) {
  let [s, c] = (0, React.useState)(!1),
    [d, _] = (0, React.useState)(""),
    b = (0, React.useRef)(null),
    {
      ref: u,
      edges: x,
      onScroll: p
    } = e4(s);
  (0, React.useEffect)(() => {
    if (!s) return;
    let e = b.current,
      a = e?.ownerDocument;
    if (!a) return;
    let r = a => {
        e.contains(a.target) || c(!1);
      },
      t = e => {
        "Escape" === e.key && c(!1);
      };
    return a.addEventListener("mousedown", r), a.addEventListener("touchstart", r), a.addEventListener("keydown", t), () => {
      a.removeEventListener("mousedown", r), a.removeEventListener("touchstart", r), a.removeEventListener("keydown", t);
    };
  }, [s]);
  let h = e7.filter(e => e.label.toLowerCase().includes(d.trim().toLowerCase()));
  return <div ref={b} className="relative"><button type="button" aria-expanded={s} aria-haspopup="dialog" onClick={() => c(e => !e)} className={eU("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] text-neutral-900 dark:text-neutral-100 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] active:not-disabled:translate-y-px active:not-disabled:shadow-[inset_0_1px_3px_rgb(84_62_32/0.16),0_0_0_1px_rgb(84_62_32/0.10)] dark:active:not-disabled:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14),0_0_0_1px_rgb(84_62_32/0.10)] dark:aria-expanded:bg-neutral-800 dark:aria-expanded:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] disabled:bg-none disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] disabled:text-neutral-900/40 disabled:shadow-none dark:disabled:bg-neutral-800/60 dark:disabled:text-neutral-100/40", eG)}><__mod_22728.n icon={__mod_90089.A} size={18} strokeWidth={2} aria-hidden="true" />Services{e.length > 0 && <span className={eU("inline-flex h-5.5 min-w-5.5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden whitespace-nowrap rounded-[calc(var(--rb-r-full,999px))] px-2.5 text-[12px]/[16px] font-bold tabular-nums", "bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] text-neutral-900 dark:text-neutral-100 dark:bg-neutral-100/12")}>{e.length}</span>}</button>{s && <div role="dialog" aria-label="Filter by service" className={eU("flex max-h-80 w-72 max-w-[calc(100vw-2rem)] flex-col gap-3 overflow-y-auto rounded-[calc(var(--rb-r-3xl,16px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] p-4 text-[15px]/[22px] font-medium text-neutral-900 dark:text-neutral-100 outline-none shadow-[0_0_0_1px_rgb(84_62_32/0.08),0_24px_56px_-20px_rgb(84_62_32/0.34),0_6px_16px_-8px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.65),0_24px_56px_-16px_rgb(0_0_0/0.8)]", "absolute left-0 top-full z-30 mt-1.5 w-[264px] max-h-[none]")}><div className={eU(eQ, eX)}><span data-affix={!0} className={eJ}><__mod_22728.n icon={__mod_66575.A} size={18} strokeWidth={2} aria-hidden="true" /></span><input value={d} onChange={e => _(e.target.value)} placeholder="Search services…" aria-label="Search services" className={eY} /></div><div className="relative -mx-2"><ul ref={u} onScroll={p} className="max-h-[220px] space-y-0.5 overflow-y-auto">{h.map(l => {
            let i = e.includes(l.value),
              s = a[l.value] ?? 0;
            return <li><label className={eU("flex h-10 w-full min-w-0 cursor-pointer items-center gap-2.5 rounded-[calc(var(--rb-r-full,999px))] px-3 text-left text-[15px]/[20px] font-semibold text-neutral-900/75 transition-[background-color,box-shadow,color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] [&_svg]:shrink-0 hover:bg-neutral-900/5 hover:text-neutral-900 aria-[current=page]:bg-white aria-[current=page]:font-bold aria-[current=page]:text-neutral-900 aria-[current=page]:shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:text-neutral-100/75 dark:hover:bg-neutral-100/6 dark:hover:text-neutral-100 dark:aria-[current=page]:bg-[color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800))] dark:aria-[current=page]:text-neutral-100 dark:aria-[current=page]:shadow-[inset_0_1px_0_rgb(255_255_255/0.08),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)]", 0 === s && !i && "opacity-40")}><span className="relative inline-flex size-[18px] shrink-0 items-center justify-center"><input type="checkbox" checked={i} onChange={() => r(l.value)} className="peer size-[18px] shrink-0 cursor-pointer appearance-none rounded-[calc(var(--rb-r-sm,6px))] border-2 border-neutral-900/28 bg-white transition-[background-color,border-color,box-shadow,outline-color,scale] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:scale-[0.86] motion-reduce:active:scale-100 hover:not-checked:not-disabled:border-neutral-900/60 active:not-checked:bg-neutral-900/8 checked:border-transparent checked:bg-[var(--rb-accent,oklch(84%_0.15_165))] indeterminate:border-transparent indeterminate:bg-[var(--rb-accent,oklch(84%_0.15_165))] checked:shadow-[inset_0_1px_0_rgb(255_255_255/0.4),inset_0_-1.5px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] indeterminate:shadow-[inset_0_1px_0_rgb(255_255_255/0.4),inset_0_-1.5px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] aria-invalid:border-[oklch(60%_0.236_26)] disabled:cursor-not-allowed disabled:border-neutral-900/20 disabled:checked:bg-neutral-900/25 disabled:checked:shadow-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:border-neutral-100/34 dark:bg-neutral-900 dark:hover:not-checked:not-disabled:border-neutral-100/70 dark:active:not-checked:bg-neutral-100/10 dark:checked:bg-[var(--rb-accent,oklch(81%_0.16_163))] dark:indeterminate:bg-[var(--rb-accent,oklch(81%_0.16_163))] dark:checked:shadow-none dark:indeterminate:shadow-none dark:aria-invalid:border-[oklch(65.2%_0.219_26)] dark:disabled:border-neutral-100/24 dark:disabled:checked:bg-neutral-100/28" /><__mod_22728.n icon={__mod_90987.A} size={14} strokeWidth={2.5} aria-hidden="true" className="pointer-events-none absolute scale-50 text-[var(--rb-accent-fg,oklch(26%_0.06_168))] opacity-0 transition-[opacity,scale] duration-[260ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] peer-checked:scale-100 peer-checked:opacity-100 peer-indeterminate:scale-100 peer-indeterminate:opacity-100 peer-active:scale-[0.86] motion-reduce:transition-none dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))]" /></span><span className={eU("font-mono text-[12px]/[16px] tabular-nums", "min-w-0 flex-1 truncate")}>{l.label}</span><span className={eU("ms-auto text-[13px]/[16px] font-bold tabular-nums text-neutral-900/62 dark:text-neutral-100/62", "shrink-0")}>{s}</span></label></li>;
          })}{0 === h.length && <li className={eU(e5, "px-2 py-6 text-center")}>No services match “{d}”</li>}</ul><div aria-hidden="true" className={eU(e1, "pointer-events-none absolute inset-x-0 top-0 h-8", x.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={eU(e2, "pointer-events-none absolute inset-x-0 bottom-0 h-8", x.end ? "opacity-100" : "opacity-0")} /></div>{e.length > 0 && <div className={eU("border-t border-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:border-neutral-100/7", "flex justify-end pt-1.5")}><button type="button" onClick={i} className={e0}>Clear services</button></div>}</div>}</div>;
}
let ad = (...e) => e.filter(Boolean).join(" "),
  a_ = "text-neutral-900/62 dark:text-neutral-100/62",
  ab = "text-[15px]/[20px] font-bold",
  au = "relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] text-neutral-900 dark:text-neutral-100 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] active:not-disabled:translate-y-px active:not-disabled:shadow-[inset_0_1px_3px_rgb(84_62_32/0.16),0_0_0_1px_rgb(84_62_32/0.10)] dark:active:not-disabled:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14),0_0_0_1px_rgb(84_62_32/0.10)] dark:aria-expanded:bg-neutral-800 dark:aria-expanded:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] disabled:bg-none disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] disabled:text-neutral-900/40 disabled:shadow-none dark:disabled:bg-neutral-800/60 dark:disabled:text-neutral-100/40",
  ax = "h-10 gap-2 rounded-[calc(var(--rb-r-full,999px))] px-5 text-[15px]/[20px] font-bold",
  ap = "size-10 rounded-[calc(var(--rb-r-full,999px))]",
  ah = "relative inline-flex h-8 max-w-full min-w-0 shrink-0 cursor-pointer items-center gap-1.5 whitespace-nowrap rounded-[calc(var(--rb-r-full,999px))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] px-3.5 text-[14px]/[18px] font-bold text-neutral-900 dark:text-neutral-100 select-none transition-[background-color,border-color,box-shadow,color,scale,translate,outline-color] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:translate-y-px active:duration-[90ms] motion-reduce:active:translate-y-0 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] aria-pressed:bg-none aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-pressed:shadow-[inset_0_0_0_1.5px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14)] disabled:cursor-not-allowed disabled:text-neutral-900/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-pressed:shadow-[inset_0_0_0_1.5px_var(--rb-accent,oklch(81%_0.16_163))] dark:aria-expanded:bg-neutral-800 dark:disabled:text-neutral-100/40",
  ak = "relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] text-neutral-900 dark:text-neutral-100 shadow-[0_0_0_1px_rgb(84_62_32/0.07),0_1px_2px_rgb(84_62_32/0.06),0_8px_22px_-10px_rgb(84_62_32/0.20)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_0_0_1px_rgb(0_0_0/0.6),0_10px_24px_-12px_rgb(0_0_0/0.8)]",
  am = "inline-flex h-8 cursor-pointer items-center rounded-[calc(var(--rb-r-full,999px))] px-3 text-[14px]/[18px] font-bold text-neutral-900/78 dark:text-neutral-100/78 transition-[background-color,color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-neutral-900/5 hover:text-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:hover:bg-neutral-100/6 dark:hover:text-neutral-100",
  av = ad("text-[14px]/[20px] font-medium", a_),
  ag = ad("text-[13px]/[16px] font-semibold tabular-nums", a_);
function af({
  id: e,
  value: a,
  onChange: r,
  options: s,
  disabled: c,
  placeholder: d = "Select…",
  className: _,
  triggerClassName: b,
  leading: u,
  ariaLabel: x
}) {
  let p = (0, React.useId)(),
    [h, k] = (0, React.useState)(!1),
    [m, v] = (0, React.useState)(0),
    [g, f] = (0, React.useState)(!1),
    [w, y] = (0, React.useState)(),
    j = (0, React.useRef)(null),
    N = (0, React.useRef)(null),
    z = (0, React.useRef)({
      buffer: "",
      at: 0
    }),
    C = s.findIndex(e => e.value === a),
    S = C >= 0 ? s[C] : void 0,
    A = e => {
      if (c) return;
      let a = j.current,
        r = a?.ownerDocument.defaultView;
      if (a && r) {
        let e = a.getBoundingClientRect(),
          t = 0,
          l = r.innerHeight;
        for (let e = a.parentElement; e; e = e.parentElement) if (/auto|scroll|hidden|clip/.test(r.getComputedStyle(e).overflowY)) {
          let a = e.getBoundingClientRect();
          t = Math.max(t, a.top), l = Math.min(l, a.bottom);
          break;
        }
        let n = l - e.bottom,
          i = e.top - t,
          o = Math.min(32 * s.length + 8, 264),
          c = n < o + 8 && i > n,
          d = (c ? i : n) - 8;
        f(c), y(d < o ? Math.max(d, 40) : void 0);
      }
      v(e ?? (C >= 0 ? C : 0)), k(!0);
    };
  (0, React.useEffect)(() => {
    if (!h) return;
    let e = j.current,
      a = e?.ownerDocument;
    if (!a) return;
    let r = a => {
      e.contains(a.target) || k(!1);
    };
    return a.addEventListener("mousedown", r), a.addEventListener("touchstart", r), () => {
      a.removeEventListener("mousedown", r), a.removeEventListener("touchstart", r);
    };
  }, [h]), (0, React.useEffect)(() => {
    if (!h) return;
    let e = N.current,
      a = e?.querySelector(`[data-index="${m}"]`);
    if (!e || !a) return;
    let r = a.offsetTop,
      t = r + a.offsetHeight;
    r < e.scrollTop ? e.scrollTop = r : t > e.scrollTop + e.clientHeight && (e.scrollTop = t - e.clientHeight);
  }, [h, m]);
  let D = e => {
    let a = s[e];
    a && (r(a.value), k(!1), j.current?.querySelector("button")?.focus({
      preventScroll: !0
    }));
  };
  return <div ref={j} className={ad("relative", _)}><button id={e} type="button" role="combobox" aria-expanded={h} aria-controls={p} aria-haspopup="listbox" disabled={c} onClick={() => h ? k(!1) : A()} onKeyDown={e => {
      if (!c) {
        if (!h) {
          ["Enter", " ", "ArrowDown", "ArrowUp"].includes(e.key) && (e.preventDefault(), A());
          return;
        }
        if ("Escape" === e.key || "Tab" === e.key) {
          "Escape" === e.key && e.stopPropagation(), k(!1);
          return;
        }
        if ("ArrowDown" === e.key) e.preventDefault(), v(e => Math.min(e + 1, s.length - 1));else if ("ArrowUp" === e.key) e.preventDefault(), v(e => Math.max(e - 1, 0));else if ("Home" === e.key) e.preventDefault(), v(0);else if ("End" === e.key) e.preventDefault(), v(s.length - 1);else if ("Enter" === e.key || " " === e.key) e.preventDefault(), D(m);else if (1 === e.key.length && /\S/.test(e.key)) {
          let a = Date.now(),
            r = z.current;
          r.buffer = a - r.at > 700 ? e.key : r.buffer + e.key, r.at = a;
          let t = s.findIndex(e => e.label.toLowerCase().startsWith(r.buffer.toLowerCase()));
          t >= 0 && v(t);
        }
      }
    }} aria-label={x} className={ad("inline-flex h-10 w-fit min-w-40 cursor-pointer items-center justify-between gap-2 rounded-[calc(var(--rb-r-xl,12px))] border border-transparent bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] px-3.5 text-left text-[15px]/[20px] font-semibold whitespace-nowrap text-neutral-900 outline-none select-none transition-[border-color,box-shadow,background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:not-disabled:not-aria-invalid:not-aria-expanded:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] focus-visible:border-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] focus-visible:bg-white focus-visible:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-expanded:border-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] aria-expanded:bg-white aria-expanded:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-invalid:border-[oklch(60%_0.236_26)] disabled:cursor-not-allowed disabled:text-neutral-900/40 disabled:shadow-none dark:text-neutral-100 dark:hover:not-disabled:not-aria-invalid:not-aria-expanded:bg-neutral-900 dark:focus-visible:border-[var(--rb-accent,oklch(81%_0.16_163))] dark:focus-visible:bg-neutral-900 dark:focus-visible:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-expanded:border-[var(--rb-accent,oklch(81%_0.16_163))] dark:aria-expanded:bg-neutral-900 dark:aria-expanded:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-invalid:border-[oklch(65.2%_0.219_26)] dark:disabled:text-neutral-100/40", "w-full min-w-[100%]", b)}><span className="flex min-w-0 items-center gap-2">{u}<span className={ad("truncate", !S && "text-neutral-900/62 dark:text-neutral-100/62")}>{S ? S.label : d}</span></span><__mod_22728.n icon={__mod_31517.A} size={18} strokeWidth={2} aria-hidden="true" className="shrink-0 text-neutral-900/78 dark:text-neutral-100/78" /></button>{h && <ul ref={N} id={p} role="listbox" tabIndex={-1} style={{
      maxHeight: w
    }} className={ad("min-w-52 max-w-[min(480px,calc(100vw-2rem))] overflow-x-hidden overflow-y-auto overscroll-contain rounded-[calc(var(--rb-r-3xl,16px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] p-2 text-neutral-900 dark:text-neutral-100 outline-none shadow-[0_0_0_1px_rgb(84_62_32/0.08),0_24px_56px_-20px_rgb(84_62_32/0.34),0_6px_16px_-8px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.65),0_24px_56px_-16px_rgb(0_0_0/0.8)]", "absolute z-30 max-h-[264px] w-full min-w-[100%]", g ? "bottom-full mb-1.5" : "top-full mt-1.5")}>{s.map((e, r) => {
        let l = e.value === a;
        return <li role="option" aria-selected={l} data-index={r} data-highlighted={r === m || void 0} onMouseEnter={() => v(r)} onClick={() => D(r)} className={ad("relative flex min-h-10 w-full cursor-default items-center gap-2.5 rounded-[calc(var(--rb-r-md,8px))] px-3 py-2 text-left text-[15px]/[20px] font-semibold text-neutral-900 outline-none select-none [&_svg]:shrink-0 [&_svg]:text-neutral-900/70 hover:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] focus-visible:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] data-[highlighted]:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-disabled:cursor-not-allowed aria-disabled:text-neutral-900/40 dark:text-neutral-100 dark:[&_svg]:text-neutral-100/70 dark:hover:bg-neutral-100/7 dark:focus-visible:bg-neutral-100/7 dark:data-[highlighted]:bg-neutral-100/7 dark:aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-disabled:text-neutral-100/40", "pe-8")}><span className="flex min-w-0 items-baseline gap-2"><span className="truncate">{e.label}</span>{e.hint && <span className={ad(ag, "shrink-0")}>{e.hint}</span>}</span>{l && <__mod_22728.n icon={__mod_90987.A} size={18} strokeWidth={2} aria-hidden="true" className="pointer-events-none absolute end-2" />}</li>;
      })}</ul>}</div>;
}
function aw({
  min: e,
  max: a,
  step: r = 1,
  value: n,
  onChange: i,
  format: o,
  labels: s
}) {
  let c = (0, React.useRef)(null),
    [d, _] = (0, React.useState)(null),
    b = t => Math.min(a, Math.max(e, Math.round(t / r) * r)),
    u = r => (r - e) / (a - e) * 100,
    x = r => {
      let t = c.current;
      if (!t) return e;
      let l = t.getBoundingClientRect();
      return 0 === l.width ? e : b(e + (r - l.left) / l.width * (a - e));
    },
    p = (e, a) => {
      let [r, t] = n;
      0 === e ? i([Math.min(a, t), t]) : i([r, Math.max(a, r)]);
    },
    h = t => ({
      role: "slider",
      tabIndex: 0,
      "aria-label": s[t],
      "aria-valuemin": e,
      "aria-valuemax": a,
      "aria-valuenow": n[t],
      "aria-valuetext": o(n[t]),
      style: {
        left: `${u(n[t])}%`,
        touchAction: "none"
      },
      onPointerDown: e => {
        e.preventDefault(), e.stopPropagation(), e.currentTarget.setPointerCapture(e.pointerId), _(t);
      },
      onPointerMove: e => {
        d === t && p(t, x(e.clientX));
      },
      onLostPointerCapture: () => _(null),
      onPointerUp: e => {
        e.currentTarget.releasePointerCapture(e.pointerId), _(null);
      },
      onKeyDown: l => {
        let i = Math.max(r, Math.round((a - e) / 10)),
          o = n[t],
          s = null;
        "ArrowLeft" === l.key || "ArrowDown" === l.key ? s = o - r : "ArrowRight" === l.key || "ArrowUp" === l.key ? s = o + r : "PageDown" === l.key ? s = o - i : "PageUp" === l.key ? s = o + i : "Home" === l.key ? s = e : "End" === l.key && (s = a), null !== s && (l.preventDefault(), p(t, b(s)));
      },
      className: "absolute top-1/2 block size-5 -translate-x-1/2 -translate-y-1/2 cursor-grab rounded-full bg-white shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_2px_rgb(84_62_32/0.10),0_3px_8px_-2px_rgb(84_62_32/0.20)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.12),0_0_0_1px_rgb(0_0_0/0.6),0_2px_6px_-1px_rgb(0_0_0/0.6)] transition-[scale] duration-[240ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:scale-110 active:scale-110 active:cursor-grabbing motion-reduce:transition-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:bg-white"
    });
  return <div ref={c} onPointerDown={e => {
    let a = x(e.clientX);
    p(Math.abs(a - n[0]) <= Math.abs(a - n[1]) ? 0 : 1, a);
  }} className="relative flex h-4 w-full cursor-pointer touch-none items-center select-none"><div className="relative h-2 w-full grow rounded-[calc(var(--rb-r-full,999px))] bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] shadow-[inset_0_1px_2px_rgb(84_62_32/0.12)] dark:bg-neutral-100/14 dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.5)]"><span className="absolute inset-y-0 rounded-[calc(var(--rb-r-full,999px))] bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_82%,black)] dark:bg-[var(--rb-accent,oklch(81%_0.16_163))]" style={{
        left: `${u(n[0])}%`,
        width: `${u(n[1]) - u(n[0])}%`
      }} /><div {...h(0)} /><div {...h(1)} /></div></div>;
}
let ay = [{
    value: "all",
    label: "All"
  }, {
    value: "apartment",
    label: "Apartment"
  }, {
    value: "house",
    label: "House"
  }, {
    value: "condo",
    label: "Condo"
  }, {
    value: "studio",
    label: "Studio"
  }, {
    value: "townhouse",
    label: "Townhouse"
  }],
  aj = {
    apartment: "Apartment",
    house: "House",
    condo: "Condo",
    studio: "Studio",
    townhouse: "Townhouse"
  },
  aN = [{
    value: "laundry",
    label: "Laundry"
  }, {
    value: "parking",
    label: "Parking"
  }, {
    value: "pets",
    label: "Pets OK"
  }, {
    value: "dishwasher",
    label: "Dishwasher"
  }, {
    value: "ac",
    label: "Central air"
  }, {
    value: "balcony",
    label: "Balcony"
  }, {
    value: "gym",
    label: "Gym"
  }, {
    value: "doorman",
    label: "Doorman"
  }, {
    value: "elevator",
    label: "Elevator"
  }, {
    value: "hardwood",
    label: "Hardwood"
  }],
  az = Object.fromEntries(aN.map(e => [e.value, e.label])),
  aC = [{
    value: "any",
    label: "Any time"
  }, {
    value: "30",
    label: "Within 30 days"
  }, {
    value: "60",
    label: "Within 60 days"
  }, {
    value: "90",
    label: "Within 90 days"
  }],
  aS = e => `$${e.toLocaleString("en-US")}`,
  aA = [{
    id: "r01",
    title: "Sunlit corner one-bed",
    neighbourhood: "Mission District",
    type: "apartment",
    beds: 1,
    baths: 1,
    sqft: 720,
    price: 2650,
    availableInDays: 12,
    amenities: ["laundry", "dishwasher", "hardwood", "elevator"]
  }, {
    id: "r02",
    title: "Renovated garden flat",
    neighbourhood: "Noe Valley",
    type: "apartment",
    beds: 2,
    baths: 1,
    sqft: 940,
    price: 3450,
    availableInDays: 45,
    amenities: ["parking", "pets", "dishwasher", "balcony"]
  }, {
    id: "r03",
    title: "Compact studio near transit",
    neighbourhood: "SoMa",
    type: "studio",
    beds: 0,
    baths: 1,
    sqft: 460,
    price: 1950,
    availableInDays: 7,
    amenities: ["laundry", "gym", "elevator", "doorman"]
  }, {
    id: "r04",
    title: "Craftsman three-bed house",
    neighbourhood: "Bernal Heights",
    type: "house",
    beds: 3,
    baths: 2,
    sqft: 1680,
    price: 5200,
    availableInDays: 60,
    amenities: ["parking", "pets", "ac", "hardwood", "dishwasher"]
  }, {
    id: "r05",
    title: "Bright top-floor condo",
    neighbourhood: "Hayes Valley",
    type: "condo",
    beds: 2,
    baths: 2,
    sqft: 1120,
    price: 4100,
    availableInDays: 21,
    amenities: ["gym", "elevator", "doorman", "balcony", "ac"]
  }, {
    id: "r06",
    title: "Quiet studio with alcove",
    neighbourhood: "Inner Richmond",
    type: "studio",
    beds: 0,
    baths: 1,
    sqft: 500,
    price: 2100,
    availableInDays: 30,
    amenities: ["hardwood", "elevator"]
  }, {
    id: "r07",
    title: "Modern townhouse end unit",
    neighbourhood: "Dogpatch",
    type: "townhouse",
    beds: 3,
    baths: 3,
    sqft: 1740,
    price: 5650,
    availableInDays: 75,
    amenities: ["parking", "laundry", "ac", "balcony", "dishwasher"]
  }, {
    id: "r08",
    title: "Classic Edwardian one-bed",
    neighbourhood: "Pacific Heights",
    type: "apartment",
    beds: 1,
    baths: 1,
    sqft: 780,
    price: 3100,
    availableInDays: 18,
    amenities: ["hardwood", "pets", "dishwasher"]
  }, {
    id: "r09",
    title: "Family four-bed with yard",
    neighbourhood: "Outer Sunset",
    type: "house",
    beds: 4,
    baths: 3,
    sqft: 2200,
    price: 6e3,
    availableInDays: 90,
    amenities: ["parking", "pets", "laundry", "ac", "dishwasher", "hardwood"]
  }, {
    id: "r10",
    title: "Loft-style two-bed",
    neighbourhood: "Potrero Hill",
    type: "condo",
    beds: 2,
    baths: 2,
    sqft: 1180,
    price: 4300,
    availableInDays: 40,
    amenities: ["gym", "elevator", "parking", "balcony"]
  }, {
    id: "r11",
    title: "Cozy junior studio",
    neighbourhood: "Nob Hill",
    type: "studio",
    beds: 0,
    baths: 1,
    sqft: 420,
    price: 1850,
    availableInDays: 9,
    amenities: ["laundry", "elevator", "doorman"]
  }, {
    id: "r12",
    title: "Updated two-bed apartment",
    neighbourhood: "Cole Valley",
    type: "apartment",
    beds: 2,
    baths: 1,
    sqft: 900,
    price: 3300,
    availableInDays: 33,
    amenities: ["dishwasher", "hardwood", "pets", "laundry"]
  }, {
    id: "r13",
    title: "Split-level townhouse",
    neighbourhood: "Glen Park",
    type: "townhouse",
    beds: 2,
    baths: 2,
    sqft: 1360,
    price: 4650,
    availableInDays: 55,
    amenities: ["parking", "ac", "balcony", "dishwasher"]
  }, {
    id: "r14",
    title: "Penthouse-floor condo",
    neighbourhood: "Rincon Hill",
    type: "condo",
    beds: 1,
    baths: 1,
    sqft: 820,
    price: 3800,
    availableInDays: 15,
    amenities: ["gym", "doorman", "elevator", "ac", "balcony"]
  }, {
    id: "r15",
    title: "Bungalow with home office",
    neighbourhood: "Excelsior",
    type: "house",
    beds: 3,
    baths: 2,
    sqft: 1560,
    price: 4400,
    availableInDays: 48,
    amenities: ["parking", "pets", "hardwood", "laundry"]
  }, {
    id: "r16",
    title: "Airy one-bed near park",
    neighbourhood: "Duboce Triangle",
    type: "apartment",
    beds: 1,
    baths: 1,
    sqft: 690,
    price: 2850,
    availableInDays: 24,
    amenities: ["hardwood", "dishwasher", "elevator"]
  }, {
    id: "r17",
    title: "Roomy studio conversion",
    neighbourhood: "Tenderloin",
    type: "studio",
    beds: 0,
    baths: 1,
    sqft: 540,
    price: 1700,
    availableInDays: 5,
    amenities: ["laundry", "elevator"]
  }, {
    id: "r18",
    title: "Two-bed with private deck",
    neighbourhood: "Bernal Heights",
    type: "apartment",
    beds: 2,
    baths: 2,
    sqft: 1050,
    price: 3900,
    availableInDays: 36,
    amenities: ["balcony", "pets", "dishwasher", "hardwood", "parking"]
  }, {
    id: "r19",
    title: "Detached three-bed home",
    neighbourhood: "West Portal",
    type: "house",
    beds: 3,
    baths: 2,
    sqft: 1820,
    price: 5100,
    availableInDays: 70,
    amenities: ["parking", "ac", "laundry", "dishwasher"]
  }, {
    id: "r20",
    title: "Corner townhouse with garage",
    neighbourhood: "Mission Bay",
    type: "townhouse",
    beds: 4,
    baths: 3,
    sqft: 2050,
    price: 5900,
    availableInDays: 82,
    amenities: ["parking", "gym", "elevator", "ac", "balcony", "dishwasher"]
  }, {
    id: "r21",
    title: "Light-filled loft condo",
    neighbourhood: "SoMa",
    type: "condo",
    beds: 1,
    baths: 1,
    sqft: 760,
    price: 3550,
    availableInDays: 20,
    amenities: ["gym", "doorman", "elevator", "hardwood"]
  }, {
    id: "r22",
    title: "Two-bed garden apartment",
    neighbourhood: "Inner Sunset",
    type: "apartment",
    beds: 2,
    baths: 1,
    sqft: 970,
    price: 3600,
    availableInDays: 52,
    amenities: ["pets", "laundry", "dishwasher", "balcony"]
  }],
  aD = {
    type: "all",
    minBeds: 0,
    minBaths: 0,
    price: [1e3, 6e3],
    amenities: [],
    availability: "any"
  },
  aE = (e, a, r) => !("type" !== r && "all" !== a.type && e.type !== a.type || "minBeds" !== r && e.beds < a.minBeds || "minBaths" !== r && e.baths < a.minBaths || "price" !== r && (e.price < a.price[0] || e.price > a.price[1]) || "availability" !== r && "any" !== a.availability && e.availableInDays > Number(a.availability)) && ("amenities" === r || !a.amenities.length || !!a.amenities.every(a => e.amenities.includes(a)));
function aM({
  label: e,
  value: a,
  max: r,
  onChange: l,
  icon: i
}) {
  let o = 0 === a ? "Any" : `${a}+`;
  return <div className="flex items-center justify-between gap-3"><span className="flex w-fit items-center gap-2 text-[15px]/[20px] font-bold text-neutral-900 dark:text-neutral-100"><span className={a_}>{i}</span>{e}</span><div className="flex items-center gap-2"><button type="button" aria-label={`Decrease minimum ${e.toLowerCase()}`} disabled={0 === a} onClick={() => l(Math.max(0, a - 1))} className={ad(au, ap)}><__mod_22728.n icon={__mod_99199.A} size={18} strokeWidth={2} aria-hidden="true" /></button><span className={ad(ab, "w-10 text-center tabular-nums")}>{o}</span><button type="button" aria-label={`Increase minimum ${e.toLowerCase()}`} disabled={a === r} onClick={() => l(Math.min(r, a + 1))} className={ad(au, ap)}><__mod_22728.n icon={__mod_89886.A} size={18} strokeWidth={2} aria-hidden="true" /></button></div></div>;
}
function aL({
  label: e,
  children: a
}) {
  return <section className="py-5 first:pt-0"><h3 className={ad(ab, "mb-3")}>{e}</h3>{a}</section>;
}
let aP = (...e) => e.filter(Boolean).join(" "),
  aT = "text-neutral-900 dark:text-neutral-100",
  aW = "text-neutral-900/62 dark:text-neutral-100/62",
  aH = "text-[14px]/[20px] font-medium",
  a$ = "text-[15px]/[20px] font-bold",
  aq = "text-[13px]/[16px] font-semibold tabular-nums",
  aI = "h-10 gap-2 rounded-[calc(var(--rb-r-full,999px))] px-5 text-[15px]/[20px] font-bold",
  aB = "min-w-52 max-w-[min(480px,calc(100vw-2rem))] overflow-x-hidden overflow-y-auto overscroll-contain rounded-[calc(var(--rb-r-3xl,16px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] p-2 text-neutral-900 dark:text-neutral-100 outline-none shadow-[0_0_0_1px_rgb(84_62_32/0.08),0_24px_56px_-20px_rgb(84_62_32/0.34),0_6px_16px_-8px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.65),0_24px_56px_-16px_rgb(0_0_0/0.8)]",
  aF = "relative flex min-h-10 w-full cursor-default items-center gap-2.5 rounded-[calc(var(--rb-r-md,8px))] px-3 py-2 text-left text-[15px]/[20px] font-semibold text-neutral-900 outline-none select-none [&_svg]:shrink-0 [&_svg]:text-neutral-900/70 hover:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] focus-visible:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] data-[highlighted]:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-disabled:cursor-not-allowed aria-disabled:text-neutral-900/40 dark:text-neutral-100 dark:[&_svg]:text-neutral-100/70 dark:hover:bg-neutral-100/7 dark:focus-visible:bg-neutral-100/7 dark:data-[highlighted]:bg-neutral-100/7 dark:aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-disabled:text-neutral-100/40",
  aK = "flex h-10 w-full min-w-0 cursor-pointer items-center gap-2.5 rounded-[calc(var(--rb-r-full,999px))] px-3 text-left text-[15px]/[20px] font-semibold text-neutral-900/75 transition-[background-color,box-shadow,color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] [&_svg]:shrink-0 hover:bg-neutral-900/5 hover:text-neutral-900 aria-[current=page]:bg-white aria-[current=page]:font-bold aria-[current=page]:text-neutral-900 aria-[current=page]:shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:text-neutral-100/75 dark:hover:bg-neutral-100/6 dark:hover:text-neutral-100 dark:aria-[current=page]:bg-[color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800))] dark:aria-[current=page]:text-neutral-100 dark:aria-[current=page]:shadow-[inset_0_1px_0_rgb(255_255_255/0.08),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)]",
  aO = "inline-flex h-8 cursor-pointer items-center rounded-[calc(var(--rb-r-full,999px))] px-3 text-[14px]/[18px] font-bold text-neutral-900/78 dark:text-neutral-100/78 transition-[background-color,color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-neutral-900/5 hover:text-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:hover:bg-neutral-100/6 dark:hover:text-neutral-100";
function aU({
  id: e,
  value: a,
  onChange: r,
  options: s,
  disabled: c,
  placeholder: d = "Select…",
  className: _,
  triggerClassName: b,
  leading: u,
  ariaLabel: x
}) {
  let p = (0, React.useId)(),
    [h, k] = (0, React.useState)(!1),
    [m, v] = (0, React.useState)(0),
    [g, f] = (0, React.useState)(!1),
    [w, y] = (0, React.useState)(),
    j = (0, React.useRef)(null),
    N = (0, React.useRef)(null),
    z = (0, React.useRef)({
      buffer: "",
      at: 0
    }),
    C = s.findIndex(e => e.value === a),
    S = C >= 0 ? s[C] : void 0,
    A = e => {
      if (c) return;
      let a = j.current,
        r = a?.ownerDocument.defaultView;
      if (a && r) {
        let e = a.getBoundingClientRect(),
          t = 0,
          l = r.innerHeight;
        for (let e = a.parentElement; e; e = e.parentElement) if (/auto|scroll|hidden|clip/.test(r.getComputedStyle(e).overflowY)) {
          let a = e.getBoundingClientRect();
          t = Math.max(t, a.top), l = Math.min(l, a.bottom);
          break;
        }
        let n = l - e.bottom,
          i = e.top - t,
          o = Math.min(32 * s.length + 8, 264),
          c = n < o + 8 && i > n,
          d = (c ? i : n) - 8;
        f(c), y(d < o ? Math.max(d, 40) : void 0);
      }
      v(e ?? (C >= 0 ? C : 0)), k(!0);
    };
  (0, React.useEffect)(() => {
    if (!h) return;
    let e = j.current,
      a = e?.ownerDocument;
    if (!a) return;
    let r = a => {
      e.contains(a.target) || k(!1);
    };
    return a.addEventListener("mousedown", r), a.addEventListener("touchstart", r), () => {
      a.removeEventListener("mousedown", r), a.removeEventListener("touchstart", r);
    };
  }, [h]), (0, React.useEffect)(() => {
    if (!h) return;
    let e = N.current,
      a = e?.querySelector(`[data-index="${m}"]`);
    if (!e || !a) return;
    let r = a.offsetTop,
      t = r + a.offsetHeight;
    r < e.scrollTop ? e.scrollTop = r : t > e.scrollTop + e.clientHeight && (e.scrollTop = t - e.clientHeight);
  }, [h, m]);
  let D = e => {
    let a = s[e];
    a && (r(a.value), k(!1), j.current?.querySelector("button")?.focus({
      preventScroll: !0
    }));
  };
  return <div ref={j} className={aP("relative", _)}><button id={e} type="button" role="combobox" aria-expanded={h} aria-controls={p} aria-haspopup="listbox" disabled={c} onClick={() => h ? k(!1) : A()} onKeyDown={e => {
      if (!c) {
        if (!h) {
          ["Enter", " ", "ArrowDown", "ArrowUp"].includes(e.key) && (e.preventDefault(), A());
          return;
        }
        if ("Escape" === e.key || "Tab" === e.key) {
          "Escape" === e.key && e.stopPropagation(), k(!1);
          return;
        }
        if ("ArrowDown" === e.key) e.preventDefault(), v(e => Math.min(e + 1, s.length - 1));else if ("ArrowUp" === e.key) e.preventDefault(), v(e => Math.max(e - 1, 0));else if ("Home" === e.key) e.preventDefault(), v(0);else if ("End" === e.key) e.preventDefault(), v(s.length - 1);else if ("Enter" === e.key || " " === e.key) e.preventDefault(), D(m);else if (1 === e.key.length && /\S/.test(e.key)) {
          let a = Date.now(),
            r = z.current;
          r.buffer = a - r.at > 700 ? e.key : r.buffer + e.key, r.at = a;
          let t = s.findIndex(e => e.label.toLowerCase().startsWith(r.buffer.toLowerCase()));
          t >= 0 && v(t);
        }
      }
    }} aria-label={x} className={aP("inline-flex h-10 w-fit min-w-40 cursor-pointer items-center justify-between gap-2 rounded-[calc(var(--rb-r-xl,12px))] border border-transparent bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] px-3.5 text-left text-[15px]/[20px] font-semibold whitespace-nowrap text-neutral-900 outline-none select-none transition-[border-color,box-shadow,background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:not-disabled:not-aria-invalid:not-aria-expanded:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] focus-visible:border-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] focus-visible:bg-white focus-visible:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-expanded:border-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] aria-expanded:bg-white aria-expanded:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-invalid:border-[oklch(60%_0.236_26)] disabled:cursor-not-allowed disabled:text-neutral-900/40 disabled:shadow-none dark:text-neutral-100 dark:hover:not-disabled:not-aria-invalid:not-aria-expanded:bg-neutral-900 dark:focus-visible:border-[var(--rb-accent,oklch(81%_0.16_163))] dark:focus-visible:bg-neutral-900 dark:focus-visible:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-expanded:border-[var(--rb-accent,oklch(81%_0.16_163))] dark:aria-expanded:bg-neutral-900 dark:aria-expanded:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-invalid:border-[oklch(65.2%_0.219_26)] dark:disabled:text-neutral-100/40", "w-full min-w-[100%]", b)}><span className="flex min-w-0 items-center gap-2">{u}<span className={aP("truncate", !S && "text-neutral-900/62 dark:text-neutral-100/62")}>{S ? S.label : d}</span></span><__mod_22728.n icon={__mod_31517.A} size={18} strokeWidth={2} aria-hidden="true" className="shrink-0 text-neutral-900/78 dark:text-neutral-100/78" /></button>{h && <ul ref={N} id={p} role="listbox" tabIndex={-1} style={{
      maxHeight: w
    }} className={aP(aB, "absolute z-30 max-h-[264px] w-full min-w-[100%]", g ? "bottom-full mb-1.5" : "top-full mt-1.5")}>{s.map((e, r) => {
        let l = e.value === a;
        return <li role="option" aria-selected={l} data-index={r} data-highlighted={r === m || void 0} onMouseEnter={() => v(r)} onClick={() => D(r)} className={aP(aF, "pe-8")}><span className="flex min-w-0 items-baseline gap-2"><span className="truncate">{e.label}</span>{e.hint && <span className={aP(aq, aW, "shrink-0")}>{e.hint}</span>}</span>{l && <__mod_22728.n icon={__mod_90987.A} size={18} strokeWidth={2} aria-hidden="true" className="pointer-events-none absolute end-2" />}</li>;
      })}</ul>}</div>;
}
function aV({
  min: e,
  max: a,
  step: r = 1,
  value: n,
  onChange: i,
  format: o,
  labels: s
}) {
  let c = (0, React.useRef)(null),
    [d, _] = (0, React.useState)(null),
    b = t => Math.min(a, Math.max(e, Math.round(t / r) * r)),
    u = r => (r - e) / (a - e) * 100,
    x = r => {
      let t = c.current;
      if (!t) return e;
      let l = t.getBoundingClientRect();
      return 0 === l.width ? e : b(e + (r - l.left) / l.width * (a - e));
    },
    p = (e, a) => {
      let [r, t] = n;
      0 === e ? i([Math.min(a, t), t]) : i([r, Math.max(a, r)]);
    },
    h = t => ({
      role: "slider",
      tabIndex: 0,
      "aria-label": s[t],
      "aria-valuemin": e,
      "aria-valuemax": a,
      "aria-valuenow": n[t],
      "aria-valuetext": o(n[t]),
      style: {
        left: `${u(n[t])}%`,
        touchAction: "none"
      },
      onPointerDown: e => {
        e.preventDefault(), e.stopPropagation(), e.currentTarget.setPointerCapture(e.pointerId), _(t);
      },
      onPointerMove: e => {
        d === t && p(t, x(e.clientX));
      },
      onLostPointerCapture: () => _(null),
      onPointerUp: e => {
        e.currentTarget.releasePointerCapture(e.pointerId), _(null);
      },
      onKeyDown: l => {
        let i = Math.max(r, Math.round((a - e) / 10)),
          o = n[t],
          s = null;
        "ArrowLeft" === l.key || "ArrowDown" === l.key ? s = o - r : "ArrowRight" === l.key || "ArrowUp" === l.key ? s = o + r : "PageDown" === l.key ? s = o - i : "PageUp" === l.key ? s = o + i : "Home" === l.key ? s = e : "End" === l.key && (s = a), null !== s && (l.preventDefault(), p(t, b(s)));
      },
      className: "absolute top-1/2 block size-5 -translate-x-1/2 -translate-y-1/2 cursor-grab rounded-full bg-white shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_2px_rgb(84_62_32/0.10),0_3px_8px_-2px_rgb(84_62_32/0.20)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.12),0_0_0_1px_rgb(0_0_0/0.6),0_2px_6px_-1px_rgb(0_0_0/0.6)] transition-[scale] duration-[240ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:scale-110 active:scale-110 active:cursor-grabbing motion-reduce:transition-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:bg-white"
    });
  return <div ref={c} onPointerDown={e => {
    let a = x(e.clientX);
    p(Math.abs(a - n[0]) <= Math.abs(a - n[1]) ? 0 : 1, a);
  }} className="relative flex h-4 w-full cursor-pointer touch-none items-center select-none"><span className="relative h-2 w-full grow rounded-[calc(var(--rb-r-full,999px))] bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] shadow-[inset_0_1px_2px_rgb(84_62_32/0.12)] dark:bg-neutral-100/14 dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.5)]"><span className="absolute inset-y-0 rounded-[calc(var(--rb-r-full,999px))] bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_82%,black)] dark:bg-[var(--rb-accent,oklch(81%_0.16_163))]" style={{
        left: `${u(n[0])}%`,
        width: `${u(n[1]) - u(n[0])}%`
      }} /></span><div {...h(0)} /><div {...h(1)} /></div>;
}
let aG = ["TypeScript", "React", "GraphQL", "Node.js", "Go", "Kubernetes", "PostgreSQL", "gRPC", "Terraform", "AWS", "Python", "Redis", "Kafka", "Rust"],
  aQ = [{
    value: "junior",
    label: "Junior"
  }, {
    value: "mid",
    label: "Mid-level"
  }, {
    value: "senior",
    label: "Senior"
  }, {
    value: "staff",
    label: "Staff / Principal"
  }],
  aX = [{
    value: "lisbon",
    label: "Lisbon"
  }, {
    value: "berlin",
    label: "Berlin"
  }, {
    value: "london",
    label: "London"
  }, {
    value: "toronto",
    label: "Toronto"
  }, {
    value: "austin",
    label: "Austin"
  }],
  aY = [{
    id: "c1",
    name: "Ana Ferreira",
    title: "Senior Frontend Engineer",
    seniority: "senior",
    location: "lisbon",
    comp: 165,
    remote: !0,
    skills: ["TypeScript", "React", "GraphQL", "Node.js"]
  }, {
    id: "c2",
    name: "Marcus Lindqvist",
    title: "Staff Backend Engineer",
    seniority: "staff",
    location: "berlin",
    comp: 235,
    remote: !1,
    skills: ["Go", "Kubernetes", "PostgreSQL", "gRPC"]
  }, {
    id: "c3",
    name: "Priya Nair",
    title: "Senior Platform Engineer",
    seniority: "senior",
    location: "london",
    comp: 210,
    remote: !0,
    skills: ["Go", "Terraform", "AWS", "Kubernetes"]
  }, {
    id: "c4",
    name: "Diego Santos",
    title: "Fullstack Engineer",
    seniority: "mid",
    location: "lisbon",
    comp: 140,
    remote: !0,
    skills: ["TypeScript", "React", "Node.js", "PostgreSQL"]
  }, {
    id: "c5",
    name: "Hannah Weber",
    title: "Senior Backend Engineer",
    seniority: "senior",
    location: "berlin",
    comp: 195,
    remote: !1,
    skills: ["Python", "PostgreSQL", "Redis", "Kafka"]
  }, {
    id: "c6",
    name: "Yuki Tanaka",
    title: "Staff Frontend Engineer",
    seniority: "staff",
    location: "toronto",
    comp: 225,
    remote: !0,
    skills: ["TypeScript", "React", "GraphQL", "Rust"]
  }, {
    id: "c7",
    name: "Omar Haddad",
    title: "Backend Engineer",
    seniority: "mid",
    location: "london",
    comp: 150,
    remote: !1,
    skills: ["Node.js", "PostgreSQL", "Redis", "AWS"]
  }, {
    id: "c8",
    name: "Sofia Rossi",
    title: "Senior Infrastructure Engineer",
    seniority: "senior",
    location: "berlin",
    comp: 205,
    remote: !0,
    skills: ["Terraform", "AWS", "Kubernetes", "Go"]
  }, {
    id: "c9",
    name: "Liam O'Brien",
    title: "Junior Frontend Engineer",
    seniority: "junior",
    location: "london",
    comp: 125,
    remote: !1,
    skills: ["TypeScript", "React", "Node.js"]
  }, {
    id: "c10",
    name: "Chen Wei",
    title: "Staff Data Engineer",
    seniority: "staff",
    location: "toronto",
    comp: 240,
    remote: !0,
    skills: ["Python", "Kafka", "PostgreSQL", "AWS"]
  }, {
    id: "c11",
    name: "Nadia Petrova",
    title: "Senior Backend Engineer",
    seniority: "senior",
    location: "austin",
    comp: 190,
    remote: !0,
    skills: ["Rust", "gRPC", "Redis", "Kubernetes"]
  }, {
    id: "c12",
    name: "Tom\xe1s Alves",
    title: "Platform Engineer",
    seniority: "mid",
    location: "lisbon",
    comp: 145,
    remote: !0,
    skills: ["Go", "Terraform", "AWS", "PostgreSQL"]
  }, {
    id: "c13",
    name: "Grace Kim",
    title: "Senior Fullstack Engineer",
    seniority: "senior",
    location: "toronto",
    comp: 185,
    remote: !1,
    skills: ["TypeScript", "React", "Node.js", "GraphQL"]
  }, {
    id: "c14",
    name: "Felix Braun",
    title: "Junior Backend Engineer",
    seniority: "junior",
    location: "berlin",
    comp: 130,
    remote: !1,
    skills: ["Python", "PostgreSQL", "Redis"]
  }, {
    id: "c15",
    name: "Isabel Moreno",
    title: "Staff Frontend Engineer",
    seniority: "staff",
    location: "austin",
    comp: 230,
    remote: !0,
    skills: ["TypeScript", "React", "Rust", "GraphQL"]
  }, {
    id: "c16",
    name: "Raj Mehta",
    title: "Infrastructure Engineer",
    seniority: "mid",
    location: "london",
    comp: 155,
    remote: !0,
    skills: ["Kubernetes", "Terraform", "AWS", "Go"]
  }],
  aJ = e => `$${e}k`,
  aZ = [{
    value: "relevance",
    label: "Best match"
  }, {
    value: "comp-high",
    label: "Compensation: high to low"
  }, {
    value: "comp-low",
    label: "Compensation: low to high"
  }, {
    value: "name",
    label: "Name"
  }],
  a0 = {
    skills: [],
    seniority: [],
    comp: [120, 260],
    remote: !1,
    location: "any"
  },
  a1 = (e, a, r) => ("skills" === r || !a.skills.length || !!a.skills.every(a => e.skills.includes(a))) && ("seniority" === r || !a.seniority.length || !!a.seniority.includes(e.seniority)) && ("comp" === r || !(e.comp < a.comp[0]) && !(e.comp > a.comp[1])) && ("remote" === r || !a.remote || !!e.remote) && ("location" === r || "any" === a.location || e.location === a.location) && !0;
function a2({
  label: e,
  children: a
}) {
  return <section className="py-5 first:pt-0"><h3 className={aP(a$, aT, "mb-3")}>{e}</h3>{a}</section>;
}
let ra = (...e) => e.filter(Boolean).join(" "),
  rr = "text-neutral-900 dark:text-neutral-100",
  rt = "text-neutral-900/62 dark:text-neutral-100/62",
  rl = "text-[13px]/[16px] font-semibold tabular-nums",
  rn = "relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] text-neutral-900 dark:text-neutral-100 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] active:not-disabled:translate-y-px active:not-disabled:shadow-[inset_0_1px_3px_rgb(84_62_32/0.16),0_0_0_1px_rgb(84_62_32/0.10)] dark:active:not-disabled:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14),0_0_0_1px_rgb(84_62_32/0.10)] dark:aria-expanded:bg-neutral-800 dark:aria-expanded:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] disabled:bg-none disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] disabled:text-neutral-900/40 disabled:shadow-none dark:disabled:bg-neutral-800/60 dark:disabled:text-neutral-100/40",
  ri = "h-10 gap-2 rounded-[calc(var(--rb-r-full,999px))] px-5 text-[15px]/[20px] font-bold",
  ro = "shrink-0 text-neutral-900/78 dark:text-neutral-100/78",
  rs = "relative inline-flex min-w-0 cursor-pointer items-center justify-center gap-1.5 whitespace-nowrap [&_svg]:shrink-0 rounded-[calc(var(--rb-r-full,999px))] px-4 text-[14px]/[18px] font-bold text-neutral-900/78 dark:text-neutral-100/78 select-none transition-[background-color,color,box-shadow,outline-color,scale] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:scale-[0.96] motion-reduce:active:scale-100 hover:not-aria-checked:text-neutral-900 aria-checked:bg-white aria-checked:text-neutral-900 aria-checked:shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_2px_rgb(84_62_32/0.10),0_3px_8px_-2px_rgb(84_62_32/0.20)] disabled:cursor-not-allowed disabled:text-neutral-900/40 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:hover:not-aria-checked:text-neutral-100 dark:aria-checked:bg-[color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800))] dark:aria-checked:text-neutral-100 dark:aria-checked:shadow-[inset_0_1px_0_rgb(255_255_255/0.1),0_0_0_1px_rgb(0_0_0/0.6),0_2px_5px_-1px_rgb(0_0_0/0.6)] dark:disabled:text-neutral-100/40",
  rc = "inline-flex h-5.5 min-w-5.5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden whitespace-nowrap rounded-[calc(var(--rb-r-full,999px))] px-2.5 text-[12px]/[16px] font-bold tabular-nums",
  rd = "min-w-52 max-w-[min(480px,calc(100vw-2rem))] overflow-x-hidden overflow-y-auto overscroll-contain rounded-[calc(var(--rb-r-3xl,16px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] p-2 text-neutral-900 dark:text-neutral-100 outline-none shadow-[0_0_0_1px_rgb(84_62_32/0.08),0_24px_56px_-20px_rgb(84_62_32/0.34),0_6px_16px_-8px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.65),0_24px_56px_-16px_rgb(0_0_0/0.8)]",
  r_ = ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"],
  rb = e => {
    if (!r_.includes(e.key)) return;
    let a = Array.from(e.currentTarget.querySelectorAll('[role="radio"]')),
      r = a.indexOf(e.target);
    if (r < 0) return;
    e.preventDefault();
    let t = a.length - 1,
      l = r === t ? 0 : r + 1;
    "Home" === e.key ? l = 0 : "End" === e.key ? l = t : ("ArrowLeft" === e.key || "ArrowUp" === e.key) && (l = 0 === r ? t : r - 1), a[l].focus(), a[l].click();
  };
function ru({
  id: e,
  value: a,
  onChange: r,
  options: s,
  disabled: c,
  placeholder: d = "Select…",
  className: _,
  triggerClassName: b,
  leading: u,
  ariaLabel: x
}) {
  let p = (0, React.useId)(),
    [h, k] = (0, React.useState)(!1),
    [m, v] = (0, React.useState)(0),
    [g, f] = (0, React.useState)(!1),
    [w, y] = (0, React.useState)(),
    j = (0, React.useRef)(null),
    N = (0, React.useRef)(null),
    z = (0, React.useRef)({
      buffer: "",
      at: 0
    }),
    C = s.findIndex(e => e.value === a),
    S = C >= 0 ? s[C] : void 0,
    A = e => {
      if (c) return;
      let a = j.current,
        r = a?.ownerDocument.defaultView;
      if (a && r) {
        let e = a.getBoundingClientRect(),
          t = 0,
          l = r.innerHeight;
        for (let e = a.parentElement; e; e = e.parentElement) if (/auto|scroll|hidden|clip/.test(r.getComputedStyle(e).overflowY)) {
          let a = e.getBoundingClientRect();
          t = Math.max(t, a.top), l = Math.min(l, a.bottom);
          break;
        }
        let n = l - e.bottom,
          i = e.top - t,
          o = Math.min(32 * s.length + 8, 264),
          c = n < o + 8 && i > n,
          d = (c ? i : n) - 8;
        f(c), y(d < o ? Math.max(d, 40) : void 0);
      }
      v(e ?? (C >= 0 ? C : 0)), k(!0);
    };
  (0, React.useEffect)(() => {
    if (!h) return;
    let e = j.current,
      a = e?.ownerDocument;
    if (!a) return;
    let r = a => {
      e.contains(a.target) || k(!1);
    };
    return a.addEventListener("mousedown", r), a.addEventListener("touchstart", r), () => {
      a.removeEventListener("mousedown", r), a.removeEventListener("touchstart", r);
    };
  }, [h]), (0, React.useEffect)(() => {
    if (!h) return;
    let e = N.current,
      a = e?.querySelector(`[data-index="${m}"]`);
    if (!e || !a) return;
    let r = a.offsetTop,
      t = r + a.offsetHeight;
    r < e.scrollTop ? e.scrollTop = r : t > e.scrollTop + e.clientHeight && (e.scrollTop = t - e.clientHeight);
  }, [h, m]);
  let D = e => {
    let a = s[e];
    a && (r(a.value), k(!1), j.current?.querySelector("button")?.focus({
      preventScroll: !0
    }));
  };
  return <div ref={j} className={ra("relative", _)}><button id={e} type="button" role="combobox" aria-expanded={h} aria-controls={p} aria-haspopup="listbox" disabled={c} onClick={() => h ? k(!1) : A()} onKeyDown={e => {
      if (!c) {
        if (!h) {
          ["Enter", " ", "ArrowDown", "ArrowUp"].includes(e.key) && (e.preventDefault(), A());
          return;
        }
        if ("Escape" === e.key || "Tab" === e.key) {
          "Escape" === e.key && e.stopPropagation(), k(!1);
          return;
        }
        if ("ArrowDown" === e.key) e.preventDefault(), v(e => Math.min(e + 1, s.length - 1));else if ("ArrowUp" === e.key) e.preventDefault(), v(e => Math.max(e - 1, 0));else if ("Home" === e.key) e.preventDefault(), v(0);else if ("End" === e.key) e.preventDefault(), v(s.length - 1);else if ("Enter" === e.key || " " === e.key) e.preventDefault(), D(m);else if (1 === e.key.length && /\S/.test(e.key)) {
          let a = Date.now(),
            r = z.current;
          r.buffer = a - r.at > 700 ? e.key : r.buffer + e.key, r.at = a;
          let t = s.findIndex(e => e.label.toLowerCase().startsWith(r.buffer.toLowerCase()));
          t >= 0 && v(t);
        }
      }
    }} aria-label={x} className={ra("inline-flex h-10 w-fit min-w-40 cursor-pointer items-center justify-between gap-2 rounded-[calc(var(--rb-r-xl,12px))] border border-transparent bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] px-3.5 text-left text-[15px]/[20px] font-semibold whitespace-nowrap text-neutral-900 outline-none select-none transition-[border-color,box-shadow,background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:not-disabled:not-aria-invalid:not-aria-expanded:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] focus-visible:border-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] focus-visible:bg-white focus-visible:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-expanded:border-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] aria-expanded:bg-white aria-expanded:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-invalid:border-[oklch(60%_0.236_26)] disabled:cursor-not-allowed disabled:text-neutral-900/40 disabled:shadow-none dark:text-neutral-100 dark:hover:not-disabled:not-aria-invalid:not-aria-expanded:bg-neutral-900 dark:focus-visible:border-[var(--rb-accent,oklch(81%_0.16_163))] dark:focus-visible:bg-neutral-900 dark:focus-visible:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-expanded:border-[var(--rb-accent,oklch(81%_0.16_163))] dark:aria-expanded:bg-neutral-900 dark:aria-expanded:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-invalid:border-[oklch(65.2%_0.219_26)] dark:disabled:text-neutral-100/40", "w-full min-w-[100%]", b)}><span className="flex min-w-0 items-center gap-2">{u}<span className={ra("truncate", !S && "text-neutral-900/62 dark:text-neutral-100/62")}>{S ? S.label : d}</span></span><__mod_22728.n icon={__mod_31517.A} size={18} strokeWidth={2} aria-hidden="true" className={ro} /></button>{h && <ul ref={N} id={p} role="listbox" tabIndex={-1} style={{
      maxHeight: w
    }} className={ra(rd, "absolute z-30 max-h-[264px] w-full min-w-[100%]", g ? "bottom-full mb-1.5" : "top-full mt-1.5")}>{s.map((e, r) => {
        let l = e.value === a;
        return <li role="option" aria-selected={l} data-index={r} data-highlighted={r === m || void 0} onMouseEnter={() => v(r)} onClick={() => D(r)} className={ra("relative flex min-h-10 w-full cursor-default items-center gap-2.5 rounded-[calc(var(--rb-r-md,8px))] px-3 py-2 text-left text-[15px]/[20px] font-semibold text-neutral-900 outline-none select-none [&_svg]:shrink-0 [&_svg]:text-neutral-900/70 hover:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] focus-visible:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] data-[highlighted]:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-disabled:cursor-not-allowed aria-disabled:text-neutral-900/40 dark:text-neutral-100 dark:[&_svg]:text-neutral-100/70 dark:hover:bg-neutral-100/7 dark:focus-visible:bg-neutral-100/7 dark:data-[highlighted]:bg-neutral-100/7 dark:aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-disabled:text-neutral-100/40", "pe-8")}><span className="flex min-w-0 items-baseline gap-2"><span className="truncate">{e.label}</span>{e.hint && <span className={ra(rl, rt, "shrink-0")}>{e.hint}</span>}</span>{l && <__mod_22728.n icon={__mod_90987.A} size={18} strokeWidth={2} aria-hidden="true" className="pointer-events-none absolute end-2" />}</li>;
      })}</ul>}</div>;
}
let rx = [{
    value: "logo",
    label: "Logo"
  }, {
    value: "photo",
    label: "Photography"
  }, {
    value: "illustration",
    label: "Illustration"
  }, {
    value: "icon",
    label: "Icon"
  }, {
    value: "template",
    label: "Template"
  }],
  rp = [{
    value: "landscape",
    label: "Landscape"
  }, {
    value: "square",
    label: "Square"
  }, {
    value: "portrait",
    label: "Portrait"
  }],
  rh = [{
    value: "brand",
    label: "Brand"
  }, {
    value: "campaign",
    label: "Campaign"
  }, {
    value: "product",
    label: "Product"
  }, {
    value: "social",
    label: "Social"
  }, {
    value: "web",
    label: "Web"
  }],
  rk = [{
    value: "24h",
    label: "Today"
  }, {
    value: "7d",
    label: "This week"
  }, {
    value: "30d",
    label: "This month"
  }, {
    value: "older",
    label: "Older"
  }],
  rm = {
    logo: __mod_95518.A,
    photo: __mod_22776.A,
    illustration: __mod_67251.A,
    icon: __mod_52785.A,
    template: __mod_92916.A
  },
  rv = {
    landscape: "aspect-[4/3]",
    square: "aspect-square",
    portrait: "aspect-[3/4]"
  },
  rg = [{
    id: "a1",
    name: "Primary wordmark",
    ext: "svg",
    type: "logo",
    orientation: "square",
    tags: ["brand"],
    updatedDays: 2,
    width: 512,
    height: 512,
    sizeKb: 28
  }, {
    id: "a2",
    name: "Monogram mark",
    ext: "svg",
    type: "logo",
    orientation: "square",
    tags: ["brand"],
    updatedDays: 9,
    width: 512,
    height: 512,
    sizeKb: 22
  }, {
    id: "a3",
    name: "App icon rounded",
    ext: "png",
    type: "icon",
    orientation: "square",
    tags: ["product", "brand"],
    updatedDays: 1,
    width: 1024,
    height: 1024,
    sizeKb: 84
  }, {
    id: "a4",
    name: "Hero banner autumn",
    ext: "jpg",
    type: "photo",
    orientation: "landscape",
    tags: ["campaign", "web"],
    updatedDays: 3,
    width: 2400,
    height: 1600,
    sizeKb: 3820
  }, {
    id: "a5",
    name: "Team offsite group",
    ext: "jpg",
    type: "photo",
    orientation: "landscape",
    tags: ["social"],
    updatedDays: 14,
    width: 2400,
    height: 1600,
    sizeKb: 4120
  }, {
    id: "a6",
    name: "Founder portrait",
    ext: "jpg",
    type: "photo",
    orientation: "portrait",
    tags: ["social", "web"],
    updatedDays: 6,
    width: 1600,
    height: 2400,
    sizeKb: 2960
  }, {
    id: "a7",
    name: "Product on desk",
    ext: "jpg",
    type: "photo",
    orientation: "square",
    tags: ["product"],
    updatedDays: 4,
    width: 2e3,
    height: 2e3,
    sizeKb: 3510
  }, {
    id: "a8",
    name: "Empty-state spot",
    ext: "png",
    type: "illustration",
    orientation: "landscape",
    tags: ["web", "product"],
    updatedDays: 5,
    width: 1800,
    height: 1350,
    sizeKb: 640
  }, {
    id: "a9",
    name: "Onboarding scene",
    ext: "png",
    type: "illustration",
    orientation: "portrait",
    tags: ["product"],
    updatedDays: 20,
    width: 1350,
    height: 1800,
    sizeKb: 720
  }, {
    id: "a10",
    name: "Mesh pattern tile",
    ext: "png",
    type: "illustration",
    orientation: "square",
    tags: ["brand"],
    updatedDays: 45,
    width: 1600,
    height: 1600,
    sizeKb: 540
  }, {
    id: "a11",
    name: "Social card layout",
    ext: "fig",
    type: "template",
    orientation: "landscape",
    tags: ["social", "campaign"],
    updatedDays: 2,
    width: 1200,
    height: 630,
    sizeKb: 1180
  }, {
    id: "a12",
    name: "Pitch deck cover",
    ext: "fig",
    type: "template",
    orientation: "landscape",
    tags: ["brand"],
    updatedDays: 30,
    width: 1920,
    height: 1080,
    sizeKb: 1620
  }, {
    id: "a13",
    name: "Story frame layout",
    ext: "fig",
    type: "template",
    orientation: "portrait",
    tags: ["social"],
    updatedDays: 8,
    width: 1080,
    height: 1920,
    sizeKb: 1440
  }, {
    id: "a14",
    name: "Favicon set",
    ext: "svg",
    type: "icon",
    orientation: "square",
    tags: ["web"],
    updatedDays: 12,
    width: 256,
    height: 256,
    sizeKb: 16
  }, {
    id: "a15",
    name: "Nav glyph sheet",
    ext: "svg",
    type: "icon",
    orientation: "square",
    tags: ["web", "product"],
    updatedDays: 7,
    width: 512,
    height: 512,
    sizeKb: 34
  }, {
    id: "a16",
    name: "Campaign key visual",
    ext: "jpg",
    type: "photo",
    orientation: "portrait",
    tags: ["campaign"],
    updatedDays: 1,
    width: 1600,
    height: 2400,
    sizeKb: 3240
  }, {
    id: "a17",
    name: "Blog header abstract",
    ext: "png",
    type: "illustration",
    orientation: "landscape",
    tags: ["web"],
    updatedDays: 22,
    width: 2e3,
    height: 1e3,
    sizeKb: 480
  }, {
    id: "a18",
    name: "Secondary logo dark",
    ext: "svg",
    type: "logo",
    orientation: "landscape",
    tags: ["brand", "web"],
    updatedDays: 40,
    width: 800,
    height: 300,
    sizeKb: 30
  }, {
    id: "a19",
    name: "Accent star icon",
    ext: "svg",
    type: "icon",
    orientation: "square",
    tags: ["product"],
    updatedDays: 60,
    width: 128,
    height: 128,
    sizeKb: 8
  }, {
    id: "a20",
    name: "Lifestyle wide shot",
    ext: "jpg",
    type: "photo",
    orientation: "landscape",
    tags: ["campaign", "social"],
    updatedDays: 5,
    width: 2400,
    height: 1350,
    sizeKb: 3980
  }],
  rf = [{
    value: "recent",
    label: "Recently updated"
  }, {
    value: "name",
    label: "Name A–Z"
  }, {
    value: "large",
    label: "File size: large to small"
  }, {
    value: "small",
    label: "File size: small to large"
  }],
  rw = {
    type: [],
    orientation: [],
    tag: [],
    updated: []
  },
  ry = (e, a, r) => {
    let t;
    return "type" === a ? e.type === r : "orientation" === a ? e.orientation === r : "tag" === a ? e.tags.includes(r) : ((t = e.updatedDays) <= 1 ? "24h" : t <= 7 ? "7d" : t <= 30 ? "30d" : "older") === r;
  },
  rj = (e, a, r) => {
    for (let t of ["type", "orientation", "tag", "updated"]) {
      if (t === r) continue;
      let l = a[t];
      if (l.length && !l.some(a => ry(e, t, a))) return !1;
    }
    return !0;
  },
  rN = {
    type: e => rx.find(a => a.value === e)?.label ?? e,
    orientation: e => rp.find(a => a.value === e)?.label ?? e,
    tag: e => rh.find(a => a.value === e)?.label ?? e,
    updated: e => rk.find(a => a.value === e)?.label ?? e
  };
function rz({
  label: e,
  options: a,
  selected: r,
  onToggle: i,
  onClear: s,
  counts: c
}) {
  let [d, _] = (0, React.useState)(!1),
    [b, u] = (0, React.useState)(!1),
    x = (0, React.useRef)(null),
    p = r.length,
    h = () => {
      _(!1), u(!1);
    };
  return (0, React.useEffect)(() => {
    if (!d) return;
    let e = x.current,
      a = e?.ownerDocument;
    if (!a) return;
    let r = a => {
      e.contains(a.target) || h();
    };
    return a.addEventListener("mousedown", r), a.addEventListener("touchstart", r), () => {
      a.removeEventListener("mousedown", r), a.removeEventListener("touchstart", r);
    };
  }, [d]), (0, React.useEffect)(() => {
    if (!d) return;
    let e = x.current?.ownerDocument.defaultView;
    if (!e) return;
    let a = e.requestAnimationFrame(() => u(!0));
    return () => e.cancelAnimationFrame(a);
  }, [d]), <div ref={x} className="relative"><button type="button" aria-expanded={d} aria-haspopup="true" onClick={() => d ? h() : _(!0)} className={ra(rn, ri)}>{e}{p > 0 && <span className={ra(rc, "bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] text-neutral-900 dark:text-neutral-100 dark:bg-neutral-100/12")}>{p}</span>}<__mod_22728.n icon={__mod_20148.A} size={18} strokeWidth={2} aria-hidden="true" className={ra(ro, d && "rotate-180")} /></button>{d && <div className={ra(rd, "transition-[opacity,scale] duration-[260ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] starting:scale-[0.94] starting:opacity-0 motion-reduce:transition-none motion-reduce:starting:scale-100", "absolute top-full left-0 z-30 mt-1.5 w-[240px] min-w-[240px]")} style={{
      opacity: +!!b
    }}><ul className="space-y-0.5">{a.map(e => {
          let a = c[e.value] ?? 0,
            l = r.includes(e.value);
          return <li><label className={ra("flex h-10 w-full min-w-0 cursor-pointer items-center gap-2.5 rounded-[calc(var(--rb-r-full,999px))] px-3 text-left text-[15px]/[20px] font-semibold text-neutral-900/75 transition-[background-color,box-shadow,color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] [&_svg]:shrink-0 hover:bg-neutral-900/5 hover:text-neutral-900 aria-[current=page]:bg-white aria-[current=page]:font-bold aria-[current=page]:text-neutral-900 aria-[current=page]:shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:text-neutral-100/75 dark:hover:bg-neutral-100/6 dark:hover:text-neutral-100 dark:aria-[current=page]:bg-[color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800))] dark:aria-[current=page]:text-neutral-100 dark:aria-[current=page]:shadow-[inset_0_1px_0_rgb(255_255_255/0.08),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)]", 0 === a && !l && "opacity-40")}><span className="relative inline-flex size-[18px] shrink-0 items-center justify-center"><input type="checkbox" checked={l} onChange={() => i(e.value)} className="peer size-[18px] shrink-0 cursor-pointer appearance-none rounded-[calc(var(--rb-r-sm,6px))] border-2 border-neutral-900/28 bg-white transition-[background-color,border-color,box-shadow,outline-color,scale] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:scale-[0.86] motion-reduce:active:scale-100 hover:not-checked:not-disabled:border-neutral-900/60 active:not-checked:bg-neutral-900/8 checked:border-transparent checked:bg-[var(--rb-accent,oklch(84%_0.15_165))] indeterminate:border-transparent indeterminate:bg-[var(--rb-accent,oklch(84%_0.15_165))] checked:shadow-[inset_0_1px_0_rgb(255_255_255/0.4),inset_0_-1.5px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] indeterminate:shadow-[inset_0_1px_0_rgb(255_255_255/0.4),inset_0_-1.5px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] aria-invalid:border-[oklch(60%_0.236_26)] disabled:cursor-not-allowed disabled:border-neutral-900/20 disabled:checked:bg-neutral-900/25 disabled:checked:shadow-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:border-neutral-100/34 dark:bg-neutral-900 dark:hover:not-checked:not-disabled:border-neutral-100/70 dark:active:not-checked:bg-neutral-100/10 dark:checked:bg-[var(--rb-accent,oklch(81%_0.16_163))] dark:indeterminate:bg-[var(--rb-accent,oklch(81%_0.16_163))] dark:checked:shadow-none dark:indeterminate:shadow-none dark:aria-invalid:border-[oklch(65.2%_0.219_26)] dark:disabled:border-neutral-100/24 dark:disabled:checked:bg-neutral-100/28" /><__mod_22728.n icon={__mod_90987.A} size={14} strokeWidth={2.5} aria-hidden="true" className="pointer-events-none absolute scale-50 text-[var(--rb-accent-fg,oklch(26%_0.06_168))] opacity-0 transition-[opacity,scale] duration-[260ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] peer-checked:scale-100 peer-checked:opacity-100 peer-indeterminate:scale-100 peer-indeterminate:opacity-100 peer-active:scale-[0.86] motion-reduce:transition-none dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))]" /></span><span className="min-w-0 flex-1 truncate">{e.label}</span><span className={ra("ms-auto text-[13px]/[16px] font-bold tabular-nums text-neutral-900/62 dark:text-neutral-100/62", "shrink-0")}>{a}</span></label></li>;
        })}</ul>{p > 0 && <div className="mt-1 px-1 pt-1"><button type="button" onClick={s} className={ra(rn, "h-8 gap-1.5 rounded-[calc(var(--rb-r-full,999px))] px-3.5 text-[14px]/[18px] font-bold", "w-full")}>Clear {e.toLowerCase()}</button></div>}</div>}</div>;
}
let rC = [{
  key: "type",
  label: "Type",
  options: rx
}, {
  key: "orientation",
  label: "Orientation",
  options: rp
}, {
  key: "tag",
  label: "Tag",
  options: rh
}, {
  key: "updated",
  label: "Updated",
  options: rk
}];
let rA = (...e) => e.filter(Boolean).join(" "),
  rD = "text-neutral-900 dark:text-neutral-100",
  rE = "text-neutral-900/62 dark:text-neutral-100/62",
  rM = "text-[17px]/[26px] font-medium",
  rL = "text-[14px]/[20px] font-medium",
  rR = "text-[15px]/[20px] font-bold",
  rP = "text-[13px]/[16px] font-semibold tabular-nums",
  rT = "relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_68%,white),var(--rb-accent,oklch(84%_0.15_165)))] text-[var(--rb-accent-fg,oklch(26%_0.06_168))] shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_4px_10px_-4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_80%,transparent)] hover:not-disabled:-translate-y-px hover:not-disabled:brightness-[1.04] hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_7px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_85%,transparent)] active:not-disabled:translate-y-px active:not-disabled:brightness-[0.98] active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_55%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] motion-reduce:hover:translate-y-0 disabled:opacity-45 disabled:shadow-none dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_78%,white),var(--rb-accent,oklch(81%_0.16_163)))] dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_6px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,transparent)] dark:hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_9px_22px_-8px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_60%,transparent)] dark:active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_45%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black)] dark:disabled:shadow-none",
  rW = "relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] text-neutral-900 dark:text-neutral-100 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] active:not-disabled:translate-y-px active:not-disabled:shadow-[inset_0_1px_3px_rgb(84_62_32/0.16),0_0_0_1px_rgb(84_62_32/0.10)] dark:active:not-disabled:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14),0_0_0_1px_rgb(84_62_32/0.10)] dark:aria-expanded:bg-neutral-800 dark:aria-expanded:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] disabled:bg-none disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] disabled:text-neutral-900/40 disabled:shadow-none dark:disabled:bg-neutral-800/60 dark:disabled:text-neutral-100/40",
  rH = "h-10 gap-2 rounded-[calc(var(--rb-r-full,999px))] px-5 text-[15px]/[20px] font-bold",
  r$ = "flex h-10 w-full min-w-0 cursor-pointer items-center gap-2.5 rounded-[calc(var(--rb-r-full,999px))] px-3 text-left text-[15px]/[20px] font-semibold text-neutral-900/75 transition-[background-color,box-shadow,color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] [&_svg]:shrink-0 hover:bg-neutral-900/5 hover:text-neutral-900 aria-[current=page]:bg-white aria-[current=page]:font-bold aria-[current=page]:text-neutral-900 aria-[current=page]:shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:text-neutral-100/75 dark:hover:bg-neutral-100/6 dark:hover:text-neutral-100 dark:aria-[current=page]:bg-[color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800))] dark:aria-[current=page]:text-neutral-100 dark:aria-[current=page]:shadow-[inset_0_1px_0_rgb(255_255_255/0.08),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)]",
  rq = "ms-auto text-[13px]/[16px] font-bold tabular-nums text-neutral-900/62 dark:text-neutral-100/62",
  rI = "inline-flex h-8 cursor-pointer items-center rounded-[calc(var(--rb-r-full,999px))] px-3 text-[14px]/[18px] font-bold text-neutral-900/78 dark:text-neutral-100/78 transition-[background-color,color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-neutral-900/5 hover:text-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:hover:bg-neutral-100/6 dark:hover:text-neutral-100";
function rB({
  id: e,
  value: a,
  onChange: r,
  options: s,
  disabled: c,
  placeholder: d = "Select…",
  className: _,
  triggerClassName: b,
  leading: u,
  ariaLabel: x
}) {
  let p = (0, React.useId)(),
    [h, k] = (0, React.useState)(!1),
    [m, v] = (0, React.useState)(0),
    [g, f] = (0, React.useState)(!1),
    [w, y] = (0, React.useState)(),
    j = (0, React.useRef)(null),
    N = (0, React.useRef)(null),
    z = (0, React.useRef)({
      buffer: "",
      at: 0
    }),
    C = s.findIndex(e => e.value === a),
    S = C >= 0 ? s[C] : void 0,
    A = e => {
      if (c) return;
      let a = j.current,
        r = a?.ownerDocument.defaultView;
      if (a && r) {
        let e = a.getBoundingClientRect(),
          t = 0,
          l = r.innerHeight;
        for (let e = a.parentElement; e; e = e.parentElement) if (/auto|scroll|hidden|clip/.test(r.getComputedStyle(e).overflowY)) {
          let a = e.getBoundingClientRect();
          t = Math.max(t, a.top), l = Math.min(l, a.bottom);
          break;
        }
        let n = l - e.bottom,
          i = e.top - t,
          o = Math.min(32 * s.length + 8, 264),
          c = n < o + 8 && i > n,
          d = (c ? i : n) - 8;
        f(c), y(d < o ? Math.max(d, 40) : void 0);
      }
      v(e ?? (C >= 0 ? C : 0)), k(!0);
    };
  (0, React.useEffect)(() => {
    if (!h) return;
    let e = j.current,
      a = e?.ownerDocument;
    if (!a) return;
    let r = a => {
      e.contains(a.target) || k(!1);
    };
    return a.addEventListener("mousedown", r), a.addEventListener("touchstart", r), () => {
      a.removeEventListener("mousedown", r), a.removeEventListener("touchstart", r);
    };
  }, [h]), (0, React.useEffect)(() => {
    if (!h) return;
    let e = N.current,
      a = e?.querySelector(`[data-index="${m}"]`);
    if (!e || !a) return;
    let r = a.offsetTop,
      t = r + a.offsetHeight;
    r < e.scrollTop ? e.scrollTop = r : t > e.scrollTop + e.clientHeight && (e.scrollTop = t - e.clientHeight);
  }, [h, m]);
  let D = e => {
    let a = s[e];
    a && (r(a.value), k(!1), j.current?.querySelector("button")?.focus({
      preventScroll: !0
    }));
  };
  return <div ref={j} className={rA("relative", _)}><button id={e} type="button" role="combobox" aria-expanded={h} aria-controls={p} aria-haspopup="listbox" disabled={c} onClick={() => h ? k(!1) : A()} onKeyDown={e => {
      if (!c) {
        if (!h) {
          ["Enter", " ", "ArrowDown", "ArrowUp"].includes(e.key) && (e.preventDefault(), A());
          return;
        }
        if ("Escape" === e.key || "Tab" === e.key) {
          "Escape" === e.key && e.stopPropagation(), k(!1);
          return;
        }
        if ("ArrowDown" === e.key) e.preventDefault(), v(e => Math.min(e + 1, s.length - 1));else if ("ArrowUp" === e.key) e.preventDefault(), v(e => Math.max(e - 1, 0));else if ("Home" === e.key) e.preventDefault(), v(0);else if ("End" === e.key) e.preventDefault(), v(s.length - 1);else if ("Enter" === e.key || " " === e.key) e.preventDefault(), D(m);else if (1 === e.key.length && /\S/.test(e.key)) {
          let a = Date.now(),
            r = z.current;
          r.buffer = a - r.at > 700 ? e.key : r.buffer + e.key, r.at = a;
          let t = s.findIndex(e => e.label.toLowerCase().startsWith(r.buffer.toLowerCase()));
          t >= 0 && v(t);
        }
      }
    }} aria-label={x} className={rA("inline-flex h-10 w-fit min-w-40 cursor-pointer items-center justify-between gap-2 rounded-[calc(var(--rb-r-xl,12px))] border border-transparent bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] px-3.5 text-left text-[15px]/[20px] font-semibold whitespace-nowrap text-neutral-900 outline-none select-none transition-[border-color,box-shadow,background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:not-disabled:not-aria-invalid:not-aria-expanded:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] focus-visible:border-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] focus-visible:bg-white focus-visible:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-expanded:border-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] aria-expanded:bg-white aria-expanded:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-invalid:border-[oklch(60%_0.236_26)] disabled:cursor-not-allowed disabled:text-neutral-900/40 disabled:shadow-none dark:text-neutral-100 dark:hover:not-disabled:not-aria-invalid:not-aria-expanded:bg-neutral-900 dark:focus-visible:border-[var(--rb-accent,oklch(81%_0.16_163))] dark:focus-visible:bg-neutral-900 dark:focus-visible:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-expanded:border-[var(--rb-accent,oklch(81%_0.16_163))] dark:aria-expanded:bg-neutral-900 dark:aria-expanded:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-invalid:border-[oklch(65.2%_0.219_26)] dark:disabled:text-neutral-100/40", "w-full min-w-[100%]", b)}><span className="flex min-w-0 items-center gap-2">{u}<span className={rA("truncate", !S && "text-neutral-900/62 dark:text-neutral-100/62")}>{S ? S.label : d}</span></span><__mod_22728.n icon={__mod_31517.A} size={18} strokeWidth={2} aria-hidden="true" className="shrink-0 text-neutral-900/78 dark:text-neutral-100/78" /></button>{h && <ul ref={N} id={p} role="listbox" tabIndex={-1} style={{
      maxHeight: w
    }} className={rA("min-w-52 max-w-[min(480px,calc(100vw-2rem))] overflow-x-hidden overflow-y-auto overscroll-contain rounded-[calc(var(--rb-r-3xl,16px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] p-2 text-neutral-900 dark:text-neutral-100 outline-none shadow-[0_0_0_1px_rgb(84_62_32/0.08),0_24px_56px_-20px_rgb(84_62_32/0.34),0_6px_16px_-8px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.65),0_24px_56px_-16px_rgb(0_0_0/0.8)]", "absolute z-30 max-h-[264px] w-full min-w-[100%]", g ? "bottom-full mb-1.5" : "top-full mt-1.5")}>{s.map((e, r) => {
        let l = e.value === a;
        return <li role="option" aria-selected={l} data-index={r} data-highlighted={r === m || void 0} onMouseEnter={() => v(r)} onClick={() => D(r)} className={rA("relative flex min-h-10 w-full cursor-default items-center gap-2.5 rounded-[calc(var(--rb-r-md,8px))] px-3 py-2 text-left text-[15px]/[20px] font-semibold text-neutral-900 outline-none select-none [&_svg]:shrink-0 [&_svg]:text-neutral-900/70 hover:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] focus-visible:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] data-[highlighted]:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-disabled:cursor-not-allowed aria-disabled:text-neutral-900/40 dark:text-neutral-100 dark:[&_svg]:text-neutral-100/70 dark:hover:bg-neutral-100/7 dark:focus-visible:bg-neutral-100/7 dark:data-[highlighted]:bg-neutral-100/7 dark:aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-disabled:text-neutral-100/40", "pe-8")}><span className="flex min-w-0 items-baseline gap-2"><span className="truncate">{e.label}</span>{e.hint && <span className={rA(rP, rE, "shrink-0")}>{e.hint}</span>}</span>{l && <__mod_22728.n icon={__mod_90987.A} size={18} strokeWidth={2} aria-hidden="true" className="pointer-events-none absolute end-2" />}</li>;
      })}</ul>}</div>;
}
function rF({
  min: e,
  max: a,
  step: r = 1,
  value: n,
  onChange: i,
  format: o,
  labels: s
}) {
  let c = (0, React.useRef)(null),
    [d, _] = (0, React.useState)(null),
    b = t => Math.min(a, Math.max(e, Math.round(t / r) * r)),
    u = r => (r - e) / (a - e) * 100,
    x = r => {
      let t = c.current;
      if (!t) return e;
      let l = t.getBoundingClientRect();
      return 0 === l.width ? e : b(e + (r - l.left) / l.width * (a - e));
    },
    p = (e, a) => {
      let [r, t] = n;
      0 === e ? i([Math.min(a, t), t]) : i([r, Math.max(a, r)]);
    },
    h = t => ({
      role: "slider",
      tabIndex: 0,
      "aria-label": s[t],
      "aria-valuemin": e,
      "aria-valuemax": a,
      "aria-valuenow": n[t],
      "aria-valuetext": o(n[t]),
      style: {
        left: `${u(n[t])}%`,
        touchAction: "none"
      },
      onPointerDown: e => {
        e.preventDefault(), e.stopPropagation(), e.currentTarget.setPointerCapture(e.pointerId), _(t);
      },
      onPointerMove: e => {
        d === t && p(t, x(e.clientX));
      },
      onLostPointerCapture: () => _(null),
      onPointerUp: e => {
        e.currentTarget.releasePointerCapture(e.pointerId), _(null);
      },
      onKeyDown: l => {
        let i = Math.max(r, Math.round((a - e) / 10)),
          o = n[t],
          s = null;
        "ArrowLeft" === l.key || "ArrowDown" === l.key ? s = o - r : "ArrowRight" === l.key || "ArrowUp" === l.key ? s = o + r : "PageDown" === l.key ? s = o - i : "PageUp" === l.key ? s = o + i : "Home" === l.key ? s = e : "End" === l.key && (s = a), null !== s && (l.preventDefault(), p(t, b(s)));
      },
      className: "absolute top-1/2 block size-5 -translate-x-1/2 -translate-y-1/2 cursor-grab rounded-full bg-white shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_2px_rgb(84_62_32/0.10),0_3px_8px_-2px_rgb(84_62_32/0.20)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.12),0_0_0_1px_rgb(0_0_0/0.6),0_2px_6px_-1px_rgb(0_0_0/0.6)] transition-[scale] duration-[240ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:scale-110 active:scale-110 active:cursor-grabbing motion-reduce:transition-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:bg-white"
    });
  return <div ref={c} onPointerDown={e => {
    let a = x(e.clientX);
    p(Math.abs(a - n[0]) <= Math.abs(a - n[1]) ? 0 : 1, a);
  }} className="relative flex h-4 w-full cursor-pointer touch-none items-center select-none"><span className="relative h-2 w-full grow rounded-[calc(var(--rb-r-full,999px))] bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] shadow-[inset_0_1px_2px_rgb(84_62_32/0.12)] dark:bg-neutral-100/14 dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.5)]"><span className="absolute inset-y-0 rounded-[calc(var(--rb-r-full,999px))] bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_82%,black)] dark:bg-[var(--rb-accent,oklch(81%_0.16_163))]" style={{
        left: `${u(n[0])}%`,
        width: `${u(n[1]) - u(n[0])}%`
      }} /></span><div {...h(0)} /><div {...h(1)} /></div>;
}
let rK = [{
    value: "NW",
    label: "Northwind"
  }, {
    value: "SV",
    label: "Silverline"
  }, {
    value: "AP",
    label: "Apex Air"
  }, {
    value: "CN",
    label: "Cascade"
  }, {
    value: "MR",
    label: "Meridian"
  }],
  rO = [{
    value: "any",
    label: "Any number of stops"
  }, {
    value: "0",
    label: "Nonstop only"
  }, {
    value: "1",
    label: "1 stop or fewer"
  }, {
    value: "2",
    label: "2 stops or fewer"
  }],
  rU = [{
    id: "f1",
    airline: "NW",
    depart: 360,
    duration: 330,
    stops: 0,
    price: 289,
    carryOn: !0
  }, {
    id: "f2",
    airline: "SV",
    depart: 465,
    duration: 335,
    stops: 0,
    price: 312,
    carryOn: !0
  }, {
    id: "f3",
    airline: "AP",
    depart: 420,
    duration: 470,
    stops: 1,
    price: 214,
    carryOn: !1
  }, {
    id: "f4",
    airline: "CN",
    depart: 540,
    duration: 505,
    stops: 1,
    price: 198,
    carryOn: !0
  }, {
    id: "f5",
    airline: "MR",
    depart: 600,
    duration: 340,
    stops: 0,
    price: 358,
    carryOn: !0
  }, {
    id: "f6",
    airline: "NW",
    depart: 690,
    duration: 455,
    stops: 1,
    price: 231,
    carryOn: !1
  }, {
    id: "f7",
    airline: "SV",
    depart: 300,
    duration: 620,
    stops: 2,
    price: 176,
    carryOn: !1
  }, {
    id: "f8",
    airline: "AP",
    depart: 780,
    duration: 345,
    stops: 0,
    price: 334,
    carryOn: !0
  }, {
    id: "f9",
    airline: "CN",
    depart: 855,
    duration: 590,
    stops: 2,
    price: 189,
    carryOn: !1
  }, {
    id: "f10",
    airline: "MR",
    depart: 930,
    duration: 480,
    stops: 1,
    price: 256,
    carryOn: !0
  }, {
    id: "f11",
    airline: "NW",
    depart: 1020,
    duration: 335,
    stops: 0,
    price: 372,
    carryOn: !0
  }, {
    id: "f12",
    airline: "SV",
    depart: 1080,
    duration: 500,
    stops: 1,
    price: 243,
    carryOn: !1
  }, {
    id: "f13",
    airline: "AP",
    depart: 1170,
    duration: 350,
    stops: 0,
    price: 298,
    carryOn: !0
  }, {
    id: "f14",
    airline: "CN",
    depart: 1260,
    duration: 610,
    stops: 2,
    price: 167,
    carryOn: !1
  }, {
    id: "f15",
    airline: "MR",
    depart: 1320,
    duration: 355,
    stops: 0,
    price: 405,
    carryOn: !0
  }],
  rV = [{
    value: "cheapest",
    label: "Cheapest"
  }, {
    value: "fastest",
    label: "Fastest"
  }, {
    value: "earliest",
    label: "Earliest departure"
  }],
  rG = e => e.toString().padStart(2, "0"),
  rQ = e => {
    let a = (e % 1440 + 1440) % 1440;
    return `${rG(Math.floor(a / 60))}:${rG(a % 60)}`;
  },
  rX = e => 1440 === e ? "24:00" : rQ(e),
  rY = e => {
    let a = Math.floor(e / 60),
      r = e % 60;
    return 0 === r ? `${a}h` : `${a}h ${r}m`;
  },
  rJ = e => `$${e}`,
  rZ = {
    stops: "any",
    depart: [0, 1440],
    duration: [300, 660],
    airlines: [],
    carryOn: !1
  },
  r0 = (e, a, r) => {
    if ("stops" !== r && "any" !== a.stops) {
      let r = Number(a.stops);
      if (0 === r ? 0 !== e.stops : e.stops > r) return !1;
    }
    return ("depart" === r || !(e.depart < a.depart[0]) && !(e.depart > a.depart[1])) && ("duration" === r || !(e.duration < a.duration[0]) && !(e.duration > a.duration[1])) && ("airlines" === r || !a.airlines.length || !!a.airlines.includes(e.airline)) && ("carryOn" === r || !a.carryOn || !!e.carryOn);
  };
function r1({
  label: e,
  children: a
}) {
  return <section className="py-5 first:pt-0"><h3 className={rA(rR, rD, "mb-3")}>{e}</h3>{a}</section>;
}
let r8 = (...e) => e.filter(Boolean).join(" "),
  r4 = "text-neutral-900 dark:text-neutral-100",
  r9 = "text-neutral-900/62 dark:text-neutral-100/62",
  r3 = "text-[22px]/[28px] font-extrabold tracking-[-0.01em]",
  r7 = "text-[13px]/[16px] font-semibold tabular-nums",
  te = "relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] text-neutral-900 dark:text-neutral-100 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] active:not-disabled:translate-y-px active:not-disabled:shadow-[inset_0_1px_3px_rgb(84_62_32/0.16),0_0_0_1px_rgb(84_62_32/0.10)] dark:active:not-disabled:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14),0_0_0_1px_rgb(84_62_32/0.10)] dark:aria-expanded:bg-neutral-800 dark:aria-expanded:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] disabled:bg-none disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] disabled:text-neutral-900/40 disabled:shadow-none dark:disabled:bg-neutral-800/60 dark:disabled:text-neutral-100/40",
  ta = "size-8 rounded-[calc(var(--rb-r-full,999px))]",
  tr = "inline-flex w-fit max-w-full items-stretch gap-1 rounded-[calc(var(--rb-r-full,999px)_+_min(4px,var(--rb-r-full,999px)))] bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] p-1",
  tt = "h-10",
  tl = "relative inline-flex min-w-0 cursor-pointer items-center justify-center gap-1.5 whitespace-nowrap [&_svg]:shrink-0 rounded-[calc(var(--rb-r-full,999px))] px-4 text-[14px]/[18px] font-bold text-neutral-900/78 dark:text-neutral-100/78 select-none transition-[background-color,color,box-shadow,outline-color,scale] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:scale-[0.96] motion-reduce:active:scale-100 hover:not-aria-checked:text-neutral-900 aria-checked:bg-white aria-checked:text-neutral-900 aria-checked:shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_2px_rgb(84_62_32/0.10),0_3px_8px_-2px_rgb(84_62_32/0.20)] disabled:cursor-not-allowed disabled:text-neutral-900/40 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:hover:not-aria-checked:text-neutral-100 dark:aria-checked:bg-[color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800))] dark:aria-checked:text-neutral-100 dark:aria-checked:shadow-[inset_0_1px_0_rgb(255_255_255/0.1),0_0_0_1px_rgb(0_0_0/0.6),0_2px_5px_-1px_rgb(0_0_0/0.6)] dark:disabled:text-neutral-100/40",
  tn = "inline-flex h-5.5 min-w-5.5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden whitespace-nowrap rounded-[calc(var(--rb-r-full,999px))] px-2.5 text-[12px]/[16px] font-bold tabular-nums",
  ti = "bg-white text-neutral-900 dark:text-neutral-100 shadow-[0_0_0_1px_rgb(84_62_32/0.09),0_1px_2px_rgb(84_62_32/0.08)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_0_0_1px_rgb(0_0_0/0.55)] dark:bg-neutral-800",
  to = "relative inline-flex h-8 max-w-full min-w-0 shrink-0 cursor-pointer items-center gap-1.5 whitespace-nowrap rounded-[calc(var(--rb-r-full,999px))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] px-3.5 text-[14px]/[18px] font-bold text-neutral-900 dark:text-neutral-100 select-none transition-[background-color,border-color,box-shadow,color,scale,translate,outline-color] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:translate-y-px active:duration-[90ms] motion-reduce:active:translate-y-0 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] aria-pressed:bg-none aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-pressed:shadow-[inset_0_0_0_1.5px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14)] disabled:cursor-not-allowed disabled:text-neutral-900/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-pressed:shadow-[inset_0_0_0_1.5px_var(--rb-accent,oklch(81%_0.16_163))] dark:aria-expanded:bg-neutral-800 dark:disabled:text-neutral-100/40",
  ts = ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"],
  tc = e => {
    if (!ts.includes(e.key)) return;
    let a = Array.from(e.currentTarget.querySelectorAll('[role="radio"]')),
      r = a.indexOf(e.target);
    if (r < 0) return;
    e.preventDefault();
    let t = a.length - 1,
      l = r === t ? 0 : r + 1;
    "Home" === e.key ? l = 0 : "End" === e.key ? l = t : ("ArrowLeft" === e.key || "ArrowUp" === e.key) && (l = 0 === r ? t : r - 1), a[l].focus(), a[l].click();
  };
function td({
  id: e,
  value: a,
  onChange: r,
  options: s,
  disabled: c,
  placeholder: d = "Select…",
  className: _,
  triggerClassName: b,
  leading: u,
  ariaLabel: x
}) {
  let p = (0, React.useId)(),
    [h, k] = (0, React.useState)(!1),
    [m, v] = (0, React.useState)(0),
    [g, f] = (0, React.useState)(!1),
    [w, y] = (0, React.useState)(),
    j = (0, React.useRef)(null),
    N = (0, React.useRef)(null),
    z = (0, React.useRef)({
      buffer: "",
      at: 0
    }),
    C = s.findIndex(e => e.value === a),
    S = C >= 0 ? s[C] : void 0,
    A = e => {
      if (c) return;
      let a = j.current,
        r = a?.ownerDocument.defaultView;
      if (a && r) {
        let e = a.getBoundingClientRect(),
          t = 0,
          l = r.innerHeight;
        for (let e = a.parentElement; e; e = e.parentElement) if (/auto|scroll|hidden|clip/.test(r.getComputedStyle(e).overflowY)) {
          let a = e.getBoundingClientRect();
          t = Math.max(t, a.top), l = Math.min(l, a.bottom);
          break;
        }
        let n = l - e.bottom,
          i = e.top - t,
          o = Math.min(32 * s.length + 8, 264),
          c = n < o + 8 && i > n,
          d = (c ? i : n) - 8;
        f(c), y(d < o ? Math.max(d, 40) : void 0);
      }
      v(e ?? (C >= 0 ? C : 0)), k(!0);
    };
  (0, React.useEffect)(() => {
    if (!h) return;
    let e = j.current,
      a = e?.ownerDocument;
    if (!a) return;
    let r = a => {
      e.contains(a.target) || k(!1);
    };
    return a.addEventListener("mousedown", r), a.addEventListener("touchstart", r), () => {
      a.removeEventListener("mousedown", r), a.removeEventListener("touchstart", r);
    };
  }, [h]), (0, React.useEffect)(() => {
    if (!h) return;
    let e = N.current,
      a = e?.querySelector(`[data-index="${m}"]`);
    if (!e || !a) return;
    let r = a.offsetTop,
      t = r + a.offsetHeight;
    r < e.scrollTop ? e.scrollTop = r : t > e.scrollTop + e.clientHeight && (e.scrollTop = t - e.clientHeight);
  }, [h, m]);
  let D = e => {
    let a = s[e];
    a && (r(a.value), k(!1), j.current?.querySelector("button")?.focus({
      preventScroll: !0
    }));
  };
  return <div ref={j} className={r8("relative", _)}><button id={e} type="button" role="combobox" aria-expanded={h} aria-controls={p} aria-haspopup="listbox" disabled={c} onClick={() => h ? k(!1) : A()} onKeyDown={e => {
      if (!c) {
        if (!h) {
          ["Enter", " ", "ArrowDown", "ArrowUp"].includes(e.key) && (e.preventDefault(), A());
          return;
        }
        if ("Escape" === e.key || "Tab" === e.key) {
          "Escape" === e.key && e.stopPropagation(), k(!1);
          return;
        }
        if ("ArrowDown" === e.key) e.preventDefault(), v(e => Math.min(e + 1, s.length - 1));else if ("ArrowUp" === e.key) e.preventDefault(), v(e => Math.max(e - 1, 0));else if ("Home" === e.key) e.preventDefault(), v(0);else if ("End" === e.key) e.preventDefault(), v(s.length - 1);else if ("Enter" === e.key || " " === e.key) e.preventDefault(), D(m);else if (1 === e.key.length && /\S/.test(e.key)) {
          let a = Date.now(),
            r = z.current;
          r.buffer = a - r.at > 700 ? e.key : r.buffer + e.key, r.at = a;
          let t = s.findIndex(e => e.label.toLowerCase().startsWith(r.buffer.toLowerCase()));
          t >= 0 && v(t);
        }
      }
    }} aria-label={x} className={r8("inline-flex h-10 w-fit min-w-40 cursor-pointer items-center justify-between gap-2 rounded-[calc(var(--rb-r-xl,12px))] border border-transparent bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] px-3.5 text-left text-[15px]/[20px] font-semibold whitespace-nowrap text-neutral-900 outline-none select-none transition-[border-color,box-shadow,background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:not-disabled:not-aria-invalid:not-aria-expanded:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] focus-visible:border-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] focus-visible:bg-white focus-visible:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-expanded:border-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] aria-expanded:bg-white aria-expanded:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-invalid:border-[oklch(60%_0.236_26)] disabled:cursor-not-allowed disabled:text-neutral-900/40 disabled:shadow-none dark:text-neutral-100 dark:hover:not-disabled:not-aria-invalid:not-aria-expanded:bg-neutral-900 dark:focus-visible:border-[var(--rb-accent,oklch(81%_0.16_163))] dark:focus-visible:bg-neutral-900 dark:focus-visible:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-expanded:border-[var(--rb-accent,oklch(81%_0.16_163))] dark:aria-expanded:bg-neutral-900 dark:aria-expanded:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-invalid:border-[oklch(65.2%_0.219_26)] dark:disabled:text-neutral-100/40", "w-full min-w-[100%]", b)}><span className="flex min-w-0 items-center gap-2">{u}<span className={r8("truncate", !S && "text-neutral-900/62 dark:text-neutral-100/62")}>{S ? S.label : d}</span></span><__mod_22728.n icon={__mod_31517.A} size={18} strokeWidth={2} aria-hidden="true" className="shrink-0 text-neutral-900/78 dark:text-neutral-100/78" /></button>{h && <ul ref={N} id={p} role="listbox" tabIndex={-1} style={{
      maxHeight: w
    }} className={r8("min-w-52 max-w-[min(480px,calc(100vw-2rem))] overflow-x-hidden overflow-y-auto overscroll-contain rounded-[calc(var(--rb-r-3xl,16px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] p-2 text-neutral-900 dark:text-neutral-100 outline-none shadow-[0_0_0_1px_rgb(84_62_32/0.08),0_24px_56px_-20px_rgb(84_62_32/0.34),0_6px_16px_-8px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.65),0_24px_56px_-16px_rgb(0_0_0/0.8)]", "absolute z-30 max-h-[264px] w-full min-w-[100%]", g ? "bottom-full mb-1.5" : "top-full mt-1.5")}>{s.map((e, r) => {
        let l = e.value === a;
        return <li role="option" aria-selected={l} data-index={r} data-highlighted={r === m || void 0} onMouseEnter={() => v(r)} onClick={() => D(r)} className={r8("relative flex min-h-10 w-full cursor-default items-center gap-2.5 rounded-[calc(var(--rb-r-md,8px))] px-3 py-2 text-left text-[15px]/[20px] font-semibold text-neutral-900 outline-none select-none [&_svg]:shrink-0 [&_svg]:text-neutral-900/70 hover:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] focus-visible:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] data-[highlighted]:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-disabled:cursor-not-allowed aria-disabled:text-neutral-900/40 dark:text-neutral-100 dark:[&_svg]:text-neutral-100/70 dark:hover:bg-neutral-100/7 dark:focus-visible:bg-neutral-100/7 dark:data-[highlighted]:bg-neutral-100/7 dark:aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-disabled:text-neutral-100/40", "pe-8")}><span className="flex min-w-0 items-baseline gap-2"><span className="truncate">{e.label}</span>{e.hint && <span className={r8(r7, r9, "shrink-0")}>{e.hint}</span>}</span>{l && <__mod_22728.n icon={__mod_90987.A} size={18} strokeWidth={2} aria-hidden="true" className="pointer-events-none absolute end-2" />}</li>;
      })}</ul>}</div>;
}
let t_ = [{
    value: "all",
    label: "All"
  }, {
    value: "pizza",
    label: "Pizza"
  }, {
    value: "sushi",
    label: "Sushi"
  }, {
    value: "burgers",
    label: "Burgers"
  }, {
    value: "thai",
    label: "Thai"
  }, {
    value: "mexican",
    label: "Mexican"
  }, {
    value: "indian",
    label: "Indian"
  }, {
    value: "ramen",
    label: "Ramen"
  }, {
    value: "salads",
    label: "Salads"
  }, {
    value: "korean",
    label: "Korean"
  }, {
    value: "mediterranean",
    label: "Mediterranean"
  }, {
    value: "bbq",
    label: "BBQ"
  }, {
    value: "vietnamese",
    label: "Vietnamese"
  }, {
    value: "dessert",
    label: "Dessert"
  }],
  tb = [{
    value: 0,
    label: "Any"
  }, {
    value: 3.5,
    label: "3.5+"
  }, {
    value: 4,
    label: "4.0+"
  }, {
    value: 4.5,
    label: "4.5+"
  }],
  tu = [{
    value: "vegetarian",
    label: "Vegetarian"
  }, {
    value: "vegan",
    label: "Vegan"
  }, {
    value: "gluten-free",
    label: "Gluten-free"
  }, {
    value: "halal",
    label: "Halal"
  }],
  tx = [{
    value: "any",
    label: "Any delivery time"
  }, {
    value: "30",
    label: "Under 30 min"
  }, {
    value: "45",
    label: "Under 45 min"
  }, {
    value: "60",
    label: "Under 60 min"
  }],
  tp = [{
    id: "r1",
    name: "Crust & Coal",
    cuisine: "pizza",
    rating: 4.7,
    reviews: 1820,
    price: 2,
    etaLow: 20,
    etaHigh: 30,
    fee: 0,
    diets: ["vegetarian"]
  }, {
    id: "r2",
    name: "Blue Fin Bar",
    cuisine: "sushi",
    rating: 4.8,
    reviews: 940,
    price: 3,
    etaLow: 30,
    etaHigh: 45,
    fee: 3.49,
    diets: ["gluten-free"]
  }, {
    id: "r3",
    name: "Ember Patty Co.",
    cuisine: "burgers",
    rating: 4.4,
    reviews: 2640,
    price: 2,
    etaLow: 15,
    etaHigh: 25,
    fee: 1.99,
    diets: ["halal"]
  }, {
    id: "r4",
    name: "Lemongrass Lane",
    cuisine: "thai",
    rating: 4.6,
    reviews: 1310,
    price: 2,
    etaLow: 25,
    etaHigh: 40,
    fee: 0,
    diets: ["vegetarian", "vegan", "gluten-free"]
  }, {
    id: "r5",
    name: "Casa Verde",
    cuisine: "mexican",
    rating: 4.3,
    reviews: 2020,
    price: 1,
    etaLow: 20,
    etaHigh: 30,
    fee: .99,
    diets: ["vegetarian"]
  }, {
    id: "r6",
    name: "Saffron Room",
    cuisine: "indian",
    rating: 4.7,
    reviews: 1580,
    price: 2,
    etaLow: 30,
    etaHigh: 45,
    fee: 2.49,
    diets: ["vegetarian", "vegan", "halal"]
  }, {
    id: "r7",
    name: "Bowl & Broth",
    cuisine: "ramen",
    rating: 4.5,
    reviews: 870,
    price: 2,
    etaLow: 25,
    etaHigh: 40,
    fee: 1.49,
    diets: []
  }, {
    id: "r8",
    name: "Field Greens",
    cuisine: "salads",
    rating: 4.2,
    reviews: 640,
    price: 2,
    etaLow: 15,
    etaHigh: 25,
    fee: 0,
    diets: ["vegetarian", "vegan", "gluten-free"]
  }, {
    id: "r9",
    name: "Seoul Fire",
    cuisine: "korean",
    rating: 4.6,
    reviews: 1190,
    price: 3,
    etaLow: 35,
    etaHigh: 50,
    fee: 2.99,
    diets: ["halal"]
  }, {
    id: "r10",
    name: "Olive & Za'atar",
    cuisine: "mediterranean",
    rating: 4.8,
    reviews: 1450,
    price: 2,
    etaLow: 25,
    etaHigh: 40,
    fee: 0,
    diets: ["vegetarian", "vegan", "halal"]
  }, {
    id: "r11",
    name: "Low & Slow",
    cuisine: "bbq",
    rating: 4.5,
    reviews: 2210,
    price: 3,
    etaLow: 40,
    etaHigh: 55,
    fee: 3.99,
    diets: ["gluten-free"]
  }, {
    id: "r12",
    name: "Phở District",
    cuisine: "vietnamese",
    rating: 4.7,
    reviews: 980,
    price: 1,
    etaLow: 20,
    etaHigh: 35,
    fee: .99,
    diets: ["gluten-free"]
  }, {
    id: "r13",
    name: "Sugar & Ash",
    cuisine: "dessert",
    rating: 4.9,
    reviews: 760,
    price: 2,
    etaLow: 15,
    etaHigh: 25,
    fee: 1.99,
    diets: ["vegetarian"]
  }, {
    id: "r14",
    name: "Stonefire Pies",
    cuisine: "pizza",
    rating: 4.3,
    reviews: 1120,
    price: 3,
    etaLow: 30,
    etaHigh: 45,
    fee: 2.49,
    diets: ["vegetarian", "vegan"]
  }, {
    id: "r15",
    name: "Nori & Rice",
    cuisine: "sushi",
    rating: 4.4,
    reviews: 520,
    price: 2,
    etaLow: 25,
    etaHigh: 40,
    fee: 1.49,
    diets: ["gluten-free"]
  }, {
    id: "r16",
    name: "Smash District",
    cuisine: "burgers",
    rating: 4.6,
    reviews: 3140,
    price: 2,
    etaLow: 20,
    etaHigh: 30,
    fee: 0,
    diets: ["halal"]
  }, {
    id: "r17",
    name: "Basil & Chili",
    cuisine: "thai",
    rating: 4.5,
    reviews: 690,
    price: 2,
    etaLow: 35,
    etaHigh: 50,
    fee: 2.99,
    diets: ["vegetarian", "vegan"]
  }, {
    id: "r18",
    name: "Agave Street",
    cuisine: "mexican",
    rating: 4.7,
    reviews: 1760,
    price: 2,
    etaLow: 25,
    etaHigh: 35,
    fee: 0,
    diets: ["vegetarian", "gluten-free"]
  }],
  th = {
    cuisine: "all",
    rating: 0,
    prices: [],
    eta: "any",
    diets: []
  },
  tk = (e, a, r) => !("cuisine" !== r && "all" !== a.cuisine && e.cuisine !== a.cuisine || "rating" !== r && a.rating > 0 && e.rating < a.rating || "prices" !== r && a.prices.length && !a.prices.includes(e.price) || "eta" !== r && "any" !== a.eta && e.etaHigh > Number(a.eta)) && ("diets" === r || !a.diets.length || !!a.diets.every(a => e.diets.includes(a))),
  tm = {
    "filtering-1": function () {
      let [e, a] = (0, React.useState)(P),
        [r, i] = (0, React.useState)("featured"),
        [_, N] = (0, React.useState)(!1),
        H = (e, r) => a(a => ({
          ...a,
          [e]: a[e].includes(r) ? a[e].filter(e => e !== r) : [...a[e], r]
        })),
        $ = (0, React.useMemo)(() => {
          let a = M.filter(a => T(a, e));
          return "low" === r ? [...a].sort((e, a) => e.price - a.price) : "high" === r ? [...a].sort((e, a) => a.price - e.price) : "name" === r ? [...a].sort((e, a) => e.name.localeCompare(a.name)) : a;
        }, [e, r]),
        q = (a, r) => M.filter(t => T(t, e, a) && t[a] === r).length,
        I = 0 !== e.price[0] || 100 !== e.price[1],
        B = [...e.category.map(e => ({
          key: `category:${e}`,
          label: S.find(a => a.value === e)?.label ?? e,
          swatch: void 0,
          clear: () => H("category", e)
        })), ...e.glaze.map(e => ({
          key: `glaze:${e}`,
          label: A.find(a => a.value === e)?.label ?? e,
          swatch: A.find(a => a.value === e)?.hex,
          clear: () => H("glaze", e)
        })), ...e.size.map(e => ({
          key: `size:${e}`,
          label: D.find(a => a.value === e)?.label ?? e,
          swatch: void 0,
          clear: () => H("size", e)
        })), ...e.maker.map(e => ({
          key: `maker:${e}`,
          label: E.find(a => a.value === e)?.label ?? e,
          swatch: void 0,
          clear: () => H("maker", e)
        })), ...(I ? [{
          key: "price",
          label: `${L(e.price[0])} – ${L(e.price[1])}`,
          swatch: void 0,
          clear: () => a(e => ({
            ...e,
            price: [0, 100]
          }))
        }] : [])],
        F = <div className="divide-y divide-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:divide-neutral-100/7"><W label="Category"><ul className="-mx-2 space-y-0.5">{S.map(a => {
                let r = q("category", a.value),
                  l = e.category.includes(a.value);
                return <li><label className={d(f, 0 === r && !l && "opacity-40")}><span className={h}><input type="checkbox" checked={l} onChange={() => H("category", a.value)} className={k} /><__mod_22728.n icon={__mod_90987.A} size={14} strokeWidth={2.5} aria-hidden="true" className={m} /></span><span className="min-w-0 flex-1 truncate">{a.label}</span><span className={d(w, "shrink-0")}>{r}</span></label></li>;
              })}</ul></W><W label="Price"><div className="mb-4 flex min-h-7 items-center justify-between"><span className={d(u, "tabular-nums")}>{L(e.price[0])} – {L(e.price[1])}</span>{I && <button type="button" onClick={() => a(e => ({
                ...e,
                price: [0, 100]
              }))} className={y}>Reset</button>}</div><C min={0} max={100} step={5} value={e.price} onChange={e => a(a => ({
              ...a,
              price: e
            }))} format={L} labels={["Minimum price", "Maximum price"]} /></W><W label="Glaze"><div className="-mx-1 grid grid-cols-6">{A.map(a => {
                let r = e.glaze.includes(a.value),
                  l = q("glaze", a.value);
                return <button type="button" aria-pressed={r} aria-label={`${a.label}, ${l} pieces`} onClick={() => H("glaze", a.value)} className={d("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-transparent text-neutral-900 hover:not-disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] active:not-disabled:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] disabled:text-neutral-900/40 dark:text-neutral-100 dark:hover:not-disabled:bg-neutral-100/8 dark:active:not-disabled:bg-neutral-100/12 dark:aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:disabled:text-neutral-100/40", "size-10 rounded-[calc(var(--rb-r-full,999px))]", 0 === l && !r && "opacity-40")}><span className={d(b, "rounded-[var(--rb-r-sm,6px)]", "size-6")} style={{
                    backgroundColor: a.hex
                  }} />{r && <__mod_22728.n icon={__mod_90987.A} size={18} strokeWidth={2} aria-hidden="true" className={d(a.light ? "text-neutral-900 dark:text-neutral-900" : "text-white dark:text-neutral-900", "absolute")} />}</button>;
              })}</div></W><W label="Size"><div className="flex flex-wrap gap-2">{D.map(a => {
                let r = e.size.includes(a.value),
                  l = q("size", a.value);
                return <button type="button" aria-pressed={r} onClick={() => H("size", a.value)} className={d(v, 0 === l && !r && "opacity-40")}>{a.label}</button>;
              })}</div></W><W label="Maker"><ul className="-mx-2 space-y-0.5">{E.map(a => {
                let r = q("maker", a.value),
                  l = e.maker.includes(a.value);
                return <li><label className={d(f, 0 === r && !l && "opacity-40")}><span className={h}><input type="checkbox" checked={l} onChange={() => H("maker", a.value)} className={k} /><__mod_22728.n icon={__mod_90987.A} size={14} strokeWidth={2.5} aria-hidden="true" className={m} /></span><span className="min-w-0 flex-1 truncate">{a.label}</span><span className={d(w, "shrink-0")}>{r}</span></label></li>;
              })}</ul></W></div>;
      return <div className={d("bg-white dark:bg-neutral-950", "text-neutral-900 dark:text-neutral-100", "flex h-full min-h-[980px] w-full flex-col overflow-y-auto p-6 sm:p-8")}><div className="mx-auto flex w-full max-w-[1100px] flex-1 flex-col"><header className="flex flex-wrap items-center justify-between gap-3"><div><h2 className="text-[22px]/[28px] font-extrabold tracking-[-0.01em]">Stoneware</h2><p className={d(j, "mt-1")}><span className="tabular-nums">{$.length}</span> of <span className="tabular-nums">{M.length}</span> pieces</p></div><div className="flex items-center gap-2"><button type="button" aria-expanded={_} onClick={() => N(e => !e)} className={d("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] text-neutral-900 dark:text-neutral-100 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] active:not-disabled:translate-y-px active:not-disabled:shadow-[inset_0_1px_3px_rgb(84_62_32/0.16),0_0_0_1px_rgb(84_62_32/0.10)] dark:active:not-disabled:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14),0_0_0_1px_rgb(84_62_32/0.10)] dark:aria-expanded:bg-neutral-800 dark:aria-expanded:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] disabled:bg-none disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] disabled:text-neutral-900/40 disabled:shadow-none dark:disabled:bg-neutral-800/60 dark:disabled:text-neutral-100/40", p, "md:hidden")}><__mod_22728.n icon={__mod_68656.A} size={18} strokeWidth={2} aria-hidden="true" />Filters{B.length > 0 && <span className="tabular-nums">({B.length})</span>}</button><z value={r} onChange={i} options={R} ariaLabel="Sort pieces" className="w-[190px]" /></div></header><div className="mt-6 flex flex-1 flex-col gap-6 md:flex-row md:gap-8"><aside className={d("w-full shrink-0 md:block md:w-[240px]", _ ? "block" : "hidden")}>{F}</aside><div className="flex min-w-0 flex-1 flex-col">{B.length > 0 && <div className="mb-4 flex flex-wrap items-center gap-2">{B.map(e => <span className={v}>{e.swatch && <span className={d("inline-block size-2.5 shrink-0 rounded-full", b, "size-[10px]")} style={{
                    backgroundColor: e.swatch
                  }} />}{e.label}<button type="button" aria-label={`Remove ${e.label} filter`} onClick={e.clear} className="-me-1.5 inline-flex size-6 shrink-0 cursor-pointer items-center justify-center rounded-[calc(var(--rb-r-full,999px))] text-neutral-900/78 dark:text-neutral-100/78 transition-[background-color,color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-neutral-900/8 hover:text-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:hover:bg-neutral-100/12 dark:hover:text-neutral-100"><__mod_22728.n icon={__mod_89289.A} size={14} strokeWidth={2} aria-hidden="true" /></button></span>)}<button type="button" onClick={() => a(P)} className={y}>Clear all</button></div>}{0 === $.length ? <div className={d(g, "flex-1 items-center justify-center px-6 py-16 text-center")}><p className="text-[19px]/[24px] font-extrabold tracking-[-0.01em] text-neutral-900 dark:text-neutral-100">Nothing matches these filters</p><p className={d("max-w-[48ch] text-[15px]/[22px] font-medium text-neutral-900/78 dark:text-neutral-100/78", "mt-1 max-w-[280px]")}>Widen the price range or clear a facet to see more of the collection.</p><button type="button" onClick={() => a(P)} className={d("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_68%,white),var(--rb-accent,oklch(84%_0.15_165)))] text-[var(--rb-accent-fg,oklch(26%_0.06_168))] shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_4px_10px_-4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_80%,transparent)] hover:not-disabled:-translate-y-px hover:not-disabled:brightness-[1.04] hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_7px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_85%,transparent)] active:not-disabled:translate-y-px active:not-disabled:brightness-[0.98] active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_55%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] motion-reduce:hover:translate-y-0 disabled:opacity-45 disabled:shadow-none dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_78%,white),var(--rb-accent,oklch(81%_0.16_163)))] dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_6px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,transparent)] dark:hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_9px_22px_-8px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_60%,transparent)] dark:active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_45%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black)] dark:disabled:shadow-none", p, "mt-5")}>Clear all filters</button></div> : <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">{$.map(e => {
                  let a = A.find(a => a.value === e.glaze);
                  return <li><article className={d(g, "cursor-pointer p-1")}><div className={d(b, "rounded-[var(--rb-r-4xl,18px)]", "aspect-square")} style={{
                        backgroundColor: a?.hex
                      }} /><div className="px-2 pt-2.5 pb-1.5"><p className="min-w-0 truncate text-[16px]/[20px] font-extrabold text-neutral-900 dark:text-neutral-100">{e.name}</p><div className="mt-0.5 flex items-baseline justify-between gap-2"><span className={d(j, "truncate")}>{E.find(a => a.value === e.maker)?.label}</span><span className={d(x, "shrink-0 tabular-nums")}>{L(e.price)}</span></div></div></article></li>;
                })}</ul>}</div></div></div></div>;
    },
    "filtering-2": function () {
      let [e, a] = (0, React.useState)(!0),
        [r, i] = (0, React.useState)("all"),
        [d, _] = (0, React.useState)(ei),
        {
          ref: b,
          edges: u,
          onScroll: x
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
        p = (e, a) => _(r => ({
          ...r,
          [e]: r[e].includes(a) ? r[e].filter(e => e !== a) : [...r[e], a]
        })),
        h = (0, React.useMemo)(() => el.filter(e => eo(e, r, d)), [r, d]),
        k = (e, a) => el.filter(t => eo(t, r, d, e) && t[e] === a).length,
        m = 400 !== d.price[0] || 3500 !== d.price[1],
        v = d.size.length + d.condition.length + d.groupset.length + +("all" !== r) + +!!m,
        g = () => {
          i("all"), _(ei);
        };
      return e ? <div className={$(q, I, "relative flex h-full min-h-[760px] w-full flex-col items-center overflow-hidden p-8 sm:p-10")}><div className={$(Q, "w-full max-w-[420px] flex-1")}><header className="flex items-center justify-between gap-3 px-5 py-4"><div className="min-w-0"><h2 className="text-[17px]/[22px] font-extrabold">Filters</h2><p className={$("text-[14px]/[20px] font-medium text-neutral-900/78 dark:text-neutral-100/78", "mt-0.5 flex flex-wrap gap-x-3")}><span>Second-hand bikes</span>{v > 0 && <span><span className="tabular-nums">{v}</span> active</span>}</p></div><div className="flex items-center gap-1"><button type="button" onClick={g} disabled={0 === v} className={$(J, "disabled:pointer-events-none disabled:opacity-40")}>Clear all</button><button type="button" aria-label="Close filters" onClick={() => a(!1)} className={$("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-transparent text-neutral-900 hover:not-disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] active:not-disabled:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] disabled:text-neutral-900/40 dark:text-neutral-100 dark:hover:not-disabled:bg-neutral-100/8 dark:active:not-disabled:bg-neutral-100/12 dark:aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:disabled:text-neutral-100/40", "size-10 rounded-[calc(var(--rb-r-full,999px))]")}><__mod_22728.n icon={__mod_89289.A} size={18} strokeWidth={2} aria-hidden="true" /></button></div></header><div className={$(B, "relative min-h-0 flex-1")}><div ref={b} onScroll={x} className="h-full overflow-y-auto px-5"><div className="divide-y divide-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:divide-neutral-100/7"><es label="Discipline"><div role="radiogroup" aria-label="Discipline" className={$("inline-flex w-fit max-w-full items-stretch gap-1 rounded-[calc(var(--rb-r-full,999px)_+_min(4px,var(--rb-r-full,999px)))] bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] p-1", "h-10", "w-full")}>{ee.map(e => {
                      let a = r === e.value;
                      return <button type="button" role="radio" aria-checked={a} onClick={() => i(e.value)} className={$("relative inline-flex min-w-0 cursor-pointer items-center justify-center gap-1.5 whitespace-nowrap [&_svg]:shrink-0 rounded-[calc(var(--rb-r-full,999px))] px-4 text-[14px]/[18px] font-bold text-neutral-900/78 dark:text-neutral-100/78 select-none transition-[background-color,color,box-shadow,outline-color,scale] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:scale-[0.96] motion-reduce:active:scale-100 hover:not-aria-checked:text-neutral-900 aria-checked:bg-white aria-checked:text-neutral-900 aria-checked:shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_2px_rgb(84_62_32/0.10),0_3px_8px_-2px_rgb(84_62_32/0.20)] disabled:cursor-not-allowed disabled:text-neutral-900/40 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:hover:not-aria-checked:text-neutral-100 dark:aria-checked:bg-[color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800))] dark:aria-checked:text-neutral-100 dark:aria-checked:shadow-[inset_0_1px_0_rgb(255_255_255/0.1),0_0_0_1px_rgb(0_0_0/0.6),0_2px_5px_-1px_rgb(0_0_0/0.6)] dark:disabled:text-neutral-100/40", "grow")}>{e.label}</button>;
                    })}</div></es><es label="Frame size"><ul className="-mx-2 space-y-0.5">{ea.map(e => {
                      let a = k("size", e.value),
                        r = d.size.includes(e.value);
                      return <li><label className={$(X, "h-9", 0 === a && !r && "opacity-40")}><span className={U}><input type="checkbox" checked={r} onChange={() => p("size", e.value)} className={V} /><__mod_22728.n icon={__mod_90987.A} size={14} strokeWidth={2.5} aria-hidden="true" className={G} /></span><span className="min-w-0 flex-1 truncate">{e.label}</span><span className={$(Y, "shrink-0")}>{a}</span></label></li>;
                    })}</ul></es><es label="Price"><div className="mb-4 flex min-h-7 items-center justify-between"><span className={$(F, "tabular-nums")}>{en(d.price[0])} – {en(d.price[1])}</span>{m && <button type="button" onClick={() => _(e => ({
                      ...e,
                      price: [400, 3500]
                    }))} className={J}>Reset</button>}</div><Z min={400} max={3500} step={50} value={d.price} onChange={e => _(a => ({
                    ...a,
                    price: e
                  }))} format={en} labels={["Minimum price", "Maximum price"]} /></es><es label="Condition"><div className="flex flex-wrap gap-2">{er.map(e => {
                      let a = d.condition.includes(e.value),
                        r = k("condition", e.value);
                      return <button type="button" aria-pressed={a} onClick={() => p("condition", e.value)} className={$("relative inline-flex h-8 max-w-full min-w-0 shrink-0 cursor-pointer items-center gap-1.5 whitespace-nowrap rounded-[calc(var(--rb-r-full,999px))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] px-3.5 text-[14px]/[18px] font-bold text-neutral-900 dark:text-neutral-100 select-none transition-[background-color,border-color,box-shadow,color,scale,translate,outline-color] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:translate-y-px active:duration-[90ms] motion-reduce:active:translate-y-0 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] aria-pressed:bg-none aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-pressed:shadow-[inset_0_0_0_1.5px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14)] disabled:cursor-not-allowed disabled:text-neutral-900/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-pressed:shadow-[inset_0_0_0_1.5px_var(--rb-accent,oklch(81%_0.16_163))] dark:aria-expanded:bg-neutral-800 dark:disabled:text-neutral-100/40", 0 === r && !a && "opacity-40")}>{e.label}</button>;
                    })}</div></es><es label="Groupset"><ul className="-mx-2 space-y-0.5">{et.map(e => {
                      let a = k("groupset", e.value),
                        r = d.groupset.includes(e.value);
                      return <li><label className={$(X, "h-9", 0 === a && !r && "opacity-40")}><span className={U}><input type="checkbox" checked={r} onChange={() => p("groupset", e.value)} className={V} /><__mod_22728.n icon={__mod_90987.A} size={14} strokeWidth={2.5} aria-hidden="true" className={G} /></span><span className="min-w-0 flex-1 truncate">{e.label}</span><span className={$(Y, "shrink-0")}>{a}</span></label></li>;
                    })}</ul></es></div></div><div aria-hidden="true" className={$("bg-linear-to-b from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))]", "pointer-events-none absolute inset-x-0 top-0 h-8", u.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={$("bg-linear-to-t from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))]", "pointer-events-none absolute inset-x-0 bottom-0 h-8", u.end ? "opacity-100" : "opacity-0")} /></div><div className={$(B, "flex items-center gap-2 p-2 ps-3")}><button type="button" onClick={g} disabled={0 === v} className={$(J, "disabled:pointer-events-none disabled:opacity-40")}>Reset</button><button type="button" onClick={() => a(!1)} disabled={0 === h.length} className={$(K, O, "flex-1")}>{0 === h.length ? "No bikes match" : <span>Show <span className="tabular-nums">{h.length}</span> {1 === h.length ? "result" : "results"}</span>}</button></div></div></div> : <div className={$(q, I, "relative flex h-full min-h-[760px] w-full flex-col items-center justify-center overflow-hidden p-8 sm:p-10")}><div className={$(Q, "w-full max-w-[420px] items-center px-6 py-10 text-center")}><div className={$("text-neutral-900/78 dark:text-neutral-100/78", "mb-3 flex h-10 w-10 items-center justify-center")}><__mod_22728.n icon={__mod_24437.A} size={20} strokeWidth={2} aria-hidden="true" /></div><p className="text-[19px]/[24px] font-extrabold tracking-[-0.01em] text-neutral-900 dark:text-neutral-100">Filters hidden</p><p className={$("max-w-[48ch] text-[15px]/[22px] font-medium text-neutral-900/78 dark:text-neutral-100/78", "mt-1 max-w-xs")}><span className="tabular-nums">{h.length}</span> of <span className="tabular-nums">{el.length}</span> bikes match your current filters.</p><button type="button" onClick={() => a(!0)} className={$(K, O, "mt-5")}><__mod_22728.n icon={__mod_68656.A} size={18} strokeWidth={2} aria-hidden="true" />Show filters</button></div></div>;
    },
    "filtering-3": function () {
      let e = (0, React.useRef)(null),
        a = (0, React.useRef)(null),
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
        [s, d] = (0, React.useState)("all"),
        [_, b] = (0, React.useState)(() => [{
          id: eF(),
          field: "stage",
          operator: "is_not",
          value: "lost"
        }, {
          id: eF(),
          field: "value",
          operator: "gt",
          value: "10000"
        }]),
        [u, x] = (0, React.useState)(""),
        [p, h] = (0, React.useState)(null);
      (0, React.useEffect)(() => {
        if (!p) return;
        let r = e.current?.ownerDocument;
        if (!r) return;
        let t = e => {
            a.current && !a.current.contains(e.target) && h(null);
          },
          l = e => {
            "Escape" === e.key && h(null);
          };
        return r.addEventListener("mousedown", t), r.addEventListener("touchstart", t), r.addEventListener("keydown", l), () => {
          r.removeEventListener("mousedown", t), r.removeEventListener("touchstart", t), r.removeEventListener("keydown", l);
        };
      }, [p]);
      let k = (e, a) => {
          b(r => r.map(r => r.id === e ? {
            ...r,
            ...a
          } : r)), d("");
        },
        m = () => {
          b([]), x(""), d("all"), h(null);
        },
        v = (0, React.useMemo)(() => {
          let e = u.trim().toLowerCase();
          return eP.filter(a => (!e || !!a.name.toLowerCase().includes(e) || !!a.company.toLowerCase().includes(e)) && _.every(e => ((e, a) => {
            let r = e$(a.field);
            if ("enum" === r.kind) {
              let r = String(e[a.field]);
              return "is" === a.operator ? r === a.value : r !== a.value;
            }
            if ("text" === r.kind) {
              let r = a.value.trim().toLowerCase();
              if (!r) return !0;
              let t = String(e[a.field]).toLowerCase();
              return "contains" === a.operator ? t.includes(r) : !t.includes(r);
            }
            if ("" === a.value.trim()) return !0;
            let t = Number(a.value);
            if (Number.isNaN(t)) return !0;
            let l = Number(e[a.field]);
            return "gt" === a.operator ? l > t : l < t;
          })(a, e)));
        }, [_, u]),
        g = (0, React.useMemo)(() => v.reduce((e, a) => e + a.value, 0), [v]),
        f = _.length > 0 || "" !== u.trim();
      return <div ref={e} className={eb("bg-white dark:bg-neutral-950", "text-neutral-900 dark:text-neutral-100", "relative flex h-full min-h-[960px] w-full flex-col overflow-hidden p-6 sm:p-8")}><div className="mx-auto flex min-h-0 w-full max-w-[1100px] flex-1 flex-col"><header className="flex flex-wrap items-end justify-between gap-3"><div><h2 className="text-[22px]/[28px] font-extrabold tracking-[-0.01em]">Deal pipeline</h2><p className={eb(eC, "mt-1 flex flex-wrap gap-x-3")}><span><span className="tabular-nums">{v.length}</span> of <span className="tabular-nums">{eP.length}</span> deals</span><span><span className="tabular-nums">{eq(g)}</span> weighted</span></p></div><div className="-m-1 max-w-[calc(100%+8px)] overflow-x-auto p-1 [scrollbar-width:none]"><div className="w-max"><div role="radiogroup" aria-label="Saved views" className={eb("inline-flex w-fit max-w-full items-stretch gap-1 rounded-[calc(var(--rb-r-full,999px)_+_min(4px,var(--rb-r-full,999px)))] bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] p-1", "h-10")}>{eK.map(e => {
                    let a = s === e.value;
                    return <button type="button" role="radio" aria-checked={a} onClick={() => {
                      var a;
                      let r;
                      return d(a = e.value), void (b((r = eK.find(e => e.value === a)) ? r.build() : []), h(null));
                    }} className="relative inline-flex min-w-0 cursor-pointer items-center justify-center gap-1.5 whitespace-nowrap [&_svg]:shrink-0 rounded-[calc(var(--rb-r-full,999px))] px-4 text-[14px]/[18px] font-bold text-neutral-900/78 dark:text-neutral-100/78 select-none transition-[background-color,color,box-shadow,outline-color,scale] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:scale-[0.96] motion-reduce:active:scale-100 hover:not-aria-checked:text-neutral-900 aria-checked:bg-white aria-checked:text-neutral-900 aria-checked:shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_2px_rgb(84_62_32/0.10),0_3px_8px_-2px_rgb(84_62_32/0.20)] disabled:cursor-not-allowed disabled:text-neutral-900/40 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:hover:not-aria-checked:text-neutral-100 dark:aria-checked:bg-[color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800))] dark:aria-checked:text-neutral-100 dark:aria-checked:shadow-[inset_0_1px_0_rgb(255_255_255/0.1),0_0_0_1px_rgb(0_0_0/0.6),0_2px_5px_-1px_rgb(0_0_0/0.6)] dark:disabled:text-neutral-100/40">{e.label}</button>;
                  })}</div></div></div></header><div className="mt-5 flex flex-wrap items-center gap-2"><div className="relative min-w-[200px] flex-1"><div className={eb(ek, em)}><span data-affix={!0} className={eg}><__mod_22728.n icon={__mod_66575.A} size={18} strokeWidth={2} aria-hidden="true" /></span><input type="text" value={u} onChange={e => x(e.target.value)} placeholder="Search deals or companies…" aria-label="Search deals" className={ev} />{u && <span data-affix={!0} className={eg}><button type="button" aria-label="Clear search" onClick={() => x("")} className={eb("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-transparent text-neutral-900 hover:not-disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] active:not-disabled:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] disabled:text-neutral-900/40 dark:text-neutral-100 dark:hover:not-disabled:bg-neutral-100/8 dark:active:not-disabled:bg-neutral-100/12 dark:aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:disabled:text-neutral-100/40", "size-7 rounded-[calc(var(--rb-r-full,999px))]")}><__mod_22728.n icon={__mod_89289.A} size={18} strokeWidth={2} aria-hidden="true" /></button></span>}</div></div><div className="relative" ref={"add" === p ? a : void 0}><button type="button" aria-haspopup="menu" aria-expanded={"add" === p} onClick={() => h(e => "add" === e ? null : "add")} className={eb(ep, eh)}><__mod_22728.n icon={__mod_89886.A} size={18} strokeWidth={2} aria-hidden="true" />Add filter</button>{"add" === p && <div role="menu" className={eb(ew, "absolute top-full right-0 z-30 mt-1.5 w-52")}><p className="px-3 pt-2.5 pb-1 text-[13px]/[16px] font-bold tabular-nums text-neutral-900/62 dark:text-neutral-100/62">Filter by field</p>{eT.map(e => <button type="button" role="menuitem" onClick={() => {
                  var a;
                  let r, t;
                  return r = e$(a = e.value), t = {
                    id: eF(),
                    field: a,
                    operator: r.operators[0],
                    value: eI(a)
                  }, void (b(e => [...e, t]), d(""), h(t.id));
                }} className={ey}><__mod_22728.n icon={__mod_58770.A} size={16} strokeWidth={2} aria-hidden="true" />{e.label}</button>)}</div>}</div></div>{_.length > 0 && <div className="mt-3 flex flex-wrap items-center gap-2">{_.map(e => {
              let r,
                l = e$(e.field),
                i = p === e.id;
              return <div className="relative" ref={i ? a : void 0}><div className="relative inline-flex h-8 max-w-full min-w-0 shrink-0 cursor-pointer items-center gap-1.5 whitespace-nowrap rounded-[calc(var(--rb-r-full,999px))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] px-3.5 text-[14px]/[18px] font-bold text-neutral-900 dark:text-neutral-100 select-none transition-[background-color,border-color,box-shadow,color,scale,translate,outline-color] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:translate-y-px active:duration-[90ms] motion-reduce:active:translate-y-0 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] aria-pressed:bg-none aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-pressed:shadow-[inset_0_0_0_1.5px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14)] disabled:cursor-not-allowed disabled:text-neutral-900/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-pressed:shadow-[inset_0_0_0_1.5px_var(--rb-accent,oklch(81%_0.16_163))] dark:aria-expanded:bg-neutral-800 dark:disabled:text-neutral-100/40"><button type="button" aria-haspopup="dialog" aria-expanded={i} onClick={() => h(a => a === e.id ? null : e.id)} className={eb("min-w-0 truncate outline-none after:absolute after:inset-0 after:rounded-[calc(var(--rb-r-lg,10px))] after:content-[''] focus-visible:after:outline-2 focus-visible:after:-outline-offset-2 focus-visible:after:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:after:outline-[var(--rb-accent,oklch(81%_0.16_163))]", "flex h-full items-center gap-1.5")}><span className={ex}>{l.label}</span><span className={ex}>{eW[e.operator]}</span><span className="tabular-nums">{"enum" === (r = e$(e.field)).kind ? r.options?.find(a => a.value === e.value)?.label ?? e.value : "" === e.value.trim() ? "…" : "number" === r.kind && "value" === e.field ? eq(Number(e.value)) : "number" === r.kind && "probability" === e.field ? `${e.value}%` : e.value}</span></button><button type="button" aria-label={`Remove ${l.label} filter`} onClick={() => {
                    var a;
                    return a = e.id, void (b(e => e.filter(e => e.id !== a)), d(""), p === a && h(null));
                  }} className={eb("-me-1.5 inline-flex size-6 shrink-0 cursor-pointer items-center justify-center rounded-[calc(var(--rb-r-full,999px))] text-neutral-900/78 dark:text-neutral-100/78 transition-[background-color,color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-neutral-900/8 hover:text-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:hover:bg-neutral-100/12 dark:hover:text-neutral-100", "relative")}><__mod_22728.n icon={__mod_89289.A} size={14} strokeWidth={2} aria-hidden="true" /></button></div>{i && <div role="dialog" aria-label={`Edit ${l.label} filter`} className={eb(eA, "absolute top-full left-0 z-30 mt-1.5 w-64 p-3")}><div className="space-y-2"><eD value={e.field} onChange={a => {
                      var r;
                      let t;
                      return r = e.id, t = e$(a), void k(r, {
                        field: a,
                        operator: t.operators[0],
                        value: eI(a)
                      });
                    }} options={eH} ariaLabel="Field" /><eD value={e.operator} onChange={a => k(e.id, {
                      operator: a
                    })} options={l.operators.map(e => ({
                      value: e,
                      label: eW[e]
                    }))} ariaLabel="Operator" />{"enum" === l.kind ? <eD value={e.value} onChange={a => k(e.id, {
                      value: a
                    })} options={l.options ?? []} ariaLabel="Value" /> : <div className={eb(ek, em)}><input type={"number" === l.kind ? "number" : "text"} value={e.value} onChange={a => k(e.id, {
                        value: a.target.value
                      })} placeholder={"number" === l.kind ? "Enter a number" : "Enter text"} aria-label="Value" className={ev} /></div>}</div></div>}</div>;
            })}<button type="button" onClick={m} className="inline-flex h-8 cursor-pointer items-center rounded-[calc(var(--rb-r-full,999px))] px-3 text-[14px]/[18px] font-bold text-neutral-900/78 dark:text-neutral-100/78 transition-[background-color,color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-neutral-900/5 hover:text-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:hover:bg-neutral-100/6 dark:hover:text-neutral-100">Clear all</button></div>}<div className={eb("relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.07),0_1px_2px_rgb(84_62_32/0.06),0_8px_22px_-10px_rgb(84_62_32/0.20)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_0_0_1px_rgb(0_0_0/0.6),0_10px_24px_-12px_rgb(0_0_0/0.8)]", "mt-4 min-h-0 flex-1")}><div ref={r} onScroll={o} className="min-h-0 flex-1 overflow-auto">{0 === v.length ? <div className="flex h-full flex-col items-center justify-center px-6 py-12 text-center"><div className={eb("text-neutral-900/78 dark:text-neutral-100/78", "mb-3 flex h-10 w-10 items-center justify-center")}><__mod_22728.n icon={__mod_58770.A} size={20} strokeWidth={2} aria-hidden="true" /></div><p className="text-[19px]/[24px] font-extrabold tracking-[-0.01em] text-neutral-900 dark:text-neutral-100">No deals match this query</p><p className={eb("max-w-[48ch] text-[15px]/[22px] font-medium text-neutral-900/78 dark:text-neutral-100/78", "mt-1 max-w-xs")}>Loosen an operator or remove a filter to widen the pipeline.</p>{f && <button type="button" onClick={m} className={eb(ep, eh, "mt-4")}>Clear all filters</button>}</div> : <table className="w-full border-separate border-spacing-0 text-left text-[15px]/[22px] font-medium"><caption className="sr-only">Filtered deals</caption><thead><tr className={eb(eu, "sticky top-0 z-20")}><th scope="col" className={eb(ej, "h-9 min-w-[180px] sm:first:ps-5")}>Deal</th><th scope="col" className={eb(ej, "h-9 min-w-[140px]")}>Stage</th><th scope="col" className={eb(ej, "h-9 min-w-[150px]")}>Owner</th><th scope="col" className={eb(ej, "h-9")}><span className={eb(ez, "block")}>Value</span></th><th scope="col" className={eb(ej, "h-9")}><span className={eb(ez, "block")}>Prob.</span></th><th scope="col" className={eb(ej, "h-9 sm:last:pe-5")}><span className={eb(ez, "block")}>Close</span></th></tr></thead><tbody>{v.map(e => {
                    let a,
                      r = eL.find(a => a.value === e.owner);
                    return <tr className={eb("group transition-[background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:not-aria-selected:bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] dark:hover:not-aria-selected:bg-neutral-100/4 dark:aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)]", "h-11")}><td className={eb(eN, "sm:first:ps-5")}><span className={eb("text-[15px]/[20px] font-bold", "block truncate")}>{e.name}</span><span className={eb(eS, "block truncate")}>{e.company}</span></td><td className={eN}><span className={eb("inline-flex items-start gap-1.5 text-[15px]/[20px] font-bold tabular-nums", eM[e.stage])}>{(a = e.stage, eE.find(e => e.value === a)?.label ?? a)}</span></td><td className={eN}><span className="inline-flex items-center gap-2"><span className={eb("relative inline-flex size-8 shrink-0 overflow-hidden rounded-full select-none", "size-[24px]")}><span className="flex size-full items-center justify-center rounded-[inherit] bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_24%,white)] text-[12px]/[16px] font-extrabold tabular-nums text-neutral-900 dark:text-neutral-100 dark:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_22%,var(--color-neutral-900))]">{r?.initials.charAt(0)}</span></span><span className="truncate">{r?.label}</span></span></td><td className={eb(eN, ez)}>{eq(e.value)}</td><td className={eb(eN, ez)}>{e.probability}%</td><td className={eb(eN, ez, "sm:last:pe-5")}>{e.close}</td></tr>;
                  })}</tbody></table>}</div><div aria-hidden="true" className={eb("bg-linear-to-b from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))]", "pointer-events-none absolute inset-x-0 top-9 h-8", i.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={eb("bg-linear-to-t from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))]", "pointer-events-none absolute inset-x-0 bottom-0 h-8", i.end ? "opacity-100" : "opacity-0")} /></div></div></div>;
    },
    "filtering-4": function () {
      let [e, a] = (0, React.useState)(at),
        {
          ref: r,
          edges: i,
          onScroll: o
        } = e4(),
        s = (0, React.useMemo)(() => aa.filter(a => al(a, e)).sort((e, a) => e.minutesAgo - a.minutesAgo), [e]),
        d = (0, React.useMemo)(() => {
          let a = {};
          for (let r of e7) a[r.value] = aa.filter(a => al(a, e, "services") && a.service === r.value).length;
          return a;
        }, [e]),
        _ = (0, React.useMemo)(() => {
          let a = Number(e.range),
            r = Array(30).fill(0);
          for (let e of s) {
            let t = Math.min(29, Math.max(0, Math.floor((1 - e.minutesAgo / a) * 29)));
            r[t] += 1;
          }
          return r;
        }, [s, e.range]),
        b = Math.max(1, ..._),
        u = e.levels.length + e.services.length + +!!e.query.trim(),
        x = ae.find(a => a.value === e.range)?.label ?? "range";
      return <div className={eU("bg-white dark:bg-neutral-950", "text-neutral-900 dark:text-neutral-100", "flex h-full min-h-[920px] w-full flex-col overflow-y-auto p-6 sm:p-8")}><div className="mx-auto flex min-h-0 w-full max-w-[1100px] flex-1 flex-col"><header className="flex flex-wrap items-end justify-between gap-3"><div><h2 className="text-[22px]/[28px] font-extrabold tracking-[-0.01em]">Log explorer</h2><p className={eU(e5, "mt-1")}><span className="tabular-nums">{s.length}</span> events over {x.toLowerCase()}</p></div><div className="flex items-center gap-2"><an selected={e.services} counts={d} onToggle={e => a(a => ({
                ...a,
                services: a.services.includes(e) ? a.services.filter(a => a !== e) : [...a.services, e]
              }))} onClear={() => a(e => ({
                ...e,
                services: []
              }))} /><e8 value={e.range} onChange={e => a(a => ({
                ...a,
                range: e
              }))} options={ae} ariaLabel="Time range" className="w-[168px]" /></div></header><div className="mt-5 flex flex-wrap items-center gap-2"><div role="group" aria-label="Severity" className="flex flex-wrap items-center gap-1.5">{e9.map(r => {
                let l,
                  n = e.levels.includes(r.value),
                  i = (l = r.value, aa.filter(a => al(a, e, "levels") && a.level === l).length);
                return <button type="button" aria-pressed={n} onClick={() => {
                  let e;
                  return e = r.value, a(a => ({
                    ...a,
                    levels: a.levels.includes(e) ? a.levels.filter(a => a !== e) : [...a.levels, e]
                  }));
                }} className={eU("relative inline-flex h-8 max-w-full min-w-0 shrink-0 cursor-pointer items-center gap-1.5 whitespace-nowrap rounded-[calc(var(--rb-r-full,999px))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] px-3.5 text-[14px]/[18px] font-bold text-neutral-900 dark:text-neutral-100 select-none transition-[background-color,border-color,box-shadow,color,scale,translate,outline-color] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:translate-y-px active:duration-[90ms] motion-reduce:active:translate-y-0 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] aria-pressed:bg-none aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-pressed:shadow-[inset_0_0_0_1.5px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14)] disabled:cursor-not-allowed disabled:text-neutral-900/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-pressed:shadow-[inset_0_0_0_1.5px_var(--rb-accent,oklch(81%_0.16_163))] dark:aria-expanded:bg-neutral-800 dark:disabled:text-neutral-100/40", 0 === i && !n && "opacity-40")}>{r.label}<span className="ms-0.5 text-[13px]/[16px] font-bold tabular-nums text-neutral-900/62 dark:text-neutral-100/62">{i}</span></button>;
              })}</div><div className="relative ml-auto w-full sm:w-[280px]"><div className={eU(eQ, eX)}><span data-affix={!0} className={eJ}><__mod_22728.n icon={__mod_66575.A} size={18} strokeWidth={2} aria-hidden="true" /></span><input value={e.query} onChange={e => a(a => ({
                  ...a,
                  query: e.target.value
                }))} placeholder="Filter messages…" aria-label="Filter messages" className={eY} />{e.query && <span data-affix={!0} className={eJ}><button type="button" aria-label="Clear message filter" onClick={() => a(e => ({
                    ...e,
                    query: ""
                  }))} className={eU("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-transparent text-neutral-900 hover:not-disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] active:not-disabled:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] disabled:text-neutral-900/40 dark:text-neutral-100 dark:hover:not-disabled:bg-neutral-100/8 dark:active:not-disabled:bg-neutral-100/12 dark:aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:disabled:text-neutral-100/40", "size-7 rounded-[calc(var(--rb-r-full,999px))]")}><__mod_22728.n icon={__mod_89289.A} size={18} strokeWidth={2} aria-hidden="true" /></button></span>}</div></div></div><section aria-label="Matched volume" className={eU(eZ, "mt-4 p-4")}><div className="mb-2.5 flex items-center justify-between"><span className={eU(e6, "flex flex-wrap gap-x-3")}><span>Volume</span><span>{x.toLowerCase()}</span></span><span className={e6}>peak {b}/bucket</span></div><div className="flex h-14 items-end gap-[3px]">{_.map((e, a) => e > 0 ? <div className={eU("text-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_82%,black)] dark:text-[var(--rb-accent,oklch(81%_0.16_163))]", "flex-1 rounded-[2px] bg-current")} style={{
                height: `${Math.max(3, e / b * 100)}%`
              }} /> : <div className={eU("relative block h-2.5 w-full overflow-hidden rounded-[calc(var(--rb-r-full,999px))] bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] shadow-[inset_0_1px_2px_rgb(84_62_32/0.12)] dark:bg-neutral-100/12 dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.5)]", "flex-1 rounded-[2px]")} style={{
                height: "3%"
              }} />)}</div><div className={eU(e6, "mt-2 flex items-center justify-between")}><span>oldest</span><span>now</span></div></section><div className="mt-4 flex min-h-0 flex-1 flex-col">{0 === s.length ? <div className={eU(eZ, "flex-1 items-center justify-center px-6 py-16 text-center")}><p className="text-[19px]/[24px] font-extrabold tracking-[-0.01em] text-neutral-900 dark:text-neutral-100">No log lines match these filters</p><p className={eU("max-w-[48ch] text-[15px]/[22px] font-medium text-neutral-900/78 dark:text-neutral-100/78", "mt-1 max-w-[300px]")}>Widen the time range, clear a severity, or loosen the message query to see more events.</p><button type="button" onClick={() => a(at)} className={eU("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_68%,white),var(--rb-accent,oklch(84%_0.15_165)))] text-[var(--rb-accent-fg,oklch(26%_0.06_168))] shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_4px_10px_-4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_80%,transparent)] hover:not-disabled:-translate-y-px hover:not-disabled:brightness-[1.04] hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_7px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_85%,transparent)] active:not-disabled:translate-y-px active:not-disabled:brightness-[0.98] active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_55%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] motion-reduce:hover:translate-y-0 disabled:opacity-45 disabled:shadow-none dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_78%,white),var(--rb-accent,oklch(81%_0.16_163)))] dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_6px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,transparent)] dark:hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_9px_22px_-8px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_60%,transparent)] dark:active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_45%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black)] dark:disabled:shadow-none", eG, "mt-5")}>Reset filters</button></div> : <div className={eU(eZ, "min-h-0 flex-1")}><div ref={r} onScroll={o} className="h-full overflow-y-auto"><ul className="divide-y divide-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:divide-neutral-100/7">{s.map(e => {
                    var a, r;
                    let l,
                      n = e3[e.level];
                    return <li className={eU("flex min-w-full items-start gap-3 px-4 font-mono text-[13px]/[21px] tabular-nums", "transition-[color,background-color,border-color,box-shadow,outline-color,opacity,scale,translate] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms]", "error" === e.level ? "bg-[oklch(95.5%_0.03_26/0.55)] hover:bg-[oklch(95.5%_0.03_26/0.8)] dark:bg-[oklch(30%_0.065_26/0.4)] dark:hover:bg-[oklch(30%_0.065_26/0.6)]" : "hover:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] dark:hover:bg-neutral-100/6", "py-2.5")}><span className={eU(eV, "shrink-0")}>{(a = e.minutesAgo, r = e.sec, l = 872 - a, `${ar(Math.floor(l / 60))}:${ar(l % 60)}:${ar(r)}`)}</span><span className={eU("inline-flex w-[5ch] shrink-0 font-bold", "w-[52px]")}><span className={n.tone}>{e.level}</span></span><span className={eU(eV, "hidden w-[124px] shrink-0 truncate sm:block")}>{e.service}</span><span className="min-w-0 flex-1">{e.message}</span></li>;
                  })}</ul></div><div aria-hidden="true" className={eU(e1, "pointer-events-none absolute inset-x-0 top-0 h-8", i.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={eU(e2, "pointer-events-none absolute inset-x-0 bottom-0 h-8", i.end ? "opacity-100" : "opacity-0")} /></div>}<div className={eU(e5, "mt-3 flex min-h-7 items-center justify-between")}><span>{u > 0 ? <><span className="tabular-nums">{u}</span> active filter{1 === u ? "" : "s"}</> : "No filters applied"}</span>{u > 0 && <button type="button" onClick={() => a(at)} className={e0}>Clear all</button>}</div></div></div></div>;
    },
    "filtering-5": function () {
      let [e, a] = (0, React.useState)(aD),
        [r, i] = (0, React.useState)(!1),
        d = e => a(a => ({
          ...a,
          amenities: a.amenities.includes(e) ? a.amenities.filter(a => a !== e) : [...a.amenities, e]
        })),
        _ = (0, React.useMemo)(() => aA.filter(a => aE(a, e)).sort((e, a) => e.price - a.price), [e]),
        b = 1e3 !== e.price[0] || 6e3 !== e.price[1],
        u = [...("all" !== e.type ? [{
          key: "type",
          label: aj[e.type] ?? e.type,
          clear: () => a(e => ({
            ...e,
            type: "all"
          }))
        }] : []), ...(e.minBeds > 0 ? [{
          key: "beds",
          label: `${e.minBeds}+ beds`,
          clear: () => a(e => ({
            ...e,
            minBeds: 0
          }))
        }] : []), ...(e.minBaths > 0 ? [{
          key: "baths",
          label: `${e.minBaths}+ baths`,
          clear: () => a(e => ({
            ...e,
            minBaths: 0
          }))
        }] : []), ...(b ? [{
          key: "price",
          label: `${aS(e.price[0])} – ${aS(e.price[1])}`,
          clear: () => a(e => ({
            ...e,
            price: [1e3, 6e3]
          }))
        }] : []), ...("any" !== e.availability ? [{
          key: "availability",
          label: aC.find(a => a.value === e.availability)?.label ?? e.availability,
          clear: () => a(e => ({
            ...e,
            availability: "any"
          }))
        }] : []), ...e.amenities.map(e => ({
          key: `amenity:${e}`,
          label: az[e] ?? e,
          clear: () => d(e)
        }))],
        x = <div className="divide-y divide-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:divide-neutral-100/7"><aL label="Property type"><div className="flex flex-wrap gap-1.5">{ay.map(r => {
                let l = e.type === r.value;
                return <button type="button" aria-pressed={l} onClick={() => a(e => ({
                  ...e,
                  type: r.value
                }))} className={ah}>{r.label}</button>;
              })}</div></aL><aL label="Rooms"><div className="space-y-3"><aM label="Beds" value={e.minBeds} max={4} onChange={e => a(a => ({
                ...a,
                minBeds: e
              }))} icon={<__mod_22728.n icon={__mod_63188.A} size={18} strokeWidth={2} aria-hidden="true" />} /><aM label="Baths" value={e.minBaths} max={3} onChange={e => a(a => ({
                ...a,
                minBaths: e
              }))} icon={<__mod_22728.n icon={__mod_86153.A} size={18} strokeWidth={2} aria-hidden="true" />} /></div></aL><aL label="Monthly rent"><div className="mb-4 flex min-h-7 items-center justify-between"><span className={ad(ab, "tabular-nums")}>{aS(e.price[0])} – {aS(e.price[1])}{6e3 === e.price[1] ? "+" : ""}</span>{b && <button type="button" onClick={() => a(e => ({
                ...e,
                price: [1e3, 6e3]
              }))} className={am}>Reset</button>}</div><aw min={1e3} max={6e3} step={50} value={e.price} onChange={e => a(a => ({
              ...a,
              price: e
            }))} format={aS} labels={["Minimum rent", "Maximum rent"]} /></aL><aL label="Amenities"><ul className="-mx-2 grid grid-cols-1 gap-x-2 gap-y-0.5 sm:grid-cols-2">{aN.map(a => {
                let r,
                  l = e.amenities.includes(a.value),
                  i = (r = a.value, aA.filter(a => aE(a, e, "amenities") && a.amenities.includes(r)).length);
                return <li><label className={ad("flex h-10 w-full min-w-0 cursor-pointer items-center gap-2.5 rounded-[calc(var(--rb-r-full,999px))] px-3 text-left text-[15px]/[20px] font-semibold text-neutral-900/75 transition-[background-color,box-shadow,color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] [&_svg]:shrink-0 hover:bg-neutral-900/5 hover:text-neutral-900 aria-[current=page]:bg-white aria-[current=page]:font-bold aria-[current=page]:text-neutral-900 aria-[current=page]:shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:text-neutral-100/75 dark:hover:bg-neutral-100/6 dark:hover:text-neutral-100 dark:aria-[current=page]:bg-[color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800))] dark:aria-[current=page]:text-neutral-100 dark:aria-[current=page]:shadow-[inset_0_1px_0_rgb(255_255_255/0.08),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)]", 0 === i && !l && "opacity-40")}><span className="relative inline-flex size-[18px] shrink-0 items-center justify-center"><input type="checkbox" checked={l} onChange={() => d(a.value)} className="peer size-[18px] shrink-0 cursor-pointer appearance-none rounded-[calc(var(--rb-r-sm,6px))] border-2 border-neutral-900/28 bg-white transition-[background-color,border-color,box-shadow,outline-color,scale] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:scale-[0.86] motion-reduce:active:scale-100 hover:not-checked:not-disabled:border-neutral-900/60 active:not-checked:bg-neutral-900/8 checked:border-transparent checked:bg-[var(--rb-accent,oklch(84%_0.15_165))] indeterminate:border-transparent indeterminate:bg-[var(--rb-accent,oklch(84%_0.15_165))] checked:shadow-[inset_0_1px_0_rgb(255_255_255/0.4),inset_0_-1.5px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] indeterminate:shadow-[inset_0_1px_0_rgb(255_255_255/0.4),inset_0_-1.5px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] aria-invalid:border-[oklch(60%_0.236_26)] disabled:cursor-not-allowed disabled:border-neutral-900/20 disabled:checked:bg-neutral-900/25 disabled:checked:shadow-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:border-neutral-100/34 dark:bg-neutral-900 dark:hover:not-checked:not-disabled:border-neutral-100/70 dark:active:not-checked:bg-neutral-100/10 dark:checked:bg-[var(--rb-accent,oklch(81%_0.16_163))] dark:indeterminate:bg-[var(--rb-accent,oklch(81%_0.16_163))] dark:checked:shadow-none dark:indeterminate:shadow-none dark:aria-invalid:border-[oklch(65.2%_0.219_26)] dark:disabled:border-neutral-100/24 dark:disabled:checked:bg-neutral-100/28" /><__mod_22728.n icon={__mod_90987.A} size={14} strokeWidth={2.5} aria-hidden="true" className="pointer-events-none absolute scale-50 text-[var(--rb-accent-fg,oklch(26%_0.06_168))] opacity-0 transition-[opacity,scale] duration-[260ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] peer-checked:scale-100 peer-checked:opacity-100 peer-indeterminate:scale-100 peer-indeterminate:opacity-100 peer-active:scale-[0.86] motion-reduce:transition-none dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))]" /></span><span className="min-w-0 flex-1 truncate">{a.label}</span><span className={ad("ms-auto text-[13px]/[16px] font-bold tabular-nums text-neutral-900/62 dark:text-neutral-100/62", "shrink-0")}>{i}</span></label></li>;
              })}</ul></aL><aL label="Available from"><af value={e.availability} onChange={e => a(a => ({
              ...a,
              availability: e
            }))} options={aC} ariaLabel="Available from" /></aL></div>;
      return <div className={ad("bg-white dark:bg-neutral-950", "text-neutral-900 dark:text-neutral-100", "flex h-full min-h-[980px] w-full flex-col overflow-y-auto p-6 sm:p-8")}><div className="mx-auto flex w-full max-w-[1100px] flex-1 flex-col"><header className="flex flex-wrap items-end justify-between gap-3"><div><h2 className="text-[22px]/[28px] font-extrabold tracking-[-0.01em]">Rentals in San Francisco</h2><p className={ad(av, "mt-1")}><span className="tabular-nums">{_.length}</span> of <span className="tabular-nums">{aA.length}</span> homes match</p></div><button type="button" aria-expanded={r} onClick={() => i(e => !e)} className={ad(au, ax, "md:hidden")}><__mod_22728.n icon={__mod_68656.A} size={18} strokeWidth={2} aria-hidden="true" />Filters{u.length > 0 && <span className="tabular-nums">({u.length})</span>}</button></header><div className="mt-6 flex flex-1 flex-col gap-6 md:flex-row md:gap-8"><aside className={ad("w-full shrink-0 md:block md:w-[320px]", r ? "block" : "hidden")}>{x}</aside><div className="flex min-w-0 flex-1 flex-col">{u.length > 0 && <div className="mb-4 flex flex-wrap items-center gap-2">{u.map(e => <span className={ah}>{e.label}<button type="button" aria-label={`Remove ${e.label} filter`} onClick={e.clear} className="-me-1.5 inline-flex size-6 shrink-0 cursor-pointer items-center justify-center rounded-[calc(var(--rb-r-full,999px))] text-neutral-900/78 dark:text-neutral-100/78 transition-[background-color,color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-neutral-900/8 hover:text-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:hover:bg-neutral-100/12 dark:hover:text-neutral-100"><__mod_22728.n icon={__mod_89289.A} size={14} strokeWidth={2} aria-hidden="true" /></button></span>)}<button type="button" onClick={() => a(aD)} className={am}>Clear all</button></div>}{0 === _.length ? <div className={ad(ak, "flex-1 items-center justify-center px-6 py-16 text-center")}><p className="text-[19px]/[24px] font-extrabold tracking-[-0.01em] text-neutral-900 dark:text-neutral-100">No rentals match these filters</p><p className={ad("max-w-[48ch] text-[15px]/[22px] font-medium text-neutral-900/78 dark:text-neutral-100/78", "mt-1 max-w-[300px]")}>Try fewer amenities, lower the bed or bath minimum, or widen the rent range.</p><button type="button" onClick={() => a(aD)} className={ad("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_68%,white),var(--rb-accent,oklch(84%_0.15_165)))] text-[var(--rb-accent-fg,oklch(26%_0.06_168))] shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_4px_10px_-4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_80%,transparent)] hover:not-disabled:-translate-y-px hover:not-disabled:brightness-[1.04] hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_7px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_85%,transparent)] active:not-disabled:translate-y-px active:not-disabled:brightness-[0.98] active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_55%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] motion-reduce:hover:translate-y-0 disabled:opacity-45 disabled:shadow-none dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_78%,white),var(--rb-accent,oklch(81%_0.16_163)))] dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_6px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,transparent)] dark:hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_9px_22px_-8px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_60%,transparent)] dark:active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_45%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black)] dark:disabled:shadow-none", ax, "mt-5")}>Clear all filters</button></div> : <ul className="space-y-2">{_.map(e => <li><article className={ad(ak, "cursor-pointer")}><div className="flex items-center gap-4 px-4 py-3"><div className="min-w-0 flex-1"><p className="min-w-0 truncate text-[16px]/[20px] font-extrabold text-neutral-900 dark:text-neutral-100">{e.title}</p><p className={ad(ag, "mt-0.5 flex min-w-0 gap-x-3")}><span className="truncate">{e.neighbourhood}</span><span className="shrink-0">{aj[e.type]}</span></p></div><div className={ad(ag, "hidden shrink-0 items-center gap-4 sm:flex")}><span className="inline-flex min-w-[56px] items-center gap-1.5"><__mod_22728.n icon={__mod_63188.A} size={16} strokeWidth={2} aria-hidden="true" />{0 === e.beds ? "Studio" : e.beds}</span><span className="inline-flex min-w-[28px] items-center gap-1.5"><__mod_22728.n icon={__mod_86153.A} size={16} strokeWidth={2} aria-hidden="true" />{e.baths}</span><span className="inline-flex min-w-[80px] items-center gap-1.5"><__mod_22728.n icon={__mod_10498.A} size={16} strokeWidth={2} aria-hidden="true" />{e.sqft.toLocaleString("en-US")} sqft</span></div><div className="min-w-[88px] shrink-0 text-right"><p className={ad(ab, "tabular-nums")}>{aS(e.price)}<span className={a_}>/mo</span></p><p className={ad(ag, "mt-0.5")}>{e.availableInDays <= 14 ? "Available now" : `In ${e.availableInDays} days`}</p></div></div></article></li>)}</ul>}</div></div></div></div>;
    },
    "filtering-6": function () {
      let [e, a] = (0, React.useState)(a0),
        [r, i] = (0, React.useState)("relevance"),
        [d, _] = (0, React.useState)(!1),
        [b, u] = (0, React.useState)(""),
        [x, p] = (0, React.useState)(!1),
        [h, k] = (0, React.useState)(0),
        m = (0, React.useRef)(null),
        v = (0, React.useRef)(null),
        g = e => a(a => ({
          ...a,
          seniority: a.seniority.includes(e) ? a.seniority.filter(a => a !== e) : [...a.seniority, e]
        })),
        f = e => {
          a(a => a.skills.includes(e) ? a : {
            ...a,
            skills: [...a.skills, e]
          }), u(""), k(0), v.current?.focus({
            preventScroll: !0
          });
        },
        w = e => a(a => ({
          ...a,
          skills: a.skills.filter(a => a !== e)
        })),
        y = (0, React.useMemo)(() => {
          let a = b.trim().toLowerCase();
          return aG.filter(r => !e.skills.includes(r) && ("" === a || r.toLowerCase().includes(a))).slice(0, 6);
        }, [b, e.skills]),
        j = Math.min(h, Math.max(0, y.length - 1));
      (0, React.useEffect)(() => {
        if (!x) return;
        let e = m.current,
          a = e?.ownerDocument;
        if (!a) return;
        let r = a => {
          e.contains(a.target) || p(!1);
        };
        return a.addEventListener("mousedown", r), a.addEventListener("touchstart", r), () => {
          a.removeEventListener("mousedown", r), a.removeEventListener("touchstart", r);
        };
      }, [x]);
      let N = (0, React.useMemo)(() => {
          let a = aY.filter(a => a1(a, e));
          return "comp-high" === r ? [...a].sort((e, a) => a.comp - e.comp) : "comp-low" === r ? [...a].sort((e, a) => e.comp - a.comp) : "name" === r ? [...a].sort((e, a) => e.name.localeCompare(a.name)) : [...a].sort((a, r) => {
            let t = a.skills.filter(a => e.skills.includes(a)).length,
              l = r.skills.filter(a => e.skills.includes(a)).length;
            return l !== t ? l - t : r.comp - a.comp;
          });
        }, [e, r]),
        z = (0, React.useMemo)(() => [{
          value: "any",
          label: "Any location"
        }, ...aX.map(a => ({
          value: a.value,
          label: a.label,
          hint: String(aY.filter(r => a1(r, e, "location") && r.location === a.value).length)
        }))], [e]),
        C = 120 !== e.comp[0] || 260 !== e.comp[1],
        S = [...e.skills.map(e => ({
          key: `skill:${e}`,
          label: e,
          clear: () => w(e)
        })), ...e.seniority.map(e => ({
          key: `seniority:${e}`,
          label: aQ.find(a => a.value === e)?.label ?? e,
          clear: () => g(e)
        })), ...(C ? [{
          key: "comp",
          label: `${aJ(e.comp[0])} – ${aJ(e.comp[1])}`,
          clear: () => a(e => ({
            ...e,
            comp: [120, 260]
          }))
        }] : []), ...(e.remote ? [{
          key: "remote",
          label: "Remote only",
          clear: () => a(e => ({
            ...e,
            remote: !1
          }))
        }] : []), ...("any" !== e.location ? [{
          key: "location",
          label: aX.find(a => a.value === e.location)?.label ?? "",
          clear: () => a(e => ({
            ...e,
            location: "any"
          }))
        }] : [])],
        A = <div className="divide-y divide-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:divide-neutral-100/7"><a2 label="Skills"><div ref={m} className="relative"><div data-concentric={!0} className={aP("relative flex w-full min-w-0 cursor-text items-center rounded-[calc(var(--rb-r-xl,12px))] data-concentric:rounded-[var(--rb-r-5xl,22px)] border border-transparent bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] text-[15px]/[20px] font-medium text-neutral-900 transition-[border-color,box-shadow,background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:not-focus-within:not-has-[[aria-invalid=true]]:not-has-[input:disabled]:not-has-[input[readonly]]:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] focus-within:border-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] focus-within:bg-white focus-within:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] has-[[aria-invalid=true]]:border-[oklch(60%_0.236_26)] has-[[aria-invalid=true]]:bg-[oklch(97.5%_0.016_26)] has-[input:disabled]:cursor-not-allowed has-[input:disabled]:text-neutral-900/40 has-[input:disabled]:shadow-none has-[input[readonly]]:cursor-default has-[input[readonly]]:shadow-none dark:text-neutral-100 dark:hover:not-focus-within:not-has-[[aria-invalid=true]]:not-has-[input:disabled]:not-has-[input[readonly]]:bg-neutral-900 dark:focus-within:border-[var(--rb-accent,oklch(81%_0.16_163))] dark:focus-within:bg-neutral-900 dark:focus-within:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:has-[[aria-invalid=true]]:border-[oklch(65.2%_0.219_26)] dark:has-[[aria-invalid=true]]:bg-[oklch(26%_0.04_26)] dark:has-[input:disabled]:text-neutral-100/40", "min-h-10", "flex-wrap gap-1.5 p-1")} onClick={() => {
                p(!0), v.current?.focus({
                  preventScroll: !0
                });
              }}>{e.skills.map(e => <span className="relative inline-flex h-7 max-w-full min-w-0 shrink-0 cursor-pointer items-center gap-1.5 whitespace-nowrap rounded-[calc(var(--rb-r-full,999px))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] px-3 text-[13px]/[16px] font-bold tabular-nums text-neutral-900 dark:text-neutral-100 select-none transition-[background-color,border-color,box-shadow,color,scale,translate,outline-color] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:translate-y-px active:duration-[90ms] motion-reduce:active:translate-y-0 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] aria-pressed:bg-none aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-pressed:shadow-[inset_0_0_0_1.5px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14)] disabled:cursor-not-allowed disabled:text-neutral-900/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-pressed:shadow-[inset_0_0_0_1.5px_var(--rb-accent,oklch(81%_0.16_163))] dark:aria-expanded:bg-neutral-800 dark:disabled:text-neutral-100/40">{e}<button type="button" aria-label={`Remove ${e} filter`} onClick={a => {
                    a.stopPropagation(), w(e);
                  }} className="-me-1 inline-flex size-5 shrink-0 cursor-pointer items-center justify-center rounded-[calc(var(--rb-r-full,999px))] text-neutral-900/78 dark:text-neutral-100/78 transition-[background-color,color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-neutral-900/8 hover:text-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:hover:bg-neutral-100/12 dark:hover:text-neutral-100"><__mod_22728.n icon={__mod_89289.A} size={14} strokeWidth={2} aria-hidden="true" /></button></span>)}<input ref={v} type="text" value={b} onChange={e => {
                  u(e.target.value), p(!0), k(0);
                }} onFocus={() => p(!0)} onKeyDown={a => {
                  "Enter" === a.key ? y.length && (a.preventDefault(), f(y[j])) : "Backspace" === a.key && "" === b && e.skills.length ? (a.preventDefault(), w(e.skills[e.skills.length - 1])) : "ArrowDown" === a.key ? (a.preventDefault(), p(!0), k(e => Math.min(e + 1, y.length - 1))) : "ArrowUp" === a.key ? (a.preventDefault(), k(e => Math.max(e - 1, 0))) : "Escape" === a.key && p(!1);
                }} placeholder={e.skills.length ? "Add skill…" : "e.g. TypeScript"} aria-label="Add a required skill" className={aP("h-full w-full min-w-0 flex-1 bg-transparent px-3 outline-none [[data-affix]+&]:ps-2 [&:has(+[data-affix])]:pe-2 placeholder:font-medium placeholder:text-neutral-900/55 disabled:cursor-not-allowed disabled:placeholder:text-neutral-900/30 dark:placeholder:text-neutral-100/55 dark:disabled:placeholder:text-neutral-100/30 dark:[color-scheme:dark]", "min-w-[80px]")} /></div>{x && y.length > 0 && <ul role="listbox" className={aP(aB, "absolute z-30 mt-1.5 max-h-[220px] w-full")}>{y.map((e, a) => <li role="option" aria-selected={a === j} onMouseEnter={() => k(a)} onClick={() => f(e)} className={aF}>{e}</li>)}</ul>}</div><p className={aP("max-w-[60ch] text-[14px]/[20px] font-medium text-neutral-900/78 dark:text-neutral-100/78", "mt-2")}>Candidates must have every skill. Press Enter to add.</p></a2><a2 label="Seniority"><ul className="-mx-2 space-y-0.5">{aQ.map(a => {
                let r,
                  l = (r = a.value, aY.filter(a => a1(a, e, "seniority") && a.seniority === r).length),
                  i = e.seniority.includes(a.value);
                return <li><label className={aP(aK, 0 === l && !i && "opacity-40")}><span className="relative inline-flex size-[18px] shrink-0 items-center justify-center"><input type="checkbox" checked={i} onChange={() => g(a.value)} className="peer size-[18px] shrink-0 cursor-pointer appearance-none rounded-[calc(var(--rb-r-sm,6px))] border-2 border-neutral-900/28 bg-white transition-[background-color,border-color,box-shadow,outline-color,scale] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:scale-[0.86] motion-reduce:active:scale-100 hover:not-checked:not-disabled:border-neutral-900/60 active:not-checked:bg-neutral-900/8 checked:border-transparent checked:bg-[var(--rb-accent,oklch(84%_0.15_165))] indeterminate:border-transparent indeterminate:bg-[var(--rb-accent,oklch(84%_0.15_165))] checked:shadow-[inset_0_1px_0_rgb(255_255_255/0.4),inset_0_-1.5px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] indeterminate:shadow-[inset_0_1px_0_rgb(255_255_255/0.4),inset_0_-1.5px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] aria-invalid:border-[oklch(60%_0.236_26)] disabled:cursor-not-allowed disabled:border-neutral-900/20 disabled:checked:bg-neutral-900/25 disabled:checked:shadow-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:border-neutral-100/34 dark:bg-neutral-900 dark:hover:not-checked:not-disabled:border-neutral-100/70 dark:active:not-checked:bg-neutral-100/10 dark:checked:bg-[var(--rb-accent,oklch(81%_0.16_163))] dark:indeterminate:bg-[var(--rb-accent,oklch(81%_0.16_163))] dark:checked:shadow-none dark:indeterminate:shadow-none dark:aria-invalid:border-[oklch(65.2%_0.219_26)] dark:disabled:border-neutral-100/24 dark:disabled:checked:bg-neutral-100/28" /><__mod_22728.n icon={__mod_90987.A} size={14} strokeWidth={2.5} aria-hidden="true" className="pointer-events-none absolute scale-50 text-[var(--rb-accent-fg,oklch(26%_0.06_168))] opacity-0 transition-[opacity,scale] duration-[260ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] peer-checked:scale-100 peer-checked:opacity-100 peer-indeterminate:scale-100 peer-indeterminate:opacity-100 peer-active:scale-[0.86] motion-reduce:transition-none dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))]" /></span><span className="min-w-0 flex-1 truncate">{a.label}</span><span className={aP("ms-auto text-[13px]/[16px] font-bold tabular-nums text-neutral-900/62 dark:text-neutral-100/62", "shrink-0")}>{l}</span></label></li>;
              })}</ul></a2><a2 label="Compensation"><div className="mb-4 flex min-h-7 items-center justify-between"><span className={aP(a$, aT, "tabular-nums")}>{aJ(e.comp[0])} – {aJ(e.comp[1])}</span>{C && <button type="button" onClick={() => a(e => ({
                ...e,
                comp: [120, 260]
              }))} className={aO}>Reset</button>}</div><aV min={120} max={260} step={5} value={e.comp} onChange={e => a(a => ({
              ...a,
              comp: e
            }))} format={aJ} labels={["Minimum compensation", "Maximum compensation"]} /></a2><a2 label="Location & remote"><div className="space-y-3"><aU value={e.location} onChange={e => a(a => ({
                ...a,
                location: e
              }))} options={z} ariaLabel="Filter by location" leading={<__mod_22728.n icon={__mod_87924.A} size={18} strokeWidth={2} aria-hidden="true" className={aP(aW, "shrink-0")} />} /><div className="-mx-2"><label className={aP(aK, "justify-between")}><span>Remote only</span><button type="button" role="switch" aria-checked={e.remote} aria-label="Remote only" onClick={() => a(e => ({
                    ...e,
                    remote: !e.remote
                  }))} className="group relative inline-flex h-6 w-10 shrink-0 cursor-pointer items-center rounded-full bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] p-0.5 shadow-[inset_0_1px_2px_rgb(84_62_32/0.14),inset_0_0_0_1px_rgb(84_62_32/0.05)] transition-[background-color,box-shadow,outline-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:aria-[checked=false]:not-disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_94%,black)] aria-checked:bg-[var(--rb-accent,oklch(84%_0.15_165))] aria-checked:shadow-[inset_0_1px_2px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_55%,black),inset_0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_75%,black)] disabled:cursor-not-allowed disabled:opacity-45 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:bg-neutral-100/16 dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6)] dark:hover:aria-[checked=false]:not-disabled:bg-neutral-100/24 dark:aria-checked:bg-[var(--rb-accent,oklch(81%_0.16_163))] dark:aria-checked:shadow-[inset_0_1px_2px_rgb(0_0_0/0.35)]"><span className="pointer-events-none block h-5 w-5 rounded-full bg-white shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_2px_rgb(84_62_32/0.10),0_3px_8px_-2px_rgb(84_62_32/0.20)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.12),0_0_0_1px_rgb(0_0_0/0.6),0_2px_6px_-1px_rgb(0_0_0/0.6)] transition-[translate,width] duration-[280ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] motion-reduce:transition-none group-active:w-6 group-aria-checked:translate-x-4 group-aria-checked:group-active:translate-x-3 group-disabled:shadow-none dark:bg-white" /></button></label></div></div></a2></div>;
      return <div className={aP("bg-white dark:bg-neutral-950", aT, "flex h-full min-h-[960px] w-full flex-col overflow-y-auto p-6 sm:p-8")}><div className="mx-auto flex w-full max-w-[1100px] flex-1 flex-col"><header className="flex flex-wrap items-center justify-between gap-3"><div><h2 className={aP("text-[22px]/[28px] font-extrabold tracking-[-0.01em]", aT)}>Candidate pool</h2><p role="status" className={aP(aH, aW, "mt-1")}><span className={aP(aT, "tabular-nums")}>{N.length}</span> of <span className="tabular-nums">{aY.length}</span> engineers</p></div><div className="flex min-w-0 items-center gap-2"><button type="button" aria-expanded={d} onClick={() => _(e => !e)} className={aP("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] text-neutral-900 dark:text-neutral-100 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] active:not-disabled:translate-y-px active:not-disabled:shadow-[inset_0_1px_3px_rgb(84_62_32/0.16),0_0_0_1px_rgb(84_62_32/0.10)] dark:active:not-disabled:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14),0_0_0_1px_rgb(84_62_32/0.10)] dark:aria-expanded:bg-neutral-800 dark:aria-expanded:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] disabled:bg-none disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] disabled:text-neutral-900/40 disabled:shadow-none dark:disabled:bg-neutral-800/60 dark:disabled:text-neutral-100/40", aI, "md:hidden")}><__mod_22728.n icon={__mod_68656.A} size={18} strokeWidth={2} aria-hidden="true" />Filters{S.length > 0 && <span className="tabular-nums">({S.length})</span>}</button><aU value={r} onChange={i} options={aZ} ariaLabel="Sort candidates" className="w-[248px]" /></div></header><div className="mt-6 flex flex-1 flex-col gap-6 md:flex-row md:gap-8"><aside className={aP("w-full shrink-0 md:block md:w-[260px]", d ? "block" : "hidden")}>{A}</aside><div className="flex min-w-0 flex-1 flex-col">{S.length > 0 && <div className="mb-4 flex flex-wrap items-center gap-2">{S.map(e => <span className="relative inline-flex h-8 max-w-full min-w-0 shrink-0 cursor-pointer items-center gap-1.5 whitespace-nowrap rounded-[calc(var(--rb-r-full,999px))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] px-3.5 text-[14px]/[18px] font-bold text-neutral-900 dark:text-neutral-100 select-none transition-[background-color,border-color,box-shadow,color,scale,translate,outline-color] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:translate-y-px active:duration-[90ms] motion-reduce:active:translate-y-0 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] aria-pressed:bg-none aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-pressed:shadow-[inset_0_0_0_1.5px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14)] disabled:cursor-not-allowed disabled:text-neutral-900/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-pressed:shadow-[inset_0_0_0_1.5px_var(--rb-accent,oklch(81%_0.16_163))] dark:aria-expanded:bg-neutral-800 dark:disabled:text-neutral-100/40">{e.label}<button type="button" aria-label={`Remove ${e.label} filter`} onClick={e.clear} className="-me-1.5 inline-flex size-6 shrink-0 cursor-pointer items-center justify-center rounded-[calc(var(--rb-r-full,999px))] text-neutral-900/78 dark:text-neutral-100/78 transition-[background-color,color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-neutral-900/8 hover:text-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:hover:bg-neutral-100/12 dark:hover:text-neutral-100"><__mod_22728.n icon={__mod_89289.A} size={14} strokeWidth={2} aria-hidden="true" /></button></span>)}<button type="button" onClick={() => {
                  a(a0), u("");
                }} className={aO}>Clear all</button></div>}{0 === N.length ? <div className="flex flex-1 flex-col items-center justify-center px-6 py-16 text-center"><p className="text-[19px]/[24px] font-extrabold tracking-[-0.01em] text-neutral-900 dark:text-neutral-100">No candidates match these filters</p><p className={aP("max-w-[48ch] text-[15px]/[22px] font-medium text-neutral-900/78 dark:text-neutral-100/78", "mt-1 max-w-[300px]")}>Remove a required skill or widen the compensation range to grow the shortlist.</p><button type="button" onClick={() => {
                  a(a0), u("");
                }} className={aP("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_68%,white),var(--rb-accent,oklch(84%_0.15_165)))] text-[var(--rb-accent-fg,oklch(26%_0.06_168))] shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_4px_10px_-4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_80%,transparent)] hover:not-disabled:-translate-y-px hover:not-disabled:brightness-[1.04] hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_7px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_85%,transparent)] active:not-disabled:translate-y-px active:not-disabled:brightness-[0.98] active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_55%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] motion-reduce:hover:translate-y-0 disabled:opacity-45 disabled:shadow-none dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_78%,white),var(--rb-accent,oklch(81%_0.16_163)))] dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_6px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,transparent)] dark:hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_9px_22px_-8px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_60%,transparent)] dark:active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_45%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black)] dark:disabled:shadow-none", aI, "mt-5")}>Clear all filters</button></div> : <ul className="flex flex-col gap-2.5">{N.map(a => {
                  let r = aX.find(e => e.value === a.location)?.label;
                  return <li><article className="relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] text-neutral-900 dark:text-neutral-100 shadow-[0_0_0_1px_rgb(84_62_32/0.07),0_1px_2px_rgb(84_62_32/0.06),0_8px_22px_-10px_rgb(84_62_32/0.20)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_0_0_1px_rgb(0_0_0/0.6),0_10px_24px_-12px_rgb(0_0_0/0.8)]"><div className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-start gap-x-3.5 p-4"><span aria-hidden="true" className={aP("relative inline-flex size-8 shrink-0 overflow-hidden rounded-full select-none", "col-start-1 row-start-1 row-end-3 size-[44px]")}><span className="flex size-full items-center justify-center rounded-[inherit] bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_24%,white)] text-[12px]/[16px] font-extrabold tabular-nums text-neutral-900 dark:text-neutral-100 dark:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_22%,var(--color-neutral-900))]">{a.name.split(" ").slice(0, 2).map(e => e[0]).join("").toUpperCase()}</span></span><div className="col-start-2 row-start-1 min-w-0"><div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5"><p className={aP(a$, aT, "truncate")}>{a.name}</p><span className={aP(aH, aW)}>{a.title}</span></div></div><div className="col-start-2 row-start-2 mt-2 flex flex-wrap gap-1.5 max-sm:col-end-4">{a.skills.map(a => {
                            let r = e.skills.includes(a);
                            return <span className={aP("inline-flex h-5.5 min-w-5.5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden whitespace-nowrap rounded-[calc(var(--rb-r-full,999px))] px-2.5 text-[12px]/[16px] font-bold tabular-nums", r ? "bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] text-neutral-900 dark:text-neutral-100 dark:bg-neutral-100/12" : "bg-white text-neutral-900 dark:text-neutral-100 shadow-[0_0_0_1px_rgb(84_62_32/0.09),0_1px_2px_rgb(84_62_32/0.08)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_0_0_1px_rgb(0_0_0/0.55)] dark:bg-neutral-800")}>{a}</span>;
                          })}</div><div className="col-start-3 row-start-1 flex shrink-0 flex-col items-end gap-1 pl-1 sm:row-end-3"><span className={aP(a$, aT, "tabular-nums")}>{aJ(a.comp)}</span><span className={aP(aq, aW, "inline-flex items-center gap-1")}><__mod_22728.n icon={__mod_87924.A} size={14} strokeWidth={2} aria-hidden="true" />{r}{a.remote && <span className="ms-2">Remote</span>}</span></div></div></article></li>;
                })}</ul>}</div></div></div></div>;
    },
    "filtering-7": function () {
      let [e, a] = (0, React.useState)(rw),
        [r, i] = (0, React.useState)("recent"),
        [o, s] = (0, React.useState)(!1),
        d = (e, r) => a(a => ({
          ...a,
          [e]: a[e].includes(r) ? a[e].filter(e => e !== r) : [...a[e], r]
        })),
        _ = (0, React.useMemo)(() => {
          let a = rg.filter(a => rj(a, e));
          return "name" === r ? [...a].sort((e, a) => e.name.localeCompare(a.name)) : "large" === r ? [...a].sort((e, a) => a.sizeKb - e.sizeKb) : "small" === r ? [...a].sort((e, a) => e.sizeKb - a.sizeKb) : [...a].sort((e, a) => e.updatedDays - a.updatedDays);
        }, [e, r]),
        b = ["type", "orientation", "tag", "updated"].flatMap(a => e[a].map(e => ({
          key: `${a}:${e}`,
          label: rN[a](e),
          clear: () => d(a, e)
        })));
      return <div className={ra("bg-white dark:bg-neutral-950", rr, "flex h-full min-h-[880px] w-full flex-col overflow-y-auto p-6 sm:p-8")}><div className="mx-auto flex w-full max-w-[1100px] flex-1 flex-col"><header className="mb-5"><h2 className={ra("text-[22px]/[28px] font-extrabold tracking-[-0.01em]", rr)}>Brand asset library</h2><p role="status" className={ra("text-[14px]/[20px] font-medium", rt, "mt-1")}><span className={ra(rr, "tabular-nums")}>{_.length}</span> of <span className="tabular-nums">{rg.length}</span> assets</p></header><div className="flex flex-wrap items-center gap-2">{rC.map(r => <rz label={r.label} options={r.options} selected={e[r.key]} onToggle={e => d(r.key, e)} onClear={() => {
              let e;
              return e = r.key, a(a => ({
                ...a,
                [e]: []
              }));
            }} counts={(a => {
              let r = {};
              for (let t of rC.find(e => e.key === a).options) r[t.value] = rg.filter(r => rj(r, e, a) && ry(r, a, t.value)).length;
              return r;
            })(r.key)} />)}<div className="ml-auto flex items-center gap-2"><div role="radiogroup" aria-label="Grid density" onKeyDown={rb} className={ra("inline-flex w-fit max-w-full items-stretch gap-1 rounded-[calc(var(--rb-r-full,999px)_+_min(4px,var(--rb-r-full,999px)))] bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] p-1", "h-10")}><button type="button" role="radio" aria-label="Comfortable grid" aria-checked={!o} tabIndex={o ? -1 : 0} onClick={() => s(!1)} className={ra(rs, "aspect-square")}><__mod_22728.n icon={__mod_19809.A} size={18} strokeWidth={2} aria-hidden="true" className="shrink-0" /></button><button type="button" role="radio" aria-label="Compact grid" aria-checked={o} tabIndex={o ? 0 : -1} onClick={() => s(!0)} className={ra(rs, "aspect-square")}><__mod_22728.n icon={__mod_96034.A} size={18} strokeWidth={2} aria-hidden="true" className="shrink-0" /></button></div><ru value={r} onChange={i} options={rf} ariaLabel="Sort assets" className="w-[210px]" /></div></div>{b.length > 0 && <div className="mt-4 flex flex-wrap items-center gap-2">{b.map(e => <span className="relative inline-flex h-8 max-w-full min-w-0 shrink-0 cursor-pointer items-center gap-1.5 whitespace-nowrap rounded-[calc(var(--rb-r-full,999px))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] px-3.5 text-[14px]/[18px] font-bold text-neutral-900 dark:text-neutral-100 select-none transition-[background-color,border-color,box-shadow,color,scale,translate,outline-color] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:translate-y-px active:duration-[90ms] motion-reduce:active:translate-y-0 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] aria-pressed:bg-none aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-pressed:shadow-[inset_0_0_0_1.5px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14)] disabled:cursor-not-allowed disabled:text-neutral-900/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-pressed:shadow-[inset_0_0_0_1.5px_var(--rb-accent,oklch(81%_0.16_163))] dark:aria-expanded:bg-neutral-800 dark:disabled:text-neutral-100/40">{e.label}<button type="button" aria-label={`Remove ${e.label} filter`} onClick={e.clear} className="-me-1.5 inline-flex size-6 shrink-0 cursor-pointer items-center justify-center rounded-[calc(var(--rb-r-full,999px))] text-neutral-900/78 dark:text-neutral-100/78 transition-[background-color,color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-neutral-900/8 hover:text-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:hover:bg-neutral-100/12 dark:hover:text-neutral-100"><__mod_22728.n icon={__mod_89289.A} size={14} strokeWidth={2} aria-hidden="true" /></button></span>)}<button type="button" onClick={() => a(rw)} className="inline-flex h-8 cursor-pointer items-center rounded-[calc(var(--rb-r-full,999px))] px-3 text-[14px]/[18px] font-bold text-neutral-900/78 dark:text-neutral-100/78 transition-[background-color,color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-neutral-900/5 hover:text-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:hover:bg-neutral-100/6 dark:hover:text-neutral-100">Clear all</button></div>}{0 === _.length ? <div className="mt-4 flex flex-1 flex-col items-center justify-center px-6 py-16 text-center"><div className="mb-3 flex h-10 w-10 items-center justify-center"><__mod_22728.n icon={__mod_66575.A} size={20} strokeWidth={2} aria-hidden="true" className="text-neutral-900/78 dark:text-neutral-100/78" /></div><p className="text-[19px]/[24px] font-extrabold tracking-[-0.01em] text-neutral-900 dark:text-neutral-100">No assets match these filters</p><p className={ra("max-w-[48ch] text-[15px]/[22px] font-medium text-neutral-900/78 dark:text-neutral-100/78", "mt-1 max-w-[300px]")}>Try a different type or clear a facet to see more of the library.</p><button type="button" onClick={() => a(rw)} className={ra("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_68%,white),var(--rb-accent,oklch(84%_0.15_165)))] text-[var(--rb-accent-fg,oklch(26%_0.06_168))] shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_4px_10px_-4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_80%,transparent)] hover:not-disabled:-translate-y-px hover:not-disabled:brightness-[1.04] hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_7px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_85%,transparent)] active:not-disabled:translate-y-px active:not-disabled:brightness-[0.98] active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_55%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] motion-reduce:hover:translate-y-0 disabled:opacity-45 disabled:shadow-none dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_78%,white),var(--rb-accent,oklch(81%_0.16_163)))] dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_6px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,transparent)] dark:hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_9px_22px_-8px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_60%,transparent)] dark:active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_45%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black)] dark:disabled:shadow-none", ri, "mt-5")}>Clear all filters</button></div> : <ul className={ra("mt-5 grid items-start", o ? "grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-6" : "grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4")}>{_.map(e => {
              let a,
                r = rm[e.type] ?? __mod_22776.A;
              return <li><article className={ra("relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 shadow-[inset_0_0_0_1px_rgb(84_62_32/0.05)] dark:shadow-[inset_0_0_0_1px_rgb(255_255_255/0.05)]", "cursor-pointer")}><div className={ra("mx-1 mb-1 flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-5xl,22px))] border border-transparent bg-white dark:bg-neutral-950 shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] [&:has(+*)]:mb-0", "relative mt-1 aspect-[4/3] items-center justify-center p-1")}><div className={ra("bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-100/8", "rounded-[var(--rb-r-4xl,18px)]", "relative flex h-full max-w-full items-center justify-center", rv[e.orientation])}><__mod_22728.n icon={r} size={o ? 20 : 28} strokeWidth={2} aria-hidden="true" className={rt} /><span className={ra(rc, "bg-white text-neutral-900 dark:text-neutral-100 shadow-[0_0_0_1px_rgb(84_62_32/0.09),0_1px_2px_rgb(84_62_32/0.08)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_0_0_1px_rgb(0_0_0/0.55)] dark:bg-neutral-800", "absolute top-2 left-2")}>{e.ext}</span></div></div><div className={ra("px-2.5 pt-2", o ? "pb-2" : "pb-2.5")}><p className={ra("text-[15px]/[20px] font-bold", rr, "truncate")}>{e.name}</p>{!o && <div className={ra(rl, rt, "mt-0.5 flex items-baseline justify-between gap-2")}><span className="tabular-nums">{e.width} × {e.height}</span><span className="shrink-0 tabular-nums">{(a = e.sizeKb) >= 1024 ? `${(a / 1024).toFixed(1)} MB` : `${a} KB`}</span></div>}</div></article></li>;
            })}</ul>}</div></div>;
    },
    "filtering-8": function () {
      let [e, a] = (0, React.useState)(rZ),
        [r, i] = (0, React.useState)("cheapest"),
        [d, _] = (0, React.useState)(null),
        [b, u] = (0, React.useState)(!1),
        x = (0, React.useMemo)(() => {
          let a = rU.filter(a => r0(a, e));
          return "fastest" === r ? [...a].sort((e, a) => e.duration - a.duration) : "earliest" === r ? [...a].sort((e, a) => e.depart - a.depart) : [...a].sort((e, a) => e.price - a.price);
        }, [e, r]),
        p = rU.filter(a => r0(a, e, "carryOn") && a.carryOn).length,
        h = e => a(a => ({
          ...a,
          airlines: a.airlines.includes(e) ? a.airlines.filter(a => a !== e) : [...a.airlines, e]
        })),
        k = 0 !== e.depart[0] || 1440 !== e.depart[1],
        m = 300 !== e.duration[0] || 660 !== e.duration[1],
        v = [...("any" !== e.stops ? [{
          key: "stops",
          label: rO.find(a => a.value === e.stops)?.label ?? e.stops,
          clear: () => a(e => ({
            ...e,
            stops: "any"
          }))
        }] : []), ...(k ? [{
          key: "depart",
          label: `Depart ${rX(e.depart[0])} – ${rX(e.depart[1])}`,
          clear: () => a(e => ({
            ...e,
            depart: [0, 1440]
          }))
        }] : []), ...(m ? [{
          key: "duration",
          label: `Under ${rY(e.duration[1])}`,
          clear: () => a(e => ({
            ...e,
            duration: [300, 660]
          }))
        }] : []), ...e.airlines.map(e => ({
          key: `airline:${e}`,
          label: rK.find(a => a.value === e)?.label ?? e,
          clear: () => h(e)
        })), ...(e.carryOn ? [{
          key: "carryOn",
          label: "Carry-on included",
          clear: () => a(e => ({
            ...e,
            carryOn: !1
          }))
        }] : [])],
        g = <div className="divide-y divide-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:divide-neutral-100/7"><r1 label="Stops"><div role="radiogroup" aria-label="Number of stops" className="-mx-2 space-y-0.5">{rO.map(r => {
                let l,
                  n = (l = r.value, rU.filter(a => r0(a, e, "stops") && ((e, a) => {
                    if ("any" === a) return !0;
                    let r = Number(a);
                    return 0 === r ? 0 === e.stops : e.stops <= r;
                  })(a, l)).length),
                  i = e.stops === r.value;
                return <label className={rA(r$, 0 === n && !i && "opacity-40")}><input type="radio" name="stops" checked={i} onChange={() => a(e => ({
                    ...e,
                    stops: r.value
                  }))} className="size-[18px] shrink-0 cursor-pointer appearance-none rounded-full border-2 border-neutral-900/28 bg-white transition-[background-color,border-color,border-width,box-shadow,outline-color,scale] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:scale-[0.86] motion-reduce:active:scale-100 hover:not-checked:not-disabled:border-neutral-900/60 active:not-checked:bg-neutral-900/8 checked:border-[6px] checked:border-[var(--rb-accent,oklch(84%_0.15_165))] checked:bg-white checked:shadow-[0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] aria-invalid:border-[oklch(60%_0.236_26)] disabled:cursor-not-allowed disabled:border-neutral-900/20 disabled:checked:border-neutral-900/25 disabled:checked:shadow-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:border-neutral-100/34 dark:bg-neutral-900 dark:hover:not-checked:not-disabled:border-neutral-100/70 dark:active:not-checked:bg-neutral-100/10 dark:checked:border-[var(--rb-accent,oklch(81%_0.16_163))] dark:checked:bg-neutral-900 dark:checked:shadow-none dark:aria-invalid:border-[oklch(65.2%_0.219_26)] dark:disabled:border-neutral-100/24 dark:disabled:checked:border-neutral-100/28" /><span className="min-w-0 flex-1 truncate">{r.label}</span><span className={rA(rq, "shrink-0")}>{n}</span></label>;
              })}</div></r1><r1 label="Departure time"><div className="mb-4 flex min-h-7 items-center justify-between"><span className={rA(rR, rD, "tabular-nums")}>{rX(e.depart[0])} – {rX(e.depart[1])}</span>{k && <button type="button" onClick={() => a(e => ({
                ...e,
                depart: [0, 1440]
              }))} className={rI}>Reset</button>}</div><rF min={0} max={1440} step={15} value={e.depart} onChange={e => a(a => ({
              ...a,
              depart: e
            }))} format={rX} labels={["Earliest departure", "Latest departure"]} /></r1><r1 label="Duration"><div className="mb-4 flex min-h-7 items-center justify-between"><span className={rA(rR, rD, "tabular-nums")}>{rY(e.duration[0])} – {rY(e.duration[1])}</span>{m && <button type="button" onClick={() => a(e => ({
                ...e,
                duration: [300, 660]
              }))} className={rI}>Reset</button>}</div><rF min={300} max={660} step={5} value={e.duration} onChange={e => a(a => ({
              ...a,
              duration: e
            }))} format={rY} labels={["Shortest duration", "Longest duration"]} /></r1><r1 label="Airlines"><ul className="-mx-2 space-y-0.5">{rK.map(a => {
                var r;
                let l,
                  i,
                  s = (l = a.value, rU.filter(a => r0(a, e, "airlines") && a.airline === l).length),
                  c = (r = a.value, (i = rU.filter(a => r0(a, e, "airlines") && a.airline === r).map(e => e.price)).length ? Math.min(...i) : null),
                  d = e.airlines.includes(a.value);
                return <li><label className={rA(r$, 0 === s && !d && "opacity-40")}><span className="relative inline-flex size-[18px] shrink-0 items-center justify-center"><input type="checkbox" checked={d} onChange={() => h(a.value)} className="peer size-[18px] shrink-0 cursor-pointer appearance-none rounded-[calc(var(--rb-r-sm,6px))] border-2 border-neutral-900/28 bg-white transition-[background-color,border-color,box-shadow,outline-color,scale] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:scale-[0.86] motion-reduce:active:scale-100 hover:not-checked:not-disabled:border-neutral-900/60 active:not-checked:bg-neutral-900/8 checked:border-transparent checked:bg-[var(--rb-accent,oklch(84%_0.15_165))] indeterminate:border-transparent indeterminate:bg-[var(--rb-accent,oklch(84%_0.15_165))] checked:shadow-[inset_0_1px_0_rgb(255_255_255/0.4),inset_0_-1.5px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] indeterminate:shadow-[inset_0_1px_0_rgb(255_255_255/0.4),inset_0_-1.5px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] aria-invalid:border-[oklch(60%_0.236_26)] disabled:cursor-not-allowed disabled:border-neutral-900/20 disabled:checked:bg-neutral-900/25 disabled:checked:shadow-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:border-neutral-100/34 dark:bg-neutral-900 dark:hover:not-checked:not-disabled:border-neutral-100/70 dark:active:not-checked:bg-neutral-100/10 dark:checked:bg-[var(--rb-accent,oklch(81%_0.16_163))] dark:indeterminate:bg-[var(--rb-accent,oklch(81%_0.16_163))] dark:checked:shadow-none dark:indeterminate:shadow-none dark:aria-invalid:border-[oklch(65.2%_0.219_26)] dark:disabled:border-neutral-100/24 dark:disabled:checked:bg-neutral-100/28" /><__mod_22728.n icon={__mod_90987.A} size={14} strokeWidth={2.5} aria-hidden="true" className="pointer-events-none absolute scale-50 text-[var(--rb-accent-fg,oklch(26%_0.06_168))] opacity-0 transition-[opacity,scale] duration-[260ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] peer-checked:scale-100 peer-checked:opacity-100 peer-indeterminate:scale-100 peer-indeterminate:opacity-100 peer-active:scale-[0.86] motion-reduce:transition-none dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))]" /></span><span className="min-w-0 flex-1 truncate">{a.label}</span><span className={rA(rq, "shrink-0")}>{null !== c ? `from ${rJ(c)}` : "None"}</span></label></li>;
              })}</ul></r1><r1 label="Baggage"><label className="flex cursor-pointer items-center justify-between gap-3"><span className="min-w-0"><span className={rA(rR, rD, "block")}>Carry-on included</span><span className={rA("max-w-[60ch] text-[14px]/[20px] font-medium text-neutral-900/78 dark:text-neutral-100/78", "mt-0.5 block")}><span className="tabular-nums">{p}</span> fares with a free cabin bag</span></span><button type="button" role="switch" aria-checked={e.carryOn} aria-label="Carry-on included" onClick={() => a(e => ({
                ...e,
                carryOn: !e.carryOn
              }))} className="group relative inline-flex h-6 w-10 shrink-0 cursor-pointer items-center rounded-full bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] p-0.5 shadow-[inset_0_1px_2px_rgb(84_62_32/0.14),inset_0_0_0_1px_rgb(84_62_32/0.05)] transition-[background-color,box-shadow,outline-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:aria-[checked=false]:not-disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_94%,black)] aria-checked:bg-[var(--rb-accent,oklch(84%_0.15_165))] aria-checked:shadow-[inset_0_1px_2px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_55%,black),inset_0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_75%,black)] disabled:cursor-not-allowed disabled:opacity-45 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:bg-neutral-100/16 dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6)] dark:hover:aria-[checked=false]:not-disabled:bg-neutral-100/24 dark:aria-checked:bg-[var(--rb-accent,oklch(81%_0.16_163))] dark:aria-checked:shadow-[inset_0_1px_2px_rgb(0_0_0/0.35)]"><span className="pointer-events-none block h-5 w-5 rounded-full bg-white shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_2px_rgb(84_62_32/0.10),0_3px_8px_-2px_rgb(84_62_32/0.20)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.12),0_0_0_1px_rgb(0_0_0/0.6),0_2px_6px_-1px_rgb(0_0_0/0.6)] transition-[translate,width] duration-[280ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] motion-reduce:transition-none group-active:w-6 group-aria-checked:translate-x-4 group-aria-checked:group-active:translate-x-3 group-disabled:shadow-none dark:bg-white" /></button></label></r1></div>;
      return <div className={rA("bg-white dark:bg-neutral-950", rD, "flex h-full min-h-[1000px] w-full flex-col overflow-y-auto p-6 sm:p-8")}><div className="mx-auto flex w-full max-w-[1100px] flex-1 flex-col"><header className="flex flex-wrap items-center justify-between gap-3"><div><h2 className={rA("text-[22px]/[28px] font-extrabold tracking-[-0.01em]", rD)}>San Francisco to New York</h2><p className={rA(rL, rE, "mt-1 flex flex-wrap gap-x-3")}><span role="status"><span className={rA(rD, "tabular-nums")}>{x.length}</span> of <span className="tabular-nums">{rU.length}</span> flights</span><span>Thu, Jun 12</span><span>SFO → JFK</span></p></div><div className="flex items-center gap-2"><button type="button" aria-expanded={b} onClick={() => u(e => !e)} className={rA(rW, rH, "md:hidden")}><__mod_22728.n icon={__mod_68656.A} size={18} strokeWidth={2} aria-hidden="true" />Filters{v.length > 0 && <span className="tabular-nums">({v.length})</span>}</button><rB value={r} onChange={i} options={rV} ariaLabel="Sort flights" className="w-[200px]" /></div></header><div className="mt-6 flex flex-1 flex-col gap-6 md:flex-row md:gap-8"><aside className={rA("w-full shrink-0 md:block md:w-[260px]", b ? "block" : "hidden")}>{g}</aside><div className="flex min-w-0 flex-1 flex-col">{v.length > 0 && <div className="mb-4 flex flex-wrap items-center gap-2">{v.map(e => <span className="relative inline-flex h-8 max-w-full min-w-0 shrink-0 cursor-pointer items-center gap-1.5 whitespace-nowrap rounded-[calc(var(--rb-r-full,999px))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] px-3.5 text-[14px]/[18px] font-bold text-neutral-900 dark:text-neutral-100 select-none transition-[background-color,border-color,box-shadow,color,scale,translate,outline-color] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:translate-y-px active:duration-[90ms] motion-reduce:active:translate-y-0 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] aria-pressed:bg-none aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-pressed:shadow-[inset_0_0_0_1.5px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14)] disabled:cursor-not-allowed disabled:text-neutral-900/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-pressed:shadow-[inset_0_0_0_1.5px_var(--rb-accent,oklch(81%_0.16_163))] dark:aria-expanded:bg-neutral-800 dark:disabled:text-neutral-100/40">{e.label}<button type="button" aria-label={`Remove ${e.label} filter`} onClick={e.clear} className="-me-1.5 inline-flex size-6 shrink-0 cursor-pointer items-center justify-center rounded-[calc(var(--rb-r-full,999px))] text-neutral-900/78 dark:text-neutral-100/78 transition-[background-color,color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-neutral-900/8 hover:text-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:hover:bg-neutral-100/12 dark:hover:text-neutral-100"><__mod_22728.n icon={__mod_89289.A} size={14} strokeWidth={2} aria-hidden="true" /></button></span>)}<button type="button" onClick={() => a(rZ)} className={rI}>Clear all</button></div>}{0 === x.length ? <div className="flex flex-1 flex-col items-center justify-center px-6 py-16 text-center"><p className="text-[19px]/[24px] font-extrabold tracking-[-0.01em] text-neutral-900 dark:text-neutral-100">No flights match these filters</p><p className={rA("max-w-[48ch] text-[15px]/[22px] font-medium text-neutral-900/78 dark:text-neutral-100/78", "mt-1 max-w-[300px]")}>Allow more stops or widen the departure window to see more of the day.</p><button type="button" onClick={() => a(rZ)} className={rA(rT, rH, "mt-5")}>Clear all filters</button></div> : <ul className="space-y-3">{x.map(e => {
                  let a,
                    r = rK.find(a => a.value === e.airline),
                    l = e.depart + e.duration,
                    i = Math.floor(l / 1440),
                    s = d === e.id;
                  return <li><article className="relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] text-neutral-900 dark:text-neutral-100 shadow-[0_0_0_1px_rgb(84_62_32/0.07),0_1px_2px_rgb(84_62_32/0.06),0_8px_22px_-10px_rgb(84_62_32/0.20)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_0_0_1px_rgb(0_0_0/0.6),0_10px_24px_-12px_rgb(0_0_0/0.8)]"><div className={rA(s && "bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] dark:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)]", "flex flex-wrap items-center gap-x-5 gap-y-3 p-4")}><span className={rA("relative inline-flex size-8 shrink-0 overflow-hidden rounded-[calc(var(--rb-r-lg,10px))] select-none", "size-[40px]")}><span className="flex size-full items-center justify-center rounded-[inherit] bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_24%,white)] text-[12px]/[16px] font-extrabold tabular-nums text-neutral-900 dark:text-neutral-100 dark:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_22%,var(--color-neutral-900))]">{e.airline}</span></span><div className="min-w-0 grow basis-40"><div className={rA(rM, rD, "flex items-baseline gap-1.5 tabular-nums")}><span>{rQ(e.depart)}</span><span className={rE}>–</span><span>{rQ(l)}</span>{i > 0 && <span className={rA(rP, rE)}>+{i}</span>}</div><p className={rA(rP, rE, "mt-0.5 truncate")}>{r?.label}</p></div><div className="basis-24 text-right sm:text-left"><p className={rA(rL, rD)}>{0 === (a = e.stops) ? "Nonstop" : 1 === a ? "1 stop" : `${a} stops`}</p><p className={rA(rP, rE, "mt-0.5")}>{rY(e.duration)}</p></div><div className="flex items-center gap-4"><div className="text-right"><p className={rA(rM, rD, "tabular-nums")}>{rJ(e.price)}</p><p className={rA(rP, rE, "mt-0.5")}>{e.carryOn ? "Carry-on" : "Fare only"}</p></div><button type="button" aria-pressed={s} onClick={() => _(a => a === e.id ? null : e.id)} className={rA(s ? rT : rW, rH, "min-w-[114px]")}>{s ? <><__mod_22728.n icon={__mod_90987.A} size={18} strokeWidth={2} aria-hidden="true" />Selected</> : <><__mod_22728.n icon={__mod_40296.A} size={18} strokeWidth={2} aria-hidden="true" />Select</>}</button></div></div></article></li>;
                })}</ul>}</div></div></div></div>;
    },
    "filtering-9": function () {
      let [e, a] = (0, React.useState)(th),
        {
          ref: r,
          edges: i,
          onScroll: s
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
                scrollWidth: l,
                clientWidth: n
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
        d = (0, React.useMemo)(() => tp.filter(a => tk(a, e)), [e]),
        _ = e => r.current?.scrollBy({
          left: 260 * e,
          behavior: "smooth"
        }),
        b = +("all" !== e.cuisine) + +(e.rating > 0) + e.prices.length + +("any" !== e.eta) + e.diets.length;
      return <div className={r8("bg-white dark:bg-neutral-950", r4, "flex h-full min-h-[880px] w-full flex-col overflow-y-auto p-6 sm:p-8")}><div className="mx-auto flex w-full max-w-[1100px] flex-1 flex-col"><header className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1"><h2 className={r8(r3, r4)}>Order in tonight</h2><p className={r8("text-[14px]/[20px] font-medium", r9, "flex flex-wrap gap-x-3")}><span role="status"><span className={r8(r4, "tabular-nums")}>{d.length}</span> places deliver to Mission St</span><span className="tabular-nums">94110</span></p></header><div className="mt-5 flex items-center gap-2"><button type="button" aria-label="Scroll cuisines left" disabled={!i.start} onClick={() => _(-1)} className={r8(te, ta, "max-sm:hidden")}><__mod_22728.n icon={__mod_58661.A} size={18} strokeWidth={2} aria-hidden="true" /></button><div className="relative min-w-0 flex-1"><div ref={r} onScroll={s} className="-m-1 flex gap-2 overflow-x-auto p-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">{t_.map(r => {
                  let l,
                    n = e.cuisine === r.value,
                    i = "all" === (l = r.value) ? tp.filter(a => tk(a, e, "cuisine")).length : tp.filter(a => tk(a, e, "cuisine") && a.cuisine === l).length;
                  return <button type="button" aria-pressed={n} onClick={() => a(e => ({
                    ...e,
                    cuisine: r.value
                  }))} className={r8(to, 0 === i && !n && "opacity-40")}>{r.label}<span className="ms-0.5 text-[13px]/[16px] font-bold tabular-nums text-neutral-900/62 dark:text-neutral-100/62">{i}</span></button>;
                })}</div><div aria-hidden="true" className={r8("bg-linear-to-r from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-y-0 left-0 w-8", i.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={r8("bg-linear-to-l from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-y-0 right-0 w-8", i.end ? "opacity-100" : "opacity-0")} /></div><button type="button" aria-label="Scroll cuisines right" disabled={!i.end} onClick={() => _(1)} className={r8(te, ta, "max-sm:hidden")}><__mod_22728.n icon={__mod_5042.A} size={18} strokeWidth={2} aria-hidden="true" /></button></div><div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-3"><div role="radiogroup" aria-label="Minimum rating" onKeyDown={tc} className={r8(tr, tt)}>{tb.map(r => {
                let l = e.rating === r.value;
                return <button type="button" role="radio" aria-checked={l} tabIndex={l ? 0 : -1} onClick={() => a(e => ({
                  ...e,
                  rating: r.value
                }))} className={r8(tl, "tabular-nums")}>{r.label}</button>;
              })}</div><div role="group" aria-label="Price level" className={r8(tr, tt)}>{[1, 2, 3, 4].map(r => {
                let l = e.prices.includes(r),
                  n = tp.filter(a => tk(a, e, "prices") && a.price === r).length;
                return <button type="button" role="checkbox" aria-checked={l} aria-label={`Price ${"$".repeat(r)}, ${n} places`} onClick={() => a(e => ({
                  ...e,
                  prices: e.prices.includes(r) ? e.prices.filter(e => e !== r) : [...e.prices, r]
                }))} className={r8(tl, "min-w-8 tabular-nums", 0 === n && !l && "opacity-40")}>{"$".repeat(r)}</button>;
              })}</div><td value={e.eta} onChange={e => a(a => ({
              ...a,
              eta: e
            }))} options={tx} ariaLabel="Delivery time" className="w-[180px]" /><div className="flex flex-wrap items-center gap-2">{tu.map(r => {
                let l,
                  i = e.diets.includes(r.value),
                  s = (l = r.value, tp.filter(a => tk(a, e, "diets") && [...e.diets, l].every(e => a.diets.includes(e))).length);
                return <button type="button" aria-pressed={i} onClick={() => {
                  let e;
                  return e = r.value, a(a => ({
                    ...a,
                    diets: a.diets.includes(e) ? a.diets.filter(a => a !== e) : [...a.diets, e]
                  }));
                }} className={r8(to, 0 === s && !i && "opacity-40")}>{i && <__mod_22728.n icon={__mod_90987.A} size={16} strokeWidth={2} aria-hidden="true" />}{r.label}</button>;
              })}{b > 0 && <button type="button" onClick={() => a(th)} className={r8("inline-flex h-8 cursor-pointer items-center rounded-[calc(var(--rb-r-full,999px))] px-3 text-[14px]/[18px] font-bold text-neutral-900/78 dark:text-neutral-100/78 transition-[background-color,color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-neutral-900/5 hover:text-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:hover:bg-neutral-100/6 dark:hover:text-neutral-100", "gap-1.5")}><__mod_22728.n icon={__mod_89289.A} size={16} strokeWidth={2} aria-hidden="true" />Clear</button>}</div></div>{0 === d.length ? <div className="mt-5 flex flex-1 flex-col items-center justify-center px-6 py-16 text-center"><p className="text-[19px]/[24px] font-extrabold tracking-[-0.01em] text-neutral-900 dark:text-neutral-100">No places match right now</p><p className={r8("max-w-[48ch] text-[15px]/[22px] font-medium text-neutral-900/78 dark:text-neutral-100/78", "mt-1 max-w-[300px]")}>Try a longer delivery window or clear a filter to see more kitchens nearby.</p><button type="button" onClick={() => a(th)} className={r8("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_68%,white),var(--rb-accent,oklch(84%_0.15_165)))] text-[var(--rb-accent-fg,oklch(26%_0.06_168))] shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_4px_10px_-4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_80%,transparent)] hover:not-disabled:-translate-y-px hover:not-disabled:brightness-[1.04] hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_7px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_85%,transparent)] active:not-disabled:translate-y-px active:not-disabled:brightness-[0.98] active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_55%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] motion-reduce:hover:translate-y-0 disabled:opacity-45 disabled:shadow-none dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_78%,white),var(--rb-accent,oklch(81%_0.16_163)))] dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_6px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,transparent)] dark:hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_9px_22px_-8px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_60%,transparent)] dark:active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_45%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black)] dark:disabled:shadow-none", "h-10 gap-2 rounded-[calc(var(--rb-r-full,999px))] px-5 text-[15px]/[20px] font-bold", "mt-5")}>Clear all filters</button></div> : <ul className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">{d.map(e => {
              let a,
                r = t_.find(a => a.value === e.cuisine);
              return <li><article className={r8("relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] text-neutral-900 dark:text-neutral-100 shadow-[0_0_0_1px_rgb(84_62_32/0.07),0_1px_2px_rgb(84_62_32/0.06),0_8px_22px_-10px_rgb(84_62_32/0.20)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_0_0_1px_rgb(0_0_0/0.6),0_10px_24px_-12px_rgb(0_0_0/0.8)]", "cursor-pointer p-1")}><div className={r8("bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-100/8", "rounded-[var(--rb-r-4xl,18px)]", "relative flex aspect-[3/2] items-center justify-center")}><span className={r8(r3, r9, "tabular-nums")}>{e.name.replace(/[^A-Za-z\s]/g, "").split(/\s+/).filter(Boolean).slice(0, 2).map(e => e[0]?.toUpperCase()).join("")}</span><span className={r8(tn, ti, "absolute top-2 left-2")}><__mod_22728.n icon={__mod_12556.A} size={14} strokeWidth={2} aria-hidden="true" className="[&_path]:fill-current" />{e.rating.toFixed(1)}</span><span className={r8(tn, ti, "absolute right-2 bottom-2")}>{0 === e.fee ? "Free delivery" : `$${e.fee.toFixed(2)}`}</span></div><div className="px-2 pt-2.5 pb-1.5"><p className={r8("text-[15px]/[20px] font-bold", r4, "truncate")}>{e.name}</p><div className={r8(r7, r9, "mt-0.5 flex items-center gap-3")}><span className="truncate">{r?.label}</span><span className="tabular-nums">{(a = e.price, "$".repeat(a))}</span><span className="shrink-0 tabular-nums">{e.etaLow}–{e.etaHigh} min</span></div></div></article></li>;
            })}</ul>}</div></div>;
    }
  },
  tv = {
    "filtering-1": 980,
    "filtering-2": 760,
    "filtering-3": 960,
    "filtering-4": 920,
    "filtering-5": 980,
    "filtering-6": 960,
    "filtering-7": 880,
    "filtering-8": 1e3,
    "filtering-9": 880
  };

export { tm as components };
export { tv as heights };

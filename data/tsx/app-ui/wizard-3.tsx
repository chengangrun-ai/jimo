import * as __mod_22728 from "../_helpers/22728";
import * as __mod_31517 from "../_helpers/31517";
import * as __mod_90987 from "../_helpers/90987";
import * as __mod_86829 from "../_helpers/86829";
import * as __mod_46176 from "../_helpers/46176";
import * as __mod_36972 from "../_helpers/36972";
import * as __mod_90089 from "../_helpers/90089";
import * as __mod_29635 from "../_helpers/29635";
import * as __mod_66575 from "../_helpers/66575";
import * as __mod_57466 from "../_helpers/57466";
import * as __mod_78830 from "../_helpers/78830";
import * as __mod_55299 from "../_helpers/55299";
import * as __mod_89289 from "../_helpers/89289";
import * as __mod_46772 from "../_helpers/46772";
import * as __mod_17601 from "../_helpers/17601";
import * as __mod_4086 from "../_helpers/4086";
import * as __mod_83605 from "../_helpers/83605";
import * as __mod_18976 from "../_helpers/18976";
import * as __mod_66654 from "../_helpers/66654";
import * as __mod_36474 from "../_helpers/36474";
/**
 * Wizard 3
 * slug: wizard-3
 * category: wizard
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let s = (...e) => e.filter(Boolean).join(" "),
  d = "text-neutral-900 dark:text-neutral-100",
  _ = "text-neutral-900/62 dark:text-neutral-100/62",
  b = "h-8 gap-1.5 rounded-[calc(var(--rb-r-full,999px))] px-3.5 text-[14px]/[18px] font-bold",
  x = "relative flex w-full min-w-0 cursor-text items-center rounded-[calc(var(--rb-r-xl,12px))] data-concentric:rounded-[var(--rb-r-5xl,22px)] border border-transparent bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] text-[15px]/[20px] font-medium text-neutral-900 transition-[border-color,box-shadow,background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:not-focus-within:not-has-[[aria-invalid=true]]:not-has-[input:disabled]:not-has-[input[readonly]]:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] focus-within:border-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] focus-within:bg-white focus-within:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] has-[[aria-invalid=true]]:border-[oklch(60%_0.236_26)] has-[[aria-invalid=true]]:bg-[oklch(97.5%_0.016_26)] has-[input:disabled]:cursor-not-allowed has-[input:disabled]:text-neutral-900/40 has-[input:disabled]:shadow-none has-[input[readonly]]:cursor-default has-[input[readonly]]:shadow-none dark:text-neutral-100 dark:hover:not-focus-within:not-has-[[aria-invalid=true]]:not-has-[input:disabled]:not-has-[input[readonly]]:bg-neutral-900 dark:focus-within:border-[var(--rb-accent,oklch(81%_0.16_163))] dark:focus-within:bg-neutral-900 dark:focus-within:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:has-[[aria-invalid=true]]:border-[oklch(65.2%_0.219_26)] dark:has-[[aria-invalid=true]]:bg-[oklch(26%_0.04_26)] dark:has-[input:disabled]:text-neutral-100/40",
  u = "h-10",
  h = "h-full w-full min-w-0 flex-1 bg-transparent px-3.5 outline-none [[data-affix]+&]:ps-2 [&:has(+[data-affix])]:pe-2 placeholder:font-medium placeholder:text-neutral-900/55 disabled:cursor-not-allowed disabled:placeholder:text-neutral-900/30 dark:placeholder:text-neutral-100/55 dark:disabled:placeholder:text-neutral-100/30 dark:[color-scheme:dark]",
  k = "flex shrink-0 items-center gap-2 text-[15px]/[20px] font-semibold text-neutral-900/62 dark:text-neutral-100/62 select-none first:ps-3.5 last:pe-3.5 has-[button]:first:ps-1 has-[button]:last:pe-1",
  p = "flex w-fit items-center gap-2 text-[15px]/[20px] font-bold text-neutral-900 dark:text-neutral-100",
  m = s("text-[14px]/[20px] font-medium", _);
function v({
  id: e,
  value: r,
  onChange: a,
  options: c,
  className: d
}) {
  let _ = (0, React.useId)(),
    [b, x] = (0, React.useState)(!1),
    [u, h] = (0, React.useState)(0),
    [k, p] = (0, React.useState)(!1),
    [m, v] = (0, React.useState)(),
    g = (0, React.useRef)(null),
    f = (0, React.useRef)(null),
    w = (0, React.useRef)({
      buffer: "",
      at: 0
    }),
    j = c.indexOf(r),
    y = e => {
      let r = g.current,
        a = r?.ownerDocument.defaultView;
      if (r && a) {
        let e = r.getBoundingClientRect(),
          t = 0,
          o = a.innerHeight;
        for (let e = r.parentElement; e; e = e.parentElement) if (/auto|scroll|hidden|clip/.test(a.getComputedStyle(e).overflowY)) {
          let r = e.getBoundingClientRect();
          t = Math.max(t, r.top), o = Math.min(o, r.bottom);
          break;
        }
        let n = o - e.bottom,
          l = e.top - t,
          i = Math.min(32 * c.length + 8, 264),
          s = n < i + 8 && l > n,
          d = (s ? l : n) - 8;
        p(s), v(d < i ? Math.max(d, 40) : void 0);
      }
      h(e ?? (j >= 0 ? j : 0)), x(!0);
    };
  (0, React.useEffect)(() => {
    if (!b) return;
    let e = g.current,
      r = e?.ownerDocument;
    if (!r) return;
    let a = r => {
      e.contains(r.target) || x(!1);
    };
    return r.addEventListener("mousedown", a), r.addEventListener("touchstart", a), () => {
      r.removeEventListener("mousedown", a), r.removeEventListener("touchstart", a);
    };
  }, [b]), (0, React.useEffect)(() => {
    if (!b) return;
    let e = f.current,
      r = e?.querySelector(`[data-index="${u}"]`);
    if (!e || !r) return;
    let a = r.offsetTop,
      t = a + r.offsetHeight;
    a < e.scrollTop ? e.scrollTop = a : t > e.scrollTop + e.clientHeight && (e.scrollTop = t - e.clientHeight);
  }, [b, u]);
  let N = e => {
    let r = c[e];
    void 0 !== r && (a(r), x(!1), g.current?.querySelector("button")?.focus({
      preventScroll: !0
    }));
  };
  return <div ref={g} className={s("relative", d)}><button id={e} type="button" role="combobox" aria-expanded={b} aria-controls={_} aria-haspopup="listbox" onClick={() => b ? x(!1) : y()} onKeyDown={e => {
      if (!b) {
        ["Enter", " ", "ArrowDown", "ArrowUp"].includes(e.key) && (e.preventDefault(), y());
        return;
      }
      if ("Escape" === e.key || "Tab" === e.key) {
        "Escape" === e.key && e.stopPropagation(), x(!1);
        return;
      }
      if ("ArrowDown" === e.key) e.preventDefault(), h(e => Math.min(e + 1, c.length - 1));else if ("ArrowUp" === e.key) e.preventDefault(), h(e => Math.max(e - 1, 0));else if ("Home" === e.key) e.preventDefault(), h(0);else if ("End" === e.key) e.preventDefault(), h(c.length - 1);else if ("Enter" === e.key || " " === e.key) e.preventDefault(), N(u);else if (1 === e.key.length && /\S/.test(e.key)) {
        let r = Date.now(),
          a = w.current;
        a.buffer = r - a.at > 700 ? e.key : a.buffer + e.key, a.at = r;
        let t = c.findIndex(e => e.toLowerCase().startsWith(a.buffer.toLowerCase()));
        t >= 0 && h(t);
      }
    }} className={s("inline-flex h-10 w-fit min-w-40 cursor-pointer items-center justify-between gap-2 rounded-[calc(var(--rb-r-xl,12px))] border border-transparent bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] px-3.5 text-left text-[15px]/[20px] font-semibold whitespace-nowrap text-neutral-900 outline-none select-none transition-[border-color,box-shadow,background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:not-disabled:not-aria-invalid:not-aria-expanded:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] focus-visible:border-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] focus-visible:bg-white focus-visible:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-expanded:border-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] aria-expanded:bg-white aria-expanded:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-invalid:border-[oklch(60%_0.236_26)] disabled:cursor-not-allowed disabled:text-neutral-900/40 disabled:shadow-none dark:text-neutral-100 dark:hover:not-disabled:not-aria-invalid:not-aria-expanded:bg-neutral-900 dark:focus-visible:border-[var(--rb-accent,oklch(81%_0.16_163))] dark:focus-visible:bg-neutral-900 dark:focus-visible:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-expanded:border-[var(--rb-accent,oklch(81%_0.16_163))] dark:aria-expanded:bg-neutral-900 dark:aria-expanded:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-invalid:border-[oklch(65.2%_0.219_26)] dark:disabled:text-neutral-100/40", "w-full min-w-[100%]")}><span className="truncate">{r}</span><__mod_22728.n icon={__mod_31517.A} size={18} strokeWidth={2} aria-hidden="true" className="shrink-0 text-neutral-900/78 dark:text-neutral-100/78" /></button>{b && <ul ref={f} id={_} role="listbox" tabIndex={-1} style={{
      maxHeight: m
    }} className={s("min-w-52 max-w-[min(480px,calc(100vw-2rem))] overflow-x-hidden overflow-y-auto overscroll-contain rounded-[calc(var(--rb-r-3xl,16px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] p-2 text-neutral-900 dark:text-neutral-100 outline-none shadow-[0_0_0_1px_rgb(84_62_32/0.08),0_24px_56px_-20px_rgb(84_62_32/0.34),0_6px_16px_-8px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.65),0_24px_56px_-16px_rgb(0_0_0/0.8)]", "absolute z-30 max-h-[264px] w-full min-w-[100%]", k ? "bottom-full mb-1.5" : "top-full mt-1.5")}>{c.map((e, a) => {
        let o = e === r;
        return <li role="option" aria-selected={o} data-index={a} data-highlighted={a === u ? "" : void 0} onMouseEnter={() => h(a)} onClick={() => N(a)} className={s("relative flex min-h-10 w-full cursor-default items-center gap-2.5 rounded-[calc(var(--rb-r-md,8px))] px-3 py-2 text-left text-[15px]/[20px] font-semibold text-neutral-900 outline-none select-none [&_svg]:shrink-0 [&_svg]:text-neutral-900/70 hover:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] focus-visible:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] data-[highlighted]:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-disabled:cursor-not-allowed aria-disabled:text-neutral-900/40 dark:text-neutral-100 dark:[&_svg]:text-neutral-100/70 dark:hover:bg-neutral-100/7 dark:focus-visible:bg-neutral-100/7 dark:data-[highlighted]:bg-neutral-100/7 dark:aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-disabled:text-neutral-100/40", "pe-8")}><span className="truncate">{e}</span>{o && <__mod_22728.n icon={__mod_90987.A} size={18} strokeWidth={2} aria-hidden="true" className="pointer-events-none absolute end-2" />}</li>;
      })}</ul>}</div>;
}
let g = ["Information", "Payment", "Completed"],
  f = ["Procurement owner", "Finance", "Engineering", "Founder"],
  w = ["United States", "Portugal", "Germany", "Japan"];
function j() {
  return <span aria-hidden="true" className={s(_, "ms-0.5")}>*</span>;
}
let W = (...e) => e.filter(Boolean).join(" "),
  M = "text-neutral-900/62 dark:text-neutral-100/62",
  A = "border-b border-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:border-neutral-100/7",
  S = "text-[15px]/[20px] font-bold",
  E = "relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-transparent text-neutral-900 hover:not-disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] active:not-disabled:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] disabled:text-neutral-900/40 dark:text-neutral-100 dark:hover:not-disabled:bg-neutral-100/8 dark:active:not-disabled:bg-neutral-100/12 dark:aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:disabled:text-neutral-100/40",
  V = "h-8 gap-1.5 rounded-[calc(var(--rb-r-full,999px))] px-3.5 text-[14px]/[18px] font-bold",
  R = "relative flex w-full min-w-0 cursor-text items-center rounded-[calc(var(--rb-r-xl,12px))] data-concentric:rounded-[var(--rb-r-5xl,22px)] border border-transparent bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] text-[15px]/[20px] font-medium text-neutral-900 transition-[border-color,box-shadow,background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:not-focus-within:not-has-[[aria-invalid=true]]:not-has-[input:disabled]:not-has-[input[readonly]]:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] focus-within:border-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] focus-within:bg-white focus-within:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] has-[[aria-invalid=true]]:border-[oklch(60%_0.236_26)] has-[[aria-invalid=true]]:bg-[oklch(97.5%_0.016_26)] has-[input:disabled]:cursor-not-allowed has-[input:disabled]:text-neutral-900/40 has-[input:disabled]:shadow-none has-[input[readonly]]:cursor-default has-[input[readonly]]:shadow-none dark:text-neutral-100 dark:hover:not-focus-within:not-has-[[aria-invalid=true]]:not-has-[input:disabled]:not-has-[input[readonly]]:bg-neutral-900 dark:focus-within:border-[var(--rb-accent,oklch(81%_0.16_163))] dark:focus-within:bg-neutral-900 dark:focus-within:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:has-[[aria-invalid=true]]:border-[oklch(65.2%_0.219_26)] dark:has-[[aria-invalid=true]]:bg-[oklch(26%_0.04_26)] dark:has-[input:disabled]:text-neutral-100/40",
  D = "h-10",
  H = "h-full w-full min-w-0 flex-1 bg-transparent px-3.5 outline-none [[data-affix]+&]:ps-2 [&:has(+[data-affix])]:pe-2 placeholder:font-medium placeholder:text-neutral-900/55 disabled:cursor-not-allowed disabled:placeholder:text-neutral-900/30 dark:placeholder:text-neutral-100/55 dark:disabled:placeholder:text-neutral-100/30 dark:[color-scheme:dark]",
  B = "flex shrink-0 items-center gap-2 text-[15px]/[20px] font-semibold text-neutral-900/62 dark:text-neutral-100/62 select-none first:ps-3.5 last:pe-3.5 has-[button]:first:ps-1 has-[button]:last:pe-1",
  P = "flex w-fit items-center gap-2 text-[15px]/[20px] font-bold text-neutral-900 dark:text-neutral-100",
  T = "inline-flex h-5.5 min-w-5.5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden whitespace-nowrap rounded-[calc(var(--rb-r-full,999px))] px-2.5 text-[12px]/[16px] font-bold tabular-nums",
  F = "bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] text-neutral-900 dark:text-neutral-100 dark:bg-neutral-100/12",
  I = W("text-[14px]/[20px] font-medium", M),
  $ = W("text-[13px]/[16px] font-semibold tabular-nums", M);
function q({
  id: e,
  value: r,
  onChange: a,
  options: c,
  className: s
}) {
  let d = (0, React.useId)(),
    [_, b] = (0, React.useState)(!1),
    [x, u] = (0, React.useState)(0),
    [h, k] = (0, React.useState)(!1),
    [p, m] = (0, React.useState)(),
    v = (0, React.useRef)(null),
    g = (0, React.useRef)(null),
    f = (0, React.useRef)({
      buffer: "",
      at: 0
    }),
    w = c.indexOf(r),
    j = e => {
      let r = v.current,
        a = r?.ownerDocument.defaultView;
      if (r && a) {
        let e = r.getBoundingClientRect(),
          t = 0,
          o = a.innerHeight;
        for (let e = r.parentElement; e; e = e.parentElement) if (/auto|scroll|hidden|clip/.test(a.getComputedStyle(e).overflowY)) {
          let r = e.getBoundingClientRect();
          t = Math.max(t, r.top), o = Math.min(o, r.bottom);
          break;
        }
        let n = o - e.bottom,
          l = e.top - t,
          i = Math.min(32 * c.length + 8, 264),
          s = n < i + 8 && l > n,
          d = (s ? l : n) - 8;
        k(s), m(d < i ? Math.max(d, 40) : void 0);
      }
      u(e ?? (w >= 0 ? w : 0)), b(!0);
    };
  (0, React.useEffect)(() => {
    if (!_) return;
    let e = v.current,
      r = e?.ownerDocument;
    if (!r) return;
    let a = r => {
      e.contains(r.target) || b(!1);
    };
    return r.addEventListener("mousedown", a), r.addEventListener("touchstart", a), () => {
      r.removeEventListener("mousedown", a), r.removeEventListener("touchstart", a);
    };
  }, [_]), (0, React.useEffect)(() => {
    if (!_) return;
    let e = g.current,
      r = e?.querySelector(`[data-index="${x}"]`);
    if (!e || !r) return;
    let a = r.offsetTop,
      t = a + r.offsetHeight;
    a < e.scrollTop ? e.scrollTop = a : t > e.scrollTop + e.clientHeight && (e.scrollTop = t - e.clientHeight);
  }, [_, x]);
  let y = e => {
    let r = c[e];
    void 0 !== r && (a(r), b(!1), v.current?.querySelector("button")?.focus({
      preventScroll: !0
    }));
  };
  return <div ref={v} className={W("relative", s)}><button id={e} type="button" role="combobox" aria-expanded={_} aria-controls={d} aria-haspopup="listbox" onClick={() => _ ? b(!1) : j()} onKeyDown={e => {
      if (!_) {
        ["Enter", " ", "ArrowDown", "ArrowUp"].includes(e.key) && (e.preventDefault(), j());
        return;
      }
      if ("Escape" === e.key || "Tab" === e.key) {
        "Escape" === e.key && e.stopPropagation(), b(!1);
        return;
      }
      if ("ArrowDown" === e.key) e.preventDefault(), u(e => Math.min(e + 1, c.length - 1));else if ("ArrowUp" === e.key) e.preventDefault(), u(e => Math.max(e - 1, 0));else if ("Home" === e.key) e.preventDefault(), u(0);else if ("End" === e.key) e.preventDefault(), u(c.length - 1);else if ("Enter" === e.key || " " === e.key) e.preventDefault(), y(x);else if (1 === e.key.length && /\S/.test(e.key)) {
        let r = Date.now(),
          a = f.current;
        a.buffer = r - a.at > 700 ? e.key : a.buffer + e.key, a.at = r;
        let t = c.findIndex(e => e.toLowerCase().startsWith(a.buffer.toLowerCase()));
        t >= 0 && u(t);
      }
    }} className={W("inline-flex h-10 w-fit min-w-40 cursor-pointer items-center justify-between gap-2 rounded-[calc(var(--rb-r-xl,12px))] border border-transparent bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] px-3.5 text-left text-[15px]/[20px] font-semibold whitespace-nowrap text-neutral-900 outline-none select-none transition-[border-color,box-shadow,background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:not-disabled:not-aria-invalid:not-aria-expanded:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] focus-visible:border-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] focus-visible:bg-white focus-visible:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-expanded:border-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] aria-expanded:bg-white aria-expanded:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-invalid:border-[oklch(60%_0.236_26)] disabled:cursor-not-allowed disabled:text-neutral-900/40 disabled:shadow-none dark:text-neutral-100 dark:hover:not-disabled:not-aria-invalid:not-aria-expanded:bg-neutral-900 dark:focus-visible:border-[var(--rb-accent,oklch(81%_0.16_163))] dark:focus-visible:bg-neutral-900 dark:focus-visible:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-expanded:border-[var(--rb-accent,oklch(81%_0.16_163))] dark:aria-expanded:bg-neutral-900 dark:aria-expanded:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-invalid:border-[oklch(65.2%_0.219_26)] dark:disabled:text-neutral-100/40", "w-full min-w-[100%]")}><span className="truncate">{r}</span><__mod_22728.n icon={__mod_31517.A} size={18} strokeWidth={2} aria-hidden="true" className="shrink-0 text-neutral-900/78 dark:text-neutral-100/78" /></button>{_ && <ul ref={g} id={d} role="listbox" tabIndex={-1} style={{
      maxHeight: p
    }} className={W("min-w-52 max-w-[min(480px,calc(100vw-2rem))] overflow-x-hidden overflow-y-auto overscroll-contain rounded-[calc(var(--rb-r-3xl,16px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] p-2 text-neutral-900 dark:text-neutral-100 outline-none shadow-[0_0_0_1px_rgb(84_62_32/0.08),0_24px_56px_-20px_rgb(84_62_32/0.34),0_6px_16px_-8px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.65),0_24px_56px_-16px_rgb(0_0_0/0.8)]", "absolute z-30 max-h-[264px] w-full min-w-[100%]", h ? "bottom-full mb-1.5" : "top-full mt-1.5")}>{c.map((e, a) => {
        let o = e === r;
        return <li role="option" aria-selected={o} data-index={a} data-highlighted={a === x ? "" : void 0} onMouseEnter={() => u(a)} onClick={() => y(a)} className={W("relative flex min-h-10 w-full cursor-default items-center gap-2.5 rounded-[calc(var(--rb-r-md,8px))] px-3 py-2 text-left text-[15px]/[20px] font-semibold text-neutral-900 outline-none select-none [&_svg]:shrink-0 [&_svg]:text-neutral-900/70 hover:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] focus-visible:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] data-[highlighted]:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-disabled:cursor-not-allowed aria-disabled:text-neutral-900/40 dark:text-neutral-100 dark:[&_svg]:text-neutral-100/70 dark:hover:bg-neutral-100/7 dark:focus-visible:bg-neutral-100/7 dark:data-[highlighted]:bg-neutral-100/7 dark:aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-disabled:text-neutral-100/40", "pe-8")}><span className="truncate">{e}</span>{o && <__mod_22728.n icon={__mod_90987.A} size={18} strokeWidth={2} aria-hidden="true" className="pointer-events-none absolute end-2" />}</li>;
      })}</ul>}</div>;
}
let U = ["USD", "EUR", "GBP"],
  Z = ["Net 14", "Net 30", "Due on receipt"],
  O = ["ACH transfer", "Card", "Wire"],
  Y = (...e) => e.filter(Boolean).join(" "),
  G = "text-neutral-900 dark:text-neutral-100",
  K = "text-neutral-900/62 dark:text-neutral-100/62",
  J = "divide-y divide-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:divide-neutral-100/7",
  Q = "text-[14px]/[20px] font-medium",
  X = "text-[15px]/[20px] font-bold",
  ee = "inline-flex h-5.5 min-w-5.5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden whitespace-nowrap rounded-[calc(var(--rb-r-full,999px))] px-2.5 text-[12px]/[16px] font-bold tabular-nums",
  er = "bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] text-neutral-900 dark:text-neutral-100 dark:bg-neutral-100/12",
  ea = "rounded-[var(--rb-r-4xl,18px)]",
  et = Y(Q, K),
  eo = Y("text-[13px]/[16px] font-semibold tabular-nums", K),
  en = ["Plan", "Seats", "Payment", "Review"],
  el = [{
    id: "team",
    name: "Team",
    blurb: "Workspace controls for growing product teams.",
    price: "$49"
  }, {
    id: "business",
    name: "Business",
    blurb: "SAML, audit exports, and priority support.",
    price: "$72",
    recommended: !0
  }, {
    id: "enterprise",
    name: "Enterprise",
    blurb: "Procurement review and account governance.",
    price: "$96"
  }],
  ei = [{
    label: "Seats",
    sub: "42 seats, annual",
    value: "$36,288"
  }, {
    label: "Term credit",
    sub: "15% on annual",
    value: "−$5,443"
  }, {
    label: "Support",
    sub: "Priority response",
    value: "$390"
  }],
  ec = [{
    label: "Renewal",
    value: "May 31, 2026"
  }, {
    label: "Purchase order",
    value: "PO-2026-184"
  }];
let em = (...e) => e.filter(Boolean).join(" "),
  ev = "text-neutral-900 dark:text-neutral-100",
  eg = "text-neutral-900/62 dark:text-neutral-100/62",
  ef = "text-[15px]/[20px] font-bold",
  ew = "transition-[color,background-color,border-color,box-shadow,outline-color,opacity,scale,translate] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms]",
  ej = em("text-[14px]/[20px] font-medium", eg),
  ey = em("text-[13px]/[16px] font-semibold tabular-nums", eg),
  eN = em("hover:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] dark:hover:bg-neutral-100/6", "active:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] dark:active:bg-neutral-100/10", ew),
  eC = em("bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] dark:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)]", ew),
  eL = ["Region", "Services", "Limits", "Review"],
  ez = [{
    id: "postgres",
    icon: __mod_86829.A,
    name: "Managed Postgres",
    blurb: "Primary store with nightly snapshots.",
    boot: 12
  }, {
    id: "cache",
    icon: __mod_46176.A,
    name: "In-memory cache",
    blurb: "Shared key store for sessions.",
    boot: 4
  }, {
    id: "objects",
    icon: __mod_36972.A,
    name: "Object storage",
    blurb: "Buckets for uploads and exports.",
    boot: 6
  }, {
    id: "queue",
    icon: __mod_90089.A,
    name: "Background queue",
    blurb: "Retries and dead-letter handling.",
    boot: 8
  }, {
    id: "cron",
    icon: __mod_29635.A,
    name: "Scheduled jobs",
    blurb: "Cron runners with a shared log.",
    boot: 5
  }, {
    id: "search",
    icon: __mod_66575.A,
    name: "Search index",
    blurb: "Rebuilt from Postgres on write.",
    boot: 14
  }, {
    id: "metrics",
    icon: __mod_57466.A,
    name: "Metrics pipeline",
    blurb: "Request, queue, and job counters.",
    boot: 7
  }, {
    id: "logs",
    icon: __mod_78830.A,
    name: "Log retention",
    blurb: "Thirty days of searchable output.",
    boot: 3
  }];
let eM = (...e) => e.filter(Boolean).join(" "),
  eA = "bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)]",
  eS = "divide-y divide-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:divide-neutral-100/7",
  eE = "text-[14px]/[20px] font-medium",
  eV = "text-[15px]/[20px] font-bold",
  eR = "relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] text-neutral-900 dark:text-neutral-100 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] active:not-disabled:translate-y-px active:not-disabled:shadow-[inset_0_1px_3px_rgb(84_62_32/0.16),0_0_0_1px_rgb(84_62_32/0.10)] dark:active:not-disabled:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14),0_0_0_1px_rgb(84_62_32/0.10)] dark:aria-expanded:bg-neutral-800 dark:aria-expanded:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] disabled:bg-none disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] disabled:text-neutral-900/40 disabled:shadow-none dark:disabled:bg-neutral-800/60 dark:disabled:text-neutral-100/40",
  eD = "h-8 gap-1.5 rounded-[calc(var(--rb-r-full,999px))] px-3.5 text-[14px]/[18px] font-bold",
  eH = "rounded-[var(--rb-r-4xl,18px)]",
  eB = eM(eE, "text-neutral-900/62 dark:text-neutral-100/62"),
  eP = eM(eE, "text-neutral-900/78 dark:text-neutral-100/78"),
  eT = ["Details", "Schedule", "Recipients", "Review"],
  eF = [{
    id: "details",
    title: "Campaign details",
    rows: [{
      label: "Name",
      value: "Spring product update"
    }, {
      label: "Sender",
      value: "Kepler Works <news@kepler.works>"
    }, {
      label: "Reply-to",
      value: "support@kepler.works"
    }]
  }, {
    id: "schedule",
    title: "Schedule",
    rows: [{
      label: "Send at",
      value: "24 April 2026, 09:00"
    }, {
      label: "Timezone",
      value: "Europe/Lisbon"
    }, {
      label: "Throttle",
      value: "5,000 per hour"
    }]
  }, {
    id: "recipients",
    title: "Recipients",
    rows: [{
      label: "Audience",
      value: "Product subscribers"
    }, {
      label: "Size",
      value: "18,204 contacts"
    }, {
      label: "Suppressed",
      value: "412 unsubscribed"
    }]
  }];
let e$ = (...e) => e.filter(Boolean).join(" "),
  eq = "text-neutral-900 dark:text-neutral-100",
  eU = "text-neutral-900/62 dark:text-neutral-100/62",
  eZ = "relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] text-neutral-900 dark:text-neutral-100 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] active:not-disabled:translate-y-px active:not-disabled:shadow-[inset_0_1px_3px_rgb(84_62_32/0.16),0_0_0_1px_rgb(84_62_32/0.10)] dark:active:not-disabled:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14),0_0_0_1px_rgb(84_62_32/0.10)] dark:aria-expanded:bg-neutral-800 dark:aria-expanded:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] disabled:bg-none disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] disabled:text-neutral-900/40 disabled:shadow-none dark:disabled:bg-neutral-800/60 dark:disabled:text-neutral-100/40",
  eO = "h-8 gap-1.5 rounded-[calc(var(--rb-r-full,999px))] px-3.5 text-[14px]/[18px] font-bold",
  eY = e$("text-[14px]/[20px] font-medium", eU),
  eG = e$("text-[13px]/[16px] font-semibold tabular-nums", eU),
  eK = [{
    id: "snapshot",
    title: "Snapshot source database",
    meta: ["4.2 GB", "38s"],
    state: "done"
  }, {
    id: "schema",
    title: "Rebuild schema and indexes",
    meta: ["126 tables", "1m 04s"],
    state: "done"
  }, {
    id: "rows",
    title: "Copy rows",
    meta: ["8.4M of 12.1M rows"],
    state: "running"
  }, {
    id: "attachments",
    title: "Transfer attachments",
    meta: ["Queued", "61,208 files"],
    state: "pending"
  }, {
    id: "search",
    title: "Rebuild search index",
    meta: ["Two entries need review"],
    state: "warning"
  }, {
    id: "cutover",
    title: "Switch traffic to the new cluster",
    meta: ["Waiting for approval"],
    state: "pending"
  }],
  eJ = (...e) => e.filter(Boolean).join(" "),
  eQ = "text-neutral-900/62 dark:text-neutral-100/62",
  eX = eJ("text-[14px]/[20px] font-medium", eQ),
  e0 = eJ("text-[13px]/[16px] font-semibold tabular-nums", eQ),
  e1 = [{
    id: "volume",
    title: "How much do you ship a month?",
    blurb: "This sets your default rate card.",
    options: ["Under 100 parcels", "100 to 1,000", "1,000 to 10,000", "More"]
  }, {
    id: "regions",
    title: "Where do you ship to?",
    blurb: "We enable the right customs forms.",
    options: ["Domestic only", "Europe", "Worldwide", "Not sure yet"]
  }, {
    id: "handoff",
    title: "How do parcels leave your site?",
    blurb: "Pickups can be scheduled automatically.",
    options: ["Courier pickup", "Drop-off point", "Own fleet", "Mixed"]
  }, {
    id: "system",
    title: "What do you use for orders today?",
    blurb: "We can import the last 90 days.",
    options: ["A storefront platform", "A spreadsheet", "Custom system", "Nothing yet"]
  }, {
    id: "priority",
    title: "What matters most right now?",
    blurb: "This orders the dashboard you land on.",
    options: ["Lower cost", "Faster delivery", "Fewer support tickets", "Better tracking"]
  }],
  e2 = {
    "wizard-1": function () {
      let [e, r] = (0, React.useState)(0),
        [a, l] = (0, React.useState)(f[0]),
        [y, N] = (0, React.useState)(w[0]);
      return <div className={s("bg-white dark:bg-neutral-950", d, "relative h-full min-h-[660px] w-full overflow-y-auto p-6 sm:p-8")}><form onSubmit={e => e.preventDefault()} className={s("relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] text-neutral-900 dark:text-neutral-100 shadow-[0_0_0_1px_rgb(84_62_32/0.07),0_1px_2px_rgb(84_62_32/0.06),0_8px_22px_-10px_rgb(84_62_32/0.20)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_0_0_1px_rgb(0_0_0/0.6),0_10px_24px_-12px_rgb(0_0_0/0.8)]", "mx-auto w-full max-w-3xl")}><ol className={s("border-b border-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:border-neutral-100/7", "flex shrink-0 items-center gap-3 px-6 py-4")}>{g.map((a, o) => {
              let l = o < e,
                c = o === e;
              return <li className={s("flex min-w-0 items-center gap-3", o < g.length - 1 && "flex-1")}><button type="button" onClick={() => r(o)} aria-current={c ? "step" : void 0} className={s("focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))]", "transition-[color,background-color,border-color,box-shadow,outline-color,opacity,scale,translate] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms]", "rounded-[var(--rb-r-4xl,18px)]", "flex min-w-0 cursor-pointer items-center gap-2.5 py-0.5")}><span aria-hidden="true" className={s("grid size-7 shrink-0 place-items-center rounded-full border-2 text-[13px]/[16px] font-extrabold tabular-nums", l ? "border-transparent bg-[var(--rb-accent,oklch(84%_0.15_165))] text-[var(--rb-accent-fg,oklch(26%_0.06_168))] shadow-[inset_0_-1.5px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] dark:bg-[var(--rb-accent,oklch(81%_0.16_163))] dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))] dark:shadow-none" : c ? "border-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] text-neutral-900 dark:text-neutral-100 dark:border-[var(--rb-accent,oklch(81%_0.16_163))] dark:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)]" : "border-transparent bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] text-neutral-900/62 dark:text-neutral-100/62 dark:bg-neutral-100/10")}>{l ? <__mod_22728.n icon={__mod_90987.A} size={14} strokeWidth={2} /> : o + 1}</span><span className={s("text-[15px]/[20px] font-bold", l || c ? d : _, "hidden truncate sm:block")}>{a}<span className="sr-only">{l ? ", done" : c ? ", current" : ""}</span></span></button>{o < g.length - 1 && <span aria-hidden="true" className={l ? "h-1 min-w-4 flex-1 rounded-[calc(var(--rb-r-full,999px))] bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_82%,black)] dark:bg-[var(--rb-accent,oklch(81%_0.16_163))]" : "h-1 min-w-4 flex-1 rounded-[calc(var(--rb-r-full,999px))] bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] dark:bg-neutral-100/10"} />}</li>;
            })}</ol><div className="min-h-0 flex-1 px-6 py-5"><h2 className="text-[17px]/[22px] font-extrabold">Your information</h2><p className={s(m, "mt-1")}>Billing owner details. These appear on every receipt.</p><div className="mt-5 grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2"><div className="flex flex-col gap-2"><label htmlFor="wz1-first" className={p}><span>First name<j /></span></label><div className={s(x, u)}><input id="wz1-first" defaultValue="Mara" className={h} /></div></div><div className="flex flex-col gap-2"><label htmlFor="wz1-last" className={p}><span>Last name<j /></span></label><div className={s(x, u)}><input id="wz1-last" defaultValue="Chen" className={h} /></div></div><div className="flex flex-col gap-2"><label htmlFor="wz1-company" className={p}><span>Company<j /></span></label><div className={s(x, u)}><input id="wz1-company" defaultValue="Kepler Works" className={h} /></div></div><div className="flex flex-col gap-2"><label htmlFor="wz1-handle" className={p}>Public handle</label><div className={s(x, u)}><span aria-hidden="true" data-affix={!0} className={k}>@</span><input id="wz1-handle" defaultValue="kepler-works" className={h} /></div></div><div className="flex flex-col gap-2"><label htmlFor="wz1-role" className={p}>Role</label><v id="wz1-role" value={a} onChange={l} options={f} /></div><div className="flex flex-col gap-2"><label htmlFor="wz1-country" className={p}>Country</label><v id="wz1-country" value={y} onChange={N} options={w} /></div><div className="flex flex-col gap-2"><label htmlFor="wz1-email" className={p}><span>Email address<j /></span></label><div className={s(x, u)}><input id="wz1-email" type="email" defaultValue="mara@kepler.works" className={h} /></div></div><div className="flex flex-col gap-2"><label htmlFor="wz1-mobile" className={p}>Mobile</label><div className={s(x, u)}><span aria-hidden="true" data-affix={!0} className={k}>US</span><input id="wz1-mobile" defaultValue="+1 415 5151" className={h} /></div></div></div><p className={s(m, "mt-4")}>Receipts and payment failures go to this address.</p></div><div className={s("border-t border-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:border-neutral-100/7", "flex shrink-0 items-center justify-between gap-3 px-6 py-4")}><button type="button" onClick={() => r(e => Math.max(0, e - 1))} disabled={0 === e} className={s("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] text-neutral-900 dark:text-neutral-100 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] active:not-disabled:translate-y-px active:not-disabled:shadow-[inset_0_1px_3px_rgb(84_62_32/0.16),0_0_0_1px_rgb(84_62_32/0.10)] dark:active:not-disabled:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14),0_0_0_1px_rgb(84_62_32/0.10)] dark:aria-expanded:bg-neutral-800 dark:aria-expanded:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] disabled:bg-none disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] disabled:text-neutral-900/40 disabled:shadow-none dark:disabled:bg-neutral-800/60 dark:disabled:text-neutral-100/40", b)}>Back</button><button type="submit" onClick={() => r(e => Math.min(g.length - 1, e + 1))} className={s("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_68%,white),var(--rb-accent,oklch(84%_0.15_165)))] text-[var(--rb-accent-fg,oklch(26%_0.06_168))] shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_4px_10px_-4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_80%,transparent)] hover:not-disabled:-translate-y-px hover:not-disabled:brightness-[1.04] hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_7px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_85%,transparent)] active:not-disabled:translate-y-px active:not-disabled:brightness-[0.98] active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_55%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] motion-reduce:hover:translate-y-0 disabled:opacity-45 disabled:shadow-none dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_78%,white),var(--rb-accent,oklch(81%_0.16_163)))] dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_6px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,transparent)] dark:hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_9px_22px_-8px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_60%,transparent)] dark:active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_45%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black)] dark:disabled:shadow-none", b)}>Next step<__mod_22728.n icon={__mod_55299.A} size={18} strokeWidth={2} aria-hidden="true" /></button></div></form></div>;
    },
    "wizard-2": function () {
      let {
          ref: e,
          edges: r,
          onScroll: a
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
                end: t + n < o - 1
              });
            }, []);
          return (0, React.useEffect)(() => {
            let r = e.current;
            if (!r) return;
            t();
            let a = r.ownerDocument.defaultView?.ResizeObserver,
              o = a ? new a(t) : null;
            return o?.observe(r), () => o?.disconnect();
          }, [t]), {
            ref: e,
            edges: r,
            onScroll: t
          };
        }(),
        [l, i] = (0, React.useState)(1),
        [s, d] = (0, React.useState)(U[0]),
        [_, b] = (0, React.useState)(Z[0]),
        [x, u] = (0, React.useState)(O[0]);
      return <div className={W("bg-white dark:bg-neutral-950", "text-neutral-900 dark:text-neutral-100", "relative flex h-full min-h-[820px] w-full flex-col overflow-hidden")}><header className={W(A, "flex h-14 shrink-0 items-center gap-3 px-4")}><button type="button" aria-label="Close" className={W(E, "size-10 rounded-[calc(var(--rb-r-full,999px))]")}><__mod_22728.n icon={__mod_89289.A} size={18} strokeWidth={2} aria-hidden="true" /></button><span aria-hidden="true" className={W("border-r border-transparent", "h-5 shrink-0")} /><h1 className={W(S, "truncate")}>Send invoice</h1><div className="hidden min-w-0 flex-1 justify-center sm:flex"><div role="progressbar" aria-valuenow={l} aria-valuemin={1} aria-valuemax={4} aria-label="Invoice progress" className={W("relative block h-2.5 w-full overflow-hidden rounded-[calc(var(--rb-r-full,999px))] bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] shadow-[inset_0_1px_2px_rgb(84_62_32/0.12)] dark:bg-neutral-100/12 dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.5)]", "max-w-[240px]")}><div style={{
                width: `${l / 4 * 100}%`
              }} className="block h-full rounded-[calc(var(--rb-r-full,999px))] bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_82%,black)] shadow-[inset_0_1px_0_rgb(255_255_255/0.35)] transition-[width] duration-[420ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] motion-reduce:transition-none dark:bg-[var(--rb-accent,oklch(81%_0.16_163))]" /></div></div><p className={W($, "ml-auto shrink-0 sm:ml-0")}>{l} / {4}</p></header><div className="relative min-h-0 flex-1"><div ref={e} onScroll={a} className="h-full overflow-y-auto px-4 py-6 sm:px-6"><section className={W("relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] text-neutral-900 dark:text-neutral-100 shadow-[0_0_0_1px_rgb(84_62_32/0.07),0_1px_2px_rgb(84_62_32/0.06),0_8px_22px_-10px_rgb(84_62_32/0.20)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_0_0_1px_rgb(0_0_0/0.6),0_10px_24px_-12px_rgb(0_0_0/0.8)]", "mx-auto w-full max-w-[820px]")}><div className={W(A, "flex items-start justify-between gap-3 px-6 py-4")}><div className="min-w-0"><h2 className="text-[17px]/[22px] font-extrabold">Customer details</h2><p className={W(I, "mt-1")}>Customer, invoice references, and billing terms.</p></div><span className={W(T, F)}>USD</span></div><div className="px-6 py-5"><div className="flex items-center gap-2"><h3 className={S}>Customer</h3><span className={W(T, F)}>Required</span></div><p className={W(I, "mt-1")}>Billable account and invoice reference.</p><div className="mt-4 grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2"><div className="flex flex-col gap-2"><label htmlFor="wz2-customer" className={P}>Customer<__mod_22728.n icon={__mod_46772.A} size={16} strokeWidth={2} aria-hidden="true" className={M} /></label><div className={W(R, D)}><input id="wz2-customer" defaultValue="Orchid Ledger Group" className={H} /><span data-affix={!0} className={B}><button type="button" aria-label="Clear customer" className={W(E, "size-7 rounded-[calc(var(--rb-r-full,999px))]")}><__mod_22728.n icon={__mod_89289.A} size={18} strokeWidth={2} aria-hidden="true" /></button></span></div></div><div className="flex flex-col gap-2"><label htmlFor="wz2-tax" className={P}>Tax ID<__mod_22728.n icon={__mod_46772.A} size={16} strokeWidth={2} aria-hidden="true" className={M} /></label><div className={W(R, D)}><span data-affix={!0} className={B}><__mod_22728.n icon={__mod_17601.A} size={18} strokeWidth={2} aria-hidden="true" /></span><input id="wz2-tax" defaultValue="US-88-2947135" className={H} /></div></div><div className="flex flex-col gap-2"><label htmlFor="wz2-number" className={P}>Invoice number</label><div className={W(R, D)}><span data-affix={!0} className={B}><__mod_22728.n icon={__mod_4086.A} size={18} strokeWidth={2} aria-hidden="true" /></span><input id="wz2-number" defaultValue="INV-2048" className={H} /></div></div><div className="flex flex-col gap-2"><label htmlFor="wz2-po" className={P}>PO reference</label><div className={W(R, D)}><input id="wz2-po" defaultValue="PO-7418" className={H} /></div></div></div><div aria-hidden="true" className={W(A, "my-6")} /><div className="flex items-center gap-2"><h3 className={S}>Terms</h3><span className={W(T, F)}>Net 14</span></div><p className={W(I, "mt-1")}>Dates, currency, and collection method.</p><div className="mt-4 grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2"><div className="flex flex-col gap-2"><label htmlFor="wz2-issue" className={P}>Issue date</label><div className={W(R, D)}><input id="wz2-issue" defaultValue="Apr 24, 2026" className={H} /><span data-affix={!0} className={B}><__mod_22728.n icon={__mod_83605.A} size={18} strokeWidth={2} aria-hidden="true" /></span></div></div><div className="flex flex-col gap-2"><label htmlFor="wz2-due" className={P}>Due date</label><div className={W(R, D)}><input id="wz2-due" defaultValue="May 08, 2026" className={H} /><span data-affix={!0} className={B}><__mod_22728.n icon={__mod_83605.A} size={18} strokeWidth={2} aria-hidden="true" /></span></div></div><div className="flex flex-col gap-2"><label htmlFor="wz2-currency" className={P}>Currency</label><q id="wz2-currency" value={s} onChange={d} options={U} /></div><div className="flex flex-col gap-2"><label htmlFor="wz2-terms" className={P}>Payment terms</label><q id="wz2-terms" value={_} onChange={b} options={Z} /></div><div className="flex flex-col gap-2"><label htmlFor="wz2-collection" className={P}>Collection</label><q id="wz2-collection" value={x} onChange={u} options={O} /></div><div className="flex flex-col gap-2"><label htmlFor="wz2-address" className={P}>Billing address</label><div className={W(R, D)}><input id="wz2-address" defaultValue="14 Warren Street, Suite 620, New York, NY" className={H} /></div></div></div></div></section></div><div aria-hidden="true" className={W("bg-linear-to-b from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 top-0 h-8", r.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={W("bg-linear-to-t from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 bottom-0 h-8", r.end ? "opacity-100" : "opacity-0")} /></div><div className={W("border-t border-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:border-neutral-100/7", "flex shrink-0 items-center justify-end gap-3 px-6 py-4")}><button type="button" className={W("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] text-neutral-900 dark:text-neutral-100 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] active:not-disabled:translate-y-px active:not-disabled:shadow-[inset_0_1px_3px_rgb(84_62_32/0.16),0_0_0_1px_rgb(84_62_32/0.10)] dark:active:not-disabled:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14),0_0_0_1px_rgb(84_62_32/0.10)] dark:aria-expanded:bg-neutral-800 dark:aria-expanded:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] disabled:bg-none disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] disabled:text-neutral-900/40 disabled:shadow-none dark:disabled:bg-neutral-800/60 dark:disabled:text-neutral-100/40", V)}>Save draft</button><button type="button" onClick={() => i(e => 4 === e ? 1 : e + 1)} className={W("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_68%,white),var(--rb-accent,oklch(84%_0.15_165)))] text-[var(--rb-accent-fg,oklch(26%_0.06_168))] shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_4px_10px_-4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_80%,transparent)] hover:not-disabled:-translate-y-px hover:not-disabled:brightness-[1.04] hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_7px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_85%,transparent)] active:not-disabled:translate-y-px active:not-disabled:brightness-[0.98] active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_55%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] motion-reduce:hover:translate-y-0 disabled:opacity-45 disabled:shadow-none dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_78%,white),var(--rb-accent,oklch(81%_0.16_163)))] dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_6px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,transparent)] dark:hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_9px_22px_-8px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_60%,transparent)] dark:active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_45%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black)] dark:disabled:shadow-none", V)}>Next step<__mod_22728.n icon={__mod_55299.A} size={18} strokeWidth={2} aria-hidden="true" /></button></div></div>;
    },
    "wizard-3": function () {
      let [e, r] = (0, React.useState)(0),
        [a, l] = (0, React.useState)("business");
      return <div className={Y("bg-white dark:bg-neutral-950", G, "relative h-full min-h-[720px] w-full overflow-y-auto p-6 sm:p-8")}><section className={Y("relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] text-neutral-900 dark:text-neutral-100 shadow-[0_0_0_1px_rgb(84_62_32/0.07),0_1px_2px_rgb(84_62_32/0.06),0_8px_22px_-10px_rgb(84_62_32/0.20)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_0_0_1px_rgb(0_0_0/0.6),0_10px_24px_-12px_rgb(0_0_0/0.8)]", "mx-auto w-full max-w-5xl")}><header className={Y("border-b border-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:border-neutral-100/7", "shrink-0 px-6 pb-4 pt-5")}><div className="flex items-baseline justify-between gap-3"><div className="min-w-0"><h2 className="text-[17px]/[22px] font-extrabold">Billing upgrade</h2><p className={Y(et, "mt-1")}>Change plan, seats, and payment terms before renewal.</p></div><span className={Y("inline-flex items-start gap-1.5 text-[15px]/[20px] font-bold tabular-nums", "text-neutral-900/62 dark:text-neutral-100/62")}>Draft</span></div><ol className="mt-4 flex items-center gap-3">{en.map((a, o) => {
                let l = o < e,
                  c = o === e;
                return <li className={Y("flex min-w-0 items-center gap-3", o < en.length - 1 && "flex-1")}><button type="button" onClick={() => r(o)} aria-current={c ? "step" : void 0} className={Y("focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))]", "transition-[color,background-color,border-color,box-shadow,outline-color,opacity,scale,translate] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms]", ea, "flex min-w-0 cursor-pointer items-center gap-2")}><span aria-hidden="true" className={Y("grid size-7 shrink-0 place-items-center rounded-full border-2 text-[13px]/[16px] font-extrabold tabular-nums", l ? "border-transparent bg-[var(--rb-accent,oklch(84%_0.15_165))] text-[var(--rb-accent-fg,oklch(26%_0.06_168))] shadow-[inset_0_-1.5px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] dark:bg-[var(--rb-accent,oklch(81%_0.16_163))] dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))] dark:shadow-none" : c ? "border-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] text-neutral-900 dark:text-neutral-100 dark:border-[var(--rb-accent,oklch(81%_0.16_163))] dark:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)]" : "border-transparent bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] text-neutral-900/62 dark:text-neutral-100/62 dark:bg-neutral-100/10")}>{l ? <__mod_22728.n icon={__mod_90987.A} size={14} strokeWidth={2} /> : o + 1}</span><span className={Y(X, l || c ? G : K, "hidden truncate sm:block")}>{a}<span className="sr-only">{l ? ", done" : c ? ", current" : ""}</span></span></button>{o < en.length - 1 && <span aria-hidden="true" className={l ? "h-1 min-w-4 flex-1 rounded-[calc(var(--rb-r-full,999px))] bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_82%,black)] dark:bg-[var(--rb-accent,oklch(81%_0.16_163))]" : "h-1 min-w-4 flex-1 rounded-[calc(var(--rb-r-full,999px))] bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] dark:bg-neutral-100/10"} />}</li>;
              })}</ol></header><div className="grid min-h-0 flex-1 grid-cols-1 gap-5 px-6 py-5 lg:grid-cols-5"><div role="radiogroup" aria-label="Plan" className="min-w-0 lg:col-span-3"><h3 className={eo}>Plan</h3><div className={Y(J, "mt-3")}>{el.map(e => {
                  let r = e.id === a;
                  return <div className="py-1"><label className={Y("relative flex min-h-12 w-full min-w-0 flex-wrap items-center gap-x-3 gap-y-1 py-2.5 text-left text-neutral-900 dark:text-neutral-100 transition-[background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] has-[[data-description]]:min-h-16", r ? "bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] dark:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)]" : "cursor-pointer hover:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] dark:hover:bg-neutral-100/6 active:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] dark:active:bg-neutral-100/10", ea, "px-4 py-3")}><input type="radio" name="wz3-plan" value={e.id} checked={r} onChange={() => l(e.id)} className="size-[18px] shrink-0 cursor-pointer appearance-none rounded-full border-2 border-neutral-900/28 bg-white transition-[background-color,border-color,border-width,box-shadow,outline-color,scale] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:scale-[0.86] motion-reduce:active:scale-100 hover:not-checked:not-disabled:border-neutral-900/60 active:not-checked:bg-neutral-900/8 checked:border-[6px] checked:border-[var(--rb-accent,oklch(84%_0.15_165))] checked:bg-white checked:shadow-[0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] aria-invalid:border-[oklch(60%_0.236_26)] disabled:cursor-not-allowed disabled:border-neutral-900/20 disabled:checked:border-neutral-900/25 disabled:checked:shadow-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:border-neutral-100/34 dark:bg-neutral-900 dark:hover:not-checked:not-disabled:border-neutral-100/70 dark:active:not-checked:bg-neutral-100/10 dark:checked:border-[var(--rb-accent,oklch(81%_0.16_163))] dark:checked:bg-neutral-900 dark:checked:shadow-none dark:aria-invalid:border-[oklch(65.2%_0.219_26)] dark:disabled:border-neutral-100/24 dark:disabled:checked:border-neutral-100/28" /><span className="min-w-0 flex-1"><span className="flex flex-wrap items-center gap-x-2 gap-y-1"><span className={Y(X, "truncate")}>{e.name}</span>{e.recommended && <span className={Y(ee, er)}>Recommended</span>}</span><span className={Y(et, "mt-0.5 block")}>{e.blurb}</span></span><span className={Y(X, "shrink-0 tabular-nums")}>{e.price}<span className={et}>/seat/mo</span></span></label></div>;
                })}</div><p className={Y(et, "mt-3")}>Seat count carries over from the current term. You can adjust it on the next step before anything is charged.</p></div><aside className="min-w-0 lg:col-span-2"><div className="flex items-center justify-between gap-2"><h3 className={eo}>Invoice preview</h3><span className={Y(ee, er)}>Annual</span></div><div className={Y("bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)]", ea, J, "mt-3")}><div className="px-4 py-3.5"><p className={Y(eo, "truncate")}>Due today</p><p className={Y("text-[22px]/[28px] font-extrabold tracking-[-0.01em]", "mt-1 tabular-nums")}>$31,235</p><p className={Y(eo, "mt-1 flex flex-wrap gap-x-3")}><span>Business</span><span>42 seats</span><span>Billed once</span></p></div><dl className={Y(J, "px-4 py-1")}>{ei.map(e => <div className="flex items-center justify-between gap-3 py-2.5"><div className="min-w-0"><dt className={Y(Q, "truncate")}>{e.label}</dt><p className={Y(eo, "mt-0.5 truncate")}>{e.sub}</p></div><dd className={Y(Q, "shrink-0 tabular-nums")}>{e.value}</dd></div>)}</dl><dl className="space-y-2 px-4 py-3">{ec.map(e => <div className="flex items-center justify-between gap-3"><dt className={Y(et, "truncate")}>{e.label}</dt><dd className={Y(Q, "shrink-0 tabular-nums")}>{e.value}</dd></div>)}</dl></div></aside></div><div className={Y("border-t border-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:border-neutral-100/7", "flex shrink-0 items-center justify-between gap-3 px-6 py-4")}><p className={Y(et, "truncate")}>Nothing is charged until the review step.</p><button type="button" onClick={() => r(e => Math.min(en.length - 1, e + 1))} className={Y("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_68%,white),var(--rb-accent,oklch(84%_0.15_165)))] text-[var(--rb-accent-fg,oklch(26%_0.06_168))] shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_4px_10px_-4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_80%,transparent)] hover:not-disabled:-translate-y-px hover:not-disabled:brightness-[1.04] hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_7px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_85%,transparent)] active:not-disabled:translate-y-px active:not-disabled:brightness-[0.98] active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_55%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] motion-reduce:hover:translate-y-0 disabled:opacity-45 disabled:shadow-none dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_78%,white),var(--rb-accent,oklch(81%_0.16_163)))] dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_6px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,transparent)] dark:hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_9px_22px_-8px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_60%,transparent)] dark:active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_45%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black)] dark:disabled:shadow-none", "h-8 gap-1.5 rounded-[calc(var(--rb-r-full,999px))] px-3.5 text-[14px]/[18px] font-bold")}>Next<__mod_22728.n icon={__mod_55299.A} size={18} strokeWidth={2} aria-hidden="true" /></button></div></section></div>;
    },
    "wizard-4": function () {
      let {
          ref: e,
          edges: r,
          onScroll: a
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
                end: t + n < o - 1
              });
            }, []);
          return (0, React.useEffect)(() => {
            let r = e.current;
            if (!r) return;
            t();
            let a = r.ownerDocument.defaultView?.ResizeObserver,
              o = a ? new a(t) : null;
            return o?.observe(r), () => o?.disconnect();
          }, [t]), {
            ref: e,
            edges: r,
            onScroll: t
          };
        }(),
        [l, c] = (0, React.useState)(["postgres", "cache", "queue"]),
        s = ez.filter(e => l.includes(e.id)).reduce((e, r) => e + r.boot, 0);
      return <div className={em("bg-white dark:bg-neutral-950", ev, "relative flex h-full min-h-[660px] w-full flex-col overflow-hidden")}><header className={em("border-b border-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:border-neutral-100/7", "shrink-0")}><div className="flex h-14 items-center gap-3 px-4 sm:px-6"><button type="button" aria-label="Back to region" className={em("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-transparent text-neutral-900 hover:not-disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] active:not-disabled:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] disabled:text-neutral-900/40 dark:text-neutral-100 dark:hover:not-disabled:bg-neutral-100/8 dark:active:not-disabled:bg-neutral-100/12 dark:aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:disabled:text-neutral-100/40", "size-10 rounded-[calc(var(--rb-r-full,999px))]")}><__mod_22728.n icon={__mod_18976.A} size={18} strokeWidth={2} aria-hidden="true" /></button><div className="min-w-0 flex-1"><h1 className={em(ef, "truncate")}>New environment</h1><p className={em(ey, "flex gap-x-3 truncate")}><span>staging</span><span>eu-west</span></p></div><button type="button" className={em("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] text-neutral-900 dark:text-neutral-100 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] active:not-disabled:translate-y-px active:not-disabled:shadow-[inset_0_1px_3px_rgb(84_62_32/0.16),0_0_0_1px_rgb(84_62_32/0.10)] dark:active:not-disabled:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14),0_0_0_1px_rgb(84_62_32/0.10)] dark:aria-expanded:bg-neutral-800 dark:aria-expanded:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] disabled:bg-none disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] disabled:text-neutral-900/40 disabled:shadow-none dark:disabled:bg-neutral-800/60 dark:disabled:text-neutral-100/40", "h-10 gap-2 rounded-[calc(var(--rb-r-full,999px))] px-5 text-[15px]/[20px] font-bold")}>Save and exit</button></div><ol className="mx-auto flex w-full max-w-[560px] items-center gap-3 px-4 pb-3 sm:px-6">{eL.map((e, r) => {
              let a = r < 1,
                o = 1 === r;
              return <li className={em("flex min-w-0 items-center gap-3", r < eL.length - 1 && "flex-1")}><span aria-current={o ? "step" : void 0} className="flex min-w-0 items-center gap-2"><span aria-hidden="true" className={em("grid size-7 shrink-0 place-items-center rounded-full border-2 text-[13px]/[16px] font-extrabold tabular-nums", a ? "border-transparent bg-[var(--rb-accent,oklch(84%_0.15_165))] text-[var(--rb-accent-fg,oklch(26%_0.06_168))] shadow-[inset_0_-1.5px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] dark:bg-[var(--rb-accent,oklch(81%_0.16_163))] dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))] dark:shadow-none" : o ? "border-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] text-neutral-900 dark:text-neutral-100 dark:border-[var(--rb-accent,oklch(81%_0.16_163))] dark:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)]" : "border-transparent bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] text-neutral-900/62 dark:text-neutral-100/62 dark:bg-neutral-100/10")}>{a ? <__mod_22728.n icon={__mod_90987.A} size={14} strokeWidth={2} /> : r + 1}</span><span className={em(ef, o || a ? ev : eg, "hidden truncate sm:block")}>{e}<span className="sr-only">{a ? ", done" : o ? ", current" : ""}</span></span></span>{r < eL.length - 1 && <span aria-hidden="true" className={a ? "h-1 min-w-4 flex-1 rounded-[calc(var(--rb-r-full,999px))] bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_82%,black)] dark:bg-[var(--rb-accent,oklch(81%_0.16_163))]" : "h-1 min-w-4 flex-1 rounded-[calc(var(--rb-r-full,999px))] bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] dark:bg-neutral-100/10"} />}</li>;
            })}</ol></header><div className="relative min-h-0 flex-1"><div ref={e} onScroll={a} className="h-full overflow-y-auto px-4 py-6 sm:px-6"><div className="mx-auto w-full max-w-[880px]"><h2 className="text-[17px]/[22px] font-extrabold">Pick the services this environment runs</h2><p className={em(ej, "mt-1")}>Anything left out can be attached later without a rebuild.</p><div role="group" aria-label="Available services" className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{ez.map(e => {
                  let r = l.includes(e.id);
                  return <label className={em("relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] text-neutral-900 dark:text-neutral-100 shadow-[0_0_0_1px_rgb(84_62_32/0.07),0_1px_2px_rgb(84_62_32/0.06),0_8px_22px_-10px_rgb(84_62_32/0.20)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_0_0_1px_rgb(0_0_0/0.6),0_10px_24px_-12px_rgb(0_0_0/0.8)]", "cursor-pointer")}><span className={em(r ? eC : eN, "flex flex-1 flex-col p-4")}><span className="flex items-center justify-between gap-3"><span aria-hidden="true" className={em("text-neutral-900/78 dark:text-neutral-100/78", "flex")}><__mod_22728.n icon={e.icon} size={18} strokeWidth={2} /></span><span className="relative inline-flex size-[18px] shrink-0 items-center justify-center"><input type="checkbox" checked={r} onChange={() => {
                            let r;
                            return r = e.id, c(e => e.includes(r) ? e.filter(e => e !== r) : [...e, r]);
                          }} className="peer size-[18px] shrink-0 cursor-pointer appearance-none rounded-[calc(var(--rb-r-sm,6px))] border-2 border-neutral-900/28 bg-white transition-[background-color,border-color,box-shadow,outline-color,scale] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:scale-[0.86] motion-reduce:active:scale-100 hover:not-checked:not-disabled:border-neutral-900/60 active:not-checked:bg-neutral-900/8 checked:border-transparent checked:bg-[var(--rb-accent,oklch(84%_0.15_165))] indeterminate:border-transparent indeterminate:bg-[var(--rb-accent,oklch(84%_0.15_165))] checked:shadow-[inset_0_1px_0_rgb(255_255_255/0.4),inset_0_-1.5px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] indeterminate:shadow-[inset_0_1px_0_rgb(255_255_255/0.4),inset_0_-1.5px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] aria-invalid:border-[oklch(60%_0.236_26)] disabled:cursor-not-allowed disabled:border-neutral-900/20 disabled:checked:bg-neutral-900/25 disabled:checked:shadow-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:border-neutral-100/34 dark:bg-neutral-900 dark:hover:not-checked:not-disabled:border-neutral-100/70 dark:active:not-checked:bg-neutral-100/10 dark:checked:bg-[var(--rb-accent,oklch(81%_0.16_163))] dark:indeterminate:bg-[var(--rb-accent,oklch(81%_0.16_163))] dark:checked:shadow-none dark:indeterminate:shadow-none dark:aria-invalid:border-[oklch(65.2%_0.219_26)] dark:disabled:border-neutral-100/24 dark:disabled:checked:bg-neutral-100/28" /><__mod_22728.n icon={__mod_90987.A} size={14} strokeWidth={2.5} aria-hidden="true" className="pointer-events-none absolute scale-50 text-[var(--rb-accent-fg,oklch(26%_0.06_168))] opacity-0 transition-[opacity,scale] duration-[260ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] peer-checked:scale-100 peer-checked:opacity-100 peer-indeterminate:scale-100 peer-indeterminate:opacity-100 peer-active:scale-[0.86] motion-reduce:transition-none dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))]" /></span></span><span className={em(ef, "mt-3 truncate")}>{e.name}</span><span className={em(ej, "mt-0.5")}>{e.blurb}</span></span></label>;
                })}</div><p className={em(ej, "mt-4")}>Every selected service is provisioned inside the same private network. Nothing is exposed publicly until you add a route.</p></div></div><div aria-hidden="true" className={em("bg-linear-to-b from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 top-0 h-8", r.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={em("bg-linear-to-t from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 bottom-0 h-8", r.end ? "opacity-100" : "opacity-0")} /></div><div className={em("border-t border-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:border-neutral-100/7", "flex shrink-0 items-center justify-between gap-3 px-4 py-4 sm:px-6")}><div className="min-w-0"><p className={em(ef, "truncate tabular-nums")}>{l.length} of {ez.length} selected</p><p className={em(ej, "truncate tabular-nums")}>{0 === l.length ? "Pick at least one service to continue" : `Adds about ${s}s to each deploy`}</p></div><button type="button" disabled={0 === l.length} className={em("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_68%,white),var(--rb-accent,oklch(84%_0.15_165)))] text-[var(--rb-accent-fg,oklch(26%_0.06_168))] shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_4px_10px_-4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_80%,transparent)] hover:not-disabled:-translate-y-px hover:not-disabled:brightness-[1.04] hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_7px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_85%,transparent)] active:not-disabled:translate-y-px active:not-disabled:brightness-[0.98] active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_55%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] motion-reduce:hover:translate-y-0 disabled:opacity-45 disabled:shadow-none dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_78%,white),var(--rb-accent,oklch(81%_0.16_163)))] dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_6px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,transparent)] dark:hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_9px_22px_-8px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_60%,transparent)] dark:active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_45%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black)] dark:disabled:shadow-none", "h-8 gap-1.5 rounded-[calc(var(--rb-r-full,999px))] px-3.5 text-[14px]/[18px] font-bold")}>Set limits</button></div></div>;
    },
    "wizard-5": function () {
      let [e, r] = (0, React.useState)(!1);
      return <div className={eM("bg-white dark:bg-neutral-950", "text-neutral-900 dark:text-neutral-100", "relative h-full min-h-[800px] w-full overflow-y-auto p-6 sm:p-8")}><section className={eM("relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] text-neutral-900 dark:text-neutral-100 shadow-[0_0_0_1px_rgb(84_62_32/0.07),0_1px_2px_rgb(84_62_32/0.06),0_8px_22px_-10px_rgb(84_62_32/0.20)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_0_0_1px_rgb(0_0_0/0.6),0_10px_24px_-12px_rgb(0_0_0/0.8)]", "mx-auto w-full max-w-2xl")}><ol className={eM("border-b border-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:border-neutral-100/7", "flex shrink-0 items-center gap-3 px-6 py-4")}>{eT.map((e, r) => {
              let a = r < eT.length - 1,
                o = r === eT.length - 1;
              return <li className={eM("flex min-w-0 items-center gap-3", r < eT.length - 1 && "flex-1")}><span aria-current={o ? "step" : void 0} className="flex min-w-0 items-center gap-2.5"><span aria-hidden="true" className={eM("grid size-7 shrink-0 place-items-center rounded-full border-2 text-[13px]/[16px] font-extrabold tabular-nums", a ? "border-transparent bg-[var(--rb-accent,oklch(84%_0.15_165))] text-[var(--rb-accent-fg,oklch(26%_0.06_168))] shadow-[inset_0_-1.5px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] dark:bg-[var(--rb-accent,oklch(81%_0.16_163))] dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))] dark:shadow-none" : "border-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] text-neutral-900 dark:text-neutral-100 dark:border-[var(--rb-accent,oklch(81%_0.16_163))] dark:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)]")}>{a ? <__mod_22728.n icon={__mod_90987.A} size={14} strokeWidth={2} /> : r + 1}</span><span className={eM(eV, "hidden truncate sm:block")}>{e}<span className="sr-only">{a ? ", done" : ", current"}</span></span></span>{r < eT.length - 1 && <span aria-hidden="true" className="h-1 min-w-4 flex-1 rounded-[calc(var(--rb-r-full,999px))] bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_82%,black)] dark:bg-[var(--rb-accent,oklch(81%_0.16_163))]" />}</li>;
            })}</ol><div className="min-h-0 flex-1 px-6 py-5"><h2 className="text-[17px]/[22px] font-extrabold">Review before sending</h2><p className={eM(eB, "mt-1")}>Nothing sends until you confirm. Each section can still be changed.</p><div className="mt-5 space-y-3">{eF.map(e => <div className={eM(eA, eH, eS)}><div className="flex items-center justify-between gap-3 px-4 py-2.5"><h3 className={eM(eV, "truncate")}>{e.title}</h3><button type="button" className={eM(eR, eD)}><__mod_22728.n icon={__mod_66654.A} size={18} strokeWidth={2} aria-hidden="true" />Edit<span className="sr-only"> {e.title}</span></button></div><dl className={eM(eS, "px-4 py-1")}>{e.rows.map(e => <div className="flex items-baseline justify-between gap-4 py-2.5"><dt className={eM(eB, "shrink-0")}>{e.label}</dt><dd className={eM(eE, "min-w-0 text-right [overflow-wrap:anywhere]")}>{e.value}</dd></div>)}</dl></div>)}</div><label className={eM(eA, eH, "mt-5 flex cursor-pointer items-start gap-3 p-4")}><span className={eM("relative inline-flex size-[18px] shrink-0 items-center justify-center", "mt-px")}><input type="checkbox" checked={e} onChange={e => r(e.target.checked)} className="peer size-[18px] shrink-0 cursor-pointer appearance-none rounded-[calc(var(--rb-r-sm,6px))] border-2 border-neutral-900/28 bg-white transition-[background-color,border-color,box-shadow,outline-color,scale] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:scale-[0.86] motion-reduce:active:scale-100 hover:not-checked:not-disabled:border-neutral-900/60 active:not-checked:bg-neutral-900/8 checked:border-transparent checked:bg-[var(--rb-accent,oklch(84%_0.15_165))] indeterminate:border-transparent indeterminate:bg-[var(--rb-accent,oklch(84%_0.15_165))] checked:shadow-[inset_0_1px_0_rgb(255_255_255/0.4),inset_0_-1.5px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] indeterminate:shadow-[inset_0_1px_0_rgb(255_255_255/0.4),inset_0_-1.5px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] aria-invalid:border-[oklch(60%_0.236_26)] disabled:cursor-not-allowed disabled:border-neutral-900/20 disabled:checked:bg-neutral-900/25 disabled:checked:shadow-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:border-neutral-100/34 dark:bg-neutral-900 dark:hover:not-checked:not-disabled:border-neutral-100/70 dark:active:not-checked:bg-neutral-100/10 dark:checked:bg-[var(--rb-accent,oklch(81%_0.16_163))] dark:indeterminate:bg-[var(--rb-accent,oklch(81%_0.16_163))] dark:checked:shadow-none dark:indeterminate:shadow-none dark:aria-invalid:border-[oklch(65.2%_0.219_26)] dark:disabled:border-neutral-100/24 dark:disabled:checked:bg-neutral-100/28" /><__mod_22728.n icon={__mod_90987.A} size={14} strokeWidth={2.5} aria-hidden="true" className="pointer-events-none absolute scale-50 text-[var(--rb-accent-fg,oklch(26%_0.06_168))] opacity-0 transition-[opacity,scale] duration-[260ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] peer-checked:scale-100 peer-checked:opacity-100 peer-indeterminate:scale-100 peer-indeterminate:opacity-100 peer-active:scale-[0.86] motion-reduce:transition-none dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))]" /></span><span className={eM(eP, "min-w-0")}>I have checked the audience and schedule. Sending to 18,204 contacts cannot be undone once delivery starts.</span></label></div><div className={eM("border-t border-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:border-neutral-100/7", "flex shrink-0 items-center justify-between gap-3 px-6 py-4")}><button type="button" className={eM(eR, eD)}>Back</button><button type="button" disabled={!e} className={eM("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_68%,white),var(--rb-accent,oklch(84%_0.15_165)))] text-[var(--rb-accent-fg,oklch(26%_0.06_168))] shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_4px_10px_-4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_80%,transparent)] hover:not-disabled:-translate-y-px hover:not-disabled:brightness-[1.04] hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_7px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_85%,transparent)] active:not-disabled:translate-y-px active:not-disabled:brightness-[0.98] active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_55%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] motion-reduce:hover:translate-y-0 disabled:opacity-45 disabled:shadow-none dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_78%,white),var(--rb-accent,oklch(81%_0.16_163)))] dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_6px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,transparent)] dark:hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_9px_22px_-8px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_60%,transparent)] dark:active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_45%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black)] dark:disabled:shadow-none", eD)}>Schedule send</button></div></section></div>;
    },
    "wizard-6": function () {
      let [e, r] = (0, React.useState)(64);
      return (0, React.useEffect)(() => {
        let e = setInterval(() => {
          r(e => e >= 92 ? 64 : e + 2);
        }, 1400);
        return () => clearInterval(e);
      }, []), <div className={e$("bg-white dark:bg-neutral-950", eq, "relative h-full min-h-[720px] w-full overflow-y-auto p-6 sm:p-8")}><section className={e$("relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] text-neutral-900 dark:text-neutral-100 shadow-[0_0_0_1px_rgb(84_62_32/0.07),0_1px_2px_rgb(84_62_32/0.06),0_8px_22px_-10px_rgb(84_62_32/0.20)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_0_0_1px_rgb(0_0_0/0.6),0_10px_24px_-12px_rgb(0_0_0/0.8)]", "mx-auto w-full max-w-2xl")}><div className={e$("border-b border-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:border-neutral-100/7", "flex shrink-0 items-baseline justify-between gap-3 px-6 py-4")}><div className="min-w-0"><h2 className="text-[17px]/[22px] font-extrabold">Migrating workspace</h2><p className={e$(eY, "mt-1")}>Step 3 of 4. You can leave this running and come back.</p></div><p className={e$(eG, "shrink-0")}>~6 min left</p></div><div className="min-h-0 flex-1 px-6 py-5"><div className="flex items-center gap-3"><div role="progressbar" aria-valuenow={e} aria-valuemin={0} aria-valuemax={100} aria-label="Migration progress" className={e$("relative block h-2.5 w-full overflow-hidden rounded-[calc(var(--rb-r-full,999px))] bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] shadow-[inset_0_1px_2px_rgb(84_62_32/0.12)] dark:bg-neutral-100/12 dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.5)]", "min-w-0 flex-1")}><div style={{
                  width: `${e}%`
                }} className="block h-full rounded-[calc(var(--rb-r-full,999px))] bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_82%,black)] shadow-[inset_0_1px_0_rgb(255_255_255/0.35)] transition-[width] duration-[420ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] motion-reduce:transition-none dark:bg-[var(--rb-accent,oklch(81%_0.16_163))]" /></div><p className={e$(eG, "shrink-0")}>{e}%</p></div><ul className={e$("divide-y divide-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:divide-neutral-100/7", "mt-5")}>{eK.map(e => <li className="flex items-center gap-3 py-3"><span aria-hidden="true" className={e$("grid size-7 shrink-0 place-items-center rounded-full border-2 text-[13px]/[16px] font-extrabold tabular-nums", "done" === e.state ? "border-transparent bg-[var(--rb-accent,oklch(84%_0.15_165))] text-[var(--rb-accent-fg,oklch(26%_0.06_168))] shadow-[inset_0_-1.5px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] dark:bg-[var(--rb-accent,oklch(81%_0.16_163))] dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))] dark:shadow-none" : "running" === e.state ? "border-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] text-neutral-900 dark:text-neutral-100 dark:border-[var(--rb-accent,oklch(81%_0.16_163))] dark:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)]" : "border-transparent bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] text-neutral-900/62 dark:text-neutral-100/62 dark:bg-neutral-100/10")}>{"done" === e.state && <__mod_22728.n icon={__mod_90987.A} size={14} strokeWidth={2} />}{"running" === e.state && <span className="inline-block size-3 shrink-0 rounded-full border-2 border-current border-t-transparent animate-spin [animation-duration:700ms] motion-reduce:animate-none" />}{"warning" === e.state && <__mod_22728.n icon={__mod_36474.A} size={14} strokeWidth={2} className="text-[oklch(49%_0.1_68)] dark:text-[oklch(80%_0.13_68)]" />}</span><div className="min-w-0 flex-1"><p className={e$("text-[15px]/[20px] font-bold", "pending" === e.state ? eU : eq, "truncate")}>{e.title}</p><p className={e$(eG, "mt-0.5 flex gap-x-3 truncate")}>{e.meta.map(e => <span>{e}</span>)}</p></div>{"warning" === e.state && <button type="button" className={e$(eZ, eO)}>Review</button>}</li>)}</ul><p className={e$(eY, "mt-4")}>The source workspace stays read-only until cutover. Nothing is deleted, so a failed step can be retried without starting over.</p></div><div className={e$("border-t border-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:border-neutral-100/7", "flex shrink-0 items-center justify-between gap-3 px-6 py-4")}><button type="button" className={e$(eZ, eO)}>Cancel migration</button><button type="button" className={e$(eZ, eO)}>Run in background</button></div></section></div>;
    },
    "wizard-7": function () {
      let [e, r] = (0, React.useState)(1),
        [a, l] = (0, React.useState)({
          volume: "100 to 1,000",
          regions: "Europe"
        }),
        s = e1[e],
        d = e === e1.length - 1,
        _ = a[s.id];
      return <div className={eJ("bg-white dark:bg-neutral-950", "text-neutral-900 dark:text-neutral-100", "relative flex h-full min-h-[540px] w-full flex-col justify-center-safe overflow-y-auto p-8 sm:p-10")}><section className={eJ("relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] text-neutral-900 dark:text-neutral-100 shadow-[0_0_0_1px_rgb(84_62_32/0.07),0_1px_2px_rgb(84_62_32/0.06),0_8px_22px_-10px_rgb(84_62_32/0.20)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_0_0_1px_rgb(0_0_0/0.6),0_10px_24px_-12px_rgb(0_0_0/0.8)]", "mx-auto my-auto w-full max-w-[420px] shrink-0 p-6")}><div className="flex items-center justify-between gap-3"><ol className="flex items-center gap-1.5">{e1.map((a, o) => {
                let l = o < e,
                  c = o === e;
                return <li><button type="button" onClick={() => r(o)} aria-current={c ? "step" : void 0} aria-label={`Go to question ${o + 1}${l ? ", done" : c ? ", current" : ""}`} className={eJ("grid size-7 shrink-0 place-items-center rounded-full border-2 text-[13px]/[16px] font-extrabold tabular-nums", l ? "border-transparent bg-[var(--rb-accent,oklch(84%_0.15_165))] text-[var(--rb-accent-fg,oklch(26%_0.06_168))] shadow-[inset_0_-1.5px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] dark:bg-[var(--rb-accent,oklch(81%_0.16_163))] dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))] dark:shadow-none" : c ? "border-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] text-neutral-900 dark:text-neutral-100 dark:border-[var(--rb-accent,oklch(81%_0.16_163))] dark:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)]" : "border-transparent bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] text-neutral-900/62 dark:text-neutral-100/62 dark:bg-neutral-100/10", "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))]", "cursor-pointer")}>{l ? <__mod_22728.n icon={__mod_90987.A} size={14} strokeWidth={2} aria-hidden="true" /> : o + 1}</button></li>;
              })}</ol><p className={eJ(e0, "shrink-0")}>{e + 1} of {e1.length}</p></div><h2 className={eJ("text-[17px]/[22px] font-extrabold", "mt-5")}>{s.title}</h2><p className={eJ(eX, "mt-1")}>{s.blurb}</p><div role="radiogroup" aria-label={s.title} className={eJ("divide-y divide-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:divide-neutral-100/7", "mt-4")}>{s.options.map(e => {
              let r = e === _;
              return <div className="py-1"><label className={eJ("relative flex min-h-10 w-full min-w-0 flex-wrap items-center gap-x-3 gap-y-1 py-2 text-left text-neutral-900 dark:text-neutral-100 transition-[background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)]", r ? "bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] dark:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)]" : "cursor-pointer hover:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] dark:hover:bg-neutral-100/6 active:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] dark:active:bg-neutral-100/10", "rounded-[var(--rb-r-4xl,18px)]", "px-3")}><input type="radio" name={`wz7-${s.id}`} value={e} checked={r} onChange={() => l(r => ({
                    ...r,
                    [s.id]: e
                  }))} className="size-[18px] shrink-0 cursor-pointer appearance-none rounded-full border-2 border-neutral-900/28 bg-white transition-[background-color,border-color,border-width,box-shadow,outline-color,scale] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:scale-[0.86] motion-reduce:active:scale-100 hover:not-checked:not-disabled:border-neutral-900/60 active:not-checked:bg-neutral-900/8 checked:border-[6px] checked:border-[var(--rb-accent,oklch(84%_0.15_165))] checked:bg-white checked:shadow-[0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] aria-invalid:border-[oklch(60%_0.236_26)] disabled:cursor-not-allowed disabled:border-neutral-900/20 disabled:checked:border-neutral-900/25 disabled:checked:shadow-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:border-neutral-100/34 dark:bg-neutral-900 dark:hover:not-checked:not-disabled:border-neutral-100/70 dark:active:not-checked:bg-neutral-100/10 dark:checked:border-[var(--rb-accent,oklch(81%_0.16_163))] dark:checked:bg-neutral-900 dark:checked:shadow-none dark:aria-invalid:border-[oklch(65.2%_0.219_26)] dark:disabled:border-neutral-100/24 dark:disabled:checked:border-neutral-100/28" /><span className={eJ("text-[15px]/[20px] font-bold", "min-w-0 flex-1 truncate")}>{e}</span></label></div>;
            })}</div><div className="mt-5 flex items-center gap-2"><button type="button" onClick={() => r(e => Math.max(0, e - 1))} disabled={0 === e} aria-label="Previous question" className={eJ("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-transparent text-neutral-900 hover:not-disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] active:not-disabled:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] disabled:text-neutral-900/40 dark:text-neutral-100 dark:hover:not-disabled:bg-neutral-100/8 dark:active:not-disabled:bg-neutral-100/12 dark:aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:disabled:text-neutral-100/40", "size-10 rounded-[calc(var(--rb-r-full,999px))]")}><__mod_22728.n icon={__mod_18976.A} size={18} strokeWidth={2} aria-hidden="true" /></button><button type="button" onClick={() => r(e => Math.min(e1.length - 1, e + 1))} disabled={!_} className={eJ("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_68%,white),var(--rb-accent,oklch(84%_0.15_165)))] text-[var(--rb-accent-fg,oklch(26%_0.06_168))] shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_4px_10px_-4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_80%,transparent)] hover:not-disabled:-translate-y-px hover:not-disabled:brightness-[1.04] hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_7px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_85%,transparent)] active:not-disabled:translate-y-px active:not-disabled:brightness-[0.98] active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_55%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] motion-reduce:hover:translate-y-0 disabled:opacity-45 disabled:shadow-none dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_78%,white),var(--rb-accent,oklch(81%_0.16_163)))] dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_6px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,transparent)] dark:hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_9px_22px_-8px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_60%,transparent)] dark:active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_45%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black)] dark:disabled:shadow-none", "h-10 gap-2 rounded-[calc(var(--rb-r-full,999px))] px-5 text-[15px]/[20px] font-bold", "flex-1")}>{d ? "Finish" : "Continue"}{!d && <__mod_22728.n icon={__mod_55299.A} size={18} strokeWidth={2} aria-hidden="true" />}</button></div><button type="button" className={eJ("inline-flex min-h-6 items-center gap-1 rounded-[calc(var(--rb-r-sm,6px))] text-[15px]/[20px] font-bold text-neutral-900 dark:text-neutral-100 underline decoration-[var(--rb-accent,oklch(84%_0.15_165))] decoration-[3px] underline-offset-[5px] transition-[text-decoration-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:decoration-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:decoration-[var(--rb-accent,oklch(81%_0.16_163))] dark:hover:decoration-[var(--rb-accent,oklch(81%_0.16_163))]", "mt-3 w-full justify-center")}>Skip and use defaults</button></section></div>;
    }
  },
  e5 = {
    "wizard-1": 660,
    "wizard-2": 820,
    "wizard-3": 720,
    "wizard-4": 660,
    "wizard-5": 800,
    "wizard-6": 720,
    "wizard-7": 540
  };

export { e2 as components };
export { e5 as heights };

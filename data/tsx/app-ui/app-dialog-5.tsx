import { motion, AnimatePresence } from "motion/react";
import * as __mod_22728 from "../_helpers/22728";
import * as __mod_31517 from "../_helpers/31517";
import * as __mod_90987 from "../_helpers/90987";
import * as __mod_66654 from "../_helpers/66654";
import * as __mod_62714 from "../_helpers/62714";
import * as __mod_31964 from "../_helpers/31964";
import * as __mod_33786 from "../_helpers/33786";
import * as __mod_22670 from "../_helpers/22670";
import * as __mod_96037 from "../_helpers/96037";
import * as __mod_50969 from "../_helpers/50969";
import * as __mod_47962 from "../_helpers/47962";
import * as __mod_89289 from "../_helpers/89289";
import * as __mod_27476 from "../_helpers/27476";
import * as __mod_18976 from "../_helpers/18976";
import * as __mod_92752 from "../_helpers/92752";
import * as __mod_20148 from "../_helpers/20148";
import * as __mod_5042 from "../_helpers/5042";
/**
 * App Dialog 5
 * slug: app-dialog-5
 * category: app-dialog
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let c = (...e) => e.filter(Boolean).join(" "),
  d = "text-neutral-900/62 dark:text-neutral-100/62",
  b = "relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_68%,white),var(--rb-accent,oklch(84%_0.15_165)))] text-[var(--rb-accent-fg,oklch(26%_0.06_168))] shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_4px_10px_-4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_80%,transparent)] hover:not-disabled:-translate-y-px hover:not-disabled:brightness-[1.04] hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_7px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_85%,transparent)] active:not-disabled:translate-y-px active:not-disabled:brightness-[0.98] active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_55%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] motion-reduce:hover:translate-y-0 disabled:opacity-45 disabled:shadow-none dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_78%,white),var(--rb-accent,oklch(81%_0.16_163)))] dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_6px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,transparent)] dark:hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_9px_22px_-8px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_60%,transparent)] dark:active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_45%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black)] dark:disabled:shadow-none",
  x = "h-8 gap-1.5 rounded-[calc(var(--rb-r-full,999px))] px-3.5 text-[14px]/[18px] font-bold",
  u = [.2, 0, 0, 1],
  p = [{
    label: "Plan",
    from: "Team",
    to: "Scale"
  }, {
    label: "Seats",
    from: "24",
    to: "40"
  }, {
    label: "Monthly total",
    from: "$1,440.00",
    to: "$2,600.00"
  }, {
    label: "Support",
    from: "Business hours",
    to: "24/7 priority"
  }, {
    label: "Audit log retention",
    from: "30 days",
    to: "1 year"
  }];
function h(e) {
  return Array.from(e?.querySelectorAll('a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])') ?? []);
}
let k = (...e) => e.filter(Boolean).join(" "),
  m = "relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] text-neutral-900 dark:text-neutral-100 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] active:not-disabled:translate-y-px active:not-disabled:shadow-[inset_0_1px_3px_rgb(84_62_32/0.16),0_0_0_1px_rgb(84_62_32/0.10)] dark:active:not-disabled:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14),0_0_0_1px_rgb(84_62_32/0.10)] dark:aria-expanded:bg-neutral-800 dark:aria-expanded:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] disabled:bg-none disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] disabled:text-neutral-900/40 disabled:shadow-none dark:disabled:bg-neutral-800/60 dark:disabled:text-neutral-100/40",
  f = "h-8 gap-1.5 rounded-[calc(var(--rb-r-full,999px))] px-3.5 text-[14px]/[18px] font-bold",
  v = [.2, 0, 0, 1],
  g = [{
    label: "Deployments",
    value: "1,204"
  }, {
    label: "Environment variables",
    value: "38"
  }, {
    label: "Custom domains",
    value: "3"
  }, {
    label: "Team members",
    value: "11"
  }];
function w(e) {
  return Array.from(e?.querySelectorAll('a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])') ?? []);
}
let C = (...e) => e.filter(Boolean).join(" "),
  S = "relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_68%,white),var(--rb-accent,oklch(84%_0.15_165)))] text-[var(--rb-accent-fg,oklch(26%_0.06_168))] shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_4px_10px_-4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_80%,transparent)] hover:not-disabled:-translate-y-px hover:not-disabled:brightness-[1.04] hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_7px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_85%,transparent)] active:not-disabled:translate-y-px active:not-disabled:brightness-[0.98] active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_55%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] motion-reduce:hover:translate-y-0 disabled:opacity-45 disabled:shadow-none dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_78%,white),var(--rb-accent,oklch(81%_0.16_163)))] dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_6px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,transparent)] dark:hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_9px_22px_-8px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_60%,transparent)] dark:active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_45%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black)] dark:disabled:shadow-none",
  z = "h-8 gap-1.5 rounded-[calc(var(--rb-r-full,999px))] px-3.5 text-[14px]/[18px] font-bold",
  E = "relative flex w-full min-w-0 cursor-text items-center rounded-[calc(var(--rb-r-xl,12px))] data-concentric:rounded-[var(--rb-r-5xl,22px)] border border-transparent bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] text-[15px]/[20px] font-medium text-neutral-900 transition-[border-color,box-shadow,background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:not-focus-within:not-has-[[aria-invalid=true]]:not-has-[input:disabled]:not-has-[input[readonly]]:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] focus-within:border-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] focus-within:bg-white focus-within:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] has-[[aria-invalid=true]]:border-[oklch(60%_0.236_26)] has-[[aria-invalid=true]]:bg-[oklch(97.5%_0.016_26)] has-[input:disabled]:cursor-not-allowed has-[input:disabled]:text-neutral-900/40 has-[input:disabled]:shadow-none has-[input[readonly]]:cursor-default has-[input[readonly]]:shadow-none dark:text-neutral-100 dark:hover:not-focus-within:not-has-[[aria-invalid=true]]:not-has-[input:disabled]:not-has-[input[readonly]]:bg-neutral-900 dark:focus-within:border-[var(--rb-accent,oklch(81%_0.16_163))] dark:focus-within:bg-neutral-900 dark:focus-within:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:has-[[aria-invalid=true]]:border-[oklch(65.2%_0.219_26)] dark:has-[[aria-invalid=true]]:bg-[oklch(26%_0.04_26)] dark:has-[input:disabled]:text-neutral-100/40",
  D = "h-10",
  L = "h-full w-full min-w-0 flex-1 bg-transparent px-3.5 outline-none [[data-affix]+&]:ps-2 [&:has(+[data-affix])]:pe-2 placeholder:font-medium placeholder:text-neutral-900/55 disabled:cursor-not-allowed disabled:placeholder:text-neutral-900/30 dark:placeholder:text-neutral-100/55 dark:disabled:placeholder:text-neutral-100/30 dark:[color-scheme:dark]",
  A = "flex w-fit items-center gap-2 text-[15px]/[20px] font-bold text-neutral-900 dark:text-neutral-100",
  R = "max-w-[60ch] text-[14px]/[20px] font-medium text-neutral-900/78 dark:text-neutral-100/78",
  M = "flex items-start gap-2 text-[14px]/[20px] font-bold text-[oklch(51%_0.18_26)] dark:text-[oklch(76%_0.14_26)]",
  W = [.2, 0, 0, 1],
  T = ["Admin", "Editor", "Viewer", "Billing"];
function P({
  id: e,
  value: r,
  defaultValue: a,
  onChange: l,
  options: o,
  disabled: i,
  placeholder: _ = "Select…",
  className: c,
  triggerClassName: d,
  ariaLabel: b
}) {
  let x = (0, React.useId)(),
    [u, p] = (0, React.useState)(!1),
    [h, k] = (0, React.useState)(0),
    [m, f] = (0, React.useState)(!1),
    [v, g] = (0, React.useState)(),
    [w, N] = (0, React.useState)(a ?? ""),
    S = (0, React.useRef)(null),
    z = (0, React.useRef)(null),
    E = (0, React.useRef)({
      buffer: "",
      at: 0
    }),
    D = r ?? w,
    L = o.findIndex(e => e.value === D),
    A = L >= 0 ? o[L] : void 0,
    R = () => {
      if (i) return;
      let e = S.current,
        r = e?.ownerDocument.defaultView;
      if (e && r) {
        let a = e.getBoundingClientRect(),
          t = 0,
          n = r.innerHeight;
        for (let a = e.parentElement; a; a = a.parentElement) if (/auto|scroll|hidden|clip/.test(r.getComputedStyle(a).overflowY)) {
          let e = a.getBoundingClientRect();
          t = Math.max(t, e.top), n = Math.min(n, e.bottom);
          break;
        }
        let l = n - a.bottom,
          i = a.top - t,
          s = Math.min(32 * o.length + 8, 264),
          _ = l < s + 8 && i > l,
          c = (_ ? i : l) - 8;
        f(_), g(c < s ? Math.max(c, 40) : void 0);
      }
      k(L >= 0 ? L : 0), p(!0);
    };
  (0, React.useEffect)(() => {
    if (!u) return;
    let e = S.current;
    if (!e) return;
    let r = e.ownerDocument,
      a = r => {
        e.contains(r.target) || p(!1);
      };
    return r.addEventListener("mousedown", a), r.addEventListener("touchstart", a), () => {
      r.removeEventListener("mousedown", a), r.removeEventListener("touchstart", a);
    };
  }, [u]), (0, React.useEffect)(() => {
    if (!u) return;
    let e = z.current,
      r = e?.querySelector(`[data-index="${h}"]`);
    if (!e || !r) return;
    let a = r.offsetTop,
      t = a + r.offsetHeight;
    a < e.scrollTop ? e.scrollTop = a : t > e.scrollTop + e.clientHeight && (e.scrollTop = t - e.clientHeight);
  }, [u, h]);
  let M = e => {
    let a = o[e];
    a && (void 0 === r && N(a.value), l?.(a.value), p(!1), S.current?.querySelector("button")?.focus({
      preventScroll: !0
    }));
  };
  return <div ref={S} className={C("relative", c)}><button id={e} type="button" role="combobox" aria-expanded={u} aria-controls={x} aria-haspopup="listbox" aria-label={b} disabled={i} onClick={() => u ? p(!1) : R()} onKeyDown={e => {
      if (!i) {
        if (!u) {
          ["Enter", " ", "ArrowDown", "ArrowUp"].includes(e.key) && (e.preventDefault(), R());
          return;
        }
        if ("Escape" === e.key || "Tab" === e.key) {
          "Escape" === e.key && e.stopPropagation(), p(!1);
          return;
        }
        if ("ArrowDown" === e.key) e.preventDefault(), k(e => Math.min(e + 1, o.length - 1));else if ("ArrowUp" === e.key) e.preventDefault(), k(e => Math.max(e - 1, 0));else if ("Home" === e.key) e.preventDefault(), k(0);else if ("End" === e.key) e.preventDefault(), k(o.length - 1);else if ("Enter" === e.key || " " === e.key) e.preventDefault(), M(h);else if (1 === e.key.length && /\S/.test(e.key)) {
          let r = Date.now(),
            a = E.current;
          a.buffer = r - a.at > 700 ? e.key : a.buffer + e.key, a.at = r;
          let t = o.findIndex(e => e.label.toLowerCase().startsWith(a.buffer.toLowerCase()));
          t >= 0 && k(t);
        }
      }
    }} className={C("inline-flex h-10 w-fit min-w-40 cursor-pointer items-center justify-between gap-2 rounded-[calc(var(--rb-r-xl,12px))] border border-transparent bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] px-3.5 text-left text-[15px]/[20px] font-semibold whitespace-nowrap text-neutral-900 outline-none select-none transition-[border-color,box-shadow,background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:not-disabled:not-aria-invalid:not-aria-expanded:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] focus-visible:border-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] focus-visible:bg-white focus-visible:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-expanded:border-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] aria-expanded:bg-white aria-expanded:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-invalid:border-[oklch(60%_0.236_26)] disabled:cursor-not-allowed disabled:text-neutral-900/40 disabled:shadow-none dark:text-neutral-100 dark:hover:not-disabled:not-aria-invalid:not-aria-expanded:bg-neutral-900 dark:focus-visible:border-[var(--rb-accent,oklch(81%_0.16_163))] dark:focus-visible:bg-neutral-900 dark:focus-visible:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-expanded:border-[var(--rb-accent,oklch(81%_0.16_163))] dark:aria-expanded:bg-neutral-900 dark:aria-expanded:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-invalid:border-[oklch(65.2%_0.219_26)] dark:disabled:text-neutral-100/40", "w-full min-w-[100%]", d)}><span className="grid min-w-0 flex-1 text-left">{o.map(e => <span aria-hidden="true" className="invisible col-start-1 row-start-1 truncate">{e.label}</span>)}<span className={C("col-start-1 row-start-1 truncate", !A && "text-neutral-900/62 dark:text-neutral-100/62")}>{A ? A.label : _}</span></span><__mod_22728.n icon={__mod_31517.A} size={18} strokeWidth={2} aria-hidden="true" className="shrink-0 text-neutral-900/78 dark:text-neutral-100/78" /></button>{u && <ul ref={z} id={x} role="listbox" tabIndex={-1} style={{
      maxHeight: v
    }} className={C("min-w-52 max-w-[min(480px,calc(100vw-2rem))] overflow-x-hidden overflow-y-auto overscroll-contain rounded-[calc(var(--rb-r-3xl,16px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] p-2 text-neutral-900 dark:text-neutral-100 outline-none shadow-[0_0_0_1px_rgb(84_62_32/0.08),0_24px_56px_-20px_rgb(84_62_32/0.34),0_6px_16px_-8px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.65),0_24px_56px_-16px_rgb(0_0_0/0.8)]", "absolute z-30 max-h-[264px] w-full min-w-[100%]", m ? "bottom-full mb-1.5" : "top-full mt-1.5")}>{o.map((e, r) => {
        let a = e.value === D;
        return <li role="option" aria-selected={a} data-index={r} data-highlighted={r === h ? "" : void 0} onMouseEnter={() => k(r)} onClick={() => M(r)} className={C("relative flex min-h-10 w-full cursor-default items-center gap-2.5 rounded-[calc(var(--rb-r-md,8px))] px-3 py-2 text-left text-[15px]/[20px] font-semibold text-neutral-900 outline-none select-none [&_svg]:shrink-0 [&_svg]:text-neutral-900/70 hover:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] focus-visible:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] data-[highlighted]:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-disabled:cursor-not-allowed aria-disabled:text-neutral-900/40 dark:text-neutral-100 dark:[&_svg]:text-neutral-100/70 dark:hover:bg-neutral-100/7 dark:focus-visible:bg-neutral-100/7 dark:data-[highlighted]:bg-neutral-100/7 dark:aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-disabled:text-neutral-100/40", "pe-8")}><span className="truncate">{e.label}</span>{a && <__mod_22728.n icon={__mod_90987.A} size={18} strokeWidth={2} aria-hidden="true" className="pointer-events-none absolute end-2" />}</li>;
      })}</ul>}</div>;
}
function I(e) {
  return Array.from(e?.querySelectorAll('a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])') ?? []);
}
let K = (...e) => e.filter(Boolean).join(" "),
  F = "bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)]",
  V = "text-neutral-900/62 dark:text-neutral-100/62",
  B = "text-[15px]/[20px] font-bold",
  O = "rounded-[var(--rb-r-4xl,18px)]",
  q = "relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_68%,white),var(--rb-accent,oklch(84%_0.15_165)))] text-[var(--rb-accent-fg,oklch(26%_0.06_168))] shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_4px_10px_-4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_80%,transparent)] hover:not-disabled:-translate-y-px hover:not-disabled:brightness-[1.04] hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_7px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_85%,transparent)] active:not-disabled:translate-y-px active:not-disabled:brightness-[0.98] active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_55%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] motion-reduce:hover:translate-y-0 disabled:opacity-45 disabled:shadow-none dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_78%,white),var(--rb-accent,oklch(81%_0.16_163)))] dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_6px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,transparent)] dark:hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_9px_22px_-8px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_60%,transparent)] dark:active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_45%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black)] dark:disabled:shadow-none",
  U = "relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] text-neutral-900 dark:text-neutral-100 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] active:not-disabled:translate-y-px active:not-disabled:shadow-[inset_0_1px_3px_rgb(84_62_32/0.16),0_0_0_1px_rgb(84_62_32/0.10)] dark:active:not-disabled:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14),0_0_0_1px_rgb(84_62_32/0.10)] dark:aria-expanded:bg-neutral-800 dark:aria-expanded:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] disabled:bg-none disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] disabled:text-neutral-900/40 disabled:shadow-none dark:disabled:bg-neutral-800/60 dark:disabled:text-neutral-100/40",
  $ = "h-8 gap-1.5 rounded-[calc(var(--rb-r-full,999px))] px-3.5 text-[14px]/[18px] font-bold",
  J = "h-10",
  Y = "flex w-fit items-center gap-2 text-[15px]/[20px] font-bold text-neutral-900 dark:text-neutral-100",
  Z = "max-w-[60ch] text-[14px]/[20px] font-medium text-neutral-900/78 dark:text-neutral-100/78",
  G = "min-w-0 text-[15px]/[20px] font-bold text-neutral-900/62 dark:text-neutral-100/62",
  Q = "flex min-w-0 flex-wrap items-center gap-2 text-[15px]/[22px] font-medium text-neutral-900 dark:text-neutral-100 [overflow-wrap:anywhere]",
  X = [.2, 0, 0, 1],
  ee = [{
    title: "Workspace"
  }, {
    title: "Region"
  }, {
    title: "Team"
  }],
  er = ["United States (iad1)", "Europe (fra1)", "Asia Pacific (syd1)", "South America (gru1)"];
function ea(e) {
  return Array.from(e?.querySelectorAll('a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])') ?? []);
}
let et = (...e) => e.filter(Boolean).join(" "),
  en = "bg-[oklch(28%_0.02_70/0.3)] dark:bg-neutral-950/70",
  el = "text-[15px]/[20px] font-bold",
  eo = "relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] text-neutral-900 dark:text-neutral-100 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] active:not-disabled:translate-y-px active:not-disabled:shadow-[inset_0_1px_3px_rgb(84_62_32/0.16),0_0_0_1px_rgb(84_62_32/0.10)] dark:active:not-disabled:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14),0_0_0_1px_rgb(84_62_32/0.10)] dark:aria-expanded:bg-neutral-800 dark:aria-expanded:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] disabled:bg-none disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] disabled:text-neutral-900/40 disabled:shadow-none dark:disabled:bg-neutral-800/60 dark:disabled:text-neutral-100/40",
  ei = "h-8 gap-1.5 rounded-[calc(var(--rb-r-full,999px))] px-3.5 text-[14px]/[18px] font-bold",
  es = "h-10",
  e_ = "flex w-fit items-center gap-2 text-[15px]/[20px] font-bold text-neutral-900 dark:text-neutral-100",
  ec = "mx-1 mt-1 flex min-h-0 flex-1 flex-col overflow-y-auto rounded-[calc(var(--rb-r-5xl,22px))] border border-transparent bg-white dark:bg-neutral-950 shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] [&:last-child]:mb-1",
  ed = "relative flex flex-col gap-2 px-5 pt-6 pb-6 has-[button]:pe-14 [&:has(+*)]:pb-0",
  eb = "text-[19px]/[24px] font-extrabold tracking-[-0.01em] text-neutral-900 dark:text-neutral-100",
  ex = "flex min-h-14 flex-wrap items-center justify-end gap-2 px-4 py-2.5 pe-2.5",
  eu = [.2, 0, 0, 1],
  ep = ["Email", "Slack", "PagerDuty", "Webhook"],
  eh = "Slack",
  ek = "5% / 5 min",
  em = "Page the on-call engineer when errors climb.";
function ef({
  id: e,
  value: r,
  defaultValue: a,
  onChange: l,
  options: o,
  disabled: i,
  placeholder: _ = "Select…",
  className: c,
  triggerClassName: d,
  ariaLabel: b
}) {
  let x = (0, React.useId)(),
    [u, p] = (0, React.useState)(!1),
    [h, k] = (0, React.useState)(0),
    [m, f] = (0, React.useState)(!1),
    [v, g] = (0, React.useState)(),
    [w, N] = (0, React.useState)(a ?? ""),
    C = (0, React.useRef)(null),
    S = (0, React.useRef)(null),
    z = (0, React.useRef)({
      buffer: "",
      at: 0
    }),
    E = r ?? w,
    D = o.findIndex(e => e.value === E),
    L = D >= 0 ? o[D] : void 0,
    A = () => {
      if (i) return;
      let e = C.current,
        r = e?.ownerDocument.defaultView;
      if (e && r) {
        let a = e.getBoundingClientRect(),
          t = 0,
          n = r.innerHeight;
        for (let a = e.parentElement; a; a = a.parentElement) if (/auto|scroll|hidden|clip/.test(r.getComputedStyle(a).overflowY)) {
          let e = a.getBoundingClientRect();
          t = Math.max(t, e.top), n = Math.min(n, e.bottom);
          break;
        }
        let l = n - a.bottom,
          i = a.top - t,
          s = Math.min(32 * o.length + 8, 264),
          _ = l < s + 8 && i > l,
          c = (_ ? i : l) - 8;
        f(_), g(c < s ? Math.max(c, 40) : void 0);
      }
      k(D >= 0 ? D : 0), p(!0);
    };
  (0, React.useEffect)(() => {
    if (!u) return;
    let e = C.current;
    if (!e) return;
    let r = e.ownerDocument,
      a = r => {
        e.contains(r.target) || p(!1);
      };
    return r.addEventListener("mousedown", a), r.addEventListener("touchstart", a), () => {
      r.removeEventListener("mousedown", a), r.removeEventListener("touchstart", a);
    };
  }, [u]), (0, React.useEffect)(() => {
    if (!u) return;
    let e = S.current,
      r = e?.querySelector(`[data-index="${h}"]`);
    if (!e || !r) return;
    let a = r.offsetTop,
      t = a + r.offsetHeight;
    a < e.scrollTop ? e.scrollTop = a : t > e.scrollTop + e.clientHeight && (e.scrollTop = t - e.clientHeight);
  }, [u, h]);
  let R = e => {
    let a = o[e];
    a && (void 0 === r && N(a.value), l?.(a.value), p(!1), C.current?.querySelector("button")?.focus({
      preventScroll: !0
    }));
  };
  return <div ref={C} className={et("relative", c)}><button id={e} type="button" role="combobox" aria-expanded={u} aria-controls={x} aria-haspopup="listbox" aria-label={b} disabled={i} onClick={() => u ? p(!1) : A()} onKeyDown={e => {
      if (!i) {
        if (!u) {
          ["Enter", " ", "ArrowDown", "ArrowUp"].includes(e.key) && (e.preventDefault(), A());
          return;
        }
        if ("Escape" === e.key || "Tab" === e.key) {
          "Escape" === e.key && e.stopPropagation(), p(!1);
          return;
        }
        if ("ArrowDown" === e.key) e.preventDefault(), k(e => Math.min(e + 1, o.length - 1));else if ("ArrowUp" === e.key) e.preventDefault(), k(e => Math.max(e - 1, 0));else if ("Home" === e.key) e.preventDefault(), k(0);else if ("End" === e.key) e.preventDefault(), k(o.length - 1);else if ("Enter" === e.key || " " === e.key) e.preventDefault(), R(h);else if (1 === e.key.length && /\S/.test(e.key)) {
          let r = Date.now(),
            a = z.current;
          a.buffer = r - a.at > 700 ? e.key : a.buffer + e.key, a.at = r;
          let t = o.findIndex(e => e.label.toLowerCase().startsWith(a.buffer.toLowerCase()));
          t >= 0 && k(t);
        }
      }
    }} className={et("inline-flex h-10 w-fit min-w-40 cursor-pointer items-center justify-between gap-2 rounded-[calc(var(--rb-r-xl,12px))] border border-transparent bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] px-3.5 text-left text-[15px]/[20px] font-semibold whitespace-nowrap text-neutral-900 outline-none select-none transition-[border-color,box-shadow,background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:not-disabled:not-aria-invalid:not-aria-expanded:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] focus-visible:border-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] focus-visible:bg-white focus-visible:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-expanded:border-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] aria-expanded:bg-white aria-expanded:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-invalid:border-[oklch(60%_0.236_26)] disabled:cursor-not-allowed disabled:text-neutral-900/40 disabled:shadow-none dark:text-neutral-100 dark:hover:not-disabled:not-aria-invalid:not-aria-expanded:bg-neutral-900 dark:focus-visible:border-[var(--rb-accent,oklch(81%_0.16_163))] dark:focus-visible:bg-neutral-900 dark:focus-visible:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-expanded:border-[var(--rb-accent,oklch(81%_0.16_163))] dark:aria-expanded:bg-neutral-900 dark:aria-expanded:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-invalid:border-[oklch(65.2%_0.219_26)] dark:disabled:text-neutral-100/40", "w-full min-w-[100%]", d)}><span className="grid min-w-0 flex-1 text-left">{o.map(e => <span aria-hidden="true" className="invisible col-start-1 row-start-1 truncate">{e.label}</span>)}<span className={et("col-start-1 row-start-1 truncate", !L && "text-neutral-900/62 dark:text-neutral-100/62")}>{L ? L.label : _}</span></span><__mod_22728.n icon={__mod_31517.A} size={18} strokeWidth={2} aria-hidden="true" className="shrink-0 text-neutral-900/78 dark:text-neutral-100/78" /></button>{u && <ul ref={S} id={x} role="listbox" tabIndex={-1} style={{
      maxHeight: v
    }} className={et("min-w-52 max-w-[min(480px,calc(100vw-2rem))] overflow-x-hidden overflow-y-auto overscroll-contain rounded-[calc(var(--rb-r-3xl,16px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] p-2 text-neutral-900 dark:text-neutral-100 outline-none shadow-[0_0_0_1px_rgb(84_62_32/0.08),0_24px_56px_-20px_rgb(84_62_32/0.34),0_6px_16px_-8px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.65),0_24px_56px_-16px_rgb(0_0_0/0.8)]", "absolute z-30 max-h-[264px] w-full min-w-[100%]", m ? "bottom-full mb-1.5" : "top-full mt-1.5")}>{o.map((e, r) => {
        let a = e.value === E;
        return <li role="option" aria-selected={a} data-index={r} data-highlighted={r === h ? "" : void 0} onMouseEnter={() => k(r)} onClick={() => R(r)} className={et("relative flex min-h-10 w-full cursor-default items-center gap-2.5 rounded-[calc(var(--rb-r-md,8px))] px-3 py-2 text-left text-[15px]/[20px] font-semibold text-neutral-900 outline-none select-none [&_svg]:shrink-0 [&_svg]:text-neutral-900/70 hover:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] focus-visible:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] data-[highlighted]:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-disabled:cursor-not-allowed aria-disabled:text-neutral-900/40 dark:text-neutral-100 dark:[&_svg]:text-neutral-100/70 dark:hover:bg-neutral-100/7 dark:focus-visible:bg-neutral-100/7 dark:data-[highlighted]:bg-neutral-100/7 dark:aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-disabled:text-neutral-100/40", "pe-8")}><span className="truncate">{e.label}</span>{a && <__mod_22728.n icon={__mod_90987.A} size={18} strokeWidth={2} aria-hidden="true" className="pointer-events-none absolute end-2" />}</li>;
      })}</ul>}</div>;
}
function ev(e) {
  return Array.from(e?.querySelectorAll('a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])') ?? []);
}
let ey = (...e) => e.filter(Boolean).join(" "),
  ej = "text-neutral-900/78 dark:text-neutral-100/78",
  eN = "text-neutral-900/62 dark:text-neutral-100/62",
  eC = "text-[14px]/[20px] font-medium",
  eS = "text-[13px]/[16px] font-semibold tabular-nums",
  ez = "font-mono text-[12px]/[16px] tabular-nums",
  eE = "relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] text-neutral-900 dark:text-neutral-100 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] active:not-disabled:translate-y-px active:not-disabled:shadow-[inset_0_1px_3px_rgb(84_62_32/0.16),0_0_0_1px_rgb(84_62_32/0.10)] dark:active:not-disabled:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14),0_0_0_1px_rgb(84_62_32/0.10)] dark:aria-expanded:bg-neutral-800 dark:aria-expanded:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] disabled:bg-none disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] disabled:text-neutral-900/40 disabled:shadow-none dark:disabled:bg-neutral-800/60 dark:disabled:text-neutral-100/40",
  eD = "h-8 gap-1.5 rounded-[calc(var(--rb-r-full,999px))] px-3.5 text-[14px]/[18px] font-bold",
  eL = [.2, 0, 0, 1],
  eA = "SOC2-2024",
  eR = "SOC 2 Type II report",
  eM = "PDF",
  eW = "Priya Raman",
  eT = "4.2 MB",
  eP = "Jun 18, 2024",
  eI = "Vanta",
  eH = "7 years",
  eK = "Current",
  eF = "Independent audit of security, availability, and confidentiality controls for the 2024 reporting period.",
  eV = [{
    id: "AC-2",
    name: "Account management"
  }, {
    id: "CC6.1",
    name: "Logical access controls"
  }, {
    id: "CC7.2",
    name: "Security monitoring"
  }, {
    id: "A1.2",
    name: "Availability commitments"
  }],
  eB = [{
    date: "Jun 18, 2024",
    label: "Report uploaded by Priya Raman"
  }, {
    date: "Jun 14, 2024",
    label: "Audit period closed"
  }, {
    date: "Jan 2, 2024",
    label: "Evidence collection started"
  }];
function eO(e) {
  return Array.from(e?.querySelectorAll('a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])') ?? []);
}
let eQ = (...e) => e.filter(Boolean).join(" "),
  eX = "min-w-52 max-w-[min(480px,calc(100vw-2rem))] overflow-x-hidden overflow-y-auto overscroll-contain rounded-[calc(var(--rb-r-3xl,16px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] p-2 text-neutral-900 dark:text-neutral-100 outline-none shadow-[0_0_0_1px_rgb(84_62_32/0.08),0_24px_56px_-20px_rgb(84_62_32/0.34),0_6px_16px_-8px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.65),0_24px_56px_-16px_rgb(0_0_0/0.8)]",
  e0 = "relative flex min-h-10 w-full cursor-default items-center gap-2.5 rounded-[calc(var(--rb-r-md,8px))] px-3 py-2 text-left text-[15px]/[20px] font-semibold text-neutral-900 outline-none select-none [&_svg]:shrink-0 [&_svg]:text-neutral-900/70 hover:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] focus-visible:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] data-[highlighted]:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-disabled:cursor-not-allowed aria-disabled:text-neutral-900/40 dark:text-neutral-100 dark:[&_svg]:text-neutral-100/70 dark:hover:bg-neutral-100/7 dark:focus-visible:bg-neutral-100/7 dark:data-[highlighted]:bg-neutral-100/7 dark:aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-disabled:text-neutral-100/40",
  e1 = [.2, 0, 0, 1],
  e2 = ["CSV", "Excel", "PDF"],
  e5 = [{
    id: "rename",
    label: "Rename report",
    shortcut: "⌘R",
    icon: __mod_66654.A
  }, {
    id: "duplicate",
    label: "Duplicate",
    shortcut: "⌘D",
    icon: __mod_62714.A
  }, {
    id: "export",
    label: "Export as",
    icon: __mod_31964.A,
    submenu: !0
  }, {
    id: "share",
    label: "Copy link",
    shortcut: "⌘⇧C",
    icon: __mod_33786.A
  }, {
    id: "archive",
    label: "Move to archive",
    icon: __mod_22670.A
  }, {
    id: "delete",
    label: "Delete report",
    icon: __mod_96037.A,
    danger: !0
  }],
  e6 = new Set(["duplicate", "share"]),
  e8 = {
    "app-dialog-1": function () {
      let e,
        r,
        a,
        {
          ref: k,
          edges: m,
          onScroll: f
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
                scrollHeight: n,
                clientHeight: l
              } = r;
              a({
                start: t > 1,
                end: Math.ceil(t + l) < n - 1
              });
            }, []);
          return (0, React.useEffect)(() => {
            t();
            let r = e.current,
              a = r?.ownerDocument.defaultView;
            if (!r || !a?.ResizeObserver) return;
            let n = new a.ResizeObserver(t);
            return n.observe(r), () => n.disconnect();
          }, [t]), {
            ref: e,
            edges: r,
            onScroll: t
          };
        }(),
        v = (0, __mod_50969.I)(),
        [g, w] = (0, React.useState)(!0),
        [y, j] = (0, React.useState)(!1),
        N = (0, React.useRef)(!1),
        [C, S] = (0, React.useState)(!1),
        z = (0, React.useCallback)(() => w(!1), []),
        {
          panelRef: E,
          triggerRef: D
        } = (e = (0, React.useRef)(null), r = (0, React.useRef)(null), a = (0, React.useRef)(g), (0, React.useEffect)(() => {
          if (!g) return;
          let r = e.current,
            a = r?.ownerDocument ?? document;
          (h(r)[0] ?? r)?.focus({
            preventScroll: !0
          });
          let t = e => {
            if ("Escape" === e.key) {
              e.preventDefault(), z();
              return;
            }
            if ("Tab" !== e.key) return;
            let t = h(r);
            if (0 === t.length) return;
            let n = t[0],
              l = t[t.length - 1],
              o = a.activeElement;
            e.shiftKey && o === n ? (e.preventDefault(), l.focus({
              preventScroll: !0
            })) : e.shiftKey || o !== l || (e.preventDefault(), n.focus({
              preventScroll: !0
            }));
          };
          return a.addEventListener("keydown", t), () => a.removeEventListener("keydown", t);
        }, [g, z]), (0, React.useEffect)(() => {
          a.current && !g && r.current?.focus({
            preventScroll: !0
          }), a.current = g;
        }, [g]), {
          panelRef: e,
          triggerRef: r
        });
      (0, React.useEffect)(() => {
        if (!y) return;
        let e = setTimeout(() => j(!1), 2e3);
        return () => clearTimeout(e);
      }, [y]);
      let L = !v && !C;
      return <div className={c("bg-white dark:bg-neutral-950", "text-neutral-900 dark:text-neutral-100", "relative flex h-full min-h-[560px] w-full items-center justify-center overflow-hidden p-4 sm:p-6")}><button ref={D} type="button" onPointerDown={() => {
          N.current = !1;
        }} onKeyDown={e => {
          ("Enter" === e.key || " " === e.key) && (N.current = !0);
        }} onClick={() => {
          j(!1), S(N.current), w(!0);
        }} className={c(b, "h-10 gap-2 rounded-[calc(var(--rb-r-full,999px))] px-5 text-[15px]/[20px] font-bold")}>Change plan</button><__mod_47962.N initial={!1}>{g && <><motion.div aria-hidden="true" className={c("bg-[oklch(28%_0.02_70/0.3)] dark:bg-neutral-950/70", "absolute inset-0 z-40")} onClick={z} initial={{
              opacity: 0
            }} animate={{
              opacity: 1
            }} exit={{
              opacity: 0,
              transition: {
                duration: .12,
                ease: u
              }
            }} transition={{
              duration: .18 * !!L,
              ease: u
            }} /><div className="pointer-events-none absolute inset-0 z-50 flex items-center justify-center p-4 sm:p-6"><motion.div ref={E} role="dialog" aria-modal="true" aria-labelledby="app-dialog-1-title" tabIndex={-1} className={c("flex max-h-[calc(100%-4rem)] flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 outline-none shadow-[0_0_0_1px_rgb(84_62_32/0.08),0_24px_56px_-20px_rgb(84_62_32/0.34),0_6px_16px_-8px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.65),0_24px_56px_-16px_rgb(0_0_0/0.8)]", "pointer-events-auto max-h-full w-full max-w-md")} initial={{
                opacity: 0
              }} animate={{
                opacity: 1
              }} exit={{
                opacity: 0,
                transition: {
                  duration: .12,
                  ease: u
                }
              }} transition={{
                duration: .18 * !!L,
                ease: u
              }}><div className="mx-1 mt-1 flex min-h-0 flex-1 flex-col overflow-y-auto rounded-[calc(var(--rb-r-5xl,22px))] border border-transparent bg-white dark:bg-neutral-950 shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] [&:last-child]:mb-1"><header className={c("relative flex flex-col gap-2 px-5 pt-6 pb-6 has-[button]:pe-14 [&:has(+*)]:pb-0", "shrink-0")}><h2 id="app-dialog-1-title" className="text-[19px]/[24px] font-extrabold tracking-[-0.01em] text-neutral-900 dark:text-neutral-100">Apply plan change</h2><p className="text-[15px]/[22px] font-medium text-neutral-900/78 dark:text-neutral-100/78">Your workspace moves to the Scale plan at the next renewal on Jul 1. Nothing is charged today.</p><div className="absolute end-4 top-4 flex"><button type="button" aria-label="Close dialog" onClick={z} className={c("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-transparent text-neutral-900 hover:not-disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] active:not-disabled:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] disabled:text-neutral-900/40 dark:text-neutral-100 dark:hover:not-disabled:bg-neutral-100/8 dark:active:not-disabled:bg-neutral-100/12 dark:aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:disabled:text-neutral-100/40", "size-8 rounded-[calc(var(--rb-r-full,999px))]")}><__mod_22728.n icon={__mod_89289.A} size={18} strokeWidth={2} aria-hidden="true" className="shrink-0" /></button></div></header><div className="relative min-h-0 flex-1"><div ref={k} onScroll={f} className={c("flex min-w-0 flex-col gap-5 p-5 pt-6 pb-6", "h-full overflow-y-auto")}><dl className="divide-y divide-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:divide-neutral-100/7">{p.map(e => <div className={c("relative flex min-h-12 w-full min-w-0 flex-wrap items-center gap-x-3 gap-y-1 py-2.5 text-left text-neutral-900 dark:text-neutral-100 transition-[background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] has-[[data-description]]:min-h-16", "justify-between")}><dt className={c("min-w-0 text-[15px]/[20px] font-bold text-neutral-900/62 dark:text-neutral-100/62", "shrink-0")}>{e.label}</dt><dd className={c("flex min-w-0 flex-wrap items-center gap-2 text-[15px]/[22px] font-medium text-neutral-900 dark:text-neutral-100 [overflow-wrap:anywhere]", "tabular-nums")}><span className={c(d, "truncate line-through")}>{e.from}</span><span aria-hidden="true" className={d}>→</span><span className="sr-only">to</span><span className={c("text-[15px]/[20px] font-bold", "truncate")}>{e.to}</span></dd></div>)}</dl></div><div aria-hidden="true" className={c("bg-linear-to-b from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 top-0 h-8", m.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={c("bg-linear-to-t from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 bottom-0 h-8", m.end ? "opacity-100" : "opacity-0")} /></div></div><footer className={c("flex min-h-14 flex-wrap items-center justify-end gap-2 px-4 py-2.5 pe-2.5", "shrink-0 flex-col-reverse max-sm:ps-2 sm:flex-row")}><button type="button" onClick={z} className={c("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] text-neutral-900 dark:text-neutral-100 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] active:not-disabled:translate-y-px active:not-disabled:shadow-[inset_0_1px_3px_rgb(84_62_32/0.16),0_0_0_1px_rgb(84_62_32/0.10)] dark:active:not-disabled:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14),0_0_0_1px_rgb(84_62_32/0.10)] dark:aria-expanded:bg-neutral-800 dark:aria-expanded:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] disabled:bg-none disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] disabled:text-neutral-900/40 disabled:shadow-none dark:disabled:bg-neutral-800/60 dark:disabled:text-neutral-100/40", x, "w-full sm:w-auto")}>Cancel</button><button type="button" onClick={() => {
                    j(!0), w(!1);
                  }} className={c(b, x, "w-full sm:w-auto")}>Apply change</button></footer></motion.div></div></>}</__mod_47962.N><div aria-live="polite" className="pointer-events-none absolute bottom-4 left-4 right-4 z-[60] flex flex-col gap-2 sm:left-auto sm:w-full sm:max-w-sm">{y && <div className={c("pointer-events-auto grid w-full grid-cols-[minmax(0,1fr)_auto_auto] items-start gap-x-3 overflow-hidden rounded-[calc(var(--rb-r-3xl,16px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] py-3.5 ps-4 pe-2 text-neutral-900 dark:text-neutral-100 shadow-[0_0_0_1px_rgb(84_62_32/0.08),0_24px_56px_-20px_rgb(84_62_32/0.34),0_6px_16px_-8px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.65),0_24px_56px_-16px_rgb(0_0_0/0.8)]", "transition-[opacity,scale] duration-[260ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] starting:scale-[0.94] starting:opacity-0 motion-reduce:transition-none motion-reduce:starting:scale-100")}><div className="min-w-0"><p className="text-[15px]/[20px] font-extrabold">Plan change scheduled</p><p className="mt-0.5 text-[14px]/[20px] font-medium text-neutral-900/78 dark:text-neutral-100/78">Scale takes effect Jul 1. You can undo it until then.</p></div></div>}</div></div>;
    },
    "app-dialog-2": function () {
      let e,
        r,
        a,
        {
          ref: c,
          edges: d,
          onScroll: b
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
                scrollHeight: n,
                clientHeight: l
              } = r;
              a({
                start: t > 1,
                end: Math.ceil(t + l) < n - 1
              });
            }, []);
          return (0, React.useEffect)(() => {
            t();
            let r = e.current,
              a = r?.ownerDocument.defaultView;
            if (!r || !a?.ResizeObserver) return;
            let n = new a.ResizeObserver(t);
            return n.observe(r), () => n.disconnect();
          }, [t]), {
            ref: e,
            edges: r,
            onScroll: t
          };
        }(),
        x = (0, __mod_50969.I)(),
        [u, p] = (0, React.useState)(!0),
        [h, y] = (0, React.useState)(""),
        j = (0, React.useRef)(!1),
        [N, C] = (0, React.useState)(!1),
        [S, z] = (0, React.useState)(!1),
        E = (0, React.useCallback)(() => p(!1), []),
        {
          panelRef: D,
          triggerRef: L
        } = (e = (0, React.useRef)(null), r = (0, React.useRef)(null), a = (0, React.useRef)(u), (0, React.useEffect)(() => {
          if (!u) return;
          let r = e.current,
            a = r?.ownerDocument ?? document;
          (w(r)[0] ?? r)?.focus({
            preventScroll: !0
          });
          let t = e => {
            if ("Escape" === e.key) {
              e.preventDefault(), E();
              return;
            }
            if ("Tab" !== e.key) return;
            let t = w(r);
            if (0 === t.length) return;
            let n = t[0],
              l = t[t.length - 1],
              o = a.activeElement;
            e.shiftKey && o === n ? (e.preventDefault(), l.focus({
              preventScroll: !0
            })) : e.shiftKey || o !== l || (e.preventDefault(), n.focus({
              preventScroll: !0
            }));
          };
          return a.addEventListener("keydown", t), () => a.removeEventListener("keydown", t);
        }, [u, E]), (0, React.useEffect)(() => {
          a.current && !u && r.current?.focus({
            preventScroll: !0
          }), a.current = u;
        }, [u]), {
          panelRef: e,
          triggerRef: r
        });
      (0, React.useEffect)(() => {
        if (!S) return;
        let e = setTimeout(() => z(!1), 2600);
        return () => clearTimeout(e);
      }, [S]);
      let A = "atlas-production" === h.trim(),
        R = !x && !N;
      return <div className={k("bg-white dark:bg-neutral-950", "text-neutral-900 dark:text-neutral-100", "relative flex h-full min-h-[480px] w-full items-center justify-center overflow-hidden p-4 sm:p-6")}><button ref={L} type="button" onPointerDown={() => {
          j.current = !1;
        }} onKeyDown={e => {
          ("Enter" === e.key || " " === e.key) && (j.current = !0);
        }} onClick={() => {
          y(""), z(!1), C(j.current), p(!0);
        }} className={k(m, "h-10 gap-2 rounded-[calc(var(--rb-r-full,999px))] px-5 text-[15px]/[20px] font-bold")}>Delete project</button><__mod_47962.N initial={!1}>{u && <><motion.div aria-hidden="true" className={k("bg-[oklch(28%_0.02_70/0.3)] dark:bg-neutral-950/70", "absolute inset-0 z-40")} onClick={E} initial={{
              opacity: 0
            }} animate={{
              opacity: 1
            }} exit={{
              opacity: 0,
              transition: {
                duration: .12,
                ease: v
              }
            }} transition={{
              duration: .18 * !!R,
              ease: v
            }} /><div className="pointer-events-none absolute inset-0 z-50 flex items-center justify-center p-4 sm:p-6"><motion.div ref={D} role="dialog" aria-modal="true" aria-labelledby="app-dialog-2-title" aria-describedby="app-dialog-2-desc" tabIndex={-1} className={k("flex max-h-[calc(100%-4rem)] flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 outline-none shadow-[0_0_0_1px_rgb(84_62_32/0.08),0_24px_56px_-20px_rgb(84_62_32/0.34),0_6px_16px_-8px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.65),0_24px_56px_-16px_rgb(0_0_0/0.8)]", "pointer-events-auto max-h-full w-full max-w-sm")} initial={{
                opacity: 0
              }} animate={{
                opacity: 1
              }} exit={{
                opacity: 0,
                transition: {
                  duration: .12,
                  ease: v
                }
              }} transition={{
                duration: .18 * !!R,
                ease: v
              }}><div className="mx-1 mt-1 flex min-h-0 flex-1 flex-col overflow-y-auto rounded-[calc(var(--rb-r-5xl,22px))] border border-transparent bg-white dark:bg-neutral-950 shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] [&:last-child]:mb-1"><header className={k("relative flex flex-col gap-2 px-5 pt-6 pb-6 has-[button]:pe-14 [&:has(+*)]:pb-0", "shrink-0")}><h2 id="app-dialog-2-title" className="text-[19px]/[24px] font-extrabold tracking-[-0.01em] text-neutral-900 dark:text-neutral-100">Delete atlas-production?</h2><p id="app-dialog-2-desc" className="text-[15px]/[22px] font-medium text-neutral-900/78 dark:text-neutral-100/78">This permanently removes the project and everything in it. It can't be undone.</p><div className="absolute end-4 top-4 flex"><button type="button" aria-label="Close dialog" onClick={E} className={k("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-transparent text-neutral-900 hover:not-disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] active:not-disabled:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] disabled:text-neutral-900/40 dark:text-neutral-100 dark:hover:not-disabled:bg-neutral-100/8 dark:active:not-disabled:bg-neutral-100/12 dark:aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:disabled:text-neutral-100/40", "size-8 rounded-[calc(var(--rb-r-full,999px))]")}><__mod_22728.n icon={__mod_89289.A} size={18} strokeWidth={2} aria-hidden="true" className="shrink-0" /></button></div></header><div className="relative min-h-0 flex-1"><div ref={c} onScroll={b} className={k("flex min-w-0 flex-col gap-5 p-5 pt-6 pb-6", "h-full overflow-y-auto")}><dl className={k("bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)]", "rounded-[var(--rb-r-4xl,18px)]", "grid grid-cols-2 gap-x-6 gap-y-4 px-4 py-3.5")}>{g.map(e => <div className="flex min-w-0 flex-col-reverse"><dt className={k("text-[13px]/[16px] font-semibold tabular-nums", "text-neutral-900/78 dark:text-neutral-100/78", "mt-0.5")}>{e.label}</dt><dd className={k("text-[15px]/[20px] font-bold", "tabular-nums")}>{e.value}</dd></div>)}</dl><div className="flex flex-col gap-2"><label htmlFor="app-dialog-2-confirm" className="flex w-fit items-center gap-2 text-[15px]/[20px] font-bold text-neutral-900 dark:text-neutral-100"><span>Type <code className="rounded-[calc(var(--rb-r-sm,6px))] bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] px-1.5 py-px font-mono text-[0.88em] leading-none text-neutral-900 dark:text-neutral-100 [box-decoration-break:clone] dark:bg-neutral-100/10">atlas-production</code> to confirm</span></label><div className={k("relative flex w-full min-w-0 cursor-text items-center rounded-[calc(var(--rb-r-xl,12px))] data-concentric:rounded-[var(--rb-r-5xl,22px)] border border-transparent bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] text-[15px]/[20px] font-medium text-neutral-900 transition-[border-color,box-shadow,background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:not-focus-within:not-has-[[aria-invalid=true]]:not-has-[input:disabled]:not-has-[input[readonly]]:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] focus-within:border-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] focus-within:bg-white focus-within:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] has-[[aria-invalid=true]]:border-[oklch(60%_0.236_26)] has-[[aria-invalid=true]]:bg-[oklch(97.5%_0.016_26)] has-[input:disabled]:cursor-not-allowed has-[input:disabled]:text-neutral-900/40 has-[input:disabled]:shadow-none has-[input[readonly]]:cursor-default has-[input[readonly]]:shadow-none dark:text-neutral-100 dark:hover:not-focus-within:not-has-[[aria-invalid=true]]:not-has-[input:disabled]:not-has-[input[readonly]]:bg-neutral-900 dark:focus-within:border-[var(--rb-accent,oklch(81%_0.16_163))] dark:focus-within:bg-neutral-900 dark:focus-within:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:has-[[aria-invalid=true]]:border-[oklch(65.2%_0.219_26)] dark:has-[[aria-invalid=true]]:bg-[oklch(26%_0.04_26)] dark:has-[input:disabled]:text-neutral-100/40", "h-10")}><input id="app-dialog-2-confirm" value={h} onChange={e => y(e.target.value)} autoComplete="off" spellCheck={!1} placeholder="atlas-production" className={k("h-full w-full min-w-0 flex-1 bg-transparent px-3.5 outline-none [[data-affix]+&]:ps-2 [&:has(+[data-affix])]:pe-2 placeholder:font-medium placeholder:text-neutral-900/55 disabled:cursor-not-allowed disabled:placeholder:text-neutral-900/30 dark:placeholder:text-neutral-100/55 dark:disabled:placeholder:text-neutral-100/30 dark:[color-scheme:dark]", "font-mono text-[13px]/[20px] tabular-nums")} /></div></div></div><div aria-hidden="true" className={k("bg-linear-to-b from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 top-0 h-8", d.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={k("bg-linear-to-t from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 bottom-0 h-8", d.end ? "opacity-100" : "opacity-0")} /></div></div><footer className={k("flex min-h-14 flex-wrap items-center justify-end gap-2 px-4 py-2.5 pe-2.5", "shrink-0 flex-col-reverse max-sm:ps-2 sm:flex-row")}><button type="button" onClick={E} className={k(m, f, "w-full sm:w-auto")}>Cancel</button><button type="button" disabled={!A} onClick={() => {
                    z(!0), p(!1);
                  }} className={k("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] text-[oklch(51%_0.18_26)] hover:not-disabled:bg-none hover:not-disabled:bg-[oklch(96%_0.03_26)] active:not-disabled:translate-y-px active:not-disabled:shadow-[inset_0_1px_3px_rgb(84_62_32/0.16),0_0_0_1px_rgb(84_62_32/0.10)] dark:active:not-disabled:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] disabled:bg-none disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] disabled:text-neutral-900/40 disabled:shadow-none dark:text-[oklch(80%_0.13_26)] dark:hover:not-disabled:bg-[oklch(32%_0.07_26)] dark:disabled:bg-neutral-800/60 dark:disabled:text-neutral-100/40", f, "w-full sm:w-auto")}>Delete project</button></footer></motion.div></div></>}</__mod_47962.N><div aria-live="polite" className="pointer-events-none absolute bottom-4 left-4 right-4 z-[60] flex flex-col gap-2 sm:left-auto sm:w-full sm:max-w-sm">{S && <div className={k("pointer-events-auto grid w-full grid-cols-[minmax(0,1fr)_auto_auto] items-start gap-x-3 overflow-hidden rounded-[calc(var(--rb-r-3xl,16px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] py-3.5 ps-4 pe-2 text-neutral-900 dark:text-neutral-100 shadow-[0_0_0_1px_rgb(84_62_32/0.08),0_24px_56px_-20px_rgb(84_62_32/0.34),0_6px_16px_-8px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.65),0_24px_56px_-16px_rgb(0_0_0/0.8)]", "transition-[opacity,scale] duration-[260ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] starting:scale-[0.94] starting:opacity-0 motion-reduce:transition-none motion-reduce:starting:scale-100")}><div className="min-w-0"><p className="text-[15px]/[20px] font-extrabold">Project deleted</p><p className="mt-0.5 text-[14px]/[20px] font-medium text-neutral-900/78 dark:text-neutral-100/78">atlas-production and its 1,204 deployments were removed.</p></div></div>}</div></div>;
    },
    "app-dialog-3": function () {
      let e,
        r,
        a,
        {
          ref: c,
          edges: d,
          onScroll: b
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
                scrollHeight: n,
                clientHeight: l
              } = r;
              a({
                start: t > 1,
                end: Math.ceil(t + l) < n - 1
              });
            }, []);
          return (0, React.useEffect)(() => {
            t();
            let r = e.current,
              a = r?.ownerDocument.defaultView;
            if (!r || !a?.ResizeObserver) return;
            let n = new a.ResizeObserver(t);
            return n.observe(r), () => n.disconnect();
          }, [t]), {
            ref: e,
            edges: r,
            onScroll: t
          };
        }(),
        x = (0, __mod_50969.I)(),
        [u, p] = (0, React.useState)(!0),
        [h, k] = (0, React.useState)(""),
        [m, f] = (0, React.useState)(""),
        [v, g] = (0, React.useState)(T[1]),
        [w, y] = (0, React.useState)(!1),
        [j, H] = (0, React.useState)(!1),
        K = (0, React.useRef)(!1),
        [F, V] = (0, React.useState)(!1),
        B = (0, React.useCallback)(() => p(!1), []),
        {
          panelRef: O,
          triggerRef: q
        } = (e = (0, React.useRef)(null), r = (0, React.useRef)(null), a = (0, React.useRef)(u), (0, React.useEffect)(() => {
          if (!u) return;
          let r = e.current,
            a = r?.ownerDocument ?? document;
          (I(r)[0] ?? r)?.focus({
            preventScroll: !0
          });
          let t = e => {
            if ("Escape" === e.key) {
              e.preventDefault(), B();
              return;
            }
            if ("Tab" !== e.key) return;
            let t = I(r);
            if (0 === t.length) return;
            let n = t[0],
              l = t[t.length - 1],
              o = a.activeElement;
            e.shiftKey && o === n ? (e.preventDefault(), l.focus({
              preventScroll: !0
            })) : e.shiftKey || o !== l || (e.preventDefault(), n.focus({
              preventScroll: !0
            }));
          };
          return a.addEventListener("keydown", t), () => a.removeEventListener("keydown", t);
        }, [u, B]), (0, React.useEffect)(() => {
          a.current && !u && r.current?.focus({
            preventScroll: !0
          }), a.current = u;
        }, [u]), {
          panelRef: e,
          triggerRef: r
        });
      (0, React.useEffect)(() => {
        if (!j) return;
        let e = setTimeout(() => H(!1), 2e3);
        return () => clearTimeout(e);
      }, [j]);
      let U = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(m.trim()),
        $ = h.trim().length > 0,
        J = w && !U,
        Y = w && !$,
        Z = !x && !F;
      return <div className={C("bg-white dark:bg-neutral-950", "text-neutral-900 dark:text-neutral-100", "relative flex h-full min-h-[640px] w-full items-center justify-center overflow-hidden p-4 sm:p-6")}><button ref={q} type="button" onPointerDown={() => {
          K.current = !1;
        }} onKeyDown={e => {
          ("Enter" === e.key || " " === e.key) && (K.current = !0);
        }} onClick={() => {
          k(""), f(""), g(T[1]), y(!1), H(!1), V(K.current), p(!0);
        }} className={C(S, "h-10 gap-2 rounded-[calc(var(--rb-r-full,999px))] px-5 text-[15px]/[20px] font-bold")}>Invite member</button><__mod_47962.N initial={!1}>{u && <><motion.div aria-hidden="true" className={C("bg-[oklch(28%_0.02_70/0.3)] dark:bg-neutral-950/70", "absolute inset-0 z-40")} onClick={B} initial={{
              opacity: 0
            }} animate={{
              opacity: 1
            }} exit={{
              opacity: 0,
              transition: {
                duration: .12,
                ease: W
              }
            }} transition={{
              duration: .18 * !!Z,
              ease: W
            }} /><div className="pointer-events-none absolute inset-0 z-50 flex items-center justify-center p-4 sm:p-6"><motion.div ref={O} role="dialog" aria-modal="true" aria-labelledby="app-dialog-3-title" tabIndex={-1} className={C("flex max-h-[calc(100%-4rem)] flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 outline-none shadow-[0_0_0_1px_rgb(84_62_32/0.08),0_24px_56px_-20px_rgb(84_62_32/0.34),0_6px_16px_-8px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.65),0_24px_56px_-16px_rgb(0_0_0/0.8)]", "pointer-events-auto max-h-full w-full max-w-md")} initial={{
                opacity: 0
              }} animate={{
                opacity: 1
              }} exit={{
                opacity: 0,
                transition: {
                  duration: .12,
                  ease: W
                }
              }} transition={{
                duration: .18 * !!Z,
                ease: W
              }}><div className="mx-1 mt-1 flex min-h-0 flex-1 flex-col overflow-y-auto rounded-[calc(var(--rb-r-5xl,22px))] border border-transparent bg-white dark:bg-neutral-950 shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] [&:last-child]:mb-1"><header className={C("relative flex flex-col gap-2 px-5 pt-6 pb-6 has-[button]:pe-14 [&:has(+*)]:pb-0", "shrink-0")}><h2 id="app-dialog-3-title" className="text-[19px]/[24px] font-extrabold tracking-[-0.01em] text-neutral-900 dark:text-neutral-100">Invite a member</h2><p className="text-[15px]/[22px] font-medium text-neutral-900/78 dark:text-neutral-100/78">They'll get an email invite to join the Northwind workspace.</p><div className="absolute end-4 top-4 flex"><button type="button" aria-label="Close dialog" onClick={B} className={C("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-transparent text-neutral-900 hover:not-disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] active:not-disabled:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] disabled:text-neutral-900/40 dark:text-neutral-100 dark:hover:not-disabled:bg-neutral-100/8 dark:active:not-disabled:bg-neutral-100/12 dark:aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:disabled:text-neutral-100/40", "size-8 rounded-[calc(var(--rb-r-full,999px))]")}><__mod_22728.n icon={__mod_89289.A} size={18} strokeWidth={2} aria-hidden="true" className="shrink-0" /></button></div></header><div className="relative min-h-0 flex-1"><form id="app-dialog-3-form" ref={c} onScroll={b} onSubmit={e => {
                      e.preventDefault(), y(!0), $ && U && (H(!0), p(!1));
                    }} noValidate={!0} className={C("flex min-w-0 flex-col gap-5 p-5 pt-6 pb-6", "h-full gap-6 overflow-y-auto")}><div className="flex flex-col gap-2"><label htmlFor="app-dialog-3-name" className={A}>Full name</label><div className={C(E, D)}><input id="app-dialog-3-name" value={h} onChange={e => k(e.target.value)} aria-invalid={Y} aria-describedby={Y ? "app-dialog-3-name-error" : void 0} placeholder="Jordan Ellis" className={L} /></div>{Y && <p id="app-dialog-3-name-error" className={M}><__mod_22728.n icon={__mod_27476.A} size={18} strokeWidth={2} aria-hidden="true" className="mt-px shrink-0" />Enter the member's name.</p>}</div><div className="flex flex-col gap-2"><label htmlFor="app-dialog-3-email" className={A}>Work email</label><div className={C(E, D)}><input id="app-dialog-3-email" type="email" value={m} onChange={e => f(e.target.value)} aria-invalid={J} aria-describedby={J ? "app-dialog-3-email-error" : "app-dialog-3-email-help"} placeholder="name@northwind.io" className={L} /></div>{J ? <p id="app-dialog-3-email-error" className={M}><__mod_22728.n icon={__mod_27476.A} size={18} strokeWidth={2} aria-hidden="true" className="mt-px shrink-0" />Enter a valid email, like name@northwind.io.</p> : <p id="app-dialog-3-email-help" className={R}>Invites expire after 7 days.</p>}</div><div className="flex flex-col gap-2"><label htmlFor="app-dialog-3-role" className={A}>Role</label><P id="app-dialog-3-role" value={v} onChange={g} options={T.map(e => ({
                          value: e,
                          label: e
                        }))} /><p className={R}>Editors can change content but not billing.</p></div></form><div aria-hidden="true" className={C("bg-linear-to-b from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 top-0 h-8", d.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={C("bg-linear-to-t from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 bottom-0 h-8", d.end ? "opacity-100" : "opacity-0")} /></div></div><footer className={C("flex min-h-14 flex-wrap items-center justify-end gap-2 px-4 py-2.5 pe-2.5", "shrink-0 flex-col-reverse max-sm:ps-2 sm:flex-row")}><button type="button" onClick={B} className={C("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] text-neutral-900 dark:text-neutral-100 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] active:not-disabled:translate-y-px active:not-disabled:shadow-[inset_0_1px_3px_rgb(84_62_32/0.16),0_0_0_1px_rgb(84_62_32/0.10)] dark:active:not-disabled:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14),0_0_0_1px_rgb(84_62_32/0.10)] dark:aria-expanded:bg-neutral-800 dark:aria-expanded:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] disabled:bg-none disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] disabled:text-neutral-900/40 disabled:shadow-none dark:disabled:bg-neutral-800/60 dark:disabled:text-neutral-100/40", z, "w-full sm:w-auto")}>Cancel</button><button type="submit" form="app-dialog-3-form" className={C(S, z, "w-full sm:w-auto")}>Send invite</button></footer></motion.div></div></>}</__mod_47962.N><div aria-live="polite" className="pointer-events-none absolute bottom-4 left-4 right-4 z-[60] flex flex-col gap-2 sm:left-auto sm:w-full sm:max-w-sm">{j && <div className={C("pointer-events-auto grid w-full grid-cols-[minmax(0,1fr)_auto_auto] items-start gap-x-3 overflow-hidden rounded-[calc(var(--rb-r-3xl,16px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] py-3.5 ps-4 pe-2 text-neutral-900 dark:text-neutral-100 shadow-[0_0_0_1px_rgb(84_62_32/0.08),0_24px_56px_-20px_rgb(84_62_32/0.34),0_6px_16px_-8px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.65),0_24px_56px_-16px_rgb(0_0_0/0.8)]", "transition-[opacity,scale] duration-[260ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] starting:scale-[0.94] starting:opacity-0 motion-reduce:transition-none motion-reduce:starting:scale-100")}><div className="min-w-0"><p className="text-[15px]/[20px] font-extrabold">Invite sent</p><p className="mt-0.5 text-[14px]/[20px] font-medium text-neutral-900/78 dark:text-neutral-100/78">They'll appear as pending until they accept.</p></div></div>}</div></div>;
    },
    "app-dialog-4": function () {
      let e,
        r,
        a,
        {
          ref: c,
          edges: d,
          onScroll: b
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
                scrollHeight: n,
                clientHeight: l
              } = r;
              a({
                start: t > 1,
                end: Math.ceil(t + l) < n - 1
              });
            }, []);
          return (0, React.useEffect)(() => {
            t();
            let r = e.current,
              a = r?.ownerDocument.defaultView;
            if (!r || !a?.ResizeObserver) return;
            let n = new a.ResizeObserver(t);
            return n.observe(r), () => n.disconnect();
          }, [t]), {
            ref: e,
            edges: r,
            onScroll: t
          };
        }(),
        x = (0, __mod_50969.I)(),
        [u, p] = (0, React.useState)(!0),
        [h, k] = (0, React.useState)(0),
        [m, f] = (0, React.useState)(!1),
        [v, g] = (0, React.useState)("Northwind"),
        [w, y] = (0, React.useState)(er[0]),
        [N, C] = (0, React.useState)(""),
        S = (0, React.useRef)(!1),
        [z, E] = (0, React.useState)(!1),
        D = (0, React.useCallback)(() => p(!1), []),
        {
          panelRef: L,
          triggerRef: A
        } = (e = (0, React.useRef)(null), r = (0, React.useRef)(null), a = (0, React.useRef)(u), (0, React.useEffect)(() => {
          if (!u) return;
          let r = e.current,
            a = r?.ownerDocument ?? document;
          (ea(r)[0] ?? r)?.focus({
            preventScroll: !0
          });
          let t = e => {
            if ("Escape" === e.key) {
              e.preventDefault(), D();
              return;
            }
            if ("Tab" !== e.key) return;
            let t = ea(r);
            if (0 === t.length) return;
            let n = t[0],
              l = t[t.length - 1],
              o = a.activeElement;
            e.shiftKey && o === n ? (e.preventDefault(), l.focus({
              preventScroll: !0
            })) : e.shiftKey || o !== l || (e.preventDefault(), n.focus({
              preventScroll: !0
            }));
          };
          return a.addEventListener("keydown", t), () => {
            a.removeEventListener("keydown", t);
          };
        }, [u, h, D]), (0, React.useEffect)(() => {
          a.current && !u && r.current?.focus({
            preventScroll: !0
          }), a.current = u;
        }, [u]), {
          panelRef: e,
          triggerRef: r
        });
      (0, React.useEffect)(() => {
        if (!m) return;
        let e = setTimeout(() => f(!1), 2e3);
        return () => clearTimeout(e);
      }, [m]);
      let R = h === ee.length - 1,
        M = v.trim().toLowerCase().replace(/\s+/g, "-") || "workspace",
        W = !x && !z;
      return <div className={K("bg-white dark:bg-neutral-950", "text-neutral-900 dark:text-neutral-100", "relative flex h-full min-h-[560px] w-full items-center justify-center overflow-hidden p-4 sm:p-6")}><button ref={A} type="button" onPointerDown={() => {
          S.current = !1;
        }} onKeyDown={e => {
          ("Enter" === e.key || " " === e.key) && (S.current = !0);
        }} onClick={() => {
          k(0), f(!1), E(S.current), p(!0);
        }} className={K(q, "h-10 gap-2 rounded-[calc(var(--rb-r-full,999px))] px-5 text-[15px]/[20px] font-bold")}>New workspace</button><__mod_47962.N initial={!1}>{u && <><motion.div aria-hidden="true" className={K("bg-[oklch(28%_0.02_70/0.3)] dark:bg-neutral-950/70", "absolute inset-0 z-40")} onClick={D} initial={{
              opacity: 0
            }} animate={{
              opacity: 1
            }} exit={{
              opacity: 0,
              transition: {
                duration: .12,
                ease: X
              }
            }} transition={{
              duration: .18 * !!W,
              ease: X
            }} /><div className="pointer-events-none absolute inset-0 z-50 flex items-center justify-center p-4 sm:p-6"><motion.div ref={L} role="dialog" aria-modal="true" aria-labelledby="app-dialog-4-title" tabIndex={-1} className={K("flex max-h-[calc(100%-4rem)] flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 outline-none shadow-[0_0_0_1px_rgb(84_62_32/0.08),0_24px_56px_-20px_rgb(84_62_32/0.34),0_6px_16px_-8px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.65),0_24px_56px_-16px_rgb(0_0_0/0.8)]", "pointer-events-auto max-h-full w-full max-w-md")} initial={{
                opacity: 0
              }} animate={{
                opacity: 1
              }} exit={{
                opacity: 0,
                transition: {
                  duration: .12,
                  ease: X
                }
              }} transition={{
                duration: .18 * !!W,
                ease: X
              }}><div className="mx-1 mt-1 flex min-h-0 flex-1 flex-col overflow-y-auto rounded-[calc(var(--rb-r-5xl,22px))] border border-transparent bg-white dark:bg-neutral-950 shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] [&:last-child]:mb-1"><header className={K("relative flex flex-col gap-2 px-5 pt-6 pb-6 has-[button]:pe-14 [&:has(+*)]:pb-0", "shrink-0")}><div className="min-w-0 flex-1"><p className={K("text-[13px]/[16px] font-semibold tabular-nums", V)}>Step {h + 1} of {ee.length}</p><h2 id="app-dialog-4-title" className={K("text-[19px]/[24px] font-extrabold tracking-[-0.01em] text-neutral-900 dark:text-neutral-100", "mt-0.5")}>{ee[h].title}</h2></div><div className="absolute end-4 top-6 flex"><button type="button" aria-label="Close dialog" onClick={D} className={K("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-transparent text-neutral-900 hover:not-disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] active:not-disabled:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] disabled:text-neutral-900/40 dark:text-neutral-100 dark:hover:not-disabled:bg-neutral-100/8 dark:active:not-disabled:bg-neutral-100/12 dark:aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:disabled:text-neutral-100/40", "size-8 rounded-[calc(var(--rb-r-full,999px))]")}><__mod_22728.n icon={__mod_89289.A} size={18} strokeWidth={2} aria-hidden="true" className="shrink-0" /></button></div></header><div className="mt-4 flex shrink-0 items-center gap-1.5 px-5" aria-hidden="true">{ee.map((e, r) => <span className={K("relative block h-2.5 w-full overflow-hidden rounded-[calc(var(--rb-r-full,999px))] bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] shadow-[inset_0_1px_2px_rgb(84_62_32/0.12)] dark:bg-neutral-100/12 dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.5)]", "flex-1")}><span className="block h-full rounded-[calc(var(--rb-r-full,999px))] bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_82%,black)] shadow-[inset_0_1px_0_rgb(255_255_255/0.35)] transition-[width] duration-[420ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] motion-reduce:transition-none dark:bg-[var(--rb-accent,oklch(81%_0.16_163))]" style={{
                        width: r <= h ? "100%" : "0%"
                      }} /></span>)}</div><div className="relative min-h-0 flex-1"><div ref={c} onScroll={b} className={K("flex min-w-0 flex-col gap-5 p-5 pt-6 pb-6", "h-full overflow-y-auto")}>{0 === h && <div className="flex flex-col gap-6"><div className="flex flex-col gap-2"><label htmlFor="app-dialog-4-name" className={Y}>Workspace name</label><div className={K("relative flex w-full min-w-0 cursor-text items-center rounded-[calc(var(--rb-r-xl,12px))] data-concentric:rounded-[var(--rb-r-5xl,22px)] border border-transparent bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] text-[15px]/[20px] font-medium text-neutral-900 transition-[border-color,box-shadow,background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:not-focus-within:not-has-[[aria-invalid=true]]:not-has-[input:disabled]:not-has-[input[readonly]]:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] focus-within:border-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] focus-within:bg-white focus-within:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] has-[[aria-invalid=true]]:border-[oklch(60%_0.236_26)] has-[[aria-invalid=true]]:bg-[oklch(97.5%_0.016_26)] has-[input:disabled]:cursor-not-allowed has-[input:disabled]:text-neutral-900/40 has-[input:disabled]:shadow-none has-[input[readonly]]:cursor-default has-[input[readonly]]:shadow-none dark:text-neutral-100 dark:hover:not-focus-within:not-has-[[aria-invalid=true]]:not-has-[input:disabled]:not-has-[input[readonly]]:bg-neutral-900 dark:focus-within:border-[var(--rb-accent,oklch(81%_0.16_163))] dark:focus-within:bg-neutral-900 dark:focus-within:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:has-[[aria-invalid=true]]:border-[oklch(65.2%_0.219_26)] dark:has-[[aria-invalid=true]]:bg-[oklch(26%_0.04_26)] dark:has-[input:disabled]:text-neutral-100/40", J)}><input id="app-dialog-4-name" value={v} onChange={e => g(e.target.value)} placeholder="Acme" className="h-full w-full min-w-0 flex-1 bg-transparent px-3.5 outline-none [[data-affix]+&]:ps-2 [&:has(+[data-affix])]:pe-2 placeholder:font-medium placeholder:text-neutral-900/55 disabled:cursor-not-allowed disabled:placeholder:text-neutral-900/30 dark:placeholder:text-neutral-100/55 dark:disabled:placeholder:text-neutral-100/30 dark:[color-scheme:dark]" /></div></div><div className="flex flex-col gap-2"><span className={Y}>Workspace URL</span><div className={K(F, O, J, "text-[15px]/[22px] font-medium", "flex items-center px-3")}><span className={V}>northwind.app/</span><span className={K(B, "truncate")}>{M}</span></div><p className={Z}>You can change this later in settings.</p></div></div>}{1 === h && <div className="flex flex-col gap-2"><span className={Y}>Primary region</span><p className={Z}>Choose where your workspace data is stored.</p><ul className="-mx-3 mt-2 flex flex-col gap-0.5">{er.map(e => {
                            let r = e === w;
                            return <li><button type="button" onClick={() => y(e)} aria-pressed={r} className={K("relative flex min-h-12 w-full min-w-0 flex-wrap items-center gap-x-3 gap-y-1 py-2.5 text-left text-neutral-900 dark:text-neutral-100 transition-[background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] has-[[data-description]]:min-h-16", r ? "bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] dark:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)]" : "cursor-pointer hover:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] dark:hover:bg-neutral-100/6 active:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] dark:active:bg-neutral-100/10", O, "focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))]", "justify-between px-3")}><span className={K(B, "truncate")}>{e}</span>{r && <__mod_22728.n icon={__mod_90987.A} size={18} strokeWidth={2} aria-hidden="true" className="shrink-0" />}</button></li>;
                          })}</ul></div>}{2 === h && <div className="space-y-4"><div className="flex flex-col gap-2"><label htmlFor="app-dialog-4-emails" className={Y}>Invite teammates</label><textarea id="app-dialog-4-emails" value={N} onChange={e => C(e.target.value)} rows={3} placeholder="priya@northwind.io, marcus@northwind.io" className={K("block max-h-[280px] min-h-[88px] w-full min-w-48 resize-none rounded-[calc(var(--rb-r-xl,12px))] border border-transparent bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] px-3.5 py-2.5 text-[15px]/[22px] font-medium text-neutral-900 outline-none field-sizing-content transition-[border-color,box-shadow,background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] placeholder:text-neutral-900/55 hover:not-focus-visible:not-aria-invalid:not-disabled:not-read-only:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] focus-visible:border-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] focus-visible:bg-white focus-visible:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-invalid:border-[oklch(60%_0.236_26)] aria-invalid:bg-[oklch(97.5%_0.016_26)] disabled:cursor-not-allowed disabled:text-neutral-900/40 disabled:shadow-none read-only:shadow-none dark:text-neutral-100 dark:placeholder:text-neutral-100/55 dark:hover:not-focus-visible:not-aria-invalid:not-disabled:not-read-only:bg-neutral-900 dark:focus-visible:border-[var(--rb-accent,oklch(81%_0.16_163))] dark:focus-visible:bg-neutral-900 dark:focus-visible:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-invalid:border-[oklch(65.2%_0.219_26)] dark:aria-invalid:bg-[oklch(26%_0.04_26)] dark:disabled:text-neutral-100/40", "min-h-[80px]")} /><p className={Z}>Separate addresses with a comma. You can skip this and invite people later.</p></div><dl className={K(F, O, "space-y-2 px-4 py-3")}><div className="flex items-center justify-between gap-3"><dt className={K(G, "shrink-0")}>Workspace</dt><dd className={Q}>{v.trim() || "Untitled"}</dd></div><div className="flex items-center justify-between gap-3"><dt className={K(G, "shrink-0")}>Region</dt><dd className={Q}>{w}</dd></div></dl></div>}</div><div aria-hidden="true" className={K("bg-linear-to-b from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 top-0 h-8", d.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={K("bg-linear-to-t from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 bottom-0 h-8", d.end ? "opacity-100" : "opacity-0")} /></div></div><footer className={K("flex min-h-14 flex-wrap items-center justify-end gap-2 px-4 py-2.5 pe-2.5", "shrink-0 flex-col-reverse max-sm:ps-2 sm:flex-row")}>{h > 0 ? <button type="button" onClick={() => k(e => Math.max(e - 1, 0))} className={K(U, $, "w-full sm:w-auto")}><__mod_22728.n icon={__mod_18976.A} size={18} strokeWidth={2} aria-hidden="true" className="shrink-0" />Back</button> : <button type="button" onClick={D} className={K(U, $, "w-full sm:w-auto")}>Cancel</button>}<button type="button" onClick={() => {
                    if (R) {
                      f(!0), p(!1);
                      return;
                    }
                    k(e => Math.min(e + 1, ee.length - 1));
                  }} className={K(q, $, "w-full sm:w-auto")}>{R ? "Create workspace" : "Continue"}</button></footer></motion.div></div></>}</__mod_47962.N><div aria-live="polite" className="pointer-events-none absolute bottom-4 left-4 right-4 z-[60] flex flex-col gap-2 sm:left-auto sm:w-full sm:max-w-sm">{m && <div className={K("pointer-events-auto grid w-full grid-cols-[minmax(0,1fr)_auto_auto] items-start gap-x-3 overflow-hidden rounded-[calc(var(--rb-r-3xl,16px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] py-3.5 ps-4 pe-2 text-neutral-900 dark:text-neutral-100 shadow-[0_0_0_1px_rgb(84_62_32/0.08),0_24px_56px_-20px_rgb(84_62_32/0.34),0_6px_16px_-8px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.65),0_24px_56px_-16px_rgb(0_0_0/0.8)]", "transition-[opacity,scale] duration-[260ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] starting:scale-[0.94] starting:opacity-0 motion-reduce:transition-none motion-reduce:starting:scale-100")}><div className="min-w-0"><p className="text-[15px]/[20px] font-extrabold">Workspace created</p><p className="mt-0.5 text-[14px]/[20px] font-medium text-neutral-900/78 dark:text-neutral-100/78">Redirecting you to {M}.</p></div></div>}</div></div>;
    },
    "app-dialog-5": function () {
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
                scrollHeight: n,
                clientHeight: l
              } = r;
              a({
                start: t > 1,
                end: Math.ceil(t + l) < n - 1
              });
            }, []);
          return (0, React.useEffect)(() => {
            t();
            let r = e.current,
              a = r?.ownerDocument.defaultView;
            if (!r || !a?.ResizeObserver) return;
            let n = new a.ResizeObserver(t);
            return n.observe(r), () => n.disconnect();
          }, [t]), {
            ref: e,
            edges: r,
            onScroll: t
          };
        }(),
        c = (0, __mod_50969.I)(),
        [d, b] = (0, React.useState)(!0),
        [x, u] = (0, React.useState)(!1),
        [p, h] = (0, React.useState)(!1),
        k = (0, React.useRef)(!1),
        [m, f] = (0, React.useState)(!1),
        [v, g] = (0, React.useState)(eh),
        [w, y] = (0, React.useState)(ek),
        [j, N] = (0, React.useState)(!0),
        [C, S] = (0, React.useState)(em),
        z = v !== eh || w !== ek || !0 !== j || C !== em,
        E = (0, React.useRef)(null),
        D = (0, React.useRef)(null),
        L = (0, React.useRef)(null),
        A = (0, React.useRef)(d),
        R = (0, React.useCallback)(() => {
          z ? u(!0) : b(!1);
        }, [z]);
      (0, React.useEffect)(() => {
        if (!d) return;
        let e = x ? D.current : E.current,
          r = e?.ownerDocument ?? document;
        (ev(e)[0] ?? e)?.focus({
          preventScroll: !0
        });
        let a = a => {
          if ("Escape" === a.key) {
            a.preventDefault(), x ? u(!1) : R();
            return;
          }
          if ("Tab" !== a.key) return;
          let t = ev(e);
          if (0 === t.length) return;
          let n = t[0],
            l = t[t.length - 1],
            o = r.activeElement;
          a.shiftKey && o === n ? (a.preventDefault(), l.focus({
            preventScroll: !0
          })) : a.shiftKey || o !== l || (a.preventDefault(), n.focus({
            preventScroll: !0
          }));
        };
        return r.addEventListener("keydown", a), () => r.removeEventListener("keydown", a);
      }, [d, x, R]), (0, React.useEffect)(() => {
        A.current && !d && L.current?.focus({
          preventScroll: !0
        }), A.current = d;
      }, [d]), (0, React.useEffect)(() => {
        if (!p) return;
        let e = setTimeout(() => h(!1), 2e3);
        return () => clearTimeout(e);
      }, [p]);
      let M = !c && !m,
        W = !c,
        T = M ? {
          initial: {
            opacity: 0,
            x: 8
          },
          animate: {
            opacity: 1,
            x: 0
          },
          exit: {
            opacity: 0,
            x: 8,
            transition: {
              duration: .12,
              ease: eu
            }
          },
          transition: {
            duration: .18,
            ease: eu
          }
        } : {
          initial: {
            opacity: 0
          },
          animate: {
            opacity: 1
          },
          exit: {
            opacity: 0,
            transition: {
              duration: .12,
              ease: eu
            }
          },
          transition: {
            duration: 0
          }
        };
      return <div className={et("bg-white dark:bg-neutral-950", "text-neutral-900 dark:text-neutral-100", "relative flex h-full min-h-[640px] w-full items-center justify-center overflow-hidden p-4 sm:p-6")}><button ref={L} type="button" onPointerDown={() => {
          k.current = !1;
        }} onKeyDown={e => {
          ("Enter" === e.key || " " === e.key) && (k.current = !0);
        }} onClick={() => {
          g(eh), y(ek), N(!0), S(em), u(!1), h(!1), f(k.current), b(!0);
        }} className={et(eo, "h-10 gap-2 rounded-[calc(var(--rb-r-full,999px))] px-5 text-[15px]/[20px] font-bold")}>Edit alert rule</button><__mod_47962.N initial={!1}>{d && <><motion.div aria-hidden="true" className={et(en, "absolute inset-0 z-30")} onClick={R} initial={{
              opacity: 0
            }} animate={{
              opacity: 1
            }} exit={{
              opacity: 0,
              transition: {
                duration: .12,
                ease: eu
              }
            }} transition={{
              duration: .18 * !!M,
              ease: eu
            }} /><motion.div ref={E} role="dialog" aria-modal="true" aria-labelledby="app-dialog-5-title" tabIndex={-1} className={et("flex h-full min-h-0 flex-col bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 outline-none shadow-[0_0_0_1px_rgb(84_62_32/0.08),0_24px_56px_-20px_rgb(84_62_32/0.34),0_6px_16px_-8px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.65),0_24px_56px_-16px_rgb(0_0_0/0.8)]", "absolute inset-y-0 right-0 z-40 w-full max-w-md overflow-hidden")} {...T}><div className={ec}><header className={et(ed, "shrink-0")}><h2 id="app-dialog-5-title" className={et(eb, "truncate")}>Edit alert rule</h2><div className="absolute end-4 top-4 flex"><button type="button" aria-label="Close drawer" onClick={R} className={et("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-transparent text-neutral-900 hover:not-disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] active:not-disabled:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] disabled:text-neutral-900/40 dark:text-neutral-100 dark:hover:not-disabled:bg-neutral-100/8 dark:active:not-disabled:bg-neutral-100/12 dark:aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:disabled:text-neutral-100/40", "size-8 rounded-[calc(var(--rb-r-full,999px))]")}><__mod_22728.n icon={__mod_89289.A} size={18} strokeWidth={2} aria-hidden="true" className="shrink-0" /></button></div></header><div className="relative min-h-0 flex-1"><div ref={e} onScroll={a} className={et("flex min-w-0 flex-col gap-5 p-5 pt-6 pb-6", "h-full gap-6 overflow-y-auto")}><div className="flex flex-col gap-2"><span className={e_}>Rule name</span><div className={et("bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)]", "rounded-[var(--rb-r-4xl,18px)]", es, el, "flex items-center px-3")}>Error rate spike</div></div><div className="flex flex-col gap-2"><label htmlFor="app-dialog-5-channel" className={e_}>Deliver to</label><ef id="app-dialog-5-channel" value={v} onChange={g} options={ep.map(e => ({
                        value: e,
                        label: e
                      }))} /></div><div className="flex flex-col gap-2"><label htmlFor="app-dialog-5-threshold" className={e_}>Trigger threshold</label><div className={et("relative flex w-full min-w-0 cursor-text items-center rounded-[calc(var(--rb-r-xl,12px))] data-concentric:rounded-[var(--rb-r-5xl,22px)] border border-transparent bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] text-[15px]/[20px] font-medium text-neutral-900 transition-[border-color,box-shadow,background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:not-focus-within:not-has-[[aria-invalid=true]]:not-has-[input:disabled]:not-has-[input[readonly]]:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] focus-within:border-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] focus-within:bg-white focus-within:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] has-[[aria-invalid=true]]:border-[oklch(60%_0.236_26)] has-[[aria-invalid=true]]:bg-[oklch(97.5%_0.016_26)] has-[input:disabled]:cursor-not-allowed has-[input:disabled]:text-neutral-900/40 has-[input:disabled]:shadow-none has-[input[readonly]]:cursor-default has-[input[readonly]]:shadow-none dark:text-neutral-100 dark:hover:not-focus-within:not-has-[[aria-invalid=true]]:not-has-[input:disabled]:not-has-[input[readonly]]:bg-neutral-900 dark:focus-within:border-[var(--rb-accent,oklch(81%_0.16_163))] dark:focus-within:bg-neutral-900 dark:focus-within:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:has-[[aria-invalid=true]]:border-[oklch(65.2%_0.219_26)] dark:has-[[aria-invalid=true]]:bg-[oklch(26%_0.04_26)] dark:has-[input:disabled]:text-neutral-100/40", es)}><input id="app-dialog-5-threshold" value={w} onChange={e => y(e.target.value)} className="h-full w-full min-w-0 flex-1 bg-transparent px-3.5 outline-none [[data-affix]+&]:ps-2 [&:has(+[data-affix])]:pe-2 placeholder:font-medium placeholder:text-neutral-900/55 disabled:cursor-not-allowed disabled:placeholder:text-neutral-900/30 dark:placeholder:text-neutral-100/55 dark:disabled:placeholder:text-neutral-100/30 dark:[color-scheme:dark]" /></div></div><div className="flex flex-col gap-2"><label htmlFor="app-dialog-5-note" className={e_}>Note</label><textarea id="app-dialog-5-note" value={C} onChange={e => S(e.target.value)} rows={3} className={et("block max-h-[280px] min-h-[88px] w-full min-w-48 resize-none rounded-[calc(var(--rb-r-xl,12px))] border border-transparent bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] px-3.5 py-2.5 text-[15px]/[22px] font-medium text-neutral-900 outline-none field-sizing-content transition-[border-color,box-shadow,background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] placeholder:text-neutral-900/55 hover:not-focus-visible:not-aria-invalid:not-disabled:not-read-only:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] focus-visible:border-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] focus-visible:bg-white focus-visible:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-invalid:border-[oklch(60%_0.236_26)] aria-invalid:bg-[oklch(97.5%_0.016_26)] disabled:cursor-not-allowed disabled:text-neutral-900/40 disabled:shadow-none read-only:shadow-none dark:text-neutral-100 dark:placeholder:text-neutral-100/55 dark:hover:not-focus-visible:not-aria-invalid:not-disabled:not-read-only:bg-neutral-900 dark:focus-visible:border-[var(--rb-accent,oklch(81%_0.16_163))] dark:focus-visible:bg-neutral-900 dark:focus-visible:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-invalid:border-[oklch(65.2%_0.219_26)] dark:aria-invalid:bg-[oklch(26%_0.04_26)] dark:disabled:text-neutral-100/40", "min-h-[80px]")} /></div><label className="flex cursor-pointer items-center justify-between gap-3"><span className="min-w-0"><span className={et(el, "block")}>Rule enabled</span><span className={et("max-w-[60ch] text-[14px]/[20px] font-medium text-neutral-900/78 dark:text-neutral-100/78", "mt-0.5 block")}>Turn off to pause without deleting.</span></span><button type="button" role="switch" aria-checked={j} aria-label="Rule enabled" onClick={() => N(e => !e)} className="group relative inline-flex h-6 w-10 shrink-0 cursor-pointer items-center rounded-full bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] p-0.5 shadow-[inset_0_1px_2px_rgb(84_62_32/0.14),inset_0_0_0_1px_rgb(84_62_32/0.05)] transition-[background-color,box-shadow,outline-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:aria-[checked=false]:not-disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_94%,black)] aria-checked:bg-[var(--rb-accent,oklch(84%_0.15_165))] aria-checked:shadow-[inset_0_1px_2px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_55%,black),inset_0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_75%,black)] disabled:cursor-not-allowed disabled:opacity-45 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:bg-neutral-100/16 dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6)] dark:hover:aria-[checked=false]:not-disabled:bg-neutral-100/24 dark:aria-checked:bg-[var(--rb-accent,oklch(81%_0.16_163))] dark:aria-checked:shadow-[inset_0_1px_2px_rgb(0_0_0/0.35)]"><span className="pointer-events-none block h-5 w-5 rounded-full bg-white shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_2px_rgb(84_62_32/0.10),0_3px_8px_-2px_rgb(84_62_32/0.20)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.12),0_0_0_1px_rgb(0_0_0/0.6),0_2px_6px_-1px_rgb(0_0_0/0.6)] transition-[translate,width] duration-[280ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] motion-reduce:transition-none group-active:w-6 group-aria-checked:translate-x-4 group-aria-checked:group-active:translate-x-3 group-disabled:shadow-none dark:bg-white" /></button></label></div><div aria-hidden="true" className={et("bg-linear-to-b from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 top-0 h-8", r.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={et("bg-linear-to-t from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 bottom-0 h-8", r.end ? "opacity-100" : "opacity-0")} /></div></div><footer className={et(ex, "shrink-0 flex-col-reverse max-sm:ps-2 sm:flex-row")}><button type="button" onClick={R} className={et(eo, ei, "w-full sm:w-auto")}>Cancel</button><button type="button" onClick={() => {
                  h(!0), b(!1);
                }} className={et("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_68%,white),var(--rb-accent,oklch(84%_0.15_165)))] text-[var(--rb-accent-fg,oklch(26%_0.06_168))] shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_4px_10px_-4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_80%,transparent)] hover:not-disabled:-translate-y-px hover:not-disabled:brightness-[1.04] hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_7px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_85%,transparent)] active:not-disabled:translate-y-px active:not-disabled:brightness-[0.98] active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_55%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] motion-reduce:hover:translate-y-0 disabled:opacity-45 disabled:shadow-none dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_78%,white),var(--rb-accent,oklch(81%_0.16_163)))] dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_6px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,transparent)] dark:hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_9px_22px_-8px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_60%,transparent)] dark:active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_45%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black)] dark:disabled:shadow-none", ei, "w-full sm:w-auto")}>Save changes</button></footer></motion.div></>}</__mod_47962.N><__mod_47962.N initial={!1}>{x && <><motion.div aria-hidden="true" className={et(en, "absolute inset-0 z-40")} initial={{
              opacity: 0
            }} animate={{
              opacity: 1
            }} exit={{
              opacity: 0,
              transition: {
                duration: .12,
                ease: eu
              }
            }} transition={{
              duration: .18 * !!W,
              ease: eu
            }} /><div className="pointer-events-none absolute inset-0 z-50 flex items-center justify-center p-4 sm:p-6"><motion.div ref={D} role="alertdialog" aria-modal="true" aria-labelledby="app-dialog-5-guard-title" aria-describedby="app-dialog-5-guard-desc" tabIndex={-1} className={et("flex max-h-[calc(100%-4rem)] flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 outline-none shadow-[0_0_0_1px_rgb(84_62_32/0.08),0_24px_56px_-20px_rgb(84_62_32/0.34),0_6px_16px_-8px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.65),0_24px_56px_-16px_rgb(0_0_0/0.8)]", "pointer-events-auto max-h-full w-full max-w-sm")} initial={{
                opacity: 0
              }} animate={{
                opacity: 1
              }} exit={{
                opacity: 0,
                transition: {
                  duration: .12,
                  ease: eu
                }
              }} transition={{
                duration: .18 * !!W,
                ease: eu
              }}><div className={ec}><div className={ed}><h2 id="app-dialog-5-guard-title" className={eb}>Discard your changes?</h2><p id="app-dialog-5-guard-desc" className="text-[15px]/[22px] font-medium text-neutral-900/78 dark:text-neutral-100/78">You've edited this rule. Closing now loses what you changed.</p></div></div><div className={et(ex, "shrink-0 flex-col-reverse max-sm:ps-2 sm:flex-row")}><button type="button" onClick={() => u(!1)} className={et(eo, ei, "w-full sm:w-auto")}>Keep editing</button><button type="button" onClick={() => {
                    u(!1), b(!1);
                  }} className={et("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] text-[oklch(51%_0.18_26)] hover:not-disabled:bg-none hover:not-disabled:bg-[oklch(96%_0.03_26)] active:not-disabled:translate-y-px active:not-disabled:shadow-[inset_0_1px_3px_rgb(84_62_32/0.16),0_0_0_1px_rgb(84_62_32/0.10)] dark:active:not-disabled:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] disabled:bg-none disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] disabled:text-neutral-900/40 disabled:shadow-none dark:text-[oklch(80%_0.13_26)] dark:hover:not-disabled:bg-[oklch(32%_0.07_26)] dark:disabled:bg-neutral-800/60 dark:disabled:text-neutral-100/40", ei, "w-full sm:w-auto")}>Discard changes</button></div></motion.div></div></>}</__mod_47962.N><div aria-live="polite" className="pointer-events-none absolute bottom-4 left-4 right-4 z-[60] flex flex-col gap-2 sm:left-auto sm:w-full sm:max-w-sm">{p && <div className={et("pointer-events-auto grid w-full grid-cols-[minmax(0,1fr)_auto_auto] items-start gap-x-3 overflow-hidden rounded-[calc(var(--rb-r-3xl,16px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] py-3.5 ps-4 pe-2 text-neutral-900 dark:text-neutral-100 shadow-[0_0_0_1px_rgb(84_62_32/0.08),0_24px_56px_-20px_rgb(84_62_32/0.34),0_6px_16px_-8px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.65),0_24px_56px_-16px_rgb(0_0_0/0.8)]", "transition-[opacity,scale] duration-[260ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] starting:scale-[0.94] starting:opacity-0 motion-reduce:transition-none motion-reduce:starting:scale-100")}><div className="min-w-0"><p className="text-[15px]/[20px] font-extrabold">Rule updated</p><p className="mt-0.5 text-[14px]/[20px] font-medium text-neutral-900/78 dark:text-neutral-100/78">Changes apply to the next alert.</p></div></div>}</div></div>;
    },
    "app-dialog-6": function () {
      let e,
        r,
        a,
        {
          ref: c,
          edges: d,
          onScroll: b
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
                scrollHeight: n,
                clientHeight: l
              } = r;
              a({
                start: t > 1,
                end: Math.ceil(t + l) < n - 1
              });
            }, []);
          return (0, React.useEffect)(() => {
            t();
            let r = e.current,
              a = r?.ownerDocument.defaultView;
            if (!r || !a?.ResizeObserver) return;
            let n = new a.ResizeObserver(t);
            return n.observe(r), () => n.disconnect();
          }, [t]), {
            ref: e,
            edges: r,
            onScroll: t
          };
        }(),
        x = (0, __mod_50969.I)(),
        [u, p] = (0, React.useState)(!0),
        [h, k] = (0, React.useState)(null),
        m = (0, React.useRef)(!1),
        [f, v] = (0, React.useState)(!1),
        g = (0, React.useCallback)(() => p(!1), []),
        {
          panelRef: w,
          triggerRef: y
        } = (e = (0, React.useRef)(null), r = (0, React.useRef)(null), a = (0, React.useRef)(u), (0, React.useEffect)(() => {
          if (!u) return;
          let r = e.current,
            a = r?.ownerDocument ?? document;
          (eO(r)[0] ?? r)?.focus({
            preventScroll: !0
          });
          let t = e => {
            if ("Escape" === e.key) {
              e.preventDefault(), g();
              return;
            }
            if ("Tab" !== e.key) return;
            let t = eO(r);
            if (0 === t.length) return;
            let n = t[0],
              l = t[t.length - 1],
              o = a.activeElement;
            e.shiftKey && o === n ? (e.preventDefault(), l.focus({
              preventScroll: !0
            })) : e.shiftKey || o !== l || (e.preventDefault(), n.focus({
              preventScroll: !0
            }));
          };
          return a.addEventListener("keydown", t), () => a.removeEventListener("keydown", t);
        }, [u, g]), (0, React.useEffect)(() => {
          a.current && !u && r.current?.focus({
            preventScroll: !0
          }), a.current = u;
        }, [u]), {
          panelRef: e,
          triggerRef: r
        });
      (0, React.useEffect)(() => {
        if (!h) return;
        let e = setTimeout(() => k(null), 2600);
        return () => clearTimeout(e);
      }, [h]);
      let j = !x && !f,
        N = j ? {
          initial: {
            opacity: 0,
            x: 8
          },
          animate: {
            opacity: 1,
            x: 0
          },
          exit: {
            opacity: 0,
            x: 8,
            transition: {
              duration: .12,
              ease: eL
            }
          },
          transition: {
            duration: .18,
            ease: eL
          }
        } : {
          initial: {
            opacity: 0
          },
          animate: {
            opacity: 1
          },
          exit: {
            opacity: 0,
            transition: {
              duration: .12,
              ease: eL
            }
          },
          transition: {
            duration: 0
          }
        };
      return <div className={ey("bg-white dark:bg-neutral-950", "text-neutral-900 dark:text-neutral-100", "relative flex h-full min-h-[720px] w-full items-center justify-center overflow-hidden p-4 sm:p-6")}><button ref={y} type="button" onPointerDown={() => {
          m.current = !1;
        }} onKeyDown={e => {
          ("Enter" === e.key || " " === e.key) && (m.current = !0);
        }} onClick={() => {
          k(null), v(m.current), p(!0);
        }} className={ey(eE, "h-10 gap-2 rounded-[calc(var(--rb-r-full,999px))] px-5 text-[15px]/[20px] font-bold")}>View evidence details</button><__mod_47962.N initial={!1}>{u && <><motion.div aria-hidden="true" className={ey("bg-[oklch(28%_0.02_70/0.3)] dark:bg-neutral-950/70", "absolute inset-0 z-30")} onClick={g} initial={{
              opacity: 0
            }} animate={{
              opacity: 1
            }} exit={{
              opacity: 0,
              transition: {
                duration: .12,
                ease: eL
              }
            }} transition={{
              duration: .18 * !!j,
              ease: eL
            }} /><motion.aside ref={w} role="dialog" aria-modal="true" aria-labelledby="app-dialog-6-title" tabIndex={-1} className={ey("flex h-full min-h-0 flex-col bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 outline-none shadow-[0_0_0_1px_rgb(84_62_32/0.08),0_24px_56px_-20px_rgb(84_62_32/0.34),0_6px_16px_-8px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.65),0_24px_56px_-16px_rgb(0_0_0/0.8)]", "absolute inset-y-0 right-0 z-40 w-full max-w-md overflow-hidden")} {...N}><div className="mx-1 mt-1 flex min-h-0 flex-1 flex-col overflow-y-auto rounded-[calc(var(--rb-r-5xl,22px))] border border-transparent bg-white dark:bg-neutral-950 shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] [&:last-child]:mb-1"><header className={ey("relative flex flex-col gap-2 px-5 pt-6 pb-6 has-[button]:pe-14 [&:has(+*)]:pb-0", "shrink-0")}><h2 id="app-dialog-6-title" className={ey("text-[19px]/[24px] font-extrabold tracking-[-0.01em] text-neutral-900 dark:text-neutral-100", "truncate")}>{eR}</h2><div className="absolute end-4 top-4 flex"><button type="button" aria-label="Close panel" onClick={g} className={ey("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-transparent text-neutral-900 hover:not-disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] active:not-disabled:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] disabled:text-neutral-900/40 dark:text-neutral-100 dark:hover:not-disabled:bg-neutral-100/8 dark:active:not-disabled:bg-neutral-100/12 dark:aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:disabled:text-neutral-100/40", "size-8 rounded-[calc(var(--rb-r-full,999px))]")}><__mod_22728.n icon={__mod_89289.A} size={18} strokeWidth={2} aria-hidden="true" className="shrink-0" /></button></div></header><div className="relative min-h-0 flex-1"><div ref={c} onScroll={b} className={ey("flex min-w-0 flex-col gap-5 p-5 pt-6 pb-6", "h-full overflow-y-auto")}><div><div className={ey(ej, "flex items-baseline gap-2")}><span className={ey("inline-flex items-start gap-1 text-[14px]/[20px] font-bold tabular-nums", "text-neutral-900/78 dark:text-neutral-100/78")}>{eK}</span><span className={ey(ez, "truncate")}>{eA}</span></div><p className={ey(eC, ej, "mt-2")}>{eF}</p></div><dl className="divide-y divide-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:divide-neutral-100/7">{[{
                        label: "Owner",
                        values: [eW]
                      }, {
                        label: "File",
                        values: [eM, eT]
                      }, {
                        label: "Updated",
                        values: [eP]
                      }, {
                        label: "Source",
                        values: [eI]
                      }, {
                        label: "Retention",
                        values: [eH]
                      }].map(e => <div className={ey("relative flex min-h-12 w-full min-w-0 flex-wrap items-center gap-x-3 gap-y-1 py-2.5 text-left text-neutral-900 dark:text-neutral-100 transition-[background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] has-[[data-description]]:min-h-16", "justify-between")}><dt className={ey("min-w-0 text-[15px]/[20px] font-bold text-neutral-900/62 dark:text-neutral-100/62", "shrink-0")}>{e.label}</dt><dd className={ey("flex min-w-0 flex-wrap items-center gap-2 text-[15px]/[22px] font-medium text-neutral-900 dark:text-neutral-100 [overflow-wrap:anywhere]", "tabular-nums")}>{e.values.map(e => <span>{e}</span>)}</dd></div>)}</dl><div><h3 className={ey(eS, eN)}>Controls covered</h3><ul className="mt-2 flex flex-wrap gap-1.5">{eV.map(e => <li className={ey("inline-flex h-5.5 min-w-5.5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden whitespace-nowrap rounded-[calc(var(--rb-r-full,999px))] px-2.5 text-[12px]/[16px] font-bold tabular-nums", "bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] text-neutral-900 dark:text-neutral-100 dark:bg-neutral-100/12")}><span className={ez}>{e.id}</span>{e.name}</li>)}</ul></div><div><h3 className={ey(eS, eN)}>History</h3><ol className="mt-2 space-y-2.5">{eB.map(e => <li className={ey(eC, "flex items-baseline gap-3")}><span className={ey(eN, "w-24 shrink-0 tabular-nums")}>{e.date}</span><span className="min-w-0">{e.label}</span></li>)}</ol></div></div><div aria-hidden="true" className={ey("bg-linear-to-b from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 top-0 h-8", d.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={ey("bg-linear-to-t from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 bottom-0 h-8", d.end ? "opacity-100" : "opacity-0")} /></div></div><footer className={ey("flex min-h-14 flex-wrap items-center justify-end gap-2 px-4 py-2.5 pe-2.5", "shrink-0 flex-col-reverse max-sm:ps-2 sm:flex-row")}><button type="button" onClick={() => k("Report archived")} className={ey(eE, eD, "w-full sm:w-auto")}><__mod_22728.n icon={__mod_22670.A} size={18} strokeWidth={2} aria-hidden="true" className="shrink-0" />Archive</button><button type="button" onClick={() => k("Download started")} className={ey("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_68%,white),var(--rb-accent,oklch(84%_0.15_165)))] text-[var(--rb-accent-fg,oklch(26%_0.06_168))] shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_4px_10px_-4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_80%,transparent)] hover:not-disabled:-translate-y-px hover:not-disabled:brightness-[1.04] hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_7px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_85%,transparent)] active:not-disabled:translate-y-px active:not-disabled:brightness-[0.98] active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_55%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] motion-reduce:hover:translate-y-0 disabled:opacity-45 disabled:shadow-none dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_78%,white),var(--rb-accent,oklch(81%_0.16_163)))] dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_6px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,transparent)] dark:hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_9px_22px_-8px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_60%,transparent)] dark:active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_45%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black)] dark:disabled:shadow-none", eD, "w-full sm:w-auto")}><__mod_22728.n icon={__mod_92752.A} size={18} strokeWidth={2} aria-hidden="true" className="shrink-0" />Download</button></footer></motion.aside></>}</__mod_47962.N><div aria-live="polite" className="pointer-events-none absolute bottom-4 left-4 right-4 z-[60] flex flex-col gap-2 sm:left-auto sm:w-full sm:max-w-sm">{h && <div className={ey("pointer-events-auto grid w-full grid-cols-[minmax(0,1fr)_auto_auto] items-start gap-x-3 overflow-hidden rounded-[calc(var(--rb-r-3xl,16px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] py-3.5 ps-4 pe-2 text-neutral-900 dark:text-neutral-100 shadow-[0_0_0_1px_rgb(84_62_32/0.08),0_24px_56px_-20px_rgb(84_62_32/0.34),0_6px_16px_-8px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.65),0_24px_56px_-16px_rgb(0_0_0/0.8)]", "transition-[opacity,scale] duration-[260ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] starting:scale-[0.94] starting:opacity-0 motion-reduce:transition-none motion-reduce:starting:scale-100")}><div className="min-w-0"><p className="text-[15px]/[20px] font-extrabold">{h}</p><p className={ey("mt-0.5 text-[14px]/[20px] font-medium text-neutral-900/78 dark:text-neutral-100/78", "flex flex-wrap gap-x-2")}><span>{eR}</span><span>{eM}</span><span>{eT}</span></p></div></div>}</div></div>;
    },
    "app-dialog-7": function () {
      let e = (0, __mod_50969.I)(),
        [r, a] = (0, React.useState)(!0),
        [_, c] = (0, React.useState)(0),
        [d, b] = (0, React.useState)(!1),
        [x, u] = (0, React.useState)(0),
        [p, h] = (0, React.useState)(null),
        k = (0, React.useRef)(!1),
        [m, f] = (0, React.useState)(!1),
        v = (0, React.useRef)(null),
        g = (0, React.useRef)(null),
        w = (0, React.useRef)([]),
        y = (0, React.useRef)([]),
        j = e5.findIndex(e => e.submenu),
        N = (e = !0) => {
          a(!1), b(!1), e && v.current?.focus({
            preventScroll: !0
          });
        };
      (0, React.useEffect)(() => {
        r && (d ? y.current[x]?.focus({
          preventScroll: !0
        }) : w.current[_]?.focus({
          preventScroll: !0
        }));
      }, [r, _, d, x]), (0, React.useEffect)(() => {
        if (!p) return;
        let e = setTimeout(() => h(null), 2e3);
        return () => clearTimeout(e);
      }, [p]);
      let C = !e && !m;
      return <div className={eQ("bg-white dark:bg-neutral-950", "text-neutral-900 dark:text-neutral-100", "relative flex h-full min-h-[640px] w-full items-center justify-center overflow-hidden p-4 sm:p-6")}><button ref={v} type="button" aria-haspopup="dialog" aria-expanded={r} onPointerDown={() => {
          k.current = !1;
        }} onKeyDown={e => {
          ("Enter" === e.key || " " === e.key) && (k.current = !0);
        }} onClick={() => r ? N(!1) : void (f(k.current), c(0), b(!1), h(null), a(!0))} className={eQ("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] text-neutral-900 dark:text-neutral-100 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] active:not-disabled:translate-y-px active:not-disabled:shadow-[inset_0_1px_3px_rgb(84_62_32/0.16),0_0_0_1px_rgb(84_62_32/0.10)] dark:active:not-disabled:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14),0_0_0_1px_rgb(84_62_32/0.10)] dark:aria-expanded:bg-neutral-800 dark:aria-expanded:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] disabled:bg-none disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] disabled:text-neutral-900/40 disabled:shadow-none dark:disabled:bg-neutral-800/60 dark:disabled:text-neutral-100/40", "h-10 gap-2 rounded-[calc(var(--rb-r-full,999px))] px-5 text-[15px]/[20px] font-bold")}>Report actions<__mod_22728.n icon={__mod_20148.A} size={18} strokeWidth={2} aria-hidden="true" className="shrink-0" /></button><__mod_47962.N initial={!1}>{r && <><motion.div aria-hidden="true" className={eQ("bg-[oklch(28%_0.02_70/0.3)] dark:bg-neutral-950/70", "absolute inset-0 z-40")} onClick={() => N()} initial={{
              opacity: 0
            }} animate={{
              opacity: 1
            }} exit={{
              opacity: 0,
              transition: {
                duration: .12,
                ease: e1
              }
            }} transition={{
              duration: .16 * !!C,
              ease: e1
            }} /><motion.div ref={g} role="dialog" aria-modal="true" aria-labelledby="app-dialog-7-title" onKeyDown={e => {
              if ("Tab" === e.key) {
                let r = Array.from(g.current?.querySelectorAll('a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])') ?? []);
                if (0 === r.length) return;
                let a = r[0],
                  t = r[r.length - 1],
                  n = g.current?.ownerDocument ?? document;
                e.shiftKey && n.activeElement === a ? (e.preventDefault(), t.focus({
                  preventScroll: !0
                })) : e.shiftKey || n.activeElement !== t || (e.preventDefault(), a.focus({
                  preventScroll: !0
                }));
                return;
              }
              d ? "ArrowDown" === e.key ? (e.preventDefault(), u(e => (e + 1) % e2.length)) : "ArrowUp" === e.key ? (e.preventDefault(), u(e => (e - 1 + e2.length) % e2.length)) : "ArrowLeft" === e.key || "Escape" === e.key ? (e.preventDefault(), b(!1)) : "Home" === e.key ? (e.preventDefault(), u(0)) : "End" === e.key ? (e.preventDefault(), u(e2.length - 1)) : ("Enter" === e.key || " " === e.key) && (e.preventDefault(), h(`Exported as ${e2[x]}`), N()) : "ArrowDown" === e.key ? (e.preventDefault(), c(e => (e + 1) % e5.length)) : "ArrowUp" === e.key ? (e.preventDefault(), c(e => (e - 1 + e5.length) % e5.length)) : "Home" === e.key ? (e.preventDefault(), c(0)) : "End" === e.key ? (e.preventDefault(), c(e5.length - 1)) : "Escape" === e.key ? (e.preventDefault(), N()) : ("ArrowRight" === e.key || "Enter" === e.key || " " === e.key) && e5[_].submenu ? (e.preventDefault(), u(0), b(!0)) : ("Enter" === e.key || " " === e.key) && (e.preventDefault(), h(`${e5[_].label} selected`), N());
            }} className="absolute left-1/2 top-[calc(50%+28px)] z-50 w-60 -translate-x-1/2" initial={{
              opacity: 0
            }} animate={{
              opacity: 1
            }} exit={{
              opacity: 0,
              transition: {
                duration: .12,
                ease: e1
              }
            }} transition={{
              duration: .16 * !!C,
              ease: e1
            }}><div aria-hidden="true" className={eQ(eX, "absolute inset-0")} /><h2 id="app-dialog-7-title" className="sr-only">Report actions</h2><div role="menu" aria-label="Report actions" className="relative m-px p-1">{e5.map((e, r) => {
                  let a = r === _ && !d;
                  return <div className="relative"><button ref={e => {
                      w.current[r] = e;
                    }} type="button" role="menuitem" aria-haspopup={e.submenu ? "menu" : void 0} aria-expanded={e.submenu ? d : void 0} tabIndex={a ? 0 : -1} data-highlighted={a ? "" : void 0} onMouseEnter={() => {
                      c(r), b(!!e.submenu);
                    }} onClick={() => {
                      if (e.submenu) {
                        u(0), b(!0);
                        return;
                      }
                      h(`${e.label} selected`), N();
                    }} className={e.danger ? "relative flex min-h-10 w-full cursor-default items-center gap-2.5 rounded-[calc(var(--rb-r-md,8px))] px-3 py-2 text-left text-[15px]/[20px] font-semibold outline-none select-none [&_svg]:shrink-0 text-[oklch(51%_0.18_26)] hover:bg-[oklch(96%_0.03_26)] focus-visible:bg-[oklch(96%_0.03_26)] data-[highlighted]:bg-[oklch(96%_0.03_26)] aria-disabled:cursor-not-allowed aria-disabled:text-neutral-900/40 dark:text-[oklch(78%_0.13_26)] dark:hover:bg-[oklch(30%_0.065_26)] dark:focus-visible:bg-[oklch(30%_0.065_26)] dark:data-[highlighted]:bg-[oklch(30%_0.065_26)] dark:aria-disabled:text-neutral-100/40" : e0}><__mod_22728.n icon={e.icon} size={18} strokeWidth={2} aria-hidden="true" /><span className="min-w-0 flex-1 truncate text-left">{e.label}</span>{e.shortcut && <span className={eQ("ms-auto ps-4", "text-[13px]/[16px] font-semibold tabular-nums", "text-neutral-900/62 dark:text-neutral-100/62")}>{e.shortcut}</span>}{e.submenu && <__mod_22728.n icon={__mod_5042.A} size={18} strokeWidth={2} aria-hidden="true" />}</button><__mod_47962.N>{e.submenu && d && r === j && <motion.div role="menu" aria-label="Export as" className={eQ(eX, "absolute left-1.5 right-1.5 top-full z-50 mt-1 sm:left-full sm:right-auto sm:-top-[5px] sm:ml-3 sm:mt-0 sm:w-40 sm:min-w-[160px]")} initial={{
                        opacity: 0
                      }} animate={{
                        opacity: 1
                      }} exit={{
                        opacity: 0,
                        transition: {
                          duration: .12,
                          ease: e1
                        }
                      }} transition={{
                        duration: .16 * !!C,
                        ease: e1
                      }}>{e2.map((e, r) => <button ref={e => {
                          y.current[r] = e;
                        }} type="button" role="menuitem" tabIndex={r === x ? 0 : -1} data-highlighted={r === x ? "" : void 0} onMouseEnter={() => u(r)} onClick={() => {
                          h(`Exported as ${e}`), N();
                        }} className={e0}>{e}</button>)}</motion.div>}</__mod_47962.N>{e6.has(e.id) && <div role="separator" className="mx-1 my-2 h-[1.5px] rounded-[calc(var(--rb-r-full,999px))] bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:bg-neutral-100/8" />}</div>;
                })}</div></motion.div></>}</__mod_47962.N><div aria-live="polite" className="pointer-events-none absolute bottom-4 left-4 right-4 z-[60] flex flex-col gap-2 sm:left-auto sm:w-full sm:max-w-sm">{p && <div className={eQ("pointer-events-auto grid w-full grid-cols-[minmax(0,1fr)_auto_auto] items-start gap-x-3 overflow-hidden rounded-[calc(var(--rb-r-3xl,16px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] py-3.5 ps-4 pe-2 text-neutral-900 dark:text-neutral-100 shadow-[0_0_0_1px_rgb(84_62_32/0.08),0_24px_56px_-20px_rgb(84_62_32/0.34),0_6px_16px_-8px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.65),0_24px_56px_-16px_rgb(0_0_0/0.8)]", "transition-[opacity,scale] duration-[260ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] starting:scale-[0.94] starting:opacity-0 motion-reduce:transition-none motion-reduce:starting:scale-100")}><div className="min-w-0"><p className="text-[15px]/[20px] font-extrabold">{p}</p><p className="mt-0.5 text-[14px]/[20px] font-medium text-neutral-900/78 dark:text-neutral-100/78">Applied to Weekly active users.</p></div></div>}</div></div>;
    }
  },
  e4 = {
    "app-dialog-1": 560,
    "app-dialog-2": 480,
    "app-dialog-3": 640,
    "app-dialog-4": 560,
    "app-dialog-5": 640,
    "app-dialog-6": 720,
    "app-dialog-7": 640
  };

export { e8 as components };
export { e4 as heights };

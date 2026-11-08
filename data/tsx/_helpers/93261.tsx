import { motion, AnimatePresence } from "motion/react";
import * as React from "react";
import * as __mod_50969 from "./50969";
import * as __mod_90650 from "./90650";
/**
 * 内部辅助模块 93261（自动内联）
 * 被页面区块共享使用。
 */

let o = (e, t, n) => Math.min(Math.max(e, t), n),
  u = "(hover: hover) and (pointer: fine)";
function d(e) {
  let t = window.matchMedia(u);
  return t.addEventListener("change", e), () => t.removeEventListener("change", e);
}
let c = () => window.matchMedia(u).matches;
function f({
  label: e = "Value",
  value: t,
  defaultValue: n = 0,
  onValueChange: u,
  min: f = 0,
  max: h = 1,
  step: p = .01,
  decimals: m = 2,
  suffix: x = "",
  ticks: g = 0,
  className: b
}) {
  let v = (0, __mod_50969.I)(),
    y = (0, React.useRef)(null),
    [w, j] = (0, React.useState)(n),
    [k, N] = (0, React.useState)(!1),
    [C, M] = (0, React.useState)(!1),
    S = (0, React.useRef)(null),
    P = (0, React.useSyncExternalStore)(d, c, () => !1),
    I = void 0 !== t,
    $ = I ? t : w,
    R = h - f,
    A = R > 0 ? ($ - f) / R * 100 : 0,
    E = k || P && C,
    z = (0, React.useCallback)(e => {
      let t = o(Math.round((e - f) / p) * p + f, f, h);
      I || j(t), u?.(t);
    }, [p, f, h, I, u]),
    L = (0, React.useCallback)(e => {
      let t = y.current;
      if (!t) return $;
      let n = t.getBoundingClientRect();
      return f + o((e - n.left) / n.width, 0, 1) * R;
    }, [f, R, $]),
    D = (0, React.useCallback)((e, t) => {
      try {
        y.current?.setPointerCapture(e);
      } catch {}
      N(!0), z(L(t));
    }, [L, z]),
    T = (0, React.useCallback)(e => {
      if ("touch" === e.pointerType) {
        S.current = {
          pointerId: e.pointerId,
          x: e.clientX,
          y: e.clientY
        };
        return;
      }
      e.preventDefault(), D(e.pointerId, e.clientX);
    }, [D]),
    O = (0, React.useCallback)(e => {
      let t = S.current;
      if (t && t.pointerId === e.pointerId) {
        let n = Math.abs(e.clientX - t.x),
          r = Math.abs(e.clientY - t.y);
        if (n < 6 && r < 6 || (S.current = null, r > n)) return;
        D(e.pointerId, e.clientX);
        return;
      }
      if (k) {
        if ("mouse" === e.pointerType && 0 === e.buttons) return void N(!1);
        z(L(e.clientX));
      }
    }, [k, D, L, z]),
    B = (0, React.useCallback)(e => {
      let t = S.current;
      t && t.pointerId === e.pointerId && (S.current = null, z(L(e.clientX))), N(!1);
    }, [L, z]),
    X = (0, React.useCallback)(() => {
      S.current = null, N(!1);
    }, []),
    U = (0, React.useCallback)(e => {
      let t;
      switch (e.key) {
        case "ArrowRight":
        case "ArrowUp":
          t = $ + p;
          break;
        case "ArrowLeft":
        case "ArrowDown":
          t = $ - p;
          break;
        case "Home":
          t = f;
          break;
        case "End":
          t = h;
          break;
        default:
          return;
      }
      e.preventDefault(), z(t);
    }, [$, p, f, h, z]);
  return <div className={(0, __mod_90650.cn)("relative w-full select-none", b)}><div aria-label={e} aria-valuemax={h} aria-valuemin={f} aria-valuenow={Number($.toFixed(m))} className="relative h-8 cursor-pointer overflow-hidden rounded-sm bg-muted/60 outline-offset-2 hover:bg-muted/80 focus-visible:outline-2 focus-visible:outline-ring" onKeyDown={U} onMouseEnter={() => M(!0)} onMouseLeave={() => M(!1)} onPointerDown={T} onPointerMove={O} onPointerUp={B} onPointerCancel={X} onLostPointerCapture={X} ref={y} role="slider" style={{
      touchAction: "pan-y"
    }} tabIndex={0}><div className="pointer-events-none absolute inset-y-0 left-0 rounded-sm bg-foreground/10" style={{
        width: `${A}%`,
        transition: k ? "none" : "width 150ms cubic-bezier(0.23, 1, 0.32, 1)"
      }} /><div aria-hidden={!0} className="pointer-events-none absolute inset-0 z-2">{Array.from({
          length: 7
        }, (e, t) => <div className="absolute top-1/2 h-2 w-px -translate-y-1/2 bg-foreground/10" style={{
          left: `${(t + 1) / 8 * 100}%`
        }} />)}</div>{g > 0 && <div className="pointer-events-none absolute inset-0 z-2">{Array.from({
          length: g
        }, (e, t) => {
          let n = (t + 1) / (g + 1) * 100;
          return <div className="absolute top-1/2 h-2.5 w-px -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground/25" style={{
            left: `${n}%`
          }} />;
        })}</div>}<div className="pointer-events-none absolute z-3 -ml-[5px]" style={{
        top: "50%",
        left: `${A}%`,
        transform: "translateX(-50%) translateY(-50%)",
        transition: k ? "none" : "left 150ms cubic-bezier(0.23, 1, 0.32, 1)"
      }}><motion.div animate={{
          opacity: E ? .8 : .2,
          scaleX: E ? 1 : .7,
          scaleY: E ? 1 : .7
        }} className="h-4 w-1 rounded-full bg-foreground/90" transition={v ? {
          duration: 0
        } : {
          type: "spring",
          duration: .25,
          bounce: .1
        }} /></div><div className="pointer-events-none absolute top-1/2 left-3 z-4 -translate-y-1/2 truncate pr-16 text-[12.5px] font-medium whitespace-nowrap text-foreground/90">{e}</div><div className="pointer-events-none absolute top-1/2 right-3 z-4 -translate-y-1/2 text-[12.5px] font-medium text-muted-foreground" style={{
        fontVariantNumeric: "tabular-nums"
      }}>{$.toFixed(m)}{x}</div></div></div>;
}

export { f as h };

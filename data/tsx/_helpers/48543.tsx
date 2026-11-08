import { Check, ChevronDown, Pipette, RotateCcw } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import * as React from "react";
import * as __mod_50969 from "./50969";
import * as __mod_47650 from "./47650";
import * as __mod_47962 from "./47962";
import * as __mod_39039 from "./39039";
import * as __mod_93261 from "./93261";
import * as __mod_90650 from "./90650";
import * as __mod_59581 from "./59581";
import * as __mod_46518 from "./46518";
/**
 * 内部辅助模块 48543（自动内联）
 * 被页面区块共享使用。
 */

let h = [.23, 1, .32, 1],
  p = 42 * Math.PI / 180,
  m = Math.PI / 2 + p,
  x = Math.PI / 2 - p,
  g = (e, t, n) => Math.min(Math.max(e, t), n);
function b(e) {
  let t = e.trim().replace(/^#/, "").toLowerCase();
  return /^[0-9a-f]{6}$/.test(t) ? `#${t}` : /^[0-9a-f]{3}$/.test(t) ? `#${t[0]}${t[0]}${t[1]}${t[1]}${t[2]}${t[2]}` : null;
}
let v = 1.206 / 1.03,
  y = e => .5 * (v * e - .206 + Math.sqrt((v * e - .206) ** 2 + .12 * v * e)),
  w = e => (e * e + .206 * e) / (v * (e + .03)),
  j = e => e >= .0031308 ? 1.055 * Math.pow(e, 1 / 2.4) - .055 : 12.92 * e,
  k = e => e >= .04045 ? Math.pow((e + .055) / 1.055, 2.4) : e / 12.92;
function N(e, t, n) {
  let r = (e + .3963377774 * t + .2158037573 * n) ** 3,
    s = (e - .1055613458 * t - .0638541728 * n) ** 3,
    a = (e - .0894841775 * t - 1.291485548 * n) ** 3;
  return [4.0767416621 * r - 3.3077115913 * s + .2309699292 * a, -1.2684380046 * r + 2.6097574011 * s - .3413193965 * a, -.0041960863 * r - .7034186147 * s + 1.707614701 * a];
}
function C(e, t) {
  let n,
    r,
    s,
    a,
    l,
    i,
    o,
    u,
    d,
    c,
    f,
    h,
    p,
    m,
    x,
    g,
    b,
    v = (-1.88170328 * e - .80936493 * t > 1 ? (n = 1.19086277, r = 1.76576728, s = .59662641, a = .75515197, l = .56771245, i = 4.0767416621, o = -3.3077115913, u = .2309699292) : 1.81444104 * e - 1.19445276 * t > 1 ? (n = .73956515, r = -.45954404, s = .08285427, a = .1254107, l = .14503204, i = -1.2684380046, o = 2.6097574011, u = -.3413193965) : (n = 1.35733652, r = -.00915799, s = -1.1513021, a = -.50559606, l = .00692167, i = -.0041960863, o = -.7034186147, u = 1.707614701), d = n + r * e + s * t + a * e * e + l * e * t, c = .3963377774 * e + .2158037573 * t, f = -.1055613458 * e - .0638541728 * t, h = -.0894841775 * e - 1.291485548 * t, g = i * (p = 1 + d * c) ** 3 + o * (m = 1 + d * f) ** 3 + u * (x = 1 + d * h) ** 3, d -= g * (b = 3 * (i * c * p ** 2 + o * f * m ** 2 + u * h * x ** 2)) / (b * b - .5 * g * (6 * (i * c * c * p + o * f * f * m + u * h * h * x)))),
    [y, w, j] = N(1, v * e, v * t),
    k = Math.cbrt(1 / Math.max(y, w, j));
  return [k, k * v];
}
let M = new Float64Array(2048),
  S = new Uint8Array(1024);
function P(e, t, n, r) {
  if (n <= 0) return [0, 0, 0];
  let s = Math.cos(2 * Math.PI * e),
    a = Math.sin(2 * Math.PI * e),
    [l, i] = r ?? C(s, a),
    o = i / (1 - l),
    u = .5 + o - o * (1 - .5 / (i / l)) * t,
    d = 1 - .5 * t / u,
    c = t * o * .5 / u,
    f = n * d,
    h = n * c,
    p = w(d),
    m = c * p / d,
    x = w(f);
  h = h * x / f, f = x;
  let [g, b, v] = N(p, s * m, a * m),
    y = Math.cbrt(1 / Math.max(g, b, v, 0));
  return N(f *= y, (h *= y) * s, h * a);
}
function I({
  h: e,
  s: t,
  v: n
}) {
  let r = P(e / 360, t / 100, n / 100),
    s = e => Math.round(255 * g(j(e), 0, 1)).toString(16).padStart(2, "0");
  return `#${s(r[0])}${s(r[1])}${s(r[2])}`;
}
function $(e) {
  let t,
    n,
    r,
    s = parseInt(e.slice(1), 16),
    a = k((s >> 16 & 255) / 255),
    l = k((s >> 8 & 255) / 255),
    i = k((255 & s) / 255),
    [o, u, d] = [.2104542553 * (t = Math.cbrt(.4122214708 * a + .5363325363 * l + .0514459929 * i)) + .793617785 * (n = Math.cbrt(.2119034982 * a + .6806995451 * l + .1073969566 * i)) - .0040720468 * (r = Math.cbrt(.0883024619 * a + .2817188376 * l + .6299787005 * i)), 1.9779984951 * t - 2.428592205 * n + .4505937099 * r, .0259040371 * t + .7827717662 * n - .808675766 * r];
  if (o <= 1e-6) return {
    h: 0,
    s: 0,
    v: 0
  };
  let c = Math.hypot(u, d);
  if (c < 1e-6) return {
    h: 0,
    s: 0,
    v: 100 * g(y(o), 0, 1)
  };
  let f = u / c,
    h = d / c,
    p = (Math.atan2(d, u) / (2 * Math.PI) + 1) % 1,
    [m, x] = C(f, h),
    b = x / (1 - m),
    v = b / (c + o * b),
    j = v * o,
    M = v * c,
    S = w(j),
    P = M * S / j,
    [I, $, R] = N(S, f * P, h * P),
    A = y(o / Math.cbrt(1 / Math.max(I, $, R, 0))) / j;
  return {
    h: 360 * p,
    s: 100 * g((.5 + b) * M / (.5 * b + b * (1 - .5 / (x / m)) * M), 0, 1),
    v: 100 * g(A, 0, 1)
  };
}
function R({
  hsv: e,
  onChange: t
}) {
  let n = (0, React.useRef)(null),
    s = (0, React.useRef)(null),
    [a, l] = (0, React.useState)(!1);
  (0, React.useEffect)(() => {
    let e = s.current,
      t = e?.getContext("2d");
    if (!e || !t) return;
    let n = Math.min(window.devicePixelRatio || 1, 2),
      r = Math.round(168 * n);
    e.width = r, e.height = r;
    let a = t.createImageData(r, r),
      l = a.data,
      i = r / 2,
      o = 75 * n;
    for (let e = 0; e < r; e++) for (let t = 0; t < r; t++) {
      let n = t + .5 - i,
        s = e + .5 - i,
        a = (Math.atan2(s, n) / (2 * Math.PI) + 1.25) % 1,
        u = P(a, g(Math.hypot(n, s) / o, 0, 1), 1, function (e) {
          let t = Math.min(1023, Math.floor((e % 1 + 1) % 1 * 1024));
          if (!S[t]) {
            let e = 2 * Math.PI * (t + .5) / 1024,
              [n, r] = C(Math.cos(e), Math.sin(e));
            M[2 * t] = n, M[2 * t + 1] = r, S[t] = 1;
          }
          return [M[2 * t], M[2 * t + 1]];
        }(a)),
        d = (e * r + t) * 4;
      l[d] = Math.round(255 * g(j(u[0]), 0, 1)), l[d + 1] = Math.round(255 * g(j(u[1]), 0, 1)), l[d + 2] = Math.round(255 * g(j(u[2]), 0, 1)), l[d + 3] = 255;
    }
    let u = document.createElement("canvas");
    u.width = r, u.height = r, u.getContext("2d")?.putImageData(a, 0, 0), t.filter = `blur(${5 * n}px)`, t.drawImage(u, 0, 0), t.filter = "none", t.globalCompositeOperation = "destination-in", t.beginPath(), t.arc(i, i, i - .5, 0, 2 * Math.PI), t.fill(), t.globalCompositeOperation = "source-over";
  }, []);
  let i = (0, React.useCallback)((r, s) => {
      let a = n.current?.getBoundingClientRect();
      if (!a) return;
      let l = r - a.left - 84,
        i = s - a.top - 84,
        o = (180 * Math.atan2(i, l) / Math.PI + 90 + 360) % 360,
        u = 100 * g(Math.hypot(l, i) / 75, 0, 1);
      t({
        ...e,
        h: o,
        s: u
      });
    }, [e, t, 75]),
    o = (e.h - 90) * Math.PI / 180,
    u = e.s / 100 * 75,
    d = 84 + u * Math.cos(o),
    f = 84 + u * Math.sin(o);
  return <div ref={n} role="slider" aria-label="Hue and saturation" aria-valuemin={0} aria-valuemax={360} aria-valuenow={Math.round(e.h)} aria-valuetext={`Hue ${Math.round(e.h)} degrees, saturation ${Math.round(e.s)}%`} tabIndex={0} onPointerDown={e => {
    e.preventDefault();
    try {
      n.current?.setPointerCapture(e.pointerId);
    } catch {}
    l(!0), i(e.clientX, e.clientY);
  }} onPointerMove={e => {
    if (a) {
      if ("mouse" === e.pointerType && 0 === e.buttons) return void l(!1);
      i(e.clientX, e.clientY);
    }
  }} onPointerUp={() => l(!1)} onPointerCancel={() => l(!1)} onLostPointerCapture={() => l(!1)} onKeyDown={n => {
    let r = 0,
      s = 0;
    if ("ArrowRight" === n.key) r = 2;else if ("ArrowLeft" === n.key) r = -2;else if ("ArrowUp" === n.key) s = 2;else {
      if ("ArrowDown" !== n.key) return;
      s = -2;
    }
    n.preventDefault(), t({
      ...e,
      h: (e.h + r + 360) % 360,
      s: g(e.s + s, 0, 100)
    });
  }} className="relative mx-auto cursor-pointer rounded-full outline-offset-2 focus-visible:outline-2 focus-visible:outline-ring" style={{
    width: 168,
    height: 168,
    touchAction: "none"
  }}><canvas ref={s} aria-hidden={!0} className="pointer-events-none absolute inset-0 size-full rounded-full ring-1 ring-foreground/10 ring-inset" /><div className="pointer-events-none absolute size-4 rounded-full border-2 border-white transition-transform duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] motion-reduce:transition-none" style={{
      left: d,
      top: f,
      background: I(e),
      boxShadow: "0 0 0 1px rgba(0,0,0,0.14), 0 1px 3px rgba(0,0,0,0.25)",
      transform: `translate(-50%, -50%) scale(${a ? 1.25 : 1})`
    }} /></div>;
}
function A(e) {
  let t = m + e * (x - m);
  return {
    x: 90 + 97 * Math.cos(t),
    y: 84 + 97 * Math.sin(t)
  };
}
function E({
  hsv: e,
  onChange: t
}) {
  let n = (0, React.useRef)(null),
    [s, a] = (0, React.useState)(!1),
    l = (0, React.useId)(),
    i = (0, React.useCallback)((r, s) => {
      let a = n.current?.getBoundingClientRect();
      if (!a) return;
      let l = r - a.left - 90,
        i = Math.atan2(s - a.top - 84, l);
      i < -Math.PI / 2 && (i += 2 * Math.PI);
      let o = g((m - i) / (m - x), 0, 1);
      t({
        ...e,
        v: 100 * o
      });
    }, [e, t]),
    o = A(0),
    u = A(1),
    d = `M ${o.x} ${o.y} A 97 97 0 0 0 ${u.x} ${u.y}`,
    f = A(e.v / 100);
  return <svg ref={n} role="slider" aria-label="Brightness" aria-valuemin={0} aria-valuemax={100} aria-valuenow={Math.round(e.v)} tabIndex={0} viewBox="0 0 180 192" onPointerDown={e => {
    e.preventDefault();
    try {
      n.current?.setPointerCapture(e.pointerId);
    } catch {}
    a(!0), i(e.clientX, e.clientY);
  }} onPointerMove={e => {
    if (s) {
      if ("mouse" === e.pointerType && 0 === e.buttons) return void a(!1);
      i(e.clientX, e.clientY);
    }
  }} onPointerUp={() => a(!1)} onPointerCancel={() => a(!1)} onLostPointerCapture={() => a(!1)} onKeyDown={n => {
    let r = 0;
    if ("ArrowRight" === n.key || "ArrowUp" === n.key) r = 2;else if ("ArrowLeft" === n.key || "ArrowDown" === n.key) r = -2;else if ("PageUp" === n.key) r = 10;else if ("PageDown" === n.key) r = -10;else if ("Home" === n.key) r = -e.v;else {
      if ("End" !== n.key) return;
      r = 100 - e.v;
    }
    n.preventDefault(), t({
      ...e,
      v: g(e.v + r, 0, 100)
    });
  }} className="absolute inset-0 cursor-pointer rounded-2xl outline-offset-2 focus-visible:outline-2 focus-visible:outline-ring" style={{
    width: 180,
    height: 192,
    touchAction: "none",
    pointerEvents: "none"
  }}><defs><linearGradient id={l} gradientUnits="userSpaceOnUse" x1={o.x} y1={o.y} x2={u.x} y2={u.y}><stop offset="0" stopColor="#000" /><stop offset="1" stopColor="#fff" /></linearGradient></defs><path d={d} fill="none" strokeWidth={16} strokeLinecap="round" className="stroke-foreground/15" /><path d={d} fill="none" stroke={`url(#${l})`} strokeWidth={14} strokeLinecap="round" style={{
      pointerEvents: "stroke"
    }} /><path d={d} fill="none" stroke="transparent" strokeWidth={24} strokeLinecap="round" style={{
      pointerEvents: "stroke"
    }} /><circle cx={f.x} cy={f.y} r={s ? 9 : 7.5} fill={I({
      h: e.h,
      s: 0,
      v: e.v
    })} stroke="#fff" strokeWidth={2} style={{
      pointerEvents: "none",
      transition: "r 150ms cubic-bezier(0.23, 1, 0.32, 1)",
      filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.35))"
    }} /></svg>;
}
let z = () => () => {};
function L({
  id: e,
  anchorRef: t,
  alignRef: n,
  value: s,
  onValueChange: a,
  onClose: i
}) {
  let d = (0, React.useRef)(null),
    [p, m] = (0, React.useState)(null),
    x = (0, __mod_50969.I)(),
    v = (0, React.useSyncExternalStore)(z, () => window.EyeDropper ?? null, () => null),
    y = b(s) ?? "#ffffff",
    [w, j] = (0, React.useState)(() => ({
      hsv: $(y),
      draft: y,
      seen: y
    })),
    k = b(s);
  k && k !== w.seen && j({
    hsv: $(k),
    draft: k,
    seen: k
  });
  let N = e => {
      let t = I(e);
      j({
        hsv: e,
        draft: t,
        seen: t
      }), a(t);
    },
    C = (0, React.useCallback)(() => {
      let e = n?.current ?? t.current,
        r = d.current;
      if (!e || !r) return;
      let s = e.getBoundingClientRect(),
        a = r.offsetHeight,
        l = g(s.right - 188, 8, window.innerWidth - 188 - 8),
        i = s.bottom + 8,
        o = "top right";
      i + a > window.innerHeight - 8 && (i = Math.max(8, s.top - 8 - a), o = "bottom right"), m({
        top: i,
        left: l,
        origin: o
      });
    }, [t, n]),
    M = (0, React.useCallback)(e => {
      d.current = e, e && C();
    }, [C]);
  return (0, React.useEffect)(() => (window.addEventListener("resize", C), window.addEventListener("scroll", C, !0), () => {
    window.removeEventListener("resize", C), window.removeEventListener("scroll", C, !0);
  }), [C]), (0, React.useEffect)(() => {
    d.current?.focus({
      preventScroll: !0
    });
  }, []), (0, React.useEffect)(() => {
    let e = e => {
      let n = e.target;
      d.current?.contains(n) || t.current?.contains(n) || i();
    };
    return document.addEventListener("pointerdown", e), () => document.removeEventListener("pointerdown", e);
  }, [t, i]), (0, __mod_47650.createPortal)(<motion.div ref={M} id={e} role="dialog" aria-label="Color picker" tabIndex={-1} initial={x ? {
    opacity: 0
  } : {
    opacity: 0,
    scale: .82
  }} animate={{
    opacity: 1,
    scale: 1
  }} exit={x ? {
    opacity: 0,
    transition: {
      duration: .12
    }
  } : {
    opacity: 0,
    scale: .9,
    transition: {
      duration: .14,
      ease: h
    }
  }} transition={{
    type: "spring",
    duration: .4,
    bounce: 0
  }} onKeyDown={e => {
    "Escape" === e.key && (e.stopPropagation(), i());
  }} className="fixed flex flex-col gap-2 rounded-t-[94px] rounded-b-2xl border border-border/60 bg-popover/95 px-3 pt-2.5 pb-3 shadow-xl backdrop-blur-xl outline-none" style={{
    zIndex: 1e6,
    width: 188,
    top: p?.top ?? -9999,
    left: p?.left ?? -9999,
    transformOrigin: p?.origin
  }}><div className="relative -mx-2" style={{
      width: 180,
      height: 192
    }}><motion.div initial={x ? {
        opacity: 0
      } : {
        opacity: 0,
        scale: .85
      }} animate={{
        opacity: 1,
        scale: 1
      }} transition={{
        type: "spring",
        duration: .45,
        bounce: 0,
        delay: .05
      }} className="absolute inset-x-0 top-0" style={{
        height: 168
      }}><R hsv={w.hsv} onChange={N} /></motion.div><div className="pointer-events-none absolute inset-0" style={{
        WebkitMaskImage: "radial-gradient(circle at 90px 84px, transparent 84px, black 85px)",
        maskImage: "radial-gradient(circle at 90px 84px, transparent 84px, black 85px)"
      }}><motion.div initial={x ? {
          opacity: 0
        } : {
          y: -18,
          scale: .85
        }} animate={{
          opacity: 1,
          y: 0,
          scale: 1
        }} transition={{
          type: "spring",
          duration: .5,
          bounce: 0,
          delay: .16
        }} className="pointer-events-none absolute inset-0"><E hsv={w.hsv} onChange={N} /></motion.div></div></div><div className="flex items-center gap-1.5"><input type="text" value={w.draft} onChange={e => j(t => ({
        ...t,
        draft: e.target.value
      }))} onBlur={() => {
        let e = b(w.draft);
        e && e !== I(w.hsv) ? N($(e)) : j(e => ({
          ...e,
          draft: I(e.hsv)
        }));
      }} onKeyDown={e => {
        "Enter" === e.key && e.currentTarget.blur();
      }} aria-label="Hex color" spellCheck={!1} autoComplete="off" className="h-7 w-full min-w-0 rounded-md bg-muted/70 px-2 text-[12px] font-medium text-foreground/90 outline-none transition-colors hover:bg-muted focus:bg-muted" style={{
        fontVariantNumeric: "tabular-nums"
      }} />{v && <button type="button" aria-label="Pick a color from the screen" title="Pick a color from the screen" onClick={() => {
        new v().open().then(e => {
          let t = b(e.sRGBHex);
          t && N($(t));
        }).catch(() => {});
      }} className="inline-flex size-7 shrink-0 cursor-pointer items-center justify-center rounded-md bg-muted/70 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"><Pipette aria-hidden={!0} className="size-3.5" /></button>}</div></motion.div>, document.body);
}
function D({
  label: e,
  value: t,
  onValueChange: n,
  displayValue: s,
  onReset: a
}) {
  let [l, o] = (0, React.useState)(!1),
    u = (0, React.useRef)(null),
    f = (0, React.useRef)(null),
    h = (0, React.useId)(),
    p = (0, React.useCallback)(() => {
      o(!1), u.current?.focus({
        preventScroll: !0
      });
    }, []);
  return <div ref={f} className="flex h-8 w-full shrink-0 items-center justify-between rounded-sm bg-muted/60 px-3 transition-colors select-none hover:bg-muted/80"><span className="text-[12.5px] font-medium text-foreground/90">{e}</span><span className="flex items-center gap-2">{a && <button type="button" onClick={a} aria-label={`Reset ${e}`} title="Reset" className="inline-flex size-5 cursor-pointer items-center justify-center rounded-full text-muted-foreground/60 transition-colors hover:bg-foreground/10 hover:text-foreground"><RotateCcw aria-hidden={!0} className="size-3" /></button>}<button ref={u} type="button" aria-expanded={l} aria-haspopup="dialog" aria-controls={l ? h : void 0} aria-label={`${e} color`} onClick={() => o(e => !e)} className="flex cursor-pointer items-center gap-2 transition-transform active:scale-95"><span className="text-[12.5px] font-medium text-muted-foreground" style={{
          fontVariantNumeric: "tabular-nums"
        }}>{s ?? t}</span><span className="size-5 rounded-nest-8 border border-border/70" style={{
          background: t
        }} /></button></span><__mod_47962.N>{l && <L id={h} anchorRef={u} alignRef={f} value={t} onValueChange={n} onClose={p} />}</__mod_47962.N></div>;
}
function F(e) {
  let t = (0, __mod_39039.k)();
  return n => {
    t?.markDirty(), e(n);
  };
}
let H = "relative flex h-8 w-full items-center justify-between gap-2 rounded-sm bg-muted/60 pl-3 text-left transition-colors hover:bg-muted/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
  Y = "min-w-0 flex-1 truncate text-[12.5px] font-medium text-foreground/90";
function W({
  title: e,
  min: t,
  max: n,
  step: s,
  value: l,
  valueUnit: i = "",
  onChange: o
}) {
  let u = F(o);
  return <__mod_93261.h label={e} min={t} max={n} step={s} value={l} decimals={function (e) {
    if (!Number.isFinite(e) || Math.floor(e) === e) return 0;
    let t = String(e);
    return t.includes("e-") ? Number(t.split("e-")[1]) : t.split(".")[1]?.length ?? 0;
  }(s)} suffix={i} onValueChange={u} />;
}
function K({
  title: e,
  checked: t,
  onChange: n
}) {
  let a = (0, React.useId)(),
    l = F(n);
  return <label htmlFor={a} className={(0, __mod_90650.cn)(H, "cursor-pointer pr-2")}><span className={Y}>{e}</span><__mod_59581.d id={a} checked={t} onCheckedChange={l} className="h-4 w-7 [&_[data-slot=switch-thumb]]:size-3.5" /></label>;
}
function V({
  title: e,
  value: t,
  options: n,
  onChange: s
}) {
  let a = (0, React.useId)(),
    l = F(s),
    i = n.find(e => e.value === t);
  return <__mod_46518.rI modal={!1}><__mod_46518.ty asChild={!0}><button id={a} type="button" aria-label={e} className={(0, __mod_90650.cn)(H, "cursor-pointer pr-2.5")}><span className={Y}>{e}</span><span className="flex min-w-0 shrink items-center gap-1"><span className={(0, __mod_90650.cn)("shrink-0 text-[12.5px] font-medium text-muted-foreground", "min-w-0 truncate")}>{i?.label ?? "Select..."}</span><ChevronDown className="size-3.5 shrink-0 text-muted-foreground/70" /></span></button></__mod_46518.ty><__mod_46518.SQ align="end" className="min-w-[var(--radix-dropdown-menu-trigger-width)]">{n.map(e => {
        let n = e.value === t;
        return <__mod_46518._2 onClick={() => l(e.value)} className={(0, __mod_90650.cn)("flex cursor-pointer items-center justify-between gap-2 text-[13px]", n && "bg-accent/60")}><span className="truncate">{e.label}</span>{n && <Check className="size-3.5 shrink-0 text-foreground/80" />}</__mod_46518._2>;
      })}</__mod_46518.SQ></__mod_46518.rI>;
}
function _({
  title: e,
  value: t,
  placeholder: n,
  onChange: s
}) {
  let a = (0, React.useId)(),
    l = F(s),
    [i, o] = (0, React.useState)(t),
    [u, d] = (0, React.useState)(t);
  return t !== u && (d(t), o(t)), <div className={(0, __mod_90650.cn)(H, "pr-1 focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-ring")}><label htmlFor={a} className={(0, __mod_90650.cn)(Y, "flex-none shrink-0")}>{e}</label><input id={a} value={i} onChange={e => {
      o(e.target.value), l(e.target.value);
    }} placeholder={n} className="h-6 min-w-0 flex-1 rounded-nest-8 bg-transparent px-2 text-right text-[12.5px] font-medium text-foreground placeholder:text-muted-foreground/60 focus:outline-none" /></div>;
}
function PreviewColor({
  title: e,
  value: t,
  onChange: n
}) {
  let s = F(n);
  return <D label={e} value={t} onValueChange={s} />;
}

export { _ as PreviewInput };
export { V as PreviewSelect };
export { W as PreviewSlider };
export { K as PreviewSwitch };
export { PreviewColor };

import { motion, AnimatePresence } from "motion/react";
import * as __mod_75272 from "../_helpers/75272";
import * as __mod_17192 from "../_helpers/17192";
import * as __mod_30595 from "../_helpers/30595";
import * as __mod_32923 from "../_helpers/32923";
import * as __mod_90650 from "../_helpers/90650";
import * as __mod_47962 from "../_helpers/47962";
import * as __mod_90761 from "../_helpers/90761";
import * as __mod_56388 from "../_helpers/56388";
/**
 * User Cursor
 * A cursor with a name tag, like a live collaborator
 * slug: user-cursor
 * category: cursor
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let m = ({
    color: e,
    size: t,
    ...n
  }) => <svg width={t} height={t} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden={!0} {...n}><path d="M5.2 3.4c-.7-.3-1.5.4-1.2 1.1l5.7 14.8c.3.8 1.5.8 1.8 0l2.4-6 6-2.4c.8-.3.8-1.5 0-1.8L5.2 3.4Z" fill={e} stroke="rgba(0,0,0,0.18)" strokeWidth={1.2} strokeLinejoin="round" /></svg>,
  h = {
    stiffness: 380,
    damping: 32,
    mass: .6
  },
  g = {
    stiffness: 220,
    damping: 26,
    mass: .7
  },
  x = (0, React.forwardRef)(function ({
    children: e,
    name: t = "Sophie",
    arrow: n,
    label: i,
    color: s = "#F39C2A",
    textColor: x = "#ffffff",
    size: v = 28,
    tilt: b = -14,
    directionAwareTilt: y = !1,
    labelTiltStrength: w = 8,
    trigger: S = "hover",
    showLabel: j = !0,
    hideNativeCursor: C = !0,
    fullScreen: N = !1,
    spring: k,
    labelSpring: E,
    offset: M,
    labelOffset: T,
    pressScale: z = .92,
    classNames: P,
    hideOnTouch: L = !0,
    zIndex: A = 50,
    className: F,
    style: G,
    onPointerEnter: R,
    onPointerLeave: I,
    onPointerMove: O,
    onPointerDown: V,
    onPointerUp: H,
    ...D
  }, _) {
    let B = (0, React.useRef)(null),
      [W, U] = (0, React.useState)("always" === S),
      [X, $] = (0, React.useState)(!1),
      [Q, J] = (0, React.useState)(!1),
      Y = M?.x ?? 0,
      q = M?.y ?? 0,
      Z = T?.x ?? .9 * v,
      K = T?.y ?? .2 * v + 6,
      ee = {
        ...h,
        ...k
      },
      et = {
        ...g,
        ...E
      },
      en = (0, __mod_75272.d)(-9999),
      er = (0, __mod_75272.d)(-9999),
      ea = (0, __mod_17192.z)(en, ee),
      ei = (0, __mod_17192.z)(er, ee),
      es = (0, __mod_17192.z)(en, et),
      el = (0, __mod_17192.z)(er, et),
      eo = (0, __mod_30595.V)(en),
      eu = (0, __mod_30595.V)(er),
      ec = (0, __mod_17192.z)(eo, {
        stiffness: 120,
        damping: 26,
        mass: .5
      }),
      ed = (0, __mod_17192.z)(eu, {
        stiffness: 120,
        damping: 26,
        mass: .5
      }),
      ep = (0, __mod_32923.G)([ec, ed], ([e, t]) => {
        if (!y) return b;
        let n = Math.hypot(e, t);
        if (n < 40) return b;
        let r = 180 * Math.atan2(t, e) / Math.PI - -138 - b;
        return b + (r = (r + 540) % 360 - 180) * Math.min(1, (n - 40) / 560);
      }),
      ef = (0, __mod_32923.G)([ec, ed], ([e, t]) => {
        if (!y) return 0;
        let n = Math.hypot(e, t);
        if (n < 40) return 0;
        let r = Math.min(1, (n - 40) / 560),
          a = Math.abs(e) / (n + .001);
        return Math.sign(t) * a * w * r + Math.sign(e) * (1 - a) * (.4 * w) * r;
      }),
      em = (0, __mod_17192.z)(ep, {
        stiffness: 220,
        damping: 24,
        mass: .5
      }),
      eh = (0, __mod_17192.z)(ef, {
        stiffness: 160,
        damping: 22,
        mass: .6
      });
    (0, React.useEffect)(() => {
      if (!L) return;
      let e = window.matchMedia("(pointer: coarse)"),
        t = () => J(e.matches);
      return t(), e.addEventListener?.("change", t), () => e.removeEventListener?.("change", t);
    }, [L]), (0, React.useEffect)(() => {
      if (!N || Q) return;
      let e = e => {
          en.set(e.clientX + Y), er.set(e.clientY + q), "always" !== S && (W || U(!0));
        },
        t = () => "press" === S && U(!0),
        n = () => {
          $(!1), "press" === S && U(!1);
        };
      return window.addEventListener("pointermove", e), window.addEventListener("pointerdown", t), window.addEventListener("pointerup", n), () => {
        window.removeEventListener("pointermove", e), window.removeEventListener("pointerdown", t), window.removeEventListener("pointerup", n);
      };
    }, [N, Q, Y, q, en, er, S, W]);
    let eg = (0, React.useCallback)(e => {
        N || "always" === S || U(!0), R?.(e);
      }, [N, S, R]),
      ex = (0, React.useCallback)(e => {
        N || "always" === S || U(!1), $(!1), I?.(e);
      }, [N, S, I]),
      ev = (0, React.useCallback)(e => {
        if (N) return void O?.(e);
        let t = B.current?.getBoundingClientRect();
        t && (en.set(e.clientX - t.left + Y), er.set(e.clientY - t.top + q)), O?.(e);
      }, [N, Y, q, O, en, er]),
      eb = (0, React.useCallback)(e => {
        $(!0), "press" === S && U(!0), V?.(e);
      }, [S, V]),
      ey = (0, React.useCallback)(e => {
        $(!1), "press" !== S || N || U(!1), H?.(e);
      }, [S, N, H]),
      ew = (0, React.useCallback)(e => {
        B.current = e, "function" == typeof _ ? _(e) : _ && (_.current = e);
      }, [_]),
      eS = "function" == typeof n ? n(s) : n ?? <m color={s} size={v} />,
      ej = {
        ...(C && !Q ? {
          cursor: "none"
        } : null),
        ...G
      },
      eC = N ? {
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: A
      } : {
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        zIndex: A
      },
      eN = !Q && W;
    return <div ref={ew} className={(0, __mod_90650.cn)("relative", N ? "contents" : null, P?.root, F)} style={ej} onPointerEnter={eg} onPointerLeave={ex} onPointerMove={ev} onPointerDown={eb} onPointerUp={ey} {...D}>{e}<div style={eC} aria-hidden={!0}><__mod_47962.N>{eN && <><motion.div className={(0, __mod_90650.cn)("absolute left-0 top-0 select-none will-change-transform", P?.cursor)} style={{
              x: ea,
              y: ei,
              rotate: em
            }} initial={{
              opacity: 0,
              scale: .6
            }} animate={{
              opacity: 1,
              scale: X ? z : 1
            }} exit={{
              opacity: 0,
              scale: .6
            }} transition={{
              duration: .18,
              ease: [.22, 1, .36, 1]
            }}><div className={(0, __mod_90650.cn)("block", P?.arrow)}>{eS}</div></motion.div>{j && <motion.div className={(0, __mod_90650.cn)("absolute left-0 top-0 select-none will-change-transform", P?.label)} style={{
              x: es,
              y: el,
              rotate: eh
            }} initial={{
              opacity: 0,
              scale: .7
            }} animate={{
              opacity: 1,
              scale: X ? z : 1
            }} exit={{
              opacity: 0,
              scale: .7
            }} transition={{
              duration: .22,
              ease: [.22, 1, .36, 1]
            }}>{i ?? <div className={(0, __mod_90650.cn)("inline-flex items-center rounded-full font-medium leading-none shadow-[0_2px_10px_rgba(0,0,0,0.15)]", P?.labelText)} style={{
                background: s,
                color: x,
                fontSize: `${.5 * v}px`,
                paddingInline: `${.43 * v}px`,
                paddingBlock: `${.18 * v}px`,
                transform: `translate(${Z}px, ${K}px)`
              }}>{t}</div>}</motion.div>}</>}</__mod_47962.N></div></div>;
  }),
  v = () => {
    let [e, t] = (0, __mod_90761.I)(),
      [n, l] = (0, React.useState)("Sophie"),
      [o, u] = (0, React.useState)("#F39C2A"),
      [c, d] = (0, React.useState)("#FFFFFF"),
      [p, f] = (0, React.useState)(28),
      [m, h] = (0, React.useState)(-14),
      [g, v] = (0, React.useState)("hover"),
      [b, y] = (0, React.useState)(!0),
      [w, S] = (0, React.useState)(!0),
      [j, C] = (0, React.useState)(!0),
      [N, k] = (0, React.useState)(8),
      [E, M] = (0, React.useState)(.92),
      [T, z] = (0, React.useState)(380),
      [P, L] = (0, React.useState)(32),
      [A, F] = (0, React.useState)(.6),
      [G, R] = (0, React.useState)(220),
      [I, O] = (0, React.useState)(26),
      [V, H] = (0, React.useState)(.7),
      D = (0, React.useMemo)(() => ({
        stiffness: T,
        damping: P,
        mass: A
      }), [T, P, A]),
      _ = (0, React.useMemo)(() => ({
        stiffness: G,
        damping: I,
        mass: V
      }), [G, I, V]);
    return <div><__mod_56388.Bg /><__mod_56388.VX><__mod_56388.Ec><__mod_56388.Ch onRefresh={t} minHeight={500}><x name={n} color={o} textColor={c} size={p} tilt={m} trigger={g} showLabel={b} hideNativeCursor={w} directionAwareTilt={j} labelTiltStrength={N} pressScale={E} spring={D} labelSpring={_} className="flex h-full w-full items-center justify-center"><div className="pointer-events-none select-none text-center"><p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Move your cursor here</p><p className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">Hello, {n}</p></div></x></__mod_56388.Ch><__mod_56388.IH><__mod_56388.bg title="Trigger" value={g} onChange={e => v(e)} options={[{
              label: "Hover",
              value: "hover"
            }, {
              label: "Always",
              value: "always"
            }, {
              label: "On Press",
              value: "press"
            }]} /><__mod_56388.tl title="Show Label" checked={b} onChange={y} /><__mod_56388.tl title="Hide Native Cursor" checked={w} onChange={S} /><__mod_56388.tl title="Direction-aware Tilt" checked={j} onChange={C} /><__mod_56388.yt title="Size" value={p} onChange={f} min={14} max={64} step={1} /><__mod_56388.yt title="Tilt" value={m} onChange={h} min={-45} max={45} step={1} /><__mod_56388.yt title="Press Scale" value={E} onChange={M} min={.6} max={1.2} step={.01} /><__mod_56388.yt title="Label Tilt Strength" value={N} onChange={k} min={0} max={30} step={.5} /><__mod_56388.yt title="Stiffness" value={T} onChange={z} min={40} max={800} step={10} /><__mod_56388.yt title="Damping" value={P} onChange={L} min={5} max={80} step={1} /><__mod_56388.yt title="Mass" value={A} onChange={F} min={.1} max={3} step={.05} /><__mod_56388.yt title="Stiffness" value={G} onChange={R} min={40} max={800} step={10} /><__mod_56388.yt title="Damping" value={I} onChange={O} min={5} max={80} step={1} /><__mod_56388.yt title="Mass" value={V} onChange={H} min={.1} max={3} step={.05} /><__mod_56388.W7 title="Accent" value={o} onChange={u} /><__mod_56388.W7 title="Label Text" value={c} onChange={d} /><label htmlFor="user-cursor-name" className="text-sm font-normal">Name</label><input id="user-cursor-name" type="text" value={n} onChange={e => l(e.target.value)} className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring" /></__mod_56388.IH><__mod_56388.Ub data={[{
            name: "name",
            type: "string",
            default: '"Sophie"',
            description: "Text rendered inside the label pill."
          }, {
            name: "arrow",
            type: "ReactNode | (color: string) => ReactNode",
            default: "-",
            description: "Replace the default arrow glyph with custom JSX."
          }, {
            name: "label",
            type: "ReactNode",
            default: "-",
            description: "Replace the default label pill entirely."
          }, {
            name: "color",
            type: "string",
            default: '"#F39C2A"',
            description: "Solid fill color used by the arrow and label."
          }, {
            name: "textColor",
            type: "string",
            default: '"#ffffff"',
            description: "Text color used inside the label pill."
          }, {
            name: "size",
            type: "number",
            default: "28",
            description: "Arrow size in px (square bounding box)."
          }, {
            name: "tilt",
            type: "number",
            default: "-14",
            description: "Visual rotation of the arrow in degrees. Acts as the resting angle when direction-aware tilt is on."
          }, {
            name: "directionAwareTilt",
            type: "boolean",
            default: "false",
            description: "Smoothly rotate the arrow + label to point in the direction of pointer movement."
          }, {
            name: "labelTiltStrength",
            type: "number",
            default: "8",
            description: "Maximum rotation applied to the label pill while moving (degrees)."
          }, {
            name: "trigger",
            type: '"always" | "hover" | "press"',
            default: '"hover"',
            description: "When the custom cursor becomes visible."
          }, {
            name: "showLabel",
            type: "boolean",
            default: "true",
            description: "Toggle the label pill on or off."
          }, {
            name: "hideNativeCursor",
            type: "boolean",
            default: "true",
            description: "Hide the OS cursor inside the surface."
          }, {
            name: "fullScreen",
            type: "boolean",
            default: "false",
            description: "Render the cursor in a fixed full-viewport layer so it follows everywhere."
          }, {
            name: "spring",
            type: "SpringOptions",
            default: "{ stiffness: 380, damping: 32, mass: 0.6 }",
            description: "Spring config for the arrow follower."
          }, {
            name: "labelSpring",
            type: "SpringOptions",
            default: "{ stiffness: 220, damping: 26, mass: 0.7 }",
            description: "Spring config for the label pill (defaults to laggier)."
          }, {
            name: "offset",
            type: "{ x?: number; y?: number }",
            default: "{ x: 0, y: 0 }",
            description: "Pixel offset from the pointer to the arrow tip."
          }, {
            name: "labelOffset",
            type: "{ x?: number; y?: number }",
            default: "{ x: size * 0.9, y: size * 0.2 + 6 }",
            description: "Pixel offset from the arrow tip to the label pill."
          }, {
            name: "pressScale",
            type: "number",
            default: "0.92",
            description: "Scale applied while the pointer is pressed."
          }, {
            name: "classNames",
            type: "{ root?, cursor?, arrow?, label?, labelText? }",
            default: "-",
            description: "Granular class overrides for each internal layer."
          }, {
            name: "hideOnTouch",
            type: "boolean",
            default: "true",
            description: "Skip rendering on coarse-pointer (touch) devices."
          }, {
            name: "zIndex",
            type: "number",
            default: "50",
            description: "z-index applied to the cursor layer."
          }]} /></__mod_56388.Ec><__mod_56388.lT><__mod_56388.Gv /></__mod_56388.lT></__mod_56388.VX></div>;
  };

export default v;

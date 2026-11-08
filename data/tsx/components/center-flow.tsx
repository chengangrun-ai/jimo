import * as __mod_30701 from "../_helpers/30701";
import * as __mod_90761 from "../_helpers/90761";
import * as __mod_56388 from "../_helpers/56388";
import * as __mod_48543 from "../_helpers/48543";
/**
 * Center Flow
 * A hub with pulses flowing out to connected nodes
 * slug: center-flow
 * category: animation
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let u = Array(8).fill({}),
  d = (e, t) => {
    let n = t.x - e.x,
      r = t.y - e.y;
    return `M ${e.x} ${e.y} C ${e.x + .4 * n} ${e.y + .1 * r}, ${e.x + .6 * n} ${t.y - .1 * r}, ${t.x} ${t.y}`;
  },
  c = ({
    nodeItems: e = u,
    centerContent: t,
    centerSize: n = 120,
    nodeSize: s = 60,
    pulseDuration: a = 5,
    pulseInterval: l = 10,
    pulseLength: c = .4,
    lineWidth: m = 2,
    pulseWidth: p = 1,
    pulseSoftness: h = 10,
    lineColor: x = "#1c1c1c",
    lineColorLight: f = "#e0e0e0",
    pulseColor: g = "#e724eb",
    pulseColorLight: v = "#e724eb",
    glowColor: w = "#e724eb",
    glowColorLight: b = "#e724eb",
    maxGlowIntensity: y = 25,
    glowDecay: C = .95,
    borderRadius: j = 35,
    nodeDistance: S = .7,
    disableBlinking: P = !1,
    className: k
  }) => {
    let $ = (0, React.useRef)(null),
      M = (0, React.useRef)(null),
      L = (0, React.useRef)(0),
      N = (0, React.useRef)(new Map()),
      {
        resolvedTheme: D
      } = (0, __mod_30701.D)(),
      I = "light" === D,
      A = Math.max(2, Math.min(14, e.length)),
      E = I ? f : x,
      G = I ? v : g,
      F = I ? b : w,
      T = I ? "rgba(255, 255, 255, 0.9)" : "rgba(10, 10, 10, 0.9)",
      z = I ? "rgba(255, 255, 255, 0.95)" : "rgba(10, 10, 10, 0.95)",
      [B, R] = (0, React.useState)({
        width: 800,
        height: 600
      }),
      [W, q] = (0, React.useState)([]),
      [O, U] = (0, React.useState)([]),
      H = (0, React.useMemo)(() => ((e, t) => {
        let n = Math.max(2, Math.min(14, e)),
          r = Array(n),
          i = 2 * Math.PI / n,
          s = 45 * t;
        for (let e = 0; e < n; e++) {
          let t = e * i - Math.PI / 2;
          r[e] = {
            x: 50 + Math.cos(t) * s,
            y: 50 + Math.sin(t) * s
          };
        }
        return r;
      })(A, S), [A, S]),
      _ = (0, React.useMemo)(() => ({
        x: B.width / 2,
        y: B.height / 2
      }), [B]),
      X = (0, React.useMemo)(() => H.map(e => ({
        x: e.x / 100 * B.width,
        y: e.y / 100 * B.height
      })), [H, B]),
      V = h / 10,
      J = 30 * V,
      K = 100 - 20 * V;
    (0, React.useEffect)(() => {
      let e = () => {
        if ($.current) {
          let {
            width: e,
            height: t
          } = $.current.getBoundingClientRect();
          R({
            width: e,
            height: t
          });
        }
      };
      return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e);
    }, []);
    let Q = (0, React.useCallback)(() => {
      P || (L.current = Math.min(L.current + .6 * y, y));
    }, [y, P]);
    (0, React.useEffect)(() => {
      let e,
        t = () => {
          if (M.current) {
            let e = L.current,
              t = 40 + e,
              n = .8 * t,
              r = 1.5 * t,
              i = Math.min(255, Math.floor(4 * t)).toString(16).padStart(2, "0");
            M.current.style.boxShadow = `0 0 ${r}px ${n}px ${F}40, 0 0 ${2 * r}px ${1.5 * n}px ${F}20, inset 0 0 ${.5 * r}px ${F}30`, M.current.style.borderColor = `${F}${i}`, L.current = e > .5 ? e * C : 0;
          }
          e = requestAnimationFrame(t);
        };
      return e = requestAnimationFrame(t), () => cancelAnimationFrame(e);
    }, [F, C]), (0, React.useEffect)(() => {
      let e = [],
        t = n => {
          q(e => [...e, {
            id: `${n}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
            pathIndex: n,
            startTime: Date.now()
          }]);
          let r = setTimeout(() => t(n), 1e3 * l * (.7 + .6 * Math.random()));
          e.push(r);
        };
      return X.forEach((n, r) => {
        let i = setTimeout(() => t(r), Math.random() * l * 1e3);
        e.push(i);
      }), () => e.forEach(clearTimeout);
    }, [X, l]), (0, React.useEffect)(() => {
      let e,
        t = 1e3 * a,
        n = () => {
          let r = Date.now();
          q(e => e.filter(e => !((r - e.startTime) / t >= 1) || (Q(), !1))), e = requestAnimationFrame(n);
        };
      return e = requestAnimationFrame(n), () => cancelAnimationFrame(e);
    }, [a, Q]), (0, React.useEffect)(() => {
      N.current.clear();
    }, [X, _]), (0, React.useEffect)(() => {
      let e,
        t = 1e3 * a,
        n = () => {
          let r = Date.now(),
            i = [];
          for (let e of W) {
            let n = X[e.pathIndex];
            if (!n) continue;
            let s = N.current.get(e.pathIndex);
            s || ((s = document.createElementNS("http://www.w3.org/2000/svg", "path")).setAttribute("d", d(n, _)), N.current.set(e.pathIndex, s));
            let a = Math.min((r - e.startTime) / t, 1);
            if (a <= 0 || a >= 1) continue;
            let l = s.getTotalLength(),
              o = Math.max(0, a - c),
              u = [];
            for (let e = 0; e <= 8; e++) {
              let t = s.getPointAtLength(l * (o + e / 8 * (a - o)));
              u.push({
                x: t.x,
                y: t.y
              });
            }
            if (u.length < 2) continue;
            let m = Math.min(1, a / .15) * Math.min(1, (1 - a) / .15);
            i.push({
              id: e.id,
              d: `M ${u[0].x} ${u[0].y}` + u.slice(1).map(e => ` L ${e.x} ${e.y}`).join(""),
              opacity: m,
              startPoint: u[0],
              endPoint: u[u.length - 1]
            });
          }
          U(i), e = requestAnimationFrame(n);
        };
      return e = requestAnimationFrame(n), () => cancelAnimationFrame(e);
    }, [W, X, _, a, c]);
    let Y = (0, React.useMemo)(() => ({
        borderRadius: .6 * j,
        background: T,
        backdropFilter: "blur(8px)",
        border: `1px solid ${I ? "rgba(0,0,0,0.1)" : "rgba(255,255,255,0.1)"}`,
        boxShadow: I ? "0 2px 8px rgba(0,0,0,0.1)" : "0 2px 8px rgba(0,0,0,0.3)"
      }), [j, I, T]),
      Z = (0, React.useMemo)(() => ({
        left: _.x,
        top: _.y,
        width: n,
        height: n,
        borderRadius: j,
        background: z,
        backdropFilter: "blur(12px)",
        border: `2px solid ${F}20`,
        boxShadow: `0 0 20px 5px ${F}10`
      }), [_.x, _.y, n, j, z, F]),
      ee = <svg viewBox="0 0 24 24" fill="none" className="w-full h-full" style={{
        color: G
      }}><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>,
      et = <div className="w-3 h-3 rounded-full" style={{
        background: `${G}40`,
        boxShadow: `0 0 8px ${G}30`
      }} />;
    return <div ref={$} className={`relative w-full h-full overflow-hidden ${k || ""}`} style={{
      background: "transparent"
    }}><svg className="absolute inset-0 w-full h-full pointer-events-none" style={{
        overflow: "visible"
      }}><defs><filter id="pulseGlow" x="-100%" y="-100%" width="300%" height="300%"><feGaussianBlur stdDeviation="3" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge></filter>{O.map(e => <linearGradient id={`pulse-grad-${e.id}`} x1={e.startPoint.x} y1={e.startPoint.y} x2={e.endPoint.x} y2={e.endPoint.y} gradientUnits="userSpaceOnUse"><stop offset="0%" stopColor={G} stopOpacity="0" /><stop offset={`${J}%`} stopColor={G} stopOpacity="1" /><stop offset={`${K}%`} stopColor={G} stopOpacity="1" /><stop offset="100%" stopColor={G} stopOpacity="0" /></linearGradient>)}</defs>{X.map((e, t) => <path d={d(e, _)} fill="none" stroke={E} strokeWidth={m} strokeLinecap="round" />)}{O.map(e => <g><path d={e.d} fill="none" stroke={`url(#pulse-grad-${e.id})`} strokeWidth={3 * p} strokeLinecap="round" opacity={.4 * e.opacity} filter="url(#pulseGlow)" /><path d={e.d} fill="none" stroke={`url(#pulse-grad-${e.id})`} strokeWidth={p} strokeLinecap="round" opacity={e.opacity} /></g>)}</svg>{X.map((t, n) => {
        let i = e[n],
          a = i?.content !== void 0;
        return <div className="absolute transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center" style={{
          left: t.x,
          top: t.y,
          width: s,
          height: s,
          ...Y
        }}>{a ? i.content : et}</div>;
      })}<div ref={M} className="absolute transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center transition-colors duration-300" style={Z}><div className="flex items-center justify-center" style={{
          width: .5 * n,
          height: .5 * n
        }}>{void 0 !== t ? t : ee}</div></div></div>;
  };
c.displayName = "CenterFlow";
let m = () => {
  let [e, t] = (0, __mod_90761.I)(),
    [n, o] = (0, React.useState)(8),
    [u, d] = (0, React.useState)(120),
    [m, p] = (0, React.useState)(60),
    [h, x] = (0, React.useState)(35),
    [f, g] = (0, React.useState)(.7),
    [v, w] = (0, React.useState)(5),
    [b, y] = (0, React.useState)(10),
    [C, j] = (0, React.useState)(.4),
    [S, P] = (0, React.useState)(10),
    [k, $] = (0, React.useState)(!1),
    [M, L] = (0, React.useState)(2),
    [N, D] = (0, React.useState)(1),
    [I, A] = (0, React.useState)(25),
    [E, G] = (0, React.useState)(.95),
    [F, T] = (0, React.useState)("#1c1c1c"),
    [z, B] = (0, React.useState)("#e0e0e0"),
    [R, W] = (0, React.useState)("#e724eb"),
    [q, O] = (0, React.useState)("#e724eb"),
    [U, H] = (0, React.useState)("#e724eb"),
    [_, X] = (0, React.useState)("#e724eb"),
    V = (0, React.useMemo)(() => Array.from({
      length: n
    }, () => ({})), [n]);
  return <div><__mod_56388.Bg /><__mod_56388.VX><__mod_56388.Ec><__mod_56388.Ch onRefresh={t} minHeight={500}><CScene nodeItems={V} centerSize={u} nodeSize={m} pulseDuration={v} pulseInterval={b} pulseLength={C} lineWidth={M} pulseWidth={N} pulseSoftness={S} lineColor={F} lineColorLight={z} pulseColor={R} pulseColorLight={q} glowColor={U} glowColorLight={_} maxGlowIntensity={I} glowDecay={E} borderRadius={h} nodeDistance={f} disableBlinking={k} /></__mod_56388.Ch><__mod_56388.IH><__mod_48543.PreviewSlider title="Node Count (demo only)" value={n} onChange={o} min={2} max={14} step={1} /><__mod_48543.PreviewSlider title="Center Size" value={u} onChange={d} min={60} max={200} step={10} /><__mod_48543.PreviewSlider title="Node Size" value={m} onChange={p} min={20} max={100} step={5} /><__mod_48543.PreviewSlider title="Border Radius" value={h} onChange={x} min={0} max={70} step={5} /><__mod_48543.PreviewSlider title="Node Distance" value={f} onChange={g} min={.3} max={1} step={.05} /><__mod_48543.PreviewSlider title="Pulse Duration" value={v} onChange={w} min={1} max={10} step={.5} /><__mod_48543.PreviewSlider title="Pulse Interval" value={b} onChange={y} min={1} max={15} step={.5} /><__mod_48543.PreviewSlider title="Pulse Length" value={C} onChange={j} min={.05} max={.5} step={.01} /><__mod_48543.PreviewSlider title="Pulse Softness" value={S} onChange={P} min={0} max={10} step={1} /><__mod_48543.PreviewSlider title="Line Width" value={M} onChange={L} min={.5} max={5} step={.5} /><__mod_48543.PreviewSlider title="Pulse Width" value={N} onChange={D} min={.5} max={5} step={.5} /><__mod_48543.PreviewSlider title="Glow Intensity" value={I} onChange={A} min={0} max={100} step={5} /><__mod_48543.PreviewSlider title="Glow Decay" value={E} onChange={G} min={.8} max={.99} step={.01} /><__mod_48543.PreviewSwitch title="Disable Blinking" checked={k} onChange={$} /><__mod_48543.PreviewColor title="Line Color (Dark)" value={F} onChange={T} /><__mod_48543.PreviewColor title="Line Color (Light)" value={z} onChange={B} /><__mod_48543.PreviewColor title="Pulse Color (Dark)" value={R} onChange={W} /><__mod_48543.PreviewColor title="Pulse Color (Light)" value={q} onChange={O} /><__mod_48543.PreviewColor title="Glow Color (Dark)" value={U} onChange={H} /><__mod_48543.PreviewColor title="Glow Color (Light)" value={_} onChange={X} /></__mod_56388.IH><__mod_56388.Ub data={[{
          name: "nodeItems",
          type: "NodeItem[]",
          default: "Array(9).fill({})",
          description: "Array of node items - each can contain custom content (JSX, icons, images, etc.). Node count is derived from array length."
        }, {
          name: "centerContent",
          type: "ReactNode",
          default: "undefined",
          description: "Custom content to render inside the center node"
        }, {
          name: "centerSize",
          type: "number",
          default: "120",
          description: "Center square size in pixels"
        }, {
          name: "nodeSize",
          type: "number",
          default: "60",
          description: "Outer node size in pixels"
        }, {
          name: "pulseDuration",
          type: "number",
          default: "5",
          description: "Pulse travel duration in seconds"
        }, {
          name: "pulseInterval",
          type: "number",
          default: "10",
          description: "Average delay between pulses spawning"
        }, {
          name: "pulseLength",
          type: "number",
          default: "0.4",
          description: "Pulse line length as percentage of path (0-1)"
        }, {
          name: "lineWidth",
          type: "number",
          default: "2",
          description: "Line stroke width"
        }, {
          name: "pulseWidth",
          type: "number",
          default: "1",
          description: "Pulse line stroke width"
        }, {
          name: "pulseSoftness",
          type: "number",
          default: "10",
          description: "Pulse blur/softness (0-10)"
        }, {
          name: "lineColor",
          type: "string",
          default: '"#1c1c1c"',
          description: "Line color (dark mode)"
        }, {
          name: "lineColorLight",
          type: "string",
          default: '"#e0e0e0"',
          description: "Line color (light mode)"
        }, {
          name: "pulseColor",
          type: "string",
          default: '"#e724eb"',
          description: "Pulse color (dark mode)"
        }, {
          name: "pulseColorLight",
          type: "string",
          default: '"#e724eb"',
          description: "Pulse color (light mode)"
        }, {
          name: "glowColor",
          type: "string",
          default: '"#e724eb"',
          description: "Center glow color (dark mode)"
        }, {
          name: "glowColorLight",
          type: "string",
          default: '"#e724eb"',
          description: "Center glow color (light mode)"
        }, {
          name: "maxGlowIntensity",
          type: "number",
          default: "25",
          description: "Maximum glow intensity"
        }, {
          name: "glowDecay",
          type: "number",
          default: "0.95",
          description: "Glow decay speed (higher = faster decay)"
        }, {
          name: "borderRadius",
          type: "number",
          default: "35",
          description: "Border radius for center square"
        }, {
          name: "nodeDistance",
          type: "number",
          default: "0.7",
          description: "Distance of nodes from center as percentage (0-1)"
        }, {
          name: "disableBlinking",
          type: "boolean",
          default: "false",
          description: "Disable glow intensification when pulses arrive"
        }, {
          name: "className",
          type: "string",
          default: '""',
          description: "Additional CSS classes for the container"
        }]} /></__mod_56388.Ec><__mod_56388.lT><__mod_56388.Gv /></__mod_56388.lT></__mod_56388.VX></div>;
};

const CScene: any = c;

export default m;

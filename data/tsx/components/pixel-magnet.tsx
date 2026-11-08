import * as __mod_81712 from "../_helpers/81712";
import * as __mod_2253 from "../_helpers/2253";
import * as __mod_90650 from "../_helpers/90650";
import * as __mod_3907 from "../_helpers/3907";
import * as __mod_90761 from "../_helpers/90761";
import * as __mod_30701 from "../_helpers/30701";
import * as __mod_56388 from "../_helpers/56388";
/**
 * Pixel Magnet
 * A swarm of pixels that follows the cursor
 * slug: pixel-magnet
 * category: cursor
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let f = `
attribute vec2 aTarget;
attribute float aPace;
attribute float aRank;

uniform float uClock;
uniform float uRes;
uniform float uFlow;
uniform float uSpread;
uniform float uGrowth;
uniform float uAspect;
uniform vec2 uOrigin;

varying vec2 vField;
varying float vPace;

void main() {
  float cycle = fract(uClock * aPace + aPace);
  float lead = 1.0 + uFlow - cycle;

  vec2 anchor = aTarget * (1.0 - lead);
  anchor = floor(anchor * uRes) / uRes;

  float edge = (1.0 + aRank * uGrowth) / uRes;
  vec2 corner = anchor + (position.xy + 0.5) * edge;

  vField = corner;
  vPace = aPace;

  vec2 placed = corner * uSpread + uOrigin;
  gl_Position = vec4(placed.x / max(uAspect, 0.001), placed.y, 0.0, 1.0);
}
`,
  h = `
precision highp float;

varying vec2 vField;
varying float vPace;

uniform vec3 uInk;
uniform vec3 uHot;
uniform float uFalloff;
uniform float uCurve;
uniform float uCharge;
uniform float uOpacity;

void main() {
  float reach = max(uFalloff, 0.001);
  float fade = clamp(1.0 - length(vField) / reach, 0.0, 1.0);
  fade = pow(fade, max(uCurve, 0.01));

  float weight = clamp(vPace, 0.0, 1.6) / 1.6;
  vec3 tint = mix(uInk, uHot, weight);

  float alpha = fade * (0.5 + weight * 0.9) * uCharge * uOpacity;
  if (alpha <= 0.001) discard;
  gl_FragColor = vec4(tint * alpha, alpha);
}
`,
  p = new Float32Array([-.5, -.5, 0, .5, -.5, 0, .5, .5, 0, -.5, .5, 0]),
  m = (e, t, a) => Math.min(Math.max(e, t), a),
  v = () => () => {},
  g = () => window.devicePixelRatio || 1,
  x = ({
    readPointer: e,
    count: t,
    seed: a,
    resolution: l,
    flow: o,
    speed: u,
    spread: s,
    sizeSpread: d,
    falloff: v,
    falloffCurve: g,
    color: x,
    hotColor: w,
    blendMode: y,
    opacity: b,
    cursorInteraction: C,
    follow: S,
    velocityActivation: j,
    velocityScale: M,
    idleStrength: k,
    decay: P,
    paused: R
  }) => {
    let {
        invalidate: F,
        size: I
      } = (0, __mod_81712.C)(),
      A = (0, React.useRef)(null),
      N = (0, React.useRef)(0),
      E = (0, React.useRef)(new __mod_2253.I9Y(0, 0)),
      H = (0, React.useRef)(new __mod_2253.I9Y(0, 0)),
      O = (0, React.useRef)(0),
      [T, q] = (0, React.useState)(!1);
    (0, React.useEffect)(() => {
      let e = window.matchMedia("(prefers-reduced-motion: reduce)"),
        t = () => q(e.matches);
      return t(), e.addEventListener("change", t), () => e.removeEventListener("change", t);
    }, []);
    let W = (0, React.useMemo)(() => {
      let e = ((e, t) => {
          let a = Math.max(1, Math.floor(e)),
            r = new Float32Array(2 * a),
            n = new Float32Array(a),
            l = new Float32Array(a);
          for (let e = 0; e < a; e += 1) Number.isFinite(o += e + Math.tan(t)) || (o = t + 1.618 * e), r[2 * e] = Math.cos(t), r[2 * e + 1] = Math.sin(t), n[e] = e / a + .4713 * (Math.cos(t) + 1.5) / 1.5, l[e] = e / a;
          return {
            total: a,
            target: r,
            pace: n,
            rank: l
          };
        })(t, a),
        r = new __mod_2253.CmU();
      return r.setAttribute("position", new __mod_2253.THS(p, 3)), r.setIndex([0, 1, 2, 0, 2, 3]), r.setAttribute("aTarget", new __mod_2253.uWO(e.target, 2)), r.setAttribute("aPace", new __mod_2253.uWO(e.pace, 1)), r.setAttribute("aRank", new __mod_2253.uWO(e.rank, 1)), r.instanceCount = e.total, r;
    }, [t, a]);
    (0, React.useEffect)(() => () => W.dispose(), [W]);
    let z = (0, React.useMemo)(() => ({
      uClock: {
        value: 0
      },
      uRes: {
        value: 100
      },
      uFlow: {
        value: 1
      },
      uSpread: {
        value: 1
      },
      uGrowth: {
        value: 1.5
      },
      uAspect: {
        value: 1
      },
      uOrigin: {
        value: new __mod_2253.I9Y(0, 0)
      },
      uInk: {
        value: new __mod_2253.Q1f("#16a34a")
      },
      uHot: {
        value: new __mod_2253.Q1f("#bbf7d0")
      },
      uFalloff: {
        value: 1.05
      },
      uCurve: {
        value: .5
      },
      uCharge: {
        value: 0
      },
      uOpacity: {
        value: 1
      }
    }), []);
    return (0, __mod_81712.D)((t, a) => {
      let r = A.current;
      if (!r) return;
      let n = r.uniforms,
        i = Math.min(a, .05);
      R || T || (N.current += i * u);
      let f = e(),
        h = I.width / Math.max(I.height, 1);
      C && f.seen ? H.current.set((2 * f.x - 1) * h, 1 - 2 * f.y) : H.current.set(0, 0), E.current.lerp(H.current, m(i * S, 0, 1)), f.power *= Math.exp(-i * Math.max(P, .05));
      let p = j ? m(f.power / Math.max(M, .01), 0, 1) : 1,
        q = Math.max(m(k, 0, 1), p);
      O.current += (q - O.current) * m(6 * i, 0, 1), n.uClock.value = N.current, n.uRes.value = Math.max(l, 4), n.uFlow.value = +("contract" === o), n.uSpread.value = s, n.uGrowth.value = d, n.uAspect.value = h, n.uOrigin.value.copy(E.current), n.uInk.value.set(x), n.uHot.value.set(w), n.uFalloff.value = v, n.uCurve.value = g, n.uCharge.value = O.current, n.uOpacity.value = b;
      let W = "additive" === y ? __mod_2253.EZo : __mod_2253.NTi;
      r.blending !== W && (r.blending = W), F();
    }), <mesh geometry={W} frustumCulled={!1}><shaderMaterial ref={A} uniforms={z} vertexShader={f} fragmentShader={h} transparent={!0} premultipliedAlpha={!0} depthTest={!1} depthWrite={!1} /></mesh>;
  },
  w = ({
    width: e = "100%",
    height: t = "100%",
    className: a,
    children: l,
    count: o = 25,
    seed: u = 1,
    resolution: i = 100,
    flow: c = "contract",
    speed: f = 1,
    spread: h = 1,
    sizeSpread: p = 1.5,
    falloff: w = 1.05,
    falloffCurve: y = .5,
    color: b = "#16a34a",
    hotColor: C = "#bbf7d0",
    backgroundColor: S = "#0a0a0a",
    blendMode: j = "normal",
    opacity: M = 1,
    cursorInteraction: k = !0,
    follow: P = 10.5,
    velocityActivation: R = !0,
    velocityScale: F = 1.6,
    idleStrength: I = 0,
    decay: A = 1.2,
    dpr: N = 2,
    paused: E = !1
  }) => {
    let H,
      O = (0, React.useRef)(null),
      T = (0, React.useRef)({
        x: .5,
        y: .5,
        power: 0,
        seen: !1
      }),
      q = (0, React.useRef)(0),
      [W, z] = (0, React.useState)(!1),
      B = (0, React.useSyncExternalStore)(v, g, () => 1);
    (0, React.useEffect)(() => {
      let e = O.current;
      if (!e) return;
      let t = new IntersectionObserver(([e]) => z(e.isIntersecting), {
        rootMargin: "120px"
      });
      return t.observe(e), () => t.disconnect();
    }, []);
    let G = (0, React.useCallback)(() => T.current, []),
      L = (0, React.useCallback)(e => {
        let t = O.current;
        if (!t) return;
        let a = t.getBoundingClientRect();
        if (!a.width || !a.height) return;
        let r = (e.clientX - a.left) / a.width,
          n = (e.clientY - a.top) / a.height,
          l = performance.now(),
          o = Math.max(l - q.current, 8) / 1e3;
        if (q.current = l, T.current.seen) {
          let e = Math.hypot(r - T.current.x, n - T.current.y) / o;
          T.current.power = Math.max(T.current.power, e);
        }
        T.current.x = r, T.current.y = n, T.current.seen = !0;
      }, []),
      D = (0, React.useCallback)(() => {
        T.current.seen = !1, T.current.power = 0;
      }, []),
      _ = (0, React.useMemo)(() => m(Math.min(B, N), .5, 2), [B, N]);
    return <div ref={O} className={(0, __mod_90650.cn)("relative overflow-hidden", a)} style={{
      width: e,
      height: t,
      backgroundColor: "transparent" === (H = S.trim().toLowerCase()) || "none" === H || "" === H ? void 0 : S
    }} onPointerMove={k ? L : void 0} onPointerLeave={k ? D : void 0}><__mod_3907.Hl className="absolute inset-0" dpr={_} frameloop={W ? "always" : "demand"} gl={{
        antialias: !1,
        alpha: !0,
        powerPreference: "high-performance"
      }} orthographic={!0}><X readPointer={G} count={o} seed={u} resolution={i} flow={c} speed={f} spread={h} sizeSpread={p} falloff={w} falloffCurve={y} color={b} hotColor={C} blendMode={j} opacity={M} cursorInteraction={k} follow={P} velocityActivation={R} velocityScale={F} idleStrength={I} decay={A} paused={E} /></__mod_3907.Hl>{l ? <div className="relative z-10 h-full w-full">{l}</div> : null}</div>;
  },
  y = () => () => {},
  b = () => {
    let [e, t] = (0, __mod_90761.I)(),
      {
        resolvedTheme: a
      } = (0, __mod_30701.D)(),
      i = (0, React.useSyncExternalStore)(y, () => !0, () => !1) && "dark" === a,
      [s, c] = (0, React.useState)(null),
      [d, f] = (0, React.useState)(null),
      [h, p] = (0, React.useState)(null),
      m = (0, React.useMemo)(() => null !== s ? s : i ? "#0a0a0a" : "#ffffff", [i, s]),
      v = (0, React.useMemo)(() => null !== d ? d : i ? "#16a34a" : "#86efac", [i, d]),
      g = (0, React.useMemo)(() => null !== h ? h : i ? "#bbf7d0" : "#15803d", [i, h]),
      [x, b] = (0, React.useState)(25),
      [C, S] = (0, React.useState)(1),
      [j, M] = (0, React.useState)(100),
      [k, P] = (0, React.useState)("contract"),
      [R, F] = (0, React.useState)(1),
      [I, A] = (0, React.useState)(1),
      [N, E] = (0, React.useState)(1.5),
      [H, O] = (0, React.useState)(1.05),
      [T, q] = (0, React.useState)(.5),
      [W, z] = (0, React.useState)("normal"),
      [B, G] = (0, React.useState)(1),
      [L, D] = (0, React.useState)(!0),
      [_, U] = (0, React.useState)(10.5),
      [V, Y] = (0, React.useState)(!0),
      [X, Q] = (0, React.useState)(1.6),
      [Z, J] = (0, React.useState)(0),
      [K, $] = (0, React.useState)(1.2),
      [ee, et] = (0, React.useState)(!1);
    return <div><__mod_56388.Bg /><__mod_56388.VX><__mod_56388.Ec><__mod_56388.Ch onRefresh={t}><div className="relative h-full w-full"><WView count={x} seed={C} resolution={j} flow={k} speed={R} spread={I} sizeSpread={N} falloff={H} falloffCurve={T} color={v} hotColor={g} backgroundColor={m} blendMode={W} opacity={B} cursorInteraction={L} follow={_} velocityActivation={V} velocityScale={X} idleStrength={Z} decay={K} paused={ee}/></div></__mod_56388.Ch><__mod_56388.IH><__mod_56388.yt title="Count" min={10} max={400} step={5} value={x} onChange={b} /><__mod_56388.yt title="Seed" min={0} max={5} step={.01} value={C} onChange={S} /><__mod_56388.yt title="Resolution" min={8} max={160} step={1} value={j} onChange={M} /><__mod_56388.bg title="Flow" value={k} onChange={e => P(e)} options={[{
              value: "contract",
              label: "Contract"
            }, {
              value: "expand",
              label: "Expand"
            }]} /><__mod_56388.yt title="Speed" min={0} max={3} step={.05} value={R} onChange={F} /><__mod_56388.yt title="Spread" min={.2} max={2.5} step={.05} value={I} onChange={A} /><__mod_56388.yt title="Size Spread" min={0} max={5} step={.1} value={N} onChange={E} /><__mod_56388.yt title="Falloff" min={.3} max={2} step={.05} value={H} onChange={O} /><__mod_56388.yt title="Falloff Curve" min={.2} max={4} step={.05} value={T} onChange={q} /><__mod_56388.bg title="Blend Mode" value={W} onChange={e => z(e)} options={[{
              value: "normal",
              label: "Normal"
            }, {
              value: "additive",
              label: "Additive"
            }]} /><__mod_56388.yt title="Opacity" min={0} max={1} step={.01} value={B} onChange={G} /><__mod_56388.W7 title="Color" value={v} onChange={f} /><__mod_56388.W7 title="Hot Color" value={g} onChange={p} /><__mod_56388.W7 title="Background" value={m} onChange={c} /><__mod_56388.tl title="Cursor Interaction" checked={L} onChange={D} /><__mod_56388.yt title="Follow" min={1} max={20} step={.5} value={_} onChange={U} /><__mod_56388.tl title="Velocity Activation" checked={V} onChange={Y} /><__mod_56388.yt title="Velocity Scale" min={.2} max={5} step={.1} value={X} onChange={Q} /><__mod_56388.yt title="Idle Strength" min={0} max={1} step={.01} value={Z} onChange={J} /><__mod_56388.yt title="Decay" min={.2} max={6} step={.1} value={K} onChange={$} /><__mod_56388.tl title="Paused" checked={ee} onChange={et} /></__mod_56388.IH><__mod_56388.Ub data={[{
            name: "width",
            type: "string | number",
            default: '"100%"',
            description: "Container width."
          }, {
            name: "height",
            type: "string | number",
            default: '"100%"',
            description: "Container height."
          }, {
            name: "className",
            type: "string",
            default: "undefined",
            description: "Additional CSS classes."
          }, {
            name: "children",
            type: "ReactNode",
            default: "undefined",
            description: "Content rendered above the effect."
          }, {
            name: "count",
            type: "number",
            default: "25",
            description: "Number of squares in the swarm."
          }, {
            name: "seed",
            type: "number",
            default: "1",
            description: "Starting seed. Change it for a different arrangement."
          }, {
            name: "resolution",
            type: "number",
            default: "100",
            description: "Grid the squares snap to. Higher values give smaller squares."
          }, {
            name: "flow",
            type: '"contract" | "expand"',
            default: '"contract"',
            description: "Whether squares fall inward or fly outward."
          }, {
            name: "speed",
            type: "number",
            default: "1",
            description: "How fast the swarm cycles."
          }, {
            name: "spread",
            type: "number",
            default: "1",
            description: "Radius of the swarm relative to half the container height."
          }, {
            name: "sizeSpread",
            type: "number",
            default: "1.5",
            description: "Extra size added to the largest squares."
          }, {
            name: "falloff",
            type: "number",
            default: "1.05",
            description: "Radius at which the swarm fades out."
          }, {
            name: "falloffCurve",
            type: "number",
            default: "0.5",
            description: "Softness of that fade."
          }, {
            name: "color",
            type: "string",
            default: '"#16a34a"',
            description: "Colour of the slowest squares."
          }, {
            name: "hotColor",
            type: "string",
            default: '"#bbf7d0"',
            description: "Colour of the fastest squares."
          }, {
            name: "backgroundColor",
            type: "string",
            default: '"#0a0a0a"',
            description: 'Background fill colour. Accepts "transparent".'
          }, {
            name: "blendMode",
            type: '"normal" | "additive"',
            default: '"normal"',
            description: "How squares combine where they overlap."
          }, {
            name: "opacity",
            type: "number",
            default: "1",
            description: "Master alpha, from 0 to 1."
          }, {
            name: "cursorInteraction",
            type: "boolean",
            default: "true",
            description: "Let the swarm follow the pointer."
          }, {
            name: "follow",
            type: "number",
            default: "10.5",
            description: "How quickly the swarm catches up with the pointer."
          }, {
            name: "velocityActivation",
            type: "boolean",
            default: "true",
            description: "Drive the swarm with pointer speed."
          }, {
            name: "velocityScale",
            type: "number",
            default: "1.6",
            description: "Pointer speed needed to reach full strength."
          }, {
            name: "idleStrength",
            type: "number",
            default: "0",
            description: "Strength the swarm holds while the pointer rests."
          }, {
            name: "decay",
            type: "number",
            default: "1.2",
            description: "How quickly the swarm fades once the pointer stops. Lower values linger."
          }, {
            name: "dpr",
            type: "number",
            default: "2",
            description: "Upper bound on device pixel ratio."
          }, {
            name: "paused",
            type: "boolean",
            default: "false",
            description: "Hold the animation still."
          }]} /></__mod_56388.Ec><__mod_56388.lT><__mod_56388.Gv /></__mod_56388.lT></__mod_56388.VX></div>;
  };

const X: any = x;

const WView: any = w;

export default b;

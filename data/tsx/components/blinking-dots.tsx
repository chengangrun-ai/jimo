import * as __mod_81712 from "../_helpers/81712";
import * as __mod_2253 from "../_helpers/2253";
import * as __mod_90650 from "../_helpers/90650";
import * as __mod_3907 from "../_helpers/3907";
import * as __mod_90761 from "../_helpers/90761";
import * as __mod_30701 from "../_helpers/30701";
import * as __mod_56388 from "../_helpers/56388";
/**
 * Blinking Dots
 * A field of dots blinking on and off
 * slug: blinking-dots
 * category: background
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let f = `
varying vec2 vSpot;

void main() {
  vSpot = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`,
  p = `
precision highp float;

varying vec2 vSpot;

uniform vec2 uCanvas;
uniform float uClock;
uniform float uDensity;
uniform float uCoverage;
uniform float uJitter;
uniform float uDotScale;
uniform float uSpread;
uniform float uFalloff;
uniform float uTiers;
uniform float uTierStep;
uniform float uTierFade;
uniform vec3 uInkLow;
uniform vec3 uInkHigh;
uniform vec3 uBackdrop;
uniform float uBackdropAlpha;
uniform float uFlicker;
uniform float uFlickerRate;
uniform vec2 uPan;
uniform vec2 uNudge;
uniform float uVignette;
uniform float uGain;
uniform float uOpacity;

vec3 scatter(vec2 seat) {
  vec3 h = fract(vec3(seat.xyx) * vec3(0.1031, 0.1030, 0.0973));
  h += dot(h, h.yzx + 33.33);
  return fract((h.xxy + h.yzz) * h.zyx);
}

void main() {
  float shortest = max(min(uCanvas.x, uCanvas.y), 1.0);
  vec2 plane = (vSpot - 0.5) * uCanvas / shortest;

  vec3 glow = vec3(0.0);
  float veil = 0.0;

  for (int tier = 0; tier < 4; tier++) {
    float rank = float(tier);
    if (rank >= uTiers) break;

    float far = rank / max(uTiers - 1.0, 1.0);
    float cells = uDensity * pow(uTierStep, rank);
    float dim = mix(1.0, uTierFade, far);
    float sway = mix(1.0, 0.3, far);

    vec2 lattice = plane * cells - (uPan + uNudge) * sway * cells + rank * 23.71;
    vec2 seat = floor(lattice);
    vec2 local = fract(lattice) - 0.5;

    vec3 roll = scatter(seat + rank * 7.31);
    vec2 slide = scatter(seat + rank * 7.31 + 41.7).xy;

    float lives = step(roll.z, uCoverage);
    float reach = (0.01 + 0.09 * mix(0.5, roll.x, uSpread)) * uDotScale;
    reach = clamp(reach, 0.002, 0.46);

    float grain = shortest / max(cells, 1.0);
    float floorReach = 0.6 / max(grain, 1.0);
    float grown = max(reach, floorReach);
    float energy = (reach * reach) / (grown * grown);

    vec2 wander = (slide - 0.5) * 2.0 * uJitter * max(0.5 - grown, 0.0);
    float gap = length(local - wander);

    float orb = 1.0 - smoothstep(0.0, grown, gap);
    orb = pow(max(orb, 0.0), uFalloff);

    float beat = sin(uClock * uFlickerRate + roll.y * 10.0);
    float lift = 1.0 - uFlicker * 0.5 + uFlicker * 0.5 * beat;

    float amp = lives * orb * energy * lift * dim;
    glow += mix(uInkLow, uInkHigh, roll.x) * amp;
    veil += amp;
  }

  glow *= uGain;
  veil = clamp(veil * uGain, 0.0, 1.0);

  float shade = 1.0 - uVignette * smoothstep(0.25, 0.95, length(plane));
  glow *= shade;
  veil *= shade;

  float rest = uBackdropAlpha * (1.0 - veil);
  vec3 rgb = glow + uBackdrop * rest;
  float alpha = veil + rest;

  gl_FragColor = vec4(rgb, alpha) * uOpacity;
}
`,
  m = (e, t, a) => Math.min(Math.max(e, t), a),
  h = () => () => {},
  v = () => window.devicePixelRatio || 1,
  g = e => {
    let t = e.trim().toLowerCase();
    return "transparent" === t || "none" === t || "" === t;
  },
  x = ({
    awake: e,
    ceiling: t,
    readNudge: a,
    density: n,
    coverage: i,
    jitter: o,
    dotSize: u,
    sizeVariation: d,
    falloff: h,
    layers: v,
    layerScale: x,
    layerFade: y,
    colorFrom: w,
    colorTo: b,
    backgroundColor: S,
    twinkle: C,
    twinkleSpeed: k,
    driftSpeed: j,
    driftAngle: F,
    vignette: M,
    brightness: I,
    opacity: T,
    cursorInteraction: P,
    cursorParallax: D,
    adaptiveQuality: N,
    targetFps: B,
    paused: R
  }) => {
    let {
        gl: z,
        invalidate: E,
        setDpr: L
      } = (0, __mod_81712.C)(),
      A = (0, React.useRef)(null),
      H = (0, React.useRef)(0),
      V = (0, React.useRef)(new __mod_2253.I9Y(0, 0)),
      Y = (0, React.useRef)({
        scale: t,
        frames: 0,
        span: 0,
        wins: 0,
        roof: 1 / 0
      }),
      [G, O] = (0, React.useState)(!1);
    (0, React.useEffect)(() => {
      let e = window.matchMedia("(prefers-reduced-motion: reduce)"),
        t = () => O(e.matches);
      return t(), e.addEventListener("change", t), () => e.removeEventListener("change", t);
    }, []), (0, React.useEffect)(() => {
      let e = Y.current;
      e.scale = t, e.roof = 1 / 0, e.wins = 0, L(t);
    }, [t, L]);
    let Q = (0, React.useMemo)(() => ({
      uCanvas: {
        value: new __mod_2253.I9Y(1, 1)
      },
      uClock: {
        value: 0
      },
      uDensity: {
        value: 20
      },
      uCoverage: {
        value: .8
      },
      uJitter: {
        value: .6
      },
      uDotScale: {
        value: 1
      },
      uSpread: {
        value: 1
      },
      uFalloff: {
        value: 1
      },
      uTiers: {
        value: 2
      },
      uTierStep: {
        value: 1.9
      },
      uTierFade: {
        value: .5
      },
      uInkLow: {
        value: new __mod_2253.Q1f("#cc0080")
      },
      uInkHigh: {
        value: new __mod_2253.Q1f("#ffccff")
      },
      uBackdrop: {
        value: new __mod_2253.Q1f("#0a0a0a")
      },
      uBackdropAlpha: {
        value: 1
      },
      uFlicker: {
        value: .4
      },
      uFlickerRate: {
        value: 5
      },
      uPan: {
        value: new __mod_2253.I9Y(0, 0)
      },
      uNudge: {
        value: new __mod_2253.I9Y(0, 0)
      },
      uVignette: {
        value: 0
      },
      uGain: {
        value: 1
      },
      uOpacity: {
        value: 1
      }
    }), []);
    return (0, __mod_81712.D)((r, l) => {
      let s = A.current;
      if (!s || !e) return;
      let f = Math.min(l, .05),
        p = R || G;
      p || (H.current += f);
      let O = s.uniforms,
        Q = z.getDrawingBufferSize(new __mod_2253.I9Y());
      if (O.uCanvas.value.set(Math.max(Q.x, 1), Math.max(Q.y, 1)), O.uClock.value = H.current, O.uDensity.value = m(n, 2, 400), O.uCoverage.value = m(i, 0, 1), O.uJitter.value = m(o, 0, 1), O.uDotScale.value = m(u, .05, 6), O.uSpread.value = m(d, 0, 1), O.uFalloff.value = m(h, .25, 8), O.uTiers.value = m(Math.round(v), 1, 4), O.uTierStep.value = m(x, 1, 4), O.uTierFade.value = m(y, 0, 1), O.uInkLow.value.set(w), O.uInkHigh.value.set(b), O.uFlicker.value = m(C, 0, 1), O.uFlickerRate.value = 5 * Math.max(k, 0), O.uVignette.value = m(M, 0, 1), O.uGain.value = Math.max(I, 0), O.uOpacity.value = m(T, 0, 1), g(S) ? O.uBackdropAlpha.value = 0 : (O.uBackdropAlpha.value = 1, O.uBackdrop.value.set(S)), !p) {
        let e = F * Math.PI / 180;
        V.current.x += Math.cos(e) * j * f, V.current.y += Math.sin(e) * j * f;
      }
      O.uPan.value.copy(V.current);
      let X = a();
      X.x += (X.toX - X.x) * Math.min(4 * f, 1), X.y += (X.toY - X.y) * Math.min(4 * f, 1), P ? O.uNudge.value.set(X.x * D, X.y * D) : O.uNudge.value.set(0, 0);
      let W = Y.current;
      if (W.frames += 1, W.span += l, W.span >= .75) {
        let e = W.frames / W.span;
        if (W.frames = 0, W.span = 0, N && H.current > .5) if (e < .85 * B && W.scale > .5) W.roof = W.scale, W.scale = Math.max(.5, .75 * W.scale), W.wins = 0, L(W.scale);else if (e >= .95 * B && W.scale < t) {
          W.wins += 1;
          let e = Math.min(t, 1.25 * W.scale);
          W.wins >= 3 && e < .98 * W.roof && (W.scale = e, W.wins = 0, L(e));
        } else W.wins = 0;
      }
      E();
    }), <mesh frustumCulled={!1}><planeGeometry args={[2, 2]} /><shaderMaterial ref={A} uniforms={Q} vertexShader={f} fragmentShader={p} transparent={!0} premultipliedAlpha={!0} depthTest={!1} depthWrite={!1} /></mesh>;
  },
  y = ({
    width: e = "100%",
    height: t = "100%",
    className: a,
    children: n,
    density: i = 20,
    coverage: o = .8,
    jitter: s = .6,
    dotSize: c = 1,
    sizeVariation: f = 1,
    falloff: p = 1,
    layers: y = 2,
    layerScale: w = 1.9,
    layerFade: b = .5,
    colorFrom: S = "#cc0080",
    colorTo: C = "#ffccff",
    backgroundColor: k = "#0a0a0a",
    twinkle: j = .4,
    twinkleSpeed: F = 1,
    driftSpeed: M = .012,
    driftAngle: I = 90,
    vignette: T = 0,
    brightness: P = 1,
    opacity: D = 1,
    cursorInteraction: N = !0,
    cursorParallax: B = .06,
    adaptiveQuality: R = !0,
    targetFps: z = 60,
    dpr: E = 2,
    paused: L = !1
  }) => {
    let A = (0, React.useRef)(null),
      H = (0, React.useRef)({
        x: 0,
        y: 0,
        toX: 0,
        toY: 0
      }),
      [V, Y] = (0, React.useState)(!1),
      G = (0, React.useSyncExternalStore)(h, v, () => 1);
    (0, React.useEffect)(() => {
      let e = A.current;
      if (!e) return;
      let t = new IntersectionObserver(([e]) => Y(e.isIntersecting), {
        rootMargin: "120px"
      });
      return t.observe(e), () => t.disconnect();
    }, []);
    let O = (0, React.useCallback)(() => H.current, []),
      Q = (0, React.useCallback)(e => {
        let t = A.current;
        if (!t) return;
        let a = t.getBoundingClientRect();
        a.width && a.height && (H.current.toX = (e.clientX - a.left) / a.width - .5, H.current.toY = .5 - (e.clientY - a.top) / a.height);
      }, []),
      X = (0, React.useCallback)(() => {
        H.current.toX = 0, H.current.toY = 0;
      }, []),
      W = (0, React.useMemo)(() => m(Math.min(G, E), .5, 2), [G, E]);
    return <div ref={A} className={(0, __mod_90650.cn)("relative overflow-hidden", a)} style={{
      width: e,
      height: t,
      backgroundColor: g(k) ? void 0 : k
    }} onPointerMove={N ? Q : void 0} onPointerLeave={N ? X : void 0}><__mod_3907.Hl className="absolute inset-0" dpr={W} frameloop={V ? "always" : "demand"} gl={{
        antialias: !1,
        alpha: !0,
        powerPreference: "high-performance"
      }} orthographic={!0}><XScene awake={V} ceiling={W} readNudge={O} density={i} coverage={o} jitter={s} dotSize={c} sizeVariation={f} falloff={p} layers={y} layerScale={w} layerFade={b} colorFrom={S} colorTo={C} backgroundColor={k} twinkle={j} twinkleSpeed={F} driftSpeed={M} driftAngle={I} vignette={T} brightness={P} opacity={D} cursorInteraction={N} cursorParallax={B} adaptiveQuality={R} targetFps={z} paused={L} /></__mod_3907.Hl>{n ? <div className="relative z-10 h-full w-full">{n}</div> : null}</div>;
  },
  w = () => () => {},
  b = () => {
    let [e, t] = (0, __mod_90761.I)(),
      [a, s] = (0, React.useState)(20),
      [u, c] = (0, React.useState)(.8),
      [d, f] = (0, React.useState)(.6),
      [p, m] = (0, React.useState)(1),
      [h, v] = (0, React.useState)(1),
      [g, x] = (0, React.useState)(1),
      [b, S] = (0, React.useState)(2),
      [C, k] = (0, React.useState)(1.9),
      [j, F] = (0, React.useState)(.5),
      {
        resolvedTheme: M
      } = (0, __mod_30701.D)(),
      I = (0, React.useSyncExternalStore)(w, () => !0, () => !1) && "dark" === M,
      [T, P] = (0, React.useState)(null),
      [D, N] = (0, React.useState)(null),
      [B, R] = (0, React.useState)(null),
      z = (0, React.useMemo)(() => null !== T ? T : I ? "#cc0080" : "#f3c2e0", [I, T]),
      E = (0, React.useMemo)(() => null !== D ? D : I ? "#ffccff" : "#4a0d33", [I, D]),
      L = (0, React.useMemo)(() => null !== B ? B : I ? "#0a0a0a" : "#ffffff", [I, B]),
      [A, H] = (0, React.useState)(.4),
      [V, Y] = (0, React.useState)(1),
      [G, O] = (0, React.useState)(.012),
      [Q, X] = (0, React.useState)(90),
      [W, _] = (0, React.useState)(0),
      [J, U] = (0, React.useState)(1),
      [q, K] = (0, React.useState)(1),
      [Z, $] = (0, React.useState)(!0),
      [ee, et] = (0, React.useState)(.06),
      [ea, er] = (0, React.useState)(!0),
      [el, en] = (0, React.useState)(!1);
    return <div><__mod_56388.Bg /><__mod_56388.VX><__mod_56388.Ec><__mod_56388.Ch onRefresh={t}><div className="relative h-full w-full"><y density={a} coverage={u} jitter={d} dotSize={p} sizeVariation={h} falloff={g} layers={b} layerScale={C} layerFade={j} colorFrom={z} colorTo={E} backgroundColor={L} twinkle={A} twinkleSpeed={V} driftSpeed={G} driftAngle={Q} vignette={W} brightness={J} opacity={q} cursorInteraction={Z} cursorParallax={ee} adaptiveQuality={ea} paused={el} /></div></__mod_56388.Ch><__mod_56388.IH><__mod_56388.yt title="Density" min={4} max={120} step={1} value={a} onChange={s} /><__mod_56388.yt title="Coverage" min={0} max={1} step={.01} value={u} onChange={c} /><__mod_56388.yt title="Jitter" min={0} max={1} step={.01} value={d} onChange={f} /><__mod_56388.yt title="Dot Size" min={.2} max={4} step={.05} value={p} onChange={m} /><__mod_56388.yt title="Size Variation" min={0} max={1} step={.01} value={h} onChange={v} /><__mod_56388.yt title="Falloff" min={.25} max={5} step={.05} value={g} onChange={x} /><__mod_56388.yt title="Layers" min={1} max={4} step={1} value={b} onChange={S} /><__mod_56388.yt title="Layer Scale" min={1} max={3.5} step={.05} value={C} onChange={k} /><__mod_56388.yt title="Layer Fade" min={0} max={1} step={.01} value={j} onChange={F} /><__mod_56388.yt title="Twinkle" min={0} max={1} step={.01} value={A} onChange={H} /><__mod_56388.yt title="Twinkle Speed" min={0} max={4} step={.05} value={V} onChange={Y} /><__mod_56388.yt title="Drift Speed" min={0} max={.15} step={.001} value={G} onChange={O} /><__mod_56388.yt title="Drift Angle" min={0} max={360} step={1} value={Q} onChange={X} /><__mod_56388.yt title="Vignette" min={0} max={1} step={.01} value={W} onChange={_} /><__mod_56388.yt title="Brightness" min={0} max={3} step={.05} value={J} onChange={U} /><__mod_56388.yt title="Opacity" min={0} max={1} step={.01} value={q} onChange={K} /><__mod_56388.yt title="Cursor Parallax" min={0} max={.3} step={.005} value={ee} onChange={et} /><__mod_56388.W7 title="Small Dot Color" value={z} onChange={P} /><__mod_56388.W7 title="Large Dot Color" value={E} onChange={N} /><__mod_56388.W7 title="Background" value={L} onChange={R} /><__mod_56388.tl title="Cursor Interaction" checked={Z} onChange={$} /><__mod_56388.tl title="Adaptive Quality" checked={ea} onChange={er} /><__mod_56388.tl title="Paused" checked={el} onChange={en} /></__mod_56388.IH><__mod_56388.Ub data={[{
            name: "width",
            type: "string | number",
            default: '"100%"',
            description: "Width of the container."
          }, {
            name: "height",
            type: "string | number",
            default: '"100%"',
            description: "Height of the container."
          }, {
            name: "className",
            type: "string",
            default: "-",
            description: "Extra classes for the container."
          }, {
            name: "children",
            type: "ReactNode",
            default: "-",
            description: "Content stacked above the dot field."
          }, {
            name: "density",
            type: "number",
            default: "20",
            description: "Cells along the shortest side of the canvas. Cells stay square at any aspect ratio."
          }, {
            name: "coverage",
            type: "number",
            default: "0.8",
            description: "Fraction of cells that hold a dot."
          }, {
            name: "jitter",
            type: "number",
            default: "0.6",
            description: "How far a dot may wander from its cell center."
          }, {
            name: "dotSize",
            type: "number",
            default: "1",
            description: "Multiplier applied to every dot radius."
          }, {
            name: "sizeVariation",
            type: "number",
            default: "1",
            description: "Spread between the smallest and largest dot. Also drives the color ramp."
          }, {
            name: "falloff",
            type: "number",
            default: "1",
            description: "Shapes the glow profile, higher values tighten the core."
          }, {
            name: "layers",
            type: "number",
            default: "2",
            description: "Number of parallax depth layers, up to 4."
          }, {
            name: "layerScale",
            type: "number",
            default: "1.9",
            description: "Cell density multiplier applied per extra layer."
          }, {
            name: "layerFade",
            type: "number",
            default: "0.5",
            description: "Brightness of the furthest layer."
          }, {
            name: "colorFrom",
            type: "string",
            default: '"#cc0080"',
            description: "Color of the smallest dots."
          }, {
            name: "colorTo",
            type: "string",
            default: '"#ffccff"',
            description: "Color of the largest dots."
          }, {
            name: "backgroundColor",
            type: "string",
            default: '"#0a0a0a"',
            description: 'Fill behind the dot field. Accepts "transparent".'
          }, {
            name: "twinkle",
            type: "number",
            default: "0.4",
            description: "Depth of the brightness flicker."
          }, {
            name: "twinkleSpeed",
            type: "number",
            default: "1",
            description: "Rate of the brightness flicker."
          }, {
            name: "driftSpeed",
            type: "number",
            default: "0.012",
            description: "Field pan speed in screen widths per second."
          }, {
            name: "driftAngle",
            type: "number",
            default: "90",
            description: "Direction of the pan in degrees."
          }, {
            name: "vignette",
            type: "number",
            default: "0",
            description: "Strength of the radial darkening toward the edges."
          }, {
            name: "brightness",
            type: "number",
            default: "1",
            description: "Overall gain applied to the dots."
          }, {
            name: "opacity",
            type: "number",
            default: "1",
            description: "Master alpha of the canvas."
          }, {
            name: "cursorInteraction",
            type: "boolean",
            default: "true",
            description: "Let the pointer shift the layers."
          }, {
            name: "cursorParallax",
            type: "number",
            default: "0.06",
            description: "How far the pointer displaces the nearest layer."
          }, {
            name: "adaptiveQuality",
            type: "boolean",
            default: "true",
            description: "Drop resolution when the frame rate falls short."
          }, {
            name: "targetFps",
            type: "number",
            default: "60",
            description: "Frame rate the adaptive pass aims for."
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

const XScene: any = x;

export default b;

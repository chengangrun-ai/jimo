import * as __mod_2253 from "../_helpers/2253";
import * as __mod_81712 from "../_helpers/81712";
import * as __mod_50969 from "../_helpers/50969";
import * as __mod_90650 from "../_helpers/90650";
import * as __mod_3907 from "../_helpers/3907";
import * as __mod_90761 from "../_helpers/90761";
import * as __mod_30701 from "../_helpers/30701";
import * as __mod_56388 from "../_helpers/56388";
/**
 * Neural Flash
 * A storm of glowing filaments, like a thought firing
 * slug: neural-flash
 * category: background
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let m = `
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = vec4(position.xy * 2.0, 0.0, 1.0);
}
`,
  p = `
precision highp float;

#define MAX_ITERATIONS 24

varying vec2 vUv;

uniform vec2 uResolution;
uniform vec2 uCenter;
uniform vec2 uBend;
uniform float uTime;
uniform int uIterations;
uniform float uScale;
uniform float uRadius;
uniform float uEdge;
uniform float uIntensity;
uniform float uContrast;
uniform float uFlicker;
uniform float uComplexity;
uniform float uTurbulence;
uniform float uTwist;
uniform float uDensity;
uniform float uOpacity;
uniform float uBackgroundAlpha;
uniform vec3 uColor;
uniform vec3 uHot;
uniform vec3 uBackground;

mat2 spin(float angle) {
  float c = cos(angle);
  float s = sin(angle);
  return mat2(c, -s, s, c);
}


float storm(vec2 p, float t) {
  float charge = 1.0;
  vec2 ring = vec2(1.0);
  float gain = 0.4;

  for (int i = 0; i < MAX_ITERATIONS; i++) {
    if (i >= uIterations) break;
    float pass = float(i);
    float phase = t + pass;


    vec2 lattice = sin(1.5 * uDensity * p / (0.5 - dot(p, p)) - 9.0 * p.yx + phase);
    float weight = 1.0 + pass * dot(ring, ring);
    charge += (1.0 + cos(t) * uFlicker) * 0.2 / length(weight * lattice);


    gain += 0.065 * uComplexity;
    ring = cos(phase + 1.0 - 22.0 * p * pow(gain, pass)) - 5.0 * p;



    float a = pass + 0.02 * t;
    p = mat2(cos(a), cos(a - 11.0), cos(a - 33.0), cos(a)) * p;
    if (uTwist != 0.0) p = spin(uTwist * 0.25 * pass) * p;
    vec2 pull = tanh(40.0 * dot(p, p) * cos(100.0 * p.yx + phase)) / 300.0;
    p += pull * uTurbulence + 0.2 * gain * p;
    p += cos(4.0 / exp(charge * charge / 800.0) + phase) / 900.0;
  }


  return 30.0 / (min(charge, 30.0) + 164.0 / charge) - dot(p, p) / 250.0;
}

void main() {
  vec2 frag = vUv * uResolution;
  vec2 uv = (2.0 * frag - uResolution) / uResolution.y;
  uv -= uCenter;


  vec2 toBend = uv - uBend;
  float lens = exp(-dot(toBend, toBend) * 6.0);
  uv += toBend * lens * 0.35 * length(uBend);

  vec2 p = uv * 0.5 * uScale;

  float mask = smoothstep(0.0, uEdge, 1.0 - length(uv) / max(2.0 * uRadius, 0.001));
  float energy = mask > 0.001 ? storm(p, uTime) * mask : 0.0;


  float bgLum = dot(uBackground, vec3(0.299, 0.587, 0.114));
  float light = uBackgroundAlpha * smoothstep(0.45, 0.75, bgLum);


  energy = pow(max(energy, 0.0), mix(0.7, 1.4, light)) * uIntensity;

  vec3 glow = mix(uColor * energy, uColor, light);
  float bloom = smoothstep(0.7, 1.0 + 1.5 / max(uContrast, 0.05), energy);


  float hotLum = dot(uHot, vec3(0.299, 0.587, 0.114));
  vec3 hot = mix(uHot, uColor * 0.3, light * step(bgLum, hotLum));
  glow = mix(glow, hot * max(energy, 1.0), bloom);

  float cover = clamp(energy, 0.0, 1.0);
  vec3 color = mix(uBackground, glow, cover);
  float alpha = max(uBackgroundAlpha, cover) * uOpacity;
  gl_FragColor = vec4(mix(uBackground, color, uOpacity), alpha);
}
`,
  h = (e, t, a) => Math.min(a, Math.max(t, e)),
  v = (e, t) => {
    let a = new __mod_2253.Q1f();
    try {
      a.setStyle(e, __mod_2253.Zr2);
    } catch {
      a.setStyle(t, __mod_2253.Zr2);
    }
    return a;
  },
  g = (e, t) => {
    try {
      e.setStyle(t, __mod_2253.Zr2);
    } catch {
      return;
    }
  },
  x = e => {
    let t = window.matchMedia("(min-resolution: 2dppx)");
    return t.addEventListener("change", e), window.addEventListener("resize", e), () => {
      t.removeEventListener("change", e), window.removeEventListener("resize", e);
    };
  },
  y = () => window.devicePixelRatio || 1,
  b = ({
    speed: e,
    iterations: t,
    scale: a,
    radius: o,
    edgeSoftness: u,
    intensity: i,
    contrast: s,
    flicker: c,
    complexity: f,
    turbulence: x,
    twist: y,
    density: b,
    color: C,
    hotColor: w,
    backgroundColor: S,
    opacity: j,
    cursorInteraction: k,
    cursorStrength: I,
    paused: E,
    readPointer: T
  }) => {
    let B = (0, React.useRef)(null),
      R = (0, React.useRef)(0),
      M = (0, React.useRef)({
        x: 0,
        y: 0
      }),
      N = (0, React.useRef)({
        x: 0,
        y: 0
      }),
      {
        gl: P,
        size: L,
        invalidate: H
      } = (0, __mod_81712.C)(),
      O = (0, React.useMemo)(() => ({
        uResolution: {
          value: new __mod_2253.I9Y(1, 1)
        },
        uCenter: {
          value: new __mod_2253.I9Y(0, 0)
        },
        uBend: {
          value: new __mod_2253.I9Y(0, 0)
        },
        uTime: {
          value: 0
        },
        uIterations: {
          value: 14
        },
        uScale: {
          value: 1
        },
        uRadius: {
          value: 1
        },
        uEdge: {
          value: 1
        },
        uIntensity: {
          value: 1
        },
        uContrast: {
          value: 1
        },
        uFlicker: {
          value: .1
        },
        uComplexity: {
          value: 1
        },
        uTurbulence: {
          value: 1
        },
        uTwist: {
          value: 1
        },
        uDensity: {
          value: 1
        },
        uOpacity: {
          value: 1
        },
        uBackgroundAlpha: {
          value: 1
        },
        uColor: {
          value: v("#475eff", "#475eff")
        },
        uHot: {
          value: v("#ffffff", "#ffffff")
        },
        uBackground: {
          value: v("#000000", "#000000")
        }
      }), []);
    return (0, React.useEffect)(() => {
      let e = B.current;
      if (!e) return;
      let t = e.uniforms;
      g(t.uColor.value, C), g(t.uHot.value, w);
      let a = "transparent" === S || "none" === S || "" === S;
      t.uBackgroundAlpha.value = +!a, a || g(t.uBackground.value, S), H();
    }, [C, w, S, H]), (0, React.useEffect)(() => {
      H();
    }, [t, a, o, u, i, s, c, f, x, y, b, j, H]), (0, __mod_81712.D)((n, r) => {
      let l = B.current;
      if (!l) return;
      let d = Math.min(r, .05);
      E || (R.current += d * e);
      let m = T(),
        p = k && m.active ? I : 0,
        v = 1 - Math.exp(-(5 * d)),
        g = .25 * m.x * p,
        C = .25 * m.y * p;
      M.current.x += (g - M.current.x) * v, M.current.y += (C - M.current.y) * v, N.current.x += (.6 * m.x * p - N.current.x) * v, N.current.y += (.6 * m.y * p - N.current.y) * v, E && Math.hypot(g - M.current.x, C - M.current.y) > .001 && H();
      let w = P.getPixelRatio(),
        S = l.uniforms;
      S.uResolution.value.set(L.width * w, L.height * w), S.uCenter.value.set(M.current.x, M.current.y), S.uBend.value.set(N.current.x, N.current.y), S.uTime.value = R.current, S.uIterations.value = Math.round(h(t, 2, 24)), S.uScale.value = Math.max(a, .05), S.uRadius.value = Math.max(o, .05), S.uEdge.value = h(u, .01, 1), S.uIntensity.value = Math.max(i, 0), S.uContrast.value = Math.max(s, 0), S.uFlicker.value = h(c, 0, 1), S.uComplexity.value = Math.max(f, 0), S.uTurbulence.value = Math.max(x, 0), S.uTwist.value = y, S.uDensity.value = Math.max(b, .05), S.uOpacity.value = h(j, 0, 1);
    }), <mesh frustumCulled={!1}><planeGeometry args={[1, 1]} /><shaderMaterial ref={B} vertexShader={m} fragmentShader={p} uniforms={O} transparent={!0} depthTest={!1} depthWrite={!1} /></mesh>;
  },
  C = ({
    speed: e = .6,
    iterations: t = 12,
    scale: a = 1,
    radius: o = .9,
    edgeSoftness: u = 1,
    intensity: i = 1.1,
    contrast: l = 2,
    flicker: d = .6,
    complexity: m = 1,
    turbulence: p = 2,
    twist: h = 0,
    density: v = 1.5,
    color: g = "#475eff",
    hotColor: C = "#ffffff",
    backgroundColor: w = "#000000",
    opacity: S = 1,
    cursorInteraction: j = !0,
    cursorStrength: k = .5,
    paused: I = !1,
    dpr: E = 1.25,
    className: T,
    children: B
  }) => {
    let R = (0, React.useRef)(null),
      M = (0, React.useRef)({
        x: 0,
        y: 0,
        active: !1
      }),
      [N, P] = (0, React.useState)(!0),
      L = (0, __mod_50969.I)(),
      H = Math.min((0, React.useSyncExternalStore)(x, y, () => 1), Math.max(E, .5)),
      O = (0, React.useCallback)(() => M.current, []);
    (0, React.useEffect)(() => {
      let e = R.current;
      if (!e || "undefined" == typeof IntersectionObserver) return;
      let t = new IntersectionObserver(([e]) => P(e.isIntersecting), {
        threshold: 0
      });
      return t.observe(e), () => t.disconnect();
    }, []), (0, React.useEffect)(() => {
      let e = R.current;
      if (!e || !j) return;
      let t = t => {
          let a = e.getBoundingClientRect();
          a.width && a.height && (M.current.x = ((t.clientX - a.left) * 2 - a.width) / a.height, M.current.y = (a.height - (t.clientY - a.top) * 2) / a.height, M.current.active = !0);
        },
        a = () => {
          M.current.active = !1;
        };
      return e.addEventListener("pointermove", t), e.addEventListener("pointerleave", a), () => {
        e.removeEventListener("pointermove", t), e.removeEventListener("pointerleave", a);
      };
    }, [j]);
    let A = I || !!L;
    return <div ref={R} className={(0, __mod_90650.cn)("relative overflow-hidden", T)}><div className="absolute inset-0"><__mod_3907.Hl orthographic={!0} dpr={H} frameloop={N && !A ? "always" : "demand"} gl={{
          antialias: !1,
          alpha: !0,
          powerPreference: "high-performance"
        }}><BScene speed={e} iterations={t} scale={a} radius={o} edgeSoftness={u} intensity={i} contrast={l} flicker={d} complexity={m} turbulence={p} twist={h} density={v} color={g} hotColor={C} backgroundColor={w} opacity={S} cursorInteraction={j} cursorStrength={k} paused={A} readPointer={O} /></__mod_3907.Hl></div>{B ? <div className="relative z-10 h-full w-full">{B}</div> : null}</div>;
  },
  w = () => () => {},
  S = () => {
    let [e, t] = (0, __mod_90761.I)(),
      {
        resolvedTheme: a
      } = (0, __mod_30701.D)(),
      l = (0, React.useSyncExternalStore)(w, () => !0, () => !1),
      [s, c] = (0, React.useState)(.6),
      [d, f] = (0, React.useState)(12),
      [m, p] = (0, React.useState)(1),
      [h, v] = (0, React.useState)(.9),
      [g, x] = (0, React.useState)(1),
      [y, b] = (0, React.useState)(1.1),
      [S, j] = (0, React.useState)(2),
      [k, I] = (0, React.useState)(.6),
      [E, T] = (0, React.useState)(1),
      [B, R] = (0, React.useState)(2),
      [M, N] = (0, React.useState)(0),
      [P, L] = (0, React.useState)(1.5),
      [H, O] = (0, React.useState)("#475eff"),
      [A, D] = (0, React.useState)("#ffffff"),
      [F, U] = (0, React.useState)(null),
      [_, W] = (0, React.useState)(1),
      [z, G] = (0, React.useState)(!0),
      [X, Y] = (0, React.useState)(.5),
      [Z, V] = (0, React.useState)(!1),
      Q = null !== F ? F : l && "dark" === a ? "#0a0a0a" : "#ffffff";
    return <div><__mod_56388.Bg /><__mod_56388.VX><__mod_56388.Ec><__mod_56388.Ch onRefresh={t} minHeight={560}><div className="relative h-full w-full"><C className="h-full w-full" speed={s} iterations={d} scale={m} radius={h} edgeSoftness={g} intensity={y} contrast={S} flicker={k} complexity={E} turbulence={B} twist={M} density={P} color={H} hotColor={A} backgroundColor={Q} opacity={_} cursorInteraction={z} cursorStrength={X} paused={Z} /></div></__mod_56388.Ch><__mod_56388.IH><__mod_56388.yt title="Speed" min={0} max={3} step={.05} value={s} onChange={c} /><__mod_56388.yt title="Iterations" min={2} max={24} step={1} value={d} onChange={f} /><__mod_56388.yt title="Scale" min={.3} max={3} step={.05} value={m} onChange={p} /><__mod_56388.yt title="Radius" min={.2} max={2} step={.05} value={h} onChange={v} /><__mod_56388.yt title="Edge Softness" min={.05} max={1} step={.05} value={g} onChange={x} /><__mod_56388.yt title="Intensity" min={0} max={3} step={.05} value={y} onChange={b} /><__mod_56388.yt title="Contrast" min={0} max={4} step={.05} value={S} onChange={j} /><__mod_56388.yt title="Flicker" min={0} max={1} step={.01} value={k} onChange={I} /><__mod_56388.yt title="Complexity" min={0} max={3} step={.05} value={E} onChange={T} /><__mod_56388.yt title="Turbulence" min={0} max={4} step={.05} value={B} onChange={R} /><__mod_56388.yt title="Twist" min={-2} max={2} step={.05} value={M} onChange={N} /><__mod_56388.yt title="Density" min={.2} max={3} step={.05} value={P} onChange={L} /><__mod_56388.W7 title="Color" value={H} onChange={O} /><__mod_56388.W7 title="Hot Color" value={A} onChange={D} /><__mod_56388.W7 title="Background" value={Q} onChange={U} /><__mod_56388.yt title="Opacity" min={0} max={1} step={.01} value={_} onChange={W} /><__mod_56388.tl title="Cursor Interaction" checked={z} onChange={G} />{z && <__mod_56388.yt title="Cursor Strength" min={0} max={3} step={.05} value={X} onChange={Y} />}<__mod_56388.tl title="Paused" checked={Z} onChange={V} /></__mod_56388.IH><__mod_56388.Ub data={[{
            name: "speed",
            type: "number",
            default: "0.6",
            description: "Playback rate of the storm."
          }, {
            name: "iterations",
            type: "number",
            default: "12",
            description: "Feedback passes per pixel, 2 to 24. More passes add finer filaments at a GPU cost."
          }, {
            name: "scale",
            type: "number",
            default: "1",
            description: "Zoom of the field; larger values pull the storm closer."
          }, {
            name: "radius",
            type: "number",
            default: "0.9",
            description: "Radius of the visible orb as a fraction of the panel height."
          }, {
            name: "edgeSoftness",
            type: "number",
            default: "1",
            description: "Width of the orb's fade-out as a fraction of its radius."
          }, {
            name: "intensity",
            type: "number",
            default: "1.1",
            description: "Overall glow intensity."
          }, {
            name: "contrast",
            type: "number",
            default: "2",
            description: "How readily filaments bloom to the hot colour."
          }, {
            name: "flicker",
            type: "number",
            default: "0.6",
            description: "Amplitude of the slow breathing pulse, 0 to 1."
          }, {
            name: "complexity",
            type: "number",
            default: "1",
            description: "Growth of detail across passes; higher packs tighter lattices."
          }, {
            name: "turbulence",
            type: "number",
            default: "2",
            description: "Strength of the non-linear feedback that tangles filaments."
          }, {
            name: "twist",
            type: "number",
            default: "0",
            description: "Extra rotation folded in between passes; 0 keeps the classic shear."
          }, {
            name: "density",
            type: "number",
            default: "1.5",
            description: "Spread of the filament lattice."
          }, {
            name: "color",
            type: "string",
            default: '"#475eff"',
            description: "Colour of the glow body."
          }, {
            name: "hotColor",
            type: "string",
            default: '"#ffffff"',
            description: "Colour the brightest filaments bloom towards."
          }, {
            name: "backgroundColor",
            type: "string",
            default: '"#000000"',
            description: 'Panel backdrop, or "transparent".'
          }, {
            name: "opacity",
            type: "number",
            default: "1",
            description: "Master opacity of the effect."
          }, {
            name: "cursorInteraction",
            type: "boolean",
            default: "true",
            description: "Let the orb drift towards the pointer and bend around it."
          }, {
            name: "cursorStrength",
            type: "number",
            default: "0.5",
            description: "How far the orb follows the pointer, and how much it bends."
          }, {
            name: "paused",
            type: "boolean",
            default: "false",
            description: "Freeze the animation."
          }, {
            name: "dpr",
            type: "number",
            default: "1.25",
            description: "Upper device pixel ratio bound."
          }, {
            name: "className",
            type: "string",
            default: "—",
            description: "Extra classes for the root element."
          }, {
            name: "children",
            type: "ReactNode",
            default: "—",
            description: "Content layered above the effect."
          }]} /></__mod_56388.Ec><__mod_56388.lT><__mod_56388.Gv /></__mod_56388.lT></__mod_56388.VX></div>;
  };

const BScene: any = b;

export default S;

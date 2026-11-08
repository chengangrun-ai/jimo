import * as __mod_81712 from "../_helpers/81712";
import * as __mod_2253 from "../_helpers/2253";
import * as __mod_90650 from "../_helpers/90650";
import * as __mod_3907 from "../_helpers/3907";
import * as __mod_90761 from "../_helpers/90761";
import * as __mod_30701 from "../_helpers/30701";
import * as __mod_56388 from "../_helpers/56388";
/**
 * Retro Lines
 * Wavy lines receding toward a retro horizon
 * slug: retro-lines
 * category: shader
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let d = `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,
  m = `
precision highp float;

uniform float uTime;
uniform vec2 uRes;
uniform float uSpeed;
uniform float uScroll;
uniform float uDensity;
uniform float uCurve;
uniform float uCurvePow;
uniform float uVanish;
uniform float uWaveScale;
uniform float uWaveAmp;
uniform float uWavePow;
uniform float uWaveEdge;
uniform float uStartY;
uniform float uEndY;
uniform float uLineGap;
uniform float uColorRate;
uniform float uColorFreq;
uniform vec3 uTone1;
uniform vec3 uTone2;
uniform vec3 uBg;
uniform float uAlpha;
uniform vec2 uPointer;
uniform float uCursorActive;

void main() {
  vec2 st = (gl_FragCoord.xy - 0.5 * uRes) / uRes.y;

  float pointerShiftX = (uPointer.x - 0.5) * 2.0 * uCursorActive;
  float radial = length(st + vec2(pointerShiftX, uVanish));
  float warp = pow(radial, uCurvePow) / uCurve;
  st /= warp;

  float span = (st.y - uStartY) / (uEndY - uStartY);
  span = 1.0 - span;
  float baseSpan = span;

  float cap = 0.9;
  span = mix(span, cap, step(cap, span) - step(1.0, span));
  span = clamp((1.0 - span) * 0.5, 0.0, 0.5);

  float elapsed = uTime * uSpeed;

  vec2 cell = vec2(
    fract(st.x * uDensity),
    fract(st.y * uDensity - uScroll * elapsed)
  );
  float grid = step(span, cell.x) - step(1.0 - span, cell.x);
  grid = min(grid, step(span, cell.y) - step(1.0 - span, cell.y));

  vec2 wc = vec2(st.x * uWaveScale * 0.7 / uLineGap, st.y * uWaveScale * 0.5);
  wc.x += uWaveAmp * sin(wc.y - elapsed);
  float ridge = pow(max(0.0, sin(wc.x)), uWavePow);
  ridge = smoothstep(uWaveEdge, 1.0, ridge);
  ridge *= step(uStartY, st.y) * grid;
  ridge = clamp(ridge, 0.0, 1.0);

  float phase = sin(-wc.x * uColorFreq + wc.y * uColorFreq - uColorRate * elapsed);
  vec3 tint = mix(uTone1, uTone2, smoothstep(-0.5, 0.5, phase));

  vec3 result = mix(uBg, tint, ridge);
  result = mix(uBg, result, smoothstep(uStartY, uStartY + 0.2, st.y));

  gl_FragColor = vec4(result, uAlpha);
}
`;
function v(e) {
  let t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
  return t ? [parseInt(t[1], 16) / 255, parseInt(t[2], 16) / 255, parseInt(t[3], 16) / 255] : [0, 0, 0];
}
let f = ({
    speed: e,
    scrollSpeed: t,
    density: a,
    curvature: u,
    curveExponent: i,
    vanishPoint: l,
    waveScale: s,
    waveAmplitude: c,
    wavePower: v,
    waveThreshold: f,
    lineStart: h,
    lineEnd: g,
    lineGap: x,
    colorSpeed: y,
    colorFrequency: S,
    tone1Rgb: C,
    tone2Rgb: w,
    bgRgb: b,
    opacity: j,
    pointer: P,
    cursorInteraction: E
  }) => {
    let W = (0, React.useRef)(null),
      {
        size: T,
        viewport: R
      } = (0, __mod_81712.C)(),
      Y = (0, React.useRef)(new __mod_2253.I9Y(.5, .5)),
      F = (0, React.useMemo)(() => ({
        uTime: {
          value: 0
        },
        uRes: {
          value: new __mod_2253.I9Y(1, 1)
        },
        uSpeed: {
          value: e
        },
        uScroll: {
          value: t
        },
        uDensity: {
          value: a
        },
        uCurve: {
          value: u
        },
        uCurvePow: {
          value: i
        },
        uVanish: {
          value: l
        },
        uWaveScale: {
          value: s
        },
        uWaveAmp: {
          value: c
        },
        uWavePow: {
          value: v
        },
        uWaveEdge: {
          value: f
        },
        uStartY: {
          value: h
        },
        uEndY: {
          value: g
        },
        uLineGap: {
          value: x
        },
        uColorRate: {
          value: y
        },
        uColorFreq: {
          value: S
        },
        uTone1: {
          value: new __mod_2253.Pq0(...C)
        },
        uTone2: {
          value: new __mod_2253.Pq0(...w)
        },
        uBg: {
          value: new __mod_2253.Pq0(...b)
        },
        uAlpha: {
          value: j
        },
        uPointer: {
          value: new __mod_2253.I9Y(.5, .5)
        },
        uCursorActive: {
          value: 0
        }
      }), []);
    return (0, __mod_81712.D)((n, r) => {
      if (!W.current) return;
      let o = W.current.material;
      o.uniforms.uTime.value = n.clock.elapsedTime, o.uniforms.uRes.value.set(T.width * R.dpr, T.height * R.dpr), o.uniforms.uSpeed.value = e, o.uniforms.uScroll.value = t, o.uniforms.uDensity.value = a, o.uniforms.uCurve.value = u, o.uniforms.uCurvePow.value = i, o.uniforms.uVanish.value = l, o.uniforms.uWaveScale.value = s, o.uniforms.uWaveAmp.value = c, o.uniforms.uWavePow.value = v, o.uniforms.uWaveEdge.value = f, o.uniforms.uStartY.value = h, o.uniforms.uEndY.value = g, o.uniforms.uLineGap.value = x, o.uniforms.uColorRate.value = y, o.uniforms.uColorFreq.value = S, o.uniforms.uTone1.value.set(...C), o.uniforms.uTone2.value.set(...w), o.uniforms.uBg.value.set(...b), o.uniforms.uAlpha.value = j, o.uniforms.uCursorActive.value = +!!E;
      let p = 1 - Math.exp(-r / .15);
      Y.current.x += (P[0] - Y.current.x) * p, Y.current.y += (P[1] - Y.current.y) * p, o.uniforms.uPointer.value.set(Y.current.x, Y.current.y);
    }), <mesh ref={W}><planeGeometry args={[2, 2]} /><shaderMaterial vertexShader={d} fragmentShader={m} uniforms={F} transparent={!0} /></mesh>;
  },
  h = ({
    width: e = "100%",
    height: t = "100%",
    className: a,
    children: u,
    speed: i = .5,
    scrollSpeed: l = 2,
    density: o = 150,
    curvature: p = 60,
    curveExponent: d = 4,
    vanishPoint: m = 3.5,
    waveScale: h = 50,
    waveAmplitude: g = 2,
    wavePower: x = 6,
    waveThreshold: y = .35,
    lineStart: S = -1,
    lineEnd: C = .5,
    lineGap: w = .3,
    colorSpeed: b = 7,
    colorFrequency: j = 2,
    color1: P = "#290596",
    color2: E = "#93229D",
    backgroundColor: W = "#000000",
    opacity: T = 1,
    cursorInteraction: R = !1
  }) => {
    let Y = (0, React.useMemo)(() => v(P), [P]),
      F = (0, React.useMemo)(() => v(E), [E]),
      A = (0, React.useMemo)(() => v(W), [W]),
      k = (0, React.useRef)(null),
      [I, N] = (0, React.useState)([.5, .5]),
      q = (0, React.useCallback)(e => {
        if (!R) return;
        let t = k.current?.getBoundingClientRect();
        t && N([(e.clientX - t.left) / t.width, 1 - (e.clientY - t.top) / t.height]);
      }, [R]);
    return <div ref={k} className={(0, __mod_90650.cn)("relative overflow-hidden", a)} style={{
      width: e,
      height: t,
      backgroundColor: W
    }} onPointerMove={q}><__mod_3907.Hl className="absolute inset-0 h-full w-full" orthographic={!0} camera={{
        position: [0, 0, 1],
        zoom: 1,
        left: -1,
        right: 1,
        top: 1,
        bottom: -1
      }} gl={{
        antialias: !0,
        alpha: !0
      }}><FScene speed={i} scrollSpeed={l} density={o} curvature={p} curveExponent={d} vanishPoint={m} waveScale={h} waveAmplitude={g} wavePower={x} waveThreshold={y} lineStart={S} lineEnd={C} lineGap={w} colorSpeed={b} colorFrequency={j} tone1Rgb={Y} tone2Rgb={F} bgRgb={A} opacity={T} pointer={I} cursorInteraction={R} /></__mod_3907.Hl>{u && <div className="pointer-events-none relative z-10">{u}</div>}</div>;
  };
h.displayName = "RetroLines";
let g = () => {
  let [e, t] = (0, __mod_90761.I)(),
    {
      resolvedTheme: a
    } = (0, __mod_30701.D)(),
    [o, s] = (0, React.useState)(.5),
    [c, p] = (0, React.useState)(2),
    [d, m] = (0, React.useState)(1),
    [v, f] = (0, React.useState)(150),
    [g, x] = (0, React.useState)(60),
    [y, S] = (0, React.useState)(4),
    [C, w] = (0, React.useState)(3.5),
    [b, j] = (0, React.useState)(50),
    [P, E] = (0, React.useState)(2),
    [W, T] = (0, React.useState)(6),
    [R, Y] = (0, React.useState)(.35),
    [F, A] = (0, React.useState)(-1),
    [k, I] = (0, React.useState)(.5),
    [N, q] = (0, React.useState)(.3),
    [D, M] = (0, React.useState)(7),
    [G, B] = (0, React.useState)(2),
    [L, V] = (0, React.useState)("#290596"),
    [_, U] = (0, React.useState)("#93229D"),
    [X, z] = (0, React.useState)(null),
    [H, O] = (0, React.useState)(!1),
    $ = (0, React.useMemo)(() => null !== X ? X : "dark" === a ? "#0a0a0a" : "#FFFFFF", [a, X]);
  return <div><__mod_56388.Bg /><__mod_56388.VX><__mod_56388.Ec><__mod_56388.Ch onRefresh={t}><div className="relative h-full w-full"><h width="100%" height="100%" speed={o} scrollSpeed={c} density={v} curvature={g} curveExponent={y} vanishPoint={C} waveScale={b} waveAmplitude={P} wavePower={W} waveThreshold={R} lineStart={F} lineEnd={k} lineGap={N} colorSpeed={D} colorFrequency={G} color1={L} color2={_} backgroundColor={$} opacity={d} cursorInteraction={H} /></div></__mod_56388.Ch><__mod_56388.IH><__mod_56388.yt title="Speed" value={o} onChange={s} min={.01} max={3} step={.01} /><__mod_56388.yt title="Scroll Speed" value={c} onChange={p} min={0} max={10} step={.1} /><__mod_56388.yt title="Opacity" value={d} onChange={m} min={0} max={1} step={.05} /><__mod_56388.yt title="Density" value={v} onChange={f} min={10} max={300} step={1} /><__mod_56388.yt title="Curvature" value={g} onChange={x} min={5} max={200} step={1} /><__mod_56388.yt title="Curve Exponent" value={y} onChange={S} min={1} max={8} step={.1} /><__mod_56388.yt title="Vanish Point" value={C} onChange={w} min={0} max={10} step={.1} /><__mod_56388.yt title="Wave Scale" value={b} onChange={j} min={5} max={100} step={1} /><__mod_56388.yt title="Wave Amplitude" value={P} onChange={E} min={0} max={10} step={.1} /><__mod_56388.yt title="Wave Power" value={W} onChange={T} min={1} max={20} step={.5} /><__mod_56388.yt title="Wave Threshold" value={R} onChange={Y} min={0} max={1} step={.01} /><__mod_56388.yt title="Line Start" value={F} onChange={A} min={-2} max={0} step={.05} /><__mod_56388.yt title="Line End" value={k} onChange={I} min={0} max={2} step={.05} /><__mod_56388.yt title="Line Gap" value={N} onChange={q} min={.05} max={2} step={.05} /><__mod_56388.yt title="Color Speed" value={D} onChange={M} min={0} max={20} step={.5} /><__mod_56388.yt title="Color Frequency" value={G} onChange={B} min={.5} max={10} step={.1} /><__mod_56388.W7 title="Color 1" value={L} onChange={V} /><__mod_56388.W7 title="Color 2" value={_} onChange={U} /><__mod_56388.W7 title="Background" value={$} onChange={e => z(e)} /><__mod_56388.tl title="Cursor Interaction" checked={H} onChange={O} /></__mod_56388.IH><__mod_56388.Ub data={[{
          name: "width",
          type: "string | number",
          default: '"100%"',
          description: "Container width"
        }, {
          name: "height",
          type: "string | number",
          default: '"100%"',
          description: "Container height"
        }, {
          name: "className",
          type: "string",
          default: '""',
          description: "Additional CSS classes for styling"
        }, {
          name: "children",
          type: "ReactNode",
          default: "undefined",
          description: "Content rendered above the effect"
        }, {
          name: "speed",
          type: "number",
          default: "0.5",
          description: "Overall animation speed multiplier (0.01–3.0)"
        }, {
          name: "scrollSpeed",
          type: "number",
          default: "2",
          description: "Vertical scroll rate of the grid cells (0–10)"
        }, {
          name: "density",
          type: "number",
          default: "150",
          description: "Number of grid cells per unit: controls line density (10–300)"
        }, {
          name: "curvature",
          type: "number",
          default: "60",
          description: "Perspective bend divisor: higher values flatten the curve (5–200)"
        }, {
          name: "curveExponent",
          type: "number",
          default: "4",
          description: "Exponent controlling perspective distortion intensity (1–8)"
        }, {
          name: "vanishPoint",
          type: "number",
          default: "3.5",
          description: "Y-axis offset for the vanishing point (0–10)"
        }, {
          name: "waveScale",
          type: "number",
          default: "50",
          description: "Scale of the wave pattern (5–100)"
        }, {
          name: "waveAmplitude",
          type: "number",
          default: "2",
          description: "Strength of the sinusoidal wave distortion (0–10)"
        }, {
          name: "wavePower",
          type: "number",
          default: "6",
          description: "Exponent sharpening the wave peaks (1–20)"
        }, {
          name: "waveThreshold",
          type: "number",
          default: "0.35",
          description: "Minimum wave intensity to be visible (0–1)"
        }, {
          name: "lineStart",
          type: "number",
          default: "-1",
          description: "Y coordinate where lines begin appearing (-2–0)"
        }, {
          name: "lineEnd",
          type: "number",
          default: "0.5",
          description: "Y coordinate reference for line sizing gradient (0–2)"
        }, {
          name: "lineGap",
          type: "number",
          default: "0.3",
          description: "Gap between lines: higher values create more spacing (0.05–2)"
        }, {
          name: "colorSpeed",
          type: "number",
          default: "7",
          description: "Speed multiplier for color cycling between the two tones (0–20)"
        }, {
          name: "colorFrequency",
          type: "number",
          default: "2",
          description: "Spatial frequency of the color pattern (0.5–10)"
        }, {
          name: "color1",
          type: "string",
          default: '"#290596"',
          description: "Primary line color (hex)"
        }, {
          name: "color2",
          type: "string",
          default: '"#93229D"',
          description: "Secondary line color (hex)"
        }, {
          name: "backgroundColor",
          type: "string",
          default: '"#000000"',
          description: "Background color (hex)"
        }, {
          name: "opacity",
          type: "number",
          default: "1",
          description: "Master opacity (0–1)"
        }, {
          name: "cursorInteraction",
          type: "boolean",
          default: "false",
          description: "Enable cursor interaction to shift the vanishing point"
        }]} /></__mod_56388.Ec><__mod_56388.lT><__mod_56388.Gv /></__mod_56388.lT></__mod_56388.VX></div>;
};

const FScene: any = h;

export default g;

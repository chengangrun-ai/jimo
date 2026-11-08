import * as __mod_2253 from "../_helpers/2253";
import * as __mod_81712 from "../_helpers/81712";
import * as __mod_50969 from "../_helpers/50969";
import * as __mod_90650 from "../_helpers/90650";
import * as __mod_3907 from "../_helpers/3907";
import * as __mod_90761 from "../_helpers/90761";
import * as __mod_30701 from "../_helpers/30701";
import * as __mod_56388 from "../_helpers/56388";
/**
 * Glowing Ridges
 * Iridescent ridges of light rolling like folded silk
 * slug: glowing-ridges
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
  h = `
precision highp float;

#define MAX_LAYERS 15
#define MAX_DETAIL 10

varying vec2 vUv;

uniform vec2 uResolution;
uniform float uFlow;
uniform float uChurn;
uniform int uLayers;
uniform int uDetail;
uniform float uTurbulence;
uniform float uZoom;
uniform vec2 uShift;
uniform float uRidgeFrequency;
uniform float uRidgePhase;
uniform float uDensity;
uniform float uSwirl;
uniform float uExposure;
uniform float uGain;
uniform vec3 uColorA;
uniform vec3 uColorB;
uniform vec3 uColorC;
uniform float uColorCycle;
uniform float uRotation;
uniform float uGrain;
uniform float uOpacity;
uniform vec3 uBackground;
uniform float uInk;

float hash(vec2 p) {
  p = fract(p * vec2(443.897, 441.423));
  p += dot(p, p.yx + 19.19);
  return fract(p.x * p.y);
}




vec3 palette(float layer) {
  vec3 w = 0.25 + 1.0 * cos(layer * uColorCycle + vec3(0.0, 2.094, 4.189));
  return uColorA * w.x + uColorB * w.y + uColorC * w.z;
}

void main() {


  float c = cos(uRotation);
  float sn = sin(uRotation);
  vec2 turned = mat2(c, -sn, sn, c) * (vUv - 0.5) + 0.5;
  vec2 uv = (turned - 1.0) * uZoom - uShift;


  vec2 p = (uv + vec2(0.6, -0.1)) * uDensity;



  uv *= sin(log(max(abs(uv.y), 1e-4)) * uRidgeFrequency + uRidgePhase);

  float radius = normalize(vec3(length(uv), 0.1, 0.51)).x;
  float drift = (log2(radius) * 15.0 + uFlow) * uSwirl;
  float bearing = sin(atan(uv.y, uv.x));
  vec2 push = sin(vec2(bearing, drift));

  vec3 film = vec3(0.0);
  for (int i = 0; i < MAX_LAYERS; i++) {
    if (i >= uLayers) break;
    float layer = float(i) + 1.0;

    vec2 v = p;
    float f = 1.0;
    for (int k = 0; k < MAX_DETAIL; k++) {
      if (k >= uDetail) break;


      v += (tan(cos(v.yx * f + f + layer - uChurn)) * uTurbulence + 2.5) / f;
      v += push;
      f *= 1.5;
    }

    film += palette(layer) / (5.0 * length(v));
  }

  vec3 light = tanh(max(film, 0.0) * uExposure) * uGain;


  float noise = hash(gl_FragCoord.xy + fract(uChurn) * 1000.0) - 0.5;
  light *= 1.0 + noise * uGrain;
  light *= uOpacity;

  vec3 lit = uBackground + light;



  float amount = max(light.r, max(light.g, light.b));
  float coverage = smoothstep(0.08, 0.6, amount);
  vec3 pigment = amount > 0.0001 ? light / amount : vec3(1.0);
  vec3 inked = uBackground * mix(vec3(1.0), pigment * 0.75, coverage);

  gl_FragColor = vec4(clamp(mix(lit, inked, uInk), 0.0, 1.0), 1.0);
}
`,
  v = (e, t, a) => Math.min(a, Math.max(t, e)),
  p = (e, t) => {
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
    } catch {}
  },
  y = e => {
    let t = window.matchMedia("(min-resolution: 2dppx)");
    return t.addEventListener("change", e), window.addEventListener("resize", e), () => {
      t.removeEventListener("change", e), window.removeEventListener("resize", e);
    };
  },
  x = () => window.devicePixelRatio || 1,
  C = ({
    layers: e,
    detail: t,
    turbulence: a,
    zoom: u,
    shiftX: i,
    shiftY: l,
    ridgeFrequency: s,
    ridgePhase: d,
    density: f,
    flowSpeed: y,
    churnSpeed: x,
    swirl: C,
    exposure: b,
    gain: S,
    colorA: w,
    colorB: j,
    colorC: k,
    colorCycle: R,
    rotation: E,
    grain: P,
    opacity: M,
    backgroundColor: F,
    blend: I,
    paused: A
  }) => {
    let B = (0, React.useRef)(null),
      N = (0, React.useRef)(0),
      D = (0, React.useRef)(0),
      {
        gl: L,
        size: T,
        invalidate: G
      } = (0, __mod_81712.C)(),
      z = (0, React.useMemo)(() => ({
        uResolution: {
          value: new __mod_2253.I9Y(1, 1)
        },
        uFlow: {
          value: 0
        },
        uChurn: {
          value: 0
        },
        uLayers: {
          value: 12
        },
        uDetail: {
          value: 5
        },
        uTurbulence: {
          value: .6
        },
        uZoom: {
          value: 1.1
        },
        uShift: {
          value: new __mod_2253.I9Y(.45, .5)
        },
        uRidgeFrequency: {
          value: 1
        },
        uRidgePhase: {
          value: 2
        },
        uDensity: {
          value: 11
        },
        uSwirl: {
          value: 16
        },
        uExposure: {
          value: .25
        },
        uGain: {
          value: 2
        },
        uColorA: {
          value: p("#ff6a2a", "#ff6a2a")
        },
        uColorB: {
          value: p("#22d3ee", "#22d3ee")
        },
        uColorC: {
          value: p("#c026d3", "#c026d3")
        },
        uColorCycle: {
          value: .4
        },
        uRotation: {
          value: 0
        },
        uGrain: {
          value: .25
        },
        uOpacity: {
          value: .75
        },
        uBackground: {
          value: p("#000000", "#000000")
        },
        uInk: {
          value: 0
        }
      }), []);
    return (0, React.useEffect)(() => {
      let e = B.current;
      e && (g(e.uniforms.uColorA.value, w), g(e.uniforms.uColorB.value, j), g(e.uniforms.uColorC.value, k), g(e.uniforms.uBackground.value, F), G());
    }, [w, j, k, F, G]), (0, React.useEffect)(() => {
      G();
    }, [e, t, a, u, i, l, s, d, f, C, b, S, R, E, P, M, I, G]), (0, __mod_81712.D)((n, r) => {
      let o = B.current;
      if (!o) return;
      if (!A) {
        let e = Math.min(r, .05);
        N.current += e * y, D.current += e * x;
      }
      let c = L.getPixelRatio(),
        m = o.uniforms;
      m.uResolution.value.set(T.width * c, T.height * c), m.uFlow.value = N.current, m.uChurn.value = D.current, m.uLayers.value = Math.round(v(e, 1, 15)), m.uDetail.value = Math.round(v(t, 1, 10)), m.uTurbulence.value = Math.max(a, 0), m.uZoom.value = Math.max(u, .05), m.uShift.value.set(i, l), m.uRidgeFrequency.value = s, m.uRidgePhase.value = d, m.uDensity.value = Math.max(f, .1), m.uSwirl.value = C, m.uExposure.value = Math.max(b, 0), m.uGain.value = Math.max(S, 0), m.uColorCycle.value = R, m.uRotation.value = E * Math.PI / 180, m.uGrain.value = v(P, 0, 2), m.uOpacity.value = v(M, 0, 1), m.uInk.value = +("ink" === I);
    }), <mesh frustumCulled={!1}><planeGeometry args={[1, 1]} /><shaderMaterial ref={B} vertexShader={m} fragmentShader={h} uniforms={z} depthTest={!1} depthWrite={!1} /></mesh>;
  },
  b = ({
    layers: e = 12,
    detail: t = 5,
    turbulence: a = .6,
    zoom: u = 1.1,
    shiftX: i = .45,
    shiftY: l = .5,
    ridgeFrequency: o = 1,
    ridgePhase: c = 2,
    density: m = 11,
    flowSpeed: h = .1,
    churnSpeed: v = 1,
    swirl: p = 16,
    exposure: g = .25,
    gain: b = 2,
    colorA: S = "#ff6a2a",
    colorB: w = "#22d3ee",
    colorC: j = "#c026d3",
    colorCycle: k = .4,
    rotation: R = 0,
    grain: E = .25,
    opacity: P = .75,
    backgroundColor: M = "#000000",
    blend: F = "add",
    paused: I = !1,
    dpr: A = 1,
    className: B,
    children: N
  }) => {
    let D = (0, React.useRef)(null),
      [L, T] = (0, React.useState)(!0),
      G = (0, __mod_50969.I)(),
      z = Math.min((0, React.useSyncExternalStore)(y, x, () => 1), Math.max(A, .5));
    (0, React.useEffect)(() => {
      let e = D.current;
      if (!e || "undefined" == typeof IntersectionObserver) return;
      let t = new IntersectionObserver(([e]) => T(e.isIntersecting), {
        threshold: 0
      });
      return t.observe(e), () => t.disconnect();
    }, []);
    let _ = I || !!G;
    return <div ref={D} className={(0, __mod_90650.cn)("relative overflow-hidden", B)}><div className="absolute inset-0"><__mod_3907.Hl orthographic={!0} dpr={z} frameloop={L && !_ ? "always" : "demand"} gl={{
          antialias: !1,
          alpha: !1,
          powerPreference: "high-performance"
        }}><C layers={e} detail={t} turbulence={a} zoom={u} shiftX={i} shiftY={l} ridgeFrequency={o} ridgePhase={c} density={m} flowSpeed={h} churnSpeed={v} swirl={p} exposure={g} gain={b} colorA={S} colorB={w} colorC={j} colorCycle={k} rotation={R} grain={E} opacity={P} backgroundColor={M} blend={F} paused={_} /></__mod_3907.Hl></div>{N ? <div className="relative z-10 h-full w-full">{N}</div> : null}</div>;
  },
  S = () => () => {},
  w = () => {
    let [e, t] = (0, __mod_90761.I)(),
      {
        resolvedTheme: a
      } = (0, __mod_30701.D)(),
      o = (0, React.useSyncExternalStore)(S, () => !0, () => !1) && "dark" === a,
      [s, d] = (0, React.useState)(12),
      [c, f] = (0, React.useState)(5),
      [m, h] = (0, React.useState)(.6),
      [v, p] = (0, React.useState)(1.1),
      [g, y] = (0, React.useState)(.45),
      [x, C] = (0, React.useState)(.5),
      [w, j] = (0, React.useState)(1),
      [k, R] = (0, React.useState)(2),
      [E, P] = (0, React.useState)(11),
      [M, F] = (0, React.useState)(.1),
      [I, A] = (0, React.useState)(1),
      [B, N] = (0, React.useState)(16),
      [D, L] = (0, React.useState)(.25),
      [T, G] = (0, React.useState)(2),
      [z, _] = (0, React.useState)(.4),
      [X, O] = (0, React.useState)(0),
      [U, Z] = (0, React.useState)(.25),
      [q, H] = (0, React.useState)(.75),
      [Y, W] = (0, React.useState)("#ff6a2a"),
      [V, Q] = (0, React.useState)("#22d3ee"),
      [J, K] = (0, React.useState)("#c026d3"),
      [$, ee] = (0, React.useState)(null),
      [et, ea] = (0, React.useState)(null),
      [en, er] = (0, React.useState)(!1),
      eu = $ ?? (o ? "#000000" : "#ffffff"),
      ei = et ?? (o ? "add" : "ink");
    return <div><__mod_56388.Bg /><__mod_56388.VX><__mod_56388.Ec><__mod_56388.Ch onRefresh={t} minHeight={560}><div className="relative h-full w-full"><BView className="h-full w-full" layers={s} detail={c} turbulence={m} zoom={v} shiftX={g} shiftY={x} ridgeFrequency={w} ridgePhase={k} density={E} flowSpeed={M} churnSpeed={I} swirl={B} exposure={D} gain={T} colorCycle={z} rotation={X} grain={U} opacity={q} colorA={Y} colorB={V} colorC={J} backgroundColor={eu} blend={ei} paused={en}/></div></__mod_56388.Ch><__mod_56388.IH><__mod_56388.yt title="Layers" min={1} max={15} step={1} value={s} onChange={d} /><__mod_56388.yt title="Detail" min={1} max={10} step={1} value={c} onChange={f} /><__mod_56388.yt title="Turbulence" min={0} max={3} step={.05} value={m} onChange={h} /><__mod_56388.yt title="Zoom" min={.2} max={3} step={.05} value={v} onChange={p} /><__mod_56388.yt title="Shift X" min={-2} max={2} step={.01} value={g} onChange={y} /><__mod_56388.yt title="Shift Y" min={-2} max={2} step={.01} value={x} onChange={C} /><__mod_56388.yt title="Ridge Frequency" min={0} max={4} step={.05} value={w} onChange={j} /><__mod_56388.yt title="Ridge Phase" min={0} max={6.28} step={.01} value={k} onChange={R} /><__mod_56388.yt title="Density" min={1} max={40} step={.5} value={E} onChange={P} /><__mod_56388.yt title="Flow Speed" min={-2} max={2} step={.01} value={M} onChange={F} /><__mod_56388.yt title="Churn Speed" min={-4} max={4} step={.05} value={I} onChange={A} /><__mod_56388.yt title="Swirl" min={0} max={40} step={.1} value={B} onChange={N} /><__mod_56388.yt title="Exposure" min={0} max={1.5} step={.01} value={D} onChange={L} /><__mod_56388.yt title="Gain" min={0} max={4} step={.05} value={T} onChange={G} /><__mod_56388.yt title="Color Cycle" min={0} max={4} step={.05} value={z} onChange={_} /><__mod_56388.yt title="Rotation" min={-180} max={180} step={1} value={X} onChange={O} valueUnit="\xb0" /><__mod_56388.yt title="Grain" min={0} max={2} step={.05} value={U} onChange={Z} /><__mod_56388.yt title="Opacity" min={0} max={1} step={.05} value={q} onChange={H} /><__mod_56388.W7 title="Color A" value={Y} onChange={W} /><__mod_56388.W7 title="Color B" value={V} onChange={Q} /><__mod_56388.W7 title="Color C" value={J} onChange={K} /><__mod_56388.W7 title="Background" value={eu} onChange={ee} /><__mod_56388.bg title="Blend" value={ei} onChange={e => ea(e)} options={[{
              label: "Add",
              value: "add"
            }, {
              label: "Ink",
              value: "ink"
            }]} /><__mod_56388.tl title="Paused" checked={en} onChange={er} /></__mod_56388.IH><__mod_56388.Ub data={[{
            name: "layers",
            type: "number",
            default: "12",
            description: "Number of colour layers stacked into the film, 1 to 15."
          }, {
            name: "detail",
            type: "number",
            default: "5",
            description: "Noise octaves per layer, 1 to 10. Fewer is smoother."
          }, {
            name: "turbulence",
            type: "number",
            default: "0.6",
            description: "Strength of the flow distortion inside each layer."
          }, {
            name: "zoom",
            type: "number",
            default: "1.1",
            description: "Zoom of the whole field. Larger shows fewer, wider ridges."
          }, {
            name: "shiftX",
            type: "number",
            default: "0.45",
            description: "Horizontal shift of the viewpoint."
          }, {
            name: "shiftY",
            type: "number",
            default: "0.5",
            description: "Vertical shift of the viewpoint."
          }, {
            name: "ridgeFrequency",
            type: "number",
            default: "1",
            description: "How many ridges appear across the frame."
          }, {
            name: "ridgePhase",
            type: "number",
            default: "2",
            description: "Phase offset of the ridges."
          }, {
            name: "density",
            type: "number",
            default: "11",
            description: "Scale of the flow pattern inside the ridges."
          }, {
            name: "flowSpeed",
            type: "number",
            default: "0.1",
            description: "Speed the colours drift along the ridges."
          }, {
            name: "churnSpeed",
            type: "number",
            default: "1",
            description: "Speed the fine detail churns."
          }, {
            name: "swirl",
            type: "number",
            default: "16",
            description: "Amount of swirl the drift adds."
          }, {
            name: "exposure",
            type: "number",
            default: "0.25",
            description: "Exposure before tone compression."
          }, {
            name: "gain",
            type: "number",
            default: "2",
            description: "Output gain after tone compression."
          }, {
            name: "colorCycle",
            type: "number",
            default: "0.4",
            description: "How fast the palette cycles across layers."
          }, {
            name: "rotation",
            type: "number",
            default: "0",
            description: "Rotation of the whole pattern in degrees."
          }, {
            name: "grain",
            type: "number",
            default: "0.25",
            description: "Film grain strength riding on the glow, 0 for none."
          }, {
            name: "opacity",
            type: "number",
            default: "0.75",
            description: "Strength of the effect over the background, 0 to 1."
          }, {
            name: "colorA",
            type: "string",
            default: '"#ff6a2a"',
            description: "First palette colour."
          }, {
            name: "colorB",
            type: "string",
            default: '"#22d3ee"',
            description: "Second palette colour."
          }, {
            name: "colorC",
            type: "string",
            default: '"#c026d3"',
            description: "Third palette colour."
          }, {
            name: "backgroundColor",
            type: "string",
            default: '"#000000"',
            description: "Colour behind the film."
          }, {
            name: "blend",
            type: '"add" | "ink"',
            default: '"add"',
            description: '"add" lights the background, "ink" darkens it for light themes.'
          }, {
            name: "paused",
            type: "boolean",
            default: "false",
            description: "Freeze the animation."
          }, {
            name: "dpr",
            type: "number",
            default: "1",
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

const BView: any = b;

export default w;

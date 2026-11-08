import * as __mod_81712 from "../_helpers/81712";
import * as __mod_2253 from "../_helpers/2253";
import * as __mod_90650 from "../_helpers/90650";
import * as __mod_3907 from "../_helpers/3907";
import * as __mod_90761 from "../_helpers/90761";
import * as __mod_30701 from "../_helpers/30701";
import * as __mod_56388 from "../_helpers/56388";
/**
 * Neural Tunnel
 * An endless tunnel of pulsing neural strands
 * slug: neural-tunnel
 * category: background
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let p = `
varying vec2 vPlane;

void main() {
  vPlane = uv;
  gl_Position = vec4(position.xy * 2.0, 0.0, 1.0);
}
`,
  m = `
precision highp float;

#define MAX_LAYERS 34

varying vec2 vPlane;

uniform vec2 uCanvas;
uniform float uClock;
uniform int uLayers;
uniform float uFalloff;
uniform float uBlend;
uniform float uFeedback;
uniform float uAmplitude;
uniform float uScale;
uniform float uPerspective;
uniform float uZoom;
uniform float uSpeed;
uniform float uBands;
uniform float uPhase;
uniform float uSpread;
uniform float uGamut;
uniform float uContrast;
uniform float uVignette;
uniform vec3 uInk;
uniform vec3 uHot;
uniform vec3 uBackdrop;
uniform float uBackdropAlpha;
uniform float uOpacity;
uniform vec2 uFocus;

float lattice(vec3 p) {
  return dot(cos(p), sin(p.yzx));
}

float knit(float near, float far, float k) {
  float soft = max(k, 0.0001);
  float h = clamp(0.5 + 0.5 * (far - near) / soft, 0.0, 1.0);
  return mix(far, near, h) - soft * h * (1.0 - h);
}

float cascade(vec3 p) {
  float held = 100.0;
  float amp = max(uAmplitude, 0.01);
  float shrink = max(uFalloff, 1.02);
  float creep = uClock * uSpeed;

  for (int i = 0; i < MAX_LAYERS; i++) {
    if (i >= uLayers) break;
    p.z += held * uFeedback + creep;
    held = knit(held, abs(lattice(p / amp) * amp), uBlend * amp);
    amp /= shrink;
  }
  return held;
}

void main() {
  vec2 pixel = vPlane * uCanvas;
  vec2 plate = (2.0 * pixel - uCanvas) / max(uCanvas.y, 1.0);
  plate = plate * max(uZoom, 0.01) + uFocus;

  vec3 ray = normalize(vec3(plate, max(uPerspective, 0.001)));
  float depth = cascade(ray * uScale);

  float cycle = uPhase + depth * uBands;
  vec3 pulse = 0.5 + uGamut * cos(cycle + uSpread * vec3(0.0, 12.0, 24.0));
  pulse = pow(clamp(pulse, 0.0, 1.0), vec3(max(uContrast, 0.05)));

  vec3 tint = mix(uInk, uHot, pulse);

  vec2 edge = vPlane - 0.5;
  float cover = clamp(1.0 - uVignette * dot(edge, edge) * 2.0, 0.0, 1.0);
  float rest = uBackdropAlpha * (1.0 - cover);

  gl_FragColor = vec4(tint * cover + uBackdrop * rest, cover + rest) * uOpacity;
}
`,
  f = (e, t, a) => Math.min(a, Math.max(t, e)),
  v = e => {
    let t = window.matchMedia("(min-resolution: 2dppx)");
    return t.addEventListener("change", e), window.addEventListener("resize", e), () => {
      t.removeEventListener("change", e), window.removeEventListener("resize", e);
    };
  },
  h = () => window.devicePixelRatio || 1,
  x = ({
    layers: e,
    falloff: t,
    blend: a,
    feedback: u,
    amplitude: l,
    scale: s,
    perspective: i,
    zoom: d,
    speed: v,
    bands: h,
    phase: x,
    spread: y,
    gamut: g,
    contrast: b,
    vignette: C,
    color: S,
    hotColor: w,
    backgroundColor: k,
    opacity: j,
    cursorInteraction: P,
    cursorShift: B,
    paused: E,
    adaptiveQuality: F,
    targetFps: M,
    readPointer: I
  }) => {
    let L = (0, React.useRef)(null),
      R = (0, React.useRef)(0),
      N = (0, React.useRef)({
        x: .5,
        y: .5
      }),
      A = (0, React.useRef)({
        frames: 0,
        span: 0,
        wins: 0
      }),
      {
        gl: z,
        size: H
      } = (0, __mod_81712.C)(),
      G = (0, React.useMemo)(() => ({
        uCanvas: {
          value: new __mod_2253.I9Y(1, 1)
        },
        uClock: {
          value: 0
        },
        uLayers: {
          value: 24
        },
        uFalloff: {
          value: 1.25
        },
        uBlend: {
          value: 1.5
        },
        uFeedback: {
          value: .6
        },
        uAmplitude: {
          value: .5
        },
        uScale: {
          value: 1
        },
        uPerspective: {
          value: .1
        },
        uZoom: {
          value: 1
        },
        uSpeed: {
          value: .1
        },
        uBands: {
          value: 20
        },
        uPhase: {
          value: 3.5
        },
        uSpread: {
          value: 0
        },
        uGamut: {
          value: 1
        },
        uContrast: {
          value: 1.85
        },
        uVignette: {
          value: .3
        },
        uInk: {
          value: new __mod_2253.Q1f("#160a24")
        },
        uHot: {
          value: new __mod_2253.Q1f("#e879f9")
        },
        uBackdrop: {
          value: new __mod_2253.Q1f("#0a0a0a")
        },
        uBackdropAlpha: {
          value: 1
        },
        uOpacity: {
          value: 1
        },
        uFocus: {
          value: new __mod_2253.I9Y(0, 0)
        }
      }), []);
    return (0, React.useEffect)(() => {
      let e = L.current;
      if (!e) return;
      e.uniforms.uInk.value.set(S), e.uniforms.uHot.value.set(w);
      let t = "transparent" === k || "none" === k || "" === k;
      e.uniforms.uBackdropAlpha.value = +!t, t || e.uniforms.uBackdrop.value.set(k);
    }, [S, w, k]), (0, __mod_81712.D)((n, r) => {
      let o = L.current;
      if (!o) return;
      let c = Math.min(r, .05);
      E || (R.current += c);
      let p = z.getPixelRatio(),
        m = o.uniforms;
      if (m.uCanvas.value.set(H.width * p, H.height * p), m.uClock.value = R.current, m.uLayers.value = Math.round(f(e, 1, 34)), m.uFalloff.value = t, m.uBlend.value = a, m.uFeedback.value = u, m.uAmplitude.value = l, m.uScale.value = s, m.uPerspective.value = i, m.uZoom.value = d, m.uSpeed.value = .1 * v, m.uBands.value = h, m.uPhase.value = x, m.uSpread.value = y, m.uGamut.value = g, m.uContrast.value = b, m.uVignette.value = C, m.uOpacity.value = j, P) {
        let e = I(),
          t = 1 - Math.exp(-(5 * c));
        N.current.x += (e.x - N.current.x) * t, N.current.y += (e.y - N.current.y) * t, m.uFocus.value.set((N.current.x - .5) * B * 2, (N.current.y - .5) * B * 2);
      } else m.uFocus.value.set(0, 0);
      if (!F) return;
      let S = A.current;
      if (S.frames += 1, S.span += r, S.span < .75) return;
      let w = S.frames / S.span;
      S.frames = 0, S.span = 0;
      let k = Math.min(window.devicePixelRatio || 1, 2);
      w < .85 * M && p > .5 ? (S.wins = 0, z.setPixelRatio(Math.max(.5, .75 * p))) : w > .98 * M && p < k ? (S.wins += 1, S.wins >= 3 && (S.wins = 0, z.setPixelRatio(Math.min(k, 1.25 * p)))) : S.wins = 0;
    }), <mesh frustumCulled={!1}><planeGeometry args={[1, 1]} /><shaderMaterial ref={L} vertexShader={p} fragmentShader={m} uniforms={G} transparent={!0} depthTest={!1} depthWrite={!1} premultipliedAlpha={!0} /></mesh>;
  },
  y = ({
    layers: e = 24,
    falloff: t = 1.25,
    blend: a = 1.5,
    feedback: u = .6,
    amplitude: l = .5,
    scale: s = 1,
    perspective: o = .1,
    zoom: c = 1,
    speed: p = 1,
    bands: m = 20,
    phase: y = 3.5,
    spread: g = 0,
    gamut: b = 1,
    contrast: C = 1.85,
    vignette: S = .3,
    color: w = "#160a24",
    hotColor: k = "#e879f9",
    backgroundColor: j = "#0a0a0a",
    opacity: P = 1,
    cursorInteraction: B = !0,
    cursorShift: E = .25,
    paused: F = !1,
    adaptiveQuality: M = !0,
    targetFps: I = 60,
    dpr: L = 1.5,
    className: R,
    children: N
  }) => {
    let A = (0, React.useRef)(null),
      z = (0, React.useRef)({
        x: .5,
        y: .5
      }),
      [H, G] = (0, React.useState)(!0),
      O = Math.min((0, React.useSyncExternalStore)(v, h, () => 1), Math.max(L, .5)),
      T = (0, React.useCallback)(() => z.current, []);
    return (0, React.useEffect)(() => {
      let e = A.current;
      if (!e || "undefined" == typeof IntersectionObserver) return;
      let t = new IntersectionObserver(([e]) => G(e.isIntersecting), {
        threshold: 0
      });
      return t.observe(e), () => t.disconnect();
    }, []), (0, React.useEffect)(() => {
      let e = A.current;
      if (!e || !B) return;
      let t = t => {
          let a = e.getBoundingClientRect();
          a.width && a.height && (z.current.x = f((t.clientX - a.left) / a.width, 0, 1), z.current.y = f(1 - (t.clientY - a.top) / a.height, 0, 1));
        },
        a = () => {
          z.current.x = .5, z.current.y = .5;
        };
      return e.addEventListener("pointermove", t), e.addEventListener("pointerleave", a), () => {
        e.removeEventListener("pointermove", t), e.removeEventListener("pointerleave", a);
      };
    }, [B]), <div ref={A} className={(0, __mod_90650.cn)("relative overflow-hidden", R)}><div className="absolute inset-0"><__mod_3907.Hl orthographic={!0} dpr={O} frameloop={H ? "always" : "demand"} gl={{
          antialias: !1,
          alpha: !0,
          powerPreference: "high-performance"
        }}><X layers={e} falloff={t} blend={a} feedback={u} amplitude={l} scale={s} perspective={o} zoom={c} speed={p} bands={m} phase={y} spread={g} gamut={b} contrast={C} vignette={S} color={w} hotColor={k} backgroundColor={j} opacity={P} cursorInteraction={B} cursorShift={E} paused={F} adaptiveQuality={M} targetFps={I} readPointer={T} /></__mod_3907.Hl></div>{N ? <div className="relative z-10 h-full w-full">{N}</div> : null}</div>;
  },
  g = () => () => {},
  b = () => {
    let [e, t] = (0, __mod_90761.I)(),
      {
        resolvedTheme: a
      } = (0, __mod_30701.D)(),
      o = (0, React.useSyncExternalStore)(g, () => !0, () => !1) && "dark" === a,
      [i, c] = (0, React.useState)(24),
      [d, p] = (0, React.useState)(1.25),
      [m, f] = (0, React.useState)(1.5),
      [v, h] = (0, React.useState)(.6),
      [x, b] = (0, React.useState)(.5),
      [C, S] = (0, React.useState)(1),
      [w, k] = (0, React.useState)(.1),
      [j, P] = (0, React.useState)(1),
      [B, E] = (0, React.useState)(1),
      [F, M] = (0, React.useState)(20),
      [I, L] = (0, React.useState)(3.5),
      [R, N] = (0, React.useState)(0),
      [A, z] = (0, React.useState)(1),
      [H, G] = (0, React.useState)(1.85),
      [O, T] = (0, React.useState)(.3),
      [_, V] = (0, React.useState)(1),
      [Q, W] = (0, React.useState)(!0),
      [X, Y] = (0, React.useState)(.25),
      [Z, D] = (0, React.useState)(!1),
      [U, q] = (0, React.useState)(null),
      [J, K] = (0, React.useState)(null),
      [$, ee] = (0, React.useState)(null),
      et = (0, React.useMemo)(() => null !== U ? U : o ? "#0a0a0a" : "#ffffff", [o, U]),
      ea = (0, React.useMemo)(() => null !== J ? J : o ? "#160a24" : "#ffffff", [o, J]),
      en = (0, React.useMemo)(() => null !== $ ? $ : o ? "#e879f9" : "#6d28d9", [o, $]);
    return <div><__mod_56388.Bg /><__mod_56388.VX><__mod_56388.Ec><__mod_56388.Ch onRefresh={t}><div className="relative h-full w-full"><YView className="h-full w-full" layers={i} falloff={d} blend={m} feedback={v} amplitude={x} scale={C} perspective={w} zoom={j} speed={B} bands={F} phase={I} spread={R} gamut={A} contrast={H} vignette={O} color={ea} hotColor={en} backgroundColor={et} opacity={_} cursorInteraction={Q} cursorShift={X} paused={Z}/></div></__mod_56388.Ch><__mod_56388.IH><__mod_56388.yt title="Layers" min={1} max={34} step={1} value={i} onChange={c} /><__mod_56388.yt title="Falloff" min={1.05} max={3} step={.01} value={d} onChange={p} /><__mod_56388.yt title="Blend" min={.1} max={4} step={.05} value={m} onChange={f} /><__mod_56388.yt title="Feedback" min={0} max={1.5} step={.01} value={v} onChange={h} /><__mod_56388.yt title="Amplitude" min={.1} max={1.5} step={.01} value={x} onChange={b} /><__mod_56388.yt title="Scale" min={.2} max={3} step={.05} value={C} onChange={S} /><__mod_56388.yt title="Perspective" min={.02} max={1} step={.01} value={w} onChange={k} /><__mod_56388.yt title="Zoom" min={.3} max={3} step={.05} value={j} onChange={P} /><__mod_56388.yt title="Speed" min={0} max={4} step={.05} value={B} onChange={E} /><__mod_56388.yt title="Bands" min={1} max={60} step={1} value={F} onChange={M} /><__mod_56388.yt title="Phase" min={0} max={6.28} step={.05} value={I} onChange={L} /><__mod_56388.yt title="Spread" min={0} max={2} step={.01} value={R} onChange={N} /><__mod_56388.yt title="Gamut" min={.1} max={2} step={.05} value={A} onChange={z} /><__mod_56388.yt title="Contrast" min={.2} max={3} step={.05} value={H} onChange={G} /><__mod_56388.yt title="Vignette" min={0} max={1} step={.01} value={O} onChange={T} /><__mod_56388.yt title="Opacity" min={0} max={1} step={.01} value={_} onChange={V} /><__mod_56388.W7 title="Color" value={ea} onChange={K} /><__mod_56388.W7 title="Hot Color" value={en} onChange={ee} /><__mod_56388.W7 title="Background" value={et} onChange={q} /><__mod_56388.tl title="Cursor Interaction" checked={Q} onChange={W} /><__mod_56388.yt title="Cursor Shift" min={0} max={1} step={.01} value={X} onChange={Y} /><__mod_56388.tl title="Paused" checked={Z} onChange={D} /></__mod_56388.IH><__mod_56388.Ub data={[{
            name: "layers",
            type: "number",
            default: "24",
            description: "Gyroid octaves stacked into the tunnel, 1 to 34."
          }, {
            name: "falloff",
            type: "number",
            default: "1.25",
            description: "How fast each octave shrinks, above 1."
          }, {
            name: "blend",
            type: "number",
            default: "1.5",
            description: "Softness of the union between octaves."
          }, {
            name: "feedback",
            type: "number",
            default: "0.6",
            description: "How strongly each octave warps the next."
          }, {
            name: "amplitude",
            type: "number",
            default: "0.5",
            description: "Scale of the first octave."
          }, {
            name: "scale",
            type: "number",
            default: "1",
            description: "Overall size of the structure."
          }, {
            name: "perspective",
            type: "number",
            default: "0.1",
            description: "Ray depth, lower widens the field of view."
          }, {
            name: "zoom",
            type: "number",
            default: "1",
            description: "Framing of the tunnel mouth."
          }, {
            name: "speed",
            type: "number",
            default: "1",
            description: "Travel speed through the tunnel."
          }, {
            name: "bands",
            type: "number",
            default: "20",
            description: "Colour cycles across the depth range."
          }, {
            name: "phase",
            type: "number",
            default: "3.5",
            description: "Starting offset of the colour cycle."
          }, {
            name: "spread",
            type: "number",
            default: "0",
            description: "Channel separation across the spectrum, 1 matches the classic palette."
          }, {
            name: "gamut",
            type: "number",
            default: "1",
            description: "Palette amplitude, above 0.5 clips the bands into hard filaments."
          }, {
            name: "contrast",
            type: "number",
            default: "1.85",
            description: "Tone response curve, above 1 deepens the shadows."
          }, {
            name: "vignette",
            type: "number",
            default: "0.3",
            description: "Corner falloff, 0 to 1."
          }, {
            name: "color",
            type: "string",
            default: '"#160a24"',
            description: "Base colour the tunnel sits in."
          }, {
            name: "hotColor",
            type: "string",
            default: '"#e879f9"',
            description: "Colour of the bright filaments."
          }, {
            name: "backgroundColor",
            type: "string",
            default: '"#0a0a0a"',
            description: 'Panel backdrop, or "transparent" to show the page through.'
          }, {
            name: "opacity",
            type: "number",
            default: "1",
            description: "Master alpha."
          }, {
            name: "cursorInteraction",
            type: "boolean",
            default: "true",
            description: "Let the pointer steer the tunnel."
          }, {
            name: "cursorShift",
            type: "number",
            default: "0.25",
            description: "How far the pointer steers, 0 to 1."
          }, {
            name: "paused",
            type: "boolean",
            default: "false",
            description: "Freeze the animation."
          }, {
            name: "adaptiveQuality",
            type: "boolean",
            default: "true",
            description: "Scale back resolution when the frame budget slips."
          }, {
            name: "targetFps",
            type: "number",
            default: "60",
            description: "Frame rate the quality meter aims to hold."
          }, {
            name: "dpr",
            type: "number",
            default: "1.5",
            description: "Upper device pixel ratio bound."
          }, {
            name: "className",
            type: "string",
            default: "undefined",
            description: "Extra classes for the panel."
          }, {
            name: "children",
            type: "ReactNode",
            default: "undefined",
            description: "Content layered above the panel."
          }]} /></__mod_56388.Ec><__mod_56388.lT><__mod_56388.Gv /></__mod_56388.lT></__mod_56388.VX></div>;
  };

const X: any = x;

const YView: any = y;

export default b;

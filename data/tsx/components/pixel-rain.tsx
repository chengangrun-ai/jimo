import * as __mod_81712 from "../_helpers/81712";
import * as __mod_2253 from "../_helpers/2253";
import * as __mod_90650 from "../_helpers/90650";
import * as __mod_3907 from "../_helpers/3907";
import * as __mod_90761 from "../_helpers/90761";
import * as __mod_30701 from "../_helpers/30701";
import * as __mod_56388 from "../_helpers/56388";
/**
 * Pixel Rain
 * Pixelated streaks falling in a quiet digital rain
 * slug: pixel-rain
 * category: background
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let m = `
varying vec2 vPlane;

void main() {
  vPlane = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`,
  p = `
precision highp float;

varying vec2 vPlane;

uniform vec2 uCanvas;
uniform float uClock;
uniform float uColumn;
uniform float uScatter;
uniform float uWaveFreq;
uniform float uWaveAmp;
uniform float uTrail;
uniform float uAmbient;
uniform vec3 uInk;
uniform vec3 uHot;
uniform float uDownward;
uniform float uGain;
uniform float uGamma;
uniform float uVignette;
uniform float uOpacity;
uniform vec3 uBackdrop;
uniform float uBackdropAlpha;
uniform vec2 uPointer;
uniform float uCursorGlow;
uniform float uCursorReach;

void main() {
  vec2 pixel = vPlane * uCanvas;
  float lane = floor(pixel.x / max(uColumn, 1.0));

  float seed = lane * uScatter;
  float drift = fract(tan(seed) + sin(uWaveFreq * seed) * uWaveAmp);
  float pace = 1.0 + floor(fract(tan(seed * 1.7)) * 3.0);
  float span = (0.45 + fract(tan(seed * 2.3)) * 1.1) / max(uTrail, 0.01);

  float axis = mix(1.0 - vPlane.y, vPlane.y, uDownward);
  float travel = fract(uClock * pace + drift);
  float head = (1.0 + span) - travel * (1.0 + 2.0 * span);
  float depth = axis - head;

  float aa = 1.5 / max(uCanvas.y, 1.0);
  float streak = max(1.0 - depth / span, 0.0) * smoothstep(-aa, aa, depth);

  float centre = (lane + 0.5) * max(uColumn, 1.0) / max(uCanvas.x, 1.0);
  float reach = max(uCursorReach, 0.001);
  float near = exp(-pow((centre - uPointer.x) / reach, 2.0));
  streak *= 1.0 + near * uCursorGlow * uPointer.y * 2.0;

  float level = max(uAmbient + streak, 0.0);

  vec3 tint = mix(uInk, uHot, smoothstep(0.55, 1.0, streak));

  vec2 off = vPlane - 0.5;
  float edge = 1.0 - uVignette * smoothstep(0.2, 0.75, length(off));

  float cover = clamp(pow(max(level, 0.0), uGamma) * uGain * edge, 0.0, 1.0);
  float rest = uBackdropAlpha * (1.0 - cover);
  gl_FragColor = vec4(tint * cover + uBackdrop * rest, cover + rest) * uOpacity;
}
`,
  f = () => () => {},
  v = () => window.devicePixelRatio || 1,
  h = e => {
    let t = e.trim().toLowerCase();
    return "transparent" === t || "none" === t || "" === t;
  },
  g = ({
    ceiling: e,
    readPointer: t,
    columnWidth: a,
    speed: l,
    scatter: u,
    waveFrequency: o,
    waveAmplitude: s,
    trail: d,
    ambient: f,
    color: v,
    hotColor: g,
    backgroundColor: x,
    direction: C,
    brightness: w,
    gamma: b,
    vignette: y,
    opacity: k,
    cursorInteraction: S,
    cursorGlow: j,
    cursorReach: P,
    adaptiveQuality: R,
    targetFps: A,
    paused: M
  }) => {
    let {
        gl: G,
        invalidate: W,
        setDpr: I
      } = (0, __mod_81712.C)(),
      B = (0, React.useRef)(null),
      E = (0, React.useRef)(0),
      F = (0, React.useRef)(0),
      H = (0, React.useRef)({
        scale: e,
        frames: 0,
        span: 0,
        wins: 0,
        roof: 1 / 0
      }),
      [N, D] = (0, React.useState)(!1);
    (0, React.useEffect)(() => {
      let e = window.matchMedia("(prefers-reduced-motion: reduce)"),
        t = () => D(e.matches);
      return t(), e.addEventListener("change", t), () => e.removeEventListener("change", t);
    }, []), (0, React.useEffect)(() => {
      let t = H.current;
      t.scale = e, t.roof = 1 / 0, t.wins = 0, I(e);
    }, [e, I]);
    let T = (0, React.useMemo)(() => ({
      uCanvas: {
        value: new __mod_2253.I9Y(1, 1)
      },
      uClock: {
        value: 0
      },
      uColumn: {
        value: 3
      },
      uScatter: {
        value: 1
      },
      uWaveFreq: {
        value: .2
      },
      uWaveAmp: {
        value: 1
      },
      uTrail: {
        value: 3
      },
      uAmbient: {
        value: .08
      },
      uInk: {
        value: new __mod_2253.Q1f("#16a34a")
      },
      uHot: {
        value: new __mod_2253.Q1f("#22c55e")
      },
      uDownward: {
        value: 1
      },
      uGain: {
        value: 1
      },
      uGamma: {
        value: 1
      },
      uVignette: {
        value: 0
      },
      uOpacity: {
        value: 1
      },
      uBackdrop: {
        value: new __mod_2253.Q1f("#0a0a0a")
      },
      uBackdropAlpha: {
        value: 1
      },
      uPointer: {
        value: new __mod_2253.I9Y(.5, 0)
      },
      uCursorGlow: {
        value: .35
      },
      uCursorReach: {
        value: .12
      }
    }), []);
    return (0, __mod_81712.D)((n, r) => {
      let i = B.current;
      if (!i) return;
      let m = i.uniforms,
        p = Math.min(r, .05);
      E.current += p, M || N || (F.current = (F.current + p * l * .32) % 1);
      let D = G.getDrawingBufferSize(new __mod_2253.I9Y());
      m.uCanvas.value.set(D.x, D.y), m.uClock.value = F.current, m.uColumn.value = Math.max(a, 1) * G.getPixelRatio(), m.uScatter.value = u, m.uWaveFreq.value = o, m.uWaveAmp.value = s, m.uTrail.value = Math.max(d, .01), m.uAmbient.value = f, m.uInk.value.set(v), m.uHot.value.set(g), m.uDownward.value = +("down" === C), m.uGain.value = w, m.uGamma.value = Math.max(b, .05), m.uVignette.value = y, m.uOpacity.value = k, h(x) ? m.uBackdropAlpha.value = 0 : (m.uBackdrop.value.set(x), m.uBackdropAlpha.value = 1);
      let T = t();
      T.reach += (T.toReach - T.reach) * Math.min(5 * p, 1), m.uPointer.value.set(T.x, S ? T.reach : 0), m.uCursorGlow.value = j, m.uCursorReach.value = P;
      let q = H.current;
      if (q.frames += 1, q.span += r, q.span >= .75) {
        let t = q.frames / q.span;
        if (q.frames = 0, q.span = 0, R && E.current > .5) if (t < .85 * A && q.scale > .5) q.roof = q.scale, q.scale = Math.max(.5, .75 * q.scale), q.wins = 0, I(q.scale);else if (t >= .95 * A && q.scale < e) {
          q.wins += 1;
          let t = Math.min(e, 1.25 * q.scale);
          q.wins >= 3 && t < .98 * q.roof && (q.scale = t, q.wins = 0, I(t));
        } else q.wins = 0;
      }
      W();
    }), <mesh frustumCulled={!1}><planeGeometry args={[2, 2]} /><shaderMaterial ref={B} uniforms={T} vertexShader={m} fragmentShader={p} transparent={!0} premultipliedAlpha={!0} depthTest={!1} depthWrite={!1} /></mesh>;
  },
  x = ({
    width: e = "100%",
    height: t = "100%",
    className: a,
    children: l,
    columnWidth: u = 3,
    speed: o = .2,
    scatter: i = 2.5,
    waveFrequency: c = .2,
    waveAmplitude: m = .6,
    trail: p = 6,
    ambient: x = 0,
    color: C = "#a54693",
    hotColor: w = "#a54693",
    backgroundColor: b = "#0a0a0a",
    direction: y = "down",
    brightness: k = 1,
    gamma: S = 1,
    vignette: j = 0,
    opacity: P = 1,
    cursorInteraction: R = !0,
    cursorGlow: A = .9,
    cursorReach: M = .12,
    adaptiveQuality: G = !0,
    targetFps: W = 60,
    dpr: I = 2,
    paused: B = !1
  }) => {
    let E = (0, React.useRef)(null),
      F = (0, React.useRef)({
        x: .5,
        reach: 0,
        toReach: 0
      }),
      [H, N] = (0, React.useState)(!1),
      D = (0, React.useSyncExternalStore)(f, v, () => 1);
    (0, React.useEffect)(() => {
      let e = E.current;
      if (!e) return;
      let t = new IntersectionObserver(([e]) => N(e.isIntersecting), {
        rootMargin: "120px"
      });
      return t.observe(e), () => t.disconnect();
    }, []);
    let T = (0, React.useCallback)(() => F.current, []),
      q = (0, React.useCallback)(e => {
        let t = E.current;
        if (!t) return;
        let a = t.getBoundingClientRect();
        a.width && (F.current.x = (e.clientX - a.left) / a.width, F.current.toReach = 1);
      }, []),
      O = (0, React.useCallback)(() => {
        F.current.toReach = 0;
      }, []),
      L = (0, React.useMemo)(() => Math.min(Math.max(Math.min(D, I), .5), 2), [D, I]);
    return <div ref={E} className={(0, __mod_90650.cn)("relative overflow-hidden", a)} style={{
      width: e,
      height: t,
      backgroundColor: h(b) ? void 0 : b
    }} onPointerMove={R ? q : void 0} onPointerLeave={R ? O : void 0}><__mod_3907.Hl className="absolute inset-0" dpr={L} frameloop={H ? "always" : "demand"} gl={{
        antialias: !1,
        alpha: !0,
        powerPreference: "high-performance"
      }} orthographic={!0}><GScene awake={H} ceiling={L} readPointer={T} columnWidth={u} speed={o} scatter={i} waveFrequency={c} waveAmplitude={m} trail={p} ambient={x} color={C} hotColor={w} backgroundColor={b} direction={y} brightness={k} gamma={S} vignette={j} opacity={P} cursorInteraction={R} cursorGlow={A} cursorReach={M} adaptiveQuality={G} targetFps={W} paused={B} /></__mod_3907.Hl>{l ? <div className="relative z-10 h-full w-full">{l}</div> : null}</div>;
  },
  C = () => () => {},
  w = () => {
    let [e, t] = (0, __mod_90761.I)(),
      {
        resolvedTheme: a
      } = (0, __mod_30701.D)(),
      i = (0, React.useSyncExternalStore)(C, () => !0, () => !1) && "dark" === a,
      [s, c] = (0, React.useState)(null),
      [d, m] = (0, React.useState)(null),
      [p, f] = (0, React.useState)(null),
      [v, h] = (0, React.useState)(null),
      g = (0, React.useMemo)(() => null !== s ? s : i ? "#0a0a0a" : "#ffffff", [i, s]),
      w = (0, React.useMemo)(() => null !== d ? d : "#a54693", [d]),
      b = (0, React.useMemo)(() => null !== p ? p : "#a54693", [p]),
      y = (0, React.useMemo)(() => null !== v ? v : 0, [v]),
      [k, S] = (0, React.useState)(3),
      [j, P] = (0, React.useState)(.2),
      [R, A] = (0, React.useState)(2.5),
      [M, G] = (0, React.useState)(.2),
      [W, I] = (0, React.useState)(.6),
      [B, E] = (0, React.useState)(6),
      [F, H] = (0, React.useState)("down"),
      [N, D] = (0, React.useState)(1),
      [T, q] = (0, React.useState)(1),
      [O, L] = (0, React.useState)(0),
      [Q, V] = (0, React.useState)(1),
      [_, U] = (0, React.useState)(!0),
      [z, X] = (0, React.useState)(.9),
      [Y, J] = (0, React.useState)(.12),
      [K, Z] = (0, React.useState)(!0),
      [$, ee] = (0, React.useState)(!1);
    return <div><__mod_56388.Bg /><__mod_56388.VX><__mod_56388.Ec><__mod_56388.Ch onRefresh={t}><div className="relative h-full w-full"><x columnWidth={k} speed={j} scatter={R} waveFrequency={M} waveAmplitude={W} trail={B} ambient={y} color={w} hotColor={b} backgroundColor={g} direction={F} brightness={N} gamma={T} vignette={O} opacity={Q} cursorInteraction={_} cursorGlow={z} cursorReach={Y} adaptiveQuality={K} paused={$} /></div></__mod_56388.Ch><__mod_56388.IH><__mod_56388.bg title="Direction" value={F} onChange={H} options={[{
              value: "down",
              label: "Down"
            }, {
              value: "up",
              label: "Up"
            }]} /><__mod_56388.yt title="Column Width" min={1} max={24} step={1} value={k} onChange={S} /><__mod_56388.yt title="Speed" min={0} max={4} step={.05} value={j} onChange={P} /><__mod_56388.yt title="Scatter" min={.05} max={4} step={.05} value={R} onChange={A} /><__mod_56388.yt title="Wave Frequency" min={0} max={2} step={.02} value={M} onChange={G} /><__mod_56388.yt title="Wave Amplitude" min={0} max={4} step={.05} value={W} onChange={I} /><__mod_56388.yt title="Trail" min={.5} max={12} step={.1} value={B} onChange={E} /><__mod_56388.yt title="Ambient" min={0} max={1} step={.01} value={y} onChange={h} /><__mod_56388.yt title="Brightness" min={0} max={3} step={.05} value={N} onChange={D} /><__mod_56388.yt title="Gamma" min={.3} max={2.5} step={.05} value={T} onChange={q} /><__mod_56388.yt title="Vignette" min={0} max={1} step={.02} value={O} onChange={L} /><__mod_56388.yt title="Opacity" min={0} max={1} step={.01} value={Q} onChange={V} /><__mod_56388.yt title="Cursor Glow" min={0} max={1.5} step={.05} value={z} onChange={X} /><__mod_56388.yt title="Cursor Reach" min={.02} max={.5} step={.01} value={Y} onChange={J} /><__mod_56388.W7 title="Color" value={w} onChange={m} /><__mod_56388.W7 title="Hot Color" value={b} onChange={f} /><__mod_56388.W7 title="Background" value={g} onChange={c} /><__mod_56388.tl title="Cursor Interaction" checked={_} onChange={U} /><__mod_56388.tl title="Adaptive Quality" checked={K} onChange={Z} /><__mod_56388.tl title="Paused" checked={$} onChange={ee} /></__mod_56388.IH><__mod_56388.Ub data={[{
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
            default: "-",
            description: "Additional CSS classes."
          }, {
            name: "children",
            type: "ReactNode",
            default: "-",
            description: "Content rendered above the effect."
          }, {
            name: "columnWidth",
            type: "number",
            default: "3",
            description: "Width of one rain column in CSS pixels."
          }, {
            name: "speed",
            type: "number",
            default: "0.2",
            description: "How fast the columns sweep."
          }, {
            name: "scatter",
            type: "number",
            default: "2.5",
            description: "Spread of the per-column scatter. Higher values decorrelate neighbours."
          }, {
            name: "waveFrequency",
            type: "number",
            default: "0.2",
            description: "Frequency of the slow wave riding across the columns."
          }, {
            name: "waveAmplitude",
            type: "number",
            default: "0.6",
            description: "Strength of the slow wave riding across the columns."
          }, {
            name: "trail",
            type: "number",
            default: "6",
            description: "Length of each streak. Higher values give shorter streaks."
          }, {
            name: "ambient",
            type: "number",
            default: "0",
            description: "Ambient level held between streaks."
          }, {
            name: "color",
            type: "string",
            default: '"#a54693"',
            description: "Colour of the streaks."
          }, {
            name: "hotColor",
            type: "string",
            default: '"#a54693"',
            description: "Colour the brightest part of a streak shifts toward."
          }, {
            name: "backgroundColor",
            type: "string",
            default: '"#0a0a0a"',
            description: 'Background fill colour. Accepts "transparent".'
          }, {
            name: "direction",
            type: '"down" | "up"',
            default: '"down"',
            description: "Travel direction of the streaks."
          }, {
            name: "brightness",
            type: "number",
            default: "1",
            description: "Overall gain."
          }, {
            name: "gamma",
            type: "number",
            default: "1",
            description: "Contrast curve applied at the end."
          }, {
            name: "vignette",
            type: "number",
            default: "0",
            description: "Darkening toward the edges from 0 to 1."
          }, {
            name: "opacity",
            type: "number",
            default: "1",
            description: "Master alpha from 0 to 1."
          }, {
            name: "cursorInteraction",
            type: "boolean",
            default: "true",
            description: "Let the pointer brighten nearby columns."
          }, {
            name: "cursorGlow",
            type: "number",
            default: "0.9",
            description: "How much nearby columns brighten."
          }, {
            name: "cursorReach",
            type: "number",
            default: "0.12",
            description: "Reach of the pointer highlight from 0 to 1."
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

const GScene: any = g;

export default w;

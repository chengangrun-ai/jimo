import * as __mod_81712 from "../_helpers/81712";
import * as __mod_2253 from "../_helpers/2253";
import * as __mod_90650 from "../_helpers/90650";
import * as __mod_3907 from "../_helpers/3907";
import * as __mod_90761 from "../_helpers/90761";
import * as __mod_30701 from "../_helpers/30701";
import * as __mod_56388 from "../_helpers/56388";
/**
 * Twilight Lines
 * Soft glowing lines that pulse with a warm sweep
 * slug: twilight-lines
 * category: shader
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let h = `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`,
  m = `
precision highp float;

varying vec2 vUv;

uniform float uTime;
uniform vec2  uRes;

uniform float uLineCount;
uniform float uWaveAmp;
uniform float uWaveFreq;
uniform float uLineThickness;
uniform float uLineGlow;
uniform vec3  uLineColor;
uniform float uLineIntensity;

uniform vec3  uPulseColor;
uniform float uPulseSpeed;
uniform float uPulseWidth;
uniform float uPulseIntensity;
uniform float uPulsePhase;
uniform float uPulseWidthScale;
uniform float uPulseBoost;

uniform float uChroma;
uniform vec3  uBg;
uniform float uAlpha;

vec3 sampleField(vec2 fragCoord) {
  vec2 uv = (fragCoord * 2.0 - uRes) / uRes.y;

  float sway = cos(uv.x * uWaveFreq) * uWaveAmp;
  float dist = abs(fract((uv.y + sway) * uLineCount) - 0.5);
  float lineMask = uLineGlow / max(dist, uLineThickness);
  vec3 col = uLineColor * uLineIntensity * lineMask;

  float pulse = abs(fract((uv.x - uPulsePhase) * uPulseSpeed) - 0.5);
  float bell  = exp(-pulse * pulse * uPulseWidth * uPulseWidthScale);
  float hot   = (uLineGlow * 0.5) / max(dist, uLineThickness * 0.1);
  col += uPulseColor * bell * hot * uPulseIntensity * uPulseBoost;

  return col;
}

void main() {
  vec2 fragCoord = vUv * uRes;

  vec2 ndc = vUv - 0.5;
  vec2 offset = ndc * length(ndc) * uChroma * 0.5;

  vec3 r = sampleField(fragCoord + offset * uRes);
  vec3 g = sampleField(fragCoord);
  vec3 b = sampleField(fragCoord - offset * uRes);

  vec3 col = vec3(r.r, g.g, b.b);
  col = clamp(col, 0.0, 1.0);
  col = mix(uBg, col + uBg * (1.0 - clamp(dot(col, vec3(1.0)), 0.0, 1.0)), 1.0);

  gl_FragColor = vec4(col, uAlpha);
}
`,
  v = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
function p(e) {
  let t = v.exec(e);
  return t ? [parseInt(t[1], 16) / 255, parseInt(t[2], 16) / 255, parseInt(t[3], 16) / 255] : [0, 0, 0];
}
let f = e => {
    let {
        gl: t,
        size: n
      } = (0, __mod_81712.C)(),
      l = (0, React.useRef)(null);
    if (null === l.current) {
      let e = new __mod_2253.bdM(2, 2),
        t = new __mod_2253.BKk({
          vertexShader: h,
          fragmentShader: m,
          transparent: !0,
          uniforms: {
            uTime: {
              value: 0
            },
            uRes: {
              value: new __mod_2253.I9Y(1, 1)
            },
            uLineCount: {
              value: 1
            },
            uWaveAmp: {
              value: 1
            },
            uWaveFreq: {
              value: 2
            },
            uLineThickness: {
              value: .05
            },
            uLineGlow: {
              value: .01
            },
            uLineColor: {
              value: new __mod_2253.Pq0(.3, .2, .8)
            },
            uLineIntensity: {
              value: 2
            },
            uPulseColor: {
              value: new __mod_2253.Pq0(.8, .3, .3)
            },
            uPulseSpeed: {
              value: .5
            },
            uPulseWidth: {
              value: 25
            },
            uPulseIntensity: {
              value: 10
            },
            uPulsePhase: {
              value: 0
            },
            uPulseWidthScale: {
              value: 1
            },
            uPulseBoost: {
              value: 1
            },
            uChroma: {
              value: .05
            },
            uBg: {
              value: new __mod_2253.Pq0(0, 0, 0)
            },
            uAlpha: {
              value: 1
            }
          }
        }),
        n = new __mod_2253.eaF(e, t),
        a = new __mod_2253.Z58();
      a.add(n);
      let i = new __mod_2253.qUd(-1, 1, 1, -1, 0, 1);
      i.position.z = 1, l.current = {
        mat: t,
        geom: e,
        mesh: n,
        scene: a,
        cam: i,
        pointer: {
          active: !1,
          nx: .5,
          ny: .5,
          targetPhase: 0,
          smoothedPhase: 0,
          timePhase: 0,
          click: 0,
          wasActive: !1
        }
      };
    }
    let i = e.onPointerReady;
    return (0, React.useEffect)(() => {
      let e = l.current;
      e && i(e.pointer);
    }, [i]), (0, React.useEffect)(() => () => {
      let e = l.current;
      e && (e.mat.dispose(), e.geom.dispose());
    }, []), (0, __mod_81712.D)((a, i) => {
      let u = l.current;
      if (!u) return;
      let s = u.mat.uniforms;
      s.uTime.value = a.clock.elapsedTime, s.uRes.value.set(n.width, n.height), s.uLineCount.value = e.lineCount, s.uWaveAmp.value = e.waveAmplitude, s.uWaveFreq.value = e.waveFrequency, s.uLineThickness.value = e.lineThickness, s.uLineGlow.value = e.lineGlow, s.uLineIntensity.value = e.lineIntensity, s.uPulseSpeed.value = e.pulseSpeed, s.uPulseWidth.value = e.pulseWidth, s.uPulseIntensity.value = e.pulseIntensity, s.uChroma.value = e.chromaticAberration, s.uAlpha.value = e.opacity;
      let o = p(e.lineColor);
      s.uLineColor.value.set(o[0], o[1], o[2]);
      let r = p(e.pulseColor);
      s.uPulseColor.value.set(r[0], r[1], r[2]);
      let c = p(e.backgroundColor);
      s.uBg.value.set(c[0], c[1], c[2]);
      let d = u.pointer,
        h = n.width / Math.max(n.height, 1);
      if (e.cursorInteraction && d.active) {
        d.targetPhase = (2 * d.nx - 1) * h;
        let t = Math.min(Math.max(e.cursorLerp, 0), 1);
        d.smoothedPhase += (d.targetPhase - d.smoothedPhase) * t, s.uPulsePhase.value = d.smoothedPhase;
        let n = 1 - d.ny;
        s.uPulseWidthScale.value = .5 + 1.5 * n;
      } else d.wasActive && (d.timePhase = d.smoothedPhase), d.timePhase += i, d.smoothedPhase += (d.timePhase - d.smoothedPhase) * .15, s.uPulsePhase.value = d.smoothedPhase, s.uPulseWidthScale.value += (1 - s.uPulseWidthScale.value) * .1;
      d.wasActive = d.active, d.click = Math.max(0, d.click - i * e.clickBurstDecay), s.uPulseBoost.value = 1 + d.click * (e.clickBurstStrength - 1), t.setRenderTarget(null), t.render(u.scene, u.cam);
    }, 1), null;
  },
  g = ({
    width: e = "100%",
    height: t = "100%",
    className: n,
    children: i,
    lineCount: u = 2,
    waveAmplitude: s = .5,
    waveFrequency: o = 1.8,
    lineThickness: c = .05,
    lineGlow: h = .01,
    lineColor: m = "#4D33CC",
    lineIntensity: v = 3,
    pulseColor: p = "#CC4D4D",
    pulseSpeed: g = .25,
    pulseWidth: C = 35,
    pulseIntensity: y = 5.5,
    chromaticAberration: x = .05,
    backgroundColor: P = "#000000",
    opacity: w = 1,
    dpr: b = 1.5,
    cursorInteraction: S = !0,
    cursorLerp: k = .12,
    clickBurstStrength: j = 2.5,
    clickBurstDecay: L = 2.5
  }) => {
    let I = (0, React.useRef)(null),
      W = (0, React.useRef)(null),
      B = e => {
        let t = I.current,
          n = W.current;
        if (!t || !n) return;
        let l = t.getBoundingClientRect();
        n.nx = (e.clientX - l.left) / Math.max(l.width, 1), n.ny = (e.clientY - l.top) / Math.max(l.height, 1), n.active = !0;
      };
    return <div ref={I} className={(0, __mod_90650.cn)("relative overflow-hidden", n)} style={{
      width: e,
      height: t
    }} onPointerMove={S ? B : void 0} onPointerEnter={S ? B : void 0} onPointerLeave={S ? () => {
      let e = W.current;
      e && (e.active = !1);
    } : void 0} onPointerDown={S ? e => {
      B(e);
      let t = W.current;
      t && (t.click = 1);
    } : void 0}><__mod_3907.Hl className="absolute inset-0" dpr={[1, b]} gl={{
        antialias: !1,
        alpha: !0,
        powerPreference: "high-performance"
      }} orthographic={!0} camera={{
        position: [0, 0, 1],
        zoom: 1,
        left: -1,
        right: 1,
        top: 1,
        bottom: -1
      }}><FScene lineCount={u} waveAmplitude={s} waveFrequency={o} lineThickness={c} lineGlow={h} lineColor={m} lineIntensity={v} pulseColor={p} pulseSpeed={g} pulseWidth={C} pulseIntensity={y} chromaticAberration={x} backgroundColor={P} opacity={w} cursorInteraction={S} cursorLerp={k} clickBurstStrength={j} clickBurstDecay={L} onPointerReady={e => {
          W.current = e;
        }} /></__mod_3907.Hl>{i && <div className="relative z-10">{i}</div>}</div>;
  };
g.displayName = "TwilightLines";
let C = () => {
  let [e, t] = (0, __mod_90761.I)(),
    {
      resolvedTheme: n
    } = (0, __mod_30701.D)(),
    [o, r] = (0, React.useState)(2),
    [c, d] = (0, React.useState)(.5),
    [h, m] = (0, React.useState)(1.8),
    [v, p] = (0, React.useState)(.05),
    [f, C] = (0, React.useState)(.01),
    [y, x] = (0, React.useState)("#4D33CC"),
    [P, w] = (0, React.useState)(3),
    [b, S] = (0, React.useState)("#CC4D4D"),
    [k, j] = (0, React.useState)(.25),
    [L, I] = (0, React.useState)(35),
    [W, B] = (0, React.useState)(5.5),
    [F, A] = (0, React.useState)(.05),
    [T, R] = (0, React.useState)(1),
    [N, D] = (0, React.useState)(null),
    q = (0, React.useMemo)(() => null !== N ? N : "dark" === n ? "#000000" : "#FFFFFF", [n, N]);
  return <div><__mod_56388.Bg /><__mod_56388.VX><__mod_56388.Ec><__mod_56388.Ch onRefresh={t}><div className="relative h-full w-full"><GView width="100%" height="100%" lineCount={o} waveAmplitude={c} waveFrequency={h} lineThickness={v} lineGlow={f} lineColor={y} lineIntensity={P} pulseColor={b} pulseSpeed={k} pulseWidth={L} pulseIntensity={W} chromaticAberration={F} backgroundColor={q} opacity={T}/></div></__mod_56388.Ch><__mod_56388.IH><__mod_56388.yt title="Line Count" value={o} onChange={r} min={1} max={6} step={1} /><__mod_56388.yt title="Wave Amplitude" value={c} onChange={d} min={0} max={1} step={.01} /><__mod_56388.yt title="Wave Frequency" value={h} onChange={m} min={0} max={10} step={.1} /><__mod_56388.yt title="Line Thickness" value={v} onChange={p} min={.005} max={.3} step={.005} /><__mod_56388.yt title="Line Glow" value={f} onChange={C} min={.001} max={.05} step={.001} /><__mod_56388.W7 title="Line Color" value={y} onChange={x} /><__mod_56388.yt title="Line Intensity" value={P} onChange={w} min={0} max={6} step={.1} /><__mod_56388.W7 title="Pulse Color" value={b} onChange={S} /><__mod_56388.yt title="Pulse Speed" value={k} onChange={j} min={0} max={3} step={.05} /><__mod_56388.yt title="Pulse Width" value={L} onChange={I} min={1} max={100} step={1} /><__mod_56388.yt title="Pulse Intensity" value={W} onChange={B} min={0} max={30} step={.5} /><__mod_56388.yt title="Chromatic Aberration" value={F} onChange={A} min={0} max={.3} step={.005} /><__mod_56388.yt title="Opacity" value={T} onChange={R} min={0} max={1} step={.01} /><__mod_56388.W7 title="Background" value={q} onChange={D} /></__mod_56388.IH><__mod_56388.Ub data={[{
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
          description: "Additional CSS classes"
        }, {
          name: "children",
          type: "ReactNode",
          default: "undefined",
          description: "Content rendered above the effect"
        }, {
          name: "lineCount",
          type: "number",
          default: "2",
          description: "Number of horizontal lines stacked across the canvas"
        }, {
          name: "waveAmplitude",
          type: "number",
          default: "0.5",
          description: "Vertical sway amplitude applied to every line"
        }, {
          name: "waveFrequency",
          type: "number",
          default: "1.8",
          description: "Spatial frequency of the horizontal sway"
        }, {
          name: "lineThickness",
          type: "number",
          default: "0.05",
          description: "Floor of the line distance, controls visible thickness"
        }, {
          name: "lineGlow",
          type: "number",
          default: "0.01",
          description: "Numerator of the inverse-distance glow term"
        }, {
          name: "lineColor",
          type: "string",
          default: '"#4D33CC"',
          description: "Hex color of the lines"
        }, {
          name: "lineIntensity",
          type: "number",
          default: "3",
          description: "Brightness multiplier for the lines"
        }, {
          name: "pulseColor",
          type: "string",
          default: '"#CC4D4D"',
          description: "Hex color of the warm flash sweeping along the lines"
        }, {
          name: "pulseSpeed",
          type: "number",
          default: "0.25",
          description: "Speed and frequency of the sweeping flash"
        }, {
          name: "pulseWidth",
          type: "number",
          default: "35",
          description: "Bell width of the flash, larger = wider hot spot"
        }, {
          name: "pulseIntensity",
          type: "number",
          default: "5.5",
          description: "Brightness multiplier for the flash"
        }, {
          name: "chromaticAberration",
          type: "number",
          default: "0.05",
          description: "Strength of the radial RGB split applied to the composite"
        }, {
          name: "backgroundColor",
          type: "string",
          default: '"#000000"',
          description: "Hex background fill color"
        }, {
          name: "opacity",
          type: "number",
          default: "1",
          description: "Master alpha (0–1)"
        }, {
          name: "dpr",
          type: "number",
          default: "1.5",
          description: "Maximum device pixel ratio"
        }]} /></__mod_56388.Ec><__mod_56388.lT><__mod_56388.Gv /></__mod_56388.lT></__mod_56388.VX></div>;
};

const GView: any = g;

const FScene: any = f;

export default C;

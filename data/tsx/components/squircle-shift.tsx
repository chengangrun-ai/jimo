import * as __mod_81712 from "../_helpers/81712";
import * as __mod_2253 from "../_helpers/2253";
import * as __mod_30701 from "../_helpers/30701";
import * as __mod_90650 from "../_helpers/90650";
import * as __mod_3907 from "../_helpers/3907";
import * as __mod_90761 from "../_helpers/90761";
import * as __mod_56388 from "../_helpers/56388";
import * as __mod_48543 from "../_helpers/48543";
/**
 * Squircle Shift
 * A glowing grid of squircles that shift and morph
 * slug: squircle-shift
 * category: animation
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let m = `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,
  v = `
precision highp float;

uniform float u_time;
uniform vec2 u_resolution;
uniform float u_speed;
uniform int u_colorLayers;
uniform float u_gridFrequency;
uniform float u_gridIntensity;
uniform float u_waveSpeed;
uniform float u_waveIntensity;
uniform float u_spiralIntensity;
uniform float u_lineThickness;
uniform float u_falloff;
uniform float u_centerX;
uniform float u_centerY;
uniform vec3 u_colorTint;
uniform vec3 u_backgroundColor;
uniform float u_brightness;
uniform float u_phaseOffset;

varying vec2 vUv;

void main() {
  float animTime = u_time * u_speed;
  vec2 resolution = u_resolution;

  vec3 colorAccum = vec3(0.0);
  float dist = 0.0;
  float depth = animTime;

  for (int layer = 0; layer < 3; layer++) {
    if (layer >= u_colorLayers) break;

    vec2 normalizedPos = vUv;
    vec2 centeredPos = vUv;
    centeredPos.x *= resolution.x / resolution.y;
    centeredPos -= vec2(u_centerX, u_centerY);

    depth += 0.05;
    dist = length(centeredPos);

    float horizontalWave = sin(centeredPos.x * u_gridFrequency + depth);
    float verticalWave = cos(centeredPos.y * u_gridFrequency + depth + u_phaseOffset);
    float gridPattern = u_gridIntensity * horizontalWave * verticalWave;

    float oscillation = sin(depth) + 1.0;
    float radialPulse = abs(sin(dist * 7.0 - depth * u_waveSpeed));
    float waveDisplacement = oscillation * radialPulse * u_waveIntensity;

    normalizedPos += (centeredPos / max(dist, 0.001)) * waveDisplacement * gridPattern;
    normalizedPos = fract(normalizedPos);

    float polarAngle = atan(centeredPos.y, centeredPos.x);
    float polarRadius = dist * 2.0;
    vec2 spiralOffset = vec2(
      cos(polarAngle * polarRadius - depth),
      sin(polarAngle * polarRadius - depth)
    ) * gridPattern * u_spiralIntensity;
    normalizedPos += spiralOffset;

    vec2 gridCell = fract(normalizedPos) - 0.5;
    float intensity = u_lineThickness / length(gridCell);

    if (layer == 0) colorAccum.r = intensity;
    else if (layer == 1) colorAccum.g = intensity;
    else colorAccum.b = intensity;
  }

  colorAccum = colorAccum / (dist + u_falloff);

  colorAccum *= u_brightness;
  vec3 tintedColor = colorAccum * u_colorTint;

  float alpha = clamp(length(colorAccum) * 0.5, 0.0, 1.0);
  vec3 finalColor = mix(u_backgroundColor, tintedColor, alpha);

  gl_FragColor = vec4(finalColor, 1.0);
}
`,
  p = ({
    speed: e,
    colorLayers: t,
    gridFrequency: n,
    gridIntensity: a,
    waveSpeed: l,
    waveIntensity: s,
    spiralIntensity: u,
    lineThickness: d,
    falloff: f,
    centerX: p,
    centerY: h,
    colorTint: g,
    backgroundColor: y,
    brightness: _,
    phaseOffset: x
  }) => {
    let b = (0, React.useRef)(null),
      w = (0, React.useRef)(null),
      {
        viewport: S
      } = (0, __mod_81712.C)(),
      C = (0, React.useMemo)(() => ({
        u_time: {
          value: 0
        },
        u_resolution: {
          value: new __mod_2253.I9Y(100 * S.width, 100 * S.height)
        },
        u_speed: {
          value: e
        },
        u_colorLayers: {
          value: t
        },
        u_gridFrequency: {
          value: n
        },
        u_gridIntensity: {
          value: a
        },
        u_waveSpeed: {
          value: l
        },
        u_waveIntensity: {
          value: s
        },
        u_spiralIntensity: {
          value: u
        },
        u_lineThickness: {
          value: d
        },
        u_falloff: {
          value: f
        },
        u_centerX: {
          value: p
        },
        u_centerY: {
          value: h
        },
        u_colorTint: {
          value: new __mod_2253.Q1f(g)
        },
        u_backgroundColor: {
          value: new __mod_2253.Q1f(y)
        },
        u_brightness: {
          value: _
        },
        u_phaseOffset: {
          value: x
        }
      }), []);
    return (0, __mod_81712.D)(r => {
      w.current && (w.current.uniforms.u_time.value = r.clock.elapsedTime, w.current.uniforms.u_resolution.value.set(100 * S.width, 100 * S.height), w.current.uniforms.u_speed.value = e, w.current.uniforms.u_colorLayers.value = t, w.current.uniforms.u_gridFrequency.value = n, w.current.uniforms.u_gridIntensity.value = a, w.current.uniforms.u_waveSpeed.value = l, w.current.uniforms.u_waveIntensity.value = s, w.current.uniforms.u_spiralIntensity.value = u, w.current.uniforms.u_lineThickness.value = d, w.current.uniforms.u_falloff.value = f, w.current.uniforms.u_centerX.value = p, w.current.uniforms.u_centerY.value = h, w.current.uniforms.u_colorTint.value.set(g), w.current.uniforms.u_backgroundColor.value.set(y), w.current.uniforms.u_brightness.value = _, w.current.uniforms.u_phaseOffset.value = x);
    }), <mesh ref={b} scale={[S.width, S.height, 1]}><planeGeometry args={[1, 1]} /><shaderMaterial ref={w} vertexShader={m} fragmentShader={v} uniforms={C} /></mesh>;
  },
  h = ({
    width: e = "100%",
    height: t = "100%",
    className: n = "",
    speed: i = .3,
    colorLayers: a = 3,
    gridFrequency: l = 25,
    gridIntensity: s = 1,
    waveSpeed: o = .2,
    waveIntensity: c = .1,
    spiralIntensity: m = 1,
    lineThickness: v = .06,
    falloff: h = 1,
    centerX: g = 1,
    centerY: y = 1,
    colorTint: _ = "#c084fc",
    lightBackground: x = "#ffffff",
    darkBackground: b = "#000000",
    brightness: w = 1.5,
    phaseOffset: S = 10
  }) => {
    let {
        resolvedTheme: C
      } = (0, __mod_30701.D)(),
      P = "number" == typeof e ? `${e}px` : e,
      j = "number" == typeof t ? `${t}px` : t;
    return <div className={(0, __mod_90650.cn)("relative overflow-hidden", n)} style={{
      width: P,
      height: j
    }}><__mod_3907.Hl className="absolute inset-0 h-full w-full" gl={{
        antialias: !0,
        alpha: !1
      }} camera={{
        position: [0, 0, 1],
        fov: 75
      }}><p speed={i} colorLayers={a} gridFrequency={l} gridIntensity={s} waveSpeed={o} waveIntensity={c} spiralIntensity={m} lineThickness={v} falloff={h} centerX={g} centerY={y} colorTint={_} backgroundColor={"dark" === C ? b : x} brightness={w} phaseOffset={S} /></__mod_3907.Hl></div>;
  };
h.displayName = "SquircleShift";
let g = () => {
  let [e, t] = (0, __mod_90761.I)(),
    [n, o] = (0, React.useState)(.3),
    [u, c] = (0, React.useState)(3),
    [d, f] = (0, React.useState)(20),
    [m, v] = (0, React.useState)(1),
    [p, g] = (0, React.useState)(.06),
    [y, _] = (0, React.useState)(10),
    [x, b] = (0, React.useState)(.2),
    [w, S] = (0, React.useState)(.1),
    [C, P] = (0, React.useState)(1),
    [j, k] = (0, React.useState)(1),
    [I, T] = (0, React.useState)(1),
    [A, N] = (0, React.useState)(1),
    [F, L] = (0, React.useState)("#c084fc"),
    [O, q] = (0, React.useState)("#ffffff"),
    [z, B] = (0, React.useState)("#333333"),
    [W, X] = (0, React.useState)(1.5);
  return <div><__mod_56388.Bg /><__mod_56388.VX><__mod_56388.Ec><__mod_56388.Ch onRefresh={t} minHeight={500}><h speed={n} colorLayers={u} gridFrequency={d} gridIntensity={m} waveSpeed={x} waveIntensity={w} spiralIntensity={C} lineThickness={p} falloff={A} centerX={j} centerY={I} colorTint={F} lightBackground={O} darkBackground={z} brightness={W} phaseOffset={y} /></__mod_56388.Ch><__mod_56388.IH><__mod_48543.PreviewSlider title="Speed" value={n} onChange={o} min={.1} max={2} step={.1} /><__mod_48543.PreviewSlider title="Color Layers" value={u} onChange={c} min={1} max={3} step={1} /><__mod_48543.PreviewSlider title="Frequency" value={d} onChange={f} min={5} max={50} step={1} /><__mod_48543.PreviewSlider title="Intensity" value={m} onChange={v} min={0} max={2} step={.1} /><__mod_48543.PreviewSlider title="Line Thickness" value={p} onChange={g} min={.01} max={.5} step={.01} /><__mod_48543.PreviewSlider title="Phase Offset" value={y} onChange={_} min={0} max={50} step={1} /><__mod_48543.PreviewSlider title="Wave Speed" value={x} onChange={b} min={0} max={2} step={.1} /><__mod_48543.PreviewSlider title="Wave Intensity" value={w} onChange={S} min={0} max={3} step={.1} /><__mod_48543.PreviewSlider title="Spiral Intensity" value={C} onChange={P} min={0} max={3} step={.1} /><__mod_48543.PreviewSlider title="Center X" value={j} onChange={k} min={0} max={2} step={.1} /><__mod_48543.PreviewSlider title="Center Y" value={I} onChange={T} min={0} max={2} step={.1} /><__mod_48543.PreviewSlider title="Falloff" value={A} onChange={N} min={.1} max={2} step={.1} /><__mod_48543.PreviewColor title="Color Tint" value={F} onChange={L} /><__mod_48543.PreviewSlider title="Brightness" value={W} onChange={X} min={.1} max={3} step={.1} /><__mod_48543.PreviewColor title="Light Mode" value={O} onChange={q} /><__mod_48543.PreviewColor title="Dark Mode" value={z} onChange={B} /></__mod_56388.IH><__mod_56388.Ub data={[{
          name: "width",
          type: "number | string",
          default: '"100%"',
          description: "Width of the component in pixels or CSS value"
        }, {
          name: "height",
          type: "number | string",
          default: '"100%"',
          description: "Height of the component in pixels or CSS value"
        }, {
          name: "speed",
          type: "number",
          default: "0.3",
          description: "Animation speed multiplier"
        }, {
          name: "colorLayers",
          type: "number",
          default: "3",
          description: "Number of color channel iterations (1-3)"
        }, {
          name: "gridFrequency",
          type: "number",
          default: "25",
          description: "Grid pattern frequency"
        }, {
          name: "gridIntensity",
          type: "number",
          default: "1",
          description: "Grid pattern intensity"
        }, {
          name: "waveSpeed",
          type: "number",
          default: "0.2",
          description: "Wave animation speed multiplier"
        }, {
          name: "waveIntensity",
          type: "number",
          default: "0.1",
          description: "Wave displacement intensity"
        }, {
          name: "spiralIntensity",
          type: "number",
          default: "1",
          description: "Spiral/rotation effect intensity"
        }, {
          name: "lineThickness",
          type: "number",
          default: "0.06",
          description: "Line/dot thickness"
        }, {
          name: "falloff",
          type: "number",
          default: "1",
          description: "Distance falloff factor"
        }, {
          name: "centerX",
          type: "number",
          default: "1",
          description: "Horizontal center offset"
        }, {
          name: "centerY",
          type: "number",
          default: "1",
          description: "Vertical center offset"
        }, {
          name: "colorTint",
          type: "string",
          default: '"#c084fc"',
          description: "Primary color tint"
        }, {
          name: "lightBackground",
          type: "string",
          default: '"#ffffff"',
          description: "Background color for light mode"
        }, {
          name: "darkBackground",
          type: "string",
          default: '"#000000"',
          description: "Background color for dark mode"
        }, {
          name: "brightness",
          type: "number",
          default: "1.5",
          description: "Overall brightness"
        }, {
          name: "phaseOffset",
          type: "number",
          default: "10",
          description: "Grid phase offset"
        }, {
          name: "className",
          type: "string",
          default: '""',
          description: "Additional CSS classes"
        }]} /></__mod_56388.Ec><__mod_56388.lT><__mod_56388.Gv /></__mod_56388.lT></__mod_56388.VX></div>;
};

export default g;

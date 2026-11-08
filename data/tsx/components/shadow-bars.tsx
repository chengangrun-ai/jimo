import * as __mod_81712 from "../_helpers/81712";
import * as __mod_2253 from "../_helpers/2253";
import * as __mod_30701 from "../_helpers/30701";
import * as __mod_3907 from "../_helpers/3907";
import * as __mod_90761 from "../_helpers/90761";
import * as __mod_56388 from "../_helpers/56388";
import * as __mod_48543 from "../_helpers/48543";
/**
 * Shadow Bars
 * Vertical bars of shifting light and shadow
 * slug: shadow-bars
 * category: animation
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let v = `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,
  d = `
uniform float u_time;
uniform vec2 u_resolution;
uniform int u_columns;
uniform bool u_invertColumns;
uniform bool u_fuzzNoise;
uniform bool u_gridProximityColor;
uniform vec3 u_baseColor;
uniform vec3 u_proximityColor;
uniform float u_speed;
uniform float u_noiseScale;
uniform float u_fuzzIntensity;
uniform float u_edgeSharpness;
uniform float u_noisePower;
uniform float u_colorBleed;
uniform bool u_lightMode;

varying vec2 vUv;

float mapRange(float minIn, float maxIn, float val, float minOut, float maxOut) {
  float rangeIn = maxIn - minIn;
  float rangeOut = maxOut - minOut;
  return ((val - minIn) * rangeOut / rangeIn) + minOut;
}

float mapSin(float val, float minOut, float maxOut) {
  return mapRange(-1.0, 1.0, sin(val), minOut, maxOut);
}

float snapFloor(float val, float snapSize) {
  return floor(val / snapSize) * snapSize;
}

vec4 permute(vec4 x) { return mod(((x * 34.0) + 1.0) * x, 289.0); }
vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

float snoise(vec3 v) {
  const vec2 C = vec2(1.0 / 6.0, 1.0 / 3.0);
  const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);

  vec3 i = floor(v + dot(v, C.yyy));
  vec3 x0 = v - i + dot(i, C.xxx);

  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min(g.xyz, l.zxy);
  vec3 i2 = max(g.xyz, l.zxy);

  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + 2.0 * C.xxx;
  vec3 x3 = x0 - 1.0 + 3.0 * C.xxx;

  i = mod(i, 289.0);
  vec4 p = permute(permute(permute(
    i.z + vec4(0.0, i1.z, i2.z, 1.0))
    + i.y + vec4(0.0, i1.y, i2.y, 1.0))
    + i.x + vec4(0.0, i1.x, i2.x, 1.0));

  float n_ = 1.0 / 7.0;
  vec3 ns = n_ * D.wyz - D.xzx;

  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);

  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_);

  vec4 x = x_ * ns.x + ns.yyyy;
  vec4 y = y_ * ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);

  vec4 b0 = vec4(x.xy, y.xy);
  vec4 b1 = vec4(x.zw, y.zw);

  vec4 s0 = floor(b0) * 2.0 + 1.0;
  vec4 s1 = floor(b1) * 2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));

  vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
  vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;

  vec3 p0 = vec3(a0.xy, h.x);
  vec3 p1 = vec3(a0.zw, h.y);
  vec3 p2 = vec3(a1.xy, h.z);
  vec3 p3 = vec3(a1.zw, h.w);

  vec4 norm = taylorInvSqrt(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;

  vec4 m = max(0.6 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)), 0.0);
  m = m * m;
  return 42.0 * dot(m * m, vec4(dot(p0, x0), dot(p1, x1), dot(p2, x2), dot(p3, x3)));
}

void main() {
  float aspectRatio = u_resolution.x / u_resolution.y;
  vec2 coord = vUv - 0.5;
  coord.x *= aspectRatio;

  float time = u_time * u_speed;
  float columnWidth = 1.0 / float(u_columns);
  vec3 finalColor = vec3(1.0);

  vec2 noiseScaleVec = vec2(
    5.5 + mapSin(time / 5.0, -0.4, 0.3),
    2.2 + mapSin(time / 5.0, -0.05, 0.05)
  ) * u_noiseScale;
  float noiseTimeScale = 0.2;
  vec2 noiseOffset = vec2(
    mapSin(sin(time / 3.5), -0.2, 0.1),
    time / 90.0
  );

  vec3 noiseInputVec = vec3(coord + noiseOffset, time * noiseTimeScale);
  float sphereStrength = snoise(noiseInputVec * vec3(noiseScaleVec, 1.0));
  sphereStrength = pow(max(sphereStrength, 0.0), u_noisePower);
  sphereStrength *= 2.1;

  vec2 fuzzNoiseScale = vec2(750.0 * u_fuzzIntensity);
  vec2 fuzzNoiseOffset = vec2(time / 500.0);
  vec3 fuzzNoiseInputVec = vec3(coord + fuzzNoiseOffset, time * noiseTimeScale);
  float fuzzNoiseValue = snoise(fuzzNoiseInputVec * vec3(fuzzNoiseScale, 1.0));

  float column = snapFloor(coord.x, columnWidth);
  float rawDist = abs(coord.x - column - columnWidth / 2.0) * u_edgeSharpness;
  float distFromColCenter = exp(-pow(rawDist, 0.85));
  distFromColCenter = pow(distFromColCenter, 1.0 / max(u_colorBleed, 0.1));

  vec3 colorOffset = vec3(
    0.55 * snoise(noiseInputVec * vec3(noiseScaleVec * 0.8, 1.0)),
    0.02 * snoise(noiseInputVec * vec3(noiseScaleVec, 1.0)),
    0.02 * snoise(noiseInputVec * vec3(noiseScaleVec, 1.0))
  );

  float gridProximityStrength = 0.0;
  if (u_gridProximityColor) {
    gridProximityStrength = distFromColCenter;
    colorOffset += u_proximityColor * gridProximityStrength;
  }

  finalColor *= sphereStrength * (u_baseColor + colorOffset);

  float colDist = distFromColCenter;

  if (u_invertColumns) {
    colDist = 1.0 - colDist;
  }

  finalColor *= vec3(colDist);

  if (u_fuzzNoise) {
    float fuzz = 1.0 - fuzzNoiseValue;
    fuzz = mix(1.0, fuzz, exp(-gridProximityStrength * 3.0));
    finalColor *= vec3(fuzz);
  }

  if (u_lightMode) {
    float luminance = dot(finalColor, vec3(0.299, 0.587, 0.114));
    float satBoost = 3.0;
    finalColor = mix(vec3(luminance), finalColor, satBoost);
    finalColor = pow(finalColor, vec3(0.6));
    finalColor = clamp(finalColor * 1.8, 0.0, 1.0);
    float alpha = clamp(luminance * 4.0, 0.0, 1.0);
    gl_FragColor = vec4(finalColor, alpha);
  } else {
    gl_FragColor = vec4(finalColor, 1.0);
  }
}
`,
  f = ({
    columns: e,
    invertColumns: o,
    fuzzNoise: t,
    gridProximityColor: n,
    baseColor: l,
    proximityColor: a,
    speed: u,
    noiseScale: c,
    fuzzIntensity: f,
    edgeSharpness: x,
    noisePower: p,
    colorBleed: h,
    lightMode: C
  }) => {
    let g = (0, React.useRef)(null),
      y = (0, React.useRef)(null),
      {
        viewport: z,
        size: b
      } = (0, __mod_81712.C)(),
      S = (0, React.useMemo)(() => ({
        u_time: {
          value: 0
        },
        u_resolution: {
          value: new __mod_2253.I9Y()
        },
        u_columns: {
          value: 6
        },
        u_invertColumns: {
          value: !1
        },
        u_fuzzNoise: {
          value: !0
        },
        u_gridProximityColor: {
          value: !0
        },
        u_baseColor: {
          value: new __mod_2253.Pq0()
        },
        u_proximityColor: {
          value: new __mod_2253.Pq0()
        },
        u_speed: {
          value: 1
        },
        u_noiseScale: {
          value: 1
        },
        u_fuzzIntensity: {
          value: 1
        },
        u_edgeSharpness: {
          value: 40
        },
        u_noisePower: {
          value: 1.5
        },
        u_colorBleed: {
          value: 1
        },
        u_lightMode: {
          value: !1
        }
      }), []);
    return (0, __mod_81712.D)(i => {
      if (!y.current) return;
      let r = y.current.uniforms;
      r.u_time.value = i.clock.elapsedTime, r.u_resolution.value.set(b.width, b.height), r.u_columns.value = e, r.u_invertColumns.value = o, r.u_fuzzNoise.value = t, r.u_gridProximityColor.value = n, r.u_baseColor.value.set(...l), r.u_proximityColor.value.set(...a), r.u_speed.value = u, r.u_noiseScale.value = c, r.u_fuzzIntensity.value = f, r.u_edgeSharpness.value = x, r.u_noisePower.value = p, r.u_colorBleed.value = h, r.u_lightMode.value = C;
    }), <mesh ref={g}><planeGeometry args={[z.width, z.height]} /><shaderMaterial ref={y} vertexShader={v} fragmentShader={d} uniforms={S} transparent={!0} /></mesh>;
  },
  x = ({
    columns: e = 3,
    invertColumns: o = !1,
    fuzzNoise: t = !0,
    gridProximityColor: r = !1,
    baseColor: n = [.7882, .2, 1],
    baseColorLight: l = [.6824, 0, 1],
    proximityColor: a = [1, 0, 0],
    proximityColorLight: s = [.8, .3, .3],
    speed: m = .5,
    noiseScale: v = .4,
    fuzzIntensity: d = .5,
    edgeSharpness: x = 50,
    noisePower: p = 1.5,
    colorBleed: h = 1,
    className: C
  }) => {
    let {
        resolvedTheme: g
      } = (0, __mod_30701.D)(),
      y = "light" === g;
    return <div className={C} style={{
      width: "100%",
      height: "100%",
      background: y ? "#fff" : "#0b0b0b"
    }}><__mod_3907.Hl className="w-full h-full" gl={{
        antialias: !0,
        alpha: !0
      }}><F columns={e} invertColumns={o} fuzzNoise={t} gridProximityColor={r} baseColor={y ? l : n} proximityColor={y ? s : a} speed={m} noiseScale={v} fuzzIntensity={d} edgeSharpness={x} noisePower={p} colorBleed={h} lightMode={y} /></__mod_3907.Hl></div>;
  };
x.displayName = "ShadowBars";
let p = e => {
    let o = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
    return o ? [parseInt(o[1], 16) / 255, parseInt(o[2], 16) / 255, parseInt(o[3], 16) / 255] : [.7882, .2, 1];
  },
  h = () => {
    let [e, o] = (0, __mod_90761.I)(),
      [t, s] = (0, React.useState)(3),
      [u, c] = (0, React.useState)(!1),
      [m, v] = (0, React.useState)(!0),
      [d, f] = (0, React.useState)(!1),
      [h, C] = (0, React.useState)(.5),
      [g, y] = (0, React.useState)("#c933ff"),
      [z, b] = (0, React.useState)("#ae00ff"),
      [S, _] = (0, React.useState)("#ff0000"),
      [w, P] = (0, React.useState)("#cc4d4d"),
      [j, I] = (0, React.useState)(.4),
      [N, O] = (0, React.useState)(.5),
      [B, V] = (0, React.useState)(50),
      [D, k] = (0, React.useState)(1.5),
      [F, E] = (0, React.useState)(1);
    return <div><__mod_56388.Bg /><__mod_56388.VX><__mod_56388.Ec><__mod_56388.Ch onRefresh={o} minHeight={500}><x columns={t} invertColumns={u} fuzzNoise={m} gridProximityColor={d} baseColor={p(g)} baseColorLight={p(z)} proximityColor={p(S)} proximityColorLight={p(w)} speed={h} noiseScale={j} fuzzIntensity={N} edgeSharpness={B} noisePower={D} colorBleed={F} /></__mod_56388.Ch><__mod_56388.IH><__mod_48543.PreviewSlider title="Columns" value={t} onChange={s} min={1} max={12} step={1} /><__mod_48543.PreviewSlider title="Speed" value={h} onChange={C} min={0} max={3} step={.1} /><__mod_48543.PreviewSwitch title="Invert Columns" checked={u} onChange={c} /><__mod_48543.PreviewSwitch title="Fuzz Noise" checked={m} onChange={v} /><__mod_48543.PreviewSwitch title="Grid Proximity Color" checked={d} onChange={f} /><__mod_48543.PreviewColor title="Base Color (Dark)" value={g} onChange={y} /><__mod_48543.PreviewColor title="Base Color (Light)" value={z} onChange={b} /><__mod_48543.PreviewColor title="Proximity Color (Dark)" value={S} onChange={_} /><__mod_48543.PreviewColor title="Proximity Color (Light)" value={w} onChange={P} /><__mod_48543.PreviewSlider title="Noise Scale" value={j} onChange={I} min={.1} max={3} step={.1} /><__mod_48543.PreviewSlider title="Fuzz Intensity" value={N} onChange={O} min={0} max={3} step={.1} /><__mod_48543.PreviewSlider title="Edge Sharpness" value={B} onChange={V} min={1} max={100} step={1} /><__mod_48543.PreviewSlider title="Noise Power" value={D} onChange={k} min={.5} max={5} step={.1} /><__mod_48543.PreviewSlider title="Color Bleed" value={F} onChange={E} min={.1} max={5} step={.1} /></__mod_56388.IH><__mod_56388.Ub data={[{
            name: "columns",
            type: "number",
            default: "3",
            description: "Number of vertical columns"
          }, {
            name: "invertColumns",
            type: "boolean",
            default: "false",
            description: "Invert column gradient"
          }, {
            name: "fuzzNoise",
            type: "boolean",
            default: "true",
            description: "Enable granular fuzz noise"
          }, {
            name: "gridProximityColor",
            type: "boolean",
            default: "false",
            description: "Enable color based on grid proximity"
          }, {
            name: "baseColor",
            type: "[number, number, number]",
            default: "[0.7882, 0.2, 1]",
            description: "Base color for the noise [r, g, b] values 0-1"
          }, {
            name: "baseColorLight",
            type: "[number, number, number]",
            default: "[0.6824, 0, 1]",
            description: "Light mode base color [r, g, b] values 0-1"
          }, {
            name: "proximityColor",
            type: "[number, number, number]",
            default: "[1, 0, 0]",
            description: "Color applied near bar edges [r, g, b] values 0-1"
          }, {
            name: "proximityColorLight",
            type: "[number, number, number]",
            default: "[0.8, 0.3, 0.3]",
            description: "Light mode proximity color [r, g, b] values 0-1"
          }, {
            name: "speed",
            type: "number",
            default: "0.5",
            description: "Animation speed multiplier"
          }, {
            name: "noiseScale",
            type: "number",
            default: "0.4",
            description: "Noise scale multiplier"
          }, {
            name: "fuzzIntensity",
            type: "number",
            default: "0.5",
            description: "Fuzz noise intensity"
          }, {
            name: "edgeSharpness",
            type: "number",
            default: "50",
            description: "Bar edge sharpness"
          }, {
            name: "noisePower",
            type: "number",
            default: "1.5",
            description: "Noise power exponent"
          }, {
            name: "colorBleed",
            type: "number",
            default: "1",
            description: "How much color bleeds through the bars (ray width)"
          }, {
            name: "className",
            type: "string",
            default: '""',
            description: "Additional CSS classes for the container"
          }]} /></__mod_56388.Ec><__mod_56388.lT><__mod_56388.Gv /></__mod_56388.lT></__mod_56388.VX></div>;
  };

const F: any = f;

export default x;

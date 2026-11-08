import * as __mod_81712 from "../_helpers/81712";
import * as __mod_2253 from "../_helpers/2253";
import * as __mod_90650 from "../_helpers/90650";
import * as __mod_3907 from "../_helpers/3907";
import * as __mod_90761 from "../_helpers/90761";
import * as __mod_30701 from "../_helpers/30701";
import * as __mod_56388 from "../_helpers/56388";
/**
 * Agentic Ball
 * A glossy 3D orb with a slow swirl inside
 * slug: agentic-ball
 * category: 3d
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let d = `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,
  v = `
precision highp float;

uniform float uTime;
uniform vec2  uRes;
uniform float uSpeed;
uniform float uComplexity;
uniform float uSwirl;
uniform float uZoom;
uniform vec3  uTint;
uniform float uHueRotation;
uniform float uSaturation;
uniform float uBrightness;
uniform vec3  uBg;
uniform float uAlpha;

varying vec2 vUv;

vec2 spin(vec2 v, float a) {
  return cos(a) * v + sin(a) * vec2(-v.y, v.x);
}

float sfrac(float x, float k) {
  float f = fract(x);
  return f * smoothstep(1.0, k, f);
}

vec3 hueRotate(vec3 col, float angle) {
  return mix(vec3(dot(vec3(0.333), col)), col, cos(angle))
       + cross(vec3(0.577), col) * sin(angle);
}

vec3 computeOrb(vec3 p, float t) {
  vec3 v = vec3(0);
  float x = 0.0;
  float y = 0.0;
  float it = uComplexity;
  float halo = smoothstep(0.5, 0.0, p.z);
  vec3 c = vec3(0);

  for (float i = 1.0; i < 9.0; i += 1.0) {
    if (i > it) break;

    p.xy = spin(p.xy, p.z * uSwirl + t / i * 0.4);
    v = v * 0.5 + 0.5;
    v.xz = spin(v.xz, v.y - x + t / i + p.y);
    p.xy = spin(p.xy, length(v.xy) - x);

    x += sfrac(v.z, 0.9 - sin(y * 1.5) * 0.2 + p.z * 0.1) / it / (1.0 + x + x * x);
    y += sfrac(-v.z, 0.9 + sin(x) * 0.1) / it;

    c += exp(vec3(0.7, 1.9, 4.0) * log(max(x, 1e-8)));
  }

  float xy = (x - y) * (x - y);
  c += xy * sqrt(max(c, 0.0));
  c = clamp(c, 0.0, 1.0);

  c = hueRotate(c, uHueRotation);

  c = mix(vec3(dot(c, vec3(0.2, 0.7, 0.1))), c, uSaturation * (1.0 + y));
  c = max(c, 0.0);

  float bgLum = dot(uBg, vec3(0.2, 0.7, 0.1));
  float rimLift = bgLum * 0.5;
  c = mix(c, sqrt(max(c, 0.0)) * 0.7 + rimLift * 0.6, halo);
  c = mix(c, sqrt(max(c, 0.0)) * 0.5 + rimLift, sqrt(halo));

  c *= uTint;

  return c;
}

void main() {
  vec4 bg = vec4(uBg, uAlpha);
  vec2 uv = (gl_FragCoord.xy * 2.0 - uRes) / min(uRes.x, uRes.y) * uZoom;
  float t = uTime * uSpeed;

  float l2 = dot(uv, uv);
  float l = sqrt(l2);

  if (l > 1.0) {
    gl_FragColor = bg;
    return;
  }

  vec3 sn = vec3(uv, sqrt(1.0 - l2));
  vec3 n = computeOrb(sn, t) * uBrightness;

  float f = length(vec2(dFdx(l), dFdy(l)));
  float edge = smoothstep(1.0 - f, 1.0 - f * 3.0, l);

  gl_FragColor = mix(bg, vec4(sqrt(max(n, 0.0)), uAlpha), edge);
}
`,
  p = ({
    speed: e,
    complexity: t,
    swirl: a,
    zoom: o,
    tintRgb: r,
    hueRotation: l,
    saturation: s,
    brightness: m,
    bgRgb: p,
    opacity: f
  }) => {
    let x = (0, React.useRef)(null),
      {
        size: h,
        viewport: g
      } = (0, __mod_81712.C)(),
      y = (0, React.useMemo)(() => ({
        uTime: {
          value: 0
        },
        uRes: {
          value: new __mod_2253.I9Y()
        },
        uSpeed: {
          value: e
        },
        uComplexity: {
          value: t
        },
        uSwirl: {
          value: a
        },
        uZoom: {
          value: o
        },
        uTint: {
          value: new __mod_2253.Pq0(...r)
        },
        uHueRotation: {
          value: l
        },
        uSaturation: {
          value: s
        },
        uBrightness: {
          value: m
        },
        uBg: {
          value: new __mod_2253.Pq0(...p)
        },
        uAlpha: {
          value: f
        }
      }), []);
    return (0, __mod_81712.D)(i => {
      let n = x.current?.material;
      n && (n.uniforms.uTime.value = i.clock.elapsedTime, n.uniforms.uRes.value.set(h.width * g.dpr, h.height * g.dpr), n.uniforms.uSpeed.value = e, n.uniforms.uComplexity.value = t, n.uniforms.uSwirl.value = a, n.uniforms.uZoom.value = o, n.uniforms.uTint.value.set(...r), n.uniforms.uHueRotation.value = l, n.uniforms.uSaturation.value = s, n.uniforms.uBrightness.value = m, n.uniforms.uBg.value.set(...p), n.uniforms.uAlpha.value = f);
    }), <mesh ref={x}><planeGeometry args={[2, 2]} /><shaderMaterial vertexShader={d} fragmentShader={v} uniforms={y} transparent={!0} /></mesh>;
  },
  f = e => {
    let t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
    return t ? [parseInt(t[1], 16) / 255, parseInt(t[2], 16) / 255, parseInt(t[3], 16) / 255] : [0, 0, 0];
  },
  x = ({
    width: e = "100%",
    height: t = "100%",
    className: a,
    children: o,
    speed: r = .5,
    complexity: l = 3,
    swirl: u = 2,
    zoom: c = 1.75,
    color: d = "#FFFFFF",
    hueRotation: v = 4.3,
    saturation: x = 0,
    brightness: h = 2,
    backgroundColor: g = "#000000",
    opacity: y = 1
  }) => {
    let b = (0, React.useMemo)(() => f(d), [d]),
      C = (0, React.useMemo)(() => f(g), [g]);
    return <div className={(0, __mod_90650.cn)("relative overflow-hidden", a)} style={{
      width: e,
      height: t
    }}><__mod_3907.Hl orthographic={!0} camera={{
        position: [0, 0, 1],
        zoom: 1,
        left: -1,
        right: 1,
        top: 1,
        bottom: -1
      }} gl={{
        antialias: !0,
        alpha: !0
      }} className="absolute! inset-0 w-full h-full"><P speed={r} complexity={l} swirl={u} zoom={c} tintRgb={b} hueRotation={v} saturation={x} brightness={h} bgRgb={C} opacity={y} /></__mod_3907.Hl>{o && <div className="relative z-1 pointer-events-none">{o}</div>}</div>;
  };
x.displayName = "AgenticBall";
let h = () => {
  let [e, t] = (0, __mod_90761.I)(),
    {
      resolvedTheme: a
    } = (0, __mod_30701.D)(),
    [u, s] = (0, React.useState)(.5),
    [c, m] = (0, React.useState)(3),
    [d, v] = (0, React.useState)(2),
    [p, f] = (0, React.useState)(1.75),
    [h, g] = (0, React.useState)("#FFFFFF"),
    [y, b] = (0, React.useState)(4.3),
    [C, j] = (0, React.useState)(0),
    [S, w] = (0, React.useState)(2),
    [F, R] = (0, React.useState)(null),
    [B, k] = (0, React.useState)(1),
    T = (0, React.useMemo)(() => null !== F ? F : "dark" === a ? "#0a0a0a" : "#FFFFFF", [a, F]);
  return <div><__mod_56388.Bg /><__mod_56388.VX><__mod_56388.Ec><__mod_56388.Ch onRefresh={t}><X width={400} height={400} speed={u} complexity={c} swirl={d} zoom={p} color={h} hueRotation={y} saturation={C} brightness={S} backgroundColor={T} opacity={B} /></__mod_56388.Ch><__mod_56388.IH><__mod_56388.yt title="Speed" value={u} onChange={s} min={.1} max={3} step={.1} /><__mod_56388.yt title="Complexity" value={c} onChange={m} min={1} max={8} step={1} /><__mod_56388.yt title="Swirl" value={d} onChange={v} min={0} max={6} step={.1} /><__mod_56388.yt title="Zoom" value={p} onChange={f} min={.5} max={4} step={.05} /><__mod_56388.yt title="Hue Rotation" value={y} onChange={b} min={0} max={6.28} step={.1} /><__mod_56388.yt title="Saturation" value={C} onChange={j} min={0} max={2} step={.1} /><__mod_56388.yt title="Brightness" value={S} onChange={w} min={.1} max={5} step={.1} /><__mod_56388.yt title="Opacity" value={B} onChange={k} min={0} max={1} step={.05} /><__mod_56388.W7 title="Tint Color" value={h} onChange={g} /><__mod_56388.W7 title="Background" value={T} onChange={e => R(e)} /></__mod_56388.IH><__mod_56388.Ub data={[{
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
          type: "React.ReactNode",
          default: "undefined",
          description: "Content rendered above the effect"
        }, {
          name: "speed",
          type: "number",
          default: "0.5",
          description: "Animation speed multiplier"
        }, {
          name: "complexity",
          type: "number",
          default: "3",
          description: "Number of warp iterations (1–8). Higher = more detail"
        }, {
          name: "swirl",
          type: "number",
          default: "2.0",
          description: "Amount of swirl rotation per layer"
        }, {
          name: "zoom",
          type: "number",
          default: "1.75",
          description: "Overall zoom into the sphere surface"
        }, {
          name: "color",
          type: "string",
          default: '"#FFFFFF"',
          description: "Primary tint color (hex)"
        }, {
          name: "hueRotation",
          type: "number",
          default: "4.3",
          description: "Hue rotation angle in radians (0 = natural amber, ~1 = green, ~2 = blue, ~3 = purple)"
        }, {
          name: "saturation",
          type: "number",
          default: "0",
          description: "Color saturation boost (0 = grayscale, 1 = normal, 2 = vivid)"
        }, {
          name: "brightness",
          type: "number",
          default: "2.0",
          description: "Brightness multiplier"
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
        }]} /></__mod_56388.Ec><__mod_56388.lT><__mod_56388.Gv /></__mod_56388.lT></__mod_56388.VX></div>;
};

const P: any = p;

const X: any = x;

export default h;

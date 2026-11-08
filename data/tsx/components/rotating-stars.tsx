import * as __mod_81712 from "../_helpers/81712";
import * as __mod_2253 from "../_helpers/2253";
import * as __mod_90650 from "../_helpers/90650";
import * as __mod_3907 from "../_helpers/3907";
import * as __mod_90761 from "../_helpers/90761";
import * as __mod_56388 from "../_helpers/56388";
/**
 * Rotating Stars
 * Star trails spinning in circles
 * slug: rotating-stars
 * category: animation
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let d = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,
  f = `
  uniform float uTime;
  uniform vec2 uResolution;
  uniform vec2 uCenter;
  uniform float uScale;
  uniform float uSpeed;
  uniform vec3 uColor;
  uniform float uThickness;
  uniform float uSoftness;
  uniform float uRoundness;

  varying vec2 vUv;

  #define PI 3.14159265359

  float rand(float t) {
    return fract(sin(dot(vec2(t, t), vec2(12.9898, 78.233))) * 43758.5453);
  }

  float sdRoundedBox(vec2 p, vec2 b, vec4 r) {
    r.xy = (p.x > 0.0) ? r.xy : r.zw;
    r.x  = (p.y > 0.0) ? r.x  : r.y;
    vec2 q = abs(p) - b + r.x;
    return min(max(q.x, q.y), 0.0) + length(max(q, 0.0)) - r.x;
  }

  void main() {
    float time = uTime * uSpeed;
    vec2 uv = (vUv * 2.0 - 1.0) * uResolution / uResolution.y;
    vec2 uv1 = uv - uCenter;

    float r = length(uv1) * uScale;
    float t = ceil(r);

    float effectiveTime = time * rand(t) * 0.1 + t * 0.1;
    float angle = atan(uv1.y, uv1.x) / PI;
    float a = fract(angle + effectiveTime);

    float startAng = rand(t);
    float da = fract(a - startAng + 0.5) - 0.5;

    float x = da * 5.0;
    float y = r - t + 0.5;
    vec2 p = vec2(x, y);

    vec2 boxSize = vec2(0.75, uThickness * 0.5);
    float radius = min(boxSize.x, boxSize.y) * uRoundness;
    float d = sdRoundedBox(p, boxSize, vec4(radius));

    float softness = max(uSoftness, 0.001);
    float mask = 1.0 - smoothstep(0.0, softness, d);

    float ringMask = smoothstep(0.1, 0.11, r / uScale);

    vec3 col = uColor * 3.0 * rand(t);

    gl_FragColor = vec4(col, mask * ringMask);
  }
`,
  m = ({
    center: e,
    scale: t,
    speed: s,
    color: a,
    thickness: u,
    softness: i,
    roundness: c
  }) => {
    let m = (0, React.useRef)(null),
      v = (0, React.useRef)(null),
      {
        size: x,
        viewport: h
      } = (0, __mod_81712.C)(),
      p = (0, React.useMemo)(() => ({
        uTime: {
          value: 0
        },
        uResolution: {
          value: new __mod_2253.I9Y(x.width, x.height)
        },
        uCenter: {
          value: new __mod_2253.I9Y(e[0], e[1])
        },
        uScale: {
          value: t
        },
        uSpeed: {
          value: s
        },
        uColor: {
          value: new __mod_2253.Q1f(a)
        },
        uThickness: {
          value: u
        },
        uSoftness: {
          value: i
        },
        uRoundness: {
          value: c
        }
      }), []);
    return (0, __mod_81712.D)(n => {
      v.current && (v.current.uniforms.uTime.value = n.clock.elapsedTime, v.current.uniforms.uResolution.value.set(x.width, x.height), v.current.uniforms.uCenter.value.set(e[0], e[1]), v.current.uniforms.uScale.value = t, v.current.uniforms.uSpeed.value = s, v.current.uniforms.uColor.value.set(a), v.current.uniforms.uThickness.value = u, v.current.uniforms.uSoftness.value = i, v.current.uniforms.uRoundness.value = c);
    }), <mesh ref={m}><planeGeometry args={[h.width, h.height]} /><shaderMaterial ref={v} vertexShader={d} fragmentShader={f} uniforms={p} transparent={!0} depthWrite={!1} /></mesh>;
  },
  v = ({
    x: e = 0,
    y: t = 0,
    radius: s = 15,
    speed: r = 1.5,
    color: a = "#8b5cf6",
    thickness: u = .01,
    softness: o = .1,
    roundness: l = 1,
    className: d = ""
  }) => <div className={(0, __mod_90650.cn)("relative h-full w-full overflow-hidden", d)}><__mod_3907.Hl orthographic={!0} camera={{
      position: [0, 0, 1],
      zoom: 1
    }} gl={{
      alpha: !0,
      antialias: !0
    }} dpr={[1, 2]}><M center={[e, t]} scale={s} speed={r} color={a} thickness={u} softness={o} roundness={l} /></__mod_3907.Hl></div>,
  x = () => {
    let [e, t] = (0, __mod_90761.I)(),
      [s, o] = (0, React.useState)(0),
      [i, l] = (0, React.useState)(0),
      [c, d] = (0, React.useState)(15),
      [f, m] = (0, React.useState)(1.5),
      [x, h] = (0, React.useState)("#8b5cf6"),
      [p, g] = (0, React.useState)(.01),
      [b, S] = (0, React.useState)(1),
      [y, C] = (0, React.useState)(.1);
    return <div><__mod_56388.Bg /><__mod_56388.VX><__mod_56388.Ec><__mod_56388.Ch onRefresh={t} minHeight={600}><VView x={s} y={i} radius={c} speed={f} color={x} thickness={p} roundness={b} softness={y}/></__mod_56388.Ch><__mod_56388.IH><__mod_56388.yt title="X Offset" min={-1} max={1} step={.01} value={s} onChange={o} /><__mod_56388.yt title="Y Offset" min={-1} max={1} step={.01} value={i} onChange={l} /><__mod_56388.yt title="Radius" min={5} max={30} step={1} value={c} onChange={d} /><__mod_56388.yt title="Speed" min={0} max={5} step={.1} value={f} onChange={m} /><__mod_56388.yt title="Thickness" min={.01} max={.5} step={.01} value={p} onChange={g} /><__mod_56388.yt title="Roundness (Corners)" min={0} max={1} step={.05} value={b} onChange={S} /><__mod_56388.yt title="Softness (Edges)" min={.01} max={.3} step={.01} value={y} onChange={C} /><__mod_56388.W7 title="Star Color" value={x} onChange={h} /></__mod_56388.IH><__mod_56388.Ub data={[{
            name: "x",
            type: "number",
            default: "0",
            description: "Horizontal center offset."
          }, {
            name: "y",
            type: "number",
            default: "0",
            description: "Vertical center offset."
          }, {
            name: "radius",
            type: "number",
            default: "15",
            description: "Scale/radius of the star field."
          }, {
            name: "speed",
            type: "number",
            default: "1.5",
            description: "Rotation speed multiplier."
          }, {
            name: "thickness",
            type: "number",
            default: "0.01",
            description: "Apparent thickness of the star trails."
          }, {
            name: "roundness",
            type: "number",
            default: "1",
            description: "Corner radius of the star trails (0-1)."
          }, {
            name: "softness",
            type: "number",
            default: "0.1",
            description: "Softness (blur) of the trail edges."
          }, {
            name: "color",
            type: "string",
            default: '"#8b5cf6"',
            description: "Base color of the stars."
          }, {
            name: "className",
            type: "string",
            default: '""',
            description: "Additional CSS classes."
          }]} /></__mod_56388.Ec><__mod_56388.lT><__mod_56388.Gv /></__mod_56388.lT></__mod_56388.VX></div>;
  };

const M: any = m;

const VView: any = v;

export default x;

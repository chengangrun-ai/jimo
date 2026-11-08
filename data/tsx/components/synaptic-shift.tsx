import * as __mod_81712 from "../_helpers/81712";
import * as __mod_2253 from "../_helpers/2253";
import * as __mod_90650 from "../_helpers/90650";
import * as __mod_3907 from "../_helpers/3907";
import * as __mod_90761 from "../_helpers/90761";
import * as __mod_56388 from "../_helpers/56388";
/**
 * Synaptic Shift
 * Glowing neural tendrils that pulse and shift
 * slug: synaptic-shift
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
  f = `
  uniform float uTime;
  uniform vec2 uResolution;
  uniform vec2 uPointer;
  uniform vec3 uColor;
  uniform float uSpeed;
  uniform float uScale;
  uniform float uIntensity;
  uniform float uFalloff;
  uniform float uComplexity;

  varying vec2 vUv;

  mat2 rotate2D(float r) {
    return mat2(cos(r), sin(r), -sin(r), cos(r));
  }

  void main() {
    vec2 uv = (vUv * uResolution - 0.5 * uResolution) / uResolution.y;
    vec3 col = vec3(0.0);
    float t = uTime * uSpeed;

    vec2 n = vec2(0.0);
    vec2 q = vec2(0.0);
    vec2 N = vec2(0.0);
    vec2 p = uv + sin(t * 0.1) / 10.0;
    float S = 10.0 * uScale;

    mat2 m = rotate2D(1.0 - uPointer.x * 0.0001);

    for (float i = 0.0; i < 50.0; i++) {
      if (i >= uComplexity) break;
      float j = i + 1.0;
      p *= m;
      n *= m;
      q = p * S + j + n + t;
      n += sin(q);
      N += cos(q) / S;
      S *= uFalloff;
    }

    float brightness = pow((N.x + N.y + 0.2) + 0.005 / length(N), uIntensity);
    col = uColor * vec3(1.0, 2.0, 4.0) * brightness;

    float alpha = clamp(brightness, 0.0, 1.0);
    gl_FragColor = vec4(col, alpha);
  }
`,
  d = ({
    color: e,
    speed: t,
    scale: n,
    intensity: l,
    falloff: a,
    complexity: u,
    breathing: c
  }) => {
    let d = (0, React.useRef)(null),
      v = (0, React.useRef)(null),
      {
        size: p,
        viewport: h,
        pointer: x
      } = (0, __mod_81712.C)(),
      g = (0, React.useMemo)(() => ({
        uTime: {
          value: 0
        },
        uResolution: {
          value: new __mod_2253.I9Y(p.width, p.height)
        },
        uPointer: {
          value: new __mod_2253.I9Y(0, 0)
        },
        uColor: {
          value: new __mod_2253.Q1f(e)
        },
        uSpeed: {
          value: t
        },
        uScale: {
          value: n
        },
        uIntensity: {
          value: l
        },
        uFalloff: {
          value: a
        },
        uComplexity: {
          value: u
        }
      }), []);
    return (0, __mod_81712.D)(i => {
      if (v.current) {
        if (v.current.uniforms.uTime.value = i.clock.elapsedTime, v.current.uniforms.uResolution.value.set(p.width, p.height), v.current.uniforms.uColor.value.set(e), v.current.uniforms.uSpeed.value = t, v.current.uniforms.uScale.value = n, v.current.uniforms.uFalloff.value = a, v.current.uniforms.uComplexity.value = u, c) {
          let e = .2 * Math.sin(2 * i.clock.elapsedTime) + 1;
          v.current.uniforms.uIntensity.value = l * e;
        } else v.current.uniforms.uIntensity.value = l;
        let r = x.x * p.width,
          o = x.y * p.height;
        v.current.uniforms.uPointer.value.x += (r - v.current.uniforms.uPointer.value.x) * .1, v.current.uniforms.uPointer.value.y += (o - v.current.uniforms.uPointer.value.y) * .1;
      }
    }), <mesh ref={d}><planeGeometry args={[h.width, h.height]} /><shaderMaterial ref={v} vertexShader={m} fragmentShader={f} uniforms={g} transparent={!0} /></mesh>;
  },
  v = ({
    speed: e = .5,
    scale: t = .5,
    intensity: n = 2,
    color: r = "#FF9FFC",
    falloff: l = 1.15,
    complexity: a = 10,
    breathing: o = !1,
    className: s = ""
  }) => <div className={(0, __mod_90650.cn)("relative h-full w-full overflow-hidden", s)}><__mod_3907.Hl orthographic={!0} camera={{
      position: [0, 0, 1],
      zoom: 1
    }} dpr={[1, 2]} gl={{
      alpha: !0,
      antialias: !0,
      powerPreference: "high-performance"
    }}><D color={r} speed={e} scale={t} intensity={n} falloff={l} complexity={a} breathing={o} /></__mod_3907.Hl></div>,
  p = () => {
    let [e, t] = (0, __mod_90761.I)(),
      [n, o] = (0, React.useState)(.5),
      [u, s] = (0, React.useState)(.5),
      [c, m] = (0, React.useState)(2),
      [f, d] = (0, React.useState)("#FF9FFC"),
      [p, h] = (0, React.useState)(1.15),
      [x, g] = (0, React.useState)(10),
      [y, b] = (0, React.useState)(!1);
    return <div><__mod_56388.Bg /><__mod_56388.VX><__mod_56388.Ec><__mod_56388.Ch onRefresh={t} minHeight={600}><VView speed={n} scale={u} intensity={c} color={f} falloff={p} complexity={x} breathing={y}/></__mod_56388.Ch><__mod_56388.IH><__mod_56388.yt title="Speed" min={0} max={5} step={.1} value={n} onChange={o} /><__mod_56388.yt title="Scale" min={.1} max={2} step={.1} value={u} onChange={s} /><__mod_56388.tl title="Breathing" checked={y} onChange={b} /><__mod_56388.yt title="Intensity" min={.1} max={5} step={.1} value={c} onChange={m} /><__mod_56388.yt title="Falloff" min={.5} max={2} step={.01} value={p} onChange={h} /><__mod_56388.yt title="Complexity (Iterations)" min={5} max={50} step={1} value={x} onChange={g} /><__mod_56388.W7 title="Color Tint" value={f} onChange={d} /></__mod_56388.IH><__mod_56388.Ub data={[{
            name: "speed",
            type: "number",
            default: "0.5",
            description: "Animation speed multiplier."
          }, {
            name: "scale",
            type: "number",
            default: "0.5",
            description: "Scale of the fractal pattern."
          }, {
            name: "intensity",
            type: "number",
            default: "2",
            description: "Exponent controlling brightness/contrast."
          }, {
            name: "color",
            type: "string",
            default: '"#FF9FFC"',
            description: "Base color tint."
          }, {
            name: "falloff",
            type: "number",
            default: "1.15",
            description: "Internal scaling factor (structural falloff)."
          }, {
            name: "complexity",
            type: "number",
            default: "10",
            description: "Number of loop iterations (detail level)."
          }, {
            name: "breathing",
            type: "boolean",
            default: "false",
            description: "Whether to animate intensity automatically."
          }, {
            name: "className",
            type: "string",
            default: '""',
            description: "Additional CSS classes."
          }]} /></__mod_56388.Ec><__mod_56388.lT><__mod_56388.Gv /></__mod_56388.lT></__mod_56388.VX></div>;
  };

const D: any = d;

const VView: any = v;

export default p;

import * as __mod_81712 from "../_helpers/81712";
import * as __mod_2253 from "../_helpers/2253";
import * as __mod_90650 from "../_helpers/90650";
import * as __mod_3907 from "../_helpers/3907";
import * as __mod_90761 from "../_helpers/90761";
import * as __mod_56388 from "../_helpers/56388";
/**
 * Dot Shift
 * A shifting grid of glowing dots
 * slug: dot-shift
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
  m = `
  uniform float uTime;
  uniform vec2 uResolution;
  uniform float uSpeed;
  uniform float uScale;
  uniform vec3 uColor;
  uniform float uSize;
  uniform float uBlur;

  varying vec2 vUv;

  float hash13(vec3 p3) {
    p3  = fract(p3 * .1031);
    p3 += dot(p3, p3.zyx + 31.32);
    return fract((p3.x + p3.y) * p3.z);
  }

  vec3 getPattern(vec3 dir, float time) {
    dir += time * vec3(0.03, 0.01, 0.0);
    vec3 v = abs(mod(dir * 50.0, 2.0) - 1.0);
    vec3 pat = 3.0 * v * cos(hash13(floor(dir * 800.0)));
    return pat;
  }

  void main() {
    vec2 uv = (vUv * uResolution - 0.5 * uResolution) / uResolution.y;
    vec3 dir = normalize(vec3(uv * uScale, 1.0));
    float time = uTime * uSpeed;

    vec3 pat = getPattern(dir, time);
    float density = max(0.0, (1.5 * uSize) - dot(pat, vec3(1.0, 1.0, 0.5)));

    vec3 col = uColor * density * 3.0;

    float alpha = smoothstep(0.0, uBlur, density);

    gl_FragColor = vec4(col, alpha);
  }
`,
  v = ({
    speed: e,
    scale: t,
    color: r,
    size: l,
    blur: n
  }) => {
    let o = (0, React.useRef)(null),
      c = (0, React.useRef)(null),
      {
        size: v,
        viewport: p
      } = (0, __mod_81712.C)(),
      f = (0, React.useMemo)(() => ({
        uTime: {
          value: 0
        },
        uResolution: {
          value: new __mod_2253.I9Y(v.width, v.height)
        },
        uSpeed: {
          value: e
        },
        uScale: {
          value: t
        },
        uColor: {
          value: new __mod_2253.Q1f(r)
        },
        uSize: {
          value: l
        },
        uBlur: {
          value: n
        }
      }), []);
    return (0, __mod_81712.D)(a => {
      c.current && (c.current.uniforms.uTime.value = a.clock.elapsedTime, c.current.uniforms.uResolution.value.set(v.width, v.height), c.current.uniforms.uSpeed.value = e, c.current.uniforms.uScale.value = t, c.current.uniforms.uColor.value.set(r), c.current.uniforms.uSize.value = l, c.current.uniforms.uBlur.value = n);
    }), <mesh ref={o}><planeGeometry args={[p.width, p.height]} /><shaderMaterial ref={c} vertexShader={d} fragmentShader={m} uniforms={f} transparent={!0} /></mesh>;
  },
  p = ({
    speed: e = .5,
    scale: t = .6,
    color: r = "#FF9FFC",
    size: i = .6,
    blur: l = .5,
    className: n = ""
  }) => <div className={(0, __mod_90650.cn)("relative h-full w-full overflow-hidden", n)}><__mod_3907.Hl orthographic={!0} camera={{
      position: [0, 0, 1],
      zoom: 1
    }} dpr={[1, 2]} gl={{
      alpha: !0,
      antialias: !0,
      powerPreference: "high-performance"
    }}><V speed={e} scale={t} color={r} size={i} blur={l} /></__mod_3907.Hl></div>,
  f = () => {
    let [e, t] = (0, __mod_90761.I)(),
      [r, u] = (0, React.useState)(.5),
      [o, s] = (0, React.useState)(.6),
      [c, d] = (0, React.useState)("#FF9FFC"),
      [m, v] = (0, React.useState)(.6),
      [f, h] = (0, React.useState)(.5);
    return <div><__mod_56388.Bg /><__mod_56388.VX><__mod_56388.Ec><__mod_56388.Ch onRefresh={t} minHeight={600}><PView speed={r} scale={o} color={c} size={m} blur={f}/></__mod_56388.Ch><__mod_56388.IH><__mod_56388.yt title="Speed" min={0} max={5} step={.1} value={r} onChange={u} /><__mod_56388.yt title="Scale" min={.1} max={3} step={.1} value={o} onChange={s} /><__mod_56388.yt title="Dot Size" min={.1} max={3} step={.1} value={m} onChange={v} /><__mod_56388.yt title="Dot Blur" min={.1} max={1} step={.05} value={f} onChange={h} /><__mod_56388.W7 title="Base Color" value={c} onChange={d} /></__mod_56388.IH><__mod_56388.Ub data={[{
            name: "speed",
            type: "number",
            default: "0.5",
            description: "Animation speed multiplier."
          }, {
            name: "scale",
            type: "number",
            default: "0.6",
            description: "Scale of the dot pattern."
          }, {
            name: "size",
            type: "number",
            default: "0.6",
            description: "Size multiplier for the dots."
          }, {
            name: "blur",
            type: "number",
            default: "0.5",
            description: "Softness/blur of the dots."
          }, {
            name: "color",
            type: "string",
            default: '"#FF9FFC"',
            description: "Base color hue."
          }, {
            name: "className",
            type: "string",
            default: '""',
            description: "Additional CSS classes."
          }]} /></__mod_56388.Ec><__mod_56388.lT><__mod_56388.Gv /></__mod_56388.lT></__mod_56388.VX></div>;
  };

const V: any = v;

const PView: any = p;

export default f;

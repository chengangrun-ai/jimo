import * as __mod_81712 from "../_helpers/81712";
import * as __mod_2253 from "../_helpers/2253";
import * as __mod_90650 from "../_helpers/90650";
import * as __mod_3907 from "../_helpers/3907";
import * as __mod_90761 from "../_helpers/90761";
import * as __mod_30701 from "../_helpers/30701";
import * as __mod_56388 from "../_helpers/56388";
/**
 * Halftone Wave
 * A halftone dot grid rippling with soft noise
 * slug: halftone-wave
 * category: 3d
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
precision highp float;

uniform float uTime;
uniform vec2  uRes;
uniform float uSpeed;
uniform float uNoiseScale;
uniform int   uOctaves;
uniform float uGridDensity;
uniform float uDotSize;
uniform float uSoftness;
uniform float uContrastMin;
uniform float uContrastMax;
uniform float uScrollX;
uniform float uScrollY;
uniform float uRotation;
uniform vec3  uColorA;
uniform vec3  uColorB;
uniform vec3  uBg;
uniform float uAlpha;
uniform vec2  uPointer;
uniform float uCursorActive;

varying vec2 vUv;

float hash(vec2 st) {
  return fract(sin(dot(st, vec2(12.9898, 78.233))) * 43758.5453123);
}

float valueNoise(vec2 st) {
  vec2 i = floor(st);
  vec2 f = fract(st);

  float a = hash(i);
  float b = hash(i + vec2(1.0, 0.0));
  float c = hash(i + vec2(0.0, 1.0));
  float d = hash(i + vec2(1.0, 1.0));

  vec2 u = f * f * (3.0 - 2.0 * f);

  return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
}

float fbm(vec2 st) {
  float value = 0.0;
  float amplitude = 0.5;
  for (int i = 0; i < 6; i++) {
    if (i >= uOctaves) break;
    value += amplitude * valueNoise(st);
    st *= 2.0;
    amplitude *= 0.5;
  }
  return value;
}

void main() {
  float t = uTime * uSpeed;

  vec2 uv = gl_FragCoord.xy / uRes;
  uv.x *= uRes.x / uRes.y;

  vec2 center = vec2((uRes.x / uRes.y) * 0.5, 0.5);
  vec2 rotUv = uv - center;
  float cr = cos(uRotation);
  float sr = sin(uRotation);
  rotUv = mat2(cr, -sr, sr, cr) * rotUv;
  uv = rotUv + center;

  vec2 noiseUV = uv * uNoiseScale + vec2(t * uScrollX, t * uScrollY);
  float n = fbm(noiseUV);

  n = smoothstep(uContrastMin, uContrastMax, n);

  vec2 gridUV = uv * uGridDensity;
  vec2 cellUV = fract(gridUV) - 0.5;
  float dist = length(cellUV);

  vec2 pointerUv = vec2(uPointer.x * (uRes.x / uRes.y), uPointer.y);
  float cursorDist = length(uv - pointerUv);
  float cursorBoost = smoothstep(0.35, 0.0, cursorDist) * 0.3 * uCursorActive;

  float targetRadius = n * uDotSize + cursorBoost;
  float dotMask = smoothstep(targetRadius + uSoftness, targetRadius - uSoftness, dist);

  vec3 dotColor = mix(uColorA, uColorB, n);
  vec3 finalColor = mix(uBg, dotColor, dotMask);

  gl_FragColor = vec4(finalColor, uAlpha);
}
`;
function v(e) {
  let t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
  return t ? [parseInt(t[1], 16) / 255, parseInt(t[2], 16) / 255, parseInt(t[3], 16) / 255] : [0, 0, 0];
}
let p = ({
    speed: e,
    noiseScale: t,
    octaves: o,
    gridDensity: r,
    dotSize: s,
    softness: i,
    contrastMin: l,
    contrastMax: c,
    scrollX: v,
    scrollY: p,
    rotation: h,
    colorARgb: x,
    colorBRgb: g,
    bgRgb: C,
    opacity: y,
    pointer: S,
    cursorInteraction: b
  }) => {
    let F = (0, React.useRef)(null),
      {
        size: j,
        viewport: M
      } = (0, __mod_81712.C)(),
      w = (0, React.useRef)(new __mod_2253.I9Y(.5, .5)),
      R = (0, React.useMemo)(() => ({
        uTime: {
          value: 0
        },
        uRes: {
          value: new __mod_2253.I9Y()
        },
        uSpeed: {
          value: e
        },
        uNoiseScale: {
          value: t
        },
        uOctaves: {
          value: o
        },
        uGridDensity: {
          value: r
        },
        uDotSize: {
          value: s
        },
        uSoftness: {
          value: i
        },
        uContrastMin: {
          value: l
        },
        uContrastMax: {
          value: c
        },
        uScrollX: {
          value: v
        },
        uScrollY: {
          value: p
        },
        uRotation: {
          value: h * Math.PI / 180
        },
        uColorA: {
          value: new __mod_2253.Pq0(...x)
        },
        uColorB: {
          value: new __mod_2253.Pq0(...g)
        },
        uBg: {
          value: new __mod_2253.Pq0(...C)
        },
        uAlpha: {
          value: y
        },
        uPointer: {
          value: new __mod_2253.I9Y(.5, .5)
        },
        uCursorActive: {
          value: 0
        }
      }), []);
    return (0, __mod_81712.D)((a, n) => {
      if (!F.current) return;
      let u = F.current.material;
      u.uniforms.uTime.value = a.clock.elapsedTime, u.uniforms.uRes.value.set(j.width * M.dpr, j.height * M.dpr), u.uniforms.uSpeed.value = e, u.uniforms.uNoiseScale.value = t, u.uniforms.uOctaves.value = o, u.uniforms.uGridDensity.value = r, u.uniforms.uDotSize.value = s, u.uniforms.uSoftness.value = i, u.uniforms.uContrastMin.value = l, u.uniforms.uContrastMax.value = c, u.uniforms.uScrollX.value = v, u.uniforms.uScrollY.value = p, u.uniforms.uRotation.value = h * Math.PI / 180, u.uniforms.uColorA.value.set(...x), u.uniforms.uColorB.value.set(...g), u.uniforms.uBg.value.set(...C), u.uniforms.uAlpha.value = y, u.uniforms.uCursorActive.value = +!!b;
      let d = 1 - Math.exp(-n / .15);
      w.current.x += (S[0] - w.current.x) * d, w.current.y += (S[1] - w.current.y) * d, u.uniforms.uPointer.value.set(w.current.x, w.current.y);
    }), <mesh ref={F}><planeGeometry args={[2, 2]} /><shaderMaterial vertexShader={m} fragmentShader={f} uniforms={R} transparent={!0} /></mesh>;
  },
  h = ({
    width: e = "100%",
    height: t = "100%",
    className: o,
    children: r,
    speed: s = 1,
    noiseScale: i = 3,
    octaves: u = 3,
    gridDensity: d = 40,
    dotSize: m = .75,
    softness: f = .35,
    contrastMin: h = .2,
    contrastMax: x = .8,
    scrollX: g = .1,
    scrollY: C = .1,
    rotation: y = 0,
    colorA: S = "#FFFFFF",
    colorB: b = "#000000",
    backgroundColor: F = "#FFFFFF",
    opacity: j = 1,
    cursorInteraction: M = !1
  }) => {
    let w = (0, React.useMemo)(() => v(S), [S]),
      R = (0, React.useMemo)(() => v(b), [b]),
      N = (0, React.useMemo)(() => v(F), [F]),
      B = (0, React.useRef)(null),
      [P, k] = (0, React.useState)([.5, .5]),
      D = (0, React.useCallback)(e => {
        if (!M) return;
        let t = B.current?.getBoundingClientRect();
        t && k([(e.clientX - t.left) / t.width, 1 - (e.clientY - t.top) / t.height]);
      }, [M]);
    return <div ref={B} className={(0, __mod_90650.cn)("relative overflow-hidden", o)} style={{
      width: e,
      height: t,
      backgroundColor: F
    }} onPointerMove={D}><__mod_3907.Hl className="absolute inset-0 h-full w-full" orthographic={!0} camera={{
        position: [0, 0, 1],
        zoom: 1,
        left: -1,
        right: 1,
        top: 1,
        bottom: -1
      }} gl={{
        antialias: !0,
        alpha: !0
      }}><PSceneReal speed={s} noiseScale={i} octaves={u} gridDensity={d} dotSize={m} softness={f} contrastMin={h} contrastMax={x} scrollX={g} scrollY={C} rotation={y} colorARgb={w} colorBRgb={R} bgRgb={N} opacity={j} pointer={P} cursorInteraction={M} /></__mod_3907.Hl>{r && <div className="pointer-events-none relative z-10">{r}</div>}</div>;
  };
h.displayName = "HalftoneWave";
let x = () => {
  let [e, t] = (0, __mod_90761.I)(),
    {
      resolvedTheme: o
    } = (0, __mod_30701.D)(),
    [u, l] = (0, React.useState)(1),
    [c, d] = (0, React.useState)(0),
    [m, f] = (0, React.useState)(1),
    [v, p] = (0, React.useState)(!1),
    [x, g] = (0, React.useState)(3),
    [C, y] = (0, React.useState)(3),
    [S, b] = (0, React.useState)(.2),
    [F, j] = (0, React.useState)(.8),
    [M, w] = (0, React.useState)(.1),
    [R, N] = (0, React.useState)(.1),
    [B, P] = (0, React.useState)(40),
    [k, D] = (0, React.useState)(.75),
    [U, A] = (0, React.useState)(.35),
    [I, z] = (0, React.useState)(null),
    [Y, T] = (0, React.useState)(null),
    [X, V] = (0, React.useState)(null),
    E = (0, React.useMemo)(() => null !== I ? I : "dark" === o ? "#FFFFFF" : "#000000", [o, I]),
    G = (0, React.useMemo)(() => null !== Y ? Y : "dark" === o ? "#FFFFFF" : "#000000", [o, Y]),
    O = (0, React.useMemo)(() => null !== X ? X : "dark" === o ? "#0a0a0a" : "#FFFFFF", [o, X]);
  return <div><__mod_56388.Bg /><__mod_56388.VX><__mod_56388.Ec><__mod_56388.Ch onRefresh={t}><div className="relative h-full w-full"><HView width="100%" height="100%" speed={u} noiseScale={x} octaves={C} gridDensity={B} dotSize={k} softness={U} contrastMin={S} contrastMax={F} scrollX={M} scrollY={R} rotation={c} colorA={E} colorB={G} backgroundColor={O} opacity={m} cursorInteraction={v}/></div></__mod_56388.Ch><__mod_56388.IH><__mod_56388.yt title="Grid Density" value={B} onChange={P} min={5} max={100} step={1} /><__mod_56388.yt title="Dot Size" value={k} onChange={D} min={0} max={1} step={.01} /><__mod_56388.yt title="Softness" value={U} onChange={A} min={0} max={1} step={.01} /><__mod_56388.yt title="Speed" value={u} onChange={l} min={.01} max={3} step={.01} /><__mod_56388.yt title="Rotation" value={c} onChange={d} min={0} max={360} step={1} /><__mod_56388.yt title="Opacity" value={m} onChange={f} min={0} max={1} step={.05} /><__mod_56388.yt title="Noise Scale" value={x} onChange={g} min={.5} max={10} step={.1} /><__mod_56388.yt title="Octaves" value={C} onChange={y} min={1} max={6} step={1} /><__mod_56388.yt title="Contrast Min" value={S} onChange={b} min={0} max={1} step={.01} /><__mod_56388.yt title="Contrast Max" value={F} onChange={j} min={0} max={1} step={.01} /><__mod_56388.yt title="Scroll X" value={M} onChange={w} min={-1} max={1} step={.01} /><__mod_56388.yt title="Scroll Y" value={R} onChange={N} min={-1} max={1} step={.01} /><__mod_56388.W7 title="Color A" value={E} onChange={e => z(e)} /><__mod_56388.W7 title="Color B" value={G} onChange={e => T(e)} /><__mod_56388.W7 title="Background" value={O} onChange={e => V(e)} /><__mod_56388.tl title="Cursor Interaction" checked={v} onChange={p} /></__mod_56388.IH><__mod_56388.Ub data={[{
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
          description: "Additional CSS classes for styling"
        }, {
          name: "children",
          type: "ReactNode",
          default: "undefined",
          description: "Content rendered above the effect"
        }, {
          name: "speed",
          type: "number",
          default: "1.0",
          description: "Animation speed multiplier (0.01–3.0)"
        }, {
          name: "noiseScale",
          type: "number",
          default: "3.0",
          description: "Noise field scale: higher values create smaller, denser noise features (0.5–10)"
        }, {
          name: "octaves",
          type: "number",
          default: "3",
          description: "Number of FBM octaves (1–6). More octaves = finer detail"
        }, {
          name: "gridDensity",
          type: "number",
          default: "40.0",
          description: "Number of dots per screen-width (5–100)"
        }, {
          name: "dotSize",
          type: "number",
          default: "0.75",
          description: "Maximum dot radius as fraction of cell (0–1)"
        }, {
          name: "softness",
          type: "number",
          default: "0.35",
          description: "Dot edge softness, higher = blurrier edges (0–1)"
        }, {
          name: "contrastMin",
          type: "number",
          default: "0.2",
          description: "Lower bound of noise contrast remap (0–1)"
        }, {
          name: "contrastMax",
          type: "number",
          default: "0.8",
          description: "Upper bound of noise contrast remap (0–1)"
        }, {
          name: "scrollX",
          type: "number",
          default: "0.1",
          description: "Horizontal scroll speed of the noise field (-1–1)"
        }, {
          name: "scrollY",
          type: "number",
          default: "0.1",
          description: "Vertical scroll speed of the noise field (-1–1)"
        }, {
          name: "rotation",
          type: "number",
          default: "0",
          description: "Rotation angle in degrees (0–360)"
        }, {
          name: "colorA",
          type: "string",
          default: '"#FFFFFF"',
          description: "Primary dot color at low noise values (hex)"
        }, {
          name: "colorB",
          type: "string",
          default: '"#000000"',
          description: "Secondary dot color at high noise values (hex)"
        }, {
          name: "backgroundColor",
          type: "string",
          default: '"#FFFFFF"',
          description: "Background color (hex)"
        }, {
          name: "opacity",
          type: "number",
          default: "1",
          description: "Master opacity (0–1)"
        }, {
          name: "cursorInteraction",
          type: "boolean",
          default: "false",
          description: "Enable cursor interaction to boost dot size near pointer"
        }]} /></__mod_56388.Ec><__mod_56388.lT><__mod_56388.Gv /></__mod_56388.lT></__mod_56388.VX></div>;
};


const HView: any = h;

const PSceneReal: any = p;

export default x;

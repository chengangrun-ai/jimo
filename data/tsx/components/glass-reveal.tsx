import * as __mod_2253 from "../_helpers/2253";
import * as __mod_81712 from "../_helpers/81712";
import * as __mod_50969 from "../_helpers/50969";
import * as __mod_90650 from "../_helpers/90650";
import * as __mod_3907 from "../_helpers/3907";
import * as __mod_90761 from "../_helpers/90761";
import * as __mod_56388 from "../_helpers/56388";
/**
 * Glass Reveal
 * A glass lens that reveals one image through another
 * slug: glass-reveal
 * category: lens
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let v = {
    square: 0,
    circle: 1,
    blob: 2,
    portal: 3
  },
  f = `
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = vec4(position.xy * 2.0, 0.0, 1.0);
}
`,
  m = `
precision highp float;

varying vec2 vUv;

uniform sampler2D uInside;
uniform sampler2D uOutside;
uniform vec2 uInsideSize;
uniform vec2 uOutsideSize;
uniform float uInsideReady;
uniform float uOutsideReady;
uniform vec3 uFallback;
uniform vec2 uResolution;
uniform vec2 uPointer;
uniform int uShape;
uniform float uSize;
uniform float uSoftness;
uniform float uDistortion;
uniform float uAberration;
uniform float uWobble;
uniform float uWobbleTime;
uniform float uWaveFrequency;
uniform float uWaveStrength;
uniform float uWaveTime;
uniform float uGrain;
uniform float uGrainTime;
uniform float uGray;
uniform float uDim;


vec2 coverUv(vec2 uv, vec2 box, vec2 tex) {
  float boxRatio = box.x / box.y;
  float texRatio = tex.x / tex.y;
  vec2 scale = boxRatio > texRatio
    ? vec2(1.0, texRatio / boxRatio)
    : vec2(boxRatio / texRatio, 1.0);
  return (uv - 0.5) * scale + 0.5;
}


float grain(vec2 uv, float t) {
  vec3 p = fract(vec3(uv * 613.7, t) * vec3(0.1031, 0.1030, 0.0973));
  p += dot(p, p.yxz + 33.33);
  return fract((p.x + p.y) * p.z);
}


float blobRadius(float a, float t) {
  float bulge = 0.5 * sin(3.0 * a + t)
    + 0.3 * sin(5.0 * a - 1.7 * t + 1.3)
    + 0.2 * sin(7.0 * a + 0.6 * t + 2.1);
  return 1.0 + bulge * uWobble * 0.35;
}


float outline(vec2 q) {
  if (uShape == 0) return max(abs(q.x), abs(q.y)) - 1.0;
  if (uShape == 1) return length(q) - 1.0;
  return length(q) - blobRadius(atan(q.y, q.x), uWobbleTime);
}

vec3 sampleOutside(vec2 uv) {
  if (uOutsideReady < 0.5) return uFallback;
  vec3 c = texture2D(uOutside, uv).rgb;
  float luma = dot(c, vec3(0.299, 0.587, 0.114));
  return mix(c, vec3(luma), uGray) * (1.0 - uDim);
}

void main() {
  vec2 aspect = vec2(
    min(uResolution.y / uResolution.x, 1.0),
    min(uResolution.x / uResolution.y, 1.0)
  );


  vec2 p = ((vUv * 2.0 - 1.0) - uPointer) / aspect;
  vec2 q = p / max(uSize, 0.001);
  float d = outline(q);

  float aa = fwidth(d) * 1.5;

  float soft = uShape == 3 ? uSoftness + 0.8 : max(uSoftness, aa);
  float mask = 1.0 - smoothstep(-soft * 0.5, soft * 0.5, d);
  if (uShape == 3) mask = mask * mask * (3.0 - 2.0 * mask);


  vec2 outUv = coverUv(vUv, uResolution, uOutsideSize);
  outUv.y += sin(outUv.y * uWaveFrequency + uWaveTime) * uWaveStrength;
  outUv += (grain(vUv, uGrainTime) - 0.5) * uGrain;
  vec3 outside = sampleOutside(outUv);


  float r2 = dot(q, q) * 0.25;
  float scale = uDistortion >= 0.0
    ? 1.0 + uDistortion * r2
    : 1.0 / (1.0 - uDistortion * r2);
  float reach = uShape == 3 ? mask : 1.0;
  vec2 lensOffset = q * (scale - 1.0) * uSize * aspect * 0.5 * reach;
  vec2 inUv = coverUv(vUv - lensOffset, uResolution, uInsideSize);
  vec2 fringe = q * uAberration * 0.5 * reach;

  vec3 inside = uFallback;
  if (uInsideReady > 0.5) {
    inside = vec3(
      texture2D(uInside, inUv + fringe).r,
      texture2D(uInside, inUv).g,
      texture2D(uInside, inUv - fringe).b
    );
  }

  gl_FragColor = vec4(mix(outside, inside, mask), 1.0);
}
`,
  p = (e, t, a) => Math.min(a, Math.max(t, e)),
  h = e => {
    let t = window.matchMedia("(min-resolution: 2dppx)");
    return t.addEventListener("change", e), window.addEventListener("resize", e), () => {
      t.removeEventListener("change", e), window.removeEventListener("resize", e);
    };
  },
  b = () => window.devicePixelRatio || 1,
  g = (e, t, a) => {
    let n = new Image();
    n.crossOrigin = "anonymous", n.decoding = "async";
    let i = !1;
    return n.onload = () => {
      if (i) return;
      let e = new __mod_2253.gPd(n);
      e.colorSpace = __mod_2253.jf0, e.wrapS = __mod_2253.ghU, e.wrapT = __mod_2253.ghU, e.minFilter = __mod_2253.$_I, e.magFilter = __mod_2253.k6q, e.anisotropy = t, e.needsUpdate = !0, a({
        texture: e,
        width: n.naturalWidth,
        height: n.naturalHeight
      });
    }, n.onerror = () => {
      i || a(null);
    }, n.src = e, () => {
      i = !0;
    };
  },
  x = ({
    image: e,
    backgroundImage: t,
    shape: a,
    size: r,
    softness: u,
    distortion: o,
    aberration: s,
    wobble: c,
    wobbleSpeed: h,
    waveFrequency: b,
    waveStrength: x,
    waveSpeed: y,
    grain: w,
    grainSpeed: S,
    grayscale: C,
    dim: j,
    follow: R,
    returnToCenter: I,
    fallbackColor: k,
    paused: U,
    pointer: q
  }) => {
    let W = (0, React.useRef)(null),
      D = (0, React.useRef)(new __mod_2253.I9Y(0, 0)),
      P = (0, React.useRef)({
        wobble: 0,
        wave: 0,
        grain: 0
      }),
      {
        gl: z,
        size: T,
        invalidate: O
      } = (0, __mod_81712.C)(),
      F = (0, React.useMemo)(() => ({
        uInside: {
          value: null
        },
        uOutside: {
          value: null
        },
        uInsideSize: {
          value: new __mod_2253.I9Y(1, 1)
        },
        uOutsideSize: {
          value: new __mod_2253.I9Y(1, 1)
        },
        uInsideReady: {
          value: 0
        },
        uOutsideReady: {
          value: 0
        },
        uFallback: {
          value: ((e, t) => {
            let a = new __mod_2253.Q1f();
            try {
              a.setStyle(e, __mod_2253.Zr2);
            } catch {
              a.setStyle(t, __mod_2253.Zr2);
            }
            return a;
          })("#171717", "#171717")
        },
        uResolution: {
          value: new __mod_2253.I9Y(1, 1)
        },
        uPointer: {
          value: new __mod_2253.I9Y(0, 0)
        },
        uShape: {
          value: 0
        },
        uSize: {
          value: .4
        },
        uSoftness: {
          value: 0
        },
        uDistortion: {
          value: 1.5
        },
        uAberration: {
          value: .02
        },
        uWobble: {
          value: .5
        },
        uWobbleTime: {
          value: 0
        },
        uWaveFrequency: {
          value: 10
        },
        uWaveStrength: {
          value: .01
        },
        uWaveTime: {
          value: 0
        },
        uGrain: {
          value: .02
        },
        uGrainTime: {
          value: 0
        },
        uGray: {
          value: 1
        },
        uDim: {
          value: 0
        }
      }), []);
    return (0, React.useEffect)(() => {
      let t = W.current;
      if (!t) return;
      let a = z.capabilities.getMaxAnisotropy(),
        n = null,
        i = g(e, a, e => {
          let a = t.uniforms;
          if (!e) {
            a.uInsideReady.value = 0, O();
            return;
          }
          n = e.texture, a.uInside.value = e.texture, a.uInsideSize.value.set(e.width, e.height), a.uInsideReady.value = 1, O();
        });
      return () => {
        i(), n?.dispose();
      };
    }, [e, z, O]), (0, React.useEffect)(() => {
      let e = W.current;
      if (!e) return;
      let a = z.capabilities.getMaxAnisotropy(),
        n = null,
        i = g(t, a, t => {
          let a = e.uniforms;
          if (!t) {
            a.uOutsideReady.value = 0, O();
            return;
          }
          n = t.texture, a.uOutside.value = t.texture, a.uOutsideSize.value.set(t.width, t.height), a.uOutsideReady.value = 1, O();
        });
      return () => {
        i(), n?.dispose();
      };
    }, [t, z, O]), (0, React.useEffect)(() => {
      let e = W.current;
      if (e) {
        var t = e.uniforms.uFallback.value;
        try {
          t.setStyle(k, __mod_2253.Zr2);
        } catch {}
        O();
      }
    }, [k, O]), (0, React.useEffect)(() => {
      O();
    }, [a, r, u, o, s, c, b, x, w, C, j, O]), (0, __mod_81712.D)((e, t) => {
      let n = W.current;
      if (!n) return;
      let i = Math.min(t, .05);
      if (!U) {
        let e = P.current;
        e.wobble += i * h, e.wave += i * y, e.grain += i * S;
      }
      let l = q.current,
        d = l.inside || !I ? l.x : 0,
        f = l.inside || !I ? l.y : 0,
        m = 1 - Math.exp(-i * (2 + (1 - p(R, 0, 1)) * 40));
      D.current.x += (d - D.current.x) * m, D.current.y += (f - D.current.y) * m;
      let g = z.getPixelRatio(),
        k = n.uniforms;
      k.uResolution.value.set(T.width * g, T.height * g), k.uPointer.value.copy(D.current), k.uShape.value = v[a] ?? 0, k.uSize.value = p(r, .02, 2), k.uSoftness.value = Math.max(u, 0), k.uDistortion.value = o, k.uAberration.value = s, k.uWobble.value = p(c, 0, 1), k.uWobbleTime.value = P.current.wobble, k.uWaveFrequency.value = b, k.uWaveStrength.value = x, k.uWaveTime.value = P.current.wave, k.uGrain.value = w, k.uGrainTime.value = P.current.grain, k.uGray.value = p(C, 0, 1), k.uDim.value = p(j, 0, 1);
    }), <mesh frustumCulled={!1}><planeGeometry args={[1, 1]} /><shaderMaterial ref={W} vertexShader={f} fragmentShader={m} uniforms={F} depthTest={!1} depthWrite={!1} /></mesh>;
  },
  y = ({
    image: e = "https://images.unsplash.com/photo-1552160793-cbaf3ebcba72?q=80&w=1470&auto=format&fit=crop",
    backgroundImage: t,
    shape: a = "circle",
    size: r = .6,
    softness: u = 0,
    distortion: l = 1,
    aberration: d = .01,
    wobble: v = .5,
    wobbleSpeed: f = 2,
    waveFrequency: m = 6,
    waveStrength: g = .01,
    waveSpeed: y = 1,
    grain: w = .02,
    grainSpeed: S = 10,
    grayscale: C = 1,
    dim: j = 0,
    follow: R = .85,
    returnToCenter: I = !0,
    fallbackColor: k = "#171717",
    paused: U = !1,
    dpr: q = 1.5,
    className: W,
    children: D
  }) => {
    let P = (0, React.useRef)(null),
      z = (0, React.useRef)({
        x: 0,
        y: 0,
        inside: !1
      }),
      [T, O] = (0, React.useState)(!0),
      F = (0, __mod_50969.I)(),
      E = Math.min((0, React.useSyncExternalStore)(h, b, () => 1), Math.max(q, .5));
    (0, React.useEffect)(() => {
      let e = P.current;
      if (!e || "undefined" == typeof IntersectionObserver) return;
      let t = new IntersectionObserver(([e]) => O(e.isIntersecting), {
        threshold: 0
      });
      return t.observe(e), () => t.disconnect();
    }, []);
    let G = e => {
        let t = e.currentTarget.getBoundingClientRect();
        z.current.x = p((e.clientX - t.left) / t.width * 2 - 1, -1, 1), z.current.y = p(1 - (e.clientY - t.top) / t.height * 2, -1, 1), z.current.inside = !0;
      },
      N = U || !!F;
    return <div ref={P} className={(0, __mod_90650.cn)("relative touch-none overflow-hidden", W)} onPointerMove={G} onPointerDown={G} onPointerLeave={() => {
      z.current.inside = !1;
    }}><div className="absolute inset-0"><__mod_3907.Hl orthographic={!0} dpr={E} frameloop={T ? "always" : "demand"} gl={{
          antialias: !1,
          alpha: !1,
          powerPreference: "high-performance"
        }}><X image={e} backgroundImage={t ?? e} shape={a} size={r} softness={u} distortion={l} aberration={d} wobble={v} wobbleSpeed={N ? 0 : f} waveFrequency={m} waveStrength={N ? 0 : g} waveSpeed={y} grain={N ? 0 : w} grainSpeed={S} grayscale={C} dim={j} follow={F ? 0 : R} returnToCenter={I} fallbackColor={k} paused={N} pointer={z} /></__mod_3907.Hl></div>{D ? <div className="pointer-events-none relative z-10 h-full w-full">{D}</div> : null}</div>;
  },
  w = "https://images.unsplash.com/photo-1552160793-cbaf3ebcba72?q=80&w=1470&auto=format&fit=crop",
  S = () => {
    let [e, t] = (0, __mod_90761.I)(),
      [a, l] = (0, React.useState)(w),
      [o, s] = (0, React.useState)("circle"),
      [d, c] = (0, React.useState)(.6),
      [v, f] = (0, React.useState)(0),
      [m, p] = (0, React.useState)(1),
      [h, b] = (0, React.useState)(.01),
      [g, x] = (0, React.useState)(.5),
      [S, C] = (0, React.useState)(2),
      [j, R] = (0, React.useState)(6),
      [I, k] = (0, React.useState)(.01),
      [U, q] = (0, React.useState)(1),
      [W, D] = (0, React.useState)(.02),
      [P, z] = (0, React.useState)(10),
      [T, O] = (0, React.useState)(1),
      [F, E] = (0, React.useState)(0),
      [G, N] = (0, React.useState)(.85),
      [M, H] = (0, React.useState)(!0),
      [L, A] = (0, React.useState)("#171717"),
      [_, Y] = (0, React.useState)(!1);
    return <div><__mod_56388.Bg /><__mod_56388.VX><__mod_56388.Ec><__mod_56388.Ch onRefresh={t} minHeight={560}><div className="relative h-full w-full"><YView className="h-full w-full" image={a.trim() || w} shape={o} size={d} softness={v} distortion={m} aberration={h} wobble={g} wobbleSpeed={S} waveFrequency={j} waveStrength={I} waveSpeed={U} grain={W} grainSpeed={P} grayscale={T} dim={F} follow={G} returnToCenter={M} fallbackColor={L} paused={_}/></div></__mod_56388.Ch><__mod_56388.IH><__mod_56388.UD title="Image URL" value={a} placeholder="https://" onChange={l} /><__mod_56388.bg title="Shape" value={o} onChange={e => s(e)} options={[{
              label: "Square",
              value: "square"
            }, {
              label: "Circle",
              value: "circle"
            }, {
              label: "Blob",
              value: "blob"
            }, {
              label: "Portal",
              value: "portal"
            }]} /><__mod_56388.yt title="Size" min={.05} max={1} step={.01} value={d} onChange={c} /><__mod_56388.yt title="Softness" min={0} max={.6} step={.01} value={v} onChange={f} /><__mod_56388.yt title="Distortion" min={-3} max={4} step={.05} value={m} onChange={p} /><__mod_56388.yt title="Aberration" min={0} max={.1} step={.002} value={h} onChange={b} /><__mod_56388.yt title="Wobble" min={0} max={1} step={.05} value={g} onChange={x} /><__mod_56388.yt title="Wobble Speed" min={0} max={4} step={.1} value={S} onChange={C} /><__mod_56388.yt title="Wave Frequency" min={0} max={40} step={1} value={j} onChange={R} /><__mod_56388.yt title="Wave Strength" min={0} max={.05} step={.001} value={I} onChange={k} /><__mod_56388.yt title="Wave Speed" min={0} max={4} step={.1} value={U} onChange={q} /><__mod_56388.yt title="Grain" min={0} max={.08} step={.001} value={W} onChange={D} /><__mod_56388.yt title="Grain Speed" min={0} max={30} step={1} value={P} onChange={z} /><__mod_56388.yt title="Grayscale" min={0} max={1} step={.05} value={T} onChange={O} /><__mod_56388.yt title="Dim" min={0} max={1} step={.05} value={F} onChange={E} /><__mod_56388.yt title="Follow" min={0} max={1} step={.05} value={G} onChange={N} /><__mod_56388.tl title="Return To Center" checked={M} onChange={H} /><__mod_56388.W7 title="Fallback" value={L} onChange={A} /><__mod_56388.tl title="Paused" checked={_} onChange={Y} /></__mod_56388.IH><__mod_56388.Ub data={[{
            name: "image",
            type: "string",
            default: "Unsplash URL",
            description: "Photo shown in full colour inside the lens."
          }, {
            name: "backgroundImage",
            type: "string",
            default: "image",
            description: "Optional different photo for the outside. Defaults to the same image."
          }, {
            name: "shape",
            type: '"square" | "circle" | "blob" | "portal"',
            default: '"circle"',
            description: "Outline of the lens. Portal is an organic blob whose edge dissolves into the outside."
          }, {
            name: "size",
            type: "number",
            default: "0.6",
            description: "Lens size as a fraction of the shorter container edge."
          }, {
            name: "softness",
            type: "number",
            default: "0",
            description: "Edge feather in lens units. 0 keeps a crisp cut. Portal adds its own wide falloff."
          }, {
            name: "distortion",
            type: "number",
            default: "1",
            description: "Radial lens warp inside the outline. Positive magnifies like glass, negative pinches."
          }, {
            name: "aberration",
            type: "number",
            default: "0.01",
            description: "Colour fringing that grows towards the lens edge."
          }, {
            name: "wobble",
            type: "number",
            default: "0.5",
            description: "How far the blob and portal outlines wobble, 0 to 1."
          }, {
            name: "wobbleSpeed",
            type: "number",
            default: "2",
            description: "Speed of the outline wobble."
          }, {
            name: "waveFrequency",
            type: "number",
            default: "6",
            description: "Frequency of the sine wave rolling through the outside image."
          }, {
            name: "waveStrength",
            type: "number",
            default: "0.01",
            description: "Displacement of the outside wave."
          }, {
            name: "waveSpeed",
            type: "number",
            default: "1",
            description: "Speed of the outside wave."
          }, {
            name: "grain",
            type: "number",
            default: "0.02",
            description: "Displacement of the animated grain outside the lens."
          }, {
            name: "grainSpeed",
            type: "number",
            default: "10",
            description: "How fast the grain flickers."
          }, {
            name: "grayscale",
            type: "number",
            default: "1",
            description: "How far the outside is drained of colour, 0 to 1."
          }, {
            name: "dim",
            type: "number",
            default: "0",
            description: "How far the outside is darkened, 0 to 1."
          }, {
            name: "follow",
            type: "number",
            default: "0.85",
            description: "Pointer damping. 0 snaps to the pointer, 1 trails far behind."
          }, {
            name: "returnToCenter",
            type: "boolean",
            default: "true",
            description: "Drift the lens back to the centre when the pointer leaves."
          }, {
            name: "fallbackColor",
            type: "string",
            default: '"#171717"',
            description: "Colour shown while the image loads or if it fails to load."
          }, {
            name: "paused",
            type: "boolean",
            default: "false",
            description: "Freeze the wave, grain and outline animation."
          }, {
            name: "dpr",
            type: "number",
            default: "1.5",
            description: "Upper device pixel ratio bound for the canvas."
          }, {
            name: "className",
            type: "string",
            default: "—",
            description: "Classes applied to the root element."
          }, {
            name: "children",
            type: "ReactNode",
            default: "—",
            description: "Content layered above the effect."
          }]} /></__mod_56388.Ec><__mod_56388.lT><__mod_56388.Gv /></__mod_56388.lT></__mod_56388.VX></div>;
  };

const X: any = x;

const YView: any = y;

export default S;

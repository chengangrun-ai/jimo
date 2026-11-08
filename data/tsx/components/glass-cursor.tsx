import * as __mod_81712 from "../_helpers/81712";
import * as __mod_2253 from "../_helpers/2253";
import * as __mod_90650 from "../_helpers/90650";
import * as __mod_3907 from "../_helpers/3907";
import * as __mod_90761 from "../_helpers/90761";
import * as __mod_56388 from "../_helpers/56388";
import * as __mod_48543 from "../_helpers/48543";
/**
 * Glass Cursor
 * A glass cursor that bends the image beneath it
 * slug: glass-cursor
 * category: cursor
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let p = `
varying vec2 vPos;
void main() {
  vPos = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,
  d = `
precision highp float;
varying vec2 vPos;

#define MAX_TRAIL 40
#define INV_81 0.01234567901

uniform sampler2D uImage;
uniform vec2 uViewport;
uniform vec2 uInvViewport;
uniform float uImgRatio;
uniform vec2 uTrail[MAX_TRAIL];
uniform float uRadii[MAX_TRAIL];
uniform int uTrailCount;
uniform float uPresence;
uniform float uThreshold;
uniform float uRefract;
uniform float uSpread;
uniform float uRim;
uniform float uSpec;
uniform vec2 uBlobCenter;
uniform float uWarp;
uniform float uWarpScale;
uniform float uTime;
uniform float uAlpha;
uniform vec2 uBoundsMin;
uniform vec2 uBoundsMax;

vec2 coverScale;

void initCoverScale() {
  float vr = uViewport.x * uInvViewport.y;
  coverScale = vr > uImgRatio
    ? vec2(1.0, uImgRatio / vr)
    : vec2(vr / uImgRatio, 1.0);
}

vec2 coverFit(vec2 c) {
  return (c - 0.5) * coverScale + 0.5;
}

float capsule(vec2 p, vec2 a, vec2 b, float r) {
  vec2 pa = p - a;
  vec2 ba = b - a;
  float h = clamp(dot(pa, ba) / (dot(ba, ba) + 1e-8), 0.0, 1.0);
  float d = length(pa - ba * h);
  return (r * r) / (d * d + 1e-6);
}

float metafield(vec2 p) {
  float f = 0.0;
  float ar = uViewport.x * uInvViewport.y;
  vec2 asp = vec2(ar, 1.0);
  int n = min(uTrailCount, MAX_TRAIL);

  vec2 q = p;
  if (uWarp > 0.0) {
    float wk = uWarp * 0.0008;
    float px = p.x * uWarpScale;
    float py = p.y * uWarpScale;
    float t1 = uTime * 2.3;
    float t2 = uTime * 1.7;
    q.x += (sin(py + t1) * 0.6 + sin(py * 2.3 + px * 0.7 + t2) * 0.4) * wk;
    q.y += (cos(px + t2) * 0.6 + cos(px * 2.1 + py * 0.9 + t1) * 0.4) * wk;
  }
  q *= asp;

  for (int i = 0; i < MAX_TRAIL; i++) {
    if (i >= n) break;

    float r0 = uRadii[i];
    vec2 a = (uTrail[i] * uInvViewport) * asp;

    if (i < n - 1) {
      float r1 = uRadii[i + 1];
      vec2 b = (uTrail[i + 1] * uInvViewport) * asp;
      float rm = (r0 + r1) * 0.5;
      f += capsule(q, a, b, rm);
    } else {
      vec2 d = q - a;
      f += (r0 * r0) / (dot(d, d) + 1e-6);
    }
  }
  return f;
}

void main() {
  initCoverScale();

  vec2 st = vPos;

  if (st.x < uBoundsMin.x || st.x > uBoundsMax.x ||
      st.y < uBoundsMin.y || st.y > uBoundsMax.y) {
    gl_FragColor = vec4(texture2D(uImage, coverFit(st)).rgb, uAlpha);
    return;
  }

  float f = metafield(st);
  float nf = f / uThreshold;

  float fill = smoothstep(0.5, 1.0, nf);
  float edge = smoothstep(0.35, 0.55, nf) - smoothstep(0.7, 0.95, nf);
  float mask = smoothstep(0.0, 1.0, clamp(fill + edge * 0.5, 0.0, 1.0)) * uPresence;

  if (mask < 0.001) {
    gl_FragColor = vec4(texture2D(uImage, coverFit(st)).rgb, uAlpha);
    return;
  }

  vec2 bent = (st - uBlobCenter) * (1.0 - uRefract * fill) + uBlobCenter;

  vec2 baseFit = coverFit(bent);
  vec2 tapStep = coverScale * uSpread * uInvViewport;

  vec4 px = vec4(0.0);
  for (float i = -4.0; i <= 4.0; i++) {
    for (float j = -4.0; j <= 4.0; j++) {
      px += texture2D(uImage, baseFit + vec2(i, j) * tapStep);
    }
  }
  px *= INV_81;

  vec2 head = uTrail[0] * uInvViewport;
  vec2 dh = st - head;
  float glow = clamp((clamp(dh.y, 0.0, 0.15) + 0.06) * 2.5, 0.0, 1.0);

  vec4 lit = clamp(px + vec4(fill) * glow * uSpec + vec4(edge) * uRim, 0.0, 1.0);
  vec3 base = texture2D(uImage, coverFit(st)).rgb;

  gl_FragColor = vec4(mix(base, lit.rgb, mask), uAlpha);
}
`,
  f = ({
    src: e,
    pointerRef: t,
    trailPool: r,
    trailCountRef: n,
    presenceRef: l,
    activeRef: o,
    dampening: s,
    blobSize: m,
    trailLength: f,
    tailFade: v,
    threshold: h,
    refraction: g,
    blurSpread: b,
    borderGlow: x,
    specularGain: w,
    blobWarpAmount: S,
    blobWarpScale: y,
    opacity: C
  }) => {
    let R = (0, React.useRef)(null),
      j = (0, React.useRef)(null),
      I = (0, React.useRef)(1),
      {
        size: M
      } = (0, __mod_81712.C)(),
      T = (0, React.useRef)(new Float32Array(40));
    (0, React.useEffect)(() => {
      let t = new __mod_2253.Tap();
      t.setCrossOrigin("anonymous"), t.load(e, e => {
        e.minFilter = __mod_2253.k6q, e.magFilter = __mod_2253.k6q, e.wrapS = __mod_2253.ghU, e.wrapT = __mod_2253.ghU, j.current = e, e.image && (I.current = e.image.width / e.image.height);
      });
    }, [e]);
    let P = (0, React.useMemo)(() => ({
      uImage: {
        value: null
      },
      uViewport: {
        value: new __mod_2253.I9Y(1, 1)
      },
      uInvViewport: {
        value: new __mod_2253.I9Y(1, 1)
      },
      uImgRatio: {
        value: 1
      },
      uTrail: {
        value: r
      },
      uRadii: {
        value: new Float32Array(40)
      },
      uTrailCount: {
        value: 0
      },
      uPresence: {
        value: 0
      },
      uThreshold: {
        value: 1
      },
      uRefract: {
        value: .015
      },
      uSpread: {
        value: .5
      },
      uRim: {
        value: .3
      },
      uSpec: {
        value: 1
      },
      uBlobCenter: {
        value: new __mod_2253.I9Y(.5, .5)
      },
      uWarp: {
        value: 0
      },
      uWarpScale: {
        value: 12
      },
      uTime: {
        value: 0
      },
      uAlpha: {
        value: 1
      },
      uBoundsMin: {
        value: new __mod_2253.I9Y(0, 0)
      },
      uBoundsMax: {
        value: new __mod_2253.I9Y(1, 1)
      }
    }), [r]);
    return (0, __mod_81712.D)((e, a) => {
      if (!R.current || !j.current) return;
      let i = R.current.material,
        u = t.current;
      if (u.target[0] > -999) {
        if (o.current = !0, u.smooth[0] < -999) {
          u.smooth[0] = u.target[0], u.smooth[1] = u.target[1];
          let e = u.smooth[0],
            t = M.height - u.smooth[1];
          for (let a = 0; a < 40; a++) r[a].set(e, t);
          n.current = Math.min(f, 40);
        } else {
          let e = 1 - Math.pow(s, Math.min(60 * a, 4));
          u.smooth[0] += (u.target[0] - u.smooth[0]) * e, u.smooth[1] += (u.target[1] - u.smooth[1]) * e;
          for (let e = 39; e >= 1; e--) r[e].copy(r[e - 1]);
          r[0].set(u.smooth[0], M.height - u.smooth[1]), n.current = Math.min((n.current ?? 0) + 1, Math.min(f, 40));
        }
      } else o.current = !1;
      let c = +!!o.current,
        p = o.current ? 8 : 3;
      if (l.current += (c - l.current) * (1 - Math.exp(-p * a)), l.current < .002 && (l.current = 0), l.current > .998 && (l.current = 1), !o.current && l.current <= 0) {
        u.smooth[0] = -9999, u.smooth[1] = -9999, n.current = 0;
        for (let e = 0; e < 40; e++) r[e].set(-9999, -9999);
      }
      let d = T.current,
        P = n.current ?? 0,
        B = l.current,
        A = 1 / Math.max(P - 1, 1),
        k = 1 / M.width,
        V = 1 / M.height,
        W = 0,
        F = 0,
        N = 0,
        G = 1e9,
        L = 1e9,
        _ = -1e9,
        D = -1e9,
        q = 0;
      for (let e = 0; e < 40; e++) if (e < P) {
        let t = e * A,
          a = m * B * Math.pow(Math.max(1 - t, .001), v);
        d[e] = a;
        let i = r[e].x * k,
          n = r[e].y * V,
          l = Math.pow(Math.max(1 - t, .001), v);
        W += i * l, F += n * l, N += l, i < G && (G = i), i > _ && (_ = i), n < L && (L = n), n > D && (D = n), a > q && (q = a);
      } else d[e] = 0;
      N > 0 ? (W /= N, F /= N) : (W = .5, F = .5);
      let E = M.width * V,
        z = .06 * (S > 0),
        H = b * Math.max(k, V) * 5,
        U = 12 * q,
        X = U / E + z + H,
        Y = U + z + H,
        O = i.uniforms.uBoundsMin.value,
        $ = i.uniforms.uBoundsMax.value;
      P > 0 && B > 0 ? (O.set(Math.max(0, G - X), Math.max(0, L - Y)), $.set(Math.min(1, _ + X), Math.min(1, D + Y))) : (O.set(2, 2), $.set(-1, -1)), i.uniforms.uImage.value = j.current, i.uniforms.uViewport.value.set(M.width, M.height), i.uniforms.uInvViewport.value.set(k, V), i.uniforms.uImgRatio.value = I.current, i.uniforms.uTrail.value = r, i.uniforms.uRadii.value = d, i.uniforms.uTrailCount.value = P, i.uniforms.uPresence.value = B, i.uniforms.uThreshold.value = h, i.uniforms.uRefract.value = g, i.uniforms.uSpread.value = b, i.uniforms.uRim.value = x, i.uniforms.uSpec.value = w, i.uniforms.uBlobCenter.value.set(W, F), i.uniforms.uWarp.value = S, i.uniforms.uWarpScale.value = y, i.uniforms.uTime.value = e.clock.elapsedTime, i.uniforms.uAlpha.value = C;
    }), <mesh ref={R}><planeGeometry args={[2, 2]} /><shaderMaterial vertexShader={p} fragmentShader={d} uniforms={P} transparent={!0} /></mesh>;
  },
  v = ({
    width: e = "100%",
    height: t = "100%",
    className: r,
    children: n,
    src: l = "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80",
    dampening: o = 0,
    blobSize: u = .04,
    trailLength: p = 40,
    tailFade: d = .3,
    threshold: v = .6,
    refraction: h = .3,
    blurSpread: g = .3,
    borderGlow: b = .15,
    specularGain: x = .2,
    blobWarpAmount: w = 25,
    blobWarpScale: S = 5,
    backgroundColor: y = "#000000",
    opacity: C = 1
  }) => {
    let R = (0, React.useRef)(null),
      j = (0, React.useRef)({
        target: [-9999, -9999],
        smooth: [-9999, -9999]
      }),
      I = (0, React.useRef)(0),
      M = (0, React.useRef)(0),
      T = (0, React.useRef)(!1),
      P = (0, React.useRef)(null);
    (0, React.useEffect)(() => {
      let e = R.current;
      if (!e) return;
      let t = () => {
        P.current = e.getBoundingClientRect();
      };
      t();
      let r = new ResizeObserver(t);
      return r.observe(e), window.addEventListener("scroll", t, {
        passive: !0
      }), () => {
        r.disconnect(), window.removeEventListener("scroll", t);
      };
    }, []);
    let B = (0, React.useMemo)(() => Array.from({
        length: 40
      }, () => new __mod_2253.I9Y(-9999, -9999)), []),
      A = (0, React.useCallback)(e => {
        let t = P.current;
        t && (j.current.target = [e.clientX - t.left, e.clientY - t.top]);
      }, []),
      k = (0, React.useCallback)(() => {
        j.current.target = [-9999, -9999];
      }, []),
      V = "number" == typeof e ? `${e}px` : e,
      W = "number" == typeof t ? `${t}px` : t;
    return <div ref={R} className={(0, __mod_90650.cn)("relative overflow-hidden", r)} style={{
      width: V,
      height: W,
      background: y
    }} onPointerMove={A} onPointerLeave={k}><__mod_3907.Hl className="absolute inset-0 h-full w-full" dpr={[1, 2]} gl={{
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
      }}><FScene src={l} pointerRef={j} trailPool={B} trailCountRef={I} presenceRef={M} activeRef={T} dampening={o} blobSize={u} trailLength={p} tailFade={d} threshold={v} refraction={h} blurSpread={g} borderGlow={b} specularGain={x} blobWarpAmount={w} blobWarpScale={S} opacity={C} /></__mod_3907.Hl>{n && <div className="pointer-events-none relative z-10">{n}</div>}</div>;
  };
v.displayName = "GlassCursor";
let h = () => {
  let [e, t] = (0, __mod_90761.I)(),
    [r, u] = (0, React.useState)("https://images.unsplash.com/photo-1743773874197-d852e9cf6cfc?q=80&w=2312&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"),
    [s, c] = (0, React.useState)(0),
    [m, p] = (0, React.useState)(.04),
    [d, f] = (0, React.useState)(40),
    [h, g] = (0, React.useState)(.3),
    [b, x] = (0, React.useState)(.6),
    [w, S] = (0, React.useState)(.3),
    [y, C] = (0, React.useState)(.3),
    [R, j] = (0, React.useState)(.15),
    [I, M] = (0, React.useState)(.2),
    [T, P] = (0, React.useState)(25),
    [B, A] = (0, React.useState)(5),
    [k, V] = (0, React.useState)("#000000"),
    [W, F] = (0, React.useState)(1);
  return <div><__mod_56388.Bg /><__mod_56388.VX><__mod_56388.Ec><__mod_56388.Ch onRefresh={t} minHeight={600}><div className="w-full h-full p-4"><v className="rounded-md" src={r} dampening={s} blobSize={m} trailLength={d} tailFade={h} threshold={b} refraction={w} blurSpread={y} borderGlow={R} specularGain={I} blobWarpAmount={T} blobWarpScale={B} backgroundColor={k} opacity={W} /></div></__mod_56388.Ch><__mod_56388.IH><__mod_48543.PreviewInput title="Image URL" value={r} onChange={u} /><__mod_48543.PreviewSlider title="Dampening" value={s} onChange={c} min={0} max={.95} step={.05} /><__mod_48543.PreviewSlider title="Blob Size" value={m} onChange={p} min={.005} max={.1} step={.005} /><__mod_48543.PreviewSlider title="Trail Length" value={d} onChange={f} min={1} max={40} step={1} /><__mod_48543.PreviewSlider title="Opacity" value={W} onChange={F} min={0} max={1} step={.05} /><__mod_48543.PreviewColor title="Background Color" value={k} onChange={V} /><__mod_48543.PreviewSlider title="Tail Fade" value={h} onChange={g} min={.1} max={2} step={.1} /><__mod_48543.PreviewSlider title="Threshold" value={b} onChange={x} min={.1} max={2} step={.05} /><__mod_48543.PreviewSlider title="Refraction" value={w} onChange={S} min={0} max={1} step={.05} /><__mod_48543.PreviewSlider title="Blur Spread" value={y} onChange={C} min={0} max={3} step={.1} /><__mod_48543.PreviewSlider title="Border Glow" value={R} onChange={j} min={0} max={1} step={.05} /><__mod_48543.PreviewSlider title="Specular Gain" value={I} onChange={M} min={0} max={3} step={.1} /><__mod_48543.PreviewSlider title="Blob Warp Amount" value={T} onChange={P} min={0} max={50} step={1} /><__mod_48543.PreviewSlider title="Blob Warp Scale" value={B} onChange={A} min={1} max={30} step={1} /></__mod_56388.IH><__mod_56388.Ub data={[{
          name: "width",
          type: "string | number",
          default: '"100%"',
          description: "Container width in pixels or CSS value"
        }, {
          name: "height",
          type: "string | number",
          default: '"100%"',
          description: "Container height in pixels or CSS value"
        }, {
          name: "className",
          type: "string",
          default: "undefined",
          description: "Additional CSS classes for the container"
        }, {
          name: "children",
          type: "React.ReactNode",
          default: "undefined",
          description: "Content rendered above the effect"
        }, {
          name: "src",
          type: "string",
          default: '"https://images.unsplash.com/..."',
          description: "Image source URL to apply the glass effect on"
        }, {
          name: "dampening",
          type: "number",
          default: "0",
          description: "Cursor follow smoothness (0 = instant, 1 = very laggy)"
        }, {
          name: "blobSize",
          type: "number",
          default: "0.04",
          description: "Metaball radius in UV space"
        }, {
          name: "trailLength",
          type: "number",
          default: "40",
          description: "Number of active trail points (max 40)"
        }, {
          name: "tailFade",
          type: "number",
          default: "0.3",
          description: "Tail shrink curve (higher = faster fade)"
        }, {
          name: "threshold",
          type: "number",
          default: "0.6",
          description: "Metaball iso-surface threshold"
        }, {
          name: "refraction",
          type: "number",
          default: "0.3",
          description: "Gradient-based lens refraction strength"
        }, {
          name: "blurSpread",
          type: "number",
          default: "0.3",
          description: "Blur sample spacing"
        }, {
          name: "borderGlow",
          type: "number",
          default: "0.15",
          description: "Border rim brightness"
        }, {
          name: "specularGain",
          type: "number",
          default: "0.2",
          description: "Specular highlight intensity"
        }, {
          name: "blobWarpAmount",
          type: "number",
          default: "25",
          description: "Organic warp distortion amount on trail"
        }, {
          name: "blobWarpScale",
          type: "number",
          default: "5",
          description: "Spatial frequency of warp noise"
        }, {
          name: "backgroundColor",
          type: "string",
          default: '"#000000"',
          description: "Background color hex"
        }, {
          name: "opacity",
          type: "number",
          default: "1",
          description: "Master opacity"
        }]} /></__mod_56388.Ec><__mod_56388.lT><__mod_56388.Gv /></__mod_56388.lT></__mod_56388.VX></div>;
};

const FScene: any = f;

export default h;

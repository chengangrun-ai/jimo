import * as __mod_81712 from "../_helpers/81712";
import * as __mod_2253 from "../_helpers/2253";
import * as __mod_90650 from "../_helpers/90650";
import * as __mod_3907 from "../_helpers/3907";
import * as __mod_90761 from "../_helpers/90761";
import * as __mod_86049 from "../_helpers/86049";
import * as __mod_56388 from "../_helpers/56388";
/**
 * Satin Ridges
 * Flowing satin folds catching soft highlights
 * slug: satin-ridges
 * category: background
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let h = ["#2A2A30", "#A1A1B5"],
  p = `
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = vec4(position.xy * 2.0, 0.0, 1.0);
}
`,
  v = `
precision highp float;

#define MAX_RIPPLES 4

varying vec2 vUv;

uniform vec2 uResolution;
uniform float uTime;
uniform vec3 uShadow;
uniform vec3 uBody;
uniform vec3 uSheen;
uniform vec2 uAlong;
uniform float uScale;
uniform float uDepth;
uniform float uWarp;
uniform float uDetail;
uniform float uGloss;
uniform float uHighlight;
uniform float uSheenStrength;
uniform vec3 uLight;
uniform float uSeed;
uniform vec3 uSwell;
uniform float uSwellRadius;
uniform vec4 uRipple[MAX_RIPPLES];

vec2 hash22(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * vec3(0.1031, 0.1030, 0.0973));
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.xx + p3.yz) * p3.zy) * 2.0 - 1.0;
}

float gradientNoise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * f * (f * (f * 6.0 - 15.0) + 10.0);
  float a = dot(hash22(i), f);
  float b = dot(hash22(i + vec2(1.0, 0.0)), f - vec2(1.0, 0.0));
  float c = dot(hash22(i + vec2(0.0, 1.0)), f - vec2(0.0, 1.0));
  float d = dot(hash22(i + vec2(1.0, 1.0)), f - vec2(1.0, 1.0));
  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}

float surface(vec2 p) {
  float t = uTime;
  vec2 across = vec2(uAlong.y, -uAlong.x);
  vec2 q = vec2(dot(p, across), dot(p, uAlong)) * uScale + uSeed * vec2(3.7, 1.9);
  vec2 bend = vec2(
    gradientNoise(q * vec2(0.45, 0.28) + vec2(0.0, t * 0.05)),
    gradientNoise(q * vec2(0.45, 0.28) + vec2(5.2, -t * 0.04))
  );
  q += bend * uWarp * 1.6;
  float h = sin(q.x * 2.4 + sin(q.y * 0.7 + t * 0.21) * 1.1 + t * 0.35) * 0.6;
  h += sin(q.x * 3.9 - q.y * 0.9 + t * 0.27 + 1.7) * 0.3;
  h += sin(q.x * 6.7 + q.y * 1.6 - t * 0.43 + 4.1) * 0.12 * uDetail;
  h += gradientNoise(q * vec2(1.2, 0.6) + vec2(t * 0.06, 0.0)) * 0.35 * uDetail;
  h *= uDepth;

  vec2 m = p - uSwell.xy;
  h += uSwell.z * exp(-dot(m, m) / max(uSwellRadius * uSwellRadius, 1e-4));

  for (int k = 0; k < MAX_RIPPLES; k++) {
    vec4 ripple = uRipple[k];
    if (ripple.w <= 0.001) continue;
    float r = length(p - ripple.xy);
    float offset = r - ripple.z;
    float band = exp(-offset * offset / 0.0035);
    h += sin(offset * 42.0) * band * ripple.w * 0.12;
  }
  return h;
}

void main() {
  float aspect = uResolution.x / max(uResolution.y, 1.0);
  vec2 p = (vUv - 0.5) * vec2(aspect, 1.0);
  float e = 1.5 / max(uResolution.y, 1.0);
  float h0 = surface(p);
  float hx = surface(p + vec2(e, 0.0));
  float hy = surface(p + vec2(0.0, e));
  vec2 slope = vec2(hx - h0, hy - h0) / e;
  vec3 normal = normalize(vec3(-slope * 0.32, 1.0));

  vec3 view = vec3(0.0, 0.0, 1.0);
  vec3 halfway = normalize(uLight + view);
  float facing = max(dot(normal, uLight), 0.0);
  float spec = pow(max(dot(normal, halfway), 0.0), uGloss);
  float rim = pow(1.0 - max(dot(normal, view), 0.0), 2.2);

  float t = uTime;
  vec2 drift = p * 0.9 + vec2(t * 0.03, -t * 0.02) + uSeed * 2.3;
  float tint = smoothstep(-0.25, 0.45, gradientNoise(drift) + 0.35 * gradientNoise(drift * 2.1 + 3.3));

  float valley = smoothstep(-1.1, 0.9, h0 / max(uDepth, 0.05));
  float light = pow(facing, 1.6) * mix(0.45, 1.0, valley);
  vec3 body = mix(uBody, mix(uBody, uSheen, 0.3), tint * 0.5);
  vec3 color = mix(uShadow, body, light);
  vec3 lift = uSheen * rim * uSheenStrength * 0.6 * light;
  color = 1.0 - (1.0 - color) * (1.0 - clamp(lift, 0.0, 1.0));

  vec3 glint = mix(uSheen, vec3(1.0), 0.75);
  float shine = clamp(spec * uHighlight, 0.0, 1.0);
  color = 1.0 - (1.0 - color) * (1.0 - glint * shine);

  gl_FragColor = linearToOutputTexel(vec4(max(color, 0.0), 1.0));
  float dither = fract(52.9829189 * fract(dot(gl_FragCoord.xy, vec2(0.06711056, 0.00583715))));
  gl_FragColor.rgb += (dither - 0.5) / 255.0;
}
`,
  f = (e, t, l) => Math.min(l, Math.max(t, e)),
  m = e => e * Math.PI / 180,
  g = (e, t, l) => {
    let a = t.trim();
    try {
      e.set(/^#[0-9a-f]{8}$/i.test(a) ? a.slice(0, 7) : a);
    } catch {
      e.set(l);
    }
    return e;
  },
  x = e => {
    let t = window.matchMedia("(min-resolution: 2dppx)");
    return t.addEventListener("change", e), window.addEventListener("resize", e), () => {
      t.removeEventListener("change", e), window.removeEventListener("resize", e);
    };
  },
  y = () => window.devicePixelRatio || 1,
  w = e => {
    let t = window.matchMedia("(prefers-reduced-motion: reduce)");
    return t.addEventListener("change", e), () => t.removeEventListener("change", e);
  },
  b = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  S = ({
    settings: e,
    pointerRef: t,
    wakeRef: l
  }) => {
    let {
        size: n,
        invalidate: r
      } = (0, __mod_81712.C)(),
      s = (0, React.useRef)(null),
      u = (0, React.useRef)({
        time: 6,
        x: 0,
        y: 0,
        vx: 0,
        vy: 0,
        lift: 0,
        seeded: !1,
        presses: 0,
        ripples: Array.from({
          length: 4
        }, () => ({
          x: 0,
          y: 0,
          age: 99
        })),
        next: 0
      }),
      c = (0, React.useMemo)(() => ({
        uResolution: {
          value: new __mod_2253.I9Y(1, 1)
        },
        uTime: {
          value: 0
        },
        uShadow: {
          value: new __mod_2253.Q1f()
        },
        uBody: {
          value: new __mod_2253.Q1f()
        },
        uSheen: {
          value: new __mod_2253.Q1f()
        },
        uAlong: {
          value: new __mod_2253.I9Y(0, 1)
        },
        uScale: {
          value: 2.4
        },
        uDepth: {
          value: 1
        },
        uWarp: {
          value: 1
        },
        uDetail: {
          value: 1
        },
        uGloss: {
          value: 90
        },
        uHighlight: {
          value: 1
        },
        uSheenStrength: {
          value: .5
        },
        uLight: {
          value: new __mod_2253.Pq0(0, .5, .86)
        },
        uSeed: {
          value: 0
        },
        uSwell: {
          value: new __mod_2253.Pq0(0, 0, 0)
        },
        uSwellRadius: {
          value: .22
        },
        uRipple: {
          value: Array.from({
            length: 4
          }, () => new __mod_2253.IUQ())
        }
      }), []),
      [x, y] = e.colors,
      {
        backgroundColor: w
      } = e;
    return (0, React.useEffect)(() => (l.current = r, () => {
      l.current = null;
    }), [r, l]), (0, React.useEffect)(() => {
      let e = s.current;
      if (!e) return;
      let t = e.uniforms;
      g(t.uBody.value, x ?? h[0], h[0]), g(t.uSheen.value, y ?? x ?? h[1], h[1]), g(t.uShadow.value, w, "#0a0a0a"), r();
    }, [x, y, w, r]), (0, React.useEffect)(() => {
      r();
    }, [e, n, r]), (0, __mod_81712.D)((l, a) => {
      let i = s.current;
      if (!i) return;
      let o = i.uniforms,
        d = u.current,
        c = t.current,
        h = Math.min(Math.max(a, 0), .05),
        p = !e.paused && !e.reduced && e.speed > 0;
      p && (d.time += h * f(e.speed, 0, 4) * f(e.flow, 0, 4));
      let v = n.width / Math.max(n.height, 1),
        g = e.interactive && !e.reduced && c.inside,
        x = (c.x - .5) * v,
        y = c.y - .5;
      g && !d.seeded && (d.x = x, d.y = y, d.seeded = !0);
      let w = 2 * Math.sqrt(38) * .9;
      d.vx += ((x - d.x) * 38 - d.vx * w) * h, d.vy += ((y - d.y) * 38 - d.vy * w) * h, d.x += d.vx * h, d.y += d.vy * h;
      let b = +!!g;
      if (d.lift += (b - d.lift) * (1 - Math.exp(-h * (b > d.lift ? 3.2 : 1.8))), !g && d.lift < .002 && (d.seeded = !1), c.presses !== d.presses) {
        let t = Math.min(c.presses - d.presses, 4);
        if (d.presses = c.presses, e.clickRipples && !e.reduced) for (let e = 0; e < t; e++) {
          let e = d.ripples[d.next];
          e.x = (c.pressX - .5) * v, e.y = c.pressY - .5, e.age = 0, d.next = (d.next + 1) % 4;
        }
      }
      let S = !1;
      for (let e = 0; e < 4; e++) {
        let t = d.ripples[e];
        t.age < 4 && (t.age += h);
        let l = t.age < 4 ? Math.exp(-(1.1 * t.age)) : 0;
        l > .002 && (S = !0), o.uRipple.value[e].set(t.x, t.y, .45 * t.age, l);
      }
      let C = m(e.angle);
      o.uAlong.value.set(Math.sin(C), Math.cos(C));
      let E = m(e.lightAngle);
      o.uLight.value.set(.62 * Math.sin(E), .62 * Math.cos(E), .78).normalize(), o.uResolution.value.set(n.width * l.viewport.dpr, n.height * l.viewport.dpr), o.uTime.value = d.time, o.uScale.value = 2.4 * f(e.scale, .2, 5), o.uDepth.value = f(e.depth, 0, 3), o.uWarp.value = f(e.warp, 0, 3), o.uDetail.value = f(e.detail, 0, 2), o.uGloss.value = 10 + 250 * f(e.gloss, 0, 1), o.uHighlight.value = f(e.highlight, 0, 3), o.uSheenStrength.value = f(e.sheen, 0, 2), o.uSeed.value = e.seed, o.uSwell.value.set(d.x, d.y, d.lift * f(e.swell, 0, 3) * .45), o.uSwellRadius.value = f(e.swellRadius, .03, 1);
      let j = S || d.lift > .002 && d.lift < .998 || Math.abs(d.vx) + Math.abs(d.vy) > 5e-4;
      !p && (j || g) && r();
    }), <mesh frustumCulled={!1}><planeGeometry args={[1, 1]} /><shaderMaterial ref={s} vertexShader={p} fragmentShader={v} uniforms={c} depthTest={!1} depthWrite={!1} /></mesh>;
  },
  C = ({
    colors: e = h,
    backgroundColor: t = "#050505",
    angle: l = -20,
    scale: n = 1,
    depth: r = 1,
    warp: s = 1,
    detail: o = 1,
    gloss: d = .4,
    highlight: p = 1,
    sheen: v = .5,
    lightAngle: f = 10,
    flow: m = 1,
    speed: g = 1,
    interactive: C = !0,
    swell: E = 1,
    swellRadius: j = .22,
    clickRipples: R = !0,
    seed: k = 0,
    paused: A = !1,
    dpr: M = 1.5,
    className: B,
    style: L,
    children: P
  }) => {
    let D = (0, React.useRef)(null),
      N = (0, React.useRef)({
        x: .5,
        y: .5,
        inside: !1,
        presses: 0,
        pressX: .5,
        pressY: .5
      }),
      I = (0, React.useRef)(null),
      [T, F] = (0, React.useState)(!0),
      H = (0, React.useSyncExternalStore)(w, b, () => !1),
      q = Math.min((0, React.useSyncExternalStore)(x, y, () => 1), Math.max(M, .5)),
      z = !A && !H && g > 0;
    return (0, React.useEffect)(() => {
      let e = D.current;
      if (!e || "undefined" == typeof IntersectionObserver) return;
      let t = new IntersectionObserver(([e]) => F(e.isIntersecting), {
        rootMargin: "80px"
      });
      return t.observe(e), () => t.disconnect();
    }, []), (0, React.useEffect)(() => {
      let e = D.current;
      if (!e) return;
      let t = t => {
          let l = e.getBoundingClientRect(),
            a = N.current;
          a.x = (t.clientX - l.left) / Math.max(l.width, 1), a.y = 1 - (t.clientY - l.top) / Math.max(l.height, 1), a.inside = !0;
        },
        l = e => {
          t(e), I.current?.();
        },
        a = e => {
          t(e);
          let l = N.current;
          l.pressX = l.x, l.pressY = l.y, l.presses += 1, I.current?.();
        },
        i = e => {
          ("pointerup" !== e.type || "mouse" !== e.pointerType) && (N.current.inside = !1, I.current?.());
        };
      return e.addEventListener("pointermove", l, {
        passive: !0
      }), e.addEventListener("pointerdown", a, {
        passive: !0
      }), e.addEventListener("pointerleave", i, {
        passive: !0
      }), e.addEventListener("pointercancel", i, {
        passive: !0
      }), e.addEventListener("pointerup", i, {
        passive: !0
      }), () => {
        e.removeEventListener("pointermove", l), e.removeEventListener("pointerdown", a), e.removeEventListener("pointerleave", i), e.removeEventListener("pointercancel", i), e.removeEventListener("pointerup", i);
      };
    }, []), <div ref={D} className={(0, __mod_90650.cn)("relative isolate overflow-hidden", B)} style={{
      backgroundColor: t,
      ...L
    }}><div className="absolute inset-0" aria-hidden="true"><__mod_3907.Hl orthographic={!0} dpr={q} frameloop={T && z ? "always" : "demand"} gl={{
          antialias: !1,
          alpha: !1,
          powerPreference: "high-performance"
        }} style={{
          pointerEvents: "none"
        }}><S settings={{
            colors: e,
            backgroundColor: t,
            angle: l,
            scale: n,
            depth: r,
            warp: s,
            detail: o,
            gloss: d,
            highlight: p,
            sheen: v,
            lightAngle: f,
            flow: m,
            speed: g,
            interactive: C,
            swell: E,
            swellRadius: j,
            clickRipples: R,
            seed: k,
            paused: A,
            reduced: H
          }} pointerRef={N} wakeRef={I} /></__mod_3907.Hl></div>{P ? <div className="relative z-10 h-full w-full">{P}</div> : null}</div>;
  },
  E = {
    onyx: {
      colors: ["#2A2A30", "#A1A1B5"],
      background: "#050505",
      scale: 1,
      detail: 1
    },
    violet: {
      colors: ["#3A1DB8", "#B19EEF"],
      background: "#0a0a0a",
      scale: 1,
      detail: 1
    },
    indigo: {
      colors: ["#1E2BB8", "#8A6BFF"],
      background: "#02031A",
      scale: 1.4,
      detail: 1.3
    },
    rose: {
      colors: ["#9B2459", "#FFB3D1"],
      background: "#12040A",
      scale: 1,
      detail: 1
    },
    emerald: {
      colors: ["#0B6E53", "#7CF2C8"],
      background: "#010B08",
      scale: 1,
      detail: 1
    },
    pearl: {
      colors: ["#E6E0F5", "#B19EEF"],
      background: "#B8ABE0",
      scale: 1,
      detail: 1
    },
    champagne: {
      colors: ["#F1E6D4", "#D9B98C"],
      background: "#C4AC86",
      scale: 1,
      detail: 1
    }
  },
  j = [{
    label: "Onyx",
    value: "onyx"
  }, {
    label: "Violet",
    value: "violet"
  }, {
    label: "Indigo",
    value: "indigo"
  }, {
    label: "Rose",
    value: "rose"
  }, {
    label: "Emerald",
    value: "emerald"
  }, {
    label: "Pearl",
    value: "pearl"
  }, {
    label: "Champagne",
    value: "champagne"
  }],
  R = [{
    name: "colors",
    type: "[string, string]",
    default: '["#2A2A30", "#A1A1B5"]',
    description: "Two fabric colours: the body of the satin, then the sheen that tints its lit edges and highlights."
  }, {
    name: "backgroundColor",
    type: "string",
    default: '"#050505"',
    description: "Colour of the deepest folds, where the fabric falls into shadow."
  }, {
    name: "angle",
    type: "number",
    default: "-20",
    description: "Direction the folds run, in degrees. 0 gives vertical folds."
  }, {
    name: "scale",
    type: "number",
    default: "1",
    description: "Number of folds across the frame. Larger values give finer fabric."
  }, {
    name: "depth",
    type: "number",
    default: "1",
    description: "How deep the folds are. Deeper folds catch more highlights."
  }, {
    name: "warp",
    type: "number",
    default: "1",
    description: "How much the folds bend and meander."
  }, {
    name: "detail",
    type: "number",
    default: "1",
    description: "Small ripples layered over the main folds."
  }, {
    name: "gloss",
    type: "number",
    default: "0.4",
    description: "Sharpness of the highlights, 0 to 1. Higher values give crisper, thinner glints."
  }, {
    name: "highlight",
    type: "number",
    default: "1",
    description: "Brightness of the highlights."
  }, {
    name: "sheen",
    type: "number",
    default: "0.5",
    description: "Strength of the tinted sheen along the steep sides of the folds."
  }, {
    name: "lightAngle",
    type: "number",
    default: "10",
    description: "Direction the light comes from, in degrees. 0 lights the fabric from the top."
  }, {
    name: "flow",
    type: "number",
    default: "1",
    description: "How fast the folds roll and shift."
  }, {
    name: "speed",
    type: "number",
    default: "1",
    description: "Overall animation speed. 0 holds the current frame."
  }, {
    name: "interactive",
    type: "boolean",
    default: "true",
    description: "A soft swell follows the pointer beneath the fabric, and the highlights sweep around it."
  }, {
    name: "swell",
    type: "number",
    default: "1",
    description: "Height of the swell under the pointer. 0 disables it."
  }, {
    name: "swellRadius",
    type: "number",
    default: "0.22",
    description: "Width of the swell, relative to the height."
  }, {
    name: "clickRipples",
    type: "boolean",
    default: "true",
    description: "Each click sends a ripple rolling through the fabric. Rapid clicks stack."
  }, {
    name: "seed",
    type: "number",
    default: "0",
    description: "Changes the arrangement of the folds."
  }, {
    name: "paused",
    type: "boolean",
    default: "false",
    description: "Freezes the animation."
  }, {
    name: "dpr",
    type: "number",
    default: "1.5",
    description: "Upper bound for the device pixel ratio."
  }, {
    name: "className",
    type: "string",
    default: "—",
    description: "Classes for the root element. Give it a height."
  }, {
    name: "style",
    type: "CSSProperties",
    default: "—",
    description: "Inline styles for the root element."
  }, {
    name: "children",
    type: "ReactNode",
    default: "—",
    description: "Content layered above the fabric."
  }],
  k = () => {
    let [e, t] = (0, __mod_90761.I)(),
      l = (0, __mod_86049.Y)(),
      [o, u] = (0, React.useState)(null),
      d = o ?? ("dark" === l ? "onyx" : "pearl"),
      [c, h] = (0, React.useState)({}),
      p = {
        ...(E[d] ?? E.onyx),
        ...c
      },
      [v, f] = (0, React.useState)(-20),
      [m, g] = (0, React.useState)(1),
      [x, y] = (0, React.useState)(1),
      [w, b] = (0, React.useState)(.4),
      [S, k] = (0, React.useState)(1),
      [A, M] = (0, React.useState)(.5),
      [B, L] = (0, React.useState)(10),
      [P, D] = (0, React.useState)(1),
      [N, I] = (0, React.useState)(1),
      [T, F] = (0, React.useState)(1),
      [H, q] = (0, React.useState)(.22),
      [z, U] = (0, React.useState)(0),
      [W, _] = (0, React.useState)(!0),
      [G, X] = (0, React.useState)(!0),
      [Y, O] = (0, React.useState)(!1),
      Q = e => t => h(l => ({
        ...l,
        [e]: t
      })),
      V = e => t => h(l => {
        let a = [...(l.colors ?? p.colors)];
        return a[e] = t, {
          ...l,
          colors: a
        };
      });
    return <div><__mod_56388.Bg /><__mod_56388.VX><__mod_56388.Ec><__mod_56388.Ch onRefresh={t} minHeight={600}><div className="relative h-full w-full"><C className="h-full w-full" colors={p.colors} backgroundColor={p.background} angle={v} scale={p.scale} depth={m} warp={x} detail={p.detail} gloss={w} highlight={S} sheen={A} lightAngle={B} flow={P} speed={N} interactive={W} swell={T} swellRadius={H} clickRipples={G} seed={z} paused={Y} /></div></__mod_56388.Ch><__mod_56388.IH><__mod_56388.bg title="Preset" value={d} options={j} onChange={e => {
              u(e), h({});
            }} /><__mod_56388.W7 title="Shadow" value={p.background} onChange={Q("background")} /><__mod_56388.W7 title="Body" value={p.colors[0]} onChange={V(0)} /><__mod_56388.W7 title="Sheen" value={p.colors[1]} onChange={V(1)} /><__mod_56388.yt title="Angle" min={-90} max={90} step={1} value={v} valueUnit="\xb0" onChange={f} /><__mod_56388.yt title="Scale" min={.4} max={3} step={.05} value={p.scale} onChange={Q("scale")} /><__mod_56388.yt title="Depth" min={0} max={2.5} step={.05} value={m} onChange={g} /><__mod_56388.yt title="Warp" min={0} max={2.5} step={.05} value={x} onChange={y} /><__mod_56388.yt title="Detail" min={0} max={2} step={.05} value={p.detail} onChange={Q("detail")} /><__mod_56388.yt title="Gloss" min={0} max={1} step={.01} value={w} onChange={b} /><__mod_56388.yt title="Highlight" min={0} max={2} step={.05} value={S} onChange={k} /><__mod_56388.yt title="Sheen" min={0} max={1.5} step={.05} value={A} onChange={M} /><__mod_56388.yt title="Light Angle" min={-180} max={180} step={1} value={B} valueUnit="\xb0" onChange={L} /><__mod_56388.yt title="Flow" min={0} max={3} step={.05} value={P} onChange={D} /><__mod_56388.yt title="Speed" min={0} max={3} step={.05} value={N} onChange={I} /><__mod_56388.yt title="Swell" min={0} max={2.5} step={.05} value={T} onChange={F} /><__mod_56388.yt title="Swell Radius" min={.05} max={.6} step={.01} value={H} onChange={q} /><__mod_56388.yt title="Seed" min={0} max={20} step={1} value={z} onChange={U} /><__mod_56388.tl title="Interactive" checked={W} onChange={_} /><__mod_56388.tl title="Click Ripples" checked={G} onChange={X} /><__mod_56388.tl title="Paused" checked={Y} onChange={O} /></__mod_56388.IH><__mod_56388.Ub data={R} /></__mod_56388.Ec><__mod_56388.lT><__mod_56388.Gv /></__mod_56388.lT></__mod_56388.VX></div>;
  };

export default k;

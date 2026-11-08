import * as React from "react";
import * as __mod_50969 from "../_helpers/50969";
import * as __mod_12246 from "../_helpers/12246";
import * as __mod_2253 from "../_helpers/2253";
/**
 * Features 16
 * Three cards with one current of light flowing through them, tinted per card
 * slug: features-16
 * category: Features
 * export: Features16
 * deps: motion, three
 * original: ts-tailwind/blocks/features/features-16.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import { motion, AnimatePresence } from "motion/react";

let s = [{
    title: "Capture",
    value: "11.4 kWh",
    detail: "Panels follow the strongest hours of sun and send every watt down the line.",
    glow: "#ffb21f",
    ink: "#c27500",
    accent: "text-[#b86f00] dark:text-[#ffbe45]"
  }, {
    title: "Store",
    value: "13.5 kWh",
    detail: "The battery banks whatever you don't use and holds it for the evening.",
    glow: "#3ee08f",
    ink: "#0b9454",
    accent: "text-[#0b8a4e] dark:text-[#5eeba6]"
  }, {
    title: "Power",
    value: "94%",
    detail: "Your home draws from the battery first and from the grid only when it must.",
    glow: "#4aa8ff",
    ink: "#1d6ad3",
    accent: "text-[#1d63c4] dark:text-[#6fb9ff]"
  }],
  c = (e, t, a) => Math.min(a, Math.max(t, e)),
  f = e => e <= .04045 ? e / 12.92 : Math.pow((e + .055) / 1.055, 2.4),
  d = (() => {
    let e = Array.from({
        length: 256
      }, (e, t) => t),
      t = 1337;
    for (let a = 255; a > 0; a--) {
      let r = (t = 16807 * t % 0x7fffffff) % (a + 1),
        l = e[a];
      e[a] = e[r], e[r] = l;
    }
    let a = new Uint8Array(512);
    for (let t = 0; t < 512; t++) a[t] = e[255 & t];
    return a;
  })(),
  m = e => e * e * e * (e * (6 * e - 15) + 10),
  v = (e, t, a, r) => {
    let l = 15 & e,
      n = l < 8 ? t : a,
      o = l < 4 ? a : 12 === l || 14 === l ? t : r;
    return ((1 & l) == 0 ? n : -n) + ((2 & l) == 0 ? o : -o);
  },
  h = (e, t, a) => {
    let r = Math.floor(e),
      l = Math.floor(t),
      n = Math.floor(a),
      o = 255 & r,
      i = 255 & l,
      u = 255 & n,
      s = e - r,
      c = t - l,
      f = a - n,
      h = m(s),
      p = m(c),
      g = m(f),
      x = d[o] + i,
      w = d[x] + u,
      y = d[x + 1] + u,
      b = d[o + 1] + i,
      M = d[b] + u,
      F = d[b + 1] + u,
      k = (e, t, a) => t + e * (a - t);
    return k(g, k(p, k(h, v(d[w], s, c, f), v(d[M], s - 1, c, f)), k(h, v(d[y], s, c - 1, f), v(d[F], s - 1, c - 1, f))), k(p, k(h, v(d[w + 1], s, c, f - 1), v(d[M + 1], s - 1, c, f - 1)), k(h, v(d[y + 1], s, c - 1, f - 1), v(d[F + 1], s - 1, c - 1, f - 1))));
  },
  p = `
uniform sampler2D uSource;
uniform vec2 uTexel;
uniform float uThreshold;
varying vec2 vUv;
vec3 tap(vec2 d) {
  vec3 c = texture2D(uSource, vUv + d * uTexel).rgb;
  float peak = max(c.r, max(c.g, c.b));
  return c * (max(peak - uThreshold, 0.0) / max(peak, 0.0001));
}
void main() {
  vec3 a = tap(vec2(-2.0, 2.0));
  vec3 b = tap(vec2(0.0, 2.0));
  vec3 c = tap(vec2(2.0, 2.0));
  vec3 d = tap(vec2(-2.0, 0.0));
  vec3 e = tap(vec2(0.0, 0.0));
  vec3 f = tap(vec2(2.0, 0.0));
  vec3 g = tap(vec2(-2.0, -2.0));
  vec3 h = tap(vec2(0.0, -2.0));
  vec3 i = tap(vec2(2.0, -2.0));
  vec3 j = tap(vec2(-1.0, 1.0));
  vec3 k = tap(vec2(1.0, 1.0));
  vec3 l = tap(vec2(-1.0, -1.0));
  vec3 m = tap(vec2(1.0, -1.0));
  vec3 color = e * 0.125 + (a + c + g + i) * 0.03125 + (b + d + f + h) * 0.0625 + (j + k + l + m) * 0.125;
  gl_FragColor = vec4(color, 1.0);
}
`,
  g = `
uniform sampler2D uSource;
uniform vec2 uTexel;
varying vec2 vUv;
vec3 tap(vec2 d) { return texture2D(uSource, vUv + d * uTexel).rgb; }
void main() {
  vec3 color = tap(vec2(0.0)) * 4.0
    + (tap(vec2(-1.0, 0.0)) + tap(vec2(1.0, 0.0)) + tap(vec2(0.0, -1.0)) + tap(vec2(0.0, 1.0))) * 2.0
    + tap(vec2(-1.0, -1.0)) + tap(vec2(1.0, -1.0)) + tap(vec2(-1.0, 1.0)) + tap(vec2(1.0, 1.0));
  gl_FragColor = vec4(color / 16.0, 1.0);
}
`,
  x = `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`,
  w = `
uniform vec4 uRects[3];
uniform float uCorner;

float box(vec2 p, vec4 r, float radius) {
  vec2 c = (r.xy + r.zw) * 0.5;
  vec2 h = (r.zw - r.xy) * 0.5;
  vec2 q = abs(p - c) - h + radius;
  return length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - radius;
}
`,
  y = `
uniform sampler2D uEnergy;
uniform sampler2D uFlow;
uniform vec2 uGrid;
uniform vec2 uOrigin;
uniform float uPitch;
uniform float uMaxRadius;
uniform float uBaseRadius;
uniform float uBase;
uniform float uGain;
uniform float uStretch;
uniform float uVariance;
uniform float uInk;
uniform float uFade;
uniform vec3 uTints[3];
uniform float uFocus[3];
uniform vec3 uBaseColor;
varying vec2 vUv;
${w}

void main() {
  vec2 frag = gl_FragCoord.xy;
  float inside = 0.0;
  vec3 tint = vec3(0.0);
  float focus = 0.0;
  for (int i = 0; i < 3; i++) {
    float m = 1.0 - smoothstep(-1.5, 0.5, box(frag, uRects[i], uCorner));
    inside += m;
    tint += uTints[i] * m;
    focus += uFocus[i] * m;
  }
  if (inside <= 0.001) {
    gl_FragColor = vec4(0.0);
    return;
  }
  tint /= inside;
  focus /= inside;
  inside = min(inside, 1.0);
  vec2 rel = frag - uOrigin;
  vec2 cell = floor(rel / uPitch);
  if (cell.x < 0.0 || cell.y < 0.0 || cell.x >= uGrid.x || cell.y >= uGrid.y) {
    gl_FragColor = vec4(0.0);
    return;
  }
  vec2 local = rel - (cell + 0.5) * uPitch;
  vec2 uv = (cell + 0.5) / uGrid;
  vec4 energy = texture2D(uEnergy, uv);
  vec2 flow = texture2D(uFlow, uv).rg;
  float amount = max(energy.a, 0.0);
  float lit = (1.0 - exp(-amount * uGain * (1.0 + focus * 0.8))) * uFade;
  float shade = clamp(energy.r / max(amount, 0.0001), 0.0, 1.0);
  float speed = length(flow) / max(amount, 0.0001);
  vec2 along = speed > 0.00001 ? flow / (speed * max(amount, 0.0001)) : vec2(1.0, 0.0);
  vec2 across = vec2(-along.y, along.x);
  float stretch = 1.0 + uStretch * clamp(speed * 6.0, 0.0, 1.6) * smoothstep(0.02, 0.3, lit);
  float halftone = mix(uBaseRadius, uMaxRadius, sqrt(lit));
  float panel = uMaxRadius * (0.72 + 0.28 * smoothstep(0.0, 0.45, lit));
  float radius = mix(panel, halftone, uVariance);
  vec2 q = vec2(dot(local, along) / stretch, dot(local, across));
  float d = length(q) - radius;
  float cover = 1.0 - smoothstep(-0.65, 0.65, d);
  float baseCover = (1.0 - smoothstep(-0.6, 0.6, length(local) - uBaseRadius)) * uBase * (1.0 - lit);
  if (uInk > 0.5) {
    float a = clamp(cover * lit * 2.3, 0.0, 1.0);
    vec3 ink = tint * mix(0.82, 1.08, shade);
    float baseA = baseCover * (1.0 - a);
    gl_FragColor = vec4((ink * a + uBaseColor * baseA) * inside, (a + baseA) * inside);
    return;
  }
  vec3 emission = tint * lit * cover * 1.6 * mix(0.7, 1.1, shade) + vec3(1.0) * max(lit - 0.82, 0.0) * cover * 0.8;
  gl_FragColor = vec4((emission + uBaseColor * baseCover) * inside, inside);
}
`,
  b = `
uniform sampler2D uScene;
uniform sampler2D uBloom;
uniform float uBloomStrength;
uniform float uInk;
uniform float uGrain;
uniform float uTime;
varying vec2 vUv;
${w}

vec3 neutral(vec3 color) {
  const float start = 0.76;
  const float desaturation = 0.15;
  float x = min(color.r, min(color.g, color.b));
  float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
  color -= offset;
  float peak = max(color.r, max(color.g, color.b));
  if (peak < start) return color;
  const float d = 1.0 - start;
  float next = 1.0 - d * d / (peak + d - start);
  color *= next / peak;
  float g = 1.0 - 1.0 / (desaturation * (peak - next) + 1.0);
  return mix(color, vec3(next), g);
}

float hash(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * 0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}

void main() {
  float inside = 0.0;
  for (int i = 0; i < 3; i++) inside += 1.0 - smoothstep(-1.5, 0.5, box(gl_FragCoord.xy, uRects[i], uCorner));
  inside = min(inside, 1.0);
  if (inside <= 0.001) {
    gl_FragColor = vec4(0.0);
    return;
  }
  vec4 scene = texture2D(uScene, vUv);
  if (uInk > 0.5) {
    gl_FragColor = scene * inside;
    return;
  }
  vec3 emission = scene.rgb + texture2D(uBloom, vUv).rgb * uBloomStrength;
  vec3 light = pow(neutral(max(emission, 0.0)), vec3(1.0 / 2.2));
  float peak = max(light.r, max(light.g, light.b));
  float n = hash(gl_FragCoord.xy + fract(uTime * 13.0) * 911.0) - 0.5;
  light = clamp(light + n * uGrain * 0.1 * smoothstep(0.0, 0.04, peak), 0.0, 1.0);
  peak = max(light.r, max(light.g, light.b));
  gl_FragColor = vec4(light * inside, peak * inside);
}
`,
  M = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: .08,
        delayChildren: .05
      }
    }
  },
  F = {
    hidden: {
      opacity: 0,
      y: 14,
      filter: "blur(6px)"
    },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: .8,
        ease: [.16, 1, .3, 1]
      }
    }
  };
function Features16() {
  let e = (0, __mod_50969.I)(),
    t = (0, React.useRef)(null),
    a = (0, React.useRef)([]),
    d = (0, React.useRef)(null),
    m = (0, React.useRef)(null);
  (0, React.useEffect)(() => {
    let e = t.current,
      r = a.current.filter(e => null !== e);
    if (!e || r.length !== s.length) return;
    let l = function (e, t) {
      let a,
        r = e.ownerDocument,
        l = r.defaultView ?? window,
        n = r.createElement("canvas");
      n.setAttribute("aria-hidden", "true"), n.style.cssText = "position:absolute;left:0;top:0;z-index:1;display:block;pointer-events:none";
      try {
        a = new __mod_12246.WebGLRenderer({
          canvas: n,
          alpha: !0,
          premultipliedAlpha: !0,
          antialias: !1,
          powerPreference: "high-performance"
        });
      } catch {
        return null;
      }
      e.appendChild(n), a.autoClear = !1, a.setClearColor(0, 0);
      let o = l.matchMedia("(prefers-reduced-motion: reduce)"),
        d = o.matches,
        m = new __mod_2253.qUd(-1, 1, 1, -1, -1, 1),
        v = new __mod_2253.bdM(2, 2),
        w = new __mod_2253.Z58(),
        M = new __mod_2253.eaF(v);
      M.frustumCulled = !1, w.add(M);
      let F = 1,
        k = 1,
        C = new Float32Array(4),
        R = new Float32Array(2),
        S = new __mod_2253.GYF(C, 1, 1, __mod_2253.GWd, __mod_2253.RQf),
        A = new __mod_2253.GYF(R, 1, 1, __mod_2253.paN, __mod_2253.RQf),
        T = Array.from({
          length: 3
        }, () => new __mod_2253.IUQ(-10, -10, -9, -9)),
        E = Array.from({
          length: 3
        }, () => new __mod_2253.Pq0()),
        B = [0, 0, 0],
        P = [0, 0, 0],
        I = new __mod_2253.Pq0(),
        G = {
          value: 20
        },
        N = new __mod_2253.BKk({
          uniforms: {
            uEnergy: {
              value: S
            },
            uFlow: {
              value: A
            },
            uGrid: {
              value: new __mod_2253.I9Y(1, 1)
            },
            uOrigin: {
              value: new __mod_2253.I9Y(0, 0)
            },
            uPitch: {
              value: 7
            },
            uMaxRadius: {
              value: 3
            },
            uBaseRadius: {
              value: 1
            },
            uBase: {
              value: .22
            },
            uGain: {
              value: .7
            },
            uStretch: {
              value: .25
            },
            uVariance: {
              value: .35
            },
            uInk: {
              value: 0
            },
            uFade: {
              value: 0
            },
            uTints: {
              value: E
            },
            uFocus: {
              value: B
            },
            uBaseColor: {
              value: I
            },
            uRects: {
              value: T
            },
            uCorner: G
          },
          vertexShader: x,
          fragmentShader: y,
          depthTest: !1,
          depthWrite: !1,
          blending: __mod_2253.XIg
        }),
        j = () => new __mod_2253.nWS(1, 1, {
          type: __mod_2253.ix0,
          format: __mod_2253.GWd,
          depthBuffer: !1,
          stencilBuffer: !1,
          minFilter: __mod_2253.k6q,
          magFilter: __mod_2253.k6q,
          generateMipmaps: !1
        }),
        U = j(),
        _ = Array.from({
          length: 5
        }, j),
        q = new __mod_2253.BKk({
          uniforms: {
            uSource: {
              value: null
            },
            uTexel: {
              value: new __mod_2253.I9Y()
            },
            uThreshold: {
              value: 0
            }
          },
          vertexShader: x,
          fragmentShader: p,
          depthTest: !1,
          depthWrite: !1
        }),
        D = new __mod_2253.BKk({
          uniforms: {
            uSource: {
              value: null
            },
            uTexel: {
              value: new __mod_2253.I9Y()
            }
          },
          vertexShader: x,
          fragmentShader: g,
          blending: __mod_2253.EZo,
          transparent: !0,
          depthTest: !1,
          depthWrite: !1
        }),
        Y = new __mod_2253.BKk({
          uniforms: {
            uScene: {
              value: U.texture
            },
            uBloom: {
              value: _[0].texture
            },
            uBloomStrength: {
              value: .32
            },
            uInk: {
              value: 0
            },
            uGrain: {
              value: .15
            },
            uTime: {
              value: 0
            },
            uRects: {
              value: T
            },
            uCorner: G
          },
          vertexShader: x,
          fragmentShader: b,
          depthTest: !1,
          depthWrite: !1,
          blending: __mod_2253.XIg
        }),
        W = new Float32Array(14e3),
        L = new Float32Array(14e3),
        $ = new Float32Array(14e3),
        z = new Float32Array(14e3),
        O = new Float32Array(14e3),
        V = new Float32Array(14e3),
        Q = new Uint8Array(14e3),
        X = 0,
        K = 64,
        Z = 16,
        H = new Float32Array(1105),
        J = new Float32Array((K + 1) * (Z + 1)),
        ee = new Float32Array(K * Z),
        et = new Float32Array(K * Z),
        ea = r.createElement("canvas").getContext("2d", {
          willReadFrequently: !0
        }),
        er = 0,
        el = 0,
        en = 1,
        eo = 1,
        ei = !1,
        eu = "",
        es = "",
        ec = !1,
        ef = 0,
        ed = 0,
        em = 0,
        ev = 0,
        eh = -1,
        ep = 0,
        eg = 0,
        ex = !1,
        ew = !1,
        ey = !1,
        eb = 7,
        eM = {
          left: 0,
          top: 0
        },
        eF = () => ((eb = 16807 * eb % 0x7fffffff) - 1) / 0x7ffffffe,
        ek = () => {
          if (!ea) return !1;
          let e = t[0],
            a = "rgba(0, 0, 0, 0)";
          for (; e;) {
            let t = l.getComputedStyle(e).backgroundColor;
            if (!/rgba?\(\s*0,\s*0,\s*0,\s*0\s*\)|transparent/.test(t)) {
              a = t;
              break;
            }
            e = e.parentElement;
          }
          ea.clearRect(0, 0, 1, 1), ea.fillStyle = "#0a0a0a", ea.fillStyle = a, ea.fillRect(0, 0, 1, 1);
          let [r, n, o] = ea.getImageData(0, 0, 1, 1).data,
            i = `${r},${n},${o}`;
          return i !== es && (es = i, ec = (.2126 * r + .7152 * n + .0722 * o) / 255 > .55, s.forEach((e, t) => {
            let a,
              r = [((a = Number.parseInt((ec ? e.ink : e.glow).slice(1), 16)) >> 16 & 255) / 255, (a >> 8 & 255) / 255, (255 & a) / 255];
            ec ? E[t].set(r[0], r[1], r[2]) : E[t].set(f(r[0]), f(r[1]), f(r[2]));
          }), ec ? I.set(.8, .8, .8) : I.set(.016, .016, .016), N.uniforms.uInk.value = +!!ec, Y.uniforms.uInk.value = +!!ec, !0);
        },
        eC = () => {
          let r = e.getBoundingClientRect(),
            o = t.map(e => e.getBoundingClientRect());
          if (o.some(e => e.width < 2 || e.height < 2)) return !1;
          let i = Math.min(...o.map(e => e.left)),
            u = Math.min(...o.map(e => e.top)),
            s = Math.max(...o.map(e => e.right)),
            c = Math.max(...o.map(e => e.bottom)),
            f = Math.round(s - i),
            d = Math.round(c - u),
            m = Math.min(l.devicePixelRatio || 1, 2);
          if (eM.left = i, eM.top = u, n.style.left = `${Math.round(i - r.left)}px`, n.style.top = `${Math.round(u - r.top)}px`, n.style.width = `${f}px`, n.style.height = `${d}px`, ei = o[1].top >= o[0].bottom - 1, o.forEach((e, t) => {
            T[t].set((e.left - i) * m, (c - e.bottom) * m, (e.right - i) * m, (c - e.top) * m);
          }), G.value = 20 * m, f === er && d === el && m === eo) return !1;
          er = f, el = d, eo = m, en = er / Math.max(el, 1), a.setPixelRatio(eo), a.setSize(er, el, !1);
          let v = Math.round(er * eo),
            h = Math.round(el * eo);
          U.setSize(v, h);
          for (let e of _) p = Math.max(1, Math.round(v / 2)), g = Math.max(1, Math.round(h / 2)), e.setSize(v, h);
          return eu = "", !0;
        },
        eR = () => {
          let e = Math.max(3, Math.round(7 * eo)),
            t = [er, el, eo, e].join("|");
          if (t === eu) return;
          eu = t;
          let a = Math.round(er * eo),
            r = Math.round(el * eo);
          for (let t of (C = new Float32Array((F = Math.ceil(a / e) + 1) * (k = Math.ceil(r / e) + 1) * 4), R = new Float32Array(F * k * 2), S.dispose(), A.dispose(), S = new __mod_2253.GYF(C, F, k, __mod_2253.GWd, __mod_2253.RQf), A = new __mod_2253.GYF(R, F, k, __mod_2253.paN, __mod_2253.RQf), [S, A])) t.minFilter = __mod_2253.hxR, t.magFilter = __mod_2253.hxR, t.needsUpdate = !0;
          let l = N.uniforms;
          l.uEnergy.value = S, l.uFlow.value = A, l.uGrid.value.set(F, k), l.uPitch.value = e, l.uOrigin.value.set((a - F * e) / 2, (r - k * e) / 2), l.uMaxRadius.value = .5 * e * .66, l.uBaseRadius.value = Math.max(.6 * eo, .5 * e * .1452), en >= 1 ? (K = 64, Z = Math.max(12, Math.round(64 / en))) : (Z = 64, K = Math.max(12, Math.round(64 * en))), H = new Float32Array((K + 1) * (Z + 1)), J = new Float32Array((K + 1) * (Z + 1)), ee = new Float32Array(K * Z), et = new Float32Array(K * Z);
        },
        eS = () => .15 * (1 + .55 * Math.max(...B)),
        eA = () => {
          let e = eS(),
            t = ei ? -Math.PI / 2 : 0,
            a = Math.cos(t),
            r = Math.sin(t),
            l = en * Math.abs(r) + Math.abs(a),
            n = 1.35 * ef * .6;
          for (let e = 0; e <= Z; e++) {
            let t = e / Z - .5;
            for (let o = 0; o <= K; o++) {
              let i = o / K * en - en / 2,
                u = i * a + t * r,
                s = -i * r + t * a,
                c = h(1.35 * u - n, 1.35 * s * 1.2, ed) + .42 * h(1.35 * u * 2.2 + 7.3 - 1.3 * n, 1.35 * s * 2.3 - 3.1, 1.6 * ed + 11.7) + .16 * h(1.35 * u * 4.6 - 2.1 - 1.7 * n, 1.35 * s * 4.4 + 5.7, 2.3 * ed + 3.3),
                f = (s + .18 * c) / l,
                d = e * (K + 1) + o;
              H[d] = f, J[d] = f + .5;
            }
          }
          let o = e * l,
            i = en / K,
            u = 1 / Z,
            s = 3 * e + 1e-4;
          for (let e = 0; e < Z; e++) for (let t = 0; t < K; t++) {
            let a = e * (K + 1) + t,
              r = H[a],
              l = H[a + 1],
              n = H[a + K + 1],
              c = H[a + K + 2],
              f = (n - r + c - l) / (2 * u),
              d = (l - r + c - n) / (2 * i),
              m = .62 + .76 * (.5 + .5 * Math.sin(((r + l + n + c) / 4 + .5) * Math.PI * 6 + .9)),
              v = f * o * m,
              h = -d * o * m,
              p = Math.hypot(v, h);
            p > s && (v *= s / p, h *= s / p), ee[e * K + t] = v, et[e * K + t] = h;
          }
        },
        eT = (e, t, a) => {
          let r = c(t / en * K - .5, 0, K - 1.001),
            l = c(a * Z - .5, 0, Z - 1.001),
            n = Math.floor(r),
            o = Math.floor(l),
            i = r - n,
            u = l - o,
            s = e[o * K + n],
            f = e[o * K + n + 1],
            d = e[(o + 1) * K + n];
          return s + (f - s) * i + (d - s) * u + (s - f - d + e[(o + 1) * K + n + 1]) * i * u;
        },
        eE = e => {
          let t = 43758.5453123 * Math.sin(127.1 * e + 311.7);
          return t - Math.floor(t);
        },
        eB = (e, t) => {
          let a,
            r,
            l,
            n,
            o,
            i,
            u,
            s,
            f,
            d,
            m = (a = c(e / en * K, 0, K - .001), r = c(t * Z, 0, Z - .001), l = Math.floor(a), n = Math.floor(r), o = a - l, i = r - n, s = J[n * (u = K + 1) + l], f = J[n * u + l + 1], s + (f - s) * o + ((d = J[(n + 1) * u + l]) - s) * i + (s - f - d + J[(n + 1) * u + l + 1]) * o * i),
            v = 0;
          for (let e = 0; e < 3; e++) {
            let t = (e + .5 + (eE(3.7 * e + 1.3) - .5) * .35) / 3,
              a = .043333333333333335 * (.55 + .9 * eE(5.1 * e + 2.9)),
              r = m - t,
              l = Math.exp(-(r * r) / (2 * a * a)) * (.55 + .45 * eE(2.3 * e + .7));
            l > v && (v = l);
          }
          return v;
        },
        eP = (e, t) => {
          let a = 0,
            r = 0,
            l = 0;
          for (let e = 0; e < 10 && (l = eB(a = -.18 + eF() * (en + .36), r = -.18 + eF() * (1 + .36)), !(eF() < l)); e++);
          W[e] = a, L[e] = r, z[e] = 2.8 + 3.6 * eF(), $[e] = t ? eF() * z[e] : 0;
          let n = eF();
          O[e] = l * (.22 + .78 * n * n * n) * 1.6, V[e] = eF(), Q[e] = 0;
        },
        eI = () => Math.round(c(F * k / 6e3 * 3400 * Math.sqrt(3 / 4), 600, 12800)),
        eG = e => {
          X = eI();
          for (let t = 0; t < X; t++) eP(t, e);
        },
        eN = e => {
          ef += e * eS(), ed += .6 * e * .075, eA();
          let t = 0,
            a = eI();
          for (let r = 0; r < X; r++) {
            $[r] += e, W[r] += eT(ee, W[r], L[r]) * e, L[r] += eT(et, W[r], L[r]) * e;
            let l = W[r] < -.25 || W[r] > en + .25 || L[r] < -.25 || L[r] > 1.25;
            if ($[r] >= z[r] || l) {
              if (Q[r] || t >= a) continue;
              eP(r, !1);
            }
            t !== r && (W[t] = W[r], L[t] = L[r], $[t] = $[r], z[t] = z[r], O[t] = O[r], V[t] = V[r], Q[t] = Q[r]), t++;
          }
          for (X = t; X < a;) eP(X++, !1);
          (e => {
            let t = Math.exp(-e / .62);
            for (let e = 0; e < C.length; e++) C[e] *= t;
            for (let e = 0; e < R.length; e++) R[e] *= t;
            let a = Math.round(er * eo),
              r = Math.round(el * eo),
              l = N.uniforms.uPitch.value,
              n = (a - F * l) / 2,
              o = (r - k * l) / 2,
              i = 60 * e;
            for (let e = 0; e < X; e++) {
              let t = $[e],
                u = Math.min(1, t / .5) * Math.min(1, (z[e] - t) / .7);
              if (u <= 0) continue;
              let s = O[e] * u * i;
              if (s <= 1e-4) continue;
              let c = (W[e] / en * a - n) / l - .5,
                f = (L[e] * r - o) / l - .5,
                d = Math.floor(c),
                m = Math.floor(f);
              if (d < -1 || m < -1 || d >= F || m >= k) continue;
              let v = c - d,
                h = f - m,
                p = .55 + .45 * V[e],
                g = eT(ee, W[e], L[e]),
                x = eT(et, W[e], L[e]);
              for (let e = 0; e < 4; e++) {
                let t = d + (1 & e),
                  a = m + (e >> 1);
                if (t < 0 || a < 0 || t >= F || a >= k) continue;
                let r = (1 & e ? v : 1 - v) * (e >> 1 ? h : 1 - h) * s,
                  l = a * F + t;
                C[4 * l] += p * r, C[4 * l + 3] += r, R[2 * l] += g * r, R[2 * l + 1] += x * r;
              }
            }
            S.needsUpdate = !0, A.needsUpdate = !0;
          })(e);
        },
        ej = () => {
          if (!er) return;
          eR();
          let e = N.uniforms;
          if (e.uGain.value = .028225806451612902, e.uFade.value = ev, M.material = N, a.setRenderTarget(U), a.setClearColor(0, 0), a.clear(), a.render(w, m), !ec) {
            for (let t of (M.material = q, _)) q.uniforms.uThreshold.value = .25 * (U === U), q.uniforms.uSource.value = U.texture, q.uniforms.uTexel.value.set(1 / U.width, 1 / U.height), a.setRenderTarget(t), a.render(w, m), e = t;
            M.material = D;
            for (let e = _.length - 1; e > 0; e--) D.uniforms.uSource.value = _[e].texture, D.uniforms.uTexel.value.set(1 / _[e].width, 1 / _[e].height), a.setRenderTarget(_[e - 1]), a.render(w, m);
          }
          Y.uniforms.uTime.value = em, M.material = Y, a.setRenderTarget(null), a.setClearColor(0, 0), a.clear(), a.render(w, m);
        },
        eU = () => {
          ew || ey || !ex || ep || (ep = l.requestAnimationFrame(e_));
        };
      function e_(e) {
        if (ep = 0, ew || ey) return;
        let t = eg && e - eg < 100 ? Math.min((e - eg) / 1e3, .05) : 1 / 60;
        if (eg = e, er || eC(), !er) return;
        if (0 === X) {
          var a = d ? 3 : 1.4;
          eR(), eA(), eG(!0);
          for (let e = 0; e < a; e += 1 / 30) eN(1 / 30);
          d && (ev = 1);
        }
        for (let e = 0; e < B.length; e++) B[e] += (P[e] - B[e]) * (d ? 1 : 1 - Math.exp(-t / .3));
        if (d) ev = 1;else {
          em += t, eN(t), eh < 0 && (eh = e);
          let a = c((e - eh) / 2e3, 0, 1);
          ev = a * a * (3 - 2 * a);
        }
        ej();
        let r = B.some((e, t) => Math.abs(e - P[t]) > .002);
        !d || r ? eU() : eg = 0;
      }
      let eq = () => {
          ek() && (!ep && ex && ej(), eU());
        },
        eD = () => {
          d = o.matches, eg = 0, eU();
        },
        eY = e => {
          e.preventDefault(), ey = !0, l.cancelAnimationFrame(ep), ep = 0;
        },
        eW = () => {
          ey = !1, eu = "", eU();
        },
        eL = new ResizeObserver(() => {
          eC() && (eR(), X > 0 && eG(!0)), !ep && ex && ej(), eU();
        }),
        e$ = new IntersectionObserver(([e]) => {
          ex = e.isIntersecting, eg = 0, eU();
        }, {
          rootMargin: "120px"
        }),
        ez = new MutationObserver(eq),
        eO = l.matchMedia("(prefers-color-scheme: dark)");
      return ez.observe(r.documentElement, {
        attributes: !0,
        attributeFilter: ["class", "style", "data-theme"]
      }), eO.addEventListener("change", eq), o.addEventListener("change", eD), n.addEventListener("webglcontextlost", eY), n.addEventListener("webglcontextrestored", eW), eL.observe(e), t.forEach(e => eL.observe(e)), e$.observe(e), ek(), eC(), {
        focus: e => {
          P.forEach((t, a) => P[a] = +(a === e)), eU();
        },
        plume: (t, a) => {
          if (d || !er) return;
          let r = e.getBoundingClientRect(),
            l = r.left + Number.parseFloat(n.style.left || "0"),
            o = r.top + Number.parseFloat(n.style.top || "0");
          ((e, t) => {
            for (let a = 0; a < 110 && X < 14e3; a++) {
              let a = X++,
                r = .055 * Math.sqrt(eF()),
                l = eF() * Math.PI * 2;
              W[a] = e + Math.cos(l) * r, L[a] = t + Math.sin(l) * r, $[a] = .25 * eF(), z[a] = 3.2 + 2.8 * eF(), O[a] = .32 + .32 * eF(), V[a] = .7 + .3 * eF(), Q[a] = 1;
            }
          })((t - l) / er * en, 1 - (a - o) / el), eU();
        },
        destroy: () => {
          ew = !0, l.cancelAnimationFrame(ep), ez.disconnect(), eL.disconnect(), e$.disconnect(), eO.removeEventListener("change", eq), o.removeEventListener("change", eD), n.removeEventListener("webglcontextlost", eY), n.removeEventListener("webglcontextrestored", eW), S.dispose(), A.dispose(), U.dispose(), _.forEach(e => e.dispose()), [N, q, D, Y].forEach(e => e.dispose()), v.dispose(), a.dispose(), n.remove();
        }
      };
    }(e, r);
    return d.current = l, () => {
      l?.destroy(), d.current = null;
    };
  }, []);
  let v = e => {
      ("mouse" !== e.pointerType || 0 === e.button) && (m.current = {
        x: e.clientX,
        y: e.clientY,
        time: performance.now()
      });
    },
    w = e => {
      let t = m.current;
      m.current = null, !t || performance.now() - t.time > 500 || Math.hypot(e.clientX - t.x, e.clientY - t.y) > 10 || d.current?.plume(e.clientX, e.clientY);
    };
  return <section className="w-full bg-white px-4 py-20 text-neutral-950 dark:bg-neutral-950 dark:text-white sm:px-6 lg:px-8 lg:py-28"><div className="mx-auto w-full max-w-[1400px]"><motion.div variants={M} initial={!e && "hidden"} whileInView="show" viewport={{
        once: !0,
        amount: .4
      }} className="grid gap-5 lg:grid-cols-2 lg:items-end lg:gap-16"><motion.h2 variants={F} className="max-w-[16ch] text-balance text-[2.25rem] font-medium leading-[1.04] tracking-[-0.04em] sm:text-5xl">Every watt, from roof to plug.</motion.h2><motion.p variants={F} className="max-w-[44ch] text-pretty text-base leading-relaxed text-neutral-600 lg:justify-self-end dark:text-neutral-400">Panels, battery and home work as one system, moving power to wherever it's needed.</motion.p></motion.div><div ref={t} className="relative mt-12 grid grid-cols-1 gap-4 sm:mt-16 md:grid-cols-3">{s.map((t, l) => <motion.article initial={!e && {
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} viewport={{
          once: !0,
          amount: .3
        }} transition={{
          duration: .9,
          delay: .1 + .12 * l,
          ease: [.16, 1, .3, 1]
        }} onPointerEnter={e => {
          "mouse" === e.pointerType && d.current?.focus(l);
        }} onPointerLeave={() => d.current?.focus(null)} className="flex flex-col rounded-[28px] bg-neutral-100 p-2 dark:bg-neutral-900"><div ref={e => {
            a.current[l] = e;
          }} aria-hidden="true" onPointerDown={v} onPointerUp={w} className="aspect-[4/3] w-full rounded-[20px] bg-white dark:bg-neutral-950" /><div className="flex flex-1 flex-col px-4 pb-4 pt-5 sm:px-5"><div className="flex items-baseline justify-between gap-4"><h3 className="text-lg font-medium tracking-[-0.01em]">{t.title}</h3><span className={`text-lg font-medium tabular-nums ${t.accent}`}>{t.value}</span></div><p className="mt-2 text-pretty text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">{t.detail}</p></div></motion.article>)}</div></div></section>;
}

export default Features16;

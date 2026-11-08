import * as React from "react";
import * as __mod_50969 from "../_helpers/50969";
import * as __mod_12246 from "../_helpers/12246";
import * as __mod_2253 from "../_helpers/2253";
/**
 * Features 17
 * Follow-the-sun section where dawn breaks over the planet under each office
 * slug: features-17
 * category: Features
 * export: Features17
 * deps: motion, three
 * original: ts-tailwind/blocks/features/features-17.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import { motion, AnimatePresence } from "motion/react";

let c = [{
    city: "Sydney",
    time: "09:00 AEST",
    detail: "Opens the day with every overnight ticket triaged and summarised."
  }, {
    city: "London",
    time: "09:00 GMT",
    detail: "Takes the handoff with owners, notes and drafts already in place."
  }, {
    city: "New York",
    time: "09:00 EST",
    detail: "Closes the loop and leaves a clean queue for Sydney's morning."
  }],
  s = (e, t, r) => Math.min(r, Math.max(t, e)),
  f = e => {
    let t = Number.parseInt(e.slice(1), 16);
    return [(t >> 16 & 255) / 255, (t >> 8 & 255) / 255, (255 & t) / 255];
  },
  m = e => e <= .04045 ? e / 12.92 : Math.pow((e + .055) / 1.055, 2.4),
  v = e => e <= .0031308 ? 12.92 * e : 1.055 * Math.pow(e, 1 / 2.4) - .055,
  d = ([e, t, r]) => {
    let a = m(e),
      o = m(t),
      n = m(r),
      u = Math.cbrt(.4122214708 * a + .5363325363 * o + .0514459929 * n),
      l = Math.cbrt(.2119034982 * a + .6806995451 * o + .1073969566 * n),
      i = Math.cbrt(.0883024619 * a + .2817188376 * o + .6299787005 * n);
    return [.2104542553 * u + .793617785 * l - .0040720468 * i, 1.9779984951 * u - 2.428592205 * l + .4505937099 * i, .0259040371 * u + .7827717662 * l - .808675766 * i];
  },
  h = ([e, t, r]) => {
    let a = Math.pow(e + .3963377774 * t + .2158037573 * r, 3),
      o = Math.pow(e - .1055613458 * t - .0638541728 * r, 3),
      n = Math.pow(e - .0894841775 * t - 1.291485548 * r, 3);
    return [s(v(4.0767416621 * a - 3.3077115913 * o + .2309699292 * n), 0, 1), s(v(-1.2684380046 * a + 2.6097574011 * o - .3413193965 * n), 0, 1), s(v(-.0041960863 * a - .7034186147 * o + 1.707614701 * n), 0, 1)];
  },
  p = (e, t, r) => [e[0] + (t[0] - e[0]) * r, e[1] + (t[1] - e[1]) * r, e[2] + (t[2] - e[2]) * r],
  x = `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`,
  g = `
uniform vec2 uRes;
uniform float uTime;
uniform float uRoll;
uniform float uApex;
uniform float uRadius;
uniform float uSunArc;
uniform float uSpread;
uniform float uSunUp;
uniform float uAtmo;
uniform float uThick;
uniform float uRimGain;
uniform float uFlare;
uniform float uAirglow;
uniform float uClouds;
uniform float uStars;
uniform float uInk;
uniform vec3 uRimColor;
uniform vec3 uInner;
uniform vec3 uMid;
uniform vec3 uOuter;
uniform vec3 uGlowColor;
uniform vec3 uSunColor;
uniform vec3 uStarColor;
varying vec2 vUv;

float hash(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * 0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x), mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x), f.y);
}

float fbm(vec2 p) {
  float v = 0.0;
  float a = 0.5;
  for (int i = 0; i < 4; i++) {
    v += a * noise(p);
    p = p * 2.03 + vec2(1.7, 9.2);
    a *= 0.5;
  }
  return v;
}

vec3 starField(vec2 p) {
  vec3 c = vec3(0.0);
  for (int k = 0; k < 2; k++) {
    float scale = k == 0 ? 70.0 : 130.0;
    vec2 g = p * scale + float(k) * 17.3;
    vec2 id = floor(g);
    vec2 f = fract(g) - 0.5;
    float h = hash(id);
    vec2 offset = vec2(hash(id + 3.1), hash(id + 7.7)) - 0.5;
    float twinkle = 0.6 + 0.4 * sin(uTime * (1.0 + 3.0 * hash(id + 1.3)) + h * 50.0);
    float b = pow(h, 30.0) * twinkle;
    float d = length(f - offset * 0.7);
    c += uStarColor * b * exp(-d * d * 300.0) * (k == 0 ? 0.9 : 0.45);
  }
  return c;
}

void main() {
  vec2 frag = vUv * uRes;
  vec2 screen = (frag - 0.5 * uRes) / uRes.y;
  float cr = cos(uRoll);
  float sr = sin(uRoll);
  vec2 p = mat2(cr, -sr, sr, cr) * screen;
  float px = 1.0 / uRes.y;
  vec2 center = vec2(0.0, uApex - uRadius);
  vec2 q = p - center;
  float h = length(q) - uRadius;
  float arc = atan(q.x, q.y) * uRadius;
  float d = arc - uSunArc;
  float lit = exp(-d * d / (2.0 * uSpread * uSpread));
  float wide = exp(-d * d / (10.0 * uSpread * uSpread));
  float hot = exp(-d * d / (2.0 * 0.034 * 0.034));
  float halo = exp(-d * d / (2.0 * 0.17 * 0.17));
  float thick = uThick;
  float sunk = 1.0 - 0.8 * uInk;
  vec3 col = vec3(0.0);
  if (h > 0.0) {
    float rim = exp(-h / max(0.0012, px * 0.9));
    float inner = exp(-h / (0.007 * thick));
    float mid = exp(-h / (0.024 * thick));
    float outer = exp(-h / (0.07 * thick));
    col += lit * (rim * uRimColor * 2.2 * uRimGain + inner * uInner * 0.7 * uAtmo);
    col += wide * (mid * uMid * 0.2 + outer * uOuter * 0.055) * uAtmo;
    float layer = h - 0.042 * thick;
    float band = exp(-layer * layer / (0.00005 * thick * thick));
    if (uAirglow > 0.0 && band > 0.0001) {
      band *= 0.35 + 0.65 * fbm(vec2(arc * 9.0 - uTime * 0.04, uTime * 0.02));
      col += band * uGlowColor * 0.05 * (0.2 + 0.8 * wide) * uAirglow;
    }
    col += sunk * hot * uSunUp * (exp(-h / 0.003) * uSunColor * 4.0 + exp(-h / (0.016 * thick)) * uInner * 0.7);
    col += halo * uSunUp * (exp(-h / (0.045 * thick)) * uInner * 0.2 + exp(-h / (0.12 * thick)) * uMid * 0.06) * uAtmo;
    if (uStars > 0.0 && uInk < 0.5) col += starField(p) * smoothstep(0.04, 0.2, h) * (1.0 - 0.8 * wide) * uStars;
  } else {
    col += lit * exp(h / max(0.0008, px * 0.6)) * uRimColor * 1.1 * uRimGain;
    col += sunk * hot * uSunUp * exp(h / 0.005) * uMid * 0.3;
    if (uClouds > 0.0 && h > -0.12) {
      float tops = fbm(vec2(arc * 22.0 + uTime * 0.01, h * 160.0 + arc * 6.0));
      float catchLight = smoothstep(0.52, 0.78, tops) * exp(h / 0.018) * smoothstep(-0.12, -0.07, h) * lit;
      col += catchLight * mix(uMid, uInner, halo) * 0.14 * uClouds * uSunUp;
    }
  }
  vec2 sun = center + uRadius * vec2(sin(uSunArc / uRadius), cos(uSunArc / uRadius));
  float rs = length(p - sun);
  float crest = smoothstep(-0.0015, 0.0015, h);
  col += uSunUp * uSunUp * uFlare * sunk * (exp(-rs / 0.005) * uSunColor * 2.0 * crest + exp(-rs / 0.05) * uInner * 0.07);
  if (uInk > 0.5) {
    float peak = max(col.r, max(col.g, col.b));
    float alpha = 1.0 - exp(-peak * 1.5);
    float body = (1.0 - smoothstep(-0.002, 0.0, h)) * 0.05;
    vec3 tint = col / max(peak, 0.0001);
    gl_FragColor = vec4(tint * alpha + vec3(0.32) * body * (1.0 - alpha), alpha + body * (1.0 - alpha));
  } else {
    gl_FragColor = vec4(col, 1.0);
  }
}
`,
  k = `
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
  w = `
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
  S = `
uniform sampler2D uScene;
uniform sampler2D uBloom;
uniform vec3 uBackground;
uniform vec2 uResolution;
uniform float uBloomStrength;
uniform float uGrain;
uniform float uTime;
uniform float uInk;
varying vec2 vUv;

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
  float n = hash(gl_FragCoord.xy + fract(uTime * 13.0) * 911.0) - 0.5;
  if (uInk > 0.5) {
    vec4 scene = texture2D(uScene, vUv);
    float cover = clamp(scene.a, 0.0, 1.0);
    vec3 ink = scene.rgb / max(scene.a, 0.0001);
    vec3 color = mix(uBackground, ink, cover);
    color += n * uGrain * 0.05 * smoothstep(0.0, 0.05, cover);
    gl_FragColor = vec4(clamp(color, 0.0, 1.0), 1.0);
    return;
  }
  vec2 c = vUv - 0.5;
  vec2 shift = c * 1.2 / uResolution.y;
  vec3 emission;
  emission.r = texture2D(uScene, vUv + shift).r;
  emission.g = texture2D(uScene, vUv).g;
  emission.b = texture2D(uScene, vUv - shift).b;
  emission += texture2D(uBloom, vUv).rgb * uBloomStrength;
  vec3 light = neutral(max(emission, 0.0));
  light = pow(light, vec3(1.0 / 2.2));
  vec3 color = 1.0 - (1.0 - uBackground) * (1.0 - light);
  float l = max(light.r, max(light.g, light.b));
  float mask = smoothstep(0.0, 0.04, l);
  color += n * uGrain * 0.1 * mask;
  color += (hash(gl_FragCoord.xy * 1.7) - 0.5) / 255.0 * mask;
  gl_FragColor = vec4(clamp(color, 0.0, 1.0), 1.0);
}
`,
  b = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: .08,
        delayChildren: .05
      }
    }
  },
  y = {
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
function R() {
  let e = (0, __mod_50969.I)(),
    t = (0, React.useRef)(null),
    r = (0, React.useRef)(null),
    v = (0, React.useRef)([]),
    R = (0, React.useRef)(null),
    [C, M] = (0, React.useState)(0),
    [T, I] = (0, React.useState)(!1);
  return (0, React.useEffect)(() => {
    let e = t.current,
      a = r.current;
    if (!e || !a) return;
    let o = function (e, t, r, a) {
      let o,
        n = e.ownerDocument,
        u = n.defaultView ?? window,
        c = n.createElement("canvas");
      c.setAttribute("aria-hidden", "true"), c.style.cssText = "position:absolute;inset:0;z-index:-1;width:100%;height:100%;display:block;pointer-events:none";
      try {
        o = new __mod_12246.WebGLRenderer({
          canvas: c,
          alpha: !1,
          antialias: !1,
          powerPreference: "high-performance"
        });
      } catch {
        return null;
      }
      e.prepend(c), o.autoClear = !1;
      let v = u.matchMedia("(prefers-reduced-motion: reduce)"),
        b = v.matches,
        y = new __mod_2253.qUd(-1, 1, 1, -1, -1, 1),
        R = new __mod_2253.bdM(2, 2),
        C = new __mod_2253.Z58(),
        M = new __mod_2253.eaF(R);
      M.frustumCulled = !1, C.add(M);
      let T = () => ({
          value: new __mod_2253.Pq0(1, 1, 1)
        }),
        I = new __mod_2253.BKk({
          uniforms: {
            uRes: {
              value: new __mod_2253.I9Y(1, 1)
            },
            uTime: {
              value: 0
            },
            uRoll: {
              value: 0
            },
            uApex: {
              value: -.22
            },
            uRadius: {
              value: 3.4
            },
            uSunArc: {
              value: 0
            },
            uSpread: {
              value: .3
            },
            uSunUp: {
              value: 1
            },
            uAtmo: {
              value: 1
            },
            uThick: {
              value: 1
            },
            uRimGain: {
              value: 1
            },
            uFlare: {
              value: 1
            },
            uAirglow: {
              value: .5
            },
            uClouds: {
              value: .6
            },
            uStars: {
              value: .35
            },
            uInk: {
              value: 0
            },
            uRimColor: T(),
            uInner: T(),
            uMid: T(),
            uOuter: T(),
            uGlowColor: T(),
            uSunColor: T(),
            uStarColor: T()
          },
          vertexShader: x,
          fragmentShader: g,
          depthTest: !1,
          depthWrite: !1
        }),
        A = () => new __mod_2253.nWS(1, 1, {
          type: __mod_2253.ix0,
          format: __mod_2253.GWd,
          depthBuffer: !1,
          stencilBuffer: !1,
          minFilter: __mod_2253.k6q,
          magFilter: __mod_2253.k6q,
          generateMipmaps: !1
        }),
        U = A(),
        E = Array.from({
          length: 5
        }, A),
        F = new __mod_2253.Pq0(.04, .04, .04),
        B = new __mod_2253.BKk({
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
          fragmentShader: k,
          depthTest: !1,
          depthWrite: !1
        }),
        G = new __mod_2253.BKk({
          uniforms: {
            uSource: {
              value: null
            },
            uTexel: {
              value: new __mod_2253.I9Y()
            }
          },
          vertexShader: x,
          fragmentShader: w,
          blending: __mod_2253.EZo,
          transparent: !0,
          depthTest: !1,
          depthWrite: !1
        }),
        N = new __mod_2253.BKk({
          uniforms: {
            uScene: {
              value: U.texture
            },
            uBloom: {
              value: E[0].texture
            },
            uBackground: {
              value: F
            },
            uResolution: {
              value: new __mod_2253.I9Y(1, 1)
            },
            uBloomStrength: {
              value: .5
            },
            uGrain: {
              value: .2
            },
            uTime: {
              value: 0
            },
            uInk: {
              value: 0
            }
          },
          vertexShader: x,
          fragmentShader: S,
          depthTest: !1,
          depthWrite: !1
        }),
        j = n.createElement("canvas").getContext("2d", {
          willReadFrequently: !0
        }),
        D = 0,
        L = 0,
        _ = 1,
        q = "",
        P = !1,
        z = 0,
        O = -1,
        W = +!!b,
        $ = -.3,
        Y = [.2, .5, .8],
        K = 0,
        V = 0,
        Z = !1,
        H = 0,
        X = 0,
        J = !1,
        Q = !1,
        ee = !1,
        et = (e, t) => {
          let r = I.uniforms[e].value;
          P ? r.set(t[0], t[1], t[2]) : r.set(m(t[0]), m(t[1]), m(t[2]));
        },
        er = () => {
          if (!j) return !1;
          let r = "rgba(0, 0, 0, 0)";
          for (; e;) {
            let e = u.getComputedStyle(e).backgroundColor;
            if (!/rgba?\(\s*0,\s*0,\s*0,\s*0\s*\)|transparent/.test(e)) {
              r = e;
              break;
            }
            t = e.parentElement;
          }
          j.clearRect(0, 0, 1, 1), j.fillStyle = "#0a0a0a", j.fillStyle = r, j.fillRect(0, 0, 1, 1);
          let [a, o, n] = j.getImageData(0, 0, 1, 1).data,
            l = `${a},${o},${n}`;
          if (l === q) return !1;
          q = l;
          let c = [a / 255, o / 255, n / 255];
          P = .2126 * c[0] + .7152 * c[1] + .0722 * c[2] > .55, F.set(c[0], c[1], c[2]);
          let s = d(f("#ff8a3d")),
            m = d(f("#3d7bff")),
            v = (e, t) => {
              let r = Math.hypot(e[1], e[2]);
              if (r < .02) return [.8 * t, 0, 0];
              let a = Math.max(1, .15 / r);
              return [t, e[1] * a, e[2] * a];
            },
            x = p(s, m, .55),
            g = p(s, m, .35),
            k = (e, t, r) => [Math.max(e[0], t), e[1] * r, e[2] * r];
          return P ? (et("uRimColor", h(v(p(s, m, .7), .42))), et("uInner", h(v(s, .62))), et("uMid", h(v(x, .55))), et("uOuter", h(v(m, .5))), et("uGlowColor", h(v(g, .58))), et("uSunColor", h(v(p(s, m, .5), .48))), et("uStarColor", h(v(m, .5)))) : (et("uRimColor", h(k(s, .96, .22))), et("uInner", h(s)), et("uMid", h(x)), et("uOuter", h(m)), et("uGlowColor", h(k(g, .78, .7))), et("uSunColor", h(k(s, .98, .12))), et("uStarColor", h(k(m, .93, .15)))), I.uniforms.uInk.value = +!!P, I.blending = P ? __mod_2253.XIg : __mod_2253.NTi, N.uniforms.uInk.value = +!!P, !0;
        },
        ea = () => {
          let a,
            n = Math.round(e.clientWidth),
            l = Math.round(e.clientHeight);
          if (n < 2 || l < 2) return !1;
          let i = Math.min(u.devicePixelRatio || 1, 2);
          if (a = e.getBoundingClientRect(), $ = .5 - (t.getBoundingClientRect().top - a.top + Math.min(32, .04 * a.height)) / Math.max(a.height, 1), Math.max(...(Y = r.map((e, t) => {
            if (!e) return [.2, .5, .8][t];
            let r = e.getBoundingClientRect();
            return (r.left + r.width / 2 - a.left) / Math.max(a.width, 1);
          }))) - Math.min(...Y) < .1 && (Y = [.24, .5, .76]), n === D && l === L && i === _) return !0;
          D = n, L = l, _ = i, o.setPixelRatio(_), o.setSize(D, L, !1);
          let c = Math.round(D * _),
            s = Math.round(L * _);
          U.setSize(c, s);
          for (let e of E) f = Math.max(1, Math.round(c / 2)), m = Math.max(1, Math.round(s / 2)), e.setSize(c, s);
          return I.uniforms.uRes.value.set(c, s), N.uniforms.uResolution.value.set(c, s), !0;
        },
        eo = () => (Y[K] - .5) * (D / Math.max(L, 1)),
        en = () => {
          if (!D) return;
          let e = 3.4 * s(D / Math.max(L, 1) / 1.6, .42, 1.8),
            t = Math.abs(eo() - V),
            r = I.uniforms;
          r.uTime.value = z, r.uApex.value = $, r.uRadius.value = e, r.uSunArc.value = Math.asin(s(V / e, -.99, .99)) * e, r.uSpread.value = .05 + .25 * (.15 + .85 * W), r.uSunUp.value = (.12 + .88 * W) * (1 - .6 * Math.min(t / .18, 1)), N.uniforms.uTime.value = z, M.material = I, o.setRenderTarget(U), o.setClearColor(0, 0), o.clear(), o.render(C, y);
          let a = .5 * !P;
          if (a > 0) {
            for (let t of (M.material = B, E)) B.uniforms.uThreshold.value = .45 * (U === U), B.uniforms.uSource.value = U.texture, B.uniforms.uTexel.value.set(1 / U.width, 1 / U.height), o.setRenderTarget(t), o.render(C, y), e = t;
            M.material = G;
            for (let e = E.length - 1; e > 0; e--) G.uniforms.uSource.value = E[e].texture, G.uniforms.uTexel.value.set(1 / E[e].width, 1 / E[e].height), o.setRenderTarget(E[e - 1]), o.render(C, y);
          }
          N.uniforms.uBloomStrength.value = a, M.material = N, o.setRenderTarget(null), o.render(C, y);
        },
        eu = () => {
          Q || ee || !J || H || (H = u.requestAnimationFrame(el));
        };
      function el(e) {
        if (H = 0, Q || ee) return;
        let t = X && e - X < 100 ? Math.min((e - X) / 1e3, .05) : 1 / 60;
        if (X = e, D || ea(), !D) return;
        if (Z || (V = eo(), Z = !0), b) W = 1;else {
          z += .5 * t, O < 0 && (O = e);
          let r = s((e - O) / 3200, 0, 1);
          W = r * r * (3 - 2 * r);
        }
        V += (eo() - V) * (b ? 1 : 1 - Math.exp(-t / .42)), en();
        let r = Math.abs(eo() - V) > 5e-4 || W < 1;
        !b || r ? eu() : X = 0;
      }
      let ei = () => {
          er() && (!H && J && en(), eu());
        },
        ec = () => {
          b = v.matches, X = 0, eu();
        },
        es = e => {
          e.preventDefault(), ee = !0, u.cancelAnimationFrame(H), H = 0;
        },
        ef = () => {
          ee = !1, q = "", er(), eu();
        },
        em = new ResizeObserver(() => {
          ea() && (!H && J && en(), eu());
        }),
        ev = new IntersectionObserver(([e]) => {
          J = e.isIntersecting, X = 0, eu();
        }, {
          rootMargin: "120px"
        }),
        ed = new MutationObserver(ei),
        eh = u.matchMedia("(prefers-color-scheme: dark)");
      return ed.observe(n.documentElement, {
        attributes: !0,
        attributeFilter: ["class", "style", "data-theme"]
      }), eh.addEventListener("change", ei), v.addEventListener("change", ec), c.addEventListener("webglcontextlost", es), c.addEventListener("webglcontextrestored", ef), em.observe(e), em.observe(t), r.forEach(e => e && em.observe(e)), ev.observe(e), er(), ea(), {
        setSun: e => {
          K = s(e, 0, Y.length - 1), eu();
        },
        destroy: () => {
          Q = !0, u.cancelAnimationFrame(H), ed.disconnect(), em.disconnect(), ev.disconnect(), eh.removeEventListener("change", ei), v.removeEventListener("change", ec), c.removeEventListener("webglcontextlost", es), c.removeEventListener("webglcontextrestored", ef), U.dispose(), E.forEach(e => e.dispose()), [I, B, G, N].forEach(e => e.dispose()), R.dispose(), o.dispose(), c.remove();
        }
      };
    }(e, a, v.current, 0);
    return R.current = o, () => {
      o?.destroy(), R.current = null;
    };
  }, []), (0, React.useEffect)(() => {
    R.current?.setSun(C);
  }, [C]), (0, React.useEffect)(() => {
    if (T || e) return;
    let t = window.setInterval(() => M(e => (e + 1) % c.length), 4200);
    return () => window.clearInterval(t);
  }, [T, e]), <section ref={t} className="relative isolate w-full overflow-hidden bg-white px-4 pt-20 text-neutral-950 dark:bg-neutral-950 dark:text-white sm:px-6 lg:px-8 lg:pt-28"><motion.div variants={b} initial={!e && "hidden"} whileInView="show" viewport={{
      once: !0,
      amount: .3
    }} className="mx-auto w-full max-w-[1400px]"><div className="grid gap-5 lg:grid-cols-2 lg:items-end lg:gap-16"><motion.h2 variants={y} className="max-w-[16ch] text-balance text-[2.25rem] font-medium leading-[1.04] tracking-[-0.04em] sm:text-5xl">Support that follows the sun.</motion.h2><motion.p variants={y} className="max-w-[44ch] text-pretty text-base leading-relaxed text-neutral-600 lg:justify-self-end dark:text-neutral-400">Tickets hand off between offices as each one wakes up, so no customer waits for morning.</motion.p></div><motion.ol variants={y} onPointerLeave={() => I(!1)} className="mt-16 grid grid-cols-1 gap-8 sm:mt-24 sm:grid-cols-3 sm:gap-6">{c.map((e, t) => {
          let r = t === C;
          return <li ref={e => {
            v.current[t] = e;
          }} tabIndex={0} aria-current={r ? "true" : void 0} onPointerEnter={e => {
            "mouse" === e.pointerType && (I(!0), M(t));
          }} onFocus={() => {
            I(!0), M(t);
          }} onBlur={() => I(!1)} onClick={() => {
            I(!0), M(t);
          }} className="flex cursor-default flex-col rounded-md outline-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current sm:items-center sm:text-center"><span className={`text-sm tabular-nums transition-colors duration-500 ${r ? "text-[#c25a00] dark:text-[#ffa25e]" : "text-neutral-500"}`}>{e.time}</span><span className={`mt-2 text-[2.25rem] font-medium leading-none tracking-[-0.04em] transition-colors duration-500 sm:text-5xl ${r ? "text-neutral-950 dark:text-white" : "text-neutral-400 dark:text-neutral-600"}`}>{e.city}</span><span className={`mt-4 max-w-[30ch] text-pretty text-sm leading-relaxed transition-colors duration-500 ${r ? "text-neutral-700 dark:text-neutral-300" : "text-neutral-400 dark:text-neutral-600"}`}>{e.detail}</span></li>;
        })}</motion.ol></motion.div><div ref={r} aria-hidden="true" className="mt-10 h-[clamp(9rem,20vw,16rem)] sm:mt-14" /></section>;
}

export { R as Features17 };
export default R;

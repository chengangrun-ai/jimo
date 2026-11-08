import { motion, AnimatePresence } from "motion/react";
import * as React from "react";
import * as __mod_50969 from "../_helpers/50969";
import * as __mod_12246 from "../_helpers/12246";
import * as __mod_2253 from "../_helpers/2253";
/**
 * Hero 25
 * Giant headline mirrored in a rolling voxel sea
 * slug: hero-25
 * category: Hero Section
 * export: Hero25
 * deps: lucide-react, motion, three
 * original: ts-tailwind/blocks/hero/hero-25.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import { ArrowRight } from "lucide-react";

let c = "#5227FF",
  v = "#B19EEF",
  f = 1 / 120,
  p = (e, t, r) => Math.min(r, Math.max(t, e)),
  m = e => e <= .04045 ? e / 12.92 : Math.pow((e + .055) / 1.055, 2.4),
  d = e => e <= .0031308 ? 12.92 * e : 1.055 * Math.pow(e, 1 / 2.4) - .055,
  h = e => {
    let t = Number.parseInt(e.slice(1), 16);
    return [(t >> 16 & 255) / 255, (t >> 8 & 255) / 255, (255 & t) / 255];
  },
  x = (e, t) => {
    let [r, a, o] = (([e, t, r]) => {
        let a = m(e),
          o = m(t),
          l = m(r),
          n = Math.cbrt(.4122214708 * a + .5363325363 * o + .0514459929 * l),
          i = Math.cbrt(.2119034982 * a + .6806995451 * o + .1073969566 * l),
          u = Math.cbrt(.0883024619 * a + .2817188376 * o + .6299787005 * l);
        return [.2104542553 * n + .793617785 * i - .0040720468 * u, 1.9779984951 * n - 2.428592205 * i + .4505937099 * u, .0259040371 * n + .7827717662 * i - .808675766 * u];
      })(e),
      l = Math.max(1, .14 / Math.max(Math.hypot(a, o), 1e-4));
    return (([e, t, r]) => {
      let a = Math.pow(e + .3963377774 * t + .2158037573 * r, 3),
        o = Math.pow(e - .1055613458 * t - .0638541728 * r, 3),
        l = Math.pow(e - .0894841775 * t - 1.291485548 * r, 3);
      return [p(d(4.0767416621 * a - 3.3077115913 * o + .2309699292 * l), 0, 1), p(d(-1.2684380046 * a + 2.6097574011 * o - .3413193965 * l), 0, 1), p(d(-.0041960863 * a - .7034186147 * o + 1.707614701 * l), 0, 1)];
    })([p(r, .32, t), a * l, o * l]);
  },
  g = `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`,
  w = `
attribute vec3 iVoxel;
uniform float uTime;
uniform float uCurveX;
uniform float uCurveZ;
uniform float uCell;
uniform float uFocusDepth;
uniform float uFocalPx;
uniform vec2 uViewport;
uniform float uNear;
uniform float uFar;
uniform float uSpread;
uniform float uIntro;
uniform vec3 uColorA;
uniform vec3 uColorB;
uniform float uInk;
uniform sampler2D uRipple;
uniform vec4 uRippleRect;
uniform vec2 uRippleTexel;
uniform float uRippleOn;
uniform sampler2D uMirror;
uniform float uMirrorOn;
uniform vec3 uArc;
uniform float uWave;
varying vec2 vQuad;
varying vec2 vHalf;
varying float vSigma;
varying vec3 vColor;
varying float vAlpha;

const float TAU = 6.28318530718;
const float AMP = 0.115;

vec3 component(vec2 p, vec2 dir, float wavelength, float amp, float rate, float phase) {
  float k = TAU / (wavelength * uWave);
  vec2 d = normalize(dir);
  float theta = k * dot(d, p) + rate * uTime + phase;
  return vec3(amp * uWave * sin(theta), amp * uWave * k * cos(theta) * d);
}

vec3 surface(vec2 p) {
  vec3 h = component(p, vec2(0.14, 1.0), 3.3, 0.55, 1.0, 0.0);
  h += component(p, vec2(-0.48, 1.0), 2.15, 0.32, 1.22, 1.9);
  h += component(p, vec2(0.82, 0.62), 1.45, 0.2, 1.5, 4.2);
  h += component(p, vec2(-0.86, 0.42), 0.95, 0.1, 1.95, 2.6);
  h += component(p, vec2(0.33, -0.9), 0.64, 0.036, 2.6, 5.3);
  h += component(p, vec2(-0.2, 0.95), 0.41, 0.02, 3.4, 0.7);
  return h * AMP;
}

float rippleTap(vec2 st) {
  return texture2D(uRipple, (st + 0.5) * uRippleTexel).r;
}

float rippleSample(vec2 uv) {
  vec2 st = uv / uRippleTexel - 0.5;
  vec2 i = floor(st);
  vec2 f = st - i;
  return mix(
    mix(rippleTap(i), rippleTap(i + vec2(1.0, 0.0)), f.x),
    mix(rippleTap(i + vec2(0.0, 1.0)), rippleTap(i + vec2(1.0, 1.0)), f.x),
    f.y
  );
}

vec3 ripple(vec2 p) {
  if (uRippleOn < 0.5) return vec3(0.0);
  vec2 span = uRippleRect.zw - uRippleRect.xy;
  vec2 uv = (p - uRippleRect.xy) / span;
  if (uv.x <= 0.01 || uv.y <= 0.01 || uv.x >= 0.99 || uv.y >= 0.99) return vec3(0.0);
  float h0 = rippleSample(uv);
  float hx = rippleSample(uv + vec2(uRippleTexel.x, 0.0));
  float hz = rippleSample(uv + vec2(0.0, uRippleTexel.y));
  vec2 cell = span * uRippleTexel;
  return vec3(h0, (hx - h0) / cell.x, (hz - h0) / cell.y);
}

float mirror(vec2 screen, vec2 g) {
  float dx = screen.x - 0.5;
  float horizon = uArc.x - uArc.y * dx * dx;
  float below = max(horizon - screen.y, 0.0);
  vec2 m = vec2(screen.x - g.x * 0.016, 2.0 * horizon - screen.y + g.y * 0.034);
  float a = texture2D(uMirror, m).a * 0.4;
  a += texture2D(uMirror, m + vec2(0.0, 0.009)).a * 0.3;
  a += texture2D(uMirror, m - vec2(0.0, 0.009)).a * 0.3;
  return a * exp(-below * 4.2);
}

void main() {
  vec2 p = iVoxel.xy;
  vec3 w = surface(p);
  vec3 r = ripple(p);
  float h = w.x + r.x;
  vec2 g = w.yz + r.yz * 2.2;
  float drop = p.x * p.x * uCurveX + p.y * p.y * uCurveZ;
  vec3 world = vec3(p.x, h - drop, -p.y);
  vec4 viewPos = modelViewMatrix * vec4(world, 1.0);
  float depth = max(-viewPos.z, 0.05);
  vec4 clip = projectionMatrix * viewPos;
  vec2 screen = clip.xy / clip.w * 0.5 + 0.5;

  vec3 normal = normalize(vec3(-g.x + 2.0 * p.x * uCurveX, 1.0, g.y - 2.0 * p.y * uCurveZ));
  float facing = clamp(dot(normal, normalize(cameraPosition - world)), 0.06, 1.0);
  float size = uCell * 0.55 * uFocalPx / depth;
  vec2 core = vec2(size, size * facing);
  float coc = 0.056 * uWave * uWave * uFocalPx * abs(1.0 / depth - 1.0 / uFocusDepth);
  float sigma = max(coc * 0.42, 0.42);
  vec2 corner = position.xy * (core * 0.5 + 2.6 * sigma + 0.5);
  gl_Position = clip + vec4(corner / uViewport * 2.0 * clip.w, 0.0, 0.0);
  vQuad = corner;
  vHalf = core * 0.5;
  vSigma = sigma;

  float t = clamp((p.y - uNear) / max(uFar - uNear, 0.001), 0.0, 1.0);
  float side = abs(p.x) / max(p.y * uSpread, 0.001);
  float edge = (1.0 - smoothstep(0.94, 1.0, t)) * (1.0 - smoothstep(0.72, 1.0, side));
  float fade = smoothstep(0.02, 0.36, screen.y);
  float crest = smoothstep(-0.25, 1.05, h / (AMP * uWave * 0.62));
  float lateral = 1.0 - 0.6 * side * side;
  float limb = exp(-(1.0 - t) * 6.5) * lateral;
  float depthLight = mix(0.45, 1.0, smoothstep(0.0, 0.55, t));
  float front = uIntro * 1.3 - (1.0 - t);
  float reveal = smoothstep(0.0, 0.22, front);
  float sweep = exp(-front * front / 0.004) * step(uIntro, 0.999) * 0.9;
  float energy = (0.018 + 0.9 * pow(crest, 2.4)) * depthLight * lateral + limb * (0.25 + 0.95 * crest);
  float shine = uMirrorOn * mirror(screen, g) * pow(1.0 - facing, 1.4) * reveal;
  float light = (energy * reveal + sweep * (0.4 + crest)) * edge * fade;
  if (uInk > 0.5) {
    vColor = mix(mix(uColorB, uColorA, smoothstep(0.05, 0.7, energy)), uColorA, clamp(shine * 1.6, 0.0, 1.0));
    vAlpha = clamp(0.28 + energy * 2.0 + shine * 1.6, 0.0, 1.0) * edge * fade * max(reveal, sweep) * (0.55 + 0.45 * depthLight);
  } else {
    float glow = shine * 0.8 * edge * fade;
    vColor = mix(uColorA, uColorB, smoothstep(0.1, 0.95, light)) * light + vec3(max(light - 0.9, 0.0) * 0.45) + mix(uColorB, vec3(1.0), 0.55) * glow;
    vAlpha = 1.0;
  }
}
`,
  b = `
uniform float uInk;
varying vec2 vQuad;
varying vec2 vHalf;
varying float vSigma;
varying vec3 vColor;
varying float vAlpha;

float erfApprox(float x) {
  float x2 = x * x;
  float t = 1.0 - exp(-x2 * (1.27323954 + 0.147 * x2) / (1.0 + 0.147 * x2));
  return sign(x) * sqrt(max(t, 0.0));
}

float blurred(float x, float halfSize, float sigma) {
  float k = 0.70710678 / sigma;
  return 0.5 * (erfApprox((x + halfSize) * k) - erfApprox((x - halfSize) * k));
}

void main() {
  float soft = blurred(vQuad.x, vHalf.x, vSigma) * blurred(vQuad.y, vHalf.y, vSigma);
  float radius = 0.2 * min(vHalf.x, vHalf.y);
  vec2 q = abs(vQuad) - vHalf + radius;
  float d = length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - radius;
  float sharp = 1.0 - smoothstep(-0.6, 0.6, d);
  float k = max(smoothstep(0.55, 1.4, vSigma), 1.0 - smoothstep(1.6, 3.2, min(vHalf.x, vHalf.y) * 2.0));
  float coverage = mix(sharp, soft, k);
  if (coverage < 0.002) discard;
  if (uInk > 0.5) {
    float a = coverage * vAlpha;
    gl_FragColor = vec4(vColor * a, a);
  } else {
    gl_FragColor = vec4(vColor * coverage, 1.0);
  }
}
`,
  y = `
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
  vec3 color = tap(vec2(0.0)) * 0.125
    + (tap(vec2(-2.0, 2.0)) + tap(vec2(2.0, 2.0)) + tap(vec2(-2.0, -2.0)) + tap(vec2(2.0, -2.0))) * 0.03125
    + (tap(vec2(0.0, 2.0)) + tap(vec2(-2.0, 0.0)) + tap(vec2(2.0, 0.0)) + tap(vec2(0.0, -2.0))) * 0.0625
    + (tap(vec2(-1.0, 1.0)) + tap(vec2(1.0, 1.0)) + tap(vec2(-1.0, -1.0)) + tap(vec2(1.0, -1.0))) * 0.125;
  gl_FragColor = vec4(color, 1.0);
}
`,
  M = `
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
  k = `
uniform sampler2D uScene;
uniform sampler2D uBloom;
uniform vec3 uBackground;
uniform vec3 uHazeColor;
uniform vec3 uArc;
uniform float uBloomStrength;
uniform float uTime;
uniform float uInk;
uniform float uIntro;
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
  float dx = vUv.x - 0.5;
  float offset = vUv.y - (uArc.x - uArc.y * dx * dx);
  float spread = 1.0 - clamp(dx * dx * uArc.z, 0.0, 0.85);
  float profile = offset > 0.0
    ? exp(-offset / 0.045) + exp(-offset / 0.15) * 0.2
    : 1.2 * exp(offset / 0.03);
  float haze = profile * spread * 0.7 * uIntro;
  vec4 scene = texture2D(uScene, vUv);
  float n = hash(gl_FragCoord.xy + fract(uTime * 13.0) * 911.0) - 0.5;
  if (uInk > 0.5) {
    float cover = clamp(scene.a, 0.0, 1.0);
    vec3 ink = scene.rgb / max(scene.a, 0.0001);
    vec3 color = mix(uBackground, ink, cover * 0.94);
    color = mix(color, uHazeColor, clamp(haze * 0.16, 0.0, 0.4));
    color += n * 0.015 * smoothstep(0.0, 0.05, cover + haze * 0.2);
    gl_FragColor = vec4(clamp(color, 0.0, 1.0), 1.0);
    return;
  }
  vec3 emission = scene.rgb + texture2D(uBloom, vUv).rgb * uBloomStrength + uHazeColor * haze;
  vec3 light = pow(neutral(max(emission, 0.0)), vec3(1.0 / 2.2));
  vec3 color = 1.0 - (1.0 - uBackground) * (1.0 - light);
  float mask = smoothstep(0.0, 0.04, max(light.r, max(light.g, light.b)));
  color += n * 0.025 * mask + (hash(gl_FragCoord.xy * 1.7) - 0.5) / 255.0 * mask;
  gl_FragColor = vec4(clamp(color, 0.0, 1.0), 1.0);
}
`,
  C = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: .1,
        delayChildren: .1
      }
    }
  },
  S = {
    hidden: {
      opacity: 0,
      y: 12,
      filter: "blur(6px)"
    },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: .9,
        ease: [.16, 1, .3, 1]
      }
    }
  },
  z = {
    hidden: {
      opacity: 0,
      filter: "blur(18px)"
    },
    show: {
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        duration: 1.4,
        ease: [.16, 1, .3, 1]
      }
    }
  };
function R() {
  let e = (0, __mod_50969.I)(),
    t = (0, React.useRef)(null),
    r = (0, React.useRef)(null),
    d = (0, React.useRef)(null);
  return (0, React.useEffect)(() => {
    let e = t.current,
      a = r.current,
      o = d.current;
    if (!e || !a || !o) return;
    let l = function (e, t, r) {
      let a,
        o = e.ownerDocument,
        l = o.defaultView ?? window,
        n = l.matchMedia("(prefers-reduced-motion: reduce)").matches,
        i = o.createElement("canvas");
      i.style.cssText = "position:absolute;inset:0;width:100%;height:100%;display:block";
      try {
        a = new __mod_12246.WebGLRenderer({
          canvas: i,
          alpha: !1,
          antialias: !1,
          powerPreference: "high-performance"
        });
      } catch {
        return null;
      }
      t.appendChild(i), a.autoClear = !1;
      let d = new __mod_2253.ubm(26, 1, .1, 200);
      d.position.set(0, 3, 0);
      let C = new __mod_2253.qUd(-1, 1, 1, -1, -1, 1),
        S = new __mod_2253.bdM(2, 2),
        z = new __mod_2253.Z58(),
        R = new __mod_2253.eaF(S);
      R.frustumCulled = !1, z.add(R);
      let T = new __mod_2253.CmU();
      T.index = S.index, T.setAttribute("position", S.getAttribute("position"));
      let A = new Float32Array(3),
        F = new __mod_2253.uWO(A, 3);
      T.setAttribute("iVoxel", F), T.instanceCount = 0;
      let I = new Float32Array(24576),
        P = new Float32Array(24576),
        E = new Float32Array(24576),
        B = new __mod_2253.GYF(I, 192, 128, __mod_2253.VT0, __mod_2253.RQf);
      B.minFilter = __mod_2253.hxR, B.magFilter = __mod_2253.hxR, B.needsUpdate = !0;
      let j = o.createElement("canvas");
      j.width = 2, j.height = 2;
      let N = j.getContext("2d"),
        q = new __mod_2253.GOR(j);
      q.minFilter = __mod_2253.k6q, q.magFilter = __mod_2253.k6q, q.generateMipmaps = !1;
      let L = new __mod_2253.Pq0(),
        U = new __mod_2253.Pq0(),
        D = new __mod_2253.Pq0(.04, .04, .04),
        W = new __mod_2253.Pq0(),
        H = new __mod_2253.IUQ(-8, 5, 8, 18),
        O = new __mod_2253.Pq0(.44, .1, 1.4),
        _ = new __mod_2253.BKk({
          uniforms: {
            uTime: {
              value: 7.3
            },
            uCurveX: {
              value: .006
            },
            uCurveZ: {
              value: 6e-4
            },
            uCell: {
              value: .06
            },
            uFocusDepth: {
              value: 8
            },
            uFocalPx: {
              value: 1e3
            },
            uViewport: {
              value: new __mod_2253.I9Y(1, 1)
            },
            uNear: {
              value: 5
            },
            uFar: {
              value: 18
            },
            uSpread: {
              value: .5
            },
            uIntro: {
              value: +!!n
            },
            uColorA: {
              value: L
            },
            uColorB: {
              value: U
            },
            uInk: {
              value: 0
            },
            uRipple: {
              value: B
            },
            uRippleRect: {
              value: H
            },
            uRippleTexel: {
              value: new __mod_2253.I9Y(.005208333333333333, .0078125)
            },
            uRippleOn: {
              value: 0
            },
            uMirror: {
              value: q
            },
            uMirrorOn: {
              value: +!!n
            },
            uArc: {
              value: O
            },
            uWave: {
              value: 1
            }
          },
          vertexShader: w,
          fragmentShader: b,
          transparent: !0,
          blending: __mod_2253.EZo,
          depthTest: !1,
          depthWrite: !1
        }),
        V = new __mod_2253.eaF(T, _);
      V.frustumCulled = !1;
      let Q = new __mod_2253.Z58();
      Q.add(V);
      let Z = () => new __mod_2253.nWS(1, 1, {
          type: __mod_2253.ix0,
          depthBuffer: !1,
          stencilBuffer: !1,
          generateMipmaps: !1
        }),
        X = Z(),
        Y = Array.from({
          length: 5
        }, Z),
        K = new __mod_2253.BKk({
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
          vertexShader: g,
          fragmentShader: y,
          depthTest: !1,
          depthWrite: !1
        }),
        $ = new __mod_2253.BKk({
          uniforms: {
            uSource: {
              value: null
            },
            uTexel: {
              value: new __mod_2253.I9Y()
            }
          },
          vertexShader: g,
          fragmentShader: M,
          blending: __mod_2253.EZo,
          transparent: !0,
          depthTest: !1,
          depthWrite: !1
        }),
        G = new __mod_2253.BKk({
          uniforms: {
            uScene: {
              value: X.texture
            },
            uBloom: {
              value: Y[0].texture
            },
            uBackground: {
              value: D
            },
            uHazeColor: {
              value: W
            },
            uArc: {
              value: O
            },
            uBloomStrength: {
              value: .5
            },
            uTime: {
              value: 0
            },
            uInk: {
              value: 0
            },
            uIntro: {
              value: +!!n
            }
          },
          vertexShader: g,
          fragmentShader: k,
          depthTest: !1,
          depthWrite: !1
        }),
        J = o.createElement("canvas").getContext("2d", {
          willReadFrequently: !0
        }),
        ee = 0,
        et = 0,
        er = 1,
        ea = !1,
        eo = "",
        el = "",
        en = !1,
        ei = .5,
        eu = 5,
        es = 7.3,
        ec = -1,
        ef = n ? 0 : -1,
        ep = !1,
        em = 0,
        ed = 0,
        eh = 0,
        ex = 0,
        eg = !1,
        ew = !1,
        eb = !1,
        ey = null,
        eM = [],
        ek = () => {
          let t = (() => {
              if (!J) return [.04, .04, .04];
              J.clearRect(0, 0, 1, 1), J.fillStyle = "#0a0a0a", J.fillStyle = l.getComputedStyle(e).backgroundColor, J.fillRect(0, 0, 1, 1);
              let t = J.getImageData(0, 0, 1, 1).data;
              return [t[0] / 255, t[1] / 255, t[2] / 255];
            })(),
            r = t.join(",");
          if (r === el) return !1;
          if (el = r, en = .2126 * t[0] + .7152 * t[1] + .0722 * t[2] > .55, D.set(t[0], t[1], t[2]), en) {
            let e = x(h(c), .5),
              t = x(h(v), .6);
            L.set(e[0], e[1], e[2]), U.set(t[0], t[1], t[2]), W.set(t[0], t[1], t[2]), _.blending = __mod_2253.bCz, _.blendEquation = __mod_2253.gO9, _.blendSrc = __mod_2253.qad, _.blendDst = __mod_2253.qad;
          } else {
            let e = h(c).map(m),
              t = h(v).map(m);
            L.set(e[0], e[1], e[2]), U.set(t[0], t[1], t[2]), W.set((.55 * e[0] + .45 * t[0]) * .16, (.55 * e[1] + .45 * t[1]) * .16, (.55 * e[2] + .45 * t[2]) * .16), _.blending = __mod_2253.EZo;
          }
          return _.uniforms.uInk.value = +!!en, G.uniforms.uInk.value = +!!en, G.uniforms.uBloomStrength.value = .5 * !en, !0;
        },
        eC = (t, r) => {
          let a = e.getBoundingClientRect();
          if (a.width <= 0 || a.height <= 0) return null;
          let o = new __mod_2253.Pq0((t - a.left) / a.width * 2 - 1, -((r - a.top) / a.height * 2 - 1), .5).unproject(d).sub(d.position).normalize();
          if (o.y >= -1e-4) return null;
          let l = -d.position.y / o.y,
            n = -(d.position.z + o.z * l);
          return n < eu || n > 18 ? null : {
            x: d.position.x + o.x * l,
            z: n
          };
        },
        eS = (e, t, r, a) => {
          let o = (e - H.x) / (H.z - H.x) * 192,
            l = (t - H.y) / (H.w - H.y) * 128,
            n = Math.ceil(2.5 * a),
            i = Math.round(o),
            u = Math.round(l);
          for (let e = Math.max(1, u - n); e <= Math.min(126, u + n); e++) for (let t = Math.max(1, i - n); t <= Math.min(190, i + n); t++) {
            let n = -r * Math.exp(-((t - o) * (t - o) + (e - l) * (e - l)) / (a * a));
            I[192 * e + t] += n, P[192 * e + t] += .6 * n;
          }
          ep = !0, em = 0, _.uniforms.uRippleOn.value = 1;
        },
        ez = () => {
          let e = 0;
          for (let t = 1; t < 127; t++) {
            let r = 192 * t;
            for (let t = 1; t < 191; t++) {
              let a = r + t,
                o = I[a - 1] + I[a + 1] + I[a - 192] + I[a + 192] - 4 * I[a],
                l = (2 * I[a] - P[a] + .1 * o) * .9962;
              E[a] = l, Math.abs(l) > e && (e = Math.abs(l));
            }
          }
          return P = I, I = E, E = P, e;
        },
        eR = () => {
          ew || eb || !eg || eh || (eh = l.requestAnimationFrame(eA));
        },
        eT = () => {
          if (ea) {
            if ((() => {
              let e = [ee, et, er, ei].join("|");
              if (e === eo) return;
              eo = e;
              let t = ee / et,
                r = Math.tan(__mod_2253.cj9.degToRad(13)),
                a = .017 * Math.pow(1.8 / p(t, 1.05, 3), 2),
                o = p(Math.atan(.17746666666666666) + Math.atan((1 - 2 * ei) * r), .02, 1.2);
              d.aspect = t, d.rotation.set(-o, 0, 0), d.updateProjectionMatrix(), d.updateMatrixWorld(!0);
              let l = o + __mod_2253.cj9.degToRad(13);
              eu = p(l < Math.PI / 2 - .02 ? 3 / Math.tan(l) * .86 : .5, .4, 16);
              let n = r * t * 1.12,
                i = e => e * Math.cos(o) + 3 * Math.sin(o),
                u = e => i(e) * n,
                c = .5 * et / r / i(eu),
                v = p(.0165 * Math.min(et, .9 * ee), 5, 13) / c,
                f = e => {
                  let t = 0;
                  for (let r = eu; r <= 18; r += e) t += 2 * Math.floor(u(r) / e) + 1;
                  return t;
                },
                m = f(v);
              m > 11e4 && (v *= 1.02 * Math.sqrt(m / 11e4), m = f(v)), A.length < 3 * m && (A = new Float32Array(3 * Math.ceil(1.1 * m)), F = new __mod_2253.uWO(A, 3), T.setAttribute("iVoxel", F));
              let h = 0,
                x = 0;
              for (; eu <= 18 && h < m; e += v, x++) {
                let t = Math.floor(u(eu) / v);
                for (let r = -t; r <= t && h < m; r++) A[3 * h] = r * v, A[3 * h + 1] = eu, A[3 * h + 2] = (7919 * x + 104729 * r) % 997, h++;
              }
              F.needsUpdate = !0, T.instanceCount = h;
              let g = _.uniforms;
              g.uWave.value = p(ee / 1200, .5, 1), g.uCell.value = v, g.uCurveX.value = a, g.uCurveZ.value = 6e-4, g.uFocalPx.value = et * er * .5 / r, g.uViewport.value.set(ee * er, et * er), g.uNear.value = eu, g.uSpread.value = n, g.uFocusDepth.value = i(eu + (18 - eu) * .25);
              let w = u(18);
              H.set(-w, eu, w, 18);
              let b = (e, t) => {
                  let r = new __mod_2253.Pq0(e, -(e * e * a + t * t * 6e-4), -t).project(d);
                  return {
                    x: .5 * r.x + .5,
                    y: .5 * r.y + .5
                  };
                },
                y = b(0, 18),
                M = b(.8 * w, 18),
                k = M.x - .5;
              O.set(y.y, 0 !== k ? Math.max(0, (y.y - M.y) / (k * k)) : 0, 1.4);
            })(), a.setRenderTarget(X), a.setClearColor(0, 0), a.clear(), a.render(Q, d), !en) {
              for (let t of (R.material = K, Y)) K.uniforms.uThreshold.value = .32 * (X === X), K.uniforms.uSource.value = X.texture, K.uniforms.uTexel.value.set(1 / X.width, 1 / X.height), a.setRenderTarget(t), a.render(z, C), e = t;
              R.material = $;
              for (let e = Y.length - 1; e > 0; e--) $.uniforms.uSource.value = Y[e].texture, $.uniforms.uTexel.value.set(1 / Y[e].width, 1 / Y[e].height), a.setRenderTarget(Y[e - 1]), a.render(z, C);
            }
            G.uniforms.uTime.value = es, R.material = G, a.setRenderTarget(null), a.render(z, C);
          }
        },
        eA = e => {
          if (eh = 0, ew || eb) return;
          let t = ex && e - ex < 100 ? Math.min((e - ex) / 1e3, .05) : 1 / 60;
          if (ex = e, n || (es += .45 * t), _.uniforms.uTime.value = es, !n) {
            ec < 0 && (ec = e);
            let t = p((e - ec) / 2600, 0, 1);
            _.uniforms.uIntro.value = t, G.uniforms.uIntro.value = p(1.25 * t, 0, 1), ev = t >= 1;
          }
          for (let t of (ef < 0 && (ef = e + 900), _.uniforms.uMirrorOn.value = n ? 1 : p((e - ef) / 1600, 0, 1), eM.splice(0))) eS(t.x, t.z, t.amount, t.radius);
          if (ep) {
            ed += t;
            let e = 1,
              r = 0;
            for (; ed >= f && r < 4;) e = ez(), ed -= f, r++;
            r >= 4 && (ed = 0), r > 0 && (B.image.data = I, B.needsUpdate = !0), e < 4e-4 ? (em += t) > .6 && (ep = !1, I.fill(0), P.fill(0), E.fill(0), B.image.data = I, B.needsUpdate = !0, _.uniforms.uRippleOn.value = 0) : em = 0;
          }
          eT(), n || o.hidden ? ex = 0 : eR();
        },
        eF = e => {
          if (n) return;
          let t = eC(e.clientX, e.clientY),
            r = performance.now();
          if (!t) {
            ey = null;
            return;
          }
          if (ey) {
            let e = t.x - ey.x,
              a = t.z - ey.z,
              o = Math.hypot(e, a),
              l = .55 * p(.009 * (o / Math.max(.008, (r - ey.t) / 1e3)), 0, .07);
            if (l > 5e-4) {
              let t = Math.min(12, Math.max(1, Math.ceil(o / ((H.z - H.x) / 192 * 2))));
              for (let r = 1; r <= t; r++) eM.push({
                x: ey.x + e * r / t,
                z: ey.z + a * r / t,
                amount: l / Math.sqrt(t),
                radius: 2.2
              });
              eR();
            }
          }
          ey = {
            x: t.x,
            z: t.z,
            t: r
          };
        },
        eI = () => {
          ey = null;
        },
        eP = e => {
          var t;
          if (n || !e.isPrimary || "mouse" === e.pointerType && 0 !== e.button || (t = e.target, t?.closest?.("a,button,input,textarea,select,label,[role=button]"))) return;
          let r = eC(e.clientX, e.clientY);
          r && (eM.push({
            x: r.x,
            z: r.z,
            amount: .26,
            radius: 3.6
          }), eR());
        },
        eE = () => {
          ek() && !eh && eT();
        },
        eB = () => {
          ex = 0, eR();
        },
        ej = e => {
          e.preventDefault(), eb = !0, l.cancelAnimationFrame(eh), eh = 0;
        },
        eN = () => {
          eb = !1, eo = "", el = "", ek(), B.needsUpdate = !0, q.needsUpdate = !0, eT(), eR();
        },
        eq = () => {
          (() => {
            let t = Math.round(e.clientWidth),
              n = Math.round(e.clientHeight);
            if (t < 2 || n < 2) return ea = !1, !1;
            let i = e.getBoundingClientRect(),
              u = p(((() => {
                let t = e.getBoundingClientRect(),
                  a = l.getComputedStyle(r),
                  n = `${a.fontStyle} ${a.fontWeight} ${a.fontSize} ${a.fontFamily}`,
                  i = Number.parseFloat(a.fontSize) || 64,
                  u = r.firstChild,
                  s = Math.max(2, Math.round(.5 * t.width)),
                  c = Math.max(2, Math.round(.5 * t.height));
                if ((j.width !== s || j.height !== c) && (j.width = s, j.height = c, q.dispose()), !N || !u || 3 !== u.nodeType) return t.top + .5 * t.height;
                N.setTransform(1, 0, 0, 1, 0, 0), N.clearRect(0, 0, s, c), N.setTransform(.5, 0, 0, .5, 0, 0), N.font = n, N.fillStyle = "#fff", N.textBaseline = "alphabetic";
                let v = N.measureText("Hxg").fontBoundingBoxAscent || .92 * i,
                  f = o.createRange(),
                  p = u.data,
                  m = 0,
                  d = -1 / 0;
                for (let e of "undefined" != typeof Intl && "Segmenter" in Intl ? Array.from(new Intl.Segmenter(void 0, {
                  granularity: "grapheme"
                }).segment(p), e => e.segment) : Array.from(p)) {
                  if (/\S/.test(e)) {
                    f.setStart(u, m), f.setEnd(u, m + e.length);
                    let r = f.getClientRects()[0];
                    r && r.width > 0 && (N.fillText(e, r.left - t.left, r.top - t.top + v), d = Math.max(d, r.top + v));
                  }
                  m += e.length;
                }
                return f.detach(), q.needsUpdate = !0, Number.isFinite(d) ? d + Math.max(.5 * i, 36) : t.top + .5 * t.height;
              })() - i.top) / i.height, .25, .8),
              s = Math.min(l.devicePixelRatio || 1, 2),
              c = !ea || t !== ee || n !== et || s !== er || Math.abs(u - ei) > 5e-4;
            if (ea = !0, !c) return !0;
            ee = t, et = n, er = s, ei = u, a.setPixelRatio(er), a.setSize(ee, et, !1), X.setSize(Math.round(ee * er), Math.round(et * er));
            let v = Math.round(ee * er),
              f = Math.round(et * er);
            for (let e of Y) v = Math.max(1, Math.round(v / 2)), f = Math.max(1, Math.round(f / 2)), e.setSize(v, f);
            return eo = "", !0;
          })() && (eT(), eR());
        },
        eL = new ResizeObserver(eq),
        eU = new IntersectionObserver(([e]) => {
          eg = e.isIntersecting, ex = 0, eR();
        }, {
          rootMargin: "120px"
        }),
        eD = new MutationObserver(eE),
        eW = l.matchMedia("(prefers-color-scheme: dark)");
      return e.addEventListener("pointermove", eF), e.addEventListener("pointerdown", eP), e.addEventListener("pointerleave", eI), e.addEventListener("pointercancel", eI), o.addEventListener("visibilitychange", eB), i.addEventListener("webglcontextlost", ej), i.addEventListener("webglcontextrestored", eN), eD.observe(o.documentElement, {
        attributes: !0,
        attributeFilter: ["class", "style", "data-theme"]
      }), eW.addEventListener("change", eE), eL.observe(e), eL.observe(r), eU.observe(e), ek(), eq(), o.fonts?.ready.then(() => {
        ew || eq();
      }), {
        remap: eq,
        destroy: () => {
          for (let t of (ew = !0, l.cancelAnimationFrame(eh), eL.disconnect(), eU.disconnect(), eD.disconnect(), eW.removeEventListener("change", eE), e.removeEventListener("pointermove", eF), e.removeEventListener("pointerdown", eP), e.removeEventListener("pointerleave", eI), e.removeEventListener("pointercancel", eI), o.removeEventListener("visibilitychange", eB), i.removeEventListener("webglcontextlost", ej), i.removeEventListener("webglcontextrestored", eN), T.dispose(), S.dispose(), _.dispose(), K.dispose(), $.dispose(), G.dispose(), B.dispose(), q.dispose(), X.dispose(), Y)) t.dispose();
          a.dispose(), i.remove();
        }
      };
    }(e, a, o);
    return () => l?.destroy();
  }, []), <section ref={t} className="relative isolate flex min-h-screen w-full touch-pan-y flex-col overflow-hidden bg-white px-4 pb-8 pt-24 dark:bg-neutral-950 sm:px-6 sm:pb-10 lg:px-8 lg:pt-28"><div ref={r} aria-hidden="true" className="pointer-events-none absolute inset-0" /><motion.div variants={C} initial={!e && "hidden"} whileInView="show" viewport={{
      once: !0
    }} className="relative z-10 mx-auto flex w-full max-w-[1400px] flex-1 flex-col"><div className="flex flex-col items-center text-center"><motion.a variants={S} href="#" className="group inline-flex cursor-pointer items-center gap-2 rounded-full bg-neutral-950/[0.04] py-1.5 pl-3.5 pr-3 text-[13px] text-neutral-600 transition-colors duration-200 hover:bg-neutral-950/[0.07] hover:text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 dark:bg-white/[0.06] dark:text-neutral-400 dark:hover:bg-white/[0.1] dark:hover:text-white">Live SQL over streams is now in beta<ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" /></motion.a><h1 className="mt-10 flex flex-col items-center sm:mt-14"><motion.span variants={S} className="max-w-[22rem] text-balance text-[1.0625rem] leading-snug tracking-[-0.01em] text-neutral-500 sm:max-w-none sm:text-xl">Stream, store and query billions of events on</motion.span><motion.span ref={d} variants={z} className="mt-2 text-balance text-[clamp(3.25rem,10.5vw,10rem)] font-medium leading-[0.92] tracking-[-0.055em] text-neutral-950 dark:text-white sm:mt-3">one calm surface.</motion.span></h1></div><div className="min-h-[16rem] flex-1 sm:min-h-[18rem]" /><motion.div variants={S} className="flex flex-col gap-7 sm:gap-8 lg:flex-row lg:items-end lg:justify-between"><p className="max-w-[25rem] text-pretty text-[15px] leading-relaxed text-neutral-600 dark:text-neutral-400">Every event your product emits becomes a live table you can query in SQL. No clusters to size, no pipelines to babysit.</p><div className="flex flex-col gap-3 sm:flex-row sm:items-center"><a href="#" className="group inline-flex h-11 cursor-pointer items-center justify-center gap-2 rounded-full bg-neutral-950 px-5 text-sm font-medium text-white transition-colors duration-200 hover:bg-neutral-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200 dark:focus-visible:ring-offset-neutral-950">Start for free<ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" /></a><a href="#" className="inline-flex h-11 cursor-pointer items-center justify-center rounded-full bg-neutral-950/[0.05] px-5 text-sm font-medium text-neutral-900 backdrop-blur-sm transition-colors duration-200 hover:bg-neutral-950/[0.09] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:bg-white/[0.07] dark:text-white dark:hover:bg-white/[0.12] dark:focus-visible:ring-offset-neutral-950">Read the docs</a></div></motion.div></motion.div></section>;
}

export { R as Hero25 };
export default R;

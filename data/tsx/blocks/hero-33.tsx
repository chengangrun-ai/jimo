import { motion, AnimatePresence } from "motion/react";
import * as React from "react";
import * as __mod_2253 from "../_helpers/2253";
import * as __mod_50969 from "../_helpers/50969";
import * as __mod_12246 from "../_helpers/12246";
/**
 * Hero 33
 * Integration platform hero with a draggable knot of light and an email signup
 * slug: hero-33
 * category: Hero Section
 * export: Hero33
 * deps: lucide-react, motion, three
 * original: ts-tailwind/blocks/hero/hero-33.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import { ArrowRight } from "lucide-react";

let c = {
    trefoil: [2, 3],
    cinquefoil: [2, 5],
    septafoil: [2, 7],
    star: [3, 5],
    tangle: [3, 4],
    halo: [1, 0]
  },
  d = Object.keys(c),
  v = (e, t, o) => Math.min(o, Math.max(t, e)),
  f = (e, t) => Number.isFinite(e) ? e : t,
  m = new __mod_2253.Q1f(),
  h = e => {
    let t = e.trim().toLowerCase();
    if (!t || "transparent" === t || "none" === t || "auto" === t) return null;
    try {
      m.setStyle(t, __mod_2253.jf0);
    } catch {
      return null;
    }
    return [m.r, m.g, m.b];
  },
  p = e => e <= .04045 ? e / 12.92 : Math.pow((e + .055) / 1.055, 2.4),
  g = ([e, t, o]) => {
    let a = p(e),
      r = p(t),
      n = p(o),
      l = Math.cbrt(.4122214708 * a + .5363325363 * r + .0514459929 * n),
      i = Math.cbrt(.2119034982 * a + .6806995451 * r + .1073969566 * n),
      u = Math.cbrt(.0883024619 * a + .2817188376 * r + .6299787005 * n);
    return [.2104542553 * l + .793617785 * i - .0040720468 * u, 1.9779984951 * l - 2.428592205 * i + .4505937099 * u, .0259040371 * l + .7827717662 * i - .808675766 * u];
  },
  x = `
precision highp float;
uniform mat4 modelMatrix;
uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
uniform float uP;
uniform float uQ;
uniform float uLoop;
uniform float uWidth;
uniform float uTwists;
uniform float uPhase;
uniform float uTime;
uniform float uMotion;
uniform float uReveal;
uniform vec4 uWaves[6];
in vec3 position;
out vec3 vNormal;
out vec3 vTangent;
out vec3 vWorld;
out vec2 vUv;
out float vDepth;
out float vShown;

const float TAU = 6.28318530718;
const float PI = 3.14159265359;

vec3 knot(float t) {
  float rho = 1.0 + uLoop * cos(uQ * t);
  return vec3(rho * cos(uP * t), rho * sin(uP * t), uLoop * sin(uQ * t));
}

vec3 knotTangent(float t) {
  float cq = cos(uQ * t);
  float sq = sin(uQ * t);
  float cp = cos(uP * t);
  float sp = sin(uP * t);
  float rho = 1.0 + uLoop * cq;
  float drho = -uLoop * uQ * sq;
  return vec3(drho * cp - rho * uP * sp, drho * sp + rho * uP * cp, uLoop * uQ * cq);
}

float twistAt(float u) {
  float angle = PI * uTwists * u + uPhase + 0.5 * uMotion * sin(u * TAU * 2.0 + uTime * 0.15);
  for (int i = 0; i < 6; i++) {
    vec4 wave = uWaves[i];
    if (wave.z <= 0.0) continue;
    float travel = wave.y * 0.09;
    float ahead = fract(u - wave.x - travel + 0.5) - 0.5;
    float behind = fract(u - wave.x + travel + 0.5) - 0.5;
    float envelope = wave.z * smoothstep(0.0, 0.35, wave.y) * exp(-wave.y / 2.4);
    angle += PI * envelope * (exp(-ahead * ahead / 0.004) + exp(-behind * behind / 0.004));
  }
  return angle;
}

void main() {
  float u = position.x;
  float v = position.y;
  float t = u * TAU;
  vec3 center = knot(t);
  vec3 tangent = normalize(knotTangent(t));
  vec3 ring = vec3(cos(uP * t) * cos(uQ * t), sin(uP * t) * cos(uQ * t), sin(uQ * t));
  ring = normalize(ring - dot(ring, tangent) * tangent);
  vec3 side = cross(tangent, ring);
  float angle = twistAt(u);
  vec3 across = cos(angle) * ring + sin(angle) * side;
  float closing = smoothstep(0.88, 1.0, uReveal);
  float head = mix(smoothstep(uReveal, uReveal - 0.06, u), 1.0, closing);
  float tail = mix(smoothstep(0.0, 0.06, u), 1.0, closing);
  float drawn = uReveal >= 0.9999 ? 1.0 : head * tail;
  float breath = 1.0 - 0.2 * uMotion + 0.2 * uMotion * sin(u * TAU * 3.0 + uTime * 0.13);
  vec3 point = center + across * v * uWidth * breath * drawn;
  vec4 world = modelMatrix * vec4(point, 1.0);
  vWorld = world.xyz;
  vNormal = normalize(mat3(modelMatrix) * cross(tangent, across));
  vTangent = normalize(mat3(modelMatrix) * tangent);
  vUv = vec2(u, v);
  vShown = uReveal >= 0.9999 ? 1.0 : step(u, uReveal + 0.08 * closing);
  vec4 view = modelViewMatrix * vec4(point, 1.0);
  vDepth = -view.z;
  gl_Position = projectionMatrix * view;
}
`,
  w = `
precision highp float;
uniform vec3 cameraPosition;
uniform vec3 uLabA;
uniform vec3 uLabMid;
uniform vec3 uLabB;
uniform vec3 uLightDir;
uniform float uGlow;
uniform float uEdge;
uniform float uFold;
uniform float uSheen;
uniform float uThreads;
uniform float uDepth;
uniform float uFocus;
uniform float uFlow;
in vec3 vNormal;
in vec3 vTangent;
in vec3 vWorld;
in vec2 vUv;
in float vDepth;
in float vShown;
out vec4 fragColor;

const float TAU = 6.28318530718;

vec3 fromLab(vec3 lab) {
  vec3 lms = mat3(1.0, 1.0, 1.0, 0.3963377774, -0.1055613458, -0.0894841775, 0.2158037573, -0.0638541728, -1.291485548) * lab;
  lms = lms * lms * lms;
  return max(mat3(4.0767416621, -1.2684380046, -0.0041960863, -3.3077115913, 2.6097574011, -0.7034186147, 0.2309699292, -0.3413193965, 1.707614701) * lms, 0.0);
}

void main() {
  if (vShown < 0.5) discard;
  vec3 view = normalize(cameraPosition - vWorld);
  vec3 normal = normalize(vNormal);
  float facing = abs(dot(normal, view));
  float offset = vDepth - uFocus;
  float blur = clamp(abs(offset) * 0.35, 0.0, 1.0);
  float back = smoothstep(-0.4, 0.9, offset);
  float thick = min(1.0 / max(facing, 0.012), mix(uFold, 3.0, blur));
  float across = abs(vUv.y);
  float pixel = fwidth(vUv.y);
  float edgeWidth = max(mix(1.4 * pixel, 0.22, blur), 0.0001);
  float rim = exp(-pow((1.0 - across) / edgeWidth, 2.0)) * min(1.0, 2.0 * pixel / edgeWidth + 0.15);
  float body = 1.0 - smoothstep(1.0 - max(edgeWidth * 2.0, 0.03), 1.0, across);
  float along = 0.5 + 0.5 * cos(vUv.x * TAU * 2.0 + uFlow);
  vec3 lab = along < 0.5 ? mix(uLabA, uLabMid, along * 2.0) : mix(uLabMid, uLabB, along * 2.0 - 1.0);
  vec3 tint = fromLab(lab);
  float weave = uThreads * (1.0 - blur) * (1.0 - smoothstep(0.02, 0.05, pixel));
  float threads = mix(1.0, 0.65 + 0.35 * pow(0.5 + 0.5 * cos(vUv.y * 64.0), 4.0), weave);
  vec3 halfway = normalize(uLightDir + view);
  float slope = dot(normalize(vTangent), halfway);
  float sheen = pow(max(1.0 - slope * slope, 0.0), 320.0) * uSheen * body * (0.4 + 0.6 * across);
  vec3 bright = fromLab(vec3(max(lab.x, 0.86), lab.yz * 0.75));
  float layer = body * threads * (0.22 + 0.78 * across * across);
  vec3 color = tint * (layer * thick * uGlow + rim * uEdge * min(thick, 3.0)) + bright * sheen;
  color *= 1.0 - back * uDepth;
  fragColor = vec4(color, 1.0);
}
`,
  b = `
in vec3 position;
out vec2 vUv;
void main() {
  vUv = position.xy * 0.5 + 0.5;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`,
  M = `
precision highp float;
uniform sampler2D uSource;
uniform vec2 uTexel;
uniform float uThreshold;
in vec2 vUv;
out vec4 fragColor;
vec3 tap(vec2 d) { return texture(uSource, vUv + d * uTexel).rgb; }
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
  if (uThreshold > 0.0) {
    float peak = max(color.r, max(color.g, color.b));
    float knee = 0.6;
    float soft = clamp(peak - uThreshold + knee, 0.0, 2.0 * knee);
    soft = soft * soft / (4.0 * knee + 0.00001);
    color *= max(soft, peak - uThreshold) / max(peak, 0.00001);
  }
  fragColor = vec4(color, 1.0);
}
`,
  y = `
precision highp float;
uniform sampler2D uSource;
uniform vec2 uTexel;
in vec2 vUv;
out vec4 fragColor;
vec3 tap(vec2 d) { return texture(uSource, vUv + d * uTexel).rgb; }
void main() {
  vec3 color = tap(vec2(0.0)) * 4.0
    + (tap(vec2(-1.0, 0.0)) + tap(vec2(1.0, 0.0)) + tap(vec2(0.0, -1.0)) + tap(vec2(0.0, 1.0))) * 2.0
    + tap(vec2(-1.0, -1.0)) + tap(vec2(1.0, -1.0)) + tap(vec2(-1.0, 1.0)) + tap(vec2(1.0, 1.0));
  fragColor = vec4(color / 16.0, 1.0);
}
`,
  k = `
precision highp float;
uniform sampler2D uScene;
uniform sampler2D uBloom;
uniform vec3 uBackground;
uniform float uBloomStrength;
uniform float uGrain;
uniform float uTime;
uniform float uInk;
in vec2 vUv;
out vec4 fragColor;

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

vec3 encode(vec3 c) {
  c = max(c, 0.0);
  return mix(c * 12.92, 1.055 * pow(c, vec3(1.0 / 2.4)) - 0.055, step(0.0031308, c));
}

float hash(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * 0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}

void main() {
  vec3 emission = texture(uScene, vUv).rgb + texture(uBloom, vUv).rgb * uBloomStrength;
  float n = hash(gl_FragCoord.xy + fract(uTime * 13.0) * 911.0) - 0.5;
  float dither = (hash(gl_FragCoord.xy * 1.7 + 0.5) - 0.5) / 255.0;
  if (uInk > 0.5) {
    float peak = max(emission.r, max(emission.g, emission.b));
    vec3 hue = emission / max(peak, 0.0001);
    float cover = 1.0 - exp(-peak * 1.6);
    vec3 color = mix(uBackground, encode(hue * 0.62), cover);
    color += (n * uGrain * 0.06 + dither) * smoothstep(0.0, 0.05, cover);
    fragColor = vec4(clamp(color, 0.0, 1.0), 1.0);
    return;
  }
  vec3 light = encode(neutral(max(emission, 0.0)));
  vec3 color = 1.0 - (1.0 - uBackground) * (1.0 - light);
  float mask = smoothstep(0.0, 0.04, max(light.r, max(light.g, light.b)));
  color += (n * uGrain * 0.1 + dither) * mask;
  fragColor = vec4(clamp(color, 0.0, 1.0), 1.0);
}
`,
  T = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: .08,
        delayChildren: .15
      }
    }
  },
  L = {
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
        duration: .9,
        ease: [.16, 1, .3, 1]
      }
    }
  },
  S = e => e >= 1024 ? {
    size: 1.02,
    offsetX: .25,
    offsetY: .02
  } : {
    size: .74,
    offsetX: 0,
    offsetY: -.24
  };
function P() {
  let e = (0, __mod_50969.I)(),
    t = (0, React.useRef)(null),
    o = (0, React.useRef)(null),
    m = (0, React.useRef)(null),
    [p, P] = (0, React.useState)(""),
    [C, W] = (0, React.useState)(!1);
  return (0, React.useEffect)(() => {
    let e = t.current,
      a = o.current;
    if (!e || !a) return;
    let r = {
        current: {
          colors: ["#2f6bff", "#5ff2ff"],
          backgroundColor: "transparent",
          shape: "trefoil",
          ...S(e.clientWidth),
          ribbonWidth: .34,
          loop: .42,
          twists: 4,
          flowSpeed: .45,
          rotationSpeed: .35,
          tilt: 30,
          glow: 1,
          edges: 1,
          folds: 1,
          sheen: 1,
          threads: .2,
          depth: .6,
          parallax: .35,
          interactive: !0,
          draggable: !0,
          flip: 1,
          bloom: .6,
          grain: .2,
          intro: !0,
          paused: !1,
          dpr: 2,
          reduced: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        }
      },
      n = function (e, t, o) {
        let a,
          r = e.ownerDocument,
          n = r.defaultView ?? window,
          l = r.createElement("canvas");
        l.setAttribute("aria-hidden", "true"), l.style.cssText = "position:absolute;inset:0;width:100%;height:100%;display:block";
        try {
          a = new __mod_12246.WebGLRenderer({
            canvas: l,
            alpha: !1,
            antialias: !1,
            powerPreference: "high-performance"
          });
        } catch {
          return null;
        }
        t.appendChild(l), a.autoClear = !1;
        let i = a.extensions.has("EXT_color_buffer_float") || a.extensions.has("EXT_color_buffer_half_float") ? __mod_2253.ix0 : __mod_2253.OUM,
          m = new __mod_2253.qUd(-1, 1, 1, -1, -1, 1),
          p = new __mod_2253.LoY();
        p.setAttribute("position", new __mod_2253.qtW([-1, -1, 0, 3, -1, 0, -1, 3, 0], 3));
        let T = new __mod_2253.Z58(),
          L = new __mod_2253.eaF(p);
        L.frustumCulled = !1, T.add(L);
        let S = Array.from({
            length: 6
          }, () => new __mod_2253.IUQ(0, 0, 0, 0)),
          P = {
            uP: {
              value: 2
            },
            uQ: {
              value: 3
            },
            uLoop: {
              value: .42
            },
            uWidth: {
              value: .34
            },
            uTwists: {
              value: 4
            },
            uPhase: {
              value: 0
            },
            uTime: {
              value: 0
            },
            uMotion: {
              value: 1
            },
            uReveal: {
              value: 1
            },
            uWaves: {
              value: S
            },
            uLabA: {
              value: new __mod_2253.Pq0()
            },
            uLabMid: {
              value: new __mod_2253.Pq0()
            },
            uLabB: {
              value: new __mod_2253.Pq0()
            },
            uLightDir: {
              value: new __mod_2253.Pq0(-.5, .7, .9).normalize()
            },
            uGlow: {
              value: .07
            },
            uEdge: {
              value: 1.1
            },
            uFold: {
              value: 14
            },
            uSheen: {
              value: .15
            },
            uThreads: {
              value: 0
            },
            uDepth: {
              value: .6
            },
            uFocus: {
              value: 6
            },
            uFlow: {
              value: 0
            }
          },
          C = new __mod_2253.D$Q({
            glslVersion: __mod_2253.Wdf,
            vertexShader: x,
            fragmentShader: w,
            uniforms: P,
            blending: __mod_2253.bCz,
            blendEquation: __mod_2253.gO9,
            blendSrc: __mod_2253.qad,
            blendDst: __mod_2253.qad,
            transparent: !0,
            depthTest: !1,
            depthWrite: !1,
            side: __mod_2253.$EB
          }),
          W = new __mod_2253.LoY(),
          E = new __mod_2253.eaF(W, C);
        E.frustumCulled = !1;
        let z = new __mod_2253.Z58();
        z.add(E);
        let I = new __mod_2253.ubm(30, 1, .05, 100),
          j = e => new __mod_2253.nWS(1, 1, {
            type: i,
            format: __mod_2253.GWd,
            depthBuffer: !1,
            stencilBuffer: !1,
            minFilter: __mod_2253.k6q,
            magFilter: __mod_2253.k6q,
            generateMipmaps: !1,
            samples: e
          }),
          F = j(4),
          R = Array.from({
            length: 6
          }, () => j(0)),
          U = new __mod_2253.Pq0(.04, .04, .04),
          A = (e, t, o = !1) => new __mod_2253.D$Q({
            glslVersion: __mod_2253.Wdf,
            vertexShader: b,
            fragmentShader: e,
            uniforms: t,
            blending: o ? __mod_2253.EZo : __mod_2253.XIg,
            transparent: o,
            depthTest: !1,
            depthWrite: !1
          }),
          q = A(M, {
            uSource: {
              value: null
            },
            uTexel: {
              value: new __mod_2253.I9Y()
            },
            uThreshold: {
              value: 0
            }
          }),
          D = A(y, {
            uSource: {
              value: null
            },
            uTexel: {
              value: new __mod_2253.I9Y()
            }
          }, !0),
          N = A(k, {
            uScene: {
              value: F.texture
            },
            uBloom: {
              value: R[0].texture
            },
            uBackground: {
              value: U
            },
            uBloomStrength: {
              value: .1
            },
            uGrain: {
              value: .25
            },
            uTime: {
              value: 0
            },
            uInk: {
              value: 0
            }
          }),
          Y = 0,
          _ = 0,
          B = 1,
          X = 1,
          Q = 0,
          G = 0,
          O = 1e3 / 60,
          V = !1,
          H = "",
          $ = "",
          Z = !1,
          J = -10,
          K = 0,
          ee = 0,
          et = 0,
          eo = .4,
          ea = 0,
          er = 0,
          en = 0,
          el = 0,
          ei = 0,
          eu = 0,
          es = 0,
          ec = 0,
          ed = -.5,
          ev = .7,
          ef = null,
          em = .7,
          eh = -1,
          ep = 1,
          eg = 0,
          ex = 0,
          ew = !1,
          eb = !1,
          eM = !1,
          ey = null,
          ek = [],
          eT = new __mod_2253.Pq0(),
          eL = r.createElement("canvas").getContext("2d", {
            willReadFrequently: !0
          }),
          eS = () => {
            let t = o.current,
              a = h(t.backgroundColor) ?? (() => {
                if (!eL) return [.04, .04, .04];
                eL.clearRect(0, 0, 1, 1), eL.fillStyle = "#0a0a0a", eL.fillStyle = n.getComputedStyle(e).backgroundColor, eL.fillRect(0, 0, 1, 1);
                let [t, o, a] = eL.getImageData(0, 0, 1, 1).data;
                return [t / 255, o / 255, a / 255];
              })(),
              r = [a.join(","), t.colors[0], t.colors[1]].join("|");
            if (r === $) return;
            $ = r, Z = .2126 * a[0] + .7152 * a[1] + .0722 * a[2] > .55, U.set(a[0], a[1], a[2]);
            let l = g(h(t.colors[0]) ?? [.32, .15, 1]),
              i = g(h(t.colors[1]) ?? [1, .62, .99]);
            P.uLabA.value.set(l[0], l[1], l[2]), P.uLabB.value.set(i[0], i[1], i[2]), P.uLabMid.value.set((l[0] + i[0]) / 2, (l[1] + i[1]) / 2, (l[2] + i[2]) / 2), N.uniforms.uInk.value = +!!Z;
          },
          eP = () => {
            let e = o.current;
            return c[d.includes(e.shape) ? e.shape : "trefoil"];
          },
          eC = () => {
            let e = Math.max(1, Math.round(Y * B * X)),
              t = Math.max(1, Math.round(_ * B * X));
            F.setSize(e, t);
            for (let e of R) o = Math.max(1, Math.round(e / 2)), a = Math.max(1, Math.round(t / 2)), e.setSize(e, t);
          },
          eW = () => {
            let t = o.current,
              r = Math.round(e.clientWidth),
              l = Math.round(e.clientHeight);
            if (r < 2 || l < 2) return V = !1, !1;
            let i = Math.min(n.devicePixelRatio || 1, v(f(t.dpr, 2), .5, 3));
            return (!V || r !== Y || l !== _ || i !== B) && (V = !0, Y = r, _ = l, B = i, a.setPixelRatio(B), a.setSize(Y, _, !1), eC(), !0);
          },
          eE = () => {
            let e = o.current,
              t = v(f(e.loop, .42), 0, .7),
              a = v(f(e.ribbonWidth, .34), .02, .8),
              r = 1 + t + a,
              n = Y / Math.max(_, 1),
              l = Math.tan(30 * Math.PI / 360),
              i = r / (v(f(e.size, .72), .2, 3) * Math.min(1, n) * l);
            I.aspect = n, I.position.set(0, 0, i), I.near = Math.max(.05, i - 3 * r), I.far = i + 3 * r, I.updateProjectionMatrix(), E.position.set(2 * v(f(e.offsetX, 0), -1, 1) * i * l * n, -(2 * v(f(e.offsetY, 0), -1, 1)) * i * l, 0);
            let u = v(f(e.tilt, 32), -90, 90) * Math.PI / 180,
              s = e.reduced || e.paused ? 0 : 1;
            return E.rotation.set(-u + ea + eu + .08 * s * Math.sin(.1 * K), er + ei + .15 * s * Math.sin(.07 * K), eo, "XYZ"), E.updateMatrixWorld(), I.updateMatrixWorld(), P.uFocus.value = i, {
              loop: t,
              ribbonWidth: a
            };
          },
          ez = () => {
            if (!V) return;
            let e = o.current;
            performance.now() - J > 1e3 && (J = performance.now(), eS()), (() => {
              let [e, t] = eP(),
                o = `${e}:${t}`;
              if (o === H) return;
              H = o;
              let a = 700 * e + 160 * t + 200,
                r = new Float32Array((a + 1) * 75),
                n = 0;
              for (let e = 0; e <= a; e++) for (let t = 0; t <= 24; t++) r[n++] = e / a, r[n++] = t / 24 * 2 - 1, r[n++] = 0;
              let l = new Uint32Array(24 * a * 6);
              n = 0;
              for (let e = 0; e < a; e++) for (let t = 0; t < 24; t++) {
                let o = 25 * e + t,
                  a = o + 24 + 1;
                l[n++] = o, l[n++] = a, l[n++] = o + 1, l[n++] = o + 1, l[n++] = a, l[n++] = a + 1;
              }
              let i = new __mod_2253.LoY();
              i.setAttribute("position", new __mod_2253.THS(r, 3)), i.setIndex(new __mod_2253.THS(l, 1)), W.dispose(), W = i, E.geometry = i;
            })(), (() => {
              let e = o.current,
                [t, a] = eP(),
                {
                  loop: r,
                  ribbonWidth: n
                } = eE();
              P.uP.value = t, P.uQ.value = a, P.uLoop.value = r, P.uWidth.value = n, P.uTwists.value = v(Math.round(f(e.twists, 4)), 0, 12), P.uPhase.value = ee, P.uTime.value = K, P.uMotion.value = +!e.reduced, P.uReveal.value = ep, P.uFlow.value = et, P.uGlow.value = .07 * v(f(e.glow, 1), 0, 4), P.uEdge.value = 1.1 * v(f(e.edges, 1), 0, 4), P.uFold.value = 3 + 11 * v(f(e.folds, 1), 0, 3), P.uSheen.value = .15 * v(f(e.sheen, 1), 0, 4), P.uThreads.value = v(f(e.threads, 0), 0, 1), P.uDepth.value = v(f(e.depth, .6), 0, 1), P.uLightDir.value.set(ed, ev, .9).normalize();
              for (let e = 0; e < 6; e++) {
                let t = ek[e];
                t ? S[e].set(t.at, K - t.born, t.strength, 0) : S[e].set(0, 0, 0, 0);
              }
              N.uniforms.uGrain.value = v(f(e.grain, .25), 0, 1), N.uniforms.uTime.value = K;
            })(), a.setRenderTarget(F), a.setClearColor(0, 1), a.clear(), a.render(z, I);
            let t = v(f(e.bloom, .6), 0, 3) * (Z ? .5 : 1);
            if (t > .001) {
              for (let t of (L.material = q, R)) q.uniforms.uThreshold.value = .9 * (F === F), q.uniforms.uSource.value = F.texture, q.uniforms.uTexel.value.set(1 / F.width, 1 / F.height), a.setRenderTarget(t), a.render(T, m), e = t;
              L.material = D;
              for (let e = R.length - 1; e > 0; e--) D.uniforms.uSource.value = R[e].texture, D.uniforms.uTexel.value.set(1 / R[e].width, 1 / R[e].height), a.setRenderTarget(R[e - 1]), a.render(T, m);
            }
            N.uniforms.uBloomStrength.value = t / R.length, L.material = N, a.setRenderTarget(null), a.render(T, m);
          },
          eI = (e, t) => {
            if (ek.length >= 6) {
              let e = 0;
              for (let t = 1; t < ek.length; t++) ek[t].born < ek[e].born && (e = t);
              if (K - ek[e].born < 1.2) return;
              ek.splice(e, 1);
            }
            ek.push({
              at: e,
              born: K,
              strength: t
            });
          },
          ej = () => {
            eb || eM || !ew || eg || (eg = requestAnimationFrame(eF));
          },
          eF = e => {
            var t;
            if (eg = 0, eb || eM) return;
            let a = o.current;
            ex && e - ex < 100 && (t = e - ex, (O += (t - O) * .08) > 24 ? (Q++, G = 0) : O < 13 ? (G++, Q = 0) : (Q = 0, G = 0), Q > 45 && X > .6 ? (X = Math.max(.6, .8 * X), Q = 0, O = 1e3 / 60, eC()) : G > 240 && X < 1 && (X = Math.min(1, 1.15 * X), G = 0, eC()));
            let n = ex && e - ex < 100 ? Math.min(Math.max((e - ex) / 1e3, 0), .05) : 1 / 60;
            ex = e;
            let l = !a.reduced && !a.paused;
            if (l) {
              K += n;
              let e = v(f(a.flowSpeed, .5), 0, 3);
              ee += n * e * .4, et += n * e * .36, eo += n * v(f(a.rotationSpeed, .5), -3, 3) * .09, ey || (en += (-2.2 * ea - 2 * en) * n, el += (-2.2 * er - 2 * el) * n, ea += en * n, er += el * n);
            }
            if (a.intro && !a.reduced) {
              eh < 0 && (eh = e);
              let t = v((e - eh) / 1e3 / 2.6, 0, 1);
              ep = t >= 1 ? 1 : t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
            } else ep = 1;
            let i = a.reduced ? 1 : 1 - Math.exp(-n / .5);
            ei += (es - ei) * i, eu += (ec - eu) * i;
            let u = ef ?? -.5 + .3 * Math.sin(.09 * K),
              s = null === ef ? .7 : em,
              c = a.reduced ? 1 : 1 - Math.exp(-(2.5 * n));
            ed += (u - ed) * c, ev += (s - ev) * c;
            for (let e = ek.length - 1; e >= 0; e--) K - ek[e].born > 9 && ek.splice(e, 1);
            ez();
            let d = Math.abs(es - ei) > 1e-4 || Math.abs(ec - eu) > 1e-4 || Math.abs(u - ed) + Math.abs(s - ev) > 5e-4 || Math.abs(ea) + Math.abs(er) + Math.abs(en) + Math.abs(el) > 5e-4;
            (l || d || ep < 1 || null !== ey) && !r.hidden ? eg = requestAnimationFrame(eF) : ex = 0;
          },
          eR = e => {
            var t;
            let a = o.current;
            !e.isPrimary || (t = e.target) && "function" == typeof t.closest && t.closest("a,button,input,textarea,select,label,summary,[role=button],[contenteditable=true]") || "mouse" === e.pointerType && 0 !== e.button || (a.draggable || a.interactive) && ("mouse" === e.pointerType && e.preventDefault(), r.getSelection()?.removeAllRanges(), ey = {
              id: e.pointerId,
              x: e.clientX,
              y: e.clientY,
              lastX: e.clientX,
              lastY: e.clientY,
              time: performance.now(),
              moved: !1
            }, en = 0, el = 0, ej());
          },
          eU = t => {
            let a = o.current;
            if (ey && t.pointerId === ey.id) {
              let o = t.clientX - ey.lastX,
                r = t.clientY - ey.lastY;
              if (!ey.moved && Math.hypot(t.clientX - ey.x, t.clientY - ey.y) > 6 && (ey.moved = !0, a.draggable)) try {
                e.setPointerCapture(t.pointerId);
              } catch {
                ey.moved = !0;
              }
              if (ey.moved && a.draggable) {
                let t = performance.now(),
                  n = Math.max(e.clientHeight, 1),
                  l = o / n * Math.PI * 1.2,
                  i = r / n * Math.PI * 1.2;
                er += l, ea = v(ea + i, -1.4, 1.4);
                let u = Math.max((t - ey.time) / 1e3, .008);
                el = a.reduced ? 0 : v(l / u, -8, 8), en = a.reduced ? 0 : v(i / u, -8, 8), ey.time = t;
              }
              ey.lastX = t.clientX, ey.lastY = t.clientY, ej();
              return;
            }
            if ("touch" === t.pointerType) return;
            let r = e.getBoundingClientRect();
            if (r.width <= 0 || r.height <= 0) return;
            let n = (t.clientX - r.left) / r.width - .5,
              l = (t.clientY - r.top) / r.height - .5,
              i = v(f(a.parallax, .5), 0, 2);
            es = .44 * n * i, ec = .32 * l * i, a.interactive && (ef = 2.2 * n, em = -(2.2 * l)), ej();
          },
          eA = t => {
            if (!ey || t.pointerId !== ey.id) return;
            ey = null, e.hasPointerCapture(t.pointerId) && e.releasePointerCapture(t.pointerId), Math.abs(performance.now() - ey.time) > 120 && (en *= .2, el *= .2);
            let r = o.current;
            if (!ey.moved && r.interactive && !r.reduced && !r.paused) {
              let o = ((t, o) => {
                let a = e.getBoundingClientRect();
                if (a.width <= 0 || a.height <= 0) return null;
                let r = (t - a.left) / a.width * 2 - 1,
                  n = 1 - (o - a.top) / a.height * 2,
                  [l, i] = eP(),
                  {
                    loop: u
                  } = eE(),
                  s = a.width / a.height,
                  c = 1 / 0,
                  d = 0;
                for (let e = 0; e < 720; e++) {
                  let t = e / 720 * Math.PI * 2,
                    o = 1 + u * Math.cos(i * t);
                  eT.set(o * Math.cos(l * t), o * Math.sin(l * t), u * Math.sin(i * t)), eT.applyMatrix4(E.matrixWorld).project(I);
                  let a = Math.hypot((eT.x - r) * s, eT.y - n) + .02 * eT.z;
                  a < c && (c = a, d = e / 720);
                }
                return d;
              })(t.clientX, t.clientY);
              null !== o && eI(o, v(f(r.flip, 1), 0, 2));
            }
            ej();
          },
          eq = e => {
            ey && e.pointerId === ey.id && (ey = null), ej();
          },
          eD = e => {
            "touch" !== e.pointerType && (es = 0, ec = 0, ef = null, ej());
          },
          eN = () => {
            ex = 0, ej();
          },
          eY = e => {
            e.preventDefault(), eM = !0, cancelAnimationFrame(eg), eg = 0;
          },
          e_ = () => {
            eM = !1, $ = "", H = "", ej();
          },
          eB = new ResizeObserver(() => {
            eW() && (ez(), ej());
          }),
          eX = new IntersectionObserver(([e]) => {
            ew = e.isIntersecting, ex = 0, ej();
          }, {
            rootMargin: "120px"
          });
        return e.addEventListener("pointerdown", eR), e.addEventListener("pointermove", eU), e.addEventListener("pointerup", eA), e.addEventListener("pointercancel", eq), e.addEventListener("pointerleave", eD), r.addEventListener("visibilitychange", eN), l.addEventListener("webglcontextlost", eY), l.addEventListener("webglcontextrestored", e_), eB.observe(e), eX.observe(e), o.current.intro && !o.current.reduced && (ep = 0), eW(), eS(), {
          sync: () => {
            J = -10, eW(), ex = 0, !eg && ew && (ez(), ej());
          },
          flip: (e, t) => {
            let a = o.current;
            a.reduced || (eI(void 0 === e ? Math.random() : (e % 1 + 1) % 1, v(f(t ?? a.flip, 1), 0, 2)), ej());
          },
          spin: e => {
            o.current.reduced || (el = v(f(e ?? 4, 4), -8, 8), ej());
          },
          replay: () => {
            o.current.reduced || (eh = -1, ep = 0, ex = 0, ej());
          },
          destroy: () => {
            for (let t of (eb = !0, cancelAnimationFrame(eg), eB.disconnect(), eX.disconnect(), e.removeEventListener("pointerdown", eR), e.removeEventListener("pointermove", eU), e.removeEventListener("pointerup", eA), e.removeEventListener("pointercancel", eq), e.removeEventListener("pointerleave", eD), r.removeEventListener("visibilitychange", eN), l.removeEventListener("webglcontextlost", eY), l.removeEventListener("webglcontextrestored", e_), W.dispose(), C.dispose(), p.dispose(), q.dispose(), D.dispose(), N.dispose(), F.dispose(), R)) t.dispose();
            a.dispose(), l.remove();
          }
        };
      }(e, a, r);
    m.current = n;
    let l = new ResizeObserver(() => {
      Object.assign(r.current, S(e.clientWidth)), n?.sync();
    });
    l.observe(e);
    let i = window.matchMedia("(prefers-reduced-motion: reduce)"),
      p = () => {
        r.current.reduced = i.matches, n?.sync();
      };
    return i.addEventListener("change", p), () => {
      l.disconnect(), i.removeEventListener("change", p), n?.destroy(), m.current = null;
    };
  }, []), <section ref={t} className="relative isolate flex min-h-screen w-full cursor-grab touch-pan-y flex-col overflow-hidden bg-white px-4 pb-10 pt-6 text-neutral-950 active:cursor-grabbing dark:bg-neutral-950 dark:text-white sm:px-6 lg:px-8 lg:pb-12 lg:pt-24"><div ref={o} aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10" /><motion.div variants={T} initial={!e && "hidden"} whileInView="show" viewport={{
      once: !0
    }} className="mx-auto flex w-full max-w-[1400px] flex-1 flex-col lg:justify-center"><div aria-hidden="true" className="h-[min(22rem,84vw)] shrink-0 lg:hidden" /><div className="max-w-[31rem] cursor-auto xl:max-w-[38rem] [text-shadow:0_0_24px_rgba(255,255,255,0.9)] dark:[text-shadow:0_0_24px_rgba(10,10,10,0.9)]"><motion.h1 variants={L} className="text-balance text-[2.25rem] font-medium leading-[1.03] tracking-[-0.045em] sm:text-[3.25rem] xl:text-[4rem]">Your whole stack, tied into one flow.</motion.h1><motion.p variants={L} className="mt-5 max-w-[42ch] text-pretty text-base leading-relaxed text-neutral-600 dark:text-neutral-400">Connect your apps once and automate the busywork between them. No code required.</motion.p><motion.div variants={L} className="mt-8">{C ? <p role="status" className="flex h-12 items-center text-sm font-medium">You're on the list. Check your inbox for the next step.</p> : <form onSubmit={e => {
            e.preventDefault(), p.trim() && (W(!0), m.current?.flip(.5, 1.4));
          }} className="flex h-12 w-full max-w-[26rem] items-center gap-1 rounded-full bg-neutral-950/[0.06] p-1 pl-5 focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-neutral-950 dark:bg-white/[0.08] dark:focus-within:outline-white"><label htmlFor="hero-33-email" className="sr-only">Work email</label><input id="hero-33-email" type="email" required={!0} value={p} onChange={e => P(e.target.value)} placeholder="Work email" autoComplete="email" className="h-full min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-neutral-500" /><button type="submit" className="group inline-flex h-10 shrink-0 cursor-pointer items-center gap-1.5 rounded-full bg-neutral-950 px-5 text-sm font-medium text-white transition-colors duration-200 hover:bg-neutral-800 dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200">Start free<ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" /></button></form>}<p className="mt-3 text-sm text-neutral-500">Free for teams up to ten. No card needed.</p></motion.div></div></motion.div></section>;
}

export { P as Hero33 };
export default P;

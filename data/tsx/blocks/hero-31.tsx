import { motion, AnimatePresence } from "motion/react";
import * as React from "react";
import * as __mod_50969 from "../_helpers/50969";
import * as __mod_12246 from "../_helpers/12246";
import * as __mod_2253 from "../_helpers/2253";
/**
 * Hero 31
 * Eclipse trip hero with a time-lapse arc of the sun you can scrub through
 * slug: hero-31
 * category: Hero Section
 * export: Hero31
 * deps: lucide-react, motion, three
 * original: ts-tailwind/blocks/hero/hero-31.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import { ArrowRight } from "lucide-react";

let c = [{
    term: "Dates",
    value: "30 July to 3 August 2027"
  }, {
    term: "Group",
    value: "24 guests, two astronomers"
  }, {
    term: "From",
    value: "$4,800 per person"
  }],
  f = e => {
    let t = Number.parseInt(e.slice(1), 16);
    return [(t >> 16 & 255) / 255, (t >> 8 & 255) / 255, (255 & t) / 255];
  },
  m = e => e <= .04045 ? e / 12.92 : Math.pow((e + .055) / 1.055, 2.4),
  v = ([e, t, a]) => {
    let o = m(e),
      n = m(t),
      l = m(a),
      r = Math.cbrt(.4122214708 * o + .5363325363 * n + .0514459929 * l),
      i = Math.cbrt(.2119034982 * o + .6806995451 * n + .1073969566 * l),
      u = Math.cbrt(.0883024619 * o + .2817188376 * n + .6299787005 * l);
    return [.2104542553 * r + .793617785 * i - .0040720468 * u, 1.9779984951 * r - 2.428592205 * i + .4505937099 * u, .0259040371 * r + .7827717662 * i - .808675766 * u];
  },
  h = `
in vec3 position;
out vec2 vUv;
void main() {
  vUv = position.xy * 0.5 + 0.5;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`,
  d = `
precision highp float;
uniform vec2 uRes;
uniform float uTime;
uniform vec2 uCenter;
uniform vec2 uLight;
uniform float uSize;
uniform float uShape;
uniform float uSides;
uniform float uRound;
uniform float uRotation;
uniform float uWobble;
uniform float uLightAngle;
uniform float uLightScale;
uniform float uContrast;
uniform float uIntensity;
uniform float uReach;
uniform float uRim;
uniform float uSoft;
uniform float uInterior;
uniform float uStreaks;
uniform float uAmbient;
uniform float uColorAngle;
uniform float uBloomIn;
uniform float uHeat;
uniform vec3 uLabA;
uniform vec3 uLabB;
uniform vec3 uDeep;
uniform vec4 uFlares[6];
uniform float uSunRadius;
uniform float uSunGain;
uniform float uCorona;
uniform vec4 uPhases[12];
uniform float uFocus;
uniform vec3 uSun;
in vec2 vUv;
out vec4 fragColor;

const float TAU = 6.28318530718;
const float PI = 3.14159265359;

vec3 fromLab(vec3 lab) {
  vec3 lms = mat3(1.0, 1.0, 1.0, 0.3963377774, -0.1055613458, -0.0894841775, 0.2158037573, -0.0638541728, -1.291485548) * lab;
  lms = lms * lms * lms;
  return max(mat3(4.0767416621, -1.2684380046, -0.0041960863, -3.3077115913, 2.6097574011, -0.7034186147, 0.2309699292, -0.3413193965, 1.707614701) * lms, 0.0);
}

vec2 gradient(vec2 cell) {
  float angle = fract(sin(dot(cell, vec2(127.1, 311.7))) * 43758.5453) * TAU;
  return vec2(cos(angle), sin(angle));
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * f * (f * (f * 6.0 - 15.0) + 10.0);
  float a = dot(gradient(i), f);
  float b = dot(gradient(i + vec2(1.0, 0.0)), f - vec2(1.0, 0.0));
  float c = dot(gradient(i + vec2(0.0, 1.0)), f - vec2(0.0, 1.0));
  float d = dot(gradient(i + vec2(1.0, 1.0)), f - vec2(1.0, 1.0));
  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y) * 1.4;
}

float around(float angle, float scale, float t) {
  return noise(vec2(cos(angle), sin(angle)) * scale + vec2(t, -t * 0.7));
}

float polygon(vec2 p, float apothem, float sides) {
  float w = TAU / sides;
  float a = atan(p.y, p.x);
  float k = floor((a + 0.5 * w) / w);
  float c = cos(k * w);
  float s = sin(k * w);
  vec2 q = vec2(c * p.x + s * p.y, -s * p.x + c * p.y);
  float half_ = apothem * tan(PI / sides);
  return length(q - vec2(apothem, clamp(q.y, -half_, half_))) * sign(q.x - apothem);
}

float outline(float angle) {
  float r = 1.0;
  if (uShape > 0.5 && uShape < 1.5) {
    vec2 direction = vec2(cos(angle - uRotation), sin(angle - uRotation));
    float drift = 0.04 * sin(uTime * 0.11);
    vec2 first = vec2(-0.2 - drift, 0.06);
    vec2 second = vec2(0.46 + drift, -0.14);
    float t = 0.9;
    for (int i = 0; i < 6; i++) {
      vec2 q = direction * t;
      float a = length(q - first) - 0.74;
      float b = length(q - second) - 0.5;
      float h = clamp(0.5 + 0.5 * (b - a) / 0.3, 0.0, 1.0);
      t -= mix(b, a, h) - 0.3 * h * (1.0 - h);
    }
    r = t;
  } else if (uShape > 1.5) {
    float corner = uRound * 0.45;
    float apothem = cos(PI / uSides);
    vec2 direction = vec2(cos(angle - uRotation), sin(angle - uRotation));
    float t = 1.0;
    for (int i = 0; i < 5; i++) t -= polygon(direction * t, apothem - corner, uSides) - corner;
    r = t;
  }
  float sway = uShape > 1.5 ? 0.25 : 1.0;
  return r * (1.0 + uWobble * sway * around(angle, 1.2, uTime * 0.05));
}

void main() {
  vec2 p = (gl_FragCoord.xy - 0.5 * uRes) / uRes.y;
  float t = uTime;
  vec2 fromCenter = p - uCenter;
  float angle = atan(fromCenter.y, fromCenter.x);
  float radius = outline(angle) * uSize;
  float edge = (length(fromCenter) - radius) / uSize;
  vec2 fromLight = p - (uCenter + uLight * uSize);
  float lightAngle = atan(fromLight.y, fromLight.x);
  float beyond = (length(fromLight) - outline(lightAngle) * uSize * uLightScale) / uSize;
  float reach = max(uReach * uBloomIn, 0.05);
  float outside = max(beyond, 0.0);
  float spread = outside / (0.5 * reach);
  float corona = exp(-spread * spread) * 0.82 + exp(-outside / (0.9 * reach)) * 0.18;
  float facing = pow(max(0.5 + 0.5 * cos(angle - uLightAngle), 0.0), 1.5);
  float patches = mix(1.0 - uContrast, 1.0, facing) * (0.8 + 0.4 * (0.5 + 0.5 * around(angle, 1.4, t * 0.05)));
  float fine = around(lightAngle, 6.0, t * 0.03) * 0.7 + around(lightAngle, 13.0, t * 0.02) * 0.3;
  float streak = max(1.0 + uStreaks * fine * smoothstep(0.0, 0.3, beyond), 0.0);
  float visible = smoothstep(-0.5 * uSoft, uSoft, edge);
  float blend = 0.5 + 0.5 * cos(angle - uColorAngle + 0.4 * around(angle, 1.1, t * 0.04));
  vec3 lab = mix(uLabA, uLabB, blend);
  vec3 tint = fromLab(lab);
  vec3 hot = fromLab(vec3(max(lab.x, 0.93), lab.yz * 0.45));
  vec3 color = mix(tint, hot, uHeat * exp(-outside / (0.09 * reach)) * facing);
  color = mix(color, uDeep * 3.0, smoothstep(0.1, 1.0, outside / reach));
  float flare = 0.0;
  for (int i = 0; i < 6; i++) {
    vec4 f = uFlares[i];
    if (f.z <= 0.0) continue;
    float turn = atan(sin(angle - f.x), cos(angle - f.x));
    float grow = 1.0 - exp(-f.y / 0.6);
    float width = 0.22 + grow * 0.16;
    float plume = 0.06 + grow * 0.26;
    float envelope = f.z * smoothstep(0.0, 0.12, f.y) * exp(-f.y / 1.2);
    float arc = exp(-turn * turn / (width * width));
    flare += envelope * arc * exp(-max(edge, 0.0) / plume);
  }
  vec3 light = color * corona * patches * streak * visible * uIntensity * uBloomIn * uCorona;
  light += mix(tint, hot, 0.5) * flare * visible * uIntensity * 2.2;
  light += tint * exp(min(edge, 0.0) / max(0.08 * uRim, 0.002)) * (1.0 - visible) * patches * uIntensity * uBloomIn * 0.6 * smoothstep(-0.6, 0.0, beyond) * uCorona;
  float sunDistance = length(fromLight) / uSize;
  float limb = sqrt(max(1.0 - pow(min(sunDistance / uSunRadius, 1.0), 2.0), 0.0));
  float disc = 1.0 - smoothstep(uSunRadius - 0.006, uSunRadius + 0.006, sunDistance);
  light += uSun * (0.5 + 0.5 * limb) * disc * visible * uSunGain;
  float shade = 1.0 - visible;
  float aa = 1.5 / uRes.y;
  for (int i = 0; i < 12; i++) {
    vec4 phase = uPhases[i];
    vec2 q = p - phase.xy;
    float body = 1.0 - smoothstep(phase.z - aa, phase.z + aa, length(q));
    vec2 m = q - vec2(phase.w, -0.12 * phase.w) * phase.z;
    float cover = 1.0 - smoothstep(phase.z * 1.02 - aa, phase.z * 1.02 + aa, length(m));
    float lift = exp(-pow((float(i) - uFocus) / 0.55, 2.0));
    float rim = sqrt(max(1.0 - dot(q, q) / (phase.z * phase.z), 0.0));
    light += uSun * body * (1.0 - cover) * (0.55 + 0.45 * rim) * (0.95 + 1.5 * lift);
    shade = max(shade, body * cover);
  }
  float core = clamp(length(fromCenter) / max(radius, 0.0001), 0.0, 1.0);
  vec3 conic = fromLab(mix(uLabA, uLabB, 0.5 + 0.5 * cos(angle - uColorAngle * 0.7 + 1.0)));
  light += conic * uInterior * pow(core, 1.6) * (0.35 + 0.65 * (0.5 + 0.5 * around(angle, 0.9, t * 0.05))) * (1.0 - visible) * 0.6 * uBloomIn;
  float field = exp(-outside / (1.4 * max(uReach, 0.05)));
  float wide = exp(-outside / (2.6 * max(uReach, 0.05)));
  light += uDeep * uAmbient * mix(0.03, mix(0.08 * wide, 1.0, field), visible) * uBloomIn;
  fragColor = vec4(light, shade);
}
`,
  p = `
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
  g = `
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
  x = `
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
  vec4 scene = texture(uScene, vUv);
  vec3 emission = scene.rgb + texture(uBloom, vUv).rgb * uBloomStrength;
  float n = hash(gl_FragCoord.xy + fract(uTime * 13.0) * 911.0) - 0.5;
  float dither = (hash(gl_FragCoord.xy * 1.7 + 0.5) - 0.5) / 255.0;
  if (uInk > 0.5) {
    float peak = max(emission.r, max(emission.g, emission.b));
    vec3 hue = emission / max(peak, 0.0001);
    float cover = 1.0 - exp(-peak * 1.4);
    vec3 color = mix(uBackground, encode(hue * 0.62), cover);
    color = mix(color, vec3(0.045), scene.a * 0.97);
    color += (n * uGrain * 0.05 + dither) * smoothstep(0.0, 0.05, cover);
    fragColor = vec4(clamp(color, 0.0, 1.0), 1.0);
    return;
  }
  vec3 light = encode(neutral(max(emission, 0.0))) * 0.88;
  vec3 color = 1.0 - (1.0 - uBackground) * (1.0 - light);
  float mask = smoothstep(0.0, 0.03, max(light.r, max(light.g, light.b)));
  color += (n * uGrain * 0.07 + dither) * mask;
  fragColor = vec4(clamp(color, 0.0, 1.0), 1.0);
}
`,
  b = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: .08,
        delayChildren: .2
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
        duration: .9,
        ease: [.16, 1, .3, 1]
      }
    }
  };
function Hero31() {
  let e = (0, __mod_50969.I)(),
    t = (0, React.useRef)(null),
    a = (0, React.useRef)(null),
    w = (0, React.useRef)(null);
  return (0, React.useEffect)(() => {
    let e = t.current,
      o = a.current,
      n = w.current;
    if (!e || !o || !n) return;
    let l = function (e, t, a) {
      let o,
        n = e.ownerDocument,
        l = n.defaultView ?? window,
        r = n.createElement("canvas");
      r.setAttribute("aria-hidden", "true"), r.style.cssText = "position:absolute;inset:0;width:100%;height:100%;display:block";
      try {
        o = new __mod_12246.WebGLRenderer({
          canvas: r,
          alpha: !1,
          antialias: !1,
          powerPreference: "high-performance"
        });
      } catch {
        return null;
      }
      t.appendChild(r), o.autoClear = !1;
      let i = o.extensions.has("EXT_color_buffer_float") || o.extensions.has("EXT_color_buffer_half_float") ? __mod_2253.ix0 : __mod_2253.OUM,
        c = l.matchMedia("(prefers-reduced-motion: reduce)"),
        b = c.matches,
        y = new __mod_2253.qUd(-1, 1, 1, -1, -1, 1),
        w = new __mod_2253.LoY();
      w.setAttribute("position", new __mod_2253.qtW([-1, -1, 0, 3, -1, 0, -1, 3, 0], 3));
      let S = new __mod_2253.Z58(),
        M = new __mod_2253.eaF(w);
      M.frustumCulled = !1, S.add(M);
      let k = Array.from({
          length: 6
        }, () => new __mod_2253.IUQ(0, 0, 0, 0)),
        L = (e, t, a = !1) => new __mod_2253.D$Q({
          glslVersion: __mod_2253.Wdf,
          vertexShader: h,
          fragmentShader: e,
          uniforms: t,
          blending: a ? __mod_2253.EZo : __mod_2253.XIg,
          transparent: a,
          depthTest: !1,
          depthWrite: !1
        }),
        C = v(f("#ff8a1f")),
        R = v(f("#ff3d6e")),
        I = (([e, t, a]) => {
          let o = Math.pow(e + .3963377774 * t + .2158037573 * a, 3),
            n = Math.pow(e - .1055613458 * t - .0638541728 * a, 3),
            l = Math.pow(e - .0894841775 * t - 1.291485548 * a, 3);
          return [Math.max(0, 4.0767416621 * o - 3.3077115913 * n + .2309699292 * l), Math.max(0, -1.2684380046 * o + 2.6097574011 * n - .3413193965 * l), Math.max(0, -.0041960863 * o - .7034186147 * n + 1.707614701 * l)];
        })([.2, .85 * C[1], .85 * C[2]]),
        T = f("#ff7a18").map(m),
        z = Array.from({
          length: 12
        }, () => new __mod_2253.IUQ(0, 0, 0, 0)),
        A = {
          uRes: {
            value: new __mod_2253.I9Y(1, 1)
          },
          uTime: {
            value: 0
          },
          uCenter: {
            value: new __mod_2253.I9Y()
          },
          uLight: {
            value: new __mod_2253.I9Y()
          },
          uSize: {
            value: .27
          },
          uShape: {
            value: 0
          },
          uSides: {
            value: 6
          },
          uRound: {
            value: .2
          },
          uRotation: {
            value: 0
          },
          uWobble: {
            value: 0
          },
          uLightAngle: {
            value: -.6
          },
          uLightScale: {
            value: 1.04
          },
          uContrast: {
            value: .35
          },
          uIntensity: {
            value: 1.05
          },
          uReach: {
            value: .95
          },
          uRim: {
            value: .3
          },
          uSoft: {
            value: .006
          },
          uInterior: {
            value: 0
          },
          uStreaks: {
            value: .45
          },
          uAmbient: {
            value: .35
          },
          uColorAngle: {
            value: 0
          },
          uBloomIn: {
            value: 1
          },
          uHeat: {
            value: .65
          },
          uLabA: {
            value: new __mod_2253.Pq0(...C)
          },
          uLabB: {
            value: new __mod_2253.Pq0(...R)
          },
          uDeep: {
            value: new __mod_2253.Pq0(...I)
          },
          uFlares: {
            value: k
          },
          uSunRadius: {
            value: .975
          },
          uSunGain: {
            value: 1.1
          },
          uCorona: {
            value: 1
          },
          uPhases: {
            value: z
          },
          uFocus: {
            value: -9
          },
          uSun: {
            value: new __mod_2253.Pq0(...T)
          }
        },
        E = L(d, A),
        B = () => new __mod_2253.nWS(1, 1, {
          type: i,
          format: __mod_2253.GWd,
          depthBuffer: !1,
          stencilBuffer: !1,
          minFilter: __mod_2253.k6q,
          magFilter: __mod_2253.k6q,
          generateMipmaps: !1
        }),
        q = B(),
        P = Array.from({
          length: 5
        }, B),
        j = new __mod_2253.Pq0(.04, .04, .04),
        F = L(p, {
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
        _ = L(g, {
          uSource: {
            value: null
          },
          uTexel: {
            value: new __mod_2253.I9Y()
          }
        }, !0),
        N = L(x, {
          uScene: {
            value: q.texture
          },
          uBloom: {
            value: P[0].texture
          },
          uBackground: {
            value: j
          },
          uBloomStrength: {
            value: .1
          },
          uGrain: {
            value: .3
          },
          uTime: {
            value: 0
          },
          uInk: {
            value: 0
          }
        }),
        U = n.createElement("canvas").getContext("2d", {
          willReadFrequently: !0
        }),
        D = [],
        Y = {
          x: 0,
          y: 0,
          size: .27
        },
        X = {
          x: 0,
          y: 0,
          vx: 0,
          vy: 0,
          goalX: 0,
          goalY: 0
        },
        W = {
          left: 0,
          right: 1,
          top: 0,
          bottom: 1,
          active: !1,
          focus: -9,
          goal: -9
        },
        G = [],
        $ = null,
        H = 0,
        O = 0,
        Q = 1,
        V = !1,
        Z = "",
        J = 0,
        K = 0,
        ee = 0,
        et = 0,
        ea = !1,
        eo = !1,
        en = !1,
        el = !1,
        er = () => {
          if (!U) return !1;
          U.clearRect(0, 0, 1, 1), U.fillStyle = "#0a0a0a", U.fillStyle = l.getComputedStyle(e).backgroundColor, U.fillRect(0, 0, 1, 1);
          let [t, a, o] = U.getImageData(0, 0, 1, 1).data,
            n = `${t},${a},${o}`;
          return n !== Z && (Z = n, V = (.2126 * t + .7152 * a + .0722 * o) / 255 > .55, j.set(t / 255, a / 255, o / 255), N.uniforms.uInk.value = +!!V, !0);
        },
        ei = () => {
          let t = e.getBoundingClientRect(),
            o = a.getBoundingClientRect(),
            n = o.top - t.top,
            l = Math.max(o.height, 160),
            r = n + .36 * l,
            i = n + .97 * l,
            u = Math.max(.05 * H, 18),
            s = Math.min(.26 * l, .085 * H, .12 * O),
            c = Math.min(.021 * H, .03 * O, .07 * l),
            f = H / 2 - u - c,
            m = Math.max(i - r, 1),
            v = (f * f + m * m) / (2 * m),
            h = Math.asin(Math.min(f / v, 1)),
            d = Math.asin(Math.min(2.7 * s / v, .6 * h));
          Y.x = 0, Y.y = .5 - r / O, Y.size = s / O, G.length = 0;
          for (let e = 0; e < 12; e++) {
            let t = e < 6,
              a = t ? e : 11 - e,
              o = h - a * (h - d) / 5,
              n = H / 2 + (t ? -1 : 1) * v * Math.sin(o),
              l = r + v - v * Math.cos(o),
              i = (t ? -1 : 1) * (1.95 - 1.6 * a / 5);
            z[e].set((n - H / 2) / O, (O / 2 - l) / O, c / O, i), G.push(n);
          }
          !el && (el = !0, b || (X.x = -(2.2 * Y.size), X.y = .26 * Y.size)), W.left = G[0], W.right = G[11], W.top = r - 1.3 * s, W.bottom = i + 2.5 * c;
        },
        eu = () => {
          let t = Math.round(e.clientWidth),
            a = Math.round(e.clientHeight),
            n = Math.min(l.devicePixelRatio || 1, 2);
          if (t < 2 || a < 2) return !1;
          if (t === H && a === O && n === Q) return ei(), !0;
          H = t, O = a, Q = n, o.setPixelRatio(Q), o.setSize(H, O, !1);
          let r = Math.max(1, Math.round(H * Q * .75)),
            i = Math.max(1, Math.round(O * Q * .75));
          q.setSize(r, i), A.uRes.value.set(r, i);
          for (let e of P) u = Math.max(1, Math.round(r / 2)), s = Math.max(1, Math.round(i / 2)), e.setSize(r, i);
          return ei(), !0;
        },
        es = () => {
          if (!H) return;
          (() => {
            let e,
              t = Math.hypot(X.x, X.y) / Y.size;
            A.uCenter.value.set(Y.x + X.x, Y.y + X.y), A.uLight.value.set(-X.x / Y.size, -X.y / Y.size), A.uSize.value = Y.size, A.uLightAngle.value = -.6 + .3 * Math.sin(.07 * J), A.uColorAngle.value = -1 + K, A.uTime.value = J, A.uCorona.value = 1 - (e = Math.min(1, Math.max(0, (t - .015) / .14500000000000002))) * e * (3 - 2 * e), A.uFocus.value = W.focus, A.uAmbient.value = V ? .1 : .35;
            for (let e = 0; e < 6; e++) {
              let t = D[e];
              t ? k[e].set(t.angle, J - t.born, t.strength, 0) : k[e].set(0, 0, 0, 0);
            }
            N.uniforms.uTime.value = J;
          })(), M.material = E, o.setRenderTarget(q), o.render(S, y);
          let e = V ? .2 : .38;
          for (let e of (M.material = F, P)) F.uniforms.uThreshold.value = .85 * (q === q), F.uniforms.uSource.value = q.texture, F.uniforms.uTexel.value.set(1 / q.width, 1 / q.height), o.setRenderTarget(e), o.render(S, y), t = e;
          M.material = _;
          for (let e = P.length - 1; e > 0; e--) _.uniforms.uSource.value = P[e].texture, _.uniforms.uTexel.value.set(1 / P[e].width, 1 / P[e].height), o.setRenderTarget(P[e - 1]), o.render(S, y);
          N.uniforms.uBloomStrength.value = e / P.length, M.material = N, o.setRenderTarget(null), o.render(S, y);
        },
        ec = () => {
          eo || en || !ea || ee || (ee = l.requestAnimationFrame(ef));
        };
      function ef(e) {
        if (ee = 0, eo || en) return;
        let t = et && e - et < 100 ? Math.min((e - et) / 1e3, .05) : 1 / 60;
        if (et = e, H || eu(), b || (J += t, K += .04 * t), W.focus += (W.goal - W.focus) * (b ? 1 : 1 - Math.exp(-t / .12)), b) X.x = X.goalX, X.y = X.goalY, X.vx = 0, X.vy = 0;else {
          let e = W.active ? 9 : 4.6,
            a = W.active ? 1 : .52,
            o = Math.max(1, Math.ceil(240 * t)),
            n = t / o;
          for (let t = 0; t < o; t++) X.vx += (e * e * (X.goalX - X.x) - 2 * a * e * X.vx) * n, X.vy += (e * e * (X.goalY - X.y) - 2 * a * e * X.vy) * n, X.x += X.vx * n, X.y += X.vy * n;
        }
        for (let e = D.length - 1; e >= 0; e--) J - D[e].born > 4 && D.splice(e, 1);
        es();
        let a = Math.abs(W.goal - W.focus) > .01 || Math.abs(X.goalX - X.x) + Math.abs(X.goalY - X.y) > 1e-4 || Math.abs(X.vx) + Math.abs(X.vy) > 1e-4;
        n.hidden || b && !a ? et = 0 : ec();
      }
      let em = e => !!e?.closest?.("a,button,input,textarea,select,label,[role=button]"),
        ev = () => {
          W.active = !1, W.goal = -9, X.goalX = 0, X.goalY = 0, ec();
        },
        eh = t => {
          if ("touch" === t.pointerType && 0 === t.buttons) return;
          let a = e.getBoundingClientRect(),
            o = t.clientX - a.left,
            n = t.clientY - a.top;
          if (!(o > W.left - 40 && o < W.right + 40) || n < W.top || n > W.bottom || em(t.target)) {
            W.active && ev();
            return;
          }
          let l = (Math.min(1, Math.max(0, (o - W.left) / Math.max(W.right - W.left, 1))) - .5) * 2,
            r = Math.sign(l) * Math.pow(Math.abs(l), .85) * 2.1;
          W.active = !0, X.goalX = r * Y.size, X.goalY = -.12 * r * Y.size;
          let i = 0;
          G.forEach((e, t) => {
            Math.abs(e - o) < Math.abs(G[i] - o) && (i = t);
          }), W.goal = .12 > Math.abs(l) ? -9 : i, ec();
        },
        ed = e => {
          !e.isPrimary || em(e.target) || ("mouse" !== e.pointerType || 0 === e.button) && ($ = {
            id: e.pointerId,
            x: e.clientX,
            y: e.clientY,
            time: l.performance.now()
          });
        },
        ep = t => {
          let a;
          if ($ = null, "touch" === t.pointerType && ev(), !$ || $.id !== t.pointerId || b || Math.hypot(t.clientX - $.x, t.clientY - $.y) > 10 || l.performance.now() - $.time > 600) return;
          let n = (a = e.getBoundingClientRect(), {
            x: (t.clientX - a.left - a.width / 2) / a.height,
            y: (a.top + a.height / 2 - t.clientY) / a.height
          });
          D.length >= 6 && D.shift(), D.push({
            angle: Math.atan2(n.y - Y.y - X.y, n.x - Y.x - X.x),
            born: J,
            strength: 1
          }), ec();
        },
        eg = () => {
          $ = null, ev();
        },
        ex = () => {
          ev();
        },
        eb = () => {
          er() && (et = 0, !ee && ea && es(), ec());
        },
        ey = () => {
          b = c.matches, et = 0, ec();
        },
        ew = () => {
          et = 0, ec();
        },
        eS = e => {
          e.preventDefault(), en = !0, l.cancelAnimationFrame(ee), ee = 0;
        },
        eM = () => {
          en = !1, Z = "", er(), ec();
        },
        ek = new ResizeObserver(() => {
          eu() && (et = 0, !ee && ea && es(), ec());
        }),
        eL = new IntersectionObserver(([e]) => {
          ea = e.isIntersecting, et = 0, ec();
        }, {
          rootMargin: "120px"
        }),
        eC = new MutationObserver(eb),
        eR = l.matchMedia("(prefers-color-scheme: dark)");
      return e.addEventListener("pointerdown", ed), e.addEventListener("pointermove", eh), e.addEventListener("pointerup", ep), e.addEventListener("pointercancel", eg), e.addEventListener("pointerleave", ex), n.addEventListener("visibilitychange", ew), r.addEventListener("webglcontextlost", eS), r.addEventListener("webglcontextrestored", eM), c.addEventListener("change", ey), eR.addEventListener("change", eb), eC.observe(n.documentElement, {
        attributes: !0,
        attributeFilter: ["class", "style", "data-theme"]
      }), ek.observe(e), ek.observe(a), eL.observe(e), er(), eu(), {
        destroy: () => {
          eo = !0, l.cancelAnimationFrame(ee), e.removeEventListener("pointerdown", ed), e.removeEventListener("pointermove", eh), e.removeEventListener("pointerup", ep), e.removeEventListener("pointercancel", eg), e.removeEventListener("pointerleave", ex), n.removeEventListener("visibilitychange", ew), r.removeEventListener("webglcontextlost", eS), r.removeEventListener("webglcontextrestored", eM), c.removeEventListener("change", ey), eR.removeEventListener("change", eb), eC.disconnect(), ek.disconnect(), eL.disconnect(), q.dispose(), P.forEach(e => e.dispose()), [E, F, _, N].forEach(e => e.dispose()), w.dispose(), o.dispose(), r.remove();
        }
      };
    }(e, o, n);
    return () => l?.destroy();
  }, []), <section ref={t} className="relative isolate flex min-h-screen w-full flex-col overflow-hidden bg-white px-4 pb-8 pt-6 text-neutral-950 dark:bg-neutral-950 dark:text-white sm:px-6 lg:px-8 lg:pb-10 lg:pt-16"><div ref={a} aria-hidden="true" className="absolute inset-0 -z-10" /><motion.div variants={b} initial={!e && "hidden"} whileInView="show" viewport={{
      once: !0
    }} className="mx-auto flex w-full max-w-[1400px] flex-1 flex-col items-center text-center"><div ref={w} aria-hidden="true" className="h-[min(19rem,74vw)] w-full shrink-0 sm:h-[44vh]" /><motion.h1 variants={y} className="mt-4 max-w-[12ch] text-balance text-[2.5rem] font-medium leading-[1.02] tracking-[-0.045em] sm:max-w-none sm:text-6xl xl:text-[4.75rem]">Six minutes of darkness.</motion.h1><motion.p variants={y} className="mt-5 max-w-[38ch] text-pretty text-base leading-relaxed text-neutral-600 dark:text-neutral-300">Four nights on the West Bank of Luxor, with the best seats for totality on 2 August 2027.</motion.p><motion.div variants={y} className="mt-8 flex flex-row items-center gap-6"><a href="#" className="inline-flex h-12 items-center justify-center rounded-full bg-neutral-950 px-7 text-sm font-medium text-white transition-colors duration-200 hover:bg-neutral-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950 dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200 dark:focus-visible:outline-white">Reserve a place</a><a href="#" className="group inline-flex h-12 items-center gap-2 rounded-full text-sm font-medium text-neutral-700 transition-colors duration-200 hover:text-neutral-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current dark:text-neutral-300 dark:hover:text-white">See the itinerary<ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" /></a></motion.div><motion.dl variants={y} className="mt-10 grid w-full grid-cols-1 gap-3 text-sm sm:mt-auto sm:grid-cols-3 sm:pt-10">{c.map((e, t) => <div className={`flex justify-center gap-2 ${0 === t ? "sm:justify-start" : 2 === t ? "sm:justify-end" : ""}`}><dt className="text-neutral-500">{e.term}</dt><dd className="text-neutral-900 dark:text-neutral-200">{e.value}</dd></div>)}</motion.dl></motion.div></section>;
}

export default Hero31;

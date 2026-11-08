import { motion, AnimatePresence } from "motion/react";
import * as React from "react";
import * as __mod_50969 from "../_helpers/50969";
import * as __mod_12246 from "../_helpers/12246";
import * as __mod_2253 from "../_helpers/2253";
/**
 * Hero 29
 * Analytics hero with a light vortex funnel that spills visitors at each drop-off
 * slug: hero-29
 * category: Hero Section
 * export: Hero29
 * deps: lucide-react, motion, three
 * original: ts-tailwind/blocks/hero/hero-29.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import { ArrowRight } from "lucide-react";

let c = [{
    name: "Visited pricing",
    count: 48210,
    height: .46
  }, {
    name: "Started a trial",
    count: 6932,
    height: .34
  }, {
    name: "Invited a teammate",
    count: 3118,
    height: .23
  }, {
    name: "Paid",
    count: 1284,
    height: .12
  }],
  f = 2 * Math.PI,
  v = e => {
    let t = Number.parseInt(e.slice(1), 16);
    return [(t >> 16 & 255) / 255, (t >> 8 & 255) / 255, (255 & t) / 255];
  },
  m = (e, t, a) => Math.min(a, Math.max(t, e)),
  h = (e, t, a) => {
    let o = m((a - e) / (t - e), 0, 1);
    return o * o * (3 - 2 * o);
  },
  d = (e, t) => (e % t + t) % t,
  p = e => e <= .04045 ? e / 12.92 : Math.pow((e + .055) / 1.055, 2.4),
  x = ([e, t, a]) => {
    let o = p(e),
      l = p(t),
      r = p(a),
      i = Math.cbrt(.4122214708 * o + .5363325363 * l + .0514459929 * r),
      n = Math.cbrt(.2119034982 * o + .6806995451 * l + .1073969566 * r),
      u = Math.cbrt(.0883024619 * o + .2817188376 * l + .6299787005 * r);
    return [.2104542553 * i + .793617785 * n - .0040720468 * u, 1.9779984951 * i - 2.428592205 * n + .4505937099 * u, .0259040371 * i + .7827717662 * n - .808675766 * u];
  },
  g = `
uniform vec2 uResolution;
uniform vec2 uPrincipal;
uniform float uFocal;
uniform vec3 uCamPos;
uniform vec3 uCamUp;
uniform vec3 uCamFwd;
uniform float uSpinPhase;
uniform float uOuter;
uniform float uWaist;
uniform float uTop;
uniform vec3 uLabA;
uniform vec3 uLabB;
uniform vec3 uHover;
uniform vec4 uSwells[6];
uniform float uWaveTime;
uniform float uActive;
uniform vec4 uHeights;
uniform vec4 uFocus;
uniform vec4 uSurvive;
uniform vec3 uLeakLab;
uniform float uRadial;

vec3 labToLinear(vec3 lab) {
  float l = lab.x + 0.3963377774 * lab.y + 0.2158037573 * lab.z;
  float m = lab.x - 0.1055613458 * lab.y - 0.0638541728 * lab.z;
  float s = lab.x - 0.0894841775 * lab.y - 1.2914855480 * lab.z;
  l = l * l * l;
  m = m * m * m;
  s = s * s * s;
  return max(vec3(
    4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s,
    -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s,
    -0.0041960863 * l - 0.7034186147 * m + 1.7076147010 * s
  ), 0.0);
}

vec3 toView(vec3 p) {
  vec3 d = p - uCamPos;
  return vec3(d.x, dot(d, uCamUp), dot(d, uCamFwd));
}

vec2 toScreen(vec3 v) {
  return uPrincipal + uFocal * v.xy / max(v.z, 0.05);
}

vec3 disturb(vec3 p, out float agitation, out float scatter) {
  agitation = 0.0;
  scatter = 0.0;
  if (uActive < 0.5) return p;
  float h = p.y;
  float wall = smoothstep(0.02, 0.16, h);
  float g = (h - uHover.x) / uHover.z;
  float swell = uHover.y * exp(-g * g);
  float drift = swell;
  for (int k = 0; k < 6; k++) {
    vec4 pulse = uSwells[k];
    if (pulse.z <= 0.0) continue;
    float age = uWaveTime - pulse.y;
    if (age < 0.0 || age > 7.0) continue;
    float q = (h - pulse.x - 0.3 * age) / 0.2;
    swell += pulse.z * smoothstep(0.0, 0.45, age) * exp(-age / 1.8) * exp(-q * q);
    drift += pulse.z * smoothstep(0.0, 0.6, age) * exp(-age / 2.4) * exp(-q * q * 0.6);
  }
  agitation = swell * wall;
  scatter = drift * wall;
  return vec3(p.x * (1.0 + agitation), p.y, p.z * (1.0 + agitation));
}

float envelope(float r, float h) {
  float ground = 1.0 - smoothstep(0.0, 0.04, h);
  float reachOut = clamp((r - uWaist) / max(uOuter - uWaist, 1e-3), 0.0, 1.0);
  float rim = pow(1.0 - reachOut, 2.2) * 0.75;
  float crown = 1.0 - smoothstep(uTop * 0.9, uTop, h);
  return mix(1.0, rim, ground) * crown;
}
`,
  w = `
in vec4 aStrand;
in vec2 aSample;
uniform sampler2D uCurve;
uniform sampler2D uLight;
uniform float uPixelRatio;
uniform float uHead;
uniform float uLineWidth;
uniform float uSheath;
uniform float uDefocus;
uniform float uLimb;
uniform float uRim;
uniform float uCorner;
uniform float uBack;
uniform float uEnergy;
uniform float uInk;
${g}
out float vDist;
out float vCore;
out float vHalo;
out vec3 vColor;
out float vGain;

vec4 curveAt(float j) {
  return texelFetch(uCurve, ivec2(int(j), 0), 0);
}

vec3 place(vec4 c) {
  float r = c.x * (1.0 + aStrand.y) * uRadial;
  float th = aStrand.x + uSpinPhase + c.z * (1.0 + aStrand.z);
  return vec3(cos(th) * r, c.y, sin(th) * r);
}

vec4 lightAt(float tau, float row) {
  float k = min(uHead - tau * 240.0, floor(uHead));
  float k0 = floor(k);
  float f = k - k0;
  int y = int(row + 0.5);
  vec4 a = texelFetch(uLight, ivec2(int(mod(k0, 248.0)), y), 0);
  vec4 b = texelFetch(uLight, ivec2(int(mod(k0 + 1.0, 248.0)), y), 0);
  return mix(a, b, f);
}

void main() {
  float j = aSample.x;
  vec4 c1 = curveAt(j);
  float agitation;
  float scatter;
  float spare;
  vec3 w1 = disturb(place(c1), agitation, scatter);
  vec3 v1 = toView(w1);
  vec2 s0 = toScreen(toView(disturb(place(curveAt(max(j - 1.0, 0.0))), spare, spare)));
  vec2 s1 = toScreen(v1);
  vec2 s2 = toScreen(toView(disturb(place(curveAt(min(j + 1.0, 640.0))), spare, spare)));
  vec2 tangent = normalize(s2 - s0 + vec2(1e-5, 0.0));
  vec2 normal = vec2(-tangent.y, tangent.x);
  float radial = length(w1.xz);
  float facing = clamp(0.5 + 0.5 * w1.z / max(radial, 1e-3), 0.0, 1.0);
  float blur = 1.0 + uDefocus * 3.0 * (1.0 - facing) * (1.0 - facing);
  float core = uLineWidth * uPixelRatio * mix(0.5, 1.0, facing) * 0.5 * blur;
  float halo = uSheath * 4.0 * uPixelRatio * mix(0.6, 1.0, facing) * sqrt(blur);
  float reach = max(core * 2.4, halo * 2.2) + 1.5;
  vec2 position2 = s1 + normal * aSample.y * reach;
  float sideways = 1.0 - abs(w1.z) / max(radial, 1e-3);
  float wall = smoothstep(0.02, 0.1, c1.y);
  float limb = 1.0 + uLimb * wall * pow(sideways, 3.0);
  float collar = (c1.y - uCorner * 0.45) / (uCorner * 0.75);
  limb += uRim * exp(-collar * collar);
  vDist = aSample.y * reach;
  vCore = core;
  vHalo = halo;

  vec4 light = lightAt(1.0 - c1.w, aStrand.w);
  float amount = max(light.x, 0.0);
  float hue = clamp(light.y / max(amount, 1e-3), 0.0, 1.0);
  float heat = clamp(light.z / max(amount, 1e-3), 0.0, 1.0);
  float rise = smoothstep(0.0, uTop * 0.85, c1.y);
  float tone = clamp(rise * 0.85 + (hue - 0.5) * 0.4 + 0.08, 0.0, 1.0);
  vec3 base = labToLinear(mix(uLabA, uLabB, smoothstep(0.0, 1.0, tone)));
  vec4 gap = (vec4(c1.y) - uHeights) / 0.03;
  float ring = clamp(dot(uFocus, exp(-gap * gap)), 0.0, 1.0) * wall;
  base = mix(base, labToLinear(uLeakLab), ring);
  vec3 glowTint = mix(base, vec3(1.0, 0.96, 1.0), heat * 0.6);
  vec3 inkTint = mix(base, labToLinear(vec3(uLabA.x * 0.6, uLabA.yz * 1.15)), heat * 0.6);
  vColor = mix(mix(glowTint, labToLinear(uLeakLab), ring), mix(inkTint, labToLinear(uLeakLab), ring), uInk);
  float strain = 1.0 + 1.4 * agitation;
  vGain = (1.0 + ring * 1.6) * (0.12 + amount) * envelope(c1.x, c1.y) * mix(uBack, 1.0, facing) * limb * strain * (1.0 + uEnergy * 0.15) / blur;
  gl_Position = vec4(position2 / uResolution * 2.0 - 1.0, 0.0, 1.0);
}
`,
  b = `
precision highp float;
uniform float uCore;
uniform float uSheathGain;
in float vDist;
in float vCore;
in float vHalo;
in vec3 vColor;
in float vGain;
out vec4 fragColor;

void main() {
  float sigma = max(vCore, 0.55);
  float d = vDist / sigma;
  float core = exp(-d * d) * min(vCore / 0.55, 1.0);
  float h = vDist / max(vHalo, 0.5);
  float sheath = exp(-h * h) * uSheathGain;
  float energy = (core + sheath) * vGain * uCore;
  fragColor = vec4(vColor * energy, energy);
}
`,
  y = `
in vec4 aDust;
uniform sampler2D uTable;
uniform float uPixelRatio;
uniform float uFlow;
uniform float uTime;
uniform float uSize;
uniform float uBack;
uniform float uEnergy;
uniform float uInk;
${g}
out vec3 vColor;
out float vGain;

void main() {
  float tau = fract(aDust.y - uFlow * (0.25 + 0.2 * aDust.z));
  float x = tau * 1023.0;
  float i0 = floor(x);
  float f = x - i0;
  vec4 a = texelFetch(uTable, ivec2(int(i0), 0), 0);
  vec4 b = texelFetch(uTable, ivec2(int(min(i0 + 1.0, 1023.0)), 0), 0);
  vec3 c = mix(a.xyz, b.xyz, f);
  float lift = (fract(aDust.w * 13.71) - 0.5) * 0.1;
  float u = fract(aDust.w * 3.17 + 0.13);
  float exit = -1.0;
  float marked = 0.0;
  if (u > uSurvive.y) {
    exit = uHeights.y;
    marked = uFocus.y;
  } else if (u > uSurvive.z) {
    exit = uHeights.z;
    marked = uFocus.z;
  } else if (u > uSurvive.w) {
    exit = uHeights.w;
    marked = uFocus.w;
  }
  float gone = exit < 0.0 ? 0.0 : clamp((exit - c.y) / 0.16, 0.0, 1.0);
  float r = c.x * (1.0 + lift) * (1.0 + gone * gone * 3.2) * uRadial;
  float height = c.y + (exit - c.y) * gone * 0.9 - gone * gone * (0.03 + 0.09 * fract(aDust.w * 7.9));
  float th = aDust.x + uSpinPhase + c.z;
  float agitation;
  float scatter;
  vec3 w = disturb(vec3(cos(th) * r, height + abs(lift) * 0.05, sin(th) * r), agitation, scatter);
  float drift = scatter * (0.6 + 1.6 * fract(aDust.w * 29.7));
  w.xz *= 1.0 + drift * 1.4;
  w.y += drift * 0.08 * (fract(aDust.w * 5.3) - 0.35);
  vec3 v = toView(w);
  vec2 s = toScreen(v);
  float facing = clamp(0.5 + 0.5 * w.z / max(length(w.xz), 1e-3), 0.0, 1.0);
  float twinkle = 0.3 + 0.7 * pow(0.5 + 0.5 * sin(uTime * (1.2 + 2.4 * aDust.z) + aDust.w * 71.0), 3.0);
  float fade = envelope(c.x, height) * smoothstep(0.0, 0.03, tau) * (1.0 - smoothstep(0.96, 1.0, tau)) * (1.0 - smoothstep(0.45, 1.0, gone));
  float rise = smoothstep(0.0, uTop * 0.85, height);
  float tint = exit < 0.0 ? 0.0 : marked * smoothstep(-0.04, 0.0, exit - c.y);
  vec3 base = mix(labToLinear(mix(uLabA, uLabB, rise)), labToLinear(uLeakLab), tint);
  vColor = mix(mix(base, vec3(1.0), 0.55 * (1.0 - tint)), base, uInk);
  vGain = (1.0 + tint * 1.4) * twinkle * fade * mix(uBack, 1.0, facing) * (1.0 + uEnergy * 0.2) * (1.0 + drift * 3.0);
  gl_PointSize = max(uSize * uPixelRatio * mix(0.7, 1.3, fract(aDust.w * 7.3)) * 3.0, 1.0);
  gl_Position = vec4(s / uResolution * 2.0 - 1.0, 0.0, 1.0);
}
`,
  M = `
precision highp float;
uniform float uDustGain;
in vec3 vColor;
in float vGain;
out vec4 fragColor;

void main() {
  vec2 q = gl_PointCoord * 2.0 - 1.0;
  float e = exp(-dot(q, q) * 4.5) * vGain * uDustGain;
  fragColor = vec4(vColor * e, e);
}
`,
  S = `
out vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`,
  k = `
precision highp float;
uniform sampler2D uSource;
uniform vec2 uTexel;
in vec2 vUv;
out vec4 fragColor;

void main() {
  vec4 a = texture(uSource, vUv + uTexel * vec2(-1.0, -1.0));
  vec4 b = texture(uSource, vUv + uTexel * vec2(1.0, -1.0));
  vec4 c = texture(uSource, vUv + uTexel * vec2(-1.0, 1.0));
  vec4 d = texture(uSource, vUv + uTexel * vec2(1.0, 1.0));
  fragColor = (a + b + c + d) * 0.125 + texture(uSource, vUv) * 0.5;
}
`,
  C = `
precision highp float;
uniform sampler2D uSource;
uniform sampler2D uBase;
uniform vec2 uTexel;
in vec2 vUv;
out vec4 fragColor;

void main() {
  vec4 sum = texture(uSource, vUv) * 4.0;
  sum += texture(uSource, vUv + uTexel * vec2(-1.0, 0.0)) * 2.0;
  sum += texture(uSource, vUv + uTexel * vec2(1.0, 0.0)) * 2.0;
  sum += texture(uSource, vUv + uTexel * vec2(0.0, -1.0)) * 2.0;
  sum += texture(uSource, vUv + uTexel * vec2(0.0, 1.0)) * 2.0;
  sum += texture(uSource, vUv + uTexel * vec2(-1.0, -1.0));
  sum += texture(uSource, vUv + uTexel * vec2(1.0, -1.0));
  sum += texture(uSource, vUv + uTexel * vec2(-1.0, 1.0));
  sum += texture(uSource, vUv + uTexel * vec2(1.0, 1.0));
  fragColor = texture(uBase, vUv) + sum / 16.0;
}
`,
  L = `
precision highp float;
uniform sampler2D uLines;
uniform sampler2D uBloom;
uniform vec3 uBackground;
uniform float uGlow;
uniform float uExposure;
uniform float uMode;
uniform float uGrain;
in vec2 vUv;
out vec4 fragColor;

float hash(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * 0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}

vec3 encode(vec3 c) {
  c = clamp(c, 0.0, 1.0);
  return mix(c * 12.92, 1.055 * pow(c, vec3(1.0 / 2.4)) - 0.055, step(vec3(0.0031308), c));
}

void main() {
  vec4 lines = texture(uLines, vUv);
  vec4 bloom = texture(uBloom, vUv);
  vec3 color;
  if (uMode < 0.5) {
    vec3 light = (lines.rgb + bloom.rgb * uGlow) * uExposure;
    vec3 exposed = 1.0 - exp(-light);
    float peak = max(exposed.r, max(exposed.g, exposed.b));
    exposed = mix(exposed, vec3(peak), smoothstep(0.75, 1.0, peak) * 0.35);
    color = uBackground + (1.0 - uBackground) * exposed;
  } else {
    float energy = lines.a + bloom.a * uGlow * 0.2;
    vec3 hue = (lines.rgb + bloom.rgb * uGlow * 0.2) / max(energy, 1e-4);
    float cover = clamp(1.0 - exp(-energy * uExposure * 1.4), 0.0, 0.94);
    color = mix(uBackground, clamp(hue * 0.8, 0.0, 1.0), cover);
  }
  float grain = hash(gl_FragCoord.xy + uGrain * 311.0) - 0.5;
  fragColor = vec4(encode(color) + grain * (1.2 / 255.0), 1.0);
}
`,
  T = e => {
    return () => (t = 16807 * e % 0x7fffffff) / 0x7fffffff;
  },
  F = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: .08,
        delayChildren: .1
      }
    }
  },
  R = {
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
  P = {
    hidden: {
      opacity: 0
    },
    show: {
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: [.16, 1, .3, 1]
      }
    }
  };
function E() {
  let e = (0, __mod_50969.I)(),
    t = (0, React.useRef)(null),
    a = (0, React.useRef)(null),
    g = (0, React.useRef)(null),
    E = (0, React.useRef)(null),
    z = (0, React.useRef)([]),
    A = (0, React.useRef)(null),
    [U, B] = (0, React.useState)(1),
    [D, G] = (0, React.useState)(() => c.map(e => e.count));
  return (0, React.useEffect)(() => {
    let e = t.current,
      o = a.current,
      l = g.current,
      r = E.current;
    if (!e || !o || !l || !r) return;
    let i = function (e, t, a, o, l, r) {
      let i,
        n = e.ownerDocument,
        g = n.defaultView ?? window,
        F = n.createElement("canvas");
      F.setAttribute("aria-hidden", "true"), F.style.cssText = "position:absolute;inset:0;z-index:-1;width:100%;height:100%;display:block;pointer-events:none", e.prepend(F);
      try {
        i = new __mod_12246.WebGLRenderer({
          canvas: F,
          alpha: !1,
          antialias: !1,
          powerPreference: "high-performance"
        });
      } catch {
        return F.remove(), null;
      }
      if (!i.capabilities.isWebGL2) return i.dispose(), F.remove(), null;
      i.autoClear = !1;
      let R = i.extensions.has("EXT_color_buffer_float") || i.extensions.has("EXT_color_buffer_half_float") ? __mod_2253.ix0 : __mod_2253.OUM,
        P = g.matchMedia("(prefers-reduced-motion: reduce)"),
        E = P.matches,
        z = new __mod_2253.qUd(-1, 1, 1, -1, 0, 1),
        A = new __mod_2253.bdM(2, 2),
        U = ((e, t, a, o, l) => {
          let r = Math.max(1.3, .366),
            i = e => .14 * (1 + .16 * Math.exp(-Math.max(0, e - .084) / .07)) + .44000000000000006 * Math.pow(Math.max(0, (e - .12) / .88), 2.45),
            n = i(.084),
            u = [],
            s = [],
            c = [];
          for (let e = 0; e < 3e3; e++) u.push(r + e / 3e3 * (n + .084 - r)), s.push(0), c.push(0);
          for (let e = 0; e < 600; e++) {
            let t = -Math.PI / 2 - Math.PI / 2 * (e / 600);
            u.push(n + .084 + .084 * Math.cos(t)), s.push(.084 + .084 * Math.sin(t)), c.push(e / 600);
          }
          for (let e = 0; e <= 4400; e++) {
            let t = .084 + e / 4400 * .916;
            u.push(i(t)), s.push(t), c.push(1);
          }
          let f = u.length,
            v = new Float64Array(f),
            h = new Float64Array(f),
            d = new Float64Array(f),
            p = 0;
          for (let e = 1; e < f; e++) {
            let t = Math.hypot(u[e] - u[e - 1], s[e] - s[e - 1]),
              a = .5 * (u[e] + u[e - 1]),
              o = .5 * (c[e] + c[e - 1]),
              l = 1 + 2.4 * Math.exp(-Math.max(0, a - n - .084) / .0504),
              r = 4 * t / a * Math.pow(.14 / a, .3) * l * (1 - o) + t / .14 * Math.pow(.14 / a, .3) * o;
            v[e] = v[e - 1] + r;
            let i = (1 - o) * Math.pow(.14 / a, .6) + .5 * o;
            h[e] = h[e - 1] + t / i, d[e] = d[e - 1] + Math.hypot(t, a * r), c[e] >= .5 && c[e - 1] < .5 && (p = h[e]);
          }
          let x = h[f - 1],
            g = new Float32Array(2564),
            w = 1;
          for (let e = 0; e <= 640; e++) {
            let t = d[f - 1] * e / 640;
            for (; w < f - 1 && d[w] < t;) w++;
            let a = d[w] - d[w - 1],
              o = a > 0 ? m((t - d[w - 1]) / a, 0, 1) : 0,
              l = 4 * e;
            g[l] = u[w - 1] + (u[w] - u[w - 1]) * o, g[l + 1] = s[w - 1] + (s[w] - s[w - 1]) * o, g[l + 2] = v[w - 1] + (v[w] - v[w - 1]) * o, g[l + 3] = (h[w - 1] + (h[w] - h[w - 1]) * o) / x;
          }
          let b = new Float32Array(4096);
          w = 1;
          for (let e = 0; e < 1024; e++) {
            let t = x * e / 1023;
            for (; w < f - 1 && h[w] < t;) w++;
            let a = h[w] - h[w - 1],
              o = a > 0 ? m((t - h[w - 1]) / a, 0, 1) : 0,
              l = 4 * e;
            b[l] = u[w - 1] + (u[w] - u[w - 1]) * o, b[l + 1] = s[w - 1] + (s[w] - s[w - 1]) * o, b[l + 2] = v[w - 1] + (v[w] - v[w - 1]) * o, b[l + 3] = t / x;
          }
          return {
            points: g,
            table: b,
            corner: p / x,
            top: 1,
            outer: r
          };
        })(0, 0, 0, 0, 0),
        B = new __mod_2253.GYF(U.points, 641, 1, __mod_2253.GWd, __mod_2253.RQf);
      B.minFilter = __mod_2253.hxR, B.magFilter = __mod_2253.hxR, B.needsUpdate = !0;
      let D = new __mod_2253.GYF(U.table, 1024, 1, __mod_2253.GWd, __mod_2253.RQf);
      D.minFilter = __mod_2253.hxR, D.magFilter = __mod_2253.hxR, D.needsUpdate = !0;
      let G = Array.from({
          length: 6
        }, () => new __mod_2253.IUQ(0, -100, 0, 0)),
        H = new __mod_2253.IUQ(0, 1, 0, 0),
        q = {
          uResolution: {
            value: new __mod_2253.I9Y(1, 1)
          },
          uPrincipal: {
            value: new __mod_2253.I9Y()
          },
          uFocal: {
            value: 1
          },
          uCamPos: {
            value: new __mod_2253.Pq0()
          },
          uCamUp: {
            value: new __mod_2253.Pq0()
          },
          uCamFwd: {
            value: new __mod_2253.Pq0()
          },
          uSpinPhase: {
            value: 0
          },
          uOuter: {
            value: U.outer
          },
          uWaist: {
            value: .14
          },
          uTop: {
            value: 1
          },
          uLabA: {
            value: new __mod_2253.Pq0(...x(v("#8a8a8a")))
          },
          uLabB: {
            value: new __mod_2253.Pq0(...x(v("#ffffff")))
          },
          uHover: {
            value: new __mod_2253.Pq0(.4, 0, .17)
          },
          uSwells: {
            value: G
          },
          uWaveTime: {
            value: 0
          },
          uActive: {
            value: 0
          },
          uPixelRatio: {
            value: 1
          },
          uBack: {
            value: .4
          },
          uEnergy: {
            value: 0
          },
          uInk: {
            value: 0
          },
          uHeights: {
            value: new __mod_2253.IUQ(...c.map(e => e.height))
          },
          uFocus: {
            value: H
          },
          uSurvive: {
            value: new __mod_2253.IUQ(...c.map(e => e.count / c[0].count))
          },
          uLeakLab: {
            value: new __mod_2253.Pq0(...x(v("#ff4f2b")))
          },
          uRadial: {
            value: 1
          }
        },
        I = {
          depthTest: !1,
          depthWrite: !1,
          transparent: !0,
          blending: __mod_2253.bCz,
          blendEquation: __mod_2253.gO9,
          blendSrc: __mod_2253.qad,
          blendDst: __mod_2253.qad,
          blendSrcAlpha: __mod_2253.qad,
          blendDstAlpha: __mod_2253.qad
        },
        j = (e => {
          let t = new Float32Array(430752),
            a = new Uint32Array(215040),
            o = new Float32Array(56),
            l = new Float32Array(56),
            r = new Float32Array(56),
            i = new Float32Array(56),
            n = T(11),
            s = 0,
            c = 0;
          for (let e = 0; e < 56; e++) {
            o[e] = e / 56 * f + (n() - .5) * (f / 56) * .8, l[e] = (n() - .5) * .06, r[e] = (n() - .5) * .08, i[e] = n();
            let u = s / 6;
            for (let a = 0; a <= 640; a++) t.set([o[e], l[e], r[e], e, a, -1, o[e], l[e], r[e], e, a, 1], s), s += 12;
            for (let e = 0; e < 640; e++) {
              let t = u + 2 * e;
              a.set([t, t + 1, t + 2, t + 1, t + 3, t + 2], c), c += 6;
            }
          }
          let v = new __mod_2253.LoY(),
            m = new __mod_2253.eB$(t, 6);
          v.setAttribute("aStrand", new __mod_2253.eHs(m, 4, 0)), v.setAttribute("aSample", new __mod_2253.eHs(m, 2, 4)), v.setAttribute("position", new __mod_2253.eHs(m, 3, 0)), v.setIndex(new __mod_2253.THS(a, 1));
          let h = new Float32Array(55552),
            d = new __mod_2253.GYF(h, 248, 56, __mod_2253.GWd, __mod_2253.RQf);
          return d.minFilter = __mod_2253.hxR, d.magFilter = __mod_2253.hxR, d.generateMipmaps = !1, d.needsUpdate = !0, {
            count: 56,
            phi: o,
            radius: l,
            pitch: r,
            seed: i,
            ring: h,
            texture: d,
            geometry: v
          };
        })(0),
        W = new __mod_2253.BKk({
          glslVersion: __mod_2253.Wdf,
          uniforms: {
            ...q,
            uCurve: {
              value: B
            },
            uLight: {
              value: j.texture
            },
            uHead: {
              value: 0
            },
            uLineWidth: {
              value: 1
            },
            uSheath: {
              value: .25
            },
            uDefocus: {
              value: .6
            },
            uLimb: {
              value: 1.6
            },
            uRim: {
              value: 1.4
            },
            uCorner: {
              value: .084
            },
            uCore: {
              value: .55
            },
            uSheathGain: {
              value: .1
            }
          },
          vertexShader: w,
          fragmentShader: b,
          side: __mod_2253.$EB,
          ...I
        }),
        N = new __mod_2253.BKk({
          glslVersion: __mod_2253.Wdf,
          uniforms: {
            ...q,
            uTable: {
              value: D
            },
            uFlow: {
              value: 0
            },
            uTime: {
              value: 0
            },
            uSize: {
              value: 1.25
            },
            uDustGain: {
              value: 1
            }
          },
          vertexShader: y,
          fragmentShader: M,
          ...I
        }),
        _ = (e, t) => new __mod_2253.BKk({
          glslVersion: __mod_2253.Wdf,
          uniforms: t,
          vertexShader: S,
          fragmentShader: e,
          depthTest: !1,
          depthWrite: !1,
          blending: __mod_2253.XIg
        }),
        Y = _(k, {
          uSource: {
            value: null
          },
          uTexel: {
            value: new __mod_2253.I9Y()
          }
        }),
        $ = _(C, {
          uSource: {
            value: null
          },
          uBase: {
            value: null
          },
          uTexel: {
            value: new __mod_2253.I9Y()
          }
        }),
        O = _(L, {
          uLines: {
            value: null
          },
          uBloom: {
            value: null
          },
          uBackground: {
            value: new __mod_2253.Pq0()
          },
          uGlow: {
            value: .3
          },
          uExposure: {
            value: .525
          },
          uMode: {
            value: 0
          },
          uGrain: {
            value: 0
          }
        }),
        V = new __mod_2253.eaF(j.geometry, W);
      V.frustumCulled = !1;
      let X = (e => {
          let t = T(29),
            a = new Float32Array(9600);
          for (let e = 0; e < 2400; e++) a.set([t() * f, t(), t(), t()], 4 * e);
          let o = new __mod_2253.LoY();
          return o.setAttribute("aDust", new __mod_2253.THS(a, 4)), o.setAttribute("position", new __mod_2253.THS(new Float32Array(7200), 3)), o.setDrawRange(0, 2400), o;
        })(0),
        Q = new __mod_2253.ONl(X, N);
      Q.frustumCulled = !1;
      let K = new __mod_2253.Z58();
      K.add(V, Q);
      let Z = new __mod_2253.eaF(A, O);
      Z.frustumCulled = !1;
      let J = new __mod_2253.Z58();
      J.add(Z);
      let ee = (e, t) => new __mod_2253.nWS(Math.max(1, e), Math.max(1, t), {
          type: R,
          format: __mod_2253.GWd,
          minFilter: __mod_2253.k6q,
          magFilter: __mod_2253.k6q,
          depthBuffer: !1,
          stencilBuffer: !1,
          generateMipmaps: !1
        }),
        et = null,
        ea = [],
        eo = [],
        el = n.createElement("canvas").getContext("2d", {
          willReadFrequently: !0
        }),
        er = !1,
        ei = "",
        en = !1,
        eu = 0,
        es = 0,
        ec = !1,
        ef = 20,
        ev = 0,
        em = 0,
        eh = 0,
        ed = 0,
        ep = 0,
        ex = 0,
        eg = 1,
        ew = 1,
        eb = 1,
        ey = 0,
        eM = !1,
        eS = 1,
        ek = 1,
        eC = {
          centerX: .5,
          baseY: .86,
          scale: 1,
          radial: 1
        },
        eL = {
          inside: !1,
          x: 0,
          y: 0
        },
        eT = {
          height: .4,
          velocity: 0,
          goal: .4,
          amount: 0
        },
        eF = 0,
        eR = 0,
        eP = {
          position: [0, 0, 0],
          up: [0, 1, 0],
          forward: [0, 0, -1],
          focal: 1,
          principal: [0, 0]
        },
        eE = () => {
          et?.dispose(), ea.forEach(e => e.dispose()), eo.forEach(e => e.dispose()), et = null, ea = [], eo = [];
        },
        ez = (e, t) => {
          Z.material = e, i.setRenderTarget(t), i.render(J, z);
        },
        eA = () => .055 * (1 + .25 * ed + ep),
        eU = (e, t) => {
          let a = .5 * (.35 * Math.sin(2 * j.phi[t] + .4) + .65 * (j.seed[t] - .5)),
            o = E ? .6 : .5 + .5 * Math.cos(f * (.35 * e + a));
          return [.28 + .95 * o * o * o * (.8 + .2 * Math.sin(.29 * e + 5 * j.seed[t])), .5 + .5 * Math.sin(.35 * e + 2 * j.phi[t] + .8 * j.seed[t])];
        },
        eB = (e, t) => {
          for (let a = 0; a < j.count; a++) {
            let [o, l] = eU(t, a),
              r = (248 * a + e) * 4;
            j.ring[r] = o, j.ring[r + 1] = o * l, j.ring[r + 2] = 0, j.ring[r + 3] = 0;
          }
        },
        eD = () => {
          let e = 240 * Math.max(eA(), .01),
            t = Math.floor(em);
          for (let a = 0; a < 248; a++) eB(d(t - a, 248), ef - a / e);
          j.texture.needsUpdate = !0;
        },
        eG = () => {
          let e = 3 * Math.PI / 180,
            t = eg * eb,
            a = ew * eb,
            o = [0, .42 + 3.2 * Math.sin(e), 3.2 * Math.cos(e)],
            l = [0, Math.cos(e), -Math.sin(e)],
            r = [0, -Math.sin(e), -Math.cos(e)],
            i = .82 * eC.scale * a * 3.2,
            n = -o[1],
            u = -o[2],
            s = n * l[1] + u * l[2],
            c = n * r[1] + u * r[2],
            f = [eC.centerX * t, (1 - eC.baseY) * a - i * s / c];
          return {
            position: o,
            up: l,
            forward: r,
            focal: i,
            principal: f
          };
        },
        eH = e => eC.radial * (.14 * (1 + .16 * Math.exp(-Math.max(0, e - .084) / .07)) + .44000000000000006 * Math.pow(Math.max(0, (e - .12) / .88), 2.45)),
        eq = (e, t, a) => {
          let o = [e - eP.position[0], t - eP.position[1], a - eP.position[2]],
            l = o[0] * eP.up[0] + o[1] * eP.up[1] + o[2] * eP.up[2],
            r = o[0] * eP.forward[0] + o[1] * eP.forward[1] + o[2] * eP.forward[2],
            i = eP.principal[0] + eP.focal * o[0] / Math.max(r, .05),
            n = eP.principal[1] + eP.focal * l / Math.max(r, .05);
          return {
            x: i / eb,
            y: ew - n / eb
          };
        },
        eI = () => {
          if (!el) return !1;
          el.clearRect(0, 0, 1, 1), el.fillStyle = "#0a0a0a", el.fillStyle = g.getComputedStyle(e).backgroundColor, el.fillRect(0, 0, 1, 1);
          let [t, a, o] = el.getImageData(0, 0, 1, 1).data,
            l = `${t},${a},${o}`;
          return l !== ei && (ei = l, er = (.2126 * t + .7152 * a + .0722 * o) / 255 > .5, O.uniforms.uBackground.value.set(p(t / 255), p(a / 255), p(o / 255)), !0);
        },
        ej = () => {
          let e, t, a;
          if (!et || !ea.length) return;
          e = eg * eb, t = ew * eb, q.uResolution.value.set(e, t), q.uPrincipal.value.set(eP.principal[0], eP.principal[1]), q.uFocal.value = eP.focal, q.uCamPos.value.set(...eP.position), q.uCamUp.value.set(...eP.up), q.uCamFwd.value.set(...eP.forward), q.uSpinPhase.value = ev, q.uPixelRatio.value = eb, q.uRadial.value = eC.radial, q.uEnergy.value = ed, q.uInk.value = +!!er, q.uWaveTime.value = eF, q.uActive.value = +!!(eT.amount > .001 || G.some(e => e.z > 0 && eF - e.y < 7)), q.uHover.value.set(eT.height, eT.amount, .17), W.uniforms.uHead.value = d(em, 248), N.uniforms.uFlow.value = eh, N.uniforms.uTime.value = ef, (a = O.uniforms).uExposure.value = (er ? 1.7 : .525) * (1 + .1 * ed + .12 * ep), a.uMode.value = +!!er, a.uGrain.value = ey, i.setRenderTarget(et), i.setClearColor(0, 0), i.clear(), i.render(K, z);
          for (let e of ea) Y.uniforms.uSource.value = et.texture, Y.uniforms.uTexel.value.set(1 / et.width, 1 / et.height), ez(Y, e), o = e;
          let l = ea[ea.length - 1];
          for (let e = ea.length - 2; e >= 0; e--) $.uniforms.uSource.value = l.texture, $.uniforms.uBase.value = ea[e].texture, $.uniforms.uTexel.value.set(1 / l.width, 1 / l.height), ez($, eo[e]), l = eo[e];
          O.uniforms.uLines.value = et.texture, O.uniforms.uBloom.value = l.texture, ez(O, null);
        },
        eW = t => {
          if (eu = 0, en) return;
          let a = Math.min(.05, Math.max(0, (t - es) / 1e3));
          es = t, (t => {
            if (ed += ((eL.inside && !E ? .5 : 0) - ed) * (1 - Math.exp(-t / .45)), ex += (-(18 * ep) - 6.5 * ex) * t, ep = Math.max(-.5, ep + ex * t), (t => {
              let a = 0;
              if (eL.inside && !E) {
                let t = ((t, a) => {
                  let o = e.getBoundingClientRect(),
                    l = (t - o.left) * eb,
                    r = (o.height - (a - o.top)) * eb,
                    i = (l - eP.principal[0]) / eP.focal,
                    n = (r - eP.principal[1]) / eP.focal,
                    u = eP.up[1] * n + eP.forward[1],
                    s = eP.up[2] * n + eP.forward[2];
                  if (s > -1e-4) return null;
                  let c = -eP.position[2] / s;
                  return {
                    x: eP.position[0] + c * i,
                    y: eP.position[1] + c * u
                  };
                })(eL.x, eL.y);
                if (t) {
                  let e = 1.2 * eH(m(t.y, .05, 1)) + .05,
                    o = 1 - h(e, e + .3, Math.abs(t.x)),
                    l = h(-.02, .1, t.y) * (1 - h(.82, 1.02, t.y));
                  if (a = .15 * o * l, eT.goal = m(t.y, .1, .95), o * l > .5) {
                    let e = 0;
                    c.forEach((a, o) => {
                      Math.abs(a.height - t.y) < Math.abs(c[e].height - t.y) && (e = o);
                    }), e !== ek && (ek = e, r(e));
                  }
                }
              }
              eT.amount < .004 && a > 0 && (eT.height = eT.goal, eT.velocity = 0), eT.velocity += (20.25 * (eT.goal - eT.height) - 9 * eT.velocity) * t, eT.height += eT.velocity * t, eT.amount += (a - eT.amount) * (1 - Math.exp(-t / .5));
              let o = E ? 1 : 1 - Math.exp(-t / .28);
              H.x *= 1 - o, H.y += ((1 === eS) - H.y) * o, H.z += ((2 === eS) - H.z) * o, H.w += ((3 === eS) - H.w) * o;
            })(t), E) return;
            eF += t;
            ef += t, ev += .12 * t * (1 + .6 * ep);
            let l = eA();
            em += 240 * l * t, eh += l * t;
            for (let e = Math.floor(em) + 1; e <= Math.floor(em); e++) {
              let t = ef + (e - em) / Math.max(em - em, 1e-6) * (ef - ef);
              eB(d(e, 248), t);
            }
            j.texture.needsUpdate = !0, ey = (ey + .618034) % 1;
          })(a), ej();
          let o = Math.abs(ep) > .002 || !(.002 > Math.abs(H.y - (1 === eS)) && .002 > Math.abs(H.z - (2 === eS)) && .002 > Math.abs(H.w - (3 === eS))) || eT.amount > .002;
          ec && !n.hidden && (!E || o) && (eu = g.requestAnimationFrame(eW));
        };
      function eN() {
        en || eu || !ec || (es = g.performance.now(), eu = g.requestAnimationFrame(eW));
      }
      let e_ = () => {
          let r = e.getBoundingClientRect();
          eg = Math.max(1, r.width), ew = Math.max(1, r.height), eb = Math.min(g.devicePixelRatio || 1, 2), i.setPixelRatio(eb), i.setSize(eg, ew, !1);
          let n = Math.round(eg * eb),
            u = Math.round(ew * eb);
          eE(), et = ee(n, u);
          let s = m(Math.floor(Math.log2(Math.min(n, u) / 8)), 3, 7);
          for (let e = 1; e <= s; e++) ea.push(ee(Math.max(1, n >> e), Math.max(1, u >> e))), eo.push(ee(Math.max(1, n >> e), Math.max(1, u >> e)));
          (() => {
            let r = () => {
              for (let e = 0; e < 3; e++) {
                eP = eG();
                let e = eq(0, .985, 0).y,
                  t = eC.baseY * ew;
                eC.scale *= t / Math.max(t - e, 1);
              }
            };
            if (eM = eg >= 1024) {
              let t = e.getBoundingClientRect(),
                i = a.getBoundingClientRect(),
                n = i.right - t.left + 28,
                u = i.top - t.top - 24,
                s = i.bottom - t.top + 20,
                f = l[0]?.lastElementChild?.offsetWidth || 224,
                v = o.getBoundingClientRect().right - t.left - f - 48,
                m = () => {
                  eP = eG();
                  for (let e = 0; e <= 32; e++) {
                    let t = .1 + .9 * e / 32,
                      a = eq(-eH(t), t, 0);
                    if (a.y > u && a.y < s && a.x < n) return !1;
                  }
                  return !0;
                },
                h = () => eq(eH(c[0].height), c[0].height, 0).x <= v;
              eC.baseY = .88, eC.scale = 1, r();
              let d = !1;
              for (let e = 1; e > .4 && !d; e -= .025) {
                eC.radial = e;
                for (let e = .5; e <= .74; e += .005) if (eC.centerX = e, m()) {
                  d = h();
                  break;
                }
              }
              if (!d) for (eC.radial = .4, eC.centerX = .5; !m() && eC.centerX < .74;) eC.centerX += .005;
            } else {
              let a = t.getBoundingClientRect().top - e.getBoundingClientRect().top,
                o = Math.max(t.offsetHeight, 160);
              eC.centerX = .5, eC.baseY = (a + .94 * o) / ew, eC.scale = 1, eC.radial = 1, r();
            }
            eP = eG();
            let i = Math.max(0, e.getBoundingClientRect().right - o.getBoundingClientRect().right);
            l.forEach((e, t) => {
              if (!e) return;
              if (!eM) {
                e.style.left = "", e.style.top = "", e.style.right = "";
                return;
              }
              let a = c[t],
                o = eq(1.04 * eH(a.height), a.height, 0);
              e.style.left = `${Math.round(o.x + 14)}px`, e.style.top = `${Math.round(o.y)}px`, e.style.right = `${Math.round(i)}px`;
            });
          })(), ej(), eN();
        },
        eY = e => {
          "touch" !== e.pointerType && (eL.x = e.clientX, eL.y = e.clientY, eL.inside || (eL.inside = !0, eN()));
        },
        e$ = () => {
          eL.inside = !1, eN();
        },
        eO = e => {
          !(0 !== e.button || e.target?.closest?.("a,button")) && (E || (ex += 2.5, G[eR = (eR + 1) % 6].set(.92, eF, .13, 0), eN()));
        },
        eV = () => {
          eI() && !eu && ej();
        },
        eX = () => {
          E = P.matches, eD(), eN();
        },
        eQ = () => {
          n.hidden || eN();
        },
        eK = e => e.preventDefault();
      e.addEventListener("pointermove", eY), e.addEventListener("pointerleave", e$), e.addEventListener("pointercancel", e$), e.addEventListener("pointerdown", eO);
      let eZ = new ResizeObserver(e_);
      eZ.observe(e), eZ.observe(t), eZ.observe(a);
      let eJ = new IntersectionObserver(e => {
        (ec = e.some(e => e.isIntersecting)) && eN();
      }, {
        rootMargin: "80px"
      });
      eJ.observe(e);
      let e0 = new MutationObserver(eV);
      e0.observe(n.documentElement, {
        attributes: !0,
        attributeFilter: ["class", "style", "data-theme"]
      });
      let e1 = g.matchMedia("(prefers-color-scheme: dark)");
      return e1.addEventListener("change", eV), P.addEventListener("change", eX), n.addEventListener("visibilitychange", eQ), F.addEventListener("webglcontextlost", eK), eI(), eD(), e_(), {
        focus: e => {
          eS = e, ek = e, eN();
        },
        destroy: () => {
          en = !0, g.cancelAnimationFrame(eu), e.removeEventListener("pointermove", eY), e.removeEventListener("pointerleave", e$), e.removeEventListener("pointercancel", e$), e.removeEventListener("pointerdown", eO), e1.removeEventListener("change", eV), P.removeEventListener("change", eX), n.removeEventListener("visibilitychange", eQ), F.removeEventListener("webglcontextlost", eK), e0.disconnect(), eZ.disconnect(), eJ.disconnect(), eE(), j.geometry.dispose(), j.texture.dispose(), X.dispose(), B.dispose(), D.dispose(), A.dispose(), [W, N, Y, $, O].forEach(e => e.dispose()), i.dispose(), F.remove();
        }
      };
    }(e, o, l, r, z.current, B);
    return A.current = i, () => {
      i?.destroy(), A.current = null;
    };
  }, []), (0, React.useEffect)(() => {
    A.current?.focus(U);
  }, [U]), (0, React.useEffect)(() => {
    if (e) return;
    let t = 0,
      a = () => {
        G(e => {
          let t = [...e];
          return t[0] += 1 + Math.floor(3 * Math.random()), .3 > Math.random() && (t[1] += 1), .14 > Math.random() && (t[2] += 1), .06 > Math.random() && (t[3] += 1), t;
        }), t = window.setTimeout(a, 900 + 1500 * Math.random());
      };
    return t = window.setTimeout(a, 1600), () => window.clearTimeout(t);
  }, [e]), <section ref={t} className="relative isolate flex min-h-screen w-full flex-col overflow-hidden bg-white px-4 pb-10 pt-6 text-neutral-950 dark:bg-neutral-950 dark:text-white sm:px-6 lg:px-8 lg:pb-12 lg:pt-24"><motion.div ref={E} variants={F} initial={!e && "hidden"} whileInView="show" viewport={{
      once: !0
    }} className="mx-auto flex w-full max-w-[1400px] flex-1 flex-col"><div ref={a} aria-hidden="true" className="h-[min(19rem,76vw)] shrink-0 lg:hidden" /><div ref={g} className="max-w-[26rem] xl:max-w-[30rem]"><motion.h1 variants={R} className="text-pretty text-[2.25rem] font-medium leading-[1.04] tracking-[-0.04em] sm:text-5xl xl:text-[3.75rem]">Find the step where people give up.</motion.h1><motion.p variants={R} className="mt-5 max-w-[36ch] text-pretty text-base leading-relaxed text-neutral-600 dark:text-neutral-400">See how many people reach each step, and what the ones who leave did last.</motion.p></div><motion.div variants={R} className="order-1 mt-8 flex flex-row items-center gap-6 lg:order-none lg:mt-auto"><a href="#" className="inline-flex h-12 items-center justify-center rounded-full bg-neutral-950 px-7 text-sm font-medium text-white transition-colors duration-200 hover:bg-neutral-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950 dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200 dark:focus-visible:outline-white">Start free</a><a href="#" className="group inline-flex h-12 items-center gap-2 rounded-full text-sm font-medium text-neutral-700 transition-colors duration-200 hover:text-neutral-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current dark:text-neutral-300 dark:hover:text-white">Open a live funnel<ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" /></a></motion.div><motion.ol variants={P} aria-label="Funnel steps" className="mt-7 flex flex-col gap-1 lg:pointer-events-none lg:absolute lg:inset-0 lg:m-0">{c.map((e, t) => {
          let a = t === U,
            l = t > 0 ? D[t - 1] : 0,
            r = t > 0 ? (D[t] / l * 100).toFixed(1) : "";
          return <li className="contents"><button ref={e => {
              z.current[t] = e;
            }} type="button" aria-pressed={a} onPointerEnter={e => {
              "mouse" === e.pointerType && B(t);
            }} onFocus={() => B(t)} onClick={() => B(t)} className="group flex w-full cursor-pointer items-center rounded-md py-1.5 text-left outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current lg:pointer-events-auto lg:absolute lg:w-auto lg:-translate-y-1/2 lg:py-1"><span aria-hidden="true" className={`mr-4 hidden h-px flex-1 transition-colors duration-500 lg:block ${a ? "bg-[#ff4f2b]" : "bg-neutral-950/15 dark:bg-white/15"}`} /><span className="flex w-full flex-col lg:w-56 lg:shrink-0"><span className={`flex items-baseline justify-between gap-4 text-sm font-medium transition-colors duration-300 ${a ? "text-neutral-950 dark:text-white" : "text-neutral-500 dark:text-neutral-400"}`}>{e.name}<span className="tabular-nums">{D[t].toLocaleString("en-US")}</span></span><span className={`mt-0.5 whitespace-nowrap text-xs tabular-nums transition-colors duration-300 ${a && t > 0 ? "text-[#e8421f] dark:text-[#ff6a4a]" : "text-neutral-500"}`}>{0 === t ? "Last 30 days, updating live" : `${r}% continued \xb7 ${(l - D[t]).toLocaleString("en-US")} left here`}</span></span></button></li>;
        })}</motion.ol></motion.div></section>;
}

export { E as Hero29 };
export default E;

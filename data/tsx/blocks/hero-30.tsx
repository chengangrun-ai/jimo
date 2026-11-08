import { motion, AnimatePresence } from "motion/react";
import * as React from "react";
import * as __mod_50969 from "../_helpers/50969";
import * as __mod_12246 from "../_helpers/12246";
import * as __mod_2253 from "../_helpers/2253";
/**
 * Hero 30
 * Runway hero where a fire of digits grows with your monthly burn
 * slug: hero-30
 * category: Hero Section
 * export: Hero30
 * deps: lucide-react, motion, three
 * original: ts-tailwind/blocks/hero/hero-30.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import { ArrowRight } from "lucide-react";

let c = 1 / 60,
  f = e => {
    let t = Number.parseInt(e.slice(1), 16);
    return [(t >> 16 & 255) / 255, (t >> 8 & 255) / 255, (255 & t) / 255];
  },
  v = (e, t, l) => Math.min(l, Math.max(t, e)),
  m = e => e <= .04045 ? e / 12.92 : Math.pow((e + .055) / 1.055, 2.4),
  d = ([e, t, l]) => {
    let a = m(e),
      r = m(t),
      o = m(l),
      u = Math.cbrt(.4122214708 * a + .5363325363 * r + .0514459929 * o),
      n = Math.cbrt(.2119034982 * a + .6806995451 * r + .1073969566 * o),
      i = Math.cbrt(.0883024619 * a + .2817188376 * r + .6299787005 * o);
    return [.2104542553 * u + .793617785 * n - .0040720468 * i, 1.9779984951 * u - 2.428592205 * n + .4505937099 * i, .0259040371 * u + .7827717662 * n - .808675766 * i];
  },
  p = `
float hash(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * 0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * f * (f * (f * 6.0 - 15.0) + 10.0);
  float a = hash(i);
  float b = hash(i + vec2(1.0, 0.0));
  float c = hash(i + vec2(0.0, 1.0));
  float d = hash(i + vec2(1.0, 1.0));
  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}

float fbm(vec2 p) {
  return 0.66 * noise(p) + 0.34 * noise(p * 2.07 + 13.1);
}
`,
  x = `
precision highp float;
uniform sampler2D uState;
uniform vec2 uGrid;
uniform float uTime;
uniform float uDt;
uniform float uRise;
uniform float uWind;
uniform float uTurb;
uniform float uCool;
uniform float uFuel;
uniform float uSmokeRate;
uniform vec4 uSnuff;
uniform vec4 uStokes[4];
${p}
out vec4 fragColor;

vec2 curl(vec2 p, float t) {
  float e = 0.5;
  vec2 drift = vec2(0.0, -t * 0.55);
  float n = fbm(p + drift + vec2(0.0, e));
  float s = fbm(p + drift - vec2(0.0, e));
  float r = fbm(p + drift + vec2(e, 0.0));
  float l = fbm(p + drift - vec2(e, 0.0));
  return vec2(n - s, l - r) / (2.0 * e);
}

float stokeAt(float x) {
  float total = 0.0;
  for (int k = 0; k < 4; k++) {
    vec4 s = uStokes[k];
    if (s.z <= 0.0) continue;
    float age = uTime - s.y;
    if (age < 0.0 || age > 4.0) continue;
    float g = (x - s.x) / s.w;
    total += s.z * exp(-g * g) * smoothstep(0.0, 0.12, age) * exp(-age / 0.9);
  }
  return total;
}

void main() {
  vec2 p = gl_FragCoord.xy;
  vec4 here = texture(uState, p / uGrid);
  float stoke = stokeAt(p.x);
  float warm = clamp(here.r, 0.0, 1.2);
  float lift = min(stoke, 1.5);
  vec2 swirl = curl(p * 0.075, uTime) * uTurb * (0.35 + 0.65 * warm) * (1.0 + 0.7 * lift);
  float gust = 0.75 + 0.5 * noise(vec2(uTime * 0.18, p.y * 0.015));
  vec2 velocity = vec2(uWind * gust, uRise * (0.55 + 0.6 * warm) * (1.0 + 1.1 * lift)) + swirl;
  vec4 previous = texture(uState, (p - velocity * uDt) / uGrid);
  float heat = previous.r;
  float smoke = previous.g;
  float patches = fbm(vec2(p.x * 0.075, p.y * 0.075 - uTime * uRise * 0.075));
  float cool = uCool * mix(0.4, 2.3, smoothstep(0.32, 0.78, patches)) / (1.0 + 0.45 * lift);
  float cooled = heat * (1.0 - exp(-cool * uDt));
  heat -= cooled;
  smoke += cooled * uSmokeRate;
  float d = length(p - uSnuff.xy) / max(uSnuff.z, 1.0);
  float douse = uSnuff.w * exp(-d * d);
  float doused = heat * (1.0 - exp(-douse * 9.0 * uDt));
  heat -= doused;
  smoke += doused * 0.85;
  smoke = min(smoke * exp(-uDt * 0.55), 1.0);
  if (p.y < 2.0) {
    float bed = 0.52 + 0.62 * fbm(vec2(p.x * 0.05 + uTime * 0.22, uTime * 0.4));
    float grain = hash(vec2(p.x, floor(uTime * 30.0)));
    heat = min(uFuel * bed * (0.82 + 0.36 * grain) * (1.0 + 0.25 * stoke), 1.0);
    smoke = 0.0;
  }
  fragColor = vec4(heat, smoke, 0.0, 1.0);
}
`,
  h = `
in vec4 aSpark;
uniform vec2 uGrid;
uniform float uTime;
uniform float uRise;
uniform float uWind;
uniform float uAmount;
uniform vec4 uStokes[4];
${p}
out float vBright;

void main() {
  float kind = aSpark.x;
  float lag = aSpark.y * 0.07;
  float s1 = aSpark.z;
  float s2 = aSpark.w;
  vec2 position = vec2(-10.0);
  float bright = 0.0;
  if (kind < 0.5) {
    float period = 1.8 + 1.8 * s1;
    float phase = (uTime + s2 * 17.0 * period) / period;
    float cycle = floor(phase);
    float age = fract(phase) * period - lag;
    float alive = step(hash(vec2(s1 * 91.0, cycle)), uAmount * 0.8);
    float x0 = hash(vec2(cycle * 1.7, s2 * 53.0)) * uGrid.x;
    float lift = uRise * (1.1 + 0.9 * s2) * 1.5;
    float y = 1.5 + lift * (1.0 - exp(-max(age, 0.0) / 1.5));
    float x = x0 + uWind * age * 1.1 + sin(age * (2.0 + 3.0 * s2) + s1 * 6.2831853) * (0.6 + age);
    bright = alive * step(0.0, age) * (1.0 - age / period) * smoothstep(0.0, 0.08, age);
    position = vec2(x, y);
  } else {
    vec4 stoke = uStokes[int(kind) - 1];
    float age = uTime - stoke.y - lag;
    if (stoke.z > 0.0 && age > 0.0 && age < 2.6) {
      float angle = (s1 - 0.5) * 1.4;
      float lift = uRise * (1.4 + 1.9 * s2) * (0.7 + 0.3 * stoke.z) * 1.2;
      float travel = lift * (1.0 - exp(-age / 1.2));
      position = vec2(stoke.x + (s2 - 0.5) * stoke.w * 0.9 + sin(angle) * travel + uWind * age, 1.5 + cos(angle) * travel);
      bright = (1.0 - age / 2.6) * smoothstep(0.0, 0.05, age) * min(stoke.z, 1.5);
    }
  }
  vBright = bright * (1.0 - aSpark.y * 0.45);
  gl_PointSize = 1.0;
  gl_Position = vec4((floor(position) + 0.5) / uGrid * 2.0 - 1.0, 0.0, 1.0);
}
`,
  g = `
precision highp float;
in float vBright;
out vec4 fragColor;

void main() {
  fragColor = vec4(vBright, 0.0, 0.0, 1.0);
}
`,
  b = `
out vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`,
  k = `
precision highp float;
uniform sampler2D uState;
uniform sampler2D uSparks;
uniform sampler2D uAtlas;
uniform vec2 uAtlasGrid;
uniform vec2 uCell;
uniform float uCount;
uniform float uSparkGlyph;
uniform float uTime;
uniform float uFlicker;
uniform float uInk;
uniform vec3 uLabBody;
uniform vec3 uLabCore;
in vec2 vUv;
out vec4 fragColor;

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

float hash(vec3 p) {
  p = fract(p * vec3(0.1031, 0.1030, 0.0973));
  p += dot(p, p.yxz + 33.33);
  return fract((p.x + p.y) * p.z);
}

vec3 flame(float t) {
  vec3 deep = vec3(uLabBody.x * 0.38, uLabBody.yz * 0.8);
  vec3 white = mix(vec3(0.97, uLabCore.yz * 0.22), vec3(uLabCore.x * 0.75, uLabCore.yz * 1.1), uInk);
  vec3 lab = t < 0.45 ? mix(deep, uLabBody, smoothstep(0.0, 0.45, t))
    : t < 0.86 ? mix(uLabBody, uLabCore, smoothstep(0.45, 0.86, t))
    : mix(uLabCore, white, smoothstep(0.86, 1.0, t));
  return labToLinear(lab);
}

float glyphCoverage(float index, vec2 g) {
  vec2 f = fract(g) - 0.5;
  vec2 span = vec2(uCell.x / uCell.y, 1.0) * 0.86;
  vec2 texel = vec2(0.5 + f.x * span.x, 0.5 - f.y * span.y);
  float inside = step(0.01, texel.x) * step(texel.x, 0.99) * step(0.01, texel.y) * step(texel.y, 0.99);
  vec2 slot = vec2(mod(index, uAtlasGrid.x), floor(index / uAtlasGrid.x));
  vec2 uv = (slot + texel) / uAtlasGrid;
  vec2 scale = span / uAtlasGrid;
  return textureGrad(uAtlas, uv, dFdx(g) * scale, dFdy(g) * scale).r * inside;
}

void main() {
  vec2 g = gl_FragCoord.xy / uCell;
  ivec2 cell = ivec2(floor(g));
  vec4 state = texelFetch(uState, cell, 0);
  float spark = texelFetch(uSparks, cell, 0).r;
  float heat = max(state.r, 0.0);
  float smoke = max(state.g, 0.0) * (1.0 - smoothstep(0.04, 0.2, heat));
  float beat = floor(uTime * (3.0 + 21.0 * uFlicker));
  float jitter = (hash(vec3(vec2(cell), beat)) - 0.5) * (0.06 + 0.3 * uFlicker);
  float level = clamp(heat + jitter * step(0.04, heat), 0.0, 1.0);
  float haze = clamp(smoke * 0.6, 0.0, 0.42);
  vec3 color = vec3(0.0);
  float energy = 0.0;
  if (spark > 0.12) {
    float sparkIndex = uSparkGlyph + clamp(floor(spark * 3.0), 0.0, 2.0);
    float cover = glyphCoverage(sparkIndex, g);
    color = mix(labToLinear(vec3(min(uLabCore.x + 0.12, 0.98), uLabCore.yz * 0.6)), flame(0.7), uInk);
    energy = cover * min(spark, 1.4) * 1.25;
  } else if (level > 0.05) {
    float index = floor(pow(level, 0.85) * (uCount - 1.0) + 0.5);
    float cover = glyphCoverage(max(index, 1.0), g);
    color = flame(level);
    energy = cover * smoothstep(0.05, 0.12, level) * (0.1 + 1.1 * pow(level, 1.8));
  } else if (haze > 0.05) {
    float index = floor(haze * (uCount - 1.0) + 0.5);
    float cover = glyphCoverage(max(index, 1.0), g);
    color = labToLinear(vec3(mix(0.62, 0.45, uInk), uLabBody.yz * 0.16));
    energy = cover * haze * 0.6;
  }
  fragColor = vec4(color * energy, energy);
}
`,
  y = `
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
  w = `
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
  S = `
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
    float cover = clamp(1.0 - exp(-energy * uExposure * 1.4), 0.0, 0.95);
    color = mix(uBackground, clamp(hue * 0.85, 0.0, 1.0), cover);
  }
  float grain = hash(gl_FragCoord.xy + uGrain * 311.0) - 0.5;
  fragColor = vec4(encode(color) + grain * (1.2 / 255.0), 1.0);
}
`,
  C = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: .08,
        delayChildren: .1
      }
    }
  },
  T = {
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
  M = e => `$${Math.round(e).toLocaleString("en-US")}`,
  L = () => () => {},
  E = () => {
    let e = new Date();
    return 12 * e.getFullYear() + e.getMonth();
  };
function Hero30() {
  let e,
    t = (0, __mod_50969.I)(),
    l = (0, React.useRef)(null),
    p = (0, React.useRef)(null),
    z = (0, React.useRef)(null),
    [B, G] = (0, React.useState)(84e3),
    R = (0, React.useSyncExternalStore)(L, E, () => null),
    A = (B - 25e3) / 175e3,
    F = 12e5 / B;
  return (0, React.useEffect)(() => {
    let e = l.current,
      t = p.current;
    if (!e || !t) return;
    let a = function (e, t, l) {
      let a,
        r = e.ownerDocument,
        o = r.defaultView ?? window,
        u = r.createElement("canvas");
      u.setAttribute("aria-hidden", "true"), u.style.cssText = "position:absolute;inset:0;z-index:-1;width:100%;height:100%;display:block;pointer-events:none", e.prepend(u);
      try {
        a = new __mod_12246.WebGLRenderer({
          canvas: u,
          alpha: !1,
          antialias: !1,
          powerPreference: "high-performance"
        });
      } catch {
        return u.remove(), null;
      }
      if (!a.capabilities.isWebGL2) return a.dispose(), u.remove(), null;
      a.autoClear = !1;
      let n = a.extensions.has("EXT_color_buffer_float") || a.extensions.has("EXT_color_buffer_half_float") ? __mod_2253.ix0 : __mod_2253.OUM,
        p = o.matchMedia("(prefers-reduced-motion: reduce)"),
        C = p.matches,
        T = new __mod_2253.qUd(-1, 1, 1, -1, 0, 1),
        M = new __mod_2253.bdM(2, 2),
        L = Array.from({
          length: 4
        }, () => new __mod_2253.IUQ(0, -100, 0, 1)),
        E = {
          x: 0,
          y: 0,
          vx: 0,
          vy: 0,
          goalX: 0,
          goalY: 0,
          amount: 0,
          inside: !1,
          placed: !1
        },
        z = d(f("#ff4a17")),
        B = d(f("#ffb547")),
        G = (e, t) => new __mod_2253.BKk({
          glslVersion: __mod_2253.Wdf,
          uniforms: t,
          vertexShader: b,
          fragmentShader: e,
          depthTest: !1,
          depthWrite: !1,
          blending: __mod_2253.XIg
        }),
        R = G(x, {
          uState: {
            value: null
          },
          uGrid: {
            value: new __mod_2253.I9Y(1, 1)
          },
          uTime: {
            value: 0
          },
          uDt: {
            value: c
          },
          uRise: {
            value: 20
          },
          uWind: {
            value: 0
          },
          uTurb: {
            value: 10
          },
          uCool: {
            value: 1
          },
          uFuel: {
            value: 1
          },
          uSmokeRate: {
            value: .3
          },
          uSnuff: {
            value: new __mod_2253.IUQ(-100, -100, 10, 0)
          },
          uStokes: {
            value: L
          }
        }),
        A = new __mod_2253.BKk({
          glslVersion: __mod_2253.Wdf,
          uniforms: {
            uGrid: {
              value: new __mod_2253.I9Y(1, 1)
            },
            uTime: {
              value: 0
            },
            uRise: {
              value: 20
            },
            uWind: {
              value: 0
            },
            uAmount: {
              value: .5
            },
            uStokes: {
              value: L
            }
          },
          vertexShader: h,
          fragmentShader: g,
          depthTest: !1,
          depthWrite: !1,
          transparent: !0,
          blending: __mod_2253.bCz,
          blendEquation: __mod_2253.gO9,
          blendSrc: __mod_2253.qad,
          blendDst: __mod_2253.qad,
          blendSrcAlpha: __mod_2253.qad,
          blendDstAlpha: __mod_2253.qad
        }),
        F = G(k, {
          uState: {
            value: null
          },
          uSparks: {
            value: null
          },
          uAtlas: {
            value: null
          },
          uAtlasGrid: {
            value: new __mod_2253.I9Y(16, 1)
          },
          uCell: {
            value: new __mod_2253.I9Y(8, 12)
          },
          uCount: {
            value: 2
          },
          uSparkGlyph: {
            value: 2
          },
          uTime: {
            value: 0
          },
          uFlicker: {
            value: .5
          },
          uInk: {
            value: 0
          },
          uLabBody: {
            value: new __mod_2253.Pq0(...z)
          },
          uLabCore: {
            value: new __mod_2253.Pq0(...B)
          }
        }),
        U = G(y, {
          uSource: {
            value: null
          },
          uTexel: {
            value: new __mod_2253.I9Y()
          }
        }),
        _ = G(w, {
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
        j = G(S, {
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
            value: .5
          },
          uExposure: {
            value: 1.05
          },
          uMode: {
            value: 0
          },
          uGrain: {
            value: 0
          }
        }),
        D = new __mod_2253.eaF(M, j);
      D.frustumCulled = !1;
      let I = new __mod_2253.Z58();
      I.add(D);
      let N = new __mod_2253.ONl((() => {
        let e,
          t = (e = 131, () => (e = 16807 * e % 0x7fffffff) / 0x7fffffff),
          l = [],
          a = (e, a) => {
            for (let r = 0; r < a; r++) {
              let a = t(),
                r = t();
              l.push(e, 0, a, r, e, 1, a, r);
            }
          };
        a(0, 72);
        for (let e = 1; e <= 4; e++) a(e, 42);
        let r = new Float32Array(l),
          o = new __mod_2253.LoY();
        return o.setAttribute("aSpark", new __mod_2253.THS(r, 4)), o.setAttribute("position", new __mod_2253.THS(new Float32Array(r.length / 4 * 3), 3)), o;
      })(), A);
      N.frustumCulled = !1;
      let W = new __mod_2253.Z58();
      W.add(N);
      let q = (e, t, l) => new __mod_2253.nWS(Math.max(1, e), Math.max(1, t), {
          type: n,
          format: __mod_2253.GWd,
          minFilter: l,
          magFilter: l,
          depthBuffer: !1,
          stencilBuffer: !1,
          generateMipmaps: !1
        }),
        P = r.createElement("canvas").getContext("2d", {
          willReadFrequently: !0
        }),
        $ = null,
        Y = [],
        O = [],
        X = null,
        H = "",
        V = null,
        K = "",
        Q = !1,
        Z = "",
        J = !1,
        ee = 0,
        et = 0,
        el = !1,
        ea = 30,
        er = 0,
        eo = 1,
        eu = 1,
        en = 1,
        ei = 0,
        es = 0,
        ec = v(.33714285714285713, 0, 1),
        ef = .25,
        em = () => {
          $?.dispose(), Y.forEach(e => e.dispose()), O.forEach(e => e.dispose()), $ = null, Y = [], O = [];
        },
        ed = () => {
          X?.targets.forEach(e => e.dispose()), X?.sparks.dispose(), X = null;
        },
        ep = (e, t) => {
          D.material = e, a.setRenderTarget(t), a.render(I, T);
        },
        ex = () => {
          let e = Math.round(v(11 * en * 1.25, 12, 96)),
            t = String(e);
          if (t !== K || !V) {
            let l, a, o, u, n, s, c, f, v, m;
            K = t, V?.texture.dispose(), (l = Array.from(new Set(Array.from(" .'`,:;-~+=*%$#&0123456789"))).slice(0, 180)).length < 2 && l.push(".", "#"), (a = r.createElement("canvas")).width = e, a.height = e, o = a.getContext("2d", {
              willReadFrequently: !0
            }), u = `500 ${Math.round(.8 * e)}px ui-monospace, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace`, c = Math.ceil((s = [...(n = l.map(t => ({
              character: t,
              ink: (t => {
                if (!o) return 0;
                o.fillStyle = "#000000", o.fillRect(0, 0, e, e), o.fillStyle = "#ffffff", o.textAlign = "center", o.textBaseline = "middle", o.font = u, o.fillText(t, e / 2, e / 2);
                let l = o.getImageData(0, 0, e, e).data,
                  a = 0;
                for (let e = 0; e < l.length; e += 4) a += l[e];
                return a;
              })(t)
            })).sort((e, t) => e.ink - t.ink)).map(e => e.character), ...Array.from("\xb7+*")]).length / 16), (f = r.createElement("canvas")).width = 16 * e, f.height = c * e, (v = f.getContext("2d")) && (v.fillStyle = "#000000", v.fillRect(0, 0, f.width, f.height), v.fillStyle = "#ffffff", v.textAlign = "center", v.textBaseline = "middle", v.font = u, s.forEach((t, l) => {
              let a = l % 16 * e + e / 2,
                r = Math.floor(l / 16) * e + e / 2 + .04 * e;
              v.fillText(t, a, r);
            })), (m = new __mod_2253.GOR(f)).minFilter = __mod_2253.$_I, m.magFilter = __mod_2253.k6q, m.generateMipmaps = !0, m.colorSpace = __mod_2253.jf0, m.flipY = !1, m.anisotropy = 4, m.needsUpdate = !0, V = {
              texture: m,
              count: n.length,
              rows: c
            }, F.uniforms.uAtlas.value = V.texture, F.uniforms.uAtlasGrid.value.set(16, V.rows), F.uniforms.uCount.value = V.count, F.uniforms.uSparkGlyph.value = V.count;
          }
        },
        eh = () => {
          let e = X ? X.rows : 1,
            t = ef * (.42 + 1.25 * ec) * e,
            l = t / 1.15;
          return {
            rise: l,
            cool: 2.6 * l / Math.max(t, 1),
            wind: .12 * l * .55,
            turbulence: .6 * l * .9
          };
        },
        eg = e => {
          if (!X) return;
          let t = eh(),
            l = R.uniforms;
          l.uGrid.value.set(X.cols, X.rows), l.uTime.value = ea, l.uDt.value = e, l.uRise.value = t.rise, l.uWind.value = t.wind, l.uTurb.value = t.turbulence, l.uCool.value = t.cool, l.uFuel.value = .72 + .5 * ec, l.uSmokeRate.value = Q ? .012 : .04, l.uSnuff.value.set(E.x, E.y, 70 / X.cellH, .8 * E.amount), l.uState.value = X.targets[X.index].texture, ep(R, X.targets[1 - X.index]), X.index = 1 - X.index;
        },
        eb = () => {
          let e = 11 * en,
            t = 1.02 * e,
            l = .62 * e,
            r = Math.ceil(eo * en / l),
            o = Math.ceil(eu * en / t),
            u = [r, o, l.toFixed(3), t.toFixed(3)].join("|");
          if (u === H && X) return;
          H = u, ed();
          let n = [0, 1].map(() => q(r, o, __mod_2253.k6q));
          for (let e of n) a.setRenderTarget(e), a.setClearColor(0, 0), a.clear();
          X = {
            cols: r,
            rows: o,
            cellW: l,
            cellH: t,
            targets: n,
            sparks: q(r, o, __mod_2253.hxR),
            index: 0
          };
          for (let e = 0; e < 3; e += c) ea += c, eg(c);
        },
        ek = () => {
          if (!P) return !1;
          P.clearRect(0, 0, 1, 1), P.fillStyle = "#0a0a0a", P.fillStyle = o.getComputedStyle(e).backgroundColor, P.fillRect(0, 0, 1, 1);
          let [t, l, a] = P.getImageData(0, 0, 1, 1).data,
            r = `${t},${l},${a}`;
          return r !== Z && (Z = r, Q = (.2126 * t + .7152 * l + .0722 * a) / 255 > .5, j.uniforms.uBackground.value.set(m(t / 255), m(l / 255), m(a / 255)), !0);
        },
        ey = () => {
          if (!$ || !Y.length) return;
          ex(), eb(), (() => {
            if (!X) return;
            let e = eh(),
              t = A.uniforms;
            t.uGrid.value.set(X.cols, X.rows), t.uTime.value = ea, t.uRise.value = e.rise, t.uWind.value = e.wind, t.uAmount.value = C ? 0 : .2 + .7 * ec, a.setRenderTarget(X.sparks), a.setClearColor(0, 0), a.clear(), a.render(W, T);
          })(), (() => {
            if (!X) return;
            let e = F.uniforms;
            e.uState.value = X.targets[X.index].texture, e.uSparks.value = X.sparks.texture, e.uCell.value.set(X.cellW, X.cellH), e.uTime.value = ea, e.uFlicker.value = .5 * !C, e.uInk.value = +!!Q;
            let t = j.uniforms;
            t.uExposure.value = (Q ? 6 : 1.2) * (.9 + .35 * ec), t.uMode.value = +!!Q, t.uGrain.value = ei;
          })(), ep(F, $);
          for (let t of Y) U.uniforms.uSource.value = $.texture, U.uniforms.uTexel.value.set(1 / $.width, 1 / $.height), ep(U, t), e = t;
          let t = Y[Y.length - 1];
          for (let e = Y.length - 2; e >= 0; e--) _.uniforms.uSource.value = t.texture, _.uniforms.uBase.value = Y[e].texture, _.uniforms.uTexel.value.set(1 / t.width, 1 / t.height), ep(_, O[e]), t = O[e];
          j.uniforms.uLines.value = $.texture, j.uniforms.uBloom.value = t.texture, ep(j, null);
        },
        ew = e => {
          if (ee = 0, J) return;
          let t = Math.min(.05, Math.max(0, (e - et) / 1e3));
          et = e;
          let l = E.inside && !C ? 1 : 0;
          if (E.amount += (l - E.amount) * (1 - Math.exp(-t / .3)), E.vx += (100 * (E.goalX - E.x) - 20 * E.vx) * t, E.vy += (100 * (E.goalY - E.y) - 20 * E.vy) * t, E.x += E.vx * t, E.y += E.vy * t, ec += (ec - ec) * (C ? 1 : 1 - Math.exp(-t / .45)), !C) {
            for (ex(), eb(), er = Math.min(er + t, 4 * c); er >= c;) er -= c, ea += c, eg(c);
            ei = (ei + .618034) % 1;
          }
          ey(), !el || r.hidden || C || (ee = o.requestAnimationFrame(ew));
        };
      function eS() {
        J || ee || !el || (et = o.performance.now(), ee = o.requestAnimationFrame(ew));
      }
      let eC = () => {
          let l = e.getBoundingClientRect();
          eo = Math.max(1, l.width), eu = Math.max(1, l.height), ef = v((l.bottom - t.getBoundingClientRect().bottom) / eu, .08, .6), en = Math.min(o.devicePixelRatio || 1, 2), a.setPixelRatio(en), a.setSize(eo, eu, !1);
          let r = Math.round(eo * en),
            u = Math.round(eu * en);
          em(), $ = q(r, u, __mod_2253.k6q);
          let n = v(Math.floor(Math.log2(Math.min(r, u) / 8)), 3, 7);
          for (let e = 1; e <= n; e++) Y.push(q(r >> e, u >> e, __mod_2253.k6q)), O.push(q(r >> e, u >> e, __mod_2253.k6q));
          ey(), eS();
        },
        eT = t => {
          let l = e.getBoundingClientRect(),
            a = X ? X.cellW : 1,
            r = X ? X.cellH : 1;
          return [(t.clientX - l.left) * en / a, (l.height - (t.clientY - l.top)) * en / r];
        },
        eM = e => {
          if ("touch" === e.pointerType) return;
          let [t, l] = eT(e);
          E.goalX = t, E.goalY = l, E.placed || (E.x = t, E.y = l, E.placed = !0), E.inside || (E.inside = !0, eS());
        },
        eL = () => {
          E.inside = !1, E.placed = !1, eS();
        },
        eE = (e, t) => {
          !C && X && (L[es = (es + 1) % 4].set(e, ea, t, .085 * X.cols), eS());
        },
        ez = e => {
          0 !== e.button || e.target?.closest?.("a,button,input,label") || eE(eT(e)[0], 1);
        },
        eB = () => {
          ek() && !ee && ey();
        },
        eG = () => {
          C = p.matches, ey(), eS();
        },
        eR = () => {
          r.hidden || eS();
        },
        eA = e => e.preventDefault();
      e.addEventListener("pointermove", eM), e.addEventListener("pointerleave", eL), e.addEventListener("pointercancel", eL), e.addEventListener("pointerdown", ez);
      let eF = new ResizeObserver(eC);
      eF.observe(e), eF.observe(t);
      let eU = new IntersectionObserver(e => {
        (el = e.some(e => e.isIntersecting)) && eS();
      }, {
        rootMargin: "80px"
      });
      eU.observe(e);
      let e_ = new MutationObserver(eB);
      e_.observe(r.documentElement, {
        attributes: !0,
        attributeFilter: ["class", "style", "data-theme"]
      });
      let ej = o.matchMedia("(prefers-color-scheme: dark)");
      return ej.addEventListener("change", eB), p.addEventListener("change", eG), r.addEventListener("visibilitychange", eR), u.addEventListener("webglcontextlost", eA), ek(), eC(), {
        setBurn: e => {
          let t = v(e, 0, 1);
          if (t > ec + .02 && X && eE(X.cols * (.35 + .3 * Math.random()), .6), ev = t, C) {
            if (ec = ec, X) for (let e = 0; e < 2; e += c) ea += c, eg(c);
            ey();
          }
          eS();
        },
        destroy: () => {
          J = !0, o.cancelAnimationFrame(ee), e.removeEventListener("pointermove", eM), e.removeEventListener("pointerleave", eL), e.removeEventListener("pointercancel", eL), e.removeEventListener("pointerdown", ez), ej.removeEventListener("change", eB), p.removeEventListener("change", eG), r.removeEventListener("visibilitychange", eR), u.removeEventListener("webglcontextlost", eA), e_.disconnect(), eF.disconnect(), eU.disconnect(), em(), ed(), V?.texture.dispose(), N.geometry.dispose(), M.dispose(), [R, A, F, U, _, j].forEach(e => e.dispose()), a.dispose(), u.remove();
        }
      };
    }(e, t, .33714285714285713);
    return z.current = a, () => {
      a?.destroy(), z.current = null;
    };
  }, []), (0, React.useEffect)(() => {
    z.current?.setBurn(A);
  }, [A]), <section ref={l} className="relative isolate flex min-h-screen w-full flex-col justify-end overflow-hidden bg-white px-4 pb-[clamp(7rem,22vh,13rem)] pt-20 text-neutral-950 dark:bg-neutral-950 dark:text-white sm:px-6 sm:pt-24 lg:px-8"><motion.div ref={p} variants={C} initial={!t && "hidden"} whileInView="show" viewport={{
      once: !0
    }} className="mx-auto flex w-full max-w-[1400px] flex-col gap-12 lg:flex-row lg:items-end lg:justify-between"><div className="max-w-[30rem] xl:max-w-[37rem] [text-shadow:0_0_28px_rgba(255,255,255,0.9)] dark:[text-shadow:0_0_28px_rgba(10,10,10,0.9)]"><motion.h1 variants={T} className="text-pretty text-[2.25rem] font-medium leading-[1.04] tracking-[-0.04em] sm:text-5xl xl:text-[3.75rem]">Know exactly how long your cash will last.</motion.h1><motion.p variants={T} className="mt-5 max-w-[38ch] text-pretty text-base leading-relaxed text-neutral-600 dark:text-neutral-400">Model hiring, revenue and spend, and watch your runway change as you plan.</motion.p><motion.div variants={T} className="mt-8 flex flex-row items-center gap-6"><a href="#" className="inline-flex h-12 items-center justify-center rounded-full bg-neutral-950 px-7 text-sm font-medium text-white transition-colors duration-200 hover:bg-neutral-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950 dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200 dark:focus-visible:outline-white">Start free</a><a href="#" className="group inline-flex h-12 items-center gap-2 rounded-full text-sm font-medium text-neutral-700 transition-colors duration-200 hover:text-neutral-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current dark:text-neutral-300 dark:hover:text-white">Book a demo<ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" /></a></motion.div></div><motion.div variants={T} className="w-full max-w-[26rem] [text-shadow:0_0_28px_rgba(255,255,255,0.9)] dark:[text-shadow:0_0_28px_rgba(10,10,10,0.9)]"><p className="flex items-baseline gap-3"><span className="-ml-[0.03em] text-[clamp(5rem,11vw,9.5rem)] font-medium leading-[0.85] tracking-[-0.06em] tabular-nums">{F.toFixed(1)}</span><span className="text-lg text-neutral-500 dark:text-neutral-400">months</span></p><p className="mt-3 h-5 text-sm text-neutral-600 dark:text-neutral-300">{null === R ? "" : `Cash runs out in ${new Date(Math.floor((e = R + Math.floor(F)) / 12), e % 12, 1).toLocaleDateString("en-US", {
            month: "long",
            year: "numeric"
          })}`}</p><label className="mt-8 block"><span className="flex items-baseline justify-between text-sm"><span className="text-neutral-500 dark:text-neutral-400">Monthly burn</span><span className="font-medium tabular-nums">{M(B)}</span></span><input type="range" min={25e3} max={2e5} step={1e3} value={B} onChange={e => G(Number(e.target.value))} aria-valuetext={`${M(B)} a month`} style={{
            background: `linear-gradient(to right, #ff5a1f ${100 * A}%, color-mix(in srgb, currentColor 18%, transparent) ${100 * A}%)`
          }} className="mt-3 h-1 w-full cursor-pointer appearance-none rounded-full outline-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current [&::-moz-range-thumb]:size-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:bg-current [&::-webkit-slider-thumb]:size-4 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-current" /></label></motion.div></motion.div></section>;
}

export default Hero30;

import * as React from "react";
import * as __mod_50969 from "../_helpers/50969";
import * as __mod_12246 from "../_helpers/12246";
import * as __mod_2253 from "../_helpers/2253";
/**
 * Features 15
 * Security scan plate where sonar pings light up each finding
 * slug: features-15
 * category: Features
 * export: Features15
 * deps: motion, three
 * original: ts-tailwind/blocks/features/features-15.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import { motion, AnimatePresence } from "motion/react";

let c = [{
    label: "Leaked secret, found in",
    value: "38 s",
    detail: "An AWS key in a public commit, revoked before anyone cloned it.",
    reach: -.75,
    lift: .2
  }, {
    label: "Open port, found in",
    value: "2 min",
    detail: "Postgres on 5432 left open on a production host, now closed.",
    reach: -.25,
    lift: -.42
  }, {
    label: "Vulnerable package, found in",
    value: "6 min",
    detail: "A known CVE in the auth service, with the patch already opened.",
    reach: .25,
    lift: .36
  }, {
    label: "Public bucket, found in",
    value: "11 min",
    detail: "An exports bucket anyone could read, locked down automatically.",
    reach: .75,
    lift: -.16
  }],
  s = (e, t, a) => Math.min(a, Math.max(t, e)),
  f = e => e <= .04045 ? e / 12.92 : Math.pow((e + .055) / 1.055, 2.4),
  d = ([e, t, a]) => {
    let l = f(e),
      r = f(t),
      o = f(a),
      n = Math.cbrt(.4122214708 * l + .5363325363 * r + .0514459929 * o),
      u = Math.cbrt(.2119034982 * l + .6806995451 * r + .1073969566 * o),
      i = Math.cbrt(.0883024619 * l + .2817188376 * r + .6299787005 * o);
    return [.2104542553 * n + .793617785 * u - .0040720468 * i, 1.9779984951 * n - 2.428592205 * u + .4505937099 * i, .0259040371 * n + .7827717662 * u - .808675766 * i];
  },
  m = `
out vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`,
  v = `
precision highp float;
uniform vec2 uCell;
uniform vec2 uResolution;
uniform float uTime;
uniform float uScale;
uniform vec2 uDrift;
uniform float uThreshold;
uniform float uAmbient;
uniform float uReveal;
uniform float uPersistence;
uniform float uWidth;
uniform float uFalloff;
uniform vec4 uPings[12];
uniform vec4 uPingShape[12];
uniform vec2 uBand;
out vec4 fragColor;

float hash2(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * 0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}

float hash3(vec3 p) {
  p = fract(p * 0.3183099 + 0.1);
  p *= 17.0;
  return fract(p.x * p.y * p.z * (p.x + p.y + p.z));
}

float noise3(vec3 x) {
  vec3 i = floor(x);
  vec3 f = fract(x);
  f = f * f * f * (f * (f * 6.0 - 15.0) + 10.0);
  return mix(
    mix(mix(hash3(i), hash3(i + vec3(1.0, 0.0, 0.0)), f.x), mix(hash3(i + vec3(0.0, 1.0, 0.0)), hash3(i + vec3(1.0, 1.0, 0.0)), f.x), f.y),
    mix(mix(hash3(i + vec3(0.0, 0.0, 1.0)), hash3(i + vec3(1.0, 0.0, 1.0)), f.x), mix(hash3(i + vec3(0.0, 1.0, 1.0)), hash3(i + vec3(1.0, 1.0, 1.0)), f.x), f.y),
    f.z
  );
}

float fbm(vec3 p) {
  float sum = 0.0;
  float amplitude = 0.5;
  for (int i = 0; i < 4; i++) {
    sum += amplitude * noise3(p);
    p = p * 2.03 + vec3(17.1, 3.7, 1.3);
    amplitude *= 0.5;
  }
  return sum / 0.9375;
}

void main() {
  vec2 center = gl_FragCoord.xy * uCell;
  float speck = hash2(floor(gl_FragCoord.xy) + 17.0);
  float crest = 0.0;
  float tail = 0.0;
  float echo = 0.0;
  for (int k = 0; k < 12; k++) {
    vec4 ping = uPings[k];
    if (ping.w <= 0.0) continue;
    vec4 shape = uPingShape[k];
    float age = uTime - ping.z;
    if (age < 0.0) continue;
    vec2 rel = center - ping.xy;
    float dist = length(rel);
    if (dist > shape.y) continue;
    float radius = age * shape.x;
    float lag = radius - dist;
    if (lag < -uWidth * 3.0) continue;
    float fade = ping.w * (1.0 - smoothstep(shape.y * 0.45, shape.y, dist)) * smoothstep(0.0, shape.w, radius);
    float width = lag < 0.0 ? uWidth * 0.6 : uWidth;
    float x = lag / width;
    float front = exp(-x * x * x * x);
    float after = lag > 0.0 ? exp(-lag / max(shape.x * uPersistence, 1.0)) : 0.0;
    if (shape.z > 0.5) {
      echo += front * fade;
    } else {
      crest += front * fade;
      tail += after * (1.0 - front) * fade;
    }
  }
  crest = min(crest, 1.2);
  tail = min(tail, 1.0);
  echo = min(echo, 1.2);
  float band = 1.0 - smoothstep(uBand.y * 0.55, uBand.y, abs(center.y - uBand.x));
  float grid = uAmbient * (0.75 + 0.25 * speck);
  float value = (grid + crest * 0.62 + tail * 0.12 + echo * 0.7) * band;
  float accent = echo * band;
  value = clamp(value, 0.0, 1.0);
  float tone = clamp(0.2 + crest * 0.8 + tail * 0.2, 0.0, 1.0);
  fragColor = vec4(value, tone, clamp(accent, 0.0, 1.0), 1.0);
}
`,
  h = `
precision highp float;
uniform sampler2D uField;
uniform sampler2D uAtlas;
uniform vec2 uAtlasGrid;
uniform float uCount;
uniform vec2 uCell;
uniform float uSpan;
uniform float uGamma;
uniform float uDither;
uniform float uInk;
uniform vec3 uLabA;
uniform vec3 uLabB;
uniform vec3 uAccent;
uniform vec4 uContacts[4];
out vec4 fragColor;

float hash(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * 0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}

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

float glyphCoverage(float index, vec2 g) {
  vec2 f = fract(g) - 0.5;
  vec2 texel = vec2(0.5 + f.x * uSpan, 0.5 - f.y * uSpan);
  float inside = step(0.0, texel.x) * step(texel.x, 1.0) * step(0.0, texel.y) * step(texel.y, 1.0);
  vec2 slot = vec2(mod(index, uAtlasGrid.x), floor(index / uAtlasGrid.x));
  vec2 uv = (slot + clamp(texel, 0.0, 1.0)) / uAtlasGrid;
  vec2 scale = vec2(uSpan) / uAtlasGrid;
  return textureGrad(uAtlas, uv, dFdx(g) * scale, dFdy(g) * scale).r * inside;
}

vec3 palette(float t) {
  vec3 deep = vec3(uLabA.x * 0.55, uLabA.yz * 0.85);
  vec3 top = uInk > 0.5
    ? vec3(uLabB.x * 0.72, uLabB.yz * 1.05)
    : vec3(min(uLabB.x * 1.08 + 0.05, 0.99), uLabB.yz * 0.35);
  vec3 lab = t < 0.45 ? mix(deep, uLabA, smoothstep(0.0, 0.45, t))
    : t < 0.85 ? mix(uLabA, uLabB, smoothstep(0.45, 0.85, t))
    : mix(uLabB, top, smoothstep(0.85, 1.0, t));
  return labToLinear(lab);
}

void main() {
  vec2 g = gl_FragCoord.xy / uCell;
  vec2 cellId = floor(g);
  vec4 field = texelFetch(uField, ivec2(cellId), 0);
  float dither = hash(cellId) - 0.5;
  float value = clamp(field.r + dither * uDither * step(0.015, field.r), 0.0, 1.0);
  float level = pow(value, uGamma);
  float index = floor(level * (uCount - 1.0) + 0.5);
  float energy = 0.0;
  vec3 color = vec3(0.0);
  if (index >= 1.0) {
    float cover = glyphCoverage(index, g);
    color = mix(palette(clamp(field.g, 0.0, 1.0)), uAccent, clamp(field.b, 0.0, 1.0));
    energy = cover * (0.16 + 0.95 * level);
  }
  vec3 light = color * energy;
  for (int c = 0; c < 4; c++) {
    vec4 contact = uContacts[c];
    vec2 delta = gl_FragCoord.xy - contact.xy;
    if (max(abs(delta.x), abs(delta.y)) > uCell.x * 0.65) continue;
    float distance = length(delta);
    float radius = uCell.x * 0.27;
    float stroke = max(uCell.x * 0.045, 0.5);
    float ring = 1.0 - smoothstep(stroke - 0.5, stroke + 0.5, abs(distance - radius));
    float clear = 1.0 - smoothstep(radius + stroke + 0.5, radius + stroke + 1.5, distance);
    float marker = ring * (0.7 + 0.4 * contact.z);
    light = light * (1.0 - clear) + mix(palette(1.0), uAccent, clamp(contact.z, 0.0, 1.0)) * marker;
    energy = energy * (1.0 - clear) + marker;
  }
  fragColor = vec4(light, energy);
}
`,
  p = `
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
  x = `
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
  g = `
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
function Features15() {
  let e = (0, __mod_50969.I)(),
    t = (0, React.useRef)(null),
    a = (0, React.useRef)(null),
    w = (0, React.useRef)([]),
    k = (0, React.useRef)(null);
  return (0, React.useEffect)(() => {
    let e = t.current,
      l = a.current;
    if (!e || !l) return;
    let r = function (e, t, a) {
      let l,
        r = e.ownerDocument,
        o = r.defaultView ?? window,
        n = r.createElement("canvas");
      n.setAttribute("aria-hidden", "true"), n.style.cssText = "position:absolute;inset:0;z-index:-1;width:100%;height:100%;display:block;pointer-events:none";
      try {
        l = new __mod_12246.WebGLRenderer({
          canvas: n,
          alpha: !1,
          antialias: !1,
          powerPreference: "high-performance"
        });
      } catch {
        return null;
      }
      if (!l.capabilities.isWebGL2) return l.dispose(), null;
      e.prepend(n), l.autoClear = !1;
      let b = l.extensions.has("EXT_color_buffer_float") || l.extensions.has("EXT_color_buffer_half_float") ? __mod_2253.ix0 : __mod_2253.OUM,
        y = o.matchMedia("(prefers-reduced-motion: reduce)"),
        w = y.matches,
        k = new __mod_2253.qUd(-1, 1, 1, -1, 0, 1),
        M = new __mod_2253.bdM(2, 2),
        C = Array.from({
          length: 16
        }, () => new __mod_2253.IUQ(0, 0, 0, 0)),
        S = Array.from({
          length: 16
        }, () => new __mod_2253.IUQ(1, 1, 0, 0)),
        T = Array.from({
          length: 4
        }, () => new __mod_2253.IUQ(0, 0, 0, 0)),
        A = Array.from({
          length: 12
        }, () => ({
          active: !1,
          echo: !1,
          x: 0,
          y: 0,
          born: 0,
          amplitude: 0,
          hit: c.map(() => !1)
        })),
        B = c.map(() => 0),
        E = (e, t) => new __mod_2253.BKk({
          glslVersion: __mod_2253.Wdf,
          uniforms: t,
          vertexShader: m,
          fragmentShader: e,
          depthTest: !1,
          depthWrite: !1,
          blending: __mod_2253.XIg
        }),
        L = E(v, {
          uCell: {
            value: new __mod_2253.I9Y(11, 11)
          },
          uResolution: {
            value: new __mod_2253.I9Y(1, 1)
          },
          uTime: {
            value: 0
          },
          uScale: {
            value: 1.2
          },
          uDrift: {
            value: new __mod_2253.I9Y(.026, -.009)
          },
          uThreshold: {
            value: .57
          },
          uAmbient: {
            value: .16
          },
          uReveal: {
            value: .5
          },
          uPersistence: {
            value: .35
          },
          uWidth: {
            value: 8
          },
          uFalloff: {
            value: 300
          },
          uPings: {
            value: C
          },
          uPingShape: {
            value: S
          },
          uBand: {
            value: new __mod_2253.I9Y(0, 100)
          }
        }),
        P = E(h, {
          uField: {
            value: null
          },
          uAtlas: {
            value: null
          },
          uAtlasGrid: {
            value: new __mod_2253.I9Y(16, 1)
          },
          uCount: {
            value: 2
          },
          uCell: {
            value: new __mod_2253.I9Y(11, 11)
          },
          uSpan: {
            value: 1
          },
          uGamma: {
            value: .9
          },
          uDither: {
            value: .05
          },
          uInk: {
            value: 0
          },
          uLabA: {
            value: new __mod_2253.Pq0(...d([.42, .42, .42]))
          },
          uLabB: {
            value: new __mod_2253.Pq0(...d([.93, .93, .93]))
          },
          uAccent: {
            value: new __mod_2253.Pq0()
          },
          uContacts: {
            value: T
          }
        }),
        F = E(p, {
          uSource: {
            value: null
          },
          uTexel: {
            value: new __mod_2253.I9Y()
          }
        }),
        I = E(x, {
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
        R = E(g, {
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
            value: .18
          },
          uExposure: {
            value: 1.25
          },
          uMode: {
            value: 0
          },
          uGrain: {
            value: 0
          }
        }),
        U = new __mod_2253.eaF(M, R);
      U.frustumCulled = !1;
      let G = new __mod_2253.Z58();
      G.add(U);
      let z = (e, t) => new __mod_2253.nWS(Math.max(1, e), Math.max(1, t), {
          type: b,
          format: __mod_2253.GWd,
          minFilter: __mod_2253.k6q,
          magFilter: __mod_2253.k6q,
          depthBuffer: !1,
          stencilBuffer: !1,
          generateMipmaps: !1
        }),
        _ = null,
        D = [],
        j = [],
        W = null,
        N = "",
        q = null,
        Y = "",
        $ = r.createElement("canvas").getContext("2d", {
          willReadFrequently: !0
        }),
        O = "",
        V = 1,
        X = 1,
        Q = 1,
        J = 0,
        K = 0,
        Z = 0,
        H = 0,
        ee = 100,
        et = c.map(() => ({
          x: 0,
          y: 0
        })),
        ea = 0,
        el = 0,
        er = !1,
        eo = !1,
        en = !1,
        eu = !1,
        ei = () => {
          _?.dispose(), D.forEach(e => e.dispose()), j.forEach(e => e.dispose()), _ = null, D = [], j = [];
        },
        ec = (e, t) => {
          U.material = e, l.setRenderTarget(t), l.render(G, k);
        },
        es = () => 11 * s(Math.min(V, X) / 520, .75, 1) * Q,
        ef = () => Math.hypot(V, Math.min(X, 2.4 * ee / Q)) * Q,
        ed = () => {
          let t;
          if (!$) return !1;
          let l = "rgba(0, 0, 0, 0)";
          for (; e;) {
            let e = o.getComputedStyle(e).backgroundColor;
            if (!/rgba?\(\s*0,\s*0,\s*0,\s*0\s*\)|transparent/.test(e)) {
              l = e;
              break;
            }
            a = e.parentElement;
          }
          $.clearRect(0, 0, 1, 1), $.fillStyle = "#0a0a0a", $.fillStyle = l, $.fillRect(0, 0, 1, 1);
          let [r, n, u] = $.getImageData(0, 0, 1, 1).data,
            i = `${r},${n},${u}`;
          if (i === O) return !1;
          O = i;
          let c = (.2126 * r + .7152 * n + .0722 * u) / 255 > .5;
          R.uniforms.uBackground.value.set(f(r / 255), f(n / 255), f(u / 255)), R.uniforms.uMode.value = +!!c, R.uniforms.uExposure.value = c ? 4 : 1.25, P.uniforms.uInk.value = +!!c;
          let s = [((t = Number.parseInt((c ? "#d7261b" : "#ff3b2f").slice(1), 16)) >> 16 & 255) / 255, (t >> 8 & 255) / 255, (255 & t) / 255].map(f);
          return P.uniforms.uAccent.value.set(...s), !0;
        },
        em = (e, t, a, l = !1, r = J) => {
          let o = A.findIndex(e => !e.active);
          if (o < 0) {
            o = 0;
            for (let e = 1; e < 12; e++) A[e].born < A[o].born && (o = e);
          }
          Object.assign(A[o], {
            active: !0,
            echo: l,
            x: e,
            y: t,
            born: r,
            amplitude: a,
            hit: c.map(() => !1)
          });
        },
        ev = () => {
          let l = e.getBoundingClientRect(),
            r = t.getBoundingClientRect(),
            o = a.map(e => e?.getBoundingClientRect());
          H = (l.bottom - (r.top + r.height / 2)) * Q, ee = r.height / 2 * Q;
          let n = o.map((e, t) => e && 0 !== e.width ? (e.left + e.width / 2 - l.left - l.width / 2) / Math.max(l.width / 2, 1) : c[t].reach);
          (Math.max(...n) - Math.min(...n) < .2 ? c.map(e => .8 * e.reach) : n).forEach((e, t) => {
            let r = l.width / 2 * (1 + e) * Q,
              n = H + c[t].lift * ee * .78;
            et[t] = {
              x: r,
              y: n
            };
            let u = a[t],
              i = o[t];
            if (!u || !i) return;
            let s = (i.top - l.top) * Q,
              f = l.height * Q - n;
            u.style.setProperty("--lead", `${Math.max((s - f - .27 * es()) / Q, 0)}px`);
          }), eu = !1;
        },
        eh = () => {
          let e, t, a, l, o, n, i, c, f, d;
          if (!_ || !D.length) return;
          eu && ev(), (() => {
            let e = Math.round(s(es(), 8, 96)),
              t = String(e);
            if (t !== Y || !q) {
              let a, l, o, n, i, c, s, f, d, m, v, h;
              Y = t, q?.texture.dispose(), (a = Array.from(new Set(Array.from(" \xb7+\xd7○◎◉"))).slice(0, 180)).includes(" ") || a.unshift(" "), a.length < 2 && a.push("\xb7"), o = .5 * ((l = Math.max(1, Math.round(.075 * e * 1))) % 2 == 1), n = `500 ${Math.round(.78 * e)}px ui-monospace, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace`, i = (t, a, r, u) => {
                t.fillStyle = "#ffffff", t.strokeStyle = "#ffffff", ((e, t, a, l, r, o) => {
                  let n = t => {
                      e.beginPath(), e.arc(a, l, t, 0, 2 * Math.PI), e.stroke();
                    },
                    u = t => {
                      e.beginPath(), e.arc(a, l, t, 0, 2 * Math.PI), e.fill();
                    },
                    i = t => {
                      e.beginPath(), e.moveTo(a, l - t), e.lineTo(a + t, l), e.lineTo(a, l + t), e.lineTo(a - t, l), e.closePath();
                    },
                    c = t => {
                      e.beginPath(), e.moveTo(a, l - t), e.lineTo(a + .92 * t, l + .6 * t), e.lineTo(a - .92 * t, l + .6 * t), e.closePath();
                    };
                  switch (e.lineWidth = o, e.lineCap = "round", e.lineJoin = "round", t) {
                    case "\xb7":
                      return u(Math.max(.065 * r, .8 * o)), !0;
                    case "•":
                      return u(.13 * r), !0;
                    case "●":
                      return u(.25 * r), !0;
                    case "+":
                      return e.beginPath(), e.moveTo(a - .2 * r, l), e.lineTo(a + .2 * r, l), e.moveTo(a, l - .2 * r), e.lineTo(a, l + .2 * r), e.stroke(), !0;
                    case "\xd7":
                      return e.beginPath(), e.moveTo(a - .16 * r, l - .16 * r), e.lineTo(a + .16 * r, l + .16 * r), e.moveTo(a + .16 * r, l - .16 * r), e.lineTo(a - .16 * r, l + .16 * r), e.stroke(), !0;
                    case "○":
                      return n(.26 * r), !0;
                    case "□":
                      return e.beginPath(), e.rect(a - .23 * r, l - .23 * r, .46 * r, .46 * r), e.stroke(), !0;
                    case "■":
                      return e.fillRect(a - .21 * r, l - .21 * r, .42 * r, .42 * r), !0;
                    case "◇":
                      return i(.3 * r), e.stroke(), !0;
                    case "◆":
                      return i(.28 * r), e.fill(), !0;
                    case "△":
                      return c(.3 * r), e.stroke(), !0;
                    case "▲":
                      return c(.28 * r), e.fill(), !0;
                    case "◎":
                      return n(.28 * r), u(.085 * r), !0;
                    case "◉":
                      return n(.28 * r), u(.15 * r), !0;
                    default:
                      return !1;
                  }
                })(t, a, r + o, u + o, e, l) || (t.textAlign = "center", t.textBaseline = "middle", t.font = n, t.fillText(a, r, u + .04 * e));
              }, (c = r.createElement("canvas")).width = e, c.height = e, s = c.getContext("2d", {
                willReadFrequently: !0
              }), d = Math.ceil((f = a.map(t => ({
                character: t,
                ink: (t => {
                  if (!s || " " === t) return 0;
                  s.fillStyle = "#000000", s.fillRect(0, 0, e, e), i(s, t, Math.floor(e / 2), Math.floor(e / 2));
                  let a = s.getImageData(0, 0, e, e).data,
                    l = 0;
                  for (let e = 0; e < a.length; e += 4) l += a[e];
                  return l;
                })(t)
              })).sort((e, t) => e.ink - t.ink).map(e => e.character)).length / 16), (m = r.createElement("canvas")).width = 16 * e, m.height = d * e, (v = m.getContext("2d")) && (v.fillStyle = "#000000", v.fillRect(0, 0, m.width, m.height), f.forEach((t, a) => {
                " " === t || i(v, t, a % 16 * e + Math.floor(e / 2), Math.floor(a / 16) * e + Math.floor(e / 2));
              })), (h = new __mod_2253.GOR(m)).minFilter = __mod_2253.$_I, h.magFilter = __mod_2253.k6q, h.generateMipmaps = !0, h.colorSpace = __mod_2253.jf0, h.flipY = !1, h.anisotropy = 4, h.needsUpdate = !0, q = {
                texture: h,
                count: f.length,
                rows: d
              }, P.uniforms.uAtlas.value = q.texture, P.uniforms.uAtlasGrid.value.set(16, q.rows), P.uniforms.uCount.value = q.count;
            }
          })(), e = es(), t = Math.ceil(V * Q / e), a = Math.ceil(X * Q / e), (l = `${t}|${a}`) === N && W || (N = l, W?.dispose(), W = new __mod_2253.nWS(t, a, {
            type: b,
            format: __mod_2253.GWd,
            minFilter: __mod_2253.hxR,
            magFilter: __mod_2253.hxR,
            depthBuffer: !1,
            stencilBuffer: !1,
            generateMipmaps: !1
          })), o = V * Q, n = X * Q, i = ef(), c = es(), (f = L.uniforms).uCell.value.set(c, c), f.uResolution.value.set(o, n), f.uTime.value = J, f.uWidth.value = Math.max(1, .8 * c), f.uFalloff.value = .25 * i, f.uBand.value.set(H, ee), A.forEach((e, t) => {
            e.active ? (C[t].set(e.x, e.y, e.born, e.amplitude), S[t].set(.17 * i * (e.echo ? .55 : 1), e.echo ? Math.min(.17 * i, 230 * Q) : .75 * i, +!!e.echo, Math.max(1, (e.echo ? .004 : .06) * i))) : C[t].set(0, 0, 0, 0);
          }), et.forEach((e, t) => T[t].set(e.x, e.y, B[t], 0)), (d = P.uniforms).uField.value = W ? W.texture : null, d.uCell.value.set(c, c), d.uSpan.value = 1, d.uDither.value = .12 / Math.sqrt(Math.max((q?.count ?? 8) / 8, 1)), R.uniforms.uGrain.value = Z, W && ec(L, W), ec(P, _);
          for (let e of D) F.uniforms.uSource.value = _.texture, F.uniforms.uTexel.value.set(1 / _.width, 1 / _.height), ec(F, e), m = e;
          let v = D[D.length - 1];
          for (let e = D.length - 2; e >= 0; e--) I.uniforms.uSource.value = v.texture, I.uniforms.uBase.value = D[e].texture, I.uniforms.uTexel.value.set(1 / v.width, 1 / v.height), ec(I, j[e]), v = j[e];
          R.uniforms.uLines.value = _.texture, R.uniforms.uBloom.value = v.texture, ec(R, null);
        },
        ep = () => {
          eo || en || !er || ea || (ea = o.requestAnimationFrame(ex));
        };
      function ex(e) {
        if (ea = 0, eo || en) return;
        let t = el && e - el < 100 ? Math.min((e - el) / 1e3, .05) : 1 / 60;
        el = e, eu && ev(), (e => {
          if (w) return B.forEach((e, t) => B[t] = .35);
          J += e;
          let t = V * Q;
          J >= K && (em(t / 2, H, 1, !1, K), K = Math.max(K + 3.6, J + .9));
          let l = ef();
          A.forEach(e => {
            if (!e.active) return;
            let t = (J - e.born) * .17 * l * (e.echo ? .55 : 1);
            e.echo || et.forEach((a, l) => {
              !e.hit[l] && t >= Math.hypot(a.x - e.x, a.y - e.y) && (e.hit[l] = !0, B[l] = Math.max(B[l], e.amplitude), em(a.x, a.y, .95 * e.amplitude, !0));
            }), t > (e.echo ? Math.min(.2 * l, 270 * Q) : .9 * l) && (e.active = !1);
          }), B.forEach((t, l) => {
            B[l] = t * Math.exp(-e / 1.1);
            let r = a[l];
            r && (r.dataset.lit = B[l] > .35 ? "true" : "false");
          }), Z = (Z + .618034) % 1;
        })(t), eh(), w ? el = 0 : ep();
      }
      let eg = () => {
          let t = e.getBoundingClientRect();
          V = Math.max(1, t.width), X = Math.max(1, t.height), Q = Math.min(o.devicePixelRatio || 1, 2), l.setPixelRatio(Q), l.setSize(V, X, !1);
          let a = Math.round(V * Q),
            r = Math.round(X * Q);
          ei(), _ = z(a, r);
          let n = s(Math.floor(Math.log2(Math.min(a, r) / 8)), 3, 6);
          for (let e = 1; e <= n; e++) D.push(z(a >> e, r >> e)), j.push(z(a >> e, r >> e));
          ev(), eh(), ep();
        },
        eb = t => {
          if (w || 0 !== t.button || t.target?.closest?.("a,button,[tabindex]")) return;
          let a = e.getBoundingClientRect(),
            l = (t.clientX - a.left) * Q,
            r = (a.height - (t.clientY - a.top)) * Q;
          Math.abs(r - H) > ee || (em(l, r, 1.1, !1), ep());
        },
        ey = () => {
          ed() && (!ea && er && eh(), ep());
        },
        ew = () => {
          w = y.matches, el = 0, ep();
        },
        ek = e => {
          e.preventDefault(), en = !0, o.cancelAnimationFrame(ea), ea = 0;
        },
        eM = () => {
          en = !1, O = "", Y = "", ed(), eg();
        },
        eC = new ResizeObserver(eg),
        eS = new IntersectionObserver(([e]) => {
          er = e.isIntersecting, el = 0, ep();
        }, {
          rootMargin: "80px"
        }),
        eT = new MutationObserver(ey),
        eA = o.matchMedia("(prefers-color-scheme: dark)");
      return eT.observe(r.documentElement, {
        attributes: !0,
        attributeFilter: ["class", "style", "data-theme"]
      }), eA.addEventListener("change", ey), y.addEventListener("change", ew), e.addEventListener("pointerdown", eb), n.addEventListener("webglcontextlost", ek), n.addEventListener("webglcontextrestored", eM), eC.observe(e), eC.observe(t), eS.observe(e), ed(), eg(), K = .4, {
        updateLayout: () => {
          eu = !0, ep();
        },
        destroy: () => {
          eo = !0, o.cancelAnimationFrame(ea), eT.disconnect(), eC.disconnect(), eS.disconnect(), eA.removeEventListener("change", ey), y.removeEventListener("change", ew), e.removeEventListener("pointerdown", eb), n.removeEventListener("webglcontextlost", ek), n.removeEventListener("webglcontextrestored", eM), ei(), W?.dispose(), q?.texture.dispose(), M.dispose(), [L, P, F, I, R].forEach(e => e.dispose()), l.dispose(), n.remove();
        }
      };
    }(e, l, w.current);
    return k.current = r, () => {
      k.current = null, r?.destroy();
    };
  }, []), <section ref={t} className="relative isolate w-full overflow-hidden bg-white px-4 py-20 text-neutral-950 dark:bg-neutral-950 dark:text-white sm:px-6 lg:px-8 lg:py-28"><motion.div variants={b} initial={!e && "hidden"} whileInView="show" viewport={{
      once: !0,
      amount: .3
    }} className="mx-auto w-full max-w-[1400px]"><div className="grid gap-5 lg:grid-cols-2 lg:items-end lg:gap-16"><motion.h2 variants={y} className="max-w-[19ch] text-balance text-[2.25rem] font-medium leading-[1.04] tracking-[-0.04em] sm:text-5xl">Find every way in before anyone else does.</motion.h2><motion.p variants={y} className="max-w-[44ch] text-pretty text-base leading-relaxed text-neutral-600 lg:justify-self-end dark:text-neutral-400">Round-the-clock scans of your code, cloud and edge, with a fix for every finding.</motion.p></div><motion.div variants={y} onUpdate={() => k.current?.updateLayout()} onAnimationComplete={() => k.current?.updateLayout()}><div ref={a} aria-hidden="true" className="mt-10 h-[clamp(14rem,30vw,26rem)] w-full sm:mt-14" /><ol className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4">{c.map((e, t) => <li ref={e => {
            w.current[t] = e;
          }} data-lit="false" className="group relative flex flex-col pt-8 lg:items-center lg:pt-10 lg:text-center"><span aria-hidden="true" className="absolute bottom-full left-1/2 hidden h-[var(--lead,0px)] w-px -translate-x-1/2 bg-neutral-950/20 transition-colors duration-500 group-data-[lit=true]:bg-[#d7261b] lg:block dark:bg-white/20 dark:group-data-[lit=true]:bg-[#ff3b2f]" /><span className="text-sm text-neutral-500">{e.label}</span><span className="mt-2 text-[2.5rem] font-medium leading-none tracking-[-0.04em] tabular-nums transition-colors duration-500 group-data-[lit=true]:text-[#d7261b] sm:text-5xl dark:group-data-[lit=true]:text-[#ff3b2f]">{e.value}</span><span className="mt-4 max-w-[30ch] text-pretty text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">{e.detail}</span></li>)}</ol></motion.div></motion.div></section>;
}

export default Features15;

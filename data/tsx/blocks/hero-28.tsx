import { motion, AnimatePresence } from "motion/react";
import * as React from "react";
import * as __mod_50969 from "../_helpers/50969";
import * as __mod_12246 from "../_helpers/12246";
import * as __mod_2253 from "../_helpers/2253";
/**
 * Hero 28
 * Plant shop hero where each plant casts its shadow across a sunlit wall
 * slug: hero-28
 * category: Hero Section
 * export: Hero28
 * deps: lucide-react, motion, three
 * original: ts-tailwind/blocks/hero/hero-28.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import { ArrowRight } from "lucide-react";

let c = [{
    kind: "ficus",
    name: "Fig",
    common: "Fiddle-leaf fig",
    species: "Ficus lyrata",
    height: "120 cm",
    light: "Bright, indirect light",
    price: "$128"
  }, {
    kind: "olive",
    name: "Olive",
    common: "Olive tree",
    species: "Olea europaea",
    height: "140 cm",
    light: "Full sun, south facing",
    price: "$164"
  }, {
    kind: "palm",
    name: "Palm",
    common: "Kentia palm",
    species: "Howea forsteriana",
    height: "160 cm",
    light: "Happy in low light",
    price: "$146"
  }, {
    kind: "fern",
    name: "Fern",
    common: "Boston fern",
    species: "Nephrolepis exaltata",
    height: "60 cm",
    light: "Soft light, humid rooms",
    price: "$58"
  }],
  f = [.25, .23, .17],
  d = [1, .78, .52],
  h = {
    ficus: 1.08,
    olive: 1.14,
    palm: 1.2,
    fern: 1
  },
  m = 2 * Math.PI,
  v = {
    ficus: [{
      offset: 0,
      length: .95,
      segments: 6,
      curl: .16,
      droop: .05,
      depth: .12,
      spread: 0
    }, {
      offset: -.44,
      length: .74,
      segments: 5,
      curl: -.1,
      droop: .06,
      depth: .55,
      spread: -.12
    }, {
      offset: .42,
      length: .66,
      segments: 5,
      curl: .2,
      droop: .04,
      depth: .95,
      spread: .1
    }, {
      offset: .88,
      length: .52,
      segments: 4,
      curl: -.14,
      droop: .07,
      depth: .35,
      spread: .2
    }],
    olive: [{
      offset: .02,
      length: 1.15,
      segments: 10,
      curl: .1,
      droop: .035,
      depth: .18,
      spread: 0
    }, {
      offset: -.36,
      length: .92,
      segments: 8,
      curl: -.07,
      droop: .04,
      depth: .6,
      spread: -.1
    }, {
      offset: .4,
      length: .86,
      segments: 8,
      curl: .14,
      droop: .03,
      depth: 1,
      spread: .12
    }],
    palm: [{
      offset: .04,
      length: 1.28,
      segments: 14,
      curl: .02,
      droop: .05,
      depth: .14,
      spread: 0
    }, {
      offset: -.5,
      length: 1.05,
      segments: 12,
      curl: -.02,
      droop: .06,
      depth: .6,
      spread: -.08
    }, {
      offset: .56,
      length: 1,
      segments: 12,
      curl: .03,
      droop: .065,
      depth: .95,
      spread: .1
    }],
    fern: [{
      offset: 0,
      length: 1.1,
      segments: 18,
      curl: .22,
      droop: .06,
      depth: .15,
      spread: 0
    }, {
      offset: -.42,
      length: .88,
      segments: 15,
      curl: .12,
      droop: .07,
      depth: .55,
      spread: -.1
    }, {
      offset: .45,
      length: .82,
      segments: 14,
      curl: .3,
      droop: .06,
      depth: .95,
      spread: .12
    }, {
      offset: .9,
      length: .62,
      segments: 11,
      curl: .18,
      droop: .08,
      depth: .4,
      spread: .2
    }]
  },
  p = (e, t, a) => Math.min(a, Math.max(t, e)),
  g = e => {
    let t = (e + Math.PI) % m;
    return t < 0 && (t += m), t - Math.PI;
  },
  x = e => e <= .04045 ? e / 12.92 : Math.pow((e + .055) / 1.055, 2.4),
  w = (e, t) => .55 * Math.sin(.71 * e + t) + .3 * Math.sin(1.37 * e + 2.1 * t) + .15 * Math.sin(2.93 * e + .7 * t),
  y = `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`,
  b = `
attribute vec4 iLeaf;
attribute vec4 iShape;
uniform vec2 uHalf;
varying vec2 vLocal;
varying vec4 vShape;
varying float vLength;
void main() {
  float r = iLeaf.w * 0.5;
  vec2 extent = vec2(r, r * iShape.x) + iShape.y * 2.4 + 0.003;
  vec2 local = position.xy * extent;
  float c = cos(iLeaf.z);
  float s = sin(iLeaf.z);
  vec2 world = iLeaf.xy + vec2(c * local.x - s * local.y, s * local.x + c * local.y);
  gl_Position = vec4(world / uHalf, 0.0, 1.0);
  vLocal = local;
  vShape = iShape;
  vLength = iLeaf.w;
}
`,
  k = `
varying vec2 vLocal;
varying vec4 vShape;
varying float vLength;
float leaf(vec2 p, float len, float ratio) {
  float r = len * 0.5;
  float w = max(r * ratio, 1e-4);
  float R = (r * r + w * w) / (2.0 * w);
  vec2 q = abs(p);
  return max(length(vec2(q.x, q.y + R - w)) - R, q.x - r);
}
void main() {
  float d = leaf(vLocal, vLength, vShape.x);
  gl_FragColor = vec4((1.0 - smoothstep(-vShape.y, vShape.y, d)) * vShape.z);
}
`,
  S = `
attribute vec4 iStem;
attribute vec4 iStemShape;
uniform vec2 uHalf;
varying vec2 vWorld;
varying vec4 vSegment;
varying vec4 vShape;
void main() {
  vec2 axis = iStem.zw - iStem.xy;
  float len = max(length(axis), 1e-5);
  vec2 dir = axis / len;
  vec2 perp = vec2(-dir.y, dir.x);
  float pad = iStemShape.x + iStemShape.y * 2.4 + 0.003;
  vec2 world = (iStem.xy + iStem.zw) * 0.5 + dir * position.x * (len * 0.5 + pad) + perp * position.y * pad;
  gl_Position = vec4(world / uHalf, 0.0, 1.0);
  vWorld = world;
  vSegment = iStem;
  vShape = iStemShape;
}
`,
  M = `
varying vec2 vWorld;
varying vec4 vSegment;
varying vec4 vShape;
void main() {
  vec2 pa = vWorld - vSegment.xy;
  vec2 ba = vSegment.zw - vSegment.xy;
  float h = clamp(dot(pa, ba) / max(dot(ba, ba), 1e-8), 0.0, 1.0);
  float d = length(pa - ba * h) - vShape.x;
  gl_FragColor = vec4((1.0 - smoothstep(-vShape.y, vShape.y, d)) * vShape.z);
}
`,
  L = `
float hash(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * 0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}
`,
  E = `
uniform vec4 uWindow;
uniform float uAngle;
float sunlight(vec2 p) {
  vec2 d = p - uWindow.xy;
  float c = cos(uAngle);
  float s = sin(uAngle);
  vec2 r = vec2(c * d.x + s * d.y, -s * d.x + c * d.y);
  float size = uWindow.z;
  float soft = uWindow.w;
  float halfLen = size * 1.3;
  float y = r.y / (1.0 + 0.3 * clamp(r.x / halfLen, -1.0, 1.0));
  float halfW = size * 0.5;
  float across = smoothstep(-halfW - soft, -halfW + soft, y) * (1.0 - smoothstep(halfW - soft, halfW + soft, y));
  float along = smoothstep(-halfLen - soft * 2.0, -halfLen + soft * 2.0, r.x) * (1.0 - smoothstep(halfLen - soft * 2.0, halfLen + soft * 2.0, r.x));
  float bar = size * 0.016;
  float mullion = 1.0 - (1.0 - smoothstep(bar, bar + soft * 0.8, abs(y))) * 0.94;
  float transom = 1.0 - (1.0 - smoothstep(bar, bar + soft * 0.8, abs(r.x + halfLen * 0.28))) * 0.9;
  float falloff = mix(0.5, 1.0, 1.0 - smoothstep(-halfLen, halfLen, r.x)) * mix(0.8, 1.0, 1.0 - smoothstep(0.0, halfW, abs(y)));
  return across * along * mullion * transom * falloff;
}
`,
  C = `
uniform sampler2D uMask;
uniform vec3 uLamp;
uniform vec2 uHalf;
uniform float uSun;
varying vec2 vUv;
${E}
void main() {
  vec2 p = (vUv * 2.0 - 1.0) * uHalf;
  float shade = texture2D(uMask, vUv).r;
  gl_FragColor = vec4(uLamp * (1.0 - shade) * sunlight(p) * uSun, 1.0);
}
`,
  T = `
uniform sampler2D uMask;
uniform vec3 uGain;
uniform vec2 uHalf;
uniform float uSun;
uniform float uGrain;
uniform float uTime;
varying vec2 vUv;
${E}
${L}
void main() {
  vec2 p = (vUv * 2.0 - 1.0) * uHalf;
  float shade = texture2D(uMask, vUv).r;
  float lit = sunlight(p) * (1.0 - shade) * uSun;
  float n = hash(gl_FragCoord.xy + fract(uTime * 17.0) * 911.0) - 0.5;
  lit = max(lit + n * uGrain * 0.1 * smoothstep(0.0, 0.1, lit), 0.0);
  vec3 gain = 1.0 + uGain * lit;
  gl_FragColor = vec4(1.0 - 1.0 / gain, 1.0);
}
`,
  U = `
uniform sampler2D uSource;
uniform vec2 uTexel;
varying vec2 vUv;
vec3 tap(vec2 d) { return texture2D(uSource, vUv + d * uTexel).rgb; }
void main() {
  vec3 color = tap(vec2(0.0)) * 0.125
    + (tap(vec2(-2.0, 2.0)) + tap(vec2(2.0, 2.0)) + tap(vec2(-2.0, -2.0)) + tap(vec2(2.0, -2.0))) * 0.03125
    + (tap(vec2(0.0, 2.0)) + tap(vec2(-2.0, 0.0)) + tap(vec2(2.0, 0.0)) + tap(vec2(0.0, -2.0))) * 0.0625
    + (tap(vec2(-1.0, 1.0)) + tap(vec2(1.0, 1.0)) + tap(vec2(-1.0, -1.0)) + tap(vec2(1.0, -1.0))) * 0.125;
  gl_FragColor = vec4(color, 1.0);
}
`,
  W = `
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
  P = `
uniform sampler2D uEmission;
uniform sampler2D uBloom;
uniform vec2 uResolution;
uniform float uGrain;
uniform float uTime;
varying vec2 vUv;
${L}
vec3 neutral(vec3 color) {
  float x = min(color.r, min(color.g, color.b));
  color -= x < 0.08 ? x - 6.25 * x * x : 0.04;
  float peak = max(color.r, max(color.g, color.b));
  if (peak < 0.76) return color;
  float next = 1.0 - 0.0576 / (peak - 0.52);
  color *= next / peak;
  return mix(color, vec3(next), 1.0 - 1.0 / (0.15 * (peak - next) + 1.0));
}
void main() {
  vec2 shift = (vUv - 0.5) * 1.4 / uResolution.y;
  vec3 emission = vec3(
    texture2D(uEmission, vUv + shift).r,
    texture2D(uEmission, vUv).g,
    texture2D(uEmission, vUv - shift).b
  ) + texture2D(uBloom, vUv).rgb * 0.36;
  vec3 light = pow(neutral(max(emission, 0.0)), vec3(1.0 / 2.2));
  float mask = smoothstep(0.0, 0.04, max(light.r, max(light.g, light.b)));
  light += (hash(gl_FragCoord.xy + fract(uTime * 17.0) * 911.0) - 0.5) * uGrain * 0.1 * mask;
  gl_FragColor = vec4(clamp(light, 0.0, 1.0), 1.0);
}
`,
  j = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: .08,
        delayChildren: .1
      }
    }
  },
  A = {
    hidden: {
      opacity: 0,
      y: 16,
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
function R() {
  let e = (0, __mod_50969.I)(),
    t = (0, React.useRef)(null),
    a = (0, React.useRef)(null),
    L = (0, React.useRef)(null),
    E = (0, React.useRef)(null),
    R = (0, React.useRef)([]),
    F = (0, React.useRef)(0),
    [z, N] = (0, React.useState)(0);
  (0, React.useEffect)(() => {
    let e = t.current,
      r = a.current,
      n = L.current;
    if (!e || !r || !n) return;
    let o = function (e, t, a, r) {
      let n,
        o = e.ownerDocument,
        l = o.defaultView ?? window,
        i = o.createElement("canvas");
      i.setAttribute("aria-hidden", "true"), i.style.cssText = "position:absolute;inset:0;width:100%;height:100%;display:block";
      try {
        n = new __mod_12246.WebGLRenderer({
          canvas: i,
          alpha: !1,
          antialias: !1,
          powerPreference: "high-performance"
        });
      } catch {
        return null;
      }
      t.appendChild(i), n.autoClear = !1;
      let c = l.matchMedia("(prefers-reduced-motion: reduce)"),
        L = new __mod_2253.qUd(-1, 1, 1, -1, -1, 1),
        E = new __mod_2253.bdM(2, 2),
        j = new __mod_2253.eaF(E);
      j.frustumCulled = !1;
      let A = new __mod_2253.Z58();
      A.add(j);
      let R = new __mod_2253.I9Y(1, .5),
        F = (e, t, a) => {
          let r = new __mod_2253.CmU();
          r.index = E.index, r.setAttribute("position", E.getAttribute("position"));
          let n = new __mod_2253.uWO(new Float32Array(4 * a), 4),
            o = new __mod_2253.uWO(new Float32Array(4 * a), 4);
          return n.setUsage(__mod_2253.Vnu), o.setUsage(__mod_2253.Vnu), r.setAttribute(e, n), r.setAttribute(t, o), r.instanceCount = 0, {
            geometry: r,
            data: n,
            form: o
          };
        },
        z = F("iLeaf", "iShape", 480),
        N = F("iStem", "iStemShape", 220),
        D = {
          transparent: !0,
          blending: __mod_2253.bCz,
          blendEquation: __mod_2253.gO9,
          blendSrc: __mod_2253.qad,
          blendDst: __mod_2253.LiQ,
          depthTest: !1,
          depthWrite: !1
        },
        I = new __mod_2253.BKk({
          uniforms: {
            uHalf: {
              value: R
            }
          },
          vertexShader: b,
          fragmentShader: k,
          ...D
        }),
        H = new __mod_2253.BKk({
          uniforms: {
            uHalf: {
              value: R
            }
          },
          vertexShader: S,
          fragmentShader: M,
          ...D
        }),
        B = new __mod_2253.eaF(z.geometry, I),
        _ = new __mod_2253.eaF(N.geometry, H);
      B.frustumCulled = !1, _.frustumCulled = !1;
      let q = new __mod_2253.Z58();
      q.add(_, B);
      let $ = e => new __mod_2253.nWS(1, 1, {
          type: e ? __mod_2253.ix0 : __mod_2253.OUM,
          depthBuffer: !1,
          stencilBuffer: !1,
          generateMipmaps: !1
        }),
        G = $(!1),
        O = $(!0),
        K = Array.from({
          length: 5
        }, () => $(!0)),
        Y = {
          uWindow: {
            value: new __mod_2253.IUQ(0, 0, .5, .05)
          },
          uAngle: {
            value: .49
          }
        },
        V = new __mod_2253.BKk({
          uniforms: {
            ...Y,
            uMask: {
              value: G.texture
            },
            uGain: {
              value: new __mod_2253.Pq0(...f)
            },
            uHalf: {
              value: R
            },
            uSun: {
              value: 0
            },
            uGrain: {
              value: .22
            },
            uTime: {
              value: 0
            }
          },
          vertexShader: y,
          fragmentShader: T,
          depthTest: !1,
          depthWrite: !1
        }),
        Z = new __mod_2253.BKk({
          uniforms: {
            ...Y,
            uMask: {
              value: G.texture
            },
            uLamp: {
              value: new __mod_2253.Pq0(...d.map(x))
            },
            uHalf: {
              value: R
            },
            uSun: {
              value: 0
            }
          },
          vertexShader: y,
          fragmentShader: C,
          depthTest: !1,
          depthWrite: !1
        }),
        Q = new __mod_2253.BKk({
          uniforms: {
            uSource: {
              value: null
            },
            uTexel: {
              value: new __mod_2253.I9Y()
            }
          },
          vertexShader: y,
          fragmentShader: U,
          depthTest: !1,
          depthWrite: !1
        }),
        X = new __mod_2253.BKk({
          uniforms: {
            uSource: {
              value: null
            },
            uTexel: {
              value: new __mod_2253.I9Y()
            }
          },
          vertexShader: y,
          fragmentShader: W,
          blending: __mod_2253.EZo,
          transparent: !0,
          depthTest: !1,
          depthWrite: !1
        }),
        J = new __mod_2253.BKk({
          uniforms: {
            uEmission: {
              value: O.texture
            },
            uBloom: {
              value: K[0].texture
            },
            uResolution: {
              value: new __mod_2253.I9Y(1, 1)
            },
            uGrain: {
              value: .22
            },
            uTime: {
              value: 0
            }
          },
          vertexShader: y,
          fragmentShader: P,
          depthTest: !1,
          depthWrite: !1
        }),
        ee = o.createElement("canvas").getContext("2d", {
          willReadFrequently: !0
        }),
        et = [],
        ea = {
          x: 0,
          y: 0
        },
        er = null,
        en = c.matches,
        eo = !0,
        el = "",
        ei = 0,
        es = 0,
        eu = 1,
        ec = 0,
        ef = 0,
        ed = 0,
        eh = 0,
        em = 0,
        ev = 0,
        ep = !1,
        eg = !1,
        ex = !1,
        ew = () => l.performance.now() / 1e3,
        ey = (e, t) => {
          j.material = e, n.setRenderTarget(t), n.render(A, L);
        },
        eb = () => Math.min(p(ei / es / 1.5, .48, 1), ei / es * 1.05),
        ek = e => {
          var t, a, r;
          let n,
            o,
            l,
            i = (t = e.kind, a = ei / es, r = h[e.kind] * eb(), o = (n = Math.floor(Math.abs(7919 + 131 * t.length + 153)) % 0x7ffffffe + 1, () => ((n = 16807 * n % 0x7fffffff) - 1) / 0x7ffffffe), l = a / 2 + .05, {
              branches: v[t].map((e, a) => {
                let n = -2.42 + Math.PI / 2,
                  i = e.spread * r,
                  s = {
                    base: [l + Math.cos(n) * i * .6, .56 + Math.sin(n) * i * .24],
                    angle: -2.42 + e.offset,
                    length: e.length * r * (.92 + .16 * o()),
                    segments: e.segments,
                    curl: e.curl,
                    droop: e.droop,
                    depth: e.depth,
                    phase: o() * m + a,
                    thickness: "palm" === t ? .0036 : "fern" === t ? .0028 : .0042,
                    leaves: [],
                    bend: 0,
                    velocity: 0,
                    kick: 0,
                    kickAt: 0
                  };
                for (let a = 1; a <= e.segments; a++) {
                  let n = a / e.segments;
                  for (let l of a === e.segments ? [0] : [-1, 1]) {
                    let e = o() * m;
                    if ("ficus" === t) {
                      if (0 !== l && (a + +(l > 0)) % 2 == 0 && .35 > o()) continue;
                      s.leaves.push({
                        at: a,
                        side: l,
                        length: (.13 + .08 * o()) * r * (0 === l ? 1.12 : 1),
                        width: .4 + .14 * o(),
                        tilt: 0 === l ? 0 : .62 + .45 * o(),
                        droop: .22,
                        flutter: e,
                        rate: 1.1 + 1.1 * o()
                      });
                    } else if ("olive" === t) s.leaves.push({
                      at: a,
                      side: l,
                      length: (.095 + .05 * o()) * r,
                      width: .15 + .06 * o(),
                      tilt: 0 === l ? 0 : .42 + .32 * o(),
                      droop: .12,
                      flutter: e,
                      rate: 1.6 + 1.4 * o()
                    });else if ("fern" === t) {
                      let t = Math.pow(Math.sin(Math.PI * p(.9 * n + .08, 0, 1)), .85) * (1 - .35 * n);
                      s.leaves.push({
                        at: a,
                        side: l,
                        length: (.03 + .11 * t) * r * (.92 + .16 * o()),
                        width: .3 + .08 * o(),
                        tilt: 0 === l ? 0 : 1.05 + .12 * o(),
                        droop: .18,
                        flutter: e,
                        rate: 1.6 + 1.4 * o()
                      });
                    } else {
                      let t = Math.pow(Math.sin(Math.PI * p(.94 * n + .04, 0, 1)), .7);
                      s.leaves.push({
                        at: a,
                        side: l,
                        length: (.06 + .2 * t) * r * (.92 + .16 * o()),
                        width: .11 + .04 * o(),
                        tilt: 0 === l ? 0 : .92 + .18 * o(),
                        droop: .38,
                        flutter: e,
                        rate: 1.8 + 1.6 * o()
                      });
                    }
                  }
                }
                return s;
              }),
              anchor: [l, .56]
            });
          e.branches = i.branches, e.anchor = i.anchor;
        },
        eS = () => {
          if (!ee) return !1;
          ee.clearRect(0, 0, 1, 1), ee.fillStyle = "#ffffff", ee.fillStyle = l.getComputedStyle(e).backgroundColor, ee.fillRect(0, 0, 1, 1);
          let [a, r, n] = ee.getImageData(0, 0, 1, 1).data,
            o = `${a},${r},${n}`;
          return o !== el && (el = o, eo = (.2126 * a + .7152 * r + .0722 * n) / 255 > .5, t.style.mixBlendMode = eo ? "color-dodge" : "screen", !0);
        },
        eM = () => {
          let t = Math.round(e.clientWidth),
            r = Math.round(e.clientHeight),
            o = Math.min(l.devicePixelRatio || 1, 2);
          if (t < 2 || r < 2 || t === ei && r === es && o === eu) return !1;
          ei = t, es = r, eu = o, n.setPixelRatio(eu), n.setSize(ei, es, !1);
          let i = Math.round(ei * eu),
            s = Math.round(es * eu);
          G.setSize(i, s), O.setSize(i, s);
          for (let e of K) u = Math.max(1, Math.round(i / 2)), c = Math.max(1, Math.round(s / 2)), e.setSize(i, s);
          return J.uniforms.uResolution.value.set(i, s), R.set(ei / es / 2, .5), (() => {
            if (a.offsetHeight > 0) {
              let t = a.getBoundingClientRect().top - e.getBoundingClientRect().top,
                r = a.offsetHeight / es;
              Y.uWindow.value.set(.3 * R.x, .5 - t / es - r / 2, r * (ei >= 640 ? .52 : .45), .04);
              return;
            }
            let t = .58 * eb();
            Y.uWindow.value.set(p(.5 * R.x, 0, R.x - .4 * t), .2, t, .05);
          })(), et.forEach(ek), !0;
        },
        eL = e => {
          let t = .6 * !en,
            a = .55 + .45 * Math.sin(.21 * ef) * Math.sin(.13 * ef + 1.1),
            r = ew(),
            n = z.data.array,
            o = z.form.array,
            l = N.data.array,
            i = N.form.array,
            s = eb(),
            u = 0,
            c = 0;
          for (let f of et) {
            let d = 1 - (1 - f.progress) * (1 - f.progress);
            if (d < .002) continue;
            let h = 1 + .16 * (1 - d),
              [v, x] = f.anchor;
            for (let y of f.branches) {
              let f = -(ea.x * Math.sin(y.angle)) + ea.y * Math.cos(y.angle),
                b = t * w(ef, y.phase) * a * .16 + .3 * f;
              if (y.kick > 0 && r >= y.kickAt && !en && (y.velocity += y.kick * (Math.abs(y.angle) < Math.PI / 2 ? 1 : -1) * .55, y.kick = 0), en) y.bend = 0, y.velocity = 0;else {
                let t = m / (1.5 + .9 * y.depth + .4 * y.length),
                  a = Math.max(1, Math.ceil(120 * e)),
                  r = e / a;
                for (let e = 0; e < a; e++) y.velocity += (t * t * (b - y.bend) - .6 * t * y.velocity) * r, y.bend += y.velocity * r;
              }
              let k = .7 * y.depth,
                S = (.0016 + .028 * k * k + .004 * k) * (1 + 3.2 * (1 - d)),
                M = p(.98 - .36 * k, .3, 1) * d,
                L = y.length / y.segments,
                E = y.base[0],
                C = y.base[1],
                T = y.angle,
                U = [[E, C, T]];
              for (let e = 1; e <= y.segments; e++) {
                let a = Math.pow(e / y.segments, 1.4);
                T += y.curl / y.segments * 2;
                let r = (T += g(-Math.PI / 2 - T) * y.droop * .5) + y.bend * a * .9 + .012 * t * Math.sin(3.1 * ef + e + y.phase),
                  n = E + Math.cos(r) * L,
                  o = C + Math.sin(r) * L;
                c < 220 && (l.set([v + (E - v) * h, x + (C - x) * h, v + (n - v) * h, x + (o - x) * h], 4 * c), i.set([y.thickness * (1.25 - e / y.segments * .8) * s * h, S, M, 0], 4 * c), c++), E = n, C = o, U.push([E, C, r]);
              }
              for (let e of y.leaves) {
                if (u >= 480) break;
                let a = U[Math.min(e.at, U.length - 1)],
                  r = Math.sin(ef * e.rate + e.flutter) * (.05 + 1.32 * Math.abs(b)) * t,
                  l = a[2] + (0 === e.side ? e.tilt + .6 * r : e.side * (e.tilt + r));
                l += g(-Math.PI / 2 - l) * e.droop * .35;
                let i = a[0] + Math.cos(l) * e.length * .55,
                  s = a[1] + Math.sin(l) * e.length * .55;
                n.set([v + (i - v) * h, x + (s - x) * h, l, e.length * h], 4 * u), o.set([e.width, S, M, 0], 4 * u), u++;
              }
            }
          }
          z.geometry.instanceCount = u, N.geometry.instanceCount = c, z.data.needsUpdate = !0, z.form.needsUpdate = !0, N.data.needsUpdate = !0, N.form.needsUpdate = !0;
        },
        eE = () => {
          if (n.setRenderTarget(G), n.setClearColor(0, 0), n.clear(), n.render(q, L), eo) {
            V.uniforms.uSun.value = eh, V.uniforms.uTime.value = ec, ey(V, null);
            return;
          }
          Z.uniforms.uSun.value = eh, ey(Z, O);
          for (let t of K) Q.uniforms.uSource.value = O.texture, Q.uniforms.uTexel.value.set(1 / O.width, 1 / O.height), ey(Q, t), e = t;
          for (let e = K.length - 1; e > 0; e--) X.uniforms.uSource.value = K[e].texture, X.uniforms.uTexel.value.set(1 / K[e].width, 1 / K[e].height), ey(X, K[e - 1]);
          J.uniforms.uTime.value = ec, ey(J, null);
        },
        eC = () => {
          eg || ex || !ep || em || (em = l.requestAnimationFrame(eT));
        };
      function eT(e) {
        if (em = 0, eg || ex) return;
        let t = ev && e - ev < 100 ? Math.min((e - ev) / 1e3, .05) : 1 / 60;
        if (ev = e, ei || eM(), !ei) return;
        en || (ec += t, ef += t * (1 + .8 * Math.min(Math.hypot(ea.x, ea.y), 1.5) + ed));
        let a = Math.exp(-t / 1.3);
        for (let e of (ea.x *= a, ea.y *= a, (ed *= Math.exp(-t / 1.6)) < .001 && (ed = 0), eh = en ? 1 : Math.min(1, eh + t / 1.6), et)) {
          let a = e.target > e.progress ? 1.05 : .65;
          e.progress = en ? e.target : e.target > e.progress ? Math.min(e.target, e.progress + t / a) : Math.max(e.target, e.progress - t / a);
        }
        for (let e = et.length - 1; e >= 0; e--) 0 === et[e].target && et[e].progress <= 0 && et.splice(e, 1);
        eL(t), eE();
        let r = Math.abs(ea.x) + Math.abs(ea.y) > .001 || ed > 0 || eh < 1 || et.some(e => e.progress !== e.target);
        (!en || r) && eC();
      }
      let eU = e => {
          let t,
            a = et[et.length - 1];
          if (a && a.kind === e && 1 === a.target) return;
          et.forEach(e => {
            e.target = 0;
          });
          let r = et.findIndex(t => t.kind === e);
          for (r >= 0 ? t = et.splice(r, 1)[0] : (t = {
            kind: e,
            branches: [],
            anchor: [0, 0],
            progress: 0,
            target: 1
          }, ei && ek(t)), t.target = 1, et.push(t); et.length > 3;) et.shift();
          if (a) {
            let e = ew();
            t.branches.forEach((t, a) => {
              t.kick = Math.min(t.kick + .45, 2.2), t.kickAt = e + .35 + .08 * a;
            });
          }
          eC();
        },
        eW = t => {
          if (en || "touch" === t.pointerType) return;
          let a = e.getBoundingClientRect(),
            r = t.clientX - a.left,
            n = t.clientY - a.top,
            o = l.performance.now();
          if (er) {
            let e = Math.max((o - er.t) / 1e3, 1 / 240),
              t = (r - er.x) / Math.max(es, 1) / e,
              a = -(n - er.y) / Math.max(es, 1) / e,
              l = .35 * p(e / .12, 0, 1);
            ea.x += (p(t, -4, 4) - ea.x) * l, ea.y += (p(a, -4, 4) - ea.y) * l;
            let i = Math.hypot(ea.x, ea.y);
            i > 2 && (ea.x *= 2 / i, ea.y *= 2 / i);
          }
          er = {
            x: r,
            y: n,
            t: o
          }, eC();
        },
        eP = () => {
          er = null;
        },
        ej = e => {
          if (!e.isPrimary || e.button > 0) return;
          let t = e.target;
          t?.closest?.("a,button,input,select,textarea,label") || (e => {
            if (en) return;
            let t = ew(),
              a = et[et.length - 1];
            a?.branches.forEach((e, a) => {
              e.kick = Math.min(e.kick + .9 * (.75 + .2 * Math.sin(2.3 * a)), 2.2), e.kickAt = t + .05 + .09 * a + .08 * e.depth;
            }), ed = Math.min(ed + .54, 1.5), eC();
          })(0);
        },
        eA = () => {
          eS() && (ev = 0, em || (ep && eE(), eC()));
        },
        eR = () => {
          en = c.matches, ev = 0, eC();
        },
        eF = e => {
          e.preventDefault(), ex = !0, l.cancelAnimationFrame(em), em = 0;
        },
        ez = () => {
          ex = !1, el = "", eS(), eC();
        },
        eN = new ResizeObserver(() => {
          eM() && (ev = 0, !em && ep && (eL(0), eE()), eC());
        }),
        eD = new IntersectionObserver(([e]) => {
          (ep = e.isIntersecting) ? (ev = 0, eC()) : (l.cancelAnimationFrame(em), em = 0);
        }, {
          rootMargin: "80px"
        }),
        eI = new MutationObserver(eA),
        eH = l.matchMedia("(prefers-color-scheme: dark)");
      return e.addEventListener("pointermove", eW), e.addEventListener("pointerleave", eP), e.addEventListener("pointerdown", ej), i.addEventListener("webglcontextlost", eF), i.addEventListener("webglcontextrestored", ez), c.addEventListener("change", eR), eH.addEventListener("change", eA), eI.observe(o.documentElement, {
        attributes: !0,
        attributeFilter: ["class", "style", "data-theme"]
      }), eN.observe(e), eN.observe(a), eD.observe(e), eS(), eM(), eU(r), {
        show: eU,
        destroy: () => {
          eg = !0, l.cancelAnimationFrame(em), e.removeEventListener("pointermove", eW), e.removeEventListener("pointerleave", eP), e.removeEventListener("pointerdown", ej), i.removeEventListener("webglcontextlost", eF), i.removeEventListener("webglcontextrestored", ez), c.removeEventListener("change", eR), eH.removeEventListener("change", eA), eI.disconnect(), eN.disconnect(), eD.disconnect(), G.dispose(), O.dispose(), K.forEach(e => e.dispose()), [I, H, V, Z, Q, X, J].forEach(e => e.dispose()), z.geometry.dispose(), N.geometry.dispose(), E.dispose(), n.dispose(), i.remove();
        }
      };
    }(e, r, n, c[0].kind);
    return E.current = o, () => {
      window.clearTimeout(F.current), o?.destroy(), E.current = null;
    };
  }, []), (0, React.useEffect)(() => {
    E.current?.show(c[z].kind);
  }, [z]);
  let D = e => {
      let t = {
          ArrowDown: 1,
          ArrowRight: 1,
          ArrowUp: -1,
          ArrowLeft: -1
        },
        a = -1;
      e.key in t && (a = (z + t[e.key] + c.length) % c.length), "Home" === e.key && (a = 0), "End" === e.key && (a = c.length - 1), a < 0 || (e.preventDefault(), N(a), R.current[a]?.focus());
    },
    I = c[z];
  return <section ref={t} className="relative isolate flex min-h-screen w-full flex-col overflow-hidden bg-[#d8d1c5] px-4 pb-10 pt-8 text-[#1d1b17] dark:bg-[#0f0e0c] dark:text-[#f3eee5] sm:px-6 lg:px-8 lg:pb-12 lg:pt-24"><motion.div variants={j} initial={!e && "hidden"} whileInView="show" viewport={{
      once: !0
    }} className="mx-auto flex w-full max-w-[1400px] flex-1 flex-col"><div ref={L} aria-hidden="true" className="h-[min(21rem,82vw)] shrink-0 lg:hidden" /><div className="max-w-[34rem]"><motion.h1 variants={A} className="text-pretty text-[2rem] font-medium leading-[1.06] tracking-[-0.035em] sm:text-[2.75rem] lg:text-[3.25rem]">Plants for the light you already have.</motion.h1><motion.p variants={A} className="mt-5 max-w-[38ch] text-pretty text-base leading-relaxed text-[#1d1b17]/70 dark:text-[#f3eee5]/65">Tell us which way your windows face. We'll send a plant that thrives in that light, potted, with care notes written for your room.</motion.p></div><div className="mt-auto flex flex-col gap-10 pt-16 lg:flex-row lg:items-end lg:justify-between lg:gap-16"><div role="radiogroup" aria-label="Choose a plant" className="flex flex-col items-start">{c.map((e, t) => {
            let a = t === z;
            return <motion.button variants={A} ref={e => {
              R.current[t] = e;
            }} type="button" role="radio" aria-checked={a} tabIndex={a ? 0 : -1} onClick={() => N(t)} onKeyDown={D} onPointerEnter={e => {
              "mouse" === e.pointerType && (window.clearTimeout(F.current), F.current = window.setTimeout(() => N(t), 70));
            }} onPointerLeave={() => window.clearTimeout(F.current)} className={`cursor-pointer rounded-md text-left text-[clamp(3.5rem,8.2vw,8rem)] font-medium leading-[0.92] tracking-[-0.045em] outline-none transition-colors duration-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current ${a ? "text-[#1d1b17] dark:text-[#f3eee5]" : "text-[#1d1b17]/45 hover:text-[#1d1b17]/70 dark:text-[#f3eee5]/40 dark:hover:text-[#f3eee5]/70"}`}>{e.name}</motion.button>;
          })}</div><motion.div variants={A} className="w-full max-w-[24rem] lg:mb-3"><div aria-live="polite"><motion.div initial={!e && {
              opacity: 0,
              y: 6,
              filter: "blur(4px)"
            }} animate={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)"
            }} transition={{
              duration: .5,
              ease: [.16, 1, .3, 1]
            }}><div className="flex items-baseline justify-between gap-6"><p className="text-lg font-medium tracking-[-0.01em]">{I.common}</p><p className="text-lg font-medium tabular-nums">{I.price}</p></div><p className="mt-1 text-sm italic text-[#1d1b17]/60 dark:text-[#f3eee5]/55">{I.species}</p><p className="mt-4 text-sm text-[#1d1b17]/75 dark:text-[#f3eee5]/70">{I.height} tall · {I.light}</p></motion.div></div><div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6"><button type="button" className="inline-flex h-12 cursor-pointer items-center justify-center rounded-full bg-[#1d1b17] px-7 text-sm font-medium text-[#d8d1c5] transition-colors duration-200 hover:bg-[#33302a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1d1b17] dark:bg-[#f3eee5] dark:text-[#0f0e0c] dark:hover:bg-white dark:focus-visible:outline-[#f3eee5]">Add to cart</button><a href="#" className="group inline-flex h-12 items-center justify-center gap-2 rounded-full text-sm font-medium text-[#1d1b17]/80 transition-colors duration-200 hover:text-[#1d1b17] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current dark:text-[#f3eee5]/80 dark:hover:text-[#f3eee5] sm:justify-start">Take the light quiz<ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" /></a></div></motion.div></div></motion.div><div ref={a} aria-hidden="true" className="pointer-events-none absolute inset-0 z-10" /></section>;
}

export { R as Hero28 };
export default R;

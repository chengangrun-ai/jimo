import * as React from "react";
import * as __mod_50969 from "../_helpers/50969";
import * as __mod_12246 from "../_helpers/12246";
import * as __mod_2253 from "../_helpers/2253";
/**
 * About 13
 * Values statement where one giant word melts from value to value
 * slug: about-13
 * category: About
 * export: About13
 * deps: motion, three
 * original: ts-tailwind/blocks/about/about-13.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import { motion, AnimatePresence } from "motion/react";

let s = [{
    word: "curious.",
    name: "Curious",
    line: "We ask one more question before we build anything."
  }, {
    word: "candid.",
    name: "Candid",
    line: "We say the hard thing early, kindly and in person."
  }, {
    word: "patient.",
    name: "Patient",
    line: "We would rather ship it right than ship it on Friday."
  }, {
    word: "kind.",
    name: "Kind",
    line: "We assume good intent and leave things better than we found them."
  }],
  d = `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`,
  h = (e, t) => `
  for (int i = 0; i < 64; i++) {
    if (i >= uCount${e}) break;
    vec4 r = uRect${e}[i];
    vec2 q = (p - r.xy) / r.zw;
    if (q.x < 0.0 || q.y < 0.0 || q.x > 1.0 || q.y > 1.0) continue;
    vec4 m = texelFetch(uGlyphs, ivec2(i, ${t}), 0);
    vec4 g = texelFetch(uGlyphs, ivec2(i, ${t + 1}), 0);
    vec2 f = textureLod(uAtlas${e}, m.xy + q * m.zw, 0.0).rg;
    float v = mix(f.r, f.g, g.y) * g.x + g.z;
    d${e} = min(d${e}, v);
    float k = exp(-max(v, 0.0) / uBand);
    w${e} += k;
    a${e} += k * g.w;
  }
`,
  c = `
uniform sampler2D uAtlasA;
uniform sampler2D uAtlasB;
uniform sampler2D uGlyphs;
uniform vec4 uRectA[64];
uniform vec4 uRectB[64];
uniform int uCountA;
uniform int uCountB;
uniform float uCap;
uniform float uGoo;
uniform float uSwell;
uniform float uBand;
uniform vec2 uSize;
uniform vec3 uInk;
uniform float uInkAlpha;
uniform vec3 uTint;
uniform float uTintAmount;
varying vec2 vUv;

float smin(float a, float b, float k) {
  float h = clamp(0.5 + 0.5 * (b - a) / k, 0.0, 1.0);
  return mix(b, a, h) - k * h * (1.0 - h);
}

void main() {
  vec2 p = vec2(vUv.x, 1.0 - vUv.y) * uSize;
  float dA = uCap;
  float wA = 0.0;
  float aA = 0.0;
  float dB = uCap;
  float wB = 0.0;
  float aB = 0.0;
  ${h("A", 0)}
  ${h("B", 2)}
  aA = wA > 0.0 ? aA / wA : 0.0;
  aB = wB > 0.0 ? aB / wB : 0.0;
  float act = mix(aA, aB, smoothstep(-uBand, uBand, dA - dB));
  float d = smin(dA, dB, max(uGoo * act, 0.0001)) - uSwell * act;
  float aa = max(fwidth(d), 0.0001) * 0.7;
  float alpha = clamp(0.5 - d / (2.0 * aa), 0.0, 1.0);
  vec3 color = mix(uInk, uTint, clamp(uTintAmount * act * act, 0.0, 1.0));
  float coverage = alpha * uInkAlpha;
  gl_FragColor = vec4(color * coverage, coverage);
}
`,
  f = (e, t, a) => Math.min(a, Math.max(t, e)),
  m = (e, t, a) => {
    let l = f((a - e) / (t - e), 0, 1);
    return l * l * (3 - 2 * l);
  },
  p = (e, t, a) => {
    let l = Math.max(t, a),
      n = new Float64Array(l),
      r = new Float64Array(l + 1),
      i = new Uint16Array(l),
      o = (t, a, l) => {
        for (let r = 0; r < l; r++) n[r] = e[t + r * a];
        i[0] = 0, r[0] = -1e20, r[1] = 1e20;
        let o = 0;
        for (let e = 1; e < l; e++) {
          let t = (n[e] + e * e - (n[i[o]] + i[o] * i[o])) / (2 * e - 2 * i[o]);
          for (; t <= r[o];) o--, t = (n[e] + e * e - (n[i[o]] + i[o] * i[o])) / (2 * e - 2 * i[o]);
          i[++o] = e, r[o] = t, r[o + 1] = 1e20;
        }
        o = 0;
        for (let u = 0; u < l; u++) {
          for (; r[o + 1] < u;) o++;
          let l = u - i[o];
          e[t + u * a] = n[i[o]] + l * l;
        }
      };
    for (let e = 0; e < t; e++) o(e, t, a);
    for (let e = 0; e < a; e++) o(e * t, 1, t);
  },
  x = (e, t, a, l) => {
    let n = Math.max(1, Math.round(l)),
      r = new Float32Array(e.length),
      i = new Float32Array(e.length),
      o = 1 / (2 * n + 1);
    for (let l = 0; l < a; l++) {
      let a = l * t,
        i = 0;
      for (let l = -n; l <= n; l++) i += e[a + f(l, 0, t - 1)];
      for (let l = 0; l < t; l++) r[a + l] = i * o, i += e[a + Math.min(t - 1, l + n + 1)] - e[a + Math.max(0, l - n)];
    }
    for (let e = 0; e < t; e++) {
      let l = 0;
      for (let i = -n; i <= n; i++) l += r[f(i, 0, a - 1) * t + e];
      for (let u = 0; u < a; u++) i[u * t + e] = l * o, l += r[Math.min(a - 1, u + n + 1) * t + e] - r[Math.max(0, u - n) * t + e];
    }
    return i;
  },
  g = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: .08,
        delayChildren: .05
      }
    }
  },
  v = {
    hidden: {
      opacity: 0,
      y: 14
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: .8,
        ease: [.16, 1, .3, 1]
      }
    }
  };
function About13() {
  let e = (0, __mod_50969.I)(),
    t = (0, React.useRef)(null),
    a = (0, React.useRef)(null),
    h = (0, React.useRef)({
      held: !1,
      reduced: !1,
      onChange: () => {}
    }),
    [w, y] = (0, React.useState)(0),
    [b, A] = (0, React.useState)(!1);
  (0, React.useEffect)(() => {
    h.current.held = b, h.current.reduced = !!e, h.current.onChange = y, a.current?.sync();
  }, [b, e]), (0, React.useEffect)(() => {
    let e = t.current;
    if (!e) return;
    let l = function (e, t) {
      let a,
        l = e.ownerDocument,
        n = l.defaultView ?? window,
        r = l.createElement("canvas");
      r.setAttribute("aria-hidden", "true"), r.style.cssText = "position:absolute;pointer-events:none;display:block";
      try {
        a = new __mod_12246.WebGLRenderer({
          canvas: r,
          alpha: !0,
          premultipliedAlpha: !0,
          antialias: !1
        });
      } catch {
        return null;
      }
      if (!a.capabilities.isWebGL2) return a.dispose(), null;
      e.appendChild(r), a.setClearColor(0, 0);
      let i = () => n.performance.now() / 1e3,
        s = l.createElement("canvas"),
        h = s.getContext("2d", {
          willReadFrequently: !0
        }),
        g = l.createElement("canvas").getContext("2d", {
          willReadFrequently: !0
        }),
        v = Math.max(512, Math.min(4096, a.capabilities.maxTextureSize)),
        w = __mod_2253.GxU.toHalfFloat(4e3),
        y = new __mod_2253.GYF(new Uint16Array([w, w]), 1, 1, __mod_2253.paN, __mod_2253.ix0);
      y.needsUpdate = !0;
      let b = new Float32Array(1024),
        A = new __mod_2253.GYF(b, 64, 4, __mod_2253.GWd, __mod_2253.RQf);
      A.magFilter = __mod_2253.hxR, A.minFilter = __mod_2253.hxR, A.generateMipmaps = !1, A.needsUpdate = !0;
      let M = () => Array.from({
          length: 64
        }, () => new __mod_2253.IUQ(0, 0, 1, 1)),
        k = {
          uAtlasA: {
            value: y
          },
          uAtlasB: {
            value: y
          },
          uGlyphs: {
            value: A
          },
          uRectA: {
            value: M()
          },
          uRectB: {
            value: M()
          },
          uCountA: {
            value: 0
          },
          uCountB: {
            value: 0
          },
          uCap: {
            value: 8
          },
          uGoo: {
            value: 8
          },
          uSwell: {
            value: 2
          },
          uBand: {
            value: 4
          },
          uSize: {
            value: new __mod_2253.I9Y(1, 1)
          },
          uInk: {
            value: new __mod_2253.Q1f(1, 1, 1)
          },
          uInkAlpha: {
            value: 1
          },
          uTint: {
            value: new __mod_2253.Q1f(1, .4, .2)
          },
          uTintAmount: {
            value: .45
          }
        },
        C = new __mod_2253.BKk({
          vertexShader: d,
          fragmentShader: c,
          uniforms: k,
          transparent: !0,
          depthTest: !1,
          depthWrite: !1
        });
      C.blending = __mod_2253.bCz, C.blendSrc = __mod_2253.qad, C.blendDst = __mod_2253.OuU;
      let F = new __mod_2253.eaF(new __mod_2253.bdM(2, 2), C);
      F.frustumCulled = !1;
      let B = new __mod_2253.Z58();
      B.add(F);
      let R = new __mod_2253.qUd(-1, 1, 1, -1, 0, 1),
        S = [],
        $ = "",
        I = 0,
        T = "",
        U = null,
        G = 1,
        N = 1,
        j = 0,
        q = 0,
        E = 1,
        P = 16,
        z = 8,
        L = !1,
        W = 0,
        D = 0,
        _ = -1,
        O = -1,
        Y = 0,
        H = 0,
        Q = 0,
        Z = !1,
        K = !1,
        V = !1,
        X = !1,
        J = !1,
        ee = e => {
          if (!g || !e) return null;
          g.clearRect(0, 0, 1, 1), g.fillStyle = "#000", g.fillStyle = e, g.fillRect(0, 0, 1, 1);
          let t = g.getImageData(0, 0, 1, 1).data;
          return [t[0] / 255, t[1] / 255, t[2] / 255, t[3] / 255];
        },
        et = t => {
          let i = e.getBoundingClientRect(),
            o = n.getComputedStyle(e);
          P = parseFloat(o.fontSize) || 16;
          let d = Math.min(n.devicePixelRatio || 1, 2);
          j = Math.ceil(.25 * P), q = Math.ceil(.3 * P);
          let c = Math.max(1, i.width + 2 * j),
            f = Math.max(1, i.height + 2 * q),
            m = `${o.fontStyle} ${o.fontWeight} ${o.fontSize} ${o.fontFamily}`,
            g = [c.toFixed(1), f.toFixed(1), d, m, o.letterSpacing, o.direction].join("|");
          if (!t && g === $) return;
          for (let e of ($ = g, I++, G = c, N = f, E = d, L = "rtl" === o.direction, z = .92 * Math.ceil(.25 * P), r.style.left = `${-j}px`, r.style.top = `${-q}px`, r.style.width = `${G}px`, r.style.height = `${N}px`, a.setPixelRatio(1), a.setSize(Math.max(1, Math.round(G * E)), Math.max(1, Math.round(N * E)), !1), k.uSize.value.set(G, N), S)) e.texture?.dispose();
          if (S = [], !h) return;
          h.font = m;
          let w = h.measureText("Hxg").fontBoundingBoxAscent || .92 * P,
            y = l.createRange(),
            b = Array.from(e.querySelectorAll("[data-morph-word]")).map(e => ((e, t, a) => {
              let l = [],
                n = e.firstChild;
              if (!n || 3 !== n.nodeType) return l;
              let r = n.data,
                i = 0;
              for (let e of "undefined" != typeof Intl && "Segmenter" in Intl ? Array.from(new Intl.Segmenter(void 0, {
                granularity: "grapheme"
              }).segment(r), e => e.segment) : Array.from(r)) {
                let r = e.length;
                if (/\S/.test(e)) {
                  a.setStart(n, i), a.setEnd(n, i + r);
                  let o = a.getClientRects()[0];
                  o && o.width > 0 && l.push({
                    text: e,
                    left: o.left - t.left + j,
                    top: o.top - t.top + q,
                    right: o.right - t.left + j,
                    bottom: o.bottom - t.top + q
                  });
                }
                i += r;
              }
              return l;
            })(e, i, y));
          y.detach(), S = b.map(e => ((e, t, a) => {
            let l = {
              glyphs: [],
              texture: null,
              left: G / 2,
              right: G / 2,
              depth: 1
            };
            if (!h || 0 === e.length) return l;
            let n = Math.ceil(.25 * P),
              r = Math.ceil(e.length / 64),
              i = [];
            for (let t = 0; t < e.length; t += r) {
              let a = e.slice(t, t + r);
              i.push({
                parts: a,
                left: Math.min(...a.map(e => e.left)),
                top: Math.min(...a.map(e => e.top)),
                right: Math.max(...a.map(e => e.right)),
                bottom: Math.max(...a.map(e => e.bottom)),
                ax: 0,
                ay: 0
              });
            }
            let o = v / E,
              d = 0,
              c = 0,
              f = 0,
              m = 0;
            for (let e of i) {
              let t = e.right - e.left + 2 * n,
                a = e.bottom - e.top + 2 * n;
              d > 0 && d + t > o && (d = 0, c += f, f = 0), e.ax = d, e.ay = c, d += t, f = Math.max(f, a), m = Math.max(m, d);
            }
            let g = c + f,
              w = E * Math.min(1, v / Math.max(1, m * E), v / Math.max(1, g * E)),
              y = Math.max(1, Math.ceil(m * w)),
              b = Math.max(1, Math.ceil(g * w));
            for (let e of (s.width = y, s.height = b, h.setTransform(1, 0, 0, 1, 0, 0), h.clearRect(0, 0, y, b), h.setTransform(w, 0, 0, w, 0, 0), h.font = t, h.fillStyle = "#fff", h.textBaseline = "alphabetic", i)) for (let t of e.parts) h.fillText(t.text, e.ax + n + t.left - e.left, e.ay + n + t.top - e.top + a);
            let A = ((e, t, a, l) => {
                let n = t * a,
                  r = new Float64Array(n),
                  i = new Float64Array(n);
                for (let t = 0; t < n; t++) {
                  let a = e[4 * t + 3] / 255;
                  if (a >= 1) r[t] = 0, i[t] = 1e20;else if (a <= 0) r[t] = 1e20, i[t] = 0;else {
                    let e = .5 - a;
                    r[t] = e > 0 ? e * e : 0, i[t] = e < 0 ? e * e : 0;
                  }
                }
                p(r, t, a), p(i, t, a);
                let o = new Float32Array(n);
                for (let e = 0; e < n; e++) o[e] = (Math.sqrt(r[e]) - Math.sqrt(i[e])) / l;
                return o;
              })(h.getImageData(0, 0, y, b).data, y, b, w),
              M = .92 * n,
              k = 1;
            for (let e = 0; e < A.length; e++) -A[e] > k && (k = -A[e]), A[e] > M && (A[e] = M);
            let C = Math.max(1, P * w * .05),
              F = x(x(x(A, y, b, C), y, b, C), y, b, C),
              B = new Uint16Array(y * b * 2);
            for (let e = 0; e < y * b; e++) B[2 * e] = __mod_2253.GxU.toHalfFloat(A[e]), B[2 * e + 1] = __mod_2253.GxU.toHalfFloat(F[e]);
            let R = new __mod_2253.GYF(B, y, b, __mod_2253.paN, __mod_2253.ix0);
            return R.flipY = !1, R.magFilter = __mod_2253.k6q, R.minFilter = __mod_2253.k6q, R.generateMipmaps = !1, R.needsUpdate = !0, l.texture = R, l.depth = k, l.left = Math.min(...i.map(e => e.left)), l.right = Math.max(...i.map(e => e.right)), l.glyphs = i.map(e => {
              let t = e.right - e.left + 2 * n,
                a = e.bottom - e.top + 2 * n;
              return {
                text: e.parts.map(e => e.text).join(""),
                x: e.left - n,
                y: e.top - n,
                w: t,
                h: a,
                cx: (e.left + e.right) / 2,
                ax: L ? e.right : e.left,
                ay: e.top,
                u: e.ax * w / y,
                v: e.ay * w / b,
                du: t * w / y,
                dv: a * w / b
              };
            }), l;
          })(e, m, w));
        },
        ea = () => {
          let t = ee(n.getComputedStyle(e).color) ?? [1, 1, 1, 1];
          k.uInk.value.setRGB(t[0], t[1], t[2], __mod_2253.Zr2), k.uInkAlpha.value = t[3];
          let a = ee((() => {
            for (; e;) {
              let e = ee(n.getComputedStyle(e).backgroundColor);
              if (e && e[3] > .01) return .2126 * e[0] + .7152 * e[1] + .0722 * e[2] < .5;
              t = e.parentElement;
            }
            return !1;
          })() ? "#ffc247" : "#ffaa00") ?? [1, .7, .2, 1];
          k.uTint.value.setRGB(a[0], a[1], a[2], __mod_2253.Zr2);
        },
        el = e => S.length ? S[(e % S.length + S.length) % S.length] : null,
        en = (e, t, a, l, n) => {
          let r = a - t;
          return r > .001 ? l + (e - t) / r * (n - l) : (l + n) / 2;
        },
        er = (e, t) => {
          let a = e.right - e.left,
            l = a > .001 ? f((t - e.left) / a, 0, 1) : .5;
          return L ? 1 - l : l;
        },
        ei = (e, t) => {
          let a;
          return (a = f((t - .25 * e) / .75, 0, 1)) * a * a * (a * (6 * a - 15) + 10);
        },
        eo = (e, t, a, l, n, r, i) => {
          let o = (64 * e + t) * 4;
          b[o] = a.u, b[o + 1] = a.v, b[o + 2] = a.du, b[o + 3] = a.dv;
          let u = o + 256;
          b[u] = l, b[u + 1] = n, b[u + 2] = r, b[u + 3] = i;
        },
        eu = (e, t, a, l, n) => {
          let r = G / 2,
            i = N / 2;
          e.set(r + (t.x + a - r) * n, i + (t.y + l - i) * n, t.w * n, t.h * n);
        },
        es = e => {
          if (J) return;
          let t = 1;
          O >= 0 && (t = f((e - O) / 1.1, 0, 1)) >= 1 && (O = -1, W = D, _ = -1);
          let l = O >= 0,
            n = l && _ >= 0 ? el(_) : null,
            r = K ? el(l ? D : W) : null;
          ((e, t, a) => {
            if (e && t) {
              let a = `${I}:${_}:${D}`;
              a !== T && (T = a, U = ((e, t, a) => {
                let l = e.length,
                  n = t.length,
                  r = n + 1,
                  i = new Int16Array((l + 1) * r),
                  o = new Float32Array((l + 1) * r),
                  u = new Uint8Array((l + 1) * r);
                for (let s = l - 1; s >= 0; s--) for (let l = n - 1; l >= 0; l--) {
                  let n = s * r + l,
                    d = i[n + r],
                    h = o[n + r],
                    c = 0;
                  if ((i[n + 1] > d || i[n + 1] === d && o[n + 1] < h) && (d = i[n + 1], h = o[n + 1], c = 1), e[s].text === t[l].text && Math.abs(e[s].ax - t[l].ax) <= a) {
                    let a = i[n + r + 1] + 1,
                      u = o[n + r + 1] + Math.abs(e[s].ax - t[l].ax);
                    (a > d || a === d && u < h) && (d = a, h = u, c = 2);
                  }
                  i[n] = d, o[n] = h, u[n] = c;
                }
                let s = new Int16Array(l).fill(-1),
                  d = new Uint8Array(n),
                  h = 0,
                  c = 0;
                for (; h < l && c < n;) {
                  let e = u[h * r + c];
                  2 === e ? (s[h] = c, d[c] = 1, h++, c++) : 0 === e ? h++ : c++;
                }
                return {
                  pairs: s,
                  taken: d
                };
              })(e.glyphs, t.glyphs, 2.5 * P));
            } else U = null;
            let l = 0;
            if (e) {
              let n = 1.12 * e.depth + .5;
              for (let r = 0; r < e.glyphs.length && l < 64; r++) {
                let i = e.glyphs[r],
                  o = U && t ? U.pairs[r] : -1,
                  u = o >= 0 && t ? t.glyphs[o] : null;
                if (u && t) {
                  let n = ei((er(e, i.cx) + er(t, u.cx)) / 2, a);
                  eu(k.uRectA.value[l], i, (u.ax - i.ax) * n, (u.ay - i.ay) * n, 1), eo(0, l, i, 1, 0, 0, .35 * Math.sin(Math.PI * n));
                } else {
                  let r = m(0, .62, ei(er(e, i.cx), a)),
                    o = t ? (en(i.cx, e.left, e.right, t.left, t.right) - i.cx) * .5 * r : 0,
                    u = 1 + .04 * r;
                  eu(k.uRectA.value[l], i, o, 0, u), eo(0, l, i, u, .8 * m(0, .6, r), n * Math.pow(r, 1.25), Math.sin(Math.PI * r));
                }
                l++;
              }
            }
            let n = 0;
            if (t) {
              let l = 1.12 * t.depth + .5;
              for (let r = 0; r < t.glyphs.length && n < 64; r++) {
                if (U && U.taken[r]) continue;
                let i = t.glyphs[r],
                  o = ei(er(t, i.cx), a),
                  u = e ? m(.38, 1, o) : o,
                  s = 1 - u,
                  d = e ? (en(i.cx, t.left, t.right, e.left, e.right) - i.cx) * .5 * s : 0,
                  h = 1 - .04 * s;
                eu(k.uRectB.value[n], i, d, 0, h), eo(2, n, i, h, .8 * s, l * Math.pow(s, .85), Math.sin(Math.PI * u)), n++;
              }
            }
            k.uCountA.value = l, k.uCountB.value = n, A.needsUpdate = !0;
          })(n, r, l ? t : 1), k.uTintAmount.value = .45 * !!n, k.uAtlasA.value = n?.texture ?? y, k.uAtlasB.value = r?.texture ?? y, k.uGoo.value = .1 * P, k.uSwell.value = .02 * P, k.uBand.value = Math.max(.5, .05 * P), k.uCap.value = z, a.render(B, R);
        },
        ed = () => {
          X || H || (H = n.requestAnimationFrame(ec));
        },
        eh = (e, a) => {
          if (0 === S.length) return;
          let l = (e % S.length + S.length) % S.length;
          if (t.current.onChange(l), t.current.reduced) {
            W = l, D = l, _ = -1, O = -1, Y = i(), es(i());
            return;
          }
          _ = a, D = l, Y = O = i(), ed();
        };
      function ec() {
        if (H = 0, X) return;
        let e = i(),
          a = K && !t.current.reduced && O < 0 && S.length > 1;
        a && !t.current.held && Z && e - Y >= 3.6 && (() => {
          if (S.length < 2) return;
          let e = O >= 0 ? D : W;
          O >= 0 && (W = D), eh(e + 1, e);
        })(), es(e), O >= 0 ? ed() : a && Z && !t.current.held && (Q && n.clearTimeout(Q), Q = n.setTimeout(() => {
          Q = 0, ed();
        }, Math.max(16, (3.6 - (e - Y)) * 1e3)));
      }
      let ef = new ResizeObserver(() => {
        et(!1), es(i());
      });
      ef.observe(e);
      let em = new IntersectionObserver(([e]) => {
        (Z = e.isIntersecting) && !K && (K || (K = !0, t.current.reduced ? (W = 0, Y = i(), es(i())) : eh(0, -1))), Z && ed();
      });
      em.observe(e);
      let ep = new MutationObserver(() => {
        ea(), es(i());
      });
      ep.observe(l.documentElement, {
        attributes: !0,
        attributeFilter: ["class", "style", "data-theme"]
      });
      let ex = n.matchMedia("(prefers-color-scheme: dark)"),
        eg = () => {
          ea(), es(i());
        };
      ex.addEventListener("change", eg);
      let ev = e => {
          e.preventDefault(), J = !0;
        },
        ew = () => {
          J = !1, et(!0), ea(), es(i());
        };
      return r.addEventListener("webglcontextlost", ev), r.addEventListener("webglcontextrestored", ew), ea(), et(!0), es(i()), l.fonts && l.fonts.ready && l.fonts.ready.then(() => {
        X || (et(!0), es(i()));
      }), {
        goTo: e => {
          if (0 === S.length) return;
          let t = f(Math.round(e), 0, S.length - 1),
            a = O >= 0 ? D : W;
          t !== a && (O >= 0 && (W = D), eh(t, a));
        },
        sync: () => {
          let e = t.current.held;
          V && !e && (Y = i()), V = e, ed();
        },
        destroy: () => {
          for (let e of (X = !0, H && n.cancelAnimationFrame(H), Q && n.clearTimeout(Q), ef.disconnect(), em.disconnect(), ep.disconnect(), ex.removeEventListener("change", eg), r.removeEventListener("webglcontextlost", ev), r.removeEventListener("webglcontextrestored", ew), S)) e.texture?.dispose();
          y.dispose(), A.dispose(), C.dispose(), F.geometry.dispose(), a.dispose(), r.remove();
        }
      };
    }(e, h);
    return a.current = l, () => {
      l?.destroy(), a.current = null;
    };
  }, []);
  let M = e => {
      A(!0), y(e), a.current?.goTo(e);
    },
    k = b || !!e;
  return <section className="relative w-full overflow-hidden bg-white px-4 py-20 text-neutral-950 dark:bg-neutral-950 dark:text-white sm:px-6 lg:px-8 lg:py-28"><motion.div variants={g} initial={!e && "hidden"} whileInView="show" viewport={{
      once: !0,
      amount: .3
    }} className="mx-auto w-full max-w-[1400px]"><div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,22rem)] lg:items-end lg:gap-12"><h2 className="font-medium"><motion.span variants={v} className="block text-[clamp(2.25rem,5vw,4.5rem)] leading-none tracking-[-0.045em]">We stay</motion.span><span ref={t} aria-hidden="true" className="relative -ml-[0.04em] mt-1 inline-grid align-baseline text-[clamp(4.5rem,17vw,15rem)] leading-[0.9] tracking-[-0.06em] text-[#ec4a1c] dark:text-[#ff6236]">{s.map(e => <span data-morph-word="" className="invisible whitespace-pre [grid-area:1/1]">{e.word}</span>)}</span><span className="sr-only">{s[w].word}</span></h2><motion.p variants={v} className="max-w-[30ch] text-pretty text-base leading-relaxed text-neutral-600 dark:text-neutral-400 sm:text-lg lg:pb-5">Four habits we hire for, work by and hold each other to.</motion.p></div><motion.ul variants={v} aria-label="Our values" onPointerLeave={() => A(!1)} className="mt-16 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:mt-24 lg:grid-cols-4">{s.map((e, t) => {
          let a = t === w;
          return <li><button type="button" aria-pressed={a} onPointerEnter={e => {
              "mouse" === e.pointerType && M(t);
            }} onFocus={() => M(t)} onBlur={() => A(!1)} onClick={() => M(t)} className="block w-full cursor-pointer rounded-sm text-left outline-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"><span className="relative block h-px w-full overflow-hidden bg-neutral-200 dark:bg-neutral-800">{a && <motion.span className="absolute inset-0 origin-left bg-neutral-950 dark:bg-white" initial={{
                  scaleX: +!!k
                }} animate={{
                  scaleX: 1
                }} transition={{
                  duration: 3.6 * !k,
                  ease: "linear"
                }} />}</span><span className={`mt-5 block text-xl font-medium tracking-[-0.02em] transition-colors duration-300 ${a ? "text-neutral-950 dark:text-white" : "text-neutral-400 dark:text-neutral-600"}`}>{e.name}</span><span className={`mt-2 block max-w-[32ch] text-sm leading-relaxed transition-colors duration-300 ${a ? "text-neutral-600 dark:text-neutral-400" : "text-neutral-500"}`}>{e.line}</span></button></li>;
        })}</motion.ul></motion.div></section>;
}

export default About13;

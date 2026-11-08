import * as React from "react";
import * as __mod_50969 from "../_helpers/50969";
import * as __mod_12246 from "../_helpers/12246";
import * as __mod_2253 from "../_helpers/2253";
/**
 * About 15
 * Record label story above a fan of sleeves with a spinning record
 * slug: about-15
 * category: About
 * export: About15
 * deps: motion, three
 * original: ts-tailwind/blocks/about/about-15.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import { motion, AnimatePresence } from "motion/react";

let u = [{
    src: "/demo-media/abstract-amber-loop.webp",
    alt: "Amber loop cover: tilted golden-amber loop on a grainy raspberry-purple field",
    title: "Amber loop",
    artist: "Quiet Coast"
  }, {
    src: "/demo-media/abstract-pink-eclipse.webp",
    alt: "Pink eclipse cover: coral-pink disc crossing a violet diagonal plane on a grainy purple field",
    title: "Pink eclipse",
    artist: "Iona Vale"
  }, {
    src: "/demo-media/abstract-rose-balance.webp",
    alt: "Rose balance cover: tilted raspberry rounded rectangle and tangerine disc on a rose-pink field",
    title: "Rose balance",
    artist: "Low Meridian"
  }, {
    src: "/demo-media/abstract-coral-fold.webp",
    alt: "Coral fold cover: broad vermilion and orange folded plane over deep plum with fine grain",
    title: "Coral fold",
    artist: "Static Gardens"
  }, {
    src: "/demo-media/abstract-fuchsia-wave.webp",
    alt: "Fuchsia wave cover: broad fuchsia S-shaped band with a coral gradient across deep plum",
    title: "Fuchsia wave",
    artist: "Mira Sol"
  }, {
    src: "/demo-media/abstract-violet-steps.webp",
    alt: "Violet steps cover: three interlocking violet and pink stepped planes with an amber edge",
    title: "Violet steps",
    artist: "The Slow Hours"
  }, {
    src: "/demo-media/abstract-plum-ribbon.webp",
    alt: "Plum ribbon cover: intersecting pink and plum diagonal ribbons on a coral-magenta field",
    title: "Plum ribbon",
    artist: "Hollow North"
  }, {
    src: "/demo-media/abstract-orchid-orbit.webp",
    alt: "Orchid orbit cover: fuchsia ring and peach crescent on a grainy orchid-purple field",
    title: "Orchid orbit",
    artist: "June Atlas"
  }],
  d = [{
    value: "412",
    label: "Records"
  }, {
    value: "41",
    label: "Artists"
  }, {
    value: "1",
    label: "Pressing plant"
  }],
  c = 2 * Math.PI,
  m = (e, t, a) => Math.min(a, Math.max(t, e)),
  h = (e, t, a) => {
    let r = m((a - e) / (t - e), 0, 1);
    return r * r * (3 - 2 * r);
  },
  p = e => e <= .04045 ? e / 12.92 : Math.pow((e + .055) / 1.055, 2.4),
  v = (e, t, a) => {
    let r = p(e),
      l = p(t),
      n = p(a),
      o = Math.cbrt(.4122214708 * r + .5363325363 * l + .0514459929 * n),
      i = Math.cbrt(.2119034982 * r + .6806995451 * l + .1073969566 * n),
      s = Math.cbrt(.0883024619 * r + .2817188376 * l + .6299787005 * n);
    return [.2104542553 * o + .793617785 * i - .0040720468 * s, 1.9779984951 * o - 2.428592205 * i + .4505937099 * s, .0259040371 * o + .7827717662 * i - .808675766 * s];
  },
  f = (e, t, a) => {
    let r = Math.pow(e + .3963377774 * t + .2158037573 * a, 3),
      l = Math.pow(e - .1055613458 * t - .0638541728 * a, 3),
      n = Math.pow(e - .0894841775 * t - 1.291485548 * a, 3);
    return [4.0767416621 * r - 3.3077115913 * l + .2309699292 * n, -1.2684380046 * r + 2.6097574011 * l - .3413193965 * n, -.0041960863 * r - .7034186147 * l + 1.707614701 * n];
  },
  x = v(139 / 255, 92 / 255, 246 / 255),
  g = (e, t, a, r, l, n) => {
    let o = c / Math.max(l, .02),
      i = Math.max(1, Math.ceil(r / (1 / 240))),
      s = r / i;
    for (let e = 0; e < i; e++) u += (o * o * (a - e) - 2 * n * o * t) * s, d += t * s;
    return [e, t];
  },
  b = `
uniform vec2 uSize;
varying vec2 vUv;

void main() {
  vUv = position.xy / uSize + 0.5;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,
  M = `
precision highp float;

uniform sampler2D uImage;
uniform float uImageAspect;
uniform vec2 uSize;
uniform float uLoaded;
uniform float uDim;
uniform vec3 uBackground;
uniform vec3 uPlaceholder;
varying vec2 vUv;

void main() {
  float cardAspect = uSize.x / uSize.y;
  vec2 uv = vUv - 0.5;
  if (cardAspect > uImageAspect) {
    uv.y *= uImageAspect / cardAspect;
  } else {
    uv.x *= cardAspect / uImageAspect;
  }
  uv += 0.5;
  vec3 color = texture2D(uImage, uv).rgb;
  color = mix(uPlaceholder, color, clamp(uLoaded, 0.0, 1.0));
  color = mix(color, uBackground, clamp(uDim, 0.0, 1.0));
  gl_FragColor = vec4(color, 1.0);
}
`,
  y = `
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,
  w = `
precision highp float;

uniform vec2 uSize;
uniform vec2 uBox;
uniform float uRadius;
uniform float uBlur;
uniform float uStrength;
uniform float uRound;
varying vec2 vUv;

float roundBox(vec2 p, vec2 b, float r) {
  vec2 q = abs(p) - b + r;
  return length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - r;
}

void main() {
  vec2 p = (vUv - 0.5) * uSize;
  float d = uRound > 0.5 ? length(p) - uBox.x : roundBox(p, uBox, uRadius);
  float a = 1.0 - smoothstep(-uBlur, uBlur, d);
  a *= a;
  float alpha = a * uStrength;
  if (alpha < 0.002) discard;
  gl_FragColor = vec4(0.0, 0.0, 0.0, alpha);
}
`,
  k = `
varying vec2 vPos;

void main() {
  vPos = position.xy;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,
  P = `
precision highp float;

uniform sampler2D uImage;
uniform float uImageAspect;
uniform float uLoaded;
uniform float uSpin;
uniform vec3 uVinyl;
uniform vec3 uPlaceholder;
uniform vec3 uBackground;
uniform float uDim;
varying vec2 vPos;

float hash(float n) {
  return fract(sin(n * 12.9898) * 43758.5453);
}

void main() {
  float r = length(vPos);
  float px = max(fwidth(r), 1e-4);
  float theta = atan(vPos.y, vPos.x);
  float label = 0.33;

  vec3 color;
  if (r < label) {
    float c = cos(uSpin);
    float s = sin(uSpin);
    vec2 q = vec2(c * vPos.x + s * vPos.y, -s * vPos.x + c * vPos.y) / label;
    vec2 uv = q * 0.5;
    if (uImageAspect > 1.0) {
      uv.x /= uImageAspect;
    } else {
      uv.y *= uImageAspect;
    }
    uv += 0.5;
    vec3 art = texture2D(uImage, uv).rgb;
    art = mix(uPlaceholder, art, clamp(uLoaded, 0.0, 1.0));
    float edge = smoothstep(label - 0.018, label - 0.004, r);
    color = art * (1.0 - 0.32 * edge);
    float hole = 1.0 - smoothstep(0.026, 0.026 + px * 1.5, r);
    color = mix(color, uBackground, hole);
  } else {
    float lead = smoothstep(label, label + 0.05, r) * (1.0 - smoothstep(0.935, 0.95, r));
    float ring = (r - 0.4) * 6.0;
    float cell = floor(ring);
    float local = fract(ring);
    float separator = (1.0 - smoothstep(0.0, 0.035 + px * 6.0, local)) * step(0.4, r) * step(r, 0.935);
    float density = clamp(px * 140.0, 0.0, 1.0);
    float groove = mix(0.5 + 0.5 * sin(r * 880.0 + hash(cell) * 6.2831), 0.5, density);
    vec3 base = uVinyl * (0.92 + 0.12 * groove * lead);
    float light = 0.86;
    float facing = abs(cos(theta + uSpin * 0.0 - light));
    float sheen = pow(facing, 26.0) + 0.45 * pow(abs(cos(theta - light - 0.32)), 70.0);
    float sheenBand = smoothstep(label + 0.02, 0.46, r) * (1.0 - smoothstep(0.9, 0.95, r));
    vec3 highlight = vec3(1.0) * sheen * sheenBand * (0.13 + 0.08 * groove);
    float rim = smoothstep(0.955, 0.99, r) * (1.0 - smoothstep(0.99, 1.0, r));
    color = base + highlight + vec3(0.06) * separator * sheenBand + vec3(0.05) * rim;
  }
  float alpha = 1.0 - smoothstep(1.0 - px * 1.2, 1.0, r);
  color = mix(color, uBackground, clamp(uDim, 0.0, 1.0));
  gl_FragColor = vec4(color * alpha, alpha);
}
`,
  N = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: .08
      }
    }
  },
  I = {
    hidden: {
      opacity: 0,
      y: 18
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: .8,
        ease: [.16, 1, .3, 1]
      }
    }
  },
  E = "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklch,currentColor_35%,transparent)]",
  L = `pointer-events-auto grid size-7 flex-none cursor-pointer place-items-center rounded-full text-inherit opacity-55 transition-[opacity,background-color] duration-[160ms] ease-[ease] hover:bg-[color-mix(in_oklch,currentColor_10%,transparent)] hover:opacity-100 ${E}`,
  j = "col-start-1 row-start-1 [transition:opacity_200ms_ease,transform_260ms_cubic-bezier(0.22,1,0.36,1)]";
function C() {
  let e = (0, __mod_50969.I)(),
    t = (0, React.useRef)(null),
    a = (0, React.useRef)(null),
    p = (0, React.useRef)(null),
    C = (0, React.useRef)(null),
    S = (0, React.useRef)(null),
    A = (0, React.useRef)(null),
    B = (0, React.useRef)(null),
    F = (0, React.useRef)(null),
    [_, z] = (0, React.useState)(0),
    [R, D] = (0, React.useState)(!1),
    [$, T] = (0, React.useState)(!1);
  (0, React.useEffect)(() => {
    let e = t.current,
      r = a.current,
      l = p.current,
      n = C.current,
      o = S.current,
      d = A.current,
      N = B.current;
    if (!e || !r || !l || !n || !o || !d || !N) return;
    let I = ((e, t, a, r) => {
      let l,
        n = e.ownerDocument,
        o = n.defaultView ?? window,
        d = n.createElement("canvas");
      d.style.cssText = "position:absolute;inset:0;width:100%;height:100%;display:block";
      try {
        l = new __mod_12246.WebGLRenderer({
          canvas: d,
          alpha: !0,
          antialias: !0,
          premultipliedAlpha: !0,
          powerPreference: "high-performance"
        });
      } catch {
        return null;
      }
      t.appendChild(d), l.setClearColor(0, 0);
      let p = new __mod_2253.Z58(),
        N = new __mod_2253.ubm(30, 1, 10, 8e3),
        I = new __mod_2253.GYF(new Uint8Array([128, 128, 128, 255]), 1, 1);
      I.needsUpdate = !0;
      let E = new __mod_2253.Q1f(0, 0, 0),
        L = new __mod_2253.Q1f(.5, .5, .5),
        j = new __mod_2253.Q1f().setStyle("#131116", __mod_2253.jf0),
        C = new __mod_2253.Q1f(0),
        S = new __mod_2253.Q1f(0xffffff),
        A = Math.min(8, l.capabilities.getMaxAnisotropy()),
        B = new __mod_2253.I9Y(300, 300),
        F = new __mod_2253.MSw(new __mod_2253.ypk(), 1),
        _ = new __mod_2253.bdM(1, 1),
        z = new __mod_2253.tcD(1.01, 160),
        R = o.matchMedia("(prefers-reduced-motion: reduce)"),
        D = o.matchMedia("(prefers-color-scheme: dark)"),
        $ = R.matches,
        T = e => new __mod_2253.BKk({
          uniforms: {
            uSize: {
              value: new __mod_2253.I9Y(1, 1)
            },
            uBox: {
              value: new __mod_2253.I9Y(1, 1)
            },
            uRadius: {
              value: 12
            },
            uBlur: {
              value: 24
            },
            uStrength: {
              value: .3
            },
            uRound: {
              value: +!!e
            }
          },
          vertexShader: y,
          fragmentShader: w,
          transparent: !0,
          premultipliedAlpha: !1,
          depthWrite: !1,
          depthTest: !1
        }),
        W = Array.from({
          length: 13
        }, () => {
          let e = new __mod_2253.BKk({
              uniforms: {
                uImage: {
                  value: I
                },
                uImageAspect: {
                  value: 1
                },
                uSize: {
                  value: B
                },
                uLoaded: {
                  value: 0
                },
                uDim: {
                  value: 0
                },
                uBackground: {
                  value: E
                },
                uPlaceholder: {
                  value: L
                }
              },
              vertexShader: b,
              fragmentShader: M,
              side: __mod_2253.$EB,
              transparent: !0,
              depthTest: !1,
              depthWrite: !1
            }),
            t = new __mod_2253.eaF(F, e);
          t.frustumCulled = !1, t.visible = !1, p.add(t);
          let a = new __mod_2253.eaF(_, T(!1));
          return a.frustumCulled = !1, a.visible = !1, p.add(a), {
            mesh: t,
            shade: a,
            index: 0,
            order: 0
          };
        }),
        U = new __mod_2253.eaF(z, new __mod_2253.BKk({
          uniforms: {
            uImage: {
              value: I
            },
            uImageAspect: {
              value: 1
            },
            uLoaded: {
              value: 0
            },
            uSpin: {
              value: 0
            },
            uVinyl: {
              value: j
            },
            uPlaceholder: {
              value: L
            },
            uDim: {
              value: 0
            },
            uBackground: {
              value: E
            }
          },
          vertexShader: k,
          fragmentShader: P,
          side: __mod_2253.$EB,
          transparent: !0,
          premultipliedAlpha: !0,
          depthTest: !1,
          depthWrite: !1
        }));
      U.frustumCulled = !1, U.visible = !1, p.add(U);
      let H = new __mod_2253.eaF(_, T(!0));
      H.frustumCulled = !1, H.visible = !1, p.add(H);
      let q = [],
        O = 0,
        V = 0,
        X = 1,
        Y = !1,
        Q = 0,
        G = 0,
        K = 0,
        Z = 0,
        J = !1,
        ee = null,
        et = 0,
        ea = 0,
        er = 0,
        el = 0,
        en = 0,
        eo = !1,
        ei = 0,
        es = 0,
        eu = 0,
        ed = 0,
        ec = 0,
        em = !1,
        eh = -1,
        ep = 0,
        ev = 0,
        ef = 0,
        ex = "",
        eg = n.createElement("canvas"),
        eb = n.createElement("canvas");
      eb.width = 1, eb.height = 1;
      let eM = eb.getContext("2d", {
          willReadFrequently: !0
        }),
        ey = 0,
        ew = 0,
        ek = 0,
        eP = !1,
        eN = 0,
        eI = !1,
        eE = !1,
        eL = !1,
        ej = !1,
        eC = !1,
        eS = !1,
        eA = !1,
        eB = 0,
        eF = 0,
        e_ = null,
        e$ = -1,
        eU = 0,
        eq = null,
        eO = null,
        eV = Array.from({
          length: 29
        }, () => {
          let e = n.createElement("span");
          return e.style.cssText = "position:absolute;left:0;top:50%;width:1px;height:9px;margin-top:-4.5px;border-radius:1px;background:currentColor;opacity:0;will-change:transform", a.ruler.appendChild(e), {
            node: e,
            x: NaN,
            on: !1
          };
        }),
        eX = "",
        eY = 0,
        eQ = new Map(),
        eG = {
          cardW: 300,
          cardH: 300,
          step: 180,
          lift: 0,
          labelGap: 28,
          controlsTop: 28
        },
        eK = () => Math.max(u.length, 1),
        eZ = e => (e % eK() + eK()) % eK(),
        eJ = () => o.performance.now() / 1e3,
        e0 = () => {
          q.forEach(e => {
            e.image.onload = null, e.texture.dispose();
          });
          let e = eK(),
            t = eZ(Math.round(Q));
          q = u.map((a, r) => {
            let l = new Image();
            l.crossOrigin = "anonymous", l.decoding = "async";
            let n = Math.abs(r - t) % e;
            l.fetchPriority = 2 >= Math.min(n, e - n) ? "high" : "low";
            let o = new __mod_2253.gPd(l);
            o.colorSpace = __mod_2253.jf0, o.minFilter = __mod_2253.$_I, o.magFilter = __mod_2253.k6q, o.generateMipmaps = !0, o.anisotropy = A;
            let i = {
              image: l,
              texture: o,
              aspect: 1,
              ready: !1,
              uploaded: !1,
              fade: 0,
              tone: null
            };
            return l.onload = () => {
              if (eI) return;
              let e = () => {
                eI || i.ready || (i.aspect = l.naturalWidth / Math.max(l.naturalHeight, 1), i.ready = !0, i.tone = ((e, t) => {
                  let a;
                  t.width = 28, t.height = 28;
                  let r = t.getContext("2d", {
                    willReadFrequently: !0
                  });
                  if (!r) return null;
                  try {
                    r.drawImage(e, 0, 0, 28, 28), a = r.getImageData(0, 0, 28, 28).data;
                  } catch {
                    return null;
                  }
                  let l = new Float64Array(36),
                    n = [];
                  for (let e = 0; e < a.length; e += 4) {
                    let [t, r, o] = v(a[e] / 255, a[e + 1] / 255, a[e + 2] / 255),
                      i = Math.hypot(r, o);
                    if (i < .04) continue;
                    let s = Math.pow(i, 1.5) * Math.max(0, 1 - 1.5 * Math.abs(t - .62));
                    if (s <= 0) continue;
                    let u = Math.atan2(o, r),
                      d = Math.floor((u / c % 1 + 1) % 1 * 36) % 36;
                    l[d] += s, n.push(t, r, o, u, s);
                  }
                  if (!n.length) return null;
                  let o = 0,
                    i = -1;
                  for (let e = 0; e < 36; e++) {
                    let t = l[(e + 35) % 36] + 2 * l[e] + l[(e + 1) % 36];
                    t > i && (i = t, o = e);
                  }
                  let s = (o + .5) / 36 * c,
                    u = 0,
                    d = 0,
                    m = 0,
                    h = 0;
                  for (let e = 0; e < n.length; e += 5) {
                    if (Math.abs(Math.atan2(Math.sin(n[e + 3] - s), Math.cos(n[e + 3] - s))) > .32) continue;
                    let t = n[e + 4];
                    u += t, d += n[e] * t, m += n[e + 1] * t, h += n[e + 2] * t;
                  }
                  return u > 0 ? [d / u, m / u, h / u] : null;
                })(l, eg), ex = "", o.needsUpdate = !0, e6());
              };
              l.decode().then(e, e);
            }, l.src = a.src, i;
          });
        },
        e1 = () => {
          let t = Math.round(e.clientWidth),
            a = Math.round(e.clientHeight);
          if (t < 2 || a < 2) return Y = !1, !1;
          let r = Math.min(o.devicePixelRatio || 1, 2);
          return (!Y || t !== O || a !== V || r !== X) && (Y = !0, O = t, V = a, X = r, l.setPixelRatio(X), l.setSize(O, V, !1), !0);
        },
        e2 = e => {
          if (!eM || !e) return null;
          eM.clearRect(0, 0, 1, 1), eM.fillStyle = "#000000", eM.fillStyle = e, eM.fillRect(0, 0, 1, 1);
          let [t, a, r, l] = eM.getImageData(0, 0, 1, 1).data;
          return {
            r: t / 255,
            g: a / 255,
            b: r / 255,
            a: l / 255
          };
        },
        e5 = () => {
          (() => {
            let __walk = e;
            for (; __walk;) {
              let e = e2(o.getComputedStyle(__walk).backgroundColor);
              if (e && e.a > 0) return void E.setRGB(e.r, e.g, e.b, __mod_2253.jf0);
              __walk = __walk.parentElement;
            }
            let a = e2(o.getComputedStyle(e).color);
            E.setHex(a && a.r + a.g + a.b > 1.5 ? 657930 : 0xffffff, __mod_2253.jf0);
          })();
          let t = .2126 * E.r + .7152 * E.g + .0722 * E.b > .6;
          L.copy(E).lerp(t ? C : S, .08);
        },
        e3 = () => {
          let e = m(V / 620, .72, 1.15),
            t = 28 * e,
            r = t + 42 + 28 * e,
            l = r + 38,
            n = a.ruler.clientWidth;
          n !== eU && (eU = n, eH = NaN), eG.labelGap = t, eG.controlsTop = r;
          let o = Math.max(V - l, .5 * V),
            i = m(1, .5, 2),
            u = m(.86, .2, .95) * o,
            d = .46 + .3 * h(900, 360, O);
          u * i > O * d && (u = O * d / i);
          let c = u * i;
          eG.cardW = c, eG.cardH = u, eG.step = c * m(.58, .1, 1.4);
          let p = Math.max(3.1 * u, 600);
          N.fov = 2 * Math.atan(V / 2 / p) * 180 / Math.PI, N.aspect = O / V, N.near = .05 * p, N.far = 6 * p, N.position.set(0, 0, p), N.lookAt(0, 0, 0), eG.lift = l / 2, N.setViewOffset(O, V, 0, eG.lift, O, V), N.updateProjectionMatrix(), N.updateMatrixWorld();
          let v = m(14, 0, Math.min(c, u) / 2),
            f = `${c.toFixed(2)}|${u.toFixed(2)}|${v.toFixed(2)}`;
          if (f !== eX) {
            eX = f;
            let e = new __mod_2253.ypk(),
              t = c / 2,
              a = u / 2,
              r = Math.max(v, .001);
            e.moveTo(-t + r, -a), e.lineTo(t - r, -a), e.absarc(t - r, -a + r, r, -Math.PI / 2, 0, !1), e.lineTo(t, a - r), e.absarc(t - r, a - r, r, 0, Math.PI / 2, !1), e.lineTo(-t + r, a), e.absarc(-t + r, a - r, r, Math.PI / 2, Math.PI, !1), e.lineTo(-t, -a + r), e.absarc(-t + r, -a + r, r, Math.PI, 1.5 * Math.PI, !1);
            let l = (() => {
              /**
               * 自己三角化，不用 __mod_2253.MSw（ShapeGeometry）。
               *
               * 反编译时 three 的 earcut 被还原坏了：linkedList() 里累加变量 n 没有初值，
               * oQ() 永远返回 undefined，链表断成单个节点，earcut 主循环
               * `while (e.prev !== e.next)` 就永远退不出去。
               * 这个是公共 helper 的问题（data/tsx/_helpers/2253.tsx），这里不动它，
               * 改成在本地做扇形三角化：本形状是凸圆角矩形，扇形三角化结果与
               * earcut 完全等价（已验证三角形总面积 == 多边形面积）。
               */
              let e2 = e.getPoints(12),
                n = e2.length,
                cx = 0,
                cy = 0;
              for (let i = 0; i < n; i++) cx += e2[i].x, cy += e2[i].y;
              cx /= Math.max(n, 1), cy /= Math.max(n, 1);
              let pos = new Float32Array((n + 1) * 3),
                nor = new Float32Array((n + 1) * 3),
                uv = new Float32Array((n + 1) * 2),
                idx = new Uint32Array(n * 3);
              pos[0] = cx, pos[1] = cy, nor[2] = 1, uv[0] = cx, uv[1] = cy;
              for (let i = 0; i < n; i++) {
                let p = e2[i],
                  o = 3 * (i + 1);
                pos[o] = p.x, pos[o + 1] = p.y, nor[o + 2] = 1, uv[2 * (i + 1)] = p.x, uv[2 * (i + 1) + 1] = p.y;
                idx[3 * i] = 0, idx[3 * i + 1] = i + 1, idx[3 * i + 2] = (i + 1) % n + 1;
              }
              let g = new __mod_2253.LoY();
              return g.setIndex(new __mod_2253.qtW(idx, 1)), g.setAttribute("position", new __mod_2253.qtW(pos, 3)), g.setAttribute("normal", new __mod_2253.qtW(nor, 3)), g.setAttribute("uv", new __mod_2253.qtW(uv, 2)), g;
            })();
            W.forEach(e => {
              e.mesh.geometry = l;
            }), F.dispose(), F = l, B.set(c, u);
          }
        },
        e4 = (e, t) => {
          let a = Math.abs(e) * t,
            r = Math.sign(e),
            l = 1 - .85 * m(.5, 0, 1),
            n = l * a + (1 - l) * Math.tanh(1.5 * a) / Math.tanh(1.5),
            o = Math.sqrt(a * a + .09) - .3,
            i = m(.5, 0, 1),
            s = m(6, 0, 30) * Math.PI / 180,
            u = Math.tanh(1.4 * e * t) * (m(22, 0, 70) * Math.PI / 180),
            d = 1 - (.04 + .12 * i) * Math.tanh(1.2 * o),
            c = a < 1 ? Math.pow(Math.sin(Math.PI * a), 2) : 0,
            h = .5 * l + (1 - l) * Math.tanh(.75) / Math.tanh(1.5),
            p = Math.max(0, .5 * eG.cardW * 1.04 - eG.step * h);
          return {
            x: r * (eG.step * n + p * c),
            y: -(.035 * eG.cardH) * n * n,
            z: -eG.cardH * (.24 + .46 * i) * o,
            rz: -r * s * n,
            ry: u,
            scale: d
          };
        },
        e6 = () => {
          eI || eE || !eP || ey || (ew && (o.clearTimeout(ew), ew = 0), ey = o.requestAnimationFrame(ts));
        },
        e8 = (e = 2.6) => {
          let t = eJ();
          er = Math.max(er, t + e), ea = Math.max(ea, t + Math.max(4, e));
        },
        e9 = e => {
          let t = eZ(Math.round(K));
          (e !== em || t !== eh) && (em = e, eh = e ? t : -1, r.onPlay(e), e8(), e6());
        },
        e7 = e => {
          let t = eK(),
            a = Math.round(K),
            r = ((e - eZ(a)) % t + t + Math.floor(t / 2)) % t - Math.floor(t / 2);
          K = a + r, e8(), e6();
        },
        te = e => {
          K = Math.round(K) + e, e8(), e6();
        },
        tt = new __mod_2253.O9p(),
        ta = new __mod_2253.kn4(),
        tr = new __mod_2253.PTz(),
        tl = new __mod_2253.PTz(),
        tn = new __mod_2253.Pq0(),
        to = new __mod_2253.Pq0(),
        ti = new __mod_2253.Pq0();
      function ts(t) {
        if (ey = 0, eI || eE) return;
        if (!Y) {
          if (e1(), !Y) return;
          e3();
        }
        let n = ek && t - ek < 100 ? Math.min(Math.max((t - ek) / 1e3, 0), .05) : 1 / 60;
        ek = t;
        let i = eJ(),
          s = !1;
        for (let e of (i - eY > 1.2 && (eY = i, e5()), (() => {
          let e = q.length,
            t = eZ(Math.round(Q)),
            a = null,
            r = 1 / 0;
          for (let l = 0; l < e; l++) {
            let n = q[l];
            if (!n.ready || n.uploaded) continue;
            let o = Math.abs(l - t) % e,
              i = Math.min(o, e - o);
            i < r && (r = i, a = n);
          }
          return !!a && (l.initTexture(a.texture), a.uploaded = !0, !0);
        })() && (s = !0), q)) e.uploaded && e.fade < 1 && (e.fade = $ || !eo ? 1 : Math.min(1, e.fade + n / .45), s = !0);
        if (!eo) {
          ei || (ei = i);
          let e = !0;
          for (let t = -2; t <= 2; t++) {
            let a = q[eZ(Math.round(Q) + t)];
            a && !a.uploaded && (e = !1);
          }
          e || $ || i - ei > 1.6 ? (eo = !0, el = +!!$) : s = !0;
        }
        eo && el < 1 && ([el, en] = g(el, en, 1, n, $ ? .05 : 1.5, .92), 1e-4 > Math.abs(1 - el) && 1e-4 > Math.abs(en) ? (el = 1, en = 0) : s = !0);
        let d = !!eO || !!eq || ej || eC,
          v = d || i < er || em;
        !$ && eK() > 1 ? v || 0 === ea ? ea = Math.max(ea, i + 4 * (d || em ? .6 : 1)) : i >= ea && (ea = i + 4, K = Math.round(K) + 1) : ea = 0, J && i - Z > .14 && (J = !1, K = Math.round(K)), eO && eO.moved || eq && eq.moved ? s = !0 : ([Q, G] = g(Q, G, K, n, $ ? .06 : J ? .6 : .85, .88), 1e-4 > Math.abs(Q - K) && 1e-4 > Math.abs(G) ? (Q = K, G = 0) : s = !0);
        let b = eZ(Math.round(Q));
        b !== NaN && (ez = b, r.onActive(b));
        let M = .04 > Math.abs(Q - Math.round(Q)) && !eO?.moved && !eq?.moved;
        em && eh !== eZ(Math.round(K)) && (em = !1, r.onPlay(!1), eh = -1);
        let y = Math.round(K);
        ef !== y && ed < .01 && es < .01 && (ef = y, ed = 0, ec = 0, es = 0, eu = 0);
        let w = ef === y,
          k = !!eO?.moved || !!eq?.moved,
          P = w && em && M ? 1 : 0;
        [ed, ec] = g(ed, ec, P, n, $ ? .05 : P > ed ? .7 : k ? .14 : .45, P > ed ? .74 : 1), Math.abs(ed - P) > 1e-4 || Math.abs(ec) > 1e-4 ? s = !0 : (ed = P, ec = 0);
        let L = w && M && !em ? eA ? 1 : .6 : 0;
        [es, eu] = g(es, eu, L, n, $ ? .05 : k ? .14 : .42, k ? 1 : .95), Math.abs(es - L) > 1e-4 || Math.abs(eu) > 1e-4 ? s = !0 : (es = L, eu = 0);
        let j = em && !$ ? m(33, 0, 90) * c / 60 : 0;
        Math.abs(ev += (j - ev) * (1 - Math.exp(-n / (j > ev ? .7 : 1.1)))) > .001 ? (ep = (ep + ev * n) % c, s = !0) : ev = 0, e1(), e3(), eS && !eO && tx();
        let C = Math.min(m(Math.round(3), 1, 5), Math.max(1, Math.floor((eK() - 1) / 2))),
          S = m(.45, 0, 1),
          A = m(.6, 0, 1),
          B = Math.round(Q),
          F = .47 * Math.min(eG.cardW, eG.cardH),
          _ = m(ed, -.2, 1.2),
          z = 2 * F * (.15 * es + .56 * _),
          R = ef - Q,
          D = -(.62 * F) * _,
          T = 0,
          O = null;
        for (let e = -13; e <= 13 && T < 13; e++) {
          let t = B + e,
            a = t - Q;
          if (Math.abs(a) > C + .6) continue;
          let r = W[T++];
          r.index = t;
          let l = e4(a, el),
            o = D + 1.25 * F * (h(0, .6, a - R) * _),
            i = h(C - .4, C + .55, Math.abs(a)),
            u = h(0, .5, el * (1.4 - .18 * Math.abs(a))),
            d = eQ.get(t) ?? 0,
            c = +(e_ === t);
          Math.abs((d += (c - d) * (1 - Math.exp(-n / .16))) - c) > .001 ? s = !0 : d = c, eQ.set(t, d);
          let p = Math.max(i, S * h(.35, 3.2, Math.abs(a)) * (1 - .6 * d), 1 - u);
          tt.set(0, l.ry, l.rz, "YXZ"), tr.setFromEuler(tt), ti.set(l.x + o, l.y, l.z), to.set(l.scale, l.scale, 1), ta.compose(ti, tr, to), r.mesh.matrixAutoUpdate = !1, r.mesh.matrix.copy(ta), r.mesh.matrixWorldNeedsUpdate = !0, r.mesh.visible = p < .999, r.order = 1e3 - 100 * Math.abs(a) + .01 * (a > 0), r.mesh.renderOrder = r.order;
          let v = q[eZ(t)],
            f = r.mesh.material.uniforms;
          f.uDim.value = p, v && (f.uImage.value = v.uploaded ? v.texture : I, f.uImageAspect.value = v.aspect, f.uLoaded.value = v.uploaded ? v.fade : 0), tn.set(0, -(.03 * eG.cardH), 0).applyQuaternion(tr).multiplyScalar(l.scale), ti.set(l.x + o + tn.x, l.y + tn.y, l.z + tn.z), to.set(l.scale * (1.5 * eG.cardW), l.scale * (1.5 * eG.cardH), 1), ta.compose(ti, tr, to), r.shade.matrixAutoUpdate = !1, r.shade.matrix.copy(ta), r.shade.matrixWorldNeedsUpdate = !0, r.shade.visible = r.mesh.visible && A > .001, r.shade.renderOrder = r.order - .5;
          let x = r.shade.material.uniforms;
          x.uSize.value.set(1.5 * eG.cardW, 1.5 * eG.cardH), x.uBox.value.set(.49 * eG.cardW, .49 * eG.cardH), x.uRadius.value = m(14, 0, eG.cardH / 2), x.uBlur.value = .075 * eG.cardH, x.uStrength.value = .55 * A * (1 - .85 * p), t === ef && (O = {
            x: l.x + o,
            y: l.y,
            z: l.z,
            scale: l.scale,
            order: r.order,
            dim: p
          }, tl.copy(tr));
        }
        for (; T < 13; T++) W[T].mesh.visible = !1, W[T].shade.visible = !1;
        for (let e of Array.from(eQ.keys())) Math.abs(e - Q) > 13 && eQ.delete(e);
        let X = O && (z > .5 || ed > .001);
        if (U.visible = !!X, H.visible = !!X && A > .001, X && O) {
          let e = q[eZ(ef)],
            t = F * O.scale;
          tn.set(z, 0, -.5).applyQuaternion(tl).multiplyScalar(O.scale), ti.set(O.x + tn.x, O.y + tn.y, O.z + tn.z), to.set(t, t, 1), U.matrixAutoUpdate = !1, U.matrix.compose(ti, tl, to), U.matrixWorldNeedsUpdate = !0, U.renderOrder = O.order - .7;
          let a = U.material.uniforms;
          a.uSpin.value = ep, a.uDim.value = O.dim, e && (a.uImage.value = e.uploaded ? e.texture : I, a.uImageAspect.value = e.aspect, a.uLoaded.value = +!!e.uploaded), tn.set(z, -(.05 * F), -.75).applyQuaternion(tl).multiplyScalar(O.scale), ti.set(O.x + tn.x, O.y + tn.y, O.z + tn.z), to.set(3 * t, 3 * t, 1), H.matrixAutoUpdate = !1, H.matrix.compose(ti, tl, to), H.matrixWorldNeedsUpdate = !0, H.renderOrder = O.order - .8;
          let r = H.material.uniforms;
          r.uSize.value.set(3 * t, 3 * t), r.uBox.value.set(.98 * t, .98 * t), r.uBlur.value = .16 * t, r.uStrength.value = .5 * A * h(0, .3, es + _) * (1 - .85 * O.dim);
        }
        let ee = eZ(Math.round(Q)),
          et = .2126 * E.r + .7152 * E.g + .0722 * E.b > .6,
          eg = `${ee}|${+!!q[ee]?.tone}|${+!!et}`;
        eg !== ex && (ex = eg, e.style.setProperty("--album-rail-tone", ((e, t) => {
          let [a, r, l] = e ?? x,
            n = Math.atan2(l, r),
            o = t ? Math.max(0, 1 - Math.abs(n - 1.75) / .35) : 0,
            i = t ? Math.max(0, 1 - Math.abs(n - 2.23) / .28) : 0;
          n += (1.33 - n) * o + (2.62 - n) * i;
          let s = t ? m(a, .42, .56 + .08 * o) : m(a, .74, .86),
            u = m(1.5 * Math.hypot(r, l), .1 * !!e, .21),
            d = f(s, u * Math.cos(n), u * Math.sin(n));
          for (let e = 0; e < 16 && d.some(e => e < -.001 || e > 1.001); e++) u *= .88, d = f(s, u * Math.cos(n), u * Math.sin(n));
          return `#${d.map(e => {
            let t;
            return Math.round(255 * m((t = m(e, 0, 1)) <= .0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - .055, 0, 1)).toString(16).padStart(2, "0");
          }).join("")}`;
        })(q[ee]?.tone ?? null, et))), function () {
          let e = V / 2 - eG.lift + eG.cardH / 2,
            t = e + eG.labelGap;
          (Number.isNaN(NaN) || Math.abs(t - NaN) > .25) && (eT = t, a.caption.style.top = `${NaN.toFixed(2)}px`);
          let r = e + eG.controlsTop;
          (Number.isNaN(NaN) || Math.abs(r - NaN) > .25) && (eW = r, a.deck.style.top = `${NaN.toFixed(2)}px`);
          let l = Math.round(Q);
          if (l !== NaN) {
            eR = l;
            let e = u[eZ(l)];
            a.title.textContent = e ? e.title : "", a.artist.textContent = e ? e.artist : "";
          }
          let n = Q - l,
            o = eo ? $ ? 1 : h(.35, .9, el) : 0,
            i = Math.abs(eO?.moved || eq?.moved ? 0 : G),
            s = (1 - h(.08, .42, Math.abs(n))) * (1 - h(2.5, 7, i)) * o,
            d = $ ? 0 : -(46 * n);
          if ((Number.isNaN(NaN) || Math.abs(d - NaN) > .02) && (eD = d, a.caption.style.transform = `translate3d(${d.toFixed(2)}px, 0, 0)`), Math.abs(s - e$) > .002 && (e$ = s, a.caption.style.opacity = s.toFixed(3)), eU > 0 && (Q !== NaN || Number.isNaN(NaN))) {
            eH = Q;
            let e = eU / 2,
              t = Math.round(Q),
              a = Math.floor(14.5);
            for (let r = 0; r < 29; r++) {
              let l = eV[r],
                n = e + (t - a + r - Q) * 18,
                o = n > 0 && n < eU && Math.abs(n - e) > 27;
              o !== l.on && (l.on = o, l.node.style.opacity = o ? "0.34" : "0"), o && (Number.isNaN(l.x) || Math.abs(n - l.x) > .01) && (l.x = n, l.node.style.transform = `translate3d(${(n - .5).toFixed(2)}px, 0, 0)`);
            }
          }
        }(), l.render(p, N), s || eO || eq ? e6() : !$ && !d && !em && eK() > 1 && (ew = o.setTimeout(() => {
          ew = 0, ek = 0, e6();
        }, 1e3 * Math.max(Math.max(ea, er) - i, .02) + 16));
      }
      let tu = new __mod_2253.tBo(),
        td = new __mod_2253.I9Y(),
        tc = (t, a) => {
          let r = e.getBoundingClientRect();
          td.set((t - r.left) / Math.max(r.width, 1) * 2 - 1, 1 - (a - r.top) / Math.max(r.height, 1) * 2), tu.setFromCamera(td, N);
          let l = W.filter(e => e.mesh.visible).map(e => e.mesh);
          U.visible && l.push(U);
          let n = tu.intersectObjects(l, !1),
            o = null;
          for (let e of n) (!o || e.object.renderOrder > o.renderOrder) && (o = e.object);
          if (!o) return null;
          if (o === U) return {
            kind: "disc",
            index: ef
          };
          let i = W.find(e => e.mesh === o);
          return i ? {
            kind: "card",
            index: i.index
          } : null;
        },
        tm = () => {
          eA = !1, em && (em = !1, eh = -1, r.onPlay(!1));
        },
        th = (e, t) => {
          let a = o.performance.now(),
            r = e.samples.filter(e => a - e.t < 110),
            l = 0;
          if (r.length > 1 && a - r[r.length - 1].t < 60) {
            let e = Math.max((r[r.length - 1].t - r[0].t) / 1e3, 1 / 120);
            l = (r[r.length - 1].p - r[0].p) / e;
          }
          return $ ? 0 : m(l, -t, t);
        },
        tp = e => {
          if (e.isPrimary && !(e.button > 0)) {
            e.stopPropagation(), eq = {
              id: e.pointerId,
              x: e.clientX,
              origin: Q,
              moved: !1,
              samples: [{
                t: o.performance.now(),
                p: Q
              }]
            }, G = 0, e8();
            try {
              a.ruler.setPointerCapture(e.pointerId);
            } catch {}
            e6();
          }
        },
        tv = e => {
          if (!eq || eq.id !== e.pointerId) return;
          let t = e.clientX - eq.x;
          if (!eq.moved && Math.abs(t) > 3 && (eq.moved = !0, tm()), !eq.moved) return;
          K = Q = eq.origin - t / 18;
          let a = o.performance.now();
          for (eq.samples.push({
            t: a,
            p: Q
          }); eq.samples.length > 2 && a - eq.samples[0].t > 110;) eq.samples.shift();
          e6();
        },
        tf = e => {
          if (!eq || eq.id !== e.pointerId) return;
          eq = null;
          try {
            a.ruler.hasPointerCapture(e.pointerId) && a.ruler.releasePointerCapture(e.pointerId);
          } catch {}
          if (eq.moved) {
            let e = th(eq, 14);
            G = e, K = Math.round(Q + .2 * e);
          } else {
            let t = a.ruler.getBoundingClientRect(),
              r = Math.round((e.clientX - t.left - t.width / 2) / 18);
            K = Math.round(K) + r;
          }
          e8(), e6();
        };
      function tx() {
        let t = tc(eB, eF),
          a = Math.round(K);
        e_ = t && "card" === t.kind && t.index !== a ? t.index : null, eA = !!t && t.index === a;
        let r = t ? "pointer" : "grab";
        e.style.cursor !== r && (e.style.cursor = r);
      }
      let tg = a => {
          if ("touch" === a.pointerType || eO || (eS = !0, eB = a.clientX, eF = a.clientY, tx()), eO && eO.id === a.pointerId) {
            if (!eO.moved && Math.abs(a.clientX - eO.x) > 6) {
              eO.moved = !0, tm(), e_ = null, eA = !1, e.style.cursor = "grabbing";
              try {
                t.setPointerCapture(a.pointerId);
              } catch {}
            }
            if (eO.moved) {
              Q = eO.origin - (a.clientX - eO.x) / Math.max(eG.step, 1);
              let e = o.performance.now();
              for (eO.samples.push({
                t: e,
                p: Q
              }); eO.samples.length > 2 && e - eO.samples[0].t > 110;) eO.samples.shift();
            }
          }
          e6();
        },
        tb = e => {
          e.isPrimary && !(e.button > 0) && (eL = !1, eO = {
            id: e.pointerId,
            x: e.clientX,
            origin: Q,
            moved: !1,
            samples: [{
              t: o.performance.now(),
              p: Q
            }]
          }, G = 0, e8(), e6());
        },
        tM = a => {
          if (!eO || eO.id !== a.pointerId) return;
          eO = null;
          try {
            t.hasPointerCapture(a.pointerId) && t.releasePointerCapture(a.pointerId);
          } catch {}
          if (eO.moved) {
            eL = !0;
            let t = th(eO, 16);
            G = t, K = Math.round(Q + .22 * t), e8(), e.style.cursor = "grab";
          }
          e6();
        },
        ty = e => {
          if (eL) {
            eL = !1;
            return;
          }
          let t = tc(e.clientX, e.clientY);
          if (!t) {
            em && e9(!1);
            return;
          }
          t.index === Math.round(K) ? e9(!em) : (K = t.index, e8(), e6());
        },
        tw = t => {
          eO && eO.id === t.pointerId || (eS = !1, e_ = null, eA = !1, e.style.cursor = "", e6());
        },
        tk = e => {
          let t = eJ();
          if (t - et > .14 && (ee = null), et = t, !ee && (e.deltaX || e.deltaY) && (ee = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? "x" : "y"), "x" !== ee) return;
          e.cancelable && e.preventDefault();
          let a = 1 === e.deltaMode ? 16 : 2 === e.deltaMode ? V : 1,
            r = m(e.deltaX * a, -240, 240);
          K = (J ? K : Math.round(K)) + r / 100, J = !0, Z = t, e8(), e6();
        },
        tP = t => {
          t.target === e && ("ArrowRight" === t.key ? (t.preventDefault(), te(1)) : "ArrowLeft" === t.key ? (t.preventDefault(), te(-1)) : "Home" === t.key ? (t.preventDefault(), e7(0)) : "End" === t.key ? (t.preventDefault(), e7(eK() - 1)) : "Enter" === t.key || " " === t.key ? (t.preventDefault(), e9(!em)) : "Escape" === t.key && em && (t.preventDefault(), e9(!1)));
        },
        tN = e => {
          "touch" !== e.pointerType && (ej = !0);
        },
        tI = () => {
          ea = Math.max(ea, eJ() + 2.4), e6();
        },
        tE = () => {
          ej && (ej = !1, tI());
        },
        tL = e => {
          let t = e.target;
          eC = !!t && t.matches(":focus-visible"), e6();
        },
        tj = t => {
          let a = t.relatedTarget;
          a && e.contains(a) || eC && (eC = !1, tI());
        },
        tC = () => {
          $ = R.matches, ek = 0, e6();
        },
        tS = () => {
          eY = eJ(), e5(), e6();
        };
      t.addEventListener("pointerdown", tb), t.addEventListener("pointermove", tg), t.addEventListener("pointerup", tM), t.addEventListener("pointercancel", tM), t.addEventListener("pointerleave", tw), t.addEventListener("click", ty), t.addEventListener("wheel", tk, {
        passive: !1
      }), e.addEventListener("keydown", tP), e.addEventListener("pointermove", tN), e.addEventListener("pointerleave", tE), e.addEventListener("focusin", tL), e.addEventListener("focusout", tj), a.ruler.addEventListener("pointerdown", tp), a.ruler.addEventListener("pointermove", tv), a.ruler.addEventListener("pointerup", tf), a.ruler.addEventListener("pointercancel", tf), R.addEventListener("change", tC), D.addEventListener("change", tS);
      let tA = new o.MutationObserver(tS);
      tA.observe(n.documentElement, {
        attributes: !0,
        attributeFilter: ["class", "style", "data-theme"]
      });
      let tB = new o.ResizeObserver(() => {
        e1() && (e3(), e6());
      });
      tB.observe(e);
      let tF = void 0 === o.IntersectionObserver ? null : new o.IntersectionObserver(e => {
        let t = e[e.length - 1];
        t && ((eP = t.isIntersecting) ? (eN && ea && (ea += eJ() - eN), eN = 0, ek = 0, e6()) : (eN || (eN = eJ()), ey && o.cancelAnimationFrame(ey), ey = 0, ew && o.clearTimeout(ew), ew = 0));
      }, {
        rootMargin: "80px"
      });
      tF ? tF.observe(e) : eP = !0;
      let t_ = e => {
          e.preventDefault(), eE = !0, ey && o.cancelAnimationFrame(ey), ey = 0;
        },
        tz = () => {
          eE = !1, e0(), e6();
        };
      return d.addEventListener("webglcontextlost", t_), d.addEventListener("webglcontextrestored", tz), e1(), Y && e3(), e5(), W[0].mesh.visible = !0, W[0].shade.visible = !0, U.visible = !0, H.visible = !0, l.compile(p, N), W[0].mesh.visible = !1, W[0].shade.visible = !1, U.visible = !1, H.visible = !1, e0(), e6(), {
        step: te,
        setPlaying: e9,
        destroy: () => {
          eI = !0, ey && o.cancelAnimationFrame(ey), ew && o.clearTimeout(ew), tF?.disconnect(), tB.disconnect(), tA.disconnect(), R.removeEventListener("change", tC), D.removeEventListener("change", tS), t.removeEventListener("pointerdown", tb), t.removeEventListener("pointermove", tg), t.removeEventListener("pointerup", tM), t.removeEventListener("pointercancel", tM), t.removeEventListener("pointerleave", tw), t.removeEventListener("click", ty), t.removeEventListener("wheel", tk), e.removeEventListener("keydown", tP), e.removeEventListener("pointermove", tN), e.removeEventListener("pointerleave", tE), e.removeEventListener("focusin", tL), e.removeEventListener("focusout", tj), a.ruler.removeEventListener("pointerdown", tp), a.ruler.removeEventListener("pointermove", tv), a.ruler.removeEventListener("pointerup", tf), a.ruler.removeEventListener("pointercancel", tf), eV.forEach(e => e.node.remove()), e.style.cursor = "", e.style.removeProperty("--album-rail-tone"), d.removeEventListener("webglcontextlost", t_), d.removeEventListener("webglcontextrestored", tz), q.forEach(e => {
            e.image.onload = null, e.texture.dispose();
          }), W.forEach(e => {
            e.mesh.material.dispose(), e.shade.material.dispose();
          }), U.material.dispose(), H.material.dispose(), eQ.clear(), I.dispose(), F.dispose(), _.dispose(), z.dispose(), l.dispose(), l.getContext().isContextLost() || l.forceContextLoss(), d.remove();
        }
      };
    })(e, r, {
      caption: l,
      title: n,
      artist: o,
      deck: d,
      ruler: N
    }, {
      onActive: z,
      onPlay: D
    });
    if (!I) {
      let t = e.ownerDocument.defaultView ?? window,
        a = t.requestAnimationFrame(() => T(!0));
      return () => t.cancelAnimationFrame(a);
    }
    return F.current = I, () => {
      I.destroy(), F.current = null;
    };
  }, []);
  let W = u[_] ?? u[0];
  return <section className="relative isolate w-full overflow-hidden bg-white px-4 py-20 text-neutral-950 dark:bg-neutral-950 dark:text-white sm:px-6 lg:px-8 lg:py-24"><div className="mx-auto w-full max-w-[1400px]"><motion.div variants={N} initial={!e && "hidden"} whileInView="show" viewport={{
        once: !0,
        amount: .3
      }} className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-end"><motion.h2 variants={I} className="text-balance text-[2.5rem] font-medium leading-[1.04] tracking-[-0.04em] sm:text-5xl lg:text-6xl">Independent since 1998.</motion.h2><motion.div variants={I} className="lg:max-w-[28rem] lg:justify-self-end"><p className="text-pretty text-base leading-relaxed text-neutral-600 dark:text-neutral-400 sm:text-lg">Forty-one artists and four hundred records, every one pressed in Detroit.</p><dl className="mt-6 flex gap-10">{d.map(e => <div className="flex flex-col-reverse"><dt className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">{e.label}</dt><dd className="text-3xl font-medium tracking-[-0.03em] tabular-nums">{e.value}</dd></div>)}</dl></motion.div></motion.div><div ref={t} role="region" aria-roledescription="carousel" aria-label="Album rail. Drag, swipe or use the arrow keys to browse. Press Enter to play the focused album." tabIndex={0} className="relative -mx-4 mt-10 h-[28rem] overflow-hidden outline-none focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-solid focus-visible:outline-[color-mix(in_oklch,currentColor_35%,transparent)] sm:-mx-6 sm:h-[30rem] lg:mx-0 lg:mt-12 lg:h-[32rem]"><div ref={a} className="absolute inset-0 touch-pan-y select-none [-webkit-touch-callout:none]" />{$ ? <div className="absolute inset-[16%] grid place-items-center"><div role="img" aria-label={W.alt} className="aspect-square h-full max-w-full rounded-[14px] bg-cover bg-center" style={{
            backgroundImage: `url("${W.src}")`
          }} /></div> : null}<ul className="sr-only">{u.map((e, t) => <li aria-current={t === _ ? "true" : void 0}>{`${e.title}, ${e.artist}`}</li>)}</ul><div aria-live="polite" className="sr-only">{`${W.title}${R ? ", playing" : ""}`}</div><div ref={p} aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 flex flex-col items-center gap-1 px-4 text-center opacity-0 will-change-[transform,opacity]"><span ref={C} className="max-w-full truncate text-base leading-tight font-semibold tracking-[-0.012em]" /><span ref={S} className="max-w-full truncate text-[13px] leading-[1.4] opacity-55" /></div><div ref={A} className="pointer-events-none absolute inset-x-0 -top-[100px] flex h-[38px] items-center justify-center gap-3 px-4"><button type="button" aria-label="Previous album" onClick={() => F.current?.step(-1)} className={L}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg></button><div className="relative h-[38px] w-[min(296px,calc(100%_-_80px))] flex-[0_1_auto]"><div ref={B} role="slider" aria-label="Albums" aria-valuemin={1} aria-valuemax={u.length} aria-valuenow={_ + 1} aria-valuetext={W.title} className="pointer-events-auto absolute inset-0 cursor-ew-resize touch-none [mask-image:linear-gradient(90deg,transparent,#000_20%,#000_80%,transparent)]" /><button type="button" aria-label={R ? "Pause" : `Play ${W.title}`} aria-pressed={R} onClick={() => F.current?.setPlaying(!R)} className={`pointer-events-auto absolute top-0 left-1/2 -ml-[19px] grid size-[38px] cursor-pointer place-items-center rounded-full text-[var(--album-rail-tone,#8B5CF6)] transition-[background-color,color] duration-[420ms] ease-[ease] ${E} ${R ? "bg-[color-mix(in_oklch,var(--album-rail-tone,#8B5CF6)_34%,transparent)]" : "bg-[color-mix(in_oklch,var(--album-rail-tone,#8B5CF6)_22%,transparent)] hover:bg-[color-mix(in_oklch,var(--album-rail-tone,#8B5CF6)_30%,transparent)]"}`}><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={`${j} ${R ? "opacity-0 [transform:scale(0.6)]" : "opacity-100 [transform:scale(1)]"}`}><path d="M8 5.5v13a1 1 0 0 0 1.5.86l10.5-6.5a1 1 0 0 0 0-1.72L9.5 4.64A1 1 0 0 0 8 5.5Z" /></svg><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={`${j} ${R ? "opacity-100 [transform:scale(1)]" : "opacity-0 [transform:scale(0.6)]"}`}><rect x="6.5" y="5" width="3.6" height="14" rx="1.2" /><rect x="13.9" y="5" width="3.6" height="14" rx="1.2" /></svg></button></div><button type="button" aria-label="Next album" onClick={() => F.current?.step(1)} className={L}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg></button></div></div></div></section>;
}

export { C as About15 };
export default C;

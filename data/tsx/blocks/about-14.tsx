import { motion, AnimatePresence } from "motion/react";
import * as __mod_50969 from "../_helpers/50969";
import * as __mod_12246 from "../_helpers/12246";
import * as __mod_2253 from "../_helpers/2253";
/**
 * About 14
 * Portrait studio story where prints develop as they stream out
 * slug: about-14
 * category: About
 * export: About14
 * deps: motion, three
 * original: ts-tailwind/blocks/about/about-14.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let u = [{
    src: "/demo-media/portrait-sienna.webp",
    alt: "Studio portrait with short natural hair and a burnt-orange top",
    title: "Amara Osei",
    subtitle: "Lisbon, 2019"
  }, {
    src: "/demo-media/portrait-silver.webp",
    alt: "Studio portrait with cropped grey hair and a black shirt",
    title: "Tom\xe1s Ferreira",
    subtitle: "Lisbon, 2016"
  }, {
    src: "/demo-media/portrait-indigo.webp",
    alt: "Studio portrait with short dark hair and a cobalt jacket",
    title: "Kenji Mori",
    subtitle: "Lisbon, 2023"
  }, {
    src: "/demo-media/portrait-rose.webp",
    alt: "Studio portrait with curly red hair and burgundy clothing",
    title: "Clara Byrne",
    subtitle: "Lisbon, 2021"
  }, {
    src: "/demo-media/portrait-olive.webp",
    alt: "Studio portrait with a dark bob and an olive top",
    title: "Leila Haddad",
    subtitle: "Lisbon, 2018"
  }, {
    src: "/demo-media/portrait-pearl.webp",
    alt: "Studio portrait with long black hair and an ivory shirt",
    title: "Mei Lin",
    subtitle: "Lisbon, 2025"
  }, {
    src: "/demo-media/portrait-teal.webp",
    alt: "Studio portrait with a shaved head and a teal jacket",
    title: "Daniel Mensah",
    subtitle: "Lisbon, 2020"
  }, {
    src: "/demo-media/portrait-ochre.webp",
    alt: "Studio portrait with curly dark hair and an ochre knit",
    title: "Arjun Mehta",
    subtitle: "Lisbon, 2017"
  }],
  h = 2 * Math.PI,
  d = (e, t, a) => Math.min(a, Math.max(t, e)),
  m = (e, t, a) => {
    let r = d((a - e) / (t - e), 0, 1);
    return r * r * (3 - 2 * r);
  },
  p = (e, t) => {
    let a = Math.pow(e, .35) - .35 * t;
    return a <= 1e-6 ? 1e-4 : Math.pow(a, 2.857142857142857);
  },
  c = `
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,
  f = `
precision highp float;

uniform sampler2D uImage;
uniform float uImageAspect;
uniform vec2 uSize;
uniform float uMargin;
uniform float uRadius;
uniform float uBorder;
uniform vec3 uBorderColor;
uniform float uRim;
uniform float uReveal;
uniform float uDevelop;
uniform float uAlpha;
uniform float uShadow;
uniform float uLift;
uniform vec3 uBackground;
uniform vec2 uResolution;
uniform float uEdge;
varying vec2 vUv;

float roundBox(vec2 p, vec2 b, float r) {
  vec2 q = abs(p) - b + r;
  return length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - r;
}

void main() {
  vec2 full = uSize + 2.0 * uMargin;
  vec2 p = (vUv - 0.5) * full;
  float radius = min(uRadius, 0.5 * min(uSize.x, uSize.y));
  float d = roundBox(p, 0.5 * uSize, radius);
  float px = max(fwidth(d), 1e-4);
  float card = 1.0 - smoothstep(-0.7 * px, 0.7 * px, d);

  vec2 frag = gl_FragCoord.xy;
  float edgeDistance = min(min(frag.x, uResolution.x - frag.x), min(frag.y, uResolution.y - frag.y));
  float edge = uEdge > 0.5 ? smoothstep(0.0, uEdge, edgeDistance) : 1.0;

  float height = uSize.y;
  float sd = roundBox(p - vec2(0.0, -height * (0.03 + 0.03 * uLift)), 0.5 * uSize * 0.96, radius);
  float blur = height * (0.08 + 0.06 * uLift);
  float shade = (1.0 - smoothstep(-blur * 0.6, blur, sd)) * uShadow * (0.42 + 0.22 * uLift);

  float inner = min(uBorder, 0.45 * min(uSize.x, uSize.y));
  vec2 box = max(uSize - 2.0 * inner, vec2(1.0));
  float di = roundBox(p, 0.5 * box, max(radius - inner * 0.6, 0.0));
  float photo = 1.0 - smoothstep(-0.7 * px, 0.7 * px, di);
  float boxAspect = box.x / box.y;
  vec2 uv = p / box;
  if (boxAspect > uImageAspect) {
    uv.y *= uImageAspect / boxAspect;
  } else {
    uv.x *= boxAspect / uImageAspect;
  }
  uv += 0.5;
  vec3 image = texture2D(uImage, uv).rgb;

  float luma = dot(image, vec3(0.2126, 0.7152, 0.0722));
  float print = step(0.5, uBorder);
  vec3 ground = mix(uBackground, uBorderColor, print);
  float base = dot(ground, vec3(0.2126, 0.7152, 0.0722));
  float dark = step(base, 0.5);
  float contrast = abs(luma - base) / max(max(base, 1.0 - base), 0.25);
  float window = 0.3;
  float threshold = 1.0 - uReveal * (1.0 + window);
  float tonal = smoothstep(threshold, threshold + window, contrast);
  vec3 mono = vec3(luma);
  vec3 tinted = mix(mono, image, smoothstep(0.5, 0.95, uReveal));
  vec3 developedImage = mix(image, tinted, uDevelop);
  vec3 paper = mix(mix(uBackground, vec3(dark), 0.07), uBorderColor, print);
  float develop = mix(smoothstep(0.0, 1.0, uReveal), tonal, uDevelop);
  float paperShown = uDevelop * max(1.0 - dark, print);
  vec3 photoColor = mix(paper, developedImage, develop);
  float paperIn = mix(develop, smoothstep(0.0, 0.18, uReveal), paperShown);
  photoColor = mix(developedImage, photoColor, paperShown);

  vec3 color3 = mix(uBorderColor, photoColor, photo);
  float rimMask = card * (1.0 - smoothstep(0.0, 1.6 * px, -d));
  color3 = mix(color3, mix(vec3(1.0), vec3(0.0), 1.0 - dark), rimMask * uRim * smoothstep(0.3, 1.0, uReveal));
  float amount = mix(mix(smoothstep(0.0, 1.0, uReveal), paperIn, photo), smoothstep(0.0, 0.18, uReveal), print * uDevelop);
  float alpha = card * uAlpha * edge * amount;
  float shadowAlpha = (1.0 - card) * shade * uAlpha * edge * uReveal;
  float total = alpha + shadowAlpha * (1.0 - alpha);
  if (total < 0.002) discard;
  gl_FragColor = vec4(color3 * alpha, total);
}
`,
  v = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: .08,
        delayChildren: .1
      }
    }
  },
  x = {
    hidden: {
      opacity: 0,
      y: 14
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: .9,
        ease: [.16, 1, .3, 1]
      }
    }
  };
function About14() {
  let e = (0, __mod_50969.I)(),
    t = (0, React.useRef)(null),
    a = (0, React.useRef)(null),
    g = (0, React.useRef)(null),
    b = (0, React.useRef)(null),
    M = (0, React.useRef)(null),
    w = (0, React.useRef)(null),
    [y, k] = (0, React.useState)(-1);
  (0, React.useEffect)(() => {
    let e = t.current,
      r = a.current,
      o = g.current,
      i = b.current,
      l = M.current,
      v = w.current;
    if (!e || !r || !o || !i || !l || !v) return;
    let x = function (e, t) {
      let a,
        {
          root: r,
          stage: o,
          copy: i,
          caption: l,
          title: v,
          subtitle: x
        } = e,
        g = r.ownerDocument,
        b = g.defaultView ?? window,
        M = g.createElement("canvas");
      M.setAttribute("aria-hidden", "true"), M.style.cssText = "position:absolute;inset:0;width:100%;height:100%;display:block";
      try {
        a = new __mod_12246.WebGLRenderer({
          canvas: M,
          alpha: !0,
          antialias: !1,
          premultipliedAlpha: !0,
          powerPreference: "high-performance"
        });
      } catch {
        return null;
      }
      o.appendChild(M), a.setClearColor(0, 0);
      let w = b.matchMedia("(prefers-reduced-motion: reduce)"),
        y = b.matchMedia("(prefers-color-scheme: dark)"),
        k = g.createElement("canvas");
      k.width = 1, k.height = 1;
      let _ = k.getContext("2d", {
          willReadFrequently: !0
        }),
        E = new __mod_2253.Z58(),
        L = new __mod_2253.qUd(-1, 1, 1, -1, -10, 10),
        R = new __mod_2253.bdM(1, 1),
        C = new __mod_2253.GYF(new Uint8Array([128, 128, 128, 255]), 1, 1);
      C.needsUpdate = !0;
      let A = new __mod_2253.I9Y(1, 1),
        I = new __mod_2253.Q1f().setRGB(1, 1, 1, __mod_2253.jf0),
        S = new __mod_2253.Q1f().setHex(0xf5f3ef, __mod_2253.jf0),
        j = Math.min(8, a.capabilities.getMaxAnisotropy()),
        B = Array.from({
          length: 24
        }, () => {
          let e = new __mod_2253.BKk({
              uniforms: {
                uImage: {
                  value: C
                },
                uImageAspect: {
                  value: .8
                },
                uSize: {
                  value: new __mod_2253.I9Y(100, 125)
                },
                uMargin: {
                  value: 20
                },
                uRadius: {
                  value: 6
                },
                uBorder: {
                  value: 0
                },
                uBorderColor: {
                  value: S
                },
                uRim: {
                  value: .1
                },
                uReveal: {
                  value: 0
                },
                uDevelop: {
                  value: .9
                },
                uAlpha: {
                  value: 0
                },
                uShadow: {
                  value: .6
                },
                uLift: {
                  value: 0
                },
                uBackground: {
                  value: I
                },
                uResolution: {
                  value: A
                },
                uEdge: {
                  value: 0
                }
              },
              vertexShader: c,
              fragmentShader: f,
              transparent: !0,
              premultipliedAlpha: !0,
              depthTest: !1,
              depthWrite: !1
            }),
            t = new __mod_2253.eaF(R, e);
          return t.frustumCulled = !1, t.visible = !1, E.add(t), {
            mesh: t,
            w: 1,
            rho0: .2,
            dev: .3,
            theta: 0,
            scale: 1,
            roll: 0,
            image: 0,
            grip: 0,
            x: 0,
            y: 0,
            sw: 0,
            sh: 0,
            rot: 0,
            alpha: 0,
            reveal: 0,
            shown: !1
          };
        }),
        N = {
          left: -160,
          right: 160,
          top: -100,
          bottom: 100
        },
        D = [],
        P = 0,
        F = 0,
        z = 1,
        O = !1,
        $ = !1,
        U = 6,
        q = w.matches,
        H = !1,
        T = "",
        W = 0,
        Y = 0,
        G = 0,
        V = 0,
        X = 0,
        K = !1,
        Q = 0,
        Z = 0,
        J = -1,
        ee = -1,
        et = 0,
        ea = 0,
        er = 0,
        eo = -1,
        ei = -1,
        en = 1,
        es = 0,
        eu = 0,
        eh = !1,
        ed = !1,
        em = !1,
        ep = !1,
        ec = 0,
        ef = [],
        ev = null,
        ex = 0x100000000 * Math.random() | 0,
        eg = () => {
          let e = Math.imul((ex = ex + 0x6d2b79f5 | 0) ^ ex >>> 15, 1 | ex);
          return (((e = e + Math.imul(e ^ e >>> 7, 61 | e) ^ e) ^ e >>> 14) >>> 0) / 0x100000000;
        },
        eb = () => Math.hypot(P, F) / 2,
        eM = () => {
          ed || em || !eh || es || (es = b.requestAnimationFrame(eF));
        },
        ew = () => {
          for (let e of (D.forEach(e => {
            e.image.onload = null, e.texture.dispose();
          }), D = u.map(e => {
            let t = g.createElement("img");
            t.crossOrigin = "anonymous", t.decoding = "async";
            let a = new __mod_2253.gPd(t);
            a.colorSpace = __mod_2253.jf0, a.minFilter = __mod_2253.$_I, a.magFilter = __mod_2253.k6q, a.generateMipmaps = !0, a.anisotropy = j;
            let r = {
              image: t,
              texture: a,
              aspect: .8,
              ready: !1,
              uploaded: !1,
              fade: 0,
              used: -1
            };
            return t.onload = () => {
              if (ed) return;
              let e = () => {
                ed || r.ready || (r.aspect = t.naturalWidth / Math.max(t.naturalHeight, 1), r.ready = !0, a.needsUpdate = !0, eM());
              };
              t.decode().then(e, e);
            }, t.src = e.src, r;
          }), B)) e.image = Math.floor(eg() * D.length);
          ee = -1, et = 0, ea = 0;
        },
        ey = () => {
          let e = Math.max(0, Math.min(N.right, P / 2) - Math.max(N.left, -P / 2)),
            t = Math.max(0, Math.min(N.bottom, F / 2) - Math.max(N.top, -F / 2));
          U = d(Math.round(14 * Math.sqrt(Math.max(P * F - e * t, 0) / 1e6)), 6, 24);
        },
        ek = () => {
          if (!P || !F) return !1;
          let e = 0,
            t = 0,
            a = i;
          for (; a && a !== r;) e += a.offsetLeft, t += a.offsetTop, a = a.offsetParent;
          if (i !== r) {
            let a = r.getBoundingClientRect(),
              o = i.getBoundingClientRect();
            e = (o.left - a.left) * (a.width > 0 ? P / a.width : 1), t = (o.top - a.top) * (a.height > 0 ? F / a.height : 1);
          }
          let o = i.offsetWidth,
            l = i.offsetHeight,
            n = .15 * Math.min(P, F),
            s = o > 0 && l > 0 ? {
              left: e - P / 2 - 24,
              right: e + o - P / 2 + 24,
              top: t - F / 2 - 24,
              bottom: t + l - F / 2 + 24
            } : {
              left: -n,
              right: n,
              top: -n,
              bottom: n
            };
          return !(.5 > Math.abs(s.left - N.left) && .5 > Math.abs(s.right - N.right) && .5 > Math.abs(s.top - N.top) && .5 > Math.abs(s.bottom - N.bottom)) && (N.left = s.left, N.right = s.right, N.top = s.top, N.bottom = s.bottom, ey(), !0);
        },
        e_ = () => {
          let e = Math.round(r.clientWidth),
            t = Math.round(r.clientHeight);
          if (e < 2 || t < 2) return O = !1, !1;
          let o = Math.min(b.devicePixelRatio || 1, 2);
          return (!O || e !== P || t !== F || o !== z) && (O = !0, P = e, F = t, z = o, a.setPixelRatio(z), a.setSize(P, F, !1), A.set(P * z, F * z), L.left = -P / 2, L.right = P / 2, L.top = F / 2, L.bottom = -F / 2, L.updateProjectionMatrix(), ek(), ey(), !0);
        },
        eE = e => _ && e ? (_.clearRect(0, 0, 1, 1), _.fillStyle = "rgba(0, 0, 0, 0)", _.fillStyle = e, _.fillRect(0, 0, 1, 1), _.getImageData(0, 0, 1, 1).data) : null,
        eL = () => {
          let e = null,
            t = r;
          for (; t;) {
            let a = eE(b.getComputedStyle(t).backgroundColor);
            if (a && a[3] > 0) {
              e = a;
              break;
            }
            t = t.parentElement;
          }
          let a = 255,
            o = 255,
            i = 255;
          if (e) a = e[0], o = e[1], i = e[2];else {
            let e = eE(b.getComputedStyle(r).color);
            e && e[0] + e[1] + e[2] > 382 && (a = 10, o = 10, i = 10);
          }
          let l = `${a},${o},${i}`;
          return l !== T && (T = l, I.setRGB(a / 255, o / 255, i / 255, __mod_2253.jf0), !0);
        },
        eR = e => {
          let t = Math.abs(Math.cos(e)),
            a = Math.abs(Math.sin(e));
          return Math.min(t > 1e-4 ? P / 2 / t : 1 / 0, a > 1e-4 ? F / 2 / a : 1 / 0);
        },
        eC = (e, t) => {
          let a = eb(),
            r = a - .22 * Math.min(P, F) * e.scale * Math.hypot(.8, 1) * 1.05;
          return r > .08 * a ? eR(t) / r : 1.6;
        },
        eA = (e, t, a) => {
          let r = .22 * Math.min(P, F) * e / Math.max(eb(), 1),
            o = 5 * Math.PI / 180 * Math.abs(t),
            i = Math.cos(o),
            l = Math.sin(o),
            n = r * (.8 * i + l),
            s = r * (.8 * l + i),
            u = Math.cos(a),
            h = Math.sin(a),
            d = 1 / 0;
          return u - n > .001 && (d = Math.min(d, Math.max(N.right, 0) / (u - n))), u + n < -.001 && (d = Math.min(d, Math.min(N.left, 0) / (u + n))), h - s > .001 && (d = Math.min(d, Math.max(N.bottom, 0) / (h - s))), h + s < -.001 && (d = Math.min(d, Math.min(N.top, 0) / (h + s))), d;
        },
        eI = (e, t, a = 1) => {
          e.scale = 1 + .2 * (2 * eg() - 1), e.roll = 2 * eg() - 1;
          let r = ((e, t) => {
              let a = eg() * h,
                r = -1 / 0;
              for (let o = 0; o < 16; o++) {
                let o = eg() * h,
                  i = eR(o) / Math.max(eA(e.scale, e.roll, o), 1);
                for (let e = 0; e < U; e++) {
                  let a = B[e];
                  if (!a.shown) continue;
                  let r = Math.abs(Math.log(Math.max(a.w, 1e-4) / Math.max(t, 1e-4)));
                  r > .9 || (l = Math.min(h, Math.abs(Math.atan2(Math.sin(o - a.theta - W), Math.cos(o - a.theta - W))) + .9 * r));
                }
                let n = i >= 1.35 ? h : i - 2 * h;
                n > r && (r = n, a = o);
              }
              return a;
            })(e, a),
            o = Math.max(eb(), 1),
            i = eA(e.scale, e.roll, r),
            l = eR(r),
            n = Number.isFinite(i) ? l / Math.max(i, 1) : 0,
            s = Math.min(1 + .45 * eg(), Math.max(1, n / 1.35)),
            u = Number.isFinite(i) ? Math.max(i * s, .04 * o) : 1.2 * l;
          if (e.theta = r - W, e.rho0 = u / o, e.dev = Math.max(1.12 * e.rho0, Math.min(1.5 * e.rho0, (u + .4 * Math.max(l - u, 0)) / o)), e.image = (() => {
            let e = D.length;
            if (!e) return 0;
            let t = new Uint8Array(e);
            for (let a = 0; a < U; a++) {
              let r = B[a];
              r.shown && r.image < e && (t[r.image] += 1);
            }
            let a = 0,
              r = 1 / 0;
            for (let o = 0; o < e; o++) {
              let e = D[o],
                i = 1e3 * t[o] + e.used + .5 * eg() + 500 * !e.ready;
              i < r && (r = i, a = o);
            }
            return D[a].used = ec, a;
          })(), e.grip = 0, e.alpha = 0, t) {
            let t = eC(e, r);
            e.w = d(e.rho0 / t, .001, .999);
          } else e.w = 1;
        },
        eS = (e, t) => {
          let a = eb(),
            r = (P + F) / 4 / Math.max(.9 * a, 1),
            o = (1 - Math.pow(d(1.22 * (() => {
              let e = 0,
                t = 0;
              for (let a = 0; a < 4; a++) {
                let r = eA(1, 0, Math.PI / 4 + a * Math.PI / 2);
                Number.isFinite(r) && (e += r, t += 1);
              }
              return t ? d(e / t / Math.max(eb(), 1), .05, .9) : .3;
            })() / Math.max(r, .05), .05, .95), .35)) / .35;
          e.shown = !1, eI(e, !1, p(1, o * t));
          let i = eC(e, e.theta + W),
            l = (1 - Math.pow(d(e.rho0 / i, .001, 1), .35)) / .35;
          e.w = p(1, l * t), e.shown = !0;
        },
        ej = e => {
          ee = e, et = 1, B[e].grip = 1, t.onOpen(B[e].image), eM();
        },
        eB = () => {
          ee < 0 || 0 === et || (et = 0, t.onClose(), eM());
        },
        eN = e => {
          V += d(e, -4, 4), eM();
        },
        eD = e => {
          let t = Math.abs(Math.cos(e.rot)),
            a = Math.abs(Math.sin(e.rot)),
            r = (e.sw * t + e.sh * a) / 2,
            o = (e.sw * a + e.sh * t) / 2,
            i = e.x - P / 2,
            l = e.y - F / 2;
          return 1 - m(0, 32, Math.min(Math.min(i + r, N.right) - Math.max(i - r, N.left), Math.min(l + o, N.bottom) - Math.max(l - o, N.top)));
        },
        eP = (e, t) => {
          for (let a = ef.length - 1; a >= 0; a--) {
            let r = ef[a];
            if (!r.mesh.visible || r.alpha < .3 || r.reveal < .45) continue;
            let o = e - r.x,
              i = t - r.y,
              l = Math.cos(-r.rot),
              n = Math.sin(-r.rot),
              s = o * l - i * n,
              u = o * n + i * l,
              h = 6 * r.grip;
            if (Math.abs(s) <= r.sw / 2 + h && Math.abs(u) <= r.sh / 2 + h) return B.indexOf(r);
          }
          return -1;
        };
      function eF(e) {
        let r, n, s, d, c;
        if (es = 0, ed || em || !O && (e_(), !O)) return;
        let f = eu && e - eu < 100 ? Math.min(Math.max((e - eu) / 1e3, 0), .05) : 1 / 60;
        eu = e;
        let g = !1;
        for (let e of (Math.floor((ec += f) / 1.2) !== Math.floor((ec - f) / 1.2) && eL(), e_(), $ || (() => {
          for (let e = 0; e < 24; e++) B[e].shown = !1;
          for (let t = 0; t < U; t++) {
            let a = (t + .85 * eg()) / U;
            eS(B[t], q ? .12 + .76 * a : a);
          }
          $ = !0;
        })(), (() => {
          let e = null,
            t = 1 / 0;
          for (let a of B) {
            if (!a.shown) continue;
            let r = D[a.image];
            r && r.ready && !r.uploaded && a.w < t && (t = a.w, e = r);
          }
          if (!e) {
            for (let t of D) if (t.ready && !t.uploaded) {
              e = t;
              break;
            }
          }
          return !!e && (a.initTexture(e.texture), e.uploaded = !0, !0);
        })() && (g = !0), D)) e.uploaded && e.fade < 1 && (e.fade = q ? 1 : Math.min(1, e.fade + f / .6), g = !0);
        for (; U < 24; U++) B[U].shown && (B[U].shown = !1, B[U].mesh.visible = !1);
        ee >= U && (ee = -1, et = 0, ea = 0, er = 0, t.onClose());
        for (let e = 0; e < U; e++) B[e].shown || eS(B[e], q ? .12 + .76 * eg() : .3 * eg());
        let M = K && !ev ? 1 : 0;
        X += (M - X) * (1 - Math.exp(-f / (M > X ? .35 : .6)));
        let w = H || q ? 0 : .07,
          y = 1 - .6 * X;
        [ea, er] = ((e, t, a, r, o, i) => {
          let l = h / Math.max(o, .02),
            n = Math.max(1, Math.ceil(r / (1 / 240))),
            s = r / n;
          for (let e = 0; e < n; e++) u += (l * l * (a - e) - 1.76 * l * t) * s, d += t * s;
          return [e, t];
        })(ea, er, et, f, q ? .06 : .62, 0), Math.abs(ea - et) > 1e-4 || Math.abs(er) > 1e-4 ? g = !0 : (ea = et, er = 0, 0 === et && ee >= 0 && (ee = -1));
        let k = 1 - .9 * ea,
          _ = V * (1 - Math.exp(-f / (q ? .04 : .18)));
        1e-5 > Math.abs(V -= _) ? V = 0 : g = !0, ev && ev.moved || (G *= Math.exp(-f / (q ? .05 : .7)), Y *= Math.exp(-f / (q ? .05 : 1.1))), 1e-4 > Math.abs(G) && (G = 0), 1e-4 > Math.abs(Y) && (Y = 0), (G || Y) && (g = !0), ev && ev.moved || (W += Y * f);
        let R = w * y * k,
          A = _ + (ev && ev.moved ? 0 : G * f);
        0 !== R && (g = !0);
        let I = eb(),
          S = Math.min(P, F),
          j = .44 * S,
          N = 5 * Math.PI / 180,
          T = Math.max(P, F);
        for (let e = 0; e < U; e++) {
          let t = B[e],
            a = e === ee,
            r = a || e === J ? 1 : 0;
          if (t.grip += (r - t.grip) * (1 - Math.exp(-f / (r > t.grip ? .16 : .5))), .001 > Math.abs(t.grip - r) ? t.grip = r : g = !0, !a) {
            let e = R * (1 - t.grip) * f + A * (1 - .85 * t.grip);
            0 !== e && (t.w = p(t.w, e));
          }
          let o = t.rho0 / t.w,
            i = t.theta + W + .25 * Math.log(Math.max(o / t.rho0, 1e-4)),
            l = j * o * t.scale;
          t.sh = l, t.sw = .8 * l, t.x = P / 2 + Math.cos(i) * o * I, t.y = F / 2 + Math.sin(i) * o * I, t.rot = N * t.roll;
          let n = eC(t, i);
          if (!a && o > n && t.grip < .5) {
            eI(t, !1);
            continue;
          }
          if (!a && t.w > 1.0001) {
            eI(t, !0);
            continue;
          }
          let s = D[t.image],
            u = q ? 1 : m(t.rho0, t.dev, o);
          t.reveal = Math.max(u, t.grip);
          let h = 1 - m(.7 * T, 1.05 * T, t.sh);
          t.alpha = (s ? s.fade : 0) * h * eD(t);
        }
        ef = B.slice(0, U).sort((e, t) => t.w - e.w), K && !ev && function () {
          if (et > 0) {
            J = -1, "pointer" !== o.style.cursor && (o.style.cursor = "pointer");
            return;
          }
          let e = eP(Q, Z);
          J = e;
          let t = e >= 0 ? "pointer" : "grab";
          o.style.cursor !== t && (o.style.cursor = t);
        }();
        let eh = ee >= 0 ? B[ee] : null,
          ep = eh ? (n = (r = D[eh.image]) ? r.aspect : .8, (s = .74 * Math.max(F - 64, .6 * F)) * n > .86 * P && (s = .86 * P / n), {
            x: P / 2,
            y: (F - 64) / 2 + 6,
            w: s * n,
            h: s,
            aspect: n
          }) : null,
          ew = .45 * S * .22 * z;
        for (let e = 0; e < ef.length; e++) {
          let t = ef[e],
            a = t.mesh,
            r = t === eh,
            o = t.x,
            i = t.y,
            l = t.sw,
            n = t.sh,
            s = t.rot,
            u = t.alpha * (r ? 1 : 1 - .72 * ea),
            h = t.reveal,
            d = t.grip,
            m = 6 * Math.min(1, t.sh / Math.max(.5 * j, 1)),
            p = D[t.image]?.aspect ?? .8;
          r && ep && (o += (ep.x - o) * ea, i += (ep.y - i) * ea, l += (ep.w - l) * ea, n += (ep.h - n) * ea, s *= 1 - ea, u = Math.max(u, ea), h = 1, d = 1, m += (10 - m) * ea, p = ep.aspect);
          let c = u > .003 && l > .5;
          if (a.visible = c, !c) continue;
          let f = 1 + .05 * t.grip * (1 - (r ? ea : 0));
          l *= f;
          let v = Math.max(8, .22 * (n *= f));
          a.position.set(o - P / 2, F / 2 - i, 0), a.rotation.set(0, 0, -s), a.scale.set(l + 2 * v, n + 2 * v, 1), a.renderOrder = r ? 1e4 : e;
          let x = a.material.uniforms,
            g = D[t.image];
          x.uImage.value = g?.uploaded ? g.texture : C, x.uImageAspect.value = p, x.uSize.value.set(l, n), x.uMargin.value = v, x.uRadius.value = m, x.uBorder.value = .055 * Math.min(l, n), x.uRim.value = .1 * (.6 + .4 * d), x.uReveal.value = h, x.uDevelop.value = .9, x.uAlpha.value = u, x.uShadow.value = .6, x.uLift.value = d, x.uEdge.value = r ? ew * (1 - ea) : ew;
        }
        !function (e, t, a) {
          if (!e || !t) {
            0 !== ei && (ei = 0, l.style.opacity = "0");
            return;
          }
          if (e.image !== eo) {
            eo = e.image;
            let t = u[e.image];
            v.textContent = t ? t.title : "", x.textContent = t ? t.subtitle : "";
          }
          let r = t.y + t.h / 2 + 22;
          (Number.isNaN(NaN) || Math.abs(r - NaN) > .25) && (el = r, l.style.top = `${r.toFixed(2)}px`);
          let o = m(.55, 1, a);
          Math.abs(o - ei) > .002 && (ei = o, l.style.opacity = o.toFixed(3), l.style.transform = `translate3d(0, ${((1 - o) * 8).toFixed(2)}px, 0)`);
        }(eh, ep, ea), (d = 1 - m(.02, .5, ea)) !== en && (Math.abs(d - en) > .002 || 0 === d || 1 === d) && (en = d, i.style.opacity = d >= 1 ? "" : d.toFixed(3), i.style.visibility = d <= 0 ? "hidden" : ""), c = et > 0 ? "none" : "", i.style.pointerEvents !== c && (i.style.pointerEvents = c), a.render(E, L), (g || ev || 0 !== R) && eM();
      }
      let ez = e => {
          let t = r.getBoundingClientRect(),
            a = t.width > 0 ? r.clientWidth / t.width : 1,
            o = t.height > 0 ? r.clientHeight / t.height : 1;
          return {
            x: (e.clientX - t.left) * a,
            y: (e.clientY - t.top) * o
          };
        },
        eO = e => {
          let t = e.target;
          return null !== t && i.contains(t);
        },
        e$ = (e, t) => {
          try {
            t ? o.setPointerCapture(e) : o.hasPointerCapture(e) && o.releasePointerCapture(e);
          } catch {
            return;
          }
        },
        eU = e => {
          let t = ez(e);
          if ("touch" !== e.pointerType && (K = !0, Q = t.x, Z = t.y), ev && ev.id === e.pointerId) {
            let a = t.x - P / 2,
              r = t.y - F / 2,
              i = Math.max(Math.hypot(a, r), .08 * Math.min(P, F)),
              l = Math.atan2(r, a);
            if (!ev.moved && Math.hypot(e.clientX - ev.x, e.clientY - ev.y) > 6 && (ev.moved = !0, J = -1, o.style.cursor = "grabbing", G = 0, Y = 0, e$(e.pointerId, !0)), ev.moved) {
              let e = d(Math.log(i / ev.radius), -.3, .3),
                t = Math.atan2(Math.sin(l - ev.angle), Math.cos(l - ev.angle));
              for (let t = 0; t < U; t++) t !== ee && (B[t].w = p(B[t].w, e));
              W += t, ev.radius = i, ev.angle = l;
              let a = b.performance.now();
              for (ev.samples.push({
                t: a,
                zoom: e,
                angle: t
              }); ev.samples.length > 2 && a - ev.samples[0].t > 110;) ev.samples.shift();
            }
          }
          eM();
        },
        eq = e => {
          if (!e.isPrimary || e.button > 0 || (ep = !1, eO(e))) return;
          let t = ez(e),
            a = t.x - P / 2,
            r = t.y - F / 2;
          ev = {
            id: e.pointerId,
            x: e.clientX,
            y: e.clientY,
            moved: !1,
            radius: Math.max(Math.hypot(a, r), .08 * Math.min(P, F)),
            angle: Math.atan2(r, a),
            samples: []
          }, eM();
        },
        eH = e => {
          if (!ev || ev.id !== e.pointerId) return;
          if (ev = null, e$(e.pointerId, !1), ev.moved) {
            ep = !0;
            let e = b.performance.now(),
              a = ev.samples.filter(t => e - t.t < 110);
            if (a.length && e - a[a.length - 1].t < 60 && !q) {
              let t = Math.max((e - a[0].t) / 1e3, 1 / 60),
                r = a.reduce((e, t) => e + t.zoom, 0),
                o = a.reduce((e, t) => e + t.angle, 0);
              G = d(r / t, -3, 3), Y = d(o / t, -4, 4);
            }
            o.style.cursor = "grab";
          }
          eM();
        },
        eT = e => {
          if (eO(e)) return;
          if (ep) {
            ep = !1;
            return;
          }
          if (et > 0) return void eB();
          let t = ez(e),
            a = eP(t.x, t.y);
          a >= 0 && ej(a);
        },
        eW = e => {
          ev && ev.id === e.pointerId || (K = !1, J = -1, o.style.cursor = "", eM());
        },
        eY = e => {
          e.target === o && ("ArrowUp" === e.key || "ArrowRight" === e.key ? (e.preventDefault(), eN(.32)) : "ArrowDown" === e.key || "ArrowLeft" === e.key ? (e.preventDefault(), eN(-.32)) : "Enter" === e.key ? (e.preventDefault(), et > 0 ? eB() : (() => {
            let e = -1,
              t = -1 / 0;
            for (let a = 0; a < U; a++) {
              let r = B[a];
              if (!r.shown || r.alpha < .3) continue;
              let o = r.sh - .2 * Math.hypot(r.x - P / 2, r.y - F / 2);
              o > t && (t = o, e = a);
            }
            e >= 0 && ej(e);
          })()) : "Escape" === e.key && et > 0 ? (e.preventDefault(), eB()) : " " === e.key && (e.preventDefault(), H = !H, eu = 0, eM()));
        };
      r.addEventListener("pointerdown", eq), r.addEventListener("pointermove", eU), r.addEventListener("pointerup", eH), r.addEventListener("pointercancel", eH), r.addEventListener("pointerleave", eW), r.addEventListener("click", eT), o.addEventListener("keydown", eY);
      let eG = new b.ResizeObserver(() => {
        let e = e_(),
          t = ek();
        (e || t) && eM();
      });
      eG.observe(r), eG.observe(i);
      let eV = new b.IntersectionObserver(([e]) => {
        (eh = e.isIntersecting) ? (eu = 0, eM()) : es && (b.cancelAnimationFrame(es), es = 0);
      }, {
        rootMargin: "80px"
      });
      eV.observe(r);
      let eX = () => {
          eL() && eM();
        },
        eK = new b.MutationObserver(eX);
      eK.observe(g.documentElement, {
        attributes: !0,
        attributeFilter: ["class", "style", "data-theme"]
      }), y.addEventListener("change", eX);
      let eQ = () => {
        q = w.matches, eu = 0, eM();
      };
      w.addEventListener("change", eQ);
      let eZ = () => {
        !ed && ek() && eM();
      };
      g.fonts?.addEventListener("loadingdone", eZ), g.fonts?.ready.then(eZ, () => void 0);
      let eJ = e => {
          e.preventDefault(), em = !0, es && b.cancelAnimationFrame(es), es = 0;
        },
        e0 = () => {
          em = !1, ew(), eM();
        };
      return M.addEventListener("webglcontextlost", eJ), M.addEventListener("webglcontextrestored", e0), e_(), ek(), eL(), B[0].mesh.visible = !0, a.compile(E, L), B[0].mesh.visible = !1, ew(), eM(), () => {
        ed = !0, es && b.cancelAnimationFrame(es), es = 0, eV.disconnect(), eG.disconnect(), eK.disconnect(), y.removeEventListener("change", eX), w.removeEventListener("change", eQ), g.fonts?.removeEventListener("loadingdone", eZ), r.removeEventListener("pointerdown", eq), r.removeEventListener("pointermove", eU), r.removeEventListener("pointerup", eH), r.removeEventListener("pointercancel", eH), r.removeEventListener("pointerleave", eW), r.removeEventListener("click", eT), o.removeEventListener("keydown", eY), o.style.cursor = "", i.style.opacity = "", i.style.visibility = "", i.style.pointerEvents = "", l.style.opacity = "0", M.removeEventListener("webglcontextlost", eJ), M.removeEventListener("webglcontextrestored", e0), D.forEach(e => {
          e.image.onload = null, e.texture.dispose();
        }), B.forEach(e => e.mesh.material.dispose()), C.dispose(), R.dispose(), a.dispose(), a.getContext().isContextLost() || a.forceContextLoss(), M.remove();
      };
    }({
      root: e,
      stage: r,
      copy: o,
      caption: i,
      title: l,
      subtitle: v
    }, {
      onOpen: k,
      onClose: () => k(-1)
    });
    return () => x?.();
  }, []);
  let _ = y >= 0 ? u[y] : null;
  return <section ref={t} className="relative isolate h-[44rem] w-full overflow-hidden bg-white text-neutral-950 dark:bg-neutral-950 dark:text-white lg:h-[52rem]"><div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center px-4 sm:px-6 lg:px-8"><div className="mx-auto flex w-full max-w-[1400px] justify-center"><div ref={g} className="pointer-events-auto w-full max-w-[34rem] text-center"><motion.div variants={v} initial={!e && "hidden"} whileInView="show" viewport={{
            once: !0,
            amount: .3
          }}><motion.h2 variants={x} className="text-balance text-[2.5rem] font-medium leading-[1.04] tracking-[-0.04em] [text-shadow:0_0_28px_rgb(255_255_255),0_0_12px_rgb(255_255_255)] sm:text-5xl lg:text-6xl dark:[text-shadow:0_0_28px_rgb(10_10_10),0_0_12px_rgb(10_10_10)]">Portraits, printed by hand since 1979.</motion.h2><motion.p variants={x} className="mx-auto mt-5 max-w-[30ch] text-pretty text-base leading-relaxed text-neutral-600 [text-shadow:0_0_28px_rgb(255_255_255),0_0_12px_rgb(255_255_255)] sm:text-lg dark:text-neutral-400 dark:[text-shadow:0_0_28px_rgb(10_10_10),0_0_12px_rgb(10_10_10)]">One camera, one darkroom in Lisbon and forty years of faces.</motion.p><motion.button variants={x} type="button" className="mt-8 inline-flex h-11 cursor-pointer items-center rounded-full bg-neutral-950 px-6 text-sm font-medium text-white transition-colors hover:bg-neutral-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950 dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200 dark:focus-visible:outline-white">Book a sitting</motion.button></motion.div></div></div></div><div ref={a} role="region" aria-roledescription="gallery" aria-label="Contact sheet of studio portraits. Click a print or press Enter to open it, Escape closes it, Space pauses the stream and the arrow keys move through it." tabIndex={0} className="absolute inset-0 touch-pan-y touch-pinch-zoom select-none [-webkit-touch-callout:none] focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-neutral-500"><ul className="sr-only">{u.map(e => <li>{`${e.title}, ${e.subtitle}. ${e.alt}`}</li>)}</ul></div><div ref={b} aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 z-20 flex flex-col items-center gap-1 px-4 text-center opacity-0 will-change-[transform,opacity]"><span ref={M} className="max-w-full truncate text-base font-semibold leading-tight tracking-[-0.012em]" /><span ref={w} className="max-w-full truncate text-[13px] leading-[1.4] text-neutral-500 dark:text-neutral-400" /></div><div aria-live="polite" className="sr-only">{_ ? `Opened ${_.title}, ${_.subtitle}` : ""}</div></section>;
}

export default About14;

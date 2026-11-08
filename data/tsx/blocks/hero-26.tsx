import { motion, AnimatePresence } from "motion/react";
import * as React from "react";
import * as __mod_50969 from "../_helpers/50969";
import * as __mod_12246 from "../_helpers/12246";
import * as __mod_2253 from "../_helpers/2253";
/**
 * Hero 26
 * Split hero with a deploy pulse spreading across a network globe
 * slug: hero-26
 * category: Hero Section
 * export: Hero26
 * deps: lucide-react, motion, three
 * original: ts-tailwind/blocks/hero/hero-26.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import { ArrowRight } from "lucide-react";

let c = [{
    name: "San Francisco",
    lat: 37.77,
    lon: -122.42
  }, {
    name: "Virginia",
    lat: 39.04,
    lon: -77.49
  }, {
    name: "S\xe3o Paulo",
    lat: -23.55,
    lon: -46.63
  }, {
    name: "London",
    lat: 51.51,
    lon: -.13
  }, {
    name: "Johannesburg",
    lat: -26.2,
    lon: 28.05
  }, {
    name: "Mumbai",
    lat: 19.08,
    lon: 72.88
  }, {
    name: "Singapore",
    lat: 1.35,
    lon: 103.82
  }, {
    name: "Tokyo",
    lat: 35.68,
    lon: 139.69
  }, {
    name: "Sydney",
    lat: -33.87,
    lon: 151.21
  }],
  d = (e, t, a) => Math.min(a, Math.max(t, e)),
  f = (e, t, a) => {
    let r = d((a - e) / (t - e), 0, 1);
    return r * r * (3 - 2 * r);
  },
  h = (e, t, a) => {
    let r = Math.hypot(e, t, a) || 1;
    return [e / r, t / r, a / r];
  },
  p = (e, t) => {
    let a = e * Math.PI / 180,
      r = t * Math.PI / 180;
    return [Math.cos(a) * Math.sin(r), Math.sin(a), Math.cos(a) * Math.cos(r)];
  },
  m = e => {
    let t = 2 * e() - 1,
      a = e() * Math.PI * 2,
      r = Math.sqrt(1 - t * t);
    return [r * Math.cos(a), r * Math.sin(a), t];
  },
  v = (e, t, a) => {
    let r = () => Math.sqrt(-2 * Math.log(Math.max(a(), 1e-6))) * Math.cos(2 * Math.PI * a());
    return h(e[0] + r() * t, e[1] + r() * t, e[2] + r() * t);
  },
  g = (e, t, a) => {
    let r = Math.acos(d(e[0] * t[0] + e[1] * t[1] + e[2] * t[2], -1, 1));
    if (r < 1e-4) return e.slice();
    let n = Math.sin(r),
      o = Math.sin((1 - a) * r) / n,
      l = Math.sin(a * r) / n;
    return h(e[0] * o + t[0] * l, e[1] * o + t[1] * l, e[2] * o + t[2] * l);
  },
  x = `
uniform float uClock;
uniform float uDepthFade;
uniform vec4 uPulseTime;
uniform vec3 uPulseOrigin[4];

float pulseGlow(vec3 direction) {
  float glow = 0.0;
  for (int k = 0; k < 4; k++) {
    float age = uClock - uPulseTime[k];
    if (age < 0.0 || age > 12.0) continue;
    float travelled = acos(clamp(dot(direction, uPulseOrigin[k]), -1.0, 1.0));
    float front = age * 0.95 - travelled;
    glow += exp(-front * front * 60.0) * exp(-age * 0.38) + smoothstep(0.0, 0.3, front) * exp(-age * 0.42) * 0.24;
  }
  return glow;
}
`,
  y = `
${x}
uniform float uTime;
uniform float uWorldRadius;
uniform vec2 uPointer;
uniform float uHover;
uniform float uAspect;

void shellLight(vec4 mv, out vec4 clip, out float depthLight, out float hover, out float front) {
  vec4 center = modelViewMatrix * vec4(0.0, 0.0, 0.0, 1.0);
  float facing = clamp((mv.z - center.z) / max(uWorldRadius, 1e-4), -1.0, 1.0);
  front = smoothstep(-0.6, 0.6, facing);
  float rim = 1.0 - abs(facing);
  depthLight = mix(1.0 - uDepthFade, 1.0, front) * (1.0 + rim * rim * 0.45);
  clip = projectionMatrix * mv;
  vec2 delta = (clip.xy / clip.w - uPointer) * vec2(uAspect, 1.0);
  hover = exp(-dot(delta, delta) / 0.04) * uHover * front;
}
`,
  w = `
${y}
attribute float aDegree;
attribute float aSeed;
uniform float uPixelRatio;
uniform float uIntro;
varying float vBright;
varying float vHeat;

void main() {
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  vec4 clip;
  float depthLight;
  float hover;
  float front;
  shellLight(mv, clip, depthLight, hover, front);
  float pulse = pulseGlow(normalize(position)) * mix(1.0 - uDepthFade * 0.8, 1.0, front);
  float hub = min(aDegree / 6.0, 1.0);
  float twinkle = 0.78 + 0.22 * sin(uTime * (0.5 + aSeed * 1.3) + aSeed * 40.0);
  vHeat = clamp(hover * 0.9 + pulse, 0.0, 1.0);
  vBright = (depthLight * (0.5 + 0.5 * hub) * twinkle + hover * 1.1 + pulse * 1.3) * uIntro;
  gl_Position = clip;
  vec4 center = modelViewMatrix * vec4(0.0, 0.0, 0.0, 1.0);
  gl_PointSize = 2.6 * uPixelRatio * (center.z / min(mv.z, -1e-3)) * (0.65 + 0.7 * hub) * (1.0 + vHeat * 0.7);
}
`,
  b = `
precision highp float;
uniform vec3 uBase;
uniform vec3 uHot;
uniform float uInk;
varying float vBright;
varying float vHeat;

void main() {
  float r = length(gl_PointCoord - 0.5) * 2.0;
  float amount = (1.0 - smoothstep(0.35, 1.0, r)) * vBright;
  if (amount < 0.003) discard;
  vec3 color = mix(uBase, uHot, clamp(vHeat + 0.25, 0.0, 1.0));
  float alpha = clamp(amount * (uInk > 0.5 ? 0.9 : 1.0), 0.0, 1.0);
  gl_FragColor = uInk > 0.5 ? vec4(color * alpha, alpha) : vec4(color * amount, alpha);
}
`,
  M = `
${y}
attribute float aLength;
uniform float uIntro;
varying float vBright;
varying float vHover;
varying float vFront;
varying float vSpan;
varying vec3 vDirection;

void main() {
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  vec4 clip;
  float depthLight;
  float hover;
  float front;
  shellLight(mv, clip, depthLight, hover, front);
  float span = 1.0 - smoothstep(0.070, 0.200, aLength);
  vBright = (depthLight * 0.42 * (0.35 + 0.65 * span) + hover * 0.55) * uIntro;
  vHover = hover;
  vFront = front;
  vSpan = mix(0.55, 1.0, span);
  vDirection = position;
  gl_Position = clip;
}
`,
  P = `
precision highp float;
${x}
uniform vec3 uBase;
uniform vec3 uHot;
uniform float uInk;
uniform float uLineGain;
varying float vBright;
varying float vHover;
varying float vFront;
varying float vSpan;
varying vec3 vDirection;

void main() {
  float pulse = pulseGlow(normalize(vDirection)) * mix(1.0 - uDepthFade * 0.8, 1.0, vFront);
  vec3 color = mix(uBase, uHot, clamp(vHover * 0.8 + pulse, 0.0, 1.0));
  float amount = (vBright + pulse * 0.8) * vSpan * uLineGain;
  float alpha = clamp(amount * (uInk > 0.5 ? 0.85 : 1.0), 0.0, 1.0);
  gl_FragColor = uInk > 0.5 ? vec4(color * alpha, alpha) : vec4(color * amount, alpha);
}
`,
  k = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: .09,
        delayChildren: .1
      }
    }
  },
  F = {
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
function A() {
  let e = (0, __mod_50969.I)(),
    t = (0, React.useRef)(null),
    a = (0, React.useRef)(null),
    h = (0, React.useRef)(null),
    x = (0, React.useRef)(null),
    y = (0, React.useRef)(null),
    A = (0, React.useRef)(null),
    L = (0, React.useRef)(null);
  return (0, React.useEffect)(() => {
    let e = t.current,
      r = a.current,
      n = h.current,
      o = x.current,
      l = y.current,
      i = A.current;
    if (!e || !r || !n || !o || !l || !i) return;
    let k = function (e, t, a, r, n, o) {
      let l,
        i = e.ownerDocument,
        h = i.defaultView ?? window,
        x = h.matchMedia("(prefers-reduced-motion: reduce)").matches,
        y = i.createElement("canvas");
      y.style.cssText = "position:absolute;inset:0;width:100%;height:100%;display:block";
      try {
        l = new __mod_12246.WebGLRenderer({
          canvas: y,
          alpha: !0,
          antialias: !0,
          premultipliedAlpha: !0,
          powerPreference: "high-performance"
        });
      } catch {
        return null;
      }
      t.appendChild(y), l.setClearColor(0, 0);
      let k = (() => {
          let e,
            t = (e = (0x2545f491 ^ Math.floor(41886.6)) >>> 0, () => {
              let t = e = e + 0x6d2b79f5 >>> 0;
              return t = Math.imul(t ^ t >>> 15, 1 | t), (((t ^= t + Math.imul(t ^ t >>> 7, 61 | t)) ^ t >>> 14) >>> 0) / 0x100000000;
            }),
            a = c.map(e => p(e.lat, e.lon));
          for (; a.length < 27;) a.push(m(t));
          let r = [];
          a.forEach((e, t) => {
            let n = a.map((a, r) => ({
              j: r,
              d: r === t ? 1 / 0 : 1 - (a[0] * e[0] + a[1] * e[1] + a[2] * e[2])
            })).sort((e, t) => e.d - t.d);
            for (let e = 0; e < 3; e++) {
              let a = n[e].j;
              r.some(([e, r]) => e === t && r === a || e === a && r === t) || r.push([t, a]);
            }
          });
          let n = new Float32Array(6600);
          for (let e = 0; e < 2200; e++) {
            let o,
              l = t();
            if (l < .2775) o = m(t);else if (l < .53) o = v(a[Math.floor(t() * a.length)], .07 + .06 * t(), t);else {
              let [e, n] = r[Math.floor(t() * r.length)];
              o = v(g(a[e], a[n], t()), .018 + .02 * t(), t);
            }
            n.set(o, 3 * e);
          }
          let o = new Map(),
            l = (e, t, a) => `${Math.floor(e / .2)},${Math.floor(t / .2)},${Math.floor(a / .2)}`;
          for (let e = 0; e < 2200; e++) {
            let t = l(n[3 * e], n[3 * e + 1], n[3 * e + 2]),
              a = o.get(t);
            a ? a.push(e) : o.set(t, [e]);
          }
          let i = new Float32Array(2200),
            s = new Set(),
            u = [],
            d = [],
            f = (e, t, a, r) => {
              let n = e < t ? 2200 * e + t : 2200 * t + e;
              !s.has(n) && (s.add(n), u.push(e, t), d.push(a), r && (i[e] += 1, i[t] += 1));
            },
            h = [];
          for (let e = 0; e < 2200; e++) {
            h.length = 0;
            let t = n[3 * e],
              a = n[3 * e + 1],
              r = n[3 * e + 2],
              l = Math.floor(t / .2),
              i = Math.floor(a / .2),
              s = Math.floor(r / .2);
            for (let u = l - 1; u <= l + 1; u++) for (let l = i - 1; l <= i + 1; l++) for (let i = s - 1; i <= s + 1; i++) for (let s of o.get(`${u},${l},${i}`) ?? []) {
              if (s === e) continue;
              let o = (n[3 * s] - t) ** 2 + (n[3 * s + 1] - a) ** 2 + (n[3 * s + 2] - r) ** 2;
              o < .2 * .2 && h.push({
                j: s,
                d: o
              });
            }
            h.sort((e, t) => e.d - t.d);
            for (let t = 0; t < Math.min(4, h.length); t++) f(e, h[t].j, Math.sqrt(h[t].d), !0);
          }
          for (let e = 0; e < Math.round(264); e++) {
            let e = Math.floor(2200 * t());
            for (let a = 0; a < 6; a++) {
              let a = Math.floor(2200 * t());
              if (a === e) continue;
              let r = Math.hypot(n[3 * a] - n[3 * e], n[3 * a + 1] - n[3 * e + 1], n[3 * a + 2] - n[3 * e + 2]);
              if (r > .45 && r < 1.6) {
                f(e, a, r, !1);
                break;
              }
            }
          }
          let x = new Float32Array(2200);
          for (let e = 0; e < 2200; e++) x[e] = t();
          let y = a.slice();
          for (; y.length < 38;) y.push(m(t));
          return {
            points: n,
            degree: i,
            seeds: x,
            edges: u,
            lengths: d,
            regions: y
          };
        })(),
        F = new __mod_2253.LoY();
      F.setAttribute("position", new __mod_2253.THS(k.points, 3)), F.setAttribute("aDegree", new __mod_2253.THS(k.degree, 1)), F.setAttribute("aSeed", new __mod_2253.THS(k.seeds, 1));
      let A = k.edges.length / 2,
        L = new Float32Array(6 * A),
        S = new Float32Array(2 * A);
      for (let e = 0; e < A; e++) {
        let t = k.edges[2 * e],
          a = k.edges[2 * e + 1];
        L.set(k.points.subarray(3 * t, 3 * t + 3), 6 * e), L.set(k.points.subarray(3 * a, 3 * a + 3), 6 * e + 3), S[2 * e] = k.lengths[e], S[2 * e + 1] = k.lengths[e];
      }
      let C = new __mod_2253.LoY();
      C.setAttribute("position", new __mod_2253.THS(L, 3)), C.setAttribute("aLength", new __mod_2253.THS(S, 1));
      let E = {
          uTime: {
            value: 0
          },
          uClock: {
            value: 0
          },
          uWorldRadius: {
            value: 1
          },
          uDepthFade: {
            value: .88
          },
          uPointer: {
            value: new __mod_2253.I9Y(9, 9)
          },
          uHover: {
            value: 0
          },
          uAspect: {
            value: 1
          },
          uPulseTime: {
            value: new __mod_2253.IUQ(-99, -99, -99, -99)
          },
          uPulseOrigin: {
            value: Array.from({
              length: 4
            }, () => new __mod_2253.Pq0(0, 0, 1))
          },
          uPixelRatio: {
            value: 1
          },
          uLineGain: {
            value: 1
          },
          uIntro: {
            value: +!!x
          },
          uBase: {
            value: new __mod_2253.Q1f()
          },
          uHot: {
            value: new __mod_2253.Q1f()
          },
          uInk: {
            value: 0
          }
        },
        j = (e, t) => new __mod_2253.BKk({
          vertexShader: e,
          fragmentShader: t,
          uniforms: E,
          transparent: !0,
          depthTest: !1,
          depthWrite: !1,
          blending: __mod_2253.bCz
        }),
        I = j(M, P),
        _ = j(w, b),
        R = new __mod_2253.YJl(),
        q = new __mod_2253.DXC(C, I),
        B = new __mod_2253.ONl(F, _);
      q.frustumCulled = !1, B.frustumCulled = !1, R.add(q, B);
      let H = new __mod_2253.Z58();
      H.add(R);
      let T = new __mod_2253.ubm(20, 1, .1, 100);
      T.position.set(0, 0, 16);
      let N = c.map(e => new __mod_2253.Pq0(...p(e.lat, e.lon))),
        D = k.regions.map(e => new __mod_2253.Pq0(e[0], e[1], e[2])),
        z = r.map(e => e.querySelector("[data-latency]")),
        $ = r.map(e => e.offsetWidth),
        O = new __mod_2253.PTz().setFromAxisAngle(new __mod_2253.Pq0(0, 1, 0), -2.1),
        W = new __mod_2253.PTz().setFromAxisAngle(new __mod_2253.Pq0(1, 0, 0), __mod_2253.cj9.degToRad(16)),
        G = new __mod_2253.Pq0(),
        V = new __mod_2253.PTz(),
        Q = new __mod_2253.Pq0(),
        Y = new __mod_2253.Pq0(),
        U = new __mod_2253.Pq0(),
        J = new __mod_2253.tBo(),
        X = new __mod_2253.iyt(),
        K = new __mod_2253.I9Y(),
        Z = new __mod_2253.Pq0(),
        ee = [-99, -99, -99, -99],
        et = Array.from({
          length: 4
        }, () => new __mod_2253.Pq0(0, 0, 1)),
        ea = 0,
        er = null,
        en = x ? 1 / 0 : 2.2,
        eo = 1,
        el = 1,
        ei = 1,
        es = 0,
        eu = 0,
        ec = 1,
        ed = 0,
        ef = 0,
        eh = -1,
        ep = 0,
        em = 0,
        ev = !1,
        eg = 0,
        ex = 0,
        ey = 0,
        ew = 9,
        eb = 9,
        eM = 0,
        eP = !1,
        ek = !1,
        eF = "",
        eA = {
          left: 0,
          top: 0,
          right: 0,
          bottom: 0
        },
        eL = 0,
        eS = 0,
        eC = !1,
        eE = !1,
        ej = i.createElement("canvas").getContext("2d", {
          willReadFrequently: !0
        }),
        eI = () => {
          let t = (() => {
              if (!ej) return 0;
              ej.clearRect(0, 0, 1, 1), ej.fillStyle = "#0a0a0a", ej.fillStyle = h.getComputedStyle(e).backgroundColor, ej.fillRect(0, 0, 1, 1);
              let [t, a, r] = ej.getImageData(0, 0, 1, 1).data;
              return (.2126 * t + .7152 * a + .0722 * r) / 255;
            })(),
            a = t.toFixed(3);
          if (a === eF) return !1;
          for (let e of (eF = a, ek = t > .5, E.uInk.value = +!!ek, E.uBase.value.setStyle(ek ? "#8B7BFF" : "#7C6BFF", __mod_2253.jf0), E.uHot.value.setStyle(ek ? "#5227FF" : "#FFE6FA", __mod_2253.jf0), [I, _])) e.blendEquation = __mod_2253.gO9, e.blendSrc = __mod_2253.qad, e.blendDst = ek ? __mod_2253.OuU : __mod_2253.qad, e.blendSrcAlpha = __mod_2253.qad, e.blendDstAlpha = __mod_2253.OuU, e.needsUpdate = !0;
          return !0;
        },
        e_ = () => {
          let t = e.getBoundingClientRect(),
            r = a.getBoundingClientRect();
          eo = Math.max(1, t.width), el = Math.max(1, t.height), eA = {
            left: r.left - t.left,
            top: r.top - t.top,
            right: r.right - t.left,
            bottom: r.bottom - t.top
          };
          let n = Math.min(h.devicePixelRatio || 1, 2);
          l.setPixelRatio(n), l.setSize(eo, el, !1), E.uPixelRatio.value = n, E.uLineGain.value = 1 + (Math.max(n, 1) - 1) * .85, E.uAspect.value = eo / el, T.aspect = eo / el, T.updateProjectionMatrix(), eo >= 1024 ? (ei = Math.min(.5 * el, .34 * eo), es = Math.max(eA.right + 56 + .92 * ei, .7 * eo), eu = .52 * el) : (ei = Math.min(.62 * eo, 300), es = .5 * eo, eu = eA.bottom + 56 + ei);
          let o = 16 * Math.tan(__mod_2253.cj9.degToRad(10));
          ec = ei / el * 2 * o, R.position.set((es / eo - .5) * 2 * o * (eo / el), (.5 - eu / el) * 2 * o, 0), R.scale.setScalar(ec), E.uWorldRadius.value = ec;
        },
        eR = () => {
          let e = 0,
            t = -1 / 0;
          return N.forEach((a, r) => {
            Q.copy(a).applyQuaternion(R.quaternion);
            let n = Q.z - .4 * Math.abs(Q.y);
            n > t && (t = n, e = r);
          }), N[e];
        },
        eq = e => {
          ea = (ea + 1) % 4, et[ea].copy(e), ee[ea] = ed;
          let a = D.map(t => Math.round(18 + Math.acos(d(t.dot(e), -1, 1)) / Math.PI * 590));
          er = {
            start: ed,
            arrivals: D.map(t => Math.acos(d(t.dot(e), -1, 1)) / .95),
            latency: a,
            hash: Math.floor(0xfffffff * Math.random()).toString(16).padStart(7, "0"),
            reached: 0,
            done: !1
          }, z.forEach(e => {
            e && (e.style.opacity = "0");
          }), o.dataset.state = "deploying", n.textContent = `Deploying main@${er.hash}`, en = ed + 7.5, eB();
        },
        eB = () => {
          eE || !eC || eL || (eL = h.requestAnimationFrame(eH));
        },
        eH = e => {
          if (eL = 0, eE) return;
          let t = eS && e - eS < 100 ? Math.min((e - eS) / 1e3, .05) : 1 / 60;
          eS = e, eh < 0 && (eh = e);
          let a = x ? 1 : f(0, 1, (e - eh) / 1600);
          x || (ef += t, ed += t), ev || (ep *= Math.exp(-(1.6 * t)), em *= Math.exp(-(2.4 * t)));
          G.set(0, 1, 0), V.setFromAxisAngle(G, ((x ? 0 : .06 + (1 - a) * .5) + ep) * t), O.premultiply(V), G.set(1, 0, 0), V.setFromAxisAngle(G, em * t), O.premultiply(V), O.normalize(), R.quaternion.copy(W).multiply(O), R.updateMatrixWorld(), eM += ((!eP || ev || x ? 0 : 1) - eM) * (1 - Math.exp(-(5 * t))), E.uHover.value = .8 * eM, E.uPointer.value.set(ew, eb), E.uTime.value = ef, E.uClock.value = ed, E.uIntro.value = a, E.uPulseTime.value.set(ee[0], ee[1], ee[2], ee[3]), et.forEach((e, t) => E.uPulseOrigin.value[t].copy(e)), ed >= en && eq(eR()), (() => {
            if (!er) return;
            let e = ed - er.start,
              t = 0;
            er.arrivals.forEach((a, n) => {
              if (e >= a && (t++, n < z.length)) {
                let e = z[n];
                e && "1" !== e.style.opacity && (e.textContent = `${er.latency[n]} ms`, e.style.opacity = "1", $[n] = r[n].offsetWidth);
              }
            }), t === er.reached || er.done || (er.reached = t, n.textContent = `Deploying main@${er.hash} \xb7 ${t} of 38 regions`), !er.done && t >= 38 && (er.done = !0, o.dataset.state = "live", n.textContent = `main@${er.hash} is live in 38 regions \xb7 ${Math.max(...er.latency)} ms`), er.done && e > Math.PI / .95 + 3.2 && z.forEach(e => {
              e && (e.style.opacity = "0");
            });
          })(), N.forEach((e, t) => {
            let n = r[t];
            if (!n) return;
            Y.copy(e).applyQuaternion(R.quaternion), Q.copy(Y).multiplyScalar(ec).add(R.position), U.copy(T.position).sub(Q).normalize();
            let o = Y.dot(U);
            Q.project(T);
            let l = (.5 * Q.x + .5) * eo,
              i = (.5 - .5 * Q.y) * el,
              s = l > eo - 170,
              u = $[t] || 120,
              c = s ? l - u : l,
              d = s ? l : l + u,
              h = d > eA.left - 12 && c < eA.right + 16 && i > eA.top - 20 && i < eA.bottom + 20,
              p = c > 8 && d < eo - 8 && i > 16 && i < el - 16,
              m = f(.1, .36, o) * a * (h || !p ? 0 : 1);
            "left" === n.dataset.side !== s && (n.dataset.side = s ? "left" : "right"), n.style.transform = `translate3d(${(s ? l - u + 6 : l).toFixed(1)}px, ${i.toFixed(1)}px, 0)`, n.style.opacity = m.toFixed(3);
          }), l.render(H, T), !x || ev || Math.abs(ep) > 1e-4 ? eB() : eS = 0;
        },
        eT = t => {
          let a = e.getBoundingClientRect();
          return {
            x: t.clientX - a.left,
            y: t.clientY - a.top
          };
        },
        eN = (e, t) => Math.hypot(e - es, t - eu) < 1.02 * ei,
        eD = t => {
          let a = eT(t);
          if (ew = a.x / eo * 2 - 1, eb = 1 - a.y / el * 2, eP = eN(a.x, a.y), e.style.cursor = ev ? "grabbing" : eP ? "grab" : "", ev) {
            let e = (a.x - eg) / el,
              r = (a.y - ex) / el;
            eg = a.x, ex = a.y, ey += Math.hypot(e, r);
            let n = 1 / Math.max(e$(), 1 / 240);
            ep = 3.2 * e * n * .35, em = "mouse" === t.pointerType ? 3.2 * r * n * .2 : 0, G.set(0, 1, 0), V.setFromAxisAngle(G, 3.2 * e), O.premultiply(V), "mouse" === t.pointerType && (G.set(1, 0, 0), V.setFromAxisAngle(G, 2.4 * r), O.premultiply(V));
          }
          eB();
        },
        ez = performance.now(),
        e$ = () => {
          let e = performance.now(),
            t = (e - ez) / 1e3;
          return ez = e, t;
        },
        eO = t => {
          let a,
            r = eT(t);
          !(!t.isPrimary || (a = t.target, a?.closest?.("a,button,input,textarea,select,label,[role=button]"))) && eN(r.x, r.y) && ("mouse" === t.pointerType && t.preventDefault(), i.getSelection()?.removeAllRanges(), e.style.setProperty("user-select", "none"), e.style.setProperty("-webkit-user-select", "none"), ev = !0, ey = 0, eg = r.x, ex = r.y, e$(), ep = 0, em = 0, e.setPointerCapture?.(t.pointerId), e.style.cursor = "grabbing", eB());
        },
        eW = t => {
          if (ev) {
            if (ev = !1, e.releasePointerCapture?.(t.pointerId), e.style.removeProperty("user-select"), e.style.removeProperty("-webkit-user-select"), ey < .012 && !x) {
              let e = eT(t);
              K.set(e.x / eo * 2 - 1, 1 - e.y / el * 2), J.setFromCamera(K, T), X.set(R.position, ec), J.ray.intersectSphere(X, Z) && (Z.sub(R.position).normalize().applyQuaternion(R.quaternion.clone().invert()), eq(Z.clone()));
            }
            e.style.cursor = eP ? "grab" : "", eB();
          }
        },
        eG = () => {
          eP = !1, ev || (e.style.cursor = ""), eB();
        },
        eV = () => {
          eI() && eB();
        },
        eQ = new ResizeObserver(() => {
          e_(), r.forEach((e, t) => $[t] = e.offsetWidth), eB();
        }),
        eY = new IntersectionObserver(([e]) => {
          eC = e.isIntersecting, eS = 0, eB();
        }),
        eU = new MutationObserver(eV),
        eJ = h.matchMedia("(prefers-color-scheme: dark)");
      return e.addEventListener("pointermove", eD), e.addEventListener("pointerdown", eO), e.addEventListener("pointerup", eW), e.addEventListener("pointercancel", eW), e.addEventListener("pointerleave", eG), eU.observe(i.documentElement, {
        attributes: !0,
        attributeFilter: ["class", "style", "data-theme"]
      }), eJ.addEventListener("change", eV), eQ.observe(e), eQ.observe(a), eY.observe(e), eI(), e_(), x && (o.dataset.state = "live", n.textContent = `main@4f2c1a9 is live in 38 regions \xb7 608 ms`), {
        deploy: () => {
          x || er && !er.done || eq(eR());
        },
        destroy: () => {
          eE = !0, h.cancelAnimationFrame(eL), eQ.disconnect(), eY.disconnect(), eU.disconnect(), eJ.removeEventListener("change", eV), e.removeEventListener("pointermove", eD), e.removeEventListener("pointerdown", eO), e.removeEventListener("pointerup", eW), e.removeEventListener("pointercancel", eW), e.removeEventListener("pointerleave", eG), e.style.cursor = "", e.style.removeProperty("user-select"), e.style.removeProperty("-webkit-user-select"), F.dispose(), C.dispose(), I.dispose(), _.dispose(), l.dispose(), y.remove();
        }
      };
    }(e, r, n, Array.from(o.children), l, i);
    return L.current = k, () => {
      k?.destroy(), L.current = null;
    };
  }, []), <section ref={t} className="relative isolate flex min-h-screen w-full touch-pan-y items-start overflow-hidden bg-white px-4 pb-16 pt-24 dark:bg-neutral-950 sm:px-6 lg:items-center lg:px-8 lg:py-24"><div ref={a} aria-hidden="true" className="pointer-events-none absolute inset-0" /><div ref={x} aria-hidden="true" className="pointer-events-none absolute inset-0 z-[5]">{c.map(e => <div data-side="right" className="absolute left-0 top-0 -ml-[3px] -mt-2 flex items-center gap-2 whitespace-nowrap text-xs opacity-0 will-change-transform [text-shadow:0_0_10px_#fff,0_0_3px_#fff] data-[side=left]:flex-row-reverse dark:[text-shadow:0_0_10px_#0a0a0a,0_0_3px_#0a0a0a]"><span className="h-1.5 w-1.5 rounded-full bg-neutral-900 shadow-[0_0_0_3px_rgba(10,10,10,0.08)] dark:bg-white dark:shadow-[0_0_0_3px_rgba(255,255,255,0.12)]" /><span className="font-medium text-neutral-700 dark:text-neutral-200">{e.name}</span><span data-latency="" className="tabular-nums text-[#5227FF] opacity-0 transition-opacity duration-500 dark:text-[#B19EEF]" /></div>)}</div><div className="relative z-10 mx-auto w-full max-w-[1400px]"><motion.div ref={h} variants={k} initial={!e && "hidden"} whileInView="show" viewport={{
        once: !0
      }} className="max-w-[34rem]"><motion.h1 variants={F} className="text-[2.75rem] font-medium leading-[1.02] tracking-[-0.045em] text-neutral-950 dark:text-white sm:text-6xl lg:text-[4.5rem]">Deploy once.<br />Live everywhere.</motion.h1><motion.p variants={F} className="mt-6 max-w-[28rem] text-pretty text-base leading-relaxed text-neutral-600 dark:text-neutral-400 sm:text-lg">Push to main and your app is serving users from {38} regions in under a second. Rolling back is just as fast.</motion.p><motion.div variants={F} className="mt-9 flex flex-col gap-3 sm:flex-row"><a href="#" onPointerEnter={() => L.current?.deploy()} onFocus={() => L.current?.deploy()} className="group inline-flex h-12 cursor-pointer items-center justify-center gap-2 rounded-full bg-neutral-950 px-6 text-[15px] font-medium text-white transition-colors duration-200 hover:bg-neutral-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200 dark:focus-visible:ring-offset-neutral-950">Start deploying<ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" /></a><a href="#" className="inline-flex h-12 cursor-pointer items-center justify-center rounded-full bg-neutral-950/[0.05] px-6 text-[15px] font-medium text-neutral-900 transition-colors duration-200 hover:bg-neutral-950/[0.09] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:bg-white/[0.07] dark:text-white dark:hover:bg-white/[0.12] dark:focus-visible:ring-offset-neutral-950">Book a demo</a></motion.div><motion.div variants={F} aria-hidden="true" className="mt-10 inline-flex max-w-full items-center gap-2.5 rounded-full bg-neutral-950/[0.04] py-2 pl-3 pr-4 text-[13px] tabular-nums text-neutral-600 dark:bg-white/[0.05] dark:text-neutral-400"><span ref={A} data-state="live" className="h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400 transition-colors duration-300 data-[state=deploying]:bg-[#5227FF] data-[state=live]:bg-neutral-900 dark:bg-neutral-500 dark:data-[state=deploying]:bg-[#B19EEF] dark:data-[state=live]:bg-white" /><span ref={y} className="truncate">main@4f2c1a9 is live in {38} regions · 608 ms</span></motion.div></motion.div><div aria-hidden="true" className="h-[min(30rem,120vw)] lg:hidden" /></div></section>;
}

export { A as Hero26 };
export default A;

import * as React from "react";
import * as __mod_50969 from "../_helpers/50969";
import * as __mod_12246 from "../_helpers/12246";
import * as __mod_2253 from "../_helpers/2253";
/**
 * Stats 18
 * Ridgeline of daily checkout traffic with Black Friday as the peak
 * slug: stats-18
 * category: Stats
 * export: Stats18
 * deps: motion, three
 * original: ts-tailwind/blocks/stats/stats-18.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import { motion, AnimatePresence } from "motion/react";

let l, r, n;
let c = Date.UTC(2025, 9, 21),
  h = [{
    value: "41,280",
    label: "Orders a minute at peak"
  }, {
    value: "4.8M",
    label: "Orders over the long weekend"
  }, {
    value: "0",
    label: "Orders dropped"
  }],
  m = `
attribute float aKind;
attribute float aAcross;
attribute float aRidge;
attribute float aShade;
uniform vec2 uResolution;
varying float vKind;
varying float vAcross;
varying float vRidge;
varying float vShade;
varying float vX;

void main() {
  vKind = aKind;
  vAcross = aAcross;
  vRidge = aRidge;
  vShade = aShade;
  vX = position.x;
  vec2 clip = vec2(position.x / uResolution.x * 2.0 - 1.0, 1.0 - position.y / uResolution.y * 2.0);
  gl_Position = vec4(clip, 0.0, 1.0);
}
`,
  g = `
precision highp float;
uniform vec2 uResolution;
uniform vec3 uBackground;
uniform vec3 uLine;
uniform vec3 uAccent;
uniform vec3 uSheen;
uniform float uLight[44];
uniform float uRidges;
uniform float uWidth;
uniform float uFadeFrom;
uniform float uFadeTo;
uniform float uInk;
uniform float uBottom;
uniform float uScale;
varying float vKind;
varying float vAcross;
varying float vRidge;
varying float vShade;
varying float vX;

void main() {
  int index = int(vRidge + 0.5);
  float glow = 0.0;
  for (int i = 0; i < 44; i++) {
    if (i == index) glow = uLight[i];
  }
  float depth = vRidge / max(uRidges - 1.0, 1.0);
  float fade = smoothstep(uFadeFrom, uFadeTo, vX);
  if (vKind < 0.5) {
    float crest = exp(-vAcross / 13.0);
    float ground = clamp((uBottom - (uResolution.y - gl_FragCoord.y)) / (70.0 * uScale), 0.0, 1.0);
    float sheen = crest * (0.3 + 0.7 * vShade) * (0.35 + 0.65 * depth) * fade * ground * ground;
    vec3 tint = mix(uSheen, uAccent, glow);
    float amount = mix(0.028, 0.12, glow) * sheen;
    vec3 color = uInk > 0.5 ? uBackground * (1.0 - amount * (1.0 - tint)) : uBackground + tint * amount;
    gl_FragColor = linearToOutputTexel(vec4(color, 1.0));
  } else {
    float distance = abs(vAcross) * (uWidth + 1.0);
    float alpha = clamp(uWidth + 0.5 - distance, 0.0, 1.0);
    float strength = mix(0.32, 0.92, pow(depth, 0.8)) * (0.75 + 0.25 * vShade);
    strength = mix(strength, 1.0, glow) * fade;
    vec3 color = mix(uLine, uAccent, glow);
    gl_FragColor = linearToOutputTexel(vec4(color, alpha * strength));
  }
}
`,
  v = (e, t, a) => Math.min(a, Math.max(t, e)),
  p = (e, t) => {
    let a = 43758.5453 * Math.sin(127.1 * e + 311.7 * t);
    return a - Math.floor(a);
  },
  x = (e, t) => {
    let a = Math.floor(t),
      l = t - a,
      r = l * l * (3 - 2 * l);
    return p(e, a) * (1 - r) + p(e, a + 1) * r;
  },
  w = (e, t, a) => Math.exp(-(((e - t) / a) ** 2)),
  b = (l = new Intl.DateTimeFormat("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    timeZone: "UTC"
  }), n = Math.max(...(r = Array.from({
    length: 44
  }, (e, t) => {
    let a = new Date(c + 864e5 * t),
      r = a.getUTCDay(),
      n = a.getUTCMonth(),
      i = a.getUTCDate(),
      o = 10 === n && 28 === i,
      s = 11 === n && 1 === i,
      u = 1 + t / 43 * .22 + .14 * (0 === r || 6 === r);
    10 === n && i >= 24 && i <= 26 && (u = 1.4 + (i - 24) * .12), 10 === n && 27 === i && (u = 1.25), o && (u = 3.55), 10 === n && 29 === i && (u = 2.15), 10 === n && 30 === i && (u = 1.9), s && (u = 2.7), 11 === n && 2 === i && (u = 1.6), 11 === n && 3 === i && (u = 1.38);
    let d = new Float32Array(169);
    for (let e = 0; e <= 168; e++) {
      let a = e / 168 * 24,
        l = .1 + .12 * w(a, 9.5, 1.6) + .55 * w(a, 13.5, 3.4) + .38 * w(a, 20.6, 1.9);
      o && (l += .32 * w(a, .7, .55) + .2 * w(a, 11, 2.2)), s && (l += .18 * w(a, 18, 1.4));
      let r = .09 * (x(7.3 * t, 1.9 * a) - .5) + .05 * (x(3.1 * t + 40, 5.3 * a) - .5);
      d[e] = Math.max(0, u * l * (1 + r));
    }
    return {
      label: l.format(a),
      profile: d
    };
  })).map(e => Math.max(...e.profile))), r.map(e => {
    let t = 0,
      a = 0;
    for (let l = 0; l <= 168; l++) e.profile[l] /= n, e.profile[l] > a && (a = e.profile[l], t = l);
    return {
      label: e.label,
      profile: e.profile,
      peak: t,
      rate: Math.round(41280 * a)
    };
  })),
  y = b.findIndex(e => 41280 === e.rate),
  k = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: .08,
        delayChildren: .05
      }
    }
  },
  M = {
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
function F() {
  let e = (0, __mod_50969.I)(),
    t = (0, React.useRef)(null),
    a = (0, React.useRef)(null),
    l = (0, React.useRef)(null),
    r = (0, React.useRef)(null),
    n = (0, React.useRef)(null);
  return (0, React.useEffect)(() => {
    let e = t.current,
      i = a.current,
      o = l.current,
      s = r.current,
      u = n.current;
    if (!e || !i || !o || !s || !u) return;
    let c = function (e, t, a, l, r) {
      let n,
        i = e.ownerDocument,
        o = i.defaultView ?? window,
        s = i.createElement("canvas");
      s.setAttribute("aria-hidden", "true"), s.style.cssText = "position:absolute;inset:0;z-index:-1;width:100%;height:100%;display:block;pointer-events:none";
      try {
        n = new __mod_12246.WebGLRenderer({
          canvas: s,
          alpha: !1,
          antialias: !0,
          powerPreference: "high-performance"
        });
      } catch {
        return null;
      }
      e.prepend(s);
      let u = o.matchMedia("(prefers-reduced-motion: reduce)"),
        c = u.matches,
        h = new __mod_2253.qUd(-1, 1, 1, -1, 0, 1),
        p = new __mod_2253.Z58(),
        x = new Float32Array(89232),
        w = new Float32Array(29744),
        k = new Float32Array(29744),
        M = new Float32Array(29744),
        F = new Float32Array(29744),
        R = [];
      for (let e = 0; e < 44; e++) {
        let t = 676 * e;
        for (let a = 0; a < 169; a++) {
          let l = t + 2 * a,
            r = t + 338 + 2 * a;
          for (let t of (w[l] = 0, w[l + 1] = 0, w[r] = 1, w[r + 1] = 1, k[r] = -1, k[r + 1] = 1, [l, l + 1, r, r + 1])) M[t] = e;
        }
        for (let e = 0; e < 168; e++) {
          let a = t + 2 * e;
          R.push(a, a + 1, a + 2, a + 1, a + 3, a + 2);
        }
        for (let e = 0; e < 168; e++) {
          let a = t + 338 + 2 * e;
          R.push(a, a + 1, a + 2, a + 1, a + 3, a + 2);
        }
      }
      let A = new __mod_2253.LoY(),
        S = new __mod_2253.THS(x, 3);
      S.setUsage(__mod_2253.Vnu);
      let _ = new __mod_2253.THS(k, 1);
      _.setUsage(__mod_2253.Vnu);
      let T = new __mod_2253.THS(F, 1);
      T.setUsage(__mod_2253.Vnu), A.setAttribute("position", S), A.setAttribute("aKind", new __mod_2253.THS(w, 1)), A.setAttribute("aAcross", _), A.setAttribute("aRidge", new __mod_2253.THS(M, 1)), A.setAttribute("aShade", T), A.setIndex(R), A.boundingSphere = new __mod_2253.iyt(new __mod_2253.Pq0(), 1e7);
      let C = Array.from({
          length: 44
        }, () => 0),
        L = {
          uResolution: {
            value: new __mod_2253.I9Y(1, 1)
          },
          uBackground: {
            value: new __mod_2253.Q1f()
          },
          uLine: {
            value: new __mod_2253.Q1f()
          },
          uAccent: {
            value: new __mod_2253.Q1f()
          },
          uSheen: {
            value: new __mod_2253.Q1f()
          },
          uLight: {
            value: C
          },
          uRidges: {
            value: 44
          },
          uWidth: {
            value: 1
          },
          uFadeFrom: {
            value: 0
          },
          uFadeTo: {
            value: 1
          },
          uInk: {
            value: 0
          },
          uBottom: {
            value: 1
          },
          uScale: {
            value: 1
          }
        },
        E = new __mod_2253.BKk({
          vertexShader: m,
          fragmentShader: g,
          uniforms: L,
          transparent: !0,
          depthTest: !1,
          depthWrite: !1
        }),
        B = new __mod_2253.eaF(A, E);
      B.frustumCulled = !1, p.add(B);
      let N = i.createElement("canvas").getContext("2d", {
          willReadFrequently: !0
        }),
        j = Array.from({
          length: 44
        }, () => +!!c),
        U = Array.from({
          length: 44
        }, (e, t) => +(t === y)),
        D = -1,
        O = "",
        P = 1,
        K = 1,
        W = 1,
        $ = {
          left: 0,
          top: 0,
          width: 1,
          height: 1
        },
        H = {
          first: 0,
          spacing: 8,
          amp: 100,
          left: 0,
          right: 1,
          fadeFrom: 0,
          fadeTo: 1,
          bottom: 1
        },
        V = -1,
        X = 0,
        q = 0,
        Q = !1,
        z = !1,
        Y = !1,
        G = () => {
          if (!N) return !1;
          let a = "rgba(0, 0, 0, 0)";
          for (; e;) {
            let e = o.getComputedStyle(e).backgroundColor;
            if (!/rgba?\(\s*0,\s*0,\s*0,\s*0\s*\)|transparent/.test(e)) {
              a = e;
              break;
            }
            t = e.parentElement;
          }
          N.clearRect(0, 0, 1, 1), N.fillStyle = "#0a0a0a", N.fillStyle = a, N.fillRect(0, 0, 1, 1);
          let [l, r, i] = N.getImageData(0, 0, 1, 1).data,
            s = `${l},${r},${i}`;
          if (s === O) return !1;
          O = s;
          let u = (.2126 * l + .7152 * r + .0722 * i) / 255 > .5;
          return L.uBackground.value.setRGB(l / 255, r / 255, i / 255, __mod_2253.er$), n.setClearColor(L.uBackground.value, 1), L.uLine.value.set(u ? "#171717" : "#f5f5f5"), L.uAccent.value.set(u ? "#e5531a" : "#ff6a2b"), L.uSheen.value.set(u ? "#000000" : "#ffffff"), L.uInk.value = +!!u, !0;
        },
        Z = (e, t) => H.first + e * H.spacing - H.amp * j[e] * ((e, t) => {
          let a = (t - .1) / .8;
          if (a <= 0 || a >= 1) return (a <= 0 ? e.profile[0] : e.profile[168]) * Math.exp(-(14 * (a <= 0 ? -a : a - 1)));
          let l = 168 * a,
            r = Math.floor(l),
            n = l - r;
          return e.profile[r] * (1 - n) + e.profile[Math.min(r + 1, 168)] * n;
        })(b[e], t) - 7 * C[e],
        J = () => {
          if (!Y) {
            let e, t, i, o;
            (() => {
              let t = .6 * W;
              for (let a = 0; a < 44; a++) {
                let l = 676 * a,
                  r = [],
                  n = [];
                for (let e = 0; e < 169; e++) {
                  let t = e / 168;
                  r.push(H.left + t * (H.right - H.left)), n.push(Z(a, t));
                }
                for (let i = 0; i < 169; i++) {
                  let o = Math.max(i - 1, 0),
                    s = Math.min(i + 1, 168),
                    u = r[s] - r[o],
                    d = n[s] - n[o],
                    f = Math.hypot(u, d) || 1,
                    c = -d / f * (t / W + 1 / W),
                    h = u / f * (t / W + 1 / W),
                    m = Math.max(i - 6, 0),
                    g = Math.min(i + 6, 168),
                    p = v(.5 - 1.4 * ((n[g] - n[m]) / Math.max(r[g] - r[m], 1)), 0, 1),
                    w = l + 2 * i,
                    b = l + 338 + 2 * i;
                  x[3 * w] = r[i] * W, x[3 * w + 1] = n[i] * W, x[(w + 1) * 3] = r[i] * W, x[(w + 1) * 3 + 1] = H.bottom * W, k[w] = 0, k[w + 1] = H.bottom - n[i], F[w] = p, F[w + 1] = p, x[3 * b] = (r[i] - c) * W, x[3 * b + 1] = (n[i] - h) * W, x[(b + 1) * 3] = (r[i] + c) * W, x[(b + 1) * 3 + 1] = (n[i] + h) * W;
                  let y = v((H.first + a * H.spacing - n[i]) / Math.max(H.amp, 1), 0, 1);
                  F[b] = y, F[b + 1] = y;
                }
              }
              S.needsUpdate = !0, _.needsUpdate = !0, T.needsUpdate = !0, L.uWidth.value = t, L.uFadeFrom.value = H.fadeFrom * W, L.uBottom.value = H.bottom * W, L.uScale.value = W, L.uFadeTo.value = H.fadeTo * W;
            })(), n.clear(), n.render(p, h), t = .1 + (e = b[y]).peak / 168 * .8, i = H.left + t * (H.right - H.left) - $.left, o = Z(y, t) - $.top - 16, a.style.transform = `translate3d(${i.toFixed(1)}px, ${o.toFixed(1)}px, 0) translate(-50%, -100%)`, a.style.opacity = String(v((j[y] - .7) / .3, 0, 1)), D !== y && (D = y, l.textContent = e.label, r.textContent = `${e.rate.toLocaleString("en-US")} orders a minute`);
          }
        },
        ee = () => {
          z || Y || !Q || X || (X = o.requestAnimationFrame(et));
        };
      function et(e) {
        if (X = 0, z || Y) return;
        let t = q && e - q < 100 ? (e - q) / 1e3 : 1 / 60;
        q = e, V < 0 && (V = e);
        let a = (e - V) / 1e3,
          l = !1;
        for (let e = 0; e < 44; e++) {
          if (c) j[e] = 1;else {
            let t = v((a - .2 - (43 - e) * .025) / 1.1, 0, 1);
            j[e] = 1 - Math.pow(1 - t, 3);
          }
          j[e] < 1 && (l = !0);
          let r = U[e];
          C[e] += (r - C[e]) * (c ? 1 : 1 - Math.exp(-t / .16)), Math.abs(C[e] - r) > .002 ? l = !0 : C[e] = r;
        }
        J(), l ? ee() : q = 0;
      }
      let ea = () => {
          let a,
            l,
            r,
            i,
            s,
            u,
            d,
            f,
            c = e.getBoundingClientRect();
          P = Math.max(1, c.width), K = Math.max(1, c.height), W = Math.min(o.devicePixelRatio || 1, 2), n.setPixelRatio(W), n.setSize(P, K, !1), L.uResolution.value.set(P * W, K * W), a = e.getBoundingClientRect(), $ = {
            left: (l = t.getBoundingClientRect()).left - a.left,
            top: l.top - a.top,
            width: l.width,
            height: l.height
          }, r = l.width > 640, i = $.height * (r ? .44 : .4), s = $.top + $.height * (r ? .3 : .18), u = $.top + $.height - 6, f = (d = $.left > 160) ? Math.min($.left - 32, 220) : 0, H = {
            first: s,
            spacing: (u - 18 - s) / 43,
            amp: i,
            left: $.left - f,
            right: Math.min($.left + $.width + 24, P),
            fadeFrom: $.left - f,
            fadeTo: d ? $.left - .15 * f : $.left + .08 * $.width,
            bottom: Math.min(u + 6, K)
          }, Q && J();
        },
        el = e => {
          let t = v(e, 0, 43);
          if (t !== y) {
            I = t;
            for (let e = 0; e < 44; e++) U[e] = +(e === y);
            ee();
          }
        },
        er = t => {
          let a = e.getBoundingClientRect(),
            l = t.clientX - a.left,
            r = t.clientY - a.top;
          if (l < $.left - 20 || l > $.left + $.width + 20 || r < $.top - 20 || r > $.top + $.height + 20) return;
          let n = v((l - H.left) / Math.max(H.right - H.left, 1), 0, 1),
            o = 1 / 0;
          for (let e = 0; e < 44; e++) {
            let t = Math.abs(Z(e, n) - r);
            t < o && (o = t, i = e);
          }
          el(y);
        },
        en = () => el(y),
        ei = () => {
          G() && !X && Q && J();
        },
        eo = () => {
          c = u.matches, ee();
        },
        es = e => {
          e.preventDefault(), Y = !0, o.cancelAnimationFrame(X), X = 0;
        },
        eu = () => {
          Y = !1, O = "", G(), ea();
        },
        ed = new ResizeObserver(() => ea()),
        ef = new IntersectionObserver(([e]) => {
          (Q = e.isIntersecting) && (J(), ee());
        }, {
          threshold: .2
        }),
        ec = new MutationObserver(ei),
        eh = o.matchMedia("(prefers-color-scheme: dark)");
      return ec.observe(i.documentElement, {
        attributes: !0,
        attributeFilter: ["class", "style", "data-theme"]
      }), eh.addEventListener("change", ei), u.addEventListener("change", eo), s.addEventListener("webglcontextlost", es), s.addEventListener("webglcontextrestored", eu), e.addEventListener("pointermove", er), e.addEventListener("pointerleave", en), ed.observe(e), ed.observe(t), ef.observe(e), G(), ea(), {
        destroy: () => {
          z = !0, o.cancelAnimationFrame(X), ec.disconnect(), ed.disconnect(), ef.disconnect(), eh.removeEventListener("change", ei), u.removeEventListener("change", eo), s.removeEventListener("webglcontextlost", es), s.removeEventListener("webglcontextrestored", eu), e.removeEventListener("pointermove", er), e.removeEventListener("pointerleave", en), A.dispose(), E.dispose(), n.dispose(), s.remove();
        }
      };
    }(e, i, o, s, u);
    return () => c?.destroy();
  }, []), <section ref={t} className="relative isolate w-full overflow-hidden bg-white px-4 py-20 text-neutral-950 dark:bg-neutral-950 dark:text-white sm:px-6 lg:px-8 lg:py-24"><motion.div variants={k} initial={!e && "hidden"} whileInView="show" viewport={{
      once: !0,
      amount: .3
    }} className="mx-auto grid w-full max-w-[1400px] gap-10 lg:grid-cols-[minmax(0,26rem)_minmax(0,1fr)] lg:gap-12"><div className="flex flex-col"><motion.h2 variants={M} className="text-balance text-[2.25rem] font-medium leading-[1.04] tracking-[-0.04em] sm:text-5xl">Every line is a day of checkout traffic.</motion.h2><motion.p variants={M} className="mt-5 max-w-[38ch] text-pretty text-base leading-relaxed text-neutral-600 dark:text-neutral-400">The tall one is Black Friday, the busiest day we have ever held.</motion.p><motion.dl variants={M} className="mt-10 grid grid-cols-3 gap-6 lg:mt-auto lg:grid-cols-1 lg:gap-7">{h.map(e => <div className="flex flex-col"><dt className="order-last mt-1.5 text-sm leading-snug text-neutral-500 dark:text-neutral-400">{e.label}</dt><dd className="text-3xl font-medium tracking-[-0.03em] tabular-nums sm:text-4xl">{e.value}</dd></div>)}</motion.dl></div><div ref={a} className="relative h-[24rem] sm:h-[30rem] lg:h-[38rem]"><p className="sr-only">Daily checkout traffic from October 21 to December 3. The peak was Black Friday at 41,280 orders a minute.</p><div ref={l} aria-hidden="true" style={{
          opacity: 0
        }} className="pointer-events-none absolute left-0 top-0 flex flex-col items-center whitespace-nowrap text-center transition-opacity duration-300 will-change-transform [text-shadow:0_0_10px_rgb(255_255_255),0_0_4px_rgb(255_255_255)] dark:[text-shadow:0_0_10px_rgb(10_10_10),0_0_4px_rgb(10_10_10)]"><span ref={r} className="text-xs text-neutral-500 dark:text-neutral-400" /><span ref={n} className="mt-0.5 text-sm font-medium tabular-nums text-[#c2410c] dark:text-[#ff8a57]" /></div></div></motion.div></section>;
}

export { F as Stats18 };
export default F;

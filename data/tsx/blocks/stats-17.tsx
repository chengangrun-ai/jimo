import * as React from "react";
import * as __mod_50969 from "../_helpers/50969";
import * as __mod_12246 from "../_helpers/12246";
import * as __mod_2253 from "../_helpers/2253";
/**
 * Stats 17
 * Searchlight fan where each beam's reach is a year of volume
 * slug: stats-17
 * category: Stats
 * export: Stats17
 * deps: motion, three
 * original: ts-tailwind/blocks/stats/stats-17.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import { motion, AnimatePresence } from "motion/react";

let u = [{
    year: "2021",
    value: .4
  }, {
    year: "2022",
    value: 1.1
  }, {
    year: "2023",
    value: 2.6
  }, {
    year: "2024",
    value: 4.9
  }, {
    year: "2025",
    value: 8.3
  }, {
    year: "2026",
    value: 12.7
  }],
  c = ["#1238a8", "#3b7bff", "#a9c8ff", "#f4f8ff"],
  h = `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position.xy * 2.0, 0.0, 1.0);
}
`,
  m = `
precision highp float;
#define MAX_BEAMS 8
varying vec2 vUv;
uniform vec2 uResolution;
uniform float uTime;
uniform vec3 uLab[4];
uniform vec3 uBackground;
uniform float uInk;
uniform vec4 uBeams[MAX_BEAMS];
uniform float uStart[MAX_BEAMS];
uniform vec2 uOrigin;
uniform vec2 uLean;
uniform int uCount;
uniform float uHaze;
uniform float uGrain;

float hash21(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * 0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}

vec2 hash22(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * vec3(0.1031, 0.1030, 0.0973));
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.xx + p3.yz) * p3.zy) * 2.0 - 1.0;
}

float gradientNoise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * f * (f * (f * 6.0 - 15.0) + 10.0);
  float a = dot(hash22(i), f);
  float b = dot(hash22(i + vec2(1.0, 0.0)), f - vec2(1.0, 0.0));
  float c = dot(hash22(i + vec2(0.0, 1.0)), f - vec2(0.0, 1.0));
  float d = dot(hash22(i + vec2(1.0, 1.0)), f - vec2(1.0, 1.0));
  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}

vec3 oklabToLinear(vec3 c) {
  float l = c.x + 0.3963377774 * c.y + 0.2158037573 * c.z;
  float m = c.x - 0.1055613458 * c.y - 0.0638541728 * c.z;
  float s = c.x - 0.0894841775 * c.y - 1.2914855480 * c.z;
  l = l * l * l;
  m = m * m * m;
  s = s * s * s;
  return vec3(
    4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s,
    -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s,
    -0.0041960863 * l - 0.7034186147 * m + 1.7076147010 * s
  );
}

vec3 palette(float t) {
  t = clamp(t, 0.0, 1.0) * mix(1.0, 0.62, uInk);
  float scaled = t * 3.0;
  vec3 lab = uLab[0];
  lab = mix(lab, uLab[1], smoothstep(0.0, 1.0, clamp(scaled, 0.0, 1.0)));
  lab = mix(lab, uLab[2], smoothstep(0.0, 1.0, clamp(scaled - 1.0, 0.0, 1.0)));
  lab = mix(lab, uLab[3], smoothstep(0.0, 1.0, clamp(scaled - 2.0, 0.0, 1.0)));
  return max(oklabToLinear(lab), 0.0);
}

void main() {
  vec2 p = gl_FragCoord.xy;
  float h = uResolution.y;
  vec2 d = p - uOrigin;
  float r = length(d);
  float theta = atan(d.x, d.y);
  float light = 0.0;
  for (int i = 0; i < MAX_BEAMS; i++) {
    if (i >= uCount) break;
    vec4 beam = uBeams[i];
    float start = uStart[i];
    float reach = beam.y;
    if (reach - start <= 0.5) continue;
    float offset = theta - beam.x;
    float spread = beam.z + 1.2 / max(r, 1.0);
    float core = exp(-offset * offset / (spread * spread * 0.08));
    float sheath = exp(-offset * offset / (spread * spread));
    float halo = exp(-offset * offset / (spread * spread * 9.0));
    float visible = reach - start;
    float soft = max(visible * 0.14, 30.0 * h / 900.0);
    float cut = 1.0 - smoothstep(reach - soft, reach, r);
    float along = clamp((r - start) / visible, 0.0, 1.0);
    float body = mix(1.0, 0.55, along);
    float streak = 1.0 + 0.35 * gradientNoise(vec2(offset / spread * 1.6 + float(i) * 7.1, r / h * 3.0 - uTime * 0.3));
    light += (core * 1.6 + sheath * mix(0.55, 0.3, uInk) + halo * mix(0.08, 0.0, uInk)) * cut * body * streak * beam.w;
  }
  float source = exp(-max(r - uLean.y, 0.0) / (h * 0.12)) * 0.25;
  light += source * uHaze * exp(-theta * theta * 3.0);
  float tone = 1.0 - exp(-light * 0.55);
  vec3 hdr = palette(tone) * light * 1.25;
  vec3 color;
  if (uInk < 0.5) {
    vec3 glow = 1.0 - exp(-hdr);
    color = 1.0 - (1.0 - uBackground) * (1.0 - glow);
  } else {
    float amount = max(hdr.r, max(hdr.g, hdr.b));
    float coverage = smoothstep(0.02, 0.95, 1.0 - exp(-amount * 1.3));
    vec3 hue = amount > 0.0001 ? hdr / amount : vec3(1.0);
    float grey = dot(hue, vec3(0.299, 0.587, 0.114));
    vec3 pigment = clamp(mix(vec3(grey), hue, 1.12), 0.0, 1.0) * mix(1.0, 0.8, coverage);
    color = uBackground * mix(vec3(1.0), pigment, coverage);
  }
  gl_FragColor = linearToOutputTexel(vec4(color, 1.0));
  float dither = fract(52.9829189 * fract(dot(gl_FragCoord.xy, vec2(0.06711056, 0.00583715))));
  gl_FragColor.rgb += (dither - 0.5) / 255.0;
  gl_FragColor.rgb += (hash21(gl_FragCoord.xy + fract(uTime * 7.13) * 91.7) - 0.5) * uGrain * 0.05;
}
`,
  f = (e, t, a) => Math.min(a, Math.max(t, e)),
  d = e => e <= .04045 ? e / 12.92 : Math.pow((e + .055) / 1.055, 2.4),
  v = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: .08,
        delayChildren: .05
      }
    }
  },
  x = {
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
function Stats17() {
  let e = (0, __mod_50969.I)(),
    t = (0, React.useRef)(null),
    a = (0, React.useRef)(null),
    p = (0, React.useRef)(null),
    g = (0, React.useRef)([]),
    b = (0, React.useRef)(null),
    y = u.length - 1,
    [w, M] = (0, React.useState)(y);
  return (0, React.useEffect)(() => {
    let e = t.current,
      r = a.current,
      l = p.current;
    if (!e || !r || !l) return;
    let n = function (e, t, a, r, l) {
      let n,
        o = e.ownerDocument,
        v = o.defaultView ?? window,
        x = o.createElement("canvas");
      x.setAttribute("aria-hidden", "true"), x.style.cssText = "position:absolute;inset:0;z-index:-1;width:100%;height:100%;display:block;pointer-events:none";
      try {
        n = new __mod_12246.WebGLRenderer({
          canvas: x,
          alpha: !1,
          antialias: !1,
          powerPreference: "high-performance"
        });
      } catch {
        return null;
      }
      e.prepend(x);
      let p = v.matchMedia("(prefers-reduced-motion: reduce)"),
        g = p.matches,
        b = new __mod_2253.qUd(-.5, .5, .5, -.5, 0, 1),
        y = new __mod_2253.Z58(),
        w = new __mod_2253.bdM(1, 1),
        M = Array.from({
          length: 8
        }, () => new __mod_2253.IUQ()),
        k = Array.from({
          length: 8
        }, () => 0),
        E = {
          uResolution: {
            value: new __mod_2253.I9Y(1, 1)
          },
          uTime: {
            value: 0
          },
          uLab: {
            value: c.map(e => {
              var t;
              let a, r, l, n;
              return t = new __mod_2253.Pq0(), r = Math.cbrt(.4122214708 * (a = new __mod_2253.Q1f(e)).r + .5363325363 * a.g + .0514459929 * a.b), l = Math.cbrt(.2119034982 * a.r + .6806995451 * a.g + .1073969566 * a.b), n = Math.cbrt(.0883024619 * a.r + .2817188376 * a.g + .6299787005 * a.b), t.set(.2104542553 * r + .793617785 * l - .0040720468 * n, 1.9779984951 * r - 2.428592205 * l + .4505937099 * n, .0259040371 * r + .7827717662 * l - .808675766 * n);
            })
          },
          uBackground: {
            value: new __mod_2253.Pq0()
          },
          uInk: {
            value: 0
          },
          uBeams: {
            value: M
          },
          uStart: {
            value: k
          },
          uOrigin: {
            value: new __mod_2253.I9Y()
          },
          uLean: {
            value: new __mod_2253.I9Y(0, 0)
          },
          uCount: {
            value: u.length
          },
          uHaze: {
            value: .6
          },
          uGrain: {
            value: .12
          }
        },
        C = new __mod_2253.BKk({
          vertexShader: h,
          fragmentShader: m,
          uniforms: E,
          depthTest: !1,
          depthWrite: !1
        }),
        L = new __mod_2253.eaF(w, C);
      L.frustumCulled = !1, y.add(L);
      let R = o.createElement("canvas").getContext("2d", {
          willReadFrequently: !0
        }),
        B = Math.max(...u.map(e => e.value)),
        z = u.map(() => +!!g),
        I = u.map((e, t) => +(t === l)),
        F = u.map(() => ({
          angle: 0,
          start: 0,
          end: 0,
          width: .02
        })),
        _ = v.matchMedia("(min-width: 768px)"),
        A = !_.matches,
        S = "",
        N = !1,
        P = 0,
        T = 0,
        j = 1,
        O = -1,
        H = 0,
        q = 0,
        U = 0,
        X = !1,
        Y = !1,
        G = !1,
        D = () => {
          if (!R) return !1;
          let a = "rgba(0, 0, 0, 0)";
          for (; e;) {
            let e = v.getComputedStyle(e).backgroundColor;
            if (!/rgba?\(\s*0,\s*0,\s*0,\s*0\s*\)|transparent/.test(e)) {
              a = e;
              break;
            }
            t = e.parentElement;
          }
          R.clearRect(0, 0, 1, 1), R.fillStyle = "#0a0a0a", R.fillStyle = a, R.fillRect(0, 0, 1, 1);
          let [r, l, n] = R.getImageData(0, 0, 1, 1).data,
            o = `${r},${l},${n}`;
          return o !== S && (S = o, E.uBackground.value.set(d(r / 255), d(l / 255), d(n / 255)), N = (.2126 * r + .7152 * l + .0722 * n) / 255 > .5, E.uInk.value = +!!N, !0);
        },
        W = {
          x: 0,
          y: 0
        },
        Q = e => {
          let t = F[e];
          return t.start + (t.end - t.start) * z[e];
        },
        V = () => {
          let r = Math.round(e.clientWidth),
            l = Math.round(e.clientHeight);
          return !(r < 2) && !(l < 2) && (P = r, T = l, j = Math.min(v.devicePixelRatio || 1, 2), n.setPixelRatio(j), n.setSize(P, T, !1), E.uResolution.value.set(P * j, T * j), (() => {
            let r = e.getBoundingClientRect(),
              l = t.getBoundingClientRect(),
              n = a.getBoundingClientRect().bottom - r.top,
              o = l.left - r.left;
            if (A = !_.matches) {
              let e = n + 48,
                t = f((r.height - 40 - e) / u.length, 36, 60),
                a = Math.max(l.width - 104, 120);
              W.x = -(3 * r.width), W.y = e + t * u.length / 2, u.forEach((r, l) => {
                let n = e + t * (l + .5),
                  i = o + a * (.05 + .95 * (r.value / B)),
                  s = Math.atan2(i - W.x, W.y - n),
                  u = -W.x / Math.sin(s),
                  c = Math.hypot(i - W.x, W.y - n);
                F[l] = {
                  angle: s,
                  start: u,
                  end: c,
                  width: 5 / (u + (c - u) / 2)
                };
              }), E.uHaze.value = 0;
            } else {
              let e = .12 * r.height;
              W.x = o + .16 * l.width, W.y = r.height + e;
              let t = n + 84,
                a = l.right - r.left - 56,
                i = f(Math.atan2(a - W.x, W.y - t), .7, 1.08),
                s = u.map((e, t) => i * (-.31 + t / (u.length - 1) * 1.31)),
                c = s.map(r => Math.min((W.y - t) / Math.cos(r), Math.sin(r) > .001 ? (a - W.x) / Math.sin(r) : 1 / 0) - e / Math.cos(r)),
                h = e => .3 + .7 * (u[e].value / B),
                m = Math.max(Math.min(...c.map((e, t) => e / h(t))), 80);
              s.forEach((t, a) => {
                let r = e / Math.cos(t);
                F[a] = {
                  angle: t,
                  start: r,
                  end: r + m * h(a),
                  width: .026
                };
              }), E.uHaze.value = .6;
            }
            E.uOrigin.value.set(W.x * j, (r.height - W.y) * j), E.uLean.value.set(0, (W.y - r.height) * j);
          })(), !0);
        },
        K = () => {
          u.forEach((e, t) => {
            let a = F[t];
            k[t] = a.start * j, M[t].set(a.angle, Q(t) * j, a.width, .5 + (N ? .4 : .7) * I[t]);
          }), E.uTime.value = H, n.render(y, b), u.forEach((e, t) => {
            let a = r[t];
            if (!a) return;
            let l = F[t],
              n = Q(t) + (A ? 12 : 18),
              o = W.x + Math.sin(l.angle) * n,
              i = W.y - Math.cos(l.angle) * n,
              s = A ? "translate(0, -50%)" : "translate(-50%, -100%)";
            a.style.transform = `translate3d(${o.toFixed(1)}px, ${i.toFixed(1)}px, 0) ${s}`, a.style.opacity = String(f((z[t] - .6) / .4, 0, 1));
          });
        },
        Z = () => {
          Y || G || !X || q || (q = v.requestAnimationFrame(J));
        };
      function J(e) {
        if (q = 0, Y || G) return;
        let t = U && e - U < 100 ? Math.min((e - U) / 1e3, .05) : 1 / 60;
        if (U = e, P || V(), !P) return;
        O < 0 && (O = e);
        let a = (e - O) / 1e3;
        u.forEach((e, r) => {
          if (g) z[r] = 1;else {
            let e = f((a - .25 - .16 * r) / 1.3, 0, 1);
            z[r] = 1 - Math.pow(1 - e, 3);
          }
          let l = +(r === l);
          I[r] += (l - I[r]) * (g ? 1 : 1 - Math.exp(-t / .22));
        }), g || (H += t), K();
        let r = z.some(e => e < 1) || I.some((e, t) => Math.abs(e - (t === l)) > .002);
        !g || r ? Z() : U = 0;
      }
      let ee = () => {
          D() && (!q && X && K(), Z());
        },
        et = () => {
          g = p.matches, U = 0, Z();
        },
        ea = e => {
          e.preventDefault(), G = !0, v.cancelAnimationFrame(q), q = 0;
        },
        er = () => {
          G = !1, S = "", D(), Z();
        },
        el = new ResizeObserver(() => {
          V() && (!q && X && K(), Z());
        }),
        en = new IntersectionObserver(([e]) => {
          X = e.isIntersecting, U = 0, Z();
        }, {
          rootMargin: "0px",
          threshold: .25
        }),
        eo = new MutationObserver(ee),
        ei = v.matchMedia("(prefers-color-scheme: dark)");
      return eo.observe(o.documentElement, {
        attributes: !0,
        attributeFilter: ["class", "style", "data-theme"]
      }), ei.addEventListener("change", ee), p.addEventListener("change", et), x.addEventListener("webglcontextlost", ea), x.addEventListener("webglcontextrestored", er), el.observe(e), el.observe(a), en.observe(e), D(), V(), {
        focus: e => {
          $ = f(e, 0, u.length - 1), Z();
        },
        pick: (t, a) => {
          let r = e.getBoundingClientRect(),
            l = Math.atan2(t - r.left - W.x, W.y - (a - r.top)),
            n = 0;
          return F.forEach((e, t) => {
            Math.abs(e.angle - l) < Math.abs(F[n].angle - l) && (n = t);
          }), n;
        },
        destroy: () => {
          Y = !0, v.cancelAnimationFrame(q), eo.disconnect(), el.disconnect(), en.disconnect(), ei.removeEventListener("change", ee), p.removeEventListener("change", et), x.removeEventListener("webglcontextlost", ea), x.removeEventListener("webglcontextrestored", er), w.dispose(), C.dispose(), n.dispose(), x.remove();
        }
      };
    }(e, r, l, g.current, y);
    return b.current = n, () => {
      n?.destroy(), b.current = null;
    };
  }, [y]), (0, React.useEffect)(() => {
    b.current?.focus(w);
  }, [w]), <section ref={t} onPointerMove={e => {
    if ("mouse" !== e.pointerType) return;
    let t = p.current;
    t && b.current && !(e.clientY < t.getBoundingClientRect().bottom) && M(b.current.pick(e.clientX, e.clientY));
  }} onPointerLeave={() => M(y)} className="relative isolate h-[40rem] w-full overflow-hidden bg-white px-4 pt-20 text-neutral-950 dark:bg-neutral-950 dark:text-white sm:px-6 md:h-[48rem] lg:px-8 lg:pt-24"><div ref={a} className="mx-auto w-full max-w-[1400px]"><motion.div ref={p} variants={v} initial={!e && "hidden"} whileInView="show" viewport={{
        once: !0,
        amount: .3
      }} className="max-w-[30rem]"><motion.h2 variants={x} className="text-balance text-[2.25rem] font-medium leading-[1.04] tracking-[-0.04em] sm:text-5xl">$12.7 billion moved this year.</motion.h2><motion.p variants={x} className="mt-5 max-w-[38ch] text-pretty text-base leading-relaxed text-neutral-600 dark:text-neutral-400">Payment volume across the network, every year since launch.</motion.p></motion.div></div><ol aria-label="Payment volume by year" className="absolute inset-0">{u.map((e, t) => {
        let a = t === w;
        return <li ref={e => {
          g.current[t] = e;
        }} tabIndex={0} aria-current={a ? "true" : void 0} onFocus={() => M(t)} onBlur={() => M(y)} style={{
          opacity: 0
        }} className="absolute left-0 top-0 flex items-baseline gap-2 whitespace-nowrap rounded-md outline-none will-change-transform focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current md:flex-col md:items-center md:gap-0 md:text-center"><span className={`text-lg font-medium tracking-[-0.02em] tabular-nums transition-colors duration-300 sm:text-xl lg:text-2xl ${a ? "text-neutral-950 dark:text-white" : "text-neutral-500 dark:text-neutral-400"}`}>${e.value}B</span><span className="text-xs tabular-nums text-neutral-500 md:mt-0.5 lg:text-sm">{e.year}</span></li>;
      })}</ol></section>;
}

export default Stats17;

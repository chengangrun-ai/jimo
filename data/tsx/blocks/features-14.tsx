import * as React from "react";
import * as __mod_50969 from "../_helpers/50969";
import * as __mod_12246 from "../_helpers/12246";
import * as __mod_2253 from "../_helpers/2253";
/**
 * Features 14
 * Pipeline diagram where a file pulses through a field of light, stage by stage
 * slug: features-14
 * category: Features
 * export: Features14
 * deps: motion, three
 * original: ts-tailwind/blocks/features/features-14.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import { motion, AnimatePresence } from "motion/react";

let s = [{
    label: "Upload",
    value: "4.2 MB",
    detail: "RAW, HEIC, PNG or TIFF, straight from your bucket.",
    reach: -.667
  }, {
    label: "Compress",
    value: "580 KB",
    detail: "Perceptual encoding finds the lowest quality anyone can see.",
    reach: 0
  }, {
    label: "Deliver",
    value: "18 ms",
    detail: "AVIF, WebP or JPEG, picked per device from 300 cities.",
    reach: .667
  }],
  c = e => e <= .04045 ? e / 12.92 : Math.pow((e + .055) / 1.055, 2.4),
  d = `
out vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`,
  m = `
precision highp float;
uniform vec2 uResolution;
uniform vec2 uCenter;
uniform vec2 uAxis;
uniform float uEdge;
uniform float uPixelRatio;
uniform float uLineCount;
uniform float uThickness;
uniform float uSpread;
uniform float uGhost;
uniform float uSweep;
uniform float uBreath;
uniform float uTime;
uniform float uEnergy;
uniform vec3 uLine;
uniform vec3 uCore;
uniform float uFlare;
uniform vec3 uAccent;
uniform float uPulse;
uniform float uPulseAmp;
uniform vec3 uFocus;
uniform float uFocusOn;
in vec2 vUv;
out vec4 fragColor;

void main() {
  float unit = 0.5 * uResolution.y;
  vec2 offset = (gl_FragCoord.xy - uCenter) / unit;
  vec2 p = vec2(dot(offset, uAxis), dot(offset, vec2(-uAxis.y, uAxis.x)));
  float spread = uSpread * uBreath;
  float kmax = 2.0 * spread / (uEdge * uEdge + spread * spread);
  float r2 = dot(p, p) + 1e-7;
  float k = 2.0 * p.y / r2 / kmax;
  float phase = k * uLineCount * 0.5 - uSweep;
  float fw = max(fwidth(phase), 1e-5);
  float d = abs(fract(phase + 0.5) - 0.5);
  float widthPx = uThickness * uPixelRatio;
  float line = 1.0 - smoothstep(0.5 * widthPx - 0.5, 0.5 * widthPx + 0.6, d / fw);
  line = mix(line, min(widthPx * fw, 8.0), smoothstep(0.2, 0.5, fw));
  float ak = abs(k);
  float kappaEdge = kmax * 0.92;
  float cx = min(abs(p.x) * kappaEdge, 1.0);
  float edgePx = (1.0 - sqrt(1.0 - cx * cx)) / kappaEdge * unit;
  float yPx = abs(p.y) * unit;
  float cover = clamp(max(edgePx, 0.5 * widthPx) + 0.5 - yPx, 0.0, 1.0);
  float window = cover * (1.0 - smoothstep(0.82, 1.12, yPx / max(edgePx, 4.0)));
  float reach = abs(p.x) / uEdge;
  float band = exp(-pow(yPx / max(spread * unit * 1.5, 1.0), 2.0));
  float ghost = (1.0 - smoothstep(1.0, 2.6, ak)) * smoothstep(0.75, 1.1, ak) * 0.045 * uGhost * smoothstep(0.15, 0.5, reach) * band;
  float heat = exp(-reach * 3.2);
  float signedReach = p.x / uEdge;
  float scan = exp(-pow((signedReach - uPulse) / 0.038, 2.0));
  float spreadAway = smoothstep(0.15, 0.85, yPx / max(edgePx, 4.0));
  float pulse = scan * uPulseAmp * mix(0.12, 1.0, spreadAway);
  float left = 1.0 - smoothstep(-0.6, -0.22, signedReach);
  float middle = exp(-pow(signedReach / 0.2, 2.0));
  float right = smoothstep(0.22, 0.6, signedReach);
  float focus = dot(uFocus, vec3(left, middle, right));
  float dim = mix(1.0, mix(0.3, 1.5, focus), uFocusOn);
  vec3 tint = mix(uLine, uCore, clamp(heat * (1.3 + uFlare * 0.6), 0.0, 1.0));
  tint = mix(tint, uAccent, clamp(scan * uPulseAmp * 1.6, 0.0, 1.0));
  float gain = 1.4 * dim * (1.0 + uEnergy * 0.35 * heat) * (1.0 + uFlare * 0.45) * (1.0 + pulse * 1.7);
  float body = line * (window + ghost);
  fragColor = vec4(tint * body * gain, body * gain);
}
`,
  f = `
precision highp float;
uniform sampler2D uSource;
uniform vec2 uTexel;
uniform float uThreshold;
in vec2 vUv;
out vec4 fragColor;

void main() {
  vec4 c = texture(uSource, vUv + uTexel * vec2(-0.5, -0.5));
  c += texture(uSource, vUv + uTexel * vec2(0.5, -0.5));
  c += texture(uSource, vUv + uTexel * vec2(-0.5, 0.5));
  c += texture(uSource, vUv + uTexel * vec2(0.5, 0.5));
  c *= 0.25;
  float knee = 0.45;
  float soft = clamp(c.a - uThreshold + knee, 0.0, 2.0 * knee);
  soft = soft * soft / (4.0 * knee);
  c *= max(soft, c.a - uThreshold) / max(c.a, 1e-4);
  fragColor = c;
}
`,
  v = `
precision highp float;
uniform sampler2D uSource;
uniform vec2 uStep;
in vec2 vUv;
out vec4 fragColor;

void main() {
  vec4 sum = texture(uSource, vUv) * 0.1964825502;
  sum += (texture(uSource, vUv + uStep * 1.4117647059) + texture(uSource, vUv - uStep * 1.4117647059)) * 0.2969069647;
  sum += (texture(uSource, vUv + uStep * 3.2941176471) + texture(uSource, vUv - uStep * 3.2941176471)) * 0.0944703979;
  sum += (texture(uSource, vUv + uStep * 5.1764705882) + texture(uSource, vUv - uStep * 5.1764705882)) * 0.0103813624;
  fragColor = sum;
}
`,
  h = `
precision highp float;
uniform sampler2D uLines;
uniform sampler2D uGlow;
uniform sampler2D uWide;
uniform vec3 uBackground;
uniform vec3 uInk;
uniform float uGlowAmount;
uniform float uExposure;
uniform float uMode;
in vec2 vUv;
out vec4 fragColor;

vec3 encode(vec3 c) {
  c = clamp(c, 0.0, 1.0);
  return mix(c * 12.92, 1.055 * pow(c, vec3(1.0 / 2.4)) - 0.055, step(vec3(0.0031308), c));
}

void main() {
  vec4 lineSample = texture(uLines, vUv);
  vec4 bloomSample = texture(uGlow, vUv) * 0.8 + texture(uWide, vUv) * 0.18;
  vec3 lines = lineSample.rgb;
  vec3 bloom = bloomSample.rgb;
  vec3 light = lines + bloom * uGlowAmount;
  float grain = (fract(52.9829189 * fract(dot(gl_FragCoord.xy, vec2(0.06711056, 0.00583715)))) - 0.5) / 255.0;
  vec3 color;
  if (uMode < 0.5) {
    vec3 exposed = 1.0 - exp(-light * uExposure);
    color = uBackground + (1.0 - uBackground) * exposed;
  } else {
    float energy = lineSample.a + bloomSample.a * uGlowAmount * 0.4;
    vec3 hue = (lines + bloom * uGlowAmount * 0.4) / max(energy, 1e-4);
    float cover = clamp(1.0 - exp(-energy * uExposure * 1.6), 0.0, 0.94);
    color = mix(uBackground, hue * uInk, cover);
  }
  fragColor = vec4(encode(color) + grain, 1.0);
}
`,
  p = {
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
function Features14() {
  let e = (0, __mod_50969.I)(),
    t = (0, React.useRef)(null),
    a = (0, React.useRef)(null),
    g = (0, React.useRef)([]),
    w = (0, React.useRef)(null),
    [b, k] = (0, React.useState)(null);
  return (0, React.useEffect)(() => {
    let e = t.current,
      u = a.current;
    if (!e || !u) return;
    let l = function (e, t, a) {
      let u,
        l = e.ownerDocument,
        r = l.defaultView ?? window,
        o = l.createElement("canvas");
      o.setAttribute("aria-hidden", "true"), o.style.cssText = "position:absolute;inset:0;z-index:-1;width:100%;height:100%;display:block;pointer-events:none";
      try {
        u = new __mod_12246.WebGLRenderer({
          canvas: o,
          alpha: !1,
          antialias: !1,
          powerPreference: "high-performance"
        });
      } catch {
        return null;
      }
      if (!u.capabilities.isWebGL2) return u.dispose(), null;
      e.prepend(o), u.autoClear = !1;
      let p = u.extensions.has("EXT_color_buffer_float") || u.extensions.has("EXT_color_buffer_half_float") ? __mod_2253.ix0 : __mod_2253.OUM,
        x = r.matchMedia("(prefers-reduced-motion: reduce)"),
        g = x.matches,
        w = new __mod_2253.qUd(-1, 1, 1, -1, 0, 1),
        b = new __mod_2253.bdM(2, 2),
        k = (e, t) => new __mod_2253.BKk({
          glslVersion: __mod_2253.Wdf,
          uniforms: t,
          vertexShader: d,
          fragmentShader: e,
          depthTest: !1,
          depthWrite: !1,
          blending: __mod_2253.XIg
        }),
        y = k(m, {
          uResolution: {
            value: new __mod_2253.I9Y(1, 1)
          },
          uCenter: {
            value: new __mod_2253.I9Y(0, 0)
          },
          uAxis: {
            value: new __mod_2253.I9Y(1, 0)
          },
          uEdge: {
            value: 1.6
          },
          uPixelRatio: {
            value: 1
          },
          uLineCount: {
            value: 22
          },
          uThickness: {
            value: .7
          },
          uSpread: {
            value: .78
          },
          uGhost: {
            value: .4
          },
          uSweep: {
            value: 0
          },
          uBreath: {
            value: 1
          },
          uTime: {
            value: 0
          },
          uEnergy: {
            value: 0
          },
          uLine: {
            value: new __mod_2253.Pq0(.62, .62, .62)
          },
          uCore: {
            value: new __mod_2253.Pq0(1, 1, 1)
          },
          uFlare: {
            value: 0
          },
          uAccent: {
            value: new __mod_2253.Pq0()
          },
          uPulse: {
            value: 2
          },
          uPulseAmp: {
            value: 0
          },
          uFocus: {
            value: new __mod_2253.Pq0()
          },
          uFocusOn: {
            value: 0
          }
        }),
        S = k(f, {
          uSource: {
            value: null
          },
          uTexel: {
            value: new __mod_2253.I9Y(1, 1)
          },
          uThreshold: {
            value: .6
          }
        }),
        P = k(v, {
          uSource: {
            value: null
          },
          uStep: {
            value: new __mod_2253.I9Y()
          }
        }),
        E = k(h, {
          uLines: {
            value: null
          },
          uGlow: {
            value: null
          },
          uWide: {
            value: null
          },
          uBackground: {
            value: new __mod_2253.Pq0(0, 0, 0)
          },
          uInk: {
            value: new __mod_2253.Pq0(.62, .62, .62)
          },
          uGlowAmount: {
            value: .45
          },
          uExposure: {
            value: .75
          },
          uMode: {
            value: 0
          }
        }),
        C = new __mod_2253.eaF(b, y);
      C.frustumCulled = !1;
      let M = new __mod_2253.Z58();
      M.add(C);
      let R = (e, t) => new __mod_2253.nWS(Math.max(1, e), Math.max(1, t), {
          type: p,
          format: __mod_2253.GWd,
          minFilter: __mod_2253.k6q,
          magFilter: __mod_2253.k6q,
          depthBuffer: !1,
          stencilBuffer: !1,
          generateMipmaps: !1
        }),
        A = null,
        F = null,
        T = null,
        U = null,
        L = null,
        B = l.createElement("canvas").getContext("2d", {
          willReadFrequently: !0
        }),
        I = new __mod_2253.Pq0(),
        N = "",
        G = 1,
        j = 1,
        q = 1,
        W = .5,
        _ = .3,
        D = s.map(e => e.reach),
        O = .6,
        Y = 0,
        z = 0,
        V = null,
        X = -1,
        $ = 0,
        K = 0,
        H = !1,
        J = !1,
        Z = !1,
        Q = () => {
          [A, F, T, U, L].forEach(e => e?.dispose()), A = F = T = U = L = null;
        },
        ee = (e, t) => {
          C.material = e, u.setRenderTarget(t), u.render(M, w);
        },
        et = (e, t) => {
          let a = P.uniforms;
          a.uSource.value = e.texture, a.uStep.value.set(1 / e.width, 0), ee(P, t), a.uSource.value = t.texture, a.uStep.value.set(0, 1 / e.height), ee(P, e);
        },
        ea = () => {
          let t;
          if (!B) return !1;
          B.clearRect(0, 0, 1, 1), B.fillStyle = "#0a0a0a";
          let u = "rgba(0, 0, 0, 0)";
          for (; e;) {
            let e = r.getComputedStyle(e).backgroundColor;
            if (!/rgba?\(\s*0,\s*0,\s*0,\s*0\s*\)|transparent/.test(e)) {
              u = e;
              break;
            }
            a = e.parentElement;
          }
          B.fillStyle = u, B.fillRect(0, 0, 1, 1);
          let [l, o, n] = B.getImageData(0, 0, 1, 1).data,
            i = `${l},${o},${n}`;
          if (i === N) return !1;
          N = i;
          let s = (.2126 * l + .7152 * o + .0722 * n) / 255 > .5;
          E.uniforms.uBackground.value.set(c(l / 255), c(o / 255), c(n / 255)), E.uniforms.uMode.value = +!!s;
          let d = [((t = Number.parseInt((s ? "#4f8a00" : "#c6ff3a").slice(1), 16)) >> 16 & 255) / 255, (t >> 8 & 255) / 255, (255 & t) / 255].map(c);
          return y.uniforms.uAccent.value.set(...d), y.uniforms.uLine.value.set(...(s ? [.42, .42, .42] : [.55, .55, .55])), y.uniforms.uCore.value.set(...(s ? [.08, .08, .08] : [1, 1, 1])), !0;
        },
        eu = e => {
          e !== X && (X = e, a.forEach((t, a) => {
            t && (t.dataset.lit = a === e ? "true" : "false");
          }));
        },
        el = () => {
          let e, t;
          if (!A || !F || !T || !U || !L) return;
          let a = G * q,
            u = j * q,
            l = y.uniforms;
          l.uResolution.value.set(a, u), l.uCenter.value.set(a / 2, u * (1 - W)), l.uEdge.value = Math.max(.2, a / 2 / (.5 * u)), l.uSpread.value = _, l.uPixelRatio.value = q, l.uSweep.value = Y, l.uBreath.value = g ? 1 : 1 + .05 * Math.sin(.23 * O), l.uTime.value = O;
          let r = g ? 2 : (e = O % 3.9, t = e => e * e * (3 - 2 * e), e < 1.25 ? -1.2 + 1.13 * t(e / 1.25) : e < 2.05 ? -.07 + (e - 1.25) / .8 * .14 : e < 3.3 ? .07 + 1.13 * t((e - 2.05) / 1.25) : 1.6);
          if (l.uPulse.value = r, l.uPulseAmp.value = g ? 0 : 1 - .6 * z, l.uFocus.value.copy(I), l.uFocusOn.value = z, null !== V) eu(V);else if (g) eu(-1);else {
            let e = -1;
            D.forEach((t, a) => {
              .2 > Math.abs(r - t) && (e = a);
            }), eu(e);
          }
          ee(y, A);
          let o = S.uniforms;
          o.uSource.value = A.texture, o.uTexel.value.set(1 / A.width, 1 / A.height), o.uThreshold.value = .6, ee(S, F), et(F, T), q > 1.4 && et(F, T), o.uSource.value = F.texture, o.uTexel.value.set(4 / A.width, 4 / A.height), o.uThreshold.value = 0, ee(S, U), et(U, L), et(U, L);
          let n = E.uniforms;
          n.uLines.value = A.texture, n.uGlow.value = F.texture, n.uWide.value = U.texture, ee(E, null);
        },
        er = () => {
          J || Z || !H || $ || ($ = r.requestAnimationFrame(eo));
        };
      function eo(e) {
        if ($ = 0, J || Z) return;
        let t = K && e - K < 100 ? Math.min((e - K) / 1e3, .05) : 1 / 60;
        K = e, g || (O += t, Y += .35 * t);
        let a = +(null !== V);
        z += (a - z) * (g ? 1 : 1 - Math.exp(-t / .25)), el(), !g || Math.abs(a - z) > .002 ? er() : K = 0;
      }
      let en = () => {
          let l,
            o,
            n,
            i = e.getBoundingClientRect();
          G = Math.max(1, i.width), j = Math.max(1, i.height), l = e.getBoundingClientRect(), W = ((o = t.getBoundingClientRect()).top + o.height / 2 - l.top) / Math.max(l.height, 1), _ = Math.max(o.height / 2 * .96, 24) / Math.max(l.height / 2, 1), D = Math.max(...(n = a.map((e, t) => {
            if (!e || 0 === e.offsetWidth) return s[t].reach;
            let a = e.getBoundingClientRect();
            return (a.left + a.width / 2 - l.left - l.width / 2) / Math.max(l.width / 2, 1);
          }))) - Math.min(...n) < .2 ? s.map(e => e.reach) : n, q = Math.min(r.devicePixelRatio || 1, 2), u.setPixelRatio(q), u.setSize(G, j, !1);
          let c = Math.round(G * q),
            d = Math.round(j * q);
          Q(), A = R(c, d), F = R(c >> 1, d >> 1), T = R(c >> 1, d >> 1), U = R(c >> 3, d >> 3), L = R(c >> 3, d >> 3), el(), er();
        },
        ei = () => {
          ea() && (!$ && H && el(), er());
        },
        es = () => {
          g = x.matches, K = 0, er();
        },
        ec = e => {
          e.preventDefault(), Z = !0, r.cancelAnimationFrame($), $ = 0;
        },
        ed = () => {
          Z = !1, N = "", ea(), en();
        },
        em = new ResizeObserver(en),
        ef = new IntersectionObserver(([e]) => {
          H = e.isIntersecting, K = 0, er();
        }, {
          rootMargin: "80px"
        }),
        ev = new MutationObserver(ei),
        eh = r.matchMedia("(prefers-color-scheme: dark)");
      return ev.observe(l.documentElement, {
        attributes: !0,
        attributeFilter: ["class", "style", "data-theme"]
      }), eh.addEventListener("change", ei), x.addEventListener("change", es), o.addEventListener("webglcontextlost", ec), o.addEventListener("webglcontextrestored", ed), em.observe(e), em.observe(t), ef.observe(e), ea(), en(), {
        focus: e => {
          V = e, I.set(+(0 === e), +(1 === e), +(2 === e)), null === e && eu(-1), er();
        },
        destroy: () => {
          J = !0, r.cancelAnimationFrame($), ev.disconnect(), em.disconnect(), ef.disconnect(), eh.removeEventListener("change", ei), x.removeEventListener("change", es), o.removeEventListener("webglcontextlost", ec), o.removeEventListener("webglcontextrestored", ed), Q(), b.dispose(), [y, S, P, E].forEach(e => e.dispose()), u.dispose(), o.remove();
        }
      };
    }(e, u, g.current);
    return w.current = l, () => {
      l?.destroy(), w.current = null;
    };
  }, []), (0, React.useEffect)(() => {
    w.current?.focus(b);
  }, [b]), <section ref={t} className="relative isolate w-full overflow-hidden bg-white px-4 py-20 text-neutral-950 dark:bg-neutral-950 dark:text-white sm:px-6 lg:px-8 lg:py-28"><motion.div variants={p} initial={!e && "hidden"} whileInView="show" viewport={{
      once: !0,
      amount: .3
    }} className="mx-auto w-full max-w-[1400px]"><div className="grid gap-5 lg:grid-cols-2 lg:items-end lg:gap-16"><motion.h2 variants={x} className="max-w-[19ch] text-balance text-[2.25rem] font-medium leading-[1.04] tracking-[-0.04em] sm:text-5xl">Every image, at a fraction of the weight.</motion.h2><motion.p variants={x} className="max-w-[44ch] text-pretty text-base leading-relaxed text-neutral-600 lg:justify-self-end dark:text-neutral-400">Upload anything. We compress it in flight and serve the smallest file each screen can show.</motion.p></div><motion.div variants={x} className="relative mt-14 sm:mt-20"><div ref={a} aria-hidden="true" className="relative h-[clamp(12rem,28vw,24rem)] w-full" /><ol className="grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-6">{s.map((e, t) => <li ref={e => {
            g.current[t] = e;
          }} tabIndex={0} onPointerEnter={e => {
            "mouse" === e.pointerType && k(t);
          }} onPointerLeave={() => k(null)} onFocus={() => k(t)} onBlur={() => k(null)} data-lit="false" className="group relative flex cursor-default flex-col rounded-md pt-8 outline-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current sm:items-center sm:pt-10 sm:text-center"><span aria-hidden="true" className="absolute bottom-[calc(100%-1.25rem)] left-1/2 hidden h-[calc(clamp(12rem,28vw,24rem)/2+1.25rem)] w-px -translate-x-1/2 bg-neutral-950/20 transition-colors duration-500 group-data-[lit=true]:bg-[#4f8a00] sm:block dark:bg-white/20 dark:group-data-[lit=true]:bg-[#c6ff3a]" /><span aria-hidden="true" className="absolute left-1/2 top-[calc(-1*clamp(12rem,28vw,24rem)/2-3px)] hidden size-1.5 -translate-x-1/2 rounded-full bg-neutral-950/40 transition-colors duration-500 group-data-[lit=true]:bg-[#4f8a00] sm:block dark:bg-white/50 dark:group-data-[lit=true]:bg-[#c6ff3a]" /><span className="text-sm text-neutral-500">{e.label}</span><span className="mt-2 text-[2.5rem] font-medium leading-none tracking-[-0.04em] tabular-nums transition-colors duration-500 group-data-[lit=true]:text-[#4f8a00] sm:text-5xl dark:group-data-[lit=true]:text-[#c6ff3a]">{e.value}</span><span className="mt-4 max-w-[30ch] text-pretty text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">{e.detail}</span></li>)}</ol></motion.div></motion.div></section>;
}

export default Features14;

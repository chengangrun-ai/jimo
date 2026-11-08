import { motion, AnimatePresence } from "motion/react";
import * as React from "react";
import * as __mod_50969 from "../_helpers/50969";
import * as __mod_12246 from "../_helpers/12246";
import * as __mod_2253 from "../_helpers/2253";
/**
 * Hero 32
 * Camera app hero where a shutter dial stretches traffic into light trails
 * slug: hero-32
 * category: Hero Section
 * export: Hero32
 * deps: lucide-react, motion, three
 * original: ts-tailwind/blocks/hero/hero-32.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import { ArrowRight } from "lucide-react";

let d = [{
    label: "1/15",
    spoken: "one fifteenth of a second"
  }, {
    label: "1/4",
    spoken: "a quarter of a second"
  }, {
    label: "1",
    spoken: "one second"
  }, {
    label: "4",
    spoken: "four seconds"
  }, {
    label: "15",
    spoken: "fifteen seconds"
  }, {
    label: "30",
    spoken: "thirty seconds"
  }],
  c = `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position.xy * 2.0, 0.0, 1.0);
}
`,
  f = `
precision highp float;
#define TRAILS 12
varying vec2 vUv;
uniform vec2 uResolution;
uniform float uTime;
uniform float uPhase;
uniform float uHorizon;
uniform float uPulse;
uniform float uTail;
uniform float uGlow;
uniform float uIntensity;
uniform vec3 uHead;
uniform vec3 uTailLight;
uniform vec3 uBackground;
uniform float uInk;

float falloff(float d, float w) {
  return w / (abs(d) + w);
}

float meander(float x) {
  return atan(sin(x) * 1.8) / atan(1.8);
}

float route(float z) {
  return meander(z * 0.4) + 0.5 * meander(z * 0.24 + 2.0);
}

void main() {
  vec2 uv = (vUv * 2.0 - 1.0) * vec2(uResolution.x / uResolution.y, 1.0);
  float below = uHorizon - uv.y;
  vec3 light = vec3(0.0);
  vec3 dye = vec3(0.0);
  if (below > 0.0005) {
    float depth = 1.2 / below;
    float fade = exp(-depth * 0.16) * smoothstep(0.0, 0.55, below) * smoothstep(0.0, 0.9, below);
    float last = float(TRAILS - 1);
    for (int i = 0; i < TRAILS; i++) {
      float index = float(i);
      float t = index / last;
      float layer = 1.0 + 1.1 * t;
      float groundX = uv.x * depth * layer;
      float z = depth * layer + uTime;
      float away = smoothstep(0.42, 0.58, t);
      float lane = (index - last * 0.5) * 0.24 + (away - 0.5) * 0.2;
      float bend = 0.55 * route(z) * depth * layer;
      float drift = 0.04 * sin(z * 0.7 + index * 2.1);
      float dx = groundX - (lane + bend + drift);
      float direction = away > 0.5 ? 1.0 : -1.0;
      float phase = z * 0.12 - uPhase * direction + index * 0.37 + fract(sin(index * 12.9898) * 43758.5) * 3.0;
      float cycle = fract(phase);
      float head = mix(exp(-cycle * uTail), 1.0, smoothstep(0.985, 1.0, cycle));
      float pxPerUnit = (1.2 / (depth * depth * layer)) * (0.5 * uResolution.y);
      float pulseVis = smoothstep(20.0, 360.0, pxPerUnit / 0.12);
      float mean = (1.0 - exp(-uTail)) / uTail;
      float packet = mix(1.0, mix(mean, head, pulseVis), uPulse);
      float bendPx = pxPerUnit * 6.2831853 / 0.4;
      float resolvable = smoothstep(6.0, 40.0, bendPx);
      float slope = max(length(vec2(dFdx(dx), dFdy(dx))), 1e-6);
      float pixelGround = (2.0 / uResolution.y) * depth * layer;
      float dxPx = dx / slope;
      float corePx = max(0.018 / pixelGround, 1.5);
      float haloPx = max(0.06 / pixelGround, 3.0);
      float line = falloff(dxPx, corePx);
      float soft = falloff(dxPx, haloPx);
      vec3 tint = mix(uHead, uTailLight, away);
      float density = line * line * 2.0 + soft * soft * uGlow;
      light += (tint * density + vec3(pow(line, 4.0)) * mix(1.0, 0.6, away)) * packet * fade * resolvable;
      dye += tint * (density + pow(line, 4.0)) * packet * fade * resolvable;
    }
  }
  light = 1.0 - exp(-light * uIntensity);
  vec3 lit = uBackground + light;
  dye *= uIntensity;
  float amount = max(dye.r, max(dye.g, dye.b));
  float coverage = 1.0 - exp(-amount);
  vec3 pigment = amount > 0.0001 ? dye / amount : vec3(1.0);
  vec3 inked = uBackground * mix(vec3(1.0), pigment * 0.85, coverage);
  gl_FragColor = vec4(clamp(mix(lit, inked, uInk), 0.0, 1.0), 1.0);
}
`,
  m = (e, t, a) => Math.min(a, Math.max(t, e)),
  h = (e, t, a) => e + (t - e) * a,
  x = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: .08,
        delayChildren: .1
      }
    }
  },
  v = {
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
function Hero32() {
  let e = (0, __mod_50969.I)(),
    t = (0, React.useRef)(null),
    a = (0, React.useRef)(null),
    p = (0, React.useRef)(null),
    b = (0, React.useRef)(null),
    [g, w] = (0, React.useState)(3);
  (0, React.useEffect)(() => {
    let e = t.current,
      n = a.current,
      l = p.current;
    if (!e || !n || !l) return;
    let i = function (e, t, a, n) {
      let l,
        i = e.ownerDocument,
        o = i.defaultView ?? window,
        r = i.createElement("canvas");
      r.setAttribute("aria-hidden", "true"), r.style.cssText = "position:absolute;inset:0;width:100%;height:100%;display:block";
      try {
        l = new __mod_12246.WebGLRenderer({
          canvas: r,
          alpha: !1,
          antialias: !1,
          powerPreference: "high-performance"
        });
      } catch {
        return null;
      }
      t.appendChild(r);
      let d = o.matchMedia("(prefers-reduced-motion: reduce)"),
        x = d.matches,
        v = new __mod_2253.qUd(-.5, .5, .5, -.5, 0, 1),
        p = new __mod_2253.Z58(),
        b = new __mod_2253.bdM(1, 1),
        g = e => new __mod_2253.Q1f().setStyle(e, __mod_2253.Zr2),
        w = new __mod_2253.BKk({
          vertexShader: c,
          fragmentShader: f,
          uniforms: {
            uResolution: {
              value: new __mod_2253.I9Y(1, 1)
            },
            uTime: {
              value: 0
            },
            uPhase: {
              value: 0
            },
            uHorizon: {
              value: .1
            },
            uPulse: {
              value: .7
            },
            uTail: {
              value: 4
            },
            uGlow: {
              value: .6
            },
            uIntensity: {
              value: 1
            },
            uHead: {
              value: g("#ffd08a")
            },
            uTailLight: {
              value: g("#ff3326")
            },
            uBackground: {
              value: new __mod_2253.Q1f(0, 0, 0)
            },
            uInk: {
              value: 0
            }
          },
          depthTest: !1,
          depthWrite: !1
        }),
        y = new __mod_2253.eaF(b, w);
      y.frustumCulled = !1, p.add(y);
      let k = i.createElement("canvas").getContext("2d", {
          willReadFrequently: !0
        }),
        P = "",
        j = 0,
        N = 0,
        R = 1,
        z = m(n, 0, 1),
        T = +!!x,
        E = 0,
        L = 0,
        M = 0,
        C = 0,
        S = !1,
        _ = !1,
        G = !1,
        H = () => {
          if (!k) return !1;
          k.clearRect(0, 0, 1, 1), k.fillStyle = "#0a0a0a", k.fillStyle = o.getComputedStyle(e).backgroundColor, k.fillRect(0, 0, 1, 1);
          let [t, a, n] = k.getImageData(0, 0, 1, 1).data,
            l = `${t},${a},${n}`;
          return l !== P && (P = l, w.uniforms.uBackground.value.setRGB(t / 255, a / 255, n / 255, __mod_2253.er$), w.uniforms.uInk.value = +((.2126 * t + .7152 * a + .0722 * n) / 255 > .5), !0);
        },
        A = () => {
          let t = Math.round(e.clientWidth),
            n = Math.round(e.clientHeight),
            i = Math.min(o.devicePixelRatio || 1, 1.5);
          if (t < 2 || n < 2) return !1;
          j = t, N = n, R = i, l.setPixelRatio(R), l.setSize(j, N, !1), w.uniforms.uResolution.value.set(j * R, N * R);
          let r = a.getBoundingClientRect(),
            s = m(r.top - e.getBoundingClientRect().top + .3 * r.height, .18 * N, .5 * N);
          return w.uniforms.uHorizon.value = 1 - 2 * s / N, !0;
        },
        B = () => {
          let e = w.uniforms;
          e.uTime.value = E, e.uPhase.value = L, e.uTail.value = h(18, .55, Math.pow(z, .8)), e.uPulse.value = h(1, .18, z), e.uGlow.value = h(.4, .85, z) * (e.uInk.value > .5 ? .35 : 1), e.uIntensity.value = h(1.6, 1.45, z) * T, l.render(p, v);
        },
        F = () => {
          _ || G || !S || M || (M = o.requestAnimationFrame(U));
        };
      function U(e) {
        if (M = 0, _ || G) return;
        let t = C && e - C < 100 ? Math.min((e - C) / 1e3, .05) : 1 / 60;
        C = e, j || A(), x ? T = 1 : (E += .9 * t, L += .9 * t, T = Math.min(1, T + t / 1.8)), z += (z - z) * (x ? 1 : 1 - Math.exp(-t / .35)), B(), (!x || Math.abs(z - z) > .001) && F();
      }
      let $ = () => {
          H() && (!M && S && B(), F());
        },
        q = () => {
          x = d.matches, C = 0, F();
        },
        V = e => {
          e.preventDefault(), G = !0, o.cancelAnimationFrame(M), M = 0;
        },
        D = () => {
          G = !1, P = "", H(), F();
        },
        O = new ResizeObserver(() => {
          A() && (!M && S && B(), F());
        }),
        W = new IntersectionObserver(([e]) => {
          S = e.isIntersecting, C = 0, F();
        }, {
          rootMargin: "80px"
        }),
        Q = new MutationObserver($),
        X = o.matchMedia("(prefers-color-scheme: dark)");
      return Q.observe(i.documentElement, {
        attributes: !0,
        attributeFilter: ["class", "style", "data-theme"]
      }), X.addEventListener("change", $), d.addEventListener("change", q), r.addEventListener("webglcontextlost", V), r.addEventListener("webglcontextrestored", D), O.observe(e), O.observe(a), W.observe(e), H(), A(), {
        setExposure: e => {
          I = m(e, 0, 1), x && (z = z), !M && S && B(), F();
        },
        destroy: () => {
          _ = !0, o.cancelAnimationFrame(M), Q.disconnect(), O.disconnect(), W.disconnect(), X.removeEventListener("change", $), d.removeEventListener("change", q), r.removeEventListener("webglcontextlost", V), r.removeEventListener("webglcontextrestored", D), b.dispose(), w.dispose(), l.dispose(), r.remove();
        }
      };
    }(e, n, l, 3 / (d.length - 1));
    return b.current = i, () => {
      i?.destroy(), b.current = null;
    };
  }, []), (0, React.useEffect)(() => {
    b.current?.setExposure(g / (d.length - 1));
  }, [g]);
  let y = d[g];
  return <section ref={t} className="relative isolate flex min-h-screen w-full flex-col overflow-hidden bg-white px-4 pb-10 pt-20 text-neutral-950 dark:bg-neutral-950 dark:text-white sm:px-6 sm:pt-24 lg:px-8"><div ref={a} aria-hidden="true" className="absolute inset-0 -z-10" /><motion.div ref={p} variants={x} initial={!e && "hidden"} whileInView="show" viewport={{
      once: !0
    }} className="mx-auto flex w-full max-w-[1400px] flex-col gap-10 [text-shadow:0_0_24px_rgba(255,255,255,0.95)] lg:flex-row lg:items-end lg:justify-between dark:[text-shadow:0_0_24px_rgba(10,10,10,0.95)]"><div className="max-w-[34rem]"><motion.h1 variants={v} className="text-pretty text-[2.5rem] font-medium leading-[1.02] tracking-[-0.045em] sm:text-6xl xl:text-[4.25rem]">Paint the city with traffic.</motion.h1><motion.p variants={v} className="mt-5 max-w-[40ch] text-pretty text-base leading-relaxed text-neutral-600 dark:text-neutral-400">Handheld long exposures on your phone. Slow the shutter and watch the light draw itself.</motion.p><motion.div variants={v} className="mt-8 flex flex-row items-center gap-6"><a href="#" className="inline-flex h-12 items-center justify-center rounded-full bg-neutral-950 px-7 text-sm font-medium text-white transition-colors duration-200 hover:bg-neutral-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950 dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200 dark:focus-visible:outline-white">Get the app</a><a href="#" className="group inline-flex h-12 items-center gap-2 rounded-full text-sm font-medium text-neutral-700 transition-colors duration-200 hover:text-neutral-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current dark:text-neutral-300 dark:hover:text-white">See the gallery<ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" /></a></motion.div></div><motion.div variants={v} className="w-full max-w-[22rem] lg:mb-1"><div className="flex items-baseline justify-between text-sm"><span className="text-neutral-500">Shutter</span><span className="font-medium tabular-nums">{y.label} s</span></div><div className="relative mx-3 mt-3 h-9"><div aria-hidden="true" className="absolute inset-x-0 top-0 flex h-4 items-end justify-between">{Array.from({
              length: (d.length - 1) * 4 + 1
            }, (e, t) => <span className={`w-px bg-current ${t % 4 == 0 ? "h-4 opacity-60" : "h-2 opacity-25"}`} />)}</div><input type="range" min={0} max={d.length - 1} step={1} value={g} onChange={e => w(Number(e.target.value))} aria-label="Shutter speed" aria-valuetext={y.spoken} className="absolute inset-x-0 top-0 h-4 w-full cursor-pointer appearance-none bg-transparent outline-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:w-[3px] [&::-moz-range-thumb]:rounded-none [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:bg-[#ff3326] [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-[3px] [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:bg-[#ff3326]" /><div className="absolute inset-x-0 bottom-0 flex justify-between text-xs tabular-nums">{d.map((e, t) => <button type="button" tabIndex={-1} onClick={() => w(t)} className={`w-0 cursor-pointer whitespace-nowrap transition-colors duration-200 [text-indent:-50%] ${t === g ? "text-neutral-950 dark:text-white" : "text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-200"}`}><span className="inline-block -translate-x-1/2">{e.label}</span></button>)}</div></div></motion.div></motion.div></section>;
}

export default Hero32;

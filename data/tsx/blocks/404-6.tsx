import { motion, AnimatePresence } from "motion/react";
import * as React from "react";
import * as __mod_50969 from "../_helpers/50969";
import * as __mod_2253 from "../_helpers/2253";
import * as __mod_12246 from "../_helpers/12246";
/**
 * 404 6
 * 404 with TV static and a glitch
 * slug: 404-6
 * category: 404
 * export: NotFound6
 * deps: lucide-react, motion, three
 * original: ts-tailwind/blocks/404/404-6.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import { ArrowUpRight, House } from "lucide-react";

let d = `
  varying vec2 vUv;

  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`,
  m = `
  precision highp float;

  varying vec2 vUv;
  uniform vec2 uResolution;
  uniform float uTime;
  uniform float uTheme;
  uniform float uStatic;

  float hash(float n) {
    return fract(sin(n) * 43758.5453123);
  }

  float hash2(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
  }

  float burst(float t, float seed) {
    float cell = floor(t * 0.42 + seed);
    float local = fract(t * 0.42 + seed);
    float gate = step(0.78, hash(cell * 7.13 + seed));
    return gate * smoothstep(0.0, 0.06, local) * (1.0 - smoothstep(0.12, 0.32, local));
  }

  float band(vec2 uv, float t, float seed) {
    float y = hash(floor(t * 0.84 + seed) * 3.7 + seed) * 0.8 + 0.1;
    float h = 0.014 + hash2(vec2(seed, y)) * 0.05;
    return 1.0 - smoothstep(h, h + 0.02, abs(uv.y - y));
  }

  void main() {
    vec2 uv = vUv;
    vec2 aspect = vec2(uResolution.x / max(uResolution.y, 1.0), 1.0);
    vec2 p = (uv - 0.5) * aspect;
    float t = uTime;
    float live = 1.0 - uStatic;

    float burstA = burst(t, 1.0) * live;
    float burstB = burst(t + 3.4, 5.0) * live;
    float bandA = band(uv, t, 2.0) * burstA;
    float bandB = band(uv, t + 7.0, 6.0) * burstB;

    vec2 warped = uv;
    warped.x += (bandA - bandB) * 0.045;
    warped.x += sin(uv.y * 90.0 + t * 2.2) * 0.001 * live;

    float scan = sin(warped.y * uResolution.y * 1.15) * 0.5 + 0.5;
    float grain = hash2(gl_FragCoord.xy * 0.7 + floor(t * 22.0));
    float vignette = smoothstep(1.3, 0.32, length(p * vec2(0.85, 1.12)));
    float calm = smoothstep(0.14, 0.66, length(p));
    float streak = (bandA + bandB) * calm;

    vec3 darkColor = vec3(0.014, 0.015, 0.019);
    darkColor += vec3(0.32, 0.62, 0.70) * (bandA * 0.15 * calm + exp(-abs(p.y) * 4.6) * 0.045);
    darkColor += vec3(0.58, 0.17, 0.42) * bandB * 0.11 * calm;
    darkColor *= 0.8 + scan * 0.09;
    darkColor *= 0.56 + vignette * 0.58;
    darkColor += (grain - 0.5) * 0.028;

    vec3 lightColor = vec3(1.0, 1.0, 1.0);
    lightColor -= vec3(0.03, 0.028, 0.024) * streak * 0.55;
    lightColor -= vec3(0.008) * (1.0 - scan) * 0.5;
    lightColor -= vec3(1.0 - vignette) * 0.022;
    lightColor += (grain - 0.5) * 0.012;

    vec3 color = mix(lightColor, darkColor, uTheme);
    gl_FragColor = vec4(color, 1.0);
  }
`,
  h = [{
    clip: "[clip-path:inset(10%_0_66%_0)]",
    color: "text-cyan-600/60 dark:text-cyan-400/70",
    x: -16
  }, {
    clip: "[clip-path:inset(56%_0_20%_0)]",
    color: "text-cyan-600/60 dark:text-cyan-400/70",
    x: -9
  }, {
    clip: "[clip-path:inset(30%_0_46%_0)]",
    color: "text-fuchsia-600/60 dark:text-fuchsia-400/70",
    x: 14
  }, {
    clip: "[clip-path:inset(76%_0_4%_0)]",
    color: "text-fuchsia-600/60 dark:text-fuchsia-400/70",
    x: 8
  }],
  f = [0, .62, .68, .75, .82, 1],
  v = "text-[6.5rem] sm:text-[10rem] md:text-[13rem] lg:text-[15rem] font-black tracking-[-0.06em] leading-none";
function x() {
  let e = (0, React.useRef)(null),
    t = (0, __mod_50969.I)();
  return (0, React.useEffect)(() => {
    let a,
      r = e.current;
    if (!r) return;
    let i = new __mod_2253.Z58(),
      s = new __mod_2253.qUd(-1, 1, 1, -1, 0, 1),
      l = new __mod_2253.bdM(2, 2),
      n = new __mod_2253.BKk({
        vertexShader: d,
        fragmentShader: m,
        uniforms: {
          uResolution: {
            value: new __mod_2253.I9Y(1, 1)
          },
          uTime: {
            value: 8
          },
          uTheme: {
            value: 1
          },
          uStatic: {
            value: +!!t
          }
        },
        depthWrite: !1,
        depthTest: !1
      }),
      o = new __mod_2253.eaF(l, n);
    i.add(o);
    try {
      a = new __mod_12246.WebGLRenderer({
        alpha: !1,
        antialias: !1
      });
    } catch {
      l.dispose(), n.dispose();
      return;
    }
    a.domElement.className = "absolute inset-0 h-full w-full", r.appendChild(a.domElement);
    let h = window.matchMedia("(prefers-color-scheme: dark)"),
      f = () => {
        let e = document.documentElement.classList;
        return e.contains("dark") ? 1 : e.contains("light") ? 0 : +!!h.matches;
      },
      v = f();
    n.uniforms.uTheme.value = v;
    let x = new __mod_2253.zD7(),
      p = 0,
      g = () => {
        n.uniforms.uTime.value = t ? 8 : x.getElapsedTime();
        let e = n.uniforms.uTheme.value;
        n.uniforms.uTheme.value = t ? v : e + (v - e) * .07, a.render(i, s);
      },
      b = () => {
        g(), p = requestAnimationFrame(b);
      },
      w = () => {
        let e = r.getBoundingClientRect(),
          t = Math.max(1, e.width),
          i = Math.max(1, e.height);
        a.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2)), a.setSize(t, i, !1), n.uniforms.uResolution.value.set(t, i), g();
      },
      k = () => {
        v = f(), t && g();
      },
      y = new MutationObserver(k);
    y.observe(document.documentElement, {
      attributes: !0,
      attributeFilter: ["class"]
    }), h.addEventListener("change", k);
    let C = new ResizeObserver(w);
    return C.observe(r), w(), t || (p = requestAnimationFrame(b)), () => {
      cancelAnimationFrame(p), y.disconnect(), h.removeEventListener("change", k), C.disconnect(), i.remove(o), l.dispose(), n.dispose(), a.dispose(), a.domElement.parentElement === r && r.removeChild(a.domElement);
    };
  }, [t]), <div ref={e} aria-hidden="true" className="pointer-events-none absolute inset-0" />;
}
function p() {
  let e = (0, __mod_50969.I)(),
    t = {
      hidden: {
        opacity: 0,
        y: 18 * !e
      },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: .7,
          ease: [.22, 1, .36, 1]
        }
      }
    };
  return <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-neutral-950 py-16 sm:py-20 px-4 sm:px-6 lg:px-8"><x /><div className="relative z-10 max-w-[1400px] mx-auto w-full"><motion.div variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: .1,
            delayChildren: .05
          }
        }
      }} initial="hidden" animate="visible" className="mx-auto flex max-w-3xl flex-col items-center text-center"><motion.div variants={t} aria-hidden="true" className="relative select-none"><span className={`absolute inset-0 flex items-center justify-center -translate-x-1.5 -translate-y-1.5 sm:-translate-x-2 sm:-translate-y-2 text-transparent [-webkit-text-stroke:1.5px_rgba(23,23,23,0.22)] dark:[-webkit-text-stroke:1.5px_rgba(255,255,255,0.28)] ${v}`}>404</span>{!e && h.map(e => <motion.span animate={{
            x: [0, 0, e.x, -.45 * e.x, 0, 0],
            opacity: [0, 0, 1, 1, 0, 0]
          }} transition={{
            duration: 4.4,
            times: f,
            repeat: 1 / 0,
            ease: "easeInOut"
          }} className={`absolute inset-0 flex items-center justify-center ${e.clip} ${e.color} ${v}`}>404</motion.span>)}<motion.span animate={e ? void 0 : {
            x: [0, 0, 2.5, -2, 0, 0]
          }} transition={{
            duration: 4.4,
            times: f,
            repeat: 1 / 0,
            ease: "easeInOut"
          }} className={`relative flex items-center justify-center text-neutral-900 dark:text-white ${v}`}>404</motion.span></motion.div><motion.h1 variants={t} className="mt-8 sm:mt-10 text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900 dark:text-white text-balance">This channel went dark.</motion.h1><motion.p variants={t} className="mt-4 max-w-md text-base sm:text-lg leading-relaxed text-neutral-600 dark:text-neutral-400 text-pretty">The page you dialed no longer broadcasts. Head back while we trace the signal.</motion.p><motion.div variants={t} className="mt-9 flex w-full flex-col items-center gap-4 sm:w-auto sm:flex-row"><motion.a href="/" whileHover={e ? void 0 : {
            y: -2
          }} whileTap={e ? void 0 : {
            scale: .98
          }} className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-black dark:bg-white px-6 sm:px-8 py-3 sm:py-3.5 text-sm sm:text-base font-medium text-white dark:text-black cursor-pointer hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 dark:focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-neutral-950"><House className="size-4" />Back home</motion.a><a href="/support" className="inline-flex items-center justify-center gap-1.5 rounded-full px-4 py-3 sm:py-3.5 text-sm sm:text-base font-medium text-neutral-600 dark:text-neutral-400 cursor-pointer hover:text-neutral-900 dark:hover:text-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 dark:focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-neutral-950">Contact support<ArrowUpRight className="size-4" /></a></motion.div><motion.p variants={t} aria-hidden="true" className="mt-14 text-[10px] font-medium uppercase tracking-[0.3em] text-neutral-400 dark:text-neutral-600">No carrier · CH 404 · Retry /</motion.p></motion.div></div></section>;
}

export default p;

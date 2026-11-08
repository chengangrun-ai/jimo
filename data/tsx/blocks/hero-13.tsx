import { motion, AnimatePresence } from "motion/react";
import { CircleCheck, CirclePlay, Cloud, CodeXml, Database, Terminal, Zap } from "lucide-react";
import * as __mod_81712 from "../_helpers/81712";
import * as __mod_2253 from "../_helpers/2253";
import * as __mod_3907 from "../_helpers/3907";
/**
 * Hero 13
 * Glow divider hero with floating icons
 * slug: hero-13
 * category: Hero Section
 * export: Hero13
 * deps: @react-three/fiber, lucide-react, motion, three
 * original: ts-tailwind/blocks/hero/hero-13.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let f = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,
  v = `
  uniform float uTime;
  varying vec2 vUv;

  void main() {
    float centerDist = abs(vUv.x - 0.5) * 2.0;

    float coreGlow = exp(-centerDist * 180.0) * 2.5;
    float midGlow = exp(-centerDist * 66.0) * 1.2;
    float outerGlow = exp(-centerDist * 6.0) * 0.5;
    float glow = coreGlow + midGlow + outerGlow;

    float pulse = sin(uTime * 1.5) * 0.08 + 0.92;
    glow *= pulse;

    float scanLine = sin(vUv.y * 60.0 + uTime * 2.0) * 0.02 + 0.98;
    glow *= scanLine;

    vec3 glowColor = vec3(1.0, 0.624, 0.988);

    float edgeDist = abs(vUv.y - 0.5) * 2.0;
    float vertFade = 1.0 - smoothstep(0.2, 0.95, edgeDist);
    glow *= vertFade;

    vec3 colorOut = glowColor * glow;
    float alpha = max(max(colorOut.r, colorOut.g), colorOut.b);
    vec3 normalizedColor = colorOut / max(alpha, 0.001);
    alpha = smoothstep(0.0, 1.0, alpha);

    gl_FragColor = vec4(normalizedColor, alpha);
  }
`,
  g = `
  uniform float uTime;
  varying vec2 vUv;

  void main() {
    float centerDist = abs(vUv.x - 0.5) * 2.0;

    float wideGlow = exp(-centerDist * 3.0) * 0.8;
    float softGlow = exp(-centerDist * 1.0) * 0.4;
    float glow = wideGlow + softGlow;

    float pulse = sin(uTime * 1.2) * 0.1 + 0.9;
    glow *= pulse;

    vec3 glowColor = vec3(1.0, 0.624, 0.988);

    float edgeDistY = abs(vUv.y - 0.5) * 2.0;
    float vertFade = 1.0 - smoothstep(0.0, 1.0, edgeDistY);
    glow *= vertFade;

    float edgeDistX = abs(vUv.x - 0.5) * 2.0;
    float horizFade = 1.0 - smoothstep(0.4, 0.9, edgeDistX);
    glow *= horizFade;

    vec3 colorOut = glowColor * glow;
    float alpha = max(max(colorOut.r, colorOut.g), colorOut.b);
    vec3 normalizedColor = colorOut / max(alpha, 0.001);
    alpha = smoothstep(0.0, 1.0, alpha) * 0.6;

    gl_FragColor = vec4(normalizedColor, alpha);
  }
`;
function w() {
  let e = (0, __mod_81712.C)(),
    t = (0, React.useRef)(e.gl),
    a = (0, React.useRef)(e.camera);
  return (0, React.useEffect)(function () {
    t.current = e.gl, a.current = e.camera;
  }, [e.gl, e.camera]), (0, React.useEffect)(function () {
    let l = e.gl.domElement.parentElement;
    if (!l) return;
    function r() {
      let e = t.current,
        r = a.current;
      if (!e || !r) return;
      let s = l.clientWidth,
        i = l.clientHeight;
      s > 0 && i > 0 && (e.setSize(s, i), r instanceof __mod_2253.ubm && (r.aspect = s / i, r.updateProjectionMatrix()));
    }
    r();
    let s = new ResizeObserver(r);
    s.observe(l);
    let i = setInterval(r, 500);
    return setTimeout(r, 100), setTimeout(r, 300), setTimeout(r, 1e3), function () {
      s.disconnect(), clearInterval(i);
    };
  }, [e.gl]), null;
}
function b() {
  let {
      viewport: e
    } = (0, __mod_81712.C)(),
    t = Math.min(e.width / 7.5, 1);
  return <group scale={[t, 1, 1]}><y /></group>;
}
function y() {
  let e = (0, React.useRef)(null),
    t = (0, React.useRef)(null),
    a = (0, React.useMemo)(() => ({
      uTime: {
        value: 0
      }
    }), []),
    s = (0, React.useMemo)(() => ({
      uTime: {
        value: 0
      }
    }), []);
  return (0, __mod_81712.D)(a => {
    e.current && (e.current.uniforms.uTime.value = a.clock.elapsedTime), t.current && (t.current.uniforms.uTime.value = a.clock.elapsedTime);
  }), <group position={[0, 0, 2]}><mesh position={[0, 0, -.1]}><planeGeometry args={[4, 3]} /><shaderMaterial ref={t} vertexShader={f} fragmentShader={g} uniforms={s} transparent={!0} depthWrite={!1} /></mesh><mesh><planeGeometry args={[.7, 2]} /><shaderMaterial ref={e} vertexShader={f} fragmentShader={v} uniforms={a} transparent={!0} depthWrite={!1} /></mesh><j /></group>;
}
function j() {
  let e = (0, React.useRef)(null),
    t = (0, React.useRef)(new Float32Array(120)),
    a = (0, React.useRef)(new Float32Array(40)),
    s = (0, React.useMemo)(() => {
      let e = new Float32Array(120);
      for (let t = 0; t < 40; t++) {
        let a = (t / 40 - .5) * 1.2;
        e[3 * t] = 0, e[3 * t + 1] = a, e[3 * t + 2] = (.618 * t % 1 - .5) * .1;
      }
      return e;
    }, [40]);
  (0, React.useEffect)(() => {
    let e = t.current,
      l = a.current;
    for (let t = 0; t < 40; t++) {
      let a = t % 2 == 0 ? 1 : -1;
      e[3 * t] = a * (.382 * t % 1 * .012 + .004), e[3 * t + 1] = (.786 * t % 1 - .4) * .006, e[3 * t + 2] = (.214 * t % 1 - .5) * .003, l[t] = .123 * t % 1;
    }
  }, [40]);
  let o = (0, React.useMemo)(() => {
      let e = new __mod_2253.LoY();
      e.setAttribute("position", new __mod_2253.THS(s, 3));
      let t = new Float32Array(40);
      for (let e = 0; e < 40; e++) t[e] = 1;
      return e.setAttribute("aOpacity", new __mod_2253.THS(t, 1)), e;
    }, [s, 40]),
    c = (0, React.useMemo)(() => new __mod_2253.BKk({
      uniforms: {
        uColor: {
          value: new __mod_2253.Q1f("#FF9FFC")
        },
        uFadeDistance: {
          value: 1
        }
      },
      vertexShader: `
        attribute float aOpacity;
        varying float vOpacity;
        varying float vDistance;

        void main() {
          vOpacity = aOpacity;
          vDistance = abs(position.x);

          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = 7.0 * (1.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        uniform vec3 uColor;
        uniform float uFadeDistance;
        varying float vOpacity;
        varying float vDistance;

        void main() {
          float fade = 1.0 - smoothstep(0.0, uFadeDistance, vDistance);

          vec2 center = gl_PointCoord - 0.5;
          float dist = length(center);
          float alpha = 1.0 - smoothstep(0.3, 0.5, dist);

          float finalAlpha = alpha * fade * vOpacity * 1.5;
          gl_FragColor = vec4(uColor * 1.3, finalAlpha);
        }
      `,
      transparent: !0,
      blending: __mod_2253.EZo,
      depthWrite: !1
    }), [1]);
  return (0, __mod_81712.D)(l => {
    if (!e.current) return;
    let r = e.current.geometry.attributes.position,
      s = e.current.geometry.attributes.aOpacity,
      i = r.array,
      n = s.array,
      o = t.current,
      c = a.current;
    for (let e = 0; e < 40; e++) {
      let t = c[e] + .012,
        a = t > 1 ? 0 : t;
      if (c[e] = a, t > 1) {
        i[3 * e] = 0, i[3 * e + 1] = ((e + 10 * l.clock.elapsedTime) % 40 / 40 - .5) * 1.2, i[3 * e + 2] = ((.618 * e + l.clock.elapsedTime) % 1 - .5) * .1;
        let t = e % 2 == 0 ? 1 : -1;
        o[3 * e] = t * ((e + l.clock.elapsedTime) * .382 % 1 * .012 + .004), o[3 * e + 1] = ((e + l.clock.elapsedTime) * .786 % 1 - .4) * .006;
      }
      i[3 * e] += o[3 * e], i[3 * e + 1] += o[3 * e + 1] + 8e-4 * Math.sin(2 * l.clock.elapsedTime + .5 * e), i[3 * e + 2] += o[3 * e + 2];
      let r = Math.abs(i[3 * e]);
      n[e] = Math.max(0, 1 - r / 1);
    }
    r.needsUpdate = !0, s.needsUpdate = !0;
  }), <points ref={e} geometry={o} material={c} />;
}
function k() {
  let e = [{
    Icon: Terminal,
    color: "text-neutral-900 dark:text-white",
    bg: "bg-white dark:bg-neutral-800",
    x: "65%",
    xMob: "20%",
    y: "25%",
    delay: 0
  }, {
    Icon: Cloud,
    color: "text-neutral-900 dark:text-white",
    bg: "bg-white dark:bg-neutral-800",
    x: "80%",
    xMob: "25%",
    y: "45%",
    delay: .2
  }, {
    Icon: Database,
    color: "text-neutral-900 dark:text-white",
    bg: "bg-white dark:bg-neutral-800",
    x: "60%",
    xMob: "15%",
    y: "60%",
    delay: .4
  }, {
    Icon: CodeXml,
    color: "text-neutral-900 dark:text-white",
    bg: "bg-white dark:bg-neutral-800",
    x: "45%",
    xMob: "10%",
    y: "40%",
    delay: .3
  }];
  return <div className="absolute inset-y-0 left-0 w-full sm:w-1/2 pointer-events-none overflow-hidden">{e.map((e, t) => <motion.div className={`absolute p-4 rounded-2xl shadow-lg border border-neutral-200 dark:border-neutral-700 ${e.bg} left-(--x-mob) sm:left-(--x-desk)`} style={{
      top: e.y,
      "--x-mob": e.xMob,
      "--x-desk": e.x
    }} animate={{
      y: [0, -8, 0],
      rotate: [0, 5, -5, 0]
    }} transition={{
      duration: 4 + .5 * t,
      repeat: 1 / 0,
      ease: "easeInOut",
      delay: e.delay
    }}><e.Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${e.color}`} /></motion.div>)}</div>;
}
function N() {
  return <div className="absolute inset-y-0 right-0 w-1/2 pointer-events-none flex items-center pl-8 sm:pl-12"><div className="relative w-full max-w-sm space-y-3"><motion.div initial={{
        opacity: 0,
        x: 20
      }} animate={{
        opacity: 1,
        x: 0
      }} transition={{
        delay: .5,
        duration: .6
      }} className="bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md p-4 rounded-xl shadow-lg border border-neutral-200 dark:border-neutral-800 pointer-events-auto scale-90 sm:scale-100 origin-left"><div className="flex items-center gap-2 mb-2"><div className="p-1 min-w-6 bg-neutral-200 dark:bg-neutral-700 rounded-md"><Zap className="w-4 h-4 text-neutral-900 dark:text-white" /></div><span className="text-xs font-semibold text-neutral-800 dark:text-white truncate">API Response Time Optimization</span></div><p className="text-[10px] text-neutral-500 dark:text-neutral-400 leading-relaxed mb-2 line-clamp-2">Reduced latency by 47% using edge caching and query optimization.</p></motion.div><motion.div initial={{
        opacity: 0,
        x: 20
      }} animate={{
        opacity: 1,
        x: 0
      }} transition={{
        delay: .7,
        duration: .6
      }} className="bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md p-4 rounded-xl shadow-lg border border-neutral-200 dark:border-neutral-800 pointer-events-auto ml-4 sm:ml-6 scale-90 sm:scale-100 origin-left"><div className="flex items-center gap-2 mb-2"><div className="p-1 min-w-6 bg-neutral-200 dark:bg-neutral-700 rounded-md"><CircleCheck className="w-4 h-4 text-neutral-900 dark:text-white" /></div><span className="text-xs font-semibold text-neutral-800 dark:text-white truncate">System Health Check</span></div><ul className="space-y-1 mb-2"><li className="text-[10px] text-neutral-500 dark:text-neutral-400 flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-neutral-300" /> All services operational</li><li className="text-[10px] text-neutral-500 dark:text-neutral-400 flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-neutral-300" /> 99.9% uptime</li></ul></motion.div></div></div>;
}
function D() {
  return <section className="w-full flex items-start lg:items-center px-4 sm:px-6 lg:px-8 bg-white dark:bg-neutral-950"><div className="max-w-[1400px] mx-auto w-full py-12"><div className="relative w-full flex flex-col items-center justify-start overflow-hidden"><div className="relative z-20 text-left sm:text-center max-w-3xl px-4 mb-12 pointer-events-auto"><motion.h1 initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: .6
          }} className="text-4xl sm:text-6xl md:text-6xl text-neutral-900 dark:text-white mb-4 tracking-tight">Ship faster, build better.</motion.h1><motion.p initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: .6,
            delay: .2
          }} className="text-base tracking-tight sm:text-lg text-neutral-600 dark:text-neutral-400 mb-8 max-w-lg mx-0 sm:mx-auto">Transform your development workflow with intelligent automation and real-time insights that help teams deploy with confidence.</motion.p><motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: .6,
            delay: .4
          }} className="flex flex-col sm:flex-row items-start sm:items-center justify-start sm:justify-center gap-4 w-full"><button className="flex items-center gap-2 text-neutral-900 dark:text-white font-medium hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors text-sm sm:text-base cursor-pointer">View Demo <CirclePlay className="w-4 h-4 sm:w-5 sm:h-5" /></button><button className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 bg-neutral-950 dark:bg-white text-white dark:text-neutral-950 rounded-full font-medium shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 text-sm sm:text-base cursor-pointer">Start Building</button></motion.div><motion.div initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            delay: .8
          }} className="mt-6 flex items-center justify-start sm:justify-center gap-2"><div className="flex -space-x-2">{[1, 2, 3, 4].map(e => <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-white dark:border-neutral-950 bg-neutral-300 dark:bg-neutral-700 flex items-center justify-center"><span className="text-[8px] sm:text-xs text-neutral-600 dark:text-neutral-400">{e}</span></div>)}</div><div className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400"><span className="text-yellow-500">★★★★★</span> trusted by 5,000+ developers</div></motion.div></div><div className="relative w-full max-w-5xl mx-auto h-[400px] sm:h-[500px] -mt-10 sm:-mt-[60px]"><div className="absolute inset-0 z-20 pointer-events-none"><__mod_3907.Hl camera={{
              position: [0, 0, 5],
              fov: 45
            }}><w /><React.Suspense fallback={null}><b /></React.Suspense></__mod_3907.Hl></div><div className="absolute inset-0 z-10 pointer-events-none"><k /><N /></div></div><div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-white dark:from-neutral-950 to-transparent z-30 sm:hidden" /></div></div></section>;
}

export { D as Hero13 };
export default D;

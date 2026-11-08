import { motion, AnimatePresence } from "motion/react";
import { ArrowRight } from "lucide-react";
import * as __mod_2253 from "../_helpers/2253";
import * as __mod_81712 from "../_helpers/81712";
import * as __mod_22373 from "../_helpers/22373";
import * as __mod_3907 from "../_helpers/3907";
/**
 * Hero 7
 * 3D rotating carousel with a glow bar
 * slug: hero-7
 * category: Hero Section
 * export: Hero7
 * deps: @react-three/drei, @react-three/fiber, lucide-react, motion, three
 * original: ts-tailwind/blocks/hero/hero-7.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let u = `
  varying vec2 vUv;
  varying vec3 vWorldPosition;

  void main() {
    vUv = uv;
    vec4 worldPos = modelMatrix * vec4(position, 1.0);
    vWorldPosition = worldPos.xyz;
    gl_Position = projectionMatrix * viewMatrix * worldPos;
  }
`,
  h = `
  uniform sampler2D uTexture;
  uniform vec2 uResolution;
  uniform float uBarWidth;

  varying vec2 vUv;
  varying vec3 vWorldPosition;

  float bayerDither(vec2 position) {
    int x = int(mod(position.x, 8.0));
    int y = int(mod(position.y, 8.0));

    int index = x + y * 8;
    float threshold = 0.0;

    if (index == 0) threshold = 0.0/64.0;
    else if (index == 1) threshold = 32.0/64.0;
    else if (index == 2) threshold = 8.0/64.0;
    else if (index == 3) threshold = 40.0/64.0;
    else if (index == 4) threshold = 2.0/64.0;
    else if (index == 5) threshold = 34.0/64.0;
    else if (index == 6) threshold = 10.0/64.0;
    else if (index == 7) threshold = 42.0/64.0;
    else if (index == 8) threshold = 48.0/64.0;
    else if (index == 9) threshold = 16.0/64.0;
    else if (index == 10) threshold = 56.0/64.0;
    else if (index == 11) threshold = 24.0/64.0;
    else if (index == 12) threshold = 50.0/64.0;
    else if (index == 13) threshold = 18.0/64.0;
    else if (index == 14) threshold = 58.0/64.0;
    else if (index == 15) threshold = 26.0/64.0;
    else if (index == 16) threshold = 12.0/64.0;
    else if (index == 17) threshold = 44.0/64.0;
    else if (index == 18) threshold = 4.0/64.0;
    else if (index == 19) threshold = 36.0/64.0;
    else if (index == 20) threshold = 14.0/64.0;
    else if (index == 21) threshold = 46.0/64.0;
    else if (index == 22) threshold = 6.0/64.0;
    else if (index == 23) threshold = 38.0/64.0;
    else if (index == 24) threshold = 60.0/64.0;
    else if (index == 25) threshold = 28.0/64.0;
    else if (index == 26) threshold = 52.0/64.0;
    else if (index == 27) threshold = 20.0/64.0;
    else if (index == 28) threshold = 62.0/64.0;
    else if (index == 29) threshold = 30.0/64.0;
    else if (index == 30) threshold = 54.0/64.0;
    else if (index == 31) threshold = 22.0/64.0;
    else threshold = mod(float(index) * 0.125, 1.0);

    return threshold;
  }

  float roundedRectSDF(vec2 p, vec2 b, float r) {
    vec2 d = abs(p) - b + vec2(r);
    return min(max(d.x, d.y), 0.0) + length(max(d, 0.0)) - r;
  }

  void main() {
    vec4 texColor = texture2D(uTexture, vUv);

    float barTransition = smoothstep(-uBarWidth, uBarWidth, vWorldPosition.x);

    float gray = dot(texColor.rgb, vec3(0.299, 0.587, 0.114));
    vec3 grayscaleColor = vec3(gray);

    vec2 pixelPos = vUv * uResolution;
    float ditherThreshold = bayerDither(pixelPos);

    float levels = 4.0;
    float quantized = floor(gray * levels + ditherThreshold) / levels;
    vec3 ditheredGray = vec3(quantized);

    vec3 finalColor = mix(ditheredGray, texColor.rgb, barTransition);

    vec2 centeredUv = vUv * 2.0 - 1.0;
    float cornerRadius = 0.1;
    float dist = roundedRectSDF(centeredUv, vec2(1.0, 1.0), cornerRadius);
    float alpha = 1.0 - smoothstep(-0.02, 0.02, dist);

    gl_FragColor = vec4(finalColor, alpha * texColor.a);
  }
`,
  f = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,
  m = `
  uniform float uTime;
  varying vec2 vUv;

  void main() {
    float centerDist = abs(vUv.x - 0.5) * 2.0;

    float coreGlow = exp(-centerDist * 60.0) * 2.5;
    float midGlow = exp(-centerDist * 12.0) * 1.2;
    float outerGlow = exp(-centerDist * 4.0) * 0.5;
    float glow = coreGlow + midGlow + outerGlow;

    float pulse = sin(uTime * 1.5) * 0.08 + 0.92;
    glow *= pulse;

    float scanLine = sin(vUv.y * 60.0 + uTime * 2.0) * 0.02 + 0.98;
    glow *= scanLine;

    vec3 glowColor = vec3(1.0, 0.624, 0.988);

    float edgeDist = abs(vUv.y - 0.5) * 2.0;
    float vertFade = 1.0 - smoothstep(0.2, 0.95, edgeDist);
    glow *= vertFade;

    gl_FragColor = vec4(glowColor * glow, glow);
  }
`,
  x = ["https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80", "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80", "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80", "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&q=80", "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&q=80", "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80", "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80", "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80", "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80"];
function p({
  texture: e,
  index: t,
  totalItems: r,
  rotationRef: s,
  radius: l
}) {
  let d = (0, React.useRef)(null),
    c = (0, React.useRef)(null),
    f = (0, React.useMemo)(() => ({
      uTexture: {
        value: e
      },
      uResolution: {
        value: new __mod_2253.I9Y(400, 300)
      },
      uBarWidth: {
        value: .1
      }
    }), [e]);
  return (0, __mod_81712.D)(() => {
    if (!d.current) return;
    let e = ((2 * Math.PI / r * t + s.current) % (2 * Math.PI) + 3 * Math.PI) % (2 * Math.PI) - Math.PI,
      i = Math.sin(e) * l,
      o = -Math.cos(e) * l + .1 * l;
    d.current.position.set(i, 0, o), d.current.rotation.y = -e;
    let a = Math.abs(e) > .7 * Math.PI;
    d.current.visible = !a;
  }), <mesh ref={d}><planeGeometry args={[3, 2]} /><shaderMaterial ref={c} vertexShader={u} fragmentShader={h} uniforms={f} transparent={!0} side={__mod_2253.$EB} /></mesh>;
}
function v() {
  let e = (0, React.useRef)(null),
    t = (0, React.useRef)(new Float32Array(240)),
    r = (0, React.useRef)(new Float32Array(80)),
    s = (0, React.useMemo)(() => {
      let e = new Float32Array(240);
      for (let t = 0; t < 80; t++) {
        let r = (t / 80 - .5) * 1.2;
        e[3 * t] = 0, e[3 * t + 1] = r, e[3 * t + 2] = (.618 * t % 1 - .5) * .1;
      }
      return e;
    }, [80]);
  (0, React.useEffect)(() => {
    let e = t.current,
      i = r.current;
    for (let t = 0; t < 80; t++) {
      let r = t % 2 == 0 ? 1 : -1;
      e[3 * t] = r * (.382 * t % 1 * .012 + .004), e[3 * t + 1] = (.786 * t % 1 - .4) * .006, e[3 * t + 2] = (.214 * t % 1 - .5) * .003, i[t] = .123 * t % 1;
    }
  }, [80]);
  let l = (0, React.useMemo)(() => {
      let e = new __mod_2253.LoY();
      e.setAttribute("position", new __mod_2253.THS(s, 3));
      let t = new Float32Array(80);
      for (let e = 0; e < 80; e++) t[e] = 1;
      return e.setAttribute("aOpacity", new __mod_2253.THS(t, 1)), e;
    }, [s]),
    d = (0, React.useMemo)(() => new __mod_2253.BKk({
      uniforms: {
        uColor: {
          value: new __mod_2253.Q1f("#FF9FFC")
        },
        uFadeDistance: {
          value: .4
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
          gl_PointSize = 20.0 * (1.0 / -mvPosition.z);
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

          gl_FragColor = vec4(uColor, alpha * fade * vOpacity * 0.8);
        }
      `,
      transparent: !0,
      blending: __mod_2253.EZo,
      depthWrite: !1
    }), [.4]);
  return (0, __mod_81712.D)(i => {
    if (!e.current) return;
    let o = e.current.geometry.attributes.position,
      s = e.current.geometry.attributes.aOpacity,
      l = o.array,
      a = s.array,
      n = t.current,
      d = r.current;
    for (let e = 0; e < 80; e++) {
      let t = d[e] + .012,
        r = t > 1 ? 0 : t;
      if (d[e] = r, t > 1) {
        l[3 * e] = 0, l[3 * e + 1] = ((e + 10 * i.clock.elapsedTime) % 80 / 80 - .5) * 1.2, l[3 * e + 2] = ((.618 * e + i.clock.elapsedTime) % 1 - .5) * .1;
        let t = e % 2 == 0 ? 1 : -1;
        n[3 * e] = t * ((e + i.clock.elapsedTime) * .382 % 1 * .012 + .004), n[3 * e + 1] = ((e + i.clock.elapsedTime) * .786 % 1 - .4) * .006;
      }
      l[3 * e] += n[3 * e], l[3 * e + 1] += n[3 * e + 1] + 8e-4 * Math.sin(2 * i.clock.elapsedTime + .5 * e), l[3 * e + 2] += n[3 * e + 2];
      let o = Math.abs(l[3 * e]);
      a[e] = Math.max(0, 1 - o / .4);
    }
    o.needsUpdate = !0, s.needsUpdate = !0;
  }), <points ref={e} geometry={l} material={d} />;
}
function g() {
  let e = (0, React.useRef)(null),
    t = (0, React.useMemo)(() => ({
      uTime: {
        value: 0
      }
    }), []);
  return (0, __mod_81712.D)(t => {
    e.current && (e.current.uniforms.uTime.value = t.clock.elapsedTime);
  }), <group position={[0, 0, 2]}><mesh><planeGeometry args={[.7, 2]} /><shaderMaterial ref={e} vertexShader={f} fragmentShader={m} uniforms={t} transparent={!0} depthWrite={!1} /></mesh><v /></group>;
}
function y() {
  let e = (0, React.useRef)(null),
    t = (0, React.useRef)(null),
    {
      gl: r,
      camera: i
    } = (0, __mod_81712.C)();
  return (0, React.useEffect)(() => {
    e.current = r, t.current = i;
  }, [r, i]), (0, React.useEffect)(() => {
    let i = r.domElement.parentElement;
    if (!i) return;
    let o = () => {
      let r = e.current,
        o = t.current;
      if (!r || !o) return;
      let s = i.clientWidth,
        l = i.clientHeight;
      s > 0 && l > 0 && (r.setSize(s, l), o instanceof __mod_2253.ubm && (o.aspect = s / l, o.updateProjectionMatrix()));
    };
    o();
    let s = new ResizeObserver(o);
    s.observe(i);
    let l = setInterval(o, 500);
    return setTimeout(o, 100), setTimeout(o, 300), setTimeout(o, 1e3), () => {
      s.disconnect(), clearInterval(l);
    };
  }, [r]), null;
}
function w() {
  let e = (0, __mod_22373.zo)(x),
    t = (0, React.useRef)(0);
  return (0, __mod_81712.D)(e => {
    t.current = .15 * e.clock.elapsedTime;
  }), <group>{e.map((r, o) => <p texture={r} index={o} totalItems={e.length} rotationRef={t} radius={4.5} />)}<g /></group>;
}
function b() {
  return <group scale={1}><w /></group>;
}
function j() {
  return <mesh><planeGeometry args={[2, 2]} /><meshBasicMaterial color="#1a1a1a" /></mesh>;
}
function M() {
  return <section className="relative w-full min-h-screen bg-white dark:bg-neutral-950 overflow-hidden"><div className="absolute top-0 left-0 right-0 z-20 flex flex-col items-start sm:items-center text-left sm:text-center pt-12 sm:pt-16 md:pt-20 px-4"><motion.h1 initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: .6,
        delay: .1
      }} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-neutral-900 dark:text-white tracking-tight leading-[1.1] max-w-4xl">Transform Your Vision<br />Into Reality</motion.h1><motion.p initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: .6,
        delay: .2
      }} className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-neutral-600 dark:text-neutral-400 max-w-xl leading-relaxed">Bring your creative ideas to life with powerful tools.<br className="hidden sm:block" />No experience required, just imagination.</motion.p><motion.button initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: .6,
        delay: .3
      }} whileHover={{
        scale: 1.02
      }} whileTap={{
        scale: .98
      }} className="w-full sm:w-auto mt-6 sm:mt-8 px-5 sm:px-6 py-2.5 sm:py-3 bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 border border-neutral-300 dark:border-neutral-700 rounded-full text-neutral-900 dark:text-white text-sm sm:text-base font-medium flex items-center justify-center sm:justify-start gap-2 transition-colors cursor-pointer">Get Started<ArrowRight className="w-4 h-4" /></motion.button></div><div className="absolute inset-0 z-10 translate-y-[50px] sm:translate-y-[150px] xl:translate-y-[100px]"><__mod_3907.Hl camera={{
        position: [0, 0, 8],
        fov: 45
      }} dpr={[1, 2]} frameloop="always" gl={{
        alpha: !0,
        antialias: !0,
        powerPreference: "high-performance"
      }} style={{
        background: "transparent"
      }}><y /><React.Suspense fallback={<j />}><b /></React.Suspense></__mod_3907.Hl></div></section>;
}

export { M as Hero7 };
export default M;

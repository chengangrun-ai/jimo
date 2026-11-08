import * as React from "react";
import * as __mod_17192 from "../_helpers/17192";
import * as __mod_32923 from "../_helpers/32923";
import * as __mod_75272 from "../_helpers/75272";
/**
 * Hero 2
 * Curved bento hero with cursor following
 * slug: hero-2
 * category: Hero Section
 * export: Hero2
 * deps: lucide-react, motion
 * original: ts-tailwind/blocks/hero/hero-2.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import { motion, AnimatePresence } from "motion/react";

let d = ({
    children: e,
    delay: t,
    mouseX: a,
    mouseY: n,
    isHovering: d,
    containerRef: c
  }) => {
    let m = (0, React.useRef)(null),
      [x, u] = (0, React.useState)(!1),
      h = (0, __mod_17192.z)((0, __mod_32923.G)(n, e => {
        if (!m.current || !d) return 0;
        let t = m.current.getBoundingClientRect(),
          a = c.current?.getBoundingClientRect();
        return a ? -((e - (t.top + t.height / 2 - a.top)) / a.height * 25) : 0;
      }), {
        stiffness: 200,
        damping: 15
      }),
      p = (0, __mod_17192.z)((0, __mod_32923.G)(a, e => {
        if (!m.current || !d) return 0;
        let t = m.current.getBoundingClientRect(),
          a = c.current?.getBoundingClientRect();
        return a ? (e - (t.left + t.width / 2 - a.left)) / a.width * 25 : 0;
      }), {
        stiffness: 200,
        damping: 15
      });
    return <motion.div ref={m} initial={!x && {
      opacity: 0,
      y: 30
    }} animate={x ? {} : {
      opacity: 1,
      y: 0
    }} transition={{
      duration: .6,
      delay: t
    }} onAnimationComplete={() => u(!0)} style={{
      rotateX: h,
      rotateY: p,
      transformStyle: "preserve-3d"
    }}>{e}</motion.div>;
  },
  c = ({
    image: e,
    className: t,
    delay: a,
    mouseX: r,
    mouseY: i,
    isHovering: l,
    containerRef: n
  }) => <d delay={a} mouseX={r} mouseY={i} isHovering={l} containerRef={n}><div className={`rounded-3xl bg-neutral-200 dark:bg-neutral-800 overflow-hidden relative group hover:bg-neutral-300 dark:hover:bg-neutral-700 transition-colors cursor-pointer ${t}`}><img src={e} alt="Visual" className="w-full h-full object-cover grayscale" /></div></d>,
  m = () => {
    let e = (0, React.useRef)(null);
    return (0, React.useEffect)(() => {
      let t,
        a = e.current;
      if (!a) return;
      let s = a.getContext("2d");
      if (!s) return;
      let r = () => {
          a.width = window.innerWidth, a.height = window.innerHeight;
        },
        i = () => {
          let e = .001 * Date.now(),
            r = document.documentElement.classList.contains("dark");
          ((e, t, a, s, r) => {
            e.clearRect(0, 0, t, a);
            let i = r ? "255, 255, 255" : "0, 0, 0";
            for (let r = 0; r < 3; r++) {
              e.beginPath(), e.lineWidth = 2, e.strokeStyle = `rgba(${i}, ${.05 - .01 * r})`;
              for (let i = 0; i < t; i += 5) {
                let t = .6 * a + 50 * Math.sin(.003 * i + s + 2 * r) + 30 * Math.sin(.007 * i + .5 * s + r) + 120 * r;
                0 === i ? e.moveTo(i, t) : e.lineTo(i, t);
              }
              e.stroke();
            }
          })(s, a.width, a.height, e, r), t = requestAnimationFrame(i);
        };
      return window.addEventListener("resize", r), r(), i(), () => {
        window.removeEventListener("resize", r), cancelAnimationFrame(t);
      };
    }, []), <canvas ref={e} className="absolute inset-0 w-full h-full pointer-events-none" />;
  };
function Hero2() {
  let e = (0, React.useRef)(null),
    [t, a] = (0, React.useState)(!1),
    r = (0, __mod_75272.d)(0),
    i = (0, __mod_75272.d)(0);
  return <section ref={e} onMouseMove={t => {
    if (!e.current) return;
    let a = e.current.getBoundingClientRect();
    r.set(t.clientX - a.left), i.set(t.clientY - a.top);
  }} onMouseEnter={() => {
    a(!0);
  }} onMouseLeave={() => {
    a(!1), r.set(0), i.set(0);
  }} className="w-full flex items-start py-12 px-4 sm:px-6 lg:px-8 bg-white dark:bg-neutral-950 relative overflow-hidden"><m /><div className="absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-white dark:from-neutral-950 to-transparent z-0 pointer-events-none" /><div className="absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-white dark:from-neutral-950 to-transparent z-0 pointer-events-none" /><div className="max-w-[1400px] mx-auto w-full relative z-10"><div className="flex flex-col items-center text-center space-y-6 sm:space-y-8 mb-2"><motion.h1 initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: .6,
          delay: .1
        }} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl tracking-tight font-medium text-neutral-900 dark:text-white leading-[1.15] max-w-2xl">Build better products with powerful analytics</motion.h1><motion.p initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: .6,
          delay: .2
        }} className="text-base sm:text-lg md:text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-xl">Get deep insights into user behavior and make data-driven decisions that accelerate your product growth</motion.p><motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: .6,
          delay: .3
        }} className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto"><motion.button whileHover={{
            scale: 1.02
          }} whileTap={{
            scale: .98
          }} className="px-6 sm:px-8 py-3 sm:py-3.5 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-medium text-sm sm:text-base hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors duration-200 w-full sm:w-auto">Start free trial</motion.button><motion.button whileHover={{
            scale: 1.02
          }} whileTap={{
            scale: .98
          }} className="px-6 sm:px-8 py-3 sm:py-3.5 rounded-full bg-neutral-200 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 font-medium text-sm sm:text-base hover:bg-neutral-300 dark:hover:bg-neutral-700 transition-colors duration-200 flex items-center justify-center gap-2 w-full sm:w-auto group">See how it works</motion.button></motion.div></div><div className="relative"><div className="absolute -left-4 sm:left-0 top-0 bottom-0 w-64 bg-linear-to-r from-white dark:from-neutral-950 to-transparent z-10 pointer-events-none" /><div className="absolute -right-4 sm:right-0 top-0 bottom-0 w-64 bg-linear-to-l from-white dark:from-neutral-950 to-transparent z-10 pointer-events-none" /><div className="-mx-4 sm:mx-0 w-[calc(100%+2rem)] sm:w-full overflow-x-auto scrollbar-hide flex justify-center px-4 sm:px-0" style={{
          perspective: "1000px"
        }}><div className="flex items-end gap-3 sm:gap-4 md:gap-6"><div className="flex flex-col gap-3 sm:gap-4 md:gap-6 flex-1 min-w-[180px]"><c delay={.8} mouseX={r} mouseY={i} isHovering={t} containerRef={e} image="https://images.unsplash.com/photo-1529078155058-5d716f45d604?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="h-60 sm:h-[280px] md:h-80 lg:h-[360px] w-[180px] sm:w-[200px] md:w-[220px] lg:w-60" /><c delay={.85} mouseX={r} mouseY={i} isHovering={t} containerRef={e} image="https://images.unsplash.com/photo-1591696205602-2f950c417cb9?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="h-[60px] sm:h-[70px] md:h-20 lg:h-[90px] w-[180px] sm:w-[200px] md:w-[220px] lg:w-60" /></div><div className="w-[180px] sm:w-[200px] md:w-[220px] lg:w-60"><c delay={.5} mouseX={r} mouseY={i} isHovering={t} containerRef={e} image="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=1851&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="h-60 sm:h-[280px] md:h-80 lg:h-[360px] w-full" /></div><div className="w-[180px] sm:w-[200px] md:w-[220px] lg:w-60"><c delay={.4} mouseX={r} mouseY={i} isHovering={t} containerRef={e} image="https://images.unsplash.com/photo-1664448007527-2c49742dbb24?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="aspect-square w-full" /></div><div className="w-[180px] sm:w-[200px] md:w-[220px] lg:w-60"><c delay={.6} mouseX={r} mouseY={i} isHovering={t} containerRef={e} image="https://images.unsplash.com/photo-1686061594225-3e92c0cd51b0?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="h-60 sm:h-[280px] md:h-80 lg:h-[360px] w-full" /></div><div className="flex flex-col gap-3 sm:gap-4 md:gap-6 flex-1 min-w-[180px]"><c delay={.7} mouseX={r} mouseY={i} isHovering={t} containerRef={e} image="https://images.unsplash.com/photo-1591608516485-a1a53df39498?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="h-60 sm:h-[280px] md:h-80 lg:h-[360px] w-[180px] sm:w-[200px] md:w-[220px] lg:w-60" /><c delay={.75} mouseX={r} mouseY={i} isHovering={t} containerRef={e} image="https://images.unsplash.com/photo-1686061593213-98dad7c599b9?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="h-[60px] sm:h-[70px] md:h-20 lg:h-[90px] w-[180px] sm:w-[200px] md:w-[220px] lg:w-60" /></div></div></div></div></div></section>;
}

export default Hero2;

import * as React from "react";
import * as __mod_75272 from "../_helpers/75272";
import * as __mod_26 from "../_helpers/26";
/**
 * Showcase 2
 * Draggable carousel with 3D hover
 * slug: showcase-2
 * category: Showcase
 * export: Showcase2
 * deps: motion
 * original: ts-tailwind/blocks/showcase/showcase-2.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import { motion, AnimatePresence } from "motion/react";

let o = [{
  id: 1,
  image: "https://cdn.dribbble.com/userupload/46030284/file/8dfdc9a8b09fdbd99b010c1dcb279841.jpg?resize=1024x1693&vertical=center",
  height: "h-[400px]",
  bgColor: "bg-rose-200 dark:bg-rose-900/30"
}, {
  id: 2,
  image: "https://cdn.dribbble.com/userupload/46029941/file/f3b0e906d38980bf48e008f5542a58b5.jpg?resize=1024x1693&vertical=center",
  height: "h-[450px]",
  bgColor: "bg-lime-200 dark:bg-lime-900/30"
}, {
  id: 3,
  image: "https://cdn.dribbble.com/userupload/45777759/file/acf14657b38cd25e64bb16b4f201bef8.jpg?resize=1024x1529&vertical=center",
  height: "h-[420px]",
  bgColor: "bg-blue-200 dark:bg-blue-900/30"
}, {
  id: 4,
  image: "https://cdn.dribbble.com/userupload/46068721/file/3910087a60fe6f781ddae7c14daf1804.jpg?resize=1024x1589&vertical=center",
  height: "h-[380px]",
  bgColor: "bg-neutral-200 dark:bg-neutral-800"
}];
function Showcase2() {
  let [e, t] = (0, React.useState)(!1),
    [a, d] = (0, React.useState)(null),
    [c, u] = (0, React.useState)(0),
    m = (0, __mod_75272.d)(0),
    h = (0, React.useRef)(-20),
    x = (0, React.useRef)(null),
    p = [...o, ...o, ...o, ...o, ...o, ...o];
  return (0, React.useEffect)(() => {
    let e = () => {
      let e = ((window.innerWidth < 640 ? 280 : 320) + 24) * o.length;
      u(e), m.set(-e);
    };
    return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e);
  }, [m]), (0, __mod_26.N)((t, a) => {
    if (c && !e) {
      h.current = .9 * h.current + -2;
      let e = h.current * (a / 1e3);
      m.set(m.get() + e);
      let t = m.get();
      t <= -(2 * c) ? m.set(t + c) : t > 0 && m.set(t - c);
    }
  }), <section className="w-full py-12 px-4 sm:px-6 lg:px-8 bg-white dark:bg-neutral-950"><div className="max-w-[1400px] mx-auto w-full"><motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: !0
      }} transition={{
        duration: .6
      }}><div className="max-w-xl"><p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 mb-4">Featured Work</p><h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-neutral-900 dark:text-white leading-[1.15] mb-8 sm:mb-10">Crafting digital experiences that inspire and engage.</h2><motion.button whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: .95
          }} className="px-8 py-3.5 rounded-full bg-black dark:bg-white text-white dark:text-black font-medium text-sm sm:text-base hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors duration-200">View Projects</motion.button></div></motion.div><div className="relative -mx-4 sm:-mx-6 lg:-mx-8 overflow-hidden py-20"><motion.div ref={x} className="flex items-end gap-6 cursor-grab active:cursor-grabbing" style={{
          x: m
        }} drag="x" onDragStart={() => t(!0)} onDragEnd={(e, a) => {
          t(!1), h.current = a.velocity.x;
        }} dragElastic={.05} dragMomentum={!1}>{p.map((e, t) => <motion.div className={`shrink-0 w-[280px] sm:w-[320px] ${e.height} rounded-2xl overflow-hidden select-none relative pointer-events-auto`} initial={{
            rotateX: 0,
            opacity: 1
          }} animate={a === t ? {
            scale: 1.05,
            rotateX: -15,
            y: -25,
            zIndex: 50
          } : {
            scale: 1,
            rotateX: 0,
            y: 0,
            zIndex: 1
          }} transition={{
            duration: .3,
            ease: "backOut",
            zIndex: {
              delay: .4 * (a !== t)
            }
          }} onMouseEnter={() => d(t)} onMouseLeave={() => d(null)} style={{
            transformPerspective: 1e3
          }}><div className={`w-full h-full ${e.bgColor}`}><img src={e.image} alt="Showcase item" className="w-full h-full object-cover object-top pointer-events-none" draggable="false" /></div></motion.div>)}</motion.div></div></div></section>;
}

export default Showcase2;

import { motion, AnimatePresence } from "motion/react";
import { gsap } from "gsap";
/**
 * CTA 2
 * Full-screen CTA with an image cursor trail
 * slug: cta-2
 * category: Call To Action
 * export: CTA2
 * deps: gsap, motion
 * original: ts-tailwind/blocks/cta/cta-2.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let l = ["https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=600&fit=crop", "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=600&fit=crop", "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=600&fit=crop", "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=600&fit=crop", "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=600&fit=crop", "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&h=600&fit=crop"];
function o() {
  let e = (0, React.useRef)(null),
    t = (0, React.useRef)(0),
    a = (0, React.useRef)({
      x: 0,
      y: 0
    }),
    o = (0, React.useRef)(0),
    d = (0, React.useRef)(null);
  return (0, React.useEffect)(() => {
    let r = r => {
        if (!e.current || !d.current) return;
        let i = d.current.getBoundingClientRect(),
          n = r.clientX - i.left,
          c = r.clientY - i.top,
          u = r.clientX - a.current.x,
          m = r.clientY - a.current.y;
        if (100 > Math.sqrt(u * u + m * m)) return;
        let x = Date.now();
        if (0 !== o.current && x - o.current < 70) return;
        let h = document.createElement("img");
        h.src = l[t.current], h.alt = "", h.className = "absolute pointer-events-none rounded-sm object-cover", h.style.width = "150px", h.style.height = "225px", h.style.left = `${n - 75}px`, h.style.top = `${c - 112.5}px`, e.current.appendChild(h), t.current = (t.current + 1) % l.length, gsap.fromTo(h, {
          opacity: 1,
          scale: 0,
          rotation: gsap.utils.random(-20, 20)
        }, {
          opacity: 1,
          scale: 1,
          duration: .6,
          ease: "back.out(2)"
        }), gsap.to(h, {
          opacity: 1,
          scale: 0,
          duration: .6,
          delay: .6,
          ease: "power2.in",
          onComplete: () => h.remove()
        }), a.current = {
          x: r.clientX,
          y: r.clientY
        }, o.current = x;
      },
      i = d.current;
    if (i) return i.addEventListener("mousemove", r), () => i.removeEventListener("mousemove", r);
  }, []), <section ref={d} className="relative w-full h-screen bg-white dark:bg-neutral-950 overflow-hidden"><div ref={e} className="absolute inset-0 pointer-events-none z-9999" /><div className="flex flex-col items-center justify-center h-full px-4 sm:px-6 lg:px-8"><motion.h1 className="text-4xl sm:text-5xl tracking-tight md:text-6xl lg:text-7xl font-medium text-neutral-900 dark:text-white text-center mb-8 sm:mb-10" initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: .6,
        delay: .2
      }}>Be among the first<br />to try Foodiee</motion.h1><motion.button className="px-8 sm:px-10 py-4 rounded-md bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-medium text-base sm:text-lg hover:bg-neutral-800 dark:hover:bg-neutral-100" style={{
        transition: "background-color 200ms, transform 200ms"
      }} initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: .6,
        delay: .4
      }}>Join Waitlist</motion.button></div><motion.div className="absolute bottom-20 sm:bottom-8 left-6 sm:left-8" initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: .6,
      delay: .6
    }}><p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 uppercase tracking-wider">Currently in Beta</p></motion.div><motion.div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 w-[90%] sm:w-auto flex items-center justify-between sm:justify-center gap-4 sm:gap-6 md:gap-32 bg-white dark:bg-neutral-950 pr-2 pl-4 py-2 rounded-md border border-neutral-300 dark:border-neutral-800 shadow-lg" initial={{
      opacity: 0,
      y: 40
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: .6,
      delay: .7,
      ease: "easeOut"
    }}><button className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors duration-200 font-medium sm:hidden">Sign in</button><div className="hidden sm:flex items-center gap-2"><span className="text-base sm:text-lg font-medium text-neutral-900 dark:text-white">Foodiee</span></div><div className="hidden sm:flex items-center gap-3 sm:gap-4 whitespace-nowrap"><button className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors duration-200 font-medium">Sign in</button><button className="px-4 sm:px-6 py-2 sm:py-2.5 rounded-[5px] bg-orange-400 text-neutral-900 font-medium text-sm sm:text-base hover:bg-lime-300 hover:scale-105" style={{
          transition: "background-color 200ms, transform 200ms"
        }}>Join Waitlist</button></div><button className="px-4 sm:px-6 py-2 sm:py-2.5 rounded-[5px] bg-lime-400 text-neutral-900 font-medium text-sm sm:text-base hover:bg-lime-300 hover:scale-105 sm:hidden" style={{
        transition: "background-color 200ms, transform 200ms"
      }}>Join Waitlist</button></motion.div></section>;
}

export default o;

import * as React from "react";
/**
 * CTA 8
 * Outlined wordmark revealed by the cursor
 * slug: cta-8
 * category: Call To Action
 * export: Cta8
 * deps: motion
 * original: ts-tailwind/blocks/cta/cta-8.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import { motion, AnimatePresence } from "motion/react";

function n() {
  let e = (0, React.useRef)(null),
    t = (0, React.useRef)(null),
    [a, n] = (0, React.useState)({
      x: -9999,
      y: -9999
    }),
    l = (0, React.useRef)({
      x: -9999,
      y: -9999
    }),
    o = (0, React.useRef)({
      x: -9999,
      y: -9999
    }),
    d = (0, React.useRef)(null),
    c = (0, React.useRef)(0);
  (0, React.useEffect)(() => {
    let a = e.current;
    if (!a) return;
    let r = e => {
        let a = t.current;
        if (!a) return;
        let r = a.getBoundingClientRect();
        c.current = performance.now(), d.current = {
          x: e.clientX - r.left,
          y: e.clientY - r.top
        };
      },
      i = () => {
        d.current = null;
      };
    return a.addEventListener("mousemove", r), a.addEventListener("mouseleave", i), () => {
      a.removeEventListener("mousemove", r), a.removeEventListener("mouseleave", i);
    };
  }, []), (0, React.useEffect)(() => {
    let e = 0,
      a = performance.now(),
      r = i => {
        let s = t.current;
        if (s) {
          let e = s.getBoundingClientRect();
          i - c.current > 700 || !d.current ? l.current = {
            x: (.5 - .5 * Math.cos((i - a) % 11e3 / 11e3 * Math.PI * 2)) * e.width,
            y: e.height / 2
          } : d.current && (l.current = d.current), -9999 === o.current.x ? o.current = {
            ...l.current
          } : o.current = {
            x: o.current.x + (l.current.x - o.current.x) * .08,
            y: o.current.y + (l.current.y - o.current.y) * .08
          }, n({
            ...o.current
          });
        }
        e = requestAnimationFrame(r);
      };
    return e = requestAnimationFrame(r), () => cancelAnimationFrame(e);
  }, []);
  let u = `radial-gradient(circle 460px at ${a.x}px ${a.y}px, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.55) 20%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.08) 80%, transparent 100%)`;
  return <section ref={e} className="@container relative w-full min-h-[var(--rb-section-min-h,100vh)] flex flex-col items-center justify-start py-20 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 bg-white dark:bg-neutral-950 overflow-hidden"><div className="relative flex flex-col items-center z-10"><motion.button initial={{
        opacity: 0,
        y: 12
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: !0
      }} transition={{
        duration: .6
      }} whileHover={{
        scale: 1.04
      }} whileTap={{
        scale: .97
      }} className="px-10 py-4 rounded-sm bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 text-base font-medium cursor-pointer">Start creating</motion.button><motion.p initial={{
        opacity: 0,
        y: 8
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: !0
      }} transition={{
        duration: .6,
        delay: .15
      }} className="mt-5 text-sm text-neutral-500 dark:text-neutral-400">Free for 14 days</motion.p></div><div aria-hidden="true" className="pointer-events-none absolute inset-6 sm:inset-8 lg:inset-10 z-0"><span className="absolute -top-1.5 -left-1.5 w-3 h-px bg-neutral-300 dark:bg-neutral-700" /><span className="absolute -top-1.5 -left-1.5 h-3 w-px bg-neutral-300 dark:bg-neutral-700" /><span className="absolute -top-1.5 -right-1.5 w-3 h-px bg-neutral-300 dark:bg-neutral-700" /><span className="absolute -top-1.5 -right-1.5 h-3 w-px bg-neutral-300 dark:bg-neutral-700" /><span className="absolute -bottom-1.5 -left-1.5 w-3 h-px bg-neutral-300 dark:bg-neutral-700" /><span className="absolute -bottom-1.5 -left-1.5 h-3 w-px bg-neutral-300 dark:bg-neutral-700" /><span className="absolute -bottom-1.5 -right-1.5 w-3 h-px bg-neutral-300 dark:bg-neutral-700" /><span className="absolute -bottom-1.5 -right-1.5 h-3 w-px bg-neutral-300 dark:bg-neutral-700" /></div><motion.h2 aria-hidden="true" initial={{
      opacity: 0,
      y: 40
    }} whileInView={{
      opacity: 1,
      y: 0
    }} viewport={{
      once: !0
    }} transition={{
      duration: 1,
      delay: .3,
      ease: [.22, 1, .36, 1]
    }} className="absolute bottom-4 sm:bottom-5 lg:bottom-6 left-0 right-0 text-center font-black leading-[0.85] select-none pointer-events-none dark:hidden" style={{
      fontSize: "clamp(64px, 22cqw, 340px)",
      color: "transparent",
      WebkitTextStroke: "1px rgba(0,0,0,0.18)"
    }}>Horizon</motion.h2><motion.h2 aria-hidden="true" initial={{
      opacity: 0,
      y: 40
    }} whileInView={{
      opacity: 1,
      y: 0
    }} viewport={{
      once: !0
    }} transition={{
      duration: 1,
      delay: .3,
      ease: [.22, 1, .36, 1]
    }} className="absolute bottom-4 sm:bottom-5 lg:bottom-6 left-0 right-0 text-center font-black leading-[0.85] select-none pointer-events-none hidden dark:block" style={{
      fontSize: "clamp(64px, 22cqw, 340px)",
      color: "transparent",
      WebkitTextStroke: "1px rgba(255,255,255,0.16)"
    }}>Horizon</motion.h2><motion.h2 ref={t} initial={{
      opacity: 0,
      y: 40
    }} whileInView={{
      opacity: 1,
      y: 0
    }} viewport={{
      once: !0
    }} transition={{
      duration: 1,
      delay: .3,
      ease: [.22, 1, .36, 1]
    }} className="absolute bottom-4 sm:bottom-5 lg:bottom-6 left-0 right-0 text-center font-black leading-[0.85] select-none pointer-events-none text-neutral-900 dark:text-white" style={{
      fontSize: "clamp(64px, 22cqw, 340px)",
      WebkitMaskImage: u,
      maskImage: u,
      WebkitMaskRepeat: "no-repeat",
      maskRepeat: "no-repeat"
    }}>Horizon</motion.h2></section>;
}

export default n;

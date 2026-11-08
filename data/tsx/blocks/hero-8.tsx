import { motion, AnimatePresence } from "motion/react";
import * as __mod_81106 from "../_helpers/81106";
/**
 * Hero 8
 * Big type with expandable media tiles
 * slug: hero-8
 * category: Hero Section
 * export: Hero8
 * deps: motion
 * original: ts-tailwind/blocks/hero/hero-8.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let n = [{
    url: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=200&fit=crop",
    aspectRatio: 2
  }, {
    url: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=200&h=200&fit=crop",
    aspectRatio: 1
  }, {
    url: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=350&h=200&fit=crop",
    aspectRatio: 1.75
  }, {
    url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=200&h=200&fit=crop",
    aspectRatio: 1
  }],
  o = [{
    url: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=200&h=200&fit=crop",
    aspectRatio: 1
  }, {
    url: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=200&fit=crop",
    aspectRatio: 2
  }, {
    url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=200&h=200&fit=crop",
    aspectRatio: 1
  }, {
    url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=350&h=200&fit=crop",
    aspectRatio: 1.75
  }];
function d({
  leftText: e,
  rightText: t,
  images: a,
  alt: l,
  isInView: n,
  delay: o = 0
}) {
  let [d, c] = (0, React.useState)(!1),
    [m, x] = (0, React.useState)(0),
    u = n || d;
  (0, React.useEffect)(() => {
    let e = setInterval(() => {
      x(e => (e + 1) % a.length);
    }, 5e3);
    return () => clearInterval(e);
  }, [a.length]);
  let h = a[m],
    p = u ? 100 * h.aspectRatio : 0;
  return <><motion.div className="sm:hidden text-2xl font-medium text-neutral-900 dark:text-white leading-tight uppercase tracking-tight text-left w-full" initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: .5,
      delay: o
    }}>{e} {t}</motion.div><div className="hidden sm:flex items-center justify-center gap-x-4 cursor-pointer" onMouseEnter={() => c(!0)} onMouseLeave={() => c(!1)}><motion.span layout={!0} className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-medium text-neutral-900 dark:text-white leading-none uppercase tracking-tight" initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: .5,
        delay: o
      }}>{e}</motion.span><motion.div layout={!0} className="h-[60px] md:h-[70px] lg:h-20 xl:h-[100px] overflow-hidden rounded-md" initial={{
        width: 0,
        opacity: 0
      }} animate={{
        width: p,
        opacity: +!!u
      }} transition={{
        width: {
          duration: .5,
          type: "spring",
          bounce: 0
        },
        opacity: {
          duration: .3
        }
      }}><img src={h.url} alt={l} className="h-full w-full object-cover" /></motion.div><motion.span layout={!0} className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-medium text-neutral-900 dark:text-white leading-none uppercase tracking-tight" initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: .5,
        delay: o + .1
      }}>{t}</motion.span></div></>;
}
function Hero8() {
  let e = (0, React.useRef)(null),
    t = (0, __mod_81106.W)(e, {
      once: !0,
      amount: .1
    }),
    [a, c] = (0, React.useState)(!1);
  (0, React.useEffect)(() => {
    let e = setTimeout(() => {
      c(!0);
    }, 100);
    return () => clearTimeout(e);
  }, []);
  let m = t || a;
  return <section className="w-full min-h-screen flex items-start lg:items-center py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-neutral-950"><div ref={e} className="max-w-[1400px] mx-auto w-full"><div className="flex flex-col items-start sm:items-center space-y-8 sm:space-y-12 lg:space-y-16"><div className="flex flex-col items-start sm:items-center w-full space-y-2 sm:space-y-4"><d leftText="Creating" rightText="Digital" images={n} alt="Creating digital experiences" isInView={m} delay={0} /><d leftText="Building" rightText="Tomorrow" images={o} alt="Building tomorrow" isInView={m} delay={.15} /></div><motion.p className="text-left sm:text-center text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed w-full sm:max-w-2xl" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: .5,
          delay: .4
        }}>We craft exceptional digital products that connect brands with their audiences. From concept to launch, our team delivers innovative solutions.</motion.p><motion.div className="w-full overflow-hidden rounded-lg sm:rounded-xl lg:rounded-2xl" initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: .6,
          delay: .5
        }}><div className="w-full aspect-[16/9] sm:aspect-[21/9] bg-neutral-200 dark:bg-neutral-800"><img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1400&h=600&fit=crop" alt="Team collaboration" className="w-full h-full object-cover" /></div></motion.div></div></div></section>;
}

export default Hero8;

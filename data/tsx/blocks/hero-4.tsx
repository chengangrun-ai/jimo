import * as React from "react";
import * as __mod_21211 from "../_helpers/21211";
import { wpN as __wpN } from "../_helpers/wp-shim";
/**
 * Hero 4
 * Infinite scrolling video marquee
 * slug: hero-4
 * category: Hero Section
 * export: Hero4
 * deps: motion
 * original: ts-tailwind/blocks/hero/hero-4.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import { motion, AnimatePresence } from "motion/react";

var i = __wpN(__mod_21211);
function Hero4() {
  let [e, t] = (0, React.useState)(!1),
    a = (0, React.useRef)(null),
    r = (0, React.useRef)(0),
    o = [{
      id: 1,
      src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      alt: "Video 1"
    }, {
      id: 2,
      src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
      alt: "Video 2"
    }, {
      id: 3,
      src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
      alt: "Video 3"
    }, {
      id: 4,
      src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
      alt: "Video 4"
    }, {
      id: 5,
      src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
      alt: "Video 5"
    }],
    d = [...o, ...o, ...o];
  return (0, React.useEffect)(() => {
    let t,
      s = a.current;
    if (!s) return;
    if (e) {
      r.current = s.scrollLeft;
      return;
    }
    let i = () => {
      r.current += .5;
      let e = s.scrollWidth / 3;
      r.current >= e && (r.current = 0), s.scrollLeft = r.current, t = requestAnimationFrame(i);
    };
    return t = requestAnimationFrame(i), () => {
      cancelAnimationFrame(t);
    };
  }, [e]), <section className="jsx-c12f021053e1107 w-full overflow-hidden flex flex-col items-start justify-start py-12 px-4 sm:px-6 lg:px-8 bg-white dark:bg-neutral-950"><div className="jsx-c12f021053e1107 max-w-[1400px] mx-auto w-full flex flex-col space-y-8 sm:space-y-12"><div className="jsx-c12f021053e1107 flex flex-col space-y-6 sm:space-y-8 max-w-4xl mx-auto mb-28"><motion.div initial={{
          opacity: 0,
          y: -10
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: .6,
          ease: "easeOut"
        }} className="flex items-center"><div className="jsx-c12f021053e1107 flex items-center gap-2"><div className="jsx-c12f021053e1107 w-1.5 h-1.5 rounded-full bg-neutral-900 dark:bg-white" /><span className="jsx-c12f021053e1107 text-sm sm:text-base text-neutral-900 dark:text-white font-medium">Premium streaming</span></div></motion.div><motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: .7,
          delay: .1,
          ease: "easeOut"
        }} className="flex flex-col space-y-3 sm:space-y-4"><h1 className="jsx-c12f021053e1107 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal text-neutral-900 dark:text-white leading-[1.1] md:whitespace-nowrap">Unlimited entertainment, forever.</h1><p className="jsx-c12f021053e1107 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal text-neutral-500 dark:text-neutral-500 leading-[1.1] md:whitespace-nowrap">Watch anywhere, anytime.</p></motion.div><motion.div initial={{
          opacity: 0,
          y: 10
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: .6,
          delay: .3,
          ease: "easeOut"
        }}><button className="jsx-c12f021053e1107 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full bg-black dark:bg-white text-white dark:text-black font-medium text-sm sm:text-base hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]">Start watching free</button></motion.div></div><motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        duration: .8,
        delay: .5,
        ease: "easeOut"
      }} className="w-screen relative left-[calc(-1*var(--scroll-padding))] ml-0" style={{
        "--scroll-padding": "1rem"
      }} onMouseEnter={() => t(!0)} onMouseLeave={() => t(!1)}><div ref={a} style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none"
        }} className="jsx-c12f021053e1107 flex gap-4 overflow-hidden">{d.map((e, t) => <div className="jsx-c12f021053e1107 shrink-0 border border-border/20 w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] h-[280px] sm:h-[360px] md:h-[400px] rounded-lg overflow-hidden bg-neutral-100 dark:bg-neutral-900 relative group"><video src={e.src} autoPlay={!0} loop={!0} muted={!0} playsInline={!0} className="jsx-c12f021053e1107 w-full h-full object-cover" /><div className="jsx-c12f021053e1107 absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" /><div className="jsx-c12f021053e1107 absolute bottom-4 left-4 flex gap-1.5"><div className="jsx-c12f021053e1107 w-1.5 h-1.5 rounded-full bg-white/60" /><div className="jsx-c12f021053e1107 w-1.5 h-1.5 rounded-full bg-white/40" /></div></div>)}</div><div className="jsx-c12f021053e1107 absolute left-0 top-0 bottom-0 w-24 sm:w-32 bg-linear-to-r from-white dark:from-neutral-950 to-transparent pointer-events-none" /><div className="jsx-c12f021053e1107 absolute right-0 top-0 bottom-0 w-24 sm:w-32 bg-linear-to-l from-white dark:from-neutral-950 to-transparent pointer-events-none" /></motion.div></div><style id="c12f021053e1107">{"div.jsx-c12f021053e1107::-webkit-scrollbar{display:none}"}</style></section>;
}

export default Hero4;

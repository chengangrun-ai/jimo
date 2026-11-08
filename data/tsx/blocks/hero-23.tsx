import { motion, AnimatePresence } from "motion/react";
import * as React from "react";
import * as __mod_50969 from "../_helpers/50969";
import * as __mod_19370 from "../_helpers/19370";
/**
 * Hero 23
 * Product hero with a framed water effect
 * slug: hero-23
 * category: Hero Section
 * export: Hero23
 * deps: @paper-design/shaders-react, lucide-react, motion
 * original: ts-tailwind/blocks/hero/hero-23.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import { ArrowRight, Waves } from "lucide-react";

let c = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: .09,
        delayChildren: .06
      }
    }
  },
  m = {
    hidden: {
      opacity: 0,
      y: 20
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: .7,
        ease: [.22, 1, .36, 1]
      }
    }
  },
  x = {
    hidden: {
      opacity: 0,
      y: 26,
      filter: "blur(10px)"
    },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: .85,
        ease: [.22, 1, .36, 1]
      }
    }
  },
  u = {
    hidden: {
      opacity: 0,
      y: 40,
      scale: .98
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: .95,
        ease: [.22, 1, .36, 1]
      }
    }
  };
function Hero23() {
  let e = function () {
      let [e, t] = (0, React.useState)(!0);
      return (0, React.useEffect)(() => {
        let e = window.matchMedia("(prefers-color-scheme: dark)"),
          a = () => {
            let a;
            return t(!!(a = document.documentElement.classList).contains("dark") || !a.contains("light") && e.matches);
          };
        a();
        let s = new MutationObserver(a);
        return s.observe(document.documentElement, {
          attributes: !0,
          attributeFilter: ["class"]
        }), e.addEventListener("change", a), () => {
          s.disconnect(), e.removeEventListener("change", a);
        };
      }, []), e;
    }(),
    t = (0, __mod_50969.I)(),
    a = e ? {
      colorBack: "#0e2a5e",
      colorHighlight: "#6fb8ff"
    } : {
      colorBack: "#1f5fd0",
      colorHighlight: "#bfeeff"
    };
  return <section className="relative flex min-h-screen w-full items-start overflow-hidden bg-white px-4 py-16 dark:bg-neutral-950 sm:px-6 sm:py-20 lg:items-center lg:px-8"><div className="relative z-10 mx-auto flex w-full max-w-[1400px] flex-col items-center"><motion.div variants={c} initial="hidden" whileInView="show" viewport={{
        once: !0,
        margin: "-80px"
      }} className="flex flex-col items-center text-center"><motion.div variants={m} className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3.5 py-1.5 text-xs font-medium text-neutral-700 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-neutral-200"><Waves className="h-3.5 w-3.5 text-sky-500 dark:text-sky-300" />Fluid, in real time</motion.div><motion.h1 variants={x} className="mt-7 max-w-3xl text-4xl font-medium leading-[1.03] tracking-[-0.04em] text-neutral-950 dark:text-white sm:text-6xl md:text-7xl">Motion that feels<br /><span className="text-neutral-500 dark:text-neutral-400">like water.</span></motion.h1><motion.p variants={m} className="mt-6 max-w-xl text-base leading-relaxed text-neutral-600 dark:text-neutral-300 sm:text-lg">Tide is a rendering engine for interfaces that breathe. Ship living surfaces that respond to every scroll, hover, and gesture: at sixty frames a second.</motion.p><motion.div variants={m} className="mt-10 flex w-full flex-col gap-3 sm:w-auto sm:flex-row"><button className="inline-flex w-full cursor-pointer items-center justify-center rounded-full bg-neutral-950 px-6 py-3 text-sm font-medium text-white transition-colors duration-200 hover:bg-neutral-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200 dark:focus-visible:ring-offset-neutral-950 sm:w-auto sm:px-8 sm:py-3.5 sm:text-base">Explore the engine<ArrowRight className="ml-2 h-4 w-4" /></button><button className="inline-flex w-full cursor-pointer items-center justify-center rounded-full border border-neutral-300 bg-white px-6 py-3 text-sm font-medium text-neutral-900 transition-colors duration-200 hover:bg-neutral-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:border-white/20 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 dark:focus-visible:ring-offset-neutral-950 sm:w-auto sm:px-8 sm:py-3.5 sm:text-base">Watch the reel</button></motion.div></motion.div><motion.div variants={u} initial="hidden" whileInView="show" viewport={{
        once: !0,
        margin: "-60px"
      }} className="relative mt-14 w-full sm:mt-16"><div className="relative aspect-[16/11] w-full overflow-hidden rounded-[24px] border border-neutral-200 bg-neutral-100 shadow-2xl shadow-neutral-950/10 dark:border-white/10 dark:bg-neutral-900 dark:shadow-black/50 sm:aspect-[16/8] lg:aspect-[16/6.5] sm:rounded-[28px]"><__mod_19370.EJ className="absolute inset-0 h-full w-full" style={{
            width: "100%",
            height: "100%"
          }} colorBack={a.colorBack} colorHighlight={a.colorHighlight} highlights={.5} layering={.55} edges={.5} caustic={.45} waves={.5} size={.7} fit="cover" scale={1.2} speed={.42 * !t} /><div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(255,255,255,0.28),rgba(255,255,255,0)_60%)] dark:bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(255,255,255,0.12),rgba(255,255,255,0)_60%)]" /><div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(4,10,30,0.5),rgba(4,10,30,0)_42%),linear-gradient(to_bottom,rgba(4,10,30,0.32),rgba(4,10,30,0)_30%)]" /><div aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-[24px] ring-1 ring-inset ring-white/25 dark:ring-white/10 sm:rounded-[28px]" /><div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/30 bg-white/20 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md sm:left-6 sm:top-6"><span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" /><span className="relative inline-flex h-2 w-2 rounded-full bg-white" /></span>Live render</div><div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-end justify-between gap-3 sm:bottom-6 sm:left-6 sm:right-6"><div className="flex flex-col"><span className="text-xs font-medium uppercase tracking-[0.18em] text-white/70">Frame rate</span><span className="mt-0.5 text-2xl font-semibold tracking-tight text-white sm:text-3xl">60 fps</span></div><div className="flex items-center gap-2 rounded-full border border-white/25 bg-white/15 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md">GPU-accelerated · WebGL</div></div></div></motion.div></div></section>;
}

export default Hero23;

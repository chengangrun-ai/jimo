import { motion, AnimatePresence } from "motion/react";
import * as React from "react";
import * as __mod_50969 from "../_helpers/50969";
import * as __mod_41104 from "../_helpers/41104";
/**
 * Hero 22
 * Launch hero over a flowing mesh gradient
 * slug: hero-22
 * category: Hero Section
 * export: Hero22
 * deps: @paper-design/shaders-react, lucide-react, motion
 * original: ts-tailwind/blocks/hero/hero-22.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import { ArrowRight, Sparkles } from "lucide-react";

let c = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: .09,
        delayChildren: .08
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
  };
function Hero22() {
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
    t = (0, __mod_50969.I)();
  return <section className="relative flex min-h-screen w-full items-start overflow-hidden bg-white px-4 py-16 dark:bg-neutral-950 sm:px-6 sm:py-20 lg:items-center lg:px-8"><__mod_41104.Sy className="absolute inset-0 h-full w-full" style={{
      width: "100%",
      height: "100%"
    }} colors={e ? ["#0a0a0a", "#312e9c", "#7c3aed", "#0f3b63", "#0a0a0a"] : ["#ffffff", "#bccdff", "#ffc9df", "#d0bcff", "#eef2ff"]} distortion={.9} swirl={.22} grainMixer={.12} grainOverlay={.04} scale={1.1} speed={.45 * !t} /><div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_52%_46%_at_50%_48%,rgba(255,255,255,0.74),rgba(255,255,255,0.05)_74%),linear-gradient(to_bottom,rgba(255,255,255,0)_52%,rgba(255,255,255,0.84))] dark:hidden" /><div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden bg-[radial-gradient(ellipse_58%_52%_at_50%_46%,rgba(10,10,10,0)_26%,rgba(10,10,10,0.6)_100%),linear-gradient(to_bottom,rgba(10,10,10,0.08)_46%,rgba(10,10,10,0.82))] dark:block" /><motion.div variants={c} initial="hidden" whileInView="show" viewport={{
      once: !0,
      margin: "-80px"
    }} className="relative z-10 mx-auto flex w-full max-w-[1400px] flex-col items-center text-center"><motion.div variants={m} className="inline-flex items-center gap-2 rounded-full border border-neutral-200/80 bg-white/70 px-3.5 py-1.5 text-xs font-medium text-neutral-700 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-white/5 dark:text-neutral-200"><Sparkles className="h-3.5 w-3.5 text-violet-500 dark:text-violet-300" />Aurelia 2.0: now generally available</motion.div><motion.h1 variants={x} className="mt-7 max-w-4xl text-4xl font-medium leading-[1.02] tracking-[-0.04em] text-neutral-950 dark:text-white sm:text-6xl md:text-7xl">Build at the speed<br /><span className="text-neutral-500 dark:text-neutral-400">of daylight.</span></motion.h1><motion.p variants={m} className="mt-6 max-w-xl text-base leading-relaxed text-neutral-600 dark:text-neutral-300 sm:text-lg">Aurelia turns rough ideas into shipping-ready surfaces. One shared workspace where design, code, and content stay perfectly in sync.</motion.p><motion.div variants={m} className="mt-10 flex w-full flex-col gap-3 sm:w-auto sm:flex-row"><button className="inline-flex w-full cursor-pointer items-center justify-center rounded-full bg-neutral-950 px-6 py-3 text-sm font-medium text-white transition-colors duration-200 hover:bg-neutral-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200 dark:focus-visible:ring-offset-neutral-950 sm:w-auto sm:px-8 sm:py-3.5 sm:text-base">Start building<ArrowRight className="ml-2 h-4 w-4" /></button><button className="inline-flex w-full cursor-pointer items-center justify-center rounded-full border border-neutral-300 bg-white/60 px-6 py-3 text-sm font-medium text-neutral-900 backdrop-blur transition-colors duration-200 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:border-white/20 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 dark:focus-visible:ring-offset-neutral-950 sm:w-auto sm:px-8 sm:py-3.5 sm:text-base">Book a walkthrough</button></motion.div><motion.p variants={m} className="mt-8 text-xs text-neutral-500 dark:text-neutral-400">14-day trial · No card required · SOC 2 Type II</motion.p></motion.div></section>;
}

export default Hero22;

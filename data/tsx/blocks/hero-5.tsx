import { motion, AnimatePresence } from "motion/react";
import * as React from "react";
import * as __mod_21211 from "../_helpers/21211";
import { wpN as __wpN } from "../_helpers/wp-shim";
/**
 * Hero 5
 * Gradient orbs with cursor parallax
 * slug: hero-5
 * category: Hero Section
 * export: Hero5
 * deps: lucide-react, motion
 * original: ts-tailwind/blocks/hero/hero-5.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import { ArrowRight } from "lucide-react";

var i = __wpN(__mod_21211);
function Hero5() {
  let e = (0, React.useRef)(null),
    t = (0, React.useRef)({
      x: 0,
      y: 0
    }),
    a = (0, React.useRef)(null);
  return (0, React.useEffect)(() => {
    let s,
      r = e.current;
    if (!r) return;
    let i = r.getContext("2d");
    if (!i) return;
    let l = () => {
      r.width = window.innerWidth, r.height = window.innerHeight;
    };
    l(), window.addEventListener("resize", l);
    let n = [],
      o = [{
        x: .15,
        y: .15
      }, {
        x: .5,
        y: .1
      }, {
        x: .85,
        y: .15
      }, {
        x: .08,
        y: .5
      }, {
        x: .92,
        y: .5
      }, {
        x: .15,
        y: .85
      }, {
        x: .35,
        y: .75
      }, {
        x: .5,
        y: .9
      }, {
        x: .65,
        y: .75
      }, {
        x: .85,
        y: .85
      }, {
        x: .25,
        y: .4
      }, {
        x: .75,
        y: .4
      }],
      d = document.documentElement.classList.contains("dark") ? ["rgba(147, 51, 234, 0.5)", "rgba(59, 130, 246, 0.5)", "rgba(249, 115, 22, 0.4)", "rgba(168, 85, 247, 0.45)", "rgba(96, 165, 250, 0.45)"] : ["rgba(147, 51, 234, 0.35)", "rgba(59, 130, 246, 0.35)", "rgba(249, 115, 22, 0.25)", "rgba(168, 85, 247, 0.3)", "rgba(96, 165, 250, 0.3)"];
    for (let e = 0; e < o.length; e++) {
      let t = o[e];
      n.push({
        x: t.x * r.width,
        y: t.y * r.height,
        vx: (Math.random() - .5) * .25,
        vy: (Math.random() - .5) * .25,
        radius: 150 * Math.random() + 200,
        color: d[e % d.length],
        opacity: .2 * Math.random() + .5,
        parallaxX: 0,
        parallaxY: 0,
        parallaxStrength: .02 + .03 * Math.random()
      });
    }
    let c = a.current;
    if (!c) return;
    let m = e => {
      let a = r.getBoundingClientRect();
      t.current = {
        x: e.clientX - a.left,
        y: e.clientY - a.top
      };
    };
    c.addEventListener("mousemove", m);
    let x = () => {
      i.clearRect(0, 0, r.width, r.height), i.filter = "blur(50px)", n.forEach(e => {
        let a = r.width / 2,
          s = r.height / 2,
          l = (t.current.x - a) * e.parallaxStrength,
          n = (t.current.y - s) * e.parallaxStrength;
        e.parallaxX += (l - e.parallaxX) * .1, e.parallaxY += (n - e.parallaxY) * .1, e.x += e.vx, e.y += e.vy, (e.x < -e.radius || e.x > r.width + e.radius) && (e.vx *= -1), (e.y < -e.radius || e.y > r.height + e.radius) && (e.vy *= -1);
        let o = e.x + e.parallaxX,
          d = e.y + e.parallaxY,
          c = Math.max(0, 1 - .8 * Math.pow(Math.max(Math.abs(o - a) / a, Math.abs(d - s) / s), 2)),
          m = e.color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+),?\s*([\d.]+)?\)/),
          x = m ? m[1] : "147",
          u = m ? m[2] : "51",
          h = m ? m[3] : "234",
          p = m && m[4] ? parseFloat(m[4]) : .5,
          f = i.createRadialGradient(o, d, 0, o, d, e.radius);
        f.addColorStop(0, `rgba(${x}, ${u}, ${h}, ${p * c})`), f.addColorStop(1, "rgba(0, 0, 0, 0)"), i.beginPath(), i.arc(o, d, e.radius, 0, 2 * Math.PI), i.fillStyle = f, i.fill();
      }), i.filter = "none", s = requestAnimationFrame(x);
    };
    return x(), () => {
      cancelAnimationFrame(s), window.removeEventListener("resize", l), c && c.removeEventListener("mousemove", m);
    };
  }, []), <section ref={a} className="jsx-b986a92cf6cceaba w-full min-h-screen relative overflow-hidden"><div className="jsx-b986a92cf6cceaba absolute inset-0 z-0 bg-white dark:bg-[#0a0a0a]" /><canvas ref={e} style={{
      opacity: .8,
      maskImage: "radial-gradient(ellipse 80% 70% at 50% 50%, black 40%, transparent 100%)",
      WebkitMaskImage: "radial-gradient(ellipse 80% 70% at 50% 50%, black 40%, transparent 100%)"
    }} className="jsx-b986a92cf6cceaba absolute inset-0 z-10" /><div className="jsx-b986a92cf6cceaba relative z-20 w-full min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 sm:py-24 md:py-28 lg:py-32"><div className="jsx-b986a92cf6cceaba max-w-[1400px] mx-auto w-full"><div className="jsx-b986a92cf6cceaba relative flex flex-col items-start sm:items-center justify-center text-left sm:text-center space-y-6 sm:space-y-8"><motion.div initial={{
            opacity: 0,
            y: -20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: .6,
            ease: "easeOut"
          }} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-700 dark:text-purple-300 shadow-sm"><div className="jsx-b986a92cf6cceaba w-1.5 h-1.5 rounded-full bg-purple-600 dark:bg-purple-400 animate-pulse" /><span className="jsx-b986a92cf6cceaba text-xs sm:text-sm font-medium">Cloud Infrastructure</span></motion.div><motion.h1 initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: .7,
            delay: .1,
            ease: "easeOut"
          }} className="text-4xl sm:text-5xl md:text-6xl font-medium text-neutral-900 dark:text-white leading-[1.1] tracking-tight max-w-5xl w-full">Deploy Faster. <span className="jsx-b986a92cf6cceaba text-transparent bg-clip-text bg-linear-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400">Scale Smarter.</span></motion.h1><motion.p initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: .7,
            delay: .2,
            ease: "easeOut"
          }} className="text-base sm:text-md text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl w-full">Modern cloud infrastructure that scales with your business and deploys in seconds.</motion.p><motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: .7,
            delay: .3,
            ease: "easeOut"
          }} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-4 w-full sm:w-auto"><button className="jsx-b986a92cf6cceaba cursor-pointer group px-6 sm:px-7 py-2.5 sm:py-3 rounded-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-white font-medium text-sm sm:text-base hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-all duration-300 hover:scale-105 active:scale-95 w-full sm:w-auto shadow-sm">View Pricing</button><button className="jsx-b986a92cf6cceaba cursor-pointer group px-6 sm:px-7 py-2.5 sm:py-3 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-medium text-sm sm:text-base hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95 flex items-center justify-center gap-2 w-full sm:w-auto whitespace-nowrap">Deploy Now<ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300" /></button></motion.div><motion.div initial={{
            opacity: 0,
            y: 40
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: .8,
            delay: .5,
            ease: "easeOut"
          }} className="w-full max-w-5xl mx-auto mt-12 sm:mt-16 md:mt-20"><div className="jsx-b986a92cf6cceaba relative p-px rounded-xl overflow-hidden"><div style={{
                background: "linear-gradient(120deg, rgba(147, 51, 234, 0.5), rgba(59, 130, 246, 0.5), rgba(249, 115, 22, 0.5), rgba(147, 51, 234, 0.5))",
                backgroundSize: "300% 300%",
                animation: "gradientShift 6s ease infinite"
              }} className="jsx-b986a92cf6cceaba absolute inset-0 rounded-xl opacity-70" /><div className="jsx-b986a92cf6cceaba relative rounded-xl overflow-hidden bg-neutral-50/90 dark:bg-neutral-900/90 backdrop-blur-2xl border border-white/20 dark:border-white/10"><div className="jsx-b986a92cf6cceaba h-10 bg-white/50 dark:bg-neutral-800/50 border-b border-neutral-200/50 dark:border-neutral-700/50 flex items-center px-4 gap-2 backdrop-blur-md"><div className="jsx-b986a92cf6cceaba w-3 h-3 rounded-full bg-red-400/80 shadow-sm" /><div className="jsx-b986a92cf6cceaba w-3 h-3 rounded-full bg-yellow-400/80 shadow-sm" /><div className="jsx-b986a92cf6cceaba w-3 h-3 rounded-full bg-green-400/80 shadow-sm" /><div className="jsx-b986a92cf6cceaba ml-4 flex-1 h-6 rounded-md bg-neutral-200/50 dark:bg-neutral-700/50 border border-neutral-200/50 dark:border-neutral-600/50" /></div><div className="jsx-b986a92cf6cceaba aspect-video w-full bg-white/50 dark:bg-black/50 p-1"><img src="https://assets.justinmind.com/wp-content/uploads/2020/02/dashboard-design-example-hcare.png" alt="Product mockup" className="jsx-b986a92cf6cceaba w-full h-full object-cover object-top rounded-lg border border-neutral-200/50 dark:border-neutral-800/50" /></div></div></div></motion.div></div></div></div><style id="b986a92cf6cceaba">{"@keyframes gradientShift{0%{background-position:0%50%}50%{background-position:100%50%}100%{background-position:0%50%}}"}</style></section>;
}

export default Hero5;

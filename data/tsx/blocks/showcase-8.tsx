import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import * as __mod_50969 from "../_helpers/50969";
/**
 * Showcase 8
 * Snap carousel of project cards
 * slug: showcase-8
 * category: Showcase
 * export: Showcase8
 * deps: lucide-react, motion
 * original: ts-tailwind/blocks/showcase/showcase-8.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let c = [{
    title: "Index House",
    client: "Grove & Partners",
    category: "Spatial identity",
    year: "2026"
  }, {
    title: "Ledger",
    client: "Northbeam",
    category: "Product launch",
    year: "2026"
  }, {
    title: "Quiet Channel",
    client: "Aria Broadcasting",
    category: "Content system",
    year: "2025"
  }, {
    title: "Vessel Works",
    client: "Vessel",
    category: "Brand platform",
    year: "2025"
  }, {
    title: "Assembly Nine",
    client: "Assembly",
    category: "Digital flagship",
    year: "2024"
  }],
  u = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: .1
      }
    }
  },
  m = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: .6,
        ease: [.22, 1, .36, 1]
      }
    }
  },
  h = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: .09
      }
    }
  },
  x = {
    hidden: {
      opacity: 0,
      y: 32
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: .65,
        ease: [.22, 1, .36, 1]
      }
    }
  };
function Showcase8() {
  let e = (0, __mod_50969.I)(),
    t = (0, React.useRef)(null),
    a = (0, React.useRef)(0),
    [p, g] = (0, React.useState)(0),
    [b, f] = (0, React.useState)(0),
    [v, w] = (0, React.useState)(!1),
    [y, j] = (0, React.useState)(!0),
    k = (0, React.useCallback)(() => {
      let e = t.current;
      if (!e) return;
      let a = e.scrollWidth - e.clientWidth,
        s = e.scrollLeft;
      f(a > 0 ? Math.min(1, Math.max(0, s / a)) : 0), w(s > 8), j(s < a - 8);
      let i = Array.from(e.children);
      if (!i.length) return;
      let r = i[0].offsetLeft,
        l = 0,
        n = 1 / 0;
      i.forEach((e, t) => {
        let a = Math.abs(e.offsetLeft - r - s);
        a < n && (n = a, l = t);
      }), a - s < 8 && (l = i.length - 1), g(l);
    }, []);
  (0, React.useEffect)(() => (a.current = requestAnimationFrame(k), window.addEventListener("resize", k), () => {
    window.removeEventListener("resize", k), cancelAnimationFrame(a.current);
  }), [k]);
  let N = a => {
    let s,
      i = t.current;
    if (!i) return;
    let r = Array.from(i.children);
    if (!r.length) return;
    let l = r[0].offsetLeft,
      n = i.scrollLeft,
      o = r.map(e => e.offsetLeft - l);
    if (a < 0) {
      for (let e = o.length - 1; e >= 0; e--) if (o[e] < n - 8) {
        s = o[e];
        break;
      }
      void 0 === s && (s = 0);
    } else {
      for (let e = 0; e < o.length; e++) if (o[e] > n + 8) {
        s = o[e];
        break;
      }
      void 0 === s && (s = i.scrollWidth - i.clientWidth);
    }
    i.scrollTo({
      left: s,
      behavior: e ? "auto" : "smooth"
    });
  };
  return <section className="w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-neutral-950"><div className="max-w-[1400px] mx-auto w-full"><motion.div variants={u} initial="hidden" whileInView="visible" viewport={{
        once: !0,
        margin: "-80px"
      }} className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-10 sm:mb-12"><motion.div variants={m} className="max-w-2xl"><h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.05] text-neutral-900 dark:text-white text-balance">A season of shipped work.</h2><p className="mt-5 text-base sm:text-lg leading-relaxed text-neutral-600 dark:text-neutral-400 max-w-xl text-pretty">New identities, platforms, and launch sites: built with the in-house teams who run them now.</p></motion.div><motion.div variants={m} className="flex items-center gap-3"><button type="button" onClick={() => N(-1)} disabled={!v} aria-label="Previous project" className="grid h-11 w-11 place-items-center rounded-full border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-white enabled:hover:bg-neutral-100 dark:enabled:hover:bg-neutral-900 enabled:cursor-pointer disabled:opacity-35 transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 dark:focus-visible:outline-white"><ArrowLeft className="w-4 h-4" /></button><button type="button" onClick={() => N(1)} disabled={!y} aria-label="Next project" className="grid h-11 w-11 place-items-center rounded-full border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-white enabled:hover:bg-neutral-100 dark:enabled:hover:bg-neutral-900 enabled:cursor-pointer disabled:opacity-35 transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 dark:focus-visible:outline-white"><ArrowRight className="w-4 h-4" /></button></motion.div></motion.div><div className="-mx-4 sm:-mx-6 lg:-mx-8"><motion.div ref={t} onScroll={() => {
          cancelAnimationFrame(a.current), a.current = requestAnimationFrame(k);
        }} role="region" aria-label="Selected projects" tabIndex={0} variants={h} initial="hidden" whileInView="visible" viewport={{
          once: !0,
          margin: "-80px"
        }} className="flex gap-5 sm:gap-6 overflow-x-auto overscroll-x-contain snap-x snap-mandatory px-4 sm:px-6 lg:px-8 pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 dark:focus-visible:outline-white">{c.map(e => <motion.a href="#" variants={x} whileHover="hover" className="group w-[78vw] max-w-[420px] sm:w-[400px] lg:w-[440px] shrink-0 snap-start scroll-ml-4 sm:scroll-ml-6 lg:scroll-ml-8 cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-900 dark:focus-visible:outline-white"><div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900"><img src="/svg/placeholder.svg" alt={e.title} loading="lazy" draggable={!1} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]" /><span className="absolute left-4 top-4 rounded-full bg-white/90 dark:bg-neutral-950/80 px-3 py-1 text-xs font-medium text-neutral-900 dark:text-white backdrop-blur-sm">{e.category}</span></div><div className="mt-5 flex items-start justify-between gap-4 px-1"><div className="min-w-0"><h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-neutral-900 dark:text-white truncate">{e.title}</h3><p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">{e.client} · {e.year}</p></div><span className="mt-1 grid h-10 w-10 shrink-0 place-items-center rounded-full border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-white group-hover:bg-neutral-900 group-hover:border-neutral-900 group-hover:text-white dark:group-hover:bg-white dark:group-hover:border-white dark:group-hover:text-neutral-900 transition-colors duration-200"><motion.span variants={{
                  hover: {
                    x: 2,
                    y: -2
                  }
                }} transition={{
                  duration: .2,
                  ease: "easeOut"
                }} className="grid place-items-center"><ArrowUpRight className="w-4 h-4" /></motion.span></span></div></motion.a>)}</motion.div></div><div className="mt-8 flex items-center gap-6"><div className="relative h-0.5 flex-1 overflow-hidden rounded-full bg-neutral-200 dark:bg-neutral-800"><div className="absolute inset-0 origin-left rounded-full bg-neutral-900 dark:bg-white" style={{
            transform: `scaleX(${b})`
          }} /></div><p className="font-mono text-xs tracking-[0.12em]"><span className="text-neutral-900 dark:text-white">{String(p + 1).padStart(2, "0")}</span><span className="text-neutral-500 dark:text-neutral-400"> / {String(c.length).padStart(2, "0")}</span></p></div></div></section>;
}

export default Showcase8;

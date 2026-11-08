import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import * as __mod_75272 from "../_helpers/75272";
import * as __mod_17192 from "../_helpers/17192";
import * as __mod_47962 from "../_helpers/47962";
/**
 * Navigation 6
 * Full-screen menu with image previews
 * slug: navigation-6
 * category: Navigation
 * export: Navigation6
 * deps: lucide-react, motion
 * original: ts-tailwind/blocks/navigation/navigation-6.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

function Navigation6() {
  let [e, t] = (0, React.useState)(!1),
    [a, x] = (0, React.useState)(null),
    [u, m] = (0, React.useState)(!1),
    h = (0, React.useRef)(null),
    f = (0, __mod_75272.d)(0),
    p = (0, __mod_75272.d)(0),
    b = (0, __mod_17192.z)(f, {
      stiffness: 250,
      damping: 20
    }),
    w = (0, __mod_17192.z)(p, {
      stiffness: 250,
      damping: 20
    }),
    g = (0, __mod_75272.d)(0),
    v = (0, __mod_75272.d)(0),
    y = (0, __mod_17192.z)(g, {
      stiffness: 150,
      damping: 25
    }),
    j = (0, __mod_17192.z)(v, {
      stiffness: 150,
      damping: 25
    }),
    N = [{
      label: "Products",
      href: "#products",
      image: "https://images.unsplash.com/photo-1762278804698-fc25d03b69e7?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }, {
      label: "Solutions",
      href: "#solutions",
      image: "https://images.unsplash.com/photo-1762278804771-65c446b6acdb?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }, {
      label: "Resources",
      href: "#resources",
      image: "https://images.unsplash.com/photo-1762278804832-7f9b4cf3b693?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }, {
      label: "Company",
      href: "#company",
      image: "https://images.unsplash.com/photo-1762278804930-fd04fc7111c1?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }, {
      label: "Contact",
      href: "#contact",
      image: "https://images.unsplash.com/photo-1762278805645-cdcbd21c0e7f?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }];
  (0, React.useEffect)(() => {
    let a = a => {
      "Escape" === a.key && e && t(!1);
    };
    return window.addEventListener("keydown", a), () => window.removeEventListener("keydown", a);
  }, [e]), (0, React.useEffect)(() => (e ? document.body.style.overflow = "hidden" : document.body.style.overflow = "", () => {
    document.body.style.overflow = "";
  }), [e]), (0, React.useEffect)(() => () => {
    h.current && clearTimeout(h.current);
  }, []);
  let k = (e, t) => {
    if (window.matchMedia("(max-width: 1024px)").matches) return;
    h.current && (clearTimeout(h.current), h.current = null), f.set(e.clientX), p.set(e.clientY);
    let a = e.currentTarget.getBoundingClientRect(),
      i = a.left + a.width / 2,
      l = a.top + a.height / 2,
      n = (e.clientX - i) / (a.width / 2),
      s = (e.clientY - l) / (a.height / 2);
    g.set(20 * n), v.set(20 * s), x(t), m(!0);
  };
  return <><nav className="sticky top-0 z-40 w-full bg-white/80 px-4 backdrop-blur-md sm:px-6 lg:px-8 dark:bg-neutral-950/80" role="navigation" aria-label="Main navigation"><div className="max-w-[1400px] mx-auto"><div className="flex items-center justify-between h-16 sm:h-20"><motion.a href="#" className="flex items-center outline-none" initial={{
            y: 0
          }} animate={{
            y: e ? -100 : 0
          }} transition={{
            duration: .3,
            ease: [.4, 0, .2, 1]
          }} aria-label="Home"><img src="/mock-logos/spherule.svg" alt="Company logo" className="h-8 w-auto dark:invert" /></motion.a><motion.div className="hidden lg:flex items-center gap-8" initial={{
            y: 0
          }} animate={{
            y: e ? -100 : 0
          }} transition={{
            duration: .3,
            ease: [.4, 0, .2, 1]
          }} role="list">{[{
              label: "About",
              href: "#about"
            }, {
              label: "Features",
              href: "#features"
            }, {
              label: "Pricing",
              href: "#pricing"
            }, {
              label: "Blog",
              href: "#blog"
            }].map((e, t) => <a href={e.href} className="text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors outline-none">{e.label}</a>)}</motion.div><button onClick={() => t(!0)} className="cursor-pointer flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-sm font-medium hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors outline-none" aria-label="Open navigation menu" aria-expanded={e}><Menu className="w-4 h-4" /><span className="hidden sm:inline">Menu</span></button></div></div></nav><__mod_47962.N>{e && <><motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} exit={{
          opacity: 0
        }} transition={{
          duration: .3
        }} className="fixed inset-0 z-50 bg-white dark:bg-neutral-950" role="dialog" aria-modal="true" aria-label="Navigation menu"><div className="fixed top-0 left-0 right-0 z-10 pointer-events-none"><div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8"><div className="flex items-center justify-end h-16 sm:h-20"><button onClick={() => t(!1)} className="cursor-pointer flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-sm font-medium hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors pointer-events-auto outline-none" aria-label="Close navigation menu"><X className="w-4 h-4" /><span className="hidden sm:inline">Close</span></button></div></div></div><div className="h-screen overflow-y-auto flex flex-col"><div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-between"><div className="pt-4 h-full flex flex-col justify-between"><div onMouseLeave={() => {
                  h.current = setTimeout(() => {
                    x(null), m(!1), g.set(0), v.set(0);
                  }, 50);
                }}><nav aria-label="Main menu">{N.map((e, a) => <motion.div initial={{
                      opacity: 0,
                      y: 20
                    }} animate={{
                      opacity: 1,
                      y: 0
                    }} exit={{
                      opacity: 0,
                      y: -20
                    }} transition={{
                      duration: .4,
                      delay: .2 + .05 * a,
                      ease: [.25, .1, .25, 1]
                    }} onMouseEnter={e => k(e, a)} onMouseMove={e => k(e, a)} className={`${0 === a ? "pb-2 sm:pb-3" : "py-2 sm:py-3"}`}><a href={e.href} onClick={() => {
                        t(!1), m(!1), x(null);
                      }} className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-normal text-neutral-400 dark:text-neutral-600 hover:text-neutral-900 dark:hover:text-white transition-colors duration-300 leading-[1.1] cursor-pointer outline-none">{e.label}</a></motion.div>)}</nav></div><motion.footer initial={{
                  opacity: 0
                }} animate={{
                  opacity: 1
                }} exit={{
                  opacity: 0
                }} transition={{
                  duration: .4,
                  delay: .5
                }} className="pb-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-8"><div className="text-sm text-neutral-500 dark:text-neutral-400"><p>© 2024 All rights reserved</p><p className="mt-1">Built with React & Tailwind</p></div><nav aria-label="Footer navigation"><ul className="flex flex-wrap gap-4 sm:gap-6"><li><a href="#contact" className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors outline-none">Get in touch</a></li><li><a href="#careers" className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors outline-none">Careers</a></li><li><a href="#support" className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors outline-none">Support</a></li></ul></nav></motion.footer></div></div></div></motion.div><motion.div className="hidden lg:block" initial={{
          opacity: 0,
          scale: .85
        }} animate={{
          opacity: +!!u,
          scale: u ? 1 : .85
        }} exit={{
          opacity: 0,
          scale: .85
        }} transition={{
          opacity: {
            duration: .15
          },
          scale: {
            duration: .15
          }
        }} style={{
          position: "fixed",
          left: "40px",
          top: 0,
          x: b,
          y: w,
          pointerEvents: "none",
          zIndex: 100,
          width: "16rem",
          height: "16rem"
        }} aria-hidden="true"><__mod_47962.N initial={!1}>{null !== a && <motion.div initial={{
              opacity: 0
            }} animate={{
              opacity: 1
            }} exit={{
              opacity: 0
            }} transition={{
              duration: .12
            }} className="absolute inset-0"><div className="w-48 h-32 sm:w-64 sm:h-48 rounded-2xl overflow-hidden shadow-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900"><motion.img src={N[a].image} alt="" className="w-full h-full object-cover" style={{
                  x: y,
                  y: j,
                  scale: 1.1
                }} /></div></motion.div>}</__mod_47962.N></motion.div></>}</__mod_47962.N></>;
}

export default Navigation6;

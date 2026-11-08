import * as React from "react";
/**
 * Social Proof 6
 * Vertical logo carousel with a glass overlay
 * slug: social-proof-6
 * category: Social Proof
 * export: SocialProof6
 * deps: motion
 * original: ts-tailwind/blocks/social-proof/social-proof-6.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import { motion, AnimatePresence } from "motion/react";

function i() {
  let [e, a] = (0, React.useState)("all"),
    o = [{
      id: "all",
      label: "All"
    }, {
      id: "companies",
      label: "Startups"
    }, {
      id: "agencies",
      label: "Enterprise"
    }, {
      id: "studios",
      label: "Scale-ups"
    }];
  return <section className="w-full bg-white py-16 dark:bg-neutral-950 sm:py-24 px-4 sm:px-6 lg:px-8"><div className="mx-auto max-w-[1400px]"><motion.h2 initial={{
        opacity: 0
      }} whileInView={{
        opacity: 1
      }} viewport={{
        once: !0
      }} transition={{
        duration: .4
      }} className="mb-12 text-center text-4xl font-medium leading-tight text-neutral-900 dark:text-neutral-50 sm:text-5xl lg:mb-16 lg:text-6xl tracking-tight">Powering over 15,000 teams<br />building the future.</motion.h2><div className="mb-12 hidden justify-center sm:flex lg:mb-16"><div className="relative inline-flex gap-1 rounded-full bg-neutral-100 p-1 dark:bg-neutral-900">{o.map(o => <button onClick={() => a(o.id)} className="relative px-6 py-2.5 text-sm font-medium transition-colors duration-200 sm:px-8 sm:py-3 sm:text-base">{e === o.id && <motion.div layoutId="activeTab" className="absolute inset-0 rounded-full bg-white shadow-sm dark:bg-neutral-800" transition={{
              type: "spring",
              stiffness: 380,
              damping: 30
            }} />}<span className={`relative z-10 ${e === o.id ? "text-neutral-900 dark:text-neutral-50" : "text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-300"}`}>{o.label}</span></button>)}</div></div><div className="mb-12 flex flex-wrap justify-center gap-2 sm:hidden">{o.map(o => <button onClick={() => a(o.id)} className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-200 ${e === o.id ? "bg-neutral-900 text-white dark:bg-neutral-50 dark:text-neutral-900" : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-700"}`}>{o.label}</button>)}</div><div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-4 lg:gap-12">{[{
          name: "Acme Corp",
          category: ["companies"],
          logo: "/mock-logos/acmecorp.svg"
        }, {
          name: "Cloudwatch",
          category: ["agencies"],
          logo: "/mock-logos/cloudwatch.svg"
        }, {
          name: "Epicurious",
          category: ["studios"],
          logo: "/mock-logos/epicurious.svg"
        }, {
          name: "Galileo",
          category: ["companies"],
          logo: "/mock-logos/galileo.svg"
        }, {
          name: "Global Bank",
          category: ["agencies"],
          logo: "/mock-logos/globalbank.svg"
        }, {
          name: "Sisyphus",
          category: ["studios"],
          logo: "/mock-logos/sisyphus.svg"
        }, {
          name: "Interlock",
          category: ["agencies"],
          logo: "/mock-logos/interlock.svg"
        }, {
          name: "Layers",
          category: ["companies"],
          logo: "/mock-logos/layers.svg"
        }, {
          name: "Lightbox",
          category: ["companies"],
          logo: "/mock-logos/lightbox.svg"
        }, {
          name: "Nietzsche",
          category: ["agencies"],
          logo: "/mock-logos/nietzsche.svg"
        }, {
          name: "Polymath",
          category: ["studios"],
          logo: "/mock-logos/polymath.svg"
        }, {
          name: "Quotient",
          category: ["companies"],
          logo: "/mock-logos/quotient.svg"
        }, {
          name: "Boltshift",
          category: ["companies"],
          logo: "/mock-logos/boltshift.svg"
        }, {
          name: "Capsule",
          category: ["agencies"],
          logo: "/mock-logos/capsule.svg"
        }, {
          name: "Catalog",
          category: ["studios"],
          logo: "/mock-logos/catalog.svg"
        }, {
          name: "Commandr",
          category: ["companies"],
          logo: "/mock-logos/commandr.svg"
        }].map((a, o) => <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: "all" === e || a.category.includes(e) ? 1 : .3,
          y: 0
        }} transition={{
          opacity: {
            duration: .3
          },
          y: {
            duration: .4,
            delay: .05 * o
          }
        }} className="flex items-center justify-center"><img src={a.logo} alt={`${a.name} logo`} className="h-8 w-auto max-w-full object-contain brightness-0 transition-all duration-300 dark:invert sm:h-10" /></motion.div>)}</div></div></section>;
}

export default i;

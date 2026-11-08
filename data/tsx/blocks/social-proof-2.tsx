import * as React from "react";
/**
 * Social Proof 2
 * Customer logos in opposing marquees
 * slug: social-proof-2
 * category: Social Proof
 * export: SocialProof2
 * deps: motion
 * original: ts-tailwind/blocks/social-proof/social-proof-2.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import { motion, AnimatePresence } from "motion/react";

function i() {
  let e = [{
      name: "Boltshift",
      logo: "/mock-logos/boltshift.svg"
    }, {
      name: "Lightbox",
      logo: "/mock-logos/lightbox.svg"
    }, {
      name: "Feather Dev",
      logo: "/mock-logos/featherdev.svg"
    }, {
      name: "Spherule",
      logo: "/mock-logos/spherule.svg"
    }],
    t = [{
      name: "Global Bank",
      logo: "/mock-logos/globalbank.svg"
    }, {
      name: "Nietzsche",
      logo: "/mock-logos/nietzsche.svg"
    }, {
      name: "Hourglass",
      logo: "/mock-logos/hourglass.svg"
    }, {
      name: "Catalog",
      logo: "/mock-logos/catalog.svg"
    }],
    a = (0, React.useRef)(null),
    i = (0, React.useRef)(null);
  return (0, React.useEffect)(() => {
    let e = a.current,
      t = i.current;
    if (!e || !t) return;
    let s = 0,
      r = 0,
      l = () => {
        s += .5;
        let a = e.scrollWidth / 3;
        s >= a && (s = 0), e.style.transform = `translateX(-${s}px)`, r -= .5;
        let i = t.scrollWidth / 3;
        r <= -i && (r = 0), t.style.transform = `translateX(-${i + r}px)`, requestAnimationFrame(l);
      },
      n = requestAnimationFrame(l);
    return () => cancelAnimationFrame(n);
  }, []), <section className="relative w-full overflow-hidden bg-white py-16 dark:bg-neutral-950 sm:py-24 px-4 sm:px-6 lg:px-8"><div className="mx-auto max-w-[1400px]"><div className="mb-16 text-center"><motion.p initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} viewport={{
          once: !0
        }} transition={{
          duration: .4
        }} className="mb-4 inline-block tracking-tight rounded-full bg-neutral-100 px-4 py-1.5 text-sm font-medium text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300">Customers</motion.p><motion.h2 initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} viewport={{
          once: !0
        }} transition={{
          duration: .4,
          delay: .1
        }} className="mb-6 text-4xl font-normal text-neutral-900 dark:text-neutral-50 sm:text-5xl lg:text-6xl">Meet our customers</motion.h2><motion.p initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} viewport={{
          once: !0
        }} transition={{
          duration: .4,
          delay: .2
        }} className="mx-auto max-w-2xl text-base text-neutral-600 dark:text-neutral-400 sm:text-lg">Learn how leading SaaS, Fintech, Infra and AI companies are streamlining their quote to revenue workflows end-to-end.</motion.p></div><div className="relative"><div className="space-y-6"><div className="relative overflow-hidden"><div ref={a} className="flex gap-6">{[...e, ...e, ...e].map((e, t) => <div className="flex h-20 min-w-60 shrink-0 items-center justify-center rounded-full border border-neutral-200 bg-white px-8 dark:border-neutral-800 dark:bg-neutral-950"><img src={e.logo} alt={`${e.name} logo`} className="h-6 w-auto object-contain brightness-0 opacity-60 dark:invert dark:opacity-40" /></div>)}</div></div><div className="relative overflow-hidden"><div ref={i} className="flex gap-6">{[...t, ...t, ...t].map((e, t) => <div className="flex h-20 min-w-60 shrink-0 items-center justify-center rounded-full border border-neutral-200 bg-white px-8 dark:border-neutral-800 dark:bg-neutral-950"><img src={e.logo} alt={`${e.name} logo`} className="h-6 w-auto object-contain brightness-0 opacity-60 dark:invert dark:opacity-40" /></div>)}</div></div></div><div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-linear-to-r from-white to-transparent dark:from-neutral-950" /><div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-linear-to-l from-white to-transparent dark:from-neutral-950" /></div></div></section>;
}

export default i;

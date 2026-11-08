import * as React from "react";
import * as __mod_75272 from "../_helpers/75272";
import * as __mod_32923 from "../_helpers/32923";
import * as __mod_26 from "../_helpers/26";
/**
 * Social Proof 9
 * Minimal logo marquees in two directions
 * slug: social-proof-9
 * category: Social Proof
 * export: SocialProof9
 * deps: motion
 * original: ts-tailwind/blocks/social-proof/social-proof-9.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import { motion, AnimatePresence } from "motion/react";

let u = [{
    name: "Acme Corp",
    url: "#",
    img: "/mock-logos/acmecorp.svg"
  }, {
    name: "Boltshift",
    url: "#",
    img: "/mock-logos/boltshift.svg"
  }, {
    name: "Capsule",
    url: "#",
    img: "/mock-logos/capsule.svg"
  }, {
    name: "FeatherDev",
    url: "#",
    img: "/mock-logos/featherdev.svg"
  }, {
    name: "GlobalBank",
    url: "#",
    img: "/mock-logos/globalbank.svg"
  }, {
    name: "Interlock",
    url: "#",
    img: "/mock-logos/interlock.svg"
  }],
  c = [{
    name: "Lightbox",
    url: "#",
    img: "/mock-logos/lightbox.svg"
  }, {
    name: "Polymath",
    url: "#",
    img: "/mock-logos/polymath.svg"
  }, {
    name: "Quotient",
    url: "#",
    img: "/mock-logos/quotient.svg"
  }, {
    name: "Sisyphus",
    url: "#",
    img: "/mock-logos/sisyphus.svg"
  }, {
    name: "Spherule",
    url: "#",
    img: "/mock-logos/spherule.svg"
  }, {
    name: "Luminous",
    url: "#",
    img: "/mock-logos/luminous.svg"
  }],
  m = ({
    items: e,
    direction: t = "left",
    speed: r = 20
  }) => {
    let [u, c] = (0, React.useState)(!1),
      m = (0, __mod_75272.d)(0),
      g = (0, __mod_32923.G)(m, e => `${e}%`),
      f = (0, React.useRef)(null);
    return (0, __mod_26.N)((e, s) => {
      if (u) return;
      let n = r * s / 1e3;
      if ("left" === t) {
        let e = m.get() - n;
        e <= -50 ? m.set(0) : m.set(e);
      } else {
        let e = m.get() + n;
        e >= 0 ? m.set(-50) : m.set(e);
      }
    }), <div className="flex overflow-hidden w-full group px-4 sm:px-6 lg:px-8" onMouseEnter={() => c(!0)} onMouseLeave={() => c(!1)} ref={f}><motion.div className="flex shrink-0 gap-8 sm:gap-16 pr-8 sm:pr-16 min-w-full items-center justify-around" style={{
        x: g
      }}>{[...e, ...e].map((e, t) => <a href={e.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center opacity-40 hover:opacity-100 transition-opacity duration-300"><img src={e.img} alt={e.name} className="h-6 md:h-8 w-auto object-contain brightness-0 dark:invert" /></a>)}</motion.div><motion.div className="flex shrink-0 gap-8 sm:gap-16 pr-8 sm:pr-16 min-w-full items-center justify-around" style={{
        x: g
      }} aria-hidden="true">{[...e, ...e].map((e, t) => <a href={e.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center opacity-40 hover:opacity-100 transition-opacity duration-300"><img src={e.img} alt={e.name} className="h-6 md:h-8 w-auto object-contain brightness-0 dark:invert" /></a>)}</motion.div></div>;
  };
function SocialProof9() {
  return <section className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white overflow-hidden"><div className="max-w-[1400px] mx-auto w-full mb-12 text-center"><h3 className="text-sm font-medium tracking-widest uppercase text-black dark:text-white">Connecting the world's greatest companies to their customers</h3></div><div className="relative flex flex-col gap-16 -mx-4 sm:-mx-6 lg:-mx-8"><div className="relative flex w-full flex-col items-center justify-center overflow-hidden"><m items={u} direction="left" speed={1} /><div className="h-8" /><m items={c} direction="right" speed={1} /><div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-linear-to-r from-white dark:from-neutral-950 to-transparent" /><div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-linear-to-l from-white dark:from-neutral-950 to-transparent" /></div></div></section>;
}

export default SocialProof9;

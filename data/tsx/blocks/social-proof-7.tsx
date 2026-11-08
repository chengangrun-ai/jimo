import { motion, AnimatePresence } from "motion/react";
import { Play } from "lucide-react";
import * as __mod_75272 from "../_helpers/75272";
import * as __mod_32923 from "../_helpers/32923";
import * as __mod_26 from "../_helpers/26";
/**
 * Social Proof 7
 * Full-width video with a logo marquee
 * slug: social-proof-7
 * category: Social Proof
 * export: SocialProof7
 * deps: lucide-react, motion
 * original: ts-tailwind/blocks/social-proof/social-proof-7.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let d = [{
    name: "Acme Corp",
    src: "/mock-logos/acmecorp.svg"
  }, {
    name: "Boltshift",
    src: "/mock-logos/boltshift.svg"
  }, {
    name: "GlobalBank",
    src: "/mock-logos/globalbank.svg"
  }, {
    name: "Sisyphus",
    src: "/mock-logos/sisyphus.svg"
  }, {
    name: "FeatherDev",
    src: "/mock-logos/featherdev.svg"
  }, {
    name: "Quotient",
    src: "/mock-logos/quotient.svg"
  }, {
    name: "Luminous",
    src: "/mock-logos/luminous.svg"
  }, {
    name: "Polymath",
    src: "/mock-logos/polymath.svg"
  }],
  m = ({
    logos: e
  }) => {
    let t = (0, __mod_75272.d)(0),
      a = (0, __mod_32923.G)(t, e => `${e}%`),
      c = (0, React.useRef)(null);
    return (0, __mod_26.N)((e, a) => {
      let s = t.get() - a / 1e3;
      s <= -50 ? t.set(0) : t.set(s);
    }), <div className="relative flex w-full flex-col items-center justify-center overflow-hidden"><div className="flex overflow-hidden p-2 [--gap:2rem] gap-(--gap) flex-row w-full max-w-5xl" ref={c}><motion.div className="flex shrink-0 justify-around gap-(--gap) flex-row min-w-full" style={{
          x: a
        }}>{[...e, ...e].map((e, t) => <div className="flex items-center justify-center h-12 w-32 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"><img src={e.src} alt={e.name} className="max-h-8 w-auto object-contain dark:invert" /></div>)}</motion.div><motion.div className="flex shrink-0 justify-around gap-(--gap) flex-row min-w-full" style={{
          x: a
        }} aria-hidden="true">{[...e, ...e].map((e, t) => <div className="flex items-center justify-center h-12 w-32 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"><img src={e.src} alt={e.name} className="max-h-8 w-auto object-contain dark:invert" /></div>)}</motion.div></div><div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-linear-to-r from-white dark:from-neutral-950 to-transparent" /><div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-linear-to-l from-white dark:from-neutral-950 to-transparent" /></div>;
  };
function SocialProof7() {
  let [e, t] = (0, React.useState)(!1);
  return <section className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-neutral-950 overflow-hidden"><div className="max-w-[1400px] mx-auto w-full"><div className="relative w-full max-w-5xl mx-auto mb-20"><div className="relative rounded-2xl overflow-hidden shadow-2xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 aspect-video flex items-center justify-center group cursor-pointer" onClick={() => t(!0)}>{e ? <video width="100%" height="100%" autoPlay={!0} muted={!0} controls={!0} className="w-full h-full object-cover"><source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />Your browser does not support the video tag.</video> : <><div className="absolute inset-0 opacity-50 dark:opacity-20 pointer-events-none"><div className="w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]" /></div><div className="relative z-10 w-20 h-20 bg-white/90 dark:bg-neutral-800/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110"><Play className="w-8 h-8 text-neutral-900 dark:text-white fill-current ml-1" /></div><div className="absolute inset-0 bg-linear-to-t from-black/5 to-transparent pointer-events-none" /></>}</div></div><div className="max-w-3xl mx-auto text-center mb-8"><p className="text-lg font-medium text-neutral-500 dark:text-neutral-400">Powering thousands of marketing teams at the fastest growing companies in tech</p></div><m logos={d} /></div></section>;
}

export default SocialProof7;

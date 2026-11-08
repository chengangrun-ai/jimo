import { motion, AnimatePresence } from "motion/react";
import * as __mod_47962 from "../_helpers/47962";
/**
 * Ecommerce 6
 * Shop-all grid with category tabs
 * slug: ecommerce-6
 * category: Ecommerce
 * export: Ecommerce6
 * deps: motion
 * original: ts-tailwind/blocks/ecommerce/ecommerce-6.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let n = [{
    name: "Orchid ORC-1",
    price: "SOLD OUT",
    soldOut: !0,
    category: "OBJECTS",
    image: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?w=900&q=80"
  }, {
    name: "Black Wavelength Beanie",
    price: "$30.00 USD",
    accent: !0,
    category: "APPAREL",
    image: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=900&q=80"
  }, {
    name: "Forest Orchid Eye Tee",
    price: "$50.00 USD",
    category: "APPAREL",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=900&q=80"
  }, {
    name: "Field Tote",
    price: "$20.00 USD",
    category: "OBJECTS",
    image: "https://images.unsplash.com/photo-1592878904946-b3cd8ae243d0?w=900&q=80"
  }, {
    name: "Charcoal Logo Tee",
    price: "$45.00 USD",
    category: "APPAREL",
    image: "https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?w=900&q=80"
  }, {
    name: "Cream Orchid Hoodie",
    price: "$110.00 USD",
    category: "APPAREL",
    image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=900&q=80"
  }, {
    name: "Moss Orchid Tee",
    price: "$50.00 USD",
    category: "APPAREL",
    image: "https://images.unsplash.com/photo-1622445275576-721325763afe?w=900&q=80"
  }, {
    name: "Corduroy Field Cap",
    price: "$35.00 USD",
    category: "APPAREL",
    image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=900&q=80"
  }],
  o = ["ALL", "APPAREL", "OBJECTS"];
function c() {
  let [e, t] = (0, React.useState)("ALL"),
    a = (0, React.useMemo)(() => "ALL" === e ? n : n.filter(t => t.category === e), [e]);
  return <section className="w-full min-h-[var(--rb-section-min-h,100vh)] py-10 px-4 sm:px-6 lg:px-8 bg-white dark:bg-neutral-950"><div className="max-w-[1400px] mx-auto w-full"><div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"><motion.h1 initial={{
          opacity: 0,
          y: 8
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: !0
        }} transition={{
          duration: .5
        }} className="text-3xl sm:text-4xl font-semibold text-neutral-900 dark:text-white tracking-tight">Our Catalog</motion.h1><div className="relative flex items-center gap-1 rounded-full border border-neutral-200 dark:border-neutral-800 p-1">{o.map(a => <button onClick={() => t(a)} className={`relative px-4 py-1.5 rounded-full text-xs tracking-[0.15em] transition-colors cursor-pointer ${e === a ? "text-neutral-900 dark:text-white" : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"}`}>{e === a && <motion.span layoutId="ec6-pill" className="absolute inset-0 rounded-full bg-neutral-100 dark:bg-neutral-800" transition={{
              type: "spring",
              stiffness: 320,
              damping: 30
            }} />}<span className="relative">{a}</span></button>)}</div></div><motion.div layout={!0} className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5"><__mod_47962.N mode="popLayout">{a.map((e, t) => <motion.article layout={!0} initial={{
            opacity: 0,
            y: 10
          }} animate={{
            opacity: 1,
            y: 0
          }} exit={{
            opacity: 0,
            y: -6
          }} transition={{
            layout: {
              type: "spring",
              stiffness: 260,
              damping: 30
            },
            duration: .35,
            delay: t % 4 * .04
          }} className="group flex flex-col gap-3"><div className="relative aspect-square rounded-md bg-neutral-100 dark:bg-neutral-900 overflow-hidden"><img src={e.image} alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-[1.05] transition-transform duration-500" />{e.soldOut && <span className="absolute inset-0 bg-neutral-950/30 grid place-items-center text-white text-[11px] tracking-[0.25em] font-medium">SOLD OUT</span>}</div><p className={`text-sm font-medium ${e.accent ? "text-emerald-600 dark:text-emerald-400" : "text-neutral-900 dark:text-white"}`}>{e.name}</p><p className={`text-xs tracking-wider ${e.soldOut ? "text-neutral-500 uppercase" : "text-neutral-700 dark:text-neutral-300"}`}>{e.price}</p></motion.article>)}</__mod_47962.N></motion.div></div></section>;
}

export default c;

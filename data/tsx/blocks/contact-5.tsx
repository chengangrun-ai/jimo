import * as React from "react";
import { ArrowRight } from "lucide-react";
import * as __mod_47962 from "../_helpers/47962";
/**
 * Contact 5
 * Contact details with an image carousel
 * slug: contact-5
 * category: Contact
 * export: Contact5
 * deps: lucide-react, motion
 * original: ts-tailwind/blocks/contact/contact-5.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import { motion, AnimatePresence } from "motion/react";

function o() {
  let [e, t] = (0, React.useState)(0),
    r = ["https://images.unsplash.com/photo-1555529771-835f59fc5efe?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1687380304706-b978daa78f92?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1693008870006-fe8e6ea97b5f?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"];
  return (0, React.useEffect)(() => {
    let e = setTimeout(() => {
      t(e => (e + 1) % r.length);
    }, 5e3);
    return () => {
      clearTimeout(e);
    };
  }, [e, r.length, 5e3]), <section className="w-full bg-white py-8 dark:bg-neutral-950 sm:py-16 px-4 sm:px-6 lg:px-8"><div className="mx-auto max-w-[1400px]"><div className="grid gap-12 lg:grid-cols-2 lg:gap-16"><div className="flex flex-col"><motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: !0
          }} transition={{
            duration: .4
          }} className="mb-16 lg:mb-32"><h3 className="text-2xl font-bold lowercase text-neutral-900 dark:text-neutral-50">everwear</h3></motion.div><motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: !0
          }} transition={{
            duration: .4,
            delay: .1
          }} className="mb-16 lg:mb-20"><h1 className="mb-8 text-4xl font-normal leading-tight text-neutral-900 dark:text-neutral-50 sm:text-5xl lg:text-6xl">Reach out to<br />our team.</h1><p className="text-lg leading-relaxed text-neutral-600 dark:text-neutral-400">Have questions about our ethical production process or want to partner with us? We would love to hear from you.</p></motion.div><motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: !0
          }} transition={{
            duration: .4,
            delay: .2
          }} className="mb-16 grid gap-8 sm:grid-cols-2 lg:mb-20"><div><p className="mb-2 text-sm text-neutral-400 dark:text-neutral-600">Studio & Showroom</p><p className="text-base text-neutral-900 dark:text-neutral-100">128 King Street West<br />Toronto, ON M5H 1A9<br />Canada</p></div><div className="space-y-4"><div><p className="mb-2 text-sm text-neutral-400 dark:text-neutral-600">Mail</p><a href="mailto:hello@everwear.co" className="text-base text-neutral-900 transition-colors hover:text-neutral-600 dark:text-neutral-100 dark:hover:text-neutral-400">hello@everwear.co</a></div><div><p className="mb-2 text-sm text-neutral-400 dark:text-neutral-600">Phone</p><a href="tel:+14165551234" className="text-base text-neutral-900 transition-colors hover:text-neutral-600 dark:text-neutral-100 dark:hover:text-neutral-400">+1 416 555 1234</a></div></div></motion.div><motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: !0
          }} transition={{
            duration: .4,
            delay: .3
          }} className="grid gap-4 sm:grid-cols-2"><a href="#" className="group flex items-center justify-between rounded-2xl bg-neutral-900 p-6 transition-transform hover:scale-[1.02] dark:bg-neutral-100"><div><p className="mb-1 text-sm text-neutral-400 dark:text-neutral-600">Interested?</p><p className="text-lg font-medium text-white dark:text-neutral-900">Schedule a visit</p></div><div className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-700 transition-colors group-hover:border-neutral-600 dark:border-neutral-300 dark:group-hover:border-neutral-400"><ArrowRight className="h-5 w-5 text-white dark:text-neutral-900" /></div></a><a href="#" className="group flex items-center justify-between rounded-2xl border border-neutral-200 bg-white p-6 transition-all hover:border-neutral-300 hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-950 dark:hover:border-neutral-700"><div><p className="text-lg font-medium text-neutral-900 dark:text-neutral-100">Wholesale inquiry</p></div><div className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300 transition-colors group-hover:border-neutral-400 dark:border-neutral-700 dark:group-hover:border-neutral-600"><ArrowRight className="h-5 w-5 text-neutral-900 dark:text-neutral-100" /></div></a></motion.div></div><motion.div initial={{
          opacity: 0,
          scale: .95
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} viewport={{
          once: !0
        }} transition={{
          duration: .6
        }} className="relative h-full"><div className="absolute right-6 top-6 z-10 flex gap-2 sm:right-8 sm:top-8">{r.map((t, r) => <div className="h-0.5 w-6 overflow-hidden rounded-full bg-neutral-900/30 backdrop-blur-sm dark:bg-white/30 sm:w-8">{r < e ? <div className="h-full w-full bg-neutral-900 dark:bg-white" /> : r === e ? <motion.div className="h-full bg-neutral-900 dark:bg-white" initial={{
                width: "0%"
              }} animate={{
                width: "100%"
              }} transition={{
                duration: 5,
                ease: "linear"
              }} style={{
                willChange: "width"
              }} /> : <div className="h-full w-0 bg-neutral-900 dark:bg-white" />}</div>)}</div><div className="relative aspect-square overflow-hidden rounded-3xl border border-neutral-200/50 dark:border-neutral-800/50 lg:aspect-auto lg:h-full lg:min-h-full"><__mod_47962.N initial={!1} custom={e}><motion.img src={r[e]} alt={`Slide ${e + 1}`} initial={{
                x: "100%"
              }} animate={{
                x: 0
              }} exit={{
                x: "-100%"
              }} transition={{
                duration: 1,
                ease: [.65, 0, .35, 1]
              }} className="absolute h-full w-full object-cover" /></__mod_47962.N></div></motion.div></div></div></section>;
}

export default o;

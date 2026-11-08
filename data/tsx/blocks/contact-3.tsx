import { Mail, MessageCircle, Phone } from "lucide-react";
/**
 * Contact 3
 * Three icon cards for contact methods
 * slug: contact-3
 * category: Contact
 * export: Contact3
 * deps: lucide-react, motion
 * original: ts-tailwind/blocks/contact/contact-3.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import { motion, AnimatePresence } from "motion/react";

function o() {
  let e = [{
    icon: MessageCircle,
    title: "Live chat",
    href: "#"
  }, {
    icon: Mail,
    title: "Email us",
    href: "#"
  }, {
    icon: Phone,
    title: "Book a call",
    href: "#"
  }];
  return <section className="w-full bg-white py-12 dark:bg-neutral-950 sm:py-24 px-4 sm:px-6 lg:px-8"><div className="mx-auto max-w-[1400px]"><div className="mb-12 text-center lg:mb-16"><motion.h2 initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: !0
        }} transition={{
          duration: .4
        }} className="mb-4 text-4xl font-medium tracking-tight text-neutral-900 dark:text-neutral-50 sm:text-5xl lg:text-6xl">Get in touch</motion.h2><motion.p initial={{
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
        }} className="text-sm tracking-tight text-neutral-600 dark:text-neutral-400">Select how you would like to contact us</motion.p></div><div className="mx-auto flex max-w-3xl flex-col gap-6 sm:flex-row sm:items-start sm:justify-center">{e.map((e, t) => <motion.a href={e.href} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: !0
        }} transition={{
          duration: .4,
          delay: .2 + .1 * t
        }} className="group flex w-full shrink-0 flex-col items-center justify-between rounded-3xl border border-neutral-200 bg-white p-6 transition-shadow hover:border-neutral-300 hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-950 dark:hover:border-neutral-700 min-h-[260px] sm:w-[240px] sm:h-[240px] sm:min-h-0"><div className="flex items-center justify-center mt-6 mb-6 sm:mt-0 sm:flex-1"><div className="relative"><div className="absolute inset-0 -m-6 rounded-4xl bg-indigo-100 opacity-60 dark:bg-indigo-950/40" /><div className="absolute inset-0 -m-3 rounded-3xl bg-indigo-200 opacity-70 dark:bg-indigo-900/50" /><div className="relative flex h-20 w-20 items-center justify-center rounded-xl bg-indigo-600 transition-transform group-hover:scale-110 dark:bg-indigo-500"><e.icon className="h-10 w-10 text-neutral-300" strokeWidth={.5} /></div></div></div><div className="text-center"><h3 className="text-base font-normal tracking-tight text-neutral-900 dark:text-neutral-50">{e.title}</h3></div></motion.a>)}</div></div></section>;
}

export default o;

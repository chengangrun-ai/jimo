import { Boxes, Github, Instagram, Layers, Linkedin, Orbit, Radio, Youtube } from "lucide-react";
import * as __mod_50969 from "../_helpers/50969";
/**
 * Footer 11
 * Airy five-column sitemap footer
 * slug: footer-11
 * category: Footer
 * export: Footer11
 * deps: lucide-react, motion
 * original: ts-tailwind/blocks/footer/footer-11.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import { motion, AnimatePresence } from "motion/react";

let x = "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-white dark:focus-visible:ring-offset-neutral-950",
  m = [{
    title: "Products",
    links: [{
      label: "Aster Core",
      icon: Orbit
    }, {
      label: "Aster Sync",
      icon: Radio
    }, {
      label: "Aster Rooms",
      icon: Layers
    }, {
      label: "Aster Kit",
      icon: Boxes
    }]
  }, {
    title: "Resources",
    links: [{
      label: "Journal"
    }, {
      label: "Brand kit"
    }, {
      label: "Guides"
    }, {
      label: "Support"
    }, {
      label: "FAQ"
    }]
  }, {
    title: "Developers",
    links: [{
      label: "Documentation"
    }, {
      label: "API reference"
    }, {
      label: "Changelog"
    }, {
      label: "Security"
    }, {
      label: "Open source"
    }]
  }, {
    title: "Legal & privacy",
    links: [{
      label: "Privacy policy"
    }, {
      label: "Terms of use"
    }, {
      label: "Licenses"
    }, {
      label: "Press"
    }, {
      label: "Contact"
    }]
  }, {
    title: "About",
    links: [{
      label: "Company"
    }, {
      label: "Careers"
    }]
  }],
  k = [{
    icon: Instagram,
    label: "Instagram"
  }, {
    icon: Youtube,
    label: "YouTube"
  }, {
    icon: Linkedin,
    label: "LinkedIn"
  }, {
    icon: Github,
    label: "GitHub"
  }],
  b = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: .07,
        delayChildren: .05
      }
    }
  },
  g = {
    hidden: {
      opacity: 0,
      y: 24
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: .7,
        ease: [.22, 1, .36, 1]
      }
    }
  };
function y() {
  let e = (0, __mod_50969.I)();
  return <footer className="w-full bg-white px-4 py-16 dark:bg-neutral-950 sm:px-6 sm:py-20 lg:px-8 lg:py-24"><motion.div variants={b} initial={!e && "hidden"} whileInView="visible" viewport={{
      once: !0,
      margin: "-80px"
    }} className="mx-auto w-full max-w-[1400px]"><div className="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3 lg:grid-cols-5 lg:gap-x-12">{m.map(e => <motion.nav variants={g} aria-label={e.title} className="min-w-0"><h3 className="mb-5 text-xs font-medium uppercase tracking-[0.16em] text-neutral-500 dark:text-neutral-500">{e.title}</h3><ul className="space-y-3.5">{e.links.map(({
              label: e,
              icon: t
            }) => <li><a href="#" className={`group inline-flex items-center gap-3 rounded-sm text-[17px] font-medium leading-snug tracking-tight text-neutral-900 transition-colors duration-200 hover:text-neutral-500 dark:text-white dark:hover:text-neutral-400 ${x}`}>{t && <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-neutral-200 bg-neutral-50 text-neutral-700 transition-colors duration-200 group-hover:border-neutral-300 group-hover:bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300 dark:group-hover:border-neutral-700 dark:group-hover:bg-neutral-800"><t className="h-4 w-4" /></span>}{e}</a></li>)}</ul></motion.nav>)}</div><motion.div variants={g} className="mt-16 flex flex-col gap-8 pt-8 sm:mt-20 sm:flex-row sm:items-center sm:justify-between"><a href="#" aria-label="Aster home" className={`inline-flex w-fit items-center gap-2.5 rounded-md ${x}`}><span className="flex h-9 w-9 items-center justify-center rounded-lg bg-neutral-900 text-base font-semibold text-white dark:bg-white dark:text-neutral-900">A</span><span className="text-xl font-semibold tracking-tight text-neutral-900 dark:text-white">Aster</span></a><nav aria-label="Social" className="flex flex-wrap items-center gap-1">{k.map(({
            icon: e,
            label: t
          }) => <a href="#" aria-label={t} className="flex h-10 w-10 items-center justify-center rounded-full text-neutral-500 transition-colors duration-200 hover:bg-neutral-100 hover:text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 dark:text-neutral-500 dark:hover:bg-neutral-900 dark:hover:text-white dark:focus-visible:ring-white"><e className="h-5 w-5" /></a>)}</nav></motion.div><motion.p variants={g} className="mt-8 max-w-3xl text-sm leading-relaxed text-neutral-500 dark:text-neutral-500">Aster builds coordination software for distributed engineering teams. Product availability, pricing, and feature scope vary by region and plan; see the current service description for binding terms. Independent integrations are maintained by their respective authors.</motion.p></motion.div></footer>;
}

export default y;

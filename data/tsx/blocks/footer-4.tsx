import { ArrowRight } from "lucide-react";
/**
 * Footer 4
 * Newsletter signup with a big logo
 * slug: footer-4
 * category: Footer
 * export: Footer4
 * deps: lucide-react, motion
 * original: ts-tailwind/blocks/footer/footer-4.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import { motion, AnimatePresence } from "motion/react";

function i() {
  let e = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: .5
      }
    }
  };
  return <footer className="w-full bg-white dark:bg-neutral-950 px-4 sm:px-6 lg:px-8"><motion.div variants={{
      hidden: {
        opacity: 0
      },
      visible: {
        opacity: 1
      }
    }} initial="hidden" whileInView="visible" viewport={{
      once: !0,
      margin: "-100px"
    }}><div className="mx-auto w-full max-w-[1400px]"><motion.div variants={e} className="py-12"><h2 className="text-3xl font-medium tracking-tight leading-tight text-neutral-900 dark:text-white sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">Decentralized finance.<br />One block at a time.</h2></motion.div></div><div className="border-y border-neutral-200 dark:border-neutral-800"><div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8"><motion.div variants={e} className="grid grid-cols-1 gap-0 lg:grid-cols-[1fr_1.5fr]"><div className="border-b border-neutral-200 py-8 dark:border-neutral-800 lg:border-b-0 lg:border-r lg:py-8 lg:pr-8"><div><h3 className="mb-6 text-lg font-medium tracking-tight text-neutral-900 dark:text-white sm:text-xl">Stay updated on protocol developments.</h3><div className="mb-6 flex"><input type="email" placeholder="Enter your email address" className="flex-1 border border-r-0 border-neutral-300 bg-transparent px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 focus:border-neutral-400 focus:outline-none dark:border-neutral-700 dark:text-white dark:placeholder-neutral-500 dark:focus:border-neutral-600 sm:px-6 sm:py-4 sm:text-base" /><button className="flex items-center justify-center border border-neutral-300 bg-neutral-100 px-4 transition-colors hover:bg-neutral-200 dark:border-neutral-700 dark:bg-neutral-800 dark:hover:bg-neutral-700 sm:px-6" aria-label="Subscribe"><ArrowRight className="h-5 w-5 text-neutral-900 dark:text-white sm:h-6 sm:w-6" /></button></div><p className="text-xs text-neutral-600 dark:text-neutral-400 sm:text-sm">*By completing this form you are signing up to receive our emails and can unsubscribe at any time.</p></div></div><div className="py-8 lg:py-8 lg:pl-8"><div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">{[{
                  title: "Support",
                  links: [{
                    text: "Documentation",
                    href: "#"
                  }, {
                    text: "Developers",
                    href: "#"
                  }]
                }, {
                  title: "Ecosystem",
                  links: [{
                    text: "Whitepaper",
                    href: "#"
                  }, {
                    text: "Roadmap",
                    href: "#"
                  }, {
                    text: "Tokenomics",
                    href: "#"
                  }, {
                    text: "Community",
                    href: "#"
                  }]
                }, {
                  title: "Developers",
                  links: [{
                    text: "API Access",
                    href: "#"
                  }, {
                    text: "SDK",
                    href: "#"
                  }]
                }, {
                  title: "Resources",
                  links: [{
                    text: "Security Audit",
                    href: "#"
                  }, {
                    text: "Terms of Service",
                    href: "#"
                  }, {
                    text: "Bug Bounty",
                    href: "#"
                  }]
                }].map(e => <div><h4 className="mb-4 text-sm font-medium tracking-tight text-neutral-900 dark:text-white sm:mb-6 sm:text-base">{e.title}</h4><ul className="space-y-3">{e.links.map(e => <li><a href={e.href} className="text-sm tracking-tight text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white sm:text-base">{e.text}</a></li>)}</ul></div>)}</div></div></motion.div></div></div><div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8"><motion.div variants={e} className="py-8"><div className="mb-4"><h2 className="text-5xl font-bold text-neutral-900 dark:text-white sm:text-6xl md:text-7xl lg:text-8xl">Chainblk</h2></div><div className="flex flex-col gap-4 text-xs text-neutral-600 dark:text-neutral-400 sm:flex-row sm:items-center sm:text-sm"><p>©2025 Chainblk Protocol</p><span className="hidden sm:inline">•</span><a href="#" className="transition-colors hover:text-neutral-900 dark:hover:text-white">Privacy Policy</a><span className="hidden sm:inline">•</span><a href="#" className="transition-colors hover:text-neutral-900 dark:hover:text-white">Terms of Service</a></div></motion.div></div></motion.div></footer>;
}

export default i;

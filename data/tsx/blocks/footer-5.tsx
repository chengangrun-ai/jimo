/**
 * Footer 5
 * Card footer with a staggered fade
 * slug: footer-5
 * category: Footer
 * export: Footer5
 * deps: lucide-react
 * original: ts-tailwind/blocks/footer/footer-5.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import { Box, Globe, Layers, Zap } from "lucide-react";

function Footer5() {
  return <section className="w-full py-12 px-4 sm:px-6 lg:px-8 bg-white dark:bg-neutral-950"><div className="max-w-[1400px] mx-auto w-full flex flex-col items-center"><div className="relative w-full rounded-2xl sm:rounded-3xl p-8 sm:p-12 lg:p-16 overflow-hidden" style={{
        backgroundColor: "#5227FF"
      }}><div className="absolute inset-0 flex flex-row items-end justify-center pointer-events-none">{Array.from({
            length: 9
          }).map((e, t) => {
            let a = Math.abs(t - 4),
              s = Math.max(20, 90 - 15 * a),
              r = Math.max(.1, 1 - .2 * a);
            return <div className="flex-1 relative" style={{
              height: `${s}%`,
              background: `linear-gradient(to top, rgba(0,0,0,${.3 * r}) 0%, rgba(0,0,0,0) 100%)`
            }} />;
          })}</div><div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8"><div className="flex flex-col space-y-6 sm:space-y-8"><div className="flex items-center gap-2"><img src="/mock-logos/featherdev.svg" alt="FeatherDev" className="h-10 w-auto invert" /></div><p className="text-base sm:text-lg text-white/90 leading-relaxed max-w-sm font-medium">FeatherDev is a React component library that provides a set of pre-built UI components for building modern web applications. Trusted by over 10,000 companies worldwide.</p><div className="flex items-center gap-4">{[Box, Layers, Zap, Globe].map((e, t) => <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-neutral-900 hover:bg-neutral-100 transition-colors duration-200" aria-label="Social link"><e className="w-5 h-5 fill-current" /></a>)}</div></div><div className="grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-12 lg:gap-16"><div className="flex flex-col space-y-4"><h3 className="text-lg font-medium tracking-tight text-white/90">Product</h3><ul className="space-y-3">{["Features", "Integrations", "Pricing", "Updates", "Roadmap", "Enterprise"].map(e => <li><a href="#" className="text-white/90 hover:text-neutral-900 transition-colors">{e}</a></li>)}</ul></div><div className="flex flex-col space-y-4"><h3 className="text-lg font-medium tracking-tight text-white/90">Company</h3><ul className="space-y-3">{["About Us", "Careers", "Contact", "Press Kit", "Partners"].map(e => <li><a href="#" className="text-white/90 hover:text-neutral-900 transition-colors">{e}</a></li>)}</ul></div><div className="flex flex-col space-y-4"><h3 className="text-lg font-medium tracking-tight text-white/90">Resources</h3><ul className="space-y-3">{["Documentation", "API Reference", "Help Center", "Blog"].map(e => <li><a href="#" className="text-white/90 hover:text-neutral-900 transition-colors">{e}</a></li>)}</ul></div></div></div></div><div className="mt-8 sm:mt-12 text-center text-sm sm:text-base text-neutral-500 dark:text-neutral-500 font-medium">© 2025 FeatherDev. All rights reserved.</div></div></section>;
}

export default Footer5;

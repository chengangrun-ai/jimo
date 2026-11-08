import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, Eye, EyeOff } from "lucide-react";
import * as __mod_30701 from "../_helpers/30701";
import * as __mod_77226 from "../_helpers/77226";
/**
 * Auth 1
 * Split sign-in with a testimonial marquee
 * slug: auth-1
 * category: Auth
 * export: Auth1
 * deps: lucide-react, motion, next-themes
 * original: ts-tailwind/blocks/auth/auth-1.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

function Auth1() {
  let {
      theme: e
    } = (0, __mod_30701.D)(),
    [t, a] = (0, React.useState)(!1),
    [u, m] = (0, React.useState)(""),
    [x, g] = (0, React.useState)(""),
    p = [{
      id: 1,
      text: "This platform has transformed how we work. The intuitive interface and powerful features make it indispensable.",
      avatar: "/svg/placeholder.svg",
      name: "Sarah Chen",
      role: "Product Manager"
    }, {
      id: 2,
      text: "Outstanding service and support. The team is responsive and the product keeps getting better with each update.",
      avatar: "/svg/placeholder.svg",
      name: "Marcus Rodriguez",
      role: "Tech Lead"
    }, {
      id: 3,
      text: "We've seen a 40% increase in productivity since implementing this solution. Highly recommended!",
      avatar: "/svg/placeholder.svg",
      name: "Emily Watson",
      role: "Operations Director"
    }, {
      id: 4,
      text: "The best investment we've made this year. Simple, powerful, and exactly what we needed.",
      avatar: "/svg/placeholder.svg",
      name: "James Park",
      role: "Founder & CEO"
    }, {
      id: 5,
      text: "Seamless integration with our existing tools. The onboarding process was smooth and straightforward.",
      avatar: "/svg/placeholder.svg",
      name: "Lisa Thompson",
      role: "Engineering Manager"
    }, {
      id: 6,
      text: "Game-changer for our team collaboration. Everyone loves using it and adoption was instant.",
      avatar: "/svg/placeholder.svg",
      name: "David Kumar",
      role: "Design Lead"
    }];
  return <div className="min-h-screen w-full flex bg-white dark:bg-neutral-950"><div className="w-full lg:w-1/2 flex flex-col justify-between p-6 sm:p-8 lg:p-14 bg-white dark:bg-neutral-950"><motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: .5
      }} className="w-full max-w-md mx-auto"><motion.div initial={{
          opacity: 0,
          scale: .9
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: .4,
          delay: .1
        }} className="mb-8"><div className="w-10 h-10 rounded-lg bg-neutral-900 dark:bg-white flex items-center justify-center"><svg className="w-6 h-6 text-white dark:text-neutral-900" viewBox="0 0 24 24" fill="currentColor"><path d="M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8z" /></svg></div></motion.div><motion.div initial={{
          opacity: 0,
          y: 10
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: .4,
          delay: .2
        }} className="mb-8"><h1 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white mb-2">Welcome back</h1><p className="text-base text-neutral-600 dark:text-neutral-400">Enter your credentials to access your account</p></motion.div><motion.form initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          duration: .4,
          delay: .3
        }} onSubmit={e => {
          e.preventDefault(), console.log("Sign in:", {
            email: u,
            password: x
          });
        }} className="space-y-5"><div><label htmlFor="email" className="block text-sm font-medium text-neutral-900 dark:text-white mb-2">Email address</label><input id="email" type="email" value={u} onChange={e => m(e.target.value)} placeholder="name@company.com" required={!0} className="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white placeholder:text-neutral-500 dark:placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:focus:ring-neutral-600 focus:border-neutral-400 dark:focus:border-neutral-600 transition-all duration-200" /></div><div><label htmlFor="password" className="block text-sm font-medium text-neutral-900 dark:text-white mb-2">Password</label><div className="relative"><input id="password" type={t ? "text" : "password"} value={x} onChange={e => g(e.target.value)} placeholder="Enter your password" required={!0} className="w-full px-4 py-3 pr-12 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white placeholder:text-neutral-500 dark:placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:focus:ring-neutral-600 focus:border-neutral-400 dark:focus:border-neutral-600 transition-all duration-200" /><button type="button" onClick={() => a(!t)} className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors" aria-label={t ? "Hide password" : "Show password"}>{t ? <Eye className="w-5 h-5" /> : <EyeOff className="w-5 h-5" />}</button></div></div><button type="submit" className="w-full px-6 py-3 rounded-lg bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-medium hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors duration-200">Sign in</button></motion.form></motion.div><motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        duration: .4,
        delay: .4
      }} className="w-full max-w-md mx-auto"><button className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"><ArrowLeft className="w-4 h-4" />Back to home</button></motion.div></div><div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-white dark:bg-neutral-950"><div className="absolute inset-0">{"dark" === e ? <__mod_77226.T spacing={30} particleSize={2} color="#404040" glowColor="#737373" alpha={.8} overlay={0} overlayColor="#0a0a0a" minFrequency={.2} maxFrequency={1.2} rate={1} /> : <__mod_77226.T spacing={30} particleSize={2} color="#999999" glowColor="#B19EEF" alpha={1} overlay={0} overlayColor="#ffffff" minFrequency={.2} maxFrequency={1.2} rate={.5} />}</div><div className="relative z-10 flex items-center w-full py-12"><div className="w-full"><div className="relative flex overflow-hidden group"><div className="flex gap-4 animate-marquee group-hover:paused" style={{
              animationDuration: "80s"
            }}>{[...p, ...p].map((e, t) => <h testimonial={e} />)}</div></div></div></div><div className="absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-white dark:from-neutral-950 to-transparent pointer-events-none z-20" /><div className="absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-white dark:from-neutral-950 to-transparent pointer-events-none z-20" /></div></div>;
}
function h({
  testimonial: e
}) {
  return <div className="shrink-0 w-[320px] p-6 rounded-xl bg-white/80 dark:bg-neutral-900/50 backdrop-blur-sm border border-neutral-200 dark:border-neutral-800 hover:bg-white/90 dark:hover:bg-neutral-900/70 transition-colors duration-200 group flex flex-col justify-between min-h-[280px]"><p className="text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">"{e.text}"</p><div className="flex items-center gap-3 mt-4"><div className="w-10 h-10 rounded-full bg-neutral-200 dark:bg-neutral-800 overflow-hidden shrink-0"><img src={e.avatar} alt={e.name} className="w-full h-full object-cover" /></div><div><div className="text-sm font-medium text-neutral-900 dark:text-white">{e.name}</div><div className="text-xs text-neutral-600 dark:text-neutral-500">{e.role}</div></div></div></div>;
}

export default Auth1;

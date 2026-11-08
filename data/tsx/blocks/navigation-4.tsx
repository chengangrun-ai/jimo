import { motion, AnimatePresence } from "motion/react";
import { Briefcase, House, Mail, Menu, User, X } from "lucide-react";
import * as __mod_75272 from "../_helpers/75272";
import * as __mod_47962 from "../_helpers/47962";
import * as __mod_32923 from "../_helpers/32923";
import * as __mod_17192 from "../_helpers/17192";
/**
 * Navigation 4
 * Side dock with hover scaling
 * slug: navigation-4
 * category: Navigation
 * export: Navigation4
 * deps: lucide-react, motion
 * original: ts-tailwind/blocks/navigation/navigation-4.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

function Navigation4() {
  let [e, t] = (0, React.useState)(null),
    [a, d] = (0, React.useState)(!1),
    o = (0, __mod_75272.d)(1 / 0),
    b = [{
      id: "home",
      icon: House,
      label: "Home",
      href: "#"
    }, {
      id: "works",
      icon: Briefcase,
      label: "Works",
      href: "#"
    }, {
      id: "profile",
      icon: User,
      label: "Profile",
      href: "#"
    }, {
      id: "contact",
      icon: Mail,
      label: "Contact",
      href: "#"
    }];
  return <div className="min-h-[var(--rb-section-min-h,100vh)] w-full flex bg-white dark:bg-neutral-950"><motion.div initial={{
      opacity: 0,
      y: -10
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: .4,
      ease: [.4, 0, .2, 1]
    }} className="md:hidden fixed top-0 left-0 right-0 z-50 px-6 py-4"><div className="flex items-center justify-between"><div className="text-left"><p className="text-sm font-bold text-neutral-900 dark:text-white leading-tight">Brand</p><p className="text-sm font-bold text-neutral-900 dark:text-white leading-tight">Appart</p></div><button onClick={() => d(!a)} className="flex h-10 w-10 items-center justify-center rounded-md bg-neutral-900 dark:bg-white text-white dark:text-neutral-900" aria-label={a ? "Close menu" : "Open menu"}>{a ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}</button></div></motion.div><__mod_47962.N>{a && <motion.nav initial={{
        opacity: 0,
        y: 100
      }} animate={{
        opacity: 1,
        y: 0
      }} exit={{
        opacity: 0,
        y: 100
      }} transition={{
        duration: .3,
        ease: [.4, 0, .2, 1]
      }} className="md:hidden fixed bottom-3 left-0 right-0 z-50 px-4 pb-6"><motion.div className="flex items-center justify-center gap-4 px-6 py-4 rounded-3xl bg-white/80 backdrop-blur-2xl dark:bg-neutral-900/80 border border-neutral-200/50 dark:border-neutral-800/50 shadow-xl mx-auto w-fit">{b.map((e, t) => <g item={e} index={t} />)}</motion.div></motion.nav>}</__mod_47962.N><motion.nav initial={{
      opacity: 0,
      x: -20
    }} animate={{
      opacity: 1,
      x: 0
    }} transition={{
      duration: .5,
      ease: [.4, 0, .2, 1]
    }} className="hidden md:flex fixed left-0 top-0 h-screen w-24 flex-col items-center py-8"><motion.div initial={{
        scale: 0
      }} animate={{
        scale: 1
      }} transition={{
        duration: .4,
        delay: .2,
        ease: [.4, 0, .2, 1]
      }} className="mb-12"><div className="w-14 h-14 rounded-full bg-neutral-900 dark:bg-white" /></motion.div><motion.div className="flex-1 flex flex-col items-center justify-center gap-4" onMouseMove={e => o.set(e.pageY)} onMouseLeave={() => o.set(1 / 0)}>{b.map((a, i) => <f item={a} index={i} mouseY={o} hoveredItem={e} setHoveredItem={t} />)}</motion.div><motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        duration: .4,
        delay: .8
      }} className="mt-8"><div className="text-left"><p className="text-sm font-bold text-neutral-900 dark:text-white leading-tight">Build</p><p className="text-sm font-bold text-neutral-900 dark:text-white leading-tight">Better</p></div></motion.div></motion.nav></div>;
}
function f({
  item: e,
  index: t,
  mouseY: a,
  hoveredItem: n,
  setHoveredItem: c
}) {
  let u = (0, React.useRef)(null),
    x = e.icon,
    h = (0, __mod_32923.G)(a, e => {
      let t = u.current?.getBoundingClientRect() ?? {
        y: 0,
        height: 0
      };
      return e - t.y - t.height / 2;
    }),
    m = (0, __mod_32923.G)(h, [-150, -75, 0, 75, 150], [56, 60, 64, 60, 56]),
    p = (0, __mod_17192.z)(m, {
      mass: .1,
      stiffness: 150,
      damping: 12
    });
  return <motion.div ref={u} initial={{
    opacity: 0,
    y: 20
  }} animate={{
    opacity: 1,
    y: 0
  }} transition={{
    duration: .3,
    delay: .3 + .1 * t,
    ease: [.4, 0, .2, 1]
  }} className="relative flex items-center justify-center" style={{
    width: p,
    height: p
  }} onMouseEnter={() => c(e.id)} onMouseLeave={() => c(null)}><a href={e.href} className="flex items-center justify-center w-full h-full rounded-2xl bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 no-underline"><x className="w-5 h-5 text-neutral-900 dark:text-white" /></a><__mod_47962.N>{n === e.id && <motion.div initial={{
        opacity: 0,
        x: -10
      }} animate={{
        opacity: 1,
        x: 0
      }} exit={{
        opacity: 0,
        x: -10
      }} transition={{
        duration: .2,
        ease: "easeOut"
      }} className="absolute left-full ml-4 top-1/2 -translate-y-1/2 whitespace-nowrap px-3 py-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white text-sm font-medium shadow-lg">{e.label}</motion.div>}</__mod_47962.N></motion.div>;
}
function g({
  item: e,
  index: t
}) {
  let a = e.icon;
  return <motion.div initial={{
    opacity: 0,
    scale: 0
  }} animate={{
    opacity: 1,
    scale: 1
  }} transition={{
    duration: .3,
    delay: .3 + .1 * t,
    ease: [.4, 0, .2, 1]
  }} className="relative flex items-center justify-center w-12 h-12"><a href={e.href} className="flex items-center justify-center w-full h-full rounded-2xl bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 no-underline"><a className="w-5 h-5 text-neutral-900 dark:text-white" /></a></motion.div>;
}

export default Navigation4;

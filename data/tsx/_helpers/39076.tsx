import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import * as __mod_50969 from "./50969";
import * as __mod_90650 from "./90650";
import * as __mod_49595 from "./49595";
import { wpN as __wpN } from "./wp-shim";
/**
 * 内部辅助模块 39076（自动内联）
 * 被页面区块共享使用。
 */

"use strict";

var i = __wpN(Link);
function F1(e = 0) {
  return (0, __mod_50969.I)() ? {
    transition: {
      duration: 0
    }
  } : {
    initial: {
      opacity: 0,
      y: 16
    },
    whileInView: {
      opacity: 1,
      y: 0
    },
    viewport: {
      once: !0,
      margin: "-80px"
    },
    transition: {
      duration: .5,
      ease: "easeOut",
      delay: e
    }
  };
}
function m({
  children: e,
  className: t,
  top: r = !1,
  id: a
}) {
  return <section id={a} className={(0, __mod_90650.cn)("w-full pb-20 md:pb-28", r && "pt-20 md:pt-28", t)}><div className={__mod_49595.P}>{e}</div></section>;
}
function p({
  title: e,
  subtitle: t,
  action: r,
  aside: a,
  className: l
}) {
  let d = F1(),
    m = F1(.08),
    p = F1(.12);
  return <div className={(0, __mod_90650.cn)("flex flex-col gap-6 md:flex-row md:items-end md:justify-between md:gap-10", l)}><div className="max-w-2xl"><motion.h2 {...d} className="text-balance text-[2rem] font-medium leading-[1.08] tracking-tighter text-foreground sm:text-4xl md:text-[2.75rem]">{e}</motion.h2>{t && <motion.p {...m} className="mt-4 text-balance text-base leading-relaxed text-muted-foreground">{t}</motion.p>}</div>{(r || a) && <motion.div {...p} className="shrink-0">{a ?? <div href={r.href} className="group inline-flex h-11 items-center justify-center gap-1.5 rounded-md border border-border bg-background/60 pl-5 pr-4 text-sm font-medium tracking-tight text-foreground transition-colors hover:border-foreground/20 hover:bg-accent/50">{r.label}<ArrowRight className="size-4 text-muted-foreground transition-transform duration-200 group-hover:translate-x-0.5" /></div>}</motion.div>}</div>;
}
let M_ = "mt-10 md:mt-12";

export { p as w };
export { m as wn };
export { d as PC };
export { F1, M_ };

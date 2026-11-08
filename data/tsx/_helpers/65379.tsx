import * as React from "react";
import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import * as __mod_91058 from "./91058";
import * as __mod_56191 from "./56191";
import * as __mod_82786 from "./82786";
import * as __mod_50969 from "./50969";
import * as __mod_56268 from "./56268";
import * as __mod_24889 from "./24889";
import * as __mod_20565 from "./20565";
import * as __mod_90650 from "./90650";
import * as __mod_39076 from "./39076";
import * as __mod_83670 from "./83670";
import * as __mod_47962 from "./47962";
import * as __mod_58397 from "./58397";
import * as __mod_73542 from "./73542";
import { wpN as __wpN } from "./wp-shim";
/**
 * 内部辅助模块 65379（自动内联）
 * 被页面区块共享使用。
 */

"use strict";

var o = __wpN(Link);
let x = [{
  id: "starter",
  name: "Starter",
  includes: ["components"],
  price: __mod_91058.s$[0].lifetime,
  annualPrice: __mod_91058.s$[0].annual,
  description: "Every animated component, ready for production.",
  features: [{
    text: `${__mod_56191.Wg} animated components`
  }, {
    text: "Tailwind and vanilla CSS variants"
  }, {
    text: "Production-ready TypeScript"
  }, {
    text: "One-command install for Claude Code and Cursor"
  }, {
    text: "Every future component, free"
  }, {
    text: "Commercial license, unlimited projects"
  }],
  ctaText: "Get Starter",
  checkoutUrl: "https://buy.polar.sh/polar_cl_vH7HxKuwoNadFHWhuOGclq6nLjMYF2YUypXxf1jVjM2",
  annualCheckoutUrl: "https://buy.polar.sh/polar_cl_cDRIwI5ymJps99hYJGN2KNnPVlPdZiEkGLKP74YU6xC"
}, {
  id: "pro",
  name: "Pro",
  includes: ["components", "blocks", "appUi", "agentKit", "builder"],
  price: __mod_91058.s$[1].lifetime,
  annualPrice: __mod_91058.s$[1].annual,
  description: "Components, blocks, app UI and the Agent Kit.",
  features: [{
    text: "Everything in Starter",
    isInherited: !0
  }, {
    text: `${__mod_56191.UQ} page blocks across ${__mod_56191.xJ} categories`
  }, {
    text: `${__mod_56191.L4} app UI blocks across ${__mod_56191.Ce} categories`
  }, {
    text: "Live app UI theming: two styles, plus accent, base, font, radius"
  }, {
    text: `${__mod_56191.FW}-item ${__mod_82786.SU}: skills, prompts, recipes`
  }, {
    text: "Landing Builder (Beta): compose and export pages"
  }, {
    text: "Every future block, free"
  }],
  ctaText: "Get Pro",
  checkoutUrl: "https://buy.polar.sh/polar_cl_rmrMqwb3hftcRlYP6jHrs6H17brmz8jtAKMHh4Liywn",
  annualCheckoutUrl: "https://buy.polar.sh/polar_cl_MrcbzJ53tT4U3nkgN0yELR6I3rt0ikpCfN1V93zEUBA"
}, {
  id: "ultimate",
  name: "Ultimate",
  includes: ["components", "blocks", "appUi", "agentKit", "builder", "templates"],
  price: __mod_91058.s$[2].lifetime,
  annualPrice: __mod_91058.s$[2].annual,
  description: "The complete library, including every template.",
  popular: !0,
  features: [{
    text: "Everything in Pro",
    isInherited: !0
  }, {
    text: `${__mod_56191.nk} complete landing-page templates`
  }, {
    text: "New templates the day they ship"
  }, {
    text: "Priority email support"
  }, {
    text: "One license, the whole product"
  }],
  ctaText: "Get Everything",
  checkoutUrl: "https://buy.polar.sh/polar_cl_7BWXCPQub8ZXrbgHsm70U2wsV1SyDdkhnjmpg15GDNF",
  annualCheckoutUrl: "https://buy.polar.sh/polar_cl_HNtiRm0v4knXKdPWe87FCwA1C86A1cCaMKwFZ4J9NUd"
}];
let C = x.map(e => {
  let t = "pro" === e.id ? " and " : ", ",
    [r, a] = e.description.split(t);
  return {
    ...e,
    description: <>{r}{"pro" === e.id ? "" : ","}<br />{"pro" === e.id ? "and " : ""}{a}</>
  };
});
function N({
  tiers: e = C,
  className: t,
  title: r,
  description: l,
  embedded: f = !1,
  requiredTier: g = "starter",
  placement: b = "pro-home-pricing",
  onBeforeCheckout: x,
  footer: N,
  showDiscount: S = !1,
  discountPercentage: E = 25,
  discountEndDate: $,
  discountCode: P = "RBP25",
  discountMessage: L = "Launch Special",
  socialProofCount: A
}) {
  let I,
    _ = (0, __mod_50969.I)(),
    M = (0, React.useId)(),
    {
      billing: R,
      setBilling: z,
      customerCount: O,
      hasAccess: T,
      userTier: U,
      activeDiscount: B
    } = function ({
      showDiscount: e = !1,
      discountPercentage: t = 25,
      discountCode: r = "RBP25"
    }) {
      let [n, i] = (0, React.useState)("lifetime"),
        [s, l] = (0, React.useState)(null),
        {
          hasAccess: o,
          tier: c,
          loading: d
        } = (0, __mod_56268.H)(),
        {
          parityDiscount: u
        } = (0, __mod_24889.c)(!d && !o),
        m = (0, React.useMemo)(() => d || o ? null : (0, __mod_24889.e)(u, {
          discountPercentage: e ? t : 0,
          couponCode: e ? r : void 0
        }), [u, d, o, e, t, r]);
      return (0, React.useEffect)(() => {
        let e = new AbortController();
        return fetch("/api/order-count", {
          signal: e.signal
        }).then(e => e.json()).then(e => {
          e.live && "customers" === e.kind && e.count > 0 && l(e.count);
        }).catch(() => {}), () => e.abort();
      }, []), {
        billing: n,
        setBilling: i,
        customerCount: s,
        hasAccess: o,
        userTier: c,
        activeDiscount: m
      };
    }({
      showDiscount: S,
      discountPercentage: E,
      discountCode: P
    }),
    F = f && T && (0, __mod_20565.nI)(U) > 0,
    D = B ? <div tabIndex={"parity" === B.source ? 0 : void 0} className={(0, __mod_90650.cn)("discount-pill-shimmer inline-flex self-center items-center gap-1.5 whitespace-nowrap rounded-sm border border-border bg-accent/0 px-3 py-2 text-xs font-medium text-foreground lg:self-auto", "parity" === B.source && "cursor-help outline-none focus-visible:ring-2 focus-visible:ring-ring")}><span>{"parity" === B.source && B.parity?.countryFlag} {"general" === B.source && <>{L} · </>}{B.discountPercentage}% Discount Applied{"general" === B.source && $ && <span className="text-muted-foreground"> · Ends {$}</span>}</span></div> : null;
  return <section id={f ? "code-pricing" : "pricing"} className={(0, __mod_90650.cn)("w-full scroll-mt-28 pb-20 md:pb-28", t)}><div className={f ? "w-full" : __mod_39076.PC}><__mod_39076.w title={r ?? <>Pay once. Ship <span className="bg-clip-text pr-[0.06em] -mr-[0.06em] text-transparent animate-gradient" style={{
          backgroundImage: "linear-gradient(135deg, var(--gradient-colors))"
        }}>forever</span>.</>} subtitle={l ?? <>From standout components to a complete UI system, choose what fits your workflow.{(A || null !== O) && <> <span className="text-foreground">Trusted by {A ?? (I = O >= 1e3 ? 100 * Math.floor(O / 100) : O, `${I.toLocaleString("en-US")}+`)} developers</span></>}</>} aside={<div className="opacity-50 transition-opacity duration-200 hover:opacity-100 focus-within:opacity-100"><div className="inline-flex h-11 items-center gap-1 rounded-md border border-border bg-background/60 p-1">{[{
            key: "lifetime",
            label: "Lifetime"
          }, {
            key: "annual",
            label: "Annual"
          }].map(({
            key: e,
            label: t
          }) => {
            let r = R === e;
            return <button type="button" onClick={() => z(e)} aria-pressed={r} className={(0, __mod_90650.cn)("relative flex h-full cursor-pointer items-center rounded-[5px] px-4 text-sm font-medium tracking-tight transition-colors duration-300", r ? "text-foreground" : "text-muted-foreground hover:text-foreground")}>{r && <motion.span layoutId={M} transition={{
                type: "spring",
                stiffness: 500,
                damping: 38
              }} className="absolute inset-0 rounded-[5px] bg-accent" />}<span className="relative z-10">{t}</span></button>;
          })}</div></div>} /><div className={`${__mod_39076.M_} grid grid-cols-1 gap-4 lg:grid-cols-3`}>{e.map((e, t) => {
          let r,
            a = !f || (0, __mod_20565.lq)(e.id, g),
            l = F && (0, __mod_20565.nI)(U) >= (0, __mod_20565.nI)(e.id),
            o = (r = "annual" === R ? e.annualPrice : e.price, B && "lifetime" === R ? Math.round(r * (1 - B.discountPercentage / 100)) : r),
            c = B && "lifetime" === R ? e.price : null,
            p = (0, __mod_90650.cn)("group mt-8 flex h-12 w-full cursor-pointer items-center justify-center gap-2 rounded-md text-sm font-medium tracking-tight transition-colors duration-200", e.popular ? "bg-foreground text-background hover:opacity-90" : "border border-border bg-background/60 text-foreground hover:border-foreground/20 hover:bg-accent/50"),
            y = a ? l ? "Included in your plan" : null : "Doesn’t include this item",
            v = <div className={(0, __mod_90650.cn)("relative flex h-full flex-col overflow-hidden bg-background p-7 sm:p-8", e.popular ? "rounded-[calc(var(--radius-2xl)-1px)]" : "rounded-2xl border border-border")}>{e.popular && <div aria-hidden={!0} className="absolute inset-0 z-0 opacity-[0.55] mix-blend-multiply dark:mix-blend-screen"><__mod_83670.X className="absolute inset-0" cursorInteraction={!1} /></div>}<div className="relative z-10 flex h-full flex-col"><div className="flex items-center justify-between"><h3 className="text-2xl font-medium tracking-tight text-foreground">{e.name}</h3>{e.popular && <span className="rounded-md border border-border bg-background/60 px-2.5 py-1 text-xs font-medium tracking-tight text-foreground backdrop-blur-sm">Most popular</span>}</div><p className="mt-3 min-h-12 text-sm leading-relaxed text-muted-foreground">{e.description}</p><div className="mt-6 grid min-h-[60px] items-center"><__mod_47962.N initial={!1}><motion.div initial={!_ && {
                      opacity: 0,
                      y: 6
                    }} animate={{
                      opacity: 1,
                      y: 0
                    }} exit={_ ? {
                      opacity: 0
                    } : {
                      opacity: 0,
                      y: -6
                    }} transition={{
                      duration: .22,
                      ease: "easeOut"
                    }} className="col-start-1 row-start-1 flex flex-wrap items-baseline gap-x-2.5 gap-y-1">{null !== c && c !== o && <span className="text-xl font-medium tracking-tight text-muted-foreground/60 line-through">${c}</span>}<span className="text-5xl font-medium tracking-tighter text-foreground">${o}</span><span className="text-sm font-medium text-muted-foreground">{"annual" === R ? <>/ year <span className="text-muted-foreground/60">· ~${Math.round(e.annualPrice / 12)}/mo</span></> : "one-time payment"}</span></motion.div></__mod_47962.N></div><ul className="mt-8 flex flex-1 flex-col gap-2.5">{e.features.map(e => <li className="flex items-start gap-2.5"><Check className={(0, __mod_90650.cn)("mt-0.5 size-4 shrink-0", e.isInherited ? "text-muted-foreground/50" : "text-muted-foreground")} /><span className={(0, __mod_90650.cn)("text-sm font-medium leading-relaxed", e.isInherited ? "text-muted-foreground" : "text-foreground")}>{e.text}</span></li>)}</ul>{y ? <p className="mt-8 flex min-h-12 items-center justify-center text-center text-sm text-muted-foreground">{y}</p> : F ? <a href="mailto:pro@reactbits.dev" className={p}>Contact us to upgrade<ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" /></a> : <__mod_58397.J href={(e => {
                  let t = "annual" === R ? e.annualCheckoutUrl : e.checkoutUrl;
                  if (!t) return "#";
                  let r = "lifetime" === R ? B?.couponCode : void 0,
                    n = new URL(t);
                  return r && n.searchParams.set("discount_code", r), n.toString();
                })(e)} placement={b} target={f ? void 0 : "_blank"} rel="noopener noreferrer" onClick={x} onAuxClick={x} className={p}>{e.ctaText || "Get started"}<ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" /></__mod_58397.J>}</div></div>;
          return <motion.div {..._ ? {} : {
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
              margin: "-60px"
            }
          }} transition={{
            duration: .5,
            ease: "easeOut",
            delay: .1 + .08 * t
          }} className={(0, __mod_90650.cn)("relative", e.popular && "lg:-mt-3 lg:-mb-3")}>{e.popular ? <div className="relative h-full"><div aria-hidden={!0} className="absolute -inset-2 rounded-3xl opacity-25 blur-2xl animate-gradient" style={{
                backgroundImage: "linear-gradient(135deg, var(--gradient-colors))"
              }} /><div className="relative h-full rounded-2xl p-px animate-gradient" style={{
                backgroundImage: "linear-gradient(color-mix(in srgb, var(--background) 45%, transparent), color-mix(in srgb, var(--background) 45%, transparent)), linear-gradient(135deg, var(--gradient-colors))"
              }}>{v}</div></div> : v}</motion.div>;
        })}</div><motion.div {..._ ? {} : {
        initial: {
          opacity: 0,
          y: 20
        },
        whileInView: {
          opacity: 1,
          y: 0
        },
        viewport: {
          once: !0,
          margin: "-80px"
        }
      }} transition={{
        duration: .5,
        ease: "easeOut",
        delay: .18
      }} className="mt-8 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between"><p className="text-sm tracking-tight text-muted-foreground">Lock in today’s price, <div href="/docs/introduction" className="underline underline-offset-2 transition-colors hover:text-foreground">preview</div> before buying, secure checkout by Polar.{f && " Taxes are calculated at checkout."}</p>{D && <div className="flex min-h-9 justify-center lg:min-w-52 lg:justify-end"><__mod_47962.N initial={!1}>{"lifetime" === R && <motion.div initial={!_ && {
              opacity: 0,
              y: -4,
              scale: .98
            }} animate={{
              opacity: 1,
              y: 0,
              scale: 1
            }} exit={_ ? {
              opacity: 0
            } : {
              opacity: 0,
              y: 4,
              scale: .98
            }} transition={{
              duration: .2,
              ease: "easeOut"
            }}>{B?.source === "parity" ? <__mod_73542.m_><__mod_73542.k$ asChild={!0}>{D}</__mod_73542.k$><__mod_73542.ZI side="bottom" align="end" sideOffset={8} arrowClassName="fill-popover stroke-border" className="max-w-72 border border-border bg-popover px-3 py-2 text-left leading-relaxed text-popover-foreground shadow-lg">Regional pricing keeps React Bits Pro accessible where purchasing power is lower. Your best discount is applied automatically.</__mod_73542.ZI></__mod_73542.m_> : D}</motion.div>}</__mod_47962.N></div>}</motion.div>{N && <div className="mt-6">{N}</div>}</div></section>;
}

export { N as Pricing };

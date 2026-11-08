import * as __mod_21211 from "../_helpers/21211";
import * as __mod_90650 from "../_helpers/90650";
import * as __mod_45949 from "../_helpers/45949";
import * as __mod_90761 from "../_helpers/90761";
import * as __mod_56388 from "../_helpers/56388";
import { wpN as __wpN } from "../_helpers/wp-shim";
/**
 * Circles
 * Rings of images orbiting a center
 * slug: circles
 * category: animation
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

"use strict";

var c = __wpN(__mod_21211);
let p = ({
  rows: e = [["/demo-media/portrait-sienna.webp", "/demo-media/portrait-indigo.webp"], ["/demo-media/portrait-olive.webp", "/demo-media/portrait-silver.webp", "/demo-media/portrait-ochre.webp"], ["/demo-media/portrait-rose.webp", "/demo-media/portrait-teal.webp", "/demo-media/portrait-pearl.webp", "/demo-media/portrait-sienna.webp"]],
  circleSize: t = 64,
  baseRadius: r = 120,
  orbitGap: i = 100,
  rotationDuration: l = 20,
  rowDelay: o = .5,
  direction: s = "clockwise",
  alternateDirection: p = !1,
  fadeMode: h = "none",
  fadeBlur: d = !1,
  showPaths: g = !0,
  animate: m = !0,
  animationDuration: f = .6,
  animationStagger: b = .15,
  staggerScaleFactor: y = 0,
  className: $
}) => {
  let x = (0, React.useMemo)(() => e.map(e => [...e]), [e]),
    v = (r + (x.length - 1) * i + t) * 2;
  return <div style={{
    width: `${v}px`,
    height: `${v}px`,
    animation: m ? "circles-container-fade-in 0.8s ease-out" : void 0
  }} className={c().dynamic([["32176ae4e8456b31", [x.map((e, t) => `
          @keyframes circles-orbit-${t} {
            from {
              transform: translate(-50%, -50%) rotate(0deg);
            }
            to {
              transform: translate(-50%, -50%) rotate(360deg);
            }
          }

          @keyframes circles-counter-orbit-${t} {
            0% {
              transform: rotate(calc(-1 * var(--item-angle))) scale(1);
              opacity: ${"in" === h ? .2 + t / (x.length - 1) * .8 : "out" === h ? .2 + (x.length - t - 1) / (x.length - 1) * .8 : 1};
              filter: ${d && "none" !== h ? "in" === h ? `blur(${(x.length - t - 1) / (x.length - 1) * 8}px)` : `blur(${t / (x.length - 1) * 8}px)` : "none"};
            }
            100% {
              transform: rotate(calc(-1 * var(--item-angle) - 360deg)) scale(1);
              opacity: ${"in" === h ? .2 + t / (x.length - 1) * .8 : "out" === h ? .2 + (x.length - t - 1) / (x.length - 1) * .8 : 1};
              filter: ${d && "none" !== h ? "in" === h ? `blur(${(x.length - t - 1) / (x.length - 1) * 8}px)` : `blur(${t / (x.length - 1) * 8}px)` : "none"};
            }
          }

          @keyframes circles-entrance-${t} {
            0% {
              opacity: 0;
              transform: rotate(calc(-1 * var(--item-angle))) scale(0.6);
              filter: blur(10px) ${d && "none" !== h ? "in" === h ? `blur(${(x.length - t - 1) / (x.length - 1) * 8}px)` : `blur(${t / (x.length - 1) * 8}px)` : ""};
            }
            60% {
              filter: ${d && "none" !== h ? "in" === h ? `blur(${(x.length - t - 1) / (x.length - 1) * 8}px)` : `blur(${t / (x.length - 1) * 8}px)` : "blur(0px)"};
            }
            100% {
              opacity: ${"in" === h ? .2 + t / (x.length - 1) * .8 : "out" === h ? .2 + (x.length - t - 1) / (x.length - 1) * .8 : 1};
              transform: rotate(calc(-1 * var(--item-angle))) scale(1);
              filter: ${d && "none" !== h ? "in" === h ? `blur(${(x.length - t - 1) / (x.length - 1) * 8}px)` : `blur(${t / (x.length - 1) * 8}px)` : "blur(0px)"};
            }
          }
        `).join("\n")]]]) + " " + ((0, __mod_90650.cn)("relative", $) || "")}><div className={c().dynamic([["32176ae4e8456b31", [x.map((e, t) => `
          @keyframes circles-orbit-${t} {
            from {
              transform: translate(-50%, -50%) rotate(0deg);
            }
            to {
              transform: translate(-50%, -50%) rotate(360deg);
            }
          }

          @keyframes circles-counter-orbit-${t} {
            0% {
              transform: rotate(calc(-1 * var(--item-angle))) scale(1);
              opacity: ${"in" === h ? .2 + t / (x.length - 1) * .8 : "out" === h ? .2 + (x.length - t - 1) / (x.length - 1) * .8 : 1};
              filter: ${d && "none" !== h ? "in" === h ? `blur(${(x.length - t - 1) / (x.length - 1) * 8}px)` : `blur(${t / (x.length - 1) * 8}px)` : "none"};
            }
            100% {
              transform: rotate(calc(-1 * var(--item-angle) - 360deg)) scale(1);
              opacity: ${"in" === h ? .2 + t / (x.length - 1) * .8 : "out" === h ? .2 + (x.length - t - 1) / (x.length - 1) * .8 : 1};
              filter: ${d && "none" !== h ? "in" === h ? `blur(${(x.length - t - 1) / (x.length - 1) * 8}px)` : `blur(${t / (x.length - 1) * 8}px)` : "none"};
            }
          }

          @keyframes circles-entrance-${t} {
            0% {
              opacity: 0;
              transform: rotate(calc(-1 * var(--item-angle))) scale(0.6);
              filter: blur(10px) ${d && "none" !== h ? "in" === h ? `blur(${(x.length - t - 1) / (x.length - 1) * 8}px)` : `blur(${t / (x.length - 1) * 8}px)` : ""};
            }
            60% {
              filter: ${d && "none" !== h ? "in" === h ? `blur(${(x.length - t - 1) / (x.length - 1) * 8}px)` : `blur(${t / (x.length - 1) * 8}px)` : "blur(0px)"};
            }
            100% {
              opacity: ${"in" === h ? .2 + t / (x.length - 1) * .8 : "out" === h ? .2 + (x.length - t - 1) / (x.length - 1) * .8 : 1};
              transform: rotate(calc(-1 * var(--item-angle))) scale(1);
              filter: ${d && "none" !== h ? "in" === h ? `blur(${(x.length - t - 1) / (x.length - 1) * 8}px)` : `blur(${t / (x.length - 1) * 8}px)` : "blur(0px)"};
            }
          }
        `).join("\n")]]]) + " absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"}>{g && <svg style={{
        width: `${v}px`,
        height: `${v}px`,
        transform: "translate(-50%, -50%)"
      }} className={c().dynamic([["32176ae4e8456b31", [x.map((e, t) => `
          @keyframes circles-orbit-${t} {
            from {
              transform: translate(-50%, -50%) rotate(0deg);
            }
            to {
              transform: translate(-50%, -50%) rotate(360deg);
            }
          }

          @keyframes circles-counter-orbit-${t} {
            0% {
              transform: rotate(calc(-1 * var(--item-angle))) scale(1);
              opacity: ${"in" === h ? .2 + t / (x.length - 1) * .8 : "out" === h ? .2 + (x.length - t - 1) / (x.length - 1) * .8 : 1};
              filter: ${d && "none" !== h ? "in" === h ? `blur(${(x.length - t - 1) / (x.length - 1) * 8}px)` : `blur(${t / (x.length - 1) * 8}px)` : "none"};
            }
            100% {
              transform: rotate(calc(-1 * var(--item-angle) - 360deg)) scale(1);
              opacity: ${"in" === h ? .2 + t / (x.length - 1) * .8 : "out" === h ? .2 + (x.length - t - 1) / (x.length - 1) * .8 : 1};
              filter: ${d && "none" !== h ? "in" === h ? `blur(${(x.length - t - 1) / (x.length - 1) * 8}px)` : `blur(${t / (x.length - 1) * 8}px)` : "none"};
            }
          }

          @keyframes circles-entrance-${t} {
            0% {
              opacity: 0;
              transform: rotate(calc(-1 * var(--item-angle))) scale(0.6);
              filter: blur(10px) ${d && "none" !== h ? "in" === h ? `blur(${(x.length - t - 1) / (x.length - 1) * 8}px)` : `blur(${t / (x.length - 1) * 8}px)` : ""};
            }
            60% {
              filter: ${d && "none" !== h ? "in" === h ? `blur(${(x.length - t - 1) / (x.length - 1) * 8}px)` : `blur(${t / (x.length - 1) * 8}px)` : "blur(0px)"};
            }
            100% {
              opacity: ${"in" === h ? .2 + t / (x.length - 1) * .8 : "out" === h ? .2 + (x.length - t - 1) / (x.length - 1) * .8 : 1};
              transform: rotate(calc(-1 * var(--item-angle))) scale(1);
              filter: ${d && "none" !== h ? "in" === h ? `blur(${(x.length - t - 1) / (x.length - 1) * 8}px)` : `blur(${t / (x.length - 1) * 8}px)` : "blur(0px)"};
            }
          }
        `).join("\n")]]]) + " absolute left-1/2 top-1/2 pointer-events-none"}>{x.map((e, t) => <circle cx="50%" cy="50%" r={r + t * i} fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="8 8" style={{
          opacity: .5,
          animation: m ? `circles-path-entrance ${f}s ease-out ${t * b}s backwards` : void 0
        }} className={c().dynamic([["32176ae4e8456b31", [x.map((e, t) => `
          @keyframes circles-orbit-${t} {
            from {
              transform: translate(-50%, -50%) rotate(0deg);
            }
            to {
              transform: translate(-50%, -50%) rotate(360deg);
            }
          }

          @keyframes circles-counter-orbit-${t} {
            0% {
              transform: rotate(calc(-1 * var(--item-angle))) scale(1);
              opacity: ${"in" === h ? .2 + t / (x.length - 1) * .8 : "out" === h ? .2 + (x.length - t - 1) / (x.length - 1) * .8 : 1};
              filter: ${d && "none" !== h ? "in" === h ? `blur(${(x.length - t - 1) / (x.length - 1) * 8}px)` : `blur(${t / (x.length - 1) * 8}px)` : "none"};
            }
            100% {
              transform: rotate(calc(-1 * var(--item-angle) - 360deg)) scale(1);
              opacity: ${"in" === h ? .2 + t / (x.length - 1) * .8 : "out" === h ? .2 + (x.length - t - 1) / (x.length - 1) * .8 : 1};
              filter: ${d && "none" !== h ? "in" === h ? `blur(${(x.length - t - 1) / (x.length - 1) * 8}px)` : `blur(${t / (x.length - 1) * 8}px)` : "none"};
            }
          }

          @keyframes circles-entrance-${t} {
            0% {
              opacity: 0;
              transform: rotate(calc(-1 * var(--item-angle))) scale(0.6);
              filter: blur(10px) ${d && "none" !== h ? "in" === h ? `blur(${(x.length - t - 1) / (x.length - 1) * 8}px)` : `blur(${t / (x.length - 1) * 8}px)` : ""};
            }
            60% {
              filter: ${d && "none" !== h ? "in" === h ? `blur(${(x.length - t - 1) / (x.length - 1) * 8}px)` : `blur(${t / (x.length - 1) * 8}px)` : "blur(0px)"};
            }
            100% {
              opacity: ${"in" === h ? .2 + t / (x.length - 1) * .8 : "out" === h ? .2 + (x.length - t - 1) / (x.length - 1) * .8 : 1};
              transform: rotate(calc(-1 * var(--item-angle))) scale(1);
              filter: ${d && "none" !== h ? "in" === h ? `blur(${(x.length - t - 1) / (x.length - 1) * 8}px)` : `blur(${t / (x.length - 1) * 8}px)` : "blur(0px)"};
            }
          }
        `).join("\n")]]]) + " stroke-gray-300 dark:stroke-gray-700"} />)}</svg>}{x.map((e, a) => {
        let u = r + a * i,
          g = l + a * o;
        p && a % 2 == 1 && ($ = "clockwise" === s ? "counterclockwise" : "clockwise");
        let v = "clockwise" === s ? "normal" : "reverse";
        return <ul style={{
          width: `${2 * u}px`,
          height: `${2 * u}px`,
          transform: "translate(-50%, -50%)",
          animation: `circles-orbit-${a} ${g}s linear infinite ${v}`
        }} className={c().dynamic([["32176ae4e8456b31", [x.map((e, t) => `
          @keyframes circles-orbit-${t} {
            from {
              transform: translate(-50%, -50%) rotate(0deg);
            }
            to {
              transform: translate(-50%, -50%) rotate(360deg);
            }
          }

          @keyframes circles-counter-orbit-${t} {
            0% {
              transform: rotate(calc(-1 * var(--item-angle))) scale(1);
              opacity: ${"in" === h ? .2 + t / (x.length - 1) * .8 : "out" === h ? .2 + (x.length - t - 1) / (x.length - 1) * .8 : 1};
              filter: ${d && "none" !== h ? "in" === h ? `blur(${(x.length - t - 1) / (x.length - 1) * 8}px)` : `blur(${t / (x.length - 1) * 8}px)` : "none"};
            }
            100% {
              transform: rotate(calc(-1 * var(--item-angle) - 360deg)) scale(1);
              opacity: ${"in" === h ? .2 + t / (x.length - 1) * .8 : "out" === h ? .2 + (x.length - t - 1) / (x.length - 1) * .8 : 1};
              filter: ${d && "none" !== h ? "in" === h ? `blur(${(x.length - t - 1) / (x.length - 1) * 8}px)` : `blur(${t / (x.length - 1) * 8}px)` : "none"};
            }
          }

          @keyframes circles-entrance-${t} {
            0% {
              opacity: 0;
              transform: rotate(calc(-1 * var(--item-angle))) scale(0.6);
              filter: blur(10px) ${d && "none" !== h ? "in" === h ? `blur(${(x.length - t - 1) / (x.length - 1) * 8}px)` : `blur(${t / (x.length - 1) * 8}px)` : ""};
            }
            60% {
              filter: ${d && "none" !== h ? "in" === h ? `blur(${(x.length - t - 1) / (x.length - 1) * 8}px)` : `blur(${t / (x.length - 1) * 8}px)` : "blur(0px)"};
            }
            100% {
              opacity: ${"in" === h ? .2 + t / (x.length - 1) * .8 : "out" === h ? .2 + (x.length - t - 1) / (x.length - 1) * .8 : 1};
              transform: rotate(calc(-1 * var(--item-angle))) scale(1);
              filter: ${d && "none" !== h ? "in" === h ? `blur(${(x.length - t - 1) / (x.length - 1) * 8}px)` : `blur(${t / (x.length - 1) * 8}px)` : "blur(0px)"};
            }
          }
        `).join("\n")]]]) + " absolute left-1/2 top-1/2 list-none p-0 m-0 rounded-full"}>{e.map((r, i) => {
            let l = (360 / e.length * i - 90) % 360,
              o = t * (1 + a * y);
            return <li style={{
              width: `${o}px`,
              height: `${o}px`,
              margin: `-${o / 2}px`,
              transform: `rotate(${l}deg) translateX(${u}px)`,
              "--item-angle": `${l}deg`,
              "--entrance-delay": `${a * b}s`,
              "--target-opacity": "in" === h ? .2 + a / (x.length - 1) * .8 : "out" === h ? .2 + (x.length - a - 1) / (x.length - 1) * .8 : 1,
              "--target-blur": d && "none" !== h ? "in" === h ? `${(x.length - a - 1) / (x.length - 1) * 8}px` : `${a / (x.length - 1) * 8}px` : "0px"
            }} className={c().dynamic([["32176ae4e8456b31", [x.map((e, t) => `
          @keyframes circles-orbit-${t} {
            from {
              transform: translate(-50%, -50%) rotate(0deg);
            }
            to {
              transform: translate(-50%, -50%) rotate(360deg);
            }
          }

          @keyframes circles-counter-orbit-${t} {
            0% {
              transform: rotate(calc(-1 * var(--item-angle))) scale(1);
              opacity: ${"in" === h ? .2 + t / (x.length - 1) * .8 : "out" === h ? .2 + (x.length - t - 1) / (x.length - 1) * .8 : 1};
              filter: ${d && "none" !== h ? "in" === h ? `blur(${(x.length - t - 1) / (x.length - 1) * 8}px)` : `blur(${t / (x.length - 1) * 8}px)` : "none"};
            }
            100% {
              transform: rotate(calc(-1 * var(--item-angle) - 360deg)) scale(1);
              opacity: ${"in" === h ? .2 + t / (x.length - 1) * .8 : "out" === h ? .2 + (x.length - t - 1) / (x.length - 1) * .8 : 1};
              filter: ${d && "none" !== h ? "in" === h ? `blur(${(x.length - t - 1) / (x.length - 1) * 8}px)` : `blur(${t / (x.length - 1) * 8}px)` : "none"};
            }
          }

          @keyframes circles-entrance-${t} {
            0% {
              opacity: 0;
              transform: rotate(calc(-1 * var(--item-angle))) scale(0.6);
              filter: blur(10px) ${d && "none" !== h ? "in" === h ? `blur(${(x.length - t - 1) / (x.length - 1) * 8}px)` : `blur(${t / (x.length - 1) * 8}px)` : ""};
            }
            60% {
              filter: ${d && "none" !== h ? "in" === h ? `blur(${(x.length - t - 1) / (x.length - 1) * 8}px)` : `blur(${t / (x.length - 1) * 8}px)` : "blur(0px)"};
            }
            100% {
              opacity: ${"in" === h ? .2 + t / (x.length - 1) * .8 : "out" === h ? .2 + (x.length - t - 1) / (x.length - 1) * .8 : 1};
              transform: rotate(calc(-1 * var(--item-angle))) scale(1);
              filter: ${d && "none" !== h ? "in" === h ? `blur(${(x.length - t - 1) / (x.length - 1) * 8}px)` : `blur(${t / (x.length - 1) * 8}px)` : "blur(0px)"};
            }
          }
        `).join("\n")]]]) + " absolute block left-1/2 top-1/2"}><div style={{
                animation: m ? `circles-entrance-${a} ${f}s cubic-bezier(0.34, 1.56, 0.64, 1) ${a * b}s both, circles-counter-orbit-${a} ${g}s linear infinite ${a * b}s ${v}` : `circles-counter-orbit-${a} ${g}s linear infinite ${v}`
              }} className={c().dynamic([["32176ae4e8456b31", [x.map((e, t) => `
          @keyframes circles-orbit-${t} {
            from {
              transform: translate(-50%, -50%) rotate(0deg);
            }
            to {
              transform: translate(-50%, -50%) rotate(360deg);
            }
          }

          @keyframes circles-counter-orbit-${t} {
            0% {
              transform: rotate(calc(-1 * var(--item-angle))) scale(1);
              opacity: ${"in" === h ? .2 + t / (x.length - 1) * .8 : "out" === h ? .2 + (x.length - t - 1) / (x.length - 1) * .8 : 1};
              filter: ${d && "none" !== h ? "in" === h ? `blur(${(x.length - t - 1) / (x.length - 1) * 8}px)` : `blur(${t / (x.length - 1) * 8}px)` : "none"};
            }
            100% {
              transform: rotate(calc(-1 * var(--item-angle) - 360deg)) scale(1);
              opacity: ${"in" === h ? .2 + t / (x.length - 1) * .8 : "out" === h ? .2 + (x.length - t - 1) / (x.length - 1) * .8 : 1};
              filter: ${d && "none" !== h ? "in" === h ? `blur(${(x.length - t - 1) / (x.length - 1) * 8}px)` : `blur(${t / (x.length - 1) * 8}px)` : "none"};
            }
          }

          @keyframes circles-entrance-${t} {
            0% {
              opacity: 0;
              transform: rotate(calc(-1 * var(--item-angle))) scale(0.6);
              filter: blur(10px) ${d && "none" !== h ? "in" === h ? `blur(${(x.length - t - 1) / (x.length - 1) * 8}px)` : `blur(${t / (x.length - 1) * 8}px)` : ""};
            }
            60% {
              filter: ${d && "none" !== h ? "in" === h ? `blur(${(x.length - t - 1) / (x.length - 1) * 8}px)` : `blur(${t / (x.length - 1) * 8}px)` : "blur(0px)"};
            }
            100% {
              opacity: ${"in" === h ? .2 + t / (x.length - 1) * .8 : "out" === h ? .2 + (x.length - t - 1) / (x.length - 1) * .8 : 1};
              transform: rotate(calc(-1 * var(--item-angle))) scale(1);
              filter: ${d && "none" !== h ? "in" === h ? `blur(${(x.length - t - 1) / (x.length - 1) * 8}px)` : `blur(${t / (x.length - 1) * 8}px)` : "blur(0px)"};
            }
          }
        `).join("\n")]]]) + " w-full h-full rounded-full overflow-hidden shadow-lg border-2 border-white dark:border-gray-800"}><img src={r} alt={`Circle ${a}-${i}`} loading="lazy" className={c().dynamic([["32176ae4e8456b31", [x.map((e, t) => `
          @keyframes circles-orbit-${t} {
            from {
              transform: translate(-50%, -50%) rotate(0deg);
            }
            to {
              transform: translate(-50%, -50%) rotate(360deg);
            }
          }

          @keyframes circles-counter-orbit-${t} {
            0% {
              transform: rotate(calc(-1 * var(--item-angle))) scale(1);
              opacity: ${"in" === h ? .2 + t / (x.length - 1) * .8 : "out" === h ? .2 + (x.length - t - 1) / (x.length - 1) * .8 : 1};
              filter: ${d && "none" !== h ? "in" === h ? `blur(${(x.length - t - 1) / (x.length - 1) * 8}px)` : `blur(${t / (x.length - 1) * 8}px)` : "none"};
            }
            100% {
              transform: rotate(calc(-1 * var(--item-angle) - 360deg)) scale(1);
              opacity: ${"in" === h ? .2 + t / (x.length - 1) * .8 : "out" === h ? .2 + (x.length - t - 1) / (x.length - 1) * .8 : 1};
              filter: ${d && "none" !== h ? "in" === h ? `blur(${(x.length - t - 1) / (x.length - 1) * 8}px)` : `blur(${t / (x.length - 1) * 8}px)` : "none"};
            }
          }

          @keyframes circles-entrance-${t} {
            0% {
              opacity: 0;
              transform: rotate(calc(-1 * var(--item-angle))) scale(0.6);
              filter: blur(10px) ${d && "none" !== h ? "in" === h ? `blur(${(x.length - t - 1) / (x.length - 1) * 8}px)` : `blur(${t / (x.length - 1) * 8}px)` : ""};
            }
            60% {
              filter: ${d && "none" !== h ? "in" === h ? `blur(${(x.length - t - 1) / (x.length - 1) * 8}px)` : `blur(${t / (x.length - 1) * 8}px)` : "blur(0px)"};
            }
            100% {
              opacity: ${"in" === h ? .2 + t / (x.length - 1) * .8 : "out" === h ? .2 + (x.length - t - 1) / (x.length - 1) * .8 : 1};
              transform: rotate(calc(-1 * var(--item-angle))) scale(1);
              filter: ${d && "none" !== h ? "in" === h ? `blur(${(x.length - t - 1) / (x.length - 1) * 8}px)` : `blur(${t / (x.length - 1) * 8}px)` : "blur(0px)"};
            }
          }
        `).join("\n")]]]) + " w-full h-full object-cover"} /></div></li>;
          })}</ul>;
      })}</div><div id="32176ae4e8456b31" dynamic={[x.map((e, t) => `
          @keyframes circles-orbit-${t} {
            from {
              transform: translate(-50%, -50%) rotate(0deg);
            }
            to {
              transform: translate(-50%, -50%) rotate(360deg);
            }
          }

          @keyframes circles-counter-orbit-${t} {
            0% {
              transform: rotate(calc(-1 * var(--item-angle))) scale(1);
              opacity: ${"in" === h ? .2 + t / (x.length - 1) * .8 : "out" === h ? .2 + (x.length - t - 1) / (x.length - 1) * .8 : 1};
              filter: ${d && "none" !== h ? "in" === h ? `blur(${(x.length - t - 1) / (x.length - 1) * 8}px)` : `blur(${t / (x.length - 1) * 8}px)` : "none"};
            }
            100% {
              transform: rotate(calc(-1 * var(--item-angle) - 360deg)) scale(1);
              opacity: ${"in" === h ? .2 + t / (x.length - 1) * .8 : "out" === h ? .2 + (x.length - t - 1) / (x.length - 1) * .8 : 1};
              filter: ${d && "none" !== h ? "in" === h ? `blur(${(x.length - t - 1) / (x.length - 1) * 8}px)` : `blur(${t / (x.length - 1) * 8}px)` : "none"};
            }
          }

          @keyframes circles-entrance-${t} {
            0% {
              opacity: 0;
              transform: rotate(calc(-1 * var(--item-angle))) scale(0.6);
              filter: blur(10px) ${d && "none" !== h ? "in" === h ? `blur(${(x.length - t - 1) / (x.length - 1) * 8}px)` : `blur(${t / (x.length - 1) * 8}px)` : ""};
            }
            60% {
              filter: ${d && "none" !== h ? "in" === h ? `blur(${(x.length - t - 1) / (x.length - 1) * 8}px)` : `blur(${t / (x.length - 1) * 8}px)` : "blur(0px)"};
            }
            100% {
              opacity: ${"in" === h ? .2 + t / (x.length - 1) * .8 : "out" === h ? .2 + (x.length - t - 1) / (x.length - 1) * .8 : 1};
              transform: rotate(calc(-1 * var(--item-angle))) scale(1);
              filter: ${d && "none" !== h ? "in" === h ? `blur(${(x.length - t - 1) / (x.length - 1) * 8}px)` : `blur(${t / (x.length - 1) * 8}px)` : "blur(0px)"};
            }
          }
        `).join("\n")]}>{`@keyframes circles-container-fade-in{0%{opacity:0}100%{opacity:1}}@keyframes circles-path-entrance{0%{opacity:0;stroke-dashoffset:100}100%{opacity:.5;stroke-dashoffset:0}}${x.map((e, t) => `
          @keyframes circles-orbit-${t} {
            from {
              transform: translate(-50%, -50%) rotate(0deg);
            }
            to {
              transform: translate(-50%, -50%) rotate(360deg);
            }
          }

          @keyframes circles-counter-orbit-${t} {
            0% {
              transform: rotate(calc(-1 * var(--item-angle))) scale(1);
              opacity: ${"in" === h ? .2 + t / (x.length - 1) * .8 : "out" === h ? .2 + (x.length - t - 1) / (x.length - 1) * .8 : 1};
              filter: ${d && "none" !== h ? "in" === h ? `blur(${(x.length - t - 1) / (x.length - 1) * 8}px)` : `blur(${t / (x.length - 1) * 8}px)` : "none"};
            }
            100% {
              transform: rotate(calc(-1 * var(--item-angle) - 360deg)) scale(1);
              opacity: ${"in" === h ? .2 + t / (x.length - 1) * .8 : "out" === h ? .2 + (x.length - t - 1) / (x.length - 1) * .8 : 1};
              filter: ${d && "none" !== h ? "in" === h ? `blur(${(x.length - t - 1) / (x.length - 1) * 8}px)` : `blur(${t / (x.length - 1) * 8}px)` : "none"};
            }
          }

          @keyframes circles-entrance-${t} {
            0% {
              opacity: 0;
              transform: rotate(calc(-1 * var(--item-angle))) scale(0.6);
              filter: blur(10px) ${d && "none" !== h ? "in" === h ? `blur(${(x.length - t - 1) / (x.length - 1) * 8}px)` : `blur(${t / (x.length - 1) * 8}px)` : ""};
            }
            60% {
              filter: ${d && "none" !== h ? "in" === h ? `blur(${(x.length - t - 1) / (x.length - 1) * 8}px)` : `blur(${t / (x.length - 1) * 8}px)` : "blur(0px)"};
            }
            100% {
              opacity: ${"in" === h ? .2 + t / (x.length - 1) * .8 : "out" === h ? .2 + (x.length - t - 1) / (x.length - 1) * .8 : 1};
              transform: rotate(calc(-1 * var(--item-angle))) scale(1);
              filter: ${d && "none" !== h ? "in" === h ? `blur(${(x.length - t - 1) / (x.length - 1) * 8}px)` : `blur(${t / (x.length - 1) * 8}px)` : "blur(0px)"};
            }
          }
        `).join("\n")}
      `}</div></div>;
};
p.displayName = "Circles";
let h = [6, 9, 15, 15, 15].map((e, t) => Array.from({
    length: e
  }, (e, r) => __mod_45949.xb[(r + t) % __mod_45949.xb.length])),
  d = () => {
    let [e, t] = (0, __mod_90761.I)(),
      [r, l] = (0, React.useState)(64),
      [s, c] = (0, React.useState)(120),
      [u, d] = (0, React.useState)(100),
      [g, m] = (0, React.useState)(20),
      [f, b] = (0, React.useState)(.5),
      [y, $] = (0, React.useState)("clockwise"),
      [x, v] = (0, React.useState)(!0),
      [w, S] = (0, React.useState)("out"),
      [_, k] = (0, React.useState)(!0),
      [j, C] = (0, React.useState)(!0),
      [R, F] = (0, React.useState)(!0),
      [z, T] = (0, React.useState)(.6),
      [N, O] = (0, React.useState)(.15),
      [A, P] = (0, React.useState)(0);
    return <div><__mod_56388.Bg /><__mod_56388.VX><__mod_56388.Ec><__mod_56388.Ch onRefresh={t} minHeight={600}><p rows={h} circleSize={r} baseRadius={s} orbitGap={u} rotationDuration={g} rowDelay={f} direction={y} alternateDirection={x} fadeMode={w} fadeBlur={_} showPaths={j} animate={R} animationDuration={z} animationStagger={N} staggerScaleFactor={A} /></__mod_56388.Ch><__mod_56388.IH><__mod_56388.yt title="Circle Size" value={r} onChange={e => {
              l(e), t();
            }} min={32} max={128} step={8} /><__mod_56388.yt title="Base Radius" value={s} onChange={e => {
              c(e), t();
            }} min={60} max={300} step={10} /><__mod_56388.yt title="Orbit Gap" value={u} onChange={e => {
              d(e), t();
            }} min={50} max={200} step={10} /><__mod_56388.yt title="Stagger Scale Factor" value={A} onChange={e => {
              P(e), t();
            }} min={-.3} max={.3} step={.05} /><__mod_56388.tl title="Show Paths" checked={j} onChange={e => {
              C(e), t();
            }} /><__mod_56388.yt title="Rotation Duration (s)" value={g} onChange={e => {
              m(e), t();
            }} min={5} max={60} step={5} /><__mod_56388.yt title="Row Delay (s)" value={f} onChange={e => {
              b(e), t();
            }} min={0} max={2} step={.1} /><__mod_56388.bg title="Direction" value={y} onChange={e => {
              $(e), t();
            }} options={[{
              label: "Clockwise",
              value: "clockwise"
            }, {
              label: "Counterclockwise",
              value: "counterclockwise"
            }]} /><__mod_56388.tl title="Alternate Direction" checked={x} onChange={e => {
              v(e), t();
            }} /><__mod_56388.bg title="Fade Mode" value={w} onChange={e => {
              S(e), t();
            }} options={[{
              label: "None",
              value: "none"
            }, {
              label: "Fade In",
              value: "in"
            }, {
              label: "Fade Out",
              value: "out"
            }]} /><__mod_56388.tl title="Fade Blur" checked={_} onChange={e => {
              k(e), t();
            }} /><__mod_56388.tl title="Entrance Animation" checked={R} onChange={e => {
              F(e), t();
            }} /><__mod_56388.yt title="Animation Duration (s)" value={z} onChange={e => {
              T(e), t();
            }} min={.2} max={2} step={.1} /><__mod_56388.yt title="Animation Stagger (s)" value={N} onChange={e => {
              O(e), t();
            }} min={0} max={.5} step={.05} /></__mod_56388.IH><__mod_56388.Ub data={[{
            name: "rows",
            type: "string[][]",
            default: "[[...], [...], [...]]",
            description: "Array of rows, where each row is an array of image URLs. Each row creates a concentric orbit ring with evenly distributed circles."
          }, {
            name: "circleSize",
            type: "number",
            default: "64",
            description: "Size of each circle/image in pixels"
          }, {
            name: "baseRadius",
            type: "number",
            default: "120",
            description: "Base radius for the innermost orbit ring in pixels"
          }, {
            name: "orbitGap",
            type: "number",
            default: "100",
            description: "Gap between each concentric orbit ring in pixels"
          }, {
            name: "rotationDuration",
            type: "number",
            default: "20",
            description: "Duration of one complete rotation in seconds for the first ring"
          }, {
            name: "rowDelay",
            type: "number",
            default: "0.5",
            description: "Additional duration added to each subsequent ring's rotation (creates staggered speed)"
          }, {
            name: "direction",
            type: '"clockwise" | "counterclockwise"',
            default: '"clockwise"',
            description: "Direction of rotation for the orbiting circles"
          }, {
            name: "alternateDirection",
            type: "boolean",
            default: "false",
            description: "If true, alternates direction for each row (odd rows go opposite direction)"
          }, {
            name: "fadeMode",
            type: '"in" | "out" | "none"',
            default: '"none"',
            description: "Fade mode for rows. 'in' fades from outside to inside, 'out' fades from inside to outside, 'none' disables fading"
          }, {
            name: "fadeBlur",
            type: "boolean",
            default: "false",
            description: "Apply incremental blur along with fade effect for more depth"
          }, {
            name: "showPaths",
            type: "boolean",
            default: "true",
            description: "Whether to show dashed orbital path rings"
          }, {
            name: "animate",
            type: "boolean",
            default: "true",
            description: "Enable entrance animation on mount with scale and fade"
          }, {
            name: "animationDuration",
            type: "number",
            default: "0.6",
            description: "Duration of entrance animation in seconds"
          }, {
            name: "animationStagger",
            type: "number",
            default: "0.15",
            description: "Stagger delay between each row's entrance animation in seconds"
          }, {
            name: "staggerScaleFactor",
            type: "number",
            default: "0",
            description: "Scale factor for each additional row. Negative values shrink outer rows, positive values grow them. Example: 0.1 = 10% larger per row"
          }, {
            name: "className",
            type: "string",
            default: '""',
            description: "Additional CSS classes for the container"
          }]} /></__mod_56388.Ec><__mod_56388.lT><__mod_56388.Gv /></__mod_56388.lT></__mod_56388.VX></div>;
  };

export default p;

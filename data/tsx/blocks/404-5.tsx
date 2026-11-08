import * as React from "react";
import { Camera, Cloud, Flame, Heart, Music, Rocket, Sparkles, Star } from "lucide-react";
import * as __mod_47686 from "../_helpers/47686";
import { wpN as __wpN } from "../_helpers/wp-shim";
/**
 * 404 5
 * Bold 404 with scattered colorful cards
 * slug: 404-5
 * category: 404
 * export: NotFound5
 * deps: lucide-react, matter-js, motion
 * original: ts-tailwind/blocks/404/404-5.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import { motion, AnimatePresence } from "motion/react";

var s = __wpN(__mod_47686);
let p = [{
  bg: "#1e2844",
  color: "#ffffff",
  Icon: Star,
  w: 150,
  h: 190
}, {
  bg: "#6cc7e0",
  color: "#0a3a4a",
  Icon: Cloud,
  w: 165,
  h: 210
}, {
  bg: "#f3cf3a",
  color: "#4a3a00",
  Icon: Sparkles,
  w: 155,
  h: 195
}, {
  bg: "#6a2a56",
  color: "#f5d0e5",
  Icon: Heart,
  w: 160,
  h: 200
}, {
  bg: "#d6642b",
  color: "#ffe4d0",
  Icon: Flame,
  w: 150,
  h: 195
}, {
  bg: "#b7e04a",
  color: "#2a4200",
  Icon: Rocket,
  w: 170,
  h: 185
}, {
  bg: "#e08534",
  color: "#ffe8d4",
  Icon: Music,
  w: 160,
  h: 195
}, {
  bg: "#bcaee0",
  color: "#2a1a4a",
  Icon: Camera,
  w: 160,
  h: 200
}];
function f() {
  let e = (0, React.useRef)(null),
    t = (0, React.useRef)([]);
  return (0, React.useEffect)(() => {
    let o = e.current;
    if (!o) return;
    let r = s().Engine,
      n = s().Runner,
      a = s().Bodies,
      i = s().Composite,
      l = s().Mouse,
      c = s().MouseConstraint,
      d = s().Events,
      u = r.create();
    u.gravity.y = 1, u.positionIterations = 10, u.velocityIterations = 8;
    let m = () => ({
        w: o.clientWidth,
        h: o.clientHeight
      }),
      {
        w: h,
        h: v
      } = m(),
      y = a.rectangle(h / 2, v + 200, 3 * h, 400, {
        isStatic: !0
      }),
      f = a.rectangle(h / 2, -1e3, 3 * h, 400, {
        isStatic: !0
      }),
      x = a.rectangle(-200, v / 2, 400, 6 * v, {
        isStatic: !0
      }),
      w = a.rectangle(h + 200, v / 2, 400, 6 * v, {
        isStatic: !0
      });
    i.add(u.world, [y, f, x, w]);
    let g = e => e < 640 ? .55 : e < 1024 ? .75 : 1,
      b = p.map((e, t) => {
        let o = g(h),
          r = e.w * o,
          n = e.h * o,
          i = Math.random() * (h - r - 40) + r / 2 + 20,
          l = -200 - 80 * t - 100 * Math.random(),
          c = a.rectangle(i, l, r, n, {
            restitution: .15,
            friction: .4,
            frictionStatic: .8,
            frictionAir: .02,
            density: .002,
            angle: (Math.random() - .5) * .6
          });
        return s().Body.setAngularVelocity(c, (Math.random() - .5) * .08), {
          body: c,
          w: r,
          h: n,
          base: e
        };
      });
    i.add(u.world, b.map(e => e.body));
    let k = n.create();
    n.run(k, u);
    let A = l.create(o),
      E = c.create(u, {
        mouse: A,
        constraint: {
          stiffness: .12,
          damping: .2,
          render: {
            visible: !1
          }
        }
      });
    i.add(u.world, E);
    let L = e => {
      let t = o.getBoundingClientRect(),
        r = "touches" in e ? e.changedTouches[0] : null,
        n = r ? r.clientX : e.clientX,
        a = r ? r.clientY : e.clientY,
        i = 0 !== t.width ? o.clientWidth / t.width : 1,
        s = 0 !== t.height ? o.clientHeight / t.height : 1;
      A.absolute.x = (n - t.left) * i, A.absolute.y = (a - t.top) * s, A.position.x = A.absolute.x, A.position.y = A.absolute.y, A.sourceEvents.mousemove = e;
    };
    o.removeEventListener("mousedown", A.mousedown), o.removeEventListener("mousemove", A.mousemove), o.removeEventListener("mouseup", A.mouseup), o.removeEventListener("touchstart", A.mousedown), o.removeEventListener("touchmove", A.mousemove), o.removeEventListener("touchend", A.mouseup);
    let M = e => {
        "touches" in e && e.preventDefault(), L(e), A.mousedownPosition.x = A.position.x, A.mousedownPosition.y = A.position.y, A.button = "button" in e ? e.button : 0, A.sourceEvents.mousedown = e;
      },
      j = e => {
        "touches" in e && e.preventDefault(), L(e);
      },
      N = e => {
        L(e), A.mouseupPosition.x = A.position.x, A.mouseupPosition.y = A.position.y, A.button = -1, A.sourceEvents.mouseup = e;
      };
    o.addEventListener("mousedown", M), o.addEventListener("mousemove", j), o.addEventListener("mouseup", N), o.addEventListener("touchstart", M, {
      passive: !1
    }), o.addEventListener("touchmove", j, {
      passive: !1
    }), o.addEventListener("touchend", N), d.on(u, "beforeUpdate", () => {
      let e = E.body;
      b.forEach(({
        body: t,
        w: o,
        h: r
      }) => {
        if (t === e) return;
        let n = t.velocity,
          a = Math.hypot(n.x, n.y);
        if (a > 40) {
          let e = 40 / a;
          s().Body.setVelocity(t, {
            x: n.x * e,
            y: n.y * e
          });
        }
        let i = o / 2,
          l = h - o / 2,
          c = v - r / 2,
          {
            x: d,
            y: u
          } = t.position,
          m = !1;
        d < i ? (d = i, m = !0) : d > l && (d = l, m = !0), u > c && (u = c, m = !0), m && (s().Body.setPosition(t, {
          x: d,
          y: u
        }), s().Body.setVelocity(t, {
          x: .4 * t.velocity.x,
          y: .4 * t.velocity.y
        }));
      });
    });
    let z = A.mousewheel;
    z && (o.removeEventListener("wheel", z), o.removeEventListener("DOMMouseScroll", z));
    let B = 0,
      C = () => {
        b.forEach(({
          body: e,
          w: o,
          h: r
        }, n) => {
          let a = t.current[n];
          a && (a.style.width = `${o}px`, a.style.height = `${r}px`, a.style.transform = `translate(${e.position.x - o / 2}px, ${e.position.y - r / 2}px) rotate(${e.angle}rad)`);
        }), B = requestAnimationFrame(C);
      };
    B = requestAnimationFrame(C);
    let P = () => {
        let e = m();
        if (e.w === h && e.h === v) return;
        h = e.w, v = e.h, s().Body.setPosition(y, {
          x: h / 2,
          y: v + 200
        }), s().Body.setPosition(f, {
          x: h / 2,
          y: -1e3
        }), s().Body.setPosition(w, {
          x: h + 200,
          y: v / 2
        }), s().Body.setPosition(x, {
          x: -200,
          y: v / 2
        });
        let o = g(h),
          r = g(h);
        if (o !== r) {
          let e = r / o;
          b.forEach(t => {
            s().Body.scale(t.body, e, e), t.w = t.base.w * r, t.h = t.base.h * r;
          });
        }
      },
      I = new ResizeObserver(P);
    return I.observe(o), window.addEventListener("resize", P), () => {
      cancelAnimationFrame(B), I.disconnect(), window.removeEventListener("resize", P), o.removeEventListener("mousedown", M), o.removeEventListener("mousemove", j), o.removeEventListener("mouseup", N), o.removeEventListener("touchstart", M), o.removeEventListener("touchmove", j), o.removeEventListener("touchend", N), n.stop(k), i.clear(u.world, !1), r.clear(u);
    };
  }, []), <section className="relative w-full h-screen flex flex-col items-center pt-12 sm:pt-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-neutral-950 overflow-hidden"><div ref={e} className="absolute inset-0 cursor-grab active:cursor-grabbing touch-none">{p.map((e, o) => {
        let n = e.Icon;
        return <div ref={e => {
          t.current[o] = e;
        }} className="absolute top-0 left-0 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg will-change-transform" style={{
          backgroundColor: e.bg,
          transform: "translate(-9999px, -9999px)"
        }}><n className="absolute bottom-4 left-4" style={{
            color: e.color
          }} size={56} strokeWidth={1.75} /></div>;
      })}</div><div className="relative z-20 w-full max-w-[1400px] mx-auto flex flex-col items-center pointer-events-none"><motion.h1 initial={{
        opacity: 0,
        y: 16
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: .6
      }} className="text-center select-none text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-neutral-900 dark:text-white leading-[1.1] tracking-tight max-w-4xl">We can't find the page<br />you're looking for.</motion.h1><motion.div initial={{
        opacity: 0,
        y: 10
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: .5,
        delay: .2
      }} className="mt-6 sm:mt-8 pointer-events-auto"><motion.button whileHover={{
          scale: 1.04
        }} whileTap={{
          scale: .97
        }} className="px-6 py-2.5 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-sm font-medium cursor-pointer shadow-lg transition-colors duration-200">Take Me Home</motion.button></motion.div></div></section>;
}

export default f;

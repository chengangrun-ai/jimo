import { motion, AnimatePresence } from "motion/react";
import * as __mod_81712 from "../_helpers/81712";
import * as __mod_2253 from "../_helpers/2253";
import * as __mod_9430 from "../_helpers/9430";
import * as __mod_75272 from "../_helpers/75272";
import * as __mod_17192 from "../_helpers/17192";
import * as __mod_3907 from "../_helpers/3907";
/**
 * Showcase 3
 * 3D triangular carousel with drag
 * slug: showcase-3
 * category: Showcase
 * export: Showcase3
 * deps: @react-three/drei, @react-three/fiber, motion, three
 * original: ts-tailwind/blocks/showcase/showcase-3.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let m = [{
  id: 1,
  title: "Nothing Great Comes Alive Alone",
  category: "Brand Identity",
  image: "https://cdn.dribbble.com/userupload/46030284/file/8dfdc9a8b09fdbd99b010c1dcb279841.jpg?resize=1024x1693&vertical=center"
}, {
  id: 2,
  title: "Lost in the Abstract",
  category: "Art Direction",
  image: "https://cdn.dribbble.com/userupload/46029941/file/f3b0e906d38980bf48e008f5542a58b5.jpg?resize=1024x1693&vertical=center"
}, {
  id: 3,
  title: "Geometric Perspectives",
  category: "Digital Art",
  image: "https://cdn.dribbble.com/userupload/45777759/file/acf14657b38cd25e64bb16b4f201bef8.jpg?resize=1024x1529&vertical=center"
}];
function h({
  item: e,
  index: t,
  count: a,
  introSpring: l
}) {
  let d = t / a * Math.PI * 2,
    c = (0, React.useRef)(null),
    u = (0, React.useRef)(null);
  return (0, __mod_81712.D)(() => {
    if (!c.current || !u.current) return;
    let e = l.get(),
      t = __mod_2253.cj9.lerp(0, 2.5, e);
    c.current.position.z = t;
    let a = __mod_2253.cj9.lerp(.5, 1, e);
    c.current.scale.setScalar(a), u.current.material.opacity = e;
    let s = __mod_2253.cj9.lerp(-2, 0, e);
    c.current.position.y = s;
  }), <group rotation={[0, d, 0]}><group ref={c} position={[0, 0, 2.5]}><__mod_9430._ ref={u} url={e.image} transparent={!0} side={__mod_2253.$EB} toneMapped={!1} scale={[4, 5.6]} /></group></group>;
}
function x() {
  let e = (0, React.useRef)(null),
    t = (0, React.useRef)(null),
    {
      gl: a,
      camera: s
    } = (0, __mod_81712.C)();
  return (0, React.useEffect)(() => {
    e.current = a, t.current = s;
  }, [a, s]), (0, React.useEffect)(() => {
    let s = a.domElement.parentElement;
    if (!s) return;
    let i = () => {
      let a = e.current,
        i = t.current;
      if (!a || !i) return;
      let r = s.clientWidth,
        l = s.clientHeight;
      r > 0 && l > 0 && (a.setSize(r, l), i instanceof __mod_2253.ubm && (i.aspect = r / l, i.updateProjectionMatrix()));
    };
    i();
    let r = new ResizeObserver(i);
    r.observe(s);
    let l = setInterval(i, 500);
    return setTimeout(i, 100), setTimeout(i, 300), setTimeout(i, 1e3), () => {
      r.disconnect(), clearInterval(l);
    };
  }, [a]), null;
}
function p({
  onActiveIndexChange: e
}) {
  let t = (0, React.useRef)(null),
    [a, l] = (0, React.useState)(!1),
    [n, o] = (0, React.useState)(0),
    u = (0, __mod_75272.d)(0),
    x = (0, __mod_17192.z)(u, {
      stiffness: 260,
      damping: 20,
      mass: 1
    }),
    p = (0, __mod_17192.z)(0, {
      stiffness: 50,
      damping: 15
    });
  (0, React.useEffect)(() => {
    setTimeout(() => p.set(1), 200);
  }, [p]);
  let {
      viewport: g
    } = (0, __mod_81712.C)(),
    b = g.width < 10;
  return (0, React.useEffect)(() => {
    let t = t => {
      let a = 2 * Math.PI / 3,
        s = Math.round(u.get() / a);
      "ArrowLeft" === t.key ? (u.set((s - 1) * a), e((-(s - 1) % 3 + 3) % 3)) : "ArrowRight" === t.key && (u.set((s + 1) * a), e((-(s + 1) % 3 + 3) % 3));
    };
    return window.addEventListener("keydown", t), () => window.removeEventListener("keydown", t);
  }, [u, e]), (0, __mod_81712.D)(() => {
    t.current && (t.current.rotation.y = x.get());
  }), <><mesh position={[0, 0, 2.5]} onPointerDown={e => {
      l(!0), o(e.nativeEvent.clientX), e.nativeEvent.target.setPointerCapture(e.nativeEvent.pointerId);
    }} onPointerMove={e => {
      if (!a) return;
      let t = e.nativeEvent.clientX - n;
      o(e.nativeEvent.clientX), u.set(u.get() + .005 * t);
    }} onPointerUp={t => {
      l(!1), t.nativeEvent.target.releasePointerCapture(t.nativeEvent.pointerId);
      let a = 2 * Math.PI / 3,
        s = u.get() / a,
        i = x.getVelocity(),
        r = Math.round(s);
      if (Math.abs(i) > .2) {
        let e = Math.sign(i);
        r = Math.round(x.get() / a) + e;
      }
      let n = r * a;
      u.set(n), e((-r % 3 + 3) % 3);
    }} visible={!1}><planeGeometry args={[100, 100]} /></mesh><group ref={t} scale={b ? .7 : 1}>{m.map((e, t) => <h item={e} index={t} count={m.length} introSpring={p} />)}</group></>;
}
function Showcase3() {
  let [e, t] = (0, React.useState)(0),
    [a, r] = (0, React.useState)(!1),
    n = (0, React.useRef)(null);
  return (0, React.useLayoutEffect)(() => {
    let e = () => {
      if (n.current) {
        let {
          clientWidth: t,
          clientHeight: a
        } = n.current;
        t > 0 && a > 0 ? r(!0) : requestAnimationFrame(e);
      }
    };
    e();
  }, []), <section className="w-full py-12 bg-white dark:bg-neutral-950 overflow-hidden px-4 sm:px-6 lg:px-8"><div className="max-w-[1400px] mx-auto"><div className="text-center mb-8"><motion.h2 initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: .6,
          ease: "easeOut"
        }} className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-neutral-900 dark:text-white mb-4">Case Studies</motion.h2><motion.p initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: .6,
          ease: "easeOut",
          delay: .1
        }} className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400">See others we've helped with this program</motion.p></div><div className="flex flex-col items-center justify-center w-full relative"><div ref={n} className="h-[300px] sm:h-[400px] w-full cursor-grab active:cursor-grabbing">{a && <__mod_3907.Hl camera={{
            position: [0, 0, 11],
            fov: 45
          }} gl={{
            antialias: !0,
            alpha: !0
          }} dpr={[1, 2]} frameloop="always"><x /><ambientLight intensity={.5} /><spotLight position={[10, 10, 10]} angle={.15} penumbra={1} /><p onActiveIndexChange={t} /></__mod_3907.Hl>}</div><motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: .6,
          ease: "easeOut",
          delay: .2
        }} className="w-full text-center mt-8 pointer-events-none"><div className="inline-block transition-all duration-500 transform translate-y-0 opacity-100"><span className="block text-sm font-medium text-blue-600 dark:text-blue-400 mb-2 uppercase tracking-wider">{m[e].category}</span><h3 className="text-2xl font-medium tracking-tight text-neutral-900 dark:text-white">{m[e].title}</h3></div></motion.div></div></div></section>;
}

export default Showcase3;

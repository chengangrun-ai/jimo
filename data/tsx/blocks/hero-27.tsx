import { motion, AnimatePresence } from "motion/react";
import * as React from "react";
import * as __mod_50969 from "../_helpers/50969";
import * as __mod_12246 from "../_helpers/12246";
import * as __mod_2253 from "../_helpers/2253";
/**
 * Hero 27
 * Editorial hero with a satin ribbon headline flowing across the page
 * slug: hero-27
 * category: Hero Section
 * export: Hero27
 * deps: lucide-react, motion, three
 * original: ts-tailwind/blocks/hero/hero-27.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import { ArrowRight } from "lucide-react";

let c = 2 * Math.PI,
  u = (e, t, r) => Math.min(r, Math.max(t, e)),
  m = e => {
    let t = u(e, 0, 1);
    return t * t * (3 - 2 * t);
  },
  h = `
varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vWorld;
void main() {
  vUv = uv;
  vec4 world = modelMatrix * vec4(position, 1.0);
  vWorld = world.xyz;
  vNormal = normalize(mat3(modelMatrix) * normal);
  gl_Position = projectionMatrix * viewMatrix * world;
}
`,
  f = `
uniform sampler2D uText;
uniform vec3 uBand;
uniform vec3 uInk;
uniform float uOpacity;
uniform vec3 uLight;
varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vWorld;
void main() {
  vec3 n = normalize(vNormal);
  bool front = gl_FrontFacing;
  if (!front) n = -n;
  vec3 view = normalize(cameraPosition - vWorld);
  float facing = dot(n, uLight);
  float wrap = facing * 0.5 + 0.5;
  float light = mix(1.0, 0.42 + 0.5 * wrap * wrap + 0.16 * max(facing, 0.0), 0.55);
  float spec = pow(max(dot(n, normalize(uLight + view)), 0.0), 48.0) * 0.18;
  float rim = pow(1.0 - abs(dot(n, view)), 4.0) * 0.06;
  float glyph = texture2D(uText, vUv).a;
  vec3 surface = front ? mix(uBand, uInk, glyph) : uBand * 0.62;
  gl_FragColor = vec4(surface * light + vec3(spec + rim), uOpacity);
  #include <colorspace_fragment>
}
`,
  p = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: .08,
        delayChildren: .1
      }
    }
  },
  v = {
    hidden: {
      opacity: 0,
      y: 14,
      filter: "blur(6px)"
    },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: .9,
        ease: [.16, 1, .3, 1]
      }
    }
  };
function Hero27() {
  let e = (0, __mod_50969.I)(),
    t = (0, React.useRef)(null),
    r = (0, React.useRef)(null);
  return (0, React.useEffect)(() => {
    let e = t.current,
      n = r.current;
    if (!e || !n) return;
    let a = function (e, t) {
      let r,
        n = e.ownerDocument,
        a = n.defaultView ?? window,
        i = a.matchMedia("(prefers-reduced-motion: reduce)").matches,
        l = n.createElement("canvas");
      l.style.cssText = "position:absolute;inset:0;width:100%;height:100%;display:block";
      try {
        r = new __mod_12246.WebGLRenderer({
          canvas: l,
          alpha: !0,
          antialias: !0,
          premultipliedAlpha: !0
        });
      } catch {
        return null;
      }
      r.setClearColor(0, 0), e.appendChild(l);
      let s = new __mod_2253.Z58(),
        p = new __mod_2253.ubm(30, 1, 1, 2e4),
        v = new __mod_2253.LoY(),
        x = n.createElement("canvas"),
        g = new __mod_2253.GOR(x);
      g.wrapS = __mod_2253.GJx, g.wrapT = __mod_2253.ghU, g.minFilter = __mod_2253.$_I, g.magFilter = __mod_2253.k6q, g.anisotropy = r.capabilities.getMaxAnisotropy();
      let w = new __mod_2253.BKk({
          vertexShader: h,
          fragmentShader: f,
          uniforms: {
            uText: {
              value: g
            },
            uBand: {
              value: new __mod_2253.Q1f("#5227FF")
            },
            uInk: {
              value: new __mod_2253.Q1f("#FFFFFF")
            },
            uOpacity: {
              value: +!!i
            },
            uLight: {
              value: new __mod_2253.Pq0(-.18, .42, .89).normalize()
            }
          },
          side: __mod_2253.$EB,
          transparent: !0
        }),
        y = new __mod_2253.eaF(v, w);
      y.frustumCulled = !1, s.add(y);
      let b = new Float32Array(1263),
        M = new Float32Array(421),
        k = new Float32Array(2526),
        A = new Float32Array(2526),
        j = new Float32Array(1684),
        N = [];
      for (let e = 0; e < 420; e++) {
        let t = 2 * e;
        N.push(t, t + 2, t + 1, t + 1, t + 2, t + 3);
      }
      v.setAttribute("position", new __mod_2253.THS(k, 3).setUsage(__mod_2253.Vnu)), v.setAttribute("normal", new __mod_2253.THS(A, 3).setUsage(__mod_2253.Vnu)), v.setAttribute("uv", new __mod_2253.THS(j, 2).setUsage(__mod_2253.Vnu)), v.setIndex(N);
      let F = [],
        I = new __mod_2253.Pq0(),
        P = {
          inside: !1,
          down: !1,
          id: -1,
          startX: 0,
          startY: 0,
          lastX: 0,
          startAt: 0,
          lastAt: 0,
          moved: !1
        },
        L = 1,
        E = 1,
        C = 64,
        T = 14,
        X = 48,
        B = 8,
        S = 1,
        R = 0,
        U = 0,
        z = 1,
        Y = 0,
        _ = -1,
        O = "",
        W = 0,
        V = 0,
        H = !1,
        q = !1,
        D = () => {
          var e;
          let r = a.getComputedStyle(t).fontFamily;
          if (r === O) return;
          O = r;
          let n = x.getContext("2d");
          if (!n) return;
          let i = (e = "Make it move  \xb7  ", "undefined" != typeof Intl && "Segmenter" in Intl ? Array.from(new Intl.Segmenter(void 0, {
            granularity: "grapheme"
          }).segment(e), e => e.segment) : Array.from(e));
          n.font = `600 180px ${r}`;
          let l = i.reduce((e, t) => e + n.measureText(t).width + -3.6, 0),
            s = Math.round(281.25);
          x.width = Math.max(2, Math.ceil(l)), x.height = s, n.font = `600 180px ${r}`, n.clearRect(0, 0, x.width, x.height), n.fillStyle = "#fff", n.textBaseline = "alphabetic";
          let o = n.measureText("H").actualBoundingBoxAscent || 125.99999999999999,
            d = -1.8;
          for (let e of i) n.fillText(e, d, s / 2 + o / 2), d += n.measureText(e).width + -3.6;
          B = x.width / x.height, g.dispose(), g.needsUpdate = !0;
        },
        $ = () => {
          let t = e.getBoundingClientRect();
          L = Math.max(1, t.width), E = Math.max(1, t.height), r.setPixelRatio(Math.min(a.devicePixelRatio || 1, 2)), r.setSize(L, E, !1);
          let n = 1.25 * Math.max(L, E);
          p.fov = 2 * Math.atan(E / 2 / n) * 180 / Math.PI, p.aspect = L / E, p.position.set(0, 0, n), p.far = 4 * n, p.lookAt(0, 0, 0), p.updateProjectionMatrix(), T = .16 * (C = .62 * E), X = 1.15 * C, y.rotation.z = L < 640 ? -.05 : -.035;
        },
        G = (e, t) => {
          let r = .28 * R,
            n = 1.3 * L,
            a = (e - .5) * 1.3;
          b[t] = (e - .5) * n, b[t + 1] = T * Math.sin(.45 * c * a + r), b[t + 2] = X * Math.sin(.28 * c * a + .6 * r + 1.3);
        },
        Q = (e, t) => {
          let r = .035 * c * Math.sin(e / Math.max(1, L) * Math.PI + .08 * R * c);
          for (let n of F) r += c * m(((t - n.start) * 900 - Math.abs(e - n.origin)) / 520);
          return r;
        },
        J = (t, r) => {
          let n = e.getBoundingClientRect(),
            a = t - n.left,
            i = r - n.top,
            l = 1 / 0,
            s = 0;
          y.updateMatrixWorld();
          for (let e = 0; e <= 420; e += 2) {
            I.set(b[3 * e], b[3 * e + 1], b[3 * e + 2]).applyMatrix4(y.matrixWorld).project(p);
            let t = Math.hypot((.5 * I.x + .5) * L - a, (.5 - .5 * I.y) * E - i);
            t < l && (l = t, s = M[e]);
          }
          return {
            distance: l,
            origin: s
          };
        },
        K = () => {
          q || !H || W || (W = a.requestAnimationFrame(Z));
        };
      function Z(e) {
        if (W = 0, q) return;
        let t = V ? u((e - V) / 1e3, 1 / 240, .05) : 1 / 60;
        V = e;
        let n = performance.now() / 1e3;
        _ < 0 && (_ = n), i || (R += t), z += ((P.inside && !P.down ? .3 : 1) - z) * (1 - Math.exp(-(4 * t))), P.down || (Y *= Math.exp(-t / .6)), U += ((i ? 0 : .42 * C * z) + Y) * t;
        for (let e = F.length - 1; e >= 0; e--) (n - F[e].start) * 900 - S > 520 && F.splice(e, 1);
        w.uniforms.uOpacity.value = i ? 1 : m((n - _) / 1.1), (e => {
          let t = C / 2;
          for (let e = 0; e <= 420; e++) G(e / 420, 3 * e);
          let r = 0;
          M[0] = 0;
          for (let e = 1; e <= 420; e++) r += Math.hypot(b[3 * e] - b[3 * e - 3], b[3 * e + 1] - b[3 * e - 2], b[3 * e + 2] - b[3 * e - 1]), M[e] = r;
          S = Math.max(1, r);
          let n = C * B;
          for (let r = 0; r <= 420; r++) {
            let a = Math.max(0, r - 1),
              i = Math.min(420, r + 1),
              l = b[3 * i] - b[3 * a],
              s = b[3 * i + 1] - b[3 * a + 1],
              o = b[3 * i + 2] - b[3 * a + 2],
              d = Math.hypot(l, s, o) || 1;
            l /= d, s /= d;
            let c = -(o /= d) * l,
              u = -o * s,
              m = 1 - o * o,
              h = Math.hypot(c, u, m) || 1;
            c /= h;
            let f = (u /= h) * o - (m /= h) * s,
              p = m * l - c * o,
              v = c * s - u * l,
              x = Q(M[r], e),
              g = Math.cos(x),
              w = Math.sin(x),
              y = g * f + w * c,
              N = g * p + w * u,
              F = g * v + w * m,
              I = 6 * r,
              P = b[3 * r],
              L = b[3 * r + 1],
              E = b[3 * r + 2];
            k[I] = P - y * t, k[I + 1] = L - N * t, k[I + 2] = E - F * t, k[I + 3] = P + y * t, k[I + 4] = L + N * t, k[I + 5] = E + F * t;
            let C = s * F - o * N,
              T = o * y - l * F,
              X = l * N - s * y;
            A[I] = C, A[I + 1] = T, A[I + 2] = X, A[I + 3] = C, A[I + 4] = T, A[I + 5] = X;
            let B = (M[r] + U) / n;
            j[4 * r] = B, j[4 * r + 1] = 0, j[4 * r + 2] = B, j[4 * r + 3] = 1;
          }
          for (let e of ["position", "normal", "uv"]) v.getAttribute(e).needsUpdate = !0;
        })(n), r.render(s, p), !i || Math.abs(Y) > 1 || F.length > 0 ? K() : V = 0;
      }
      let ee = t => {
          if (P.down && t.pointerId === P.id) {
            let e = t.clientX - P.lastX,
              r = performance.now() / 1e3;
            Math.hypot(t.clientX - P.startX, t.clientY - P.startY) > 6 && (P.moved = !0), P.moved && (U -= e, Y = .6 * Y + -e / Math.max(.008, r - P.lastAt) * .4), P.lastX = t.clientX, P.lastAt = r;
          } else "mouse" === t.pointerType && (P.inside = J(t.clientX, t.clientY).distance < .75 * C, e.style.cursor = P.inside ? "grab" : "");
          K();
        },
        et = t => {
          !t.isPrimary || P.down || "mouse" === t.pointerType && 0 !== t.button || J(t.clientX, t.clientY).distance > .75 * C || ("mouse" === t.pointerType && t.preventDefault(), e.setPointerCapture?.(t.pointerId), e.style.cursor = "grabbing", P.down = !0, P.id = t.pointerId, P.startX = t.clientX, P.startY = t.clientY, P.lastX = t.clientX, P.startAt = performance.now() / 1e3, P.lastAt = P.startAt, P.moved = !1, K());
        },
        er = t => {
          if (P.down && t.pointerId === P.id) {
            var r, n;
            P.down = !1, e.releasePointerCapture?.(t.pointerId), e.style.cursor = P.inside ? "grab" : "", performance.now() / 1e3 - P.lastAt > .12 && (Y = 0), !P.moved && performance.now() / 1e3 - P.startAt < .4 && (r = J(t.clientX, t.clientY).origin, n = performance.now() / 1e3, i || (F.length > 5 && F.shift(), F.push({
              origin: r,
              start: n
            }))), K();
          }
        },
        en = () => {
          P.inside = !1, P.down || (e.style.cursor = ""), K();
        },
        ea = new ResizeObserver(() => {
          $(), K();
        }),
        ei = new IntersectionObserver(([e]) => {
          H = e.isIntersecting, V = 0, K();
        });
      return e.addEventListener("pointermove", ee), e.addEventListener("pointerdown", et), e.addEventListener("pointerup", er), e.addEventListener("pointercancel", er), e.addEventListener("pointerleave", en), ea.observe(e), ei.observe(e), D(), $(), n.fonts?.ready.then(() => {
        q || (O = "", D(), K());
      }), {
        destroy: () => {
          q = !0, a.cancelAnimationFrame(W), ea.disconnect(), ei.disconnect(), e.removeEventListener("pointermove", ee), e.removeEventListener("pointerdown", et), e.removeEventListener("pointerup", er), e.removeEventListener("pointercancel", er), e.removeEventListener("pointerleave", en), e.style.cursor = "", v.dispose(), w.dispose(), g.dispose(), r.dispose(), l.remove();
        }
      };
    }(n, e);
    return () => a?.destroy();
  }, []), <section ref={t} className="relative flex min-h-screen w-full flex-col overflow-hidden bg-white px-4 pb-10 pt-20 dark:bg-neutral-950 sm:px-6 sm:pt-24 lg:px-8 lg:pb-12"><motion.div variants={p} initial={!e && "hidden"} whileInView="show" viewport={{
      once: !0
    }} className="mx-auto flex w-full max-w-[1400px] flex-col gap-6 sm:flex-row sm:items-start sm:justify-between"><motion.h1 variants={v} className="max-w-[20ch] text-pretty text-[1.75rem] font-medium leading-[1.12] tracking-[-0.03em] text-neutral-950 dark:text-white sm:text-[2rem] lg:text-[2.5rem]">An independent studio for brands that refuse to sit still.</motion.h1><motion.dl variants={v} className="grid shrink-0 grid-cols-2 gap-x-10 gap-y-1 text-[13px] leading-relaxed sm:pt-2 sm:text-right"><dt className="text-neutral-500">Based in</dt><dd className="text-neutral-900 dark:text-neutral-200">Lisbon</dd><dt className="text-neutral-500">Practice</dt><dd className="text-neutral-900 dark:text-neutral-200">Brand, motion, web</dd><dt className="text-neutral-500">Next opening</dt><dd className="text-neutral-900 dark:text-neutral-200">March 2027</dd></motion.dl></motion.div><div ref={r} aria-hidden="true" className="relative -mx-4 my-auto h-[clamp(6.5rem,16vh,8.5rem)] touch-pan-y select-none sm:-mx-6 sm:h-[clamp(10rem,30vh,17rem)] lg:-mx-8" /><motion.div variants={p} initial={!e && "hidden"} whileInView="show" viewport={{
      once: !0
    }} className="mx-auto flex w-full max-w-[1400px] flex-col gap-7 lg:flex-row lg:items-end lg:justify-between"><motion.p variants={v} className="max-w-[30rem] text-pretty text-base leading-relaxed text-neutral-600 dark:text-neutral-400 sm:text-lg">Identities, interfaces and motion systems, designed together so your brand behaves the same everywhere it shows up.</motion.p><motion.div variants={v} className="flex flex-col gap-3 sm:flex-row"><a href="#" className="group inline-flex h-12 cursor-pointer items-center justify-center gap-2 rounded-full bg-neutral-950 px-6 text-[15px] font-medium text-white transition-colors duration-200 hover:bg-neutral-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200 dark:focus-visible:ring-offset-neutral-950">Start a project<ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" /></a><a href="#" className="inline-flex h-12 cursor-pointer items-center justify-center rounded-full bg-neutral-950/[0.05] px-6 text-[15px] font-medium text-neutral-900 transition-colors duration-200 hover:bg-neutral-950/[0.09] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:bg-white/[0.07] dark:text-white dark:hover:bg-white/[0.12] dark:focus-visible:ring-offset-neutral-950">See selected work</a></motion.div></motion.div></section>;
}

export default Hero27;

import * as __mod_2253 from "../_helpers/2253";
import * as __mod_12246 from "../_helpers/12246";
import * as __mod_90650 from "../_helpers/90650";
import * as __mod_90761 from "../_helpers/90761";
import * as __mod_86049 from "../_helpers/86049";
import * as __mod_56388 from "../_helpers/56388";
/**
 * Ribbon Trail
 * A gymnast's ribbon that trails the cursor
 * slug: ribbon-trail
 * category: cursor
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let c = 2 * Math.PI,
  h = Math.PI / 180,
  p = 1 / 240,
  m = (e, t, n) => Math.min(n, Math.max(t, e)),
  v = e => {
    let t = m(e, 0, 1);
    return t * t * (3 - 2 * t);
  },
  b = e => {
    let t = window.matchMedia("(prefers-reduced-motion: reduce)");
    return t.addEventListener("change", e), () => t.removeEventListener("change", e);
  },
  f = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  g = new Map(),
  w = e => e <= .04045 ? e / 12.92 : Math.pow((e + .055) / 1.055, 2.4),
  y = e => {
    let t = g.get(e);
    if (t) return t;
    let n = [.5, .5, .5],
      a = e.trim().replace("#", "");
    if (/^[0-9a-f]{3}$/i.test(a) || /^[0-9a-f]{6}$/i.test(a)) {
      let e = 3 === a.length ? a.replace(/./g, e => e + e) : a;
      n = [0, 2, 4].map(t => Number.parseInt(e.slice(t, t + 2), 16) / 255);
    } else if ("undefined" != typeof document) {
      let t = document.createElement("canvas");
      t.width = 1, t.height = 1;
      let a = t.getContext("2d");
      if (a) {
        a.fillStyle = e, a.fillRect(0, 0, 1, 1);
        let t = a.getImageData(0, 0, 1, 1).data;
        n = [t[0] / 255, t[1] / 255, t[2] / 255];
      }
    }
    let [i, r, l] = n.map(w),
      o = Math.cbrt(.4122214708 * i + .5363325363 * r + .0514459929 * l),
      u = Math.cbrt(.2119034982 * i + .6806995451 * r + .1073969566 * l),
      d = Math.cbrt(.0883024619 * i + .2817188376 * r + .6299787005 * l),
      c = new __mod_2253.Pq0(.2104542553 * o + .793617785 * u - .0040720468 * d, 1.9779984951 * o - 2.428592205 * u + .4505937099 * d, .0259040371 * o + .7827717662 * u - .808675766 * d);
    return g.set(e, c), c;
  },
  x = (e, t, n, a, i, r = 1) => {
    let l = c / Math.max(i, .01),
      o = Math.max(1, Math.ceil(a / (1 / 480))),
      s = a / o;
    for (let e = 0; e < o; e++) u += (l * l * (n - e) - 2 * r * l * t) * s, d += t * s;
    return [e, t];
  },
  F = `
attribute float aArc;
attribute float aFace;
varying float vArc;
varying float vFace;

void main() {
  vArc = aArc;
  vFace = aFace;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,
  M = `
precision highp float;

uniform vec3 uLabA;
uniform vec3 uLabB;
uniform float uShade;
uniform float uOpacity;
varying float vArc;
varying float vFace;

vec3 labToLinear(vec3 lab) {
  float l = lab.x + 0.3963377774 * lab.y + 0.2158037573 * lab.z;
  float m = lab.x - 0.1055613458 * lab.y - 0.0638541728 * lab.z;
  float s = lab.x - 0.0894841775 * lab.y - 1.291485548 * lab.z;
  l = l * l * l;
  m = m * m * m;
  s = s * s * s;
  return vec3(
    4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s,
    -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s,
    -0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s
  );
}

vec3 toSrgb(vec3 c) {
  c = clamp(c, 0.0, 1.0);
  return mix(c * 12.92, 1.055 * pow(c, vec3(1.0 / 2.4)) - 0.055, step(0.0031308, c));
}

void main() {
  float drift = vArc * 0.3;
  vec3 lab = gl_FrontFacing ? mix(uLabA, uLabB, drift) : mix(uLabB, uLabA, drift);
  float face = clamp(vFace, 0.0, 1.0);
  lab.x *= mix(1.0, 0.55 + 0.45 * pow(face, 0.6), uShade);
  vec3 color = toSrgb(labToLinear(lab));
  float alpha = uOpacity * (1.0 - smoothstep(0.5, 1.0, vArc));
  gl_FragColor = vec4(color * alpha, alpha);
}
`,
  C = (0, React.forwardRef)(function ({
    colors: e = ["#5227FF", "#FF9FFC"],
    backgroundColor: t = "transparent",
    width: n = 28,
    trail: r = 1.9,
    bounce: l = .4,
    angle: o = -35,
    twist: g = 0,
    spin: w = 0,
    taper: C = .55,
    shade: A = .6,
    opacity: k = 1,
    follow: S = .04,
    flick: j = !0,
    autoplay: L = !0,
    autoplaySpeed: E = 1,
    idleDelay: I = 1.5,
    interactive: T = !0,
    paused: R = !1,
    dpr: P = 2,
    className: B,
    style: U,
    children: D
  }, N) {
    let H = (0, React.useRef)(null),
      O = (0, React.useRef)(null),
      z = (0, React.useRef)(null),
      W = {
        colors: e,
        backgroundColor: t,
        width: n,
        trail: r,
        bounce: l,
        angle: o,
        twist: g,
        spin: w,
        taper: C,
        shade: A,
        opacity: k,
        follow: S,
        flick: j,
        autoplay: L,
        autoplaySpeed: E,
        idleDelay: I,
        interactive: T,
        paused: R,
        dpr: P,
        reduced: (0, React.useSyncExternalStore)(b, f, () => !1)
      },
      V = (0, React.useRef)(W);
    (0, React.useEffect)(() => {
      V.current = W, z.current?.sync();
    }), (0, React.useEffect)(() => {
      let e = H.current,
        t = O.current;
      if (!e || !t) return;
      let n = ((e, t, n) => {
        let a,
          i = e.ownerDocument,
          r = i.defaultView ?? window,
          l = i.createElement("canvas");
        l.style.cssText = "position:absolute;inset:0;width:100%;height:100%;display:block;pointer-events:none";
        try {
          a = new __mod_12246.WebGLRenderer({
            canvas: l,
            alpha: !0,
            antialias: !0,
            premultipliedAlpha: !0,
            powerPreference: "high-performance"
          });
        } catch {
          return null;
        }
        t.appendChild(l), a.setClearColor(0, 0);
        let o = new Float32Array(3390),
          d = new Float32Array(1130),
          b = new Float32Array(1130),
          f = [];
        for (let e = 0; e < 564; e++) {
          let t = 2 * e;
          f.push(t, t + 1, t + 2, t + 1, t + 3, t + 2);
        }
        let g = new __mod_2253.LoY(),
          w = new __mod_2253.THS(o, 3),
          C = new __mod_2253.THS(d, 1),
          A = new __mod_2253.THS(b, 1);
        w.setUsage(__mod_2253.Vnu), C.setUsage(__mod_2253.Vnu), A.setUsage(__mod_2253.Vnu), g.setAttribute("position", w), g.setAttribute("aArc", C), g.setAttribute("aFace", A), g.setIndex(f), g.setDrawRange(0, 0);
        let k = {
            uLabA: {
              value: new __mod_2253.Pq0()
            },
            uLabB: {
              value: new __mod_2253.Pq0()
            },
            uShade: {
              value: .6
            },
            uOpacity: {
              value: 1
            }
          },
          S = new __mod_2253.BKk({
            uniforms: k,
            vertexShader: F,
            fragmentShader: M,
            transparent: !0,
            premultipliedAlpha: !0,
            depthTest: !1,
            depthWrite: !1,
            side: __mod_2253.$EB
          }),
          j = new __mod_2253.eaF(g, S);
        j.frustumCulled = !1;
        let L = new __mod_2253.Z58();
        L.add(j);
        let E = new __mod_2253.qUd(0, 1, 0, -1, -10, 10),
          I = new Float32Array(48),
          T = new Float32Array(48),
          R = new Float32Array(48),
          P = new Float32Array(48),
          B = new Float32Array(48),
          U = 1,
          D = 1,
          N = 1,
          H = 0,
          O = 0,
          z = 0,
          W = 0,
          V = 0,
          _ = 0,
          Y = 1,
          q = 40 * Math.random(),
          X = 0,
          G = 0,
          $ = 0,
          K = !0,
          Z = 0,
          J = 1,
          Q = 1,
          ee = 0,
          et = !1,
          en = 0,
          ea = 0,
          ei = !1,
          er = !1,
          el = !1,
          eo = 0,
          es = 0,
          eu = {
            x: 0,
            y: 0,
            inside: !1,
            seen: !1,
            leftAt: 0
          },
          ed = e => ({
            x: U * (.5 + .3 * Math.sin(.83 * e) + .06 * Math.sin(2.21 * e + .7)),
            y: D * (.5 + .22 * Math.sin(1.66 * e + .4) + .05 * Math.cos(2.87 * e + 1.1))
          }),
          ec = () => {
            let e = n.current;
            if (eu.inside && e.interactive) return {
              x: eu.x,
              y: eu.y,
              ghost: !1
            };
            let t = (performance.now() - eu.leftAt) / 1e3;
            if (e.autoplay && !e.reduced && (!eu.seen || t > Math.max(e.idleDelay, 0))) {
              let e = ed(q);
              return {
                x: e.x + X * $,
                y: e.y + G * $,
                ghost: !0
              };
            }
            return eu.seen ? {
              x: eu.x,
              y: eu.y,
              ghost: !1
            } : {
              x: U / 2,
              y: D / 2,
              ghost: !1
            };
          },
          eh = (e, t) => {
            for (let n = 0; n < 48; n++) I[n] = e, T[n] = t, R[n] = 0, P[n] = 0;
            z = e, W = t, V = 0, _ = 0;
          },
          ep = e => {
            let t = n.current,
              a = .72 + (1 - m(t.bounce, 0, 1)) * .28,
              i = 94 * a / m(t.trail, .5, 6);
            if (Z > 0) {
              let e = v(1 - Z / .55),
                n = e * c * J,
                a = (.9 * m(t.width, 2, 200) + 34) * Math.sin(e * Math.PI),
                i = Math.cos(n) - 1,
                o = Math.sin(n);
              r += (Q * i - ee * o) * a, l += (ee * i + Q * o) * a;
            }
            I[0] = z, T[0] = W, eo = 0;
            for (let t = 1; t < 48; t++) R[t] += (i * i * (I[t - 1] - I[t]) - 2 * a * i * R[t]) * e, P[t] += (i * i * (T[t - 1] - T[t]) - 2 * a * i * P[t]) * e, I[t] += R[t] * e, T[t] += P[t] * e, eo = Math.max(eo, Math.abs(R[t]) + Math.abs(P[t]));
          },
          em = e => {
            let t = n.current,
              a = ec();
            if (a.ghost !== K) if (K = a.ghost, a.ghost) {
              let e = ed(q);
              X = z - e.x, G = W - e.y, $ = 1, Y = 1, a = ec();
            } else Y = 0;
            Y = Math.min(1, Y + e / .8), a.ghost && (q += e * m(t.autoplaySpeed, 0, 5), $ *= Math.exp(-e / 2.2));
            let i = m(t.follow, .005, 1) + (1 - v(Y)) * .22,
              r = 1 - .45 * m(t.bounce, 0, 1);
            [z, V] = x(z, V, a.x, e, i, r), [W, _] = x(W, _, a.y, e, i, r), Z > 0 && (Z = Math.max(0, Z - e)), O += e;
            let l = 0;
            for (; O >= p && l < 16;) H += p, ep(p), O -= p, l++;
            16 === l && (O = 0);
          },
          ev = () => {
            let e = n.current,
              [t, a] = e.colors;
            k.uLabA.value.copy(y(t ?? "#5227FF")), k.uLabB.value.copy(y(a ?? t ?? "#FF9FFC")), k.uShade.value = m(e.shade, 0, 1), k.uOpacity.value = m(e.opacity, 0, 1);
          },
          eb = () => {
            let t = n.current,
              i = e.getBoundingClientRect(),
              l = Math.min(r.devicePixelRatio || 1, Math.max(t.dpr, .5)),
              o = Math.max(1, Math.round(i.width)),
              s = Math.max(1, Math.round(i.height));
            return (o !== U || s !== D || l !== N) && (U = o, D = s, N = l, a.setPixelRatio(N), a.setSize(U, D, !1), E.left = 0, E.right = U, E.top = 0, E.bottom = -D, E.updateProjectionMatrix(), !0);
          },
          ef = () => {
            er || el || !ei || en || (en = r.requestAnimationFrame(eg));
          };
        function eg(e) {
          if (en = 0, er || el) return;
          let t = n.current,
            i = ea ? m((e - ea) / 1e3, 0, .05) : 1 / 60;
          ea = e, et || (() => {
            let e = ec();
            if (K = e.ghost, Y = 1, e.ghost) {
              let e = ed(q -= 2.5);
              eh(e.x, e.y);
              for (let e = 0; e < 150; e++) em(1 / 60);
            } else eh(e.x, e.y);
            et = !0;
          })(), t.paused || em(i), ev(), (() => {
            let e = n.current;
            B[0] = 0;
            for (let e = 1; e < 48; e++) B[e] = B[e - 1] + Math.hypot(I[e] - I[e - 1], T[e] - T[e - 1]);
            es = B[47];
            let t = m(e.width, 2, 200);
            if (es < .5) return g.setDrawRange(0, 0);
            let a = m(e.taper, 0, 1),
              i = e.angle * h + (e.reduced ? 0 : e.spin * h * H),
              r = e.twist * h,
              l = v(es / (3 * t)),
              s = Math.max(1.2 * t, 10),
              u = 0,
              c = (e, n, c, h, p) => {
                let m = es > 0 ? p / es : 0,
                  f = i + r * m,
                  g = Math.cos(f),
                  w = Math.sin(f),
                  y = Math.hypot(c, h) || 1,
                  x = Math.abs(c / y * w - h / y * g),
                  F = .5 * t * ((1 - a * Math.pow(m, 1.5)) * v(p / s) * l),
                  M = 564 - u,
                  C = 6 * M;
                o[C] = e - g * F, o[C + 1] = -(n - w * F), o[C + 2] = 0, o[C + 3] = e + g * F, o[C + 4] = -(n + w * F), o[C + 5] = 0, d[2 * M] = m, d[2 * M + 1] = m, b[2 * M] = x, b[2 * M + 1] = x, u++;
              };
            for (let e = 0; e < 47; e++) {
              let t = Math.max(e - 1, 0),
                a = e + 1,
                i = Math.min(e + 2, 47);
              for (let e = 0; e < 12; e++) {
                let r = e / 12,
                  l = r * r,
                  o = l * r;
                c(.5 * (2 * I[e] + (-I[t] + I[a]) * r + (2 * I[t] - 5 * I[e] + 4 * I[a] - I[i]) * l + (-I[t] + 3 * I[e] - 3 * I[a] + I[i]) * o), .5 * (2 * T[e] + (-T[t] + T[a]) * r + (2 * T[t] - 5 * T[e] + 4 * T[a] - T[i]) * l + (-T[t] + 3 * T[e] - 3 * T[a] + T[i]) * o), .5 * (-I[t] + I[a] + 2 * (2 * I[t] - 5 * I[e] + 4 * I[a] - I[i]) * r + 3 * (-I[t] + 3 * I[e] - 3 * I[a] + I[i]) * l), .5 * (-T[t] + T[a] + 2 * (2 * T[t] - 5 * T[e] + 4 * T[a] - T[i]) * r + 3 * (-T[t] + 3 * T[e] - 3 * T[a] + T[i]) * l), B[e] + (B[a] - B[e]) * r);
              }
            }
            c(I[47], T[47], I[47] - I[46], T[47] - T[46], es), w.needsUpdate = !0, C.needsUpdate = !0, A.needsUpdate = !0, g.setDrawRange(0, 3384);
          })(), a.render(L, E);
          let r = t.autoplay && !t.reduced && (K || !eu.inside),
            l = eo > .5 || Math.hypot(V, _) > .5 || Z > 0;
          !t.paused && (r || l) && ef();
        }
        let ew = (t, a) => {
            if (!n.current.interactive) return;
            let i = e.getBoundingClientRect(),
              r = t - i.left,
              l = a - i.top;
            if (!(r >= 0 && l >= 0 && r <= i.width && l <= i.height)) {
              eu.inside && (eu.inside = !1, eu.leftAt = performance.now(), ef());
              return;
            }
            if (et) {
              let e = Math.max(240, .35 * Math.min(i.width, i.height)),
                t = eu.inside && Math.hypot(r - eu.x, l - eu.y) > e,
                n = !eu.inside && (es < 1 || Math.hypot(r - z, l - W) > e);
              (t || n) && (eh(r, l), K = !1, Y = 1);
            }
            eu.inside = !0, eu.seen = !0, eu.x = r, eu.y = l, ef();
          },
          ey = () => {
            eu.inside && (eu.inside = !1, eu.leftAt = performance.now(), ef());
          },
          ex = () => {
            let e = I[0] - I[6],
              t = T[0] - T[6],
              n = Math.hypot(e, t);
            n < 2 ? (e = 0, t = -1) : (e /= n, t /= n), Q = e, ee = t, J = J > 0 ? -1 : 1, Z = .55, ef();
          },
          eF = e => {
            "touch" !== e.pointerType && ew(e.clientX, e.clientY);
          },
          eM = t => {
            let a = n.current;
            if (!a.interactive || !a.flick || a.paused || t.button > 0) return;
            let i = e.getBoundingClientRect(),
              r = t.clientX - i.left,
              l = t.clientY - i.top;
            r < 0 || l < 0 || r > i.width || l > i.height || ex();
          },
          eC = e => {
            let t = e.targetTouches[0];
            t && ew(t.clientX, t.clientY);
          };
        r.addEventListener("pointermove", eF, {
          passive: !0
        }), r.addEventListener("pointerdown", eM, {
          passive: !0
        }), r.addEventListener("touchstart", eC, {
          passive: !0
        }), r.addEventListener("touchmove", eC, {
          passive: !0
        }), r.addEventListener("touchend", ey, {
          passive: !0
        }), r.addEventListener("blur", ey), i.documentElement.addEventListener("mouseleave", ey);
        let eA = new ResizeObserver(() => {
          eb() && (ea = 0, ef());
        });
        eA.observe(e);
        let ek = "undefined" == typeof IntersectionObserver ? null : new IntersectionObserver(([e]) => {
          (ei = e.isIntersecting) ? (ea = 0, ef()) : en && (r.cancelAnimationFrame(en), en = 0);
        }, {
          rootMargin: "80px"
        });
        ek ? ek.observe(e) : ei = !0;
        let eS = e => {
            e.preventDefault(), el = !0, en && r.cancelAnimationFrame(en), en = 0;
          },
          ej = () => {
            el = !1, ea = 0, ef();
          };
        return l.addEventListener("webglcontextlost", eS), l.addEventListener("webglcontextrestored", ej), eb(), ev(), ef(), {
          sync: () => {
            eb() && (ea = 0), ef();
          },
          flick: () => {
            et && ex();
          },
          reset: () => {
            et = !1, ef();
          },
          destroy: () => {
            er = !0, en && r.cancelAnimationFrame(en), ek?.disconnect(), eA.disconnect(), r.removeEventListener("pointermove", eF), r.removeEventListener("pointerdown", eM), r.removeEventListener("touchstart", eC), r.removeEventListener("touchmove", eC), r.removeEventListener("touchend", ey), r.removeEventListener("blur", ey), i.documentElement.removeEventListener("mouseleave", ey), l.removeEventListener("webglcontextlost", eS), l.removeEventListener("webglcontextrestored", ej), g.dispose(), S.dispose(), a.dispose(), a.getContext().isContextLost() || a.forceContextLoss(), l.remove();
          }
        };
      })(e, t, V);
      return z.current = n, () => {
        n?.destroy(), z.current = null;
      };
    }, []), (0, React.useImperativeHandle)(N, () => ({
      flick: () => z.current?.flick(),
      reset: () => z.current?.reset()
    }), []);
    let _ = t.trim().toLowerCase();
    return <div ref={H} className={(0, __mod_90650.cn)("relative h-full min-h-[320px] w-full overflow-hidden", B)} style={{
      backgroundColor: "transparent" === _ || "" === _ ? void 0 : t,
      ...U
    }}><div ref={O} aria-hidden="true" style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none"
      }} />{D ? <div style={{
        position: "relative",
        zIndex: 1,
        height: "100%"
      }}>{D}</div> : null}</div>;
  });
C.displayName = "RibbonTrail";
let A = {
    dark: ["#5227FF", "#FF9FFC"],
    light: ["#5227FF", "#E0409A"],
    width: 28,
    trail: 1.9,
    bounce: .4,
    angle: -35,
    twist: 0,
    spin: 0,
    taper: .55
  },
  k = {
    ribbon: A,
    streamer: {
      ...A,
      width: 14,
      trail: 3,
      bounce: .5,
      twist: 180,
      taper: .4
    },
    sash: {
      ...A,
      width: 54,
      trail: 1.5,
      bounce: .2,
      angle: -20,
      taper: .3
    },
    whip: {
      ...A,
      width: 18,
      trail: 1.2,
      bounce: .95,
      taper: .8
    },
    twirl: {
      ...A,
      width: 26,
      trail: 2.2,
      spin: 50
    },
    mono: {
      ...A,
      dark: ["#FFFFFF", "#6B6B76"],
      light: ["#0A0A0A", "#9A9AA5"]
    }
  },
  S = [{
    label: "Ribbon",
    value: "ribbon"
  }, {
    label: "Streamer",
    value: "streamer"
  }, {
    label: "Sash",
    value: "sash"
  }, {
    label: "Whip",
    value: "whip"
  }, {
    label: "Twirl",
    value: "twirl"
  }, {
    label: "Mono",
    value: "mono"
  }],
  j = [{
    name: "colors",
    type: "[string, string]",
    default: '["#5227FF", "#FF9FFC"]',
    description: "Front and back of the ribbon. The ribbon turns over wherever it folds, so both faces show as it flows, blending into each other slightly along its length."
  }, {
    name: "backgroundColor",
    type: "string",
    default: '"transparent"',
    description: "Background of the component. Leave it transparent to lay the ribbon over your own page."
  }, {
    name: "width",
    type: "number",
    default: "28",
    description: "Ribbon width in pixels."
  }, {
    name: "trail",
    type: "number",
    default: "1.9",
    description: "Seconds the end of the ribbon lags behind the cursor. Longer trails stream further and take longer to coil back in when the cursor stops."
  }, {
    name: "bounce",
    type: "number",
    default: "0.4",
    description: "How springy the ribbon is. Low values glide and settle, high values whip and curl past the cursor when it stops."
  }, {
    name: "angle",
    type: "number",
    default: "-35",
    description: "Angle the ribbon is held at, in degrees, like a calligraphy nib. The ribbon narrows and turns over wherever it travels along this angle."
  }, {
    name: "twist",
    type: "number",
    default: "0",
    description: "Extra turn from the head to the tail, in degrees. It spirals the ribbon so it folds in more places."
  }, {
    name: "spin",
    type: "number",
    default: "0",
    description: "Slowly rotates the holding angle, in degrees per second, so the folds keep moving."
  }, {
    name: "taper",
    type: "number",
    default: "0.55",
    description: "How much the ribbon narrows towards its tail. It always opens out of a fine point at the cursor."
  }, {
    name: "shade",
    type: "number",
    default: "0.6",
    description: "Dims the ribbon where it turns edge-on, which gives the folds their depth. 0 keeps both faces flat."
  }, {
    name: "opacity",
    type: "number",
    default: "1",
    description: "Overall opacity of the ribbon."
  }, {
    name: "follow",
    type: "number",
    default: "0.04",
    description: "Seconds the head of the ribbon takes to catch up with the pointer."
  }, {
    name: "flick",
    type: "boolean",
    default: "true",
    description: "Clicking twirls the head of the ribbon in a small loop, throwing a curl down its length. The direction alternates with each click."
  }, {
    name: "autoplay",
    type: "boolean",
    default: "true",
    description: "Until the pointer arrives, and again after it leaves, an invisible hand keeps the ribbon flowing."
  }, {
    name: "autoplaySpeed",
    type: "number",
    default: "1",
    description: "Speed of that invisible hand."
  }, {
    name: "idleDelay",
    type: "number",
    default: "1.5",
    description: "Seconds after the pointer leaves before the invisible hand takes the ribbon back."
  }, {
    name: "interactive",
    type: "boolean",
    default: "true",
    description: "Let the pointer and touch lead the ribbon. The component listens on the window, so content laid over it still pulls the ribbon."
  }, {
    name: "paused",
    type: "boolean",
    default: "false",
    description: "Freezes the ribbon. Reduced-motion users never get the invisible hand."
  }, {
    name: "dpr",
    type: "number",
    default: "2",
    description: "Maximum device pixel ratio for the canvas."
  }, {
    name: "ref",
    type: "{ flick, reset }",
    default: "—",
    description: "Imperative controls: twirl the ribbon, or gather it back into the cursor."
  }, {
    name: "children",
    type: "ReactNode",
    default: "—",
    description: "Content rendered above the ribbon, such as a hero."
  }, {
    name: "className",
    type: "string",
    default: "—",
    description: "Classes for the root element. It fills its parent, with a 320px minimum height."
  }, {
    name: "style",
    type: "CSSProperties",
    default: "—",
    description: "Inline styles for the root element."
  }],
  L = () => {
    let [e, t] = (0, __mod_90761.I)(),
      n = (0, __mod_86049.Y)(),
      [s, u] = (0, React.useState)("ribbon"),
      [d, c] = (0, React.useState)(A),
      h = e => t => c(n => ({
        ...n,
        [e]: t
      })),
      [p, m] = (0, React.useState)(null),
      v = p ?? ("dark" === n ? d.dark : d.light),
      [b, f] = (0, React.useState)(null),
      g = b ?? ("dark" === n ? "#0A0A0A" : "#FFFFFF"),
      [w, y] = (0, React.useState)(.6),
      [x, F] = (0, React.useState)(1),
      [M, L] = (0, React.useState)(.04),
      [E, I] = (0, React.useState)(1),
      [T, R] = (0, React.useState)(1.5),
      [P, B] = (0, React.useState)(!0),
      [U, D] = (0, React.useState)(!0),
      [N, H] = (0, React.useState)(!0),
      [O, z] = (0, React.useState)(!1);
    return <div><__mod_56388.Bg /><__mod_56388.VX><__mod_56388.Ec><__mod_56388.Ch onRefresh={t} minHeight={560} enableResponsive={!0}><div className="relative h-full w-full"><C colors={v} backgroundColor={g} width={d.width} trail={d.trail} bounce={d.bounce} angle={d.angle} twist={d.twist} spin={d.spin} taper={d.taper} shade={w} opacity={x} follow={M} flick={P} autoplay={U} autoplaySpeed={E} idleDelay={T} interactive={N} paused={O} /></div></__mod_56388.Ch><__mod_56388.IH><__mod_56388.bg title="Preset" value={s} options={S} onChange={e => {
              u(e), c(k[e] ?? A), m(null);
            }} /><__mod_56388.W7 title="Front" value={v[0]} onChange={e => m([e, v[1]])} /><__mod_56388.W7 title="Back" value={v[1]} onChange={e => m([v[0], e])} /><__mod_56388.W7 title="Background" value={g} onChange={f} /><__mod_56388.yt title="Width" min={4} max={120} step={1} value={d.width} valueUnit="px" onChange={h("width")} /><__mod_56388.yt title="Trail" min={.5} max={4} step={.05} value={d.trail} valueUnit="s" onChange={h("trail")} /><__mod_56388.yt title="Bounce" min={0} max={1} step={.01} value={d.bounce} onChange={h("bounce")} /><__mod_56388.yt title="Angle" min={-90} max={90} step={1} value={d.angle} valueUnit="\xb0" onChange={h("angle")} /><__mod_56388.yt title="Twist" min={-360} max={360} step={5} value={d.twist} valueUnit="\xb0" onChange={h("twist")} /><__mod_56388.yt title="Spin" min={-120} max={120} step={1} value={d.spin} valueUnit="\xb0/s" onChange={h("spin")} /><__mod_56388.yt title="Taper" min={0} max={1} step={.01} value={d.taper} onChange={h("taper")} /><__mod_56388.yt title="Shade" min={0} max={1} step={.01} value={w} onChange={y} /><__mod_56388.yt title="Opacity" min={0} max={1} step={.01} value={x} onChange={F} /><__mod_56388.yt title="Follow" min={.01} max={.3} step={.005} value={M} valueUnit="s" onChange={L} /><__mod_56388.yt title="Autoplay Speed" min={.1} max={3} step={.05} value={E} onChange={I} /><__mod_56388.yt title="Idle Delay" min={0} max={6} step={.25} value={T} valueUnit="s" onChange={R} /><__mod_56388.tl title="Flick" checked={P} onChange={B} /><__mod_56388.tl title="Autoplay" checked={U} onChange={D} /><__mod_56388.tl title="Interactive" checked={N} onChange={H} /><__mod_56388.tl title="Paused" checked={O} onChange={z} /></__mod_56388.IH><__mod_56388.Ub data={j} /></__mod_56388.Ec><__mod_56388.lT><__mod_56388.Gv /></__mod_56388.lT></__mod_56388.VX></div>;
  };

export default C;

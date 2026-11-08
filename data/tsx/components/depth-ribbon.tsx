import * as __mod_2253 from "../_helpers/2253";
import * as __mod_12246 from "../_helpers/12246";
import * as __mod_90650 from "../_helpers/90650";
import * as __mod_90761 from "../_helpers/90761";
import * as __mod_86049 from "../_helpers/86049";
import * as __mod_56388 from "../_helpers/56388";
/**
 * Depth Ribbon
 * A ribbon of images winding through 3D space
 * slug: depth-ribbon
 * category: gallery
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let d = 2 * Math.PI,
  h = [["/demo-media/abstract-iris-window.webp", "Iris window", "An opening into color"], ["/demo-media/abstract-citrus-signal.webp", "Citrus signal", "A sharp citrus accent"], ["/demo-media/abstract-rose-petal.webp", "Rose petal", "Three curves in conversation"], ["/demo-media/abstract-spectrum.webp", "Spectrum", "A study in pink and violet"], ["/demo-media/abstract-spectrum-shift.webp", "Spectrum shift", "A shift toward coral"], ["/demo-media/abstract-rose-balance.webp", "Rose balance", "A bright point of balance"], ["/demo-media/abstract-amber-loop.webp", "Amber loop", "Warmth around an open center"], ["/demo-media/abstract-coral-fold.webp", "Coral fold", "A bold change of direction"]].map(([e, t, a]) => ({
    src: e,
    alt: `${t}, ${a.toLowerCase()}`,
    title: t,
    subtitle: a
  })),
  p = (e, t, a) => Math.min(a, Math.max(t, e)),
  v = e => {
    let t = window.matchMedia("(prefers-reduced-motion: reduce)");
    return t.addEventListener("change", e), () => t.removeEventListener("change", e);
  },
  f = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  m = (e, t, a, r, n) => {
    let i = d / Math.max(n, .02),
      o = Math.max(1, Math.ceil(r / (1 / 120))),
      l = r / o;
    for (let e = 0; e < o; e++) s += (i * i * (a - e) - 2 * i * t) * l, c += t * l;
    return [e, t];
  },
  g = (e, t, a) => "knot" === e ? a.set(Math.sin(t) + 2 * Math.sin(2 * t), -(.85 * Math.sin(3 * t)), Math.cos(t) - 2 * Math.cos(2 * t)) : "wave" === e ? a.set(2.6 * Math.cos(t), .55 * Math.sin(3 * t), 2.6 * Math.sin(t)) : a.set(2.8 * Math.sin(t), .5 * Math.cos(t), 1.45 * Math.sin(2 * t)),
  b = () => ({
    target: new __mod_2253.Pq0(),
    dir: new __mod_2253.Pq0(0, 0, 1),
    r: 1
  }),
  w = (e, t) => (t.target.copy(e.target), t.dir.copy(e.dir), t.r = e.r, t),
  y = (e, t, a, r) => {
    let n = p(a, 0, 1);
    return r.target.lerpVectors(e.target, t.target, n), r.dir.copy(e.dir).lerp(t.dir, n), 1e-6 > r.dir.lengthSq() && r.dir.copy(t.dir), r.dir.normalize(), r.r = Math.exp(Math.log(e.r) + (Math.log(t.r) - Math.log(e.r)) * n), r;
  },
  x = {
    position: "absolute",
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    border: 0
  },
  M = {
    position: "absolute",
    inset: 0,
    touchAction: "pan-y",
    userSelect: "none",
    WebkitUserSelect: "none",
    WebkitTouchCallout: "none"
  },
  C = {
    position: "absolute",
    inset: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    pointerEvents: "none"
  },
  A = `
attribute vec3 aCenter;
attribute vec4 aCard;
uniform float uMargin;
uniform float uAspect;
uniform float uFogLength;
varying vec2 vLocal;
varying vec4 vCard;
varying float vFade;

void main() {
  vec4 view = modelViewMatrix * vec4(aCenter, 1.0);
  float depth = max(-view.z, 0.0);
  float size = aCard.x * (1.0 + 0.14 * aCard.z);
  vec2 corner = position.xy * uMargin;
  view.xy += corner * vec2(uAspect, 1.0) * size;
  gl_Position = projectionMatrix * view;
  float fog = exp(-pow(depth / uFogLength, 1.5));
  float near = smoothstep(0.25, 0.85, depth);
  vFade = fog * near * aCard.w;
  vLocal = corner;
  vCard = aCard;
}
`,
  S = `
precision highp float;

uniform sampler2D uAtlas;
uniform vec2 uGrid;
uniform float uInset;
uniform float uLoaded[48];
uniform float uAspect;
uniform float uRadius;
uniform float uShadow;
uniform float uDim;
varying vec2 vLocal;
varying vec4 vCard;
varying float vFade;

float roundBox(vec2 p, vec2 b, float r) {
  vec2 q = abs(p) - b + r;
  return length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - r;
}

void main() {
  if (vFade < 0.003) discard;
  vec2 halfSize = vec2(uAspect, 1.0) * 0.5;
  vec2 p = vLocal * vec2(uAspect, 1.0);
  float corner = clamp(uRadius, 0.0, 1.0) * min(halfSize.x, halfSize.y);
  float d = roundBox(p, halfSize, corner);
  float aa = fwidth(d) * 0.8;
  float card = 1.0 - smoothstep(-aa, aa, d);
  float soft = 0.07 + 0.12 * vCard.z;
  float sd = roundBox(p - vec2(0.0, -0.045 - 0.07 * vCard.z), halfSize - soft * 0.3, corner);
  float shade = (1.0 - smoothstep(-soft, soft, sd)) * uShadow * (0.55 + 0.35 * vCard.z);
  vec2 uv = p / (halfSize * 2.0) + 0.5;
  vec2 crop = uAspect < 1.0 ? vec2(uAspect, 1.0) : vec2(1.0, 1.0 / uAspect);
  vec2 suv = clamp(0.5 + (uv - 0.5) * crop, 0.0, 1.0);
  float which = floor(vCard.y + 0.5);
  vec2 slot = vec2(mod(which, uGrid.x), floor(which / uGrid.x));
  float inner = 1.0 - 2.0 * uInset;
  vec2 atlasUv = vec2(
    (slot.x + uInset + suv.x * inner) / uGrid.x,
    1.0 - (slot.y + uInset + (1.0 - suv.y) * inner) / uGrid.y
  );
  vec3 image = texture2D(uAtlas, atlasUv).rgb;
  vec3 color = mix(vec3(0.14, 0.13, 0.18), image, uLoaded[int(which)]) * (1.0 + 0.08 * vCard.z);
  float fade = vFade * (1.0 - uDim);
  float alpha = card * fade;
  vec4 result = vec4(color * alpha, alpha);
  result += vec4(0.0, 0.0, 0.0, shade * fade) * (1.0 - alpha);
  if (result.a < 0.002) discard;
  gl_FragColor = result;
}
`,
  k = `
uniform float uFogLength;
varying float vFade;

void main() {
  vec4 view = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * view;
  float depth = max(-view.z, 0.0);
  vFade = exp(-pow(depth / uFogLength, 1.5)) * smoothstep(0.4, 1.4, depth);
}
`,
  j = `
precision highp float;
uniform vec3 uColor;
uniform float uOpacity;
varying float vFade;

void main() {
  float alpha = uOpacity * vFade;
  gl_FragColor = vec4(uColor * alpha, alpha);
}
`,
  I = `
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,
  F = `
precision highp float;

uniform sampler2D uImage;
uniform float uImageAspect;
uniform float uPlaneAspect;
uniform float uRadius;
uniform float uOpacity;
varying vec2 vUv;

float roundBox(vec2 p, vec2 b, float r) {
  vec2 q = abs(p) - b + r;
  return length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - r;
}

void main() {
  vec2 p = (vUv - 0.5) * vec2(uPlaneAspect, 1.0);
  float d = roundBox(p, vec2(uPlaneAspect, 1.0) * 0.5, uRadius);
  float aa = fwidth(d);
  float cover = 1.0 - smoothstep(-aa, aa, d);
  vec2 uv = vUv - 0.5;
  if (uPlaneAspect < uImageAspect) {
    uv.x *= uPlaneAspect / uImageAspect;
  } else {
    uv.y *= uImageAspect / uPlaneAspect;
  }
  vec3 color = texture2D(uImage, uv + 0.5).rgb;
  float alpha = cover * uOpacity;
  gl_FragColor = vec4(color * alpha, alpha);
}
`,
  E = (0, React.forwardRef)(function ({
    items: e = h,
    count: t = 72,
    path: a = "loop",
    tour: i = "cycle",
    interval: o = 9,
    speed: l = .6,
    cardSize: E = .72,
    aspect: P = 1,
    radius: R = .12,
    offset: L = 1,
    fov: z = 60,
    fog: T = 1,
    thread: q = .3,
    shadow: O = .5,
    accentColor: D = "#B19EEF",
    backgroundColor: V = "transparent",
    focusOnClick: W = !0,
    holdToReveal: B = !0,
    captions: U = !0,
    interactive: Y = !0,
    draggable: H = !0,
    wheel: N = !0,
    pauseOnHover: X = !0,
    seed: G = 0,
    paused: $ = !1,
    dpr: _ = 2,
    ariaLabel: K = "Depth ribbon gallery. Scroll or drag to travel, hold to see the whole path, click an image to bring it close.",
    onFocusChange: Q,
    className: Z,
    style: J,
    children: ee
  }, et) {
    let ea = (0, React.useRef)(null),
      er = (0, React.useRef)(null),
      en = (0, React.useRef)(null),
      ei = (0, React.useSyncExternalStore)(v, f, () => !1),
      [eo, el] = (0, React.useState)(-1),
      [es, ec] = (0, React.useState)(!1),
      eu = e.length ? e : h,
      ed = (0, React.useRef)(eu),
      eh = {
        items: eu,
        count: t,
        path: a,
        tour: i,
        interval: o,
        speed: l,
        cardSize: E,
        aspect: P,
        radius: R,
        offset: L,
        fov: z,
        fog: T,
        thread: q,
        shadow: O,
        accentColor: D,
        backgroundColor: V,
        focusOnClick: W,
        holdToReveal: B,
        captions: U,
        interactive: Y,
        draggable: H,
        wheel: N,
        pauseOnHover: X,
        seed: G,
        paused: $,
        dpr: _,
        reduced: ei
      },
      ep = (0, React.useRef)(eh),
      ev = (0, React.useRef)(Q);
    (0, React.useEffect)(() => {
      ep.current = eh, ed.current = eu, ev.current = Q, en.current?.sync();
    }), (0, React.useEffect)(() => {
      let e = ea.current,
        t = er.current;
      if (!e || !t) return;
      let a = ((e, t, a, r, n) => {
        let i,
          o = e.ownerDocument,
          l = o.createElement("canvas");
        l.style.cssText = "position:absolute;inset:0;width:100%;height:100%;display:block";
        try {
          i = new __mod_12246.WebGLRenderer({
            canvas: l,
            alpha: !0,
            antialias: !0,
            premultipliedAlpha: !0,
            powerPreference: "high-performance"
          });
        } catch {
          return null;
        }
        t.appendChild(l), i.setClearColor(0, 0);
        let u = Array(48).fill(0),
          h = Array(48).fill(!1),
          v = {
            value: 16
          },
          f = new __mod_2253.Q1f(0xb19eef),
          x = {
            uAtlas: {
              value: null
            },
            uGrid: {
              value: new __mod_2253.I9Y(1, 1)
            },
            uInset: {
              value: .004
            },
            uLoaded: {
              value: u
            },
            uMargin: {
              value: 1.4
            },
            uAspect: {
              value: 1
            },
            uFogLength: v,
            uRadius: {
              value: .12
            },
            uShadow: {
              value: .5
            },
            uDim: {
              value: 0
            }
          },
          M = new __mod_2253.BKk({
            uniforms: x,
            vertexShader: A,
            fragmentShader: S,
            transparent: !0,
            premultipliedAlpha: !0,
            depthTest: !1,
            depthWrite: !1
          }),
          C = new __mod_2253.bdM(1, 1),
          E = new __mod_2253.CmU();
        E.index = C.index, E.setAttribute("position", C.getAttribute("position")), E.setAttribute("uv", C.getAttribute("uv"));
        let P = new Float32Array(720),
          R = new Float32Array(960),
          L = new __mod_2253.uWO(P, 3),
          z = new __mod_2253.uWO(R, 4);
        L.setUsage(__mod_2253.Vnu), z.setUsage(__mod_2253.Vnu), E.setAttribute("aCenter", L), E.setAttribute("aCard", z), E.instanceCount = 0;
        let T = new __mod_2253.eaF(E, M);
        T.frustumCulled = !1, T.renderOrder = 1;
        let q = {
            uFogLength: v,
            uColor: {
              value: f
            },
            uOpacity: {
              value: .3
            }
          },
          O = new __mod_2253.BKk({
            uniforms: q,
            vertexShader: k,
            fragmentShader: j,
            transparent: !0,
            premultipliedAlpha: !0,
            depthTest: !1,
            depthWrite: !1
          }),
          D = new __mod_2253.LoY(),
          V = new __mod_2253.FCc(D, O);
        V.frustumCulled = !1, V.renderOrder = 0;
        let W = {
            uImage: {
              value: null
            },
            uImageAspect: {
              value: 1
            },
            uPlaneAspect: {
              value: 1
            },
            uRadius: {
              value: .06
            },
            uOpacity: {
              value: 1
            }
          },
          B = new __mod_2253.BKk({
            uniforms: W,
            vertexShader: I,
            fragmentShader: F,
            transparent: !0,
            premultipliedAlpha: !0,
            depthTest: !1,
            depthWrite: !1
          }),
          U = new __mod_2253.bdM(1, 1),
          Y = new __mod_2253.eaF(U, B);
        Y.frustumCulled = !1, Y.renderOrder = 2, Y.visible = !1;
        let H = new __mod_2253.Z58();
        H.add(V, T, Y);
        let N = new __mod_2253.ubm(60, 1, .05, 2e3),
          X = null,
          G = null,
          $ = [],
          _ = new Map(),
          K = "",
          Q = "",
          Z = "",
          J = "",
          ee = new Float32Array(0),
          et = 0,
          ea = 10,
          er = [],
          en = [],
          ei = [],
          eo = new Float32Array(0),
          el = 1,
          es = 1,
          ec = 1,
          eu = 0,
          ed = 0,
          eh = 1,
          ep = 0,
          ev = 0,
          ef = 0,
          em = "ride",
          eg = 0,
          eb = 0,
          ew = 0,
          ey = 0,
          ex = 0,
          eM = !1,
          eC = !1,
          eA = -1,
          eS = null,
          ek = 0,
          ej = 0,
          eI = 0,
          eF = !1,
          eE = !1,
          eP = !1,
          eR = 0,
          eL = 0,
          ez = 0,
          eT = -10,
          eq = {
            clientX: 0,
            clientY: 0,
            inside: !1
          },
          eO = null,
          eD = b(),
          eV = b(),
          eW = b(),
          eB = b(),
          eU = b(),
          eY = b(),
          eH = new __mod_2253.Pq0(),
          eN = new __mod_2253.Pq0(),
          eX = new __mod_2253.Pq0(),
          eG = new __mod_2253.Pq0(0, 1, 0),
          e$ = new __mod_2253.Pq0(),
          e_ = new __mod_2253.Pq0(),
          eK = new __mod_2253.Pq0(),
          eQ = new __mod_2253.Pq0(),
          eZ = (e, t) => {
            let a = 8 * et;
            if (!a) return t.set(0, 0, 0);
            let r = (8 * e % a + a) % a,
              n = Math.floor(r),
              i = r - n,
              o = (n + 1) % a;
            return t.set(ee[3 * n] + (ee[3 * o] - ee[3 * n]) * i, ee[3 * n + 1] + (ee[3 * o + 1] - ee[3 * n + 1]) * i, ee[3 * n + 2] + (ee[3 * o + 2] - ee[3 * n + 2]) * i);
          },
          eJ = (e, t) => {
            let a = 8 * e * 3;
            return t.set(ee[a], ee[a + 1], ee[a + 2]);
          },
          e0 = () => {
            let e = a.current,
              t = p(Math.round(e.count), 12, 240),
              r = `${e.path}|${t}`;
            if (r === Q) return !1;
            Q = r;
            let n = new Float64Array(12291),
              i = new Float64Array(4097),
              o = new __mod_2253.Pq0();
            for (let t = 0; t <= 4096; t++) g(e.path, t / 4096 * d, o), n[3 * t] = o.x, n[3 * t + 1] = o.y, n[3 * t + 2] = o.z, t > 0 && (i[t] = i[t - 1] + Math.hypot(n[3 * t] - n[(t - 1) * 3], n[3 * t + 1] - n[(t - 1) * 3 + 1], n[3 * t + 2] - n[(t - 1) * 3 + 2]));
            let l = i[4096],
              c = 8 * t,
              u = t / l;
            ee = new Float32Array(3 * c);
            let h = 0,
              v = 0,
              f = 0,
              m = 0;
            for (let e = 0; e < c; e++) {
              let t = e / c * l;
              for (; h < 4095 && i[h + 1] < t;) h++;
              let a = i[h + 1] - i[h] || 1,
                r = (t - i[h]) / a;
              for (let t = 0; t < 3; t++) ee[3 * e + t] = (n[3 * h + t] + (n[(h + 1) * 3 + t] - n[3 * h + t]) * r) * u;
              v += ee[3 * e], f += ee[3 * e + 1], m += ee[3 * e + 2];
            }
            v /= c, f /= c, m /= c, ea = 0;
            for (let e = 0; e < c; e++) ee[3 * e] -= v, ee[3 * e + 1] -= f, ee[3 * e + 2] -= m, ea = Math.max(ea, Math.hypot(ee[3 * e], ee[3 * e + 1], ee[3 * e + 2]));
            for (et = t, eu = (eu % t + t) % t, D.dispose(), (D = new __mod_2253.LoY()).setAttribute("position", new __mod_2253.THS(ee.slice(), 3)), V.geometry = D; en.length < t;) en.push({
              value: 0,
              velocity: 0
            });
            return en.length = t, ei = Array.from({
              length: t
            }, (e, t) => t), eo = new Float32Array(t), eS && eS.card >= t && (eS = null), !0;
          },
          e1 = () => {
            let e,
              t = a.current,
              n = Math.max(1, Math.min(r.current.length, 48)),
              i = `${et}|${n}|${t.seed}`;
            if (i === Z) return;
            Z = i;
            let o = (e = Math.imul(Math.floor(131 * t.seed + 7) + 3, 0x9e3779b1) >>> 0 || 1, () => (e ^= e << 13, e ^= e >>> 17, e ^= e << 5, (e >>>= 0) / 0x100000000)),
              l = [];
            for (; l.length < et;) {
              let e = Array.from({
                length: n
              }, (e, t) => t);
              for (let t = e.length - 1; t > 0; t--) {
                let a = Math.floor(o() * (t + 1));
                [e[t], e[a]] = [e[a], e[t]];
              }
              l.length && n > 1 && e[0] === l[l.length - 1] && ([e[0], e[1]] = [e[1], e[0]]), l.push(...e);
            }
            if (er = l.slice(0, et), n > 1 && er[0] === er[et - 1]) {
              let e = er.findIndex((e, t) => t > 0 && t < et - 1 && e !== er[0] && er[t - 1] !== er[et - 1] && er[t + 1] !== er[et - 1]);
              e > 0 && ([er[e], er[et - 1]] = [er[et - 1], er[e]]);
            }
          },
          e2 = () => {
            let e = r.current.slice(0, 48),
              t = e.map(e => e.src).join("\0");
            if (t === K) return;
            K = t, $.forEach(e => {
              e.onload = null;
            }), _.forEach(e => e.dispose()), _.clear(), G?.dispose(), u.fill(0), h.fill(!1);
            let a = Math.max(e.length, 1),
              n = a <= 20 ? 512 : a <= 36 ? 384 : 256,
              l = Math.ceil(Math.sqrt(a)),
              c = Math.ceil(a / l),
              d = o.createElement("canvas");
            d.width = l * n, d.height = c * n, X = d;
            let p = d.getContext("2d");
            (G = new __mod_2253.GOR(d)).colorSpace = __mod_2253.jf0, G.minFilter = __mod_2253.$_I, G.magFilter = __mod_2253.k6q, G.generateMipmaps = !0, G.anisotropy = i.capabilities.getMaxAnisotropy(), x.uAtlas.value = G, x.uGrid.value.set(l, c), x.uInset.value = 1.5 / n, $ = e.map((e, t) => {
              let a = new Image();
              return a.crossOrigin = "anonymous", a.decoding = "async", a.onload = () => {
                if (eE || X !== d || !p) return;
                let e = Math.min(a.naturalWidth, a.naturalHeight);
                p.drawImage(a, (a.naturalWidth - e) / 2, (a.naturalHeight - e) / 2, e, e, t % l * n, Math.floor(t / l) * n, n, n), G && (G.needsUpdate = !0), h[t] = !0, e8();
              }, a.src = e.src, a;
            });
          },
          e5 = () => {
            let t = a.current,
              r = e.getBoundingClientRect(),
              n = Math.min(window.devicePixelRatio || 1, Math.max(t.dpr, .5)),
              o = Math.max(1, Math.round(r.width)),
              l = Math.max(1, Math.round(r.height));
            return (o !== el || l !== es || n !== ec) && (el = o, es = l, ec = n, i.setPixelRatio(ec), i.setSize(el, es, !1), !0);
          },
          e3 = () => {
            let e = __mod_2253.cj9.degToRad(p(a.current.fov, 30, 100)),
              t = el / es;
            return t >= 1 ? e : Math.min(Math.max(e, 2 * Math.atan(Math.tan(__mod_2253.cj9.degToRad(52) / 2) / t)), __mod_2253.cj9.degToRad(110));
          },
          e4 = () => {
            let e = e3() / 2,
              t = Math.atan(el / es * Math.tan(e));
            return {
              vertical: e,
              horizontal: t
            };
          },
          e6 = e => {
            eJ(e, eQ).applyMatrix4(N.matrixWorldInverse);
            let t = -eQ.z,
              a = es / (2 * Math.tan(__mod_2253.cj9.degToRad(N.fov) / 2));
            return {
              depth: t,
              sx: el / 2 + eQ.x * a / Math.max(t, .001),
              sy: es / 2 - eQ.y * a / Math.max(t, .001),
              scale: a / Math.max(t, .001)
            };
          },
          e9 = (t, r) => {
            let n = a.current,
              i = e.getBoundingClientRect(),
              o = t - i.left,
              l = r - i.top,
              s = p(n.aspect, .4, 2.5),
              c = p(n.cardSize, .2, 1.5);
            for (let e = ei.length - 1; e >= 0; e--) {
              let t = ei[e];
              if (eS && t === eS.card) continue;
              let a = e6(t);
              if (a.depth < .4 || .2 > Math.exp(-Math.pow(a.depth / v.value, 1.5))) continue;
              let r = c * (1 + .14 * Math.max(en[t].value, 0)) * a.scale / 2,
                i = r * s;
              if (r < 4) continue;
              let u = Math.abs(o - a.sx),
                d = Math.abs(l - a.sy);
              if (u > i || d > r) continue;
              let h = p(n.radius, 0, 1) * Math.min(i, r),
                f = Math.max(u - i + h, 0),
                m = Math.max(d - r + h, 0);
              if (f * f + m * m <= h * h) return t;
            }
            return -1;
          },
          e8 = () => {
            eE || eP || !eF || ej || (ej = requestAnimationFrame(ta));
          },
          e7 = e => {
            let t = $[e];
            if (!t || !t.complete || !t.naturalWidth || _.has(e)) return;
            let a = new __mod_2253.gPd(t);
            a.colorSpace = __mod_2253.jf0, a.minFilter = __mod_2253.$_I, a.magFilter = __mod_2253.k6q, a.generateMipmaps = !0, a.anisotropy = i.capabilities.getMaxAnisotropy(), a.needsUpdate = !0, _.set(e, a), i.initTexture(a);
          },
          te = e => {
            if (e < 0 || e >= et) return;
            let t = er[e] ?? 0,
              r = $[t];
            if (!r || !r.complete || !r.naturalWidth) return;
            e7(t);
            let i = _.get(t);
            if (!i) return;
            W.uImage.value = i, W.uImageAspect.value = r.naturalWidth / r.naturalHeight, eJ(e, eH);
            let o = new __mod_2253.Pq0().subVectors(N.position, eH).normalize();
            eS = {
              card: e,
              item: t,
              e: 0,
              v: 0,
              target: 1,
              from: w(eY, b()),
              handoff: 0,
              handoffV: 0,
              dir: o,
              aspect: p(a.current.aspect, .4, 2.5),
              aspectV: 0
            }, eA = -1, eM = !1, eC = !1, "overview" !== a.current.tour && (em = "ride", eg = 0, ev = 0, ef = 0), eu = e - 2.6, ed = 0, n(t), e8();
          },
          tt = () => {
            eS && 0 !== eS.target && (eS.target = 0, n(-1), e8());
          };
        function ta(t) {
          let r, n, o, l;
          if (ej = 0, eE || eP) return;
          let c = a.current,
            d = eI ? Math.min(Math.max((t - eI) / 1e3, 0), .05) : 1 / 60;
          eI = t, ek += d;
          let g = c.reduced;
          if ((n = (r = a.current).accentColor) !== J && (J = n, ((e, t, a) => {
            try {
              a.set(e);
            } catch {
              a.set(t);
            }
            let r = {
              r: 0,
              g: 0,
              b: 0
            };
            return a.getRGB(r, __mod_2253.er$), a.setRGB(r.r, r.g, r.b);
          })(r.accentColor, "#B19EEF", f)), e0(), e1(), !et) return;
          if (eq.inside && !eO && c.interactive && !(eS && 1 === eS.target)) {
            let t = e9(eq.clientX, eq.clientY);
            t !== eA && (eA = t, e.style.cursor = t >= 0 && c.focusOnClick ? "pointer" : "", t >= 0 && e7(er[t] ?? 0));
          } else (!eq.inside || eS && 1 === eS.target) && (eA = -1);
          let b = c.pauseOnHover && eA >= 0,
            M = c.tour;
          "cycle" !== M || g || c.paused ? (em = "ride", eg = 0) : (eS || b || eO || !(ek - eT > 1.2) || (eg += d), "ride" === em && eg >= Math.max(c.interval, 2) ? (em = "overview", eg = 0) : "overview" === em && eg >= 3.8 && (em = "ride", eg = 0));
          let C = "overview" === M || "overview" === em || eM || eC ? 1 : 0;
          [ev, ef] = m(ev, ef, C, d, g ? .05 : 1.7);
          let A = ek - eT < 1.2,
            S = b || !!eS || A;
          [eh, ep] = m(eh, ep, +!S, d, S ? .25 : .9);
          let k = g || c.paused ? 0 : c.speed;
          if (!(eO && eO.moved && ev < .5)) {
            let e = eL * (1 - Math.exp(-d / (g ? .02 : .16)));
            1e-4 > Math.abs(eL -= e) && (eL = 0), eu += (k * Math.max(eh, 0) + ed) * d + e, ed *= Math.exp(-(1.8 * d));
          }
          if (0 !== ez) {
            let e = ez * (1 - Math.exp(-d / (g ? .02 : .16)));
            1e-4 > Math.abs(ez -= e) && (ez = 0), eb += e;
          }
          if (eO && eO.moved || (eb += ey * d, ew += ex * d, ey *= Math.exp(-(2 * d)), ex *= Math.exp(-(2 * d))), eu = (eu % et + et) % et, o = p(a.current.offset, .3, 3), eZ(eu + .5, eH), eZ(eu - .5, eN), e$.subVectors(eH, eN), 1e-8 > e$.lengthSq() && e$.set(1, 0, 0), e$.normalize(), e_.crossVectors(e$, eG), 1e-6 > e_.lengthSq() && e_.set(1, 0, 0), e_.normalize(), eK.crossVectors(e_, e$).normalize(), l = p((el / es - .5) / .7, 0, 1), eZ(eu, eX), eX.addScaledVector(eK, (1.05 - .5 * l) * o).addScaledVector(e_, (.35 + .7 * l) * o), eZ(eu + 5.5, eD.target), eD.dir.subVectors(eX, eD.target), eD.r = Math.max(eD.dir.length(), .01), eD.dir.divideScalar(eD.r), (e => {
            let {
                vertical: t,
                horizontal: r
              } = e4(),
              n = eb + (a.current.reduced ? 0 : .05 * ek),
              i = p(.62 + ew, .05, 1.45);
            e.target.set(0, 0, 0), e.dir.set(Math.sin(n) * Math.cos(i), Math.sin(i), Math.cos(n) * Math.cos(i));
            let o = .75 * p(a.current.cardSize, .2, 1.5);
            e_.crossVectors(eG, e.dir).normalize(), eK.crossVectors(e.dir, e_).normalize();
            let l = .9 * Math.tan(r),
              s = .86 * Math.tan(t),
              c = .5 * ea;
            for (let t = 0; t < et; t++) {
              eJ(t, eH);
              let a = eH.dot(e.dir);
              c = Math.max(c, a + (Math.abs(eH.dot(e_)) + o) / l, a + (Math.abs(eH.dot(eK)) + o) / s);
            }
            return e.r = c;
          })(eV), y(eD, eV, ev, eW), eS) {
            [eS.e, eS.v] = m(eS.e, eS.v, eS.target, d, g ? .08 : 1.25), 0 === eS.target && ([eS.handoff, eS.handoffV] = m(eS.handoff, eS.handoffV, 1, d, g ? .05 : .6)), [eS.aspect, eS.aspectV] = m(eS.aspect, eS.aspectV, eS.target ? W.uImageAspect.value : p(c.aspect, .4, 2.5), d, g ? .08 : 1.1), eJ(eS.card, eB.target), eB.dir.copy(eS.dir), eB.r = (e => {
              let t = p(a.current.cardSize, .2, 1.5),
                {
                  vertical: r,
                  horizontal: n
                } = e4();
              return Math.max(t / (2 * Math.tan(r) * .6), t * e / (2 * Math.tan(n) * .84));
            })(W.uImageAspect.value);
            let e = y(eS.from, eW, eS.handoff, eU);
            y(e, eB, eS.e, eY), 0 === eS.target && eS.e < .002 && .02 > Math.abs(eS.v) && (eS = null, Y.visible = !1, w(eW, eY));
          } else w(eW, eY);
          N.fov = __mod_2253.cj9.radToDeg(e3()), N.aspect = el / es, N.near = Math.max(.01 * eY.r, .05), N.far = Math.max(6 * eY.r, 6 * ea, 50), N.updateProjectionMatrix(), N.position.copy(eY.target).addScaledVector(eY.dir, eY.r), N.up.set(0, 1, 0), N.lookAt(eY.target), N.updateMatrixWorld(), v.value = (4 + eY.r) * 1.9 / p(c.fog, .1, 4);
          let j = eS ? p(eS.e, 0, 1) : 0;
          x.uDim.value = .65 * j, x.uAspect.value = p(c.aspect, .4, 2.5), x.uRadius.value = p(c.radius, 0, 1), x.uShadow.value = p(c.shadow, 0, 1), q.uOpacity.value = p(c.thread, 0, 1) * Math.min(1, 1 + (ec - 1) * .85) * (1 - .7 * j), V.visible = c.thread > 0;
          let I = !g && !c.paused && (Math.abs(c.speed) > 1e-4 || "ride" !== M);
          I ||= Math.abs(ed) > .001 || Math.abs(ev - C) > .001 || Math.abs(ef) > .001, I ||= Math.abs(ey) + Math.abs(ex) > .001 || !!eS || !!eO, I ||= 0 !== eL || 0 !== ez || A;
          let F = p(c.cardSize, .2, 1.5),
            T = eH.set(0, 0, -1).applyQuaternion(N.quaternion);
          for (let e = 0; e < et; e++) {
            eJ(e, eN), eo[e] = eN.sub(N.position).dot(T);
            let t = en[e],
              a = +(e === eA);
            [t.value, t.velocity] = m(t.value, t.velocity, a, d, g ? .05 : .35), (Math.abs(t.value - a) > .001 || Math.abs(t.velocity) > .001) && (I = !0);
          }
          if (ei.sort((e, t) => eo[t] - eo[e] || e - t), ei.forEach((e, t) => {
            eJ(e, eN), P[3 * t] = eN.x, P[3 * t + 1] = eN.y, P[3 * t + 2] = eN.z, R[4 * t] = F, R[4 * t + 1] = er[e] ?? 0, R[4 * t + 2] = Math.max(en[e].value, 0), R[4 * t + 3] = eS && e === eS.card ? 0 : 1;
          }), E.instanceCount = et, L.needsUpdate = !0, z.needsUpdate = !0, eS) {
            eJ(eS.card, Y.position), Y.quaternion.copy(N.quaternion);
            let e = p(eS.aspect, .3, 4);
            Y.scale.set(F * e, F, 1), Y.visible = !0, W.uPlaneAspect.value = e;
            let t = p(c.radius, 0, 1) * Math.min(e, 1) * .5;
            W.uRadius.value = t + (.03 - t) * p(eS.e, 0, 1);
            let a = Math.exp(-Math.pow(Math.max(eX.subVectors(Y.position, N.position).dot(T), 0) / v.value, 1.5));
            W.uOpacity.value = a + (1 - a) * p(eS.e, 0, 1);
          }
          for (let e = 0; e < 48; e++) h[e] && u[e] < 1 && (u[e] = g ? 1 : Math.min(1, u[e] + d / .6), I = !0);
          i.render(H, N), (I || eq.inside) && e8();
        }
        let tr = t => {
            "touch" !== t.pointerType && (eq.inside = !0, eq.clientX = t.clientX, eq.clientY = t.clientY);
            let r = a.current;
            if (eO && eO.id === t.pointerId) {
              if (!eO.moved && Math.hypot(t.clientX - eO.x, t.clientY - eO.y) > 6 && (eO.moved = !0, window.clearTimeout(eR), eA = -1, e.style.cursor = "grabbing"), eO.moved && r.draggable) {
                let e = t.clientX - eO.lastX,
                  a = t.clientY - eO.lastY,
                  r = performance.now();
                if (ev > .5) eb -= e / Math.max(el, 1) * 3, ew += a / Math.max(es, 1) * 1.6, eO.samples.push({
                  t: r,
                  d: e
                });else if (!eS) {
                  let t = (eO.touch ? -e : -a) / Math.max(es, 1) * 7;
                  eu += t, eO.samples.push({
                    t: r,
                    d: t
                  });
                }
                for (; eO.samples.length && r - eO.samples[0].t > 100;) eO.samples.shift();
              }
              eO.lastX = t.clientX, eO.lastY = t.clientY;
            }
            e8();
          },
          tn = r => {
            let n = a.current;
            if (n.interactive && r.isPrimary && !(r.button > 0)) {
              if (eO = {
                id: r.pointerId,
                x: r.clientX,
                y: r.clientY,
                lastX: r.clientX,
                lastY: r.clientY,
                moved: !1,
                touch: "touch" === r.pointerType,
                samples: []
              }, ed = 0, ey = 0, ex = 0, "touch" !== r.pointerType) try {
                t.setPointerCapture(r.pointerId);
              } catch {}
              window.clearTimeout(eR), n.holdToReveal && !eS && (eR = window.setTimeout(() => {
                !eO || eO.moved || eS || (eM = !0, eA = -1, e.style.cursor = "grabbing", e8());
              }, 300)), e8();
            }
          },
          ti = (r, n) => {
            if (!eO || eO.id !== r.pointerId) return;
            let i = a.current;
            eO = null, window.clearTimeout(eR);
            eM = !1;
            try {
              t.hasPointerCapture(r.pointerId) && t.releasePointerCapture(r.pointerId);
            } catch {}
            if (eO.moved) {
              let e = performance.now(),
                t = eO.samples.filter(t => e - t.t < 100);
              if (t.length > 1 && i.draggable) {
                let e = Math.max((t[t.length - 1].t - t[0].t) / 1e3, 1 / 60),
                  a = t.reduce((e, t) => e + t.d, 0) / e;
                ev > .5 ? ey = p(-a / Math.max(el, 1) * 3, -3, 3) : eS || (ed = p(a, -30, 30));
              }
            } else if (!n && !eM) {
              if (eS && 1 === eS.target) tt();else if (i.focusOnClick) {
                let e = e9(r.clientX, r.clientY);
                e >= 0 && te(e);
              }
            }
            e.style.cursor = "", e8();
          },
          to = e => ti(e, !1),
          tl = e => ti(e, !0),
          ts = t => {
            eO && eO.id === t.pointerId || (eq.inside = !1, eA = -1, e.style.cursor = "", e8());
          },
          tc = e => {
            let t = a.current;
            if (!t.wheel || !t.interactive) return;
            e.preventDefault();
            let r = 1 === e.deltaMode ? 16 : 2 === e.deltaMode ? es : 1,
              n = p((e.deltaY + e.deltaX) * r, -240, 240);
            eT = ek, "overview" === t.tour ? ez += .0025 * n : (eS && 1 === eS.target && tt(), eC = !1, "overview" === em && (em = "ride"), eg = 0, eL += .01 * n), e8();
          },
          tu = t => {
            a.current.interactive && ("Escape" === t.key ? (tt(), eC = !1) : "ArrowUp" === t.key || "ArrowRight" === t.key ? (t.preventDefault(), eS || (ed += 2.5)) : "ArrowDown" === t.key || "ArrowLeft" === t.key ? (t.preventDefault(), eS || (ed -= 2.5)) : "Enter" === t.key && t.target === e && (t.preventDefault(), eS ? tt() : eC = !eC), e8());
          };
        t.addEventListener("pointerdown", tn), t.addEventListener("pointermove", tr), t.addEventListener("pointerup", to), t.addEventListener("pointercancel", tl), t.addEventListener("pointerleave", ts), t.addEventListener("wheel", tc, {
          passive: !1
        }), e.addEventListener("keydown", tu);
        let td = new ResizeObserver(() => {
          e5() && e8();
        });
        td.observe(e);
        let th = "undefined" == typeof IntersectionObserver ? null : new IntersectionObserver(([e]) => {
          (eF = e.isIntersecting) ? (eI = 0, e8()) : ej && (cancelAnimationFrame(ej), ej = 0);
        }, {
          rootMargin: "80px"
        });
        th ? th.observe(e) : eF = !0;
        let tp = e => {
            e.preventDefault(), eP = !0, ej && cancelAnimationFrame(ej), ej = 0;
          },
          tv = () => {
            eP = !1, K = "", e2(), e8();
          };
        return l.addEventListener("webglcontextlost", tp), l.addEventListener("webglcontextrestored", tv), e5(), e0(), e1(), e2(), eu = .25 * et, Y.visible = !0, i.compile(H, N), Y.visible = !1, "cycle" !== a.current.tour || a.current.reduced || (em = "overview", eg = 2.2, ev = 1), e8(), {
          sync: () => {
            e5(), e0(), e1(), e2(), eI = 0, e8();
          },
          travel: e => {
            eS || (ed += 1.8 * e), e8();
          },
          focus: e => te(e),
          release: tt,
          reveal: e => {
            eC = e, e8();
          },
          destroy: () => {
            eE = !0, ej && cancelAnimationFrame(ej), window.clearTimeout(eR), th?.disconnect(), td.disconnect(), t.removeEventListener("pointerdown", tn), t.removeEventListener("pointermove", tr), t.removeEventListener("pointerup", to), t.removeEventListener("pointercancel", tl), t.removeEventListener("pointerleave", ts), t.removeEventListener("wheel", tc), e.removeEventListener("keydown", tu), e.style.cursor = "", l.removeEventListener("webglcontextlost", tp), l.removeEventListener("webglcontextrestored", tv), $.forEach(e => {
              e.onload = null;
            }), _.forEach(e => e.dispose()), G?.dispose(), C.dispose(), E.dispose(), D.dispose(), U.dispose(), M.dispose(), O.dispose(), B.dispose(), i.dispose(), i.getContext().isContextLost() || i.forceContextLoss(), l.remove();
          }
        };
      })(e, t, ep, ed, e => {
        el(e);
        let t = e >= 0 ? ed.current[e] ?? null : null;
        ev.current?.(t, e);
      });
      if (!a) {
        let e = requestAnimationFrame(() => ec(!0));
        return () => cancelAnimationFrame(e);
      }
      return en.current = a, () => {
        a.destroy(), en.current = null;
      };
    }, []), (0, React.useImperativeHandle)(et, () => ({
      travel: e => en.current?.travel(e),
      focus: e => en.current?.focus(e),
      release: () => en.current?.release(),
      reveal: e => en.current?.reveal(e)
    }), []);
    let ef = V.trim().toLowerCase(),
      em = "transparent" === ef || "" === ef,
      eg = !em && (e => {
        let t = e.replace("#", "");
        if (!/^[0-9a-f]{3}(?:[0-9a-f]{3})?$/i.test(t)) return !1;
        let a = 3 === t.length ? t.replace(/./g, e => e + e) : t;
        return (.2126 * Number.parseInt(a.slice(0, 2), 16) + .7152 * Number.parseInt(a.slice(2, 4), 16) + .0722 * Number.parseInt(a.slice(4, 6), 16)) / 255 > .6;
      })(ef),
      eb = eo >= 0 ? eu[eo] : null;
    return <div ref={ea} className={(0, __mod_90650.cn)("relative h-full min-h-[420px] w-full overflow-hidden", Z)} style={{
      backgroundColor: em ? void 0 : V,
      ...J
    }} role="region" aria-roledescription="gallery" aria-label={K} tabIndex={0}><div ref={er} style={M} />{es ? <div style={{
        ...C,
        gap: 10,
        flexWrap: "wrap",
        padding: 24,
        alignContent: "center"
      }}>{eu.slice(0, 12).map(e => <img src={e.src} alt={e.alt} style={{
          width: 96,
          height: 96,
          objectFit: "cover",
          borderRadius: 12
        }} />)}</div> : null}<ul style={x}>{eu.map(e => <li>{e.title ? `${e.title}: ${e.alt}` : e.alt}</li>)}</ul>{ee ? <div style={{
        ...C,
        opacity: +!eb,
        transition: "opacity 300ms ease"
      }}><div style={{
          pointerEvents: eb ? "none" : "auto"
        }}>{ee}</div></div> : null}{U ? <div aria-live="polite" style={{
        position: "absolute",
        left: 0,
        right: 0,
        bottom: "6%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
        pointerEvents: "none",
        opacity: +!!eb,
        transform: eb ? "translateY(0)" : "translateY(6px)",
        transition: eb ? "opacity 420ms ease 520ms, transform 520ms cubic-bezier(0.22, 1, 0.36, 1) 520ms" : "opacity 160ms ease, transform 160ms ease",
        color: eg ? "rgba(10, 10, 10, 0.92)" : em ? "inherit" : "rgba(255, 255, 255, 0.94)",
        textAlign: "center"
      }}>{eb ? <><span style={{
            fontSize: 15,
            fontWeight: 600,
            lineHeight: 1.35
          }}>{eb.title ?? eb.alt}</span>{eb.subtitle ? <span style={{
            fontSize: 13,
            opacity: .6,
            lineHeight: 1.35
          }}>{eb.subtitle}</span> : null}</> : null}</div> : null}</div>;
  });
E.displayName = "DepthRibbon";
let P = {
    ribbon: {
      path: "loop",
      tour: "cycle",
      count: 72,
      speed: .6,
      offset: 1,
      fov: 60,
      fog: 1,
      thread: .3
    },
    knot: {
      path: "knot",
      tour: "cycle",
      count: 90,
      speed: .7,
      offset: 1,
      fov: 62,
      fog: 1,
      thread: .35
    },
    crown: {
      path: "wave",
      tour: "cycle",
      count: 60,
      speed: .5,
      offset: 1.1,
      fov: 58,
      fog: 1,
      thread: .3
    },
    atlas: {
      path: "loop",
      tour: "overview",
      count: 96,
      speed: .6,
      offset: 1,
      fov: 55,
      fog: .8,
      thread: .5
    },
    drift: {
      path: "loop",
      tour: "ride",
      count: 72,
      speed: .3,
      offset: .8,
      fov: 55,
      fog: 1.6,
      thread: 0
    },
    rush: {
      path: "knot",
      tour: "ride",
      count: 120,
      speed: 1.8,
      offset: 1.3,
      fov: 75,
      fog: .9,
      thread: .2
    }
  },
  R = [{
    label: "Ribbon",
    value: "ribbon"
  }, {
    label: "Knot",
    value: "knot"
  }, {
    label: "Crown",
    value: "crown"
  }, {
    label: "Atlas",
    value: "atlas"
  }, {
    label: "Drift",
    value: "drift"
  }, {
    label: "Rush",
    value: "rush"
  }],
  L = [{
    label: "Loop",
    value: "loop"
  }, {
    label: "Knot",
    value: "knot"
  }, {
    label: "Wave",
    value: "wave"
  }],
  z = [{
    label: "Cycle",
    value: "cycle"
  }, {
    label: "Ride",
    value: "ride"
  }, {
    label: "Overview",
    value: "overview"
  }],
  T = [{
    name: "items",
    type: "{ src: string; alt: string; title?: string; subtitle?: string }[]",
    default: "Curated material studies",
    description: "Images for the cards, repeated along the path in shuffled passes. Images must allow cross-origin loading. Title and subtitle caption a card when it is brought close."
  }, {
    name: "count",
    type: "number",
    default: "72",
    description: "Number of cards along the path, up to 240. More cards make a longer path."
  }, {
    name: "path",
    type: '"loop" | "knot" | "wave"',
    default: '"loop"',
    description: "Shape of the path: a figure-eight that passes over itself, a trefoil knot, or an undulating ring."
  }, {
    name: "tour",
    type: '"cycle" | "ride" | "overview"',
    default: '"cycle"',
    description: "Camera behaviour: open on the whole path, dive in and pull back to reveal it every interval seconds; only ride; or show the whole path slowly turning."
  }, {
    name: "interval",
    type: "number",
    default: "9",
    description: "Seconds of riding between pull-backs in the cycle tour."
  }, {
    name: "speed",
    type: "number",
    default: "0.6",
    description: "Riding speed in cards per second. Negative values ride backwards."
  }, {
    name: "cardSize",
    type: "number",
    default: "0.72",
    description: "Card height as a fraction of the spacing between cards."
  }, {
    name: "aspect",
    type: "number",
    default: "1",
    description: "Card width divided by height."
  }, {
    name: "radius",
    type: "number",
    default: "0.12",
    description: "Corner rounding, from 0 (square) to 1 (fully round)."
  }, {
    name: "offset",
    type: "number",
    default: "1",
    description: "How far beside and above the path the camera rides. Larger values give a wider view."
  }, {
    name: "fov",
    type: "number",
    default: "60",
    description: "Vertical field of view in degrees."
  }, {
    name: "fog",
    type: "number",
    default: "1",
    description: "How quickly cards fade into the background with distance."
  }, {
    name: "thread",
    type: "number",
    default: "0.3",
    description: "Opacity of the fine line that runs through the cards along the path. 0 hides it."
  }, {
    name: "shadow",
    type: "number",
    default: "0.5",
    description: "Opacity of the soft shadow beneath each card, most visible on light backgrounds."
  }, {
    name: "accentColor",
    type: "string",
    default: '"#B19EEF"',
    description: "Colour of the fine thread that runs through the cards."
  }, {
    name: "backgroundColor",
    type: "string",
    default: '"transparent"',
    description: "Background of the component. Cards fade into it with distance."
  }, {
    name: "focusOnClick",
    type: "boolean",
    default: "true",
    description: "Clicking a card flies the camera to it and shows its caption. Click again or press Escape to ride on from there."
  }, {
    name: "holdToReveal",
    type: "boolean",
    default: "true",
    description: "Press and hold to pull back and see the whole path. Drag while holding to turn it; release to dive back in."
  }, {
    name: "captions",
    type: "boolean",
    default: "true",
    description: "Show the title and subtitle of the card brought close."
  }, {
    name: "interactive",
    type: "boolean",
    default: "true",
    description: "Enable hover, clicking, holding and dragging."
  }, {
    name: "draggable",
    type: "boolean",
    default: "true",
    description: "Drag to travel along the path with inertia: vertically with a mouse, sideways on touch."
  }, {
    name: "wheel",
    type: "boolean",
    default: "true",
    description: "Scroll to travel along the path; scrolling during a close-up or a pull-back dives back in. Set false to leave page scrolling untouched."
  }, {
    name: "pauseOnHover",
    type: "boolean",
    default: "true",
    description: "Stop riding while the pointer rests on a card, which lifts slightly so it can be clicked."
  }, {
    name: "seed",
    type: "number",
    default: "0",
    description: "Changes the order in which images appear along the path."
  }, {
    name: "paused",
    type: "boolean",
    default: "false",
    description: "Stops riding and the tour. Reduced-motion users always get this."
  }, {
    name: "dpr",
    type: "number",
    default: "2",
    description: "Maximum device pixel ratio for the canvas."
  }, {
    name: "ariaLabel",
    type: "string",
    default: '"Depth ribbon gallery…"',
    description: "Accessible description of the gallery and how to use it."
  }, {
    name: "onFocusChange",
    type: "(item, index) => void",
    default: "—",
    description: "Called when a card is brought close, with null and -1 when the ride resumes."
  }, {
    name: "ref",
    type: "{ travel, focus, release, reveal }",
    default: "—",
    description: "Imperative controls: push the camera along by a number of cards, bring a card close, resume, or show the whole path."
  }, {
    name: "children",
    type: "ReactNode",
    default: "—",
    description: "Content centred over the gallery, such as a headline. It fades out while a card is close."
  }, {
    name: "className",
    type: "string",
    default: "—",
    description: "Classes for the root element. It fills its parent, with a 420px minimum height."
  }, {
    name: "style",
    type: "CSSProperties",
    default: "—",
    description: "Inline styles for the root element."
  }],
  q = () => {
    let [e, t] = (0, __mod_90761.I)(),
      a = (0, __mod_86049.Y)(),
      [s, c] = (0, React.useState)("ribbon"),
      [u, d] = (0, React.useState)(P.ribbon),
      h = e => t => d(a => ({
        ...a,
        [e]: t
      })),
      [p, v] = (0, React.useState)(null),
      f = p ?? ("dark" === a ? "#0A0A0A" : "#FFFFFF"),
      [m, g] = (0, React.useState)("#B19EEF"),
      [b, w] = (0, React.useState)(9),
      [y, x] = (0, React.useState)(.72),
      [M, C] = (0, React.useState)(1),
      [A, S] = (0, React.useState)(.12),
      [k, j] = (0, React.useState)(.5),
      [I, F] = (0, React.useState)(0),
      [q, O] = (0, React.useState)(!0),
      [D, V] = (0, React.useState)(!0),
      [W, B] = (0, React.useState)(!0),
      [U, Y] = (0, React.useState)(!0),
      [H, N] = (0, React.useState)(!0),
      [X, G] = (0, React.useState)(!0),
      [$, _] = (0, React.useState)(!0),
      [K, Q] = (0, React.useState)(!1);
    return <div><__mod_56388.Bg /><__mod_56388.VX><__mod_56388.Ec><__mod_56388.Ch onRefresh={t} minHeight={600} enableResponsive={!0}><div className="relative h-full w-full"><E count={u.count} path={u.path} tour={u.tour} interval={b} speed={u.speed} cardSize={y} aspect={M} radius={A} offset={u.offset} fov={u.fov} fog={u.fog} thread={u.thread} shadow={k} accentColor={m} backgroundColor={f} focusOnClick={q} holdToReveal={D} captions={W} interactive={U} draggable={H} wheel={X} pauseOnHover={$} seed={I} paused={K} /></div></__mod_56388.Ch><__mod_56388.IH><__mod_56388.bg title="Preset" value={s} options={R} onChange={e => {
              c(e), d(P[e] ?? P.ribbon), t();
            }} /><__mod_56388.bg title="Path" value={u.path} options={L} onChange={e => h("path")(e)} /><__mod_56388.bg title="Tour" value={u.tour} options={z} onChange={e => h("tour")(e)} /><__mod_56388.W7 title="Accent" value={m} onChange={g} /><__mod_56388.W7 title="Background" value={f} onChange={v} /><__mod_56388.yt title="Count" min={24} max={180} step={6} value={u.count} onChange={h("count")} /><__mod_56388.yt title="Speed" min={-2} max={3} step={.05} value={u.speed} onChange={h("speed")} /><__mod_56388.yt title="Interval" min={3} max={20} step={.5} value={b} valueUnit="s" onChange={w} /><__mod_56388.yt title="Card Size" min={.3} max={1.2} step={.01} value={y} onChange={x} /><__mod_56388.yt title="Aspect" min={.5} max={1.8} step={.01} value={M} onChange={C} /><__mod_56388.yt title="Radius" min={0} max={1} step={.01} value={A} onChange={S} /><__mod_56388.yt title="Offset" min={.4} max={2.5} step={.05} value={u.offset} onChange={h("offset")} /><__mod_56388.yt title="Field Of View" min={35} max={95} step={1} value={u.fov} valueUnit="\xb0" onChange={h("fov")} /><__mod_56388.yt title="Fog" min={.3} max={3} step={.05} value={u.fog} onChange={h("fog")} /><__mod_56388.yt title="Thread" min={0} max={1} step={.01} value={u.thread} onChange={h("thread")} /><__mod_56388.yt title="Shadow" min={0} max={1} step={.01} value={k} onChange={j} /><__mod_56388.yt title="Seed" min={0} max={20} step={1} value={I} onChange={F} /><__mod_56388.tl title="Focus On Click" checked={q} onChange={O} /><__mod_56388.tl title="Hold To Reveal" checked={D} onChange={V} /><__mod_56388.tl title="Captions" checked={W} onChange={B} /><__mod_56388.tl title="Interactive" checked={U} onChange={Y} /><__mod_56388.tl title="Draggable" checked={H} onChange={N} /><__mod_56388.tl title="Wheel" checked={X} onChange={G} /><__mod_56388.tl title="Pause On Hover" checked={$} onChange={_} /><__mod_56388.tl title="Paused" checked={K} onChange={Q} /></__mod_56388.IH><__mod_56388.Ub data={T} /></__mod_56388.Ec><__mod_56388.lT><__mod_56388.Gv /></__mod_56388.lT></__mod_56388.VX></div>;
  };

export default E;

import { motion, AnimatePresence } from "motion/react";
import * as React from "react";
import * as __mod_2253 from "../_helpers/2253";
import * as __mod_50969 from "../_helpers/50969";
import * as __mod_12246 from "../_helpers/12246";
/**
 * Hero 34
 * Surf forecast hero where each break reshapes a glittering particle ocean
 * slug: hero-34
 * category: Hero Section
 * export: Hero34
 * deps: lucide-react, motion, three
 * original: ts-tailwind/blocks/hero/hero-34.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import { ArrowRight } from "lucide-react";

let d = [{
    name: "Uluwatu",
    place: "Bali",
    swell: "1.8 m",
    status: "clean",
    detail: "1.8 m at 14 s with a light offshore wind. Best around 6:50 tomorrow.",
    sea: {
      height: .95,
      chop: .55,
      speed: .95,
      foam: .8
    }
  }, {
    name: "Hossegor",
    place: "France",
    swell: "1.1 m",
    status: "choppy",
    detail: "1.1 m at 10 s with a cross-shore wind. Cleaner after lunch.",
    sea: {
      height: .62,
      chop: 1.2,
      speed: 1.15,
      foam: 1.25
    }
  }, {
    name: "Pipeline",
    place: "Hawaii",
    swell: "2.7 m",
    status: "firing",
    detail: "2.7 m at 15 s with a steady offshore wind. Best around 7:40 tomorrow.",
    sea: {
      height: 1.3,
      chop: .8,
      speed: .88,
      foam: 1.1
    }
  }, {
    name: "Nazar\xe9",
    place: "Portugal",
    swell: "6.4 m",
    status: "huge",
    detail: "6.4 m at 18 s and almost no wind. Experienced surfers only.",
    sea: {
      height: 2,
      chop: 1.05,
      speed: .72,
      foam: 2.2
    }
  }],
  f = `
#define WAVES 14
#define MAX_RIPPLES 4

uniform float uTime;
uniform float uNear;
uniform float uFar;
uniform float uSpread;
uniform float uSpreadBase;
uniform vec4 uWave[WAVES];
uniform vec4 uWaveMotion[WAVES];
uniform float uHeight;
uniform vec4 uCursor;
uniform float uCursorRadius;
uniform vec4 uRipple[MAX_RIPPLES];

float gridDepth(float v) {
  float inverse = 1.0 / uFar + (1.0 / uNear - 1.0 / uFar) * pow(clamp(1.0 - v, 0.0, 1.0), 1.8);
  return 1.0 / inverse;
}

vec3 surfacePoint(vec2 ground, out vec3 normal, out float fold, out float swell) {
  vec3 offset = vec3(0.0);
  normal = vec3(0.0, 1.0, 0.0);
  fold = 1.0;
  float calm = mix(0.3, 1.0, smoothstep(uNear * 0.9, uNear * 4.0, -ground.y));
  for (int i = 0; i < WAVES; i++) {
    vec4 wave = uWave[i];
    vec4 motion = uWaveMotion[i];
    float phase = wave.z * dot(wave.xy, ground) - motion.x * uTime + motion.y;
    float s = sin(phase);
    float c = cos(phase);
    float amplitude = wave.w * uHeight * calm;
    float steep = motion.z;
    offset.x += steep * amplitude * wave.x * c;
    offset.z += steep * amplitude * wave.y * c;
    offset.y += amplitude * s;
    float ka = wave.z * amplitude;
    normal.x -= wave.x * ka * c;
    normal.z -= wave.y * ka * c;
    normal.y -= steep * ka * s;
    fold -= steep * ka * s;
  }

  vec2 toCursor = ground - uCursor.xy;
  float radius2 = max(uCursorRadius * uCursorRadius, 1e-4);
  swell = uCursor.z * exp(-dot(toCursor, toCursor) / radius2);
  offset.y += swell;
  normal.x += swell * 2.0 * toCursor.x / radius2;
  normal.z += swell * 2.0 * toCursor.y / radius2;

  for (int k = 0; k < MAX_RIPPLES; k++) {
    vec4 ripple = uRipple[k];
    if (ripple.w <= 0.001) continue;
    vec2 away = ground - ripple.xy;
    float r = max(length(away), 1e-4);
    float band = r - ripple.z;
    float envelope = exp(-band * band * 3.0) * ripple.w * 0.26;
    offset.y += sin(band * 9.0) * envelope;
    float slope = (9.0 * cos(band * 9.0) - 6.0 * band * sin(band * 9.0)) * envelope;
    normal.x -= slope * away.x / r;
    normal.z -= slope * away.y / r;
  }

  return vec3(ground.x + offset.x, offset.y, ground.y + offset.z);
}
`,
  c = `
${f}

attribute vec2 aGrid;

void main() {
  float depth = gridDepth(aGrid.y);
  float halfWidth = uSpreadBase + depth * uSpread;
  vec2 ground = vec2(aGrid.x * halfWidth * 1.03, -depth);
  vec3 normal;
  float fold;
  float swell;
  vec3 world = surfacePoint(ground, normal, fold, swell);
  world.y -= 0.035 + depth * 0.004;
  gl_Position = projectionMatrix * viewMatrix * vec4(world, 1.0);
}
`,
  h = `
void main() {
  gl_FragColor = vec4(0.0);
}
`,
  m = `
${f}

attribute vec2 aGrid;
attribute vec2 aJitter;

uniform float uRows;
uniform float uColumns;
uniform vec3 uSun;
uniform float uFogDistance;
uniform float uFoam;
uniform float uSize;
uniform float uFocal;
uniform float uPixelRatio;
uniform float uGlow;

varying float vBright;
varying float vTone;

void main() {
  float depth = gridDepth(aGrid.y + aJitter.y / uRows);
  float halfWidth = uSpreadBase + depth * uSpread;
  vec2 ground = vec2((aGrid.x + aJitter.x / uColumns) * halfWidth, -depth);
  float side = 1.0 - smoothstep(0.9, 1.0, abs(aGrid.x));
  vec3 normal;
  float fold;
  float swell;
  vec3 world = surfacePoint(ground, normal, fold, swell);
  vec3 offset = vec3(world.x - ground.x, world.y, world.z - ground.y);
  vec4 view = viewMatrix * vec4(world, 1.0);
  gl_Position = projectionMatrix * view;

  vec3 n = normalize(normal);
  vec3 toEye = normalize(cameraPosition - world);
  float lit = max(dot(n, uSun), 0.0);
  float fresnel = 0.02 + 0.98 * pow(1.0 - max(dot(n, toEye), 0.0), 5.0);
  vec2 seed = aGrid * vec2(913.7, 377.1) + aJitter * 17.3;
  float h1 = fract(sin(dot(seed, vec2(12.9898, 78.233))) * 43758.5453);
  float h2 = fract(sin(dot(seed, vec2(39.3468, 11.1351))) * 24634.6345);
  float turn = uTime * (0.8 + 2.4 * h1) + h2 * 6.2831853;
  vec3 facet = normalize(n + vec3(cos(turn), 0.0, sin(turn)) * (0.06 + 0.16 * h2));
  float soft = pow(max(dot(reflect(-uSun, n), toEye), 0.0), 40.0);
  float spark = pow(max(dot(reflect(-uSun, facet), toEye), 0.0), 260.0);
  float glint = (soft * 0.5 + spark * 3.0) * (0.4 + 3.6 * fresnel);
  float crest = smoothstep(0.25, 1.0, offset.y / max(uHeight * 0.5, 0.01));
  float froth = smoothstep(0.7, 0.2, fold) * uFoam;
  float near = smoothstep(uNear * 0.95, uNear * 1.2, depth) * side;
  float distant = smoothstep(uNear * 1.1, uNear * 5.0, depth);
  float far = exp(-depth / max(uFogDistance, 0.5)) * (1.0 - smoothstep(uFar * 0.4, uFar * 0.95, depth));

  float edgeOn = clamp(abs(dot(n, toEye)) / 0.35, 0.06, 1.0);
  float pileUp = mix(edgeOn, 1.0, smoothstep(uNear * 3.0, uNear * 14.0, depth));
  float brightness = (0.035 + 0.03 * lit + 0.55 * fresnel * distant + glint * 7.0 + (3.0 * crest * crest * crest + froth * 2.6) * mix(0.35, 1.0, distant)) * pileUp * near * far;
  vTone = clamp(glint * 0.9 + crest * 0.6 + froth, 0.0, 1.0);

  float pixels = uSize * uFocal / max(-view.z, 0.05) * (1.0 + crest * 0.35 + min(spark, 1.0) * 0.8) * uPixelRatio;
  float coverage = min(pixels, 1.0);
  vBright = brightness * coverage;
  gl_PointSize = clamp(pixels, 1.0, 6.0 * uPixelRatio) * (1.0 + uGlow * 1.6);
}
`,
  p = `
precision highp float;

uniform vec3 uTrough;
uniform vec3 uCrest;
uniform float uGlow;
uniform float uInk;
uniform float uIntensity;

varying float vBright;
varying float vTone;

void main() {
  vec2 c = gl_PointCoord - 0.5;
  float r = length(c) * 2.0;
  float edge = 1.0 / (1.0 + uGlow * 1.6);
  float core = 1.0 - smoothstep(edge * 0.45, edge, r);
  float halo = exp(-r * r * 7.0) * uGlow * 0.28;
  float amount = (core + halo) * vBright * uIntensity;
  if (amount < 0.002) discard;
  vec3 color = mix(uTrough, uCrest, vTone);
  if (uInk > 0.5) {
    float alpha = clamp(amount * 2.2, 0.0, 1.0);
    gl_FragColor = vec4(color * alpha, alpha);
  } else {
    float alpha = clamp(amount, 0.0, 1.0);
    gl_FragColor = vec4(color * amount, alpha);
  }
}
`,
  v = e => {
    let t = (0x9e3779b9 ^ Math.floor(9973 * e)) >>> 0;
    return () => {
      let e = t = t + 0x6d2b79f5 >>> 0;
      return e = Math.imul(e ^ e >>> 15, 1 | e), (((e ^= e + Math.imul(e ^ e >>> 7, 61 | e)) ^ e >>> 14) >>> 0) / 0x100000000;
    };
  },
  w = e => e * Math.PI / 180,
  g = (e, t) => {
    let a = new __mod_2253.Q1f(t),
      r = {
        r: 0,
        g: 0,
        b: 0
      };
    a.getRGB(r, __mod_2253.er$), e.set(r.r, r.g, r.b);
  },
  x = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: .08,
        delayChildren: .1
      }
    }
  },
  b = {
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
function Hero34() {
  let e = (0, __mod_50969.I)(),
    t = (0, React.useRef)(null),
    a = (0, React.useRef)(null),
    f = (0, React.useRef)(null),
    y = (0, React.useRef)(null),
    M = (0, React.useRef)([]),
    k = (0, React.useRef)(0),
    [S, C] = (0, React.useState)(2);
  (0, React.useEffect)(() => {
    let e = t.current,
      r = a.current,
      o = f.current;
    if (!e || !r || !o) return;
    let l = function (e, t, a, r) {
      let o,
        l = e.ownerDocument,
        n = l.defaultView ?? window,
        i = l.createElement("canvas");
      i.setAttribute("aria-hidden", "true"), i.style.cssText = "position:absolute;inset:0;width:100%;height:100%;display:block";
      try {
        o = new __mod_12246.WebGLRenderer({
          canvas: i,
          alpha: !0,
          premultipliedAlpha: !0,
          antialias: !1,
          powerPreference: "high-performance"
        });
      } catch {
        return null;
      }
      t.appendChild(i), o.setClearColor(0, 0);
      let d = n.matchMedia("(prefers-reduced-motion: reduce)"),
        f = d.matches,
        x = new __mod_2253.ubm(50, 1, .05, 200);
      x.rotation.order = "YXZ";
      let b = {
        uTime: {
          value: 30
        },
        uNear: {
          value: 1.5
        },
        uFar: {
          value: 36
        },
        uSpread: {
          value: .85
        },
        uSpreadBase: {
          value: .85
        },
        uRows: {
          value: 340
        },
        uColumns: {
          value: 900
        },
        uWave: {
          value: Array.from({
            length: 14
          }, () => new __mod_2253.IUQ())
        },
        uWaveMotion: {
          value: Array.from({
            length: 14
          }, () => new __mod_2253.IUQ())
        },
        uHeight: {
          value: r.height
        },
        uSun: {
          value: new __mod_2253.Pq0(.36, .42, -1).normalize()
        },
        uFogDistance: {
          value: 40
        },
        uFoam: {
          value: r.foam
        },
        uSize: {
          value: .0028
        },
        uFocal: {
          value: 900
        },
        uPixelRatio: {
          value: 1
        },
        uGlow: {
          value: .35
        },
        uCursor: {
          value: new __mod_2253.IUQ(0, -8, 0, 0)
        },
        uCursorRadius: {
          value: 1
        },
        uRipple: {
          value: Array.from({
            length: 4
          }, () => new __mod_2253.IUQ())
        },
        uTrough: {
          value: new __mod_2253.Pq0()
        },
        uCrest: {
          value: new __mod_2253.Pq0()
        },
        uInk: {
          value: 0
        },
        uIntensity: {
          value: 1
        }
      };
      g(b.uTrough.value, "#8796ad"), g(b.uCrest.value, "#ffa040");
      let y = v(1.7),
        M = [],
        k = 0;
      for (let e = 0; e < 14; e++) {
        let t = e / 13,
          a = 11 * Math.pow(.4 / 11, t) * (.85 + .3 * y()),
          r = (y() - .5) * w(150) * (.45 + .55 * t),
          o = 2 * Math.PI / a,
          l = .012 * Math.pow(a, 1.2) * (.7 + .6 * y());
        M.push(l), k += l, b.uWave.value[e].set(Math.sin(r), Math.cos(r), o, l), b.uWaveMotion.value[e].set(.55 * Math.sqrt(9.8 * o), y() * Math.PI * 2, 0, 0);
      }
      let S = b.uWave.value.map((e, t) => (e.w = M[t] / Math.max(k, 1e-5) * .8, .9 / Math.max(e.z * e.w * 14, 1e-4))),
        C = (() => {
          let e = new Float32Array(612e3),
            t = new Float32Array(612e3),
            a = v(.5);
          for (let r = 0; r < 340; r++) for (let o = 0; o < 900; o++) {
            let l = 900 * r + o;
            e[2 * l] = o / 899 * 2 - 1, e[2 * l + 1] = 1 - r / 339, t[2 * l] = (a() - .5) * .7, t[2 * l + 1] = (a() - .5) * .7;
          }
          let r = new __mod_2253.LoY();
          return r.setAttribute("position", new __mod_2253.THS(new Float32Array(918e3), 3)), r.setAttribute("aGrid", new __mod_2253.THS(e, 2)), r.setAttribute("aJitter", new __mod_2253.THS(t, 2)), r.boundingSphere = new __mod_2253.iyt(new __mod_2253.Pq0(), 1e6), r;
        })(),
        P = ((e, t) => {
          let a = new Float32Array(6e4);
          for (let e = 0; e < 150; e++) for (let t = 0; t < 200; t++) {
            let r = 200 * e + t;
            a[2 * r] = t / 199 * 2 - 1, a[2 * r + 1] = e / 149;
          }
          let r = [];
          for (let e = 0; e < 149; e++) for (let t = 0; t < 199; t++) {
            let a = 200 * e + t,
              o = a + 1,
              l = a + 200,
              n = l + 1;
            r.push(a, l, o, o, l, n);
          }
          let o = new __mod_2253.LoY();
          return o.setAttribute("position", new __mod_2253.THS(new Float32Array(9e4), 3)), o.setAttribute("aGrid", new __mod_2253.THS(a, 2)), o.setIndex(r), o.boundingSphere = new __mod_2253.iyt(new __mod_2253.Pq0(), 1e6), o;
        })(0, 0),
        E = new __mod_2253.BKk({
          vertexShader: c,
          fragmentShader: h,
          uniforms: b,
          colorWrite: !1,
          depthWrite: !0,
          depthTest: !0,
          side: __mod_2253.$EB
        }),
        R = new __mod_2253.BKk({
          vertexShader: m,
          fragmentShader: p,
          uniforms: b,
          transparent: !0,
          depthTest: !0,
          depthWrite: !1,
          blending: __mod_2253.bCz,
          blendEquation: __mod_2253.gO9,
          blendSrc: __mod_2253.qad,
          blendDst: __mod_2253.qad,
          blendSrcAlpha: __mod_2253.qad,
          blendDstAlpha: __mod_2253.OuU
        }),
        A = new __mod_2253.Z58(),
        z = new __mod_2253.eaF(P, E);
      z.frustumCulled = !1, z.renderOrder = 0;
      let F = new __mod_2253.ONl(C, R);
      F.frustumCulled = !1, F.renderOrder = 1, A.add(z, F);
      let N = new __mod_2253.tBo(),
        T = new __mod_2253.I9Y(),
        I = new __mod_2253.Zcv(new __mod_2253.Pq0(0, 1, 0), 0),
        W = new __mod_2253.Pq0(),
        L = Array.from({
          length: 4
        }, () => ({
          x: 0,
          z: 0,
          age: 99
        })),
        j = l.createElement("canvas").getContext("2d", {
          willReadFrequently: !0
        }),
        B = {
          ...r
        },
        _ = {
          ...r
        },
        G = 0,
        q = "",
        D = 0,
        H = 0,
        O = 1,
        U = .3,
        $ = 0,
        V = 0,
        X = 0,
        Y = 0,
        J = 0,
        Q = 0,
        K = !1,
        Z = !1,
        ee = !1,
        et = () => {
          if (!j) return !1;
          j.clearRect(0, 0, 1, 1), j.fillStyle = "#0a0a0a", j.fillStyle = n.getComputedStyle(e).backgroundColor, j.fillRect(0, 0, 1, 1);
          let [t, a, r] = j.getImageData(0, 0, 1, 1).data,
            o = `${t},${a},${r}`;
          if (o === q) return !1;
          q = o;
          let l = (.2126 * t + .7152 * a + .0722 * r) / 255 > .35;
          return b.uInk.value = +!!l, R.blendDst = l ? __mod_2253.OuU : __mod_2253.qad, R.needsUpdate = !0, !0;
        },
        ea = () => {
          let t = Math.round(e.clientWidth),
            r = Math.round(e.clientHeight);
          if (t < 2 || r < 2) return !1;
          D = t, H = r, O = Math.min(n.devicePixelRatio || 1, 1.5), o.setPixelRatio(O), o.setSize(D, H, !1);
          let l = e.getBoundingClientRect(),
            i = a.getBoundingClientRect();
          return U = Math.min(.45, Math.max(.08, (i.top + .62 * i.height - l.top) / Math.max(l.height, 1))), !0;
        },
        er = e => {
          let t = f ? 1 : 1 - Math.exp(-e / .9);
          B.height += (_.height - B.height) * t, B.chop += (_.chop - B.chop) * t, B.speed += (_.speed - B.speed) * t, B.foam += (_.foam - B.foam) * t, f || (b.uTime.value += e * B.speed);
          let a = b.uTime.value,
            r = 1 - Math.exp(-(2.2 * e));
          $ += ((f ? 0 : X) - $) * r, V += ((f ? 0 : Y) - V) * r;
          let o = D / Math.max(H, 1),
            l = Math.tan(w(50) / 2),
            n = Math.atan((1 - 2 * U) * l);
          x.fov = 50, x.aspect = o, x.position.set(.06 * $, 1.35 + .04 * Math.sin(.35 * a), 0), x.rotation.set(-n + .0125 * V, -(.022 * $), .006 * Math.sin(.27 * a)), x.updateProjectionMatrix(), x.updateMatrixWorld();
          let i = !1;
          L.forEach((t, a) => {
            t.age < 6 && (t.age += e);
            let r = t.age < 6 ? Math.exp(-(.75 * t.age)) : 0;
            r > .002 && (i = !0), b.uRipple.value[a].set(t.x, t.z, 2.2 * t.age, r);
          });
          let s = n + w(50) / 2 + .0125 + .03,
            u = o * l * 1.2;
          b.uNear.value = 1.35 / Math.tan(s) * .8, b.uSpread.value = Math.cos(n) * u + Math.tan(.03), b.uSpreadBase.value = 1.35 * Math.sin(n) * u + .07 + .35, b.uHeight.value = B.height, b.uFoam.value = B.foam, b.uWaveMotion.value.forEach((e, t) => {
            e.z = Math.min(B.chop * S[t], 4);
          }), b.uFocal.value = H / 2 / l, b.uPixelRatio.value = O;
          let d = Math.abs(_.height - B.height) + Math.abs(_.chop - B.chop) + Math.abs(_.foam - B.foam) > .002 || Math.abs($ - (f ? 0 : X)) + Math.abs(V - (f ? 0 : Y)) > .001;
          return i || d;
        },
        eo = () => {
          Z || ee || !K || J || (J = n.requestAnimationFrame(el));
        };
      function el(e) {
        if (J = 0, Z || ee) return;
        let t = Q && e - Q < 100 ? Math.min((e - Q) / 1e3, .05) : 1 / 60;
        Q = e, D || ea();
        let a = er(t);
        o.render(A, x), !f || a ? eo() : Q = 0;
      }
      let en = t => {
          if ("touch" === t.pointerType) return;
          let a = e.getBoundingClientRect();
          X = ((t.clientX - a.left) / Math.max(a.width, 1) - .5) * 2, Y = (.5 - (t.clientY - a.top) / Math.max(a.height, 1)) * 2, eo();
        },
        ei = () => {
          X = 0, Y = 0, eo();
        },
        es = t => {
          let a;
          if (f || !t.isPrimary || (a = t.target, a?.closest?.("a,button,input,select,textarea,label,[role=radio]"))) return;
          let r = e.getBoundingClientRect();
          if (T.set((t.clientX - r.left) / r.width * 2 - 1, 1 - (t.clientY - r.top) / r.height * 2), N.setFromCamera(T, x), !N.ray.intersectPlane(I, W) || W.z > -.5) return;
          let o = L[G];
          o.x = W.x, o.z = W.z, o.age = 0, G = (G + 1) % 4, eo();
        },
        eu = () => {
          et() && (!J && K && (er(0), o.render(A, x)), eo());
        },
        ed = () => {
          f = d.matches, Q = 0, eo();
        },
        ef = e => {
          e.preventDefault(), ee = !0, n.cancelAnimationFrame(J), J = 0;
        },
        ec = () => {
          ee = !1, q = "", et(), eo();
        },
        eh = new ResizeObserver(() => {
          ea() && (!J && K && (er(0), o.render(A, x)), eo());
        }),
        em = new IntersectionObserver(([e]) => {
          K = e.isIntersecting, Q = 0, eo();
        }, {
          rootMargin: "80px"
        }),
        ep = new MutationObserver(eu),
        ev = n.matchMedia("(prefers-color-scheme: dark)");
      return e.addEventListener("pointermove", en), e.addEventListener("pointerleave", ei), e.addEventListener("pointerdown", es), i.addEventListener("webglcontextlost", ef), i.addEventListener("webglcontextrestored", ec), d.addEventListener("change", ed), ev.addEventListener("change", eu), ep.observe(l.documentElement, {
        attributes: !0,
        attributeFilter: ["class", "style", "data-theme"]
      }), eh.observe(e), eh.observe(a), em.observe(e), et(), ea(), {
        setSea: e => {
          _ = {
            ...e
          }, eo();
        },
        destroy: () => {
          Z = !0, n.cancelAnimationFrame(J), e.removeEventListener("pointermove", en), e.removeEventListener("pointerleave", ei), e.removeEventListener("pointerdown", es), i.removeEventListener("webglcontextlost", ef), i.removeEventListener("webglcontextrestored", ec), d.removeEventListener("change", ed), ev.removeEventListener("change", eu), ep.disconnect(), eh.disconnect(), em.disconnect(), C.dispose(), P.dispose(), E.dispose(), R.dispose(), o.dispose(), i.remove();
        }
      };
    }(e, r, o, d[2].sea);
    return y.current = l, () => {
      window.clearTimeout(k.current), l?.destroy(), y.current = null;
    };
  }, []), (0, React.useEffect)(() => {
    y.current?.setSea(d[S].sea);
  }, [S]);
  let P = e => {
      let t = {
          ArrowDown: 1,
          ArrowRight: 1,
          ArrowUp: -1,
          ArrowLeft: -1
        },
        a = -1;
      e.key in t && (a = (S + t[e.key] + d.length) % d.length), "Home" === e.key && (a = 0), "End" === e.key && (a = d.length - 1), a < 0 || (e.preventDefault(), C(a), M.current[a]?.focus());
    },
    E = d[S];
  return <section ref={t} className="relative isolate flex min-h-screen w-full flex-col overflow-hidden bg-white px-4 pb-10 pt-20 text-neutral-950 dark:bg-neutral-950 dark:text-white sm:px-6 sm:pt-24 lg:px-8 lg:pb-12"><div ref={a} aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10" /><motion.div variants={x} initial={!e && "hidden"} whileInView="show" viewport={{
      once: !0
    }} className="mx-auto flex w-full max-w-[1400px] flex-1 flex-col justify-between gap-12 [text-shadow:0_0_24px_rgba(255,255,255,0.95)] dark:[text-shadow:0_0_24px_rgba(10,10,10,0.95)]"><div className="max-w-[52rem]"><motion.h1 ref={f} variants={b} className="grid items-end text-[clamp(2.6rem,5.8vw,5rem)] font-medium leading-[1] tracking-[-0.05em]">{d.map((e, t) => <span aria-hidden={t !== S} className={`col-start-1 row-start-1 transition-opacity duration-300 ${t === S ? "opacity-100" : "opacity-0"}`}>{e.name} is <span className="text-[#c4650a] dark:text-[#ffb04f]">{e.status}</span>.</span>)}</motion.h1><motion.p variants={b} aria-live="polite" className="mt-5 max-w-[38ch] text-pretty text-base leading-relaxed text-neutral-600 dark:text-neutral-300">{E.detail}</motion.p><motion.div variants={b} className="mt-8 flex flex-row flex-wrap items-center gap-x-6 gap-y-3"><a href="#" className="inline-flex h-12 items-center justify-center rounded-full bg-neutral-950 px-7 text-sm font-medium text-white transition-colors duration-200 hover:bg-neutral-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950 dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200 dark:focus-visible:outline-white">Get the app</a><a href="#" className="group inline-flex h-12 items-center gap-2 rounded-full text-sm font-medium text-neutral-700 transition-colors duration-200 hover:text-neutral-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current dark:text-neutral-300 dark:hover:text-white">Alert me for {E.name}<ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" /></a></motion.div></div><motion.div variants={b} role="radiogroup" aria-label="Surf breaks" className="grid w-full grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-4 lg:max-w-[52rem]">{d.map((e, t) => {
          let a = t === S;
          return <button ref={e => {
            M.current[t] = e;
          }} type="button" role="radio" aria-checked={a} tabIndex={a ? 0 : -1} onClick={() => C(t)} onKeyDown={P} onPointerEnter={e => {
            "mouse" === e.pointerType && (window.clearTimeout(k.current), k.current = window.setTimeout(() => C(t), 160));
          }} onPointerLeave={() => window.clearTimeout(k.current)} className="group flex cursor-pointer flex-col items-start rounded-md text-left outline-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"><span className={`text-2xl font-medium tabular-nums tracking-[-0.03em] transition-colors duration-300 sm:text-3xl ${a ? "text-[#c4650a] dark:text-[#ffb04f]" : "text-neutral-400 group-hover:text-neutral-700 dark:text-neutral-500 dark:group-hover:text-neutral-300"}`}>{e.swell}</span><span className={`mt-1 text-sm transition-colors duration-300 ${a ? "text-neutral-950 dark:text-white" : "text-neutral-500"}`}>{e.name}, {e.place}</span></button>;
        })}</motion.div></motion.div></section>;
}

export default Hero34;

import * as React from "react";
import * as __mod_50969 from "../_helpers/50969";
import * as __mod_12246 from "../_helpers/12246";
import * as __mod_2253 from "../_helpers/2253";
/**
 * Stats 16
 * Spiral galaxy with one star per team and an arm for each region
 * slug: stats-16
 * category: Stats
 * export: Stats16
 * deps: motion, three
 * original: ts-tailwind/blocks/stats/stats-16.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import { motion, AnimatePresence } from "motion/react";

let s = [{
    name: "Americas",
    teams: 19880
  }, {
    name: "Europe and Africa",
    teams: 16402
  }, {
    name: "Asia Pacific",
    teams: 11932
  }],
  c = s.reduce((e, t) => e + t.teams, 0),
  m = c + 400,
  f = 2 * Math.PI,
  v = e => (f * e - Math.atan(10.5)) / 3 - 3.5 * Math.log(.97),
  h = 1.5 * Math.PI - v(1),
  d = (e, t, a) => Math.min(a, Math.max(t, e)),
  x = e => e <= .04045 ? e / 12.92 : Math.pow((e + .055) / 1.055, 2.4),
  p = e => {
    let t = Number.parseInt(e.slice(1), 16);
    return [(t >> 16 & 255) / 255, (t >> 8 & 255) / 255, (255 & t) / 255];
  },
  g = ([e, t, a]) => {
    let l = x(e),
      u = x(t),
      o = x(a),
      r = Math.cbrt(.4122214708 * l + .5363325363 * u + .0514459929 * o),
      n = Math.cbrt(.2119034982 * l + .6806995451 * u + .1073969566 * o),
      i = Math.cbrt(.0883024619 * l + .2817188376 * u + .6299787005 * o);
    return [.2104542553 * r + .793617785 * n - .0040720468 * i, 1.9779984951 * r - 2.428592205 * n + .4505937099 * i, .0259040371 * r + .7827717662 * n - .808675766 * i];
  },
  b = `
uniform float uTime;
uniform float uSpin;
uniform float uCoreRadius;
uniform float uArms;
uniform float uTwist;
uniform float uEps;
uniform float uPattern;

float omega(float a) {
  return uSpin / sqrt(a * a + uCoreRadius * uCoreRadius);
}

vec3 orbit(float a, float psi, float bulge, out float phase) {
  float th = psi + omega(a) * uTime;
  phase = uArms * (th + uTwist * log(max(a, 1e-3)) - uPattern * uTime);
  float r = a * (1.0 - uEps * cos(phase) * (1.0 - bulge));
  return vec3(r * cos(th), r * sin(th), th);
}
`,
  w = `
in vec4 aOrbit;
in vec4 aTraits;
uniform vec2 uResolution;
uniform vec2 uCenter;
uniform float uFocal;
uniform float uDistance;
uniform float uIncline;
uniform float uRoll;
uniform float uTurn;
uniform vec2 uQuiet;
uniform float uPixelRatio;
uniform float uRealTime;
uniform float uDust;
uniform float uCore;
uniform float uVoid;
uniform float uSize;
uniform float uSizeScale;
uniform float uSparkle;
uniform float uTwinkle;
uniform float uBack;
uniform float uEnergy;
uniform float uInk;
uniform vec3 uLabA;
uniform vec3 uLabB;
uniform vec3 uAccent;
uniform vec3 uFocus;
uniform float uFocusOn;
uniform int uFlash;
uniform float uFlashAge;
${b}
out vec3 vColor;
out float vGain;

vec3 labToLinear(vec3 lab) {
  float l = lab.x + 0.3963377774 * lab.y + 0.2158037573 * lab.z;
  float m = lab.x - 0.1055613458 * lab.y - 0.0638541728 * lab.z;
  float s = lab.x - 0.0894841775 * lab.y - 1.2914855480 * lab.z;
  l = l * l * l;
  m = m * m * m;
  s = s * s * s;
  return max(vec3(
    4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s,
    -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s,
    -0.0041960863 * l - 0.7034186147 * m + 1.7076147010 * s
  ), 0.0);
}

void main() {
  float a = aOrbit.x;
  float bulge = aTraits.x;
  float phase;
  vec3 at = orbit(a, aOrbit.y, bulge, phase);
  vec2 radial = vec2(cos(at.z), sin(at.z));
  vec2 tangent = vec2(-radial.y, radial.x);
  vec3 p = vec3(at.xy, aOrbit.z);
  float ct = cos(uTurn);
  float st = sin(uTurn);
  p.xy = vec2(ct * p.x - st * p.y, st * p.x + ct * p.y);
  float ci = cos(uIncline);
  float si = sin(uIncline);
  vec3 q = vec3(p.x, p.y * ci + p.z * si, -p.y * si + p.z * ci);
  float cr = cos(uRoll);
  float sr = sin(uRoll);
  q.xy = vec2(cr * q.x - sr * q.y, sr * q.x + cr * q.y);
  float depth = uDistance - q.z;
  vec2 screen = uCenter + uFocal * q.xy / depth;

  float mk = uArms * uTwist;
  float crest = (cos(phase) - mk * sin(phase)) / sqrt(1.0 + mk * mk);
  float arm = pow(max(crest, 0.0), 2.0) * (1.0 - bulge);
  float laneCrest = (cos(phase - 0.55) - mk * sin(phase - 0.55)) / sqrt(1.0 + mk * mk);
  float lane = pow(max(laneCrest, 0.0), 8.0) * (1.0 - arm) * (1.0 - bulge) * smoothstep(0.1, 0.3, a);

  float reach = smoothstep(0.02, 0.55, a);
  vec3 tone = labToLinear(mix(uLabB, uLabA, reach));
  vec3 core = labToLinear(vec3(min(uLabB.x * 1.08 + 0.06, 0.98), uLabB.yz * 0.45));
  vec3 color = mix(tone, core, bulge * 0.75);
  vec3 youngColor = labToLinear(vec3(min(uLabB.x * 0.92, 0.9), uLabB.yz * 1.25));
  float young = smoothstep(0.84, 0.97, aTraits.z) * arm;
  color = mix(color, youngColor, young * 0.75);
  float bright = step(1.0 - uSparkle, aTraits.y) * (1.0 - bulge * 0.6);
  color = mix(color, vec3(1.0, 0.97, 1.0), bright * 0.35);

  float twinkle = 1.0 - uTwinkle * 0.55 * (0.5 + 0.5 * sin(uRealTime * (0.6 + 1.6 * aTraits.w) + aTraits.w * 61.0));
  float body = mix(0.5 + 1.2 * arm + young * 1.4, uCore * 1.1, bulge) * (1.0 + bright * 2.2);
  body *= 1.0 - uDust * 0.8 * lane;
  float edge = 1.0 - smoothstep(0.82, 1.08, a);
  float hollow = smoothstep(uVoid * 0.85, uVoid * 1.15 + 0.01, a);
  float near = clamp(0.5 + 0.5 * q.z / 0.9, 0.0, 1.0);
  float gain = body * edge * hollow * twinkle * mix(uBack, 1.0, near) * (1.0 + uEnergy * 0.15);
  float crestPhase = phase + atan(mk);
  float index = mod(floor(crestPhase / 6.2831853 + 0.5), uArms);
  float mine = index < 0.5 ? uFocus.x : (index < 1.5 ? uFocus.y : uFocus.z);
  float outer = smoothstep(0.08, 0.32, a) * (1.0 - bulge);
  float lit = arm * mine * outer;
  gain *= mix(1.0, mix(0.42, 1.0, mine), uFocusOn * outer);
  gain *= 1.0 + lit * 1.6;
  float flash = gl_VertexID == uFlash ? exp(-uFlashAge * 1.6) : 0.0;
  gain *= 1.0 + flash * 14.0;
  float hush = mix(0.06, 1.0, smoothstep(0.62, 1.3, length((screen - uCenter) / max(uQuiet, vec2(1.0)))));
  gain *= max(hush, flash);

  color = mix(color, uAccent, clamp(lit * 1.5 + flash, 0.0, 0.9));
  vColor = mix(color, labToLinear(vec3(uLabA.x * 0.62, uLabA.yz * 1.15)), uInk * 0.35 * (1.0 - clamp(lit * 1.5 + flash, 0.0, 1.0)));
  vGain = gain;
  float size = uSize * uSizeScale * uPixelRatio * mix(0.6, 1.1, fract(aTraits.y * 7.31)) * (1.0 + bright * 0.7 + young * 0.4 + flash * 2.5);
  gl_PointSize = max(size * uDistance / depth, 1.0);
  gl_Position = vec4(screen / uResolution * 2.0 - 1.0, 0.0, 1.0);
}
`,
  y = `
precision highp float;
uniform float uStarGain;
in vec3 vColor;
in float vGain;
out vec4 fragColor;

void main() {
  vec2 q = gl_PointCoord * 2.0 - 1.0;
  float r2 = dot(q, q);
  float e = (exp(-r2 * 6.0) + 0.25 * exp(-r2 * 2.0)) * vGain * uStarGain;
  fragColor = vec4(vColor * e, e);
}
`,
  M = `
out vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`,
  T = `
precision highp float;
uniform sampler2D uSource;
uniform vec2 uTexel;
in vec2 vUv;
out vec4 fragColor;

void main() {
  vec4 a = texture(uSource, vUv + uTexel * vec2(-1.0, -1.0));
  vec4 b = texture(uSource, vUv + uTexel * vec2(1.0, -1.0));
  vec4 c = texture(uSource, vUv + uTexel * vec2(-1.0, 1.0));
  vec4 d = texture(uSource, vUv + uTexel * vec2(1.0, 1.0));
  fragColor = (a + b + c + d) * 0.125 + texture(uSource, vUv) * 0.5;
}
`,
  S = `
precision highp float;
uniform sampler2D uSource;
uniform sampler2D uBase;
uniform vec2 uTexel;
in vec2 vUv;
out vec4 fragColor;

void main() {
  vec4 sum = texture(uSource, vUv) * 4.0;
  sum += texture(uSource, vUv + uTexel * vec2(-1.0, 0.0)) * 2.0;
  sum += texture(uSource, vUv + uTexel * vec2(1.0, 0.0)) * 2.0;
  sum += texture(uSource, vUv + uTexel * vec2(0.0, -1.0)) * 2.0;
  sum += texture(uSource, vUv + uTexel * vec2(0.0, 1.0)) * 2.0;
  sum += texture(uSource, vUv + uTexel * vec2(-1.0, -1.0));
  sum += texture(uSource, vUv + uTexel * vec2(1.0, -1.0));
  sum += texture(uSource, vUv + uTexel * vec2(-1.0, 1.0));
  sum += texture(uSource, vUv + uTexel * vec2(1.0, 1.0));
  fragColor = texture(uBase, vUv) + sum / 16.0;
}
`,
  k = `
precision highp float;
uniform sampler2D uLines;
uniform sampler2D uBloom;
uniform vec3 uBackground;
uniform float uGlow;
uniform float uExposure;
uniform float uMode;
uniform float uGrain;
in vec2 vUv;
out vec4 fragColor;

float hash(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * 0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}

vec3 encode(vec3 c) {
  c = clamp(c, 0.0, 1.0);
  return mix(c * 12.92, 1.055 * pow(c, vec3(1.0 / 2.4)) - 0.055, step(vec3(0.0031308), c));
}

void main() {
  vec4 lines = texture(uLines, vUv);
  vec4 bloom = texture(uBloom, vUv);
  vec3 color;
  if (uMode < 0.5) {
    vec3 light = (lines.rgb + bloom.rgb * uGlow) * uExposure;
    vec3 exposed = 1.0 - exp(-light);
    float peak = max(exposed.r, max(exposed.g, exposed.b));
    exposed = mix(exposed, vec3(peak), smoothstep(0.75, 1.0, peak) * 0.35);
    color = uBackground + (1.0 - uBackground) * exposed;
  } else {
    float energy = lines.a + bloom.a * uGlow * 0.2;
    vec3 hue = (lines.rgb + bloom.rgb * uGlow * 0.2) / max(energy, 1e-4);
    float cover = clamp(1.0 - exp(-energy * uExposure * 1.4), 0.0, 0.94);
    color = mix(uBackground, clamp(hue * 0.8, 0.0, 1.0), cover);
  }
  float grain = hash(gl_FragCoord.xy + uGrain * 311.0) - 0.5;
  fragColor = vec4(encode(color) + grain * (1.2 / 255.0), 1.0);
}
`,
  C = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: .08,
        delayChildren: .05
      }
    }
  },
  R = {
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
        duration: .8,
        ease: [.16, 1, .3, 1]
      }
    }
  };
function E() {
  let e = (0, __mod_50969.I)(),
    t = (0, React.useRef)(null),
    a = (0, React.useRef)(null),
    b = (0, React.useRef)(null),
    E = (0, React.useRef)([]),
    P = (0, React.useRef)(null),
    [q, F] = (0, React.useState)(1),
    [B, L] = (0, React.useState)(!1),
    [z, A] = (0, React.useState)(0);
  (0, React.useEffect)(() => {
    let e = t.current,
      l = a.current,
      u = b.current;
    if (!e || !l || !u) return;
    let o = function (e, t, a, l, u) {
      let o,
        r = e.ownerDocument,
        s = r.defaultView ?? window,
        b = r.createElement("canvas");
      b.setAttribute("aria-hidden", "true"), b.style.cssText = "position:absolute;inset:0;z-index:-1;width:100%;height:100%;display:block;pointer-events:none";
      try {
        o = new __mod_12246.WebGLRenderer({
          canvas: b,
          alpha: !1,
          antialias: !1,
          powerPreference: "high-performance"
        });
      } catch {
        return null;
      }
      if (!o.capabilities.isWebGL2) return o.dispose(), null;
      e.prepend(b), o.autoClear = !1;
      let C = o.extensions.has("EXT_color_buffer_float") || o.extensions.has("EXT_color_buffer_half_float") ? __mod_2253.ix0 : __mod_2253.OUM,
        R = s.matchMedia("(prefers-reduced-motion: reduce)"),
        E = R.matches,
        P = new __mod_2253.qUd(-1, 1, 1, -1, 0, 1),
        q = new __mod_2253.bdM(2, 2),
        F = .46 / Math.sqrt(111.25),
        B = {
          uTime: {
            value: 40
          },
          uSpin: {
            value: .11
          },
          uCoreRadius: {
            value: .12
          },
          uArms: {
            value: 3
          },
          uTwist: {
            value: 3.5
          },
          uEps: {
            value: F
          },
          uPattern: {
            value: 0
          }
        },
        L = new __mod_2253.Pq0(),
        z = new __mod_2253.BKk({
          glslVersion: __mod_2253.Wdf,
          uniforms: {
            ...B,
            uResolution: {
              value: new __mod_2253.I9Y(1, 1)
            },
            uCenter: {
              value: new __mod_2253.I9Y()
            },
            uFocal: {
              value: 1
            },
            uDistance: {
              value: 3.6
            },
            uIncline: {
              value: 62 * Math.PI / 180
            },
            uRoll: {
              value: 0 * Math.PI / 180
            },
            uTurn: {
              value: h
            },
            uQuiet: {
              value: new __mod_2253.I9Y(1, 1)
            },
            uPixelRatio: {
              value: 1
            },
            uRealTime: {
              value: 0
            },
            uDust: {
              value: .5
            },
            uCore: {
              value: 1
            },
            uVoid: {
              value: 0
            },
            uSize: {
              value: 1.7
            },
            uSizeScale: {
              value: 1
            },
            uSparkle: {
              value: .1
            },
            uTwinkle: {
              value: .35
            },
            uBack: {
              value: .6
            },
            uEnergy: {
              value: 0
            },
            uInk: {
              value: 0
            },
            uLabA: {
              value: new __mod_2253.Pq0(...g(p("#7d92c4")))
            },
            uLabB: {
              value: new __mod_2253.Pq0(...g(p("#fff1dc")))
            },
            uAccent: {
              value: new __mod_2253.Pq0()
            },
            uFocus: {
              value: L
            },
            uFocusOn: {
              value: 0
            },
            uFlash: {
              value: -1
            },
            uFlashAge: {
              value: 10
            },
            uStarGain: {
              value: .3
            }
          },
          vertexShader: w,
          fragmentShader: y,
          depthTest: !1,
          depthWrite: !1,
          transparent: !0,
          blending: __mod_2253.bCz,
          blendEquation: __mod_2253.gO9,
          blendSrc: __mod_2253.qad,
          blendDst: __mod_2253.qad,
          blendSrcAlpha: __mod_2253.qad,
          blendDstAlpha: __mod_2253.qad
        }),
        A = (e, t) => new __mod_2253.BKk({
          glslVersion: __mod_2253.Wdf,
          uniforms: t,
          vertexShader: M,
          fragmentShader: e,
          depthTest: !1,
          depthWrite: !1,
          blending: __mod_2253.XIg
        }),
        I = A(T, {
          uSource: {
            value: null
          },
          uTexel: {
            value: new __mod_2253.I9Y()
          }
        }),
        U = A(S, {
          uSource: {
            value: null
          },
          uBase: {
            value: null
          },
          uTexel: {
            value: new __mod_2253.I9Y()
          }
        }),
        G = A(k, {
          uLines: {
            value: null
          },
          uBloom: {
            value: null
          },
          uBackground: {
            value: new __mod_2253.Pq0()
          },
          uGlow: {
            value: .45
          },
          uExposure: {
            value: 1
          },
          uMode: {
            value: 0
          },
          uGrain: {
            value: 0
          }
        }),
        D = (e => {
          let t = 23,
            a = () => (t = 16807 * t % 0x7fffffff) / 0x7fffffff,
            l = () => Math.sqrt(-2 * Math.log(Math.max(a(), 1e-9))) * Math.cos(f * a()),
            u = new Float32Array(8 * e);
          for (let t = 0; t < e; t++) {
            let e,
              o,
              r = .16 > a();
            if (r) e = Math.min(.07 / Math.sqrt(Math.pow(Math.min(Math.max(a(), 1e-4), .995), -2 / 3) - 1), .28), o = l() * e * .5;else {
              do e = -.32 * Math.log(Math.max(a() * a(), 1e-9)); while (e > 1.08);
              e = Math.max(e, .012), o = .02 * l() * (.5 + .5 * Math.exp(-e / .25));
            }
            u.set([e, a() * f, o, a(), +!!r, a(), a(), a()], 8 * t);
          }
          let o = new __mod_2253.LoY(),
            r = new __mod_2253.eB$(u, 8);
          return o.setAttribute("aOrbit", new __mod_2253.eHs(r, 4, 0)), o.setAttribute("aTraits", new __mod_2253.eHs(r, 4, 4)), o.setAttribute("position", new __mod_2253.eHs(r, 3, 0)), o.boundingSphere = new __mod_2253.iyt(new __mod_2253.Pq0(), 1e6), o;
        })(m),
        j = new __mod_2253.ONl(D, z);
      j.frustumCulled = !1;
      let N = new __mod_2253.Z58();
      N.add(j);
      let _ = new __mod_2253.eaF(q, G);
      _.frustumCulled = !1;
      let O = new __mod_2253.Z58();
      O.add(_);
      let $ = (e, t) => new __mod_2253.nWS(Math.max(1, e), Math.max(1, t), {
          type: C,
          format: __mod_2253.GWd,
          minFilter: __mod_2253.k6q,
          magFilter: __mod_2253.k6q,
          depthBuffer: !1,
          stencilBuffer: !1,
          generateMipmaps: !1
        }),
        V = null,
        W = [],
        Y = [],
        H = r.createElement("canvas").getContext("2d", {
          willReadFrequently: !0
        }),
        Q = "",
        X = !1,
        K = 1,
        Z = 1,
        J = 1,
        ee = [0, 0],
        et = 100,
        ea = [1, 1],
        eu = -10,
        eo = 0,
        er = 1,
        en = 40,
        ei = 0,
        es = 0,
        ec = 0,
        em = 0,
        ef = !1,
        ev = !1,
        eh = !1,
        ed = [0, 0, 0],
        ex = () => {
          V?.dispose(), W.forEach(e => e.dispose()), Y.forEach(e => e.dispose()), V = null, W = [], Y = [];
        },
        ep = (e, t) => {
          _.material = e, o.setRenderTarget(t), o.render(O, P);
        },
        eg = () => {
          if (!H) return !1;
          let a = "rgba(0, 0, 0, 0)";
          for (; e;) {
            let e = s.getComputedStyle(e).backgroundColor;
            if (!/rgba?\(\s*0,\s*0,\s*0,\s*0\s*\)|transparent/.test(e)) {
              a = e;
              break;
            }
            t = e.parentElement;
          }
          H.clearRect(0, 0, 1, 1), H.fillStyle = "#0a0a0a", H.fillStyle = a, H.fillRect(0, 0, 1, 1);
          let [l, u, o] = H.getImageData(0, 0, 1, 1).data,
            r = `${l},${u},${o}`;
          if (r === Q) return !1;
          Q = r;
          let n = p((X = (.2126 * l + .7152 * u + .0722 * o) / 255 > .5) ? "#b86f00" : "#ffb547");
          z.uniforms.uAccent.value.set(x(n[0]), x(n[1]), x(n[2])), z.uniforms.uInk.value = +!!X;
          let i = G.uniforms;
          return i.uBackground.value.set(x(l / 255), x(u / 255), x(o / 255)), i.uMode.value = +!!X, i.uExposure.value = X ? 4.5 : 1, !0;
        },
        eb = (e, t) => {
          let a = 62 * Math.PI / 180,
            l = 0 * Math.PI / 180,
            u = Math.cos(h) * e - Math.sin(h) * t,
            o = Math.sin(h) * e + Math.cos(h) * t,
            r = o * Math.cos(a),
            n = Math.cos(l) * u - Math.sin(l) * r,
            i = Math.sin(l) * u + Math.cos(l) * r,
            s = 3.6 - -o * Math.sin(a),
            c = 3.6 * et;
          return {
            x: (ee[0] + c * n / s) / J,
            y: Z - (ee[1] + c * i / s) / J
          };
        },
        ew = () => {
          let e, t, a;
          if (!V || !W.length) return;
          (e = z.uniforms).uResolution.value.set(K * J, Z * J), e.uCenter.value.set(ee[0], ee[1]), e.uQuiet.value.set(ea[0], ea[1]), e.uFocal.value = 3.6 * et, e.uPixelRatio.value = J, e.uRealTime.value = ei, e.uTwinkle.value = .35 * !E, e.uFocusOn.value = eo, e.uFlash.value = c - 1, e.uFlashAge.value = ei - eu, B.uTime.value = en, a = d(Math.pow(t = Math.pow(et / J / 380, 2), .25), .8, 1.22), e.uSizeScale.value = a, e.uStarGain.value = .3 * Math.sqrt(6e4 / c) * d(t / (a * a), .32, 1.5), j.geometry.setDrawRange(0, c), G.uniforms.uGrain.value = es, o.setRenderTarget(V), o.setClearColor(0, 0), o.clear(), o.render(N, P);
          for (let e of W) I.uniforms.uSource.value = V.texture, I.uniforms.uTexel.value.set(1 / V.width, 1 / V.height), ep(I, e), l = e;
          let u = W[W.length - 1];
          for (let e = W.length - 2; e >= 0; e--) U.uniforms.uSource.value = u.texture, U.uniforms.uBase.value = W[e].texture, U.uniforms.uTexel.value.set(1 / u.width, 1 / u.height), ep(U, Y[e]), u = Y[e];
          G.uniforms.uLines.value = V.texture, G.uniforms.uBloom.value = u.texture, ep(G, null);
        },
        ey = () => {
          ev || eh || !ef || ec || (ec = s.requestAnimationFrame(eM));
        };
      function eM(e) {
        if (ec = 0, ev || eh) return;
        let t = em && e - em < 100 ? Math.min((e - em) / 1e3, .05) : 1 / 60;
        em = e;
        let a = E ? 1 : 1 - Math.exp(-t / .35);
        for (let e = 0; e < ed.length; e++) ed[e] += ((er === e) - ed[e]) * a;
        L.set(ed[0], ed[1], ed[2]), eo += ((null !== er) - eo) * a, E || (ei += t, en += t, es = (es + .618034) % 1), ew();
        let l = ed.some((e, t) => Math.abs(e - (er === t)) > .002) || Math.abs(eo - (null !== er)) > .002;
        !E || l ? ey() : em = 0;
      }
      let eT = () => {
          let u,
            r,
            n,
            i,
            c,
            m,
            f,
            h = e.getBoundingClientRect();
          K = Math.max(1, h.width), Z = Math.max(1, h.height), J = Math.min(s.devicePixelRatio || 1, 2), o.setPixelRatio(J), o.setSize(K, Z, !1);
          let x = Math.round(K * J),
            p = Math.round(Z * J);
          ex(), V = $(x, p);
          let g = d(Math.floor(Math.log2(Math.min(x, p) / 8)), 3, 7);
          for (let e = 1; e <= g; e++) W.push($(Math.max(1, x >> e), Math.max(1, p >> e))), Y.push($(Math.max(1, x >> e), Math.max(1, p >> e)));
          u = e.getBoundingClientRect(), n = (r = t.getBoundingClientRect()).left + r.width / 2 - u.left, i = r.top + r.height / 2 - u.top, ee = [n * J, (Z - i) * J], et = Math.max(Math.min("absolute" === s.getComputedStyle(l[0] ?? e).position ? Math.min(.46 * r.width, (r.width - 300) / 2) : .5 * r.width, .5 * r.height / Math.cos(62 * Math.PI / 180) * .92), 60) * J, ea = [(a.offsetWidth / 2 + 28) * J, (a.offsetHeight / 2 + 22) * J], c = e.getBoundingClientRect(), m = eb(0, 0), f = .97 * (1 - F / Math.sqrt(111.25)), l.forEach((e, t) => {
            if (!e) return;
            let a = e.offsetParent;
            if (!a || "absolute" !== s.getComputedStyle(e).position) {
              e.style.transform = "";
              return;
            }
            let l = a.getBoundingClientRect(),
              u = v(t),
              o = eb(f * Math.cos(u), f * Math.sin(u)),
              r = o.x - m.x,
              n = o.y - m.y,
              i = Math.hypot(r, n) || 1,
              h = r / i,
              d = n / i,
              x = o.x + 18 * h - (l.left - c.left),
              p = o.y + 18 * d - (l.top - c.top);
            e.dataset.side = Math.abs(h) > .55 ? h > 0 ? "right" : "left" : "middle", e.style.transform = `translate3d(${x.toFixed(1)}px, ${p.toFixed(1)}px, 0) translate(${(-50 + 50 * h).toFixed(1)}%, ${(-50 + 50 * d).toFixed(1)}%)`;
          }), ew(), ey();
        },
        eS = () => {
          eg() && (!ec && ef && ew(), ey());
        },
        ek = () => {
          E = R.matches, em = 0, ey();
        },
        eC = e => {
          e.preventDefault(), eh = !0, s.cancelAnimationFrame(ec), ec = 0;
        },
        eR = () => {
          eh = !1, Q = "", eg(), eT();
        },
        eE = new ResizeObserver(eT),
        eP = new IntersectionObserver(([e]) => {
          ef = e.isIntersecting, em = 0, ey();
        }, {
          rootMargin: "80px"
        }),
        eq = new MutationObserver(eS),
        eF = s.matchMedia("(prefers-color-scheme: dark)");
      return eq.observe(r.documentElement, {
        attributes: !0,
        attributeFilter: ["class", "style", "data-theme"]
      }), eF.addEventListener("change", eS), R.addEventListener("change", ek), b.addEventListener("webglcontextlost", eC), b.addEventListener("webglcontextrestored", eR), eE.observe(e), eE.observe(t), eE.observe(a), eP.observe(e), eg(), eT(), {
        focus: e => {
          er = e, ey();
        },
        join: () => {
          c >= m || (el += 1, eu = ei, ey());
        },
        destroy: () => {
          ev = !0, s.cancelAnimationFrame(ec), eq.disconnect(), eE.disconnect(), eP.disconnect(), eF.removeEventListener("change", eS), R.removeEventListener("change", ek), b.removeEventListener("webglcontextlost", eC), b.removeEventListener("webglcontextrestored", eR), ex(), D.dispose(), q.dispose(), [z, I, U, G].forEach(e => e.dispose()), o.dispose(), b.remove();
        }
      };
    }(e, l, u, E.current, 0);
    return P.current = o, () => {
      o?.destroy(), P.current = null;
    };
  }, []), (0, React.useEffect)(() => {
    P.current?.focus(q);
  }, [q]), (0, React.useEffect)(() => {
    if (B || e) return;
    let t = window.setInterval(() => F(e => (e + 1) % s.length), 3600);
    return () => window.clearInterval(t);
  }, [B, e]), (0, React.useEffect)(() => {
    if (e) return;
    let t = 0,
      a = () => {
        t = window.setTimeout(() => {
          P.current?.join(), A(e => e + 1), a();
        }, 2600 + 3400 * Math.random());
      };
    return a(), () => window.clearTimeout(t);
  }, [e]);
  let I = e => {
    L(!0), F(e);
  };
  return <section ref={t} className="relative isolate w-full overflow-hidden bg-white px-4 py-20 text-neutral-950 dark:bg-neutral-950 dark:text-white sm:px-6 lg:px-8 lg:py-24"><motion.div variants={C} initial={!e && "hidden"} whileInView="show" viewport={{
      once: !0,
      amount: .3
    }} className="mx-auto flex w-full max-w-[1400px] flex-col items-center"><motion.h2 variants={R} className="text-balance text-center text-[2.25rem] font-medium leading-[1.04] tracking-[-0.04em] sm:text-5xl">Every star is a team.</motion.h2><motion.p variants={R} className="mt-5 max-w-[36ch] text-pretty text-center text-base leading-relaxed text-neutral-600 dark:text-neutral-400">One star for every team building on the platform today, in 142 countries.</motion.p><div className="relative mt-4 w-full lg:mt-2"><div ref={a} className="relative flex h-[min(18rem,74vw)] w-full items-center justify-center sm:h-[26rem] lg:h-[34rem]"><div ref={b} className="text-center"><motion.p variants={R} aria-live="polite" className="text-[3.25rem] font-medium leading-none tracking-[-0.05em] tabular-nums sm:text-7xl lg:text-8xl">{(c + z).toLocaleString("en-US")}</motion.p><motion.p variants={R} className="mt-3 text-sm text-neutral-500 dark:text-neutral-400">Teams and counting</motion.p></div></div><ul aria-label="Teams by region" onPointerLeave={() => L(!1)} className="mx-auto mt-2 flex max-w-[26rem] flex-col gap-1 lg:mt-0 lg:max-w-none">{s.map((e, t) => {
            let a = t === q;
            return <li className="lg:contents"><div ref={e => {
                E.current[t] = e;
              }} tabIndex={0} aria-current={a ? "true" : void 0} onPointerEnter={e => {
                "mouse" === e.pointerType && I(t);
              }} onFocus={() => I(t)} onBlur={() => L(!1)} onClick={() => I(t)} className="flex cursor-default items-baseline justify-between gap-6 rounded-md py-2 outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current lg:absolute lg:left-0 lg:top-0 lg:block lg:w-max lg:py-1 lg:data-[side=left]:text-right lg:data-[side=middle]:text-center"><span className={`block text-sm transition-colors duration-500 ${a ? "text-neutral-950 dark:text-white" : "text-neutral-500"}`}>{e.name}</span><span className={`block text-2xl font-medium tracking-[-0.03em] tabular-nums transition-colors duration-500 ${a ? "text-[#b86f00] dark:text-[#ffc062]" : "text-neutral-400 dark:text-neutral-500"}`}>{e.teams.toLocaleString("en-US")}</span></div></li>;
          })}</ul></div></motion.div></section>;
}

export { E as Stats16 };
export default E;

import * as __mod_81712 from "../_helpers/81712";
import * as __mod_2253 from "../_helpers/2253";
import * as __mod_90650 from "../_helpers/90650";
import * as __mod_3907 from "../_helpers/3907";
import * as __mod_90761 from "../_helpers/90761";
import * as __mod_86049 from "../_helpers/86049";
import * as __mod_56388 from "../_helpers/56388";
/**
 * Spectral Drape
 * A glowing drape of dots folding in 3D
 * slug: spectral-drape
 * category: background
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let p = ["#6A4BFF", "#E4DBFF"],
  h = `
#define MAX_STRANDS 12
#define MAX_RIPPLES 4

attribute vec2 aGrid;

uniform float uTime;
uniform float uClock;
uniform float uSeed;
uniform float uStrands;
uniform float uAmplitude;
uniform float uFrequency;
uniform float uThickness;
uniform float uDepth;
uniform float uSpacing;
uniform float uSize;
uniform float uViewHeight;
uniform float uIntensity;
uniform float uShift;
uniform vec3 uBodyLab;
uniform vec3 uGlowLab;
uniform vec3 uWake;
uniform vec3 uWakeVector;
uniform float uWakeRadius;
uniform float uAspect;
uniform vec4 uRipple[MAX_RIPPLES];

varying vec3 vColor;
varying float vGlow;

float hash(float n) {
  return fract(sin(n * 127.1 + uSeed * 311.7) * 43758.5453);
}

vec3 labToLinear(vec3 lab) {
  float l = lab.x + 0.3963377774 * lab.y + 0.2158037573 * lab.z;
  float m = lab.x - 0.1055613458 * lab.y - 0.0638541728 * lab.z;
  float s = lab.x - 0.0894841775 * lab.y - 1.2914855480 * lab.z;
  l = l * l * l;
  m = m * m * m;
  s = s * s * s;
  return vec3(
    4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s,
    -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s,
    -0.0041960863 * l - 0.7034186147 * m + 1.7076147010 * s
  );
}

vec3 toSrgb(vec3 c) {
  c = clamp(c, 0.0, 1.0);
  return mix(c * 12.92, 1.055 * pow(c, vec3(1.0 / 2.4)) - 0.055, step(0.0031308, c));
}

float strands(vec2 g, float t) {
  float sum = 0.0;
  for (int k = 0; k < MAX_STRANDS; k++) {
    float index = float(k);
    if (index >= uStrands) break;
    float a = hash(index + 1.0);
    float b = hash(index + 17.0);
    float c = hash(index + 43.0);
    float frequency = uFrequency * (0.55 + 0.9 * a);
    float phase = b * 6.2831853;
    float along = g.x * 6.2831853 * frequency;
    float wave =
      sin(along + phase + t * (0.35 + 0.45 * a)) * 0.62 +
      sin(along * 2.07 - phase * 1.31 - t * (0.27 + 0.36 * b)) * 0.26 +
      sin(along * 0.47 + phase * 0.7 + t * (0.19 + 0.2 * c)) * 0.3;
    float line = 0.5 + (c - 0.5) * 0.8 + uAmplitude * 0.16 * wave;
    float width = uThickness * (0.022 + 0.05 * c) * (0.75 + 0.5 * sin(along * 0.5 + t * 0.4 + phase));
    float d = (g.y - line) / max(width, 0.004);
    sum += exp(-d * d);
  }
  float edge = smoothstep(0.0, 0.12, g.y) * (1.0 - smoothstep(0.88, 1.0, g.y)) *
    smoothstep(0.0, 0.05, g.x) * (1.0 - smoothstep(0.95, 1.0, g.x));
  return (1.0 - exp(-sum * 1.1)) * edge;
}

void main() {
  float field = strands(aGrid, uTime);
  vec3 local = vec3((aGrid.x - 0.5) * 11.0, (aGrid.y - 0.5) * 11.0, field * uDepth);

  float reveal = 0.0;
  for (int k = 0; k < MAX_RIPPLES; k++) {
    vec4 ripple = uRipple[k];
    float age = uClock - ripple.z;
    if (ripple.w <= 0.0 || age < 0.0 || age > 6.0) continue;
    float radius = length((aGrid - ripple.xy) * 11.0);
    float front = radius - age * 3.4;
    float envelope = exp(-front * front * 3.0) * exp(-age * 0.5) * ripple.w;
    local.z += sin(front * 3.2) * 0.3 * envelope;
    reveal += envelope;
  }

  vec4 world = modelMatrix * vec4(local, 1.0);
  vec4 clip = projectionMatrix * viewMatrix * world;
  vec2 ndc = clip.xy / clip.w;
  vec2 offset = (ndc - uWake.xy) * vec2(uAspect, 1.0);
  float touch = exp(-dot(offset, offset) / max(uWakeRadius * uWakeRadius, 1e-4)) * uWake.z;
  world.xyz += uWakeVector * touch;

  vec4 view = viewMatrix * world;
  gl_Position = projectionMatrix * view;

  float eye = -view.z;
  float size = uSpacing * uSize * projectionMatrix[1][1] * uViewHeight * 0.5 / max(eye, 0.1);
  float nearness = clamp(9.0 / max(eye, 0.1), 0.35, 1.8);
  float shade = mix(0.35, 1.0, smoothstep(0.55, 1.2, nearness));

  float lift = smoothstep(0.06, 0.95, field);
  float glow = (pow(lift, 1.35) * 1.3 + reveal * 1.1) * shade * uIntensity;
  float shown = max(size, 1.35);
  vGlow = glow * min(size * size / (shown * shown), 1.0);
  gl_PointSize = shown * (1.0 + touch * 0.35);

  float tone = clamp(lift * 0.9 + (aGrid.x - 0.5) * uShift + reveal * 0.25, 0.0, 1.0);
  vec3 lab = mix(uBodyLab, uGlowLab, tone);
  vColor = toSrgb(max(labToLinear(lab), vec3(0.0)));
}
`,
  m = `
precision highp float;

uniform float uSoftness;
uniform float uInk;

varying vec3 vColor;
varying float vGlow;

void main() {
  vec2 c = gl_PointCoord - 0.5;
  float r = length(c) * 2.0;
  float disc = 1.0 - smoothstep(mix(0.55, 0.0, uSoftness), 1.0, r);
  float amount = disc * vGlow;
  if (amount < 0.003) discard;
  if (uInk > 0.5) {
    float alpha = clamp(amount, 0.0, 1.0);
    gl_FragColor = vec4(vColor * alpha, alpha);
  } else {
    gl_FragColor = vec4(vColor * amount, clamp(amount, 0.0, 1.0));
  }
}
`,
  f = (e, t, a) => Math.min(a, Math.max(t, e)),
  v = e => e * Math.PI / 180,
  g = e => {
    let t = e.trim().toLowerCase();
    return "transparent" === t || (/^#[0-9a-f]{8}$/.test(t) ? t.endsWith("00") : /^#[0-9a-f]{4}$/.test(t) ? t.endsWith("0") : null !== t.match(/^(?:rgba?|hsla?)\(.*[,/]\s*(0|0?\.0+|0%)\s*\)$/));
  },
  x = (e, t, a) => {
    let n = t.trim();
    try {
      e.set(/^#[0-9a-f]{8}$/i.test(n) ? n.slice(0, 7) : n);
    } catch {
      e.set(a);
    }
    return e;
  },
  y = (e, t) => {
    let a = Math.cbrt(.4122214708 * t.r + .5363325363 * t.g + .0514459929 * t.b),
      n = Math.cbrt(.2119034982 * t.r + .6806995451 * t.g + .1073969566 * t.b),
      r = Math.cbrt(.0883024619 * t.r + .2817188376 * t.g + .6299787005 * t.b);
    return e.set(.2104542553 * a + .793617785 * n - .0040720468 * r, 1.9779984951 * a - 2.428592205 * n + .4505937099 * r, .0259040371 * a + .7827717662 * n - .808675766 * r);
  },
  b = e => {
    let t = window.matchMedia("(min-resolution: 2dppx)");
    return t.addEventListener("change", e), window.addEventListener("resize", e), () => {
      t.removeEventListener("change", e), window.removeEventListener("resize", e);
    };
  },
  w = () => window.devicePixelRatio || 1,
  k = e => {
    let t = window.matchMedia("(prefers-reduced-motion: reduce)");
    return t.addEventListener("change", e), () => t.removeEventListener("change", e);
  },
  S = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  C = ({
    settings: e,
    pointerRef: t,
    wakeRef: a
  }) => {
    let {
        size: l,
        invalidate: i
      } = (0, __mod_81712.C)(),
      s = (0, React.useRef)(null),
      u = (0, React.useRef)(null),
      c = (0, React.useRef)({
        time: 0,
        clock: 0,
        leanX: 0,
        leanY: 0,
        wakeX: 9,
        wakeY: 9,
        lastX: .5,
        lastY: .5,
        hasLast: !1,
        velocityX: 0,
        velocityY: 0,
        strength: 0,
        presses: 0,
        nextRipple: 0,
        ripples: Array.from({
          length: 4
        }, () => new __mod_2253.IUQ(0, 0, -99, 0))
      }),
      b = (0, React.useMemo)(() => ({
        right: new __mod_2253.Pq0(),
        up: new __mod_2253.Pq0(),
        raycaster: new __mod_2253.tBo(),
        ndc: new __mod_2253.I9Y(),
        plane: new __mod_2253.Zcv(),
        normal: new __mod_2253.Pq0(),
        point: new __mod_2253.Pq0(),
        inverse: new __mod_2253.kn4(),
        euler: new __mod_2253.O9p()
      }), []),
      w = (0, React.useMemo)(() => ({
        uTime: {
          value: 0
        },
        uClock: {
          value: 0
        },
        uSeed: {
          value: 0
        },
        uStrands: {
          value: 8
        },
        uAmplitude: {
          value: 1
        },
        uFrequency: {
          value: .6
        },
        uThickness: {
          value: 1
        },
        uDepth: {
          value: 1.6
        },
        uSpacing: {
          value: .04
        },
        uSize: {
          value: .5
        },
        uViewHeight: {
          value: 600
        },
        uIntensity: {
          value: 1
        },
        uShift: {
          value: 0
        },
        uBodyLab: {
          value: new __mod_2253.Pq0()
        },
        uGlowLab: {
          value: new __mod_2253.Pq0()
        },
        uWake: {
          value: new __mod_2253.Pq0(9, 9, 0)
        },
        uWakeVector: {
          value: new __mod_2253.Pq0()
        },
        uWakeRadius: {
          value: .3
        },
        uAspect: {
          value: 1
        },
        uRipple: {
          value: Array.from({
            length: 4
          }, () => new __mod_2253.IUQ(0, 0, -99, 0))
        },
        uSoftness: {
          value: .6
        },
        uInk: {
          value: 0
        }
      }), []),
      k = (0, React.useMemo)(() => (e => {
        let t = Math.sqrt(f(e, .2, 2.5)),
          a = Math.max(24, Math.round(260 * t)),
          n = Math.max(16, Math.round(170 * t)),
          r = new Float32Array(a * n * 2),
          l = 0;
        for (let e = 0; e < n; e++) for (let t = 0; t < a; t++) r[l++] = t / (a - 1), r[l++] = e / (n - 1);
        let i = new __mod_2253.LoY();
        return i.setAttribute("aGrid", new __mod_2253.THS(r, 2)), i.setAttribute("position", new __mod_2253.THS(new Float32Array(a * n * 3), 3)), i.boundingSphere = new __mod_2253.iyt(new __mod_2253.Pq0(), 22), {
          geometry: i,
          spacing: 11 / (a - 1)
        };
      })(e.density), [e.density]),
      S = e.colors.join("|"),
      {
        backgroundColor: C
      } = e;
    return (0, React.useEffect)(() => () => k.geometry.dispose(), [k]), (0, React.useEffect)(() => (a.current = i, () => {
      a.current = null;
    }), [i, a]), (0, React.useEffect)(() => {
      let e = u.current;
      if (!e) return;
      let t = e.uniforms,
        a = S ? S.split("|") : p,
        n = new __mod_2253.Q1f();
      x(n, a[0] ?? p[0], p[0]), y(t.uBodyLab.value, n), x(n, a[1] ?? a[0] ?? p[1], p[1]), y(t.uGlowLab.value, n);
      let r = g(C);
      x(n, r ? "#000000" : C, "#000000");
      let l = .2126 * n.r + .7152 * n.g + .0722 * n.b,
        s = !r && l > .25;
      t.uInk.value = +!!s, e.blending = __mod_2253.bCz, e.blendEquation = __mod_2253.gO9, e.blendSrc = __mod_2253.qad, e.blendDst = s ? __mod_2253.OuU : __mod_2253.qad, e.blendSrcAlpha = __mod_2253.qad, e.blendDstAlpha = __mod_2253.OuU, e.needsUpdate = !0, i();
    }, [S, C, i]), (0, React.useEffect)(() => {
      i();
    }, [e, l, i]), (0, __mod_81712.D)((a, n) => {
      let r = s.current,
        o = u.current;
      if (!r || !o) return;
      let d = o.uniforms,
        p = c.current,
        h = t.current,
        m = Math.min(Math.max(n, 0), .05),
        g = !e.paused && !e.reduced;
      g && (p.time += m * f(e.speed, 0, 4) * f(e.flow, 0, 4) * .3), e.reduced || (p.clock += m);
      let x = l.width / Math.max(l.height, 1),
        y = a.camera,
        w = e.interactive && !e.reduced && h.inside,
        S = f(e.parallax, 0, 3),
        C = w ? (h.x - .5) * 2 : 0,
        j = w ? (h.y - .5) * 2 : 0,
        M = 1 - Math.exp(-(2.2 * m));
      p.leanX += (C - p.leanX) * M, p.leanY += (j - p.leanY) * M, b.euler.set(v(f(e.tilt, -180, 180)) - .06 * p.leanY * S, v(f(e.turn, -180, 180)) + .08 * p.leanX * S, v(f(e.roll, -180, 180)), "XYZ"), r.rotation.copy(b.euler), r.scale.setScalar(f(e.zoom, .3, 3)), r.updateMatrixWorld();
      let F = 0,
        R = 0;
      w ? (p.hasLast || (p.lastX = h.x, p.lastY = h.y, p.wakeX = h.x, p.wakeY = h.y, p.hasLast = !0), m > 0 && (F = (h.x - p.lastX) / m, R = (h.y - p.lastY) / m), p.lastX = h.x, p.lastY = h.y) : p.hasLast = !1;
      let E = 1 - Math.exp(-(6 * m));
      p.velocityX += (f(F, -5, 5) - p.velocityX) * E, p.velocityY += (f(R, -5, 5) - p.velocityY) * E;
      let A = 1 - Math.exp(-(7 * m));
      w && (p.wakeX += (h.x - p.wakeX) * A, p.wakeY += (h.y - p.wakeY) * A);
      let P = Math.hypot(p.velocityX * x, p.velocityY),
        L = w ? f(.9 * P, 0, 1.4) : 0;
      p.strength += (L - p.strength) * (1 - Math.exp(-(4 * m))), y.updateMatrixWorld(), b.right.setFromMatrixColumn(y.matrixWorld, 0), b.up.setFromMatrixColumn(y.matrixWorld, 1);
      let z = 9 * Math.tan(v(38) / 2),
        X = f(e.brush, 0, 3),
        W = p.velocityX / Math.max(P, 1e-4),
        B = p.velocityY / Math.max(P, 1e-4);
      if (d.uWake.value.set(2 * p.wakeX - 1, 2 * p.wakeY - 1, p.strength * X), d.uWakeVector.value.copy(b.right).multiplyScalar(W * x * z * .16).addScaledVector(b.up, B * z * .16), d.uWakeRadius.value = f(e.brushRadius, .03, 1), h.presses !== p.presses && (p.presses = h.presses, e.clickRipples && e.interactive && !e.reduced) && (b.ndc.set(h.pressX, h.pressY), b.raycaster.setFromCamera(b.ndc, y), b.normal.set(0, 0, 1).transformDirection(r.matrixWorld), b.point.setFromMatrixPosition(r.matrixWorld), b.plane.setFromNormalAndCoplanarPoint(b.normal, b.point), b.raycaster.ray.intersectPlane(b.plane, b.point))) {
        b.inverse.copy(r.matrixWorld).invert(), b.point.applyMatrix4(b.inverse);
        let e = p.nextRipple;
        p.nextRipple = (e + 1) % 4, p.ripples[e].set(f(b.point.x / 11 + .5, -.5, 1.5), f(b.point.y / 11 + .5, -.5, 1.5), p.clock, 1);
      }
      let I = !1;
      for (let e = 0; e < 4; e++) d.uRipple.value[e].copy(p.ripples[e]), p.ripples[e].w > 0 && p.clock - p.ripples[e].z < 6 && (I = !0);
      d.uTime.value = p.time, d.uClock.value = p.clock, d.uSeed.value = .137 * e.seed, d.uStrands.value = Math.round(f(e.strands, 1, 12)), d.uAmplitude.value = f(e.amplitude, 0, 3), d.uFrequency.value = .6 * f(e.frequency, .05, 4), d.uThickness.value = f(e.thickness, .2, 4), d.uDepth.value = 1.6 * f(e.depth, 0, 3), d.uSpacing.value = k.spacing, d.uSize.value = .5 * f(e.dotSize, .1, 4), d.uViewHeight.value = l.height * a.viewport.dpr, d.uIntensity.value = f(e.intensity, 0, 4), d.uShift.value = f(e.colorShift, -1, 1), d.uAspect.value = x, d.uSoftness.value = f(e.softness, 0, 1);
      let Y = I || p.strength > .002 || Math.abs(p.leanX - C) > .001 || Math.abs(p.leanY - j) > .001;
      !g && Y && i();
    }), <group ref={s}><points geometry={k.geometry} frustumCulled={!1}><shaderMaterial ref={u} vertexShader={h} fragmentShader={m} uniforms={w} transparent={!0} depthTest={!1} depthWrite={!1} /></points></group>;
  },
  j = ({
    colors: e = p,
    backgroundColor: t = "#0a0a0a",
    density: a = 1,
    dotSize: l = 1,
    strands: i = 8,
    amplitude: s = 1,
    frequency: o = 1,
    thickness: d = .7,
    depth: h = 1,
    softness: m = .6,
    intensity: f = 1,
    colorShift: v = .3,
    tilt: x = -40,
    turn: y = -45,
    roll: j = 110,
    zoom: M = 1,
    flow: F = 1,
    speed: R = 1,
    interactive: E = !0,
    brush: A = 1,
    brushRadius: P = .2,
    parallax: L = 1,
    clickRipples: z = !0,
    seed: X = 0,
    paused: W = !1,
    dpr: B = 2,
    className: I,
    style: Y,
    children: T
  }) => {
    let D = (0, React.useRef)(null),
      q = (0, React.useRef)({
        x: .5,
        y: .5,
        inside: !1,
        presses: 0,
        pressX: 0,
        pressY: 0
      }),
      N = (0, React.useRef)(null),
      [G, H] = (0, React.useState)(!0),
      _ = (0, React.useSyncExternalStore)(k, S, () => !1),
      U = Math.min((0, React.useSyncExternalStore)(b, w, () => 1), Math.max(B, .5)),
      V = !W && !_,
      O = g(t);
    return (0, React.useEffect)(() => {
      let e = D.current;
      if (!e || "undefined" == typeof IntersectionObserver) return;
      let t = new IntersectionObserver(([e]) => H(e.isIntersecting), {
        rootMargin: "80px"
      });
      return t.observe(e), () => t.disconnect();
    }, []), (0, React.useEffect)(() => {
      let e = D.current;
      if (!e) return;
      let t = t => {
          let a = e.getBoundingClientRect(),
            n = q.current;
          n.x = (t.clientX - a.left) / Math.max(a.width, 1), n.y = 1 - (t.clientY - a.top) / Math.max(a.height, 1), n.inside = !0;
        },
        a = e => {
          t(e), N.current?.();
        },
        n = e => {
          t(e);
          let a = q.current;
          a.pressX = 2 * a.x - 1, a.pressY = 2 * a.y - 1, a.presses += 1, N.current?.();
        },
        r = () => {
          q.current.inside = !1, N.current?.();
        };
      return e.addEventListener("pointermove", a, {
        passive: !0
      }), e.addEventListener("pointerdown", n, {
        passive: !0
      }), e.addEventListener("pointerleave", r, {
        passive: !0
      }), e.addEventListener("pointercancel", r, {
        passive: !0
      }), () => {
        e.removeEventListener("pointermove", a), e.removeEventListener("pointerdown", n), e.removeEventListener("pointerleave", r), e.removeEventListener("pointercancel", r);
      };
    }, []), <div ref={D} className={(0, __mod_90650.cn)("relative isolate overflow-hidden", I)} style={{
      backgroundColor: O ? void 0 : t,
      ...Y
    }}><div className="absolute inset-0" aria-hidden="true"><__mod_3907.Hl dpr={U} frameloop={G && V ? "always" : "demand"} camera={{
          fov: 38,
          near: .1,
          far: 100,
          position: [0, 0, 9]
        }} gl={{
          antialias: !1,
          alpha: !0,
          premultipliedAlpha: !0,
          powerPreference: "high-performance"
        }} style={{
          pointerEvents: "none"
        }}><C settings={{
            colors: e,
            backgroundColor: t,
            density: a,
            dotSize: l,
            strands: i,
            amplitude: s,
            frequency: o,
            thickness: d,
            depth: h,
            softness: m,
            intensity: f,
            colorShift: v,
            tilt: x,
            turn: y,
            roll: j,
            zoom: M,
            flow: F,
            speed: R,
            interactive: E,
            brush: A,
            brushRadius: P,
            parallax: L,
            clickRipples: z,
            seed: X,
            paused: W,
            reduced: _
          }} pointerRef={q} wakeRef={N} /></__mod_3907.Hl></div>{T ? <div className="relative z-10 h-full w-full">{T}</div> : null}</div>;
  },
  M = {
    violet: {
      colors: ["#6A4BFF", "#E4DBFF"],
      background: "#0a0a0a"
    },
    digital: {
      colors: ["#1B3A8C", "#4FD8FF"],
      background: "#020B18"
    },
    mono: {
      colors: ["#6B6B78", "#FFFFFF"],
      background: "#0a0a0a"
    },
    rose: {
      colors: ["#C2185B", "#FFC1DA"],
      background: "#0a0a0a"
    },
    aurora: {
      colors: ["#0E7C66", "#9BFFE0"],
      background: "#03100D"
    },
    ink: {
      colors: ["#3A1DB8", "#8B5CF6"],
      background: "#FAFAFA"
    },
    graphite: {
      colors: ["#71717A", "#18181B"],
      background: "#F4F4F5"
    }
  },
  F = [{
    label: "Violet",
    value: "violet"
  }, {
    label: "Digital",
    value: "digital"
  }, {
    label: "Mono",
    value: "mono"
  }, {
    label: "Rose",
    value: "rose"
  }, {
    label: "Aurora",
    value: "aurora"
  }, {
    label: "Ink",
    value: "ink"
  }, {
    label: "Graphite",
    value: "graphite"
  }],
  R = [{
    name: "colors",
    type: "string[]",
    default: '["#6A4BFF", "#E4DBFF"]',
    description: "Two colours: the dots across the body of the drape, then the highlight they reach along its crests."
  }, {
    name: "backgroundColor",
    type: "string",
    default: '"#0a0a0a"',
    description: 'Colour behind the drape. Light backgrounds switch to ink dots. Pass "transparent" to show the page.'
  }, {
    name: "density",
    type: "number",
    default: "1",
    description: "Number of dots, from 0.2 to 2.5. 1 draws about 44,000."
  }, {
    name: "dotSize",
    type: "number",
    default: "1",
    description: "Size of each dot, relative to the spacing of the grid."
  }, {
    name: "strands",
    type: "number",
    default: "8",
    description: "Number of flowing strands that lift the grid into folds, from 1 to 12."
  }, {
    name: "amplitude",
    type: "number",
    default: "1",
    description: "How far the strands swing across the drape."
  }, {
    name: "frequency",
    type: "number",
    default: "1",
    description: "How many curves each strand makes along its length."
  }, {
    name: "thickness",
    type: "number",
    default: "0.7",
    description: "Width of each strand. Wider strands show more of the drape."
  }, {
    name: "depth",
    type: "number",
    default: "1",
    description: "How high the strands lift the grid. Higher values give deeper folds."
  }, {
    name: "softness",
    type: "number",
    default: "0.6",
    description: "Edge softness of each dot, from 0 (crisp) to 1 (soft glow)."
  }, {
    name: "intensity",
    type: "number",
    default: "1",
    description: "Brightness of the dots."
  }, {
    name: "colorShift",
    type: "number",
    default: "0.3",
    description: "Shifts the dots towards the highlight colour along the length of the drape."
  }, {
    name: "tilt",
    type: "number",
    default: "-40",
    description: "Rotation of the drape around the horizontal axis, in degrees."
  }, {
    name: "turn",
    type: "number",
    default: "-45",
    description: "Rotation of the drape around the vertical axis, in degrees."
  }, {
    name: "roll",
    type: "number",
    default: "110",
    description: "Rotation of the drape within its own plane, in degrees."
  }, {
    name: "zoom",
    type: "number",
    default: "1",
    description: "Scale of the drape."
  }, {
    name: "flow",
    type: "number",
    default: "1",
    description: "How fast the strands drift and reshape the folds."
  }, {
    name: "speed",
    type: "number",
    default: "1",
    description: "Overall animation speed. 0 holds the current frame."
  }, {
    name: "interactive",
    type: "boolean",
    default: "true",
    description: "The pointer brushes the dots aside as it moves and the view drifts gently towards it."
  }, {
    name: "brush",
    type: "number",
    default: "1",
    description: "How strongly the pointer pushes the dots. 0 disables it."
  }, {
    name: "brushRadius",
    type: "number",
    default: "0.2",
    description: "Size of the area the pointer moves, relative to the height."
  }, {
    name: "parallax",
    type: "number",
    default: "1",
    description: "How far the drape turns towards the pointer. 0 keeps it still."
  }, {
    name: "clickRipples",
    type: "boolean",
    default: "true",
    description: "Each click sends a ripple across the drape that briefly lights the whole grid of dots. Rapid clicks stack."
  }, {
    name: "seed",
    type: "number",
    default: "0",
    description: "Changes the arrangement of the strands."
  }, {
    name: "paused",
    type: "boolean",
    default: "false",
    description: "Freezes the flow. The pointer and clicks still work."
  }, {
    name: "dpr",
    type: "number",
    default: "2",
    description: "Upper bound for the device pixel ratio."
  }, {
    name: "className",
    type: "string",
    default: "—",
    description: "Classes for the root element. Give it a height."
  }, {
    name: "style",
    type: "CSSProperties",
    default: "—",
    description: "Inline styles for the root element."
  }, {
    name: "children",
    type: "ReactNode",
    default: "—",
    description: "Content layered above the drape."
  }],
  E = () => {
    let [e, t] = (0, __mod_90761.I)(),
      a = (0, __mod_86049.Y)(),
      [o, u] = (0, React.useState)(null),
      d = o ?? ("dark" === a ? "violet" : "ink"),
      [c, p] = (0, React.useState)({}),
      h = {
        ...(M[d] ?? M.violet),
        ...c
      },
      [m, f] = (0, React.useState)(1),
      [v, g] = (0, React.useState)(1),
      [x, y] = (0, React.useState)(8),
      [b, w] = (0, React.useState)(1),
      [k, S] = (0, React.useState)(1),
      [C, E] = (0, React.useState)(.7),
      [A, P] = (0, React.useState)(1),
      [L, z] = (0, React.useState)(.6),
      [X, W] = (0, React.useState)(1),
      [B, I] = (0, React.useState)(.3),
      [Y, T] = (0, React.useState)(-40),
      [D, q] = (0, React.useState)(-45),
      [N, G] = (0, React.useState)(110),
      [H, _] = (0, React.useState)(1),
      [U, V] = (0, React.useState)(1),
      [O, $] = (0, React.useState)(1),
      [Q, Z] = (0, React.useState)(1),
      [J, K] = (0, React.useState)(.2),
      [ee, et] = (0, React.useState)(1),
      [ea, en] = (0, React.useState)(0),
      [er, el] = (0, React.useState)(!0),
      [ei, es] = (0, React.useState)(!0),
      [eo, eu] = (0, React.useState)(!1),
      ed = e => t => p(a => {
        let n = [...(a.colors ?? h.colors)];
        return n[e] = t, {
          ...a,
          colors: n
        };
      });
    return <div><__mod_56388.Bg /><__mod_56388.VX><__mod_56388.Ec><__mod_56388.Ch onRefresh={t} minHeight={600}><div className="relative h-full w-full"><JView className="h-full w-full" colors={h.colors} backgroundColor={h.background} density={m} dotSize={v} strands={x} amplitude={b} frequency={k} thickness={C} depth={A} softness={L} intensity={X} colorShift={B} tilt={Y} turn={D} roll={N} zoom={H} flow={U} speed={O} interactive={er} brush={Q} brushRadius={J} parallax={ee} clickRipples={ei} seed={ea} paused={eo}/></div></__mod_56388.Ch><__mod_56388.IH><__mod_56388.bg title="Preset" value={d} options={F} onChange={e => {
              u(e), p({});
            }} /><__mod_56388.W7 title="Background" value={h.background} onChange={e => p(t => ({
              ...t,
              background: e
            }))} /><__mod_56388.W7 title="Dots" value={h.colors[0]} onChange={ed(0)} /><__mod_56388.W7 title="Highlight" value={h.colors[1]} onChange={ed(1)} /><__mod_56388.yt title="Density" min={.2} max={2.5} step={.05} value={m} onChange={f} /><__mod_56388.yt title="Dot Size" min={.2} max={3} step={.05} value={v} onChange={g} /><__mod_56388.yt title="Strands" min={1} max={12} step={1} value={x} onChange={y} /><__mod_56388.yt title="Amplitude" min={0} max={3} step={.05} value={b} onChange={w} /><__mod_56388.yt title="Frequency" min={.1} max={3} step={.05} value={k} onChange={S} /><__mod_56388.yt title="Thickness" min={.2} max={3} step={.05} value={C} onChange={E} /><__mod_56388.yt title="Depth" min={0} max={3} step={.05} value={A} onChange={P} /><__mod_56388.yt title="Softness" min={0} max={1} step={.01} value={L} onChange={z} /><__mod_56388.yt title="Intensity" min={0} max={3} step={.05} value={X} onChange={W} /><__mod_56388.yt title="Color Shift" min={-1} max={1} step={.01} value={B} onChange={I} /><__mod_56388.yt title="Tilt" min={-90} max={90} step={1} value={Y} valueUnit="\xb0" onChange={T} /><__mod_56388.yt title="Turn" min={-90} max={90} step={1} value={D} valueUnit="\xb0" onChange={q} /><__mod_56388.yt title="Roll" min={-180} max={180} step={1} value={N} valueUnit="\xb0" onChange={G} /><__mod_56388.yt title="Zoom" min={.4} max={2.5} step={.05} value={H} onChange={_} /><__mod_56388.yt title="Flow" min={0} max={3} step={.05} value={U} onChange={V} /><__mod_56388.yt title="Speed" min={0} max={3} step={.05} value={O} onChange={$} /><__mod_56388.yt title="Brush" min={0} max={3} step={.05} value={Q} onChange={Z} /><__mod_56388.yt title="Brush Radius" min={.05} max={.6} step={.01} value={J} onChange={K} /><__mod_56388.yt title="Parallax" min={0} max={3} step={.05} value={ee} onChange={et} /><__mod_56388.yt title="Seed" min={0} max={20} step={1} value={ea} onChange={en} /><__mod_56388.tl title="Interactive" checked={er} onChange={el} /><__mod_56388.tl title="Click Ripples" checked={ei} onChange={es} /><__mod_56388.tl title="Paused" checked={eo} onChange={eu} /></__mod_56388.IH><__mod_56388.Ub data={R} /></__mod_56388.Ec><__mod_56388.lT><__mod_56388.Gv /></__mod_56388.lT></__mod_56388.VX></div>;
  };

const JView: any = j;

export default E;

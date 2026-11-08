import * as __mod_2253 from "../_helpers/2253";
import * as __mod_81712 from "../_helpers/81712";
import * as __mod_90650 from "../_helpers/90650";
import * as __mod_3907 from "../_helpers/3907";
import * as __mod_45949 from "../_helpers/45949";
import * as __mod_90761 from "../_helpers/90761";
import * as __mod_56388 from "../_helpers/56388";
/**
 * Parallax Carousel
 * A draggable image carousel with parallax
 * slug: parallax-carousel
 * category: shader
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let p = `
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,
  m = `
precision highp float;

varying vec2 vUv;

uniform sampler2D uMap;
uniform vec2 uPlanePx;
uniform vec2 uTexPx;
uniform float uShift;
uniform float uIntensity;
uniform float uMaxShift;
uniform float uRadiusPx;
uniform float uHasTexture;

vec2 coverFit(vec2 uv, vec2 planeSize, vec2 texSize) {
  float planeAspect = planeSize.x / max(planeSize.y, 1.0);
  float texAspect = texSize.x / max(texSize.y, 1.0);
  vec2 ratio = vec2(
    min(planeAspect / max(texAspect, 0.0001), 1.0),
    min((1.0 / planeAspect) / max(1.0 / texAspect, 0.0001), 1.0)
  );
  return uv * ratio + (1.0 - ratio) * 0.5;
}

float roundedBoxAlpha(vec2 uv, vec2 sizePx, float radiusPx) {
  vec2 p = (uv - 0.5) * sizePx;
  vec2 half_ = sizePx * 0.5 - vec2(radiusPx);
  vec2 d = abs(p) - half_;
  float outside = length(max(d, 0.0));
  float inside = min(max(d.x, d.y), 0.0);
  float dist = outside + inside - radiusPx;
  return clamp(0.5 - dist, 0.0, 1.0);
}

void main() {
  vec2 uv = coverFit(vUv, uPlanePx, uTexPx);

  float zoom = 1.0 / (1.0 + 2.0 * uMaxShift);
  uv = (uv - 0.5) * zoom + 0.5;

  uv.x += uShift * uIntensity * zoom;

  vec4 tex;
  if (uHasTexture > 0.5) {
    tex = texture2D(uMap, uv);
  } else {
    tex = vec4(mix(vec3(0.07), vec3(0.12), vUv.y), 1.0);
  }

  float mask = uRadiusPx > 0.5 ? roundedBoxAlpha(vUv, uPlanePx, uRadiusPx) : 1.0;
  gl_FragColor = vec4(tex.rgb, tex.a * mask);
}
`;
function h(e, t, a) {
  return Math.max(t, Math.min(a, e));
}
function g() {
  return {
    uMap: {
      value: null
    },
    uPlanePx: {
      value: new __mod_2253.I9Y(1, 1)
    },
    uTexPx: {
      value: new __mod_2253.I9Y(1, 1)
    },
    uShift: {
      value: 0
    },
    uIntensity: {
      value: .4
    },
    uMaxShift: {
      value: .2
    },
    uRadiusPx: {
      value: 0
    },
    uHasTexture: {
      value: 0
    }
  };
}
let f = ({
    src: e,
    index: t,
    imageWidth: a,
    imageHeight: n,
    gap: l,
    parallaxIntensity: o,
    uvScale: u,
    borderRadius: d,
    loop: f,
    totalCount: v,
    scrollRef: b
  }) => {
    let x = (0, React.useRef)(null),
      y = (0, React.useRef)(null),
      {
        size: w
      } = (0, __mod_81712.C)(),
      [S] = React.useState(g),
      P = (0, React.useRef)({
        parallaxIntensity: o,
        uvScale: u,
        borderRadius: d,
        imageWidth: a,
        imageHeight: n,
        gap: l,
        loop: f
      });
    return (0, React.useEffect)(() => {
      P.current = {
        parallaxIntensity: o,
        uvScale: u,
        borderRadius: d,
        imageWidth: a,
        imageHeight: n,
        gap: l,
        loop: f
      };
    }, [o, u, d, a, n, l, f]), (0, React.useEffect)(() => {
      if (!e) return;
      let t = !1,
        a = new __mod_2253.Tap();
      return a.setCrossOrigin("anonymous"), a.load(e, e => {
        t ? e.dispose() : (e.colorSpace = __mod_2253.er$, e.minFilter = __mod_2253.k6q, e.magFilter = __mod_2253.k6q, e.wrapS = __mod_2253.ghU, e.wrapT = __mod_2253.ghU, y.current = e);
      }, void 0, () => {
        t || (y.current = null);
      }), () => {
        t = !0, y.current && (y.current.dispose(), y.current = null);
      };
    }, [e]), (0, __mod_81712.D)(() => {
      let e = x.current;
      if (!e) return;
      let a = e.material.uniforms,
        r = P.current,
        i = b.current;
      if (!i) return;
      let n = r.imageWidth + r.gap,
        l = t * n - i.current;
      if (r.loop && v > 0) {
        let e = v * n,
          t = .5 * e;
        l = ((l + t) % e + e) % e - t;
      }
      e.position.x = l, e.position.y = 0, e.scale.set(r.imageWidth, r.imageHeight, 1);
      let o = h(l / Math.max(w.width, 1), -r.uvScale, r.uvScale);
      if (a.uShift.value = -o, a.uIntensity.value = r.parallaxIntensity, a.uMaxShift.value = r.uvScale * r.parallaxIntensity, a.uRadiusPx.value = r.borderRadius, a.uPlanePx.value.set(r.imageWidth, r.imageHeight), y.current?.image) {
        a.uMap.value = y.current;
        let e = y.current.image;
        a.uTexPx.value.set(e.naturalWidth || e.width || 1, e.naturalHeight || e.height || 1), a.uHasTexture.value = 1;
      } else a.uHasTexture.value = 0;
    }), <mesh ref={x}><planeGeometry args={[1, 1, 1, 1]} /><shaderMaterial vertexShader={p} fragmentShader={m} uniforms={S} transparent={!0} /></mesh>;
  },
  v = () => {
    let e = (0, React.useRef)(null),
      {
        size: t,
        set: a
      } = (0, __mod_81712.C)();
    return (0, React.useEffect)(() => {
      let r = e.current;
      r && (r.left = -t.width / 2, r.right = t.width / 2, r.top = t.height / 2, r.bottom = -t.height / 2, r.near = .1, r.far = 1e3, r.position.set(0, 0, 10), r.updateProjectionMatrix(), a({
        camera: r
      }));
    }, [t.width, t.height, a]), <orthographicCamera ref={e} />;
  },
  b = React.forwardRef(({
    images: e = ["/demo.svg", "/demo.svg", "/demo.svg", "/demo.svg", "/demo.svg", "/demo.svg"],
    imageWidth: t = 420,
    imageHeight: a = 560,
    gap: n = 32,
    parallaxIntensity: l = .4,
    uvScale: o = .85,
    lerp: s = .08,
    wheelSensitivity: c = 1,
    dragSensitivity: p = 1.4,
    loop: m = !1,
    borderRadius: g = 16,
    autoplaySpeed: b = 0,
    pauseOnHover: x = !0,
    showProgress: y = !0,
    className: w,
    style: S
  }, P) => {
    let C = (0, React.useRef)(null),
      j = (0, React.useRef)(null),
      k = (0, React.useRef)(!1),
      R = (0, React.useRef)(!1),
      I = (0, React.useRef)(0),
      E = (0, React.useRef)(null),
      T = (0, React.useRef)(null),
      L = (0, React.useRef)({
        current: 0,
        target: 0,
        limit: 0
      }),
      M = (0, React.useRef)({
        lerp: s,
        wheelSensitivity: c,
        dragSensitivity: p,
        autoplaySpeed: b,
        loop: m,
        pauseOnHover: x,
        imageWidth: t,
        gap: n,
        count: e.length
      });
    (0, React.useEffect)(() => {
      M.current = {
        lerp: s,
        wheelSensitivity: c,
        dragSensitivity: p,
        autoplaySpeed: b,
        loop: m,
        pauseOnHover: x,
        imageWidth: t,
        gap: n,
        count: e.length
      };
    }, [s, c, p, b, m, x, t, n, e.length]);
    let H = (0, React.useCallback)(() => {
      let a = C.current;
      if (!a) return;
      let r = e.length * (t + n) - n,
        i = a.clientWidth;
      L.current.limit = m ? 1 / 0 : Math.max(0, r - i);
    }, [e.length, t, n, m]);
    (0, React.useEffect)(() => {
      H();
      let e = C.current;
      if (!e || "undefined" == typeof ResizeObserver) return;
      let t = new ResizeObserver(H);
      return t.observe(e), () => t.disconnect();
    }, [H]);
    let W = (0, React.useRef)(null);
    (0, React.useEffect)(() => {
      let e = t => {
        let a = L.current,
          r = M.current,
          i = E.current ?? t,
          n = Math.max(0, (t - i) / 1e3);
        E.current = t, 0 === r.autoplaySpeed || R.current || r.pauseOnHover && k.current || (a.target += r.autoplaySpeed * n), r.loop || (a.target = h(a.target, 0, a.limit));
        let l = h(r.lerp, .001, 1);
        if (a.current += (a.target - a.current) * l, T.current && !r.loop && a.limit > 0) {
          let e = h(a.current / a.limit, 0, 1);
          T.current.style.transform = `scaleX(${e})`;
        }
        j.current = requestAnimationFrame(e);
      };
      return W.current = e, j.current = requestAnimationFrame(e), () => {
        null !== j.current && cancelAnimationFrame(j.current), j.current = null, W.current = null, E.current = null;
      };
    }, []), (0, React.useEffect)(() => {
      let e = C.current;
      if (!e) return;
      let t = e => {
          let t = M.current,
            a = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
          L.current.target += a * t.wheelSensitivity;
        },
        a = t => {
          R.current = !0, I.current = t.clientX, e.setPointerCapture(t.pointerId), e.style.cursor = "grabbing";
        },
        r = e => {
          if (!R.current) return;
          let t = M.current,
            a = e.clientX - I.current;
          I.current = e.clientX, L.current.target -= a * t.dragSensitivity;
        },
        i = t => {
          if (R.current) {
            R.current = !1;
            try {
              e.releasePointerCapture(t.pointerId);
            } catch {}
            e.style.cursor = "grab";
          }
        },
        n = () => {
          k.current = !0;
        },
        l = () => {
          k.current = !1;
        };
      return e.addEventListener("wheel", t, {
        passive: !0
      }), e.addEventListener("pointerdown", a), e.addEventListener("pointermove", r), e.addEventListener("pointerup", i), e.addEventListener("pointercancel", i), e.addEventListener("pointerleave", i), e.addEventListener("mouseenter", n), e.addEventListener("mouseleave", l), () => {
        e.removeEventListener("wheel", t), e.removeEventListener("pointerdown", a), e.removeEventListener("pointermove", r), e.removeEventListener("pointerup", i), e.removeEventListener("pointercancel", i), e.removeEventListener("pointerleave", i), e.removeEventListener("mouseenter", n), e.removeEventListener("mouseleave", l);
      };
    }, []);
    let O = (0, React.useCallback)(e => {
        let t = M.current,
          a = e * (t.imageWidth + t.gap);
        L.current.target = t.loop ? a : h(a, 0, L.current.limit);
      }, []),
      z = (0, React.useCallback)(() => {
        L.current.target = 0, L.current.current = 0;
      }, []);
    (0, React.useImperativeHandle)(P, () => ({
      scrollToIndex: O,
      reset: z
    }), [O, z]);
    let N = (0, React.useMemo)(() => e.map((e, t) => `${t}-${e}`), [e]);
    return <div ref={C} className={(0, __mod_90650.cn)("relative w-full h-full overflow-hidden select-none", w)} style={{
      cursor: "grab",
      touchAction: "pan-y",
      ...S
    }}><__mod_3907.Hl gl={{
        antialias: !0,
        alpha: !0
      }} dpr={[1, 2]} className="absolute! inset-0 w-full h-full"><V />{e.map((i, s) => <FScene src={i} index={s} imageWidth={t} imageHeight={a} gap={n} parallaxIntensity={l} uvScale={o} borderRadius={g} loop={m} totalCount={e.length} scrollRef={L} />)}</__mod_3907.Hl>{y && !m && <div className="absolute bottom-4 left-1/2 -translate-x-1/2 h-[2px] w-32 bg-white/15 rounded-full overflow-hidden pointer-events-none" aria-hidden={!0}><div ref={T} className="h-full w-full bg-white/80 origin-left" style={{
          transform: "scaleX(0)"
        }} /></div>}</div>;
  });
b.displayName = "ParallaxCarousel";
let x = __mod_45949.ag,
  y = () => {
    let [e, t] = (0, __mod_90761.I)(),
      a = (0, React.useRef)(null),
      [l, s] = (0, React.useState)(360),
      [u, c] = (0, React.useState)(480),
      [d, p] = (0, React.useState)(32),
      [m, h] = (0, React.useState)(16),
      [g, f] = (0, React.useState)(.4),
      [v, y] = (0, React.useState)(.85),
      [w, S] = (0, React.useState)(.08),
      [P, C] = (0, React.useState)(1),
      [j, k] = (0, React.useState)(1.4),
      [R, I] = (0, React.useState)(!0),
      [E, T] = (0, React.useState)(40),
      [L, M] = (0, React.useState)(!0),
      [H, W] = (0, React.useState)(!0);
    return <div><__mod_56388.Bg /><__mod_56388.VX><__mod_56388.Ec><__mod_56388.Ch onRefresh={t} minHeight={600}><div className="relative h-full w-full"><b ref={a} images={x} imageWidth={l} imageHeight={u} gap={d} parallaxIntensity={g} uvScale={v} lerp={w} wheelSensitivity={P} dragSensitivity={j} loop={R} borderRadius={m} autoplaySpeed={E} pauseOnHover={L} showProgress={H} /></div></__mod_56388.Ch><__mod_56388.IH><__mod_56388.yt title="Image Width" value={l} onChange={s} min={200} max={600} step={10} /><__mod_56388.yt title="Image Height" value={u} onChange={c} min={200} max={700} step={10} /><__mod_56388.yt title="Gap" value={d} onChange={p} min={0} max={120} step={2} /><__mod_56388.yt title="Border Radius" value={m} onChange={h} min={0} max={64} step={1} /><__mod_56388.yt title="Parallax Intensity" value={g} onChange={f} min={0} max={1} step={.01} /><__mod_56388.yt title="UV Scale" value={v} onChange={y} min={.6} max={1} step={.01} /><__mod_56388.yt title="Lerp" value={w} onChange={S} min={.01} max={.3} step={.01} /><__mod_56388.yt title="Wheel Sensitivity" value={P} onChange={C} min={.1} max={3} step={.1} /><__mod_56388.yt title="Drag Sensitivity" value={j} onChange={k} min={.1} max={4} step={.1} /><__mod_56388.tl title="Loop" checked={R} onChange={I} /><__mod_56388.yt title="Autoplay Speed (px/s)" value={E} onChange={T} min={0} max={300} step={5} /><__mod_56388.tl title="Pause On Hover" checked={L} onChange={M} /><__mod_56388.tl title="Show Progress" checked={H} onChange={W} /><div className="flex flex-wrap gap-2 sm:col-span-2 lg:col-span-3"><button type="button" onClick={() => a.current?.reset()} className="px-3 py-1.5 text-xs font-medium rounded-md border border-border bg-background hover:bg-accent hover:text-accent-foreground transition-colors cursor-pointer">Reset</button><button type="button" onClick={() => a.current?.scrollToIndex(3)} className="px-3 py-1.5 text-xs font-medium rounded-md border border-border bg-background hover:bg-accent hover:text-accent-foreground transition-colors cursor-pointer">Go to #4</button></div></__mod_56388.IH><__mod_56388.Ub data={[{
            name: "images",
            type: "string[]",
            default: "[]",
            description: "Ordered list of image URLs (required)"
          }, {
            name: "imageWidth",
            type: "number",
            default: "420",
            description: "Plane width in CSS pixels"
          }, {
            name: "imageHeight",
            type: "number",
            default: "560",
            description: "Plane height in CSS pixels"
          }, {
            name: "gap",
            type: "number",
            default: "32",
            description: "Horizontal gap between planes in CSS pixels"
          }, {
            name: "parallaxIntensity",
            type: "number",
            default: "0.4",
            description: "UV-space horizontal counter-shift as planes drift from centre (0–1)"
          }, {
            name: "uvScale",
            type: "number",
            default: "0.85",
            description: "Inner texture inset that gives the parallax shift room to move (0.6–1)"
          }, {
            name: "lerp",
            type: "number",
            default: "0.08",
            description: "Smoothing factor for the scroll lerp (0–1)"
          }, {
            name: "wheelSensitivity",
            type: "number",
            default: "1",
            description: "Multiplier on wheel deltas"
          }, {
            name: "dragSensitivity",
            type: "number",
            default: "1.4",
            description: "Multiplier on pointer-drag deltas"
          }, {
            name: "loop",
            type: "boolean",
            default: "false",
            description: "Loop endlessly horizontally (planes wrap around)"
          }, {
            name: "borderRadius",
            type: "number",
            default: "16",
            description: "Border radius applied to each plane in CSS pixels"
          }, {
            name: "autoplaySpeed",
            type: "number",
            default: "0",
            description: "Idle drift speed in CSS px/s when not interacting"
          }, {
            name: "pauseOnHover",
            type: "boolean",
            default: "true",
            description: "Pause autoplay while the cursor is over the carousel"
          }, {
            name: "showProgress",
            type: "boolean",
            default: "true",
            description: "Show a progress indicator at the bottom (hidden in loop mode)"
          }, {
            name: "className",
            type: "string",
            default: '""',
            description: "Additional CSS classes for the container"
          }, {
            name: "ref",
            type: "ParallaxCarouselRef",
            default: "undefined",
            description: "Imperative API: { scrollToIndex(i), reset() }"
          }]} /></__mod_56388.Ec><__mod_56388.lT><__mod_56388.Gv /></__mod_56388.lT></__mod_56388.VX></div>;
  };

const V: any = v;

const FScene: any = f;

export default b;

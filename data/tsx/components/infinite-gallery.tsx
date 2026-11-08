import * as __mod_2253 from "../_helpers/2253";
import * as __mod_12246 from "../_helpers/12246";
import * as __mod_81712 from "../_helpers/81712";
import * as __mod_90650 from "../_helpers/90650";
import * as __mod_3907 from "../_helpers/3907";
import * as __mod_90761 from "../_helpers/90761";
import * as __mod_30701 from "../_helpers/30701";
import * as __mod_56388 from "../_helpers/56388";
/**
 * Infinite Gallery
 * An endless field of images you drift through in 3D
 * slug: infinite-gallery
 * category: 3d
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let f = (e, t, a) => Math.max(t, Math.min(a, e)),
  p = (e, t, a) => e + (t - e) * a,
  g = e => {
    let t = 1e4 * Math.sin(9999 * e);
    return t - Math.floor(t);
  },
  h = new Map(),
  x = new __mod_2253.Tap(),
  v = new Map(),
  y = new __mod_2253.bdM(1, 1),
  z = `
varying vec2 vUv;
#include <fog_pars_vertex>
void main() {
  vUv = uv;
  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * mvPosition;
  #include <fog_vertex>
}
`,
  w = `
precision highp float;
uniform sampler2D uMap;
uniform float uOpacity;
uniform float uRadius;
uniform vec2 uSize;
varying vec2 vUv;

#ifdef USE_FOG
  uniform vec3 fogColor;
  uniform float fogNear;
  uniform float fogFar;
  varying float vFogDepth;
#endif

float roundedBox(vec2 p, vec2 b, float r) {
  vec2 q = abs(p) - b + r;
  return min(max(q.x, q.y), 0.0) + length(max(q, 0.0)) - r;
}

void main() {
  vec4 tex = texture2D(uMap, vUv);

  float shortEdge = min(uSize.x, uSize.y);
  float r = uRadius * shortEdge * 0.5;
  vec2 p = (vUv - 0.5) * uSize;
  vec2 halfSize = uSize * 0.5;
  float d = roundedBox(p, halfSize, r);
  float aa = fwidth(d);
  float mask = 1.0 - smoothstep(-aa, aa, d);

  float alpha = mask * uOpacity;

  #ifdef USE_FOG
    float fogFactor = smoothstep(fogNear, fogFar, vFogDepth);
    alpha *= 1.0 - fogFactor;
  #endif

  if (alpha < 0.001) discard;
  gl_FragColor = vec4(tex.rgb, alpha);
  #include <colorspace_fragment>
}
`,
  b = {
    current: null
  };
function S({
  info: e,
  media: t,
  camRef: a,
  cellSize: i,
  viewRange: s,
  imageRadius: n,
  onFocus: u
}) {
  let c,
    f = (0, React.useRef)(null),
    g = (0, React.useRef)(null),
    v = (c = b.current) && c.px === e.px && c.py === e.py && c.pz === e.pz,
    S = (0, React.useRef)(+!!v),
    M = (0, React.useRef)(!1),
    C = (0, React.useMemo)(() => {
      let a = t.width / t.height;
      return new __mod_2253.Pq0(e.size * a, e.size, 1);
    }, [t, e.size]),
    j = (0, React.useMemo)(() => __mod_2253.LlO.merge([__mod_12246.UniformsLib.fog, {
      uMap: {
        value: null
      },
      uOpacity: {
        value: +!!v
      },
      uRadius: {
        value: n
      },
      uSize: {
        value: new __mod_2253.I9Y(1, 1)
      }
    }]), []);
  (0, React.useEffect)(() => {
    var e, a;
    if (h.has(t.url)) {
      M.current = !0;
      return;
    }
    e = t.url, a = () => {
      M.current = !0;
    }, h.get(e) ? a?.() : (x.setCrossOrigin("anonymous"), x.load(e, t => {
      t.minFilter = __mod_2253.$_I, t.magFilter = __mod_2253.k6q, t.generateMipmaps = !0, t.colorSpace = __mod_2253.er$, t.needsUpdate = !0, h.set(e, t), a?.();
    }, void 0, () => {
      console.warn("InfiniteGallery: failed to load", e);
    }));
  }, [t.url]);
  let F = i * (s + 1);
  (0, __mod_81712.D)(() => {
    let o = f.current,
      r = g.current;
    if (!o || !r) return;
    if (!r.uniforms.uMap.value && M.current) {
      let e = h.get(t.url);
      e && (r.uniforms.uMap.value = e, r.needsUpdate = !0);
    }
    if (!r.uniforms.uMap.value) {
      o.visible = !1;
      return;
    }
    let i = a.current;
    if (!i) return;
    let s = e.px - i.x,
      l = e.py - i.y,
      u = e.pz - i.z,
      c = Math.sqrt(s * s + l * l + u * u),
      d = b.current,
      m = d && d.px === e.px && d.py === e.py && d.pz === e.pz;
    S.current = m ? 1 : p(S.current, m || c < F ? 1 : 0, .12), r.uniforms.uOpacity.value = S.current, r.uniforms.uRadius.value = n, r.uniforms.uSize.value.set(C.x, C.y), o.visible = S.current > .01, o.renderOrder = 999 * !!m, r.depthTest = !m;
  });
  let E = (0, React.useCallback)(t => {
    u && (t.stopPropagation(), u({
      px: e.px,
      py: e.py,
      pz: e.pz,
      scaleX: C.x,
      scaleY: C.y
    }));
  }, [e, C, u]);
  return <mesh ref={f} geometry={y} position={[e.px, e.py, e.pz]} scale={C} visible={!1} onClick={E}><shaderMaterial ref={g} vertexShader={z} fragmentShader={w} transparent={!0} depthWrite={!1} fog={!0} side={__mod_2253.$EB} uniforms={j} /></mesh>;
}
function M({
  cx: e,
  cy: t,
  cz: a,
  images: i,
  cellSize: s,
  density: n,
  imageSize: l,
  camRef: u,
  viewRange: c,
  imageRadius: d,
  onFocus: m
}) {
  let f = (0, React.useMemo)(() => function (e, t, a, o, r, i) {
    let s = `${e},${t},${a}|${o}|${r}|${i}`,
      n = v.get(s);
    if (n) return n;
    let l = (e => {
        let t = 0;
        for (let a = 0; a < e.length; a++) t = (t << 5) - t + e.charCodeAt(a) | 0;
        return Math.abs(t);
      })(s),
      u = [];
    for (let n = 0; n < r; n++) {
      let r = l + 7919 * n,
        c = i * (.65 + .7 * g(r + 4));
      u.push({
        id: `${s}-${n}`,
        px: e * o + g(r + 0) * o,
        py: t * o + g(r + 1) * o,
        pz: a * o + g(r + 2) * o,
        size: c,
        imgIdx: Math.floor(1e6 * g(r + 5))
      });
    }
    if (v.set(s, u), v.size > 512) {
      let e = v.keys().next().value;
      void 0 !== e && v.delete(e);
    }
    return u;
  }(e, t, a, s, n, l), [e, t, a, s, n, l]);
  return <>{f.map(e => {
      let t = i[e.imgIdx % i.length];
      return t ? <S info={e} media={t} camRef={u} cellSize={s} viewRange={c} imageRadius={d} onFocus={m} /> : null;
    })}</>;
}
function C({
  images: e,
  cellSize: t,
  density: a,
  imageSize: i,
  viewRange: s,
  dragSpeed: n,
  driftAmount: u,
  friction: c,
  autoZoom: d,
  autoZoomSpeed: m,
  imageRadius: g,
  allowFocus: h
}) {
  let {
      camera: x,
      gl: v
    } = (0, __mod_81712.C)(),
    y = (0, React.useMemo)(() => function (e) {
      let t = [];
      for (let a = -e; a <= e; a++) for (let o = -e; o <= e; o++) for (let r = -e; r <= e; r++) Math.max(Math.abs(a), Math.abs(o), Math.abs(r)) <= e && t.push({
        dx: a,
        dy: o,
        dz: r
      });
      return t;
    }(s + 1), [s]),
    z = (0, React.useRef)({
      vel: {
        x: 0,
        y: 0,
        z: 0
      },
      tgt: {
        x: 0,
        y: 0,
        z: 0
      },
      pos: {
        x: 0,
        y: 0,
        z: 50
      },
      drift: {
        x: 0,
        y: 0
      },
      mouse: {
        x: 0,
        y: 0
      },
      lastMouse: {
        x: 0,
        y: 0
      },
      dragging: !1,
      scrollAccum: 0,
      lastKey: "",
      lastTouches: [],
      lastTouchDist: 0,
      focused: !1,
      focusTarget: null,
      focusLerp: 0,
      preFocusPos: {
        x: 0,
        y: 0,
        z: 0
      },
      dragDistSq: 0
    }),
    w = (0, React.useRef)({
      x: 0,
      y: 0,
      z: 50
    }),
    [S, C] = (0, React.useState)([]),
    j = (0, React.useCallback)(e => {
      let t = z.current;
      if (!(t.dragDistSq > 16)) {
        if (t.focused && t.focusTarget) {
          let a = t.focusTarget;
          if (a.px === e.px && a.py === e.py && a.pz === e.pz) {
            t.focused = !1, t.focusTarget = null, b.current = null;
            return;
          }
          t.focusTarget = e, b.current = e, t.vel = {
            x: 0,
            y: 0,
            z: 0
          }, t.tgt = {
            x: 0,
            y: 0,
            z: 0
          }, t.scrollAccum = 0;
          return;
        }
        t.focused = !0, t.focusTarget = e, b.current = e, t.preFocusPos = {
          ...t.pos
        }, t.vel = {
          x: 0,
          y: 0,
          z: 0
        }, t.tgt = {
          x: 0,
          y: 0,
          z: 0
        }, t.scrollAccum = 0;
      }
    }, []),
    F = (0, React.useCallback)(() => {
      let e = z.current;
      e.focused && (e.focused = !1, e.focusTarget = null, b.current = null);
    }, []);
  return (0, React.useEffect)(() => {
    let e = z.current;
    e.pos = {
      x: x.position.x,
      y: x.position.y,
      z: x.position.z
    };
    let a = Math.floor(e.pos.x / t),
      o = Math.floor(e.pos.y / t),
      r = Math.floor(e.pos.z / t);
    C(y.map(e => ({
      key: `${a + e.dx},${o + e.dy},${r + e.dz}`,
      cx: a + e.dx,
      cy: o + e.dy,
      cz: r + e.dz
    })));
  }, [x, t, y]), (0, React.useEffect)(() => {
    let e = v.domElement,
      t = z.current,
      a = e => {
        t.dragging = !0, t.lastMouse = {
          x: e.clientX,
          y: e.clientY
        }, t.dragDistSq = 0;
      },
      o = () => {
        t.dragging = !1;
      },
      r = a => {
        let o = e.clientWidth || 1,
          r = e.clientHeight || 1;
        if (t.mouse = {
          x: a.clientX / o * 2 - 1,
          y: -(2 * (a.clientY / r)) + 1
        }, t.dragging) {
          let e = a.clientX - t.lastMouse.x,
            o = a.clientY - t.lastMouse.y;
          t.dragDistSq += e * e + o * o, t.focused ? t.dragDistSq > 16 && (t.focused = !1, t.focusTarget = null, b.current = null) : (t.tgt.x -= e * n * .025, t.tgt.y += o * n * .025), t.lastMouse = {
            x: a.clientX,
            y: a.clientY
          };
        }
      },
      i = e => {
        e.preventDefault(), t.focused && (t.focused = !1, t.focusTarget = null, b.current = null), t.scrollAccum += .006 * e.deltaY;
      },
      s = e => {
        if (e.length < 2) return 0;
        let t = e[0].clientX - e[1].clientX,
          a = e[0].clientY - e[1].clientY;
        return Math.sqrt(t * t + a * a);
      },
      l = e => {
        e.preventDefault(), t.lastTouches = Array.from(e.touches), t.lastTouchDist = s(t.lastTouches);
      },
      u = e => {
        e.preventDefault();
        let a = Array.from(e.touches);
        if (1 === a.length && t.lastTouches.length >= 1) {
          let e = a[0],
            o = t.lastTouches[0];
          e && o && (t.focused && (t.focused = !1, t.focusTarget = null, b.current = null), t.tgt.x -= (e.clientX - o.clientX) * n * .02, t.tgt.y += (e.clientY - o.clientY) * n * .02);
        } else if (2 === a.length && t.lastTouchDist > 0) {
          let e = s(a);
          t.focused && (t.focused = !1, t.focusTarget = null, b.current = null), t.scrollAccum += (t.lastTouchDist - e) * .006, t.lastTouchDist = e;
        }
        t.lastTouches = a;
      },
      c = e => {
        t.lastTouches = Array.from(e.touches), t.lastTouchDist = s(t.lastTouches);
      },
      d = () => {
        t.mouse = {
          x: 0,
          y: 0
        }, t.dragging = !1;
      };
    return e.addEventListener("mousedown", a), window.addEventListener("mouseup", o), window.addEventListener("mousemove", r), e.addEventListener("mouseleave", d), e.addEventListener("wheel", i, {
      passive: !1
    }), e.addEventListener("touchstart", l, {
      passive: !1
    }), e.addEventListener("touchmove", u, {
      passive: !1
    }), e.addEventListener("touchend", c, {
      passive: !1
    }), () => {
      e.removeEventListener("mousedown", a), window.removeEventListener("mouseup", o), window.removeEventListener("mousemove", r), e.removeEventListener("mouseleave", d), e.removeEventListener("wheel", i), e.removeEventListener("touchstart", l), e.removeEventListener("touchmove", u), e.removeEventListener("touchend", c);
    };
  }, [v, n]), (0, __mod_81712.D)(() => {
    let e = z.current;
    if (e.focused && e.focusTarget) {
      let a = e.focusTarget,
        o = 1.2 * Math.max(a.scaleX, a.scaleY),
        r = a.px,
        i = a.py,
        s = a.pz + o;
      e.pos.x = p(e.pos.x, r, .08), e.pos.y = p(e.pos.y, i, .08), e.pos.z = p(e.pos.z, s, .08), e.drift.x = p(e.drift.x, 0, .15), e.drift.y = p(e.drift.y, 0, .15), x.position.set(e.pos.x + e.drift.x, e.pos.y + e.drift.y, e.pos.z), e.vel = {
        x: 0,
        y: 0,
        z: 0
      }, e.tgt = {
        x: 0,
        y: 0,
        z: 0
      }, e.scrollAccum = 0, w.current = {
        x: e.pos.x,
        y: e.pos.y,
        z: e.pos.z
      };
      let n = Math.floor(e.pos.x / t),
        l = Math.floor(e.pos.y / t),
        u = Math.floor(e.pos.z / t),
        c = `${n},${l},${u}`;
      c !== e.lastKey && (e.lastKey = c, C(y.map(e => ({
        key: `${n + e.dx},${l + e.dy},${u + e.dz}`,
        cx: n + e.dx,
        cy: l + e.dy,
        cz: u + e.dz
      }))));
      return;
    }
    let a = f(e.pos.z / 50, .3, 2);
    e.dragging || (e.drift.x = p(e.drift.x, e.mouse.x * u * a, .12), e.drift.y = p(e.drift.y, e.mouse.y * u * a, .12)), e.tgt.z += e.scrollAccum, e.scrollAccum *= .8, d && (e.pos.z -= m), e.tgt.x = f(e.tgt.x, -3.2, 3.2), e.tgt.y = f(e.tgt.y, -3.2, 3.2), e.tgt.z = f(e.tgt.z, -3.2, 3.2), e.vel.x = p(e.vel.x, e.tgt.x, .16), e.vel.y = p(e.vel.y, e.tgt.y, .16), e.vel.z = p(e.vel.z, e.tgt.z, .16), e.pos.x += e.vel.x, e.pos.y += e.vel.y, e.pos.z += e.vel.z, x.position.set(e.pos.x + e.drift.x, e.pos.y + e.drift.y, e.pos.z), e.tgt.x *= c, e.tgt.y *= c, e.tgt.z *= c, w.current = {
      x: e.pos.x,
      y: e.pos.y,
      z: e.pos.z
    };
    let o = Math.floor(e.pos.x / t),
      r = Math.floor(e.pos.y / t),
      i = Math.floor(e.pos.z / t),
      s = `${o},${r},${i}`;
    s !== e.lastKey && (e.lastKey = s, C(y.map(e => ({
      key: `${o + e.dx},${r + e.dy},${i + e.dz}`,
      cx: o + e.dx,
      cy: r + e.dy,
      cz: i + e.dz
    }))));
  }), <>{h && <mesh position={[x.position.x, x.position.y, x.position.z - 400]} onClick={F}><planeGeometry args={[1e4, 1e4]} /><meshBasicMaterial visible={!1} /></mesh>}{S.map(r => <M cx={r.cx} cy={r.cy} cz={r.cz} images={e} cellSize={t} density={a} imageSize={i} camRef={w} viewRange={s} imageRadius={g} onFocus={h ? j : null} />)}</>;
}
let j = [{
    url: "/demo-media/abstract-rose-balance.webp",
    width: 1536,
    height: 1024
  }, {
    url: "/demo-media/abstract-pink-eclipse.webp",
    width: 1536,
    height: 1024
  }, {
    url: "/demo-media/abstract-amber-loop.webp",
    width: 1536,
    height: 1024
  }, {
    url: "/demo-media/abstract-coral-fold.webp",
    width: 1536,
    height: 1024
  }, {
    url: "/demo-media/abstract-fuchsia-wave.webp",
    width: 1536,
    height: 1024
  }, {
    url: "/demo-media/abstract-orchid-orbit.webp",
    width: 1536,
    height: 1024
  }, {
    url: "/demo-media/abstract-plum-ribbon.webp",
    width: 1536,
    height: 1024
  }, {
    url: "/demo-media/abstract-violet-steps.webp",
    width: 1536,
    height: 1024
  }],
  F = () => Math.min(window.devicePixelRatio || 1, 1.5),
  E = e => {
    let t = window.matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`);
    return t.addEventListener("change", e, {
      once: !0
    }), () => t.removeEventListener("change", e);
  },
  T = () => 1,
  k = e => {
    let t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
    return t ? `#${t[1]}${t[2]}${t[3]}` : "#ffffff";
  },
  $ = ({
    width: e = "100%",
    height: t = "100%",
    className: a,
    images: i,
    density: s = 5,
    imageSize: n = 14,
    cellSize: l = 110,
    viewRange: d = 2,
    fogNear: m = 120,
    fogFar: f = 320,
    dragSpeed: p = 1,
    driftAmount: g = 8,
    friction: h = .9,
    autoZoom: x = !1,
    autoZoomSpeed: v = .5,
    imageRadius: y = .06,
    allowImageFocusOnClick: z = !0,
    backgroundColor: w = "#000000",
    fogColor: b = "#000000"
  }) => {
    let S = i && i.length > 0 ? i : j,
      M = k(w),
      $ = k(b),
      D = (0, React.useSyncExternalStore)(E, F, T);
    return <div className={(0, __mod_90650.cn)("relative overflow-hidden touch-none", a)} style={{
      width: e,
      height: t
    }}><__mod_3907.Hl className="absolute inset-0 h-full w-full" camera={{
        position: [0, 0, 50],
        fov: 60,
        near: 1,
        far: 500
      }} dpr={D} flat={!0} gl={{
        antialias: !1,
        powerPreference: "high-performance"
      }}><color attach="background" args={[M]} /><fog attach="fog" args={[$, m, f]} /><C images={S} cellSize={l} density={s} imageSize={n} viewRange={d} dragSpeed={p} driftAmount={g} friction={h} autoZoom={x} autoZoomSpeed={v} imageRadius={y} allowFocus={z} /></__mod_3907.Hl></div>;
  };
$.displayName = "InfiniteGallery";
let D = () => {
  let [e, t] = (0, __mod_90761.I)(),
    {
      resolvedTheme: a
    } = (0, __mod_30701.D)(),
    [l, u] = (0, React.useState)(5),
    [c, d] = (0, React.useState)(14),
    [m, f] = (0, React.useState)(110),
    [p, g] = (0, React.useState)(2),
    [h, x] = (0, React.useState)(.06),
    [v, y] = (0, React.useState)(120),
    [z, w] = (0, React.useState)(320),
    [b, S] = (0, React.useState)(1),
    [M, C] = (0, React.useState)(8),
    [j, F] = (0, React.useState)(.9),
    [E, T] = (0, React.useState)(!1),
    [k, D] = (0, React.useState)(.5),
    [R, A] = (0, React.useState)(!0),
    [L, N] = (0, React.useState)(null),
    [I, P] = (0, React.useState)(null),
    U = (0, React.useMemo)(() => null !== L ? L : "dark" === a ? "#0a0a0a" : "#FFFFFF", [a, L]),
    _ = (0, React.useMemo)(() => null !== I ? I : "dark" === a ? "#0a0a0a" : "#FFFFFF", [a, I]);
  return <div><__mod_56388.Bg /><__mod_56388.VX><__mod_56388.Ec><__mod_56388.Ch onRefresh={t}><div className="relative h-full w-full"><$ width="100%" height="100%" density={l} imageSize={c} cellSize={m} viewRange={p} fogNear={v} fogFar={z} dragSpeed={b} driftAmount={M} friction={j} autoZoom={E} autoZoomSpeed={k} imageRadius={h} allowImageFocusOnClick={R} backgroundColor={U} fogColor={_} /></div></__mod_56388.Ch><__mod_56388.IH><__mod_56388.yt title="Density" value={l} onChange={u} min={1} max={15} step={1} /><__mod_56388.yt title="Image Size" value={c} onChange={d} min={4} max={40} step={1} /><__mod_56388.yt title="Cell Size" value={m} onChange={f} min={30} max={300} step={5} /><__mod_56388.yt title="View Range" value={p} onChange={g} min={1} max={4} step={1} /><__mod_56388.yt title="Image Radius" value={h} onChange={x} min={0} max={1} step={.01} /><__mod_56388.yt title="Drag Speed" value={b} onChange={S} min={.1} max={5} step={.1} /><__mod_56388.yt title="Drift Amount" value={M} onChange={C} min={0} max={20} step={.5} /><__mod_56388.yt title="Friction" value={j} onChange={F} min={0} max={1} step={.01} /><__mod_56388.tl title="Auto Zoom" checked={E} onChange={T} /><__mod_56388.yt title="Auto Zoom Speed" value={k} onChange={D} min={.1} max={3} step={.1} /><__mod_56388.tl title="Focus on Click" checked={R} onChange={A} /><__mod_56388.yt title="Fog Near" value={v} onChange={y} min={10} max={500} step={5} /><__mod_56388.yt title="Fog Far" value={z} onChange={w} min={50} max={800} step={10} /><__mod_56388.W7 title="Background" value={U} onChange={e => N(e)} /><__mod_56388.W7 title="Fog Color" value={_} onChange={e => P(e)} /></__mod_56388.IH><__mod_56388.Ub data={[{
          name: "width",
          type: "string | number",
          default: '"100%"',
          description: "Container width"
        }, {
          name: "height",
          type: "string | number",
          default: '"100%"',
          description: "Container height"
        }, {
          name: "className",
          type: "string",
          default: '""',
          description: "Additional CSS classes for styling"
        }, {
          name: "images",
          type: "GalleryImage[]",
          default: "DEFAULT_IMAGES",
          description: "Array of images with url + intrinsic dimensions ({ url, width, height })"
        }, {
          name: "density",
          type: "number",
          default: "5",
          description: "Number of images per grid cell (1–15)"
        }, {
          name: "imageSize",
          type: "number",
          default: "14",
          description: "Base size of each image plane in world units (4–40)"
        }, {
          name: "cellSize",
          type: "number",
          default: "110",
          description: "Grid cell size in world units (30–300)"
        }, {
          name: "viewRange",
          type: "number",
          default: "2",
          description: "How far (in cells) to render around the camera (1–4)"
        }, {
          name: "fogNear",
          type: "number",
          default: "120",
          description: "Fog start distance (10–500)"
        }, {
          name: "fogFar",
          type: "number",
          default: "320",
          description: "Fog end distance (50–800)"
        }, {
          name: "dragSpeed",
          type: "number",
          default: "1",
          description: "Drag / scroll sensitivity (0.1–5)"
        }, {
          name: "driftAmount",
          type: "number",
          default: "8",
          description: "Mouse-follow parallax drift amount (0–20)"
        }, {
          name: "friction",
          type: "number",
          default: "0.9",
          description: "Velocity decay (0 = instant stop, 1 = never stops)"
        }, {
          name: "autoZoom",
          type: "boolean",
          default: "false",
          description: "Automatically zoom forward continuously"
        }, {
          name: "autoZoomSpeed",
          type: "number",
          default: "0.5",
          description: "Speed of auto-zoom in world units per frame (0.1–3)"
        }, {
          name: "imageRadius",
          type: "number",
          default: "0.06",
          description: "Border radius on images (0–1, fraction of short edge)"
        }, {
          name: "allowImageFocusOnClick",
          type: "boolean",
          default: "true",
          description: "Allow clicking images to focus/zoom on them"
        }, {
          name: "backgroundColor",
          type: "string",
          default: '"#000000"',
          description: "Background color (hex)"
        }, {
          name: "fogColor",
          type: "string",
          default: '"#000000"',
          description: "Fog color, usually matches background (hex)"
        }]} /></__mod_56388.Ec><__mod_56388.lT><__mod_56388.Gv /></__mod_56388.lT></__mod_56388.VX></div>;
};

export default D;

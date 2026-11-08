import * as __mod_2253 from "../_helpers/2253";
import * as __mod_77870 from "../_helpers/77870";
import * as __mod_81712 from "../_helpers/81712";
import * as __mod_90745 from "../_helpers/90745";
/**
 * Ascii Cursor
 * A cursor that leaves a trail of ASCII characters
 * slug: ascii-cursor
 * category: cursor
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let r;
function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
new __mod_2253.I9Y(), new __mod_2253.I9Y();
function f(e, t) {
  if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
var c = function e(t, n, r) {
    var s = this;
    f(this, e), u(this, "dot2", function (e, t) {
      return s.x * e + s.y * t;
    }), u(this, "dot3", function (e, t, n) {
      return s.x * e + s.y * t + s.z * n;
    }), this.x = t, this.y = n, this.z = r;
  },
  d = [new c(1, 1, 0), new c(-1, 1, 0), new c(1, -1, 0), new c(-1, -1, 0), new c(1, 0, 1), new c(-1, 0, 1), new c(1, 0, -1), new c(-1, 0, -1), new c(0, 1, 1), new c(0, -1, 1), new c(0, 1, -1), new c(0, -1, -1)],
  h = [151, 160, 137, 91, 90, 15, 131, 13, 201, 95, 96, 53, 194, 233, 7, 225, 140, 36, 103, 30, 69, 142, 8, 99, 37, 240, 21, 10, 23, 190, 6, 148, 247, 120, 234, 75, 0, 26, 197, 62, 94, 252, 219, 203, 117, 35, 11, 32, 57, 177, 33, 88, 237, 149, 56, 87, 174, 20, 125, 136, 171, 168, 68, 175, 74, 165, 71, 134, 139, 48, 27, 166, 77, 146, 158, 231, 83, 111, 229, 122, 60, 211, 133, 230, 220, 105, 92, 41, 55, 46, 245, 40, 244, 102, 143, 54, 65, 25, 63, 161, 1, 216, 80, 73, 209, 76, 132, 187, 208, 89, 18, 169, 200, 196, 135, 130, 116, 188, 159, 86, 164, 100, 109, 198, 173, 186, 3, 64, 52, 217, 226, 250, 124, 123, 5, 202, 38, 147, 118, 126, 255, 82, 85, 212, 207, 206, 59, 227, 47, 16, 58, 17, 182, 189, 28, 42, 223, 183, 170, 213, 119, 248, 152, 2, 44, 154, 163, 70, 221, 153, 101, 155, 167, 43, 172, 9, 129, 22, 39, 253, 19, 98, 108, 110, 79, 113, 224, 232, 178, 185, 112, 104, 218, 246, 97, 228, 251, 34, 242, 193, 238, 210, 144, 12, 191, 179, 162, 241, 81, 51, 145, 235, 249, 14, 239, 107, 49, 192, 214, 31, 181, 199, 106, 157, 184, 84, 204, 176, 115, 121, 50, 45, 127, 4, 150, 254, 138, 236, 205, 93, 222, 114, 67, 29, 24, 72, 243, 141, 128, 195, 78, 66, 215, 61, 156, 180],
  p = Array(512),
  m = Array(512),
  w = 0;
(w = Math.floor(w)) < 256 && (w |= w << 8);
for (var b, v = 0; v < 256; v++) b = 1 & v ? h[v] ^ 255 & w : h[v] ^ w >> 8 & 255, p[v] = p[v + 256] = b, m[v] = m[v + 256] = d[b % 12];
function y(e) {
  var t = function (e) {
    if ("number" == typeof e) e = Math.abs(e);else if ("string" == typeof e) {
      e = 0;
      for (var n = 0; n < e.length; n++) e = (e + (n + 1) * (e.charCodeAt(n) % 96)) % 0x7fffffff;
    }
    return 0 === e && (e = 311), e;
  }(e);
  return function () {
    var e = 48271 * t % 0x7fffffff;
    return t = e, e / 0x7fffffff;
  };
}
new function e(t) {
  var n = this;
  f(this, e), u(this, "seed", 0), u(this, "init", function (e) {
    n.seed = e, n.value = y(e);
  }), u(this, "value", y(this.seed)), this.init(t);
}(Math.random());
__mod_2253.LoY;
__mod_77870;
let g = (0, React.createContext)(null),
  M = e => (2 & e.getAttributes()) == 2,
  j = (0, React.memo)((0, React.forwardRef)(({
    children: e,
    camera: t,
    scene: n,
    resolutionScale: r,
    enabled: u = !0,
    renderPriority: f = 1,
    autoClear: c = !0,
    depthBuffer: d,
    enableNormalPass: h,
    stencilBuffer: p,
    multisampling: m = 8,
    frameBufferType: w = __mod_2253.ix0
  }, b) => {
    let {
        gl: v,
        scene: y,
        camera: j,
        size: x
      } = (0, __mod_81712.C)(),
      P = n || y,
      C = t || j,
      [S, E, k] = (0, React.useMemo)(() => {
        let e = new __mod_90745.s0(v, {
          depthBuffer: d,
          stencilBuffer: p,
          multisampling: m,
          frameBufferType: w
        });
        e.addPass(new __mod_90745.AH(P, C));
        let t = null,
          n = null;
        return h && ((n = new __mod_90745.Xe(P, C)).enabled = !1, e.addPass(n), void 0 !== r && ((t = new __mod_90745.SP({
          normalBuffer: n.texture,
          resolutionScale: r
        })).enabled = !1, e.addPass(t))), [e, n, t];
      }, [C, v, d, p, m, w, P, h, r]);
    (0, React.useEffect)(() => S?.setSize(x.width, x.height), [S, x]), (0, __mod_81712.D)((e, t) => {
      if (u) {
        let e = v.autoClear;
        v.autoClear = c, p && !c && v.clearStencil(), S.render(t), v.autoClear = e;
      }
    }, u ? f : 0);
    let B = (0, React.useRef)(null);
    (0, React.useLayoutEffect)(() => {
      let e = [],
        t = B.current.__r3f;
      if (t && S) {
        let n = t.children;
        for (let t = 0; t < n.length; t++) {
          let r = n[t].object;
          if (r instanceof __mod_90745.Mj) {
            let s = [r];
            if (!M(r)) {
              let e = null;
              for (; (e = n[t + 1]?.object) instanceof __mod_90745.Mj && !M(e);) s.push(e), t++;
            }
            let i = new __mod_90745.Vu(C, ...s);
            e.push(i);
          } else r instanceof __mod_90745.oF && e.push(r);
        }
        for (let t of e) S?.addPass(t);
        E && (E.enabled = !0), k && (k.enabled = !0);
      }
      return () => {
        for (let t of e) S?.removePass(t);
        E && (E.enabled = !1), k && (k.enabled = !1);
      };
    }, [S, e, C, E, k]), (0, React.useEffect)(() => {
      let e = v.toneMapping;
      return v.toneMapping = __mod_2253.y_p, () => {
        v.toneMapping = e;
      };
    }, [v]);
    let L = (0, React.useMemo)(() => ({
      composer: S,
      normalPass: E,
      downSamplingPass: k,
      resolutionScale: r,
      camera: C,
      scene: P
    }), [S, E, k, r, C, P]);
    return (0, React.useImperativeHandle)(b, () => S, [S]), <g.Provider value={L}><group ref={B}>{e}</group></g.Provider>;
  })),
  x = 0,
  P = new WeakMap(),
  C = (e, t) => function ({
    blendFunction: n = t?.blendFunction,
    opacity: r = t?.opacity,
    ...a
  }) {
    let l = P.get(e);
    if (!l) {
      let t = `@react-three/postprocessing/${e.name}-${x++}`;
      (0, __mod_81712.e)({
        [t]: e
      }), P.set(e, l = t);
    }
    let u = (0, __mod_81712.C)(e => e.camera),
      f = React.useMemo(() => [...(t?.args ?? []), ...(a.args ?? [{
        ...t,
        ...a
      }])], [JSON.stringify(a)]);
    return <l camera={u} blendMode-blendFunction={n} blendMode-opacity-value={r} {...a} args={f} />;
  };
__mod_90745.Mj;
let S = C(__mod_90745.bv, {
    blendFunction: 0
  }),
  E = C(__mod_90745.t$);
__mod_90745.i, __mod_90745.hH;
var k = ((r = k || {})[r.Linear = 0] = "Linear", r[r.Radial = 1] = "Radial", r[r.MirroredLinear = 2] = "MirroredLinear", r);
__mod_90745.Mj, __mod_90745.To;
__mod_90745.Mj;
__mod_90745.Mj;
__mod_90745.Mj;

export { S as mK };
export { E as E8 };
export { j as s0 };

/* ---- 本地补齐：原抓取只含后处理效果库，缺 React 组件 ---- */
import * as __RBReact from "react";

function AsciiCursor() {
  const React = __RBReact;
  const [chars, setChars] = React.useState([]);
  const ref = React.useRef(null);
  const idRef = React.useRef(0);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const glyphs = "01<>[]{}/\\|=+-*#@%&$";
    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      const x = e.clientX - r.left;
      const y = e.clientY - r.top;
      const ch = glyphs[Math.floor(Math.random() * glyphs.length)];
      const id = idRef.current++;
      setChars((prev) => {
        const next = prev.concat({ id, x, y, ch, born: Date.now() });
        return next.length > 60 ? next.slice(next.length - 60) : next;
      });
    };
    el.addEventListener("pointermove", onMove);
    const timer = setInterval(() => {
      const now = Date.now();
      setChars((prev) => prev.filter((c) => now - c.born < 1200));
    }, 200);
    return () => {
      el.removeEventListener("pointermove", onMove);
      clearInterval(timer);
    };
  }, []);

  return React.createElement(
    "div",
    {
      ref,
      style: {
        position: "relative",
        width: "100%",
        height: "100vh",
        minHeight: 420,
        overflow: "hidden",
        background: "#0a0a0f",
        cursor: "crosshair",
        touchAction: "none",
      },
    },
    React.createElement(
      "p",
      {
        style: {
          position: "absolute",
          top: 20,
          left: 0,
          right: 0,
          textAlign: "center",
          color: "#7de2d1",
          font: "600 14px Inter, system-ui",
          letterSpacing: "0.08em",
        },
      },
      "ASCII CURSOR · 移动鼠标留下字符"
    ),
    chars.map((c) =>
      React.createElement(
        "span",
        {
          key: c.id,
          style: {
            position: "absolute",
            left: c.x,
            top: c.y,
            transform: "translate(-50%,-50%)",
            color: "#40ffaa",
            font: "700 18px ui-monospace, monospace",
            opacity: 0.9,
            pointerEvents: "none",
          },
        },
        c.ch
      )
    )
  );
}

AsciiCursor.displayName = "AsciiCursor";
export default AsciiCursor;

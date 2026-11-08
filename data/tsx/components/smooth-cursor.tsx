import * as __mod_90761 from "../_helpers/90761";
import * as __mod_30701 from "../_helpers/30701";
import * as __mod_56388 from "../_helpers/56388";
/**
 * Smooth Cursor
 * A smooth, springy trail that follows the cursor
 * slug: smooth-cursor
 * category: cursor
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let s = ({
  className: e = "",
  pointsCount: t = 40,
  lineWidth: r = .3,
  springStrength: l = .4,
  dampening: a = .5,
  color: o = "#000000",
  blur: s = 0,
  mixBlendMode: u = "source-over",
  velocityScale: c = !1,
  trailOpacity: d = 1,
  smoothFactor: m = 1
}) => {
  let h = Math.min(Math.max(a, .1), .99),
    v = (0, React.useRef)(null),
    f = (0, React.useRef)(null),
    x = (0, React.useRef)([]),
    p = (0, React.useRef)({
      x: 0,
      y: 0
    }),
    g = (0, React.useRef)(!0),
    y = (0, React.useRef)(1),
    b = (0, React.useRef)(null),
    C = (0, React.useRef)(null),
    w = (0, React.useCallback)(() => {
      b.current = requestAnimationFrame(() => {
        C.current?.();
      });
    }, []);
  (0, React.useEffect)(() => {
    let e = v.current;
    e && (e.style.filter = s > 0 ? `blur(${s}px)` : "none");
  }, [s]);
  let j = (0, React.useCallback)(() => {
      let e = v.current;
      e && (e.width = e.offsetWidth, e.height = e.offsetHeight, p.current = {
        x: .5 * e.offsetWidth,
        y: .5 * e.offsetHeight
      }, x.current = Array.from({
        length: t
      }, () => ({
        x: p.current.x,
        y: p.current.y,
        vx: 0,
        vy: 0
      })));
    }, [t]),
    k = (0, React.useCallback)((e, t) => {
      p.current.x = e, p.current.y = t;
    }, []),
    S = (0, React.useCallback)(e => {
      let t = v.current;
      if (!t) return;
      let r = t.getBoundingClientRect();
      k(e.clientX - r.left, e.clientY - r.top);
    }, [k]),
    E = (0, React.useCallback)(e => {
      let t = v.current;
      if (!t || 0 === e.touches.length) return;
      let r = t.getBoundingClientRect();
      k(e.touches[0].clientX - r.left, e.touches[0].clientY - r.top);
    }, [k]),
    L = (0, React.useCallback)(e => {
      let t = v.current;
      if (!t) return;
      let r = t.getBoundingClientRect();
      k(e.clientX - r.left, e.clientY - r.top);
    }, [k]),
    N = (0, React.useCallback)(() => {
      g.current = !0;
    }, []),
    B = (0, React.useCallback)(() => {
      g.current = !1;
    }, []);
  return (0, React.useEffect)(() => {
    C.current = () => {
      let e = v.current,
        n = f.current;
      if (!e || !n) return;
      n.clearRect(0, 0, e.width, e.height), x.current.forEach((e, t) => {
        let r = 0 === t ? p.current : x.current[t - 1],
          n = 0 === t ? .4 * l : l;
        e.vx += (r.x - e.x) * n, e.vy += (r.y - e.y) * n, e.vx *= h, e.vy *= h, e.x += e.vx, e.y += e.vy;
      });
      let a = +!!g.current;
      y.current += (a - y.current) * .15, n.globalCompositeOperation = u, n.globalAlpha = y.current * d, n.strokeStyle = o, n.lineCap = "round", n.lineJoin = "round", n.beginPath(), n.moveTo(x.current[0].x, x.current[0].y);
      for (let e = 1; e < x.current.length - 1; e++) {
        let l = 1;
        if (c && e > 0) {
          let t = x.current[e];
          l = 1 + Math.min(.5 * Math.sqrt(t.vx * t.vx + t.vy * t.vy), 2);
        }
        let a = .5 * (x.current[e].x + x.current[e + 1].x) * m + x.current[e].x * (1 - m),
          i = .5 * (x.current[e].y + x.current[e + 1].y) * m + x.current[e].y * (1 - m);
        n.quadraticCurveTo(x.current[e].x, x.current[e].y, a, i), n.lineWidth = r * (t - e) * l, n.stroke();
      }
      n.lineTo(x.current[x.current.length - 1].x, x.current[x.current.length - 1].y), n.stroke(), n.globalAlpha = 1, n.globalCompositeOperation = "source-over", w();
    };
  }, [t, r, l, h, o, s, u, c, d, m, w]), (0, React.useEffect)(() => {
    let e = v.current;
    if (!e) return;
    let t = e.getContext("2d");
    if (t) return f.current = t, j(), w(), window.addEventListener("mousemove", S), window.addEventListener("touchmove", E), window.addEventListener("click", L), window.addEventListener("resize", j), document.addEventListener("mouseenter", N), document.addEventListener("mouseleave", B), () => {
      null !== b.current && cancelAnimationFrame(b.current), window.removeEventListener("mousemove", S), window.removeEventListener("touchmove", E), window.removeEventListener("click", L), window.removeEventListener("resize", j), document.removeEventListener("mouseenter", N), document.removeEventListener("mouseleave", B);
    };
  }, [S, E, L, j, N, B, w]), <div className={`fixed inset-0 w-full h-full pointer-events-none z-9999 ${e}`}><canvas ref={v} className="w-full h-full block" /></div>;
};
s.displayName = "SmoothCursor";
let u = () => {
  let [e, t] = (0, __mod_90761.I)(),
    {
      resolvedTheme: r
    } = (0, __mod_30701.D)(),
    [u, c] = (0, React.useState)(60),
    [d, m] = (0, React.useState)(1),
    [h, v] = (0, React.useState)(.4),
    [f, x] = (0, React.useState)(.5),
    [p, g] = (0, React.useState)(null),
    [y, b] = (0, React.useState)(9),
    [C, w] = (0, React.useState)("source-over"),
    [j, k] = (0, React.useState)(!1),
    [S, E] = (0, React.useState)(.1),
    [L, N] = (0, React.useState)(2),
    B = (0, React.useMemo)(() => null !== p ? p : "dark" === r ? "#ffffff" : "#000000", [r, p]);
  return <div><__mod_56388.Bg /><__mod_56388.VX><__mod_56388.Ec><__mod_56388.Ch onRefresh={t}><div className="relative rounded-lg overflow-hidden flex items-center justify-center"><div className="text-center z-10 pointer-events-none"><h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Move your cursor</h3><p className="text-gray-600 dark:text-gray-400 text-xs">The smooth trail will follow</p></div><s pointsCount={u} lineWidth={d} springStrength={h} dampening={f} color={B} blur={y} mixBlendMode={C} velocityScale={j} trailOpacity={S} smoothFactor={L} /></div></__mod_56388.Ch><__mod_56388.IH><__mod_56388.yt title="Points Count" value={u} onChange={e => {
            c(e), t();
          }} min={10} max={80} step={1} /><__mod_56388.yt title="Line Width" value={d} onChange={e => {
            m(e), t();
          }} min={.1} max={1} step={.05} /><__mod_56388.yt title="Smooth Factor" value={L} onChange={e => {
            N(e), t();
          }} min={.1} max={2} step={.1} /><__mod_56388.tl title="Velocity Scale" checked={j} onChange={e => {
            k(e), t();
          }} /><__mod_56388.yt title="Spring Strength" value={h} onChange={e => {
            v(e), t();
          }} min={.1} max={.5} step={.05} /><__mod_56388.yt title="Dampening" value={f} onChange={e => {
            x(e), t();
          }} min={.1} max={.7} step={.05} /><__mod_56388.W7 title="Color" value={B} onChange={e => {
            g(e), t();
          }} /><__mod_56388.yt title="Blur" value={y} onChange={e => {
            b(e), t();
          }} min={0} max={10} step={.5} /><__mod_56388.yt title="Trail Opacity" value={S} onChange={e => {
            E(e), t();
          }} min={.1} max={1} step={.05} /><__mod_56388.bg title="Mix Blend Mode" value={C} options={[{
            label: "Normal",
            value: "source-over"
          }, {
            label: "Multiply",
            value: "multiply"
          }, {
            label: "Screen",
            value: "screen"
          }, {
            label: "Overlay",
            value: "overlay"
          }, {
            label: "Darken",
            value: "darken"
          }, {
            label: "Lighten",
            value: "lighten"
          }, {
            label: "Color Dodge",
            value: "color-dodge"
          }, {
            label: "Color Burn",
            value: "color-burn"
          }, {
            label: "Hard Light",
            value: "hard-light"
          }, {
            label: "Soft Light",
            value: "soft-light"
          }, {
            label: "Difference",
            value: "difference"
          }, {
            label: "Exclusion",
            value: "exclusion"
          }]} onChange={e => {
            w(e), t();
          }} /></__mod_56388.IH><__mod_56388.Ub data={[{
          name: "className",
          type: "string",
          default: '""',
          description: "Additional CSS classes for the container."
        }, {
          name: "pointsCount",
          type: "number",
          default: "40",
          description: "Number of trail points that follow the cursor."
        }, {
          name: "lineWidth",
          type: "number",
          default: "0.3",
          description: "Width factor for the trail line. Higher values create thicker trails."
        }, {
          name: "springStrength",
          type: "number",
          default: "0.4",
          description: "Spring force strength. Higher values make the trail follow faster."
        }, {
          name: "dampening",
          type: "number",
          default: "0.5",
          description: "Dampening/friction factor. Lower values create more fluid motion."
        }, {
          name: "color",
          type: "string",
          default: '"#000000"',
          description: "Color of the cursor trail (hex, rgb, or named color)."
        }, {
          name: "blur",
          type: "number",
          default: "0",
          description: "Blur amount in pixels. Creates a glowy, ethereal effect."
        }, {
          name: "mixBlendMode",
          type: "GlobalCompositeOperation",
          default: '"source-over"',
          description: "Canvas blend mode for the trail. Options include 'multiply', 'screen', 'overlay', 'difference', etc."
        }, {
          name: "velocityScale",
          type: "boolean",
          default: "false",
          description: "Makes the trail dynamically thicker when moving faster, creating a reactive effect."
        }, {
          name: "trailOpacity",
          type: "number",
          default: "1",
          description: "Base opacity for the entire trail (0-1). Useful for subtle effects."
        }, {
          name: "smoothFactor",
          type: "number",
          default: "1",
          description: "Controls curve smoothness. Higher values create smoother curves, lower values create more angular paths."
        }]} /></__mod_56388.Ec><__mod_56388.lT><__mod_56388.Gv /></__mod_56388.lT></__mod_56388.VX></div>;
};

export default u;

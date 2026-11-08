import * as __mod_10064 from "../_helpers/10064";
import * as __mod_90761 from "../_helpers/90761";
import * as __mod_30701 from "../_helpers/30701";
import * as __mod_56388 from "../_helpers/56388";
/**
 * Particle Text
 * Text made of particles that scatter from the cursor
 * slug: particle-text
 * category: animation
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

"use strict";

__mod_10064;
let o = ({
  text: e = "brilliant.",
  className: t = "",
  colors: n = ["#40ffaa", "#40aaff", "#ff40aa", "#aa40ff"],
  particleSize: i = 2,
  particleGap: a = 2,
  mouseControls: l = {
    enabled: !0,
    radius: 150,
    strength: 5
  },
  backgroundColor: o = "transparent",
  fontFamily: c = "sans-serif",
  fontSize: u = 200,
  fontWeight: d = "bold",
  friction: f = .75,
  ease: h = .05,
  autoFit: m = !0
}) => {
  let x = (0, React.useRef)(null),
    v = (0, React.useRef)(null),
    p = (0, React.useRef)([]),
    g = (0, React.useRef)({
      x: -1e3,
      y: -1e3,
      isActive: !1
    }),
    y = (0, React.useRef)(0),
    b = (0, React.useRef)(null),
    w = (0, React.useRef)(1),
    C = (0, React.useRef)(u),
    j = (0, React.useCallback)((e, t, n, r) => {
      let i = w.current,
        a = 40 * i,
        s = n - 2 * a,
        l = r - 2 * a,
        o = 10 * i,
        f = u * i;
      for (; o <= f;) {
        let n = Math.floor((o + f) / 2);
        e.font = `${d} ${n}px ${c}`, e.measureText(t).width <= s && n <= l ? (h = n, o = n + 1) : f = n - 1;
      }
      return o / i;
    }, [u, d, c]);
  return (0, React.useEffect)(() => {
    let t = x.current,
      r = v.current;
    if (!t || !r) return;
    let s = t.getContext("2d");
    if (!s) return;
    let S = () => {
      let l = window.devicePixelRatio || 1;
      w.current = l, t.width = r.clientWidth * l, t.height = r.clientHeight * l;
      m && (o = j(s, e, t.width, t.height)), C.current = u;
      let f = u * l,
        h = document.createElement("canvas");
      h.width = t.width, h.height = t.height;
      let x = h.getContext("2d");
      if (!x) return;
      x.font = `${d} ${f}px ${c}`, x.textAlign = "center", x.textBaseline = "middle", x.fillStyle = "#ffffff", x.fillText(e, t.width / 2, t.height / 2);
      let v = x.getImageData(0, 0, t.width, t.height).data,
        g = [],
        y = Math.max(1, Math.floor((i + a) * l));
      for (let e = 0; e < t.height; e += y) for (let r = 0; r < t.width; r += y) if (v[(e * t.width + r) * 4 + 3] > 128) {
        let a = n[Math.floor(Math.random() * n.length)];
        g.push({
          x: Math.random() * t.width,
          y: Math.random() * t.height,
          originX: r,
          originY: e,
          vx: 0,
          vy: 0,
          color: a,
          size: i * l
        });
      }
      p.current = g;
    };
    S();
    let E = () => {
      let e = w.current;
      s.clearRect(0, 0, t.width, t.height), "transparent" !== o && (s.fillStyle = o, s.fillRect(0, 0, t.width, t.height));
      let n = p.current,
        r = g.current,
        {
          radius: i = 150,
          strength: a = 5
        } = l,
        c = i * e;
      for (let t = 0; t < n.length; t++) {
        let i = n[t],
          l = i.originX - i.x,
          o = i.originY - i.y,
          u = 0,
          d = 0;
        if (r.isActive) {
          let t = r.x * e - i.x,
            n = r.y * e - i.y,
            s = Math.sqrt(t * t + n * n);
          if (s < c) {
            let e = (c - s) / c,
              r = Math.atan2(n, t);
            u = -Math.cos(r) * e * a * 5, d = -Math.sin(r) * e * a * 5;
          }
        }
        i.vx += l * h + u, i.vy += o * h + d, i.vx *= f, i.vy *= f, i.x += i.vx, i.y += i.vy, s.fillStyle = i.color, s.fillRect(Math.round(i.x), Math.round(i.y), i.size, i.size);
      }
      y.current = requestAnimationFrame(E);
    };
    E(), b.current = new ResizeObserver(() => {
      S();
    }), b.current.observe(r);
    let M = e => {
        let n = t.getBoundingClientRect();
        g.current.x = e.clientX - n.left, g.current.y = e.clientY - n.top, g.current.isActive = !0;
      },
      R = e => {
        e.preventDefault();
        let n = t.getBoundingClientRect();
        g.current.x = e.touches[0].clientX - n.left, g.current.y = e.touches[0].clientY - n.top, g.current.isActive = !0;
      },
      z = () => {
        g.current.isActive = !1;
      },
      k = () => {
        g.current.isActive = !1;
      };
    return r.addEventListener("mousemove", M), r.addEventListener("mouseleave", z), r.addEventListener("touchmove", R, {
      passive: !1
    }), r.addEventListener("touchend", k), () => {
      y.current && cancelAnimationFrame(y.current), b.current && b.current.disconnect(), r.removeEventListener("mousemove", M), r.removeEventListener("mouseleave", z), r.removeEventListener("touchmove", R), r.removeEventListener("touchend", k);
    };
  }, [e, n, i, a, l, o, c, u, d, f, h, m, j]), <div ref={v} className={`particle-text-container ${t}`}><canvas ref={x} className="particle-text-canvas" /></div>;
};
o.displayName = "ParticleText";
let c = () => {
  let [e, t] = (0, __mod_90761.I)(),
    {
      theme: n
    } = (0, __mod_30701.D)(),
    [c, u] = (0, React.useState)("brilliant."),
    [d, f] = (0, React.useState)(200),
    [h, m] = (0, React.useState)(2),
    [x, v] = (0, React.useState)(2),
    [p, g] = (0, React.useState)(150),
    [y, b] = (0, React.useState)(5),
    [w, C] = (0, React.useState)(.75),
    [j, S] = (0, React.useState)(.05),
    [E, M] = (0, React.useState)(!0),
    R = (0, React.useMemo)(() => "dark" === n ? ["#40ffaa", "#40aaff", "#ff40aa", "#aa40ff"] : ["#000000", "#333333", "#666666"], [n]);
  return <div><__mod_56388.Bg /><__mod_56388.VX><__mod_56388.Ec><__mod_56388.Ch onRefresh={t} minHeight={500}><div className="w-full h-full flex items-center justify-center overflow-hidden"><OComp text={c} fontSize={d} colors={R} particleSize={h} particleGap={x} mouseControls={{
              enabled: !0,
              radius: p,
              strength: y
            }} backgroundColor="transparent" friction={w} ease={j} autoFit={E} /></div></__mod_56388.Ch><__mod_56388.IH><__mod_56388.UD title="Text" value={c} onChange={e => {
            u(e), t();
          }} placeholder="Enter text" /><__mod_56388.yt title="Font Size" value={d} onChange={e => {
            f(e), t();
          }} min={40} max={300} step={5} /><__mod_56388.tl title="Auto Fit" checked={E} onChange={e => {
            M(e), t();
          }} /><__mod_56388.yt title="Particle Size" value={h} onChange={e => {
            m(e), t();
          }} min={1} max={10} step={.5} /><__mod_56388.yt title="Particle Gap" value={x} onChange={e => {
            v(e), t();
          }} min={0} max={10} step={1} /><__mod_56388.yt title="Friction" value={w} onChange={e => {
            C(e), t();
          }} min={.5} max={.99} step={.01} /><__mod_56388.yt title="Ease" value={j} onChange={e => {
            S(e), t();
          }} min={.01} max={.5} step={.01} /><__mod_56388.yt title="Mouse Radius" value={p} onChange={e => {
            g(e), t();
          }} min={50} max={300} step={10} /><__mod_56388.yt title="Mouse Strength" value={y} onChange={e => {
            b(e), t();
          }} min={1} max={10} step={.5} /></__mod_56388.IH><__mod_56388.Ub data={[{
          name: "text",
          type: "string",
          default: '"brilliant."',
          description: "The text content to render as particles."
        }, {
          name: "colors",
          type: "string[]",
          default: '["#40ffaa", "#40aaff", "#ff40aa", "#aa40ff"]',
          description: "Array of colors to randomly assign to particles."
        }, {
          name: "particleSize",
          type: "number",
          default: "2",
          description: "Size of individual particles in pixels."
        }, {
          name: "particleGap",
          type: "number",
          default: "2",
          description: "Gap between particles. Higher values reduce density."
        }, {
          name: "mouseControls",
          type: "object",
          default: "{ enabled: true, radius: 150, strength: 5 }",
          description: "Configuration for mouse interaction behavior."
        }, {
          name: "fontSize",
          type: "number",
          default: "200",
          description: "Font size of the text. When autoFit is enabled, this is the maximum font size."
        }, {
          name: "autoFit",
          type: "boolean",
          default: "true",
          description: "Automatically scale font size to fit container width. Uses fontSize as maximum."
        }, {
          name: "backgroundColor",
          type: "string",
          default: '"transparent"',
          description: "Background color of the canvas."
        }, {
          name: "friction",
          type: "number",
          default: "0.75",
          description: "Controls how quickly particles slow down (0-1)."
        }, {
          name: "ease",
          type: "number",
          default: "0.05",
          description: "Controls how quickly particles return to origin (0-1)."
        }]} /></__mod_56388.Ec><__mod_56388.lT><__mod_56388.Gv /></__mod_56388.lT></__mod_56388.VX></div>;
};

const OComp: any = o;

export default c;

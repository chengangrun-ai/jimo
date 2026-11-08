import * as React from "react";
import * as __mod_90650 from "./90650";
/**
 * 内部辅助模块 77226（自动内联）
 * 被页面区块共享使用。
 */

let T = ({
  className: e,
  spacing: t = 20,
  particleSize: a = 1.5,
  color: i = "#5A4B81",
  colorPalette: s,
  glowColor: o = "#FF9FFC",
  alpha: c = 1,
  overlay: u = 1,
  overlayColor: d = "#0a0a0a",
  minFrequency: h = .3,
  maxFrequency: m = 1.5,
  rate: f = 1,
  shape: p = "circle",
  jitter: x = !1,
  flickerChance: g = 1,
  mouseEffect: v = !1
}) => {
  let y = (0, React.useRef)(null),
    b = (0, React.useRef)(null),
    C = (0, React.useRef)({
      x: -9999,
      y: -9999
    }),
    w = (0, React.useRef)({
      spacing: t,
      particleSize: a,
      color: i,
      colorPalette: s,
      glowColor: o,
      alpha: c,
      overlay: u,
      overlayColor: d,
      minFrequency: h,
      maxFrequency: m,
      rate: f,
      shape: p,
      jitter: x,
      flickerChance: g,
      mouseEffect: v
    });
  (0, React.useEffect)(() => {
    w.current = {
      spacing: t,
      particleSize: a,
      color: i,
      colorPalette: s,
      glowColor: o,
      alpha: c,
      overlay: u,
      overlayColor: d,
      minFrequency: h,
      maxFrequency: m,
      rate: f,
      shape: p,
      jitter: x,
      flickerChance: g,
      mouseEffect: v
    };
  }, [t, a, i, s, o, c, u, d, h, m, f, p, x, g, v]);
  let S = (0, React.useRef)([]),
    F = (0, React.useRef)(() => {});
  return (0, React.useEffect)(() => {
    let e,
      t = y.current,
      a = b.current;
    if (!t || !a) return;
    let r = t.getContext("2d");
    if (!r) return;
    let l = () => {
      let {
          width: e,
          height: t
        } = a.getBoundingClientRect(),
        {
          spacing: r,
          minFrequency: l,
          maxFrequency: n,
          jitter: i,
          colorPalette: s,
          color: o,
          flickerChance: c
        } = w.current,
        u = [],
        d = Math.ceil(e / r) + 4,
        h = Math.ceil(t / r) + 4,
        m = Math.min(l, n),
        f = Math.max(Math.max(l, n) - m, 0);
      for (let e = -2; e < d; e++) for (let t = -2; t < h; t++) {
        let a = e * r + (t % 2 == 0 ? 0 : .5 * r),
          l = t * r;
        i && (a += (Math.random() - .5) * r * .5, l += (Math.random() - .5) * r * .5);
        let n = Math.random() * Math.PI * 2,
          d = m + Math.random() * f,
          h = s && s.length > 0 ? s[Math.floor(Math.random() * s.length)] : o,
          p = Math.random() < c;
        u.push({
          x: a,
          y: l,
          timeOffset: n,
          frequency: d,
          color: h,
          isFlickering: p
        });
      }
      S.current = u;
    };
    F.current = l;
    let n = () => {
        let {
            width: e,
            height: n
          } = a.getBoundingClientRect(),
          i = window.devicePixelRatio || 1;
        t.width = e * i, t.height = n * i, t.style.width = `${e}px`, t.style.height = `${n}px`, r.scale(i, i), l();
      },
      i = new ResizeObserver(n);
    i.observe(a), n();
    let s = performance.now(),
      o = t => {
        s = t;
        let {
            rate: l,
            mouseEffect: n,
            particleSize: i,
            shape: c,
            alpha: u,
            glowColor: d,
            overlay: h,
            overlayColor: m
          } = w.current,
          {
            width: f,
            height: p
          } = a.getBoundingClientRect();
        r.clearRect(0, 0, f, p), r.save();
        let x = t / 1e3 * Math.max(l, 0),
          g = S.current;
        for (let e = 0; e < g.length; e++) {
          let t = g[e],
            a = .2;
          if (t.isFlickering) {
            let e = (x * t.frequency + t.timeOffset) % 2;
            a = .2 + .6 * (e < 1 ? e : 2 - e);
          } else a = .3 + .1 * Math.sin(t.timeOffset);
          if (n) {
            let e = t.x - C.current.x,
              r = t.y - C.current.y,
              l = Math.sqrt(e * e + r * r);
            l < 150 && (a = Math.min(1, a + .8 * (1 - l / 150)));
          }
          if (a > .65) {
            let e = (a - .65) / .35;
            r.shadowColor = d, r.shadowBlur = 7 * e;
          } else r.shadowColor = "transparent", r.shadowBlur = 0;
          r.fillStyle = t.color, r.globalAlpha = a * u, "circle" === c ? (r.beginPath(), r.arc(t.x, t.y, i, 0, 2 * Math.PI), r.fill()) : r.fillRect(t.x - i, t.y - i, 2 * i, 2 * i);
        }
        if (r.restore(), h > 0) {
          r.save(), r.globalAlpha = 1;
          let e = 0,
            t = 0,
            a = 0,
            l = m.replace("#", "");
          6 === l.length ? (e = parseInt(l.substring(0, 2), 16), t = parseInt(l.substring(2, 4), 16), a = parseInt(l.substring(4, 6), 16)) : 3 === l.length && (e = parseInt(l[0] + l[0], 16), t = parseInt(l[1] + l[1], 16), a = parseInt(l[2] + l[2], 16));
          let n = .5 * f,
            i = .5 * p,
            s = Math.max(f, p),
            o = r.createRadialGradient(n, i, .1 * s, n, i, .8 * s),
            c = Math.min(Math.max(h, 0), 1);
          o.addColorStop(0, `rgba(${e},${t},${a},0)`), o.addColorStop(.4, `rgba(${e},${t},${a},${.5 * c})`), o.addColorStop(.7, `rgba(${e},${t},${a},${.9 * c})`), o.addColorStop(1, `rgba(${e},${t},${a},${c})`), r.fillStyle = o, r.fillRect(0, 0, f, p), r.restore();
        }
        e = requestAnimationFrame(o);
      };
    o(s);
    let c = e => {
        let t = a.getBoundingClientRect();
        C.current = {
          x: e.clientX - t.left,
          y: e.clientY - t.top
        };
      },
      u = () => {
        C.current = {
          x: -9999,
          y: -9999
        };
      };
    return a.addEventListener("mousemove", c), a.addEventListener("mouseleave", u), () => {
      cancelAnimationFrame(e), i.disconnect(), a.removeEventListener("mousemove", c), a.removeEventListener("mouseleave", u);
    };
  }, []), (0, React.useEffect)(() => {
    F.current();
  }, [t, h, m, x, s, i, g]), <div ref={b} className={(0, __mod_90650.cn)("absolute inset-0", e)}><canvas ref={y} className="block h-full w-full" /></div>;
};

// 自动移除：s 在本模块不存在
export { s as A, i as T };

/**
 * 内部辅助模块 17119（自动内联）
 * 被页面区块共享使用。
 */


function G(e) {
  if (Array.isArray(e)) return 4 === e.length ? e : 3 === e.length ? [...e, 1] : n;
  if ("string" != typeof e) return n;
  let t,
    i,
    r,
    s = 1;
  if (e.startsWith("#")) {
    var a;
    [t, i, r, s] = (3 === (a = (a = e).replace(/^#/, "")).length && (a = a.split("").map(e => e + e).join("")), 6 === a.length && (a += "ff"), [parseInt(a.slice(0, 2), 16) / 255, parseInt(a.slice(2, 4), 16) / 255, parseInt(a.slice(4, 6), 16) / 255, parseInt(a.slice(6, 8), 16) / 255]);
  } else if (e.startsWith("rgb")) {
    let o;
    [t, i, r, s] = (o = e.match(/^rgba?\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*([0-9.]+))?\s*\)$/i)) ? [parseInt(o[1] ?? "0") / 255, parseInt(o[2] ?? "0") / 255, parseInt(o[3] ?? "0") / 255, void 0 === o[4] ? 1 : parseFloat(o[4])] : [0, 0, 0, 1];
  } else {
    let o;
    if (!e.startsWith("hsl")) return console.error("Unsupported color format", e), n;
    [t, i, r, s] = function (e) {
      let t,
        i,
        r,
        [o, n, s, a] = e,
        l = o / 360,
        h = n / 100,
        u = s / 100;
      if (0 === n) t = i = r = u;else {
        let e = (e, t, i) => (i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6) ? e + (t - e) * 6 * i : i < .5 ? t : i < 2 / 3 ? e + (t - e) * (2 / 3 - i) * 6 : e,
          o = u < .5 ? u * (1 + h) : u + h - u * h,
          n = 2 * u - o;
        t = e(n, o, l + 1 / 3), i = e(n, o, l), r = e(n, o, l - 1 / 3);
      }
      return [t, i, r, a];
    }((o = e.match(/^hsla?\s*\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(?:,\s*([0-9.]+))?\s*\)$/i)) ? [parseInt(o[1] ?? "0"), parseInt(o[2] ?? "0"), parseInt(o[3] ?? "0"), void 0 === o[4] ? 1 : parseFloat(o[4])] : [0, 0, 0, 1]);
  }
  return [o(t, 0, 1), o(i, 0, 1), o(r, 0, 1), o(s, 0, 1)];
}
let o = (e, t, i) => Math.min(Math.max(e, t), i),
  n = [0, 0, 0, 1];

export { G as default, G };
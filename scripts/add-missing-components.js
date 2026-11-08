const fs = require('fs');
const esbuild = require('esbuild');

const APPEND = `
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
    const glyphs = "01<>[]{}/\\\\|=+-*#@%&$";
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
`;

for (const [slug, name] of [['ascii-cursor', 'AsciiCursor'], ['3d-text-reveal', 'ThreeDTextReveal']]) {
  const p = `data/tsx/components/${slug}.tsx`;
  let s = fs.readFileSync(p, 'utf8');
  if (/export default /.test(s)) { console.log('已有 default，跳过', slug); continue; }
  const code = slug === 'ascii-cursor' ? APPEND : APPEND.replace(/AsciiCursor/g, 'ThreeDTextReveal').replace('ASCII CURSOR · 移动鼠标留下字符', '3D TEXT REVEAL · 滚动时文字绕柱旋转');
  const out = s + code;
  try { esbuild.transformSync(out, { loader: 'tsx' }); }
  catch (e) { console.log('语法不通过', slug, e.errors[0].text); continue; }
  fs.writeFileSync(p, out);
  console.log('补齐', slug, '->', name);
}

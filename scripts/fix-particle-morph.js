/**
 * 给 particle-morph 补上丢失的内层场景组件 F。
 *
 * 反编译时这个组件整个丢了（只留下使用处 <F .../>），导致页面报
 * "Invalid value used as weak map key" 然后退回预览图。
 * 这里用真正的 three 包画一个点云，跟随槽位索引切换形状。
 */
const fs = require('fs');
const esbuild = require('esbuild');
const p = 'data/tsx/components/particle-morph.tsx';
let s = fs.readFileSync(p, 'utf8');

const head = s.split('export ')[0];
if (/\bF\s*=\s*\(/.test(head) || /const F: any/.test(head)) {
  console.log('F 已存在，跳过');
  process.exit(0);
}

const SCENE = `
/* ---- 本地补齐：反编译时丢失的内层场景组件 F ---- */
import * as __THREE from "three";

let __PMScene = (props: any) => {
  const { slots, index, particleSize, particleOpacity } = props || {};
  const ref = React.useRef(null);
  React.useEffect(() => {
    const pts: any = ref.current;
    if (!pts) return;
    const count = 900;
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const key = (slots && slots[index] && slots[index].key) || "cube";
    for (let i = 0; i < count; i++) {
      const t = i / count;
      const a = t * Math.PI * 2 * 3;
      let x = 0, y = 0, z = 0;
      if (key === "stack") {
        const layer = Math.floor(t * 3);
        y = (layer - 1) * 0.8 + (Math.random() - 0.5) * 0.12;
        x = Math.cos(a) * 1.1 * (1 - Math.abs(layer - 1) * 0.15);
        z = Math.sin(a) * 1.1 * (1 - Math.abs(layer - 1) * 0.15);
      } else if (key === "aperture") {
        const ring = 0.5 + Math.floor(t * 3) * 0.35;
        x = Math.cos(a) * ring;
        y = Math.sin(a) * ring;
        z = (Math.random() - 0.5) * 0.2;
      } else {
        const f = Math.floor(t * 6);
        const u = (t * 6) % 1;
        const cx = (f % 3) - 1, cy = Math.floor(f / 3) - 0.5;
        x = (cx + u - 0.5) * 1.3;
        y = (cy + (Math.floor(t * 24) % 4) / 4 - 0.5) * 1.3;
        z = (Math.random() - 0.5) * 1.3;
      }
      pos[i * 3] = x; pos[i * 3 + 1] = y; pos[i * 3 + 2] = z;
      const g = 0.55 + t * 0.45;
      col[i * 3] = 0.55 * g + 0.35; col[i * 3 + 1] = 0.35 * g + 0.2; col[i * 3 + 2] = 0.95;
    }
    const g = new __THREE.BufferGeometry();
    g.setAttribute("position", new __THREE.BufferAttribute(pos, 3));
    g.setAttribute("color", new __THREE.BufferAttribute(col, 3));
    pts.geometry.dispose();
    pts.geometry = g;
  }, [index, slots]);

  return React.createElement(
    "points",
    { ref },
    React.createElement("pointsMaterial", {
      size: Math.max(0.004, (particleSize || 6) / 700),
      vertexColors: true,
      transparent: true,
      opacity: particleOpacity == null ? 0.9 : particleOpacity,
      sizeAttenuation: true,
      depthWrite: false,
    })
  );
};

const __PMF: any = __PMScene;

`;

const anchor = s.indexOf('let T = ({');
if (anchor < 0) { console.log('没找到 T 定义'); process.exit(0); }
let rest = s.slice(anchor).replace(/<F(?=[\s\/>])/g, "<__PMF"); let out = s.slice(0, anchor) + SCENE + rest;

try { esbuild.transformSync(out, { loader: 'tsx' }); }
catch (e) { console.log('语法不通过', e.errors[0].text); process.exit(0); }
fs.writeFileSync(p, out);
console.log('已补 F 场景组件');

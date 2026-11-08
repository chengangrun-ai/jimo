/**
 * 给「抓错了内容」的组件补一个真正能跑的 React 组件。
 *
 * 背景：circle-gallery / comparison-slider / draggable-grid 三个 .tsx
 * 抓取时只拿到了 GSAP Draggable 库（导出 s: 拖动类），没有 React 组件，
 * 渲染器 default 取不到就报错。这里在文件末尾追加一个默认导出的组件，
 * 用真实 npm 的 gsap + Draggable 实现同名效果，不动原有导出。
 */
const fs = require('fs');
const path = require('path');
const esbuild = require('esbuild');
const ROOT = process.cwd();

const COMPONENTS = {
  'circle-gallery': {
    name: 'CircleGallery',
    body: `
  const ref = React.useRef(null);
  const imgs = (images && images.length ? images : ['/demo.svg','/demo.svg','/demo.svg','/demo.svg','/demo.svg','/demo.svg']).slice(0, 8);
  React.useEffect(() => {
    const el = ref.current; if (!el) return;
    let raf, angle = 0, dragging = false, lastX = 0, vel = 0;
    const dots = [...el.querySelectorAll('[data-dot]')];
    const frame = () => {
      if (!dragging) { angle += vel + 0.12; vel *= 0.96; }
      const cx = el.clientWidth / 2, cy = el.clientHeight / 2;
      const R = Math.min(cx, cy) * 0.66;
      dots.forEach((d, i) => {
        const a = angle + i * 2 * Math.PI / dots.length;
        d.style.transform = \`translate(-50%,-50%) translate(\${cx + Math.cos(a) * R}px, \${cy + Math.sin(a) * R}px)\`;
      });
      raf = requestAnimationFrame(frame);
    };
    frame();
    const down = (e) => { dragging = true; lastX = e.clientX; };
    const move = (e) => { if (!dragging) return; const dx = e.clientX - lastX; lastX = e.clientX; angle += dx * 0.008; vel = dx * 0.002; };
    const up = () => { dragging = false; };
    el.addEventListener('pointerdown', down);
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
    return () => { cancelAnimationFrame(raf); el.removeEventListener('pointerdown', down); window.removeEventListener('pointermove', move); window.removeEventListener('pointerup', up); };
  }, []);
  return React.createElement('div', { ref, style: { position:'relative', width:'100%', height:'100vh', minHeight:420, overflow:'hidden', background:'#0b0b10', touchAction:'none', cursor:'grab' } },
    React.createElement('p', { style:{ position:'absolute', top:18, left:0, right:0, textAlign:'center', color:'#c9c4dc', font:'600 14px Inter,system-ui' } }, 'Circle Gallery · 拖动旋转'),
    imgs.map((src, i) => React.createElement('img', { key:i, 'data-dot':'1', src, alt:'', draggable:false, style:{ position:'absolute', left:0, top:0, width:112, height:148, objectFit:'cover', borderRadius:12, border:'1px solid #ffffff22' } }))
  );`,
  },
  'comparison-slider': {
    name: 'ComparisonSlider',
    body: `
  const [pos, setPos] = React.useState(50);
  const ref = React.useRef(null);
  const onMove = (e) => { const r = ref.current.getBoundingClientRect(); setPos(Math.max(0, Math.min(100, ((e.clientX - r.left) / r.width) * 100))); };
  const A = firstImage || '/demo.svg', B = secondImage || '/demo.svg';
  return React.createElement('div', { ref, onPointerMove:onMove, onPointerDown:onMove, style:{ position:'relative', width:'100%', height:'100vh', minHeight:420, overflow:'hidden', background:'#111', touchAction:'none', cursor:'ew-resize' } },
    React.createElement('img', { src:B, alt:'after', draggable:false, style:{ position:'absolute', inset:0, width:'100%', height:'100%', objectFit:'cover' } }),
    React.createElement('div', { style:{ position:'absolute', inset:0, width:pos+'%', overflow:'hidden' } },
      React.createElement('img', { src:A, alt:'before', draggable:false, style:{ position:'absolute', inset:0, width:ref.current ? ref.current.clientWidth : 1200, height:'100%', objectFit:'cover', maxWidth:'none' } })),
    React.createElement('div', { style:{ position:'absolute', top:0, bottom:0, left:pos+'%', width:2, background:'#fff', boxShadow:'0 0 12px #0008' } }),
    React.createElement('div', { style:{ position:'absolute', top:'50%', left:pos+'%', transform:'translate(-50%,-50%)', width:36, height:36, borderRadius:'50%', background:'#fff', display:'grid', placeItems:'center', color:'#111', fontWeight:700, fontSize:14 } }, '↔')
  );`,
  },
  'draggable-grid': {
    name: 'DraggableGrid',
    body: `
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current; if (!el) return;
    let down=false, sx=0, sy=0, ox=0, oy=0, vx=0, vy=0, raf;
    const inner = el.firstElementChild;
    const frame=()=>{ ox+=vx; oy+=vy; vx*=0.92; vy*=0.92; inner.style.transform=\`translate(\${ox}px,\${oy}px)\`; raf=requestAnimationFrame(frame); };
    frame();
    const d=(e)=>{down=true; sx=e.clientX-ox; sy=e.clientY-oy; el.setPointerCapture?.(e.pointerId)};
    const m=(e)=>{ if(!down)return; const nx=e.clientX-sx, ny=e.clientY-sy; vx=nx-ox; vy=ny-oy; ox=nx; oy=ny; };
    const u=()=>{down=false};
    el.addEventListener('pointerdown',d); el.addEventListener('pointermove',m); window.addEventListener('pointerup',u);
    return ()=>{cancelAnimationFrame(raf); el.removeEventListener('pointerdown',d); el.removeEventListener('pointermove',m); window.removeEventListener('pointerup',u)};
  }, []);
  const cells = Array.from({length:36},(_,i)=>i);
  return React.createElement('div', { ref, style:{ position:'relative', width:'100%', height:'100vh', minHeight:420, overflow:'hidden', background:'#0b0b10', touchAction:'none', cursor:'grab' } },
    React.createElement('div', { style:{ display:'grid', gridTemplateColumns:'repeat(6, 180px)', gap:16, padding:40, willChange:'transform' } },
      cells.map((i) => React.createElement('div', { key: i, style: { width: 180, height: 150, borderRadius: 14, background: \`hsl(\${240 + i * 7} 60% 22%)\`, border: '1px solid #ffffff18', display: 'grid', placeItems: 'center', color: '#e7e2f5', font: '600 15px Inter,system-ui' } }, String(i + 1).padStart(2, '0')))
    )
  );`,
  },
};

for (const [slug, cfg] of Object.entries(COMPONENTS)) {
  const p = path.join(ROOT, 'data', 'tsx', 'components', slug + '.tsx');
  let s = fs.readFileSync(p, 'utf8');
  // 已经补过就跳过
  if (s.includes('export default ')) { console.log('已有 default，跳过', slug); continue; }
  const add = `

/* ---- 本地补齐的默认导出组件（原抓取只含 Draggable 库，缺 React 组件） ---- */
import * as React from 'react';
function ${cfg.name}(props: any) {
  const { images, firstImage, secondImage } = props || {};${cfg.body}
}
${cfg.name}.displayName = '${cfg.name}';
export default ${cfg.name};
`;
  const out = s + add;
  try { esbuild.transformSync(out, { loader: 'tsx' }); }
  catch (e) { console.log('语法不通过，跳过', slug, e.errors[0].text); continue; }
  fs.writeFileSync(p, out);
  console.log('补齐', slug, '->', cfg.name);
}

const fs = require('fs');
const p = 'lib/render.ts';
let s = fs.readFileSync(p, 'utf8');
if (s.includes('cards: [{ id')) {
  console.log('已存在');
  process.exit(0);
}
const IMG = '__DEMO_IMG';
const block = `  // 更多常见列表型 props：每个元素同时带多种字段，组件按需取用
  cards: [{ id: 'a', title: 'Demo 1', text: 'Demo', src: ${IMG}, alt: 'Demo 1', href: '#' }, { id: 'b', title: 'Demo 2', text: 'Demo', src: ${IMG}, alt: 'Demo 2', href: '#' }],
  links: [{ label: 'Demo 1', href: '#', name: 'Demo 1' }, { label: 'Demo 2', href: '#', name: 'Demo 2' }],
  tabs: [{ id: 'a', label: 'Demo 1', content: 'Demo 1' }, { id: 'b', label: 'Demo 2', content: 'Demo 2' }],
  steps: [{ title: 'Step 1', description: 'Demo', step: 1 }, { title: 'Step 2', description: 'Demo', step: 2 }],
  options: [{ value: 'a', label: 'Demo 1' }, { value: 'b', label: 'Demo 2' }],
  members: [{ name: 'Demo 1', role: 'Demo', src: ${IMG}, alt: 'Demo 1' }, { name: 'Demo 2', role: 'Demo', src: ${IMG}, alt: 'Demo 2' }],
  testimonials: [{ quote: 'Demo quote', name: 'Demo', role: 'Demo', src: ${IMG}, alt: 'Demo' }],
  photos: [{ src: ${IMG}, alt: 'Demo 1' }, { src: ${IMG}, alt: 'Demo 2' }],
  slides: [{ src: ${IMG}, alt: 'Demo 1' }, { src: ${IMG}, alt: 'Demo 2' }],
  socials: [{ name: 'Demo 1', href: '#' }, { name: 'Demo 2', href: '#' }],
  menu: [{ label: 'Demo 1', href: '#' }, { label: 'Demo 2', href: '#' }],
  nav: [{ label: 'Demo 1', href: '#' }, { label: 'Demo 2', href: '#' }],
  data: [{ label: 'Demo 1', value: 40 }, { label: 'Demo 2', value: 60 }],
  rows: [{ id: 'a', name: 'Demo 1', value: 'Demo' }],
  cols: [{ id: 'a', name: 'Demo 1' }],
  services: [{ title: 'Demo 1', description: 'Demo' }, { title: 'Demo 2', description: 'Demo' }],
  pricing: [{ name: 'Demo', price: 19, features: ['Demo'] }],
  faqs: [{ question: 'Demo?', answer: 'Demo.' }],
`;
s = s.replace('  items: [', block + '  items: [');
fs.writeFileSync(p, s);
console.log('插入完成, cards 存在:', s.includes('cards: [{ id'));

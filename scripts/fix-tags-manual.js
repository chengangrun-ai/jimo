const fs = require('fs');
const esbuild = require('esbuild');

// 手工映射：标签 -> 该文件里真正的组件变量
const MAP = {
  'text-scatter': [['o', 'o']],
  'particle-text': [['o', 'o']],
  'credit-card': [['h', 'h']],
  'liquid-ascii': [['c', 'c']],
  'dither-cursor': [['Canvas', null]],
  'lenticular-carousel': [['b', null]],
};

for (const [slug, entries] of Object.entries(MAP)) {
  const p = `data/tsx/components/${slug}.tsx`;
  if (!fs.existsSync(p)) { console.log('缺文件', slug); continue; }
  let s = fs.readFileSync(p, 'utf8');
  const before = s;
  for (const [tag, target] of entries) {
    if (!target) continue;
    const alias = tag.toUpperCase() + 'Comp';
    if (new RegExp('\\b' + alias + '\\b').test(s)) continue;
    const openRe = new RegExp('<' + tag + '(?=[\\s/>])', 'g');
    if (!openRe.test(s)) continue;
    s = s.replace(new RegExp('<' + tag + '(?=[\\s/>])', 'g'), '<' + alias);
    s = s.replace(new RegExp('</' + tag + '>', 'g'), '</' + alias + '>');
    const tail = s.lastIndexOf('export ');
    s = tail > 0 ? s.slice(0, tail) + 'const ' + alias + ': any = ' + target + ';\n\n' + s.slice(tail) : s + '\nconst ' + alias + ': any = ' + target + ';\n';
  }
  if (s === before) { console.log('无改动', slug); continue; }
  try { esbuild.transformSync(s, { loader: 'tsx' }); }
  catch (e) { console.log('语法不通过', slug, e.errors[0].text); continue; }
  fs.writeFileSync(p, s);
  console.log('修好', slug);
}

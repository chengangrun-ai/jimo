const fs = require('fs');
const esbuild = require('esbuild');
// 画布内标签 -> 该文件里真正的内层场景组件
const FIX = {
  'depth-image': [['y', 'C']],
  'twilight-lines': [['f', null]],
  'lenticular-carousel': [['b', null]],
  'halftone-wave': [['PScene', null]],
};
for (const [slug, entries] of Object.entries(FIX)) {
  const p = `data/tsx/components/${slug}.tsx`;
  let s = fs.readFileSync(p, 'utf8');
  const before = s;
  for (const [tag, target] of entries) {
    if (!target) continue;
    const alias = target.toUpperCase() + 'SceneC';
    if (new RegExp('\\b' + alias + '\\b').test(s)) continue;
    if (!new RegExp('<' + tag + '(?=[\\s/>])').test(s)) { console.log(slug, '没找到标签', tag); continue; }
    // 只改单字母标签（用户质疑过批量改名误伤，这里限定标签名等于单个小写字母）
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

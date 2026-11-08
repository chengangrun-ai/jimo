const fs = require('fs');
const esbuild = require('esbuild');

// slug -> [旧标签, 新标签, 目标组件]
const JOBS = {
  'depth-image': [['y', 'YScene', 'y']],
  'halftone-wave': [['PScene', 'PSceneReal', 'p']],
  'lenticular-carousel': [['y', 'YScene', 'y']],
};

for (const [slug, entries] of Object.entries(JOBS)) {
  const p = `data/tsx/components/${slug}.tsx`;
  let s = fs.readFileSync(p, 'utf8');

  for (const [oldTag, newTag, target] of entries) {
    // 只在画布区域内替换
    const o = s.indexOf('<__mod_3907.Hl');
    const c = s.indexOf('</__mod_3907.Hl>', o);
    if (o < 0 || c < 0) { console.log(slug, '没画布'); continue; }
    let region = s.slice(o, c);
    const re = new RegExp('<' + oldTag + '(?=[\\s/>])', 'g');
    if (!re.test(region)) { console.log(slug, '画布内没有标签', oldTag); continue; }
    region = region.replace(new RegExp('<' + oldTag + '(?=[\\s/>])', 'g'), '<' + newTag);
    region = region.replace(new RegExp('</' + oldTag + '>', 'g'), '</' + newTag + '>');
    s = s.slice(0, o) + region + s.slice(c);

    // 删掉旧的错误别名
    s = s.replace(new RegExp('const\\s+' + oldTag + '\\s*:\\s*any\\s*=\\s*[A-Za-z_$][\\w$]*;\\n?', 'g'), '');
    // 插入新别名（在 export 之前）
    const decl = `const ${newTag}: any = ${target};\n`;
    const tail = s.lastIndexOf('export ');
    s = tail > 0 ? s.slice(0, tail) + decl + '\n' + s.slice(tail) : s + '\n' + decl;
  }

  try { esbuild.transformSync(s, { loader: 'tsx' }); }
  catch (e) { console.log('语法不通过', slug, e.errors[0].text); continue; }
  fs.writeFileSync(p, s);
  console.log('修好', slug);
}

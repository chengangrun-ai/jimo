// 把 93MB 的 catalog.json 拆成：
//   data/index.json         —— 轻量元数据（无 code），列表页/搜索用
//   data/code/<kind>/<slug>.txt —— 每个条目的源码，详情页按需读
const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const SRC = path.join(ROOT, 'data', 'catalog.json');
const CODE_DIR = path.join(ROOT, 'data', 'code');

function ensure(d) { fs.mkdirSync(d, { recursive: true }); }
function safe(s) { return String(s).replace(/[^A-Za-z0-9._-]/g, '_'); }

console.log('reading catalog.json ...');
const raw = fs.readFileSync(SRC, 'utf8');
const data = JSON.parse(raw);
console.log('parsed. free=%d proComp=%d blocks=%d appui=%d templates=%d',
  data.free.components.length, data.pro.components.length,
  data.pro.blocks.length, data.pro.appUi.length, data.pro.templates.length);

function writeCode(kind, item) {
  const dir = path.join(CODE_DIR, kind);
  ensure(dir);
  const file = path.join(dir, safe(item.slug) + '.txt');
  fs.writeFileSync(file, item.code || '', 'utf8');
  return `code/${kind}/${safe(item.slug)}.txt`;
}

const index = {
  generatedAt: data.generatedAt,
  stats: data.stats,
  free: { categories: data.free.categories, components: [] },
  pro: { components: [], blocks: [], appUi: [], templates: data.pro.templates },
};

for (const it of data.free.components) {
  index.free.components.push({
    id: it.id, slug: it.slug, name: it.name, description: it.description || '',
    category: it.category, href: it.href, lang: it.lang || 'tsx',
    codeFile: writeCode('free', it), codeLen: (it.code || '').length,
  });
}
for (const it of data.pro.components) {
  index.pro.components.push({
    id: it.id, slug: it.slug, name: it.name, description: it.description || '',
    category: it.category, tier: it.tier, tags: it.tags || [],
    href: it.href, lang: it.lang || 'jsx',
    codeFile: writeCode('components', it), codeLen: (it.code || '').length,
  });
}
for (const it of data.pro.blocks) {
  index.pro.blocks.push({
    id: it.id, slug: it.slug, name: it.name, description: it.description || '',
    category: it.category, categorySlug: it.categorySlug,
    exportName: it.exportName, deps: it.deps || [], original: it.original,
    href: it.href, lang: it.lang || 'jsx',
    codeFile: writeCode('blocks', it), codeLen: (it.code || '').length,
  });
}
for (const it of data.pro.appUi) {
  index.pro.appUi.push({
    id: it.id, slug: it.slug, name: it.name, description: it.description || '',
    category: it.category, style: it.style,
    href: it.href, lang: it.lang || 'jsx',
    codeFile: writeCode('app-ui', it), codeLen: (it.code || '').length,
  });
}

fs.writeFileSync(path.join(ROOT, 'data', 'index.json'), JSON.stringify(index), 'utf8');

const idxSize = fs.statSync(path.join(ROOT, 'data', 'index.json')).size;
let codeBytes = 0, codeCount = 0;
(function walk(d) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, e.name);
    if (e.isDirectory()) walk(p); else { codeBytes += fs.statSync(p).size; codeCount++; }
  }
})(CODE_DIR);

console.log('\n生成完成:');
console.log('  data/index.json  ', (idxSize / 1048576).toFixed(2), 'MB');
console.log('  data/code/       ', codeCount, '个源码文件,', (codeBytes / 1048576).toFixed(1), 'MB');
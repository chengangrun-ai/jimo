const fs = require('fs');
const path = require('path');

for (const rel of ['app/api/list/[kind]/route.ts', 'app/api/search-index/route.ts']) {
  const p = path.join(__dirname, '..', rel);
  const t = fs.readFileSync(p, 'utf8');
  const fixed = t.replace("export const dynamic = 'force-static';", "export const dynamic = 'force-dynamic';");
  if (fixed !== t) { fs.writeFileSync(p, fixed); console.log('fixed', rel); }
  else console.log('unchanged', rel);
}
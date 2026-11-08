/**
 * 修「Canvas 内部场景组件标签」（v2，干净重写）。
 *
 * 反编译把场景组件写成单个小写字母（`<g speed=... />`），R3F 会当 three 类名报错，
 * 画布不挂载。做法：
 *   1) 只认「真正定义成组件」的名字（形如 `NAME = ({...}) =>` 或 `function NAME(`）；
 *   2) 按标签属性名与该组件参数名重合 ≥2 挑最匹配的；
 *   3) 用唯一别名（`<GScene>`）替换，末尾绑定 `const GScene: any = g;`；
 *   4) 逐文件 esbuild 语法校验，不通过就跳过。
 *
 * 用法: node scripts/fix-scene-tags.js [--write] [slug...]
 */
const fs = require('fs');
const path = require('path');
const esbuild = require('esbuild');

const ROOT = process.cwd();
const write = process.argv.includes('--write');
const only = process.argv.slice(2).filter((a) => !a.startsWith('--'));
const dirs = ['data/tsx/components', 'data/tsx/blocks', 'data/tsx/app-ui'];

function namesOf(block) {
  const out = new Set();
  for (const m of block.matchAll(/([A-Za-z_$][\w$]*)\s*[:=]/g)) out.add(m[1]);
  return out;
}

let touched = 0;

for (const dir of dirs) {
  const abs = path.join(ROOT, dir);
  if (!fs.existsSync(abs)) continue;
  for (const f of fs.readdirSync(abs)) {
    if (!f.endsWith('.tsx')) continue;
    if (only.length && !only.includes(f.replace(/\.tsx$/, ''))) continue;
    const p = path.join(abs, f);
    let s = fs.readFileSync(p, 'utf8');

    // 候选组件（只认真的是组件的定义）
    const comps = [];
    for (const m of s.matchAll(/(?:^|[,;]\s*)([A-Za-z_$][\w$]*)\s*=\s*\(\{([\s\S]{0,600}?)\}\)\s*=>/g)) {
      const name = m[1];
      const defRe = new RegExp('\\b' + name + '\\s*=\\s*\\(\\{');
      if (!defRe.test(s)) continue;
      comps.push({ name, props: namesOf(m[2]) });
    }
    if (!comps.length) continue;

    const open = s.indexOf('<__mod_3907.Hl');
    const closeIdx = open >= 0 ? s.indexOf('</__mod_3907.Hl>', open) : -1;
    const regionStart = open >= 0 ? open : 0;
    const regionEnd = closeIdx >= 0 ? closeIdx : s.length;
    let region = s.slice(regionStart, regionEnd);

    const aliases = [];
    for (const m of region.matchAll(/<([a-z])((?:\s+[A-Za-z_$][\w$]*(?:=[^>\s]*)?)*)\s*\/?>/g)) {
      const tag = m[1];
      const attrs = new Set([...m[2].matchAll(/([A-Za-z_$][\w$]*)\s*=/g)].map((x) => x[1]));
      if (attrs.size < 2) continue;
      let best = null;
      let bestScore = 0;
      for (const c of comps) {
        let score = 0;
        for (const a of attrs) if (c.props.has(a)) score++;
        if (score > bestScore) { bestScore = score; best = c; }
      }
      // 放宽：重合 1 个也可以，但该属性必须够独特（声明它的组件 ≤2 个）
      if (best && bestScore === 1) {
        let owners = 0;
        for (const c of comps) for (const a of attrs) if (c.props.has(a)) owners++;
        if (owners > 2) { best = null; }
      }
      if (!best || bestScore < 1) continue;
      const alias = tag.toUpperCase() + 'Scene';
      if (new RegExp('\\b' + alias + '\\b').test(s)) continue;
      region = region.replace(new RegExp('<' + tag + '(?=[\\s/>])', 'g'), '<' + alias);
      region = region.replace(new RegExp('</' + tag + '>', 'g'), '</' + alias + '>');
      aliases.push('const ' + alias + ': any = ' + best.name + ';');
    }
    if (!aliases.length) continue;

    s = s.slice(0, regionStart) + region + s.slice(regionEnd);
    const uniq = [...new Set(aliases)];
    const tail = s.lastIndexOf('export ');
    s = tail > 0 ? s.slice(0, tail) + uniq.join('\n') + '\n\n' + s.slice(tail) : s + '\n' + uniq.join('\n') + '\n';

    try {
      esbuild.transformSync(s, { loader: 'tsx' });
    } catch {
      console.log('跳过（语法不通过）: ' + dir + '/' + f);
      continue;
    }
    touched++;
    if (write) fs.writeFileSync(p, s);
    console.log('修 ' + dir + '/' + f + ' -> ' + uniq.length + ' 个别名');
  }
}
console.log('共 ' + touched + ' 个文件' + (write ? '已写入' : '（预演）'));

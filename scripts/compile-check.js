/**
 * 渲染可行性体检：把 data/tsx 下每个组件都试着打成一个自包含 bundle，
 * 统计哪些能编译成功、哪些失败、缺哪些依赖。
 *
 * 用法: node scripts/compile-check.js [kind]
 */
const fs = require('fs');
const path = require('path');
const esbuild = require('esbuild');

const ROOT = path.join(__dirname, '..');
const KINDS = process.argv[2] ? [process.argv[2]] : ['components', 'blocks', 'app-ui'];

function wrapper(fileName, slug) {
  return `
import * as __mod from ${JSON.stringify('./' + fileName)};
const __pick = () => {
  if (__mod.default) return __mod.default;
  const map = __mod.components || (__mod.default && __mod.default.components);
  if (map && typeof map === 'object') {
    const bySlug = map[${JSON.stringify(slug)}];
    if (bySlug) return bySlug;
    const first = Object.values(map)[0];
    if (first) return first;
  }
  const keys = Object.keys(__mod).filter(k => typeof __mod[k] === 'function');
  if (keys.length) return __mod[keys[0]];
  return null;
};
export default __pick();
`;
}

async function checkKind(kind) {
  const dir = path.join(ROOT, 'data', 'tsx', kind);
  if (!fs.existsSync(dir)) return { kind, total: 0 };
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));
  const ok = [];
  const failed = [];
  const missingDeps = new Map();

  for (const f of files) {
    const abs = path.join(dir, f);
    try {
      await esbuild.build({
        stdin: { contents: wrapper(f, f.replace(/\.tsx$/, '')), resolveDir: dir, loader: 'tsx', sourcefile: 'rb-wrapper.tsx' },
        bundle: true,
        format: 'iife',
        write: false,
        jsx: 'automatic',
        platform: 'browser',
        logLevel: 'silent',
        define: { 'process.env.NODE_ENV': '"production"' },
        outfile: 'out.js',
        plugins: [{
          name: 'stub-helpers',
          setup(b) {
            const stubIfMissing = (args) => {
              const base = args.resolveDir || dir;
              const target = path.resolve(base, args.path);
              const cands = [`${target}.tsx`, `${target}.ts`, `${target}.js`, target];
              if (cands.some(p => fs.existsSync(p))) return undefined;
              return { path: 'rb-stub', namespace: 'rb-stub' };
            };
            b.onResolve({ filter: /^\.\.?\/[0-9]+$/ }, stubIfMissing);
            b.onResolve({ filter: /_helpers\// }, stubIfMissing);
            b.onLoad({ filter: /.*/, namespace: 'rb-stub' }, () => ({ contents: 'export default {};', loader: 'js' }));
          },
        }],
      }).then(out => {
        // 体积检查：空壳产物（只剩几百字节）说明组件代码被 tree-shake 掉了
        const len = out.outputFiles[0].text.length;
        if (len < 5000) {
          failed.push({ file: f, error: `产物过小 (${len} 字节)，疑似空壳` });
        } else {
          ok.push(f);
        }
      });
    } catch (e) {
      const errs = (e.errors || []).map(x => x.text + (x.location ? ` @${x.location.file}:${x.location.line}` : ''));
      const text = errs.join(' | ') || String(e.message || e);
      failed.push({ file: f, error: text.slice(0, 300) });
      for (const m of text.matchAll(/Could not resolve ["']([^"']+)["']/g)) {
        const dep = m[1];
        if (!dep.startsWith('.') && !dep.startsWith('/')) {
          missingDeps.set(dep, (missingDeps.get(dep) || 0) + 1);
        }
      }
    }
  }

  console.log(`\n=== ${kind}: ${files.length} 个, 成功 ${ok.length}, 失败 ${failed.length} ===`);
  if (missingDeps.size) {
    console.log('缺失依赖:');
    for (const [d, n] of [...missingDeps.entries()].sort((a, b) => b[1] - a[1])) {
      console.log(`  ${d}  (${n} 个文件)`);
    }
  }
  if (failed.length) {
    console.log('失败样例 (前 12 条):');
    for (const f of failed.slice(0, 12)) console.log(`  ${f.file}: ${f.error}`);
    const byReason = new Map();
    for (const f of failed) {
      const key = f.error.split(' ').slice(0, 6).join(' ');
      byReason.set(key, (byReason.get(key) || 0) + 1);
    }
    console.log('失败原因聚类:');
    for (const [k, n] of [...byReason.entries()].sort((a, b) => b[1] - a[1]).slice(0, 8)) {
      console.log(`  ${n}x  ${k}`);
    }
  }
  return { kind, total: files.length, ok: ok.length, failed: failed.length, missingDeps: [...missingDeps.keys()] };
}

(async () => {
  const results = [];
  for (const k of KINDS) results.push(await checkKind(k));
  console.log('\n=== 汇总 ===');
  for (const r of results) console.log(`${r.kind}: ${r.ok}/${r.total} 可渲染, 缺依赖: ${(r.missingDeps || []).join(', ') || '无'}`);
})();

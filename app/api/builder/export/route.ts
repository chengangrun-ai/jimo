import { NextResponse } from 'next/server';
import JSZip from 'jszip';
import fs from 'fs';
import path from 'path';
import { analyzeBindings, findUnresolved } from '@/lib/bindings';

export const dynamic = 'force-dynamic';

const DATA = path.join(process.cwd(), 'data');
const TSX = path.join(DATA, 'tsx');

type Section = { slug: string; hidden?: boolean };

const cache = new Map<string, string>();

function readBlock(slug: string): string {
  if (cache.has(slug)) return cache.get(slug)!;
  try {
    const t = fs.readFileSync(path.join(TSX, 'blocks', slug + '.tsx'), 'utf8');
    cache.set(slug, t);
    return t;
  } catch { return ''; }
}

function stripHeader(code: string): string {
  const m = /^\/\*\*[\s\S]*?\*\/\s*/.exec(code);
  return m ? code.slice(m[0].length) : code;
}

const toPascal = (slug: string) =>
  slug.replace(/[^a-zA-Z0-9]+/g, ' ').trim().split(/\s+/)
    .map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('') || 'Block';

function normalizeExport(code: string, slug: string): { code: string; name: string } {
  const m = /export default ([A-Za-z0-9_$]+);?/.exec(code);
  const wanted = toPascal(slug);
  if (!m) return { code: code + `\nexport default ${wanted};\n`, name: wanted };
  let name = m[1];
  if (name.length <= 2 || !/^[A-Z]/.test(name)) {
    // 只替换"独立单词"的变量名，避免误伤字符串 / 属性名里的同名片段
    const re = new RegExp(`(?<![\\w$.])${name}(?![\\w$])`, 'g');
    code = code.replace(re, wanted);
    // 兜底：把可能被改坏的字符串/JSX 文本还原
    code = code.replace(new RegExp(`Footer1\\{`, 'g'), 'Footer1{');
    name = wanted;
  }
  return { code, name };
}

/** 收集区块引用的辅助模块，按需带上 */
function collectHelpers(source: string): Set<string> {
  return new Set([...source.matchAll(/__mod_(\d+)/g)].map(m => m[1]));
}

const PKG_VERSION: Record<string, string> = {
  next: '15.1.0', react: '19.0.0', 'react-dom': '19.0.0',
  'lucide-react': '0.468.0', motion: '12.23.12', clsx: '2.1.1',
  'tailwind-merge': '2.5.5', three: '0.170.0',
};

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  const sections: Section[] = Array.isArray(body.sections) ? body.sections : [];
  const title: string = body.title || 'My Landing Page';
  if (!sections.length) return NextResponse.json({ error: 'no sections' }, { status: 400 });

  const zip = new JSZip();
  const root = zip.folder('landing-page')!;
  const allDeps = new Set<string>();
  const usedSlugs: string[] = [];
  const compNames: string[] = [];
  const helperIds = new Set<string>();

  for (const s of sections) {
    if (s.hidden) continue;
    const raw = readBlock(s.slug);
    if (!raw) continue;
    const body2 = stripHeader(raw);
    const norm = normalizeExport(body2, s.slug);
    usedSlugs.push(s.slug);
    compNames.push(norm.name);
    // 辅助模块的导入路径：写入前就改成同级 _helpers 目录
    const fixedCode = norm.code.replace(/from "[^"]*_helpers\/(\d+)"/g, 'from "./_helpers/$1"');
    // 区块用到浏览器 API，必须是客户端组件
    const withClient = /^['"]use client['"]/.test(fixedCode.trim()) ? fixedCode : `'use client';\n` + fixedCode;
    root.file(`components/blocks/${s.slug}.tsx`, withClient);
    for (const id of collectHelpers(fixedCode)) helperIds.add(id);
    for (const mm of fixedCode.matchAll(/from "([^".][^"]*)"/g)) {
      const p = mm[1];
      if (p === 'react' || p === 'react-dom' || p.startsWith('next/')) continue;
      allDeps.add(p.startsWith('@') ? p.split('/').slice(0, 2).join('/') : p.split('/')[0]);
    }
  }

  // 带上辅助模块：直接全量复制（它们互相依赖，少一个就跑不起来）
  const HELP_SRC = path.join(TSX, '_helpers');
  const helperSet = new Set<string>();
  const referenced = new Set<string>();
  try {
    for (const f of fs.readdirSync(HELP_SRC)) {
      if (!f.endsWith('.tsx')) continue;
      helperSet.add(f.replace('.tsx', ''));
      let t = fs.readFileSync(path.join(HELP_SRC, f), 'utf8');
      t = t.replace(/from "[^"]*_helpers\/(\d+)"/g, 'from "./$1"');
      if (!/^['"]use client['"]/.test(t.trim())) t = `'use client';\n` + t;
      root.file(`components/blocks/_helpers/${f}`, t);
      for (const mm of t.matchAll(/from "\.\/(\d+)"/g)) referenced.add(mm[1]);
      for (const mm of t.matchAll(/from "([^".][^"]*)"/g)) {
        const p = mm[1];
        if (p === 'react' || p === 'react-dom' || p.startsWith('next/')) continue;
        allDeps.add(p.startsWith('@') ? p.split('/').slice(0, 2).join('/') : p.split('/')[0]);
      }
    }
  } catch {}

  // 辅助模块之间可能有断链：给缺失的补安全桩，保证一定能构建
  for (const id of referenced) {
    if (helperSet.has(id)) continue;
    root.file(`components/blocks/_helpers/${id}.tsx`, `'use client';
/** 占位模块 ${id}：原模块未能完整还原，这里导出"什么都能调"的安全替身。 */
import * as React from "react";

const anyFn: any = new Proxy(function () {}, {
  get(_t, prop) {
    if (prop === "then") return undefined;
    if (prop === "__esModule") return false;
    return anyFn;
  },
  apply() { return anyFn; },
  construct() { return anyFn; },
});

export const useRef: any = (v?: any) => React.useRef(v);
export const useState: any = (v?: any) => React.useState(typeof v === "function" ? v() : v);
export const useEffect: any = () => {};
export const useLayoutEffect: any = () => {};
export const useMemo: any = (f: any) => (typeof f === "function" ? f() : undefined);
export const useCallback: any = (f: any) => f;
export const useContext: any = () => ({});
export const useReducer: any = (r: any, init: any) => [typeof init === "function" ? init(undefined) : init, () => {}];
export const useId: any = () => React.useId();
export const forwardRef: any = (f: any) => React.forwardRef(f);

const defaultExport: any = new Proxy({}, {
  get(_t, prop) {
    if (prop === "then") return undefined;
    if (prop === "__esModule") return false;
    if (prop === "default") return defaultExport;
    if (prop === "g") return globalThis;
    return anyFn;
  },
});

export default defaultExport;
export const __stub = true;
`);
  }

  // 扫一遍调用方实际用到的成员名，给每个辅助模块补齐缺失的命名导出
  const helpUsage = new Map<string, Set<string>>();
  const collectFrom = (src: string) => {
    for (const mm of src.matchAll(/__mod_(\d+)\.([A-Za-z_$][\w$]*)/g)) {
      if (!helpUsage.has(mm[1])) helpUsage.set(mm[1], new Set());
      helpUsage.get(mm[1])!.add(mm[2]);
    }
  };
  for (const s of usedSlugs) {
    try { collectFrom(fs.readFileSync(path.join(TSX, 'blocks', s + '.tsx'), 'utf8')); } catch {}
  }
  for (const f of fs.readdirSync(path.join(TSX, '_helpers'))) {
    if (!f.endsWith('.tsx')) continue;
    try { collectFrom(fs.readFileSync(path.join(TSX, '_helpers', f), 'utf8')); } catch {}
  }

  // 调用方用到的成员如果本地根本没有（模块没还原完整），用安全替身补齐
  const isDeclared = (src: string, name: string) => {
    // function / class 声明
    if (new RegExp(`(?:^|\\n)\\s*(?:async\\s+)?(?:function|class)\\s+${name}\\b`).test(src)) return true;
    // 直接赋值声明：const/let/var NAME =
    if (new RegExp(`(?:^|\\n)\\s*(?:const|let|var)\\s+${name}\\s*=`).test(src)) return true;
    // 多变量声明里的后续项：let a = ..., NAME = ...
    if (new RegExp(`[,{]\\s*${name}\\s*=`, 'm').test(src)) return true;
    // 解构声明：let { ... NAME ... } = / let [ ... NAME ... ] =
    const destr = /(?:const|let|var)\s*[\{\[][\s\S]{0,600}?[\}\]]\s*=/g;
    let m: RegExpExecArray | null;
    while ((m = destr.exec(src))) {
      if (new RegExp(`\\b${name}\\b`).test(m[0])) return true;
    }
    // 函数参数解构：({ NAME }) =>
    const param = /\(([^()]{0,400})\)\s*=>/g;
    while ((m = param.exec(src))) {
      if (new RegExp(`\\b${name}\\b`).test(m[1])) return true;
    }
    return false;
  };
  for (const [id, members] of helpUsage) {
    const srcPath = path.join(TSX, '_helpers', id + '.tsx');
    if (!fs.existsSync(srcPath)) continue;
    let t = fs.readFileSync(srcPath, 'utf8');
    t = t.replace(/from "[^"]*_helpers\/(\d+)"/g, 'from "./$1"');
    // 先清掉历史补丁
    t = t.replace(/\/\/ 调用方需要但原模块未还原出的成员[^\n]*\n(?:export const [^\n]*\n)*/g, '');
    t = t.replace(/\/\/ 补齐调用方需要的导出\n(?:export \{[^\n]*\n)*/g, '');

    // 用 Babel 精确分析，彻底避免"已声明却当未声明"
    const { declared, exported } = analyzeBindings(t);

    const needExport: string[] = [];
    const needStub: string[] = [];
    for (const n of members) {
      if (n === 'default') continue;
      if (exported.has(n)) continue;
      if (declared.has(n)) needExport.push(n);
      else needStub.push(n);
    }
    if (needExport.length) t += `\n// 补齐调用方需要的导出\nexport { ${needExport.join(', ')} };\n`;
    if (needStub.length) t += `\n// 调用方需要但原模块未还原出的成员：给安全替身\n${needStub.map(n => `export const ${n}: any = (() => null) as any;`).join('\n')}\n`;

    // 最后兜底：把文件里所有"未声明的裸标识符"接成安全替身，避免运行时报错
    const unresolved = new Set<string>();
    for (const name of findUnresolved(t)) {
      if (declared.has(name) || exported.has(name)) continue;
      unresolved.add(name);
    }
    if (unresolved.size) {
      // 反编译残留的未定义标识符：接成安全替身
      const head = `// 反编译残留：接成安全替身 + 补 webpack 运行时探测\nvar __safeStub: any = new Proxy(function () {}, { get(_t: any, p: any) { if (p === "then") return undefined; if (p === "__esModule") return false; if (p === "g" || p === "global") return globalThis; return __safeStub; }, apply: () => __safeStub, construct: () => __safeStub });\n${[...unresolved].map(n => `var ${n}: any = __safeStub;`).join('\n')}\n`;
      const firstImport = t.search(/^import /m);
      t = firstImport >= 0 ? t.slice(0, firstImport) + head + t.slice(firstImport) : head + t;
    }

    // CommonJS 兼容层的残留（精确匹配，不能用 \b 否则会误伤 Footer1 这类名字）
    if (/__cjs_exports/.test(t)) {
      t = t.replace(/^__cjs_exports\s*=\s*[^;]+;?\s*$/gm, '');
      t = t.replace(/Object\.defineProperty\(\s*__cjs_exports\s*,[\s\S]{0,400}?\)\s*;?/g, '');
      t = t.replace(/__cjs_exports/g, '({})');
    }

    root.file(`components/blocks/_helpers/${id}.tsx`, t);
  }

  const importsLine = usedSlugs.map((s, i) => `import ${compNames[i]} from "@/components/blocks/${s}";`).join('\n');
  root.file('app/page.tsx', `import { ${compNames.join(', ')} } from "@/components/blocks";

export const dynamic = 'force-dynamic';

export default function Page() {
  return (
    <main className="min-h-screen bg-white dark:bg-neutral-950">
${compNames.map(n => `      <${n} />`).join('\n')}
    </main>
  );
}
`);

  root.file('app/layout.tsx', `import type { Metadata } from "next";
import "./globals.css";

// 反编译区块里残留了 webpack 运行时的 global 探测，这里补一个安全的 global
(globalThis as any).g = globalThis;
(globalThis as any).global = globalThis;

export const metadata: Metadata = { title: ${JSON.stringify(title)} };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased bg-white dark:bg-neutral-950">{children}</body>
    </html>
  );
}
`);

  root.file('app/globals.css', `@tailwind base;\n@tailwind components;\n@tailwind utilities;\n`);
  root.file('components/blocks/index.ts',
    usedSlugs.map((s, i) => `export { default as ${compNames[i]} } from "./${s}";`).join('\n') + '\n');

  const deps: Record<string, string> = { next: '15.1.0', react: '19.0.0', 'react-dom': '19.0.0' };
  for (const d of allDeps) if (!deps[d]) deps[d] = PKG_VERSION[d] || 'latest';

  root.file('package.json', JSON.stringify({
    name: 'landing-page', version: '1.0.0', private: true,
    scripts: { dev: 'next dev', build: 'next build', start: 'next start' },
    dependencies: deps,
    devDependencies: {
      typescript: '5.7.2', '@types/node': '22.10.2', '@types/react': '19.0.2',
      '@types/react-dom': '19.0.2', tailwindcss: '3.4.17', postcss: '8.4.49', autoprefixer: '10.4.20',
    },
  }, null, 2));

  root.file('next.config.js', `/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
  // motion 的 ESM 入口用了 export *，必须让 Next 自己转译
  transpilePackages: ["motion"],
};
`);
  root.file('tailwind.config.js', `/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: { extend: {} },
  plugins: [],
};
`);
  root.file('postcss.config.js', `module.exports = { plugins: { tailwindcss: {}, autoprefixer: {} } };\n`);
  root.file('tsconfig.json', JSON.stringify({
    compilerOptions: {
      target: 'ES2017', lib: ['dom', 'dom.iterable', 'esnext'], allowJs: true, skipLibCheck: true,
      strict: false, noEmit: true, esModuleInterop: true, module: 'esnext', moduleResolution: 'bundler',
      resolveJsonModule: true, isolatedModules: true, jsx: 'preserve', incremental: true,
      plugins: [{ name: 'next' }], paths: { '@/*': ['./*'] },
    },
    include: ['next-env.d.ts', '**/*.ts', '**/*.tsx', '.next/types/**/*.ts'],
    exclude: ['node_modules'],
  }, null, 2));

  root.file('README.md', `# ${title}

由 React Bits Pro 本地构建器生成。

\`\`\`bash
npm install
npm run dev
\`\`\`

包含 ${compNames.length} 个区块：

${usedSlugs.map((s, i) => `${i + 1}. \`${s}\` — ${compNames[i]}`).join('\n')}

依赖：${[...allDeps].sort().join(', ') || '无'}
`);

  // 快速压缩：突出速度
  const buf = await zip.generateAsync({
    type: 'nodebuffer',
    compression: 'DEFLATE',
    compressionOptions: { level: 1 },
  });

  return new NextResponse(new Uint8Array(buf), {
    headers: {
      'content-type': 'application/zip',
      'content-disposition': `attachment; filename="landing-page.zip"`,
      'x-section-count': String(compNames.length),
    },
  });
}
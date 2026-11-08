import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import JSZip from 'jszip';

export const dynamic = 'force-dynamic';

/**
 * 打包下载模板：输出一个**可编辑工程**，而不是只给编译好的静态站。
 *
 * 结构：
 *   <slug>/
 *     package.json       vite 工程，npm i && npm run dev 起本地服务
 *     vite.config.mjs    root 指向 site/
 *     site/              原始模板文件（HTML / CSS / JS 都是可编辑的纯文件）
 *     site/custom.css    追加的可编辑样式入口，index.html 里已引入
 *     README.md          改哪里、怎么跑、怎么构建
 *
 * 之前直接把 public/templates/<slug> 压平打包，用户拿到的是编译产物，
 * 无法改样式也无法本地起服务，所以改成工程形态。
 */
export async function GET(_req: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  if (!/^[a-z0-9][a-z0-9-]*$/i.test(slug)) {
    return NextResponse.json({ error: 'bad slug' }, { status: 400 });
  }

  const dir = path.join(process.cwd(), 'public', 'templates', slug);
  if (!fs.existsSync(dir) || !fs.statSync(dir).isDirectory()) {
    return NextResponse.json({ error: 'template not found' }, { status: 404 });
  }

  const zip = new JSZip();
  const root = zip.folder(slug)!;
  const site = root.folder('site')!;

  function walk(current: string, target: JSZip) {
    for (const entry of fs.readdirSync(current, { withFileTypes: true })) {
      const abs = path.join(current, entry.name);
      if (entry.isDirectory()) {
        walk(abs, target.folder(entry.name)!);
      } else if (entry.isFile()) {
        if (entry.name === '_preview.png') continue;
        target.file(entry.name, fs.readFileSync(abs));
      }
    }
  }
  walk(dir, site);

  // 注入可编辑样式入口（只加一行 link，其余 HTML 保持原样）
  const indexPath = path.join(dir, 'index.html');
  if (fs.existsSync(indexPath)) {
    let html = fs.readFileSync(indexPath, 'utf8');
    if (!html.includes('custom.css')) {
      const link = '<link rel="stylesheet" href="custom.css">';
      html = /<\/head>/i.test(html) ? html.replace(/<\/head>/i, `  ${link}\n</head>`) : link + html;
    }
    site.file('index.html', html);
  }

  site.file(
    'custom.css',
    `/* 自定义样式入口（可自由修改，构建后会覆盖在模板样式之后）
   示例：
   body { letter-spacing: 0.01em; }
   .my-class { color: #3b82f6; }
*/
`
  );

  root.file(
    'package.json',
    JSON.stringify(
      {
        name: `${slug}-template`,
        private: true,
        version: '1.0.0',
        scripts: {
          dev: 'vite --open',
          build: 'vite build',
          preview: 'vite preview --open',
        },
        devDependencies: { vite: '^5.4.0' },
      },
      null,
      2
    ) + '\n'
  );

  root.file(
    'vite.config.mjs',
    `import { defineConfig } from 'vite';

export default defineConfig({
  root: 'site',
  build: { outDir: '../dist', emptyOutDir: true },
  server: { port: 5173, open: true },
});
`
  );

  root.file(
    'README.md',
    `# ${slug} 模板（可编辑工程）

## 运行

\`\`\`bash
npm install
npm run dev      # 打开 http://localhost:5173
\`\`\`

## 构建

\`\`\`bash
npm run build    # 产物在 dist/
npm run preview  # 预览构建结果
\`\`\`

## 改哪里

| 想改的东西 | 文件 |
|---|---|
| 页面结构 / 文案 | \`site/index.html\` |
| 自定义样式 | \`site/custom.css\`（已在 index.html 中引入，优先级高于模板样式） |
| 模板原有样式 | \`site/_next/**/*.css\` |
| 交互脚本 | \`site/_next/**/*.js\` |

> 说明：这是从线上站点还原的可运行静态工程（HTML + CSS + JS 全部是磁盘上的明文文件，
> 可直接编辑并热更新），不是原始 TSX 源码；组件逻辑已编译进 \`site/_next\` 下的脚本。
`
  );

  const buf = await zip.generateAsync({
    type: 'nodebuffer',
    compression: 'DEFLATE',
    compressionOptions: { level: 6 },
  });

  return new NextResponse(new Uint8Array(buf), {
    headers: {
      'content-type': 'application/zip',
      'content-disposition': `attachment; filename="${slug}.zip"`,
      'content-length': String(buf.length),
      'cache-control': 'no-store',
    },
  });
}

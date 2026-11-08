import Link from 'next/link';
import { GlobalSearch } from '@/components/global-search';

export const metadata = { title: 'Installation | React Bits Pro' };

export default function InstallationPage() {
  return (
    <>
      <GlobalSearch />
      <main className="mx-auto w-full max-w-4xl px-6 py-16">
        <h1 className="text-4xl font-semibold tracking-tight">Installation</h1>
        <p className="mt-3 text-muted-foreground">三步跑起来，不需要任何 license key。</p>

        <div className="mt-10 space-y-8">
          <Step n="1" title="安装依赖">
            <pre className="overflow-x-auto rounded-lg border border-border bg-black/60 p-4 text-xs text-muted-foreground">
{`npm install`}
            </pre>
          </Step>

          <Step n="2" title="启动开发服务">
            <pre className="overflow-x-auto rounded-lg border border-border bg-black/60 p-4 text-xs text-muted-foreground">
{`npm run dev
# → http://localhost:3000`}
            </pre>
          </Step>

          <Step n="3" title="生产构建">
            <pre className="overflow-x-auto rounded-lg border border-border bg-black/60 p-4 text-xs text-muted-foreground">
{`npm run build
npm start`}
            </pre>
          </Step>
        </div>

        <section className="mt-14 space-y-4">
          <h2 className="text-xl font-semibold tracking-tight">目录结构</h2>
          <pre className="overflow-x-auto rounded-lg border border-border bg-black/60 p-5 text-xs leading-relaxed text-muted-foreground">
{`reactbits-app/
├── app/                     页面与路由
│   ├── page.tsx             首页
│   ├── docs/
│   │   ├── components/      组件（free / pro）
│   │   ├── blocks/          300 个营销区块
│   │   ├── app-ui/          300 个应用界面
│   │   ├── templates/       15 个模板
│   │   ├── introduction/
│   │   └── installation/
│   ├── preview/[slug]/      模板全屏预览
│   └── api/                 list / search-index / code
├── components/              UI 组件（导航、侧栏、代码面板…）
├── lib/                     数据层 + Shiki 高亮
├── data/catalog.json        全部源码数据（93 MB）
└── public/templates/        15 个模板站的完整静态文件`}
          </pre>
        </section>

        <section className="mt-12 space-y-3">
          <h2 className="text-xl font-semibold tracking-tight">数据在哪</h2>
          <p className="text-sm text-muted-foreground">
            所有源码集中在一个文件：<code className="rounded bg-white/10 px-1.5 py-0.5 text-xs">data/catalog.json</code>。
            结构是 <code className="rounded bg-white/10 px-1.5 py-0.5 text-xs">{'{ free: { components[] }, pro: { components[], blocks[], appUi[], templates[] } }'}</code>，
            每条含 <code className="rounded bg-white/10 px-1.5 py-0.5 text-xs">slug / name / description / code / deps / lang</code>。
          </p>
          <p className="text-sm text-muted-foreground">
            也可以直接调 API：<code className="rounded bg-white/10 px-1.5 py-0.5 text-xs">/api/list/blocks</code>、
            <code className="mx-1 rounded bg-white/10 px-1.5 py-0.5 text-xs">/api/code/blocks/hero-1</code>。
          </p>
        </section>

        <div className="mt-14">
          <Link href="/docs/components" className="inline-flex h-11 items-center gap-2 rounded-lg gradient-button-static px-6 text-sm font-semibold text-black">
            去看组件
          </Link>
        </div>
      </main>
    </>
  );
}

function Step({ n, title, children }: { n: string; title: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="mb-2 flex items-center gap-2">
        <span className="inline-flex size-6 items-center justify-center rounded-full border border-border text-xs font-medium text-muted-foreground">
          {n}
        </span>
        <h2 className="text-base font-semibold tracking-tight">{title}</h2>
      </div>
      {children}
    </div>
  );
}

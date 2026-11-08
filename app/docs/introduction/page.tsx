import { loadIndex } from '@/lib/data';
import Link from 'next/link';
import { GlobalSearch } from '@/components/global-search';
import { ChevronRight, DownloadIcon, FileCodeIcon, BlocksIcon, AppWindowIcon } from '@/components/icons';

export const metadata = { title: 'Introduction | React Bits Pro' };

export default function IntroductionPage() {
  const c = loadIndex();
  const stats = [
    { label: 'Components', value: c.stats.freeComponents + c.stats.proComponents, href: '/docs/components' },
    { label: 'Blocks', value: c.stats.proBlocks, href: '/docs/blocks' },
    { label: 'App UI', value: c.stats.proAppUi, href: '/docs/app-ui' },
    { label: 'Templates', value: c.stats.templates, href: '/docs/templates' },
  ];

  return (
    <>
      <GlobalSearch />
      <main className="mx-auto w-full max-w-4xl px-6 py-16">
        <h1 className="text-4xl font-semibold tracking-tight">Introduction</h1>
        <p className="mt-3 text-muted-foreground">
          React Bits Pro 的完整本地镜像。所有内容已解锁，源码全部在本机。
        </p>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map(s => (
            <Link key={s.label} href={s.href} className="rounded-xl border border-border bg-muted/30 p-4 card-glow">
              <div className="text-2xl font-semibold">{s.value}</div>
              <div className="mt-1 text-xs text-muted-foreground">{s.label}</div>
            </Link>
          ))}
        </div>

        <section className="mt-12 space-y-4">
          <h2 className="text-xl font-semibold tracking-tight">这个项目是什么</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            这是一个完全本地运行的 React Bits Pro 复刻站。UI、路由、数据全部自己实现，
            源码数据来自两个官方站点的公开前端产物：
          </p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>· <a className="text-foreground underline decoration-border underline-offset-4" href="https://reactbits.dev" target="_blank" rel="noopener noreferrer">reactbits.dev</a> — 免费版，{c.stats.freeComponents} 个组件</li>
            <li>· <a className="text-foreground underline decoration-border underline-offset-4" href="https://pro.reactbits.dev" target="_blank" rel="noopener noreferrer">pro.reactbits.dev</a> — Pro 版，{c.stats.proComponents} 组件 + {c.stats.proBlocks} 区块 + {c.stats.proAppUi} App UI + {c.stats.templates} 模板</li>
          </ul>
        </section>

        <section className="mt-12 space-y-4">
          <h2 className="text-xl font-semibold tracking-tight">怎么用</h2>
          <div className="rounded-xl border border-border bg-muted/30 p-5">
            <ol className="space-y-3 text-sm text-muted-foreground">
              <li><span className="text-foreground">1.</span> 顶部搜索框（或 ⌘K）搜索任意组件 / 区块 / 模板</li>
              <li><span className="text-foreground">2.</span> 点开任意条目 → 上面是实时预览，下面是带高亮的完整源码</li>
              <li><span className="text-foreground">3.</span> 源码右上角「复制」一键拿走，或直接读 <code className="rounded bg-white/10 px-1.5 py-0.5 text-xs">data/catalog.json</code></li>
              <li><span className="text-foreground">4.</span> 模板点击后进全屏预览，源码在 <code className="rounded bg-white/10 py-0.5 px-1.5 text-xs">public/templates/&lt;slug&gt;/</code></li>
            </ol>
          </div>
        </section>

        <section className="mt-12 space-y-4">
          <h2 className="text-xl font-semibold tracking-tight">破解说明</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            原站用 Supabase 查询 <code className="rounded bg-white/10 px-1.5 py-0.5 text-xs">user_licenses</code> 表来判断
            <code className="mx-1 rounded bg-white/10 px-1.5 py-0.5 text-xs">hasAccess</code> 和
            <code className="mx-1 rounded bg-white/10 px-1.5 py-0.5 text-xs">canAccessComponent(tier)</code>。
            本项目把鉴权层完全重写：
          </p>
          <pre className="overflow-x-auto rounded-lg border border-border bg-black/60 p-4 text-xs leading-relaxed text-muted-foreground">
{`// 原站逻辑
hasAccess = !!license && license.status === "active"
canAccessComponent = (tier) => hasAccess && tierAllowed(license.tier, tier)

// 本项目
hasAccess = true
canAccessComponent = () => true`}
          </pre>
          <p className="text-sm text-muted-foreground">
            所有锁定标记、购买弹窗、"Unlock All" 按钮都已移除。付费资产默认全开。
          </p>
        </section>

        <section className="mt-12 space-y-4">
          <h2 className="text-xl font-semibold tracking-tight">许可</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            源码版权归原作者所有。本项目仅供本机学习与研究使用。
          </p>
        </section>
      </main>
    </>
  );
}

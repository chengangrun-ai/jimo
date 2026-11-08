import { loadIndex, getItem, listLight } from '@/lib/data';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Sidebar } from '@/components/sidebar';
import { GlobalSearch } from '@/components/global-search';
import { CleanCode } from '@/components/clean-code';
import { LivePreview } from '@/components/live-preview';
import { ChevronRight, ChevronLeft, ExternalLinkIcon } from '@/components/icons';

export const dynamic = 'force-dynamic';

/** kind: blocks | app-ui */
export async function generateMetadata({ params }: { params: Promise<{ kind: string; slug: string }> }) {
  const { kind, slug } = await params;
  const item = getItem(kind as any, decodeURIComponent(slug));
  return { title: item ? `${item.name} | React Bits Pro` : 'Block' };
}

export default async function BlockDetail({ params }: { params: Promise<{ kind: string; slug: string }> }) {
  const { kind, slug } = await params;
  if (!['blocks', 'app-ui'].includes(kind)) notFound();
  const item = getItem(kind as any, decodeURIComponent(slug));
  if (!item) notFound();
  const siblings = (listLight(kind as any) as any[]) || [];
  const idx = siblings.findIndex(s => s.slug === item.slug);
  const prev = idx > 0 ? siblings[idx - 1] : null;
  const next = idx >= 0 && idx < siblings.length - 1 ? siblings[idx + 1] : null;

  const basePath = `/docs/${kind}`;
  const sourceHref = `https://pro.reactbits.dev/docs/${kind}/${item.slug}`;

  return (
    <>
      <GlobalSearch />
      <div className="flex w-full">
        <Sidebar
          activeHref={`${basePath}/${item.slug}`}
          groups={[
            {
              title: kind === 'blocks' ? 'Blocks' : 'App UI',
              items: siblings.slice(0, 60).map(s => ({ label: s.name, href: `${basePath}/${s.slug}` })),
            },
          ]}
        />

        <main className="min-w-0 flex-1 px-6 lg:px-10 py-10">
          <nav className="mb-4 flex items-center gap-1.5 text-xs text-muted-foreground">
            <Link href={basePath} className="hover:text-foreground">文档</Link>
            <ChevronRight className="size-3" />
            <Link href={basePath} className="hover:text-foreground">{kind === 'blocks' ? '区块' : '应用界面'}</Link>
            <ChevronRight className="size-3" />
            <span className="text-foreground">{item.name}</span>
          </nav>

          <div className="mb-6">
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">{item.name}</h1>
            {item.description && <p className="mt-1.5 text-muted-foreground">{item.description}</p>}
          </div>

          <div className="mb-4 flex flex-wrap items-center gap-2">
            <span className="inline-flex h-9 items-center rounded-lg border border-border/50 bg-muted/40 px-3 font-mono text-xs text-muted-foreground">
              {item.slug}
            </span>
            <span className="inline-flex h-9 items-center rounded-lg border border-border/50 bg-muted/40 px-3 text-xs text-muted-foreground">
              {item.category}
            </span>
            <span className="inline-flex h-9 items-center rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-3 text-xs font-medium text-emerald-400">
              已解锁
            </span>
            <a
              href={sourceHref}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-auto inline-flex h-9 items-center gap-1.5 rounded-lg border border-border/50 px-3 text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              原站页面
              <ExternalLinkIcon className="size-3" />
            </a>
          </div>

          <section className="mb-8">
            <div className="mb-2 flex items-center gap-2">
              <h2 className="text-sm font-semibold tracking-tight">实时预览</h2>
              <span className="text-[11px] text-muted-foreground">本地渲染 · 无需联网</span>
            </div>
            <LivePreview
              href={sourceHref}
              title={item.name}
              height={600}
              renderKind={kind}
              slug={item.slug}
            />
          </section>

          <section>
            <div className="mb-2 flex items-center gap-2">
              <h2 className="text-sm font-semibold tracking-tight">源代码</h2>
              <span className="text-[11px] text-muted-foreground">
                {item.codeLen.toLocaleString()} 字符 · 已解锁
              </span>
            </div>
            <CleanCode
              kind={kind as any}
              slug={item.slug}
              title={item.name}
            />
          </section>

          <nav className="mt-10 flex items-center justify-between gap-3 border-t border-border/60 pt-6">
            {prev ? (
              <Link href={`${basePath}/${prev.slug}`} className="inline-flex items-center gap-2 rounded-lg border border-border/60 px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors">
                <ChevronLeft className="size-4" />
                {prev.name}
              </Link>
            ) : <span />}
            {next ? (
              <Link href={`${basePath}/${next.slug}`} className="inline-flex items-center gap-2 rounded-lg border border-border/60 px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors">
                {next.name}
                <ChevronRight className="size-4" />
              </Link>
            ) : <span />}
          </nav>
        </main>
      </div>
    </>
  );
}

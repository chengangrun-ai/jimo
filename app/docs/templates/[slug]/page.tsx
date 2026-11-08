import { loadIndex, getTemplate } from '@/lib/data';
import { Sidebar } from '@/components/sidebar';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { GlobalSearch } from '@/components/global-search';
import { ArrowRightIcon, ExternalLinkIcon, DownloadIcon, ChevronRight } from '@/components/icons';

export async function generateStaticParams() {
  const c = loadIndex();
  return c.pro.templates.map(t => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const t = getTemplate(slug);
  return { title: t ? `${t.name} | React Bits Pro` : 'Template' };
}

export default async function TemplateDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const t = getTemplate(slug);
  if (!t) notFound();
  const c = loadIndex();

  return (
    <>
      <GlobalSearch />
      <div className="flex w-full">
        <Sidebar
          activeHref={`/docs/templates/${t.slug}`}
          groups={[
            {
              title: '模板',
              items: c.pro.templates.map(x => ({
                label: x.name,
                href: `/docs/templates/${x.slug}`,
                badge: x.isNew ? '新' : x.isFree ? '免费' : undefined,
                badgeTone: x.isFree ? ('free' as const) : ('new' as const),
              })),
            },
          ]}
        />

        <main className="min-w-0 flex-1 px-6 lg:px-10 py-10">
          {/* 面包屑 */}
          <nav className="mb-4 flex items-center gap-1.5 text-xs text-muted-foreground">
            <Link href="/docs/templates" className="hover:text-foreground">文档</Link>
            <ChevronRight className="size-3" />
            <Link href="/docs/templates" className="hover:text-foreground">模板</Link>
            <ChevronRight className="size-3" />
            <span className="text-foreground">{t.name}</span>
          </nav>

          <div className="mb-6 flex items-start justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">{t.name}</h1>
              <p className="mt-1.5 text-muted-foreground">{t.description}</p>
            </div>
            <div className="flex items-center gap-2">
              {t.isNew && (
                <span className="inline-flex items-center rounded-md border border-border/60 px-2 py-1 text-[11px] font-medium">
                  新
                </span>
              )}
              {t.isFree && (
                <span className="inline-flex items-center rounded-md border border-emerald-500/30 bg-emerald-500/10 px-2 py-1 text-[11px] font-medium text-emerald-400">
                  免费
                </span>
              )}
            </div>
          </div>

          {/* 操作条 */}
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Link
              href={`/preview/${t.slug}/`}
              className="inline-flex h-9 items-center gap-2 rounded-md gradient-button-static px-4 text-sm font-semibold text-black"
            >
              <ExternalLinkIcon className="size-4" />
              实时预览
            </Link>
            <a
              href={`/api/download/template/${t.slug}`}
              className="inline-flex h-9 items-center gap-2 rounded-md border border-border/60 px-4 text-sm font-medium text-foreground hover:bg-secondary transition-colors"
            >
              <DownloadIcon className="size-4" />
              下载源码（ZIP）
            </a>
            <span className="ml-auto text-xs text-muted-foreground">{t.files} 个文件</span>
          </div>

          {/* 大预览 */}
          <div className="overflow-hidden rounded-xl border border-border bg-muted/40">
            <div className="relative aspect-[16/10] w-full bg-black">
              <img
                src={`/templates/${t.slug}/_preview.png`}
                alt={t.name}
                className="h-full w-full object-cover object-top"
              />
            </div>
          </div>

          {/* 说明 */}
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <InfoCard label="Pages" value="完整多页" hint="路由与交互全部可用" />
            <InfoCard label="Stack" value="Next.js 15" hint="React 19 + Tailwind" />
            <InfoCard label="License" value="已解锁" hint="本地完整源码" />
          </div>

          <div className="mt-8 rounded-xl border border-border bg-muted/30 p-6">
            <h2 className="mb-2 text-lg font-semibold tracking-tight">如何使用</h2>
            <p className="mb-3 text-sm text-muted-foreground">
              源码已完整落在项目的 <code className="rounded bg-white/10 px-1.5 py-0.5 text-xs">public/templates/{t.slug}/</code> 目录，
              直接复制整个目录到你的项目即可运行，无需任何授权。
            </p>
            <pre className="overflow-x-auto rounded-lg bg-black/60 p-4 text-xs leading-relaxed text-muted-foreground">
{`cp -r public/templates/${t.slug} ./my-site
cd ./my-site
npm install && npm run dev`}
            </pre>
          </div>
        </main>
      </div>
    </>
  );
}

function InfoCard({ label, value, hint }: { label: string; value: string; hint: string }) {
  return (
    <div className="rounded-xl border border-border bg-muted/30 p-4">
      <div className="text-xs text-muted-foreground">{label}</div>
      <div className="mt-1 text-base font-semibold">{value}</div>
      <div className="mt-0.5 text-xs text-muted-foreground">{hint}</div>
    </div>
  );
}

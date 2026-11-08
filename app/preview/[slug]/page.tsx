import { loadIndex } from '@/lib/data';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ChevronLeft, ExternalLinkIcon } from '@/components/icons';

export async function generateStaticParams() {
  const c = loadIndex();
  return c.pro.templates.map(t => ({ slug: t.slug }));
}

export const dynamicParams = true;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return { title: `${slug} · Preview` };
}

/**
 * 模板预览：全屏 iframe 指向 public/templates/<slug>/ 的本地站点。
 * 用 client 组件是因为需要「全屏 / 返回」交互。
 */
export default async function PreviewPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = loadIndex();
  const t = c.pro.templates.find(x => x.slug === slug);
  if (!t) notFound();

  return (
    <div className="fixed inset-0 z-[60] flex flex-col bg-black">
      {/* 顶部 bar */}
      <div className="flex h-12 shrink-0 items-center gap-3 border-b border-border/60 bg-[#0a0a0a] px-4">
        <Link
          href={`/docs/templates/${t.slug}`}
          className="inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-sm text-muted-foreground hover:bg-white/5 hover:text-foreground transition-colors"
        >
          <ChevronLeft className="size-4" />
          返回
        </Link>
        <span className="text-sm font-medium">{t.name}</span>
        <span className="rounded bg-white/10 px-1.5 py-0.5 text-[10px] uppercase tracking-wide text-muted-foreground">
          preview
        </span>
        <a
          href={`/templates/${t.slug}/`}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-auto inline-flex items-center gap-1.5 rounded-md border border-border/60 px-2.5 py-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
        >
          新窗口打开
          <ExternalLinkIcon className="size-3" />
        </a>
      </div>

      {/* 站点本体 */}
      <iframe
        src={`/templates/${t.slug}/index.html`}
        title={t.name}
        className="min-h-0 flex-1 w-full border-0 bg-white"
      />
    </div>
  );
}

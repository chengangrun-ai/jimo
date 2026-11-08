import Link from 'next/link';
import { notFound } from 'next/navigation';
import { GlobalSearch } from '@/components/global-search';
import { KitDoc } from '@/components/kit-doc';
import { loadAgentKit, getKitItem, readKitDoc, KIND_LABEL } from '@/lib/agent-kit';
import { ChevronRight, ChevronLeft, ExternalLinkIcon } from '@/components/icons';

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }: { params: Promise<{ kind: string; slug: string }> }) {
  const { kind, slug } = await params;
  const it = getKitItem(kind, slug);
  return { title: it ? `${it.name} | Agent Kit` : 'Agent Kit' };
}

export default async function KitDetail({ params }: { params: Promise<{ kind: string; slug: string }> }) {
  const { kind, slug } = await params;
  const k = kind.replace(/s$/, '');   // skills -> skill
  const it = getKitItem(k, decodeURIComponent(slug));
  if (!it) notFound();

  const md = readKitDoc(it);
  const kit = loadAgentKit();
  const group = k === 'skill' ? kit.skills : k === 'prompt' ? kit.prompts : kit.recipes;
  const idx = group.findIndex(x => x.slug === it.slug);
  const prev = idx > 0 ? group[idx - 1] : null;
  const next = idx >= 0 && idx < group.length - 1 ? group[idx + 1] : null;

  return (
    <>
      <GlobalSearch />
      <main className="mx-auto w-full max-w-[1100px] px-5 sm:px-8 py-8">
        {/* 面包屑 */}
        <nav className="mb-4 flex items-center gap-1.5 text-sm text-muted-foreground">
          <Link href="/docs/agent-kit" className="hover:text-foreground transition-colors">Agent Kit</Link>
          <ChevronRight className="size-3.5" />
          <span>{KIND_LABEL[k] || k}</span>
          <ChevronRight className="size-3.5" />
          <span className="text-foreground">{it.name}</span>
        </nav>

        <div className="mb-6">
          <div className="flex flex-wrap items-center gap-2">
            <h1 className="text-3xl font-semibold tracking-tight">{it.name}</h1>
            <span className="rounded-full border border-border px-2.5 py-0.5 text-[11px] text-muted-foreground">
              {KIND_LABEL[k] || k}
            </span>
            {it.isFree && (
              <span className="rounded-full bg-emerald-500/15 px-2.5 py-0.5 text-[11px] font-medium text-emerald-400">
                官方免费项
              </span>
            )}
          </div>
          <p className="mt-2 max-w-3xl text-muted-foreground">{it.description}</p>
          <div className="mt-3 flex flex-wrap items-center gap-2 text-[11px] text-muted-foreground">
            <span className="rounded bg-white/10 px-2 py-0.5">{it.category}</span>
            <span className="rounded bg-white/10 px-2 py-0.5">{it.sections} 节</span>
            <span className="rounded bg-white/10 px-2 py-0.5">{it.version}</span>
            <span className="rounded bg-white/10 px-2 py-0.5">官方约 {it.words.toLocaleString()} 词</span>
            <a href={it.href} target="_blank" rel="noopener noreferrer" className="ml-1 inline-flex items-center gap-1 rounded border border-border/60 px-2 py-0.5 transition-colors hover:text-foreground">
              原站页面 <ExternalLinkIcon className="size-3" />
            </a>
          </div>
        </div>

        {it.produces?.length ? (
          <div className="mb-6 rounded-xl border border-border bg-muted/30 p-4">
            <div className="mb-2 text-sm font-semibold tracking-tight">用它能做出什么</div>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              {it.produces.map(p => <li key={p}>· {p}</li>)}
            </ul>
          </div>
        ) : null}

        {/* 目录 */}
        {it.toc?.length ? (
          <details className="mb-6 rounded-xl border border-border bg-muted/20 p-4">
            <summary className="cursor-pointer text-sm font-semibold tracking-tight">全部 {it.toc.length} 节</summary>
            <ol className="mt-3 columns-1 gap-6 text-sm text-muted-foreground sm:columns-2">
              {it.toc.map(s => (
                <li key={s.n} className="mb-1 break-inside-avoid">
                  <span className="mr-1.5 inline-block w-5 text-right opacity-50">{s.n}</span>{s.title}
                </li>
              ))}
            </ol>
          </details>
        ) : null}

        <KitDoc markdown={md} slug={it.slug} name={it.name} isFree={it.isFree} />

        {/* 上下篇 */}
        <div className="mt-8 flex items-center justify-between gap-4">
          {prev ? (
            <Link href={`/docs/agent-kit/${prev.kind}s/${prev.slug}`} className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm transition-colors hover:bg-white/5">
              <ChevronLeft className="size-4" /> {prev.name}
            </Link>
          ) : <span />}
          {next ? (
            <Link href={`/docs/agent-kit/${next.kind}s/${next.slug}`} className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm transition-colors hover:bg-white/5">
              {next.name} <ChevronRight className="size-4" />
            </Link>
          ) : <span />}
        </div>
      </main>
    </>
  );
}

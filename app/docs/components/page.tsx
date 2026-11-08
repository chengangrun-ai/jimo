import { loadIndex, listLight } from '@/lib/data';
import { Sidebar } from '@/components/sidebar';
import { ItemGrid } from '@/components/item-grid';
import { GlobalSearch } from '@/components/global-search';

export const dynamic = 'force-dynamic';
export const metadata = { title: 'Components | React Bits Pro' };

export default function ComponentsPage() {
  const c = loadIndex();
  const pro = (listLight('components') as any[]).map(i => ({ ...i, description: i.description || '' }));
  const free = (listLight('free') as any[]).map(i => ({
    id: i.id,
    slug: i.slug,
    name: i.name,
    description: i.description || '',
    category: i.category,
    tags: i.tags,
    lang: i.lang,
  }));

  return (
    <>
      <GlobalSearch />
      <div className="flex w-full">
        <Sidebar
          activeHref="/docs/components"
          groups={[
            { title: '免费组件', items: free.slice(0, 40).map(i => ({ label: i.name, href: `/docs/components/free/${i.slug}` })) },
            { title: 'Pro 组件', items: pro.slice(0, 40).map(i => ({ label: i.name, href: `/docs/components/pro/${i.slug}` })) },
          ]}
        />
        <main className="min-w-0 flex-1 px-6 lg:px-10 py-10">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">组件</h1>
            <p className="mt-1.5 text-muted-foreground">
              共 {free.length + pro.length} 个动画组件 —— {pro.length} 个 Pro + {free.length} 个免费，全部已解锁。
            </p>
          </div>

          <section className="mb-14">
            <div className="mb-4 flex items-center gap-3">
              <h2 className="text-lg font-semibold tracking-tight">免费组件</h2>
              <span className="inline-flex items-center rounded-md border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-[11px] font-medium text-emerald-400">
                {free.length}
              </span>
            </div>
            <ItemGrid items={free} basePath="/docs/components/free" renderKind="free" />
          </section>

          <section>
            <div className="mb-4 flex items-center gap-3">
              <h2 className="text-lg font-semibold tracking-tight">Pro 组件</h2>
              <span className="inline-flex items-center rounded-md border border-border/60 px-2 py-0.5 text-[11px] font-medium text-muted-foreground">
                {pro.length}
              </span>
              <span className="text-xs text-emerald-400">已全部解锁</span>
            </div>
            <ItemGrid items={pro} basePath="/docs/components/pro" previewType="components" />
          </section>
        </main>
      </div>
    </>
  );
}

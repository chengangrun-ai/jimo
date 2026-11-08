import { loadIndex, listLight } from '@/lib/data';
import { Sidebar } from '@/components/sidebar';
import { ItemGrid } from '@/components/item-grid';
import { GlobalSearch } from '@/components/global-search';

export const metadata = { title: 'Blocks | React Bits Pro' };

export default function BlocksPage() {
  const items = (listLight('blocks') as any[]).map(i => ({
    ...i,
    description: i.description || '',
  }));
  const cats = [...new Set(items.map(i => i.category))] as string[];

  return (
    <>
      <GlobalSearch />
      <div className="flex w-full">
        <Sidebar
          activeHref="/docs/blocks"
          groups={[
            {
              title: 'Block categories',
              items: cats.map(c => ({
                label: c,
                href: `/docs/blocks?cat=${encodeURIComponent(c)}`,
                badge: String(items.filter(i => i.category === c).length),
              })),
            },
          ]}
        />
        <main className="min-w-0 flex-1 px-6 lg:px-10 py-10">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">区块</h1>
            <p className="mt-1.5 text-muted-foreground">
              共 {items.length} 个生产级营销页面区块，覆盖 {cats.length} 个分类。全部已解锁。
            </p>
          </div>
          <ItemGrid items={items} basePath="/docs/blocks" renderKind="blocks" />
        </main>
      </div>
    </>
  );
}

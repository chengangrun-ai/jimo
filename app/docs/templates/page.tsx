import { loadIndex } from '@/lib/data';
import { Sidebar } from '@/components/sidebar';
import { TemplateGrid } from '@/components/template-grid';
import { GlobalSearch } from '@/components/global-search';

export const metadata = { title: '模板 | React Bits Pro' };

export default function TemplatesPage() {
  const c = loadIndex();
  const templates = c.pro.templates;

  return (
    <>
      <GlobalSearch />
      <div className="flex w-full">
        <Sidebar
          activeHref="/docs/templates"
          groups={[
            {
              title: '模板',
              items: templates.map(t => ({
                label: t.name,
                href: `/docs/templates/${t.slug}`,
                badge: t.isNew ? '新' : t.isFree ? '免费' : undefined,
                badgeTone: t.isFree ? ('free' as const) : ('new' as const),
              })),
            },
          ]}
        />

        <main className="min-w-0 flex-1 px-6 lg:px-10 py-10">
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-2">
              <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">模板</h1>
            </div>
            <p className="text-muted-foreground">
              生产级落地页模板，可直接下载源码并按需定制。
            </p>
          </div>

          <TemplateGrid templates={templates} />
        </main>
      </div>
    </>
  );
}

import Link from 'next/link';
import { GlobalSearch } from '@/components/global-search';
import { WrenchIcon, ArrowRightIcon, ChevronRight } from '@/components/icons';

export const dynamic = 'force-static';
export const metadata = { title: '工具 | React Bits Pro' };

/** 免费版的 5 个在线工具（原站交互式编辑器） */
const TOOLS = [
  { slug: 'background-studio', name: 'Background Studio', desc: '调色板 + 滑块，实时生成动画背景' },
  { slug: 'center-stage', name: 'Center Stage', desc: '正中央的 3D / 粒子舞台编辑器' },
  { slug: 'shape-magic', name: 'Shape Magic', desc: '形状与路径动画实时调节' },
  { slug: 'texture-lab', name: 'Texture Lab', desc: '程序化纹理生成与导出' },
  { slug: 'sound-lab', name: 'Sound Lab', desc: '音效可视化与合成' },
];

export default function ToolsPage() {
  return (
    <>
      <GlobalSearch />
      <main className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 py-10">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">工具</h1>
          <p className="mt-1.5 text-muted-foreground">
            免费版的 {TOOLS.length} 个在线工具，点开即可实时调节参数。
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3 pb-12">
          {TOOLS.map(t => (
            <Link
              key={t.slug}
              href={`/tools/${t.slug}`}
              className="group flex flex-col overflow-hidden rounded-xl border border-border bg-muted/30 card-glow"
            >
              <div className="flex aspect-[16/10] items-center justify-center bg-[#0d0d0d]">
                <WrenchIcon className="size-8 text-muted-foreground/40 transition-colors group-hover:text-foreground/70" />
              </div>
              <div className="flex flex-1 flex-col px-4 py-3">
                <h3 className="flex items-center gap-1.5 text-sm font-semibold tracking-tight">
                  {t.name}
                  <ArrowRightIcon className="size-3.5 opacity-0 transition-opacity group-hover:opacity-70" />
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{t.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}
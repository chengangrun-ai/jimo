import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ChevronLeft, ExternalLinkIcon } from '@/components/icons';

export const dynamicParams = true;

const TOOLS: Record<string, string> = {
  'background-studio': 'Background Studio',
  'center-stage': 'Center Stage',
  'shape-magic': 'Shape Magic',
  'texture-lab': 'Texture Lab',
  'sound-lab': 'Sound Lab',
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return { title: `${TOOLS[slug] || slug} | React Bits Pro` };
}

/**
 * 工具页：全屏 iframe 嵌入原站工具，交互（拖滑块、实时预览）完全可用。
 */
export default async function ToolPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!TOOLS[slug]) notFound();

  return (
    <div className="fixed inset-0 z-[60] flex flex-col bg-black">
      <div className="flex h-12 shrink-0 items-center gap-3 border-b border-border/60 bg-[#0a0a0a] px-4">
        <Link
          href="/tools"
          className="inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-sm text-muted-foreground hover:bg-white/5 hover:text-foreground transition-colors"
        >
          <ChevronLeft className="size-4" />
          返回
        </Link>
        <span className="text-sm font-medium">{TOOLS[slug]}</span>
        <span className="rounded bg-white/10 px-1.5 py-0.5 text-[10px] uppercase tracking-wide text-muted-foreground">
          tool
        </span>
        <a
          href={`https://reactbits.dev/tools/${slug}`}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-auto inline-flex items-center gap-1.5 rounded-md border border-border/60 px-2.5 py-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
        >
          新窗口打开
          <ExternalLinkIcon className="size-3" />
        </a>
      </div>

      <iframe
        src={`https://reactbits.dev/tools/${slug}`}
        title={TOOLS[slug]}
        className="min-h-0 flex-1 w-full border-0 bg-[#0a0a0a]"
      />
    </div>
  );
}
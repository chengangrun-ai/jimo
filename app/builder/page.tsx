import Link from 'next/link';
import { Builder } from '@/components/builder';
import { ChevronLeft } from '@/components/icons';

export const metadata = { title: 'Landing Builder | React Bits Pro' };

export default function BuilderPage() {
  return (
    <div>
      <div className="flex h-12 items-center gap-3 border-b border-border px-4">
        <Link href="/" className="inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-sm text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground">
          <ChevronLeft className="size-4" /> 返回
        </Link>
        <span className="text-sm font-medium">Landing Builder</span>
        <span className="rounded bg-white/10 px-1.5 py-0.5 text-[10px] uppercase tracking-wide text-muted-foreground">已解锁</span>
      </div>
      <Builder />
    </div>
  );
}
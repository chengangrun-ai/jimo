import { NextResponse } from 'next/server';
import { listLight } from '@/lib/data';

export const dynamic = 'force-dynamic';

export async function GET(_req: Request, { params }: { params: Promise<{ kind: string }> }) {
  const { kind } = await params;
  const k = (['free', 'components', 'blocks', 'app-ui'].includes(kind) ? kind : 'components') as
    | 'free' | 'components' | 'blocks' | 'app-ui';
  return NextResponse.json({ items: listLight(k) });
}

import { NextResponse } from 'next/server';
import { getItem, readCode } from '@/lib/data';
import { highlight } from '@/lib/highlight';

export async function GET(req: Request, { params }: { params: Promise<{ kind: string; slug: string }> }) {
  const { kind, slug } = await params;
  const k = (['free', 'components', 'blocks', 'app-ui'].includes(kind) ? kind : 'components') as
    | 'free' | 'components' | 'blocks' | 'app-ui';
  const item = getItem(k, decodeURIComponent(slug));
  if (!item) return NextResponse.json({ error: 'not found' }, { status: 404 });
  const code = readCode(item);
  const html = await highlight(code, item.lang || 'tsx');
  return NextResponse.json({
    id: item.id,
    name: item.name,
    description: item.description || '',
    category: item.category,
    lang: item.lang,
    deps: item.deps || [],
    original: item.original || '',
    code,
    html,
  });
}

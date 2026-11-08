import { NextResponse } from 'next/server';
import { getItem, readCode } from '@/lib/data';
import { highlight } from '@/lib/highlight';
import fs from 'fs';
import path from 'path';

export const dynamic = 'force-dynamic';

/** 返回反编译后的干净 TSX */
export async function GET(req: Request, { params }: { params: Promise<{ kind: string; slug: string }> }) {
  const { kind, slug } = await params;
  const k = (['free', 'components', 'blocks', 'app-ui'].includes(kind) ? kind : 'components') as
    | 'free' | 'components' | 'blocks' | 'app-ui';
  const item = getItem(k, decodeURIComponent(slug));
  if (!item) return NextResponse.json({ error: 'not found' }, { status: 404 });

  const url = new URL(req.url);
  const raw = url.searchParams.get('raw') === '1';

  // 干净 TSX（免费版本身就是干净 TSX）
  const tsxPath = path.join(process.cwd(), 'data', 'tsx', k === 'free' ? 'components' : k, item.slug + '.tsx');
  let code = '';
  let sourceLabel = 'decompiled';
  if (k === 'free') {
    code = readCode(item);
    sourceLabel = 'original';
  } else if (fs.existsSync(tsxPath)) {
    code = fs.readFileSync(tsxPath, 'utf8');
  } else {
    code = readCode(item);
    sourceLabel = 'bundled';
  }

  if (raw) {
    return new NextResponse(code, { headers: { 'content-type': 'text/plain; charset=utf-8' } });
  }

  const html = await highlight(code, 'tsx');
  return NextResponse.json({
    id: item.id,
    name: item.name,
    category: item.category,
    deps: (item as any).deps || [],
    original: (item as any).original || '',
    sourceLabel,
    chars: code.length,
    code,
    html,
  });
}

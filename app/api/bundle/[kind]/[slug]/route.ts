import { NextResponse } from 'next/server';
import { compileRender, type RenderKind } from '@/lib/render';

export const dynamic = 'force-dynamic';

/**
 * 返回组件的编译产物（自包含 IIFE，内联 React / ReactDOM / motion / lucide-react）。
 *
 * 为什么不直接塞进页面 props：单个产物 600KB–1MB，塞进 RSC flight payload 会被
 * 截断/丢弃，浏览器端根本收不到。用独立接口按需拉取，还能让浏览器缓存。
 */
export async function GET(req: Request, { params }: { params: Promise<{ kind: string; slug: string }> }) {
  const { kind, slug } = await params;

  if (!['components', 'blocks', 'app-ui', 'free'].includes(kind)) {
    return NextResponse.json({ ok: false, error: 'bad kind' }, { status: 400 });
  }

  // 带 ?t= 时间戳表示强制重新编译（改过 shim / 依赖后要用它刷新）
  const url = new URL(req.url);
  const noCache = url.searchParams.has('t');

  const result = await compileRender(kind as RenderKind, decodeURIComponent(slug), noCache);

  if (!result.ok) {
    return NextResponse.json(
      { ok: false, error: result.error || 'compile failed', deps: result.deps },
      { status: 422 }
    );
  }

  return new NextResponse(result.code, {
    headers: {
      'content-type': 'text/javascript; charset=utf-8',
      // 编译产物随源码变化，缓存交给自己控制（浏览器端用 no-store 拉取）
      'cache-control': 'no-cache',
      // 依赖清单可能含换行/中文等非法头字符（会直接抛 Headers.append 错误），先净化
      'x-rb-deps': result.deps.map((d) => String(d).replace(/[^\x20-\x7e]/g, '')).join(','),
    },
  });
}

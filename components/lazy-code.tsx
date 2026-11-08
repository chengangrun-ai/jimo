'use client';

import { useEffect, useState } from 'react';
import { CopyIcon, CheckIcon, SpinnerIcon } from './icons';

/**
 * 懒加载代码面板：首屏不发代码，挂载后按需从 /api/code 拉高亮结果。
 * 这样详情页 HTML 从几 MB 降到几十 KB，秒开。
 */
export function LazyCode({
  kind,
  slug,
  title,
}: {
  kind: 'free' | 'components' | 'blocks' | 'app-ui';
  slug: string;
  title: string;
}) {
  const [state, setState] = useState<{ html: string; code: string; lang: string; deps: string[]; original: string; chars: number } | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [wrap, setWrap] = useState(false);

  useEffect(() => {
    let alive = true;
    setState(null);
    setError(null);
    fetch(`/api/code/${kind}/${encodeURIComponent(slug)}`)
      .then(r => (r.ok ? r.json() : Promise.reject(new Error('HTTP ' + r.status))))
      .then(d => { if (alive) setState({ ...d, chars: d.code?.length || 0 }); })
      .catch(e => { if (alive) setError(String(e.message || e)); });
    return () => { alive = false; };
  }, [kind, slug]);

  const doCopy = async () => {
    if (!state?.code) return;
    try {
      await navigator.clipboard.writeText(state.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {}
  };

  if (error) {
    return (
      <div className="rounded-xl border border-border bg-[#0d0d0d] p-6 text-sm text-destructive">
        加载源码失败：{error}
      </div>
    );
  }

  if (!state) {
    return (
      <div className="overflow-hidden rounded-xl border border-border bg-[#0d0d0d]">
        <div className="flex items-center gap-2 border-b border-border/60 px-4 py-2.5">
          <span className="size-2.5 rounded-full bg-[#ff5f57]" />
          <span className="size-2.5 rounded-full bg-[#febc2e]" />
          <span className="size-2.5 rounded-full bg-[#28c840]" />
          <span className="ml-2 font-mono text-xs text-muted-foreground">{title}</span>
          <span className="ml-auto flex items-center gap-1.5 text-[11px] text-muted-foreground">
            <SpinnerIcon className="size-3 animate-spin" />
            正在加载源码…
          </span>
        </div>
        <div className="space-y-2 p-4">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="skeleton-shimmer h-3 rounded" style={{ width: `${40 + (i * 37) % 55}%` }} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-xl border border-border bg-[#0d0d0d]">
      <div className="flex items-center gap-2 border-b border-border/60 px-4 py-2.5">
        <span className="size-2.5 rounded-full bg-[#ff5f57]" />
        <span className="size-2.5 rounded-full bg-[#febc2e]" />
        <span className="size-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-2 font-mono text-xs text-muted-foreground">{title}</span>
        <span className="rounded bg-white/10 px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
          {state.lang}
        </span>
        <div className="ml-auto flex items-center gap-1">
          <button
            onClick={() => setWrap(w => !w)}
            className={`rounded px-2 py-1 text-[11px] transition-colors ${wrap ? 'bg-white/10 text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
          >
            自动换行
          </button>
          <button
            onClick={doCopy}
            className="inline-flex items-center gap-1.5 rounded px-2 py-1 text-[11px] text-muted-foreground transition-colors hover:bg-white/10 hover:text-foreground"
          >
            {copied ? <CheckIcon className="size-3 text-emerald-400" /> : <CopyIcon className="size-3" />}
            {copied ? '已复制' : '复制'}
          </button>
        </div>
      </div>

      <div
        className={`shiki-host max-h-[70vh] overflow-auto scroll-area ${wrap ? '[&_pre]:whitespace-pre-wrap [&_pre]:break-words' : ''}`}
        dangerouslySetInnerHTML={{ __html: state.html }}
      />

      {(state.deps?.length > 0 || state.original) && (
        <div className="flex flex-wrap items-center gap-2 border-t border-border/60 px-4 py-2.5 text-xs text-muted-foreground">
          {state.deps?.length ? (
            <>
              <span>依赖：</span>
              {state.deps.map(d => <code key={d} className="rounded bg-white/10 px-1.5 py-0.5 text-[11px]">{d}</code>)}
            </>
          ) : null}
          {state.original && <span className="ml-auto font-mono text-[11px] opacity-60">{state.original}</span>}
        </div>
      )}
    </div>
  );
}
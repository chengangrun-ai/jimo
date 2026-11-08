'use client';

import { useState, useEffect, useMemo } from 'react';
import { CopyIcon, CheckIcon, DownloadIcon } from './icons';

/**
 * 源码面板：带 Shiki 高亮 + 复制按钮 + 文件切换。
 */
export function CodePanel({
  title,
  html,
  code,
  lang,
  deps,
  original,
  files,
}: {
  title: string;
  html: string;
  code: string;
  lang?: string;
  deps?: string[];
  original?: string;
  files?: { name: string; html: string; code: string }[];
}) {
  const [activeFile, setActiveFile] = useState(0);
  const [copied, setCopied] = useState(false);
  const [showWrap, setShowWrap] = useState(false);

  const current = files && files.length ? files[activeFile] : { name: title, html, code };

  const doCopy = async () => {
    try {
      await navigator.clipboard.writeText(current.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {}
  };

  return (
    <div className="overflow-hidden rounded-xl border border-border bg-[#0d0d0d]">
      {/* 顶部条 */}
      <div className="flex items-center gap-2 border-b border-border/60 px-4 py-2.5">
        <div className="flex items-center gap-1.5">
          <span className="size-2.5 rounded-full bg-[#ff5f57]" />
          <span className="size-2.5 rounded-full bg-[#febc2e]" />
          <span className="size-2.5 rounded-full bg-[#28c840]" />
        </div>
        <span className="ml-2 font-mono text-xs text-muted-foreground">{current.name}</span>
        {lang && (
          <span className="rounded bg-white/10 px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
            {lang}
          </span>
        )}
        <div className="ml-auto flex items-center gap-1">
          <button
            onClick={() => setShowWrap(w => !w)}
            className={`rounded px-2 py-1 text-[11px] transition-colors ${showWrap ? 'bg-white/10 text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
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

      {/* 文件切换 */}
      {files && files.length > 1 && (
        <div className="flex items-center gap-1 overflow-x-auto border-b border-border/60 px-3 py-1.5">
          {files.map((f, i) => (
            <button
              key={f.name}
              onClick={() => setActiveFile(i)}
              className={`shrink-0 rounded px-2 py-1 font-mono text-[11px] transition-colors ${
                i === activeFile ? 'bg-white/10 text-foreground' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {f.name}
            </button>
          ))}
        </div>
      )}

      {/* 代码 */}
      <div
        className={`shiki-host max-h-[70vh] overflow-auto scroll-area ${showWrap ? '[&_pre]:whitespace-pre-wrap [&_pre]:break-words' : ''}`}
        dangerouslySetInnerHTML={{ __html: current.html }}
      />

      {/* 底部依赖 */}
      {(deps?.length || original) && (
        <div className="flex flex-wrap items-center gap-2 border-t border-border/60 px-4 py-2.5 text-xs text-muted-foreground">
          {deps?.length ? (
            <>
              <span>依赖：</span>
              {deps.map(d => (
                <code key={d} className="rounded bg-white/10 px-1.5 py-0.5 text-[11px]">{d}</code>
              ))}
            </>
          ) : null}
          {original && <span className="ml-auto font-mono text-[11px] opacity-60">{original}</span>}
        </div>
      )}
    </div>
  );
}

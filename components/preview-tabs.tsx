'use client';

import { useState } from 'react';
import { EyeIcon, CodeIcon, MonitorIcon, TabletIcon, SmartphoneIcon, RotateIcon, MaximizeIcon } from './icons';

export function PreviewTabs({
  preview,
  codePanel,
  name,
}: {
  preview: React.ReactNode;
  codePanel: React.ReactNode;
  name: string;
}) {
  const [tab, setTab] = useState<'preview' | 'code'>('preview');
  const [device, setDevice] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [nonce, setNonce] = useState(0);

  const width = device === 'desktop' ? '100%' : device === 'tablet' ? 834 : 390;

  return (
    <div>
      {/* 工具条 */}
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <div className="inline-flex items-center gap-1 rounded-lg border border-border/50 bg-muted/40 p-1 h-9">
          <button
            onClick={() => setTab('preview')}
            className={`inline-flex h-7 items-center gap-1.5 rounded-md px-3 text-xs font-medium transition-colors ${
              tab === 'preview' ? 'bg-background text-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            <EyeIcon className="size-3.5" />
            Preview
          </button>
          <button
            onClick={() => setTab('code')}
            className={`inline-flex h-7 items-center gap-1.5 rounded-md px-3 text-xs font-medium transition-colors ${
              tab === 'code' ? 'bg-background text-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            <CodeIcon className="size-3.5" />
            Code
          </button>
        </div>

        <span className="inline-flex h-9 items-center gap-1.5 rounded-lg border border-border/50 bg-muted/40 px-3 font-mono text-xs text-muted-foreground">
          {name}
        </span>

        <div className="ml-auto flex items-center gap-1">
          <div className="inline-flex items-center gap-0.5 rounded-lg border border-border/50 bg-muted/40 p-1">
            {([
              ['desktop', MonitorIcon],
              ['tablet', TabletIcon],
              ['mobile', SmartphoneIcon],
            ] as const).map(([k, Icon]) => (
              <button
                key={k}
                onClick={() => setDevice(k)}
                title={k}
                className={`inline-flex size-7 items-center justify-center rounded-md transition-colors ${
                  device === k ? 'bg-background text-foreground' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <Icon className="size-3.5" />
              </button>
            ))}
          </div>
          <button
            onClick={() => setNonce(n => n + 1)}
            title="重新加载"
            className="inline-flex size-9 items-center justify-center rounded-lg border border-border/50 bg-muted/40 text-muted-foreground hover:text-foreground transition-colors"
          >
            <RotateIcon className="size-3.5" />
          </button>
        </div>
      </div>

      {tab === 'preview' ? (
        <div className="overflow-hidden rounded-xl border border-border bg-[#0b0b0b]">
          <div className="flex justify-center p-4">
            <div style={{ width, maxWidth: '100%' }} key={nonce}>
              {preview}
            </div>
          </div>
        </div>
      ) : (
        <div>{codePanel}</div>
      )}
    </div>
  );
}

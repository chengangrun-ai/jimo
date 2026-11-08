'use client';

/**
 * 积木堆 站标。
 * 原来是从原站提取的 React Bits Pro 字标，换站名后不再使用。
 * 这里自绘一枚方块堆叠图形 + 站名文字。
 */
export function Logo({ className = 'h-6' }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="shrink-0">
        <rect x="2" y="14" width="8" height="8" rx="2" fill="currentColor" />
        <rect x="14" y="14" width="8" height="8" rx="2" fill="currentColor" opacity="0.55" />
        <rect x="8" y="2" width="8" height="8" rx="2" fill="currentColor" />
      </svg>
      <span className="text-base font-bold tracking-tight text-foreground">积木堆</span>
    </span>
  );
}

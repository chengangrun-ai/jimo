import type { Metadata } from 'next';
import './globals.css';
import { TopNav } from '@/components/top-nav';
import { SiteFooter } from '@/components/site-footer';

export const metadata: Metadata = {
  // 线上部署后改成正式域名；未配置时用环境变量，本地构建不会报警告
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://jimo.vercel.app'),
  title: '积木堆 — 组件、区块、模板，拿来就搭',
  description:
    '413 个可直接使用的界面组件，600 个营销区块与应用界面，15 套完整落地页模板。源码全在本地，随时查看、复制、上线。',
  openGraph: {
    title: '积木堆 — 组件、区块、模板，拿来就搭',
    description: '413 个界面组件、600 个营销区块与应用界面、15 套完整落地页模板，拿来就搭。',
    type: 'website',
    locale: 'zh_CN',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: '积木堆' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '积木堆 — 组件、区块、模板，拿来就搭',
    description: '413 个界面组件、600 个区块与应用界面、15 套落地页模板，拿来就搭。',
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN" className="dark">
      <body className="font-sans antialiased overflow-x-hidden">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-background focus:px-4 focus:py-3 focus:text-sm focus:font-semibold focus:outline focus:outline-2 focus:outline-foreground"
        >
          跳到主要内容
        </a>
        <TopNav />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}

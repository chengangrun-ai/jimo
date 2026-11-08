import Link from 'next/link';
import { Logo } from './logo';

/**
 * 全站页脚。
 * 技能 B10 要求：页脚必须有隐私政策和使用条款的链接，且不能是死链。
 */
export function SiteFooter() {
  return (
    <footer className="w-full">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-8 px-6 py-16 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center">
          <Logo />
        </div>

        <nav aria-label="页脚导航" className="flex flex-wrap items-center gap-6">
          <Link
            href="/docs/components"
            className="text-sm font-medium text-muted-foreground transition-colors duration-300 hover:text-foreground"
          >
            组件
          </Link>
          <Link
            href="/docs/templates"
            className="text-sm font-medium text-muted-foreground transition-colors duration-300 hover:text-foreground"
          >
            模板
          </Link>
          <Link
            href="/terms"
            className="text-sm font-medium text-muted-foreground transition-colors duration-300 hover:text-foreground"
          >
            用户协议
          </Link>
          <Link
            href="/privacy"
            className="text-sm font-medium text-muted-foreground transition-colors duration-300 hover:text-foreground"
          >
            隐私政策
          </Link>
        </nav>
      </div>

      <div className="mx-auto w-full max-w-[1280px] px-6 pb-16 sm:px-8">
        <p className="text-xs leading-5 text-muted-foreground">
          本站组件、区块与模板可自由用于个人与商业项目，包括交付给客户。示例图片与第三方图标归各自作者所有。
        </p>
      </div>
    </footer>
  );
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
    // 本地渲染的组件源码：blocks / app-ui / components 的 TSX 里用了大量 Tailwind 类名，
    // 必须进扫描范围，否则预览页渲染出来的组件没有样式。
    './data/tsx/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        border: 'var(--border)',
        card: 'var(--card)',
        muted: {
          DEFAULT: 'var(--muted)',
          foreground: 'var(--muted-foreground)',
        },
        secondary: 'var(--secondary)',
        accent: 'var(--accent)',
        primary: 'var(--primary)',
        'primary-foreground': 'var(--primary-foreground)',
        sidebar: 'var(--sidebar)',
        'sidebar-accent': 'var(--sidebar-accent)',
        'sidebar-accent-foreground': 'var(--sidebar-accent-foreground)',
        'sidebar-border': 'var(--sidebar-border)',
        'sidebar-foreground': 'var(--sidebar-foreground)',
        destructive: 'var(--destructive)',
        ring: 'var(--ring)',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      fontFamily: {
        // 不能把空的 var(--font-geist-sans) 放在栈里：变量未定义时整条 font-family
        // 会被判为无效，浏览器直接回落到默认字体（实测导致 Inter 完全不生效）。
        sans: ["Inter", "ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
    },
  },
  plugins: [],
};

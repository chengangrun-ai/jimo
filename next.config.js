/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { unoptimized: true },
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  experimental: {
    staticGenerationMaxConcurrency: 16,
  },
  webpack: (config, { dev }) => {
    // esbuild 只在服务端用（编译组件源码成浏览器脚本），不要让 webpack 去解析它的源码
    config.externals = [...(config.externals || []), 'esbuild'];

    if (dev) {
      // data/ 里放着 1000+ 个源码文本文件，不参与打包，也不该被监听
      config.watchOptions = {
        ...config.watchOptions,
        ignored: ['**/node_modules/**', '**/data/**', '**/public/**', '**/screenshots/**', '**/.git/**'],
      };
    }
    return config;
  },
};
module.exports = nextConfig;

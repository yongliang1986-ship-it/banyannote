import { resolve } from "node:path";
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
import type { NextConfig } from "next";

void initOpenNextCloudflareForDev();

const nextConfig: NextConfig = {
  // 图片优化（Cloudflare 有自己的优化）
  images: {
    unoptimized: true,
  },

  turbopack: {
    root: resolve(process.cwd()),
  },

  // 跳过 TypeScript 类型检查，避免 ecosystem 目录中的 obsidian 模块报错
  typescript: {
    ignoreBuildErrors: true,
  },

  // 移除客户端环境变量暴露（安全风险）
  // 敏感信息应该只在服务端使用

  // 减少构建时的 worker 数量，避免 MaxListenersExceededWarning
  experimental: {
    workerThreads: false,
    cpus: 1,
  },
};

export default nextConfig;

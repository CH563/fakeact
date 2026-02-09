import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';
import { MODULE_LIST } from './src/utils/moduleCatalog';

const site = 'https://fakeact.fun';

// 所有模块动态路由，供 sitemap 使用（与 moduleCatalog MODULE_LIST 一致）
const modulePages = MODULE_LIST.map((slug) => `${site}/module/${slug}`);

// https://astro.build/config
export default defineConfig({
  site,
  output: 'server',
  adapter: cloudflare(),
  integrations: [
    tailwind(),
    sitemap({
      customPages: [...modulePages],
    }),
  ],
  vite: {
    build: {
      rollupOptions: {
        external: ['fs', 'path', 'url', 'ora', 'csv-parser', 'crypto'],
      },
    },
  },
});

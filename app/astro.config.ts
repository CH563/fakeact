import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';

const site = 'https://fakeact.fun';

// https://astro.build/config
export default defineConfig({
  site,
  output: 'server',
  adapter: cloudflare(),
  integrations: [
    tailwind(),
    // NOTE: do not pass customPages for modules here. Module pages are
    // prerendered (see src/pages/module/[module].astro), so @astrojs/sitemap
    // already discovers them as trailing-slash URLs. Listing them again
    // without a slash duplicated every module in sitemap-0.xml (51 URLs:
    // home + 25 modules x2), and each non-slash entry 308-redirects, which
    // Search Console reported as "Redirect error" (2026-11-09).
    sitemap(),
  ],
  vite: {
    build: {
      rollupOptions: {
        external: ['fs', 'path', 'url', 'ora', 'csv-parser', 'crypto'],
      },
    },
  },
});

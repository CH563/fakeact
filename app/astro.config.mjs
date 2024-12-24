// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: cloudflare(),
  integrations: [tailwind()],
  vite: {
    build: {
      rollupOptions: {
        external: ['fs', 'path', 'url', 'chalk'],
      }
    }
  }
});
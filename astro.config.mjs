import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://nocoststack.tech',
  trailingSlash: 'always',
  integrations: [sitemap()],
});

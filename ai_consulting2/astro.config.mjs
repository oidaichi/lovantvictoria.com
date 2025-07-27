import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';
import mdx from '@astrojs/mdx';

export default defineConfig({
  base: '/ai_consulting2',
  integrations: [react(), tailwind(), icon({
    include: {
      'mdi': ['*'],
      'logos': ['*']
    }
  }), mdx()],
  output: 'static',
  vite: {
    ssr: {
      external: ['gray-matter']
    }
  }
});
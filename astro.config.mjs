// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import playformCompress from '@playform/compress';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';

import icon from 'astro-icon';

import react from '@astrojs/react';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  site: 'https://tshservices.club',
  integrations: [playformCompress(), sitemap(), robotsTxt(), icon(), react()]
});
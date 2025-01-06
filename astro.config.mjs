// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

import favicons from 'astro-favicons';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind(), favicons()]
});
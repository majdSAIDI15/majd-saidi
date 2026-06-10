// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  // If deploying to a GitHub Pages project site (user.github.io/<repo>),
  // set `site` and `base` accordingly. For a user/root site leave as-is.
  integrations: [tailwind()],
});

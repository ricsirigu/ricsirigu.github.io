import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

export default defineConfig({
  integrations: [
    react(),
    sitemap({
      filter: (page) => page !== 'https://www.riccardosirigu.com/404/',
      serialize: (item) => ({ ...item, changefreq: 'daily', priority: 0.7 })
    })
  ],
  output: 'static',
  publicDir: './static',
  site: 'https://www.riccardosirigu.com',
  trailingSlash: 'always',
  vite: {
    ssr: {
      noExternal: [
        'styled-components',
        '@emotion/is-prop-valid',
        '@emotion/memoize',
        '@emotion/stylis',
        '@emotion/unitless'
      ]
    }
  }
});

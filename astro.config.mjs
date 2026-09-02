import react from '@astrojs/react';
import { defineConfig } from 'astro/config';

export default defineConfig({
  integrations: [react()],
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

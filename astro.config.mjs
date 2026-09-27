import react from '@astrojs/react';
import { satteri } from '@astrojs/markdown-satteri';
import { defineConfig } from 'astro/config';

export default defineConfig({
  integrations: [react()],
  output: 'static',
  publicDir: './static',
  site: 'https://www.riccardosirigu.com',
  trailingSlash: 'always',
  markdown: {
    syntaxHighlight: 'prism',
    processor: satteri({
      features: {
        smartPunctuation: false,
      },
    }),
  },
  image: {
    layout: 'constrained',
    responsiveStyles: true,
    objectFit: 'contain',
    objectPosition: 'center',
  },
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
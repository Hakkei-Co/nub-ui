import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { readFileSync } from 'fs';
import { postcss } from '@stencil/postcss';
import autoprefixer from 'autoprefixer';

export const config: Config = {
  namespace: 'ui-kit',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  plugins: [
    sass(),
    postcss({
      plugins: [autoprefixer()],
    }),
  ],
  devServer: {
    reloadStrategy: 'pageReload',
    port: 4444,
    https: {
      cert: readFileSync('cert.crt', 'utf8'),
      key: readFileSync('cert.key', 'utf8'),
    },
  },
};

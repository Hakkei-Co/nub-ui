import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { readFileSync } from 'fs';
// import { postcss } from '@stencil/postcss';
// import autoprefixer from 'autoprefixer';
import dotenvPlugin from 'rollup-plugin-dotenv';
import nodePolyfills from 'rollup-plugin-node-polyfills';


export const config: Config = {
  namespace: 'hakion-ui',
  extras: {
    cssVarsShim: true,
    dynamicImportShim: true,
    safari10: true,
    scriptDataOpts: true,
    shadowDomShim: true,
  },
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
      baseUrl: 'https://ui.hakkei.org/',
      prerenderConfig: './prerender.config.ts',
      serviceWorker: null, // disable service workers
      copy: [
        {
          src: '../node_modules/dark-mode-toggle/src/dark-mode-toggle.mjs',
          dest: 'lib/dark-mode-toggle.min.js'
        },
      ]
    },
  ],
  rollupPlugins: {
    after: [
      nodePolyfills(),
    ]
  },
  plugins: [
    dotenvPlugin(),
    sass({
      includePaths: ['./node_modules/'],
    }),
    // postcss({
    //   plugins: [autoprefixer()],
    // }),
  ],
  globalStyle: 'src/global/app.scss',
  globalScript: 'src/global/app.ts',
  devServer: {
    reloadStrategy: 'pageReload',
    port: 4444,
    https: {
      cert: readFileSync('cert.crt', 'utf8'),
      key: readFileSync('cert.key', 'utf8'),
    },
  },
};

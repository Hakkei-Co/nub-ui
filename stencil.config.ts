import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { postcss } from '@stencil/postcss';
import cssnano from 'cssnano';
import { getComponentNameSelectorVariableFromStencil } from './src/utils/stencil/get-component-name-selector-from-stencil-importer';

// import autoprefixer from 'autoprefixer';
import dotenvPlugin from 'rollup-plugin-dotenv';
import nodePolyfills from 'rollup-plugin-node-polyfills';

export const config: Config = {
  namespace: 'hakion-ui',
  globalScript: 'src/global/app.ts',
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
          dest: 'lib/dark-mode-toggle.min.js',
        },
      ],
    },
  ],
  rollupPlugins: {
    after: [nodePolyfills()],
  },
  plugins: [
    dotenvPlugin(),
    sass({
      includePaths: ['./src/theme/variables.scss'],
      importer: getComponentNameSelectorVariableFromStencil,

    }),
    postcss({
      plugins: [
        cssnano({
          preset: [
            'default',
            {
              autoprefixer: { browsers: 'last 2 versions', add: true },
              zindex: false,
            },
          ],
        }),
      ],
    }),
  ],
  globalStyle: 'src/global/app.scss',
  devServer: {
    reloadStrategy: 'hmr',
    // port: 4444,
    // https: {
    //   cert: readFileSync('cert.crt', 'utf8'),
    //   key: readFileSync('cert.key', 'utf8'),
    // },
  },
};

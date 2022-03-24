import summary from 'rollup-plugin-summary';
import { terser } from 'rollup-plugin-terser';
import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import multi from '@rollup/plugin-multi-entry';
import typescript from 'rollup-plugin-typescript2';
import svg from 'rollup-plugin-svg';
import json from '@rollup/plugin-json';
const nubs = require('./nub.config');

const sharedConfig = {
  onwarn(warning) {
    if (warning.code !== 'THIS_IS_UNDEFINED') {
      console.error(`(!) ${warning.message}`);
    }
  },
  plugins: [
    replace({ 'Reflect.decorate': 'undefined', 'preventAssignment': true }),
    resolve(),
    typescript(),
    json(),
    terser({
      ecma: 2020,
      module: true,
      warnings: true,
      mangle: {
        properties: {
          regex: /^__/,
        },
      },
    }),
    summary(),
    multi(),
    svg(),
  ],
};

const outputs = [];

const defaultOutput = {
  // Output all components to a single exported file.
  input: {
    include: ['src/components/**/*.ts'],
    exclude: [
      'src/components/**/*.stories.ts',
      'src/components/**/*.css.lit.ts',
      'src/components/**/*.test.ts',
      'src/components/examples/**/*',
      'src/components/utility/**/*',
    ],
  },
  output: [
    {
      // file: `${nubs.destBasePath}/nubs.js`,
      file: `${nubs.destBasePath}/nubs.js`,
      format: 'esm',
    },
  ],
  ...sharedConfig,
};

const lazyOutput = {
  input: {
    include: ['src/nubs-lazy.ts'],
  },
  output: [
    {
      file: `${nubs.destBasePath}/nubs-lazy.js`,
      format: 'esm',
    },
  ],
  ...sharedConfig,
};

const dynamicOutput = {
  input: {
    include: ['src/nubs-dynamic.ts'],
  },
  output: [
    {
      file: `${nubs.destBasePath}/nubs-dynamic.js`,
      format: 'esm',
    },
  ],
  ...sharedConfig,
};

const dataOutput = {
  input: {
    include: ['src/data.ts'],
  },
  output: [
    {
      file: `${nubs.destBasePath}/data.js`,
      format: 'esm',
    },
  ],
  ...sharedConfig,
};

nubs.js.output.full ? outputs.push(defaultOutput) : null;
nubs.js.output.lazy ? outputs.push(lazyOutput) : null;
nubs.js.output.dynamic ? outputs.push(dynamicOutput) : null;
nubs.js.output.data ? outputs.push(dataOutput) : null;

export default outputs;

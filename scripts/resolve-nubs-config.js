#! usr/bin/env node
const fs = require('fs');
const path = require('path');
const { format, resolveConfig: resolvePrettierConfig } = require('prettier');
const outlineConfig = require('../nub.config');

resolvePrettierConfig('.prettierrc')
  .then(options => {
    return format(
      `
/**
 * This file is auto generated via npm run generate.resolved-nubs
 */
export default ${JSON.stringify(outlineConfig)}
  `,
      { ...options, parser: 'babel' }
    );
  })
  .then(formatted =>
    fs.writeFileSync(
      path.join(__dirname, '../src/resolved-nubs-config.ts'),
      formatted
    )
  );

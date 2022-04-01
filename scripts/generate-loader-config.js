/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */
/* eslint-disable no-console */

const fs = require('fs');
const outline = require('../nub.config.js');
const components = require('../src/custom-elements.json');

// Ensure dist directory exists.
if (!fs.existsSync('dist')) {
  fs.mkdirSync('dist');
}

/**
 * @todo document this.
 */
const generateComponentQuerySelector = () => {
  let selector = '';
  if (components.tags.length) {
    components.tags.forEach((tag, index) => {
      selector += `${tag.name}${
        index !== components.tags.length - 1 ? ', ' : ''
      }`;
    });
    return selector;
  }
};

/**
 * @todo document this.
 */
const generateComponentArray = () => {
  let nubs = [];
  if (components.tags.length) {
    components.tags.forEach(tag => {
      nubs.push(tag.name);
    });
    return nubs;
  }
};

/**
 * Function to generate a project specific stylesheet to correct or minify the FOUC.
 */
const generateComponentHelper = () => {
  fs.writeFile(
    'dist/outline-components.js',
    `
export const nubComponentSelector = '${generateComponentQuerySelector()}'
export const nubComponents = ${JSON.stringify(generateComponentArray())}
  `,
    () => true
  );
};

generateComponentHelper();

/* eslint-disable no-console */
import { html } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined';
import { initCurrentScriptPolyfill } from './polyfill-current-script';


initCurrentScriptPolyfill();

export function setupComposition(titleOrLitHtml, litHtml?) {
  let realLitHtml = titleOrLitHtml;
  let storyName = '';
  // with title it is litHTML
  if (typeof titleOrLitHtml === 'string') {
    realLitHtml = litHtml;
    storyName = titleOrLitHtml;
  }
  const Variant = realLitHtml.bind({});
  // Show code of webcomponents code
  Variant.storyName = storyName;
  return Variant;
}

// export lit-html attribute render wrapper
export const a = (value) => {
  if (value === false || value === '' || value === 'default') {
    value = undefined;
  }
  return ifDefined(value);
};
// export lit-html as h
export const h = html;
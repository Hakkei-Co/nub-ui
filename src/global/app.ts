import { setMode } from '@stencil/core';
import { setupConfig } from '@ionic/core';

export default () => {
  setupConfig({
    mode: 'ios',
    statusTap: true,
    rippleEffect: true,
  });
};
const HakionThemes = {
  Default: 'default',
  Dark: 'dark',
  Light: 'light',
};
const themes = Object.values(HakionThemes);

const theme = document.documentElement.getAttribute('custom') || 'default';

/**
 * Will only load relevant styles based on the theme requested
 */
setMode(() => (themes.includes(theme) ? theme : 'default'));

(async () => {
  customElements.whenDefined('example-scene').then((res) => {
    console.log('app.ts', 'hakion-dark-mode-toggle', res);
  });
  const toggle = document.querySelector('example-scene');
  // const body = document.body;
  // console.log(!!toggle?.shadowRoot);
  if (toggle.hasAttribute('embedded')) {
    toggle.style.position = 'absolute';

    toggle.style.zIndex = '-9999';
  }
})();

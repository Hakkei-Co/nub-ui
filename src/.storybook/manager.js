import { addons } from '@storybook/addons';
// import { create } from '@storybook/theming/create';

import customTheme from './CustomTheme';

addons.setConfig({
  theme: { ...customTheme },
});
export function themePng() {
  let isDarkMode =
    document.documentElement.getAttribute('data-theme') === 'dark';
  let bodyTheme = document.body.getAttribute('class') === 'dark';
  return isDarkMode || bodyTheme
    ? customTheme.dark.brandImage
    : customTheme.light.brandImage;
}

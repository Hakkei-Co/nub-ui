import { addons } from '@storybook/addons';
<<<<<<< HEAD
// import { create } from '@storybook/theming/create';
=======
import { create } from '@storybook/theming/create';
>>>>>>> origin/next

import customTheme from './CustomTheme';

addons.setConfig({
<<<<<<< HEAD
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
=======
  theme: create({
    base: customTheme.dark,
    brandTitle: 'Hakkei Inc.',
    brandUrl: 'https://ui.hakkei.org',
    brandImage: customTheme.light.brandImage,
  }),
});
>>>>>>> origin/next

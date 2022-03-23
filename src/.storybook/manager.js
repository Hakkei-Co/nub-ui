import { addons } from '@storybook/addons';
import { create } from '@storybook/theming/create';

import customTheme from './CustomTheme';

addons.setConfig({
  theme: create({
    base: customTheme.dark,
    brandTitle: 'Hakkei Inc.',
    brandUrl: 'https://ui.hakkei.org',
    brandImage: customTheme.light.brandImage,
  }),
});

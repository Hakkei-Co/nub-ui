import { addons } from '@storybook/addons';
import customTheme from './CustomTheme';

addons.setConfig({
  theme: customTheme.light,
  toolbar: {
    theme: { hidden: true },
  },
  enableShortcuts: true,
});

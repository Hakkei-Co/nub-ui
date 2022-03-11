import { create } from '@storybook/theming/create';

export default create({
  base: 'light',
  brandTitle: 'seed',
  brandImage: 'https://i.imgur.com/BxFsmAu.png',

  colorPrimary: '#27292E',
  colorSecondary: '#4d6ac7',

  // UI
  appBg: '#FFFFFE',
  appContentBg: '#F4F4F3',
  appBorderColor: '#949494',

  // Typography
  fontBase: 'Manrope, sans-serif',
  FontFace: 'Manrope',

  // Text colors
  textColor: '#2f2f2f',
  textInverseColor: '#2f2f2f',

  // Toolbar default and active colors
  barTextColor: '#d6d9e2',
  barSelectedColor: '#719ce0',
  barBg: '#262626',

  // Form colors
  // inputBg: '#d6d9e2',
  // inputBorder: '#8d97a5',
  // inputTextColor: '#2f2f2f',
  // inputBorderRadius: 4,
});

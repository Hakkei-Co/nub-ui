import { create } from '@storybook/theming/create';
import NubUIImage from './stories/assets/outline/NubUI-Logo.png';

export const lightTheme = create({
  base: 'light',
  brandTitle: 'nub-ui',
  brandImage: NubUIImage,
  fontBase: 'Manrope, sans-serif',
  colorPrimary: '#27292E',
  colorSecondary: '#4d6ac7',
  appBg: '#FFFFFE',
  appContentBg: '#F4F4F3',
  appBorderColor: '#949494',
  fontBase: 'Manrope, sans-serif',
  textColor: '#2f2f2f',
  textInverseColor: '#2f2f2f',
  barTextColor: '#d6d9e2',
  barSelectedColor: '#719ce0',
  barBg: '#262626',
});

export const darkTheme = create({
  base: 'dark',
  brandTitle: 'nub-ui',
  brandImage: NubUIImage,
  fontBase: 'Manrope, sans-serif',
  colorPrimary: '#27292E',
  colorSecondary: '#4d6ac7',
  appBg: '#2f2f2f',
  appContentBg: '#1a1a1a',
  appBorderColor: '#949494',
  fontBase: 'Manrope, sans-serif',
  textColor: '#d6d9e2',
  textInverseColor: '#2f2f2f',
  barTextColor: '#f4f4f5',
  barSelectedColor: '#719ce0',
  barBg: '#262626',
});

const theme = {
  light: lightTheme,
  dark: darkTheme,
};

export default theme;

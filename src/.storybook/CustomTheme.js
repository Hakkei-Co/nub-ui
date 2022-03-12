import { create } from '@storybook/theming/create';
import NubUIImage from './stories/assets/outline/NubUI-Logo.png';

export default create({
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

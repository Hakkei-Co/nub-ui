import { html, TemplateResult } from 'lit';
import sampleImage from '../../../.storybook/static/media/color/desk-keyboard.png';
import './nub-image-slider';
import '../nub-image/nub-image';

export default {
  title: 'Nubs/Image Slider',
  component: 'nub-image-slider',
  argTypes: {},
  args: {},
};

export const ImageSlider = (): TemplateResult =>
  html`
    <nub-image-slider>
      <img src="${sampleImage}" alt="random image" />
      <img src="${sampleImage}" alt="random image" />
      <img src="${sampleImage}" alt="random image" />
    </nub-image-slider>
  `;

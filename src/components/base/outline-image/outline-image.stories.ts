import { html, TemplateResult } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import sampleImage from '../../../.storybook/static/media/color/keyboard.png';
import { argTypeHidden } from '../nub-element/utils/utils';
import './outline-image';
// import '../nub-header/nub-header'

export default {
  title: 'Outline/Image',
  component: 'outline-image',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
This component renders an image with an optional caption as a \`figure\` element and a \`figcaption\` element.

## Difference between \`figure\` and \`figcaption\` element

_@todo describe why this would be used instead._

        `,
      },
      source: {
        code: `
<outline-image>
  {{ defaultSlot }}
  <nub-container slot="caption">{{ caption }}</nub-container>
</outline-image>
        `,
      },
    },
  },
  argTypes: {
    imageUrl: argTypeHidden,
    parallaxContainer: argTypeHidden,
    el: argTypeHidden,
    caption: {
      control: {
        type: 'text',
      },
    },
  },
  args: {
    imageUrl: sampleImage,
    caption: '',
  },
};

const Template = ({ imageUrl, caption, parallax }): TemplateResult => html`
  <outline-image parallax="${ifDefined(parallax)}">
    <img src="${imageUrl}" alt="Random Image" />
    <nub-container slot="caption">${caption}</nub-container>
  </outline-image>
`;

export const StaticImage = Template.bind({});

export const ImageWithCaption = Template.bind({});
ImageWithCaption.args = {
  caption: 'A simple caption text',
};
ImageWithCaption.decorators = [
  //TODO determine appropriate typing for Story
  (Story): TemplateResult =>
    html` <div class="w-9/12 mx-auto">${Story()}</div> `,
];

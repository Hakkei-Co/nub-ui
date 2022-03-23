import { html, TemplateResult } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { argTypeSlotContent } from '../outline-element/utils/utils';

import { AllowedHeadingLevels, HeadingSizes, HeadingStyles } from './config';

import './nub-header';
import '../nub-container/nub-container';

const levelOptions: AllowedHeadingLevels[] = [
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
];

export default {
  title: 'Nubs/Header',
  component: 'nub-header',
  argTypes: {
    ...argTypeSlotContent,
    level: {
      description: 'HTML level. Used by screen readers.',
      options: levelOptions,
      control: {
        type: 'select',
      },
    },
    levelSize: {
      description: 'Presentation level. Used for styling.',
      options: HeadingSizes,
      control: {
        type: 'select',
      },
    },
    levelStyle: {
      description: 'Presentation style. Font weight variation.',
      options: HeadingStyles,
      control: {
        type: 'select',
      },
    },
  },
  args: {
    defaultSlot:
      'Sample heading text that should take up multiple lines so we can test for proper size and leading.',
  },
  parameters: {
    docs: {
      description: {
        component: `
This component renders a heading.


## Difference from \`h1\`, \`h2\`, etc elements

This is rendered as various \`h1\`, etc elements, but is styled based on the \`level-size\`. This allows screen readers to properly read the structure of a page even when this diverges from the visual presentation of these headers.

### Accessibility

The \`prefers-color-scheme\` CSS media spec comes default to detect if the user has requested a light or dark color theme and display a dark or light color text.

### Variation

You can also set the font weight using the \`level-style\` attribute.

        `,
      },
      source: {
        code: `
<nub-header
  level="{{ level }}"
  level-size="{{ level-size }}"
  level-style="{{ levelStyle }}"
>
  {{ defaultSlot}
</nub-header>
        `,
      },
    },
  },
};

const Template = ({
  level,
  levelSize,
  levelStyle,
  defaultSlot,
}): TemplateResult =>
  html`
    <nub-container>
      <nub-header
        level="${ifDefined(level)}"
        level-size="${ifDefined(levelSize)}"
        level-style="${ifDefined(levelStyle)}"
      >
        ${defaultSlot}
      </nub-header>
    </nub-container>
  `;

export const H1HeadingBase = Template.bind({});
H1HeadingBase.args = {
  level: 'h1',
  levelSize: 'base',
};

export const H2HeadingBase = Template.bind({});
H2HeadingBase.args = {
  level: 'h2',
  levelSize: 'base',
};

export const H1Heading3XLSemiBold = Template.bind({});
H1Heading3XLSemiBold.args = {
  level: 'h1',
  levelSize: '3xl',
  levelStyle: 'semibold',
};

export const H3Heading2XLBold = Template.bind({});
H3Heading2XLBold.args = {
  level: 'h3',
  levelSize: '2xl',
  levelStyle: 'bold',
};

export const H4Heading2XLBold = Template.bind({});
H4Heading2XLBold.args = {
  level: 'h4',
  levelSize: '2xl',
  levelStyle: 'bold',
};

export const H5HeadingLgBold = Template.bind({});
H5HeadingLgBold.args = {
  level: 'h5',
  levelSize: 'lg',
  levelStyle: 'bold',
};

export const DefaultHeading = Template.bind({});
DefaultHeading.args = {};

export const H2Thin3XLThin = Template.bind({});
H2Thin3XLThin.args = {
  level: 'h2',
  levelSize: '3xl',
  levelStyle: 'thin',
};

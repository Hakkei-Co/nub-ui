import { html, TemplateResult } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import {
  argTypeSlotContent,
} from '../outline-element/utils/utils';
import { ButtonVariant, ButtonSize } from './nub-button';
import './nub-button';

const buttonOptions: ButtonVariant[] = ['none', 'primary', 'secondary'];
const buttonSizes: ButtonSize[] = ['small', 'medium', 'large'];
const link = "https://hakkei-co.github.io/nub-ui/";
export default {
  title: 'Nubs/Button',
  component: 'nub-button',
  argTypes: {
    ...argTypeSlotContent,
    target: {
      name: 'button-target',
      description: 'https://www.w3schools.com/tags/att_a_target.asp',
      options: [undefined, '_blank', '_self', '_parent', '_top'],
      control: {
        type: 'select',
      },
      table: { category: 'Properties', defaultValue: { summary: '_blank' } },
    },
    isDisabled: {
      name: 'is-disabled',
      table: { category: 'Properties', defaultValue: { summary: 'false' } },
      description:
        'Set whether the button is disabled. Only applies to implementations not using the url property',
      control: {
        type: 'boolean',
      },
    },
    url: {
      name: 'button-url',
      table: { category: 'Properties', defaultValue: { summary: 'NULL' } },
      description:
        'The url to use for a link. This will render an anchor element. Do not set this prop if you want to render a button element.',
      control: {
        type: 'text',
      },
    },
    label: {
      name: 'button-label',
      table: { category: 'Properties', defaultValue: { summary: 'NULL' } },
      description:
        'Label to be passed to `aria-label` on the link or button element.',
      control: {
        type: 'text',
      },
    },
    variant: {
      name: 'button-variant',
      table: { category: 'Properties', defaultValue: { summary: 'primary' } },
      description: 'The button style variant to use.',
      options: buttonOptions,
      control: {
        type: 'select',
      },
    },
    size: {
      name: 'button-size',
      table: { category: 'Properties', defaultValue: { summary: 'medium' } },
      description: 'The button size variant.',
      options: buttonSizes,
      control: {
        type: 'select',
      },
    },
  },
  args: {
    variant: 'primary',
  },
  parameters: {
    docs: {
      description: {
        component: `
This component renders a button that can either be a link or trigger an action. ## Accessibility

The \`prefers-color-scheme\` CSS media spec comes default to detect if the user has requested a light or dark color theme and display a dark or light color text.
## Difference from \`button\` element

This is rendered as an \`a\` element if a link and a \`button\` element if not a link. This allows for consistent styling that matches the user expectation of a button while matching the browser expectation for those elements.
        `,
      },
    },
  },
};

const Template = ({
  defaultSlot,
  isDisabled,
  url,
  target,
  variant,
  size,
  onClick,
  onKeyUp,
}): TemplateResult =>
  html`
<nub-button button-url="${ifDefined(url)}" button-target="${ifDefined(target)}" button-variant="${variant}"
  button-size="${size}" .onClick="${onClick}" .onKeyUp="${onKeyUp}" ?is-disabled=${isDisabled}>
  ${defaultSlot}
</nub-button>
  `;

export const Link = Template.bind({});
Link.args = {
  defaultSlot: 'Link Button',
  url: `${process.env.NODE_ENV === 'production' ? link : ''}`,
  target: '_blank',
  variant: 'primary',
  isDisabled: false,
};

const inlineIconDecorator = [
  (Story): TemplateResult => html`
<div class="flex flex-row">
  ${Story()}
</div>`,
];

const PrimaryButtonsTemplate = (): TemplateResult =>
  html`
  <nub-header level-size="xl" level-style="semibold">Default, Hover & Focus States</nub-header>
  <nub-header level-size="base" level-style="normal">This section of primary buttons demonstrates various configurations, and can be navigated to test hover/focus states.
  </nub-header>
  <div class="my-6">
    <nub-button class="mr-2 ripple-wave" button-size="large" button-label="Large Button">Large Button</nub-button>
    <nub-button class="mr-2" button-label="Button">Button</nub-button>
    <nub-button class="mr-2" button-size="small" button-label="Small Button">Small Button</nub-button>
  </div>

  <nub-header level-size="xl" level-style="semibold">Disabled States</nub-header>
    <nub-header level="h4" level-size="base" level-style="normal">This section of primary buttons demonstrates the disabled version of the same buttons as the previous example.</nub-header>

  <div class="my-6">
    <nub-button class="mr-2" button-url="#" button-size="large" button-label="Large Button" is-disabled>Large Button
    </nub-button>
    <nub-button class="mr-2" button-url="#" button-label="Button" is-disabled>Button</nub-button>
    <nub-button class="mr-2" button-url="#" button-size="small" button-label="Small Button" is-disabled>Small Button
    </nub-button>
  </div>

  <nub-header level-size="xl" level-style="semibold">Including Icons</nub-header>
  <nub-header level="h4" level-size="base" level-style="normal">This section highlights using icons in the primary button.</nub-header>

  <div class="my-6">
    <nub-button class="mr-2" button-url="#" button-size="large" button-label="Large Button">
      Large Button
      <nub-icon slot="right" name="chevron-right" library="system" size="1em" class="ml-2"></nub-icon>
    </nub-button>
    <nub-button class="mr-2" button-url="#" button-label="Button">
      Button
      <nub-icon slot="right" name="chevron-right" library="system" size="1em" class="ml-2"></nub-icon>
    </nub-button>
    <nub-button class="mr-2" button-url="#" button-size="small" button-label="Small Button">
      Small Button
      <nub-icon slot="right" name="chevron-right" library="system" size="1em" class="ml-2"></nub-icon>
    </nub-button>
  </div>
`;

export const PrimaryButtons = PrimaryButtonsTemplate.bind({});
PrimaryButtons.parameters = {
  name: 'Primary Button',
  docs: {
    source: {
      code: `
<!-- Primary Buttons -->
<nub-button class="mr-2" button-url="#" button-size="large" button-label="Large Button">Large Button</nub-button>
<nub-button class="mr-2" button-url="#" button-label="Button">Button</nub-button>
<nub-button class="mr-2" button-url="#" button-size="small" button-label="Small Button">Small Button</nub-button>
<!-- Primary Buttons (Disabled) -->
<nub-button class="mr-2" button-url="#" button-size="large" button-label="Large Button" is-disabled>Large Button</nub-button>
<nub-button class="mr-2" button-url="#" button-label="Button" is-disabled>Button</nub-button>
<nub-button class="mr-2" button-url="#" button-size="small" button-label="Small Button" is-disabled>Small Button</nub-button>
      `,
    },
  },
};

const SecondaryButtonsTemplate = (): TemplateResult =>
  html`
<nub-header level-size="xl" level-style="semibold">Default, Hover & Focus States</nub-header>
<nub-header level="h4" level-size="base" level-style="normal">This section of primary buttons demonstrates various configurations, and can be navigated to test hover/focus states.
</nub-header>
<div class="my-6">
  <nub-button class="mr-2" button-variant="secondary" button-url="#" button-size="large" button-label="Large Button">
    Large Button</nub-button>
  <nub-button class="mr-2" button-variant="secondary" button-url="#" button-label="Button">Button</nub-button>
  <nub-button class="mr-2" button-variant="secondary" button-url="#" button-size="small" button-label="Small Button">
    Small Button</nub-button>
</div>
<nub-header level-size="xl" level-style="semibold">Disabled States</nub-header>
<nub-header level="h4" level-size="base" level-style="normal">This section of primary buttons demonstrates the disabled version of the same buttons as the previous example.</nub-header>
<div class="my-6">
  <nub-button class="mr-2" button-variant="secondary" button-url="#" button-size="large" button-label="Large Button"
    is-disabled>Large Button</nub-button>
  <nub-button class="mr-2" button-variant="secondary" button-url="#" button-label="Button" is-disabled>Button
  </nub-button>
  <nub-button class="mr-2" button-variant="secondary" button-url="#" button-size="small" button-label="Small Button"
    is-disabled>Small Button</nub-button>
</div>
<nub-header level-size="xl" level-style="semibold">Including Icons</nub-header>
<nub-header level="h4" level-size="base" level-style="normal">This section highlights using icons in the primary button.</nub-header>

<div class="my-6">
  <nub-button class="mr-2" button-variant="secondary" button-url="#" button-size="large" button-label="Large Button">
    Large Button
    <nub-icon slot="left" name="chevron-right" library="system" size="1em" class="mr-2"></nub-icon>
  </nub-button>
  <nub-button class="mr-2" button-variant="secondary" button-url="#" button-label="Button">
    Button
    <nub-icon slot="left" name="chevron-right" library="system" size="1em" class="mr-2"></nub-icon>
  </nub-button>
  <nub-button class="mr-2" button-variant="secondary" button-url="#" button-size="small" button-label="Small Button">
    Small Button
    <nub-icon slot="left" name="chevron-right" library="system" size="1em" class="mr-2"></nub-icon>
  </nub-button>
</div>
`;

export const SecondaryButtons = SecondaryButtonsTemplate.bind({});
//PrimaryButtons.decorators = inlineIconDecorator;
SecondaryButtonsTemplate.parameters = {
  name: 'Secondary Button',
  docs: {
    source: {
      code: html`
      <nub-button class="mr-2" button-variant="secondary" button-url="#" button-size="large" button-label="Large Button">Large
        Button</nub-button>
      <nub-button class="mr-2" button-variant="secondary" button-url="#" button-label="Button">Button</nub-button>
      <nub-button class="mr-2" button-variant="secondary" button-url="#" button-size="small" button-label="Small Button">Small
        Button</nub-button>
      <nub-button class="mr-2" button-variant="secondary" button-url="#" button-size="large" button-label="Large Button"
        is-disabled>Large Button</nub-button>
      <nub-button class="mr-2" button-variant="secondary" button-url="#" button-label="Button" is-disabled>Button</nub-button>
      <nub-button class="mr-2" button-variant="secondary" button-url="#" button-size="small" button-label="Small Button"
        is-disabled>Small Button</nub-button>
    `,
    },
  },
};

const LinkButtonsTemplate = (): TemplateResult =>
  html`
  <div class="my-6">
    <section>
      <nub-button class="mr-2" button-size="small" button-variant="none" button-url="#">Link Button</nub-button>
      <nub-button class="mr-2" button-variant="none" button-size="small" is-disabled>Disabled Link Button</nub-button>
    </section>
    <section>
      <div class="my-6">
        <nub-header level="h4" level-size="base" level-style="normal">Small</nub-header>
        <nub-button class="mr-2 my-2" button-variant="success" button-size="small" button-url="#">Success</nub-button>
        <nub-button class="mr-2 my-2" button-variant="primary" button-size="small">Primary</nub-button>
        <nub-button class="mr-2 my-2" button-variant="secondary" button-size="small"> Secondary</nub-button>
        <nub-button class="mr-2 my-2" button-variant="danger" button-size="small">Danger</nub-button>
        <nub-button class="mr-2 my-2" button-variant="warning" button-size="small">Warning</nub-button>
        <nub-button class="mr-2 my-2" button-variant="info" button-size="small">Info</nub-button>
        <nub-button class="mr-2 my-2" button-variant="dark" button-size="small">Dark</nub-button>
        <nub-button class="mr-2 my-2" button-variant="light" button-size="small">Light</nub-button>
      </div>
    </section>
    <section>
      <div class="my-6">
        <nub-header level="h4" level-size="base" level-style="normal">Medium</nub-header>
        <nub-button class="mr-2 my-2" button-variant="success" button-size="medium" button-url="#">Success</nub-button>
        <nub-button class="mr-2 my-2" button-variant="primary" button-size="medium">Primary</nub-button>
        <nub-button class="mr-2 my-2" button-variant="secondary" button-size="medium"> Secondary</nub-button>
        <nub-button class="mr-2 my-2" button-variant="danger" button-size="medium">Danger</nub-button>
        <nub-button class="mr-2 my-2" button-variant="warning" button-size="medium">Warning</nub-button>
        <nub-button class="mr-2 my-2" button-variant="info" button-size="medium">Info</nub-button>
        <nub-button class="mr-2 my-2" button-variant="dark" button-size="medium">Dark</nub-button>
        <nub-button class="mr-2 my-2" button-variant="light" button-size="medium">Light</nub-button>
      </div>
    </section>
  </div>
`;

export const LinkButtons = LinkButtonsTemplate.bind({});
LinkButtons.decorators = inlineIconDecorator;

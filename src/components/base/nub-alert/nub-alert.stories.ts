import { html, TemplateResult } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { argTypeSlotContent } from '../nub-element/utils/utils';
import { alertSizes, alertStatusTypes, alertSpan } from './nub-alert';
import './nub-alert';
// import { detectColorScheme } from "../../../.storybook/detectColorScheme";
export default {
  title: 'Nubs/Alert',
  component: 'nub-alert',
  argTypes: {
    headerSlot: {
      name: 'slot="nub-alert--header"',
      description: 'The header slot. For example a header title.',
      table: {
        category: 'Slots',
      },
      // We aren't setting a control type here so we can edit the value using the infered object.
    },
    // We aren't setting a control type here so we can edit the value using the infered object.
    defaultSlot: {
      ...argTypeSlotContent.defaultSlot,
      table: {
        category: 'Slots',
      },
    },
    linkSlot: {
      name: 'slot="nub-alert--link"',
      description: 'The link slot. For example an external link.',
      table: {
        category: 'Slots',
      },
    },
    statusType: {
      description:
        'The status type of the alert. Such as `notice` or `warning`.',
      options: alertStatusTypes,
      control: { type: 'select' },
    },
    size: {
      description: 'The size of the alert.',
      options: alertSizes,
      control: { type: 'select' },
    },
    spanType: {
      description: 'The width relative to viewport of the alert.',
      options: alertSpan,
      control: { type: 'select' },
    },
    shouldShowIcon: {
      description: '(not yet implemented) Should we show the icon',
      control: { type: 'boolean' },
    },
    isInteractive: {
      description: 'Is there an interaction in the alert, such as a button.',
      control: { type: 'boolean' },
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
This component renders an alert.

## Variation

* You can set the type of alert with \`statusType\`.
* You can use a smaller alert with \`size\` of \`small\`.
* You can remove the icon with \`shouldShowIcon\` set to \`false\`.
* You can customize the header by adding a \`nub-alert--header\` slot.
* You can customize the CTA by adding a \`nub-alert--link\` slot.


### Accessibility
The \`prefers-color-scheme\` CSS media spec comes default to detect if the user has requested a light or dark color theme and display a dark or light color text.


If the alert has an interaction, you should indicate this with \`isInteractive\` set to \`true\`.
`,
      },
      source: {
        // This code sample will be used for every example unless overridden.
        code: `
<nub-alert
  statusType="{{ statusType }}"
  size="{{ size }}"
  spanType="{{ spanType }}"
  {{ shouldShowIcon }}
  {{ isInteractive }}
>
  <span slot="nub-alert--header">{{ headerSlot }}</span>
  {{ defaultSlot }}
  {{ linkSlot }}
</nub-alert>
        `,
      },
    },
  },
};

const Template = ({
  headerSlot,
  defaultSlot,
  linkSlot,
  statusType,
  size,
  spanType,
  shouldShowIcon,
  isInteractive,
}): TemplateResult => {
  return html`
    <nub-alert
      statusType="${ifDefined(statusType)}"
      spanType="${ifDefined(spanType)}"
      size="${ifDefined(size)}"
      ?shouldShowIcon="${shouldShowIcon}"
      ?isInteractive="${isInteractive}"
    >
      ${ifDefined(headerSlot)} ${ifDefined(defaultSlot)} ${ifDefined(linkSlot)}
    </nub-alert>
  `;
};

export const Notice = Template.bind({});
Notice.args = {
  defaultSlot: html`Explore both dark and light mode options!`,
  statusType: 'notice',
};

export const Warning = Template.bind({});
Warning.args = {
  defaultSlot: html`Here is a warning message.`,
  statusType: 'warning',
};

export const Error = Template.bind({});
Error.args = {
  defaultSlot: html`Here is an error message.`,
  statusType: 'error',
};

export const Success = Template.bind({});
Success.args = {
  defaultSlot: html`Here is a success message.`,
  statusType: 'success',
};

export const NoticeFloat = Template.bind({});
NoticeFloat.args = {
  defaultSlot: html`Here is a float notice message.`,
  statusType: 'notice',
  spanType: 'float',
};

export const WarningFloat = Template.bind({});
WarningFloat.args = {
  defaultSlot: html`Here is a warning message.`,
  statusType: 'warning',
  spanType: 'float',
};

export const Small = Template.bind({});
Small.args = {
  defaultSlot: html`Here is a small alert message.`,
  size: 'small',
  statusType: 'success',
};

export const HeaderInfo = Template.bind({});
HeaderInfo.args = {
  headerSlot: html`
    <span slot="nub-alert--header">
      Here is an alert with a custom header.
    </span>
  `,
  defaultSlot: html`<span>Here is a message.</span>`,
  statusType: 'notice',
};

export const NoIcon = Template.bind({});
NoIcon.args = {
  defaultSlot: html`Here is an alert with no icon.`,
  shouldShowIcon: false,
  headingSlot: `<h5 slot="nub-alert--link">Panel the First</h5>`,
  statusType: 'notice',
};

export const InteractiveAlert = Template.bind({});
InteractiveAlert.args = {
  defaultSlot: html`Here is an alert with an interaction.`,
  linkSlot: html`<nub-link link-href="#" slot="nub-alert--link">Click here</nub-link>`,
  isInteractive: true,
  statusType: 'notice',
};

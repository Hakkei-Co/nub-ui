import { html, TemplateResult } from 'lit';
import './nub-modal';
import { argTypeSlotContent } from '../../base/nub-element/utils/utils';
import { modalSizes } from './nub-modal';
import { ifDefined } from 'lit/directives/if-defined.js';

export default {
  title: 'Nubs/Modal',
  component: 'nub-modal',
  argTypes: {
    triggerSlot: {
      name: 'slot="nub-modal--trigger"',
      description: 'The trigger slot. For example, an "open modal" button.',
      table: {
        category: 'Slots',
      },
      // We aren't setting a control type here so we can edit the value using the infered object.
    },
    headerSlot: {
      name: 'slot="nub-modal--header"',
      description: 'The header slot. For example a header title.',
      table: {
        category: 'Slots',
      },
      // We aren't setting a control type here so we can edit the value using the infered object.
    },
    accessibilityDescription: {
      name: 'slot="nub-modal--accessibility-description"',
      description: 'An description for accessibility. It is not visible.',
      table: {
        category: 'Slots',
      },
      // We aren't setting a control type here so we can edit the value using the infered object.
    },
    // This is the modal content.
    // We aren't setting a control type here so we can edit the value using the infered object.
    defaultSlot: {
      ...argTypeSlotContent.defaultSlot,
      table: {
        category: 'Slots',
      },
    },
    size: {
      name: 'size',
      description: 'The size of the modal.',
      options: modalSizes,
      control: { type: 'select' },
    },
    shouldForceAction: {
      name: 'shouldForceAction',
      description:
        'Force the user to take an action by removing close features. The modal contents will need to provide a way to close the modal.',
      control: { type: 'boolean' },
    },
    elementToFocusSelector: {
      name: 'elementToFocusSelector',
      description:
        'An element to focus on when the modal is opened. This might be a primary call to action such as "accept". If no value is provided, the modal will try to find the best thing to focus on. Should be a valid CSS selector.',
      control: { type: 'text' },
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
This component renders a trigger and modal. When the trigger is active, the modal opens.

## Triggering the modal

You can add a trigger slot to the modal \`slot="nub-modal--trigger"\`.

You can also manually trigger the modal with the \`.open()\` method. Similarly, you can close the modal with \`.close()\`.

## Triggering the modal close with Javascript

You could make a button within the modal to close it.

Example:

\`\`\`HTML
<button
  class="accept"
  onClick="
    document.querySelectorAll('nub-modal').forEach(
      (node) => {
        if(node.isOpen){
          node.close();
        }
      }
    )
  "
  onkeydown="
    if (event.key === 'Enter') {
      document.querySelectorAll('nub-modal').forEach(
        (node) => {
          if(node.isOpen){
            node.close();
          }
        }
      )
    }
  "
>Accept</button>
\`\`\`

## Variations

You can set the \`size\` to change the size of the modal.

You can force the user to take an action by setting \`shouldForceAction\`. In this situation, the modal contents will need to provide a way to close the modal since the standard close features will not be provided.

## Accessibility

Based on guidelines from [WAI-ARIA Authoring Practices 1.1: Modal Dialog Example](https://www.w3.org/TR/wai-aria-practices-1.1/examples/dialog-modal/dialog.html).

### Accessible style
- Modal uses full screen on small devices

### Optional features
- If a header is supplied as a slot, it is referenced with \`aria-labelledby\`
- If an accessibility description is supplied by a slot, it is referenced with \`aria-describedby\`
- The system will try to focus the first focusable element. If you would like, you can provide a selector with the \`elementToFocusSelector\` attribute and this will be focused.

### Keyboard navigation
- If a trigger is supplied as a slot, that element can be focused and triggered with the keyboard (\`Tab\` and \`Enter\`)
- On open, the modal will focus on the first focusable element, or the modal wrapper if none can be focused.
- The \`Escape\` button can be used to close the modal
- The close button can be focused and triggered with the keyboard (\`Tab\` and \`Enter\`)
- Focus in kept within the modal (\`Tab\`, \`Shift+Tab\`)
- When the modal is closed, the trigger is focused.

## Javascript interaction

### Events

Events are triggered by the modal.

- \`opened\`
- \`closed\`

### Properties

You can access the boolean \`isOpen\` property to determine if the modal is open.
`,
      },
      source: {
        // This code sample will be used for every example unless overridden.
        code: `
<nub-modal
  size="{{ size }}"
  {{ shouldForceAction }}
  elementToFocusSelector="{{ elementToFocusSelector }}"
>
  <nub-link slot="nub-modal--trigger">{{ triggerSlot}}</nub-link>
  <nub-header slot="nub-modal--header">{{ headerSlot}}</nub-header>
  <p slot="nub-modal--accessibility-description">{{ accessibilityDescription }}</p>
  {{ defaultSlot }}
</nub-modal>
        `,
      },
    },
  },
};

const Template = ({
  triggerSlot,
  headerSlot,
  accessibilityDescription,
  defaultSlot,
  size,
  shouldForceAction,
  elementToFocusSelector,
}): TemplateResult => {
  return html`
    <nub-modal
      size="${ifDefined(size)}"
      ?shouldForceAction="${shouldForceAction}"
      elementToFocusSelector="${ifDefined(elementToFocusSelector)}"
    >
      ${ifDefined(triggerSlot)} ${ifDefined(headerSlot)}
      ${ifDefined(defaultSlot)} ${ifDefined(accessibilityDescription)}
    </nub-modal>
  `;
};

export const Small = Template.bind({});
Small.args = {
  triggerSlot: html`
    <nub-link slot="nub-modal--trigger">
      <p>Open small modal.</p>
    </nub-link>
  `,
  headerSlot: html`
    <nub-header slot="nub-modal--header">
      The modal header
    </nub-header>
  `,
  defaultSlot: html`
    <p>Here is a first line of the modal.</p>
    <p>
      This has a longer line so we can test line breaks, etc. This is going to
      be another sentence so we can see a longer paragraph. How about this?
      Thanks.
    </p>
  `,
  size: 'small',
};

export const Medium = Template.bind({});
Medium.args = {
  triggerSlot: html`
    <nub-link slot="nub-modal--trigger">
      Open medium modal
    </nub-link>
  `,
  headerSlot: html` <nub-header slot="nub-modal--header">
    The modal header
  </nub-header>`,
  defaultSlot: html`
    <p>Here is a first line of the modal.</p>
    <p>
      This has a longer line so we can test line breaks, etc. This is going to
      be another sentence so we can see a longer paragraph. How about this?
      Thanks.
    </p>
  `,
  size: 'medium',
};

export const FullScreen = Template.bind({});
FullScreen.args = {
  triggerSlot: html`
    <nub-link slot="nub-modal--trigger">
      Open full screen modal
    </nub-link>
  `,
  headerSlot: html`
    <nub-header slot="nub-modal--header">
      The modal header
    </nub-header>
  `,
  defaultSlot: html`
    <p>Here is a first line of the modal.</p>
    <p>
      This has a longer line so we can test line breaks, etc. This is going to
      be another sentence so we can see a longer paragraph. How about this?
      Thanks.
    </p>
  `,
  size: 'full-screen',
};

export const ButtonTrigger = Template.bind({});
ButtonTrigger.args = {
  triggerSlot: html`
    <nub-button slot="nub-modal--trigger">
      Open modal with button trigger
    </nub-button>
  `,
  headerSlot: html`
    <nub-header slot="nub-modal--header">
      The modal header
    </nub-header>
  `,
  defaultSlot: html`
    <p>Here is a first line of the modal.</p>
    <p>
      This has a longer line so we can test line breaks, etc. This is going to
      be another sentence so we can see a longer paragraph. How about this?
      Thanks.
    </p>
  `,
};

export const NoHeader = Template.bind({});
NoHeader.args = {
  triggerSlot: html`
    <nub-link slot="nub-modal--trigger">
      <p>Open modal without header.</p>
    </nub-link>
  `,
  defaultSlot: html`
    <p>Here is a first line of the modal.</p>
    <p>
      This has a longer line so we can test line breaks, etc. This is going to
      be another sentence so we can see a longer paragraph. How about this?
      Thanks.
    </p>
  `,
};

// This demonstrates an accessibility feature.
export const AccessibilityDescription = Template.bind({});
AccessibilityDescription.args = {
  triggerSlot: html`
    <nub-link slot="nub-modal--trigger">
      <p>Open a modal with an accessibility description.</p>
    </nub-link>
  `,
  headerSlot: html`
    <nub-header slot="nub-modal--header">
      The modal header
    </nub-header>
  `,
  accessibilityDescription: html`
    <p slot="nub-modal--accessibility-description">
      This is an accessibility description about the modal.
    </p>
  `,
  defaultSlot: html`
    <p>Here is a first line of the modal.</p>
    <p>
      This has a longer line so we can test line breaks, etc. This is going to
      be another sentence so we can see a longer paragraph. How about this?
      Thanks.
    </p>
  `,
};

// This demonstrates an accessibility feature.
// @todo I could not set focus on the `nub-button` element, but a standard `button` works.
export const CustomFocusElement = Template.bind({});
CustomFocusElement.args = {
  triggerSlot: html`
    <nub-link slot="nub-modal--trigger">
      <p>Open modal and focus on accept button.</p>
    </nub-link>
  `,
  headerSlot: html`
    <nub-header slot="nub-modal--header">
      The modal header
    </nub-header>
  `,
  defaultSlot: html`
    <p>Here is a first line of the modal.</p>
    <p>
      This has a longer line so we can test line breaks, etc. This is going to
      be another sentence so we can see a longer paragraph. How about this?
      Thanks.
    </p>
    <button class="cancel">Cancel</button>
    <button
      class="accept"
      onClick="
        document.querySelectorAll('nub-modal').forEach(
          (node) => {
            if(node.isOpen){
              node.close();
            }
          }
        )
      "
      onkeydown="
        if (event.key === 'Enter') {
          document.querySelectorAll('nub-modal').forEach(
            (node) => {
              if(node.isOpen){
                node.close();
              }
            }
          )
        }
      "
    >
      Accept
    </button>
  `,
  elementToFocusSelector: '.accept',
};

// This demonstrates an accessibility feature.
export const AutoFocusedElement = Template.bind({});
AutoFocusedElement.args = {
  triggerSlot: html`
    <nub-link slot="nub-modal--trigger">
      <p>Open modal and focus on accept button automatically.</p>
    </nub-link>
  `,
  headerSlot: html`
    <nub-header slot="nub-modal--header">
      The modal header
    </nub-header>
  `,
  defaultSlot: html`
    <p>Here is a first line of the modal.</p>
    <p>
      This has a longer line so we can test line breaks, etc. This is going to
      be another sentence so we can see a longer paragraph. How about this?
      Thanks.
    </p>
    <button
      onClick="
        document.querySelectorAll('nub-modal').forEach(
          (node) => {
            if(node.isOpen){
              node.close();
            }
          }
        )
      "
      onkeydown="
        if (event.key === 'Enter') {
          document.querySelectorAll('nub-modal').forEach(
            (node) => {
              if(node.isOpen){
                node.close();
              }
            }
          )
        }
      "
    >
      Accept
    </button>
  `,
};

export const ForceAction = Template.bind({});
ForceAction.args = {
  triggerSlot: html`
    <nub-link slot="nub-modal--trigger">
      <p>Open modal and force an action.</p>
    </nub-link>
  `,
  headerSlot: html`
    <nub-header slot="nub-modal--header">
      The modal header
    </nub-header>
  `,
  defaultSlot: html`
    <p>Here is a first line of the modal.</p>
    <p>
      This has a longer line so we can test line breaks, etc. This is going to
      be another sentence so we can see a longer paragraph. How about this?
      Thanks.
    </p>
    <button
      class="accept"
      onClick="
        document.querySelectorAll('nub-modal').forEach(
          (node) => {
            if(node.isOpen){
              node.close();
            }
          }
        )
      "
      onkeydown="
        if (event.key === 'Enter') {
          document.querySelectorAll('nub-modal').forEach(
            (node) => {
              if(node.isOpen){
                node.close();
              }
            }
          )
        }
      "
    >
      Accept
    </button>
  `,
  shouldForceAction: true,
  elementToFocusSelector: '.accept',
};

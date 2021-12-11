import { html, TemplateResult } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { argTypeRel, argTypeTarget, argTypeHref } from './config';
import type { LinkTargetType, LinkRelType } from './config';
import sampleImage from '../../../.storybook/static/media/color/Creative_Process_color.jpg';
// Import the component itself.
import './outline-link';

export default {
  title: 'Navigation/Link',
  component: 'outline-link',
  argTypes: {
    linkHref: {
      ...argTypeHref,
    },
    linkRel: {
      ...argTypeRel,
    },
    linkTarget: {
      ...argTypeTarget,
    },
    linkText: {
      name: 'Link Text',
      description: 'The text to display for the link component.',
      control: {
        type: 'text',
      },
    },
  },
  args: {
    linkHref: 'https://outline.phase2tech.com',
    linkRel: 'external',
    linkTarget: '_blank',
    linkText: 'Sample Link',
  },
  parameters: {
    docs: {
      description: {
        component: `
This component renders a link as an \`a\` element.

The default slot can be text or other elements such as images.

## Difference from an \`a\` element.

_@todo specify why this would be used instead of an \`a\` element._
        `,
      },
      source: {
        code: `
<outline-link
  linkHref="{{ linkHref }}"
  linkRel="{{ linkRel }}"
  linkTarget="{{ linkTarget }}"
>
  {{ defaultSlot }}
</outline-link>
        `,
      },
    },
  },
};

interface Options {
  linkHref?: string;
  linkRel?: LinkRelType;
  linkText?: string;
  linkTarget?: LinkTargetType;
}

export const Link = ({
  linkHref,
  linkRel,
  linkText,
  linkTarget,
}: Options): TemplateResult =>
  html`
    <outline-link
      linkHref="${ifDefined(linkHref)}"
      linkRel="${ifDefined(linkRel)}"
      linkTarget="${ifDefined(linkTarget)}"
    >
      ${ifDefined(linkText)}
    </outline-link>
  `;

export const PropsAndSlottedText = (): TemplateResult =>
  html`
    <outline-link linkHref="https://outline.phase2tech.com">
      Link using properties, with slotted link text
    </outline-link>
  `;

export const PropertiesOnly = (): TemplateResult =>
  html`
    <outline-link
      linkHref="https://outline.phase2tech.com"
      linkText="Link using properties, including the link text"
    ></outline-link>
  `;

export const FullySlotted = (): TemplateResult =>
  html`
    <outline-link>
      <a href="https://outline.phase2tech.com" target="_blank">
        Link using fully slotted link element
      </a>
    </outline-link>
  `;

export const SlottedImageLink = (): TemplateResult =>
  html`
    <outline-link>
      <a href="https://outline.phase2tech.com" target="_blank">
        <img src="${sampleImage}" alt="Creative" />
      </a>
    </outline-link>
  `;

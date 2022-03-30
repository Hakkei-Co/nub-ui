import { html, TemplateResult } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import type { HorizontalAlignment } from '../nub-element/utils/types';
import { argTypeHorizontalAlign } from '../nub-element/utils/utils';
import './nub-container';

export default {
  title: 'Layout/Container',
  component: 'nub-container',
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    containerAlign: {
      ...argTypeHorizontalAlign,
      name: 'Alignment',
      description: 'How the container should align to the parent.',
      table: { defaultValue: { summary: 'center' } },
    },
    xPadding: {
      name: 'Padding: x-axis',
      description: '',
      table: { defaultValue: { summary: 'false' } },
      control: {
        type: 'boolean',
      },
    },
    yPadding: {
      name: 'Padding: y-axis',
      description: '',
      table: { defaultValue: { summary: 'false' } },
      control: {
        type: 'boolean',
      },
    },
    fullBleed: {
      name: 'Full Bleed',
      description:
        'If the container should be full bleed and extend its left and right edges to edge of parent.',
      table: { defaultValue: { summary: 'false' } },
      control: {
        type: 'boolean',
      },
    },
  },
  args: {
    containerAlign: 'center',
    xPadding: true,
    yPadding: true,
    fullBleed: false,
  },
};

interface Options {
  xPadding?: boolean;
  yPadding?: boolean;
  fullBleed?: boolean;
  containerAlign?: HorizontalAlignment;
}

export const Container = ({
  xPadding,
  yPadding,
  fullBleed,
  containerAlign,
}: Options): TemplateResult =>
  html`
    <nub-container
      class="text-left rounded-sm border-2 border-ui-warning my-10 md:my-20"
      ?x-padding="${xPadding}"
      ?y-padding="${yPadding}"
      ?full-bleed="${fullBleed}"
      container-align="${ifDefined(containerAlign)}"
    >
      <p>
        This is text inside of a container. The various stylings of the element
        in demo mode are just here to show where the container starts and ends
        and will not be visible on the actual component being rendered.
      </p>
      <p>
        The left and right padding are in fact representative of the final
        display.
      </p>
    </nub-container>
  `;

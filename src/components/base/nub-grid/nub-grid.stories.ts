import { html, TemplateResult } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { Size } from '../nub-element/utils/types';

import { argTypeGapSize, argTypeHidden } from '../nub-element/utils/utils';
import './nub-grid';

export default {
  title: 'Layout/Grid',
  component: 'nub-grid',
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    defaultSlot: argTypeHidden,
    gapSize: {
      ...argTypeGapSize,
      name: 'Default Gap Size',
      table: { defaultValue: { summary: 'small' } },
    },
    gapSizeSm: {
      ...argTypeGapSize,
      name: 'Gap Size on Small+',
      table: { defaultValue: { summary: 'inherited' } },
    },
    gapSizeMd: {
      ...argTypeGapSize,
      name: 'Gap Size on Medium+',
      table: { defaultValue: { summary: 'inherited' } },
    },
    gapSizeLg: {
      ...argTypeGapSize,
      name: 'Gap Size on Large+',
      table: { defaultValue: { summary: 'inherited' } },
    },
    gapSizeXl: {
      ...argTypeGapSize,
      name: 'Gap Size on Extra Large+',
      table: { defaultValue: { summary: 'inherited' } },
    },
    gapSizeXxl: {
      ...argTypeGapSize,
      name: 'Gap Size on Extra Extra Large+',
      table: { defaultValue: { summary: 'inherited' } },
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
    xPadding: false,
    yPadding: false,
    fullBleed: false,
  },
};

interface Options {
  gapSize?: Size;
  gapSizeSm?: Size;
  gapSizeMd?: Size;
  gapSizeLg?: Size;
  gapSizeXl?: Size;
  gapSizeXxl?: Size;
  xPadding?: boolean;
  yPadding?: boolean;
  fullBleed?: boolean;
  defaultSlot?: boolean;
}

const Template = ({
  gapSize,
  gapSizeSm,
  gapSizeMd,
  gapSizeLg,
  gapSizeXl,
  gapSizeXxl,
  xPadding,
  yPadding,
  fullBleed,
  defaultSlot,
}: Options): TemplateResult => html`
  <nub-grid gap-size="${ifDefined(gapSize)}" gap-size-sm="${ifDefined(gapSizeSm)}" gap-size-md="${ifDefined(gapSizeMd)}"
    gap-size-lg="${ifDefined(gapSizeLg)}" gap-size-xl="${ifDefined(gapSizeXl)}" gap-size-xxl="${ifDefined(gapSizeXxl)}"
    ?x-padding="${xPadding}" ?y-padding="${yPadding}" ?full-bleed="${fullBleed}">
    ${defaultSlot}
  </nub-grid>
`;

const DefaultGridDecorators = [
  (Story): TemplateResult => html`<div class="font-body block py-12 bg-nub-bg-body-default">${Story()}</div>`,
];

export const RowsAndColumns = Template.bind({});
RowsAndColumns.decorators = DefaultGridDecorators;
RowsAndColumns.args = {
  gapSize: 'small',
  defaultSlot: html`
    <nub-column col-span-default="12" content-align="middle">
      <nub-header level="h2" level-style="semibold">
        Column/Row Spanning</nub-header>
    </nub-column>

    <nub-column col-span-default="12" class="border-2 border-ui-warning p-8 py-16 rounded-sm shadow-md">
      <p>This box spans 1 row and 12 columns.</p>
    </nub-column>
    <nub-column col-span-md="6" row-span="4" class="py-64 border-2 border-ui-warning p-8 rounded-sm shadow-md">
      <p>This box spans 4 rows and 6 columns.</p>
    </nub-column>
    <nub-column col-span-md="6" row-span="1" class="border-2 border-ui-warning p-8 rounded-sm shadow-md">
      <p>This box spans 6 columns and 1 row.</p>
    </nub-column>
    <nub-column col-span-md="6" row-span="3" class="border-2 border-ui-warning p-8 rounded-sm shadow-md">
      <p>This box spans 6 columns and 3 rows.</p>
    </nub-column>
    <nub-column col-span-default="12" class="border-2 border-ui-warning p-8 py-16 rounded-sm shadow-md">
      <p>This box spans 1 row and 12 columns.</p>
    </nub-column>
  `,
};

export const EqualColumns = Template.bind({});
EqualColumns.decorators = DefaultGridDecorators;
EqualColumns.args = {
  gapSize: 'small',
  defaultSlot: html`
    <nub-column col-span-default="12">
      <nub-header level="h2" level-style="semibold">
        Equal Column Grid</nub-header>
    </nub-column>
    <nub-column col-span-md="4" class="border-2 border-ui-warning p-8 py-16 rounded-sm shadow-md">
      <p>This is some text inside of a grid column.</p>
    </nub-column>
    <nub-column col-span-md="4" class="border-2 border-ui-warning p-8 py-16 rounded-sm shadow-md">
      <p>This is some text inside of a grid column.</p>
    </nub-column>
    <nub-column col-span-md="4" class="border-2 border-ui-warning p-8 py-16 rounded-sm shadow-md">
      <p>This is some text inside of a grid column.</p>
    </nub-column>
  `,
};

export const FullBleed = Template.bind({});
FullBleed.decorators = DefaultGridDecorators;
FullBleed.args = {
  gapSize: 'small',
  fullBleed: true,
  defaultSlot: html`
    <nub-column col-span-default="12">
      <nub-header level="h2" level-style="semibold">
        Full Bleed Grid</nub-header>
    </nub-column>
    <nub-column col-span-md="4" class="border-2 border-ui-warning p-8 py-16 rounded-sm shadow-md">
      <p>This is some text inside of a grid column.</p>
    </nub-column>
    <nub-column col-span-md="4" class="border-2 border-ui-warning p-8 py-16 rounded-sm shadow-md">
      <p>This is some text inside of a grid column.</p>
    </nub-column>
    <nub-column col-span-md="4" class="border-2 border-ui-warning p-8 py-16 rounded-sm shadow-md">
      <p>This is some text inside of a grid column.</p>
    </nub-column>
  `,
};

export const AsymmetricLeft = Template.bind({});
AsymmetricLeft.decorators = DefaultGridDecorators;
AsymmetricLeft.args = {
  gapSize: 'small',
  defaultSlot: html`
    <nub-column col-span-default="12">
      <nub-header level="h2" level-style="semibold">
        Asymmetrical Grid</nub-header>
    </nub-column>
    <nub-column col-span-md="8" class="border-2 border-ui-warning p-8 py-16 rounded-sm shadow-md">
      <p>
        This is some text inside of a grid column. Because it's asymmetrical,
        This box is either twice as large or half the size of the other column.
      </p>
    </nub-column>
    <nub-column col-span-md="4" class="border-2 border-ui-warning p-8 py-16 rounded-sm shadow-md">
      <p>
        This is some text inside of a grid column. Because it's asymmetrical,
        This box is either twice as large or half the size of the other column.
      </p>
    </nub-column>
  `,
};

export const AsymmetricRight = Template.bind({});
AsymmetricRight.decorators = DefaultGridDecorators;
AsymmetricRight.args = {
  gapSize: 'small',
  defaultSlot: html`
    <nub-column col-span-default="12">
      <nub-header level="h2" level-style="semibold">
        Asymmetrical Grid</nub-header>
    </nub-column>
    <nub-column col-span-md="4" class="border-2 border-ui-warning p-8 py-16 rounded-sm shadow-md">
      <p>
        This is some text inside of a grid column. Because it's asymmetrical,
        This box is either twice as large or half the size of the other column.
      </p>
    </nub-column>
    <nub-column col-span-md="8" class="border-2 border-ui-warning p-8 py-16 rounded-sm shadow-md">
      <p>
        This is some text inside of a grid column. Because it's asymmetrical,
        This box is either twice as large or half the size of the other column.
      </p>
    </nub-column>
  `,
};

export const AsymmetricLeftWithBorder = Template.bind({});
AsymmetricLeftWithBorder.decorators = DefaultGridDecorators;
AsymmetricLeftWithBorder.args = {
  gapSize: '',
  defaultSlot: html`
    <nub-column col-span-default="12">
      <nub-header level="h2" level-style="semibold">
        Asymmetrical Grid With Divider</nub-header>
    </nub-column>
    <nub-column col-span-default="12" class="pb-2">
      <h3>Border gap size: small</h3>
    </nub-column>

    <nub-column col-span-lg="8" has-right-divider=${true} border-gap-size="small">
      <div class="border-2 bg-pink-400border-ui-warning p-8 py-16 rounded-sm shadow-md">
        <p>
          This is some text inside of a grid column. Because it's asymmetrical,
          This box is either twice as large or half the size of the other
          column.
        </p>
      </div>
    </nub-column>
    <nub-column col-span-lg="4" has-left-divider=${true} border-gap-size="small">
      <div class="border-2 bg-purple-500border-ui-warning p-8 py-16 rounded-sm shadow-md">
        <p>
          This is some text inside of a grid column. Because it's asymmetrical,
          This box is either twice as large or half the size of the other
          column.
        </p>
      </div>
    </nub-column>

    <nub-column col-span-default="12" class="pb-2 border-t-2 mt-6 pt-4">
      <nub-header level="h2" level-style="semibold">
        Asymmetrical Grid With Divider</nub-header>
    </nub-column>
    <nub-column col-span-default="12" class="pb-2">
      <h3>Border gap size: medium</h3>
    </nub-column>

    <nub-column col-span-lg="8" has-right-divider=${true} border-gap-size="medium">
      <div class="border-2 bg-indigo-500border-ui-warning p-8 py-16 rounded-sm shadow-md">
        <p>
          This is some text inside of a grid column. Because it's asymmetrical,
          This box is either twice as large or half the size of the other
          column.
        </p>
      </div>
    </nub-column>
    <nub-column col-span-lg="4" has-left-divider=${true} border-gap-size="medium">
      <div class="border-2 bg-pink-600border-ui-warning p-8 py-16 rounded-sm shadow-md">
        <p>
          This is some text inside of a grid column. Because it's asymmetrical,
          This box is either twice as large or half the size of the other
          column.
        </p>
      </div>
    </nub-column>

    <nub-column col-span-default="12" class="pb-2 border-t-2 mt-6 pt-4">
      <nub-header level="h2" level-style="semibold">
        Asymmetrical Grid With Divider</nub-header>
    </nub-column>
    <nub-column col-span-default="12" class="pb-2">
      <h3>Border gap size: large</h3>
    </nub-column>

    <nub-column col-span-lg="8" has-right-divider=${true} border-gap-size="large">
      <div class="border-2 border-ui-warning p-8 py-16 rounded-sm shadow-md">
        <p>
          This is some text inside of a grid column. Because it's asymmetrical,
          This box is either twice as large or half the size of the other
          column.
        </p>
      </div>
    </nub-column>
    <nub-column col-span-lg="4" has-left-divider=${true} border-gap-size="large">
      <div class="border-2 border-ui-warning p-8 py-16 rounded-sm shadow-md">
        <p>
          This is some text inside of a grid column. Because it's asymmetrical,
          This box is either twice as large or half the size of the other
          column.
        </p>
      </div>
    </nub-column>
  `,
};

export const OffsetLeft = Template.bind({});
OffsetLeft.decorators = DefaultGridDecorators;
OffsetLeft.args = {
  defaultSlot: html`
    <nub-column col-span-default="12">
      <nub-header level="h2" level-style="semibold">
        Offset Left</nub-header>
    </nub-column>
    <nub-column col-span-default="10" class="border-2 border-ui-warning p-8 py-16 rounded-sm shadow-md">
      <p>
        This is an example of a grid column layout in which the content doesn't
        expand the whole width of the container.
      </p>
    </nub-column>
  `,
};

export const OffsetRight = Template.bind({});
OffsetRight.decorators = DefaultGridDecorators;
OffsetRight.args = {
  defaultSlot: html`
    <nub-column col-span-default="12">
      <nub-header level="h2" level-style="semibold">
        Offset Right</nub-header>
    </nub-column>
    <nub-column col-span-default="10"
      class="col-start-3 justify-self-end border-2 border-ui-warning p-8 py-16 rounded-sm shadow-md">
      <p>
        This is an example of a grid column layout in which the content doesn't
        expand the whole width of the container.
      </p>
    </nub-column>
  `,
};

import { html, TemplateResult } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { repeat } from 'lit/directives/repeat.js';

import {
  argTypeSlotContent,
  argTypeColSpan,
  argTypeRowSpan,
  argTypeVerticalAlign,
} from '../../nub-element/utils/utils';

import './nub-column';

export default {
  title: 'Layout/Content Column',
  component: 'nub-column',
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    ...argTypeSlotContent,
    colSpanDefault: {
      ...argTypeColSpan,
      name: 'Default Number of Columns to Span',
      table: { defaultValue: { summary: '12' } },
    },
    colSpanSm: {
      ...argTypeColSpan,
      name: 'Number of Columns to Span on Small+',
    },
    colSpanMd: {
      ...argTypeColSpan,
      name: 'Number of Columns to Span on Medium+',
    },
    colSpanLg: {
      ...argTypeColSpan,
      name: 'Number of Columns to Span on Large+',
    },
    colSpanXl: {
      ...argTypeColSpan,
      name: 'Number of Columns to Span on Extra Large+',
    },
    colSpanXxl: {
      ...argTypeColSpan,
      name: 'Number of Columns to Span on Extra Extra Large+',
    },
    rowSpan: {
      ...argTypeRowSpan,
      name: 'Number of Rows to Span',
      table: { defaultValue: { summary: '1' } },
    },
    numContentCols: {
      ...argTypeColSpan,
      name: 'Number of Content Blocks',
      description: 'The number of blocks to place for this demo.',
      table: { defaultValue: { summary: '12' } },
    },
    contentAlign: {
      ...argTypeVerticalAlign,
      name: 'Column Content Vertical Alignment',
    },
  },
  args: {
    colSpanDefault: 12,
    rowSpan: 1,
    numContentCols: 12,
  },
  decorators: [
    Story => html`
      <nub-container>
        <!-- <nub-header level="h2" level-style="2" class="my-10"
          >Responsive Grid</nub-header
        > -->
        <h2>Responsive Grid</h2>
      </nub-container>
      <nub-grid gap-size="small"> ${Story()} </nub-grid>
    `,
  ],
};

interface Options {
  colSpanDefault?: number;
  colSpanSm?: number;
  colSpanMd?: number;
  colSpanLg?: number;
  colSpanXl?: number;
  colSpanXxl?: number;
  rowSpan?: number;
  numContentCols?: number;
  contentAlign?: string;
}

const Template = ({
  colSpanDefault,
  colSpanSm,
  colSpanMd,
  colSpanLg,
  colSpanXl,
  colSpanXxl,
  rowSpan,
  numContentCols,
  contentAlign,
}: Options) => {
  const colArray = new Array(numContentCols);
  return repeat(
    colArray,
    (): TemplateResult => html`
      <nub-column
        content-align="${ifDefined(contentAlign)}"
        col-span-default="${colSpanDefault}"
        col-span-sm="${ifDefined(colSpanSm)}"
        col-span-md="${ifDefined(colSpanMd)}"
        col-span-lg="${ifDefined(colSpanLg)}"
        col-span-xl="${ifDefined(colSpanXl)}"
        col-span-xxl="${ifDefined(colSpanXxl)}"
        row-span="${ifDefined(rowSpan)}"
        class="border-2 bg-demo-lightBlue border-demo-darkBlue p-8 border-dashed rounded-xl shadow-md"
        style="min-height: 300px;"
      >
        <p>
          This is an example of a grid column layout in which the content
          doesn't expand the whole width of the container.
        </p>
      </nub-column>
    `
  );
};

export const ResponsiveColumns = Template.bind({});
ResponsiveColumns.args = {
  colSpanDefault: 12,
  colSpanSm: 6,
  colSpanMd: 6,
  colSpanLg: 4,
  colSpanXl: 4,
  colSpanXxl: 4,
  rowSpan: 1,
  numContentCols: 6,
  contentAlign: 'middle',
};

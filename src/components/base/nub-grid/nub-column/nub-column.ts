import { NubElement } from '../../nub-element/nub-element';
import { html, TemplateResult, CSSResultGroup } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import componentStyles from './nub-column.css.lit';
import type { VerticalAlignment, Size } from '../../nub-element/utils/types';

type colSpanRange = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
type rowSpanRange = 1 | 2 | 3 | 4 | 5 | 6;

/**
 * The Nub Column component
 * @element nub-column
 *
 * @slot - The default, and only slot for this element.
 */
@customElement('nub-column')
export class NubColumn extends NubElement {
  static styles: CSSResultGroup = [componentStyles];
  /**
   * The number of columns wide this column should be.
   */
  @property({ type: Number, reflect: true, attribute: 'col-span-default' })
  colSpanDefault: colSpanRange = 12;

  /**
   * The number of columns wide this column should be on small+ screens.
   */
  @property({ type: Number, reflect: true, attribute: 'col-span-sm' })
  colSpanSm: colSpanRange;

  /**
   * The number of columns wide this column should be on medium+ screens.
   */
  @property({ type: Number, reflect: true, attribute: 'col-span-md' })
  colSpanMd: colSpanRange;

  /**
   * The number of columns wide this column should be on large+ screens.
   */
  @property({ type: Number, reflect: true, attribute: 'col-span-lg' })
  colSpanLg: colSpanRange;

  /**
   * The number of columns wide this column should be on extra large+ screens.
   */
  @property({ type: Number, reflect: true, attribute: 'col-span-xl' })
  colSpanXl: colSpanRange;

  /**
   * The number of columns wide this column should be on extra extra large+ screens.
   */
  @property({ type: Number, reflect: true, attribute: 'col-span-2xl' })
  colSpan2xl: colSpanRange;

  /**
   * The number of rows this column will span.
   */
  @property({ type: Number, reflect: true, attribute: 'row-span' })
  rowSpan: rowSpanRange = 1;
  /**
   * The vertical placement of content inside of the column.
   */
  @property({ type: String, reflect: true, attribute: 'content-align' })
  contentAlign: VerticalAlignment = 'middle';
  /**
   * Handles the display of a left divider.
   */
  @property({ type: Boolean, reflect: true, attribute: 'has-left-divider' })
  hasLeftDivider: boolean;
  /**
   * Handles the display of a right divider.
   */
  @property({ type: Boolean, reflect: true, attribute: 'has-right-divider' })
  hasRightDivider: boolean;
  /**
   * Handles the spacing around border.
   */
  @property({ type: String, reflect: true, attribute: 'border-gap-size' })
  borderGapSize: Size;

  render(): TemplateResult {
    return html`<slot></slot>`;
  }
}

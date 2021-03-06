import { NubElement } from '../nub-element/nub-element';
import { html, TemplateResult, CSSResultGroup } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import componentStyles from './nub-grid.css.lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import type { HorizontalAlignment, Size } from '../nub-element/utils/types';
import '../nub-container/nub-container';
/**
 * The Outline Grid component
 * @attr x-padding - passed to nub-container wrapper.
 * @attr y-padding - passed to nub-container wrapper.
 * @attr full-bleed - passed to nub-container wrapper.
 * @attr container-align - passed to nub-container wrapper.
 * @slot - The default, and only slot for this element.
 */
@customElement('nub-grid')
export class NubGrid extends NubElement {
  static styles: CSSResultGroup = [componentStyles];

  /**
   * Whether or not this container has left/right padding.
   */
  @property({
    type: Boolean,
    reflect: true,
    attribute: 'x-padding',
  })
  xPadding = false;

  /**
   * Whether or not this container has left/right padding.
   */
  @property({
    type: Boolean,
    reflect: true,
    attribute: 'y-padding',
  })
  yPadding = false;

  /**
   * Whether or not this is a full bleed container.
   */
  @property({
    type: Boolean,
    reflect: true,
    attribute: 'full-bleed',
  })
  fullBleed = false;

  /**
   * The horizontal position of the container.
   */
  @property({
    type: String,
    reflect: true,
    attribute: 'container-align',
  })
  containerAlign: HorizontalAlignment = 'center';

  /**
   * How much of a gap should exist between columns? (This affects both the vertical and horizontal column/row gaps.)
   */
  @property({ type: String, reflect: true, attribute: 'gap-size' })
  gapSize: Size = 'small';

  /**
   * How much of a gap should exist between columns on small+ screens? (This affects both the vertical and horizontal column/row gaps.)
   */
  @property({ type: String, reflect: true, attribute: 'gap-size-sm' })
  gapSizeSm: Size;

  /**
   * How much of a gap should exist between columns on medium+ screens? (This affects both the vertical and horizontal column/row gaps.)
   */
  @property({ type: String, reflect: true, attribute: 'gap-size-md' })
  gapSizeMd: Size;

  /**
   * How much of a gap should exist between columns on large+ screens? (This affects both the vertical and horizontal column/row gaps.)
   */
  @property({ type: String, reflect: true, attribute: 'gap-size-lg' })
  gapSizeLg: Size;

  /**
   * How much of a gap should exist between columns on extra large+ screens? (This affects both the vertical and horizontal column/row gaps.)
   */
  @property({ type: String, reflect: true, attribute: 'gap-size-xl' })
  gapSizeXl: Size;

  /**
   * How much of a gap should exist between columns on extra extra large+ screens? (This affects both the vertical and horizontal column/row gaps.)
   */
  @property({ type: String, reflect: true, attribute: 'gap-size-xxl' })
  gapSizeXxl: Size;

  /**
   * How much of a gap should exist between columns on extra extra extra large+ screens? (This affects both the vertical and horizontal column/row gaps.)
   */
  @property({ type: String, reflect: true, attribute: 'gap-size-xxxl' })
  gapSizeXxxl: Size;

  render(): TemplateResult {
    return html`
      <nub-container
        ?x-padding="${this.xPadding}"
        ?y-padding="${this.yPadding}"
        ?full-bleed="${this.fullBleed}"
        container-align="${ifDefined(this.containerAlign)}"
      >
        <slot></slot>
      </nub-container>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nub-grid': NubGrid;
  }
}

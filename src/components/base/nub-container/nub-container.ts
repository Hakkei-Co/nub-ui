// Our base component, which all others extend.
import { NubElement } from '../nub-element/nub-element';
import { html, TemplateResult, CSSResultGroup } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import componentStyles from './nub-container.css.lit';
import type { HorizontalAlignment } from '../nub-element/utils/types';

/**
 * The Outline  Link component
 * @slot - The default, and only slot for this element.
 */
@customElement('nub-container')
export class NubContainer extends NubElement {
  static styles: CSSResultGroup = [componentStyles];

  /**
   * Whether or not this container has padding.
   */
  @property({
    type: Boolean,
    reflect: true,
    attribute: 'x-padding',
  })
  xPadding = false;

  /**
   * Whether or not this container has padding.
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
   * Return the container element.
   */
  render(): TemplateResult {
    return html`<slot></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nub-container': NubContainer;
  }
}

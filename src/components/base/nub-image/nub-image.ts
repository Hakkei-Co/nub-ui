import { html, TemplateResult } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { NubElement } from '../nub-element/nub-element';
import componentStyles from './nub-image.css.lit';

/**
 * The image component, with support for parallax scrolling.
 * @element nub-image
 *
 * @slot default - The image to be presented.
 * @slot caption - The caption text for the image.
 */
@customElement('nub-image')
export class NubImage extends NubElement {
  static styles = [componentStyles];

  @state()
  hasCaptionSlot: boolean;

  firstUpdated(): void {
    this.hasCaptionSlot = this.querySelector('[slot="caption"]') !== null;
  }

  captionSlotTemplate(): TemplateResult | null {
    return !this.hasCaptionSlot
      ? null
      : html`<figcaption><slot name="caption"></slot></figcaption>`;
  }

  render(): TemplateResult {
    return html`
      <figure><slot></slot></figure>
      ${this.captionSlotTemplate()}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nub-image': NubImage;
  }
}

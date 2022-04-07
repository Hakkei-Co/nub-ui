import { CSSResultGroup, TemplateResult, html } from 'lit';
import { NubElement } from '../nub-element/nub-element';
import { customElement } from 'lit/decorators.js';
import { SlotController } from '../../controllers/slot-controller';
import componentStyles from './nub-admin-links.css.lit';

/**
 * The Outline Admin Links component
 * @element nub-admin-links
 * @slot - The default, and only slot for this element.
 * @todo: Ensure this component is more mobile friendly.
 */
@customElement('nub-admin-links')
export class NubAdminLinks extends NubElement {
  slots = new SlotController(
    this, // This, the host element.
    true // To shift or not to shift LightDom nodes to ShadowDOM.
  );
  static styles: CSSResultGroup = [componentStyles];

  render(): TemplateResult {
    return html`
      <div class="links">
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nub-admin-links': NubAdminLinks;
  }
}

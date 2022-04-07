import { CSSResultGroup, TemplateResult, html } from 'lit';
import { NubElement } from '../nub-element/nub-element';
import { customElement, property } from 'lit/decorators.js';
import componentStyles from './nub-accordion-panel.css.lit';
import { MobileController } from '../../controllers/mobile-controller';
import '../nub-icon/nub-icon';

/**
 * The NubAccordionPanel component
 * @element nub-accordion-panel
 * @slot heading: The title text for the panel component.
 * @slot default slot: The main panel content, visible when the panel is open.
 */
@customElement('nub-accordion-panel')
export class NubAccordionPanel extends NubElement {
  private mobileController = new MobileController(this);

  static styles: CSSResultGroup = [componentStyles];

  /**
   * Sets to 'clean' variant.
   * Controlled by parent accordion component.
   */
  @property({ type: Boolean })
  clean = false;

  /**
   * Wether the panel is active/open.
   * Controlled by parent accordion component.
   */
  @property({ type: Boolean })
  active = false;

  /**
   * Used to provided a unique ID
   * for accordion component and accessibility purposes.
   */
  @property({ type: String, reflect: true })
  id: string = Math.floor(Math.random() * 10000).toString();

  render(): TemplateResult {
    const isMobile = this.mobileController.isMobile ? 'mobile' : null;
    const isClean = this.clean ? 'clean' : null;
    const isActive = this.active ? 'active' : 'inactive';

    return html` <div class="accordion-panel ${isClean}">
      <h4 class="accordion-heading">
        <button
          class="${isMobile}
        ${isActive}
        ${isClean}
        accordion-button
        "
          id="${this.id}-button"
          aria-expanded=${this.active}
          aria-controls="${this.id}-info"
        >
          <span class="accordion-label ${isMobile}">
            <slot name="heading"> </slot>
          </span>
          <span
            class="accordion-icon
          ${isMobile}
          ${isActive}
          ${isClean}
          "
          >
            <nub-icon
              name="${this.active ? 'chevron-up' : 'chevron-down'}"
            ></nub-icon>
          </span>
        </button>
      </h4>
      <div
        class="accordion-content ${isMobile}"
        role="region"
        aria-labelledby="${this.id}-button"
        id="${this.id}-info"
        .hidden=${!this.active}
        aria-hidden="${!this.active}"
      >
        <slot></slot>
      </div>
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nub-accordion-panel': NubAccordionPanel;
  }
}

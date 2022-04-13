import { CSSResultGroup, html, TemplateResult } from 'lit';
import { customElement, queryAssignedNodes, property } from 'lit/decorators.js';
import { NubElement } from '../nub-element/nub-element';
import componentStyles from './nub-menu-item.css.lit';
import { MobileController } from '../../controllers/mobile-controller';

/**
 * Menu Component
 * @element nub-menu-item
 * @slot panels: For arbitrary slots.
 */
@customElement('nub-menu-item')
export class NubMenu extends NubElement {
  private mobileController = new MobileController(this);

  static styles: CSSResultGroup = [componentStyles];

  /**
   * Weather the panel is active/open.
   * Controlled by parent menu component.
   */
  @property({ type: Boolean })
  active = false;

  /**
   * Used to provided a unique ID
   * for accordion component and accessibility purposes.
   */
  @property({ type: String, reflect: true })
  id: string = Math.floor(Math.random() * 10000).toString();

  // Implement `render` to define a template for your element.
  render(): TemplateResult {
    let icon;

    if (this.active) {
      icon = html`
        <nub-icon name="fas-times" library="fa" size="18px"></nub-icon>
      `;
    } else {
      icon = html`
        <nub-icon name="fas-chevron-right" library="fa" size="18px"></nub-icon>
      `;
    }

    return html`
      <div
        class="menu-item"
        data-active=${this.active}
        id="${this.id}-menu-item"
        aria-expanded=${this.active}
        @click="${this.handleClick}"
      >
        <div class="menu-item-wrapper">
          <slot name="header"></slot>
          <slot name="content"></slot>

          ${icon}
        </div>
      </div>
    `;
  }

  /**
   * @returns void
   * To expend menu item
   */
  handleClick = () => {
    this.active = !this.active;
  };

  /**
   * @returns string | null
   * Checks if the window is at mobile size.
   */
  isMobile = () => (this.mobileController.isMobile ? 'mobile' : null);
}

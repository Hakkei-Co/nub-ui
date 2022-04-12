import { CSSResultGroup, html, TemplateResult } from 'lit';
import { customElement, queryAssignedNodes, property } from 'lit/decorators.js';
import { NubElement } from '../nub-element/nub-element';
import componentStyles from './nub-menu.css.lit';
import { MobileController } from '../../controllers/mobile-controller';

/**
 * Menu Component
 * @element nub-menu
 * @slot panels: For arbitrary slots.
 */
@customElement('nub-menu')
export class NubMenu extends NubElement {
  private mobileController = new MobileController(this);

  static styles: CSSResultGroup = [componentStyles];

  /**
   * Sets to 'position' variant.
   * Controlled by parent menu component.
   */
  @property({ type: String })
  position: 'left' | 'right' = 'left';

  /**
   * ref to <nub-menu> in panels slot.
   */
  @queryAssignedNodes('panels', true)
  panels: HTMLSlotElement[];

  // Implement `render` to define a template for your element.
  render(): TemplateResult {
    return html`
      <div class="menu" data-postion="${this.position}">
        <slot name="panels"></slot>
      </div>
    `;
  }
  updated() {}

  /**
   * @returns string | null
   * Checks if the window is at mobile size.
   */
  isMobile = () => (this.mobileController.isMobile ? 'mobile' : null);
}

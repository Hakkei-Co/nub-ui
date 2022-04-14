import { CSSResultGroup, html, TemplateResult } from 'lit';
import {
  customElement,
  queryAssignedNodes,
  property,
  state,
} from 'lit/decorators.js';
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
   * Array of active/open panels.
   */
  @state() active: string = '';

  /**
   * ref to <nub-menu> in panels slot.
   */
  @queryAssignedNodes('panels', true)
  panels: HTMLSlotElement[];

  // Implement `render` to define a template for your element.
  render(): TemplateResult {
    return html`
      <div class="menu" data-postion="${this.position}">
        <div class="menu-wrapper" @click="${this.setActive}">
          <slot name="panels"></slot>
        </div>
      </div>
    `;
  }

  /**
   * Takes the element id of content <div>
   * to maintain state list of active/open panels.
   */
  setActive(e: PointerEvent) {
    const element = e?.target as HTMLElement;
    const contentId = element.id;

    if (this.active === contentId) {
      return (this.active = '');
    }
    return (this.active = contentId);
  }

  updated() {
    this.panels.map(panel => {
      if (this.active === panel.id) {
        panel.setAttribute('active', 'true');
        // panel.removeAttribute('hide')
      } else {
        panel.removeAttribute('active');
        // panel.setAttribute('hide', 'true')
      }

      if (this.active.length && this.active !== panel.id) {
        panel.setAttribute('hide', 'true');
      } else {
        panel.removeAttribute('hide');
      }
    });
  }

  /**
   * @returns string | null
   * Checks if the window is at mobile size.
   */
  isMobile = () => (this.mobileController.isMobile ? 'mobile' : null);
}

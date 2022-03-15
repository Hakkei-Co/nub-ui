// Our base component, which all others extend.
import { OutlineElement } from '../outline-element/outline-element';
import { CSSResultGroup, html, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import componentStyles from './nub-breadcrumbs.css.lit';
import '../outline-container/outline-container';
import { SlotController } from '../../controllers/slot-controller';
/**
 * The Outline  Breadcrumbs component
 * @element nub-breadcrumbs
 * @slot - The default only slot for this element.
 * @todo CONTRIB
 */

@customElement('nub-breadcrumbs')
export class NubBreadcrumbs extends OutlineElement {
  slots = new SlotController(
    this, // This, the host element.
    true // To shift or not to shift LightDom nodes to ShadowDOM.
  );
  static styles: CSSResultGroup = [componentStyles];

  firstUpdated(): void {
    const breadcrumbItems = this.querySelectorAll('span:not(.last)');
    breadcrumbItems.forEach(item => {
      const sep: HTMLSpanElement = document.createElement('span');
      sep.classList.add('separator');
      sep.innerHTML = this.stringSeparator;
      item.append(sep);
    });
  }

  /**
   * Property to define the value of the separator.
   */
  @property({ type: String, attribute: 'string-separator' })
  stringSeparator = '/';

  render(): TemplateResult {
    return html`
      <section class="nub-breadcrumbs">
        <outline-container>
          <slot></slot>
        </outline-container>
      </section>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nub-breadcrumbs': NubBreadcrumbs;
  }
}

// Our base component, which all others extend.
import { NubElement } from '../nub-element/nub-element';
import { CSSResultGroup, html, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import componentStyles from './nub-breadcrumbs.css.lit';
import '../nub-container/nub-container';
import { SlotController } from '../../controllers/slot-controller';
// import OutlineIcon from '../nub-icon/nub-icon';
/**
 * The breadcrumbs nub
 * @element nub-breadcrumbs
 * @slot - The default only slot for this element.
 * @todo CONTRIB
 */

@customElement('nub-breadcrumbs')
export class NubBreadcrumbs extends NubElement {
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
      const newScript = document.createElement('nub-icon');
      newScript.setAttribute('name', 'chevron-right');
      newScript.setAttribute('library', 'system');
      newScript.setAttribute('size', '12px');
      sep.appendChild(newScript);
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
        <nub-container>
          <slot></slot>
        </nub-container>
      </section>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nub-breadcrumbs': NubBreadcrumbs;
  }
}

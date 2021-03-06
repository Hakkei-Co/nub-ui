import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { NubElement } from '../../nub-element/nub-element';

let id = 0;

/**
 * @slot - The tab panel's content.
 *
 * @csspart base - The component's base wrapper.
 */
@customElement('nub-tab-panel')
export default class NubTabPanel extends NubElement {
  private componentId = `tab-panel-${++id}`;

  /** The tab panel's name. */
  @property() name = '';

  /** When true, the tab panel will be shown. */
  @property({ type: Boolean, reflect: true }) active = false;

  connectedCallback() {
    super.connectedCallback();
    this.id = this.id || this.componentId;
  }

  render() {
    this.style.display = this.active ? 'block' : 'none';

    return html`
      <div
        part="base"
        class="tab-panel"
        role="tabpanel"
        aria-selected=${this.active ? 'true' : 'false'}
        aria-hidden=${this.active ? 'false' : 'true'}
      >
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nub-tab-panel': NubTabPanel;
  }
}

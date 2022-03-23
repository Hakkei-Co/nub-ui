import { html, TemplateResult, CSSResultGroup } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import componentStyles from './nub-alert.css.lit';
import { OutlineElement } from '../outline-element/outline-element';
export const alertSizes = ['small', 'large'] as const;
export type AlertSize = typeof alertSizes[number];
export const alertSpan = ['float', 'full'] as const;
export type AlertSpan = typeof alertSpan[number];

export const alertStatusTypes = [
  'notice',
  'warning',
  'error',
  'success',
] as const;

export type AlertStatusType = typeof alertStatusTypes[number];

// This can be useful for testing.
export interface OutlineAlertInterface extends HTMLElement {
  isOpen: boolean;
  statusType: AlertStatusType;
  spanType: AlertSpan;
  size: AlertSize;
  isInteractive: boolean;
  shouldShowIcon: boolean;
  close: () => void;
}

/**
 * The alert nub.
 *
 * @element nub-alert
 * @slot default - The alert contents
 * @slot nub-alert--header - The header in the alert
 * @slot nub-alert--link - The link in the alert
 */
@customElement('nub-alert')
export class NubAlert extends OutlineElement implements OutlineAlertInterface {
  static styles: CSSResultGroup = [componentStyles];

  @property({ type: String })
  statusType: AlertStatusType = 'notice';

  @property({ type: String })
  spanType: AlertSpan = 'full';

  @property({ attribute: false })
  isOpen = false;

  /**
   * This is important context for screen readers.
   */
  @property({ type: Boolean })
  isInteractive = false;

  @property({ type: Boolean })
  shouldShowIcon = true;

  @property({ type: String })
  size: AlertSize = 'large';

  render(): TemplateResult {
    const span = this.spanType == 'full' ? 'full' : 'float';
    // The `body` wrapper is used to avoid styles (like border) that are preventing us from styling `:host`.
    return html`
      <div
        id="body"
        class="${span}"
        role="${this.isInteractive ? 'alertdialog' : 'alert'}"
        aria-labelledby="${this.isInteractive ? 'message' : null}"
      >
        ${this.shouldShowIcon === true
          ? html`
              <span id="icon">
                <!--@todo include icon when we have that ready.-->
                ${this.staticIcon()}
              </span>
            `
          : null}

        <div class="nub-content--container">
          ${this.size === 'large'
            ? html`
                <div id="header">
                  <slot name="nub-alert--header">${this.statusType}</slot>
                </div>
              `
            : null}
          <div id="message">
            <slot></slot>
          </div>
        </div>
        <div id="alert-link" @click="${this.close}">
          <slot part="nub-link" name="nub-alert--link"></slot>
        </div>
      </div>
    `;
  }

  @query('#trigger')
  private triggerElement!: HTMLDivElement;

  async close(): Promise<void> {
    if (this.isOpen) {
      this.isOpen = false;
      await this.updateComplete;

      this.dispatchEvent(new CustomEvent('closed'));
      this.triggerElement.focus();
    }
  }

  private staticIcon() {
    let icon;
    switch (this.statusType) {
      case 'notice':
        return html`<nub-icon
          name="information-circle"
          library="ionicons"
          size="24px"
        ></nub-icon>`;
      case 'error':
        return html`<nub-icon
          name="alert"
          library="ionicons"
          size="24px"
        ></nub-icon>`;
      case 'warning':
        return html`<nub-icon
          name="warning"
          library="ionicons"
          size="24px"
        ></nub-icon>`;
      case 'success':
        return html`<nub-icon
          name="checkmark-circle"
          library="ionicons"
          size="24px"
        ></nub-icon>`;
      default:
        break;
    }
    return icon;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nub-alert': NubAlert;
  }
}

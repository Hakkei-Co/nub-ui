import { html, TemplateResult, CSSResultGroup } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import componentStyles from './outline-alert.css.lit';
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
 * The Outline Alert component
 *
 * @element outline-alert
 * @slot default - The alert contents
 * @slot outline-alert--header - The header in the alert
 */
@customElement('outline-alert')
export class OutlineAlert
  extends OutlineElement
  implements OutlineAlertInterface
{
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
        <div class="nub-content--container">
          ${this.shouldShowIcon === true
            ? html`
                <div id="icon">
                  <!--@todo include icon when we have that ready.-->
                </div>
              `
            : null}
          ${this.size === 'large'
            ? html`
                <div id="header">
                  <slot name="outline-alert--header">${this.statusType}</slot>
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
}

declare global {
  interface HTMLElementTagNameMap {
    'outline-alert': OutlineAlert;
  }
}

import { TemplateResult, html, CSSResultGroup } from 'lit';
import { NubElement } from '../nub-element/nub-element';
import { customElement } from 'lit/decorators.js';
import componentStyles from './nub-styled-text.css.lit';
import { SlotController } from '../../controllers/slot-controller';

/**
 * The Outline Styled Text component
 * @element nub-styled-text
 * @since 1.0.0
 * @slot - default slot
 */
@customElement('nub-styled-text')
export class NubStyledText extends NubElement {
  static styles: CSSResultGroup = [NubElement.styles, componentStyles];
  slots = new SlotController(
    this, // This, the host element.
    true // To shift or not to shift LightDom nodes to ShadowDOM.
  );

  render(): TemplateResult {
    return html`<slot></slot>`;
  }
}

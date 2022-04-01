import { html, TemplateResult, CSSResultGroup } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import componentStyles from './nub-swatch.css.lit';
import { NubElement } from '../nub-element/nub-element';
import { SwatchSet } from '../nub-swatch-set/nub-swatch-set';
import tailwindThemeConfig from '../../../resolved-tailwind-config';

export interface NubSwatchInterface extends HTMLElement {
  set: SwatchSet;
  color: string;
}

/**
 * Color swatch
 *
 * @element nub-swatch
 */
@customElement('nub-swatch')
export class NubSwatch extends NubElement implements NubSwatchInterface {
  //slottedController = new SlottedController(this);
  static styles: CSSResultGroup = [componentStyles];

  @property({ type: String })
  set: SwatchSet = 'nubs';

  @property({ type: String })
  color = 'blue';

  render(): TemplateResult {
    // @todo define `color` as a key of the tailwind object?
    // eslint-disable-next-line
    // @ts-ignore
    const value = tailwindThemeConfig.colors[this.set][this.color];
    const hex = getComputedStyle(document.body).getPropertyValue(
      `--${this.set}-${this.color}`
    );

    return html`
      <div id="color" style="--swatch-color: ${value}"></div>
      <div class="information">
        <span class="information--label">Color:</span>${this.color}
      </div>
      <div class="information">
        <span class="information--label">CSS Variable:</span
        ><code>${value}</code>
      </div>
      <div class="information">
        <span class="information--label">Hex Code:</span><code>${hex}</code>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nub-swatch': NubSwatch;
  }
}

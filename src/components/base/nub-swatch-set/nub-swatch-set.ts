import { html, TemplateResult, CSSResultGroup } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import componentStyles from './nub-swatch-set.css.lit';
import { NubElement } from '../nub-element/nub-element';
import tailwindThemeConfig from '../../../resolved-tailwind-config';
// const outline = require('../nub.config');
import '../nub-grid/nub-grid';
import '../nub-grid/nub-column/nub-column';
import '../nub-swatch/nub-swatch';

export const swatchSets = ['nubs', 'neutral', 'ui', 'demo'] as const;
export type SwatchSet = typeof swatchSets[number];

export interface NubSwatchSetInterface extends HTMLElement {
  set: SwatchSet;
}

/**
 * Color swatch set
 *
 * @element nub-swatch-set
 */
@customElement('nub-swatch-set')
export class NubSwatchSet extends NubElement implements NubSwatchSetInterface {
  static styles: CSSResultGroup = [componentStyles];

  @property({ type: String })
  set: SwatchSet = 'nubs';

  render(): TemplateResult {
    const colors = Object.entries(tailwindThemeConfig.colors[this.set]).map(
      ([name]) => name
    );

    return html`
      <nub-grid>
        ${colors.map(
          color => html`
            <nub-column col-span-md="6" col-span-lg="4" col-span-xl="3">
              <nub-swatch set="${this.set}" color="${color}"></nub-swatch>
            </nub-column>
          `
        )}
      </nub-grid>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nub-swatch-set': NubSwatchSet;
  }
}

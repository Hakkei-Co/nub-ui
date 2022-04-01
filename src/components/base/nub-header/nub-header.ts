import { TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { NubElement } from '../nub-element/nub-element';
import { html, unsafeStatic } from 'lit/static-html.js';
import { classMap } from 'lit/directives/class-map.js';
import {
  AllowedHeadingLevels,
  AllowedHeadingSizes,
  AllowedHeadingStyles,
} from './config';

import componentStyles from './nub-header.css.lit';

/**
 * The header nub
 * @element nub-header
 * @slot defaultSlot
 */
@customElement('nub-header')
export class NubHeader extends NubElement {
  static styles = [componentStyles];

  /**
   * The heading tag to apply: h1 | h2 | h3 | h4 | h5 | h6
   */
  @property({ type: String, reflect: true, attribute: 'level' })
  level: AllowedHeadingLevels = 'h2';

  /**
   * The heading level size to apply. Optional override to default styles for a given level
   */
  @property({ type: String, reflect: true, attribute: 'level-size' })
  levelSize: AllowedHeadingSizes = '2xl';

  /**
   * The heading level style to apply. Optional override to default styles for a given level
   */
  @property({ type: String, reflect: true, attribute: 'level-style' })
  levelStyle: AllowedHeadingStyles = 'bold';

  render(): TemplateResult {
    const classes = {
      'nub-text': true,
      [`nub-text--${this.levelSize}`]: true,
      [`nub-font--${this.levelStyle}`]: true,
    };
    return html`
      <${unsafeStatic(this.level as string)} class=${classMap(classes)}>
        <slot></slot>
      </${unsafeStatic(this.level as string)}>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nub-header': NubHeader;
  }
}

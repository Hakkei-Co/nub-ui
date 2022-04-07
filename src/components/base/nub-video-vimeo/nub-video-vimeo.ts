import { html, TemplateResult, CSSResultGroup } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import componentStyles from './nub-video-vimeo.css.lit';
import { NubElement } from '../../base/nub-element/nub-element';

export interface OutlineVideoVimeoInterface extends HTMLElement {
  videoID: string;
}

/**
 * The Outline VideoVimeo component
 *
 * @element nub-video-vimeo
 */
@customElement('nub-video-vimeo')
export class NubVideoVimeo
  extends NubElement
  implements OutlineVideoVimeoInterface
{
  static styles: CSSResultGroup = [componentStyles];

  @property({ type: String, attribute: 'video-id', reflect: true })
  videoID: string;

  render(): TemplateResult {
    return html`
      <iframe
        src="https://player.vimeo.com/video/${this.videoID}"
        title="Vimeo video ${this.videoID}"
        frameborder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowfullscreen
      ></iframe>
      <script src="https://player.vimeo.com/api/player.js"></script>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nub-video-vimeo': NubVideoVimeo;
  }
}

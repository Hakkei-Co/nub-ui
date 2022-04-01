import { html, TemplateResult, CSSResultGroup } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import componentStyles from './outline-video-youtube.css.lit';
import { NubElement } from '../../base/nub-element/nub-element';

export interface OutlineVideoYoutubeInterface extends HTMLElement {
  videoID: string;
}

/**
 * The Outline VideoYoutube component
 *
 * @element outline-video-youtube
 */
@customElement('outline-video-youtube')
export class OutlineVideoYoutube
  extends NubElement
  implements OutlineVideoYoutubeInterface
{
  static styles: CSSResultGroup = [componentStyles];

  @property({ type: String, attribute: 'video-id', reflect: true })
  videoID: string;

  render(): TemplateResult {
    return html`
      <iframe
        src="https://www.youtube.com/embed/${this.videoID}"
        title="YouTube video ${this.videoID}"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    `;
  }
}
declare global {
  interface HTMLElementTagNameMap {
    'outline-video-youtube': OutlineVideoYoutube;
  }
}

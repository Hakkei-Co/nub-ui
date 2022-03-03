import { Component, Host, h, Element } from '@stencil/core';

@Component({
  tag: 'example-scene',
  styleUrl: 'example-scene.css',
})
export class ExampleScene {
  @Element() host: HTMLExampleSceneElement;
  connectedCallback() {
    console.log(`Custom ${this.host.nodeName} element added to page.`);
    this.host.style.zIndex = '-99';
  }
  componentWillLoad() {
    customElements.whenDefined('hakion-button').then((res) => {
      console.log('app.ts', 'hakion-dark-mode-toggle', res);
    });
    const toggle = document.querySelector('a-scene');
    toggle && toggle.setAttribute('style', 'z-index:-9999;');
    console.log('TGFG', toggle);
  }

  // (async () => {
  //   customElements.whenDefined('hakion-dark-mode-toggle').then((res) => {
  //     console.log('app.ts', 'hakion-dark-mode-toggle', res);
  //   });
  //   const toggle = document.querySelector('hakion-dark-mode-toggle');
  //   // const body = document.body;
  //   // console.log(!!toggle?.shadowRoot);
  //   if (toggle.hasAttribute('shadowRoot')) {
  //     console.log('SHADOW', toggle.shadowRoot.childNodes);
  //   }
  // })();

  render() {
    return (
      <Host>
        <a-scene embedded>
          <a-box position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9"></a-box>
          <a-sphere position="0 1.25 -5" radius="1.25" color="#EF2D5E"></a-sphere>
          <a-cylinder position="1 0.75 -3" radius="0.5" height="1.5" color="#FFC65D"></a-cylinder>
          <a-plane position="0 0 -4" rotation="-90 0 0" width="4" height="4" color="#7BC8A4"></a-plane>
          <slot></slot>
        </a-scene>
      </Host>
    );
  }
}

import { Component, Host, h, Prop, Method } from '@stencil/core';

@Component({
  tag: 'example-scene',
  styleUrl: 'example-scene.css',
  shadow: true,
})
export class ExampleScene {
  connectedCallback() {
    let toggle = document.querySelector('hakion-dark-mode-toggle');
    console.log('TOGGLE', toggle.shadowRoot.querySelector('dark-mode-toggle'));
  }
  componentWillLoad() {}

  componentDidLoad() {}

  @Prop() aBoxPosition: string;
  @Prop() aBoxScene: string;
  // @Prop() aBoxPosition: string;
  // @Prop() aBoxPosition: string;
  // @Prop() aBoxPosition: string;
  // @Prop() aBoxPosition: string;

  @Method()
  async hydrateSomething(val) {
    this.aBoxPosition = val;
  }
  @Method()
  async hydrateSomething2(val) {
    this.aBoxScene = val;
  }

  render() {
    return (
      <Host>
        <a-scene>
          <a-box position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9"></a-box>
          <a-sphere position="0 1.25 -5" radius="1.25" color="#EF2D5E"></a-sphere>
          <a-cylinder position="1 0.75 -3" radius="0.5" height="1.5" color="#FFC65D"></a-cylinder>
          <a-plane position="0 0 -4" rotation="-90 0 0" width="4" height="4" color="#7BC8A4"></a-plane>
        </a-scene>
      </Host>
    );
  }
}

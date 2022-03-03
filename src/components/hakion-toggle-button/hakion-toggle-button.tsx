import { Component, Prop, Element, State, h } from '@stencil/core';

@Component({
  tag: 'hakion-toggle-button',
  styleUrls: {
    default: 'hakion-toggle-button.css',
    dark: 'hakion-toggle-button.css',
  },
})
export class HakionToggleButton {
  @Element() root: HTMLHakionToggleButtonElement;
  @Prop() defaultPressed: boolean = false;

  @Prop() pressedText: string = 'ON';

  @Prop() unpressedText: string = 'OFF';

  @State() pressed: boolean = this.defaultPressed;

  connectedCallback() {
    console.log(`Custom ${this.root.nodeName} element added to page.`);
  }

  render() {
    return (
      <ion-button aria-pressed={this.pressed.toString()} class="button" onClick={() => (this.pressed = !this.pressed)}>
        {this.pressed ? this.pressedText : this.unpressedText}
      </ion-button>
    );
  }
}

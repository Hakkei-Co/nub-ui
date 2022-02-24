import { Component, Host, Prop, h, Listen, State } from '@stencil/core';
import '@ionic/core';

@Component({
  tag: 'hakion-button',
  styleUrl: 'hakion-button.css',
  shadow: true,
})
export class HakionButton {
  @State() open: boolean;

  @Prop() label: string = 'hakion-button';

  @Listen('click', { capture: true })
  handleClick() {
    this.open = !this.open;
  }

  render() {
    return (
      <Host>
        <div class="ion-activatable ripple-parent">
          A plain div with a bounded ripple effect
          <slot />
          <ion-ripple-effect>
            <ion-button color="primary">{this.label}</ion-button>
          </ion-ripple-effect>
        </div>
      </Host>
    );
  }
}

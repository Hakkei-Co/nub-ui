import { Component, Host, h } from '@stencil/core';
import '@ionic/core';
@Component({
  tag: 'hakion-ripple-effect',
  styleUrl: 'hakion-ripple-effect.css',
  shadow: true,
})
export class HakionRippleEffect {
  render() {
    return (
      <Host>
        <ion-app>
          <ion-content>
            <div class="ion-activatable ripple-parent">
              <ion-ripple-effect>
                <slot></slot>
              </ion-ripple-effect>
            </div>
          </ion-content>
        </ion-app>
      </Host>
    );
  }
}

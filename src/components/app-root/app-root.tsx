/* eslint-disable @stencil/required-jsdoc */
import { Component, Element, h, Host, Prop, State } from '@stencil/core';
// import { updateStyle } from '../../utils/utils';

enum INPUT_STATE {
  DISABLED = 'OFF',
  DEFAULT = 'ON',
}
@Component({
  tag: 'app-root',
  styleUrls: {
    default: 'app-root.css',
    dark: 'app-root-dark.css',
  },
})
export class AppRoot {
  @Element() host: HTMLAppRootElement | undefined;
  @State() ready: boolean = false;
  @Prop() inputState: INPUT_STATE;

  // Set the legend to "Dark Mode"
  @Prop() legend: string = 'Dark Mode';

  // Set the light label to "off"
  @Prop() light: 'on' | 'off' = 'on';

  // Set the dark label to "on"
  @Prop() dark: 'on' | 'off' = 'off';

  connectedCallback() {
    console.log(`Custom ${this.host.nodeName} element added to page.`);
  }

  componentWillLoad() {
    customElements.whenDefined('hakion-dark-mode-toggle').then((res) => {
      console.log('componentWillLoad', 'dark-mode-toggle', res);
    });
    const buttons = document.querySelectorAll('hakion-button');
    for (const button in buttons) {
      console.log(button);
    }
  }

  render() {
    return (
      <Host>
        <hakion-button iconSlot="icon-only" iconName="star">
          Button inside of app-root will fetch icon
        </hakion-button>
        <hakion-button iconSlot="icon-only" iconName="star">
          Button inside of app-root will fetch icon
        </hakion-button>
        <slot></slot>
      </Host>
    );
  }
}

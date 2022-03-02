/* eslint-disable @stencil/required-jsdoc */
import { Component, Element, h, Host, Method, Prop, State, Watch } from '@stencil/core';

enum INPUT_STATE {
  DISABLED = 'OFF',
  DEFAULT = 'ON',
}
@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
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
    let toggle = document.querySelector('example-scene');
    let body = document.body;

    toggle.append(toggle.firstChild);
    console.log('TOGGLE', toggle.shadowRoot.querySelector('dark-mode-toggle'));
  }
  _enabled: boolean;
  _enabledOverride: boolean | null = null;

  componentWillMount() {
    let toggle = document.querySelector('example-scene');
    let body = document.body;

    toggle.append(toggle.firstChild);
    body.append(toggle);
    console.log('TOGGLE', toggle.shadowRoot.querySelector('dark-mode-toggle'));
  }

  @Prop() enabled: boolean;

  @Method()
  async getEnabled() {
    return this._enabledOverride == null ? this._getDefaultEnabled() : this._enabledOverride;
  }

  @Method()
  async _getDefaultEnabled(): Promise<string> {
    return this.legend;
  }

  @Method()
  async setDarkModeLegend(str: string): Promise<void> {
    this.legend = str;
  }

  @Watch('inputState')
  handleInputStateChange() {}

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}

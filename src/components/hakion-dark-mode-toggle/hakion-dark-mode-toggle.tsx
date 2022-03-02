/* eslint-disable @stencil/required-jsdoc */
import { Component, Element, h, Host, Method, Prop, State } from '@stencil/core';

@Component({
  tag: 'hakion-dark-mode-toggle',
  styleUrl: 'hakion-dark-mode-toggle.css',
  shadow: true,
})
export class HakionDarkModeToggle {
  @Element() host: HTMLHakionDarkModeToggleElement | undefined;
  @State() ready: boolean = false;
  timer: number;
  @State() time: number = Date.now();

  // Set the legend to "Dark Mode"
  @Prop({ mutable: true }) legend: string = 'Dark Mode';

  // Set the light label to "off"
  @Prop({ mutable: true }) light: 'on' | 'off' = 'on';

  // Set the dark label to "on"
  @Prop({ mutable: true }) dark: 'on' | 'off' = 'off';

  // Set the appearnace toggle or switch
  @Prop({ mutable: true }) appearance: 'toggle' | 'switch' = 'switch';
  connectedCallback() {
    this.timer = window.setInterval(() => {
      if (this.host.hasAttribute('mode')) {
        console.log('hakion-dark-mode-toggle', this.host);
        this.host.append(this.host.firstElementChild);
      }
      this.time = Date.now();
    }, 1000);
  }

  disconnectedCallback() {
    window.clearInterval(this.timer);
  }

  @Prop() enabled: boolean;

  @Method()
  async setDarkModeLegend(str: string): Promise<void> {
    this.legend = str;
  }

  @Method()
  async setAppearance(str: 'toggle' | 'switch' = 'toggle'): Promise<void> {
    this.appearance = str;
  }

  render() {
    return (
      <Host>
        <dark-mode-toggle appearance={this.appearance} legend={this.legend}></dark-mode-toggle>
      </Host>
    );
  }
}

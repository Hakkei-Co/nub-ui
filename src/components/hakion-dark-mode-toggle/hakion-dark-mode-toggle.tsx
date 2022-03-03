/* eslint-disable @stencil/required-jsdoc */
import { Component, Element, h, Host, Method, Prop, State } from '@stencil/core';

type ToggleOtions = {
  dark: string;
  light: string;
};

@Component({
  tag: 'hakion-dark-mode-toggle',
  styleUrl: 'hakion-dark-mode-toggle.css',
  shadow: true,
})
export class HakionDarkModeToggle {
  @Element() host: HTMLHakionDarkModeToggleElement | undefined;
  @State() ready: boolean = false;
  timer: number;

  @Prop() defaultPressed = false;
  @Prop() unactive: string = 'OFF';

  @State() active: string = 'ON';
  /**
   * Any string value that represents the label for the "light" and "dark" mode.
   */
  @State() label: ToggleOtions = {
    dark: 'dark',
    light: 'light',
  };

  @State() pressed: boolean;

  @Method()
  async handlePressEvent(e: MouseEvent) {
    console.log(e);
  }

  // Set the legend to "Dark Mode"
  @Prop({ mutable: true }) legend: string = 'Dark Mode';

  // Set the light label to "off"
  @Prop({ mutable: true }) light: 'on' | 'off' = 'on';

  // Set the dark label to "on"
  @Prop({ mutable: true }) dark: 'on' | 'off' = 'off';

  // Set the appearnace toggle or switch
  @Prop({ mutable: true }) appearance: 'toggle' | 'switch' = 'switch';

  connectedCallback() {
    console.log(`Custom ${this.host.nodeName} element added to page.`);
  }

  componentWillLoad() {
    customElements.whenDefined('dark-mode-toggle').then((res) => {
      console.log(`${this.host.nodeName} componentWillLoad`, res);
    });
  }

  componentDidLoad() {
    customElements.whenDefined('dark-mode-toggle').then((res) => {
      console.log('dark-mode-toggle', res);
    });
    this.host.innerHTML = `<style>::slotted(span){background:gold}</style>
                               <dark-mode-toggle legend="switch" light="on" dark="off"></dark-mode-toggle>`;
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
  //  appearance={this.appearance} legend={this.legend}
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}

// doc.addEventListener('permanentcolorscheme', (e) => {
//   const permanent = e.detail.permanent;
//   console.log(
//     `${permanent ? 'R' : 'Not r'}emembering the last selected mode.`);
// });

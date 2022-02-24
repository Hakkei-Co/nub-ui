import { Component, Host, h } from '@stencil/core';
import * as DarkModeToggle from 'dark-mode-toggle';

@Component({
  tag: 'hakion-dark-mode-toggle',
  styleUrl: 'hakion-dark-mode-toggle.css',
  shadow: true,
})
export class HakionDarkModeToggle {
  render() {
    return (
      <Host>
        <dark-mode-toggle
          id="dark-mode-toggle-1"
          legend="Theme Switcher"
          appearance="switch"
          dark="Dark"
          light="Light"
          remember="Remember this"
        ><slot/></dark-mode-toggle>
      </Host>
    );
  }
}

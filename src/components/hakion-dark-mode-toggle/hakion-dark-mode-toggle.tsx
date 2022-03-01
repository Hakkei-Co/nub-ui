/* eslint-disable @stencil/required-jsdoc */
import { Component, Element, h, Host, State } from '@stencil/core';

@Component({
  tag: 'hakion-dark-mode-toggle',
  styleUrl: 'hakion-dark-mode-toggle.css',
  shadow: true,
})
export class HakionDarkModeToggle {
  @Element() host: HTMLHakionDarkModeToggleElement | undefined;
  @State() ready: boolean = false;
  connectedCallback() {

  }

  componentWillLoad() {
    this.ready = true;
  }

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'app-detail',
  styleUrl: 'app-detail.css',
  shadow: true,
})
export class AppDetail {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}

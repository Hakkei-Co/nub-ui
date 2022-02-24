import { Component, Prop, h } from '@stencil/core';
// import { format } from '../../utils/utils';

@Component({
  tag: 'my-alert',
  styleUrl: 'my-alert.css',
  shadow: true,
})
export class MyAlert {
  /**
   * The first name
   */
  @Prop() text: string = 'This is an important alert!';

  render() {
    return <p>Hello, World! I'm {this.text}</p>;
  }
}

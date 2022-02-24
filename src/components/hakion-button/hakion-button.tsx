import { Component, Element, Event, EventEmitter, Prop, h, Listen, State } from '@stencil/core';
import '@ionic/core';

export interface AcknowledgeEvent {
  when: Date;
}

@Component({
  tag: 'hakion-button',
  styleUrl: 'hakion-button.css',
  shadow: true,
})
export class HakionButton {
  @State() open: boolean = false;
  @Element() btn: HTMLHakionButtonElement;

   /**
   * Documentation is required
   */
  @Prop() color: 'primary' | 'secondary' | 'tertiary' | 'success' | 'warning' | 'danger' | 'light' | 'medium' | 'dark' =
    'primary';
  /**
   * Documentation is required
   */
  @Prop() text: string = 'text:Prop() in <hakion-button>';

  /**
   * Set to "block" for a full-width button or to "full" for a
   * full-width button without left and right borders.
   */
  @Prop() expand: 'block' | 'full' | 'default' = 'default';

  @State() acknowledged: boolean = false;

  /**
   * Define interface for argument type.
   * You can access Props() in detail.
   * eg: event.details.when
   */
  @Event() acknowledge: EventEmitter<AcknowledgeEvent>;

  /**
   * Event is dispatched during "capture" phase
   */
  @Listen('click', { capture: true })
  handleClick() {
    this.acknowledged = !this.acknowledged;
    this.acknowledge.emit({ when: new Date() });
  }

  render() {
    return <ion-button color={this.color} expand={this.expand}>{this.acknowledged ? this.text : 'Click!'}</ion-button>;
  }
}

import { Component, Element, Event, EventEmitter, Prop, h, Listen, State, Host } from '@stencil/core';
import { Color, Expand, Fill } from '../../interface';

export interface AcknowledgeEvent {
  when: Date;
}

@Component({
  tag: 'hakion-button',
  styleUrl: 'hakion-button.css',
  shadow: false,
})
export class HakionButton {
  @State() open: boolean = false;
  @Element() btn: HTMLHakionButtonElement;
  /**
   * Documentation is required
   */
  @Prop() color: Color = 'primary';

  /**
   * Documentation is required
   */
  @Prop() text: string = 'text:Prop() in <hakion-button>';

  /**
   * Set to "block" for a full-width button or to "full" for a
   * full-width button without left and right borders.
   */
  @Prop() expand: Expand = 'block';

  // eslint-disable-next-line @stencil/required-jsdoc
  @Prop() fill: Fill = 'solid';

  @State() acknowledged: boolean = false;

  /**
   * Define interface for argument type.
   * You can access Props() in detail.
   * eg: event.details.when
   */
  @Event() acknowledge: EventEmitter<AcknowledgeEvent>;

  /**
   * Called every time the component is connected to the DOM.
   * When the component is first connected, this method is called before componentWillLoad.
   */
  connectedCallback() {
    console.log(this.color, this.expand);
  }

  /**
   * Event is dispatched during "capture" phase
   */
  @Listen('click', { capture: true })
  handleClick() {
    this.acknowledged = !this.acknowledged;
    this.acknowledge.emit({ when: new Date() });
  }

  render() {
    return (
      <Host>
        <ion-button expand={this.expand} fill={this.fill} color={this.color}>
          <ion-text>{this.acknowledged ? this.text : 'Click!'}</ion-text>
        </ion-button>
      </Host>
    );
  }
}

/* eslint-disable @stencil/required-jsdoc */
import { Component, Element, Event, EventEmitter, Prop, h, Listen, State, Host, Method } from '@stencil/core';
import { Color, Expand, Fill, Mode } from '../../interface';

interface AcknowledgeEvent {
  when: Date;
}

export type IonButtonType = 'button' | 'reset' | 'submit' | string;
export type IonIconSlot = 'end' | 'icon-only' | 'start' | ``;
export type IonIconVariant = 'outline' | 'filled' | 'sharp' | ``;

@Component({
  tag: 'hakion-button',
  styleUrls: {
    default: 'hakion-button.css',
    dark: 'hakion-button-dark.css',
  },
})
export class HakionButton {
  // TEMP
  @Event()
  acknowledge: EventEmitter<AcknowledgeEvent>;

  @State() ready: boolean = false;
  @Prop() text: string | undefined;

  /**
   * The @Element() decorator is how to get access to the host element within the class instance. \
   * This returns an instance of an HTMLElement, so standard DOM methods/events can be used here.
   */
  @Element()
  host: HTMLHakionButtonElement | undefined;

  /**
   * The type of the button.
   */

  @Prop() type: IonButtonType | undefined;

  /**
   * The color to use from your application's color palette.
   * Default options are: "primary", "secondary", "tertiary", "success",
   * "warning", "danger", "light", "medium", and "dark".
   */

  @Prop() color: Color = 'primary';

  /**
   * The color to use for the text if the attribute `text` is set.
   * Will not affect anything between <slot>
   */

  @Prop() textColor: Color = undefined;

  /**
   * The mode determines which platform styles to use.
   */

  @Prop() mode: Mode = 'ios';

  /**
   * This attribute lets you specify how wide the button should be.
   * By default, buttons are inline blocks, but setting this attribute will change the button to a full-width block element.
   */

  @Prop() expand: Expand = 'inline-block';

  /**
   * Set to "clear" for a transparent button, to "outline" for a transparent
   * button with a border, or to "solid". The default style is "solid" except inside of
   */

  @Prop() fill: Fill = 'solid';

  /**
   * This attribute instructs browsers to download a URL instead of navigating to it, so the user will be prompted to save it as a local file. If the attribute
   * has a value, it is used as the pre-filled file name in the Save prompt (the user can still change the file name if they want).
   */

  @Prop({ reflect: true }) download: string | undefined;

  /**
   * If this property is set, an anchor tag will be rendered.
   */

  @Prop({ reflect: true })
  href: string | undefined;

  /**
   * If this property is set, an anchor tag will be rendered.
   * If set to "icon-only," all other content will be ignored.
   */

  @Prop()
  iconSlot: IonIconSlot = '';

  /**
   * If this property is set, an anchor tag will be rendered.
   * If set to "icon-only," all other content will be ignored.
   */
  @Prop({ mutable: true }) iconName: string | undefined;

  /**
   * If this property is set, an anchor tag will be rendered.
   * If set to "icon-only," all other content will be ignored.
   */

  @Prop() iconVariant: IonIconVariant = ``;

  /**
   * Use custom icon by specifying a path. If set, any value set on `ionIcon` will be ignored.
   */

  @Prop() iconSrc: string | undefined;

  /**
   * Use custom icon by specifying a path. If set, any value set on `ionIcon` will be ignored.
   */
  @Prop() iconSize: 'small' | 'large' | undefined;

  /**
   * If true, the user cannot interact with the button.
   */

  @Prop({ reflect: true }) disabled: boolean = false;

  /**
   * The button shape.
   */
  @Prop() shape: string | undefined;

  /**
   * If true, activates a button with a heavier font weight.
   */
  @Prop({ reflect: true }) strong: boolean = false;

  /**
   * Specifies the relationship of the target object to the link object.
   * The value is a space-separated list of link types.
   */
  @Prop({ reflect: true }) rel: string | undefined;

  @Method()
  async setIconName(iconName: string): Promise<void> {
    this.iconName = iconName;
  }

  /**
   * Event is dispatched during "capture" phase
   */
  @Listen('click', { capture: true })
  handleClick() {
    console.info('click-event');
  }
  connectedCallback() {
    console.log(`Custom ${this.host.nodeName} element added to page.`);
    console.log('available props', this.iconName, this.iconSize, this.iconSlot, this.color);
  }

  componentWillLoad() {
    console.log(customElements);
    customElements.whenDefined('ion-icon').then((res) => {
      console.log('hakion-button:componentWillLoad', this.host);
    });
    const icons = this.host.querySelectorAll('ion-icon');
    console.log(icons);
    this.setIconName(this.iconName).then((res) => {
      console.log(`${this.host.nodeName} componentWillLoad after setIconName`, res);
    });
  }
  componentDidLoad() {
    console.log(`Custom ${this.host.nodeName} element loaded.`);
    if (this.iconName) {
      this.setIconName(this.iconName).then((res) => {
        console.log(`${this.host.nodeName} componentDidLoad after setIconName`, res);
      });
    }
  }

  render() {
    return (
      <Host>
        <ion-button
          part="ui"
          mode={this.mode}
          strong={this.strong}
          button-type={this.type}
          href={this.href}
          rel={this.rel}
          expand={this.expand}
          fill={this.fill}
          color={this.color}
          disabled={this.disabled}
          shape={this.shape}
        >
          {this.iconSlot === 'start' && this.iconName && (
            <ion-icon
              size={this.iconSize}
              slot={this.iconSlot}
              name={String(this.iconName)}
              src={this.iconSrc}
            ></ion-icon>
          )}
          <slot name="start"></slot>
          {this.iconSlot !== 'icon-only' && <ion-text color={this.textColor}>{this.text}</ion-text>}
          <ion-icon size={this.iconSize} slot={this.iconSlot} name={this.iconName} src={this.iconSrc}></ion-icon>
          {this.iconSlot !== 'icon-only' && (
            <ion-text part="ui__ion-text" size={this.iconSize} slot={this.iconSlot} color={this.textColor}>
              <slot></slot>
            </ion-text>
          )}
          {this.iconSlot === 'end' && this.iconName && (
            <ion-icon
              part="button-icon"
              size={this.iconSize}
              slot={this.iconSlot}
              name={this.iconName}
              src={this.iconSrc}
            ></ion-icon>
          )}
          <slot name="end"></slot>
        </ion-button>
      </Host>
    );
  }
}

/* eslint-disable @stencil/required-jsdoc */
import { Component, Element, Event, EventEmitter, Prop, h, Listen, State, Host, Watch } from '@stencil/core';
import { Color, Expand, Fill, Mode } from '../../interface';
import { formatPropsToConsole } from '../../utils/utils';

export interface AcknowledgeEvent {
  when: Date;
}

export type IonButtonType = 'button' | 'reset' | 'submit' | string;
export type IonIconSlot = 'end' | 'icon-only' | 'start' | ``;
export type IonIconVariant = 'outline' | 'filled' | 'sharp' | ``;

@Component({
  tag: 'hakion-button',
  styleUrl: 'hakion-button.css',
  shadow: false,
})
export class HakionButton {
  // TEMP -
  @State() open: boolean = false;
  @Prop() text: string;
  @Event() acknowledge: EventEmitter<AcknowledgeEvent>;

  @State() ready: boolean = false;
  /**
   * The @Element() decorator is how to get access to the host element within the class instance. \
   * This returns an instance of an HTMLElement, so standard DOM methods/events can be used here.
   */
  @Element() host: HTMLHakionButtonElement;

  /**
   * The type of the button.
   */
  @Prop() type: IonButtonType;

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
  @Prop() mode: Mode;

  /**
   * This attribute lets you specify how wide the button should be.
   * By default, buttons are inline blocks, but setting this attribute will change the button to a full-width block element.
   */
  @Prop() expand: Expand;
  @Prop() fill: Fill = 'solid';

  /**
   * This attribute instructs browsers to download a URL instead of navigating to it, so the user will be prompted to save it as a local file. If the attribute
   * has a value, it is used as the pre-filled file name in the Save prompt (the user can still change the file name if they want).
   */
  @Prop({ reflect: true }) download: string | undefined;

  /**
   * If this property is set, an anchor tag will be rendered.
   */
  @Prop({ reflect: true }) href: string;

  /**
   * If this property is set, an anchor tag will be rendered.
   * If set to "icon-only," all other content will be ignored.
   */
  @Prop() iconSlot: IonIconSlot;

  /**
   * If this property is set, an anchor tag will be rendered.
   * If set to "icon-only," all other content will be ignored.
   */
  @Prop() iconName: string;

  /**
   * If this property is set, an anchor tag will be rendered.
   * If set to "icon-only," all other content will be ignored.
   */
  @Prop() iconVariant: IonIconVariant;

  /**
   * Use custom icon by specifying a path. If set, any value set on `ionIcon` will be ignored.
   */
  @Prop() iconSrc: string;

  /**
   * Use custom icon by specifying a path. If set, any value set on `ionIcon` will be ignored.
   */
  @Prop() iconSize: 'small' | 'large' | undefined;

  /**
   * If true, the user cannot interact with the button.
   */
  @Prop({ reflect: true }) disabled: boolean;

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

  @State() textSlotElement!: HTMLIonTextElement;

  /**
   * Called every time the component is connected to the DOM.
   * When the component is first connected, this method is called before componentWillLoad.
   */
  connectedCallback() {
    var props = [
      this.color,
      this.text,
      this.type,
      this.textColor,
      this.expand,
      this.fill,
      this.download,
      this.iconSlot,
      this.iconVariant,
      this.iconSize,
      this.disabled,
      this.shape,
      this.strong,
      this.rel,
    ];
    var propNames = [
      'color',
      'text',
      'type',
      'textColor',
      'expand',
      'fill',
      'download',
      'iconSlot',
      'iconVariant',
      'iconSize',
      'disabled',
      'shape',
      'strong',
      'rel',
    ];

    var arr = props.map((el, i) => {
      return formatPropsToConsole(el, propNames[i]);
    });
    console.table(arr);
  }

  componentWillLoad() {
    // Inject config in all Slotted elements
    this.host.childNodes.forEach((element) => {
      element['textColor'] = this.textColor;
    });
  }

  /**
   * Event is dispatched during "capture" phase
   */
  @Listen('click', { capture: true })
  handleClick() {
    console.info('click-event');
  }

  render() {
    return (
      <Host>
        <ion-button
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
          {this.iconSlot === 'start' && (
            <ion-icon size={this.iconSize} slot={this.iconSlot} name={this.iconName} src={this.iconSrc}></ion-icon>
          )}
          {this.iconSlot !== 'icon-only' && <ion-text color={this.textColor}>{this.text}</ion-text>}
          <ion-text
            size={this.iconSize}
            ref={(el) => (this.textSlotElement = el as HTMLIonTextElement)}
            slot={this.iconSlot}
            color={this.textColor}
          >
            <slot></slot>
          </ion-text>
          {this.iconSlot === 'end' && (
            <ion-icon size={this.iconSize} slot={this.iconSlot} name={this.iconName} src={this.iconSrc}></ion-icon>
          )}
        </ion-button>
      </Host>
    );
  }
}

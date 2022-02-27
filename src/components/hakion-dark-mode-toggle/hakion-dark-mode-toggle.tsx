/* eslint-disable @stencil/required-jsdoc */
import { Component, Element, Listen, State, h, Prop, Watch } from '@stencil/core';
import 'dark-mode-toggle';

@Component({
  tag: 'hakion-dark-mode-toggle',
  styleUrl: 'hakion-dark-mode-toggle.css',
  shadow: true,
})
export class HakionDarkModeToggle {
  // eslint-disable-next-line @stencil/own-props-must-be-private
  timer: number;
  @Prop() mode: string = 'dark';

  @State() busy: boolean;

  @Element() el: HTMLHakionDarkModeToggleElement;

  componentWillLoad() {
    // this.el.shadowRoot.addEventListener('load', () => {
    //   console.log('LOAD');
    // });
  }

  /**
   * Watch will fire the method it's attached to when a user updates a property, or when an internal state member changes.
   * That method will receive the new value of the prop/state, along with the old value.
   * Watch is useful for validation or the handling of side effects.
   * The Watch decorator does not fire when a component initially loads.
   * @param newValue
   * @param oldValue
   */
  @Watch('mode')
  watchPropHandler(newValue: boolean, oldValue: boolean) {
    console.log('The new value of activated is: ', newValue, oldValue);
  }

  @Watch('busy')
  watchStateHandler(newValue: boolean, _oldValue: boolean) {
    console.log('The new value of busy is: ', newValue);
  }

  @State() time: number = Date.now();

  @Listen('colorschemechange')
  colorSchemeChange(ev) {
    console.log('colorschemechange', ev);
  }
  /**
   * Called every time the component is connected to the DOM.
   * When the component is first connected, this method is called before componentWillLoad.
   */
  connectedCallback() {
    console.log('connectedCallback', this.time);
    this.timer = window.setInterval(() => {
      this.time = Date.now();
    }, 1000);
  }

  /**
   * Called every time the component is disconnected from the DOM, ie, it can be
   * dispatched more than once, DO not confuse with a "onDestroy" kind of event.
   */
  disconnectedCallback() {
    window.clearInterval(this.timer);
    console.log('disconnectedCallback', this.time);
  }

  render() {
    return (
        <dark-mode-toggle
          id="dark-mode-toggle-1"
          legend="Theme Switcher"
          appearance="switch"
          dark="Dark"
          light="Light"
          remember="Remember this"
        ><slot></slot></dark-mode-toggle>
    );
  }
}

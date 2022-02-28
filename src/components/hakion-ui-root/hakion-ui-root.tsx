import { Component, Host, h, Listen, State } from '@stencil/core';

@Component({
  tag: 'hakion-ui-root',
  styleUrl: 'hakion-ui-root.css',
})
export class AppRoot {
  @State() show: boolean = false;

  @Listen('click', { capture: true })
  private handleMouseEnter() {
    console.log('root-click', this.show);
    this.show = !this.show;
  }
  render() {
    return (
      <Host>
        <main>
          <h4>{!this.show ? '.......' : 'Boo!'}</h4>
          <three-element-example></three-element-example>
          <hakion-button iconSlot="end" text="text" iconName="star" textColor="dark">
            slot
          </hakion-button>
          <hakion-button
            mode="ios"
            iconSlot="start"
            shape="round"
            iconName="heart"
            color="success"
            textColor="secondary"
          >
            <p>Hello World</p>
          </hakion-button>
          {/* Why does this break?
            <dark-mode-toggle></dark-mode-toggle>
            */}
          <ion-list inset={true} onClick={this.handleMouseEnter}>
            <ion-list-header>Basic</ion-list-header>
            <ion-accordion-group>
              <ion-accordion value="colors">
                <ion-item slot="header" color="primary">
                  <ion-label>Colors</ion-label>
                  <hakion-button>hello world</hakion-button>
                </ion-item>
                <ion-list slot="content">
                  <ion-item>
                    <ion-label>Red</ion-label>
                  </ion-item>
                  <ion-item>
                    <ion-label>Green</ion-label>
                  </ion-item>
                  <ion-item>
                    <ion-label>Blue</ion-label>
                  </ion-item>
                </ion-list>
              </ion-accordion>
              <ion-accordion value="shapes">
                <ion-item slot="header" color="success">
                  <ion-label>Shapes</ion-label>
                </ion-item>
                <ion-list slot="content">
                  <ion-item>
                    <ion-label>Circle</ion-label>
                  </ion-item>
                  <ion-item>
                    <ion-label>Triangle</ion-label>
                  </ion-item>
                  <ion-item>
                    <ion-label>Square</ion-label>
                  </ion-item>
                </ion-list>
              </ion-accordion>
              <ion-accordion value="numbers">
                <ion-item slot="header" color="danger">
                  <ion-label>Numbers</ion-label>
                </ion-item>
                <ion-list slot="content">
                  <ion-item>
                    <ion-label>1</ion-label>
                  </ion-item>
                  <ion-item>
                    <ion-label>2</ion-label>
                  </ion-item>
                  <ion-item>
                    <ion-label>3</ion-label>
                  </ion-item>
                </ion-list>
              </ion-accordion>
            </ion-accordion-group>
          </ion-list>
          <slot></slot>
        </main>
      </Host>
    );
  }
}

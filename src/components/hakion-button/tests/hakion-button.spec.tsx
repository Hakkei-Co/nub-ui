import { newSpecPage } from '@stencil/core/testing';
import { HakionButton } from '../hakion-button';

describe('hakion-button', () => {
  it('renders', async () => {
    const greeting = 'Hello World';

    const page = await newSpecPage({
      components: [HakionButton],
      html: `<hakion-button color="primary">${greeting}</hakion-button>`,
    });

    expect(page.root).toEqualHtml(`
    <hakion-button color="primary">
      <ion-button color="primary" expand="inline-block" fill="solid" mode="ios" part="button">
        <ion-text></ion-text>
          <ion-icon slot=""></ion-icon>
        <ion-text part="button-text" slot="">
          Hello World
        </ion-text>
        </mock:shadow-root>
      </ion-button>
      </hakion-button>`);
  });
});

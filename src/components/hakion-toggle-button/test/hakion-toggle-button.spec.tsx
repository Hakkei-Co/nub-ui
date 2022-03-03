import { newSpecPage } from '@stencil/core/testing';
import { HakionToggleButton } from '../hakion-toggle-button';

describe('hakion-toggle-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [HakionToggleButton],
      html: `<hakion-toggle-button></hakion-toggle-button>`,
    });
    expect(page.root).toEqualHtml(`
      <hakion-toggle-button>
       <ion-button aria-pressed="false" class="button">
        OFF
        </ion-button>
      </hakion-toggle-button>
    `);
  });
});

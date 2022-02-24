import { newSpecPage } from '@stencil/core/testing';
import { HakionButton } from '../hakion-button';

describe('hakion-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [HakionButton],
      html: `<hakion-button></hakion-button>`,
    });
    expect(page.root).toEqualHtml(`
      <hakion-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </hakion-button>
    `);
  });
});

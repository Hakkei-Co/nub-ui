import { newSpecPage } from '@stencil/core/testing';
import { HakionUiRoot } from '../hakion-ui-root';

describe('hakion-ui-root', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [HakionUiRoot],
      html: `<hakion-ui-root></hakion-ui-root>`,
    });
    expect(page.root).toEqualHtml(`
      <hakion-ui-root>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </hakion-ui-root>
    `);
  });
});

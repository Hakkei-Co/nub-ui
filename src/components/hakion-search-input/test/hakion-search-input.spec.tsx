import { newSpecPage } from '@stencil/core/testing';
import { HakionSearchInput } from '../hakion-search-input';

describe('hakion-search-input', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [HakionSearchInput],
      html: `<hakion-search-input></hakion-search-input>`,
    });
    expect(page.root).toEqualHtml(`
      <hakion-search-input>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </hakion-search-input>
    `);
  });
});

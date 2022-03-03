import { newSpecPage } from '@stencil/core/testing';
import { HakionSearchInput } from '../hakion-search-input';

describe('hakion-search-input', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [HakionSearchInput],
      html: `<hakion-search-input></hakion-search-input>`,
    });
    expect(page.root).toEqualHtml(`
      <hakion-search-input id="algolia-search">
       <mock:shadow-root>
        <div class="form-group">
          <input aria-label="Search" autocomplete="off" name="search" placeholder="Search" required="" type="search" value=""/>
            <slot></slot>
          </div>
        </mock:shadow-root>
      </hakion-search-input>
    `);
  });
});

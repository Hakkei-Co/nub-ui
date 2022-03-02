import { newSpecPage } from '@stencil/core/testing';
import { AppDetail } from '../app-detail';

describe('app-detail', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AppDetail],
      html: `<app-detail></app-detail>`,
    });
    expect(page.root).toEqualHtml(`
      <app-detail>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </app-detail>
    `);
  });
});

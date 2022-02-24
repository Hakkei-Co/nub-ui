import { newSpecPage } from '@stencil/core/testing';
import { HakionRippleEffect } from '../hakion-ripple-effect';

describe('hakion-ripple-effect', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [HakionRippleEffect],
      html: `<hakion-ripple-effect></hakion-ripple-effect>`,
    });
    expect(page.root).toEqualHtml(`
      <hakion-ripple-effect>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </hakion-ripple-effect>
    `);
  });
});

import { newSpecPage } from '@stencil/core/testing';
import { HakionDarkModeToggle } from '../hakion-dark-mode-toggle';

describe('hakion-dark-mode-toggle', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [HakionDarkModeToggle],
      html: `<hakion-dark-mode-toggle></hakion-dark-mode-toggle>`,
    });
    expect(page.root).toEqualHtml(`
      <hakion-dark-mode-toggle>
         <mock:shadow-root>
          <slot></slot>
          </mock:shadow-root>
        <style>
              ::slotted(span){background:gold}
        </style>
        <dark-mode-toggle dark="off" legend="switch" light="on"></dark-mode-toggle>
      </hakion-dark-mode-toggle>
    `);
  });
});

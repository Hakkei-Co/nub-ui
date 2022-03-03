import { newSpecPage } from '@stencil/core/testing';
import { HakionDarkModeToggle } from '../hakion-dark-mode-toggle';

describe('hakion-dark-mode-toggle', () => {
  it('renders', async () => {
    const mock = 'Plain Text';
    const page = await newSpecPage({
      components: [HakionDarkModeToggle],
      html: `<hakion-dark-mode-toggle>${mock}</hakion-dark-mode-toggle>`,
    });
    expect(page.root).toEqualHtml(`
      <hakion-dark-mode-toggle>
        <dark-mode-toggle appearance="switch" legend="Dark Mode">
          Plain Text
        </dark-mode-toggle>
      </hakion-dark-mode-toggle>
    `);
  });
});

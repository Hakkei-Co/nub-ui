import { newE2EPage } from '@stencil/core/testing';

describe('hakion-dark-mode-toggle', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<hakion-dark-mode-toggle></hakion-dark-mode-toggle>');

    const element = await page.find('hakion-dark-mode-toggle');
    expect(element).toHaveClass('hydrated');
  });
});

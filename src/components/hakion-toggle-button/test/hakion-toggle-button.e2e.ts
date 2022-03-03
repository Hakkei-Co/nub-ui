import { newE2EPage } from '@stencil/core/testing';

describe('hakion-toggle-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<hakion-toggle-button></hakion-toggle-button>');

    const element = await page.find('hakion-toggle-button');
    expect(element).toHaveClass('hydrated');
  });
});

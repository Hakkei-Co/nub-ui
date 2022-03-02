import { newE2EPage } from '@stencil/core/testing';

describe('hakion-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<hakion-button></hakion-button>');

    const element = await page.find('hakion-button');
    expect(element).toHaveClass('hydrated');
  });
});

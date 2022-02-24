import { newE2EPage } from '@stencil/core/testing';

describe('hakion-ripple-effect', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<hakion-ripple-effect></hakion-ripple-effect>');

    const element = await page.find('hakion-ripple-effect');
    expect(element).toHaveClass('hydrated');
  });
});

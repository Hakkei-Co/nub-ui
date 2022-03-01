import { newE2EPage } from '@stencil/core/testing';

describe('hakion-search-input', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<hakion-search-input></hakion-search-input>');

    const element = await page.find('hakion-search-input');
    expect(element).toHaveClass('hydrated');
  });
});

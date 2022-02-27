import { newE2EPage } from '@stencil/core/testing';

describe('hakion-ui-root', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<hakion-ui-root></hakion-ui-root>');

    const element = await page.find('hakion-ui-root');
    expect(element).toHaveClass('hydrated');
  });
});

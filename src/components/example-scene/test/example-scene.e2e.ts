import { newE2EPage } from '@stencil/core/testing';

describe('example-scene', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<example-scene></example-scene>');

    const element = await page.find('example-scene');
    expect(element).toHaveClass('hydrated');
  });
});

import { newE2EPage } from '@stencil/core/testing';

describe('three-element-example', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<three-element-example></three-element-example>');

    const element = await page.find('three-element-example');
    expect(element).toHaveClass('hydrated');
  });
});

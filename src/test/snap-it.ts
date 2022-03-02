import { newE2EPage } from '@stencil/core/testing';

export default (name: any) => (testName: string, html: string) =>
  test(testName, async () => {
    const page = await newE2EPage();
    await page.setContent(html);
    const element = await page.find(`blaze-${name}`);

    await page.waitForChanges();

    expect(element.outerHTML).toMatchSnapshot();
  });
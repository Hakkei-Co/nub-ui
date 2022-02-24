import { newSpecPage } from '@stencil/core/testing';
import { ThreeElementExample } from '../three-element-example';

describe('three-element-example', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ThreeElementExample],
      html: `<three-element-example></three-element-example>`,
    });
    expect(page.root).toEqualHtml(`
      <three-element-example>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </three-element-example>
    `);
  });
});

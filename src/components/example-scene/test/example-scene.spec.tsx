import { newSpecPage } from '@stencil/core/testing';
import { ExampleScene } from '../example-scene';

describe('example-scene', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ExampleScene],
      html: `<example-scene></example-scene>`,
    });
    expect(page.root).toEqualHtml(`
      <example-scene>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </example-scene>
    `);
  });
});

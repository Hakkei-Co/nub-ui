import { NubColumn } from '../nub-column';
import { assert, fixture, html } from '@open-wc/testing';

describe('nub-column', () => {
  it('is defined', () => {
    const el = document.createElement('nub-column');
    assert.instanceOf(el, NubColumn);
  });

  it('renders with default values', async () => {
    const el = await fixture(html`<nub-column></nub-column>`);
    assert.shadowDom.equal(
      el,
      `
      <slot>
      </slot>
    `
    );
  });

  it('renders slotted content', async () => {
    const el = await fixture(
      html`<nub-column><p>Testing column</p></nub-column>`
    );
    assert.lightDom.equal(
      el,
      `
      <p>
        Testing column
      </p>
      `
    );
  });
});

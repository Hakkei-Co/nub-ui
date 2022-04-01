import { NubContainer } from '../nub-container';
import { assert, fixture, html } from '@open-wc/testing';

describe('nub-container', () => {
  it('is defined', () => {
    const el = document.createElement('nub-container');
    assert.instanceOf(el, NubContainer);
  });

  it('renders with default values', async () => {
    const el = await fixture(html`<nub-container></nub-container>`);
    assert.shadowDom.equal(
      el,
      `
      <slot>
      </slot>
    `
    );
  });

  it('renders with named slotted content', async () => {
    const el = await fixture(
      html`<nub-container><p>Testing the container</p></nub-container>`
    );
    assert.lightDom.equal(
      el,
      `
      <p>
        Testing the container
      </p>`
    );
  });
});

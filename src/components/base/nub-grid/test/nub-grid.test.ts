import { NubGrid } from '../nub-grid';
import { assert, fixture } from '@open-wc/testing';
import { html } from 'lit/static-html.js';

describe('nub-grid', () => {
  it('is defined', () => {
    const el = document.createElement('nub-grid');
    assert.instanceOf(el, NubGrid);
  });

  it('renders with default values', async () => {
    const el = await fixture(html`<nub-grid></nub-grid>`);
    assert.shadowDom.equal(
      el,
      `
      <nub-container container-align="center">
        <slot>
        </slot>
      </nub-container>
    `
    );
  });

  it('renders slotted content', async () => {
    const el = await fixture(
      html`<nub-grid><p>Testing the Grid</p></nub-grid>`
    );
    assert.lightDom.equal(
      el,
      `
      <p>
        Testing the Grid
      </p>`
    );
  });
});

import { NubCard } from '../nub-card';
import { assert, fixture, html } from '@open-wc/testing';

describe('nub-card', () => {
  it('is defined', () => {
    const el = document.createElement('nub-card');
    assert.instanceOf(el, NubCard);
  });

  it('renders with default values', async () => {
    const el = await fixture(html`<nub-card></nub-card>`);
    assert.shadowDom.equal(
      el,
      `
      <section class="card">
      </section>
    `
    );
  });

  it('renders with named slotted content', async () => {
    const el = await fixture(
      html`<nub-card
        ><p slot="header">Test Header</p>
        <p slot="content">Test Content</p></nub-card
      >`
    );
    assert.lightDom.equal(
      el,
      `
      <p slot="header">
        Test Header
      </p>
      <p slot="content">
        Test Content
      </p>`
    );
  });
});

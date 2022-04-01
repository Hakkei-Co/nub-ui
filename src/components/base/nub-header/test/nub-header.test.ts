import { NubHeader } from '../nub-header';
import { fixture, html, assert } from '@open-wc/testing';

describe('nub-header', () => {
  it('is defined', () => {
    const el = document.createElement('nub-header');
    assert.instanceOf(el, NubHeader);
  });

  it('renders with default values', async () => {
    const el = await fixture(html`<nub-header></nub-header>`);
    assert.shadowDom.equal(
      el,
      `
      <h2 class="nub-font--bold nub-text nub-text--2xl">
        <slot></slot>
      </h2>
    `
    );
  });

  it('renders with slotted content', async () => {
    const el = await fixture(html`<nub-header>Test</nub-header>`);
    assert.lightDom.equal(el, `Test`);
  });
});

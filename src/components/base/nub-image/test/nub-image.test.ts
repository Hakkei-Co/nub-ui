import { NubImage } from '../nub-image';
import { assert, fixture, html } from '@open-wc/testing';

describe('nub-image', () => {
  it('is defined', () => {
    const el = document.createElement('nub-image');
    assert.instanceOf(el, NubImage);
  });

  it('renders with default values', async () => {
    const el = await fixture(html`<nub-image></nub-image>`);
    assert.shadowDom.equal(
      el,
      `
      <figure><slot></slot></figure>
    `
    );
  });

  it('renders slotted content', async () => {
    const el = await fixture(
      html`<nub-image><img alt="Im an image" /></nub-image>`
    );
    assert.lightDom.equal(
      el,
      `
      <img alt='Im an image' />
      `
    );
  });

  it('renders caption slotted content', async () => {
    const el = await fixture(
      html`<nub-image
        ><img alt="Im an image" />
        <p slot="caption">Im a test caption</p></nub-image
      >`
    );
    assert.lightDom.equal(
      el,
      `
      <img alt='Im an image' />
      <p slot='caption'>Im a test caption</p>
      `
    );
  });
});

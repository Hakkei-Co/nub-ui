import { NubButton } from '../nub-button';
import { assert, fixture, html } from '@open-wc/testing';

describe('nub-button', () => {
  it('is defined', () => {
    const el = document.createElement('nub-button');
    assert.instanceOf(el, NubButton);
  });

  it('renders with default values', async () => {
    const el = await fixture(html`<nub-button></nub-button>`);
    assert.shadowDom.equal(
      el,
      `
      <button aria-disabled="false" class="btn medium primary">
        <slot></slot>
      </button>
    `
    );
  });

  it('renders with an aria-label', async () => {
    const el = await fixture(
      html`<nub-button button-label="Button label"></nub-button>`
    );
    assert.shadowDom.equal(
      el,
      `
      <button aria-disabled="false" aria-label="Button label" class="btn medium primary">
        <slot></slot>
      </button>
    `
    );
  });

  it('renders as a link', async () => {
    const el = await fixture(
      html`<nub-button
        button-url="https://hakkei-co.github.io/nub-ui/"
        button-target="_blank"
      ></nub-button>`
    );
    assert.shadowDom.equal(
      el,
      `
      <a aria-disabled="false" class="btn medium primary" href='https://hakkei-co.github.io/nub-ui/' target="_blank">
        <slot></slot>
      </a>
    `
    );
  });

  it('renders as a disabled button', async () => {
    const el = await fixture(html`<nub-button is-disabled></nub-button>`);
    assert.shadowDom.equal(
      el,
      `
      <button aria-disabled="true" class="btn medium primary">
        <slot></slot>
      </button>
    `
    );
  });

  it('renders a standard primary button variant', async () => {
    const el = await fixture(
      html`<nub-button button-variant="primary"></nub-button>`
    );
    assert.shadowDom.equal(
      el,
      `
      <button aria-disabled="false" class="btn medium primary">
        <slot></slot>
      </button>
    `
    );
  });

  it('renders a small primary button variant', async () => {
    const el = await fixture(
      html`<nub-button
        button-variant="primary"
        button-size="small"
      ></nub-button>`
    );
    assert.shadowDom.equal(
      el,
      `
      <button aria-disabled="false" class="btn small primary">
        <slot></slot>
      </button>
    `
    );
  });

  it('renders a large primary button variant', async () => {
    const el = await fixture(
      html`<nub-button
        button-variant="primary"
        button-size="large"
      ></nub-button>`
    );
    assert.shadowDom.equal(
      el,
      `
      <button aria-disabled="false" class="btn large primary">
        <slot></slot>
      </button>
    `
    );
  });

  it('renders a secondary button variant', async () => {
    const el = await fixture(
      html`<nub-button button-variant="secondary"></nub-button>`
    );
    assert.shadowDom.equal(
      el,
      `
      <button aria-disabled="false" class="btn medium secondary">
        <slot></slot>
      </button>
    `
    );
  });

  it('renders a "none" variant', async () => {
    const el = await fixture(
      html`<nub-button button-variant="none"></nub-button>`
    );
    assert.shadowDom.equal(
      el,
      `
      <button aria-disabled="false" class="btn medium none">
        <slot></slot>
      </button>
    `
    );
  });

  it('renders with slotted content', async () => {
    const el = await fixture(html`<nub-button>Test</nub-button>`);
    assert.lightDom.equal(el, `Test`);
  });
});

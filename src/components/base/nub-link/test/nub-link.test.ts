import { NubLink } from '../nub-link';
import { assert, fixture } from '@open-wc/testing';
import { html } from 'lit/static-html.js';

describe('nub-link', () => {
  it('is defined', () => {
    const el = document.createElement('nub-link');
    assert.instanceOf(el, NubLink);
  });

  it('renders with default values', async () => {
    const el = await fixture(html`<nub-link></nub-link>`);
    assert.shadowDom.equal(
      el,
      `
      <slot></slot>
    `
    );
  });

  it('renders with link-href attribute', async () => {
    const el = await fixture(
      html`<nub-link link-href="http://outline.phase2tech.com/"></nub-link>`
    );
    assert.shadowDom.equal(
      el,
      `
      <a href="http://outline.phase2tech.com/"><slot></slot></a>
    `
    );
  });

  it('renders with link-href attribute and slotted text', async () => {
    const el = await fixture(
      html`<nub-link link-href="http://outline.phase2tech.com/">link</nub-link>`
    );
    assert.shadowDom.equal(
      el,
      `
      <a href="http://outline.phase2tech.com/"><slot></slot></a>
    `
    );
    assert.lightDom.equal(el, `link`);
  });

  it('renders with link-href and link-text attributes', async () => {
    const el = await fixture(
      html`<nub-link
        link-href="http://outline.phase2tech.com/"
        link-text="link"
      ></nub-link>`
    );
    assert.shadowDom.equal(
      el,
      `
      <a href="http://outline.phase2tech.com/">link</a>
    `
    );
  });

  it('renders with fully slotted link', async () => {
    const el = await fixture(
      html`<nub-link
        ><a href="http://outline.phase2tech.com/">link</a></nub-link
      >`
    );
    assert.lightDom.equal(
      el,
      `<a href="http://outline.phase2tech.com/">link</a>`
    );
  });
});

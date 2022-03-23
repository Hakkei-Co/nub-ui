import { NubBreadcrumbs } from '../nub-breadcrumbs';
import { assert, fixture, html } from '@open-wc/testing';

describe('nub-breadcrumbs', () => {
  it('is defined', () => {
    const el = document.createElement('nub-breadcrumbs');
    assert.instanceOf(el, NubBreadcrumbs);
  });

  it('renders with default values', async () => {
    const el = await fixture(html`<nub-breadcrumbs></nub-breadcrumbs>`);
    assert.shadowDom.equal(
      el,
      `<section class="nub-breadcrumbs"><nub-container container-align="center"><slot></slot></nub-container></section>`
    );
  });
});

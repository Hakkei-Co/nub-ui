import { NubElement } from '../nub-element';
import { assert } from '@open-wc/testing';

describe('nub-element', () => {
  it('is defined', () => {
    const el = document.createElement('nub-element');
    assert.instanceOf(el, NubElement);
  });
});

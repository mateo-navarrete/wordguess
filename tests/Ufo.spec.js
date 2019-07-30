import { expect } from 'chai';
import { ufo } from '../db/ufo';

describe('ufo', () => {
  it('returns an array', () => {
    expect(ufo).to.be.a('array');
  });

  it('returns an array of strings', () => {
    ufo.forEach(el => expect(el).to.be.a('string'));
  });
});

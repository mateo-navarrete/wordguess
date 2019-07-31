import { expect } from 'chai';
import { ufo } from '../src/db/ufo';

describe('ufo', () => {
  it('should return an array', () => {
    expect(ufo).to.be.an('array');
  });

  it('should return an array of strings', () => {
    ufo.forEach(el => expect(el).to.be.a('string'));
  });
});

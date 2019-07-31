import { expect } from 'chai';
import { hashWordsByLength } from '../src/api';

describe('hashWordsByLength', () => {
  it('should be a function', () => {
    expect(hashWordsByLength).to.be.an('function');
  });

  it('should by default take an array as an argument', () => {
    expect(hashWordsByLength([])).to.not.equal(false);
    expect(hashWordsByLength()).to.not.equal(false);
    expect(hashWordsByLength({})).to.equal(false);
  });

  it('should return an object', () => {
    expect(hashWordsByLength()).to.be.an('object');
  });

  it('should have a key of map', () => {
    expect(hashWordsByLength([])).to.have.property('map');
  });
});

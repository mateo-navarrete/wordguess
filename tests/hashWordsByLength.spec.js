import { expect } from 'chai';
import { hashWordsByLength } from '../src/services';
const TEST_ARRAY = ['cat', 'dog', 'kitty', 'kitten'];

describe('hashWordsByLength', () => {
  it('should be a function', () => {
    expect(hashWordsByLength).to.be.a('function');
  });

  it('should by default take an array as an argument', () => {
    expect(hashWordsByLength()).to.not.equal(false);
    expect(hashWordsByLength([])).to.not.equal(false);
    expect(hashWordsByLength({})).to.equal(false);
  });

  it('should return an object', () => {
    expect(hashWordsByLength()).to.be.an('object');
  });

  it('should have a key of map', () => {
    expect(hashWordsByLength()).to.have.property('map');
  });

  it('should have key name suffixes equal to number of letters in the array of words', () => {
    const result = hashWordsByLength(TEST_ARRAY);
    expect(result).to.have.property('wordLength3');
    expect(result).to.not.have.property('wordLength4');
    expect(result).to.have.property('wordLength5');
    expect(result).to.have.property('wordLength6');
    expect(result).to.not.have.property('wordLength7');
    expect(hashWordsByLength()).to.not.have.property('wordLength3');
  });

  it('should have a key of map with keys equal to word lengths and values equal to number of words with relative length', () => {
    const result = hashWordsByLength(TEST_ARRAY);
    expect(result).to.have.property('map');
    expect(result)
      .to.have.property('map')
      .to.have.property('3')
      .to.equal(2);
    expect(result)
      .to.have.property('map')
      .to.have.property('3')
      .to.not.equal(3);
    expect(result)
      .to.have.property('map')
      .to.not.have.property('4');
    expect(hashWordsByLength())
      .to.have.property('map')
      .to.not.have.property('3');
  });
});

import { expect } from 'chai';
import { hashWordsByLength } from '../src/services';
const TEST_ARRAY = ['cat', 'dog', 'kitty', 'kitten'];
const TEST_RESULT = hashWordsByLength(TEST_ARRAY);

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

  it('should return an object with a property of map', () => {
    expect(hashWordsByLength()).to.have.property('map');
  });

  it('should return an object with key name suffixes equal to number of letters in the array of words', () => {
    expect(TEST_RESULT).to.have.property('wordLength3');
    expect(TEST_RESULT).to.not.have.property('wordLength4');
    expect(TEST_RESULT).to.have.property('wordLength5');
    expect(TEST_RESULT).to.have.property('wordLength6');
    expect(TEST_RESULT).to.not.have.property('wordLength7');
    expect(hashWordsByLength()).to.not.have.property('wordLength3');
  });

  it('should return an object with a property of map with keys equal to word lengths and values equal to number of words with relative length', () => {
    expect(TEST_RESULT).to.have.property('map');
    expect(TEST_RESULT)
      .to.have.property('map')
      .to.have.property('3')
      .to.equal(2);
    expect(TEST_RESULT)
      .to.have.property('map')
      .to.have.property('3')
      .to.not.equal(3);
    expect(TEST_RESULT)
      .to.have.property('map')
      .to.not.have.property('4');
    expect(hashWordsByLength())
      .to.have.property('map')
      .to.not.have.property('3');
  });
});

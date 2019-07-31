import { expect } from 'chai';
import { getRandomWord } from '../src/services';
const TEST_HASH_MAP = { 3: 2, 5: 1, 6: 1 };

describe('getRandomWord', () => {
  it('should be a function', () => {
    expect(getRandomWord).to.be.a('function');
  });

  it('should by default take an object with key value pairs as an argument', () => {
    expect(getRandomWord()).to.equal(false);
    expect(getRandomWord([])).to.equal(false);
    expect(getRandomWord({})).to.equal(false);
    expect(getRandomWord(TEST_HASH_MAP)).to.not.equal(false);
  });

  it('should return an object', () => {
    expect(getRandomWord(TEST_HASH_MAP)).to.be.an('object');
  });

  it('should return an object with keys of hash and index', () => {
    expect(getRandomWord(TEST_HASH_MAP)).to.have.property('hash');
    expect(getRandomWord(TEST_HASH_MAP)).to.have.property('index');
  });
});

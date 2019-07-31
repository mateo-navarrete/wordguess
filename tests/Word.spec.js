import { expect } from 'chai';
import Word from '../src/components/Word';
const WORD = new Word();

describe('Word', () => {
  it('should be a function', () => {
    expect(WORD.init).to.be.a('function');
    expect(WORD.start).to.be.a('function');
  });

  it('should return an object', () => {
    expect(WORD).to.be.an('object');
  });

  it('should have default values', () => {
    expect(WORD.list).to.equal(null);
    expect(WORD.secret).to.equal('');
    expect(WORD.selected).to.equal('');
  });
});

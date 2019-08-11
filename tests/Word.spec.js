import { expect } from 'chai';
import Word from '../src/components/Word';
const WORD = new Word();

describe('Word', () => {
  it('should be a function', () => {
    expect(WORD.init).to.be.a('function');
    expect(WORD.start).to.be.a('function');
    expect(WORD.update).to.be.a('function');
  });

  it('should return an object', () => {
    expect(WORD).to.be.an('object');
  });

  it('should have default values', () => {
    expect(WORD.bank)
      .to.be.an('array')
      .with.length(0);
    expect(WORD.list).to.equal(null);
    expect(WORD.secret).to.equal('');
    expect(WORD.selected).to.equal('');
  });

  it('should init word bank list', async () => {
    expect(WORD.bank)
      .to.be.an('array')
      .with.lengthOf(0);
    const word = WORD;
    const result = await word.init();
    word.start();
    expect(word.bank)
      .to.be.an('array')
      .to.not.have.lengthOf(0);
  });
});

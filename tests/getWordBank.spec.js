import { expect } from 'chai';
import { updateWordBank } from '../src/services';
const BANK_TEST = ['bat', 'cat', 'dog', 'dot'];

describe('updateWordBank', () => {
  it('should be a function', () => {
    expect(updateWordBank).to.be.a('function');
  });

  it('should by default take an object as an argument', () => {
    expect(updateWordBank()).to.equal(false);
    expect(updateWordBank([])).to.equal(false);
    expect(updateWordBank({})).to.equal(false);
    expect(updateWordBank({ guess: 'cat', bank: BANK_TEST })).to.not.equal(
      false
    );
  });

  it('should return an array', () => {
    expect(updateWordBank({ guess: 'cat', bank: BANK_TEST }))
      .to.be.an('array')
      .with.lengthOf(1);
    expect(updateWordBank({ guess: '-at', bank: BANK_TEST }))
      .to.be.an('array')
      .with.lengthOf(2);
    expect(updateWordBank({ guess: '--t', bank: BANK_TEST }))
      .to.be.an('array')
      .with.lengthOf(3);
    expect(updateWordBank({ guess: '---', bank: BANK_TEST }))
      .to.be.an('array')
      .with.lengthOf(4);
  });

});

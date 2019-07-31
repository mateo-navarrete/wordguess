import { expect } from 'chai';
import { validateInput } from '../src/services';

describe('validateInput', () => {
  it('should be a function', () => {
    expect(validateInput).to.be.a('function');
  });

  it('should by default take as an argument an object with a key of move and an optional key of history', () => {
    expect(validateInput().isValid).to.equal(false);
    expect(validateInput([]).isValid).to.equal(false);
    expect(validateInput({}).isValid).to.equal(false);
    expect(validateInput({ move: 'a' }).isValid).to.equal(true);
  });

  it('should evaluate if move is valid', () => {
    expect(validateInput({ move: '1' }).isValid).to.equal(false);
    expect(validateInput({ move: {} }).isValid).to.equal(false);
    expect(validateInput({ move: 'ab' }).isValid).to.equal(false);
    expect(validateInput({ move: 'a' }).isValid).to.equal(true);
    expect(validateInput({ move: 'a', history: ['a'] }).isValid).to.equal(
      false
    );
  });

  it('should return an object with property isValid', () => {
    expect(validateInput())
      .to.be.an('object')
      .to.have.property('isValid');
  });
});

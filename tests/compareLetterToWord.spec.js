import { expect } from 'chai';
import { compareLetterToWord } from '../src/services';
const GUESSED = '-----';
const WORD = 'kitty';
const TEST_NEGATIVE = { guessed: GUESSED, letter: 'a', word: WORD };
const TEST_POSITIVE = { guessed: GUESSED, letter: 'i', word: WORD };
const TEST_POSITIVE_DUPLICATES = {
  guessed: GUESSED,
  letter: 't',
  word: WORD,
};

describe('compareLetterToWord', () => {
  it('should be a function', () => {
    expect(compareLetterToWord).to.be.a('function');
  });

  it('should return a string', () => {
    expect(compareLetterToWord(TEST_NEGATIVE)).to.be.a('string');
    expect(compareLetterToWord(TEST_POSITIVE)).to.be.a('string');
    expect(compareLetterToWord(TEST_POSITIVE_DUPLICATES)).to.be.a('string');
  });

  it('should evaluate if letter is in word', () => {
    expect(compareLetterToWord(TEST_NEGATIVE)).to.equal(GUESSED);
    expect(compareLetterToWord(TEST_POSITIVE)).to.equal('-i---');
    expect(compareLetterToWord(TEST_POSITIVE_DUPLICATES)).to.equal('--tt-');
  });
});

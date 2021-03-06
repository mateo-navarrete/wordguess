import { expect } from 'chai';
import { getWordsFromDB } from '../src/services';

describe('getWordsFromDB', () => {
  it('should be a function', () => {
    expect(getWordsFromDB).to.be.a('function');
  });

  it('should return an array', async () => {
    const result = await getWordsFromDB();
    expect(result).to.be.an('array');
  });

  it('should return an array of strings', async () => {
    const result = await getWordsFromDB();
    result.forEach(el => expect(el).to.be.a('string'));
  });
});

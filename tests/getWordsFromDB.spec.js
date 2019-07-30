import { expect } from 'chai';
import { getWordsFromDB } from '../src/api';

describe('getWordsFromDB', () => {
  it('should be a function', () => {
    expect(getWordsFromDB).to.be.an('function');
  });

  it('should return an array', async () => {
    const result = await getWordsFromDB();
    expect(result).to.be.an('array');
  });
});

import { expect } from 'chai';
import { getWords } from '../src/api';

describe('getWords', () => {
  it('should be a function', () => {
    expect(getWords).to.be.a('function');
  });

  it('should return an object', async () => {
    const result = await getWords();
    expect(result).to.be.an('object');
  });

  it('should return an object with a key of map', async () => {
    const result = await getWords();
    expect(result).to.have.property('map');
  });
});

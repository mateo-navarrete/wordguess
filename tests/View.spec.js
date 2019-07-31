import { expect } from 'chai';
import View from '../src/components/View';
const VIEW = new View();

describe('View', () => {
  it('should be a function', () => {
    expect(VIEW.render).to.be.a('function');
  });

  it('should return an object', () => {
    expect(VIEW).to.be.an('object');
  });

  it('should have default values', () => {
    expect(VIEW.messages).to.be.an('object');
    expect(VIEW.rules).to.be.a('string');
    expect(VIEW.title).to.be.a('string');
    expect(VIEW.ufo).to.be.an('array');
  });
});

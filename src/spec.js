import { expect } from 'chai';
import { TestComponent } from './components/TestComponent';

describe('TestComponent', () => {
  it('returns a string', () => {
    expect(TestComponent()).to.be.a('string');
  });
});

describe('true or false', () => {
  it('true is true', () => {
    expect(true).to.eql(true);
  });

  it('false is false', () => {
    expect(false).to.eql(false);
  });
});

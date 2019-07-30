import { expect } from 'chai';
import { TestComponent } from '../src/components/TestComponent';

describe('TestComponent', () => {
  it('returns a string', () => {
    expect(TestComponent()).to.be.a('string');
  });
});

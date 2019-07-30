import { expect } from 'chai';
import { spy } from 'sinon';
import { TestComponent } from './components/TestComponent';
import { App } from '.';

describe('TestComponent', () => {
  it('returns a string', () => {
    expect(TestComponent()).to.be.a('string');
  });
});

describe('App', () => {
  it('calls the passed function', () => {
    const callback = spy();
    App(callback);
    expect(callback.called).to.eql(true);
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

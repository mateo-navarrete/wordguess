import { expect } from 'chai';

describe('true or false', () => {
  it('true is true', () => {
    expect(true).to.eql(true);
  });

  it('false is false', () => {
    expect(false).to.eql(false);
  });
});

// import { expect } from 'chai';
// import { spy } from 'sinon';
// import { App } from '../src';
//
// describe('App', () => {
//   it('calls the passed function', () => {
//     const callback = spy();
//     App(callback);
//     expect(callback.called).to.eql(true);
//   });
// });

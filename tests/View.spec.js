import { expect } from 'chai';
import View from '../src/components/View';
import {
  BANK,
  CLEAR,
  ERROR_INPUT,
  ERROR_DUPLICATE,
  RULES_VIEW,
  START,
  TITLE_VIEW,
  ufo
} from '../src/constants';
const VIEW = new View();

describe('View', () => {
  it('should be a function', () => {
    expect(VIEW.getView).to.be.a('function');
    expect(VIEW.start).to.be.a('function');
    expect(VIEW.render).to.be.a('function');
    expect(VIEW.update).to.be.a('function');
  });

  it('should return an object', () => {
    expect(VIEW).to.be.an('object');
  });

  it('should have default values', () => {
    expect(VIEW.messages)
      .to.be.an('object')
      .with.property(ERROR_INPUT)
      .to.be.a('string');
    expect(VIEW.messages)
      .to.be.an('object')
      .with.property(ERROR_DUPLICATE)
      .to.be.a('string');
    expect(VIEW.ufo).to.be.an('array');
  });

  it('should take an action and return a view', () => {
    expect(VIEW.getView({ type: RULES_VIEW })).to.equal(RULES_VIEW);
    expect(VIEW.getView({ type: TITLE_VIEW })).to.equal(TITLE_VIEW);
    expect(VIEW.getView({ type: START })).to.equal(ufo[0]);
    expect(VIEW.getView({ type: BANK, payload: 1 })).to.equal(BANK + ' 1');
  });
});

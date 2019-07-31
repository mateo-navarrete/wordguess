import { expect } from 'chai';
import View from '../src/components/View';
import {
  CLEAR,
  RULES,
  RULES_VIEW,
  START,
  TITLE,
  TITLE_VIEW,
  ufo
} from '../src/constants';
const VIEW = new View();

describe('View', () => {
  it('should be a function', () => {
    expect(VIEW.getView).to.be.a('function');
    expect(VIEW.start).to.be.a('function');
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

  it('should take an action and return a view', () => {
    expect(VIEW.getView({ type: RULES })).to.equal(RULES_VIEW);
    expect(VIEW.getView({ type: TITLE })).to.equal(TITLE_VIEW);
    expect(VIEW.getView({ type: START })).to.equal(ufo[0]);
    expect(VIEW.getView({ type: CLEAR })).to.not.be.a('string');
  });
});

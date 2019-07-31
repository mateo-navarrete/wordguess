import { expect } from 'chai';
import Game from '../src/components/Game';
const GAME = new Game();

describe('Game', () => {
  it('should be a function', () => {
    expect(GAME.init).to.be.a('function');
  });

  it('should return an object', () => {
    expect(GAME).to.be.an('object');
  });

  it('should have default values', () => {
    expect(GAME.active).to.equal(false);
    expect(GAME.word).to.equal(null);
  });
});

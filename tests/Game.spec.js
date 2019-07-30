import { expect } from 'chai';
import Game from '../src/components/Game';

describe('Game', () => {
  it('returns an object', () => {
    const game = new Game();
    expect(game).to.be.an('object');
  });

  it('should have default values', () => {
    const game = new Game();
    expect(game.active).to.equal(false);
  });
});

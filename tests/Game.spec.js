import { expect } from 'chai';
import Game from '../src/components/Game';
const GAME = new Game();

describe('Game', () => {
  it('should be a function', () => {
    expect(GAME.init).to.be.a('function');
    expect(GAME.move).to.be.a('function');
    expect(GAME.over).to.be.a('function');
    expect(GAME.process).to.be.a('function');
    expect(GAME.replay).to.be.a('function');
    expect(GAME.resume).to.be.a('function');
    expect(GAME.run).to.be.a('function');
    expect(GAME.start).to.be.a('function');
    expect(GAME.update).to.be.a('function');
  });

  it('should return an object', () => {
    expect(GAME).to.be.an('object');
  });

  it('should have default values', () => {
    expect(GAME.active).to.equal(false);
    expect(GAME.player).to.be.an('object');
    expect(GAME.view).to.be.an('object');
    expect(GAME.word).to.be.an('object');
  });
});

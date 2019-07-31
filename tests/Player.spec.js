import { expect } from 'chai';
import Player from '../src/components/Player';
import { MOVES_MAX } from '../src/constants';
const PLAYER = new Player();

describe('Player', () => {
  it('should be a function', () => {
    expect(PLAYER.canMove).to.be.a('function');
    expect(PLAYER.move).to.be.a('function');
    expect(PLAYER.start).to.be.a('function');
  });

  it('should return an object', () => {
    expect(PLAYER).to.be.an('object');
  });

  it('should have default values', () => {
    expect(PLAYER.data).to.be.an('array');
    expect(PLAYER.history).to.be.an('array');
    expect(PLAYER.moves).to.be.an('array');
    expect(PLAYER.max).to.equal(MOVES_MAX);
  });

  it('should evaluate if player can move', () => {
    expect(PLAYER.canMove()).to.equal(true);
    PLAYER.moves.length = MOVES_MAX;
    expect(PLAYER.canMove()).to.equal(false);
  });
});

import { expect } from 'chai';
import Player from '../src/components/Player';
const PLAYER = new Player();

describe('Player', () => {
  it('should be a function', () => {
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
  });
});
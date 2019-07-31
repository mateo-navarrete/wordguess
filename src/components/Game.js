import Player from './Player';
import View from './View';
import Word from './Word';

export default class Game {
  constructor() {
    this.active = false;
    this.player = new Player();
    this.view = new View();
    this.word = new Word();
  }

  async init() {
    let isReady = await this.word.init();
    if (isReady) this.start();
  }

  start() {
    this.active = true;
    // this.msg = '';
    this.player.start();
    this.word.start();
    this.view.start();
    this.run();
  }

  run() {
    const { secret, selected } = this.word;
    console.log('@game.run', secret, selected);
  }
}

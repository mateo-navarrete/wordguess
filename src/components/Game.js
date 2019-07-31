import View from './View';
import Word from './Word';

export default class Game {
  constructor() {
    this.active = false;
    this.view = new View();
    this.word = new Word();
  }

  async init() {
    let isReady = await this.word.init();
    if (isReady) this.start();
  }

  start() {
    console.log('@game.start', this.word);
  }
}

import { getWords } from '../api';

export default class Game {
  constructor() {
    this.active = false;
    this.word = null;
  }

  async init() {
    let isReady = await getWords();
    if (isReady) console.log('@game.init', isReady);
    return isReady;
  }
}

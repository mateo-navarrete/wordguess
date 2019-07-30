import { getWordsFromDB } from '../api';

export default class Game {
  constructor() {
    this.active = false;
    this.words = null;
  }

  async init() {
    let isReady = await getWordsFromDB();
    if (isReady) console.log('@game.init', isReady);
    return isReady;
  }
}

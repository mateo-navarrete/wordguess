import { getWords } from '../api';
import { getRandomWord } from '../services';

export default class Word {
  constructor() {
    this.list = null;
    this.secret = '';
    this.selected = '';
  }

  async init() {
    this.list = await getWords();
    return true;
  }

  start() {
    const { hash, index } = getRandomWord(this.list.map);
    this.selected = this.list['wordLength' + hash][index];
    this.secret = this.selected
      .split('')
      .map(() => '-')
      .join('');
  }

  update(data) {
    this.secret = data;
  }
}

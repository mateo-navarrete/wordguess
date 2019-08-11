import { getWords } from '../api';
import { getRandomWord, updateWordBank } from '../services';

export default class Word {
  constructor() {
    this.bank = [];
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
    this.bank = this.list['wordLength' + hash];
    this.selected = this.bank[index];
    this.secret = this.selected
      .split('')
      .map(() => '-')
      .join('');
  }

  update(data) {
    this.bank = updateWordBank({ guess: data, bank: this.bank });
    this.secret = data;
  }
}

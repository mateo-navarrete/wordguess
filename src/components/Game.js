import Player from './Player';
import View from './View';
import Word from './Word';
import { HISTORY, MOVES } from '../constants';
import { compareLetterToWord, validateInput } from '../services';

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
    this.active ? this.move() : this.over();
  }

  move() {
    const { secret, selected } = this.word;
    console.log('@game.run', secret, selected);

    this.player.canMove()
      ? this.player
          .move()
          .then(({ move }) => this.process(move))
          .catch(err => console.error(err))
      : this.over('lose()');
  }

  process(move) {
    const input = { move, history: this.player.history };
    const { isValid, payload } = validateInput(input);
    isValid ? this.update(move.toLowerCase()) : this.display(payload);
  }

  update(move) {
    const { secret, selected } = this.word;
    const result = compareLetterToWord({
      guessed: secret,
      letter: move,
      word: selected,
    });
    this.word.update(result);
    this.player.update({ type: HISTORY, payload: move });
    if (result === secret) {
      this.player.update({ type: MOVES, payload: move });
    }

    result === selected ? this.over('win()') : this.resume();
  }

  display(payload) {
    //render(payload)
    this.resume();
  }

  resume() {
    // this.render();
    // this.run();
  }

  over(msg) {
    console.log('@Game.over', msg);
  }
}

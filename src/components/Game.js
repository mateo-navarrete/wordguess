import Player from './Player';
import View from './View';
import Word from './Word';
import { CODEWORD, ERROR, GUESSES, HISTORY, MOVES, UFO } from '../constants';
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
    this.view.render({ type: CODEWORD, payload: this.word.secret });
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
    isValid ? this.update(move.toLowerCase()) : this.resume(payload);
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

  resume(payload) {
    const { moves } = this.player;
    this.view.update();
    this.view.render({ type: UFO, payload: moves.length });
    if (moves.length) {
      this.view.render({ type: GUESSES + moves.toString() });
    }

    if (payload) {
      this.view.render({ type: ERROR, payload: payload });
    }

    this.run();
  }

  over(msg) {
    this.active = false;
    console.log('@Game.over', msg);
  }
}

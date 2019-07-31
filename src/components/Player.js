import inquirer from 'inquirer';
import { KEYNAME, MOVES_MAX, PROMPT } from '../constants';

export default class Player {
  constructor() {
    this.data = [{ name: KEYNAME, message: PROMPT }];
    this.history = [];
    this.max = MOVES_MAX;
    this.moves = [];
  }

  start() {
    this.history = [];
    this.moves = [];
  }

  canMove() {
    return this.moves.length < this.max;
  }

  move(data) {
    return inquirer.prompt(data || this.data);
  }
}

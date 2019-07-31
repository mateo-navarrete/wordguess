import inquirer from 'inquirer';
import { KEYNAME, PROMPT } from '../constants';

export default class Player {
  constructor() {
    this.data = [{ name: KEYNAME, message: PROMPT }];
    this.history = [];
    this.moves = [];
  }

  start() {
    this.history = [];
    this.moves = [];
  }

  move(data) {
    return inquirer.prompt(data || this.data);
  }
}

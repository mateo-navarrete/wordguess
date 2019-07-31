import { ufo } from './ufo';

export { ufo };
export const CLEAR = 'clear';
export const CODEWORD = 'codeword:';
export const ERROR = 'error';
export const ERROR_INPUT = 'error_input';
export const ERROR_INPUT_VIEW =
  'Please guess a single letter in the English alphabet';
export const ERROR_DUPLICATE = 'error_duplicate';
export const ERROR_DUPLICATE_VIEW =
  'You can only guess that letter once, please try again.';
export const GUESSES = 'incorrect guesses: ';
export const HISTORY = 'history';
export const IS_LOSS = 'loss';
export const LOSS_VIEW = 'You made some new alien friends!';
export const IS_WIN = 'win';
export const WIN_VIEW = 'You saved humankind!';
export const KEYNAME = 'move';
export const MOVES = 'moves';
export const MOVES_MAX = 6;
export const PROMPT = 'Please enter your guess:';
export const RULES_VIEW =
  'Save us from alien abduction by guessing letters in the codeword.';
export const START = 'start';
export const TITLE_VIEW = 'UFO: The Game';
export const UFO = 'ufo';
export const REPLAY = [
  {
    type: 'confirm',
    name: 'replay',
    message: 'Play again?',
  },
];

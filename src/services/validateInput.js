import { ERROR_INPUT, ERROR_DUPLICATE } from '../constants';

export const validateInput = input => {
  const output = { isValid: false, payload: 0 };
  if (
    !input ||
    !Object.keys(input).length ||
    typeof input.move !== 'string' ||
    input.move.length > 1 ||
    !input.move.match(/[A-Za-z]/i)
  ) {
    output.payload = ERROR_INPUT;
    return output;
  } else if (
    input.history &&
    input.history.includes(input.move.toLowerCase())
  ) {
    output.payload = ERROR_DUPLICATE;
    return output;
  } else {
    output.isValid = true;
    return output;
  }
};

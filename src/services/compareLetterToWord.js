export const compareLetterToWord = ({ guessed, letter, word }) => {
  let output = '';
  word
    .toLowerCase()
    .split('')
    .forEach((char, i) => {
      char === letter ? (output += char) : (output += guessed[i]);
    });
  return output;
};

export const updateWordBank = input => {
  if (!input || typeof input !== 'object') return false;
  if (!input.guess || !input.bank) return false;
  const { guess, bank } = input;
  const output = bank.filter(word => {
    if (guess === word) return true;
    let str = '';
    guess.split('').forEach((letter, i) => {
      letter === '-' ? (str += '-') : (str += word[i]);
    });
    return str === guess;
  });

  return output;
};

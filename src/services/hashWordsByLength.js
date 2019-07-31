export const hashWordsByLength = (words = []) => {
  if (!Array.isArray(words)) return false;
  const key = 'wordLength';
  const hash = { map: {} };
  const len = words.length;
  let wordLength;
  for (let i = 0; i < len; i++) {
    wordLength = words[i].length;
    if (!hash[key + wordLength]) {
      hash.map[wordLength] = 0;
      hash[key + wordLength] = [];
    }

    hash.map[wordLength]++;
    hash[key + wordLength].push(words[i]);
  }

  return hash;
};

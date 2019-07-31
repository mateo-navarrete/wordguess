const getRandom = len => (Math.random() * len) >> 0;

export const getRandomWord = hashMap => {
  if (!hashMap || !Object.keys(hashMap).length) return false;
  const keys = Object.keys(hashMap);
  const key = keys[getRandom(keys.length)];
  const value = getRandom(hashMap[key]);
  return { hash: key, index: value };
};

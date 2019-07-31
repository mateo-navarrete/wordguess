import { getWordsFromDB, hashWordsByLength } from '../services';

export const getWords = () =>
  getWordsFromDB()
    .then(words => hashWordsByLength(words))
    .catch(err => console.error(err));

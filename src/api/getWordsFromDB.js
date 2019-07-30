import fs from 'fs';
import { promisify } from 'util';
const readFile = promisify(fs.readFile);
const RELATIVE_FILE_PATH = 'src/db/nouns.txt';

// const foo = () => ['foo', 'bar', 'baz', 'txt'];

export const getWordsFromDB = async () => {
  try {
    // const content = await foo;
    // console.log(process.cwd());
    const wordsFromDB = await readFile(RELATIVE_FILE_PATH, 'utf8');
    return wordsFromDB.trim().split('\n');
  } catch (err) {
    console.error(err);
    return err;
  }
};

// import stats from '../db/stats.json';
const { readFile, writeFile } = require('./nodeUtils');
const getJson = async (result = 'win') => {
  try {
    let stats = await readFile('../db/stats.json');
    let parsed = JSON.parse(stats);
    parsed[result] += 1;
    writeFile('../db/stats.json', JSON.stringify(parsed));
    console.log(stats);
  } catch (e) {
    console.error(e);
  }
};

getJson();

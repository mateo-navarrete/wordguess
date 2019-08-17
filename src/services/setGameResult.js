const { readFile, writeFile } = require('./nodeUtils');
const setGameResult = async (
  result = 'win',
  word = 'code',
  history = ['a', 'c', 'o', 'd', 'e']
) => {
  try {
    const res = await readFile('src/db/stats.json');
    const stats = JSON.parse(res);
    stats[result] += 1;
    if (result === 'win') {
      stats.guessesToWin += history.length;
      history.forEach(letter => {
        if (!stats.history[letter]) stats.history[letter] = 0;
        word.match(/${letter}/i)
          ? (stats.history[letter] += 1)
          : (stats.history[letter] -= 1);
      });
    }

    writeFile('src/db/stats.json', JSON.stringify(stats));
    console.log(stats);
  } catch (e) {
    console.error(e);
  }
};

setGameResult();

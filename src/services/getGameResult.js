const { readFile, writeFile } = require('./nodeUtils');
const getGameResult = async () => {
  try {
    const res = await readFile('src/db/stats.json');
    const stats = JSON.parse(res);
    const wins = stats.win;
    const losses = stats.loss;
    const averageGuessesToWin = +(stats.guessesToWin / wins).toFixed(2);
    const history = Object.entries(stats.history)
      .map(([key, value]) => ({
        key,
        value,
      }))
      .sort((a, b) => b.value - a.value);
    const topThreeCorrectlyGuessed = history
      .slice(0, 3)
      .map(({ key, value }) => ({ [key]: value }));

    console.log(stats);
    console.log('people saved:', wins, 'people abducted:', losses);
    console.log('averageNumberOfGuessesToSaveAPerson:', averageGuessesToWin);
    console.log('history', history);
    console.log('topThreeCorrectlyGuessed', topThreeCorrectlyGuessed);
  } catch (e) {
    console.error(e);
  }
};

getGameResult();

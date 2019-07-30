require('@babel/core').transform('code', {});
import Game from './components/Game';

export const App = cb => {
  // if (cb) console.log('@App:', cb());
};

App(new Game());

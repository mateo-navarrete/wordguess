require('@babel/core').transform('code', {});
import { TestComponent } from './components/TestComponent';

export const App = cb => {
  if (cb) console.log('@App:', cb());
};

App(TestComponent);

require('@babel/core').transform('code', {});
import { TestComponent } from './components/TestComponent';

const App = () => console.log('@App: Victory!', TestComponent());

App();

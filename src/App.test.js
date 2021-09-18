import { render } from 'react-dom';
import App from './App';

test('App Test', () => {
  render(<App />, document.createElement('div'));
});

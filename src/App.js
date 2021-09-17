import Coffees from './app/page/coffee-list';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {CoffeesProvider} from './app/context/coffees'

const App = () => {
  return (
    <CoffeesProvider>
      <Router>
            <Switch>
              <Route path="/" component={Coffees} exact />
              <Route path="/c/:category" component={Coffees} exact />
            </Switch>
      </Router>
    </CoffeesProvider>
  );
}

export default App;

import React from 'react';

// Import Style
import './App.scss';

// Import Stores
import { authStore } from './stores/authStore';

// Import Provider
import { Provider } from 'mobx-react';

// Import React Router Dom Stuff
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// Import Pages
import Home from './components/pages/Home/Home';

const App: React.FC = () => {
  return (
    <Router>

      <Switch>
        <Provider authStore={authStore}>

          <Route exact path="/" component={Home} />

        </Provider>

      </Switch>

    </Router>
  );
}

export default App;

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
import NotFound from './components/pages/NotFound/NotFound';
import Register from './components/pages/Register/Register';

const App: React.FC = () => {
  return (
    <Router>

      <Provider authStore={authStore}>

        <Switch>

          <Route exact path="/" component={Home} />

          <Route exact path="/register" component={Register} />

          <Route component={NotFound} />

        </Switch>

      </Provider>

    </Router>
  );
}

export default App;

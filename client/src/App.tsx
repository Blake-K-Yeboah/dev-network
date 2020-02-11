import React from 'react';

// Import Style
import './App.scss';

// Import Stores
import { authStore } from './stores/authStore';
import { projectStore } from './stores/projectStore';

// Import Provider
import { Provider } from 'mobx-react';

// Import React Router Dom Stuff
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

// Import Pages
import Home from './components/pages/Home/Home';
import NotFound from './components/pages/NotFound/NotFound';
import Register from './components/pages/Register/Register';
import Login from './components/pages/Login/Login';
import About from './components/pages/About/About';
import Projects from './components/pages/Projects/Projects';
import CookiePopup from './components/popups/CookiePopup';

const App: React.FC = () => {

  return (
    <Router>

      <Provider authStore={authStore} projectStore={projectStore}>

        <Route path='*' component={CookiePopup} />

        <Switch>

          <Route exact path="/" component={Home} />

          <Route exact path="/register" render={(props) => {
            if (authStore.isAuthenticated) return <Redirect to="/" />
            return <Register />
          }} />

          <Route exact path="/login" render={(props) => {
            if (authStore.isAuthenticated) return <Redirect to="/" />
            return <Login />
          }} />

          <Route exact path="/projects" render={(props) => {
            if (!authStore.isAuthenticated) return <Redirect to="/login?error=1" />
            return <Projects {...props} />
          }} />

          <Route exact path="/about" component={About} />

          <Route component={NotFound} />

        </Switch>

      </Provider>

    </Router>
  );
}

export default App;

import React from 'react';

// Import Style
import './App.scss';

// Import Stores
import { authStore } from './stores/authStore';
import { projectStore } from './stores/projectStore';
import { usersStore } from './stores/usersStore';
import { communityStore } from './stores/communityStore';
import { messageStore } from './stores/messageStore';

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
import Users from './components/pages/Users/Users';
import Profile from './components/pages/Profile/Profile';
import EditProfile from './components/pages/EditProfile/EditProfile';
import Community from './components/pages/Community/Community';

const App: React.FC = () => {

  return (
    <Router>

      <Provider authStore={authStore} projectStore={projectStore} usersStore={usersStore} communityStore={communityStore} messageStore={messageStore}>

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

          <Route exact path="/community" render={(props) => {
            if (!authStore.isAuthenticated) return <Redirect to="/login?error=1" />
            return <Community {...props} />
          }} />

          <Route exact path="/users" render={(props) => {
            if (!authStore.isAuthenticated) return <Redirect to="/login?error=1" />
            return <Users {...props} />
          }} />

          <Route exact path="/profile/:username" render={(props) => {
            if (!authStore.isAuthenticated) return <Redirect to="/login?error=1" />
            return <Profile {...props} />
          }} />

          <Route exact path="/profile/edit/:username" render={(props) => {
            if (!authStore.isAuthenticated) return <Redirect to="/login?error=1" />

            if (authStore.user && authStore.user.username.replace('@', '') !== props.match.params.username) return <Redirect to="/" />

            return <EditProfile />
          }} />

          <Route exact path="/about" component={About} />

          <Route component={NotFound} />

        </Switch>

      </Provider>

    </Router>
  );
}

export default App;

import React from 'react';
import { Router, Route } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';


// route components
import App from '../../ui/components/App.js'
import Team from '../../ui/components/Team.js'

const browserHistory = createBrowserHistory();

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <div>
      <Route exact path="/" component={App}/>
      <Route exact path="team" component={Team}/>
    </div>
  </Router>
);

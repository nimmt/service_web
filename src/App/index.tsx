import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { withAuthenticator } from 'aws-amplify-react';

import StartGame from '../StartGames';
import Table from '../Tables';
import store from 'store';

const App: React.FC = ({ children }) => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/" exact>
          <StartGame />
        </Route>
        <Route path="/tables/:tableId" exact>
          <Table />
        </Route>
      </Switch>
    </Router>
  </Provider>
);

export default withAuthenticator(App, true);

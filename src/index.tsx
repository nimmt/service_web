import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

import StartGame from './StartGames';
import Table from './Tables';

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/" exact>
        <StartGame />
      </Route>
      <Route path="/tables/:tableId" exact>
        <Table />
      </Route>
    </Switch>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import StartGame from '../StartGame';
import Table from '../Table';

const App: React.FC = () => {
  return (
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
  );
};

export default App;

import { createStore, combineReducers, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';

import tableReducer, {
  State as TableState,
}  from 'Tables/reducer';

import saga from './sagas';

export type RootState = {
  table: TableState
}

export const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware();

const store: any = createStore(
  combineReducers({
    router: connectRouter(history),
    table: tableReducer
  }),
  compose(
    applyMiddleware(
      routerMiddleware(history),
      sagaMiddleware
    ),
  ),
);

sagaMiddleware.run(saga);

export default store;

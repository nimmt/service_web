import { createStore, combineReducers, Store } from 'redux';

import tableReducer, {
  State as TableState,
}  from 'Tables/reducer';

export type RootState = {
  table: TableState
}

const store: Store<RootState> = createStore(
  combineReducers({ table: tableReducer })
);

export default store;

import {
  createContext,
  Dispatch
} from 'react';

import { State, Action } from './reducer';

const Store = createContext<{
  state: State,
  dispatch: Dispatch<Action>
}>(null as any);

export default Store;

import React, {
  useReducer,
} from 'react';
import { useParams } from 'react-router-dom';

import Text from 'components/Text';

import Store from './store';
import reducer from './reducer';

import Players from './components/Players';
import PlayerEntry from './components/PlayerEntry';

const Table: React.FC = () => {
  const { tableId } = useParams();
  const [state, dispatch] = useReducer(
    reducer,
    { tableId: tableId || '', players: [] }
  );

  if (!tableId) return <div>404</div>;

  return (
    <Store.Provider value={{ state, dispatch }}>
      <Text>識別子：{tableId}</Text>

      {!state.accessToken && <PlayerEntry tableId={tableId} />}

      <Players tableId={tableId} />
    </Store.Provider>
  );
};

export default Table;

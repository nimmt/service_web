import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import Text from 'components/Text';

import { RootState } from 'store';

import Players from './components/Players';
import PlayerEntry from './components/PlayerEntry';

const Table: React.FC = () => {
  const { tableId } = useParams();

  const accessToken = useSelector(
    (state: RootState) => state.table.accessToken
  )

  if (!tableId) return <div>404</div>;

  return (
    <>
      <Text>識別子：{tableId}</Text>

      {!accessToken && <PlayerEntry tableId={tableId} />}

      <Players tableId={tableId} />
    </>
  );
};

export default Table;

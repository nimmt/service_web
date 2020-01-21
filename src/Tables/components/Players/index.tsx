import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useFetch from 'use-http';

import List, { Item } from 'components/List';

import { RootState } from 'store';

interface IProps {
  tableId: string;
}

const Players: React.FC<IProps> = ({ tableId }) => {
  const [request] = useFetch('http://localhost:8000');
  const dispatch = useDispatch();

  const players = useSelector(
    (state: RootState) => state.table.players
  );

  const fetchTable = () => {
    request
      .get(`/tables/${tableId}`)
      .then(response => dispatch({ type: 'FETCH_PLAYERS', payload: response }));
  };

  useEffect(() => {
    fetchTable();

    const id: NodeJS.Timeout = setInterval(fetchTable, 3000);

    return () => clearInterval(id);
  }, [tableId]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <List>
      {players.map(player => (
        <Item key={player.id}>{player.name}</Item>
      ))}
    </List>
  );
}

export default Players;

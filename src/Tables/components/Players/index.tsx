import React, {
  useContext,
  useEffect,
} from 'react';
import useFetch from 'use-http';

import List, { Item } from 'components/List';

import Store from '../../store';

interface IProps {
  tableId: string;
}

const Players: React.FC<IProps> = ({ tableId }) => {
  const [request] = useFetch('http://localhost:8000');

  const { state: { players }, dispatch } = useContext(Store);

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

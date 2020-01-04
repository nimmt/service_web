import React, { useState, useEffect } from 'react';
import useFetch from 'use-http';

interface ITable {
  id: string;
  players: IPlayer[];
}

interface IPlayer {
  id: string;
  name: string;
}

const App: React.FC = (): JSX.Element => {
  const tableId: String = "ab1f32d5-9806-4e54-b18a-1f60186e548a";

  const [table, setTable] = useState<ITable | null>(null);
  const [request] = useFetch('http://localhost:8000');

  useEffect(() => {
    const fetchTable = async () => {
      await request.get(`/tables/${tableId}`).then(setTable);
    }

    fetchTable();

    const id: NodeJS.Timeout = setInterval(fetchTable, 3000);

    return () => clearInterval(id);
  }, [tableId]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <h2>{tableId}</h2>

      <ul>
        {table && table.players.map(player => (
          <li key={player.id}>{player.name}</li>
        ))}
      </ul>
    </>
  );
};

export default App;

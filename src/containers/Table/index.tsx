import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import useFetch from 'use-http';

interface ITable {
  id: string;
  players: IPlayer[];
}

interface IPlayer {
  id: string;
  name: string;
}

const Table: React.FC = (): JSX.Element => {
  const [request] = useFetch('http://localhost:8000');
  const { register, handleSubmit } = useForm();

  const [table, setTable] = useState<ITable | null>(null);

  const { tableId } = useParams();

  useEffect(() => {
    const fetchTable = async () => {
      await request.get(`/tables/${tableId}`).then(setTable);
    }

    fetchTable();

    const id: NodeJS.Timeout = setInterval(fetchTable, 3000);

    return () => clearInterval(id);
  }, [tableId]); // eslint-disable-line react-hooks/exhaustive-deps

  const onSubmit = handleSubmit(({ name }) => {
    request
      .post(`/tables/${tableId}/players`, {
        name: name
      });
  });

  return (
    <>
      <p>識別子：{tableId}</p>

      <form onSubmit={onSubmit}>
        <input type="text" name="name" ref={register({ required: true })} />
        <input type="submit" value="参加する" />
      </form>

      <ul>
        {table && table.players.map(player => (
          <li key={player.id}>{player.name}</li>
        ))}
      </ul>
    </>
  );
};

export default Table;

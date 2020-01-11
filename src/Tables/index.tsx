import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useForm, FieldValues } from 'react-hook-form';
import useFetch from 'use-http';

import Text from 'components/Text';
import { SubmitButton } from 'components/Button';
import List, { Item } from 'components/List';
import Form, { TextInput } from 'components/Form';
import { ITable } from './components/Table';

const Table: React.FC = (): JSX.Element => {
  const [request] = useFetch('http://localhost:8000');

  const { register, handleSubmit, reset } = useForm();
  const { tableId } = useParams();
  const [table, setTable] = useState<ITable | null>(null);

  useEffect(() => {
    const fetchTable = async () => {
      await request.get(`/tables/${tableId}`).then(setTable);
    }

    fetchTable();

    const id: NodeJS.Timeout = setInterval(fetchTable, 3000);

    return () => clearInterval(id);
  }, [tableId]); // eslint-disable-line react-hooks/exhaustive-deps

  const onSubmit = ({ name }: FieldValues) => {
    request
      .post(`/tables/${tableId}/players`, { name })
      .then(reset);
  };

  return (
    <>
      <Text>識別子：{tableId}</Text>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <TextInput name="name" register={register} required />

        <SubmitButton value="参加する" />
      </Form>

      {table && (
        <List>
          {table.players.map(player => (
            <Item key={player.id}>{player.name}</Item>
          ))}
        </List>
      )}
    </>
  );
};

export default Table;

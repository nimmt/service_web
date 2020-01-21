import React from 'react';
import { useDispatch } from 'react-redux';

import { useForm, FieldValues } from 'react-hook-form';
import useFetch from 'use-http';

import { SubmitButton } from 'components/Button';
import Form, { TextInput } from 'components/Form';

interface IProps {
  tableId: string;
};

const PlayerEntry: React.FC<IProps> = ({ tableId }) => {
  const [request] = useFetch('http://localhost:8000');
  const dispatch = useDispatch();

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = ({ name }: FieldValues) => {
    request
      .post(`/tables/${tableId}/players`, { name })
      .then(response => {
        reset();

        return dispatch({ type: 'ADD_PLAYER', payload: response });
      });
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <TextInput name="name" register={register} required />

      <SubmitButton value="参加する" />
    </Form>
  );
};

export default PlayerEntry;

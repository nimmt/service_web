import React from 'react';
import { useDispatch } from 'react-redux';

import { useForm, FieldValues } from 'react-hook-form';

import { SubmitButton } from 'components/Button';
import Form, { TextInput } from 'components/Form';

interface IProps {
  tableId: string;
};

const PlayerEntry: React.FC<IProps> = ({ tableId }) => {
  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm();

  const onSubmit = ({ name }: FieldValues) => {
    dispatch({ type: 'JOIN_TABLE_REQUESTED', payload: { tableId, name } });
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <TextInput name="name" register={register} required />

      <SubmitButton value="参加する" />
    </Form>
  );
};

export default PlayerEntry;

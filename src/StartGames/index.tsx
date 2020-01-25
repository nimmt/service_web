import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import Form from 'components/Form';
import { SubmitButton } from 'components/Button';

const StartGame: React.FC = () => {
  const { handleSubmit } = useForm();
  const dispatch = useDispatch();

  const onSubmit = () => {
    dispatch({ type: 'CREATE_TABLE_REQUESTED' });
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <SubmitButton value="ゲーム開始" />
    </Form>
  );
}

export default StartGame;

import React from 'react';
import useFetch from 'use-http';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import Form from 'components/Form';
import { SubmitButton } from 'components/Button';

const StartGame: React.FC = () => {
  const [request] = useFetch('http://localhost:8000');
  const history = useHistory();
  const { handleSubmit } = useForm();

  const onSubmit = () => {
    request
      .post('/tables')
      .then(response => history.push(`/tables/${response.id}`));
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <SubmitButton value="ゲーム開始" />
    </Form>
  );
}

export default StartGame;

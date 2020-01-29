import React from 'react';
import useFetch from 'use-http';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Storage } from 'aws-amplify';

import Form from 'components/Form';
import { SubmitButton } from 'components/Button';

Storage.configure({
  AWSS3: {
      bucket: 'amplify-serviceweb-dev-222920-deployment',//Your bucket name;
      region: 'ap-northeast-1'//Specify the region your bucket was created in;
  }
});

const StartGame: React.FC = () => {
  const [request] = useFetch('http://localhost:8000');
  const history = useHistory();
  const { handleSubmit } = useForm();

  const onSubmit = () => {
    request
      .post('/tables')
      .then(response => history.push(`/tables/${response.id}`));
  };

  const upload = () => {
    Storage.put('test.txt', 'Hello')
      .then (result => console.log(result))
      .catch(err => console.log(err));
  };

  return (
    <>
      <button onClick={upload}>upload</button>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <SubmitButton value="ゲーム開始" />
      </Form>
    </>
  );
}

export default StartGame;

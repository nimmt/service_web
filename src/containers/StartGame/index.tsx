import React from 'react';
import useFetch from 'use-http';
import useReactRouter from 'use-react-router';

const StartGame: React.FC = () => {
  const [request] = useFetch('http://localhost:8000');
  const { history } = useReactRouter();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    request
      .post('/tables')
      .then(response => history.push(`/tables/${response.id}`));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="submit" value="ゲーム開始" />
    </form>
  );
}

export default StartGame;

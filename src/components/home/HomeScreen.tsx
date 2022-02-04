import React from 'react';
import { useHistory } from 'react-router-dom';

const HomeScreen = () => {
  const history = useHistory();
  const handleClickGo = () => {
    history.push('/todos');
  };
  return (
    <>
      <h1>Home</h1>
      <p>Hi click in the button below to start.</p>
      <button
        className="btn btn-outline-info"
        type="button"
        onClick={handleClickGo}
      >
        Go
      </button>
    </>
  );
};

export default HomeScreen;

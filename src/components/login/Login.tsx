import React, { FormEvent } from 'react';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const history = useHistory();
  const handleSubmitLogin = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    history.replace('/');
  };

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <form onSubmit={handleSubmitLogin}>
        <input
          className="form-control mb-3"
          type="text"
          placeholder="Input a nick"
        />
        <input
          className="btn btn-outline-success"
          type="submit"
          value="Login"
        />
      </form>
    </div>
  );
};

export default Login;

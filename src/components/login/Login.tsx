import React, { FormEvent, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { doLogin } from '../../actions/actionUserLogin';
import TodoContext from '../../context/TodoContext';
import useForm from '../../hooks/useForm';

interface FormData {
  nick: string;
}

const Login = () => {
  const history = useHistory();

  const { formValues, handleValue } = useForm<FormData>({
    nick: '',
  });

  const { nick } = formValues;

  const { loginDispatch } = useContext(TodoContext);

  const handleSubmitLogin = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (nick.trim().length < 3) return;
    loginDispatch(doLogin(nick));
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
          name="nick"
          value={nick}
          onChange={handleValue}
        />
        <input
          className="btn btn-outline-success"
          type="submit"
          value="Login"
          disabled={nick.trim().length < 3}
        />
      </form>
    </div>
  );
};

export default Login;

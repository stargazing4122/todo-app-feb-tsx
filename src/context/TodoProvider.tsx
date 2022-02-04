import React, { useEffect, useReducer } from 'react';
import { initUser } from '../auth/initUser';
import userReducer from '../auth/userReducer';
import todosInit from '../todos/todosInit';
import todosReducer from '../todos/todosReducer';
import TodoContext from './TodoContext';

interface TodoProviderProps {
  children: JSX.Element | JSX.Element[];
}
const TodoProvider = ({ children }: TodoProviderProps) => {
  //reducer for login
  const [loginState, loginDispatch] = useReducer(userReducer, {}, initUser);
  useEffect(() => {
    localStorage.setItem('todo-list-feb', JSON.stringify(loginState));
  }, [loginState]);

  //reducer for list of todos
  const [todosState, todosDispatch] = useReducer(todosReducer, [], todosInit);
  useEffect(() => {
    localStorage.setItem('list-todos-feb', JSON.stringify(todosState));
  }, [todosState]);

  return (
    <TodoContext.Provider
      value={{ loginDispatch, loginState, todosState, todosDispatch }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;

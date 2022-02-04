import React, { useEffect, useReducer } from 'react';
import { initUser } from '../auth/initUser';
import userReducer from '../auth/userReducer';
import TodoContext from './TodoContext';

interface TodoProviderProps {
  children: JSX.Element | JSX.Element[];
}
const TodoProvider = ({ children }: TodoProviderProps) => {
  const [loginState, loginDispatch] = useReducer(userReducer, {}, initUser);
  useEffect(() => {
    localStorage.setItem('todo-list-feb', JSON.stringify(loginState));
  }, [loginState]);

  return (
    <TodoContext.Provider value={{ loginDispatch, loginState }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;

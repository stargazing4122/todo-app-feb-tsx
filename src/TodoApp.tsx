import React from 'react';
import TodoProvider from './context/TodoProvider';
import './index.css';
import AppRouter from './routers/AppRouter';
const TodoApp = () => {
  return (
    <TodoProvider>
      <AppRouter />
    </TodoProvider>
  );
};

export default TodoApp;

import React, { useContext } from 'react';
import TodoContext from '../../context/TodoContext';
import ListTodosItem from './ListTodosItem';

const ListTodos = () => {
  const { todosState } = useContext(TodoContext);
  return (
    <div className="container-table">
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th>N°</th>
            <th>Id</th>
            <th>Title</th>
            <th>State</th>
            <th className="text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {todosState.map((todo, index) => (
            <ListTodosItem key={todo.id} {...todo} index={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListTodos;

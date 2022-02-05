import React, { useContext } from 'react';
import TodoContext from '../../context/TodoContext';
import { doDeleteTodo, doToggleTodo } from '../../actions/TodosActions';

interface TodosItemProps {
  id: string;
  index: number;
  title: string;
  state: boolean;
}

const ListTodosItem = ({ index, id, title, state }: TodosItemProps) => {
  const { todosDispatch } = useContext(TodoContext);

  const handleClickDelete = (id: string): void => {
    todosDispatch(doDeleteTodo(id));
  };

  const handleClickToggle = (id: string): void => {
    todosDispatch(doToggleTodo(id));
  };
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{id}</td>
      <td
        style={{
          cursor: 'pointer',
          textDecoration: state ? 'line-through' : '',
        }}
      >
        {title}
      </td>
      <td>{state ? 'completed' : 'incompleted'}</td>
      <td>
        <button
          type="button"
          className="btn btn-success me-1"
          onClick={() => handleClickToggle(id)}
        >
          Toggle
        </button>
        <button type="button" className="btn btn-info me-1">
          Edit
        </button>
        <button
          type="button"
          className="btn btn-danger me-1"
          onClick={() => handleClickDelete(id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ListTodosItem;

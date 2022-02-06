import React, { useContext, useState } from 'react';
import TodoContext from '../../context/TodoContext';
import { doDeleteTodo, doToggleTodo } from '../../actions/TodosActions';
import EditTodo from './EditTodo';

interface TodosItemProps {
  id: string;
  index: number;
  title: string;
  state: boolean;
}

const ListTodosItem = ({ index, id, title, state }: TodosItemProps) => {
  const [editionMode, setEditionMode] = useState(false);

  const { todosDispatch } = useContext(TodoContext);

  const handleClickDelete = (id: string): void => {
    todosDispatch(doDeleteTodo(id));
  };

  const handleClickToggle = (id: string): void => {
    todosDispatch(doToggleTodo(id));
  };

  const handleSetEditionMode = (): void => {
    setEditionMode(true);
  };
  return (
    <>
      <tr>
        <td>{index + 1}</td>
        <td>{id}</td>
        <td
          onClick={() => handleClickToggle(id)}
          style={{
            cursor: 'pointer',
            textDecoration: state ? 'line-through' : '',
          }}
        >
          {title}
        </td>
        <td>{state ? 'completed' : 'incompleted'}</td>
        <td className="text-center">
          {!editionMode ? (
            <>
              <button
                type="button"
                className="btn btn-success me-1"
                onClick={() => handleClickToggle(id)}
              >
                Toggle
              </button>
              <button
                type="button"
                className="btn btn-danger me-1"
                onClick={() => handleClickDelete(id)}
              >
                Delete
              </button>
              <button
                type="button"
                className="btn btn-info me-1"
                onClick={handleSetEditionMode}
              >
                Edit
              </button>
            </>
          ) : (
            <EditTodo
              todo={{ id, title, state }}
              setEditionMode={setEditionMode}
              todosDispatch={todosDispatch}
            />
          )}
        </td>
      </tr>
    </>
  );
};

export default ListTodosItem;

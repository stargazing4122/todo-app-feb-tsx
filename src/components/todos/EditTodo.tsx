import React, { FormEvent } from 'react';
import { TodoAction, doEditTodo } from '../../actions/TodosActions';
import useForm from '../../hooks/useForm';
import { Todo } from '../../interfaces/interfaces';

interface EditTodoProps {
  todo: Todo;
  setEditionMode: any;
  todosDispatch: (action: TodoAction) => void;
}

interface FormData {
  newTitle: string;
}
const EditTodo = ({ todo, setEditionMode, todosDispatch }: EditTodoProps) => {
  const { formValues, handleValue } = useForm<FormData>({
    newTitle: '',
  });
  const { newTitle } = formValues;

  const handleCancel = (): void => {
    setEditionMode(false);
  };

  const handleEditTodo = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (newTitle.trim().length < 3) return;
    const todoEdited: Todo = {
      ...todo,
      title: newTitle,
    };
    todosDispatch(doEditTodo(todoEdited));
  };
  return (
    <form onSubmit={handleEditTodo}>
      <input
        style={{
          width: '106px',
          display: 'inline',
        }}
        className="form-control me-1"
        type="text"
        placeholder={todo.title}
        value={newTitle}
        name="newTitle"
        onChange={handleValue}
      />
      <button
        type="submit"
        className="btn btn-outline-info me-1"
        disabled={newTitle.trim().length < 3}
      >
        Save
      </button>
      <button
        type="button"
        className="btn btn-outline-danger"
        onClick={handleCancel}
      >
        X
      </button>
    </form>
  );
};

export default EditTodo;

import React, { FormEvent, useContext } from 'react';
import { doAddTodo } from '../../actions/TodosActions';
import TodoContext from '../../context/TodoContext';
import useForm from '../../hooks/useForm';
import { Todo } from '../../interfaces/interfaces';

interface FormData {
  todoTitle: string;
}
const FormTodos = () => {
  const { todosDispatch } = useContext(TodoContext);

  const handleAddTodo = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (todoTitle.trim().length < 3) return;
    const newTodo: Todo = {
      id: new Date().getTime().toString(),
      title: todoTitle,
      state: false,
    };
    todosDispatch(doAddTodo(newTodo));
    resetForm();
  };

  const { formValues, handleValue, resetForm } = useForm<FormData>({
    todoTitle: '',
  });

  const { todoTitle } = formValues;

  return (
    <div>
      <form onSubmit={handleAddTodo}>
        <label htmlFor="form-label">Input a todo</label>
        <input
          className="form-control mb-3"
          type="text"
          name="todoTitle"
          value={todoTitle}
          onChange={handleValue}
        />
        <button className="btn btn-outline-secondary" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default FormTodos;

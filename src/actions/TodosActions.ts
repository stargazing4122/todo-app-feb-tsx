import { Todo } from '../interfaces/interfaces';

export type TodoAction =
  | { type: 'add'; payload: { todo: Todo } }
  | { type: 'delete'; payload: { id: string } }
  | { type: 'edit'; payload: { newTodo: Todo } }
  | { type: 'toggle'; payload: { id: string } };

export const doAddTodo = (todo: Todo): TodoAction => {
  return {
    type: 'add',
    payload: { todo },
  };
};

export const doDeleteTodo = (id: string): TodoAction => {
  return {
    type: 'delete',
    payload: { id },
  };
};

export const doEditTodo = (newTodo: Todo): TodoAction => {
  return {
    type: 'edit',
    payload: { newTodo },
  };
};

export const doToggleTodo = (id: string): TodoAction => {
  return {
    type: 'toggle',
    payload: { id },
  };
};

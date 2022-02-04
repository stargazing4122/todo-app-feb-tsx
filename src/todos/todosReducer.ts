import { TodoAction } from '../actions/TodosActions';
import { Todo } from '../interfaces/interfaces';

const todosReducer = (state: Todo[], action: TodoAction): Todo[] => {
  switch (action.type) {
    case 'add':
      return [...state, action.payload.todo];

    case 'delete':
      return state.filter((todo) => todo.id !== action.payload.id);

    case 'edit':
      return state.map((todo) =>
        todo.id === action.payload.newTodo.id ? action.payload.newTodo : todo,
      );

    case 'toggle':
      return state.map((todo) =>
        todo.id === action.payload.id ? { ...todo, state: !todo.state } : todo,
      );

    default:
      return state;
  }
};

export default todosReducer;

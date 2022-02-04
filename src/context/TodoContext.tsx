import { createContext } from 'react';
import { UserAction } from '../actions/actionUserLogin';
import { TodoAction } from '../actions/TodosActions';
import { Todo, UserLogin } from '../interfaces/interfaces';

interface TodoContextProps {
  loginDispatch: (action: UserAction) => void;
  loginState: UserLogin;
  todosState: Todo[];
  todosDispatch: (action: TodoAction) => void;
}
const TodoContext = createContext<TodoContextProps>({} as TodoContextProps);

export default TodoContext;

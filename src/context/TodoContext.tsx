import { createContext } from 'react';
import { UserAction } from '../actions/actionUserLogin';
import { UserLogin } from '../interfaces/interfaces';

interface TodoContextProps {
  loginDispatch: (action: UserAction) => void;
  loginState: UserLogin;
}
const TodoContext = createContext<TodoContextProps>({} as TodoContextProps);

export default TodoContext;

import { UserLogin } from '../interfaces/interfaces';

export const initUser = (): UserLogin => {
  return (
    JSON.parse(localStorage.getItem('todo-list-feb') as string) || {
      nick: '',
      isLogin: false,
    }
  );
};

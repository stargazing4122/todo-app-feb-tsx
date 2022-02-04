import { Todo } from '../interfaces/interfaces';

const todosInit = (): Todo[] => {
  return (
    JSON.parse(localStorage.getItem('list-todos-feb') as string) || [
      {
        id: new Date().getTime().toString(),
        title: 'Learn React',
        state: false,
      },
    ]
  );
};

export default todosInit;

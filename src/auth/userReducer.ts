import { UserAction } from '../actions/actionUserLogin';
import { UserLogin } from '../interfaces/interfaces';

const userReducer = (state: UserLogin, action: UserAction): UserLogin => {
  switch (action.type) {
    case 'login':
      return {
        nick: action.payload.nick,
        isLogin: true,
      };

    case 'logout':
      return {
        nick: '',
        isLogin: false,
      };

    default:
      return state;
  }
};

export default userReducer;

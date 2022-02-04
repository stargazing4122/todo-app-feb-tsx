export type UserAction =
  | { type: 'login'; payload: { nick: string } }
  | { type: 'logout' };

export const doLogin = (nick: string): UserAction => {
  return {
    type: 'login',
    payload: {
      nick,
    },
  };
};

export const doLogout = (): UserAction => {
  return {
    type: 'logout',
  };
};

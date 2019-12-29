/* eslint-disable import/prefer-default-export */
export function loginUser(user) {
  return {
    type: 'LOGIN_USER',
    user,
  };
}

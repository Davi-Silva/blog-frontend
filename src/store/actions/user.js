/* eslint-disable import/prefer-default-export */
export function loginUser(userInfo) {
  return {
    type: 'LOGIN_USER',
    userInfo,
  };
}

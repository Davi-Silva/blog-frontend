/* eslint-disable import/prefer-default-export */
export function loginUser() {
  return {
    type: 'REQUEST_LOGIN_USER',
  };
}

export function refreshUserData(id) {
  return {
    type: 'REQUEST_REFRESH_USER_DATA',
    payload: {
      id,
    },
  };
}

export function updateUserInfo(updateObj) {
  return {
    type: 'REQUEST_UPDATE_USER_INFO',
    payload: {
      updateObj,
    },
  };
}

export function logoutUser() {
  return {
    type: 'REQUEST_LOGOUT_USER',
  };
}

export function loginUserProvider(endpoint) {
  return {
    type: 'REQUEST_LOGIN_USER_PROVIDER',
    payload: {
      endpoint,
    },
  };
}

export function getPublicProfile(user) {
  return {
    type: 'REQUEST_GET_PUBLIC_PROFILE',
    payload: {
      user,
    },
  };
}

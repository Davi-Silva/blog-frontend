const initialState = {
  data: {},
  loading: false,
  fetched: false,
  error: false,
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case 'REQUEST_LOGIN_USER':
      return {
        ...state,
        loading: true,
      };
    case 'SUCCESS_LOGIN_USER':
      return {
        ...state,
        data: action.payload.data,
        loading: false,
        fetched: true,
        error: false,
      };
    case 'FAILURE_LOGIN_USER':
      return {
        ...state,
        data: {},
        loading: false,
        fetched: true,
        error: true,
      };
    case 'REQUEST_LOGIN_USER_PROVIDER':
      return {
        ...state,
        loading: true,
      };
    case 'SUCCESS_LOGIN_USER_PROVIDER':
      return {
        ...state,
        data: action.payload.data,
        loading: false,
        fetched: true,
        error: false,
      };
    case 'FAILURE_LOGIN_USER_PROVIDER':
      return {
        ...state,
        data: {},
        loading: false,
        fetched: true,
        error: true,
      };
    case 'REQUEST_REFRESH_USER_DATA':
      return {
        ...state,
        loading: true,
      };
    case 'SUCCESS_REFRESH_USER_DATA':
      return {
        ...state,
        data: action.payload.data,
        loading: false,
        fetched: true,
        error: false,
      };
    case 'FAILURE_REFRESH_USER_DATA':
      return {
        ...state,
        loading: false,
        fetched: true,
        error: true,
      };
    case 'REQUEST_LOGOUT_USER':
      return {
        ...state,
        loading: true,
      };
    case 'SUCCESS_LOGOUT_USER':
      return {
        ...state,
        data: [],
        loading: false,
        fetched: true,
        error: false,
      };
    case 'FAILURE_LOGOUT_USER':
      return {
        ...state,
        data: [],
        loading: false,
        fetched: true,
        error: true,
      };
    default:
      return state;
  }
}

const initialState = {
  loading: false,
  fetched: false,
  error: false,
};

export default function profileUserInfo(state = initialState, action) {
  switch (action.type) {
    case 'REQUEST_UPDATE_USER_INFO':
      return {
        ...state,
        loading: true,
      };
    case 'SUCCESS_UPDATE_USER_INFO':
      return {
        ...state,
        loading: false,
        fetched: true,
        error: false,
      };
    case 'FAILURE__UPDATE_USER_INFO':
      return {
        ...state,
        loading: false,
        fetched: true,
        error: true,
      };
    default:
      return state;
  }
}

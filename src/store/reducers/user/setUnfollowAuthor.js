const initialState = {
  data: {},
  loading: false,
  fetched: false,
  error: false,
};

export default function unfollowAuthor(state = initialState, action) {
  switch (action.type) {
    case 'REQUEST_SET_UNFOLLOW_AUTHOR':
      return {
        ...state,
        loading: true,
      };
    case 'SUCCESS_SET_UNFOLLOW_AUTHOR':
      return {
        ...state,
        data: action.payload.data,
        loading: false,
        fetched: true,
        error: false,
      };
    case 'FAILURE_SET_UNFOLLOW_AUTHOR':
      return {
        ...state,
        data: {},
        loading: false,
        fetched: true,
        error: true,
      };
    default:
      return state;
  }
}

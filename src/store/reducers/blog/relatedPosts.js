const initialState = {
  data: [],
  loading: false,
  fetched: false,
  error: false,
};

export default function relatedPosts(state = initialState, action) {
  switch (action.type) {
    case 'REQUEST_GET_RELATED_POSTS':
      return {
        ...state,
        loading: true,
      };
    case 'SUCCESS_GET_RELATED_POSTS':
      return {
        ...state,
        data: action.payload.data,
        loading: false,
        fetched: true,
        error: false,
      };
    case 'FAILURE_GET_RELATED_POSTS':
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

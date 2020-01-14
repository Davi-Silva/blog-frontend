const initialState = {
  data: [],
  loading: false,
  fetched: false,
  error: false,
};

export default function podcast(state = initialState, action) {
  switch (action.type) {
    case 'REQUEST_PODCAST_BY_SLUG':
      return {
        ...state,
        loading: true,
      };
    case 'SUCCESS_PODCAST_BY_SLUG':
      return {
        ...state,
        data: action.payload.data,
        loading: false,
        fetched: true,
        error: false,
      };
    case 'FAILURE_PODCAST_BY_SLUG':
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

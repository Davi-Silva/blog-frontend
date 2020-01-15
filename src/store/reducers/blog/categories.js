const initialState = {
  data: [],
  loading: false,
  fetched: false,
  error: false,
};

export default function categories(state = initialState, action) {
  switch (action.type) {
    case 'REQUEST_RECENT_CATEGORIES':
      return {
        ...state,
        loading: true,
      };
    case 'SUCCESS_RECENT_CATEGORIES':
      return {
        ...state,
        data: action.payload.data,
        loading: false,
        fetched: true,
        error: false,
      };
    case 'FAILURE_RECENT_CATEGORIES':
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

const initialState = {
  data: [],
  loading: false,
  fetched: false,
  error: false,
};

export default function article(state = initialState, action) {
  switch (action.type) {
    case 'REQUEST_ARTICLES':
      return {
        ...state,
        loading: true,
      };
    case 'SUCCESS_ARTICLES':
      return {
        ...state,
        data: action.payload.data,
        loading: false,
        fetched: true,
        error: false,
      };
    case 'FAILURE_ARTICLES':
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

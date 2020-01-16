const initialState = {
  data: [],
  loading: false,
  fetched: false,
  error: false,
};

export default function news(state = initialState, action) {
  switch (action.type) {
    case 'REQUEST_NEWS':
      return {
        ...state,
        loading: true,
      };
    case 'SUCCESS_NEWS':
      return {
        ...state,
        data: action.payload.data,
        loading: false,
        fetched: true,
        error: false,
      };
    case 'FAILURE_NEWS':
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

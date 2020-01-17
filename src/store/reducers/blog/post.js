const initialState = {
  data: [],
  loading: false,
  fetched: false,
  error: false,
};

export default function post(state = initialState, action) {
  switch (action.type) {
    case 'REQUEST_POST':
      return {
        ...state,
        loading: true,
      };
    case 'SUCCESS_POST':
      return {
        ...state,
        data: action.payload.data,
        loading: false,
        fetched: true,
        error: false,
      };
    case 'FAILURE_POST':
      return {
        ...state,
        data: [],
        loading: false,
        fetched: true,
        error: true,
      };
    case 'REQUEST_UPDATE_HOW_MANY_READ':
      return {
        ...state,
        loading: true,
      };
    case 'SUCCESS_UPDATE_HOW_MANY_READ':
      return {
        ...state,
        loading: false,
        fetched: true,
        error: false,
      };
    case 'FAILURE_UPDATE_HOW_MANY_READ':
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

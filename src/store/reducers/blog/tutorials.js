const initialState = {
  data: [],
  loading: false,
  fetched: false,
  error: false,
};

export default function tutorials(state = initialState, action) {
  switch (action.type) {
    case 'REQUEST_TUTORIALS':
      return {
        ...state,
        loading: true,
      };
    case 'SUCCESS_TUTORIALS':
      return {
        ...state,
        data: action.payload.data,
        loading: false,
        fetched: true,
        error: false,
      };
    case 'FAILURE_TUTORIALS':
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

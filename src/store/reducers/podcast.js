const initialState = {
  data: [],
  loading: false,
  error: false,
};

export default function podcast(state = initialState, action) {
  switch (action.type) {
    case 'REQUEST_PODCAST_BY_SLUG':
      return { ...state, loading: true };
    case 'SUCESS_PODCAST_BY_SLUG':
      return { data: action.payload.data, loading: false, error: false };
    case 'FAILURE_PODCAST_BY_SLUG':
      return { data: [], loading: false, error: true };
    default:
      return state;
  }
}

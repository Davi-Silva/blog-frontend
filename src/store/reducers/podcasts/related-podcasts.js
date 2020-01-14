const initialState = {
  data: [],
  loading: false,
  fetched: false,
  error: false,
};

export default function relatedPodcast(state = initialState, action) {
  switch (action.type) {
    case 'REQUEST_RELATED_PODCASTS':
      return {
        ...state,
        loading: true,
      };
    case 'SUCCESS_RELATED_PODCASTS':
      return {
        ...state,
        data: action.payload.data,
        loading: false,
        fetched: true,
        error: false,
      };
    case 'FAILURE_RELATED_PODCASTS':
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

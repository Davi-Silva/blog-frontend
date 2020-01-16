const initialState = {
  data: [],
  loading: false,
  fetched: false,
  error: false,
};

export default function mostRecentVideos(state = initialState, action) {
  switch (action.type) {
    case 'REQUEST_MOST_RECENT_VIDEOS':
      return {
        ...state,
        loading: true,
      };
    case 'SUCCESS_MOST_RECENT_VIDEOS':
      return {
        ...state,
        data: action.payload.data,
        loading: false,
        fetched: true,
        error: false,
      };
    case 'FAILURE_MOST_RECENT_VIDEOS':
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

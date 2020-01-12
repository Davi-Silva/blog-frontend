const initialState = [];

export default function podcasts(state = initialState, action) {
  switch (action.type) {
    case 'GET_ALL_PODCASTS':
      return [
        ...state,
        { podcastsList: action.payload.podcastsList },
      ];
    case 'GET_PODCAST_BY_SLUG':
      return [
        ...state,
        { podcast: action.payload.podcast },
      ];
    default:
      return state;
  }
}

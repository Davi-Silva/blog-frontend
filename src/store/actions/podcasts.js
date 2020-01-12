/* eslint-disable import/prefer-default-export */
export function getPodcasts(podcastsList) {
  return {
    type: 'ASYNC_GET_ALL_PODCASTS',
    payload: {
      podcastsList,
    },
  };
}

export function getPodcast(podcast) {
  return {
    type: 'ASYNC_GET_PODCAST_BY_SLUG',
    payload: {
      podcast,
    },
  };
}

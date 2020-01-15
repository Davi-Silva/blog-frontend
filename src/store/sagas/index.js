import {
  takeLatest,
  all,
} from 'redux-saga/effects';

import asyncGetPodcasts from './podcast/getPodcasts';
import asyncGetPodcast from './podcast/getPodcast';
import asyncGetRelatedPodcastsApi from './podcast/getRelatedPodcast';
import asyncGetRecentCategoriesApi from './blog/getRecentCategories';

export default function* root() {
  yield all([
    takeLatest('REQUEST_ALL_PODCASTS', asyncGetPodcasts),
    takeLatest('REQUEST_PODCAST_BY_SLUG', asyncGetPodcast),
    takeLatest('REQUEST_RELATED_PODCASTS', asyncGetRelatedPodcastsApi),
    takeLatest('REQUEST_RECENT_CATEGORIES', asyncGetRecentCategoriesApi),
  ]);
}

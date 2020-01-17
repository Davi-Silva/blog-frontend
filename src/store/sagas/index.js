import {
  takeLatest,
  all,
} from 'redux-saga/effects';

import asyncGetPodcasts from './podcast/getPodcasts';
import asyncGetPodcast from './podcast/getPodcast';
import asyncGetRelatedPodcastsApi from './podcast/getRelatedPodcast';
import asyncGetRecentCategoriesApi from './blog/getRecentCategories';
import asyncGetMainBlogPostsApi from './blog/getMainBlogPosts';
import asyncGetMostRecentVideosApi from './blog/getMostRecentVideos';
import asyncGetNewsApi from './blog/getNews';
import asyncGetArticlesApi from './blog/getArticles';
import asyncGetTutorialsApi from './blog/getTutorials';
import asyncGetPostApi from './blog/getPost';
import asyncUpdateHowManyReadApi from './blog/updateHowManyRead';

export default function* root() {
  yield all([
    takeLatest('REQUEST_ALL_PODCASTS', asyncGetPodcasts),
    takeLatest('REQUEST_PODCAST_BY_SLUG', asyncGetPodcast),
    takeLatest('REQUEST_RELATED_PODCASTS', asyncGetRelatedPodcastsApi),
    takeLatest('REQUEST_RECENT_CATEGORIES', asyncGetRecentCategoriesApi),
    takeLatest('REQUEST_GET_MAIN_BLOG_POSTS', asyncGetMainBlogPostsApi),
    takeLatest('REQUEST_MOST_RECENT_VIDEOS', asyncGetMostRecentVideosApi),
    takeLatest('REQUEST_NEWS', asyncGetNewsApi),
    takeLatest('REQUEST_ARTICLES', asyncGetArticlesApi),
    takeLatest('REQUEST_TUTORIALS', asyncGetTutorialsApi),
    takeLatest('REQUEST_POST', asyncGetPostApi),
    takeLatest('REQUEST_UPDATE_HOW_MANY_READ', asyncUpdateHowManyReadApi),
  ]);
}

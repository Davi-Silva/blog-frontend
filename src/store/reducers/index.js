import { combineReducers } from 'redux';

import user from './user';
import navbar from './navbar';
import podcasts from './podcasts/podcasts';
import podcast from './podcasts/podcast';
import relatedPodcast from './podcasts/related-podcasts';
import blogCategories from './blog/categories';
import mainBlogPosts from './blog/mainBlogPosts';
import mostRecentVideos from './blog/mostRecentVideos';
import news from './blog/news';
import articles from './blog/articles';
import tutorials from './blog/tutorials';

export default combineReducers({
  user,
  navbar,
  podcasts,
  podcast,
  relatedPodcast,
  blogCategories,
  mainBlogPosts,
  mostRecentVideos,
  news,
  articles,
  tutorials,
});

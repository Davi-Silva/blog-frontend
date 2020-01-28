import { combineReducers } from 'redux';

import user from './user/user';
import publicProfile from './user/publicProfile';
import navbar from './navbar';
import podcasts from './podcasts/podcasts';
import podcast from './podcasts/podcast';
import relatedPodcast from './podcasts/related-podcasts';
import blog from './blog/blog';
import post from './blog/post';
import postsByCategory from './blog/postsByCategory';
import postsByTag from './blog/postsByTag';
import podcastsByCategory from './podcasts/podcastsByCategory';
import podcastsByTag from './podcasts/podcastsByTag';
import relatedPosts from './blog/relatedPosts';

export default combineReducers({
  user,
  publicProfile,
  navbar,
  podcasts,
  podcast,
  relatedPodcast,
  blog,
  post,
  postsByCategory,
  postsByTag,
  podcastsByCategory,
  podcastsByTag,
  relatedPosts,
});

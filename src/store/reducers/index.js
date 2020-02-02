import { combineReducers } from 'redux';

import user from './user/user';
import publicProfile from './user/publicProfile';
import navbar from './navbar';
import podcasts from './podcasts/podcasts';
import podcast from './podcasts/podcast';
import blog from './blog/blog';
import post from './blog/post';
import postsByCategory from './blog/postsByCategory';
import postsByTag from './blog/postsByTag';
import podcastsByCategory from './podcasts/podcastsByCategory';
import podcastsByTag from './podcasts/podcastsByTag';

export default combineReducers({
  user,
  publicProfile,
  navbar,
  podcasts,
  podcast,
  blog,
  post,
  postsByCategory,
  postsByTag,
  podcastsByCategory,
  podcastsByTag,
});

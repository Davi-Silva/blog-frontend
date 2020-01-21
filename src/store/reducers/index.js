import { combineReducers } from 'redux';

import user from './user/user';
import profileUserInfo from './user/profileUserInfo';
import publicProfile from './user/publicProfile';
import setFollowAuthor from './user/setFollowAuthor';
import setUnfollowAuthor from './user/setUnfollowAuthor';
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
import post from './blog/post';
import postsByCategory from './blog/postsByCategory';
import postsByTag from './blog/postsByTag';
import podcastsByCategory from './podcasts/podcastsByCategory';
import podcastsByTag from './podcasts/podcastsByTag';

export default combineReducers({
  user,
  profileUserInfo,
  publicProfile,
  setFollowAuthor,
  setUnfollowAuthor,
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
  post,
  postsByCategory,
  postsByTag,
  podcastsByCategory,
  podcastsByTag,
});

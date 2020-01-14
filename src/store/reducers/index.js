import { combineReducers } from 'redux';

import user from './user';
import navbar from './navbar';
import podcasts from './podcasts/podcasts';
import podcast from './podcasts/podcast';
import relatedPodcast from './podcasts/related-podcasts';

export default combineReducers({
  user,
  navbar,
  podcasts,
  podcast,
  relatedPodcast,
});

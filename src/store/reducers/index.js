import { combineReducers } from 'redux';

import user from './user';
import navbar from './navbar';
// import podcasts from './podcasts';
import podcast from './podcast';

export default combineReducers({
  user,
  navbar,
  podcast,
});

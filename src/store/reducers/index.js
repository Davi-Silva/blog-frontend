import { combineReducers } from 'redux';

import user from './user';
import navbar from './navbar';

export default combineReducers({
  user,
  navbar,
});

import { combineReducers } from 'redux';

import auth from './auth';
import game from './game';
import dashboard from './dashboard';

export default combineReducers({
  auth,
  game,
  dashboard,
});
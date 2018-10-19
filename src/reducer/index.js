import { combineReducers } from 'redux';

import auth from './auth-reducer';
import game from './game';
import gameList from './dashboard-reducer';
import user from './user-reducer';

export default combineReducers({
  auth,
  game,
  gameList,
  user,
});
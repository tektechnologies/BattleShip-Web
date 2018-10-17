import { combineReducers } from 'redux';

import auth from './auth-reducer';
import game from './game';

export default combineReducers({
  auth,
  game,
});
import * as actions from '../actions/dashboard-actions';

const initialState = null;

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch(type){
    case actions.GAMELIST_SET:
      return payload;
    default:
      return state;
  }
};
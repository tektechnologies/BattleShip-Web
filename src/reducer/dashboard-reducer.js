import * as actions from '../actions/dashboard-actions';

const initialState = [];

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch(type){
    case actions.GAMELIST_SET:
      return payload;
    default:
      return state;
  }
};
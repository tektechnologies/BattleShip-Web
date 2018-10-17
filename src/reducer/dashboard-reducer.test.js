import * as actions from '../actions/dashboard-actions';
import dashboard from './dashboard-reducer';

describe('dashboard reducer', () => {
  
  it('returns initial state when no actions', ()=> {
    let initialState = [];
    let action = {};
    expect(dashboard(initialState, action)).toEqual(initialState);
  });

  it('given GAMELIST_SET, state returned payload', ()=> {
    let initialState;
    let action = {type: actions.GAMELIST_SET,
      payload: 'this is a game state'};
    expect(dashboard(initialState, action)).toEqual('this is a game state');
  });

  it('return state given bad action', ()=>{
    let state = [];
    let action = {type: 'LIST_FETCH', 
      payload: 'this is an empty game state'};
    let result = dashboard(state, action);
    expect(result).toBe(state);  
  });

});
import * as actions from '../actions/dashboard-actions';
import dashboard from './dashboard-reducer';

describe('dashboard reducer', () => {
  
  it('returns initial state when no actions', ()=> {
    let initialState = [];
    let action = {};
    expect(dashboard(initialState, action)).toEqual(initialState);
  });

  it('given null state return payload', ()=> {
    let initialState;
    let action = {type: actions.GAMELIST_SET,
      payload: 'this is a game state'};
    expect(dashboard(initialState, action)).toEqual('this is a game state');
  });

  it('post reducer returns null on empty action', ()=> {
    let initialState;
    let action = {};
    expect(dashboard(initialState, action)).toEqual(null);
  });
 
  it('parses a dashboard action', ()=>{
    //check game state
    let action = {type: actions.GAMELIST_SET,
      payload: 'this is a game state'};
    let state = dashboard(null, action);
    expect(state).toBe('this is a game state');
  });

  it('check ', ()=>{
    let action2 = {type: 'LIST_FETCH', 
      payload: 'this is another game state'};
    let state = dashboard(null, action2);
    expect(dashboard(state, action2)).toBe(state);    
  });

  it('return state given bad action', ()=>{
    let state = [];
    let action = {type: 'LIST_FETCH', 
      payload: 'this is an empty game state'};
    let result = dashboard(state, action);
    expect(result).toBe(state);  
  });

});
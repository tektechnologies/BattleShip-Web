import * as actions from '../actions/user-actions';
import reducer from './user-reducer';

describe('user reducer', ()=>{
  it('returns inital state with no action given', () => {
    let state = null;

    let result = reducer(state);

    expect(result).toBe(state);
  });
  it('returns inital state with bad action given', () => {
    let fakeData = 'Something for testing';
    let state = null;
    let action = {type:'GAME_UPDATE', payload:fakeData};

    let result = reducer(state,action);

    expect(result).not.toBe(fakeData);
    expect(result).toBe(state);
  });
  describe('USER_SET', () => {
    it('sets the fetched data as the state', () => {
      let userObject = 'rebelflesh';
      let state = null;
      let action = actions.userSet(userObject);

      let result = reducer(state, action);
      
      expect(result).toBe(userObject);
    });
  });
});
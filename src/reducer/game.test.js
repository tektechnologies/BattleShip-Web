import * as actions from '../actions/game-actions';
import game from './game';

describe('game reducer', ()=>{
  it('parses an Update action', ()=>{
    let action = {type: actions.GAME_UPDATE, payload: 'this is a game state'};
    let state = game(null, action);
    expect(state).toBe('this is a game state');
    let action2 = {type: actions.GAME_FETCH, payload: 'this is also a game state'};
    expect(game(state, action2)).toBe(state);
  });
});
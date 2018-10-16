import superagent from 'superagent';
const API_URL = 'http://localhost:5000';
export const GAME_CREATE = 'GAME_CREATE';
export const GAME_UPDATE = 'GAME_UPDATE';
export const GAME_MOVE = 'GAME_MOVE';
export const GAME_SET = 'GAME_SET';
export const GAME_FETCH = 'GAME_FETCH';

export const gameFetch = (gameId) =>{
  (dispatch, getState) =>
    superagent.get(`${API_URL}/api/game/${gameId}`)
      .set('Authorization', getState().auth ? `Bearer ${getState().auth}` : null)
      .then(res =>{
        dispatch(gameUpdate(res.body));
      });
};

export const gameUpdate = (gameData) =>({
  type: GAME_UPDATE,
  payload: gameData,
});

export const gameSet = (gameId) =>({
  type: GAME_SET,
  payload: gameId,
});

export const gameCreate = (opponent) =>{
  (dispatch, getState) =>
    superagent.post(`${API_URL}/api/games`)
      .set('Authorization', getState().auth ? `Bearer ${getState().auth}` : null)
      .send({opponent: opponent.username})
      .then( res =>{
        dispatch(gameUpdate(res.body));
      });
};

export const gameMove = (gameId, ...coords) =>{
  (dispatch, getState) =>
    superagent.post(`${API_URL}/api/games/${gameId}/move`)
      .set('Authorization', getState().auth ? `Bearer ${getState().auth}` : null)
      .send({coors: coords})
      .then(()=>{
        dispatch(gameFetch(gameId));
      });
};
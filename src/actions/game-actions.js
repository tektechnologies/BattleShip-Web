import superagent from 'superagent';
const API_URL = process.env.REACT_APP_API_URL;
export const GAME_UPDATE = 'GAME_UPDATE';
let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViYzc5MDdiYWM2MjZlZTRlNWU1NDdhZiIsImlhdCI6MTUzOTgwNTMwN30.js-1EujtFH6USWF0qQN4CeVY8wkubIllZsZRemSNwUk';


export const gameFetch = (gameId) =>
  (dispatch, getState) =>
    superagent.get(`${API_URL}/api/game/${gameId}`)
      .set('Authorization', getState().auth ? `Bearer ${getState().auth}` : `Bearer ${token}`)
      .then(res =>{
        dispatch(gameUpdate(res.body));
      });


export const gameUpdate = (gameData) =>({
  type: GAME_UPDATE,
  payload: gameData,
});

export const gameCreate = (opponent) =>
  (dispatch, getState) =>
    superagent.post(`${API_URL}/api/games`)
      .set('Authorization', getState().auth ? `Bearer ${getState().auth}` : null)
      .send({opponent: opponent})
      .then( res =>{
        dispatch(gameUpdate(res.body));
      });


export const gameMove = (gameId, ...coords) =>
  (dispatch, getState) =>
    superagent.post(`${API_URL}/api/games/${gameId}/move`)
      .set('Authorization', getState().auth ? `Bearer ${getState().auth}` : null)
      .send({coors: coords})
      .then(()=>{
        dispatch(gameFetch(gameId));
      });

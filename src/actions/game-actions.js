import superagent from 'superagent';
const API_URL = 'http://localhost:5000';
export const GAME_CREATE = 'GAME_CREATE';
export const GAME_UPDATE = 'GAME_UPDATE';
/* export const GAME_JOIN;
export const GAME_MOVE;*/

/*export const gameCreate = (user) =>{
  dispatch =>
    superagent.post(`${API_URL}/api/games`)
      .set('Authorization', `Bearer ${user.token}`)
      .send({'opponent': opponent.username})
}*/
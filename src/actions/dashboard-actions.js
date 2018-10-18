import superagent from 'superagent';

const API_URL = process.env.REACT_APP_API_URL;

export const GAMELIST_SET = 'GAMELIST_SET';

export const gameListSet = (gameList) => ({
  type: GAMELIST_SET, 
  payload: gameList,
});

export const listFetch = () => (dispatch, getState) => {
  superagent.get(`${API_URL}/api/games`)
    .set('Authorization', getState().auth ? `Bearer ${getState().auth}` : null)
    .then(res => {
      dispatch(gameListSet(res.body));
      return res;
    });
};
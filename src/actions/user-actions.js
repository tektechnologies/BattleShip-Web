import superagent from 'superagent';

const API_URL = process.env.REACT_APP_API_URL;

export const userSet = (user) => ({
  type: 'USER_SET', 
  payload: user,
});

export const userFetch = () => (dispatch, getState) => {
  superagent.get(`${API_URL}/user`)
    .set('Authorization', getState().auth ? `Bearer ${getState().auth}` : null)
    .then(res => {
      dispatch(userSet(res.body));
      return res;
    });
};
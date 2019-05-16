import {
  USER_LOGIN_WITH
} from './types';

export const loginType = (loginType) => {
  console.log('ACTIONS', loginType);
  return dispatch => {
    dispatch({
      type: USER_LOGIN_WITH,
      payload: loginType
    });
  };
}
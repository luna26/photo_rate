import {
  USER_LOGIN_WITH
} from '../actions/types';

const INITIAL_STATE = {
  loginType: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_LOGIN_WITH:
      return {
        ...state, loginType: action.payload
      };
    default:
      return state;
  }
};
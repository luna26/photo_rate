import { combineReducers } from 'redux';
import HomeReducer from './home-reducer';
import LoginReducer from './login-reducer';

export default combineReducers({
  home: HomeReducer,
  login: LoginReducer,
});
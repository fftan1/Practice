import { combineReducers } from 'redux';
import LoginReducer from './LoginReducer';

const mainReducer = combineReducers({
  loginReducer: LoginReducer,
});

export default mainReducer;
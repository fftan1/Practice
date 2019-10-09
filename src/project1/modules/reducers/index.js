import LoginReducer from './LoginReducer';
import { combineReducers } from 'redux';

const authReducer = combineReducers({
  LoginReducer,
})

export default authReducer;
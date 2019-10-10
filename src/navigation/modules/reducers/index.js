import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import LoginReducer from './LoginReducer';

const mainReducer = combineReducers({
  loginReducer: LoginReducer,
  form: formReducer,
});

export default mainReducer;

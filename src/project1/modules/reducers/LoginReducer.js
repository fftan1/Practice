import * as ActionTypes from '../actions/types';

const defaultState = {
  loading: false,
  loggedInUser: null,
  error: null,
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case ActionTypes.AUTH_LOGIN:
      return {
        ...state, 
        loading: true,
        loggedInUser: null,
        error: null,
      }
    case ActionTypes.AUTH_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        loggedInUser: action.loggedInUser,
        error: null,
      }
    case ActionTypes.AUTH_LOGIN_ERROR:
      return {
        ...state,
        loading: false,
        loggedInUser: null,
        error: action.error,
      }
    case ActionTypes.AUTH_LOGIN_INVALID:
      return {
        ...state,
        loading: false,
        loggedInUser: null,
        error: null,
      }
  }
}


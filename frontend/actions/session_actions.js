import * as APIUtil from './../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_LOGOUT = "RECEIVE_LOGOUT";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

export const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  currentUser: user
});

export const receiveLogOut = currentUser => ({
  type: RECEIVE_LOGOUT,
  currentUser
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});

export const signup = user => dispatch => (
  APIUtil.signup(user)
    .then(user => (
      dispatch(receiveCurrentUser(user))
    ), err => (
      dispatch(receiveErrors(err.responseJSON))
    ))
);

export const login = user => dispatch => (
  APIUtil.login(user)
    .then(user => (
      dispatch(receiveCurrentUser(user))
    ), err => (
      dispatch(receiveErrors(err.responseJSON))
    ))
);

export const logout = () => dispatch => (
  APIUtil.logout()
    .then(response => (
      dispatch(receiveLogOut(null))
    ))
);

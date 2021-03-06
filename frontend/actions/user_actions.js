import * as APIUtil from './../util/user_api_util';

export const RECEIVE_USER = "RECEIVE_USER";

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

export const requestUser = username => dispatch => (
  APIUtil.fetchUser(username)
    .then(user => dispatch(receiveUser(user)))
);

export const updateUser = (formData, username) => dispatch => (
  APIUtil.editUser(formData, username)
  .then(user => dispatch(receiveUser(user)))
);

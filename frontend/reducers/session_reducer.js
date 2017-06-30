import merge from 'lodash/merge';
import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS, CLEAR_ERRORS, RECEIVE_LOGOUT } from './../actions/session_actions';

const nullUser = Object.freeze({
  currentUser: null,
  errors: []
});

const sessionReducer = (state = nullUser, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      //debugger
      const currentUser = action.currentUser;
      return merge({}, nullUser, {currentUser});
    case RECEIVE_LOGOUT:
      return merge({}, nullUser);
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, nullUser, {errors});
    case CLEAR_ERRORS:
      return merge({}, {currentUser: state.currentUser}, {errors: []});
    default:
      return state;
  }
};

export default sessionReducer;

import merge from 'lodash/merge';
import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS, CLEAR_ERRORS, RECEIVE_LOGOUT } from './../actions/session_actions';
import { RECEIVE_SINGLE_BOARD, REMOVE_BOARD } from './../actions/board_actions';
import { RECEIVE_SINGLE_PIN, REMOVE_PIN } from './../actions/pin_actions';
import { RECEIVE_USER } from './../actions/user_actions';

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
    case REMOVE_BOARD:
      const newState = merge({}, state);
      delete newState.currentUser.boards[action.id];
      return newState;
    case RECEIVE_SINGLE_BOARD:
      if (action.user.id === state.currentUser.id) {
        return merge({}, state, {currentUser: {boards: {[action.board.id]: {id: action.board.id, name: action.board.name}}}});
      } else {
        return merge({}, state);
      }
    case REMOVE_PIN:
      const newerState = merge({}, state);
      delete newerState.currentUser.pins[action.pin.id];
      return newerState;
    // case RECEIVE_SINGLE_PIN:
    //   return merge({}, state, {currentUser: {pins: {[action.pin.id]: action.pin}}});
    case RECEIVE_USER:
      if (action.user.id === state.currentUser.id) {
        return merge({}, {currentUser: action.user});
      }
    default:
      return state;
  }
};

export default sessionReducer;

import { RECEIVE_SINGLE_BOARD,
  REMOVE_BOARD,
  RECEIVE_BOARD_ERRORS,
  CLEAR_ERRORS } from './../actions/board_actions';
import { REMOVE_PIN, RECEIVE_SINGLE_PIN } from './../actions/pin_actions';
import { merge } from 'lodash';

export const defaultState = Object.freeze({
  boards: {},
  errors: []
});

const boardsReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SINGLE_BOARD:
      const board = action.board;
      return merge({}, state, {boards: {[board.id]: board}}, {errors: []});
    case REMOVE_BOARD:
      const newState = merge({}, state);
      delete newState.boards[action.id];
      return newState;
    case RECEIVE_SINGLE_PIN:
      const newestState = merge({}, state);
      if (newestState.boards && newestState.boards[action.pin.board_id]) {
        newestState.boards[action.pin.board_id].pins = action.pin.board_pins
      }
      return newestState;
    case REMOVE_PIN:
      const newerState = merge({}, state);
      if (newerState.boards && newerState.boards[action.pin.board_id]) {
        newerState.boards[action.pin.board_id].pins = action.pin.board_pins
      }
      return newerState;
    case RECEIVE_BOARD_ERRORS:
      const errors = action.errors;
      return merge({}, state, {errors});
    case CLEAR_ERRORS:
      return merge({}, {boards: state.boards}, {errors: []});
    default:
      return state;
  }
};

export default boardsReducer;

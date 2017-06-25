import { RECEIVE_SINGLE_BOARD,
  REMOVE_BOARD,
  RECEIVE_BOARD_ERRORS,
  CLEAR_ERRORS } from './../actions/board_actions';
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
      return merge({}, state, {boards: {[board.id]: board}});
    case REMOVE_BOARD:
      const newState = merge({}, state);
      debugger
      delete newState.boards.boards[action.name];
      return newState;
    case RECEIVE_BOARD_ERRORS:
      const errors = action.errors;
      return merge({}, state, {errors});
    case CLEAR_ERRORS:
      return merge({}, state, {errors: []});
    default:
      return state;
  }
};

export default boardsReducer;

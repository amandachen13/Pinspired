import { RECEIVE_USER } from './../actions/user_actions';
import { RECEIVE_SINGLE_BOARD, REMOVE_BOARD } from './../actions/board_actions';
import { REMOVE_PIN, RECEIVE_PIN } from './../actions/pin_actions';
import { merge } from 'lodash';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = merge({}, state);
  switch(action.type) {
    case RECEIVE_USER:
      const user = action.user;
      return merge({}, state, {[user.username]: user});
    case RECEIVE_SINGLE_BOARD:
      //debugger
      const creator = action.user;
      return merge({}, state, {[creator.username]: creator});
    case REMOVE_BOARD:
      delete newState[action.username].boards[action.id];
      return newState;
    case REMOVE_PIN:
      if (newState[action.pin.creator.username].pins) {
        delete newState[action.pin.creator.username].pins[action.pin.id];
        return newState;
      }
    case RECEIVE_PIN:
      if (newState[action.pin.creator.username].pins) {
        newState[action.pin.creator.username].pins[action.pin.id] = action.pin;
        return newState;
      }
    default:
      return state;
  }
};

export default usersReducer;

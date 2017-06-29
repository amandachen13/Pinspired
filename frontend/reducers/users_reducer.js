import { RECEIVE_USER } from './../actions/user_actions';
import { RECEIVE_SINGLE_BOARD } from './../actions/board_actions';
import { REMOVE_PIN } from './../actions/pin_actions';
import { merge } from 'lodash';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  debugger
  switch(action.type) {
    case RECEIVE_USER:
      const user = action.user;
      return merge({}, state, {[user.username]: user})
    case RECEIVE_SINGLE_BOARD:
      const creator = action.user;
      return merge({}, state, {[creator.username]: creator})
    case REMOVE_PIN:
    debugger
      const newState = merge({}, state);
      delete newState[action.pin.creator.username].pins[action.pin.id]
      return newState;
    default:
      return state;
  }
};

export default usersReducer;

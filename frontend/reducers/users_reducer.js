import { RECEIVE_USER } from './../actions/user_actions';
import { RECEIVE_SINGLE_BOARD, REMOVE_BOARD } from './../actions/board_actions';
import { REMOVE_PIN, RECEIVE_SINGLE_PIN } from './../actions/pin_actions';
import { RECEIVE_FOLLOW, REMOVE_FOLLOW } from './../actions/follow_actions';
import { merge } from 'lodash';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = merge({}, state);
  switch(action.type) {
    case RECEIVE_USER:
      const user = action.user;
      delete newState[user.username];
      return merge({}, newState, {[user.username]: user});
    case RECEIVE_SINGLE_BOARD:
      const creator = action.user;
      return merge({}, state, {[creator.username]: creator});
    case REMOVE_BOARD:
      delete newState[action.username].boards[action.id];
      return newState;
    case REMOVE_PIN:
      if (newState[action.pin.creator.username] && newState[action.pin.creator.username].pins) {
        delete newState[action.pin.creator.username].pins[action.pin.id];
        return newState;
      }
    case RECEIVE_SINGLE_PIN:
      if (newState[action.pin.creator.username] && newState[action.pin.creator.username].pins) {
        newState[action.pin.creator.username].pins[action.pin.id] = action.pin;
        return newState;
      }
    // case RECEIVE_FOLLOW:
    // case REMOVE_FOLLOW:
    //   delete newState[action.follow.following].followers[action.follow.follower_id];
    //   return newState;
    default:
      return state;
  }
};

export default usersReducer;

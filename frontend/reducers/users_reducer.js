import { RECEIVE_USER } from './../actions/user_actions';
import { RECEIVE_SINGLE_BOARD } from './../actions/board_actions';
import { merge } from 'lodash';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_USER:
      const user = action.user;
      return merge({}, state, {[user.username]: user})
    case RECEIVE_SINGLE_BOARD:
      const creator = action.user;
      return merge({}, state, {[creator.username]: creator})
    default:
      return state;
  }
};

export default usersReducer;

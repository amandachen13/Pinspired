import { OPEN, CLOSE, RECEIVE_COMPONENT } from './../actions/modal_actions';
import { merge } from 'lodash';

const nullState = Object.freeze({
  isOpen: false,
  component: null
});

const modalReducer = (state = nullState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case OPEN:
      return merge({}, state, {isOpen: true, component: action.component});
    case CLOSE:
      return merge({}, state, {isOpen: false, component: null});
    case RECEIVE_COMPONENT:
      return merge({}, state, { component });
    default:
      return state;
  }
};

export default modalReducer;

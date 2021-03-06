import { RECEIVE_PINS,
  RECEIVE_SINGLE_PIN,
  REMOVE_PIN,
  RECEIVE_PIN_ERRORS,
  CLEAR_ERRORS } from './../actions/pin_actions';
import { RECEIVE_SINGLE_BOARD } from './../actions/board_actions';
import { merge } from 'lodash';

export const defaultState = Object.freeze({
  pins: {},
  errors: []
});

const pinsReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_PINS:
      const pins = action.pins;
      return merge({}, defaultState, {pins});
    case RECEIVE_SINGLE_PIN:
      const pin = action.pin;
      const pin_id = action.pin.id;
      return merge({}, state, {pins: {[pin_id]: pin}});
    case REMOVE_PIN:
      const newState = merge({}, state);
      delete newState.pins[action.id];
      return newState;
    case RECEIVE_SINGLE_BOARD:
      const boardPins = action.pins
      return merge({}, state, {pins: boardPins})
    case RECEIVE_PIN_ERRORS:
      const errors = action.errors;
      return merge({}, state, {errors});
    case CLEAR_ERRORS:
      return merge({}, {pins: state.pins}, {errors: []});
    default:
      return state;
  }
};

export default pinsReducer;

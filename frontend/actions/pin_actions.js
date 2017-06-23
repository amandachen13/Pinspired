import * as APIUtil from './../util/pin_api_util';

export const RECEIVE_PINS = "RECEIVE_ALL_PINS";
export const RECEIVE_SINGLE_PIN = "RECEIVE_SINGLE_PIN";
export const REMOVE_PIN = "REMOVE_PIN";
export const RECEIVE_PIN_ERRORS = "RECEIVE_PIN_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

export const receivePins = pins => ({
  type: RECEIVE_PINS,
  pins
});

export const receiveSinglePin = pin => ({
  type: RECEIVE_SINGLE_PIN,
  pin
});

export const removePin = id => ({
  type: REMOVE_PIN,
  id
})

export const receivePinErrors = errors => ({
  type: RECEIVE_PIN_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});

export const requestAllPins = () => dispatch => (
  APIUtil.fetchAllPins()
    .then(pins => dispatch(receivePins(pins)))
);

export const requestSinglePin = id => dispatch => (
  APIUtil.fetchSinglePin(id)
    .then(pin => dispatch(receiveSinglePin(pin)))
);

export const createPin = pin => dispatch => (
  APIUtil.createPin(pin)
    .then(pin => (
      dispatch(receiveSinglePin(pin))
    ), err => (
      dispatch(receivePinErrors(err.responseJSON))
    ))
);

export const editPin = pin => dispatch => (
  APIUtil.updatePin(pin)
    .then(pin => (
      dispatch(receiveSinglePin(pin))
    ), err => (
      dispatch(receivePinErrors(err.responseJSON))
    ))
);

export const deletePin = id => dispatch => (
  APIUtil.deletePin(id)
    .then(id => dispatch(removePin(id)))
);

import * as APIUtil from './../util/board_api_util';

export const RECEIVE_SINGLE_BOARD = "RECEIVE_SINGLE_BOARD";
export const REMOVE_BOARD = "REMOVE_BOARD";
export const RECEIVE_BOARD_ERRORS = "RECEIVE_BOARD_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

export const receiveSingleBoard = response => ({
  type: RECEIVE_SINGLE_BOARD,
  board: response.board,
  pins: response.pins,
  user: response.creator
});

export const removeBoard = array => ({
  type: REMOVE_BOARD,
  id: array[0],
  username: array[1]
})

export const receiveBoardErrors = errors => ({
  type: RECEIVE_BOARD_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});

export const requestSingleBoard = id => dispatch => (
  APIUtil.fetchBoard(id)
    .then(response => dispatch(receiveSingleBoard(response)))
);

export const createBoard = board => dispatch => (
  APIUtil.createBoard(board)
    .then(board => (
      dispatch(receiveSingleBoard(board))
    ), err => (
      dispatch(receiveBoardErrors(err.responseJSON))
    ))
);

export const editBoard = board => dispatch => (
  APIUtil.updateBoard(board)
    .then(board => (
      dispatch(receiveSingleBoard(board))
    ), err => (
      dispatch(receiveBoardErrors(err.responseJSON))
    ))
);

export const deleteBoard = id => dispatch => (
  APIUtil.deleteBoard(id)
    .then(id => dispatch(removeBoard(id)))
);

import * as APIUtil from './../util/board_api_util';

export const RECEIVE_SINGLE_BOARD = "RECEIVE_SINGLE_BOARD";
export const REMOVE_BOARD = "REMOVE_BOARD";
export const RECEIVE_BOARD_ERRORS = "RECEIVE_BOARD_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

export const receiveSingleBoard = board => ({
  type: RECEIVE_SINGLE_BOARD,
  board
});

export const removeBoard = name => ({
  type: REMOVE_BOARD,
  name
})

export const receiveBoardErrors = errors => ({
  type: RECEIVE_BOARD_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});

export const requestSingleBoard = name => dispatch => (
  APIUtil.fetchBoard(name)
    .then(board => dispatch(receiveSingleBoard(board)))
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

export const deleteBoard = name => dispatch => (
  APIUtil.deleteBoard(name)
    .then(name => dispatch(removeBoard(name)))
);

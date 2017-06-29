import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root'

// TESTING
// import { signup, login, logout } from './actions/session_actions';
import { requestAllPins, requestSinglePin, createPin, editPin, deletePin } from './actions/pin_actions';
import { createBoard, editBoard, deleteBoard, requestSingleBoard } from './actions/board_actions';
import { requestUser } from './actions/user_actions';
// window.signup = signup;
// window.login = login;
// window.logout = logout;
// window.requestAllPins = requestAllPins;
// window.requestSinglePin = requestSinglePin;
window.createPin = createPin;
window.editPin = editPin;
// window.deletePin = deletePin;
window.createBoard = createBoard;
window.editBoard = editBoard;
window.deleteBoard = deleteBoard;
window.requestUser = requestUser;
window.requestSingleBoard = requestSingleBoard;
//

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  // TESTING
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  //
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});

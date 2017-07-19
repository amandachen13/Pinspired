import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import pinsReducer from './pins_reducer';
import boardsReducer from './boards_reducer';
import usersReducer from './users_reducer';
import modalReducer from './modal_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  modal: modalReducer,
  users: usersReducer,
  pins: pinsReducer,
  boards: boardsReducer
});

export default rootReducer;

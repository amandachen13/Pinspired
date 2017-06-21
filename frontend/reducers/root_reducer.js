import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
// import signupReducer from './signup_reducer';

const rootReducer = combineReducers({
  // signup: signupReducer,
  session: sessionReducer
});

export default rootReducer;
